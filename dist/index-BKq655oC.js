function kO(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var yv = {}, yy = { exports: {} }, Ut = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v1;
function _O() {
  if (v1) return Ut;
  v1 = 1;
  var c = Symbol.for("react.element"), u = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), g = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), L = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), A = Symbol.iterator;
  function K($) {
    return $ === null || typeof $ != "object" ? null : ($ = A && $[A] || $["@@iterator"], typeof $ == "function" ? $ : null);
  }
  var B = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, se = Object.assign, We = {};
  function Ce($, q, Ne) {
    this.props = $, this.context = q, this.refs = We, this.updater = Ne || B;
  }
  Ce.prototype.isReactComponent = {}, Ce.prototype.setState = function($, q) {
    if (typeof $ != "object" && typeof $ != "function" && $ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, $, q, "setState");
  }, Ce.prototype.forceUpdate = function($) {
    this.updater.enqueueForceUpdate(this, $, "forceUpdate");
  };
  function ht() {
  }
  ht.prototype = Ce.prototype;
  function ye($, q, Ne) {
    this.props = $, this.context = q, this.refs = We, this.updater = Ne || B;
  }
  var Ue = ye.prototype = new ht();
  Ue.constructor = ye, se(Ue, Ce.prototype), Ue.isPureReactComponent = !0;
  var ut = Array.isArray, Oe = Object.prototype.hasOwnProperty, st = { current: null }, ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function nt($, q, Ne) {
    var Te, Ge = {}, ot = null, St = null;
    if (q != null) for (Te in q.ref !== void 0 && (St = q.ref), q.key !== void 0 && (ot = "" + q.key), q) Oe.call(q, Te) && !ge.hasOwnProperty(Te) && (Ge[Te] = q[Te]);
    var wt = arguments.length - 2;
    if (wt === 1) Ge.children = Ne;
    else if (1 < wt) {
      for (var Tt = Array(wt), tn = 0; tn < wt; tn++) Tt[tn] = arguments[tn + 2];
      Ge.children = Tt;
    }
    if ($ && $.defaultProps) for (Te in wt = $.defaultProps, wt) Ge[Te] === void 0 && (Ge[Te] = wt[Te]);
    return { $$typeof: c, type: $, key: ot, ref: St, props: Ge, _owner: st.current };
  }
  function _e($, q) {
    return { $$typeof: c, type: $.type, key: q, ref: $.ref, props: $.props, _owner: $._owner };
  }
  function xt($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === c;
  }
  function Ct($) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + $.replace(/[=:]/g, function(Ne) {
      return q[Ne];
    });
  }
  var $t = /\/+/g;
  function je($, q) {
    return typeof $ == "object" && $ !== null && $.key != null ? Ct("" + $.key) : q.toString(36);
  }
  function at($, q, Ne, Te, Ge) {
    var ot = typeof $;
    (ot === "undefined" || ot === "boolean") && ($ = null);
    var St = !1;
    if ($ === null) St = !0;
    else switch (ot) {
      case "string":
      case "number":
        St = !0;
        break;
      case "object":
        switch ($.$$typeof) {
          case c:
          case u:
            St = !0;
        }
    }
    if (St) return St = $, Ge = Ge(St), $ = Te === "" ? "." + je(St, 0) : Te, ut(Ge) ? (Ne = "", $ != null && (Ne = $.replace($t, "$&/") + "/"), at(Ge, q, Ne, "", function(tn) {
      return tn;
    })) : Ge != null && (xt(Ge) && (Ge = _e(Ge, Ne + (!Ge.key || St && St.key === Ge.key ? "" : ("" + Ge.key).replace($t, "$&/") + "/") + $)), q.push(Ge)), 1;
    if (St = 0, Te = Te === "" ? "." : Te + ":", ut($)) for (var wt = 0; wt < $.length; wt++) {
      ot = $[wt];
      var Tt = Te + je(ot, wt);
      St += at(ot, q, Ne, Tt, Ge);
    }
    else if (Tt = K($), typeof Tt == "function") for ($ = Tt.call($), wt = 0; !(ot = $.next()).done; ) ot = ot.value, Tt = Te + je(ot, wt++), St += at(ot, q, Ne, Tt, Ge);
    else if (ot === "object") throw q = String($), Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys($).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.");
    return St;
  }
  function gt($, q, Ne) {
    if ($ == null) return $;
    var Te = [], Ge = 0;
    return at($, Te, "", "", function(ot) {
      return q.call(Ne, ot, Ge++);
    }), Te;
  }
  function rt($) {
    if ($._status === -1) {
      var q = $._result;
      q = q(), q.then(function(Ne) {
        ($._status === 0 || $._status === -1) && ($._status = 1, $._result = Ne);
      }, function(Ne) {
        ($._status === 0 || $._status === -1) && ($._status = 2, $._result = Ne);
      }), $._status === -1 && ($._status = 0, $._result = q);
    }
    if ($._status === 1) return $._result.default;
    throw $._result;
  }
  var we = { current: null }, ce = { transition: null }, Le = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: ce, ReactCurrentOwner: st };
  function oe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ut.Children = { map: gt, forEach: function($, q, Ne) {
    gt($, function() {
      q.apply(this, arguments);
    }, Ne);
  }, count: function($) {
    var q = 0;
    return gt($, function() {
      q++;
    }), q;
  }, toArray: function($) {
    return gt($, function(q) {
      return q;
    }) || [];
  }, only: function($) {
    if (!xt($)) throw Error("React.Children.only expected to receive a single React element child.");
    return $;
  } }, Ut.Component = Ce, Ut.Fragment = d, Ut.Profiler = S, Ut.PureComponent = ye, Ut.StrictMode = y, Ut.Suspense = x, Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Le, Ut.act = oe, Ut.cloneElement = function($, q, Ne) {
    if ($ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + $ + ".");
    var Te = se({}, $.props), Ge = $.key, ot = $.ref, St = $._owner;
    if (q != null) {
      if (q.ref !== void 0 && (ot = q.ref, St = st.current), q.key !== void 0 && (Ge = "" + q.key), $.type && $.type.defaultProps) var wt = $.type.defaultProps;
      for (Tt in q) Oe.call(q, Tt) && !ge.hasOwnProperty(Tt) && (Te[Tt] = q[Tt] === void 0 && wt !== void 0 ? wt[Tt] : q[Tt]);
    }
    var Tt = arguments.length - 2;
    if (Tt === 1) Te.children = Ne;
    else if (1 < Tt) {
      wt = Array(Tt);
      for (var tn = 0; tn < Tt; tn++) wt[tn] = arguments[tn + 2];
      Te.children = wt;
    }
    return { $$typeof: c, type: $.type, key: Ge, ref: ot, props: Te, _owner: St };
  }, Ut.createContext = function($) {
    return $ = { $$typeof: g, _currentValue: $, _currentValue2: $, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, $.Provider = { $$typeof: T, _context: $ }, $.Consumer = $;
  }, Ut.createElement = nt, Ut.createFactory = function($) {
    var q = nt.bind(null, $);
    return q.type = $, q;
  }, Ut.createRef = function() {
    return { current: null };
  }, Ut.forwardRef = function($) {
    return { $$typeof: _, render: $ };
  }, Ut.isValidElement = xt, Ut.lazy = function($) {
    return { $$typeof: P, _payload: { _status: -1, _result: $ }, _init: rt };
  }, Ut.memo = function($, q) {
    return { $$typeof: L, type: $, compare: q === void 0 ? null : q };
  }, Ut.startTransition = function($) {
    var q = ce.transition;
    ce.transition = {};
    try {
      $();
    } finally {
      ce.transition = q;
    }
  }, Ut.unstable_act = oe, Ut.useCallback = function($, q) {
    return we.current.useCallback($, q);
  }, Ut.useContext = function($) {
    return we.current.useContext($);
  }, Ut.useDebugValue = function() {
  }, Ut.useDeferredValue = function($) {
    return we.current.useDeferredValue($);
  }, Ut.useEffect = function($, q) {
    return we.current.useEffect($, q);
  }, Ut.useId = function() {
    return we.current.useId();
  }, Ut.useImperativeHandle = function($, q, Ne) {
    return we.current.useImperativeHandle($, q, Ne);
  }, Ut.useInsertionEffect = function($, q) {
    return we.current.useInsertionEffect($, q);
  }, Ut.useLayoutEffect = function($, q) {
    return we.current.useLayoutEffect($, q);
  }, Ut.useMemo = function($, q) {
    return we.current.useMemo($, q);
  }, Ut.useReducer = function($, q, Ne) {
    return we.current.useReducer($, q, Ne);
  }, Ut.useRef = function($) {
    return we.current.useRef($);
  }, Ut.useState = function($) {
    return we.current.useState($);
  }, Ut.useSyncExternalStore = function($, q, Ne) {
    return we.current.useSyncExternalStore($, q, Ne);
  }, Ut.useTransition = function() {
    return we.current.useTransition();
  }, Ut.version = "18.3.1", Ut;
}
var Sv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Sv.exports;
var h1;
function DO() {
  return h1 || (h1 = 1, function(c, u) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = "18.3.1", y = Symbol.for("react.element"), S = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), L = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), We = Symbol.for("react.offscreen"), Ce = Symbol.iterator, ht = "@@iterator";
      function ye(E) {
        if (E === null || typeof E != "object")
          return null;
        var D = Ce && E[Ce] || E[ht];
        return typeof D == "function" ? D : null;
      }
      var Ue = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ut = {
        transition: null
      }, Oe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, st = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ge = {}, nt = null;
      function _e(E) {
        nt = E;
      }
      ge.setExtraStackFrame = function(E) {
        nt = E;
      }, ge.getCurrentStack = null, ge.getStackAddendum = function() {
        var E = "";
        nt && (E += nt);
        var D = ge.getCurrentStack;
        return D && (E += D() || ""), E;
      };
      var xt = !1, Ct = !1, $t = !1, je = !1, at = !1, gt = {
        ReactCurrentDispatcher: Ue,
        ReactCurrentBatchConfig: ut,
        ReactCurrentOwner: st
      };
      gt.ReactDebugCurrentFrame = ge, gt.ReactCurrentActQueue = Oe;
      function rt(E) {
        {
          for (var D = arguments.length, Y = new Array(D > 1 ? D - 1 : 0), X = 1; X < D; X++)
            Y[X - 1] = arguments[X];
          ce("warn", E, Y);
        }
      }
      function we(E) {
        {
          for (var D = arguments.length, Y = new Array(D > 1 ? D - 1 : 0), X = 1; X < D; X++)
            Y[X - 1] = arguments[X];
          ce("error", E, Y);
        }
      }
      function ce(E, D, Y) {
        {
          var X = gt.ReactDebugCurrentFrame, fe = X.getStackAddendum();
          fe !== "" && (D += "%s", Y = Y.concat([fe]));
          var et = Y.map(function(be) {
            return String(be);
          });
          et.unshift("Warning: " + D), Function.prototype.apply.call(console[E], console, et);
        }
      }
      var Le = {};
      function oe(E, D) {
        {
          var Y = E.constructor, X = Y && (Y.displayName || Y.name) || "ReactClass", fe = X + "." + D;
          if (Le[fe])
            return;
          we("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, X), Le[fe] = !0;
        }
      }
      var $ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(E) {
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
        enqueueForceUpdate: function(E, D, Y) {
          oe(E, "forceUpdate");
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
        enqueueReplaceState: function(E, D, Y, X) {
          oe(E, "replaceState");
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
        enqueueSetState: function(E, D, Y, X) {
          oe(E, "setState");
        }
      }, q = Object.assign, Ne = {};
      Object.freeze(Ne);
      function Te(E, D, Y) {
        this.props = E, this.context = D, this.refs = Ne, this.updater = Y || $;
      }
      Te.prototype.isReactComponent = {}, Te.prototype.setState = function(E, D) {
        if (typeof E != "object" && typeof E != "function" && E != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, D, "setState");
      }, Te.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate");
      };
      {
        var Ge = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ot = function(E, D) {
          Object.defineProperty(Te.prototype, E, {
            get: function() {
              rt("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
            }
          });
        };
        for (var St in Ge)
          Ge.hasOwnProperty(St) && ot(St, Ge[St]);
      }
      function wt() {
      }
      wt.prototype = Te.prototype;
      function Tt(E, D, Y) {
        this.props = E, this.context = D, this.refs = Ne, this.updater = Y || $;
      }
      var tn = Tt.prototype = new wt();
      tn.constructor = Tt, q(tn, Te.prototype), tn.isPureReactComponent = !0;
      function nr() {
        var E = {
          current: null
        };
        return Object.seal(E), E;
      }
      var rr = Array.isArray;
      function dn(E) {
        return rr(E);
      }
      function zn(E) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, Y = D && E[Symbol.toStringTag] || E.constructor.name || "Object";
          return Y;
        }
      }
      function Un(E) {
        try {
          return On(E), !1;
        } catch {
          return !0;
        }
      }
      function On(E) {
        return "" + E;
      }
      function wn(E) {
        if (Un(E))
          return we("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zn(E)), On(E);
      }
      function _r(E, D, Y) {
        var X = E.displayName;
        if (X)
          return X;
        var fe = D.displayName || D.name || "";
        return fe !== "" ? Y + "(" + fe + ")" : Y;
      }
      function Dr(E) {
        return E.displayName || "Context";
      }
      function In(E) {
        if (E == null)
          return null;
        if (typeof E.tag == "number" && we("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
          return E.displayName || E.name || null;
        if (typeof E == "string")
          return E;
        switch (E) {
          case T:
            return "Fragment";
          case S:
            return "Portal";
          case _:
            return "Profiler";
          case g:
            return "StrictMode";
          case A:
            return "Suspense";
          case K:
            return "SuspenseList";
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case L:
              var D = E;
              return Dr(D) + ".Consumer";
            case x:
              var Y = E;
              return Dr(Y._context) + ".Provider";
            case P:
              return _r(E, E.render, "ForwardRef");
            case B:
              var X = E.displayName || null;
              return X !== null ? X : In(E.type) || "Memo";
            case se: {
              var fe = E, et = fe._payload, be = fe._init;
              try {
                return In(be(et));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ir = Object.prototype.hasOwnProperty, Or = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ar, jr, Qn;
      Qn = {};
      function Lr(E) {
        if (ir.call(E, "ref")) {
          var D = Object.getOwnPropertyDescriptor(E, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return E.ref !== void 0;
      }
      function pn(E) {
        if (ir.call(E, "key")) {
          var D = Object.getOwnPropertyDescriptor(E, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return E.key !== void 0;
      }
      function qn(E, D) {
        var Y = function() {
          ar || (ar = !0, we("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        Y.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: Y,
          configurable: !0
        });
      }
      function Fr(E, D) {
        var Y = function() {
          jr || (jr = !0, we("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        Y.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: Y,
          configurable: !0
        });
      }
      function vr(E) {
        if (typeof E.ref == "string" && st.current && E.__self && st.current.stateNode !== E.__self) {
          var D = In(st.current.type);
          Qn[D] || (we('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, E.ref), Qn[D] = !0);
        }
      }
      var ve = function(E, D, Y, X, fe, et, be) {
        var Ze = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: y,
          // Built-in properties that belong on the element
          type: E,
          key: D,
          ref: Y,
          props: be,
          // Record the component responsible for creating this element.
          _owner: et
        };
        return Ze._store = {}, Object.defineProperty(Ze._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ze, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.defineProperty(Ze, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: fe
        }), Object.freeze && (Object.freeze(Ze.props), Object.freeze(Ze)), Ze;
      };
      function Pe(E, D, Y) {
        var X, fe = {}, et = null, be = null, Ze = null, Dt = null;
        if (D != null) {
          Lr(D) && (be = D.ref, vr(D)), pn(D) && (wn(D.key), et = "" + D.key), Ze = D.__self === void 0 ? null : D.__self, Dt = D.__source === void 0 ? null : D.__source;
          for (X in D)
            ir.call(D, X) && !Or.hasOwnProperty(X) && (fe[X] = D[X]);
        }
        var jt = arguments.length - 2;
        if (jt === 1)
          fe.children = Y;
        else if (jt > 1) {
          for (var ln = Array(jt), rn = 0; rn < jt; rn++)
            ln[rn] = arguments[rn + 2];
          Object.freeze && Object.freeze(ln), fe.children = ln;
        }
        if (E && E.defaultProps) {
          var un = E.defaultProps;
          for (X in un)
            fe[X] === void 0 && (fe[X] = un[X]);
        }
        if (et || be) {
          var cn = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          et && qn(fe, cn), be && Fr(fe, cn);
        }
        return ve(E, et, be, Ze, Dt, st.current, fe);
      }
      function mt(E, D) {
        var Y = ve(E.type, D, E.ref, E._self, E._source, E._owner, E.props);
        return Y;
      }
      function Ft(E, D, Y) {
        if (E == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
        var X, fe = q({}, E.props), et = E.key, be = E.ref, Ze = E._self, Dt = E._source, jt = E._owner;
        if (D != null) {
          Lr(D) && (be = D.ref, jt = st.current), pn(D) && (wn(D.key), et = "" + D.key);
          var ln;
          E.type && E.type.defaultProps && (ln = E.type.defaultProps);
          for (X in D)
            ir.call(D, X) && !Or.hasOwnProperty(X) && (D[X] === void 0 && ln !== void 0 ? fe[X] = ln[X] : fe[X] = D[X]);
        }
        var rn = arguments.length - 2;
        if (rn === 1)
          fe.children = Y;
        else if (rn > 1) {
          for (var un = Array(rn), cn = 0; cn < rn; cn++)
            un[cn] = arguments[cn + 2];
          fe.children = un;
        }
        return ve(E.type, et, be, Ze, Dt, jt, fe);
      }
      function Vt(E) {
        return typeof E == "object" && E !== null && E.$$typeof === y;
      }
      var Tn = ".", vn = ":";
      function or(E) {
        var D = /[=:]/g, Y = {
          "=": "=0",
          ":": "=2"
        }, X = E.replace(D, function(fe) {
          return Y[fe];
        });
        return "$" + X;
      }
      var Kt = !1, hr = /\/+/g;
      function It(E) {
        return E.replace(hr, "$&/");
      }
      function Bt(E, D) {
        return typeof E == "object" && E !== null && E.key != null ? (wn(E.key), or("" + E.key)) : D.toString(36);
      }
      function Ri(E, D, Y, X, fe) {
        var et = typeof E;
        (et === "undefined" || et === "boolean") && (E = null);
        var be = !1;
        if (E === null)
          be = !0;
        else
          switch (et) {
            case "string":
            case "number":
              be = !0;
              break;
            case "object":
              switch (E.$$typeof) {
                case y:
                case S:
                  be = !0;
              }
          }
        if (be) {
          var Ze = E, Dt = fe(Ze), jt = X === "" ? Tn + Bt(Ze, 0) : X;
          if (dn(Dt)) {
            var ln = "";
            jt != null && (ln = It(jt) + "/"), Ri(Dt, D, ln, "", function(md) {
              return md;
            });
          } else Dt != null && (Vt(Dt) && (Dt.key && (!Ze || Ze.key !== Dt.key) && wn(Dt.key), Dt = mt(
            Dt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            Y + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Dt.key && (!Ze || Ze.key !== Dt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              It("" + Dt.key) + "/"
            ) : "") + jt
          )), D.push(Dt));
          return 1;
        }
        var rn, un, cn = 0, zt = X === "" ? Tn : X + vn;
        if (dn(E))
          for (var Wa = 0; Wa < E.length; Wa++)
            rn = E[Wa], un = zt + Bt(rn, Wa), cn += Ri(rn, D, Y, un, fe);
        else {
          var nu = ye(E);
          if (typeof nu == "function") {
            var ss = E;
            nu === ss.entries && (Kt || rt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var hd = nu.call(ss), pa, cs = 0; !(pa = hd.next()).done; )
              rn = pa.value, un = zt + Bt(rn, cs++), cn += Ri(rn, D, Y, un, fe);
          } else if (et === "object") {
            var fs = String(E);
            throw new Error("Objects are not valid as a React child (found: " + (fs === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : fs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return cn;
      }
      function ri(E, D, Y) {
        if (E == null)
          return E;
        var X = [], fe = 0;
        return Ri(E, X, "", "", function(et) {
          return D.call(Y, et, fe++);
        }), X;
      }
      function Ca(E) {
        var D = 0;
        return ri(E, function() {
          D++;
        }), D;
      }
      function Fa(E, D, Y) {
        ri(E, function() {
          D.apply(this, arguments);
        }, Y);
      }
      function bo(E) {
        return ri(E, function(D) {
          return D;
        }) || [];
      }
      function ii(E) {
        if (!Vt(E))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return E;
      }
      function wa(E) {
        var D = {
          $$typeof: L,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: E,
          _currentValue2: E,
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
        D.Provider = {
          $$typeof: x,
          _context: D
        };
        var Y = !1, X = !1, fe = !1;
        {
          var et = {
            $$typeof: L,
            _context: D
          };
          Object.defineProperties(et, {
            Provider: {
              get: function() {
                return X || (X = !0, we("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
              },
              set: function(be) {
                D.Provider = be;
              }
            },
            _currentValue: {
              get: function() {
                return D._currentValue;
              },
              set: function(be) {
                D._currentValue = be;
              }
            },
            _currentValue2: {
              get: function() {
                return D._currentValue2;
              },
              set: function(be) {
                D._currentValue2 = be;
              }
            },
            _threadCount: {
              get: function() {
                return D._threadCount;
              },
              set: function(be) {
                D._threadCount = be;
              }
            },
            Consumer: {
              get: function() {
                return Y || (Y = !0, we("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
              }
            },
            displayName: {
              get: function() {
                return D.displayName;
              },
              set: function(be) {
                fe || (rt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", be), fe = !0);
              }
            }
          }), D.Consumer = et;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var Mr = -1, Ar = 0, $r = 1, bn = 2;
      function mr(E) {
        if (E._status === Mr) {
          var D = E._result, Y = D();
          if (Y.then(function(et) {
            if (E._status === Ar || E._status === Mr) {
              var be = E;
              be._status = $r, be._result = et;
            }
          }, function(et) {
            if (E._status === Ar || E._status === Mr) {
              var be = E;
              be._status = bn, be._result = et;
            }
          }), E._status === Mr) {
            var X = E;
            X._status = Ar, X._result = Y;
          }
        }
        if (E._status === $r) {
          var fe = E._result;
          return fe === void 0 && we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, fe), "default" in fe || we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, fe), fe.default;
        } else
          throw E._result;
      }
      function Vr(E) {
        var D = {
          // We use these fields to store the result.
          _status: Mr,
          _result: E
        }, Y = {
          $$typeof: se,
          _payload: D,
          _init: mr
        };
        {
          var X, fe;
          Object.defineProperties(Y, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(et) {
                we("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = et, Object.defineProperty(Y, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return fe;
              },
              set: function(et) {
                we("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), fe = et, Object.defineProperty(Y, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Y;
      }
      function Hi(E) {
        E != null && E.$$typeof === B ? we("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof E != "function" ? we("forwardRef requires a render function but was given %s.", E === null ? "null" : typeof E) : E.length !== 0 && E.length !== 2 && we("forwardRef render functions accept exactly two parameters: props and ref. %s", E.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), E != null && (E.defaultProps != null || E.propTypes != null) && we("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: P,
          render: E
        };
        {
          var Y;
          Object.defineProperty(D, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(X) {
              Y = X, !E.name && !E.displayName && (E.displayName = X);
            }
          });
        }
        return D;
      }
      var xi;
      xi = Symbol.for("react.module.reference");
      function O(E) {
        return !!(typeof E == "string" || typeof E == "function" || E === T || E === _ || at || E === g || E === A || E === K || je || E === We || xt || Ct || $t || typeof E == "object" && E !== null && (E.$$typeof === se || E.$$typeof === B || E.$$typeof === x || E.$$typeof === L || E.$$typeof === P || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        E.$$typeof === xi || E.getModuleId !== void 0));
      }
      function ne(E, D) {
        O(E) || we("memo: The first argument must be a component. Instead received: %s", E === null ? "null" : typeof E);
        var Y = {
          $$typeof: B,
          type: E,
          compare: D === void 0 ? null : D
        };
        {
          var X;
          Object.defineProperty(Y, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return X;
            },
            set: function(fe) {
              X = fe, !E.name && !E.displayName && (E.displayName = fe);
            }
          });
        }
        return Y;
      }
      function le() {
        var E = Ue.current;
        return E === null && we(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), E;
      }
      function He(E) {
        var D = le();
        if (E._context !== void 0) {
          var Y = E._context;
          Y.Consumer === E ? we("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Y.Provider === E && we("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(E);
      }
      function kt(E) {
        var D = le();
        return D.useState(E);
      }
      function Lt(E, D, Y) {
        var X = le();
        return X.useReducer(E, D, Y);
      }
      function Qe(E) {
        var D = le();
        return D.useRef(E);
      }
      function Rt(E, D) {
        var Y = le();
        return Y.useEffect(E, D);
      }
      function Pn(E, D) {
        var Y = le();
        return Y.useInsertionEffect(E, D);
      }
      function V(E, D) {
        var Y = le();
        return Y.useLayoutEffect(E, D);
      }
      function de(E, D) {
        var Y = le();
        return Y.useCallback(E, D);
      }
      function qe(E, D) {
        var Y = le();
        return Y.useMemo(E, D);
      }
      function Wt(E, D, Y) {
        var X = le();
        return X.useImperativeHandle(E, D, Y);
      }
      function ct(E, D) {
        {
          var Y = le();
          return Y.useDebugValue(E, D);
        }
      }
      function nn() {
        var E = le();
        return E.useTransition();
      }
      function Rn(E) {
        var D = le();
        return D.useDeferredValue(E);
      }
      function _t() {
        var E = le();
        return E.useId();
      }
      function ji(E, D, Y) {
        var X = le();
        return X.useSyncExternalStore(E, D, Y);
      }
      var So = 0, Yl, Eo, ai, as, Ir, os, ls;
      function vc() {
      }
      vc.__reactDisabledLog = !0;
      function Gl() {
        {
          if (So === 0) {
            Yl = console.log, Eo = console.info, ai = console.warn, as = console.error, Ir = console.group, os = console.groupCollapsed, ls = console.groupEnd;
            var E = {
              configurable: !0,
              enumerable: !0,
              value: vc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: E,
              log: E,
              warn: E,
              error: E,
              group: E,
              groupCollapsed: E,
              groupEnd: E
            });
          }
          So++;
        }
      }
      function Co() {
        {
          if (So--, So === 0) {
            var E = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: q({}, E, {
                value: Yl
              }),
              info: q({}, E, {
                value: Eo
              }),
              warn: q({}, E, {
                value: ai
              }),
              error: q({}, E, {
                value: as
              }),
              group: q({}, E, {
                value: Ir
              }),
              groupCollapsed: q({}, E, {
                value: os
              }),
              groupEnd: q({}, E, {
                value: ls
              })
            });
          }
          So < 0 && we("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var fa = gt.ReactCurrentDispatcher, Br;
      function wo(E, D, Y) {
        {
          if (Br === void 0)
            try {
              throw Error();
            } catch (fe) {
              var X = fe.stack.trim().match(/\n( *(at )?)/);
              Br = X && X[1] || "";
            }
          return `
` + Br + E;
        }
      }
      var To = !1, Ro;
      {
        var Ql = typeof WeakMap == "function" ? WeakMap : Map;
        Ro = new Ql();
      }
      function ql(E, D) {
        if (!E || To)
          return "";
        {
          var Y = Ro.get(E);
          if (Y !== void 0)
            return Y;
        }
        var X;
        To = !0;
        var fe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var et;
        et = fa.current, fa.current = null, Gl();
        try {
          if (D) {
            var be = function() {
              throw Error();
            };
            if (Object.defineProperty(be.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(be, []);
              } catch (zt) {
                X = zt;
              }
              Reflect.construct(E, [], be);
            } else {
              try {
                be.call();
              } catch (zt) {
                X = zt;
              }
              E.call(be.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (zt) {
              X = zt;
            }
            E();
          }
        } catch (zt) {
          if (zt && X && typeof zt.stack == "string") {
            for (var Ze = zt.stack.split(`
`), Dt = X.stack.split(`
`), jt = Ze.length - 1, ln = Dt.length - 1; jt >= 1 && ln >= 0 && Ze[jt] !== Dt[ln]; )
              ln--;
            for (; jt >= 1 && ln >= 0; jt--, ln--)
              if (Ze[jt] !== Dt[ln]) {
                if (jt !== 1 || ln !== 1)
                  do
                    if (jt--, ln--, ln < 0 || Ze[jt] !== Dt[ln]) {
                      var rn = `
` + Ze[jt].replace(" at new ", " at ");
                      return E.displayName && rn.includes("<anonymous>") && (rn = rn.replace("<anonymous>", E.displayName)), typeof E == "function" && Ro.set(E, rn), rn;
                    }
                  while (jt >= 1 && ln >= 0);
                break;
              }
          }
        } finally {
          To = !1, fa.current = et, Co(), Error.prepareStackTrace = fe;
        }
        var un = E ? E.displayName || E.name : "", cn = un ? wo(un) : "";
        return typeof E == "function" && Ro.set(E, cn), cn;
      }
      function Va(E, D, Y) {
        return ql(E, !1);
      }
      function vd(E) {
        var D = E.prototype;
        return !!(D && D.isReactComponent);
      }
      function Ta(E, D, Y) {
        if (E == null)
          return "";
        if (typeof E == "function")
          return ql(E, vd(E));
        if (typeof E == "string")
          return wo(E);
        switch (E) {
          case A:
            return wo("Suspense");
          case K:
            return wo("SuspenseList");
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case P:
              return Va(E.render);
            case B:
              return Ta(E.type, D, Y);
            case se: {
              var X = E, fe = X._payload, et = X._init;
              try {
                return Ta(et(fe), D, Y);
              } catch {
              }
            }
          }
        return "";
      }
      var Yt = {}, Kl = gt.ReactDebugCurrentFrame;
      function nl(E) {
        if (E) {
          var D = E._owner, Y = Ta(E.type, E._source, D ? D.type : null);
          Kl.setExtraStackFrame(Y);
        } else
          Kl.setExtraStackFrame(null);
      }
      function Xl(E, D, Y, X, fe) {
        {
          var et = Function.call.bind(ir);
          for (var be in E)
            if (et(E, be)) {
              var Ze = void 0;
              try {
                if (typeof E[be] != "function") {
                  var Dt = Error((X || "React class") + ": " + Y + " type `" + be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Dt.name = "Invariant Violation", Dt;
                }
                Ze = E[be](D, be, X, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (jt) {
                Ze = jt;
              }
              Ze && !(Ze instanceof Error) && (nl(fe), we("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", Y, be, typeof Ze), nl(null)), Ze instanceof Error && !(Ze.message in Yt) && (Yt[Ze.message] = !0, nl(fe), we("Failed %s type: %s", Y, Ze.message), nl(null));
            }
        }
      }
      function Nt(E) {
        if (E) {
          var D = E._owner, Y = Ta(E.type, E._source, D ? D.type : null);
          _e(Y);
        } else
          _e(null);
      }
      var Zl;
      Zl = !1;
      function Jl() {
        if (st.current) {
          var E = In(st.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
      function pt(E) {
        if (E !== void 0) {
          var D = E.fileName.replace(/^.*[\\\/]/, ""), Y = E.lineNumber;
          return `

Check your code at ` + D + ":" + Y + ".";
        }
        return "";
      }
      function rl(E) {
        return E != null ? pt(E.__source) : "";
      }
      var xn = {};
      function oi(E) {
        var D = Jl();
        if (!D) {
          var Y = typeof E == "string" ? E : E.displayName || E.name;
          Y && (D = `

Check the top-level render call using <` + Y + ">.");
        }
        return D;
      }
      function Wr(E, D) {
        if (!(!E._store || E._store.validated || E.key != null)) {
          E._store.validated = !0;
          var Y = oi(D);
          if (!xn[Y]) {
            xn[Y] = !0;
            var X = "";
            E && E._owner && E._owner !== st.current && (X = " It was passed a child from " + In(E._owner.type) + "."), Nt(E), we('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, X), Nt(null);
          }
        }
      }
      function xo(E, D) {
        if (typeof E == "object") {
          if (dn(E))
            for (var Y = 0; Y < E.length; Y++) {
              var X = E[Y];
              Vt(X) && Wr(X, D);
            }
          else if (Vt(E))
            E._store && (E._store.validated = !0);
          else if (E) {
            var fe = ye(E);
            if (typeof fe == "function" && fe !== E.entries)
              for (var et = fe.call(E), be; !(be = et.next()).done; )
                Vt(be.value) && Wr(be.value, D);
          }
        }
      }
      function Ln(E) {
        {
          var D = E.type;
          if (D == null || typeof D == "string")
            return;
          var Y;
          if (typeof D == "function")
            Y = D.propTypes;
          else if (typeof D == "object" && (D.$$typeof === P || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          D.$$typeof === B))
            Y = D.propTypes;
          else
            return;
          if (Y) {
            var X = In(D);
            Xl(Y, E.props, "prop", X, E);
          } else if (D.PropTypes !== void 0 && !Zl) {
            Zl = !0;
            var fe = In(D);
            we("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && we("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Zt(E) {
        {
          for (var D = Object.keys(E.props), Y = 0; Y < D.length; Y++) {
            var X = D[Y];
            if (X !== "children" && X !== "key") {
              Nt(E), we("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), Nt(null);
              break;
            }
          }
          E.ref !== null && (Nt(E), we("Invalid attribute `ref` supplied to `React.Fragment`."), Nt(null));
        }
      }
      function hc(E, D, Y) {
        var X = O(E);
        if (!X) {
          var fe = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var et = rl(D);
          et ? fe += et : fe += Jl();
          var be;
          E === null ? be = "null" : dn(E) ? be = "array" : E !== void 0 && E.$$typeof === y ? (be = "<" + (In(E.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : be = typeof E, we("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, fe);
        }
        var Ze = Pe.apply(this, arguments);
        if (Ze == null)
          return Ze;
        if (X)
          for (var Dt = 2; Dt < arguments.length; Dt++)
            xo(arguments[Dt], E);
        return E === T ? Zt(Ze) : Ln(Ze), Ze;
      }
      var li = !1;
      function lr(E) {
        var D = hc.bind(null, E);
        return D.type = E, li || (li = !0, rt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return rt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: E
            }), E;
          }
        }), D;
      }
      function Ra(E, D, Y) {
        for (var X = Ft.apply(this, arguments), fe = 2; fe < arguments.length; fe++)
          xo(arguments[fe], X.type);
        return Ln(X), X;
      }
      function mc(E, D) {
        var Y = ut.transition;
        ut.transition = {};
        var X = ut.transition;
        ut.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          E();
        } finally {
          if (ut.transition = Y, Y === null && X._updatedFibers) {
            var fe = X._updatedFibers.size;
            fe > 10 && rt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), X._updatedFibers.clear();
          }
        }
      }
      var Ia = !1, ko = null;
      function yc(E) {
        if (ko === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), Y = c && c[D];
            ko = Y.call(c, "timers").setImmediate;
          } catch {
            ko = function(fe) {
              Ia === !1 && (Ia = !0, typeof MessageChannel > "u" && we("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var et = new MessageChannel();
              et.port1.onmessage = fe, et.port2.postMessage(void 0);
            };
          }
        return ko(E);
      }
      var Fi = 0, _o = !1;
      function Ba(E) {
        {
          var D = Fi;
          Fi++, Oe.current === null && (Oe.current = []);
          var Y = Oe.isBatchingLegacy, X;
          try {
            if (Oe.isBatchingLegacy = !0, X = E(), !Y && Oe.didScheduleLegacyUpdate) {
              var fe = Oe.current;
              fe !== null && (Oe.didScheduleLegacyUpdate = !1, Oo(fe));
            }
          } catch (un) {
            throw Vi(D), un;
          } finally {
            Oe.isBatchingLegacy = Y;
          }
          if (X !== null && typeof X == "object" && typeof X.then == "function") {
            var et = X, be = !1, Ze = {
              then: function(un, cn) {
                be = !0, et.then(function(zt) {
                  Vi(D), Fi === 0 ? eu(zt, un, cn) : un(zt);
                }, function(zt) {
                  Vi(D), cn(zt);
                });
              }
            };
            return !_o && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              be || (_o = !0, we("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ze;
          } else {
            var Dt = X;
            if (Vi(D), Fi === 0) {
              var jt = Oe.current;
              jt !== null && (Oo(jt), Oe.current = null);
              var ln = {
                then: function(un, cn) {
                  Oe.current === null ? (Oe.current = [], eu(Dt, un, cn)) : un(Dt);
                }
              };
              return ln;
            } else {
              var rn = {
                then: function(un, cn) {
                  un(Dt);
                }
              };
              return rn;
            }
          }
        }
      }
      function Vi(E) {
        E !== Fi - 1 && we("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Fi = E;
      }
      function eu(E, D, Y) {
        {
          var X = Oe.current;
          if (X !== null)
            try {
              Oo(X), yc(function() {
                X.length === 0 ? (Oe.current = null, D(E)) : eu(E, D, Y);
              });
            } catch (fe) {
              Y(fe);
            }
          else
            D(E);
        }
      }
      var Do = !1;
      function Oo(E) {
        if (!Do) {
          Do = !0;
          var D = 0;
          try {
            for (; D < E.length; D++) {
              var Y = E[D];
              do
                Y = Y(!0);
              while (Y !== null);
            }
            E.length = 0;
          } catch (X) {
            throw E = E.slice(D + 1), X;
          } finally {
            Do = !1;
          }
        }
      }
      var il = hc, tu = Ra, us = lr, da = {
        map: ri,
        forEach: Fa,
        count: Ca,
        toArray: bo,
        only: ii
      };
      u.Children = da, u.Component = Te, u.Fragment = T, u.Profiler = _, u.PureComponent = Tt, u.StrictMode = g, u.Suspense = A, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gt, u.act = Ba, u.cloneElement = tu, u.createContext = wa, u.createElement = il, u.createFactory = us, u.createRef = nr, u.forwardRef = Hi, u.isValidElement = Vt, u.lazy = Vr, u.memo = ne, u.startTransition = mc, u.unstable_act = Ba, u.useCallback = de, u.useContext = He, u.useDebugValue = ct, u.useDeferredValue = Rn, u.useEffect = Rt, u.useId = _t, u.useImperativeHandle = Wt, u.useInsertionEffect = Pn, u.useLayoutEffect = V, u.useMemo = qe, u.useReducer = Lt, u.useRef = Qe, u.useState = kt, u.useSyncExternalStore = ji, u.useTransition = nn, u.version = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Sv, Sv.exports)), Sv.exports;
}
var m1;
function Cv() {
  return m1 || (m1 = 1, process.env.NODE_ENV === "production" ? yy.exports = _O() : yy.exports = DO()), yy.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y1;
function OO() {
  if (y1) return yv;
  y1 = 1;
  var c = Cv(), u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, S = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(_, x, L) {
    var P, A = {}, K = null, B = null;
    L !== void 0 && (K = "" + L), x.key !== void 0 && (K = "" + x.key), x.ref !== void 0 && (B = x.ref);
    for (P in x) y.call(x, P) && !T.hasOwnProperty(P) && (A[P] = x[P]);
    if (_ && _.defaultProps) for (P in x = _.defaultProps, x) A[P] === void 0 && (A[P] = x[P]);
    return { $$typeof: u, type: _, key: K, ref: B, props: A, _owner: S.current };
  }
  return yv.Fragment = d, yv.jsx = g, yv.jsxs = g, yv;
}
var gv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g1;
function LO() {
  return g1 || (g1 = 1, process.env.NODE_ENV !== "production" && function() {
    var c = Cv(), u = Symbol.for("react.element"), d = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), _ = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), se = Symbol.iterator, We = "@@iterator";
    function Ce(O) {
      if (O === null || typeof O != "object")
        return null;
      var ne = se && O[se] || O[We];
      return typeof ne == "function" ? ne : null;
    }
    var ht = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ye(O) {
      {
        for (var ne = arguments.length, le = new Array(ne > 1 ? ne - 1 : 0), He = 1; He < ne; He++)
          le[He - 1] = arguments[He];
        Ue("error", O, le);
      }
    }
    function Ue(O, ne, le) {
      {
        var He = ht.ReactDebugCurrentFrame, kt = He.getStackAddendum();
        kt !== "" && (ne += "%s", le = le.concat([kt]));
        var Lt = le.map(function(Qe) {
          return String(Qe);
        });
        Lt.unshift("Warning: " + ne), Function.prototype.apply.call(console[O], console, Lt);
      }
    }
    var ut = !1, Oe = !1, st = !1, ge = !1, nt = !1, _e;
    _e = Symbol.for("react.module.reference");
    function xt(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === y || O === T || nt || O === S || O === L || O === P || ge || O === B || ut || Oe || st || typeof O == "object" && O !== null && (O.$$typeof === K || O.$$typeof === A || O.$$typeof === g || O.$$typeof === _ || O.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === _e || O.getModuleId !== void 0));
    }
    function Ct(O, ne, le) {
      var He = O.displayName;
      if (He)
        return He;
      var kt = ne.displayName || ne.name || "";
      return kt !== "" ? le + "(" + kt + ")" : le;
    }
    function $t(O) {
      return O.displayName || "Context";
    }
    function je(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case y:
          return "Fragment";
        case d:
          return "Portal";
        case T:
          return "Profiler";
        case S:
          return "StrictMode";
        case L:
          return "Suspense";
        case P:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case _:
            var ne = O;
            return $t(ne) + ".Consumer";
          case g:
            var le = O;
            return $t(le._context) + ".Provider";
          case x:
            return Ct(O, O.render, "ForwardRef");
          case A:
            var He = O.displayName || null;
            return He !== null ? He : je(O.type) || "Memo";
          case K: {
            var kt = O, Lt = kt._payload, Qe = kt._init;
            try {
              return je(Qe(Lt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var at = Object.assign, gt = 0, rt, we, ce, Le, oe, $, q;
    function Ne() {
    }
    Ne.__reactDisabledLog = !0;
    function Te() {
      {
        if (gt === 0) {
          rt = console.log, we = console.info, ce = console.warn, Le = console.error, oe = console.group, $ = console.groupCollapsed, q = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: Ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        gt++;
      }
    }
    function Ge() {
      {
        if (gt--, gt === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: at({}, O, {
              value: rt
            }),
            info: at({}, O, {
              value: we
            }),
            warn: at({}, O, {
              value: ce
            }),
            error: at({}, O, {
              value: Le
            }),
            group: at({}, O, {
              value: oe
            }),
            groupCollapsed: at({}, O, {
              value: $
            }),
            groupEnd: at({}, O, {
              value: q
            })
          });
        }
        gt < 0 && ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ot = ht.ReactCurrentDispatcher, St;
    function wt(O, ne, le) {
      {
        if (St === void 0)
          try {
            throw Error();
          } catch (kt) {
            var He = kt.stack.trim().match(/\n( *(at )?)/);
            St = He && He[1] || "";
          }
        return `
` + St + O;
      }
    }
    var Tt = !1, tn;
    {
      var nr = typeof WeakMap == "function" ? WeakMap : Map;
      tn = new nr();
    }
    function rr(O, ne) {
      if (!O || Tt)
        return "";
      {
        var le = tn.get(O);
        if (le !== void 0)
          return le;
      }
      var He;
      Tt = !0;
      var kt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Lt;
      Lt = ot.current, ot.current = null, Te();
      try {
        if (ne) {
          var Qe = function() {
            throw Error();
          };
          if (Object.defineProperty(Qe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Qe, []);
            } catch (nn) {
              He = nn;
            }
            Reflect.construct(O, [], Qe);
          } else {
            try {
              Qe.call();
            } catch (nn) {
              He = nn;
            }
            O.call(Qe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (nn) {
            He = nn;
          }
          O();
        }
      } catch (nn) {
        if (nn && He && typeof nn.stack == "string") {
          for (var Rt = nn.stack.split(`
`), Pn = He.stack.split(`
`), V = Rt.length - 1, de = Pn.length - 1; V >= 1 && de >= 0 && Rt[V] !== Pn[de]; )
            de--;
          for (; V >= 1 && de >= 0; V--, de--)
            if (Rt[V] !== Pn[de]) {
              if (V !== 1 || de !== 1)
                do
                  if (V--, de--, de < 0 || Rt[V] !== Pn[de]) {
                    var qe = `
` + Rt[V].replace(" at new ", " at ");
                    return O.displayName && qe.includes("<anonymous>") && (qe = qe.replace("<anonymous>", O.displayName)), typeof O == "function" && tn.set(O, qe), qe;
                  }
                while (V >= 1 && de >= 0);
              break;
            }
        }
      } finally {
        Tt = !1, ot.current = Lt, Ge(), Error.prepareStackTrace = kt;
      }
      var Wt = O ? O.displayName || O.name : "", ct = Wt ? wt(Wt) : "";
      return typeof O == "function" && tn.set(O, ct), ct;
    }
    function dn(O, ne, le) {
      return rr(O, !1);
    }
    function zn(O) {
      var ne = O.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function Un(O, ne, le) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return rr(O, zn(O));
      if (typeof O == "string")
        return wt(O);
      switch (O) {
        case L:
          return wt("Suspense");
        case P:
          return wt("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case x:
            return dn(O.render);
          case A:
            return Un(O.type, ne, le);
          case K: {
            var He = O, kt = He._payload, Lt = He._init;
            try {
              return Un(Lt(kt), ne, le);
            } catch {
            }
          }
        }
      return "";
    }
    var On = Object.prototype.hasOwnProperty, wn = {}, _r = ht.ReactDebugCurrentFrame;
    function Dr(O) {
      if (O) {
        var ne = O._owner, le = Un(O.type, O._source, ne ? ne.type : null);
        _r.setExtraStackFrame(le);
      } else
        _r.setExtraStackFrame(null);
    }
    function In(O, ne, le, He, kt) {
      {
        var Lt = Function.call.bind(On);
        for (var Qe in O)
          if (Lt(O, Qe)) {
            var Rt = void 0;
            try {
              if (typeof O[Qe] != "function") {
                var Pn = Error((He || "React class") + ": " + le + " type `" + Qe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Qe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pn.name = "Invariant Violation", Pn;
              }
              Rt = O[Qe](ne, Qe, He, le, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              Rt = V;
            }
            Rt && !(Rt instanceof Error) && (Dr(kt), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", He || "React class", le, Qe, typeof Rt), Dr(null)), Rt instanceof Error && !(Rt.message in wn) && (wn[Rt.message] = !0, Dr(kt), ye("Failed %s type: %s", le, Rt.message), Dr(null));
          }
      }
    }
    var ir = Array.isArray;
    function Or(O) {
      return ir(O);
    }
    function ar(O) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, le = ne && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return le;
      }
    }
    function jr(O) {
      try {
        return Qn(O), !1;
      } catch {
        return !0;
      }
    }
    function Qn(O) {
      return "" + O;
    }
    function Lr(O) {
      if (jr(O))
        return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(O)), Qn(O);
    }
    var pn = ht.ReactCurrentOwner, qn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fr, vr, ve;
    ve = {};
    function Pe(O) {
      if (On.call(O, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function mt(O) {
      if (On.call(O, "key")) {
        var ne = Object.getOwnPropertyDescriptor(O, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Ft(O, ne) {
      if (typeof O.ref == "string" && pn.current && ne && pn.current.stateNode !== ne) {
        var le = je(pn.current.type);
        ve[le] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', je(pn.current.type), O.ref), ve[le] = !0);
      }
    }
    function Vt(O, ne) {
      {
        var le = function() {
          Fr || (Fr = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        le.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: le,
          configurable: !0
        });
      }
    }
    function Tn(O, ne) {
      {
        var le = function() {
          vr || (vr = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        le.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: le,
          configurable: !0
        });
      }
    }
    var vn = function(O, ne, le, He, kt, Lt, Qe) {
      var Rt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: O,
        key: ne,
        ref: le,
        props: Qe,
        // Record the component responsible for creating this element.
        _owner: Lt
      };
      return Rt._store = {}, Object.defineProperty(Rt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Rt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: He
      }), Object.defineProperty(Rt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: kt
      }), Object.freeze && (Object.freeze(Rt.props), Object.freeze(Rt)), Rt;
    };
    function or(O, ne, le, He, kt) {
      {
        var Lt, Qe = {}, Rt = null, Pn = null;
        le !== void 0 && (Lr(le), Rt = "" + le), mt(ne) && (Lr(ne.key), Rt = "" + ne.key), Pe(ne) && (Pn = ne.ref, Ft(ne, kt));
        for (Lt in ne)
          On.call(ne, Lt) && !qn.hasOwnProperty(Lt) && (Qe[Lt] = ne[Lt]);
        if (O && O.defaultProps) {
          var V = O.defaultProps;
          for (Lt in V)
            Qe[Lt] === void 0 && (Qe[Lt] = V[Lt]);
        }
        if (Rt || Pn) {
          var de = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Rt && Vt(Qe, de), Pn && Tn(Qe, de);
        }
        return vn(O, Rt, Pn, kt, He, pn.current, Qe);
      }
    }
    var Kt = ht.ReactCurrentOwner, hr = ht.ReactDebugCurrentFrame;
    function It(O) {
      if (O) {
        var ne = O._owner, le = Un(O.type, O._source, ne ? ne.type : null);
        hr.setExtraStackFrame(le);
      } else
        hr.setExtraStackFrame(null);
    }
    var Bt;
    Bt = !1;
    function Ri(O) {
      return typeof O == "object" && O !== null && O.$$typeof === u;
    }
    function ri() {
      {
        if (Kt.current) {
          var O = je(Kt.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function Ca(O) {
      return "";
    }
    var Fa = {};
    function bo(O) {
      {
        var ne = ri();
        if (!ne) {
          var le = typeof O == "string" ? O : O.displayName || O.name;
          le && (ne = `

Check the top-level render call using <` + le + ">.");
        }
        return ne;
      }
    }
    function ii(O, ne) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var le = bo(ne);
        if (Fa[le])
          return;
        Fa[le] = !0;
        var He = "";
        O && O._owner && O._owner !== Kt.current && (He = " It was passed a child from " + je(O._owner.type) + "."), It(O), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', le, He), It(null);
      }
    }
    function wa(O, ne) {
      {
        if (typeof O != "object")
          return;
        if (Or(O))
          for (var le = 0; le < O.length; le++) {
            var He = O[le];
            Ri(He) && ii(He, ne);
          }
        else if (Ri(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var kt = Ce(O);
          if (typeof kt == "function" && kt !== O.entries)
            for (var Lt = kt.call(O), Qe; !(Qe = Lt.next()).done; )
              Ri(Qe.value) && ii(Qe.value, ne);
        }
      }
    }
    function Mr(O) {
      {
        var ne = O.type;
        if (ne == null || typeof ne == "string")
          return;
        var le;
        if (typeof ne == "function")
          le = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === A))
          le = ne.propTypes;
        else
          return;
        if (le) {
          var He = je(ne);
          In(le, O.props, "prop", He, O);
        } else if (ne.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var kt = je(ne);
          ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", kt || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ar(O) {
      {
        for (var ne = Object.keys(O.props), le = 0; le < ne.length; le++) {
          var He = ne[le];
          if (He !== "children" && He !== "key") {
            It(O), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", He), It(null);
            break;
          }
        }
        O.ref !== null && (It(O), ye("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
      }
    }
    var $r = {};
    function bn(O, ne, le, He, kt, Lt) {
      {
        var Qe = xt(O);
        if (!Qe) {
          var Rt = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Rt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pn = Ca();
          Pn ? Rt += Pn : Rt += ri();
          var V;
          O === null ? V = "null" : Or(O) ? V = "array" : O !== void 0 && O.$$typeof === u ? (V = "<" + (je(O.type) || "Unknown") + " />", Rt = " Did you accidentally export a JSX literal instead of a component?") : V = typeof O, ye("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, Rt);
        }
        var de = or(O, ne, le, kt, Lt);
        if (de == null)
          return de;
        if (Qe) {
          var qe = ne.children;
          if (qe !== void 0)
            if (He)
              if (Or(qe)) {
                for (var Wt = 0; Wt < qe.length; Wt++)
                  wa(qe[Wt], O);
                Object.freeze && Object.freeze(qe);
              } else
                ye("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wa(qe, O);
        }
        if (On.call(ne, "key")) {
          var ct = je(O), nn = Object.keys(ne).filter(function(ji) {
            return ji !== "key";
          }), Rn = nn.length > 0 ? "{key: someKey, " + nn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$r[ct + Rn]) {
            var _t = nn.length > 0 ? "{" + nn.join(": ..., ") + ": ...}" : "{}";
            ye(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Rn, ct, _t, ct), $r[ct + Rn] = !0;
          }
        }
        return O === y ? Ar(de) : Mr(de), de;
      }
    }
    function mr(O, ne, le) {
      return bn(O, ne, le, !0);
    }
    function Vr(O, ne, le) {
      return bn(O, ne, le, !1);
    }
    var Hi = Vr, xi = mr;
    gv.Fragment = y, gv.jsx = Hi, gv.jsxs = xi;
  }()), gv;
}
process.env.NODE_ENV === "production" ? OO() : LO();
var ud = Cv();
const Je = /* @__PURE__ */ kO(ud);
var ja = {
  allRenderFn: !1,
  cmpDidLoad: !0,
  cmpDidUnload: !1,
  cmpDidUpdate: !0,
  cmpDidRender: !0,
  cmpWillLoad: !0,
  cmpWillUpdate: !0,
  cmpWillRender: !0,
  connectedCallback: !0,
  disconnectedCallback: !0,
  element: !0,
  event: !0,
  hasRenderFn: !0,
  lifecycle: !0,
  hostListener: !0,
  hostListenerTargetWindow: !0,
  hostListenerTargetDocument: !0,
  hostListenerTargetBody: !0,
  hostListenerTargetParent: !1,
  hostListenerTarget: !0,
  member: !0,
  method: !0,
  mode: !0,
  observeAttribute: !0,
  prop: !0,
  propMutable: !0,
  reflect: !0,
  scoped: !0,
  shadowDom: !0,
  slot: !0,
  cssAnnotations: !0,
  state: !0,
  style: !0,
  formAssociated: !1,
  svg: !0,
  updatable: !0,
  vdomAttribute: !0,
  vdomXlink: !0,
  vdomClass: !0,
  vdomFunctional: !0,
  vdomKey: !0,
  vdomListener: !0,
  vdomRef: !0,
  vdomPropOrAttr: !0,
  vdomRender: !0,
  vdomStyle: !0,
  vdomText: !0,
  watchCallback: !0,
  taskQueue: !0,
  hotModuleReplacement: !1,
  isDebug: !1,
  isDev: !1,
  isTesting: !1,
  hydrateServerSide: !1,
  hydrateClientSide: !1,
  lifecycleDOMEvents: !1,
  lazyLoad: !1,
  profile: !1,
  slotRelocation: !0,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  appendChildSlotFix: !1,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  cloneNodeFix: !1,
  hydratedAttribute: !1,
  hydratedClass: !0,
  // TODO(STENCIL-1305): remove this option
  scriptDataOpts: !1,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  scopedSlotTextContentFix: !1,
  // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
  shadowDomShim: !1,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  slotChildNodesFix: !1,
  invisiblePrehydration: !0,
  propBoolean: !0,
  propNumber: !0,
  propString: !0,
  constructableCSS: !0,
  cmpShouldUpdate: !0,
  devTools: !1,
  shadowDelegatesFocus: !0,
  initializeNextTick: !1,
  asyncLoading: !1,
  asyncQueue: !1,
  transformTagName: !1,
  attachStyles: !0,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  experimentalSlotFixes: !1
}, MO = Object.defineProperty, AO = (c, u) => {
  for (var d in u)
    MO(c, d, { get: u[d], enumerable: !0 });
}, $O = {
  isDev: !1,
  isBrowser: !0,
  isServer: !1,
  isTesting: !1
}, q1 = /* @__PURE__ */ new WeakMap(), pc = (c) => q1.get(c), NO = (c, u) => {
  const d = {
    $flags$: 0,
    $hostElement$: c,
    $cmpMeta$: u,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  return q1.set(c, d);
}, b1 = (c, u) => u in c, wv = (c, u) => (0, console.error)(c, u), Ty = /* @__PURE__ */ new Map(), zO = [], UO = "slot-fb{display:contents}slot-fb[hidden]{display:none}", S1 = "http://www.w3.org/1999/xlink", Tv = typeof window < "u" ? window : {}, go = Tv.document || { head: {} }, dd = Tv.HTMLElement || class {
}, ni = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (c) => c(),
  raf: (c) => requestAnimationFrame(c),
  ael: (c, u, d, y) => c.addEventListener(u, d, y),
  rel: (c, u, d, y) => c.removeEventListener(u, d, y),
  ce: (c, u) => new CustomEvent(c, u)
}, PO = /* @__PURE__ */ (() => {
  let c = !1;
  try {
    go.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          c = !0;
        }
      })
    );
  } catch {
  }
  return c;
})(), HO = (c) => Promise.resolve(c), jO = /* @__PURE__ */ (() => {
  try {
    return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == "function";
  } catch {
  }
  return !1;
})(), vS = !1, hS = [], K1 = [], X1 = (c, u) => (d) => {
  c.push(d), vS || (vS = !0, u && ni.$flags$ & 4 ? FO(mS) : ni.raf(mS));
}, E1 = (c) => {
  for (let u = 0; u < c.length; u++)
    try {
      c[u](performance.now());
    } catch (d) {
      wv(d);
    }
  c.length = 0;
}, mS = () => {
  E1(hS), E1(K1), (vS = hS.length > 0) && ni.raf(mS);
}, FO = (c) => HO().then(c), VO = /* @__PURE__ */ X1(hS, !1), xS = /* @__PURE__ */ X1(K1, !0), IO = (c) => {
  const u = new URL(c, ni.$resourcesUrl$);
  return u.origin !== Tv.location.origin ? u.href : u.pathname;
}, C1 = {}, BO = "http://www.w3.org/2000/svg", WO = "http://www.w3.org/1999/xhtml", YO = (c) => c != null, kS = (c) => (c = typeof c, c === "object" || c === "function");
function GO(c) {
  var u, d, y;
  return (y = (d = (u = c.head) == null ? void 0 : u.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : d.getAttribute("content")) != null ? y : void 0;
}
var QO = {};
AO(QO, {
  err: () => Z1,
  map: () => qO,
  ok: () => yS,
  unwrap: () => KO,
  unwrapErr: () => XO
});
var yS = (c) => ({
  isOk: !0,
  isErr: !1,
  value: c
}), Z1 = (c) => ({
  isOk: !1,
  isErr: !0,
  value: c
});
function qO(c, u) {
  if (c.isOk) {
    const d = u(c.value);
    return d instanceof Promise ? d.then((y) => yS(y)) : yS(d);
  }
  if (c.isErr) {
    const d = c.value;
    return Z1(d);
  }
  throw "should never get here";
}
var KO = (c) => {
  if (c.isOk)
    return c.value;
  throw c.value;
}, XO = (c) => {
  if (c.isErr)
    return c.value;
  throw c.value;
}, dc = (c, u = "") => () => {
}, Pi = (c, u, ...d) => {
  let y = null, S = null, T = null, g = !1, _ = !1;
  const x = [], L = (A) => {
    for (let K = 0; K < A.length; K++)
      y = A[K], Array.isArray(y) ? L(y) : y != null && typeof y != "boolean" && ((g = typeof c != "function" && !kS(y)) && (y = String(y)), g && _ ? x[x.length - 1].$text$ += y : x.push(g ? Ry(null, y) : y), _ = g);
  };
  if (L(d), u) {
    u.key && (S = u.key), u.name && (T = u.name);
    {
      const A = u.className || u.class;
      A && (u.class = typeof A != "object" ? A : Object.keys(A).filter((K) => A[K]).join(" "));
    }
  }
  if (typeof c == "function")
    return c(
      u === null ? {} : u,
      x,
      JO
    );
  const P = Ry(c, null);
  return P.$attrs$ = u, x.length > 0 && (P.$children$ = x), P.$key$ = S, P.$name$ = T, P;
}, Ry = (c, u) => {
  const d = {
    $flags$: 0,
    $tag$: c,
    $text$: u,
    $elm$: null,
    $children$: null
  };
  return d.$attrs$ = null, d.$key$ = null, d.$name$ = null, d;
}, Rv = {}, ZO = (c) => c && c.$tag$ === Rv, JO = {
  forEach: (c, u) => c.map(w1).forEach(u),
  map: (c, u) => c.map(w1).map(u).map(eL)
}, w1 = (c) => ({
  vattrs: c.$attrs$,
  vchildren: c.$children$,
  vkey: c.$key$,
  vname: c.$name$,
  vtag: c.$tag$,
  vtext: c.$text$
}), eL = (c) => {
  if (typeof c.vtag == "function") {
    const d = { ...c.vattrs };
    return c.vkey && (d.key = c.vkey), c.vname && (d.name = c.vname), Pi(c.vtag, d, ...c.vchildren || []);
  }
  const u = Ry(c.vtag, c.vtext);
  return u.$attrs$ = c.vattrs, u.$children$ = c.vchildren, u.$key$ = c.vkey, u.$name$ = c.vname, u;
}, tL = (c) => zO.map((u) => u(c)).find((u) => !!u), nL = (c) => pc(c).$modeName$, rL = (c, u) => c != null && !kS(c) ? u & 4 ? c === "false" ? !1 : c === "" || !!c : u & 2 ? parseFloat(c) : u & 1 ? String(c) : c : c, iL = (c) => c, Il = (c, u, d) => {
  const y = iL(c);
  return {
    emit: (S) => aL(y, u, {
      bubbles: !!(d & 4),
      composed: !!(d & 2),
      cancelable: !!(d & 1),
      detail: S
    })
  };
}, aL = (c, u, d) => {
  const y = ni.ce(u, d);
  return c.dispatchEvent(y), y;
}, T1 = /* @__PURE__ */ new WeakMap(), oL = (c, u, d) => {
  let y = Ty.get(c);
  jO && d ? (y = y || new CSSStyleSheet(), typeof y == "string" ? y = u : y.replaceSync(u)) : y = u, Ty.set(c, y);
}, lL = (c, u, d) => {
  var y;
  const S = J1(u, d), T = Ty.get(S);
  if (c = c.nodeType === 11 ? c : go, T)
    if (typeof T == "string") {
      c = c.head || c;
      let g = T1.get(c), _;
      if (g || T1.set(c, g = /* @__PURE__ */ new Set()), !g.has(S)) {
        {
          _ = go.createElement("style"), _.innerHTML = T;
          const x = (y = ni.$nonce$) != null ? y : GO(go);
          x != null && _.setAttribute("nonce", x), /**
           * we render a scoped component
           */
          (!(u.$flags$ & 1) || /**
          * we are using shadow dom and render the style tag within the shadowRoot
          */
          u.$flags$ & 1 && c.nodeName !== "HEAD") && c.insertBefore(_, c.querySelector("link"));
        }
        u.$flags$ & 4 && (_.innerHTML += UO), g && g.add(S);
      }
    } else c.adoptedStyleSheets.includes(T) || (c.adoptedStyleSheets = [...c.adoptedStyleSheets, T]);
  return S;
}, uL = (c) => {
  const u = c.$cmpMeta$, d = c.$hostElement$, y = u.$flags$, S = dc("attachStyles", u.$tagName$), T = lL(
    d.shadowRoot ? d.shadowRoot : d.getRootNode(),
    u,
    c.$modeName$
  );
  y & 10 && y & 2 && (d["s-sc"] = T, d.classList.add(T + "-h"), y & 2 && d.classList.add(T + "-s")), S();
}, J1 = (c, u) => "sc-" + (u && c.$flags$ & 32 ? c.$tagName$ + "-" + u : c.$tagName$), R1 = (c, u, d, y, S, T) => {
  if (d !== y) {
    let g = b1(c, u), _ = u.toLowerCase();
    if (u === "class") {
      const x = c.classList, L = x1(d), P = x1(y);
      x.remove(...L.filter((A) => A && !P.includes(A))), x.add(...P.filter((A) => A && !L.includes(A)));
    } else if (u === "style") {
      for (const x in d)
        (!y || y[x] == null) && (x.includes("-") ? c.style.removeProperty(x) : c.style[x] = "");
      for (const x in y)
        (!d || y[x] !== d[x]) && (x.includes("-") ? c.style.setProperty(x, y[x]) : c.style[x] = y[x]);
    } else if (u !== "key") if (u === "ref")
      y && y(c);
    else if (!c.__lookupSetter__(u) && u[0] === "o" && u[1] === "n") {
      if (u[2] === "-" ? u = u.slice(3) : b1(Tv, _) ? u = _.slice(2) : u = _[2] + u.slice(3), d || y) {
        const x = u.endsWith(eT);
        u = u.replace(cL, ""), d && ni.rel(c, u, d, x), y && ni.ael(c, u, y, x);
      }
    } else {
      const x = kS(y);
      if ((g || x && y !== null) && !S)
        try {
          if (c.tagName.includes("-"))
            c[u] = y;
          else {
            const P = y ?? "";
            u === "list" ? g = !1 : (d == null || c[u] != P) && (c[u] = P);
          }
        } catch {
        }
      let L = !1;
      _ !== (_ = _.replace(/^xlink\:?/, "")) && (u = _, L = !0), y == null || y === !1 ? (y !== !1 || c.getAttribute(u) === "") && (L ? c.removeAttributeNS(S1, u) : c.removeAttribute(u)) : (!g || T & 4 || S) && !x && (y = y === !0 ? "" : y, L ? c.setAttributeNS(S1, u, y) : c.setAttribute(u, y));
    }
  }
}, sL = /\s/, x1 = (c) => c ? c.split(sL) : [], eT = "Capture", cL = new RegExp(eT + "$"), tT = (c, u, d) => {
  const y = u.$elm$.nodeType === 11 && u.$elm$.host ? u.$elm$.host : u.$elm$, S = c && c.$attrs$ || C1, T = u.$attrs$ || C1;
  for (const g of k1(Object.keys(S)))
    g in T || R1(y, g, S[g], void 0, d, u.$flags$);
  for (const g of k1(Object.keys(T)))
    R1(y, g, S[g], T[g], d, u.$flags$);
};
function k1(c) {
  return c.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...c.filter((u) => u !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    c
  );
}
var ad, gS, sd, xy = !1, ky = !1, _S = !1, Ea = !1, _y = (c, u, d, y) => {
  var S;
  const T = u.$children$[d];
  let g = 0, _, x, L;
  if (xy || (_S = !0, T.$tag$ === "slot" && (ad && y.classList.add(ad + "-s"), T.$flags$ |= T.$children$ ? (
    // slot element has fallback content
    // still create an element that "mocks" the slot element
    2
  ) : (
    // slot element does not have fallback content
    // create an html comment we'll use to always reference
    // where actual slot content should sit next to
    1
  ))), T.$text$ !== null)
    _ = T.$elm$ = go.createTextNode(T.$text$);
  else if (T.$flags$ & 1)
    _ = T.$elm$ = go.createTextNode("");
  else {
    if (Ea || (Ea = T.$tag$ === "svg"), _ = T.$elm$ = go.createElementNS(
      Ea ? BO : WO,
      !xy && ja.slotRelocation && T.$flags$ & 2 ? "slot-fb" : T.$tag$
    ), Ea && T.$tag$ === "foreignObject" && (Ea = !1), tT(null, T, Ea), !!_.getRootNode().querySelector("body") && ja.scoped && YO(ad) && _["s-si"] !== ad && _.classList.add(_["s-si"] = ad), OS(_, y), T.$children$)
      for (g = 0; g < T.$children$.length; ++g)
        x = _y(c, T, g, _), x && _.appendChild(x);
    T.$tag$ === "svg" ? Ea = !1 : _.tagName === "foreignObject" && (Ea = !0);
  }
  return _["s-hn"] = sd, T.$flags$ & 3 && (_["s-sr"] = !0, _["s-cr"] = gS, _["s-sn"] = T.$name$ || "", _["s-rf"] = (S = T.$attrs$) == null ? void 0 : S.ref, L = c && c.$children$ && c.$children$[d], L && L.$tag$ === T.$tag$ && c.$elm$ && Ev(c.$elm$, !1)), _;
}, Ev = (c, u) => {
  ni.$flags$ |= 1;
  const d = Array.from(c.childNodes);
  if (c["s-sr"] && ja.experimentalSlotFixes) {
    let y = c;
    for (; y = y.nextSibling; )
      y && y["s-sn"] === c["s-sn"] && y["s-sh"] === sd && d.push(y);
  }
  for (let y = d.length - 1; y >= 0; y--) {
    const S = d[y];
    S["s-hn"] !== sd && S["s-ol"] && (rs(iT(S), S, DS(S)), S["s-ol"].remove(), S["s-ol"] = void 0, S["s-sh"] = void 0, _S = !0), u && Ev(S, u);
  }
  ni.$flags$ &= -2;
}, nT = (c, u, d, y, S, T) => {
  let g = c["s-cr"] && c["s-cr"].parentNode || c, _;
  for (g.shadowRoot && g.tagName === sd && (g = g.shadowRoot); S <= T; ++S)
    y[S] && (_ = _y(null, d, S, c), _ && (y[S].$elm$ = _, rs(g, _, DS(u))));
}, rT = (c, u, d) => {
  for (let y = u; y <= d; ++y) {
    const S = c[y];
    if (S) {
      const T = S.$elm$;
      lT(S), T && (ky = !0, T["s-ol"] ? T["s-ol"].remove() : Ev(T, !0), T.remove());
    }
  }
}, fL = (c, u, d, y, S = !1) => {
  let T = 0, g = 0, _ = 0, x = 0, L = u.length - 1, P = u[0], A = u[L], K = y.length - 1, B = y[0], se = y[K], We, Ce;
  for (; T <= L && g <= K; )
    if (P == null)
      P = u[++T];
    else if (A == null)
      A = u[--L];
    else if (B == null)
      B = y[++g];
    else if (se == null)
      se = y[--K];
    else if (gy(P, B, S))
      od(P, B, S), P = u[++T], B = y[++g];
    else if (gy(A, se, S))
      od(A, se, S), A = u[--L], se = y[--K];
    else if (gy(P, se, S))
      (P.$tag$ === "slot" || se.$tag$ === "slot") && Ev(P.$elm$.parentNode, !1), od(P, se, S), rs(c, P.$elm$, A.$elm$.nextSibling), P = u[++T], se = y[--K];
    else if (gy(A, B, S))
      (P.$tag$ === "slot" || se.$tag$ === "slot") && Ev(A.$elm$.parentNode, !1), od(A, B, S), rs(c, A.$elm$, P.$elm$), A = u[--L], B = y[++g];
    else {
      for (_ = -1, x = T; x <= L; ++x)
        if (u[x] && u[x].$key$ !== null && u[x].$key$ === B.$key$) {
          _ = x;
          break;
        }
      _ >= 0 ? (Ce = u[_], Ce.$tag$ !== B.$tag$ ? We = _y(u && u[g], d, _, c) : (od(Ce, B, S), u[_] = void 0, We = Ce.$elm$), B = y[++g]) : (We = _y(u && u[g], d, g, c), B = y[++g]), We && rs(iT(P.$elm$), We, DS(P.$elm$));
    }
  T > L ? nT(
    c,
    y[K + 1] == null ? null : y[K + 1].$elm$,
    d,
    y,
    g,
    K
  ) : g > K && rT(u, T, L);
}, gy = (c, u, d = !1) => c.$tag$ === u.$tag$ ? c.$tag$ === "slot" ? (
  // The component gets hydrated and no VDOM has been initialized.
  // Here the comparison can't happen as $name$ property is not set for `leftNode`.
  "$nodeId$" in c && d && // `leftNode` is not from type HTMLComment which would cause many
  // hydration comments to be removed
  c.$elm$.nodeType !== 8 ? !1 : c.$name$ === u.$name$
) : d ? !0 : c.$key$ === u.$key$ : !1, DS = (c) => c && c["s-ol"] || c, iT = (c) => (c["s-ol"] ? c["s-ol"] : c).parentNode, od = (c, u, d = !1) => {
  const y = u.$elm$ = c.$elm$, S = c.$children$, T = u.$children$, g = u.$tag$, _ = u.$text$;
  let x;
  _ === null ? (Ea = g === "svg" ? !0 : g === "foreignObject" ? !1 : Ea, g === "slot" && !xy || tT(c, u, Ea), S !== null && T !== null ? fL(y, S, u, T, d) : T !== null ? (c.$text$ !== null && (y.textContent = ""), nT(y, null, u, T, 0, T.length - 1)) : (
    // don't do this on initial render as it can cause non-hydrated content to be removed
    !d && ja.updatable && S !== null && rT(S, 0, S.length - 1)
  ), Ea && g === "svg" && (Ea = !1)) : (x = y["s-cr"]) ? x.parentNode.textContent = _ : c.$text$ !== _ && (y.data = _);
}, aT = (c) => {
  const u = c.childNodes;
  for (const d of u)
    if (d.nodeType === 1) {
      if (d["s-sr"]) {
        const y = d["s-sn"];
        d.hidden = !1;
        for (const S of u)
          if (S !== d) {
            if (S["s-hn"] !== d["s-hn"] || y !== "") {
              if (S.nodeType === 1 && (y === S.getAttribute("slot") || y === S["s-sn"]) || S.nodeType === 3 && y === S["s-sn"]) {
                d.hidden = !0;
                break;
              }
            } else if (S.nodeType === 1 || S.nodeType === 3 && S.textContent.trim() !== "") {
              d.hidden = !0;
              break;
            }
          }
      }
      aT(d);
    }
}, Fl = [], oT = (c) => {
  let u, d, y;
  for (const S of c.childNodes) {
    if (S["s-sr"] && (u = S["s-cr"]) && u.parentNode) {
      d = u.parentNode.childNodes;
      const T = S["s-sn"];
      for (y = d.length - 1; y >= 0; y--)
        if (u = d[y], !u["s-cn"] && !u["s-nr"] && u["s-hn"] !== S["s-hn"] && !ja.experimentalSlotFixes)
          if (_1(u, T)) {
            let g = Fl.find((_) => _.$nodeToRelocate$ === u);
            ky = !0, u["s-sn"] = u["s-sn"] || T, g ? (g.$nodeToRelocate$["s-sh"] = S["s-hn"], g.$slotRefNode$ = S) : (u["s-sh"] = S["s-hn"], Fl.push({
              $slotRefNode$: S,
              $nodeToRelocate$: u
            })), u["s-sr"] && Fl.map((_) => {
              _1(_.$nodeToRelocate$, u["s-sn"]) && (g = Fl.find((x) => x.$nodeToRelocate$ === u), g && !_.$slotRefNode$ && (_.$slotRefNode$ = g.$slotRefNode$));
            });
          } else Fl.some((g) => g.$nodeToRelocate$ === u) || Fl.push({
            $nodeToRelocate$: u
          });
    }
    S.nodeType === 1 && oT(S);
  }
}, _1 = (c, u) => c.nodeType === 1 ? c.getAttribute("slot") === null && u === "" || c.getAttribute("slot") === u : c["s-sn"] === u ? !0 : u === "", lT = (c) => {
  c.$attrs$ && c.$attrs$.ref && c.$attrs$.ref(null), c.$children$ && c.$children$.map(lT);
}, rs = (c, u, d) => {
  const y = c == null ? void 0 : c.insertBefore(u, d);
  return OS(u, c), y;
}, uT = (c) => {
  const u = [];
  return c && u.push(
    ...c["s-scs"] || [],
    c["s-si"],
    c["s-sc"],
    ...uT(c.parentElement)
  ), u;
}, OS = (c, u, d = !1) => {
  var y;
  if (c && u && c.nodeType === 1) {
    const S = new Set(uT(u).filter(Boolean));
    if (S.size && ((y = c.classList) == null || y.add(...c["s-scs"] = [...S]), c["s-ol"] || d))
      for (const T of Array.from(c.childNodes))
        OS(T, c, !0);
  }
}, dL = (c, u, d = !1) => {
  var y, S, T, g, _;
  const x = c.$hostElement$, L = c.$cmpMeta$, P = c.$vnode$ || Ry(null, null), A = ZO(u) ? u : Pi(null, null, u);
  if (sd = x.tagName, L.$attrsToReflect$ && (A.$attrs$ = A.$attrs$ || {}, L.$attrsToReflect$.map(
    ([K, B]) => A.$attrs$[B] = x[K]
  )), d && A.$attrs$)
    for (const K of Object.keys(A.$attrs$))
      x.hasAttribute(K) && !["key", "ref", "style", "class"].includes(K) && (A.$attrs$[K] = x[K]);
  A.$tag$ = null, A.$flags$ |= 4, c.$vnode$ = A, A.$elm$ = P.$elm$ = x.shadowRoot || x, ad = x["s-sc"], xy = (L.$flags$ & 1) !== 0, gS = x["s-cr"], ky = !1, od(P, A, d);
  {
    if (ni.$flags$ |= 1, _S) {
      oT(A.$elm$);
      for (const K of Fl) {
        const B = K.$nodeToRelocate$;
        if (!B["s-ol"]) {
          const se = go.createTextNode("");
          se["s-nr"] = B, rs(B.parentNode, B["s-ol"] = se, B);
        }
      }
      for (const K of Fl) {
        const B = K.$nodeToRelocate$, se = K.$slotRefNode$;
        if (se) {
          const We = se.parentNode;
          let Ce = se.nextSibling;
          {
            let ht = (y = B["s-ol"]) == null ? void 0 : y.previousSibling;
            for (; ht; ) {
              let ye = (S = ht["s-nr"]) != null ? S : null;
              if (ye && ye["s-sn"] === B["s-sn"] && We === ye.parentNode) {
                for (ye = ye.nextSibling; ye === B || ye != null && ye["s-sr"]; )
                  ye = ye == null ? void 0 : ye.nextSibling;
                if (!ye || !ye["s-nr"]) {
                  Ce = ye;
                  break;
                }
              }
              ht = ht.previousSibling;
            }
          }
          (!Ce && We !== B.parentNode || B.nextSibling !== Ce) && B !== Ce && (!B["s-hn"] && B["s-ol"] && (B["s-hn"] = B["s-ol"].parentNode.nodeName), rs(We, B, Ce), B.nodeType === 1 && (B.hidden = (T = B["s-ih"]) != null ? T : !1)), B && typeof se["s-rf"] == "function" && se["s-rf"](B);
        } else
          B.nodeType === 1 && (d && (B["s-ih"] = (g = B.hidden) != null ? g : !1), B.hidden = !0);
      }
    }
    ky && aT(A.$elm$), ni.$flags$ &= -2, Fl.length = 0;
  }
  if (ja.experimentalScopedSlotChanges && L.$flags$ & 2)
    for (const K of A.$elm$.childNodes)
      K["s-hn"] !== sd && !K["s-sh"] && (d && K["s-ih"] == null && (K["s-ih"] = (_ = K.hidden) != null ? _ : !1), K.hidden = !0);
  gS = void 0;
}, pL = (c, u) => {
}, sT = (c, u) => (c.$flags$ |= 16, pL(c, c.$ancestorComponent$), xS(() => vL(c, u))), vL = (c, u) => {
  const d = c.$hostElement$, y = dc("scheduleUpdate", c.$cmpMeta$.$tagName$), S = d;
  if (!S)
    throw new Error(
      `Can't render component <${d.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  let T;
  return u ? T = ld(S, "componentWillLoad") : T = ld(S, "componentWillUpdate"), T = D1(T, () => ld(S, "componentWillRender")), y(), D1(T, () => mL(c, S, u));
}, D1 = (c, u) => hL(c) ? c.then(u).catch((d) => {
  console.error(d), u();
}) : u(), hL = (c) => c instanceof Promise || c && c.then && typeof c.then == "function", mL = async (c, u, d) => {
  const y = c.$hostElement$, S = dc("update", c.$cmpMeta$.$tagName$);
  y["s-rc"], d && uL(c);
  const T = dc("render", c.$cmpMeta$.$tagName$);
  yL(c, u, y, d), T(), S(), gL(c);
}, O1 = null, yL = (c, u, d, y) => {
  try {
    O1 = u, u = u.render && u.render(), c.$flags$ &= -17, c.$flags$ |= 2, (ja.hasRenderFn || ja.reflect) && (ja.vdomRender || ja.reflect) && (ja.hydrateServerSide || dL(c, u, y));
  } catch (x) {
    wv(x, c.$hostElement$);
  }
  return O1 = null, null;
}, gL = (c) => {
  const u = c.$cmpMeta$.$tagName$, d = c.$hostElement$, y = dc("postUpdate", u), S = d;
  c.$ancestorComponent$, ld(S, "componentDidRender"), c.$flags$ & 64 ? (ld(S, "componentDidUpdate"), y()) : (c.$flags$ |= 64, ld(S, "componentDidLoad"), y());
}, ld = (c, u, d) => {
  if (c && c[u])
    try {
      return c[u](d);
    } catch (y) {
      wv(y);
    }
}, bL = (c, u) => pc(c).$instanceValues$.get(u), SL = (c, u, d, y) => {
  const S = pc(c), T = c, g = S.$instanceValues$.get(u), _ = S.$flags$, x = T;
  d = rL(d, y.$members$[u][0]);
  const L = Number.isNaN(g) && Number.isNaN(d);
  if (d !== g && !L) {
    S.$instanceValues$.set(u, d);
    {
      if (y.$watchers$ && _ & 128) {
        const A = y.$watchers$[u];
        A && A.map((K) => {
          try {
            x[K](d, g, u);
          } catch (B) {
            wv(B, T);
          }
        });
      }
      if ((_ & 18) === 2) {
        if (x.componentShouldUpdate && x.componentShouldUpdate(d, g, u) === !1)
          return;
        sT(S, !1);
      }
    }
  }
}, EL = (c, u, d) => {
  var y, S;
  const T = c.prototype;
  if (u.$members$ || u.$watchers$ || c.watchers) {
    c.watchers && !u.$watchers$ && (u.$watchers$ = c.watchers);
    const g = Object.entries((y = u.$members$) != null ? y : {});
    g.map(([_, [x]]) => {
      (x & 31 || x & 32) && Object.defineProperty(T, _, {
        get() {
          return bL(this, _);
        },
        set(L) {
          SL(this, _, L, u);
        },
        configurable: !0,
        enumerable: !0
      });
    });
    {
      const _ = /* @__PURE__ */ new Map();
      T.attributeChangedCallback = function(x, L, P) {
        ni.jmp(() => {
          var A;
          const K = _.get(x);
          if (this.hasOwnProperty(K))
            P = this[K], delete this[K];
          else {
            if (T.hasOwnProperty(K) && typeof this[K] == "number" && // cast type to number to avoid TS compiler issues
            this[K] == P)
              return;
            if (K == null) {
              const B = pc(this), se = B == null ? void 0 : B.$flags$;
              if (se && !(se & 8) && se & 128 && P !== L) {
                const Ce = this, ht = (A = u.$watchers$) == null ? void 0 : A[x];
                ht == null || ht.forEach((ye) => {
                  Ce[ye] != null && Ce[ye].call(Ce, P, L, x);
                });
              }
              return;
            }
          }
          this[K] = P === null && typeof this[K] == "boolean" ? !1 : P;
        });
      }, c.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((S = u.$watchers$) != null ? S : {}),
          ...g.filter(
            ([x, L]) => L[0] & 15
            /* HasAttribute */
          ).map(([x, L]) => {
            var P;
            const A = L[1] || x;
            return _.set(A, x), L[0] & 512 && ((P = u.$attrsToReflect$) == null || P.push([x, A])), A;
          })
        ])
      );
    }
  }
  return c;
}, CL = async (c, u, d, y) => {
  let S;
  if (!(u.$flags$ & 32)) {
    u.$flags$ |= 32, d.$lazyBundleId$;
    {
      S = c.constructor;
      const g = c.localName;
      customElements.whenDefined(g).then(
        () => u.$flags$ |= 128
        /* isWatchReady */
      );
    }
    if (S && S.style) {
      let g;
      typeof S.style == "string" ? g = S.style : typeof S.style != "string" && (u.$modeName$ = tL(c), u.$modeName$ && (g = S.style[u.$modeName$]));
      const _ = J1(d, u.$modeName$);
      if (!Ty.has(_)) {
        const x = dc("registerStyles", d.$tagName$);
        oL(_, g, !!(d.$flags$ & 1)), x();
      }
    }
  }
  u.$ancestorComponent$, sT(u, !0);
}, L1 = (c) => {
}, wL = (c) => {
  if (!(ni.$flags$ & 1)) {
    const u = pc(c), d = u.$cmpMeta$, y = dc("connectedCallback", d.$tagName$);
    u.$flags$ & 1 ? (cT(c, u, d.$listeners$), u != null && u.$lazyInstance$ ? L1(u.$lazyInstance$) : u != null && u.$onReadyPromise$ && u.$onReadyPromise$.then(() => L1(u.$lazyInstance$))) : (u.$flags$ |= 1, // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
    d.$flags$ & 12 && TL(c), d.$members$ && Object.entries(d.$members$).map(([S, [T]]) => {
      if (T & 31 && c.hasOwnProperty(S)) {
        const g = c[S];
        delete c[S], c[S] = g;
      }
    }), CL(c, u, d)), y();
  }
}, TL = (c) => {
  const u = c["s-cr"] = go.createComment(
    ""
  );
  u["s-cn"] = !0, rs(c, u, c.firstChild);
}, RL = async (c) => {
  if (!(ni.$flags$ & 1)) {
    const u = pc(c);
    u.$rmListeners$ && (u.$rmListeners$.map((d) => d()), u.$rmListeners$ = void 0);
  }
}, pd = (c, u) => {
  const d = {
    $flags$: u[0],
    $tagName$: u[1]
  };
  d.$members$ = u[2], d.$listeners$ = u[3], d.$watchers$ = c.$watchers$, d.$attrsToReflect$ = [];
  const y = c.prototype.connectedCallback, S = c.prototype.disconnectedCallback;
  return Object.assign(c.prototype, {
    __registerHost() {
      NO(this, d);
    },
    connectedCallback() {
      const T = pc(this);
      cT(this, T, d.$listeners$), wL(this), y && y.call(this);
    },
    disconnectedCallback() {
      RL(this), S && S.call(this);
    },
    __attachShadow() {
      if (!this.shadowRoot)
        this.attachShadow({
          mode: "open",
          delegatesFocus: !!(d.$flags$ & 16)
        });
      else if (this.shadowRoot.mode !== "open")
        throw new Error(
          `Unable to re-use existing shadow root for ${d.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`
        );
    }
  }), c.is = d.$tagName$, EL(c, d);
}, cT = (c, u, d, y) => {
  d && d.map(([S, T, g]) => {
    const _ = kL(c, S), x = xL(u, g), L = _L(S);
    ni.ael(_, T, x, L), (u.$rmListeners$ = u.$rmListeners$ || []).push(() => ni.rel(_, T, x, L));
  });
}, xL = (c, u) => (d) => {
  var y;
  try {
    ja.lazyLoad || c.$hostElement$[u](d);
  } catch (S) {
    wv(S);
  }
}, kL = (c, u) => u & 4 ? go : u & 8 ? Tv : u & 16 ? go.body : c, _L = (c) => PO ? {
  passive: (c & 1) !== 0,
  capture: (c & 2) !== 0
} : (c & 2) !== 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Ti = typeof window < "u" ? window : void 0, nS = typeof document < "u" ? document : void 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let rS;
const DL = (c) => {
  if (rS === void 0) {
    const u = c.style.animationName !== void 0, d = c.style.webkitAnimationName !== void 0;
    rS = !u && d ? "-webkit-" : "";
  }
  return rS;
}, iS = (c, u, d) => {
  const y = u.startsWith("animation") ? DL(c) : "";
  c.style.setProperty(y + u, d);
}, by = (c = [], u) => {
  if (u !== void 0) {
    const d = Array.isArray(u) ? u : [u];
    return [...c, ...d];
  }
  return c;
}, OL = (c) => {
  let u, d, y, S, T, g, _ = [], x = [], L = [], P = !1, A, K = {}, B = [], se = [], We = {}, Ce = 0, ht = !1, ye = !1, Ue, ut, Oe, st = !0, ge = !1, nt = !0, _e, xt = !1;
  const Ct = c, $t = [], je = [], at = [], gt = [], rt = [], we = [], ce = [], Le = [], oe = [], $ = [], q = [], Ne = typeof AnimationEffect == "function" || Ti !== void 0 && typeof Ti.AnimationEffect == "function", Te = typeof Element == "function" && typeof Element.prototype.animate == "function" && Ne, Ge = () => q, ot = (V) => (rt.forEach((de) => {
    de.destroy(V);
  }), St(V), gt.length = 0, rt.length = 0, _.length = 0, dn(), P = !1, nt = !0, _e), St = (V) => {
    zn(), V && Un();
  }, wt = () => {
    ht = !1, ye = !1, nt = !0, Ue = void 0, ut = void 0, Oe = void 0, Ce = 0, ge = !1, st = !0, xt = !1;
  }, Tt = () => Ce !== 0 && !xt, tn = (V, de) => {
    const qe = de.findIndex((Wt) => Wt.c === V);
    qe > -1 && de.splice(qe, 1);
  }, nr = (V, de) => (at.push({ c: V, o: de }), _e), rr = (V, de) => ((de != null && de.oneTimeCallback ? je : $t).push({ c: V, o: de }), _e), dn = () => ($t.length = 0, je.length = 0, _e), zn = () => {
    Te && (q.forEach((V) => {
      V.cancel();
    }), q.length = 0);
  }, Un = () => {
    we.forEach((V) => {
      V != null && V.parentNode && V.parentNode.removeChild(V);
    }), we.length = 0;
  }, On = (V) => (ce.push(V), _e), wn = (V) => (Le.push(V), _e), _r = (V) => (oe.push(V), _e), Dr = (V) => ($.push(V), _e), In = (V) => (x = by(x, V), _e), ir = (V) => (L = by(L, V), _e), Or = (V = {}) => (K = V, _e), ar = (V = []) => {
    for (const de of V)
      K[de] = "";
    return _e;
  }, jr = (V) => (B = by(B, V), _e), Qn = (V) => (se = by(se, V), _e), Lr = (V = {}) => (We = V, _e), pn = (V = []) => {
    for (const de of V)
      We[de] = "";
    return _e;
  }, qn = () => T !== void 0 ? T : A ? A.getFill() : "both", Fr = () => Ue !== void 0 ? Ue : g !== void 0 ? g : A ? A.getDirection() : "normal", vr = () => ht ? "linear" : y !== void 0 ? y : A ? A.getEasing() : "linear", ve = () => ye ? 0 : ut !== void 0 ? ut : d !== void 0 ? d : A ? A.getDuration() : 0, Pe = () => S !== void 0 ? S : A ? A.getIterations() : 1, mt = () => Oe !== void 0 ? Oe : u !== void 0 ? u : A ? A.getDelay() : 0, Ft = () => _, Vt = (V) => (g = V, bn(!0), _e), Tn = (V) => (T = V, bn(!0), _e), vn = (V) => (u = V, bn(!0), _e), or = (V) => (y = V, bn(!0), _e), Kt = (V) => (!Te && V === 0 && (V = 1), d = V, bn(!0), _e), hr = (V) => (S = V, bn(!0), _e), It = (V) => (A = V, _e), Bt = (V) => {
    if (V != null)
      if (V.nodeType === 1)
        gt.push(V);
      else if (V.length >= 0)
        for (let de = 0; de < V.length; de++)
          gt.push(V[de]);
      else
        console.error("Invalid addElement value");
    return _e;
  }, Ri = (V) => {
    if (V != null)
      if (Array.isArray(V))
        for (const de of V)
          de.parent(_e), rt.push(de);
      else
        V.parent(_e), rt.push(V);
    return _e;
  }, ri = (V) => {
    const de = _ !== V;
    return _ = V, de && Ca(_), _e;
  }, Ca = (V) => {
    Te && Ge().forEach((de) => {
      const qe = de.effect;
      if (qe.setKeyframes)
        qe.setKeyframes(V);
      else {
        const Wt = new KeyframeEffect(qe.target, V, qe.getTiming());
        de.effect = Wt;
      }
    });
  }, Fa = () => {
    ce.forEach((Wt) => Wt()), Le.forEach((Wt) => Wt());
    const V = x, de = L, qe = K;
    gt.forEach((Wt) => {
      const ct = Wt.classList;
      V.forEach((nn) => ct.add(nn)), de.forEach((nn) => ct.remove(nn));
      for (const nn in qe)
        qe.hasOwnProperty(nn) && iS(Wt, nn, qe[nn]);
    });
  }, bo = () => {
    oe.forEach((ct) => ct()), $.forEach((ct) => ct());
    const V = st ? 1 : 0, de = B, qe = se, Wt = We;
    gt.forEach((ct) => {
      const nn = ct.classList;
      de.forEach((Rn) => nn.add(Rn)), qe.forEach((Rn) => nn.remove(Rn));
      for (const Rn in Wt)
        Wt.hasOwnProperty(Rn) && iS(ct, Rn, Wt[Rn]);
    }), ut = void 0, Ue = void 0, Oe = void 0, $t.forEach((ct) => ct.c(V, _e)), je.forEach((ct) => ct.c(V, _e)), je.length = 0, nt = !0, st && (ge = !0), st = !0;
  }, ii = () => {
    Ce !== 0 && (Ce--, Ce === 0 && (bo(), A && A.animationFinish()));
  }, wa = () => {
    gt.forEach((V) => {
      const de = V.animate(_, {
        id: Ct,
        delay: mt(),
        duration: ve(),
        easing: vr(),
        iterations: Pe(),
        fill: qn(),
        direction: Fr()
      });
      de.pause(), q.push(de);
    }), q.length > 0 && (q[0].onfinish = () => {
      ii();
    });
  }, Mr = () => {
    Fa(), _.length > 0 && Te && wa(), P = !0;
  }, Ar = (V) => {
    V = Math.min(Math.max(V, 0), 0.9999), Te && q.forEach((de) => {
      de.currentTime = de.effect.getComputedTiming().delay + ve() * V, de.pause();
    });
  }, $r = (V) => {
    q.forEach((de) => {
      de.effect.updateTiming({
        delay: mt(),
        duration: ve(),
        easing: vr(),
        iterations: Pe(),
        fill: qn(),
        direction: Fr()
      });
    }), V !== void 0 && Ar(V);
  }, bn = (V = !1, de = !0, qe) => (V && rt.forEach((Wt) => {
    Wt.update(V, de, qe);
  }), Te && $r(qe), _e), mr = (V = !1, de) => (rt.forEach((qe) => {
    qe.progressStart(V, de);
  }), xi(), ht = V, P || Mr(), bn(!1, !0, de), _e), Vr = (V) => (rt.forEach((de) => {
    de.progressStep(V);
  }), Ar(V), _e), Hi = (V, de, qe) => (ht = !1, rt.forEach((Wt) => {
    Wt.progressEnd(V, de, qe);
  }), qe !== void 0 && (ut = qe), ge = !1, st = !0, V === 0 ? (Ue = Fr() === "reverse" ? "normal" : "reverse", Ue === "reverse" && (st = !1), Te ? (bn(), Ar(1 - de)) : (Oe = (1 - de) * ve() * -1, bn(!1, !1))) : V === 1 && (Te ? (bn(), Ar(de)) : (Oe = de * ve() * -1, bn(!1, !1))), V !== void 0 && !A && kt(), _e), xi = () => {
    P && (Te ? q.forEach((V) => {
      V.pause();
    }) : gt.forEach((V) => {
      iS(V, "animation-play-state", "paused");
    }), xt = !0);
  }, O = () => (rt.forEach((V) => {
    V.pause();
  }), xi(), _e), ne = () => {
    ii();
  }, le = () => {
    q.forEach((V) => {
      V.play();
    }), (_.length === 0 || gt.length === 0) && ii();
  }, He = () => {
    Te && (Ar(0), $r());
  }, kt = (V) => new Promise((de) => {
    V != null && V.sync && (ye = !0, rr(() => ye = !1, { oneTimeCallback: !0 })), P || Mr(), ge && (He(), ge = !1), nt && (Ce = rt.length + 1, nt = !1);
    const qe = () => {
      tn(Wt, je), de();
    }, Wt = () => {
      tn(qe, at), de();
    };
    rr(Wt, { oneTimeCallback: !0 }), nr(qe, { oneTimeCallback: !0 }), rt.forEach((ct) => {
      ct.play();
    }), Te ? le() : ne(), xt = !1;
  }), Lt = () => {
    rt.forEach((V) => {
      V.stop();
    }), P && (zn(), P = !1), wt(), at.forEach((V) => V.c(0, _e)), at.length = 0;
  }, Qe = (V, de) => {
    const qe = _[0];
    return qe !== void 0 && (qe.offset === void 0 || qe.offset === 0) ? qe[V] = de : _ = [{ offset: 0, [V]: de }, ..._], _e;
  };
  return _e = {
    parentAnimation: A,
    elements: gt,
    childAnimations: rt,
    id: Ct,
    animationFinish: ii,
    from: Qe,
    to: (V, de) => {
      const qe = _[_.length - 1];
      return qe !== void 0 && (qe.offset === void 0 || qe.offset === 1) ? qe[V] = de : _ = [..._, { offset: 1, [V]: de }], _e;
    },
    fromTo: (V, de, qe) => Qe(V, de).to(V, qe),
    parent: It,
    play: kt,
    pause: O,
    stop: Lt,
    destroy: ot,
    keyframes: ri,
    addAnimation: Ri,
    addElement: Bt,
    update: bn,
    fill: Tn,
    direction: Vt,
    iterations: hr,
    duration: Kt,
    easing: or,
    delay: vn,
    getWebAnimations: Ge,
    getKeyframes: Ft,
    getFill: qn,
    getDirection: Fr,
    getDelay: mt,
    getIterations: Pe,
    getEasing: vr,
    getDuration: ve,
    afterAddRead: _r,
    afterAddWrite: Dr,
    afterClearStyles: pn,
    afterStyles: Lr,
    afterRemoveClass: Qn,
    afterAddClass: jr,
    beforeAddRead: On,
    beforeAddWrite: wn,
    beforeClearStyles: ar,
    beforeStyles: Or,
    beforeRemoveClass: ir,
    beforeAddClass: In,
    onFinish: rr,
    isRunning: Tt,
    progressStart: mr,
    progressStep: Vr,
    progressEnd: Hi
  };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class LL {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(u) {
    this.m = new Map(Object.entries(u));
  }
  get(u, d) {
    const y = this.m.get(u);
    return y !== void 0 ? y : d;
  }
  getBoolean(u, d = !1) {
    const y = this.m.get(u);
    return y === void 0 ? d : typeof y == "string" ? y === "true" : !!y;
  }
  getNumber(u, d) {
    const y = parseFloat(this.m.get(u));
    return isNaN(y) ? d !== void 0 ? d : NaN : y;
  }
  set(u, d) {
    this.m.set(u, d);
  }
}
const Bl = /* @__PURE__ */ new LL();
let ML;
const cd = (c) => c && nL(c) || ML;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const AL = (c, ...u) => console.warn(`[Ionic Warning]: ${c}`, ...u);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const fT = (c, u) => {
  c.componentOnReady ? c.componentOnReady().then((d) => u(d)) : dT(() => u(c));
}, $L = (c) => c.componentOnReady !== void 0, NL = (c, u = []) => {
  const d = {};
  return u.forEach((y) => {
    c.hasAttribute(y) && (c.getAttribute(y) !== null && (d[y] = c.getAttribute(y)), c.removeAttribute(y));
  }), d;
}, dT = (c) => typeof __zone_symbol__requestAnimationFrame == "function" ? __zone_symbol__requestAnimationFrame(c) : typeof requestAnimationFrame == "function" ? requestAnimationFrame(c) : setTimeout(c), BA = (c, u, d) => Math.max(c, Math.min(u, d)), ca = (c, u) => {
  if (!c) {
    const d = "ASSERT: " + u;
    console.error(d);
    debugger;
    throw new Error(d);
  }
}, pT = (c, u) => {
  if (c ?? (c = {}), u ?? (u = {}), c === u)
    return !0;
  const d = Object.keys(c);
  if (d.length !== Object.keys(u).length)
    return !1;
  for (const y of d)
    if (!(y in u) || c[y] !== u[y])
      return !1;
  return !0;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const zL = "ionViewWillEnter", UL = "ionViewDidEnter", vT = "ionViewWillLeave", hT = "ionViewDidLeave", aS = "ionViewWillUnload", bv = (c) => {
  c.tabIndex = -1, c.focus();
}, Sy = (c) => c.offsetParent !== null, PL = () => ({
  saveViewFocus: (d) => {
    if (Bl.get("focusManagerPriority", !1)) {
      const S = document.activeElement;
      S !== null && (d != null && d.contains(S)) && S.setAttribute(M1, "true");
    }
  },
  setViewFocus: (d) => {
    const y = Bl.get("focusManagerPriority", !1);
    if (Array.isArray(y) && !d.contains(document.activeElement)) {
      const S = d.querySelector(`[${M1}]`);
      if (S && Sy(S)) {
        bv(S);
        return;
      }
      for (const T of y)
        switch (T) {
          case "content":
            const g = d.querySelector('main, [role="main"]');
            if (g && Sy(g)) {
              bv(g);
              return;
            }
            break;
          case "heading":
            const _ = d.querySelector('h1, [role="heading"][aria-level="1"]');
            if (_ && Sy(_)) {
              bv(_);
              return;
            }
            break;
          case "banner":
            const x = d.querySelector('header, [role="banner"]');
            if (x && Sy(x)) {
              bv(x);
              return;
            }
            break;
          default:
            AL(`Unrecognized focus manager priority value ${T}`);
            break;
        }
      bv(d);
    }
  }
}), M1 = "ion-last-focus", HL = () => import("./ios.transition-DSnPK2fc.js"), jL = () => import("./md.transition-78QqGXqF.js"), mT = PL(), yT = (c) => new Promise((u, d) => {
  xS(() => {
    FL(c), VL(c).then((y) => {
      y.animation && y.animation.destroy(), A1(c), u(y);
    }, (y) => {
      A1(c), d(y);
    });
  });
}), FL = (c) => {
  const u = c.enteringEl, d = c.leavingEl;
  mT.saveViewFocus(d), QL(u, d, c.direction), c.showGoBack ? u.classList.add("can-go-back") : u.classList.remove("can-go-back"), SS(u, !1), u.style.setProperty("pointer-events", "none"), d && (SS(d, !1), d.style.setProperty("pointer-events", "none"));
}, VL = async (c) => {
  const u = await IL(c);
  return u && $O.isBrowser ? BL(u, c) : WL(c);
}, A1 = (c) => {
  const u = c.enteringEl, d = c.leavingEl;
  u.classList.remove("ion-page-invisible"), u.style.removeProperty("pointer-events"), d !== void 0 && (d.classList.remove("ion-page-invisible"), d.style.removeProperty("pointer-events")), mT.setViewFocus(u);
}, IL = async (c) => !c.leavingEl || !c.animated || c.duration === 0 ? void 0 : c.animationBuilder ? c.animationBuilder : c.mode === "ios" ? (await HL()).iosTransitionAnimation : (await jL()).mdTransitionAnimation, BL = async (c, u) => {
  await gT(u, !0);
  const d = c(u.baseEl, u);
  bT(u.enteringEl, u.leavingEl);
  const y = await GL(d, u);
  return u.progressCallback && u.progressCallback(void 0), y && ST(u.enteringEl, u.leavingEl), {
    hasCompleted: y,
    animation: d
  };
}, WL = async (c) => {
  const u = c.enteringEl, d = c.leavingEl, y = Bl.get("focusManagerPriority", !1);
  return await gT(c, y), bT(u, d), ST(u, d), {
    hasCompleted: !0
  };
}, gT = async (c, u) => {
  (c.deepWait !== void 0 ? c.deepWait : u) && await Promise.all([bS(c.enteringEl), bS(c.leavingEl)]), await YL(c.viewIsReady, c.enteringEl);
}, YL = async (c, u) => {
  c && await c(u);
}, GL = (c, u) => {
  const d = u.progressCallback, y = new Promise((S) => {
    c.onFinish((T) => S(T === 1));
  });
  return d ? (c.progressStart(!0), d(c)) : c.play(), y;
}, bT = (c, u) => {
  Vl(u, vT), Vl(c, zL);
}, ST = (c, u) => {
  Vl(c, UL), Vl(u, hT);
}, Vl = (c, u) => {
  if (c) {
    const d = new CustomEvent(u, {
      bubbles: !1,
      cancelable: !1
    });
    c.dispatchEvent(d);
  }
}, bS = async (c) => {
  const u = c;
  if (u) {
    if (u.componentOnReady != null) {
      if (await u.componentOnReady() != null)
        return;
    } else if (u.__registerHost != null) {
      await new Promise((y) => dT(y));
      return;
    }
    await Promise.all(Array.from(u.children).map(bS));
  }
}, SS = (c, u) => {
  u ? (c.setAttribute("aria-hidden", "true"), c.classList.add("ion-page-hidden")) : (c.hidden = !1, c.removeAttribute("aria-hidden"), c.classList.remove("ion-page-hidden"));
}, QL = (c, u, d) => {
  c !== void 0 && (c.style.zIndex = d === "back" ? "99" : "101"), u !== void 0 && (u.style.zIndex = "100");
}, WA = (c) => {
  if (c.classList.contains("ion-page"))
    return c;
  const u = c.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
  return u || c;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Dy = (c, u, d, y, S) => KL(c[1], u[1], d[1], y[1], S).map((T) => qL(c[0], u[0], d[0], y[0], T)), qL = (c, u, d, y, S) => {
  const T = 3 * u * Math.pow(S - 1, 2), g = -3 * d * S + 3 * d + y * S, _ = c * Math.pow(S - 1, 3);
  return S * (T + S * g) - _;
}, KL = (c, u, d, y, S) => (c -= S, u -= S, d -= S, y -= S, ZL(y - 3 * d + 3 * u - c, 3 * d - 6 * u + 3 * c, 3 * u - 3 * c, c).filter((g) => g >= 0 && g <= 1)), XL = (c, u, d) => {
  const y = u * u - 4 * c * d;
  return y < 0 ? [] : [(-u + Math.sqrt(y)) / (2 * c), (-u - Math.sqrt(y)) / (2 * c)];
}, ZL = (c, u, d, y) => {
  if (c === 0)
    return XL(u, d, y);
  u /= c, d /= c, y /= c;
  const S = (3 * d - u * u) / 3, T = (2 * u * u * u - 9 * u * d + 27 * y) / 27;
  if (S === 0)
    return [Math.pow(-T, 1 / 3)];
  if (T === 0)
    return [Math.sqrt(-S), -Math.sqrt(-S)];
  const g = Math.pow(T / 2, 2) + Math.pow(S / 3, 3);
  if (g === 0)
    return [Math.pow(T / 2, 1 / 2) - u / 3];
  if (g > 0)
    return [
      Math.pow(-(T / 2) + Math.sqrt(g), 1 / 3) - Math.pow(T / 2 + Math.sqrt(g), 1 / 3) - u / 3
    ];
  const _ = Math.sqrt(Math.pow(-(S / 3), 3)), x = Math.acos(-(T / (2 * Math.sqrt(Math.pow(-(S / 3), 3))))), L = 2 * Math.pow(_, 1 / 3);
  return [
    L * Math.cos(x / 3) - u / 3,
    L * Math.cos((x + 2 * Math.PI) / 3) - u / 3,
    L * Math.cos((x + 4 * Math.PI) / 3) - u / 3
  ];
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const JL = (c, u) => typeof c == "string" && c.length > 0 ? Object.assign({ "ion-color": !0, [`ion-color-${c}`]: !0 }, u) : u;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ET = async (c, u, d, y, S, T) => {
  var g;
  if (c)
    return c.attachViewToDom(u, d, S, y);
  if (typeof d != "string" && !(d instanceof HTMLElement))
    throw new Error("framework delegate is missing");
  const _ = typeof d == "string" ? (g = u.ownerDocument) === null || g === void 0 ? void 0 : g.createElement(d) : d;
  return y && y.forEach((x) => _.classList.add(x)), S && Object.assign(_, S), u.appendChild(_), await new Promise((x) => fT(_, x)), _;
}, eM = (c, u) => {
  if (u) {
    if (c) {
      const d = u.parentElement;
      return c.removeViewFromDom(d, u);
    }
    u.remove();
  }
  return Promise.resolve();
};
function Wl(c, u) {
  var d = {};
  for (var y in c) Object.prototype.hasOwnProperty.call(c, y) && u.indexOf(y) < 0 && (d[y] = c[y]);
  if (c != null && typeof Object.getOwnPropertySymbols == "function")
    for (var S = 0, y = Object.getOwnPropertySymbols(c); S < y.length; S++)
      u.indexOf(y[S]) < 0 && Object.prototype.propertyIsEnumerable.call(c, y[S]) && (d[y[S]] = c[y[S]]);
  return d;
}
var ES = { exports: {} }, ua = {}, Ey = { exports: {} }, oS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $1;
function tM() {
  return $1 || ($1 = 1, function(c) {
    function u(ce, Le) {
      var oe = ce.length;
      ce.push(Le);
      e: for (; 0 < oe; ) {
        var $ = oe - 1 >>> 1, q = ce[$];
        if (0 < S(q, Le)) ce[$] = Le, ce[oe] = q, oe = $;
        else break e;
      }
    }
    function d(ce) {
      return ce.length === 0 ? null : ce[0];
    }
    function y(ce) {
      if (ce.length === 0) return null;
      var Le = ce[0], oe = ce.pop();
      if (oe !== Le) {
        ce[0] = oe;
        e: for (var $ = 0, q = ce.length, Ne = q >>> 1; $ < Ne; ) {
          var Te = 2 * ($ + 1) - 1, Ge = ce[Te], ot = Te + 1, St = ce[ot];
          if (0 > S(Ge, oe)) ot < q && 0 > S(St, Ge) ? (ce[$] = St, ce[ot] = oe, $ = ot) : (ce[$] = Ge, ce[Te] = oe, $ = Te);
          else if (ot < q && 0 > S(St, oe)) ce[$] = St, ce[ot] = oe, $ = ot;
          else break e;
        }
      }
      return Le;
    }
    function S(ce, Le) {
      var oe = ce.sortIndex - Le.sortIndex;
      return oe !== 0 ? oe : ce.id - Le.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var T = performance;
      c.unstable_now = function() {
        return T.now();
      };
    } else {
      var g = Date, _ = g.now();
      c.unstable_now = function() {
        return g.now() - _;
      };
    }
    var x = [], L = [], P = 1, A = null, K = 3, B = !1, se = !1, We = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, ht = typeof clearTimeout == "function" ? clearTimeout : null, ye = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ue(ce) {
      for (var Le = d(L); Le !== null; ) {
        if (Le.callback === null) y(L);
        else if (Le.startTime <= ce) y(L), Le.sortIndex = Le.expirationTime, u(x, Le);
        else break;
        Le = d(L);
      }
    }
    function ut(ce) {
      if (We = !1, Ue(ce), !se) if (d(x) !== null) se = !0, rt(Oe);
      else {
        var Le = d(L);
        Le !== null && we(ut, Le.startTime - ce);
      }
    }
    function Oe(ce, Le) {
      se = !1, We && (We = !1, ht(nt), nt = -1), B = !0;
      var oe = K;
      try {
        for (Ue(Le), A = d(x); A !== null && (!(A.expirationTime > Le) || ce && !Ct()); ) {
          var $ = A.callback;
          if (typeof $ == "function") {
            A.callback = null, K = A.priorityLevel;
            var q = $(A.expirationTime <= Le);
            Le = c.unstable_now(), typeof q == "function" ? A.callback = q : A === d(x) && y(x), Ue(Le);
          } else y(x);
          A = d(x);
        }
        if (A !== null) var Ne = !0;
        else {
          var Te = d(L);
          Te !== null && we(ut, Te.startTime - Le), Ne = !1;
        }
        return Ne;
      } finally {
        A = null, K = oe, B = !1;
      }
    }
    var st = !1, ge = null, nt = -1, _e = 5, xt = -1;
    function Ct() {
      return !(c.unstable_now() - xt < _e);
    }
    function $t() {
      if (ge !== null) {
        var ce = c.unstable_now();
        xt = ce;
        var Le = !0;
        try {
          Le = ge(!0, ce);
        } finally {
          Le ? je() : (st = !1, ge = null);
        }
      } else st = !1;
    }
    var je;
    if (typeof ye == "function") je = function() {
      ye($t);
    };
    else if (typeof MessageChannel < "u") {
      var at = new MessageChannel(), gt = at.port2;
      at.port1.onmessage = $t, je = function() {
        gt.postMessage(null);
      };
    } else je = function() {
      Ce($t, 0);
    };
    function rt(ce) {
      ge = ce, st || (st = !0, je());
    }
    function we(ce, Le) {
      nt = Ce(function() {
        ce(c.unstable_now());
      }, Le);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(ce) {
      ce.callback = null;
    }, c.unstable_continueExecution = function() {
      se || B || (se = !0, rt(Oe));
    }, c.unstable_forceFrameRate = function(ce) {
      0 > ce || 125 < ce ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _e = 0 < ce ? Math.floor(1e3 / ce) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return K;
    }, c.unstable_getFirstCallbackNode = function() {
      return d(x);
    }, c.unstable_next = function(ce) {
      switch (K) {
        case 1:
        case 2:
        case 3:
          var Le = 3;
          break;
        default:
          Le = K;
      }
      var oe = K;
      K = Le;
      try {
        return ce();
      } finally {
        K = oe;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(ce, Le) {
      switch (ce) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ce = 3;
      }
      var oe = K;
      K = ce;
      try {
        return Le();
      } finally {
        K = oe;
      }
    }, c.unstable_scheduleCallback = function(ce, Le, oe) {
      var $ = c.unstable_now();
      switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? $ + oe : $) : oe = $, ce) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return q = oe + q, ce = { id: P++, callback: Le, priorityLevel: ce, startTime: oe, expirationTime: q, sortIndex: -1 }, oe > $ ? (ce.sortIndex = oe, u(L, ce), d(x) === null && ce === d(L) && (We ? (ht(nt), nt = -1) : We = !0, we(ut, oe - $))) : (ce.sortIndex = q, u(x, ce), se || B || (se = !0, rt(Oe))), ce;
    }, c.unstable_shouldYield = Ct, c.unstable_wrapCallback = function(ce) {
      var Le = K;
      return function() {
        var oe = K;
        K = Le;
        try {
          return ce.apply(this, arguments);
        } finally {
          K = oe;
        }
      };
    };
  }(oS)), oS;
}
var lS = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N1;
function nM() {
  return N1 || (N1 = 1, function(c) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var u = !1, d = !1, y = 5;
      function S(ve, Pe) {
        var mt = ve.length;
        ve.push(Pe), _(ve, Pe, mt);
      }
      function T(ve) {
        return ve.length === 0 ? null : ve[0];
      }
      function g(ve) {
        if (ve.length === 0)
          return null;
        var Pe = ve[0], mt = ve.pop();
        return mt !== Pe && (ve[0] = mt, x(ve, mt, 0)), Pe;
      }
      function _(ve, Pe, mt) {
        for (var Ft = mt; Ft > 0; ) {
          var Vt = Ft - 1 >>> 1, Tn = ve[Vt];
          if (L(Tn, Pe) > 0)
            ve[Vt] = Pe, ve[Ft] = Tn, Ft = Vt;
          else
            return;
        }
      }
      function x(ve, Pe, mt) {
        for (var Ft = mt, Vt = ve.length, Tn = Vt >>> 1; Ft < Tn; ) {
          var vn = (Ft + 1) * 2 - 1, or = ve[vn], Kt = vn + 1, hr = ve[Kt];
          if (L(or, Pe) < 0)
            Kt < Vt && L(hr, or) < 0 ? (ve[Ft] = hr, ve[Kt] = Pe, Ft = Kt) : (ve[Ft] = or, ve[vn] = Pe, Ft = vn);
          else if (Kt < Vt && L(hr, Pe) < 0)
            ve[Ft] = hr, ve[Kt] = Pe, Ft = Kt;
          else
            return;
        }
      }
      function L(ve, Pe) {
        var mt = ve.sortIndex - Pe.sortIndex;
        return mt !== 0 ? mt : ve.id - Pe.id;
      }
      var P = 1, A = 2, K = 3, B = 4, se = 5;
      function We(ve, Pe) {
      }
      var Ce = typeof performance == "object" && typeof performance.now == "function";
      if (Ce) {
        var ht = performance;
        c.unstable_now = function() {
          return ht.now();
        };
      } else {
        var ye = Date, Ue = ye.now();
        c.unstable_now = function() {
          return ye.now() - Ue;
        };
      }
      var ut = 1073741823, Oe = -1, st = 250, ge = 5e3, nt = 1e4, _e = ut, xt = [], Ct = [], $t = 1, je = null, at = K, gt = !1, rt = !1, we = !1, ce = typeof setTimeout == "function" ? setTimeout : null, Le = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function $(ve) {
        for (var Pe = T(Ct); Pe !== null; ) {
          if (Pe.callback === null)
            g(Ct);
          else if (Pe.startTime <= ve)
            g(Ct), Pe.sortIndex = Pe.expirationTime, S(xt, Pe);
          else
            return;
          Pe = T(Ct);
        }
      }
      function q(ve) {
        if (we = !1, $(ve), !rt)
          if (T(xt) !== null)
            rt = !0, Lr(Ne);
          else {
            var Pe = T(Ct);
            Pe !== null && pn(q, Pe.startTime - ve);
          }
      }
      function Ne(ve, Pe) {
        rt = !1, we && (we = !1, qn()), gt = !0;
        var mt = at;
        try {
          var Ft;
          if (!d) return Te(ve, Pe);
        } finally {
          je = null, at = mt, gt = !1;
        }
      }
      function Te(ve, Pe) {
        var mt = Pe;
        for ($(mt), je = T(xt); je !== null && !u && !(je.expirationTime > mt && (!ve || Dr())); ) {
          var Ft = je.callback;
          if (typeof Ft == "function") {
            je.callback = null, at = je.priorityLevel;
            var Vt = je.expirationTime <= mt, Tn = Ft(Vt);
            mt = c.unstable_now(), typeof Tn == "function" ? je.callback = Tn : je === T(xt) && g(xt), $(mt);
          } else
            g(xt);
          je = T(xt);
        }
        if (je !== null)
          return !0;
        var vn = T(Ct);
        return vn !== null && pn(q, vn.startTime - mt), !1;
      }
      function Ge(ve, Pe) {
        switch (ve) {
          case P:
          case A:
          case K:
          case B:
          case se:
            break;
          default:
            ve = K;
        }
        var mt = at;
        at = ve;
        try {
          return Pe();
        } finally {
          at = mt;
        }
      }
      function ot(ve) {
        var Pe;
        switch (at) {
          case P:
          case A:
          case K:
            Pe = K;
            break;
          default:
            Pe = at;
            break;
        }
        var mt = at;
        at = Pe;
        try {
          return ve();
        } finally {
          at = mt;
        }
      }
      function St(ve) {
        var Pe = at;
        return function() {
          var mt = at;
          at = Pe;
          try {
            return ve.apply(this, arguments);
          } finally {
            at = mt;
          }
        };
      }
      function wt(ve, Pe, mt) {
        var Ft = c.unstable_now(), Vt;
        if (typeof mt == "object" && mt !== null) {
          var Tn = mt.delay;
          typeof Tn == "number" && Tn > 0 ? Vt = Ft + Tn : Vt = Ft;
        } else
          Vt = Ft;
        var vn;
        switch (ve) {
          case P:
            vn = Oe;
            break;
          case A:
            vn = st;
            break;
          case se:
            vn = _e;
            break;
          case B:
            vn = nt;
            break;
          case K:
          default:
            vn = ge;
            break;
        }
        var or = Vt + vn, Kt = {
          id: $t++,
          callback: Pe,
          priorityLevel: ve,
          startTime: Vt,
          expirationTime: or,
          sortIndex: -1
        };
        return Vt > Ft ? (Kt.sortIndex = Vt, S(Ct, Kt), T(xt) === null && Kt === T(Ct) && (we ? qn() : we = !0, pn(q, Vt - Ft))) : (Kt.sortIndex = or, S(xt, Kt), !rt && !gt && (rt = !0, Lr(Ne))), Kt;
      }
      function Tt() {
      }
      function tn() {
        !rt && !gt && (rt = !0, Lr(Ne));
      }
      function nr() {
        return T(xt);
      }
      function rr(ve) {
        ve.callback = null;
      }
      function dn() {
        return at;
      }
      var zn = !1, Un = null, On = -1, wn = y, _r = -1;
      function Dr() {
        var ve = c.unstable_now() - _r;
        return !(ve < wn);
      }
      function In() {
      }
      function ir(ve) {
        if (ve < 0 || ve > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ve > 0 ? wn = Math.floor(1e3 / ve) : wn = y;
      }
      var Or = function() {
        if (Un !== null) {
          var ve = c.unstable_now();
          _r = ve;
          var Pe = !0, mt = !0;
          try {
            mt = Un(Pe, ve);
          } finally {
            mt ? ar() : (zn = !1, Un = null);
          }
        } else
          zn = !1;
      }, ar;
      if (typeof oe == "function")
        ar = function() {
          oe(Or);
        };
      else if (typeof MessageChannel < "u") {
        var jr = new MessageChannel(), Qn = jr.port2;
        jr.port1.onmessage = Or, ar = function() {
          Qn.postMessage(null);
        };
      } else
        ar = function() {
          ce(Or, 0);
        };
      function Lr(ve) {
        Un = ve, zn || (zn = !0, ar());
      }
      function pn(ve, Pe) {
        On = ce(function() {
          ve(c.unstable_now());
        }, Pe);
      }
      function qn() {
        Le(On), On = -1;
      }
      var Fr = In, vr = null;
      c.unstable_IdlePriority = se, c.unstable_ImmediatePriority = P, c.unstable_LowPriority = B, c.unstable_NormalPriority = K, c.unstable_Profiling = vr, c.unstable_UserBlockingPriority = A, c.unstable_cancelCallback = rr, c.unstable_continueExecution = tn, c.unstable_forceFrameRate = ir, c.unstable_getCurrentPriorityLevel = dn, c.unstable_getFirstCallbackNode = nr, c.unstable_next = ot, c.unstable_pauseExecution = Tt, c.unstable_requestPaint = Fr, c.unstable_runWithPriority = Ge, c.unstable_scheduleCallback = wt, c.unstable_shouldYield = Dr, c.unstable_wrapCallback = St, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(lS)), lS;
}
var z1;
function CT() {
  return z1 || (z1 = 1, process.env.NODE_ENV === "production" ? Ey.exports = tM() : Ey.exports = nM()), Ey.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U1;
function rM() {
  if (U1) return ua;
  U1 = 1;
  var c = Cv(), u = CT();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var y = /* @__PURE__ */ new Set(), S = {};
  function T(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (S[n] = r, n = 0; n < r.length; n++) y.add(r[n]);
  }
  var _ = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, P = {}, A = {};
  function K(n) {
    return x.call(A, n) ? !0 : x.call(P, n) ? !1 : L.test(n) ? A[n] = !0 : (P[n] = !0, !1);
  }
  function B(n, r, o, s) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function se(n, r, o, s) {
    if (r === null || typeof r > "u" || B(n, r, o, s)) return !0;
    if (s) return !1;
    if (o !== null) switch (o.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function We(n, r, o, s, p, h, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = C;
  }
  var Ce = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ce[n] = new We(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ce[r] = new We(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ce[n] = new We(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ce[n] = new We(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ce[n] = new We(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ce[n] = new We(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ce[n] = new We(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ce[n] = new We(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ce[n] = new We(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ht = /[\-:]([a-z])/g;
  function ye(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ht,
      ye
    );
    Ce[r] = new We(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ht, ye);
    Ce[r] = new We(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ht, ye);
    Ce[r] = new We(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ce[n] = new We(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ce.xlinkHref = new We("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ce[n] = new We(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ue(n, r, o, s) {
    var p = Ce.hasOwnProperty(r) ? Ce[r] : null;
    (p !== null ? p.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (se(r, o, p, s) && (o = null), s || p === null ? K(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : p.mustUseProperty ? n[p.propertyName] = o === null ? p.type === 3 ? !1 : "" : o : (r = p.attributeName, s = p.attributeNamespace, o === null ? n.removeAttribute(r) : (p = p.type, o = p === 3 || p === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var ut = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oe = Symbol.for("react.element"), st = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), nt = Symbol.for("react.strict_mode"), _e = Symbol.for("react.profiler"), xt = Symbol.for("react.provider"), Ct = Symbol.for("react.context"), $t = Symbol.for("react.forward_ref"), je = Symbol.for("react.suspense"), at = Symbol.for("react.suspense_list"), gt = Symbol.for("react.memo"), rt = Symbol.for("react.lazy"), we = Symbol.for("react.offscreen"), ce = Symbol.iterator;
  function Le(n) {
    return n === null || typeof n != "object" ? null : (n = ce && n[ce] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var oe = Object.assign, $;
  function q(n) {
    if ($ === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      $ = r && r[1] || "";
    }
    return `
` + $ + n;
  }
  var Ne = !1;
  function Te(n, r) {
    if (!n || Ne) return "";
    Ne = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (G) {
          var s = G;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (G) {
          s = G;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (G) {
          s = G;
        }
        n();
      }
    } catch (G) {
      if (G && s && typeof G.stack == "string") {
        for (var p = G.stack.split(`
`), h = s.stack.split(`
`), C = p.length - 1, k = h.length - 1; 1 <= C && 0 <= k && p[C] !== h[k]; ) k--;
        for (; 1 <= C && 0 <= k; C--, k--) if (p[C] !== h[k]) {
          if (C !== 1 || k !== 1)
            do
              if (C--, k--, 0 > k || p[C] !== h[k]) {
                var M = `
` + p[C].replace(" at new ", " at ");
                return n.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", n.displayName)), M;
              }
            while (1 <= C && 0 <= k);
          break;
        }
      }
    } finally {
      Ne = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? q(n) : "";
  }
  function Ge(n) {
    switch (n.tag) {
      case 5:
        return q(n.type);
      case 16:
        return q("Lazy");
      case 13:
        return q("Suspense");
      case 19:
        return q("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Te(n.type, !1), n;
      case 11:
        return n = Te(n.type.render, !1), n;
      case 1:
        return n = Te(n.type, !0), n;
      default:
        return "";
    }
  }
  function ot(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ge:
        return "Fragment";
      case st:
        return "Portal";
      case _e:
        return "Profiler";
      case nt:
        return "StrictMode";
      case je:
        return "Suspense";
      case at:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Ct:
        return (n.displayName || "Context") + ".Consumer";
      case xt:
        return (n._context.displayName || "Context") + ".Provider";
      case $t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case gt:
        return r = n.displayName || null, r !== null ? r : ot(n.type) || "Memo";
      case rt:
        r = n._payload, n = n._init;
        try {
          return ot(n(r));
        } catch {
        }
    }
    return null;
  }
  function St(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ot(r);
      case 8:
        return r === nt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function wt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Tt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function tn(n) {
    var r = Tt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var p = o.get, h = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(C) {
        s = "" + C, h.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(C) {
        s = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function nr(n) {
    n._valueTracker || (n._valueTracker = tn(n));
  }
  function rr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), s = "";
    return n && (s = Tt(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
  }
  function dn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function zn(n, r) {
    var o = r.checked;
    return oe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Un(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = wt(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function On(n, r) {
    r = r.checked, r != null && Ue(n, "checked", r, !1);
  }
  function wn(n, r) {
    On(n, r);
    var o = wt(r.value), s = r.type;
    if (o != null) s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Dr(n, r.type, o) : r.hasOwnProperty("defaultValue") && Dr(n, r.type, wt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function _r(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Dr(n, r, o) {
    (r !== "number" || dn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var In = Array.isArray;
  function ir(n, r, o, s) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < o.length; p++) r["$" + o[p]] = !0;
      for (o = 0; o < n.length; o++) p = r.hasOwnProperty("$" + n[o].value), n[o].selected !== p && (n[o].selected = p), p && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + wt(o), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === o) {
          n[p].selected = !0, s && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Or(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(d(91));
    return oe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ar(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(d(92));
        if (In(o)) {
          if (1 < o.length) throw Error(d(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: wt(o) };
  }
  function jr(n, r) {
    var o = wt(r.value), s = wt(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function Qn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Lr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function pn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Lr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var qn, Fr = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (qn = qn || document.createElement("div"), qn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = qn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function vr(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ve = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Pe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ve).forEach(function(n) {
    Pe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ve[r] = ve[n];
    });
  });
  function mt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || ve.hasOwnProperty(n) && ve[n] ? ("" + r).trim() : r + "px";
  }
  function Ft(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var s = o.indexOf("--") === 0, p = mt(o, r[o], s);
      o === "float" && (o = "cssFloat"), s ? n.setProperty(o, p) : n[o] = p;
    }
  }
  var Vt = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Tn(n, r) {
    if (r) {
      if (Vt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(d(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(d(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(d(62));
    }
  }
  function vn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var or = null;
  function Kt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var hr = null, It = null, Bt = null;
  function Ri(n) {
    if (n = Cs(n)) {
      if (typeof hr != "function") throw Error(d(280));
      var r = n.stateNode;
      r && (r = Ke(r), hr(n.stateNode, n.type, r));
    }
  }
  function ri(n) {
    It ? Bt ? Bt.push(n) : Bt = [n] : It = n;
  }
  function Ca() {
    if (It) {
      var n = It, r = Bt;
      if (Bt = It = null, Ri(n), r) for (n = 0; n < r.length; n++) Ri(r[n]);
    }
  }
  function Fa(n, r) {
    return n(r);
  }
  function bo() {
  }
  var ii = !1;
  function wa(n, r, o) {
    if (ii) return n(r, o);
    ii = !0;
    try {
      return Fa(n, r, o);
    } finally {
      ii = !1, (It !== null || Bt !== null) && (bo(), Ca());
    }
  }
  function Mr(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var s = Ke(o);
    if (s === null) return null;
    o = s[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) || (n = n.type, s = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !s;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(d(231, r, typeof o));
    return o;
  }
  var Ar = !1;
  if (_) try {
    var $r = {};
    Object.defineProperty($r, "passive", { get: function() {
      Ar = !0;
    } }), window.addEventListener("test", $r, $r), window.removeEventListener("test", $r, $r);
  } catch {
    Ar = !1;
  }
  function bn(n, r, o, s, p, h, C, k, M) {
    var G = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, G);
    } catch (ie) {
      this.onError(ie);
    }
  }
  var mr = !1, Vr = null, Hi = !1, xi = null, O = { onError: function(n) {
    mr = !0, Vr = n;
  } };
  function ne(n, r, o, s, p, h, C, k, M) {
    mr = !1, Vr = null, bn.apply(O, arguments);
  }
  function le(n, r, o, s, p, h, C, k, M) {
    if (ne.apply(this, arguments), mr) {
      if (mr) {
        var G = Vr;
        mr = !1, Vr = null;
      } else throw Error(d(198));
      Hi || (Hi = !0, xi = G);
    }
  }
  function He(n) {
    var r = n, o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function kt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Lt(n) {
    if (He(n) !== n) throw Error(d(188));
  }
  function Qe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = He(n), r === null) throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var p = o.return;
      if (p === null) break;
      var h = p.alternate;
      if (h === null) {
        if (s = p.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (p.child === h.child) {
        for (h = p.child; h; ) {
          if (h === o) return Lt(p), n;
          if (h === s) return Lt(p), r;
          h = h.sibling;
        }
        throw Error(d(188));
      }
      if (o.return !== s.return) o = p, s = h;
      else {
        for (var C = !1, k = p.child; k; ) {
          if (k === o) {
            C = !0, o = p, s = h;
            break;
          }
          if (k === s) {
            C = !0, s = p, o = h;
            break;
          }
          k = k.sibling;
        }
        if (!C) {
          for (k = h.child; k; ) {
            if (k === o) {
              C = !0, o = h, s = p;
              break;
            }
            if (k === s) {
              C = !0, s = h, o = p;
              break;
            }
            k = k.sibling;
          }
          if (!C) throw Error(d(189));
        }
      }
      if (o.alternate !== s) throw Error(d(190));
    }
    if (o.tag !== 3) throw Error(d(188));
    return o.stateNode.current === o ? n : r;
  }
  function Rt(n) {
    return n = Qe(n), n !== null ? Pn(n) : null;
  }
  function Pn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Pn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var V = u.unstable_scheduleCallback, de = u.unstable_cancelCallback, qe = u.unstable_shouldYield, Wt = u.unstable_requestPaint, ct = u.unstable_now, nn = u.unstable_getCurrentPriorityLevel, Rn = u.unstable_ImmediatePriority, _t = u.unstable_UserBlockingPriority, ji = u.unstable_NormalPriority, So = u.unstable_LowPriority, Yl = u.unstable_IdlePriority, Eo = null, ai = null;
  function as(n) {
    if (ai && typeof ai.onCommitFiberRoot == "function") try {
      ai.onCommitFiberRoot(Eo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ir = Math.clz32 ? Math.clz32 : vc, os = Math.log, ls = Math.LN2;
  function vc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (os(n) / ls | 0) | 0;
  }
  var Gl = 64, Co = 4194304;
  function fa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Br(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var s = 0, p = n.suspendedLanes, h = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var k = C & ~p;
      k !== 0 ? s = fa(k) : (h &= C, h !== 0 && (s = fa(h)));
    } else C = o & ~p, C !== 0 ? s = fa(C) : h !== 0 && (s = fa(h));
    if (s === 0) return 0;
    if (r !== 0 && r !== s && !(r & p) && (p = s & -s, h = r & -r, p >= h || p === 16 && (h & 4194240) !== 0)) return r;
    if (s & 4 && (s |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= s; 0 < r; ) o = 31 - Ir(r), p = 1 << o, s |= n[o], r &= ~p;
    return s;
  }
  function wo(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function To(n, r) {
    for (var o = n.suspendedLanes, s = n.pingedLanes, p = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var C = 31 - Ir(h), k = 1 << C, M = p[C];
      M === -1 ? (!(k & o) || k & s) && (p[C] = wo(k, r)) : M <= r && (n.expiredLanes |= k), h &= ~k;
    }
  }
  function Ro(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ql() {
    var n = Gl;
    return Gl <<= 1, !(Gl & 4194240) && (Gl = 64), n;
  }
  function ql(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Va(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ir(r), n[r] = o;
  }
  function vd(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var p = 31 - Ir(o), h = 1 << p;
      r[p] = 0, s[p] = -1, n[p] = -1, o &= ~h;
    }
  }
  function Ta(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - Ir(o), p = 1 << s;
      p & r | n[s] & r && (n[s] |= r), o &= ~p;
    }
  }
  var Yt = 0;
  function Kl(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nl, Xl, Nt, Zl, Jl, pt = !1, rl = [], xn = null, oi = null, Wr = null, xo = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), Zt = [], hc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function li(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        xn = null;
        break;
      case "dragenter":
      case "dragleave":
        oi = null;
        break;
      case "mouseover":
      case "mouseout":
        Wr = null;
        break;
      case "pointerover":
      case "pointerout":
        xo.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ln.delete(r.pointerId);
    }
  }
  function lr(n, r, o, s, p, h) {
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: h, targetContainers: [p] }, r !== null && (r = Cs(r), r !== null && Xl(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function Ra(n, r, o, s, p) {
    switch (r) {
      case "focusin":
        return xn = lr(xn, n, r, o, s, p), !0;
      case "dragenter":
        return oi = lr(oi, n, r, o, s, p), !0;
      case "mouseover":
        return Wr = lr(Wr, n, r, o, s, p), !0;
      case "pointerover":
        var h = p.pointerId;
        return xo.set(h, lr(xo.get(h) || null, n, r, o, s, p)), !0;
      case "gotpointercapture":
        return h = p.pointerId, Ln.set(h, lr(Ln.get(h) || null, n, r, o, s, p)), !0;
    }
    return !1;
  }
  function mc(n) {
    var r = Bi(n.target);
    if (r !== null) {
      var o = He(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = kt(o), r !== null) {
            n.blockedOn = r, Jl(n.priority, function() {
              Nt(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ia(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = tu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var s = new o.constructor(o.type, o);
        or = s, o.target.dispatchEvent(s), or = null;
      } else return r = Cs(o), r !== null && Xl(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function ko(n, r, o) {
    Ia(n) && o.delete(r);
  }
  function yc() {
    pt = !1, xn !== null && Ia(xn) && (xn = null), oi !== null && Ia(oi) && (oi = null), Wr !== null && Ia(Wr) && (Wr = null), xo.forEach(ko), Ln.forEach(ko);
  }
  function Fi(n, r) {
    n.blockedOn === r && (n.blockedOn = null, pt || (pt = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, yc)));
  }
  function _o(n) {
    function r(p) {
      return Fi(p, n);
    }
    if (0 < rl.length) {
      Fi(rl[0], n);
      for (var o = 1; o < rl.length; o++) {
        var s = rl[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (xn !== null && Fi(xn, n), oi !== null && Fi(oi, n), Wr !== null && Fi(Wr, n), xo.forEach(r), Ln.forEach(r), o = 0; o < Zt.length; o++) s = Zt[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < Zt.length && (o = Zt[0], o.blockedOn === null); ) mc(o), o.blockedOn === null && Zt.shift();
  }
  var Ba = ut.ReactCurrentBatchConfig, Vi = !0;
  function eu(n, r, o, s) {
    var p = Yt, h = Ba.transition;
    Ba.transition = null;
    try {
      Yt = 1, Oo(n, r, o, s);
    } finally {
      Yt = p, Ba.transition = h;
    }
  }
  function Do(n, r, o, s) {
    var p = Yt, h = Ba.transition;
    Ba.transition = null;
    try {
      Yt = 4, Oo(n, r, o, s);
    } finally {
      Yt = p, Ba.transition = h;
    }
  }
  function Oo(n, r, o, s) {
    if (Vi) {
      var p = tu(n, r, o, s);
      if (p === null) xc(n, r, s, il, o), li(n, s);
      else if (Ra(p, n, r, o, s)) s.stopPropagation();
      else if (li(n, s), r & 4 && -1 < hc.indexOf(n)) {
        for (; p !== null; ) {
          var h = Cs(p);
          if (h !== null && nl(h), h = tu(n, r, o, s), h === null && xc(n, r, s, il, o), h === p) break;
          p = h;
        }
        p !== null && s.stopPropagation();
      } else xc(n, r, s, null, o);
    }
  }
  var il = null;
  function tu(n, r, o, s) {
    if (il = null, n = Kt(s), n = Bi(n), n !== null) if (r = He(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = kt(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return il = n, null;
  }
  function us(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (nn()) {
          case Rn:
            return 1;
          case _t:
            return 4;
          case ji:
          case So:
            return 16;
          case Yl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var da = null, E = null, D = null;
  function Y() {
    if (D) return D;
    var n, r = E, o = r.length, s, p = "value" in da ? da.value : da.textContent, h = p.length;
    for (n = 0; n < o && r[n] === p[n]; n++) ;
    var C = o - n;
    for (s = 1; s <= C && r[o - s] === p[h - s]; s++) ;
    return D = p.slice(n, 1 < s ? 1 - s : void 0);
  }
  function X(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function fe() {
    return !0;
  }
  function et() {
    return !1;
  }
  function be(n) {
    function r(o, s, p, h, C) {
      this._reactName = o, this._targetInst = p, this.type = s, this.nativeEvent = h, this.target = C, this.currentTarget = null;
      for (var k in n) n.hasOwnProperty(k) && (o = n[k], this[k] = o ? o(h) : h[k]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? fe : et, this.isPropagationStopped = et, this;
    }
    return oe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = fe);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = fe);
    }, persist: function() {
    }, isPersistent: fe }), r;
  }
  var Ze = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Dt = be(Ze), jt = oe({}, Ze, { view: 0, detail: 0 }), ln = be(jt), rn, un, cn, zt = oe({}, jt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: bd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== cn && (cn && n.type === "mousemove" ? (rn = n.screenX - cn.screenX, un = n.screenY - cn.screenY) : un = rn = 0, cn = n), rn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : un;
  } }), Wa = be(zt), nu = oe({}, zt, { dataTransfer: 0 }), ss = be(nu), hd = oe({}, jt, { relatedTarget: 0 }), pa = be(hd), cs = oe({}, Ze, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fs = be(cs), md = oe({}, Ze, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Ay = be(md), $y = oe({}, Ze, { data: 0 }), yd = be($y), gd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, _v = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Dv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ov(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Dv[n]) ? !!r[n] : !1;
  }
  function bd() {
    return Ov;
  }
  var Ya = oe({}, jt, { key: function(n) {
    if (n.key) {
      var r = gd[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = X(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? _v[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: bd, charCode: function(n) {
    return n.type === "keypress" ? X(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? X(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ny = be(Ya), Sd = oe({}, zt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gc = be(Sd), Ed = oe({}, jt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: bd }), zy = be(Ed), bc = oe({}, Ze, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lv = be(bc), ui = oe({}, zt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ga = be(ui), Bn = [9, 13, 27, 32], va = _ && "CompositionEvent" in window, al = null;
  _ && "documentMode" in document && (al = document.documentMode);
  var Sc = _ && "TextEvent" in window && !al, Mv = _ && (!va || al && 8 < al && 11 >= al), ru = " ", Av = !1;
  function $v(n, r) {
    switch (n) {
      case "keyup":
        return Bn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ec(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var iu = !1;
  function Uy(n, r) {
    switch (n) {
      case "compositionend":
        return Ec(r);
      case "keypress":
        return r.which !== 32 ? null : (Av = !0, ru);
      case "textInput":
        return n = r.data, n === ru && Av ? null : n;
      default:
        return null;
    }
  }
  function Py(n, r) {
    if (iu) return n === "compositionend" || !va && $v(n, r) ? (n = Y(), D = E = da = null, iu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Mv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Nv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function zv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Nv[n.type] : r === "textarea";
  }
  function Uv(n, r, o, s) {
    ri(s), r = bs(r, "onChange"), 0 < r.length && (o = new Dt("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var ds = null, au = null;
  function ou(n) {
    Rc(n, 0);
  }
  function lu(n) {
    var r = su(n);
    if (rr(r)) return n;
  }
  function Pv(n, r) {
    if (n === "change") return r;
  }
  var Cd = !1;
  if (_) {
    var wd;
    if (_) {
      var Td = "oninput" in document;
      if (!Td) {
        var Hv = document.createElement("div");
        Hv.setAttribute("oninput", "return;"), Td = typeof Hv.oninput == "function";
      }
      wd = Td;
    } else wd = !1;
    Cd = wd && (!document.documentMode || 9 < document.documentMode);
  }
  function jv() {
    ds && (ds.detachEvent("onpropertychange", Fv), au = ds = null);
  }
  function Fv(n) {
    if (n.propertyName === "value" && lu(au)) {
      var r = [];
      Uv(r, au, n, Kt(n)), wa(ou, r);
    }
  }
  function Hy(n, r, o) {
    n === "focusin" ? (jv(), ds = r, au = o, ds.attachEvent("onpropertychange", Fv)) : n === "focusout" && jv();
  }
  function jy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return lu(au);
  }
  function Fy(n, r) {
    if (n === "click") return lu(r);
  }
  function Vv(n, r) {
    if (n === "input" || n === "change") return lu(r);
  }
  function Vy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ii = typeof Object.is == "function" ? Object.is : Vy;
  function ps(n, r) {
    if (Ii(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length) return !1;
    for (s = 0; s < o.length; s++) {
      var p = o[s];
      if (!x.call(r, p) || !Ii(n[p], r[p])) return !1;
    }
    return !0;
  }
  function Iv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Bv(n, r) {
    var o = Iv(n);
    n = 0;
    for (var s; o; ) {
      if (o.nodeType === 3) {
        if (s = n + o.textContent.length, n <= r && s >= r) return { node: o, offset: r - n };
        n = s;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Iv(o);
    }
  }
  function Wv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Wv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Cc() {
    for (var n = window, r = dn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = dn(n.document);
    }
    return r;
  }
  function Qa(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function wc(n) {
    var r = Cc(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Wv(o.ownerDocument.documentElement, o)) {
      if (s !== null && Qa(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, h = Math.min(s.start, p);
          s = s.end === void 0 ? h : Math.min(s.end, p), !n.extend && h > s && (p = s, s = h, h = p), p = Bv(o, h);
          var C = Bv(
            o,
            s
          );
          p && C && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), h > s ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Yv = _ && "documentMode" in document && 11 >= document.documentMode, ha = null, Rd = null, vs = null, xd = !1;
  function Gv(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    xd || ha == null || ha !== dn(s) || (s = ha, "selectionStart" in s && Qa(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), vs && ps(vs, s) || (vs = s, s = bs(Rd, "onSelect"), 0 < s.length && (r = new Dt("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = ha)));
  }
  function Tc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var ol = { animationend: Tc("Animation", "AnimationEnd"), animationiteration: Tc("Animation", "AnimationIteration"), animationstart: Tc("Animation", "AnimationStart"), transitionend: Tc("Transition", "TransitionEnd") }, kd = {}, _d = {};
  _ && (_d = document.createElement("div").style, "AnimationEvent" in window || (delete ol.animationend.animation, delete ol.animationiteration.animation, delete ol.animationstart.animation), "TransitionEvent" in window || delete ol.transitionend.transition);
  function ur(n) {
    if (kd[n]) return kd[n];
    if (!ol[n]) return n;
    var r = ol[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in _d) return kd[n] = r[o];
    return n;
  }
  var Dd = ur("animationend"), Qv = ur("animationiteration"), qv = ur("animationstart"), Kv = ur("transitionend"), Xv = /* @__PURE__ */ new Map(), Zv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function qa(n, r) {
    Xv.set(n, r), T(r, [n]);
  }
  for (var hs = 0; hs < Zv.length; hs++) {
    var ll = Zv[hs], Iy = ll.toLowerCase(), ms = ll[0].toUpperCase() + ll.slice(1);
    qa(Iy, "on" + ms);
  }
  qa(Dd, "onAnimationEnd"), qa(Qv, "onAnimationIteration"), qa(qv, "onAnimationStart"), qa("dblclick", "onDoubleClick"), qa("focusin", "onFocus"), qa("focusout", "onBlur"), qa(Kv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), T("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), T("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), T("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ys = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), By = new Set("cancel close invalid load scroll toggle".split(" ").concat(ys));
  function Jv(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, le(s, r, void 0, n), n.currentTarget = null;
  }
  function Rc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], p = s.event;
      s = s.listeners;
      e: {
        var h = void 0;
        if (r) for (var C = s.length - 1; 0 <= C; C--) {
          var k = s[C], M = k.instance, G = k.currentTarget;
          if (k = k.listener, M !== h && p.isPropagationStopped()) break e;
          Jv(p, k, G), h = M;
        }
        else for (C = 0; C < s.length; C++) {
          if (k = s[C], M = k.instance, G = k.currentTarget, k = k.listener, M !== h && p.isPropagationStopped()) break e;
          Jv(p, k, G), h = M;
        }
      }
    }
    if (Hi) throw n = xi, Hi = !1, xi = null, n;
  }
  function sn(n, r) {
    var o = r[zd];
    o === void 0 && (o = r[zd] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (eh(r, n, 2, !1), o.add(s));
  }
  function Lo(n, r, o) {
    var s = 0;
    r && (s |= 4), eh(o, n, s, r);
  }
  var Ka = "_reactListening" + Math.random().toString(36).slice(2);
  function uu(n) {
    if (!n[Ka]) {
      n[Ka] = !0, y.forEach(function(o) {
        o !== "selectionchange" && (By.has(o) || Lo(o, !1, n), Lo(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ka] || (r[Ka] = !0, Lo("selectionchange", !1, r));
    }
  }
  function eh(n, r, o, s) {
    switch (us(r)) {
      case 1:
        var p = eu;
        break;
      case 4:
        p = Do;
        break;
      default:
        p = Oo;
    }
    o = p.bind(null, r, o, n), p = void 0, !Ar || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), s ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function xc(n, r, o, s, p) {
    var h = s;
    if (!(r & 1) && !(r & 2) && s !== null) e: for (; ; ) {
      if (s === null) return;
      var C = s.tag;
      if (C === 3 || C === 4) {
        var k = s.stateNode.containerInfo;
        if (k === p || k.nodeType === 8 && k.parentNode === p) break;
        if (C === 4) for (C = s.return; C !== null; ) {
          var M = C.tag;
          if ((M === 3 || M === 4) && (M = C.stateNode.containerInfo, M === p || M.nodeType === 8 && M.parentNode === p)) return;
          C = C.return;
        }
        for (; k !== null; ) {
          if (C = Bi(k), C === null) return;
          if (M = C.tag, M === 5 || M === 6) {
            s = h = C;
            continue e;
          }
          k = k.parentNode;
        }
      }
      s = s.return;
    }
    wa(function() {
      var G = h, ie = Kt(o), ae = [];
      e: {
        var re = Xv.get(n);
        if (re !== void 0) {
          var Re = Dt, Me = n;
          switch (n) {
            case "keypress":
              if (X(o) === 0) break e;
            case "keydown":
            case "keyup":
              Re = Ny;
              break;
            case "focusin":
              Me = "focus", Re = pa;
              break;
            case "focusout":
              Me = "blur", Re = pa;
              break;
            case "beforeblur":
            case "afterblur":
              Re = pa;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Re = Wa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Re = ss;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Re = zy;
              break;
            case Dd:
            case Qv:
            case qv:
              Re = fs;
              break;
            case Kv:
              Re = Lv;
              break;
            case "scroll":
              Re = ln;
              break;
            case "wheel":
              Re = Ga;
              break;
            case "copy":
            case "cut":
            case "paste":
              Re = Ay;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Re = gc;
          }
          var ze = (r & 4) !== 0, Fn = !ze && n === "scroll", H = ze ? re !== null ? re + "Capture" : null : re;
          ze = [];
          for (var z = G, I; z !== null; ) {
            I = z;
            var pe = I.stateNode;
            if (I.tag === 5 && pe !== null && (I = pe, H !== null && (pe = Mr(z, H), pe != null && ze.push(gs(z, pe, I)))), Fn) break;
            z = z.return;
          }
          0 < ze.length && (re = new Re(re, Me, null, o, ie), ae.push({ event: re, listeners: ze }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (re = n === "mouseover" || n === "pointerover", Re = n === "mouseout" || n === "pointerout", re && o !== or && (Me = o.relatedTarget || o.fromElement) && (Bi(Me) || Me[Xa])) break e;
          if ((Re || re) && (re = ie.window === ie ? ie : (re = ie.ownerDocument) ? re.defaultView || re.parentWindow : window, Re ? (Me = o.relatedTarget || o.toElement, Re = G, Me = Me ? Bi(Me) : null, Me !== null && (Fn = He(Me), Me !== Fn || Me.tag !== 5 && Me.tag !== 6) && (Me = null)) : (Re = null, Me = G), Re !== Me)) {
            if (ze = Wa, pe = "onMouseLeave", H = "onMouseEnter", z = "mouse", (n === "pointerout" || n === "pointerover") && (ze = gc, pe = "onPointerLeave", H = "onPointerEnter", z = "pointer"), Fn = Re == null ? re : su(Re), I = Me == null ? re : su(Me), re = new ze(pe, z + "leave", Re, o, ie), re.target = Fn, re.relatedTarget = I, pe = null, Bi(ie) === G && (ze = new ze(H, z + "enter", Me, o, ie), ze.target = I, ze.relatedTarget = Fn, pe = ze), Fn = pe, Re && Me) t: {
              for (ze = Re, H = Me, z = 0, I = ze; I; I = ul(I)) z++;
              for (I = 0, pe = H; pe; pe = ul(pe)) I++;
              for (; 0 < z - I; ) ze = ul(ze), z--;
              for (; 0 < I - z; ) H = ul(H), I--;
              for (; z--; ) {
                if (ze === H || H !== null && ze === H.alternate) break t;
                ze = ul(ze), H = ul(H);
              }
              ze = null;
            }
            else ze = null;
            Re !== null && Od(ae, re, Re, ze, !1), Me !== null && Fn !== null && Od(ae, Fn, Me, ze, !0);
          }
        }
        e: {
          if (re = G ? su(G) : window, Re = re.nodeName && re.nodeName.toLowerCase(), Re === "select" || Re === "input" && re.type === "file") var Ve = Pv;
          else if (zv(re)) if (Cd) Ve = Vv;
          else {
            Ve = jy;
            var tt = Hy;
          }
          else (Re = re.nodeName) && Re.toLowerCase() === "input" && (re.type === "checkbox" || re.type === "radio") && (Ve = Fy);
          if (Ve && (Ve = Ve(n, G))) {
            Uv(ae, Ve, o, ie);
            break e;
          }
          tt && tt(n, re, G), n === "focusout" && (tt = re._wrapperState) && tt.controlled && re.type === "number" && Dr(re, "number", re.value);
        }
        switch (tt = G ? su(G) : window, n) {
          case "focusin":
            (zv(tt) || tt.contentEditable === "true") && (ha = tt, Rd = G, vs = null);
            break;
          case "focusout":
            vs = Rd = ha = null;
            break;
          case "mousedown":
            xd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xd = !1, Gv(ae, o, ie);
            break;
          case "selectionchange":
            if (Yv) break;
          case "keydown":
          case "keyup":
            Gv(ae, o, ie);
        }
        var Ae;
        if (va) e: {
          switch (n) {
            case "compositionstart":
              var it = "onCompositionStart";
              break e;
            case "compositionend":
              it = "onCompositionEnd";
              break e;
            case "compositionupdate":
              it = "onCompositionUpdate";
              break e;
          }
          it = void 0;
        }
        else iu ? $v(n, o) && (it = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (it = "onCompositionStart");
        it && (Mv && o.locale !== "ko" && (iu || it !== "onCompositionStart" ? it === "onCompositionEnd" && iu && (Ae = Y()) : (da = ie, E = "value" in da ? da.value : da.textContent, iu = !0)), tt = bs(G, it), 0 < tt.length && (it = new yd(it, n, null, o, ie), ae.push({ event: it, listeners: tt }), Ae ? it.data = Ae : (Ae = Ec(o), Ae !== null && (it.data = Ae)))), (Ae = Sc ? Uy(n, o) : Py(n, o)) && (G = bs(G, "onBeforeInput"), 0 < G.length && (ie = new yd("onBeforeInput", "beforeinput", null, o, ie), ae.push({ event: ie, listeners: G }), ie.data = Ae));
      }
      Rc(ae, r);
    });
  }
  function gs(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function bs(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var p = n, h = p.stateNode;
      p.tag === 5 && h !== null && (p = h, h = Mr(n, o), h != null && s.unshift(gs(n, h, p)), h = Mr(n, r), h != null && s.push(gs(n, h, p))), n = n.return;
    }
    return s;
  }
  function ul(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Od(n, r, o, s, p) {
    for (var h = r._reactName, C = []; o !== null && o !== s; ) {
      var k = o, M = k.alternate, G = k.stateNode;
      if (M !== null && M === s) break;
      k.tag === 5 && G !== null && (k = G, p ? (M = Mr(o, h), M != null && C.unshift(gs(o, M, k))) : p || (M = Mr(o, h), M != null && C.push(gs(o, M, k)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Ld = /\r\n?/g, Wy = /\u0000|\uFFFD/g;
  function Md(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ld, `
`).replace(Wy, "");
  }
  function kc(n, r, o) {
    if (r = Md(r), Md(n) !== r && o) throw Error(d(425));
  }
  function _c() {
  }
  var Ad = null, sl = null;
  function Ss(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var cl = typeof setTimeout == "function" ? setTimeout : void 0, th = typeof clearTimeout == "function" ? clearTimeout : void 0, $d = typeof Promise == "function" ? Promise : void 0, Nd = typeof queueMicrotask == "function" ? queueMicrotask : typeof $d < "u" ? function(n) {
    return $d.resolve(null).then(n).catch(Yy);
  } : cl;
  function Yy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Mo(n, r) {
    var o = r, s = 0;
    do {
      var p = o.nextSibling;
      if (n.removeChild(o), p && p.nodeType === 8) if (o = p.data, o === "/$") {
        if (s === 0) {
          n.removeChild(p), _o(r);
          return;
        }
        s--;
      } else o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = p;
    } while (o);
    _o(r);
  }
  function ma(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Es(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ao = Math.random().toString(36).slice(2), xa = "__reactFiber$" + Ao, fl = "__reactProps$" + Ao, Xa = "__reactContainer$" + Ao, zd = "__reactEvents$" + Ao, Gy = "__reactListeners$" + Ao, Ud = "__reactHandles$" + Ao;
  function Bi(n) {
    var r = n[xa];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Xa] || o[xa]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Es(n); n !== null; ) {
          if (o = n[xa]) return o;
          n = Es(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Cs(n) {
    return n = n[xa] || n[Xa], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function su(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(d(33));
  }
  function Ke(n) {
    return n[fl] || null;
  }
  var $o = [], hn = -1;
  function Et(n) {
    return { current: n };
  }
  function Xt(n) {
    0 > hn || (n.current = $o[hn], $o[hn] = null, hn--);
  }
  function Jt(n, r) {
    hn++, $o[hn] = n.current, n.current = r;
  }
  var ka = {}, ft = Et(ka), Mn = Et(!1), si = ka;
  function Wi(n, r) {
    var o = n.type.contextTypes;
    if (!o) return ka;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r) return s.__reactInternalMemoizedMaskedChildContext;
    var p = {}, h;
    for (h in o) p[h] = r[h];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function Sn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Yi() {
    Xt(Mn), Xt(ft);
  }
  function No(n, r, o) {
    if (ft.current !== ka) throw Error(d(168));
    Jt(ft, r), Jt(Mn, o);
  }
  function ws(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function") return o;
    s = s.getChildContext();
    for (var p in s) if (!(p in r)) throw Error(d(108, St(n) || "Unknown", p));
    return oe({}, o, s);
  }
  function Dc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ka, si = ft.current, Jt(ft, n), Jt(Mn, Mn.current), !0;
  }
  function nh(n, r, o) {
    var s = n.stateNode;
    if (!s) throw Error(d(169));
    o ? (n = ws(n, r, si), s.__reactInternalMemoizedMergedChildContext = n, Xt(Mn), Xt(ft), Jt(ft, n)) : Xt(Mn), Jt(Mn, o);
  }
  var ki = null, sr = !1, Ts = !1;
  function Pd(n) {
    ki === null ? ki = [n] : ki.push(n);
  }
  function Hd(n) {
    sr = !0, Pd(n);
  }
  function ci() {
    if (!Ts && ki !== null) {
      Ts = !0;
      var n = 0, r = Yt;
      try {
        var o = ki;
        for (Yt = 1; n < o.length; n++) {
          var s = o[n];
          do
            s = s(!0);
          while (s !== null);
        }
        ki = null, sr = !1;
      } catch (p) {
        throw ki !== null && (ki = ki.slice(n + 1)), V(Rn, ci), p;
      } finally {
        Yt = r, Ts = !1;
      }
    }
    return null;
  }
  var zo = [], fi = 0, dl = null, cu = 0, di = [], Nr = 0, Gi = null, yr = 1, Za = "";
  function _i(n, r) {
    zo[fi++] = cu, zo[fi++] = dl, dl = n, cu = r;
  }
  function jd(n, r, o) {
    di[Nr++] = yr, di[Nr++] = Za, di[Nr++] = Gi, Gi = n;
    var s = yr;
    n = Za;
    var p = 32 - Ir(s) - 1;
    s &= ~(1 << p), o += 1;
    var h = 32 - Ir(r) + p;
    if (30 < h) {
      var C = p - p % 5;
      h = (s & (1 << C) - 1).toString(32), s >>= C, p -= C, yr = 1 << 32 - Ir(r) + p | o << p | s, Za = h + n;
    } else yr = 1 << h | o << p | s, Za = n;
  }
  function Oc(n) {
    n.return !== null && (_i(n, 1), jd(n, 1, 0));
  }
  function Fd(n) {
    for (; n === dl; ) dl = zo[--fi], zo[fi] = null, cu = zo[--fi], zo[fi] = null;
    for (; n === Gi; ) Gi = di[--Nr], di[Nr] = null, Za = di[--Nr], di[Nr] = null, yr = di[--Nr], di[Nr] = null;
  }
  var Di = null, pi = null, mn = !1, Qi = null;
  function Vd(n, r) {
    var o = na(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function rh(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Di = n, pi = ma(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Di = n, pi = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Gi !== null ? { id: yr, overflow: Za } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = na(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Di = n, pi = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Lc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Mc(n) {
    if (mn) {
      var r = pi;
      if (r) {
        var o = r;
        if (!rh(n, r)) {
          if (Lc(n)) throw Error(d(418));
          r = ma(o.nextSibling);
          var s = Di;
          r && rh(n, r) ? Vd(s, o) : (n.flags = n.flags & -4097 | 2, mn = !1, Di = n);
        }
      } else {
        if (Lc(n)) throw Error(d(418));
        n.flags = n.flags & -4097 | 2, mn = !1, Di = n;
      }
    }
  }
  function ih(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Di = n;
  }
  function Ac(n) {
    if (n !== Di) return !1;
    if (!mn) return ih(n), mn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ss(n.type, n.memoizedProps)), r && (r = pi)) {
      if (Lc(n)) throw ah(), Error(d(418));
      for (; r; ) Vd(n, r), r = ma(r.nextSibling);
    }
    if (ih(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                pi = ma(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        pi = null;
      }
    } else pi = Di ? ma(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ah() {
    for (var n = pi; n; ) n = ma(n.nextSibling);
  }
  function kn() {
    pi = Di = null, mn = !1;
  }
  function Id(n) {
    Qi === null ? Qi = [n] : Qi.push(n);
  }
  var $c = ut.ReactCurrentBatchConfig;
  function pl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(d(309));
          var s = o.stateNode;
        }
        if (!s) throw Error(d(147, n));
        var p = s, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(C) {
          var k = p.refs;
          C === null ? delete k[h] : k[h] = C;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string") throw Error(d(284));
      if (!o._owner) throw Error(d(290, n));
    }
    return n;
  }
  function _a(n, r) {
    throw n = Object.prototype.toString.call(r), Error(d(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function oh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Nc(n) {
    function r(H, z) {
      if (n) {
        var I = H.deletions;
        I === null ? (H.deletions = [z], H.flags |= 16) : I.push(z);
      }
    }
    function o(H, z) {
      if (!n) return null;
      for (; z !== null; ) r(H, z), z = z.sibling;
      return null;
    }
    function s(H, z) {
      for (H = /* @__PURE__ */ new Map(); z !== null; ) z.key !== null ? H.set(z.key, z) : H.set(z.index, z), z = z.sibling;
      return H;
    }
    function p(H, z) {
      return H = Bo(H, z), H.index = 0, H.sibling = null, H;
    }
    function h(H, z, I) {
      return H.index = I, n ? (I = H.alternate, I !== null ? (I = I.index, I < z ? (H.flags |= 2, z) : I) : (H.flags |= 2, z)) : (H.flags |= 1048576, z);
    }
    function C(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function k(H, z, I, pe) {
      return z === null || z.tag !== 6 ? (z = wf(I, H.mode, pe), z.return = H, z) : (z = p(z, I), z.return = H, z);
    }
    function M(H, z, I, pe) {
      var Ve = I.type;
      return Ve === ge ? ie(H, z, I.props.children, pe, I.key) : z !== null && (z.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === rt && oh(Ve) === z.type) ? (pe = p(z, I.props), pe.ref = pl(H, z, I), pe.return = H, pe) : (pe = Ef(I.type, I.key, I.props, null, H.mode, pe), pe.ref = pl(H, z, I), pe.return = H, pe);
    }
    function G(H, z, I, pe) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== I.containerInfo || z.stateNode.implementation !== I.implementation ? (z = Vs(I, H.mode, pe), z.return = H, z) : (z = p(z, I.children || []), z.return = H, z);
    }
    function ie(H, z, I, pe, Ve) {
      return z === null || z.tag !== 7 ? (z = _l(I, H.mode, pe, Ve), z.return = H, z) : (z = p(z, I), z.return = H, z);
    }
    function ae(H, z, I) {
      if (typeof z == "string" && z !== "" || typeof z == "number") return z = wf("" + z, H.mode, I), z.return = H, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Oe:
            return I = Ef(z.type, z.key, z.props, null, H.mode, I), I.ref = pl(H, null, z), I.return = H, I;
          case st:
            return z = Vs(z, H.mode, I), z.return = H, z;
          case rt:
            var pe = z._init;
            return ae(H, pe(z._payload), I);
        }
        if (In(z) || Le(z)) return z = _l(z, H.mode, I, null), z.return = H, z;
        _a(H, z);
      }
      return null;
    }
    function re(H, z, I, pe) {
      var Ve = z !== null ? z.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return Ve !== null ? null : k(H, z, "" + I, pe);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Oe:
            return I.key === Ve ? M(H, z, I, pe) : null;
          case st:
            return I.key === Ve ? G(H, z, I, pe) : null;
          case rt:
            return Ve = I._init, re(
              H,
              z,
              Ve(I._payload),
              pe
            );
        }
        if (In(I) || Le(I)) return Ve !== null ? null : ie(H, z, I, pe, null);
        _a(H, I);
      }
      return null;
    }
    function Re(H, z, I, pe, Ve) {
      if (typeof pe == "string" && pe !== "" || typeof pe == "number") return H = H.get(I) || null, k(z, H, "" + pe, Ve);
      if (typeof pe == "object" && pe !== null) {
        switch (pe.$$typeof) {
          case Oe:
            return H = H.get(pe.key === null ? I : pe.key) || null, M(z, H, pe, Ve);
          case st:
            return H = H.get(pe.key === null ? I : pe.key) || null, G(z, H, pe, Ve);
          case rt:
            var tt = pe._init;
            return Re(H, z, I, tt(pe._payload), Ve);
        }
        if (In(pe) || Le(pe)) return H = H.get(I) || null, ie(z, H, pe, Ve, null);
        _a(z, pe);
      }
      return null;
    }
    function Me(H, z, I, pe) {
      for (var Ve = null, tt = null, Ae = z, it = z = 0, er = null; Ae !== null && it < I.length; it++) {
        Ae.index > it ? (er = Ae, Ae = null) : er = Ae.sibling;
        var Gt = re(H, Ae, I[it], pe);
        if (Gt === null) {
          Ae === null && (Ae = er);
          break;
        }
        n && Ae && Gt.alternate === null && r(H, Ae), z = h(Gt, z, it), tt === null ? Ve = Gt : tt.sibling = Gt, tt = Gt, Ae = er;
      }
      if (it === I.length) return o(H, Ae), mn && _i(H, it), Ve;
      if (Ae === null) {
        for (; it < I.length; it++) Ae = ae(H, I[it], pe), Ae !== null && (z = h(Ae, z, it), tt === null ? Ve = Ae : tt.sibling = Ae, tt = Ae);
        return mn && _i(H, it), Ve;
      }
      for (Ae = s(H, Ae); it < I.length; it++) er = Re(Ae, H, it, I[it], pe), er !== null && (n && er.alternate !== null && Ae.delete(er.key === null ? it : er.key), z = h(er, z, it), tt === null ? Ve = er : tt.sibling = er, tt = er);
      return n && Ae.forEach(function(ao) {
        return r(H, ao);
      }), mn && _i(H, it), Ve;
    }
    function ze(H, z, I, pe) {
      var Ve = Le(I);
      if (typeof Ve != "function") throw Error(d(150));
      if (I = Ve.call(I), I == null) throw Error(d(151));
      for (var tt = Ve = null, Ae = z, it = z = 0, er = null, Gt = I.next(); Ae !== null && !Gt.done; it++, Gt = I.next()) {
        Ae.index > it ? (er = Ae, Ae = null) : er = Ae.sibling;
        var ao = re(H, Ae, Gt.value, pe);
        if (ao === null) {
          Ae === null && (Ae = er);
          break;
        }
        n && Ae && ao.alternate === null && r(H, Ae), z = h(ao, z, it), tt === null ? Ve = ao : tt.sibling = ao, tt = ao, Ae = er;
      }
      if (Gt.done) return o(
        H,
        Ae
      ), mn && _i(H, it), Ve;
      if (Ae === null) {
        for (; !Gt.done; it++, Gt = I.next()) Gt = ae(H, Gt.value, pe), Gt !== null && (z = h(Gt, z, it), tt === null ? Ve = Gt : tt.sibling = Gt, tt = Gt);
        return mn && _i(H, it), Ve;
      }
      for (Ae = s(H, Ae); !Gt.done; it++, Gt = I.next()) Gt = Re(Ae, H, it, Gt.value, pe), Gt !== null && (n && Gt.alternate !== null && Ae.delete(Gt.key === null ? it : Gt.key), z = h(Gt, z, it), tt === null ? Ve = Gt : tt.sibling = Gt, tt = Gt);
      return n && Ae.forEach(function(fg) {
        return r(H, fg);
      }), mn && _i(H, it), Ve;
    }
    function Fn(H, z, I, pe) {
      if (typeof I == "object" && I !== null && I.type === ge && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Oe:
            e: {
              for (var Ve = I.key, tt = z; tt !== null; ) {
                if (tt.key === Ve) {
                  if (Ve = I.type, Ve === ge) {
                    if (tt.tag === 7) {
                      o(H, tt.sibling), z = p(tt, I.props.children), z.return = H, H = z;
                      break e;
                    }
                  } else if (tt.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === rt && oh(Ve) === tt.type) {
                    o(H, tt.sibling), z = p(tt, I.props), z.ref = pl(H, tt, I), z.return = H, H = z;
                    break e;
                  }
                  o(H, tt);
                  break;
                } else r(H, tt);
                tt = tt.sibling;
              }
              I.type === ge ? (z = _l(I.props.children, H.mode, pe, I.key), z.return = H, H = z) : (pe = Ef(I.type, I.key, I.props, null, H.mode, pe), pe.ref = pl(H, z, I), pe.return = H, H = pe);
            }
            return C(H);
          case st:
            e: {
              for (tt = I.key; z !== null; ) {
                if (z.key === tt) if (z.tag === 4 && z.stateNode.containerInfo === I.containerInfo && z.stateNode.implementation === I.implementation) {
                  o(H, z.sibling), z = p(z, I.children || []), z.return = H, H = z;
                  break e;
                } else {
                  o(H, z);
                  break;
                }
                else r(H, z);
                z = z.sibling;
              }
              z = Vs(I, H.mode, pe), z.return = H, H = z;
            }
            return C(H);
          case rt:
            return tt = I._init, Fn(H, z, tt(I._payload), pe);
        }
        if (In(I)) return Me(H, z, I, pe);
        if (Le(I)) return ze(H, z, I, pe);
        _a(H, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, z !== null && z.tag === 6 ? (o(H, z.sibling), z = p(z, I), z.return = H, H = z) : (o(H, z), z = wf(I, H.mode, pe), z.return = H, H = z), C(H)) : o(H, z);
    }
    return Fn;
  }
  var fu = Nc(!0), lh = Nc(!1), Ja = Et(null), Kn = null, he = null, qi = null;
  function Oi() {
    qi = he = Kn = null;
  }
  function Bd(n) {
    var r = Ja.current;
    Xt(Ja), n._currentValue = r;
  }
  function Wd(n, r, o) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, s !== null && (s.childLanes |= r)) : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function du(n, r) {
    Kn = n, qi = he = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (mi = !0), n.firstContext = null);
  }
  function Ki(n) {
    var r = n._currentValue;
    if (qi !== n) if (n = { context: n, memoizedValue: r, next: null }, he === null) {
      if (Kn === null) throw Error(d(308));
      he = n, Kn.dependencies = { lanes: 0, firstContext: n };
    } else he = he.next = n;
    return r;
  }
  var vl = null;
  function Wn(n) {
    vl === null ? vl = [n] : vl.push(n);
  }
  function uh(n, r, o, s) {
    var p = r.interleaved;
    return p === null ? (o.next = o, Wn(r)) : (o.next = p.next, p.next = o), r.interleaved = o, eo(n, s);
  }
  function eo(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Uo = !1;
  function zc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function pu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function vi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Po(n, r, o) {
    var s = n.updateQueue;
    if (s === null) return null;
    if (s = s.shared, Mt & 2) {
      var p = s.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), s.pending = r, eo(n, o);
    }
    return p = s.interleaved, p === null ? (r.next = r, Wn(s)) : (r.next = p.next, p.next = r), s.interleaved = r, eo(n, o);
  }
  function Uc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Ta(n, o);
    }
  }
  function sh(n, r) {
    var o = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var p = null, h = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var C = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          h === null ? p = h = C : h = h.next = C, o = o.next;
        } while (o !== null);
        h === null ? p = h = r : h = h.next = r;
      } else p = h = r;
      o = { baseState: s.baseState, firstBaseUpdate: p, lastBaseUpdate: h, shared: s.shared, effects: s.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Pc(n, r, o, s) {
    var p = n.updateQueue;
    Uo = !1;
    var h = p.firstBaseUpdate, C = p.lastBaseUpdate, k = p.shared.pending;
    if (k !== null) {
      p.shared.pending = null;
      var M = k, G = M.next;
      M.next = null, C === null ? h = G : C.next = G, C = M;
      var ie = n.alternate;
      ie !== null && (ie = ie.updateQueue, k = ie.lastBaseUpdate, k !== C && (k === null ? ie.firstBaseUpdate = G : k.next = G, ie.lastBaseUpdate = M));
    }
    if (h !== null) {
      var ae = p.baseState;
      C = 0, ie = G = M = null, k = h;
      do {
        var re = k.lane, Re = k.eventTime;
        if ((s & re) === re) {
          ie !== null && (ie = ie.next = {
            eventTime: Re,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var Me = n, ze = k;
            switch (re = r, Re = o, ze.tag) {
              case 1:
                if (Me = ze.payload, typeof Me == "function") {
                  ae = Me.call(Re, ae, re);
                  break e;
                }
                ae = Me;
                break e;
              case 3:
                Me.flags = Me.flags & -65537 | 128;
              case 0:
                if (Me = ze.payload, re = typeof Me == "function" ? Me.call(Re, ae, re) : Me, re == null) break e;
                ae = oe({}, ae, re);
                break e;
              case 2:
                Uo = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (n.flags |= 64, re = p.effects, re === null ? p.effects = [k] : re.push(k));
        } else Re = { eventTime: Re, lane: re, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, ie === null ? (G = ie = Re, M = ae) : ie = ie.next = Re, C |= re;
        if (k = k.next, k === null) {
          if (k = p.shared.pending, k === null) break;
          re = k, k = re.next, re.next = null, p.lastBaseUpdate = re, p.shared.pending = null;
        }
      } while (!0);
      if (ie === null && (M = ae), p.baseState = M, p.firstBaseUpdate = G, p.lastBaseUpdate = ie, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          C |= p.lane, p = p.next;
        while (p !== r);
      } else h === null && (p.shared.lanes = 0);
      Tl |= C, n.lanes = C, n.memoizedState = ae;
    }
  }
  function ch(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var s = n[r], p = s.callback;
      if (p !== null) {
        if (s.callback = null, s = o, typeof p != "function") throw Error(d(191, p));
        p.call(s);
      }
    }
  }
  var Rs = {}, ya = Et(Rs), vu = Et(Rs), xs = Et(Rs);
  function hl(n) {
    if (n === Rs) throw Error(d(174));
    return n;
  }
  function Yd(n, r) {
    switch (Jt(xs, r), Jt(vu, n), Jt(ya, Rs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : pn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = pn(r, n);
    }
    Xt(ya), Jt(ya, r);
  }
  function hu() {
    Xt(ya), Xt(vu), Xt(xs);
  }
  function fh(n) {
    hl(xs.current);
    var r = hl(ya.current), o = pn(r, n.type);
    r !== o && (Jt(vu, n), Jt(ya, o));
  }
  function Gd(n) {
    vu.current === n && (Xt(ya), Xt(vu));
  }
  var En = Et(0);
  function Hc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var jc = [];
  function Qd() {
    for (var n = 0; n < jc.length; n++) jc[n]._workInProgressVersionPrimary = null;
    jc.length = 0;
  }
  var Fc = ut.ReactCurrentDispatcher, ks = ut.ReactCurrentBatchConfig, Fe = 0, Ie = null, dt = null, Ot = null, Li = !1, mu = !1, _s = 0, Qy = 0;
  function zr() {
    throw Error(d(321));
  }
  function Ds(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!Ii(n[o], r[o])) return !1;
    return !0;
  }
  function te(n, r, o, s, p, h) {
    if (Fe = h, Ie = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Fc.current = n === null || n.memoizedState === null ? qy : fn, n = o(s, p), mu) {
      h = 0;
      do {
        if (mu = !1, _s = 0, 25 <= h) throw Error(d(301));
        h += 1, Ot = dt = null, r.updateQueue = null, Fc.current = nf, n = o(s, p);
      } while (mu);
    }
    if (Fc.current = Ur, r = dt !== null && dt.next !== null, Fe = 0, Ot = dt = Ie = null, Li = !1, r) throw Error(d(300));
    return n;
  }
  function Yn() {
    var n = _s !== 0;
    return _s = 0, n;
  }
  function Ye() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ot === null ? Ie.memoizedState = Ot = n : Ot = Ot.next = n, Ot;
  }
  function gr() {
    if (dt === null) {
      var n = Ie.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = dt.next;
    var r = Ot === null ? Ie.memoizedState : Ot.next;
    if (r !== null) Ot = r, dt = n;
    else {
      if (n === null) throw Error(d(310));
      dt = n, n = { memoizedState: dt.memoizedState, baseState: dt.baseState, baseQueue: dt.baseQueue, queue: dt.queue, next: null }, Ot === null ? Ie.memoizedState = Ot = n : Ot = Ot.next = n;
    }
    return Ot;
  }
  function Mi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function to(n) {
    var r = gr(), o = r.queue;
    if (o === null) throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = dt, p = s.baseQueue, h = o.pending;
    if (h !== null) {
      if (p !== null) {
        var C = p.next;
        p.next = h.next, h.next = C;
      }
      s.baseQueue = p = h, o.pending = null;
    }
    if (p !== null) {
      h = p.next, s = s.baseState;
      var k = C = null, M = null, G = h;
      do {
        var ie = G.lane;
        if ((Fe & ie) === ie) M !== null && (M = M.next = { lane: 0, action: G.action, hasEagerState: G.hasEagerState, eagerState: G.eagerState, next: null }), s = G.hasEagerState ? G.eagerState : n(s, G.action);
        else {
          var ae = {
            lane: ie,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null
          };
          M === null ? (k = M = ae, C = s) : M = M.next = ae, Ie.lanes |= ie, Tl |= ie;
        }
        G = G.next;
      } while (G !== null && G !== h);
      M === null ? C = s : M.next = k, Ii(s, r.memoizedState) || (mi = !0), r.memoizedState = s, r.baseState = C, r.baseQueue = M, o.lastRenderedState = s;
    }
    if (n = o.interleaved, n !== null) {
      p = n;
      do
        h = p.lane, Ie.lanes |= h, Tl |= h, p = p.next;
      while (p !== n);
    } else p === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Xi(n) {
    var r = gr(), o = r.queue;
    if (o === null) throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, p = o.pending, h = r.memoizedState;
    if (p !== null) {
      o.pending = null;
      var C = p = p.next;
      do
        h = n(h, C.action), C = C.next;
      while (C !== p);
      Ii(h, r.memoizedState) || (mi = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), o.lastRenderedState = h;
    }
    return [h, s];
  }
  function yu() {
  }
  function ml(n, r) {
    var o = Ie, s = gr(), p = r(), h = !Ii(s.memoizedState, p);
    if (h && (s.memoizedState = p, mi = !0), s = s.queue, Os(Ic.bind(null, o, s, n), [n]), s.getSnapshot !== r || h || Ot !== null && Ot.memoizedState.tag & 1) {
      if (o.flags |= 2048, yl(9, Vc.bind(null, o, s, p, r), void 0, null), $n === null) throw Error(d(349));
      Fe & 30 || gu(o, r, p);
    }
    return p;
  }
  function gu(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Ie.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ie.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Vc(n, r, o, s) {
    r.value = o, r.getSnapshot = s, Bc(r) && Wc(n);
  }
  function Ic(n, r, o) {
    return o(function() {
      Bc(r) && Wc(n);
    });
  }
  function Bc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Ii(n, o);
    } catch {
      return !0;
    }
  }
  function Wc(n) {
    var r = eo(n, 1);
    r !== null && _n(r, n, 1, -1);
  }
  function Yc(n) {
    var r = Ye();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Mi, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ls.bind(null, Ie, n), [r.memoizedState, n];
  }
  function yl(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = Ie.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ie.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function Gc() {
    return gr().memoizedState;
  }
  function bu(n, r, o, s) {
    var p = Ye();
    Ie.flags |= n, p.memoizedState = yl(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function Su(n, r, o, s) {
    var p = gr();
    s = s === void 0 ? null : s;
    var h = void 0;
    if (dt !== null) {
      var C = dt.memoizedState;
      if (h = C.destroy, s !== null && Ds(s, C.deps)) {
        p.memoizedState = yl(r, o, h, s);
        return;
      }
    }
    Ie.flags |= n, p.memoizedState = yl(1 | r, o, h, s);
  }
  function Qc(n, r) {
    return bu(8390656, 8, n, r);
  }
  function Os(n, r) {
    return Su(2048, 8, n, r);
  }
  function qc(n, r) {
    return Su(4, 2, n, r);
  }
  function Kc(n, r) {
    return Su(4, 4, n, r);
  }
  function Xc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Zc(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Su(4, 4, Xc.bind(null, r, n), o);
  }
  function Eu() {
  }
  function gl(n, r) {
    var o = gr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Ds(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function Jc(n, r) {
    var o = gr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Ds(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function ef(n, r, o) {
    return Fe & 21 ? (Ii(o, r) || (o = Ql(), Ie.lanes |= o, Tl |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, mi = !0), n.memoizedState = o);
  }
  function qd(n, r) {
    var o = Yt;
    Yt = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = ks.transition;
    ks.transition = {};
    try {
      n(!1), r();
    } finally {
      Yt = o, ks.transition = s;
    }
  }
  function tf() {
    return gr().memoizedState;
  }
  function dh(n, r, o) {
    var s = io(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, Kd(n)) Cu(r, o);
    else if (o = uh(n, r, o, s), o !== null) {
      var p = dr();
      _n(o, n, s, p), Ho(o, r, s);
    }
  }
  function Ls(n, r, o) {
    var s = io(n), p = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Kd(n)) Cu(r, p);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null)) try {
        var C = r.lastRenderedState, k = h(C, o);
        if (p.hasEagerState = !0, p.eagerState = k, Ii(k, C)) {
          var M = r.interleaved;
          M === null ? (p.next = p, Wn(r)) : (p.next = M.next, M.next = p), r.interleaved = p;
          return;
        }
      } catch {
      } finally {
      }
      o = uh(n, r, p, s), o !== null && (p = dr(), _n(o, n, s, p), Ho(o, r, s));
    }
  }
  function Kd(n) {
    var r = n.alternate;
    return n === Ie || r !== null && r === Ie;
  }
  function Cu(n, r) {
    mu = Li = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Ho(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Ta(n, o);
    }
  }
  var Ur = { readContext: Ki, useCallback: zr, useContext: zr, useEffect: zr, useImperativeHandle: zr, useInsertionEffect: zr, useLayoutEffect: zr, useMemo: zr, useReducer: zr, useRef: zr, useState: zr, useDebugValue: zr, useDeferredValue: zr, useTransition: zr, useMutableSource: zr, useSyncExternalStore: zr, useId: zr, unstable_isNewReconciler: !1 }, qy = { readContext: Ki, useCallback: function(n, r) {
    return Ye().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ki, useEffect: Qc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, bu(
      4194308,
      4,
      Xc.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return bu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return bu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Ye();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = Ye();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = dh.bind(null, Ie, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = Ye();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Yc, useDebugValue: Eu, useDeferredValue: function(n) {
    return Ye().memoizedState = n;
  }, useTransition: function() {
    var n = Yc(!1), r = n[0];
    return n = qd.bind(null, n[1]), Ye().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = Ie, p = Ye();
    if (mn) {
      if (o === void 0) throw Error(d(407));
      o = o();
    } else {
      if (o = r(), $n === null) throw Error(d(349));
      Fe & 30 || gu(s, r, o);
    }
    p.memoizedState = o;
    var h = { value: o, getSnapshot: r };
    return p.queue = h, Qc(Ic.bind(
      null,
      s,
      h,
      n
    ), [n]), s.flags |= 2048, yl(9, Vc.bind(null, s, h, o, r), void 0, null), o;
  }, useId: function() {
    var n = Ye(), r = $n.identifierPrefix;
    if (mn) {
      var o = Za, s = yr;
      o = (s & ~(1 << 32 - Ir(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = _s++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = Qy++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, fn = {
    readContext: Ki,
    useCallback: gl,
    useContext: Ki,
    useEffect: Os,
    useImperativeHandle: Zc,
    useInsertionEffect: qc,
    useLayoutEffect: Kc,
    useMemo: Jc,
    useReducer: to,
    useRef: Gc,
    useState: function() {
      return to(Mi);
    },
    useDebugValue: Eu,
    useDeferredValue: function(n) {
      var r = gr();
      return ef(r, dt.memoizedState, n);
    },
    useTransition: function() {
      var n = to(Mi)[0], r = gr().memoizedState;
      return [n, r];
    },
    useMutableSource: yu,
    useSyncExternalStore: ml,
    useId: tf,
    unstable_isNewReconciler: !1
  }, nf = { readContext: Ki, useCallback: gl, useContext: Ki, useEffect: Os, useImperativeHandle: Zc, useInsertionEffect: qc, useLayoutEffect: Kc, useMemo: Jc, useReducer: Xi, useRef: Gc, useState: function() {
    return Xi(Mi);
  }, useDebugValue: Eu, useDeferredValue: function(n) {
    var r = gr();
    return dt === null ? r.memoizedState = n : ef(r, dt.memoizedState, n);
  }, useTransition: function() {
    var n = Xi(Mi)[0], r = gr().memoizedState;
    return [n, r];
  }, useMutableSource: yu, useSyncExternalStore: ml, useId: tf, unstable_isNewReconciler: !1 };
  function hi(n, r) {
    if (n && n.defaultProps) {
      r = oe({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function bl(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : oe({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Sl = { isMounted: function(n) {
    return (n = n._reactInternals) ? He(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var s = dr(), p = io(n), h = vi(s, p);
    h.payload = r, o != null && (h.callback = o), r = Po(n, h, p), r !== null && (_n(r, n, p, s), Uc(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = dr(), p = io(n), h = vi(s, p);
    h.tag = 1, h.payload = r, o != null && (h.callback = o), r = Po(n, h, p), r !== null && (_n(r, n, p, s), Uc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = dr(), s = io(n), p = vi(o, s);
    p.tag = 2, r != null && (p.callback = r), r = Po(n, p, s), r !== null && (_n(r, n, s, o), Uc(r, n, s));
  } };
  function ph(n, r, o, s, p, h, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, h, C) : r.prototype && r.prototype.isPureReactComponent ? !ps(o, s) || !ps(p, h) : !0;
  }
  function vh(n, r, o) {
    var s = !1, p = ka, h = r.contextType;
    return typeof h == "object" && h !== null ? h = Ki(h) : (p = Sn(r) ? si : ft.current, s = r.contextTypes, h = (s = s != null) ? Wi(n, p) : ka), r = new r(o, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Sl, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function hh(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && Sl.enqueueReplaceState(r, r.state, null);
  }
  function Xd(n, r, o, s) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = {}, zc(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? p.context = Ki(h) : (h = Sn(r) ? si : ft.current, p.context = Wi(n, h)), p.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (bl(n, r, h, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && Sl.enqueueReplaceState(p, p.state, null), Pc(n, o, p, s), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function jo(n, r) {
    try {
      var o = "", s = r;
      do
        o += Ge(s), s = s.return;
      while (s);
      var p = o;
    } catch (h) {
      p = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function Zd(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Ms(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var mh = typeof WeakMap == "function" ? WeakMap : Map;
  function yh(n, r, o) {
    o = vi(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      hf || (hf = !0, lp = s), Ms(n, r);
    }, o;
  }
  function gh(n, r, o) {
    o = vi(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var p = r.value;
      o.payload = function() {
        return s(p);
      }, o.callback = function() {
        Ms(n, r);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (o.callback = function() {
      Ms(n, r), typeof s != "function" && (ea === null ? ea = /* @__PURE__ */ new Set([this]) : ea.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function As(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new mh();
      var p = /* @__PURE__ */ new Set();
      s.set(r, p);
    } else p = s.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), s.set(r, p));
    p.has(o) || (p.add(o), n = ag.bind(null, n, r, o), r.then(n, n));
  }
  function bh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Jd(n, r, o, s, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = vi(-1, 1), r.tag = 2, Po(o, r, 1))), o.lanes |= 1), n);
  }
  var Sh = ut.ReactCurrentOwner, mi = !1;
  function Hn(n, r, o, s) {
    r.child = n === null ? lh(r, null, o, s) : fu(r, n.child, o, s);
  }
  function wu(n, r, o, s, p) {
    o = o.render;
    var h = r.ref;
    return du(r, p), s = te(n, r, o, s, h, p), o = Yn(), n !== null && !mi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, jn(n, r, p)) : (mn && o && Oc(r), r.flags |= 1, Hn(n, r, s, p), r.child);
  }
  function Fo(n, r, o, s, p) {
    if (n === null) {
      var h = o.type;
      return typeof h == "function" && !dp(h) && h.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = h, rf(n, r, h, s, p)) : (n = Ef(o.type, null, s, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & p)) {
      var C = h.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ps, o(C, s) && n.ref === r.ref) return jn(n, r, p);
    }
    return r.flags |= 1, n = Bo(h, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function rf(n, r, o, s, p) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (ps(h, s) && n.ref === r.ref) if (mi = !1, r.pendingProps = s = h, (n.lanes & p) !== 0) n.flags & 131072 && (mi = !0);
      else return r.lanes = n.lanes, jn(n, r, p);
    }
    return bt(n, r, o, s, p);
  }
  function yi(n, r, o) {
    var s = r.pendingProps, p = s.children, h = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Jt(Au, gi), gi |= o;
    else {
      if (!(o & 1073741824)) return n = h !== null ? h.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Jt(Au, gi), gi |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = h !== null ? h.baseLanes : o, Jt(Au, gi), gi |= s;
    }
    else h !== null ? (s = h.baseLanes | o, r.memoizedState = null) : s = o, Jt(Au, gi), gi |= s;
    return Hn(n, r, p, o), r.child;
  }
  function El(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function bt(n, r, o, s, p) {
    var h = Sn(o) ? si : ft.current;
    return h = Wi(r, h), du(r, p), o = te(n, r, o, s, h, p), s = Yn(), n !== null && !mi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, jn(n, r, p)) : (mn && s && Oc(r), r.flags |= 1, Hn(n, r, o, p), r.child);
  }
  function $s(n, r, o, s, p) {
    if (Sn(o)) {
      var h = !0;
      Dc(r);
    } else h = !1;
    if (du(r, p), r.stateNode === null) zs(n, r), vh(r, o, s), Xd(r, o, s, p), s = !0;
    else if (n === null) {
      var C = r.stateNode, k = r.memoizedProps;
      C.props = k;
      var M = C.context, G = o.contextType;
      typeof G == "object" && G !== null ? G = Ki(G) : (G = Sn(o) ? si : ft.current, G = Wi(r, G));
      var ie = o.getDerivedStateFromProps, ae = typeof ie == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      ae || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (k !== s || M !== G) && hh(r, C, s, G), Uo = !1;
      var re = r.memoizedState;
      C.state = re, Pc(r, s, C, p), M = r.memoizedState, k !== s || re !== M || Mn.current || Uo ? (typeof ie == "function" && (bl(r, o, ie, s), M = r.memoizedState), (k = Uo || ph(r, o, k, s, re, M, G)) ? (ae || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = M), C.props = s, C.state = M, C.context = G, s = k) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      C = r.stateNode, pu(n, r), k = r.memoizedProps, G = r.type === r.elementType ? k : hi(r.type, k), C.props = G, ae = r.pendingProps, re = C.context, M = o.contextType, typeof M == "object" && M !== null ? M = Ki(M) : (M = Sn(o) ? si : ft.current, M = Wi(r, M));
      var Re = o.getDerivedStateFromProps;
      (ie = typeof Re == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (k !== ae || re !== M) && hh(r, C, s, M), Uo = !1, re = r.memoizedState, C.state = re, Pc(r, s, C, p);
      var Me = r.memoizedState;
      k !== ae || re !== Me || Mn.current || Uo ? (typeof Re == "function" && (bl(r, o, Re, s), Me = r.memoizedState), (G = Uo || ph(r, o, G, s, re, Me, M) || !1) ? (ie || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(s, Me, M), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(s, Me, M)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || k === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = Me), C.props = s, C.state = Me, C.context = M, s = G) : (typeof C.componentDidUpdate != "function" || k === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return af(n, r, o, s, h, p);
  }
  function af(n, r, o, s, p, h) {
    El(n, r);
    var C = (r.flags & 128) !== 0;
    if (!s && !C) return p && nh(r, o, !1), jn(n, r, h);
    s = r.stateNode, Sh.current = r;
    var k = C && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && C ? (r.child = fu(r, n.child, null, h), r.child = fu(r, null, k, h)) : Hn(n, r, k, h), r.memoizedState = s.state, p && nh(r, o, !0), r.child;
  }
  function Ky(n) {
    var r = n.stateNode;
    r.pendingContext ? No(n, r.pendingContext, r.pendingContext !== r.context) : r.context && No(n, r.context, !1), Yd(n, r.containerInfo);
  }
  function Eh(n, r, o, s, p) {
    return kn(), Id(p), r.flags |= 256, Hn(n, r, o, s), r.child;
  }
  var Ns = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cl(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Ch(n, r, o) {
    var s = r.pendingProps, p = En.current, h = !1, C = (r.flags & 128) !== 0, k;
    if ((k = C) || (k = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), k ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), Jt(En, p & 1), n === null)
      return Mc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = s.children, n = s.fallback, h ? (s = r.mode, h = r.child, C = { mode: "hidden", children: C }, !(s & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = C) : h = Cf(C, s, 0, null), n = _l(n, s, o, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = Cl(o), r.memoizedState = Ns, n) : of(r, C));
    if (p = n.memoizedState, p !== null && (k = p.dehydrated, k !== null)) return ep(n, r, C, s, k, p, o);
    if (h) {
      h = s.fallback, C = r.mode, p = n.child, k = p.sibling;
      var M = { mode: "hidden", children: s.children };
      return !(C & 1) && r.child !== p ? (s = r.child, s.childLanes = 0, s.pendingProps = M, r.deletions = null) : (s = Bo(p, M), s.subtreeFlags = p.subtreeFlags & 14680064), k !== null ? h = Bo(k, h) : (h = _l(h, C, o, null), h.flags |= 2), h.return = r, s.return = r, s.sibling = h, r.child = s, s = h, h = r.child, C = n.child.memoizedState, C = C === null ? Cl(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, h.memoizedState = C, h.childLanes = n.childLanes & ~o, r.memoizedState = Ns, s;
    }
    return h = n.child, n = h.sibling, s = Bo(h, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function of(n, r) {
    return r = Cf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function lf(n, r, o, s) {
    return s !== null && Id(s), fu(r, n.child, null, o), n = of(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ep(n, r, o, s, p, h, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = Zd(Error(d(422))), lf(n, r, C, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = s.fallback, p = r.mode, s = Cf({ mode: "visible", children: s.children }, p, 0, null), h = _l(h, p, C, null), h.flags |= 2, s.return = r, h.return = r, s.sibling = h, r.child = s, r.mode & 1 && fu(r, n.child, null, C), r.child.memoizedState = Cl(C), r.memoizedState = Ns, h);
    if (!(r.mode & 1)) return lf(n, r, C, null);
    if (p.data === "$!") {
      if (s = p.nextSibling && p.nextSibling.dataset, s) var k = s.dgst;
      return s = k, h = Error(d(419)), s = Zd(h, s, void 0), lf(n, r, C, s);
    }
    if (k = (C & n.childLanes) !== 0, mi || k) {
      if (s = $n, s !== null) {
        switch (C & -C) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (s.suspendedLanes | C) ? 0 : p, p !== 0 && p !== h.retryLane && (h.retryLane = p, eo(n, p), _n(s, n, p, -1));
      }
      return Fs(), s = Zd(Error(d(421))), lf(n, r, C, s);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = fp.bind(null, n), p._reactRetry = r, null) : (n = h.treeContext, pi = ma(p.nextSibling), Di = r, mn = !0, Qi = null, n !== null && (di[Nr++] = yr, di[Nr++] = Za, di[Nr++] = Gi, yr = n.id, Za = n.overflow, Gi = r), r = of(r, s.children), r.flags |= 4096, r);
  }
  function wh(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), Wd(n.return, r, o);
  }
  function uf(n, r, o, s, p) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: p } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = s, h.tail = o, h.tailMode = p);
  }
  function tp(n, r, o) {
    var s = r.pendingProps, p = s.revealOrder, h = s.tail;
    if (Hn(n, r, s.children, o), s = En.current, s & 2) s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && wh(n, o, r);
        else if (n.tag === 19) wh(n, o, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      s &= 1;
    }
    if (Jt(En, s), !(r.mode & 1)) r.memoizedState = null;
    else switch (p) {
      case "forwards":
        for (o = r.child, p = null; o !== null; ) n = o.alternate, n !== null && Hc(n) === null && (p = o), o = o.sibling;
        o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), uf(r, !1, p, o, h);
        break;
      case "backwards":
        for (o = null, p = r.child, r.child = null; p !== null; ) {
          if (n = p.alternate, n !== null && Hc(n) === null) {
            r.child = p;
            break;
          }
          n = p.sibling, p.sibling = o, o = p, p = n;
        }
        uf(r, !0, o, null, h);
        break;
      case "together":
        uf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function zs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function jn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Tl |= r.lanes, !(o & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, o = Bo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Bo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function no(n, r, o) {
    switch (r.tag) {
      case 3:
        Ky(r), kn();
        break;
      case 5:
        fh(r);
        break;
      case 1:
        Sn(r.type) && Dc(r);
        break;
      case 4:
        Yd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, p = r.memoizedProps.value;
        Jt(Ja, s._currentValue), s._currentValue = p;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (Jt(En, En.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Ch(n, r, o) : (Jt(En, En.current & 1), n = jn(n, r, o), n !== null ? n.sibling : null);
        Jt(En, En.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s) return tp(n, r, o);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), Jt(En, En.current), s) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, yi(n, r, o);
    }
    return jn(n, r, o);
  }
  var Da, Tu, Ru, Zi;
  Da = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Tu = function() {
  }, Ru = function(n, r, o, s) {
    var p = n.memoizedProps;
    if (p !== s) {
      n = r.stateNode, hl(ya.current);
      var h = null;
      switch (o) {
        case "input":
          p = zn(n, p), s = zn(n, s), h = [];
          break;
        case "select":
          p = oe({}, p, { value: void 0 }), s = oe({}, s, { value: void 0 }), h = [];
          break;
        case "textarea":
          p = Or(n, p), s = Or(n, s), h = [];
          break;
        default:
          typeof p.onClick != "function" && typeof s.onClick == "function" && (n.onclick = _c);
      }
      Tn(o, s);
      var C;
      o = null;
      for (G in p) if (!s.hasOwnProperty(G) && p.hasOwnProperty(G) && p[G] != null) if (G === "style") {
        var k = p[G];
        for (C in k) k.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
      } else G !== "dangerouslySetInnerHTML" && G !== "children" && G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && G !== "autoFocus" && (S.hasOwnProperty(G) ? h || (h = []) : (h = h || []).push(G, null));
      for (G in s) {
        var M = s[G];
        if (k = p != null ? p[G] : void 0, s.hasOwnProperty(G) && M !== k && (M != null || k != null)) if (G === "style") if (k) {
          for (C in k) !k.hasOwnProperty(C) || M && M.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
          for (C in M) M.hasOwnProperty(C) && k[C] !== M[C] && (o || (o = {}), o[C] = M[C]);
        } else o || (h || (h = []), h.push(
          G,
          o
        )), o = M;
        else G === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, k = k ? k.__html : void 0, M != null && k !== M && (h = h || []).push(G, M)) : G === "children" ? typeof M != "string" && typeof M != "number" || (h = h || []).push(G, "" + M) : G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && (S.hasOwnProperty(G) ? (M != null && G === "onScroll" && sn("scroll", n), h || k === M || (h = [])) : (h = h || []).push(G, M));
      }
      o && (h = h || []).push("style", o);
      var G = h;
      (r.updateQueue = G) && (r.flags |= 4);
    }
  }, Zi = function(n, r, o, s) {
    o !== s && (r.flags |= 4);
  };
  function An(n, r) {
    if (!mn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var s = null; o !== null; ) o.alternate !== null && (s = o), o = o.sibling;
        s === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : s.sibling = null;
    }
  }
  function Pr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r) for (var p = n.child; p !== null; ) o |= p.lanes | p.childLanes, s |= p.subtreeFlags & 14680064, s |= p.flags & 14680064, p.return = n, p = p.sibling;
    else for (p = n.child; p !== null; ) o |= p.lanes | p.childLanes, s |= p.subtreeFlags, s |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function Xy(n, r, o) {
    var s = r.pendingProps;
    switch (Fd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Pr(r), null;
      case 1:
        return Sn(r.type) && Yi(), Pr(r), null;
      case 3:
        return s = r.stateNode, hu(), Xt(Mn), Xt(ft), Qd(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (Ac(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Qi !== null && (up(Qi), Qi = null))), Tu(n, r), Pr(r), null;
      case 5:
        Gd(r);
        var p = hl(xs.current);
        if (o = r.type, n !== null && r.stateNode != null) Ru(n, r, o, s, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null) throw Error(d(166));
            return Pr(r), null;
          }
          if (n = hl(ya.current), Ac(r)) {
            s = r.stateNode, o = r.type;
            var h = r.memoizedProps;
            switch (s[xa] = r, s[fl] = h, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                sn("cancel", s), sn("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                sn("load", s);
                break;
              case "video":
              case "audio":
                for (p = 0; p < ys.length; p++) sn(ys[p], s);
                break;
              case "source":
                sn("error", s);
                break;
              case "img":
              case "image":
              case "link":
                sn(
                  "error",
                  s
                ), sn("load", s);
                break;
              case "details":
                sn("toggle", s);
                break;
              case "input":
                Un(s, h), sn("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!h.multiple }, sn("invalid", s);
                break;
              case "textarea":
                ar(s, h), sn("invalid", s);
            }
            Tn(o, h), p = null;
            for (var C in h) if (h.hasOwnProperty(C)) {
              var k = h[C];
              C === "children" ? typeof k == "string" ? s.textContent !== k && (h.suppressHydrationWarning !== !0 && kc(s.textContent, k, n), p = ["children", k]) : typeof k == "number" && s.textContent !== "" + k && (h.suppressHydrationWarning !== !0 && kc(
                s.textContent,
                k,
                n
              ), p = ["children", "" + k]) : S.hasOwnProperty(C) && k != null && C === "onScroll" && sn("scroll", s);
            }
            switch (o) {
              case "input":
                nr(s), _r(s, h, !0);
                break;
              case "textarea":
                nr(s), Qn(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (s.onclick = _c);
            }
            s = p, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            C = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Lr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = C.createElement(o, { is: s.is }) : (n = C.createElement(o), o === "select" && (C = n, s.multiple ? C.multiple = !0 : s.size && (C.size = s.size))) : n = C.createElementNS(n, o), n[xa] = r, n[fl] = s, Da(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = vn(o, s), o) {
                case "dialog":
                  sn("cancel", n), sn("close", n), p = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  sn("load", n), p = s;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < ys.length; p++) sn(ys[p], n);
                  p = s;
                  break;
                case "source":
                  sn("error", n), p = s;
                  break;
                case "img":
                case "image":
                case "link":
                  sn(
                    "error",
                    n
                  ), sn("load", n), p = s;
                  break;
                case "details":
                  sn("toggle", n), p = s;
                  break;
                case "input":
                  Un(n, s), p = zn(n, s), sn("invalid", n);
                  break;
                case "option":
                  p = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, p = oe({}, s, { value: void 0 }), sn("invalid", n);
                  break;
                case "textarea":
                  ar(n, s), p = Or(n, s), sn("invalid", n);
                  break;
                default:
                  p = s;
              }
              Tn(o, p), k = p;
              for (h in k) if (k.hasOwnProperty(h)) {
                var M = k[h];
                h === "style" ? Ft(n, M) : h === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, M != null && Fr(n, M)) : h === "children" ? typeof M == "string" ? (o !== "textarea" || M !== "") && vr(n, M) : typeof M == "number" && vr(n, "" + M) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (S.hasOwnProperty(h) ? M != null && h === "onScroll" && sn("scroll", n) : M != null && Ue(n, h, M, C));
              }
              switch (o) {
                case "input":
                  nr(n), _r(n, s, !1);
                  break;
                case "textarea":
                  nr(n), Qn(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + wt(s.value));
                  break;
                case "select":
                  n.multiple = !!s.multiple, h = s.value, h != null ? ir(n, !!s.multiple, h, !1) : s.defaultValue != null && ir(
                    n,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = _c);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Pr(r), null;
      case 6:
        if (n && r.stateNode != null) Zi(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null) throw Error(d(166));
          if (o = hl(xs.current), hl(ya.current), Ac(r)) {
            if (s = r.stateNode, o = r.memoizedProps, s[xa] = r, (h = s.nodeValue !== o) && (n = Di, n !== null)) switch (n.tag) {
              case 3:
                kc(s.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && kc(s.nodeValue, o, (n.mode & 1) !== 0);
            }
            h && (r.flags |= 4);
          } else s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[xa] = r, r.stateNode = s;
        }
        return Pr(r), null;
      case 13:
        if (Xt(En), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (mn && pi !== null && r.mode & 1 && !(r.flags & 128)) ah(), kn(), r.flags |= 98560, h = !1;
          else if (h = Ac(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!h) throw Error(d(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(d(317));
              h[xa] = r;
            } else kn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Pr(r), h = !1;
          } else Qi !== null && (up(Qi), Qi = null), h = !0;
          if (!h) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || En.current & 1 ? Zn === 0 && (Zn = 3) : Fs())), r.updateQueue !== null && (r.flags |= 4), Pr(r), null);
      case 4:
        return hu(), Tu(n, r), n === null && uu(r.stateNode.containerInfo), Pr(r), null;
      case 10:
        return Bd(r.type._context), Pr(r), null;
      case 17:
        return Sn(r.type) && Yi(), Pr(r), null;
      case 19:
        if (Xt(En), h = r.memoizedState, h === null) return Pr(r), null;
        if (s = (r.flags & 128) !== 0, C = h.rendering, C === null) if (s) An(h, !1);
        else {
          if (Zn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (C = Hc(n), C !== null) {
              for (r.flags |= 128, An(h, !1), s = C.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; ) h = o, n = s, h.flags &= 14680066, C = h.alternate, C === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = C.childLanes, h.lanes = C.lanes, h.child = C.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = C.memoizedProps, h.memoizedState = C.memoizedState, h.updateQueue = C.updateQueue, h.type = C.type, n = C.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return Jt(En, En.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          h.tail !== null && ct() > Nu && (r.flags |= 128, s = !0, An(h, !1), r.lanes = 4194304);
        }
        else {
          if (!s) if (n = Hc(C), n !== null) {
            if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), An(h, !0), h.tail === null && h.tailMode === "hidden" && !C.alternate && !mn) return Pr(r), null;
          } else 2 * ct() - h.renderingStartTime > Nu && o !== 1073741824 && (r.flags |= 128, s = !0, An(h, !1), r.lanes = 4194304);
          h.isBackwards ? (C.sibling = r.child, r.child = C) : (o = h.last, o !== null ? o.sibling = C : r.child = C, h.last = C);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = ct(), r.sibling = null, o = En.current, Jt(En, s ? o & 1 | 2 : o & 1), r) : (Pr(r), null);
      case 22:
      case 23:
        return bf(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? gi & 1073741824 && (Pr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Pr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function Zy(n, r) {
    switch (Fd(r), r.tag) {
      case 1:
        return Sn(r.type) && Yi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return hu(), Xt(Mn), Xt(ft), Qd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Gd(r), null;
      case 13:
        if (Xt(En), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(d(340));
          kn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Xt(En), null;
      case 4:
        return hu(), null;
      case 10:
        return Bd(r.type._context), null;
      case 22:
      case 23:
        return bf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var xu = !1, br = !1, sf = typeof WeakSet == "function" ? WeakSet : Set, De = null;
  function ku(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (s) {
      Nn(n, r, s);
    }
    else o.current = null;
  }
  function np(n, r, o) {
    try {
      o();
    } catch (s) {
      Nn(n, r, s);
    }
  }
  var cf = !1;
  function Jy(n, r) {
    if (Ad = Vi, n = Cc(), Qa(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var s = o.getSelection && o.getSelection();
        if (s && s.rangeCount !== 0) {
          o = s.anchorNode;
          var p = s.anchorOffset, h = s.focusNode;
          s = s.focusOffset;
          try {
            o.nodeType, h.nodeType;
          } catch {
            o = null;
            break e;
          }
          var C = 0, k = -1, M = -1, G = 0, ie = 0, ae = n, re = null;
          t: for (; ; ) {
            for (var Re; ae !== o || p !== 0 && ae.nodeType !== 3 || (k = C + p), ae !== h || s !== 0 && ae.nodeType !== 3 || (M = C + s), ae.nodeType === 3 && (C += ae.nodeValue.length), (Re = ae.firstChild) !== null; )
              re = ae, ae = Re;
            for (; ; ) {
              if (ae === n) break t;
              if (re === o && ++G === p && (k = C), re === h && ++ie === s && (M = C), (Re = ae.nextSibling) !== null) break;
              ae = re, re = ae.parentNode;
            }
            ae = Re;
          }
          o = k === -1 || M === -1 ? null : { start: k, end: M };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (sl = { focusedElem: n, selectionRange: o }, Vi = !1, De = r; De !== null; ) if (r = De, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, De = n;
    else for (; De !== null; ) {
      r = De;
      try {
        var Me = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Me !== null) {
              var ze = Me.memoizedProps, Fn = Me.memoizedState, H = r.stateNode, z = H.getSnapshotBeforeUpdate(r.elementType === r.type ? ze : hi(r.type, ze), Fn);
              H.__reactInternalSnapshotBeforeUpdate = z;
            }
            break;
          case 3:
            var I = r.stateNode.containerInfo;
            I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(d(163));
        }
      } catch (pe) {
        Nn(r, r.return, pe);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, De = n;
        break;
      }
      De = r.return;
    }
    return Me = cf, cf = !1, Me;
  }
  function _u(n, r, o) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var p = s = s.next;
      do {
        if ((p.tag & n) === n) {
          var h = p.destroy;
          p.destroy = void 0, h !== void 0 && np(r, o, h);
        }
        p = p.next;
      } while (p !== s);
    }
  }
  function ff(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var s = o.create;
          o.destroy = s();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function df(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Th(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Th(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[xa], delete r[fl], delete r[zd], delete r[Gy], delete r[Ud])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function rp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Rh(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || rp(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Us(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = _c));
    else if (s !== 4 && (n = n.child, n !== null)) for (Us(n, r, o), n = n.sibling; n !== null; ) Us(n, r, o), n = n.sibling;
  }
  function Du(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null)) for (Du(n, r, o), n = n.sibling; n !== null; ) Du(n, r, o), n = n.sibling;
  }
  var Cn = null, cr = !1;
  function Yr(n, r, o) {
    for (o = o.child; o !== null; ) Ou(n, r, o), o = o.sibling;
  }
  function Ou(n, r, o) {
    if (ai && typeof ai.onCommitFiberUnmount == "function") try {
      ai.onCommitFiberUnmount(Eo, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        br || ku(o, r);
      case 6:
        var s = Cn, p = cr;
        Cn = null, Yr(n, r, o), Cn = s, cr = p, Cn !== null && (cr ? (n = Cn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Cn.removeChild(o.stateNode));
        break;
      case 18:
        Cn !== null && (cr ? (n = Cn, o = o.stateNode, n.nodeType === 8 ? Mo(n.parentNode, o) : n.nodeType === 1 && Mo(n, o), _o(n)) : Mo(Cn, o.stateNode));
        break;
      case 4:
        s = Cn, p = cr, Cn = o.stateNode.containerInfo, cr = !0, Yr(n, r, o), Cn = s, cr = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!br && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          p = s = s.next;
          do {
            var h = p, C = h.destroy;
            h = h.tag, C !== void 0 && (h & 2 || h & 4) && np(o, r, C), p = p.next;
          } while (p !== s);
        }
        Yr(n, r, o);
        break;
      case 1:
        if (!br && (ku(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
        } catch (k) {
          Nn(o, r, k);
        }
        Yr(n, r, o);
        break;
      case 21:
        Yr(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (br = (s = br) || o.memoizedState !== null, Yr(n, r, o), br = s) : Yr(n, r, o);
        break;
      default:
        Yr(n, r, o);
    }
  }
  function Lu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new sf()), r.forEach(function(s) {
        var p = og.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(p, p));
      });
    }
  }
  function fr(n, r) {
    var o = r.deletions;
    if (o !== null) for (var s = 0; s < o.length; s++) {
      var p = o[s];
      try {
        var h = n, C = r, k = C;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              Cn = k.stateNode, cr = !1;
              break e;
            case 3:
              Cn = k.stateNode.containerInfo, cr = !0;
              break e;
            case 4:
              Cn = k.stateNode.containerInfo, cr = !0;
              break e;
          }
          k = k.return;
        }
        if (Cn === null) throw Error(d(160));
        Ou(h, C, p), Cn = null, cr = !1;
        var M = p.alternate;
        M !== null && (M.return = null), p.return = null;
      } catch (G) {
        Nn(p, r, G);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) xh(r, n), r = r.sibling;
  }
  function xh(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (fr(r, n), Oa(n), s & 4) {
          try {
            _u(3, n, n.return), ff(3, n);
          } catch (ze) {
            Nn(n, n.return, ze);
          }
          try {
            _u(5, n, n.return);
          } catch (ze) {
            Nn(n, n.return, ze);
          }
        }
        break;
      case 1:
        fr(r, n), Oa(n), s & 512 && o !== null && ku(o, o.return);
        break;
      case 5:
        if (fr(r, n), Oa(n), s & 512 && o !== null && ku(o, o.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            vr(p, "");
          } catch (ze) {
            Nn(n, n.return, ze);
          }
        }
        if (s & 4 && (p = n.stateNode, p != null)) {
          var h = n.memoizedProps, C = o !== null ? o.memoizedProps : h, k = n.type, M = n.updateQueue;
          if (n.updateQueue = null, M !== null) try {
            k === "input" && h.type === "radio" && h.name != null && On(p, h), vn(k, C);
            var G = vn(k, h);
            for (C = 0; C < M.length; C += 2) {
              var ie = M[C], ae = M[C + 1];
              ie === "style" ? Ft(p, ae) : ie === "dangerouslySetInnerHTML" ? Fr(p, ae) : ie === "children" ? vr(p, ae) : Ue(p, ie, ae, G);
            }
            switch (k) {
              case "input":
                wn(p, h);
                break;
              case "textarea":
                jr(p, h);
                break;
              case "select":
                var re = p._wrapperState.wasMultiple;
                p._wrapperState.wasMultiple = !!h.multiple;
                var Re = h.value;
                Re != null ? ir(p, !!h.multiple, Re, !1) : re !== !!h.multiple && (h.defaultValue != null ? ir(
                  p,
                  !!h.multiple,
                  h.defaultValue,
                  !0
                ) : ir(p, !!h.multiple, h.multiple ? [] : "", !1));
            }
            p[fl] = h;
          } catch (ze) {
            Nn(n, n.return, ze);
          }
        }
        break;
      case 6:
        if (fr(r, n), Oa(n), s & 4) {
          if (n.stateNode === null) throw Error(d(162));
          p = n.stateNode, h = n.memoizedProps;
          try {
            p.nodeValue = h;
          } catch (ze) {
            Nn(n, n.return, ze);
          }
        }
        break;
      case 3:
        if (fr(r, n), Oa(n), s & 4 && o !== null && o.memoizedState.isDehydrated) try {
          _o(r.containerInfo);
        } catch (ze) {
          Nn(n, n.return, ze);
        }
        break;
      case 4:
        fr(r, n), Oa(n);
        break;
      case 13:
        fr(r, n), Oa(n), p = n.child, p.flags & 8192 && (h = p.memoizedState !== null, p.stateNode.isHidden = h, !h || p.alternate !== null && p.alternate.memoizedState !== null || (vf = ct())), s & 4 && Lu(n);
        break;
      case 22:
        if (ie = o !== null && o.memoizedState !== null, n.mode & 1 ? (br = (G = br) || ie, fr(r, n), br = G) : fr(r, n), Oa(n), s & 8192) {
          if (G = n.memoizedState !== null, (n.stateNode.isHidden = G) && !ie && n.mode & 1) for (De = n, ie = n.child; ie !== null; ) {
            for (ae = De = ie; De !== null; ) {
              switch (re = De, Re = re.child, re.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _u(4, re, re.return);
                  break;
                case 1:
                  ku(re, re.return);
                  var Me = re.stateNode;
                  if (typeof Me.componentWillUnmount == "function") {
                    s = re, o = re.return;
                    try {
                      r = s, Me.props = r.memoizedProps, Me.state = r.memoizedState, Me.componentWillUnmount();
                    } catch (ze) {
                      Nn(s, o, ze);
                    }
                  }
                  break;
                case 5:
                  ku(re, re.return);
                  break;
                case 22:
                  if (re.memoizedState !== null) {
                    kh(ae);
                    continue;
                  }
              }
              Re !== null ? (Re.return = re, De = Re) : kh(ae);
            }
            ie = ie.sibling;
          }
          e: for (ie = null, ae = n; ; ) {
            if (ae.tag === 5) {
              if (ie === null) {
                ie = ae;
                try {
                  p = ae.stateNode, G ? (h = p.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (k = ae.stateNode, M = ae.memoizedProps.style, C = M != null && M.hasOwnProperty("display") ? M.display : null, k.style.display = mt("display", C));
                } catch (ze) {
                  Nn(n, n.return, ze);
                }
              }
            } else if (ae.tag === 6) {
              if (ie === null) try {
                ae.stateNode.nodeValue = G ? "" : ae.memoizedProps;
              } catch (ze) {
                Nn(n, n.return, ze);
              }
            } else if ((ae.tag !== 22 && ae.tag !== 23 || ae.memoizedState === null || ae === n) && ae.child !== null) {
              ae.child.return = ae, ae = ae.child;
              continue;
            }
            if (ae === n) break e;
            for (; ae.sibling === null; ) {
              if (ae.return === null || ae.return === n) break e;
              ie === ae && (ie = null), ae = ae.return;
            }
            ie === ae && (ie = null), ae.sibling.return = ae.return, ae = ae.sibling;
          }
        }
        break;
      case 19:
        fr(r, n), Oa(n), s & 4 && Lu(n);
        break;
      case 21:
        break;
      default:
        fr(
          r,
          n
        ), Oa(n);
    }
  }
  function Oa(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (rp(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(d(160));
        }
        switch (s.tag) {
          case 5:
            var p = s.stateNode;
            s.flags & 32 && (vr(p, ""), s.flags &= -33);
            var h = Rh(n);
            Du(n, h, p);
            break;
          case 3:
          case 4:
            var C = s.stateNode.containerInfo, k = Rh(n);
            Us(n, k, C);
            break;
          default:
            throw Error(d(161));
        }
      } catch (M) {
        Nn(n, n.return, M);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function eg(n, r, o) {
    De = n, ip(n);
  }
  function ip(n, r, o) {
    for (var s = (n.mode & 1) !== 0; De !== null; ) {
      var p = De, h = p.child;
      if (p.tag === 22 && s) {
        var C = p.memoizedState !== null || xu;
        if (!C) {
          var k = p.alternate, M = k !== null && k.memoizedState !== null || br;
          k = xu;
          var G = br;
          if (xu = C, (br = M) && !G) for (De = p; De !== null; ) C = De, M = C.child, C.tag === 22 && C.memoizedState !== null ? ap(p) : M !== null ? (M.return = C, De = M) : ap(p);
          for (; h !== null; ) De = h, ip(h), h = h.sibling;
          De = p, xu = k, br = G;
        }
        Mu(n);
      } else p.subtreeFlags & 8772 && h !== null ? (h.return = p, De = h) : Mu(n);
    }
  }
  function Mu(n) {
    for (; De !== null; ) {
      var r = De;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              br || ff(5, r);
              break;
            case 1:
              var s = r.stateNode;
              if (r.flags & 4 && !br) if (o === null) s.componentDidMount();
              else {
                var p = r.elementType === r.type ? o.memoizedProps : hi(r.type, o.memoizedProps);
                s.componentDidUpdate(p, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var h = r.updateQueue;
              h !== null && ch(r, h, s);
              break;
            case 3:
              var C = r.updateQueue;
              if (C !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                ch(r, C, o);
              }
              break;
            case 5:
              var k = r.stateNode;
              if (o === null && r.flags & 4) {
                o = k;
                var M = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    M.autoFocus && o.focus();
                    break;
                  case "img":
                    M.src && (o.src = M.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var G = r.alternate;
                if (G !== null) {
                  var ie = G.memoizedState;
                  if (ie !== null) {
                    var ae = ie.dehydrated;
                    ae !== null && _o(ae);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(d(163));
          }
          br || r.flags & 512 && df(r);
        } catch (re) {
          Nn(r, r.return, re);
        }
      }
      if (r === n) {
        De = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, De = o;
        break;
      }
      De = r.return;
    }
  }
  function kh(n) {
    for (; De !== null; ) {
      var r = De;
      if (r === n) {
        De = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, De = o;
        break;
      }
      De = r.return;
    }
  }
  function ap(n) {
    for (; De !== null; ) {
      var r = De;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              ff(4, r);
            } catch (M) {
              Nn(r, o, M);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var p = r.return;
              try {
                s.componentDidMount();
              } catch (M) {
                Nn(r, p, M);
              }
            }
            var h = r.return;
            try {
              df(r);
            } catch (M) {
              Nn(r, h, M);
            }
            break;
          case 5:
            var C = r.return;
            try {
              df(r);
            } catch (M) {
              Nn(r, C, M);
            }
        }
      } catch (M) {
        Nn(r, r.return, M);
      }
      if (r === n) {
        De = null;
        break;
      }
      var k = r.sibling;
      if (k !== null) {
        k.return = r.return, De = k;
        break;
      }
      De = r.return;
    }
  }
  var tg = Math.ceil, wl = ut.ReactCurrentDispatcher, pf = ut.ReactCurrentOwner, Ji = ut.ReactCurrentBatchConfig, Mt = 0, $n = null, yn = null, Xn = 0, gi = 0, Au = Et(0), Zn = 0, Ps = null, Tl = 0, $u = 0, op = 0, Vo = null, Hr = null, vf = 0, Nu = 1 / 0, ro = null, hf = !1, lp = null, ea = null, zu = !1, ta = null, mf = 0, Hs = 0, yf = null, js = -1, Rl = 0;
  function dr() {
    return Mt & 6 ? ct() : js !== -1 ? js : js = ct();
  }
  function io(n) {
    return n.mode & 1 ? Mt & 2 && Xn !== 0 ? Xn & -Xn : $c.transition !== null ? (Rl === 0 && (Rl = Ql()), Rl) : (n = Yt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : us(n.type)), n) : 1;
  }
  function _n(n, r, o, s) {
    if (50 < Hs) throw Hs = 0, yf = null, Error(d(185));
    Va(n, o, s), (!(Mt & 2) || n !== $n) && (n === $n && (!(Mt & 2) && ($u |= o), Zn === 4 && La(n, Xn)), Jn(n, s), o === 1 && Mt === 0 && !(r.mode & 1) && (Nu = ct() + 500, sr && ci()));
  }
  function Jn(n, r) {
    var o = n.callbackNode;
    To(n, r);
    var s = Br(n, n === $n ? Xn : 0);
    if (s === 0) o !== null && de(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && de(o), r === 1) n.tag === 0 ? Hd(Uu.bind(null, n)) : Pd(Uu.bind(null, n)), Nd(function() {
        !(Mt & 6) && ci();
      }), o = null;
      else {
        switch (Kl(s)) {
          case 1:
            o = Rn;
            break;
          case 4:
            o = _t;
            break;
          case 16:
            o = ji;
            break;
          case 536870912:
            o = Yl;
            break;
          default:
            o = ji;
        }
        o = Nh(o, gf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function gf(n, r) {
    if (js = -1, Rl = 0, Mt & 6) throw Error(d(327));
    var o = n.callbackNode;
    if (Pu() && n.callbackNode !== o) return null;
    var s = Br(n, n === $n ? Xn : 0);
    if (s === 0) return null;
    if (s & 30 || s & n.expiredLanes || r) r = Sf(n, s);
    else {
      r = s;
      var p = Mt;
      Mt |= 2;
      var h = Dh();
      ($n !== n || Xn !== r) && (ro = null, Nu = ct() + 500, kl(n, r));
      do
        try {
          rg();
          break;
        } catch (k) {
          _h(n, k);
        }
      while (!0);
      Oi(), wl.current = h, Mt = p, yn !== null ? r = 0 : ($n = null, Xn = 0, r = Zn);
    }
    if (r !== 0) {
      if (r === 2 && (p = Ro(n), p !== 0 && (s = p, r = xl(n, p))), r === 1) throw o = Ps, kl(n, 0), La(n, s), Jn(n, ct()), o;
      if (r === 6) La(n, s);
      else {
        if (p = n.current.alternate, !(s & 30) && !sp(p) && (r = Sf(n, s), r === 2 && (h = Ro(n), h !== 0 && (s = h, r = xl(n, h))), r === 1)) throw o = Ps, kl(n, 0), La(n, s), Jn(n, ct()), o;
        switch (n.finishedWork = p, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            Io(n, Hr, ro);
            break;
          case 3:
            if (La(n, s), (s & 130023424) === s && (r = vf + 500 - ct(), 10 < r)) {
              if (Br(n, 0) !== 0) break;
              if (p = n.suspendedLanes, (p & s) !== s) {
                dr(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = cl(Io.bind(null, n, Hr, ro), r);
              break;
            }
            Io(n, Hr, ro);
            break;
          case 4:
            if (La(n, s), (s & 4194240) === s) break;
            for (r = n.eventTimes, p = -1; 0 < s; ) {
              var C = 31 - Ir(s);
              h = 1 << C, C = r[C], C > p && (p = C), s &= ~h;
            }
            if (s = p, s = ct() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * tg(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = cl(Io.bind(null, n, Hr, ro), s);
              break;
            }
            Io(n, Hr, ro);
            break;
          case 5:
            Io(n, Hr, ro);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return Jn(n, ct()), n.callbackNode === o ? gf.bind(null, n) : null;
  }
  function xl(n, r) {
    var o = Vo;
    return n.current.memoizedState.isDehydrated && (kl(n, r).flags |= 256), n = Sf(n, r), n !== 2 && (r = Hr, Hr = o, r !== null && up(r)), n;
  }
  function up(n) {
    Hr === null ? Hr = n : Hr.push.apply(Hr, n);
  }
  function sp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var s = 0; s < o.length; s++) {
          var p = o[s], h = p.getSnapshot;
          p = p.value;
          try {
            if (!Ii(h(), p)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null) o.return = r, r = o;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function La(n, r) {
    for (r &= ~op, r &= ~$u, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Ir(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function Uu(n) {
    if (Mt & 6) throw Error(d(327));
    Pu();
    var r = Br(n, 0);
    if (!(r & 1)) return Jn(n, ct()), null;
    var o = Sf(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = Ro(n);
      s !== 0 && (r = s, o = xl(n, s));
    }
    if (o === 1) throw o = Ps, kl(n, 0), La(n, r), Jn(n, ct()), o;
    if (o === 6) throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Io(n, Hr, ro), Jn(n, ct()), null;
  }
  function cp(n, r) {
    var o = Mt;
    Mt |= 1;
    try {
      return n(r);
    } finally {
      Mt = o, Mt === 0 && (Nu = ct() + 500, sr && ci());
    }
  }
  function Ma(n) {
    ta !== null && ta.tag === 0 && !(Mt & 6) && Pu();
    var r = Mt;
    Mt |= 1;
    var o = Ji.transition, s = Yt;
    try {
      if (Ji.transition = null, Yt = 1, n) return n();
    } finally {
      Yt = s, Ji.transition = o, Mt = r, !(Mt & 6) && ci();
    }
  }
  function bf() {
    gi = Au.current, Xt(Au);
  }
  function kl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, th(o)), yn !== null) for (o = yn.return; o !== null; ) {
      var s = o;
      switch (Fd(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && Yi();
          break;
        case 3:
          hu(), Xt(Mn), Xt(ft), Qd();
          break;
        case 5:
          Gd(s);
          break;
        case 4:
          hu();
          break;
        case 13:
          Xt(En);
          break;
        case 19:
          Xt(En);
          break;
        case 10:
          Bd(s.type._context);
          break;
        case 22:
        case 23:
          bf();
      }
      o = o.return;
    }
    if ($n = n, yn = n = Bo(n.current, null), Xn = gi = r, Zn = 0, Ps = null, op = $u = Tl = 0, Hr = Vo = null, vl !== null) {
      for (r = 0; r < vl.length; r++) if (o = vl[r], s = o.interleaved, s !== null) {
        o.interleaved = null;
        var p = s.next, h = o.pending;
        if (h !== null) {
          var C = h.next;
          h.next = p, s.next = C;
        }
        o.pending = s;
      }
      vl = null;
    }
    return n;
  }
  function _h(n, r) {
    do {
      var o = yn;
      try {
        if (Oi(), Fc.current = Ur, Li) {
          for (var s = Ie.memoizedState; s !== null; ) {
            var p = s.queue;
            p !== null && (p.pending = null), s = s.next;
          }
          Li = !1;
        }
        if (Fe = 0, Ot = dt = Ie = null, mu = !1, _s = 0, pf.current = null, o === null || o.return === null) {
          Zn = 1, Ps = r, yn = null;
          break;
        }
        e: {
          var h = n, C = o.return, k = o, M = r;
          if (r = Xn, k.flags |= 32768, M !== null && typeof M == "object" && typeof M.then == "function") {
            var G = M, ie = k, ae = ie.tag;
            if (!(ie.mode & 1) && (ae === 0 || ae === 11 || ae === 15)) {
              var re = ie.alternate;
              re ? (ie.updateQueue = re.updateQueue, ie.memoizedState = re.memoizedState, ie.lanes = re.lanes) : (ie.updateQueue = null, ie.memoizedState = null);
            }
            var Re = bh(C);
            if (Re !== null) {
              Re.flags &= -257, Jd(Re, C, k, h, r), Re.mode & 1 && As(h, G, r), r = Re, M = G;
              var Me = r.updateQueue;
              if (Me === null) {
                var ze = /* @__PURE__ */ new Set();
                ze.add(M), r.updateQueue = ze;
              } else Me.add(M);
              break e;
            } else {
              if (!(r & 1)) {
                As(h, G, r), Fs();
                break e;
              }
              M = Error(d(426));
            }
          } else if (mn && k.mode & 1) {
            var Fn = bh(C);
            if (Fn !== null) {
              !(Fn.flags & 65536) && (Fn.flags |= 256), Jd(Fn, C, k, h, r), Id(jo(M, k));
              break e;
            }
          }
          h = M = jo(M, k), Zn !== 4 && (Zn = 2), Vo === null ? Vo = [h] : Vo.push(h), h = C;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var H = yh(h, M, r);
                sh(h, H);
                break e;
              case 1:
                k = M;
                var z = h.type, I = h.stateNode;
                if (!(h.flags & 128) && (typeof z.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (ea === null || !ea.has(I)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var pe = gh(h, k, r);
                  sh(h, pe);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        Lh(o);
      } catch (Ve) {
        r = Ve, yn === o && o !== null && (yn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Dh() {
    var n = wl.current;
    return wl.current = Ur, n === null ? Ur : n;
  }
  function Fs() {
    (Zn === 0 || Zn === 3 || Zn === 2) && (Zn = 4), $n === null || !(Tl & 268435455) && !($u & 268435455) || La($n, Xn);
  }
  function Sf(n, r) {
    var o = Mt;
    Mt |= 2;
    var s = Dh();
    ($n !== n || Xn !== r) && (ro = null, kl(n, r));
    do
      try {
        ng();
        break;
      } catch (p) {
        _h(n, p);
      }
    while (!0);
    if (Oi(), Mt = o, wl.current = s, yn !== null) throw Error(d(261));
    return $n = null, Xn = 0, Zn;
  }
  function ng() {
    for (; yn !== null; ) Oh(yn);
  }
  function rg() {
    for (; yn !== null && !qe(); ) Oh(yn);
  }
  function Oh(n) {
    var r = $h(n.alternate, n, gi);
    n.memoizedProps = n.pendingProps, r === null ? Lh(n) : yn = r, pf.current = null;
  }
  function Lh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Zy(o, r), o !== null) {
          o.flags &= 32767, yn = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Zn = 6, yn = null;
          return;
        }
      } else if (o = Xy(o, r, gi), o !== null) {
        yn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        yn = r;
        return;
      }
      yn = r = n;
    } while (r !== null);
    Zn === 0 && (Zn = 5);
  }
  function Io(n, r, o) {
    var s = Yt, p = Ji.transition;
    try {
      Ji.transition = null, Yt = 1, ig(n, r, o, s);
    } finally {
      Ji.transition = p, Yt = s;
    }
    return null;
  }
  function ig(n, r, o, s) {
    do
      Pu();
    while (ta !== null);
    if (Mt & 6) throw Error(d(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = o.lanes | o.childLanes;
    if (vd(n, h), n === $n && (yn = $n = null, Xn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || zu || (zu = !0, Nh(ji, function() {
      return Pu(), null;
    })), h = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || h) {
      h = Ji.transition, Ji.transition = null;
      var C = Yt;
      Yt = 1;
      var k = Mt;
      Mt |= 4, pf.current = null, Jy(n, o), xh(o, n), wc(sl), Vi = !!Ad, sl = Ad = null, n.current = o, eg(o), Wt(), Mt = k, Yt = C, Ji.transition = h;
    } else n.current = o;
    if (zu && (zu = !1, ta = n, mf = p), h = n.pendingLanes, h === 0 && (ea = null), as(o.stateNode), Jn(n, ct()), r !== null) for (s = n.onRecoverableError, o = 0; o < r.length; o++) p = r[o], s(p.value, { componentStack: p.stack, digest: p.digest });
    if (hf) throw hf = !1, n = lp, lp = null, n;
    return mf & 1 && n.tag !== 0 && Pu(), h = n.pendingLanes, h & 1 ? n === yf ? Hs++ : (Hs = 0, yf = n) : Hs = 0, ci(), null;
  }
  function Pu() {
    if (ta !== null) {
      var n = Kl(mf), r = Ji.transition, o = Yt;
      try {
        if (Ji.transition = null, Yt = 16 > n ? 16 : n, ta === null) var s = !1;
        else {
          if (n = ta, ta = null, mf = 0, Mt & 6) throw Error(d(331));
          var p = Mt;
          for (Mt |= 4, De = n.current; De !== null; ) {
            var h = De, C = h.child;
            if (De.flags & 16) {
              var k = h.deletions;
              if (k !== null) {
                for (var M = 0; M < k.length; M++) {
                  var G = k[M];
                  for (De = G; De !== null; ) {
                    var ie = De;
                    switch (ie.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _u(8, ie, h);
                    }
                    var ae = ie.child;
                    if (ae !== null) ae.return = ie, De = ae;
                    else for (; De !== null; ) {
                      ie = De;
                      var re = ie.sibling, Re = ie.return;
                      if (Th(ie), ie === G) {
                        De = null;
                        break;
                      }
                      if (re !== null) {
                        re.return = Re, De = re;
                        break;
                      }
                      De = Re;
                    }
                  }
                }
                var Me = h.alternate;
                if (Me !== null) {
                  var ze = Me.child;
                  if (ze !== null) {
                    Me.child = null;
                    do {
                      var Fn = ze.sibling;
                      ze.sibling = null, ze = Fn;
                    } while (ze !== null);
                  }
                }
                De = h;
              }
            }
            if (h.subtreeFlags & 2064 && C !== null) C.return = h, De = C;
            else e: for (; De !== null; ) {
              if (h = De, h.flags & 2048) switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  _u(9, h, h.return);
              }
              var H = h.sibling;
              if (H !== null) {
                H.return = h.return, De = H;
                break e;
              }
              De = h.return;
            }
          }
          var z = n.current;
          for (De = z; De !== null; ) {
            C = De;
            var I = C.child;
            if (C.subtreeFlags & 2064 && I !== null) I.return = C, De = I;
            else e: for (C = z; De !== null; ) {
              if (k = De, k.flags & 2048) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ff(9, k);
                }
              } catch (Ve) {
                Nn(k, k.return, Ve);
              }
              if (k === C) {
                De = null;
                break e;
              }
              var pe = k.sibling;
              if (pe !== null) {
                pe.return = k.return, De = pe;
                break e;
              }
              De = k.return;
            }
          }
          if (Mt = p, ci(), ai && typeof ai.onPostCommitFiberRoot == "function") try {
            ai.onPostCommitFiberRoot(Eo, n);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Yt = o, Ji.transition = r;
      }
    }
    return !1;
  }
  function Mh(n, r, o) {
    r = jo(o, r), r = yh(n, r, 1), n = Po(n, r, 1), r = dr(), n !== null && (Va(n, 1, r), Jn(n, r));
  }
  function Nn(n, r, o) {
    if (n.tag === 3) Mh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Mh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var s = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ea === null || !ea.has(s))) {
          n = jo(o, n), n = gh(r, n, 1), r = Po(r, n, 1), n = dr(), r !== null && (Va(r, 1, n), Jn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function ag(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = dr(), n.pingedLanes |= n.suspendedLanes & o, $n === n && (Xn & o) === o && (Zn === 4 || Zn === 3 && (Xn & 130023424) === Xn && 500 > ct() - vf ? kl(n, 0) : op |= o), Jn(n, r);
  }
  function Ah(n, r) {
    r === 0 && (n.mode & 1 ? (r = Co, Co <<= 1, !(Co & 130023424) && (Co = 4194304)) : r = 1);
    var o = dr();
    n = eo(n, r), n !== null && (Va(n, r, o), Jn(n, o));
  }
  function fp(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Ah(n, o);
  }
  function og(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var s = n.stateNode, p = n.memoizedState;
        p !== null && (o = p.retryLane);
        break;
      case 19:
        s = n.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    s !== null && s.delete(r), Ah(n, o);
  }
  var $h;
  $h = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Mn.current) mi = !0;
    else {
      if (!(n.lanes & o) && !(r.flags & 128)) return mi = !1, no(n, r, o);
      mi = !!(n.flags & 131072);
    }
    else mi = !1, mn && r.flags & 1048576 && jd(r, cu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        zs(n, r), n = r.pendingProps;
        var p = Wi(r, ft.current);
        du(r, o), p = te(null, r, s, n, p, o);
        var h = Yn();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Sn(s) ? (h = !0, Dc(r)) : h = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, zc(r), p.updater = Sl, r.stateNode = p, p._reactInternals = r, Xd(r, s, n, o), r = af(null, r, s, !0, h, o)) : (r.tag = 0, mn && h && Oc(r), Hn(null, r, p, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (zs(n, r), n = r.pendingProps, p = s._init, s = p(s._payload), r.type = s, p = r.tag = lg(s), n = hi(s, n), p) {
            case 0:
              r = bt(null, r, s, n, o);
              break e;
            case 1:
              r = $s(null, r, s, n, o);
              break e;
            case 11:
              r = wu(null, r, s, n, o);
              break e;
            case 14:
              r = Fo(null, r, s, hi(s.type, n), o);
              break e;
          }
          throw Error(d(
            306,
            s,
            ""
          ));
        }
        return r;
      case 0:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : hi(s, p), bt(n, r, s, p, o);
      case 1:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : hi(s, p), $s(n, r, s, p, o);
      case 3:
        e: {
          if (Ky(r), n === null) throw Error(d(387));
          s = r.pendingProps, h = r.memoizedState, p = h.element, pu(n, r), Pc(r, s, null, o);
          var C = r.memoizedState;
          if (s = C.element, h.isDehydrated) if (h = { element: s, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
            p = jo(Error(d(423)), r), r = Eh(n, r, s, o, p);
            break e;
          } else if (s !== p) {
            p = jo(Error(d(424)), r), r = Eh(n, r, s, o, p);
            break e;
          } else for (pi = ma(r.stateNode.containerInfo.firstChild), Di = r, mn = !0, Qi = null, o = lh(r, null, s, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (kn(), s === p) {
              r = jn(n, r, o);
              break e;
            }
            Hn(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return fh(r), n === null && Mc(r), s = r.type, p = r.pendingProps, h = n !== null ? n.memoizedProps : null, C = p.children, Ss(s, p) ? C = null : h !== null && Ss(s, h) && (r.flags |= 32), El(n, r), Hn(n, r, C, o), r.child;
      case 6:
        return n === null && Mc(r), null;
      case 13:
        return Ch(n, r, o);
      case 4:
        return Yd(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = fu(r, null, s, o) : Hn(n, r, s, o), r.child;
      case 11:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : hi(s, p), wu(n, r, s, p, o);
      case 7:
        return Hn(n, r, r.pendingProps, o), r.child;
      case 8:
        return Hn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Hn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, p = r.pendingProps, h = r.memoizedProps, C = p.value, Jt(Ja, s._currentValue), s._currentValue = C, h !== null) if (Ii(h.value, C)) {
            if (h.children === p.children && !Mn.current) {
              r = jn(n, r, o);
              break e;
            }
          } else for (h = r.child, h !== null && (h.return = r); h !== null; ) {
            var k = h.dependencies;
            if (k !== null) {
              C = h.child;
              for (var M = k.firstContext; M !== null; ) {
                if (M.context === s) {
                  if (h.tag === 1) {
                    M = vi(-1, o & -o), M.tag = 2;
                    var G = h.updateQueue;
                    if (G !== null) {
                      G = G.shared;
                      var ie = G.pending;
                      ie === null ? M.next = M : (M.next = ie.next, ie.next = M), G.pending = M;
                    }
                  }
                  h.lanes |= o, M = h.alternate, M !== null && (M.lanes |= o), Wd(
                    h.return,
                    o,
                    r
                  ), k.lanes |= o;
                  break;
                }
                M = M.next;
              }
            } else if (h.tag === 10) C = h.type === r.type ? null : h.child;
            else if (h.tag === 18) {
              if (C = h.return, C === null) throw Error(d(341));
              C.lanes |= o, k = C.alternate, k !== null && (k.lanes |= o), Wd(C, o, r), C = h.sibling;
            } else C = h.child;
            if (C !== null) C.return = h;
            else for (C = h; C !== null; ) {
              if (C === r) {
                C = null;
                break;
              }
              if (h = C.sibling, h !== null) {
                h.return = C.return, C = h;
                break;
              }
              C = C.return;
            }
            h = C;
          }
          Hn(n, r, p.children, o), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, s = r.pendingProps.children, du(r, o), p = Ki(p), s = s(p), r.flags |= 1, Hn(n, r, s, o), r.child;
      case 14:
        return s = r.type, p = hi(s, r.pendingProps), p = hi(s.type, p), Fo(n, r, s, p, o);
      case 15:
        return rf(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : hi(s, p), zs(n, r), r.tag = 1, Sn(s) ? (n = !0, Dc(r)) : n = !1, du(r, o), vh(r, s, p), Xd(r, s, p, o), af(null, r, s, !0, n, o);
      case 19:
        return tp(n, r, o);
      case 22:
        return yi(n, r, o);
    }
    throw Error(d(156, r.tag));
  };
  function Nh(n, r) {
    return V(n, r);
  }
  function zh(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function na(n, r, o, s) {
    return new zh(n, r, o, s);
  }
  function dp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function lg(n) {
    if (typeof n == "function") return dp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === $t) return 11;
      if (n === gt) return 14;
    }
    return 2;
  }
  function Bo(n, r) {
    var o = n.alternate;
    return o === null ? (o = na(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Ef(n, r, o, s, p, h) {
    var C = 2;
    if (s = n, typeof n == "function") dp(n) && (C = 1);
    else if (typeof n == "string") C = 5;
    else e: switch (n) {
      case ge:
        return _l(o.children, p, h, r);
      case nt:
        C = 8, p |= 8;
        break;
      case _e:
        return n = na(12, o, r, p | 2), n.elementType = _e, n.lanes = h, n;
      case je:
        return n = na(13, o, r, p), n.elementType = je, n.lanes = h, n;
      case at:
        return n = na(19, o, r, p), n.elementType = at, n.lanes = h, n;
      case we:
        return Cf(o, p, h, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case xt:
            C = 10;
            break e;
          case Ct:
            C = 9;
            break e;
          case $t:
            C = 11;
            break e;
          case gt:
            C = 14;
            break e;
          case rt:
            C = 16, s = null;
            break e;
        }
        throw Error(d(130, n == null ? n : typeof n, ""));
    }
    return r = na(C, o, r, p), r.elementType = n, r.type = s, r.lanes = h, r;
  }
  function _l(n, r, o, s) {
    return n = na(7, n, s, r), n.lanes = o, n;
  }
  function Cf(n, r, o, s) {
    return n = na(22, n, s, r), n.elementType = we, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function wf(n, r, o) {
    return n = na(6, n, null, r), n.lanes = o, n;
  }
  function Vs(n, r, o) {
    return r = na(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Is(n, r, o, s, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ql(0), this.expirationTimes = ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ql(0), this.identifierPrefix = s, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function pp(n, r, o, s, p, h, C, k, M) {
    return n = new Is(n, r, o, k, M), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = na(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, zc(h), n;
  }
  function Uh(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: st, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function vp(n) {
    if (!n) return ka;
    n = n._reactInternals;
    e: {
      if (He(n) !== n || n.tag !== 1) throw Error(d(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Sn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(d(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Sn(o)) return ws(n, o, r);
    }
    return r;
  }
  function hp(n, r, o, s, p, h, C, k, M) {
    return n = pp(o, s, !0, n, p, h, C, k, M), n.context = vp(null), o = n.current, s = dr(), p = io(o), h = vi(s, p), h.callback = r ?? null, Po(o, h, p), n.current.lanes = p, Va(n, p, s), Jn(n, s), n;
  }
  function Tf(n, r, o, s) {
    var p = r.current, h = dr(), C = io(p);
    return o = vp(o), r.context === null ? r.context = o : r.pendingContext = o, r = vi(h, C), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = Po(p, r, C), n !== null && (_n(n, p, C, h), Uc(n, p, C)), C;
  }
  function Bs(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Ph(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function mp(n, r) {
    Ph(n, r), (n = n.alternate) && Ph(n, r);
  }
  function ug() {
    return null;
  }
  var yp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Rf(n) {
    this._internalRoot = n;
  }
  Ws.prototype.render = Rf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(d(409));
    Tf(n, r, null, null);
  }, Ws.prototype.unmount = Rf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ma(function() {
        Tf(null, n, null, null);
      }), r[Xa] = null;
    }
  };
  function Ws(n) {
    this._internalRoot = n;
  }
  Ws.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Zl();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Zt.length && r !== 0 && r < Zt[o].priority; o++) ;
      Zt.splice(o, 0, n), o === 0 && mc(n);
    }
  };
  function Wo(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function xf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Hh() {
  }
  function sg(n, r, o, s, p) {
    if (p) {
      if (typeof s == "function") {
        var h = s;
        s = function() {
          var G = Bs(C);
          h.call(G);
        };
      }
      var C = hp(r, s, n, 0, null, !1, !1, "", Hh);
      return n._reactRootContainer = C, n[Xa] = C.current, uu(n.nodeType === 8 ? n.parentNode : n), Ma(), C;
    }
    for (; p = n.lastChild; ) n.removeChild(p);
    if (typeof s == "function") {
      var k = s;
      s = function() {
        var G = Bs(M);
        k.call(G);
      };
    }
    var M = pp(n, 0, !1, null, null, !1, !1, "", Hh);
    return n._reactRootContainer = M, n[Xa] = M.current, uu(n.nodeType === 8 ? n.parentNode : n), Ma(function() {
      Tf(r, M, o, s);
    }), M;
  }
  function kf(n, r, o, s, p) {
    var h = o._reactRootContainer;
    if (h) {
      var C = h;
      if (typeof p == "function") {
        var k = p;
        p = function() {
          var M = Bs(C);
          k.call(M);
        };
      }
      Tf(r, C, n, p);
    } else C = sg(o, r, n, p, s);
    return Bs(C);
  }
  nl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = fa(r.pendingLanes);
          o !== 0 && (Ta(r, o | 1), Jn(r, ct()), !(Mt & 6) && (Nu = ct() + 500, ci()));
        }
        break;
      case 13:
        Ma(function() {
          var s = eo(n, 1);
          if (s !== null) {
            var p = dr();
            _n(s, n, 1, p);
          }
        }), mp(n, 1);
    }
  }, Xl = function(n) {
    if (n.tag === 13) {
      var r = eo(n, 134217728);
      if (r !== null) {
        var o = dr();
        _n(r, n, 134217728, o);
      }
      mp(n, 134217728);
    }
  }, Nt = function(n) {
    if (n.tag === 13) {
      var r = io(n), o = eo(n, r);
      if (o !== null) {
        var s = dr();
        _n(o, n, r, s);
      }
      mp(n, r);
    }
  }, Zl = function() {
    return Yt;
  }, Jl = function(n, r) {
    var o = Yt;
    try {
      return Yt = n, r();
    } finally {
      Yt = o;
    }
  }, hr = function(n, r, o) {
    switch (r) {
      case "input":
        if (wn(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var p = Ke(s);
              if (!p) throw Error(d(90));
              rr(s), wn(s, p);
            }
          }
        }
        break;
      case "textarea":
        jr(n, o);
        break;
      case "select":
        r = o.value, r != null && ir(n, !!o.multiple, r, !1);
    }
  }, Fa = cp, bo = Ma;
  var cg = { usingClientEntryPoint: !1, Events: [Cs, su, Ke, ri, Ca, cp] }, Ys = { findFiberByHostInstance: Bi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, jh = { bundleType: Ys.bundleType, version: Ys.version, rendererPackageName: Ys.rendererPackageName, rendererConfig: Ys.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Rt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ys.findFiberByHostInstance || ug, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _f = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_f.isDisabled && _f.supportsFiber) try {
      Eo = _f.inject(jh), ai = _f;
    } catch {
    }
  }
  return ua.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cg, ua.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wo(r)) throw Error(d(200));
    return Uh(n, r, null, o);
  }, ua.createRoot = function(n, r) {
    if (!Wo(n)) throw Error(d(299));
    var o = !1, s = "", p = yp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = pp(n, 1, !1, null, null, o, !1, s, p), n[Xa] = r.current, uu(n.nodeType === 8 ? n.parentNode : n), new Rf(r);
  }, ua.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : (n = Object.keys(n).join(","), Error(d(268, n)));
    return n = Rt(r), n = n === null ? null : n.stateNode, n;
  }, ua.flushSync = function(n) {
    return Ma(n);
  }, ua.hydrate = function(n, r, o) {
    if (!xf(r)) throw Error(d(200));
    return kf(null, n, r, !0, o);
  }, ua.hydrateRoot = function(n, r, o) {
    if (!Wo(n)) throw Error(d(405));
    var s = o != null && o.hydratedSources || null, p = !1, h = "", C = yp;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (h = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = hp(r, null, n, 1, o ?? null, p, !1, h, C), n[Xa] = r.current, uu(n), s) for (n = 0; n < s.length; n++) o = s[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
      o,
      p
    );
    return new Ws(r);
  }, ua.render = function(n, r, o) {
    if (!xf(r)) throw Error(d(200));
    return kf(null, n, r, !1, o);
  }, ua.unmountComponentAtNode = function(n) {
    if (!xf(n)) throw Error(d(40));
    return n._reactRootContainer ? (Ma(function() {
      kf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Xa] = null;
      });
    }), !0) : !1;
  }, ua.unstable_batchedUpdates = cp, ua.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!xf(o)) throw Error(d(200));
    if (n == null || n._reactInternals === void 0) throw Error(d(38));
    return kf(n, r, o, !1, s);
  }, ua.version = "18.3.1-next-f1338f8080-20240426", ua;
}
var sa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var P1;
function iM() {
  return P1 || (P1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = Cv(), u = CT(), d = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, y = !1;
    function S(e) {
      y = e;
    }
    function T(e) {
      if (!y) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          i[a - 1] = arguments[a];
        _("warn", e, i);
      }
    }
    function g(e) {
      if (!y) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          i[a - 1] = arguments[a];
        _("error", e, i);
      }
    }
    function _(e, t, i) {
      {
        var a = d.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (t += "%s", i = i.concat([l]));
        var f = i.map(function(v) {
          return String(v);
        });
        f.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var x = 0, L = 1, P = 2, A = 3, K = 4, B = 5, se = 6, We = 7, Ce = 8, ht = 9, ye = 10, Ue = 11, ut = 12, Oe = 13, st = 14, ge = 15, nt = 16, _e = 17, xt = 18, Ct = 19, $t = 21, je = 22, at = 23, gt = 24, rt = 25, we = !0, ce = !1, Le = !1, oe = !1, $ = !1, q = !0, Ne = !1, Te = !0, Ge = !0, ot = !0, St = !0, wt = /* @__PURE__ */ new Set(), Tt = {}, tn = {};
    function nr(e, t) {
      rr(e, t), rr(e + "Capture", t);
    }
    function rr(e, t) {
      Tt[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Tt[e] = t;
      {
        var i = e.toLowerCase();
        tn[i] = e, e === "onDoubleClick" && (tn.ondblclick = e);
      }
      for (var a = 0; a < t.length; a++)
        wt.add(t[a]);
    }
    var dn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", zn = Object.prototype.hasOwnProperty;
    function Un(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function On(e) {
      try {
        return wn(e), !1;
      } catch {
        return !0;
      }
    }
    function wn(e) {
      return "" + e;
    }
    function _r(e, t) {
      if (On(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Un(e)), wn(e);
    }
    function Dr(e) {
      if (On(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Un(e)), wn(e);
    }
    function In(e, t) {
      if (On(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Un(e)), wn(e);
    }
    function ir(e, t) {
      if (On(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Un(e)), wn(e);
    }
    function Or(e) {
      if (On(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Un(e)), wn(e);
    }
    function ar(e) {
      if (On(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Un(e)), wn(e);
    }
    var jr = 0, Qn = 1, Lr = 2, pn = 3, qn = 4, Fr = 5, vr = 6, ve = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Pe = ve + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", mt = new RegExp("^[" + ve + "][" + Pe + "]*$"), Ft = {}, Vt = {};
    function Tn(e) {
      return zn.call(Vt, e) ? !0 : zn.call(Ft, e) ? !1 : mt.test(e) ? (Vt[e] = !0, !0) : (Ft[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, i) {
      return t !== null ? t.type === jr : i ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function or(e, t, i, a) {
      if (i !== null && i.type === jr)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (a)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kt(e, t, i, a) {
      if (t === null || typeof t > "u" || or(e, t, i, a))
        return !0;
      if (a)
        return !1;
      if (i !== null)
        switch (i.type) {
          case pn:
            return !t;
          case qn:
            return t === !1;
          case Fr:
            return isNaN(t);
          case vr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function hr(e) {
      return Bt.hasOwnProperty(e) ? Bt[e] : null;
    }
    function It(e, t, i, a, l, f, v) {
      this.acceptsBooleans = t === Lr || t === pn || t === qn, this.attributeName = a, this.attributeNamespace = l, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = v;
    }
    var Bt = {}, Ri = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ri.forEach(function(e) {
      Bt[e] = new It(
        e,
        jr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], i = e[1];
      Bt[t] = new It(
        t,
        Qn,
        !1,
        // mustUseProperty
        i,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Bt[e] = new It(
        e,
        Lr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Bt[e] = new It(
        e,
        Lr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Bt[e] = new It(
        e,
        pn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Bt[e] = new It(
        e,
        pn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Bt[e] = new It(
        e,
        qn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Bt[e] = new It(
        e,
        vr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Bt[e] = new It(
        e,
        Fr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ri = /[\-\:]([a-z])/g, Ca = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ri, Ca);
      Bt[t] = new It(
        t,
        Qn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ri, Ca);
      Bt[t] = new It(
        t,
        Qn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ri, Ca);
      Bt[t] = new It(
        t,
        Qn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Bt[e] = new It(
        e,
        Qn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Fa = "xlinkHref";
    Bt[Fa] = new It(
      "xlinkHref",
      Qn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Bt[e] = new It(
        e,
        Qn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var bo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ii = !1;
    function wa(e) {
      !ii && bo.test(e) && (ii = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Mr(e, t, i, a) {
      if (a.mustUseProperty) {
        var l = a.propertyName;
        return e[l];
      } else {
        _r(i, t), a.sanitizeURL && wa("" + i);
        var f = a.attributeName, v = null;
        if (a.type === qn) {
          if (e.hasAttribute(f)) {
            var m = e.getAttribute(f);
            return m === "" ? !0 : Kt(t, i, a, !1) ? m : m === "" + i ? i : m;
          }
        } else if (e.hasAttribute(f)) {
          if (Kt(t, i, a, !1))
            return e.getAttribute(f);
          if (a.type === pn)
            return i;
          v = e.getAttribute(f);
        }
        return Kt(t, i, a, !1) ? v === null ? i : v : v === "" + i ? i : v;
      }
    }
    function Ar(e, t, i, a) {
      {
        if (!Tn(t))
          return;
        if (!e.hasAttribute(t))
          return i === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return _r(i, t), l === "" + i ? i : l;
      }
    }
    function $r(e, t, i, a) {
      var l = hr(t);
      if (!vn(t, l, a)) {
        if (Kt(t, i, l, a) && (i = null), a || l === null) {
          if (Tn(t)) {
            var f = t;
            i === null ? e.removeAttribute(f) : (_r(i, t), e.setAttribute(f, "" + i));
          }
          return;
        }
        var v = l.mustUseProperty;
        if (v) {
          var m = l.propertyName;
          if (i === null) {
            var b = l.type;
            e[m] = b === pn ? !1 : "";
          } else
            e[m] = i;
          return;
        }
        var w = l.attributeName, R = l.attributeNamespace;
        if (i === null)
          e.removeAttribute(w);
        else {
          var U = l.type, N;
          U === pn || U === qn && i === !0 ? N = "" : (_r(i, w), N = "" + i, l.sanitizeURL && wa(N.toString())), R ? e.setAttributeNS(R, w, N) : e.setAttribute(w, N);
        }
      }
    }
    var bn = Symbol.for("react.element"), mr = Symbol.for("react.portal"), Vr = Symbol.for("react.fragment"), Hi = Symbol.for("react.strict_mode"), xi = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), ne = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), He = Symbol.for("react.suspense"), kt = Symbol.for("react.suspense_list"), Lt = Symbol.for("react.memo"), Qe = Symbol.for("react.lazy"), Rt = Symbol.for("react.scope"), Pn = Symbol.for("react.debug_trace_mode"), V = Symbol.for("react.offscreen"), de = Symbol.for("react.legacy_hidden"), qe = Symbol.for("react.cache"), Wt = Symbol.for("react.tracing_marker"), ct = Symbol.iterator, nn = "@@iterator";
    function Rn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ct && e[ct] || e[nn];
      return typeof t == "function" ? t : null;
    }
    var _t = Object.assign, ji = 0, So, Yl, Eo, ai, as, Ir, os;
    function ls() {
    }
    ls.__reactDisabledLog = !0;
    function vc() {
      {
        if (ji === 0) {
          So = console.log, Yl = console.info, Eo = console.warn, ai = console.error, as = console.group, Ir = console.groupCollapsed, os = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ls,
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
        ji++;
      }
    }
    function Gl() {
      {
        if (ji--, ji === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _t({}, e, {
              value: So
            }),
            info: _t({}, e, {
              value: Yl
            }),
            warn: _t({}, e, {
              value: Eo
            }),
            error: _t({}, e, {
              value: ai
            }),
            group: _t({}, e, {
              value: as
            }),
            groupCollapsed: _t({}, e, {
              value: Ir
            }),
            groupEnd: _t({}, e, {
              value: os
            })
          });
        }
        ji < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Co = d.ReactCurrentDispatcher, fa;
    function Br(e, t, i) {
      {
        if (fa === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            fa = a && a[1] || "";
          }
        return `
` + fa + e;
      }
    }
    var wo = !1, To;
    {
      var Ro = typeof WeakMap == "function" ? WeakMap : Map;
      To = new Ro();
    }
    function Ql(e, t) {
      if (!e || wo)
        return "";
      {
        var i = To.get(e);
        if (i !== void 0)
          return i;
      }
      var a;
      wo = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = Co.current, Co.current = null, vc();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (Q) {
              a = Q;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (Q) {
              a = Q;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            a = Q;
          }
          e();
        }
      } catch (Q) {
        if (Q && a && typeof Q.stack == "string") {
          for (var m = Q.stack.split(`
`), b = a.stack.split(`
`), w = m.length - 1, R = b.length - 1; w >= 1 && R >= 0 && m[w] !== b[R]; )
            R--;
          for (; w >= 1 && R >= 0; w--, R--)
            if (m[w] !== b[R]) {
              if (w !== 1 || R !== 1)
                do
                  if (w--, R--, R < 0 || m[w] !== b[R]) {
                    var U = `
` + m[w].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && To.set(e, U), U;
                  }
                while (w >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        wo = !1, Co.current = f, Gl(), Error.prepareStackTrace = l;
      }
      var N = e ? e.displayName || e.name : "", W = N ? Br(N) : "";
      return typeof e == "function" && To.set(e, W), W;
    }
    function ql(e, t, i) {
      return Ql(e, !0);
    }
    function Va(e, t, i) {
      return Ql(e, !1);
    }
    function vd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ta(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ql(e, vd(e));
      if (typeof e == "string")
        return Br(e);
      switch (e) {
        case He:
          return Br("Suspense");
        case kt:
          return Br("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case le:
            return Va(e.render);
          case Lt:
            return Ta(e.type, t, i);
          case Qe: {
            var a = e, l = a._payload, f = a._init;
            try {
              return Ta(f(l), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    function Yt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case B:
          return Br(e.type);
        case nt:
          return Br("Lazy");
        case Oe:
          return Br("Suspense");
        case Ct:
          return Br("SuspenseList");
        case x:
        case P:
        case ge:
          return Va(e.type);
        case Ue:
          return Va(e.type.render);
        case L:
          return ql(e.type);
        default:
          return "";
      }
    }
    function Kl(e) {
      try {
        var t = "", i = e;
        do
          t += Yt(i), i = i.return;
        while (i);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    function nl(e, t, i) {
      var a = e.displayName;
      if (a)
        return a;
      var l = t.displayName || t.name || "";
      return l !== "" ? i + "(" + l + ")" : i;
    }
    function Xl(e) {
      return e.displayName || "Context";
    }
    function Nt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Vr:
          return "Fragment";
        case mr:
          return "Portal";
        case xi:
          return "Profiler";
        case Hi:
          return "StrictMode";
        case He:
          return "Suspense";
        case kt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ne:
            var t = e;
            return Xl(t) + ".Consumer";
          case O:
            var i = e;
            return Xl(i._context) + ".Provider";
          case le:
            return nl(e, e.render, "ForwardRef");
          case Lt:
            var a = e.displayName || null;
            return a !== null ? a : Nt(e.type) || "Memo";
          case Qe: {
            var l = e, f = l._payload, v = l._init;
            try {
              return Nt(v(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Zl(e, t, i) {
      var a = t.displayName || t.name || "";
      return e.displayName || (a !== "" ? i + "(" + a + ")" : i);
    }
    function Jl(e) {
      return e.displayName || "Context";
    }
    function pt(e) {
      var t = e.tag, i = e.type;
      switch (t) {
        case gt:
          return "Cache";
        case ht:
          var a = i;
          return Jl(a) + ".Consumer";
        case ye:
          var l = i;
          return Jl(l._context) + ".Provider";
        case xt:
          return "DehydratedFragment";
        case Ue:
          return Zl(i, i.render, "ForwardRef");
        case We:
          return "Fragment";
        case B:
          return i;
        case K:
          return "Portal";
        case A:
          return "Root";
        case se:
          return "Text";
        case nt:
          return Nt(i);
        case Ce:
          return i === Hi ? "StrictMode" : "Mode";
        case je:
          return "Offscreen";
        case ut:
          return "Profiler";
        case $t:
          return "Scope";
        case Oe:
          return "Suspense";
        case Ct:
          return "SuspenseList";
        case rt:
          return "TracingMarker";
        case L:
        case x:
        case _e:
        case P:
        case st:
        case ge:
          if (typeof i == "function")
            return i.displayName || i.name || null;
          if (typeof i == "string")
            return i;
          break;
      }
      return null;
    }
    var rl = d.ReactDebugCurrentFrame, xn = null, oi = !1;
    function Wr() {
      {
        if (xn === null)
          return null;
        var e = xn._debugOwner;
        if (e !== null && typeof e < "u")
          return pt(e);
      }
      return null;
    }
    function xo() {
      return xn === null ? "" : Kl(xn);
    }
    function Ln() {
      rl.getCurrentStack = null, xn = null, oi = !1;
    }
    function Zt(e) {
      rl.getCurrentStack = e === null ? null : xo, xn = e, oi = !1;
    }
    function hc() {
      return xn;
    }
    function li(e) {
      oi = e;
    }
    function lr(e) {
      return "" + e;
    }
    function Ra(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return ar(e), e;
        default:
          return "";
      }
    }
    var mc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ia(e, t) {
      mc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ko(e) {
      var t = e.type, i = e.nodeName;
      return i && i.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function yc(e) {
      return e._valueTracker;
    }
    function Fi(e) {
      e._valueTracker = null;
    }
    function _o(e) {
      var t = "";
      return e && (ko(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ba(e) {
      var t = ko(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      ar(e[t]);
      var a = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof i > "u" || typeof i.get != "function" || typeof i.set != "function")) {
        var l = i.get, f = i.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(m) {
            ar(m), a = "" + m, f.call(this, m);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        });
        var v = {
          getValue: function() {
            return a;
          },
          setValue: function(m) {
            ar(m), a = "" + m;
          },
          stopTracking: function() {
            Fi(e), delete e[t];
          }
        };
        return v;
      }
    }
    function Vi(e) {
      yc(e) || (e._valueTracker = Ba(e));
    }
    function eu(e) {
      if (!e)
        return !1;
      var t = yc(e);
      if (!t)
        return !0;
      var i = t.getValue(), a = _o(e);
      return a !== i ? (t.setValue(a), !0) : !1;
    }
    function Do(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Oo = !1, il = !1, tu = !1, us = !1;
    function da(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function E(e, t) {
      var i = e, a = t.checked, l = _t({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: a ?? i._wrapperState.initialChecked
      });
      return l;
    }
    function D(e, t) {
      Ia("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !il && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Wr() || "A component", t.type), il = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Oo && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Wr() || "A component", t.type), Oo = !0);
      var i = e, a = t.defaultValue == null ? "" : t.defaultValue;
      i._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ra(t.value != null ? t.value : a),
        controlled: da(t)
      };
    }
    function Y(e, t) {
      var i = e, a = t.checked;
      a != null && $r(i, "checked", a, !1);
    }
    function X(e, t) {
      var i = e;
      {
        var a = da(t);
        !i._wrapperState.controlled && a && !us && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), us = !0), i._wrapperState.controlled && !a && !tu && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), tu = !0);
      }
      Y(e, t);
      var l = Ra(t.value), f = t.type;
      if (l != null)
        f === "number" ? (l === 0 && i.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        i.value != l) && (i.value = lr(l)) : i.value !== lr(l) && (i.value = lr(l));
      else if (f === "submit" || f === "reset") {
        i.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ze(i, t.type, l) : t.hasOwnProperty("defaultValue") && Ze(i, t.type, Ra(t.defaultValue)), t.checked == null && t.defaultChecked != null && (i.defaultChecked = !!t.defaultChecked);
    }
    function fe(e, t, i) {
      var a = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, f = l === "submit" || l === "reset";
        if (f && (t.value === void 0 || t.value === null))
          return;
        var v = lr(a._wrapperState.initialValue);
        i || v !== a.value && (a.value = v), a.defaultValue = v;
      }
      var m = a.name;
      m !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, m !== "" && (a.name = m);
    }
    function et(e, t) {
      var i = e;
      X(i, t), be(i, t);
    }
    function be(e, t) {
      var i = t.name;
      if (t.type === "radio" && i != null) {
        for (var a = e; a.parentNode; )
          a = a.parentNode;
        _r(i, "name");
        for (var l = a.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), f = 0; f < l.length; f++) {
          var v = l[f];
          if (!(v === e || v.form !== e.form)) {
            var m = rm(v);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            eu(v), X(v, m);
          }
        }
      }
    }
    function Ze(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Do(e.ownerDocument) !== e) && (i == null ? e.defaultValue = lr(e._wrapperState.initialValue) : e.defaultValue !== lr(i) && (e.defaultValue = lr(i)));
    }
    var Dt = !1, jt = !1, ln = !1;
    function rn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || jt || (jt = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ln || (ln = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Dt && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Dt = !0);
    }
    function un(e, t) {
      t.value != null && e.setAttribute("value", lr(Ra(t.value)));
    }
    var cn = Array.isArray;
    function zt(e) {
      return cn(e);
    }
    var Wa;
    Wa = !1;
    function nu() {
      var e = Wr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ss = ["value", "defaultValue"];
    function hd(e) {
      {
        Ia("select", e);
        for (var t = 0; t < ss.length; t++) {
          var i = ss[t];
          if (e[i] != null) {
            var a = zt(e[i]);
            e.multiple && !a ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, nu()) : !e.multiple && a && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, nu());
          }
        }
      }
    }
    function pa(e, t, i, a) {
      var l = e.options;
      if (t) {
        for (var f = i, v = {}, m = 0; m < f.length; m++)
          v["$" + f[m]] = !0;
        for (var b = 0; b < l.length; b++) {
          var w = v.hasOwnProperty("$" + l[b].value);
          l[b].selected !== w && (l[b].selected = w), w && a && (l[b].defaultSelected = !0);
        }
      } else {
        for (var R = lr(Ra(i)), U = null, N = 0; N < l.length; N++) {
          if (l[N].value === R) {
            l[N].selected = !0, a && (l[N].defaultSelected = !0);
            return;
          }
          U === null && !l[N].disabled && (U = l[N]);
        }
        U !== null && (U.selected = !0);
      }
    }
    function cs(e, t) {
      return _t({}, t, {
        value: void 0
      });
    }
    function fs(e, t) {
      var i = e;
      hd(t), i._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Wa && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Wa = !0);
    }
    function md(e, t) {
      var i = e;
      i.multiple = !!t.multiple;
      var a = t.value;
      a != null ? pa(i, !!t.multiple, a, !1) : t.defaultValue != null && pa(i, !!t.multiple, t.defaultValue, !0);
    }
    function Ay(e, t) {
      var i = e, a = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? pa(i, !!t.multiple, l, !1) : a !== !!t.multiple && (t.defaultValue != null ? pa(i, !!t.multiple, t.defaultValue, !0) : pa(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function $y(e, t) {
      var i = e, a = t.value;
      a != null && pa(i, !!t.multiple, a, !1);
    }
    var yd = !1;
    function gd(e, t) {
      var i = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var a = _t({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: lr(i._wrapperState.initialValue)
      });
      return a;
    }
    function _v(e, t) {
      var i = e;
      Ia("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !yd && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Wr() || "A component"), yd = !0);
      var a = t.value;
      if (a == null) {
        var l = t.children, f = t.defaultValue;
        if (l != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (f != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (zt(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            f = l;
          }
        }
        f == null && (f = ""), a = f;
      }
      i._wrapperState = {
        initialValue: Ra(a)
      };
    }
    function Dv(e, t) {
      var i = e, a = Ra(t.value), l = Ra(t.defaultValue);
      if (a != null) {
        var f = lr(a);
        f !== i.value && (i.value = f), t.defaultValue == null && i.defaultValue !== f && (i.defaultValue = f);
      }
      l != null && (i.defaultValue = lr(l));
    }
    function Ov(e, t) {
      var i = e, a = i.textContent;
      a === i._wrapperState.initialValue && a !== "" && a !== null && (i.value = a);
    }
    function bd(e, t) {
      Dv(e, t);
    }
    var Ya = "http://www.w3.org/1999/xhtml", Ny = "http://www.w3.org/1998/Math/MathML", Sd = "http://www.w3.org/2000/svg";
    function gc(e) {
      switch (e) {
        case "svg":
          return Sd;
        case "math":
          return Ny;
        default:
          return Ya;
      }
    }
    function Ed(e, t) {
      return e == null || e === Ya ? gc(t) : e === Sd && t === "foreignObject" ? Ya : e;
    }
    var zy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, a, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, a, l);
        });
      } : e;
    }, bc, Lv = zy(function(e, t) {
      if (e.namespaceURI === Sd && !("innerHTML" in e)) {
        bc = bc || document.createElement("div"), bc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = bc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ui = 1, Ga = 3, Bn = 8, va = 9, al = 11, Sc = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === Ga) {
          i.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Mv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, ru = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Av(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var $v = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ru).forEach(function(e) {
      $v.forEach(function(t) {
        ru[Av(t, e)] = ru[e];
      });
    });
    function Ec(e, t, i) {
      var a = t == null || typeof t == "boolean" || t === "";
      return a ? "" : !i && typeof t == "number" && t !== 0 && !(ru.hasOwnProperty(e) && ru[e]) ? t + "px" : (ir(t, e), ("" + t).trim());
    }
    var iu = /([A-Z])/g, Uy = /^ms-/;
    function Py(e) {
      return e.replace(iu, "-$1").toLowerCase().replace(Uy, "-ms-");
    }
    var Nv = function() {
    };
    {
      var zv = /^(?:webkit|moz|o)[A-Z]/, Uv = /^-ms-/, ds = /-(.)/g, au = /;\s*$/, ou = {}, lu = {}, Pv = !1, Cd = !1, wd = function(e) {
        return e.replace(ds, function(t, i) {
          return i.toUpperCase();
        });
      }, Td = function(e) {
        ou.hasOwnProperty(e) && ou[e] || (ou[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          wd(e.replace(Uv, "ms-"))
        ));
      }, Hv = function(e) {
        ou.hasOwnProperty(e) && ou[e] || (ou[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, jv = function(e, t) {
        lu.hasOwnProperty(t) && lu[t] || (lu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(au, "")));
      }, Fv = function(e, t) {
        Pv || (Pv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Hy = function(e, t) {
        Cd || (Cd = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Nv = function(e, t) {
        e.indexOf("-") > -1 ? Td(e) : zv.test(e) ? Hv(e) : au.test(t) && jv(e, t), typeof t == "number" && (isNaN(t) ? Fv(e, t) : isFinite(t) || Hy(e, t));
      };
    }
    var jy = Nv;
    function Fy(e) {
      {
        var t = "", i = "";
        for (var a in e)
          if (e.hasOwnProperty(a)) {
            var l = e[a];
            if (l != null) {
              var f = a.indexOf("--") === 0;
              t += i + (f ? a : Py(a)) + ":", t += Ec(a, l, f), i = ";";
            }
          }
        return t || null;
      }
    }
    function Vv(e, t) {
      var i = e.style;
      for (var a in t)
        if (t.hasOwnProperty(a)) {
          var l = a.indexOf("--") === 0;
          l || jy(a, t[a]);
          var f = Ec(a, t[a], l);
          a === "float" && (a = "cssFloat"), l ? i.setProperty(a, f) : i[a] = f;
        }
    }
    function Vy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ii(e) {
      var t = {};
      for (var i in e)
        for (var a = Mv[i] || [i], l = 0; l < a.length; l++)
          t[a[l]] = i;
      return t;
    }
    function ps(e, t) {
      {
        if (!t)
          return;
        var i = Ii(e), a = Ii(t), l = {};
        for (var f in i) {
          var v = i[f], m = a[f];
          if (m && v !== m) {
            var b = v + "," + m;
            if (l[b])
              continue;
            l[b] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Vy(e[v]) ? "Removing" : "Updating", v, m);
          }
        }
      }
    }
    var Iv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Bv = _t({
      menuitem: !0
    }, Iv), Wv = "__html";
    function Cc(e, t) {
      if (t) {
        if (Bv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Wv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Qa(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var wc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Yv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ha = {}, Rd = new RegExp("^(aria)-[" + Pe + "]*$"), vs = new RegExp("^(aria)[A-Z][" + Pe + "]*$");
    function xd(e, t) {
      {
        if (zn.call(ha, t) && ha[t])
          return !0;
        if (vs.test(t)) {
          var i = "aria-" + t.slice(4).toLowerCase(), a = Yv.hasOwnProperty(i) ? i : null;
          if (a == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ha[t] = !0, !0;
          if (t !== a)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), ha[t] = !0, !0;
        }
        if (Rd.test(t)) {
          var l = t.toLowerCase(), f = Yv.hasOwnProperty(l) ? l : null;
          if (f == null)
            return ha[t] = !0, !1;
          if (t !== f)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, f), ha[t] = !0, !0;
        }
      }
      return !0;
    }
    function Gv(e, t) {
      {
        var i = [];
        for (var a in t) {
          var l = xd(e, a);
          l || i.push(a);
        }
        var f = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e) : i.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e);
      }
    }
    function Tc(e, t) {
      Qa(e, t) || Gv(e, t);
    }
    var ol = !1;
    function kd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ol && (ol = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var _d = function() {
    };
    {
      var ur = {}, Dd = /^on./, Qv = /^on[^A-Z]/, qv = new RegExp("^(aria)-[" + Pe + "]*$"), Kv = new RegExp("^(aria)[A-Z][" + Pe + "]*$");
      _d = function(e, t, i, a) {
        if (zn.call(ur, t) && ur[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ur[t] = !0, !0;
        if (a != null) {
          var f = a.registrationNameDependencies, v = a.possibleRegistrationNames;
          if (f.hasOwnProperty(t))
            return !0;
          var m = v.hasOwnProperty(l) ? v[l] : null;
          if (m != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, m), ur[t] = !0, !0;
          if (Dd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), ur[t] = !0, !0;
        } else if (Dd.test(t))
          return Qv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ur[t] = !0, !0;
        if (qv.test(t) || Kv.test(t))
          return !0;
        if (l === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ur[t] = !0, !0;
        if (l === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ur[t] = !0, !0;
        if (l === "is" && i !== null && i !== void 0 && typeof i != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), ur[t] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ur[t] = !0, !0;
        var b = hr(t), w = b !== null && b.type === jr;
        if (wc.hasOwnProperty(l)) {
          var R = wc[l];
          if (R !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, R), ur[t] = !0, !0;
        } else if (!w && t !== l)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), ur[t] = !0, !0;
        return typeof i == "boolean" && or(t, i, b, !1) ? (i ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), ur[t] = !0, !0) : w ? !0 : or(t, i, b, !1) ? (ur[t] = !0, !1) : ((i === "false" || i === "true") && b !== null && b.type === pn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), ur[t] = !0), !0);
      };
    }
    var Xv = function(e, t, i) {
      {
        var a = [];
        for (var l in t) {
          var f = _d(e, l, t[l], i);
          f || a.push(l);
        }
        var v = a.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : a.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Zv(e, t, i) {
      Qa(e, t) || Xv(e, t, i);
    }
    var qa = 1, hs = 2, ll = 4, Iy = qa | hs | ll, ms = null;
    function ys(e) {
      ms !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ms = e;
    }
    function By() {
      ms === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ms = null;
    }
    function Jv(e) {
      return e === ms;
    }
    function Rc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ga ? t.parentNode : t;
    }
    var sn = null, Lo = null, Ka = null;
    function uu(e) {
      var t = Fu(e);
      if (t) {
        if (typeof sn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var a = rm(i);
          sn(t.stateNode, t.type, a);
        }
      }
    }
    function eh(e) {
      sn = e;
    }
    function xc(e) {
      Lo ? Ka ? Ka.push(e) : Ka = [e] : Lo = e;
    }
    function gs() {
      return Lo !== null || Ka !== null;
    }
    function bs() {
      if (Lo) {
        var e = Lo, t = Ka;
        if (Lo = null, Ka = null, uu(e), t)
          for (var i = 0; i < t.length; i++)
            uu(t[i]);
      }
    }
    var ul = function(e, t) {
      return e(t);
    }, Od = function() {
    }, Ld = !1;
    function Wy() {
      var e = gs();
      e && (Od(), bs());
    }
    function Md(e, t, i) {
      if (Ld)
        return e(t, i);
      Ld = !0;
      try {
        return ul(e, t, i);
      } finally {
        Ld = !1, Wy();
      }
    }
    function kc(e, t, i) {
      ul = e, Od = i;
    }
    function _c(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ad(e, t, i) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(i.disabled && _c(t));
        default:
          return !1;
      }
    }
    function sl(e, t) {
      var i = e.stateNode;
      if (i === null)
        return null;
      var a = rm(i);
      if (a === null)
        return null;
      var l = a[t];
      if (Ad(t, e.type, a))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Ss = !1;
    if (dn)
      try {
        var cl = {};
        Object.defineProperty(cl, "passive", {
          get: function() {
            Ss = !0;
          }
        }), window.addEventListener("test", cl, cl), window.removeEventListener("test", cl, cl);
      } catch {
        Ss = !1;
      }
    function th(e, t, i, a, l, f, v, m, b) {
      var w = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, w);
      } catch (R) {
        this.onError(R);
      }
    }
    var $d = th;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Nd = document.createElement("react");
      $d = function(t, i, a, l, f, v, m, b, w) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), U = !1, N = !0, W = window.event, Q = Object.getOwnPropertyDescriptor(window, "event");
        function Z() {
          Nd.removeEventListener(J, Xe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = W);
        }
        var Se = Array.prototype.slice.call(arguments, 3);
        function Xe() {
          U = !0, Z(), i.apply(a, Se), N = !1;
        }
        var Be, Ht = !1, At = !1;
        function j(F) {
          if (Be = F.error, Ht = !0, Be === null && F.colno === 0 && F.lineno === 0 && (At = !0), F.defaultPrevented && Be != null && typeof Be == "object")
            try {
              Be._suppressLogging = !0;
            } catch {
            }
        }
        var J = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", j), Nd.addEventListener(J, Xe, !1), R.initEvent(J, !1, !1), Nd.dispatchEvent(R), Q && Object.defineProperty(window, "event", Q), U && N && (Ht ? At && (Be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Be)), window.removeEventListener("error", j), !U)
          return Z(), th.apply(this, arguments);
      };
    }
    var Yy = $d, Mo = !1, ma = null, Es = !1, Ao = null, xa = {
      onError: function(e) {
        Mo = !0, ma = e;
      }
    };
    function fl(e, t, i, a, l, f, v, m, b) {
      Mo = !1, ma = null, Yy.apply(xa, arguments);
    }
    function Xa(e, t, i, a, l, f, v, m, b) {
      if (fl.apply(this, arguments), Mo) {
        var w = Ud();
        Es || (Es = !0, Ao = w);
      }
    }
    function zd() {
      if (Es) {
        var e = Ao;
        throw Es = !1, Ao = null, e;
      }
    }
    function Gy() {
      return Mo;
    }
    function Ud() {
      if (Mo) {
        var e = ma;
        return Mo = !1, ma = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bi(e) {
      return e._reactInternals;
    }
    function Cs(e) {
      return e._reactInternals !== void 0;
    }
    function su(e, t) {
      e._reactInternals = t;
    }
    var Ke = (
      /*                      */
      0
    ), $o = (
      /*                */
      1
    ), hn = (
      /*                    */
      2
    ), Et = (
      /*                       */
      4
    ), Xt = (
      /*                */
      16
    ), Jt = (
      /*                 */
      32
    ), ka = (
      /*                     */
      64
    ), ft = (
      /*                   */
      128
    ), Mn = (
      /*            */
      256
    ), si = (
      /*                          */
      512
    ), Wi = (
      /*                     */
      1024
    ), Sn = (
      /*                      */
      2048
    ), Yi = (
      /*                    */
      4096
    ), No = (
      /*                   */
      8192
    ), ws = (
      /*             */
      16384
    ), Dc = Sn | Et | ka | si | Wi | ws, nh = (
      /*               */
      32767
    ), ki = (
      /*                   */
      32768
    ), sr = (
      /*                */
      65536
    ), Ts = (
      /* */
      131072
    ), Pd = (
      /*                       */
      1048576
    ), Hd = (
      /*                    */
      2097152
    ), ci = (
      /*                 */
      4194304
    ), zo = (
      /*                */
      8388608
    ), fi = (
      /*               */
      16777216
    ), dl = (
      /*              */
      33554432
    ), cu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Et | Wi | 0
    ), di = hn | Et | Xt | Jt | si | Yi | No, Nr = Et | ka | si | No, Gi = Sn | Xt, yr = ci | zo | Hd, Za = d.ReactCurrentOwner;
    function _i(e) {
      var t = e, i = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var a = t;
        do
          t = a, (t.flags & (hn | Yi)) !== Ke && (i = t.return), a = t.return;
        while (a);
      }
      return t.tag === A ? i : null;
    }
    function jd(e) {
      if (e.tag === Oe) {
        var t = e.memoizedState;
        if (t === null) {
          var i = e.alternate;
          i !== null && (t = i.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Oc(e) {
      return e.tag === A ? e.stateNode.containerInfo : null;
    }
    function Fd(e) {
      return _i(e) === e;
    }
    function Di(e) {
      {
        var t = Za.current;
        if (t !== null && t.tag === L) {
          var i = t, a = i.stateNode;
          a._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", pt(i) || "A component"), a._warnedAboutRefsInRender = !0;
        }
      }
      var l = Bi(e);
      return l ? _i(l) === l : !1;
    }
    function pi(e) {
      if (_i(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function mn(e) {
      var t = e.alternate;
      if (!t) {
        var i = _i(e);
        if (i === null)
          throw new Error("Unable to find node on an unmounted component.");
        return i !== e ? null : e;
      }
      for (var a = e, l = t; ; ) {
        var f = a.return;
        if (f === null)
          break;
        var v = f.alternate;
        if (v === null) {
          var m = f.return;
          if (m !== null) {
            a = l = m;
            continue;
          }
          break;
        }
        if (f.child === v.child) {
          for (var b = f.child; b; ) {
            if (b === a)
              return pi(f), e;
            if (b === l)
              return pi(f), t;
            b = b.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== l.return)
          a = f, l = v;
        else {
          for (var w = !1, R = f.child; R; ) {
            if (R === a) {
              w = !0, a = f, l = v;
              break;
            }
            if (R === l) {
              w = !0, l = f, a = v;
              break;
            }
            R = R.sibling;
          }
          if (!w) {
            for (R = v.child; R; ) {
              if (R === a) {
                w = !0, a = v, l = f;
                break;
              }
              if (R === l) {
                w = !0, l = v, a = f;
                break;
              }
              R = R.sibling;
            }
            if (!w)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (a.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (a.tag !== A)
        throw new Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Qi(e) {
      var t = mn(e);
      return t !== null ? Vd(t) : null;
    }
    function Vd(e) {
      if (e.tag === B || e.tag === se)
        return e;
      for (var t = e.child; t !== null; ) {
        var i = Vd(t);
        if (i !== null)
          return i;
        t = t.sibling;
      }
      return null;
    }
    function rh(e) {
      var t = mn(e);
      return t !== null ? Lc(t) : null;
    }
    function Lc(e) {
      if (e.tag === B || e.tag === se)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== K) {
          var i = Lc(t);
          if (i !== null)
            return i;
        }
        t = t.sibling;
      }
      return null;
    }
    var Mc = u.unstable_scheduleCallback, ih = u.unstable_cancelCallback, Ac = u.unstable_shouldYield, ah = u.unstable_requestPaint, kn = u.unstable_now, Id = u.unstable_getCurrentPriorityLevel, $c = u.unstable_ImmediatePriority, pl = u.unstable_UserBlockingPriority, _a = u.unstable_NormalPriority, oh = u.unstable_LowPriority, Nc = u.unstable_IdlePriority, fu = u.unstable_yieldValue, lh = u.unstable_setDisableYieldValue, Ja = null, Kn = null, he = null, qi = !1, Oi = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Bd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ge && (e = _t({}, e, {
          getLaneLabelMap: eo,
          injectProfilingHooks: uh
        })), Ja = t.inject(e), Kn = t;
      } catch (i) {
        g("React instrumentation encountered an error: %s.", i);
      }
      return !!t.checkDCE;
    }
    function Wd(e, t) {
      if (Kn && typeof Kn.onScheduleFiberRoot == "function")
        try {
          Kn.onScheduleFiberRoot(Ja, e, t);
        } catch (i) {
          qi || (qi = !0, g("React instrumentation encountered an error: %s", i));
        }
    }
    function du(e, t) {
      if (Kn && typeof Kn.onCommitFiberRoot == "function")
        try {
          var i = (e.current.flags & ft) === ft;
          if (ot) {
            var a;
            switch (t) {
              case jn:
                a = $c;
                break;
              case no:
                a = pl;
                break;
              case Da:
                a = _a;
                break;
              case Tu:
                a = Nc;
                break;
              default:
                a = _a;
                break;
            }
            Kn.onCommitFiberRoot(Ja, e, a, i);
          }
        } catch (l) {
          qi || (qi = !0, g("React instrumentation encountered an error: %s", l));
        }
    }
    function Ki(e) {
      if (Kn && typeof Kn.onPostCommitFiberRoot == "function")
        try {
          Kn.onPostCommitFiberRoot(Ja, e);
        } catch (t) {
          qi || (qi = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function vl(e) {
      if (Kn && typeof Kn.onCommitFiberUnmount == "function")
        try {
          Kn.onCommitFiberUnmount(Ja, e);
        } catch (t) {
          qi || (qi = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Wn(e) {
      if (typeof fu == "function" && (lh(e), S(e)), Kn && typeof Kn.setStrictMode == "function")
        try {
          Kn.setStrictMode(Ja, e);
        } catch (t) {
          qi || (qi = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function uh(e) {
      he = e;
    }
    function eo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, i = 0; i < Ds; i++) {
          var a = qy(t);
          e.set(t, a), t *= 2;
        }
        return e;
      }
    }
    function Uo(e) {
      he !== null && typeof he.markCommitStarted == "function" && he.markCommitStarted(e);
    }
    function zc() {
      he !== null && typeof he.markCommitStopped == "function" && he.markCommitStopped();
    }
    function pu(e) {
      he !== null && typeof he.markComponentRenderStarted == "function" && he.markComponentRenderStarted(e);
    }
    function vi() {
      he !== null && typeof he.markComponentRenderStopped == "function" && he.markComponentRenderStopped();
    }
    function Po(e) {
      he !== null && typeof he.markComponentPassiveEffectMountStarted == "function" && he.markComponentPassiveEffectMountStarted(e);
    }
    function Uc() {
      he !== null && typeof he.markComponentPassiveEffectMountStopped == "function" && he.markComponentPassiveEffectMountStopped();
    }
    function sh(e) {
      he !== null && typeof he.markComponentPassiveEffectUnmountStarted == "function" && he.markComponentPassiveEffectUnmountStarted(e);
    }
    function Pc() {
      he !== null && typeof he.markComponentPassiveEffectUnmountStopped == "function" && he.markComponentPassiveEffectUnmountStopped();
    }
    function ch(e) {
      he !== null && typeof he.markComponentLayoutEffectMountStarted == "function" && he.markComponentLayoutEffectMountStarted(e);
    }
    function Rs() {
      he !== null && typeof he.markComponentLayoutEffectMountStopped == "function" && he.markComponentLayoutEffectMountStopped();
    }
    function ya(e) {
      he !== null && typeof he.markComponentLayoutEffectUnmountStarted == "function" && he.markComponentLayoutEffectUnmountStarted(e);
    }
    function vu() {
      he !== null && typeof he.markComponentLayoutEffectUnmountStopped == "function" && he.markComponentLayoutEffectUnmountStopped();
    }
    function xs(e, t, i) {
      he !== null && typeof he.markComponentErrored == "function" && he.markComponentErrored(e, t, i);
    }
    function hl(e, t, i) {
      he !== null && typeof he.markComponentSuspended == "function" && he.markComponentSuspended(e, t, i);
    }
    function Yd(e) {
      he !== null && typeof he.markLayoutEffectsStarted == "function" && he.markLayoutEffectsStarted(e);
    }
    function hu() {
      he !== null && typeof he.markLayoutEffectsStopped == "function" && he.markLayoutEffectsStopped();
    }
    function fh(e) {
      he !== null && typeof he.markPassiveEffectsStarted == "function" && he.markPassiveEffectsStarted(e);
    }
    function Gd() {
      he !== null && typeof he.markPassiveEffectsStopped == "function" && he.markPassiveEffectsStopped();
    }
    function En(e) {
      he !== null && typeof he.markRenderStarted == "function" && he.markRenderStarted(e);
    }
    function Hc() {
      he !== null && typeof he.markRenderYielded == "function" && he.markRenderYielded();
    }
    function jc() {
      he !== null && typeof he.markRenderStopped == "function" && he.markRenderStopped();
    }
    function Qd(e) {
      he !== null && typeof he.markRenderScheduled == "function" && he.markRenderScheduled(e);
    }
    function Fc(e, t) {
      he !== null && typeof he.markForceUpdateScheduled == "function" && he.markForceUpdateScheduled(e, t);
    }
    function ks(e, t) {
      he !== null && typeof he.markStateUpdateScheduled == "function" && he.markStateUpdateScheduled(e, t);
    }
    var Fe = (
      /*                         */
      0
    ), Ie = (
      /*                 */
      1
    ), dt = (
      /*                    */
      2
    ), Ot = (
      /*               */
      8
    ), Li = (
      /*              */
      16
    ), mu = Math.clz32 ? Math.clz32 : zr, _s = Math.log, Qy = Math.LN2;
    function zr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (_s(t) / Qy | 0) | 0;
    }
    var Ds = 31, te = (
      /*                        */
      0
    ), Yn = (
      /*                          */
      0
    ), Ye = (
      /*                        */
      1
    ), gr = (
      /*    */
      2
    ), Mi = (
      /*             */
      4
    ), to = (
      /*            */
      8
    ), Xi = (
      /*                     */
      16
    ), yu = (
      /*                */
      32
    ), ml = (
      /*                       */
      4194240
    ), gu = (
      /*                        */
      64
    ), Vc = (
      /*                        */
      128
    ), Ic = (
      /*                        */
      256
    ), Bc = (
      /*                        */
      512
    ), Wc = (
      /*                        */
      1024
    ), Yc = (
      /*                        */
      2048
    ), yl = (
      /*                        */
      4096
    ), Gc = (
      /*                        */
      8192
    ), bu = (
      /*                        */
      16384
    ), Su = (
      /*                       */
      32768
    ), Qc = (
      /*                       */
      65536
    ), Os = (
      /*                       */
      131072
    ), qc = (
      /*                       */
      262144
    ), Kc = (
      /*                       */
      524288
    ), Xc = (
      /*                       */
      1048576
    ), Zc = (
      /*                       */
      2097152
    ), Eu = (
      /*                            */
      130023424
    ), gl = (
      /*                             */
      4194304
    ), Jc = (
      /*                             */
      8388608
    ), ef = (
      /*                             */
      16777216
    ), qd = (
      /*                             */
      33554432
    ), tf = (
      /*                             */
      67108864
    ), dh = gl, Ls = (
      /*          */
      134217728
    ), Kd = (
      /*                          */
      268435455
    ), Cu = (
      /*               */
      268435456
    ), Ho = (
      /*                        */
      536870912
    ), Ur = (
      /*                   */
      1073741824
    );
    function qy(e) {
      {
        if (e & Ye)
          return "Sync";
        if (e & gr)
          return "InputContinuousHydration";
        if (e & Mi)
          return "InputContinuous";
        if (e & to)
          return "DefaultHydration";
        if (e & Xi)
          return "Default";
        if (e & yu)
          return "TransitionHydration";
        if (e & ml)
          return "Transition";
        if (e & Eu)
          return "Retry";
        if (e & Ls)
          return "SelectiveHydration";
        if (e & Cu)
          return "IdleHydration";
        if (e & Ho)
          return "Idle";
        if (e & Ur)
          return "Offscreen";
      }
    }
    var fn = -1, nf = gu, hi = gl;
    function bl(e) {
      switch (Hn(e)) {
        case Ye:
          return Ye;
        case gr:
          return gr;
        case Mi:
          return Mi;
        case to:
          return to;
        case Xi:
          return Xi;
        case yu:
          return yu;
        case gu:
        case Vc:
        case Ic:
        case Bc:
        case Wc:
        case Yc:
        case yl:
        case Gc:
        case bu:
        case Su:
        case Qc:
        case Os:
        case qc:
        case Kc:
        case Xc:
        case Zc:
          return e & ml;
        case gl:
        case Jc:
        case ef:
        case qd:
        case tf:
          return e & Eu;
        case Ls:
          return Ls;
        case Cu:
          return Cu;
        case Ho:
          return Ho;
        case Ur:
          return Ur;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Sl(e, t) {
      var i = e.pendingLanes;
      if (i === te)
        return te;
      var a = te, l = e.suspendedLanes, f = e.pingedLanes, v = i & Kd;
      if (v !== te) {
        var m = v & ~l;
        if (m !== te)
          a = bl(m);
        else {
          var b = v & f;
          b !== te && (a = bl(b));
        }
      } else {
        var w = i & ~l;
        w !== te ? a = bl(w) : f !== te && (a = bl(f));
      }
      if (a === te)
        return te;
      if (t !== te && t !== a && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === te) {
        var R = Hn(a), U = Hn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          R >= U || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          R === Xi && (U & ml) !== te
        )
          return t;
      }
      (a & Mi) !== te && (a |= i & Xi);
      var N = e.entangledLanes;
      if (N !== te)
        for (var W = e.entanglements, Q = a & N; Q > 0; ) {
          var Z = Fo(Q), Se = 1 << Z;
          a |= W[Z], Q &= ~Se;
        }
      return a;
    }
    function ph(e, t) {
      for (var i = e.eventTimes, a = fn; t > 0; ) {
        var l = Fo(t), f = 1 << l, v = i[l];
        v > a && (a = v), t &= ~f;
      }
      return a;
    }
    function vh(e, t) {
      switch (e) {
        case Ye:
        case gr:
        case Mi:
          return t + 250;
        case to:
        case Xi:
        case yu:
        case gu:
        case Vc:
        case Ic:
        case Bc:
        case Wc:
        case Yc:
        case yl:
        case Gc:
        case bu:
        case Su:
        case Qc:
        case Os:
        case qc:
        case Kc:
        case Xc:
        case Zc:
          return t + 5e3;
        case gl:
        case Jc:
        case ef:
        case qd:
        case tf:
          return fn;
        case Ls:
        case Cu:
        case Ho:
        case Ur:
          return fn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), fn;
      }
    }
    function hh(e, t) {
      for (var i = e.pendingLanes, a = e.suspendedLanes, l = e.pingedLanes, f = e.expirationTimes, v = i; v > 0; ) {
        var m = Fo(v), b = 1 << m, w = f[m];
        w === fn ? ((b & a) === te || (b & l) !== te) && (f[m] = vh(b, t)) : w <= t && (e.expiredLanes |= b), v &= ~b;
      }
    }
    function Xd(e) {
      return bl(e.pendingLanes);
    }
    function jo(e) {
      var t = e.pendingLanes & ~Ur;
      return t !== te ? t : t & Ur ? Ur : te;
    }
    function Zd(e) {
      return (e & Ye) !== te;
    }
    function Ms(e) {
      return (e & Kd) !== te;
    }
    function mh(e) {
      return (e & Eu) === e;
    }
    function yh(e) {
      var t = Ye | Mi | Xi;
      return (e & t) === te;
    }
    function gh(e) {
      return (e & ml) === e;
    }
    function As(e, t) {
      var i = gr | Mi | to | Xi;
      return (t & i) !== te;
    }
    function bh(e, t) {
      return (t & e.expiredLanes) !== te;
    }
    function Jd(e) {
      return (e & ml) !== te;
    }
    function Sh() {
      var e = nf;
      return nf <<= 1, (nf & ml) === te && (nf = gu), e;
    }
    function mi() {
      var e = hi;
      return hi <<= 1, (hi & Eu) === te && (hi = gl), e;
    }
    function Hn(e) {
      return e & -e;
    }
    function wu(e) {
      return Hn(e);
    }
    function Fo(e) {
      return 31 - mu(e);
    }
    function rf(e) {
      return Fo(e);
    }
    function yi(e, t) {
      return (e & t) !== te;
    }
    function El(e, t) {
      return (e & t) === t;
    }
    function bt(e, t) {
      return e | t;
    }
    function $s(e, t) {
      return e & ~t;
    }
    function af(e, t) {
      return e & t;
    }
    function Ky(e) {
      return e;
    }
    function Eh(e, t) {
      return e !== Yn && e < t ? e : t;
    }
    function Ns(e) {
      for (var t = [], i = 0; i < Ds; i++)
        t.push(e);
      return t;
    }
    function Cl(e, t, i) {
      e.pendingLanes |= t, t !== Ho && (e.suspendedLanes = te, e.pingedLanes = te);
      var a = e.eventTimes, l = rf(t);
      a[l] = i;
    }
    function Ch(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var i = e.expirationTimes, a = t; a > 0; ) {
        var l = Fo(a), f = 1 << l;
        i[l] = fn, a &= ~f;
      }
    }
    function of(e, t, i) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function lf(e, t) {
      var i = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = te, e.pingedLanes = te, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var a = e.entanglements, l = e.eventTimes, f = e.expirationTimes, v = i; v > 0; ) {
        var m = Fo(v), b = 1 << m;
        a[m] = te, l[m] = fn, f[m] = fn, v &= ~b;
      }
    }
    function ep(e, t) {
      for (var i = e.entangledLanes |= t, a = e.entanglements, l = i; l; ) {
        var f = Fo(l), v = 1 << f;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        a[f] & t && (a[f] |= t), l &= ~v;
      }
    }
    function wh(e, t) {
      var i = Hn(t), a;
      switch (i) {
        case Mi:
          a = gr;
          break;
        case Xi:
          a = to;
          break;
        case gu:
        case Vc:
        case Ic:
        case Bc:
        case Wc:
        case Yc:
        case yl:
        case Gc:
        case bu:
        case Su:
        case Qc:
        case Os:
        case qc:
        case Kc:
        case Xc:
        case Zc:
        case gl:
        case Jc:
        case ef:
        case qd:
        case tf:
          a = yu;
          break;
        case Ho:
          a = Cu;
          break;
        default:
          a = Yn;
          break;
      }
      return (a & (e.suspendedLanes | t)) !== Yn ? Yn : a;
    }
    function uf(e, t, i) {
      if (Oi)
        for (var a = e.pendingUpdatersLaneMap; i > 0; ) {
          var l = rf(i), f = 1 << l, v = a[l];
          v.add(t), i &= ~f;
        }
    }
    function tp(e, t) {
      if (Oi)
        for (var i = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
          var l = rf(t), f = 1 << l, v = i[l];
          v.size > 0 && (v.forEach(function(m) {
            var b = m.alternate;
            (b === null || !a.has(b)) && a.add(m);
          }), v.clear()), t &= ~f;
        }
    }
    function zs(e, t) {
      return null;
    }
    var jn = Ye, no = Mi, Da = Xi, Tu = Ho, Ru = Yn;
    function Zi() {
      return Ru;
    }
    function An(e) {
      Ru = e;
    }
    function Pr(e, t) {
      var i = Ru;
      try {
        return Ru = e, t();
      } finally {
        Ru = i;
      }
    }
    function Xy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Zy(e, t) {
      return e > t ? e : t;
    }
    function xu(e, t) {
      return e !== 0 && e < t;
    }
    function br(e) {
      var t = Hn(e);
      return xu(jn, t) ? xu(no, t) ? Ms(t) ? Da : Tu : no : jn;
    }
    function sf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var De;
    function ku(e) {
      De = e;
    }
    function np(e) {
      De(e);
    }
    var cf;
    function Jy(e) {
      cf = e;
    }
    var _u;
    function ff(e) {
      _u = e;
    }
    var df;
    function Th(e) {
      df = e;
    }
    var rp;
    function Rh(e) {
      rp = e;
    }
    var Us = !1, Du = [], Cn = null, cr = null, Yr = null, Ou = /* @__PURE__ */ new Map(), Lu = /* @__PURE__ */ new Map(), fr = [], xh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Oa(e) {
      return xh.indexOf(e) > -1;
    }
    function eg(e, t, i, a, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: i,
        nativeEvent: l,
        targetContainers: [a]
      };
    }
    function ip(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Cn = null;
          break;
        case "dragenter":
        case "dragleave":
          cr = null;
          break;
        case "mouseover":
        case "mouseout":
          Yr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var i = t.pointerId;
          Ou.delete(i);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var a = t.pointerId;
          Lu.delete(a);
          break;
        }
      }
    }
    function Mu(e, t, i, a, l, f) {
      if (e === null || e.nativeEvent !== f) {
        var v = eg(t, i, a, l, f);
        if (t !== null) {
          var m = Fu(t);
          m !== null && cf(m);
        }
        return v;
      }
      e.eventSystemFlags |= a;
      var b = e.targetContainers;
      return l !== null && b.indexOf(l) === -1 && b.push(l), e;
    }
    function kh(e, t, i, a, l) {
      switch (t) {
        case "focusin": {
          var f = l;
          return Cn = Mu(Cn, e, t, i, a, f), !0;
        }
        case "dragenter": {
          var v = l;
          return cr = Mu(cr, e, t, i, a, v), !0;
        }
        case "mouseover": {
          var m = l;
          return Yr = Mu(Yr, e, t, i, a, m), !0;
        }
        case "pointerover": {
          var b = l, w = b.pointerId;
          return Ou.set(w, Mu(Ou.get(w) || null, e, t, i, a, b)), !0;
        }
        case "gotpointercapture": {
          var R = l, U = R.pointerId;
          return Lu.set(U, Mu(Lu.get(U) || null, e, t, i, a, R)), !0;
        }
      }
      return !1;
    }
    function ap(e) {
      var t = qs(e.target);
      if (t !== null) {
        var i = _i(t);
        if (i !== null) {
          var a = i.tag;
          if (a === Oe) {
            var l = jd(i);
            if (l !== null) {
              e.blockedOn = l, rp(e.priority, function() {
                _u(i);
              });
              return;
            }
          } else if (a === A) {
            var f = i.stateNode;
            if (sf(f)) {
              e.blockedOn = Oc(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function tg(e) {
      for (var t = df(), i = {
        blockedOn: null,
        target: e,
        priority: t
      }, a = 0; a < fr.length && xu(t, fr[a].priority); a++)
        ;
      fr.splice(a, 0, i), a === 0 && ap(i);
    }
    function wl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var i = t[0], a = Hr(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
        if (a === null) {
          var l = e.nativeEvent, f = new l.constructor(l.type, l);
          ys(f), l.target.dispatchEvent(f), By();
        } else {
          var v = Fu(a);
          return v !== null && cf(v), e.blockedOn = a, !1;
        }
        t.shift();
      }
      return !0;
    }
    function pf(e, t, i) {
      wl(e) && i.delete(t);
    }
    function Ji() {
      Us = !1, Cn !== null && wl(Cn) && (Cn = null), cr !== null && wl(cr) && (cr = null), Yr !== null && wl(Yr) && (Yr = null), Ou.forEach(pf), Lu.forEach(pf);
    }
    function Mt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Us || (Us = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Ji)));
    }
    function $n(e) {
      if (Du.length > 0) {
        Mt(Du[0], e);
        for (var t = 1; t < Du.length; t++) {
          var i = Du[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      Cn !== null && Mt(Cn, e), cr !== null && Mt(cr, e), Yr !== null && Mt(Yr, e);
      var a = function(m) {
        return Mt(m, e);
      };
      Ou.forEach(a), Lu.forEach(a);
      for (var l = 0; l < fr.length; l++) {
        var f = fr[l];
        f.blockedOn === e && (f.blockedOn = null);
      }
      for (; fr.length > 0; ) {
        var v = fr[0];
        if (v.blockedOn !== null)
          break;
        ap(v), v.blockedOn === null && fr.shift();
      }
    }
    var yn = d.ReactCurrentBatchConfig, Xn = !0;
    function gi(e) {
      Xn = !!e;
    }
    function Au() {
      return Xn;
    }
    function Zn(e, t, i) {
      var a = vf(t), l;
      switch (a) {
        case jn:
          l = Ps;
          break;
        case no:
          l = Tl;
          break;
        case Da:
        default:
          l = $u;
          break;
      }
      return l.bind(null, t, i, e);
    }
    function Ps(e, t, i, a) {
      var l = Zi(), f = yn.transition;
      yn.transition = null;
      try {
        An(jn), $u(e, t, i, a);
      } finally {
        An(l), yn.transition = f;
      }
    }
    function Tl(e, t, i, a) {
      var l = Zi(), f = yn.transition;
      yn.transition = null;
      try {
        An(no), $u(e, t, i, a);
      } finally {
        An(l), yn.transition = f;
      }
    }
    function $u(e, t, i, a) {
      Xn && op(e, t, i, a);
    }
    function op(e, t, i, a) {
      var l = Hr(e, t, i, a);
      if (l === null) {
        gg(e, t, a, Vo, i), ip(e, a);
        return;
      }
      if (kh(l, e, t, i, a)) {
        a.stopPropagation();
        return;
      }
      if (ip(e, a), t & ll && Oa(e)) {
        for (; l !== null; ) {
          var f = Fu(l);
          f !== null && np(f);
          var v = Hr(e, t, i, a);
          if (v === null && gg(e, t, a, Vo, i), v === l)
            break;
          l = v;
        }
        l !== null && a.stopPropagation();
        return;
      }
      gg(e, t, a, null, i);
    }
    var Vo = null;
    function Hr(e, t, i, a) {
      Vo = null;
      var l = Rc(a), f = qs(l);
      if (f !== null) {
        var v = _i(f);
        if (v === null)
          f = null;
        else {
          var m = v.tag;
          if (m === Oe) {
            var b = jd(v);
            if (b !== null)
              return b;
            f = null;
          } else if (m === A) {
            var w = v.stateNode;
            if (sf(w))
              return Oc(v);
            f = null;
          } else v !== f && (f = null);
        }
      }
      return Vo = f, null;
    }
    function vf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return jn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return no;
        case "message": {
          var t = Id();
          switch (t) {
            case $c:
              return jn;
            case pl:
              return no;
            case _a:
            case oh:
              return Da;
            case Nc:
              return Tu;
            default:
              return Da;
          }
        }
        default:
          return Da;
      }
    }
    function Nu(e, t, i) {
      return e.addEventListener(t, i, !1), i;
    }
    function ro(e, t, i) {
      return e.addEventListener(t, i, !0), i;
    }
    function hf(e, t, i, a) {
      return e.addEventListener(t, i, {
        capture: !0,
        passive: a
      }), i;
    }
    function lp(e, t, i, a) {
      return e.addEventListener(t, i, {
        passive: a
      }), i;
    }
    var ea = null, zu = null, ta = null;
    function mf(e) {
      return ea = e, zu = js(), !0;
    }
    function Hs() {
      ea = null, zu = null, ta = null;
    }
    function yf() {
      if (ta)
        return ta;
      var e, t = zu, i = t.length, a, l = js(), f = l.length;
      for (e = 0; e < i && t[e] === l[e]; e++)
        ;
      var v = i - e;
      for (a = 1; a <= v && t[i - a] === l[f - a]; a++)
        ;
      var m = a > 1 ? 1 - a : void 0;
      return ta = l.slice(e, m), ta;
    }
    function js() {
      return "value" in ea ? ea.value : ea.textContent;
    }
    function Rl(e) {
      var t, i = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function dr() {
      return !0;
    }
    function io() {
      return !1;
    }
    function _n(e) {
      function t(i, a, l, f, v) {
        this._reactName = i, this._targetInst = l, this.type = a, this.nativeEvent = f, this.target = v, this.currentTarget = null;
        for (var m in e)
          if (e.hasOwnProperty(m)) {
            var b = e[m];
            b ? this[m] = b(f) : this[m] = f[m];
          }
        var w = f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1;
        return w ? this.isDefaultPrevented = dr : this.isDefaultPrevented = io, this.isPropagationStopped = io, this;
      }
      return _t(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = dr);
        },
        stopPropagation: function() {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = dr);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: dr
      }), t;
    }
    var Jn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, gf = _n(Jn), xl = _t({}, Jn, {
      view: 0,
      detail: 0
    }), up = _n(xl), sp, La, Uu;
    function cp(e) {
      e !== Uu && (Uu && e.type === "mousemove" ? (sp = e.screenX - Uu.screenX, La = e.screenY - Uu.screenY) : (sp = 0, La = 0), Uu = e);
    }
    var Ma = _t({}, xl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: fp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (cp(e), sp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : La;
      }
    }), bf = _n(Ma), kl = _t({}, Ma, {
      dataTransfer: 0
    }), _h = _n(kl), Dh = _t({}, xl, {
      relatedTarget: 0
    }), Fs = _n(Dh), Sf = _t({}, Jn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ng = _n(Sf), rg = _t({}, Jn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Oh = _n(rg), Lh = _t({}, Jn, {
      data: 0
    }), Io = _n(Lh), ig = Io, Pu = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Mh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Nn(e) {
      if (e.key) {
        var t = Pu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = Rl(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? Mh[e.keyCode] || "Unidentified" : "";
    }
    var ag = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Ah(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var a = ag[e];
      return a ? !!i[a] : !1;
    }
    function fp(e) {
      return Ah;
    }
    var og = _t({}, xl, {
      key: Nn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Rl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), $h = _n(og), Nh = _t({}, Ma, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), zh = _n(Nh), na = _t({}, xl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fp
    }), dp = _n(na), lg = _t({}, Jn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bo = _n(lg), Ef = _t({}, Ma, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), _l = _n(Ef), Cf = [9, 13, 27, 32], wf = 229, Vs = dn && "CompositionEvent" in window, Is = null;
    dn && "documentMode" in document && (Is = document.documentMode);
    var pp = dn && "TextEvent" in window && !Is, Uh = dn && (!Vs || Is && Is > 8 && Is <= 11), vp = 32, hp = String.fromCharCode(vp);
    function Tf() {
      nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), nr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), nr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), nr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Bs = !1;
    function Ph(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function mp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ug(e, t) {
      return e === "keydown" && t.keyCode === wf;
    }
    function yp(e, t) {
      switch (e) {
        case "keyup":
          return Cf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== wf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Rf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ws(e) {
      return e.locale === "ko";
    }
    var Wo = !1;
    function xf(e, t, i, a, l) {
      var f, v;
      if (Vs ? f = mp(t) : Wo ? yp(t, a) && (f = "onCompositionEnd") : ug(t, a) && (f = "onCompositionStart"), !f)
        return null;
      Uh && !Ws(a) && (!Wo && f === "onCompositionStart" ? Wo = mf(l) : f === "onCompositionEnd" && Wo && (v = yf()));
      var m = Bh(i, f);
      if (m.length > 0) {
        var b = new Io(f, t, null, a, l);
        if (e.push({
          event: b,
          listeners: m
        }), v)
          b.data = v;
        else {
          var w = Rf(a);
          w !== null && (b.data = w);
        }
      }
    }
    function Hh(e, t) {
      switch (e) {
        case "compositionend":
          return Rf(t);
        case "keypress":
          var i = t.which;
          return i !== vp ? null : (Bs = !0, hp);
        case "textInput":
          var a = t.data;
          return a === hp && Bs ? null : a;
        default:
          return null;
      }
    }
    function sg(e, t) {
      if (Wo) {
        if (e === "compositionend" || !Vs && yp(e, t)) {
          var i = yf();
          return Hs(), Wo = !1, i;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Ph(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Uh && !Ws(t) ? null : t.data;
        default:
          return null;
      }
    }
    function kf(e, t, i, a, l) {
      var f;
      if (pp ? f = Hh(t, a) : f = sg(t, a), !f)
        return null;
      var v = Bh(i, "onBeforeInput");
      if (v.length > 0) {
        var m = new ig("onBeforeInput", "beforeinput", null, a, l);
        e.push({
          event: m,
          listeners: v
        }), m.data = f;
      }
    }
    function cg(e, t, i, a, l, f, v) {
      xf(e, t, i, a, l), kf(e, t, i, a, l);
    }
    var Ys = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function jh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ys[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function _f(e) {
      if (!dn)
        return !1;
      var t = "on" + e, i = t in document;
      if (!i) {
        var a = document.createElement("div");
        a.setAttribute(t, "return;"), i = typeof a[t] == "function";
      }
      return i;
    }
    function n() {
      nr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, i, a) {
      xc(a);
      var l = Bh(t, "onChange");
      if (l.length > 0) {
        var f = new gf("onChange", "change", null, i, a);
        e.push({
          event: f,
          listeners: l
        });
      }
    }
    var o = null, s = null;
    function p(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function h(e) {
      var t = [];
      r(t, s, e, Rc(e)), Md(C, t);
    }
    function C(e) {
      WS(e, 0);
    }
    function k(e) {
      var t = $f(e);
      if (eu(t))
        return e;
    }
    function M(e, t) {
      if (e === "change")
        return t;
    }
    var G = !1;
    dn && (G = _f("input") && (!document.documentMode || document.documentMode > 9));
    function ie(e, t) {
      o = e, s = t, o.attachEvent("onpropertychange", re);
    }
    function ae() {
      o && (o.detachEvent("onpropertychange", re), o = null, s = null);
    }
    function re(e) {
      e.propertyName === "value" && k(s) && h(e);
    }
    function Re(e, t, i) {
      e === "focusin" ? (ae(), ie(t, i)) : e === "focusout" && ae();
    }
    function Me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return k(s);
    }
    function ze(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Fn(e, t) {
      if (e === "click")
        return k(t);
    }
    function H(e, t) {
      if (e === "input" || e === "change")
        return k(t);
    }
    function z(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ze(e, "number", e.value);
    }
    function I(e, t, i, a, l, f, v) {
      var m = i ? $f(i) : window, b, w;
      if (p(m) ? b = M : jh(m) ? G ? b = H : (b = Me, w = Re) : ze(m) && (b = Fn), b) {
        var R = b(t, i);
        if (R) {
          r(e, R, a, l);
          return;
        }
      }
      w && w(t, m, i), t === "focusout" && z(m);
    }
    function pe() {
      rr("onMouseEnter", ["mouseout", "mouseover"]), rr("onMouseLeave", ["mouseout", "mouseover"]), rr("onPointerEnter", ["pointerout", "pointerover"]), rr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ve(e, t, i, a, l, f, v) {
      var m = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
      if (m && !Jv(a)) {
        var w = a.relatedTarget || a.fromElement;
        if (w && (qs(w) || Lp(w)))
          return;
      }
      if (!(!b && !m)) {
        var R;
        if (l.window === l)
          R = l;
        else {
          var U = l.ownerDocument;
          U ? R = U.defaultView || U.parentWindow : R = window;
        }
        var N, W;
        if (b) {
          var Q = a.relatedTarget || a.toElement;
          if (N = i, W = Q ? qs(Q) : null, W !== null) {
            var Z = _i(W);
            (W !== Z || W.tag !== B && W.tag !== se) && (W = null);
          }
        } else
          N = null, W = i;
        if (N !== W) {
          var Se = bf, Xe = "onMouseLeave", Be = "onMouseEnter", Ht = "mouse";
          (t === "pointerout" || t === "pointerover") && (Se = zh, Xe = "onPointerLeave", Be = "onPointerEnter", Ht = "pointer");
          var At = N == null ? R : $f(N), j = W == null ? R : $f(W), J = new Se(Xe, Ht + "leave", N, a, l);
          J.target = At, J.relatedTarget = j;
          var F = null, ue = qs(l);
          if (ue === i) {
            var ke = new Se(Be, Ht + "enter", W, a, l);
            ke.target = j, ke.relatedTarget = At, F = ke;
          }
          aR(e, J, F, N, W);
        }
      }
    }
    function tt(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ae = typeof Object.is == "function" ? Object.is : tt;
    function it(e, t) {
      if (Ae(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var i = Object.keys(e), a = Object.keys(t);
      if (i.length !== a.length)
        return !1;
      for (var l = 0; l < i.length; l++) {
        var f = i[l];
        if (!zn.call(t, f) || !Ae(e[f], t[f]))
          return !1;
      }
      return !0;
    }
    function er(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Gt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function ao(e, t) {
      for (var i = er(e), a = 0, l = 0; i; ) {
        if (i.nodeType === Ga) {
          if (l = a + i.textContent.length, a <= t && l >= t)
            return {
              node: i,
              offset: t - a
            };
          a = l;
        }
        i = er(Gt(i));
      }
    }
    function fg(e) {
      var t = e.ownerDocument, i = t && t.defaultView || window, a = i.getSelection && i.getSelection();
      if (!a || a.rangeCount === 0)
        return null;
      var l = a.anchorNode, f = a.anchorOffset, v = a.focusNode, m = a.focusOffset;
      try {
        l.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return HT(e, l, f, v, m);
    }
    function HT(e, t, i, a, l) {
      var f = 0, v = -1, m = -1, b = 0, w = 0, R = e, U = null;
      e: for (; ; ) {
        for (var N = null; R === t && (i === 0 || R.nodeType === Ga) && (v = f + i), R === a && (l === 0 || R.nodeType === Ga) && (m = f + l), R.nodeType === Ga && (f += R.nodeValue.length), (N = R.firstChild) !== null; )
          U = R, R = N;
        for (; ; ) {
          if (R === e)
            break e;
          if (U === t && ++b === i && (v = f), U === a && ++w === l && (m = f), (N = R.nextSibling) !== null)
            break;
          R = U, U = R.parentNode;
        }
        R = N;
      }
      return v === -1 || m === -1 ? null : {
        start: v,
        end: m
      };
    }
    function jT(e, t) {
      var i = e.ownerDocument || document, a = i && i.defaultView || window;
      if (a.getSelection) {
        var l = a.getSelection(), f = e.textContent.length, v = Math.min(t.start, f), m = t.end === void 0 ? v : Math.min(t.end, f);
        if (!l.extend && v > m) {
          var b = m;
          m = v, v = b;
        }
        var w = ao(e, v), R = ao(e, m);
        if (w && R) {
          if (l.rangeCount === 1 && l.anchorNode === w.node && l.anchorOffset === w.offset && l.focusNode === R.node && l.focusOffset === R.offset)
            return;
          var U = i.createRange();
          U.setStart(w.node, w.offset), l.removeAllRanges(), v > m ? (l.addRange(U), l.extend(R.node, R.offset)) : (U.setEnd(R.node, R.offset), l.addRange(U));
        }
      }
    }
    function AS(e) {
      return e && e.nodeType === Ga;
    }
    function $S(e, t) {
      return !e || !t ? !1 : e === t ? !0 : AS(e) ? !1 : AS(t) ? $S(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function FT(e) {
      return e && e.ownerDocument && $S(e.ownerDocument.documentElement, e);
    }
    function VT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function NS() {
      for (var e = window, t = Do(); t instanceof e.HTMLIFrameElement; ) {
        if (VT(t))
          e = t.contentWindow;
        else
          return t;
        t = Do(e.document);
      }
      return t;
    }
    function dg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function IT() {
      var e = NS();
      return {
        focusedElem: e,
        selectionRange: dg(e) ? WT(e) : null
      };
    }
    function BT(e) {
      var t = NS(), i = e.focusedElem, a = e.selectionRange;
      if (t !== i && FT(i)) {
        a !== null && dg(i) && YT(i, a);
        for (var l = [], f = i; f = f.parentNode; )
          f.nodeType === ui && l.push({
            element: f,
            left: f.scrollLeft,
            top: f.scrollTop
          });
        typeof i.focus == "function" && i.focus();
        for (var v = 0; v < l.length; v++) {
          var m = l[v];
          m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
        }
      }
    }
    function WT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = fg(e), t || {
        start: 0,
        end: 0
      };
    }
    function YT(e, t) {
      var i = t.start, a = t.end;
      a === void 0 && (a = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(a, e.value.length)) : jT(e, t);
    }
    var GT = dn && "documentMode" in document && document.documentMode <= 11;
    function QT() {
      nr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Df = null, pg = null, gp = null, vg = !1;
    function qT(e) {
      if ("selectionStart" in e && dg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, i = t.getSelection();
      return {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      };
    }
    function KT(e) {
      return e.window === e ? e.document : e.nodeType === va ? e : e.ownerDocument;
    }
    function zS(e, t, i) {
      var a = KT(i);
      if (!(vg || Df == null || Df !== Do(a))) {
        var l = qT(Df);
        if (!gp || !it(gp, l)) {
          gp = l;
          var f = Bh(pg, "onSelect");
          if (f.length > 0) {
            var v = new gf("onSelect", "select", null, t, i);
            e.push({
              event: v,
              listeners: f
            }), v.target = Df;
          }
        }
      }
    }
    function XT(e, t, i, a, l, f, v) {
      var m = i ? $f(i) : window;
      switch (t) {
        case "focusin":
          (jh(m) || m.contentEditable === "true") && (Df = m, pg = i, gp = null);
          break;
        case "focusout":
          Df = null, pg = null, gp = null;
          break;
        case "mousedown":
          vg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          vg = !1, zS(e, a, l);
          break;
        case "selectionchange":
          if (GT)
            break;
        case "keydown":
        case "keyup":
          zS(e, a, l);
      }
    }
    function Fh(e, t) {
      var i = {};
      return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
    }
    var Of = {
      animationend: Fh("Animation", "AnimationEnd"),
      animationiteration: Fh("Animation", "AnimationIteration"),
      animationstart: Fh("Animation", "AnimationStart"),
      transitionend: Fh("Transition", "TransitionEnd")
    }, hg = {}, US = {};
    dn && (US = document.createElement("div").style, "AnimationEvent" in window || (delete Of.animationend.animation, delete Of.animationiteration.animation, delete Of.animationstart.animation), "TransitionEvent" in window || delete Of.transitionend.transition);
    function Vh(e) {
      if (hg[e])
        return hg[e];
      if (!Of[e])
        return e;
      var t = Of[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in US)
          return hg[e] = t[i];
      return e;
    }
    var PS = Vh("animationend"), HS = Vh("animationiteration"), jS = Vh("animationstart"), FS = Vh("transitionend"), VS = /* @__PURE__ */ new Map(), IS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Hu(e, t) {
      VS.set(e, t), nr(t, [e]);
    }
    function ZT() {
      for (var e = 0; e < IS.length; e++) {
        var t = IS[e], i = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
        Hu(i, "on" + a);
      }
      Hu(PS, "onAnimationEnd"), Hu(HS, "onAnimationIteration"), Hu(jS, "onAnimationStart"), Hu("dblclick", "onDoubleClick"), Hu("focusin", "onFocus"), Hu("focusout", "onBlur"), Hu(FS, "onTransitionEnd");
    }
    function JT(e, t, i, a, l, f, v) {
      var m = VS.get(t);
      if (m !== void 0) {
        var b = gf, w = t;
        switch (t) {
          case "keypress":
            if (Rl(a) === 0)
              return;
          case "keydown":
          case "keyup":
            b = $h;
            break;
          case "focusin":
            w = "focus", b = Fs;
            break;
          case "focusout":
            w = "blur", b = Fs;
            break;
          case "beforeblur":
          case "afterblur":
            b = Fs;
            break;
          case "click":
            if (a.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = bf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = _h;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = dp;
            break;
          case PS:
          case HS:
          case jS:
            b = ng;
            break;
          case FS:
            b = Bo;
            break;
          case "scroll":
            b = up;
            break;
          case "wheel":
            b = _l;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = Oh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = zh;
            break;
        }
        var R = (f & ll) !== 0;
        {
          var U = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", N = rR(i, m, a.type, R, U);
          if (N.length > 0) {
            var W = new b(m, w, null, a, l);
            e.push({
              event: W,
              listeners: N
            });
          }
        }
      }
    }
    ZT(), pe(), n(), QT(), Tf();
    function eR(e, t, i, a, l, f, v) {
      JT(e, t, i, a, l, f);
      var m = (f & Iy) === 0;
      m && (Ve(e, t, i, a, l), I(e, t, i, a, l), XT(e, t, i, a, l), cg(e, t, i, a, l));
    }
    var bp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], mg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(bp));
    function BS(e, t, i) {
      var a = e.type || "unknown-event";
      e.currentTarget = i, Xa(a, t, void 0, e), e.currentTarget = null;
    }
    function tR(e, t, i) {
      var a;
      if (i)
        for (var l = t.length - 1; l >= 0; l--) {
          var f = t[l], v = f.instance, m = f.currentTarget, b = f.listener;
          if (v !== a && e.isPropagationStopped())
            return;
          BS(e, b, m), a = v;
        }
      else
        for (var w = 0; w < t.length; w++) {
          var R = t[w], U = R.instance, N = R.currentTarget, W = R.listener;
          if (U !== a && e.isPropagationStopped())
            return;
          BS(e, W, N), a = U;
        }
    }
    function WS(e, t) {
      for (var i = (t & ll) !== 0, a = 0; a < e.length; a++) {
        var l = e[a], f = l.event, v = l.listeners;
        tR(f, v, i);
      }
      zd();
    }
    function nR(e, t, i, a, l) {
      var f = Rc(i), v = [];
      eR(v, e, a, i, f, t), WS(v, t);
    }
    function Dn(e, t) {
      mg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var i = !1, a = Mx(t), l = oR(e);
      a.has(l) || (YS(t, e, hs, i), a.add(l));
    }
    function yg(e, t, i) {
      mg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var a = 0;
      t && (a |= ll), YS(i, e, a, t);
    }
    var Ih = "_reactListening" + Math.random().toString(36).slice(2);
    function Sp(e) {
      if (!e[Ih]) {
        e[Ih] = !0, wt.forEach(function(i) {
          i !== "selectionchange" && (mg.has(i) || yg(i, !1, e), yg(i, !0, e));
        });
        var t = e.nodeType === va ? e : e.ownerDocument;
        t !== null && (t[Ih] || (t[Ih] = !0, yg("selectionchange", !1, t)));
      }
    }
    function YS(e, t, i, a, l) {
      var f = Zn(e, t, i), v = void 0;
      Ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, a ? v !== void 0 ? hf(e, t, f, v) : ro(e, t, f) : v !== void 0 ? lp(e, t, f, v) : Nu(e, t, f);
    }
    function GS(e, t) {
      return e === t || e.nodeType === Bn && e.parentNode === t;
    }
    function gg(e, t, i, a, l) {
      var f = a;
      if (!(t & qa) && !(t & hs)) {
        var v = l;
        if (a !== null) {
          var m = a;
          e: for (; ; ) {
            if (m === null)
              return;
            var b = m.tag;
            if (b === A || b === K) {
              var w = m.stateNode.containerInfo;
              if (GS(w, v))
                break;
              if (b === K)
                for (var R = m.return; R !== null; ) {
                  var U = R.tag;
                  if (U === A || U === K) {
                    var N = R.stateNode.containerInfo;
                    if (GS(N, v))
                      return;
                  }
                  R = R.return;
                }
              for (; w !== null; ) {
                var W = qs(w);
                if (W === null)
                  return;
                var Q = W.tag;
                if (Q === B || Q === se) {
                  m = f = W;
                  continue e;
                }
                w = w.parentNode;
              }
            }
            m = m.return;
          }
        }
      }
      Md(function() {
        return nR(e, t, i, f);
      });
    }
    function Ep(e, t, i) {
      return {
        instance: e,
        listener: t,
        currentTarget: i
      };
    }
    function rR(e, t, i, a, l, f) {
      for (var v = t !== null ? t + "Capture" : null, m = a ? v : t, b = [], w = e, R = null; w !== null; ) {
        var U = w, N = U.stateNode, W = U.tag;
        if (W === B && N !== null && (R = N, m !== null)) {
          var Q = sl(w, m);
          Q != null && b.push(Ep(w, Q, R));
        }
        if (l)
          break;
        w = w.return;
      }
      return b;
    }
    function Bh(e, t) {
      for (var i = t + "Capture", a = [], l = e; l !== null; ) {
        var f = l, v = f.stateNode, m = f.tag;
        if (m === B && v !== null) {
          var b = v, w = sl(l, i);
          w != null && a.unshift(Ep(l, w, b));
          var R = sl(l, t);
          R != null && a.push(Ep(l, R, b));
        }
        l = l.return;
      }
      return a;
    }
    function Lf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== B);
      return e || null;
    }
    function iR(e, t) {
      for (var i = e, a = t, l = 0, f = i; f; f = Lf(f))
        l++;
      for (var v = 0, m = a; m; m = Lf(m))
        v++;
      for (; l - v > 0; )
        i = Lf(i), l--;
      for (; v - l > 0; )
        a = Lf(a), v--;
      for (var b = l; b--; ) {
        if (i === a || a !== null && i === a.alternate)
          return i;
        i = Lf(i), a = Lf(a);
      }
      return null;
    }
    function QS(e, t, i, a, l) {
      for (var f = t._reactName, v = [], m = i; m !== null && m !== a; ) {
        var b = m, w = b.alternate, R = b.stateNode, U = b.tag;
        if (w !== null && w === a)
          break;
        if (U === B && R !== null) {
          var N = R;
          if (l) {
            var W = sl(m, f);
            W != null && v.unshift(Ep(m, W, N));
          } else if (!l) {
            var Q = sl(m, f);
            Q != null && v.push(Ep(m, Q, N));
          }
        }
        m = m.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function aR(e, t, i, a, l) {
      var f = a && l ? iR(a, l) : null;
      a !== null && QS(e, t, a, f, !1), l !== null && i !== null && QS(e, i, l, f, !0);
    }
    function oR(e, t) {
      return e + "__bubble";
    }
    var ra = !1, Cp = "dangerouslySetInnerHTML", Wh = "suppressContentEditableWarning", ju = "suppressHydrationWarning", qS = "autoFocus", Gs = "children", Qs = "style", Yh = "__html", bg, Gh, wp, KS, Qh, XS, ZS;
    bg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Gh = function(e, t) {
      Tc(e, t), kd(e, t), Zv(e, t, {
        registrationNameDependencies: Tt,
        possibleRegistrationNames: tn
      });
    }, XS = dn && !document.documentMode, wp = function(e, t, i) {
      if (!ra) {
        var a = qh(i), l = qh(t);
        l !== a && (ra = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(a)));
      }
    }, KS = function(e) {
      if (!ra) {
        ra = !0;
        var t = [];
        e.forEach(function(i) {
          t.push(i);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Qh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, ZS = function(e, t) {
      var i = e.namespaceURI === Ya ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return i.innerHTML = t, i.innerHTML;
    };
    var lR = /\r\n?/g, uR = /\u0000|\uFFFD/g;
    function qh(e) {
      Or(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(lR, `
`).replace(uR, "");
    }
    function Kh(e, t, i, a) {
      var l = qh(t), f = qh(e);
      if (f !== l && (a && (ra || (ra = !0, g('Text content did not match. Server: "%s" Client: "%s"', f, l))), i && we))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function JS(e) {
      return e.nodeType === va ? e : e.ownerDocument;
    }
    function sR() {
    }
    function Xh(e) {
      e.onclick = sR;
    }
    function cR(e, t, i, a, l) {
      for (var f in a)
        if (a.hasOwnProperty(f)) {
          var v = a[f];
          if (f === Qs)
            v && Object.freeze(v), Vv(t, v);
          else if (f === Cp) {
            var m = v ? v[Yh] : void 0;
            m != null && Lv(t, m);
          } else if (f === Gs)
            if (typeof v == "string") {
              var b = e !== "textarea" || v !== "";
              b && Sc(t, v);
            } else typeof v == "number" && Sc(t, "" + v);
          else f === Wh || f === ju || f === qS || (Tt.hasOwnProperty(f) ? v != null && (typeof v != "function" && Qh(f, v), f === "onScroll" && Dn("scroll", t)) : v != null && $r(t, f, v, l));
        }
    }
    function fR(e, t, i, a) {
      for (var l = 0; l < t.length; l += 2) {
        var f = t[l], v = t[l + 1];
        f === Qs ? Vv(e, v) : f === Cp ? Lv(e, v) : f === Gs ? Sc(e, v) : $r(e, f, v, a);
      }
    }
    function dR(e, t, i, a) {
      var l, f = JS(i), v, m = a;
      if (m === Ya && (m = gc(e)), m === Ya) {
        if (l = Qa(e, t), !l && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var b = f.createElement("div");
          b.innerHTML = "<script><\/script>";
          var w = b.firstChild;
          v = b.removeChild(w);
        } else if (typeof t.is == "string")
          v = f.createElement(e, {
            is: t.is
          });
        else if (v = f.createElement(e), e === "select") {
          var R = v;
          t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
        }
      } else
        v = f.createElementNS(m, e);
      return m === Ya && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !zn.call(bg, e) && (bg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function pR(e, t) {
      return JS(t).createTextNode(e);
    }
    function vR(e, t, i, a) {
      var l = Qa(t, i);
      Gh(t, i);
      var f;
      switch (t) {
        case "dialog":
          Dn("cancel", e), Dn("close", e), f = i;
          break;
        case "iframe":
        case "object":
        case "embed":
          Dn("load", e), f = i;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < bp.length; v++)
            Dn(bp[v], e);
          f = i;
          break;
        case "source":
          Dn("error", e), f = i;
          break;
        case "img":
        case "image":
        case "link":
          Dn("error", e), Dn("load", e), f = i;
          break;
        case "details":
          Dn("toggle", e), f = i;
          break;
        case "input":
          D(e, i), f = E(e, i), Dn("invalid", e);
          break;
        case "option":
          rn(e, i), f = i;
          break;
        case "select":
          fs(e, i), f = cs(e, i), Dn("invalid", e);
          break;
        case "textarea":
          _v(e, i), f = gd(e, i), Dn("invalid", e);
          break;
        default:
          f = i;
      }
      switch (Cc(t, f), cR(t, e, a, f, l), t) {
        case "input":
          Vi(e), fe(e, i, !1);
          break;
        case "textarea":
          Vi(e), Ov(e);
          break;
        case "option":
          un(e, i);
          break;
        case "select":
          md(e, i);
          break;
        default:
          typeof f.onClick == "function" && Xh(e);
          break;
      }
    }
    function hR(e, t, i, a, l) {
      Gh(t, a);
      var f = null, v, m;
      switch (t) {
        case "input":
          v = E(e, i), m = E(e, a), f = [];
          break;
        case "select":
          v = cs(e, i), m = cs(e, a), f = [];
          break;
        case "textarea":
          v = gd(e, i), m = gd(e, a), f = [];
          break;
        default:
          v = i, m = a, typeof v.onClick != "function" && typeof m.onClick == "function" && Xh(e);
          break;
      }
      Cc(t, m);
      var b, w, R = null;
      for (b in v)
        if (!(m.hasOwnProperty(b) || !v.hasOwnProperty(b) || v[b] == null))
          if (b === Qs) {
            var U = v[b];
            for (w in U)
              U.hasOwnProperty(w) && (R || (R = {}), R[w] = "");
          } else b === Cp || b === Gs || b === Wh || b === ju || b === qS || (Tt.hasOwnProperty(b) ? f || (f = []) : (f = f || []).push(b, null));
      for (b in m) {
        var N = m[b], W = v != null ? v[b] : void 0;
        if (!(!m.hasOwnProperty(b) || N === W || N == null && W == null))
          if (b === Qs)
            if (N && Object.freeze(N), W) {
              for (w in W)
                W.hasOwnProperty(w) && (!N || !N.hasOwnProperty(w)) && (R || (R = {}), R[w] = "");
              for (w in N)
                N.hasOwnProperty(w) && W[w] !== N[w] && (R || (R = {}), R[w] = N[w]);
            } else
              R || (f || (f = []), f.push(b, R)), R = N;
          else if (b === Cp) {
            var Q = N ? N[Yh] : void 0, Z = W ? W[Yh] : void 0;
            Q != null && Z !== Q && (f = f || []).push(b, Q);
          } else b === Gs ? (typeof N == "string" || typeof N == "number") && (f = f || []).push(b, "" + N) : b === Wh || b === ju || (Tt.hasOwnProperty(b) ? (N != null && (typeof N != "function" && Qh(b, N), b === "onScroll" && Dn("scroll", e)), !f && W !== N && (f = [])) : (f = f || []).push(b, N));
      }
      return R && (ps(R, m[Qs]), (f = f || []).push(Qs, R)), f;
    }
    function mR(e, t, i, a, l) {
      i === "input" && l.type === "radio" && l.name != null && Y(e, l);
      var f = Qa(i, a), v = Qa(i, l);
      switch (fR(e, t, f, v), i) {
        case "input":
          X(e, l);
          break;
        case "textarea":
          Dv(e, l);
          break;
        case "select":
          Ay(e, l);
          break;
      }
    }
    function yR(e) {
      {
        var t = e.toLowerCase();
        return wc.hasOwnProperty(t) && wc[t] || null;
      }
    }
    function gR(e, t, i, a, l, f, v) {
      var m, b;
      switch (m = Qa(t, i), Gh(t, i), t) {
        case "dialog":
          Dn("cancel", e), Dn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Dn("load", e);
          break;
        case "video":
        case "audio":
          for (var w = 0; w < bp.length; w++)
            Dn(bp[w], e);
          break;
        case "source":
          Dn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Dn("error", e), Dn("load", e);
          break;
        case "details":
          Dn("toggle", e);
          break;
        case "input":
          D(e, i), Dn("invalid", e);
          break;
        case "option":
          rn(e, i);
          break;
        case "select":
          fs(e, i), Dn("invalid", e);
          break;
        case "textarea":
          _v(e, i), Dn("invalid", e);
          break;
      }
      Cc(t, i);
      {
        b = /* @__PURE__ */ new Set();
        for (var R = e.attributes, U = 0; U < R.length; U++) {
          var N = R[U].name.toLowerCase();
          switch (N) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              b.add(R[U].name);
          }
        }
      }
      var W = null;
      for (var Q in i)
        if (i.hasOwnProperty(Q)) {
          var Z = i[Q];
          if (Q === Gs)
            typeof Z == "string" ? e.textContent !== Z && (i[ju] !== !0 && Kh(e.textContent, Z, f, v), W = [Gs, Z]) : typeof Z == "number" && e.textContent !== "" + Z && (i[ju] !== !0 && Kh(e.textContent, Z, f, v), W = [Gs, "" + Z]);
          else if (Tt.hasOwnProperty(Q))
            Z != null && (typeof Z != "function" && Qh(Q, Z), Q === "onScroll" && Dn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var Se = void 0, Xe = m && Ne ? null : hr(Q);
            if (i[ju] !== !0) {
              if (!(Q === Wh || Q === ju || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Q === "value" || Q === "checked" || Q === "selected")) {
                if (Q === Cp) {
                  var Be = e.innerHTML, Ht = Z ? Z[Yh] : void 0;
                  if (Ht != null) {
                    var At = ZS(e, Ht);
                    At !== Be && wp(Q, Be, At);
                  }
                } else if (Q === Qs) {
                  if (b.delete(Q), XS) {
                    var j = Fy(Z);
                    Se = e.getAttribute("style"), j !== Se && wp(Q, Se, j);
                  }
                } else if (m && !Ne)
                  b.delete(Q.toLowerCase()), Se = Ar(e, Q, Z), Z !== Se && wp(Q, Se, Z);
                else if (!vn(Q, Xe, m) && !Kt(Q, Z, Xe, m)) {
                  var J = !1;
                  if (Xe !== null)
                    b.delete(Xe.attributeName), Se = Mr(e, Q, Z, Xe);
                  else {
                    var F = a;
                    if (F === Ya && (F = gc(t)), F === Ya)
                      b.delete(Q.toLowerCase());
                    else {
                      var ue = yR(Q);
                      ue !== null && ue !== Q && (J = !0, b.delete(ue)), b.delete(Q);
                    }
                    Se = Ar(e, Q, Z);
                  }
                  var ke = Ne;
                  !ke && Z !== Se && !J && wp(Q, Se, Z);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      b.size > 0 && i[ju] !== !0 && KS(b), t) {
        case "input":
          Vi(e), fe(e, i, !0);
          break;
        case "textarea":
          Vi(e), Ov(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && Xh(e);
          break;
      }
      return W;
    }
    function bR(e, t, i) {
      var a = e.nodeValue !== t;
      return a;
    }
    function Sg(e, t) {
      {
        if (ra)
          return;
        ra = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Eg(e, t) {
      {
        if (ra)
          return;
        ra = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Cg(e, t, i) {
      {
        if (ra)
          return;
        ra = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function wg(e, t) {
      {
        if (t === "" || ra)
          return;
        ra = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function SR(e, t, i) {
      switch (t) {
        case "input":
          et(e, i);
          return;
        case "textarea":
          bd(e, i);
          return;
        case "select":
          $y(e, i);
          return;
      }
    }
    var Tp = function() {
    }, Rp = function() {
    };
    {
      var ER = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], eE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], CR = eE.concat(["button"]), wR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], tE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Rp = function(e, t) {
        var i = _t({}, e || tE), a = {
          tag: t
        };
        return eE.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), CR.indexOf(t) !== -1 && (i.pTagInButtonScope = null), ER.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = a, t === "form" && (i.formTag = a), t === "a" && (i.aTagInScope = a), t === "button" && (i.buttonTagInScope = a), t === "nobr" && (i.nobrTagInScope = a), t === "p" && (i.pTagInButtonScope = a), t === "li" && (i.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = a), i;
      };
      var TR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return wR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, RR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, nE = {};
      Tp = function(e, t, i) {
        i = i || tE;
        var a = i.current, l = a && a.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var f = TR(e, l) ? null : a, v = f ? null : RR(e, i), m = f || v;
        if (m) {
          var b = m.tag, w = !!f + "|" + e + "|" + b;
          if (!nE[w]) {
            nE[w] = !0;
            var R = e, U = "";
            if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", U = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", f) {
              var N = "";
              b === "table" && e === "tr" && (N += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, b, U, N);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, b);
          }
        }
      };
    }
    var Zh = "suppressHydrationWarning", Jh = "$", em = "/$", xp = "$?", kp = "$!", xR = "style", Tg = null, Rg = null;
    function kR(e) {
      var t, i, a = e.nodeType;
      switch (a) {
        case va:
        case al: {
          t = a === va ? "#document" : "#fragment";
          var l = e.documentElement;
          i = l ? l.namespaceURI : Ed(null, "");
          break;
        }
        default: {
          var f = a === Bn ? e.parentNode : e, v = f.namespaceURI || null;
          t = f.tagName, i = Ed(v, t);
          break;
        }
      }
      {
        var m = t.toLowerCase(), b = Rp(null, m);
        return {
          namespace: i,
          ancestorInfo: b
        };
      }
    }
    function _R(e, t, i) {
      {
        var a = e, l = Ed(a.namespace, t), f = Rp(a.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: f
        };
      }
    }
    function FA(e) {
      return e;
    }
    function DR(e) {
      Tg = Au(), Rg = IT();
      var t = null;
      return gi(!1), t;
    }
    function OR(e) {
      BT(Rg), gi(Tg), Tg = null, Rg = null;
    }
    function LR(e, t, i, a, l) {
      var f;
      {
        var v = a;
        if (Tp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, b = Rp(v.ancestorInfo, e);
          Tp(null, m, b);
        }
        f = v.namespace;
      }
      var w = dR(e, t, i, f);
      return Op(l, w), Ag(w, t), w;
    }
    function MR(e, t) {
      e.appendChild(t);
    }
    function AR(e, t, i, a, l) {
      switch (vR(e, t, i, a), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!i.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function $R(e, t, i, a, l, f) {
      {
        var v = f;
        if (typeof a.children != typeof i.children && (typeof a.children == "string" || typeof a.children == "number")) {
          var m = "" + a.children, b = Rp(v.ancestorInfo, t);
          Tp(null, m, b);
        }
      }
      return hR(e, t, i, a);
    }
    function xg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function NR(e, t, i, a) {
      {
        var l = i;
        Tp(null, e, l.ancestorInfo);
      }
      var f = pR(e, t);
      return Op(a, f), f;
    }
    function zR() {
      var e = window.event;
      return e === void 0 ? Da : vf(e.type);
    }
    var kg = typeof setTimeout == "function" ? setTimeout : void 0, UR = typeof clearTimeout == "function" ? clearTimeout : void 0, _g = -1, rE = typeof Promise == "function" ? Promise : void 0, PR = typeof queueMicrotask == "function" ? queueMicrotask : typeof rE < "u" ? function(e) {
      return rE.resolve(null).then(e).catch(HR);
    } : kg;
    function HR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function jR(e, t, i, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && e.focus();
          return;
        case "img": {
          i.src && (e.src = i.src);
          return;
        }
      }
    }
    function FR(e, t, i, a, l, f) {
      mR(e, t, i, a, l), Ag(e, l);
    }
    function iE(e) {
      Sc(e, "");
    }
    function VR(e, t, i) {
      e.nodeValue = i;
    }
    function IR(e, t) {
      e.appendChild(t);
    }
    function BR(e, t) {
      var i;
      e.nodeType === Bn ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var a = e._reactRootContainer;
      a == null && i.onclick === null && Xh(i);
    }
    function WR(e, t, i) {
      e.insertBefore(t, i);
    }
    function YR(e, t, i) {
      e.nodeType === Bn ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function GR(e, t) {
      e.removeChild(t);
    }
    function QR(e, t) {
      e.nodeType === Bn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Dg(e, t) {
      var i = t, a = 0;
      do {
        var l = i.nextSibling;
        if (e.removeChild(i), l && l.nodeType === Bn) {
          var f = l.data;
          if (f === em)
            if (a === 0) {
              e.removeChild(l), $n(t);
              return;
            } else
              a--;
          else (f === Jh || f === xp || f === kp) && a++;
        }
        i = l;
      } while (i);
      $n(t);
    }
    function qR(e, t) {
      e.nodeType === Bn ? Dg(e.parentNode, t) : e.nodeType === ui && Dg(e, t), $n(e);
    }
    function KR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function XR(e) {
      e.nodeValue = "";
    }
    function ZR(e, t) {
      e = e;
      var i = t[xR], a = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = Ec("display", a);
    }
    function JR(e, t) {
      e.nodeValue = t;
    }
    function ex(e) {
      e.nodeType === ui ? e.textContent = "" : e.nodeType === va && e.documentElement && e.removeChild(e.documentElement);
    }
    function tx(e, t, i) {
      return e.nodeType !== ui || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function nx(e, t) {
      return t === "" || e.nodeType !== Ga ? null : e;
    }
    function rx(e) {
      return e.nodeType !== Bn ? null : e;
    }
    function aE(e) {
      return e.data === xp;
    }
    function Og(e) {
      return e.data === kp;
    }
    function ix(e) {
      var t = e.nextSibling && e.nextSibling.dataset, i, a, l;
      return t && (i = t.dgst, a = t.msg, l = t.stck), {
        message: a,
        digest: i,
        stack: l
      };
    }
    function ax(e, t) {
      e._reactRetry = t;
    }
    function tm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ui || t === Ga)
          break;
        if (t === Bn) {
          var i = e.data;
          if (i === Jh || i === kp || i === xp)
            break;
          if (i === em)
            return null;
        }
      }
      return e;
    }
    function _p(e) {
      return tm(e.nextSibling);
    }
    function ox(e) {
      return tm(e.firstChild);
    }
    function lx(e) {
      return tm(e.firstChild);
    }
    function ux(e) {
      return tm(e.nextSibling);
    }
    function sx(e, t, i, a, l, f, v) {
      Op(f, e), Ag(e, i);
      var m;
      {
        var b = l;
        m = b.namespace;
      }
      var w = (f.mode & Ie) !== Fe;
      return gR(e, t, i, m, a, w, v);
    }
    function cx(e, t, i, a) {
      return Op(i, e), i.mode & Ie, bR(e, t);
    }
    function fx(e, t) {
      Op(t, e);
    }
    function dx(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === Bn) {
          var a = t.data;
          if (a === em) {
            if (i === 0)
              return _p(t);
            i--;
          } else (a === Jh || a === kp || a === xp) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function oE(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === Bn) {
          var a = t.data;
          if (a === Jh || a === kp || a === xp) {
            if (i === 0)
              return t;
            i--;
          } else a === em && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function px(e) {
      $n(e);
    }
    function vx(e) {
      $n(e);
    }
    function hx(e) {
      return e !== "head" && e !== "body";
    }
    function mx(e, t, i, a) {
      var l = !0;
      Kh(t.nodeValue, i, a, l);
    }
    function yx(e, t, i, a, l, f) {
      if (t[Zh] !== !0) {
        var v = !0;
        Kh(a.nodeValue, l, f, v);
      }
    }
    function gx(e, t) {
      t.nodeType === ui ? Sg(e, t) : t.nodeType === Bn || Eg(e, t);
    }
    function bx(e, t) {
      {
        var i = e.parentNode;
        i !== null && (t.nodeType === ui ? Sg(i, t) : t.nodeType === Bn || Eg(i, t));
      }
    }
    function Sx(e, t, i, a, l) {
      (l || t[Zh] !== !0) && (a.nodeType === ui ? Sg(i, a) : a.nodeType === Bn || Eg(i, a));
    }
    function Ex(e, t, i) {
      Cg(e, t);
    }
    function Cx(e, t) {
      wg(e, t);
    }
    function wx(e, t, i) {
      {
        var a = e.parentNode;
        a !== null && Cg(a, t);
      }
    }
    function Tx(e, t) {
      {
        var i = e.parentNode;
        i !== null && wg(i, t);
      }
    }
    function Rx(e, t, i, a, l, f) {
      (f || t[Zh] !== !0) && Cg(i, a);
    }
    function xx(e, t, i, a, l) {
      (l || t[Zh] !== !0) && wg(i, a);
    }
    function kx(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function _x(e) {
      Sp(e);
    }
    var Mf = Math.random().toString(36).slice(2), Af = "__reactFiber$" + Mf, Lg = "__reactProps$" + Mf, Dp = "__reactContainer$" + Mf, Mg = "__reactEvents$" + Mf, Dx = "__reactListeners$" + Mf, Ox = "__reactHandles$" + Mf;
    function Lx(e) {
      delete e[Af], delete e[Lg], delete e[Mg], delete e[Dx], delete e[Ox];
    }
    function Op(e, t) {
      t[Af] = e;
    }
    function nm(e, t) {
      t[Dp] = e;
    }
    function lE(e) {
      e[Dp] = null;
    }
    function Lp(e) {
      return !!e[Dp];
    }
    function qs(e) {
      var t = e[Af];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[Dp] || i[Af], t) {
          var a = t.alternate;
          if (t.child !== null || a !== null && a.child !== null)
            for (var l = oE(e); l !== null; ) {
              var f = l[Af];
              if (f)
                return f;
              l = oE(l);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    function Fu(e) {
      var t = e[Af] || e[Dp];
      return t && (t.tag === B || t.tag === se || t.tag === Oe || t.tag === A) ? t : null;
    }
    function $f(e) {
      if (e.tag === B || e.tag === se)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function rm(e) {
      return e[Lg] || null;
    }
    function Ag(e, t) {
      e[Lg] = t;
    }
    function Mx(e) {
      var t = e[Mg];
      return t === void 0 && (t = e[Mg] = /* @__PURE__ */ new Set()), t;
    }
    var uE = {}, sE = d.ReactDebugCurrentFrame;
    function im(e) {
      if (e) {
        var t = e._owner, i = Ta(e.type, e._source, t ? t.type : null);
        sE.setExtraStackFrame(i);
      } else
        sE.setExtraStackFrame(null);
    }
    function oo(e, t, i, a, l) {
      {
        var f = Function.call.bind(zn);
        for (var v in e)
          if (f(e, v)) {
            var m = void 0;
            try {
              if (typeof e[v] != "function") {
                var b = Error((a || "React class") + ": " + i + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              m = e[v](t, v, a, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              m = w;
            }
            m && !(m instanceof Error) && (im(l), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", i, v, typeof m), im(null)), m instanceof Error && !(m.message in uE) && (uE[m.message] = !0, im(l), g("Failed %s type: %s", i, m.message), im(null));
          }
      }
    }
    var $g = [], am;
    am = [];
    var Dl = -1;
    function Vu(e) {
      return {
        current: e
      };
    }
    function bi(e, t) {
      if (Dl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== am[Dl] && g("Unexpected Fiber popped."), e.current = $g[Dl], $g[Dl] = null, am[Dl] = null, Dl--;
    }
    function Si(e, t, i) {
      Dl++, $g[Dl] = e.current, am[Dl] = i, e.current = t;
    }
    var Ng;
    Ng = {};
    var ga = {};
    Object.freeze(ga);
    var Ol = Vu(ga), Yo = Vu(!1), zg = ga;
    function Nf(e, t, i) {
      return i && Go(t) ? zg : Ol.current;
    }
    function cE(e, t, i) {
      {
        var a = e.stateNode;
        a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = i;
      }
    }
    function zf(e, t) {
      {
        var i = e.type, a = i.contextTypes;
        if (!a)
          return ga;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var f = {};
        for (var v in a)
          f[v] = t[v];
        {
          var m = pt(e) || "Unknown";
          oo(a, f, "context", m);
        }
        return l && cE(e, t, f), f;
      }
    }
    function om() {
      return Yo.current;
    }
    function Go(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function lm(e) {
      bi(Yo, e), bi(Ol, e);
    }
    function Ug(e) {
      bi(Yo, e), bi(Ol, e);
    }
    function fE(e, t, i) {
      {
        if (Ol.current !== ga)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Si(Ol, t, e), Si(Yo, i, e);
      }
    }
    function dE(e, t, i) {
      {
        var a = e.stateNode, l = t.childContextTypes;
        if (typeof a.getChildContext != "function") {
          {
            var f = pt(e) || "Unknown";
            Ng[f] || (Ng[f] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", f, f));
          }
          return i;
        }
        var v = a.getChildContext();
        for (var m in v)
          if (!(m in l))
            throw new Error((pt(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var b = pt(e) || "Unknown";
          oo(l, v, "child context", b);
        }
        return _t({}, i, v);
      }
    }
    function um(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || ga;
        return zg = Ol.current, Si(Ol, i, e), Si(Yo, Yo.current, e), !0;
      }
    }
    function pE(e, t, i) {
      {
        var a = e.stateNode;
        if (!a)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var l = dE(e, t, zg);
          a.__reactInternalMemoizedMergedChildContext = l, bi(Yo, e), bi(Ol, e), Si(Ol, l, e), Si(Yo, i, e);
        } else
          bi(Yo, e), Si(Yo, i, e);
      }
    }
    function Ax(e) {
      {
        if (!Fd(e) || e.tag !== L)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case A:
              return t.stateNode.context;
            case L: {
              var i = t.type;
              if (Go(i))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Iu = 0, sm = 1, Ll = null, Pg = !1, Hg = !1;
    function vE(e) {
      Ll === null ? Ll = [e] : Ll.push(e);
    }
    function $x(e) {
      Pg = !0, vE(e);
    }
    function hE() {
      Pg && Bu();
    }
    function Bu() {
      if (!Hg && Ll !== null) {
        Hg = !0;
        var e = 0, t = Zi();
        try {
          var i = !0, a = Ll;
          for (An(jn); e < a.length; e++) {
            var l = a[e];
            do
              l = l(i);
            while (l !== null);
          }
          Ll = null, Pg = !1;
        } catch (f) {
          throw Ll !== null && (Ll = Ll.slice(e + 1)), Mc($c, Bu), f;
        } finally {
          An(t), Hg = !1;
        }
      }
      return null;
    }
    var Uf = [], Pf = 0, cm = null, fm = 0, Aa = [], $a = 0, Ks = null, Ml = 1, Al = "";
    function Nx(e) {
      return Zs(), (e.flags & Pd) !== Ke;
    }
    function zx(e) {
      return Zs(), fm;
    }
    function Ux() {
      var e = Al, t = Ml, i = t & ~Px(t);
      return i.toString(32) + e;
    }
    function Xs(e, t) {
      Zs(), Uf[Pf++] = fm, Uf[Pf++] = cm, cm = e, fm = t;
    }
    function mE(e, t, i) {
      Zs(), Aa[$a++] = Ml, Aa[$a++] = Al, Aa[$a++] = Ks, Ks = e;
      var a = Ml, l = Al, f = dm(a) - 1, v = a & ~(1 << f), m = i + 1, b = dm(t) + f;
      if (b > 30) {
        var w = f - f % 5, R = (1 << w) - 1, U = (v & R).toString(32), N = v >> w, W = f - w, Q = dm(t) + W, Z = m << W, Se = Z | N, Xe = U + l;
        Ml = 1 << Q | Se, Al = Xe;
      } else {
        var Be = m << f, Ht = Be | v, At = l;
        Ml = 1 << b | Ht, Al = At;
      }
    }
    function jg(e) {
      Zs();
      var t = e.return;
      if (t !== null) {
        var i = 1, a = 0;
        Xs(e, i), mE(e, i, a);
      }
    }
    function dm(e) {
      return 32 - mu(e);
    }
    function Px(e) {
      return 1 << dm(e) - 1;
    }
    function Fg(e) {
      for (; e === cm; )
        cm = Uf[--Pf], Uf[Pf] = null, fm = Uf[--Pf], Uf[Pf] = null;
      for (; e === Ks; )
        Ks = Aa[--$a], Aa[$a] = null, Al = Aa[--$a], Aa[$a] = null, Ml = Aa[--$a], Aa[$a] = null;
    }
    function Hx() {
      return Zs(), Ks !== null ? {
        id: Ml,
        overflow: Al
      } : null;
    }
    function jx(e, t) {
      Zs(), Aa[$a++] = Ml, Aa[$a++] = Al, Aa[$a++] = Ks, Ml = t.id, Al = t.overflow, Ks = e;
    }
    function Zs() {
      Qr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Gr = null, Na = null, lo = !1, Js = !1, Wu = null;
    function Fx() {
      lo && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function yE() {
      Js = !0;
    }
    function Vx() {
      return Js;
    }
    function Ix(e) {
      var t = e.stateNode.containerInfo;
      return Na = lx(t), Gr = e, lo = !0, Wu = null, Js = !1, !0;
    }
    function Bx(e, t, i) {
      return Na = ux(t), Gr = e, lo = !0, Wu = null, Js = !1, i !== null && jx(e, i), !0;
    }
    function gE(e, t) {
      switch (e.tag) {
        case A: {
          gx(e.stateNode.containerInfo, t);
          break;
        }
        case B: {
          var i = (e.mode & Ie) !== Fe;
          Sx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            i
          );
          break;
        }
        case Oe: {
          var a = e.memoizedState;
          a.dehydrated !== null && bx(a.dehydrated, t);
          break;
        }
      }
    }
    function bE(e, t) {
      gE(e, t);
      var i = QD();
      i.stateNode = t, i.return = e;
      var a = e.deletions;
      a === null ? (e.deletions = [i], e.flags |= Xt) : a.push(i);
    }
    function Vg(e, t) {
      {
        if (Js)
          return;
        switch (e.tag) {
          case A: {
            var i = e.stateNode.containerInfo;
            switch (t.tag) {
              case B:
                var a = t.type;
                t.pendingProps, Ex(i, a);
                break;
              case se:
                var l = t.pendingProps;
                Cx(i, l);
                break;
            }
            break;
          }
          case B: {
            var f = e.type, v = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case B: {
                var b = t.type, w = t.pendingProps, R = (e.mode & Ie) !== Fe;
                Rx(
                  f,
                  v,
                  m,
                  b,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
              case se: {
                var U = t.pendingProps, N = (e.mode & Ie) !== Fe;
                xx(
                  f,
                  v,
                  m,
                  U,
                  // TODO: Delete this argument when we remove the legacy root API.
                  N
                );
                break;
              }
            }
            break;
          }
          case Oe: {
            var W = e.memoizedState, Q = W.dehydrated;
            if (Q !== null) switch (t.tag) {
              case B:
                var Z = t.type;
                t.pendingProps, wx(Q, Z);
                break;
              case se:
                var Se = t.pendingProps;
                Tx(Q, Se);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function SE(e, t) {
      t.flags = t.flags & ~Yi | hn, Vg(e, t);
    }
    function EE(e, t) {
      switch (e.tag) {
        case B: {
          var i = e.type;
          e.pendingProps;
          var a = tx(t, i);
          return a !== null ? (e.stateNode = a, Gr = e, Na = ox(a), !0) : !1;
        }
        case se: {
          var l = e.pendingProps, f = nx(t, l);
          return f !== null ? (e.stateNode = f, Gr = e, Na = null, !0) : !1;
        }
        case Oe: {
          var v = rx(t);
          if (v !== null) {
            var m = {
              dehydrated: v,
              treeContext: Hx(),
              retryLane: Ur
            };
            e.memoizedState = m;
            var b = qD(v);
            return b.return = e, e.child = b, Gr = e, Na = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ig(e) {
      return (e.mode & Ie) !== Fe && (e.flags & ft) === Ke;
    }
    function Bg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Wg(e) {
      if (lo) {
        var t = Na;
        if (!t) {
          Ig(e) && (Vg(Gr, e), Bg()), SE(Gr, e), lo = !1, Gr = e;
          return;
        }
        var i = t;
        if (!EE(e, t)) {
          Ig(e) && (Vg(Gr, e), Bg()), t = _p(i);
          var a = Gr;
          if (!t || !EE(e, t)) {
            SE(Gr, e), lo = !1, Gr = e;
            return;
          }
          bE(a, i);
        }
      }
    }
    function Wx(e, t, i) {
      var a = e.stateNode, l = !Js, f = sx(a, e.type, e.memoizedProps, t, i, e, l);
      return e.updateQueue = f, f !== null;
    }
    function Yx(e) {
      var t = e.stateNode, i = e.memoizedProps, a = cx(t, i, e);
      if (a) {
        var l = Gr;
        if (l !== null)
          switch (l.tag) {
            case A: {
              var f = l.stateNode.containerInfo, v = (l.mode & Ie) !== Fe;
              mx(
                f,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case B: {
              var m = l.type, b = l.memoizedProps, w = l.stateNode, R = (l.mode & Ie) !== Fe;
              yx(
                m,
                b,
                w,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
          }
      }
      return a;
    }
    function Gx(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      fx(i, e);
    }
    function Qx(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return dx(i);
    }
    function CE(e) {
      for (var t = e.return; t !== null && t.tag !== B && t.tag !== A && t.tag !== Oe; )
        t = t.return;
      Gr = t;
    }
    function pm(e) {
      if (e !== Gr)
        return !1;
      if (!lo)
        return CE(e), lo = !0, !1;
      if (e.tag !== A && (e.tag !== B || hx(e.type) && !xg(e.type, e.memoizedProps))) {
        var t = Na;
        if (t)
          if (Ig(e))
            wE(e), Bg();
          else
            for (; t; )
              bE(e, t), t = _p(t);
      }
      return CE(e), e.tag === Oe ? Na = Qx(e) : Na = Gr ? _p(e.stateNode) : null, !0;
    }
    function qx() {
      return lo && Na !== null;
    }
    function wE(e) {
      for (var t = Na; t; )
        gE(e, t), t = _p(t);
    }
    function Hf() {
      Gr = null, Na = null, lo = !1, Js = !1;
    }
    function TE() {
      Wu !== null && (yw(Wu), Wu = null);
    }
    function Qr() {
      return lo;
    }
    function Yg(e) {
      Wu === null ? Wu = [e] : Wu.push(e);
    }
    var Kx = d.ReactCurrentBatchConfig, Xx = null;
    function Zx() {
      return Kx.transition;
    }
    var uo = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Jx = function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & Ot && (t = i), i = i.return;
        return t;
      }, ec = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, Mp = [], Ap = [], $p = [], Np = [], zp = [], Up = [], tc = /* @__PURE__ */ new Set();
      uo.recordUnsafeLifecycleWarnings = function(e, t) {
        tc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Mp.push(e), e.mode & Ot && typeof t.UNSAFE_componentWillMount == "function" && Ap.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && $p.push(e), e.mode & Ot && typeof t.UNSAFE_componentWillReceiveProps == "function" && Np.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && zp.push(e), e.mode & Ot && typeof t.UNSAFE_componentWillUpdate == "function" && Up.push(e));
      }, uo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(N) {
          e.add(pt(N) || "Component"), tc.add(N.type);
        }), Mp = []);
        var t = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(N) {
          t.add(pt(N) || "Component"), tc.add(N.type);
        }), Ap = []);
        var i = /* @__PURE__ */ new Set();
        $p.length > 0 && ($p.forEach(function(N) {
          i.add(pt(N) || "Component"), tc.add(N.type);
        }), $p = []);
        var a = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(N) {
          a.add(pt(N) || "Component"), tc.add(N.type);
        }), Np = []);
        var l = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(N) {
          l.add(pt(N) || "Component"), tc.add(N.type);
        }), zp = []);
        var f = /* @__PURE__ */ new Set();
        if (Up.length > 0 && (Up.forEach(function(N) {
          f.add(pt(N) || "Component"), tc.add(N.type);
        }), Up = []), t.size > 0) {
          var v = ec(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (a.size > 0) {
          var m = ec(a);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, m);
        }
        if (f.size > 0) {
          var b = ec(f);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
        }
        if (e.size > 0) {
          var w = ec(e);
          T(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (i.size > 0) {
          var R = ec(i);
          T(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (l.size > 0) {
          var U = ec(l);
          T(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, U);
        }
      };
      var vm = /* @__PURE__ */ new Map(), RE = /* @__PURE__ */ new Set();
      uo.recordLegacyContextWarning = function(e, t) {
        var i = Jx(e);
        if (i === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!RE.has(e.type)) {
          var a = vm.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], vm.set(i, a)), a.push(e));
        }
      }, uo.flushLegacyContextWarning = function() {
        vm.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], a = /* @__PURE__ */ new Set();
            e.forEach(function(f) {
              a.add(pt(f) || "Component"), RE.add(f.type);
            });
            var l = ec(a);
            try {
              Zt(i), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Ln();
            }
          }
        });
      }, uo.discardPendingWarnings = function() {
        Mp = [], Ap = [], $p = [], Np = [], zp = [], Up = [], vm = /* @__PURE__ */ new Map();
      };
    }
    var Gg, Qg, qg, Kg, Xg, xE = function(e, t) {
    };
    Gg = !1, Qg = !1, qg = {}, Kg = {}, Xg = {}, xE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var i = pt(t) || "Component";
        Kg[i] || (Kg[i] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function ek(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Pp(e, t, i) {
      var a = i.ref;
      if (a !== null && typeof a != "function" && typeof a != "object") {
        if ((e.mode & Ot || Te) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(i._owner && i._self && i._owner.stateNode !== i._self) && // Will already throw with "Function components cannot have string refs"
        !(i._owner && i._owner.tag !== L) && // Will already warn with "Function components cannot be given refs"
        !(typeof i.type == "function" && !ek(i.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        i._owner) {
          var l = pt(e) || "Component";
          qg[l] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, a), qg[l] = !0);
        }
        if (i._owner) {
          var f = i._owner, v;
          if (f) {
            var m = f;
            if (m.tag !== L)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = m.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
          var b = v;
          In(a, "ref");
          var w = "" + a;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === w)
            return t.ref;
          var R = function(U) {
            var N = b.refs;
            U === null ? delete N[w] : N[w] = U;
          };
          return R._stringRef = w, R;
        } else {
          if (typeof a != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!i._owner)
            throw new Error("Element ref was specified as a string (" + a + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return a;
    }
    function hm(e, t) {
      var i = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    }
    function mm(e) {
      {
        var t = pt(e) || "Component";
        if (Xg[t])
          return;
        Xg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function kE(e) {
      var t = e._payload, i = e._init;
      return i(t);
    }
    function _E(e) {
      function t(j, J) {
        if (e) {
          var F = j.deletions;
          F === null ? (j.deletions = [J], j.flags |= Xt) : F.push(J);
        }
      }
      function i(j, J) {
        if (!e)
          return null;
        for (var F = J; F !== null; )
          t(j, F), F = F.sibling;
        return null;
      }
      function a(j, J) {
        for (var F = /* @__PURE__ */ new Map(), ue = J; ue !== null; )
          ue.key !== null ? F.set(ue.key, ue) : F.set(ue.index, ue), ue = ue.sibling;
        return F;
      }
      function l(j, J) {
        var F = cc(j, J);
        return F.index = 0, F.sibling = null, F;
      }
      function f(j, J, F) {
        if (j.index = F, !e)
          return j.flags |= Pd, J;
        var ue = j.alternate;
        if (ue !== null) {
          var ke = ue.index;
          return ke < J ? (j.flags |= hn, J) : ke;
        } else
          return j.flags |= hn, J;
      }
      function v(j) {
        return e && j.alternate === null && (j.flags |= hn), j;
      }
      function m(j, J, F, ue) {
        if (J === null || J.tag !== se) {
          var ke = Y0(F, j.mode, ue);
          return ke.return = j, ke;
        } else {
          var Ee = l(J, F);
          return Ee.return = j, Ee;
        }
      }
      function b(j, J, F, ue) {
        var ke = F.type;
        if (ke === Vr)
          return R(j, J, F.props.children, ue, F.key);
        if (J !== null && (J.elementType === ke || // Keep this check inline so it only runs on the false path:
        Aw(J, F) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ke == "object" && ke !== null && ke.$$typeof === Qe && kE(ke) === J.type)) {
          var Ee = l(J, F.props);
          return Ee.ref = Pp(j, J, F), Ee.return = j, Ee._debugSource = F._source, Ee._debugOwner = F._owner, Ee;
        }
        var lt = W0(F, j.mode, ue);
        return lt.ref = Pp(j, J, F), lt.return = j, lt;
      }
      function w(j, J, F, ue) {
        if (J === null || J.tag !== K || J.stateNode.containerInfo !== F.containerInfo || J.stateNode.implementation !== F.implementation) {
          var ke = G0(F, j.mode, ue);
          return ke.return = j, ke;
        } else {
          var Ee = l(J, F.children || []);
          return Ee.return = j, Ee;
        }
      }
      function R(j, J, F, ue, ke) {
        if (J === null || J.tag !== We) {
          var Ee = ns(F, j.mode, ue, ke);
          return Ee.return = j, Ee;
        } else {
          var lt = l(J, F);
          return lt.return = j, lt;
        }
      }
      function U(j, J, F) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var ue = Y0("" + J, j.mode, F);
          return ue.return = j, ue;
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case bn: {
              var ke = W0(J, j.mode, F);
              return ke.ref = Pp(j, null, J), ke.return = j, ke;
            }
            case mr: {
              var Ee = G0(J, j.mode, F);
              return Ee.return = j, Ee;
            }
            case Qe: {
              var lt = J._payload, yt = J._init;
              return U(j, yt(lt), F);
            }
          }
          if (zt(J) || Rn(J)) {
            var on = ns(J, j.mode, F, null);
            return on.return = j, on;
          }
          hm(j, J);
        }
        return typeof J == "function" && mm(j), null;
      }
      function N(j, J, F, ue) {
        var ke = J !== null ? J.key : null;
        if (typeof F == "string" && F !== "" || typeof F == "number")
          return ke !== null ? null : m(j, J, "" + F, ue);
        if (typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case bn:
              return F.key === ke ? b(j, J, F, ue) : null;
            case mr:
              return F.key === ke ? w(j, J, F, ue) : null;
            case Qe: {
              var Ee = F._payload, lt = F._init;
              return N(j, J, lt(Ee), ue);
            }
          }
          if (zt(F) || Rn(F))
            return ke !== null ? null : R(j, J, F, ue, null);
          hm(j, F);
        }
        return typeof F == "function" && mm(j), null;
      }
      function W(j, J, F, ue, ke) {
        if (typeof ue == "string" && ue !== "" || typeof ue == "number") {
          var Ee = j.get(F) || null;
          return m(J, Ee, "" + ue, ke);
        }
        if (typeof ue == "object" && ue !== null) {
          switch (ue.$$typeof) {
            case bn: {
              var lt = j.get(ue.key === null ? F : ue.key) || null;
              return b(J, lt, ue, ke);
            }
            case mr: {
              var yt = j.get(ue.key === null ? F : ue.key) || null;
              return w(J, yt, ue, ke);
            }
            case Qe:
              var on = ue._payload, Qt = ue._init;
              return W(j, J, F, Qt(on), ke);
          }
          if (zt(ue) || Rn(ue)) {
            var tr = j.get(F) || null;
            return R(J, tr, ue, ke, null);
          }
          hm(J, ue);
        }
        return typeof ue == "function" && mm(J), null;
      }
      function Q(j, J, F) {
        {
          if (typeof j != "object" || j === null)
            return J;
          switch (j.$$typeof) {
            case bn:
            case mr:
              xE(j, F);
              var ue = j.key;
              if (typeof ue != "string")
                break;
              if (J === null) {
                J = /* @__PURE__ */ new Set(), J.add(ue);
                break;
              }
              if (!J.has(ue)) {
                J.add(ue);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ue);
              break;
            case Qe:
              var ke = j._payload, Ee = j._init;
              Q(Ee(ke), J, F);
              break;
          }
        }
        return J;
      }
      function Z(j, J, F, ue) {
        for (var ke = null, Ee = 0; Ee < F.length; Ee++) {
          var lt = F[Ee];
          ke = Q(lt, ke, j);
        }
        for (var yt = null, on = null, Qt = J, tr = 0, qt = 0, Gn = null; Qt !== null && qt < F.length; qt++) {
          Qt.index > qt ? (Gn = Qt, Qt = null) : Gn = Qt.sibling;
          var Ci = N(j, Qt, F[qt], ue);
          if (Ci === null) {
            Qt === null && (Qt = Gn);
            break;
          }
          e && Qt && Ci.alternate === null && t(j, Qt), tr = f(Ci, tr, qt), on === null ? yt = Ci : on.sibling = Ci, on = Ci, Qt = Gn;
        }
        if (qt === F.length) {
          if (i(j, Qt), Qr()) {
            var ti = qt;
            Xs(j, ti);
          }
          return yt;
        }
        if (Qt === null) {
          for (; qt < F.length; qt++) {
            var Sa = U(j, F[qt], ue);
            Sa !== null && (tr = f(Sa, tr, qt), on === null ? yt = Sa : on.sibling = Sa, on = Sa);
          }
          if (Qr()) {
            var zi = qt;
            Xs(j, zi);
          }
          return yt;
        }
        for (var Ui = a(j, Qt); qt < F.length; qt++) {
          var wi = W(Ui, j, qt, F[qt], ue);
          wi !== null && (e && wi.alternate !== null && Ui.delete(wi.key === null ? qt : wi.key), tr = f(wi, tr, qt), on === null ? yt = wi : on.sibling = wi, on = wi);
        }
        if (e && Ui.forEach(function(id) {
          return t(j, id);
        }), Qr()) {
          var jl = qt;
          Xs(j, jl);
        }
        return yt;
      }
      function Se(j, J, F, ue) {
        var ke = Rn(F);
        if (typeof ke != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          F[Symbol.toStringTag] === "Generator" && (Qg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Qg = !0), F.entries === ke && (Gg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gg = !0);
          var Ee = ke.call(F);
          if (Ee)
            for (var lt = null, yt = Ee.next(); !yt.done; yt = Ee.next()) {
              var on = yt.value;
              lt = Q(on, lt, j);
            }
        }
        var Qt = ke.call(F);
        if (Qt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var tr = null, qt = null, Gn = J, Ci = 0, ti = 0, Sa = null, zi = Qt.next(); Gn !== null && !zi.done; ti++, zi = Qt.next()) {
          Gn.index > ti ? (Sa = Gn, Gn = null) : Sa = Gn.sibling;
          var Ui = N(j, Gn, zi.value, ue);
          if (Ui === null) {
            Gn === null && (Gn = Sa);
            break;
          }
          e && Gn && Ui.alternate === null && t(j, Gn), Ci = f(Ui, Ci, ti), qt === null ? tr = Ui : qt.sibling = Ui, qt = Ui, Gn = Sa;
        }
        if (zi.done) {
          if (i(j, Gn), Qr()) {
            var wi = ti;
            Xs(j, wi);
          }
          return tr;
        }
        if (Gn === null) {
          for (; !zi.done; ti++, zi = Qt.next()) {
            var jl = U(j, zi.value, ue);
            jl !== null && (Ci = f(jl, Ci, ti), qt === null ? tr = jl : qt.sibling = jl, qt = jl);
          }
          if (Qr()) {
            var id = ti;
            Xs(j, id);
          }
          return tr;
        }
        for (var mv = a(j, Gn); !zi.done; ti++, zi = Qt.next()) {
          var tl = W(mv, j, ti, zi.value, ue);
          tl !== null && (e && tl.alternate !== null && mv.delete(tl.key === null ? ti : tl.key), Ci = f(tl, Ci, ti), qt === null ? tr = tl : qt.sibling = tl, qt = tl);
        }
        if (e && mv.forEach(function(xO) {
          return t(j, xO);
        }), Qr()) {
          var RO = ti;
          Xs(j, RO);
        }
        return tr;
      }
      function Xe(j, J, F, ue) {
        if (J !== null && J.tag === se) {
          i(j, J.sibling);
          var ke = l(J, F);
          return ke.return = j, ke;
        }
        i(j, J);
        var Ee = Y0(F, j.mode, ue);
        return Ee.return = j, Ee;
      }
      function Be(j, J, F, ue) {
        for (var ke = F.key, Ee = J; Ee !== null; ) {
          if (Ee.key === ke) {
            var lt = F.type;
            if (lt === Vr) {
              if (Ee.tag === We) {
                i(j, Ee.sibling);
                var yt = l(Ee, F.props.children);
                return yt.return = j, yt._debugSource = F._source, yt._debugOwner = F._owner, yt;
              }
            } else if (Ee.elementType === lt || // Keep this check inline so it only runs on the false path:
            Aw(Ee, F) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof lt == "object" && lt !== null && lt.$$typeof === Qe && kE(lt) === Ee.type) {
              i(j, Ee.sibling);
              var on = l(Ee, F.props);
              return on.ref = Pp(j, Ee, F), on.return = j, on._debugSource = F._source, on._debugOwner = F._owner, on;
            }
            i(j, Ee);
            break;
          } else
            t(j, Ee);
          Ee = Ee.sibling;
        }
        if (F.type === Vr) {
          var Qt = ns(F.props.children, j.mode, ue, F.key);
          return Qt.return = j, Qt;
        } else {
          var tr = W0(F, j.mode, ue);
          return tr.ref = Pp(j, J, F), tr.return = j, tr;
        }
      }
      function Ht(j, J, F, ue) {
        for (var ke = F.key, Ee = J; Ee !== null; ) {
          if (Ee.key === ke)
            if (Ee.tag === K && Ee.stateNode.containerInfo === F.containerInfo && Ee.stateNode.implementation === F.implementation) {
              i(j, Ee.sibling);
              var lt = l(Ee, F.children || []);
              return lt.return = j, lt;
            } else {
              i(j, Ee);
              break;
            }
          else
            t(j, Ee);
          Ee = Ee.sibling;
        }
        var yt = G0(F, j.mode, ue);
        return yt.return = j, yt;
      }
      function At(j, J, F, ue) {
        var ke = typeof F == "object" && F !== null && F.type === Vr && F.key === null;
        if (ke && (F = F.props.children), typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case bn:
              return v(Be(j, J, F, ue));
            case mr:
              return v(Ht(j, J, F, ue));
            case Qe:
              var Ee = F._payload, lt = F._init;
              return At(j, J, lt(Ee), ue);
          }
          if (zt(F))
            return Z(j, J, F, ue);
          if (Rn(F))
            return Se(j, J, F, ue);
          hm(j, F);
        }
        return typeof F == "string" && F !== "" || typeof F == "number" ? v(Xe(j, J, "" + F, ue)) : (typeof F == "function" && mm(j), i(j, J));
      }
      return At;
    }
    var jf = _E(!0), DE = _E(!1);
    function tk(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, a = cc(i, i.pendingProps);
        for (t.child = a, a.return = t; i.sibling !== null; )
          i = i.sibling, a = a.sibling = cc(i, i.pendingProps), a.return = t;
        a.sibling = null;
      }
    }
    function nk(e, t) {
      for (var i = e.child; i !== null; )
        ID(i, t), i = i.sibling;
    }
    var Zg = Vu(null), Jg;
    Jg = {};
    var ym = null, Ff = null, eb = null, gm = !1;
    function bm() {
      ym = null, Ff = null, eb = null, gm = !1;
    }
    function OE() {
      gm = !0;
    }
    function LE() {
      gm = !1;
    }
    function ME(e, t, i) {
      Si(Zg, t._currentValue, e), t._currentValue = i, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Jg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Jg;
    }
    function tb(e, t) {
      var i = Zg.current;
      bi(Zg, t), e._currentValue = i;
    }
    function nb(e, t, i) {
      for (var a = e; a !== null; ) {
        var l = a.alternate;
        if (El(a.childLanes, t) ? l !== null && !El(l.childLanes, t) && (l.childLanes = bt(l.childLanes, t)) : (a.childLanes = bt(a.childLanes, t), l !== null && (l.childLanes = bt(l.childLanes, t))), a === i)
          break;
        a = a.return;
      }
      a !== i && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function rk(e, t, i) {
      ik(e, t, i);
    }
    function ik(e, t, i) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var l = void 0, f = a.dependencies;
        if (f !== null) {
          l = a.child;
          for (var v = f.firstContext; v !== null; ) {
            if (v.context === t) {
              if (a.tag === L) {
                var m = wu(i), b = $l(fn, m);
                b.tag = Em;
                var w = a.updateQueue;
                if (w !== null) {
                  var R = w.shared, U = R.pending;
                  U === null ? b.next = b : (b.next = U.next, U.next = b), R.pending = b;
                }
              }
              a.lanes = bt(a.lanes, i);
              var N = a.alternate;
              N !== null && (N.lanes = bt(N.lanes, i)), nb(a.return, i, e), f.lanes = bt(f.lanes, i);
              break;
            }
            v = v.next;
          }
        } else if (a.tag === ye)
          l = a.type === e.type ? null : a.child;
        else if (a.tag === xt) {
          var W = a.return;
          if (W === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          W.lanes = bt(W.lanes, i);
          var Q = W.alternate;
          Q !== null && (Q.lanes = bt(Q.lanes, i)), nb(W, i, e), l = a.sibling;
        } else
          l = a.child;
        if (l !== null)
          l.return = a;
        else
          for (l = a; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var Z = l.sibling;
            if (Z !== null) {
              Z.return = l.return, l = Z;
              break;
            }
            l = l.return;
          }
        a = l;
      }
    }
    function Vf(e, t) {
      ym = e, Ff = null, eb = null;
      var i = e.dependencies;
      if (i !== null) {
        var a = i.firstContext;
        a !== null && (yi(i.lanes, t) && Jp(), i.firstContext = null);
      }
    }
    function pr(e) {
      gm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (eb !== e) {
        var i = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Ff === null) {
          if (ym === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Ff = i, ym.dependencies = {
            lanes: te,
            firstContext: i
          };
        } else
          Ff = Ff.next = i;
      }
      return t;
    }
    var nc = null;
    function rb(e) {
      nc === null ? nc = [e] : nc.push(e);
    }
    function ak() {
      if (nc !== null) {
        for (var e = 0; e < nc.length; e++) {
          var t = nc[e], i = t.interleaved;
          if (i !== null) {
            t.interleaved = null;
            var a = i.next, l = t.pending;
            if (l !== null) {
              var f = l.next;
              l.next = a, i.next = f;
            }
            t.pending = i;
          }
        }
        nc = null;
      }
    }
    function AE(e, t, i, a) {
      var l = t.interleaved;
      return l === null ? (i.next = i, rb(t)) : (i.next = l.next, l.next = i), t.interleaved = i, Sm(e, a);
    }
    function ok(e, t, i, a) {
      var l = t.interleaved;
      l === null ? (i.next = i, rb(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
    }
    function lk(e, t, i, a) {
      var l = t.interleaved;
      return l === null ? (i.next = i, rb(t)) : (i.next = l.next, l.next = i), t.interleaved = i, Sm(e, a);
    }
    function ia(e, t) {
      return Sm(e, t);
    }
    var uk = Sm;
    function Sm(e, t) {
      e.lanes = bt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = bt(i.lanes, t)), i === null && (e.flags & (hn | Yi)) !== Ke && Dw(e);
      for (var a = e, l = e.return; l !== null; )
        l.childLanes = bt(l.childLanes, t), i = l.alternate, i !== null ? i.childLanes = bt(i.childLanes, t) : (l.flags & (hn | Yi)) !== Ke && Dw(e), a = l, l = l.return;
      if (a.tag === A) {
        var f = a.stateNode;
        return f;
      } else
        return null;
    }
    var $E = 0, NE = 1, Em = 2, ib = 3, Cm = !1, ab, wm;
    ab = !1, wm = null;
    function ob(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: te
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function zE(e, t) {
      var i = t.updateQueue, a = e.updateQueue;
      if (i === a) {
        var l = {
          baseState: a.baseState,
          firstBaseUpdate: a.firstBaseUpdate,
          lastBaseUpdate: a.lastBaseUpdate,
          shared: a.shared,
          effects: a.effects
        };
        t.updateQueue = l;
      }
    }
    function $l(e, t) {
      var i = {
        eventTime: e,
        lane: t,
        tag: $E,
        payload: null,
        callback: null,
        next: null
      };
      return i;
    }
    function Yu(e, t, i) {
      var a = e.updateQueue;
      if (a === null)
        return null;
      var l = a.shared;
      if (wm === l && !ab && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ab = !0), oD()) {
        var f = l.pending;
        return f === null ? t.next = t : (t.next = f.next, f.next = t), l.pending = t, uk(e, i);
      } else
        return lk(e, l, t, i);
    }
    function Tm(e, t, i) {
      var a = t.updateQueue;
      if (a !== null) {
        var l = a.shared;
        if (Jd(i)) {
          var f = l.lanes;
          f = af(f, e.pendingLanes);
          var v = bt(f, i);
          l.lanes = v, ep(e, v);
        }
      }
    }
    function lb(e, t) {
      var i = e.updateQueue, a = e.alternate;
      if (a !== null) {
        var l = a.updateQueue;
        if (i === l) {
          var f = null, v = null, m = i.firstBaseUpdate;
          if (m !== null) {
            var b = m;
            do {
              var w = {
                eventTime: b.eventTime,
                lane: b.lane,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null
              };
              v === null ? f = v = w : (v.next = w, v = w), b = b.next;
            } while (b !== null);
            v === null ? f = v = t : (v.next = t, v = t);
          } else
            f = v = t;
          i = {
            baseState: l.baseState,
            firstBaseUpdate: f,
            lastBaseUpdate: v,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = i;
          return;
        }
      }
      var R = i.lastBaseUpdate;
      R === null ? i.firstBaseUpdate = t : R.next = t, i.lastBaseUpdate = t;
    }
    function sk(e, t, i, a, l, f) {
      switch (i.tag) {
        case NE: {
          var v = i.payload;
          if (typeof v == "function") {
            OE();
            var m = v.call(f, a, l);
            {
              if (e.mode & Ot) {
                Wn(!0);
                try {
                  v.call(f, a, l);
                } finally {
                  Wn(!1);
                }
              }
              LE();
            }
            return m;
          }
          return v;
        }
        case ib:
          e.flags = e.flags & ~sr | ft;
        case $E: {
          var b = i.payload, w;
          if (typeof b == "function") {
            OE(), w = b.call(f, a, l);
            {
              if (e.mode & Ot) {
                Wn(!0);
                try {
                  b.call(f, a, l);
                } finally {
                  Wn(!1);
                }
              }
              LE();
            }
          } else
            w = b;
          return w == null ? a : _t({}, a, w);
        }
        case Em:
          return Cm = !0, a;
      }
      return a;
    }
    function Rm(e, t, i, a) {
      var l = e.updateQueue;
      Cm = !1, wm = l.shared;
      var f = l.firstBaseUpdate, v = l.lastBaseUpdate, m = l.shared.pending;
      if (m !== null) {
        l.shared.pending = null;
        var b = m, w = b.next;
        b.next = null, v === null ? f = w : v.next = w, v = b;
        var R = e.alternate;
        if (R !== null) {
          var U = R.updateQueue, N = U.lastBaseUpdate;
          N !== v && (N === null ? U.firstBaseUpdate = w : N.next = w, U.lastBaseUpdate = b);
        }
      }
      if (f !== null) {
        var W = l.baseState, Q = te, Z = null, Se = null, Xe = null, Be = f;
        do {
          var Ht = Be.lane, At = Be.eventTime;
          if (El(a, Ht)) {
            if (Xe !== null) {
              var J = {
                eventTime: At,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Yn,
                tag: Be.tag,
                payload: Be.payload,
                callback: Be.callback,
                next: null
              };
              Xe = Xe.next = J;
            }
            W = sk(e, l, Be, W, t, i);
            var F = Be.callback;
            if (F !== null && // If the update was already committed, we should not queue its
            // callback again.
            Be.lane !== Yn) {
              e.flags |= ka;
              var ue = l.effects;
              ue === null ? l.effects = [Be] : ue.push(Be);
            }
          } else {
            var j = {
              eventTime: At,
              lane: Ht,
              tag: Be.tag,
              payload: Be.payload,
              callback: Be.callback,
              next: null
            };
            Xe === null ? (Se = Xe = j, Z = W) : Xe = Xe.next = j, Q = bt(Q, Ht);
          }
          if (Be = Be.next, Be === null) {
            if (m = l.shared.pending, m === null)
              break;
            var ke = m, Ee = ke.next;
            ke.next = null, Be = Ee, l.lastBaseUpdate = ke, l.shared.pending = null;
          }
        } while (!0);
        Xe === null && (Z = W), l.baseState = Z, l.firstBaseUpdate = Se, l.lastBaseUpdate = Xe;
        var lt = l.shared.interleaved;
        if (lt !== null) {
          var yt = lt;
          do
            Q = bt(Q, yt.lane), yt = yt.next;
          while (yt !== lt);
        } else f === null && (l.shared.lanes = te);
        fv(Q), e.lanes = Q, e.memoizedState = W;
      }
      wm = null;
    }
    function ck(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function UE() {
      Cm = !1;
    }
    function xm() {
      return Cm;
    }
    function PE(e, t, i) {
      var a = t.effects;
      if (t.effects = null, a !== null)
        for (var l = 0; l < a.length; l++) {
          var f = a[l], v = f.callback;
          v !== null && (f.callback = null, ck(v, i));
        }
    }
    var Hp = {}, Gu = Vu(Hp), jp = Vu(Hp), km = Vu(Hp);
    function _m(e) {
      if (e === Hp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function HE() {
      var e = _m(km.current);
      return e;
    }
    function ub(e, t) {
      Si(km, t, e), Si(jp, e, e), Si(Gu, Hp, e);
      var i = kR(t);
      bi(Gu, e), Si(Gu, i, e);
    }
    function If(e) {
      bi(Gu, e), bi(jp, e), bi(km, e);
    }
    function sb() {
      var e = _m(Gu.current);
      return e;
    }
    function jE(e) {
      _m(km.current);
      var t = _m(Gu.current), i = _R(t, e.type);
      t !== i && (Si(jp, e, e), Si(Gu, i, e));
    }
    function cb(e) {
      jp.current === e && (bi(Gu, e), bi(jp, e));
    }
    var fk = 0, FE = 1, VE = 1, Fp = 2, so = Vu(fk);
    function fb(e, t) {
      return (e & t) !== 0;
    }
    function Bf(e) {
      return e & FE;
    }
    function db(e, t) {
      return e & FE | t;
    }
    function dk(e, t) {
      return e | t;
    }
    function Qu(e, t) {
      Si(so, t, e);
    }
    function Wf(e) {
      bi(so, e);
    }
    function pk(e, t) {
      var i = e.memoizedState;
      return i !== null ? i.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Dm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Oe) {
          var i = t.memoizedState;
          if (i !== null) {
            var a = i.dehydrated;
            if (a === null || aE(a) || Og(a))
              return t;
          }
        } else if (t.tag === Ct && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & ft) !== Ke;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var aa = (
      /*   */
      0
    ), Sr = (
      /* */
      1
    ), Qo = (
      /*  */
      2
    ), Er = (
      /*    */
      4
    ), qr = (
      /*   */
      8
    ), pb = [];
    function vb() {
      for (var e = 0; e < pb.length; e++) {
        var t = pb[e];
        t._workInProgressVersionPrimary = null;
      }
      pb.length = 0;
    }
    function vk(e, t) {
      var i = t._getVersion, a = i(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a);
    }
    var xe = d.ReactCurrentDispatcher, Vp = d.ReactCurrentBatchConfig, hb, Yf;
    hb = /* @__PURE__ */ new Set();
    var rc = te, an = null, Cr = null, wr = null, Om = !1, Ip = !1, Bp = 0, hk = 0, mk = 25, ee = null, za = null, qu = -1, mb = !1;
    function en() {
      {
        var e = ee;
        za === null ? za = [e] : za.push(e);
      }
    }
    function me() {
      {
        var e = ee;
        za !== null && (qu++, za[qu] !== e && yk(e));
      }
    }
    function Gf(e) {
      e != null && !zt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ee, typeof e);
    }
    function yk(e) {
      {
        var t = pt(an);
        if (!hb.has(t) && (hb.add(t), za !== null)) {
          for (var i = "", a = 30, l = 0; l <= qu; l++) {
            for (var f = za[l], v = l === qu ? e : f, m = l + 1 + ". " + f; m.length < a; )
              m += " ";
            m += v + `
`, i += m;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, i);
        }
      }
    }
    function Ei() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function yb(e, t) {
      if (mb)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ee), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ee, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var i = 0; i < t.length && i < e.length; i++)
        if (!Ae(e[i], t[i]))
          return !1;
      return !0;
    }
    function Qf(e, t, i, a, l, f) {
      rc = f, an = t, za = e !== null ? e._debugHookTypes : null, qu = -1, mb = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = te, e !== null && e.memoizedState !== null ? xe.current = cC : za !== null ? xe.current = sC : xe.current = uC;
      var v = i(a, l);
      if (Ip) {
        var m = 0;
        do {
          if (Ip = !1, Bp = 0, m >= mk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, mb = !1, Cr = null, wr = null, t.updateQueue = null, qu = -1, xe.current = fC, v = i(a, l);
        } while (Ip);
      }
      xe.current = Im, t._debugHookTypes = za;
      var b = Cr !== null && Cr.next !== null;
      if (rc = te, an = null, Cr = null, wr = null, ee = null, za = null, qu = -1, e !== null && (e.flags & yr) !== (t.flags & yr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ie) !== Fe && g("Internal React error: Expected static flag was missing. Please notify the React team."), Om = !1, b)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function qf() {
      var e = Bp !== 0;
      return Bp = 0, e;
    }
    function IE(e, t, i) {
      t.updateQueue = e.updateQueue, (t.mode & Li) !== Fe ? t.flags &= ~(dl | fi | Sn | Et) : t.flags &= ~(Sn | Et), e.lanes = $s(e.lanes, i);
    }
    function BE() {
      if (xe.current = Im, Om) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Om = !1;
      }
      rc = te, an = null, Cr = null, wr = null, za = null, qu = -1, ee = null, rC = !1, Ip = !1, Bp = 0;
    }
    function qo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return wr === null ? an.memoizedState = wr = e : wr = wr.next = e, wr;
    }
    function Ua() {
      var e;
      if (Cr === null) {
        var t = an.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Cr.next;
      var i;
      if (wr === null ? i = an.memoizedState : i = wr.next, i !== null)
        wr = i, i = wr.next, Cr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Cr = e;
        var a = {
          memoizedState: Cr.memoizedState,
          baseState: Cr.baseState,
          baseQueue: Cr.baseQueue,
          queue: Cr.queue,
          next: null
        };
        wr === null ? an.memoizedState = wr = a : wr = wr.next = a;
      }
      return wr;
    }
    function WE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function gb(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function bb(e, t, i) {
      var a = qo(), l;
      i !== void 0 ? l = i(t) : l = t, a.memoizedState = a.baseState = l;
      var f = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      a.queue = f;
      var v = f.dispatch = Ek.bind(null, an, f);
      return [a.memoizedState, v];
    }
    function Sb(e, t, i) {
      var a = Ua(), l = a.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var f = Cr, v = f.baseQueue, m = l.pending;
      if (m !== null) {
        if (v !== null) {
          var b = v.next, w = m.next;
          v.next = w, m.next = b;
        }
        f.baseQueue !== v && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), f.baseQueue = v = m, l.pending = null;
      }
      if (v !== null) {
        var R = v.next, U = f.baseState, N = null, W = null, Q = null, Z = R;
        do {
          var Se = Z.lane;
          if (El(rc, Se)) {
            if (Q !== null) {
              var Be = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Yn,
                action: Z.action,
                hasEagerState: Z.hasEagerState,
                eagerState: Z.eagerState,
                next: null
              };
              Q = Q.next = Be;
            }
            if (Z.hasEagerState)
              U = Z.eagerState;
            else {
              var Ht = Z.action;
              U = e(U, Ht);
            }
          } else {
            var Xe = {
              lane: Se,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            };
            Q === null ? (W = Q = Xe, N = U) : Q = Q.next = Xe, an.lanes = bt(an.lanes, Se), fv(Se);
          }
          Z = Z.next;
        } while (Z !== null && Z !== R);
        Q === null ? N = U : Q.next = W, Ae(U, a.memoizedState) || Jp(), a.memoizedState = U, a.baseState = N, a.baseQueue = Q, l.lastRenderedState = U;
      }
      var At = l.interleaved;
      if (At !== null) {
        var j = At;
        do {
          var J = j.lane;
          an.lanes = bt(an.lanes, J), fv(J), j = j.next;
        } while (j !== At);
      } else v === null && (l.lanes = te);
      var F = l.dispatch;
      return [a.memoizedState, F];
    }
    function Eb(e, t, i) {
      var a = Ua(), l = a.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var f = l.dispatch, v = l.pending, m = a.memoizedState;
      if (v !== null) {
        l.pending = null;
        var b = v.next, w = b;
        do {
          var R = w.action;
          m = e(m, R), w = w.next;
        } while (w !== b);
        Ae(m, a.memoizedState) || Jp(), a.memoizedState = m, a.baseQueue === null && (a.baseState = m), l.lastRenderedState = m;
      }
      return [m, f];
    }
    function VA(e, t, i) {
    }
    function IA(e, t, i) {
    }
    function Cb(e, t, i) {
      var a = an, l = qo(), f, v = Qr();
      if (v) {
        if (i === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        f = i(), Yf || f !== i() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      } else {
        if (f = t(), !Yf) {
          var m = t();
          Ae(f, m) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
        }
        var b = uy();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        As(b, rc) || YE(a, t, f);
      }
      l.memoizedState = f;
      var w = {
        value: f,
        getSnapshot: t
      };
      return l.queue = w, Nm(QE.bind(null, a, w, e), [e]), a.flags |= Sn, Wp(Sr | qr, GE.bind(null, a, w, f, t), void 0, null), f;
    }
    function Lm(e, t, i) {
      var a = an, l = Ua(), f = t();
      if (!Yf) {
        var v = t();
        Ae(f, v) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      }
      var m = l.memoizedState, b = !Ae(m, f);
      b && (l.memoizedState = f, Jp());
      var w = l.queue;
      if (Gp(QE.bind(null, a, w, e), [e]), w.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      wr !== null && wr.memoizedState.tag & Sr) {
        a.flags |= Sn, Wp(Sr | qr, GE.bind(null, a, w, f, t), void 0, null);
        var R = uy();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        As(R, rc) || YE(a, t, f);
      }
      return f;
    }
    function YE(e, t, i) {
      e.flags |= ws;
      var a = {
        getSnapshot: t,
        value: i
      }, l = an.updateQueue;
      if (l === null)
        l = WE(), an.updateQueue = l, l.stores = [a];
      else {
        var f = l.stores;
        f === null ? l.stores = [a] : f.push(a);
      }
    }
    function GE(e, t, i, a) {
      t.value = i, t.getSnapshot = a, qE(t) && KE(e);
    }
    function QE(e, t, i) {
      var a = function() {
        qE(t) && KE(e);
      };
      return i(a);
    }
    function qE(e) {
      var t = e.getSnapshot, i = e.value;
      try {
        var a = t();
        return !Ae(i, a);
      } catch {
        return !0;
      }
    }
    function KE(e) {
      var t = ia(e, Ye);
      t !== null && kr(t, e, Ye, fn);
    }
    function Mm(e) {
      var t = qo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: gb,
        lastRenderedState: e
      };
      t.queue = i;
      var a = i.dispatch = Ck.bind(null, an, i);
      return [t.memoizedState, a];
    }
    function wb(e) {
      return Sb(gb);
    }
    function Tb(e) {
      return Eb(gb);
    }
    function Wp(e, t, i, a) {
      var l = {
        tag: e,
        create: t,
        destroy: i,
        deps: a,
        // Circular
        next: null
      }, f = an.updateQueue;
      if (f === null)
        f = WE(), an.updateQueue = f, f.lastEffect = l.next = l;
      else {
        var v = f.lastEffect;
        if (v === null)
          f.lastEffect = l.next = l;
        else {
          var m = v.next;
          v.next = l, l.next = m, f.lastEffect = l;
        }
      }
      return l;
    }
    function Rb(e) {
      var t = qo();
      {
        var i = {
          current: e
        };
        return t.memoizedState = i, i;
      }
    }
    function Am(e) {
      var t = Ua();
      return t.memoizedState;
    }
    function Yp(e, t, i, a) {
      var l = qo(), f = a === void 0 ? null : a;
      an.flags |= e, l.memoizedState = Wp(Sr | t, i, void 0, f);
    }
    function $m(e, t, i, a) {
      var l = Ua(), f = a === void 0 ? null : a, v = void 0;
      if (Cr !== null) {
        var m = Cr.memoizedState;
        if (v = m.destroy, f !== null) {
          var b = m.deps;
          if (yb(f, b)) {
            l.memoizedState = Wp(t, i, v, f);
            return;
          }
        }
      }
      an.flags |= e, l.memoizedState = Wp(Sr | t, i, v, f);
    }
    function Nm(e, t) {
      return (an.mode & Li) !== Fe ? Yp(dl | Sn | zo, qr, e, t) : Yp(Sn | zo, qr, e, t);
    }
    function Gp(e, t) {
      return $m(Sn, qr, e, t);
    }
    function xb(e, t) {
      return Yp(Et, Qo, e, t);
    }
    function zm(e, t) {
      return $m(Et, Qo, e, t);
    }
    function kb(e, t) {
      var i = Et;
      return i |= ci, (an.mode & Li) !== Fe && (i |= fi), Yp(i, Er, e, t);
    }
    function Um(e, t) {
      return $m(Et, Er, e, t);
    }
    function XE(e, t) {
      if (typeof t == "function") {
        var i = t, a = e();
        return i(a), function() {
          i(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var f = e();
        return l.current = f, function() {
          l.current = null;
        };
      }
    }
    function _b(e, t, i) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null, l = Et;
      return l |= ci, (an.mode & Li) !== Fe && (l |= fi), Yp(l, Er, XE.bind(null, t, e), a);
    }
    function Pm(e, t, i) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null;
      return $m(Et, Er, XE.bind(null, t, e), a);
    }
    function gk(e, t) {
    }
    var Hm = gk;
    function Db(e, t) {
      var i = qo(), a = t === void 0 ? null : t;
      return i.memoizedState = [e, a], e;
    }
    function jm(e, t) {
      var i = Ua(), a = t === void 0 ? null : t, l = i.memoizedState;
      if (l !== null && a !== null) {
        var f = l[1];
        if (yb(a, f))
          return l[0];
      }
      return i.memoizedState = [e, a], e;
    }
    function Ob(e, t) {
      var i = qo(), a = t === void 0 ? null : t, l = e();
      return i.memoizedState = [l, a], l;
    }
    function Fm(e, t) {
      var i = Ua(), a = t === void 0 ? null : t, l = i.memoizedState;
      if (l !== null && a !== null) {
        var f = l[1];
        if (yb(a, f))
          return l[0];
      }
      var v = e();
      return i.memoizedState = [v, a], v;
    }
    function Lb(e) {
      var t = qo();
      return t.memoizedState = e, e;
    }
    function ZE(e) {
      var t = Ua(), i = Cr, a = i.memoizedState;
      return eC(t, a, e);
    }
    function JE(e) {
      var t = Ua();
      if (Cr === null)
        return t.memoizedState = e, e;
      var i = Cr.memoizedState;
      return eC(t, i, e);
    }
    function eC(e, t, i) {
      var a = !yh(rc);
      if (a) {
        if (!Ae(i, t)) {
          var l = Sh();
          an.lanes = bt(an.lanes, l), fv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Jp()), e.memoizedState = i, i;
    }
    function bk(e, t, i) {
      var a = Zi();
      An(Xy(a, no)), e(!0);
      var l = Vp.transition;
      Vp.transition = {};
      var f = Vp.transition;
      Vp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (An(a), Vp.transition = l, l === null && f._updatedFibers) {
          var v = f._updatedFibers.size;
          v > 10 && T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), f._updatedFibers.clear();
        }
      }
    }
    function Mb() {
      var e = Mm(!1), t = e[0], i = e[1], a = bk.bind(null, i), l = qo();
      return l.memoizedState = a, [t, a];
    }
    function tC() {
      var e = wb(), t = e[0], i = Ua(), a = i.memoizedState;
      return [t, a];
    }
    function nC() {
      var e = Tb(), t = e[0], i = Ua(), a = i.memoizedState;
      return [t, a];
    }
    var rC = !1;
    function Sk() {
      return rC;
    }
    function Ab() {
      var e = qo(), t = uy(), i = t.identifierPrefix, a;
      if (Qr()) {
        var l = Ux();
        a = ":" + i + "R" + l;
        var f = Bp++;
        f > 0 && (a += "H" + f.toString(32)), a += ":";
      } else {
        var v = hk++;
        a = ":" + i + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = a, a;
    }
    function Vm() {
      var e = Ua(), t = e.memoizedState;
      return t;
    }
    function Ek(e, t, i) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = es(e), l = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (iC(e))
        aC(t, l);
      else {
        var f = AE(e, t, l, a);
        if (f !== null) {
          var v = Ni();
          kr(f, e, a, v), oC(f, t, a);
        }
      }
      lC(e, a);
    }
    function Ck(e, t, i) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = es(e), l = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (iC(e))
        aC(t, l);
      else {
        var f = e.alternate;
        if (e.lanes === te && (f === null || f.lanes === te)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var m;
            m = xe.current, xe.current = co;
            try {
              var b = t.lastRenderedState, w = v(b, i);
              if (l.hasEagerState = !0, l.eagerState = w, Ae(w, b)) {
                ok(e, t, l, a);
                return;
              }
            } catch {
            } finally {
              xe.current = m;
            }
          }
        }
        var R = AE(e, t, l, a);
        if (R !== null) {
          var U = Ni();
          kr(R, e, a, U), oC(R, t, a);
        }
      }
      lC(e, a);
    }
    function iC(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function aC(e, t) {
      Ip = Om = !0;
      var i = e.pending;
      i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
    }
    function oC(e, t, i) {
      if (Jd(i)) {
        var a = t.lanes;
        a = af(a, e.pendingLanes);
        var l = bt(a, i);
        t.lanes = l, ep(e, l);
      }
    }
    function lC(e, t, i) {
      ks(e, t);
    }
    var Im = {
      readContext: pr,
      useCallback: Ei,
      useContext: Ei,
      useEffect: Ei,
      useImperativeHandle: Ei,
      useInsertionEffect: Ei,
      useLayoutEffect: Ei,
      useMemo: Ei,
      useReducer: Ei,
      useRef: Ei,
      useState: Ei,
      useDebugValue: Ei,
      useDeferredValue: Ei,
      useTransition: Ei,
      useMutableSource: Ei,
      useSyncExternalStore: Ei,
      useId: Ei,
      unstable_isNewReconciler: ce
    }, uC = null, sC = null, cC = null, fC = null, Ko = null, co = null, Bm = null;
    {
      var $b = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, vt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      uC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", en(), Gf(t), Db(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", en(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", en(), Gf(t), Nm(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", en(), Gf(i), _b(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", en(), Gf(t), xb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", en(), Gf(t), kb(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", en(), Gf(t);
          var i = xe.current;
          xe.current = Ko;
          try {
            return Ob(e, t);
          } finally {
            xe.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", en();
          var a = xe.current;
          xe.current = Ko;
          try {
            return bb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", en(), Rb(e);
        },
        useState: function(e) {
          ee = "useState", en();
          var t = xe.current;
          xe.current = Ko;
          try {
            return Mm(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", en(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", en(), Lb(e);
        },
        useTransition: function() {
          return ee = "useTransition", en(), Mb();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", en(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", en(), Cb(e, t, i);
        },
        useId: function() {
          return ee = "useId", en(), Ab();
        },
        unstable_isNewReconciler: ce
      }, sC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", me(), Db(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", me(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", me(), Nm(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", me(), _b(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), xb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), kb(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var i = xe.current;
          xe.current = Ko;
          try {
            return Ob(e, t);
          } finally {
            xe.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", me();
          var a = xe.current;
          xe.current = Ko;
          try {
            return bb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), Rb(e);
        },
        useState: function(e) {
          ee = "useState", me();
          var t = xe.current;
          xe.current = Ko;
          try {
            return Mm(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), Lb(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), Mb();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", me(), Cb(e, t, i);
        },
        useId: function() {
          return ee = "useId", me(), Ab();
        },
        unstable_isNewReconciler: ce
      }, cC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", me(), jm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", me(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", me(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", me(), Pm(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), Um(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var i = xe.current;
          xe.current = co;
          try {
            return Fm(e, t);
          } finally {
            xe.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", me();
          var a = xe.current;
          xe.current = co;
          try {
            return Sb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), Am();
        },
        useState: function(e) {
          ee = "useState", me();
          var t = xe.current;
          xe.current = co;
          try {
            return wb(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), Hm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), ZE(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), tC();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", me(), Lm(e, t);
        },
        useId: function() {
          return ee = "useId", me(), Vm();
        },
        unstable_isNewReconciler: ce
      }, fC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", me(), jm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", me(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", me(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", me(), Pm(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), Um(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var i = xe.current;
          xe.current = Bm;
          try {
            return Fm(e, t);
          } finally {
            xe.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", me();
          var a = xe.current;
          xe.current = Bm;
          try {
            return Eb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), Am();
        },
        useState: function(e) {
          ee = "useState", me();
          var t = xe.current;
          xe.current = Bm;
          try {
            return Tb(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), Hm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), JE(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), nC();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", me(), Lm(e, t);
        },
        useId: function() {
          return ee = "useId", me(), Vm();
        },
        unstable_isNewReconciler: ce
      }, Ko = {
        readContext: function(e) {
          return $b(), pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", vt(), en(), Db(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", vt(), en(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", vt(), en(), Nm(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", vt(), en(), _b(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", vt(), en(), xb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", vt(), en(), kb(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", vt(), en();
          var i = xe.current;
          xe.current = Ko;
          try {
            return Ob(e, t);
          } finally {
            xe.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", vt(), en();
          var a = xe.current;
          xe.current = Ko;
          try {
            return bb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", vt(), en(), Rb(e);
        },
        useState: function(e) {
          ee = "useState", vt(), en();
          var t = xe.current;
          xe.current = Ko;
          try {
            return Mm(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", vt(), en(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", vt(), en(), Lb(e);
        },
        useTransition: function() {
          return ee = "useTransition", vt(), en(), Mb();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", vt(), en(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", vt(), en(), Cb(e, t, i);
        },
        useId: function() {
          return ee = "useId", vt(), en(), Ab();
        },
        unstable_isNewReconciler: ce
      }, co = {
        readContext: function(e) {
          return $b(), pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", vt(), me(), jm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", vt(), me(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", vt(), me(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", vt(), me(), Pm(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", vt(), me(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", vt(), me(), Um(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", vt(), me();
          var i = xe.current;
          xe.current = co;
          try {
            return Fm(e, t);
          } finally {
            xe.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", vt(), me();
          var a = xe.current;
          xe.current = co;
          try {
            return Sb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", vt(), me(), Am();
        },
        useState: function(e) {
          ee = "useState", vt(), me();
          var t = xe.current;
          xe.current = co;
          try {
            return wb(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", vt(), me(), Hm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", vt(), me(), ZE(e);
        },
        useTransition: function() {
          return ee = "useTransition", vt(), me(), tC();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", vt(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", vt(), me(), Lm(e, t);
        },
        useId: function() {
          return ee = "useId", vt(), me(), Vm();
        },
        unstable_isNewReconciler: ce
      }, Bm = {
        readContext: function(e) {
          return $b(), pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", vt(), me(), jm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", vt(), me(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", vt(), me(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", vt(), me(), Pm(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", vt(), me(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", vt(), me(), Um(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", vt(), me();
          var i = xe.current;
          xe.current = co;
          try {
            return Fm(e, t);
          } finally {
            xe.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", vt(), me();
          var a = xe.current;
          xe.current = co;
          try {
            return Eb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", vt(), me(), Am();
        },
        useState: function(e) {
          ee = "useState", vt(), me();
          var t = xe.current;
          xe.current = co;
          try {
            return Tb(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", vt(), me(), Hm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", vt(), me(), JE(e);
        },
        useTransition: function() {
          return ee = "useTransition", vt(), me(), nC();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", vt(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", vt(), me(), Lm(e, t);
        },
        useId: function() {
          return ee = "useId", vt(), me(), Vm();
        },
        unstable_isNewReconciler: ce
      };
    }
    var Ku = u.unstable_now, dC = 0, Wm = -1, Qp = -1, Ym = -1, Nb = !1, Gm = !1;
    function pC() {
      return Nb;
    }
    function wk() {
      Gm = !0;
    }
    function Tk() {
      Nb = !1, Gm = !1;
    }
    function Rk() {
      Nb = Gm, Gm = !1;
    }
    function vC() {
      return dC;
    }
    function hC() {
      dC = Ku();
    }
    function zb(e) {
      Qp = Ku(), e.actualStartTime < 0 && (e.actualStartTime = Ku());
    }
    function mC(e) {
      Qp = -1;
    }
    function Qm(e, t) {
      if (Qp >= 0) {
        var i = Ku() - Qp;
        e.actualDuration += i, t && (e.selfBaseDuration = i), Qp = -1;
      }
    }
    function Xo(e) {
      if (Wm >= 0) {
        var t = Ku() - Wm;
        Wm = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case A:
              var a = i.stateNode;
              a.effectDuration += t;
              return;
            case ut:
              var l = i.stateNode;
              l.effectDuration += t;
              return;
          }
          i = i.return;
        }
      }
    }
    function Ub(e) {
      if (Ym >= 0) {
        var t = Ku() - Ym;
        Ym = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case A:
              var a = i.stateNode;
              a !== null && (a.passiveEffectDuration += t);
              return;
            case ut:
              var l = i.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          i = i.return;
        }
      }
    }
    function Zo() {
      Wm = Ku();
    }
    function Pb() {
      Ym = Ku();
    }
    function Hb(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function fo(e, t) {
      if (e && e.defaultProps) {
        var i = _t({}, t), a = e.defaultProps;
        for (var l in a)
          i[l] === void 0 && (i[l] = a[l]);
        return i;
      }
      return t;
    }
    var jb = {}, Fb, Vb, Ib, Bb, Wb, yC, qm, Yb, Gb, Qb, qp;
    {
      Fb = /* @__PURE__ */ new Set(), Vb = /* @__PURE__ */ new Set(), Ib = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set(), Yb = /* @__PURE__ */ new Set(), Wb = /* @__PURE__ */ new Set(), Gb = /* @__PURE__ */ new Set(), Qb = /* @__PURE__ */ new Set(), qp = /* @__PURE__ */ new Set();
      var gC = /* @__PURE__ */ new Set();
      qm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          gC.has(i) || (gC.add(i), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, yC = function(e, t) {
        if (t === void 0) {
          var i = Nt(e) || "Component";
          Wb.has(i) || (Wb.add(i), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, Object.defineProperty(jb, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(jb);
    }
    function qb(e, t, i, a) {
      var l = e.memoizedState, f = i(a, l);
      {
        if (e.mode & Ot) {
          Wn(!0);
          try {
            f = i(a, l);
          } finally {
            Wn(!1);
          }
        }
        yC(t, f);
      }
      var v = f == null ? l : _t({}, l, f);
      if (e.memoizedState = v, e.lanes === te) {
        var m = e.updateQueue;
        m.baseState = v;
      }
    }
    var Kb = {
      isMounted: Di,
      enqueueSetState: function(e, t, i) {
        var a = Bi(e), l = Ni(), f = es(a), v = $l(l, f);
        v.payload = t, i != null && (qm(i, "setState"), v.callback = i);
        var m = Yu(a, v, f);
        m !== null && (kr(m, a, f, l), Tm(m, a, f)), ks(a, f);
      },
      enqueueReplaceState: function(e, t, i) {
        var a = Bi(e), l = Ni(), f = es(a), v = $l(l, f);
        v.tag = NE, v.payload = t, i != null && (qm(i, "replaceState"), v.callback = i);
        var m = Yu(a, v, f);
        m !== null && (kr(m, a, f, l), Tm(m, a, f)), ks(a, f);
      },
      enqueueForceUpdate: function(e, t) {
        var i = Bi(e), a = Ni(), l = es(i), f = $l(a, l);
        f.tag = Em, t != null && (qm(t, "forceUpdate"), f.callback = t);
        var v = Yu(i, f, l);
        v !== null && (kr(v, i, l, a), Tm(v, i, l)), Fc(i, l);
      }
    };
    function bC(e, t, i, a, l, f, v) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        var b = m.shouldComponentUpdate(a, f, v);
        {
          if (e.mode & Ot) {
            Wn(!0);
            try {
              b = m.shouldComponentUpdate(a, f, v);
            } finally {
              Wn(!1);
            }
          }
          b === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Nt(t) || "Component");
        }
        return b;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !it(i, a) || !it(l, f) : !0;
    }
    function xk(e, t, i) {
      var a = e.stateNode;
      {
        var l = Nt(t) || "Component", f = a.render;
        f || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), a.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), a.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !qp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ot) === Fe && (qp.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !qp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ot) === Fe && (qp.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), a.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !Gb.has(t) && (Gb.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof a.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Nt(t) || "A pure component"), typeof a.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof a.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof a.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof a.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var v = a.props !== i;
        a.props !== void 0 && v && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), a.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !Ib.has(t) && (Ib.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Nt(t))), typeof a.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof a.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var m = a.state;
        m && (typeof m != "object" || zt(m)) && g("%s.state: must be set to an object or null", l), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function SC(e, t) {
      t.updater = Kb, e.stateNode = t, su(t, e), t._reactInternalInstance = jb;
    }
    function EC(e, t, i) {
      var a = !1, l = ga, f = ga, v = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === ne && v._context === void 0
        );
        if (!m && !Qb.has(t)) {
          Qb.add(t);
          var b = "";
          v === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? b = " However, it is set to a " + typeof v + "." : v.$$typeof === O ? b = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Nt(t) || "Component", b);
        }
      }
      if (typeof v == "object" && v !== null)
        f = pr(v);
      else {
        l = Nf(e, t, !0);
        var w = t.contextTypes;
        a = w != null, f = a ? zf(e, l) : ga;
      }
      var R = new t(i, f);
      if (e.mode & Ot) {
        Wn(!0);
        try {
          R = new t(i, f);
        } finally {
          Wn(!1);
        }
      }
      var U = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      SC(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && U === null) {
          var N = Nt(t) || "Component";
          Vb.has(N) || (Vb.add(N), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, R.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var W = null, Q = null, Z = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Q = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (Q = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), W !== null || Q !== null || Z !== null) {
            var Se = Nt(t) || "Component", Xe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Bb.has(Se) || (Bb.add(Se), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Se, Xe, W !== null ? `
  ` + W : "", Q !== null ? `
  ` + Q : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return a && cE(e, l, f), R;
    }
    function kk(e, t) {
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), i !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", pt(e) || "Component"), Kb.enqueueReplaceState(t, t.state, null));
    }
    function CC(e, t, i, a) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, a), t.state !== l) {
        {
          var f = pt(e) || "Component";
          Fb.has(f) || (Fb.add(f), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", f));
        }
        Kb.enqueueReplaceState(t, t.state, null);
      }
    }
    function Xb(e, t, i, a) {
      xk(e, t, i);
      var l = e.stateNode;
      l.props = i, l.state = e.memoizedState, l.refs = {}, ob(e);
      var f = t.contextType;
      if (typeof f == "object" && f !== null)
        l.context = pr(f);
      else {
        var v = Nf(e, t, !0);
        l.context = zf(e, v);
      }
      {
        if (l.state === i) {
          var m = Nt(t) || "Component";
          Yb.has(m) || (Yb.add(m), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & Ot && uo.recordLegacyContextWarning(e, l), uo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var b = t.getDerivedStateFromProps;
      if (typeof b == "function" && (qb(e, t, b, i), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (kk(e, l), Rm(e, i, l, a), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var w = Et;
        w |= ci, (e.mode & Li) !== Fe && (w |= fi), e.flags |= w;
      }
    }
    function _k(e, t, i, a) {
      var l = e.stateNode, f = e.memoizedProps;
      l.props = f;
      var v = l.context, m = t.contextType, b = ga;
      if (typeof m == "object" && m !== null)
        b = pr(m);
      else {
        var w = Nf(e, t, !0);
        b = zf(e, w);
      }
      var R = t.getDerivedStateFromProps, U = typeof R == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !U && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (f !== i || v !== b) && CC(e, l, i, b), UE();
      var N = e.memoizedState, W = l.state = N;
      if (Rm(e, i, l, a), W = e.memoizedState, f === i && N === W && !om() && !xm()) {
        if (typeof l.componentDidMount == "function") {
          var Q = Et;
          Q |= ci, (e.mode & Li) !== Fe && (Q |= fi), e.flags |= Q;
        }
        return !1;
      }
      typeof R == "function" && (qb(e, t, R, i), W = e.memoizedState);
      var Z = xm() || bC(e, t, f, i, N, W, b);
      if (Z) {
        if (!U && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Se = Et;
          Se |= ci, (e.mode & Li) !== Fe && (Se |= fi), e.flags |= Se;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Xe = Et;
          Xe |= ci, (e.mode & Li) !== Fe && (Xe |= fi), e.flags |= Xe;
        }
        e.memoizedProps = i, e.memoizedState = W;
      }
      return l.props = i, l.state = W, l.context = b, Z;
    }
    function Dk(e, t, i, a, l) {
      var f = t.stateNode;
      zE(e, t);
      var v = t.memoizedProps, m = t.type === t.elementType ? v : fo(t.type, v);
      f.props = m;
      var b = t.pendingProps, w = f.context, R = i.contextType, U = ga;
      if (typeof R == "object" && R !== null)
        U = pr(R);
      else {
        var N = Nf(t, i, !0);
        U = zf(t, N);
      }
      var W = i.getDerivedStateFromProps, Q = typeof W == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !Q && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (v !== b || w !== U) && CC(t, f, a, U), UE();
      var Z = t.memoizedState, Se = f.state = Z;
      if (Rm(t, a, f, l), Se = t.memoizedState, v === b && Z === Se && !om() && !xm() && !Le)
        return typeof f.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Et), typeof f.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Wi), !1;
      typeof W == "function" && (qb(t, i, W, a), Se = t.memoizedState);
      var Xe = xm() || bC(t, i, m, a, Z, Se, U) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Le;
      return Xe ? (!Q && (typeof f.UNSAFE_componentWillUpdate == "function" || typeof f.componentWillUpdate == "function") && (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(a, Se, U), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(a, Se, U)), typeof f.componentDidUpdate == "function" && (t.flags |= Et), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= Wi)) : (typeof f.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Et), typeof f.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Wi), t.memoizedProps = a, t.memoizedState = Se), f.props = a, f.state = Se, f.context = U, Xe;
    }
    function ic(e, t) {
      return {
        value: e,
        source: t,
        stack: Kl(t),
        digest: null
      };
    }
    function Zb(e, t, i) {
      return {
        value: e,
        source: null,
        stack: i ?? null,
        digest: t ?? null
      };
    }
    function Ok(e, t) {
      return !0;
    }
    function Jb(e, t) {
      try {
        var i = Ok(e, t);
        if (i === !1)
          return;
        var a = t.value, l = t.source, f = t.stack, v = f !== null ? f : "";
        if (a != null && a._suppressLogging) {
          if (e.tag === L)
            return;
          console.error(a);
        }
        var m = l ? pt(l) : null, b = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", w;
        if (e.tag === A)
          w = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = pt(e) || "Anonymous";
          w = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var U = b + `
` + v + `

` + ("" + w);
        console.error(U);
      } catch (N) {
        setTimeout(function() {
          throw N;
        });
      }
    }
    var Lk = typeof WeakMap == "function" ? WeakMap : Map;
    function wC(e, t, i) {
      var a = $l(fn, i);
      a.tag = ib, a.payload = {
        element: null
      };
      var l = t.value;
      return a.callback = function() {
        wD(l), Jb(e, t);
      }, a;
    }
    function e0(e, t, i) {
      var a = $l(fn, i);
      a.tag = ib;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var f = t.value;
        a.payload = function() {
          return l(f);
        }, a.callback = function() {
          $w(e), Jb(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (a.callback = function() {
        $w(e), Jb(e, t), typeof l != "function" && ED(this);
        var b = t.value, w = t.stack;
        this.componentDidCatch(b, {
          componentStack: w !== null ? w : ""
        }), typeof l != "function" && (yi(e.lanes, Ye) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", pt(e) || "Unknown"));
      }), a;
    }
    function TC(e, t, i) {
      var a = e.pingCache, l;
      if (a === null ? (a = e.pingCache = new Lk(), l = /* @__PURE__ */ new Set(), a.set(t, l)) : (l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l))), !l.has(i)) {
        l.add(i);
        var f = TD.bind(null, e, t, i);
        Oi && dv(e, i), t.then(f, f);
      }
    }
    function Mk(e, t, i, a) {
      var l = e.updateQueue;
      if (l === null) {
        var f = /* @__PURE__ */ new Set();
        f.add(i), e.updateQueue = f;
      } else
        l.add(i);
    }
    function Ak(e, t) {
      var i = e.tag;
      if ((e.mode & Ie) === Fe && (i === x || i === Ue || i === ge)) {
        var a = e.alternate;
        a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function RC(e) {
      var t = e;
      do {
        if (t.tag === Oe && pk(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function xC(e, t, i, a, l) {
      if ((e.mode & Ie) === Fe) {
        if (e === t)
          e.flags |= sr;
        else {
          if (e.flags |= ft, i.flags |= Ts, i.flags &= ~(Dc | ki), i.tag === L) {
            var f = i.alternate;
            if (f === null)
              i.tag = _e;
            else {
              var v = $l(fn, Ye);
              v.tag = Em, Yu(i, v, Ye);
            }
          }
          i.lanes = bt(i.lanes, Ye);
        }
        return e;
      }
      return e.flags |= sr, e.lanes = l, e;
    }
    function $k(e, t, i, a, l) {
      if (i.flags |= ki, Oi && dv(e, l), a !== null && typeof a == "object" && typeof a.then == "function") {
        var f = a;
        Ak(i), Qr() && i.mode & Ie && yE();
        var v = RC(t);
        if (v !== null) {
          v.flags &= ~Mn, xC(v, t, i, e, l), v.mode & Ie && TC(e, f, l), Mk(v, e, f);
          return;
        } else {
          if (!Zd(l)) {
            TC(e, f, l), A0();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          a = m;
        }
      } else if (Qr() && i.mode & Ie) {
        yE();
        var b = RC(t);
        if (b !== null) {
          (b.flags & sr) === Ke && (b.flags |= Mn), xC(b, t, i, e, l), Yg(ic(a, i));
          return;
        }
      }
      a = ic(a, i), pD(a);
      var w = t;
      do {
        switch (w.tag) {
          case A: {
            var R = a;
            w.flags |= sr;
            var U = wu(l);
            w.lanes = bt(w.lanes, U);
            var N = wC(w, R, U);
            lb(w, N);
            return;
          }
          case L:
            var W = a, Q = w.type, Z = w.stateNode;
            if ((w.flags & ft) === Ke && (typeof Q.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && !Rw(Z))) {
              w.flags |= sr;
              var Se = wu(l);
              w.lanes = bt(w.lanes, Se);
              var Xe = e0(w, W, Se);
              lb(w, Xe);
              return;
            }
            break;
        }
        w = w.return;
      } while (w !== null);
    }
    function Nk() {
      return null;
    }
    var Kp = d.ReactCurrentOwner, po = !1, t0, Xp, n0, r0, i0, ac, a0, Km, Zp;
    t0 = {}, Xp = {}, n0 = {}, r0 = {}, i0 = {}, ac = !1, a0 = {}, Km = {}, Zp = {};
    function Ai(e, t, i, a) {
      e === null ? t.child = DE(t, null, i, a) : t.child = jf(t, e.child, i, a);
    }
    function zk(e, t, i, a) {
      t.child = jf(t, e.child, null, a), t.child = jf(t, null, i, a);
    }
    function kC(e, t, i, a, l) {
      if (t.type !== t.elementType) {
        var f = i.propTypes;
        f && oo(
          f,
          a,
          // Resolved props
          "prop",
          Nt(i)
        );
      }
      var v = i.render, m = t.ref, b, w;
      Vf(t, l), pu(t);
      {
        if (Kp.current = t, li(!0), b = Qf(e, t, v, a, m, l), w = qf(), t.mode & Ot) {
          Wn(!0);
          try {
            b = Qf(e, t, v, a, m, l), w = qf();
          } finally {
            Wn(!1);
          }
        }
        li(!1);
      }
      return vi(), e !== null && !po ? (IE(e, t, l), Nl(e, t, l)) : (Qr() && w && jg(t), t.flags |= $o, Ai(e, t, b, l), t.child);
    }
    function _C(e, t, i, a, l) {
      if (e === null) {
        var f = i.type;
        if (FD(f) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var v = f;
          return v = rd(f), t.tag = ge, t.type = v, u0(t, f), DC(e, t, v, a, l);
        }
        {
          var m = f.propTypes;
          if (m && oo(
            m,
            a,
            // Resolved props
            "prop",
            Nt(f)
          ), i.defaultProps !== void 0) {
            var b = Nt(f) || "Unknown";
            Zp[b] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", b), Zp[b] = !0);
          }
        }
        var w = B0(i.type, null, a, t, t.mode, l);
        return w.ref = t.ref, w.return = t, t.child = w, w;
      }
      {
        var R = i.type, U = R.propTypes;
        U && oo(
          U,
          a,
          // Resolved props
          "prop",
          Nt(R)
        );
      }
      var N = e.child, W = v0(e, l);
      if (!W) {
        var Q = N.memoizedProps, Z = i.compare;
        if (Z = Z !== null ? Z : it, Z(Q, a) && e.ref === t.ref)
          return Nl(e, t, l);
      }
      t.flags |= $o;
      var Se = cc(N, a);
      return Se.ref = t.ref, Se.return = t, t.child = Se, Se;
    }
    function DC(e, t, i, a, l) {
      if (t.type !== t.elementType) {
        var f = t.elementType;
        if (f.$$typeof === Qe) {
          var v = f, m = v._payload, b = v._init;
          try {
            f = b(m);
          } catch {
            f = null;
          }
          var w = f && f.propTypes;
          w && oo(
            w,
            a,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Nt(f)
          );
        }
      }
      if (e !== null) {
        var R = e.memoizedProps;
        if (it(R, a) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (po = !1, t.pendingProps = a = R, v0(e, l))
            (e.flags & Ts) !== Ke && (po = !0);
          else return t.lanes = e.lanes, Nl(e, t, l);
      }
      return o0(e, t, i, a, l);
    }
    function OC(e, t, i) {
      var a = t.pendingProps, l = a.children, f = e !== null ? e.memoizedState : null;
      if (a.mode === "hidden" || oe)
        if ((t.mode & Ie) === Fe) {
          var v = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, sy(t, i);
        } else if (yi(i, Ur)) {
          var U = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = U;
          var N = f !== null ? f.baseLanes : i;
          sy(t, N);
        } else {
          var m = null, b;
          if (f !== null) {
            var w = f.baseLanes;
            b = bt(w, i);
          } else
            b = i;
          t.lanes = t.childLanes = Ur;
          var R = {
            baseLanes: b,
            cachePool: m,
            transitions: null
          };
          return t.memoizedState = R, t.updateQueue = null, sy(t, b), null;
        }
      else {
        var W;
        f !== null ? (W = bt(f.baseLanes, i), t.memoizedState = null) : W = i, sy(t, W);
      }
      return Ai(e, t, l, i), t.child;
    }
    function Uk(e, t, i) {
      var a = t.pendingProps;
      return Ai(e, t, a, i), t.child;
    }
    function Pk(e, t, i) {
      var a = t.pendingProps.children;
      return Ai(e, t, a, i), t.child;
    }
    function Hk(e, t, i) {
      {
        t.flags |= Et;
        {
          var a = t.stateNode;
          a.effectDuration = 0, a.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, f = l.children;
      return Ai(e, t, f, i), t.child;
    }
    function LC(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= si, t.flags |= Hd);
    }
    function o0(e, t, i, a, l) {
      if (t.type !== t.elementType) {
        var f = i.propTypes;
        f && oo(
          f,
          a,
          // Resolved props
          "prop",
          Nt(i)
        );
      }
      var v;
      {
        var m = Nf(t, i, !0);
        v = zf(t, m);
      }
      var b, w;
      Vf(t, l), pu(t);
      {
        if (Kp.current = t, li(!0), b = Qf(e, t, i, a, v, l), w = qf(), t.mode & Ot) {
          Wn(!0);
          try {
            b = Qf(e, t, i, a, v, l), w = qf();
          } finally {
            Wn(!1);
          }
        }
        li(!1);
      }
      return vi(), e !== null && !po ? (IE(e, t, l), Nl(e, t, l)) : (Qr() && w && jg(t), t.flags |= $o, Ai(e, t, b, l), t.child);
    }
    function MC(e, t, i, a, l) {
      {
        switch (nO(t)) {
          case !1: {
            var f = t.stateNode, v = t.type, m = new v(t.memoizedProps, f.context), b = m.state;
            f.updater.enqueueSetState(f, b, null);
            break;
          }
          case !0: {
            t.flags |= ft, t.flags |= sr;
            var w = new Error("Simulated error coming from DevTools"), R = wu(l);
            t.lanes = bt(t.lanes, R);
            var U = e0(t, ic(w, t), R);
            lb(t, U);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var N = i.propTypes;
          N && oo(
            N,
            a,
            // Resolved props
            "prop",
            Nt(i)
          );
        }
      }
      var W;
      Go(i) ? (W = !0, um(t)) : W = !1, Vf(t, l);
      var Q = t.stateNode, Z;
      Q === null ? (Zm(e, t), EC(t, i, a), Xb(t, i, a, l), Z = !0) : e === null ? Z = _k(t, i, a, l) : Z = Dk(e, t, i, a, l);
      var Se = l0(e, t, i, Z, W, l);
      {
        var Xe = t.stateNode;
        Z && Xe.props !== a && (ac || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", pt(t) || "a component"), ac = !0);
      }
      return Se;
    }
    function l0(e, t, i, a, l, f) {
      LC(e, t);
      var v = (t.flags & ft) !== Ke;
      if (!a && !v)
        return l && pE(t, i, !1), Nl(e, t, f);
      var m = t.stateNode;
      Kp.current = t;
      var b;
      if (v && typeof i.getDerivedStateFromError != "function")
        b = null, mC();
      else {
        pu(t);
        {
          if (li(!0), b = m.render(), t.mode & Ot) {
            Wn(!0);
            try {
              m.render();
            } finally {
              Wn(!1);
            }
          }
          li(!1);
        }
        vi();
      }
      return t.flags |= $o, e !== null && v ? zk(e, t, b, f) : Ai(e, t, b, f), t.memoizedState = m.state, l && pE(t, i, !0), t.child;
    }
    function AC(e) {
      var t = e.stateNode;
      t.pendingContext ? fE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && fE(e, t.context, !1), ub(e, t.containerInfo);
    }
    function jk(e, t, i) {
      if (AC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var a = t.pendingProps, l = t.memoizedState, f = l.element;
      zE(e, t), Rm(t, a, null, i);
      var v = t.memoizedState;
      t.stateNode;
      var m = v.element;
      if (l.isDehydrated) {
        var b = {
          element: m,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, w = t.updateQueue;
        if (w.baseState = b, t.memoizedState = b, t.flags & Mn) {
          var R = ic(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return $C(e, t, m, i, R);
        } else if (m !== f) {
          var U = ic(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return $C(e, t, m, i, U);
        } else {
          Ix(t);
          var N = DE(t, null, m, i);
          t.child = N;
          for (var W = N; W; )
            W.flags = W.flags & ~hn | Yi, W = W.sibling;
        }
      } else {
        if (Hf(), m === f)
          return Nl(e, t, i);
        Ai(e, t, m, i);
      }
      return t.child;
    }
    function $C(e, t, i, a, l) {
      return Hf(), Yg(l), t.flags |= Mn, Ai(e, t, i, a), t.child;
    }
    function Fk(e, t, i) {
      jE(t), e === null && Wg(t);
      var a = t.type, l = t.pendingProps, f = e !== null ? e.memoizedProps : null, v = l.children, m = xg(a, l);
      return m ? v = null : f !== null && xg(a, f) && (t.flags |= Jt), LC(e, t), Ai(e, t, v, i), t.child;
    }
    function Vk(e, t) {
      return e === null && Wg(t), null;
    }
    function Ik(e, t, i, a) {
      Zm(e, t);
      var l = t.pendingProps, f = i, v = f._payload, m = f._init, b = m(v);
      t.type = b;
      var w = t.tag = VD(b), R = fo(b, l), U;
      switch (w) {
        case x:
          return u0(t, b), t.type = b = rd(b), U = o0(null, t, b, R, a), U;
        case L:
          return t.type = b = P0(b), U = MC(null, t, b, R, a), U;
        case Ue:
          return t.type = b = H0(b), U = kC(null, t, b, R, a), U;
        case st: {
          if (t.type !== t.elementType) {
            var N = b.propTypes;
            N && oo(
              N,
              R,
              // Resolved for outer only
              "prop",
              Nt(b)
            );
          }
          return U = _C(
            null,
            t,
            b,
            fo(b.type, R),
            // The inner type can have defaults too
            a
          ), U;
        }
      }
      var W = "";
      throw b !== null && typeof b == "object" && b.$$typeof === Qe && (W = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + W));
    }
    function Bk(e, t, i, a, l) {
      Zm(e, t), t.tag = L;
      var f;
      return Go(i) ? (f = !0, um(t)) : f = !1, Vf(t, l), EC(t, i, a), Xb(t, i, a, l), l0(null, t, i, !0, f, l);
    }
    function Wk(e, t, i, a) {
      Zm(e, t);
      var l = t.pendingProps, f;
      {
        var v = Nf(t, i, !1);
        f = zf(t, v);
      }
      Vf(t, a);
      var m, b;
      pu(t);
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var w = Nt(i) || "Unknown";
          t0[w] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), t0[w] = !0);
        }
        t.mode & Ot && uo.recordLegacyContextWarning(t, null), li(!0), Kp.current = t, m = Qf(null, t, i, l, f, a), b = qf(), li(!1);
      }
      if (vi(), t.flags |= $o, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var R = Nt(i) || "Unknown";
        Xp[R] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Xp[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0
      ) {
        {
          var U = Nt(i) || "Unknown";
          Xp[U] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", U, U, U), Xp[U] = !0);
        }
        t.tag = L, t.memoizedState = null, t.updateQueue = null;
        var N = !1;
        return Go(i) ? (N = !0, um(t)) : N = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, ob(t), SC(t, m), Xb(t, i, l, a), l0(null, t, i, !0, N, a);
      } else {
        if (t.tag = x, t.mode & Ot) {
          Wn(!0);
          try {
            m = Qf(null, t, i, l, f, a), b = qf();
          } finally {
            Wn(!1);
          }
        }
        return Qr() && b && jg(t), Ai(null, t, m, a), u0(t, i), t.child;
      }
    }
    function u0(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var i = "", a = Wr();
          a && (i += `

Check the render method of \`` + a + "`.");
          var l = a || "", f = e._debugSource;
          f && (l = f.fileName + ":" + f.lineNumber), i0[l] || (i0[l] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (t.defaultProps !== void 0) {
          var v = Nt(t) || "Unknown";
          Zp[v] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", v), Zp[v] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var m = Nt(t) || "Unknown";
          r0[m] || (g("%s: Function components do not support getDerivedStateFromProps.", m), r0[m] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var b = Nt(t) || "Unknown";
          n0[b] || (g("%s: Function components do not support contextType.", b), n0[b] = !0);
        }
      }
    }
    var s0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Yn
    };
    function c0(e) {
      return {
        baseLanes: e,
        cachePool: Nk(),
        transitions: null
      };
    }
    function Yk(e, t) {
      var i = null;
      return {
        baseLanes: bt(e.baseLanes, t),
        cachePool: i,
        transitions: e.transitions
      };
    }
    function Gk(e, t, i, a) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return fb(e, Fp);
    }
    function Qk(e, t) {
      return $s(e.childLanes, t);
    }
    function NC(e, t, i) {
      var a = t.pendingProps;
      rO(t) && (t.flags |= ft);
      var l = so.current, f = !1, v = (t.flags & ft) !== Ke;
      if (v || Gk(l, e) ? (f = !0, t.flags &= ~ft) : (e === null || e.memoizedState !== null) && (l = dk(l, VE)), l = Bf(l), Qu(t, l), e === null) {
        Wg(t);
        var m = t.memoizedState;
        if (m !== null) {
          var b = m.dehydrated;
          if (b !== null)
            return Jk(t, b);
        }
        var w = a.children, R = a.fallback;
        if (f) {
          var U = qk(t, w, R, i), N = t.child;
          return N.memoizedState = c0(i), t.memoizedState = s0, U;
        } else
          return f0(t, w);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var Q = W.dehydrated;
          if (Q !== null)
            return e_(e, t, v, a, Q, W, i);
        }
        if (f) {
          var Z = a.fallback, Se = a.children, Xe = Xk(e, t, Se, Z, i), Be = t.child, Ht = e.child.memoizedState;
          return Be.memoizedState = Ht === null ? c0(i) : Yk(Ht, i), Be.childLanes = Qk(e, i), t.memoizedState = s0, Xe;
        } else {
          var At = a.children, j = Kk(e, t, At, i);
          return t.memoizedState = null, j;
        }
      }
    }
    function f0(e, t, i) {
      var a = e.mode, l = {
        mode: "visible",
        children: t
      }, f = d0(l, a);
      return f.return = e, e.child = f, f;
    }
    function qk(e, t, i, a) {
      var l = e.mode, f = e.child, v = {
        mode: "hidden",
        children: t
      }, m, b;
      return (l & Ie) === Fe && f !== null ? (m = f, m.childLanes = te, m.pendingProps = v, e.mode & dt && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), b = ns(i, l, a, null)) : (m = d0(v, l), b = ns(i, l, a, null)), m.return = e, b.return = e, m.sibling = b, e.child = m, b;
    }
    function d0(e, t, i) {
      return zw(e, t, te, null);
    }
    function zC(e, t) {
      return cc(e, t);
    }
    function Kk(e, t, i, a) {
      var l = e.child, f = l.sibling, v = zC(l, {
        mode: "visible",
        children: i
      });
      if ((t.mode & Ie) === Fe && (v.lanes = a), v.return = t, v.sibling = null, f !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [f], t.flags |= Xt) : m.push(f);
      }
      return t.child = v, v;
    }
    function Xk(e, t, i, a, l) {
      var f = t.mode, v = e.child, m = v.sibling, b = {
        mode: "hidden",
        children: i
      }, w;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (f & Ie) === Fe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var R = t.child;
        w = R, w.childLanes = te, w.pendingProps = b, t.mode & dt && (w.actualDuration = 0, w.actualStartTime = -1, w.selfBaseDuration = v.selfBaseDuration, w.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        w = zC(v, b), w.subtreeFlags = v.subtreeFlags & yr;
      var U;
      return m !== null ? U = cc(m, a) : (U = ns(a, f, l, null), U.flags |= hn), U.return = t, w.return = t, w.sibling = U, t.child = w, U;
    }
    function Xm(e, t, i, a) {
      a !== null && Yg(a), jf(t, e.child, null, i);
      var l = t.pendingProps, f = l.children, v = f0(t, f);
      return v.flags |= hn, t.memoizedState = null, v;
    }
    function Zk(e, t, i, a, l) {
      var f = t.mode, v = {
        mode: "visible",
        children: i
      }, m = d0(v, f), b = ns(a, f, l, null);
      return b.flags |= hn, m.return = t, b.return = t, m.sibling = b, t.child = m, (t.mode & Ie) !== Fe && jf(t, e.child, null, l), b;
    }
    function Jk(e, t, i) {
      return (e.mode & Ie) === Fe ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ye) : Og(t) ? e.lanes = to : e.lanes = Ur, null;
    }
    function e_(e, t, i, a, l, f, v) {
      if (i)
        if (t.flags & Mn) {
          t.flags &= ~Mn;
          var j = Zb(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Xm(e, t, v, j);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ft, null;
          var J = a.children, F = a.fallback, ue = Zk(e, t, J, F, v), ke = t.child;
          return ke.memoizedState = c0(v), t.memoizedState = s0, ue;
        }
      else {
        if (Fx(), (t.mode & Ie) === Fe)
          return Xm(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Og(l)) {
          var m, b, w;
          {
            var R = ix(l);
            m = R.digest, b = R.message, w = R.stack;
          }
          var U;
          b ? U = new Error(b) : U = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = Zb(U, m, w);
          return Xm(e, t, v, N);
        }
        var W = yi(v, e.childLanes);
        if (po || W) {
          var Q = uy();
          if (Q !== null) {
            var Z = wh(Q, v);
            if (Z !== Yn && Z !== f.retryLane) {
              f.retryLane = Z;
              var Se = fn;
              ia(e, Z), kr(Q, e, Z, Se);
            }
          }
          A0();
          var Xe = Zb(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Xm(e, t, v, Xe);
        } else if (aE(l)) {
          t.flags |= ft, t.child = e.child;
          var Be = RD.bind(null, e);
          return ax(l, Be), null;
        } else {
          Bx(t, l, f.treeContext);
          var Ht = a.children, At = f0(t, Ht);
          return At.flags |= Yi, At;
        }
      }
    }
    function UC(e, t, i) {
      e.lanes = bt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = bt(a.lanes, t)), nb(e.return, t, i);
    }
    function t_(e, t, i) {
      for (var a = t; a !== null; ) {
        if (a.tag === Oe) {
          var l = a.memoizedState;
          l !== null && UC(a, i, e);
        } else if (a.tag === Ct)
          UC(a, i, e);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    function n_(e) {
      for (var t = e, i = null; t !== null; ) {
        var a = t.alternate;
        a !== null && Dm(a) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    function r_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !a0[e])
        if (a0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function i_(e, t) {
      e !== void 0 && !Km[e] && (e !== "collapsed" && e !== "hidden" ? (Km[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Km[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function PC(e, t) {
      {
        var i = zt(e), a = !i && typeof Rn(e) == "function";
        if (i || a) {
          var l = i ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function a_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (zt(e)) {
          for (var i = 0; i < e.length; i++)
            if (!PC(e[i], i))
              return;
        } else {
          var a = Rn(e);
          if (typeof a == "function") {
            var l = a.call(e);
            if (l)
              for (var f = l.next(), v = 0; !f.done; f = l.next()) {
                if (!PC(f.value, v))
                  return;
                v++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function p0(e, t, i, a, l) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: i,
        tailMode: l
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = i, f.tailMode = l);
    }
    function HC(e, t, i) {
      var a = t.pendingProps, l = a.revealOrder, f = a.tail, v = a.children;
      r_(l), i_(f, l), a_(v, l), Ai(e, t, v, i);
      var m = so.current, b = fb(m, Fp);
      if (b)
        m = db(m, Fp), t.flags |= ft;
      else {
        var w = e !== null && (e.flags & ft) !== Ke;
        w && t_(t, t.child, i), m = Bf(m);
      }
      if (Qu(t, m), (t.mode & Ie) === Fe)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var R = n_(t.child), U;
            R === null ? (U = t.child, t.child = null) : (U = R.sibling, R.sibling = null), p0(
              t,
              !1,
              // isBackwards
              U,
              R,
              f
            );
            break;
          }
          case "backwards": {
            var N = null, W = t.child;
            for (t.child = null; W !== null; ) {
              var Q = W.alternate;
              if (Q !== null && Dm(Q) === null) {
                t.child = W;
                break;
              }
              var Z = W.sibling;
              W.sibling = N, N = W, W = Z;
            }
            p0(
              t,
              !0,
              // isBackwards
              N,
              null,
              // last
              f
            );
            break;
          }
          case "together": {
            p0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function o_(e, t, i) {
      ub(t, t.stateNode.containerInfo);
      var a = t.pendingProps;
      return e === null ? t.child = jf(t, null, a, i) : Ai(e, t, a, i), t.child;
    }
    var jC = !1;
    function l_(e, t, i) {
      var a = t.type, l = a._context, f = t.pendingProps, v = t.memoizedProps, m = f.value;
      {
        "value" in f || jC || (jC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var b = t.type.propTypes;
        b && oo(b, f, "prop", "Context.Provider");
      }
      if (ME(t, l, m), v !== null) {
        var w = v.value;
        if (Ae(w, m)) {
          if (v.children === f.children && !om())
            return Nl(e, t, i);
        } else
          rk(t, l, i);
      }
      var R = f.children;
      return Ai(e, t, R, i), t.child;
    }
    var FC = !1;
    function u_(e, t, i) {
      var a = t.type;
      a._context === void 0 ? a !== a.Consumer && (FC || (FC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
      var l = t.pendingProps, f = l.children;
      typeof f != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Vf(t, i);
      var v = pr(a);
      pu(t);
      var m;
      return Kp.current = t, li(!0), m = f(v), li(!1), vi(), t.flags |= $o, Ai(e, t, m, i), t.child;
    }
    function Jp() {
      po = !0;
    }
    function Zm(e, t) {
      (t.mode & Ie) === Fe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= hn);
    }
    function Nl(e, t, i) {
      return e !== null && (t.dependencies = e.dependencies), mC(), fv(t.lanes), yi(i, t.childLanes) ? (tk(e, t), t.child) : null;
    }
    function s_(e, t, i) {
      {
        var a = t.return;
        if (a === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, i.index = t.index, i.sibling = t.sibling, i.return = t.return, i.ref = t.ref, t === a.child)
          a.child = i;
        else {
          var l = a.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = i;
        }
        var f = a.deletions;
        return f === null ? (a.deletions = [e], a.flags |= Xt) : f.push(e), i.flags |= hn, i;
      }
    }
    function v0(e, t) {
      var i = e.lanes;
      return !!yi(i, t);
    }
    function c_(e, t, i) {
      switch (t.tag) {
        case A:
          AC(t), t.stateNode, Hf();
          break;
        case B:
          jE(t);
          break;
        case L: {
          var a = t.type;
          Go(a) && um(t);
          break;
        }
        case K:
          ub(t, t.stateNode.containerInfo);
          break;
        case ye: {
          var l = t.memoizedProps.value, f = t.type._context;
          ME(t, f, l);
          break;
        }
        case ut:
          {
            var v = yi(i, t.childLanes);
            v && (t.flags |= Et);
            {
              var m = t.stateNode;
              m.effectDuration = 0, m.passiveEffectDuration = 0;
            }
          }
          break;
        case Oe: {
          var b = t.memoizedState;
          if (b !== null) {
            if (b.dehydrated !== null)
              return Qu(t, Bf(so.current)), t.flags |= ft, null;
            var w = t.child, R = w.childLanes;
            if (yi(i, R))
              return NC(e, t, i);
            Qu(t, Bf(so.current));
            var U = Nl(e, t, i);
            return U !== null ? U.sibling : null;
          } else
            Qu(t, Bf(so.current));
          break;
        }
        case Ct: {
          var N = (e.flags & ft) !== Ke, W = yi(i, t.childLanes);
          if (N) {
            if (W)
              return HC(e, t, i);
            t.flags |= ft;
          }
          var Q = t.memoizedState;
          if (Q !== null && (Q.rendering = null, Q.tail = null, Q.lastEffect = null), Qu(t, so.current), W)
            break;
          return null;
        }
        case je:
        case at:
          return t.lanes = te, OC(e, t, i);
      }
      return Nl(e, t, i);
    }
    function VC(e, t, i) {
      if (t._debugNeedsRemount && e !== null)
        return s_(e, t, B0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var a = e.memoizedProps, l = t.pendingProps;
        if (a !== l || om() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          po = !0;
        else {
          var f = v0(e, i);
          if (!f && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ft) === Ke)
            return po = !1, c_(e, t, i);
          (e.flags & Ts) !== Ke ? po = !0 : po = !1;
        }
      } else if (po = !1, Qr() && Nx(t)) {
        var v = t.index, m = zx();
        mE(t, m, v);
      }
      switch (t.lanes = te, t.tag) {
        case P:
          return Wk(e, t, t.type, i);
        case nt: {
          var b = t.elementType;
          return Ik(e, t, b, i);
        }
        case x: {
          var w = t.type, R = t.pendingProps, U = t.elementType === w ? R : fo(w, R);
          return o0(e, t, w, U, i);
        }
        case L: {
          var N = t.type, W = t.pendingProps, Q = t.elementType === N ? W : fo(N, W);
          return MC(e, t, N, Q, i);
        }
        case A:
          return jk(e, t, i);
        case B:
          return Fk(e, t, i);
        case se:
          return Vk(e, t);
        case Oe:
          return NC(e, t, i);
        case K:
          return o_(e, t, i);
        case Ue: {
          var Z = t.type, Se = t.pendingProps, Xe = t.elementType === Z ? Se : fo(Z, Se);
          return kC(e, t, Z, Xe, i);
        }
        case We:
          return Uk(e, t, i);
        case Ce:
          return Pk(e, t, i);
        case ut:
          return Hk(e, t, i);
        case ye:
          return l_(e, t, i);
        case ht:
          return u_(e, t, i);
        case st: {
          var Be = t.type, Ht = t.pendingProps, At = fo(Be, Ht);
          if (t.type !== t.elementType) {
            var j = Be.propTypes;
            j && oo(
              j,
              At,
              // Resolved for outer only
              "prop",
              Nt(Be)
            );
          }
          return At = fo(Be.type, At), _C(e, t, Be, At, i);
        }
        case ge:
          return DC(e, t, t.type, t.pendingProps, i);
        case _e: {
          var J = t.type, F = t.pendingProps, ue = t.elementType === J ? F : fo(J, F);
          return Bk(e, t, J, ue, i);
        }
        case Ct:
          return HC(e, t, i);
        case $t:
          break;
        case je:
          return OC(e, t, i);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kf(e) {
      e.flags |= Et;
    }
    function IC(e) {
      e.flags |= si, e.flags |= Hd;
    }
    var BC, h0, WC, YC;
    BC = function(e, t, i, a) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === B || l.tag === se)
          MR(e, l.stateNode);
        else if (l.tag !== K) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, h0 = function(e, t) {
    }, WC = function(e, t, i, a, l) {
      var f = e.memoizedProps;
      if (f !== a) {
        var v = t.stateNode, m = sb(), b = $R(v, i, f, a, l, m);
        t.updateQueue = b, b && Kf(t);
      }
    }, YC = function(e, t, i, a) {
      i !== a && Kf(t);
    };
    function ev(e, t) {
      if (!Qr())
        switch (e.tailMode) {
          case "hidden": {
            for (var i = e.tail, a = null; i !== null; )
              i.alternate !== null && (a = i), i = i.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, f = null; l !== null; )
              l.alternate !== null && (f = l), l = l.sibling;
            f === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : f.sibling = null;
            break;
          }
        }
    }
    function Kr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, i = te, a = Ke;
      if (t) {
        if ((e.mode & dt) !== Fe) {
          for (var b = e.selfBaseDuration, w = e.child; w !== null; )
            i = bt(i, bt(w.lanes, w.childLanes)), a |= w.subtreeFlags & yr, a |= w.flags & yr, b += w.treeBaseDuration, w = w.sibling;
          e.treeBaseDuration = b;
        } else
          for (var R = e.child; R !== null; )
            i = bt(i, bt(R.lanes, R.childLanes)), a |= R.subtreeFlags & yr, a |= R.flags & yr, R.return = e, R = R.sibling;
        e.subtreeFlags |= a;
      } else {
        if ((e.mode & dt) !== Fe) {
          for (var l = e.actualDuration, f = e.selfBaseDuration, v = e.child; v !== null; )
            i = bt(i, bt(v.lanes, v.childLanes)), a |= v.subtreeFlags, a |= v.flags, l += v.actualDuration, f += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = l, e.treeBaseDuration = f;
        } else
          for (var m = e.child; m !== null; )
            i = bt(i, bt(m.lanes, m.childLanes)), a |= m.subtreeFlags, a |= m.flags, m.return = e, m = m.sibling;
        e.subtreeFlags |= a;
      }
      return e.childLanes = i, t;
    }
    function f_(e, t, i) {
      if (qx() && (t.mode & Ie) !== Fe && (t.flags & ft) === Ke)
        return wE(t), Hf(), t.flags |= Mn | ki | sr, !1;
      var a = pm(t);
      if (i !== null && i.dehydrated !== null)
        if (e === null) {
          if (!a)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Gx(t), Kr(t), (t.mode & dt) !== Fe) {
            var l = i !== null;
            if (l) {
              var f = t.child;
              f !== null && (t.treeBaseDuration -= f.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Hf(), (t.flags & ft) === Ke && (t.memoizedState = null), t.flags |= Et, Kr(t), (t.mode & dt) !== Fe) {
            var v = i !== null;
            if (v) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return TE(), !0;
    }
    function GC(e, t, i) {
      var a = t.pendingProps;
      switch (Fg(t), t.tag) {
        case P:
        case nt:
        case ge:
        case x:
        case Ue:
        case We:
        case Ce:
        case ut:
        case ht:
        case st:
          return Kr(t), null;
        case L: {
          var l = t.type;
          return Go(l) && lm(t), Kr(t), null;
        }
        case A: {
          var f = t.stateNode;
          if (If(t), Ug(t), vb(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), e === null || e.child === null) {
            var v = pm(t);
            if (v)
              Kf(t);
            else if (e !== null) {
              var m = e.memoizedState;
              // Check if this is a client root
              (!m.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Mn) !== Ke) && (t.flags |= Wi, TE());
            }
          }
          return h0(e, t), Kr(t), null;
        }
        case B: {
          cb(t);
          var b = HE(), w = t.type;
          if (e !== null && t.stateNode != null)
            WC(e, t, w, a, b), e.ref !== t.ref && IC(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Kr(t), null;
            }
            var R = sb(), U = pm(t);
            if (U)
              Wx(t, b, R) && Kf(t);
            else {
              var N = LR(w, a, b, R, t);
              BC(N, t, !1, !1), t.stateNode = N, AR(N, w, a, b) && Kf(t);
            }
            t.ref !== null && IC(t);
          }
          return Kr(t), null;
        }
        case se: {
          var W = a;
          if (e && t.stateNode != null) {
            var Q = e.memoizedProps;
            YC(e, t, Q, W);
          } else {
            if (typeof W != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Z = HE(), Se = sb(), Xe = pm(t);
            Xe ? Yx(t) && Kf(t) : t.stateNode = NR(W, Z, Se, t);
          }
          return Kr(t), null;
        }
        case Oe: {
          Wf(t);
          var Be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ht = f_(e, t, Be);
            if (!Ht)
              return t.flags & sr ? t : null;
          }
          if ((t.flags & ft) !== Ke)
            return t.lanes = i, (t.mode & dt) !== Fe && Hb(t), t;
          var At = Be !== null, j = e !== null && e.memoizedState !== null;
          if (At !== j && At) {
            var J = t.child;
            if (J.flags |= No, (t.mode & Ie) !== Fe) {
              var F = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !$);
              F || fb(so.current, VE) ? dD() : A0();
            }
          }
          var ue = t.updateQueue;
          if (ue !== null && (t.flags |= Et), Kr(t), (t.mode & dt) !== Fe && At) {
            var ke = t.child;
            ke !== null && (t.treeBaseDuration -= ke.treeBaseDuration);
          }
          return null;
        }
        case K:
          return If(t), h0(e, t), e === null && _x(t.stateNode.containerInfo), Kr(t), null;
        case ye:
          var Ee = t.type._context;
          return tb(Ee, t), Kr(t), null;
        case _e: {
          var lt = t.type;
          return Go(lt) && lm(t), Kr(t), null;
        }
        case Ct: {
          Wf(t);
          var yt = t.memoizedState;
          if (yt === null)
            return Kr(t), null;
          var on = (t.flags & ft) !== Ke, Qt = yt.rendering;
          if (Qt === null)
            if (on)
              ev(yt, !1);
            else {
              var tr = vD() && (e === null || (e.flags & ft) === Ke);
              if (!tr)
                for (var qt = t.child; qt !== null; ) {
                  var Gn = Dm(qt);
                  if (Gn !== null) {
                    on = !0, t.flags |= ft, ev(yt, !1);
                    var Ci = Gn.updateQueue;
                    return Ci !== null && (t.updateQueue = Ci, t.flags |= Et), t.subtreeFlags = Ke, nk(t, i), Qu(t, db(so.current, Fp)), t.child;
                  }
                  qt = qt.sibling;
                }
              yt.tail !== null && kn() > vw() && (t.flags |= ft, on = !0, ev(yt, !1), t.lanes = dh);
            }
          else {
            if (!on) {
              var ti = Dm(Qt);
              if (ti !== null) {
                t.flags |= ft, on = !0;
                var Sa = ti.updateQueue;
                if (Sa !== null && (t.updateQueue = Sa, t.flags |= Et), ev(yt, !0), yt.tail === null && yt.tailMode === "hidden" && !Qt.alternate && !Qr())
                  return Kr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              kn() * 2 - yt.renderingStartTime > vw() && i !== Ur && (t.flags |= ft, on = !0, ev(yt, !1), t.lanes = dh);
            }
            if (yt.isBackwards)
              Qt.sibling = t.child, t.child = Qt;
            else {
              var zi = yt.last;
              zi !== null ? zi.sibling = Qt : t.child = Qt, yt.last = Qt;
            }
          }
          if (yt.tail !== null) {
            var Ui = yt.tail;
            yt.rendering = Ui, yt.tail = Ui.sibling, yt.renderingStartTime = kn(), Ui.sibling = null;
            var wi = so.current;
            return on ? wi = db(wi, Fp) : wi = Bf(wi), Qu(t, wi), Ui;
          }
          return Kr(t), null;
        }
        case $t:
          break;
        case je:
        case at: {
          M0(t);
          var jl = t.memoizedState, id = jl !== null;
          if (e !== null) {
            var mv = e.memoizedState, tl = mv !== null;
            tl !== id && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !oe && (t.flags |= No);
          }
          return !id || (t.mode & Ie) === Fe ? Kr(t) : yi(el, Ur) && (Kr(t), t.subtreeFlags & (hn | Et) && (t.flags |= No)), null;
        }
        case gt:
          return null;
        case rt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function d_(e, t, i) {
      switch (Fg(t), t.tag) {
        case L: {
          var a = t.type;
          Go(a) && lm(t);
          var l = t.flags;
          return l & sr ? (t.flags = l & ~sr | ft, (t.mode & dt) !== Fe && Hb(t), t) : null;
        }
        case A: {
          t.stateNode, If(t), Ug(t), vb();
          var f = t.flags;
          return (f & sr) !== Ke && (f & ft) === Ke ? (t.flags = f & ~sr | ft, t) : null;
        }
        case B:
          return cb(t), null;
        case Oe: {
          Wf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Hf();
          }
          var m = t.flags;
          return m & sr ? (t.flags = m & ~sr | ft, (t.mode & dt) !== Fe && Hb(t), t) : null;
        }
        case Ct:
          return Wf(t), null;
        case K:
          return If(t), null;
        case ye:
          var b = t.type._context;
          return tb(b, t), null;
        case je:
        case at:
          return M0(t), null;
        case gt:
          return null;
        default:
          return null;
      }
    }
    function QC(e, t, i) {
      switch (Fg(t), t.tag) {
        case L: {
          var a = t.type.childContextTypes;
          a != null && lm(t);
          break;
        }
        case A: {
          t.stateNode, If(t), Ug(t), vb();
          break;
        }
        case B: {
          cb(t);
          break;
        }
        case K:
          If(t);
          break;
        case Oe:
          Wf(t);
          break;
        case Ct:
          Wf(t);
          break;
        case ye:
          var l = t.type._context;
          tb(l, t);
          break;
        case je:
        case at:
          M0(t);
          break;
      }
    }
    var qC = null;
    qC = /* @__PURE__ */ new Set();
    var Jm = !1, Xr = !1, p_ = typeof WeakSet == "function" ? WeakSet : Set, $e = null, Xf = null, Zf = null;
    function v_(e) {
      fl(null, function() {
        throw e;
      }), Ud();
    }
    var h_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & dt)
        try {
          Zo(), t.componentWillUnmount();
        } finally {
          Xo(e);
        }
      else
        t.componentWillUnmount();
    };
    function KC(e, t) {
      try {
        Xu(Er, e);
      } catch (i) {
        gn(e, t, i);
      }
    }
    function m0(e, t, i) {
      try {
        h_(e, i);
      } catch (a) {
        gn(e, t, a);
      }
    }
    function m_(e, t, i) {
      try {
        i.componentDidMount();
      } catch (a) {
        gn(e, t, a);
      }
    }
    function XC(e, t) {
      try {
        JC(e);
      } catch (i) {
        gn(e, t, i);
      }
    }
    function Jf(e, t) {
      var i = e.ref;
      if (i !== null)
        if (typeof i == "function") {
          var a;
          try {
            if (ot && St && e.mode & dt)
              try {
                Zo(), a = i(null);
              } finally {
                Xo(e);
              }
            else
              a = i(null);
          } catch (l) {
            gn(e, t, l);
          }
          typeof a == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", pt(e));
        } else
          i.current = null;
    }
    function ey(e, t, i) {
      try {
        i();
      } catch (a) {
        gn(e, t, a);
      }
    }
    var ZC = !1;
    function y_(e, t) {
      DR(e.containerInfo), $e = t, g_();
      var i = ZC;
      return ZC = !1, i;
    }
    function g_() {
      for (; $e !== null; ) {
        var e = $e, t = e.child;
        (e.subtreeFlags & cu) !== Ke && t !== null ? (t.return = e, $e = t) : b_();
      }
    }
    function b_() {
      for (; $e !== null; ) {
        var e = $e;
        Zt(e);
        try {
          S_(e);
        } catch (i) {
          gn(e, e.return, i);
        }
        Ln();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, $e = t;
          return;
        }
        $e = e.return;
      }
    }
    function S_(e) {
      var t = e.alternate, i = e.flags;
      if ((i & Wi) !== Ke) {
        switch (Zt(e), e.tag) {
          case x:
          case Ue:
          case ge:
            break;
          case L: {
            if (t !== null) {
              var a = t.memoizedProps, l = t.memoizedState, f = e.stateNode;
              e.type === e.elementType && !ac && (f.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(e) || "instance"), f.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(e) || "instance"));
              var v = f.getSnapshotBeforeUpdate(e.elementType === e.type ? a : fo(e.type, a), l);
              {
                var m = qC;
                v === void 0 && !m.has(e.type) && (m.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", pt(e)));
              }
              f.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case A: {
            {
              var b = e.stateNode;
              ex(b.containerInfo);
            }
            break;
          }
          case B:
          case se:
          case K:
          case _e:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Ln();
      }
    }
    function vo(e, t, i) {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var f = l.next, v = f;
        do {
          if ((v.tag & e) === e) {
            var m = v.destroy;
            v.destroy = void 0, m !== void 0 && ((e & qr) !== aa ? sh(t) : (e & Er) !== aa && ya(t), (e & Qo) !== aa && pv(!0), ey(t, i, m), (e & Qo) !== aa && pv(!1), (e & qr) !== aa ? Pc() : (e & Er) !== aa && vu());
          }
          v = v.next;
        } while (v !== f);
      }
    }
    function Xu(e, t) {
      var i = t.updateQueue, a = i !== null ? i.lastEffect : null;
      if (a !== null) {
        var l = a.next, f = l;
        do {
          if ((f.tag & e) === e) {
            (e & qr) !== aa ? Po(t) : (e & Er) !== aa && ch(t);
            var v = f.create;
            (e & Qo) !== aa && pv(!0), f.destroy = v(), (e & Qo) !== aa && pv(!1), (e & qr) !== aa ? Uc() : (e & Er) !== aa && Rs();
            {
              var m = f.destroy;
              if (m !== void 0 && typeof m != "function") {
                var b = void 0;
                (f.tag & Er) !== Ke ? b = "useLayoutEffect" : (f.tag & Qo) !== Ke ? b = "useInsertionEffect" : b = "useEffect";
                var w = void 0;
                m === null ? w = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof m.then == "function" ? w = `

It looks like you wrote ` + b + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + b + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : w = " You returned: " + m, g("%s must not return anything besides a function, which is used for clean-up.%s", b, w);
              }
            }
          }
          f = f.next;
        } while (f !== l);
      }
    }
    function E_(e, t) {
      if ((t.flags & Et) !== Ke)
        switch (t.tag) {
          case ut: {
            var i = t.stateNode.passiveEffectDuration, a = t.memoizedProps, l = a.id, f = a.onPostCommit, v = vC(), m = t.alternate === null ? "mount" : "update";
            pC() && (m = "nested-update"), typeof f == "function" && f(l, m, i, v);
            var b = t.return;
            e: for (; b !== null; ) {
              switch (b.tag) {
                case A:
                  var w = b.stateNode;
                  w.passiveEffectDuration += i;
                  break e;
                case ut:
                  var R = b.stateNode;
                  R.passiveEffectDuration += i;
                  break e;
              }
              b = b.return;
            }
            break;
          }
        }
    }
    function C_(e, t, i, a) {
      if ((i.flags & Nr) !== Ke)
        switch (i.tag) {
          case x:
          case Ue:
          case ge: {
            if (!Xr)
              if (i.mode & dt)
                try {
                  Zo(), Xu(Er | Sr, i);
                } finally {
                  Xo(i);
                }
              else
                Xu(Er | Sr, i);
            break;
          }
          case L: {
            var l = i.stateNode;
            if (i.flags & Et && !Xr)
              if (t === null)
                if (i.type === i.elementType && !ac && (l.props !== i.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(i) || "instance"), l.state !== i.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(i) || "instance")), i.mode & dt)
                  try {
                    Zo(), l.componentDidMount();
                  } finally {
                    Xo(i);
                  }
                else
                  l.componentDidMount();
              else {
                var f = i.elementType === i.type ? t.memoizedProps : fo(i.type, t.memoizedProps), v = t.memoizedState;
                if (i.type === i.elementType && !ac && (l.props !== i.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(i) || "instance"), l.state !== i.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(i) || "instance")), i.mode & dt)
                  try {
                    Zo(), l.componentDidUpdate(f, v, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Xo(i);
                  }
                else
                  l.componentDidUpdate(f, v, l.__reactInternalSnapshotBeforeUpdate);
              }
            var m = i.updateQueue;
            m !== null && (i.type === i.elementType && !ac && (l.props !== i.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(i) || "instance"), l.state !== i.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(i) || "instance")), PE(i, m, l));
            break;
          }
          case A: {
            var b = i.updateQueue;
            if (b !== null) {
              var w = null;
              if (i.child !== null)
                switch (i.child.tag) {
                  case B:
                    w = i.child.stateNode;
                    break;
                  case L:
                    w = i.child.stateNode;
                    break;
                }
              PE(i, b, w);
            }
            break;
          }
          case B: {
            var R = i.stateNode;
            if (t === null && i.flags & Et) {
              var U = i.type, N = i.memoizedProps;
              jR(R, U, N);
            }
            break;
          }
          case se:
            break;
          case K:
            break;
          case ut: {
            {
              var W = i.memoizedProps, Q = W.onCommit, Z = W.onRender, Se = i.stateNode.effectDuration, Xe = vC(), Be = t === null ? "mount" : "update";
              pC() && (Be = "nested-update"), typeof Z == "function" && Z(i.memoizedProps.id, Be, i.actualDuration, i.treeBaseDuration, i.actualStartTime, Xe);
              {
                typeof Q == "function" && Q(i.memoizedProps.id, Be, Se, Xe), bD(i);
                var Ht = i.return;
                e: for (; Ht !== null; ) {
                  switch (Ht.tag) {
                    case A:
                      var At = Ht.stateNode;
                      At.effectDuration += Se;
                      break e;
                    case ut:
                      var j = Ht.stateNode;
                      j.effectDuration += Se;
                      break e;
                  }
                  Ht = Ht.return;
                }
              }
            }
            break;
          }
          case Oe: {
            O_(e, i);
            break;
          }
          case Ct:
          case _e:
          case $t:
          case je:
          case at:
          case rt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Xr || i.flags & si && JC(i);
    }
    function w_(e) {
      switch (e.tag) {
        case x:
        case Ue:
        case ge: {
          if (e.mode & dt)
            try {
              Zo(), KC(e, e.return);
            } finally {
              Xo(e);
            }
          else
            KC(e, e.return);
          break;
        }
        case L: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && m_(e, e.return, t), XC(e, e.return);
          break;
        }
        case B: {
          XC(e, e.return);
          break;
        }
      }
    }
    function T_(e, t) {
      for (var i = null, a = e; ; ) {
        if (a.tag === B) {
          if (i === null) {
            i = a;
            try {
              var l = a.stateNode;
              t ? KR(l) : ZR(a.stateNode, a.memoizedProps);
            } catch (v) {
              gn(e, e.return, v);
            }
          }
        } else if (a.tag === se) {
          if (i === null)
            try {
              var f = a.stateNode;
              t ? XR(f) : JR(f, a.memoizedProps);
            } catch (v) {
              gn(e, e.return, v);
            }
        } else if (!((a.tag === je || a.tag === at) && a.memoizedState !== null && a !== e)) {
          if (a.child !== null) {
            a.child.return = a, a = a.child;
            continue;
          }
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          i === a && (i = null), a = a.return;
        }
        i === a && (i = null), a.sibling.return = a.return, a = a.sibling;
      }
    }
    function JC(e) {
      var t = e.ref;
      if (t !== null) {
        var i = e.stateNode, a;
        switch (e.tag) {
          case B:
            a = i;
            break;
          default:
            a = i;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & dt)
            try {
              Zo(), l = t(a);
            } finally {
              Xo(e);
            }
          else
            l = t(a);
          typeof l == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", pt(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", pt(e)), t.current = a;
      }
    }
    function R_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function ew(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, ew(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === B) {
          var i = e.stateNode;
          i !== null && Lx(i);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function x_(e) {
      for (var t = e.return; t !== null; ) {
        if (tw(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function tw(e) {
      return e.tag === B || e.tag === A || e.tag === K;
    }
    function nw(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || tw(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== B && t.tag !== se && t.tag !== xt; ) {
          if (t.flags & hn || t.child === null || t.tag === K)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & hn))
          return t.stateNode;
      }
    }
    function k_(e) {
      var t = x_(e);
      switch (t.tag) {
        case B: {
          var i = t.stateNode;
          t.flags & Jt && (iE(i), t.flags &= ~Jt);
          var a = nw(e);
          g0(e, a, i);
          break;
        }
        case A:
        case K: {
          var l = t.stateNode.containerInfo, f = nw(e);
          y0(e, f, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function y0(e, t, i) {
      var a = e.tag, l = a === B || a === se;
      if (l) {
        var f = e.stateNode;
        t ? YR(i, f, t) : BR(i, f);
      } else if (a !== K) {
        var v = e.child;
        if (v !== null) {
          y0(v, t, i);
          for (var m = v.sibling; m !== null; )
            y0(m, t, i), m = m.sibling;
        }
      }
    }
    function g0(e, t, i) {
      var a = e.tag, l = a === B || a === se;
      if (l) {
        var f = e.stateNode;
        t ? WR(i, f, t) : IR(i, f);
      } else if (a !== K) {
        var v = e.child;
        if (v !== null) {
          g0(v, t, i);
          for (var m = v.sibling; m !== null; )
            g0(m, t, i), m = m.sibling;
        }
      }
    }
    var Zr = null, ho = !1;
    function __(e, t, i) {
      {
        var a = t;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case B: {
              Zr = a.stateNode, ho = !1;
              break e;
            }
            case A: {
              Zr = a.stateNode.containerInfo, ho = !0;
              break e;
            }
            case K: {
              Zr = a.stateNode.containerInfo, ho = !0;
              break e;
            }
          }
          a = a.return;
        }
        if (Zr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        rw(e, t, i), Zr = null, ho = !1;
      }
      R_(i);
    }
    function Zu(e, t, i) {
      for (var a = i.child; a !== null; )
        rw(e, t, a), a = a.sibling;
    }
    function rw(e, t, i) {
      switch (vl(i), i.tag) {
        case B:
          Xr || Jf(i, t);
        case se: {
          {
            var a = Zr, l = ho;
            Zr = null, Zu(e, t, i), Zr = a, ho = l, Zr !== null && (ho ? QR(Zr, i.stateNode) : GR(Zr, i.stateNode));
          }
          return;
        }
        case xt: {
          Zr !== null && (ho ? qR(Zr, i.stateNode) : Dg(Zr, i.stateNode));
          return;
        }
        case K: {
          {
            var f = Zr, v = ho;
            Zr = i.stateNode.containerInfo, ho = !0, Zu(e, t, i), Zr = f, ho = v;
          }
          return;
        }
        case x:
        case Ue:
        case st:
        case ge: {
          if (!Xr) {
            var m = i.updateQueue;
            if (m !== null) {
              var b = m.lastEffect;
              if (b !== null) {
                var w = b.next, R = w;
                do {
                  var U = R, N = U.destroy, W = U.tag;
                  N !== void 0 && ((W & Qo) !== aa ? ey(i, t, N) : (W & Er) !== aa && (ya(i), i.mode & dt ? (Zo(), ey(i, t, N), Xo(i)) : ey(i, t, N), vu())), R = R.next;
                } while (R !== w);
              }
            }
          }
          Zu(e, t, i);
          return;
        }
        case L: {
          if (!Xr) {
            Jf(i, t);
            var Q = i.stateNode;
            typeof Q.componentWillUnmount == "function" && m0(i, t, Q);
          }
          Zu(e, t, i);
          return;
        }
        case $t: {
          Zu(e, t, i);
          return;
        }
        case je: {
          if (
            // TODO: Remove this dead flag
            i.mode & Ie
          ) {
            var Z = Xr;
            Xr = Z || i.memoizedState !== null, Zu(e, t, i), Xr = Z;
          } else
            Zu(e, t, i);
          break;
        }
        default: {
          Zu(e, t, i);
          return;
        }
      }
    }
    function D_(e) {
      e.memoizedState;
    }
    function O_(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var a = t.alternate;
        if (a !== null) {
          var l = a.memoizedState;
          if (l !== null) {
            var f = l.dehydrated;
            f !== null && vx(f);
          }
        }
      }
    }
    function iw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new p_()), t.forEach(function(a) {
          var l = xD.bind(null, e, a);
          if (!i.has(a)) {
            if (i.add(a), Oi)
              if (Xf !== null && Zf !== null)
                dv(Zf, Xf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            a.then(l, l);
          }
        });
      }
    }
    function L_(e, t, i) {
      Xf = i, Zf = e, Zt(t), aw(t, e), Zt(t), Xf = null, Zf = null;
    }
    function mo(e, t, i) {
      var a = t.deletions;
      if (a !== null)
        for (var l = 0; l < a.length; l++) {
          var f = a[l];
          try {
            __(e, t, f);
          } catch (b) {
            gn(f, t, b);
          }
        }
      var v = hc();
      if (t.subtreeFlags & di)
        for (var m = t.child; m !== null; )
          Zt(m), aw(m, e), m = m.sibling;
      Zt(v);
    }
    function aw(e, t, i) {
      var a = e.alternate, l = e.flags;
      switch (e.tag) {
        case x:
        case Ue:
        case st:
        case ge: {
          if (mo(t, e), Jo(e), l & Et) {
            try {
              vo(Qo | Sr, e, e.return), Xu(Qo | Sr, e);
            } catch (lt) {
              gn(e, e.return, lt);
            }
            if (e.mode & dt) {
              try {
                Zo(), vo(Er | Sr, e, e.return);
              } catch (lt) {
                gn(e, e.return, lt);
              }
              Xo(e);
            } else
              try {
                vo(Er | Sr, e, e.return);
              } catch (lt) {
                gn(e, e.return, lt);
              }
          }
          return;
        }
        case L: {
          mo(t, e), Jo(e), l & si && a !== null && Jf(a, a.return);
          return;
        }
        case B: {
          mo(t, e), Jo(e), l & si && a !== null && Jf(a, a.return);
          {
            if (e.flags & Jt) {
              var f = e.stateNode;
              try {
                iE(f);
              } catch (lt) {
                gn(e, e.return, lt);
              }
            }
            if (l & Et) {
              var v = e.stateNode;
              if (v != null) {
                var m = e.memoizedProps, b = a !== null ? a.memoizedProps : m, w = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    FR(v, R, w, b, m, e);
                  } catch (lt) {
                    gn(e, e.return, lt);
                  }
              }
            }
          }
          return;
        }
        case se: {
          if (mo(t, e), Jo(e), l & Et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var U = e.stateNode, N = e.memoizedProps, W = a !== null ? a.memoizedProps : N;
            try {
              VR(U, W, N);
            } catch (lt) {
              gn(e, e.return, lt);
            }
          }
          return;
        }
        case A: {
          if (mo(t, e), Jo(e), l & Et && a !== null) {
            var Q = a.memoizedState;
            if (Q.isDehydrated)
              try {
                px(t.containerInfo);
              } catch (lt) {
                gn(e, e.return, lt);
              }
          }
          return;
        }
        case K: {
          mo(t, e), Jo(e);
          return;
        }
        case Oe: {
          mo(t, e), Jo(e);
          var Z = e.child;
          if (Z.flags & No) {
            var Se = Z.stateNode, Xe = Z.memoizedState, Be = Xe !== null;
            if (Se.isHidden = Be, Be) {
              var Ht = Z.alternate !== null && Z.alternate.memoizedState !== null;
              Ht || fD();
            }
          }
          if (l & Et) {
            try {
              D_(e);
            } catch (lt) {
              gn(e, e.return, lt);
            }
            iw(e);
          }
          return;
        }
        case je: {
          var At = a !== null && a.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ie
          ) {
            var j = Xr;
            Xr = j || At, mo(t, e), Xr = j;
          } else
            mo(t, e);
          if (Jo(e), l & No) {
            var J = e.stateNode, F = e.memoizedState, ue = F !== null, ke = e;
            if (J.isHidden = ue, ue && !At && (ke.mode & Ie) !== Fe) {
              $e = ke;
              for (var Ee = ke.child; Ee !== null; )
                $e = Ee, A_(Ee), Ee = Ee.sibling;
            }
            T_(ke, ue);
          }
          return;
        }
        case Ct: {
          mo(t, e), Jo(e), l & Et && iw(e);
          return;
        }
        case $t:
          return;
        default: {
          mo(t, e), Jo(e);
          return;
        }
      }
    }
    function Jo(e) {
      var t = e.flags;
      if (t & hn) {
        try {
          k_(e);
        } catch (i) {
          gn(e, e.return, i);
        }
        e.flags &= ~hn;
      }
      t & Yi && (e.flags &= ~Yi);
    }
    function M_(e, t, i) {
      Xf = i, Zf = t, $e = e, ow(e, t, i), Xf = null, Zf = null;
    }
    function ow(e, t, i) {
      for (var a = (e.mode & Ie) !== Fe; $e !== null; ) {
        var l = $e, f = l.child;
        if (l.tag === je && a) {
          var v = l.memoizedState !== null, m = v || Jm;
          if (m) {
            b0(e, t, i);
            continue;
          } else {
            var b = l.alternate, w = b !== null && b.memoizedState !== null, R = w || Xr, U = Jm, N = Xr;
            Jm = m, Xr = R, Xr && !N && ($e = l, $_(l));
            for (var W = f; W !== null; )
              $e = W, ow(
                W,
                // New root; bubble back up to here and stop.
                t,
                i
              ), W = W.sibling;
            $e = l, Jm = U, Xr = N, b0(e, t, i);
            continue;
          }
        }
        (l.subtreeFlags & Nr) !== Ke && f !== null ? (f.return = l, $e = f) : b0(e, t, i);
      }
    }
    function b0(e, t, i) {
      for (; $e !== null; ) {
        var a = $e;
        if ((a.flags & Nr) !== Ke) {
          var l = a.alternate;
          Zt(a);
          try {
            C_(t, l, a, i);
          } catch (v) {
            gn(a, a.return, v);
          }
          Ln();
        }
        if (a === e) {
          $e = null;
          return;
        }
        var f = a.sibling;
        if (f !== null) {
          f.return = a.return, $e = f;
          return;
        }
        $e = a.return;
      }
    }
    function A_(e) {
      for (; $e !== null; ) {
        var t = $e, i = t.child;
        switch (t.tag) {
          case x:
          case Ue:
          case st:
          case ge: {
            if (t.mode & dt)
              try {
                Zo(), vo(Er, t, t.return);
              } finally {
                Xo(t);
              }
            else
              vo(Er, t, t.return);
            break;
          }
          case L: {
            Jf(t, t.return);
            var a = t.stateNode;
            typeof a.componentWillUnmount == "function" && m0(t, t.return, a);
            break;
          }
          case B: {
            Jf(t, t.return);
            break;
          }
          case je: {
            var l = t.memoizedState !== null;
            if (l) {
              lw(e);
              continue;
            }
            break;
          }
        }
        i !== null ? (i.return = t, $e = i) : lw(e);
      }
    }
    function lw(e) {
      for (; $e !== null; ) {
        var t = $e;
        if (t === e) {
          $e = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, $e = i;
          return;
        }
        $e = t.return;
      }
    }
    function $_(e) {
      for (; $e !== null; ) {
        var t = $e, i = t.child;
        if (t.tag === je) {
          var a = t.memoizedState !== null;
          if (a) {
            uw(e);
            continue;
          }
        }
        i !== null ? (i.return = t, $e = i) : uw(e);
      }
    }
    function uw(e) {
      for (; $e !== null; ) {
        var t = $e;
        Zt(t);
        try {
          w_(t);
        } catch (a) {
          gn(t, t.return, a);
        }
        if (Ln(), t === e) {
          $e = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, $e = i;
          return;
        }
        $e = t.return;
      }
    }
    function N_(e, t, i, a) {
      $e = t, z_(t, e, i, a);
    }
    function z_(e, t, i, a) {
      for (; $e !== null; ) {
        var l = $e, f = l.child;
        (l.subtreeFlags & Gi) !== Ke && f !== null ? (f.return = l, $e = f) : U_(e, t, i, a);
      }
    }
    function U_(e, t, i, a) {
      for (; $e !== null; ) {
        var l = $e;
        if ((l.flags & Sn) !== Ke) {
          Zt(l);
          try {
            P_(t, l, i, a);
          } catch (v) {
            gn(l, l.return, v);
          }
          Ln();
        }
        if (l === e) {
          $e = null;
          return;
        }
        var f = l.sibling;
        if (f !== null) {
          f.return = l.return, $e = f;
          return;
        }
        $e = l.return;
      }
    }
    function P_(e, t, i, a) {
      switch (t.tag) {
        case x:
        case Ue:
        case ge: {
          if (t.mode & dt) {
            Pb();
            try {
              Xu(qr | Sr, t);
            } finally {
              Ub(t);
            }
          } else
            Xu(qr | Sr, t);
          break;
        }
      }
    }
    function H_(e) {
      $e = e, j_();
    }
    function j_() {
      for (; $e !== null; ) {
        var e = $e, t = e.child;
        if (($e.flags & Xt) !== Ke) {
          var i = e.deletions;
          if (i !== null) {
            for (var a = 0; a < i.length; a++) {
              var l = i[a];
              $e = l, I_(l, e);
            }
            {
              var f = e.alternate;
              if (f !== null) {
                var v = f.child;
                if (v !== null) {
                  f.child = null;
                  do {
                    var m = v.sibling;
                    v.sibling = null, v = m;
                  } while (v !== null);
                }
              }
            }
            $e = e;
          }
        }
        (e.subtreeFlags & Gi) !== Ke && t !== null ? (t.return = e, $e = t) : F_();
      }
    }
    function F_() {
      for (; $e !== null; ) {
        var e = $e;
        (e.flags & Sn) !== Ke && (Zt(e), V_(e), Ln());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, $e = t;
          return;
        }
        $e = e.return;
      }
    }
    function V_(e) {
      switch (e.tag) {
        case x:
        case Ue:
        case ge: {
          e.mode & dt ? (Pb(), vo(qr | Sr, e, e.return), Ub(e)) : vo(qr | Sr, e, e.return);
          break;
        }
      }
    }
    function I_(e, t) {
      for (; $e !== null; ) {
        var i = $e;
        Zt(i), W_(i, t), Ln();
        var a = i.child;
        a !== null ? (a.return = i, $e = a) : B_(e);
      }
    }
    function B_(e) {
      for (; $e !== null; ) {
        var t = $e, i = t.sibling, a = t.return;
        if (ew(t), t === e) {
          $e = null;
          return;
        }
        if (i !== null) {
          i.return = a, $e = i;
          return;
        }
        $e = a;
      }
    }
    function W_(e, t) {
      switch (e.tag) {
        case x:
        case Ue:
        case ge: {
          e.mode & dt ? (Pb(), vo(qr, e, t), Ub(e)) : vo(qr, e, t);
          break;
        }
      }
    }
    function Y_(e) {
      switch (e.tag) {
        case x:
        case Ue:
        case ge: {
          try {
            Xu(Er | Sr, e);
          } catch (i) {
            gn(e, e.return, i);
          }
          break;
        }
        case L: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (i) {
            gn(e, e.return, i);
          }
          break;
        }
      }
    }
    function G_(e) {
      switch (e.tag) {
        case x:
        case Ue:
        case ge: {
          try {
            Xu(qr | Sr, e);
          } catch (t) {
            gn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Q_(e) {
      switch (e.tag) {
        case x:
        case Ue:
        case ge: {
          try {
            vo(Er | Sr, e, e.return);
          } catch (i) {
            gn(e, e.return, i);
          }
          break;
        }
        case L: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && m0(e, e.return, t);
          break;
        }
      }
    }
    function q_(e) {
      switch (e.tag) {
        case x:
        case Ue:
        case ge:
          try {
            vo(qr | Sr, e, e.return);
          } catch (t) {
            gn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var tv = Symbol.for;
      tv("selector.component"), tv("selector.has_pseudo_class"), tv("selector.role"), tv("selector.test_id"), tv("selector.text");
    }
    var K_ = [];
    function X_() {
      K_.forEach(function(e) {
        return e();
      });
    }
    var Z_ = d.ReactCurrentActQueue;
    function J_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), i = typeof jest < "u";
        return i && t !== !1;
      }
    }
    function sw() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Z_.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var eD = Math.ceil, S0 = d.ReactCurrentDispatcher, E0 = d.ReactCurrentOwner, Jr = d.ReactCurrentBatchConfig, yo = d.ReactCurrentActQueue, Tr = (
      /*             */
      0
    ), cw = (
      /*               */
      1
    ), ei = (
      /*                */
      2
    ), Pa = (
      /*                */
      4
    ), zl = 0, nv = 1, oc = 2, ty = 3, rv = 4, fw = 5, C0 = 6, Pt = Tr, $i = null, Vn = null, Rr = te, el = te, w0 = Vu(te), xr = zl, iv = null, ny = te, av = te, ry = te, ov = null, oa = null, T0 = 0, dw = 500, pw = 1 / 0, tD = 500, Ul = null;
    function lv() {
      pw = kn() + tD;
    }
    function vw() {
      return pw;
    }
    var iy = !1, R0 = null, ed = null, lc = !1, Ju = null, uv = te, x0 = [], k0 = null, nD = 50, sv = 0, _0 = null, D0 = !1, ay = !1, rD = 50, td = 0, oy = null, cv = fn, ly = te, hw = !1;
    function uy() {
      return $i;
    }
    function Ni() {
      return (Pt & (ei | Pa)) !== Tr ? kn() : (cv !== fn || (cv = kn()), cv);
    }
    function es(e) {
      var t = e.mode;
      if ((t & Ie) === Fe)
        return Ye;
      if ((Pt & ei) !== Tr && Rr !== te)
        return wu(Rr);
      var i = Zx() !== Xx;
      if (i) {
        if (Jr.transition !== null) {
          var a = Jr.transition;
          a._updatedFibers || (a._updatedFibers = /* @__PURE__ */ new Set()), a._updatedFibers.add(e);
        }
        return ly === Yn && (ly = Sh()), ly;
      }
      var l = Zi();
      if (l !== Yn)
        return l;
      var f = zR();
      return f;
    }
    function iD(e) {
      var t = e.mode;
      return (t & Ie) === Fe ? Ye : mi();
    }
    function kr(e, t, i, a) {
      _D(), hw && g("useInsertionEffect must not schedule updates."), D0 && (ay = !0), Cl(e, i, a), (Pt & ei) !== te && e === $i ? LD(t) : (Oi && uf(e, t, i), MD(t), e === $i && ((Pt & ei) === Tr && (av = bt(av, i)), xr === rv && ts(e, Rr)), la(e, a), i === Ye && Pt === Tr && (t.mode & Ie) === Fe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !yo.isBatchingLegacy && (lv(), hE()));
    }
    function aD(e, t, i) {
      var a = e.current;
      a.lanes = t, Cl(e, t, i), la(e, i);
    }
    function oD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Pt & ei) !== Tr
      );
    }
    function la(e, t) {
      var i = e.callbackNode;
      hh(e, t);
      var a = Sl(e, e === $i ? Rr : te);
      if (a === te) {
        i !== null && Lw(i), e.callbackNode = null, e.callbackPriority = Yn;
        return;
      }
      var l = Hn(a), f = e.callbackPriority;
      if (f === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(yo.current !== null && i !== z0)) {
        i == null && f !== Ye && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      i != null && Lw(i);
      var v;
      if (l === Ye)
        e.tag === Iu ? (yo.isBatchingLegacy !== null && (yo.didScheduleLegacyUpdate = !0), $x(gw.bind(null, e))) : vE(gw.bind(null, e)), yo.current !== null ? yo.current.push(Bu) : PR(function() {
          (Pt & (ei | Pa)) === Tr && Bu();
        }), v = null;
      else {
        var m;
        switch (br(a)) {
          case jn:
            m = $c;
            break;
          case no:
            m = pl;
            break;
          case Da:
            m = _a;
            break;
          case Tu:
            m = Nc;
            break;
          default:
            m = _a;
            break;
        }
        v = U0(m, mw.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = v;
    }
    function mw(e, t) {
      if (Tk(), cv = fn, ly = te, (Pt & (ei | Pa)) !== Tr)
        throw new Error("Should not already be working.");
      var i = e.callbackNode, a = Hl();
      if (a && e.callbackNode !== i)
        return null;
      var l = Sl(e, e === $i ? Rr : te);
      if (l === te)
        return null;
      var f = !As(e, l) && !bh(e, l) && !t, v = f ? mD(e, l) : cy(e, l);
      if (v !== zl) {
        if (v === oc) {
          var m = jo(e);
          m !== te && (l = m, v = O0(e, m));
        }
        if (v === nv) {
          var b = iv;
          throw uc(e, te), ts(e, l), la(e, kn()), b;
        }
        if (v === C0)
          ts(e, l);
        else {
          var w = !As(e, l), R = e.current.alternate;
          if (w && !uD(R)) {
            if (v = cy(e, l), v === oc) {
              var U = jo(e);
              U !== te && (l = U, v = O0(e, U));
            }
            if (v === nv) {
              var N = iv;
              throw uc(e, te), ts(e, l), la(e, kn()), N;
            }
          }
          e.finishedWork = R, e.finishedLanes = l, lD(e, v, l);
        }
      }
      return la(e, kn()), e.callbackNode === i ? mw.bind(null, e) : null;
    }
    function O0(e, t) {
      var i = ov;
      if (sf(e)) {
        var a = uc(e, t);
        a.flags |= Mn, kx(e.containerInfo);
      }
      var l = cy(e, t);
      if (l !== oc) {
        var f = oa;
        oa = i, f !== null && yw(f);
      }
      return l;
    }
    function yw(e) {
      oa === null ? oa = e : oa.push.apply(oa, e);
    }
    function lD(e, t, i) {
      switch (t) {
        case zl:
        case nv:
          throw new Error("Root did not complete. This is a bug in React.");
        case oc: {
          sc(e, oa, Ul);
          break;
        }
        case ty: {
          if (ts(e, i), mh(i) && // do not delay if we're inside an act() scope
          !Mw()) {
            var a = T0 + dw - kn();
            if (a > 10) {
              var l = Sl(e, te);
              if (l !== te)
                break;
              var f = e.suspendedLanes;
              if (!El(f, i)) {
                Ni(), of(e, f);
                break;
              }
              e.timeoutHandle = kg(sc.bind(null, e, oa, Ul), a);
              break;
            }
          }
          sc(e, oa, Ul);
          break;
        }
        case rv: {
          if (ts(e, i), gh(i))
            break;
          if (!Mw()) {
            var v = ph(e, i), m = v, b = kn() - m, w = kD(b) - b;
            if (w > 10) {
              e.timeoutHandle = kg(sc.bind(null, e, oa, Ul), w);
              break;
            }
          }
          sc(e, oa, Ul);
          break;
        }
        case fw: {
          sc(e, oa, Ul);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function uD(e) {
      for (var t = e; ; ) {
        if (t.flags & ws) {
          var i = t.updateQueue;
          if (i !== null) {
            var a = i.stores;
            if (a !== null)
              for (var l = 0; l < a.length; l++) {
                var f = a[l], v = f.getSnapshot, m = f.value;
                try {
                  if (!Ae(v(), m))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var b = t.child;
        if (t.subtreeFlags & ws && b !== null) {
          b.return = t, t = b;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ts(e, t) {
      t = $s(t, ry), t = $s(t, av), Ch(e, t);
    }
    function gw(e) {
      if (Rk(), (Pt & (ei | Pa)) !== Tr)
        throw new Error("Should not already be working.");
      Hl();
      var t = Sl(e, te);
      if (!yi(t, Ye))
        return la(e, kn()), null;
      var i = cy(e, t);
      if (e.tag !== Iu && i === oc) {
        var a = jo(e);
        a !== te && (t = a, i = O0(e, a));
      }
      if (i === nv) {
        var l = iv;
        throw uc(e, te), ts(e, t), la(e, kn()), l;
      }
      if (i === C0)
        throw new Error("Root did not complete. This is a bug in React.");
      var f = e.current.alternate;
      return e.finishedWork = f, e.finishedLanes = t, sc(e, oa, Ul), la(e, kn()), null;
    }
    function sD(e, t) {
      t !== te && (ep(e, bt(t, Ye)), la(e, kn()), (Pt & (ei | Pa)) === Tr && (lv(), Bu()));
    }
    function L0(e, t) {
      var i = Pt;
      Pt |= cw;
      try {
        return e(t);
      } finally {
        Pt = i, Pt === Tr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !yo.isBatchingLegacy && (lv(), hE());
      }
    }
    function cD(e, t, i, a, l) {
      var f = Zi(), v = Jr.transition;
      try {
        return Jr.transition = null, An(jn), e(t, i, a, l);
      } finally {
        An(f), Jr.transition = v, Pt === Tr && lv();
      }
    }
    function Pl(e) {
      Ju !== null && Ju.tag === Iu && (Pt & (ei | Pa)) === Tr && Hl();
      var t = Pt;
      Pt |= cw;
      var i = Jr.transition, a = Zi();
      try {
        return Jr.transition = null, An(jn), e ? e() : void 0;
      } finally {
        An(a), Jr.transition = i, Pt = t, (Pt & (ei | Pa)) === Tr && Bu();
      }
    }
    function bw() {
      return (Pt & (ei | Pa)) !== Tr;
    }
    function sy(e, t) {
      Si(w0, el, e), el = bt(el, t);
    }
    function M0(e) {
      el = w0.current, bi(w0, e);
    }
    function uc(e, t) {
      e.finishedWork = null, e.finishedLanes = te;
      var i = e.timeoutHandle;
      if (i !== _g && (e.timeoutHandle = _g, UR(i)), Vn !== null)
        for (var a = Vn.return; a !== null; ) {
          var l = a.alternate;
          QC(l, a), a = a.return;
        }
      $i = e;
      var f = cc(e.current, null);
      return Vn = f, Rr = el = t, xr = zl, iv = null, ny = te, av = te, ry = te, ov = null, oa = null, ak(), uo.discardPendingWarnings(), f;
    }
    function Sw(e, t) {
      do {
        var i = Vn;
        try {
          if (bm(), BE(), Ln(), E0.current = null, i === null || i.return === null) {
            xr = nv, iv = t, Vn = null;
            return;
          }
          if (ot && i.mode & dt && Qm(i, !0), Ge)
            if (vi(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var a = t;
              hl(i, a, Rr);
            } else
              xs(i, t, Rr);
          $k(e, i.return, i, t, Rr), Tw(i);
        } catch (l) {
          t = l, Vn === i && i !== null ? (i = i.return, Vn = i) : i = Vn;
          continue;
        }
        return;
      } while (!0);
    }
    function Ew() {
      var e = S0.current;
      return S0.current = Im, e === null ? Im : e;
    }
    function Cw(e) {
      S0.current = e;
    }
    function fD() {
      T0 = kn();
    }
    function fv(e) {
      ny = bt(e, ny);
    }
    function dD() {
      xr === zl && (xr = ty);
    }
    function A0() {
      (xr === zl || xr === ty || xr === oc) && (xr = rv), $i !== null && (Ms(ny) || Ms(av)) && ts($i, Rr);
    }
    function pD(e) {
      xr !== rv && (xr = oc), ov === null ? ov = [e] : ov.push(e);
    }
    function vD() {
      return xr === zl;
    }
    function cy(e, t) {
      var i = Pt;
      Pt |= ei;
      var a = Ew();
      if ($i !== e || Rr !== t) {
        if (Oi) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (dv(e, Rr), l.clear()), tp(e, t);
        }
        Ul = zs(), uc(e, t);
      }
      En(t);
      do
        try {
          hD();
          break;
        } catch (f) {
          Sw(e, f);
        }
      while (!0);
      if (bm(), Pt = i, Cw(a), Vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return jc(), $i = null, Rr = te, xr;
    }
    function hD() {
      for (; Vn !== null; )
        ww(Vn);
    }
    function mD(e, t) {
      var i = Pt;
      Pt |= ei;
      var a = Ew();
      if ($i !== e || Rr !== t) {
        if (Oi) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (dv(e, Rr), l.clear()), tp(e, t);
        }
        Ul = zs(), lv(), uc(e, t);
      }
      En(t);
      do
        try {
          yD();
          break;
        } catch (f) {
          Sw(e, f);
        }
      while (!0);
      return bm(), Cw(a), Pt = i, Vn !== null ? (Hc(), zl) : (jc(), $i = null, Rr = te, xr);
    }
    function yD() {
      for (; Vn !== null && !Ac(); )
        ww(Vn);
    }
    function ww(e) {
      var t = e.alternate;
      Zt(e);
      var i;
      (e.mode & dt) !== Fe ? (zb(e), i = $0(t, e, el), Qm(e, !0)) : i = $0(t, e, el), Ln(), e.memoizedProps = e.pendingProps, i === null ? Tw(e) : Vn = i, E0.current = null;
    }
    function Tw(e) {
      var t = e;
      do {
        var i = t.alternate, a = t.return;
        if ((t.flags & ki) === Ke) {
          Zt(t);
          var l = void 0;
          if ((t.mode & dt) === Fe ? l = GC(i, t, el) : (zb(t), l = GC(i, t, el), Qm(t, !1)), Ln(), l !== null) {
            Vn = l;
            return;
          }
        } else {
          var f = d_(i, t);
          if (f !== null) {
            f.flags &= nh, Vn = f;
            return;
          }
          if ((t.mode & dt) !== Fe) {
            Qm(t, !1);
            for (var v = t.actualDuration, m = t.child; m !== null; )
              v += m.actualDuration, m = m.sibling;
            t.actualDuration = v;
          }
          if (a !== null)
            a.flags |= ki, a.subtreeFlags = Ke, a.deletions = null;
          else {
            xr = C0, Vn = null;
            return;
          }
        }
        var b = t.sibling;
        if (b !== null) {
          Vn = b;
          return;
        }
        t = a, Vn = t;
      } while (t !== null);
      xr === zl && (xr = fw);
    }
    function sc(e, t, i) {
      var a = Zi(), l = Jr.transition;
      try {
        Jr.transition = null, An(jn), gD(e, t, i, a);
      } finally {
        Jr.transition = l, An(a);
      }
      return null;
    }
    function gD(e, t, i, a) {
      do
        Hl();
      while (Ju !== null);
      if (DD(), (Pt & (ei | Pa)) !== Tr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, f = e.finishedLanes;
      if (Uo(f), l === null)
        return zc(), null;
      if (f === te && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = te, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Yn;
      var v = bt(l.lanes, l.childLanes);
      lf(e, v), e === $i && ($i = null, Vn = null, Rr = te), ((l.subtreeFlags & Gi) !== Ke || (l.flags & Gi) !== Ke) && (lc || (lc = !0, k0 = i, U0(_a, function() {
        return Hl(), null;
      })));
      var m = (l.subtreeFlags & (cu | di | Nr | Gi)) !== Ke, b = (l.flags & (cu | di | Nr | Gi)) !== Ke;
      if (m || b) {
        var w = Jr.transition;
        Jr.transition = null;
        var R = Zi();
        An(jn);
        var U = Pt;
        Pt |= Pa, E0.current = null, y_(e, l), hC(), L_(e, l, f), OR(e.containerInfo), e.current = l, Yd(f), M_(l, e, f), hu(), ah(), Pt = U, An(R), Jr.transition = w;
      } else
        e.current = l, hC();
      var N = lc;
      if (lc ? (lc = !1, Ju = e, uv = f) : (td = 0, oy = null), v = e.pendingLanes, v === te && (ed = null), N || _w(e.current, !1), du(l.stateNode, a), Oi && e.memoizedUpdaters.clear(), X_(), la(e, kn()), t !== null)
        for (var W = e.onRecoverableError, Q = 0; Q < t.length; Q++) {
          var Z = t[Q], Se = Z.stack, Xe = Z.digest;
          W(Z.value, {
            componentStack: Se,
            digest: Xe
          });
        }
      if (iy) {
        iy = !1;
        var Be = R0;
        throw R0 = null, Be;
      }
      return yi(uv, Ye) && e.tag !== Iu && Hl(), v = e.pendingLanes, yi(v, Ye) ? (wk(), e === _0 ? sv++ : (sv = 0, _0 = e)) : sv = 0, Bu(), zc(), null;
    }
    function Hl() {
      if (Ju !== null) {
        var e = br(uv), t = Zy(Da, e), i = Jr.transition, a = Zi();
        try {
          return Jr.transition = null, An(t), SD();
        } finally {
          An(a), Jr.transition = i;
        }
      }
      return !1;
    }
    function bD(e) {
      x0.push(e), lc || (lc = !0, U0(_a, function() {
        return Hl(), null;
      }));
    }
    function SD() {
      if (Ju === null)
        return !1;
      var e = k0;
      k0 = null;
      var t = Ju, i = uv;
      if (Ju = null, uv = te, (Pt & (ei | Pa)) !== Tr)
        throw new Error("Cannot flush passive effects while already rendering.");
      D0 = !0, ay = !1, fh(i);
      var a = Pt;
      Pt |= Pa, H_(t.current), N_(t, t.current, i, e);
      {
        var l = x0;
        x0 = [];
        for (var f = 0; f < l.length; f++) {
          var v = l[f];
          E_(t, v);
        }
      }
      Gd(), _w(t.current, !0), Pt = a, Bu(), ay ? t === oy ? td++ : (td = 0, oy = t) : td = 0, D0 = !1, ay = !1, Ki(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Rw(e) {
      return ed !== null && ed.has(e);
    }
    function ED(e) {
      ed === null ? ed = /* @__PURE__ */ new Set([e]) : ed.add(e);
    }
    function CD(e) {
      iy || (iy = !0, R0 = e);
    }
    var wD = CD;
    function xw(e, t, i) {
      var a = ic(i, t), l = wC(e, a, Ye), f = Yu(e, l, Ye), v = Ni();
      f !== null && (Cl(f, Ye, v), la(f, v));
    }
    function gn(e, t, i) {
      if (v_(i), pv(!1), e.tag === A) {
        xw(e, e, i);
        return;
      }
      var a = null;
      for (a = t; a !== null; ) {
        if (a.tag === A) {
          xw(a, e, i);
          return;
        } else if (a.tag === L) {
          var l = a.type, f = a.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && !Rw(f)) {
            var v = ic(i, e), m = e0(a, v, Ye), b = Yu(a, m, Ye), w = Ni();
            b !== null && (Cl(b, Ye, w), la(b, w));
            return;
          }
        }
        a = a.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, i);
    }
    function TD(e, t, i) {
      var a = e.pingCache;
      a !== null && a.delete(t);
      var l = Ni();
      of(e, i), AD(e), $i === e && El(Rr, i) && (xr === rv || xr === ty && mh(Rr) && kn() - T0 < dw ? uc(e, te) : ry = bt(ry, i)), la(e, l);
    }
    function kw(e, t) {
      t === Yn && (t = iD(e));
      var i = Ni(), a = ia(e, t);
      a !== null && (Cl(a, t, i), la(a, i));
    }
    function RD(e) {
      var t = e.memoizedState, i = Yn;
      t !== null && (i = t.retryLane), kw(e, i);
    }
    function xD(e, t) {
      var i = Yn, a;
      switch (e.tag) {
        case Oe:
          a = e.stateNode;
          var l = e.memoizedState;
          l !== null && (i = l.retryLane);
          break;
        case Ct:
          a = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      a !== null && a.delete(t), kw(e, i);
    }
    function kD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : eD(e / 1960) * 1960;
    }
    function _D() {
      if (sv > nD)
        throw sv = 0, _0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      td > rD && (td = 0, oy = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function DD() {
      uo.flushLegacyContextWarning(), uo.flushPendingUnsafeLifecycleWarnings();
    }
    function _w(e, t) {
      Zt(e), fy(e, fi, Q_), t && fy(e, dl, q_), fy(e, fi, Y_), t && fy(e, dl, G_), Ln();
    }
    function fy(e, t, i) {
      for (var a = e, l = null; a !== null; ) {
        var f = a.subtreeFlags & t;
        a !== l && a.child !== null && f !== Ke ? a = a.child : ((a.flags & t) !== Ke && i(a), a.sibling !== null ? a = a.sibling : a = l = a.return);
      }
    }
    var dy = null;
    function Dw(e) {
      {
        if ((Pt & ei) !== Tr || !(e.mode & Ie))
          return;
        var t = e.tag;
        if (t !== P && t !== A && t !== L && t !== x && t !== Ue && t !== st && t !== ge)
          return;
        var i = pt(e) || "ReactComponent";
        if (dy !== null) {
          if (dy.has(i))
            return;
          dy.add(i);
        } else
          dy = /* @__PURE__ */ new Set([i]);
        var a = xn;
        try {
          Zt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          a ? Zt(e) : Ln();
        }
      }
    }
    var $0;
    {
      var OD = null;
      $0 = function(e, t, i) {
        var a = Uw(OD, t);
        try {
          return VC(e, t, i);
        } catch (f) {
          if (Vx() || f !== null && typeof f == "object" && typeof f.then == "function")
            throw f;
          if (bm(), BE(), QC(e, t), Uw(t, a), t.mode & dt && zb(t), fl(null, VC, null, e, t, i), Gy()) {
            var l = Ud();
            typeof l == "object" && l !== null && l._suppressLogging && typeof f == "object" && f !== null && !f._suppressLogging && (f._suppressLogging = !0);
          }
          throw f;
        }
      };
    }
    var Ow = !1, N0;
    N0 = /* @__PURE__ */ new Set();
    function LD(e) {
      if (oi && !Sk())
        switch (e.tag) {
          case x:
          case Ue:
          case ge: {
            var t = Vn && pt(Vn) || "Unknown", i = t;
            if (!N0.has(i)) {
              N0.add(i);
              var a = pt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
            }
            break;
          }
          case L: {
            Ow || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Ow = !0);
            break;
          }
        }
    }
    function dv(e, t) {
      if (Oi) {
        var i = e.memoizedUpdaters;
        i.forEach(function(a) {
          uf(e, a, t);
        });
      }
    }
    var z0 = {};
    function U0(e, t) {
      {
        var i = yo.current;
        return i !== null ? (i.push(t), z0) : Mc(e, t);
      }
    }
    function Lw(e) {
      if (e !== z0)
        return ih(e);
    }
    function Mw() {
      return yo.current !== null;
    }
    function MD(e) {
      {
        if (e.mode & Ie) {
          if (!sw())
            return;
        } else if (!J_() || Pt !== Tr || e.tag !== x && e.tag !== Ue && e.tag !== ge)
          return;
        if (yo.current === null) {
          var t = xn;
          try {
            Zt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, pt(e));
          } finally {
            t ? Zt(e) : Ln();
          }
        }
      }
    }
    function AD(e) {
      e.tag !== Iu && sw() && yo.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function pv(e) {
      hw = e;
    }
    var Ha = null, nd = null, $D = function(e) {
      Ha = e;
    };
    function rd(e) {
      {
        if (Ha === null)
          return e;
        var t = Ha(e);
        return t === void 0 ? e : t.current;
      }
    }
    function P0(e) {
      return rd(e);
    }
    function H0(e) {
      {
        if (Ha === null)
          return e;
        var t = Ha(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = rd(e.render);
            if (e.render !== i) {
              var a = {
                $$typeof: le,
                render: i
              };
              return e.displayName !== void 0 && (a.displayName = e.displayName), a;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function Aw(e, t) {
      {
        if (Ha === null)
          return !1;
        var i = e.elementType, a = t.type, l = !1, f = typeof a == "object" && a !== null ? a.$$typeof : null;
        switch (e.tag) {
          case L: {
            typeof a == "function" && (l = !0);
            break;
          }
          case x: {
            (typeof a == "function" || f === Qe) && (l = !0);
            break;
          }
          case Ue: {
            (f === le || f === Qe) && (l = !0);
            break;
          }
          case st:
          case ge: {
            (f === Lt || f === Qe) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var v = Ha(i);
          if (v !== void 0 && v === Ha(a))
            return !0;
        }
        return !1;
      }
    }
    function $w(e) {
      {
        if (Ha === null || typeof WeakSet != "function")
          return;
        nd === null && (nd = /* @__PURE__ */ new WeakSet()), nd.add(e);
      }
    }
    var ND = function(e, t) {
      {
        if (Ha === null)
          return;
        var i = t.staleFamilies, a = t.updatedFamilies;
        Hl(), Pl(function() {
          j0(e.current, a, i);
        });
      }
    }, zD = function(e, t) {
      {
        if (e.context !== ga)
          return;
        Hl(), Pl(function() {
          vv(t, e, null, null);
        });
      }
    };
    function j0(e, t, i) {
      {
        var a = e.alternate, l = e.child, f = e.sibling, v = e.tag, m = e.type, b = null;
        switch (v) {
          case x:
          case ge:
          case L:
            b = m;
            break;
          case Ue:
            b = m.render;
            break;
        }
        if (Ha === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var w = !1, R = !1;
        if (b !== null) {
          var U = Ha(b);
          U !== void 0 && (i.has(U) ? R = !0 : t.has(U) && (v === L ? R = !0 : w = !0));
        }
        if (nd !== null && (nd.has(e) || a !== null && nd.has(a)) && (R = !0), R && (e._debugNeedsRemount = !0), R || w) {
          var N = ia(e, Ye);
          N !== null && kr(N, e, Ye, fn);
        }
        l !== null && !R && j0(l, t, i), f !== null && j0(f, t, i);
      }
    }
    var UD = function(e, t) {
      {
        var i = /* @__PURE__ */ new Set(), a = new Set(t.map(function(l) {
          return l.current;
        }));
        return F0(e.current, a, i), i;
      }
    };
    function F0(e, t, i) {
      {
        var a = e.child, l = e.sibling, f = e.tag, v = e.type, m = null;
        switch (f) {
          case x:
          case ge:
          case L:
            m = v;
            break;
          case Ue:
            m = v.render;
            break;
        }
        var b = !1;
        m !== null && t.has(m) && (b = !0), b ? PD(e, i) : a !== null && F0(a, t, i), l !== null && F0(l, t, i);
      }
    }
    function PD(e, t) {
      {
        var i = HD(e, t);
        if (i)
          return;
        for (var a = e; ; ) {
          switch (a.tag) {
            case B:
              t.add(a.stateNode);
              return;
            case K:
              t.add(a.stateNode.containerInfo);
              return;
            case A:
              t.add(a.stateNode.containerInfo);
              return;
          }
          if (a.return === null)
            throw new Error("Expected to reach root first.");
          a = a.return;
        }
      }
    }
    function HD(e, t) {
      for (var i = e, a = !1; ; ) {
        if (i.tag === B)
          a = !0, t.add(i.stateNode);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return a;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return a;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return !1;
    }
    var V0;
    {
      V0 = !1;
      try {
        var Nw = Object.preventExtensions({});
      } catch {
        V0 = !0;
      }
    }
    function jD(e, t, i, a) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = Ke, this.subtreeFlags = Ke, this.deletions = null, this.lanes = te, this.childLanes = te, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !V0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ba = function(e, t, i, a) {
      return new jD(e, t, i, a);
    };
    function I0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function FD(e) {
      return typeof e == "function" && !I0(e) && e.defaultProps === void 0;
    }
    function VD(e) {
      if (typeof e == "function")
        return I0(e) ? L : x;
      if (e != null) {
        var t = e.$$typeof;
        if (t === le)
          return Ue;
        if (t === Lt)
          return st;
      }
      return P;
    }
    function cc(e, t) {
      var i = e.alternate;
      i === null ? (i = ba(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = Ke, i.subtreeFlags = Ke, i.deletions = null, i.actualDuration = 0, i.actualStartTime = -1), i.flags = e.flags & yr, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var a = e.dependencies;
      switch (i.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case P:
        case x:
        case ge:
          i.type = rd(e.type);
          break;
        case L:
          i.type = P0(e.type);
          break;
        case Ue:
          i.type = H0(e.type);
          break;
      }
      return i;
    }
    function ID(e, t) {
      e.flags &= yr | hn;
      var i = e.alternate;
      if (i === null)
        e.childLanes = te, e.lanes = t, e.child = null, e.subtreeFlags = Ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = Ke, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type;
        var a = i.dependencies;
        e.dependencies = a === null ? null : {
          lanes: a.lanes,
          firstContext: a.firstContext
        }, e.selfBaseDuration = i.selfBaseDuration, e.treeBaseDuration = i.treeBaseDuration;
      }
      return e;
    }
    function BD(e, t, i) {
      var a;
      return e === sm ? (a = Ie, t === !0 && (a |= Ot, a |= Li)) : a = Fe, Oi && (a |= dt), ba(A, null, null, a);
    }
    function B0(e, t, i, a, l, f) {
      var v = P, m = e;
      if (typeof e == "function")
        I0(e) ? (v = L, m = P0(m)) : m = rd(m);
      else if (typeof e == "string")
        v = B;
      else
        e: switch (e) {
          case Vr:
            return ns(i.children, l, f, t);
          case Hi:
            v = Ce, l |= Ot, (l & Ie) !== Fe && (l |= Li);
            break;
          case xi:
            return WD(i, l, f, t);
          case He:
            return YD(i, l, f, t);
          case kt:
            return GD(i, l, f, t);
          case V:
            return zw(i, l, f, t);
          case de:
          case Rt:
          case qe:
          case Wt:
          case Pn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case O:
                  v = ye;
                  break e;
                case ne:
                  v = ht;
                  break e;
                case le:
                  v = Ue, m = H0(m);
                  break e;
                case Lt:
                  v = st;
                  break e;
                case Qe:
                  v = nt, m = null;
                  break e;
              }
            var b = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var w = a ? pt(a) : null;
              w && (b += `

Check the render method of \`` + w + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + b));
          }
        }
      var R = ba(v, i, t, l);
      return R.elementType = e, R.type = m, R.lanes = f, R._debugOwner = a, R;
    }
    function W0(e, t, i) {
      var a = null;
      a = e._owner;
      var l = e.type, f = e.key, v = e.props, m = B0(l, f, v, a, t, i);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function ns(e, t, i, a) {
      var l = ba(We, e, a, t);
      return l.lanes = i, l;
    }
    function WD(e, t, i, a) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = ba(ut, e, a, t | dt);
      return l.elementType = xi, l.lanes = i, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function YD(e, t, i, a) {
      var l = ba(Oe, e, a, t);
      return l.elementType = He, l.lanes = i, l;
    }
    function GD(e, t, i, a) {
      var l = ba(Ct, e, a, t);
      return l.elementType = kt, l.lanes = i, l;
    }
    function zw(e, t, i, a) {
      var l = ba(je, e, a, t);
      l.elementType = V, l.lanes = i;
      var f = {
        isHidden: !1
      };
      return l.stateNode = f, l;
    }
    function Y0(e, t, i) {
      var a = ba(se, e, null, t);
      return a.lanes = i, a;
    }
    function QD() {
      var e = ba(B, null, null, Fe);
      return e.elementType = "DELETED", e;
    }
    function qD(e) {
      var t = ba(xt, null, null, Fe);
      return t.stateNode = e, t;
    }
    function G0(e, t, i) {
      var a = e.children !== null ? e.children : [], l = ba(K, a, e.key, t);
      return l.lanes = i, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function Uw(e, t) {
      return e === null && (e = ba(P, null, null, Fe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function KD(e, t, i, a, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = _g, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Yn, this.eventTimes = Ns(te), this.expirationTimes = Ns(fn), this.pendingLanes = te, this.suspendedLanes = te, this.pingedLanes = te, this.expiredLanes = te, this.mutableReadLanes = te, this.finishedLanes = te, this.entangledLanes = te, this.entanglements = Ns(te), this.identifierPrefix = a, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var f = this.pendingUpdatersLaneMap = [], v = 0; v < Ds; v++)
          f.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case sm:
          this._debugRootType = i ? "hydrateRoot()" : "createRoot()";
          break;
        case Iu:
          this._debugRootType = i ? "hydrate()" : "render()";
          break;
      }
    }
    function Pw(e, t, i, a, l, f, v, m, b, w) {
      var R = new KD(e, t, i, m, b), U = BD(t, f);
      R.current = U, U.stateNode = R;
      {
        var N = {
          element: a,
          isDehydrated: i,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        U.memoizedState = N;
      }
      return ob(U), R;
    }
    var Q0 = "18.3.1";
    function XD(e, t, i) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Dr(a), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: mr,
        key: a == null ? null : "" + a,
        children: e,
        containerInfo: t,
        implementation: i
      };
    }
    var q0, K0;
    q0 = !1, K0 = {};
    function Hw(e) {
      if (!e)
        return ga;
      var t = Bi(e), i = Ax(t);
      if (t.tag === L) {
        var a = t.type;
        if (Go(a))
          return dE(t, a, i);
      }
      return i;
    }
    function ZD(e, t) {
      {
        var i = Bi(e);
        if (i === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var a = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
        }
        var l = Qi(i);
        if (l === null)
          return null;
        if (l.mode & Ot) {
          var f = pt(i) || "Component";
          if (!K0[f]) {
            K0[f] = !0;
            var v = xn;
            try {
              Zt(l), i.mode & Ot ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f);
            } finally {
              v ? Zt(v) : Ln();
            }
          }
        }
        return l.stateNode;
      }
    }
    function jw(e, t, i, a, l, f, v, m) {
      var b = !1, w = null;
      return Pw(e, t, b, w, i, a, l, f, v);
    }
    function Fw(e, t, i, a, l, f, v, m, b, w) {
      var R = !0, U = Pw(i, a, R, e, l, f, v, m, b);
      U.context = Hw(null);
      var N = U.current, W = Ni(), Q = es(N), Z = $l(W, Q);
      return Z.callback = t ?? null, Yu(N, Z, Q), aD(U, Q, W), U;
    }
    function vv(e, t, i, a) {
      Wd(t, e);
      var l = t.current, f = Ni(), v = es(l);
      Qd(v);
      var m = Hw(i);
      t.context === null ? t.context = m : t.pendingContext = m, oi && xn !== null && !q0 && (q0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, pt(xn) || "Unknown"));
      var b = $l(f, v);
      b.payload = {
        element: e
      }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), b.callback = a);
      var w = Yu(l, b, v);
      return w !== null && (kr(w, l, v, f), Tm(w, l, v)), v;
    }
    function py(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case B:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function JD(e) {
      switch (e.tag) {
        case A: {
          var t = e.stateNode;
          if (sf(t)) {
            var i = Xd(t);
            sD(t, i);
          }
          break;
        }
        case Oe: {
          Pl(function() {
            var l = ia(e, Ye);
            if (l !== null) {
              var f = Ni();
              kr(l, e, Ye, f);
            }
          });
          var a = Ye;
          X0(e, a);
          break;
        }
      }
    }
    function Vw(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && (i.retryLane = Eh(i.retryLane, t));
    }
    function X0(e, t) {
      Vw(e, t);
      var i = e.alternate;
      i && Vw(i, t);
    }
    function eO(e) {
      if (e.tag === Oe) {
        var t = Ls, i = ia(e, t);
        if (i !== null) {
          var a = Ni();
          kr(i, e, t, a);
        }
        X0(e, t);
      }
    }
    function tO(e) {
      if (e.tag === Oe) {
        var t = es(e), i = ia(e, t);
        if (i !== null) {
          var a = Ni();
          kr(i, e, t, a);
        }
        X0(e, t);
      }
    }
    function Iw(e) {
      var t = rh(e);
      return t === null ? null : t.stateNode;
    }
    var Bw = function(e) {
      return null;
    };
    function nO(e) {
      return Bw(e);
    }
    var Ww = function(e) {
      return !1;
    };
    function rO(e) {
      return Ww(e);
    }
    var Yw = null, Gw = null, Qw = null, qw = null, Kw = null, Xw = null, Zw = null, Jw = null, e1 = null;
    {
      var t1 = function(e, t, i) {
        var a = t[i], l = zt(e) ? e.slice() : _t({}, e);
        return i + 1 === t.length ? (zt(l) ? l.splice(a, 1) : delete l[a], l) : (l[a] = t1(e[a], t, i + 1), l);
      }, n1 = function(e, t) {
        return t1(e, t, 0);
      }, r1 = function(e, t, i, a) {
        var l = t[a], f = zt(e) ? e.slice() : _t({}, e);
        if (a + 1 === t.length) {
          var v = i[a];
          f[v] = f[l], zt(f) ? f.splice(l, 1) : delete f[l];
        } else
          f[l] = r1(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            i,
            a + 1
          );
        return f;
      }, i1 = function(e, t, i) {
        if (t.length !== i.length) {
          T("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var a = 0; a < i.length - 1; a++)
            if (t[a] !== i[a]) {
              T("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return r1(e, t, i, 0);
      }, a1 = function(e, t, i, a) {
        if (i >= t.length)
          return a;
        var l = t[i], f = zt(e) ? e.slice() : _t({}, e);
        return f[l] = a1(e[l], t, i + 1, a), f;
      }, o1 = function(e, t, i) {
        return a1(e, t, 0, i);
      }, Z0 = function(e, t) {
        for (var i = e.memoizedState; i !== null && t > 0; )
          i = i.next, t--;
        return i;
      };
      Yw = function(e, t, i, a) {
        var l = Z0(e, t);
        if (l !== null) {
          var f = o1(l.memoizedState, i, a);
          l.memoizedState = f, l.baseState = f, e.memoizedProps = _t({}, e.memoizedProps);
          var v = ia(e, Ye);
          v !== null && kr(v, e, Ye, fn);
        }
      }, Gw = function(e, t, i) {
        var a = Z0(e, t);
        if (a !== null) {
          var l = n1(a.memoizedState, i);
          a.memoizedState = l, a.baseState = l, e.memoizedProps = _t({}, e.memoizedProps);
          var f = ia(e, Ye);
          f !== null && kr(f, e, Ye, fn);
        }
      }, Qw = function(e, t, i, a) {
        var l = Z0(e, t);
        if (l !== null) {
          var f = i1(l.memoizedState, i, a);
          l.memoizedState = f, l.baseState = f, e.memoizedProps = _t({}, e.memoizedProps);
          var v = ia(e, Ye);
          v !== null && kr(v, e, Ye, fn);
        }
      }, qw = function(e, t, i) {
        e.pendingProps = o1(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ia(e, Ye);
        a !== null && kr(a, e, Ye, fn);
      }, Kw = function(e, t) {
        e.pendingProps = n1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ia(e, Ye);
        i !== null && kr(i, e, Ye, fn);
      }, Xw = function(e, t, i) {
        e.pendingProps = i1(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ia(e, Ye);
        a !== null && kr(a, e, Ye, fn);
      }, Zw = function(e) {
        var t = ia(e, Ye);
        t !== null && kr(t, e, Ye, fn);
      }, Jw = function(e) {
        Bw = e;
      }, e1 = function(e) {
        Ww = e;
      };
    }
    function iO(e) {
      var t = Qi(e);
      return t === null ? null : t.stateNode;
    }
    function aO(e) {
      return null;
    }
    function oO() {
      return xn;
    }
    function lO(e) {
      var t = e.findFiberByHostInstance, i = d.ReactCurrentDispatcher;
      return Bd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Yw,
        overrideHookStateDeletePath: Gw,
        overrideHookStateRenamePath: Qw,
        overrideProps: qw,
        overridePropsDeletePath: Kw,
        overridePropsRenamePath: Xw,
        setErrorHandler: Jw,
        setSuspenseHandler: e1,
        scheduleUpdate: Zw,
        currentDispatcherRef: i,
        findHostInstanceByFiber: iO,
        findFiberByHostInstance: t || aO,
        // React Refresh
        findHostInstancesForRefresh: UD,
        scheduleRefresh: ND,
        scheduleRoot: zD,
        setRefreshHandler: $D,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: oO,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: Q0
      });
    }
    var l1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function J0(e) {
      this._internalRoot = e;
    }
    vy.prototype.render = J0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : hy(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var i = t.containerInfo;
        if (i.nodeType !== Bn) {
          var a = Iw(t.current);
          a && a.parentNode !== i && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      vv(e, t, null, null);
    }, vy.prototype.unmount = J0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        bw() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Pl(function() {
          vv(null, e, null, null);
        }), lE(t);
      }
    };
    function uO(e, t) {
      if (!hy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      u1(e);
      var i = !1, a = !1, l = "", f = l1;
      t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === bn && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = jw(e, sm, null, i, a, l, f);
      nm(v.current, e);
      var m = e.nodeType === Bn ? e.parentNode : e;
      return Sp(m), new J0(v);
    }
    function vy(e) {
      this._internalRoot = e;
    }
    function sO(e) {
      e && tg(e);
    }
    vy.prototype.unstable_scheduleHydration = sO;
    function cO(e, t, i) {
      if (!hy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      u1(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var a = i ?? null, l = i != null && i.hydratedSources || null, f = !1, v = !1, m = "", b = l1;
      i != null && (i.unstable_strictMode === !0 && (f = !0), i.identifierPrefix !== void 0 && (m = i.identifierPrefix), i.onRecoverableError !== void 0 && (b = i.onRecoverableError));
      var w = Fw(t, null, e, sm, a, f, v, m, b);
      if (nm(w.current, e), Sp(e), l)
        for (var R = 0; R < l.length; R++) {
          var U = l[R];
          vk(w, U);
        }
      return new vy(w);
    }
    function hy(e) {
      return !!(e && (e.nodeType === ui || e.nodeType === va || e.nodeType === al || !q));
    }
    function hv(e) {
      return !!(e && (e.nodeType === ui || e.nodeType === va || e.nodeType === al || e.nodeType === Bn && e.nodeValue === " react-mount-point-unstable "));
    }
    function u1(e) {
      e.nodeType === ui && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Lp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var fO = d.ReactCurrentOwner, s1;
    s1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Bn) {
        var t = Iw(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, a = eS(e), l = !!(a && Fu(a));
      l && !i && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ui && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function eS(e) {
      return e ? e.nodeType === va ? e.documentElement : e.firstChild : null;
    }
    function c1() {
    }
    function dO(e, t, i, a, l) {
      if (l) {
        if (typeof a == "function") {
          var f = a;
          a = function() {
            var N = py(v);
            f.call(N);
          };
        }
        var v = Fw(
          t,
          a,
          e,
          Iu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          c1
        );
        e._reactRootContainer = v, nm(v.current, e);
        var m = e.nodeType === Bn ? e.parentNode : e;
        return Sp(m), Pl(), v;
      } else {
        for (var b; b = e.lastChild; )
          e.removeChild(b);
        if (typeof a == "function") {
          var w = a;
          a = function() {
            var N = py(R);
            w.call(N);
          };
        }
        var R = jw(
          e,
          Iu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          c1
        );
        e._reactRootContainer = R, nm(R.current, e);
        var U = e.nodeType === Bn ? e.parentNode : e;
        return Sp(U), Pl(function() {
          vv(t, R, i, a);
        }), R;
      }
    }
    function pO(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function my(e, t, i, a, l) {
      s1(i), pO(l === void 0 ? null : l, "render");
      var f = i._reactRootContainer, v;
      if (!f)
        v = dO(i, t, e, l, a);
      else {
        if (v = f, typeof l == "function") {
          var m = l;
          l = function() {
            var b = py(v);
            m.call(b);
          };
        }
        vv(t, v, e, l);
      }
      return py(v);
    }
    var f1 = !1;
    function vO(e) {
      {
        f1 || (f1 = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = fO.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Nt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ui ? e : ZD(e, "findDOMNode");
    }
    function hO(e, t, i) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Lp(t) && t._reactRootContainer === void 0;
        a && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return my(null, e, t, !0, i);
    }
    function mO(e, t, i) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Lp(t) && t._reactRootContainer === void 0;
        a && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return my(null, e, t, !1, i);
    }
    function yO(e, t, i, a) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(i))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Cs(e))
        throw new Error("parentComponent must be a valid React Component");
      return my(e, t, i, !1, a);
    }
    var d1 = !1;
    function gO(e) {
      if (d1 || (d1 = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !hv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Lp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = eS(e), a = i && !Fu(i);
          a && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Pl(function() {
          my(null, null, e, !1, function() {
            e._reactRootContainer = null, lE(e);
          });
        }), !0;
      } else {
        {
          var l = eS(e), f = !!(l && Fu(l)), v = e.nodeType === ui && hv(e.parentNode) && !!e.parentNode._reactRootContainer;
          f && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ku(JD), Jy(eO), ff(tO), Th(Zi), Rh(Pr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), eh(SR), kc(L0, cD, Pl);
    function bO(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!hy(t))
        throw new Error("Target container is not a DOM element.");
      return XD(e, t, null, i);
    }
    function SO(e, t, i, a) {
      return yO(e, t, i, a);
    }
    var tS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Fu, $f, rm, xc, bs, L0]
    };
    function EO(e, t) {
      return tS.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), uO(e, t);
    }
    function CO(e, t, i) {
      return tS.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), cO(e, t, i);
    }
    function wO(e) {
      return bw() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Pl(e);
    }
    var TO = lO({
      findFiberByHostInstance: qs,
      bundleType: 1,
      version: Q0,
      rendererPackageName: "react-dom"
    });
    if (!TO && dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var p1 = window.location.protocol;
      /^(https?|file):$/.test(p1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (p1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    sa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tS, sa.createPortal = bO, sa.createRoot = EO, sa.findDOMNode = vO, sa.flushSync = wO, sa.hydrate = hO, sa.hydrateRoot = CO, sa.render = mO, sa.unmountComponentAtNode = gO, sa.unstable_batchedUpdates = L0, sa.unstable_renderSubtreeIntoContainer = SO, sa.version = Q0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), sa;
}
function wT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wT);
    } catch (c) {
      console.error(c);
    }
  }
}
process.env.NODE_ENV === "production" ? (wT(), ES.exports = rM()) : ES.exports = iM();
var aM = ES.exports;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const oM = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}", lM = oM, uM = /* @__PURE__ */ pd(class extends dd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.type = "bounded";
  }
  /**
   * Adds the ripple effect to the parent element.
   *
   * @param x The horizontal coordinate of where the ripple should start.
   * @param y The vertical coordinate of where the ripple should start.
   */
  async addRipple(u, d) {
    return new Promise((y) => {
      VO(() => {
        const S = this.el.getBoundingClientRect(), T = S.width, g = S.height, _ = Math.sqrt(T * T + g * g), x = Math.max(g, T), L = this.unbounded ? x : _ + cM, P = Math.floor(x * fM), A = L / P;
        let K = u - S.left, B = d - S.top;
        this.unbounded && (K = T * 0.5, B = g * 0.5);
        const se = K - P * 0.5, We = B - P * 0.5, Ce = T * 0.5 - K, ht = g * 0.5 - B;
        xS(() => {
          const ye = document.createElement("div");
          ye.classList.add("ripple-effect");
          const Ue = ye.style;
          Ue.top = We + "px", Ue.left = se + "px", Ue.width = Ue.height = P + "px", Ue.setProperty("--final-scale", `${A}`), Ue.setProperty("--translate-end", `${Ce}px, ${ht}px`), (this.el.shadowRoot || this.el).appendChild(ye), setTimeout(() => {
            y(() => {
              sM(ye);
            });
          }, 325);
        });
      });
    });
  }
  get unbounded() {
    return this.type === "unbounded";
  }
  render() {
    const u = cd(this);
    return Pi(Rv, { key: "2302f087ab1c6755355736e4ca77309c5fdcf185", role: "presentation", class: {
      [u]: !0,
      unbounded: this.unbounded
    } });
  }
  get el() {
    return this;
  }
  static get style() {
    return lM;
  }
}, [1, "ion-ripple-effect", {
  type: [1],
  addRipple: [64]
}]), sM = (c) => {
  c.classList.add("fade-out"), setTimeout(() => {
    c.remove();
  }, 200);
}, cM = 10, fM = 0.5;
function dM() {
  if (typeof customElements > "u")
    return;
  ["ion-ripple-effect"].forEach((u) => {
    switch (u) {
      case "ion-ripple-effect":
        customElements.get(u) || customElements.define(u, uM);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Cy = typeof window < "u" ? window : void 0;
Cy && (Cy.CSS && Cy.CSS.supports && Cy.CSS.supports("--a: 0"));
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const pM = () => {
  if (Ti !== void 0)
    return Ti.Capacitor;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const vM = () => {
  let c;
  return {
    lock: async () => {
      const d = c;
      let y;
      return c = new Promise((S) => y = S), d !== void 0 && await d, y;
    }
  };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var CS;
(function(c) {
  c.Unimplemented = "UNIMPLEMENTED", c.Unavailable = "UNAVAILABLE";
})(CS || (CS = {}));
var wS;
(function(c) {
  c.Body = "body", c.Ionic = "ionic", c.Native = "native", c.None = "none";
})(wS || (wS = {}));
const hM = {
  getEngine() {
    const c = pM();
    if (c != null && c.isPluginAvailable("Keyboard"))
      return c.Plugins.Keyboard;
  },
  getResizeMode() {
    const c = this.getEngine();
    return c != null && c.getResizeMode ? c.getResizeMode().catch((u) => {
      if (u.code !== CS.Unimplemented)
        throw u;
    }) : Promise.resolve(void 0);
  }
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const TT = (c) => {
  if (nS === void 0 || c === wS.None || c === void 0)
    return null;
  const u = nS.querySelector("ion-app");
  return u ?? nS.body;
}, H1 = (c) => {
  const u = TT(c);
  return u === null ? 0 : u.clientHeight;
}, mM = async (c) => {
  let u, d, y, S;
  const T = async () => {
    const P = await hM.getResizeMode(), A = P === void 0 ? void 0 : P.mode;
    u = () => {
      S === void 0 && (S = H1(A)), y = !0, g(y, A);
    }, d = () => {
      y = !1, g(y, A);
    }, Ti == null || Ti.addEventListener("keyboardWillShow", u), Ti == null || Ti.addEventListener("keyboardWillHide", d);
  }, g = (P, A) => {
    c && c(P, _(A));
  }, _ = (P) => {
    if (
      /**
       * If we are in an SSR environment then there is
       * no window to resize. Additionally, if there
       * is no resize mode or the resize mode is "None"
       * then initialResizeContainerHeight will be 0
       */
      S === 0 || /**
       * If the keyboard is closed before the webview resizes initially
       * then the webview will never resize.
       */
      S === H1(P)
    )
      return;
    const A = TT(P);
    if (A !== null)
      return new Promise((K) => {
        const B = () => {
          A.clientHeight === S && (se.disconnect(), K());
        }, se = new ResizeObserver(B);
        se.observe(A);
      });
  }, x = () => {
    Ti == null || Ti.removeEventListener("keyboardWillShow", u), Ti == null || Ti.removeEventListener("keyboardWillHide", d), u = d = void 0;
  }, L = () => y;
  return await T(), { init: T, destroy: x, isKeyboardVisible: L };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const RT = 1, xT = 2, Oy = 3;
class TS {
  constructor(u, d) {
    this.component = u, this.params = d, this.state = RT;
  }
  async init(u) {
    if (this.state = xT, !this.element) {
      const d = this.component;
      this.element = await ET(this.delegate, u, d, ["ion-page", "ion-page-invisible"], this.params);
    }
  }
  /**
   * DOM WRITE
   */
  _destroy() {
    ca(this.state !== Oy, "view state must be ATTACHED");
    const u = this.element;
    u && (this.delegate ? this.delegate.removeViewFromDom(u.parentElement, u) : u.remove()), this.nav = void 0, this.state = Oy;
  }
}
const j1 = (c, u, d) => !c || c.component !== u ? !1 : pT(c.params, d), F1 = (c, u) => c ? c instanceof TS ? c : new TS(c, u) : null, yM = (c) => c.map((u) => u instanceof TS ? u : "component" in u ? F1(u.component, u.componentProps === null ? void 0 : u.componentProps) : F1(u, void 0)).filter((u) => u !== null), gM = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}", bM = gM, SM = /* @__PURE__ */ pd(class extends dd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = Il(this, "ionNavWillLoad", 7), this.ionNavWillChange = Il(this, "ionNavWillChange", 3), this.ionNavDidChange = Il(this, "ionNavDidChange", 3), this.transInstr = [], this.gestureOrAnimationInProgress = !1, this.useRouter = !1, this.isTransitioning = !1, this.destroyed = !1, this.views = [], this.didLoad = !1, this.delegate = void 0, this.swipeGesture = void 0, this.animated = !0, this.animation = void 0, this.rootParams = void 0, this.root = void 0;
  }
  swipeGestureChanged() {
    this.gesture && this.gesture.enable(this.swipeGesture === !0);
  }
  rootChanged() {
    this.root !== void 0 && this.didLoad !== !1 && (this.useRouter || this.root !== void 0 && this.setRoot(this.root, this.rootParams));
  }
  componentWillLoad() {
    if (this.useRouter = document.querySelector("ion-router") !== null && this.el.closest("[no-router]") === null, this.swipeGesture === void 0) {
      const u = cd(this);
      this.swipeGesture = Bl.getBoolean("swipeBackEnabled", u === "ios");
    }
    this.ionNavWillLoad.emit();
  }
  async componentDidLoad() {
    this.didLoad = !0, this.rootChanged(), this.gesture = (await import("./swipe-back-DVVf57GX.js")).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this)), this.swipeGestureChanged();
  }
  connectedCallback() {
    this.destroyed = !1;
  }
  disconnectedCallback() {
    for (const u of this.views)
      Vl(u.element, aS), u._destroy();
    this.gesture && (this.gesture.destroy(), this.gesture = void 0), this.transInstr.length = 0, this.views.length = 0, this.destroyed = !0;
  }
  /**
   * Push a new component onto the current navigation stack. Pass any additional
   * information along as an object. This additional information is accessible
   * through NavParams.
   *
   * @param component The component to push onto the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  push(u, d, y, S) {
    return this.insert(-1, u, d, y, S);
  }
  /**
   * Inserts a component into the navigation stack at the specified index.
   * This is useful to add a component at any point in the navigation stack.
   *
   * @param insertIndex The index to insert the component at in the stack.
   * @param component The component to insert into the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  insert(u, d, y, S, T) {
    return this.insertPages(u, [{ component: d, componentProps: y }], S, T);
  }
  /**
   * Inserts an array of components into the navigation stack at the specified index.
   * The last component in the array will become instantiated as a view, and animate
   * in to become the active view.
   *
   * @param insertIndex The index to insert the components at in the stack.
   * @param insertComponents The components to insert into the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  insertPages(u, d, y, S) {
    return this.queueTrns({
      insertStart: u,
      insertViews: d,
      opts: y
    }, S);
  }
  /**
   * Pop a component off of the navigation stack. Navigates back from the current
   * component.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  pop(u, d) {
    return this.removeIndex(-1, 1, u, d);
  }
  /**
   * Pop to a specific index in the navigation stack.
   *
   * @param indexOrViewCtrl The index or view controller to pop to.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popTo(u, d, y) {
    const S = {
      removeStart: -1,
      removeCount: -1,
      opts: d
    };
    return typeof u == "object" && u.component ? (S.removeView = u, S.removeStart = 1) : typeof u == "number" && (S.removeStart = u + 1), this.queueTrns(S, y);
  }
  /**
   * Navigate back to the root of the stack, no matter how far back that is.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popToRoot(u, d) {
    return this.removeIndex(1, -1, u, d);
  }
  /**
   * Removes a component from the navigation stack at the specified index.
   *
   * @param startIndex The number to begin removal at.
   * @param removeCount The number of components to remove.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  removeIndex(u, d = 1, y, S) {
    return this.queueTrns({
      removeStart: u,
      removeCount: d,
      opts: y
    }, S);
  }
  /**
   * Set the root for the current navigation stack to a component.
   *
   * @param component The component to set as the root of the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setRoot(u, d, y, S) {
    return this.setPages([{ component: u, componentProps: d }], y, S);
  }
  /**
   * Set the views of the current navigation stack and navigate to the last view.
   * By default animations are disabled, but they can be enabled by passing options
   * to the navigation controller. Navigation parameters can also be passed to the
   * individual pages in the array.
   *
   * @param views The list of views to set as the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setPages(u, d, y) {
    return d ?? (d = {}), d.animated !== !0 && (d.animated = !1), this.queueTrns({
      insertStart: 0,
      insertViews: u,
      removeStart: 0,
      removeCount: -1,
      opts: d
    }, y);
  }
  /**
   * Called by the router to update the view.
   *
   * @param id The component tag.
   * @param params The component params.
   * @param direction A direction hint.
   * @param animation an AnimationBuilder.
   *
   * @return the status.
   * @internal
   */
  setRouteId(u, d, y, S) {
    const T = this.getActiveSync();
    if (j1(T, u, d))
      return Promise.resolve({
        changed: !1,
        element: T.element
      });
    let g;
    const _ = new Promise((P) => g = P);
    let x;
    const L = {
      updateURL: !1,
      viewIsReady: (P) => {
        let A;
        const K = new Promise((B) => A = B);
        return g({
          changed: !0,
          element: P,
          markVisible: async () => {
            A(), await x;
          }
        }), K;
      }
    };
    if (y === "root")
      x = this.setRoot(u, d, L);
    else {
      const P = this.views.find((A) => j1(A, u, d));
      P ? x = this.popTo(P, Object.assign(Object.assign({}, L), { direction: "back", animationBuilder: S })) : y === "forward" ? x = this.push(u, d, Object.assign(Object.assign({}, L), { animationBuilder: S })) : y === "back" && (x = this.setRoot(u, d, Object.assign(Object.assign({}, L), { direction: "back", animated: !0, animationBuilder: S })));
    }
    return _;
  }
  /**
   * Called by <ion-router> to retrieve the current component.
   *
   * @internal
   */
  async getRouteId() {
    const u = this.getActiveSync();
    if (u)
      return {
        id: u.element.tagName,
        params: u.params,
        element: u.element
      };
  }
  /**
   * Get the active view.
   */
  async getActive() {
    return this.getActiveSync();
  }
  /**
   * Get the view at the specified index.
   *
   * @param index The index of the view.
   */
  async getByIndex(u) {
    return this.views[u];
  }
  /**
   * Returns `true` if the current view can go back.
   *
   * @param view The view to check.
   */
  async canGoBack(u) {
    return this.canGoBackSync(u);
  }
  /**
   * Get the previous view.
   *
   * @param view The view to get.
   */
  async getPrevious(u) {
    return this.getPreviousSync(u);
  }
  /**
   * Returns the number of views in the stack.
   */
  async getLength() {
    return Promise.resolve(this.views.length);
  }
  getActiveSync() {
    return this.views[this.views.length - 1];
  }
  canGoBackSync(u = this.getActiveSync()) {
    return !!(u && this.getPreviousSync(u));
  }
  getPreviousSync(u = this.getActiveSync()) {
    if (!u)
      return;
    const d = this.views, y = d.indexOf(u);
    return y > 0 ? d[y - 1] : void 0;
  }
  /**
   * Adds a navigation stack change to the queue and schedules it to run.
   *
   * @returns Whether the transition succeeds.
   */
  async queueTrns(u, d) {
    var y, S;
    if (this.isTransitioning && (!((y = u.opts) === null || y === void 0) && y.skipIfBusy))
      return !1;
    const T = new Promise((g, _) => {
      u.resolve = g, u.reject = _;
    });
    if (u.done = d, u.opts && u.opts.updateURL !== !1 && this.useRouter) {
      const g = document.querySelector("ion-router");
      if (g) {
        const _ = await g.canTransition();
        if (_ === !1)
          return !1;
        if (typeof _ == "string")
          return g.push(_, u.opts.direction || "back"), !1;
      }
    }
    return ((S = u.insertViews) === null || S === void 0 ? void 0 : S.length) === 0 && (u.insertViews = void 0), this.transInstr.push(u), this.nextTrns(), T;
  }
  success(u, d) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", d);
      return;
    }
    if (d.done && d.done(u.hasCompleted, u.requiresTransition, u.enteringView, u.leavingView, u.direction), d.resolve(u.hasCompleted), d.opts.updateURL !== !1 && this.useRouter) {
      const y = document.querySelector("ion-router");
      if (y) {
        const S = u.direction === "back" ? "back" : "forward";
        y.navChanged(S);
      }
    }
  }
  failed(u, d) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", d);
      return;
    }
    this.transInstr.length = 0, this.fireError(u, d);
  }
  fireError(u, d) {
    d.done && d.done(!1, !1, u), d.reject && !this.destroyed ? d.reject(u) : d.resolve(!1);
  }
  /**
   * Consumes the next transition in the queue.
   *
   * @returns whether the transition is executed.
   */
  nextTrns() {
    if (this.isTransitioning)
      return !1;
    const u = this.transInstr.shift();
    return u ? (this.runTransition(u), !0) : !1;
  }
  /** Executes all the transition instruction from the queue. */
  async runTransition(u) {
    try {
      this.ionNavWillChange.emit(), this.isTransitioning = !0, this.prepareTI(u);
      const d = this.getActiveSync(), y = this.getEnteringView(u, d);
      if (!d && !y)
        throw new Error("no views in the stack to be removed");
      y && y.state === RT && await y.init(this.el), this.postViewInit(y, d, u);
      const S = (u.enteringRequiresTransition || u.leavingRequiresTransition) && y !== d;
      S && u.opts && d && (u.opts.direction === "back" && (u.opts.animationBuilder = u.opts.animationBuilder || (y == null ? void 0 : y.animationBuilder)), d.animationBuilder = u.opts.animationBuilder);
      let T;
      S ? T = await this.transition(y, d, u) : T = {
        hasCompleted: !0,
        requiresTransition: !1
      }, this.success(T, u), this.ionNavDidChange.emit();
    } catch (d) {
      this.failed(d, u);
    }
    this.isTransitioning = !1, this.nextTrns();
  }
  prepareTI(u) {
    var d, y, S;
    const T = this.views.length;
    if ((d = u.opts) !== null && d !== void 0 || (u.opts = {}), (y = (S = u.opts).delegate) !== null && y !== void 0 || (S.delegate = this.delegate), u.removeView !== void 0) {
      ca(u.removeStart !== void 0, "removeView needs removeStart"), ca(u.removeCount !== void 0, "removeView needs removeCount");
      const x = this.views.indexOf(u.removeView);
      if (x < 0)
        throw new Error("removeView was not found");
      u.removeStart += x;
    }
    u.removeStart !== void 0 && (u.removeStart < 0 && (u.removeStart = T - 1), u.removeCount < 0 && (u.removeCount = T - u.removeStart), u.leavingRequiresTransition = u.removeCount > 0 && u.removeStart + u.removeCount === T), u.insertViews && ((u.insertStart < 0 || u.insertStart > T) && (u.insertStart = T), u.enteringRequiresTransition = u.insertStart === T);
    const g = u.insertViews;
    if (!g)
      return;
    ca(g.length > 0, "length can not be zero");
    const _ = yM(g);
    if (_.length === 0)
      throw new Error("invalid views to insert");
    for (const x of _) {
      x.delegate = u.opts.delegate;
      const L = x.nav;
      if (L && L !== this)
        throw new Error("inserted view was already inserted");
      if (x.state === Oy)
        throw new Error("inserted view was already destroyed");
    }
    u.insertViews = _;
  }
  /**
   * Returns the view that will be entered considering the transition instructions.
   *
   * @param ti The instructions.
   * @param leavingView The view being left or undefined if none.
   *
   * @returns The view that will be entered, undefined if none.
   */
  getEnteringView(u, d) {
    const y = u.insertViews;
    if (y !== void 0)
      return y[y.length - 1];
    const S = u.removeStart;
    if (S !== void 0) {
      const T = this.views, g = S + u.removeCount;
      for (let _ = T.length - 1; _ >= 0; _--) {
        const x = T[_];
        if ((_ < S || _ >= g) && x !== d)
          return x;
      }
    }
  }
  /**
   * Adds and Removes the views from the navigation stack.
   *
   * @param enteringView The view being entered.
   * @param leavingView The view being left.
   * @param ti The instructions.
   */
  postViewInit(u, d, y) {
    var S, T, g;
    ca(d || u, "Both leavingView and enteringView are null"), ca(y.resolve, "resolve must be valid"), ca(y.reject, "reject must be valid");
    const _ = y.opts, { insertViews: x, removeStart: L, removeCount: P } = y;
    let A;
    if (L !== void 0 && P !== void 0) {
      ca(L >= 0, "removeStart can not be negative"), ca(P >= 0, "removeCount can not be negative"), A = [];
      for (let B = L; B < L + P; B++) {
        const se = this.views[B];
        se !== void 0 && se !== u && se !== d && A.push(se);
      }
      (S = _.direction) !== null && S !== void 0 || (_.direction = "back");
    }
    const K = this.views.length + ((T = x == null ? void 0 : x.length) !== null && T !== void 0 ? T : 0) - (P ?? 0);
    if (ca(K >= 0, "final balance can not be negative"), K === 0)
      throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el), new Error("navigation stack needs at least one root page");
    if (x) {
      let B = y.insertStart;
      for (const se of x)
        this.insertViewAt(se, B), B++;
      y.enteringRequiresTransition && ((g = _.direction) !== null && g !== void 0 || (_.direction = "forward"));
    }
    if (A && A.length > 0) {
      for (const B of A)
        Vl(B.element, vT), Vl(B.element, hT), Vl(B.element, aS);
      for (const B of A)
        this.destroyView(B);
    }
  }
  async transition(u, d, y) {
    const S = y.opts, T = S.progressAnimation ? (A) => {
      A !== void 0 && !this.gestureOrAnimationInProgress ? (this.gestureOrAnimationInProgress = !0, A.onFinish(() => {
        this.gestureOrAnimationInProgress = !1;
      }, { oneTimeCallback: !0 }), A.progressEnd(0, 0, 0)) : this.sbAni = A;
    } : void 0, g = cd(this), _ = u.element, x = d && d.element, L = Object.assign(Object.assign({
      mode: g,
      showGoBack: this.canGoBackSync(u),
      baseEl: this.el,
      progressCallback: T,
      animated: this.animated && Bl.getBoolean("animated", !0),
      enteringEl: _,
      leavingEl: x
    }, S), { animationBuilder: S.animationBuilder || this.animation || Bl.get("navAnimation") }), { hasCompleted: P } = await yT(L);
    return this.transitionFinish(P, u, d, S);
  }
  transitionFinish(u, d, y, S) {
    const T = u ? d : y;
    return T && this.unmountInactiveViews(T), {
      hasCompleted: u,
      requiresTransition: !0,
      enteringView: d,
      leavingView: y,
      direction: S.direction
    };
  }
  /**
   * Inserts a view at the specified index.
   *
   * When the view already is in the stack it will be moved to the new position.
   *
   * @param view The view to insert.
   * @param index The index where to insert the view.
   */
  insertViewAt(u, d) {
    const y = this.views, S = y.indexOf(u);
    S > -1 ? (ca(u.nav === this, "view is not part of the nav"), y.splice(S, 1), y.splice(d, 0, u)) : (ca(!u.nav, "nav is used"), u.nav = this, y.splice(d, 0, u));
  }
  /**
   * Removes a view from the stack.
   *
   * @param view The view to remove.
   */
  removeView(u) {
    ca(u.state === xT || u.state === Oy, "view state should be loaded or destroyed");
    const d = this.views, y = d.indexOf(u);
    ca(y > -1, "view must be part of the stack"), y >= 0 && d.splice(y, 1);
  }
  destroyView(u) {
    u._destroy(), this.removeView(u);
  }
  /**
   * Unmounts all inactive views after the specified active view.
   *
   * DOM WRITE
   *
   * @param activeView The view that is actively visible in the stack. Used to calculate which views to unmount.
   */
  unmountInactiveViews(u) {
    if (this.destroyed)
      return;
    const d = this.views, y = d.indexOf(u);
    for (let S = d.length - 1; S >= 0; S--) {
      const T = d[S], g = T.element;
      g && (S > y ? (Vl(g, aS), this.destroyView(T)) : S < y && SS(g, !0));
    }
  }
  canStart() {
    return !this.gestureOrAnimationInProgress && !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.canGoBackSync();
  }
  onStart() {
    this.gestureOrAnimationInProgress = !0, this.pop({ direction: "back", progressAnimation: !0 });
  }
  onMove(u) {
    this.sbAni && this.sbAni.progressStep(u);
  }
  onEnd(u, d, y) {
    if (this.sbAni) {
      this.sbAni.onFinish(() => {
        this.gestureOrAnimationInProgress = !1;
      }, { oneTimeCallback: !0 });
      let S = u ? -1e-3 : 1e-3;
      u ? S += Dy([0, 0], [0.32, 0.72], [0, 1], [1, 1], d)[0] : (this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"), S += Dy([0, 0], [1, 0], [0.68, 0.28], [1, 1], d)[0]), this.sbAni.progressEnd(u ? 1 : 0, S, y);
    } else
      this.gestureOrAnimationInProgress = !1;
  }
  render() {
    return Pi("slot", { key: "e9d99a8a0b84f02f9964d8143cd5e647e43334f9" });
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      swipeGesture: ["swipeGestureChanged"],
      root: ["rootChanged"]
    };
  }
  static get style() {
    return bM;
  }
}, [1, "ion-nav", {
  delegate: [16],
  swipeGesture: [1028, "swipe-gesture"],
  animated: [4],
  animation: [16],
  rootParams: [16],
  root: [1],
  push: [64],
  insert: [64],
  insertPages: [64],
  pop: [64],
  popTo: [64],
  popToRoot: [64],
  removeIndex: [64],
  setRoot: [64],
  setPages: [64],
  setRouteId: [64],
  getRouteId: [64],
  getActive: [64],
  getByIndex: [64],
  canGoBack: [64],
  getPrevious: [64],
  getLength: [64]
}, void 0, {
  swipeGesture: ["swipeGestureChanged"],
  root: ["rootChanged"]
}]);
function EM() {
  if (typeof customElements > "u")
    return;
  ["ion-nav"].forEach((u) => {
    switch (u) {
      case "ion-nav":
        customElements.get(u) || customElements.define(u, SM);
        break;
    }
  });
}
const CM = EM;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var V1;
(function(c) {
  c.Dark = "DARK", c.Light = "LIGHT", c.Default = "DEFAULT";
})(V1 || (V1 = {}));
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const wM = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}", TM = wM, RM = /* @__PURE__ */ pd(class extends dd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = Il(this, "ionNavWillLoad", 7), this.ionNavWillChange = Il(this, "ionNavWillChange", 3), this.ionNavDidChange = Il(this, "ionNavDidChange", 3), this.lockController = vM(), this.gestureOrAnimationInProgress = !1, this.mode = cd(this), this.delegate = void 0, this.animated = !0, this.animation = void 0, this.swipeHandler = void 0;
  }
  swipeHandlerChanged() {
    this.gesture && this.gesture.enable(this.swipeHandler !== void 0);
  }
  async connectedCallback() {
    const u = () => {
      this.gestureOrAnimationInProgress = !0, this.swipeHandler && this.swipeHandler.onStart();
    };
    this.gesture = (await import("./swipe-back-DVVf57GX.js")).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => u(), (d) => {
      var y;
      return (y = this.ani) === null || y === void 0 ? void 0 : y.progressStep(d);
    }, (d, y, S) => {
      if (this.ani) {
        this.ani.onFinish(() => {
          this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(d);
        }, { oneTimeCallback: !0 });
        let T = d ? -1e-3 : 1e-3;
        d ? T += Dy([0, 0], [0.32, 0.72], [0, 1], [1, 1], y)[0] : (this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"), T += Dy([0, 0], [1, 0], [0.68, 0.28], [1, 1], y)[0]), this.ani.progressEnd(d ? 1 : 0, T, S);
      } else
        this.gestureOrAnimationInProgress = !1;
    }), this.swipeHandlerChanged();
  }
  componentWillLoad() {
    this.ionNavWillLoad.emit();
  }
  disconnectedCallback() {
    this.gesture && (this.gesture.destroy(), this.gesture = void 0);
  }
  /** @internal */
  async commit(u, d, y) {
    const S = await this.lockController.lock();
    let T = !1;
    try {
      T = await this.transition(u, d, y);
    } catch (g) {
      console.error(g);
    }
    return S(), T;
  }
  /** @internal */
  async setRouteId(u, d, y, S) {
    return {
      changed: await this.setRoot(u, d, {
        duration: y === "root" ? 0 : void 0,
        direction: y === "back" ? "back" : "forward",
        animationBuilder: S
      }),
      element: this.activeEl
    };
  }
  /** @internal */
  async getRouteId() {
    const u = this.activeEl;
    return u ? {
      id: u.tagName,
      element: u,
      params: this.activeParams
    } : void 0;
  }
  async setRoot(u, d, y) {
    if (this.activeComponent === u && pT(d, this.activeParams))
      return !1;
    const S = this.activeEl, T = await ET(this.delegate, this.el, u, ["ion-page", "ion-page-invisible"], d);
    return this.activeComponent = u, this.activeEl = T, this.activeParams = d, await this.commit(T, S, y), await eM(this.delegate, S), !0;
  }
  async transition(u, d, y = {}) {
    if (d === u)
      return !1;
    this.ionNavWillChange.emit();
    const { el: S, mode: T } = this, g = this.animated && Bl.getBoolean("animated", !0), _ = y.animationBuilder || this.animation || Bl.get("navAnimation");
    return await yT(Object.assign(Object.assign({
      mode: T,
      animated: g,
      enteringEl: u,
      leavingEl: d,
      baseEl: S,
      /**
       * We need to wait for all Stencil components
       * to be ready only when using the lazy
       * loaded bundle.
       */
      deepWait: $L(S),
      progressCallback: y.progressAnimation ? (x) => {
        x !== void 0 && !this.gestureOrAnimationInProgress ? (this.gestureOrAnimationInProgress = !0, x.onFinish(() => {
          this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(!1);
        }, { oneTimeCallback: !0 }), x.progressEnd(0, 0, 0)) : this.ani = x;
      } : void 0
    }, y), { animationBuilder: _ })), this.ionNavDidChange.emit(), !0;
  }
  render() {
    return Pi("slot", { key: "8279a453c66a766e6e383ff59842b4ae070c13a9" });
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      swipeHandler: ["swipeHandlerChanged"]
    };
  }
  static get style() {
    return TM;
  }
}, [1, "ion-router-outlet", {
  mode: [1025],
  delegate: [16],
  animated: [4],
  animation: [16],
  swipeHandler: [16],
  commit: [64],
  setRouteId: [64],
  getRouteId: [64]
}, void 0, {
  swipeHandler: ["swipeHandlerChanged"]
}]);
function xM() {
  if (typeof customElements > "u")
    return;
  ["ion-router-outlet"].forEach((u) => {
    switch (u) {
      case "ion-router-outlet":
        customElements.get(u) || customElements.define(u, RM);
        break;
    }
  });
}
const kM = xM;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const _M = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}", DM = _M, OM = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.07)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, var(--ion-text-color-step-350, #595959)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:56px}", LM = OM, MM = /* @__PURE__ */ pd(class extends dd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionTabBarChanged = Il(this, "ionTabBarChanged", 7), this.ionTabBarLoaded = Il(this, "ionTabBarLoaded", 7), this.keyboardCtrl = null, this.keyboardVisible = !1, this.color = void 0, this.selectedTab = void 0, this.translucent = !1;
  }
  selectedTabChanged() {
    this.selectedTab !== void 0 && this.ionTabBarChanged.emit({
      tab: this.selectedTab
    });
  }
  componentWillLoad() {
    this.selectedTabChanged();
  }
  async connectedCallback() {
    this.keyboardCtrl = await mM(async (u, d) => {
      u === !1 && d !== void 0 && await d, this.keyboardVisible = u;
    });
  }
  disconnectedCallback() {
    this.keyboardCtrl && this.keyboardCtrl.destroy();
  }
  componentDidLoad() {
    this.ionTabBarLoaded.emit();
  }
  render() {
    const { color: u, translucent: d, keyboardVisible: y } = this, S = cd(this), T = y && this.el.getAttribute("slot") !== "top";
    return Pi(Rv, { key: "3a8595dd83f89e8319471a7a7f9f64b2565b384c", role: "tablist", "aria-hidden": T ? "true" : null, class: JL(u, {
      [S]: !0,
      "tab-bar-translucent": d,
      "tab-bar-hidden": T
    }) }, Pi("slot", { key: "8b65eceb922f6abfa15f41046261586fb94b981f" }));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      selectedTab: ["selectedTabChanged"]
    };
  }
  static get style() {
    return {
      ios: DM,
      md: LM
    };
  }
}, [33, "ion-tab-bar", {
  color: [513],
  selectedTab: [1, "selected-tab"],
  translucent: [4],
  keyboardVisible: [32]
}, void 0, {
  selectedTab: ["selectedTabChanged"]
}]);
function AM() {
  if (typeof customElements > "u")
    return;
  ["ion-tab-bar"].forEach((u) => {
    switch (u) {
      case "ion-tab-bar":
        customElements.get(u) || customElements.define(u, MM);
        break;
    }
  });
}
const $M = AM;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const NM = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:24px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){font-size:30px}', zM = NM, UM = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}', PM = UM, HM = /* @__PURE__ */ pd(class extends dd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionTabButtonClick = Il(this, "ionTabButtonClick", 7), this.inheritedAttributes = {}, this.onKeyUp = (u) => {
      (u.key === "Enter" || u.key === " ") && this.selectTab(u);
    }, this.onClick = (u) => {
      this.selectTab(u);
    }, this.disabled = !1, this.download = void 0, this.href = void 0, this.rel = void 0, this.layout = void 0, this.selected = !1, this.tab = void 0, this.target = void 0;
  }
  onTabBarChanged(u) {
    const d = u.target, y = this.el.parentElement;
    (u.composedPath().includes(y) || d != null && d.contains(this.el)) && (this.selected = this.tab === u.detail.tab);
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign({}, NL(this.el, ["aria-label"])), this.layout === void 0 && (this.layout = Bl.get("tabButtonLayout", "icon-top"));
  }
  selectTab(u) {
    this.tab !== void 0 && (this.disabled || this.ionTabButtonClick.emit({
      tab: this.tab,
      href: this.href,
      selected: this.selected
    }), u.preventDefault());
  }
  get hasLabel() {
    return !!this.el.querySelector("ion-label");
  }
  get hasIcon() {
    return !!this.el.querySelector("ion-icon");
  }
  render() {
    const { disabled: u, hasIcon: d, hasLabel: y, href: S, rel: T, target: g, layout: _, selected: x, tab: L, inheritedAttributes: P } = this, A = cd(this), K = {
      download: this.download,
      href: S,
      rel: T,
      target: g
    };
    return Pi(Rv, { key: "4b528ce31f67e10ad849e0c99bd034bba675c227", onClick: this.onClick, onKeyup: this.onKeyUp, id: L !== void 0 ? `tab-button-${L}` : null, class: {
      [A]: !0,
      "tab-selected": x,
      "tab-disabled": u,
      "tab-has-label": y,
      "tab-has-icon": d,
      "tab-has-label-only": y && !d,
      "tab-has-icon-only": d && !y,
      [`tab-layout-${_}`]: !0,
      "ion-activatable": !0,
      "ion-selectable": !0,
      "ion-focusable": !0
    } }, Pi("a", Object.assign({ key: "0da8784b1b243ffaaaf04dd7adb55d6881ed0c08" }, K, { class: "button-native", part: "native", role: "tab", "aria-selected": x ? "true" : null, "aria-disabled": u ? "true" : null, tabindex: u ? "-1" : void 0 }, P), Pi("span", { key: "2c628e8f1ebc129f84876c01530468cb97d8bf3a", class: "button-inner" }, Pi("slot", { key: "8052a171d197a7de1a7eb12b091c35f73ae1ee21" })), A === "md" && Pi("ion-ripple-effect", { key: "4186bdb5ed045ec16f495a14fa30ac864c576227", type: "unbounded" })));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: zM,
      md: PM
    };
  }
}, [33, "ion-tab-button", {
  disabled: [4],
  download: [1],
  href: [1],
  rel: [1],
  layout: [1025],
  selected: [1028],
  tab: [1],
  target: [1]
}, [[8, "ionTabBarChanged", "onTabBarChanged"]]]);
function jM() {
  if (typeof customElements > "u")
    return;
  ["ion-tab-button", "ion-ripple-effect"].forEach((u) => {
    switch (u) {
      case "ion-tab-button":
        customElements.get(u) || customElements.define(u, HM);
        break;
      case "ion-ripple-effect":
        customElements.get(u) || dM();
        break;
    }
  });
}
const FM = jM;
let uS;
const VM = () => {
  if (typeof window > "u")
    return /* @__PURE__ */ new Map();
  if (!uS) {
    const c = window;
    c.Ionicons = c.Ionicons || {}, uS = c.Ionicons.map = c.Ionicons.map || /* @__PURE__ */ new Map();
  }
  return uS;
}, IM = (c) => {
  let u = sS(c.src);
  return u || (u = kT(c.name, c.icon, c.mode, c.ios, c.md), u ? BM(u, c) : c.icon && (u = sS(c.icon), u || (u = sS(c.icon[c.mode]), u)) ? u : null);
}, BM = (c, u) => {
  const d = VM().get(c);
  if (d)
    return d;
  try {
    return IO(`svg/${c}.svg`);
  } catch {
    console.warn(`[Ionicons Warning]: Could not load icon with name "${c}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, u);
  }
}, kT = (c, u, d, y, S) => (d = (d && wy(d)) === "ios" ? "ios" : "md", y && d === "ios" ? c = wy(y) : S && d === "md" ? c = wy(S) : (!c && u && !_T(u) && (c = u), Ly(c) && (c = wy(c))), !Ly(c) || c.trim() === "" || c.replace(/[a-z]|-|\d/gi, "") !== "" ? null : c), sS = (c) => Ly(c) && (c = c.trim(), _T(c)) ? c : null, _T = (c) => c.length > 0 && /(\/|\.)/.test(c), Ly = (c) => typeof c == "string", wy = (c) => c.toLowerCase(), WM = (c, u = []) => {
  const d = {};
  return u.forEach((y) => {
    c.hasAttribute(y) && (c.getAttribute(y) !== null && (d[y] = c.getAttribute(y)), c.removeAttribute(y));
  }), d;
}, YM = (c) => c && c.dir !== "" ? c.dir.toLowerCase() === "rtl" : (document == null ? void 0 : document.dir.toLowerCase()) === "rtl", GM = (c) => {
  const u = document.createElement("div");
  u.innerHTML = c;
  for (let y = u.childNodes.length - 1; y >= 0; y--)
    u.childNodes[y].nodeName.toLowerCase() !== "svg" && u.removeChild(u.childNodes[y]);
  const d = u.firstElementChild;
  if (d && d.nodeName.toLowerCase() === "svg") {
    const y = d.getAttribute("class") || "";
    if (d.setAttribute("class", (y + " s-ion-icon").trim()), DT(d))
      return u.innerHTML;
  }
  return "";
}, DT = (c) => {
  if (c.nodeType === 1) {
    if (c.nodeName.toLowerCase() === "script")
      return !1;
    for (let u = 0; u < c.attributes.length; u++) {
      const d = c.attributes[u].name;
      if (Ly(d) && d.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let u = 0; u < c.childNodes.length; u++)
      if (!DT(c.childNodes[u]))
        return !1;
  }
  return !0;
}, QM = (c) => c.startsWith("data:image/svg+xml"), qM = (c) => c.indexOf(";utf8,") !== -1, fc = /* @__PURE__ */ new Map(), I1 = /* @__PURE__ */ new Map();
let cS;
const KM = (c, u) => {
  let d = I1.get(c);
  if (!d)
    if (typeof fetch < "u" && typeof document < "u")
      if (QM(c) && qM(c)) {
        cS || (cS = new DOMParser());
        const S = cS.parseFromString(c, "text/html").querySelector("svg");
        return S && fc.set(c, S.outerHTML), Promise.resolve();
      } else
        d = fetch(c).then((y) => {
          if (y.ok)
            return y.text().then((S) => {
              S && u !== !1 && (S = GM(S)), fc.set(c, S || "");
            });
          fc.set(c, "");
        }), I1.set(c, d);
    else
      return fc.set(c, ""), Promise.resolve();
  return d;
}, XM = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}", ZM = /* @__PURE__ */ pd(class extends dd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.didLoadIcon = !1, this.svgContent = void 0, this.isVisible = !1, this.mode = JM(), this.color = void 0, this.ios = void 0, this.md = void 0, this.flipRtl = void 0, this.name = void 0, this.src = void 0, this.icon = void 0, this.size = void 0, this.lazy = !1, this.sanitize = !0;
  }
  componentWillLoad() {
    this.inheritedAttributes = WM(this.el, ["aria-label"]);
  }
  connectedCallback() {
    this.waitUntilVisible(this.el, "50px", () => {
      this.isVisible = !0, this.loadIcon();
    });
  }
  componentDidLoad() {
    this.didLoadIcon || this.loadIcon();
  }
  disconnectedCallback() {
    this.io && (this.io.disconnect(), this.io = void 0);
  }
  waitUntilVisible(u, d, y) {
    if (this.lazy && typeof window < "u" && window.IntersectionObserver) {
      const S = this.io = new window.IntersectionObserver((T) => {
        T[0].isIntersecting && (S.disconnect(), this.io = void 0, y());
      }, { rootMargin: d });
      S.observe(u);
    } else
      y();
  }
  loadIcon() {
    if (this.isVisible) {
      const u = IM(this);
      u && (fc.has(u) ? this.svgContent = fc.get(u) : KM(u, this.sanitize).then(() => this.svgContent = fc.get(u)), this.didLoadIcon = !0);
    }
    this.iconName = kT(this.name, this.icon, this.mode, this.ios, this.md);
  }
  render() {
    const { flipRtl: u, iconName: d, inheritedAttributes: y, el: S } = this, T = this.mode || "md", g = d ? (d.includes("arrow") || d.includes("chevron")) && u !== !1 : !1, _ = u || g;
    return Pi(Rv, Object.assign({ role: "img", class: Object.assign(Object.assign({ [T]: !0 }, eA(this.color)), { [`icon-${this.size}`]: !!this.size, "flip-rtl": _, "icon-rtl": _ && YM(S) }) }, y), this.svgContent ? Pi("div", { class: "icon-inner", innerHTML: this.svgContent }) : Pi("div", { class: "icon-inner" }));
  }
  static get assetsDirs() {
    return ["svg"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      name: ["loadIcon"],
      src: ["loadIcon"],
      icon: ["loadIcon"],
      ios: ["loadIcon"],
      md: ["loadIcon"]
    };
  }
  static get style() {
    return XM;
  }
}, [1, "ion-icon", {
  mode: [1025],
  color: [1],
  ios: [1],
  md: [1],
  flipRtl: [4, "flip-rtl"],
  name: [513],
  src: [1],
  icon: [8],
  size: [1],
  lazy: [4],
  sanitize: [4],
  svgContent: [32],
  isVisible: [32]
}]), JM = () => typeof document < "u" && document.documentElement.getAttribute("mode") || "md", eA = (c) => c ? {
  "ion-color": !0,
  [`ion-color-${c}`]: !0
} : null;
function tA() {
  if (typeof customElements > "u")
    return;
  ["ion-icon"].forEach((u) => {
    switch (u) {
      case "ion-icon":
        customElements.get(u) || customElements.define(u, ZM);
        break;
    }
  });
}
const nA = tA, LS = /* @__PURE__ */ Je.createContext({
  onIonViewWillEnter: () => {
  },
  ionViewWillEnter: () => {
  },
  onIonViewDidEnter: () => {
  },
  ionViewDidEnter: () => {
  },
  onIonViewWillLeave: () => {
  },
  ionViewWillLeave: () => {
  },
  onIonViewDidLeave: () => {
  },
  ionViewDidLeave: () => {
  },
  cleanupIonViewWillEnter: () => {
  },
  cleanupIonViewDidEnter: () => {
  },
  cleanupIonViewWillLeave: () => {
  },
  cleanupIonViewDidLeave: () => {
  }
}), rA = class {
  constructor() {
    this.ionViewWillEnterCallbacks = [], this.ionViewDidEnterCallbacks = [], this.ionViewWillLeaveCallbacks = [], this.ionViewDidLeaveCallbacks = [], this.ionViewWillEnterDestructorCallbacks = [], this.ionViewDidEnterDestructorCallbacks = [], this.ionViewWillLeaveDestructorCallbacks = [], this.ionViewDidLeaveDestructorCallbacks = [];
  }
  onIonViewWillEnter(c) {
    if (c.id) {
      const u = this.ionViewWillEnterCallbacks.findIndex((d) => d.id === c.id);
      u > -1 ? this.ionViewWillEnterCallbacks[u] = c : this.ionViewWillEnterCallbacks.push(c);
    } else
      this.ionViewWillEnterCallbacks.push(c);
  }
  teardownCallback(c, u) {
    const d = u.filter((y) => y.id === c.id);
    d.length !== 0 && (d.forEach((y) => {
      y && typeof y.destructor == "function" && y.destructor();
    }), u = u.filter((y) => y.id !== c.id));
  }
  /**
   * Tears down the user-provided ionViewWillEnter lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewWillEnter(c) {
    this.teardownCallback(c, this.ionViewWillEnterDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewDidEnter lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewDidEnter(c) {
    this.teardownCallback(c, this.ionViewDidEnterDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewWillLeave lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewWillLeave(c) {
    this.teardownCallback(c, this.ionViewWillLeaveDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewDidLeave lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewDidLeave(c) {
    this.teardownCallback(c, this.ionViewDidLeaveDestructorCallbacks);
  }
  ionViewWillEnter() {
    this.ionViewWillEnterCallbacks.forEach((c) => {
      const u = c();
      c.id && this.ionViewWillEnterDestructorCallbacks.push({ id: c.id, destructor: u });
    });
  }
  onIonViewDidEnter(c) {
    if (c.id) {
      const u = this.ionViewDidEnterCallbacks.findIndex((d) => d.id === c.id);
      u > -1 ? this.ionViewDidEnterCallbacks[u] = c : this.ionViewDidEnterCallbacks.push(c);
    } else
      this.ionViewDidEnterCallbacks.push(c);
  }
  ionViewDidEnter() {
    this.ionViewDidEnterCallbacks.forEach((c) => {
      const u = c();
      c.id && this.ionViewDidEnterDestructorCallbacks.push({ id: c.id, destructor: u });
    });
  }
  onIonViewWillLeave(c) {
    if (c.id) {
      const u = this.ionViewWillLeaveCallbacks.findIndex((d) => d.id === c.id);
      u > -1 ? this.ionViewWillLeaveCallbacks[u] = c : this.ionViewWillLeaveCallbacks.push(c);
    } else
      this.ionViewWillLeaveCallbacks.push(c);
  }
  ionViewWillLeave() {
    this.ionViewWillLeaveCallbacks.forEach((c) => {
      const u = c();
      c.id && this.ionViewWillLeaveDestructorCallbacks.push({ id: c.id, destructor: u });
    });
  }
  onIonViewDidLeave(c) {
    if (c.id) {
      const u = this.ionViewDidLeaveCallbacks.findIndex((d) => d.id === c.id);
      u > -1 ? this.ionViewDidLeaveCallbacks[u] = c : this.ionViewDidLeaveCallbacks.push(c);
    } else
      this.ionViewDidLeaveCallbacks.push(c);
  }
  ionViewDidLeave() {
    this.ionViewDidLeaveCallbacks.forEach((c) => {
      const u = c();
      c.id && this.ionViewDidLeaveDestructorCallbacks.push({ id: c.id, destructor: u });
    }), this.componentCanBeDestroyed();
  }
  onComponentCanBeDestroyed(c) {
    this.componentCanBeDestroyedCallback = c;
  }
  componentCanBeDestroyed() {
    this.componentCanBeDestroyedCallback && this.componentCanBeDestroyedCallback();
  }
}, is = /* @__PURE__ */ Je.createContext({
  getIonRedirect: () => {
  },
  getIonRoute: () => {
  },
  getPageManager: () => {
  },
  getStackManager: () => {
  },
  goBack: (c) => {
    typeof window < "u" && (typeof c == "string" ? window.location.pathname = c : window.history.back());
  },
  navigate: (c) => {
    typeof window < "u" && (window.location.pathname = c);
  },
  hasIonicRouter: () => !1,
  routeInfo: void 0,
  setCurrentTab: () => {
  },
  changeTab: (c, u) => {
    typeof window < "u" && (window.location.pathname = u);
  },
  resetTab: (c, u) => {
    typeof window < "u" && (window.location.pathname = u);
  }
}), iA = (c) => c.toLowerCase().split("-").map((u) => u.charAt(0).toUpperCase() + u.slice(1)).join(""), OT = (c) => c.replace(/([A-Z])/g, (u) => `-${u[0].toLowerCase()}`), aA = (c, u, d = {}) => {
  if (c instanceof Element) {
    const y = oA(c.classList, u, d);
    y !== "" && (c.className = y), Object.keys(u).forEach((S) => {
      if (!(S === "children" || S === "style" || S === "ref" || S === "class" || S === "className" || S === "forwardedRef"))
        if (S.indexOf("on") === 0 && S[2] === S[2].toUpperCase()) {
          const T = S.substring(2), g = T[0].toLowerCase() + T.substring(1);
          LT(g) || uA(c, g, u[S]);
        } else
          c[S] = u[S], typeof u[S] === "string" && c.setAttribute(OT(S), u[S]);
    });
  }
}, oA = (c, u, d) => {
  const y = u.className || u.class, S = d.className || d.class, T = fS(c), g = fS(y ? y.split(" ") : []), _ = fS(S ? S.split(" ") : []), x = [];
  return T.forEach((L) => {
    g.has(L) ? (x.push(L), g.delete(L)) : _.has(L) || x.push(L);
  }), g.forEach((L) => x.push(L)), x.join(" ");
}, lA = (c) => {
  switch (c) {
    case "doubleclick":
      return "dblclick";
  }
  return c;
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const LT = (c) => {
  if (typeof document > "u")
    return !0;
  {
    const u = "on" + lA(c);
    let d = u in document;
    if (!d) {
      const y = document.createElement("div");
      y.setAttribute(u, "return;"), d = typeof y[u] == "function";
    }
    return d;
  }
}, uA = (c, u, d) => {
  const y = c.__events || (c.__events = {}), S = y[u];
  S && c.removeEventListener(u, S), c.addEventListener(u, y[u] = function(g) {
    d && d.call(this, g);
  });
}, fS = (c) => {
  const u = /* @__PURE__ */ new Map();
  return c.forEach((d) => u.set(d, d)), u;
}, sA = (c, u) => {
  typeof c == "function" ? c(u) : c != null && (c.current = u);
}, MT = (...c) => (u) => {
  c.forEach((d) => {
    sA(d, u);
  });
}, cA = (c, u) => {
  const d = (y, S) => Je.createElement(c, Object.assign({}, y, { forwardedRef: S }));
  return d.displayName = u, Je.forwardRef(d);
}, xv = (c, u, d, y) => {
  y !== void 0 && y();
  const S = iA(c), T = class extends Je.Component {
    constructor(g) {
      super(g), this.setComponentElRef = (_) => {
        this.componentEl = _;
      };
    }
    componentDidMount() {
      this.componentDidUpdate(this.props);
    }
    componentDidUpdate(g) {
      aA(this.componentEl, this.props, g);
    }
    render() {
      const g = this.props, { children: _, forwardedRef: x, style: L, className: P, ref: A } = g, K = Wl(g, ["children", "forwardedRef", "style", "className", "ref"]);
      let B = Object.keys(K).reduce((We, Ce) => {
        const ht = K[Ce];
        if (Ce.indexOf("on") === 0 && Ce[2] === Ce[2].toUpperCase()) {
          const ye = Ce.substring(2).toLowerCase();
          typeof document < "u" && LT(ye) && (We[Ce] = ht);
        } else {
          const ye = typeof ht;
          (ye === "string" || ye === "boolean" || ye === "number") && (We[OT(Ce)] = ht);
        }
        return We;
      }, {});
      const se = Object.assign(Object.assign({}, B), { ref: MT(x, this.setComponentElRef), style: L });
      return ud.createElement(c, se, _);
    }
    static get displayName() {
      return S;
    }
  };
  return cA(T, S);
}, kv = (c, u) => {
  const d = (y, S) => Je.createElement(c, Object.assign({}, y, { forwardedRef: S }));
  return d.displayName = u, Je.forwardRef(d);
}, fA = () => {
  if (typeof window < "u") {
    const c = window.Ionic;
    if (c && c.config)
      return c.config;
  }
  return null;
};
Je.createContext({
  addOverlay: () => {
  },
  removeOverlay: () => {
  }
});
const dA = /* @__PURE__ */ xv("ion-tab-button", void 0, void 0, FM), pA = /* @__PURE__ */ xv("ion-tab-bar", void 0, void 0, $M), RS = /* @__PURE__ */ xv("ion-router-outlet", void 0, void 0, kM), vA = /* @__PURE__ */ xv("ion-icon", void 0, void 0, nA), AT = Je.createContext({
  registerIonPage: () => {
  },
  isInOutlet: () => !1
});
class $T extends Je.PureComponent {
  constructor(u) {
    super(u), this.ionPageElementRef = Je.createRef(), this.stableMergedRefs = MT(this.ionPageElementRef, this.props.forwardedRef), this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this), this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this), this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this), this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
  }
  componentDidMount() {
    this.ionPageElementRef.current && (this.context.isInOutlet() && this.ionPageElementRef.current.classList.add("ion-page-invisible"), this.context.registerIonPage(this.ionPageElementRef.current, this.props.routeInfo), this.ionPageElementRef.current.addEventListener("ionViewWillEnter", this.ionViewWillEnterHandler), this.ionPageElementRef.current.addEventListener("ionViewDidEnter", this.ionViewDidEnterHandler), this.ionPageElementRef.current.addEventListener("ionViewWillLeave", this.ionViewWillLeaveHandler), this.ionPageElementRef.current.addEventListener("ionViewDidLeave", this.ionViewDidLeaveHandler));
  }
  componentWillUnmount() {
    this.ionPageElementRef.current && (this.ionPageElementRef.current.removeEventListener("ionViewWillEnter", this.ionViewWillEnterHandler), this.ionPageElementRef.current.removeEventListener("ionViewDidEnter", this.ionViewDidEnterHandler), this.ionPageElementRef.current.removeEventListener("ionViewWillLeave", this.ionViewWillLeaveHandler));
  }
  ionViewWillEnterHandler() {
    this.ionLifeCycleContext.ionViewWillEnter();
  }
  ionViewDidEnterHandler() {
    this.ionLifeCycleContext.ionViewDidEnter();
  }
  ionViewWillLeaveHandler() {
    this.ionLifeCycleContext.ionViewWillLeave();
  }
  ionViewDidLeaveHandler() {
    this.ionLifeCycleContext.ionViewDidLeave();
  }
  render() {
    const u = this.props, { className: d, children: y, routeInfo: S, forwardedRef: T } = u, g = Wl(u, ["className", "children", "routeInfo", "forwardedRef"]);
    return Je.createElement(LS.Consumer, null, (_) => (this.ionLifeCycleContext = _, Je.createElement("div", Object.assign({ className: d ? `${d} ion-page` : "ion-page", ref: this.stableMergedRefs }, g), y)));
  }
  static get contextType() {
    return AT;
  }
}
class hA extends Je.Component {
  constructor(u) {
    super(u);
  }
  render() {
    const u = this.props, { className: d, children: y, forwardedRef: S } = u, T = Wl(u, ["className", "children", "forwardedRef"]);
    return this.context.hasIonicRouter() ? Je.createElement($T, Object.assign({ className: d ? `${d}` : "", routeInfo: this.context.routeInfo, forwardedRef: S }, T), y) : Je.createElement("div", Object.assign({ className: d ? `ion-page ${d}` : "ion-page", ref: S }, T), y);
  }
  static get displayName() {
    return "IonPage";
  }
  static get contextType() {
    return is;
  }
}
kv(hA, "IonPage");
const B1 = { main: 0 }, mA = (c = "main") => {
  var u;
  const d = ((u = B1[c]) !== null && u !== void 0 ? u : 0) + 1;
  return B1[c] = d, d.toString();
}, yA = (c, u) => {
  const d = /* @__PURE__ */ new WeakMap(), y = `react-delegate-${mA()}`;
  let S = 0;
  return {
    attachViewToDom: async (_, x, L, P) => {
      const A = document.createElement("div");
      P && A.classList.add(...P), _.appendChild(A);
      const K = x(L), B = `${y}-${S++}`, se = aM.createPortal(K, A, B);
      return d.set(A, se), c(se), Promise.resolve(A);
    },
    removeViewFromDom: (_, x) => {
      const L = d.get(x);
      return L && u(L), x.remove(), Promise.resolve();
    }
  };
}, gA = xv("ion-nav", void 0, void 0, CM), bA = (c) => {
  var { children: u, forwardedRef: d } = c, y = Wl(c, ["children", "forwardedRef"]);
  const [S, T] = ud.useState([]), g = (L) => T((P) => [...P, L]), _ = (L) => T((P) => P.filter((A) => A !== L)), x = ud.useMemo(() => yA(g, _), []);
  return Je.createElement(gA, Object.assign({ delegate: x, ref: d }, y), S);
};
kv(bA, "IonNav");
const SA = Je.createContext({
  activeTab: void 0,
  selectTab: () => !1,
  hasRouterOutlet: !1,
  tabBarProps: { ref: Je.createRef() }
}), EA = typeof HTMLElement < "u" ? HTMLElement : class {
};
class CA extends Je.Component {
  constructor(u) {
    super(u), this.outletIsReady = !1, this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this), this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this), this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this), this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
  }
  componentDidMount() {
    this.ionRouterOutlet && (this.outletIsReady || fT(this.ionRouterOutlet, () => {
      this.outletIsReady = !0, this.context.registerIonPage(this.ionRouterOutlet, this.props.routeInfo);
    }), this.ionRouterOutlet.addEventListener("ionViewWillEnter", this.ionViewWillEnterHandler), this.ionRouterOutlet.addEventListener("ionViewDidEnter", this.ionViewDidEnterHandler), this.ionRouterOutlet.addEventListener("ionViewWillLeave", this.ionViewWillLeaveHandler), this.ionRouterOutlet.addEventListener("ionViewDidLeave", this.ionViewDidLeaveHandler));
  }
  componentWillUnmount() {
    this.ionRouterOutlet && (this.ionRouterOutlet.removeEventListener("ionViewWillEnter", this.ionViewWillEnterHandler), this.ionRouterOutlet.removeEventListener("ionViewDidEnter", this.ionViewDidEnterHandler), this.ionRouterOutlet.removeEventListener("ionViewWillLeave", this.ionViewWillLeaveHandler), this.ionRouterOutlet.removeEventListener("ionViewDidLeave", this.ionViewDidLeaveHandler));
  }
  ionViewWillEnterHandler() {
    this.ionLifeCycleContext.ionViewWillEnter();
  }
  ionViewDidEnterHandler() {
    this.ionLifeCycleContext.ionViewDidEnter();
  }
  ionViewWillLeaveHandler() {
    this.ionLifeCycleContext.ionViewWillLeave();
  }
  ionViewDidLeaveHandler() {
    this.ionLifeCycleContext.ionViewDidLeave();
  }
  render() {
    const u = this.props, { StackManager: d, children: y, routeInfo: S } = u, T = Wl(u, ["StackManager", "children", "routeInfo"]);
    return Je.createElement(LS.Consumer, null, (g) => (this.ionLifeCycleContext = g, Je.createElement(
      d,
      { routeInfo: S },
      Je.createElement(RS, Object.assign({ setRef: (_) => this.ionRouterOutlet = _ }, T), y)
    )));
  }
  static get contextType() {
    return AT;
  }
}
class wA extends Je.Component {
  constructor(u) {
    super(u);
  }
  render() {
    const u = this.context.getStackManager(), d = this.props, { children: y, forwardedRef: S } = d, T = Wl(d, ["children", "forwardedRef"]);
    return this.context.hasIonicRouter() ? T.ionPage ? Je.createElement(CA, Object.assign({ StackManager: u, routeInfo: this.context.routeInfo }, T), y) : Je.createElement(
      u,
      { routeInfo: this.context.routeInfo },
      Je.createElement(RS, Object.assign({}, T, { forwardedRef: S }), y)
    ) : Je.createElement(RS, Object.assign({ ref: S }, this.props), this.props.children);
  }
  static get contextType() {
    return is;
  }
}
kv(wA, "IonRouterOutlet");
class TA extends EA {
  constructor() {
    super();
  }
}
typeof window < "u" && window.customElements && (window.customElements.get("ion-tabs") || window.customElements.define("ion-tabs", TA));
const dS = class extends Je.Component {
  constructor(c) {
    super(c), this.handleIonTabButtonClick = this.handleIonTabButtonClick.bind(this);
  }
  handleIonTabButtonClick() {
    this.props.onClick && this.props.onClick(new CustomEvent("ionTabButtonClick", {
      detail: {
        tab: this.props.tab,
        href: this.props.href,
        routeOptions: this.props.routerOptions
      }
    }));
  }
  render() {
    const c = this.props, u = Wl(c, ["onClick"]);
    return Je.createElement(dA, Object.assign({ onIonTabButtonClick: this.handleIonTabButtonClick }, u));
  }
  static get displayName() {
    return "IonTabButton";
  }
};
class RA extends Je.PureComponent {
  constructor(u) {
    super(u), this.setActiveTabOnContext = (y) => {
    };
    const d = {};
    Je.Children.forEach(u.children, (y) => {
      var S, T, g, _;
      y != null && typeof y == "object" && y.props && (y.type === dS || y.type.isTabButton) && (d[y.props.tab] = {
        originalHref: y.props.href,
        currentHref: y.props.href,
        originalRouteOptions: y.props.href === ((S = u.routeInfo) === null || S === void 0 ? void 0 : S.pathname) ? (T = u.routeInfo) === null || T === void 0 ? void 0 : T.routeOptions : void 0,
        currentRouteOptions: y.props.href === ((g = u.routeInfo) === null || g === void 0 ? void 0 : g.pathname) ? (_ = u.routeInfo) === null || _ === void 0 ? void 0 : _.routeOptions : void 0
      });
    }), this.state = {
      tabs: d
    }, this.onTabButtonClick = this.onTabButtonClick.bind(this), this.renderTabButton = this.renderTabButton.bind(this), this.setActiveTabOnContext = this.setActiveTabOnContext.bind(this), this.selectTab = this.selectTab.bind(this);
  }
  componentDidMount() {
    const u = this.state.tabs, y = Object.keys(u).find((S) => {
      const T = u[S].originalHref;
      return this.props.routeInfo.pathname.startsWith(T);
    });
    y && this.setState({
      activeTab: y
    });
  }
  componentDidUpdate() {
    this.state.activeTab && this.setActiveTabOnContext(this.state.activeTab);
  }
  selectTab(u) {
    const d = this.state.tabs[u];
    return d ? (this.onTabButtonClick(new CustomEvent("ionTabButtonClick", {
      detail: {
        href: d.currentHref,
        tab: u,
        selected: u === this.state.activeTab,
        routeOptions: void 0
      }
    })), !0) : !1;
  }
  static getDerivedStateFromProps(u, d) {
    var y, S, T;
    const g = Object.assign({}, d.tabs), x = Object.keys(d.tabs).find((P) => {
      const A = d.tabs[P].originalHref;
      return u.routeInfo.pathname.startsWith(A);
    });
    Je.Children.forEach(u.children, (P) => {
      if (P != null && typeof P == "object" && P.props && (P.type === dS || P.type.isTabButton)) {
        const A = g[P.props.tab];
        (!A || A.originalHref !== P.props.href) && (g[P.props.tab] = {
          originalHref: P.props.href,
          currentHref: P.props.href,
          originalRouteOptions: P.props.routeOptions,
          currentRouteOptions: P.props.routeOptions
        });
      }
    });
    const { activeTab: L } = d;
    if (x && L) {
      const P = d.tabs[L].currentHref, A = d.tabs[L].currentRouteOptions;
      (x !== L || P !== ((y = u.routeInfo) === null || y === void 0 ? void 0 : y.pathname) || A !== ((S = u.routeInfo) === null || S === void 0 ? void 0 : S.routeOptions)) && (g[x] = {
        originalHref: g[x].originalHref,
        currentHref: u.routeInfo.pathname + (u.routeInfo.search || ""),
        originalRouteOptions: g[x].originalRouteOptions,
        currentRouteOptions: (T = u.routeInfo) === null || T === void 0 ? void 0 : T.routeOptions
      }, u.routeInfo.routeAction === "pop" && x !== L && (g[L] = {
        originalHref: g[L].originalHref,
        currentHref: g[L].originalHref,
        originalRouteOptions: g[L].originalRouteOptions,
        currentRouteOptions: g[L].currentRouteOptions
      }));
    }
    return x && u.onSetCurrentTab(x, u.routeInfo), {
      activeTab: x,
      tabs: g
    };
  }
  onTabButtonClick(u, d) {
    var y;
    const S = this.state.tabs[u.detail.tab], T = S.originalHref, g = (y = this.props.tabsContext) === null || y === void 0 ? void 0 : y.hasRouterOutlet, _ = g ? u.detail.href : "", { activeTab: x } = this.state;
    d && d(u), x === u.detail.tab ? T !== _ && this.context.resetTab(u.detail.tab, T, S.originalRouteOptions) : (this.props.onIonTabsWillChange && this.props.onIonTabsWillChange(new CustomEvent("ionTabWillChange", { detail: { tab: u.detail.tab } })), this.props.onIonTabsDidChange && this.props.onIonTabsDidChange(new CustomEvent("ionTabDidChange", { detail: { tab: u.detail.tab } })), g && (this.setActiveTabOnContext(u.detail.tab), this.context.changeTab(u.detail.tab, _, u.detail.routeOptions)));
  }
  renderTabButton(u) {
    return (d) => {
      var y, S;
      if (d != null && d.props && (d.type === dS || d.type.isTabButton)) {
        const T = d.props.tab === u ? (y = this.props.routeInfo) === null || y === void 0 ? void 0 : y.pathname : this.state.tabs[d.props.tab].currentHref, g = d.props.tab === u ? (S = this.props.routeInfo) === null || S === void 0 ? void 0 : S.routeOptions : this.state.tabs[d.props.tab].currentRouteOptions;
        return Je.cloneElement(d, {
          href: T,
          routeOptions: g,
          onClick: (_) => this.onTabButtonClick(_, d.props.onClick)
        });
      }
      return null;
    };
  }
  render() {
    const { activeTab: u } = this.state;
    return Je.createElement(pA, Object.assign({}, this.props, { selectedTab: u }), Je.Children.map(this.props.children, this.renderTabButton(u)));
  }
  static get contextType() {
    return is;
  }
}
const xA = Je.memo((c) => {
  var { forwardedRef: u } = c, d = Wl(c, ["forwardedRef"]);
  const y = ud.useContext(is), S = ud.useContext(SA), T = u || S.tabBarProps.ref, g = Object.assign(Object.assign({}, S.tabBarProps), { ref: T });
  return Je.createElement(RA, Object.assign({ ref: T }, d, {
    routeInfo: d.routeInfo || y.routeInfo || { pathname: window.location.pathname },
    onSetCurrentTab: y.setCurrentTab,
    /**
     * Tab bar can be used as a standalone component,
     * so it cannot be modified directly through
     * IonTabs. Instead, props will be passed through
     * the context.
     */
    tabsContext: Object.assign(Object.assign({}, S), { tabBarProps: g })
  }), d.children);
});
kv(xA, "IonTabBar");
class kA extends Je.PureComponent {
  constructor(u) {
    super(u), this.props.name && console.warn('In Ionic React, you import icons from "ionicons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.');
  }
  render() {
    var u, d;
    const y = this.props, { icon: S, ios: T, md: g, mode: _ } = y, x = Wl(y, ["icon", "ios", "md", "mode"]);
    let L;
    const P = fA(), A = _ || (P == null ? void 0 : P.get("mode"));
    return T || g ? A === "ios" ? L = (u = T ?? g) !== null && u !== void 0 ? u : S : L = (d = g ?? T) !== null && d !== void 0 ? d : S : L = S, Je.createElement(vA, Object.assign({ ref: this.props.forwardedRef, icon: L }, x), this.props.children);
  }
  static get contextType() {
    return is;
  }
}
kv(kA, "IonIcon");
class NT extends Je.PureComponent {
  render() {
    const u = this.context.getIonRoute();
    return !this.context.hasIonicRouter() || !NT ? (console.error("You either do not have an Ionic Router package, or your router does not support using <IonRoute>"), null) : Je.createElement(u, Object.assign({}, this.props));
  }
  static get contextType() {
    return is;
  }
}
class zT extends Je.PureComponent {
  render() {
    const u = this.context.getIonRedirect();
    return !this.context.hasIonicRouter() || !zT ? (console.error("You either do not have an Ionic Router package, or your router does not support using <IonRedirect>"), null) : Je.createElement(u, Object.assign({}, this.props));
  }
  static get contextType() {
    return is;
  }
}
const _A = Je.createContext({
  routeInfo: void 0,
  // TODO(FW-2959): type
  push: () => {
    throw new Error("An Ionic Router is required for IonRouterContext");
  },
  back: () => {
    throw new Error("An Ionic Router is required for IonRouterContext");
  },
  canGoBack: () => {
    throw new Error("An Ionic Router is required for IonRouterContext");
  },
  nativeBack: () => {
    throw new Error("An Ionic Router is required for IonRouterContext");
  }
});
class ZA extends Je.PureComponent {
  constructor(u) {
    super(u), this.nodes = /* @__PURE__ */ new Map(), this.animation = OL(u.id);
  }
  setupAnimation(u) {
    const d = this.animation;
    this.nodes.size > 0 && d.addElement(Array.from(this.nodes.values())), W1(d, u), Y1(d, u);
  }
  componentDidMount() {
    const u = this.props;
    this.setupAnimation(u);
  }
  componentDidUpdate(u) {
    const d = this.animation, y = this.props;
    W1(d, y, u), DA(d, y, u), Y1(d, y, u);
  }
  render() {
    const { children: u } = this.props;
    return Je.createElement(Je.Fragment, null, Je.Children.map(u, (d, y) => Je.cloneElement(d, { ref: (S) => this.nodes.set(y, S) })));
  }
}
const W1 = (c, u = {}, d = {}) => {
  const y = [
    "children",
    "progressStart",
    "progressStep",
    "progressEnd",
    "pause",
    "stop",
    "destroy",
    "play",
    "from",
    "to",
    "fromTo",
    "onFinish"
  ];
  for (const x in u)
    // eslint-disable-next-line no-prototype-builtins
    u.hasOwnProperty(x) && !y.includes(x) && u[x] !== d[x] && c[x](u[x]);
  const S = u.from;
  S && S !== d.from && (Array.isArray(S) ? S : [S]).forEach((L) => c.from(L.property, L.value));
  const T = u.to;
  T && T !== d.to && (Array.isArray(T) ? T : [T]).forEach((L) => c.to(L.property, L.value));
  const g = u.fromTo;
  g && g !== d.fromTo && (Array.isArray(g) ? g : [g]).forEach((L) => c.fromTo(L.property, L.fromValue, L.toValue));
  const _ = u.onFinish;
  _ && _ !== d.onFinish && (Array.isArray(_) ? _ : [_]).forEach((L) => c.onFinish(L.callback, L.opts));
}, DA = (c, u = {}, d = {}) => {
  var y, S, T, g, _;
  const { progressStart: x, progressStep: L, progressEnd: P } = u;
  x && (((y = d.progressStart) === null || y === void 0 ? void 0 : y.forceLinearEasing) !== (x == null ? void 0 : x.forceLinearEasing) || ((S = d.progressStart) === null || S === void 0 ? void 0 : S.step) !== (x == null ? void 0 : x.step)) && c.progressStart(x.forceLinearEasing, x.step), L && ((T = d.progressStep) === null || T === void 0 ? void 0 : T.step) !== (L == null ? void 0 : L.step) && c.progressStep(L.step), P && (((g = d.progressEnd) === null || g === void 0 ? void 0 : g.playTo) !== (P == null ? void 0 : P.playTo) || ((_ = d.progressEnd) === null || _ === void 0 ? void 0 : _.step) !== (P == null ? void 0 : P.step) || (d == null ? void 0 : d.dur) !== (P == null ? void 0 : P.dur)) && c.progressEnd(P.playTo, P.step, P.dur);
}, Y1 = (c, u = {}, d = {}) => {
  !d.play && u.play && c.play(), !d.pause && u.pause && c.pause(), !d.stop && u.stop && c.stop(), !d.destroy && u.destroy && c.destroy();
};
class JA extends Je.Component {
  constructor(u) {
    super(u), this.ionLifeCycleContext = new rA(), this._isMounted = !1, this.ionLifeCycleContext.onComponentCanBeDestroyed(() => {
      this.props.mount || this._isMounted && this.setState({
        show: !1
      }, () => this.props.removeView());
    }), this.state = {
      show: !0
    };
  }
  componentDidMount() {
    this._isMounted = !0;
  }
  componentWillUnmount() {
    this._isMounted = !1;
  }
  render() {
    const { show: u } = this.state;
    return Je.createElement(LS.Provider, { value: this.ionLifeCycleContext }, u && this.props.children);
  }
}
class e$ extends Je.PureComponent {
  constructor(u) {
    super(u), this.ionRouterContextValue = {
      push: (d, y, S, T, g) => {
        this.navigate(d, y, S, g, T);
      },
      back: (d) => {
        this.goBack(void 0, d);
      },
      canGoBack: () => this.props.locationHistory.canGoBack(),
      nativeBack: () => this.props.onNativeBack(),
      routeInfo: this.props.routeInfo
    }, this.state = {
      goBack: this.goBack.bind(this),
      hasIonicRouter: () => !0,
      navigate: this.navigate.bind(this),
      getIonRedirect: this.getIonRedirect.bind(this),
      getIonRoute: this.getIonRoute.bind(this),
      getStackManager: this.getStackManager.bind(this),
      getPageManager: this.getPageManager.bind(this),
      routeInfo: this.props.routeInfo,
      setCurrentTab: this.props.onSetCurrentTab,
      changeTab: this.props.onChangeTab,
      resetTab: this.props.onResetTab
    };
  }
  componentDidMount() {
    typeof document < "u" && (this.handleHardwareBackButton = this.handleHardwareBackButton.bind(this), document.addEventListener("ionBackButton", this.handleHardwareBackButton));
  }
  componentWillUnmount() {
    typeof document < "u" && document.removeEventListener("ionBackButton", this.handleHardwareBackButton);
  }
  handleHardwareBackButton(u) {
    u.detail.register(0, (d) => {
      this.nativeGoBack(), d();
    });
  }
  goBack(u, d) {
    this.props.onNavigateBack(u, d);
  }
  nativeGoBack() {
    this.props.onNativeBack();
  }
  navigate(u, d = "forward", y = "push", S, T, g) {
    this.props.onNavigate(u, y, d, S, T, g);
  }
  getPageManager() {
    return $T;
  }
  getIonRedirect() {
    return this.props.ionRedirect;
  }
  getIonRoute() {
    return this.props.ionRoute;
  }
  getStackManager() {
    return this.props.stackManager;
  }
  render() {
    return Je.createElement(
      is.Provider,
      { value: Object.assign(Object.assign({}, this.state), { routeInfo: this.props.routeInfo }) },
      Je.createElement(_A.Provider, { value: Object.assign(Object.assign({}, this.ionRouterContextValue), { routeInfo: this.props.routeInfo }) }, this.props.children)
    );
  }
}
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const OA = (c) => {
  const u = /* @__PURE__ */ new Map();
  u.set("web", { name: "web" });
  const d = c.CapacitorPlatforms || {
    currentPlatform: { name: "web" },
    platforms: u
  }, y = (T, g) => {
    d.platforms.set(T, g);
  }, S = (T) => {
    d.platforms.has(T) && (d.currentPlatform = d.platforms.get(T));
  };
  return d.addPlatform = y, d.setPlatform = S, d;
}, LA = (c) => c.CapacitorPlatforms = OA(c), UT = /* @__PURE__ */ LA(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
UT.addPlatform;
UT.setPlatform;
var fd;
(function(c) {
  c.Unimplemented = "UNIMPLEMENTED", c.Unavailable = "UNAVAILABLE";
})(fd || (fd = {}));
class pS extends Error {
  constructor(u, d, y) {
    super(u), this.message = u, this.code = d, this.data = y;
  }
}
const MA = (c) => {
  var u, d;
  return c != null && c.androidBridge ? "android" : !((d = (u = c == null ? void 0 : c.webkit) === null || u === void 0 ? void 0 : u.messageHandlers) === null || d === void 0) && d.bridge ? "ios" : "web";
}, AA = (c) => {
  var u, d, y, S, T;
  const g = c.CapacitorCustomPlatform || null, _ = c.Capacitor || {}, x = _.Plugins = _.Plugins || {}, L = c.CapacitorPlatforms, P = () => g !== null ? g.name : MA(c), A = ((u = L == null ? void 0 : L.currentPlatform) === null || u === void 0 ? void 0 : u.getPlatform) || P, K = () => A() !== "web", B = ((d = L == null ? void 0 : L.currentPlatform) === null || d === void 0 ? void 0 : d.isNativePlatform) || K, se = (ge) => {
    const nt = ut.get(ge);
    return !!(nt != null && nt.platforms.has(A()) || ht(ge));
  }, We = ((y = L == null ? void 0 : L.currentPlatform) === null || y === void 0 ? void 0 : y.isPluginAvailable) || se, Ce = (ge) => {
    var nt;
    return (nt = _.PluginHeaders) === null || nt === void 0 ? void 0 : nt.find((_e) => _e.name === ge);
  }, ht = ((S = L == null ? void 0 : L.currentPlatform) === null || S === void 0 ? void 0 : S.getPluginHeader) || Ce, ye = (ge) => c.console.error(ge), Ue = (ge, nt, _e) => Promise.reject(`${_e} does not have an implementation of "${nt}".`), ut = /* @__PURE__ */ new Map(), Oe = (ge, nt = {}) => {
    const _e = ut.get(ge);
    if (_e)
      return console.warn(`Capacitor plugin "${ge}" already registered. Cannot register plugins twice.`), _e.proxy;
    const xt = A(), Ct = ht(ge);
    let $t;
    const je = async () => (!$t && xt in nt ? $t = typeof nt[xt] == "function" ? $t = await nt[xt]() : $t = nt[xt] : g !== null && !$t && "web" in nt && ($t = typeof nt.web == "function" ? $t = await nt.web() : $t = nt.web), $t), at = (oe, $) => {
      var q, Ne;
      if (Ct) {
        const Te = Ct == null ? void 0 : Ct.methods.find((Ge) => $ === Ge.name);
        if (Te)
          return Te.rtype === "promise" ? (Ge) => _.nativePromise(ge, $.toString(), Ge) : (Ge, ot) => _.nativeCallback(ge, $.toString(), Ge, ot);
        if (oe)
          return (q = oe[$]) === null || q === void 0 ? void 0 : q.bind(oe);
      } else {
        if (oe)
          return (Ne = oe[$]) === null || Ne === void 0 ? void 0 : Ne.bind(oe);
        throw new pS(`"${ge}" plugin is not implemented on ${xt}`, fd.Unimplemented);
      }
    }, gt = (oe) => {
      let $;
      const q = (...Ne) => {
        const Te = je().then((Ge) => {
          const ot = at(Ge, oe);
          if (ot) {
            const St = ot(...Ne);
            return $ = St == null ? void 0 : St.remove, St;
          } else
            throw new pS(`"${ge}.${oe}()" is not implemented on ${xt}`, fd.Unimplemented);
        });
        return oe === "addListener" && (Te.remove = async () => $()), Te;
      };
      return q.toString = () => `${oe.toString()}() { [capacitor code] }`, Object.defineProperty(q, "name", {
        value: oe,
        writable: !1,
        configurable: !1
      }), q;
    }, rt = gt("addListener"), we = gt("removeListener"), ce = (oe, $) => {
      const q = rt({ eventName: oe }, $), Ne = async () => {
        const Ge = await q;
        we({
          eventName: oe,
          callbackId: Ge
        }, $);
      }, Te = new Promise((Ge) => q.then(() => Ge({ remove: Ne })));
      return Te.remove = async () => {
        console.warn("Using addListener() without 'await' is deprecated."), await Ne();
      }, Te;
    }, Le = new Proxy({}, {
      get(oe, $) {
        switch ($) {
          case "$$typeof":
            return;
          case "toJSON":
            return () => ({});
          case "addListener":
            return Ct ? ce : rt;
          case "removeListener":
            return we;
          default:
            return gt($);
        }
      }
    });
    return x[ge] = Le, ut.set(ge, {
      name: ge,
      proxy: Le,
      platforms: /* @__PURE__ */ new Set([
        ...Object.keys(nt),
        ...Ct ? [xt] : []
      ])
    }), Le;
  }, st = ((T = L == null ? void 0 : L.currentPlatform) === null || T === void 0 ? void 0 : T.registerPlugin) || Oe;
  return _.convertFileSrc || (_.convertFileSrc = (ge) => ge), _.getPlatform = A, _.handleError = ye, _.isNativePlatform = B, _.isPluginAvailable = We, _.pluginMethodNoop = Ue, _.registerPlugin = st, _.Exception = pS, _.DEBUG = !!_.DEBUG, _.isLoggingEnabled = !!_.isLoggingEnabled, _.platform = _.getPlatform(), _.isNative = _.isNativePlatform(), _;
}, $A = (c) => c.Capacitor = AA(c), My = /* @__PURE__ */ $A(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), MS = My.registerPlugin;
My.Plugins;
class PT {
  constructor(u) {
    this.listeners = {}, this.retainedEventArguments = {}, this.windowListeners = {}, u && (console.warn(`Capacitor WebPlugin "${u.name}" config object was deprecated in v3 and will be removed in v4.`), this.config = u);
  }
  addListener(u, d) {
    let y = !1;
    this.listeners[u] || (this.listeners[u] = [], y = !0), this.listeners[u].push(d);
    const T = this.windowListeners[u];
    T && !T.registered && this.addWindowListener(T), y && this.sendRetainedArgumentsForEvent(u);
    const g = async () => this.removeListener(u, d);
    return Promise.resolve({ remove: g });
  }
  async removeAllListeners() {
    this.listeners = {};
    for (const u in this.windowListeners)
      this.removeWindowListener(this.windowListeners[u]);
    this.windowListeners = {};
  }
  notifyListeners(u, d, y) {
    const S = this.listeners[u];
    if (!S) {
      if (y) {
        let T = this.retainedEventArguments[u];
        T || (T = []), T.push(d), this.retainedEventArguments[u] = T;
      }
      return;
    }
    S.forEach((T) => T(d));
  }
  hasListeners(u) {
    return !!this.listeners[u].length;
  }
  registerWindowListener(u, d) {
    this.windowListeners[d] = {
      registered: !1,
      windowEventName: u,
      pluginEventName: d,
      handler: (y) => {
        this.notifyListeners(d, y);
      }
    };
  }
  unimplemented(u = "not implemented") {
    return new My.Exception(u, fd.Unimplemented);
  }
  unavailable(u = "not available") {
    return new My.Exception(u, fd.Unavailable);
  }
  async removeListener(u, d) {
    const y = this.listeners[u];
    if (!y)
      return;
    const S = y.indexOf(d);
    this.listeners[u].splice(S, 1), this.listeners[u].length || this.removeWindowListener(this.windowListeners[u]);
  }
  addWindowListener(u) {
    window.addEventListener(u.windowEventName, u.handler), u.registered = !0;
  }
  removeWindowListener(u) {
    u && (window.removeEventListener(u.windowEventName, u.handler), u.registered = !1);
  }
  sendRetainedArgumentsForEvent(u) {
    const d = this.retainedEventArguments[u];
    d && (delete this.retainedEventArguments[u], d.forEach((y) => {
      this.notifyListeners(u, y);
    }));
  }
}
const G1 = (c) => encodeURIComponent(c).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), Q1 = (c) => c.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class NA extends PT {
  async getCookies() {
    const u = document.cookie, d = {};
    return u.split(";").forEach((y) => {
      if (y.length <= 0)
        return;
      let [S, T] = y.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
      S = Q1(S).trim(), T = Q1(T).trim(), d[S] = T;
    }), d;
  }
  async setCookie(u) {
    try {
      const d = G1(u.key), y = G1(u.value), S = `; expires=${(u.expires || "").replace("expires=", "")}`, T = (u.path || "/").replace("path=", ""), g = u.url != null && u.url.length > 0 ? `domain=${u.url}` : "";
      document.cookie = `${d}=${y || ""}${S}; path=${T}; ${g};`;
    } catch (d) {
      return Promise.reject(d);
    }
  }
  async deleteCookie(u) {
    try {
      document.cookie = `${u.key}=; Max-Age=0`;
    } catch (d) {
      return Promise.reject(d);
    }
  }
  async clearCookies() {
    try {
      const u = document.cookie.split(";") || [];
      for (const d of u)
        document.cookie = d.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
    } catch (u) {
      return Promise.reject(u);
    }
  }
  async clearAllCookies() {
    try {
      await this.clearCookies();
    } catch (u) {
      return Promise.reject(u);
    }
  }
}
MS("CapacitorCookies", {
  web: () => new NA()
});
const zA = async (c) => new Promise((u, d) => {
  const y = new FileReader();
  y.onload = () => {
    const S = y.result;
    u(S.indexOf(",") >= 0 ? S.split(",")[1] : S);
  }, y.onerror = (S) => d(S), y.readAsDataURL(c);
}), UA = (c = {}) => {
  const u = Object.keys(c);
  return Object.keys(c).map((S) => S.toLocaleLowerCase()).reduce((S, T, g) => (S[T] = c[u[g]], S), {});
}, PA = (c, u = !0) => c ? Object.entries(c).reduce((y, S) => {
  const [T, g] = S;
  let _, x;
  return Array.isArray(g) ? (x = "", g.forEach((L) => {
    _ = u ? encodeURIComponent(L) : L, x += `${T}=${_}&`;
  }), x.slice(0, -1)) : (_ = u ? encodeURIComponent(g) : g, x = `${T}=${_}`), `${y}&${x}`;
}, "").substr(1) : null, HA = (c, u = {}) => {
  const d = Object.assign({ method: c.method || "GET", headers: c.headers }, u), S = UA(c.headers)["content-type"] || "";
  if (typeof c.data == "string")
    d.body = c.data;
  else if (S.includes("application/x-www-form-urlencoded")) {
    const T = new URLSearchParams();
    for (const [g, _] of Object.entries(c.data || {}))
      T.set(g, _);
    d.body = T.toString();
  } else if (S.includes("multipart/form-data") || c.data instanceof FormData) {
    const T = new FormData();
    if (c.data instanceof FormData)
      c.data.forEach((_, x) => {
        T.append(x, _);
      });
    else
      for (const _ of Object.keys(c.data))
        T.append(_, c.data[_]);
    d.body = T;
    const g = new Headers(d.headers);
    g.delete("content-type"), d.headers = g;
  } else (S.includes("application/json") || typeof c.data == "object") && (d.body = JSON.stringify(c.data));
  return d;
};
class jA extends PT {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  async request(u) {
    const d = HA(u, u.webFetchExtra), y = PA(u.params, u.shouldEncodeUrlParams), S = y ? `${u.url}?${y}` : u.url, T = await fetch(S, d), g = T.headers.get("content-type") || "";
    let { responseType: _ = "text" } = T.ok ? u : {};
    g.includes("application/json") && (_ = "json");
    let x, L;
    switch (_) {
      case "arraybuffer":
      case "blob":
        L = await T.blob(), x = await zA(L);
        break;
      case "json":
        x = await T.json();
        break;
      case "document":
      case "text":
      default:
        x = await T.text();
    }
    const P = {};
    return T.headers.forEach((A, K) => {
      P[K] = A;
    }), {
      data: x,
      headers: P,
      status: T.status,
      url: T.url
    };
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */
  async get(u) {
    return this.request(Object.assign(Object.assign({}, u), { method: "GET" }));
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */
  async post(u) {
    return this.request(Object.assign(Object.assign({}, u), { method: "POST" }));
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */
  async put(u) {
    return this.request(Object.assign(Object.assign({}, u), { method: "PUT" }));
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */
  async patch(u) {
    return this.request(Object.assign(Object.assign({}, u), { method: "PATCH" }));
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */
  async delete(u) {
    return this.request(Object.assign(Object.assign({}, u), { method: "DELETE" }));
  }
}
MS("CapacitorHttp", {
  web: () => new jA()
});
MS("Share", {
  web: () => import("./web-T44YvMCa.js").then((c) => new c.ShareWeb())
});
export {
  PT as W,
  OL as a,
  BA as c,
  WA as g
};
//# sourceMappingURL=index-BKq655oC.js.map
