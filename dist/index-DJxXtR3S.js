function RO(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var yv = {}, dS = { exports: {} }, Ut = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p1;
function xO() {
  if (p1) return Ut;
  p1 = 1;
  var c = Symbol.for("react.element"), u = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), g = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), L = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), A = Symbol.iterator;
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
  function Fe($, q) {
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
    if (St) return St = $, Ge = Ge(St), $ = Te === "" ? "." + Fe(St, 0) : Te, ut(Ge) ? (Ne = "", $ != null && (Ne = $.replace($t, "$&/") + "/"), at(Ge, q, Ne, "", function(tn) {
      return tn;
    })) : Ge != null && (xt(Ge) && (Ge = _e(Ge, Ne + (!Ge.key || St && St.key === Ge.key ? "" : ("" + Ge.key).replace($t, "$&/") + "/") + $)), q.push(Ge)), 1;
    if (St = 0, Te = Te === "" ? "." : Te + ":", ut($)) for (var wt = 0; wt < $.length; wt++) {
      ot = $[wt];
      var Tt = Te + Fe(ot, wt);
      St += at(ot, q, Ne, Tt, Ge);
    }
    else if (Tt = K($), typeof Tt == "function") for ($ = Tt.call($), wt = 0; !(ot = $.next()).done; ) ot = ot.value, Tt = Te + Fe(ot, wt++), St += at(ot, q, Ne, Tt, Ge);
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
  } }, Ut.Component = Ce, Ut.Fragment = d, Ut.Profiler = E, Ut.PureComponent = ye, Ut.StrictMode = y, Ut.Suspense = x, Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Le, Ut.act = oe, Ut.cloneElement = function($, q, Ne) {
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
var v1;
function kO() {
  return v1 || (v1 = 1, function(c, u) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = "18.3.1", y = Symbol.for("react.element"), E = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), L = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), We = Symbol.for("react.offscreen"), Ce = Symbol.iterator, ht = "@@iterator";
      function ye(S) {
        if (S === null || typeof S != "object")
          return null;
        var D = Ce && S[Ce] || S[ht];
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
      function _e(S) {
        nt = S;
      }
      ge.setExtraStackFrame = function(S) {
        nt = S;
      }, ge.getCurrentStack = null, ge.getStackAddendum = function() {
        var S = "";
        nt && (S += nt);
        var D = ge.getCurrentStack;
        return D && (S += D() || ""), S;
      };
      var xt = !1, Ct = !1, $t = !1, Fe = !1, at = !1, gt = {
        ReactCurrentDispatcher: Ue,
        ReactCurrentBatchConfig: ut,
        ReactCurrentOwner: st
      };
      gt.ReactDebugCurrentFrame = ge, gt.ReactCurrentActQueue = Oe;
      function rt(S) {
        {
          for (var D = arguments.length, Y = new Array(D > 1 ? D - 1 : 0), X = 1; X < D; X++)
            Y[X - 1] = arguments[X];
          ce("warn", S, Y);
        }
      }
      function we(S) {
        {
          for (var D = arguments.length, Y = new Array(D > 1 ? D - 1 : 0), X = 1; X < D; X++)
            Y[X - 1] = arguments[X];
          ce("error", S, Y);
        }
      }
      function ce(S, D, Y) {
        {
          var X = gt.ReactDebugCurrentFrame, fe = X.getStackAddendum();
          fe !== "" && (D += "%s", Y = Y.concat([fe]));
          var Je = Y.map(function(be) {
            return String(be);
          });
          Je.unshift("Warning: " + D), Function.prototype.apply.call(console[S], console, Je);
        }
      }
      var Le = {};
      function oe(S, D) {
        {
          var Y = S.constructor, X = Y && (Y.displayName || Y.name) || "ReactClass", fe = X + "." + D;
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
        isMounted: function(S) {
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
        enqueueForceUpdate: function(S, D, Y) {
          oe(S, "forceUpdate");
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
        enqueueReplaceState: function(S, D, Y, X) {
          oe(S, "replaceState");
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
        enqueueSetState: function(S, D, Y, X) {
          oe(S, "setState");
        }
      }, q = Object.assign, Ne = {};
      Object.freeze(Ne);
      function Te(S, D, Y) {
        this.props = S, this.context = D, this.refs = Ne, this.updater = Y || $;
      }
      Te.prototype.isReactComponent = {}, Te.prototype.setState = function(S, D) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, D, "setState");
      }, Te.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var Ge = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ot = function(S, D) {
          Object.defineProperty(Te.prototype, S, {
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
      function Tt(S, D, Y) {
        this.props = S, this.context = D, this.refs = Ne, this.updater = Y || $;
      }
      var tn = Tt.prototype = new wt();
      tn.constructor = Tt, q(tn, Te.prototype), tn.isPureReactComponent = !0;
      function nr() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var rr = Array.isArray;
      function dn(S) {
        return rr(S);
      }
      function zn(S) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, Y = D && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return Y;
        }
      }
      function Un(S) {
        try {
          return On(S), !1;
        } catch {
          return !0;
        }
      }
      function On(S) {
        return "" + S;
      }
      function wn(S) {
        if (Un(S))
          return we("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zn(S)), On(S);
      }
      function _r(S, D, Y) {
        var X = S.displayName;
        if (X)
          return X;
        var fe = D.displayName || D.name || "";
        return fe !== "" ? Y + "(" + fe + ")" : Y;
      }
      function Dr(S) {
        return S.displayName || "Context";
      }
      function In(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && we("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case T:
            return "Fragment";
          case E:
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
        if (typeof S == "object")
          switch (S.$$typeof) {
            case L:
              var D = S;
              return Dr(D) + ".Consumer";
            case x:
              var Y = S;
              return Dr(Y._context) + ".Provider";
            case P:
              return _r(S, S.render, "ForwardRef");
            case B:
              var X = S.displayName || null;
              return X !== null ? X : In(S.type) || "Memo";
            case se: {
              var fe = S, Je = fe._payload, be = fe._init;
              try {
                return In(be(Je));
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
      }, ar, Fr, Qn;
      Qn = {};
      function Lr(S) {
        if (ir.call(S, "ref")) {
          var D = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function pn(S) {
        if (ir.call(S, "key")) {
          var D = Object.getOwnPropertyDescriptor(S, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function qn(S, D) {
        var Y = function() {
          ar || (ar = !0, we("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        Y.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: Y,
          configurable: !0
        });
      }
      function jr(S, D) {
        var Y = function() {
          Fr || (Fr = !0, we("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        Y.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: Y,
          configurable: !0
        });
      }
      function vr(S) {
        if (typeof S.ref == "string" && st.current && S.__self && st.current.stateNode !== S.__self) {
          var D = In(st.current.type);
          Qn[D] || (we('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, S.ref), Qn[D] = !0);
        }
      }
      var ve = function(S, D, Y, X, fe, Je, be) {
        var Ze = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: y,
          // Built-in properties that belong on the element
          type: S,
          key: D,
          ref: Y,
          props: be,
          // Record the component responsible for creating this element.
          _owner: Je
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
      function Pe(S, D, Y) {
        var X, fe = {}, Je = null, be = null, Ze = null, Dt = null;
        if (D != null) {
          Lr(D) && (be = D.ref, vr(D)), pn(D) && (wn(D.key), Je = "" + D.key), Ze = D.__self === void 0 ? null : D.__self, Dt = D.__source === void 0 ? null : D.__source;
          for (X in D)
            ir.call(D, X) && !Or.hasOwnProperty(X) && (fe[X] = D[X]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          fe.children = Y;
        else if (Ft > 1) {
          for (var ln = Array(Ft), rn = 0; rn < Ft; rn++)
            ln[rn] = arguments[rn + 2];
          Object.freeze && Object.freeze(ln), fe.children = ln;
        }
        if (S && S.defaultProps) {
          var un = S.defaultProps;
          for (X in un)
            fe[X] === void 0 && (fe[X] = un[X]);
        }
        if (Je || be) {
          var cn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          Je && qn(fe, cn), be && jr(fe, cn);
        }
        return ve(S, Je, be, Ze, Dt, st.current, fe);
      }
      function mt(S, D) {
        var Y = ve(S.type, D, S.ref, S._self, S._source, S._owner, S.props);
        return Y;
      }
      function jt(S, D, Y) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var X, fe = q({}, S.props), Je = S.key, be = S.ref, Ze = S._self, Dt = S._source, Ft = S._owner;
        if (D != null) {
          Lr(D) && (be = D.ref, Ft = st.current), pn(D) && (wn(D.key), Je = "" + D.key);
          var ln;
          S.type && S.type.defaultProps && (ln = S.type.defaultProps);
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
        return ve(S.type, Je, be, Ze, Dt, Ft, fe);
      }
      function Vt(S) {
        return typeof S == "object" && S !== null && S.$$typeof === y;
      }
      var Tn = ".", vn = ":";
      function or(S) {
        var D = /[=:]/g, Y = {
          "=": "=0",
          ":": "=2"
        }, X = S.replace(D, function(fe) {
          return Y[fe];
        });
        return "$" + X;
      }
      var Kt = !1, hr = /\/+/g;
      function It(S) {
        return S.replace(hr, "$&/");
      }
      function Bt(S, D) {
        return typeof S == "object" && S !== null && S.key != null ? (wn(S.key), or("" + S.key)) : D.toString(36);
      }
      function Ri(S, D, Y, X, fe) {
        var Je = typeof S;
        (Je === "undefined" || Je === "boolean") && (S = null);
        var be = !1;
        if (S === null)
          be = !0;
        else
          switch (Je) {
            case "string":
            case "number":
              be = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case y:
                case E:
                  be = !0;
              }
          }
        if (be) {
          var Ze = S, Dt = fe(Ze), Ft = X === "" ? Tn + Bt(Ze, 0) : X;
          if (dn(Dt)) {
            var ln = "";
            Ft != null && (ln = It(Ft) + "/"), Ri(Dt, D, ln, "", function(md) {
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
            ) : "") + Ft
          )), D.push(Dt));
          return 1;
        }
        var rn, un, cn = 0, zt = X === "" ? Tn : X + vn;
        if (dn(S))
          for (var Wa = 0; Wa < S.length; Wa++)
            rn = S[Wa], un = zt + Bt(rn, Wa), cn += Ri(rn, D, Y, un, fe);
        else {
          var ru = ye(S);
          if (typeof ru == "function") {
            var cs = S;
            ru === cs.entries && (Kt || rt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var hd = ru.call(cs), pa, fs = 0; !(pa = hd.next()).done; )
              rn = pa.value, un = zt + Bt(rn, fs++), cn += Ri(rn, D, Y, un, fe);
          } else if (Je === "object") {
            var ds = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (ds === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : ds) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return cn;
      }
      function ri(S, D, Y) {
        if (S == null)
          return S;
        var X = [], fe = 0;
        return Ri(S, X, "", "", function(Je) {
          return D.call(Y, Je, fe++);
        }), X;
      }
      function Ca(S) {
        var D = 0;
        return ri(S, function() {
          D++;
        }), D;
      }
      function ja(S, D, Y) {
        ri(S, function() {
          D.apply(this, arguments);
        }, Y);
      }
      function bo(S) {
        return ri(S, function(D) {
          return D;
        }) || [];
      }
      function ii(S) {
        if (!Vt(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function wa(S) {
        var D = {
          $$typeof: L,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: S,
          _currentValue2: S,
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
          var Je = {
            $$typeof: L,
            _context: D
          };
          Object.defineProperties(Je, {
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
          }), D.Consumer = Je;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var Mr = -1, Ar = 0, $r = 1, bn = 2;
      function mr(S) {
        if (S._status === Mr) {
          var D = S._result, Y = D();
          if (Y.then(function(Je) {
            if (S._status === Ar || S._status === Mr) {
              var be = S;
              be._status = $r, be._result = Je;
            }
          }, function(Je) {
            if (S._status === Ar || S._status === Mr) {
              var be = S;
              be._status = bn, be._result = Je;
            }
          }), S._status === Mr) {
            var X = S;
            X._status = Ar, X._result = Y;
          }
        }
        if (S._status === $r) {
          var fe = S._result;
          return fe === void 0 && we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, fe), "default" in fe || we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, fe), fe.default;
        } else
          throw S._result;
      }
      function Vr(S) {
        var D = {
          // We use these fields to store the result.
          _status: Mr,
          _result: S
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
              set: function(Je) {
                we("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = Je, Object.defineProperty(Y, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return fe;
              },
              set: function(Je) {
                we("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), fe = Je, Object.defineProperty(Y, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Y;
      }
      function Hi(S) {
        S != null && S.$$typeof === B ? we("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? we("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && we("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && we("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: P,
          render: S
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
              Y = X, !S.name && !S.displayName && (S.displayName = X);
            }
          });
        }
        return D;
      }
      var xi;
      xi = Symbol.for("react.module.reference");
      function O(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === T || S === _ || at || S === g || S === A || S === K || Fe || S === We || xt || Ct || $t || typeof S == "object" && S !== null && (S.$$typeof === se || S.$$typeof === B || S.$$typeof === x || S.$$typeof === L || S.$$typeof === P || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === xi || S.getModuleId !== void 0));
      }
      function ne(S, D) {
        O(S) || we("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var Y = {
          $$typeof: B,
          type: S,
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
              X = fe, !S.name && !S.displayName && (S.displayName = fe);
            }
          });
        }
        return Y;
      }
      function le() {
        var S = Ue.current;
        return S === null && we(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function He(S) {
        var D = le();
        if (S._context !== void 0) {
          var Y = S._context;
          Y.Consumer === S ? we("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Y.Provider === S && we("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(S);
      }
      function kt(S) {
        var D = le();
        return D.useState(S);
      }
      function Lt(S, D, Y) {
        var X = le();
        return X.useReducer(S, D, Y);
      }
      function Qe(S) {
        var D = le();
        return D.useRef(S);
      }
      function Rt(S, D) {
        var Y = le();
        return Y.useEffect(S, D);
      }
      function Pn(S, D) {
        var Y = le();
        return Y.useInsertionEffect(S, D);
      }
      function V(S, D) {
        var Y = le();
        return Y.useLayoutEffect(S, D);
      }
      function de(S, D) {
        var Y = le();
        return Y.useCallback(S, D);
      }
      function qe(S, D) {
        var Y = le();
        return Y.useMemo(S, D);
      }
      function Wt(S, D, Y) {
        var X = le();
        return X.useImperativeHandle(S, D, Y);
      }
      function ct(S, D) {
        {
          var Y = le();
          return Y.useDebugValue(S, D);
        }
      }
      function nn() {
        var S = le();
        return S.useTransition();
      }
      function Rn(S) {
        var D = le();
        return D.useDeferredValue(S);
      }
      function _t() {
        var S = le();
        return S.useId();
      }
      function Fi(S, D, Y) {
        var X = le();
        return X.useSyncExternalStore(S, D, Y);
      }
      var So = 0, Gl, Eo, ai, os, Ir, ls, us;
      function hc() {
      }
      hc.__reactDisabledLog = !0;
      function Ql() {
        {
          if (So === 0) {
            Gl = console.log, Eo = console.info, ai = console.warn, os = console.error, Ir = console.group, ls = console.groupCollapsed, us = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: hc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: S,
              log: S,
              warn: S,
              error: S,
              group: S,
              groupCollapsed: S,
              groupEnd: S
            });
          }
          So++;
        }
      }
      function Co() {
        {
          if (So--, So === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: q({}, S, {
                value: Gl
              }),
              info: q({}, S, {
                value: Eo
              }),
              warn: q({}, S, {
                value: ai
              }),
              error: q({}, S, {
                value: os
              }),
              group: q({}, S, {
                value: Ir
              }),
              groupCollapsed: q({}, S, {
                value: ls
              }),
              groupEnd: q({}, S, {
                value: us
              })
            });
          }
          So < 0 && we("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var fa = gt.ReactCurrentDispatcher, Br;
      function wo(S, D, Y) {
        {
          if (Br === void 0)
            try {
              throw Error();
            } catch (fe) {
              var X = fe.stack.trim().match(/\n( *(at )?)/);
              Br = X && X[1] || "";
            }
          return `
` + Br + S;
        }
      }
      var To = !1, Ro;
      {
        var ql = typeof WeakMap == "function" ? WeakMap : Map;
        Ro = new ql();
      }
      function Kl(S, D) {
        if (!S || To)
          return "";
        {
          var Y = Ro.get(S);
          if (Y !== void 0)
            return Y;
        }
        var X;
        To = !0;
        var fe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Je;
        Je = fa.current, fa.current = null, Ql();
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
              Reflect.construct(S, [], be);
            } else {
              try {
                be.call();
              } catch (zt) {
                X = zt;
              }
              S.call(be.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (zt) {
              X = zt;
            }
            S();
          }
        } catch (zt) {
          if (zt && X && typeof zt.stack == "string") {
            for (var Ze = zt.stack.split(`
`), Dt = X.stack.split(`
`), Ft = Ze.length - 1, ln = Dt.length - 1; Ft >= 1 && ln >= 0 && Ze[Ft] !== Dt[ln]; )
              ln--;
            for (; Ft >= 1 && ln >= 0; Ft--, ln--)
              if (Ze[Ft] !== Dt[ln]) {
                if (Ft !== 1 || ln !== 1)
                  do
                    if (Ft--, ln--, ln < 0 || Ze[Ft] !== Dt[ln]) {
                      var rn = `
` + Ze[Ft].replace(" at new ", " at ");
                      return S.displayName && rn.includes("<anonymous>") && (rn = rn.replace("<anonymous>", S.displayName)), typeof S == "function" && Ro.set(S, rn), rn;
                    }
                  while (Ft >= 1 && ln >= 0);
                break;
              }
          }
        } finally {
          To = !1, fa.current = Je, Co(), Error.prepareStackTrace = fe;
        }
        var un = S ? S.displayName || S.name : "", cn = un ? wo(un) : "";
        return typeof S == "function" && Ro.set(S, cn), cn;
      }
      function Va(S, D, Y) {
        return Kl(S, !1);
      }
      function vd(S) {
        var D = S.prototype;
        return !!(D && D.isReactComponent);
      }
      function Ta(S, D, Y) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return Kl(S, vd(S));
        if (typeof S == "string")
          return wo(S);
        switch (S) {
          case A:
            return wo("Suspense");
          case K:
            return wo("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case P:
              return Va(S.render);
            case B:
              return Ta(S.type, D, Y);
            case se: {
              var X = S, fe = X._payload, Je = X._init;
              try {
                return Ta(Je(fe), D, Y);
              } catch {
              }
            }
          }
        return "";
      }
      var Yt = {}, Xl = gt.ReactDebugCurrentFrame;
      function nl(S) {
        if (S) {
          var D = S._owner, Y = Ta(S.type, S._source, D ? D.type : null);
          Xl.setExtraStackFrame(Y);
        } else
          Xl.setExtraStackFrame(null);
      }
      function Zl(S, D, Y, X, fe) {
        {
          var Je = Function.call.bind(ir);
          for (var be in S)
            if (Je(S, be)) {
              var Ze = void 0;
              try {
                if (typeof S[be] != "function") {
                  var Dt = Error((X || "React class") + ": " + Y + " type `" + be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Dt.name = "Invariant Violation", Dt;
                }
                Ze = S[be](D, be, X, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                Ze = Ft;
              }
              Ze && !(Ze instanceof Error) && (nl(fe), we("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", Y, be, typeof Ze), nl(null)), Ze instanceof Error && !(Ze.message in Yt) && (Yt[Ze.message] = !0, nl(fe), we("Failed %s type: %s", Y, Ze.message), nl(null));
            }
        }
      }
      function Nt(S) {
        if (S) {
          var D = S._owner, Y = Ta(S.type, S._source, D ? D.type : null);
          _e(Y);
        } else
          _e(null);
      }
      var Jl;
      Jl = !1;
      function eu() {
        if (st.current) {
          var S = In(st.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function pt(S) {
        if (S !== void 0) {
          var D = S.fileName.replace(/^.*[\\\/]/, ""), Y = S.lineNumber;
          return `

Check your code at ` + D + ":" + Y + ".";
        }
        return "";
      }
      function rl(S) {
        return S != null ? pt(S.__source) : "";
      }
      var xn = {};
      function oi(S) {
        var D = eu();
        if (!D) {
          var Y = typeof S == "string" ? S : S.displayName || S.name;
          Y && (D = `

Check the top-level render call using <` + Y + ">.");
        }
        return D;
      }
      function Wr(S, D) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var Y = oi(D);
          if (!xn[Y]) {
            xn[Y] = !0;
            var X = "";
            S && S._owner && S._owner !== st.current && (X = " It was passed a child from " + In(S._owner.type) + "."), Nt(S), we('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, X), Nt(null);
          }
        }
      }
      function xo(S, D) {
        if (typeof S == "object") {
          if (dn(S))
            for (var Y = 0; Y < S.length; Y++) {
              var X = S[Y];
              Vt(X) && Wr(X, D);
            }
          else if (Vt(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var fe = ye(S);
            if (typeof fe == "function" && fe !== S.entries)
              for (var Je = fe.call(S), be; !(be = Je.next()).done; )
                Vt(be.value) && Wr(be.value, D);
          }
        }
      }
      function Ln(S) {
        {
          var D = S.type;
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
            Zl(Y, S.props, "prop", X, S);
          } else if (D.PropTypes !== void 0 && !Jl) {
            Jl = !0;
            var fe = In(D);
            we("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && we("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Zt(S) {
        {
          for (var D = Object.keys(S.props), Y = 0; Y < D.length; Y++) {
            var X = D[Y];
            if (X !== "children" && X !== "key") {
              Nt(S), we("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), Nt(null);
              break;
            }
          }
          S.ref !== null && (Nt(S), we("Invalid attribute `ref` supplied to `React.Fragment`."), Nt(null));
        }
      }
      function mc(S, D, Y) {
        var X = O(S);
        if (!X) {
          var fe = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = rl(D);
          Je ? fe += Je : fe += eu();
          var be;
          S === null ? be = "null" : dn(S) ? be = "array" : S !== void 0 && S.$$typeof === y ? (be = "<" + (In(S.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : be = typeof S, we("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, fe);
        }
        var Ze = Pe.apply(this, arguments);
        if (Ze == null)
          return Ze;
        if (X)
          for (var Dt = 2; Dt < arguments.length; Dt++)
            xo(arguments[Dt], S);
        return S === T ? Zt(Ze) : Ln(Ze), Ze;
      }
      var li = !1;
      function lr(S) {
        var D = mc.bind(null, S);
        return D.type = S, li || (li = !0, rt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return rt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), D;
      }
      function Ra(S, D, Y) {
        for (var X = jt.apply(this, arguments), fe = 2; fe < arguments.length; fe++)
          xo(arguments[fe], X.type);
        return Ln(X), X;
      }
      function yc(S, D) {
        var Y = ut.transition;
        ut.transition = {};
        var X = ut.transition;
        ut.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (ut.transition = Y, Y === null && X._updatedFibers) {
            var fe = X._updatedFibers.size;
            fe > 10 && rt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), X._updatedFibers.clear();
          }
        }
      }
      var Ia = !1, ko = null;
      function gc(S) {
        if (ko === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), Y = c && c[D];
            ko = Y.call(c, "timers").setImmediate;
          } catch {
            ko = function(fe) {
              Ia === !1 && (Ia = !0, typeof MessageChannel > "u" && we("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Je = new MessageChannel();
              Je.port1.onmessage = fe, Je.port2.postMessage(void 0);
            };
          }
        return ko(S);
      }
      var ji = 0, _o = !1;
      function Ba(S) {
        {
          var D = ji;
          ji++, Oe.current === null && (Oe.current = []);
          var Y = Oe.isBatchingLegacy, X;
          try {
            if (Oe.isBatchingLegacy = !0, X = S(), !Y && Oe.didScheduleLegacyUpdate) {
              var fe = Oe.current;
              fe !== null && (Oe.didScheduleLegacyUpdate = !1, Oo(fe));
            }
          } catch (un) {
            throw Vi(D), un;
          } finally {
            Oe.isBatchingLegacy = Y;
          }
          if (X !== null && typeof X == "object" && typeof X.then == "function") {
            var Je = X, be = !1, Ze = {
              then: function(un, cn) {
                be = !0, Je.then(function(zt) {
                  Vi(D), ji === 0 ? tu(zt, un, cn) : un(zt);
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
            if (Vi(D), ji === 0) {
              var Ft = Oe.current;
              Ft !== null && (Oo(Ft), Oe.current = null);
              var ln = {
                then: function(un, cn) {
                  Oe.current === null ? (Oe.current = [], tu(Dt, un, cn)) : un(Dt);
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
      function Vi(S) {
        S !== ji - 1 && we("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ji = S;
      }
      function tu(S, D, Y) {
        {
          var X = Oe.current;
          if (X !== null)
            try {
              Oo(X), gc(function() {
                X.length === 0 ? (Oe.current = null, D(S)) : tu(S, D, Y);
              });
            } catch (fe) {
              Y(fe);
            }
          else
            D(S);
        }
      }
      var Do = !1;
      function Oo(S) {
        if (!Do) {
          Do = !0;
          var D = 0;
          try {
            for (; D < S.length; D++) {
              var Y = S[D];
              do
                Y = Y(!0);
              while (Y !== null);
            }
            S.length = 0;
          } catch (X) {
            throw S = S.slice(D + 1), X;
          } finally {
            Do = !1;
          }
        }
      }
      var il = mc, nu = Ra, ss = lr, da = {
        map: ri,
        forEach: ja,
        count: Ca,
        toArray: bo,
        only: ii
      };
      u.Children = da, u.Component = Te, u.Fragment = T, u.Profiler = _, u.PureComponent = Tt, u.StrictMode = g, u.Suspense = A, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gt, u.act = Ba, u.cloneElement = nu, u.createContext = wa, u.createElement = il, u.createFactory = ss, u.createRef = nr, u.forwardRef = Hi, u.isValidElement = Vt, u.lazy = Vr, u.memo = ne, u.startTransition = yc, u.unstable_act = Ba, u.useCallback = de, u.useContext = He, u.useDebugValue = ct, u.useDeferredValue = Rn, u.useEffect = Rt, u.useId = _t, u.useImperativeHandle = Wt, u.useInsertionEffect = Pn, u.useLayoutEffect = V, u.useMemo = qe, u.useReducer = Lt, u.useRef = Qe, u.useState = kt, u.useSyncExternalStore = Fi, u.useTransition = nn, u.version = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Sv, Sv.exports)), Sv.exports;
}
process.env.NODE_ENV === "production" ? dS.exports = xO() : dS.exports = kO();
var Wl = dS.exports;
const tt = /* @__PURE__ */ RO(Wl);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h1;
function _O() {
  if (h1) return yv;
  h1 = 1;
  var c = Wl, u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, E = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(_, x, L) {
    var P, A = {}, K = null, B = null;
    L !== void 0 && (K = "" + L), x.key !== void 0 && (K = "" + x.key), x.ref !== void 0 && (B = x.ref);
    for (P in x) y.call(x, P) && !T.hasOwnProperty(P) && (A[P] = x[P]);
    if (_ && _.defaultProps) for (P in x = _.defaultProps, x) A[P] === void 0 && (A[P] = x[P]);
    return { $$typeof: u, type: _, key: K, ref: B, props: A, _owner: E.current };
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
var m1;
function DO() {
  return m1 || (m1 = 1, process.env.NODE_ENV !== "production" && function() {
    var c = Wl, u = Symbol.for("react.element"), d = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), _ = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), se = Symbol.iterator, We = "@@iterator";
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
      return !!(typeof O == "string" || typeof O == "function" || O === y || O === T || nt || O === E || O === L || O === P || ge || O === B || ut || Oe || st || typeof O == "object" && O !== null && (O.$$typeof === K || O.$$typeof === A || O.$$typeof === g || O.$$typeof === _ || O.$$typeof === x || // This needs to include all possible module reference object
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
    function Fe(O) {
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
        case E:
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
            return He !== null ? He : Fe(O.type) || "Memo";
          case K: {
            var kt = O, Lt = kt._payload, Qe = kt._init;
            try {
              return Fe(Qe(Lt));
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
    function Fr(O) {
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
      if (Fr(O))
        return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(O)), Qn(O);
    }
    var pn = ht.ReactCurrentOwner, qn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jr, vr, ve;
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
    function jt(O, ne) {
      if (typeof O.ref == "string" && pn.current && ne && pn.current.stateNode !== ne) {
        var le = Fe(pn.current.type);
        ve[le] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Fe(pn.current.type), O.ref), ve[le] = !0);
      }
    }
    function Vt(O, ne) {
      {
        var le = function() {
          jr || (jr = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
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
        le !== void 0 && (Lr(le), Rt = "" + le), mt(ne) && (Lr(ne.key), Rt = "" + ne.key), Pe(ne) && (Pn = ne.ref, jt(ne, kt));
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
          var O = Fe(Kt.current.type);
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
    var ja = {};
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
        if (ja[le])
          return;
        ja[le] = !0;
        var He = "";
        O && O._owner && O._owner !== Kt.current && (He = " It was passed a child from " + Fe(O._owner.type) + "."), It(O), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', le, He), It(null);
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
          var He = Fe(ne);
          In(le, O.props, "prop", He, O);
        } else if (ne.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var kt = Fe(ne);
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
          O === null ? V = "null" : Or(O) ? V = "array" : O !== void 0 && O.$$typeof === u ? (V = "<" + (Fe(O.type) || "Unknown") + " />", Rt = " Did you accidentally export a JSX literal instead of a component?") : V = typeof O, ye("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, Rt);
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
          var ct = Fe(O), nn = Object.keys(ne).filter(function(Fi) {
            return Fi !== "key";
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
process.env.NODE_ENV === "production" ? _O() : DO();
var Fa = {
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
}, OO = Object.defineProperty, LO = (c, u) => {
  for (var d in u)
    OO(c, d, { get: u[d], enumerable: !0 });
}, MO = {
  isDev: !1,
  isBrowser: !0,
  isServer: !1,
  isTesting: !1
}, G1 = /* @__PURE__ */ new WeakMap(), vc = (c) => G1.get(c), AO = (c, u) => {
  const d = {
    $flags$: 0,
    $hostElement$: c,
    $cmpMeta$: u,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  return G1.set(c, d);
}, y1 = (c, u) => u in c, Cv = (c, u) => (0, console.error)(c, u), Cy = /* @__PURE__ */ new Map(), $O = [], NO = "slot-fb{display:contents}slot-fb[hidden]{display:none}", g1 = "http://www.w3.org/1999/xlink", wv = typeof window < "u" ? window : {}, go = wv.document || { head: {} }, dd = wv.HTMLElement || class {
}, ni = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (c) => c(),
  raf: (c) => requestAnimationFrame(c),
  ael: (c, u, d, y) => c.addEventListener(u, d, y),
  rel: (c, u, d, y) => c.removeEventListener(u, d, y),
  ce: (c, u) => new CustomEvent(c, u)
}, zO = /* @__PURE__ */ (() => {
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
})(), UO = (c) => Promise.resolve(c), PO = /* @__PURE__ */ (() => {
  try {
    return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == "function";
  } catch {
  }
  return !1;
})(), pS = !1, vS = [], Q1 = [], q1 = (c, u) => (d) => {
  c.push(d), pS || (pS = !0, u && ni.$flags$ & 4 ? HO(hS) : ni.raf(hS));
}, b1 = (c) => {
  for (let u = 0; u < c.length; u++)
    try {
      c[u](performance.now());
    } catch (d) {
      Cv(d);
    }
  c.length = 0;
}, hS = () => {
  b1(vS), b1(Q1), (pS = vS.length > 0) && ni.raf(hS);
}, HO = (c) => UO().then(c), FO = /* @__PURE__ */ q1(vS, !1), RS = /* @__PURE__ */ q1(Q1, !0), jO = (c) => {
  const u = new URL(c, ni.$resourcesUrl$);
  return u.origin !== wv.location.origin ? u.href : u.pathname;
}, S1 = {}, VO = "http://www.w3.org/2000/svg", IO = "http://www.w3.org/1999/xhtml", BO = (c) => c != null, xS = (c) => (c = typeof c, c === "object" || c === "function");
function WO(c) {
  var u, d, y;
  return (y = (d = (u = c.head) == null ? void 0 : u.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : d.getAttribute("content")) != null ? y : void 0;
}
var YO = {};
LO(YO, {
  err: () => K1,
  map: () => GO,
  ok: () => mS,
  unwrap: () => QO,
  unwrapErr: () => qO
});
var mS = (c) => ({
  isOk: !0,
  isErr: !1,
  value: c
}), K1 = (c) => ({
  isOk: !1,
  isErr: !0,
  value: c
});
function GO(c, u) {
  if (c.isOk) {
    const d = u(c.value);
    return d instanceof Promise ? d.then((y) => mS(y)) : mS(d);
  }
  if (c.isErr) {
    const d = c.value;
    return K1(d);
  }
  throw "should never get here";
}
var QO = (c) => {
  if (c.isOk)
    return c.value;
  throw c.value;
}, qO = (c) => {
  if (c.isErr)
    return c.value;
  throw c.value;
}, pc = (c, u = "") => () => {
}, Pi = (c, u, ...d) => {
  let y = null, E = null, T = null, g = !1, _ = !1;
  const x = [], L = (A) => {
    for (let K = 0; K < A.length; K++)
      y = A[K], Array.isArray(y) ? L(y) : y != null && typeof y != "boolean" && ((g = typeof c != "function" && !xS(y)) && (y = String(y)), g && _ ? x[x.length - 1].$text$ += y : x.push(g ? wy(null, y) : y), _ = g);
  };
  if (L(d), u) {
    u.key && (E = u.key), u.name && (T = u.name);
    {
      const A = u.className || u.class;
      A && (u.class = typeof A != "object" ? A : Object.keys(A).filter((K) => A[K]).join(" "));
    }
  }
  if (typeof c == "function")
    return c(
      u === null ? {} : u,
      x,
      XO
    );
  const P = wy(c, null);
  return P.$attrs$ = u, x.length > 0 && (P.$children$ = x), P.$key$ = E, P.$name$ = T, P;
}, wy = (c, u) => {
  const d = {
    $flags$: 0,
    $tag$: c,
    $text$: u,
    $elm$: null,
    $children$: null
  };
  return d.$attrs$ = null, d.$key$ = null, d.$name$ = null, d;
}, Tv = {}, KO = (c) => c && c.$tag$ === Tv, XO = {
  forEach: (c, u) => c.map(E1).forEach(u),
  map: (c, u) => c.map(E1).map(u).map(ZO)
}, E1 = (c) => ({
  vattrs: c.$attrs$,
  vchildren: c.$children$,
  vkey: c.$key$,
  vname: c.$name$,
  vtag: c.$tag$,
  vtext: c.$text$
}), ZO = (c) => {
  if (typeof c.vtag == "function") {
    const d = { ...c.vattrs };
    return c.vkey && (d.key = c.vkey), c.vname && (d.name = c.vname), Pi(c.vtag, d, ...c.vchildren || []);
  }
  const u = wy(c.vtag, c.vtext);
  return u.$attrs$ = c.vattrs, u.$children$ = c.vchildren, u.$key$ = c.vkey, u.$name$ = c.vname, u;
}, JO = (c) => $O.map((u) => u(c)).find((u) => !!u), eL = (c) => vc(c).$modeName$, tL = (c, u) => c != null && !xS(c) ? u & 4 ? c === "false" ? !1 : c === "" || !!c : u & 2 ? parseFloat(c) : u & 1 ? String(c) : c : c, nL = (c) => c, Il = (c, u, d) => {
  const y = nL(c);
  return {
    emit: (E) => rL(y, u, {
      bubbles: !!(d & 4),
      composed: !!(d & 2),
      cancelable: !!(d & 1),
      detail: E
    })
  };
}, rL = (c, u, d) => {
  const y = ni.ce(u, d);
  return c.dispatchEvent(y), y;
}, C1 = /* @__PURE__ */ new WeakMap(), iL = (c, u, d) => {
  let y = Cy.get(c);
  PO && d ? (y = y || new CSSStyleSheet(), typeof y == "string" ? y = u : y.replaceSync(u)) : y = u, Cy.set(c, y);
}, aL = (c, u, d) => {
  var y;
  const E = X1(u, d), T = Cy.get(E);
  if (c = c.nodeType === 11 ? c : go, T)
    if (typeof T == "string") {
      c = c.head || c;
      let g = C1.get(c), _;
      if (g || C1.set(c, g = /* @__PURE__ */ new Set()), !g.has(E)) {
        {
          _ = go.createElement("style"), _.innerHTML = T;
          const x = (y = ni.$nonce$) != null ? y : WO(go);
          x != null && _.setAttribute("nonce", x), /**
           * we render a scoped component
           */
          (!(u.$flags$ & 1) || /**
          * we are using shadow dom and render the style tag within the shadowRoot
          */
          u.$flags$ & 1 && c.nodeName !== "HEAD") && c.insertBefore(_, c.querySelector("link"));
        }
        u.$flags$ & 4 && (_.innerHTML += NO), g && g.add(E);
      }
    } else c.adoptedStyleSheets.includes(T) || (c.adoptedStyleSheets = [...c.adoptedStyleSheets, T]);
  return E;
}, oL = (c) => {
  const u = c.$cmpMeta$, d = c.$hostElement$, y = u.$flags$, E = pc("attachStyles", u.$tagName$), T = aL(
    d.shadowRoot ? d.shadowRoot : d.getRootNode(),
    u,
    c.$modeName$
  );
  y & 10 && y & 2 && (d["s-sc"] = T, d.classList.add(T + "-h"), y & 2 && d.classList.add(T + "-s")), E();
}, X1 = (c, u) => "sc-" + (u && c.$flags$ & 32 ? c.$tagName$ + "-" + u : c.$tagName$), w1 = (c, u, d, y, E, T) => {
  if (d !== y) {
    let g = y1(c, u), _ = u.toLowerCase();
    if (u === "class") {
      const x = c.classList, L = T1(d), P = T1(y);
      x.remove(...L.filter((A) => A && !P.includes(A))), x.add(...P.filter((A) => A && !L.includes(A)));
    } else if (u === "style") {
      for (const x in d)
        (!y || y[x] == null) && (x.includes("-") ? c.style.removeProperty(x) : c.style[x] = "");
      for (const x in y)
        (!d || y[x] !== d[x]) && (x.includes("-") ? c.style.setProperty(x, y[x]) : c.style[x] = y[x]);
    } else if (u !== "key") if (u === "ref")
      y && y(c);
    else if (!c.__lookupSetter__(u) && u[0] === "o" && u[1] === "n") {
      if (u[2] === "-" ? u = u.slice(3) : y1(wv, _) ? u = _.slice(2) : u = _[2] + u.slice(3), d || y) {
        const x = u.endsWith(Z1);
        u = u.replace(uL, ""), d && ni.rel(c, u, d, x), y && ni.ael(c, u, y, x);
      }
    } else {
      const x = xS(y);
      if ((g || x && y !== null) && !E)
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
      _ !== (_ = _.replace(/^xlink\:?/, "")) && (u = _, L = !0), y == null || y === !1 ? (y !== !1 || c.getAttribute(u) === "") && (L ? c.removeAttributeNS(g1, u) : c.removeAttribute(u)) : (!g || T & 4 || E) && !x && (y = y === !0 ? "" : y, L ? c.setAttributeNS(g1, u, y) : c.setAttribute(u, y));
    }
  }
}, lL = /\s/, T1 = (c) => c ? c.split(lL) : [], Z1 = "Capture", uL = new RegExp(Z1 + "$"), J1 = (c, u, d) => {
  const y = u.$elm$.nodeType === 11 && u.$elm$.host ? u.$elm$.host : u.$elm$, E = c && c.$attrs$ || S1, T = u.$attrs$ || S1;
  for (const g of R1(Object.keys(E)))
    g in T || w1(y, g, E[g], void 0, d, u.$flags$);
  for (const g of R1(Object.keys(T)))
    w1(y, g, E[g], T[g], d, u.$flags$);
};
function R1(c) {
  return c.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...c.filter((u) => u !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    c
  );
}
var od, yS, sd, Ty = !1, Ry = !1, kS = !1, Ea = !1, xy = (c, u, d, y) => {
  var E;
  const T = u.$children$[d];
  let g = 0, _, x, L;
  if (Ty || (kS = !0, T.$tag$ === "slot" && (od && y.classList.add(od + "-s"), T.$flags$ |= T.$children$ ? (
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
      Ea ? VO : IO,
      !Ty && Fa.slotRelocation && T.$flags$ & 2 ? "slot-fb" : T.$tag$
    ), Ea && T.$tag$ === "foreignObject" && (Ea = !1), J1(null, T, Ea), !!_.getRootNode().querySelector("body") && Fa.scoped && BO(od) && _["s-si"] !== od && _.classList.add(_["s-si"] = od), DS(_, y), T.$children$)
      for (g = 0; g < T.$children$.length; ++g)
        x = xy(c, T, g, _), x && _.appendChild(x);
    T.$tag$ === "svg" ? Ea = !1 : _.tagName === "foreignObject" && (Ea = !0);
  }
  return _["s-hn"] = sd, T.$flags$ & 3 && (_["s-sr"] = !0, _["s-cr"] = yS, _["s-sn"] = T.$name$ || "", _["s-rf"] = (E = T.$attrs$) == null ? void 0 : E.ref, L = c && c.$children$ && c.$children$[d], L && L.$tag$ === T.$tag$ && c.$elm$ && Ev(c.$elm$, !1)), _;
}, Ev = (c, u) => {
  ni.$flags$ |= 1;
  const d = Array.from(c.childNodes);
  if (c["s-sr"] && Fa.experimentalSlotFixes) {
    let y = c;
    for (; y = y.nextSibling; )
      y && y["s-sn"] === c["s-sn"] && y["s-sh"] === sd && d.push(y);
  }
  for (let y = d.length - 1; y >= 0; y--) {
    const E = d[y];
    E["s-hn"] !== sd && E["s-ol"] && (is(nT(E), E, _S(E)), E["s-ol"].remove(), E["s-ol"] = void 0, E["s-sh"] = void 0, kS = !0), u && Ev(E, u);
  }
  ni.$flags$ &= -2;
}, eT = (c, u, d, y, E, T) => {
  let g = c["s-cr"] && c["s-cr"].parentNode || c, _;
  for (g.shadowRoot && g.tagName === sd && (g = g.shadowRoot); E <= T; ++E)
    y[E] && (_ = xy(null, d, E, c), _ && (y[E].$elm$ = _, is(g, _, _S(u))));
}, tT = (c, u, d) => {
  for (let y = u; y <= d; ++y) {
    const E = c[y];
    if (E) {
      const T = E.$elm$;
      aT(E), T && (Ry = !0, T["s-ol"] ? T["s-ol"].remove() : Ev(T, !0), T.remove());
    }
  }
}, sL = (c, u, d, y, E = !1) => {
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
    else if (my(P, B, E))
      ld(P, B, E), P = u[++T], B = y[++g];
    else if (my(A, se, E))
      ld(A, se, E), A = u[--L], se = y[--K];
    else if (my(P, se, E))
      (P.$tag$ === "slot" || se.$tag$ === "slot") && Ev(P.$elm$.parentNode, !1), ld(P, se, E), is(c, P.$elm$, A.$elm$.nextSibling), P = u[++T], se = y[--K];
    else if (my(A, B, E))
      (P.$tag$ === "slot" || se.$tag$ === "slot") && Ev(A.$elm$.parentNode, !1), ld(A, B, E), is(c, A.$elm$, P.$elm$), A = u[--L], B = y[++g];
    else {
      for (_ = -1, x = T; x <= L; ++x)
        if (u[x] && u[x].$key$ !== null && u[x].$key$ === B.$key$) {
          _ = x;
          break;
        }
      _ >= 0 ? (Ce = u[_], Ce.$tag$ !== B.$tag$ ? We = xy(u && u[g], d, _, c) : (ld(Ce, B, E), u[_] = void 0, We = Ce.$elm$), B = y[++g]) : (We = xy(u && u[g], d, g, c), B = y[++g]), We && is(nT(P.$elm$), We, _S(P.$elm$));
    }
  T > L ? eT(
    c,
    y[K + 1] == null ? null : y[K + 1].$elm$,
    d,
    y,
    g,
    K
  ) : g > K && tT(u, T, L);
}, my = (c, u, d = !1) => c.$tag$ === u.$tag$ ? c.$tag$ === "slot" ? (
  // The component gets hydrated and no VDOM has been initialized.
  // Here the comparison can't happen as $name$ property is not set for `leftNode`.
  "$nodeId$" in c && d && // `leftNode` is not from type HTMLComment which would cause many
  // hydration comments to be removed
  c.$elm$.nodeType !== 8 ? !1 : c.$name$ === u.$name$
) : d ? !0 : c.$key$ === u.$key$ : !1, _S = (c) => c && c["s-ol"] || c, nT = (c) => (c["s-ol"] ? c["s-ol"] : c).parentNode, ld = (c, u, d = !1) => {
  const y = u.$elm$ = c.$elm$, E = c.$children$, T = u.$children$, g = u.$tag$, _ = u.$text$;
  let x;
  _ === null ? (Ea = g === "svg" ? !0 : g === "foreignObject" ? !1 : Ea, g === "slot" && !Ty || J1(c, u, Ea), E !== null && T !== null ? sL(y, E, u, T, d) : T !== null ? (c.$text$ !== null && (y.textContent = ""), eT(y, null, u, T, 0, T.length - 1)) : (
    // don't do this on initial render as it can cause non-hydrated content to be removed
    !d && Fa.updatable && E !== null && tT(E, 0, E.length - 1)
  ), Ea && g === "svg" && (Ea = !1)) : (x = y["s-cr"]) ? x.parentNode.textContent = _ : c.$text$ !== _ && (y.data = _);
}, rT = (c) => {
  const u = c.childNodes;
  for (const d of u)
    if (d.nodeType === 1) {
      if (d["s-sr"]) {
        const y = d["s-sn"];
        d.hidden = !1;
        for (const E of u)
          if (E !== d) {
            if (E["s-hn"] !== d["s-hn"] || y !== "") {
              if (E.nodeType === 1 && (y === E.getAttribute("slot") || y === E["s-sn"]) || E.nodeType === 3 && y === E["s-sn"]) {
                d.hidden = !0;
                break;
              }
            } else if (E.nodeType === 1 || E.nodeType === 3 && E.textContent.trim() !== "") {
              d.hidden = !0;
              break;
            }
          }
      }
      rT(d);
    }
}, jl = [], iT = (c) => {
  let u, d, y;
  for (const E of c.childNodes) {
    if (E["s-sr"] && (u = E["s-cr"]) && u.parentNode) {
      d = u.parentNode.childNodes;
      const T = E["s-sn"];
      for (y = d.length - 1; y >= 0; y--)
        if (u = d[y], !u["s-cn"] && !u["s-nr"] && u["s-hn"] !== E["s-hn"] && !Fa.experimentalSlotFixes)
          if (x1(u, T)) {
            let g = jl.find((_) => _.$nodeToRelocate$ === u);
            Ry = !0, u["s-sn"] = u["s-sn"] || T, g ? (g.$nodeToRelocate$["s-sh"] = E["s-hn"], g.$slotRefNode$ = E) : (u["s-sh"] = E["s-hn"], jl.push({
              $slotRefNode$: E,
              $nodeToRelocate$: u
            })), u["s-sr"] && jl.map((_) => {
              x1(_.$nodeToRelocate$, u["s-sn"]) && (g = jl.find((x) => x.$nodeToRelocate$ === u), g && !_.$slotRefNode$ && (_.$slotRefNode$ = g.$slotRefNode$));
            });
          } else jl.some((g) => g.$nodeToRelocate$ === u) || jl.push({
            $nodeToRelocate$: u
          });
    }
    E.nodeType === 1 && iT(E);
  }
}, x1 = (c, u) => c.nodeType === 1 ? c.getAttribute("slot") === null && u === "" || c.getAttribute("slot") === u : c["s-sn"] === u ? !0 : u === "", aT = (c) => {
  c.$attrs$ && c.$attrs$.ref && c.$attrs$.ref(null), c.$children$ && c.$children$.map(aT);
}, is = (c, u, d) => {
  const y = c == null ? void 0 : c.insertBefore(u, d);
  return DS(u, c), y;
}, oT = (c) => {
  const u = [];
  return c && u.push(
    ...c["s-scs"] || [],
    c["s-si"],
    c["s-sc"],
    ...oT(c.parentElement)
  ), u;
}, DS = (c, u, d = !1) => {
  var y;
  if (c && u && c.nodeType === 1) {
    const E = new Set(oT(u).filter(Boolean));
    if (E.size && ((y = c.classList) == null || y.add(...c["s-scs"] = [...E]), c["s-ol"] || d))
      for (const T of Array.from(c.childNodes))
        DS(T, c, !0);
  }
}, cL = (c, u, d = !1) => {
  var y, E, T, g, _;
  const x = c.$hostElement$, L = c.$cmpMeta$, P = c.$vnode$ || wy(null, null), A = KO(u) ? u : Pi(null, null, u);
  if (sd = x.tagName, L.$attrsToReflect$ && (A.$attrs$ = A.$attrs$ || {}, L.$attrsToReflect$.map(
    ([K, B]) => A.$attrs$[B] = x[K]
  )), d && A.$attrs$)
    for (const K of Object.keys(A.$attrs$))
      x.hasAttribute(K) && !["key", "ref", "style", "class"].includes(K) && (A.$attrs$[K] = x[K]);
  A.$tag$ = null, A.$flags$ |= 4, c.$vnode$ = A, A.$elm$ = P.$elm$ = x.shadowRoot || x, od = x["s-sc"], Ty = (L.$flags$ & 1) !== 0, yS = x["s-cr"], Ry = !1, ld(P, A, d);
  {
    if (ni.$flags$ |= 1, kS) {
      iT(A.$elm$);
      for (const K of jl) {
        const B = K.$nodeToRelocate$;
        if (!B["s-ol"]) {
          const se = go.createTextNode("");
          se["s-nr"] = B, is(B.parentNode, B["s-ol"] = se, B);
        }
      }
      for (const K of jl) {
        const B = K.$nodeToRelocate$, se = K.$slotRefNode$;
        if (se) {
          const We = se.parentNode;
          let Ce = se.nextSibling;
          {
            let ht = (y = B["s-ol"]) == null ? void 0 : y.previousSibling;
            for (; ht; ) {
              let ye = (E = ht["s-nr"]) != null ? E : null;
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
          (!Ce && We !== B.parentNode || B.nextSibling !== Ce) && B !== Ce && (!B["s-hn"] && B["s-ol"] && (B["s-hn"] = B["s-ol"].parentNode.nodeName), is(We, B, Ce), B.nodeType === 1 && (B.hidden = (T = B["s-ih"]) != null ? T : !1)), B && typeof se["s-rf"] == "function" && se["s-rf"](B);
        } else
          B.nodeType === 1 && (d && (B["s-ih"] = (g = B.hidden) != null ? g : !1), B.hidden = !0);
      }
    }
    Ry && rT(A.$elm$), ni.$flags$ &= -2, jl.length = 0;
  }
  if (Fa.experimentalScopedSlotChanges && L.$flags$ & 2)
    for (const K of A.$elm$.childNodes)
      K["s-hn"] !== sd && !K["s-sh"] && (d && K["s-ih"] == null && (K["s-ih"] = (_ = K.hidden) != null ? _ : !1), K.hidden = !0);
  yS = void 0;
}, fL = (c, u) => {
}, lT = (c, u) => (c.$flags$ |= 16, fL(c, c.$ancestorComponent$), RS(() => dL(c, u))), dL = (c, u) => {
  const d = c.$hostElement$, y = pc("scheduleUpdate", c.$cmpMeta$.$tagName$), E = d;
  if (!E)
    throw new Error(
      `Can't render component <${d.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  let T;
  return u ? T = ud(E, "componentWillLoad") : T = ud(E, "componentWillUpdate"), T = k1(T, () => ud(E, "componentWillRender")), y(), k1(T, () => vL(c, E, u));
}, k1 = (c, u) => pL(c) ? c.then(u).catch((d) => {
  console.error(d), u();
}) : u(), pL = (c) => c instanceof Promise || c && c.then && typeof c.then == "function", vL = async (c, u, d) => {
  const y = c.$hostElement$, E = pc("update", c.$cmpMeta$.$tagName$);
  y["s-rc"], d && oL(c);
  const T = pc("render", c.$cmpMeta$.$tagName$);
  hL(c, u, y, d), T(), E(), mL(c);
}, _1 = null, hL = (c, u, d, y) => {
  try {
    _1 = u, u = u.render && u.render(), c.$flags$ &= -17, c.$flags$ |= 2, (Fa.hasRenderFn || Fa.reflect) && (Fa.vdomRender || Fa.reflect) && (Fa.hydrateServerSide || cL(c, u, y));
  } catch (x) {
    Cv(x, c.$hostElement$);
  }
  return _1 = null, null;
}, mL = (c) => {
  const u = c.$cmpMeta$.$tagName$, d = c.$hostElement$, y = pc("postUpdate", u), E = d;
  c.$ancestorComponent$, ud(E, "componentDidRender"), c.$flags$ & 64 ? (ud(E, "componentDidUpdate"), y()) : (c.$flags$ |= 64, ud(E, "componentDidLoad"), y());
}, ud = (c, u, d) => {
  if (c && c[u])
    try {
      return c[u](d);
    } catch (y) {
      Cv(y);
    }
}, yL = (c, u) => vc(c).$instanceValues$.get(u), gL = (c, u, d, y) => {
  const E = vc(c), T = c, g = E.$instanceValues$.get(u), _ = E.$flags$, x = T;
  d = tL(d, y.$members$[u][0]);
  const L = Number.isNaN(g) && Number.isNaN(d);
  if (d !== g && !L) {
    E.$instanceValues$.set(u, d);
    {
      if (y.$watchers$ && _ & 128) {
        const A = y.$watchers$[u];
        A && A.map((K) => {
          try {
            x[K](d, g, u);
          } catch (B) {
            Cv(B, T);
          }
        });
      }
      if ((_ & 18) === 2) {
        if (x.componentShouldUpdate && x.componentShouldUpdate(d, g, u) === !1)
          return;
        lT(E, !1);
      }
    }
  }
}, bL = (c, u, d) => {
  var y, E;
  const T = c.prototype;
  if (u.$members$ || u.$watchers$ || c.watchers) {
    c.watchers && !u.$watchers$ && (u.$watchers$ = c.watchers);
    const g = Object.entries((y = u.$members$) != null ? y : {});
    g.map(([_, [x]]) => {
      (x & 31 || x & 32) && Object.defineProperty(T, _, {
        get() {
          return yL(this, _);
        },
        set(L) {
          gL(this, _, L, u);
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
              const B = vc(this), se = B == null ? void 0 : B.$flags$;
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
          ...Object.keys((E = u.$watchers$) != null ? E : {}),
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
}, SL = async (c, u, d, y) => {
  let E;
  if (!(u.$flags$ & 32)) {
    u.$flags$ |= 32, d.$lazyBundleId$;
    {
      E = c.constructor;
      const g = c.localName;
      customElements.whenDefined(g).then(
        () => u.$flags$ |= 128
        /* isWatchReady */
      );
    }
    if (E && E.style) {
      let g;
      typeof E.style == "string" ? g = E.style : typeof E.style != "string" && (u.$modeName$ = JO(c), u.$modeName$ && (g = E.style[u.$modeName$]));
      const _ = X1(d, u.$modeName$);
      if (!Cy.has(_)) {
        const x = pc("registerStyles", d.$tagName$);
        iL(_, g, !!(d.$flags$ & 1)), x();
      }
    }
  }
  u.$ancestorComponent$, lT(u, !0);
}, D1 = (c) => {
}, EL = (c) => {
  if (!(ni.$flags$ & 1)) {
    const u = vc(c), d = u.$cmpMeta$, y = pc("connectedCallback", d.$tagName$);
    u.$flags$ & 1 ? (uT(c, u, d.$listeners$), u != null && u.$lazyInstance$ ? D1(u.$lazyInstance$) : u != null && u.$onReadyPromise$ && u.$onReadyPromise$.then(() => D1(u.$lazyInstance$))) : (u.$flags$ |= 1, // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
    d.$flags$ & 12 && CL(c), d.$members$ && Object.entries(d.$members$).map(([E, [T]]) => {
      if (T & 31 && c.hasOwnProperty(E)) {
        const g = c[E];
        delete c[E], c[E] = g;
      }
    }), SL(c, u, d)), y();
  }
}, CL = (c) => {
  const u = c["s-cr"] = go.createComment(
    ""
  );
  u["s-cn"] = !0, is(c, u, c.firstChild);
}, wL = async (c) => {
  if (!(ni.$flags$ & 1)) {
    const u = vc(c);
    u.$rmListeners$ && (u.$rmListeners$.map((d) => d()), u.$rmListeners$ = void 0);
  }
}, pd = (c, u) => {
  const d = {
    $flags$: u[0],
    $tagName$: u[1]
  };
  d.$members$ = u[2], d.$listeners$ = u[3], d.$watchers$ = c.$watchers$, d.$attrsToReflect$ = [];
  const y = c.prototype.connectedCallback, E = c.prototype.disconnectedCallback;
  return Object.assign(c.prototype, {
    __registerHost() {
      AO(this, d);
    },
    connectedCallback() {
      const T = vc(this);
      uT(this, T, d.$listeners$), EL(this), y && y.call(this);
    },
    disconnectedCallback() {
      wL(this), E && E.call(this);
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
  }), c.is = d.$tagName$, bL(c, d);
}, uT = (c, u, d, y) => {
  d && d.map(([E, T, g]) => {
    const _ = RL(c, E), x = TL(u, g), L = xL(E);
    ni.ael(_, T, x, L), (u.$rmListeners$ = u.$rmListeners$ || []).push(() => ni.rel(_, T, x, L));
  });
}, TL = (c, u) => (d) => {
  var y;
  try {
    Fa.lazyLoad || c.$hostElement$[u](d);
  } catch (E) {
    Cv(E);
  }
}, RL = (c, u) => u & 4 ? go : u & 8 ? wv : u & 16 ? go.body : c, xL = (c) => zO ? {
  passive: (c & 1) !== 0,
  capture: (c & 2) !== 0
} : (c & 2) !== 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Ti = typeof window < "u" ? window : void 0, eS = typeof document < "u" ? document : void 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let tS;
const kL = (c) => {
  if (tS === void 0) {
    const u = c.style.animationName !== void 0, d = c.style.webkitAnimationName !== void 0;
    tS = !u && d ? "-webkit-" : "";
  }
  return tS;
}, nS = (c, u, d) => {
  const y = u.startsWith("animation") ? kL(c) : "";
  c.style.setProperty(y + u, d);
}, yy = (c = [], u) => {
  if (u !== void 0) {
    const d = Array.isArray(u) ? u : [u];
    return [...c, ...d];
  }
  return c;
}, _L = (c) => {
  let u, d, y, E, T, g, _ = [], x = [], L = [], P = !1, A, K = {}, B = [], se = [], We = {}, Ce = 0, ht = !1, ye = !1, Ue, ut, Oe, st = !0, ge = !1, nt = !0, _e, xt = !1;
  const Ct = c, $t = [], Fe = [], at = [], gt = [], rt = [], we = [], ce = [], Le = [], oe = [], $ = [], q = [], Ne = typeof AnimationEffect == "function" || Ti !== void 0 && typeof Ti.AnimationEffect == "function", Te = typeof Element == "function" && typeof Element.prototype.animate == "function" && Ne, Ge = () => q, ot = (V) => (rt.forEach((de) => {
    de.destroy(V);
  }), St(V), gt.length = 0, rt.length = 0, _.length = 0, dn(), P = !1, nt = !0, _e), St = (V) => {
    zn(), V && Un();
  }, wt = () => {
    ht = !1, ye = !1, nt = !0, Ue = void 0, ut = void 0, Oe = void 0, Ce = 0, ge = !1, st = !0, xt = !1;
  }, Tt = () => Ce !== 0 && !xt, tn = (V, de) => {
    const qe = de.findIndex((Wt) => Wt.c === V);
    qe > -1 && de.splice(qe, 1);
  }, nr = (V, de) => (at.push({ c: V, o: de }), _e), rr = (V, de) => ((de != null && de.oneTimeCallback ? Fe : $t).push({ c: V, o: de }), _e), dn = () => ($t.length = 0, Fe.length = 0, _e), zn = () => {
    Te && (q.forEach((V) => {
      V.cancel();
    }), q.length = 0);
  }, Un = () => {
    we.forEach((V) => {
      V != null && V.parentNode && V.parentNode.removeChild(V);
    }), we.length = 0;
  }, On = (V) => (ce.push(V), _e), wn = (V) => (Le.push(V), _e), _r = (V) => (oe.push(V), _e), Dr = (V) => ($.push(V), _e), In = (V) => (x = yy(x, V), _e), ir = (V) => (L = yy(L, V), _e), Or = (V = {}) => (K = V, _e), ar = (V = []) => {
    for (const de of V)
      K[de] = "";
    return _e;
  }, Fr = (V) => (B = yy(B, V), _e), Qn = (V) => (se = yy(se, V), _e), Lr = (V = {}) => (We = V, _e), pn = (V = []) => {
    for (const de of V)
      We[de] = "";
    return _e;
  }, qn = () => T !== void 0 ? T : A ? A.getFill() : "both", jr = () => Ue !== void 0 ? Ue : g !== void 0 ? g : A ? A.getDirection() : "normal", vr = () => ht ? "linear" : y !== void 0 ? y : A ? A.getEasing() : "linear", ve = () => ye ? 0 : ut !== void 0 ? ut : d !== void 0 ? d : A ? A.getDuration() : 0, Pe = () => E !== void 0 ? E : A ? A.getIterations() : 1, mt = () => Oe !== void 0 ? Oe : u !== void 0 ? u : A ? A.getDelay() : 0, jt = () => _, Vt = (V) => (g = V, bn(!0), _e), Tn = (V) => (T = V, bn(!0), _e), vn = (V) => (u = V, bn(!0), _e), or = (V) => (y = V, bn(!0), _e), Kt = (V) => (!Te && V === 0 && (V = 1), d = V, bn(!0), _e), hr = (V) => (E = V, bn(!0), _e), It = (V) => (A = V, _e), Bt = (V) => {
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
  }, ja = () => {
    ce.forEach((Wt) => Wt()), Le.forEach((Wt) => Wt());
    const V = x, de = L, qe = K;
    gt.forEach((Wt) => {
      const ct = Wt.classList;
      V.forEach((nn) => ct.add(nn)), de.forEach((nn) => ct.remove(nn));
      for (const nn in qe)
        qe.hasOwnProperty(nn) && nS(Wt, nn, qe[nn]);
    });
  }, bo = () => {
    oe.forEach((ct) => ct()), $.forEach((ct) => ct());
    const V = st ? 1 : 0, de = B, qe = se, Wt = We;
    gt.forEach((ct) => {
      const nn = ct.classList;
      de.forEach((Rn) => nn.add(Rn)), qe.forEach((Rn) => nn.remove(Rn));
      for (const Rn in Wt)
        Wt.hasOwnProperty(Rn) && nS(ct, Rn, Wt[Rn]);
    }), ut = void 0, Ue = void 0, Oe = void 0, $t.forEach((ct) => ct.c(V, _e)), Fe.forEach((ct) => ct.c(V, _e)), Fe.length = 0, nt = !0, st && (ge = !0), st = !0;
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
        direction: jr()
      });
      de.pause(), q.push(de);
    }), q.length > 0 && (q[0].onfinish = () => {
      ii();
    });
  }, Mr = () => {
    ja(), _.length > 0 && Te && wa(), P = !0;
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
        direction: jr()
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
  }), qe !== void 0 && (ut = qe), ge = !1, st = !0, V === 0 ? (Ue = jr() === "reverse" ? "normal" : "reverse", Ue === "reverse" && (st = !1), Te ? (bn(), Ar(1 - de)) : (Oe = (1 - de) * ve() * -1, bn(!1, !1))) : V === 1 && (Te ? (bn(), Ar(de)) : (Oe = de * ve() * -1, bn(!1, !1))), V !== void 0 && !A && kt(), _e), xi = () => {
    P && (Te ? q.forEach((V) => {
      V.pause();
    }) : gt.forEach((V) => {
      nS(V, "animation-play-state", "paused");
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
      tn(Wt, Fe), de();
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
    getKeyframes: jt,
    getFill: qn,
    getDirection: jr,
    getDelay: mt,
    getIterations: Pe,
    getEasing: vr,
    getDuration: ve,
    afterAddRead: _r,
    afterAddWrite: Dr,
    afterClearStyles: pn,
    afterStyles: Lr,
    afterRemoveClass: Qn,
    afterAddClass: Fr,
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
class DL {
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
const Bl = /* @__PURE__ */ new DL();
let OL;
const cd = (c) => c && eL(c) || OL;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const LL = (c, ...u) => console.warn(`[Ionic Warning]: ${c}`, ...u);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const sT = (c, u) => {
  c.componentOnReady ? c.componentOnReady().then((d) => u(d)) : cT(() => u(c));
}, ML = (c) => c.componentOnReady !== void 0, AL = (c, u = []) => {
  const d = {};
  return u.forEach((y) => {
    c.hasAttribute(y) && (c.getAttribute(y) !== null && (d[y] = c.getAttribute(y)), c.removeAttribute(y));
  }), d;
}, cT = (c) => typeof __zone_symbol__requestAnimationFrame == "function" ? __zone_symbol__requestAnimationFrame(c) : typeof requestAnimationFrame == "function" ? requestAnimationFrame(c) : setTimeout(c), jA = (c, u, d) => Math.max(c, Math.min(u, d)), ca = (c, u) => {
  if (!c) {
    const d = "ASSERT: " + u;
    console.error(d);
    debugger;
    throw new Error(d);
  }
}, fT = (c, u) => {
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
const $L = "ionViewWillEnter", NL = "ionViewDidEnter", dT = "ionViewWillLeave", pT = "ionViewDidLeave", rS = "ionViewWillUnload", bv = (c) => {
  c.tabIndex = -1, c.focus();
}, gy = (c) => c.offsetParent !== null, zL = () => ({
  saveViewFocus: (d) => {
    if (Bl.get("focusManagerPriority", !1)) {
      const E = document.activeElement;
      E !== null && (d != null && d.contains(E)) && E.setAttribute(O1, "true");
    }
  },
  setViewFocus: (d) => {
    const y = Bl.get("focusManagerPriority", !1);
    if (Array.isArray(y) && !d.contains(document.activeElement)) {
      const E = d.querySelector(`[${O1}]`);
      if (E && gy(E)) {
        bv(E);
        return;
      }
      for (const T of y)
        switch (T) {
          case "content":
            const g = d.querySelector('main, [role="main"]');
            if (g && gy(g)) {
              bv(g);
              return;
            }
            break;
          case "heading":
            const _ = d.querySelector('h1, [role="heading"][aria-level="1"]');
            if (_ && gy(_)) {
              bv(_);
              return;
            }
            break;
          case "banner":
            const x = d.querySelector('header, [role="banner"]');
            if (x && gy(x)) {
              bv(x);
              return;
            }
            break;
          default:
            LL(`Unrecognized focus manager priority value ${T}`);
            break;
        }
      bv(d);
    }
  }
}), O1 = "ion-last-focus", UL = () => import("./ios.transition-pVt467Op.js"), PL = () => import("./md.transition-DFjMGTKZ.js"), vT = zL(), hT = (c) => new Promise((u, d) => {
  RS(() => {
    HL(c), FL(c).then((y) => {
      y.animation && y.animation.destroy(), L1(c), u(y);
    }, (y) => {
      L1(c), d(y);
    });
  });
}), HL = (c) => {
  const u = c.enteringEl, d = c.leavingEl;
  vT.saveViewFocus(d), YL(u, d, c.direction), c.showGoBack ? u.classList.add("can-go-back") : u.classList.remove("can-go-back"), bS(u, !1), u.style.setProperty("pointer-events", "none"), d && (bS(d, !1), d.style.setProperty("pointer-events", "none"));
}, FL = async (c) => {
  const u = await jL(c);
  return u && MO.isBrowser ? VL(u, c) : IL(c);
}, L1 = (c) => {
  const u = c.enteringEl, d = c.leavingEl;
  u.classList.remove("ion-page-invisible"), u.style.removeProperty("pointer-events"), d !== void 0 && (d.classList.remove("ion-page-invisible"), d.style.removeProperty("pointer-events")), vT.setViewFocus(u);
}, jL = async (c) => !c.leavingEl || !c.animated || c.duration === 0 ? void 0 : c.animationBuilder ? c.animationBuilder : c.mode === "ios" ? (await UL()).iosTransitionAnimation : (await PL()).mdTransitionAnimation, VL = async (c, u) => {
  await mT(u, !0);
  const d = c(u.baseEl, u);
  yT(u.enteringEl, u.leavingEl);
  const y = await WL(d, u);
  return u.progressCallback && u.progressCallback(void 0), y && gT(u.enteringEl, u.leavingEl), {
    hasCompleted: y,
    animation: d
  };
}, IL = async (c) => {
  const u = c.enteringEl, d = c.leavingEl, y = Bl.get("focusManagerPriority", !1);
  return await mT(c, y), yT(u, d), gT(u, d), {
    hasCompleted: !0
  };
}, mT = async (c, u) => {
  (c.deepWait !== void 0 ? c.deepWait : u) && await Promise.all([gS(c.enteringEl), gS(c.leavingEl)]), await BL(c.viewIsReady, c.enteringEl);
}, BL = async (c, u) => {
  c && await c(u);
}, WL = (c, u) => {
  const d = u.progressCallback, y = new Promise((E) => {
    c.onFinish((T) => E(T === 1));
  });
  return d ? (c.progressStart(!0), d(c)) : c.play(), y;
}, yT = (c, u) => {
  Vl(u, dT), Vl(c, $L);
}, gT = (c, u) => {
  Vl(c, NL), Vl(u, pT);
}, Vl = (c, u) => {
  if (c) {
    const d = new CustomEvent(u, {
      bubbles: !1,
      cancelable: !1
    });
    c.dispatchEvent(d);
  }
}, gS = async (c) => {
  const u = c;
  if (u) {
    if (u.componentOnReady != null) {
      if (await u.componentOnReady() != null)
        return;
    } else if (u.__registerHost != null) {
      await new Promise((y) => cT(y));
      return;
    }
    await Promise.all(Array.from(u.children).map(gS));
  }
}, bS = (c, u) => {
  u ? (c.setAttribute("aria-hidden", "true"), c.classList.add("ion-page-hidden")) : (c.hidden = !1, c.removeAttribute("aria-hidden"), c.classList.remove("ion-page-hidden"));
}, YL = (c, u, d) => {
  c !== void 0 && (c.style.zIndex = d === "back" ? "99" : "101"), u !== void 0 && (u.style.zIndex = "100");
}, VA = (c) => {
  if (c.classList.contains("ion-page"))
    return c;
  const u = c.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
  return u || c;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ky = (c, u, d, y, E) => QL(c[1], u[1], d[1], y[1], E).map((T) => GL(c[0], u[0], d[0], y[0], T)), GL = (c, u, d, y, E) => {
  const T = 3 * u * Math.pow(E - 1, 2), g = -3 * d * E + 3 * d + y * E, _ = c * Math.pow(E - 1, 3);
  return E * (T + E * g) - _;
}, QL = (c, u, d, y, E) => (c -= E, u -= E, d -= E, y -= E, KL(y - 3 * d + 3 * u - c, 3 * d - 6 * u + 3 * c, 3 * u - 3 * c, c).filter((g) => g >= 0 && g <= 1)), qL = (c, u, d) => {
  const y = u * u - 4 * c * d;
  return y < 0 ? [] : [(-u + Math.sqrt(y)) / (2 * c), (-u - Math.sqrt(y)) / (2 * c)];
}, KL = (c, u, d, y) => {
  if (c === 0)
    return qL(u, d, y);
  u /= c, d /= c, y /= c;
  const E = (3 * d - u * u) / 3, T = (2 * u * u * u - 9 * u * d + 27 * y) / 27;
  if (E === 0)
    return [Math.pow(-T, 1 / 3)];
  if (T === 0)
    return [Math.sqrt(-E), -Math.sqrt(-E)];
  const g = Math.pow(T / 2, 2) + Math.pow(E / 3, 3);
  if (g === 0)
    return [Math.pow(T / 2, 1 / 2) - u / 3];
  if (g > 0)
    return [
      Math.pow(-(T / 2) + Math.sqrt(g), 1 / 3) - Math.pow(T / 2 + Math.sqrt(g), 1 / 3) - u / 3
    ];
  const _ = Math.sqrt(Math.pow(-(E / 3), 3)), x = Math.acos(-(T / (2 * Math.sqrt(Math.pow(-(E / 3), 3))))), L = 2 * Math.pow(_, 1 / 3);
  return [
    L * Math.cos(x / 3) - u / 3,
    L * Math.cos((x + 2 * Math.PI) / 3) - u / 3,
    L * Math.cos((x + 4 * Math.PI) / 3) - u / 3
  ];
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const XL = (c, u) => typeof c == "string" && c.length > 0 ? Object.assign({ "ion-color": !0, [`ion-color-${c}`]: !0 }, u) : u;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const bT = async (c, u, d, y, E, T) => {
  var g;
  if (c)
    return c.attachViewToDom(u, d, E, y);
  if (typeof d != "string" && !(d instanceof HTMLElement))
    throw new Error("framework delegate is missing");
  const _ = typeof d == "string" ? (g = u.ownerDocument) === null || g === void 0 ? void 0 : g.createElement(d) : d;
  return y && y.forEach((x) => _.classList.add(x)), E && Object.assign(_, E), u.appendChild(_), await new Promise((x) => sT(_, x)), _;
}, ZL = (c, u) => {
  if (u) {
    if (c) {
      const d = u.parentElement;
      return c.removeViewFromDom(d, u);
    }
    u.remove();
  }
  return Promise.resolve();
};
function Yl(c, u) {
  var d = {};
  for (var y in c) Object.prototype.hasOwnProperty.call(c, y) && u.indexOf(y) < 0 && (d[y] = c[y]);
  if (c != null && typeof Object.getOwnPropertySymbols == "function")
    for (var E = 0, y = Object.getOwnPropertySymbols(c); E < y.length; E++)
      u.indexOf(y[E]) < 0 && Object.prototype.propertyIsEnumerable.call(c, y[E]) && (d[y[E]] = c[y[E]]);
  return d;
}
var SS = { exports: {} }, ua = {}, by = { exports: {} }, iS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M1;
function JL() {
  return M1 || (M1 = 1, function(c) {
    function u(ce, Le) {
      var oe = ce.length;
      ce.push(Le);
      e: for (; 0 < oe; ) {
        var $ = oe - 1 >>> 1, q = ce[$];
        if (0 < E(q, Le)) ce[$] = Le, ce[oe] = q, oe = $;
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
          if (0 > E(Ge, oe)) ot < q && 0 > E(St, Ge) ? (ce[$] = St, ce[ot] = oe, $ = ot) : (ce[$] = Ge, ce[Te] = oe, $ = Te);
          else if (ot < q && 0 > E(St, oe)) ce[$] = St, ce[ot] = oe, $ = ot;
          else break e;
        }
      }
      return Le;
    }
    function E(ce, Le) {
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
          Le ? Fe() : (st = !1, ge = null);
        }
      } else st = !1;
    }
    var Fe;
    if (typeof ye == "function") Fe = function() {
      ye($t);
    };
    else if (typeof MessageChannel < "u") {
      var at = new MessageChannel(), gt = at.port2;
      at.port1.onmessage = $t, Fe = function() {
        gt.postMessage(null);
      };
    } else Fe = function() {
      Ce($t, 0);
    };
    function rt(ce) {
      ge = ce, st || (st = !0, Fe());
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
  }(iS)), iS;
}
var aS = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A1;
function eM() {
  return A1 || (A1 = 1, function(c) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var u = !1, d = !1, y = 5;
      function E(ve, Pe) {
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
        for (var jt = mt; jt > 0; ) {
          var Vt = jt - 1 >>> 1, Tn = ve[Vt];
          if (L(Tn, Pe) > 0)
            ve[Vt] = Pe, ve[jt] = Tn, jt = Vt;
          else
            return;
        }
      }
      function x(ve, Pe, mt) {
        for (var jt = mt, Vt = ve.length, Tn = Vt >>> 1; jt < Tn; ) {
          var vn = (jt + 1) * 2 - 1, or = ve[vn], Kt = vn + 1, hr = ve[Kt];
          if (L(or, Pe) < 0)
            Kt < Vt && L(hr, or) < 0 ? (ve[jt] = hr, ve[Kt] = Pe, jt = Kt) : (ve[jt] = or, ve[vn] = Pe, jt = vn);
          else if (Kt < Vt && L(hr, Pe) < 0)
            ve[jt] = hr, ve[Kt] = Pe, jt = Kt;
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
      var ut = 1073741823, Oe = -1, st = 250, ge = 5e3, nt = 1e4, _e = ut, xt = [], Ct = [], $t = 1, Fe = null, at = K, gt = !1, rt = !1, we = !1, ce = typeof setTimeout == "function" ? setTimeout : null, Le = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function $(ve) {
        for (var Pe = T(Ct); Pe !== null; ) {
          if (Pe.callback === null)
            g(Ct);
          else if (Pe.startTime <= ve)
            g(Ct), Pe.sortIndex = Pe.expirationTime, E(xt, Pe);
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
          var jt;
          if (!d) return Te(ve, Pe);
        } finally {
          Fe = null, at = mt, gt = !1;
        }
      }
      function Te(ve, Pe) {
        var mt = Pe;
        for ($(mt), Fe = T(xt); Fe !== null && !u && !(Fe.expirationTime > mt && (!ve || Dr())); ) {
          var jt = Fe.callback;
          if (typeof jt == "function") {
            Fe.callback = null, at = Fe.priorityLevel;
            var Vt = Fe.expirationTime <= mt, Tn = jt(Vt);
            mt = c.unstable_now(), typeof Tn == "function" ? Fe.callback = Tn : Fe === T(xt) && g(xt), $(mt);
          } else
            g(xt);
          Fe = T(xt);
        }
        if (Fe !== null)
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
        var jt = c.unstable_now(), Vt;
        if (typeof mt == "object" && mt !== null) {
          var Tn = mt.delay;
          typeof Tn == "number" && Tn > 0 ? Vt = jt + Tn : Vt = jt;
        } else
          Vt = jt;
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
        return Vt > jt ? (Kt.sortIndex = Vt, E(Ct, Kt), T(xt) === null && Kt === T(Ct) && (we ? qn() : we = !0, pn(q, Vt - jt))) : (Kt.sortIndex = or, E(xt, Kt), !rt && !gt && (rt = !0, Lr(Ne))), Kt;
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
        var Fr = new MessageChannel(), Qn = Fr.port2;
        Fr.port1.onmessage = Or, ar = function() {
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
      var jr = In, vr = null;
      c.unstable_IdlePriority = se, c.unstable_ImmediatePriority = P, c.unstable_LowPriority = B, c.unstable_NormalPriority = K, c.unstable_Profiling = vr, c.unstable_UserBlockingPriority = A, c.unstable_cancelCallback = rr, c.unstable_continueExecution = tn, c.unstable_forceFrameRate = ir, c.unstable_getCurrentPriorityLevel = dn, c.unstable_getFirstCallbackNode = nr, c.unstable_next = ot, c.unstable_pauseExecution = Tt, c.unstable_requestPaint = jr, c.unstable_runWithPriority = Ge, c.unstable_scheduleCallback = wt, c.unstable_shouldYield = Dr, c.unstable_wrapCallback = St, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(aS)), aS;
}
var $1;
function ST() {
  return $1 || ($1 = 1, process.env.NODE_ENV === "production" ? by.exports = JL() : by.exports = eM()), by.exports;
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
var N1;
function tM() {
  if (N1) return ua;
  N1 = 1;
  var c = Wl, u = ST();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var y = /* @__PURE__ */ new Set(), E = {};
  function T(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (E[n] = r, n = 0; n < r.length; n++) y.add(r[n]);
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
  var ut = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oe = Symbol.for("react.element"), st = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), nt = Symbol.for("react.strict_mode"), _e = Symbol.for("react.profiler"), xt = Symbol.for("react.provider"), Ct = Symbol.for("react.context"), $t = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), at = Symbol.for("react.suspense_list"), gt = Symbol.for("react.memo"), rt = Symbol.for("react.lazy"), we = Symbol.for("react.offscreen"), ce = Symbol.iterator;
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
      case Fe:
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
  function Fr(n, r) {
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
  var qn, jr = function(n) {
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
  function jt(n, r) {
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
    if (n = ws(n)) {
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
  function ja(n, r) {
    return n(r);
  }
  function bo() {
  }
  var ii = !1;
  function wa(n, r, o) {
    if (ii) return n(r, o);
    ii = !0;
    try {
      return ja(n, r, o);
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
  var V = u.unstable_scheduleCallback, de = u.unstable_cancelCallback, qe = u.unstable_shouldYield, Wt = u.unstable_requestPaint, ct = u.unstable_now, nn = u.unstable_getCurrentPriorityLevel, Rn = u.unstable_ImmediatePriority, _t = u.unstable_UserBlockingPriority, Fi = u.unstable_NormalPriority, So = u.unstable_LowPriority, Gl = u.unstable_IdlePriority, Eo = null, ai = null;
  function os(n) {
    if (ai && typeof ai.onCommitFiberRoot == "function") try {
      ai.onCommitFiberRoot(Eo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ir = Math.clz32 ? Math.clz32 : hc, ls = Math.log, us = Math.LN2;
  function hc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ls(n) / us | 0) | 0;
  }
  var Ql = 64, Co = 4194304;
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
  function ql() {
    var n = Ql;
    return Ql <<= 1, !(Ql & 4194240) && (Ql = 64), n;
  }
  function Kl(n) {
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
  function Xl(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nl, Zl, Nt, Jl, eu, pt = !1, rl = [], xn = null, oi = null, Wr = null, xo = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), Zt = [], mc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: h, targetContainers: [p] }, r !== null && (r = ws(r), r !== null && Zl(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
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
  function yc(n) {
    var r = Bi(n.target);
    if (r !== null) {
      var o = He(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = kt(o), r !== null) {
            n.blockedOn = r, eu(n.priority, function() {
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
      var o = nu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var s = new o.constructor(o.type, o);
        or = s, o.target.dispatchEvent(s), or = null;
      } else return r = ws(o), r !== null && Zl(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function ko(n, r, o) {
    Ia(n) && o.delete(r);
  }
  function gc() {
    pt = !1, xn !== null && Ia(xn) && (xn = null), oi !== null && Ia(oi) && (oi = null), Wr !== null && Ia(Wr) && (Wr = null), xo.forEach(ko), Ln.forEach(ko);
  }
  function ji(n, r) {
    n.blockedOn === r && (n.blockedOn = null, pt || (pt = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, gc)));
  }
  function _o(n) {
    function r(p) {
      return ji(p, n);
    }
    if (0 < rl.length) {
      ji(rl[0], n);
      for (var o = 1; o < rl.length; o++) {
        var s = rl[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (xn !== null && ji(xn, n), oi !== null && ji(oi, n), Wr !== null && ji(Wr, n), xo.forEach(r), Ln.forEach(r), o = 0; o < Zt.length; o++) s = Zt[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < Zt.length && (o = Zt[0], o.blockedOn === null); ) yc(o), o.blockedOn === null && Zt.shift();
  }
  var Ba = ut.ReactCurrentBatchConfig, Vi = !0;
  function tu(n, r, o, s) {
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
      var p = nu(n, r, o, s);
      if (p === null) kc(n, r, s, il, o), li(n, s);
      else if (Ra(p, n, r, o, s)) s.stopPropagation();
      else if (li(n, s), r & 4 && -1 < mc.indexOf(n)) {
        for (; p !== null; ) {
          var h = ws(p);
          if (h !== null && nl(h), h = nu(n, r, o, s), h === null && kc(n, r, s, il, o), h === p) break;
          p = h;
        }
        p !== null && s.stopPropagation();
      } else kc(n, r, s, null, o);
    }
  }
  var il = null;
  function nu(n, r, o, s) {
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
  function ss(n) {
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
          case Fi:
          case So:
            return 16;
          case Gl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var da = null, S = null, D = null;
  function Y() {
    if (D) return D;
    var n, r = S, o = r.length, s, p = "value" in da ? da.value : da.textContent, h = p.length;
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
  function Je() {
    return !1;
  }
  function be(n) {
    function r(o, s, p, h, C) {
      this._reactName = o, this._targetInst = p, this.type = s, this.nativeEvent = h, this.target = C, this.currentTarget = null;
      for (var k in n) n.hasOwnProperty(k) && (o = n[k], this[k] = o ? o(h) : h[k]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? fe : Je, this.isPropagationStopped = Je, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, Dt = be(Ze), Ft = oe({}, Ze, { view: 0, detail: 0 }), ln = be(Ft), rn, un, cn, zt = oe({}, Ft, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: bd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== cn && (cn && n.type === "mousemove" ? (rn = n.screenX - cn.screenX, un = n.screenY - cn.screenY) : un = rn = 0, cn = n), rn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : un;
  } }), Wa = be(zt), ru = oe({}, zt, { dataTransfer: 0 }), cs = be(ru), hd = oe({}, Ft, { relatedTarget: 0 }), pa = be(hd), fs = oe({}, Ze, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ds = be(fs), md = oe({}, Ze, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Ly = be(md), My = oe({}, Ze, { data: 0 }), yd = be(My), gd = {
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
  }, kv = {
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
  }, _v = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Dv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = _v[n]) ? !!r[n] : !1;
  }
  function bd() {
    return Dv;
  }
  var Ya = oe({}, Ft, { key: function(n) {
    if (n.key) {
      var r = gd[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = X(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? kv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: bd, charCode: function(n) {
    return n.type === "keypress" ? X(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? X(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ay = be(Ya), Sd = oe({}, zt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bc = be(Sd), Ed = oe({}, Ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: bd }), $y = be(Ed), Sc = oe({}, Ze, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ov = be(Sc), ui = oe({}, zt, {
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
  var Ec = _ && "TextEvent" in window && !al, Lv = _ && (!va || al && 8 < al && 11 >= al), iu = " ", Mv = !1;
  function Av(n, r) {
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
  function Cc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var au = !1;
  function Ny(n, r) {
    switch (n) {
      case "compositionend":
        return Cc(r);
      case "keypress":
        return r.which !== 32 ? null : (Mv = !0, iu);
      case "textInput":
        return n = r.data, n === iu && Mv ? null : n;
      default:
        return null;
    }
  }
  function zy(n, r) {
    if (au) return n === "compositionend" || !va && Av(n, r) ? (n = Y(), D = S = da = null, au = !1, n) : null;
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
        return Lv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var $v = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Nv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!$v[n.type] : r === "textarea";
  }
  function zv(n, r, o, s) {
    ri(s), r = Ss(r, "onChange"), 0 < r.length && (o = new Dt("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var ps = null, ou = null;
  function lu(n) {
    xc(n, 0);
  }
  function uu(n) {
    var r = cu(n);
    if (rr(r)) return n;
  }
  function Uv(n, r) {
    if (n === "change") return r;
  }
  var Cd = !1;
  if (_) {
    var wd;
    if (_) {
      var Td = "oninput" in document;
      if (!Td) {
        var Pv = document.createElement("div");
        Pv.setAttribute("oninput", "return;"), Td = typeof Pv.oninput == "function";
      }
      wd = Td;
    } else wd = !1;
    Cd = wd && (!document.documentMode || 9 < document.documentMode);
  }
  function Hv() {
    ps && (ps.detachEvent("onpropertychange", Fv), ou = ps = null);
  }
  function Fv(n) {
    if (n.propertyName === "value" && uu(ou)) {
      var r = [];
      zv(r, ou, n, Kt(n)), wa(lu, r);
    }
  }
  function Uy(n, r, o) {
    n === "focusin" ? (Hv(), ps = r, ou = o, ps.attachEvent("onpropertychange", Fv)) : n === "focusout" && Hv();
  }
  function Py(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return uu(ou);
  }
  function Hy(n, r) {
    if (n === "click") return uu(r);
  }
  function jv(n, r) {
    if (n === "input" || n === "change") return uu(r);
  }
  function Fy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ii = typeof Object.is == "function" ? Object.is : Fy;
  function vs(n, r) {
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
  function Vv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Iv(n, r) {
    var o = Vv(n);
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
      o = Vv(o);
    }
  }
  function Bv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Bv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function wc() {
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
  function Tc(n) {
    var r = wc(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Bv(o.ownerDocument.documentElement, o)) {
      if (s !== null && Qa(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, h = Math.min(s.start, p);
          s = s.end === void 0 ? h : Math.min(s.end, p), !n.extend && h > s && (p = s, s = h, h = p), p = Iv(o, h);
          var C = Iv(
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
  var Wv = _ && "documentMode" in document && 11 >= document.documentMode, ha = null, Rd = null, hs = null, xd = !1;
  function Yv(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    xd || ha == null || ha !== dn(s) || (s = ha, "selectionStart" in s && Qa(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), hs && vs(hs, s) || (hs = s, s = Ss(Rd, "onSelect"), 0 < s.length && (r = new Dt("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = ha)));
  }
  function Rc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var ol = { animationend: Rc("Animation", "AnimationEnd"), animationiteration: Rc("Animation", "AnimationIteration"), animationstart: Rc("Animation", "AnimationStart"), transitionend: Rc("Transition", "TransitionEnd") }, kd = {}, _d = {};
  _ && (_d = document.createElement("div").style, "AnimationEvent" in window || (delete ol.animationend.animation, delete ol.animationiteration.animation, delete ol.animationstart.animation), "TransitionEvent" in window || delete ol.transitionend.transition);
  function ur(n) {
    if (kd[n]) return kd[n];
    if (!ol[n]) return n;
    var r = ol[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in _d) return kd[n] = r[o];
    return n;
  }
  var Dd = ur("animationend"), Gv = ur("animationiteration"), Qv = ur("animationstart"), qv = ur("transitionend"), Kv = /* @__PURE__ */ new Map(), Xv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function qa(n, r) {
    Kv.set(n, r), T(r, [n]);
  }
  for (var ms = 0; ms < Xv.length; ms++) {
    var ll = Xv[ms], jy = ll.toLowerCase(), ys = ll[0].toUpperCase() + ll.slice(1);
    qa(jy, "on" + ys);
  }
  qa(Dd, "onAnimationEnd"), qa(Gv, "onAnimationIteration"), qa(Qv, "onAnimationStart"), qa("dblclick", "onDoubleClick"), qa("focusin", "onFocus"), qa("focusout", "onBlur"), qa(qv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), T("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), T("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), T("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Vy = new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));
  function Zv(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, le(s, r, void 0, n), n.currentTarget = null;
  }
  function xc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], p = s.event;
      s = s.listeners;
      e: {
        var h = void 0;
        if (r) for (var C = s.length - 1; 0 <= C; C--) {
          var k = s[C], M = k.instance, G = k.currentTarget;
          if (k = k.listener, M !== h && p.isPropagationStopped()) break e;
          Zv(p, k, G), h = M;
        }
        else for (C = 0; C < s.length; C++) {
          if (k = s[C], M = k.instance, G = k.currentTarget, k = k.listener, M !== h && p.isPropagationStopped()) break e;
          Zv(p, k, G), h = M;
        }
      }
    }
    if (Hi) throw n = xi, Hi = !1, xi = null, n;
  }
  function sn(n, r) {
    var o = r[zd];
    o === void 0 && (o = r[zd] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (Jv(r, n, 2, !1), o.add(s));
  }
  function Lo(n, r, o) {
    var s = 0;
    r && (s |= 4), Jv(o, n, s, r);
  }
  var Ka = "_reactListening" + Math.random().toString(36).slice(2);
  function su(n) {
    if (!n[Ka]) {
      n[Ka] = !0, y.forEach(function(o) {
        o !== "selectionchange" && (Vy.has(o) || Lo(o, !1, n), Lo(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ka] || (r[Ka] = !0, Lo("selectionchange", !1, r));
    }
  }
  function Jv(n, r, o, s) {
    switch (ss(r)) {
      case 1:
        var p = tu;
        break;
      case 4:
        p = Do;
        break;
      default:
        p = Oo;
    }
    o = p.bind(null, r, o, n), p = void 0, !Ar || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), s ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function kc(n, r, o, s, p) {
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
        var re = Kv.get(n);
        if (re !== void 0) {
          var Re = Dt, Me = n;
          switch (n) {
            case "keypress":
              if (X(o) === 0) break e;
            case "keydown":
            case "keyup":
              Re = Ay;
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
              Re = cs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Re = $y;
              break;
            case Dd:
            case Gv:
            case Qv:
              Re = ds;
              break;
            case qv:
              Re = Ov;
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
              Re = Ly;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Re = bc;
          }
          var ze = (r & 4) !== 0, jn = !ze && n === "scroll", H = ze ? re !== null ? re + "Capture" : null : re;
          ze = [];
          for (var z = G, I; z !== null; ) {
            I = z;
            var pe = I.stateNode;
            if (I.tag === 5 && pe !== null && (I = pe, H !== null && (pe = Mr(z, H), pe != null && ze.push(bs(z, pe, I)))), jn) break;
            z = z.return;
          }
          0 < ze.length && (re = new Re(re, Me, null, o, ie), ae.push({ event: re, listeners: ze }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (re = n === "mouseover" || n === "pointerover", Re = n === "mouseout" || n === "pointerout", re && o !== or && (Me = o.relatedTarget || o.fromElement) && (Bi(Me) || Me[Xa])) break e;
          if ((Re || re) && (re = ie.window === ie ? ie : (re = ie.ownerDocument) ? re.defaultView || re.parentWindow : window, Re ? (Me = o.relatedTarget || o.toElement, Re = G, Me = Me ? Bi(Me) : null, Me !== null && (jn = He(Me), Me !== jn || Me.tag !== 5 && Me.tag !== 6) && (Me = null)) : (Re = null, Me = G), Re !== Me)) {
            if (ze = Wa, pe = "onMouseLeave", H = "onMouseEnter", z = "mouse", (n === "pointerout" || n === "pointerover") && (ze = bc, pe = "onPointerLeave", H = "onPointerEnter", z = "pointer"), jn = Re == null ? re : cu(Re), I = Me == null ? re : cu(Me), re = new ze(pe, z + "leave", Re, o, ie), re.target = jn, re.relatedTarget = I, pe = null, Bi(ie) === G && (ze = new ze(H, z + "enter", Me, o, ie), ze.target = I, ze.relatedTarget = jn, pe = ze), jn = pe, Re && Me) t: {
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
            Re !== null && Od(ae, re, Re, ze, !1), Me !== null && jn !== null && Od(ae, jn, Me, ze, !0);
          }
        }
        e: {
          if (re = G ? cu(G) : window, Re = re.nodeName && re.nodeName.toLowerCase(), Re === "select" || Re === "input" && re.type === "file") var Ve = Uv;
          else if (Nv(re)) if (Cd) Ve = jv;
          else {
            Ve = Py;
            var et = Uy;
          }
          else (Re = re.nodeName) && Re.toLowerCase() === "input" && (re.type === "checkbox" || re.type === "radio") && (Ve = Hy);
          if (Ve && (Ve = Ve(n, G))) {
            zv(ae, Ve, o, ie);
            break e;
          }
          et && et(n, re, G), n === "focusout" && (et = re._wrapperState) && et.controlled && re.type === "number" && Dr(re, "number", re.value);
        }
        switch (et = G ? cu(G) : window, n) {
          case "focusin":
            (Nv(et) || et.contentEditable === "true") && (ha = et, Rd = G, hs = null);
            break;
          case "focusout":
            hs = Rd = ha = null;
            break;
          case "mousedown":
            xd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xd = !1, Yv(ae, o, ie);
            break;
          case "selectionchange":
            if (Wv) break;
          case "keydown":
          case "keyup":
            Yv(ae, o, ie);
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
        else au ? Av(n, o) && (it = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (it = "onCompositionStart");
        it && (Lv && o.locale !== "ko" && (au || it !== "onCompositionStart" ? it === "onCompositionEnd" && au && (Ae = Y()) : (da = ie, S = "value" in da ? da.value : da.textContent, au = !0)), et = Ss(G, it), 0 < et.length && (it = new yd(it, n, null, o, ie), ae.push({ event: it, listeners: et }), Ae ? it.data = Ae : (Ae = Cc(o), Ae !== null && (it.data = Ae)))), (Ae = Ec ? Ny(n, o) : zy(n, o)) && (G = Ss(G, "onBeforeInput"), 0 < G.length && (ie = new yd("onBeforeInput", "beforeinput", null, o, ie), ae.push({ event: ie, listeners: G }), ie.data = Ae));
      }
      xc(ae, r);
    });
  }
  function bs(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Ss(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var p = n, h = p.stateNode;
      p.tag === 5 && h !== null && (p = h, h = Mr(n, o), h != null && s.unshift(bs(n, h, p)), h = Mr(n, r), h != null && s.push(bs(n, h, p))), n = n.return;
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
      k.tag === 5 && G !== null && (k = G, p ? (M = Mr(o, h), M != null && C.unshift(bs(o, M, k))) : p || (M = Mr(o, h), M != null && C.push(bs(o, M, k)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Ld = /\r\n?/g, Iy = /\u0000|\uFFFD/g;
  function Md(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ld, `
`).replace(Iy, "");
  }
  function _c(n, r, o) {
    if (r = Md(r), Md(n) !== r && o) throw Error(d(425));
  }
  function Dc() {
  }
  var Ad = null, sl = null;
  function Es(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var cl = typeof setTimeout == "function" ? setTimeout : void 0, eh = typeof clearTimeout == "function" ? clearTimeout : void 0, $d = typeof Promise == "function" ? Promise : void 0, Nd = typeof queueMicrotask == "function" ? queueMicrotask : typeof $d < "u" ? function(n) {
    return $d.resolve(null).then(n).catch(By);
  } : cl;
  function By(n) {
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
  function Cs(n) {
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
  var Ao = Math.random().toString(36).slice(2), xa = "__reactFiber$" + Ao, fl = "__reactProps$" + Ao, Xa = "__reactContainer$" + Ao, zd = "__reactEvents$" + Ao, Wy = "__reactListeners$" + Ao, Ud = "__reactHandles$" + Ao;
  function Bi(n) {
    var r = n[xa];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Xa] || o[xa]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Cs(n); n !== null; ) {
          if (o = n[xa]) return o;
          n = Cs(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function ws(n) {
    return n = n[xa] || n[Xa], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function cu(n) {
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
  function Ts(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function") return o;
    s = s.getChildContext();
    for (var p in s) if (!(p in r)) throw Error(d(108, St(n) || "Unknown", p));
    return oe({}, o, s);
  }
  function Oc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ka, si = ft.current, Jt(ft, n), Jt(Mn, Mn.current), !0;
  }
  function th(n, r, o) {
    var s = n.stateNode;
    if (!s) throw Error(d(169));
    o ? (n = Ts(n, r, si), s.__reactInternalMemoizedMergedChildContext = n, Xt(Mn), Xt(ft), Jt(ft, n)) : Xt(Mn), Jt(Mn, o);
  }
  var ki = null, sr = !1, Rs = !1;
  function Pd(n) {
    ki === null ? ki = [n] : ki.push(n);
  }
  function Hd(n) {
    sr = !0, Pd(n);
  }
  function ci() {
    if (!Rs && ki !== null) {
      Rs = !0;
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
        Yt = r, Rs = !1;
      }
    }
    return null;
  }
  var zo = [], fi = 0, dl = null, fu = 0, di = [], Nr = 0, Gi = null, yr = 1, Za = "";
  function _i(n, r) {
    zo[fi++] = fu, zo[fi++] = dl, dl = n, fu = r;
  }
  function Fd(n, r, o) {
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
  function Lc(n) {
    n.return !== null && (_i(n, 1), Fd(n, 1, 0));
  }
  function jd(n) {
    for (; n === dl; ) dl = zo[--fi], zo[fi] = null, fu = zo[--fi], zo[fi] = null;
    for (; n === Gi; ) Gi = di[--Nr], di[Nr] = null, Za = di[--Nr], di[Nr] = null, yr = di[--Nr], di[Nr] = null;
  }
  var Di = null, pi = null, mn = !1, Qi = null;
  function Vd(n, r) {
    var o = na(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function nh(n, r) {
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
  function Mc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ac(n) {
    if (mn) {
      var r = pi;
      if (r) {
        var o = r;
        if (!nh(n, r)) {
          if (Mc(n)) throw Error(d(418));
          r = ma(o.nextSibling);
          var s = Di;
          r && nh(n, r) ? Vd(s, o) : (n.flags = n.flags & -4097 | 2, mn = !1, Di = n);
        }
      } else {
        if (Mc(n)) throw Error(d(418));
        n.flags = n.flags & -4097 | 2, mn = !1, Di = n;
      }
    }
  }
  function rh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Di = n;
  }
  function $c(n) {
    if (n !== Di) return !1;
    if (!mn) return rh(n), mn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Es(n.type, n.memoizedProps)), r && (r = pi)) {
      if (Mc(n)) throw ih(), Error(d(418));
      for (; r; ) Vd(n, r), r = ma(r.nextSibling);
    }
    if (rh(n), n.tag === 13) {
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
  function ih() {
    for (var n = pi; n; ) n = ma(n.nextSibling);
  }
  function kn() {
    pi = Di = null, mn = !1;
  }
  function Id(n) {
    Qi === null ? Qi = [n] : Qi.push(n);
  }
  var Nc = ut.ReactCurrentBatchConfig;
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
  function ah(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zc(n) {
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
      return z === null || z.tag !== 6 ? (z = Tf(I, H.mode, pe), z.return = H, z) : (z = p(z, I), z.return = H, z);
    }
    function M(H, z, I, pe) {
      var Ve = I.type;
      return Ve === ge ? ie(H, z, I.props.children, pe, I.key) : z !== null && (z.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === rt && ah(Ve) === z.type) ? (pe = p(z, I.props), pe.ref = pl(H, z, I), pe.return = H, pe) : (pe = Cf(I.type, I.key, I.props, null, H.mode, pe), pe.ref = pl(H, z, I), pe.return = H, pe);
    }
    function G(H, z, I, pe) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== I.containerInfo || z.stateNode.implementation !== I.implementation ? (z = Is(I, H.mode, pe), z.return = H, z) : (z = p(z, I.children || []), z.return = H, z);
    }
    function ie(H, z, I, pe, Ve) {
      return z === null || z.tag !== 7 ? (z = _l(I, H.mode, pe, Ve), z.return = H, z) : (z = p(z, I), z.return = H, z);
    }
    function ae(H, z, I) {
      if (typeof z == "string" && z !== "" || typeof z == "number") return z = Tf("" + z, H.mode, I), z.return = H, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Oe:
            return I = Cf(z.type, z.key, z.props, null, H.mode, I), I.ref = pl(H, null, z), I.return = H, I;
          case st:
            return z = Is(z, H.mode, I), z.return = H, z;
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
            var et = pe._init;
            return Re(H, z, I, et(pe._payload), Ve);
        }
        if (In(pe) || Le(pe)) return H = H.get(I) || null, ie(z, H, pe, Ve, null);
        _a(z, pe);
      }
      return null;
    }
    function Me(H, z, I, pe) {
      for (var Ve = null, et = null, Ae = z, it = z = 0, er = null; Ae !== null && it < I.length; it++) {
        Ae.index > it ? (er = Ae, Ae = null) : er = Ae.sibling;
        var Gt = re(H, Ae, I[it], pe);
        if (Gt === null) {
          Ae === null && (Ae = er);
          break;
        }
        n && Ae && Gt.alternate === null && r(H, Ae), z = h(Gt, z, it), et === null ? Ve = Gt : et.sibling = Gt, et = Gt, Ae = er;
      }
      if (it === I.length) return o(H, Ae), mn && _i(H, it), Ve;
      if (Ae === null) {
        for (; it < I.length; it++) Ae = ae(H, I[it], pe), Ae !== null && (z = h(Ae, z, it), et === null ? Ve = Ae : et.sibling = Ae, et = Ae);
        return mn && _i(H, it), Ve;
      }
      for (Ae = s(H, Ae); it < I.length; it++) er = Re(Ae, H, it, I[it], pe), er !== null && (n && er.alternate !== null && Ae.delete(er.key === null ? it : er.key), z = h(er, z, it), et === null ? Ve = er : et.sibling = er, et = er);
      return n && Ae.forEach(function(ao) {
        return r(H, ao);
      }), mn && _i(H, it), Ve;
    }
    function ze(H, z, I, pe) {
      var Ve = Le(I);
      if (typeof Ve != "function") throw Error(d(150));
      if (I = Ve.call(I), I == null) throw Error(d(151));
      for (var et = Ve = null, Ae = z, it = z = 0, er = null, Gt = I.next(); Ae !== null && !Gt.done; it++, Gt = I.next()) {
        Ae.index > it ? (er = Ae, Ae = null) : er = Ae.sibling;
        var ao = re(H, Ae, Gt.value, pe);
        if (ao === null) {
          Ae === null && (Ae = er);
          break;
        }
        n && Ae && ao.alternate === null && r(H, Ae), z = h(ao, z, it), et === null ? Ve = ao : et.sibling = ao, et = ao, Ae = er;
      }
      if (Gt.done) return o(
        H,
        Ae
      ), mn && _i(H, it), Ve;
      if (Ae === null) {
        for (; !Gt.done; it++, Gt = I.next()) Gt = ae(H, Gt.value, pe), Gt !== null && (z = h(Gt, z, it), et === null ? Ve = Gt : et.sibling = Gt, et = Gt);
        return mn && _i(H, it), Ve;
      }
      for (Ae = s(H, Ae); !Gt.done; it++, Gt = I.next()) Gt = Re(Ae, H, it, Gt.value, pe), Gt !== null && (n && Gt.alternate !== null && Ae.delete(Gt.key === null ? it : Gt.key), z = h(Gt, z, it), et === null ? Ve = Gt : et.sibling = Gt, et = Gt);
      return n && Ae.forEach(function(sg) {
        return r(H, sg);
      }), mn && _i(H, it), Ve;
    }
    function jn(H, z, I, pe) {
      if (typeof I == "object" && I !== null && I.type === ge && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Oe:
            e: {
              for (var Ve = I.key, et = z; et !== null; ) {
                if (et.key === Ve) {
                  if (Ve = I.type, Ve === ge) {
                    if (et.tag === 7) {
                      o(H, et.sibling), z = p(et, I.props.children), z.return = H, H = z;
                      break e;
                    }
                  } else if (et.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === rt && ah(Ve) === et.type) {
                    o(H, et.sibling), z = p(et, I.props), z.ref = pl(H, et, I), z.return = H, H = z;
                    break e;
                  }
                  o(H, et);
                  break;
                } else r(H, et);
                et = et.sibling;
              }
              I.type === ge ? (z = _l(I.props.children, H.mode, pe, I.key), z.return = H, H = z) : (pe = Cf(I.type, I.key, I.props, null, H.mode, pe), pe.ref = pl(H, z, I), pe.return = H, H = pe);
            }
            return C(H);
          case st:
            e: {
              for (et = I.key; z !== null; ) {
                if (z.key === et) if (z.tag === 4 && z.stateNode.containerInfo === I.containerInfo && z.stateNode.implementation === I.implementation) {
                  o(H, z.sibling), z = p(z, I.children || []), z.return = H, H = z;
                  break e;
                } else {
                  o(H, z);
                  break;
                }
                else r(H, z);
                z = z.sibling;
              }
              z = Is(I, H.mode, pe), z.return = H, H = z;
            }
            return C(H);
          case rt:
            return et = I._init, jn(H, z, et(I._payload), pe);
        }
        if (In(I)) return Me(H, z, I, pe);
        if (Le(I)) return ze(H, z, I, pe);
        _a(H, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, z !== null && z.tag === 6 ? (o(H, z.sibling), z = p(z, I), z.return = H, H = z) : (o(H, z), z = Tf(I, H.mode, pe), z.return = H, H = z), C(H)) : o(H, z);
    }
    return jn;
  }
  var du = zc(!0), oh = zc(!1), Ja = Et(null), Kn = null, he = null, qi = null;
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
  function pu(n, r) {
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
  function lh(n, r, o, s) {
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
  function Uc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function vu(n, r) {
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
  function Pc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Ta(n, o);
    }
  }
  function uh(n, r) {
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
  function Hc(n, r, o, s) {
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
  function sh(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var s = n[r], p = s.callback;
      if (p !== null) {
        if (s.callback = null, s = o, typeof p != "function") throw Error(d(191, p));
        p.call(s);
      }
    }
  }
  var xs = {}, ya = Et(xs), hu = Et(xs), ks = Et(xs);
  function hl(n) {
    if (n === xs) throw Error(d(174));
    return n;
  }
  function Yd(n, r) {
    switch (Jt(ks, r), Jt(hu, n), Jt(ya, xs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : pn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = pn(r, n);
    }
    Xt(ya), Jt(ya, r);
  }
  function mu() {
    Xt(ya), Xt(hu), Xt(ks);
  }
  function ch(n) {
    hl(ks.current);
    var r = hl(ya.current), o = pn(r, n.type);
    r !== o && (Jt(hu, n), Jt(ya, o));
  }
  function Gd(n) {
    hu.current === n && (Xt(ya), Xt(hu));
  }
  var En = Et(0);
  function Fc(n) {
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
  var Vc = ut.ReactCurrentDispatcher, _s = ut.ReactCurrentBatchConfig, je = 0, Ie = null, dt = null, Ot = null, Li = !1, yu = !1, Ds = 0, Yy = 0;
  function zr() {
    throw Error(d(321));
  }
  function Os(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!Ii(n[o], r[o])) return !1;
    return !0;
  }
  function te(n, r, o, s, p, h) {
    if (je = h, Ie = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Vc.current = n === null || n.memoizedState === null ? Gy : fn, n = o(s, p), yu) {
      h = 0;
      do {
        if (yu = !1, Ds = 0, 25 <= h) throw Error(d(301));
        h += 1, Ot = dt = null, r.updateQueue = null, Vc.current = rf, n = o(s, p);
      } while (yu);
    }
    if (Vc.current = Ur, r = dt !== null && dt.next !== null, je = 0, Ot = dt = Ie = null, Li = !1, r) throw Error(d(300));
    return n;
  }
  function Yn() {
    var n = Ds !== 0;
    return Ds = 0, n;
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
        if ((je & ie) === ie) M !== null && (M = M.next = { lane: 0, action: G.action, hasEagerState: G.hasEagerState, eagerState: G.eagerState, next: null }), s = G.hasEagerState ? G.eagerState : n(s, G.action);
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
  function gu() {
  }
  function ml(n, r) {
    var o = Ie, s = gr(), p = r(), h = !Ii(s.memoizedState, p);
    if (h && (s.memoizedState = p, mi = !0), s = s.queue, Ls(Bc.bind(null, o, s, n), [n]), s.getSnapshot !== r || h || Ot !== null && Ot.memoizedState.tag & 1) {
      if (o.flags |= 2048, yl(9, Ic.bind(null, o, s, p, r), void 0, null), $n === null) throw Error(d(349));
      je & 30 || bu(o, r, p);
    }
    return p;
  }
  function bu(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Ie.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ie.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Ic(n, r, o, s) {
    r.value = o, r.getSnapshot = s, Wc(r) && Yc(n);
  }
  function Bc(n, r, o) {
    return o(function() {
      Wc(r) && Yc(n);
    });
  }
  function Wc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Ii(n, o);
    } catch {
      return !0;
    }
  }
  function Yc(n) {
    var r = eo(n, 1);
    r !== null && _n(r, n, 1, -1);
  }
  function Gc(n) {
    var r = Ye();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Mi, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ms.bind(null, Ie, n), [r.memoizedState, n];
  }
  function yl(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = Ie.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ie.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function Qc() {
    return gr().memoizedState;
  }
  function Su(n, r, o, s) {
    var p = Ye();
    Ie.flags |= n, p.memoizedState = yl(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function Eu(n, r, o, s) {
    var p = gr();
    s = s === void 0 ? null : s;
    var h = void 0;
    if (dt !== null) {
      var C = dt.memoizedState;
      if (h = C.destroy, s !== null && Os(s, C.deps)) {
        p.memoizedState = yl(r, o, h, s);
        return;
      }
    }
    Ie.flags |= n, p.memoizedState = yl(1 | r, o, h, s);
  }
  function qc(n, r) {
    return Su(8390656, 8, n, r);
  }
  function Ls(n, r) {
    return Eu(2048, 8, n, r);
  }
  function Kc(n, r) {
    return Eu(4, 2, n, r);
  }
  function Xc(n, r) {
    return Eu(4, 4, n, r);
  }
  function Zc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Jc(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Eu(4, 4, Zc.bind(null, r, n), o);
  }
  function Cu() {
  }
  function gl(n, r) {
    var o = gr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Os(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function ef(n, r) {
    var o = gr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Os(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function tf(n, r, o) {
    return je & 21 ? (Ii(o, r) || (o = ql(), Ie.lanes |= o, Tl |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, mi = !0), n.memoizedState = o);
  }
  function qd(n, r) {
    var o = Yt;
    Yt = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = _s.transition;
    _s.transition = {};
    try {
      n(!1), r();
    } finally {
      Yt = o, _s.transition = s;
    }
  }
  function nf() {
    return gr().memoizedState;
  }
  function fh(n, r, o) {
    var s = io(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, Kd(n)) wu(r, o);
    else if (o = lh(n, r, o, s), o !== null) {
      var p = dr();
      _n(o, n, s, p), Ho(o, r, s);
    }
  }
  function Ms(n, r, o) {
    var s = io(n), p = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Kd(n)) wu(r, p);
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
      o = lh(n, r, p, s), o !== null && (p = dr(), _n(o, n, s, p), Ho(o, r, s));
    }
  }
  function Kd(n) {
    var r = n.alternate;
    return n === Ie || r !== null && r === Ie;
  }
  function wu(n, r) {
    yu = Li = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Ho(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Ta(n, o);
    }
  }
  var Ur = { readContext: Ki, useCallback: zr, useContext: zr, useEffect: zr, useImperativeHandle: zr, useInsertionEffect: zr, useLayoutEffect: zr, useMemo: zr, useReducer: zr, useRef: zr, useState: zr, useDebugValue: zr, useDeferredValue: zr, useTransition: zr, useMutableSource: zr, useSyncExternalStore: zr, useId: zr, unstable_isNewReconciler: !1 }, Gy = { readContext: Ki, useCallback: function(n, r) {
    return Ye().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ki, useEffect: qc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Su(
      4194308,
      4,
      Zc.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Su(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Su(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Ye();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = Ye();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = fh.bind(null, Ie, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = Ye();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Gc, useDebugValue: Cu, useDeferredValue: function(n) {
    return Ye().memoizedState = n;
  }, useTransition: function() {
    var n = Gc(!1), r = n[0];
    return n = qd.bind(null, n[1]), Ye().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = Ie, p = Ye();
    if (mn) {
      if (o === void 0) throw Error(d(407));
      o = o();
    } else {
      if (o = r(), $n === null) throw Error(d(349));
      je & 30 || bu(s, r, o);
    }
    p.memoizedState = o;
    var h = { value: o, getSnapshot: r };
    return p.queue = h, qc(Bc.bind(
      null,
      s,
      h,
      n
    ), [n]), s.flags |= 2048, yl(9, Ic.bind(null, s, h, o, r), void 0, null), o;
  }, useId: function() {
    var n = Ye(), r = $n.identifierPrefix;
    if (mn) {
      var o = Za, s = yr;
      o = (s & ~(1 << 32 - Ir(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ds++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = Yy++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, fn = {
    readContext: Ki,
    useCallback: gl,
    useContext: Ki,
    useEffect: Ls,
    useImperativeHandle: Jc,
    useInsertionEffect: Kc,
    useLayoutEffect: Xc,
    useMemo: ef,
    useReducer: to,
    useRef: Qc,
    useState: function() {
      return to(Mi);
    },
    useDebugValue: Cu,
    useDeferredValue: function(n) {
      var r = gr();
      return tf(r, dt.memoizedState, n);
    },
    useTransition: function() {
      var n = to(Mi)[0], r = gr().memoizedState;
      return [n, r];
    },
    useMutableSource: gu,
    useSyncExternalStore: ml,
    useId: nf,
    unstable_isNewReconciler: !1
  }, rf = { readContext: Ki, useCallback: gl, useContext: Ki, useEffect: Ls, useImperativeHandle: Jc, useInsertionEffect: Kc, useLayoutEffect: Xc, useMemo: ef, useReducer: Xi, useRef: Qc, useState: function() {
    return Xi(Mi);
  }, useDebugValue: Cu, useDeferredValue: function(n) {
    var r = gr();
    return dt === null ? r.memoizedState = n : tf(r, dt.memoizedState, n);
  }, useTransition: function() {
    var n = Xi(Mi)[0], r = gr().memoizedState;
    return [n, r];
  }, useMutableSource: gu, useSyncExternalStore: ml, useId: nf, unstable_isNewReconciler: !1 };
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
    h.payload = r, o != null && (h.callback = o), r = Po(n, h, p), r !== null && (_n(r, n, p, s), Pc(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = dr(), p = io(n), h = vi(s, p);
    h.tag = 1, h.payload = r, o != null && (h.callback = o), r = Po(n, h, p), r !== null && (_n(r, n, p, s), Pc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = dr(), s = io(n), p = vi(o, s);
    p.tag = 2, r != null && (p.callback = r), r = Po(n, p, s), r !== null && (_n(r, n, s, o), Pc(r, n, s));
  } };
  function dh(n, r, o, s, p, h, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, h, C) : r.prototype && r.prototype.isPureReactComponent ? !vs(o, s) || !vs(p, h) : !0;
  }
  function ph(n, r, o) {
    var s = !1, p = ka, h = r.contextType;
    return typeof h == "object" && h !== null ? h = Ki(h) : (p = Sn(r) ? si : ft.current, s = r.contextTypes, h = (s = s != null) ? Wi(n, p) : ka), r = new r(o, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Sl, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function vh(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && Sl.enqueueReplaceState(r, r.state, null);
  }
  function Xd(n, r, o, s) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = {}, Uc(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? p.context = Ki(h) : (h = Sn(r) ? si : ft.current, p.context = Wi(n, h)), p.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (bl(n, r, h, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && Sl.enqueueReplaceState(p, p.state, null), Hc(n, o, p, s), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Fo(n, r) {
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
  function As(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var hh = typeof WeakMap == "function" ? WeakMap : Map;
  function mh(n, r, o) {
    o = vi(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      mf || (mf = !0, lp = s), As(n, r);
    }, o;
  }
  function yh(n, r, o) {
    o = vi(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var p = r.value;
      o.payload = function() {
        return s(p);
      }, o.callback = function() {
        As(n, r);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (o.callback = function() {
      As(n, r), typeof s != "function" && (ea === null ? ea = /* @__PURE__ */ new Set([this]) : ea.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function $s(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new hh();
      var p = /* @__PURE__ */ new Set();
      s.set(r, p);
    } else p = s.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), s.set(r, p));
    p.has(o) || (p.add(o), n = rg.bind(null, n, r, o), r.then(n, n));
  }
  function gh(n) {
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
  var bh = ut.ReactCurrentOwner, mi = !1;
  function Hn(n, r, o, s) {
    r.child = n === null ? oh(r, null, o, s) : du(r, n.child, o, s);
  }
  function Tu(n, r, o, s, p) {
    o = o.render;
    var h = r.ref;
    return pu(r, p), s = te(n, r, o, s, h, p), o = Yn(), n !== null && !mi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Fn(n, r, p)) : (mn && o && Lc(r), r.flags |= 1, Hn(n, r, s, p), r.child);
  }
  function jo(n, r, o, s, p) {
    if (n === null) {
      var h = o.type;
      return typeof h == "function" && !dp(h) && h.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = h, af(n, r, h, s, p)) : (n = Cf(o.type, null, s, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & p)) {
      var C = h.memoizedProps;
      if (o = o.compare, o = o !== null ? o : vs, o(C, s) && n.ref === r.ref) return Fn(n, r, p);
    }
    return r.flags |= 1, n = Bo(h, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function af(n, r, o, s, p) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (vs(h, s) && n.ref === r.ref) if (mi = !1, r.pendingProps = s = h, (n.lanes & p) !== 0) n.flags & 131072 && (mi = !0);
      else return r.lanes = n.lanes, Fn(n, r, p);
    }
    return bt(n, r, o, s, p);
  }
  function yi(n, r, o) {
    var s = r.pendingProps, p = s.children, h = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Jt($u, gi), gi |= o;
    else {
      if (!(o & 1073741824)) return n = h !== null ? h.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Jt($u, gi), gi |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = h !== null ? h.baseLanes : o, Jt($u, gi), gi |= s;
    }
    else h !== null ? (s = h.baseLanes | o, r.memoizedState = null) : s = o, Jt($u, gi), gi |= s;
    return Hn(n, r, p, o), r.child;
  }
  function El(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function bt(n, r, o, s, p) {
    var h = Sn(o) ? si : ft.current;
    return h = Wi(r, h), pu(r, p), o = te(n, r, o, s, h, p), s = Yn(), n !== null && !mi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Fn(n, r, p)) : (mn && s && Lc(r), r.flags |= 1, Hn(n, r, o, p), r.child);
  }
  function Ns(n, r, o, s, p) {
    if (Sn(o)) {
      var h = !0;
      Oc(r);
    } else h = !1;
    if (pu(r, p), r.stateNode === null) Us(n, r), ph(r, o, s), Xd(r, o, s, p), s = !0;
    else if (n === null) {
      var C = r.stateNode, k = r.memoizedProps;
      C.props = k;
      var M = C.context, G = o.contextType;
      typeof G == "object" && G !== null ? G = Ki(G) : (G = Sn(o) ? si : ft.current, G = Wi(r, G));
      var ie = o.getDerivedStateFromProps, ae = typeof ie == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      ae || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (k !== s || M !== G) && vh(r, C, s, G), Uo = !1;
      var re = r.memoizedState;
      C.state = re, Hc(r, s, C, p), M = r.memoizedState, k !== s || re !== M || Mn.current || Uo ? (typeof ie == "function" && (bl(r, o, ie, s), M = r.memoizedState), (k = Uo || dh(r, o, k, s, re, M, G)) ? (ae || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = M), C.props = s, C.state = M, C.context = G, s = k) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      C = r.stateNode, vu(n, r), k = r.memoizedProps, G = r.type === r.elementType ? k : hi(r.type, k), C.props = G, ae = r.pendingProps, re = C.context, M = o.contextType, typeof M == "object" && M !== null ? M = Ki(M) : (M = Sn(o) ? si : ft.current, M = Wi(r, M));
      var Re = o.getDerivedStateFromProps;
      (ie = typeof Re == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (k !== ae || re !== M) && vh(r, C, s, M), Uo = !1, re = r.memoizedState, C.state = re, Hc(r, s, C, p);
      var Me = r.memoizedState;
      k !== ae || re !== Me || Mn.current || Uo ? (typeof Re == "function" && (bl(r, o, Re, s), Me = r.memoizedState), (G = Uo || dh(r, o, G, s, re, Me, M) || !1) ? (ie || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(s, Me, M), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(s, Me, M)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || k === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = Me), C.props = s, C.state = Me, C.context = M, s = G) : (typeof C.componentDidUpdate != "function" || k === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return of(n, r, o, s, h, p);
  }
  function of(n, r, o, s, p, h) {
    El(n, r);
    var C = (r.flags & 128) !== 0;
    if (!s && !C) return p && th(r, o, !1), Fn(n, r, h);
    s = r.stateNode, bh.current = r;
    var k = C && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && C ? (r.child = du(r, n.child, null, h), r.child = du(r, null, k, h)) : Hn(n, r, k, h), r.memoizedState = s.state, p && th(r, o, !0), r.child;
  }
  function Qy(n) {
    var r = n.stateNode;
    r.pendingContext ? No(n, r.pendingContext, r.pendingContext !== r.context) : r.context && No(n, r.context, !1), Yd(n, r.containerInfo);
  }
  function Sh(n, r, o, s, p) {
    return kn(), Id(p), r.flags |= 256, Hn(n, r, o, s), r.child;
  }
  var zs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cl(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Eh(n, r, o) {
    var s = r.pendingProps, p = En.current, h = !1, C = (r.flags & 128) !== 0, k;
    if ((k = C) || (k = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), k ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), Jt(En, p & 1), n === null)
      return Ac(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = s.children, n = s.fallback, h ? (s = r.mode, h = r.child, C = { mode: "hidden", children: C }, !(s & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = C) : h = wf(C, s, 0, null), n = _l(n, s, o, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = Cl(o), r.memoizedState = zs, n) : lf(r, C));
    if (p = n.memoizedState, p !== null && (k = p.dehydrated, k !== null)) return ep(n, r, C, s, k, p, o);
    if (h) {
      h = s.fallback, C = r.mode, p = n.child, k = p.sibling;
      var M = { mode: "hidden", children: s.children };
      return !(C & 1) && r.child !== p ? (s = r.child, s.childLanes = 0, s.pendingProps = M, r.deletions = null) : (s = Bo(p, M), s.subtreeFlags = p.subtreeFlags & 14680064), k !== null ? h = Bo(k, h) : (h = _l(h, C, o, null), h.flags |= 2), h.return = r, s.return = r, s.sibling = h, r.child = s, s = h, h = r.child, C = n.child.memoizedState, C = C === null ? Cl(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, h.memoizedState = C, h.childLanes = n.childLanes & ~o, r.memoizedState = zs, s;
    }
    return h = n.child, n = h.sibling, s = Bo(h, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function lf(n, r) {
    return r = wf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function uf(n, r, o, s) {
    return s !== null && Id(s), du(r, n.child, null, o), n = lf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ep(n, r, o, s, p, h, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = Zd(Error(d(422))), uf(n, r, C, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = s.fallback, p = r.mode, s = wf({ mode: "visible", children: s.children }, p, 0, null), h = _l(h, p, C, null), h.flags |= 2, s.return = r, h.return = r, s.sibling = h, r.child = s, r.mode & 1 && du(r, n.child, null, C), r.child.memoizedState = Cl(C), r.memoizedState = zs, h);
    if (!(r.mode & 1)) return uf(n, r, C, null);
    if (p.data === "$!") {
      if (s = p.nextSibling && p.nextSibling.dataset, s) var k = s.dgst;
      return s = k, h = Error(d(419)), s = Zd(h, s, void 0), uf(n, r, C, s);
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
      return Vs(), s = Zd(Error(d(421))), uf(n, r, C, s);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = fp.bind(null, n), p._reactRetry = r, null) : (n = h.treeContext, pi = ma(p.nextSibling), Di = r, mn = !0, Qi = null, n !== null && (di[Nr++] = yr, di[Nr++] = Za, di[Nr++] = Gi, yr = n.id, Za = n.overflow, Gi = r), r = lf(r, s.children), r.flags |= 4096, r);
  }
  function Ch(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), Wd(n.return, r, o);
  }
  function sf(n, r, o, s, p) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: p } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = s, h.tail = o, h.tailMode = p);
  }
  function tp(n, r, o) {
    var s = r.pendingProps, p = s.revealOrder, h = s.tail;
    if (Hn(n, r, s.children, o), s = En.current, s & 2) s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ch(n, o, r);
        else if (n.tag === 19) Ch(n, o, r);
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
        for (o = r.child, p = null; o !== null; ) n = o.alternate, n !== null && Fc(n) === null && (p = o), o = o.sibling;
        o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), sf(r, !1, p, o, h);
        break;
      case "backwards":
        for (o = null, p = r.child, r.child = null; p !== null; ) {
          if (n = p.alternate, n !== null && Fc(n) === null) {
            r.child = p;
            break;
          }
          n = p.sibling, p.sibling = o, o = p, p = n;
        }
        sf(r, !0, o, null, h);
        break;
      case "together":
        sf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Us(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Fn(n, r, o) {
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
        Qy(r), kn();
        break;
      case 5:
        ch(r);
        break;
      case 1:
        Sn(r.type) && Oc(r);
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
          return s.dehydrated !== null ? (Jt(En, En.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Eh(n, r, o) : (Jt(En, En.current & 1), n = Fn(n, r, o), n !== null ? n.sibling : null);
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
    return Fn(n, r, o);
  }
  var Da, Ru, xu, Zi;
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
  }, Ru = function() {
  }, xu = function(n, r, o, s) {
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
          typeof p.onClick != "function" && typeof s.onClick == "function" && (n.onclick = Dc);
      }
      Tn(o, s);
      var C;
      o = null;
      for (G in p) if (!s.hasOwnProperty(G) && p.hasOwnProperty(G) && p[G] != null) if (G === "style") {
        var k = p[G];
        for (C in k) k.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
      } else G !== "dangerouslySetInnerHTML" && G !== "children" && G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && G !== "autoFocus" && (E.hasOwnProperty(G) ? h || (h = []) : (h = h || []).push(G, null));
      for (G in s) {
        var M = s[G];
        if (k = p != null ? p[G] : void 0, s.hasOwnProperty(G) && M !== k && (M != null || k != null)) if (G === "style") if (k) {
          for (C in k) !k.hasOwnProperty(C) || M && M.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
          for (C in M) M.hasOwnProperty(C) && k[C] !== M[C] && (o || (o = {}), o[C] = M[C]);
        } else o || (h || (h = []), h.push(
          G,
          o
        )), o = M;
        else G === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, k = k ? k.__html : void 0, M != null && k !== M && (h = h || []).push(G, M)) : G === "children" ? typeof M != "string" && typeof M != "number" || (h = h || []).push(G, "" + M) : G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && (E.hasOwnProperty(G) ? (M != null && G === "onScroll" && sn("scroll", n), h || k === M || (h = [])) : (h = h || []).push(G, M));
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
  function qy(n, r, o) {
    var s = r.pendingProps;
    switch (jd(r), r.tag) {
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
        return s = r.stateNode, mu(), Xt(Mn), Xt(ft), Qd(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && ($c(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Qi !== null && (up(Qi), Qi = null))), Ru(n, r), Pr(r), null;
      case 5:
        Gd(r);
        var p = hl(ks.current);
        if (o = r.type, n !== null && r.stateNode != null) xu(n, r, o, s, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null) throw Error(d(166));
            return Pr(r), null;
          }
          if (n = hl(ya.current), $c(r)) {
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
                for (p = 0; p < gs.length; p++) sn(gs[p], s);
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
              C === "children" ? typeof k == "string" ? s.textContent !== k && (h.suppressHydrationWarning !== !0 && _c(s.textContent, k, n), p = ["children", k]) : typeof k == "number" && s.textContent !== "" + k && (h.suppressHydrationWarning !== !0 && _c(
                s.textContent,
                k,
                n
              ), p = ["children", "" + k]) : E.hasOwnProperty(C) && k != null && C === "onScroll" && sn("scroll", s);
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
                typeof h.onClick == "function" && (s.onclick = Dc);
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
                  for (p = 0; p < gs.length; p++) sn(gs[p], n);
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
                h === "style" ? jt(n, M) : h === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, M != null && jr(n, M)) : h === "children" ? typeof M == "string" ? (o !== "textarea" || M !== "") && vr(n, M) : typeof M == "number" && vr(n, "" + M) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (E.hasOwnProperty(h) ? M != null && h === "onScroll" && sn("scroll", n) : M != null && Ue(n, h, M, C));
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
                  typeof p.onClick == "function" && (n.onclick = Dc);
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
          if (o = hl(ks.current), hl(ya.current), $c(r)) {
            if (s = r.stateNode, o = r.memoizedProps, s[xa] = r, (h = s.nodeValue !== o) && (n = Di, n !== null)) switch (n.tag) {
              case 3:
                _c(s.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && _c(s.nodeValue, o, (n.mode & 1) !== 0);
            }
            h && (r.flags |= 4);
          } else s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[xa] = r, r.stateNode = s;
        }
        return Pr(r), null;
      case 13:
        if (Xt(En), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (mn && pi !== null && r.mode & 1 && !(r.flags & 128)) ih(), kn(), r.flags |= 98560, h = !1;
          else if (h = $c(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!h) throw Error(d(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(d(317));
              h[xa] = r;
            } else kn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Pr(r), h = !1;
          } else Qi !== null && (up(Qi), Qi = null), h = !0;
          if (!h) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || En.current & 1 ? Zn === 0 && (Zn = 3) : Vs())), r.updateQueue !== null && (r.flags |= 4), Pr(r), null);
      case 4:
        return mu(), Ru(n, r), n === null && su(r.stateNode.containerInfo), Pr(r), null;
      case 10:
        return Bd(r.type._context), Pr(r), null;
      case 17:
        return Sn(r.type) && Yi(), Pr(r), null;
      case 19:
        if (Xt(En), h = r.memoizedState, h === null) return Pr(r), null;
        if (s = (r.flags & 128) !== 0, C = h.rendering, C === null) if (s) An(h, !1);
        else {
          if (Zn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (C = Fc(n), C !== null) {
              for (r.flags |= 128, An(h, !1), s = C.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; ) h = o, n = s, h.flags &= 14680066, C = h.alternate, C === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = C.childLanes, h.lanes = C.lanes, h.child = C.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = C.memoizedProps, h.memoizedState = C.memoizedState, h.updateQueue = C.updateQueue, h.type = C.type, n = C.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return Jt(En, En.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          h.tail !== null && ct() > zu && (r.flags |= 128, s = !0, An(h, !1), r.lanes = 4194304);
        }
        else {
          if (!s) if (n = Fc(C), n !== null) {
            if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), An(h, !0), h.tail === null && h.tailMode === "hidden" && !C.alternate && !mn) return Pr(r), null;
          } else 2 * ct() - h.renderingStartTime > zu && o !== 1073741824 && (r.flags |= 128, s = !0, An(h, !1), r.lanes = 4194304);
          h.isBackwards ? (C.sibling = r.child, r.child = C) : (o = h.last, o !== null ? o.sibling = C : r.child = C, h.last = C);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = ct(), r.sibling = null, o = En.current, Jt(En, s ? o & 1 | 2 : o & 1), r) : (Pr(r), null);
      case 22:
      case 23:
        return Sf(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? gi & 1073741824 && (Pr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Pr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function Ky(n, r) {
    switch (jd(r), r.tag) {
      case 1:
        return Sn(r.type) && Yi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return mu(), Xt(Mn), Xt(ft), Qd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
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
        return mu(), null;
      case 10:
        return Bd(r.type._context), null;
      case 22:
      case 23:
        return Sf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ku = !1, br = !1, cf = typeof WeakSet == "function" ? WeakSet : Set, De = null;
  function _u(n, r) {
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
  var ff = !1;
  function Xy(n, r) {
    if (Ad = Vi, n = wc(), Qa(n)) {
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
              var ze = Me.memoizedProps, jn = Me.memoizedState, H = r.stateNode, z = H.getSnapshotBeforeUpdate(r.elementType === r.type ? ze : hi(r.type, ze), jn);
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
    return Me = ff, ff = !1, Me;
  }
  function Du(n, r, o) {
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
  function df(n, r) {
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
  function pf(n) {
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
  function wh(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, wh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[xa], delete r[fl], delete r[zd], delete r[Wy], delete r[Ud])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function rp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Th(n) {
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
  function Ps(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Dc));
    else if (s !== 4 && (n = n.child, n !== null)) for (Ps(n, r, o), n = n.sibling; n !== null; ) Ps(n, r, o), n = n.sibling;
  }
  function Ou(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null)) for (Ou(n, r, o), n = n.sibling; n !== null; ) Ou(n, r, o), n = n.sibling;
  }
  var Cn = null, cr = !1;
  function Yr(n, r, o) {
    for (o = o.child; o !== null; ) Lu(n, r, o), o = o.sibling;
  }
  function Lu(n, r, o) {
    if (ai && typeof ai.onCommitFiberUnmount == "function") try {
      ai.onCommitFiberUnmount(Eo, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        br || _u(o, r);
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
        if (!br && (_u(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function")) try {
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
  function Mu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new cf()), r.forEach(function(s) {
        var p = ig.bind(null, n, s);
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
        Lu(h, C, p), Cn = null, cr = !1;
        var M = p.alternate;
        M !== null && (M.return = null), p.return = null;
      } catch (G) {
        Nn(p, r, G);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Rh(r, n), r = r.sibling;
  }
  function Rh(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (fr(r, n), Oa(n), s & 4) {
          try {
            Du(3, n, n.return), df(3, n);
          } catch (ze) {
            Nn(n, n.return, ze);
          }
          try {
            Du(5, n, n.return);
          } catch (ze) {
            Nn(n, n.return, ze);
          }
        }
        break;
      case 1:
        fr(r, n), Oa(n), s & 512 && o !== null && _u(o, o.return);
        break;
      case 5:
        if (fr(r, n), Oa(n), s & 512 && o !== null && _u(o, o.return), n.flags & 32) {
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
              ie === "style" ? jt(p, ae) : ie === "dangerouslySetInnerHTML" ? jr(p, ae) : ie === "children" ? vr(p, ae) : Ue(p, ie, ae, G);
            }
            switch (k) {
              case "input":
                wn(p, h);
                break;
              case "textarea":
                Fr(p, h);
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
        fr(r, n), Oa(n), p = n.child, p.flags & 8192 && (h = p.memoizedState !== null, p.stateNode.isHidden = h, !h || p.alternate !== null && p.alternate.memoizedState !== null || (hf = ct())), s & 4 && Mu(n);
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
                  Du(4, re, re.return);
                  break;
                case 1:
                  _u(re, re.return);
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
                  _u(re, re.return);
                  break;
                case 22:
                  if (re.memoizedState !== null) {
                    xh(ae);
                    continue;
                  }
              }
              Re !== null ? (Re.return = re, De = Re) : xh(ae);
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
        fr(r, n), Oa(n), s & 4 && Mu(n);
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
            var h = Th(n);
            Ou(n, h, p);
            break;
          case 3:
          case 4:
            var C = s.stateNode.containerInfo, k = Th(n);
            Ps(n, k, C);
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
  function Zy(n, r, o) {
    De = n, ip(n);
  }
  function ip(n, r, o) {
    for (var s = (n.mode & 1) !== 0; De !== null; ) {
      var p = De, h = p.child;
      if (p.tag === 22 && s) {
        var C = p.memoizedState !== null || ku;
        if (!C) {
          var k = p.alternate, M = k !== null && k.memoizedState !== null || br;
          k = ku;
          var G = br;
          if (ku = C, (br = M) && !G) for (De = p; De !== null; ) C = De, M = C.child, C.tag === 22 && C.memoizedState !== null ? ap(p) : M !== null ? (M.return = C, De = M) : ap(p);
          for (; h !== null; ) De = h, ip(h), h = h.sibling;
          De = p, ku = k, br = G;
        }
        Au(n);
      } else p.subtreeFlags & 8772 && h !== null ? (h.return = p, De = h) : Au(n);
    }
  }
  function Au(n) {
    for (; De !== null; ) {
      var r = De;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              br || df(5, r);
              break;
            case 1:
              var s = r.stateNode;
              if (r.flags & 4 && !br) if (o === null) s.componentDidMount();
              else {
                var p = r.elementType === r.type ? o.memoizedProps : hi(r.type, o.memoizedProps);
                s.componentDidUpdate(p, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var h = r.updateQueue;
              h !== null && sh(r, h, s);
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
                sh(r, C, o);
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
          br || r.flags & 512 && pf(r);
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
  function xh(n) {
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
              df(4, r);
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
              pf(r);
            } catch (M) {
              Nn(r, h, M);
            }
            break;
          case 5:
            var C = r.return;
            try {
              pf(r);
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
  var Jy = Math.ceil, wl = ut.ReactCurrentDispatcher, vf = ut.ReactCurrentOwner, Ji = ut.ReactCurrentBatchConfig, Mt = 0, $n = null, yn = null, Xn = 0, gi = 0, $u = Et(0), Zn = 0, Hs = null, Tl = 0, Nu = 0, op = 0, Vo = null, Hr = null, hf = 0, zu = 1 / 0, ro = null, mf = !1, lp = null, ea = null, Uu = !1, ta = null, yf = 0, Fs = 0, gf = null, js = -1, Rl = 0;
  function dr() {
    return Mt & 6 ? ct() : js !== -1 ? js : js = ct();
  }
  function io(n) {
    return n.mode & 1 ? Mt & 2 && Xn !== 0 ? Xn & -Xn : Nc.transition !== null ? (Rl === 0 && (Rl = ql()), Rl) : (n = Yt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ss(n.type)), n) : 1;
  }
  function _n(n, r, o, s) {
    if (50 < Fs) throw Fs = 0, gf = null, Error(d(185));
    Va(n, o, s), (!(Mt & 2) || n !== $n) && (n === $n && (!(Mt & 2) && (Nu |= o), Zn === 4 && La(n, Xn)), Jn(n, s), o === 1 && Mt === 0 && !(r.mode & 1) && (zu = ct() + 500, sr && ci()));
  }
  function Jn(n, r) {
    var o = n.callbackNode;
    To(n, r);
    var s = Br(n, n === $n ? Xn : 0);
    if (s === 0) o !== null && de(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && de(o), r === 1) n.tag === 0 ? Hd(Pu.bind(null, n)) : Pd(Pu.bind(null, n)), Nd(function() {
        !(Mt & 6) && ci();
      }), o = null;
      else {
        switch (Xl(s)) {
          case 1:
            o = Rn;
            break;
          case 4:
            o = _t;
            break;
          case 16:
            o = Fi;
            break;
          case 536870912:
            o = Gl;
            break;
          default:
            o = Fi;
        }
        o = $h(o, bf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function bf(n, r) {
    if (js = -1, Rl = 0, Mt & 6) throw Error(d(327));
    var o = n.callbackNode;
    if (Hu() && n.callbackNode !== o) return null;
    var s = Br(n, n === $n ? Xn : 0);
    if (s === 0) return null;
    if (s & 30 || s & n.expiredLanes || r) r = Ef(n, s);
    else {
      r = s;
      var p = Mt;
      Mt |= 2;
      var h = _h();
      ($n !== n || Xn !== r) && (ro = null, zu = ct() + 500, kl(n, r));
      do
        try {
          tg();
          break;
        } catch (k) {
          kh(n, k);
        }
      while (!0);
      Oi(), wl.current = h, Mt = p, yn !== null ? r = 0 : ($n = null, Xn = 0, r = Zn);
    }
    if (r !== 0) {
      if (r === 2 && (p = Ro(n), p !== 0 && (s = p, r = xl(n, p))), r === 1) throw o = Hs, kl(n, 0), La(n, s), Jn(n, ct()), o;
      if (r === 6) La(n, s);
      else {
        if (p = n.current.alternate, !(s & 30) && !sp(p) && (r = Ef(n, s), r === 2 && (h = Ro(n), h !== 0 && (s = h, r = xl(n, h))), r === 1)) throw o = Hs, kl(n, 0), La(n, s), Jn(n, ct()), o;
        switch (n.finishedWork = p, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            Io(n, Hr, ro);
            break;
          case 3:
            if (La(n, s), (s & 130023424) === s && (r = hf + 500 - ct(), 10 < r)) {
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
            if (s = p, s = ct() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Jy(s / 1960)) - s, 10 < s) {
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
    return Jn(n, ct()), n.callbackNode === o ? bf.bind(null, n) : null;
  }
  function xl(n, r) {
    var o = Vo;
    return n.current.memoizedState.isDehydrated && (kl(n, r).flags |= 256), n = Ef(n, r), n !== 2 && (r = Hr, Hr = o, r !== null && up(r)), n;
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
    for (r &= ~op, r &= ~Nu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Ir(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function Pu(n) {
    if (Mt & 6) throw Error(d(327));
    Hu();
    var r = Br(n, 0);
    if (!(r & 1)) return Jn(n, ct()), null;
    var o = Ef(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = Ro(n);
      s !== 0 && (r = s, o = xl(n, s));
    }
    if (o === 1) throw o = Hs, kl(n, 0), La(n, r), Jn(n, ct()), o;
    if (o === 6) throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Io(n, Hr, ro), Jn(n, ct()), null;
  }
  function cp(n, r) {
    var o = Mt;
    Mt |= 1;
    try {
      return n(r);
    } finally {
      Mt = o, Mt === 0 && (zu = ct() + 500, sr && ci());
    }
  }
  function Ma(n) {
    ta !== null && ta.tag === 0 && !(Mt & 6) && Hu();
    var r = Mt;
    Mt |= 1;
    var o = Ji.transition, s = Yt;
    try {
      if (Ji.transition = null, Yt = 1, n) return n();
    } finally {
      Yt = s, Ji.transition = o, Mt = r, !(Mt & 6) && ci();
    }
  }
  function Sf() {
    gi = $u.current, Xt($u);
  }
  function kl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, eh(o)), yn !== null) for (o = yn.return; o !== null; ) {
      var s = o;
      switch (jd(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && Yi();
          break;
        case 3:
          mu(), Xt(Mn), Xt(ft), Qd();
          break;
        case 5:
          Gd(s);
          break;
        case 4:
          mu();
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
          Sf();
      }
      o = o.return;
    }
    if ($n = n, yn = n = Bo(n.current, null), Xn = gi = r, Zn = 0, Hs = null, op = Nu = Tl = 0, Hr = Vo = null, vl !== null) {
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
  function kh(n, r) {
    do {
      var o = yn;
      try {
        if (Oi(), Vc.current = Ur, Li) {
          for (var s = Ie.memoizedState; s !== null; ) {
            var p = s.queue;
            p !== null && (p.pending = null), s = s.next;
          }
          Li = !1;
        }
        if (je = 0, Ot = dt = Ie = null, yu = !1, Ds = 0, vf.current = null, o === null || o.return === null) {
          Zn = 1, Hs = r, yn = null;
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
            var Re = gh(C);
            if (Re !== null) {
              Re.flags &= -257, Jd(Re, C, k, h, r), Re.mode & 1 && $s(h, G, r), r = Re, M = G;
              var Me = r.updateQueue;
              if (Me === null) {
                var ze = /* @__PURE__ */ new Set();
                ze.add(M), r.updateQueue = ze;
              } else Me.add(M);
              break e;
            } else {
              if (!(r & 1)) {
                $s(h, G, r), Vs();
                break e;
              }
              M = Error(d(426));
            }
          } else if (mn && k.mode & 1) {
            var jn = gh(C);
            if (jn !== null) {
              !(jn.flags & 65536) && (jn.flags |= 256), Jd(jn, C, k, h, r), Id(Fo(M, k));
              break e;
            }
          }
          h = M = Fo(M, k), Zn !== 4 && (Zn = 2), Vo === null ? Vo = [h] : Vo.push(h), h = C;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var H = mh(h, M, r);
                uh(h, H);
                break e;
              case 1:
                k = M;
                var z = h.type, I = h.stateNode;
                if (!(h.flags & 128) && (typeof z.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (ea === null || !ea.has(I)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var pe = yh(h, k, r);
                  uh(h, pe);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        Oh(o);
      } catch (Ve) {
        r = Ve, yn === o && o !== null && (yn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function _h() {
    var n = wl.current;
    return wl.current = Ur, n === null ? Ur : n;
  }
  function Vs() {
    (Zn === 0 || Zn === 3 || Zn === 2) && (Zn = 4), $n === null || !(Tl & 268435455) && !(Nu & 268435455) || La($n, Xn);
  }
  function Ef(n, r) {
    var o = Mt;
    Mt |= 2;
    var s = _h();
    ($n !== n || Xn !== r) && (ro = null, kl(n, r));
    do
      try {
        eg();
        break;
      } catch (p) {
        kh(n, p);
      }
    while (!0);
    if (Oi(), Mt = o, wl.current = s, yn !== null) throw Error(d(261));
    return $n = null, Xn = 0, Zn;
  }
  function eg() {
    for (; yn !== null; ) Dh(yn);
  }
  function tg() {
    for (; yn !== null && !qe(); ) Dh(yn);
  }
  function Dh(n) {
    var r = Ah(n.alternate, n, gi);
    n.memoizedProps = n.pendingProps, r === null ? Oh(n) : yn = r, vf.current = null;
  }
  function Oh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Ky(o, r), o !== null) {
          o.flags &= 32767, yn = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Zn = 6, yn = null;
          return;
        }
      } else if (o = qy(o, r, gi), o !== null) {
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
      Ji.transition = null, Yt = 1, ng(n, r, o, s);
    } finally {
      Ji.transition = p, Yt = s;
    }
    return null;
  }
  function ng(n, r, o, s) {
    do
      Hu();
    while (ta !== null);
    if (Mt & 6) throw Error(d(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = o.lanes | o.childLanes;
    if (vd(n, h), n === $n && (yn = $n = null, Xn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Uu || (Uu = !0, $h(Fi, function() {
      return Hu(), null;
    })), h = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || h) {
      h = Ji.transition, Ji.transition = null;
      var C = Yt;
      Yt = 1;
      var k = Mt;
      Mt |= 4, vf.current = null, Xy(n, o), Rh(o, n), Tc(sl), Vi = !!Ad, sl = Ad = null, n.current = o, Zy(o), Wt(), Mt = k, Yt = C, Ji.transition = h;
    } else n.current = o;
    if (Uu && (Uu = !1, ta = n, yf = p), h = n.pendingLanes, h === 0 && (ea = null), os(o.stateNode), Jn(n, ct()), r !== null) for (s = n.onRecoverableError, o = 0; o < r.length; o++) p = r[o], s(p.value, { componentStack: p.stack, digest: p.digest });
    if (mf) throw mf = !1, n = lp, lp = null, n;
    return yf & 1 && n.tag !== 0 && Hu(), h = n.pendingLanes, h & 1 ? n === gf ? Fs++ : (Fs = 0, gf = n) : Fs = 0, ci(), null;
  }
  function Hu() {
    if (ta !== null) {
      var n = Xl(yf), r = Ji.transition, o = Yt;
      try {
        if (Ji.transition = null, Yt = 16 > n ? 16 : n, ta === null) var s = !1;
        else {
          if (n = ta, ta = null, yf = 0, Mt & 6) throw Error(d(331));
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
                        Du(8, ie, h);
                    }
                    var ae = ie.child;
                    if (ae !== null) ae.return = ie, De = ae;
                    else for (; De !== null; ) {
                      ie = De;
                      var re = ie.sibling, Re = ie.return;
                      if (wh(ie), ie === G) {
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
                      var jn = ze.sibling;
                      ze.sibling = null, ze = jn;
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
                  Du(9, h, h.return);
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
                    df(9, k);
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
  function Lh(n, r, o) {
    r = Fo(o, r), r = mh(n, r, 1), n = Po(n, r, 1), r = dr(), n !== null && (Va(n, 1, r), Jn(n, r));
  }
  function Nn(n, r, o) {
    if (n.tag === 3) Lh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Lh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var s = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ea === null || !ea.has(s))) {
          n = Fo(o, n), n = yh(r, n, 1), r = Po(r, n, 1), n = dr(), r !== null && (Va(r, 1, n), Jn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function rg(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = dr(), n.pingedLanes |= n.suspendedLanes & o, $n === n && (Xn & o) === o && (Zn === 4 || Zn === 3 && (Xn & 130023424) === Xn && 500 > ct() - hf ? kl(n, 0) : op |= o), Jn(n, r);
  }
  function Mh(n, r) {
    r === 0 && (n.mode & 1 ? (r = Co, Co <<= 1, !(Co & 130023424) && (Co = 4194304)) : r = 1);
    var o = dr();
    n = eo(n, r), n !== null && (Va(n, r, o), Jn(n, o));
  }
  function fp(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Mh(n, o);
  }
  function ig(n, r) {
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
    s !== null && s.delete(r), Mh(n, o);
  }
  var Ah;
  Ah = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Mn.current) mi = !0;
    else {
      if (!(n.lanes & o) && !(r.flags & 128)) return mi = !1, no(n, r, o);
      mi = !!(n.flags & 131072);
    }
    else mi = !1, mn && r.flags & 1048576 && Fd(r, fu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        Us(n, r), n = r.pendingProps;
        var p = Wi(r, ft.current);
        pu(r, o), p = te(null, r, s, n, p, o);
        var h = Yn();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Sn(s) ? (h = !0, Oc(r)) : h = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Uc(r), p.updater = Sl, r.stateNode = p, p._reactInternals = r, Xd(r, s, n, o), r = of(null, r, s, !0, h, o)) : (r.tag = 0, mn && h && Lc(r), Hn(null, r, p, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (Us(n, r), n = r.pendingProps, p = s._init, s = p(s._payload), r.type = s, p = r.tag = ag(s), n = hi(s, n), p) {
            case 0:
              r = bt(null, r, s, n, o);
              break e;
            case 1:
              r = Ns(null, r, s, n, o);
              break e;
            case 11:
              r = Tu(null, r, s, n, o);
              break e;
            case 14:
              r = jo(null, r, s, hi(s.type, n), o);
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
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : hi(s, p), Ns(n, r, s, p, o);
      case 3:
        e: {
          if (Qy(r), n === null) throw Error(d(387));
          s = r.pendingProps, h = r.memoizedState, p = h.element, vu(n, r), Hc(r, s, null, o);
          var C = r.memoizedState;
          if (s = C.element, h.isDehydrated) if (h = { element: s, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
            p = Fo(Error(d(423)), r), r = Sh(n, r, s, o, p);
            break e;
          } else if (s !== p) {
            p = Fo(Error(d(424)), r), r = Sh(n, r, s, o, p);
            break e;
          } else for (pi = ma(r.stateNode.containerInfo.firstChild), Di = r, mn = !0, Qi = null, o = oh(r, null, s, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (kn(), s === p) {
              r = Fn(n, r, o);
              break e;
            }
            Hn(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return ch(r), n === null && Ac(r), s = r.type, p = r.pendingProps, h = n !== null ? n.memoizedProps : null, C = p.children, Es(s, p) ? C = null : h !== null && Es(s, h) && (r.flags |= 32), El(n, r), Hn(n, r, C, o), r.child;
      case 6:
        return n === null && Ac(r), null;
      case 13:
        return Eh(n, r, o);
      case 4:
        return Yd(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = du(r, null, s, o) : Hn(n, r, s, o), r.child;
      case 11:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : hi(s, p), Tu(n, r, s, p, o);
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
              r = Fn(n, r, o);
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
        return p = r.type, s = r.pendingProps.children, pu(r, o), p = Ki(p), s = s(p), r.flags |= 1, Hn(n, r, s, o), r.child;
      case 14:
        return s = r.type, p = hi(s, r.pendingProps), p = hi(s.type, p), jo(n, r, s, p, o);
      case 15:
        return af(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : hi(s, p), Us(n, r), r.tag = 1, Sn(s) ? (n = !0, Oc(r)) : n = !1, pu(r, o), ph(r, s, p), Xd(r, s, p, o), of(null, r, s, !0, n, o);
      case 19:
        return tp(n, r, o);
      case 22:
        return yi(n, r, o);
    }
    throw Error(d(156, r.tag));
  };
  function $h(n, r) {
    return V(n, r);
  }
  function Nh(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function na(n, r, o, s) {
    return new Nh(n, r, o, s);
  }
  function dp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function ag(n) {
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
  function Cf(n, r, o, s, p, h) {
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
      case Fe:
        return n = na(13, o, r, p), n.elementType = Fe, n.lanes = h, n;
      case at:
        return n = na(19, o, r, p), n.elementType = at, n.lanes = h, n;
      case we:
        return wf(o, p, h, r);
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
  function wf(n, r, o, s) {
    return n = na(22, n, s, r), n.elementType = we, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Tf(n, r, o) {
    return n = na(6, n, null, r), n.lanes = o, n;
  }
  function Is(n, r, o) {
    return r = na(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Bs(n, r, o, s, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = s, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function pp(n, r, o, s, p, h, C, k, M) {
    return n = new Bs(n, r, o, k, M), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = na(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Uc(h), n;
  }
  function zh(n, r, o) {
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
      if (Sn(o)) return Ts(n, o, r);
    }
    return r;
  }
  function hp(n, r, o, s, p, h, C, k, M) {
    return n = pp(o, s, !0, n, p, h, C, k, M), n.context = vp(null), o = n.current, s = dr(), p = io(o), h = vi(s, p), h.callback = r ?? null, Po(o, h, p), n.current.lanes = p, Va(n, p, s), Jn(n, s), n;
  }
  function Rf(n, r, o, s) {
    var p = r.current, h = dr(), C = io(p);
    return o = vp(o), r.context === null ? r.context = o : r.pendingContext = o, r = vi(h, C), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = Po(p, r, C), n !== null && (_n(n, p, C, h), Pc(n, p, C)), C;
  }
  function Ws(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Uh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function mp(n, r) {
    Uh(n, r), (n = n.alternate) && Uh(n, r);
  }
  function og() {
    return null;
  }
  var yp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function xf(n) {
    this._internalRoot = n;
  }
  Ys.prototype.render = xf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(d(409));
    Rf(n, r, null, null);
  }, Ys.prototype.unmount = xf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ma(function() {
        Rf(null, n, null, null);
      }), r[Xa] = null;
    }
  };
  function Ys(n) {
    this._internalRoot = n;
  }
  Ys.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Jl();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Zt.length && r !== 0 && r < Zt[o].priority; o++) ;
      Zt.splice(o, 0, n), o === 0 && yc(n);
    }
  };
  function Wo(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function kf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ph() {
  }
  function lg(n, r, o, s, p) {
    if (p) {
      if (typeof s == "function") {
        var h = s;
        s = function() {
          var G = Ws(C);
          h.call(G);
        };
      }
      var C = hp(r, s, n, 0, null, !1, !1, "", Ph);
      return n._reactRootContainer = C, n[Xa] = C.current, su(n.nodeType === 8 ? n.parentNode : n), Ma(), C;
    }
    for (; p = n.lastChild; ) n.removeChild(p);
    if (typeof s == "function") {
      var k = s;
      s = function() {
        var G = Ws(M);
        k.call(G);
      };
    }
    var M = pp(n, 0, !1, null, null, !1, !1, "", Ph);
    return n._reactRootContainer = M, n[Xa] = M.current, su(n.nodeType === 8 ? n.parentNode : n), Ma(function() {
      Rf(r, M, o, s);
    }), M;
  }
  function _f(n, r, o, s, p) {
    var h = o._reactRootContainer;
    if (h) {
      var C = h;
      if (typeof p == "function") {
        var k = p;
        p = function() {
          var M = Ws(C);
          k.call(M);
        };
      }
      Rf(r, C, n, p);
    } else C = lg(o, r, n, p, s);
    return Ws(C);
  }
  nl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = fa(r.pendingLanes);
          o !== 0 && (Ta(r, o | 1), Jn(r, ct()), !(Mt & 6) && (zu = ct() + 500, ci()));
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
  }, Zl = function(n) {
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
  }, Jl = function() {
    return Yt;
  }, eu = function(n, r) {
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
        Fr(n, o);
        break;
      case "select":
        r = o.value, r != null && ir(n, !!o.multiple, r, !1);
    }
  }, ja = cp, bo = Ma;
  var ug = { usingClientEntryPoint: !1, Events: [ws, cu, Ke, ri, Ca, cp] }, Gs = { findFiberByHostInstance: Bi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hh = { bundleType: Gs.bundleType, version: Gs.version, rendererPackageName: Gs.rendererPackageName, rendererConfig: Gs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Rt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Gs.findFiberByHostInstance || og, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Df = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Df.isDisabled && Df.supportsFiber) try {
      Eo = Df.inject(Hh), ai = Df;
    } catch {
    }
  }
  return ua.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ug, ua.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wo(r)) throw Error(d(200));
    return zh(n, r, null, o);
  }, ua.createRoot = function(n, r) {
    if (!Wo(n)) throw Error(d(299));
    var o = !1, s = "", p = yp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = pp(n, 1, !1, null, null, o, !1, s, p), n[Xa] = r.current, su(n.nodeType === 8 ? n.parentNode : n), new xf(r);
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
    if (!kf(r)) throw Error(d(200));
    return _f(null, n, r, !0, o);
  }, ua.hydrateRoot = function(n, r, o) {
    if (!Wo(n)) throw Error(d(405));
    var s = o != null && o.hydratedSources || null, p = !1, h = "", C = yp;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (h = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = hp(r, null, n, 1, o ?? null, p, !1, h, C), n[Xa] = r.current, su(n), s) for (n = 0; n < s.length; n++) o = s[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
      o,
      p
    );
    return new Ys(r);
  }, ua.render = function(n, r, o) {
    if (!kf(r)) throw Error(d(200));
    return _f(null, n, r, !1, o);
  }, ua.unmountComponentAtNode = function(n) {
    if (!kf(n)) throw Error(d(40));
    return n._reactRootContainer ? (Ma(function() {
      _f(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Xa] = null;
      });
    }), !0) : !1;
  }, ua.unstable_batchedUpdates = cp, ua.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!kf(o)) throw Error(d(200));
    if (n == null || n._reactInternals === void 0) throw Error(d(38));
    return _f(n, r, o, !1, s);
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
var z1;
function nM() {
  return z1 || (z1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = Wl, u = ST(), d = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, y = !1;
    function E(e) {
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
    var x = 0, L = 1, P = 2, A = 3, K = 4, B = 5, se = 6, We = 7, Ce = 8, ht = 9, ye = 10, Ue = 11, ut = 12, Oe = 13, st = 14, ge = 15, nt = 16, _e = 17, xt = 18, Ct = 19, $t = 21, Fe = 22, at = 23, gt = 24, rt = 25, we = !0, ce = !1, Le = !1, oe = !1, $ = !1, q = !0, Ne = !1, Te = !0, Ge = !0, ot = !0, St = !0, wt = /* @__PURE__ */ new Set(), Tt = {}, tn = {};
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
    var Fr = 0, Qn = 1, Lr = 2, pn = 3, qn = 4, jr = 5, vr = 6, ve = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Pe = ve + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", mt = new RegExp("^[" + ve + "][" + Pe + "]*$"), jt = {}, Vt = {};
    function Tn(e) {
      return zn.call(Vt, e) ? !0 : zn.call(jt, e) ? !1 : mt.test(e) ? (Vt[e] = !0, !0) : (jt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, i) {
      return t !== null ? t.type === Fr : i ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function or(e, t, i, a) {
      if (i !== null && i.type === Fr)
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
          case jr:
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
        Fr,
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
        jr,
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
    var ja = "xlinkHref";
    Bt[ja] = new It(
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
    var _t = Object.assign, Fi = 0, So, Gl, Eo, ai, os, Ir, ls;
    function us() {
    }
    us.__reactDisabledLog = !0;
    function hc() {
      {
        if (Fi === 0) {
          So = console.log, Gl = console.info, Eo = console.warn, ai = console.error, os = console.group, Ir = console.groupCollapsed, ls = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: us,
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
        Fi++;
      }
    }
    function Ql() {
      {
        if (Fi--, Fi === 0) {
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
              value: Gl
            }),
            warn: _t({}, e, {
              value: Eo
            }),
            error: _t({}, e, {
              value: ai
            }),
            group: _t({}, e, {
              value: os
            }),
            groupCollapsed: _t({}, e, {
              value: Ir
            }),
            groupEnd: _t({}, e, {
              value: ls
            })
          });
        }
        Fi < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
    function ql(e, t) {
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
      f = Co.current, Co.current = null, hc();
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
        wo = !1, Co.current = f, Ql(), Error.prepareStackTrace = l;
      }
      var N = e ? e.displayName || e.name : "", W = N ? Br(N) : "";
      return typeof e == "function" && To.set(e, W), W;
    }
    function Kl(e, t, i) {
      return ql(e, !0);
    }
    function Va(e, t, i) {
      return ql(e, !1);
    }
    function vd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ta(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ql(e, vd(e));
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
          return Kl(e.type);
        default:
          return "";
      }
    }
    function Xl(e) {
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
    function Zl(e) {
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
            return Zl(t) + ".Consumer";
          case O:
            var i = e;
            return Zl(i._context) + ".Provider";
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
    function Jl(e, t, i) {
      var a = t.displayName || t.name || "";
      return e.displayName || (a !== "" ? i + "(" + a + ")" : i);
    }
    function eu(e) {
      return e.displayName || "Context";
    }
    function pt(e) {
      var t = e.tag, i = e.type;
      switch (t) {
        case gt:
          return "Cache";
        case ht:
          var a = i;
          return eu(a) + ".Consumer";
        case ye:
          var l = i;
          return eu(l._context) + ".Provider";
        case xt:
          return "DehydratedFragment";
        case Ue:
          return Jl(i, i.render, "ForwardRef");
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
        case Fe:
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
      return xn === null ? "" : Xl(xn);
    }
    function Ln() {
      rl.getCurrentStack = null, xn = null, oi = !1;
    }
    function Zt(e) {
      rl.getCurrentStack = e === null ? null : xo, xn = e, oi = !1;
    }
    function mc() {
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
    var yc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ia(e, t) {
      yc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ko(e) {
      var t = e.type, i = e.nodeName;
      return i && i.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function gc(e) {
      return e._valueTracker;
    }
    function ji(e) {
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
            ji(e), delete e[t];
          }
        };
        return v;
      }
    }
    function Vi(e) {
      gc(e) || (e._valueTracker = Ba(e));
    }
    function tu(e) {
      if (!e)
        return !1;
      var t = gc(e);
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
    var Oo = !1, il = !1, nu = !1, ss = !1;
    function da(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function S(e, t) {
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
        !i._wrapperState.controlled && a && !ss && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ss = !0), i._wrapperState.controlled && !a && !nu && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), nu = !0);
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
    function Je(e, t) {
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
            var m = nm(v);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            tu(v), X(v, m);
          }
        }
      }
    }
    function Ze(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Do(e.ownerDocument) !== e) && (i == null ? e.defaultValue = lr(e._wrapperState.initialValue) : e.defaultValue !== lr(i) && (e.defaultValue = lr(i)));
    }
    var Dt = !1, Ft = !1, ln = !1;
    function rn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || Ft || (Ft = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
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
    function ru() {
      var e = Wr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var cs = ["value", "defaultValue"];
    function hd(e) {
      {
        Ia("select", e);
        for (var t = 0; t < cs.length; t++) {
          var i = cs[t];
          if (e[i] != null) {
            var a = zt(e[i]);
            e.multiple && !a ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, ru()) : !e.multiple && a && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, ru());
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
    function fs(e, t) {
      return _t({}, t, {
        value: void 0
      });
    }
    function ds(e, t) {
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
    function Ly(e, t) {
      var i = e, a = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? pa(i, !!t.multiple, l, !1) : a !== !!t.multiple && (t.defaultValue != null ? pa(i, !!t.multiple, t.defaultValue, !0) : pa(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function My(e, t) {
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
    function kv(e, t) {
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
    function _v(e, t) {
      var i = e, a = Ra(t.value), l = Ra(t.defaultValue);
      if (a != null) {
        var f = lr(a);
        f !== i.value && (i.value = f), t.defaultValue == null && i.defaultValue !== f && (i.defaultValue = f);
      }
      l != null && (i.defaultValue = lr(l));
    }
    function Dv(e, t) {
      var i = e, a = i.textContent;
      a === i._wrapperState.initialValue && a !== "" && a !== null && (i.value = a);
    }
    function bd(e, t) {
      _v(e, t);
    }
    var Ya = "http://www.w3.org/1999/xhtml", Ay = "http://www.w3.org/1998/Math/MathML", Sd = "http://www.w3.org/2000/svg";
    function bc(e) {
      switch (e) {
        case "svg":
          return Sd;
        case "math":
          return Ay;
        default:
          return Ya;
      }
    }
    function Ed(e, t) {
      return e == null || e === Ya ? bc(t) : e === Sd && t === "foreignObject" ? Ya : e;
    }
    var $y = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, a, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, a, l);
        });
      } : e;
    }, Sc, Ov = $y(function(e, t) {
      if (e.namespaceURI === Sd && !("innerHTML" in e)) {
        Sc = Sc || document.createElement("div"), Sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = Sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ui = 1, Ga = 3, Bn = 8, va = 9, al = 11, Ec = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === Ga) {
          i.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Lv = {
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
    }, iu = {
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
    function Mv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Av = ["Webkit", "ms", "Moz", "O"];
    Object.keys(iu).forEach(function(e) {
      Av.forEach(function(t) {
        iu[Mv(t, e)] = iu[e];
      });
    });
    function Cc(e, t, i) {
      var a = t == null || typeof t == "boolean" || t === "";
      return a ? "" : !i && typeof t == "number" && t !== 0 && !(iu.hasOwnProperty(e) && iu[e]) ? t + "px" : (ir(t, e), ("" + t).trim());
    }
    var au = /([A-Z])/g, Ny = /^ms-/;
    function zy(e) {
      return e.replace(au, "-$1").toLowerCase().replace(Ny, "-ms-");
    }
    var $v = function() {
    };
    {
      var Nv = /^(?:webkit|moz|o)[A-Z]/, zv = /^-ms-/, ps = /-(.)/g, ou = /;\s*$/, lu = {}, uu = {}, Uv = !1, Cd = !1, wd = function(e) {
        return e.replace(ps, function(t, i) {
          return i.toUpperCase();
        });
      }, Td = function(e) {
        lu.hasOwnProperty(e) && lu[e] || (lu[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          wd(e.replace(zv, "ms-"))
        ));
      }, Pv = function(e) {
        lu.hasOwnProperty(e) && lu[e] || (lu[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Hv = function(e, t) {
        uu.hasOwnProperty(t) && uu[t] || (uu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ou, "")));
      }, Fv = function(e, t) {
        Uv || (Uv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Uy = function(e, t) {
        Cd || (Cd = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      $v = function(e, t) {
        e.indexOf("-") > -1 ? Td(e) : Nv.test(e) ? Pv(e) : ou.test(t) && Hv(e, t), typeof t == "number" && (isNaN(t) ? Fv(e, t) : isFinite(t) || Uy(e, t));
      };
    }
    var Py = $v;
    function Hy(e) {
      {
        var t = "", i = "";
        for (var a in e)
          if (e.hasOwnProperty(a)) {
            var l = e[a];
            if (l != null) {
              var f = a.indexOf("--") === 0;
              t += i + (f ? a : zy(a)) + ":", t += Cc(a, l, f), i = ";";
            }
          }
        return t || null;
      }
    }
    function jv(e, t) {
      var i = e.style;
      for (var a in t)
        if (t.hasOwnProperty(a)) {
          var l = a.indexOf("--") === 0;
          l || Py(a, t[a]);
          var f = Cc(a, t[a], l);
          a === "float" && (a = "cssFloat"), l ? i.setProperty(a, f) : i[a] = f;
        }
    }
    function Fy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ii(e) {
      var t = {};
      for (var i in e)
        for (var a = Lv[i] || [i], l = 0; l < a.length; l++)
          t[a[l]] = i;
      return t;
    }
    function vs(e, t) {
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
            l[b] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Fy(e[v]) ? "Removing" : "Updating", v, m);
          }
        }
      }
    }
    var Vv = {
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
    }, Iv = _t({
      menuitem: !0
    }, Vv), Bv = "__html";
    function wc(e, t) {
      if (t) {
        if (Iv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Bv in t.dangerouslySetInnerHTML))
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
    var Tc = {
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
    }, Wv = {
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
    }, ha = {}, Rd = new RegExp("^(aria)-[" + Pe + "]*$"), hs = new RegExp("^(aria)[A-Z][" + Pe + "]*$");
    function xd(e, t) {
      {
        if (zn.call(ha, t) && ha[t])
          return !0;
        if (hs.test(t)) {
          var i = "aria-" + t.slice(4).toLowerCase(), a = Wv.hasOwnProperty(i) ? i : null;
          if (a == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ha[t] = !0, !0;
          if (t !== a)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), ha[t] = !0, !0;
        }
        if (Rd.test(t)) {
          var l = t.toLowerCase(), f = Wv.hasOwnProperty(l) ? l : null;
          if (f == null)
            return ha[t] = !0, !1;
          if (t !== f)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, f), ha[t] = !0, !0;
        }
      }
      return !0;
    }
    function Yv(e, t) {
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
    function Rc(e, t) {
      Qa(e, t) || Yv(e, t);
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
      var ur = {}, Dd = /^on./, Gv = /^on[^A-Z]/, Qv = new RegExp("^(aria)-[" + Pe + "]*$"), qv = new RegExp("^(aria)[A-Z][" + Pe + "]*$");
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
          return Gv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ur[t] = !0, !0;
        if (Qv.test(t) || qv.test(t))
          return !0;
        if (l === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ur[t] = !0, !0;
        if (l === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ur[t] = !0, !0;
        if (l === "is" && i !== null && i !== void 0 && typeof i != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), ur[t] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ur[t] = !0, !0;
        var b = hr(t), w = b !== null && b.type === Fr;
        if (Tc.hasOwnProperty(l)) {
          var R = Tc[l];
          if (R !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, R), ur[t] = !0, !0;
        } else if (!w && t !== l)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), ur[t] = !0, !0;
        return typeof i == "boolean" && or(t, i, b, !1) ? (i ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), ur[t] = !0, !0) : w ? !0 : or(t, i, b, !1) ? (ur[t] = !0, !1) : ((i === "false" || i === "true") && b !== null && b.type === pn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), ur[t] = !0), !0);
      };
    }
    var Kv = function(e, t, i) {
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
    function Xv(e, t, i) {
      Qa(e, t) || Kv(e, t, i);
    }
    var qa = 1, ms = 2, ll = 4, jy = qa | ms | ll, ys = null;
    function gs(e) {
      ys !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ys = e;
    }
    function Vy() {
      ys === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ys = null;
    }
    function Zv(e) {
      return e === ys;
    }
    function xc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ga ? t.parentNode : t;
    }
    var sn = null, Lo = null, Ka = null;
    function su(e) {
      var t = Vu(e);
      if (t) {
        if (typeof sn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var a = nm(i);
          sn(t.stateNode, t.type, a);
        }
      }
    }
    function Jv(e) {
      sn = e;
    }
    function kc(e) {
      Lo ? Ka ? Ka.push(e) : Ka = [e] : Lo = e;
    }
    function bs() {
      return Lo !== null || Ka !== null;
    }
    function Ss() {
      if (Lo) {
        var e = Lo, t = Ka;
        if (Lo = null, Ka = null, su(e), t)
          for (var i = 0; i < t.length; i++)
            su(t[i]);
      }
    }
    var ul = function(e, t) {
      return e(t);
    }, Od = function() {
    }, Ld = !1;
    function Iy() {
      var e = bs();
      e && (Od(), Ss());
    }
    function Md(e, t, i) {
      if (Ld)
        return e(t, i);
      Ld = !0;
      try {
        return ul(e, t, i);
      } finally {
        Ld = !1, Iy();
      }
    }
    function _c(e, t, i) {
      ul = e, Od = i;
    }
    function Dc(e) {
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
          return !!(i.disabled && Dc(t));
        default:
          return !1;
      }
    }
    function sl(e, t) {
      var i = e.stateNode;
      if (i === null)
        return null;
      var a = nm(i);
      if (a === null)
        return null;
      var l = a[t];
      if (Ad(t, e.type, a))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Es = !1;
    if (dn)
      try {
        var cl = {};
        Object.defineProperty(cl, "passive", {
          get: function() {
            Es = !0;
          }
        }), window.addEventListener("test", cl, cl), window.removeEventListener("test", cl, cl);
      } catch {
        Es = !1;
      }
    function eh(e, t, i, a, l, f, v, m, b) {
      var w = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, w);
      } catch (R) {
        this.onError(R);
      }
    }
    var $d = eh;
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
        function F(j) {
          if (Be = j.error, Ht = !0, Be === null && j.colno === 0 && j.lineno === 0 && (At = !0), j.defaultPrevented && Be != null && typeof Be == "object")
            try {
              Be._suppressLogging = !0;
            } catch {
            }
        }
        var J = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", F), Nd.addEventListener(J, Xe, !1), R.initEvent(J, !1, !1), Nd.dispatchEvent(R), Q && Object.defineProperty(window, "event", Q), U && N && (Ht ? At && (Be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Be)), window.removeEventListener("error", F), !U)
          return Z(), eh.apply(this, arguments);
      };
    }
    var By = $d, Mo = !1, ma = null, Cs = !1, Ao = null, xa = {
      onError: function(e) {
        Mo = !0, ma = e;
      }
    };
    function fl(e, t, i, a, l, f, v, m, b) {
      Mo = !1, ma = null, By.apply(xa, arguments);
    }
    function Xa(e, t, i, a, l, f, v, m, b) {
      if (fl.apply(this, arguments), Mo) {
        var w = Ud();
        Cs || (Cs = !0, Ao = w);
      }
    }
    function zd() {
      if (Cs) {
        var e = Ao;
        throw Cs = !1, Ao = null, e;
      }
    }
    function Wy() {
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
    function ws(e) {
      return e._reactInternals !== void 0;
    }
    function cu(e, t) {
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
    ), Ts = (
      /*             */
      16384
    ), Oc = Sn | Et | ka | si | Wi | Ts, th = (
      /*               */
      32767
    ), ki = (
      /*                   */
      32768
    ), sr = (
      /*                */
      65536
    ), Rs = (
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
    ), fu = (
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
    function Fd(e) {
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
    function Lc(e) {
      return e.tag === A ? e.stateNode.containerInfo : null;
    }
    function jd(e) {
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
    function nh(e) {
      var t = mn(e);
      return t !== null ? Mc(t) : null;
    }
    function Mc(e) {
      if (e.tag === B || e.tag === se)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== K) {
          var i = Mc(t);
          if (i !== null)
            return i;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ac = u.unstable_scheduleCallback, rh = u.unstable_cancelCallback, $c = u.unstable_shouldYield, ih = u.unstable_requestPaint, kn = u.unstable_now, Id = u.unstable_getCurrentPriorityLevel, Nc = u.unstable_ImmediatePriority, pl = u.unstable_UserBlockingPriority, _a = u.unstable_NormalPriority, ah = u.unstable_LowPriority, zc = u.unstable_IdlePriority, du = u.unstable_yieldValue, oh = u.unstable_setDisableYieldValue, Ja = null, Kn = null, he = null, qi = !1, Oi = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
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
          injectProfilingHooks: lh
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
    function pu(e, t) {
      if (Kn && typeof Kn.onCommitFiberRoot == "function")
        try {
          var i = (e.current.flags & ft) === ft;
          if (ot) {
            var a;
            switch (t) {
              case Fn:
                a = Nc;
                break;
              case no:
                a = pl;
                break;
              case Da:
                a = _a;
                break;
              case Ru:
                a = zc;
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
      if (typeof du == "function" && (oh(e), E(e)), Kn && typeof Kn.setStrictMode == "function")
        try {
          Kn.setStrictMode(Ja, e);
        } catch (t) {
          qi || (qi = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function lh(e) {
      he = e;
    }
    function eo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, i = 0; i < Os; i++) {
          var a = Gy(t);
          e.set(t, a), t *= 2;
        }
        return e;
      }
    }
    function Uo(e) {
      he !== null && typeof he.markCommitStarted == "function" && he.markCommitStarted(e);
    }
    function Uc() {
      he !== null && typeof he.markCommitStopped == "function" && he.markCommitStopped();
    }
    function vu(e) {
      he !== null && typeof he.markComponentRenderStarted == "function" && he.markComponentRenderStarted(e);
    }
    function vi() {
      he !== null && typeof he.markComponentRenderStopped == "function" && he.markComponentRenderStopped();
    }
    function Po(e) {
      he !== null && typeof he.markComponentPassiveEffectMountStarted == "function" && he.markComponentPassiveEffectMountStarted(e);
    }
    function Pc() {
      he !== null && typeof he.markComponentPassiveEffectMountStopped == "function" && he.markComponentPassiveEffectMountStopped();
    }
    function uh(e) {
      he !== null && typeof he.markComponentPassiveEffectUnmountStarted == "function" && he.markComponentPassiveEffectUnmountStarted(e);
    }
    function Hc() {
      he !== null && typeof he.markComponentPassiveEffectUnmountStopped == "function" && he.markComponentPassiveEffectUnmountStopped();
    }
    function sh(e) {
      he !== null && typeof he.markComponentLayoutEffectMountStarted == "function" && he.markComponentLayoutEffectMountStarted(e);
    }
    function xs() {
      he !== null && typeof he.markComponentLayoutEffectMountStopped == "function" && he.markComponentLayoutEffectMountStopped();
    }
    function ya(e) {
      he !== null && typeof he.markComponentLayoutEffectUnmountStarted == "function" && he.markComponentLayoutEffectUnmountStarted(e);
    }
    function hu() {
      he !== null && typeof he.markComponentLayoutEffectUnmountStopped == "function" && he.markComponentLayoutEffectUnmountStopped();
    }
    function ks(e, t, i) {
      he !== null && typeof he.markComponentErrored == "function" && he.markComponentErrored(e, t, i);
    }
    function hl(e, t, i) {
      he !== null && typeof he.markComponentSuspended == "function" && he.markComponentSuspended(e, t, i);
    }
    function Yd(e) {
      he !== null && typeof he.markLayoutEffectsStarted == "function" && he.markLayoutEffectsStarted(e);
    }
    function mu() {
      he !== null && typeof he.markLayoutEffectsStopped == "function" && he.markLayoutEffectsStopped();
    }
    function ch(e) {
      he !== null && typeof he.markPassiveEffectsStarted == "function" && he.markPassiveEffectsStarted(e);
    }
    function Gd() {
      he !== null && typeof he.markPassiveEffectsStopped == "function" && he.markPassiveEffectsStopped();
    }
    function En(e) {
      he !== null && typeof he.markRenderStarted == "function" && he.markRenderStarted(e);
    }
    function Fc() {
      he !== null && typeof he.markRenderYielded == "function" && he.markRenderYielded();
    }
    function jc() {
      he !== null && typeof he.markRenderStopped == "function" && he.markRenderStopped();
    }
    function Qd(e) {
      he !== null && typeof he.markRenderScheduled == "function" && he.markRenderScheduled(e);
    }
    function Vc(e, t) {
      he !== null && typeof he.markForceUpdateScheduled == "function" && he.markForceUpdateScheduled(e, t);
    }
    function _s(e, t) {
      he !== null && typeof he.markStateUpdateScheduled == "function" && he.markStateUpdateScheduled(e, t);
    }
    var je = (
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
    ), yu = Math.clz32 ? Math.clz32 : zr, Ds = Math.log, Yy = Math.LN2;
    function zr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ds(t) / Yy | 0) | 0;
    }
    var Os = 31, te = (
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
    ), gu = (
      /*                */
      32
    ), ml = (
      /*                       */
      4194240
    ), bu = (
      /*                        */
      64
    ), Ic = (
      /*                        */
      128
    ), Bc = (
      /*                        */
      256
    ), Wc = (
      /*                        */
      512
    ), Yc = (
      /*                        */
      1024
    ), Gc = (
      /*                        */
      2048
    ), yl = (
      /*                        */
      4096
    ), Qc = (
      /*                        */
      8192
    ), Su = (
      /*                        */
      16384
    ), Eu = (
      /*                       */
      32768
    ), qc = (
      /*                       */
      65536
    ), Ls = (
      /*                       */
      131072
    ), Kc = (
      /*                       */
      262144
    ), Xc = (
      /*                       */
      524288
    ), Zc = (
      /*                       */
      1048576
    ), Jc = (
      /*                       */
      2097152
    ), Cu = (
      /*                            */
      130023424
    ), gl = (
      /*                             */
      4194304
    ), ef = (
      /*                             */
      8388608
    ), tf = (
      /*                             */
      16777216
    ), qd = (
      /*                             */
      33554432
    ), nf = (
      /*                             */
      67108864
    ), fh = gl, Ms = (
      /*          */
      134217728
    ), Kd = (
      /*                          */
      268435455
    ), wu = (
      /*               */
      268435456
    ), Ho = (
      /*                        */
      536870912
    ), Ur = (
      /*                   */
      1073741824
    );
    function Gy(e) {
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
        if (e & gu)
          return "TransitionHydration";
        if (e & ml)
          return "Transition";
        if (e & Cu)
          return "Retry";
        if (e & Ms)
          return "SelectiveHydration";
        if (e & wu)
          return "IdleHydration";
        if (e & Ho)
          return "Idle";
        if (e & Ur)
          return "Offscreen";
      }
    }
    var fn = -1, rf = bu, hi = gl;
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
        case gu:
          return gu;
        case bu:
        case Ic:
        case Bc:
        case Wc:
        case Yc:
        case Gc:
        case yl:
        case Qc:
        case Su:
        case Eu:
        case qc:
        case Ls:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
          return e & ml;
        case gl:
        case ef:
        case tf:
        case qd:
        case nf:
          return e & Cu;
        case Ms:
          return Ms;
        case wu:
          return wu;
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
          var Z = jo(Q), Se = 1 << Z;
          a |= W[Z], Q &= ~Se;
        }
      return a;
    }
    function dh(e, t) {
      for (var i = e.eventTimes, a = fn; t > 0; ) {
        var l = jo(t), f = 1 << l, v = i[l];
        v > a && (a = v), t &= ~f;
      }
      return a;
    }
    function ph(e, t) {
      switch (e) {
        case Ye:
        case gr:
        case Mi:
          return t + 250;
        case to:
        case Xi:
        case gu:
        case bu:
        case Ic:
        case Bc:
        case Wc:
        case Yc:
        case Gc:
        case yl:
        case Qc:
        case Su:
        case Eu:
        case qc:
        case Ls:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
          return t + 5e3;
        case gl:
        case ef:
        case tf:
        case qd:
        case nf:
          return fn;
        case Ms:
        case wu:
        case Ho:
        case Ur:
          return fn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), fn;
      }
    }
    function vh(e, t) {
      for (var i = e.pendingLanes, a = e.suspendedLanes, l = e.pingedLanes, f = e.expirationTimes, v = i; v > 0; ) {
        var m = jo(v), b = 1 << m, w = f[m];
        w === fn ? ((b & a) === te || (b & l) !== te) && (f[m] = ph(b, t)) : w <= t && (e.expiredLanes |= b), v &= ~b;
      }
    }
    function Xd(e) {
      return bl(e.pendingLanes);
    }
    function Fo(e) {
      var t = e.pendingLanes & ~Ur;
      return t !== te ? t : t & Ur ? Ur : te;
    }
    function Zd(e) {
      return (e & Ye) !== te;
    }
    function As(e) {
      return (e & Kd) !== te;
    }
    function hh(e) {
      return (e & Cu) === e;
    }
    function mh(e) {
      var t = Ye | Mi | Xi;
      return (e & t) === te;
    }
    function yh(e) {
      return (e & ml) === e;
    }
    function $s(e, t) {
      var i = gr | Mi | to | Xi;
      return (t & i) !== te;
    }
    function gh(e, t) {
      return (t & e.expiredLanes) !== te;
    }
    function Jd(e) {
      return (e & ml) !== te;
    }
    function bh() {
      var e = rf;
      return rf <<= 1, (rf & ml) === te && (rf = bu), e;
    }
    function mi() {
      var e = hi;
      return hi <<= 1, (hi & Cu) === te && (hi = gl), e;
    }
    function Hn(e) {
      return e & -e;
    }
    function Tu(e) {
      return Hn(e);
    }
    function jo(e) {
      return 31 - yu(e);
    }
    function af(e) {
      return jo(e);
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
    function Ns(e, t) {
      return e & ~t;
    }
    function of(e, t) {
      return e & t;
    }
    function Qy(e) {
      return e;
    }
    function Sh(e, t) {
      return e !== Yn && e < t ? e : t;
    }
    function zs(e) {
      for (var t = [], i = 0; i < Os; i++)
        t.push(e);
      return t;
    }
    function Cl(e, t, i) {
      e.pendingLanes |= t, t !== Ho && (e.suspendedLanes = te, e.pingedLanes = te);
      var a = e.eventTimes, l = af(t);
      a[l] = i;
    }
    function Eh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var i = e.expirationTimes, a = t; a > 0; ) {
        var l = jo(a), f = 1 << l;
        i[l] = fn, a &= ~f;
      }
    }
    function lf(e, t, i) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function uf(e, t) {
      var i = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = te, e.pingedLanes = te, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var a = e.entanglements, l = e.eventTimes, f = e.expirationTimes, v = i; v > 0; ) {
        var m = jo(v), b = 1 << m;
        a[m] = te, l[m] = fn, f[m] = fn, v &= ~b;
      }
    }
    function ep(e, t) {
      for (var i = e.entangledLanes |= t, a = e.entanglements, l = i; l; ) {
        var f = jo(l), v = 1 << f;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        a[f] & t && (a[f] |= t), l &= ~v;
      }
    }
    function Ch(e, t) {
      var i = Hn(t), a;
      switch (i) {
        case Mi:
          a = gr;
          break;
        case Xi:
          a = to;
          break;
        case bu:
        case Ic:
        case Bc:
        case Wc:
        case Yc:
        case Gc:
        case yl:
        case Qc:
        case Su:
        case Eu:
        case qc:
        case Ls:
        case Kc:
        case Xc:
        case Zc:
        case Jc:
        case gl:
        case ef:
        case tf:
        case qd:
        case nf:
          a = gu;
          break;
        case Ho:
          a = wu;
          break;
        default:
          a = Yn;
          break;
      }
      return (a & (e.suspendedLanes | t)) !== Yn ? Yn : a;
    }
    function sf(e, t, i) {
      if (Oi)
        for (var a = e.pendingUpdatersLaneMap; i > 0; ) {
          var l = af(i), f = 1 << l, v = a[l];
          v.add(t), i &= ~f;
        }
    }
    function tp(e, t) {
      if (Oi)
        for (var i = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
          var l = af(t), f = 1 << l, v = i[l];
          v.size > 0 && (v.forEach(function(m) {
            var b = m.alternate;
            (b === null || !a.has(b)) && a.add(m);
          }), v.clear()), t &= ~f;
        }
    }
    function Us(e, t) {
      return null;
    }
    var Fn = Ye, no = Mi, Da = Xi, Ru = Ho, xu = Yn;
    function Zi() {
      return xu;
    }
    function An(e) {
      xu = e;
    }
    function Pr(e, t) {
      var i = xu;
      try {
        return xu = e, t();
      } finally {
        xu = i;
      }
    }
    function qy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ky(e, t) {
      return e > t ? e : t;
    }
    function ku(e, t) {
      return e !== 0 && e < t;
    }
    function br(e) {
      var t = Hn(e);
      return ku(Fn, t) ? ku(no, t) ? As(t) ? Da : Ru : no : Fn;
    }
    function cf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var De;
    function _u(e) {
      De = e;
    }
    function np(e) {
      De(e);
    }
    var ff;
    function Xy(e) {
      ff = e;
    }
    var Du;
    function df(e) {
      Du = e;
    }
    var pf;
    function wh(e) {
      pf = e;
    }
    var rp;
    function Th(e) {
      rp = e;
    }
    var Ps = !1, Ou = [], Cn = null, cr = null, Yr = null, Lu = /* @__PURE__ */ new Map(), Mu = /* @__PURE__ */ new Map(), fr = [], Rh = [
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
      return Rh.indexOf(e) > -1;
    }
    function Zy(e, t, i, a, l) {
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
          Lu.delete(i);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var a = t.pointerId;
          Mu.delete(a);
          break;
        }
      }
    }
    function Au(e, t, i, a, l, f) {
      if (e === null || e.nativeEvent !== f) {
        var v = Zy(t, i, a, l, f);
        if (t !== null) {
          var m = Vu(t);
          m !== null && ff(m);
        }
        return v;
      }
      e.eventSystemFlags |= a;
      var b = e.targetContainers;
      return l !== null && b.indexOf(l) === -1 && b.push(l), e;
    }
    function xh(e, t, i, a, l) {
      switch (t) {
        case "focusin": {
          var f = l;
          return Cn = Au(Cn, e, t, i, a, f), !0;
        }
        case "dragenter": {
          var v = l;
          return cr = Au(cr, e, t, i, a, v), !0;
        }
        case "mouseover": {
          var m = l;
          return Yr = Au(Yr, e, t, i, a, m), !0;
        }
        case "pointerover": {
          var b = l, w = b.pointerId;
          return Lu.set(w, Au(Lu.get(w) || null, e, t, i, a, b)), !0;
        }
        case "gotpointercapture": {
          var R = l, U = R.pointerId;
          return Mu.set(U, Au(Mu.get(U) || null, e, t, i, a, R)), !0;
        }
      }
      return !1;
    }
    function ap(e) {
      var t = Ks(e.target);
      if (t !== null) {
        var i = _i(t);
        if (i !== null) {
          var a = i.tag;
          if (a === Oe) {
            var l = Fd(i);
            if (l !== null) {
              e.blockedOn = l, rp(e.priority, function() {
                Du(i);
              });
              return;
            }
          } else if (a === A) {
            var f = i.stateNode;
            if (cf(f)) {
              e.blockedOn = Lc(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Jy(e) {
      for (var t = pf(), i = {
        blockedOn: null,
        target: e,
        priority: t
      }, a = 0; a < fr.length && ku(t, fr[a].priority); a++)
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
          gs(f), l.target.dispatchEvent(f), Vy();
        } else {
          var v = Vu(a);
          return v !== null && ff(v), e.blockedOn = a, !1;
        }
        t.shift();
      }
      return !0;
    }
    function vf(e, t, i) {
      wl(e) && i.delete(t);
    }
    function Ji() {
      Ps = !1, Cn !== null && wl(Cn) && (Cn = null), cr !== null && wl(cr) && (cr = null), Yr !== null && wl(Yr) && (Yr = null), Lu.forEach(vf), Mu.forEach(vf);
    }
    function Mt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ps || (Ps = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Ji)));
    }
    function $n(e) {
      if (Ou.length > 0) {
        Mt(Ou[0], e);
        for (var t = 1; t < Ou.length; t++) {
          var i = Ou[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      Cn !== null && Mt(Cn, e), cr !== null && Mt(cr, e), Yr !== null && Mt(Yr, e);
      var a = function(m) {
        return Mt(m, e);
      };
      Lu.forEach(a), Mu.forEach(a);
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
    function $u() {
      return Xn;
    }
    function Zn(e, t, i) {
      var a = hf(t), l;
      switch (a) {
        case Fn:
          l = Hs;
          break;
        case no:
          l = Tl;
          break;
        case Da:
        default:
          l = Nu;
          break;
      }
      return l.bind(null, t, i, e);
    }
    function Hs(e, t, i, a) {
      var l = Zi(), f = yn.transition;
      yn.transition = null;
      try {
        An(Fn), Nu(e, t, i, a);
      } finally {
        An(l), yn.transition = f;
      }
    }
    function Tl(e, t, i, a) {
      var l = Zi(), f = yn.transition;
      yn.transition = null;
      try {
        An(no), Nu(e, t, i, a);
      } finally {
        An(l), yn.transition = f;
      }
    }
    function Nu(e, t, i, a) {
      Xn && op(e, t, i, a);
    }
    function op(e, t, i, a) {
      var l = Hr(e, t, i, a);
      if (l === null) {
        mg(e, t, a, Vo, i), ip(e, a);
        return;
      }
      if (xh(l, e, t, i, a)) {
        a.stopPropagation();
        return;
      }
      if (ip(e, a), t & ll && Oa(e)) {
        for (; l !== null; ) {
          var f = Vu(l);
          f !== null && np(f);
          var v = Hr(e, t, i, a);
          if (v === null && mg(e, t, a, Vo, i), v === l)
            break;
          l = v;
        }
        l !== null && a.stopPropagation();
        return;
      }
      mg(e, t, a, null, i);
    }
    var Vo = null;
    function Hr(e, t, i, a) {
      Vo = null;
      var l = xc(a), f = Ks(l);
      if (f !== null) {
        var v = _i(f);
        if (v === null)
          f = null;
        else {
          var m = v.tag;
          if (m === Oe) {
            var b = Fd(v);
            if (b !== null)
              return b;
            f = null;
          } else if (m === A) {
            var w = v.stateNode;
            if (cf(w))
              return Lc(v);
            f = null;
          } else v !== f && (f = null);
        }
      }
      return Vo = f, null;
    }
    function hf(e) {
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
          return Fn;
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
            case Nc:
              return Fn;
            case pl:
              return no;
            case _a:
            case ah:
              return Da;
            case zc:
              return Ru;
            default:
              return Da;
          }
        }
        default:
          return Da;
      }
    }
    function zu(e, t, i) {
      return e.addEventListener(t, i, !1), i;
    }
    function ro(e, t, i) {
      return e.addEventListener(t, i, !0), i;
    }
    function mf(e, t, i, a) {
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
    var ea = null, Uu = null, ta = null;
    function yf(e) {
      return ea = e, Uu = js(), !0;
    }
    function Fs() {
      ea = null, Uu = null, ta = null;
    }
    function gf() {
      if (ta)
        return ta;
      var e, t = Uu, i = t.length, a, l = js(), f = l.length;
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
    }, bf = _n(Jn), xl = _t({}, Jn, {
      view: 0,
      detail: 0
    }), up = _n(xl), sp, La, Pu;
    function cp(e) {
      e !== Pu && (Pu && e.type === "mousemove" ? (sp = e.screenX - Pu.screenX, La = e.screenY - Pu.screenY) : (sp = 0, La = 0), Pu = e);
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
    }), Sf = _n(Ma), kl = _t({}, Ma, {
      dataTransfer: 0
    }), kh = _n(kl), _h = _t({}, xl, {
      relatedTarget: 0
    }), Vs = _n(_h), Ef = _t({}, Jn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), eg = _n(Ef), tg = _t({}, Jn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Dh = _n(tg), Oh = _t({}, Jn, {
      data: 0
    }), Io = _n(Oh), ng = Io, Hu = {
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
    }, Lh = {
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
        var t = Hu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = Rl(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? Lh[e.keyCode] || "Unidentified" : "";
    }
    var rg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Mh(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var a = rg[e];
      return a ? !!i[a] : !1;
    }
    function fp(e) {
      return Mh;
    }
    var ig = _t({}, xl, {
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
    }), Ah = _n(ig), $h = _t({}, Ma, {
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
    }), Nh = _n($h), na = _t({}, xl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fp
    }), dp = _n(na), ag = _t({}, Jn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bo = _n(ag), Cf = _t({}, Ma, {
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
    }), _l = _n(Cf), wf = [9, 13, 27, 32], Tf = 229, Is = dn && "CompositionEvent" in window, Bs = null;
    dn && "documentMode" in document && (Bs = document.documentMode);
    var pp = dn && "TextEvent" in window && !Bs, zh = dn && (!Is || Bs && Bs > 8 && Bs <= 11), vp = 32, hp = String.fromCharCode(vp);
    function Rf() {
      nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), nr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), nr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), nr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ws = !1;
    function Uh(e) {
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
    function og(e, t) {
      return e === "keydown" && t.keyCode === Tf;
    }
    function yp(e, t) {
      switch (e) {
        case "keyup":
          return wf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Tf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function xf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ys(e) {
      return e.locale === "ko";
    }
    var Wo = !1;
    function kf(e, t, i, a, l) {
      var f, v;
      if (Is ? f = mp(t) : Wo ? yp(t, a) && (f = "onCompositionEnd") : og(t, a) && (f = "onCompositionStart"), !f)
        return null;
      zh && !Ys(a) && (!Wo && f === "onCompositionStart" ? Wo = yf(l) : f === "onCompositionEnd" && Wo && (v = gf()));
      var m = Ih(i, f);
      if (m.length > 0) {
        var b = new Io(f, t, null, a, l);
        if (e.push({
          event: b,
          listeners: m
        }), v)
          b.data = v;
        else {
          var w = xf(a);
          w !== null && (b.data = w);
        }
      }
    }
    function Ph(e, t) {
      switch (e) {
        case "compositionend":
          return xf(t);
        case "keypress":
          var i = t.which;
          return i !== vp ? null : (Ws = !0, hp);
        case "textInput":
          var a = t.data;
          return a === hp && Ws ? null : a;
        default:
          return null;
      }
    }
    function lg(e, t) {
      if (Wo) {
        if (e === "compositionend" || !Is && yp(e, t)) {
          var i = gf();
          return Fs(), Wo = !1, i;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Uh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return zh && !Ys(t) ? null : t.data;
        default:
          return null;
      }
    }
    function _f(e, t, i, a, l) {
      var f;
      if (pp ? f = Ph(t, a) : f = lg(t, a), !f)
        return null;
      var v = Ih(i, "onBeforeInput");
      if (v.length > 0) {
        var m = new ng("onBeforeInput", "beforeinput", null, a, l);
        e.push({
          event: m,
          listeners: v
        }), m.data = f;
      }
    }
    function ug(e, t, i, a, l, f, v) {
      kf(e, t, i, a, l), _f(e, t, i, a, l);
    }
    var Gs = {
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
    function Hh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Gs[e.type] : t === "textarea";
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
    function Df(e) {
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
      kc(a);
      var l = Ih(t, "onChange");
      if (l.length > 0) {
        var f = new bf("onChange", "change", null, i, a);
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
      r(t, s, e, xc(e)), Md(C, t);
    }
    function C(e) {
      BS(e, 0);
    }
    function k(e) {
      var t = Nf(e);
      if (tu(t))
        return e;
    }
    function M(e, t) {
      if (e === "change")
        return t;
    }
    var G = !1;
    dn && (G = Df("input") && (!document.documentMode || document.documentMode > 9));
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
    function jn(e, t) {
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
      var m = i ? Nf(i) : window, b, w;
      if (p(m) ? b = M : Hh(m) ? G ? b = H : (b = Me, w = Re) : ze(m) && (b = jn), b) {
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
      if (m && !Zv(a)) {
        var w = a.relatedTarget || a.fromElement;
        if (w && (Ks(w) || Lp(w)))
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
          if (N = i, W = Q ? Ks(Q) : null, W !== null) {
            var Z = _i(W);
            (W !== Z || W.tag !== B && W.tag !== se) && (W = null);
          }
        } else
          N = null, W = i;
        if (N !== W) {
          var Se = Sf, Xe = "onMouseLeave", Be = "onMouseEnter", Ht = "mouse";
          (t === "pointerout" || t === "pointerover") && (Se = Nh, Xe = "onPointerLeave", Be = "onPointerEnter", Ht = "pointer");
          var At = N == null ? R : Nf(N), F = W == null ? R : Nf(W), J = new Se(Xe, Ht + "leave", N, a, l);
          J.target = At, J.relatedTarget = F;
          var j = null, ue = Ks(l);
          if (ue === i) {
            var ke = new Se(Be, Ht + "enter", W, a, l);
            ke.target = F, ke.relatedTarget = At, j = ke;
          }
          rR(e, J, j, N, W);
        }
      }
    }
    function et(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ae = typeof Object.is == "function" ? Object.is : et;
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
    function sg(e) {
      var t = e.ownerDocument, i = t && t.defaultView || window, a = i.getSelection && i.getSelection();
      if (!a || a.rangeCount === 0)
        return null;
      var l = a.anchorNode, f = a.anchorOffset, v = a.focusNode, m = a.focusOffset;
      try {
        l.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return UT(e, l, f, v, m);
    }
    function UT(e, t, i, a, l) {
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
    function PT(e, t) {
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
    function MS(e) {
      return e && e.nodeType === Ga;
    }
    function AS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : MS(e) ? !1 : MS(t) ? AS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function HT(e) {
      return e && e.ownerDocument && AS(e.ownerDocument.documentElement, e);
    }
    function FT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function $S() {
      for (var e = window, t = Do(); t instanceof e.HTMLIFrameElement; ) {
        if (FT(t))
          e = t.contentWindow;
        else
          return t;
        t = Do(e.document);
      }
      return t;
    }
    function cg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function jT() {
      var e = $S();
      return {
        focusedElem: e,
        selectionRange: cg(e) ? IT(e) : null
      };
    }
    function VT(e) {
      var t = $S(), i = e.focusedElem, a = e.selectionRange;
      if (t !== i && HT(i)) {
        a !== null && cg(i) && BT(i, a);
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
    function IT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = sg(e), t || {
        start: 0,
        end: 0
      };
    }
    function BT(e, t) {
      var i = t.start, a = t.end;
      a === void 0 && (a = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(a, e.value.length)) : PT(e, t);
    }
    var WT = dn && "documentMode" in document && document.documentMode <= 11;
    function YT() {
      nr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Of = null, fg = null, gp = null, dg = !1;
    function GT(e) {
      if ("selectionStart" in e && cg(e))
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
    function QT(e) {
      return e.window === e ? e.document : e.nodeType === va ? e : e.ownerDocument;
    }
    function NS(e, t, i) {
      var a = QT(i);
      if (!(dg || Of == null || Of !== Do(a))) {
        var l = GT(Of);
        if (!gp || !it(gp, l)) {
          gp = l;
          var f = Ih(fg, "onSelect");
          if (f.length > 0) {
            var v = new bf("onSelect", "select", null, t, i);
            e.push({
              event: v,
              listeners: f
            }), v.target = Of;
          }
        }
      }
    }
    function qT(e, t, i, a, l, f, v) {
      var m = i ? Nf(i) : window;
      switch (t) {
        case "focusin":
          (Hh(m) || m.contentEditable === "true") && (Of = m, fg = i, gp = null);
          break;
        case "focusout":
          Of = null, fg = null, gp = null;
          break;
        case "mousedown":
          dg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          dg = !1, NS(e, a, l);
          break;
        case "selectionchange":
          if (WT)
            break;
        case "keydown":
        case "keyup":
          NS(e, a, l);
      }
    }
    function Fh(e, t) {
      var i = {};
      return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
    }
    var Lf = {
      animationend: Fh("Animation", "AnimationEnd"),
      animationiteration: Fh("Animation", "AnimationIteration"),
      animationstart: Fh("Animation", "AnimationStart"),
      transitionend: Fh("Transition", "TransitionEnd")
    }, pg = {}, zS = {};
    dn && (zS = document.createElement("div").style, "AnimationEvent" in window || (delete Lf.animationend.animation, delete Lf.animationiteration.animation, delete Lf.animationstart.animation), "TransitionEvent" in window || delete Lf.transitionend.transition);
    function jh(e) {
      if (pg[e])
        return pg[e];
      if (!Lf[e])
        return e;
      var t = Lf[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in zS)
          return pg[e] = t[i];
      return e;
    }
    var US = jh("animationend"), PS = jh("animationiteration"), HS = jh("animationstart"), FS = jh("transitionend"), jS = /* @__PURE__ */ new Map(), VS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Fu(e, t) {
      jS.set(e, t), nr(t, [e]);
    }
    function KT() {
      for (var e = 0; e < VS.length; e++) {
        var t = VS[e], i = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
        Fu(i, "on" + a);
      }
      Fu(US, "onAnimationEnd"), Fu(PS, "onAnimationIteration"), Fu(HS, "onAnimationStart"), Fu("dblclick", "onDoubleClick"), Fu("focusin", "onFocus"), Fu("focusout", "onBlur"), Fu(FS, "onTransitionEnd");
    }
    function XT(e, t, i, a, l, f, v) {
      var m = jS.get(t);
      if (m !== void 0) {
        var b = bf, w = t;
        switch (t) {
          case "keypress":
            if (Rl(a) === 0)
              return;
          case "keydown":
          case "keyup":
            b = Ah;
            break;
          case "focusin":
            w = "focus", b = Vs;
            break;
          case "focusout":
            w = "blur", b = Vs;
            break;
          case "beforeblur":
          case "afterblur":
            b = Vs;
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
            b = Sf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = kh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = dp;
            break;
          case US:
          case PS:
          case HS:
            b = eg;
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
            b = Dh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = Nh;
            break;
        }
        var R = (f & ll) !== 0;
        {
          var U = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", N = tR(i, m, a.type, R, U);
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
    KT(), pe(), n(), YT(), Rf();
    function ZT(e, t, i, a, l, f, v) {
      XT(e, t, i, a, l, f);
      var m = (f & jy) === 0;
      m && (Ve(e, t, i, a, l), I(e, t, i, a, l), qT(e, t, i, a, l), ug(e, t, i, a, l));
    }
    var bp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], vg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(bp));
    function IS(e, t, i) {
      var a = e.type || "unknown-event";
      e.currentTarget = i, Xa(a, t, void 0, e), e.currentTarget = null;
    }
    function JT(e, t, i) {
      var a;
      if (i)
        for (var l = t.length - 1; l >= 0; l--) {
          var f = t[l], v = f.instance, m = f.currentTarget, b = f.listener;
          if (v !== a && e.isPropagationStopped())
            return;
          IS(e, b, m), a = v;
        }
      else
        for (var w = 0; w < t.length; w++) {
          var R = t[w], U = R.instance, N = R.currentTarget, W = R.listener;
          if (U !== a && e.isPropagationStopped())
            return;
          IS(e, W, N), a = U;
        }
    }
    function BS(e, t) {
      for (var i = (t & ll) !== 0, a = 0; a < e.length; a++) {
        var l = e[a], f = l.event, v = l.listeners;
        JT(f, v, i);
      }
      zd();
    }
    function eR(e, t, i, a, l) {
      var f = xc(i), v = [];
      ZT(v, e, a, i, f, t), BS(v, t);
    }
    function Dn(e, t) {
      vg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var i = !1, a = Ox(t), l = iR(e);
      a.has(l) || (WS(t, e, ms, i), a.add(l));
    }
    function hg(e, t, i) {
      vg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var a = 0;
      t && (a |= ll), WS(i, e, a, t);
    }
    var Vh = "_reactListening" + Math.random().toString(36).slice(2);
    function Sp(e) {
      if (!e[Vh]) {
        e[Vh] = !0, wt.forEach(function(i) {
          i !== "selectionchange" && (vg.has(i) || hg(i, !1, e), hg(i, !0, e));
        });
        var t = e.nodeType === va ? e : e.ownerDocument;
        t !== null && (t[Vh] || (t[Vh] = !0, hg("selectionchange", !1, t)));
      }
    }
    function WS(e, t, i, a, l) {
      var f = Zn(e, t, i), v = void 0;
      Es && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, a ? v !== void 0 ? mf(e, t, f, v) : ro(e, t, f) : v !== void 0 ? lp(e, t, f, v) : zu(e, t, f);
    }
    function YS(e, t) {
      return e === t || e.nodeType === Bn && e.parentNode === t;
    }
    function mg(e, t, i, a, l) {
      var f = a;
      if (!(t & qa) && !(t & ms)) {
        var v = l;
        if (a !== null) {
          var m = a;
          e: for (; ; ) {
            if (m === null)
              return;
            var b = m.tag;
            if (b === A || b === K) {
              var w = m.stateNode.containerInfo;
              if (YS(w, v))
                break;
              if (b === K)
                for (var R = m.return; R !== null; ) {
                  var U = R.tag;
                  if (U === A || U === K) {
                    var N = R.stateNode.containerInfo;
                    if (YS(N, v))
                      return;
                  }
                  R = R.return;
                }
              for (; w !== null; ) {
                var W = Ks(w);
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
        return eR(e, t, i, f);
      });
    }
    function Ep(e, t, i) {
      return {
        instance: e,
        listener: t,
        currentTarget: i
      };
    }
    function tR(e, t, i, a, l, f) {
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
    function Ih(e, t) {
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
    function Mf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== B);
      return e || null;
    }
    function nR(e, t) {
      for (var i = e, a = t, l = 0, f = i; f; f = Mf(f))
        l++;
      for (var v = 0, m = a; m; m = Mf(m))
        v++;
      for (; l - v > 0; )
        i = Mf(i), l--;
      for (; v - l > 0; )
        a = Mf(a), v--;
      for (var b = l; b--; ) {
        if (i === a || a !== null && i === a.alternate)
          return i;
        i = Mf(i), a = Mf(a);
      }
      return null;
    }
    function GS(e, t, i, a, l) {
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
    function rR(e, t, i, a, l) {
      var f = a && l ? nR(a, l) : null;
      a !== null && GS(e, t, a, f, !1), l !== null && i !== null && GS(e, i, l, f, !0);
    }
    function iR(e, t) {
      return e + "__bubble";
    }
    var ra = !1, Cp = "dangerouslySetInnerHTML", Bh = "suppressContentEditableWarning", ju = "suppressHydrationWarning", QS = "autoFocus", Qs = "children", qs = "style", Wh = "__html", yg, Yh, wp, qS, Gh, KS, XS;
    yg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Yh = function(e, t) {
      Rc(e, t), kd(e, t), Xv(e, t, {
        registrationNameDependencies: Tt,
        possibleRegistrationNames: tn
      });
    }, KS = dn && !document.documentMode, wp = function(e, t, i) {
      if (!ra) {
        var a = Qh(i), l = Qh(t);
        l !== a && (ra = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(a)));
      }
    }, qS = function(e) {
      if (!ra) {
        ra = !0;
        var t = [];
        e.forEach(function(i) {
          t.push(i);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Gh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, XS = function(e, t) {
      var i = e.namespaceURI === Ya ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return i.innerHTML = t, i.innerHTML;
    };
    var aR = /\r\n?/g, oR = /\u0000|\uFFFD/g;
    function Qh(e) {
      Or(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(aR, `
`).replace(oR, "");
    }
    function qh(e, t, i, a) {
      var l = Qh(t), f = Qh(e);
      if (f !== l && (a && (ra || (ra = !0, g('Text content did not match. Server: "%s" Client: "%s"', f, l))), i && we))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function ZS(e) {
      return e.nodeType === va ? e : e.ownerDocument;
    }
    function lR() {
    }
    function Kh(e) {
      e.onclick = lR;
    }
    function uR(e, t, i, a, l) {
      for (var f in a)
        if (a.hasOwnProperty(f)) {
          var v = a[f];
          if (f === qs)
            v && Object.freeze(v), jv(t, v);
          else if (f === Cp) {
            var m = v ? v[Wh] : void 0;
            m != null && Ov(t, m);
          } else if (f === Qs)
            if (typeof v == "string") {
              var b = e !== "textarea" || v !== "";
              b && Ec(t, v);
            } else typeof v == "number" && Ec(t, "" + v);
          else f === Bh || f === ju || f === QS || (Tt.hasOwnProperty(f) ? v != null && (typeof v != "function" && Gh(f, v), f === "onScroll" && Dn("scroll", t)) : v != null && $r(t, f, v, l));
        }
    }
    function sR(e, t, i, a) {
      for (var l = 0; l < t.length; l += 2) {
        var f = t[l], v = t[l + 1];
        f === qs ? jv(e, v) : f === Cp ? Ov(e, v) : f === Qs ? Ec(e, v) : $r(e, f, v, a);
      }
    }
    function cR(e, t, i, a) {
      var l, f = ZS(i), v, m = a;
      if (m === Ya && (m = bc(e)), m === Ya) {
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
      return m === Ya && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !zn.call(yg, e) && (yg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function fR(e, t) {
      return ZS(t).createTextNode(e);
    }
    function dR(e, t, i, a) {
      var l = Qa(t, i);
      Yh(t, i);
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
          D(e, i), f = S(e, i), Dn("invalid", e);
          break;
        case "option":
          rn(e, i), f = i;
          break;
        case "select":
          ds(e, i), f = fs(e, i), Dn("invalid", e);
          break;
        case "textarea":
          kv(e, i), f = gd(e, i), Dn("invalid", e);
          break;
        default:
          f = i;
      }
      switch (wc(t, f), uR(t, e, a, f, l), t) {
        case "input":
          Vi(e), fe(e, i, !1);
          break;
        case "textarea":
          Vi(e), Dv(e);
          break;
        case "option":
          un(e, i);
          break;
        case "select":
          md(e, i);
          break;
        default:
          typeof f.onClick == "function" && Kh(e);
          break;
      }
    }
    function pR(e, t, i, a, l) {
      Yh(t, a);
      var f = null, v, m;
      switch (t) {
        case "input":
          v = S(e, i), m = S(e, a), f = [];
          break;
        case "select":
          v = fs(e, i), m = fs(e, a), f = [];
          break;
        case "textarea":
          v = gd(e, i), m = gd(e, a), f = [];
          break;
        default:
          v = i, m = a, typeof v.onClick != "function" && typeof m.onClick == "function" && Kh(e);
          break;
      }
      wc(t, m);
      var b, w, R = null;
      for (b in v)
        if (!(m.hasOwnProperty(b) || !v.hasOwnProperty(b) || v[b] == null))
          if (b === qs) {
            var U = v[b];
            for (w in U)
              U.hasOwnProperty(w) && (R || (R = {}), R[w] = "");
          } else b === Cp || b === Qs || b === Bh || b === ju || b === QS || (Tt.hasOwnProperty(b) ? f || (f = []) : (f = f || []).push(b, null));
      for (b in m) {
        var N = m[b], W = v != null ? v[b] : void 0;
        if (!(!m.hasOwnProperty(b) || N === W || N == null && W == null))
          if (b === qs)
            if (N && Object.freeze(N), W) {
              for (w in W)
                W.hasOwnProperty(w) && (!N || !N.hasOwnProperty(w)) && (R || (R = {}), R[w] = "");
              for (w in N)
                N.hasOwnProperty(w) && W[w] !== N[w] && (R || (R = {}), R[w] = N[w]);
            } else
              R || (f || (f = []), f.push(b, R)), R = N;
          else if (b === Cp) {
            var Q = N ? N[Wh] : void 0, Z = W ? W[Wh] : void 0;
            Q != null && Z !== Q && (f = f || []).push(b, Q);
          } else b === Qs ? (typeof N == "string" || typeof N == "number") && (f = f || []).push(b, "" + N) : b === Bh || b === ju || (Tt.hasOwnProperty(b) ? (N != null && (typeof N != "function" && Gh(b, N), b === "onScroll" && Dn("scroll", e)), !f && W !== N && (f = [])) : (f = f || []).push(b, N));
      }
      return R && (vs(R, m[qs]), (f = f || []).push(qs, R)), f;
    }
    function vR(e, t, i, a, l) {
      i === "input" && l.type === "radio" && l.name != null && Y(e, l);
      var f = Qa(i, a), v = Qa(i, l);
      switch (sR(e, t, f, v), i) {
        case "input":
          X(e, l);
          break;
        case "textarea":
          _v(e, l);
          break;
        case "select":
          Ly(e, l);
          break;
      }
    }
    function hR(e) {
      {
        var t = e.toLowerCase();
        return Tc.hasOwnProperty(t) && Tc[t] || null;
      }
    }
    function mR(e, t, i, a, l, f, v) {
      var m, b;
      switch (m = Qa(t, i), Yh(t, i), t) {
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
          ds(e, i), Dn("invalid", e);
          break;
        case "textarea":
          kv(e, i), Dn("invalid", e);
          break;
      }
      wc(t, i);
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
          if (Q === Qs)
            typeof Z == "string" ? e.textContent !== Z && (i[ju] !== !0 && qh(e.textContent, Z, f, v), W = [Qs, Z]) : typeof Z == "number" && e.textContent !== "" + Z && (i[ju] !== !0 && qh(e.textContent, Z, f, v), W = [Qs, "" + Z]);
          else if (Tt.hasOwnProperty(Q))
            Z != null && (typeof Z != "function" && Gh(Q, Z), Q === "onScroll" && Dn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var Se = void 0, Xe = m && Ne ? null : hr(Q);
            if (i[ju] !== !0) {
              if (!(Q === Bh || Q === ju || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Q === "value" || Q === "checked" || Q === "selected")) {
                if (Q === Cp) {
                  var Be = e.innerHTML, Ht = Z ? Z[Wh] : void 0;
                  if (Ht != null) {
                    var At = XS(e, Ht);
                    At !== Be && wp(Q, Be, At);
                  }
                } else if (Q === qs) {
                  if (b.delete(Q), KS) {
                    var F = Hy(Z);
                    Se = e.getAttribute("style"), F !== Se && wp(Q, Se, F);
                  }
                } else if (m && !Ne)
                  b.delete(Q.toLowerCase()), Se = Ar(e, Q, Z), Z !== Se && wp(Q, Se, Z);
                else if (!vn(Q, Xe, m) && !Kt(Q, Z, Xe, m)) {
                  var J = !1;
                  if (Xe !== null)
                    b.delete(Xe.attributeName), Se = Mr(e, Q, Z, Xe);
                  else {
                    var j = a;
                    if (j === Ya && (j = bc(t)), j === Ya)
                      b.delete(Q.toLowerCase());
                    else {
                      var ue = hR(Q);
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
      b.size > 0 && i[ju] !== !0 && qS(b), t) {
        case "input":
          Vi(e), fe(e, i, !0);
          break;
        case "textarea":
          Vi(e), Dv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && Kh(e);
          break;
      }
      return W;
    }
    function yR(e, t, i) {
      var a = e.nodeValue !== t;
      return a;
    }
    function gg(e, t) {
      {
        if (ra)
          return;
        ra = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function bg(e, t) {
      {
        if (ra)
          return;
        ra = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Sg(e, t, i) {
      {
        if (ra)
          return;
        ra = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Eg(e, t) {
      {
        if (t === "" || ra)
          return;
        ra = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function gR(e, t, i) {
      switch (t) {
        case "input":
          Je(e, i);
          return;
        case "textarea":
          bd(e, i);
          return;
        case "select":
          My(e, i);
          return;
      }
    }
    var Tp = function() {
    }, Rp = function() {
    };
    {
      var bR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], JS = [
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
      ], SR = JS.concat(["button"]), ER = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], eE = {
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
        var i = _t({}, e || eE), a = {
          tag: t
        };
        return JS.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), SR.indexOf(t) !== -1 && (i.pTagInButtonScope = null), bR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = a, t === "form" && (i.formTag = a), t === "a" && (i.aTagInScope = a), t === "button" && (i.buttonTagInScope = a), t === "nobr" && (i.nobrTagInScope = a), t === "p" && (i.pTagInButtonScope = a), t === "li" && (i.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = a), i;
      };
      var CR = function(e, t) {
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
            return ER.indexOf(t) === -1;
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
      }, wR = function(e, t) {
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
      }, tE = {};
      Tp = function(e, t, i) {
        i = i || eE;
        var a = i.current, l = a && a.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var f = CR(e, l) ? null : a, v = f ? null : wR(e, i), m = f || v;
        if (m) {
          var b = m.tag, w = !!f + "|" + e + "|" + b;
          if (!tE[w]) {
            tE[w] = !0;
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
    var Xh = "suppressHydrationWarning", Zh = "$", Jh = "/$", xp = "$?", kp = "$!", TR = "style", Cg = null, wg = null;
    function RR(e) {
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
    function xR(e, t, i) {
      {
        var a = e, l = Ed(a.namespace, t), f = Rp(a.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: f
        };
      }
    }
    function PA(e) {
      return e;
    }
    function kR(e) {
      Cg = $u(), wg = jT();
      var t = null;
      return gi(!1), t;
    }
    function _R(e) {
      VT(wg), gi(Cg), Cg = null, wg = null;
    }
    function DR(e, t, i, a, l) {
      var f;
      {
        var v = a;
        if (Tp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, b = Rp(v.ancestorInfo, e);
          Tp(null, m, b);
        }
        f = v.namespace;
      }
      var w = cR(e, t, i, f);
      return Op(l, w), Lg(w, t), w;
    }
    function OR(e, t) {
      e.appendChild(t);
    }
    function LR(e, t, i, a, l) {
      switch (dR(e, t, i, a), t) {
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
    function MR(e, t, i, a, l, f) {
      {
        var v = f;
        if (typeof a.children != typeof i.children && (typeof a.children == "string" || typeof a.children == "number")) {
          var m = "" + a.children, b = Rp(v.ancestorInfo, t);
          Tp(null, m, b);
        }
      }
      return pR(e, t, i, a);
    }
    function Tg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function AR(e, t, i, a) {
      {
        var l = i;
        Tp(null, e, l.ancestorInfo);
      }
      var f = fR(e, t);
      return Op(a, f), f;
    }
    function $R() {
      var e = window.event;
      return e === void 0 ? Da : hf(e.type);
    }
    var Rg = typeof setTimeout == "function" ? setTimeout : void 0, NR = typeof clearTimeout == "function" ? clearTimeout : void 0, xg = -1, nE = typeof Promise == "function" ? Promise : void 0, zR = typeof queueMicrotask == "function" ? queueMicrotask : typeof nE < "u" ? function(e) {
      return nE.resolve(null).then(e).catch(UR);
    } : Rg;
    function UR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function PR(e, t, i, a) {
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
    function HR(e, t, i, a, l, f) {
      vR(e, t, i, a, l), Lg(e, l);
    }
    function rE(e) {
      Ec(e, "");
    }
    function FR(e, t, i) {
      e.nodeValue = i;
    }
    function jR(e, t) {
      e.appendChild(t);
    }
    function VR(e, t) {
      var i;
      e.nodeType === Bn ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var a = e._reactRootContainer;
      a == null && i.onclick === null && Kh(i);
    }
    function IR(e, t, i) {
      e.insertBefore(t, i);
    }
    function BR(e, t, i) {
      e.nodeType === Bn ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function WR(e, t) {
      e.removeChild(t);
    }
    function YR(e, t) {
      e.nodeType === Bn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function kg(e, t) {
      var i = t, a = 0;
      do {
        var l = i.nextSibling;
        if (e.removeChild(i), l && l.nodeType === Bn) {
          var f = l.data;
          if (f === Jh)
            if (a === 0) {
              e.removeChild(l), $n(t);
              return;
            } else
              a--;
          else (f === Zh || f === xp || f === kp) && a++;
        }
        i = l;
      } while (i);
      $n(t);
    }
    function GR(e, t) {
      e.nodeType === Bn ? kg(e.parentNode, t) : e.nodeType === ui && kg(e, t), $n(e);
    }
    function QR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function qR(e) {
      e.nodeValue = "";
    }
    function KR(e, t) {
      e = e;
      var i = t[TR], a = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = Cc("display", a);
    }
    function XR(e, t) {
      e.nodeValue = t;
    }
    function ZR(e) {
      e.nodeType === ui ? e.textContent = "" : e.nodeType === va && e.documentElement && e.removeChild(e.documentElement);
    }
    function JR(e, t, i) {
      return e.nodeType !== ui || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function ex(e, t) {
      return t === "" || e.nodeType !== Ga ? null : e;
    }
    function tx(e) {
      return e.nodeType !== Bn ? null : e;
    }
    function iE(e) {
      return e.data === xp;
    }
    function _g(e) {
      return e.data === kp;
    }
    function nx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, i, a, l;
      return t && (i = t.dgst, a = t.msg, l = t.stck), {
        message: a,
        digest: i,
        stack: l
      };
    }
    function rx(e, t) {
      e._reactRetry = t;
    }
    function em(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ui || t === Ga)
          break;
        if (t === Bn) {
          var i = e.data;
          if (i === Zh || i === kp || i === xp)
            break;
          if (i === Jh)
            return null;
        }
      }
      return e;
    }
    function _p(e) {
      return em(e.nextSibling);
    }
    function ix(e) {
      return em(e.firstChild);
    }
    function ax(e) {
      return em(e.firstChild);
    }
    function ox(e) {
      return em(e.nextSibling);
    }
    function lx(e, t, i, a, l, f, v) {
      Op(f, e), Lg(e, i);
      var m;
      {
        var b = l;
        m = b.namespace;
      }
      var w = (f.mode & Ie) !== je;
      return mR(e, t, i, m, a, w, v);
    }
    function ux(e, t, i, a) {
      return Op(i, e), i.mode & Ie, yR(e, t);
    }
    function sx(e, t) {
      Op(t, e);
    }
    function cx(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === Bn) {
          var a = t.data;
          if (a === Jh) {
            if (i === 0)
              return _p(t);
            i--;
          } else (a === Zh || a === kp || a === xp) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function aE(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === Bn) {
          var a = t.data;
          if (a === Zh || a === kp || a === xp) {
            if (i === 0)
              return t;
            i--;
          } else a === Jh && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function fx(e) {
      $n(e);
    }
    function dx(e) {
      $n(e);
    }
    function px(e) {
      return e !== "head" && e !== "body";
    }
    function vx(e, t, i, a) {
      var l = !0;
      qh(t.nodeValue, i, a, l);
    }
    function hx(e, t, i, a, l, f) {
      if (t[Xh] !== !0) {
        var v = !0;
        qh(a.nodeValue, l, f, v);
      }
    }
    function mx(e, t) {
      t.nodeType === ui ? gg(e, t) : t.nodeType === Bn || bg(e, t);
    }
    function yx(e, t) {
      {
        var i = e.parentNode;
        i !== null && (t.nodeType === ui ? gg(i, t) : t.nodeType === Bn || bg(i, t));
      }
    }
    function gx(e, t, i, a, l) {
      (l || t[Xh] !== !0) && (a.nodeType === ui ? gg(i, a) : a.nodeType === Bn || bg(i, a));
    }
    function bx(e, t, i) {
      Sg(e, t);
    }
    function Sx(e, t) {
      Eg(e, t);
    }
    function Ex(e, t, i) {
      {
        var a = e.parentNode;
        a !== null && Sg(a, t);
      }
    }
    function Cx(e, t) {
      {
        var i = e.parentNode;
        i !== null && Eg(i, t);
      }
    }
    function wx(e, t, i, a, l, f) {
      (f || t[Xh] !== !0) && Sg(i, a);
    }
    function Tx(e, t, i, a, l) {
      (l || t[Xh] !== !0) && Eg(i, a);
    }
    function Rx(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function xx(e) {
      Sp(e);
    }
    var Af = Math.random().toString(36).slice(2), $f = "__reactFiber$" + Af, Dg = "__reactProps$" + Af, Dp = "__reactContainer$" + Af, Og = "__reactEvents$" + Af, kx = "__reactListeners$" + Af, _x = "__reactHandles$" + Af;
    function Dx(e) {
      delete e[$f], delete e[Dg], delete e[Og], delete e[kx], delete e[_x];
    }
    function Op(e, t) {
      t[$f] = e;
    }
    function tm(e, t) {
      t[Dp] = e;
    }
    function oE(e) {
      e[Dp] = null;
    }
    function Lp(e) {
      return !!e[Dp];
    }
    function Ks(e) {
      var t = e[$f];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[Dp] || i[$f], t) {
          var a = t.alternate;
          if (t.child !== null || a !== null && a.child !== null)
            for (var l = aE(e); l !== null; ) {
              var f = l[$f];
              if (f)
                return f;
              l = aE(l);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    function Vu(e) {
      var t = e[$f] || e[Dp];
      return t && (t.tag === B || t.tag === se || t.tag === Oe || t.tag === A) ? t : null;
    }
    function Nf(e) {
      if (e.tag === B || e.tag === se)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function nm(e) {
      return e[Dg] || null;
    }
    function Lg(e, t) {
      e[Dg] = t;
    }
    function Ox(e) {
      var t = e[Og];
      return t === void 0 && (t = e[Og] = /* @__PURE__ */ new Set()), t;
    }
    var lE = {}, uE = d.ReactDebugCurrentFrame;
    function rm(e) {
      if (e) {
        var t = e._owner, i = Ta(e.type, e._source, t ? t.type : null);
        uE.setExtraStackFrame(i);
      } else
        uE.setExtraStackFrame(null);
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
            m && !(m instanceof Error) && (rm(l), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", i, v, typeof m), rm(null)), m instanceof Error && !(m.message in lE) && (lE[m.message] = !0, rm(l), g("Failed %s type: %s", i, m.message), rm(null));
          }
      }
    }
    var Mg = [], im;
    im = [];
    var Dl = -1;
    function Iu(e) {
      return {
        current: e
      };
    }
    function bi(e, t) {
      if (Dl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== im[Dl] && g("Unexpected Fiber popped."), e.current = Mg[Dl], Mg[Dl] = null, im[Dl] = null, Dl--;
    }
    function Si(e, t, i) {
      Dl++, Mg[Dl] = e.current, im[Dl] = i, e.current = t;
    }
    var Ag;
    Ag = {};
    var ga = {};
    Object.freeze(ga);
    var Ol = Iu(ga), Yo = Iu(!1), $g = ga;
    function zf(e, t, i) {
      return i && Go(t) ? $g : Ol.current;
    }
    function sE(e, t, i) {
      {
        var a = e.stateNode;
        a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = i;
      }
    }
    function Uf(e, t) {
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
        return l && sE(e, t, f), f;
      }
    }
    function am() {
      return Yo.current;
    }
    function Go(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function om(e) {
      bi(Yo, e), bi(Ol, e);
    }
    function Ng(e) {
      bi(Yo, e), bi(Ol, e);
    }
    function cE(e, t, i) {
      {
        if (Ol.current !== ga)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Si(Ol, t, e), Si(Yo, i, e);
      }
    }
    function fE(e, t, i) {
      {
        var a = e.stateNode, l = t.childContextTypes;
        if (typeof a.getChildContext != "function") {
          {
            var f = pt(e) || "Unknown";
            Ag[f] || (Ag[f] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", f, f));
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
    function lm(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || ga;
        return $g = Ol.current, Si(Ol, i, e), Si(Yo, Yo.current, e), !0;
      }
    }
    function dE(e, t, i) {
      {
        var a = e.stateNode;
        if (!a)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var l = fE(e, t, $g);
          a.__reactInternalMemoizedMergedChildContext = l, bi(Yo, e), bi(Ol, e), Si(Ol, l, e), Si(Yo, i, e);
        } else
          bi(Yo, e), Si(Yo, i, e);
      }
    }
    function Lx(e) {
      {
        if (!jd(e) || e.tag !== L)
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
    var Bu = 0, um = 1, Ll = null, zg = !1, Ug = !1;
    function pE(e) {
      Ll === null ? Ll = [e] : Ll.push(e);
    }
    function Mx(e) {
      zg = !0, pE(e);
    }
    function vE() {
      zg && Wu();
    }
    function Wu() {
      if (!Ug && Ll !== null) {
        Ug = !0;
        var e = 0, t = Zi();
        try {
          var i = !0, a = Ll;
          for (An(Fn); e < a.length; e++) {
            var l = a[e];
            do
              l = l(i);
            while (l !== null);
          }
          Ll = null, zg = !1;
        } catch (f) {
          throw Ll !== null && (Ll = Ll.slice(e + 1)), Ac(Nc, Wu), f;
        } finally {
          An(t), Ug = !1;
        }
      }
      return null;
    }
    var Pf = [], Hf = 0, sm = null, cm = 0, Aa = [], $a = 0, Xs = null, Ml = 1, Al = "";
    function Ax(e) {
      return Js(), (e.flags & Pd) !== Ke;
    }
    function $x(e) {
      return Js(), cm;
    }
    function Nx() {
      var e = Al, t = Ml, i = t & ~zx(t);
      return i.toString(32) + e;
    }
    function Zs(e, t) {
      Js(), Pf[Hf++] = cm, Pf[Hf++] = sm, sm = e, cm = t;
    }
    function hE(e, t, i) {
      Js(), Aa[$a++] = Ml, Aa[$a++] = Al, Aa[$a++] = Xs, Xs = e;
      var a = Ml, l = Al, f = fm(a) - 1, v = a & ~(1 << f), m = i + 1, b = fm(t) + f;
      if (b > 30) {
        var w = f - f % 5, R = (1 << w) - 1, U = (v & R).toString(32), N = v >> w, W = f - w, Q = fm(t) + W, Z = m << W, Se = Z | N, Xe = U + l;
        Ml = 1 << Q | Se, Al = Xe;
      } else {
        var Be = m << f, Ht = Be | v, At = l;
        Ml = 1 << b | Ht, Al = At;
      }
    }
    function Pg(e) {
      Js();
      var t = e.return;
      if (t !== null) {
        var i = 1, a = 0;
        Zs(e, i), hE(e, i, a);
      }
    }
    function fm(e) {
      return 32 - yu(e);
    }
    function zx(e) {
      return 1 << fm(e) - 1;
    }
    function Hg(e) {
      for (; e === sm; )
        sm = Pf[--Hf], Pf[Hf] = null, cm = Pf[--Hf], Pf[Hf] = null;
      for (; e === Xs; )
        Xs = Aa[--$a], Aa[$a] = null, Al = Aa[--$a], Aa[$a] = null, Ml = Aa[--$a], Aa[$a] = null;
    }
    function Ux() {
      return Js(), Xs !== null ? {
        id: Ml,
        overflow: Al
      } : null;
    }
    function Px(e, t) {
      Js(), Aa[$a++] = Ml, Aa[$a++] = Al, Aa[$a++] = Xs, Ml = t.id, Al = t.overflow, Xs = e;
    }
    function Js() {
      Qr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Gr = null, Na = null, lo = !1, ec = !1, Yu = null;
    function Hx() {
      lo && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function mE() {
      ec = !0;
    }
    function Fx() {
      return ec;
    }
    function jx(e) {
      var t = e.stateNode.containerInfo;
      return Na = ax(t), Gr = e, lo = !0, Yu = null, ec = !1, !0;
    }
    function Vx(e, t, i) {
      return Na = ox(t), Gr = e, lo = !0, Yu = null, ec = !1, i !== null && Px(e, i), !0;
    }
    function yE(e, t) {
      switch (e.tag) {
        case A: {
          mx(e.stateNode.containerInfo, t);
          break;
        }
        case B: {
          var i = (e.mode & Ie) !== je;
          gx(
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
          a.dehydrated !== null && yx(a.dehydrated, t);
          break;
        }
      }
    }
    function gE(e, t) {
      yE(e, t);
      var i = YD();
      i.stateNode = t, i.return = e;
      var a = e.deletions;
      a === null ? (e.deletions = [i], e.flags |= Xt) : a.push(i);
    }
    function Fg(e, t) {
      {
        if (ec)
          return;
        switch (e.tag) {
          case A: {
            var i = e.stateNode.containerInfo;
            switch (t.tag) {
              case B:
                var a = t.type;
                t.pendingProps, bx(i, a);
                break;
              case se:
                var l = t.pendingProps;
                Sx(i, l);
                break;
            }
            break;
          }
          case B: {
            var f = e.type, v = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case B: {
                var b = t.type, w = t.pendingProps, R = (e.mode & Ie) !== je;
                wx(
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
                var U = t.pendingProps, N = (e.mode & Ie) !== je;
                Tx(
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
                t.pendingProps, Ex(Q, Z);
                break;
              case se:
                var Se = t.pendingProps;
                Cx(Q, Se);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function bE(e, t) {
      t.flags = t.flags & ~Yi | hn, Fg(e, t);
    }
    function SE(e, t) {
      switch (e.tag) {
        case B: {
          var i = e.type;
          e.pendingProps;
          var a = JR(t, i);
          return a !== null ? (e.stateNode = a, Gr = e, Na = ix(a), !0) : !1;
        }
        case se: {
          var l = e.pendingProps, f = ex(t, l);
          return f !== null ? (e.stateNode = f, Gr = e, Na = null, !0) : !1;
        }
        case Oe: {
          var v = tx(t);
          if (v !== null) {
            var m = {
              dehydrated: v,
              treeContext: Ux(),
              retryLane: Ur
            };
            e.memoizedState = m;
            var b = GD(v);
            return b.return = e, e.child = b, Gr = e, Na = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function jg(e) {
      return (e.mode & Ie) !== je && (e.flags & ft) === Ke;
    }
    function Vg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ig(e) {
      if (lo) {
        var t = Na;
        if (!t) {
          jg(e) && (Fg(Gr, e), Vg()), bE(Gr, e), lo = !1, Gr = e;
          return;
        }
        var i = t;
        if (!SE(e, t)) {
          jg(e) && (Fg(Gr, e), Vg()), t = _p(i);
          var a = Gr;
          if (!t || !SE(e, t)) {
            bE(Gr, e), lo = !1, Gr = e;
            return;
          }
          gE(a, i);
        }
      }
    }
    function Ix(e, t, i) {
      var a = e.stateNode, l = !ec, f = lx(a, e.type, e.memoizedProps, t, i, e, l);
      return e.updateQueue = f, f !== null;
    }
    function Bx(e) {
      var t = e.stateNode, i = e.memoizedProps, a = ux(t, i, e);
      if (a) {
        var l = Gr;
        if (l !== null)
          switch (l.tag) {
            case A: {
              var f = l.stateNode.containerInfo, v = (l.mode & Ie) !== je;
              vx(
                f,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case B: {
              var m = l.type, b = l.memoizedProps, w = l.stateNode, R = (l.mode & Ie) !== je;
              hx(
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
    function Wx(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      sx(i, e);
    }
    function Yx(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return cx(i);
    }
    function EE(e) {
      for (var t = e.return; t !== null && t.tag !== B && t.tag !== A && t.tag !== Oe; )
        t = t.return;
      Gr = t;
    }
    function dm(e) {
      if (e !== Gr)
        return !1;
      if (!lo)
        return EE(e), lo = !0, !1;
      if (e.tag !== A && (e.tag !== B || px(e.type) && !Tg(e.type, e.memoizedProps))) {
        var t = Na;
        if (t)
          if (jg(e))
            CE(e), Vg();
          else
            for (; t; )
              gE(e, t), t = _p(t);
      }
      return EE(e), e.tag === Oe ? Na = Yx(e) : Na = Gr ? _p(e.stateNode) : null, !0;
    }
    function Gx() {
      return lo && Na !== null;
    }
    function CE(e) {
      for (var t = Na; t; )
        yE(e, t), t = _p(t);
    }
    function Ff() {
      Gr = null, Na = null, lo = !1, ec = !1;
    }
    function wE() {
      Yu !== null && (mw(Yu), Yu = null);
    }
    function Qr() {
      return lo;
    }
    function Bg(e) {
      Yu === null ? Yu = [e] : Yu.push(e);
    }
    var Qx = d.ReactCurrentBatchConfig, qx = null;
    function Kx() {
      return Qx.transition;
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
      var Xx = function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & Ot && (t = i), i = i.return;
        return t;
      }, tc = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, Mp = [], Ap = [], $p = [], Np = [], zp = [], Up = [], nc = /* @__PURE__ */ new Set();
      uo.recordUnsafeLifecycleWarnings = function(e, t) {
        nc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Mp.push(e), e.mode & Ot && typeof t.UNSAFE_componentWillMount == "function" && Ap.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && $p.push(e), e.mode & Ot && typeof t.UNSAFE_componentWillReceiveProps == "function" && Np.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && zp.push(e), e.mode & Ot && typeof t.UNSAFE_componentWillUpdate == "function" && Up.push(e));
      }, uo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(N) {
          e.add(pt(N) || "Component"), nc.add(N.type);
        }), Mp = []);
        var t = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(N) {
          t.add(pt(N) || "Component"), nc.add(N.type);
        }), Ap = []);
        var i = /* @__PURE__ */ new Set();
        $p.length > 0 && ($p.forEach(function(N) {
          i.add(pt(N) || "Component"), nc.add(N.type);
        }), $p = []);
        var a = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(N) {
          a.add(pt(N) || "Component"), nc.add(N.type);
        }), Np = []);
        var l = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(N) {
          l.add(pt(N) || "Component"), nc.add(N.type);
        }), zp = []);
        var f = /* @__PURE__ */ new Set();
        if (Up.length > 0 && (Up.forEach(function(N) {
          f.add(pt(N) || "Component"), nc.add(N.type);
        }), Up = []), t.size > 0) {
          var v = tc(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (a.size > 0) {
          var m = tc(a);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, m);
        }
        if (f.size > 0) {
          var b = tc(f);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
        }
        if (e.size > 0) {
          var w = tc(e);
          T(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (i.size > 0) {
          var R = tc(i);
          T(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (l.size > 0) {
          var U = tc(l);
          T(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, U);
        }
      };
      var pm = /* @__PURE__ */ new Map(), TE = /* @__PURE__ */ new Set();
      uo.recordLegacyContextWarning = function(e, t) {
        var i = Xx(e);
        if (i === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!TE.has(e.type)) {
          var a = pm.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], pm.set(i, a)), a.push(e));
        }
      }, uo.flushLegacyContextWarning = function() {
        pm.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], a = /* @__PURE__ */ new Set();
            e.forEach(function(f) {
              a.add(pt(f) || "Component"), TE.add(f.type);
            });
            var l = tc(a);
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
        Mp = [], Ap = [], $p = [], Np = [], zp = [], Up = [], pm = /* @__PURE__ */ new Map();
      };
    }
    var Wg, Yg, Gg, Qg, qg, RE = function(e, t) {
    };
    Wg = !1, Yg = !1, Gg = {}, Qg = {}, qg = {}, RE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var i = pt(t) || "Component";
        Qg[i] || (Qg[i] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Zx(e) {
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
        !(typeof i.type == "function" && !Zx(i.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        i._owner) {
          var l = pt(e) || "Component";
          Gg[l] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, a), Gg[l] = !0);
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
    function vm(e, t) {
      var i = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    }
    function hm(e) {
      {
        var t = pt(e) || "Component";
        if (qg[t])
          return;
        qg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function xE(e) {
      var t = e._payload, i = e._init;
      return i(t);
    }
    function kE(e) {
      function t(F, J) {
        if (e) {
          var j = F.deletions;
          j === null ? (F.deletions = [J], F.flags |= Xt) : j.push(J);
        }
      }
      function i(F, J) {
        if (!e)
          return null;
        for (var j = J; j !== null; )
          t(F, j), j = j.sibling;
        return null;
      }
      function a(F, J) {
        for (var j = /* @__PURE__ */ new Map(), ue = J; ue !== null; )
          ue.key !== null ? j.set(ue.key, ue) : j.set(ue.index, ue), ue = ue.sibling;
        return j;
      }
      function l(F, J) {
        var j = fc(F, J);
        return j.index = 0, j.sibling = null, j;
      }
      function f(F, J, j) {
        if (F.index = j, !e)
          return F.flags |= Pd, J;
        var ue = F.alternate;
        if (ue !== null) {
          var ke = ue.index;
          return ke < J ? (F.flags |= hn, J) : ke;
        } else
          return F.flags |= hn, J;
      }
      function v(F) {
        return e && F.alternate === null && (F.flags |= hn), F;
      }
      function m(F, J, j, ue) {
        if (J === null || J.tag !== se) {
          var ke = B0(j, F.mode, ue);
          return ke.return = F, ke;
        } else {
          var Ee = l(J, j);
          return Ee.return = F, Ee;
        }
      }
      function b(F, J, j, ue) {
        var ke = j.type;
        if (ke === Vr)
          return R(F, J, j.props.children, ue, j.key);
        if (J !== null && (J.elementType === ke || // Keep this check inline so it only runs on the false path:
        Mw(J, j) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ke == "object" && ke !== null && ke.$$typeof === Qe && xE(ke) === J.type)) {
          var Ee = l(J, j.props);
          return Ee.ref = Pp(F, J, j), Ee.return = F, Ee._debugSource = j._source, Ee._debugOwner = j._owner, Ee;
        }
        var lt = I0(j, F.mode, ue);
        return lt.ref = Pp(F, J, j), lt.return = F, lt;
      }
      function w(F, J, j, ue) {
        if (J === null || J.tag !== K || J.stateNode.containerInfo !== j.containerInfo || J.stateNode.implementation !== j.implementation) {
          var ke = W0(j, F.mode, ue);
          return ke.return = F, ke;
        } else {
          var Ee = l(J, j.children || []);
          return Ee.return = F, Ee;
        }
      }
      function R(F, J, j, ue, ke) {
        if (J === null || J.tag !== We) {
          var Ee = rs(j, F.mode, ue, ke);
          return Ee.return = F, Ee;
        } else {
          var lt = l(J, j);
          return lt.return = F, lt;
        }
      }
      function U(F, J, j) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var ue = B0("" + J, F.mode, j);
          return ue.return = F, ue;
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case bn: {
              var ke = I0(J, F.mode, j);
              return ke.ref = Pp(F, null, J), ke.return = F, ke;
            }
            case mr: {
              var Ee = W0(J, F.mode, j);
              return Ee.return = F, Ee;
            }
            case Qe: {
              var lt = J._payload, yt = J._init;
              return U(F, yt(lt), j);
            }
          }
          if (zt(J) || Rn(J)) {
            var on = rs(J, F.mode, j, null);
            return on.return = F, on;
          }
          vm(F, J);
        }
        return typeof J == "function" && hm(F), null;
      }
      function N(F, J, j, ue) {
        var ke = J !== null ? J.key : null;
        if (typeof j == "string" && j !== "" || typeof j == "number")
          return ke !== null ? null : m(F, J, "" + j, ue);
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case bn:
              return j.key === ke ? b(F, J, j, ue) : null;
            case mr:
              return j.key === ke ? w(F, J, j, ue) : null;
            case Qe: {
              var Ee = j._payload, lt = j._init;
              return N(F, J, lt(Ee), ue);
            }
          }
          if (zt(j) || Rn(j))
            return ke !== null ? null : R(F, J, j, ue, null);
          vm(F, j);
        }
        return typeof j == "function" && hm(F), null;
      }
      function W(F, J, j, ue, ke) {
        if (typeof ue == "string" && ue !== "" || typeof ue == "number") {
          var Ee = F.get(j) || null;
          return m(J, Ee, "" + ue, ke);
        }
        if (typeof ue == "object" && ue !== null) {
          switch (ue.$$typeof) {
            case bn: {
              var lt = F.get(ue.key === null ? j : ue.key) || null;
              return b(J, lt, ue, ke);
            }
            case mr: {
              var yt = F.get(ue.key === null ? j : ue.key) || null;
              return w(J, yt, ue, ke);
            }
            case Qe:
              var on = ue._payload, Qt = ue._init;
              return W(F, J, j, Qt(on), ke);
          }
          if (zt(ue) || Rn(ue)) {
            var tr = F.get(j) || null;
            return R(J, tr, ue, ke, null);
          }
          vm(J, ue);
        }
        return typeof ue == "function" && hm(J), null;
      }
      function Q(F, J, j) {
        {
          if (typeof F != "object" || F === null)
            return J;
          switch (F.$$typeof) {
            case bn:
            case mr:
              RE(F, j);
              var ue = F.key;
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
              var ke = F._payload, Ee = F._init;
              Q(Ee(ke), J, j);
              break;
          }
        }
        return J;
      }
      function Z(F, J, j, ue) {
        for (var ke = null, Ee = 0; Ee < j.length; Ee++) {
          var lt = j[Ee];
          ke = Q(lt, ke, F);
        }
        for (var yt = null, on = null, Qt = J, tr = 0, qt = 0, Gn = null; Qt !== null && qt < j.length; qt++) {
          Qt.index > qt ? (Gn = Qt, Qt = null) : Gn = Qt.sibling;
          var Ci = N(F, Qt, j[qt], ue);
          if (Ci === null) {
            Qt === null && (Qt = Gn);
            break;
          }
          e && Qt && Ci.alternate === null && t(F, Qt), tr = f(Ci, tr, qt), on === null ? yt = Ci : on.sibling = Ci, on = Ci, Qt = Gn;
        }
        if (qt === j.length) {
          if (i(F, Qt), Qr()) {
            var ti = qt;
            Zs(F, ti);
          }
          return yt;
        }
        if (Qt === null) {
          for (; qt < j.length; qt++) {
            var Sa = U(F, j[qt], ue);
            Sa !== null && (tr = f(Sa, tr, qt), on === null ? yt = Sa : on.sibling = Sa, on = Sa);
          }
          if (Qr()) {
            var zi = qt;
            Zs(F, zi);
          }
          return yt;
        }
        for (var Ui = a(F, Qt); qt < j.length; qt++) {
          var wi = W(Ui, F, qt, j[qt], ue);
          wi !== null && (e && wi.alternate !== null && Ui.delete(wi.key === null ? qt : wi.key), tr = f(wi, tr, qt), on === null ? yt = wi : on.sibling = wi, on = wi);
        }
        if (e && Ui.forEach(function(ad) {
          return t(F, ad);
        }), Qr()) {
          var Fl = qt;
          Zs(F, Fl);
        }
        return yt;
      }
      function Se(F, J, j, ue) {
        var ke = Rn(j);
        if (typeof ke != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          j[Symbol.toStringTag] === "Generator" && (Yg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Yg = !0), j.entries === ke && (Wg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Wg = !0);
          var Ee = ke.call(j);
          if (Ee)
            for (var lt = null, yt = Ee.next(); !yt.done; yt = Ee.next()) {
              var on = yt.value;
              lt = Q(on, lt, F);
            }
        }
        var Qt = ke.call(j);
        if (Qt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var tr = null, qt = null, Gn = J, Ci = 0, ti = 0, Sa = null, zi = Qt.next(); Gn !== null && !zi.done; ti++, zi = Qt.next()) {
          Gn.index > ti ? (Sa = Gn, Gn = null) : Sa = Gn.sibling;
          var Ui = N(F, Gn, zi.value, ue);
          if (Ui === null) {
            Gn === null && (Gn = Sa);
            break;
          }
          e && Gn && Ui.alternate === null && t(F, Gn), Ci = f(Ui, Ci, ti), qt === null ? tr = Ui : qt.sibling = Ui, qt = Ui, Gn = Sa;
        }
        if (zi.done) {
          if (i(F, Gn), Qr()) {
            var wi = ti;
            Zs(F, wi);
          }
          return tr;
        }
        if (Gn === null) {
          for (; !zi.done; ti++, zi = Qt.next()) {
            var Fl = U(F, zi.value, ue);
            Fl !== null && (Ci = f(Fl, Ci, ti), qt === null ? tr = Fl : qt.sibling = Fl, qt = Fl);
          }
          if (Qr()) {
            var ad = ti;
            Zs(F, ad);
          }
          return tr;
        }
        for (var mv = a(F, Gn); !zi.done; ti++, zi = Qt.next()) {
          var tl = W(mv, F, ti, zi.value, ue);
          tl !== null && (e && tl.alternate !== null && mv.delete(tl.key === null ? ti : tl.key), Ci = f(tl, Ci, ti), qt === null ? tr = tl : qt.sibling = tl, qt = tl);
        }
        if (e && mv.forEach(function(TO) {
          return t(F, TO);
        }), Qr()) {
          var wO = ti;
          Zs(F, wO);
        }
        return tr;
      }
      function Xe(F, J, j, ue) {
        if (J !== null && J.tag === se) {
          i(F, J.sibling);
          var ke = l(J, j);
          return ke.return = F, ke;
        }
        i(F, J);
        var Ee = B0(j, F.mode, ue);
        return Ee.return = F, Ee;
      }
      function Be(F, J, j, ue) {
        for (var ke = j.key, Ee = J; Ee !== null; ) {
          if (Ee.key === ke) {
            var lt = j.type;
            if (lt === Vr) {
              if (Ee.tag === We) {
                i(F, Ee.sibling);
                var yt = l(Ee, j.props.children);
                return yt.return = F, yt._debugSource = j._source, yt._debugOwner = j._owner, yt;
              }
            } else if (Ee.elementType === lt || // Keep this check inline so it only runs on the false path:
            Mw(Ee, j) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof lt == "object" && lt !== null && lt.$$typeof === Qe && xE(lt) === Ee.type) {
              i(F, Ee.sibling);
              var on = l(Ee, j.props);
              return on.ref = Pp(F, Ee, j), on.return = F, on._debugSource = j._source, on._debugOwner = j._owner, on;
            }
            i(F, Ee);
            break;
          } else
            t(F, Ee);
          Ee = Ee.sibling;
        }
        if (j.type === Vr) {
          var Qt = rs(j.props.children, F.mode, ue, j.key);
          return Qt.return = F, Qt;
        } else {
          var tr = I0(j, F.mode, ue);
          return tr.ref = Pp(F, J, j), tr.return = F, tr;
        }
      }
      function Ht(F, J, j, ue) {
        for (var ke = j.key, Ee = J; Ee !== null; ) {
          if (Ee.key === ke)
            if (Ee.tag === K && Ee.stateNode.containerInfo === j.containerInfo && Ee.stateNode.implementation === j.implementation) {
              i(F, Ee.sibling);
              var lt = l(Ee, j.children || []);
              return lt.return = F, lt;
            } else {
              i(F, Ee);
              break;
            }
          else
            t(F, Ee);
          Ee = Ee.sibling;
        }
        var yt = W0(j, F.mode, ue);
        return yt.return = F, yt;
      }
      function At(F, J, j, ue) {
        var ke = typeof j == "object" && j !== null && j.type === Vr && j.key === null;
        if (ke && (j = j.props.children), typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case bn:
              return v(Be(F, J, j, ue));
            case mr:
              return v(Ht(F, J, j, ue));
            case Qe:
              var Ee = j._payload, lt = j._init;
              return At(F, J, lt(Ee), ue);
          }
          if (zt(j))
            return Z(F, J, j, ue);
          if (Rn(j))
            return Se(F, J, j, ue);
          vm(F, j);
        }
        return typeof j == "string" && j !== "" || typeof j == "number" ? v(Xe(F, J, "" + j, ue)) : (typeof j == "function" && hm(F), i(F, J));
      }
      return At;
    }
    var jf = kE(!0), _E = kE(!1);
    function Jx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, a = fc(i, i.pendingProps);
        for (t.child = a, a.return = t; i.sibling !== null; )
          i = i.sibling, a = a.sibling = fc(i, i.pendingProps), a.return = t;
        a.sibling = null;
      }
    }
    function ek(e, t) {
      for (var i = e.child; i !== null; )
        jD(i, t), i = i.sibling;
    }
    var Kg = Iu(null), Xg;
    Xg = {};
    var mm = null, Vf = null, Zg = null, ym = !1;
    function gm() {
      mm = null, Vf = null, Zg = null, ym = !1;
    }
    function DE() {
      ym = !0;
    }
    function OE() {
      ym = !1;
    }
    function LE(e, t, i) {
      Si(Kg, t._currentValue, e), t._currentValue = i, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Xg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Xg;
    }
    function Jg(e, t) {
      var i = Kg.current;
      bi(Kg, t), e._currentValue = i;
    }
    function eb(e, t, i) {
      for (var a = e; a !== null; ) {
        var l = a.alternate;
        if (El(a.childLanes, t) ? l !== null && !El(l.childLanes, t) && (l.childLanes = bt(l.childLanes, t)) : (a.childLanes = bt(a.childLanes, t), l !== null && (l.childLanes = bt(l.childLanes, t))), a === i)
          break;
        a = a.return;
      }
      a !== i && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function tk(e, t, i) {
      nk(e, t, i);
    }
    function nk(e, t, i) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var l = void 0, f = a.dependencies;
        if (f !== null) {
          l = a.child;
          for (var v = f.firstContext; v !== null; ) {
            if (v.context === t) {
              if (a.tag === L) {
                var m = Tu(i), b = $l(fn, m);
                b.tag = Sm;
                var w = a.updateQueue;
                if (w !== null) {
                  var R = w.shared, U = R.pending;
                  U === null ? b.next = b : (b.next = U.next, U.next = b), R.pending = b;
                }
              }
              a.lanes = bt(a.lanes, i);
              var N = a.alternate;
              N !== null && (N.lanes = bt(N.lanes, i)), eb(a.return, i, e), f.lanes = bt(f.lanes, i);
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
          Q !== null && (Q.lanes = bt(Q.lanes, i)), eb(W, i, e), l = a.sibling;
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
    function If(e, t) {
      mm = e, Vf = null, Zg = null;
      var i = e.dependencies;
      if (i !== null) {
        var a = i.firstContext;
        a !== null && (yi(i.lanes, t) && Jp(), i.firstContext = null);
      }
    }
    function pr(e) {
      ym && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Zg !== e) {
        var i = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Vf === null) {
          if (mm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Vf = i, mm.dependencies = {
            lanes: te,
            firstContext: i
          };
        } else
          Vf = Vf.next = i;
      }
      return t;
    }
    var rc = null;
    function tb(e) {
      rc === null ? rc = [e] : rc.push(e);
    }
    function rk() {
      if (rc !== null) {
        for (var e = 0; e < rc.length; e++) {
          var t = rc[e], i = t.interleaved;
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
        rc = null;
      }
    }
    function ME(e, t, i, a) {
      var l = t.interleaved;
      return l === null ? (i.next = i, tb(t)) : (i.next = l.next, l.next = i), t.interleaved = i, bm(e, a);
    }
    function ik(e, t, i, a) {
      var l = t.interleaved;
      l === null ? (i.next = i, tb(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
    }
    function ak(e, t, i, a) {
      var l = t.interleaved;
      return l === null ? (i.next = i, tb(t)) : (i.next = l.next, l.next = i), t.interleaved = i, bm(e, a);
    }
    function ia(e, t) {
      return bm(e, t);
    }
    var ok = bm;
    function bm(e, t) {
      e.lanes = bt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = bt(i.lanes, t)), i === null && (e.flags & (hn | Yi)) !== Ke && _w(e);
      for (var a = e, l = e.return; l !== null; )
        l.childLanes = bt(l.childLanes, t), i = l.alternate, i !== null ? i.childLanes = bt(i.childLanes, t) : (l.flags & (hn | Yi)) !== Ke && _w(e), a = l, l = l.return;
      if (a.tag === A) {
        var f = a.stateNode;
        return f;
      } else
        return null;
    }
    var AE = 0, $E = 1, Sm = 2, nb = 3, Em = !1, rb, Cm;
    rb = !1, Cm = null;
    function ib(e) {
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
    function NE(e, t) {
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
        tag: AE,
        payload: null,
        callback: null,
        next: null
      };
      return i;
    }
    function Gu(e, t, i) {
      var a = e.updateQueue;
      if (a === null)
        return null;
      var l = a.shared;
      if (Cm === l && !rb && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), rb = !0), iD()) {
        var f = l.pending;
        return f === null ? t.next = t : (t.next = f.next, f.next = t), l.pending = t, ok(e, i);
      } else
        return ak(e, l, t, i);
    }
    function wm(e, t, i) {
      var a = t.updateQueue;
      if (a !== null) {
        var l = a.shared;
        if (Jd(i)) {
          var f = l.lanes;
          f = of(f, e.pendingLanes);
          var v = bt(f, i);
          l.lanes = v, ep(e, v);
        }
      }
    }
    function ab(e, t) {
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
    function lk(e, t, i, a, l, f) {
      switch (i.tag) {
        case $E: {
          var v = i.payload;
          if (typeof v == "function") {
            DE();
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
              OE();
            }
            return m;
          }
          return v;
        }
        case nb:
          e.flags = e.flags & ~sr | ft;
        case AE: {
          var b = i.payload, w;
          if (typeof b == "function") {
            DE(), w = b.call(f, a, l);
            {
              if (e.mode & Ot) {
                Wn(!0);
                try {
                  b.call(f, a, l);
                } finally {
                  Wn(!1);
                }
              }
              OE();
            }
          } else
            w = b;
          return w == null ? a : _t({}, a, w);
        }
        case Sm:
          return Em = !0, a;
      }
      return a;
    }
    function Tm(e, t, i, a) {
      var l = e.updateQueue;
      Em = !1, Cm = l.shared;
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
            W = lk(e, l, Be, W, t, i);
            var j = Be.callback;
            if (j !== null && // If the update was already committed, we should not queue its
            // callback again.
            Be.lane !== Yn) {
              e.flags |= ka;
              var ue = l.effects;
              ue === null ? l.effects = [Be] : ue.push(Be);
            }
          } else {
            var F = {
              eventTime: At,
              lane: Ht,
              tag: Be.tag,
              payload: Be.payload,
              callback: Be.callback,
              next: null
            };
            Xe === null ? (Se = Xe = F, Z = W) : Xe = Xe.next = F, Q = bt(Q, Ht);
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
      Cm = null;
    }
    function uk(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function zE() {
      Em = !1;
    }
    function Rm() {
      return Em;
    }
    function UE(e, t, i) {
      var a = t.effects;
      if (t.effects = null, a !== null)
        for (var l = 0; l < a.length; l++) {
          var f = a[l], v = f.callback;
          v !== null && (f.callback = null, uk(v, i));
        }
    }
    var Hp = {}, Qu = Iu(Hp), Fp = Iu(Hp), xm = Iu(Hp);
    function km(e) {
      if (e === Hp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function PE() {
      var e = km(xm.current);
      return e;
    }
    function ob(e, t) {
      Si(xm, t, e), Si(Fp, e, e), Si(Qu, Hp, e);
      var i = RR(t);
      bi(Qu, e), Si(Qu, i, e);
    }
    function Bf(e) {
      bi(Qu, e), bi(Fp, e), bi(xm, e);
    }
    function lb() {
      var e = km(Qu.current);
      return e;
    }
    function HE(e) {
      km(xm.current);
      var t = km(Qu.current), i = xR(t, e.type);
      t !== i && (Si(Fp, e, e), Si(Qu, i, e));
    }
    function ub(e) {
      Fp.current === e && (bi(Qu, e), bi(Fp, e));
    }
    var sk = 0, FE = 1, jE = 1, jp = 2, so = Iu(sk);
    function sb(e, t) {
      return (e & t) !== 0;
    }
    function Wf(e) {
      return e & FE;
    }
    function cb(e, t) {
      return e & FE | t;
    }
    function ck(e, t) {
      return e | t;
    }
    function qu(e, t) {
      Si(so, t, e);
    }
    function Yf(e) {
      bi(so, e);
    }
    function fk(e, t) {
      var i = e.memoizedState;
      return i !== null ? i.dehydrated !== null : (e.memoizedProps, !0);
    }
    function _m(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Oe) {
          var i = t.memoizedState;
          if (i !== null) {
            var a = i.dehydrated;
            if (a === null || iE(a) || _g(a))
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
    ), fb = [];
    function db() {
      for (var e = 0; e < fb.length; e++) {
        var t = fb[e];
        t._workInProgressVersionPrimary = null;
      }
      fb.length = 0;
    }
    function dk(e, t) {
      var i = t._getVersion, a = i(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a);
    }
    var xe = d.ReactCurrentDispatcher, Vp = d.ReactCurrentBatchConfig, pb, Gf;
    pb = /* @__PURE__ */ new Set();
    var ic = te, an = null, Cr = null, wr = null, Dm = !1, Ip = !1, Bp = 0, pk = 0, vk = 25, ee = null, za = null, Ku = -1, vb = !1;
    function en() {
      {
        var e = ee;
        za === null ? za = [e] : za.push(e);
      }
    }
    function me() {
      {
        var e = ee;
        za !== null && (Ku++, za[Ku] !== e && hk(e));
      }
    }
    function Qf(e) {
      e != null && !zt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ee, typeof e);
    }
    function hk(e) {
      {
        var t = pt(an);
        if (!pb.has(t) && (pb.add(t), za !== null)) {
          for (var i = "", a = 30, l = 0; l <= Ku; l++) {
            for (var f = za[l], v = l === Ku ? e : f, m = l + 1 + ". " + f; m.length < a; )
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
    function hb(e, t) {
      if (vb)
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
    function qf(e, t, i, a, l, f) {
      ic = f, an = t, za = e !== null ? e._debugHookTypes : null, Ku = -1, vb = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = te, e !== null && e.memoizedState !== null ? xe.current = sC : za !== null ? xe.current = uC : xe.current = lC;
      var v = i(a, l);
      if (Ip) {
        var m = 0;
        do {
          if (Ip = !1, Bp = 0, m >= vk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, vb = !1, Cr = null, wr = null, t.updateQueue = null, Ku = -1, xe.current = cC, v = i(a, l);
        } while (Ip);
      }
      xe.current = Vm, t._debugHookTypes = za;
      var b = Cr !== null && Cr.next !== null;
      if (ic = te, an = null, Cr = null, wr = null, ee = null, za = null, Ku = -1, e !== null && (e.flags & yr) !== (t.flags & yr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ie) !== je && g("Internal React error: Expected static flag was missing. Please notify the React team."), Dm = !1, b)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function Kf() {
      var e = Bp !== 0;
      return Bp = 0, e;
    }
    function VE(e, t, i) {
      t.updateQueue = e.updateQueue, (t.mode & Li) !== je ? t.flags &= ~(dl | fi | Sn | Et) : t.flags &= ~(Sn | Et), e.lanes = Ns(e.lanes, i);
    }
    function IE() {
      if (xe.current = Vm, Dm) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Dm = !1;
      }
      ic = te, an = null, Cr = null, wr = null, za = null, Ku = -1, ee = null, nC = !1, Ip = !1, Bp = 0;
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
    function BE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function mb(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function yb(e, t, i) {
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
      var v = f.dispatch = bk.bind(null, an, f);
      return [a.memoizedState, v];
    }
    function gb(e, t, i) {
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
          if (El(ic, Se)) {
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
        var F = At;
        do {
          var J = F.lane;
          an.lanes = bt(an.lanes, J), fv(J), F = F.next;
        } while (F !== At);
      } else v === null && (l.lanes = te);
      var j = l.dispatch;
      return [a.memoizedState, j];
    }
    function bb(e, t, i) {
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
    function HA(e, t, i) {
    }
    function FA(e, t, i) {
    }
    function Sb(e, t, i) {
      var a = an, l = qo(), f, v = Qr();
      if (v) {
        if (i === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        f = i(), Gf || f !== i() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      } else {
        if (f = t(), !Gf) {
          var m = t();
          Ae(f, m) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
        }
        var b = ly();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        $s(b, ic) || WE(a, t, f);
      }
      l.memoizedState = f;
      var w = {
        value: f,
        getSnapshot: t
      };
      return l.queue = w, $m(GE.bind(null, a, w, e), [e]), a.flags |= Sn, Wp(Sr | qr, YE.bind(null, a, w, f, t), void 0, null), f;
    }
    function Om(e, t, i) {
      var a = an, l = Ua(), f = t();
      if (!Gf) {
        var v = t();
        Ae(f, v) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Gf = !0);
      }
      var m = l.memoizedState, b = !Ae(m, f);
      b && (l.memoizedState = f, Jp());
      var w = l.queue;
      if (Gp(GE.bind(null, a, w, e), [e]), w.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      wr !== null && wr.memoizedState.tag & Sr) {
        a.flags |= Sn, Wp(Sr | qr, YE.bind(null, a, w, f, t), void 0, null);
        var R = ly();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        $s(R, ic) || WE(a, t, f);
      }
      return f;
    }
    function WE(e, t, i) {
      e.flags |= Ts;
      var a = {
        getSnapshot: t,
        value: i
      }, l = an.updateQueue;
      if (l === null)
        l = BE(), an.updateQueue = l, l.stores = [a];
      else {
        var f = l.stores;
        f === null ? l.stores = [a] : f.push(a);
      }
    }
    function YE(e, t, i, a) {
      t.value = i, t.getSnapshot = a, QE(t) && qE(e);
    }
    function GE(e, t, i) {
      var a = function() {
        QE(t) && qE(e);
      };
      return i(a);
    }
    function QE(e) {
      var t = e.getSnapshot, i = e.value;
      try {
        var a = t();
        return !Ae(i, a);
      } catch {
        return !0;
      }
    }
    function qE(e) {
      var t = ia(e, Ye);
      t !== null && kr(t, e, Ye, fn);
    }
    function Lm(e) {
      var t = qo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: mb,
        lastRenderedState: e
      };
      t.queue = i;
      var a = i.dispatch = Sk.bind(null, an, i);
      return [t.memoizedState, a];
    }
    function Eb(e) {
      return gb(mb);
    }
    function Cb(e) {
      return bb(mb);
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
        f = BE(), an.updateQueue = f, f.lastEffect = l.next = l;
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
    function wb(e) {
      var t = qo();
      {
        var i = {
          current: e
        };
        return t.memoizedState = i, i;
      }
    }
    function Mm(e) {
      var t = Ua();
      return t.memoizedState;
    }
    function Yp(e, t, i, a) {
      var l = qo(), f = a === void 0 ? null : a;
      an.flags |= e, l.memoizedState = Wp(Sr | t, i, void 0, f);
    }
    function Am(e, t, i, a) {
      var l = Ua(), f = a === void 0 ? null : a, v = void 0;
      if (Cr !== null) {
        var m = Cr.memoizedState;
        if (v = m.destroy, f !== null) {
          var b = m.deps;
          if (hb(f, b)) {
            l.memoizedState = Wp(t, i, v, f);
            return;
          }
        }
      }
      an.flags |= e, l.memoizedState = Wp(Sr | t, i, v, f);
    }
    function $m(e, t) {
      return (an.mode & Li) !== je ? Yp(dl | Sn | zo, qr, e, t) : Yp(Sn | zo, qr, e, t);
    }
    function Gp(e, t) {
      return Am(Sn, qr, e, t);
    }
    function Tb(e, t) {
      return Yp(Et, Qo, e, t);
    }
    function Nm(e, t) {
      return Am(Et, Qo, e, t);
    }
    function Rb(e, t) {
      var i = Et;
      return i |= ci, (an.mode & Li) !== je && (i |= fi), Yp(i, Er, e, t);
    }
    function zm(e, t) {
      return Am(Et, Er, e, t);
    }
    function KE(e, t) {
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
    function xb(e, t, i) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null, l = Et;
      return l |= ci, (an.mode & Li) !== je && (l |= fi), Yp(l, Er, KE.bind(null, t, e), a);
    }
    function Um(e, t, i) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null;
      return Am(Et, Er, KE.bind(null, t, e), a);
    }
    function mk(e, t) {
    }
    var Pm = mk;
    function kb(e, t) {
      var i = qo(), a = t === void 0 ? null : t;
      return i.memoizedState = [e, a], e;
    }
    function Hm(e, t) {
      var i = Ua(), a = t === void 0 ? null : t, l = i.memoizedState;
      if (l !== null && a !== null) {
        var f = l[1];
        if (hb(a, f))
          return l[0];
      }
      return i.memoizedState = [e, a], e;
    }
    function _b(e, t) {
      var i = qo(), a = t === void 0 ? null : t, l = e();
      return i.memoizedState = [l, a], l;
    }
    function Fm(e, t) {
      var i = Ua(), a = t === void 0 ? null : t, l = i.memoizedState;
      if (l !== null && a !== null) {
        var f = l[1];
        if (hb(a, f))
          return l[0];
      }
      var v = e();
      return i.memoizedState = [v, a], v;
    }
    function Db(e) {
      var t = qo();
      return t.memoizedState = e, e;
    }
    function XE(e) {
      var t = Ua(), i = Cr, a = i.memoizedState;
      return JE(t, a, e);
    }
    function ZE(e) {
      var t = Ua();
      if (Cr === null)
        return t.memoizedState = e, e;
      var i = Cr.memoizedState;
      return JE(t, i, e);
    }
    function JE(e, t, i) {
      var a = !mh(ic);
      if (a) {
        if (!Ae(i, t)) {
          var l = bh();
          an.lanes = bt(an.lanes, l), fv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Jp()), e.memoizedState = i, i;
    }
    function yk(e, t, i) {
      var a = Zi();
      An(qy(a, no)), e(!0);
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
    function Ob() {
      var e = Lm(!1), t = e[0], i = e[1], a = yk.bind(null, i), l = qo();
      return l.memoizedState = a, [t, a];
    }
    function eC() {
      var e = Eb(), t = e[0], i = Ua(), a = i.memoizedState;
      return [t, a];
    }
    function tC() {
      var e = Cb(), t = e[0], i = Ua(), a = i.memoizedState;
      return [t, a];
    }
    var nC = !1;
    function gk() {
      return nC;
    }
    function Lb() {
      var e = qo(), t = ly(), i = t.identifierPrefix, a;
      if (Qr()) {
        var l = Nx();
        a = ":" + i + "R" + l;
        var f = Bp++;
        f > 0 && (a += "H" + f.toString(32)), a += ":";
      } else {
        var v = pk++;
        a = ":" + i + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = a, a;
    }
    function jm() {
      var e = Ua(), t = e.memoizedState;
      return t;
    }
    function bk(e, t, i) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = ts(e), l = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (rC(e))
        iC(t, l);
      else {
        var f = ME(e, t, l, a);
        if (f !== null) {
          var v = Ni();
          kr(f, e, a, v), aC(f, t, a);
        }
      }
      oC(e, a);
    }
    function Sk(e, t, i) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = ts(e), l = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (rC(e))
        iC(t, l);
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
                ik(e, t, l, a);
                return;
              }
            } catch {
            } finally {
              xe.current = m;
            }
          }
        }
        var R = ME(e, t, l, a);
        if (R !== null) {
          var U = Ni();
          kr(R, e, a, U), aC(R, t, a);
        }
      }
      oC(e, a);
    }
    function rC(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function iC(e, t) {
      Ip = Dm = !0;
      var i = e.pending;
      i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
    }
    function aC(e, t, i) {
      if (Jd(i)) {
        var a = t.lanes;
        a = of(a, e.pendingLanes);
        var l = bt(a, i);
        t.lanes = l, ep(e, l);
      }
    }
    function oC(e, t, i) {
      _s(e, t);
    }
    var Vm = {
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
    }, lC = null, uC = null, sC = null, cC = null, Ko = null, co = null, Im = null;
    {
      var Mb = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, vt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      lC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", en(), Qf(t), kb(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", en(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", en(), Qf(t), $m(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", en(), Qf(i), xb(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", en(), Qf(t), Tb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", en(), Qf(t), Rb(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", en(), Qf(t);
          var i = xe.current;
          xe.current = Ko;
          try {
            return _b(e, t);
          } finally {
            xe.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", en();
          var a = xe.current;
          xe.current = Ko;
          try {
            return yb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", en(), wb(e);
        },
        useState: function(e) {
          ee = "useState", en();
          var t = xe.current;
          xe.current = Ko;
          try {
            return Lm(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", en(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", en(), Db(e);
        },
        useTransition: function() {
          return ee = "useTransition", en(), Ob();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", en(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", en(), Sb(e, t, i);
        },
        useId: function() {
          return ee = "useId", en(), Lb();
        },
        unstable_isNewReconciler: ce
      }, uC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", me(), kb(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", me(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", me(), $m(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", me(), xb(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), Tb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), Rb(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var i = xe.current;
          xe.current = Ko;
          try {
            return _b(e, t);
          } finally {
            xe.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", me();
          var a = xe.current;
          xe.current = Ko;
          try {
            return yb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), wb(e);
        },
        useState: function(e) {
          ee = "useState", me();
          var t = xe.current;
          xe.current = Ko;
          try {
            return Lm(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), Db(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), Ob();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", me(), Sb(e, t, i);
        },
        useId: function() {
          return ee = "useId", me(), Lb();
        },
        unstable_isNewReconciler: ce
      }, sC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", me(), Hm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", me(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", me(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", me(), Um(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), zm(e, t);
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
            return gb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), Mm();
        },
        useState: function(e) {
          ee = "useState", me();
          var t = xe.current;
          xe.current = co;
          try {
            return Eb(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), Pm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), XE(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), eC();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", me(), Om(e, t);
        },
        useId: function() {
          return ee = "useId", me(), jm();
        },
        unstable_isNewReconciler: ce
      }, cC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", me(), Hm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", me(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", me(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", me(), Um(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), zm(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var i = xe.current;
          xe.current = Im;
          try {
            return Fm(e, t);
          } finally {
            xe.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", me();
          var a = xe.current;
          xe.current = Im;
          try {
            return bb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), Mm();
        },
        useState: function(e) {
          ee = "useState", me();
          var t = xe.current;
          xe.current = Im;
          try {
            return Cb(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), Pm();
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
          return ee = "useSyncExternalStore", me(), Om(e, t);
        },
        useId: function() {
          return ee = "useId", me(), jm();
        },
        unstable_isNewReconciler: ce
      }, Ko = {
        readContext: function(e) {
          return Mb(), pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", vt(), en(), kb(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", vt(), en(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", vt(), en(), $m(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", vt(), en(), xb(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", vt(), en(), Tb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", vt(), en(), Rb(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", vt(), en();
          var i = xe.current;
          xe.current = Ko;
          try {
            return _b(e, t);
          } finally {
            xe.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", vt(), en();
          var a = xe.current;
          xe.current = Ko;
          try {
            return yb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", vt(), en(), wb(e);
        },
        useState: function(e) {
          ee = "useState", vt(), en();
          var t = xe.current;
          xe.current = Ko;
          try {
            return Lm(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", vt(), en(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", vt(), en(), Db(e);
        },
        useTransition: function() {
          return ee = "useTransition", vt(), en(), Ob();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", vt(), en(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", vt(), en(), Sb(e, t, i);
        },
        useId: function() {
          return ee = "useId", vt(), en(), Lb();
        },
        unstable_isNewReconciler: ce
      }, co = {
        readContext: function(e) {
          return Mb(), pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", vt(), me(), Hm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", vt(), me(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", vt(), me(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", vt(), me(), Um(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", vt(), me(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", vt(), me(), zm(e, t);
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
            return gb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", vt(), me(), Mm();
        },
        useState: function(e) {
          ee = "useState", vt(), me();
          var t = xe.current;
          xe.current = co;
          try {
            return Eb(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", vt(), me(), Pm();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", vt(), me(), XE(e);
        },
        useTransition: function() {
          return ee = "useTransition", vt(), me(), eC();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", vt(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", vt(), me(), Om(e, t);
        },
        useId: function() {
          return ee = "useId", vt(), me(), jm();
        },
        unstable_isNewReconciler: ce
      }, Im = {
        readContext: function(e) {
          return Mb(), pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", vt(), me(), Hm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", vt(), me(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", vt(), me(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", vt(), me(), Um(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", vt(), me(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", vt(), me(), zm(e, t);
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
            return bb(e, t, i);
          } finally {
            xe.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", vt(), me(), Mm();
        },
        useState: function(e) {
          ee = "useState", vt(), me();
          var t = xe.current;
          xe.current = co;
          try {
            return Cb(e);
          } finally {
            xe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", vt(), me(), Pm();
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
          return ee = "useSyncExternalStore", vt(), me(), Om(e, t);
        },
        useId: function() {
          return ee = "useId", vt(), me(), jm();
        },
        unstable_isNewReconciler: ce
      };
    }
    var Xu = u.unstable_now, fC = 0, Bm = -1, Qp = -1, Wm = -1, Ab = !1, Ym = !1;
    function dC() {
      return Ab;
    }
    function Ek() {
      Ym = !0;
    }
    function Ck() {
      Ab = !1, Ym = !1;
    }
    function wk() {
      Ab = Ym, Ym = !1;
    }
    function pC() {
      return fC;
    }
    function vC() {
      fC = Xu();
    }
    function $b(e) {
      Qp = Xu(), e.actualStartTime < 0 && (e.actualStartTime = Xu());
    }
    function hC(e) {
      Qp = -1;
    }
    function Gm(e, t) {
      if (Qp >= 0) {
        var i = Xu() - Qp;
        e.actualDuration += i, t && (e.selfBaseDuration = i), Qp = -1;
      }
    }
    function Xo(e) {
      if (Bm >= 0) {
        var t = Xu() - Bm;
        Bm = -1;
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
    function Nb(e) {
      if (Wm >= 0) {
        var t = Xu() - Wm;
        Wm = -1;
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
      Bm = Xu();
    }
    function zb() {
      Wm = Xu();
    }
    function Ub(e) {
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
    var Pb = {}, Hb, Fb, jb, Vb, Ib, mC, Qm, Bb, Wb, Yb, qp;
    {
      Hb = /* @__PURE__ */ new Set(), Fb = /* @__PURE__ */ new Set(), jb = /* @__PURE__ */ new Set(), Vb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set(), Ib = /* @__PURE__ */ new Set(), Wb = /* @__PURE__ */ new Set(), Yb = /* @__PURE__ */ new Set(), qp = /* @__PURE__ */ new Set();
      var yC = /* @__PURE__ */ new Set();
      Qm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          yC.has(i) || (yC.add(i), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, mC = function(e, t) {
        if (t === void 0) {
          var i = Nt(e) || "Component";
          Ib.has(i) || (Ib.add(i), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, Object.defineProperty(Pb, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Pb);
    }
    function Gb(e, t, i, a) {
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
        mC(t, f);
      }
      var v = f == null ? l : _t({}, l, f);
      if (e.memoizedState = v, e.lanes === te) {
        var m = e.updateQueue;
        m.baseState = v;
      }
    }
    var Qb = {
      isMounted: Di,
      enqueueSetState: function(e, t, i) {
        var a = Bi(e), l = Ni(), f = ts(a), v = $l(l, f);
        v.payload = t, i != null && (Qm(i, "setState"), v.callback = i);
        var m = Gu(a, v, f);
        m !== null && (kr(m, a, f, l), wm(m, a, f)), _s(a, f);
      },
      enqueueReplaceState: function(e, t, i) {
        var a = Bi(e), l = Ni(), f = ts(a), v = $l(l, f);
        v.tag = $E, v.payload = t, i != null && (Qm(i, "replaceState"), v.callback = i);
        var m = Gu(a, v, f);
        m !== null && (kr(m, a, f, l), wm(m, a, f)), _s(a, f);
      },
      enqueueForceUpdate: function(e, t) {
        var i = Bi(e), a = Ni(), l = ts(i), f = $l(a, l);
        f.tag = Sm, t != null && (Qm(t, "forceUpdate"), f.callback = t);
        var v = Gu(i, f, l);
        v !== null && (kr(v, i, l, a), wm(v, i, l)), Vc(i, l);
      }
    };
    function gC(e, t, i, a, l, f, v) {
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
    function Tk(e, t, i) {
      var a = e.stateNode;
      {
        var l = Nt(t) || "Component", f = a.render;
        f || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), a.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), a.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !qp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ot) === je && (qp.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !qp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ot) === je && (qp.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), a.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !Wb.has(t) && (Wb.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof a.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Nt(t) || "A pure component"), typeof a.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof a.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof a.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof a.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var v = a.props !== i;
        a.props !== void 0 && v && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), a.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !jb.has(t) && (jb.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Nt(t))), typeof a.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof a.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var m = a.state;
        m && (typeof m != "object" || zt(m)) && g("%s.state: must be set to an object or null", l), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function bC(e, t) {
      t.updater = Qb, e.stateNode = t, cu(t, e), t._reactInternalInstance = Pb;
    }
    function SC(e, t, i) {
      var a = !1, l = ga, f = ga, v = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === ne && v._context === void 0
        );
        if (!m && !Yb.has(t)) {
          Yb.add(t);
          var b = "";
          v === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? b = " However, it is set to a " + typeof v + "." : v.$$typeof === O ? b = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Nt(t) || "Component", b);
        }
      }
      if (typeof v == "object" && v !== null)
        f = pr(v);
      else {
        l = zf(e, t, !0);
        var w = t.contextTypes;
        a = w != null, f = a ? Uf(e, l) : ga;
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
      bC(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && U === null) {
          var N = Nt(t) || "Component";
          Fb.has(N) || (Fb.add(N), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, R.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var W = null, Q = null, Z = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Q = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (Q = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), W !== null || Q !== null || Z !== null) {
            var Se = Nt(t) || "Component", Xe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Vb.has(Se) || (Vb.add(Se), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Se, Xe, W !== null ? `
  ` + W : "", Q !== null ? `
  ` + Q : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return a && sE(e, l, f), R;
    }
    function Rk(e, t) {
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), i !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", pt(e) || "Component"), Qb.enqueueReplaceState(t, t.state, null));
    }
    function EC(e, t, i, a) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, a), t.state !== l) {
        {
          var f = pt(e) || "Component";
          Hb.has(f) || (Hb.add(f), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", f));
        }
        Qb.enqueueReplaceState(t, t.state, null);
      }
    }
    function qb(e, t, i, a) {
      Tk(e, t, i);
      var l = e.stateNode;
      l.props = i, l.state = e.memoizedState, l.refs = {}, ib(e);
      var f = t.contextType;
      if (typeof f == "object" && f !== null)
        l.context = pr(f);
      else {
        var v = zf(e, t, !0);
        l.context = Uf(e, v);
      }
      {
        if (l.state === i) {
          var m = Nt(t) || "Component";
          Bb.has(m) || (Bb.add(m), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & Ot && uo.recordLegacyContextWarning(e, l), uo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var b = t.getDerivedStateFromProps;
      if (typeof b == "function" && (Gb(e, t, b, i), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Rk(e, l), Tm(e, i, l, a), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var w = Et;
        w |= ci, (e.mode & Li) !== je && (w |= fi), e.flags |= w;
      }
    }
    function xk(e, t, i, a) {
      var l = e.stateNode, f = e.memoizedProps;
      l.props = f;
      var v = l.context, m = t.contextType, b = ga;
      if (typeof m == "object" && m !== null)
        b = pr(m);
      else {
        var w = zf(e, t, !0);
        b = Uf(e, w);
      }
      var R = t.getDerivedStateFromProps, U = typeof R == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !U && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (f !== i || v !== b) && EC(e, l, i, b), zE();
      var N = e.memoizedState, W = l.state = N;
      if (Tm(e, i, l, a), W = e.memoizedState, f === i && N === W && !am() && !Rm()) {
        if (typeof l.componentDidMount == "function") {
          var Q = Et;
          Q |= ci, (e.mode & Li) !== je && (Q |= fi), e.flags |= Q;
        }
        return !1;
      }
      typeof R == "function" && (Gb(e, t, R, i), W = e.memoizedState);
      var Z = Rm() || gC(e, t, f, i, N, W, b);
      if (Z) {
        if (!U && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Se = Et;
          Se |= ci, (e.mode & Li) !== je && (Se |= fi), e.flags |= Se;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Xe = Et;
          Xe |= ci, (e.mode & Li) !== je && (Xe |= fi), e.flags |= Xe;
        }
        e.memoizedProps = i, e.memoizedState = W;
      }
      return l.props = i, l.state = W, l.context = b, Z;
    }
    function kk(e, t, i, a, l) {
      var f = t.stateNode;
      NE(e, t);
      var v = t.memoizedProps, m = t.type === t.elementType ? v : fo(t.type, v);
      f.props = m;
      var b = t.pendingProps, w = f.context, R = i.contextType, U = ga;
      if (typeof R == "object" && R !== null)
        U = pr(R);
      else {
        var N = zf(t, i, !0);
        U = Uf(t, N);
      }
      var W = i.getDerivedStateFromProps, Q = typeof W == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !Q && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (v !== b || w !== U) && EC(t, f, a, U), zE();
      var Z = t.memoizedState, Se = f.state = Z;
      if (Tm(t, a, f, l), Se = t.memoizedState, v === b && Z === Se && !am() && !Rm() && !Le)
        return typeof f.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Et), typeof f.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Wi), !1;
      typeof W == "function" && (Gb(t, i, W, a), Se = t.memoizedState);
      var Xe = Rm() || gC(t, i, m, a, Z, Se, U) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Le;
      return Xe ? (!Q && (typeof f.UNSAFE_componentWillUpdate == "function" || typeof f.componentWillUpdate == "function") && (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(a, Se, U), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(a, Se, U)), typeof f.componentDidUpdate == "function" && (t.flags |= Et), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= Wi)) : (typeof f.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Et), typeof f.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Wi), t.memoizedProps = a, t.memoizedState = Se), f.props = a, f.state = Se, f.context = U, Xe;
    }
    function ac(e, t) {
      return {
        value: e,
        source: t,
        stack: Xl(t),
        digest: null
      };
    }
    function Kb(e, t, i) {
      return {
        value: e,
        source: null,
        stack: i ?? null,
        digest: t ?? null
      };
    }
    function _k(e, t) {
      return !0;
    }
    function Xb(e, t) {
      try {
        var i = _k(e, t);
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
    var Dk = typeof WeakMap == "function" ? WeakMap : Map;
    function CC(e, t, i) {
      var a = $l(fn, i);
      a.tag = nb, a.payload = {
        element: null
      };
      var l = t.value;
      return a.callback = function() {
        ED(l), Xb(e, t);
      }, a;
    }
    function Zb(e, t, i) {
      var a = $l(fn, i);
      a.tag = nb;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var f = t.value;
        a.payload = function() {
          return l(f);
        }, a.callback = function() {
          Aw(e), Xb(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (a.callback = function() {
        Aw(e), Xb(e, t), typeof l != "function" && bD(this);
        var b = t.value, w = t.stack;
        this.componentDidCatch(b, {
          componentStack: w !== null ? w : ""
        }), typeof l != "function" && (yi(e.lanes, Ye) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", pt(e) || "Unknown"));
      }), a;
    }
    function wC(e, t, i) {
      var a = e.pingCache, l;
      if (a === null ? (a = e.pingCache = new Dk(), l = /* @__PURE__ */ new Set(), a.set(t, l)) : (l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l))), !l.has(i)) {
        l.add(i);
        var f = CD.bind(null, e, t, i);
        Oi && dv(e, i), t.then(f, f);
      }
    }
    function Ok(e, t, i, a) {
      var l = e.updateQueue;
      if (l === null) {
        var f = /* @__PURE__ */ new Set();
        f.add(i), e.updateQueue = f;
      } else
        l.add(i);
    }
    function Lk(e, t) {
      var i = e.tag;
      if ((e.mode & Ie) === je && (i === x || i === Ue || i === ge)) {
        var a = e.alternate;
        a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function TC(e) {
      var t = e;
      do {
        if (t.tag === Oe && fk(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function RC(e, t, i, a, l) {
      if ((e.mode & Ie) === je) {
        if (e === t)
          e.flags |= sr;
        else {
          if (e.flags |= ft, i.flags |= Rs, i.flags &= ~(Oc | ki), i.tag === L) {
            var f = i.alternate;
            if (f === null)
              i.tag = _e;
            else {
              var v = $l(fn, Ye);
              v.tag = Sm, Gu(i, v, Ye);
            }
          }
          i.lanes = bt(i.lanes, Ye);
        }
        return e;
      }
      return e.flags |= sr, e.lanes = l, e;
    }
    function Mk(e, t, i, a, l) {
      if (i.flags |= ki, Oi && dv(e, l), a !== null && typeof a == "object" && typeof a.then == "function") {
        var f = a;
        Lk(i), Qr() && i.mode & Ie && mE();
        var v = TC(t);
        if (v !== null) {
          v.flags &= ~Mn, RC(v, t, i, e, l), v.mode & Ie && wC(e, f, l), Ok(v, e, f);
          return;
        } else {
          if (!Zd(l)) {
            wC(e, f, l), L0();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          a = m;
        }
      } else if (Qr() && i.mode & Ie) {
        mE();
        var b = TC(t);
        if (b !== null) {
          (b.flags & sr) === Ke && (b.flags |= Mn), RC(b, t, i, e, l), Bg(ac(a, i));
          return;
        }
      }
      a = ac(a, i), fD(a);
      var w = t;
      do {
        switch (w.tag) {
          case A: {
            var R = a;
            w.flags |= sr;
            var U = Tu(l);
            w.lanes = bt(w.lanes, U);
            var N = CC(w, R, U);
            ab(w, N);
            return;
          }
          case L:
            var W = a, Q = w.type, Z = w.stateNode;
            if ((w.flags & ft) === Ke && (typeof Q.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && !Tw(Z))) {
              w.flags |= sr;
              var Se = Tu(l);
              w.lanes = bt(w.lanes, Se);
              var Xe = Zb(w, W, Se);
              ab(w, Xe);
              return;
            }
            break;
        }
        w = w.return;
      } while (w !== null);
    }
    function Ak() {
      return null;
    }
    var Kp = d.ReactCurrentOwner, po = !1, Jb, Xp, e0, t0, n0, oc, r0, qm, Zp;
    Jb = {}, Xp = {}, e0 = {}, t0 = {}, n0 = {}, oc = !1, r0 = {}, qm = {}, Zp = {};
    function Ai(e, t, i, a) {
      e === null ? t.child = _E(t, null, i, a) : t.child = jf(t, e.child, i, a);
    }
    function $k(e, t, i, a) {
      t.child = jf(t, e.child, null, a), t.child = jf(t, null, i, a);
    }
    function xC(e, t, i, a, l) {
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
      If(t, l), vu(t);
      {
        if (Kp.current = t, li(!0), b = qf(e, t, v, a, m, l), w = Kf(), t.mode & Ot) {
          Wn(!0);
          try {
            b = qf(e, t, v, a, m, l), w = Kf();
          } finally {
            Wn(!1);
          }
        }
        li(!1);
      }
      return vi(), e !== null && !po ? (VE(e, t, l), Nl(e, t, l)) : (Qr() && w && Pg(t), t.flags |= $o, Ai(e, t, b, l), t.child);
    }
    function kC(e, t, i, a, l) {
      if (e === null) {
        var f = i.type;
        if (HD(f) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var v = f;
          return v = id(f), t.tag = ge, t.type = v, o0(t, f), _C(e, t, v, a, l);
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
        var w = V0(i.type, null, a, t, t.mode, l);
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
      var N = e.child, W = d0(e, l);
      if (!W) {
        var Q = N.memoizedProps, Z = i.compare;
        if (Z = Z !== null ? Z : it, Z(Q, a) && e.ref === t.ref)
          return Nl(e, t, l);
      }
      t.flags |= $o;
      var Se = fc(N, a);
      return Se.ref = t.ref, Se.return = t, t.child = Se, Se;
    }
    function _C(e, t, i, a, l) {
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
          if (po = !1, t.pendingProps = a = R, d0(e, l))
            (e.flags & Rs) !== Ke && (po = !0);
          else return t.lanes = e.lanes, Nl(e, t, l);
      }
      return i0(e, t, i, a, l);
    }
    function DC(e, t, i) {
      var a = t.pendingProps, l = a.children, f = e !== null ? e.memoizedState : null;
      if (a.mode === "hidden" || oe)
        if ((t.mode & Ie) === je) {
          var v = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, uy(t, i);
        } else if (yi(i, Ur)) {
          var U = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = U;
          var N = f !== null ? f.baseLanes : i;
          uy(t, N);
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
          return t.memoizedState = R, t.updateQueue = null, uy(t, b), null;
        }
      else {
        var W;
        f !== null ? (W = bt(f.baseLanes, i), t.memoizedState = null) : W = i, uy(t, W);
      }
      return Ai(e, t, l, i), t.child;
    }
    function Nk(e, t, i) {
      var a = t.pendingProps;
      return Ai(e, t, a, i), t.child;
    }
    function zk(e, t, i) {
      var a = t.pendingProps.children;
      return Ai(e, t, a, i), t.child;
    }
    function Uk(e, t, i) {
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
    function OC(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= si, t.flags |= Hd);
    }
    function i0(e, t, i, a, l) {
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
        var m = zf(t, i, !0);
        v = Uf(t, m);
      }
      var b, w;
      If(t, l), vu(t);
      {
        if (Kp.current = t, li(!0), b = qf(e, t, i, a, v, l), w = Kf(), t.mode & Ot) {
          Wn(!0);
          try {
            b = qf(e, t, i, a, v, l), w = Kf();
          } finally {
            Wn(!1);
          }
        }
        li(!1);
      }
      return vi(), e !== null && !po ? (VE(e, t, l), Nl(e, t, l)) : (Qr() && w && Pg(t), t.flags |= $o, Ai(e, t, b, l), t.child);
    }
    function LC(e, t, i, a, l) {
      {
        switch (eO(t)) {
          case !1: {
            var f = t.stateNode, v = t.type, m = new v(t.memoizedProps, f.context), b = m.state;
            f.updater.enqueueSetState(f, b, null);
            break;
          }
          case !0: {
            t.flags |= ft, t.flags |= sr;
            var w = new Error("Simulated error coming from DevTools"), R = Tu(l);
            t.lanes = bt(t.lanes, R);
            var U = Zb(t, ac(w, t), R);
            ab(t, U);
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
      Go(i) ? (W = !0, lm(t)) : W = !1, If(t, l);
      var Q = t.stateNode, Z;
      Q === null ? (Xm(e, t), SC(t, i, a), qb(t, i, a, l), Z = !0) : e === null ? Z = xk(t, i, a, l) : Z = kk(e, t, i, a, l);
      var Se = a0(e, t, i, Z, W, l);
      {
        var Xe = t.stateNode;
        Z && Xe.props !== a && (oc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", pt(t) || "a component"), oc = !0);
      }
      return Se;
    }
    function a0(e, t, i, a, l, f) {
      OC(e, t);
      var v = (t.flags & ft) !== Ke;
      if (!a && !v)
        return l && dE(t, i, !1), Nl(e, t, f);
      var m = t.stateNode;
      Kp.current = t;
      var b;
      if (v && typeof i.getDerivedStateFromError != "function")
        b = null, hC();
      else {
        vu(t);
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
      return t.flags |= $o, e !== null && v ? $k(e, t, b, f) : Ai(e, t, b, f), t.memoizedState = m.state, l && dE(t, i, !0), t.child;
    }
    function MC(e) {
      var t = e.stateNode;
      t.pendingContext ? cE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cE(e, t.context, !1), ob(e, t.containerInfo);
    }
    function Pk(e, t, i) {
      if (MC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var a = t.pendingProps, l = t.memoizedState, f = l.element;
      NE(e, t), Tm(t, a, null, i);
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
          var R = ac(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return AC(e, t, m, i, R);
        } else if (m !== f) {
          var U = ac(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return AC(e, t, m, i, U);
        } else {
          jx(t);
          var N = _E(t, null, m, i);
          t.child = N;
          for (var W = N; W; )
            W.flags = W.flags & ~hn | Yi, W = W.sibling;
        }
      } else {
        if (Ff(), m === f)
          return Nl(e, t, i);
        Ai(e, t, m, i);
      }
      return t.child;
    }
    function AC(e, t, i, a, l) {
      return Ff(), Bg(l), t.flags |= Mn, Ai(e, t, i, a), t.child;
    }
    function Hk(e, t, i) {
      HE(t), e === null && Ig(t);
      var a = t.type, l = t.pendingProps, f = e !== null ? e.memoizedProps : null, v = l.children, m = Tg(a, l);
      return m ? v = null : f !== null && Tg(a, f) && (t.flags |= Jt), OC(e, t), Ai(e, t, v, i), t.child;
    }
    function Fk(e, t) {
      return e === null && Ig(t), null;
    }
    function jk(e, t, i, a) {
      Xm(e, t);
      var l = t.pendingProps, f = i, v = f._payload, m = f._init, b = m(v);
      t.type = b;
      var w = t.tag = FD(b), R = fo(b, l), U;
      switch (w) {
        case x:
          return o0(t, b), t.type = b = id(b), U = i0(null, t, b, R, a), U;
        case L:
          return t.type = b = z0(b), U = LC(null, t, b, R, a), U;
        case Ue:
          return t.type = b = U0(b), U = xC(null, t, b, R, a), U;
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
          return U = kC(
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
    function Vk(e, t, i, a, l) {
      Xm(e, t), t.tag = L;
      var f;
      return Go(i) ? (f = !0, lm(t)) : f = !1, If(t, l), SC(t, i, a), qb(t, i, a, l), a0(null, t, i, !0, f, l);
    }
    function Ik(e, t, i, a) {
      Xm(e, t);
      var l = t.pendingProps, f;
      {
        var v = zf(t, i, !1);
        f = Uf(t, v);
      }
      If(t, a);
      var m, b;
      vu(t);
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var w = Nt(i) || "Unknown";
          Jb[w] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), Jb[w] = !0);
        }
        t.mode & Ot && uo.recordLegacyContextWarning(t, null), li(!0), Kp.current = t, m = qf(null, t, i, l, f, a), b = Kf(), li(!1);
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
        return Go(i) ? (N = !0, lm(t)) : N = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, ib(t), bC(t, m), qb(t, i, l, a), a0(null, t, i, !0, N, a);
      } else {
        if (t.tag = x, t.mode & Ot) {
          Wn(!0);
          try {
            m = qf(null, t, i, l, f, a), b = Kf();
          } finally {
            Wn(!1);
          }
        }
        return Qr() && b && Pg(t), Ai(null, t, m, a), o0(t, i), t.child;
      }
    }
    function o0(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var i = "", a = Wr();
          a && (i += `

Check the render method of \`` + a + "`.");
          var l = a || "", f = e._debugSource;
          f && (l = f.fileName + ":" + f.lineNumber), n0[l] || (n0[l] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (t.defaultProps !== void 0) {
          var v = Nt(t) || "Unknown";
          Zp[v] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", v), Zp[v] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var m = Nt(t) || "Unknown";
          t0[m] || (g("%s: Function components do not support getDerivedStateFromProps.", m), t0[m] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var b = Nt(t) || "Unknown";
          e0[b] || (g("%s: Function components do not support contextType.", b), e0[b] = !0);
        }
      }
    }
    var l0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Yn
    };
    function u0(e) {
      return {
        baseLanes: e,
        cachePool: Ak(),
        transitions: null
      };
    }
    function Bk(e, t) {
      var i = null;
      return {
        baseLanes: bt(e.baseLanes, t),
        cachePool: i,
        transitions: e.transitions
      };
    }
    function Wk(e, t, i, a) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return sb(e, jp);
    }
    function Yk(e, t) {
      return Ns(e.childLanes, t);
    }
    function $C(e, t, i) {
      var a = t.pendingProps;
      tO(t) && (t.flags |= ft);
      var l = so.current, f = !1, v = (t.flags & ft) !== Ke;
      if (v || Wk(l, e) ? (f = !0, t.flags &= ~ft) : (e === null || e.memoizedState !== null) && (l = ck(l, jE)), l = Wf(l), qu(t, l), e === null) {
        Ig(t);
        var m = t.memoizedState;
        if (m !== null) {
          var b = m.dehydrated;
          if (b !== null)
            return Xk(t, b);
        }
        var w = a.children, R = a.fallback;
        if (f) {
          var U = Gk(t, w, R, i), N = t.child;
          return N.memoizedState = u0(i), t.memoizedState = l0, U;
        } else
          return s0(t, w);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var Q = W.dehydrated;
          if (Q !== null)
            return Zk(e, t, v, a, Q, W, i);
        }
        if (f) {
          var Z = a.fallback, Se = a.children, Xe = qk(e, t, Se, Z, i), Be = t.child, Ht = e.child.memoizedState;
          return Be.memoizedState = Ht === null ? u0(i) : Bk(Ht, i), Be.childLanes = Yk(e, i), t.memoizedState = l0, Xe;
        } else {
          var At = a.children, F = Qk(e, t, At, i);
          return t.memoizedState = null, F;
        }
      }
    }
    function s0(e, t, i) {
      var a = e.mode, l = {
        mode: "visible",
        children: t
      }, f = c0(l, a);
      return f.return = e, e.child = f, f;
    }
    function Gk(e, t, i, a) {
      var l = e.mode, f = e.child, v = {
        mode: "hidden",
        children: t
      }, m, b;
      return (l & Ie) === je && f !== null ? (m = f, m.childLanes = te, m.pendingProps = v, e.mode & dt && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), b = rs(i, l, a, null)) : (m = c0(v, l), b = rs(i, l, a, null)), m.return = e, b.return = e, m.sibling = b, e.child = m, b;
    }
    function c0(e, t, i) {
      return Nw(e, t, te, null);
    }
    function NC(e, t) {
      return fc(e, t);
    }
    function Qk(e, t, i, a) {
      var l = e.child, f = l.sibling, v = NC(l, {
        mode: "visible",
        children: i
      });
      if ((t.mode & Ie) === je && (v.lanes = a), v.return = t, v.sibling = null, f !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [f], t.flags |= Xt) : m.push(f);
      }
      return t.child = v, v;
    }
    function qk(e, t, i, a, l) {
      var f = t.mode, v = e.child, m = v.sibling, b = {
        mode: "hidden",
        children: i
      }, w;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (f & Ie) === je && // Make sure we're on the second pass, i.e. the primary child fragment was
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
        w = NC(v, b), w.subtreeFlags = v.subtreeFlags & yr;
      var U;
      return m !== null ? U = fc(m, a) : (U = rs(a, f, l, null), U.flags |= hn), U.return = t, w.return = t, w.sibling = U, t.child = w, U;
    }
    function Km(e, t, i, a) {
      a !== null && Bg(a), jf(t, e.child, null, i);
      var l = t.pendingProps, f = l.children, v = s0(t, f);
      return v.flags |= hn, t.memoizedState = null, v;
    }
    function Kk(e, t, i, a, l) {
      var f = t.mode, v = {
        mode: "visible",
        children: i
      }, m = c0(v, f), b = rs(a, f, l, null);
      return b.flags |= hn, m.return = t, b.return = t, m.sibling = b, t.child = m, (t.mode & Ie) !== je && jf(t, e.child, null, l), b;
    }
    function Xk(e, t, i) {
      return (e.mode & Ie) === je ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ye) : _g(t) ? e.lanes = to : e.lanes = Ur, null;
    }
    function Zk(e, t, i, a, l, f, v) {
      if (i)
        if (t.flags & Mn) {
          t.flags &= ~Mn;
          var F = Kb(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Km(e, t, v, F);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ft, null;
          var J = a.children, j = a.fallback, ue = Kk(e, t, J, j, v), ke = t.child;
          return ke.memoizedState = u0(v), t.memoizedState = l0, ue;
        }
      else {
        if (Hx(), (t.mode & Ie) === je)
          return Km(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (_g(l)) {
          var m, b, w;
          {
            var R = nx(l);
            m = R.digest, b = R.message, w = R.stack;
          }
          var U;
          b ? U = new Error(b) : U = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = Kb(U, m, w);
          return Km(e, t, v, N);
        }
        var W = yi(v, e.childLanes);
        if (po || W) {
          var Q = ly();
          if (Q !== null) {
            var Z = Ch(Q, v);
            if (Z !== Yn && Z !== f.retryLane) {
              f.retryLane = Z;
              var Se = fn;
              ia(e, Z), kr(Q, e, Z, Se);
            }
          }
          L0();
          var Xe = Kb(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Km(e, t, v, Xe);
        } else if (iE(l)) {
          t.flags |= ft, t.child = e.child;
          var Be = wD.bind(null, e);
          return rx(l, Be), null;
        } else {
          Vx(t, l, f.treeContext);
          var Ht = a.children, At = s0(t, Ht);
          return At.flags |= Yi, At;
        }
      }
    }
    function zC(e, t, i) {
      e.lanes = bt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = bt(a.lanes, t)), eb(e.return, t, i);
    }
    function Jk(e, t, i) {
      for (var a = t; a !== null; ) {
        if (a.tag === Oe) {
          var l = a.memoizedState;
          l !== null && zC(a, i, e);
        } else if (a.tag === Ct)
          zC(a, i, e);
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
    function e_(e) {
      for (var t = e, i = null; t !== null; ) {
        var a = t.alternate;
        a !== null && _m(a) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    function t_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !r0[e])
        if (r0[e] = !0, typeof e == "string")
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
    function n_(e, t) {
      e !== void 0 && !qm[e] && (e !== "collapsed" && e !== "hidden" ? (qm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (qm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function UC(e, t) {
      {
        var i = zt(e), a = !i && typeof Rn(e) == "function";
        if (i || a) {
          var l = i ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function r_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (zt(e)) {
          for (var i = 0; i < e.length; i++)
            if (!UC(e[i], i))
              return;
        } else {
          var a = Rn(e);
          if (typeof a == "function") {
            var l = a.call(e);
            if (l)
              for (var f = l.next(), v = 0; !f.done; f = l.next()) {
                if (!UC(f.value, v))
                  return;
                v++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function f0(e, t, i, a, l) {
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
    function PC(e, t, i) {
      var a = t.pendingProps, l = a.revealOrder, f = a.tail, v = a.children;
      t_(l), n_(f, l), r_(v, l), Ai(e, t, v, i);
      var m = so.current, b = sb(m, jp);
      if (b)
        m = cb(m, jp), t.flags |= ft;
      else {
        var w = e !== null && (e.flags & ft) !== Ke;
        w && Jk(t, t.child, i), m = Wf(m);
      }
      if (qu(t, m), (t.mode & Ie) === je)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var R = e_(t.child), U;
            R === null ? (U = t.child, t.child = null) : (U = R.sibling, R.sibling = null), f0(
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
              if (Q !== null && _m(Q) === null) {
                t.child = W;
                break;
              }
              var Z = W.sibling;
              W.sibling = N, N = W, W = Z;
            }
            f0(
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
            f0(
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
    function i_(e, t, i) {
      ob(t, t.stateNode.containerInfo);
      var a = t.pendingProps;
      return e === null ? t.child = jf(t, null, a, i) : Ai(e, t, a, i), t.child;
    }
    var HC = !1;
    function a_(e, t, i) {
      var a = t.type, l = a._context, f = t.pendingProps, v = t.memoizedProps, m = f.value;
      {
        "value" in f || HC || (HC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var b = t.type.propTypes;
        b && oo(b, f, "prop", "Context.Provider");
      }
      if (LE(t, l, m), v !== null) {
        var w = v.value;
        if (Ae(w, m)) {
          if (v.children === f.children && !am())
            return Nl(e, t, i);
        } else
          tk(t, l, i);
      }
      var R = f.children;
      return Ai(e, t, R, i), t.child;
    }
    var FC = !1;
    function o_(e, t, i) {
      var a = t.type;
      a._context === void 0 ? a !== a.Consumer && (FC || (FC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
      var l = t.pendingProps, f = l.children;
      typeof f != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), If(t, i);
      var v = pr(a);
      vu(t);
      var m;
      return Kp.current = t, li(!0), m = f(v), li(!1), vi(), t.flags |= $o, Ai(e, t, m, i), t.child;
    }
    function Jp() {
      po = !0;
    }
    function Xm(e, t) {
      (t.mode & Ie) === je && e !== null && (e.alternate = null, t.alternate = null, t.flags |= hn);
    }
    function Nl(e, t, i) {
      return e !== null && (t.dependencies = e.dependencies), hC(), fv(t.lanes), yi(i, t.childLanes) ? (Jx(e, t), t.child) : null;
    }
    function l_(e, t, i) {
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
    function d0(e, t) {
      var i = e.lanes;
      return !!yi(i, t);
    }
    function u_(e, t, i) {
      switch (t.tag) {
        case A:
          MC(t), t.stateNode, Ff();
          break;
        case B:
          HE(t);
          break;
        case L: {
          var a = t.type;
          Go(a) && lm(t);
          break;
        }
        case K:
          ob(t, t.stateNode.containerInfo);
          break;
        case ye: {
          var l = t.memoizedProps.value, f = t.type._context;
          LE(t, f, l);
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
              return qu(t, Wf(so.current)), t.flags |= ft, null;
            var w = t.child, R = w.childLanes;
            if (yi(i, R))
              return $C(e, t, i);
            qu(t, Wf(so.current));
            var U = Nl(e, t, i);
            return U !== null ? U.sibling : null;
          } else
            qu(t, Wf(so.current));
          break;
        }
        case Ct: {
          var N = (e.flags & ft) !== Ke, W = yi(i, t.childLanes);
          if (N) {
            if (W)
              return PC(e, t, i);
            t.flags |= ft;
          }
          var Q = t.memoizedState;
          if (Q !== null && (Q.rendering = null, Q.tail = null, Q.lastEffect = null), qu(t, so.current), W)
            break;
          return null;
        }
        case Fe:
        case at:
          return t.lanes = te, DC(e, t, i);
      }
      return Nl(e, t, i);
    }
    function jC(e, t, i) {
      if (t._debugNeedsRemount && e !== null)
        return l_(e, t, V0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var a = e.memoizedProps, l = t.pendingProps;
        if (a !== l || am() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          po = !0;
        else {
          var f = d0(e, i);
          if (!f && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ft) === Ke)
            return po = !1, u_(e, t, i);
          (e.flags & Rs) !== Ke ? po = !0 : po = !1;
        }
      } else if (po = !1, Qr() && Ax(t)) {
        var v = t.index, m = $x();
        hE(t, m, v);
      }
      switch (t.lanes = te, t.tag) {
        case P:
          return Ik(e, t, t.type, i);
        case nt: {
          var b = t.elementType;
          return jk(e, t, b, i);
        }
        case x: {
          var w = t.type, R = t.pendingProps, U = t.elementType === w ? R : fo(w, R);
          return i0(e, t, w, U, i);
        }
        case L: {
          var N = t.type, W = t.pendingProps, Q = t.elementType === N ? W : fo(N, W);
          return LC(e, t, N, Q, i);
        }
        case A:
          return Pk(e, t, i);
        case B:
          return Hk(e, t, i);
        case se:
          return Fk(e, t);
        case Oe:
          return $C(e, t, i);
        case K:
          return i_(e, t, i);
        case Ue: {
          var Z = t.type, Se = t.pendingProps, Xe = t.elementType === Z ? Se : fo(Z, Se);
          return xC(e, t, Z, Xe, i);
        }
        case We:
          return Nk(e, t, i);
        case Ce:
          return zk(e, t, i);
        case ut:
          return Uk(e, t, i);
        case ye:
          return a_(e, t, i);
        case ht:
          return o_(e, t, i);
        case st: {
          var Be = t.type, Ht = t.pendingProps, At = fo(Be, Ht);
          if (t.type !== t.elementType) {
            var F = Be.propTypes;
            F && oo(
              F,
              At,
              // Resolved for outer only
              "prop",
              Nt(Be)
            );
          }
          return At = fo(Be.type, At), kC(e, t, Be, At, i);
        }
        case ge:
          return _C(e, t, t.type, t.pendingProps, i);
        case _e: {
          var J = t.type, j = t.pendingProps, ue = t.elementType === J ? j : fo(J, j);
          return Vk(e, t, J, ue, i);
        }
        case Ct:
          return PC(e, t, i);
        case $t:
          break;
        case Fe:
          return DC(e, t, i);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Xf(e) {
      e.flags |= Et;
    }
    function VC(e) {
      e.flags |= si, e.flags |= Hd;
    }
    var IC, p0, BC, WC;
    IC = function(e, t, i, a) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === B || l.tag === se)
          OR(e, l.stateNode);
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
    }, p0 = function(e, t) {
    }, BC = function(e, t, i, a, l) {
      var f = e.memoizedProps;
      if (f !== a) {
        var v = t.stateNode, m = lb(), b = MR(v, i, f, a, l, m);
        t.updateQueue = b, b && Xf(t);
      }
    }, WC = function(e, t, i, a) {
      i !== a && Xf(t);
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
        if ((e.mode & dt) !== je) {
          for (var b = e.selfBaseDuration, w = e.child; w !== null; )
            i = bt(i, bt(w.lanes, w.childLanes)), a |= w.subtreeFlags & yr, a |= w.flags & yr, b += w.treeBaseDuration, w = w.sibling;
          e.treeBaseDuration = b;
        } else
          for (var R = e.child; R !== null; )
            i = bt(i, bt(R.lanes, R.childLanes)), a |= R.subtreeFlags & yr, a |= R.flags & yr, R.return = e, R = R.sibling;
        e.subtreeFlags |= a;
      } else {
        if ((e.mode & dt) !== je) {
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
    function s_(e, t, i) {
      if (Gx() && (t.mode & Ie) !== je && (t.flags & ft) === Ke)
        return CE(t), Ff(), t.flags |= Mn | ki | sr, !1;
      var a = dm(t);
      if (i !== null && i.dehydrated !== null)
        if (e === null) {
          if (!a)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Wx(t), Kr(t), (t.mode & dt) !== je) {
            var l = i !== null;
            if (l) {
              var f = t.child;
              f !== null && (t.treeBaseDuration -= f.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Ff(), (t.flags & ft) === Ke && (t.memoizedState = null), t.flags |= Et, Kr(t), (t.mode & dt) !== je) {
            var v = i !== null;
            if (v) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return wE(), !0;
    }
    function YC(e, t, i) {
      var a = t.pendingProps;
      switch (Hg(t), t.tag) {
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
          return Go(l) && om(t), Kr(t), null;
        }
        case A: {
          var f = t.stateNode;
          if (Bf(t), Ng(t), db(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), e === null || e.child === null) {
            var v = dm(t);
            if (v)
              Xf(t);
            else if (e !== null) {
              var m = e.memoizedState;
              // Check if this is a client root
              (!m.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Mn) !== Ke) && (t.flags |= Wi, wE());
            }
          }
          return p0(e, t), Kr(t), null;
        }
        case B: {
          ub(t);
          var b = PE(), w = t.type;
          if (e !== null && t.stateNode != null)
            BC(e, t, w, a, b), e.ref !== t.ref && VC(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Kr(t), null;
            }
            var R = lb(), U = dm(t);
            if (U)
              Ix(t, b, R) && Xf(t);
            else {
              var N = DR(w, a, b, R, t);
              IC(N, t, !1, !1), t.stateNode = N, LR(N, w, a, b) && Xf(t);
            }
            t.ref !== null && VC(t);
          }
          return Kr(t), null;
        }
        case se: {
          var W = a;
          if (e && t.stateNode != null) {
            var Q = e.memoizedProps;
            WC(e, t, Q, W);
          } else {
            if (typeof W != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Z = PE(), Se = lb(), Xe = dm(t);
            Xe ? Bx(t) && Xf(t) : t.stateNode = AR(W, Z, Se, t);
          }
          return Kr(t), null;
        }
        case Oe: {
          Yf(t);
          var Be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ht = s_(e, t, Be);
            if (!Ht)
              return t.flags & sr ? t : null;
          }
          if ((t.flags & ft) !== Ke)
            return t.lanes = i, (t.mode & dt) !== je && Ub(t), t;
          var At = Be !== null, F = e !== null && e.memoizedState !== null;
          if (At !== F && At) {
            var J = t.child;
            if (J.flags |= No, (t.mode & Ie) !== je) {
              var j = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !$);
              j || sb(so.current, jE) ? cD() : L0();
            }
          }
          var ue = t.updateQueue;
          if (ue !== null && (t.flags |= Et), Kr(t), (t.mode & dt) !== je && At) {
            var ke = t.child;
            ke !== null && (t.treeBaseDuration -= ke.treeBaseDuration);
          }
          return null;
        }
        case K:
          return Bf(t), p0(e, t), e === null && xx(t.stateNode.containerInfo), Kr(t), null;
        case ye:
          var Ee = t.type._context;
          return Jg(Ee, t), Kr(t), null;
        case _e: {
          var lt = t.type;
          return Go(lt) && om(t), Kr(t), null;
        }
        case Ct: {
          Yf(t);
          var yt = t.memoizedState;
          if (yt === null)
            return Kr(t), null;
          var on = (t.flags & ft) !== Ke, Qt = yt.rendering;
          if (Qt === null)
            if (on)
              ev(yt, !1);
            else {
              var tr = dD() && (e === null || (e.flags & ft) === Ke);
              if (!tr)
                for (var qt = t.child; qt !== null; ) {
                  var Gn = _m(qt);
                  if (Gn !== null) {
                    on = !0, t.flags |= ft, ev(yt, !1);
                    var Ci = Gn.updateQueue;
                    return Ci !== null && (t.updateQueue = Ci, t.flags |= Et), t.subtreeFlags = Ke, ek(t, i), qu(t, cb(so.current, jp)), t.child;
                  }
                  qt = qt.sibling;
                }
              yt.tail !== null && kn() > pw() && (t.flags |= ft, on = !0, ev(yt, !1), t.lanes = fh);
            }
          else {
            if (!on) {
              var ti = _m(Qt);
              if (ti !== null) {
                t.flags |= ft, on = !0;
                var Sa = ti.updateQueue;
                if (Sa !== null && (t.updateQueue = Sa, t.flags |= Et), ev(yt, !0), yt.tail === null && yt.tailMode === "hidden" && !Qt.alternate && !Qr())
                  return Kr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              kn() * 2 - yt.renderingStartTime > pw() && i !== Ur && (t.flags |= ft, on = !0, ev(yt, !1), t.lanes = fh);
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
            return on ? wi = cb(wi, jp) : wi = Wf(wi), qu(t, wi), Ui;
          }
          return Kr(t), null;
        }
        case $t:
          break;
        case Fe:
        case at: {
          O0(t);
          var Fl = t.memoizedState, ad = Fl !== null;
          if (e !== null) {
            var mv = e.memoizedState, tl = mv !== null;
            tl !== ad && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !oe && (t.flags |= No);
          }
          return !ad || (t.mode & Ie) === je ? Kr(t) : yi(el, Ur) && (Kr(t), t.subtreeFlags & (hn | Et) && (t.flags |= No)), null;
        }
        case gt:
          return null;
        case rt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function c_(e, t, i) {
      switch (Hg(t), t.tag) {
        case L: {
          var a = t.type;
          Go(a) && om(t);
          var l = t.flags;
          return l & sr ? (t.flags = l & ~sr | ft, (t.mode & dt) !== je && Ub(t), t) : null;
        }
        case A: {
          t.stateNode, Bf(t), Ng(t), db();
          var f = t.flags;
          return (f & sr) !== Ke && (f & ft) === Ke ? (t.flags = f & ~sr | ft, t) : null;
        }
        case B:
          return ub(t), null;
        case Oe: {
          Yf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Ff();
          }
          var m = t.flags;
          return m & sr ? (t.flags = m & ~sr | ft, (t.mode & dt) !== je && Ub(t), t) : null;
        }
        case Ct:
          return Yf(t), null;
        case K:
          return Bf(t), null;
        case ye:
          var b = t.type._context;
          return Jg(b, t), null;
        case Fe:
        case at:
          return O0(t), null;
        case gt:
          return null;
        default:
          return null;
      }
    }
    function GC(e, t, i) {
      switch (Hg(t), t.tag) {
        case L: {
          var a = t.type.childContextTypes;
          a != null && om(t);
          break;
        }
        case A: {
          t.stateNode, Bf(t), Ng(t), db();
          break;
        }
        case B: {
          ub(t);
          break;
        }
        case K:
          Bf(t);
          break;
        case Oe:
          Yf(t);
          break;
        case Ct:
          Yf(t);
          break;
        case ye:
          var l = t.type._context;
          Jg(l, t);
          break;
        case Fe:
        case at:
          O0(t);
          break;
      }
    }
    var QC = null;
    QC = /* @__PURE__ */ new Set();
    var Zm = !1, Xr = !1, f_ = typeof WeakSet == "function" ? WeakSet : Set, $e = null, Zf = null, Jf = null;
    function d_(e) {
      fl(null, function() {
        throw e;
      }), Ud();
    }
    var p_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & dt)
        try {
          Zo(), t.componentWillUnmount();
        } finally {
          Xo(e);
        }
      else
        t.componentWillUnmount();
    };
    function qC(e, t) {
      try {
        Zu(Er, e);
      } catch (i) {
        gn(e, t, i);
      }
    }
    function v0(e, t, i) {
      try {
        p_(e, i);
      } catch (a) {
        gn(e, t, a);
      }
    }
    function v_(e, t, i) {
      try {
        i.componentDidMount();
      } catch (a) {
        gn(e, t, a);
      }
    }
    function KC(e, t) {
      try {
        ZC(e);
      } catch (i) {
        gn(e, t, i);
      }
    }
    function ed(e, t) {
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
    function Jm(e, t, i) {
      try {
        i();
      } catch (a) {
        gn(e, t, a);
      }
    }
    var XC = !1;
    function h_(e, t) {
      kR(e.containerInfo), $e = t, m_();
      var i = XC;
      return XC = !1, i;
    }
    function m_() {
      for (; $e !== null; ) {
        var e = $e, t = e.child;
        (e.subtreeFlags & fu) !== Ke && t !== null ? (t.return = e, $e = t) : y_();
      }
    }
    function y_() {
      for (; $e !== null; ) {
        var e = $e;
        Zt(e);
        try {
          g_(e);
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
    function g_(e) {
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
              e.type === e.elementType && !oc && (f.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(e) || "instance"), f.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(e) || "instance"));
              var v = f.getSnapshotBeforeUpdate(e.elementType === e.type ? a : fo(e.type, a), l);
              {
                var m = QC;
                v === void 0 && !m.has(e.type) && (m.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", pt(e)));
              }
              f.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case A: {
            {
              var b = e.stateNode;
              ZR(b.containerInfo);
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
            v.destroy = void 0, m !== void 0 && ((e & qr) !== aa ? uh(t) : (e & Er) !== aa && ya(t), (e & Qo) !== aa && pv(!0), Jm(t, i, m), (e & Qo) !== aa && pv(!1), (e & qr) !== aa ? Hc() : (e & Er) !== aa && hu());
          }
          v = v.next;
        } while (v !== f);
      }
    }
    function Zu(e, t) {
      var i = t.updateQueue, a = i !== null ? i.lastEffect : null;
      if (a !== null) {
        var l = a.next, f = l;
        do {
          if ((f.tag & e) === e) {
            (e & qr) !== aa ? Po(t) : (e & Er) !== aa && sh(t);
            var v = f.create;
            (e & Qo) !== aa && pv(!0), f.destroy = v(), (e & Qo) !== aa && pv(!1), (e & qr) !== aa ? Pc() : (e & Er) !== aa && xs();
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
    function b_(e, t) {
      if ((t.flags & Et) !== Ke)
        switch (t.tag) {
          case ut: {
            var i = t.stateNode.passiveEffectDuration, a = t.memoizedProps, l = a.id, f = a.onPostCommit, v = pC(), m = t.alternate === null ? "mount" : "update";
            dC() && (m = "nested-update"), typeof f == "function" && f(l, m, i, v);
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
    function S_(e, t, i, a) {
      if ((i.flags & Nr) !== Ke)
        switch (i.tag) {
          case x:
          case Ue:
          case ge: {
            if (!Xr)
              if (i.mode & dt)
                try {
                  Zo(), Zu(Er | Sr, i);
                } finally {
                  Xo(i);
                }
              else
                Zu(Er | Sr, i);
            break;
          }
          case L: {
            var l = i.stateNode;
            if (i.flags & Et && !Xr)
              if (t === null)
                if (i.type === i.elementType && !oc && (l.props !== i.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(i) || "instance"), l.state !== i.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(i) || "instance")), i.mode & dt)
                  try {
                    Zo(), l.componentDidMount();
                  } finally {
                    Xo(i);
                  }
                else
                  l.componentDidMount();
              else {
                var f = i.elementType === i.type ? t.memoizedProps : fo(i.type, t.memoizedProps), v = t.memoizedState;
                if (i.type === i.elementType && !oc && (l.props !== i.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(i) || "instance"), l.state !== i.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(i) || "instance")), i.mode & dt)
                  try {
                    Zo(), l.componentDidUpdate(f, v, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Xo(i);
                  }
                else
                  l.componentDidUpdate(f, v, l.__reactInternalSnapshotBeforeUpdate);
              }
            var m = i.updateQueue;
            m !== null && (i.type === i.elementType && !oc && (l.props !== i.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(i) || "instance"), l.state !== i.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(i) || "instance")), UE(i, m, l));
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
              UE(i, b, w);
            }
            break;
          }
          case B: {
            var R = i.stateNode;
            if (t === null && i.flags & Et) {
              var U = i.type, N = i.memoizedProps;
              PR(R, U, N);
            }
            break;
          }
          case se:
            break;
          case K:
            break;
          case ut: {
            {
              var W = i.memoizedProps, Q = W.onCommit, Z = W.onRender, Se = i.stateNode.effectDuration, Xe = pC(), Be = t === null ? "mount" : "update";
              dC() && (Be = "nested-update"), typeof Z == "function" && Z(i.memoizedProps.id, Be, i.actualDuration, i.treeBaseDuration, i.actualStartTime, Xe);
              {
                typeof Q == "function" && Q(i.memoizedProps.id, Be, Se, Xe), yD(i);
                var Ht = i.return;
                e: for (; Ht !== null; ) {
                  switch (Ht.tag) {
                    case A:
                      var At = Ht.stateNode;
                      At.effectDuration += Se;
                      break e;
                    case ut:
                      var F = Ht.stateNode;
                      F.effectDuration += Se;
                      break e;
                  }
                  Ht = Ht.return;
                }
              }
            }
            break;
          }
          case Oe: {
            __(e, i);
            break;
          }
          case Ct:
          case _e:
          case $t:
          case Fe:
          case at:
          case rt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Xr || i.flags & si && ZC(i);
    }
    function E_(e) {
      switch (e.tag) {
        case x:
        case Ue:
        case ge: {
          if (e.mode & dt)
            try {
              Zo(), qC(e, e.return);
            } finally {
              Xo(e);
            }
          else
            qC(e, e.return);
          break;
        }
        case L: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && v_(e, e.return, t), KC(e, e.return);
          break;
        }
        case B: {
          KC(e, e.return);
          break;
        }
      }
    }
    function C_(e, t) {
      for (var i = null, a = e; ; ) {
        if (a.tag === B) {
          if (i === null) {
            i = a;
            try {
              var l = a.stateNode;
              t ? QR(l) : KR(a.stateNode, a.memoizedProps);
            } catch (v) {
              gn(e, e.return, v);
            }
          }
        } else if (a.tag === se) {
          if (i === null)
            try {
              var f = a.stateNode;
              t ? qR(f) : XR(f, a.memoizedProps);
            } catch (v) {
              gn(e, e.return, v);
            }
        } else if (!((a.tag === Fe || a.tag === at) && a.memoizedState !== null && a !== e)) {
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
    function ZC(e) {
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
    function w_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function JC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, JC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === B) {
          var i = e.stateNode;
          i !== null && Dx(i);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function T_(e) {
      for (var t = e.return; t !== null; ) {
        if (ew(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ew(e) {
      return e.tag === B || e.tag === A || e.tag === K;
    }
    function tw(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || ew(t.return))
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
    function R_(e) {
      var t = T_(e);
      switch (t.tag) {
        case B: {
          var i = t.stateNode;
          t.flags & Jt && (rE(i), t.flags &= ~Jt);
          var a = tw(e);
          m0(e, a, i);
          break;
        }
        case A:
        case K: {
          var l = t.stateNode.containerInfo, f = tw(e);
          h0(e, f, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function h0(e, t, i) {
      var a = e.tag, l = a === B || a === se;
      if (l) {
        var f = e.stateNode;
        t ? BR(i, f, t) : VR(i, f);
      } else if (a !== K) {
        var v = e.child;
        if (v !== null) {
          h0(v, t, i);
          for (var m = v.sibling; m !== null; )
            h0(m, t, i), m = m.sibling;
        }
      }
    }
    function m0(e, t, i) {
      var a = e.tag, l = a === B || a === se;
      if (l) {
        var f = e.stateNode;
        t ? IR(i, f, t) : jR(i, f);
      } else if (a !== K) {
        var v = e.child;
        if (v !== null) {
          m0(v, t, i);
          for (var m = v.sibling; m !== null; )
            m0(m, t, i), m = m.sibling;
        }
      }
    }
    var Zr = null, ho = !1;
    function x_(e, t, i) {
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
        nw(e, t, i), Zr = null, ho = !1;
      }
      w_(i);
    }
    function Ju(e, t, i) {
      for (var a = i.child; a !== null; )
        nw(e, t, a), a = a.sibling;
    }
    function nw(e, t, i) {
      switch (vl(i), i.tag) {
        case B:
          Xr || ed(i, t);
        case se: {
          {
            var a = Zr, l = ho;
            Zr = null, Ju(e, t, i), Zr = a, ho = l, Zr !== null && (ho ? YR(Zr, i.stateNode) : WR(Zr, i.stateNode));
          }
          return;
        }
        case xt: {
          Zr !== null && (ho ? GR(Zr, i.stateNode) : kg(Zr, i.stateNode));
          return;
        }
        case K: {
          {
            var f = Zr, v = ho;
            Zr = i.stateNode.containerInfo, ho = !0, Ju(e, t, i), Zr = f, ho = v;
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
                  N !== void 0 && ((W & Qo) !== aa ? Jm(i, t, N) : (W & Er) !== aa && (ya(i), i.mode & dt ? (Zo(), Jm(i, t, N), Xo(i)) : Jm(i, t, N), hu())), R = R.next;
                } while (R !== w);
              }
            }
          }
          Ju(e, t, i);
          return;
        }
        case L: {
          if (!Xr) {
            ed(i, t);
            var Q = i.stateNode;
            typeof Q.componentWillUnmount == "function" && v0(i, t, Q);
          }
          Ju(e, t, i);
          return;
        }
        case $t: {
          Ju(e, t, i);
          return;
        }
        case Fe: {
          if (
            // TODO: Remove this dead flag
            i.mode & Ie
          ) {
            var Z = Xr;
            Xr = Z || i.memoizedState !== null, Ju(e, t, i), Xr = Z;
          } else
            Ju(e, t, i);
          break;
        }
        default: {
          Ju(e, t, i);
          return;
        }
      }
    }
    function k_(e) {
      e.memoizedState;
    }
    function __(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var a = t.alternate;
        if (a !== null) {
          var l = a.memoizedState;
          if (l !== null) {
            var f = l.dehydrated;
            f !== null && dx(f);
          }
        }
      }
    }
    function rw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new f_()), t.forEach(function(a) {
          var l = TD.bind(null, e, a);
          if (!i.has(a)) {
            if (i.add(a), Oi)
              if (Zf !== null && Jf !== null)
                dv(Jf, Zf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            a.then(l, l);
          }
        });
      }
    }
    function D_(e, t, i) {
      Zf = i, Jf = e, Zt(t), iw(t, e), Zt(t), Zf = null, Jf = null;
    }
    function mo(e, t, i) {
      var a = t.deletions;
      if (a !== null)
        for (var l = 0; l < a.length; l++) {
          var f = a[l];
          try {
            x_(e, t, f);
          } catch (b) {
            gn(f, t, b);
          }
        }
      var v = mc();
      if (t.subtreeFlags & di)
        for (var m = t.child; m !== null; )
          Zt(m), iw(m, e), m = m.sibling;
      Zt(v);
    }
    function iw(e, t, i) {
      var a = e.alternate, l = e.flags;
      switch (e.tag) {
        case x:
        case Ue:
        case st:
        case ge: {
          if (mo(t, e), Jo(e), l & Et) {
            try {
              vo(Qo | Sr, e, e.return), Zu(Qo | Sr, e);
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
          mo(t, e), Jo(e), l & si && a !== null && ed(a, a.return);
          return;
        }
        case B: {
          mo(t, e), Jo(e), l & si && a !== null && ed(a, a.return);
          {
            if (e.flags & Jt) {
              var f = e.stateNode;
              try {
                rE(f);
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
                    HR(v, R, w, b, m, e);
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
              FR(U, W, N);
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
                fx(t.containerInfo);
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
              Ht || sD();
            }
          }
          if (l & Et) {
            try {
              k_(e);
            } catch (lt) {
              gn(e, e.return, lt);
            }
            rw(e);
          }
          return;
        }
        case Fe: {
          var At = a !== null && a.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ie
          ) {
            var F = Xr;
            Xr = F || At, mo(t, e), Xr = F;
          } else
            mo(t, e);
          if (Jo(e), l & No) {
            var J = e.stateNode, j = e.memoizedState, ue = j !== null, ke = e;
            if (J.isHidden = ue, ue && !At && (ke.mode & Ie) !== je) {
              $e = ke;
              for (var Ee = ke.child; Ee !== null; )
                $e = Ee, L_(Ee), Ee = Ee.sibling;
            }
            C_(ke, ue);
          }
          return;
        }
        case Ct: {
          mo(t, e), Jo(e), l & Et && rw(e);
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
          R_(e);
        } catch (i) {
          gn(e, e.return, i);
        }
        e.flags &= ~hn;
      }
      t & Yi && (e.flags &= ~Yi);
    }
    function O_(e, t, i) {
      Zf = i, Jf = t, $e = e, aw(e, t, i), Zf = null, Jf = null;
    }
    function aw(e, t, i) {
      for (var a = (e.mode & Ie) !== je; $e !== null; ) {
        var l = $e, f = l.child;
        if (l.tag === Fe && a) {
          var v = l.memoizedState !== null, m = v || Zm;
          if (m) {
            y0(e, t, i);
            continue;
          } else {
            var b = l.alternate, w = b !== null && b.memoizedState !== null, R = w || Xr, U = Zm, N = Xr;
            Zm = m, Xr = R, Xr && !N && ($e = l, M_(l));
            for (var W = f; W !== null; )
              $e = W, aw(
                W,
                // New root; bubble back up to here and stop.
                t,
                i
              ), W = W.sibling;
            $e = l, Zm = U, Xr = N, y0(e, t, i);
            continue;
          }
        }
        (l.subtreeFlags & Nr) !== Ke && f !== null ? (f.return = l, $e = f) : y0(e, t, i);
      }
    }
    function y0(e, t, i) {
      for (; $e !== null; ) {
        var a = $e;
        if ((a.flags & Nr) !== Ke) {
          var l = a.alternate;
          Zt(a);
          try {
            S_(t, l, a, i);
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
    function L_(e) {
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
            ed(t, t.return);
            var a = t.stateNode;
            typeof a.componentWillUnmount == "function" && v0(t, t.return, a);
            break;
          }
          case B: {
            ed(t, t.return);
            break;
          }
          case Fe: {
            var l = t.memoizedState !== null;
            if (l) {
              ow(e);
              continue;
            }
            break;
          }
        }
        i !== null ? (i.return = t, $e = i) : ow(e);
      }
    }
    function ow(e) {
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
    function M_(e) {
      for (; $e !== null; ) {
        var t = $e, i = t.child;
        if (t.tag === Fe) {
          var a = t.memoizedState !== null;
          if (a) {
            lw(e);
            continue;
          }
        }
        i !== null ? (i.return = t, $e = i) : lw(e);
      }
    }
    function lw(e) {
      for (; $e !== null; ) {
        var t = $e;
        Zt(t);
        try {
          E_(t);
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
    function A_(e, t, i, a) {
      $e = t, $_(t, e, i, a);
    }
    function $_(e, t, i, a) {
      for (; $e !== null; ) {
        var l = $e, f = l.child;
        (l.subtreeFlags & Gi) !== Ke && f !== null ? (f.return = l, $e = f) : N_(e, t, i, a);
      }
    }
    function N_(e, t, i, a) {
      for (; $e !== null; ) {
        var l = $e;
        if ((l.flags & Sn) !== Ke) {
          Zt(l);
          try {
            z_(t, l, i, a);
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
    function z_(e, t, i, a) {
      switch (t.tag) {
        case x:
        case Ue:
        case ge: {
          if (t.mode & dt) {
            zb();
            try {
              Zu(qr | Sr, t);
            } finally {
              Nb(t);
            }
          } else
            Zu(qr | Sr, t);
          break;
        }
      }
    }
    function U_(e) {
      $e = e, P_();
    }
    function P_() {
      for (; $e !== null; ) {
        var e = $e, t = e.child;
        if (($e.flags & Xt) !== Ke) {
          var i = e.deletions;
          if (i !== null) {
            for (var a = 0; a < i.length; a++) {
              var l = i[a];
              $e = l, j_(l, e);
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
        (e.subtreeFlags & Gi) !== Ke && t !== null ? (t.return = e, $e = t) : H_();
      }
    }
    function H_() {
      for (; $e !== null; ) {
        var e = $e;
        (e.flags & Sn) !== Ke && (Zt(e), F_(e), Ln());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, $e = t;
          return;
        }
        $e = e.return;
      }
    }
    function F_(e) {
      switch (e.tag) {
        case x:
        case Ue:
        case ge: {
          e.mode & dt ? (zb(), vo(qr | Sr, e, e.return), Nb(e)) : vo(qr | Sr, e, e.return);
          break;
        }
      }
    }
    function j_(e, t) {
      for (; $e !== null; ) {
        var i = $e;
        Zt(i), I_(i, t), Ln();
        var a = i.child;
        a !== null ? (a.return = i, $e = a) : V_(e);
      }
    }
    function V_(e) {
      for (; $e !== null; ) {
        var t = $e, i = t.sibling, a = t.return;
        if (JC(t), t === e) {
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
    function I_(e, t) {
      switch (e.tag) {
        case x:
        case Ue:
        case ge: {
          e.mode & dt ? (zb(), vo(qr, e, t), Nb(e)) : vo(qr, e, t);
          break;
        }
      }
    }
    function B_(e) {
      switch (e.tag) {
        case x:
        case Ue:
        case ge: {
          try {
            Zu(Er | Sr, e);
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
    function W_(e) {
      switch (e.tag) {
        case x:
        case Ue:
        case ge: {
          try {
            Zu(qr | Sr, e);
          } catch (t) {
            gn(e, e.return, t);
          }
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
            vo(Er | Sr, e, e.return);
          } catch (i) {
            gn(e, e.return, i);
          }
          break;
        }
        case L: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && v0(e, e.return, t);
          break;
        }
      }
    }
    function G_(e) {
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
    var Q_ = [];
    function q_() {
      Q_.forEach(function(e) {
        return e();
      });
    }
    var K_ = d.ReactCurrentActQueue;
    function X_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), i = typeof jest < "u";
        return i && t !== !1;
      }
    }
    function uw() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && K_.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Z_ = Math.ceil, g0 = d.ReactCurrentDispatcher, b0 = d.ReactCurrentOwner, Jr = d.ReactCurrentBatchConfig, yo = d.ReactCurrentActQueue, Tr = (
      /*             */
      0
    ), sw = (
      /*               */
      1
    ), ei = (
      /*                */
      2
    ), Pa = (
      /*                */
      4
    ), zl = 0, nv = 1, lc = 2, ey = 3, rv = 4, cw = 5, S0 = 6, Pt = Tr, $i = null, Vn = null, Rr = te, el = te, E0 = Iu(te), xr = zl, iv = null, ty = te, av = te, ny = te, ov = null, oa = null, C0 = 0, fw = 500, dw = 1 / 0, J_ = 500, Ul = null;
    function lv() {
      dw = kn() + J_;
    }
    function pw() {
      return dw;
    }
    var ry = !1, w0 = null, td = null, uc = !1, es = null, uv = te, T0 = [], R0 = null, eD = 50, sv = 0, x0 = null, k0 = !1, iy = !1, tD = 50, nd = 0, ay = null, cv = fn, oy = te, vw = !1;
    function ly() {
      return $i;
    }
    function Ni() {
      return (Pt & (ei | Pa)) !== Tr ? kn() : (cv !== fn || (cv = kn()), cv);
    }
    function ts(e) {
      var t = e.mode;
      if ((t & Ie) === je)
        return Ye;
      if ((Pt & ei) !== Tr && Rr !== te)
        return Tu(Rr);
      var i = Kx() !== qx;
      if (i) {
        if (Jr.transition !== null) {
          var a = Jr.transition;
          a._updatedFibers || (a._updatedFibers = /* @__PURE__ */ new Set()), a._updatedFibers.add(e);
        }
        return oy === Yn && (oy = bh()), oy;
      }
      var l = Zi();
      if (l !== Yn)
        return l;
      var f = $R();
      return f;
    }
    function nD(e) {
      var t = e.mode;
      return (t & Ie) === je ? Ye : mi();
    }
    function kr(e, t, i, a) {
      xD(), vw && g("useInsertionEffect must not schedule updates."), k0 && (iy = !0), Cl(e, i, a), (Pt & ei) !== te && e === $i ? DD(t) : (Oi && sf(e, t, i), OD(t), e === $i && ((Pt & ei) === Tr && (av = bt(av, i)), xr === rv && ns(e, Rr)), la(e, a), i === Ye && Pt === Tr && (t.mode & Ie) === je && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !yo.isBatchingLegacy && (lv(), vE()));
    }
    function rD(e, t, i) {
      var a = e.current;
      a.lanes = t, Cl(e, t, i), la(e, i);
    }
    function iD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Pt & ei) !== Tr
      );
    }
    function la(e, t) {
      var i = e.callbackNode;
      vh(e, t);
      var a = Sl(e, e === $i ? Rr : te);
      if (a === te) {
        i !== null && Ow(i), e.callbackNode = null, e.callbackPriority = Yn;
        return;
      }
      var l = Hn(a), f = e.callbackPriority;
      if (f === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(yo.current !== null && i !== $0)) {
        i == null && f !== Ye && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      i != null && Ow(i);
      var v;
      if (l === Ye)
        e.tag === Bu ? (yo.isBatchingLegacy !== null && (yo.didScheduleLegacyUpdate = !0), Mx(yw.bind(null, e))) : pE(yw.bind(null, e)), yo.current !== null ? yo.current.push(Wu) : zR(function() {
          (Pt & (ei | Pa)) === Tr && Wu();
        }), v = null;
      else {
        var m;
        switch (br(a)) {
          case Fn:
            m = Nc;
            break;
          case no:
            m = pl;
            break;
          case Da:
            m = _a;
            break;
          case Ru:
            m = zc;
            break;
          default:
            m = _a;
            break;
        }
        v = N0(m, hw.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = v;
    }
    function hw(e, t) {
      if (Ck(), cv = fn, oy = te, (Pt & (ei | Pa)) !== Tr)
        throw new Error("Should not already be working.");
      var i = e.callbackNode, a = Hl();
      if (a && e.callbackNode !== i)
        return null;
      var l = Sl(e, e === $i ? Rr : te);
      if (l === te)
        return null;
      var f = !$s(e, l) && !gh(e, l) && !t, v = f ? vD(e, l) : sy(e, l);
      if (v !== zl) {
        if (v === lc) {
          var m = Fo(e);
          m !== te && (l = m, v = _0(e, m));
        }
        if (v === nv) {
          var b = iv;
          throw sc(e, te), ns(e, l), la(e, kn()), b;
        }
        if (v === S0)
          ns(e, l);
        else {
          var w = !$s(e, l), R = e.current.alternate;
          if (w && !oD(R)) {
            if (v = sy(e, l), v === lc) {
              var U = Fo(e);
              U !== te && (l = U, v = _0(e, U));
            }
            if (v === nv) {
              var N = iv;
              throw sc(e, te), ns(e, l), la(e, kn()), N;
            }
          }
          e.finishedWork = R, e.finishedLanes = l, aD(e, v, l);
        }
      }
      return la(e, kn()), e.callbackNode === i ? hw.bind(null, e) : null;
    }
    function _0(e, t) {
      var i = ov;
      if (cf(e)) {
        var a = sc(e, t);
        a.flags |= Mn, Rx(e.containerInfo);
      }
      var l = sy(e, t);
      if (l !== lc) {
        var f = oa;
        oa = i, f !== null && mw(f);
      }
      return l;
    }
    function mw(e) {
      oa === null ? oa = e : oa.push.apply(oa, e);
    }
    function aD(e, t, i) {
      switch (t) {
        case zl:
        case nv:
          throw new Error("Root did not complete. This is a bug in React.");
        case lc: {
          cc(e, oa, Ul);
          break;
        }
        case ey: {
          if (ns(e, i), hh(i) && // do not delay if we're inside an act() scope
          !Lw()) {
            var a = C0 + fw - kn();
            if (a > 10) {
              var l = Sl(e, te);
              if (l !== te)
                break;
              var f = e.suspendedLanes;
              if (!El(f, i)) {
                Ni(), lf(e, f);
                break;
              }
              e.timeoutHandle = Rg(cc.bind(null, e, oa, Ul), a);
              break;
            }
          }
          cc(e, oa, Ul);
          break;
        }
        case rv: {
          if (ns(e, i), yh(i))
            break;
          if (!Lw()) {
            var v = dh(e, i), m = v, b = kn() - m, w = RD(b) - b;
            if (w > 10) {
              e.timeoutHandle = Rg(cc.bind(null, e, oa, Ul), w);
              break;
            }
          }
          cc(e, oa, Ul);
          break;
        }
        case cw: {
          cc(e, oa, Ul);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function oD(e) {
      for (var t = e; ; ) {
        if (t.flags & Ts) {
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
        if (t.subtreeFlags & Ts && b !== null) {
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
    function ns(e, t) {
      t = Ns(t, ny), t = Ns(t, av), Eh(e, t);
    }
    function yw(e) {
      if (wk(), (Pt & (ei | Pa)) !== Tr)
        throw new Error("Should not already be working.");
      Hl();
      var t = Sl(e, te);
      if (!yi(t, Ye))
        return la(e, kn()), null;
      var i = sy(e, t);
      if (e.tag !== Bu && i === lc) {
        var a = Fo(e);
        a !== te && (t = a, i = _0(e, a));
      }
      if (i === nv) {
        var l = iv;
        throw sc(e, te), ns(e, t), la(e, kn()), l;
      }
      if (i === S0)
        throw new Error("Root did not complete. This is a bug in React.");
      var f = e.current.alternate;
      return e.finishedWork = f, e.finishedLanes = t, cc(e, oa, Ul), la(e, kn()), null;
    }
    function lD(e, t) {
      t !== te && (ep(e, bt(t, Ye)), la(e, kn()), (Pt & (ei | Pa)) === Tr && (lv(), Wu()));
    }
    function D0(e, t) {
      var i = Pt;
      Pt |= sw;
      try {
        return e(t);
      } finally {
        Pt = i, Pt === Tr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !yo.isBatchingLegacy && (lv(), vE());
      }
    }
    function uD(e, t, i, a, l) {
      var f = Zi(), v = Jr.transition;
      try {
        return Jr.transition = null, An(Fn), e(t, i, a, l);
      } finally {
        An(f), Jr.transition = v, Pt === Tr && lv();
      }
    }
    function Pl(e) {
      es !== null && es.tag === Bu && (Pt & (ei | Pa)) === Tr && Hl();
      var t = Pt;
      Pt |= sw;
      var i = Jr.transition, a = Zi();
      try {
        return Jr.transition = null, An(Fn), e ? e() : void 0;
      } finally {
        An(a), Jr.transition = i, Pt = t, (Pt & (ei | Pa)) === Tr && Wu();
      }
    }
    function gw() {
      return (Pt & (ei | Pa)) !== Tr;
    }
    function uy(e, t) {
      Si(E0, el, e), el = bt(el, t);
    }
    function O0(e) {
      el = E0.current, bi(E0, e);
    }
    function sc(e, t) {
      e.finishedWork = null, e.finishedLanes = te;
      var i = e.timeoutHandle;
      if (i !== xg && (e.timeoutHandle = xg, NR(i)), Vn !== null)
        for (var a = Vn.return; a !== null; ) {
          var l = a.alternate;
          GC(l, a), a = a.return;
        }
      $i = e;
      var f = fc(e.current, null);
      return Vn = f, Rr = el = t, xr = zl, iv = null, ty = te, av = te, ny = te, ov = null, oa = null, rk(), uo.discardPendingWarnings(), f;
    }
    function bw(e, t) {
      do {
        var i = Vn;
        try {
          if (gm(), IE(), Ln(), b0.current = null, i === null || i.return === null) {
            xr = nv, iv = t, Vn = null;
            return;
          }
          if (ot && i.mode & dt && Gm(i, !0), Ge)
            if (vi(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var a = t;
              hl(i, a, Rr);
            } else
              ks(i, t, Rr);
          Mk(e, i.return, i, t, Rr), ww(i);
        } catch (l) {
          t = l, Vn === i && i !== null ? (i = i.return, Vn = i) : i = Vn;
          continue;
        }
        return;
      } while (!0);
    }
    function Sw() {
      var e = g0.current;
      return g0.current = Vm, e === null ? Vm : e;
    }
    function Ew(e) {
      g0.current = e;
    }
    function sD() {
      C0 = kn();
    }
    function fv(e) {
      ty = bt(e, ty);
    }
    function cD() {
      xr === zl && (xr = ey);
    }
    function L0() {
      (xr === zl || xr === ey || xr === lc) && (xr = rv), $i !== null && (As(ty) || As(av)) && ns($i, Rr);
    }
    function fD(e) {
      xr !== rv && (xr = lc), ov === null ? ov = [e] : ov.push(e);
    }
    function dD() {
      return xr === zl;
    }
    function sy(e, t) {
      var i = Pt;
      Pt |= ei;
      var a = Sw();
      if ($i !== e || Rr !== t) {
        if (Oi) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (dv(e, Rr), l.clear()), tp(e, t);
        }
        Ul = Us(), sc(e, t);
      }
      En(t);
      do
        try {
          pD();
          break;
        } catch (f) {
          bw(e, f);
        }
      while (!0);
      if (gm(), Pt = i, Ew(a), Vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return jc(), $i = null, Rr = te, xr;
    }
    function pD() {
      for (; Vn !== null; )
        Cw(Vn);
    }
    function vD(e, t) {
      var i = Pt;
      Pt |= ei;
      var a = Sw();
      if ($i !== e || Rr !== t) {
        if (Oi) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (dv(e, Rr), l.clear()), tp(e, t);
        }
        Ul = Us(), lv(), sc(e, t);
      }
      En(t);
      do
        try {
          hD();
          break;
        } catch (f) {
          bw(e, f);
        }
      while (!0);
      return gm(), Ew(a), Pt = i, Vn !== null ? (Fc(), zl) : (jc(), $i = null, Rr = te, xr);
    }
    function hD() {
      for (; Vn !== null && !$c(); )
        Cw(Vn);
    }
    function Cw(e) {
      var t = e.alternate;
      Zt(e);
      var i;
      (e.mode & dt) !== je ? ($b(e), i = M0(t, e, el), Gm(e, !0)) : i = M0(t, e, el), Ln(), e.memoizedProps = e.pendingProps, i === null ? ww(e) : Vn = i, b0.current = null;
    }
    function ww(e) {
      var t = e;
      do {
        var i = t.alternate, a = t.return;
        if ((t.flags & ki) === Ke) {
          Zt(t);
          var l = void 0;
          if ((t.mode & dt) === je ? l = YC(i, t, el) : ($b(t), l = YC(i, t, el), Gm(t, !1)), Ln(), l !== null) {
            Vn = l;
            return;
          }
        } else {
          var f = c_(i, t);
          if (f !== null) {
            f.flags &= th, Vn = f;
            return;
          }
          if ((t.mode & dt) !== je) {
            Gm(t, !1);
            for (var v = t.actualDuration, m = t.child; m !== null; )
              v += m.actualDuration, m = m.sibling;
            t.actualDuration = v;
          }
          if (a !== null)
            a.flags |= ki, a.subtreeFlags = Ke, a.deletions = null;
          else {
            xr = S0, Vn = null;
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
      xr === zl && (xr = cw);
    }
    function cc(e, t, i) {
      var a = Zi(), l = Jr.transition;
      try {
        Jr.transition = null, An(Fn), mD(e, t, i, a);
      } finally {
        Jr.transition = l, An(a);
      }
      return null;
    }
    function mD(e, t, i, a) {
      do
        Hl();
      while (es !== null);
      if (kD(), (Pt & (ei | Pa)) !== Tr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, f = e.finishedLanes;
      if (Uo(f), l === null)
        return Uc(), null;
      if (f === te && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = te, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Yn;
      var v = bt(l.lanes, l.childLanes);
      uf(e, v), e === $i && ($i = null, Vn = null, Rr = te), ((l.subtreeFlags & Gi) !== Ke || (l.flags & Gi) !== Ke) && (uc || (uc = !0, R0 = i, N0(_a, function() {
        return Hl(), null;
      })));
      var m = (l.subtreeFlags & (fu | di | Nr | Gi)) !== Ke, b = (l.flags & (fu | di | Nr | Gi)) !== Ke;
      if (m || b) {
        var w = Jr.transition;
        Jr.transition = null;
        var R = Zi();
        An(Fn);
        var U = Pt;
        Pt |= Pa, b0.current = null, h_(e, l), vC(), D_(e, l, f), _R(e.containerInfo), e.current = l, Yd(f), O_(l, e, f), mu(), ih(), Pt = U, An(R), Jr.transition = w;
      } else
        e.current = l, vC();
      var N = uc;
      if (uc ? (uc = !1, es = e, uv = f) : (nd = 0, ay = null), v = e.pendingLanes, v === te && (td = null), N || kw(e.current, !1), pu(l.stateNode, a), Oi && e.memoizedUpdaters.clear(), q_(), la(e, kn()), t !== null)
        for (var W = e.onRecoverableError, Q = 0; Q < t.length; Q++) {
          var Z = t[Q], Se = Z.stack, Xe = Z.digest;
          W(Z.value, {
            componentStack: Se,
            digest: Xe
          });
        }
      if (ry) {
        ry = !1;
        var Be = w0;
        throw w0 = null, Be;
      }
      return yi(uv, Ye) && e.tag !== Bu && Hl(), v = e.pendingLanes, yi(v, Ye) ? (Ek(), e === x0 ? sv++ : (sv = 0, x0 = e)) : sv = 0, Wu(), Uc(), null;
    }
    function Hl() {
      if (es !== null) {
        var e = br(uv), t = Ky(Da, e), i = Jr.transition, a = Zi();
        try {
          return Jr.transition = null, An(t), gD();
        } finally {
          An(a), Jr.transition = i;
        }
      }
      return !1;
    }
    function yD(e) {
      T0.push(e), uc || (uc = !0, N0(_a, function() {
        return Hl(), null;
      }));
    }
    function gD() {
      if (es === null)
        return !1;
      var e = R0;
      R0 = null;
      var t = es, i = uv;
      if (es = null, uv = te, (Pt & (ei | Pa)) !== Tr)
        throw new Error("Cannot flush passive effects while already rendering.");
      k0 = !0, iy = !1, ch(i);
      var a = Pt;
      Pt |= Pa, U_(t.current), A_(t, t.current, i, e);
      {
        var l = T0;
        T0 = [];
        for (var f = 0; f < l.length; f++) {
          var v = l[f];
          b_(t, v);
        }
      }
      Gd(), kw(t.current, !0), Pt = a, Wu(), iy ? t === ay ? nd++ : (nd = 0, ay = t) : nd = 0, k0 = !1, iy = !1, Ki(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Tw(e) {
      return td !== null && td.has(e);
    }
    function bD(e) {
      td === null ? td = /* @__PURE__ */ new Set([e]) : td.add(e);
    }
    function SD(e) {
      ry || (ry = !0, w0 = e);
    }
    var ED = SD;
    function Rw(e, t, i) {
      var a = ac(i, t), l = CC(e, a, Ye), f = Gu(e, l, Ye), v = Ni();
      f !== null && (Cl(f, Ye, v), la(f, v));
    }
    function gn(e, t, i) {
      if (d_(i), pv(!1), e.tag === A) {
        Rw(e, e, i);
        return;
      }
      var a = null;
      for (a = t; a !== null; ) {
        if (a.tag === A) {
          Rw(a, e, i);
          return;
        } else if (a.tag === L) {
          var l = a.type, f = a.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && !Tw(f)) {
            var v = ac(i, e), m = Zb(a, v, Ye), b = Gu(a, m, Ye), w = Ni();
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
    function CD(e, t, i) {
      var a = e.pingCache;
      a !== null && a.delete(t);
      var l = Ni();
      lf(e, i), LD(e), $i === e && El(Rr, i) && (xr === rv || xr === ey && hh(Rr) && kn() - C0 < fw ? sc(e, te) : ny = bt(ny, i)), la(e, l);
    }
    function xw(e, t) {
      t === Yn && (t = nD(e));
      var i = Ni(), a = ia(e, t);
      a !== null && (Cl(a, t, i), la(a, i));
    }
    function wD(e) {
      var t = e.memoizedState, i = Yn;
      t !== null && (i = t.retryLane), xw(e, i);
    }
    function TD(e, t) {
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
      a !== null && a.delete(t), xw(e, i);
    }
    function RD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Z_(e / 1960) * 1960;
    }
    function xD() {
      if (sv > eD)
        throw sv = 0, x0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      nd > tD && (nd = 0, ay = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function kD() {
      uo.flushLegacyContextWarning(), uo.flushPendingUnsafeLifecycleWarnings();
    }
    function kw(e, t) {
      Zt(e), cy(e, fi, Y_), t && cy(e, dl, G_), cy(e, fi, B_), t && cy(e, dl, W_), Ln();
    }
    function cy(e, t, i) {
      for (var a = e, l = null; a !== null; ) {
        var f = a.subtreeFlags & t;
        a !== l && a.child !== null && f !== Ke ? a = a.child : ((a.flags & t) !== Ke && i(a), a.sibling !== null ? a = a.sibling : a = l = a.return);
      }
    }
    var fy = null;
    function _w(e) {
      {
        if ((Pt & ei) !== Tr || !(e.mode & Ie))
          return;
        var t = e.tag;
        if (t !== P && t !== A && t !== L && t !== x && t !== Ue && t !== st && t !== ge)
          return;
        var i = pt(e) || "ReactComponent";
        if (fy !== null) {
          if (fy.has(i))
            return;
          fy.add(i);
        } else
          fy = /* @__PURE__ */ new Set([i]);
        var a = xn;
        try {
          Zt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          a ? Zt(e) : Ln();
        }
      }
    }
    var M0;
    {
      var _D = null;
      M0 = function(e, t, i) {
        var a = zw(_D, t);
        try {
          return jC(e, t, i);
        } catch (f) {
          if (Fx() || f !== null && typeof f == "object" && typeof f.then == "function")
            throw f;
          if (gm(), IE(), GC(e, t), zw(t, a), t.mode & dt && $b(t), fl(null, jC, null, e, t, i), Wy()) {
            var l = Ud();
            typeof l == "object" && l !== null && l._suppressLogging && typeof f == "object" && f !== null && !f._suppressLogging && (f._suppressLogging = !0);
          }
          throw f;
        }
      };
    }
    var Dw = !1, A0;
    A0 = /* @__PURE__ */ new Set();
    function DD(e) {
      if (oi && !gk())
        switch (e.tag) {
          case x:
          case Ue:
          case ge: {
            var t = Vn && pt(Vn) || "Unknown", i = t;
            if (!A0.has(i)) {
              A0.add(i);
              var a = pt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
            }
            break;
          }
          case L: {
            Dw || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Dw = !0);
            break;
          }
        }
    }
    function dv(e, t) {
      if (Oi) {
        var i = e.memoizedUpdaters;
        i.forEach(function(a) {
          sf(e, a, t);
        });
      }
    }
    var $0 = {};
    function N0(e, t) {
      {
        var i = yo.current;
        return i !== null ? (i.push(t), $0) : Ac(e, t);
      }
    }
    function Ow(e) {
      if (e !== $0)
        return rh(e);
    }
    function Lw() {
      return yo.current !== null;
    }
    function OD(e) {
      {
        if (e.mode & Ie) {
          if (!uw())
            return;
        } else if (!X_() || Pt !== Tr || e.tag !== x && e.tag !== Ue && e.tag !== ge)
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
    function LD(e) {
      e.tag !== Bu && uw() && yo.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function pv(e) {
      vw = e;
    }
    var Ha = null, rd = null, MD = function(e) {
      Ha = e;
    };
    function id(e) {
      {
        if (Ha === null)
          return e;
        var t = Ha(e);
        return t === void 0 ? e : t.current;
      }
    }
    function z0(e) {
      return id(e);
    }
    function U0(e) {
      {
        if (Ha === null)
          return e;
        var t = Ha(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = id(e.render);
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
    function Mw(e, t) {
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
    function Aw(e) {
      {
        if (Ha === null || typeof WeakSet != "function")
          return;
        rd === null && (rd = /* @__PURE__ */ new WeakSet()), rd.add(e);
      }
    }
    var AD = function(e, t) {
      {
        if (Ha === null)
          return;
        var i = t.staleFamilies, a = t.updatedFamilies;
        Hl(), Pl(function() {
          P0(e.current, a, i);
        });
      }
    }, $D = function(e, t) {
      {
        if (e.context !== ga)
          return;
        Hl(), Pl(function() {
          vv(t, e, null, null);
        });
      }
    };
    function P0(e, t, i) {
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
        if (rd !== null && (rd.has(e) || a !== null && rd.has(a)) && (R = !0), R && (e._debugNeedsRemount = !0), R || w) {
          var N = ia(e, Ye);
          N !== null && kr(N, e, Ye, fn);
        }
        l !== null && !R && P0(l, t, i), f !== null && P0(f, t, i);
      }
    }
    var ND = function(e, t) {
      {
        var i = /* @__PURE__ */ new Set(), a = new Set(t.map(function(l) {
          return l.current;
        }));
        return H0(e.current, a, i), i;
      }
    };
    function H0(e, t, i) {
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
        m !== null && t.has(m) && (b = !0), b ? zD(e, i) : a !== null && H0(a, t, i), l !== null && H0(l, t, i);
      }
    }
    function zD(e, t) {
      {
        var i = UD(e, t);
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
    function UD(e, t) {
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
    var F0;
    {
      F0 = !1;
      try {
        var $w = Object.preventExtensions({});
      } catch {
        F0 = !0;
      }
    }
    function PD(e, t, i, a) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = Ke, this.subtreeFlags = Ke, this.deletions = null, this.lanes = te, this.childLanes = te, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !F0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ba = function(e, t, i, a) {
      return new PD(e, t, i, a);
    };
    function j0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function HD(e) {
      return typeof e == "function" && !j0(e) && e.defaultProps === void 0;
    }
    function FD(e) {
      if (typeof e == "function")
        return j0(e) ? L : x;
      if (e != null) {
        var t = e.$$typeof;
        if (t === le)
          return Ue;
        if (t === Lt)
          return st;
      }
      return P;
    }
    function fc(e, t) {
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
          i.type = id(e.type);
          break;
        case L:
          i.type = z0(e.type);
          break;
        case Ue:
          i.type = U0(e.type);
          break;
      }
      return i;
    }
    function jD(e, t) {
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
    function VD(e, t, i) {
      var a;
      return e === um ? (a = Ie, t === !0 && (a |= Ot, a |= Li)) : a = je, Oi && (a |= dt), ba(A, null, null, a);
    }
    function V0(e, t, i, a, l, f) {
      var v = P, m = e;
      if (typeof e == "function")
        j0(e) ? (v = L, m = z0(m)) : m = id(m);
      else if (typeof e == "string")
        v = B;
      else
        e: switch (e) {
          case Vr:
            return rs(i.children, l, f, t);
          case Hi:
            v = Ce, l |= Ot, (l & Ie) !== je && (l |= Li);
            break;
          case xi:
            return ID(i, l, f, t);
          case He:
            return BD(i, l, f, t);
          case kt:
            return WD(i, l, f, t);
          case V:
            return Nw(i, l, f, t);
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
                  v = Ue, m = U0(m);
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
    function I0(e, t, i) {
      var a = null;
      a = e._owner;
      var l = e.type, f = e.key, v = e.props, m = V0(l, f, v, a, t, i);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function rs(e, t, i, a) {
      var l = ba(We, e, a, t);
      return l.lanes = i, l;
    }
    function ID(e, t, i, a) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = ba(ut, e, a, t | dt);
      return l.elementType = xi, l.lanes = i, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function BD(e, t, i, a) {
      var l = ba(Oe, e, a, t);
      return l.elementType = He, l.lanes = i, l;
    }
    function WD(e, t, i, a) {
      var l = ba(Ct, e, a, t);
      return l.elementType = kt, l.lanes = i, l;
    }
    function Nw(e, t, i, a) {
      var l = ba(Fe, e, a, t);
      l.elementType = V, l.lanes = i;
      var f = {
        isHidden: !1
      };
      return l.stateNode = f, l;
    }
    function B0(e, t, i) {
      var a = ba(se, e, null, t);
      return a.lanes = i, a;
    }
    function YD() {
      var e = ba(B, null, null, je);
      return e.elementType = "DELETED", e;
    }
    function GD(e) {
      var t = ba(xt, null, null, je);
      return t.stateNode = e, t;
    }
    function W0(e, t, i) {
      var a = e.children !== null ? e.children : [], l = ba(K, a, e.key, t);
      return l.lanes = i, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function zw(e, t) {
      return e === null && (e = ba(P, null, null, je)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function QD(e, t, i, a, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = xg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Yn, this.eventTimes = zs(te), this.expirationTimes = zs(fn), this.pendingLanes = te, this.suspendedLanes = te, this.pingedLanes = te, this.expiredLanes = te, this.mutableReadLanes = te, this.finishedLanes = te, this.entangledLanes = te, this.entanglements = zs(te), this.identifierPrefix = a, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var f = this.pendingUpdatersLaneMap = [], v = 0; v < Os; v++)
          f.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case um:
          this._debugRootType = i ? "hydrateRoot()" : "createRoot()";
          break;
        case Bu:
          this._debugRootType = i ? "hydrate()" : "render()";
          break;
      }
    }
    function Uw(e, t, i, a, l, f, v, m, b, w) {
      var R = new QD(e, t, i, m, b), U = VD(t, f);
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
      return ib(U), R;
    }
    var Y0 = "18.3.1";
    function qD(e, t, i) {
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
    var G0, Q0;
    G0 = !1, Q0 = {};
    function Pw(e) {
      if (!e)
        return ga;
      var t = Bi(e), i = Lx(t);
      if (t.tag === L) {
        var a = t.type;
        if (Go(a))
          return fE(t, a, i);
      }
      return i;
    }
    function KD(e, t) {
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
          if (!Q0[f]) {
            Q0[f] = !0;
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
    function Hw(e, t, i, a, l, f, v, m) {
      var b = !1, w = null;
      return Uw(e, t, b, w, i, a, l, f, v);
    }
    function Fw(e, t, i, a, l, f, v, m, b, w) {
      var R = !0, U = Uw(i, a, R, e, l, f, v, m, b);
      U.context = Pw(null);
      var N = U.current, W = Ni(), Q = ts(N), Z = $l(W, Q);
      return Z.callback = t ?? null, Gu(N, Z, Q), rD(U, Q, W), U;
    }
    function vv(e, t, i, a) {
      Wd(t, e);
      var l = t.current, f = Ni(), v = ts(l);
      Qd(v);
      var m = Pw(i);
      t.context === null ? t.context = m : t.pendingContext = m, oi && xn !== null && !G0 && (G0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, pt(xn) || "Unknown"));
      var b = $l(f, v);
      b.payload = {
        element: e
      }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), b.callback = a);
      var w = Gu(l, b, v);
      return w !== null && (kr(w, l, v, f), wm(w, l, v)), v;
    }
    function dy(e) {
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
    function XD(e) {
      switch (e.tag) {
        case A: {
          var t = e.stateNode;
          if (cf(t)) {
            var i = Xd(t);
            lD(t, i);
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
          q0(e, a);
          break;
        }
      }
    }
    function jw(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && (i.retryLane = Sh(i.retryLane, t));
    }
    function q0(e, t) {
      jw(e, t);
      var i = e.alternate;
      i && jw(i, t);
    }
    function ZD(e) {
      if (e.tag === Oe) {
        var t = Ms, i = ia(e, t);
        if (i !== null) {
          var a = Ni();
          kr(i, e, t, a);
        }
        q0(e, t);
      }
    }
    function JD(e) {
      if (e.tag === Oe) {
        var t = ts(e), i = ia(e, t);
        if (i !== null) {
          var a = Ni();
          kr(i, e, t, a);
        }
        q0(e, t);
      }
    }
    function Vw(e) {
      var t = nh(e);
      return t === null ? null : t.stateNode;
    }
    var Iw = function(e) {
      return null;
    };
    function eO(e) {
      return Iw(e);
    }
    var Bw = function(e) {
      return !1;
    };
    function tO(e) {
      return Bw(e);
    }
    var Ww = null, Yw = null, Gw = null, Qw = null, qw = null, Kw = null, Xw = null, Zw = null, Jw = null;
    {
      var e1 = function(e, t, i) {
        var a = t[i], l = zt(e) ? e.slice() : _t({}, e);
        return i + 1 === t.length ? (zt(l) ? l.splice(a, 1) : delete l[a], l) : (l[a] = e1(e[a], t, i + 1), l);
      }, t1 = function(e, t) {
        return e1(e, t, 0);
      }, n1 = function(e, t, i, a) {
        var l = t[a], f = zt(e) ? e.slice() : _t({}, e);
        if (a + 1 === t.length) {
          var v = i[a];
          f[v] = f[l], zt(f) ? f.splice(l, 1) : delete f[l];
        } else
          f[l] = n1(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            i,
            a + 1
          );
        return f;
      }, r1 = function(e, t, i) {
        if (t.length !== i.length) {
          T("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var a = 0; a < i.length - 1; a++)
            if (t[a] !== i[a]) {
              T("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return n1(e, t, i, 0);
      }, i1 = function(e, t, i, a) {
        if (i >= t.length)
          return a;
        var l = t[i], f = zt(e) ? e.slice() : _t({}, e);
        return f[l] = i1(e[l], t, i + 1, a), f;
      }, a1 = function(e, t, i) {
        return i1(e, t, 0, i);
      }, K0 = function(e, t) {
        for (var i = e.memoizedState; i !== null && t > 0; )
          i = i.next, t--;
        return i;
      };
      Ww = function(e, t, i, a) {
        var l = K0(e, t);
        if (l !== null) {
          var f = a1(l.memoizedState, i, a);
          l.memoizedState = f, l.baseState = f, e.memoizedProps = _t({}, e.memoizedProps);
          var v = ia(e, Ye);
          v !== null && kr(v, e, Ye, fn);
        }
      }, Yw = function(e, t, i) {
        var a = K0(e, t);
        if (a !== null) {
          var l = t1(a.memoizedState, i);
          a.memoizedState = l, a.baseState = l, e.memoizedProps = _t({}, e.memoizedProps);
          var f = ia(e, Ye);
          f !== null && kr(f, e, Ye, fn);
        }
      }, Gw = function(e, t, i, a) {
        var l = K0(e, t);
        if (l !== null) {
          var f = r1(l.memoizedState, i, a);
          l.memoizedState = f, l.baseState = f, e.memoizedProps = _t({}, e.memoizedProps);
          var v = ia(e, Ye);
          v !== null && kr(v, e, Ye, fn);
        }
      }, Qw = function(e, t, i) {
        e.pendingProps = a1(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ia(e, Ye);
        a !== null && kr(a, e, Ye, fn);
      }, qw = function(e, t) {
        e.pendingProps = t1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ia(e, Ye);
        i !== null && kr(i, e, Ye, fn);
      }, Kw = function(e, t, i) {
        e.pendingProps = r1(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ia(e, Ye);
        a !== null && kr(a, e, Ye, fn);
      }, Xw = function(e) {
        var t = ia(e, Ye);
        t !== null && kr(t, e, Ye, fn);
      }, Zw = function(e) {
        Iw = e;
      }, Jw = function(e) {
        Bw = e;
      };
    }
    function nO(e) {
      var t = Qi(e);
      return t === null ? null : t.stateNode;
    }
    function rO(e) {
      return null;
    }
    function iO() {
      return xn;
    }
    function aO(e) {
      var t = e.findFiberByHostInstance, i = d.ReactCurrentDispatcher;
      return Bd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Ww,
        overrideHookStateDeletePath: Yw,
        overrideHookStateRenamePath: Gw,
        overrideProps: Qw,
        overridePropsDeletePath: qw,
        overridePropsRenamePath: Kw,
        setErrorHandler: Zw,
        setSuspenseHandler: Jw,
        scheduleUpdate: Xw,
        currentDispatcherRef: i,
        findHostInstanceByFiber: nO,
        findFiberByHostInstance: t || rO,
        // React Refresh
        findHostInstancesForRefresh: ND,
        scheduleRefresh: AD,
        scheduleRoot: $D,
        setRefreshHandler: MD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: iO,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: Y0
      });
    }
    var o1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function X0(e) {
      this._internalRoot = e;
    }
    py.prototype.render = X0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : vy(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var i = t.containerInfo;
        if (i.nodeType !== Bn) {
          var a = Vw(t.current);
          a && a.parentNode !== i && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      vv(e, t, null, null);
    }, py.prototype.unmount = X0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        gw() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Pl(function() {
          vv(null, e, null, null);
        }), oE(t);
      }
    };
    function oO(e, t) {
      if (!vy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      l1(e);
      var i = !1, a = !1, l = "", f = o1;
      t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === bn && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = Hw(e, um, null, i, a, l, f);
      tm(v.current, e);
      var m = e.nodeType === Bn ? e.parentNode : e;
      return Sp(m), new X0(v);
    }
    function py(e) {
      this._internalRoot = e;
    }
    function lO(e) {
      e && Jy(e);
    }
    py.prototype.unstable_scheduleHydration = lO;
    function uO(e, t, i) {
      if (!vy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      l1(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var a = i ?? null, l = i != null && i.hydratedSources || null, f = !1, v = !1, m = "", b = o1;
      i != null && (i.unstable_strictMode === !0 && (f = !0), i.identifierPrefix !== void 0 && (m = i.identifierPrefix), i.onRecoverableError !== void 0 && (b = i.onRecoverableError));
      var w = Fw(t, null, e, um, a, f, v, m, b);
      if (tm(w.current, e), Sp(e), l)
        for (var R = 0; R < l.length; R++) {
          var U = l[R];
          dk(w, U);
        }
      return new py(w);
    }
    function vy(e) {
      return !!(e && (e.nodeType === ui || e.nodeType === va || e.nodeType === al || !q));
    }
    function hv(e) {
      return !!(e && (e.nodeType === ui || e.nodeType === va || e.nodeType === al || e.nodeType === Bn && e.nodeValue === " react-mount-point-unstable "));
    }
    function l1(e) {
      e.nodeType === ui && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Lp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var sO = d.ReactCurrentOwner, u1;
    u1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Bn) {
        var t = Vw(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, a = Z0(e), l = !!(a && Vu(a));
      l && !i && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ui && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Z0(e) {
      return e ? e.nodeType === va ? e.documentElement : e.firstChild : null;
    }
    function s1() {
    }
    function cO(e, t, i, a, l) {
      if (l) {
        if (typeof a == "function") {
          var f = a;
          a = function() {
            var N = dy(v);
            f.call(N);
          };
        }
        var v = Fw(
          t,
          a,
          e,
          Bu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          s1
        );
        e._reactRootContainer = v, tm(v.current, e);
        var m = e.nodeType === Bn ? e.parentNode : e;
        return Sp(m), Pl(), v;
      } else {
        for (var b; b = e.lastChild; )
          e.removeChild(b);
        if (typeof a == "function") {
          var w = a;
          a = function() {
            var N = dy(R);
            w.call(N);
          };
        }
        var R = Hw(
          e,
          Bu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          s1
        );
        e._reactRootContainer = R, tm(R.current, e);
        var U = e.nodeType === Bn ? e.parentNode : e;
        return Sp(U), Pl(function() {
          vv(t, R, i, a);
        }), R;
      }
    }
    function fO(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function hy(e, t, i, a, l) {
      u1(i), fO(l === void 0 ? null : l, "render");
      var f = i._reactRootContainer, v;
      if (!f)
        v = cO(i, t, e, l, a);
      else {
        if (v = f, typeof l == "function") {
          var m = l;
          l = function() {
            var b = dy(v);
            m.call(b);
          };
        }
        vv(t, v, e, l);
      }
      return dy(v);
    }
    var c1 = !1;
    function dO(e) {
      {
        c1 || (c1 = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = sO.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Nt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ui ? e : KD(e, "findDOMNode");
    }
    function pO(e, t, i) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Lp(t) && t._reactRootContainer === void 0;
        a && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return hy(null, e, t, !0, i);
    }
    function vO(e, t, i) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Lp(t) && t._reactRootContainer === void 0;
        a && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return hy(null, e, t, !1, i);
    }
    function hO(e, t, i, a) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(i))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ws(e))
        throw new Error("parentComponent must be a valid React Component");
      return hy(e, t, i, !1, a);
    }
    var f1 = !1;
    function mO(e) {
      if (f1 || (f1 = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !hv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Lp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = Z0(e), a = i && !Vu(i);
          a && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Pl(function() {
          hy(null, null, e, !1, function() {
            e._reactRootContainer = null, oE(e);
          });
        }), !0;
      } else {
        {
          var l = Z0(e), f = !!(l && Vu(l)), v = e.nodeType === ui && hv(e.parentNode) && !!e.parentNode._reactRootContainer;
          f && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    _u(XD), Xy(ZD), df(JD), wh(Zi), Th(Pr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Jv(gR), _c(D0, uD, Pl);
    function yO(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!vy(t))
        throw new Error("Target container is not a DOM element.");
      return qD(e, t, null, i);
    }
    function gO(e, t, i, a) {
      return hO(e, t, i, a);
    }
    var J0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Vu, Nf, nm, kc, Ss, D0]
    };
    function bO(e, t) {
      return J0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), oO(e, t);
    }
    function SO(e, t, i) {
      return J0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), uO(e, t, i);
    }
    function EO(e) {
      return gw() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Pl(e);
    }
    var CO = aO({
      findFiberByHostInstance: Ks,
      bundleType: 1,
      version: Y0,
      rendererPackageName: "react-dom"
    });
    if (!CO && dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var d1 = window.location.protocol;
      /^(https?|file):$/.test(d1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (d1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    sa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J0, sa.createPortal = yO, sa.createRoot = bO, sa.findDOMNode = dO, sa.flushSync = EO, sa.hydrate = pO, sa.hydrateRoot = SO, sa.render = vO, sa.unmountComponentAtNode = mO, sa.unstable_batchedUpdates = D0, sa.unstable_renderSubtreeIntoContainer = gO, sa.version = Y0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), sa;
}
function ET() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ET);
    } catch (c) {
      console.error(c);
    }
  }
}
process.env.NODE_ENV === "production" ? (ET(), SS.exports = tM()) : SS.exports = nM();
var rM = SS.exports;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const iM = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}", aM = iM, oM = /* @__PURE__ */ pd(class extends dd {
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
      FO(() => {
        const E = this.el.getBoundingClientRect(), T = E.width, g = E.height, _ = Math.sqrt(T * T + g * g), x = Math.max(g, T), L = this.unbounded ? x : _ + uM, P = Math.floor(x * sM), A = L / P;
        let K = u - E.left, B = d - E.top;
        this.unbounded && (K = T * 0.5, B = g * 0.5);
        const se = K - P * 0.5, We = B - P * 0.5, Ce = T * 0.5 - K, ht = g * 0.5 - B;
        RS(() => {
          const ye = document.createElement("div");
          ye.classList.add("ripple-effect");
          const Ue = ye.style;
          Ue.top = We + "px", Ue.left = se + "px", Ue.width = Ue.height = P + "px", Ue.setProperty("--final-scale", `${A}`), Ue.setProperty("--translate-end", `${Ce}px, ${ht}px`), (this.el.shadowRoot || this.el).appendChild(ye), setTimeout(() => {
            y(() => {
              lM(ye);
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
    return Pi(Tv, { key: "2302f087ab1c6755355736e4ca77309c5fdcf185", role: "presentation", class: {
      [u]: !0,
      unbounded: this.unbounded
    } });
  }
  get el() {
    return this;
  }
  static get style() {
    return aM;
  }
}, [1, "ion-ripple-effect", {
  type: [1],
  addRipple: [64]
}]), lM = (c) => {
  c.classList.add("fade-out"), setTimeout(() => {
    c.remove();
  }, 200);
}, uM = 10, sM = 0.5;
function cM() {
  if (typeof customElements > "u")
    return;
  ["ion-ripple-effect"].forEach((u) => {
    switch (u) {
      case "ion-ripple-effect":
        customElements.get(u) || customElements.define(u, oM);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Sy = typeof window < "u" ? window : void 0;
Sy && (Sy.CSS && Sy.CSS.supports && Sy.CSS.supports("--a: 0"));
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const fM = () => {
  if (Ti !== void 0)
    return Ti.Capacitor;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const dM = () => {
  let c;
  return {
    lock: async () => {
      const d = c;
      let y;
      return c = new Promise((E) => y = E), d !== void 0 && await d, y;
    }
  };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var ES;
(function(c) {
  c.Unimplemented = "UNIMPLEMENTED", c.Unavailable = "UNAVAILABLE";
})(ES || (ES = {}));
var CS;
(function(c) {
  c.Body = "body", c.Ionic = "ionic", c.Native = "native", c.None = "none";
})(CS || (CS = {}));
const pM = {
  getEngine() {
    const c = fM();
    if (c != null && c.isPluginAvailable("Keyboard"))
      return c.Plugins.Keyboard;
  },
  getResizeMode() {
    const c = this.getEngine();
    return c != null && c.getResizeMode ? c.getResizeMode().catch((u) => {
      if (u.code !== ES.Unimplemented)
        throw u;
    }) : Promise.resolve(void 0);
  }
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const CT = (c) => {
  if (eS === void 0 || c === CS.None || c === void 0)
    return null;
  const u = eS.querySelector("ion-app");
  return u ?? eS.body;
}, U1 = (c) => {
  const u = CT(c);
  return u === null ? 0 : u.clientHeight;
}, vM = async (c) => {
  let u, d, y, E;
  const T = async () => {
    const P = await pM.getResizeMode(), A = P === void 0 ? void 0 : P.mode;
    u = () => {
      E === void 0 && (E = U1(A)), y = !0, g(y, A);
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
      E === 0 || /**
       * If the keyboard is closed before the webview resizes initially
       * then the webview will never resize.
       */
      E === U1(P)
    )
      return;
    const A = CT(P);
    if (A !== null)
      return new Promise((K) => {
        const B = () => {
          A.clientHeight === E && (se.disconnect(), K());
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
const wT = 1, TT = 2, _y = 3;
class wS {
  constructor(u, d) {
    this.component = u, this.params = d, this.state = wT;
  }
  async init(u) {
    if (this.state = TT, !this.element) {
      const d = this.component;
      this.element = await bT(this.delegate, u, d, ["ion-page", "ion-page-invisible"], this.params);
    }
  }
  /**
   * DOM WRITE
   */
  _destroy() {
    ca(this.state !== _y, "view state must be ATTACHED");
    const u = this.element;
    u && (this.delegate ? this.delegate.removeViewFromDom(u.parentElement, u) : u.remove()), this.nav = void 0, this.state = _y;
  }
}
const P1 = (c, u, d) => !c || c.component !== u ? !1 : fT(c.params, d), H1 = (c, u) => c ? c instanceof wS ? c : new wS(c, u) : null, hM = (c) => c.map((u) => u instanceof wS ? u : "component" in u ? H1(u.component, u.componentProps === null ? void 0 : u.componentProps) : H1(u, void 0)).filter((u) => u !== null), mM = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}", yM = mM, gM = /* @__PURE__ */ pd(class extends dd {
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
    this.didLoad = !0, this.rootChanged(), this.gesture = (await import("./swipe-back-xneTdsQv.js")).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this)), this.swipeGestureChanged();
  }
  connectedCallback() {
    this.destroyed = !1;
  }
  disconnectedCallback() {
    for (const u of this.views)
      Vl(u.element, rS), u._destroy();
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
  push(u, d, y, E) {
    return this.insert(-1, u, d, y, E);
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
  insert(u, d, y, E, T) {
    return this.insertPages(u, [{ component: d, componentProps: y }], E, T);
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
  insertPages(u, d, y, E) {
    return this.queueTrns({
      insertStart: u,
      insertViews: d,
      opts: y
    }, E);
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
    const E = {
      removeStart: -1,
      removeCount: -1,
      opts: d
    };
    return typeof u == "object" && u.component ? (E.removeView = u, E.removeStart = 1) : typeof u == "number" && (E.removeStart = u + 1), this.queueTrns(E, y);
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
  removeIndex(u, d = 1, y, E) {
    return this.queueTrns({
      removeStart: u,
      removeCount: d,
      opts: y
    }, E);
  }
  /**
   * Set the root for the current navigation stack to a component.
   *
   * @param component The component to set as the root of the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setRoot(u, d, y, E) {
    return this.setPages([{ component: u, componentProps: d }], y, E);
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
  setRouteId(u, d, y, E) {
    const T = this.getActiveSync();
    if (P1(T, u, d))
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
      const P = this.views.find((A) => P1(A, u, d));
      P ? x = this.popTo(P, Object.assign(Object.assign({}, L), { direction: "back", animationBuilder: E })) : y === "forward" ? x = this.push(u, d, Object.assign(Object.assign({}, L), { animationBuilder: E })) : y === "back" && (x = this.setRoot(u, d, Object.assign(Object.assign({}, L), { direction: "back", animated: !0, animationBuilder: E })));
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
    var y, E;
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
    return ((E = u.insertViews) === null || E === void 0 ? void 0 : E.length) === 0 && (u.insertViews = void 0), this.transInstr.push(u), this.nextTrns(), T;
  }
  success(u, d) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", d);
      return;
    }
    if (d.done && d.done(u.hasCompleted, u.requiresTransition, u.enteringView, u.leavingView, u.direction), d.resolve(u.hasCompleted), d.opts.updateURL !== !1 && this.useRouter) {
      const y = document.querySelector("ion-router");
      if (y) {
        const E = u.direction === "back" ? "back" : "forward";
        y.navChanged(E);
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
      y && y.state === wT && await y.init(this.el), this.postViewInit(y, d, u);
      const E = (u.enteringRequiresTransition || u.leavingRequiresTransition) && y !== d;
      E && u.opts && d && (u.opts.direction === "back" && (u.opts.animationBuilder = u.opts.animationBuilder || (y == null ? void 0 : y.animationBuilder)), d.animationBuilder = u.opts.animationBuilder);
      let T;
      E ? T = await this.transition(y, d, u) : T = {
        hasCompleted: !0,
        requiresTransition: !1
      }, this.success(T, u), this.ionNavDidChange.emit();
    } catch (d) {
      this.failed(d, u);
    }
    this.isTransitioning = !1, this.nextTrns();
  }
  prepareTI(u) {
    var d, y, E;
    const T = this.views.length;
    if ((d = u.opts) !== null && d !== void 0 || (u.opts = {}), (y = (E = u.opts).delegate) !== null && y !== void 0 || (E.delegate = this.delegate), u.removeView !== void 0) {
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
    const _ = hM(g);
    if (_.length === 0)
      throw new Error("invalid views to insert");
    for (const x of _) {
      x.delegate = u.opts.delegate;
      const L = x.nav;
      if (L && L !== this)
        throw new Error("inserted view was already inserted");
      if (x.state === _y)
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
    const E = u.removeStart;
    if (E !== void 0) {
      const T = this.views, g = E + u.removeCount;
      for (let _ = T.length - 1; _ >= 0; _--) {
        const x = T[_];
        if ((_ < E || _ >= g) && x !== d)
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
    var E, T, g;
    ca(d || u, "Both leavingView and enteringView are null"), ca(y.resolve, "resolve must be valid"), ca(y.reject, "reject must be valid");
    const _ = y.opts, { insertViews: x, removeStart: L, removeCount: P } = y;
    let A;
    if (L !== void 0 && P !== void 0) {
      ca(L >= 0, "removeStart can not be negative"), ca(P >= 0, "removeCount can not be negative"), A = [];
      for (let B = L; B < L + P; B++) {
        const se = this.views[B];
        se !== void 0 && se !== u && se !== d && A.push(se);
      }
      (E = _.direction) !== null && E !== void 0 || (_.direction = "back");
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
        Vl(B.element, dT), Vl(B.element, pT), Vl(B.element, rS);
      for (const B of A)
        this.destroyView(B);
    }
  }
  async transition(u, d, y) {
    const E = y.opts, T = E.progressAnimation ? (A) => {
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
    }, E), { animationBuilder: E.animationBuilder || this.animation || Bl.get("navAnimation") }), { hasCompleted: P } = await hT(L);
    return this.transitionFinish(P, u, d, E);
  }
  transitionFinish(u, d, y, E) {
    const T = u ? d : y;
    return T && this.unmountInactiveViews(T), {
      hasCompleted: u,
      requiresTransition: !0,
      enteringView: d,
      leavingView: y,
      direction: E.direction
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
    const y = this.views, E = y.indexOf(u);
    E > -1 ? (ca(u.nav === this, "view is not part of the nav"), y.splice(E, 1), y.splice(d, 0, u)) : (ca(!u.nav, "nav is used"), u.nav = this, y.splice(d, 0, u));
  }
  /**
   * Removes a view from the stack.
   *
   * @param view The view to remove.
   */
  removeView(u) {
    ca(u.state === TT || u.state === _y, "view state should be loaded or destroyed");
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
    for (let E = d.length - 1; E >= 0; E--) {
      const T = d[E], g = T.element;
      g && (E > y ? (Vl(g, rS), this.destroyView(T)) : E < y && bS(g, !0));
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
      let E = u ? -1e-3 : 1e-3;
      u ? E += ky([0, 0], [0.32, 0.72], [0, 1], [1, 1], d)[0] : (this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"), E += ky([0, 0], [1, 0], [0.68, 0.28], [1, 1], d)[0]), this.sbAni.progressEnd(u ? 1 : 0, E, y);
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
    return yM;
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
function bM() {
  if (typeof customElements > "u")
    return;
  ["ion-nav"].forEach((u) => {
    switch (u) {
      case "ion-nav":
        customElements.get(u) || customElements.define(u, gM);
        break;
    }
  });
}
const SM = bM;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var F1;
(function(c) {
  c.Dark = "DARK", c.Light = "LIGHT", c.Default = "DEFAULT";
})(F1 || (F1 = {}));
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const EM = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}", CM = EM, wM = /* @__PURE__ */ pd(class extends dd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = Il(this, "ionNavWillLoad", 7), this.ionNavWillChange = Il(this, "ionNavWillChange", 3), this.ionNavDidChange = Il(this, "ionNavDidChange", 3), this.lockController = dM(), this.gestureOrAnimationInProgress = !1, this.mode = cd(this), this.delegate = void 0, this.animated = !0, this.animation = void 0, this.swipeHandler = void 0;
  }
  swipeHandlerChanged() {
    this.gesture && this.gesture.enable(this.swipeHandler !== void 0);
  }
  async connectedCallback() {
    const u = () => {
      this.gestureOrAnimationInProgress = !0, this.swipeHandler && this.swipeHandler.onStart();
    };
    this.gesture = (await import("./swipe-back-xneTdsQv.js")).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => u(), (d) => {
      var y;
      return (y = this.ani) === null || y === void 0 ? void 0 : y.progressStep(d);
    }, (d, y, E) => {
      if (this.ani) {
        this.ani.onFinish(() => {
          this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(d);
        }, { oneTimeCallback: !0 });
        let T = d ? -1e-3 : 1e-3;
        d ? T += ky([0, 0], [0.32, 0.72], [0, 1], [1, 1], y)[0] : (this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"), T += ky([0, 0], [1, 0], [0.68, 0.28], [1, 1], y)[0]), this.ani.progressEnd(d ? 1 : 0, T, E);
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
    const E = await this.lockController.lock();
    let T = !1;
    try {
      T = await this.transition(u, d, y);
    } catch (g) {
      console.error(g);
    }
    return E(), T;
  }
  /** @internal */
  async setRouteId(u, d, y, E) {
    return {
      changed: await this.setRoot(u, d, {
        duration: y === "root" ? 0 : void 0,
        direction: y === "back" ? "back" : "forward",
        animationBuilder: E
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
    if (this.activeComponent === u && fT(d, this.activeParams))
      return !1;
    const E = this.activeEl, T = await bT(this.delegate, this.el, u, ["ion-page", "ion-page-invisible"], d);
    return this.activeComponent = u, this.activeEl = T, this.activeParams = d, await this.commit(T, E, y), await ZL(this.delegate, E), !0;
  }
  async transition(u, d, y = {}) {
    if (d === u)
      return !1;
    this.ionNavWillChange.emit();
    const { el: E, mode: T } = this, g = this.animated && Bl.getBoolean("animated", !0), _ = y.animationBuilder || this.animation || Bl.get("navAnimation");
    return await hT(Object.assign(Object.assign({
      mode: T,
      animated: g,
      enteringEl: u,
      leavingEl: d,
      baseEl: E,
      /**
       * We need to wait for all Stencil components
       * to be ready only when using the lazy
       * loaded bundle.
       */
      deepWait: ML(E),
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
    return CM;
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
function TM() {
  if (typeof customElements > "u")
    return;
  ["ion-router-outlet"].forEach((u) => {
    switch (u) {
      case "ion-router-outlet":
        customElements.get(u) || customElements.define(u, wM);
        break;
    }
  });
}
const RM = TM;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const xM = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}", kM = xM, _M = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.07)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, var(--ion-text-color-step-350, #595959)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:56px}", DM = _M, OM = /* @__PURE__ */ pd(class extends dd {
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
    this.keyboardCtrl = await vM(async (u, d) => {
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
    const { color: u, translucent: d, keyboardVisible: y } = this, E = cd(this), T = y && this.el.getAttribute("slot") !== "top";
    return Pi(Tv, { key: "3a8595dd83f89e8319471a7a7f9f64b2565b384c", role: "tablist", "aria-hidden": T ? "true" : null, class: XL(u, {
      [E]: !0,
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
      ios: kM,
      md: DM
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
function LM() {
  if (typeof customElements > "u")
    return;
  ["ion-tab-bar"].forEach((u) => {
    switch (u) {
      case "ion-tab-bar":
        customElements.get(u) || customElements.define(u, OM);
        break;
    }
  });
}
const MM = LM;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const AM = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:24px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){font-size:30px}', $M = AM, NM = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}', zM = NM, UM = /* @__PURE__ */ pd(class extends dd {
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
    this.inheritedAttributes = Object.assign({}, AL(this.el, ["aria-label"])), this.layout === void 0 && (this.layout = Bl.get("tabButtonLayout", "icon-top"));
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
    const { disabled: u, hasIcon: d, hasLabel: y, href: E, rel: T, target: g, layout: _, selected: x, tab: L, inheritedAttributes: P } = this, A = cd(this), K = {
      download: this.download,
      href: E,
      rel: T,
      target: g
    };
    return Pi(Tv, { key: "4b528ce31f67e10ad849e0c99bd034bba675c227", onClick: this.onClick, onKeyup: this.onKeyUp, id: L !== void 0 ? `tab-button-${L}` : null, class: {
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
      ios: $M,
      md: zM
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
function PM() {
  if (typeof customElements > "u")
    return;
  ["ion-tab-button", "ion-ripple-effect"].forEach((u) => {
    switch (u) {
      case "ion-tab-button":
        customElements.get(u) || customElements.define(u, UM);
        break;
      case "ion-ripple-effect":
        customElements.get(u) || cM();
        break;
    }
  });
}
const HM = PM;
let oS;
const FM = () => {
  if (typeof window > "u")
    return /* @__PURE__ */ new Map();
  if (!oS) {
    const c = window;
    c.Ionicons = c.Ionicons || {}, oS = c.Ionicons.map = c.Ionicons.map || /* @__PURE__ */ new Map();
  }
  return oS;
}, jM = (c) => {
  let u = lS(c.src);
  return u || (u = RT(c.name, c.icon, c.mode, c.ios, c.md), u ? VM(u, c) : c.icon && (u = lS(c.icon), u || (u = lS(c.icon[c.mode]), u)) ? u : null);
}, VM = (c, u) => {
  const d = FM().get(c);
  if (d)
    return d;
  try {
    return jO(`svg/${c}.svg`);
  } catch {
    console.warn(`[Ionicons Warning]: Could not load icon with name "${c}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, u);
  }
}, RT = (c, u, d, y, E) => (d = (d && Ey(d)) === "ios" ? "ios" : "md", y && d === "ios" ? c = Ey(y) : E && d === "md" ? c = Ey(E) : (!c && u && !xT(u) && (c = u), Dy(c) && (c = Ey(c))), !Dy(c) || c.trim() === "" || c.replace(/[a-z]|-|\d/gi, "") !== "" ? null : c), lS = (c) => Dy(c) && (c = c.trim(), xT(c)) ? c : null, xT = (c) => c.length > 0 && /(\/|\.)/.test(c), Dy = (c) => typeof c == "string", Ey = (c) => c.toLowerCase(), IM = (c, u = []) => {
  const d = {};
  return u.forEach((y) => {
    c.hasAttribute(y) && (c.getAttribute(y) !== null && (d[y] = c.getAttribute(y)), c.removeAttribute(y));
  }), d;
}, BM = (c) => c && c.dir !== "" ? c.dir.toLowerCase() === "rtl" : (document == null ? void 0 : document.dir.toLowerCase()) === "rtl", WM = (c) => {
  const u = document.createElement("div");
  u.innerHTML = c;
  for (let y = u.childNodes.length - 1; y >= 0; y--)
    u.childNodes[y].nodeName.toLowerCase() !== "svg" && u.removeChild(u.childNodes[y]);
  const d = u.firstElementChild;
  if (d && d.nodeName.toLowerCase() === "svg") {
    const y = d.getAttribute("class") || "";
    if (d.setAttribute("class", (y + " s-ion-icon").trim()), kT(d))
      return u.innerHTML;
  }
  return "";
}, kT = (c) => {
  if (c.nodeType === 1) {
    if (c.nodeName.toLowerCase() === "script")
      return !1;
    for (let u = 0; u < c.attributes.length; u++) {
      const d = c.attributes[u].name;
      if (Dy(d) && d.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let u = 0; u < c.childNodes.length; u++)
      if (!kT(c.childNodes[u]))
        return !1;
  }
  return !0;
}, YM = (c) => c.startsWith("data:image/svg+xml"), GM = (c) => c.indexOf(";utf8,") !== -1, dc = /* @__PURE__ */ new Map(), j1 = /* @__PURE__ */ new Map();
let uS;
const QM = (c, u) => {
  let d = j1.get(c);
  if (!d)
    if (typeof fetch < "u" && typeof document < "u")
      if (YM(c) && GM(c)) {
        uS || (uS = new DOMParser());
        const E = uS.parseFromString(c, "text/html").querySelector("svg");
        return E && dc.set(c, E.outerHTML), Promise.resolve();
      } else
        d = fetch(c).then((y) => {
          if (y.ok)
            return y.text().then((E) => {
              E && u !== !1 && (E = WM(E)), dc.set(c, E || "");
            });
          dc.set(c, "");
        }), j1.set(c, d);
    else
      return dc.set(c, ""), Promise.resolve();
  return d;
}, qM = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}", KM = /* @__PURE__ */ pd(class extends dd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.didLoadIcon = !1, this.svgContent = void 0, this.isVisible = !1, this.mode = XM(), this.color = void 0, this.ios = void 0, this.md = void 0, this.flipRtl = void 0, this.name = void 0, this.src = void 0, this.icon = void 0, this.size = void 0, this.lazy = !1, this.sanitize = !0;
  }
  componentWillLoad() {
    this.inheritedAttributes = IM(this.el, ["aria-label"]);
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
      const E = this.io = new window.IntersectionObserver((T) => {
        T[0].isIntersecting && (E.disconnect(), this.io = void 0, y());
      }, { rootMargin: d });
      E.observe(u);
    } else
      y();
  }
  loadIcon() {
    if (this.isVisible) {
      const u = jM(this);
      u && (dc.has(u) ? this.svgContent = dc.get(u) : QM(u, this.sanitize).then(() => this.svgContent = dc.get(u)), this.didLoadIcon = !0);
    }
    this.iconName = RT(this.name, this.icon, this.mode, this.ios, this.md);
  }
  render() {
    const { flipRtl: u, iconName: d, inheritedAttributes: y, el: E } = this, T = this.mode || "md", g = d ? (d.includes("arrow") || d.includes("chevron")) && u !== !1 : !1, _ = u || g;
    return Pi(Tv, Object.assign({ role: "img", class: Object.assign(Object.assign({ [T]: !0 }, ZM(this.color)), { [`icon-${this.size}`]: !!this.size, "flip-rtl": _, "icon-rtl": _ && BM(E) }) }, y), this.svgContent ? Pi("div", { class: "icon-inner", innerHTML: this.svgContent }) : Pi("div", { class: "icon-inner" }));
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
    return qM;
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
}]), XM = () => typeof document < "u" && document.documentElement.getAttribute("mode") || "md", ZM = (c) => c ? {
  "ion-color": !0,
  [`ion-color-${c}`]: !0
} : null;
function JM() {
  if (typeof customElements > "u")
    return;
  ["ion-icon"].forEach((u) => {
    switch (u) {
      case "ion-icon":
        customElements.get(u) || customElements.define(u, KM);
        break;
    }
  });
}
const eA = JM, OS = /* @__PURE__ */ tt.createContext({
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
}), tA = class {
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
}, as = /* @__PURE__ */ tt.createContext({
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
}), nA = (c) => c.toLowerCase().split("-").map((u) => u.charAt(0).toUpperCase() + u.slice(1)).join(""), _T = (c) => c.replace(/([A-Z])/g, (u) => `-${u[0].toLowerCase()}`), rA = (c, u, d = {}) => {
  if (c instanceof Element) {
    const y = iA(c.classList, u, d);
    y !== "" && (c.className = y), Object.keys(u).forEach((E) => {
      if (!(E === "children" || E === "style" || E === "ref" || E === "class" || E === "className" || E === "forwardedRef"))
        if (E.indexOf("on") === 0 && E[2] === E[2].toUpperCase()) {
          const T = E.substring(2), g = T[0].toLowerCase() + T.substring(1);
          DT(g) || oA(c, g, u[E]);
        } else
          c[E] = u[E], typeof u[E] === "string" && c.setAttribute(_T(E), u[E]);
    });
  }
}, iA = (c, u, d) => {
  const y = u.className || u.class, E = d.className || d.class, T = sS(c), g = sS(y ? y.split(" ") : []), _ = sS(E ? E.split(" ") : []), x = [];
  return T.forEach((L) => {
    g.has(L) ? (x.push(L), g.delete(L)) : _.has(L) || x.push(L);
  }), g.forEach((L) => x.push(L)), x.join(" ");
}, aA = (c) => {
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
const DT = (c) => {
  if (typeof document > "u")
    return !0;
  {
    const u = "on" + aA(c);
    let d = u in document;
    if (!d) {
      const y = document.createElement("div");
      y.setAttribute(u, "return;"), d = typeof y[u] == "function";
    }
    return d;
  }
}, oA = (c, u, d) => {
  const y = c.__events || (c.__events = {}), E = y[u];
  E && c.removeEventListener(u, E), c.addEventListener(u, y[u] = function(g) {
    d && d.call(this, g);
  });
}, sS = (c) => {
  const u = /* @__PURE__ */ new Map();
  return c.forEach((d) => u.set(d, d)), u;
}, lA = (c, u) => {
  typeof c == "function" ? c(u) : c != null && (c.current = u);
}, OT = (...c) => (u) => {
  c.forEach((d) => {
    lA(d, u);
  });
}, uA = (c, u) => {
  const d = (y, E) => tt.createElement(c, Object.assign({}, y, { forwardedRef: E }));
  return d.displayName = u, tt.forwardRef(d);
}, Rv = (c, u, d, y) => {
  y !== void 0 && y();
  const E = nA(c), T = class extends tt.Component {
    constructor(g) {
      super(g), this.setComponentElRef = (_) => {
        this.componentEl = _;
      };
    }
    componentDidMount() {
      this.componentDidUpdate(this.props);
    }
    componentDidUpdate(g) {
      rA(this.componentEl, this.props, g);
    }
    render() {
      const g = this.props, { children: _, forwardedRef: x, style: L, className: P, ref: A } = g, K = Yl(g, ["children", "forwardedRef", "style", "className", "ref"]);
      let B = Object.keys(K).reduce((We, Ce) => {
        const ht = K[Ce];
        if (Ce.indexOf("on") === 0 && Ce[2] === Ce[2].toUpperCase()) {
          const ye = Ce.substring(2).toLowerCase();
          typeof document < "u" && DT(ye) && (We[Ce] = ht);
        } else {
          const ye = typeof ht;
          (ye === "string" || ye === "boolean" || ye === "number") && (We[_T(Ce)] = ht);
        }
        return We;
      }, {});
      const se = Object.assign(Object.assign({}, B), { ref: OT(x, this.setComponentElRef), style: L });
      return Wl.createElement(c, se, _);
    }
    static get displayName() {
      return E;
    }
  };
  return uA(T, E);
}, xv = (c, u) => {
  const d = (y, E) => tt.createElement(c, Object.assign({}, y, { forwardedRef: E }));
  return d.displayName = u, tt.forwardRef(d);
}, sA = () => {
  if (typeof window < "u") {
    const c = window.Ionic;
    if (c && c.config)
      return c.config;
  }
  return null;
};
tt.createContext({
  addOverlay: () => {
  },
  removeOverlay: () => {
  }
});
const cA = /* @__PURE__ */ Rv("ion-tab-button", void 0, void 0, HM), fA = /* @__PURE__ */ Rv("ion-tab-bar", void 0, void 0, MM), TS = /* @__PURE__ */ Rv("ion-router-outlet", void 0, void 0, RM), dA = /* @__PURE__ */ Rv("ion-icon", void 0, void 0, eA), LT = tt.createContext({
  registerIonPage: () => {
  },
  isInOutlet: () => !1
});
class MT extends tt.PureComponent {
  constructor(u) {
    super(u), this.ionPageElementRef = tt.createRef(), this.stableMergedRefs = OT(this.ionPageElementRef, this.props.forwardedRef), this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this), this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this), this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this), this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
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
    const u = this.props, { className: d, children: y, routeInfo: E, forwardedRef: T } = u, g = Yl(u, ["className", "children", "routeInfo", "forwardedRef"]);
    return tt.createElement(OS.Consumer, null, (_) => (this.ionLifeCycleContext = _, tt.createElement("div", Object.assign({ className: d ? `${d} ion-page` : "ion-page", ref: this.stableMergedRefs }, g), y)));
  }
  static get contextType() {
    return LT;
  }
}
class pA extends tt.Component {
  constructor(u) {
    super(u);
  }
  render() {
    const u = this.props, { className: d, children: y, forwardedRef: E } = u, T = Yl(u, ["className", "children", "forwardedRef"]);
    return this.context.hasIonicRouter() ? tt.createElement(MT, Object.assign({ className: d ? `${d}` : "", routeInfo: this.context.routeInfo, forwardedRef: E }, T), y) : tt.createElement("div", Object.assign({ className: d ? `ion-page ${d}` : "ion-page", ref: E }, T), y);
  }
  static get displayName() {
    return "IonPage";
  }
  static get contextType() {
    return as;
  }
}
xv(pA, "IonPage");
const V1 = { main: 0 }, vA = (c = "main") => {
  var u;
  const d = ((u = V1[c]) !== null && u !== void 0 ? u : 0) + 1;
  return V1[c] = d, d.toString();
}, hA = (c, u) => {
  const d = /* @__PURE__ */ new WeakMap(), y = `react-delegate-${vA()}`;
  let E = 0;
  return {
    attachViewToDom: async (_, x, L, P) => {
      const A = document.createElement("div");
      P && A.classList.add(...P), _.appendChild(A);
      const K = x(L), B = `${y}-${E++}`, se = rM.createPortal(K, A, B);
      return d.set(A, se), c(se), Promise.resolve(A);
    },
    removeViewFromDom: (_, x) => {
      const L = d.get(x);
      return L && u(L), x.remove(), Promise.resolve();
    }
  };
}, mA = Rv("ion-nav", void 0, void 0, SM), yA = (c) => {
  var { children: u, forwardedRef: d } = c, y = Yl(c, ["children", "forwardedRef"]);
  const [E, T] = Wl.useState([]), g = (L) => T((P) => [...P, L]), _ = (L) => T((P) => P.filter((A) => A !== L)), x = Wl.useMemo(() => hA(g, _), []);
  return tt.createElement(mA, Object.assign({ delegate: x, ref: d }, y), E);
};
xv(yA, "IonNav");
tt.createContext({
  activeTab: void 0,
  selectTab: () => !1
});
const gA = typeof HTMLElement < "u" ? HTMLElement : class {
};
class bA extends tt.Component {
  constructor(u) {
    super(u), this.outletIsReady = !1, this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this), this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this), this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this), this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
  }
  componentDidMount() {
    this.ionRouterOutlet && (this.outletIsReady || sT(this.ionRouterOutlet, () => {
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
    const u = this.props, { StackManager: d, children: y, routeInfo: E } = u, T = Yl(u, ["StackManager", "children", "routeInfo"]);
    return tt.createElement(OS.Consumer, null, (g) => (this.ionLifeCycleContext = g, tt.createElement(
      d,
      { routeInfo: E },
      tt.createElement(TS, Object.assign({ setRef: (_) => this.ionRouterOutlet = _ }, T), y)
    )));
  }
  static get contextType() {
    return LT;
  }
}
class SA extends tt.Component {
  constructor(u) {
    super(u);
  }
  render() {
    const u = this.context.getStackManager(), d = this.props, { children: y, forwardedRef: E } = d, T = Yl(d, ["children", "forwardedRef"]);
    return this.context.hasIonicRouter() ? T.ionPage ? tt.createElement(bA, Object.assign({ StackManager: u, routeInfo: this.context.routeInfo }, T), y) : tt.createElement(
      u,
      { routeInfo: this.context.routeInfo },
      tt.createElement(TS, Object.assign({}, T, { forwardedRef: E }), y)
    ) : tt.createElement(TS, Object.assign({ ref: E }, this.props), this.props.children);
  }
  static get contextType() {
    return as;
  }
}
xv(SA, "IonRouterOutlet");
const cS = class extends tt.Component {
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
    const c = this.props, u = Yl(c, ["onClick"]);
    return tt.createElement(cA, Object.assign({ onIonTabButtonClick: this.handleIonTabButtonClick }, u));
  }
  static get displayName() {
    return "IonTabButton";
  }
};
class EA extends tt.PureComponent {
  constructor(u) {
    super(u), this.setActiveTabOnContext = (y) => {
    };
    const d = {};
    tt.Children.forEach(u.children, (y) => {
      var E, T, g, _;
      y != null && typeof y == "object" && y.props && (y.type === cS || y.type.isTabButton) && (d[y.props.tab] = {
        originalHref: y.props.href,
        currentHref: y.props.href,
        originalRouteOptions: y.props.href === ((E = u.routeInfo) === null || E === void 0 ? void 0 : E.pathname) ? (T = u.routeInfo) === null || T === void 0 ? void 0 : T.routeOptions : void 0,
        currentRouteOptions: y.props.href === ((g = u.routeInfo) === null || g === void 0 ? void 0 : g.pathname) ? (_ = u.routeInfo) === null || _ === void 0 ? void 0 : _.routeOptions : void 0
      });
    }), this.state = {
      tabs: d
    }, this.onTabButtonClick = this.onTabButtonClick.bind(this), this.renderTabButton = this.renderTabButton.bind(this), this.setActiveTabOnContext = this.setActiveTabOnContext.bind(this), this.selectTab = this.selectTab.bind(this);
  }
  componentDidMount() {
    const u = this.state.tabs, y = Object.keys(u).find((E) => {
      const T = u[E].originalHref;
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
    var y, E, T;
    const g = Object.assign({}, d.tabs), x = Object.keys(d.tabs).find((P) => {
      const A = d.tabs[P].originalHref;
      return u.routeInfo.pathname.startsWith(A);
    });
    tt.Children.forEach(u.children, (P) => {
      if (P != null && typeof P == "object" && P.props && (P.type === cS || P.type.isTabButton)) {
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
      (x !== L || P !== ((y = u.routeInfo) === null || y === void 0 ? void 0 : y.pathname) || A !== ((E = u.routeInfo) === null || E === void 0 ? void 0 : E.routeOptions)) && (g[x] = {
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
    var y, E;
    const T = this.state.tabs[u.detail.tab], g = T.originalHref, _ = !((y = this.props.routerOutletRef) === null || y === void 0) && y.current ? u.detail.href : "", { activeTab: x } = this.state;
    d && d(u), x === u.detail.tab ? g !== _ && this.context.resetTab(u.detail.tab, g, T.originalRouteOptions) : (this.props.onIonTabsWillChange && this.props.onIonTabsWillChange(new CustomEvent("ionTabWillChange", { detail: { tab: u.detail.tab } })), this.props.onIonTabsDidChange && this.props.onIonTabsDidChange(new CustomEvent("ionTabDidChange", { detail: { tab: u.detail.tab } })), !((E = this.props.routerOutletRef) === null || E === void 0) && E.current && (this.setActiveTabOnContext(u.detail.tab), this.context.changeTab(u.detail.tab, _, u.detail.routeOptions)));
  }
  renderTabButton(u) {
    return (d) => {
      var y, E;
      if (d != null && d.props && (d.type === cS || d.type.isTabButton)) {
        const T = d.props.tab === u ? (y = this.props.routeInfo) === null || y === void 0 ? void 0 : y.pathname : this.state.tabs[d.props.tab].currentHref, g = d.props.tab === u ? (E = this.props.routeInfo) === null || E === void 0 ? void 0 : E.routeOptions : this.state.tabs[d.props.tab].currentRouteOptions;
        return tt.cloneElement(d, {
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
    return tt.createElement(fA, Object.assign({}, this.props, { selectedTab: u }), tt.Children.map(this.props.children, this.renderTabButton(u)));
  }
  static get contextType() {
    return as;
  }
}
const CA = tt.memo((c) => {
  var { forwardedRef: u } = c, d = Yl(c, ["forwardedRef"]);
  const y = Wl.useContext(as);
  return tt.createElement(EA, Object.assign({ ref: u }, d, { routeInfo: d.routeInfo || y.routeInfo || { pathname: window.location.pathname }, onSetCurrentTab: y.setCurrentTab }), d.children);
});
xv(CA, "IonTabBar");
class wA extends gA {
  constructor() {
    super();
  }
}
typeof window < "u" && window.customElements && (window.customElements.get("ion-tabs") || window.customElements.define("ion-tabs", wA));
class TA extends tt.PureComponent {
  constructor(u) {
    super(u), this.props.name && console.warn('In Ionic React, you import icons from "ionicons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.');
  }
  render() {
    var u, d;
    const y = this.props, { icon: E, ios: T, md: g, mode: _ } = y, x = Yl(y, ["icon", "ios", "md", "mode"]);
    let L;
    const P = sA(), A = _ || (P == null ? void 0 : P.get("mode"));
    return T || g ? A === "ios" ? L = (u = T ?? g) !== null && u !== void 0 ? u : E : L = (d = g ?? T) !== null && d !== void 0 ? d : E : L = E, tt.createElement(dA, Object.assign({ ref: this.props.forwardedRef, icon: L }, x), this.props.children);
  }
  static get contextType() {
    return as;
  }
}
xv(TA, "IonIcon");
class AT extends tt.PureComponent {
  render() {
    const u = this.context.getIonRoute();
    return !this.context.hasIonicRouter() || !AT ? (console.error("You either do not have an Ionic Router package, or your router does not support using <IonRoute>"), null) : tt.createElement(u, Object.assign({}, this.props));
  }
  static get contextType() {
    return as;
  }
}
class $T extends tt.PureComponent {
  render() {
    const u = this.context.getIonRedirect();
    return !this.context.hasIonicRouter() || !$T ? (console.error("You either do not have an Ionic Router package, or your router does not support using <IonRedirect>"), null) : tt.createElement(u, Object.assign({}, this.props));
  }
  static get contextType() {
    return as;
  }
}
const RA = tt.createContext({
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
class qA extends tt.PureComponent {
  constructor(u) {
    super(u), this.nodes = /* @__PURE__ */ new Map(), this.animation = _L(u.id);
  }
  setupAnimation(u) {
    const d = this.animation;
    this.nodes.size > 0 && d.addElement(Array.from(this.nodes.values())), I1(d, u), B1(d, u);
  }
  componentDidMount() {
    const u = this.props;
    this.setupAnimation(u);
  }
  componentDidUpdate(u) {
    const d = this.animation, y = this.props;
    I1(d, y, u), xA(d, y, u), B1(d, y, u);
  }
  render() {
    const { children: u } = this.props;
    return tt.createElement(tt.Fragment, null, tt.Children.map(u, (d, y) => tt.cloneElement(d, { ref: (E) => this.nodes.set(y, E) })));
  }
}
const I1 = (c, u = {}, d = {}) => {
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
  const E = u.from;
  E && E !== d.from && (Array.isArray(E) ? E : [E]).forEach((L) => c.from(L.property, L.value));
  const T = u.to;
  T && T !== d.to && (Array.isArray(T) ? T : [T]).forEach((L) => c.to(L.property, L.value));
  const g = u.fromTo;
  g && g !== d.fromTo && (Array.isArray(g) ? g : [g]).forEach((L) => c.fromTo(L.property, L.fromValue, L.toValue));
  const _ = u.onFinish;
  _ && _ !== d.onFinish && (Array.isArray(_) ? _ : [_]).forEach((L) => c.onFinish(L.callback, L.opts));
}, xA = (c, u = {}, d = {}) => {
  var y, E, T, g, _;
  const { progressStart: x, progressStep: L, progressEnd: P } = u;
  x && (((y = d.progressStart) === null || y === void 0 ? void 0 : y.forceLinearEasing) !== (x == null ? void 0 : x.forceLinearEasing) || ((E = d.progressStart) === null || E === void 0 ? void 0 : E.step) !== (x == null ? void 0 : x.step)) && c.progressStart(x.forceLinearEasing, x.step), L && ((T = d.progressStep) === null || T === void 0 ? void 0 : T.step) !== (L == null ? void 0 : L.step) && c.progressStep(L.step), P && (((g = d.progressEnd) === null || g === void 0 ? void 0 : g.playTo) !== (P == null ? void 0 : P.playTo) || ((_ = d.progressEnd) === null || _ === void 0 ? void 0 : _.step) !== (P == null ? void 0 : P.step) || (d == null ? void 0 : d.dur) !== (P == null ? void 0 : P.dur)) && c.progressEnd(P.playTo, P.step, P.dur);
}, B1 = (c, u = {}, d = {}) => {
  !d.play && u.play && c.play(), !d.pause && u.pause && c.pause(), !d.stop && u.stop && c.stop(), !d.destroy && u.destroy && c.destroy();
};
class KA extends tt.Component {
  constructor(u) {
    super(u), this.ionLifeCycleContext = new tA(), this._isMounted = !1, this.ionLifeCycleContext.onComponentCanBeDestroyed(() => {
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
    return tt.createElement(OS.Provider, { value: this.ionLifeCycleContext }, u && this.props.children);
  }
}
class XA extends tt.PureComponent {
  constructor(u) {
    super(u), this.ionRouterContextValue = {
      push: (d, y, E, T, g) => {
        this.navigate(d, y, E, g, T);
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
  navigate(u, d = "forward", y = "push", E, T, g) {
    this.props.onNavigate(u, y, d, E, T, g);
  }
  getPageManager() {
    return MT;
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
    return tt.createElement(
      as.Provider,
      { value: Object.assign(Object.assign({}, this.state), { routeInfo: this.props.routeInfo }) },
      tt.createElement(RA.Provider, { value: Object.assign(Object.assign({}, this.ionRouterContextValue), { routeInfo: this.props.routeInfo }) }, this.props.children)
    );
  }
}
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const kA = (c) => {
  const u = /* @__PURE__ */ new Map();
  u.set("web", { name: "web" });
  const d = c.CapacitorPlatforms || {
    currentPlatform: { name: "web" },
    platforms: u
  }, y = (T, g) => {
    d.platforms.set(T, g);
  }, E = (T) => {
    d.platforms.has(T) && (d.currentPlatform = d.platforms.get(T));
  };
  return d.addPlatform = y, d.setPlatform = E, d;
}, _A = (c) => c.CapacitorPlatforms = kA(c), NT = /* @__PURE__ */ _A(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
NT.addPlatform;
NT.setPlatform;
var fd;
(function(c) {
  c.Unimplemented = "UNIMPLEMENTED", c.Unavailable = "UNAVAILABLE";
})(fd || (fd = {}));
class fS extends Error {
  constructor(u, d, y) {
    super(u), this.message = u, this.code = d, this.data = y;
  }
}
const DA = (c) => {
  var u, d;
  return c != null && c.androidBridge ? "android" : !((d = (u = c == null ? void 0 : c.webkit) === null || u === void 0 ? void 0 : u.messageHandlers) === null || d === void 0) && d.bridge ? "ios" : "web";
}, OA = (c) => {
  var u, d, y, E, T;
  const g = c.CapacitorCustomPlatform || null, _ = c.Capacitor || {}, x = _.Plugins = _.Plugins || {}, L = c.CapacitorPlatforms, P = () => g !== null ? g.name : DA(c), A = ((u = L == null ? void 0 : L.currentPlatform) === null || u === void 0 ? void 0 : u.getPlatform) || P, K = () => A() !== "web", B = ((d = L == null ? void 0 : L.currentPlatform) === null || d === void 0 ? void 0 : d.isNativePlatform) || K, se = (ge) => {
    const nt = ut.get(ge);
    return !!(nt != null && nt.platforms.has(A()) || ht(ge));
  }, We = ((y = L == null ? void 0 : L.currentPlatform) === null || y === void 0 ? void 0 : y.isPluginAvailable) || se, Ce = (ge) => {
    var nt;
    return (nt = _.PluginHeaders) === null || nt === void 0 ? void 0 : nt.find((_e) => _e.name === ge);
  }, ht = ((E = L == null ? void 0 : L.currentPlatform) === null || E === void 0 ? void 0 : E.getPluginHeader) || Ce, ye = (ge) => c.console.error(ge), Ue = (ge, nt, _e) => Promise.reject(`${_e} does not have an implementation of "${nt}".`), ut = /* @__PURE__ */ new Map(), Oe = (ge, nt = {}) => {
    const _e = ut.get(ge);
    if (_e)
      return console.warn(`Capacitor plugin "${ge}" already registered. Cannot register plugins twice.`), _e.proxy;
    const xt = A(), Ct = ht(ge);
    let $t;
    const Fe = async () => (!$t && xt in nt ? $t = typeof nt[xt] == "function" ? $t = await nt[xt]() : $t = nt[xt] : g !== null && !$t && "web" in nt && ($t = typeof nt.web == "function" ? $t = await nt.web() : $t = nt.web), $t), at = (oe, $) => {
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
        throw new fS(`"${ge}" plugin is not implemented on ${xt}`, fd.Unimplemented);
      }
    }, gt = (oe) => {
      let $;
      const q = (...Ne) => {
        const Te = Fe().then((Ge) => {
          const ot = at(Ge, oe);
          if (ot) {
            const St = ot(...Ne);
            return $ = St == null ? void 0 : St.remove, St;
          } else
            throw new fS(`"${ge}.${oe}()" is not implemented on ${xt}`, fd.Unimplemented);
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
  return _.convertFileSrc || (_.convertFileSrc = (ge) => ge), _.getPlatform = A, _.handleError = ye, _.isNativePlatform = B, _.isPluginAvailable = We, _.pluginMethodNoop = Ue, _.registerPlugin = st, _.Exception = fS, _.DEBUG = !!_.DEBUG, _.isLoggingEnabled = !!_.isLoggingEnabled, _.platform = _.getPlatform(), _.isNative = _.isNativePlatform(), _;
}, LA = (c) => c.Capacitor = OA(c), Oy = /* @__PURE__ */ LA(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), LS = Oy.registerPlugin;
Oy.Plugins;
class zT {
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
    const E = this.listeners[u];
    if (!E) {
      if (y) {
        let T = this.retainedEventArguments[u];
        T || (T = []), T.push(d), this.retainedEventArguments[u] = T;
      }
      return;
    }
    E.forEach((T) => T(d));
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
    return new Oy.Exception(u, fd.Unimplemented);
  }
  unavailable(u = "not available") {
    return new Oy.Exception(u, fd.Unavailable);
  }
  async removeListener(u, d) {
    const y = this.listeners[u];
    if (!y)
      return;
    const E = y.indexOf(d);
    this.listeners[u].splice(E, 1), this.listeners[u].length || this.removeWindowListener(this.windowListeners[u]);
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
const W1 = (c) => encodeURIComponent(c).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), Y1 = (c) => c.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class MA extends zT {
  async getCookies() {
    const u = document.cookie, d = {};
    return u.split(";").forEach((y) => {
      if (y.length <= 0)
        return;
      let [E, T] = y.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
      E = Y1(E).trim(), T = Y1(T).trim(), d[E] = T;
    }), d;
  }
  async setCookie(u) {
    try {
      const d = W1(u.key), y = W1(u.value), E = `; expires=${(u.expires || "").replace("expires=", "")}`, T = (u.path || "/").replace("path=", ""), g = u.url != null && u.url.length > 0 ? `domain=${u.url}` : "";
      document.cookie = `${d}=${y || ""}${E}; path=${T}; ${g};`;
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
LS("CapacitorCookies", {
  web: () => new MA()
});
const AA = async (c) => new Promise((u, d) => {
  const y = new FileReader();
  y.onload = () => {
    const E = y.result;
    u(E.indexOf(",") >= 0 ? E.split(",")[1] : E);
  }, y.onerror = (E) => d(E), y.readAsDataURL(c);
}), $A = (c = {}) => {
  const u = Object.keys(c);
  return Object.keys(c).map((E) => E.toLocaleLowerCase()).reduce((E, T, g) => (E[T] = c[u[g]], E), {});
}, NA = (c, u = !0) => c ? Object.entries(c).reduce((y, E) => {
  const [T, g] = E;
  let _, x;
  return Array.isArray(g) ? (x = "", g.forEach((L) => {
    _ = u ? encodeURIComponent(L) : L, x += `${T}=${_}&`;
  }), x.slice(0, -1)) : (_ = u ? encodeURIComponent(g) : g, x = `${T}=${_}`), `${y}&${x}`;
}, "").substr(1) : null, zA = (c, u = {}) => {
  const d = Object.assign({ method: c.method || "GET", headers: c.headers }, u), E = $A(c.headers)["content-type"] || "";
  if (typeof c.data == "string")
    d.body = c.data;
  else if (E.includes("application/x-www-form-urlencoded")) {
    const T = new URLSearchParams();
    for (const [g, _] of Object.entries(c.data || {}))
      T.set(g, _);
    d.body = T.toString();
  } else if (E.includes("multipart/form-data") || c.data instanceof FormData) {
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
  } else (E.includes("application/json") || typeof c.data == "object") && (d.body = JSON.stringify(c.data));
  return d;
};
class UA extends zT {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  async request(u) {
    const d = zA(u, u.webFetchExtra), y = NA(u.params, u.shouldEncodeUrlParams), E = y ? `${u.url}?${y}` : u.url, T = await fetch(E, d), g = T.headers.get("content-type") || "";
    let { responseType: _ = "text" } = T.ok ? u : {};
    g.includes("application/json") && (_ = "json");
    let x, L;
    switch (_) {
      case "arraybuffer":
      case "blob":
        L = await T.blob(), x = await AA(L);
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
LS("CapacitorHttp", {
  web: () => new UA()
});
LS("Share", {
  web: () => import("./web-B4A8cYBR.js").then((c) => new c.ShareWeb())
});
export {
  zT as W,
  _L as a,
  jA as c,
  VA as g
};
//# sourceMappingURL=index-DJxXtR3S.js.map
