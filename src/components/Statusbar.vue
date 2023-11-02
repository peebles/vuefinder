<template>
  <div class="p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none">
    <div class="flex leading-5 items-center">
      <div class="mx-2" :aria-label="t('Storage')" data-microtip-position="top-right" role="tooltip">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      </div>
      <select v-if="!hideAdapterSelection" v-model="adapter" @change="handleStorageSelect" class="py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8">
        <option v-for="storage in data.storages" :value="storage">
          {{ storage }}
        </option>
      </select>

      <div class="ml-3">
        <span v-if="searchQuery.length">{{ data.files.length }} items found. </span>
        <span class="ml-1">{{ selectedItemCount > 0 ? selectedItemCount + ' ' + t('item(s) selected.') : '' }}</span>
      </div>
    </div>

    <div class="flex leading-5 items-center">
      <select v-if="!hideLanguageSelection" v-model="locale" @change="changeLocale($event.target.value)"
              class="py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3">
        <option value="" disabled>{{ t('Language') }}</option>
        <option value="en">English</option>
        <option value="fr">French (Français)</option>
        <option value="de">German (Deutsch)</option>
        <option value="tr">Hebrew (עִברִית)</option>
        <option value="hi">Hindi (हिंदी)</option>
        <option value="fa">Persian (فارسی)</option>
        <option value="ru">Russian (Pусский)</option>
        <option value="sv">Swedish (Svenska)</option>
        <option value="tr">Turkish (Türkçe)</option>
      </select>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VFStatusbar'
};
</script>

<script setup>
import {inject, ref} from 'vue';
import {version} from './../../package.json';

const props = defineProps({
  data: Object,
});

const emitter = inject('emitter');
const {getStore, setStore} = inject('storage');
const selectedItemCount = ref(0);
const adapter = inject('adapter');

const hideAdapterSelection = inject('hideAdapterSelection');
const hideLanguageSelection = inject('hideLanguageSelection');

const {t, changeLocale} = inject('i18n');

const locale = ref(getStore('locale', ''))

const handleStorageSelect = () => {
  emitter.emit('vf-search-exit');
  emitter.emit('vf-fetch', {params:{q: 'index', adapter: adapter.value}});
  setStore('adapter', adapter.value)
};

emitter.on('vf-nodes-selected', (items) => {
  selectedItemCount.value = items.length;
})

const searchQuery = ref('');

emitter.on('vf-search-query', ({newQuery}) => {
  searchQuery.value = newQuery;
});

</script>

