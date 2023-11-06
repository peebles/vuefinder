import { ref as O, watch as Vt, inject as N, computed as vt, openBlock as w, createElementBlock as E, unref as x, createCommentVNode as K, normalizeClass as he, createElementVNode as p, createTextVNode as se, toDisplayString as M, withDirectives as be, vShow as gt, createVNode as Ee, TransitionGroup as Po, withCtx as F, Fragment as le, renderList as _e, reactive as Lt, onMounted as Me, onUpdated as No, withModifiers as We, nextTick as Bt, isRef as ls, vModelSelect as Rr, createStaticVNode as jo, customRef as Ro, withKeys as st, vModelText as ot, normalizeStyle as cs, provide as ve, createBlock as q, resolveDynamicComponent as Vo, renderSlot as Qt } from "vue";
import ut from "plupload";
var as;
const Pt = (as = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : as.getAttribute("content"), Nt = (r, { method: e = "get", params: s = {}, json: o = !0, signal: l = null }) => {
  const i = { method: e };
  if (i.signal = l, i.credentials = "include", e == "get")
    r += "?" + new URLSearchParams(s), r = r.replace(/\+/g, "%20"), console.log("url:", r);
  else {
    i.headers = {}, Pt && (i.headers["X-CSRF-Token"] = Pt);
    let d = new FormData();
    for (const [m, a] of Object.entries(s))
      d.append(m, a);
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
  function l(m, a) {
    s.value = Object.assign({ ...s.value }, { [m]: a });
  }
  function i() {
    s.value = null;
  }
  return { getStore: (m, a = null) => s.value === null || s.value === "" ? a : s.value.hasOwnProperty(m) ? s.value[m] : a, setStore: l, clearStore: i };
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
    const e = N("emitter"), s = N("userRole"), o = N("usePropDarkMode"), l = N("uploadOverrideEvent"), { getStore: i, setStore: d } = N("storage"), { t: m } = N("i18n"), a = O(i("viewport", "grid")), v = O([]);
    O(i("full-screen", !1));
    const f = O("");
    e.on("vf-search-query", ({ newQuery: T }) => {
      f.value = T;
    });
    const b = N("loadingState"), S = () => b.value;
    e.on("vf-nodes-selected", (T) => {
      v.value = T;
    }), e.on("vf-view-toggle", (T) => {
      d("viewport", T), a.value = T;
    });
    const A = vt(() => s === "admin"), I = vt(() => s === "ae");
    return (T, k) => (w(), E("div", zo, [
      f.value.length ? (w(), E("div", tn, [
        p("div", rn, [
          se(M(x(m)("Search results for")) + " ", 1),
          p("span", sn, M(f.value), 1)
        ]),
        S() ? (w(), E("svg", on, ln)) : K("", !0)
      ])) : (w(), E("div", Ho, [
        A.value || I.value ? (w(), E("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(m)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: k[0] || (k[0] = (R) => x(e).emit("vf-modal-show", { type: "new-folder", items: v.value }))
        }, Yo, 8, Uo)) : K("", !0),
        A.value || I.value ? (w(), E("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": x(m)("Edit"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: k[1] || (k[1] = (R) => x(e).emit("ca-edit", { type: "edit", items: v.value, current: r.data }))
        }, [
          (w(), E("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: he([v.value.length > 0 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Zo, 2))
        ], 8, Wo)) : K("", !0),
        A.value || I.value ? (w(), E("div", {
          key: 2,
          class: "mx-1.5",
          "aria-label": x(m)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: k[2] || (k[2] = (R) => !v.value.length || x(e).emit("vf-modal-show", { type: "delete", items: v.value }))
        }, [
          (w(), E("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: he([v.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Go, 2))
        ], 8, Fo)) : K("", !0),
        A.value || I.value ? (w(), E("div", {
          key: 3,
          class: "mx-1.5",
          "aria-label": x(m)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: k[3] || (k[3] = (R) => x(e).emit(x(l) ? x(l) : "vf-modal-show", { type: "upload", items: v.value, current: r.data }))
        }, en, 8, Jo)) : K("", !0)
      ])),
      p("div", cn, [
        be(p("div", {
          class: "mx-1.5",
          "aria-label": x(m)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (w(), E("svg", {
            onClick: k[4] || (k[4] = (R) => x(e).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, hn))
        ], 8, un), [
          [gt, !x(o)]
        ]),
        p("div", {
          class: "mx-1.5",
          "aria-label": x(m)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: k[5] || (k[5] = (R) => f.value.length || x(e).emit("vf-view-toggle", a.value == "list" ? "grid" : "list"))
        }, [
          (w(), E("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: he([f.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            a.value == "grid" ? (w(), E("path", pn)) : K("", !0),
            a.value == "list" ? (w(), E("path", gn)) : K("", !0)
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
        var g, n, h, y, _ = [], C = !0, H = !1;
        try {
          if (h = (t = t.call(c)).next, u === 0) {
            if (Object(t) !== t)
              return;
            C = !1;
          } else
            for (; !(C = (g = h.call(t)).done) && (_.push(g.value), _.length !== u); C = !0)
              ;
        } catch (X) {
          H = !0, n = X;
        } finally {
          try {
            if (!C && t.return != null && (y = t.return(), Object(y) !== y))
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
        var g = Object.getOwnPropertySymbols(c);
        u && (g = g.filter(function(n) {
          return Object.getOwnPropertyDescriptor(c, n).enumerable;
        })), t.push.apply(t, g);
      }
      return t;
    }
    function l(c) {
      for (var u = 1; u < arguments.length; u++) {
        var t = arguments[u] != null ? arguments[u] : {};
        u % 2 ? o(Object(t), !0).forEach(function(g) {
          a(c, g, t[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(g) {
          Object.defineProperty(c, g, Object.getOwnPropertyDescriptor(t, g));
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
        var g = u[t];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, B(g.key), g);
      }
    }
    function m(c, u, t) {
      return u && d(c.prototype, u), t && d(c, t), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function a(c, u, t) {
      return u = B(u), u in c ? Object.defineProperty(c, u, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : c[u] = t, c;
    }
    function v(c, u) {
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
      return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, n) {
        return g.__proto__ = n, g;
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
    function A(c, u, t) {
      return S() ? A = Reflect.construct.bind() : A = function(n, h, y) {
        var _ = [null];
        _.push.apply(_, h);
        var C = Function.bind.apply(n, _), H = new C();
        return y && b(H, y.prototype), H;
      }, A.apply(null, arguments);
    }
    function I(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function T(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return T = function(g) {
        if (g === null || !I(g))
          return g;
        if (typeof g != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(g))
            return u.get(g);
          u.set(g, n);
        }
        function n() {
          return A(g, arguments, f(this).constructor);
        }
        return n.prototype = Object.create(g.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(n, g);
      }, T(c);
    }
    function k(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function R(c, u) {
      if (u && (typeof u == "object" || typeof u == "function"))
        return u;
      if (u !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return k(c);
    }
    function z(c) {
      var u = S();
      return function() {
        var g = f(c), n;
        if (u) {
          var h = f(this).constructor;
          n = Reflect.construct(g, arguments, h);
        } else
          n = g.apply(this, arguments);
        return R(this, n);
      };
    }
    function L(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = f(c), c !== null); )
        ;
      return c;
    }
    function V() {
      return typeof Reflect < "u" && Reflect.get ? V = Reflect.get.bind() : V = function(u, t, g) {
        var n = L(u, t);
        if (n) {
          var h = Object.getOwnPropertyDescriptor(n, t);
          return h.get ? h.get.call(arguments.length < 3 ? u : g) : h.value;
        }
      }, V.apply(this, arguments);
    }
    function Z(c, u) {
      return G(c) || s(c, u) || te(c, u) || pe();
    }
    function D(c) {
      return j(c) || oe(c) || te(c) || ye();
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
    function te(c, u) {
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
      for (var t = 0, g = new Array(u); t < u; t++)
        g[t] = c[t];
      return g;
    }
    function ye() {
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
        if (Array.isArray(c) || (t = te(c)) || u && c && typeof c.length == "number") {
          t && (c = t);
          var g = 0, n = function() {
          };
          return {
            s: n,
            n: function() {
              return g >= c.length ? {
                done: !0
              } : {
                done: !1,
                value: c[g++]
              };
            },
            e: function(C) {
              throw C;
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
          var C = t.next();
          return h = C.done, C;
        },
        e: function(C) {
          y = !0, _ = C;
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
    function $(c, u) {
      if (typeof c != "object" || c === null)
        return c;
      var t = c[Symbol.toPrimitive];
      if (t !== void 0) {
        var g = t.call(c, u || "default");
        if (typeof g != "object")
          return g;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (u === "string" ? String : Number)(c);
    }
    function B(c) {
      var u = $(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var P = function(u, t, g) {
      var n = u.x, h = u.y, y = g.x, _ = g.y, C = {
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
      return C[t];
    }, ee = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, U = function(u) {
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
    }, Se = function(c, u) {
      var t = u;
      window.addEventListener("resize", t), window.addEventListener("scroll", t);
      var g = new MutationObserver(t);
      c.forEach(function(h, y) {
        g.observe(h, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var n = function() {
        return go(g, t);
      };
      return {
        observer: g,
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
        for (var g = arguments.length, n = new Array(g), h = 0; h < g; h++)
          n[h] = arguments[h];
        var y = function() {
          t = null, c.apply(void 0, n);
        };
        clearTimeout(t), t = setTimeout(y, u);
      };
    }, Xt = function() {
      var c, u, t, g;
      return {
        y: ((c = document.body) === null || c === void 0 ? void 0 : c.scrollTop) || ((u = document.documentElement) === null || u === void 0 ? void 0 : u.scrollTop) || 0,
        x: ((t = document.body) === null || t === void 0 ? void 0 : t.scrollLeft) || ((g = document.documentElement) === null || g === void 0 ? void 0 : g.scrollLeft) || 0
      };
    }, Tr = function(c) {
      var u = function t(g) {
        var n, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (n = g[h]) === null || n === void 0 ? void 0 : n.parentNode;
        return y ? (g.push(y), h++, t(g, h)) : g;
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
    }, Ir = function(c, u) {
      var t = {
        top: Number.POSITIVE_INFINITY,
        left: Number.POSITIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        width: Number.NEGATIVE_INFINITY,
        height: Number.NEGATIVE_INFINITY
      };
      return Ne(c).forEach(function(g) {
        var n = u.getRect(g);
        t.top = Math.min(t.top, n.top), t.left = Math.min(t.left, n.left), t.bottom = Math.max(t.bottom, n.bottom), t.right = Math.max(t.right, n.right);
      }), t.height = t.bottom - t.top, t.width = t.right - t.left, t;
    }, Mt = function(c) {
      return !c || c instanceof Document ? Xt() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : Xt().x,
        y: c.scrollTop >= 0 ? c.scrollTop : Xt().y
      };
    }, Ar = function(c) {
      var u = c.elementRect, t = c.containerRect, g = c.tolerance, n = g === void 0 ? {
        x: 0,
        y: 0
      } : g, h = [];
      return u.top - n.y < t.top && h.push("top"), u.left - n.x < t.left && h.push("left"), u.bottom + n.y > t.bottom && h.push("bottom"), u.right + n.y > t.right && h.push("right"), /** @type {DSEdges} */
      h;
    }, oo = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, no = function(c) {
      var u = c.scrollAmount, t = c.initialPointerPos, g = c.pointerPos, n = {};
      return g.x > t.x - u.x ? (n.left = t.x - u.x, n.width = g.x - t.x + u.x) : (n.left = g.x, n.width = t.x - g.x - u.x), g.y > t.y - u.y ? (n.top = t.y - u.y, n.height = g.y - t.y + u.y) : (n.top = g.y, n.height = t.y - g.y - u.y), n;
    }, $r = function(u) {
      var t = {
        x: 0,
        y: 0
      }, g = window.getComputedStyle(u);
      if (!g.transform || g.transform === "none")
        return t;
      if (g.transform.indexOf("3d") >= 0) {
        var n = g.transform.trim().match(/matrix3d\((.*?)\)/);
        if (n && n.length) {
          var h, y = (h = n[1]) === null || h === void 0 ? void 0 : h.split(",");
          t.x = parseInt(y[12]) || 0, t.y = parseInt(y[13]) || 0;
        }
        return t;
      }
      var _ = g.transform.trim().match(/matrix\((.*?)\)/);
      if (_ && _.length) {
        var C, H = (C = _[1]) === null || C === void 0 ? void 0 : C.split(",");
        t.x = parseInt(H[4]) || 0, t.y = parseInt(H[5]) || 0;
      }
      return t;
    }, io = function(u) {
      var t = u.style.transform;
      if (!t || t.indexOf("translate") < 0)
        return $r(u);
      var g = {
        x: 0,
        y: 0
      }, n = t.trim().match(/translate[3dD]*?\(.*?\)/);
      if (n) {
        var h, y = (h = n[0]) === null || h === void 0 ? void 0 : h.split("(");
        if (y) {
          var _, C = (_ = y[1]) === null || _ === void 0 ? void 0 : _.split(",");
          g.x = parseInt(C[0]) || 0, g.y = parseInt(C[1]) || 0;
        }
      }
      return !g.x && !g.x ? $r(u) : g;
    }, ao = function(u) {
      var t = u.style, g = {
        x: parseInt(t.left) || 0,
        y: parseInt(t.top) || 0
      };
      if (!g.x && !g.x) {
        var n = window.getComputedStyle(u);
        return {
          x: parseInt(n.left) || 0,
          y: parseInt(n.top) || 0
        };
      }
      return g;
    }, lo = function(c, u) {
      return u ? io(c) : ao(c);
    }, co = function(c) {
      var u = c.element, t = c.edges, g = c.elementRect, n = c.containerRect, h = c.elementPos, y = c.useTransform;
      t.includes("top") && at(u, {
        y: h.y + n.top - g.top,
        x: h.x
      }, y), t.includes("left") && at(u, {
        y: h.y,
        x: h.x + n.left - g.left
      }, y), t.includes("bottom") && at(u, {
        y: h.y + n.bottom - g.bottom,
        x: h.x
      }, y), t.includes("right") && at(u, {
        y: h.y,
        x: h.x + n.right - g.right
      }, y);
    }, Or = function(c) {
      var u = c.computedStyle, t = c.node, g = u.position, n = g === "absolute" || g === "relative" || g === "fixed";
      !(t instanceof Document) && !n && (t.style.position = "relative");
    }, uo = function(c) {
      var u = c.shiftKey, t = c.keyboardDragSpeed, g = c.zoom, n = c.key, h = c.dragKeys, y = c.scrollDiff, _ = c.canScroll, C = c.scrollCallback, H = {
        x: 0,
        y: 0
      }, X = u ? t * 4 * g : t * g;
      return h.left.includes(n) && (H.x = y.x || -X, !u && !y.x && _ && C(["left"], t)), h.right.includes(n) && (H.x = y.x || X, !u && !y.x && _ && C(["right"], t)), h.up.includes(n) && (H.y = y.y || -X, !u && !y.y && _ && C(["top"], t)), h.down.includes(n) && (H.y = y.y || X, !u && !y.y && _ && C(["bottom"], t)), H;
    }, ho = function(c) {
      var u = c.element, t = c.force, g = c.multiSelectionToggle, n = c.SelectedSet, h = c.hoverClassName;
      u.classList.contains(h) && !t || (n.has(u) ? g && n.delete(u) : n.add(u), u.classList.add(h));
    }, fo = function(c) {
      var u = c.element, t = c.force, g = c.SelectedSet, n = c.PrevSelectedSet, h = c.hoverClassName;
      if (!u.classList.contains(h) && !t)
        return !1;
      var y = g.has(u), _ = n.has(u);
      y && !_ ? g.delete(u) : !y && _ && g.add(u), u.classList.remove(h);
    }, it = function(u, t, g) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(t, '".'));
    }, W = function(u, t, g, n) {
      if (t === void 0)
        return g ? a({}, u, n) : {};
      if (t === null)
        return a({}, u, null);
      var h = !0, y = !1, _ = typeof n == "string";
      _ && (h = typeof t == "string" || t instanceof String), _ && !h && (y = !0, it(u, "string"));
      var C = !Number.isNaN(n) && typeof n == "number";
      C && (h = !Number.isNaN(t) && typeof t == "number"), C && !h && (y = !0, it(u, "number"));
      var H = Object.prototype.toString.call(n) === "[object Object]";
      H && (h = Object.prototype.toString.call(t) === "[object Object]"), H && !h && (y = !0, it(u, "object"));
      var X = typeof n == "boolean";
      X && (h = typeof t == "boolean"), X && !h && (y = !0, it(u, "boolean"));
      var ie = Array.isArray(n);
      ie && (h = Array.isArray(t)), ie && !h && (y = !0, it(u, "array"));
      var ke = y || g;
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
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, g = c;
      if (t > 0) {
        var n = (c.right - c.left) * t, h = (c.bottom - c.top) * t;
        g = {
          left: c.left + n,
          right: c.right - n,
          top: c.top + h,
          bottom: c.bottom - h
        };
      }
      return g.left < u.right && // 1.
      g.right > u.left && // 2.
      g.top < u.bottom && // 3.
      g.bottom > u.top;
    }, Lr = function(c) {
      var u = c.element, t = c.posDirection, g = c.containerRect, n = c.useTransform, h = lo(u, n), y = P(h, "+", t);
      at(u, y, n);
      var _ = u.getBoundingClientRect(), C = Ar({
        elementRect: _,
        containerRect: g
      });
      co({
        element: u,
        edges: C,
        elementRect: _,
        containerRect: g,
        elementPos: y,
        useTransform: n
      });
    }, go = function(c, u) {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u), c.disconnect();
    }, mo = function(c, u, t) {
      if (u.length) {
        var g = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, n = c instanceof Document ? g || document.body : c, h = u.includes("top") && n.scrollTop > 0, y = u.includes("bottom") && n.scrollTop < n.scrollHeight, _ = u.includes("left") && n.scrollLeft > 0, C = u.includes("right") && n.scrollLeft < n.scrollWidth;
        h && (n.scrollTop -= 1 * t), y && (n.scrollTop += 1 * t), _ && (n.scrollLeft -= 1 * t), C && (n.scrollLeft += 1 * t);
      }
    }, at = function(c, u, t) {
      if (t) {
        var g = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(g.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, vo = function(c) {
      for (var u = c.subscribe, t = c.publish, g = c.Interaction, n = c.SelectedSet, h = c.DropZones, y = {
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
            condition: function(ie) {
              return ie.event;
            }
          }
        ],
        "Interaction:end": [
          // event, isDraggingKeyboard
          {
            name: "callback",
            extraData: function() {
              var ie = h.getTarget();
              return l({}, ie ? {
                dropTarget: ie.toObject()
              } : {});
            }
          }
        ]
      }, _ = function() {
        var ie = Z(H[C], 2), ke = ie[0], De = ie[1];
        ["pre", !1].forEach(function(Te) {
          return u(Te ? "".concat(ke, ":").concat(Te) : ke, function(ne) {
            return De.forEach(function(me) {
              return (!me.condition || me.condition(ne)) && t(Te ? "".concat(Te).concat(me.name) : me.name, l(l({
                items: n.elements,
                isDragging: g.isDragging
              }, ne), me.extraData ? me.extraData(ne) : {}));
            });
          });
        });
      }, C = 0, H = Object.entries(y); C < H.length; C++)
        _();
    }, Ne = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : D(new Set(D(c))) : [];
    }, Pr = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, bo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
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
          t._observers = Se(t.parentNodes, Et(function(n) {
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
        }), this.DS = g, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(n) {
          var h = n.settings;
          t.setArea(h.area);
        }), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return m(c, [{
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
          return this._parentNodes ? this._parentNodes : this._parentNodes = Tr(this.HTMLNode);
        }
      }]), c;
    }(), yo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
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
          }, t._dragKeysFlat = [].concat(D(t._dragKeys.up), D(t._dragKeys.down), D(t._dragKeys.left), D(t._dragKeys.right));
        }), a(this, "keyboardDrag", function(n) {
          var h = n.event, y = n.key, _ = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(_) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability || t.DS.continue)) {
            var C = {
              event: h,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:start:pre", "Interaction:start"], C), t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Ir(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0);
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
            t.DS.stores.SettingsStore.s.dragAsBlock && (H = t.limitDirection(H)), t._elements.forEach(function(X) {
              return Lr({
                element: X,
                posDirection: H,
                containerRect: t.DS.SelectorArea.rect,
                useTransform: t.DS.stores.SettingsStore.s.useTransform
              });
            }), t.DS.publish(["Interaction:update:pre", "Interaction:update"], C);
          }
        }), a(this, "keyboardEnd", function(n) {
          var h = n.event, y = n.key, _ = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(_) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability)) {
            var C = {
              event: h,
              isDragging: t.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:end:pre", "Interaction:end"], C);
          }
        }), a(this, "start", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          !h || y || (t._prevCursorPos = null, t._prevScrollPos = null, t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Ir(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0));
        }), a(this, "stop", function(n) {
          n != null && n.isKeyboard || (t._prevCursorPos = null, t._prevScrollPos = null, t.handleZIndex(!1), t._elements = []);
        }), a(this, "update", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          if (!(!h || !t._elements.length || y || t.DS.continue)) {
            var _ = P(t._cursorDiff, "+", t._scrollDiff);
            t.DS.stores.SettingsStore.s.dragAsBlock && (_ = t.limitDirection(_)), t._elements.forEach(function(C) {
              return Lr({
                element: C,
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
        }), this.DS = g, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return m(c, [{
        key: "_cursorDiff",
        get: function() {
          var t = this.DS.stores.PointerStore.currentVal, g = this._prevCursorPos ? P(t, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = t, g;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var t = this.DS.stores.ScrollStore.currentVal, g = this._prevScrollPos ? P(t, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = t, g;
        }
      }]), c;
    }(), So = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS, n = u.id, h = u.element, y = u.droppables;
        i(this, c), a(this, "id", void 0), a(this, "element", void 0), a(this, "_droppables", void 0), a(this, "_rect", void 0), a(this, "_observers", void 0), a(this, "_timeout", void 0), a(this, "_itemsDropped", []), a(this, "_itemsInside", void 0), a(this, "setReadyClasses", function(_) {
          if (!t.isDestroyed) {
            var C = t.droppables.filter(function(H) {
              return t.DS.SelectedSet.has(H);
            });
            C.length && (C.forEach(function(H) {
              H.classList[_]("".concat(t.Settings.droppableClass)), H.classList[_]("".concat(t.Settings.droppableClass, "-").concat(t.id));
            }), t.element.classList[_]("".concat(t.Settings.dropZoneReadyClass)));
          }
        }), a(this, "handleNoDrop", function() {
          var _;
          t.isDestroyed || (t.DS.SelectedSet.forEach(function(C) {
            C.classList.remove(t.Settings.droppedTargetClass), C.classList.remove("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
          }), t._itemsDropped = t._itemsDropped.filter(function(C) {
            return !t.DS.SelectedSet.has(C);
          }), (_ = t._itemsDropped) !== null && _ !== void 0 && _.length || t.element.classList.remove("".concat(t.Settings.dropZoneTargetClass)));
        }), a(this, "handleDrop", function() {
          var _, C, H;
          t.isDestroyed || (t._itemsDropped = D(new Set([].concat(D(t._itemsDropped), D((_ = t.droppables) === null || _ === void 0 ? void 0 : _.filter(function(X) {
            return t.DS.SelectedSet.has(X);
          }))))), (C = t._itemsDropped) === null || C === void 0 || C.forEach(function(X) {
            X.classList.add("".concat(t.Settings.droppedTargetClass)), X.classList.add("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
          }), (H = t._itemsDropped) !== null && H !== void 0 && H.length && t.element.classList.add("".concat(t.Settings.dropZoneTargetClass)));
        }), a(this, "handleItemsInsideClasses", function() {
          var _ = !1;
          t.droppables.forEach(function(C) {
            t.itemsInside.includes(C) ? (C.classList.add("".concat(t.Settings.droppedInsideClass)), C.classList.add("".concat(t.Settings.droppedInsideClass, "-").concat(t.id)), _ = !0) : (C.classList.remove("".concat(t.Settings.droppedInsideClass, "-").concat(t.id)), C.className.includes("".concat(t.Settings.droppedInsideClass, "-")) || C.classList.remove("".concat(t.Settings.droppedInsideClass)));
          }), _ ? t.element.classList.add("".concat(t.Settings.dropZoneInsideClass)) : t.element.classList.remove("".concat(t.Settings.dropZoneInsideClass));
        }), a(this, "start", function(_) {
          var C = _.isDragging;
          !C || t.isDestroyed || t.setReadyClasses("add");
        }), a(this, "stop", function(_) {
          var C = _.isDragging;
          !C || t.isDestroyed || (t.setReadyClasses("remove"), t.handleItemsInsideClasses());
        }), a(this, "toObject", function() {
          return {
            id: t.id,
            element: t.element,
            droppables: t.droppables,
            itemsDropped: t.itemsDropped,
            itemsInside: t.itemsInside
          };
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.id = n, this.element = h, y && (this.droppables = Ne(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(_) {
          var C = _.settings;
          t.element && (t.element.classList.remove(C["dropZoneClass:pre"]), t.element.classList.add(C.dropZoneClass));
        }), this._observers = Se(this.parentNodes, Et(function() {
          return t._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return m(c, [{
        key: "destroy",
        value: function() {
          var t = this;
          this._observers.cleanup(), this.element.classList.remove("".concat(this.Settings.dropZoneClass)), this.element.classList.remove("".concat(this.Settings.dropZoneTargetClass)), this.element.classList.remove("".concat(this.Settings.dropZoneReadyClass)), this.droppables.forEach(function(g) {
            g.classList.remove("".concat(t.Settings.droppedTargetClass)), g.classList.remove("".concat(t.Settings.droppedTargetClass, "-").concat(t.id)), g.classList.remove("".concat(t.Settings.droppableClass)), g.classList.remove("".concat(t.Settings.droppableClass, "-").concat(t.id));
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
          return this.isDestroyed ? null : this._itemsInside ? this._itemsInside : (this._itemsInside = this.droppables.flatMap(function(g) {
            return qe(t.DS.SelectableSet.rects.get(g), t.rect, t.Settings.dropInsideThreshold) ? [g] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return t._itemsInside = null;
          }, this.Settings.refreshMemoryRate), this._itemsInside);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Tr(this.element);
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
    }(), wo = /* @__PURE__ */ m(
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
        var t = this, g = u.DS;
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
              var C = t._zonesByDroppable.get(_);
              if (!(C != null && C.length))
                return t._zonesByDroppable.set(_, [y]);
              t._zonesByDroppable.set(_, D(new Set([].concat(D(C), [y]))));
            });
          }));
        }), a(this, "_handleDrop", function(n) {
          t._zones.forEach(function(h) {
            h !== n && h.handleNoDrop();
          }), n && n.handleDrop();
        }), a(this, "_getZoneByElementsFromPoint", function(n, h) {
          for (var y = h.x, _ = h.y, C = 0, H = n.length; C < H; C++) {
            var X = t._zoneByElement.get(n[C]);
            if (X && qe(X.rect, {
              left: y,
              right: y,
              top: _,
              bottom: _
            }, Math.min(t.Settings.dropTargetThreshold, 0.5)))
              return X;
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
            var y = (n == null ? void 0 : n.x) || t.DS.stores.PointerStore.currentVal.x, _ = (n == null ? void 0 : n.y) || t.DS.stores.PointerStore.currentVal.y, C = document.elementsFromPoint(y, _);
            return t._getZoneByElementsFromPoint(
              /** @type {DSElements} */
              C,
              {
                x: y,
                y: _
              }
            );
          }
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(n) {
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
        var t = this, g = u.DS;
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
            var y = t.DS, _ = y.stores, C = _.PointerStore, H = _.KeyStore, X = y.SelectableSet, ie = y.SelectedSet;
            C.start(h);
            var ke = (
              /** @type {any} */
              h.target
            );
            X.has(ke) && (H.isMultiSelectKeyPressed(h) || ie.clear(), ie.toggle(ke), t.reset());
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
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(n) {
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
      return m(c, [{
        key: "_canInteract",
        value: (
          /**
           * @param {DSEvent} event
           */
          function(t) {
            var g = (
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
              !g && !this.DS.SelectorArea.isClicked(t))
            );
          }
        )
        /**
         * @param {DSEvent} event
         */
      }]), c;
    }(), xo = /* @__PURE__ */ m(
      function c(u) {
        var t = this, g = u.DS;
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
        }), this.DS = g;
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
      v(t, c);
      var u = z(t);
      function t(g) {
        var n, h = g.DS;
        return i(this, t), n = u.call(this), a(k(n), "_rects", void 0), a(k(n), "_timeout", void 0), a(k(n), "init", function() {
          return Ne(n.Settings.selectables).forEach(function(y) {
            return n.add(y);
          });
        }), a(k(n), "clear", function() {
          return n.forEach(function(y) {
            return n.delete(y);
          });
        }), a(k(n), "_onClick", function(y) {
          return n.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), a(k(n), "_onPointer", function(y) {
          return n.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), a(k(n), "addAll", function(y) {
          return y.forEach(function(_) {
            return n.add(_);
          });
        }), a(k(n), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return n.delete(_);
          });
        }), a(k(n), "getRect", function(y) {
          return n._rects ? n.rects.get(y) : y.getBoundingClientRect();
        }), n.DS = h, n.Settings = h.stores.SettingsStore.s, n.DS.subscribe("Interaction:init", n.init), n.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          n.clear(), n.init();
        }), n.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var _ = y.settings;
          n.forEach(function(C) {
            C.classList.remove(_["selectableClass:pre"]), C.classList.add(_.selectableClass);
          });
        }), n;
      }
      return m(t, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(n) {
            if (V(f(t.prototype), "has", this).call(this, n))
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
            }), V(f(t.prototype), "add", this).call(this, n), this.DS.publish("Selectable:added", h), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!V(f(t.prototype), "has", this).call(this, n))
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
          }), V(f(t.prototype), "delete", this).call(this, n), this.DS.publish("Selectable:removed", h), !0;
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
    }(/* @__PURE__ */ T(Set)), Do = /* @__PURE__ */ function(c) {
      v(t, c);
      var u = z(t);
      function t(g) {
        var n, h = g.DS;
        return i(this, t), n = u.call(this), a(k(n), "clear", function() {
          return n.forEach(function(y) {
            return n.delete(y);
          });
        }), a(k(n), "addAll", function(y) {
          return y.forEach(function(_) {
            return n.add(_);
          });
        }), a(k(n), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return n.delete(_);
          });
        }), n.DS = h, n;
      }
      return m(t, [{
        key: "add",
        value: function(n) {
          if (V(f(t.prototype), "has", this).call(this, n))
            return this;
          var h = {
            items: this.elements,
            item: n
          };
          return this.DS.publish("Selected:added:pre", h), V(f(t.prototype), "add", this).call(this, n), n.classList.add(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", h), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!V(f(t.prototype), "has", this).call(this, n))
            return !0;
          var h = {
            items: this.elements,
            item: n
          };
          this.DS.publish("Selected:removed:pre", h);
          var y = V(f(t.prototype), "delete", this).call(this, n);
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
    }(/* @__PURE__ */ T(Set)), Co = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        i(this, c), a(this, "_prevSelectedSet", void 0), a(this, "start", function(n) {
          var h = n.event, y = n.isDragging;
          y || (t._storePrevious(h), t._handleInsideSelection(!0, h));
        }), a(this, "update", function(n) {
          var h = n.isDragging;
          h || t.DS.continue || t._handleInsideSelection();
        }), a(this, "_handleInsideSelection", function(n, h) {
          var y = t.DS, _ = y.SelectableSet, C = y.SelectorArea, H = y.Selector, X = t.DS.stores.KeyStore.isMultiSelectKeyPressed(h) && t.Settings.multiSelectToggling, ie = t.Settings.selectionThreshold, ke = _.rects, De = H.rect, Te = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), me = ge(ke), lt;
          try {
            for (me.s(); !(lt = me.n()).done; ) {
              var Tt = Z(lt.value, 2), ct = Tt[0], It = Tt[1];
              C.isInside(ct, It) && (qe(It, De, ie) ? Te.set(ct, It) : ne.set(ct, It));
            }
          } catch (Zt) {
            me.e(Zt);
          } finally {
            me.f();
          }
          if (!t.DS.continue) {
            var jr = t.filterSelected({
              select: Te,
              unselect: ne,
              selectorRect: De
            }), Oo = jr.select, Lo = jr.unselect;
            Oo.forEach(function(Zt, Ft) {
              return ho({
                element: Ft,
                force: n,
                multiSelectionToggle: X,
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
        }), this.DS = g, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return m(c, [{
        key: "_storePrevious",
        value: function(t) {
          var g = this.DS, n = g.stores.KeyStore, h = g.SelectedSet;
          n.isMultiSelectKeyPressed(t) ? this._prevSelectedSet = new Set(h) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), Eo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        i(this, c), a(this, "_rect", void 0), a(this, "attachSelector", function() {
          var n, h;
          t.HTMLNode && (n = t.DS.SelectorArea) !== null && n !== void 0 && n.HTMLNode && t.DS.SelectorArea.HTMLNode.removeChild(t.HTMLNode), t.HTMLNode = t.DS.stores.SettingsStore.s.selector || Wt(t.DS.stores.SettingsStore.s.customStyles), t.HTMLNode.classList.add(t.DS.stores.SettingsStore.s.selectorClass), t.HTMLNode && (h = t.DS.SelectorArea) !== null && h !== void 0 && h.HTMLNode && t.DS.SelectorArea.HTMLNode.appendChild(t.HTMLNode);
        }), a(this, "start", function(n) {
          var h = n.isDragging;
          if (!h) {
            var y = t.DS.stores.PointerStore, _ = y.initialValArea;
            Pr(t.HTMLNode, U(_, 1)), t.HTMLNode.style.display = "block", t._rect = null;
          }
        }), a(this, "stop", function() {
          t.HTMLNode.style.width = "0", t.HTMLNode.style.height = "0", t.HTMLNode.style.display = "none";
        }), a(this, "update", function(n) {
          var h = n.isDragging;
          if (!(h || t.DS.continue)) {
            var y = t.DS.stores, _ = y.ScrollStore, C = y.PointerStore, H = no({
              scrollAmount: _.scrollAmount,
              initialPointerPos: C.initialValArea,
              pointerPos: C.currentValArea
            });
            Pr(t.HTMLNode, H), t._rect = null;
          }
        }), this.DS = g, this.DS.subscribe("Settings:updated:selectorClass", function(n) {
          var h = n.settings;
          t.HTMLNode.classList.remove(h["selectorClass:pre"]), t.HTMLNode.classList.add(h.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return m(c, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Mo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
        i(this, c), a(this, "_scrollInterval", void 0), a(this, "_rect", void 0), a(this, "currentEdges", []), a(this, "start", function() {
          t.applyElements("append"), t.updatePos();
        }), a(this, "applyElements", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", h = document.body ? "body" : "documentElement", y = "".concat(n, "Child");
          t.HTMLNode[y](t.DS.Selector.HTMLNode), document[h][y](t.HTMLNode);
        }), a(this, "updatePos", function() {
          t._rect = null;
          var n = t.DS.Area.rect, h = t.DS.Area.computedBorder, y = t.HTMLNode.style, _ = "".concat(n.top + h.top, "px"), C = "".concat(n.left + h.left, "px"), H = "".concat(n.width, "px"), X = "".concat(n.height, "px");
          y.top !== _ && (y.top = _), y.left !== C && (y.left = C), y.width !== H && (y.width = H), y.height !== X && (y.height = X);
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
              elementRect: U(h.currentVal),
              containerRect: t.rect,
              tolerance: t.DS.stores.SettingsStore.s.overflowTolerance
            }), t.currentEdges.length && y.scroll(t.currentEdges, t.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), a(this, "stopAutoScroll", function() {
          t.currentEdges = [], clearInterval(t._scrollInterval);
        }), a(this, "isInside", function(n, h) {
          return t.DS.Area.HTMLNode.contains(n) && t.DS.stores.ScrollStore.canScroll ? !0 : qe(t.rect, h || n.getBoundingClientRect());
        }), this.DS = g, this.HTMLNode = Ct(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(n) {
          var h = n.settings;
          t.HTMLNode.classList.remove(h["selectorAreaClass:pre"]), t.HTMLNode.classList.add(h.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          t.updatePos(), t.stopAutoScroll();
        });
      }
      return m(c, [{
        key: "isClicked",
        value: (
          /**
           * checks if the click was triggered on the area.
           * @param {DSEvent} [event]
           * @returns {boolean}
           */
          function(t) {
            var g = this.DS.stores.PointerStore, n = t ? g.getPointerPosition(t) : g.initialVal;
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
    }(), To = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
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
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init);
      }
      return m(c, [{
        key: "isMultiSelectKeyPressed",
        value: (
          /** @param {KeyboardEvent|MouseEvent|PointerEvent|TouchEvent} [event] */
          function(t) {
            var g = this;
            if (this.DS.stores.SettingsStore.s.multiSelectMode)
              return !0;
            var n = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(h) {
              return h.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(h) {
              return n.includes(h.toLocaleLowerCase());
            }) || t && n.some(function(h) {
              return t[g._keyMapping[h]];
            }));
          }
        )
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), c;
    }(), Io = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
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
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(n) {
          var h = n.event;
          return t.start(h);
        }), this.DS.subscribe("Interaction:end", function(n) {
          var h = n.event;
          return t.reset(h);
        });
      }
      return m(c, [{
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
          this._initialVal = t, this._initialValArea = t && P(t, "-", P(ee(this.DS.Area.rect), "+", ee(this.DS.Area.computedBorder)));
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
          this._currentVal = t, this._currentValArea = t && P(t, "-", P(ee(this.DS.Area.rect), "+", ee(this.DS.Area.computedBorder)));
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
          this._lastVal = t, this._lastValArea = t && P(t, "-", P(ee(this.DS.Area.rect), "+", ee(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), Ao = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, g = u.DS;
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
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return t.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return t.reset();
        });
      }
      return m(c, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = Dt(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var t = P(this.currentVal, "-", this.initialVal), g = xe(this.DS.stores.SettingsStore.s.zoom), n = P(P(t, "*", g), "-", t);
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
    }(), $o = /* @__PURE__ */ m(
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
        var t = this, g = u.DS, n = u.settings;
        i(this, c), a(this, "_settings", {}), a(this, "s", {}), a(this, "update", function(h) {
          var y = h.settings, _ = h.init;
          return t.DS.publish("Settings:updated:pre", l({
            settings: y
          }, _ ? {
            init: _
          } : {}));
        }), a(this, "_update", function(h) {
          for (var y = h.settings, _ = h.init, C = po(y, _), H = function() {
            var De, Te = Z(ie[X], 2), ne = Te[0], me = Te[1];
            ne in t._settings || Object.defineProperty(t.s, ne, {
              get: function() {
                return t._settings[ne];
              },
              set: function(ct) {
                return t.update({
                  settings: a({}, ne, ct)
                });
              }
            }), t._settings["".concat(ne, ":pre")] = t._settings[ne], t._settings[ne] = me;
            var lt = {
              settings: (De = {}, a(De, ne, t._settings[ne]), a(De, "".concat(ne, ":pre"), t._settings["".concat(ne, ":pre")]), De)
            };
            t.DS.publish("Settings:updated", lt), t.DS.publish("Settings:updated:".concat(ne), lt);
          }, X = 0, ie = Object.entries(C); X < ie.length; X++)
            H();
        }), this.DS = g, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
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
        }), a(this, "setSettings", function(g) {
          return t.stores.SettingsStore.update({
            settings: g
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
        }), a(this, "isMultiSelect", function(g) {
          return t.stores.KeyStore.isMultiSelectKeyPressed(g);
        }), a(this, "isDragging", function() {
          return t.Interaction.isDragging;
        }), a(this, "getZoneByCoordinates", function(g) {
          var n;
          return (n = t.DropZones.getTarget(g)) === null || n === void 0 ? void 0 : n.toObject();
        }), a(this, "getItemsDroppedByZoneId", function(g) {
          return t.DropZones.getItemsDroppedById(g);
        }), a(this, "getItemsInsideByZoneId", function(g, n) {
          return t.DropZones.getItemsInsideById(g, n);
        }), this.PubSub = new xo({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = /** @type {{ SettingsStore:SettingsStore, PointerStore:PointerStore, ScrollStore:ScrollStore, KeyStore:KeyStore }} */
        {}, this.stores.SettingsStore = new $o({
          DS: this,
          settings: u
        }), this.stores.PointerStore = new Io({
          DS: this
        }), this.stores.ScrollStore = new Ao({
          DS: this
        }), this.stores.KeyStore = new To({
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
      return m(c, [{
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
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            n && this.publish("callback", {
              items: this.getSelection()
            }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(t), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), t && this.SelectableSet.clear(), g && this.SelectedSet.clear(), this.stopped = !0;
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
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(Ne(t)), n || this.addSelectables(t), g && this.PubSub.publish("callback", {
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
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Ne(t)), n && this.removeSelectables(t), g && this.PubSub.publish("callback", {
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
          var g = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Ne(t).forEach(function(y) {
            return g.SelectedSet.has(y) ? g.removeSelection(t, n, h) : g.addSelection(t, n, h);
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
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(t, g, n), this.getSelection();
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
        value: function(t, g, n) {
          var h = Ne(t);
          return this.SelectableSet.addAll(h), g && this.SelectedSet.addAll(h), n && this.PubSub.publish("callback", {
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
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(t, g), this.addSelectables(t, n);
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
        value: function(t, g, n) {
          return this.SelectableSet.deleteAll(Ne(t)), g && this.removeSelection(t), n && this.PubSub.publish("callback", {
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
    return (e, s) => (w(), E("div", null, [
      r.direction == "down" ? (w(), E("svg", _n, kn)) : K("", !0),
      r.direction == "up" ? (w(), E("svg", Dn, En)) : K("", !0)
    ]));
  }
}), Tn = ["onClick"], In = {
  name: "VFToast.vue"
}, An = /* @__PURE__ */ Object.assign(In, {
  setup(r) {
    const e = N("emitter"), { getStore: s } = N("storage"), o = O(s("full-screen", !1)), l = (a) => a == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", i = O([]), d = (a) => {
      i.value.splice(a, 1);
    }, m = (a) => {
      let v = i.value.findIndex((f) => f.id === a);
      v !== -1 && d(v);
    };
    return e.on("vf-toast-clear", () => {
      i.value = [];
    }), e.on("vf-toast-push", (a) => {
      let v = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      a.id = v, i.value.push(a), setTimeout(() => {
        m(v);
      }, 5e3);
    }), (a, v) => (w(), E("div", {
      class: he([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Ee(Po, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: F(() => [
          (w(!0), E(le, null, _e(i.value, (f, b) => (w(), E("div", {
            onClick: (S) => d(b),
            key: f,
            class: he([l(f.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, M(f.label), 11, Tn))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), wt = (r) => Object.entries(r).map((e) => e.map(encodeURIComponent).join("=")).join("&"), { apiUrl: $n } = ze(), tr = (r, e) => $n.value + "?" + wt({ q: "preview", adapter: r, path: e }), He = typeof window < "u", fs = He && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), ps = He && "IntersectionObserver" in window, gs = He && "classList" in document.createElement("p"), ms = He && window.devicePixelRatio > 1, On = {
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
}, nt = (r, e) => {
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
}, Ut = [Pe], Ts = [Pe, bs], bt = [Pe, fr, pr], Is = [ys], Kt = (r) => !!r[_t], As = (r) => r[_t], $s = (r) => delete r[_t], rt = (r, e) => {
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
  nt(r, e.class_applied), Fe(r, ws), s && (e.unobserve_completed && Ht(r, e), Ue(e.callback_applied, r, s));
}, Ls = (r, e, s) => {
  nt(r, e.class_loading), Fe(r, gr), s && (yr(s, 1), Ue(e.callback_loading, r, s));
}, Be = (r, e, s) => {
  s && r.setAttribute(e, s);
}, zr = (r, e) => {
  Be(r, pr, fe(r, e.data_sizes)), Be(r, fr, fe(r, e.data_srcset)), Be(r, Pe, fe(r, e.data_src));
}, Gn = (r, e) => {
  Sr(r, (s) => {
    rt(s, bt), zr(s, e);
  }), rt(r, bt), zr(r, e);
}, Jn = (r, e) => {
  rt(r, Ut), Be(r, Pe, fe(r, e.data_src));
}, Qn = (r, e) => {
  Ms(r, (s) => {
    rt(s, Ut), Be(s, Pe, fe(s, e.data_src));
  }), rt(r, Ts), Be(r, bs, fe(r, e.data_poster)), Be(r, Pe, fe(r, e.data_src)), r.load();
}, ei = (r, e) => {
  rt(r, Is), Be(r, ys, fe(r, e.data_src));
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
  js(e, s, o), nt(e, s.class_loaded), Fe(e, Ss), Ue(s.callback_loaded, e, o), l || Ns(s, o);
}, di = (r, e, s, o) => {
  const l = br(e);
  js(e, s, o), nt(e, s.class_error), Fe(e, mr), Ue(s.callback_error, e, o), s.restore_on_error && Xe(e, bt), l || Ns(s, o);
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
  }), Xe(r, Ts), r.load();
}, vi = (r) => {
  Xe(r, Ut);
}, bi = (r) => {
  Xe(r, Is);
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
  Si(r), wi(r, e), zt(r), $s(r);
}, xi = (r, e, s, o) => {
  s.cancel_on_exit && jn(r) && r.tagName === "IMG" && (rr(r), gi(r), Rs(r), Ie(r, s.class_loading), yr(o, -1), zt(r), Ue(s.callback_cancel, r, e, o));
}, ki = (r, e, s, o) => {
  const l = Bn(r);
  Fe(r, Pn), nt(r, s.class_entered), Ie(r, s.class_exited), Kn(r, s, o), Ue(s.callback_enter, r, e, o), !l && xr(r, s, o);
}, Di = (r, e, s, o) => {
  vr(r) || (nt(r, s.class_exited), xi(r, e, s, o), Ue(s.callback_exit, r, e, o));
}, Ci = ["IMG", "IFRAME", "VIDEO"], Vs = (r) => r.use_native && "loading" in HTMLImageElement.prototype, Ei = (r, e, s) => {
  r.forEach((o) => {
    Ci.indexOf(o.tagName) !== -1 && pi(o, e, s);
  }), Cs(s, 0);
}, Mi = (r) => r.isIntersecting || r.intersectionRatio > 0, Ti = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), Ii = (r, e, s) => {
  r.forEach(
    (o) => Mi(o) ? ki(o.target, o, e, s) : Di(o.target, o, e, s)
  );
}, Ai = (r, e) => {
  e.forEach((s) => {
    r.observe(s);
  });
}, $i = (r, e) => {
  Un(r), Ai(r, e);
}, Oi = (r, e) => {
  !ps || Vs(r) || (e._observer = new IntersectionObserver((s) => {
    Ii(s, r, e);
  }, Ti(r)));
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
    $i(this._observer, s);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Vi(this), jt(this._settings).forEach((r) => {
      $s(r);
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
    const e = r, s = N("emitter"), { setStore: o, getStore: l } = N("storage"), i = N("adapter"), d = ($) => $ == null ? void 0 : $.substring(0, 3), m = ($) => $.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), a = O(null), v = O(null), f = O(0), b = O(null), { t: S } = N("i18n"), A = Math.floor(Math.random() * 2 ** 32), I = O(l("full-screen", !1)), T = new kt();
    s.on("vf-fullscreen-toggle", () => {
      a.value.style.height = null, I.value = !I.value, o("full-screen", I.value);
    });
    const k = O("");
    s.on("vf-search-query", ({ newQuery: $ }) => {
      k.value = $, $ ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: e.data.adapter,
          path: e.data.dirname,
          filter: $
        },
        onSuccess: (B) => {
          B.files.length || s.emit("vf-toast-push", { label: S("No search result found.") });
        }
      }) : s.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: e.data.dirname } });
    });
    let R = null;
    const z = () => {
      R && clearTimeout(R);
    }, L = O(!0), V = ($) => {
      $.touches.length > 1 && (L.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), L.value = !L.value);
    }, Z = ($) => {
      R = setTimeout(() => {
        const B = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: $.target.getBoundingClientRect().x,
          clientY: $.target.getBoundingClientRect().y
        });
        $.target.dispatchEvent(B);
      }, 500);
    }, D = ($) => {
      $.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: $.path } })) : s.emit("ca-download", $);
    }, j = Lt({ active: !1, column: "", order: "" }), G = ($ = !0) => {
      let B = [...e.data.files], P = j.column, ee = j.order == "asc" ? 1 : -1;
      if (!$)
        return B;
      const U = (xe, Se) => typeof xe == "string" && typeof Se == "string" ? xe.toLowerCase().localeCompare(Se.toLowerCase()) : xe < Se ? -1 : xe > Se ? 1 : 0;
      return j.active && (B = B.slice().sort((xe, Se) => U(xe[P], Se[P]) * ee)), B;
    }, oe = ($) => {
      j.active && j.column == $ ? (j.active = j.order == "asc", j.column = $, j.order = "desc") : (j.active = !0, j.column = $, j.order = "asc");
    }, te = () => b.value.getSelection().map(($) => JSON.parse($.dataset.item)), ce = ($, B) => {
      if ($.altKey || $.ctrlKey || $.metaKey)
        return $.preventDefault(), !1;
      $.dataTransfer.setDragImage(v.value, 0, 15), $.dataTransfer.effectAllowed = "all", $.dataTransfer.dropEffect = "copy", $.dataTransfer.setData("items", JSON.stringify(te()));
    }, ye = ($, B) => {
      $.preventDefault();
      let P = JSON.parse($.dataTransfer.getData("items"));
      if (P.find((ee) => ee.storage != i.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", { type: "move", items: { from: P, to: B } });
    }, pe = ($, B) => {
      $.preventDefault(), !B || B.type !== "dir" || b.value.getSelection().find((P) => P == $.currentTarget) ? ($.dataTransfer.dropEffect = "none", $.dataTransfer.effectAllowed = "none") : $.dataTransfer.dropEffect = "copy";
    };
    return Me(() => {
      b.value = new wn({
        area: a.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on("vf-explorer-update", () => Bt(() => {
        b.value.clearSelection(), b.value.setSelectables(document.getElementsByClassName("vf-item-" + A));
      })), b.value.subscribe("predragstart", ({ event: $, isDragging: B }) => {
        if (B)
          f.value = b.value.getSelection().length, b.value.break();
        else {
          const P = $.target.offsetWidth - $.offsetX, ee = $.target.offsetHeight - $.offsetY;
          P < 15 && ee < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: $ }) => {
        $ && b.value.break();
      }), b.value.subscribe("callback", ({ items: $, event: B, isDragging: P }) => {
        s.emit("vf-nodes-selected", te()), f.value = b.value.getSelection().length;
      });
    }), No(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), T.update();
    }), Me(() => {
      Vt(() => e.view, () => s.emit("vf-explorer-update"));
    }), ($, B) => (w(), E("div", Bi, [
      r.view == "list" || k.value.length ? (w(), E("div", zi, [
        p("div", {
          onClick: B[0] || (B[0] = (P) => oe("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          se(M(x(S)("Name")) + " ", 1),
          be(Ee(At, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [gt, j.active && j.column == "basename"]
          ])
        ]),
        k.value.length ? K("", !0) : (w(), E("div", {
          key: 0,
          onClick: B[1] || (B[1] = (P) => oe("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          se(M(x(S)("Size")) + " ", 1),
          be(Ee(At, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [gt, j.active && j.column == "file_size"]
          ])
        ])),
        k.value.length ? K("", !0) : (w(), E("div", {
          key: 1,
          onClick: B[2] || (B[2] = (P) => oe("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          se(M(x(S)("Date")) + " ", 1),
          be(Ee(At, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [gt, j.active && j.column == "last_modified"]
          ])
        ])),
        k.value.length ? (w(), E("div", {
          key: 2,
          onClick: B[3] || (B[3] = (P) => oe("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          se(M(x(S)("Filepath")) + " ", 1),
          be(Ee(At, {
            direction: j.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [gt, j.active && j.column == "path"]
          ])
        ])) : K("", !0)
      ])) : K("", !0),
      p("div", Hi, [
        p("div", {
          ref_key: "dragImage",
          ref: v,
          class: "absolute -z-50 -top-96"
        }, [
          Ui,
          p("div", Ki, M(f.value), 1)
        ], 512)
      ]),
      p("div", {
        onTouchstart: V,
        onContextmenu: B[10] || (B[10] = We((P) => x(s).emit("vf-contextmenu-show", { event: P, area: a.value, items: te() }), ["self", "prevent"])),
        class: he([I.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: a
      }, [
        k.value.length ? (w(!0), E(le, { key: 0 }, _e(G(), (P, ee) => (w(), E("div", {
          onDblclick: (U) => D(P),
          onTouchstart: B[4] || (B[4] = (U) => Z(U)),
          onTouchend: B[5] || (B[5] = (U) => z()),
          onContextmenu: We((U) => x(s).emit("vf-contextmenu-show", { event: U, area: a.value, items: te(), target: P }), ["prevent"]),
          class: he(["vf-item-" + x(A), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": P.type,
          "data-item": JSON.stringify(P),
          "data-index": ee
        }, [
          p("div", Wi, [
            p("div", Xi, [
              P.type == "dir" ? (w(), E("svg", Zi, qi)) : (w(), E("svg", Gi, Qi)),
              p("span", ea, M(P.basename), 1)
            ]),
            p("div", ta, M(P.path), 1)
          ])
        ], 42, Yi))), 256)) : K("", !0),
        r.view == "list" && !k.value.length ? (w(!0), E(le, { key: 1 }, _e(G(), (P, ee) => (w(), E("div", {
          draggable: "true",
          onDblclick: (U) => D(P),
          onTouchstart: B[6] || (B[6] = (U) => Z(U)),
          onTouchend: B[7] || (B[7] = (U) => z()),
          onContextmenu: We((U) => x(s).emit("vf-contextmenu-show", { event: U, area: a.value, items: te(), target: P }), ["prevent"]),
          onDragstart: (U) => ce(U),
          onDragover: (U) => pe(U, P),
          onDrop: (U) => ye(U, P),
          class: he(["vf-item-" + x(A), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": P.type,
          "data-item": JSON.stringify(P),
          "data-index": ee
        }, [
          p("div", sa, [
            p("div", oa, [
              P.type == "dir" ? (w(), E("svg", na, aa)) : (w(), E("svg", la, ua)),
              p("span", da, M(P.basename), 1)
            ]),
            p("div", ha, M(P.file_size ? x(ds)(P.file_size) : ""), 1),
            p("div", fa, M(x(hs)(P.last_modified)), 1)
          ])
        ], 42, ra))), 256)) : K("", !0),
        r.view == "grid" && !k.value.length ? (w(!0), E(le, { key: 2 }, _e(G(!1), (P, ee) => (w(), E("div", {
          draggable: "true",
          onDblclick: (U) => D(P),
          onTouchstart: B[8] || (B[8] = (U) => Z(U)),
          onTouchend: B[9] || (B[9] = (U) => z()),
          onContextmenu: We((U) => x(s).emit("vf-contextmenu-show", { event: U, area: a.value, items: te(), target: P }), ["prevent"]),
          onDragstart: (U) => ce(U),
          onDragover: (U) => pe(U, P),
          onDrop: (U) => ye(U, P),
          class: he(["vf-item-" + x(A), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
          "data-type": P.type,
          "data-item": JSON.stringify(P),
          "data-index": ee
        }, [
          p("div", null, [
            p("div", ga, [
              P.type == "dir" ? (w(), E("svg", ma, ba)) : (P.mime_type ?? "").startsWith("image") ? (w(), E("img", {
                key: 1,
                class: "lazy h-10 md:h-12 m-auto",
                "data-src": x(tr)(x(i).value, P.path),
                alt: P.basename
              }, null, 8, ya)) : (w(), E("svg", Sa, _a)),
              !(P.mime_type ?? "").startsWith("image") && P.type != "dir" ? (w(), E("div", xa, M(d(P.extension)), 1)) : K("", !0)
            ]),
            p("span", ka, M(m(P.basename)), 1)
          ])
        ], 42, pa))), 256)) : K("", !0)
      ], 34),
      Ee(An)
    ]));
  }
}), Ea = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, Ma = { class: "flex leading-5 items-center" }, Ta = ["aria-label"], Ia = /* @__PURE__ */ p("svg", {
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
  Ia
], $a = ["value"], Oa = { class: "ml-3" }, La = { key: 0 }, Pa = { class: "ml-1" }, Na = { class: "flex leading-5 items-center" }, ja = {
  value: "",
  disabled: ""
}, Ra = /* @__PURE__ */ jo('<option value="en">English</option><option value="fr">French (Français)</option><option value="de">German (Deutsch)</option><option value="tr">Hebrew (עִברִית)</option><option value="hi">Hindi (हिंदी)</option><option value="fa">Persian (فارسی)</option><option value="ru">Russian (Pусский)</option><option value="sv">Swedish (Svenska)</option><option value="tr">Turkish (Türkçe)</option>', 9), Va = {
  name: "VFStatusbar"
}, Ba = /* @__PURE__ */ Object.assign(Va, {
  props: {
    data: Object
  },
  setup(r) {
    const e = N("emitter"), { getStore: s, setStore: o } = N("storage"), l = O(0), i = N("adapter"), d = N("hideAdapterSelection"), m = N("hideLanguageSelection"), { t: a, changeLocale: v } = N("i18n"), f = O(s("locale", "")), b = () => {
      e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: i.value } }), o("adapter", i.value);
    };
    e.on("vf-nodes-selected", (A) => {
      l.value = A.length;
    });
    const S = O("");
    return e.on("vf-search-query", ({ newQuery: A }) => {
      S.value = A;
    }), (A, I) => (w(), E("div", Ea, [
      p("div", Ma, [
        p("div", {
          class: "mx-2",
          "aria-label": x(a)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, Aa, 8, Ta),
        x(d) ? K("", !0) : be((w(), E("select", {
          key: 0,
          "onUpdate:modelValue": I[0] || (I[0] = (T) => ls(i) ? i.value = T : null),
          onChange: b,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (w(!0), E(le, null, _e(r.data.storages, (T) => (w(), E("option", { value: T }, M(T), 9, $a))), 256))
        ], 544)), [
          [Rr, x(i)]
        ]),
        p("div", Oa, [
          S.value.length ? (w(), E("span", La, M(r.data.files.length) + " items found. ", 1)) : K("", !0),
          p("span", Pa, M(l.value > 0 ? l.value + " " + x(a)("item(s) selected.") : ""), 1)
        ])
      ]),
      p("div", Na, [
        x(m) ? K("", !0) : be((w(), E("select", {
          key: 0,
          "onUpdate:modelValue": I[1] || (I[1] = (T) => f.value = T),
          onChange: I[2] || (I[2] = (T) => x(v)(T.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          p("option", ja, M(x(a)("Language")), 1),
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
      (m) => {
        o.value = m, d();
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
    const e = N("emitter");
    N("storage");
    const s = N("adapter"), o = O(null), l = O([]), i = O(!1), d = O(null), m = r, { t: a } = N("i18n"), v = N("loadingState");
    e.on("vf-explorer-update", () => {
      let z = [], L = [];
      o.value = m.data.dirname ?? s.value + "://", o.value.length == 0 && (l.value = []), o.value.replace(s.value + "://", "").split("/").forEach(function(V) {
        z.push(V), z.join("/") != "" && L.push({
          basename: V,
          name: V,
          path: s.value + "://" + z.join("/"),
          type: "dir"
        });
      }), L.length > 4 && (L = L.slice(-5), L[0].name = ".."), l.value = L;
    });
    const f = () => {
      i.value = !1, S.value = "";
    };
    e.on("vf-search-exit", () => {
      f();
    });
    const b = () => {
      i.value = !0, Bt(() => d.value.focus());
    }, S = Ha("", 400), A = () => v.value;
    Vt(S, (z) => {
      e.emit("vf-toast-clear"), e.emit("vf-search-query", { newQuery: z });
    });
    const I = () => l.value.length && !i.value, T = (z) => {
      z.preventDefault();
      let L = JSON.parse(z.dataTransfer.getData("items"));
      if (L.find((V) => V.storage != s.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      e.emit("vf-modal-show", {
        type: "move",
        items: { from: L, to: l.value[l.value.length - 2] ?? { path: s.value + "://" } }
      });
    }, k = (z) => {
      z.preventDefault(), I() ? z.dataTransfer.dropEffect = "copy" : (z.dataTransfer.dropEffect = "none", z.dataTransfer.effectAllowed = "none");
    }, R = () => {
      S.value == "" && f();
    };
    return (z, L) => (w(), E("div", Ua, [
      p("span", {
        "aria-label": x(a)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), E("svg", {
          onDragover: L[0] || (L[0] = (V) => k(V)),
          onDrop: L[1] || (L[1] = (V) => T(V)),
          onClick: L[2] || (L[2] = (V) => {
            var Z;
            return !I() || x(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: ((Z = l.value[l.value.length - 2]) == null ? void 0 : Z.path) ?? x(s) + "://" } });
          }),
          class: he(["h-6 w-6 p-0.5 rounded", I() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Wa, 34))
      ], 8, Ka),
      A() ? (w(), E("span", {
        key: 1,
        "aria-label": x(a)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), E("svg", {
          onClick: L[4] || (L[4] = (V) => x(e).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Ja))
      ], 8, qa)) : (w(), E("span", {
        key: 0,
        "aria-label": x(a)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), E("svg", {
          onClick: L[3] || (L[3] = (V) => {
            x(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: r.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Fa))
      ], 8, Xa)),
      i.value ? (w(), E("div", cl, [
        ul,
        dl,
        be(p("input", {
          ref_key: "searchInput",
          ref: d,
          onKeydown: st(f, ["esc"]),
          onBlur: R,
          "onUpdate:modelValue": L[6] || (L[6] = (V) => ls(S) ? S.value = V : null),
          placeholder: x(a)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, hl), [
          [ot, x(S)]
        ]),
        (w(), E("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: f,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, pl))
      ])) : (w(), E("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: We(b, ["self"])
      }, [
        (w(), E("svg", {
          onClick: L[5] || (L[5] = (V) => x(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, tl)),
        p("div", rl, [
          (w(!0), E(le, null, _e(l.value, (V, Z) => (w(), E("div", { key: Z }, [
            sl,
            p("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: V.basename,
              onClick: (D) => x(e).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: V.path } })
            }, M(V.name), 9, ol)
          ]))), 128))
        ]),
        A() ? (w(), E("svg", nl, ll)) : K("", !0)
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
    const e = N("emitter"), s = O(null), o = N("userRole"), l = r, i = Lt({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), d = O([]);
    e.on("vf-context-selected", (I) => {
      d.value = I;
    });
    const { t: m } = N("i18n"), a = {
      newfolder: {
        title: () => m("New Folder"),
        action: () => {
          e.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => m("Delete"),
        action: () => {
          e.emit("vf-modal-show", { type: "delete", items: d });
        }
      },
      refresh: {
        title: () => m("Refresh"),
        action: () => {
          e.emit("vf-fetch", { params: { q: "index", adapter: l.current.adapter, path: l.current.dirname } });
        }
      },
      preview: {
        title: () => m("Audit"),
        action: () => {
          e.emit("ca-preview", { type: "preview", adapter: l.current.adapter, item: d.value[0] });
        }
      },
      open: {
        title: () => m("Open"),
        action: () => {
          e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: l.current.adapter, path: d.value[0].path } });
        }
      },
      openDir: {
        title: () => m("Open containing folder"),
        action: () => {
          e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: l.current.adapter, path: d.value[0].dir } });
        }
      },
      download: {
        title: () => m("Download"),
        action: () => {
          e.emit("vf-download", d.value);
        }
      },
      archive: {
        title: () => m("Archive"),
        action: () => {
          e.emit("vf-modal-show", { type: "archive", items: d });
        }
      },
      unarchive: {
        title: () => m("Unarchive"),
        action: () => {
          e.emit("vf-modal-show", { type: "unarchive", items: d });
        }
      },
      rename: {
        title: () => m("Edit"),
        action: () => {
          e.emit("ca-edit", { type: "edit", items: d.value, current: l.current });
        }
      }
    }, v = (I) => {
      e.emit("vf-contextmenu-hide"), I.action();
    }, f = O("");
    e.on("vf-search-query", ({ newQuery: I }) => {
      f.value = I;
    }), e.on("vf-contextmenu-show", ({ event: I, area: T, items: k, target: R = null }) => {
      if (i.items = [], f.value)
        if (R)
          i.items.push(a.openDir), i.items.push(a.download), e.emit("vf-context-selected", [R]);
        else
          return;
      else
        !R && !f.value ? (i.items.push(a.refresh), (S.value || A.value) && i.items.push(a.newfolder), e.emit("vf-context-selected", [])) : k.length > 1 && k.some((z) => z.path === R.path) ? (i.items.push(a.refresh), (S.value || A.value) && i.items.push(a.rename), k.some((z) => z.type === "dir") || i.items.push(a.download), (S.value || A.value) && i.items.push(a.delete), e.emit("vf-context-selected", k)) : (R.type == "dir" ? i.items.push(a.open) : ((S.value || A.value) && i.items.push(a.preview), i.items.push(a.download)), (S.value || A.value) && i.items.push(a.rename), (S.value || A.value) && i.items.push(a.delete), e.emit("vf-context-selected", [R]));
      b(I, T);
    }), e.on("vf-contextmenu-hide", () => {
      i.active = !1;
    });
    const b = (I, T) => {
      i.active = !0, Bt(() => {
        let k = T.getBoundingClientRect(), R = I.pageX, z = I.pageY, L = s.value.offsetHeight, V = s.value.offsetWidth;
        R = k.right - I.pageX + window.scrollX < V ? R - V : R, z = k.bottom - I.pageY + window.scrollY < L ? z - L : z, i.positions = {
          left: R + "px",
          top: z + "px"
        };
      });
    }, S = vt(() => o === "admin"), A = vt(() => o === "ae");
    return (I, T) => i.active ? (w(), E("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: s,
      style: cs(i.positions)
    }, [
      (w(!0), E(le, null, _e(i.items, (k) => (w(), E("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: k.title,
        onClick: (R) => v(k)
      }, [
        bl,
        p("span", null, M(k.title()), 1)
      ], 8, vl))), 128))
    ], 4)) : K("", !0);
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
  const { getStore: o, setStore: l } = er(r), i = O({}), d = (v, f = "en") => {
    _l(v).then((b) => {
      i.value = b, l("locale", v), l("translations", b), s.emit("vf-toast-push", { label: "The language is set to " + v });
    }).catch((b) => {
      f ? (s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), d(f, null)) : s.emit("vf-toast-push", { label: "Locale cannot be loaded!", type: "error" });
    });
  };
  o("locale") ? i.value = o("translations") : d(e);
  const m = (v, ...f) => f.length ? m(v = v.replace("%s", f.shift()), ...f) : v;
  function a(v, ...f) {
    return i.value.hasOwnProperty(v) ? m(i.value[v], ...f) : m(v, ...f);
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
    const m = xl(s.id, s.locale, o);
    ve("i18n", m);
    const { apiUrl: a, setApiUrl: v } = ze();
    v(s.url);
    const f = Lt({ adapter: d.value, storages: [], dirname: ".", files: [] }), b = O(i("viewport", "grid")), S = s.usePropDarkMode ? vt(() => s.dark) : O(i("darkMode", s.dark));
    o.on("vf-darkMode-toggle", () => {
      S.value = !S.value, l("darkMode", S.value);
    });
    const A = O(!1);
    ve("loadingState", A);
    const I = O(i("full-screen", !1));
    o.on("vf-fullscreen-toggle", () => {
      I.value = !I.value, l("full-screen", I.value);
    }), o.on("vf-view-toggle", (L) => {
      b.value = L;
    });
    const T = Lt({
      active: !1,
      type: "delete",
      data: {}
    });
    o.on("vf-modal-close", () => {
      T.active = !1;
    }), o.on("vf-modal-show", (L) => {
      T.active = !0, T.type = L.type, T.data = L;
    });
    const k = (L) => {
      Object.assign(f, L), o.emit("vf-nodes-selected", {}), o.emit("vf-explorer-update");
    };
    let R;
    return o.on("vf-fetch-abort", () => {
      R.abort(), A.value = !1;
    }), o.on("vf-fetch", ({ params: L, onSuccess: V = null, onError: Z = null }) => {
      ["index", "search"].includes(L.q) && (R && R.abort(), A.value = !0), R = new AbortController();
      const D = R.signal;
      Nt(a.value, { params: L, signal: D }).then((j) => {
        d.value = j.adapter, ["index", "search"].includes(L.q) && (A.value = !1), o.emit("vf-modal-close"), k(j), V(j);
      }).catch((j) => {
        Z && Z(j);
      }).finally(() => {
      });
    }), o.on("vf-download", (L) => {
      s.downloadOverrideEvent ? o.emit(s.downloadOverrideEvent, L) : L.url && (document.getElementById("download_frame").src = L.url), o.emit("vf-modal-close");
    }), Me(() => {
      o.emit("vf-fetch", { params: { q: "index", adapter: d.value } });
    }), e({
      getEmitter: () => o
    }), (L, V) => (w(), E("div", kl, [
      p("div", {
        class: he(x(S) ? "dark" : "")
      }, [
        p("div", {
          class: he([I.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: cs(I.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: V[0] || (V[0] = (Z) => x(o).emit("vf-contextmenu-hide")),
          onTouchstart: V[1] || (V[1] = (Z) => x(o).emit("vf-contextmenu-hide"))
        }, [
          Ee(vn, { data: f }, null, 8, ["data"]),
          Ee(ml, { data: f }, null, 8, ["data"]),
          Ee(Ca, {
            view: b.value,
            data: f
          }, null, 8, ["view", "data"]),
          Ee(Ba, { data: f }, null, 8, ["data"])
        ], 38),
        T.active ? (w(), q(Vo("v-f-modal-" + T.type), {
          key: 0,
          selection: T.data,
          current: f
        }, null, 8, ["selection", "current"])) : K("", !0),
        Ee(Sl, { current: f }, null, 8, ["current"]),
        Dl
      ], 2)
    ]));
  }
}), Ml = /* @__PURE__ */ p("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), Tl = { class: "fixed z-10 inset-0 overflow-hidden" }, Il = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, Al = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, $l = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Oe = {
  __name: "ModalLayout",
  setup(r) {
    const e = N("emitter");
    return Me(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, o) => (w(), E("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: o[1] || (o[1] = st((l) => x(e).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Ml,
      p("div", Tl, [
        p("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = We((l) => x(e).emit("vf-modal-close"), ["self"]))
        }, [
          p("div", Il, [
            p("div", Al, [
              Qt(s.$slots, "default")
            ]),
            p("div", $l, [
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
}, Le = /* @__PURE__ */ Object.assign(Nl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: e }) {
    var a;
    const { t: s } = N("i18n"), o = O(!1), l = O(null), i = O((a = l.value) == null ? void 0 : a.strMessage), d = e;
    Vt(i, () => o.value = !1);
    const m = () => {
      d("hidden"), o.value = !0;
    };
    return (v, f) => (w(), E("div", null, [
      o.value ? K("", !0) : (w(), E("div", {
        key: 0,
        ref_key: "strMessage",
        ref: l,
        class: he(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Qt(v.$slots, "default"),
        p("div", {
          class: "ml-auto cursor-pointer",
          onClick: m,
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
    const e = N("emitter");
    N("storage");
    const s = N("adapter"), { t: o } = N("i18n"), l = r, i = O(l.selection.items), d = O(""), m = () => {
      i.value.length && e.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: s.value,
          path: l.current.dirname,
          items: JSON.stringify(i.value.map(({ path: a, type: v }) => ({ path: a, type: v })))
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: o("Files deleted.") });
        },
        onError: (a) => {
          d.value = o(a.message);
        }
      });
    };
    return (a, v) => (w(), q(Oe, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Yes, Delete!")), 1),
        p("button", {
          type: "button",
          onClick: v[1] || (v[1] = (f) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Cancel")), 1),
        p("div", Gl, M(x(o)("This action cannot be undone.")), 1)
      ]),
      default: F(() => [
        p("div", jl, [
          Rl,
          p("div", Vl, [
            p("h3", Bl, M(x(o)("Delete files")), 1),
            p("div", zl, [
              p("p", Hl, M(x(o)("Are you sure you want to delete these files?")), 1),
              (w(!0), E(le, null, _e(i.value, (f) => (w(), E("p", Ul, [
                f.type == "dir" ? (w(), E("svg", Kl, Wl)) : (w(), E("svg", Xl, Fl)),
                p("span", ql, M(f.basename), 1)
              ]))), 256)),
              d.value.length ? (w(), q(Le, {
                key: 0,
                onHidden: v[0] || (v[0] = (f) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(M(d.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ec = { class: "sm:flex sm:items-start" }, tc = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), rc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, sc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, oc = { class: "mt-2" }, nc = { class: "text-sm text-gray-500" }, ic = {
  name: "VFModalMessage"
}, ac = /* @__PURE__ */ Object.assign(ic, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = N("emitter"), { t: s } = N("i18n");
    return (o, l) => (w(), q(Oe, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: l[0] || (l[0] = (i) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(s)("Close")), 1)
      ]),
      default: F(() => {
        var i, d;
        return [
          p("div", ec, [
            tc,
            p("div", rc, [
              p("h3", sc, M(((i = r.selection) == null ? void 0 : i.title) ?? "Title"), 1),
              p("div", oc, [
                p("p", nc, M(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), lc = { class: "sm:flex sm:items-start" }, cc = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), uc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, dc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, hc = { class: "mt-2" }, fc = { class: "text-sm text-gray-500" }, pc = ["onKeyup", "placeholder"], gc = {
  name: "VFModalNewFolder"
}, mc = /* @__PURE__ */ Object.assign(gc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = N("emitter");
    N("storage");
    const s = N("adapter"), { t: o } = N("i18n"), l = r, i = O(""), d = O(""), m = () => {
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
    return (a, v) => (w(), q(Oe, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Create")), 1),
        p("button", {
          type: "button",
          onClick: v[2] || (v[2] = (f) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", lc, [
          cc,
          p("div", uc, [
            p("h3", dc, M(x(o)("New Folder")), 1),
            p("div", hc, [
              p("p", fc, M(x(o)("Create a new folder")), 1),
              be(p("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (f) => i.value = f),
                onKeyup: st(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(o)("Folder Name"),
                type: "text"
              }, null, 40, pc), [
                [ot, i.value]
              ]),
              d.value.length ? (w(), q(Le, {
                key: 0,
                onHidden: v[1] || (v[1] = (f) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(M(d.value), 1)
                ]),
                _: 1
              })) : K("", !0)
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
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), yc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Sc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, wc = { class: "mt-2" }, _c = { class: "text-sm text-gray-500" }, xc = ["onKeyup", "placeholder"], kc = {
  name: "VFModalNewFile"
}, Dc = /* @__PURE__ */ Object.assign(kc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = N("emitter");
    N("storage");
    const s = N("adapter"), { t: o } = N("i18n"), l = r, i = O(""), d = O(""), m = () => {
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
    return (a, v) => (w(), q(Oe, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Create")), 1),
        p("button", {
          type: "button",
          onClick: v[2] || (v[2] = (f) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", vc, [
          bc,
          p("div", yc, [
            p("h3", Sc, M(x(o)("New File")), 1),
            p("div", wc, [
              p("p", _c, M(x(o)("Create a new file")), 1),
              be(p("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (f) => i.value = f),
                onKeyup: st(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(o)("File Name"),
                type: "text"
              }, null, 40, xc), [
                [ot, i.value]
              ]),
              d.value.length ? (w(), q(Le, {
                key: 0,
                onHidden: v[1] || (v[1] = (f) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(M(d.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Cc = { class: "flex" }, Ec = ["aria-label"], Mc = { class: "ml-auto mb-2" }, Tc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Ic = { key: 1 }, Ac = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = e, o = O(""), l = O(""), i = O(null), d = O(!1), { apiUrl: m } = ze(), a = r, v = O(""), f = O(!1), { t: b } = N("i18n");
    Me(() => {
      Nt(m.value, {
        params: { q: "preview", adapter: a.selection.adapter, path: a.selection.item.path },
        json: !1
      }).then((T) => {
        o.value = T, s("load");
      });
    });
    const S = () => {
      d.value = !d.value, l.value = o.value, d.value == !0 && Bt(() => {
        i.value.focus();
      });
    }, A = N("postData"), I = () => {
      v.value = "", f.value = !1, Nt(m.value, {
        method: "POST",
        params: Object.assign(A, {
          q: "save",
          adapter: a.selection.adapter,
          path: a.selection.item.path,
          content: l.value
        }),
        json: !1
      }).then((T) => {
        v.value = b("Updated."), o.value = T, s("load"), d.value = !d.value;
      }).catch((T) => {
        v.value = b(T.message), f.value = !0;
      });
    };
    return (T, k) => (w(), E(le, null, [
      p("div", Cc, [
        p("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, M(r.selection.item.basename), 9, Ec),
        p("div", Mc, [
          d.value ? (w(), E("button", {
            key: 0,
            onClick: I,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, M(x(b)("Save")), 1)) : K("", !0),
          p("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: k[0] || (k[0] = (R) => S())
          }, M(d.value ? x(b)("Cancel") : x(b)("Edit")), 1)
        ])
      ]),
      p("div", null, [
        d.value ? (w(), E("div", Ic, [
          be(p("textarea", {
            ref_key: "editInput",
            ref: i,
            "onUpdate:modelValue": k[1] || (k[1] = (R) => l.value = R),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ot, l.value]
          ])
        ])) : (w(), E("pre", Tc, M(o.value), 1)),
        v.value.length ? (w(), q(Le, {
          key: 2,
          onHidden: k[2] || (k[2] = (R) => v.value = ""),
          error: f.value
        }, {
          default: F(() => [
            se(M(v.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : K("", !0)
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
      Lc(r, o, s[o]);
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
function $c(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Wr(r, e) {
  for (var s = 0; s < e.length; s++) {
    var o = e[s];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, Us(o.key), o);
  }
}
function Oc(r, e, s) {
  return e && Wr(r.prototype, e), s && Wr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Lc(r, e, s) {
  return e = Us(e), e in r ? Object.defineProperty(r, e, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = s, r;
}
function Hs(r) {
  return Pc(r) || Nc(r) || jc(r) || Rc();
}
function Pc(r) {
  if (Array.isArray(r))
    return or(r);
}
function Nc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function jc(r, e) {
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
function Rc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vc(r, e) {
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
  var e = Vc(r, "string");
  return typeof e == "symbol" ? e : String(e);
}
var Yt = typeof window < "u" && typeof window.document < "u", $e = Yt ? window : {}, kr = Yt && $e.document.documentElement ? "ontouchstart" in $e.document.documentElement : !1, Dr = Yt ? "PointerEvent" in $e : !1, J = "cropper", Cr = "all", Ks = "crop", Ys = "move", Ws = "zoom", Ke = "e", Ye = "w", Ge = "s", je = "n", dt = "ne", ht = "nw", ft = "se", pt = "sw", nr = "".concat(J, "-crop"), Xr = "".concat(J, "-disabled"), de = "".concat(J, "-hidden"), Zr = "".concat(J, "-hide"), Bc = "".concat(J, "-invisible"), Rt = "".concat(J, "-modal"), ir = "".concat(J, "-move"), yt = "".concat(J, "Action"), $t = "".concat(J, "Preview"), Er = "crop", Xs = "move", Zs = "none", ar = "crop", lr = "cropend", cr = "cropmove", ur = "cropstart", Fr = "dblclick", zc = kr ? "touchstart" : "mousedown", Hc = kr ? "touchmove" : "mousemove", Uc = kr ? "touchend touchcancel" : "mouseup", qr = Dr ? "pointerdown" : zc, Gr = Dr ? "pointermove" : Hc, Jr = Dr ? "pointerup pointercancel" : Uc, Qr = "ready", es = "resize", ts = "wheel", dr = "zoom", rs = "image/jpeg", Kc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Yc = /^data:/, Wc = /^data:image\/jpeg;base64,/, Xc = /^img|canvas$/i, Fs = 200, qs = 100, ss = {
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
}, Zc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Fc = Number.isNaN || $e.isNaN;
function Y(r) {
  return typeof r == "number" && !Fc(r);
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
var qc = Object.prototype.hasOwnProperty;
function Je(r) {
  if (!Ze(r))
    return !1;
  try {
    var e = r.constructor, s = e.prototype;
    return e && s && qc.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function ue(r) {
  return typeof r == "function";
}
var Gc = Array.prototype.slice;
function Gs(r) {
  return Array.from ? Array.from(r) : Gc.call(r);
}
function re(r, e) {
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
}, Jc = /\.\d*(?:0|9){12}\d*$/;
function et(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Jc.test(r) ? Math.round(r * e) / e : r;
}
var Qc = /^width|height|left|top|marginLeft|marginTop$/;
function Re(r, e) {
  var s = r.style;
  re(e, function(o, l) {
    Qc.test(l) && Y(o) && (o = "".concat(o, "px")), s[l] = o;
  });
}
function eu(r, e) {
  return r.classList ? r.classList.contains(e) : r.className.indexOf(e) > -1;
}
function ae(r, e) {
  if (e) {
    if (Y(r.length)) {
      re(r, function(o) {
        ae(o, e);
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
function Ae(r, e) {
  if (e) {
    if (Y(r.length)) {
      re(r, function(s) {
        Ae(s, e);
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
      re(r, function(o) {
        Qe(o, e, s);
      });
      return;
    }
    s ? ae(r, e) : Ae(r, e);
  }
}
var tu = /([a-z\d])([A-Z])/g;
function Mr(r) {
  return r.replace(tu, "$1-$2").toLowerCase();
}
function hr(r, e) {
  return Ze(r[e]) ? r[e] : r.dataset ? r.dataset[e] : r.getAttribute("data-".concat(Mr(e)));
}
function St(r, e, s) {
  Ze(s) ? r[e] = s : r.dataset ? r.dataset[e] = s : r.setAttribute("data-".concat(Mr(e)), s);
}
function ru(r, e) {
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
    $e.addEventListener("test", s, o), $e.removeEventListener("test", s, o);
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
function we(r, e, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, l = s;
  e.trim().split(Js).forEach(function(i) {
    if (o.once && !Qs) {
      var d = r.listeners, m = d === void 0 ? {} : d;
      l = function() {
        delete m[i][s], r.removeEventListener(i, l, o);
        for (var v = arguments.length, f = new Array(v), b = 0; b < v; b++)
          f[b] = arguments[b];
        s.apply(r, f);
      }, m[i] || (m[i] = {}), m[i][s] && r.removeEventListener(i, m[i][s], o), m[i][s] = l, r.listeners = m;
    }
    r.addEventListener(i, l, o);
  });
}
function tt(r, e, s) {
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
var Gt = $e.location, su = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function ns(r) {
  var e = r.match(su);
  return e !== null && (e[1] !== Gt.protocol || e[2] !== Gt.hostname || e[3] !== Gt.port);
}
function is(r) {
  var e = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + e;
}
function mt(r) {
  var e = r.rotate, s = r.scaleX, o = r.scaleY, l = r.translateX, i = r.translateY, d = [];
  Y(l) && l !== 0 && d.push("translateX(".concat(l, "px)")), Y(i) && i !== 0 && d.push("translateY(".concat(i, "px)")), Y(e) && e !== 0 && d.push("rotate(".concat(e, "deg)")), Y(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), Y(o) && o !== 1 && d.push("scaleY(".concat(o, ")"));
  var m = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: m,
    msTransform: m,
    transform: m
  };
}
function ou(r) {
  var e = zs({}, r), s = 0;
  return re(r, function(o, l) {
    delete e[l], re(e, function(i) {
      var d = Math.abs(o.startX - i.startX), m = Math.abs(o.startY - i.startY), a = Math.abs(o.endX - i.endX), v = Math.abs(o.endY - i.endY), f = Math.sqrt(d * d + m * m), b = Math.sqrt(a * a + v * v), S = (b - f) / f;
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
function nu(r) {
  var e = 0, s = 0, o = 0;
  return re(r, function(l) {
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
    var m = s * e;
    l === "contain" && m > o || l === "cover" && m < o ? s = o / e : o = s * e;
  } else
    i ? s = o / e : d && (o = s * e);
  return {
    width: o,
    height: s
  };
}
function iu(r) {
  var e = r.width, s = r.height, o = r.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: s,
      height: e
    };
  var l = o % 90 * Math.PI / 180, i = Math.sin(l), d = Math.cos(l), m = e * d + s * i, a = e * i + s * d;
  return o > 90 ? {
    width: a,
    height: m
  } : {
    width: m,
    height: a
  };
}
function au(r, e, s, o) {
  var l = e.aspectRatio, i = e.naturalWidth, d = e.naturalHeight, m = e.rotate, a = m === void 0 ? 0 : m, v = e.scaleX, f = v === void 0 ? 1 : v, b = e.scaleY, S = b === void 0 ? 1 : b, A = s.aspectRatio, I = s.naturalWidth, T = s.naturalHeight, k = o.fillColor, R = k === void 0 ? "transparent" : k, z = o.imageSmoothingEnabled, L = z === void 0 ? !0 : z, V = o.imageSmoothingQuality, Z = V === void 0 ? "low" : V, D = o.maxWidth, j = D === void 0 ? 1 / 0 : D, G = o.maxHeight, oe = G === void 0 ? 1 / 0 : G, te = o.minWidth, ce = te === void 0 ? 0 : te, ye = o.minHeight, pe = ye === void 0 ? 0 : ye, ge = document.createElement("canvas"), $ = ge.getContext("2d"), B = Ve({
    aspectRatio: A,
    width: j,
    height: oe
  }), P = Ve({
    aspectRatio: A,
    width: ce,
    height: pe
  }, "cover"), ee = Math.min(B.width, Math.max(P.width, I)), U = Math.min(B.height, Math.max(P.height, T)), xe = Ve({
    aspectRatio: l,
    width: j,
    height: oe
  }), Se = Ve({
    aspectRatio: l,
    width: ce,
    height: pe
  }, "cover"), Dt = Math.min(xe.width, Math.max(Se.width, i)), Ct = Math.min(xe.height, Math.max(Se.height, d)), Wt = [-Dt / 2, -Ct / 2, Dt, Ct];
  return ge.width = et(ee), ge.height = et(U), $.fillStyle = R, $.fillRect(0, 0, ee, U), $.save(), $.translate(ee / 2, U / 2), $.rotate(a * Math.PI / 180), $.scale(f, S), $.imageSmoothingEnabled = L, $.imageSmoothingQuality = Z, $.drawImage.apply($, [r].concat(Hs(Wt.map(function(Et) {
    return Math.floor(et(Et));
  })))), $.restore(), ge;
}
var to = String.fromCharCode;
function lu(r, e, s) {
  var o = "";
  s += e;
  for (var l = e; l < s; l += 1)
    o += to(r.getUint8(l));
  return o;
}
var cu = /^data:.*,/;
function uu(r) {
  var e = r.replace(cu, ""), s = atob(e), o = new ArrayBuffer(s.length), l = new Uint8Array(o);
  return re(l, function(i, d) {
    l[d] = s.charCodeAt(d);
  }), o;
}
function du(r, e) {
  for (var s = [], o = 8192, l = new Uint8Array(r); l.length > 0; )
    s.push(to.apply(null, Gs(l.subarray(0, o)))), l = l.subarray(o);
  return "data:".concat(e, ";base64,").concat(btoa(s.join("")));
}
function hu(r) {
  var e = new DataView(r), s;
  try {
    var o, l, i;
    if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
      for (var d = e.byteLength, m = 2; m + 1 < d; ) {
        if (e.getUint8(m) === 255 && e.getUint8(m + 1) === 225) {
          l = m;
          break;
        }
        m += 1;
      }
    if (l) {
      var a = l + 4, v = l + 10;
      if (lu(e, a, 4) === "Exif") {
        var f = e.getUint16(v);
        if (o = f === 18761, (o || f === 19789) && e.getUint16(v + 2, o) === 42) {
          var b = e.getUint32(v + 4, o);
          b >= 8 && (i = v + b);
        }
      }
    }
    if (i) {
      var S = e.getUint16(i, o), A, I;
      for (I = 0; I < S; I += 1)
        if (A = i + I * 12 + 2, e.getUint16(A, o) === 274) {
          A += 8, s = e.getUint16(A, o), e.setUint16(A, 1, o);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function fu(r) {
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
var pu = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var e = this.element, s = this.options, o = this.container, l = this.cropper, i = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    ae(l, de), Ae(e, de);
    var m = {
      width: Math.max(o.offsetWidth, i >= 0 ? i : Fs),
      height: Math.max(o.offsetHeight, d >= 0 ? d : qs)
    };
    this.containerData = m, Re(l, {
      width: m.width,
      height: m.height
    }), ae(e, de), Ae(l, de);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var e = this.containerData, s = this.imageData, o = this.options.viewMode, l = Math.abs(s.rotate) % 180 === 90, i = l ? s.naturalHeight : s.naturalWidth, d = l ? s.naturalWidth : s.naturalHeight, m = i / d, a = e.width, v = e.height;
    e.height * m > e.width ? o === 3 ? a = e.height * m : v = e.width / m : o === 3 ? v = e.width / m : a = e.height * m;
    var f = {
      aspectRatio: m,
      naturalWidth: i,
      naturalHeight: d,
      width: a,
      height: v
    };
    this.canvasData = f, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), f.width = Math.min(Math.max(f.width, f.minWidth), f.maxWidth), f.height = Math.min(Math.max(f.height, f.minHeight), f.maxHeight), f.left = (e.width - f.width) / 2, f.top = (e.height - f.height) / 2, f.oldLeft = f.left, f.oldTop = f.top, this.initialCanvasData = Q({}, f);
  },
  limitCanvas: function(e, s) {
    var o = this.options, l = this.containerData, i = this.canvasData, d = this.cropBoxData, m = o.viewMode, a = i.aspectRatio, v = this.cropped && d;
    if (e) {
      var f = Number(o.minCanvasWidth) || 0, b = Number(o.minCanvasHeight) || 0;
      m > 1 ? (f = Math.max(f, l.width), b = Math.max(b, l.height), m === 3 && (b * a > f ? f = b * a : b = f / a)) : m > 0 && (f ? f = Math.max(f, v ? d.width : 0) : b ? b = Math.max(b, v ? d.height : 0) : v && (f = d.width, b = d.height, b * a > f ? f = b * a : b = f / a));
      var S = Ve({
        aspectRatio: a,
        width: f,
        height: b
      });
      f = S.width, b = S.height, i.minWidth = f, i.minHeight = b, i.maxWidth = 1 / 0, i.maxHeight = 1 / 0;
    }
    if (s)
      if (m > (v ? 0 : 1)) {
        var A = l.width - i.width, I = l.height - i.height;
        i.minLeft = Math.min(0, A), i.minTop = Math.min(0, I), i.maxLeft = Math.max(0, A), i.maxTop = Math.max(0, I), v && this.limited && (i.minLeft = Math.min(d.left, d.left + (d.width - i.width)), i.minTop = Math.min(d.top, d.top + (d.height - i.height)), i.maxLeft = d.left, i.maxTop = d.top, m === 2 && (i.width >= l.width && (i.minLeft = Math.min(0, A), i.maxLeft = Math.max(0, A)), i.height >= l.height && (i.minTop = Math.min(0, I), i.maxTop = Math.max(0, I))));
      } else
        i.minLeft = -i.width, i.minTop = -i.height, i.maxLeft = l.width, i.maxTop = l.height;
  },
  renderCanvas: function(e, s) {
    var o = this.canvasData, l = this.imageData;
    if (s) {
      var i = iu({
        width: l.naturalWidth * Math.abs(l.scaleX || 1),
        height: l.naturalHeight * Math.abs(l.scaleY || 1),
        degree: l.rotate || 0
      }), d = i.width, m = i.height, a = o.width * (d / o.naturalWidth), v = o.height * (m / o.naturalHeight);
      o.left -= (a - o.width) / 2, o.top -= (v - o.height) / 2, o.width = a, o.height = v, o.aspectRatio = d / m, o.naturalWidth = d, o.naturalHeight = m, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, Re(this.canvas, Q({
      width: o.width,
      height: o.height
    }, mt({
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
    }, mt(Q({
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
    var o = this.options, l = this.containerData, i = this.canvasData, d = this.cropBoxData, m = this.limited, a = o.aspectRatio;
    if (e) {
      var v = Number(o.minCropBoxWidth) || 0, f = Number(o.minCropBoxHeight) || 0, b = m ? Math.min(l.width, i.width, i.width + i.left, l.width - i.left) : l.width, S = m ? Math.min(l.height, i.height, i.height + i.top, l.height - i.top) : l.height;
      v = Math.min(v, l.width), f = Math.min(f, l.height), a && (v && f ? f * a > v ? f = v / a : v = f * a : v ? f = v / a : f && (v = f * a), S * a > b ? S = b / a : b = S * a), d.minWidth = Math.min(v, b), d.minHeight = Math.min(f, S), d.maxWidth = b, d.maxHeight = S;
    }
    s && (m ? (d.minLeft = Math.max(0, i.left), d.minTop = Math.max(0, i.top), d.maxLeft = Math.min(l.width, i.left + i.width) - d.width, d.maxTop = Math.min(l.height, i.top + i.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = l.width - d.width, d.maxTop = l.height - d.height));
  },
  renderCropBox: function() {
    var e = this.options, s = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, e.movable && e.cropBoxMovable && St(this.face, yt, o.width >= s.width && o.height >= s.height ? Ys : Cr), Re(this.cropBox, Q({
      width: o.width,
      height: o.height
    }, mt({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), tt(this.element, ar, this.getData());
  }
}, gu = {
  initPreview: function() {
    var e = this.element, s = this.crossOrigin, o = this.options.preview, l = s ? this.crossOriginUrl : this.url, i = e.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = l, d.alt = i, this.viewBox.appendChild(d), this.viewBoxImage = d, !!o) {
      var m = o;
      typeof o == "string" ? m = e.ownerDocument.querySelectorAll(o) : o.querySelector && (m = [o]), this.previews = m, re(m, function(a) {
        var v = document.createElement("img");
        St(a, $t, {
          width: a.offsetWidth,
          height: a.offsetHeight,
          html: a.innerHTML
        }), s && (v.crossOrigin = s), v.src = l, v.alt = i, v.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', a.innerHTML = "", a.appendChild(v);
      });
    }
  },
  resetPreview: function() {
    re(this.previews, function(e) {
      var s = hr(e, $t);
      Re(e, {
        width: s.width,
        height: s.height
      }), e.innerHTML = s.html, ru(e, $t);
    });
  },
  preview: function() {
    var e = this.imageData, s = this.canvasData, o = this.cropBoxData, l = o.width, i = o.height, d = e.width, m = e.height, a = o.left - s.left - e.left, v = o.top - s.top - e.top;
    !this.cropped || this.disabled || (Re(this.viewBoxImage, Q({
      width: d,
      height: m
    }, mt(Q({
      translateX: -a,
      translateY: -v
    }, e)))), re(this.previews, function(f) {
      var b = hr(f, $t), S = b.width, A = b.height, I = S, T = A, k = 1;
      l && (k = S / l, T = i * k), i && T > A && (k = A / i, I = l * k, T = A), Re(f, {
        width: I,
        height: T
      }), Re(f.getElementsByTagName("img")[0], Q({
        width: d * k,
        height: m * k
      }, mt(Q({
        translateX: -a * k,
        translateY: -v * k
      }, e))));
    }));
  }
}, mu = {
  bind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    ue(s.cropstart) && we(e, ur, s.cropstart), ue(s.cropmove) && we(e, cr, s.cropmove), ue(s.cropend) && we(e, lr, s.cropend), ue(s.crop) && we(e, ar, s.crop), ue(s.zoom) && we(e, dr, s.zoom), we(o, qr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && we(o, ts, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && we(o, Fr, this.onDblclick = this.dblclick.bind(this)), we(e.ownerDocument, Gr, this.onCropMove = this.cropMove.bind(this)), we(e.ownerDocument, Jr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && we(window, es, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    ue(s.cropstart) && Ce(e, ur, s.cropstart), ue(s.cropmove) && Ce(e, cr, s.cropmove), ue(s.cropend) && Ce(e, lr, s.cropend), ue(s.crop) && Ce(e, ar, s.crop), ue(s.zoom) && Ce(e, dr, s.zoom), Ce(o, qr, this.onCropStart), s.zoomable && s.zoomOnWheel && Ce(o, ts, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && Ce(o, Fr, this.onDblclick), Ce(e.ownerDocument, Gr, this.onCropMove), Ce(e.ownerDocument, Jr, this.onCropEnd), s.responsive && Ce(window, es, this.onResize);
  }
}, vu = {
  resize: function() {
    if (!this.disabled) {
      var e = this.options, s = this.container, o = this.containerData, l = s.offsetWidth / o.width, i = s.offsetHeight / o.height, d = Math.abs(l - 1) > Math.abs(i - 1) ? l : i;
      if (d !== 1) {
        var m, a;
        e.restore && (m = this.getCanvasData(), a = this.getCropBoxData()), this.render(), e.restore && (this.setCanvasData(re(m, function(v, f) {
          m[f] = v * d;
        })), this.setCropBoxData(re(a, function(v, f) {
          a[f] = v * d;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Zs || this.setDragMode(eu(this.dragBox, nr) ? Xs : Er);
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
      e.changedTouches ? re(e.changedTouches, function(m) {
        i[m.identifier] = Ot(m);
      }) : i[e.pointerId || 0] = Ot(e), Object.keys(i).length > 1 && l.zoomable && l.zoomOnTouch ? d = Ws : d = hr(e.target, yt), Kc.test(d) && tt(this.element, ur, {
        originalEvent: e,
        action: d
      }) !== !1 && (e.preventDefault(), this.action = d, this.cropping = !1, d === Ks && (this.cropping = !0, ae(this.dragBox, Rt)));
    }
  },
  cropMove: function(e) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var o = this.pointers;
      e.preventDefault(), tt(this.element, cr, {
        originalEvent: e,
        action: s
      }) !== !1 && (e.changedTouches ? re(e.changedTouches, function(l) {
        Q(o[l.identifier] || {}, Ot(l, !0));
      }) : Q(o[e.pointerId || 0] || {}, Ot(e, !0)), this.change(e));
    }
  },
  cropEnd: function(e) {
    if (!this.disabled) {
      var s = this.action, o = this.pointers;
      e.changedTouches ? re(e.changedTouches, function(l) {
        delete o[l.identifier];
      }) : delete o[e.pointerId || 0], s && (e.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, Qe(this.dragBox, Rt, this.cropped && this.options.modal)), tt(this.element, lr, {
        originalEvent: e,
        action: s
      }));
    }
  }
}, bu = {
  change: function(e) {
    var s = this.options, o = this.canvasData, l = this.containerData, i = this.cropBoxData, d = this.pointers, m = this.action, a = s.aspectRatio, v = i.left, f = i.top, b = i.width, S = i.height, A = v + b, I = f + S, T = 0, k = 0, R = l.width, z = l.height, L = !0, V;
    !a && e.shiftKey && (a = b && S ? b / S : 1), this.limited && (T = i.minLeft, k = i.minTop, R = T + Math.min(l.width, o.width, o.left + o.width), z = k + Math.min(l.height, o.height, o.top + o.height));
    var Z = d[Object.keys(d)[0]], D = {
      x: Z.endX - Z.startX,
      y: Z.endY - Z.startY
    }, j = function(oe) {
      switch (oe) {
        case Ke:
          A + D.x > R && (D.x = R - A);
          break;
        case Ye:
          v + D.x < T && (D.x = T - v);
          break;
        case je:
          f + D.y < k && (D.y = k - f);
          break;
        case Ge:
          I + D.y > z && (D.y = z - I);
          break;
      }
    };
    switch (m) {
      case Cr:
        v += D.x, f += D.y;
        break;
      case Ke:
        if (D.x >= 0 && (A >= R || a && (f <= k || I >= z))) {
          L = !1;
          break;
        }
        j(Ke), b += D.x, b < 0 && (m = Ye, b = -b, v -= b), a && (S = b / a, f += (i.height - S) / 2);
        break;
      case je:
        if (D.y <= 0 && (f <= k || a && (v <= T || A >= R))) {
          L = !1;
          break;
        }
        j(je), S -= D.y, f += D.y, S < 0 && (m = Ge, S = -S, f -= S), a && (b = S * a, v += (i.width - b) / 2);
        break;
      case Ye:
        if (D.x <= 0 && (v <= T || a && (f <= k || I >= z))) {
          L = !1;
          break;
        }
        j(Ye), b -= D.x, v += D.x, b < 0 && (m = Ke, b = -b, v -= b), a && (S = b / a, f += (i.height - S) / 2);
        break;
      case Ge:
        if (D.y >= 0 && (I >= z || a && (v <= T || A >= R))) {
          L = !1;
          break;
        }
        j(Ge), S += D.y, S < 0 && (m = je, S = -S, f -= S), a && (b = S * a, v += (i.width - b) / 2);
        break;
      case dt:
        if (a) {
          if (D.y <= 0 && (f <= k || A >= R)) {
            L = !1;
            break;
          }
          j(je), S -= D.y, f += D.y, b = S * a;
        } else
          j(je), j(Ke), D.x >= 0 ? A < R ? b += D.x : D.y <= 0 && f <= k && (L = !1) : b += D.x, D.y <= 0 ? f > k && (S -= D.y, f += D.y) : (S -= D.y, f += D.y);
        b < 0 && S < 0 ? (m = pt, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = ht, b = -b, v -= b) : S < 0 && (m = ft, S = -S, f -= S);
        break;
      case ht:
        if (a) {
          if (D.y <= 0 && (f <= k || v <= T)) {
            L = !1;
            break;
          }
          j(je), S -= D.y, f += D.y, b = S * a, v += i.width - b;
        } else
          j(je), j(Ye), D.x <= 0 ? v > T ? (b -= D.x, v += D.x) : D.y <= 0 && f <= k && (L = !1) : (b -= D.x, v += D.x), D.y <= 0 ? f > k && (S -= D.y, f += D.y) : (S -= D.y, f += D.y);
        b < 0 && S < 0 ? (m = ft, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = dt, b = -b, v -= b) : S < 0 && (m = pt, S = -S, f -= S);
        break;
      case pt:
        if (a) {
          if (D.x <= 0 && (v <= T || I >= z)) {
            L = !1;
            break;
          }
          j(Ye), b -= D.x, v += D.x, S = b / a;
        } else
          j(Ge), j(Ye), D.x <= 0 ? v > T ? (b -= D.x, v += D.x) : D.y >= 0 && I >= z && (L = !1) : (b -= D.x, v += D.x), D.y >= 0 ? I < z && (S += D.y) : S += D.y;
        b < 0 && S < 0 ? (m = dt, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = ft, b = -b, v -= b) : S < 0 && (m = ht, S = -S, f -= S);
        break;
      case ft:
        if (a) {
          if (D.x >= 0 && (A >= R || I >= z)) {
            L = !1;
            break;
          }
          j(Ke), b += D.x, S = b / a;
        } else
          j(Ge), j(Ke), D.x >= 0 ? A < R ? b += D.x : D.y >= 0 && I >= z && (L = !1) : b += D.x, D.y >= 0 ? I < z && (S += D.y) : S += D.y;
        b < 0 && S < 0 ? (m = ht, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = pt, b = -b, v -= b) : S < 0 && (m = dt, S = -S, f -= S);
        break;
      case Ys:
        this.move(D.x, D.y), L = !1;
        break;
      case Ws:
        this.zoom(ou(d), e), L = !1;
        break;
      case Ks:
        if (!D.x || !D.y) {
          L = !1;
          break;
        }
        V = eo(this.cropper), v = Z.startX - V.left, f = Z.startY - V.top, b = i.minWidth, S = i.minHeight, D.x > 0 ? m = D.y > 0 ? ft : dt : D.x < 0 && (v -= b, m = D.y > 0 ? pt : ht), D.y < 0 && (f -= S), this.cropped || (Ae(this.cropBox, de), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    L && (i.width = b, i.height = S, i.left = v, i.top = f, this.action = m, this.renderCropBox()), re(d, function(G) {
      G.startX = G.endX, G.startY = G.endY;
    });
  }
}, yu = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && ae(this.dragBox, Rt), Ae(this.cropBox, de), this.setCropBoxData(this.initialCropBoxData)), this;
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
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Ae(this.dragBox, Rt), ae(this.cropBox, de)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && e && (this.isImg && (this.element.src = e), s ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, re(this.previews, function(o) {
      o.getElementsByTagName("img")[0].src = e;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(e))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, Ae(this.cropper, Xr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, ae(this.cropper, Xr)), this;
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
    var l = this.options, i = this.canvasData, d = i.width, m = i.height, a = i.naturalWidth, v = i.naturalHeight;
    if (e = Number(e), e >= 0 && this.ready && !this.disabled && l.zoomable) {
      var f = a * e, b = v * e;
      if (tt(this.element, dr, {
        ratio: e,
        oldRatio: d / a,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var S = this.pointers, A = eo(this.cropper), I = S && Object.keys(S).length ? nu(S) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        i.left -= (f - d) * ((I.pageX - A.left - i.left) / d), i.top -= (b - m) * ((I.pageY - A.top - i.top) / m);
      } else
        Je(s) && Y(s.x) && Y(s.y) ? (i.left -= (f - d) * ((s.x - i.left) / d), i.top -= (b - m) * ((s.y - i.top) / m)) : (i.left -= (f - d) / 2, i.top -= (b - m) / 2);
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
      var m = o.width / o.naturalWidth;
      if (re(d, function(f, b) {
        d[b] = f / m;
      }), e) {
        var a = Math.round(d.y + d.height), v = Math.round(d.x + d.width);
        d.x = Math.round(d.x), d.y = Math.round(d.y), d.width = v - d.x, d.height = a - d.y;
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
      var m = o.width / o.naturalWidth;
      Y(e.x) && (i.left = e.x * m + l.left), Y(e.y) && (i.top = e.y * m + l.top), Y(e.width) && (i.width = e.width * m), Y(e.height) && (i.height = e.height * m), this.setCropBoxData(i);
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
    return this.ready && re(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(o) {
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
    var s = this.canvasData, o = au(this.image, this.imageData, s, e);
    if (!this.cropped)
      return o;
    var l = this.getData(e.rounded), i = l.x, d = l.y, m = l.width, a = l.height, v = o.width / Math.floor(s.naturalWidth);
    v !== 1 && (i *= v, d *= v, m *= v, a *= v);
    var f = m / a, b = Ve({
      aspectRatio: f,
      width: e.maxWidth || 1 / 0,
      height: e.maxHeight || 1 / 0
    }), S = Ve({
      aspectRatio: f,
      width: e.minWidth || 0,
      height: e.minHeight || 0
    }, "cover"), A = Ve({
      aspectRatio: f,
      width: e.width || (v !== 1 ? o.width : m),
      height: e.height || (v !== 1 ? o.height : a)
    }), I = A.width, T = A.height;
    I = Math.min(b.width, Math.max(S.width, I)), T = Math.min(b.height, Math.max(S.height, T));
    var k = document.createElement("canvas"), R = k.getContext("2d");
    k.width = et(I), k.height = et(T), R.fillStyle = e.fillColor || "transparent", R.fillRect(0, 0, I, T);
    var z = e.imageSmoothingEnabled, L = z === void 0 ? !0 : z, V = e.imageSmoothingQuality;
    R.imageSmoothingEnabled = L, V && (R.imageSmoothingQuality = V);
    var Z = o.width, D = o.height, j = i, G = d, oe, te, ce, ye, pe, ge;
    j <= -m || j > Z ? (j = 0, oe = 0, ce = 0, pe = 0) : j <= 0 ? (ce = -j, j = 0, oe = Math.min(Z, m + j), pe = oe) : j <= Z && (ce = 0, oe = Math.min(m, Z - j), pe = oe), oe <= 0 || G <= -a || G > D ? (G = 0, te = 0, ye = 0, ge = 0) : G <= 0 ? (ye = -G, G = 0, te = Math.min(D, a + G), ge = te) : G <= D && (ye = 0, te = Math.min(a, D - G), ge = te);
    var $ = [j, G, oe, te];
    if (pe > 0 && ge > 0) {
      var B = I / m;
      $.push(ce * B, ye * B, pe * B, ge * B);
    }
    return R.drawImage.apply(R, [o].concat(Hs($.map(function(P) {
      return Math.floor(et(P));
    })))), k;
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
}, Su = $e.Cropper, ro = /* @__PURE__ */ function() {
  function r(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if ($c(this, r), !e || !Xc.test(e.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = e, this.options = Q({}, ss, Je(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Oc(r, [{
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
        if (Yc.test(s)) {
          Wc.test(s) ? this.read(uu(s)) : this.clone();
          return;
        }
        var d = new XMLHttpRequest(), m = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = m, d.onerror = m, d.ontimeout = m, d.onprogress = function() {
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
      var o = this.options, l = this.imageData, i = hu(s), d = 0, m = 1, a = 1;
      if (i > 1) {
        this.url = du(s, rs);
        var v = fu(i);
        d = v.rotate, m = v.scaleX, a = v.scaleY;
      }
      o.rotatable && (l.rotate = d), o.scalable && (l.scaleX = m, l.scaleY = a), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, o = this.url, l = s.crossOrigin, i = o;
      this.options.checkCrossOrigin && ns(o) && (l || (l = "anonymous"), i = is(o)), this.crossOrigin = l, this.crossOriginUrl = i;
      var d = document.createElement("img");
      l && (d.crossOrigin = l), d.src = i || o, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), ae(d, Zr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var l = $e.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test($e.navigator.userAgent), i = function(v, f) {
        Q(s.imageData, {
          naturalWidth: v,
          naturalHeight: f,
          aspectRatio: v / f
        }), s.initialImageData = Q({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (o.naturalWidth && !l) {
        i(o.naturalWidth, o.naturalHeight);
        return;
      }
      var d = document.createElement("img"), m = document.body || document.documentElement;
      this.sizingImage = d, d.onload = function() {
        i(d.width, d.height), l || m.removeChild(d);
      }, d.src = o.src, l || (d.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", m.appendChild(d));
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
        d.innerHTML = Zc;
        var m = d.querySelector(".".concat(J, "-container")), a = m.querySelector(".".concat(J, "-canvas")), v = m.querySelector(".".concat(J, "-drag-box")), f = m.querySelector(".".concat(J, "-crop-box")), b = f.querySelector(".".concat(J, "-face"));
        this.container = i, this.cropper = m, this.canvas = a, this.dragBox = v, this.cropBox = f, this.viewBox = m.querySelector(".".concat(J, "-view-box")), this.face = b, a.appendChild(l), ae(s, de), i.insertBefore(m, s.nextSibling), Ae(l, Zr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, ae(f, de), o.guides || ae(f.getElementsByClassName("".concat(J, "-dashed")), de), o.center || ae(f.getElementsByClassName("".concat(J, "-center")), de), o.background && ae(m, "".concat(J, "-bg")), o.highlight || ae(b, Bc), o.cropBoxMovable && (ae(b, ir), St(b, yt, Cr)), o.cropBoxResizable || (ae(f.getElementsByClassName("".concat(J, "-line")), de), ae(f.getElementsByClassName("".concat(J, "-point")), de)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), ue(o.ready) && we(s, Qr, o.ready, {
          once: !0
        }), tt(s, Qr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var s = this.cropper.parentNode;
        s && s.removeChild(this.cropper), Ae(this.element, de);
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
      return window.Cropper = Su, r;
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
Q(ro.prototype, pu, gu, mu, vu, bu, yu);
const wu = { class: "flex" }, _u = ["aria-label"], xu = { class: "ml-auto mb-2" }, ku = { class: "w-full flex justify-center" }, Du = ["src"], Cu = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = e, o = r, { t: l } = N("i18n"), { apiUrl: i } = ze(), d = O(null), m = O(null), a = O(!1), v = O(""), f = O(!1), b = () => {
      a.value = !a.value, a.value ? m.value = new ro(d.value, {
        crop(I) {
        }
      }) : m.value.destroy();
    }, S = N("postData"), A = () => {
      m.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (I) => {
          v.value = "", f.value = !1, Nt(i.value, {
            method: "POST",
            params: Object.assign(S, {
              q: "upload",
              adapter: o.selection.adapter,
              path: o.selection.item.path,
              file: I
            }),
            name: o.selection.item.basename,
            json: !1
          }).then((T) => {
            v.value = l("Updated."), d.value.src = tr(o.selection.adapter, o.selection.item.path), b(), s("load");
          }).catch((T) => {
            v.value = l(T.message), f.value = !0;
          });
        }
      );
    };
    return Me(() => {
      s("load");
    }), (I, T) => (w(), E(le, null, [
      p("div", wu, [
        p("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, M(r.selection.item.basename), 9, _u),
        p("div", xu, [
          a.value ? (w(), E("button", {
            key: 0,
            onClick: A,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, M(x(l)("Crop")), 1)) : K("", !0),
          p("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: T[0] || (T[0] = (k) => b())
          }, M(a.value ? x(l)("Cancel") : x(l)("Edit")), 1)
        ])
      ]),
      p("div", ku, [
        p("img", {
          ref_key: "image",
          ref: d,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(tr)(o.selection.adapter, o.selection.item.path),
          alt: ""
        }, null, 8, Du)
      ]),
      v.value.length ? (w(), q(Le, {
        key: 0,
        onHidden: T[1] || (T[1] = (k) => v.value = ""),
        error: f.value
      }, {
        default: F(() => [
          se(M(v.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : K("", !0)
    ], 64));
  }
}, Eu = { class: "flex" }, Mu = ["aria-label"], Tu = /* @__PURE__ */ p("div", null, null, -1), Iu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = e;
    return Me(() => {
      s("load");
    }), (o, l) => (w(), E(le, null, [
      p("div", Eu, [
        p("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, M(r.selection.item.basename), 9, Mu)
      ]),
      Tu
    ], 64));
  }
}, Au = ["aria-label"], $u = {
  class: "w-full",
  preload: "",
  controls: ""
}, Ou = ["src"], Lu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const { apiUrl: s } = ze(), o = r, l = e, i = () => s.value + "?" + wt({ q: "preview", adapter: o.selection.adapter, path: o.selection.item.path });
    return Me(() => {
      l("load");
    }), (d, m) => (w(), E(le, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, M(r.selection.item.basename), 9, Au),
      p("div", null, [
        p("video", $u, [
          p("source", {
            src: i(),
            type: "video/mp4"
          }, null, 8, Ou),
          se(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, Pu = ["aria-label"], Nu = {
  class: "w-full",
  controls: ""
}, ju = ["src"], Ru = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const { apiUrl: s } = ze(), o = r, l = e, i = () => s.value + "?" + wt({ q: "preview", adapter: o.selection.adapter, path: o.selection.item.path });
    return Me(() => {
      l("load");
    }), (d, m) => (w(), E(le, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, M(r.selection.item.basename), 9, Pu),
      p("div", null, [
        p("audio", Nu, [
          p("source", {
            src: i(),
            type: "audio/mpeg"
          }, null, 8, ju),
          se(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, Vu = ["aria-label"], Bu = ["data"], zu = ["src"], Hu = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const { apiUrl: s } = ze(), o = r, l = e, i = () => s.value + "?" + wt({ q: "preview", adapter: o.selection.adapter, path: o.selection.item.path });
    return Me(() => {
      l("load");
    }), (d, m) => (w(), E(le, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, M(r.selection.item.basename), 9, Vu),
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
        `, 8, zu)
        ], 8, Bu)
      ])
    ], 64));
  }
}, Uu = { class: "sm:flex sm:items-start" }, Ku = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, Yu = { class: "text-gray-700 dark:text-gray-200 text-sm" }, Wu = {
  key: 0,
  class: "flex leading-5"
}, Xu = /* @__PURE__ */ p("svg", {
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
], -1), Zu = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, Fu = { class: "font-bold pl-2" }, qu = { class: "font-bold pl-2" }, Gu = {
  name: "VFModalPreview"
}, Ju = /* @__PURE__ */ Object.assign(Gu, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = N("emitter"), { t: s } = N("i18n"), o = O(!1), l = (a) => o.value = a, i = r, d = (a) => (i.selection.item.mime_type ?? "").startsWith(a), m = () => {
      e.emit("vf-download", i.selection.item);
    };
    return (a, v) => (w(), q(Oe, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: v[6] || (v[6] = (f) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(s)("Close")), 1),
        p("button", {
          type: "button",
          onClick: v[7] || (v[7] = (f) => m()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(s)("Download")), 1)
      ]),
      default: F(() => [
        p("div", Uu, [
          p("div", Ku, [
            p("div", null, [
              d("text") ? (w(), q(Ac, {
                key: 0,
                selection: r.selection,
                onLoad: v[0] || (v[0] = (f) => l(!0))
              }, null, 8, ["selection"])) : d("image") ? (w(), q(Cu, {
                key: 1,
                selection: r.selection,
                onLoad: v[1] || (v[1] = (f) => l(!0))
              }, null, 8, ["selection"])) : d("video") ? (w(), q(Lu, {
                key: 2,
                selection: r.selection,
                onLoad: v[2] || (v[2] = (f) => l(!0))
              }, null, 8, ["selection"])) : d("audio") ? (w(), q(Ru, {
                key: 3,
                selection: r.selection,
                onLoad: v[3] || (v[3] = (f) => l(!0))
              }, null, 8, ["selection"])) : d("application/pdf") ? (w(), q(Hu, {
                key: 4,
                selection: r.selection,
                onLoad: v[4] || (v[4] = (f) => l(!0))
              }, null, 8, ["selection"])) : (w(), q(Iu, {
                key: 5,
                selection: r.selection,
                onLoad: v[5] || (v[5] = (f) => l(!0))
              }, null, 8, ["selection"]))
            ]),
            p("div", Yu, [
              o.value == !1 ? (w(), E("div", Wu, [
                Xu,
                p("span", null, M(x(s)("Loading")), 1)
              ])) : K("", !0)
            ])
          ])
        ]),
        p("div", Zu, [
          p("div", null, [
            p("span", Fu, M(x(s)("File Size")) + ": ", 1),
            se(M(x(ds)(r.selection.item.file_size)), 1)
          ]),
          p("div", null, [
            p("span", qu, M(x(s)("Last Modified")) + ": ", 1),
            se(" " + M(x(hs)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Qu = { class: "sm:flex sm:items-start" }, ed = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), td = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, rd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, sd = { class: "mt-2" }, od = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, nd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, id = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ad = [
  id
], ld = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, cd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ud = [
  cd
], dd = { class: "ml-1.5" }, hd = ["onKeyup"], fd = {
  name: "VFModalRename"
}, pd = /* @__PURE__ */ Object.assign(fd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = N("emitter");
    N("storage");
    const s = N("adapter"), { t: o } = N("i18n"), l = r, i = O(l.selection.items[0]), d = O(l.selection.items[0].basename), m = O(""), a = () => {
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
        onError: (v) => {
          m.value = o(v.message);
        }
      });
    };
    return (v, f) => (w(), q(Oe, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: a,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Rename")), 1),
        p("button", {
          type: "button",
          onClick: f[2] || (f[2] = (b) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", Qu, [
          ed,
          p("div", td, [
            p("h3", rd, M(x(o)("Rename")), 1),
            p("div", sd, [
              p("p", od, [
                i.value.type == "dir" ? (w(), E("svg", nd, ad)) : (w(), E("svg", ld, ud)),
                p("span", dd, M(i.value.basename), 1)
              ]),
              be(p("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (b) => d.value = b),
                onKeyup: st(a, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, hd), [
                [ot, d.value]
              ]),
              m.value.length ? (w(), q(Le, {
                key: 0,
                onHidden: f[1] || (f[1] = (b) => m.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(M(m.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), gd = { class: "sm:flex sm:items-start" }, md = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), vd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, bd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, yd = { class: "mt-2" }, Sd = { class: "text-gray-500 mb-1" }, wd = ["id"], _d = {
  key: 0,
  class: "py-2"
}, xd = ["disabled", "onClick"], kd = {
  name: "VFModalUpload"
}, Dd = /* @__PURE__ */ Object.assign(kd, {
  props: {
    current: Object
  },
  setup(r) {
    const e = N("emitter"), { apiUrl: s } = ze(), { t: o } = N("i18n"), l = N("maxFileSize"), i = r, d = O(null), m = O(null), a = O(null), v = O([]), f = O(""), b = O(!0), S = () => {
      f.value = "", d.value.start();
    }, A = N("postData");
    return Me(() => {
      d.value = new ut.Uploader({
        runtimes: "html5",
        browse_button: a.value,
        container: m.value,
        max_file_size: l,
        multiple_queues: !0,
        file_data_name: "file",
        url: s.value + "?" + wt(Object.assign(A, { q: "upload", adapter: i.current.adapter, path: i.current.dirname })),
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
          FilesAdded: function(I, T) {
            b.value = !1, ut.each(T, function(k) {
              v.value.push({
                id: k.id,
                name: k.name,
                size: ut.formatSize(k.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(I, T) {
            v.value[v.value.findIndex((k) => k.id == T.id)].percent = T.percent + "%";
          },
          UploadComplete: function() {
            b.value = !0, e.emit("vf-fetch", { params: { q: "index", adapter: i.current.adapter, path: i.current.dirname } });
          },
          Error: function(I, T) {
            d.value.stop(), T.code == ut.HTTP_ERROR ? f.value = o(JSON.parse(T.response).message) : T.code == ut.FILE_SIZE_ERROR ? f.value = o("The selected file exceeds the maximum file size. You cannot upload files greater than %s", [l]) : f.value = o(T.message);
          }
        }
      }), d.value.init();
    }), (I, T) => (w(), q(Oe, null, {
      buttons: F(() => [
        p("button", {
          disabled: b.value,
          onClick: We(S, ["prevent"]),
          type: "button",
          class: he([b.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, M(x(o)("Upload")), 11, xd),
        p("button", {
          type: "button",
          onClick: T[1] || (T[1] = (k) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", gd, [
          md,
          p("div", vd, [
            p("h3", bd, M(x(o)("Upload files")), 1),
            p("div", yd, [
              p("div", Sd, [
                (w(!0), E(le, null, _e(v.value, (k) => (w(), E("div", null, [
                  p("div", {
                    id: k.id
                  }, [
                    se(M(k.name) + " ( " + M(k.size) + ") ", 1),
                    p("b", null, M(k.percent), 1)
                  ], 8, wd)
                ]))), 256)),
                v.value.length ? K("", !0) : (w(), E("div", _d, M(x(o)("No files selected!")), 1))
              ]),
              p("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: m
              }, [
                p("button", {
                  ref_key: "pickFiles",
                  ref: a,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, M(x(o)("Select Files")), 513)
              ], 512),
              f.value.length ? (w(), q(Le, {
                key: 0,
                onHidden: T[0] || (T[0] = (k) => f.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(M(f.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Cd = { class: "sm:flex sm:items-start" }, Ed = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Md = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Td = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Id = { class: "mt-2" }, Ad = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, $d = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Od = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Ld = [
  Od
], Pd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Nd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), jd = [
  Nd
], Rd = { class: "ml-1.5" }, Vd = ["onKeyup", "placeholder"], Bd = {
  name: "VFModalArchive"
}, zd = /* @__PURE__ */ Object.assign(Bd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = N("emitter");
    N("storage");
    const s = N("adapter"), { t: o } = N("i18n"), l = r, i = O(""), d = O(""), m = O(l.selection.items), a = () => {
      m.value.length && e.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: s.value,
          path: l.current.dirname,
          items: JSON.stringify(m.value.map(({ path: v, type: f }) => ({ path: v, type: f }))),
          name: i.value
        },
        onSuccess: () => {
          e.emit("vf-toast-push", { label: o("The file(s) archived.") });
        },
        onError: (v) => {
          d.value = o(v.message);
        }
      });
    };
    return (v, f) => (w(), q(Oe, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: a,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Archive")), 1),
        p("button", {
          type: "button",
          onClick: f[2] || (f[2] = (b) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", Cd, [
          Ed,
          p("div", Md, [
            p("h3", Td, M(x(o)("Archive the files")), 1),
            p("div", Id, [
              (w(!0), E(le, null, _e(m.value, (b) => (w(), E("p", Ad, [
                b.type == "dir" ? (w(), E("svg", $d, Ld)) : (w(), E("svg", Pd, jd)),
                p("span", Rd, M(b.basename), 1)
              ]))), 256)),
              be(p("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (b) => i.value = b),
                onKeyup: st(a, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(o)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, Vd), [
                [ot, i.value]
              ]),
              d.value.length ? (w(), q(Le, {
                key: 0,
                onHidden: f[1] || (f[1] = (b) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(M(d.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Hd = { class: "sm:flex sm:items-start" }, Ud = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), Kd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Yd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Wd = { class: "mt-2" }, Xd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Zd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Fd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), qd = [
  Fd
], Gd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Jd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Qd = [
  Jd
], eh = { class: "ml-1.5" }, th = { class: "my-1 text-sm text-gray-500" }, rh = {
  name: "VFModalUnarchive"
}, sh = /* @__PURE__ */ Object.assign(rh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = N("emitter");
    N("storage");
    const s = N("adapter"), { t: o } = N("i18n"), l = r;
    O("");
    const i = O(l.selection.items[0]), d = O(""), m = O([]), a = () => {
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
        onError: (v) => {
          d.value = o(v.message);
        }
      });
    };
    return (v, f) => (w(), q(Oe, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: a,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Unarchive")), 1),
        p("button", {
          type: "button",
          onClick: f[1] || (f[1] = (b) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", Hd, [
          Ud,
          p("div", Kd, [
            p("h3", Yd, M(x(o)("Unarchive")), 1),
            p("div", Wd, [
              (w(!0), E(le, null, _e(m.value, (b) => (w(), E("p", Xd, [
                b.type == "dir" ? (w(), E("svg", Zd, qd)) : (w(), E("svg", Gd, Qd)),
                p("span", eh, M(b.basename), 1)
              ]))), 256)),
              p("p", th, M(x(o)("The archive will be unarchived at")) + " (" + M(r.current.dirname) + ")", 1),
              d.value.length ? (w(), q(Le, {
                key: 0,
                onHidden: f[0] || (f[0] = (b) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(M(d.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), oh = { class: "sm:flex sm:items-start" }, nh = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), ih = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ah = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, lh = { class: "mt-2" }, ch = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, uh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, dh = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), hh = [
  dh
], fh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ph = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), gh = [
  ph
], mh = { class: "ml-1.5" }, vh = { class: "text-sm text-gray-500 pb-1 pt-3" }, bh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, yh = /* @__PURE__ */ p("svg", {
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
], -1), Sh = { class: "ml-1.5 overflow-auto" }, wh = {
  name: "VFModalMove"
}, _h = /* @__PURE__ */ Object.assign(wh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = N("emitter"), { t: s } = N("i18n");
    N("storage");
    const o = N("adapter"), l = r, i = O(l.selection.items.from), d = O(""), m = () => {
      i.value.length && e.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: o.value,
          path: l.current.dirname,
          items: JSON.stringify(i.value.map(({ path: a, type: v }) => ({ path: a, type: v }))),
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
    return (a, v) => (w(), q(Oe, null, {
      buttons: F(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(s)("Yes, Move!")), 1),
        p("button", {
          type: "button",
          onClick: v[1] || (v[1] = (f) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, M(x(s)("Cancel")), 1)
      ]),
      default: F(() => [
        p("div", oh, [
          nh,
          p("div", ih, [
            p("h3", ah, M(x(s)("Move files")), 1),
            p("div", lh, [
              (w(!0), E(le, null, _e(i.value, (f) => (w(), E("p", ch, [
                f.type == "dir" ? (w(), E("svg", uh, hh)) : (w(), E("svg", fh, gh)),
                p("span", mh, M(f.path), 1)
              ]))), 256)),
              p("p", vh, M(x(s)("Are you sure you want to move these files?")), 1),
              p("p", bh, [
                yh,
                p("span", Sh, M(r.selection.items.to.path), 1)
              ]),
              d.value.length ? (w(), q(Le, {
                key: 0,
                onHidden: v[0] || (v[0] = (f) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(M(d.value), 1)
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalArchive: zd,
  ModalDelete: Ql,
  ModalMessage: ac,
  ModalMove: _h,
  ModalNewFile: Dc,
  ModalNewFolder: mc,
  ModalPreview: Ju,
  ModalRename: pd,
  ModalUnarchive: sh,
  ModalUpload: Dd
}, Symbol.toStringTag, { value: "Module" })), Jt = {
  VueFinder: El,
  ...xh
};
const Ch = {
  install(r) {
    for (const e in Jt)
      if (Jt.hasOwnProperty(e)) {
        const s = Jt[e];
        r.component(s.name, s);
      }
  }
};
export {
  Ch as default
};
