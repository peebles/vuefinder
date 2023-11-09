import { ref as O, watch as Vt, inject as L, computed as et, openBlock as w, createElementBlock as C, unref as x, createCommentVNode as U, normalizeClass as he, createElementVNode as p, createTextVNode as te, toDisplayString as E, withDirectives as be, vShow as mt, createVNode as Ee, TransitionGroup as Po, withCtx as F, Fragment as ie, renderList as ye, reactive as Lt, onMounted as Me, onUpdated as No, withModifiers as We, nextTick as Bt, isRef as ls, vModelSelect as Rr, createStaticVNode as jo, customRef as Ro, withKeys as ot, vModelText as nt, normalizeStyle as cs, provide as ve, createBlock as q, resolveDynamicComponent as Vo, renderSlot as Qt } from "vue";
import dt from "plupload";
var as;
const Pt = (as = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : as.getAttribute("content"), Nt = (r, { method: e = "get", params: s = {}, json: o = !0, signal: l = null }) => {
  const i = { method: e };
  if (i.signal = l, i.credentials = "include", e == "get")
    r += "?" + new URLSearchParams(s), r = r.replace(/\+/g, "%20");
  else {
    i.headers = {}, Pt && (i.headers["X-CSRF-Token"] = Pt);
    let d = new FormData();
    for (const [v, a] of Object.entries(s))
      d.append(v, a);
    i.body = d;
  }
  return fetch(r, i).then((d) => d.ok ? o ? d.json() : d.text() : d.json().then(Promise.reject.bind(Promise)));
};
function Bo(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(e, s) {
    var o = r.get(e);
    o ? o.push(s) : r.set(e, [s]);
  }, off: function(e, s) {
    var o = r.get(e);
    o && (s ? o.splice(o.indexOf(s) >>> 0, 1) : r.set(e, []));
  }, emit: function(e, s) {
    var o = r.get(e);
    o && o.slice().map(function(l) {
      l(s);
    }), (o = r.get("*")) && o.slice().map(function(l) {
      l(e, s);
    });
  } };
}
function er(r) {
  let e = localStorage.getItem(r + "_storage");
  const s = O(JSON.parse(e));
  Vt(s, o);
  function o() {
    s.value === null || s.value === "" ? localStorage.removeItem(r + "_storage") : localStorage.setItem(r + "_storage", JSON.stringify(s.value));
  }
  function l(v, a) {
    s.value = Object.assign({ ...s.value }, { [v]: a });
  }
  function i() {
    s.value = null;
  }
  return { getStore: (v, a = null) => s.value === null || s.value === "" ? a : s.value.hasOwnProperty(v) ? s.value[v] : a, setStore: l, clearStore: i };
}
const Vr = O("");
function ze() {
  function r(e) {
    Vr.value = e;
  }
  return { apiUrl: Vr, setApiUrl: r };
}
const zo = { class: "border-neutral-300 flex justify-between items-center py-1 text-sm" }, Ho = {
  key: 0,
  class: "flex text-center"
}, Uo = ["aria-label"], Ko = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), Yo = [
  Ko
], Wo = ["aria-label"], Xo = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), Zo = [
  Xo
], Fo = ["aria-label"], qo = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Go = [
  qo
], Jo = ["aria-label"], Qo = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  })
], -1), en = [
  Qo
], tn = {
  key: 1,
  class: "flex text-center"
}, rn = { class: "pl-2" }, sn = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, on = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, nn = /* @__PURE__ */ p("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), an = /* @__PURE__ */ p("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), ln = [
  nn,
  an
], cn = { class: "flex text-center items-center justify-end" }, un = ["aria-label"], dn = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), hn = [
  dn
], fn = ["aria-label"], pn = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, gn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, mn = {
  name: "VFToolbar"
}, vn = /* @__PURE__ */ Object.assign(mn, {
  props: {
    data: Object
  },
  setup(r) {
    const e = L("emitter"), s = L("userRole"), o = L("usePropDarkMode"), l = L("uploadOverrideEvent"), { getStore: i, setStore: d } = L("storage"), { t: v } = L("i18n"), a = O(i("viewport", "grid")), g = O([]);
    O(i("full-screen", !1));
    const f = O("");
    e.on("vf-search-query", ({ newQuery: D }) => {
      f.value = D;
    });
    const b = L("loadingState"), S = () => b.value;
    e.on("vf-nodes-selected", (D) => {
      g.value = D;
    }), e.on("vf-view-toggle", (D) => {
      d("viewport", D), a.value = D;
    });
    const I = et(() => s === "admin"), T = et(() => s === "ae");
    return (D, M) => (w(), C("div", zo, [
      f.value.length ? (w(), C("div", tn, [
        p("div", rn, [
          te(E(x(v)("Search results for")) + " ", 1),
          p("span", sn, E(f.value), 1)
        ]),
        S() ? (w(), C("svg", on, ln)) : U("", !0)
      ])) : (w(), C("div", Ho, [
        I.value || T.value ? (w(), C("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(v)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: M[0] || (M[0] = (R) => x(e).emit("vf-modal-show", { type: "new-folder", items: g.value }))
        }, Yo, 8, Uo)) : U("", !0),
        I.value || T.value ? (w(), C("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": x(v)("Edit"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[1] || (M[1] = (R) => x(e).emit("ca-edit", { type: "edit", items: g.value, current: r.data }))
        }, [
          (w(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: he([g.value.length > 0 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Zo, 2))
        ], 8, Wo)) : U("", !0),
        I.value || T.value ? (w(), C("div", {
          key: 2,
          class: "mx-1.5",
          "aria-label": x(v)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[2] || (M[2] = (R) => !g.value.length || x(e).emit("vf-modal-show", { type: "delete", items: g.value }))
        }, [
          (w(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: he([g.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Go, 2))
        ], 8, Fo)) : U("", !0),
        I.value || T.value ? (w(), C("div", {
          key: 3,
          class: "mx-1.5",
          "aria-label": x(v)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[3] || (M[3] = (R) => x(e).emit(x(l) ? x(l) : "vf-modal-show", { type: "upload", items: g.value, current: r.data }))
        }, en, 8, Jo)) : U("", !0)
      ])),
      p("div", cn, [
        be(p("div", {
          class: "mx-1.5",
          "aria-label": x(v)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (w(), C("svg", {
            onClick: M[4] || (M[4] = (R) => x(e).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, hn))
        ], 8, un), [
          [mt, !x(o)]
        ]),
        p("div", {
          class: "mx-1.5",
          "aria-label": x(v)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: M[5] || (M[5] = (R) => f.value.length || x(e).emit("vf-view-toggle", a.value == "list" ? "grid" : "list"))
        }, [
          (w(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: he([f.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            a.value == "grid" ? (w(), C("path", pn)) : U("", !0),
            a.value == "list" ? (w(), C("path", gn)) : U("", !0)
          ], 2))
        ], 8, fn)
      ])
    ]));
  }
});
var bn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var us = { exports: {} };
(function(r, e) {
  (function(s, o) {
    r.exports = o();
  })(bn, function() {
    function s(c, u) {
      var t = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (t != null) {
        var m, n, h, y, _ = [], $ = !0, H = !1;
        try {
          if (h = (t = t.call(c)).next, u === 0) {
            if (Object(t) !== t)
              return;
            $ = !1;
          } else
            for (; !($ = (m = h.call(t)).done) && (_.push(m.value), _.length !== u); $ = !0)
              ;
        } catch (Z) {
          H = !0, n = Z;
        } finally {
          try {
            if (!$ && t.return != null && (y = t.return(), Object(y) !== y))
              return;
          } finally {
            if (H)
              throw n;
          }
        }
        return _;
      }
    }
    function o(c, u) {
      var t = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var m = Object.getOwnPropertySymbols(c);
        u && (m = m.filter(function(n) {
          return Object.getOwnPropertyDescriptor(c, n).enumerable;
        })), t.push.apply(t, m);
      }
      return t;
    }
    function l(c) {
      for (var u = 1; u < arguments.length; u++) {
        var t = arguments[u] != null ? arguments[u] : {};
        u % 2 ? o(Object(t), !0).forEach(function(m) {
          a(c, m, t[m]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(m) {
          Object.defineProperty(c, m, Object.getOwnPropertyDescriptor(t, m));
        });
      }
      return c;
    }
    function i(c, u) {
      if (!(c instanceof u))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(c, u) {
      for (var t = 0; t < u.length; t++) {
        var m = u[t];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(c, z(m.key), m);
      }
    }
    function v(c, u, t) {
      return u && d(c.prototype, u), t && d(c, t), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function a(c, u, t) {
      return u = z(u), u in c ? Object.defineProperty(c, u, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : c[u] = t, c;
    }
    function g(c, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Super expression must either be null or a function");
      c.prototype = Object.create(u && u.prototype, {
        constructor: {
          value: c,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(c, "prototype", {
        writable: !1
      }), u && b(c, u);
    }
    function f(c) {
      return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, f(c);
    }
    function b(c, u) {
      return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, n) {
        return m.__proto__ = n, m;
      }, b(c, u);
    }
    function S() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function I(c, u, t) {
      return S() ? I = Reflect.construct.bind() : I = function(n, h, y) {
        var _ = [null];
        _.push.apply(_, h);
        var $ = Function.bind.apply(n, _), H = new $();
        return y && b(H, y.prototype), H;
      }, I.apply(null, arguments);
    }
    function T(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function D(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return D = function(m) {
        if (m === null || !T(m))
          return m;
        if (typeof m != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(m))
            return u.get(m);
          u.set(m, n);
        }
        function n() {
          return I(m, arguments, f(this).constructor);
        }
        return n.prototype = Object.create(m.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(n, m);
      }, D(c);
    }
    function M(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function R(c, u) {
      if (u && (typeof u == "object" || typeof u == "function"))
        return u;
      if (u !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return M(c);
    }
    function V(c) {
      var u = S();
      return function() {
        var m = f(c), n;
        if (u) {
          var h = f(this).constructor;
          n = Reflect.construct(m, arguments, h);
        } else
          n = m.apply(this, arguments);
        return R(this, n);
      };
    }
    function A(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = f(c), c !== null); )
        ;
      return c;
    }
    function B() {
      return typeof Reflect < "u" && Reflect.get ? B = Reflect.get.bind() : B = function(u, t, m) {
        var n = A(u, t);
        if (n) {
          var h = Object.getOwnPropertyDescriptor(n, t);
          return h.get ? h.get.call(arguments.length < 3 ? u : m) : h.value;
        }
      }, B.apply(this, arguments);
    }
    function X(c, u) {
      return G(c) || s(c, u) || re(c, u) || pe();
    }
    function k(c) {
      return j(c) || oe(c) || re(c) || Se();
    }
    function j(c) {
      if (Array.isArray(c))
        return ce(c);
    }
    function G(c) {
      if (Array.isArray(c))
        return c;
    }
    function oe(c) {
      if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null)
        return Array.from(c);
    }
    function re(c, u) {
      if (c) {
        if (typeof c == "string")
          return ce(c, u);
        var t = Object.prototype.toString.call(c).slice(8, -1);
        if (t === "Object" && c.constructor && (t = c.constructor.name), t === "Map" || t === "Set")
          return Array.from(c);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
          return ce(c, u);
      }
    }
    function ce(c, u) {
      (u == null || u > c.length) && (u = c.length);
      for (var t = 0, m = new Array(u); t < u; t++)
        m[t] = c[t];
      return m;
    }
    function Se() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function pe() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function ge(c, u) {
      var t = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (!t) {
        if (Array.isArray(c) || (t = re(c)) || u && c && typeof c.length == "number") {
          t && (c = t);
          var m = 0, n = function() {
          };
          return {
            s: n,
            n: function() {
              return m >= c.length ? {
                done: !0
              } : {
                done: !1,
                value: c[m++]
              };
            },
            e: function($) {
              throw $;
            },
            f: n
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var h = !0, y = !1, _;
      return {
        s: function() {
          t = t.call(c);
        },
        n: function() {
          var $ = t.next();
          return h = $.done, $;
        },
        e: function($) {
          y = !0, _ = $;
        },
        f: function() {
          try {
            !h && t.return != null && t.return();
          } finally {
            if (y)
              throw _;
          }
        }
      };
    }
    function P(c, u) {
      if (typeof c != "object" || c === null)
        return c;
      var t = c[Symbol.toPrimitive];
      if (t !== void 0) {
        var m = t.call(c, u || "default");
        if (typeof m != "object")
          return m;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (u === "string" ? String : Number)(c);
    }
    function z(c) {
      var u = P(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var N = function(u, t, m) {
      var n = u.x, h = u.y, y = m.x, _ = m.y, $ = {
        "+": {
          x: n + y,
          y: h + _
        },
        "-": {
          x: n - y,
          y: h - _
        },
        "*": {
          x: n * y,
          y: h * _
        },
        "/": {
          x: n / y,
          y: h / _
        }
      };
      return $[t];
    }, ee = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, K = function(u) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: u.x,
        top: u.y,
        right: u.x,
        bottom: u.y,
        width: t,
        height: t
      };
    }, xe = function(u) {
      return {
        x: u,
        y: u
      };
    }, we = function(c, u) {
      var t = u;
      window.addEventListener("resize", t), window.addEventListener("scroll", t);
      var m = new MutationObserver(t);
      c.forEach(function(h, y) {
        m.observe(h, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var n = function() {
        return go(m, t);
      };
      return {
        observer: m,
        callback: t,
        cleanup: n
      };
    }, Dt = function(c) {
      var u = Mt(c);
      return u.x || u.y ? !0 : c instanceof Document ? c.body ? !!(c.body.scrollTop = 1) : !!(c.documentElement.scrollTop = 1) : !!(c.scrollTop = 1);
    }, Ct = function() {
      var c = document.createElement("div");
      return c.style.position = "fixed", c.style.overflow = "hidden", c.style.pointerEvents = "none", c.style.zIndex = "999999999999999999", c;
    }, Wt = function(c) {
      var u = document.createElement("div");
      return u.style.position = "absolute", c || (u.style.background = "rgba(0, 175, 255, 0.2)", u.style.border = "1px solid rgba(0, 175, 255, 0.8)", u.style.display = "none", u.style.pointerEvents = "none"), u;
    }, Et = function(c, u) {
      var t;
      return function() {
        for (var m = arguments.length, n = new Array(m), h = 0; h < m; h++)
          n[h] = arguments[h];
        var y = function() {
          t = null, c.apply(void 0, n);
        };
        clearTimeout(t), t = setTimeout(y, u);
      };
    }, Xt = function() {
      var c, u, t, m;
      return {
        y: ((c = document.body) === null || c === void 0 ? void 0 : c.scrollTop) || ((u = document.documentElement) === null || u === void 0 ? void 0 : u.scrollTop) || 0,
        x: ((t = document.body) === null || t === void 0 ? void 0 : t.scrollLeft) || ((m = document.documentElement) === null || m === void 0 ? void 0 : m.scrollLeft) || 0
      };
    }, $r = function(c) {
      var u = function t(m) {
        var n, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (n = m[h]) === null || n === void 0 ? void 0 : n.parentNode;
        return y ? (m.push(y), h++, t(m, h)) : m;
      };
      return u([c]);
    }, so = function(c, u) {
      if (c instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var t = c.getBoundingClientRect();
      return {
        top: t.top,
        left: t.left,
        bottom: t.bottom,
        right: t.right,
        width: (c.clientWidth || t.width) * u,
        height: (c.clientHeight || t.height) * u
      };
    }, Tr = function(c, u) {
      var t = {
        top: Number.POSITIVE_INFINITY,
        left: Number.POSITIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        width: Number.NEGATIVE_INFINITY,
        height: Number.NEGATIVE_INFINITY
      };
      return Ne(c).forEach(function(m) {
        var n = u.getRect(m);
        t.top = Math.min(t.top, n.top), t.left = Math.min(t.left, n.left), t.bottom = Math.max(t.bottom, n.bottom), t.right = Math.max(t.right, n.right);
      }), t.height = t.bottom - t.top, t.width = t.right - t.left, t;
    }, Mt = function(c) {
      return !c || c instanceof Document ? Xt() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : Xt().x,
        y: c.scrollTop >= 0 ? c.scrollTop : Xt().y
      };
    }, Ar = function(c) {
      var u = c.elementRect, t = c.containerRect, m = c.tolerance, n = m === void 0 ? {
        x: 0,
        y: 0
      } : m, h = [];
      return u.top - n.y < t.top && h.push("top"), u.left - n.x < t.left && h.push("left"), u.bottom + n.y > t.bottom && h.push("bottom"), u.right + n.y > t.right && h.push("right"), /** @type {DSEdges} */
      h;
    }, oo = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, no = function(c) {
      var u = c.scrollAmount, t = c.initialPointerPos, m = c.pointerPos, n = {};
      return m.x > t.x - u.x ? (n.left = t.x - u.x, n.width = m.x - t.x + u.x) : (n.left = m.x, n.width = t.x - m.x - u.x), m.y > t.y - u.y ? (n.top = t.y - u.y, n.height = m.y - t.y + u.y) : (n.top = m.y, n.height = t.y - m.y - u.y), n;
    }, Ir = function(u) {
      var t = {
        x: 0,
        y: 0
      }, m = window.getComputedStyle(u);
      if (!m.transform || m.transform === "none")
        return t;
      if (m.transform.indexOf("3d") >= 0) {
        var n = m.transform.trim().match(/matrix3d\((.*?)\)/);
        if (n && n.length) {
          var h, y = (h = n[1]) === null || h === void 0 ? void 0 : h.split(",");
          t.x = parseInt(y[12]) || 0, t.y = parseInt(y[13]) || 0;
        }
        return t;
      }
      var _ = m.transform.trim().match(/matrix\((.*?)\)/);
      if (_ && _.length) {
        var $, H = ($ = _[1]) === null || $ === void 0 ? void 0 : $.split(",");
        t.x = parseInt(H[4]) || 0, t.y = parseInt(H[5]) || 0;
      }
      return t;
    }, io = function(u) {
      var t = u.style.transform;
      if (!t || t.indexOf("translate") < 0)
        return Ir(u);
      var m = {
        x: 0,
        y: 0
      }, n = t.trim().match(/translate[3dD]*?\(.*?\)/);
      if (n) {
        var h, y = (h = n[0]) === null || h === void 0 ? void 0 : h.split("(");
        if (y) {
          var _, $ = (_ = y[1]) === null || _ === void 0 ? void 0 : _.split(",");
          m.x = parseInt($[0]) || 0, m.y = parseInt($[1]) || 0;
        }
      }
      return !m.x && !m.x ? Ir(u) : m;
    }, ao = function(u) {
      var t = u.style, m = {
        x: parseInt(t.left) || 0,
        y: parseInt(t.top) || 0
      };
      if (!m.x && !m.x) {
        var n = window.getComputedStyle(u);
        return {
          x: parseInt(n.left) || 0,
          y: parseInt(n.top) || 0
        };
      }
      return m;
    }, lo = function(c, u) {
      return u ? io(c) : ao(c);
    }, co = function(c) {
      var u = c.element, t = c.edges, m = c.elementRect, n = c.containerRect, h = c.elementPos, y = c.useTransform;
      t.includes("top") && lt(u, {
        y: h.y + n.top - m.top,
        x: h.x
      }, y), t.includes("left") && lt(u, {
        y: h.y,
        x: h.x + n.left - m.left
      }, y), t.includes("bottom") && lt(u, {
        y: h.y + n.bottom - m.bottom,
        x: h.x
      }, y), t.includes("right") && lt(u, {
        y: h.y,
        x: h.x + n.right - m.right
      }, y);
    }, Or = function(c) {
      var u = c.computedStyle, t = c.node, m = u.position, n = m === "absolute" || m === "relative" || m === "fixed";
      !(t instanceof Document) && !n && (t.style.position = "relative");
    }, uo = function(c) {
      var u = c.shiftKey, t = c.keyboardDragSpeed, m = c.zoom, n = c.key, h = c.dragKeys, y = c.scrollDiff, _ = c.canScroll, $ = c.scrollCallback, H = {
        x: 0,
        y: 0
      }, Z = u ? t * 4 * m : t * m;
      return h.left.includes(n) && (H.x = y.x || -Z, !u && !y.x && _ && $(["left"], t)), h.right.includes(n) && (H.x = y.x || Z, !u && !y.x && _ && $(["right"], t)), h.up.includes(n) && (H.y = y.y || -Z, !u && !y.y && _ && $(["top"], t)), h.down.includes(n) && (H.y = y.y || Z, !u && !y.y && _ && $(["bottom"], t)), H;
    }, ho = function(c) {
      var u = c.element, t = c.force, m = c.multiSelectionToggle, n = c.SelectedSet, h = c.hoverClassName;
      u.classList.contains(h) && !t || (n.has(u) ? m && n.delete(u) : n.add(u), u.classList.add(h));
    }, fo = function(c) {
      var u = c.element, t = c.force, m = c.SelectedSet, n = c.PrevSelectedSet, h = c.hoverClassName;
      if (!u.classList.contains(h) && !t)
        return !1;
      var y = m.has(u), _ = n.has(u);
      y && !_ ? m.delete(u) : !y && _ && m.add(u), u.classList.remove(h);
    }, at = function(u, t, m) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(t, '".'));
    }, W = function(u, t, m, n) {
      if (t === void 0)
        return m ? a({}, u, n) : {};
      if (t === null)
        return a({}, u, null);
      var h = !0, y = !1, _ = typeof n == "string";
      _ && (h = typeof t == "string" || t instanceof String), _ && !h && (y = !0, at(u, "string"));
      var $ = !Number.isNaN(n) && typeof n == "number";
      $ && (h = !Number.isNaN(t) && typeof t == "number"), $ && !h && (y = !0, at(u, "number"));
      var H = Object.prototype.toString.call(n) === "[object Object]";
      H && (h = Object.prototype.toString.call(t) === "[object Object]"), H && !h && (y = !0, at(u, "object"));
      var Z = typeof n == "boolean";
      Z && (h = typeof t == "boolean"), Z && !h && (y = !0, at(u, "boolean"));
      var ae = Array.isArray(n);
      ae && (h = Array.isArray(t)), ae && !h && (y = !0, at(u, "array"));
      var ke = y || m;
      return u === "dragKeys" && h ? a({}, u, Object.assign(n, t)) : u === "dragKeys" && !h ? ke ? a({}, u, n) : {} : (u === "dropZones" && h && new Set(t.map(function(De) {
        return De.id;
      })).size !== t.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), h ? a({}, u, t) : ke ? a({}, u, n) : {});
    }, po = function(c, u) {
      return l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l(l({}, W("area", c.area, u, document)), W("selectables", c.selectables, u, null)), W("autoScrollSpeed", c.autoScrollSpeed, u, 5)), W("overflowTolerance", c.overflowTolerance, u, {
        x: 25,
        y: 25
      })), W("zoom", c.zoom, u, 1)), W("customStyles", c.customStyles, u, !1)), W("multiSelectMode", c.multiSelectMode, u, !1)), W("multiSelectToggling", c.multiSelectToggling, u, !0)), W("multiSelectKeys", c.multiSelectKeys, u, ["Control", "Shift", "Meta"])), W("selector", c.selector, u, null)), W("selectionThreshold", c.selectionThreshold, u, 0)), W("draggability", c.draggability, u, !0)), W("immediateDrag", c.immediateDrag, u, !0)), W("keyboardDrag", c.keyboardDrag, u, !0)), W("dragKeys", c.dragKeys, u, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), W("keyboardDragSpeed", c.keyboardDragSpeed, u, 10)), W("useTransform", c.useTransform, u, !0)), W("refreshMemoryRate", c.refreshMemoryRate, u, 80)), W("dropZones", c.dropZones, u, [])), W("dropInsideThreshold", c.dropInsideThreshold, u, 1)), W("dropTargetThreshold", c.dropTargetThreshold, u, 0)), W("usePointerEvents", c.usePointerEvents, u, !1)), W("hoverClass", c.hoverClass, u, "ds-hover")), W("selectableClass", c.selectableClass, u, "ds-selectable")), W("selectedClass", c.selectedClass, u, "ds-selected")), W("selectorClass", c.selectorClass, u, "ds-selector")), W("selectorAreaClass", c.selectorAreaClass, u, "ds-selector-area")), W("droppedTargetClass", c.droppedTargetClass, u, "ds-dropped-target")), W("droppedInsideClass", c.droppedInsideClass, u, "ds-dropped-inside")), W("droppableClass", c.droppableClass, u, "ds-droppable")), W("dropZoneClass", c.dropZoneClass, u, "ds-dropzone")), W("dropZoneReadyClass", c.dropZoneReadyClass, u, "ds-dropzone-ready")), W("dropZoneTargetClass", c.dropZoneTargetClass, u, "ds-dropzone-target")), W("dropZoneInsideClass", c.dropZoneInsideClass, u, "ds-dropzone-inside")), W("dragAsBlock", c.dragAsBlock, u, !1));
    }, qe = function(c, u) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, m = c;
      if (t > 0) {
        var n = (c.right - c.left) * t, h = (c.bottom - c.top) * t;
        m = {
          left: c.left + n,
          right: c.right - n,
          top: c.top + h,
          bottom: c.bottom - h
        };
      }
      return m.left < u.right && // 1.
      m.right > u.left && // 2.
      m.top < u.bottom && // 3.
      m.bottom > u.top;
    }, Lr = function(c) {
      var u = c.element, t = c.posDirection, m = c.containerRect, n = c.useTransform, h = lo(u, n), y = N(h, "+", t);
      lt(u, y, n);
      var _ = u.getBoundingClientRect(), $ = Ar({
        elementRect: _,
        containerRect: m
      });
      co({
        element: u,
        edges: $,
        elementRect: _,
        containerRect: m,
        elementPos: y,
        useTransform: n
      });
    }, go = function(c, u) {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u), c.disconnect();
    }, mo = function(c, u, t) {
      if (u.length) {
        var m = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, n = c instanceof Document ? m || document.body : c, h = u.includes("top") && n.scrollTop > 0, y = u.includes("bottom") && n.scrollTop < n.scrollHeight, _ = u.includes("left") && n.scrollLeft > 0, $ = u.includes("right") && n.scrollLeft < n.scrollWidth;
        h && (n.scrollTop -= 1 * t), y && (n.scrollTop += 1 * t), _ && (n.scrollLeft -= 1 * t), $ && (n.scrollLeft += 1 * t);
      }
    }, lt = function(c, u, t) {
      if (t) {
        var m = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(m.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, vo = function(c) {
      for (var u = c.subscribe, t = c.publish, m = c.Interaction, n = c.SelectedSet, h = c.DropZones, y = {
        "Selected:added": [{
          name: "elementselect"
        }],
        "Selected:removed": [{
          name: "elementunselect"
        }],
        "Area:scroll": [{
          name: "autoscroll"
        }],
        // scroll_directions, scroll_multiplier
        "Interaction:start": [{
          name: "dragstart"
        }],
        // event, isDraggingKeyboard
        "Interaction:update": [
          // event, isDraggingKeyboard
          {
            name: "dragmove",
            condition: function(ae) {
              return ae.event;
            }
          }
        ],
        "Interaction:end": [
          // event, isDraggingKeyboard
          {
            name: "callback",
            extraData: function() {
              var ae = h.getTarget();
              return l({}, ae ? {
                dropTarget: ae.toObject()
              } : {});
            }
          }
        ]
      }, _ = function() {
        var ae = X(H[$], 2), ke = ae[0], De = ae[1];
        ["pre", !1].forEach(function(Ae) {
          return u(Ae ? "".concat(ke, ":").concat(Ae) : ke, function(ne) {
            return De.forEach(function(me) {
              return (!me.condition || me.condition(ne)) && t(Ae ? "".concat(Ae).concat(me.name) : me.name, l(l({
                items: n.elements,
                isDragging: m.isDragging
              }, ne), me.extraData ? me.extraData(ne) : {}));
            });
          });
        });
      }, $ = 0, H = Object.entries(y); $ < H.length; $++)
        _();
    }, Ne = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : k(new Set(k(c))) : [];
    }, Pr = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, bo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        i(this, c), a(this, "DS", void 0), a(this, "_observers", void 0), a(this, "_node", void 0), a(this, "_parentNodes", void 0), a(this, "_computedStyle", void 0), a(this, "_computedBorder", void 0), a(this, "_rect", void 0), a(this, "setArea", function(n) {
          t.reset(), t._node = n, Or({
            computedStyle: t.computedStyle,
            node: t._node
          }), setTimeout(function() {
            t.DS.PubSub.publish("Area:modified:pre", {
              item: t
            }), t.reset(), t.DS.PubSub.publish("Area:modified", {
              item: t
            });
          });
        }), a(this, "start", function() {
          t._observers = we(t.parentNodes, Et(function(n) {
            t.DS.PubSub.publish("Area:modified:pre", {
              event: n,
              item: t
            }), t.reset(), t.DS.PubSub.publish("Area:modified", {
              event: n,
              item: t
            });
          }, 60));
        }), a(this, "reset", function() {
          t._computedStyle = void 0, t._rect = void 0, t._computedBorder = void 0, t._parentNodes = void 0;
        }), a(this, "stop", function() {
          t._observers.cleanup(), t.reset();
        }), a(this, "scroll", function(n, h) {
          var y = {
            scroll_directions: n,
            scroll_multiplier: h
          };
          t.DS.PubSub.publish("Area:scroll:pre", y), mo(t._node, n, h), t.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = m, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(n) {
          var h = n.settings;
          t.setArea(h.area);
        }), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return v(c, [{
        key: "HTMLNode",
        get: (
          /// ///////////////////////////////////////////////////////////////////////////////////
          // Node Getters
          function() {
            return (
              /** @type {DSArea} */
              this._node
            );
          }
        )
        /**
         * The computed border from the element (caches result)
         * @type {{top:number,bottom:number,left:number,right:number}}
         */
      }, {
        key: "computedBorder",
        get: function() {
          return this._computedBorder ? this._computedBorder : {
            top: parseInt(this.computedStyle.borderTopWidth),
            bottom: parseInt(this.computedStyle.borderBottomWidth),
            left: parseInt(this.computedStyle.borderLeftWidth),
            right: parseInt(this.computedStyle.borderRightWidth)
          };
        }
        /**
         * The computed styles from the element (caches result)
         * @type {CSSStyleDeclaration}
         */
      }, {
        key: "computedStyle",
        get: function() {
          return this._computedStyle ? this._computedStyle : this.HTMLNode instanceof Document ? this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement) : this._computedStyle = window.getComputedStyle(this.HTMLNode);
        }
        /**
         * The element rect (caches result) (without scrollbar or borders)
         * @type {DSBoundingRect}
         */
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = so(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = $r(this.HTMLNode);
        }
      }]), c;
    }(), yo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        i(this, c), a(this, "_prevCursorPos", void 0), a(this, "_prevScrollPos", void 0), a(this, "_elements", []), a(this, "_dragKeys", void 0), a(this, "_dragKeysFlat", []), a(this, "_selectionRect", void 0), a(this, "assignDragkeys", function() {
          t._dragKeys = {
            up: t.DS.stores.SettingsStore.s.dragKeys.up.map(function(n) {
              return n.toLowerCase();
            }),
            down: t.DS.stores.SettingsStore.s.dragKeys.down.map(function(n) {
              return n.toLowerCase();
            }),
            left: t.DS.stores.SettingsStore.s.dragKeys.left.map(function(n) {
              return n.toLowerCase();
            }),
            right: t.DS.stores.SettingsStore.s.dragKeys.right.map(function(n) {
              return n.toLowerCase();
            })
          }, t._dragKeysFlat = [].concat(k(t._dragKeys.up), k(t._dragKeys.down), k(t._dragKeys.left), k(t._dragKeys.right));
        }), a(this, "keyboardDrag", function(n) {
          var h = n.event, y = n.key, _ = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(_) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability || t.DS.continue)) {
            var $ = {
              event: h,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:start:pre", "Interaction:start"], $), t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Tr(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0);
            var H = uo({
              shiftKey: t.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: t.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: t.DS.stores.SettingsStore.s.zoom,
              key: _,
              scrollCallback: t.DS.Area.scroll,
              scrollDiff: t._scrollDiff,
              canScroll: t.DS.stores.ScrollStore.canScroll,
              dragKeys: t._dragKeys
            });
            t.DS.stores.SettingsStore.s.dragAsBlock && (H = t.limitDirection(H)), t._elements.forEach(function(Z) {
              return Lr({
                element: Z,
                posDirection: H,
                containerRect: t.DS.SelectorArea.rect,
                useTransform: t.DS.stores.SettingsStore.s.useTransform
              });
            }), t.DS.publish(["Interaction:update:pre", "Interaction:update"], $);
          }
        }), a(this, "keyboardEnd", function(n) {
          var h = n.event, y = n.key, _ = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(_) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability)) {
            var $ = {
              event: h,
              isDragging: t.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:end:pre", "Interaction:end"], $);
          }
        }), a(this, "start", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          !h || y || (t._prevCursorPos = null, t._prevScrollPos = null, t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Tr(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0));
        }), a(this, "stop", function(n) {
          n != null && n.isKeyboard || (t._prevCursorPos = null, t._prevScrollPos = null, t.handleZIndex(!1), t._elements = []);
        }), a(this, "update", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          if (!(!h || !t._elements.length || y || t.DS.continue)) {
            var _ = N(t._cursorDiff, "+", t._scrollDiff);
            t.DS.stores.SettingsStore.s.dragAsBlock && (_ = t.limitDirection(_)), t._elements.forEach(function($) {
              return Lr({
                element: $,
                posDirection: _,
                containerRect: t.DS.SelectorArea.rect,
                useTransform: t.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), a(this, "limitDirection", function(n) {
          var h = t.DS.SelectorArea.rect, y = t.DS.stores.ScrollStore.scrollAmount, _ = {
            top: h.top - t._selectionRect.top + y.y,
            left: h.left - t._selectionRect.left + y.x,
            bottom: h.bottom - t._selectionRect.bottom + y.y,
            right: h.right - t._selectionRect.right + y.x
          };
          return n.x === 0 && n.y === 0 || (n.y < 0 && (n.y = Math.max(n.y, _.top)), n.x < 0 && (n.x = Math.max(n.x, _.left)), n.y > 0 && (n.y = Math.min(n.y, _.bottom)), n.x > 0 && (n.x = Math.min(n.x, _.right)), t._selectionRect.top += n.y, t._selectionRect.bottom += n.y, t._selectionRect.left += n.x, t._selectionRect.right += n.x), n;
        }), a(this, "handleZIndex", function(n) {
          t._elements.forEach(function(h) {
            return h.style.zIndex = "".concat((parseInt(h.style.zIndex) || 0) + n ? 9999 : -9998);
          });
        }), this.DS = m, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return v(c, [{
        key: "_cursorDiff",
        get: function() {
          var t = this.DS.stores.PointerStore.currentVal, m = this._prevCursorPos ? N(t, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = t, m;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var t = this.DS.stores.ScrollStore.currentVal, m = this._prevScrollPos ? N(t, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = t, m;
        }
      }]), c;
    }(), So = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS, n = u.id, h = u.element, y = u.droppables;
        i(this, c), a(this, "id", void 0), a(this, "element", void 0), a(this, "_droppables", void 0), a(this, "_rect", void 0), a(this, "_observers", void 0), a(this, "_timeout", void 0), a(this, "_itemsDropped", []), a(this, "_itemsInside", void 0), a(this, "setReadyClasses", function(_) {
          if (!t.isDestroyed) {
            var $ = t.droppables.filter(function(H) {
              return t.DS.SelectedSet.has(H);
            });
            $.length && ($.forEach(function(H) {
              H.classList[_]("".concat(t.Settings.droppableClass)), H.classList[_]("".concat(t.Settings.droppableClass, "-").concat(t.id));
            }), t.element.classList[_]("".concat(t.Settings.dropZoneReadyClass)));
          }
        }), a(this, "handleNoDrop", function() {
          var _;
          t.isDestroyed || (t.DS.SelectedSet.forEach(function($) {
            $.classList.remove(t.Settings.droppedTargetClass), $.classList.remove("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
          }), t._itemsDropped = t._itemsDropped.filter(function($) {
            return !t.DS.SelectedSet.has($);
          }), (_ = t._itemsDropped) !== null && _ !== void 0 && _.length || t.element.classList.remove("".concat(t.Settings.dropZoneTargetClass)));
        }), a(this, "handleDrop", function() {
          var _, $, H;
          t.isDestroyed || (t._itemsDropped = k(new Set([].concat(k(t._itemsDropped), k((_ = t.droppables) === null || _ === void 0 ? void 0 : _.filter(function(Z) {
            return t.DS.SelectedSet.has(Z);
          }))))), ($ = t._itemsDropped) === null || $ === void 0 || $.forEach(function(Z) {
            Z.classList.add("".concat(t.Settings.droppedTargetClass)), Z.classList.add("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
          }), (H = t._itemsDropped) !== null && H !== void 0 && H.length && t.element.classList.add("".concat(t.Settings.dropZoneTargetClass)));
        }), a(this, "handleItemsInsideClasses", function() {
          var _ = !1;
          t.droppables.forEach(function($) {
            t.itemsInside.includes($) ? ($.classList.add("".concat(t.Settings.droppedInsideClass)), $.classList.add("".concat(t.Settings.droppedInsideClass, "-").concat(t.id)), _ = !0) : ($.classList.remove("".concat(t.Settings.droppedInsideClass, "-").concat(t.id)), $.className.includes("".concat(t.Settings.droppedInsideClass, "-")) || $.classList.remove("".concat(t.Settings.droppedInsideClass)));
          }), _ ? t.element.classList.add("".concat(t.Settings.dropZoneInsideClass)) : t.element.classList.remove("".concat(t.Settings.dropZoneInsideClass));
        }), a(this, "start", function(_) {
          var $ = _.isDragging;
          !$ || t.isDestroyed || t.setReadyClasses("add");
        }), a(this, "stop", function(_) {
          var $ = _.isDragging;
          !$ || t.isDestroyed || (t.setReadyClasses("remove"), t.handleItemsInsideClasses());
        }), a(this, "toObject", function() {
          return {
            id: t.id,
            element: t.element,
            droppables: t.droppables,
            itemsDropped: t.itemsDropped,
            itemsInside: t.itemsInside
          };
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.id = n, this.element = h, y && (this.droppables = Ne(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(_) {
          var $ = _.settings;
          t.element && (t.element.classList.remove($["dropZoneClass:pre"]), t.element.classList.add($.dropZoneClass));
        }), this._observers = we(this.parentNodes, Et(function() {
          return t._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return v(c, [{
        key: "destroy",
        value: function() {
          var t = this;
          this._observers.cleanup(), this.element.classList.remove("".concat(this.Settings.dropZoneClass)), this.element.classList.remove("".concat(this.Settings.dropZoneTargetClass)), this.element.classList.remove("".concat(this.Settings.dropZoneReadyClass)), this.droppables.forEach(function(m) {
            m.classList.remove("".concat(t.Settings.droppedTargetClass)), m.classList.remove("".concat(t.Settings.droppedTargetClass, "-").concat(t.id)), m.classList.remove("".concat(t.Settings.droppableClass)), m.classList.remove("".concat(t.Settings.droppableClass, "-").concat(t.id));
          }), this.DS.unsubscribe("Interaction:start", this.start), this.DS.unsubscribe("Interaction:end", this.stop), this.element = null, this.droppables = null, this.id = null, this._itemsDropped = null, this._itemsInside = null, this.isDestroyed = !0;
        }
        /**
         * @returns {DSDropZone}
         */
      }, {
        key: "rect",
        get: function() {
          return this.isDestroyed ? null : this._rect ? this._rect : this._rect = this.element.getBoundingClientRect();
        }
      }, {
        key: "itemsDropped",
        get: function() {
          return this.isDestroyed ? null : this._itemsDropped;
        }
      }, {
        key: "itemsInside",
        get: function() {
          var t = this;
          return this.isDestroyed ? null : this._itemsInside ? this._itemsInside : (this._itemsInside = this.droppables.flatMap(function(m) {
            return qe(t.DS.SelectableSet.rects.get(m), t.rect, t.Settings.dropInsideThreshold) ? [m] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return t._itemsInside = null;
          }, this.Settings.refreshMemoryRate), this._itemsInside);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = $r(this.element);
        }
      }, {
        key: "droppables",
        get: function() {
          return this._droppables ? this._droppables : this.DS.SelectableSet.elements;
        },
        set: function(t) {
          this._droppables = t;
        }
      }]), c;
    }(), wo = /* @__PURE__ */ v(
      /**
       * Get the drop zone by the zone element
       * @type {Map<DSElement, DropZone>}
       * @private
       */
      /**
       * Get the drop zone by the zone id
       * @type {Map<string, DropZone>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {Map<DSElement,DropZone[]>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {DropZone[]}
       * @private
       */
      /**
       * @constructor Drag
       * @param {{DS:DragSelect}} obj
       * @ignore
       */
      function c(u) {
        var t = this, m = u.DS;
        i(this, c), a(this, "_zoneByElement", /* @__PURE__ */ new Map()), a(this, "_zoneById", /* @__PURE__ */ new Map()), a(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), a(this, "_zones", void 0), a(this, "setDropZones", function(n) {
          var h = n.dropZones;
          h && (t._zones && t._zones.forEach(function(y) {
            return y.destroy();
          }), t._zones = h.map(function(y) {
            return new So(l({
              DS: t.DS
            }, y));
          }), t._zones.forEach(function(y) {
            t._zoneByElement.set(y.element, y), t._zoneById.set(y.id, y), y.droppables.forEach(function(_) {
              var $ = t._zonesByDroppable.get(_);
              if (!($ != null && $.length))
                return t._zonesByDroppable.set(_, [y]);
              t._zonesByDroppable.set(_, k(new Set([].concat(k($), [y]))));
            });
          }));
        }), a(this, "_handleDrop", function(n) {
          t._zones.forEach(function(h) {
            h !== n && h.handleNoDrop();
          }), n && n.handleDrop();
        }), a(this, "_getZoneByElementsFromPoint", function(n, h) {
          for (var y = h.x, _ = h.y, $ = 0, H = n.length; $ < H; $++) {
            var Z = t._zoneByElement.get(n[$]);
            if (Z && qe(Z.rect, {
              left: y,
              right: y,
              top: _,
              bottom: _
            }, Math.min(t.Settings.dropTargetThreshold, 0.5)))
              return Z;
          }
        }), a(this, "stop", function(n) {
          var h = n.isDragging;
          if (h) {
            var y = t.getTarget();
            t._handleDrop(y);
          }
        }), a(this, "getItemsDroppedById", function(n) {
          var h = t._zoneById.get(n);
          return h ? h.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(n, ")"));
        }), a(this, "getItemsInsideById", function(n, h) {
          var y = t._zoneById.get(n);
          if (!y)
            return console.warn("[DragSelect] No zone found (id: ".concat(n, ")"));
          var _ = y.itemsInside;
          return h && y.handleItemsInsideClasses(), _;
        }), a(this, "getTarget", function(n) {
          var h;
          if ((h = t._zones) !== null && h !== void 0 && h.length) {
            var y = (n == null ? void 0 : n.x) || t.DS.stores.PointerStore.currentVal.x, _ = (n == null ? void 0 : n.y) || t.DS.stores.PointerStore.currentVal.y, $ = document.elementsFromPoint(y, _);
            return t._getZoneByElementsFromPoint(
              /** @type {DSElements} */
              $,
              {
                x: y,
                y: _
              }
            );
          }
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(n) {
          var h = n.settings;
          return t.setDropZones(h);
        }), this.setDropZones({
          dropZones: (
            /** @type {DSDropZone[]} */
            this.DS.stores.SettingsStore.s.dropZones
          )
        }), this.DS.subscribe("Interaction:end", this.stop);
      }
      /**
       * @param {Object} obj
       * @param {DSDropZone[]} [obj.dropZones]
       */
    ), _o = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        i(this, c), a(this, "isInteracting", void 0), a(this, "isDragging", void 0), a(this, "init", function() {
          return t.DS.publish("Interaction:init:pre", {});
        }), a(this, "_init", function() {
          t.stop(), t.Settings.usePointerEvents ? t.DS.Area.HTMLNode.addEventListener("pointerdown", t.start, {
            passive: !1
          }) : t.DS.Area.HTMLNode.addEventListener("mousedown", t.start), t.DS.Area.HTMLNode.addEventListener("touchstart", t.start, {
            passive: !1
          }), t.DS.publish("Interaction:init", {});
        }), a(this, "start", function(n) {
          return t.DS.publish("Interaction:start:pre", {
            event: n,
            isDragging: t.isDragging
          });
        }), a(this, "_start", function(n) {
          n.type === "touchstart" && n.preventDefault(), t._canInteract(n) && (t.isInteracting = !0, t.isDragging = t.isDragEvent(n), t.DS.publish("Interaction:start", {
            event: n,
            isDragging: t.isDragging
          }), t.Settings.usePointerEvents ? (document.addEventListener("pointerup", t.reset), document.addEventListener("pointercancel", t.reset)) : document.addEventListener("mouseup", t.reset), document.addEventListener("touchend", t.reset));
        }), a(this, "isDragEvent", function(n) {
          var h = (
            /** @type {Element} */
            n.target.closest(".".concat(t.Settings.selectableClass))
          );
          return !t.Settings.draggability || t.DS.stores.KeyStore.isMultiSelectKeyPressed(n) || !h ? !1 : (t.Settings.immediateDrag && (t.DS.SelectedSet.size ? t.DS.SelectedSet.has(h) || (t.DS.SelectedSet.clear(), t.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )) : t.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )), !!t.DS.SelectedSet.has(h));
        }), a(this, "onClick", function(n) {
          var h = n.event;
          if (t._canInteract(h) && !(h.detail > 0)) {
            var y = t.DS, _ = y.stores, $ = _.PointerStore, H = _.KeyStore, Z = y.SelectableSet, ae = y.SelectedSet;
            $.start(h);
            var ke = (
              /** @type {any} */
              h.target
            );
            Z.has(ke) && (H.isMultiSelectKeyPressed(h) || ae.clear(), ae.toggle(ke), t.reset());
          }
        }), a(this, "stop", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t.DS.Area.HTMLNode;
          t.isInteracting = !1, t.isDragging = !1, t.Settings.usePointerEvents ? (n.removeEventListener("pointerdown", t.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("pointerup", t.reset), document.removeEventListener("pointercancel", t.reset)) : (n.removeEventListener("mousedown", t.start), document.removeEventListener("mouseup", t.reset)), n.removeEventListener("touchstart", t.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("touchend", t.reset);
        }), a(this, "update", function(n) {
          var h = n.event, y = n.scroll_directions, _ = n.scroll_multiplier;
          t.isInteracting && t.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: h,
            scroll_directions: y,
            scroll_multiplier: _,
            isDragging: t.isDragging
          });
        }), a(this, "reset", function(n) {
          return t.DS.publish("Interaction:end:pre", {
            event: n,
            isDragging: t.isDragging
          });
        }), a(this, "_reset", function(n) {
          var h = t.isDragging;
          t.stop(), t.init(), t.DS.publish("Interaction:end", {
            event: n,
            isDragging: h
          });
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(n) {
          var h = n.settings;
          t.stop(h["area:pre"]), t.init();
        }), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(n) {
          var h = n.event;
          return t.start(h);
        }), this.DS.subscribe("Interaction:start:pre", function(n) {
          var h = n.event;
          return t._start(h);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(n) {
          var h = n.event;
          return t._reset(h);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return v(c, [{
        key: "_canInteract",
        value: (
          /**
           * @param {DSEvent} event
           */
          function(t) {
            var m = (
              /** @type {MouseEvent} */
              t.clientX === 0 && /** @type {MouseEvent} */
              t.clientY === 0 && /** @type {MouseEvent} */
              t.detail === 0 && t.target
            );
            return (
              /** @type {MouseEvent} */
              !(t.button === 2 || // right-clicks
              this.isInteracting || // fix double-click issues
              t.target && !this.DS.SelectorArea.isInside(
                /** @type {DSElement} */
                t.target
              ) || // fix outside elements issue
              !m && !this.DS.SelectorArea.isClicked(t))
            );
          }
        )
        /**
         * @param {DSEvent} event
         */
      }]), c;
    }(), xo = /* @__PURE__ */ v(
      function c(u) {
        var t = this, m = u.DS;
        i(this, c), a(this, "subscribers", {}), a(this, "subscribe", function(n, h) {
          return Array.isArray(t.subscribers[n]) || (t.subscribers[n] = []), t.subscribers[n].push(h), t.subscribers[n].length - 1;
        }), a(this, "unsubscribe", function(n, h, y) {
          y >= 0 ? t.subscribers[n].splice(y, 1) : h && (t.subscribers[n] = t.subscribers[n].filter(function(_) {
            return _ !== h;
          }));
        }), a(this, "publish", function(n, h) {
          Array.isArray(n) ? n.forEach(function(y) {
            return t._publish(y, h);
          }) : t._publish(n, h);
        }), a(this, "_publish", function(n, h) {
          var y = t.subscribers[n];
          Array.isArray(y) && (n.includes(":pre") ? t._handlePrePublish(y, h) : t._handlePublish(y, h));
        }), a(this, "_handlePublish", function(n, h) {
          for (var y = 0, _ = n.length; y < _; y++) {
            if (t.DS.stopped)
              return;
            n[y](h);
          }
        }), a(this, "_handlePrePublish", function(n, h) {
          for (var y = n.length; y--; ) {
            if (t.DS.stopped)
              return;
            n[y](h);
          }
        }), this.DS = m;
      }
      /**
       * Subscribe to an event
       * @memberof DragSelect#
       * @function subscribe
       * @param {DSCallbackNames} eventName
       * @param {DSCallback} callback
       * @returns {number} event id, can be used to unsubscribe more efficiently
       */
    ), ko = /* @__PURE__ */ function(c) {
      g(t, c);
      var u = V(t);
      function t(m) {
        var n, h = m.DS;
        return i(this, t), n = u.call(this), a(M(n), "_rects", void 0), a(M(n), "_timeout", void 0), a(M(n), "init", function() {
          return Ne(n.Settings.selectables).forEach(function(y) {
            return n.add(y);
          });
        }), a(M(n), "clear", function() {
          return n.forEach(function(y) {
            return n.delete(y);
          });
        }), a(M(n), "_onClick", function(y) {
          return n.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), a(M(n), "_onPointer", function(y) {
          return n.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), a(M(n), "addAll", function(y) {
          return y.forEach(function(_) {
            return n.add(_);
          });
        }), a(M(n), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return n.delete(_);
          });
        }), a(M(n), "getRect", function(y) {
          return n._rects ? n.rects.get(y) : y.getBoundingClientRect();
        }), n.DS = h, n.Settings = h.stores.SettingsStore.s, n.DS.subscribe("Interaction:init", n.init), n.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          n.clear(), n.init();
        }), n.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var _ = y.settings;
          n.forEach(function($) {
            $.classList.remove(_["selectableClass:pre"]), $.classList.add(_.selectableClass);
          });
        }), n;
      }
      return v(t, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(n) {
            if (B(f(t.prototype), "has", this).call(this, n))
              return this;
            var h = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selectable:added:pre", h), n.classList.add(this.Settings.selectableClass), n.addEventListener("click", this._onClick), this.Settings.usePointerEvents ? n.addEventListener("pointerdown", this._onPointer, {
              // @ts-ignore
              passive: !1
            }) : n.addEventListener("mousedown", this._onPointer), n.addEventListener("touchstart", this._onPointer, {
              // @ts-ignore
              passive: !1
            }), this.Settings.draggability && !this.Settings.useTransform && Or({
              computedStyle: window.getComputedStyle(n),
              node: n
            }), B(f(t.prototype), "add", this).call(this, n), this.DS.publish("Selectable:added", h), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!B(f(t.prototype), "has", this).call(this, n))
            return !0;
          var h = {
            items: this.elements,
            item: n
          };
          return this.DS.publish("Selectable:removed:pre", h), n.classList.remove(this.Settings.selectableClass), n.classList.remove(this.Settings.hoverClass), n.removeEventListener("click", this._onClick), this.Settings.usePointerEvents ? n.removeEventListener("pointerdown", this._onPointer, {
            // @ts-ignore
            passive: !1
          }) : n.removeEventListener("mousedown", this._onPointer), n.removeEventListener("touchstart", this._onPointer, {
            // @ts-ignore
            passive: !1
          }), B(f(t.prototype), "delete", this).call(this, n), this.DS.publish("Selectable:removed", h), !0;
        }
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }, {
        key: "rects",
        get: function() {
          var n = this;
          return this._rects ? this._rects : (this._rects = /* @__PURE__ */ new Map(), this.forEach(function(h) {
            return n._rects.set(h, h.getBoundingClientRect());
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return n._rects = null;
          }, this.Settings.refreshMemoryRate), this._rects);
        }
      }]), t;
    }(/* @__PURE__ */ D(Set)), Do = /* @__PURE__ */ function(c) {
      g(t, c);
      var u = V(t);
      function t(m) {
        var n, h = m.DS;
        return i(this, t), n = u.call(this), a(M(n), "clear", function() {
          return n.forEach(function(y) {
            return n.delete(y);
          });
        }), a(M(n), "addAll", function(y) {
          return y.forEach(function(_) {
            return n.add(_);
          });
        }), a(M(n), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return n.delete(_);
          });
        }), n.DS = h, n;
      }
      return v(t, [{
        key: "add",
        value: function(n) {
          if (B(f(t.prototype), "has", this).call(this, n))
            return this;
          var h = {
            items: this.elements,
            item: n
          };
          return this.DS.publish("Selected:added:pre", h), B(f(t.prototype), "add", this).call(this, n), n.classList.add(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", h), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!B(f(t.prototype), "has", this).call(this, n))
            return !0;
          var h = {
            items: this.elements,
            item: n
          };
          this.DS.publish("Selected:removed:pre", h);
          var y = B(f(t.prototype), "delete", this).call(this, n);
          return n.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", h), y;
        }
      }, {
        key: "toggle",
        value: (
          /**
           * Adds/Removes an element. If it is already selected = remove, if not = add.
           * @param {DSElement} element
           * @return {DSElement}
           */
          function(n) {
            return this.has(n) ? this.delete(n) : this.add(n), n;
          }
        )
        /** @param {DSElements} elements */
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }]), t;
    }(/* @__PURE__ */ D(Set)), Co = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        i(this, c), a(this, "_prevSelectedSet", void 0), a(this, "start", function(n) {
          var h = n.event, y = n.isDragging;
          y || (t._storePrevious(h), t._handleInsideSelection(!0, h));
        }), a(this, "update", function(n) {
          var h = n.isDragging;
          h || t.DS.continue || t._handleInsideSelection();
        }), a(this, "_handleInsideSelection", function(n, h) {
          var y = t.DS, _ = y.SelectableSet, $ = y.SelectorArea, H = y.Selector, Z = t.DS.stores.KeyStore.isMultiSelectKeyPressed(h) && t.Settings.multiSelectToggling, ae = t.Settings.selectionThreshold, ke = _.rects, De = H.rect, Ae = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), me = ge(ke), ct;
          try {
            for (me.s(); !(ct = me.n()).done; ) {
              var $t = X(ct.value, 2), ut = $t[0], Tt = $t[1];
              $.isInside(ut, Tt) && (qe(Tt, De, ae) ? Ae.set(ut, Tt) : ne.set(ut, Tt));
            }
          } catch (Zt) {
            me.e(Zt);
          } finally {
            me.f();
          }
          if (!t.DS.continue) {
            var jr = t.filterSelected({
              select: Ae,
              unselect: ne,
              selectorRect: De
            }), Oo = jr.select, Lo = jr.unselect;
            Oo.forEach(function(Zt, Ft) {
              return ho({
                element: Ft,
                force: n,
                multiSelectionToggle: Z,
                SelectedSet: t.DS.SelectedSet,
                hoverClassName: t.Settings.hoverClass
              });
            }), Lo.forEach(function(Zt, Ft) {
              return fo({
                element: Ft,
                force: n,
                SelectedSet: t.DS.SelectedSet,
                hoverClassName: t.Settings.hoverClass,
                PrevSelectedSet: t._prevSelectedSet
              });
            });
          }
        }), a(this, "filterSelected", function(n) {
          var h = n.select, y = n.unselect;
          return n.selectorRect, {
            select: h,
            unselect: y
          };
        }), this.DS = m, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return v(c, [{
        key: "_storePrevious",
        value: function(t) {
          var m = this.DS, n = m.stores.KeyStore, h = m.SelectedSet;
          n.isMultiSelectKeyPressed(t) ? this._prevSelectedSet = new Set(h) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), Eo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        i(this, c), a(this, "_rect", void 0), a(this, "attachSelector", function() {
          var n, h;
          t.HTMLNode && (n = t.DS.SelectorArea) !== null && n !== void 0 && n.HTMLNode && t.DS.SelectorArea.HTMLNode.removeChild(t.HTMLNode), t.HTMLNode = t.DS.stores.SettingsStore.s.selector || Wt(t.DS.stores.SettingsStore.s.customStyles), t.HTMLNode.classList.add(t.DS.stores.SettingsStore.s.selectorClass), t.HTMLNode && (h = t.DS.SelectorArea) !== null && h !== void 0 && h.HTMLNode && t.DS.SelectorArea.HTMLNode.appendChild(t.HTMLNode);
        }), a(this, "start", function(n) {
          var h = n.isDragging;
          if (!h) {
            var y = t.DS.stores.PointerStore, _ = y.initialValArea;
            Pr(t.HTMLNode, K(_, 1)), t.HTMLNode.style.display = "block", t._rect = null;
          }
        }), a(this, "stop", function() {
          t.HTMLNode.style.width = "0", t.HTMLNode.style.height = "0", t.HTMLNode.style.display = "none";
        }), a(this, "update", function(n) {
          var h = n.isDragging;
          if (!(h || t.DS.continue)) {
            var y = t.DS.stores, _ = y.ScrollStore, $ = y.PointerStore, H = no({
              scrollAmount: _.scrollAmount,
              initialPointerPos: $.initialValArea,
              pointerPos: $.currentValArea
            });
            Pr(t.HTMLNode, H), t._rect = null;
          }
        }), this.DS = m, this.DS.subscribe("Settings:updated:selectorClass", function(n) {
          var h = n.settings;
          t.HTMLNode.classList.remove(h["selectorClass:pre"]), t.HTMLNode.classList.add(h.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return v(c, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Mo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        i(this, c), a(this, "_scrollInterval", void 0), a(this, "_rect", void 0), a(this, "currentEdges", []), a(this, "start", function() {
          t.applyElements("append"), t.updatePos();
        }), a(this, "applyElements", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", h = document.body ? "body" : "documentElement", y = "".concat(n, "Child");
          t.HTMLNode[y](t.DS.Selector.HTMLNode), document[h][y](t.HTMLNode);
        }), a(this, "updatePos", function() {
          t._rect = null;
          var n = t.DS.Area.rect, h = t.DS.Area.computedBorder, y = t.HTMLNode.style, _ = "".concat(n.top + h.top, "px"), $ = "".concat(n.left + h.left, "px"), H = "".concat(n.width, "px"), Z = "".concat(n.height, "px");
          y.top !== _ && (y.top = _), y.left !== $ && (y.left = $), y.width !== H && (y.width = H), y.height !== Z && (y.height = Z);
        }), a(this, "stop", function(n) {
          t.stopAutoScroll(), n && t.applyElements("remove");
        }), a(this, "startAutoScroll", function() {
          t.currentEdges = [], t._scrollInterval = setInterval(function() {
            return t.handleAutoScroll();
          }, 16);
        }), a(this, "handleAutoScroll", function() {
          if (!t.DS.continue) {
            var n = t.DS, h = n.stores.PointerStore, y = n.Area;
            t.currentEdges = Ar({
              elementRect: K(h.currentVal),
              containerRect: t.rect,
              tolerance: t.DS.stores.SettingsStore.s.overflowTolerance
            }), t.currentEdges.length && y.scroll(t.currentEdges, t.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), a(this, "stopAutoScroll", function() {
          t.currentEdges = [], clearInterval(t._scrollInterval);
        }), a(this, "isInside", function(n, h) {
          return t.DS.Area.HTMLNode.contains(n) && t.DS.stores.ScrollStore.canScroll ? !0 : qe(t.rect, h || n.getBoundingClientRect());
        }), this.DS = m, this.HTMLNode = Ct(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(n) {
          var h = n.settings;
          t.HTMLNode.classList.remove(h["selectorAreaClass:pre"]), t.HTMLNode.classList.add(h.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          t.updatePos(), t.stopAutoScroll();
        });
      }
      return v(c, [{
        key: "isClicked",
        value: (
          /**
           * checks if the click was triggered on the area.
           * @param {DSEvent} [event]
           * @returns {boolean}
           */
          function(t) {
            var m = this.DS.stores.PointerStore, n = t ? m.getPointerPosition(t) : m.initialVal;
            return qe({
              left: n.x,
              top: n.y,
              right: n.x,
              bottom: n.y
            }, this.rect);
          }
        )
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), $o = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        i(this, c), a(this, "_currentValues", /* @__PURE__ */ new Set()), a(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), a(this, "init", function() {
          document.addEventListener("keydown", t.keydown), document.addEventListener("keyup", t.keyup), window.addEventListener("blur", t.reset);
        }), a(this, "keydown", function(n) {
          var h = n.key.toLowerCase();
          t.DS.publish("KeyStore:down:pre", {
            event: n,
            key: h
          }), t._currentValues.add(h), t.DS.publish("KeyStore:down", {
            event: n,
            key: h
          });
        }), a(this, "keyup", function(n) {
          var h = n.key.toLowerCase();
          t.DS.publish("KeyStore:up:pre", {
            event: n,
            key: h
          }), t._currentValues.delete(h), t.DS.publish("KeyStore:up", {
            event: n,
            key: h
          });
        }), a(this, "stop", function() {
          document.removeEventListener("keydown", t.keydown), document.removeEventListener("keyup", t.reset), window.removeEventListener("blur", t.reset), t.reset();
        }), a(this, "reset", function() {
          return t._currentValues.clear();
        }), this.DS = m, this.DS.subscribe("Interaction:init", this.init);
      }
      return v(c, [{
        key: "isMultiSelectKeyPressed",
        value: (
          /** @param {KeyboardEvent|MouseEvent|PointerEvent|TouchEvent} [event] */
          function(t) {
            var m = this;
            if (this.DS.stores.SettingsStore.s.multiSelectMode)
              return !0;
            var n = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(h) {
              return h.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(h) {
              return n.includes(h.toLocaleLowerCase());
            }) || t && n.some(function(h) {
              return t[m._keyMapping[h]];
            }));
          }
        )
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), c;
    }(), To = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        i(this, c), a(this, "_isMouseInteraction", !1), a(this, "_initialValArea", void 0), a(this, "_currentValArea", void 0), a(this, "_lastValArea", void 0), a(this, "_initialVal", void 0), a(this, "_currentVal", void 0), a(this, "_lastVal", void 0), a(this, "_lastTouch", void 0), a(this, "init", function() {
          t.Settings.usePointerEvents ? document.addEventListener("pointermove", t.update, {
            // @ts-ignore
            passive: !1
          }) : document.addEventListener("mousemove", t.update), document.addEventListener("touchmove", t.update, {
            // @ts-ignore
            passive: !1
          });
        }), a(this, "getPointerPosition", function(n) {
          return oo({
            event: t._normalizedEvent(n)
          });
        }), a(this, "update", function(n) {
          n && (t.DS.publish("PointerStore:updated:pre", {
            event: n
          }), t.currentVal = t.getPointerPosition(n), t._isMouseInteraction && t.DS.publish("PointerStore:updated", {
            event: n
          }));
        }), a(this, "stop", function() {
          t.Settings.usePointerEvents ? document.removeEventListener("pointermove", t.update, {
            // @ts-ignore
            passive: !1
          }) : document.removeEventListener("mousemove", t.update), document.removeEventListener("touchmove", t.update, {
            // @ts-ignore
            passive: !1
          }), setTimeout(function() {
            return t._isMouseInteraction = !1;
          }, 100);
        }), a(this, "reset", function(n) {
          n && (t.currentVal = t.lastVal = t.getPointerPosition(n), t.stop(), t.init());
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(n) {
          var h = n.event;
          return t.start(h);
        }), this.DS.subscribe("Interaction:end", function(n) {
          var h = n.event;
          return t.reset(h);
        });
      }
      return v(c, [{
        key: "start",
        value: (
          /** @param {DSEvent} [event] */
          function(t) {
            t && (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(t));
          }
        )
        /** @param {DSEvent} event */
      }, {
        key: "_normalizedEvent",
        value: (
          /**
           * @param {DSEvent} event
           * @return {MouseEvent|PointerEvent|Touch}
           * @private
           */
          function(t) {
            return "touches" in t && t.type !== "touchend" && (this._lastTouch = t), "touches" in t ? this._lastTouch.touches[0] : t;
          }
        )
        /** First recorded pointer position within the area */
      }, {
        key: "initialValArea",
        get: function() {
          return this._initialValArea ? this._initialValArea : {
            x: 0,
            y: 0
          };
        }
        /** Current pointer position within the area */
      }, {
        key: "currentValArea",
        get: function() {
          return this._currentValArea ? this._currentValArea : {
            x: 0,
            y: 0
          };
        }
        /** Last recorded pointer position within the area */
      }, {
        key: "lastValArea",
        get: function() {
          return this._lastValArea ? this._lastValArea : {
            x: 0,
            y: 0
          };
        }
        /** First recorded pointer position */
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        },
        set: function(t) {
          this._initialVal = t, this._initialValArea = t && N(t, "-", N(ee(this.DS.Area.rect), "+", ee(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(t) {
          this._currentVal = t, this._currentValArea = t && N(t, "-", N(ee(this.DS.Area.rect), "+", ee(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(t) {
          this._lastVal = t, this._lastValArea = t && N(t, "-", N(ee(this.DS.Area.rect), "+", ee(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), Ao = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        i(this, c), a(this, "_initialVal", void 0), a(this, "_currentVal", void 0), a(this, "_canScroll", void 0), a(this, "init", function() {
          return t.DS.stores.SettingsStore.s.area.addEventListener("scroll", t.update);
        }), a(this, "start", function() {
          t._currentVal = t._initialVal = Mt(t.DS.stores.SettingsStore.s.area), t.DS.stores.SettingsStore.s.area.addEventListener("scroll", t.update);
        }), a(this, "update", function() {
          return t._currentVal = Mt(t.DS.stores.SettingsStore.s.area);
        }), a(this, "stop", function() {
          t.DS.stores.SettingsStore.s.area.removeEventListener("scroll", t.update), t._initialVal = {
            x: 0,
            y: 0
          }, t._canScroll = null;
        }), a(this, "reset", function() {
          t.stop(), t.start();
        }), this.DS = m, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return t.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return t.reset();
        });
      }
      return v(c, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = Dt(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var t = N(this.currentVal, "-", this.initialVal), m = xe(this.DS.stores.SettingsStore.s.zoom), n = N(N(t, "*", m), "-", t);
          return {
            x: t.x + n.x,
            y: t.y + n.y
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal || (this._currentVal = Mt(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), c;
    }(), Io = /* @__PURE__ */ v(
      /**
       * @type {Settings}
       * @private
       * */
      /**
       * Holds the settings and their previous value `:pre`
       * @example {
       *    autoScrollSpeed: 3,
       *    'autoScrollSpeed:pre': 5
       * }
       * @type {Settings}
       * */
      /**
       * @class ScrollStore
       * @constructor ScrollStore
       * @param {{ DS:DragSelect, settings:Settings }} p
       * @ignore
       */
      function c(u) {
        var t = this, m = u.DS, n = u.settings;
        i(this, c), a(this, "_settings", {}), a(this, "s", {}), a(this, "update", function(h) {
          var y = h.settings, _ = h.init;
          return t.DS.publish("Settings:updated:pre", l({
            settings: y
          }, _ ? {
            init: _
          } : {}));
        }), a(this, "_update", function(h) {
          for (var y = h.settings, _ = h.init, $ = po(y, _), H = function() {
            var De, Ae = X(ae[Z], 2), ne = Ae[0], me = Ae[1];
            ne in t._settings || Object.defineProperty(t.s, ne, {
              get: function() {
                return t._settings[ne];
              },
              set: function(ut) {
                return t.update({
                  settings: a({}, ne, ut)
                });
              }
            }), t._settings["".concat(ne, ":pre")] = t._settings[ne], t._settings[ne] = me;
            var ct = {
              settings: (De = {}, a(De, ne, t._settings[ne]), a(De, "".concat(ne, ":pre"), t._settings["".concat(ne, ":pre")]), De)
            };
            t.DS.publish("Settings:updated", ct), t.DS.publish("Settings:updated:".concat(ne), ct);
          }, Z = 0, ae = Object.entries($); Z < ae.length; Z++)
            H();
        }), this.DS = m, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
          settings: n,
          init: !0
        });
      }
      /** @param {{settings: Settings, init?: boolean}} props */
    ), Nr = /* @__PURE__ */ function() {
      function c(u) {
        var t = this;
        i(this, c), a(this, "continue", !1), a(this, "start", function() {
          t.stopped = !1, t.Interaction.init();
        }), a(this, "break", function() {
          return t.continue = !0;
        }), a(this, "setSettings", function(m) {
          return t.stores.SettingsStore.update({
            settings: m
          });
        }), a(this, "getSelection", function() {
          return t.SelectedSet.elements;
        }), a(this, "getSelectables", function() {
          return t.SelectableSet.elements;
        }), a(this, "getInitialCursorPosition", function() {
          return t.stores.PointerStore.initialVal;
        }), a(this, "getCurrentCursorPosition", function() {
          return t.stores.PointerStore.currentVal;
        }), a(this, "getPreviousCursorPosition", function() {
          return t.stores.PointerStore.lastVal;
        }), a(this, "getInitialCursorPositionArea", function() {
          return t.stores.PointerStore.initialValArea;
        }), a(this, "getCurrentCursorPositionArea", function() {
          return t.stores.PointerStore.currentValArea;
        }), a(this, "getPreviousCursorPositionArea", function() {
          return t.stores.PointerStore.lastValArea;
        }), a(this, "isMultiSelect", function(m) {
          return t.stores.KeyStore.isMultiSelectKeyPressed(m);
        }), a(this, "isDragging", function() {
          return t.Interaction.isDragging;
        }), a(this, "getZoneByCoordinates", function(m) {
          var n;
          return (n = t.DropZones.getTarget(m)) === null || n === void 0 ? void 0 : n.toObject();
        }), a(this, "getItemsDroppedByZoneId", function(m) {
          return t.DropZones.getItemsDroppedById(m);
        }), a(this, "getItemsInsideByZoneId", function(m, n) {
          return t.DropZones.getItemsInsideById(m, n);
        }), this.PubSub = new xo({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = /** @type {{ SettingsStore:SettingsStore, PointerStore:PointerStore, ScrollStore:ScrollStore, KeyStore:KeyStore }} */
        {}, this.stores.SettingsStore = new Io({
          DS: this,
          settings: u
        }), this.stores.PointerStore = new To({
          DS: this
        }), this.stores.ScrollStore = new Ao({
          DS: this
        }), this.stores.KeyStore = new $o({
          DS: this
        }), this.Area = new bo({
          DS: this
        }), this.Selector = new Eo({
          DS: this
        }), this.SelectorArea = new Mo({
          DS: this
        }), this.SelectableSet = new ko({
          DS: this
        }), this.SelectedSet = new Do({
          DS: this
        }), this.Selection = new Co({
          DS: this
        }), this.Drag = new yo({
          DS: this
        }), this.DropZones = new wo({
          DS: this
        }), this.Interaction = new _o({
          DS: this
        }), vo({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction,
          DropZones: this.DropZones
        }), this.subscribe("Interaction:end", function() {
          return t.continue = !1;
        }), this.start();
      }
      return v(c, [{
        key: "stop",
        value: (
          /**
           * Complete function teardown
           * Will teardown/stop the whole functionality
           * @param {boolean} [remove] - if elements should be removed.
           * @param {boolean} [fromSelection] - if elements should also be added/removed to the selection.
           * @param {boolean} [withCallback] - if elements should also be added/removed to the selection.
           */
          function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            n && this.publish("callback", {
              items: this.getSelection()
            }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(t), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), t && this.SelectableSet.clear(), m && this.SelectedSet.clear(), this.stopped = !0;
          }
        )
        /**
         * Utility to override DragSelect internal functionality:
         * Break will skip the selection or dragging functionality (until after the callback) but let everything continue to run.
         * Useful utility to write your own functionality/move/dragNdrop based on DragSelect pointer positions.
         */
      }, {
        key: "addSelection",
        value: (
          /**
           * Adds several elements to the selection list also adds the specific classes and take into account all calculations.
           * Does not clear the selection, in contrary to .setSelection. Can add multiple elements at once
           * @param {DSInputElements} elements one or multiple elements
           * @param {boolean} [triggerCallback] - if callback should be called
           * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
           * @return {DSElements} all selected elements
           */
          function(t) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(Ne(t)), n || this.addSelectables(t), m && this.PubSub.publish("callback", {
              items: this.getSelection()
            }), this.getSelection();
          }
        )
        /**
         * Removes specific elements from the selection
         * Multiple elements can be given at once, in contrary to unselect
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should be removed from the list of selectable elements
         * @return {DSElements} all selected elements
         */
      }, {
        key: "removeSelection",
        value: function(t) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Ne(t)), n && this.removeSelectables(t), m && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Toggles specific elements from the selection:
         * If element is not in selection it will be added, if it is already selected, it will be removed.
         * Multiple elements can be given at once.
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should not be added/removed to the list of selectable elements accordingly
         * @return {DSElements} all selected elements
         */
      }, {
        key: "toggleSelection",
        value: function(t) {
          var m = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Ne(t).forEach(function(y) {
            return m.SelectedSet.has(y) ? m.removeSelection(t, n, h) : m.addSelection(t, n, h);
          }), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Sets the current selected elements and optionally run the callback
         * By default, adds new elements also to the list of selectables
         * @param {DSInputElements} elements – dom elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
         * @return {DSElements}
         */
      }, {
        key: "setSelection",
        value: function(t) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(t, m, n), this.getSelection();
        }
        /**
         * Unselect / Deselect all current selected Nodes
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSElements} this.selected, should be empty
         */
      }, {
        key: "clearSelection",
        value: function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), t && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Add elements that can be selected. No node is added twice
         * @param {DSInputElements} elements dom element(s)
         * @param {boolean} [addToSelection] if elements should also be added to current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the added element(s)
         */
      }, {
        key: "addSelectables",
        value: function(t, m, n) {
          var h = Ne(t);
          return this.SelectableSet.addAll(h), m && this.SelectedSet.addAll(h), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), t;
        }
        /**
         * Gets all nodes that can potentially be selected
         * @return {DSElements} this.selectables
         */
      }, {
        key: "setSelectables",
        value: (
          /**
           * Sets all elements that can be selected.
           * Removes all current selectables (& their respective classes).
           * Adds the new set to the selectables set, thus replacing the original set.
           * @param {DSInputElements} elements – dom element(s)
           * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
           * @param {boolean} [addToSelection] if elements should also be added to current selection
           * @return {DSInputElements} elements – the added element(s)
           */
          function(t) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(t, m), this.addSelectables(t, n);
          }
        )
        /**
         * Remove elements from the elements that can be selected.
         * @param {DSInputElements} elements – dom element(s)
         * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the removed element(s)
         */
      }, {
        key: "removeSelectables",
        value: function(t, m, n) {
          return this.SelectableSet.deleteAll(Ne(t)), m && this.removeSelection(t), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), t;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return Nr.isCollision = qe, Nr;
  });
})(us);
var Sn = us.exports;
const wn = /* @__PURE__ */ yn(Sn), ds = (r, e, s, o, l) => (e = Math, s = e.log, o = 1024, l = s(r) / s(o) | 0, r / e.pow(o, l)).toFixed(0) + " " + (l ? "KMGTPEZY"[--l] + "iB" : "B"), hs = (r, e = null) => new Date(r * 1e3).toLocaleString(e ?? navigator.language ?? "en-US"), _n = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, xn = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), kn = [
  xn
], Dn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Cn = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), En = [
  Cn
], Mn = {
  name: "VFSortIcon"
}, At = /* @__PURE__ */ Object.assign(Mn, {
  props: { direction: String },
  setup(r) {
    return (e, s) => (w(), C("div", null, [
      r.direction == "down" ? (w(), C("svg", _n, kn)) : U("", !0),
      r.direction == "up" ? (w(), C("svg", Dn, En)) : U("", !0)
    ]));
  }
}), $n = ["onClick"], Tn = {
  name: "VFToast.vue"
}, An = /* @__PURE__ */ Object.assign(Tn, {
  setup(r) {
    const e = L("emitter"), { getStore: s } = L("storage"), o = O(s("full-screen", !1)), l = (a) => a == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", i = O([]), d = (a) => {
      i.value.splice(a, 1);
    }, v = (a) => {
      let g = i.value.findIndex((f) => f.id === a);
      g !== -1 && d(g);
    };
    return e.on("vf-toast-clear", () => {
      i.value = [];
    }), e.on("vf-toast-push", (a) => {
      let g = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      a.id = g, i.value.push(a), setTimeout(() => {
        v(g);
      }, 5e3);
    }), (a, g) => (w(), C("div", {
      class: he([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Ee(Po, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: F(() => [
          (w(!0), C(ie, null, ye(i.value, (f, b) => (w(), C("div", {
            onClick: (S) => d(b),
            key: f,
            class: he([l(f.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, E(f.label), 11, $n))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), wt = (r) => Object.entries(r).map((e) => e.map(encodeURIComponent).join("=")).join("&"), { apiUrl: In } = ze(), tr = (r, e) => In.value + "?" + wt({ q: "preview", adapter: r, path: e }), He = typeof window < "u", fs = He && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), ps = He && "IntersectionObserver" in window, gs = He && "classList" in document.createElement("p"), ms = He && window.devicePixelRatio > 1, On = {
  elements_selector: ".lazy",
  container: fs || He ? document : null,
  threshold: 300,
  thresholds: null,
  data_src: "src",
  data_srcset: "srcset",
  data_sizes: "sizes",
  data_bg: "bg",
  data_bg_hidpi: "bg-hidpi",
  data_bg_multi: "bg-multi",
  data_bg_multi_hidpi: "bg-multi-hidpi",
  data_bg_set: "bg-set",
  data_poster: "poster",
  class_applied: "applied",
  class_loading: "loading",
  class_loaded: "loaded",
  class_error: "error",
  class_entered: "entered",
  class_exited: "exited",
  unobserve_completed: !0,
  unobserve_entered: !1,
  cancel_on_exit: !0,
  callback_enter: null,
  callback_exit: null,
  callback_applied: null,
  callback_loading: null,
  callback_loaded: null,
  callback_error: null,
  callback_finish: null,
  callback_cancel: null,
  use_native: !1,
  restore_on_error: !1
}, vs = (r) => Object.assign({}, On, r), Br = function(r, e) {
  let s;
  const o = "LazyLoad::Initialized", l = new r(e);
  try {
    s = new CustomEvent(o, { detail: { instance: l } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(o, !1, !1, { instance: l });
  }
  window.dispatchEvent(s);
}, Ln = (r, e) => {
  if (e)
    if (!e.length)
      Br(r, e);
    else
      for (let s = 0, o; o = e[s]; s += 1)
        Br(r, o);
}, Pe = "src", fr = "srcset", pr = "sizes", bs = "poster", _t = "llOriginalAttrs", ys = "data", gr = "loading", Ss = "loaded", ws = "applied", Pn = "entered", mr = "error", _s = "native", xs = "data-", ks = "ll-status", fe = (r, e) => r.getAttribute(xs + e), Nn = (r, e, s) => {
  const o = xs + e;
  if (s === null) {
    r.removeAttribute(o);
    return;
  }
  r.setAttribute(o, s);
}, xt = (r) => fe(r, ks), Fe = (r, e) => Nn(r, ks, e), zt = (r) => Fe(r, null), vr = (r) => xt(r) === null, jn = (r) => xt(r) === gr, Rn = (r) => xt(r) === mr, br = (r) => xt(r) === _s, Vn = [gr, Ss, ws, mr], Bn = (r) => Vn.indexOf(xt(r)) >= 0, Ue = (r, e, s, o) => {
  if (!(!r || typeof r != "function")) {
    if (o !== void 0) {
      r(e, s, o);
      return;
    }
    if (s !== void 0) {
      r(e, s);
      return;
    }
    r(e);
  }
}, it = (r, e) => {
  if (gs) {
    r.classList.add(e);
    return;
  }
  r.className += (r.className ? " " : "") + e;
}, Ie = (r, e) => {
  if (gs) {
    r.classList.remove(e);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, zn = (r) => {
  r.llTempImage = document.createElement("IMG");
}, Hn = (r) => {
  delete r.llTempImage;
}, Ds = (r) => r.llTempImage, Ht = (r, e) => {
  if (!e)
    return;
  const s = e._observer;
  s && s.unobserve(r);
}, Un = (r) => {
  r.disconnect();
}, Kn = (r, e, s) => {
  e.unobserve_entered && Ht(r, s);
}, yr = (r, e) => {
  r && (r.loadingCount += e);
}, Yn = (r) => {
  r && (r.toLoadCount -= 1);
}, Cs = (r, e) => {
  r && (r.toLoadCount = e);
}, Wn = (r) => r.loadingCount > 0, Xn = (r) => r.toLoadCount > 0, Es = (r) => {
  let e = [];
  for (let s = 0, o; o = r.children[s]; s += 1)
    o.tagName === "SOURCE" && e.push(o);
  return e;
}, Sr = (r, e) => {
  const s = r.parentNode;
  if (!s || s.tagName !== "PICTURE")
    return;
  Es(s).forEach(e);
}, Ms = (r, e) => {
  Es(r).forEach(e);
}, Ut = [Pe], $s = [Pe, bs], bt = [Pe, fr, pr], Ts = [ys], Kt = (r) => !!r[_t], As = (r) => r[_t], Is = (r) => delete r[_t], st = (r, e) => {
  if (Kt(r))
    return;
  const s = {};
  e.forEach((o) => {
    s[o] = r.getAttribute(o);
  }), r[_t] = s;
}, Zn = (r) => {
  Kt(r) || (r[_t] = { backgroundImage: r.style.backgroundImage });
}, Fn = (r, e, s) => {
  if (!s) {
    r.removeAttribute(e);
    return;
  }
  r.setAttribute(e, s);
}, Xe = (r, e) => {
  if (!Kt(r))
    return;
  const s = As(r);
  e.forEach((o) => {
    Fn(r, o, s[o]);
  });
}, qn = (r) => {
  if (!Kt(r))
    return;
  const e = As(r);
  r.style.backgroundImage = e.backgroundImage;
}, Os = (r, e, s) => {
  it(r, e.class_applied), Fe(r, ws), s && (e.unobserve_completed && Ht(r, e), Ue(e.callback_applied, r, s));
}, Ls = (r, e, s) => {
  it(r, e.class_loading), Fe(r, gr), s && (yr(s, 1), Ue(e.callback_loading, r, s));
}, Be = (r, e, s) => {
  s && r.setAttribute(e, s);
}, zr = (r, e) => {
  Be(r, pr, fe(r, e.data_sizes)), Be(r, fr, fe(r, e.data_srcset)), Be(r, Pe, fe(r, e.data_src));
}, Gn = (r, e) => {
  Sr(r, (s) => {
    st(s, bt), zr(s, e);
  }), st(r, bt), zr(r, e);
}, Jn = (r, e) => {
  st(r, Ut), Be(r, Pe, fe(r, e.data_src));
}, Qn = (r, e) => {
  Ms(r, (s) => {
    st(s, Ut), Be(s, Pe, fe(s, e.data_src));
  }), st(r, $s), Be(r, bs, fe(r, e.data_poster)), Be(r, Pe, fe(r, e.data_src)), r.load();
}, ei = (r, e) => {
  st(r, Ts), Be(r, ys, fe(r, e.data_src));
}, ti = (r, e, s) => {
  const o = fe(r, e.data_bg), l = fe(r, e.data_bg_hidpi), i = ms && l ? l : o;
  i && (r.style.backgroundImage = `url("${i}")`, Ds(r).setAttribute(Pe, i), Ls(r, e, s));
}, ri = (r, e, s) => {
  const o = fe(r, e.data_bg_multi), l = fe(r, e.data_bg_multi_hidpi), i = ms && l ? l : o;
  i && (r.style.backgroundImage = i, Os(r, e, s));
}, si = (r, e, s) => {
  const o = fe(r, e.data_bg_set);
  if (!o)
    return;
  const l = o.split("|");
  let i = l.map((d) => `image-set(${d})`);
  r.style.backgroundImage = i.join(), r.style.backgroundImage === "" && (i = l.map((d) => `-webkit-image-set(${d})`), r.style.backgroundImage = i.join()), Os(r, e, s);
}, Ps = {
  IMG: Gn,
  IFRAME: Jn,
  VIDEO: Qn,
  OBJECT: ei
}, oi = (r, e) => {
  const s = Ps[r.tagName];
  s && s(r, e);
}, ni = (r, e, s) => {
  const o = Ps[r.tagName];
  o && (o(r, e), Ls(r, e, s));
}, ii = ["IMG", "IFRAME", "VIDEO", "OBJECT"], ai = (r) => ii.indexOf(r.tagName) > -1, Ns = (r, e) => {
  e && !Wn(e) && !Xn(e) && Ue(r.callback_finish, e);
}, Hr = (r, e, s) => {
  r.addEventListener(e, s), r.llEvLisnrs[e] = s;
}, li = (r, e, s) => {
  r.removeEventListener(e, s);
}, wr = (r) => !!r.llEvLisnrs, ci = (r, e, s) => {
  wr(r) || (r.llEvLisnrs = {});
  const o = r.tagName === "VIDEO" ? "loadeddata" : "load";
  Hr(r, o, e), Hr(r, "error", s);
}, rr = (r) => {
  if (!wr(r))
    return;
  const e = r.llEvLisnrs;
  for (let s in e) {
    const o = e[s];
    li(r, s, o);
  }
  delete r.llEvLisnrs;
}, js = (r, e, s) => {
  Hn(r), yr(s, -1), Yn(s), Ie(r, e.class_loading), e.unobserve_completed && Ht(r, s);
}, ui = (r, e, s, o) => {
  const l = br(e);
  js(e, s, o), it(e, s.class_loaded), Fe(e, Ss), Ue(s.callback_loaded, e, o), l || Ns(s, o);
}, di = (r, e, s, o) => {
  const l = br(e);
  js(e, s, o), it(e, s.class_error), Fe(e, mr), Ue(s.callback_error, e, o), s.restore_on_error && Xe(e, bt), l || Ns(s, o);
}, _r = (r, e, s) => {
  const o = Ds(r) || r;
  if (wr(o))
    return;
  ci(o, (d) => {
    ui(d, r, e, s), rr(o);
  }, (d) => {
    di(d, r, e, s), rr(o);
  });
}, hi = (r, e, s) => {
  zn(r), _r(r, e, s), Zn(r), ti(r, e, s), ri(r, e, s), si(r, e, s);
}, fi = (r, e, s) => {
  _r(r, e, s), ni(r, e, s);
}, xr = (r, e, s) => {
  ai(r) ? fi(r, e, s) : hi(r, e, s);
}, pi = (r, e, s) => {
  r.setAttribute("loading", "lazy"), _r(r, e, s), oi(r, e), Fe(r, _s);
}, Ur = (r) => {
  r.removeAttribute(Pe), r.removeAttribute(fr), r.removeAttribute(pr);
}, gi = (r) => {
  Sr(r, (e) => {
    Ur(e);
  }), Ur(r);
}, Rs = (r) => {
  Sr(r, (e) => {
    Xe(e, bt);
  }), Xe(r, bt);
}, mi = (r) => {
  Ms(r, (e) => {
    Xe(e, Ut);
  }), Xe(r, $s), r.load();
}, vi = (r) => {
  Xe(r, Ut);
}, bi = (r) => {
  Xe(r, Ts);
}, yi = {
  IMG: Rs,
  IFRAME: vi,
  VIDEO: mi,
  OBJECT: bi
}, Si = (r) => {
  const e = yi[r.tagName];
  if (!e) {
    qn(r);
    return;
  }
  e(r);
}, wi = (r, e) => {
  vr(r) || br(r) || (Ie(r, e.class_entered), Ie(r, e.class_exited), Ie(r, e.class_applied), Ie(r, e.class_loading), Ie(r, e.class_loaded), Ie(r, e.class_error));
}, _i = (r, e) => {
  Si(r), wi(r, e), zt(r), Is(r);
}, xi = (r, e, s, o) => {
  s.cancel_on_exit && jn(r) && r.tagName === "IMG" && (rr(r), gi(r), Rs(r), Ie(r, s.class_loading), yr(o, -1), zt(r), Ue(s.callback_cancel, r, e, o));
}, ki = (r, e, s, o) => {
  const l = Bn(r);
  Fe(r, Pn), it(r, s.class_entered), Ie(r, s.class_exited), Kn(r, s, o), Ue(s.callback_enter, r, e, o), !l && xr(r, s, o);
}, Di = (r, e, s, o) => {
  vr(r) || (it(r, s.class_exited), xi(r, e, s, o), Ue(s.callback_exit, r, e, o));
}, Ci = ["IMG", "IFRAME", "VIDEO"], Vs = (r) => r.use_native && "loading" in HTMLImageElement.prototype, Ei = (r, e, s) => {
  r.forEach((o) => {
    Ci.indexOf(o.tagName) !== -1 && pi(o, e, s);
  }), Cs(s, 0);
}, Mi = (r) => r.isIntersecting || r.intersectionRatio > 0, $i = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), Ti = (r, e, s) => {
  r.forEach(
    (o) => Mi(o) ? ki(o.target, o, e, s) : Di(o.target, o, e, s)
  );
}, Ai = (r, e) => {
  e.forEach((s) => {
    r.observe(s);
  });
}, Ii = (r, e) => {
  Un(r), Ai(r, e);
}, Oi = (r, e) => {
  !ps || Vs(r) || (e._observer = new IntersectionObserver((s) => {
    Ti(s, r, e);
  }, $i(r)));
}, Bs = (r) => Array.prototype.slice.call(r), jt = (r) => r.container.querySelectorAll(r.elements_selector), Li = (r) => Bs(r).filter(vr), Pi = (r) => Rn(r), Ni = (r) => Bs(r).filter(Pi), Kr = (r, e) => Li(r || jt(e)), ji = (r, e) => {
  Ni(jt(r)).forEach((o) => {
    Ie(o, r.class_error), zt(o);
  }), e.update();
}, Ri = (r, e) => {
  He && (e._onlineHandler = () => {
    ji(r, e);
  }, window.addEventListener("online", e._onlineHandler));
}, Vi = (r) => {
  He && window.removeEventListener("online", r._onlineHandler);
}, kt = function(r, e) {
  const s = vs(r);
  this._settings = s, this.loadingCount = 0, Oi(s, this), Ri(s, this), this.update(e);
};
kt.prototype = {
  update: function(r) {
    const e = this._settings, s = Kr(r, e);
    if (Cs(this, s.length), fs || !ps) {
      this.loadAll(s);
      return;
    }
    if (Vs(e)) {
      Ei(s, e, this);
      return;
    }
    Ii(this._observer, s);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Vi(this), jt(this._settings).forEach((r) => {
      Is(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const e = this._settings;
    Kr(r, e).forEach((o) => {
      Ht(o, this), xr(o, e, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    jt(r).forEach((e) => {
      _i(e, r);
    });
  }
};
kt.load = (r, e) => {
  const s = vs(e);
  xr(r, s);
};
kt.resetStatus = (r) => {
  zt(r);
};
He && Ln(kt, window.lazyLoadOptions);
const Bi = { class: "relative flex-auto flex flex-col overflow-hidden" }, zi = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, Hi = { class: "absolute" }, Ui = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute h-6 w-6 md:h-12 md:w-12 m-auto stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600 z-10",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), Ki = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, Yi = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], Wi = { class: "grid grid-cols-12 items-center" }, Xi = { class: "flex col-span-7 items-center" }, Zi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Fi = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), qi = [
  Fi
], Gi = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ji = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Qi = [
  Ji
], ea = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ta = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, ra = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], sa = { class: "grid grid-cols-12 items-center" }, oa = { class: "flex col-span-7 items-center" }, na = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ia = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), aa = [
  ia
], la = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ca = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ua = [
  ca
], da = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ha = { class: "col-span-2 text-center" }, fa = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap text-center" }, pa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ga = { class: "relative" }, ma = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, va = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ba = [
  va
], ya = ["data-src", "alt"], Sa = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, wa = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), _a = [
  wa
], xa = {
  key: 3,
  class: "absolute hidden md:block top-1/2 w-full text-center text-neutral-500"
}, ka = { class: "break-all" }, Da = {
  name: "VFExplorer"
}, Ca = /* @__PURE__ */ Object.assign(Da, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(r) {
    const e = r, s = L("emitter"), { setStore: o, getStore: l } = L("storage"), i = L("adapter"), d = (P) => P == null ? void 0 : P.substring(0, 3), v = (P) => P.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), a = O(null), g = O(null), f = O(0), b = O(null), { t: S } = L("i18n"), I = Math.floor(Math.random() * 2 ** 32), T = O(l("full-screen", !1)), D = new kt();
    s.on("vf-fullscreen-toggle", () => {
      a.value.style.height = null, T.value = !T.value, o("full-screen", T.value);
    });
    const M = O("");
    s.on("vf-search-query", ({ newQuery: P }) => {
      M.value = P, P ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: e.data.adapter,
          path: e.data.dirname,
          filter: P
        },
        onSuccess: (z) => {
          z.files.length || s.emit("vf-toast-push", { label: S("No search result found.") });
        }
      }) : s.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: e.data.dirname } });
    });
    let R = null;
    const V = () => {
      R && clearTimeout(R);
    }, A = O(!0), B = (P) => {
      P.touches.length > 1 && (A.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), A.value = !A.value);
    }, X = (P) => {
      R = setTimeout(() => {
        const z = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: P.target.getBoundingClientRect().x,
          clientY: P.target.getBoundingClientRect().y
        });
        P.target.dispatchEvent(z);
      }, 500);
    }, k = (P) => {
      P.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: P.path } })) : s.emit("ca-download", P);
    }, j = Lt({ active: !1, column: "", order: "" }), G = (P = !0) => {
      let z = [...e.data.files], N = j.column, ee = j.order == "asc" ? 1 : -1;
      if (!P)
        return z;
      const K = (xe, we) => typeof xe == "string" && typeof we == "string" ? xe.toLowerCase().localeCompare(we.toLowerCase()) : xe < we ? -1 : xe > we ? 1 : 0;
      return j.active && (z = z.slice().sort((xe, we) => K(xe[N], we[N]) * ee)), z;
    }, oe = (P) => {
      j.active && j.column == P ? (j.active = j.order == "asc", j.column = P, j.order = "desc") : (j.active = !0, j.column = P, j.order = "asc");
    }, re = () => b.value.getSelection().map((P) => JSON.parse(P.dataset.item)), ce = (P, z) => {
      if (P.altKey || P.ctrlKey || P.metaKey)
        return P.preventDefault(), !1;
      P.dataTransfer.setDragImage(g.value, 0, 15), P.dataTransfer.effectAllowed = "all", P.dataTransfer.dropEffect = "copy", P.dataTransfer.setData("items", JSON.stringify(re()));
    }, Se = (P, z) => {
      P.preventDefault();
      let N = JSON.parse(P.dataTransfer.getData("items"));
      if (N.find((ee) => ee.storage != i.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", { type: "move", items: { from: N, to: z } });
    }, pe = (P, z) => {
      P.preventDefault(), !z || z.type !== "dir" || b.value.getSelection().find((N) => N == P.currentTarget) ? (P.dataTransfer.dropEffect = "none", P.dataTransfer.effectAllowed = "none") : P.dataTransfer.dropEffect = "copy";
    };
    return Me(() => {
      b.value = new wn({
        area: a.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on("vf-explorer-update", () => Bt(() => {
        b.value.clearSelection(), b.value.setSelectables(document.getElementsByClassName("vf-item-" + I));
      })), b.value.subscribe("predragstart", ({ event: P, isDragging: z }) => {
        if (z)
          f.value = b.value.getSelection().length, b.value.break();
        else {
          const N = P.target.offsetWidth - P.offsetX, ee = P.target.offsetHeight - P.offsetY;
          N < 15 && ee < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: P }) => {
        P && b.value.break();
      }), b.value.subscribe("callback", ({ items: P, event: z, isDragging: N }) => {
        s.emit("vf-nodes-selected", re()), f.value = b.value.getSelection().length;
      });
    }), No(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), D.update();
    }), Me(() => {
      Vt(() => e.view, () => s.emit("vf-explorer-update"));
    }), (P, z) => (w(), C("div", Bi, [
      r.view == "list" || M.value.length ? (w(), C("div", zi, [
        p("div", {
          onClick: z[0] || (z[0] = (N) => oe("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          te(E(x(S)("Name")) + " ", 1),
          be(Ee(At, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [mt, j.active && j.column == "basename"]
          ])
        ]),
        M.value.length ? U("", !0) : (w(), C("div", {
          key: 0,
          onClick: z[1] || (z[1] = (N) => oe("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          te(E(x(S)("Size")) + " ", 1),
          be(Ee(At, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [mt, j.active && j.column == "file_size"]
          ])
        ])),
        M.value.length ? U("", !0) : (w(), C("div", {
          key: 1,
          onClick: z[2] || (z[2] = (N) => oe("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          te(E(x(S)("Date")) + " ", 1),
          be(Ee(At, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [mt, j.active && j.column == "last_modified"]
          ])
        ])),
        M.value.length ? (w(), C("div", {
          key: 2,
          onClick: z[3] || (z[3] = (N) => oe("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          te(E(x(S)("Filepath")) + " ", 1),
          be(Ee(At, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [mt, j.active && j.column == "path"]
          ])
        ])) : U("", !0)
      ])) : U("", !0),
      p("div", Hi, [
        p("div", {
          ref_key: "dragImage",
          ref: g,
          class: "absolute -z-50 -top-96"
        }, [
          Ui,
          p("div", Ki, E(f.value), 1)
        ], 512)
      ]),
      p("div", {
        onTouchstart: B,
        onContextmenu: z[10] || (z[10] = We((N) => x(s).emit("vf-contextmenu-show", { event: N, area: a.value, items: re() }), ["self", "prevent"])),
        class: he([T.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: a
      }, [
        M.value.length ? (w(!0), C(ie, { key: 0 }, ye(G(), (N, ee) => (w(), C("div", {
          onDblclick: (K) => k(N),
          onTouchstart: z[4] || (z[4] = (K) => X(K)),
          onTouchend: z[5] || (z[5] = (K) => V()),
          onContextmenu: We((K) => x(s).emit("vf-contextmenu-show", { event: K, area: a.value, items: re(), target: N }), ["prevent"]),
          class: he(["vf-item-" + x(I), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": ee
        }, [
          p("div", Wi, [
            p("div", Xi, [
              N.type == "dir" ? (w(), C("svg", Zi, qi)) : (w(), C("svg", Gi, Qi)),
              p("span", ea, E(N.basename), 1)
            ]),
            p("div", ta, E(N.path), 1)
          ])
        ], 42, Yi))), 256)) : U("", !0),
        r.view == "list" && !M.value.length ? (w(!0), C(ie, { key: 1 }, ye(G(), (N, ee) => (w(), C("div", {
          draggable: "true",
          onDblclick: (K) => k(N),
          onTouchstart: z[6] || (z[6] = (K) => X(K)),
          onTouchend: z[7] || (z[7] = (K) => V()),
          onContextmenu: We((K) => x(s).emit("vf-contextmenu-show", { event: K, area: a.value, items: re(), target: N }), ["prevent"]),
          onDragstart: (K) => ce(K),
          onDragover: (K) => pe(K, N),
          onDrop: (K) => Se(K, N),
          class: he(["vf-item-" + x(I), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": ee
        }, [
          p("div", sa, [
            p("div", oa, [
              N.type == "dir" ? (w(), C("svg", na, aa)) : (w(), C("svg", la, ua)),
              p("span", da, E(N.basename), 1)
            ]),
            p("div", ha, E(N.file_size ? x(ds)(N.file_size) : ""), 1),
            p("div", fa, E(x(hs)(N.last_modified)), 1)
          ])
        ], 42, ra))), 256)) : U("", !0),
        r.view == "grid" && !M.value.length ? (w(!0), C(ie, { key: 2 }, ye(G(!1), (N, ee) => (w(), C("div", {
          draggable: "true",
          onDblclick: (K) => k(N),
          onTouchstart: z[8] || (z[8] = (K) => X(K)),
          onTouchend: z[9] || (z[9] = (K) => V()),
          onContextmenu: We((K) => x(s).emit("vf-contextmenu-show", { event: K, area: a.value, items: re(), target: N }), ["prevent"]),
          onDragstart: (K) => ce(K),
          onDragover: (K) => pe(K, N),
          onDrop: (K) => Se(K, N),
          class: he(["vf-item-" + x(I), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
          "data-type": N.type,
          "data-item": JSON.stringify(N),
          "data-index": ee
        }, [
          p("div", null, [
            p("div", ga, [
              N.type == "dir" ? (w(), C("svg", ma, ba)) : (N.mime_type ?? "").startsWith("image") ? (w(), C("img", {
                key: 1,
                class: "lazy h-10 md:h-12 m-auto",
                "data-src": x(tr)(x(i).value, N.path),
                alt: N.basename
              }, null, 8, ya)) : (w(), C("svg", Sa, _a)),
              !(N.mime_type ?? "").startsWith("image") && N.type != "dir" ? (w(), C("div", xa, E(d(N.extension)), 1)) : U("", !0)
            ]),
            p("span", ka, E(v(N.basename)), 1)
          ])
        ], 42, pa))), 256)) : U("", !0)
      ], 34),
      Ee(An)
    ]));
  }
}), Ea = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, Ma = { class: "flex leading-5 items-center" }, $a = ["aria-label"], Ta = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  })
], -1), Aa = [
  Ta
], Ia = ["value"], Oa = { class: "ml-3" }, La = { key: 0 }, Pa = { class: "ml-1" }, Na = { class: "flex leading-5 items-center" }, ja = {
  value: "",
  disabled: ""
}, Ra = /* @__PURE__ */ jo('<option value="en">English</option><option value="fr">French (Français)</option><option value="de">German (Deutsch)</option><option value="tr">Hebrew (עִברִית)</option><option value="hi">Hindi (हिंदी)</option><option value="fa">Persian (فارسی)</option><option value="ru">Russian (Pусский)</option><option value="sv">Swedish (Svenska)</option><option value="tr">Turkish (Türkçe)</option>', 9), Va = {
  name: "VFStatusbar"
}, Ba = /* @__PURE__ */ Object.assign(Va, {
  props: {
    data: Object
  },
  setup(r) {
    const e = L("emitter"), { getStore: s, setStore: o } = L("storage"), l = O(0), i = L("adapter"), d = L("hideAdapterSelection"), v = L("hideLanguageSelection"), { t: a, changeLocale: g } = L("i18n"), f = O(s("locale", "")), b = () => {
      e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: i.value } }), o("adapter", i.value);
    };
    e.on("vf-nodes-selected", (I) => {
      l.value = I.length;
    });
    const S = O("");
    return e.on("vf-search-query", ({ newQuery: I }) => {
      S.value = I;
    }), (I, T) => (w(), C("div", Ea, [
      p("div", Ma, [
        p("div", {
          class: "mx-2",
          "aria-label": x(a)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, Aa, 8, $a),
        x(d) ? U("", !0) : be((w(), C("select", {
          key: 0,
          "onUpdate:modelValue": T[0] || (T[0] = (D) => ls(i) ? i.value = D : null),
          onChange: b,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (w(!0), C(ie, null, ye(r.data.storages, (D) => (w(), C("option", { value: D }, E(D), 9, Ia))), 256))
        ], 544)), [
          [Rr, x(i)]
        ]),
        p("div", Oa, [
          S.value.length ? (w(), C("span", La, E(r.data.files.length) + " items found. ", 1)) : U("", !0),
          p("span", Pa, E(l.value > 0 ? l.value + " " + x(a)("item(s) selected.") : ""), 1)
        ])
      ]),
      p("div", Na, [
        x(v) ? U("", !0) : be((w(), C("select", {
          key: 0,
          "onUpdate:modelValue": T[1] || (T[1] = (D) => f.value = D),
          onChange: T[2] || (T[2] = (D) => x(g)(D.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          p("option", ja, E(x(a)("Language")), 1),
          Ra
        ], 544)), [
          [Rr, f.value]
        ])
      ])
    ]));
  }
}), za = (r, e = 0, s = !1) => {
  let o;
  return (...l) => {
    s && !o && r(...l), clearTimeout(o), o = setTimeout(() => {
      r(...l);
    }, e);
  };
}, Ha = (r, e, s) => {
  const o = O(r);
  return Ro((i, d) => ({
    get() {
      return i(), o.value;
    },
    set: za(
      (v) => {
        o.value = v, d();
      },
      e,
      s
    )
  }));
}, Ua = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, Ka = ["aria-label"], Ya = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Wa = [
  Ya
], Xa = ["aria-label"], Za = /* @__PURE__ */ p("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Fa = [
  Za
], qa = ["aria-label"], Ga = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Ja = [
  Ga
], Qa = ["onClick"], el = /* @__PURE__ */ p("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), tl = [
  el
], rl = { class: "flex leading-5" }, sl = /* @__PURE__ */ p("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), ol = ["title", "onClick"], nl = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, il = /* @__PURE__ */ p("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), al = /* @__PURE__ */ p("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), ll = [
  il,
  al
], cl = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, ul = /* @__PURE__ */ p("svg", {
  class: "h-6 w-6 p-1 m-auto stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), dl = /* @__PURE__ */ p("div", { class: "w-full" }, null, -1), hl = ["onKeydown", "placeholder"], fl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), pl = [
  fl
], gl = {
  name: "VFBreadcrumb"
}, ml = /* @__PURE__ */ Object.assign(gl, {
  props: {
    data: Object
  },
  setup(r) {
    const e = L("emitter");
    L("storage");
    const s = L("adapter"), o = O(null), l = O([]), i = O(!1), d = O(null), v = r, { t: a } = L("i18n"), g = L("loadingState");
    e.on("vf-explorer-update", () => {
      let V = [], A = [];
      o.value = v.data.dirname ?? s.value + "://", o.value.length == 0 && (l.value = []), o.value.replace(s.value + "://", "").split("/").forEach(function(B) {
        V.push(B), V.join("/") != "" && A.push({
          basename: B,
          name: B,
          path: s.value + "://" + V.join("/"),
          type: "dir"
        });
      }), A.length > 4 && (A = A.slice(-5), A[0].name = ".."), l.value = A;
    });
    const f = () => {
      i.value = !1, S.value = "";
    };
    e.on("vf-search-exit", () => {
      f();
    });
    const b = () => {
      i.value = !0, Bt(() => d.value.focus());
    }, S = Ha("", 400), I = () => g.value;
    Vt(S, (V) => {
      e.emit("vf-toast-clear"), e.emit("vf-search-query", { newQuery: V });
    });
    const T = () => l.value.length && !i.value, D = (V) => {
      V.preventDefault();
      let A = JSON.parse(V.dataTransfer.getData("items"));
      if (A.find((B) => B.storage != s.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      e.emit("vf-modal-show", {
        type: "move",
        items: { from: A, to: l.value[l.value.length - 2] ?? { path: s.value + "://" } }
      });
    }, M = (V) => {
      V.preventDefault(), T() ? V.dataTransfer.dropEffect = "copy" : (V.dataTransfer.dropEffect = "none", V.dataTransfer.effectAllowed = "none");
    }, R = () => {
      S.value == "" && f();
    };
    return (V, A) => (w(), C("div", Ua, [
      p("span", {
        "aria-label": x(a)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), C("svg", {
          onDragover: A[0] || (A[0] = (B) => M(B)),
          onDrop: A[1] || (A[1] = (B) => D(B)),
          onClick: A[2] || (A[2] = (B) => {
            var X;
            return !T() || x(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: ((X = l.value[l.value.length - 2]) == null ? void 0 : X.path) ?? x(s) + "://" } });
          }),
          class: he(["h-6 w-6 p-0.5 rounded", T() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Wa, 34))
      ], 8, Ka),
      I() ? (w(), C("span", {
        key: 1,
        "aria-label": x(a)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), C("svg", {
          onClick: A[4] || (A[4] = (B) => x(e).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Ja))
      ], 8, qa)) : (w(), C("span", {
        key: 0,
        "aria-label": x(a)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), C("svg", {
          onClick: A[3] || (A[3] = (B) => {
            x(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: r.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Fa))
      ], 8, Xa)),
      i.value ? (w(), C("div", cl, [
        ul,
        dl,
        be(p("input", {
          ref_key: "searchInput",
          ref: d,
          onKeydown: ot(f, ["esc"]),
          onBlur: R,
          "onUpdate:modelValue": A[6] || (A[6] = (B) => ls(S) ? S.value = B : null),
          placeholder: x(a)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, hl), [
          [nt, x(S)]
        ]),
        (w(), C("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: f,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, pl))
      ])) : (w(), C("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: We(b, ["self"])
      }, [
        (w(), C("svg", {
          onClick: A[5] || (A[5] = (B) => x(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, tl)),
        p("div", rl, [
          (w(!0), C(ie, null, ye(l.value, (B, X) => (w(), C("div", { key: X }, [
            sl,
            p("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: B.basename,
              onClick: (k) => x(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: B.path } })
            }, E(B.name), 9, ol)
          ]))), 128))
        ]),
        I() ? (w(), C("svg", nl, ll)) : U("", !0)
      ], 8, Qa))
    ]));
  }
}), vl = ["onClick"], bl = /* @__PURE__ */ p("span", { class: "px-1" }, null, -1), yl = {
  name: "VFContextMenu"
}, Sl = /* @__PURE__ */ Object.assign(yl, {
  props: {
    current: Object
  },
  setup(r) {
    const e = L("emitter"), s = O(null), o = L("userRole"), l = r, i = Lt({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), d = O([]), v = et(() => l.current.dirname.startsWith(`${l.current.adapter}://Trash`));
    e.on("vf-context-selected", (D) => {
      d.value = D;
    });
    const { t: a } = L("i18n"), g = {
      newfolder: {
        title: () => a("New Folder"),
        action: () => {
          e.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => a("Delete"),
        action: () => {
          e.emit("vf-modal-show", { type: "delete", items: d });
        }
      },
      restore: {
        title: () => a("Restore"),
        action: () => {
          e.emit("vf-modal-show", { type: "restore", items: d });
        }
      },
      refresh: {
        title: () => a("Refresh"),
        action: () => {
          e.emit("vf-fetch", { params: { q: "index", adapter: l.current.adapter, path: l.current.dirname } });
        }
      },
      preview: {
        title: () => a("Audit"),
        action: () => {
          e.emit("ca-preview", { type: "preview", adapter: l.current.adapter, item: d.value[0] });
        }
      },
      open: {
        title: () => a("Open"),
        action: () => {
          e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: l.current.adapter, path: d.value[0].path } });
        }
      },
      openDir: {
        title: () => a("Open containing folder"),
        action: () => {
          e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: l.current.adapter, path: d.value[0].dir } });
        }
      },
      download: {
        title: () => a("Download"),
        action: () => {
          e.emit("vf-download", d.value);
        }
      },
      archive: {
        title: () => a("Archive"),
        action: () => {
          e.emit("vf-modal-show", { type: "archive", items: d });
        }
      },
      unarchive: {
        title: () => a("Unarchive"),
        action: () => {
          e.emit("vf-modal-show", { type: "unarchive", items: d });
        }
      },
      rename: {
        title: () => a("Edit"),
        action: () => {
          e.emit("ca-edit", { type: "edit", items: d.value, current: l.current });
        }
      }
    }, f = (D) => {
      e.emit("vf-contextmenu-hide"), D.action();
    }, b = O("");
    e.on("vf-search-query", ({ newQuery: D }) => {
      b.value = D;
    }), e.on("vf-contextmenu-show", ({ event: D, area: M, items: R, target: V = null }) => {
      if (i.items = [], b.value)
        if (V)
          i.items.push(g.openDir), i.items.push(g.download), e.emit("vf-context-selected", [V]);
        else
          return;
      else
        !V && !b.value ? (i.items.push(g.refresh), (I.value || T.value) && i.items.push(g.newfolder), e.emit("vf-context-selected", [])) : R.length > 1 && R.some((A) => A.path === V.path) ? (i.items.push(g.refresh), (I.value || T.value) && i.items.push(g.rename), R.some((A) => A.type === "dir") || i.items.push(g.download), (I.value || T.value) && i.items.push(g.delete), e.emit("vf-context-selected", R)) : (V.type == "dir" ? i.items.push(g.open) : ((I.value || T.value) && i.items.push(g.preview), i.items.push(g.download)), (I.value || T.value) && i.items.push(g.rename), (I.value || T.value) && (v.value ? i.items.push(g.restore) : i.items.push(g.delete)), e.emit("vf-context-selected", [V]));
      S(D, M);
    }), e.on("vf-contextmenu-hide", () => {
      i.active = !1;
    });
    const S = (D, M) => {
      i.active = !0, Bt(() => {
        let R = M.getBoundingClientRect(), V = D.pageX, A = D.pageY, B = s.value.offsetHeight, X = s.value.offsetWidth;
        V = R.right - D.pageX + window.scrollX < X ? V - X : V, A = R.bottom - D.pageY + window.scrollY < B ? A - B : A, i.positions = {
          left: V + "px",
          top: A + "px"
        };
      });
    }, I = et(() => o === "admin"), T = et(() => o === "ae");
    return (D, M) => i.active ? (w(), C("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: s,
      style: cs(i.positions)
    }, [
      (w(!0), C(ie, null, ye(i.items, (R) => (w(), C("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: R.title,
        onClick: (V) => f(R)
      }, [
        bl,
        p("span", null, E(R.title()), 1)
      ], 8, vl))), 128))
    ], 4)) : U("", !0);
  }
}), wl = (r, e) => {
  const s = r[e];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((o, l) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(l.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
};
async function _l(r) {
  const e = await wl(/* @__PURE__ */ Object.assign({ "../locales/de.json": () => import("./de-81b457a7.js"), "../locales/en.json": () => import("./en-ed1f1848.js"), "../locales/fa.json": () => import("./fa-49628944.js"), "../locales/he.json": () => import("./he-736e9ea8.js"), "../locales/hi.json": () => import("./hi-a0031fe7.js"), "../locales/ru.json": () => import("./ru-d8535e72.js"), "../locales/sv.json": () => import("./sv-316febc7.js"), "../locales/tr.json": () => import("./tr-6f9ffcfe.js") }), `../locales/${r}.json`);
  return JSON.parse(e.default);
}
function xl(r, e, s) {
  const { getStore: o, setStore: l } = er(r), i = O({}), d = (g, f = "en") => {
    _l(g).then((b) => {
      i.value = b, l("locale", g), l("translations", b), s.emit("vf-toast-push", { label: "The language is set to " + g });
    }).catch((b) => {
      f ? (s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), d(f, null)) : s.emit("vf-toast-push", { label: "Locale cannot be loaded!", type: "error" });
    });
  };
  o("locale") ? i.value = o("translations") : d(e);
  const v = (g, ...f) => f.length ? v(g = g.replace("%s", f.shift()), ...f) : g;
  function a(g, ...f) {
    return i.value.hasOwnProperty(g) ? v(i.value[g], ...f) : v(g, ...f);
  }
  return { t: a, changeLocale: d };
}
const kl = { class: "vuefinder" }, Dl = /* @__PURE__ */ p("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), Cl = {
  name: "VueFinder"
}, El = /* @__PURE__ */ Object.assign(Cl, {
  props: {
    url: {
      type: [String]
    },
    id: {
      type: String,
      default: "vf"
    },
    dark: {
      type: Boolean,
      default: !1
    },
    usePropDarkMode: {
      type: Boolean,
      default: !1
    },
    locale: {
      type: String,
      default: "en"
    },
    maxHeight: {
      type: String,
      default: "600px"
    },
    maxFileSize: {
      type: String,
      default: "10mb"
    },
    postData: {
      type: Object,
      default: {}
    },
    downloadOverrideEvent: {
      type: String
    },
    uploadOverrideEvent: {
      type: String
    },
    hideAdapterSelection: {
      type: Boolean,
      default: !1
    },
    hideLanguageSelection: {
      type: Boolean,
      default: !1
    },
    userRole: {
      type: String
    }
  },
  setup(r, { expose: e }) {
    const s = r, o = Bo(), { setStore: l, getStore: i } = er(s.id), d = O(i("adapter"));
    ve("emitter", o), ve("storage", er(s.id)), ve("postData", s.postData), ve("adapter", d), ve("maxFileSize", s.maxFileSize), ve("usePropDarkMode", s.usePropDarkMode), ve("downloadOverrideEvent", s.downloadOverrideEvent), ve("uploadOverrideEvent", s.uploadOverrideEvent), ve("hideAdapterSelection", s.hideAdapterSelection), ve("hideLanguageSelection", s.hideLanguageSelection), ve("userRole", s.userRole);
    const v = xl(s.id, s.locale, o);
    ve("i18n", v);
    const { apiUrl: a, setApiUrl: g } = ze();
    g(s.url);
    const f = Lt({ adapter: d.value, storages: [], dirname: ".", files: [] }), b = O(i("viewport", "grid")), S = s.usePropDarkMode ? et(() => s.dark) : O(i("darkMode", s.dark));
    o.on("vf-darkMode-toggle", () => {
      S.value = !S.value, l("darkMode", S.value);
    });
    const I = O(!1);
    ve("loadingState", I);
    const T = O(i("full-screen", !1));
    o.on("vf-fullscreen-toggle", () => {
      T.value = !T.value, l("full-screen", T.value);
    }), o.on("vf-view-toggle", (A) => {
      b.value = A;
    });
    const D = Lt({
      active: !1,
      type: "delete",
      data: {}
    });
    o.on("vf-modal-close", () => {
      D.active = !1;
    }), o.on("vf-modal-show", (A) => {
      D.active = !0, D.type = A.type, D.data = A;
    });
    const M = (A) => {
      Object.assign(f, A), o.emit("vf-nodes-selected", {}), o.emit("vf-explorer-update");
    };
    let R;
    return o.on("vf-fetch-abort", () => {
      R.abort(), I.value = !1;
    }), o.on("vf-fetch", ({ params: A, onSuccess: B = null, onError: X = null }) => {
      ["index", "search"].includes(A.q) && (R && R.abort(), I.value = !0), R = new AbortController();
      const k = R.signal;
      Nt(a.value, { params: A, signal: k }).then((j) => {
        d.value = j.adapter, ["index", "search"].includes(A.q) && (I.value = !1), o.emit("vf-modal-close"), M(j), B(j);
      }).catch((j) => {
        X && X(j);
      }).finally(() => {
      });
    }), o.on("vf-download", (A) => {
      s.downloadOverrideEvent ? o.emit(s.downloadOverrideEvent, A) : A.url && (document.getElementById("download_frame").src = A.url), o.emit("vf-modal-close");
    }), Me(() => {
      o.emit("vf-fetch", { params: { q: "index", adapter: d.value } });
    }), e({
      getEmitter: () => o
    }), (A, B) => (w(), C("div", kl, [
      p("div", {
        class: he(x(S) ? "dark" : "")
      }, [
        p("div", {
          class: he([T.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: cs(T.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: B[0] || (B[0] = (X) => x(o).emit("vf-contextmenu-hide")),
          onTouchstart: B[1] || (B[1] = (X) => x(o).emit("vf-contextmenu-hide"))
        }, [
          Ee(vn, { data: f }, null, 8, ["data"]),
          Ee(ml, { data: f }, null, 8, ["data"]),
          Ee(Ca, {
            view: b.value,
            data: f
          }, null, 8, ["view", "data"]),
          Ee(Ba, { data: f }, null, 8, ["data"])
        ], 38),
        D.active ? (w(), q(Vo("v-f-modal-" + D.type), {
          key: 0,
          selection: D.data,
          current: f
        }, null, 8, ["selection", "current"])) : U("", !0),
        Ee(Sl, { current: f }, null, 8, ["current"]),
        Dl
      ], 2)
    ]));
  }
}), Ml = /* @__PURE__ */ p("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), $l = { class: "fixed z-10 inset-0 overflow-hidden" }, Tl = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, Al = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Il = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, $e = {
  __name: "ModalLayout",
  setup(r) {
    const e = L("emitter");
    return Me(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, o) => (w(), C("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: o[1] || (o[1] = ot((l) => x(e).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Ml,
      p("div", $l, [
        p("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = We((l) => x(e).emit("vf-modal-close"), ["self"]))
        }, [
          p("div", Tl, [
            p("div", Al, [
              Qt(s.$slots, "default")
            ]),
            p("div", Il, [
              Qt(s.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Ol = ["aria-label"], Ll = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Pl = [
  Ll
], Nl = {
  name: "Message"
}, Te = /* @__PURE__ */ Object.assign(Nl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: e }) {
    var a;
    const { t: s } = L("i18n"), o = O(!1), l = O(null), i = O((a = l.value) == null ? void 0 : a.strMessage), d = e;
    Vt(i, () => o.value = !1);
    const v = () => {
      d("hidden"), o.value = !0;
    };
    return (g, f) => (w(), C("div", null, [
      o.value ? U("", !0) : (w(), C("div", {
        key: 0,
        ref_key: "strMessage",
        ref: l,
        class: he(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Qt(g.$slots, "default"),
        p("div", {
          class: "ml-auto cursor-pointer",
          onClick: v,
          "aria-label": x(s)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Pl, 8, Ol)
      ], 2))
    ]));
  }
}), jl = { class: "sm:flex sm:items-start" }, Rl = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), Vl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Bl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, zl = { class: "mt-2" }, Hl = { class: "text-sm text-gray-500" }, Ul = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Kl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Yl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Wl = [
  Yl
], Xl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Zl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Fl = [
  Zl
], ql = { class: "ml-1.5" }, Gl = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, Jl = {
  name: "VFModalDelete"
}, Ql = /* @__PURE__ */ Object.assign(Jl, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = L("emitter");
    L("storage");
    const s = L("adapter"), { t: o } = L("i18n"), l = r, i = O(l.selection.items), d = O(""), v = () => {
      i.value.length && e.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: s.value,
          path: l.current.dirname,
          items: JSON.stringify(i.value.map(({ path: a, type: g }) => ({ path: a, type: g })))
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: o("Files deleted.") });
        },
        onError: (a) => {
          d.value = o(a.message);
        }
      });
    };
    return (a, g) => (w(), q($e, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Yes, Delete!")), 1),
        p("button", {
          type: "button",
          onClick: g[1] || (g[1] = (f) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1),
        p("div", Gl, E(x(o)("This action cannot be undone.")), 1)
      ]),
      default: F(() => [
        p("div", jl, [
          Rl,
          p("div", Vl, [
            p("h3", Bl, E(x(o)("Delete files")), 1),
            p("div", zl, [
              p("p", Hl, E(x(o)("Are you sure you want to delete these files?")), 1),
              (w(!0), C(ie, null, ye(i.value, (f) => (w(), C("p", Ul, [
                f.type == "dir" ? (w(), C("svg", Kl, Wl)) : (w(), C("svg", Xl, Fl)),
                p("span", ql, E(f.basename), 1)
              ]))), 256)),
              d.value.length ? (w(), q(Te, {
                key: 0,
                onHidden: g[0] || (g[0] = (f) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  te(E(d.value), 1)
                ]),
                _: 1
              })) : U("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ec = { class: "sm:flex sm:items-start" }, tc = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), rc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, sc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, oc = { class: "mt-2" }, nc = { class: "text-sm text-gray-500" }, ic = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ac = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, lc = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), cc = [
  lc
], uc = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, dc = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), hc = [
  dc
], fc = { class: "ml-1.5" }, pc = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, gc = {
  name: "VFModalRestore"
}, mc = /* @__PURE__ */ Object.assign(gc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = L("emitter");
    L("storage");
    const s = L("adapter"), { t: o } = L("i18n"), l = r, i = O(l.selection.items), d = O(""), v = () => {
      i.value.length && e.emit("vf-fetch", {
        params: {
          q: "restore",
          adapter: s.value,
          path: l.current.dirname,
          items: JSON.stringify(i.value.map(({ path: a, type: g }) => ({ path: a, type: g })))
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: o("Files restored.") });
        },
        onError: (a) => {
          d.value = o(a.message);
        }
      });
    };
    return (a, g) => (w(), q($e, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Yes, restore!")), 1),
        p("button", {
          type: "button",
          onClick: g[1] || (g[1] = (f) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1),
        p("div", pc, E(x(o)("This action cannot be undone.")), 1)
      ]),
      default: F(() => [
        p("div", ec, [
          tc,
          p("div", rc, [
            p("h3", sc, E(x(o)("Restore files")), 1),
            p("div", oc, [
              p("p", nc, E(x(o)("Are you sure you want to restore these files?")), 1),
              (w(!0), C(ie, null, ye(i.value, (f) => (w(), C("p", ic, [
                f.type == "dir" ? (w(), C("svg", ac, cc)) : (w(), C("svg", uc, hc)),
                p("span", fc, E(f.basename), 1)
              ]))), 256)),
              d.value.length ? (w(), q(Te, {
                key: 0,
                onHidden: g[0] || (g[0] = (f) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  te(E(d.value), 1)
                ]),
                _: 1
              })) : U("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), vc = { class: "sm:flex sm:items-start" }, bc = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), yc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Sc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, wc = { class: "mt-2" }, _c = { class: "text-sm text-gray-500" }, xc = {
  name: "VFModalMessage"
}, kc = /* @__PURE__ */ Object.assign(xc, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = L("emitter"), { t: s } = L("i18n");
    return (o, l) => (w(), q($e, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: l[0] || (l[0] = (i) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Close")), 1)
      ]),
      default: F(() => {
        var i, d;
        return [
          p("div", vc, [
            bc,
            p("div", yc, [
              p("h3", Sc, E(((i = r.selection) == null ? void 0 : i.title) ?? "Title"), 1),
              p("div", wc, [
                p("p", _c, E(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), Dc = { class: "sm:flex sm:items-start" }, Cc = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), Ec = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Mc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, $c = { class: "mt-2" }, Tc = { class: "text-sm text-gray-500" }, Ac = ["onKeyup", "placeholder"], Ic = {
  name: "VFModalNewFolder"
}, Oc = /* @__PURE__ */ Object.assign(Ic, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = L("emitter");
    L("storage");
    const s = L("adapter"), { t: o } = L("i18n"), l = r, i = O(""), d = O(""), v = () => {
      i.value != "" && e.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: s.value,
          path: l.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: o("%s is created.", i.value) });
        },
        onError: (a) => {
          d.value = o(a.message);
        }
      });
    };
    return (a, g) => (w(), q($e, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Create")), 1),
        p("button", {
          type: "button",
          onClick: g[2] || (g[2] = (f) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", Dc, [
          Cc,
          p("div", Ec, [
            p("h3", Mc, E(x(o)("New Folder")), 1),
            p("div", $c, [
              p("p", Tc, E(x(o)("Create a new folder")), 1),
              be(p("input", {
                "onUpdate:modelValue": g[0] || (g[0] = (f) => i.value = f),
                onKeyup: ot(v, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(o)("Folder Name"),
                type: "text"
              }, null, 40, Ac), [
                [nt, i.value]
              ]),
              d.value.length ? (w(), q(Te, {
                key: 0,
                onHidden: g[1] || (g[1] = (f) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  te(E(d.value), 1)
                ]),
                _: 1
              })) : U("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Lc = { class: "sm:flex sm:items-start" }, Pc = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), Nc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, jc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Rc = { class: "mt-2" }, Vc = { class: "text-sm text-gray-500" }, Bc = ["onKeyup", "placeholder"], zc = {
  name: "VFModalNewFile"
}, Hc = /* @__PURE__ */ Object.assign(zc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = L("emitter");
    L("storage");
    const s = L("adapter"), { t: o } = L("i18n"), l = r, i = O(""), d = O(""), v = () => {
      i.value != "" && e.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: s.value,
          path: l.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: o("%s is created.", i.value) });
        },
        onError: (a) => {
          d.value = o(a.message);
        }
      });
    };
    return (a, g) => (w(), q($e, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Create")), 1),
        p("button", {
          type: "button",
          onClick: g[2] || (g[2] = (f) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", Lc, [
          Pc,
          p("div", Nc, [
            p("h3", jc, E(x(o)("New File")), 1),
            p("div", Rc, [
              p("p", Vc, E(x(o)("Create a new file")), 1),
              be(p("input", {
                "onUpdate:modelValue": g[0] || (g[0] = (f) => i.value = f),
                onKeyup: ot(v, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(o)("File Name"),
                type: "text"
              }, null, 40, Bc), [
                [nt, i.value]
              ]),
              d.value.length ? (w(), q(Te, {
                key: 0,
                onHidden: g[1] || (g[1] = (f) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  te(E(d.value), 1)
                ]),
                _: 1
              })) : U("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Uc = { class: "flex" }, Kc = ["aria-label"], Yc = { class: "ml-auto mb-2" }, Wc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Xc = { key: 1 }, Zc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = e, o = O(""), l = O(""), i = O(null), d = O(!1), { apiUrl: v } = ze(), a = r, g = O(""), f = O(!1), { t: b } = L("i18n");
    Me(() => {
      Nt(v.value, {
        params: { q: "preview", adapter: a.selection.adapter, path: a.selection.item.path },
        json: !1
      }).then((D) => {
        o.value = D, s("load");
      });
    });
    const S = () => {
      d.value = !d.value, l.value = o.value, d.value == !0 && Bt(() => {
        i.value.focus();
      });
    }, I = L("postData"), T = () => {
      g.value = "", f.value = !1, Nt(v.value, {
        method: "POST",
        params: Object.assign(I, {
          q: "save",
          adapter: a.selection.adapter,
          path: a.selection.item.path,
          content: l.value
        }),
        json: !1
      }).then((D) => {
        g.value = b("Updated."), o.value = D, s("load"), d.value = !d.value;
      }).catch((D) => {
        g.value = b(D.message), f.value = !0;
      });
    };
    return (D, M) => (w(), C(ie, null, [
      p("div", Uc, [
        p("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Kc),
        p("div", Yc, [
          d.value ? (w(), C("button", {
            key: 0,
            onClick: T,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(b)("Save")), 1)) : U("", !0),
          p("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: M[0] || (M[0] = (R) => S())
          }, E(d.value ? x(b)("Cancel") : x(b)("Edit")), 1)
        ])
      ]),
      p("div", null, [
        d.value ? (w(), C("div", Xc, [
          be(p("textarea", {
            ref_key: "editInput",
            ref: i,
            "onUpdate:modelValue": M[1] || (M[1] = (R) => l.value = R),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [nt, l.value]
          ])
        ])) : (w(), C("pre", Wc, E(o.value), 1)),
        g.value.length ? (w(), q(Te, {
          key: 2,
          onHidden: M[2] || (M[2] = (R) => g.value = ""),
          error: f.value
        }, {
          default: F(() => [
            te(E(g.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : U("", !0)
      ])
    ], 64));
  }
};
/*!
 * Cropper.js v1.6.1
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-09-17T03:44:19.860Z
 */
function Yr(r, e) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    e && (o = o.filter(function(l) {
      return Object.getOwnPropertyDescriptor(r, l).enumerable;
    })), s.push.apply(s, o);
  }
  return s;
}
function zs(r) {
  for (var e = 1; e < arguments.length; e++) {
    var s = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Yr(Object(s), !0).forEach(function(o) {
      Gc(r, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Yr(Object(s)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(s, o));
    });
  }
  return r;
}
function sr(r) {
  "@babel/helpers - typeof";
  return sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, sr(r);
}
function Fc(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Wr(r, e) {
  for (var s = 0; s < e.length; s++) {
    var o = e[s];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, Us(o.key), o);
  }
}
function qc(r, e, s) {
  return e && Wr(r.prototype, e), s && Wr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Gc(r, e, s) {
  return e = Us(e), e in r ? Object.defineProperty(r, e, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = s, r;
}
function Hs(r) {
  return Jc(r) || Qc(r) || eu(r) || tu();
}
function Jc(r) {
  if (Array.isArray(r))
    return or(r);
}
function Qc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function eu(r, e) {
  if (r) {
    if (typeof r == "string")
      return or(r, e);
    var s = Object.prototype.toString.call(r).slice(8, -1);
    if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
      return Array.from(r);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return or(r, e);
  }
}
function or(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var s = 0, o = new Array(e); s < e; s++)
    o[s] = r[s];
  return o;
}
function tu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ru(r, e) {
  if (typeof r != "object" || r === null)
    return r;
  var s = r[Symbol.toPrimitive];
  if (s !== void 0) {
    var o = s.call(r, e || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function Us(r) {
  var e = ru(r, "string");
  return typeof e == "symbol" ? e : String(e);
}
var Yt = typeof window < "u" && typeof window.document < "u", Le = Yt ? window : {}, kr = Yt && Le.document.documentElement ? "ontouchstart" in Le.document.documentElement : !1, Dr = Yt ? "PointerEvent" in Le : !1, J = "cropper", Cr = "all", Ks = "crop", Ys = "move", Ws = "zoom", Ke = "e", Ye = "w", Ge = "s", je = "n", ht = "ne", ft = "nw", pt = "se", gt = "sw", nr = "".concat(J, "-crop"), Xr = "".concat(J, "-disabled"), de = "".concat(J, "-hidden"), Zr = "".concat(J, "-hide"), su = "".concat(J, "-invisible"), Rt = "".concat(J, "-modal"), ir = "".concat(J, "-move"), yt = "".concat(J, "Action"), It = "".concat(J, "Preview"), Er = "crop", Xs = "move", Zs = "none", ar = "crop", lr = "cropend", cr = "cropmove", ur = "cropstart", Fr = "dblclick", ou = kr ? "touchstart" : "mousedown", nu = kr ? "touchmove" : "mousemove", iu = kr ? "touchend touchcancel" : "mouseup", qr = Dr ? "pointerdown" : ou, Gr = Dr ? "pointermove" : nu, Jr = Dr ? "pointerup pointercancel" : iu, Qr = "ready", es = "resize", ts = "wheel", dr = "zoom", rs = "image/jpeg", au = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, lu = /^data:/, cu = /^data:image\/jpeg;base64,/, uu = /^img|canvas$/i, Fs = 200, qs = 100, ss = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Er,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: "",
  // Re-render the cropper when resize the window
  responsive: !0,
  // Restore the cropped area after resize the window
  restore: !0,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: !0,
  // Check the current image's Exif Orientation information
  checkOrientation: !0,
  // Show the black modal
  modal: !0,
  // Show the dashed lines for guiding
  guides: !0,
  // Show the center indicator for guiding
  center: !0,
  // Show the white modal to highlight the crop box
  highlight: !0,
  // Show the grid background
  background: !0,
  // Enable to crop the image automatically when initialize
  autoCrop: !0,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: !0,
  // Enable to rotate the image
  rotatable: !0,
  // Enable to scale the image
  scalable: !0,
  // Enable to zoom the image
  zoomable: !0,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: !0,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: !0,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: !0,
  // Enable to resize the crop box
  cropBoxResizable: !0,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: !0,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: Fs,
  minContainerHeight: qs,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, du = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', hu = Number.isNaN || Le.isNaN;
function Y(r) {
  return typeof r == "number" && !hu(r);
}
var os = function(e) {
  return e > 0 && e < 1 / 0;
};
function qt(r) {
  return typeof r > "u";
}
function Ze(r) {
  return sr(r) === "object" && r !== null;
}
var fu = Object.prototype.hasOwnProperty;
function Je(r) {
  if (!Ze(r))
    return !1;
  try {
    var e = r.constructor, s = e.prototype;
    return e && s && fu.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function ue(r) {
  return typeof r == "function";
}
var pu = Array.prototype.slice;
function Gs(r) {
  return Array.from ? Array.from(r) : pu.call(r);
}
function se(r, e) {
  return r && ue(e) && (Array.isArray(r) || Y(r.length) ? Gs(r).forEach(function(s, o) {
    e.call(r, s, o, r);
  }) : Ze(r) && Object.keys(r).forEach(function(s) {
    e.call(r, r[s], s, r);
  })), r;
}
var Q = Object.assign || function(e) {
  for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++)
    o[l - 1] = arguments[l];
  return Ze(e) && o.length > 0 && o.forEach(function(i) {
    Ze(i) && Object.keys(i).forEach(function(d) {
      e[d] = i[d];
    });
  }), e;
}, gu = /\.\d*(?:0|9){12}\d*$/;
function tt(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return gu.test(r) ? Math.round(r * e) / e : r;
}
var mu = /^width|height|left|top|marginLeft|marginTop$/;
function Re(r, e) {
  var s = r.style;
  se(e, function(o, l) {
    mu.test(l) && Y(o) && (o = "".concat(o, "px")), s[l] = o;
  });
}
function vu(r, e) {
  return r.classList ? r.classList.contains(e) : r.className.indexOf(e) > -1;
}
function le(r, e) {
  if (e) {
    if (Y(r.length)) {
      se(r, function(o) {
        le(o, e);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(e);
      return;
    }
    var s = r.className.trim();
    s ? s.indexOf(e) < 0 && (r.className = "".concat(s, " ").concat(e)) : r.className = e;
  }
}
function Oe(r, e) {
  if (e) {
    if (Y(r.length)) {
      se(r, function(s) {
        Oe(s, e);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(e);
      return;
    }
    r.className.indexOf(e) >= 0 && (r.className = r.className.replace(e, ""));
  }
}
function Qe(r, e, s) {
  if (e) {
    if (Y(r.length)) {
      se(r, function(o) {
        Qe(o, e, s);
      });
      return;
    }
    s ? le(r, e) : Oe(r, e);
  }
}
var bu = /([a-z\d])([A-Z])/g;
function Mr(r) {
  return r.replace(bu, "$1-$2").toLowerCase();
}
function hr(r, e) {
  return Ze(r[e]) ? r[e] : r.dataset ? r.dataset[e] : r.getAttribute("data-".concat(Mr(e)));
}
function St(r, e, s) {
  Ze(s) ? r[e] = s : r.dataset ? r.dataset[e] = s : r.setAttribute("data-".concat(Mr(e)), s);
}
function yu(r, e) {
  if (Ze(r[e]))
    try {
      delete r[e];
    } catch {
      r[e] = void 0;
    }
  else if (r.dataset)
    try {
      delete r.dataset[e];
    } catch {
      r.dataset[e] = void 0;
    }
  else
    r.removeAttribute("data-".concat(Mr(e)));
}
var Js = /\s\s*/, Qs = function() {
  var r = !1;
  if (Yt) {
    var e = !1, s = function() {
    }, o = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, e;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(i) {
        e = i;
      }
    });
    Le.addEventListener("test", s, o), Le.removeEventListener("test", s, o);
  }
  return r;
}();
function Ce(r, e, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, l = s;
  e.trim().split(Js).forEach(function(i) {
    if (!Qs) {
      var d = r.listeners;
      d && d[i] && d[i][s] && (l = d[i][s], delete d[i][s], Object.keys(d[i]).length === 0 && delete d[i], Object.keys(d).length === 0 && delete r.listeners);
    }
    r.removeEventListener(i, l, o);
  });
}
function _e(r, e, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, l = s;
  e.trim().split(Js).forEach(function(i) {
    if (o.once && !Qs) {
      var d = r.listeners, v = d === void 0 ? {} : d;
      l = function() {
        delete v[i][s], r.removeEventListener(i, l, o);
        for (var g = arguments.length, f = new Array(g), b = 0; b < g; b++)
          f[b] = arguments[b];
        s.apply(r, f);
      }, v[i] || (v[i] = {}), v[i][s] && r.removeEventListener(i, v[i][s], o), v[i][s] = l, r.listeners = v;
    }
    r.addEventListener(i, l, o);
  });
}
function rt(r, e, s) {
  var o;
  return ue(Event) && ue(CustomEvent) ? o = new CustomEvent(e, {
    detail: s,
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(e, !0, !0, s)), r.dispatchEvent(o);
}
function eo(r) {
  var e = r.getBoundingClientRect();
  return {
    left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: e.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Gt = Le.location, Su = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function ns(r) {
  var e = r.match(Su);
  return e !== null && (e[1] !== Gt.protocol || e[2] !== Gt.hostname || e[3] !== Gt.port);
}
function is(r) {
  var e = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + e;
}
function vt(r) {
  var e = r.rotate, s = r.scaleX, o = r.scaleY, l = r.translateX, i = r.translateY, d = [];
  Y(l) && l !== 0 && d.push("translateX(".concat(l, "px)")), Y(i) && i !== 0 && d.push("translateY(".concat(i, "px)")), Y(e) && e !== 0 && d.push("rotate(".concat(e, "deg)")), Y(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), Y(o) && o !== 1 && d.push("scaleY(".concat(o, ")"));
  var v = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: v,
    msTransform: v,
    transform: v
  };
}
function wu(r) {
  var e = zs({}, r), s = 0;
  return se(r, function(o, l) {
    delete e[l], se(e, function(i) {
      var d = Math.abs(o.startX - i.startX), v = Math.abs(o.startY - i.startY), a = Math.abs(o.endX - i.endX), g = Math.abs(o.endY - i.endY), f = Math.sqrt(d * d + v * v), b = Math.sqrt(a * a + g * g), S = (b - f) / f;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function Ot(r, e) {
  var s = r.pageX, o = r.pageY, l = {
    endX: s,
    endY: o
  };
  return e ? l : zs({
    startX: s,
    startY: o
  }, l);
}
function _u(r) {
  var e = 0, s = 0, o = 0;
  return se(r, function(l) {
    var i = l.startX, d = l.startY;
    e += i, s += d, o += 1;
  }), e /= o, s /= o, {
    pageX: e,
    pageY: s
  };
}
function Ve(r) {
  var e = r.aspectRatio, s = r.height, o = r.width, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", i = os(o), d = os(s);
  if (i && d) {
    var v = s * e;
    l === "contain" && v > o || l === "cover" && v < o ? s = o / e : o = s * e;
  } else
    i ? s = o / e : d && (o = s * e);
  return {
    width: o,
    height: s
  };
}
function xu(r) {
  var e = r.width, s = r.height, o = r.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: s,
      height: e
    };
  var l = o % 90 * Math.PI / 180, i = Math.sin(l), d = Math.cos(l), v = e * d + s * i, a = e * i + s * d;
  return o > 90 ? {
    width: a,
    height: v
  } : {
    width: v,
    height: a
  };
}
function ku(r, e, s, o) {
  var l = e.aspectRatio, i = e.naturalWidth, d = e.naturalHeight, v = e.rotate, a = v === void 0 ? 0 : v, g = e.scaleX, f = g === void 0 ? 1 : g, b = e.scaleY, S = b === void 0 ? 1 : b, I = s.aspectRatio, T = s.naturalWidth, D = s.naturalHeight, M = o.fillColor, R = M === void 0 ? "transparent" : M, V = o.imageSmoothingEnabled, A = V === void 0 ? !0 : V, B = o.imageSmoothingQuality, X = B === void 0 ? "low" : B, k = o.maxWidth, j = k === void 0 ? 1 / 0 : k, G = o.maxHeight, oe = G === void 0 ? 1 / 0 : G, re = o.minWidth, ce = re === void 0 ? 0 : re, Se = o.minHeight, pe = Se === void 0 ? 0 : Se, ge = document.createElement("canvas"), P = ge.getContext("2d"), z = Ve({
    aspectRatio: I,
    width: j,
    height: oe
  }), N = Ve({
    aspectRatio: I,
    width: ce,
    height: pe
  }, "cover"), ee = Math.min(z.width, Math.max(N.width, T)), K = Math.min(z.height, Math.max(N.height, D)), xe = Ve({
    aspectRatio: l,
    width: j,
    height: oe
  }), we = Ve({
    aspectRatio: l,
    width: ce,
    height: pe
  }, "cover"), Dt = Math.min(xe.width, Math.max(we.width, i)), Ct = Math.min(xe.height, Math.max(we.height, d)), Wt = [-Dt / 2, -Ct / 2, Dt, Ct];
  return ge.width = tt(ee), ge.height = tt(K), P.fillStyle = R, P.fillRect(0, 0, ee, K), P.save(), P.translate(ee / 2, K / 2), P.rotate(a * Math.PI / 180), P.scale(f, S), P.imageSmoothingEnabled = A, P.imageSmoothingQuality = X, P.drawImage.apply(P, [r].concat(Hs(Wt.map(function(Et) {
    return Math.floor(tt(Et));
  })))), P.restore(), ge;
}
var to = String.fromCharCode;
function Du(r, e, s) {
  var o = "";
  s += e;
  for (var l = e; l < s; l += 1)
    o += to(r.getUint8(l));
  return o;
}
var Cu = /^data:.*,/;
function Eu(r) {
  var e = r.replace(Cu, ""), s = atob(e), o = new ArrayBuffer(s.length), l = new Uint8Array(o);
  return se(l, function(i, d) {
    l[d] = s.charCodeAt(d);
  }), o;
}
function Mu(r, e) {
  for (var s = [], o = 8192, l = new Uint8Array(r); l.length > 0; )
    s.push(to.apply(null, Gs(l.subarray(0, o)))), l = l.subarray(o);
  return "data:".concat(e, ";base64,").concat(btoa(s.join("")));
}
function $u(r) {
  var e = new DataView(r), s;
  try {
    var o, l, i;
    if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
      for (var d = e.byteLength, v = 2; v + 1 < d; ) {
        if (e.getUint8(v) === 255 && e.getUint8(v + 1) === 225) {
          l = v;
          break;
        }
        v += 1;
      }
    if (l) {
      var a = l + 4, g = l + 10;
      if (Du(e, a, 4) === "Exif") {
        var f = e.getUint16(g);
        if (o = f === 18761, (o || f === 19789) && e.getUint16(g + 2, o) === 42) {
          var b = e.getUint32(g + 4, o);
          b >= 8 && (i = g + b);
        }
      }
    }
    if (i) {
      var S = e.getUint16(i, o), I, T;
      for (T = 0; T < S; T += 1)
        if (I = i + T * 12 + 2, e.getUint16(I, o) === 274) {
          I += 8, s = e.getUint16(I, o), e.setUint16(I, 1, o);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function Tu(r) {
  var e = 0, s = 1, o = 1;
  switch (r) {
    case 2:
      s = -1;
      break;
    case 3:
      e = -180;
      break;
    case 4:
      o = -1;
      break;
    case 5:
      e = 90, o = -1;
      break;
    case 6:
      e = 90;
      break;
    case 7:
      e = 90, s = -1;
      break;
    case 8:
      e = -90;
      break;
  }
  return {
    rotate: e,
    scaleX: s,
    scaleY: o
  };
}
var Au = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var e = this.element, s = this.options, o = this.container, l = this.cropper, i = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    le(l, de), Oe(e, de);
    var v = {
      width: Math.max(o.offsetWidth, i >= 0 ? i : Fs),
      height: Math.max(o.offsetHeight, d >= 0 ? d : qs)
    };
    this.containerData = v, Re(l, {
      width: v.width,
      height: v.height
    }), le(e, de), Oe(l, de);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var e = this.containerData, s = this.imageData, o = this.options.viewMode, l = Math.abs(s.rotate) % 180 === 90, i = l ? s.naturalHeight : s.naturalWidth, d = l ? s.naturalWidth : s.naturalHeight, v = i / d, a = e.width, g = e.height;
    e.height * v > e.width ? o === 3 ? a = e.height * v : g = e.width / v : o === 3 ? g = e.width / v : a = e.height * v;
    var f = {
      aspectRatio: v,
      naturalWidth: i,
      naturalHeight: d,
      width: a,
      height: g
    };
    this.canvasData = f, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), f.width = Math.min(Math.max(f.width, f.minWidth), f.maxWidth), f.height = Math.min(Math.max(f.height, f.minHeight), f.maxHeight), f.left = (e.width - f.width) / 2, f.top = (e.height - f.height) / 2, f.oldLeft = f.left, f.oldTop = f.top, this.initialCanvasData = Q({}, f);
  },
  limitCanvas: function(e, s) {
    var o = this.options, l = this.containerData, i = this.canvasData, d = this.cropBoxData, v = o.viewMode, a = i.aspectRatio, g = this.cropped && d;
    if (e) {
      var f = Number(o.minCanvasWidth) || 0, b = Number(o.minCanvasHeight) || 0;
      v > 1 ? (f = Math.max(f, l.width), b = Math.max(b, l.height), v === 3 && (b * a > f ? f = b * a : b = f / a)) : v > 0 && (f ? f = Math.max(f, g ? d.width : 0) : b ? b = Math.max(b, g ? d.height : 0) : g && (f = d.width, b = d.height, b * a > f ? f = b * a : b = f / a));
      var S = Ve({
        aspectRatio: a,
        width: f,
        height: b
      });
      f = S.width, b = S.height, i.minWidth = f, i.minHeight = b, i.maxWidth = 1 / 0, i.maxHeight = 1 / 0;
    }
    if (s)
      if (v > (g ? 0 : 1)) {
        var I = l.width - i.width, T = l.height - i.height;
        i.minLeft = Math.min(0, I), i.minTop = Math.min(0, T), i.maxLeft = Math.max(0, I), i.maxTop = Math.max(0, T), g && this.limited && (i.minLeft = Math.min(d.left, d.left + (d.width - i.width)), i.minTop = Math.min(d.top, d.top + (d.height - i.height)), i.maxLeft = d.left, i.maxTop = d.top, v === 2 && (i.width >= l.width && (i.minLeft = Math.min(0, I), i.maxLeft = Math.max(0, I)), i.height >= l.height && (i.minTop = Math.min(0, T), i.maxTop = Math.max(0, T))));
      } else
        i.minLeft = -i.width, i.minTop = -i.height, i.maxLeft = l.width, i.maxTop = l.height;
  },
  renderCanvas: function(e, s) {
    var o = this.canvasData, l = this.imageData;
    if (s) {
      var i = xu({
        width: l.naturalWidth * Math.abs(l.scaleX || 1),
        height: l.naturalHeight * Math.abs(l.scaleY || 1),
        degree: l.rotate || 0
      }), d = i.width, v = i.height, a = o.width * (d / o.naturalWidth), g = o.height * (v / o.naturalHeight);
      o.left -= (a - o.width) / 2, o.top -= (g - o.height) / 2, o.width = a, o.height = g, o.aspectRatio = d / v, o.naturalWidth = d, o.naturalHeight = v, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, Re(this.canvas, Q({
      width: o.width,
      height: o.height
    }, vt({
      translateX: o.left,
      translateY: o.top
    }))), this.renderImage(e), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(e) {
    var s = this.canvasData, o = this.imageData, l = o.naturalWidth * (s.width / s.naturalWidth), i = o.naturalHeight * (s.height / s.naturalHeight);
    Q(o, {
      width: l,
      height: i,
      left: (s.width - l) / 2,
      top: (s.height - i) / 2
    }), Re(this.image, Q({
      width: o.width,
      height: o.height
    }, vt(Q({
      translateX: o.left,
      translateY: o.top
    }, o)))), e && this.output();
  },
  initCropBox: function() {
    var e = this.options, s = this.canvasData, o = e.aspectRatio || e.initialAspectRatio, l = Number(e.autoCropArea) || 0.8, i = {
      width: s.width,
      height: s.height
    };
    o && (s.height * o > s.width ? i.height = i.width / o : i.width = i.height * o), this.cropBoxData = i, this.limitCropBox(!0, !0), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), i.width = Math.max(i.minWidth, i.width * l), i.height = Math.max(i.minHeight, i.height * l), i.left = s.left + (s.width - i.width) / 2, i.top = s.top + (s.height - i.height) / 2, i.oldLeft = i.left, i.oldTop = i.top, this.initialCropBoxData = Q({}, i);
  },
  limitCropBox: function(e, s) {
    var o = this.options, l = this.containerData, i = this.canvasData, d = this.cropBoxData, v = this.limited, a = o.aspectRatio;
    if (e) {
      var g = Number(o.minCropBoxWidth) || 0, f = Number(o.minCropBoxHeight) || 0, b = v ? Math.min(l.width, i.width, i.width + i.left, l.width - i.left) : l.width, S = v ? Math.min(l.height, i.height, i.height + i.top, l.height - i.top) : l.height;
      g = Math.min(g, l.width), f = Math.min(f, l.height), a && (g && f ? f * a > g ? f = g / a : g = f * a : g ? f = g / a : f && (g = f * a), S * a > b ? S = b / a : b = S * a), d.minWidth = Math.min(g, b), d.minHeight = Math.min(f, S), d.maxWidth = b, d.maxHeight = S;
    }
    s && (v ? (d.minLeft = Math.max(0, i.left), d.minTop = Math.max(0, i.top), d.maxLeft = Math.min(l.width, i.left + i.width) - d.width, d.maxTop = Math.min(l.height, i.top + i.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = l.width - d.width, d.maxTop = l.height - d.height));
  },
  renderCropBox: function() {
    var e = this.options, s = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, e.movable && e.cropBoxMovable && St(this.face, yt, o.width >= s.width && o.height >= s.height ? Ys : Cr), Re(this.cropBox, Q({
      width: o.width,
      height: o.height
    }, vt({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), rt(this.element, ar, this.getData());
  }
}, Iu = {
  initPreview: function() {
    var e = this.element, s = this.crossOrigin, o = this.options.preview, l = s ? this.crossOriginUrl : this.url, i = e.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = l, d.alt = i, this.viewBox.appendChild(d), this.viewBoxImage = d, !!o) {
      var v = o;
      typeof o == "string" ? v = e.ownerDocument.querySelectorAll(o) : o.querySelector && (v = [o]), this.previews = v, se(v, function(a) {
        var g = document.createElement("img");
        St(a, It, {
          width: a.offsetWidth,
          height: a.offsetHeight,
          html: a.innerHTML
        }), s && (g.crossOrigin = s), g.src = l, g.alt = i, g.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', a.innerHTML = "", a.appendChild(g);
      });
    }
  },
  resetPreview: function() {
    se(this.previews, function(e) {
      var s = hr(e, It);
      Re(e, {
        width: s.width,
        height: s.height
      }), e.innerHTML = s.html, yu(e, It);
    });
  },
  preview: function() {
    var e = this.imageData, s = this.canvasData, o = this.cropBoxData, l = o.width, i = o.height, d = e.width, v = e.height, a = o.left - s.left - e.left, g = o.top - s.top - e.top;
    !this.cropped || this.disabled || (Re(this.viewBoxImage, Q({
      width: d,
      height: v
    }, vt(Q({
      translateX: -a,
      translateY: -g
    }, e)))), se(this.previews, function(f) {
      var b = hr(f, It), S = b.width, I = b.height, T = S, D = I, M = 1;
      l && (M = S / l, D = i * M), i && D > I && (M = I / i, T = l * M, D = I), Re(f, {
        width: T,
        height: D
      }), Re(f.getElementsByTagName("img")[0], Q({
        width: d * M,
        height: v * M
      }, vt(Q({
        translateX: -a * M,
        translateY: -g * M
      }, e))));
    }));
  }
}, Ou = {
  bind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    ue(s.cropstart) && _e(e, ur, s.cropstart), ue(s.cropmove) && _e(e, cr, s.cropmove), ue(s.cropend) && _e(e, lr, s.cropend), ue(s.crop) && _e(e, ar, s.crop), ue(s.zoom) && _e(e, dr, s.zoom), _e(o, qr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && _e(o, ts, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && _e(o, Fr, this.onDblclick = this.dblclick.bind(this)), _e(e.ownerDocument, Gr, this.onCropMove = this.cropMove.bind(this)), _e(e.ownerDocument, Jr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && _e(window, es, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    ue(s.cropstart) && Ce(e, ur, s.cropstart), ue(s.cropmove) && Ce(e, cr, s.cropmove), ue(s.cropend) && Ce(e, lr, s.cropend), ue(s.crop) && Ce(e, ar, s.crop), ue(s.zoom) && Ce(e, dr, s.zoom), Ce(o, qr, this.onCropStart), s.zoomable && s.zoomOnWheel && Ce(o, ts, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && Ce(o, Fr, this.onDblclick), Ce(e.ownerDocument, Gr, this.onCropMove), Ce(e.ownerDocument, Jr, this.onCropEnd), s.responsive && Ce(window, es, this.onResize);
  }
}, Lu = {
  resize: function() {
    if (!this.disabled) {
      var e = this.options, s = this.container, o = this.containerData, l = s.offsetWidth / o.width, i = s.offsetHeight / o.height, d = Math.abs(l - 1) > Math.abs(i - 1) ? l : i;
      if (d !== 1) {
        var v, a;
        e.restore && (v = this.getCanvasData(), a = this.getCropBoxData()), this.render(), e.restore && (this.setCanvasData(se(v, function(g, f) {
          v[f] = g * d;
        })), this.setCropBoxData(se(a, function(g, f) {
          a[f] = g * d;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Zs || this.setDragMode(vu(this.dragBox, nr) ? Xs : Er);
  },
  wheel: function(e) {
    var s = this, o = Number(this.options.wheelZoomRatio) || 0.1, l = 1;
    this.disabled || (e.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      s.wheeling = !1;
    }, 50), e.deltaY ? l = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? l = -e.wheelDelta / 120 : e.detail && (l = e.detail > 0 ? 1 : -1), this.zoom(-l * o, e)));
  },
  cropStart: function(e) {
    var s = e.buttons, o = e.button;
    if (!(this.disabled || (e.type === "mousedown" || e.type === "pointerdown" && e.pointerType === "mouse") && // No primary button (Usually the left button)
    (Y(s) && s !== 1 || Y(o) && o !== 0 || e.ctrlKey))) {
      var l = this.options, i = this.pointers, d;
      e.changedTouches ? se(e.changedTouches, function(v) {
        i[v.identifier] = Ot(v);
      }) : i[e.pointerId || 0] = Ot(e), Object.keys(i).length > 1 && l.zoomable && l.zoomOnTouch ? d = Ws : d = hr(e.target, yt), au.test(d) && rt(this.element, ur, {
        originalEvent: e,
        action: d
      }) !== !1 && (e.preventDefault(), this.action = d, this.cropping = !1, d === Ks && (this.cropping = !0, le(this.dragBox, Rt)));
    }
  },
  cropMove: function(e) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var o = this.pointers;
      e.preventDefault(), rt(this.element, cr, {
        originalEvent: e,
        action: s
      }) !== !1 && (e.changedTouches ? se(e.changedTouches, function(l) {
        Q(o[l.identifier] || {}, Ot(l, !0));
      }) : Q(o[e.pointerId || 0] || {}, Ot(e, !0)), this.change(e));
    }
  },
  cropEnd: function(e) {
    if (!this.disabled) {
      var s = this.action, o = this.pointers;
      e.changedTouches ? se(e.changedTouches, function(l) {
        delete o[l.identifier];
      }) : delete o[e.pointerId || 0], s && (e.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, Qe(this.dragBox, Rt, this.cropped && this.options.modal)), rt(this.element, lr, {
        originalEvent: e,
        action: s
      }));
    }
  }
}, Pu = {
  change: function(e) {
    var s = this.options, o = this.canvasData, l = this.containerData, i = this.cropBoxData, d = this.pointers, v = this.action, a = s.aspectRatio, g = i.left, f = i.top, b = i.width, S = i.height, I = g + b, T = f + S, D = 0, M = 0, R = l.width, V = l.height, A = !0, B;
    !a && e.shiftKey && (a = b && S ? b / S : 1), this.limited && (D = i.minLeft, M = i.minTop, R = D + Math.min(l.width, o.width, o.left + o.width), V = M + Math.min(l.height, o.height, o.top + o.height));
    var X = d[Object.keys(d)[0]], k = {
      x: X.endX - X.startX,
      y: X.endY - X.startY
    }, j = function(oe) {
      switch (oe) {
        case Ke:
          I + k.x > R && (k.x = R - I);
          break;
        case Ye:
          g + k.x < D && (k.x = D - g);
          break;
        case je:
          f + k.y < M && (k.y = M - f);
          break;
        case Ge:
          T + k.y > V && (k.y = V - T);
          break;
      }
    };
    switch (v) {
      case Cr:
        g += k.x, f += k.y;
        break;
      case Ke:
        if (k.x >= 0 && (I >= R || a && (f <= M || T >= V))) {
          A = !1;
          break;
        }
        j(Ke), b += k.x, b < 0 && (v = Ye, b = -b, g -= b), a && (S = b / a, f += (i.height - S) / 2);
        break;
      case je:
        if (k.y <= 0 && (f <= M || a && (g <= D || I >= R))) {
          A = !1;
          break;
        }
        j(je), S -= k.y, f += k.y, S < 0 && (v = Ge, S = -S, f -= S), a && (b = S * a, g += (i.width - b) / 2);
        break;
      case Ye:
        if (k.x <= 0 && (g <= D || a && (f <= M || T >= V))) {
          A = !1;
          break;
        }
        j(Ye), b -= k.x, g += k.x, b < 0 && (v = Ke, b = -b, g -= b), a && (S = b / a, f += (i.height - S) / 2);
        break;
      case Ge:
        if (k.y >= 0 && (T >= V || a && (g <= D || I >= R))) {
          A = !1;
          break;
        }
        j(Ge), S += k.y, S < 0 && (v = je, S = -S, f -= S), a && (b = S * a, g += (i.width - b) / 2);
        break;
      case ht:
        if (a) {
          if (k.y <= 0 && (f <= M || I >= R)) {
            A = !1;
            break;
          }
          j(je), S -= k.y, f += k.y, b = S * a;
        } else
          j(je), j(Ke), k.x >= 0 ? I < R ? b += k.x : k.y <= 0 && f <= M && (A = !1) : b += k.x, k.y <= 0 ? f > M && (S -= k.y, f += k.y) : (S -= k.y, f += k.y);
        b < 0 && S < 0 ? (v = gt, S = -S, b = -b, f -= S, g -= b) : b < 0 ? (v = ft, b = -b, g -= b) : S < 0 && (v = pt, S = -S, f -= S);
        break;
      case ft:
        if (a) {
          if (k.y <= 0 && (f <= M || g <= D)) {
            A = !1;
            break;
          }
          j(je), S -= k.y, f += k.y, b = S * a, g += i.width - b;
        } else
          j(je), j(Ye), k.x <= 0 ? g > D ? (b -= k.x, g += k.x) : k.y <= 0 && f <= M && (A = !1) : (b -= k.x, g += k.x), k.y <= 0 ? f > M && (S -= k.y, f += k.y) : (S -= k.y, f += k.y);
        b < 0 && S < 0 ? (v = pt, S = -S, b = -b, f -= S, g -= b) : b < 0 ? (v = ht, b = -b, g -= b) : S < 0 && (v = gt, S = -S, f -= S);
        break;
      case gt:
        if (a) {
          if (k.x <= 0 && (g <= D || T >= V)) {
            A = !1;
            break;
          }
          j(Ye), b -= k.x, g += k.x, S = b / a;
        } else
          j(Ge), j(Ye), k.x <= 0 ? g > D ? (b -= k.x, g += k.x) : k.y >= 0 && T >= V && (A = !1) : (b -= k.x, g += k.x), k.y >= 0 ? T < V && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (v = ht, S = -S, b = -b, f -= S, g -= b) : b < 0 ? (v = pt, b = -b, g -= b) : S < 0 && (v = ft, S = -S, f -= S);
        break;
      case pt:
        if (a) {
          if (k.x >= 0 && (I >= R || T >= V)) {
            A = !1;
            break;
          }
          j(Ke), b += k.x, S = b / a;
        } else
          j(Ge), j(Ke), k.x >= 0 ? I < R ? b += k.x : k.y >= 0 && T >= V && (A = !1) : b += k.x, k.y >= 0 ? T < V && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (v = ft, S = -S, b = -b, f -= S, g -= b) : b < 0 ? (v = gt, b = -b, g -= b) : S < 0 && (v = ht, S = -S, f -= S);
        break;
      case Ys:
        this.move(k.x, k.y), A = !1;
        break;
      case Ws:
        this.zoom(wu(d), e), A = !1;
        break;
      case Ks:
        if (!k.x || !k.y) {
          A = !1;
          break;
        }
        B = eo(this.cropper), g = X.startX - B.left, f = X.startY - B.top, b = i.minWidth, S = i.minHeight, k.x > 0 ? v = k.y > 0 ? pt : ht : k.x < 0 && (g -= b, v = k.y > 0 ? gt : ft), k.y < 0 && (f -= S), this.cropped || (Oe(this.cropBox, de), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    A && (i.width = b, i.height = S, i.left = g, i.top = f, this.action = v, this.renderCropBox()), se(d, function(G) {
      G.startX = G.endX, G.startY = G.endY;
    });
  }
}, Nu = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && le(this.dragBox, Rt), Oe(this.cropBox, de), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = Q({}, this.initialImageData), this.canvasData = Q({}, this.initialCanvasData), this.cropBoxData = Q({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (Q(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Oe(this.dragBox, Rt), le(this.cropBox, de)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && e && (this.isImg && (this.element.src = e), s ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, se(this.previews, function(o) {
      o.getElementsByTagName("img")[0].src = e;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(e))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, Oe(this.cropper, Xr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, le(this.cropper, Xr)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var e = this.element;
    return e[J] ? (e[J] = void 0, this.isImg && this.replaced && (e.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.canvasData, l = o.left, i = o.top;
    return this.moveTo(qt(e) ? e : l + Number(e), qt(s) ? s : i + Number(s));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.canvasData, l = !1;
    return e = Number(e), s = Number(s), this.ready && !this.disabled && this.options.movable && (Y(e) && (o.left = e, l = !0), Y(s) && (o.top = s, l = !0), l && this.renderCanvas(!0)), this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function(e, s) {
    var o = this.canvasData;
    return e = Number(e), e < 0 ? e = 1 / (1 - e) : e = 1 + e, this.zoomTo(o.width * e / o.naturalWidth, null, s);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function(e, s, o) {
    var l = this.options, i = this.canvasData, d = i.width, v = i.height, a = i.naturalWidth, g = i.naturalHeight;
    if (e = Number(e), e >= 0 && this.ready && !this.disabled && l.zoomable) {
      var f = a * e, b = g * e;
      if (rt(this.element, dr, {
        ratio: e,
        oldRatio: d / a,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var S = this.pointers, I = eo(this.cropper), T = S && Object.keys(S).length ? _u(S) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        i.left -= (f - d) * ((T.pageX - I.left - i.left) / d), i.top -= (b - v) * ((T.pageY - I.top - i.top) / v);
      } else
        Je(s) && Y(s.x) && Y(s.y) ? (i.left -= (f - d) * ((s.x - i.left) / d), i.top -= (b - v) * ((s.y - i.top) / v)) : (i.left -= (f - d) / 2, i.top -= (b - v) / 2);
      i.width = f, i.height = b, this.renderCanvas(!0);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function(e) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(e));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function(e) {
    return e = Number(e), Y(e) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = e % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(e) {
    var s = this.imageData.scaleY;
    return this.scale(e, Y(s) ? s : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(e) {
    var s = this.imageData.scaleX;
    return this.scale(Y(s) ? s : 1, e);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.imageData, l = !1;
    return e = Number(e), s = Number(s), this.ready && !this.disabled && this.options.scalable && (Y(e) && (o.scaleX = e, l = !0), Y(s) && (o.scaleY = s, l = !0), l && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.options, o = this.imageData, l = this.canvasData, i = this.cropBoxData, d;
    if (this.ready && this.cropped) {
      d = {
        x: i.left - l.left,
        y: i.top - l.top,
        width: i.width,
        height: i.height
      };
      var v = o.width / o.naturalWidth;
      if (se(d, function(f, b) {
        d[b] = f / v;
      }), e) {
        var a = Math.round(d.y + d.height), g = Math.round(d.x + d.width);
        d.x = Math.round(d.x), d.y = Math.round(d.y), d.width = g - d.x, d.height = a - d.y;
      }
    } else
      d = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return s.rotatable && (d.rotate = o.rotate || 0), s.scalable && (d.scaleX = o.scaleX || 1, d.scaleY = o.scaleY || 1), d;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function(e) {
    var s = this.options, o = this.imageData, l = this.canvasData, i = {};
    if (this.ready && !this.disabled && Je(e)) {
      var d = !1;
      s.rotatable && Y(e.rotate) && e.rotate !== o.rotate && (o.rotate = e.rotate, d = !0), s.scalable && (Y(e.scaleX) && e.scaleX !== o.scaleX && (o.scaleX = e.scaleX, d = !0), Y(e.scaleY) && e.scaleY !== o.scaleY && (o.scaleY = e.scaleY, d = !0)), d && this.renderCanvas(!0, !0);
      var v = o.width / o.naturalWidth;
      Y(e.x) && (i.left = e.x * v + l.left), Y(e.y) && (i.top = e.y * v + l.top), Y(e.width) && (i.width = e.width * v), Y(e.height) && (i.height = e.height * v), this.setCropBoxData(i);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? Q({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? Q({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var e = this.canvasData, s = {};
    return this.ready && se(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(o) {
      s[o] = e[o];
    }), s;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function(e) {
    var s = this.canvasData, o = s.aspectRatio;
    return this.ready && !this.disabled && Je(e) && (Y(e.left) && (s.left = e.left), Y(e.top) && (s.top = e.top), Y(e.width) ? (s.width = e.width, s.height = e.width / o) : Y(e.height) && (s.height = e.height, s.width = e.height * o), this.renderCanvas(!0)), this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function() {
    var e = this.cropBoxData, s;
    return this.ready && this.cropped && (s = {
      left: e.left,
      top: e.top,
      width: e.width,
      height: e.height
    }), s || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function(e) {
    var s = this.cropBoxData, o = this.options.aspectRatio, l, i;
    return this.ready && this.cropped && !this.disabled && Je(e) && (Y(e.left) && (s.left = e.left), Y(e.top) && (s.top = e.top), Y(e.width) && e.width !== s.width && (l = !0, s.width = e.width), Y(e.height) && e.height !== s.height && (i = !0, s.height = e.height), o && (l ? s.height = s.width / o : i && (s.width = s.height * o)), this.renderCropBox()), this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var s = this.canvasData, o = ku(this.image, this.imageData, s, e);
    if (!this.cropped)
      return o;
    var l = this.getData(e.rounded), i = l.x, d = l.y, v = l.width, a = l.height, g = o.width / Math.floor(s.naturalWidth);
    g !== 1 && (i *= g, d *= g, v *= g, a *= g);
    var f = v / a, b = Ve({
      aspectRatio: f,
      width: e.maxWidth || 1 / 0,
      height: e.maxHeight || 1 / 0
    }), S = Ve({
      aspectRatio: f,
      width: e.minWidth || 0,
      height: e.minHeight || 0
    }, "cover"), I = Ve({
      aspectRatio: f,
      width: e.width || (g !== 1 ? o.width : v),
      height: e.height || (g !== 1 ? o.height : a)
    }), T = I.width, D = I.height;
    T = Math.min(b.width, Math.max(S.width, T)), D = Math.min(b.height, Math.max(S.height, D));
    var M = document.createElement("canvas"), R = M.getContext("2d");
    M.width = tt(T), M.height = tt(D), R.fillStyle = e.fillColor || "transparent", R.fillRect(0, 0, T, D);
    var V = e.imageSmoothingEnabled, A = V === void 0 ? !0 : V, B = e.imageSmoothingQuality;
    R.imageSmoothingEnabled = A, B && (R.imageSmoothingQuality = B);
    var X = o.width, k = o.height, j = i, G = d, oe, re, ce, Se, pe, ge;
    j <= -v || j > X ? (j = 0, oe = 0, ce = 0, pe = 0) : j <= 0 ? (ce = -j, j = 0, oe = Math.min(X, v + j), pe = oe) : j <= X && (ce = 0, oe = Math.min(v, X - j), pe = oe), oe <= 0 || G <= -a || G > k ? (G = 0, re = 0, Se = 0, ge = 0) : G <= 0 ? (Se = -G, G = 0, re = Math.min(k, a + G), ge = re) : G <= k && (Se = 0, re = Math.min(a, k - G), ge = re);
    var P = [j, G, oe, re];
    if (pe > 0 && ge > 0) {
      var z = T / v;
      P.push(ce * z, Se * z, pe * z, ge * z);
    }
    return R.drawImage.apply(R, [o].concat(Hs(P.map(function(N) {
      return Math.floor(tt(N));
    })))), M;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(e) {
    var s = this.options;
    return !this.disabled && !qt(e) && (s.aspectRatio = Math.max(0, e) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(e) {
    var s = this.options, o = this.dragBox, l = this.face;
    if (this.ready && !this.disabled) {
      var i = e === Er, d = s.movable && e === Xs;
      e = i || d ? e : Zs, s.dragMode = e, St(o, yt, e), Qe(o, nr, i), Qe(o, ir, d), s.cropBoxMovable || (St(l, yt, e), Qe(l, nr, i), Qe(l, ir, d));
    }
    return this;
  }
}, ju = Le.Cropper, ro = /* @__PURE__ */ function() {
  function r(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Fc(this, r), !e || !uu.test(e.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = e, this.options = Q({}, ss, Je(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return qc(r, [{
    key: "init",
    value: function() {
      var s = this.element, o = s.tagName.toLowerCase(), l;
      if (!s[J]) {
        if (s[J] = this, o === "img") {
          if (this.isImg = !0, l = s.getAttribute("src") || "", this.originalUrl = l, !l)
            return;
          l = s.src;
        } else
          o === "canvas" && window.HTMLCanvasElement && (l = s.toDataURL());
        this.load(l);
      }
    }
  }, {
    key: "load",
    value: function(s) {
      var o = this;
      if (s) {
        this.url = s, this.imageData = {};
        var l = this.element, i = this.options;
        if (!i.rotatable && !i.scalable && (i.checkOrientation = !1), !i.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (lu.test(s)) {
          cu.test(s) ? this.read(Eu(s)) : this.clone();
          return;
        }
        var d = new XMLHttpRequest(), v = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = v, d.onerror = v, d.ontimeout = v, d.onprogress = function() {
          d.getResponseHeader("content-type") !== rs && d.abort();
        }, d.onload = function() {
          o.read(d.response);
        }, d.onloadend = function() {
          o.reloading = !1, o.xhr = null;
        }, i.checkCrossOrigin && ns(s) && l.crossOrigin && (s = is(s)), d.open("GET", s, !0), d.responseType = "arraybuffer", d.withCredentials = l.crossOrigin === "use-credentials", d.send();
      }
    }
  }, {
    key: "read",
    value: function(s) {
      var o = this.options, l = this.imageData, i = $u(s), d = 0, v = 1, a = 1;
      if (i > 1) {
        this.url = Mu(s, rs);
        var g = Tu(i);
        d = g.rotate, v = g.scaleX, a = g.scaleY;
      }
      o.rotatable && (l.rotate = d), o.scalable && (l.scaleX = v, l.scaleY = a), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, o = this.url, l = s.crossOrigin, i = o;
      this.options.checkCrossOrigin && ns(o) && (l || (l = "anonymous"), i = is(o)), this.crossOrigin = l, this.crossOriginUrl = i;
      var d = document.createElement("img");
      l && (d.crossOrigin = l), d.src = i || o, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), le(d, Zr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var l = Le.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Le.navigator.userAgent), i = function(g, f) {
        Q(s.imageData, {
          naturalWidth: g,
          naturalHeight: f,
          aspectRatio: g / f
        }), s.initialImageData = Q({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (o.naturalWidth && !l) {
        i(o.naturalWidth, o.naturalHeight);
        return;
      }
      var d = document.createElement("img"), v = document.body || document.documentElement;
      this.sizingImage = d, d.onload = function() {
        i(d.width, d.height), l || v.removeChild(d);
      }, d.src = o.src, l || (d.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", v.appendChild(d));
    }
  }, {
    key: "stop",
    value: function() {
      var s = this.image;
      s.onload = null, s.onerror = null, s.parentNode.removeChild(s), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var s = this.element, o = this.options, l = this.image, i = s.parentNode, d = document.createElement("div");
        d.innerHTML = du;
        var v = d.querySelector(".".concat(J, "-container")), a = v.querySelector(".".concat(J, "-canvas")), g = v.querySelector(".".concat(J, "-drag-box")), f = v.querySelector(".".concat(J, "-crop-box")), b = f.querySelector(".".concat(J, "-face"));
        this.container = i, this.cropper = v, this.canvas = a, this.dragBox = g, this.cropBox = f, this.viewBox = v.querySelector(".".concat(J, "-view-box")), this.face = b, a.appendChild(l), le(s, de), i.insertBefore(v, s.nextSibling), Oe(l, Zr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, le(f, de), o.guides || le(f.getElementsByClassName("".concat(J, "-dashed")), de), o.center || le(f.getElementsByClassName("".concat(J, "-center")), de), o.background && le(v, "".concat(J, "-bg")), o.highlight || le(b, su), o.cropBoxMovable && (le(b, ir), St(b, yt, Cr)), o.cropBoxResizable || (le(f.getElementsByClassName("".concat(J, "-line")), de), le(f.getElementsByClassName("".concat(J, "-point")), de)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), ue(o.ready) && _e(s, Qr, o.ready, {
          once: !0
        }), rt(s, Qr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var s = this.cropper.parentNode;
        s && s.removeChild(this.cropper), Oe(this.element, de);
      }
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = ju, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(s) {
      Q(ss, Je(s) && s);
    }
  }]), r;
}();
Q(ro.prototype, Au, Iu, Ou, Lu, Pu, Nu);
const Ru = { class: "flex" }, Vu = ["aria-label"], Bu = { class: "ml-auto mb-2" }, zu = { class: "w-full flex justify-center" }, Hu = ["src"], Uu = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = e, o = r, { t: l } = L("i18n"), { apiUrl: i } = ze(), d = O(null), v = O(null), a = O(!1), g = O(""), f = O(!1), b = () => {
      a.value = !a.value, a.value ? v.value = new ro(d.value, {
        crop(T) {
        }
      }) : v.value.destroy();
    }, S = L("postData"), I = () => {
      v.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (T) => {
          g.value = "", f.value = !1, Nt(i.value, {
            method: "POST",
            params: Object.assign(S, {
              q: "upload",
              adapter: o.selection.adapter,
              path: o.selection.item.path,
              file: T
            }),
            name: o.selection.item.basename,
            json: !1
          }).then((D) => {
            g.value = l("Updated."), d.value.src = tr(o.selection.adapter, o.selection.item.path), b(), s("load");
          }).catch((D) => {
            g.value = l(D.message), f.value = !0;
          });
        }
      );
    };
    return Me(() => {
      s("load");
    }), (T, D) => (w(), C(ie, null, [
      p("div", Ru, [
        p("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Vu),
        p("div", Bu, [
          a.value ? (w(), C("button", {
            key: 0,
            onClick: I,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(l)("Crop")), 1)) : U("", !0),
          p("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: D[0] || (D[0] = (M) => b())
          }, E(a.value ? x(l)("Cancel") : x(l)("Edit")), 1)
        ])
      ]),
      p("div", zu, [
        p("img", {
          ref_key: "image",
          ref: d,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(tr)(o.selection.adapter, o.selection.item.path),
          alt: ""
        }, null, 8, Hu)
      ]),
      g.value.length ? (w(), q(Te, {
        key: 0,
        onHidden: D[1] || (D[1] = (M) => g.value = ""),
        error: f.value
      }, {
        default: F(() => [
          te(E(g.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : U("", !0)
    ], 64));
  }
}, Ku = { class: "flex" }, Yu = ["aria-label"], Wu = /* @__PURE__ */ p("div", null, null, -1), Xu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = e;
    return Me(() => {
      s("load");
    }), (o, l) => (w(), C(ie, null, [
      p("div", Ku, [
        p("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Yu)
      ]),
      Wu
    ], 64));
  }
}, Zu = ["aria-label"], Fu = {
  class: "w-full",
  preload: "",
  controls: ""
}, qu = ["src"], Gu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const { apiUrl: s } = ze(), o = r, l = e, i = () => s.value + "?" + wt({ q: "preview", adapter: o.selection.adapter, path: o.selection.item.path });
    return Me(() => {
      l("load");
    }), (d, v) => (w(), C(ie, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Zu),
      p("div", null, [
        p("video", Fu, [
          p("source", {
            src: i(),
            type: "video/mp4"
          }, null, 8, qu),
          te(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, Ju = ["aria-label"], Qu = {
  class: "w-full",
  controls: ""
}, ed = ["src"], td = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const { apiUrl: s } = ze(), o = r, l = e, i = () => s.value + "?" + wt({ q: "preview", adapter: o.selection.adapter, path: o.selection.item.path });
    return Me(() => {
      l("load");
    }), (d, v) => (w(), C(ie, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Ju),
      p("div", null, [
        p("audio", Qu, [
          p("source", {
            src: i(),
            type: "audio/mpeg"
          }, null, 8, ed),
          te(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, rd = ["aria-label"], sd = ["data"], od = ["src"], nd = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const { apiUrl: s } = ze(), o = r, l = e, i = () => s.value + "?" + wt({ q: "preview", adapter: o.selection.adapter, path: o.selection.item.path });
    return Me(() => {
      l("load");
    }), (d, v) => (w(), C(ie, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, rd),
      p("div", null, [
        p("object", {
          class: "h-[60vh]",
          data: i(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          p("iframe", {
            class: "border-0",
            src: i(),
            width: "100%",
            height: "100%"
          }, `
          <p>
            Your browser does not support PDFs.
            <a href="https://example.com/test.pdf">Download the PDF</a>
            .
          </p>
        `, 8, od)
        ], 8, sd)
      ])
    ], 64));
  }
}, id = { class: "sm:flex sm:items-start" }, ad = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, ld = { class: "text-gray-700 dark:text-gray-200 text-sm" }, cd = {
  key: 0,
  class: "flex leading-5"
}, ud = /* @__PURE__ */ p("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ p("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ p("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), dd = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, hd = { class: "font-bold pl-2" }, fd = { class: "font-bold pl-2" }, pd = {
  name: "VFModalPreview"
}, gd = /* @__PURE__ */ Object.assign(pd, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = L("emitter"), { t: s } = L("i18n"), o = O(!1), l = (a) => o.value = a, i = r, d = (a) => (i.selection.item.mime_type ?? "").startsWith(a), v = () => {
      e.emit("vf-download", i.selection.item);
    };
    return (a, g) => (w(), q($e, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: g[6] || (g[6] = (f) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Close")), 1),
        p("button", {
          type: "button",
          onClick: g[7] || (g[7] = (f) => v()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Download")), 1)
      ]),
      default: F(() => [
        p("div", id, [
          p("div", ad, [
            p("div", null, [
              d("text") ? (w(), q(Zc, {
                key: 0,
                selection: r.selection,
                onLoad: g[0] || (g[0] = (f) => l(!0))
              }, null, 8, ["selection"])) : d("image") ? (w(), q(Uu, {
                key: 1,
                selection: r.selection,
                onLoad: g[1] || (g[1] = (f) => l(!0))
              }, null, 8, ["selection"])) : d("video") ? (w(), q(Gu, {
                key: 2,
                selection: r.selection,
                onLoad: g[2] || (g[2] = (f) => l(!0))
              }, null, 8, ["selection"])) : d("audio") ? (w(), q(td, {
                key: 3,
                selection: r.selection,
                onLoad: g[3] || (g[3] = (f) => l(!0))
              }, null, 8, ["selection"])) : d("application/pdf") ? (w(), q(nd, {
                key: 4,
                selection: r.selection,
                onLoad: g[4] || (g[4] = (f) => l(!0))
              }, null, 8, ["selection"])) : (w(), q(Xu, {
                key: 5,
                selection: r.selection,
                onLoad: g[5] || (g[5] = (f) => l(!0))
              }, null, 8, ["selection"]))
            ]),
            p("div", ld, [
              o.value == !1 ? (w(), C("div", cd, [
                ud,
                p("span", null, E(x(s)("Loading")), 1)
              ])) : U("", !0)
            ])
          ])
        ]),
        p("div", dd, [
          p("div", null, [
            p("span", hd, E(x(s)("File Size")) + ": ", 1),
            te(E(x(ds)(r.selection.item.file_size)), 1)
          ]),
          p("div", null, [
            p("span", fd, E(x(s)("Last Modified")) + ": ", 1),
            te(" " + E(x(hs)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), md = { class: "sm:flex sm:items-start" }, vd = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), bd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, yd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Sd = { class: "mt-2" }, wd = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, _d = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, xd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), kd = [
  xd
], Dd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Cd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ed = [
  Cd
], Md = { class: "ml-1.5" }, $d = ["onKeyup"], Td = {
  name: "VFModalRename"
}, Ad = /* @__PURE__ */ Object.assign(Td, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = L("emitter");
    L("storage");
    const s = L("adapter"), { t: o } = L("i18n"), l = r, i = O(l.selection.items[0]), d = O(l.selection.items[0].basename), v = O(""), a = () => {
      d.value != "" && e.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: s.value,
          path: l.current.dirname,
          item: i.value.path,
          name: d.value
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: o("%s is renamed.", d.value) });
        },
        onError: (g) => {
          v.value = o(g.message);
        }
      });
    };
    return (g, f) => (w(), q($e, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: a,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Rename")), 1),
        p("button", {
          type: "button",
          onClick: f[2] || (f[2] = (b) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", md, [
          vd,
          p("div", bd, [
            p("h3", yd, E(x(o)("Rename")), 1),
            p("div", Sd, [
              p("p", wd, [
                i.value.type == "dir" ? (w(), C("svg", _d, kd)) : (w(), C("svg", Dd, Ed)),
                p("span", Md, E(i.value.basename), 1)
              ]),
              be(p("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (b) => d.value = b),
                onKeyup: ot(a, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, $d), [
                [nt, d.value]
              ]),
              v.value.length ? (w(), q(Te, {
                key: 0,
                onHidden: f[1] || (f[1] = (b) => v.value = ""),
                error: ""
              }, {
                default: F(() => [
                  te(E(v.value), 1)
                ]),
                _: 1
              })) : U("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Id = { class: "sm:flex sm:items-start" }, Od = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), Ld = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Pd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Nd = { class: "mt-2" }, jd = { class: "text-gray-500 mb-1" }, Rd = ["id"], Vd = {
  key: 0,
  class: "py-2"
}, Bd = ["disabled", "onClick"], zd = {
  name: "VFModalUpload"
}, Hd = /* @__PURE__ */ Object.assign(zd, {
  props: {
    current: Object
  },
  setup(r) {
    const e = L("emitter"), { apiUrl: s } = ze(), { t: o } = L("i18n"), l = L("maxFileSize"), i = r, d = O(null), v = O(null), a = O(null), g = O([]), f = O(""), b = O(!0), S = () => {
      f.value = "", d.value.start();
    }, I = L("postData");
    return Me(() => {
      d.value = new dt.Uploader({
        runtimes: "html5",
        browse_button: a.value,
        container: v.value,
        max_file_size: l,
        multiple_queues: !0,
        file_data_name: "file",
        url: s.value + "?" + wt(Object.assign(I, { q: "upload", adapter: i.current.adapter, path: i.current.dirname })),
        // filters : [
        // 	{title : "Image files", extensions : "jpg,gif,png,jpeg"},
        // 	{title : "Zip files", extensions : "zip"}
        // ],
        headers: {
          ...Pt && { "X-CSRF-Token": Pt }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(T, D) {
            b.value = !1, dt.each(D, function(M) {
              g.value.push({
                id: M.id,
                name: M.name,
                size: dt.formatSize(M.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(T, D) {
            g.value[g.value.findIndex((M) => M.id == D.id)].percent = D.percent + "%";
          },
          UploadComplete: function() {
            b.value = !0, e.emit("vf-fetch", { params: { q: "index", adapter: i.current.adapter, path: i.current.dirname } });
          },
          Error: function(T, D) {
            d.value.stop(), D.code == dt.HTTP_ERROR ? f.value = o(JSON.parse(D.response).message) : D.code == dt.FILE_SIZE_ERROR ? f.value = o("The selected file exceeds the maximum file size. You cannot upload files greater than %s", [l]) : f.value = o(D.message);
          }
        }
      }), d.value.init();
    }), (T, D) => (w(), q($e, null, {
      buttons: F(() => [
        p("button", {
          disabled: b.value,
          onClick: We(S, ["prevent"]),
          type: "button",
          class: he([b.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, E(x(o)("Upload")), 11, Bd),
        p("button", {
          type: "button",
          onClick: D[1] || (D[1] = (M) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", Id, [
          Od,
          p("div", Ld, [
            p("h3", Pd, E(x(o)("Upload files")), 1),
            p("div", Nd, [
              p("div", jd, [
                (w(!0), C(ie, null, ye(g.value, (M) => (w(), C("div", null, [
                  p("div", {
                    id: M.id
                  }, [
                    te(E(M.name) + " ( " + E(M.size) + ") ", 1),
                    p("b", null, E(M.percent), 1)
                  ], 8, Rd)
                ]))), 256)),
                g.value.length ? U("", !0) : (w(), C("div", Vd, E(x(o)("No files selected!")), 1))
              ]),
              p("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: v
              }, [
                p("button", {
                  ref_key: "pickFiles",
                  ref: a,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, E(x(o)("Select Files")), 513)
              ], 512),
              f.value.length ? (w(), q(Te, {
                key: 0,
                onHidden: D[0] || (D[0] = (M) => f.value = ""),
                error: ""
              }, {
                default: F(() => [
                  te(E(f.value), 1)
                ]),
                _: 1
              })) : U("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ud = { class: "sm:flex sm:items-start" }, Kd = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Yd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Wd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Xd = { class: "mt-2" }, Zd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Fd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, qd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Gd = [
  qd
], Jd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Qd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), eh = [
  Qd
], th = { class: "ml-1.5" }, rh = ["onKeyup", "placeholder"], sh = {
  name: "VFModalArchive"
}, oh = /* @__PURE__ */ Object.assign(sh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = L("emitter");
    L("storage");
    const s = L("adapter"), { t: o } = L("i18n"), l = r, i = O(""), d = O(""), v = O(l.selection.items), a = () => {
      v.value.length && e.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: s.value,
          path: l.current.dirname,
          items: JSON.stringify(v.value.map(({ path: g, type: f }) => ({ path: g, type: f }))),
          name: i.value
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: o("The file(s) archived.") });
        },
        onError: (g) => {
          d.value = o(g.message);
        }
      });
    };
    return (g, f) => (w(), q($e, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: a,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Archive")), 1),
        p("button", {
          type: "button",
          onClick: f[2] || (f[2] = (b) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", Ud, [
          Kd,
          p("div", Yd, [
            p("h3", Wd, E(x(o)("Archive the files")), 1),
            p("div", Xd, [
              (w(!0), C(ie, null, ye(v.value, (b) => (w(), C("p", Zd, [
                b.type == "dir" ? (w(), C("svg", Fd, Gd)) : (w(), C("svg", Jd, eh)),
                p("span", th, E(b.basename), 1)
              ]))), 256)),
              be(p("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (b) => i.value = b),
                onKeyup: ot(a, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(o)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, rh), [
                [nt, i.value]
              ]),
              d.value.length ? (w(), q(Te, {
                key: 0,
                onHidden: f[1] || (f[1] = (b) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  te(E(d.value), 1)
                ]),
                _: 1
              })) : U("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), nh = { class: "sm:flex sm:items-start" }, ih = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), ah = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, lh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ch = { class: "mt-2" }, uh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, dh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, hh = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), fh = [
  hh
], ph = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, gh = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), mh = [
  gh
], vh = { class: "ml-1.5" }, bh = { class: "my-1 text-sm text-gray-500" }, yh = {
  name: "VFModalUnarchive"
}, Sh = /* @__PURE__ */ Object.assign(yh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = L("emitter");
    L("storage");
    const s = L("adapter"), { t: o } = L("i18n"), l = r;
    O("");
    const i = O(l.selection.items[0]), d = O(""), v = O([]), a = () => {
      e.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: s.value,
          path: l.current.dirname,
          item: i.value.path
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: o("The file unarchived.") });
        },
        onError: (g) => {
          d.value = o(g.message);
        }
      });
    };
    return (g, f) => (w(), q($e, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: a,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Unarchive")), 1),
        p("button", {
          type: "button",
          onClick: f[1] || (f[1] = (b) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", nh, [
          ih,
          p("div", ah, [
            p("h3", lh, E(x(o)("Unarchive")), 1),
            p("div", ch, [
              (w(!0), C(ie, null, ye(v.value, (b) => (w(), C("p", uh, [
                b.type == "dir" ? (w(), C("svg", dh, fh)) : (w(), C("svg", ph, mh)),
                p("span", vh, E(b.basename), 1)
              ]))), 256)),
              p("p", bh, E(x(o)("The archive will be unarchived at")) + " (" + E(r.current.dirname) + ")", 1),
              d.value.length ? (w(), q(Te, {
                key: 0,
                onHidden: f[0] || (f[0] = (b) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  te(E(d.value), 1)
                ]),
                _: 1
              })) : U("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), wh = { class: "sm:flex sm:items-start" }, _h = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), xh = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, kh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Dh = { class: "mt-2" }, Ch = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Eh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Mh = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), $h = [
  Mh
], Th = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ah = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ih = [
  Ah
], Oh = { class: "ml-1.5" }, Lh = { class: "text-sm text-gray-500 pb-1 pt-3" }, Ph = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Nh = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), jh = { class: "ml-1.5 overflow-auto" }, Rh = {
  name: "VFModalMove"
}, Vh = /* @__PURE__ */ Object.assign(Rh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = L("emitter"), { t: s } = L("i18n");
    L("storage");
    const o = L("adapter"), l = r, i = O(l.selection.items.from), d = O(""), v = () => {
      i.value.length && e.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: o.value,
          path: l.current.dirname,
          items: JSON.stringify(i.value.map(({ path: a, type: g }) => ({ path: a, type: g }))),
          item: l.selection.items.to.path
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: s("Files moved.", l.selection.items.to.name) });
        },
        onError: (a) => {
          d.value = s(a.message);
        }
      });
    };
    return (a, g) => (w(), q($e, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Yes, Move!")), 1),
        p("button", {
          type: "button",
          onClick: g[1] || (g[1] = (f) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", wh, [
          _h,
          p("div", xh, [
            p("h3", kh, E(x(s)("Move files")), 1),
            p("div", Dh, [
              (w(!0), C(ie, null, ye(i.value, (f) => (w(), C("p", Ch, [
                f.type == "dir" ? (w(), C("svg", Eh, $h)) : (w(), C("svg", Th, Ih)),
                p("span", Oh, E(f.path), 1)
              ]))), 256)),
              p("p", Lh, E(x(s)("Are you sure you want to move these files?")), 1),
              p("p", Ph, [
                Nh,
                p("span", jh, E(r.selection.items.to.path), 1)
              ]),
              d.value.length ? (w(), q(Te, {
                key: 0,
                onHidden: g[0] || (g[0] = (f) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  te(E(d.value), 1)
                ]),
                _: 1
              })) : U("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalArchive: oh,
  ModalDelete: Ql,
  ModalMessage: kc,
  ModalMove: Vh,
  ModalNewFile: Hc,
  ModalNewFolder: Oc,
  ModalPreview: gd,
  ModalRename: Ad,
  ModalRestore: mc,
  ModalUnarchive: Sh,
  ModalUpload: Hd
}, Symbol.toStringTag, { value: "Module" })), Jt = {
  VueFinder: El,
  ...Bh
};
const Uh = {
  install(r) {
    for (const e in Jt)
      if (Jt.hasOwnProperty(e)) {
        const s = Jt[e];
        r.component(s.name, s);
      }
  }
};
export {
  Uh as default
};
