import H, { createContext as bt, useState as V, useContext as Nt, useRef as ve, useEffect as Re } from "react";
var we = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function jt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var t = H, r = Symbol.for("react.element"), l = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), p = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), b = Symbol.iterator, P = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = b && e[b] || e[P];
      return typeof a == "function" ? a : null;
    }
    var A = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
          i[o - 1] = arguments[o];
        x("error", e, i);
      }
    }
    function x(e, a, i) {
      {
        var o = A.ReactDebugCurrentFrame, d = o.getStackAddendum();
        d !== "" && (a += "%s", i = i.concat([d]));
        var h = i.map(function(u) {
          return String(u);
        });
        h.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var $ = !1, K = !1, G = !1, O = !1, q = !1, W;
    W = Symbol.for("react.module.reference");
    function z(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === f || q || e === m || e === E || e === N || O || e === M || $ || K || G || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === C || e.$$typeof === _ || e.$$typeof === p || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === W || e.getModuleId !== void 0));
    }
    function U(e, a, i) {
      var o = e.displayName;
      if (o)
        return o;
      var d = a.displayName || a.name || "";
      return d !== "" ? i + "(" + d + ")" : i;
    }
    function X(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case l:
          return "Portal";
        case f:
          return "Profiler";
        case m:
          return "StrictMode";
        case E:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var a = e;
            return X(a) + ".Consumer";
          case _:
            var i = e;
            return X(i._context) + ".Provider";
          case y:
            return U(e, e.render, "ForwardRef");
          case C:
            var o = e.displayName || null;
            return o !== null ? o : S(e.type) || "Memo";
          case w: {
            var d = e, h = d._payload, u = d._init;
            try {
              return S(u(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, g = 0, R, Z, le, oe, ce, ue, de;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function be() {
      {
        if (g === 0) {
          R = console.log, Z = console.info, le = console.warn, oe = console.error, ce = console.group, ue = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        g++;
      }
    }
    function Ne() {
      {
        if (g--, g === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: R
            }),
            info: D({}, e, {
              value: Z
            }),
            warn: D({}, e, {
              value: le
            }),
            error: D({}, e, {
              value: oe
            }),
            group: D({}, e, {
              value: ce
            }),
            groupCollapsed: D({}, e, {
              value: ue
            }),
            groupEnd: D({}, e, {
              value: de
            })
          });
        }
        g < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = A.ReactCurrentDispatcher, re;
    function Q(e, a, i) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (d) {
            var o = d.stack.trim().match(/\n( *(at )?)/);
            re = o && o[1] || "";
          }
        return `
` + re + e;
      }
    }
    var I = !1, fe;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new Je();
    }
    function Se(e, a) {
      if (!e || I)
        return "";
      {
        var i = fe.get(e);
        if (i !== void 0)
          return i;
      }
      var o;
      I = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = ae.current, ae.current = null, be();
      try {
        if (a) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (B) {
              o = B;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (B) {
              o = B;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B) {
            o = B;
          }
          e();
        }
      } catch (B) {
        if (B && o && typeof B.stack == "string") {
          for (var c = B.stack.split(`
`), k = o.stack.split(`
`), j = c.length - 1, T = k.length - 1; j >= 1 && T >= 0 && c[j] !== k[T]; )
            T--;
          for (; j >= 1 && T >= 0; j--, T--)
            if (c[j] !== k[T]) {
              if (j !== 1 || T !== 1)
                do
                  if (j--, T--, T < 0 || c[j] !== k[T]) {
                    var L = `
` + c[j].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && fe.set(e, L), L;
                  }
                while (j >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        I = !1, ae.current = h, Ne(), Error.prepareStackTrace = d;
      }
      var te = e ? e.displayName || e.name : "", He = te ? Q(te) : "";
      return typeof e == "function" && fe.set(e, He), He;
    }
    function Xe(e, a, i) {
      return Se(e, !1);
    }
    function Qe(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function pe(e, a, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, Qe(e));
      if (typeof e == "string")
        return Q(e);
      switch (e) {
        case E:
          return Q("Suspense");
        case N:
          return Q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Xe(e.render);
          case C:
            return pe(e.type, a, i);
          case w: {
            var o = e, d = o._payload, h = o._init;
            try {
              return pe(h(d), a, i);
            } catch {
            }
          }
        }
      return "";
    }
    var ye = Object.prototype.hasOwnProperty, Pe = {}, Oe = A.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var a = e._owner, i = pe(e.type, e._source, a ? a.type : null);
        Oe.setExtraStackFrame(i);
      } else
        Oe.setExtraStackFrame(null);
    }
    function et(e, a, i, o, d) {
      {
        var h = Function.call.bind(ye);
        for (var u in e)
          if (h(e, u)) {
            var c = void 0;
            try {
              if (typeof e[u] != "function") {
                var k = Error((o || "React class") + ": " + i + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              c = e[u](a, u, o, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              c = j;
            }
            c && !(c instanceof Error) && (he(d), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", i, u, typeof c), he(null)), c instanceof Error && !(c.message in Pe) && (Pe[c.message] = !0, he(d), v("Failed %s type: %s", i, c.message), he(null));
          }
      }
    }
    var tt = Array.isArray;
    function je(e) {
      return tt(e);
    }
    function at(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, i = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function rt(e) {
      try {
        return Ie(e), !1;
      } catch {
        return !0;
      }
    }
    function Ie(e) {
      return "" + e;
    }
    function Le(e) {
      if (rt(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", at(e)), Ie(e);
    }
    var ne = A.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Ae, Te;
    Te = {};
    function it(e) {
      if (ye.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function st(e) {
      if (ye.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lt(e, a) {
      if (typeof e.ref == "string" && ne.current && a && ne.current.stateNode !== a) {
        var i = S(ne.current.type);
        Te[i] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(ne.current.type), e.ref), Te[i] = !0);
      }
    }
    function ot(e, a) {
      {
        var i = function() {
          Fe || (Fe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function ct(e, a) {
      {
        var i = function() {
          Ae || (Ae = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var ut = function(e, a, i, o, d, h, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: i,
        props: u,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function dt(e, a, i, o, d) {
      {
        var h, u = {}, c = null, k = null;
        i !== void 0 && (Le(i), c = "" + i), st(a) && (Le(a.key), c = "" + a.key), it(a) && (k = a.ref, lt(a, d));
        for (h in a)
          ye.call(a, h) && !nt.hasOwnProperty(h) && (u[h] = a[h]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (h in j)
            u[h] === void 0 && (u[h] = j[h]);
        }
        if (c || k) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ot(u, T), k && ct(u, T);
        }
        return ut(e, c, k, d, o, ne.current, u);
      }
    }
    var Ce = A.ReactCurrentOwner, De = A.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var a = e._owner, i = pe(e.type, e._source, a ? a.type : null);
        De.setExtraStackFrame(i);
      } else
        De.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Me() {
      {
        if (Ce.current) {
          var e = S(Ce.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function mt(e) {
      {
        if (e !== void 0) {
          var a = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + a + ":" + i + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function ft(e) {
      {
        var a = Me();
        if (!a) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (a = `

Check the top-level render call using <` + i + ">.");
        }
        return a;
      }
    }
    function We(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = ft(a);
        if (Ve[i])
          return;
        Ve[i] = !0;
        var o = "";
        e && e._owner && e._owner !== Ce.current && (o = " It was passed a child from " + S(e._owner.type) + "."), ee(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, o), ee(null);
      }
    }
    function ze(e, a) {
      {
        if (typeof e != "object")
          return;
        if (je(e))
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            _e(o) && We(o, a);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = F(e);
          if (typeof d == "function" && d !== e.entries)
            for (var h = d.call(e), u; !(u = h.next()).done; )
              _e(u.value) && We(u.value, a);
        }
      }
    }
    function pt(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var i;
        if (typeof a == "function")
          i = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === C))
          i = a.propTypes;
        else
          return;
        if (i) {
          var o = S(a);
          et(i, e.props, "prop", o, e);
        } else if (a.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var d = S(a);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yt(e) {
      {
        for (var a = Object.keys(e.props), i = 0; i < a.length; i++) {
          var o = a[i];
          if (o !== "children" && o !== "key") {
            ee(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), ee(null);
            break;
          }
        }
        e.ref !== null && (ee(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    function Be(e, a, i, o, d, h) {
      {
        var u = z(e);
        if (!u) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = mt(d);
          k ? c += k : c += Me();
          var j;
          e === null ? j = "null" : je(e) ? j = "array" : e !== void 0 && e.$$typeof === r ? (j = "<" + (S(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, c);
        }
        var T = dt(e, a, i, d, h);
        if (T == null)
          return T;
        if (u) {
          var L = a.children;
          if (L !== void 0)
            if (o)
              if (je(L)) {
                for (var te = 0; te < L.length; te++)
                  ze(L[te], e);
                Object.freeze && Object.freeze(L);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(L, e);
        }
        return e === s ? yt(T) : pt(T), T;
      }
    }
    function ht(e, a, i) {
      return Be(e, a, i, !0);
    }
    function vt(e, a, i) {
      return Be(e, a, i, !1);
    }
    var xt = vt, gt = ht;
    ie.Fragment = s, ie.jsx = xt, ie.jsxs = gt;
  }()), ie;
}
var se = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Tt() {
  if ($e)
    return se;
  $e = 1;
  var t = H, r = Symbol.for("react.element"), l = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, m = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(p, y, E) {
    var N, C = {}, w = null, M = null;
    E !== void 0 && (w = "" + E), y.key !== void 0 && (w = "" + y.key), y.ref !== void 0 && (M = y.ref);
    for (N in y)
      s.call(y, N) && !f.hasOwnProperty(N) && (C[N] = y[N]);
    if (p && p.defaultProps)
      for (N in y = p.defaultProps, y)
        C[N] === void 0 && (C[N] = y[N]);
    return { $$typeof: r, type: p, key: w, ref: M, props: C, _owner: m.current };
  }
  return se.Fragment = l, se.jsx = _, se.jsxs = _, se;
}
process.env.NODE_ENV === "production" ? we.exports = Tt() : we.exports = jt();
var n = we.exports, Ge = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ue = H.createContext && /* @__PURE__ */ H.createContext(Ge), Ct = ["attr", "size", "title"];
function Et(t, r) {
  if (t == null)
    return {};
  var l = _t(t, r), s, m;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(t);
    for (m = 0; m < f.length; m++)
      s = f[m], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (l[s] = t[s]);
  }
  return l;
}
function _t(t, r) {
  if (t == null)
    return {};
  var l = {}, s = Object.keys(t), m, f;
  for (f = 0; f < s.length; f++)
    m = s[f], !(r.indexOf(m) >= 0) && (l[m] = t[m]);
  return l;
}
function xe() {
  return xe = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var l = arguments[r];
      for (var s in l)
        Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
    }
    return t;
  }, xe.apply(this, arguments);
}
function Ke(t, r) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    r && (s = s.filter(function(m) {
      return Object.getOwnPropertyDescriptor(t, m).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function ge(t) {
  for (var r = 1; r < arguments.length; r++) {
    var l = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ke(Object(l), !0).forEach(function(s) {
      kt(t, s, l[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : Ke(Object(l)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(l, s));
    });
  }
  return t;
}
function kt(t, r, l) {
  return r = Rt(r), r in t ? Object.defineProperty(t, r, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = l, t;
}
function Rt(t) {
  var r = wt(t, "string");
  return typeof r == "symbol" ? r : String(r);
}
function wt(t, r) {
  if (typeof t != "object" || t === null)
    return t;
  var l = t[Symbol.toPrimitive];
  if (l !== void 0) {
    var s = l.call(t, r || "default");
    if (typeof s != "object")
      return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function qe(t) {
  return t && t.map((r, l) => /* @__PURE__ */ H.createElement(r.tag, ge({
    key: l
  }, r.attr), qe(r.child)));
}
function Y(t) {
  return (r) => /* @__PURE__ */ H.createElement(St, xe({
    attr: ge({}, t.attr)
  }, r), qe(t.child));
}
function St(t) {
  var r = (l) => {
    var {
      attr: s,
      size: m,
      title: f
    } = t, _ = Et(t, Ct), p = m || l.size || "1em", y;
    return l.className && (y = l.className), t.className && (y = (y ? y + " " : "") + t.className), /* @__PURE__ */ H.createElement("svg", xe({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, l.attr, s, _, {
      className: y,
      style: ge(ge({
        color: t.color || l.color
      }, l.style), t.style),
      height: p,
      width: p,
      xmlns: "http://www.w3.org/2000/svg"
    }), f && /* @__PURE__ */ H.createElement("title", null, f), t.children);
  };
  return Ue !== void 0 ? /* @__PURE__ */ H.createElement(Ue.Consumer, null, (l) => r(l)) : r(Ge);
}
function Pt(t) {
  return Y({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z", clipRule: "evenodd" }, child: [] }] })(t);
}
function Ot(t) {
  return Y({ tag: "svg", attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, child: [] }] })(t);
}
function It(t) {
  return Y({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" }, child: [] }] })(t);
}
function ke(t) {
  return Y({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" }, child: [] }] })(t);
}
function Lt(t) {
  return Y({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.7.48A6.985 6.985 0 002 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h1.535l4.033 3.796A.75.75 0 0010 16.25V3.75zM15.95 5.05a.75.75 0 00-1.06 1.061 5.5 5.5 0 010 7.778.75.75 0 001.06 1.06 7 7 0 000-9.899z" }, child: [] }, { tag: "path", attr: { d: "M13.829 7.172a.75.75 0 00-1.061 1.06 2.5 2.5 0 010 3.536.75.75 0 001.06 1.06 4 4 0 000-5.656z" }, child: [] }] })(t);
}
function Ft(t) {
  return Y({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M9.547 3.062A.75.75 0 0110 3.75v12.5a.75.75 0 01-1.264.546L4.703 13H3.167a.75.75 0 01-.7-.48A6.985 6.985 0 012 10c0-.887.165-1.737.468-2.52a.75.75 0 01.7-.48h1.535l4.033-3.796a.75.75 0 01.811-.142zM13.28 7.22a.75.75 0 10-1.06 1.06L13.94 10l-1.72 1.72a.75.75 0 001.06 1.06L15 11.06l1.72 1.72a.75.75 0 101.06-1.06L16.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L15 8.94l-1.72-1.72z" }, child: [] }] })(t);
}
function At(t) {
  return Y({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M7 6C7.55228 6 8 6.44772 8 7V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V7C6 6.44772 6.44772 6 7 6ZM9.07869 12.4085C9.03208 12.3756 8.99144 12.3349 8.95854 12.2883C8.7993 12.0627 8.85309 11.7508 9.07869 11.5915L16.2117 6.55648C16.296 6.49693 16.3967 6.46496 16.5 6.46496C16.7761 6.46496 17 6.68882 17 6.96496V17.035C17 17.1383 16.968 17.239 16.9085 17.3234C16.7492 17.549 16.4373 17.6028 16.2117 17.4435L9.07869 12.4085Z" }, child: [] }] })(t);
}
function Dt(t) {
  return Y({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M7.78834 17.4435C7.70398 17.5031 7.60326 17.535 7.5 17.535C7.22386 17.535 7 17.3112 7 17.035V6.96496C7 6.8617 7.03197 6.76098 7.09152 6.67662C7.25076 6.45102 7.56274 6.39723 7.78834 6.55648L14.9213 11.5915C14.9679 11.6244 15.0086 11.665 15.0415 11.7117C15.2007 11.9373 15.1469 12.2492 14.9213 12.4085L7.78834 17.4435ZM16 7C16 6.44772 16.4477 6 17 6C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V7Z" }, child: [] }] })(t);
}
function Mt(t) {
  return Y({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M12 8.95439L17.6352 7.82736C19.0102 7.55235 20 6.34501 20 4.94274C20 3.08637 18.3017 1.69406 16.4813 2.05813L12.4117 2.87206C11.0094 3.15252 10 4.38376 10 5.8138V13.8895C9.41165 13.5492 8.72857 13.3544 8 13.3544C5.79086 13.3544 4 15.1453 4 17.3544C4 19.5635 5.79086 21.3544 8 21.3544C10.2091 21.3544 12 19.5635 12 17.3544V8.95439ZM16.8736 4.01929L12.8039 4.83322C12.3365 4.92671 12 5.33712 12 5.8138V6.91479L17.2429 5.8662C17.6831 5.77816 18 5.39165 18 4.94274C18 4.34846 17.4563 3.90274 16.8736 4.01929ZM10 17.3544C10 16.2498 9.10457 15.3544 8 15.3544C6.89543 15.3544 6 16.2498 6 17.3544C6 18.459 6.89543 19.3544 8 19.3544C9.10457 19.3544 10 18.459 10 17.3544Z", fill: "currentColor" }, child: [] }] })(t);
}
const Ze = bt(
  {
    selectedTrack: -1,
    isPlaying: !1,
    isMuted: !1,
    setSelectedTrack: () => {
    },
    setIsPlaying: () => {
    },
    setIsMuted: () => {
    }
  }
), Vt = {
  type: "playlist",
  name: "Liked Songs",
  creationDate: "12/12/2020",
  numTracks: 10,
  duration: "30 min",
  imageSrc: "https://res.cloudinary.com/dqriqmsdk/image/upload/v1704626899/bird-berry.%7E.e1a90b8aa388f4da20db23617643eda5.jpg"
}, Wt = {
  type: "playlist",
  name: "Playlist Name",
  numTracks: -1,
  duration: "[duration]"
}, zt = [
  {
    title: [
      {
        type: "text",
        content: "Sos",
        className: "title"
      },
      {
        type: "badge",
        content: "New",
        className: "new"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Timothy Fleet",
        className: "artist",
        link: "https://music.youtube.com/channel/UCmGqnW6VmhOV4KW67vhzPCA"
      },
      {
        type: "text",
        content: "&",
        className: "artist"
      },
      {
        type: "text",
        content: "Wayne Murray and company",
        className: "artist",
        link: "https://music.youtube.com/channel/UCkZXltuX3Rta9OiD-O505xg"
      }
    ],
    album: [
      {
        type: "text",
        content: "Vintage Radio: 1980s",
        className: "album"
      },
      {
        type: "badge",
        content: "Explicit",
        className: "explicit"
      }
    ],
    duration: "2:37"
  },
  {
    title: [
      {
        type: "text",
        content: "Fields of Blue",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Tennis",
        className: "artist"
      }
    ],
    album: [
      {
        type: "text",
        content: "Yours Conditionally",
        className: "album"
      }
    ],
    duration: "3:29"
  },
  {
    title: [
      {
        type: "text",
        content: "Forbidden Doors",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Tennis",
        className: "artist"
      }
    ],
    album: [
      {
        type: "text",
        content: "Forbidden Doors",
        className: "album"
      },
      {
        type: "badge",
        content: "Explicit",
        className: "explicit"
      }
    ],
    duration: "3:54"
  },
  {
    title: [
      {
        type: "text",
        content: "Show Me How",
        className: "title"
      },
      {
        type: "badge",
        content: "New",
        className: "new"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Men I Trust",
        className: "artist"
      }
    ],
    album: [
      {
        type: "text",
        content: "Show Me How",
        className: "album"
      }
    ],
    duration: "3:36"
  },
  {
    title: [
      {
        type: "text",
        content: "I Dont know You",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "The Marías",
        className: "artist",
        link: "https://music.youtube.com/channel/UCVV5M4OEFsKnB9HBhwOhHbA",
        externalLink: !0
      }
    ],
    album: [
      {
        type: "text",
        content: "Superclean, Vol. I",
        className: "album"
      }
    ],
    duration: "3:30"
  },
  {
    title: [
      {
        type: "text",
        content: "Lady Luck",
        className: "title"
      }
    ],
    artist: [
      {
        type: "badge",
        content: "New",
        className: "new"
      },
      {
        type: "text",
        content: "Nature TV",
        className: "artist"
      }
    ],
    album: [
      {
        type: "text",
        content: "Lady Luck EP",
        className: "album"
      }
    ],
    duration: "3:33"
  },
  {
    title: [
      {
        type: "text",
        content: "Alrighty Aphrodite",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Peach Pit",
        className: "artist"
      }
    ],
    album: [
      {
        type: "text",
        content: "Being So Normal",
        className: "album"
      }
    ],
    duration: "3:28"
  },
  {
    title: [
      {
        type: "text",
        content: "The Less I Know The Better",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Tame Impala",
        className: "artist"
      }
    ],
    album: [
      {
        type: "text",
        content: "Currents",
        className: "album"
      }
    ],
    duration: "3:39"
  },
  {
    title: [
      {
        type: "text",
        content: "Save a Prayer (2009 Remaster)",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Duran Duran",
        className: "artist"
      }
    ],
    album: [
      {
        type: "text",
        content: "Rio (Collector's Edition)",
        className: "album"
      },
      {
        type: "badge",
        content: "Explicit",
        className: "explicit"
      }
    ],
    duration: "12:00:37"
  },
  {
    title: [
      {
        type: "text",
        content: "Ladies Don't Play Guitar",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Tennis",
        className: "artist"
      }
    ],
    album: [
      {
        type: "text",
        content: "Yours Conditionally",
        className: "album"
      }
    ],
    duration: "13:29"
  }
], J = ({ textArray: t }) => /* @__PURE__ */ n.jsx(n.Fragment, { children: t.map((r, l) => r.type === "badge" ? /* @__PURE__ */ n.jsx("span", { className: "text badge " + r.className, style: r.style, children: r.content }, "badge-" + l) : /* @__PURE__ */ n.jsx("span", { className: "text pure " + r.className, style: r.style, children: r.link ? /* @__PURE__ */ n.jsx("a", { href: r.link, target: r.externalLink ? "_blank" : "_self", rel: r.externalLink ? "noopener noreferrer" : "", children: r.content }) : r.content }, "text-" + l)) }), Bt = ({ track: t, info: r }) => /* @__PURE__ */ n.jsxs("div", { className: "lt-info-card", children: [
  /* @__PURE__ */ n.jsxs("div", { className: "lt-info-panel", children: [
    /* @__PURE__ */ n.jsx("div", { className: "lt-info-title", children: /* @__PURE__ */ n.jsx("h1", { className: "text lt-info-title-h1", children: r.type === "playlist" ? /* @__PURE__ */ n.jsx("span", { className: "text pure", children: r.name }) : r.type === "album" ? /* @__PURE__ */ n.jsx(J, { textArray: t.album }) : /* @__PURE__ */ n.jsx(J, { textArray: t.artist }) }) }),
    r.type === "playlist" ? r.creationDate ? /* @__PURE__ */ n.jsx("div", { className: "lt-info-stats", children: /* @__PURE__ */ n.jsxs("span", { className: "text pure", children: [
      "Created on ",
      r.creationDate
    ] }) }) : null : r.type === "artist" ? /* @__PURE__ */ n.jsx("div", { className: "lt-info-stats", children: /* @__PURE__ */ n.jsx("span", { className: "text pure", children: r.genre }) }) : /* @__PURE__ */ n.jsxs("div", { className: "lt-info-stats", children: [
      /* @__PURE__ */ n.jsx("span", { className: "text pure", children: r.releaseDate }),
      /* @__PURE__ */ n.jsx("span", { className: "cdot", style: { fontWeight: "bold", margin: "1px" }, children: "·" }),
      /* @__PURE__ */ n.jsx("span", { className: "text pure", children: r.genre })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "lt-info-stats", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "text number", children: [
        r.numTracks,
        " tracks"
      ] }),
      /* @__PURE__ */ n.jsx("span", { className: "cdot number", style: { fontWeight: "bold", margin: "1px" }, children: "·" }),
      /* @__PURE__ */ n.jsx("span", { className: "text pure number", children: r.type === "artist" ? r.numAlbums : r.duration })
    ] })
  ] }),
  r != null && r.imageSrc || t != null && t.imageSrc ? /* @__PURE__ */ n.jsx("div", { className: "lt-info-img-cont", children: /* @__PURE__ */ n.jsx("img", { className: "lt-info-img", src: r.imageSrc ?? t.imageSrc, alt: "list image" }) }) : /* @__PURE__ */ n.jsx("div", { className: "lt-info-art-placeholder-cont", children: /* @__PURE__ */ n.jsx("div", { className: "lt-info-placeholder", style: { animation: "fadeIn 1s ease-in-out", background: "repeating-linear-gradient( 45deg, #22222266, #22222266 6px, #22222200 6px, #22222200 12px)" }, children: /* @__PURE__ */ n.jsx("span", { children: /* @__PURE__ */ n.jsx(Mt, { className: "lt-info-placeholder-icon" }) }) }) })
] }), Ht = ({ muted: t = !1, playing: r = !1, nextCallback: l, prevCallback: s, playCallback: m, muteCallback: f }) => /* @__PURE__ */ n.jsxs("div", { className: "controller-panel", children: [
  /* @__PURE__ */ n.jsx("button", { className: "btn mute-btn btn-primary", onClick: () => f && f(!t), children: t ? /* @__PURE__ */ n.jsx(Ft, { className: "action-icon mute-icon" }) : /* @__PURE__ */ n.jsx(Lt, { className: "action-icon unmute-icon" }) }),
  /* @__PURE__ */ n.jsx("button", { className: "btn back-btn btn-primary", onClick: s, children: /* @__PURE__ */ n.jsx(At, { className: "action-icon prev-icon" }) }),
  /* @__PURE__ */ n.jsx("button", { className: "btn forward-btn btn-primary", onClick: l, children: /* @__PURE__ */ n.jsx(Dt, { className: "action-icon next-icon" }) }),
  /* @__PURE__ */ n.jsx("button", { className: "btn play-btn", onClick: () => m && m(!r), children: r ? /* @__PURE__ */ n.jsx(Ot, { className: "action-icon pause-icon" }) : /* @__PURE__ */ n.jsx(Pt, { className: "action-icon play-icon" }) })
] }), Yt = ({ info: t = Wt, track: r, muted: l = !1, playing: s = !1, noControls: m = !1, snapTo: f = "large", nextCallback: _, prevCallback: p, playCallback: y, muteCallback: E, children: N }) => {
  const C = f === "tiny" ? "92px" : f === "small" ? "11.65rem" : f === "medium" ? "16rem" : f === "large" ? "21.35rem" : f;
  return /* @__PURE__ */ n.jsxs("div", { className: "list-header", style: { maxHeight: C, height: C }, children: [
    N ? /* @__PURE__ */ n.jsx("div", { className: "lh-children-cont", children: N }) : /* @__PURE__ */ n.jsx("div", { className: "lh-children-cont lh-listinfocard-cont", children: /* @__PURE__ */ n.jsx(Bt, { track: r, info: t }) }),
    m ? null : /* @__PURE__ */ n.jsx(Ht, { track: r, muted: l, playing: s, nextCallback: _, prevCallback: p, playCallback: y, muteCallback: E })
  ] });
}, $t = ({ track: t, trackNumber: r, selected: l = !1, playIcon: s = !0, onClick: m }) => /* @__PURE__ */ n.jsxs("div", { className: "track " + (l ? "selected" : ""), onClick: m, children: [
  /* @__PURE__ */ n.jsx("div", { className: "track-number", children: l ? s ? /* @__PURE__ */ n.jsx(ke, { className: "action-icon", style: { display: "unset" } }) : /* @__PURE__ */ n.jsx(It, { className: "action-icon", style: { display: "unset" } }) : r ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("span", { className: "text number list-number", children: r }),
    /* @__PURE__ */ n.jsx(ke, { className: "action-icon" })
  ] }) : /* @__PURE__ */ n.jsx(ke, { className: "action-icon" }) }),
  /* @__PURE__ */ n.jsxs("div", { className: "info-cont", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "main-info-cont", children: [
      /* @__PURE__ */ n.jsx("div", { className: "title-cont", children: /* @__PURE__ */ n.jsx(J, { textArray: t.title }) }),
      /* @__PURE__ */ n.jsxs("div", { className: "meta-cont", children: [
        /* @__PURE__ */ n.jsx(J, { textArray: t.artist }),
        /* @__PURE__ */ n.jsx("span", { className: "cdot", style: { fontWeight: "bold", margin: "1px" }, children: "·" }),
        /* @__PURE__ */ n.jsx(J, { textArray: t.album })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "lg-meta-cont", children: /* @__PURE__ */ n.jsx("div", { className: "meta-artist", children: /* @__PURE__ */ n.jsx(J, { textArray: t.artist }) }) }),
    /* @__PURE__ */ n.jsx("div", { className: "lg-meta-cont", children: /* @__PURE__ */ n.jsx("div", { className: "meta-album", children: /* @__PURE__ */ n.jsx(J, { textArray: t.album }) }) })
  ] }),
  /* @__PURE__ */ n.jsx("div", { className: "duration-cont", children: /* @__PURE__ */ n.jsx("span", { className: "text pure number", children: t.duration }) })
] }), Ut = ({ tracks: t = zt, listInfo: r = Vt, prevBufferTime: l = 1500, playerMode: s, noControls: m = !1, noHeader: f = !1, loop: _ = !1, continueOn: p = !1, playCallback: y, pauseCallback: E, muteCallback: N, children: C }) => {
  const [w, M] = V(!1), { selectedTrack: b, setSelectedTrack: P, isPlaying: F, setIsPlaying: A, isMuted: v, setIsMuted: x } = Nt(Ze), $ = ve(null), K = ve(!0), G = ve(!0);
  console.log("selectedTrack: ", b);
  const O = (g = !0) => {
    A(!0), y && y(b, g), g || (K.current = !0, M(!w));
  }, q = () => {
    A(!1), E && E();
  }, W = (g) => {
    x(g), N && N(g);
  }, z = (g) => {
    b === -1 ? g && P(0) : g ? O() : q();
  }, U = (g) => {
    g === b ? z(!F) : G.current = !1, P(g);
  }, X = () => {
    K.current || !F ? _ ? P((b - 1 + t.length) % t.length) : b === 0 || P(b - 1) : O(!1);
  }, S = () => {
    !_ && b >= t.length - 1 ? p && P(b + 1) : P((b + 1) % t.length);
  }, D = (g) => {
    var Z;
    const R = (Z = $.current) == null ? void 0 : Z.children[g];
    R == null || R.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return Re(() => {
    b !== -1 && (G.current && !(s === "tinyplayer" || s === "miniplayer") && D(b), G.current = !0, O(!1));
  }, [b]), Re(() => {
    if (F) {
      const g = setTimeout(() => {
        K.current = !1;
      }, l);
      return () => clearTimeout(g);
    }
  }, [w, l]), /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsxs("div", { className: "list-player", style: s === "tinyplayer" ? { maxHeight: "92px", maxWidth: "315px" } : s === "miniplayer" ? { maxHeight: "92px", maxWidth: "100%" } : { maxHeight: "100%", maxWidth: "100%" }, children: [
    f ? null : /* @__PURE__ */ n.jsx(Yt, { info: r, track: t[b === -1 ? 0 : b], snapTo: s === "tiny" ? "tiny" : s === "small" ? "small" : s === "medium" ? "medium" : s === "large" ? "large" : s === void 0 ? void 0 : s, noControls: m, muted: v, playing: F, muteCallback: W, playCallback: z, nextCallback: S, prevCallback: X, children: C }),
    /* @__PURE__ */ n.jsx("div", { ref: $, className: "list-body", children: t.map((g, R) => /* @__PURE__ */ n.jsx($t, { track: g, trackNumber: R + 1, onClick: () => U(R), selected: R === b, playIcon: !F || R !== b }, "track-" + R)) })
  ] }) });
}, Kt = {
  type: "playlist",
  name: "Royalty Free Playlist",
  creationDate: "1/16/2024",
  numTracks: 10,
  duration: "24 min"
}, Gt = [
  {
    title: [
      {
        type: "text",
        content: "Smoke",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Oleg Fedak",
        className: "artist",
        link: "https://pixabay.com/users/soulprodmusic-30064790/"
      }
    ],
    album: [
      {
        type: "text",
        content: "SoulProdMusic",
        className: "album"
      }
    ],
    duration: "1:58",
    imageSrc: "https://cdn.pixabay.com/audio/2023/03/19/12-27-22-207_200x200.jpg"
  },
  {
    title: [
      {
        type: "text",
        content: "My Universe",
        className: "title"
      },
      {
        type: "badge",
        content: "New",
        className: "new"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Peter Nesterouk",
        className: "artist",
        link: "https://pixabay.com/users/nesterouk-34392616/"
      }
    ],
    album: [
      {
        type: "text",
        content: "Nesterouk",
        className: "album"
      }
    ],
    duration: "2:27",
    imageSrc: "https://cdn.pixabay.com/audio/2023/04/24/09-30-22-297_200x200.jpg"
  },
  {
    title: [
      {
        type: "text",
        content: "Good Night",
        className: "title"
      },
      {
        type: "badge",
        content: "New",
        className: "new"
      }
    ],
    artist: [
      {
        type: "text",
        content: "FASS",
        className: "artist",
        link: "https://pixabay.com/users/fassounds-3433550/"
      }
    ],
    album: [
      {
        type: "text",
        content: "FASSounds",
        className: "album"
      }
    ],
    duration: "2:27",
    imageSrc: "https://cdn.pixabay.com/audio/2023/07/30/13-02-32-179_200x200.jpg"
  },
  {
    title: [
      {
        type: "text",
        content: "Tokyo Cafe",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "TVARI",
        className: "artist"
      }
    ],
    album: [
      {
        type: "text",
        content: "TVARI",
        className: "album"
      },
      {
        type: "badge",
        content: "E",
        className: "explicit"
      }
    ],
    duration: "2:33",
    imageSrc: "https://cdn.pixabay.com/audio/2023/07/22/02-53-18-138_200x200.jpg"
  },
  {
    title: [
      {
        type: "text",
        content: "Hear Me",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Keyframe Audio ",
        className: "artist",
        link: "https://pixabay.com/users/keyframe_audio-32058364/",
        externalLink: !0
      }
    ],
    album: [
      {
        type: "text",
        content: "Seductive Chill Hip Hop Instrumental",
        className: "album"
      }
    ],
    duration: "2:46",
    imageSrc: "https://cdn.pixabay.com/audio/2023/01/15/23-41-58-198_200x200.jpg"
  },
  {
    title: [
      {
        type: "text",
        content: "Baby Mandala",
        className: "title"
      }
    ],
    artist: [
      {
        type: "badge",
        content: "New",
        className: "new"
      },
      {
        type: "text",
        content: "Praz Khanal",
        className: "artist",
        link: "https://pixabay.com/users/prazkhanal-24653570/"
      }
    ],
    album: [
      {
        type: "text",
        content: "prazkhanal",
        className: "album"
      }
    ],
    duration: "3:11",
    imageSrc: "https://cdn.pixabay.com/audio/2023/10/03/03-34-18-650_200x200.jpg"
  },
  {
    title: [
      {
        type: "text",
        content: "Midnight Forest",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Syouki Takahashi",
        className: "artist",
        link: "https://pixabay.com/users/syouki_takahashi-3820204/"
      }
    ],
    album: [
      {
        type: "text",
        content: "Royalty Free Collection",
        className: "album"
      }
    ],
    duration: "2:48",
    imageSrc: "https://cdn.pixabay.com/audio/2024/01/05/01-14-43-61_200x200.jpg"
  },
  {
    title: [
      {
        type: "text",
        content: "Separation",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "William King",
        className: "artist",
        link: "https://pixabay.com/users/william_king-33448498/"
      }
    ],
    album: [
      {
        type: "text",
        content: "Royalty Free Music",
        className: "album"
      }
    ],
    duration: "2:19",
    imageSrc: "https://cdn.pixabay.com/audio/2024/01/10/15-04-26-897_200x200.jpg"
  },
  {
    title: [
      {
        type: "text",
        content: "Drive Breakbeat",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Zakhar Dziubenko",
        className: "artist",
        link: "https://pixabay.com/users/rockot-1947599/"
      }
    ],
    album: [
      {
        type: "text",
        content: "Rockot",
        className: "album"
      }
    ],
    duration: "1:49",
    imageSrc: "https://cdn.pixabay.com/audio/2023/10/24/15-08-22-671_200x200.jpg"
  },
  {
    title: [
      {
        type: "text",
        content: "Glossy",
        className: "title"
      }
    ],
    artist: [
      {
        type: "text",
        content: "Yrii Semchyshyn",
        className: "artist",
        link: "https://pixabay.com/users/coma-media-24399569/"
      }
    ],
    album: [
      {
        type: "text",
        content: "Coma Media",
        className: "album"
      }
    ],
    duration: "1:33",
    imageSrc: "https://cdn.pixabay.com/photo/2018/07/14/22/53/currants-3538617_1280.jpg"
  }
], qt = !1, Jt = () => {
  const [t, r] = V(-1), [l, s] = V(!1), [m, f] = V(!1), [_, p] = V("react-playlist-player"), [y, E] = V("large"), [N, C] = V(!1), [w, M] = V(!1), [b, P] = V(!1), [F, A] = V(!qt), v = ve(null), x = 1e3, $ = ["/free-audio/tokyo cafe.mp3", "/free-audio/my universe.mp3", "/free-audio/smoke.mp3", "/free-audio/good night.mp3", "/free-audio/hear me.mp3", "/free-audio/baby mandala.mp3", "/free-audio/midnight forest.mp3", "/free-audio/separation.mp3", "/free-audio/drive breakbeat.mp3", "/free-audio/glossy.mp3"], K = (O, q) => {
    var W, z, U;
    O === t && !q ? ((W = v.current) == null || W.load(), (z = v.current) == null || z.play()) : (U = v.current) == null || U.play();
  }, G = () => {
    var O;
    (O = v.current) == null || O.pause();
  };
  return Re(() => {
    if (!F)
      return;
    const O = setTimeout(() => {
      p("a flexible react playlist controller");
    }, 3 * x), q = setTimeout(() => {
      p("that is fully controllable via context ... playing track 4 now ...");
    }, 7 * x), W = setTimeout(() => {
      r(3);
    }, 8 * x), z = setTimeout(() => {
      p("stopping playback ...");
    }, 12 * x), U = setTimeout(() => {
      var I;
      s(!1), (I = v.current) == null || I.pause();
    }, 13 * x), X = setTimeout(() => {
      p("ListPlayer is fully responsive, and will adapt to the size of its container");
    }, 15 * x), S = setTimeout(() => {
      C(!0);
    }, 19 * x), D = setTimeout(() => {
      p("but it also comes with several built-in sizes, such as this one called 'miniplayer'");
    }, 23 * x), g = setTimeout(() => {
      E("miniplayer");
    }, 25 * x), R = setTimeout(() => {
      p("and an even smaller one called 'tinyplayer'");
    }, 30 * x), Z = setTimeout(() => {
      E("tinyplayer");
    }, 31 * x), le = setTimeout(() => {
      p("The player does not play media, it just provides a user interface to control playback.");
    }, 35 * x), oe = setTimeout(() => {
      var I;
      C(!1), s(!0), (I = v.current) == null || I.play(), f(!0), p("This means that you can combine it with any media player you like, such as react-player.");
    }, 40 * x), ce = setTimeout(() => {
      var I;
      s(!1), (I = v.current) == null || I.pause(), f(!1), p("Since ListPlayer accepts a child component, you can use it to wrap your media player");
    }, 45 * x), ue = setTimeout(() => {
      p("or you can provide your own full header component to replace the default one.");
    }, 51 * x), de = setTimeout(() => {
      E("medium");
    }, 54 * x), me = setTimeout(() => {
      M(!0);
    }, 57 * x), be = setTimeout(() => {
      p("But what if you want to put your header/controls somewhere away from the playlist?");
    }, 62 * x), Ne = setTimeout(() => {
      p("You can do that too. To make the ListPlayer headless, just set the noHeader prop to true.");
    }, 68 * x), ae = setTimeout(() => {
      P(!0);
    }, 72 * x), re = setTimeout(() => {
      p("That's it! Feel free to play around with the ListPlayer below."), M(!1);
    }, 78 * x), Q = setTimeout(() => {
      p("react-playlist-player"), P(!1);
    }, 82 * x);
    return () => {
      clearTimeout(O), clearTimeout(q), clearTimeout(W), clearTimeout(z), clearTimeout(U), clearTimeout(X), clearTimeout(S), clearTimeout(D), clearTimeout(g), clearTimeout(R), clearTimeout(Z), clearTimeout(le), clearTimeout(oe), clearTimeout(ce), clearTimeout(ue), clearTimeout(de), clearTimeout(me), clearTimeout(be), clearTimeout(Ne), clearTimeout(ae), clearTimeout(re), clearTimeout(Q);
    };
  }, [F]), /* @__PURE__ */ n.jsxs(Ze.Provider, { value: { selectedTrack: t, setSelectedTrack: r, isPlaying: l, setIsPlaying: s, isMuted: m, setIsMuted: f }, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "app", children: [
      /* @__PURE__ */ n.jsx("div", { className: "explanitory-text", style: { animation: "fadeIn 1s ease-in-out" }, children: _ }, _),
      /* @__PURE__ */ n.jsx("div", { className: "listplayer-cont", style: N ? { paddingLeft: "20%", paddingRight: "20%" } : void 0, children: /* @__PURE__ */ n.jsx(Ut, { loop: !0, tracks: Gt, listInfo: Kt, playerMode: y, noControls: w, noHeader: b, playCallback: K, pauseCallback: G, children: w ? /* @__PURE__ */ n.jsx("div", { className: "custom-hdr-placeholder", style: { animation: "fadeIn 1s ease-in-out", background: "repeating-linear-gradient( 45deg, #22222255, #22222255 10px, #22222200 10px, #22222200 20px)" }, children: "[your custom header here]" }) : void 0 }) })
    ] }),
    /* @__PURE__ */ n.jsx(
      "audio",
      {
        ref: v,
        src: t < $.length ? $[t % $.length] : void 0,
        muted: m,
        onEnded: () => {
          r(t + 1);
        }
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        className: "skip-intro",
        onClick: () => {
          p("react-playlist-player"), E("large"), P(!1), M(!1), C(!1), A(!1);
        },
        style: F ? { animation: "fadeInUnfocused 1s ease-in-out" } : { display: "none" },
        children: "SKIP INTRO"
      }
    )
  ] });
};
export {
  Jt as Demo,
  Ht as ListControls,
  Yt as ListHeader,
  Bt as ListInfoCard,
  Ut as ListPlayer,
  Ze as ListPlayerContext
};
