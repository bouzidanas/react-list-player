function Zr(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Bt = { exports: {} }, Xe = {}, Ht = { exports: {} }, et = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
et.exports;
var vr;
function Xr() {
  return vr || (vr = 1, function(s, i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = "18.2.0", p = Symbol.for("react.element"), j = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), q = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), ce = Symbol.for("react.offscreen"), te = Symbol.iterator, pe = "@@iterator";
      function P(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = te && e[te] || e[pe];
        return typeof t == "function" ? t : null;
      }
      var A = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {
        transition: null
      }, B = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, re = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ne = {}, me = null;
      function ve(e) {
        me = e;
      }
      ne.setExtraStackFrame = function(e) {
        me = e;
      }, ne.getCurrentStack = null, ne.getStackAddendum = function() {
        var e = "";
        me && (e += me);
        var t = ne.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var ye = !1, ge = !1, _e = !1, se = !1, le = !1, C = {
        ReactCurrentDispatcher: A,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: re
      };
      C.ReactDebugCurrentFrame = ne, C.ReactCurrentActQueue = B;
      function G(e) {
        {
          for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            a[o - 1] = arguments[o];
          be("warn", e, a);
        }
      }
      function h(e) {
        {
          for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            a[o - 1] = arguments[o];
          be("error", e, a);
        }
      }
      function be(e, t, a) {
        {
          var o = C.ReactDebugCurrentFrame, l = o.getStackAddendum();
          l !== "" && (t += "%s", a = a.concat([l]));
          var g = a.map(function(y) {
            return String(y);
          });
          g.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, g);
        }
      }
      var Re = {};
      function n(e, t) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", l = o + "." + t;
          if (Re[l])
            return;
          h("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, o), Re[l] = !0;
        }
      }
      var f = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, t, a) {
          n(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, t, a, o) {
          n(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, t, a, o) {
          n(e, "setState");
        }
      }, b = Object.assign, O = {};
      Object.freeze(O);
      function x(e, t, a) {
        this.props = e, this.context = t, this.refs = O, this.updater = a || f;
      }
      x.prototype.isReactComponent = {}, x.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, x.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var V = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, U = function(e, t) {
          Object.defineProperty(x.prototype, e, {
            get: function() {
              G("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var L in V)
          V.hasOwnProperty(L) && U(L, V[L]);
      }
      function D() {
      }
      D.prototype = x.prototype;
      function W(e, t, a) {
        this.props = e, this.context = t, this.refs = O, this.updater = a || f;
      }
      var we = W.prototype = new D();
      we.constructor = W, b(we, x.prototype), we.isPureReactComponent = !0;
      function Et() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var tt = Array.isArray;
      function We(e) {
        return tt(e);
      }
      function Rt(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Ue(e) {
        try {
          return Ne(e), !1;
        } catch {
          return !0;
        }
      }
      function Ne(e) {
        return "" + e;
      }
      function Pe(e) {
        if (Ue(e))
          return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rt(e)), Ne(e);
      }
      function rt(e, t, a) {
        var o = e.displayName;
        if (o)
          return o;
        var l = t.displayName || t.name || "";
        return l !== "" ? a + "(" + l + ")" : a;
      }
      function Ae(e) {
        return e.displayName || "Context";
      }
      function Ee(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case R:
            return "Fragment";
          case j:
            return "Portal";
          case w:
            return "Profiler";
          case ee:
            return "StrictMode";
          case z:
            return "Suspense";
          case oe:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case q:
              var t = e;
              return Ae(t) + ".Consumer";
            case k:
              var a = e;
              return Ae(a._context) + ".Provider";
            case M:
              return rt(e, e.render, "ForwardRef");
            case ae:
              var o = e.displayName || null;
              return o !== null ? o : Ee(e.type) || "Memo";
            case F: {
              var l = e, g = l._payload, y = l._init;
              try {
                return Ee(y(g));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ie = Object.prototype.hasOwnProperty, Ye = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, nt, at, ze;
      ze = {};
      function qe(e) {
        if (Ie.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Se(e) {
        if (Ie.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Ct(e, t) {
        var a = function() {
          nt || (nt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function it(e, t) {
        var a = function() {
          at || (at = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function ot(e) {
        if (typeof e.ref == "string" && re.current && e.__self && re.current.stateNode !== e.__self) {
          var t = Ee(re.current.type);
          ze[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), ze[t] = !0);
        }
      }
      var De = function(e, t, a, o, l, g, y) {
        var _ = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: p,
          // Built-in properties that belong on the element
          type: e,
          key: t,
          ref: a,
          props: y,
          // Record the component responsible for creating this element.
          _owner: g
        };
        return _._store = {}, Object.defineProperty(_._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(_, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(_, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: l
        }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
      };
      function Tt(e, t, a) {
        var o, l = {}, g = null, y = null, _ = null, N = null;
        if (t != null) {
          qe(t) && (y = t.ref, ot(t)), Se(t) && (Pe(t.key), g = "" + t.key), _ = t.__self === void 0 ? null : t.__self, N = t.__source === void 0 ? null : t.__source;
          for (o in t)
            Ie.call(t, o) && !Ye.hasOwnProperty(o) && (l[o] = t[o]);
        }
        var Y = arguments.length - 2;
        if (Y === 1)
          l.children = a;
        else if (Y > 1) {
          for (var H = Array(Y), K = 0; K < Y; K++)
            H[K] = arguments[K + 2];
          Object.freeze && Object.freeze(H), l.children = H;
        }
        if (e && e.defaultProps) {
          var Z = e.defaultProps;
          for (o in Z)
            l[o] === void 0 && (l[o] = Z[o]);
        }
        if (g || y) {
          var ie = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && Ct(l, ie), y && it(l, ie);
        }
        return De(e, g, y, _, N, re.current, l);
      }
      function wt(e, t) {
        var a = De(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function St(e, t, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, l = b({}, e.props), g = e.key, y = e.ref, _ = e._self, N = e._source, Y = e._owner;
        if (t != null) {
          qe(t) && (y = t.ref, Y = re.current), Se(t) && (Pe(t.key), g = "" + t.key);
          var H;
          e.type && e.type.defaultProps && (H = e.type.defaultProps);
          for (o in t)
            Ie.call(t, o) && !Ye.hasOwnProperty(o) && (t[o] === void 0 && H !== void 0 ? l[o] = H[o] : l[o] = t[o]);
        }
        var K = arguments.length - 2;
        if (K === 1)
          l.children = a;
        else if (K > 1) {
          for (var Z = Array(K), ie = 0; ie < K; ie++)
            Z[ie] = arguments[ie + 2];
          l.children = Z;
        }
        return De(e.type, g, y, _, N, Y, l);
      }
      function je(e) {
        return typeof e == "object" && e !== null && e.$$typeof === p;
      }
      var st = ".", jt = ":";
      function kt(e) {
        var t = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(t, function(l) {
          return a[l];
        });
        return "$" + o;
      }
      var Be = !1, ut = /\/+/g;
      function Ce(e) {
        return e.replace(ut, "$&/");
      }
      function Fe(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (Pe(e.key), kt("" + e.key)) : t.toString(36);
      }
      function ke(e, t, a, o, l) {
        var g = typeof e;
        (g === "undefined" || g === "boolean") && (e = null);
        var y = !1;
        if (e === null)
          y = !0;
        else
          switch (g) {
            case "string":
            case "number":
              y = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case p:
                case j:
                  y = !0;
              }
          }
        if (y) {
          var _ = e, N = l(_), Y = o === "" ? st + Fe(_, 0) : o;
          if (We(N)) {
            var H = "";
            Y != null && (H = Ce(Y) + "/"), ke(N, t, H, "", function(Jr) {
              return Jr;
            });
          } else
            N != null && (je(N) && (N.key && (!_ || _.key !== N.key) && Pe(N.key), N = wt(
              N,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (N.key && (!_ || _.key !== N.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Ce("" + N.key) + "/"
              ) : "") + Y
            )), t.push(N));
          return 1;
        }
        var K, Z, ie = 0, de = o === "" ? st : o + jt;
        if (We(e))
          for (var bt = 0; bt < e.length; bt++)
            K = e[bt], Z = de + Fe(K, bt), ie += ke(K, t, a, Z, l);
        else {
          var Yt = P(e);
          if (typeof Yt == "function") {
            var pr = e;
            Yt === pr.entries && (Be || G("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Be = !0);
            for (var qr = Yt.call(pr), mr, Gr = 0; !(mr = qr.next()).done; )
              K = mr.value, Z = de + Fe(K, Gr++), ie += ke(K, t, a, Z, l);
          } else if (g === "object") {
            var yr = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (yr === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : yr) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ie;
      }
      function Le(e, t, a) {
        if (e == null)
          return e;
        var o = [], l = 0;
        return ke(e, o, "", "", function(g) {
          return t.call(a, g, l++);
        }), o;
      }
      function Ot(e) {
        var t = 0;
        return Le(e, function() {
          t++;
        }), t;
      }
      function lt(e, t, a) {
        Le(e, function() {
          t.apply(this, arguments);
        }, a);
      }
      function Nt(e) {
        return Le(e, function(t) {
          return t;
        }) || [];
      }
      function ct(e) {
        if (!je(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ft(e) {
        var t = {
          $$typeof: q,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        t.Provider = {
          $$typeof: k,
          _context: t
        };
        var a = !1, o = !1, l = !1;
        {
          var g = {
            $$typeof: q,
            _context: t
          };
          Object.defineProperties(g, {
            Provider: {
              get: function() {
                return o || (o = !0, h("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
              },
              set: function(y) {
                t.Provider = y;
              }
            },
            _currentValue: {
              get: function() {
                return t._currentValue;
              },
              set: function(y) {
                t._currentValue = y;
              }
            },
            _currentValue2: {
              get: function() {
                return t._currentValue2;
              },
              set: function(y) {
                t._currentValue2 = y;
              }
            },
            _threadCount: {
              get: function() {
                return t._threadCount;
              },
              set: function(y) {
                t._threadCount = y;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, h("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), t.Consumer;
              }
            },
            displayName: {
              get: function() {
                return t.displayName;
              },
              set: function(y) {
                l || (G("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", y), l = !0);
              }
            }
          }), t.Consumer = g;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var Me = -1, Ge = 0, Je = 1, Pt = 2;
      function At(e) {
        if (e._status === Me) {
          var t = e._result, a = t();
          if (a.then(function(g) {
            if (e._status === Ge || e._status === Me) {
              var y = e;
              y._status = Je, y._result = g;
            }
          }, function(g) {
            if (e._status === Ge || e._status === Me) {
              var y = e;
              y._status = Pt, y._result = g;
            }
          }), e._status === Me) {
            var o = e;
            o._status = Ge, o._result = a;
          }
        }
        if (e._status === Je) {
          var l = e._result;
          return l === void 0 && h(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, l), "default" in l || h(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, l), l.default;
        } else
          throw e._result;
      }
      function It(e) {
        var t = {
          // We use these fields to store the result.
          _status: Me,
          _result: e
        }, a = {
          $$typeof: F,
          _payload: t,
          _init: At
        };
        {
          var o, l;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(g) {
                h("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = g, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return l;
              },
              set: function(g) {
                h("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), l = g, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function Dt(e) {
        e != null && e.$$typeof === ae ? h("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? h("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && h("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && h("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var t = {
          $$typeof: M,
          render: e
        };
        {
          var a;
          Object.defineProperty(t, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return t;
      }
      var r;
      r = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === R || e === w || le || e === ee || e === z || e === oe || se || e === ce || ye || ge || _e || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === ae || e.$$typeof === k || e.$$typeof === q || e.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === r || e.getModuleId !== void 0));
      }
      function d(e, t) {
        u(e) || h("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: ae,
          type: e,
          compare: t === void 0 ? null : t
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(l) {
              o = l, !e.name && !e.displayName && (e.displayName = l);
            }
          });
        }
        return a;
      }
      function m() {
        var e = A.current;
        return e === null && h(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function I(e) {
        var t = m();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? h("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && h("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return t.useContext(e);
      }
      function $(e) {
        var t = m();
        return t.useState(e);
      }
      function S(e, t, a) {
        var o = m();
        return o.useReducer(e, t, a);
      }
      function E(e) {
        var t = m();
        return t.useRef(e);
      }
      function fe(e, t) {
        var a = m();
        return a.useEffect(e, t);
      }
      function J(e, t) {
        var a = m();
        return a.useInsertionEffect(e, t);
      }
      function X(e, t) {
        var a = m();
        return a.useLayoutEffect(e, t);
      }
      function he(e, t) {
        var a = m();
        return a.useCallback(e, t);
      }
      function Oe(e, t) {
        var a = m();
        return a.useMemo(e, t);
      }
      function dt(e, t, a) {
        var o = m();
        return o.useImperativeHandle(e, t, a);
      }
      function xe(e, t) {
        {
          var a = m();
          return a.useDebugValue(e, t);
        }
      }
      function Tr() {
        var e = m();
        return e.useTransition();
      }
      function wr(e) {
        var t = m();
        return t.useDeferredValue(e);
      }
      function Sr() {
        var e = m();
        return e.useId();
      }
      function jr(e, t, a) {
        var o = m();
        return o.useSyncExternalStore(e, t, a);
      }
      var Ze = 0, Kt, qt, Gt, Jt, Zt, Xt, Qt;
      function er() {
      }
      er.__reactDisabledLog = !0;
      function kr() {
        {
          if (Ze === 0) {
            Kt = console.log, qt = console.info, Gt = console.warn, Jt = console.error, Zt = console.group, Xt = console.groupCollapsed, Qt = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: er,
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
          Ze++;
        }
      }
      function Or() {
        {
          if (Ze--, Ze === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: b({}, e, {
                value: Kt
              }),
              info: b({}, e, {
                value: qt
              }),
              warn: b({}, e, {
                value: Gt
              }),
              error: b({}, e, {
                value: Jt
              }),
              group: b({}, e, {
                value: Zt
              }),
              groupCollapsed: b({}, e, {
                value: Xt
              }),
              groupEnd: b({}, e, {
                value: Qt
              })
            });
          }
          Ze < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ft = C.ReactCurrentDispatcher, Lt;
      function pt(e, t, a) {
        {
          if (Lt === void 0)
            try {
              throw Error();
            } catch (l) {
              var o = l.stack.trim().match(/\n( *(at )?)/);
              Lt = o && o[1] || "";
            }
          return `
` + Lt + e;
        }
      }
      var Mt = !1, mt;
      {
        var Nr = typeof WeakMap == "function" ? WeakMap : Map;
        mt = new Nr();
      }
      function tr(e, t) {
        if (!e || Mt)
          return "";
        {
          var a = mt.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Mt = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var g;
        g = Ft.current, Ft.current = null, kr();
        try {
          if (t) {
            var y = function() {
              throw Error();
            };
            if (Object.defineProperty(y.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(y, []);
              } catch (de) {
                o = de;
              }
              Reflect.construct(e, [], y);
            } else {
              try {
                y.call();
              } catch (de) {
                o = de;
              }
              e.call(y.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (de) {
              o = de;
            }
            e();
          }
        } catch (de) {
          if (de && o && typeof de.stack == "string") {
            for (var _ = de.stack.split(`
`), N = o.stack.split(`
`), Y = _.length - 1, H = N.length - 1; Y >= 1 && H >= 0 && _[Y] !== N[H]; )
              H--;
            for (; Y >= 1 && H >= 0; Y--, H--)
              if (_[Y] !== N[H]) {
                if (Y !== 1 || H !== 1)
                  do
                    if (Y--, H--, H < 0 || _[Y] !== N[H]) {
                      var K = `
` + _[Y].replace(" at new ", " at ");
                      return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), typeof e == "function" && mt.set(e, K), K;
                    }
                  while (Y >= 1 && H >= 0);
                break;
              }
          }
        } finally {
          Mt = !1, Ft.current = g, Or(), Error.prepareStackTrace = l;
        }
        var Z = e ? e.displayName || e.name : "", ie = Z ? pt(Z) : "";
        return typeof e == "function" && mt.set(e, ie), ie;
      }
      function Pr(e, t, a) {
        return tr(e, !1);
      }
      function Ar(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function yt(e, t, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return tr(e, Ar(e));
        if (typeof e == "string")
          return pt(e);
        switch (e) {
          case z:
            return pt("Suspense");
          case oe:
            return pt("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case M:
              return Pr(e.render);
            case ae:
              return yt(e.type, t, a);
            case F: {
              var o = e, l = o._payload, g = o._init;
              try {
                return yt(g(l), t, a);
              } catch {
              }
            }
          }
        return "";
      }
      var rr = {}, nr = C.ReactDebugCurrentFrame;
      function vt(e) {
        if (e) {
          var t = e._owner, a = yt(e.type, e._source, t ? t.type : null);
          nr.setExtraStackFrame(a);
        } else
          nr.setExtraStackFrame(null);
      }
      function Ir(e, t, a, o, l) {
        {
          var g = Function.call.bind(Ie);
          for (var y in e)
            if (g(e, y)) {
              var _ = void 0;
              try {
                if (typeof e[y] != "function") {
                  var N = Error((o || "React class") + ": " + a + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw N.name = "Invariant Violation", N;
                }
                _ = e[y](t, y, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Y) {
                _ = Y;
              }
              _ && !(_ instanceof Error) && (vt(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, y, typeof _), vt(null)), _ instanceof Error && !(_.message in rr) && (rr[_.message] = !0, vt(l), h("Failed %s type: %s", a, _.message), vt(null));
            }
        }
      }
      function He(e) {
        if (e) {
          var t = e._owner, a = yt(e.type, e._source, t ? t.type : null);
          ve(a);
        } else
          ve(null);
      }
      var $t;
      $t = !1;
      function ar() {
        if (re.current) {
          var e = Ee(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Dr(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + t + ":" + a + ".";
        }
        return "";
      }
      function Fr(e) {
        return e != null ? Dr(e.__source) : "";
      }
      var ir = {};
      function Lr(e) {
        var t = ar();
        if (!t) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
      function or(e, t) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Lr(t);
          if (!ir[a]) {
            ir[a] = !0;
            var o = "";
            e && e._owner && e._owner !== re.current && (o = " It was passed a child from " + Ee(e._owner.type) + "."), He(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), He(null);
          }
        }
      }
      function sr(e, t) {
        if (typeof e == "object") {
          if (We(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              je(o) && or(o, t);
            }
          else if (je(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var l = P(e);
            if (typeof l == "function" && l !== e.entries)
              for (var g = l.call(e), y; !(y = g.next()).done; )
                je(y.value) && or(y.value, t);
          }
        }
      }
      function ur(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string")
            return;
          var a;
          if (typeof t == "function")
            a = t.propTypes;
          else if (typeof t == "object" && (t.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === ae))
            a = t.propTypes;
          else
            return;
          if (a) {
            var o = Ee(t);
            Ir(a, e.props, "prop", o, e);
          } else if (t.PropTypes !== void 0 && !$t) {
            $t = !0;
            var l = Ee(t);
            h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Mr(e) {
        {
          for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
            var o = t[a];
            if (o !== "children" && o !== "key") {
              He(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), He(null);
              break;
            }
          }
          e.ref !== null && (He(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), He(null));
        }
      }
      function lr(e, t, a) {
        var o = u(e);
        if (!o) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = Fr(t);
          g ? l += g : l += ar();
          var y;
          e === null ? y = "null" : We(e) ? y = "array" : e !== void 0 && e.$$typeof === p ? (y = "<" + (Ee(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, h("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, l);
        }
        var _ = Tt.apply(this, arguments);
        if (_ == null)
          return _;
        if (o)
          for (var N = 2; N < arguments.length; N++)
            sr(arguments[N], e);
        return e === R ? Mr(_) : ur(_), _;
      }
      var cr = !1;
      function $r(e) {
        var t = lr.bind(null, e);
        return t.type = e, cr || (cr = !0, G("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return G("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function Vr(e, t, a) {
        for (var o = St.apply(this, arguments), l = 2; l < arguments.length; l++)
          sr(arguments[l], o.type);
        return ur(o), o;
      }
      function Wr(e, t) {
        var a = ue.transition;
        ue.transition = {};
        var o = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ue.transition = a, a === null && o._updatedFibers) {
            var l = o._updatedFibers.size;
            l > 10 && G("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var fr = !1, ht = null;
      function Ur(e) {
        if (ht === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), a = s && s[t];
            ht = a.call(s, "timers").setImmediate;
          } catch {
            ht = function(l) {
              fr === !1 && (fr = !0, typeof MessageChannel > "u" && h("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var g = new MessageChannel();
              g.port1.onmessage = l, g.port2.postMessage(void 0);
            };
          }
        return ht(e);
      }
      var Ke = 0, dr = !1;
      function Yr(e) {
        {
          var t = Ke;
          Ke++, B.current === null && (B.current = []);
          var a = B.isBatchingLegacy, o;
          try {
            if (B.isBatchingLegacy = !0, o = e(), !a && B.didScheduleLegacyUpdate) {
              var l = B.current;
              l !== null && (B.didScheduleLegacyUpdate = !1, Ut(l));
            }
          } catch (Z) {
            throw gt(t), Z;
          } finally {
            B.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var g = o, y = !1, _ = {
              then: function(Z, ie) {
                y = !0, g.then(function(de) {
                  gt(t), Ke === 0 ? Vt(de, Z, ie) : Z(de);
                }, function(de) {
                  gt(t), ie(de);
                });
              }
            };
            return !dr && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              y || (dr = !0, h("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), _;
          } else {
            var N = o;
            if (gt(t), Ke === 0) {
              var Y = B.current;
              Y !== null && (Ut(Y), B.current = null);
              var H = {
                then: function(Z, ie) {
                  B.current === null ? (B.current = [], Vt(N, Z, ie)) : Z(N);
                }
              };
              return H;
            } else {
              var K = {
                then: function(Z, ie) {
                  Z(N);
                }
              };
              return K;
            }
          }
        }
      }
      function gt(e) {
        e !== Ke - 1 && h("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ke = e;
      }
      function Vt(e, t, a) {
        {
          var o = B.current;
          if (o !== null)
            try {
              Ut(o), Ur(function() {
                o.length === 0 ? (B.current = null, t(e)) : Vt(e, t, a);
              });
            } catch (l) {
              a(l);
            }
          else
            t(e);
        }
      }
      var Wt = !1;
      function Ut(e) {
        if (!Wt) {
          Wt = !0;
          var t = 0;
          try {
            for (; t < e.length; t++) {
              var a = e[t];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(t + 1), o;
          } finally {
            Wt = !1;
          }
        }
      }
      var zr = lr, Br = Vr, Hr = $r, Kr = {
        map: Le,
        forEach: lt,
        count: Ot,
        toArray: Nt,
        only: ct
      };
      i.Children = Kr, i.Component = x, i.Fragment = R, i.Profiler = w, i.PureComponent = W, i.StrictMode = ee, i.Suspense = z, i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C, i.cloneElement = Br, i.createContext = ft, i.createElement = zr, i.createFactory = Hr, i.createRef = Et, i.forwardRef = Dt, i.isValidElement = je, i.lazy = It, i.memo = d, i.startTransition = Wr, i.unstable_act = Yr, i.useCallback = he, i.useContext = I, i.useDebugValue = xe, i.useDeferredValue = wr, i.useEffect = fe, i.useId = Sr, i.useImperativeHandle = dt, i.useInsertionEffect = J, i.useLayoutEffect = X, i.useMemo = Oe, i.useReducer = S, i.useRef = E, i.useState = $, i.useSyncExternalStore = jr, i.useTransition = Tr, i.version = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(et, et.exports)), et.exports;
}
var T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function Qr() {
  if (hr)
    return T;
  hr = 1;
  var s = Symbol.for("react.element"), i = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), ee = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), q = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), z = Symbol.iterator;
  function oe(n) {
    return n === null || typeof n != "object" ? null : (n = z && n[z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ae = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, F = Object.assign, ce = {};
  function te(n, f, b) {
    this.props = n, this.context = f, this.refs = ce, this.updater = b || ae;
  }
  te.prototype.isReactComponent = {}, te.prototype.setState = function(n, f) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, f, "setState");
  }, te.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function pe() {
  }
  pe.prototype = te.prototype;
  function P(n, f, b) {
    this.props = n, this.context = f, this.refs = ce, this.updater = b || ae;
  }
  var A = P.prototype = new pe();
  A.constructor = P, F(A, te.prototype), A.isPureReactComponent = !0;
  var ue = Array.isArray, B = Object.prototype.hasOwnProperty, re = { current: null }, ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function me(n, f, b) {
    var O, x = {}, V = null, U = null;
    if (f != null)
      for (O in f.ref !== void 0 && (U = f.ref), f.key !== void 0 && (V = "" + f.key), f)
        B.call(f, O) && !ne.hasOwnProperty(O) && (x[O] = f[O]);
    var L = arguments.length - 2;
    if (L === 1)
      x.children = b;
    else if (1 < L) {
      for (var D = Array(L), W = 0; W < L; W++)
        D[W] = arguments[W + 2];
      x.children = D;
    }
    if (n && n.defaultProps)
      for (O in L = n.defaultProps, L)
        x[O] === void 0 && (x[O] = L[O]);
    return { $$typeof: s, type: n, key: V, ref: U, props: x, _owner: re.current };
  }
  function ve(n, f) {
    return { $$typeof: s, type: n.type, key: f, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function ye(n) {
    return typeof n == "object" && n !== null && n.$$typeof === s;
  }
  function ge(n) {
    var f = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(b) {
      return f[b];
    });
  }
  var _e = /\/+/g;
  function se(n, f) {
    return typeof n == "object" && n !== null && n.key != null ? ge("" + n.key) : f.toString(36);
  }
  function le(n, f, b, O, x) {
    var V = typeof n;
    (V === "undefined" || V === "boolean") && (n = null);
    var U = !1;
    if (n === null)
      U = !0;
    else
      switch (V) {
        case "string":
        case "number":
          U = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case s:
            case i:
              U = !0;
          }
      }
    if (U)
      return U = n, x = x(U), n = O === "" ? "." + se(U, 0) : O, ue(x) ? (b = "", n != null && (b = n.replace(_e, "$&/") + "/"), le(x, f, b, "", function(W) {
        return W;
      })) : x != null && (ye(x) && (x = ve(x, b + (!x.key || U && U.key === x.key ? "" : ("" + x.key).replace(_e, "$&/") + "/") + n)), f.push(x)), 1;
    if (U = 0, O = O === "" ? "." : O + ":", ue(n))
      for (var L = 0; L < n.length; L++) {
        V = n[L];
        var D = O + se(V, L);
        U += le(V, f, b, D, x);
      }
    else if (D = oe(n), typeof D == "function")
      for (n = D.call(n), L = 0; !(V = n.next()).done; )
        V = V.value, D = O + se(V, L++), U += le(V, f, b, D, x);
    else if (V === "object")
      throw f = String(n), Error("Objects are not valid as a React child (found: " + (f === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : f) + "). If you meant to render a collection of children, use an array instead.");
    return U;
  }
  function C(n, f, b) {
    if (n == null)
      return n;
    var O = [], x = 0;
    return le(n, O, "", "", function(V) {
      return f.call(b, V, x++);
    }), O;
  }
  function G(n) {
    if (n._status === -1) {
      var f = n._result;
      f = f(), f.then(function(b) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = b);
      }, function(b) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = b);
      }), n._status === -1 && (n._status = 0, n._result = f);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var h = { current: null }, be = { transition: null }, Re = { ReactCurrentDispatcher: h, ReactCurrentBatchConfig: be, ReactCurrentOwner: re };
  return T.Children = { map: C, forEach: function(n, f, b) {
    C(n, function() {
      f.apply(this, arguments);
    }, b);
  }, count: function(n) {
    var f = 0;
    return C(n, function() {
      f++;
    }), f;
  }, toArray: function(n) {
    return C(n, function(f) {
      return f;
    }) || [];
  }, only: function(n) {
    if (!ye(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, T.Component = te, T.Fragment = v, T.Profiler = j, T.PureComponent = P, T.StrictMode = p, T.Suspense = k, T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Re, T.cloneElement = function(n, f, b) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var O = F({}, n.props), x = n.key, V = n.ref, U = n._owner;
    if (f != null) {
      if (f.ref !== void 0 && (V = f.ref, U = re.current), f.key !== void 0 && (x = "" + f.key), n.type && n.type.defaultProps)
        var L = n.type.defaultProps;
      for (D in f)
        B.call(f, D) && !ne.hasOwnProperty(D) && (O[D] = f[D] === void 0 && L !== void 0 ? L[D] : f[D]);
    }
    var D = arguments.length - 2;
    if (D === 1)
      O.children = b;
    else if (1 < D) {
      L = Array(D);
      for (var W = 0; W < D; W++)
        L[W] = arguments[W + 2];
      O.children = L;
    }
    return { $$typeof: s, type: n.type, key: x, ref: V, props: O, _owner: U };
  }, T.createContext = function(n) {
    return n = { $$typeof: ee, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: R, _context: n }, n.Consumer = n;
  }, T.createElement = me, T.createFactory = function(n) {
    var f = me.bind(null, n);
    return f.type = n, f;
  }, T.createRef = function() {
    return { current: null };
  }, T.forwardRef = function(n) {
    return { $$typeof: w, render: n };
  }, T.isValidElement = ye, T.lazy = function(n) {
    return { $$typeof: M, _payload: { _status: -1, _result: n }, _init: G };
  }, T.memo = function(n, f) {
    return { $$typeof: q, type: n, compare: f === void 0 ? null : f };
  }, T.startTransition = function(n) {
    var f = be.transition;
    be.transition = {};
    try {
      n();
    } finally {
      be.transition = f;
    }
  }, T.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, T.useCallback = function(n, f) {
    return h.current.useCallback(n, f);
  }, T.useContext = function(n) {
    return h.current.useContext(n);
  }, T.useDebugValue = function() {
  }, T.useDeferredValue = function(n) {
    return h.current.useDeferredValue(n);
  }, T.useEffect = function(n, f) {
    return h.current.useEffect(n, f);
  }, T.useId = function() {
    return h.current.useId();
  }, T.useImperativeHandle = function(n, f, b) {
    return h.current.useImperativeHandle(n, f, b);
  }, T.useInsertionEffect = function(n, f) {
    return h.current.useInsertionEffect(n, f);
  }, T.useLayoutEffect = function(n, f) {
    return h.current.useLayoutEffect(n, f);
  }, T.useMemo = function(n, f) {
    return h.current.useMemo(n, f);
  }, T.useReducer = function(n, f, b) {
    return h.current.useReducer(n, f, b);
  }, T.useRef = function(n) {
    return h.current.useRef(n);
  }, T.useState = function(n) {
    return h.current.useState(n);
  }, T.useSyncExternalStore = function(n, f, b) {
    return h.current.useSyncExternalStore(n, f, b);
  }, T.useTransition = function() {
    return h.current.useTransition();
  }, T.version = "18.2.0", T;
}
process.env.NODE_ENV === "production" ? Ht.exports = Qr() : Ht.exports = Xr();
var Q = Ht.exports;
const Ve = /* @__PURE__ */ Zr(Q);
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function en() {
  return gr || (gr = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Q, i = Symbol.for("react.element"), v = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), w = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), F = Symbol.iterator, ce = "@@iterator";
    function te(r) {
      if (r === null || typeof r != "object")
        return null;
      var u = F && r[F] || r[ce];
      return typeof u == "function" ? u : null;
    }
    var pe = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(r) {
      {
        for (var u = arguments.length, d = new Array(u > 1 ? u - 1 : 0), m = 1; m < u; m++)
          d[m - 1] = arguments[m];
        A("error", r, d);
      }
    }
    function A(r, u, d) {
      {
        var m = pe.ReactDebugCurrentFrame, I = m.getStackAddendum();
        I !== "" && (u += "%s", d = d.concat([I]));
        var $ = d.map(function(S) {
          return String(S);
        });
        $.unshift("Warning: " + u), Function.prototype.apply.call(console[r], console, $);
      }
    }
    var ue = !1, B = !1, re = !1, ne = !1, me = !1, ve;
    ve = Symbol.for("react.module.reference");
    function ye(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === p || r === R || me || r === j || r === q || r === M || ne || r === ae || ue || B || re || typeof r == "object" && r !== null && (r.$$typeof === oe || r.$$typeof === z || r.$$typeof === ee || r.$$typeof === w || r.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === ve || r.getModuleId !== void 0));
    }
    function ge(r, u, d) {
      var m = r.displayName;
      if (m)
        return m;
      var I = u.displayName || u.name || "";
      return I !== "" ? d + "(" + I + ")" : d;
    }
    function _e(r) {
      return r.displayName || "Context";
    }
    function se(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case p:
          return "Fragment";
        case v:
          return "Portal";
        case R:
          return "Profiler";
        case j:
          return "StrictMode";
        case q:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case w:
            var u = r;
            return _e(u) + ".Consumer";
          case ee:
            var d = r;
            return _e(d._context) + ".Provider";
          case k:
            return ge(r, r.render, "ForwardRef");
          case z:
            var m = r.displayName || null;
            return m !== null ? m : se(r.type) || "Memo";
          case oe: {
            var I = r, $ = I._payload, S = I._init;
            try {
              return se(S($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var le = Object.assign, C = 0, G, h, be, Re, n, f, b;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function x() {
      {
        if (C === 0) {
          G = console.log, h = console.info, be = console.warn, Re = console.error, n = console.group, f = console.groupCollapsed, b = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: O,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        C++;
      }
    }
    function V() {
      {
        if (C--, C === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: le({}, r, {
              value: G
            }),
            info: le({}, r, {
              value: h
            }),
            warn: le({}, r, {
              value: be
            }),
            error: le({}, r, {
              value: Re
            }),
            group: le({}, r, {
              value: n
            }),
            groupCollapsed: le({}, r, {
              value: f
            }),
            groupEnd: le({}, r, {
              value: b
            })
          });
        }
        C < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = pe.ReactCurrentDispatcher, L;
    function D(r, u, d) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (I) {
            var m = I.stack.trim().match(/\n( *(at )?)/);
            L = m && m[1] || "";
          }
        return `
` + L + r;
      }
    }
    var W = !1, we;
    {
      var Et = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Et();
    }
    function tt(r, u) {
      if (!r || W)
        return "";
      {
        var d = we.get(r);
        if (d !== void 0)
          return d;
      }
      var m;
      W = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = U.current, U.current = null, x();
      try {
        if (u) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (xe) {
              m = xe;
            }
            Reflect.construct(r, [], S);
          } else {
            try {
              S.call();
            } catch (xe) {
              m = xe;
            }
            r.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xe) {
            m = xe;
          }
          r();
        }
      } catch (xe) {
        if (xe && m && typeof xe.stack == "string") {
          for (var E = xe.stack.split(`
`), fe = m.stack.split(`
`), J = E.length - 1, X = fe.length - 1; J >= 1 && X >= 0 && E[J] !== fe[X]; )
            X--;
          for (; J >= 1 && X >= 0; J--, X--)
            if (E[J] !== fe[X]) {
              if (J !== 1 || X !== 1)
                do
                  if (J--, X--, X < 0 || E[J] !== fe[X]) {
                    var he = `
` + E[J].replace(" at new ", " at ");
                    return r.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", r.displayName)), typeof r == "function" && we.set(r, he), he;
                  }
                while (J >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        W = !1, U.current = $, V(), Error.prepareStackTrace = I;
      }
      var Oe = r ? r.displayName || r.name : "", dt = Oe ? D(Oe) : "";
      return typeof r == "function" && we.set(r, dt), dt;
    }
    function We(r, u, d) {
      return tt(r, !1);
    }
    function Rt(r) {
      var u = r.prototype;
      return !!(u && u.isReactComponent);
    }
    function Ue(r, u, d) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return tt(r, Rt(r));
      if (typeof r == "string")
        return D(r);
      switch (r) {
        case q:
          return D("Suspense");
        case M:
          return D("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case k:
            return We(r.render);
          case z:
            return Ue(r.type, u, d);
          case oe: {
            var m = r, I = m._payload, $ = m._init;
            try {
              return Ue($(I), u, d);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, Pe = {}, rt = pe.ReactDebugCurrentFrame;
    function Ae(r) {
      if (r) {
        var u = r._owner, d = Ue(r.type, r._source, u ? u.type : null);
        rt.setExtraStackFrame(d);
      } else
        rt.setExtraStackFrame(null);
    }
    function Ee(r, u, d, m, I) {
      {
        var $ = Function.call.bind(Ne);
        for (var S in r)
          if ($(r, S)) {
            var E = void 0;
            try {
              if (typeof r[S] != "function") {
                var fe = Error((m || "React class") + ": " + d + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw fe.name = "Invariant Violation", fe;
              }
              E = r[S](u, S, m, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              E = J;
            }
            E && !(E instanceof Error) && (Ae(I), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", d, S, typeof E), Ae(null)), E instanceof Error && !(E.message in Pe) && (Pe[E.message] = !0, Ae(I), P("Failed %s type: %s", d, E.message), Ae(null));
          }
      }
    }
    var Ie = Array.isArray;
    function Ye(r) {
      return Ie(r);
    }
    function nt(r) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, d = u && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return d;
      }
    }
    function at(r) {
      try {
        return ze(r), !1;
      } catch {
        return !0;
      }
    }
    function ze(r) {
      return "" + r;
    }
    function qe(r) {
      if (at(r))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nt(r)), ze(r);
    }
    var Se = pe.ReactCurrentOwner, Ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, it, ot, De;
    De = {};
    function Tt(r) {
      if (Ne.call(r, "ref")) {
        var u = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function wt(r) {
      if (Ne.call(r, "key")) {
        var u = Object.getOwnPropertyDescriptor(r, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function St(r, u) {
      if (typeof r.ref == "string" && Se.current && u && Se.current.stateNode !== u) {
        var d = se(Se.current.type);
        De[d] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', se(Se.current.type), r.ref), De[d] = !0);
      }
    }
    function je(r, u) {
      {
        var d = function() {
          it || (it = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        d.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function st(r, u) {
      {
        var d = function() {
          ot || (ot = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        d.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var jt = function(r, u, d, m, I, $, S) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: r,
        key: u,
        ref: d,
        props: S,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function kt(r, u, d, m, I) {
      {
        var $, S = {}, E = null, fe = null;
        d !== void 0 && (qe(d), E = "" + d), wt(u) && (qe(u.key), E = "" + u.key), Tt(u) && (fe = u.ref, St(u, I));
        for ($ in u)
          Ne.call(u, $) && !Ct.hasOwnProperty($) && (S[$] = u[$]);
        if (r && r.defaultProps) {
          var J = r.defaultProps;
          for ($ in J)
            S[$] === void 0 && (S[$] = J[$]);
        }
        if (E || fe) {
          var X = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          E && je(S, X), fe && st(S, X);
        }
        return jt(r, E, fe, I, m, Se.current, S);
      }
    }
    var Be = pe.ReactCurrentOwner, ut = pe.ReactDebugCurrentFrame;
    function Ce(r) {
      if (r) {
        var u = r._owner, d = Ue(r.type, r._source, u ? u.type : null);
        ut.setExtraStackFrame(d);
      } else
        ut.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function ke(r) {
      return typeof r == "object" && r !== null && r.$$typeof === i;
    }
    function Le() {
      {
        if (Be.current) {
          var r = se(Be.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Ot(r) {
      {
        if (r !== void 0) {
          var u = r.fileName.replace(/^.*[\\\/]/, ""), d = r.lineNumber;
          return `

Check your code at ` + u + ":" + d + ".";
        }
        return "";
      }
    }
    var lt = {};
    function Nt(r) {
      {
        var u = Le();
        if (!u) {
          var d = typeof r == "string" ? r : r.displayName || r.name;
          d && (u = `

Check the top-level render call using <` + d + ">.");
        }
        return u;
      }
    }
    function ct(r, u) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var d = Nt(u);
        if (lt[d])
          return;
        lt[d] = !0;
        var m = "";
        r && r._owner && r._owner !== Be.current && (m = " It was passed a child from " + se(r._owner.type) + "."), Ce(r), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, m), Ce(null);
      }
    }
    function ft(r, u) {
      {
        if (typeof r != "object")
          return;
        if (Ye(r))
          for (var d = 0; d < r.length; d++) {
            var m = r[d];
            ke(m) && ct(m, u);
          }
        else if (ke(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var I = te(r);
          if (typeof I == "function" && I !== r.entries)
            for (var $ = I.call(r), S; !(S = $.next()).done; )
              ke(S.value) && ct(S.value, u);
        }
      }
    }
    function Me(r) {
      {
        var u = r.type;
        if (u == null || typeof u == "string")
          return;
        var d;
        if (typeof u == "function")
          d = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === z))
          d = u.propTypes;
        else
          return;
        if (d) {
          var m = se(u);
          Ee(d, r.props, "prop", m, r);
        } else if (u.PropTypes !== void 0 && !Fe) {
          Fe = !0;
          var I = se(u);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ge(r) {
      {
        for (var u = Object.keys(r.props), d = 0; d < u.length; d++) {
          var m = u[d];
          if (m !== "children" && m !== "key") {
            Ce(r), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), Ce(null);
            break;
          }
        }
        r.ref !== null && (Ce(r), P("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    function Je(r, u, d, m, I, $) {
      {
        var S = ye(r);
        if (!S) {
          var E = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var fe = Ot(I);
          fe ? E += fe : E += Le();
          var J;
          r === null ? J = "null" : Ye(r) ? J = "array" : r !== void 0 && r.$$typeof === i ? (J = "<" + (se(r.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : J = typeof r, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, E);
        }
        var X = kt(r, u, d, I, $);
        if (X == null)
          return X;
        if (S) {
          var he = u.children;
          if (he !== void 0)
            if (m)
              if (Ye(he)) {
                for (var Oe = 0; Oe < he.length; Oe++)
                  ft(he[Oe], r);
                Object.freeze && Object.freeze(he);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft(he, r);
        }
        return r === p ? Ge(X) : Me(X), X;
      }
    }
    function Pt(r, u, d) {
      return Je(r, u, d, !0);
    }
    function At(r, u, d) {
      return Je(r, u, d, !1);
    }
    var It = At, Dt = Pt;
    Xe.Fragment = p, Xe.jsx = It, Xe.jsxs = Dt;
  }()), Xe;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br;
function tn() {
  if (br)
    return Qe;
  br = 1;
  var s = Q, i = Symbol.for("react.element"), v = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, j = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ee(w, k, q) {
    var M, z = {}, oe = null, ae = null;
    q !== void 0 && (oe = "" + q), k.key !== void 0 && (oe = "" + k.key), k.ref !== void 0 && (ae = k.ref);
    for (M in k)
      p.call(k, M) && !R.hasOwnProperty(M) && (z[M] = k[M]);
    if (w && w.defaultProps)
      for (M in k = w.defaultProps, k)
        z[M] === void 0 && (z[M] = k[M]);
    return { $$typeof: i, type: w, key: oe, ref: ae, props: z, _owner: j.current };
  }
  return Qe.Fragment = v, Qe.jsx = ee, Qe.jsxs = ee, Qe;
}
process.env.NODE_ENV === "production" ? Bt.exports = tn() : Bt.exports = en();
var c = Bt.exports, Er = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, _r = Ve.createContext && /* @__PURE__ */ Ve.createContext(Er), rn = ["attr", "size", "title"];
function nn(s, i) {
  if (s == null)
    return {};
  var v = an(s, i), p, j;
  if (Object.getOwnPropertySymbols) {
    var R = Object.getOwnPropertySymbols(s);
    for (j = 0; j < R.length; j++)
      p = R[j], !(i.indexOf(p) >= 0) && Object.prototype.propertyIsEnumerable.call(s, p) && (v[p] = s[p]);
  }
  return v;
}
function an(s, i) {
  if (s == null)
    return {};
  var v = {}, p = Object.keys(s), j, R;
  for (R = 0; R < p.length; R++)
    j = p[R], !(i.indexOf(j) >= 0) && (v[j] = s[j]);
  return v;
}
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(s) {
    for (var i = 1; i < arguments.length; i++) {
      var v = arguments[i];
      for (var p in v)
        Object.prototype.hasOwnProperty.call(v, p) && (s[p] = v[p]);
    }
    return s;
  }, _t.apply(this, arguments);
}
function xr(s, i) {
  var v = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(s);
    i && (p = p.filter(function(j) {
      return Object.getOwnPropertyDescriptor(s, j).enumerable;
    })), v.push.apply(v, p);
  }
  return v;
}
function xt(s) {
  for (var i = 1; i < arguments.length; i++) {
    var v = arguments[i] != null ? arguments[i] : {};
    i % 2 ? xr(Object(v), !0).forEach(function(p) {
      on(s, p, v[p]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(v)) : xr(Object(v)).forEach(function(p) {
      Object.defineProperty(s, p, Object.getOwnPropertyDescriptor(v, p));
    });
  }
  return s;
}
function on(s, i, v) {
  return i = sn(i), i in s ? Object.defineProperty(s, i, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : s[i] = v, s;
}
function sn(s) {
  var i = un(s, "string");
  return typeof i == "symbol" ? i : String(i);
}
function un(s, i) {
  if (typeof s != "object" || s === null)
    return s;
  var v = s[Symbol.toPrimitive];
  if (v !== void 0) {
    var p = v.call(s, i || "default");
    if (typeof p != "object")
      return p;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(s);
}
function Rr(s) {
  return s && s.map((i, v) => /* @__PURE__ */ Ve.createElement(i.tag, xt({
    key: v
  }, i.attr), Rr(i.child)));
}
function Te(s) {
  return (i) => /* @__PURE__ */ Ve.createElement(ln, _t({
    attr: xt({}, s.attr)
  }, i), Rr(s.child));
}
function ln(s) {
  var i = (v) => {
    var {
      attr: p,
      size: j,
      title: R
    } = s, ee = nn(s, rn), w = j || v.size || "1em", k;
    return v.className && (k = v.className), s.className && (k = (k ? k + " " : "") + s.className), /* @__PURE__ */ Ve.createElement("svg", _t({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, v.attr, p, ee, {
      className: k,
      style: xt(xt({
        color: s.color || v.color
      }, v.style), s.style),
      height: w,
      width: w,
      xmlns: "http://www.w3.org/2000/svg"
    }), R && /* @__PURE__ */ Ve.createElement("title", null, R), s.children);
  };
  return _r !== void 0 ? /* @__PURE__ */ Ve.createElement(_r.Consumer, null, (v) => i(v)) : i(Er);
}
function cn(s) {
  return Te({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z", clipRule: "evenodd" }, child: [] }] })(s);
}
function fn(s) {
  return Te({ tag: "svg", attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, child: [] }] })(s);
}
function dn(s) {
  return Te({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" }, child: [] }] })(s);
}
function zt(s) {
  return Te({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" }, child: [] }] })(s);
}
function pn(s) {
  return Te({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.7.48A6.985 6.985 0 002 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h1.535l4.033 3.796A.75.75 0 0010 16.25V3.75zM15.95 5.05a.75.75 0 00-1.06 1.061 5.5 5.5 0 010 7.778.75.75 0 001.06 1.06 7 7 0 000-9.899z" }, child: [] }, { tag: "path", attr: { d: "M13.829 7.172a.75.75 0 00-1.061 1.06 2.5 2.5 0 010 3.536.75.75 0 001.06 1.06 4 4 0 000-5.656z" }, child: [] }] })(s);
}
function mn(s) {
  return Te({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M9.547 3.062A.75.75 0 0110 3.75v12.5a.75.75 0 01-1.264.546L4.703 13H3.167a.75.75 0 01-.7-.48A6.985 6.985 0 012 10c0-.887.165-1.737.468-2.52a.75.75 0 01.7-.48h1.535l4.033-3.796a.75.75 0 01.811-.142zM13.28 7.22a.75.75 0 10-1.06 1.06L13.94 10l-1.72 1.72a.75.75 0 001.06 1.06L15 11.06l1.72 1.72a.75.75 0 101.06-1.06L16.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L15 8.94l-1.72-1.72z" }, child: [] }] })(s);
}
function yn(s) {
  return Te({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M7 6C7.55228 6 8 6.44772 8 7V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V7C6 6.44772 6.44772 6 7 6ZM9.07869 12.4085C9.03208 12.3756 8.99144 12.3349 8.95854 12.2883C8.7993 12.0627 8.85309 11.7508 9.07869 11.5915L16.2117 6.55648C16.296 6.49693 16.3967 6.46496 16.5 6.46496C16.7761 6.46496 17 6.68882 17 6.96496V17.035C17 17.1383 16.968 17.239 16.9085 17.3234C16.7492 17.549 16.4373 17.6028 16.2117 17.4435L9.07869 12.4085Z" }, child: [] }] })(s);
}
function vn(s) {
  return Te({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M7.78834 17.4435C7.70398 17.5031 7.60326 17.535 7.5 17.535C7.22386 17.535 7 17.3112 7 17.035V6.96496C7 6.8617 7.03197 6.76098 7.09152 6.67662C7.25076 6.45102 7.56274 6.39723 7.78834 6.55648L14.9213 11.5915C14.9679 11.6244 15.0086 11.665 15.0415 11.7117C15.2007 11.9373 15.1469 12.2492 14.9213 12.4085L7.78834 17.4435ZM16 7C16 6.44772 16.4477 6 17 6C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V7Z" }, child: [] }] })(s);
}
function hn(s) {
  return Te({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M12 8.95439L17.6352 7.82736C19.0102 7.55235 20 6.34501 20 4.94274C20 3.08637 18.3017 1.69406 16.4813 2.05813L12.4117 2.87206C11.0094 3.15252 10 4.38376 10 5.8138V13.8895C9.41165 13.5492 8.72857 13.3544 8 13.3544C5.79086 13.3544 4 15.1453 4 17.3544C4 19.5635 5.79086 21.3544 8 21.3544C10.2091 21.3544 12 19.5635 12 17.3544V8.95439ZM16.8736 4.01929L12.8039 4.83322C12.3365 4.92671 12 5.33712 12 5.8138V6.91479L17.2429 5.8662C17.6831 5.77816 18 5.39165 18 4.94274C18 4.34846 17.4563 3.90274 16.8736 4.01929ZM10 17.3544C10 16.2498 9.10457 15.3544 8 15.3544C6.89543 15.3544 6 16.2498 6 17.3544C6 18.459 6.89543 19.3544 8 19.3544C9.10457 19.3544 10 18.459 10 17.3544Z", fill: "currentColor" }, child: [] }] })(s);
}
const Cr = Q.createContext(
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
), gn = {
  type: "playlist",
  name: "Liked Songs",
  creationDate: "12/12/2020",
  numTracks: 10,
  duration: "30 min",
  imageSrc: "https://res.cloudinary.com/dqriqmsdk/image/upload/v1704626899/bird-berry.%7E.e1a90b8aa388f4da20db23617643eda5.jpg"
}, bn = {
  type: "playlist",
  name: "Playlist Name",
  numTracks: -1,
  duration: "[duration]"
}, _n = [
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
], $e = ({ textArray: s }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: s.map((i, v) => i.type === "badge" ? /* @__PURE__ */ c.jsx("span", { className: "text badge " + i.className, style: i.style, children: i.content }, "badge-" + v) : /* @__PURE__ */ c.jsx("span", { className: "text pure " + i.className, style: i.style, children: i.link ? /* @__PURE__ */ c.jsx("a", { href: i.link, target: i.externalLink ? "_blank" : "_self", rel: i.externalLink ? "noopener noreferrer" : "", children: i.content }) : i.content }, "text-" + v)) }), xn = ({ track: s, info: i }) => /* @__PURE__ */ c.jsxs("div", { className: "lt-info-card", children: [
  /* @__PURE__ */ c.jsxs("div", { className: "lt-info-panel", children: [
    /* @__PURE__ */ c.jsx("div", { className: "lt-info-title", children: /* @__PURE__ */ c.jsx("h1", { className: "text lt-info-title-h1", children: i.type === "playlist" ? /* @__PURE__ */ c.jsx("span", { className: "text pure", children: i.name }) : i.type === "album" ? /* @__PURE__ */ c.jsx($e, { textArray: s.album }) : /* @__PURE__ */ c.jsx($e, { textArray: s.artist }) }) }),
    i.type === "playlist" ? i.creationDate ? /* @__PURE__ */ c.jsx("div", { className: "lt-info-stats", children: /* @__PURE__ */ c.jsxs("span", { className: "text pure", children: [
      "Created on ",
      i.creationDate
    ] }) }) : null : i.type === "artist" ? /* @__PURE__ */ c.jsx("div", { className: "lt-info-stats", children: /* @__PURE__ */ c.jsx("span", { className: "text pure", children: i.genre }) }) : /* @__PURE__ */ c.jsxs("div", { className: "lt-info-stats", children: [
      /* @__PURE__ */ c.jsx("span", { className: "text pure", children: i.releaseDate }),
      /* @__PURE__ */ c.jsx("span", { className: "cdot", style: { fontWeight: "bold", margin: "1px" }, children: "·" }),
      /* @__PURE__ */ c.jsx("span", { className: "text pure", children: i.genre })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "lt-info-stats", children: [
      /* @__PURE__ */ c.jsxs("span", { className: "text number", children: [
        i.numTracks,
        " tracks"
      ] }),
      /* @__PURE__ */ c.jsx("span", { className: "cdot number", style: { fontWeight: "bold", margin: "1px" }, children: "·" }),
      /* @__PURE__ */ c.jsx("span", { className: "text pure number", children: i.type === "artist" ? i.numAlbums : i.duration })
    ] })
  ] }),
  i != null && i.imageSrc || s != null && s.imageSrc ? /* @__PURE__ */ c.jsx("div", { className: "lt-info-img-cont", children: /* @__PURE__ */ c.jsx("img", { className: "lt-info-img", src: i.imageSrc ?? s.imageSrc, alt: "list image" }) }) : /* @__PURE__ */ c.jsx("div", { className: "lt-info-art-placeholder-cont", children: /* @__PURE__ */ c.jsx("div", { className: "lt-info-placeholder", style: { animation: "fadeIn 1s ease-in-out", background: "repeating-linear-gradient( 45deg, #22222266, #22222266 6px, #22222200 6px, #22222200 12px)" }, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(hn, { className: "lt-info-placeholder-icon" }) }) }) })
] }), En = ({ muted: s = !1, playing: i = !1, nextCallback: v, prevCallback: p, playCallback: j, muteCallback: R }) => /* @__PURE__ */ c.jsxs("div", { className: "controller-panel", children: [
  /* @__PURE__ */ c.jsx("button", { className: "btn mute-btn btn-primary", onClick: () => R && R(!s), children: s ? /* @__PURE__ */ c.jsx(mn, { className: "action-icon mute-icon" }) : /* @__PURE__ */ c.jsx(pn, { className: "action-icon unmute-icon" }) }),
  /* @__PURE__ */ c.jsx("button", { className: "btn back-btn btn-primary", onClick: p, children: /* @__PURE__ */ c.jsx(yn, { className: "action-icon prev-icon" }) }),
  /* @__PURE__ */ c.jsx("button", { className: "btn forward-btn btn-primary", onClick: v, children: /* @__PURE__ */ c.jsx(vn, { className: "action-icon next-icon" }) }),
  /* @__PURE__ */ c.jsx("button", { className: "btn play-btn", onClick: () => j && j(!i), children: i ? /* @__PURE__ */ c.jsx(fn, { className: "action-icon pause-icon" }) : /* @__PURE__ */ c.jsx(cn, { className: "action-icon play-icon" }) })
] }), Rn = ({ info: s = bn, track: i, muted: v = !1, playing: p = !1, noControls: j = !1, snapTo: R = "large", nextCallback: ee, prevCallback: w, playCallback: k, muteCallback: q, children: M }) => {
  const z = R === "tiny" ? "92px" : R === "small" ? "11.65rem" : R === "medium" ? "16rem" : R === "large" ? "21.35rem" : R;
  return /* @__PURE__ */ c.jsxs("div", { className: "list-header", style: { maxHeight: z, height: z }, children: [
    M ? /* @__PURE__ */ c.jsx("div", { className: "lh-children-cont", children: M }) : /* @__PURE__ */ c.jsx("div", { className: "lh-children-cont lh-listinfocard-cont", children: /* @__PURE__ */ c.jsx(xn, { track: i, info: s }) }),
    j ? null : /* @__PURE__ */ c.jsx(En, { track: i, muted: v, playing: p, nextCallback: ee, prevCallback: w, playCallback: k, muteCallback: q })
  ] });
}, Cn = ({ track: s, trackNumber: i, selected: v = !1, playIcon: p = !0, onClick: j }) => /* @__PURE__ */ c.jsxs("div", { className: "track " + (v ? "selected" : ""), onClick: j, children: [
  /* @__PURE__ */ c.jsx("div", { className: "track-number", children: v ? p ? /* @__PURE__ */ c.jsx(zt, { className: "action-icon", style: { display: "unset" } }) : /* @__PURE__ */ c.jsx(dn, { className: "action-icon", style: { display: "unset" } }) : i ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx("span", { className: "text number list-number", children: i }),
    /* @__PURE__ */ c.jsx(zt, { className: "action-icon" })
  ] }) : /* @__PURE__ */ c.jsx(zt, { className: "action-icon" }) }),
  /* @__PURE__ */ c.jsxs("div", { className: "info-cont", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "main-info-cont", children: [
      /* @__PURE__ */ c.jsx("div", { className: "title-cont", children: /* @__PURE__ */ c.jsx($e, { textArray: s.title }) }),
      /* @__PURE__ */ c.jsxs("div", { className: "meta-cont", children: [
        /* @__PURE__ */ c.jsx($e, { textArray: s.artist }),
        /* @__PURE__ */ c.jsx("span", { className: "cdot", style: { fontWeight: "bold", margin: "1px" }, children: "·" }),
        /* @__PURE__ */ c.jsx($e, { textArray: s.album })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "lg-meta-cont", children: /* @__PURE__ */ c.jsx("div", { className: "meta-artist", children: /* @__PURE__ */ c.jsx($e, { textArray: s.artist }) }) }),
    /* @__PURE__ */ c.jsx("div", { className: "lg-meta-cont", children: /* @__PURE__ */ c.jsx("div", { className: "meta-album", children: /* @__PURE__ */ c.jsx($e, { textArray: s.album }) }) })
  ] }),
  /* @__PURE__ */ c.jsx("div", { className: "duration-cont", children: /* @__PURE__ */ c.jsx("span", { className: "text pure number", children: s.duration }) })
] }), Tn = ({ tracks: s = _n, listInfo: i = gn, prevBufferTime: v = 1500, playerMode: p, noControls: j = !1, noHeader: R = !1, loop: ee = !1, continueOn: w = !1, playCallback: k, pauseCallback: q, muteCallback: M, children: z }) => {
  const [oe, ae] = Q.useState(!1), { selectedTrack: F, setSelectedTrack: ce, isPlaying: te, setIsPlaying: pe, isMuted: P, setIsMuted: A } = Q.useContext(Cr), ue = Q.useRef(null), B = Q.useRef(!0), re = Q.useRef(!0);
  console.log("selectedTrack: ", F);
  const ne = (C = !0) => {
    pe(!0), k && k(F, C), C || (B.current = !0, ae(!oe));
  }, me = () => {
    pe(!1), q && q();
  }, ve = (C) => {
    A(C), M && M(C);
  }, ye = (C) => {
    F === -1 ? C && ce(0) : C ? ne() : me();
  }, ge = (C) => {
    C === F ? ye(!te) : re.current = !1, ce(C);
  }, _e = () => {
    B.current || !te ? ee ? ce((F - 1 + s.length) % s.length) : F === 0 || ce(F - 1) : ne(!1);
  }, se = () => {
    !ee && F >= s.length - 1 ? w && ce(F + 1) : ce((F + 1) % s.length);
  }, le = (C) => {
    var h;
    const G = (h = ue.current) == null ? void 0 : h.children[C];
    G == null || G.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return Q.useEffect(() => {
    F !== -1 && (re.current && !(p === "tinyplayer" || p === "miniplayer") && le(F), re.current = !0, ne(!1));
  }, [F]), Q.useEffect(() => {
    if (te) {
      const C = setTimeout(() => {
        B.current = !1;
      }, v);
      return () => clearTimeout(C);
    }
  }, [oe, v]), /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsxs("div", { className: "list-player", style: p === "tinyplayer" ? { maxHeight: "92px", maxWidth: "315px" } : p === "miniplayer" ? { maxHeight: "92px", maxWidth: "100%" } : { maxHeight: "100%", maxWidth: "100%" }, children: [
    R ? null : /* @__PURE__ */ c.jsx(Rn, { info: i, track: s[F === -1 ? 0 : F], snapTo: p === "tiny" ? "tiny" : p === "small" ? "small" : p === "medium" ? "medium" : p === "large" ? "large" : p === void 0 ? void 0 : p, noControls: j, muted: P, playing: te, muteCallback: ve, playCallback: ye, nextCallback: se, prevCallback: _e, children: z }),
    /* @__PURE__ */ c.jsx("div", { ref: ue, className: "list-body", children: s.map((C, G) => /* @__PURE__ */ c.jsx(Cn, { track: C, trackNumber: G + 1, onClick: () => ge(G), selected: G === F, playIcon: !te || G !== F }, "track-" + G)) })
  ] }) });
}, wn = {
  type: "playlist",
  name: "Royalty Free Playlist",
  creationDate: "1/16/2024",
  numTracks: 10,
  duration: "24 min"
}, Sn = [
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
], jn = !1, kn = () => {
  const [s, i] = Q.useState(-1), [v, p] = Q.useState(!1), [j, R] = Q.useState(!1), [ee, w] = Q.useState("react-playlist-player"), [k, q] = Q.useState("large"), [M, z] = Q.useState(!1), [oe, ae] = Q.useState(!1), [F, ce] = Q.useState(!1), [te, pe] = Q.useState(!jn), P = Q.useRef(null), A = 1e3, ue = ["/free-audio/tokyo cafe.mp3", "/free-audio/my universe.mp3", "/free-audio/smoke.mp3", "/free-audio/good night.mp3", "/free-audio/hear me.mp3", "/free-audio/baby mandala.mp3", "/free-audio/midnight forest.mp3", "/free-audio/separation.mp3", "/free-audio/drive breakbeat.mp3", "/free-audio/glossy.mp3"], B = (ne, me) => {
    var ve, ye, ge;
    ne === s && !me ? ((ve = P.current) == null || ve.load(), (ye = P.current) == null || ye.play()) : (ge = P.current) == null || ge.play();
  }, re = () => {
    var ne;
    (ne = P.current) == null || ne.pause();
  };
  return Q.useEffect(() => {
    if (!te)
      return;
    const ne = setTimeout(() => {
      w("a flexible react playlist controller");
    }, 3 * A), me = setTimeout(() => {
      w("that is fully controllable via context ... playing track 4 now ...");
    }, 7 * A), ve = setTimeout(() => {
      i(3);
    }, 8 * A), ye = setTimeout(() => {
      w("stopping playback ...");
    }, 12 * A), ge = setTimeout(() => {
      var W;
      p(!1), (W = P.current) == null || W.pause();
    }, 13 * A), _e = setTimeout(() => {
      w("ListPlayer is fully responsive, and will adapt to the size of its container");
    }, 15 * A), se = setTimeout(() => {
      z(!0);
    }, 19 * A), le = setTimeout(() => {
      w("but it also comes with several built-in sizes, such as this one called 'miniplayer'");
    }, 23 * A), C = setTimeout(() => {
      q("miniplayer");
    }, 25 * A), G = setTimeout(() => {
      w("and an even smaller one called 'tinyplayer'");
    }, 30 * A), h = setTimeout(() => {
      q("tinyplayer");
    }, 31 * A), be = setTimeout(() => {
      w("The player does not play media, it just provides a user interface to control playback.");
    }, 35 * A), Re = setTimeout(() => {
      var W;
      z(!1), p(!0), (W = P.current) == null || W.play(), R(!0), w("This means that you can combine it with any media player you like, such as react-player.");
    }, 40 * A), n = setTimeout(() => {
      var W;
      p(!1), (W = P.current) == null || W.pause(), R(!1), w("Since ListPlayer accepts a child component, you can use it to wrap your media player");
    }, 45 * A), f = setTimeout(() => {
      w("or you can provide your own full header component to replace the default one.");
    }, 51 * A), b = setTimeout(() => {
      q("medium");
    }, 54 * A), O = setTimeout(() => {
      ae(!0);
    }, 57 * A), x = setTimeout(() => {
      w("But what if you want to put your header/controls somewhere away from the playlist?");
    }, 62 * A), V = setTimeout(() => {
      w("You can do that too. To make the ListPlayer headless, just set the noHeader prop to true.");
    }, 68 * A), U = setTimeout(() => {
      ce(!0);
    }, 72 * A), L = setTimeout(() => {
      w("That's it! Feel free to play around with the ListPlayer below."), ae(!1);
    }, 78 * A), D = setTimeout(() => {
      w("react-playlist-player"), ce(!1);
    }, 82 * A);
    return () => {
      clearTimeout(ne), clearTimeout(me), clearTimeout(ve), clearTimeout(ye), clearTimeout(ge), clearTimeout(_e), clearTimeout(se), clearTimeout(le), clearTimeout(C), clearTimeout(G), clearTimeout(h), clearTimeout(be), clearTimeout(Re), clearTimeout(n), clearTimeout(f), clearTimeout(b), clearTimeout(O), clearTimeout(x), clearTimeout(V), clearTimeout(U), clearTimeout(L), clearTimeout(D);
    };
  }, [te]), /* @__PURE__ */ c.jsxs(Cr.Provider, { value: { selectedTrack: s, setSelectedTrack: i, isPlaying: v, setIsPlaying: p, isMuted: j, setIsMuted: R }, children: [
    /* @__PURE__ */ c.jsxs("div", { className: "app", children: [
      /* @__PURE__ */ c.jsx("div", { className: "explanitory-text", style: { animation: "fadeIn 1s ease-in-out" }, children: ee }, ee),
      /* @__PURE__ */ c.jsx("div", { className: "listplayer-cont", style: M ? { paddingLeft: "20%", paddingRight: "20%" } : void 0, children: /* @__PURE__ */ c.jsx(Tn, { loop: !0, tracks: Sn, listInfo: wn, playerMode: k, noControls: oe, noHeader: F, playCallback: B, pauseCallback: re, children: oe ? /* @__PURE__ */ c.jsx("div", { className: "custom-hdr-placeholder", style: { animation: "fadeIn 1s ease-in-out", background: "repeating-linear-gradient( 45deg, #22222255, #22222255 10px, #22222200 10px, #22222200 20px)" }, children: "[your custom header here]" }) : void 0 }) })
    ] }),
    /* @__PURE__ */ c.jsx(
      "audio",
      {
        ref: P,
        src: s < ue.length ? ue[s % ue.length] : void 0,
        muted: j,
        onEnded: () => {
          i(s + 1);
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        className: "skip-intro",
        onClick: () => {
          w("react-playlist-player"), q("large"), ce(!1), ae(!1), z(!1), pe(!1);
        },
        style: te ? { animation: "fadeInUnfocused 1s ease-in-out" } : { display: "none" },
        children: "SKIP INTRO"
      }
    )
  ] });
};
export {
  kn as Demo,
  En as ListControls,
  Rn as ListHeader,
  xn as ListInfoCard,
  Tn as ListPlayer,
  Cr as ListPlayerContext
};
