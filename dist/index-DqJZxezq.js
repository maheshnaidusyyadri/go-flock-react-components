function gO(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var sS = { exports: {} }, mv = {}, cS = { exports: {} }, At = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var c1;
function bO() {
  if (c1) return At;
  c1 = 1;
  var f = Symbol.for("react.element"), u = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), g = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), M = Symbol.iterator;
  function K(U) {
    return U === null || typeof U != "object" ? null : (U = M && U[M] || U["@@iterator"], typeof U == "function" ? U : null);
  }
  var W = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ue = Object.assign, Be = {};
  function we(U, X, qe) {
    this.props = U, this.context = X, this.refs = Be, this.updater = qe || W;
  }
  we.prototype.isReactComponent = {}, we.prototype.setState = function(U, X) {
    if (typeof U != "object" && typeof U != "function" && U != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, U, X, "setState");
  }, we.prototype.forceUpdate = function(U) {
    this.updater.enqueueForceUpdate(this, U, "forceUpdate");
  };
  function gt() {
  }
  gt.prototype = we.prototype;
  function ge(U, X, qe) {
    this.props = U, this.context = X, this.refs = Be, this.updater = qe || W;
  }
  var Fe = ge.prototype = new gt();
  Fe.constructor = ge, ue(Fe, we.prototype), Fe.isPureReactComponent = !0;
  var pt = Array.isArray, Oe = Object.prototype.hasOwnProperty, ut = { current: null }, We = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Gt(U, X, qe) {
    var Ne, vt = {}, ht = null, kt = null;
    if (X != null) for (Ne in X.ref !== void 0 && (kt = X.ref), X.key !== void 0 && (ht = "" + X.key), X) Oe.call(X, Ne) && !We.hasOwnProperty(Ne) && (vt[Ne] = X[Ne]);
    var bt = arguments.length - 2;
    if (bt === 1) vt.children = qe;
    else if (1 < bt) {
      for (var St = Array(bt), en = 0; en < bt; en++) St[en] = arguments[en + 2];
      vt.children = St;
    }
    if (U && U.defaultProps) for (Ne in bt = U.defaultProps, bt) vt[Ne] === void 0 && (vt[Ne] = bt[Ne]);
    return { $$typeof: f, type: U, key: ht, ref: kt, props: vt, _owner: ut.current };
  }
  function Me(U, X) {
    return { $$typeof: f, type: U.type, key: X, ref: U.ref, props: U.props, _owner: U._owner };
  }
  function Ht(U) {
    return typeof U == "object" && U !== null && U.$$typeof === f;
  }
  function Nt(U) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + U.replace(/[=:]/g, function(qe) {
      return X[qe];
    });
  }
  var sn = /\/+/g;
  function Pe(U, X) {
    return typeof U == "object" && U !== null && U.key != null ? Nt("" + U.key) : X.toString(36);
  }
  function rt(U, X, qe, Ne, vt) {
    var ht = typeof U;
    (ht === "undefined" || ht === "boolean") && (U = null);
    var kt = !1;
    if (U === null) kt = !0;
    else switch (ht) {
      case "string":
      case "number":
        kt = !0;
        break;
      case "object":
        switch (U.$$typeof) {
          case f:
          case u:
            kt = !0;
        }
    }
    if (kt) return kt = U, vt = vt(kt), U = Ne === "" ? "." + Pe(kt, 0) : Ne, pt(vt) ? (qe = "", U != null && (qe = U.replace(sn, "$&/") + "/"), rt(vt, X, qe, "", function(en) {
      return en;
    })) : vt != null && (Ht(vt) && (vt = Me(vt, qe + (!vt.key || kt && kt.key === vt.key ? "" : ("" + vt.key).replace(sn, "$&/") + "/") + U)), X.push(vt)), 1;
    if (kt = 0, Ne = Ne === "" ? "." : Ne + ":", pt(U)) for (var bt = 0; bt < U.length; bt++) {
      ht = U[bt];
      var St = Ne + Pe(ht, bt);
      kt += rt(ht, X, qe, St, vt);
    }
    else if (St = K(U), typeof St == "function") for (U = St.call(U), bt = 0; !(ht = U.next()).done; ) ht = ht.value, St = Ne + Pe(ht, bt++), kt += rt(ht, X, qe, St, vt);
    else if (ht === "object") throw X = String(U), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(U).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.");
    return kt;
  }
  function Tt(U, X, qe) {
    if (U == null) return U;
    var Ne = [], vt = 0;
    return rt(U, Ne, "", "", function(ht) {
      return X.call(qe, ht, vt++);
    }), Ne;
  }
  function it(U) {
    if (U._status === -1) {
      var X = U._result;
      X = X(), X.then(function(qe) {
        (U._status === 0 || U._status === -1) && (U._status = 1, U._result = qe);
      }, function(qe) {
        (U._status === 0 || U._status === -1) && (U._status = 2, U._result = qe);
      }), U._status === -1 && (U._status = 0, U._result = X);
    }
    if (U._status === 1) return U._result.default;
    throw U._result;
  }
  var Re = { current: null }, se = { transition: null }, Ae = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: se, ReactCurrentOwner: ut };
  function ve() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return At.Children = { map: Tt, forEach: function(U, X, qe) {
    Tt(U, function() {
      X.apply(this, arguments);
    }, qe);
  }, count: function(U) {
    var X = 0;
    return Tt(U, function() {
      X++;
    }), X;
  }, toArray: function(U) {
    return Tt(U, function(X) {
      return X;
    }) || [];
  }, only: function(U) {
    if (!Ht(U)) throw Error("React.Children.only expected to receive a single React element child.");
    return U;
  } }, At.Component = we, At.Fragment = p, At.Profiler = E, At.PureComponent = ge, At.StrictMode = y, At.Suspense = k, At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ae, At.act = ve, At.cloneElement = function(U, X, qe) {
    if (U == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + U + ".");
    var Ne = ue({}, U.props), vt = U.key, ht = U.ref, kt = U._owner;
    if (X != null) {
      if (X.ref !== void 0 && (ht = X.ref, kt = ut.current), X.key !== void 0 && (vt = "" + X.key), U.type && U.type.defaultProps) var bt = U.type.defaultProps;
      for (St in X) Oe.call(X, St) && !We.hasOwnProperty(St) && (Ne[St] = X[St] === void 0 && bt !== void 0 ? bt[St] : X[St]);
    }
    var St = arguments.length - 2;
    if (St === 1) Ne.children = qe;
    else if (1 < St) {
      bt = Array(St);
      for (var en = 0; en < St; en++) bt[en] = arguments[en + 2];
      Ne.children = bt;
    }
    return { $$typeof: f, type: U.type, key: vt, ref: ht, props: Ne, _owner: kt };
  }, At.createContext = function(U) {
    return U = { $$typeof: g, _currentValue: U, _currentValue2: U, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, U.Provider = { $$typeof: R, _context: U }, U.Consumer = U;
  }, At.createElement = Gt, At.createFactory = function(U) {
    var X = Gt.bind(null, U);
    return X.type = U, X;
  }, At.createRef = function() {
    return { current: null };
  }, At.forwardRef = function(U) {
    return { $$typeof: L, render: U };
  }, At.isValidElement = Ht, At.lazy = function(U) {
    return { $$typeof: H, _payload: { _status: -1, _result: U }, _init: it };
  }, At.memo = function(U, X) {
    return { $$typeof: A, type: U, compare: X === void 0 ? null : X };
  }, At.startTransition = function(U) {
    var X = se.transition;
    se.transition = {};
    try {
      U();
    } finally {
      se.transition = X;
    }
  }, At.unstable_act = ve, At.useCallback = function(U, X) {
    return Re.current.useCallback(U, X);
  }, At.useContext = function(U) {
    return Re.current.useContext(U);
  }, At.useDebugValue = function() {
  }, At.useDeferredValue = function(U) {
    return Re.current.useDeferredValue(U);
  }, At.useEffect = function(U, X) {
    return Re.current.useEffect(U, X);
  }, At.useId = function() {
    return Re.current.useId();
  }, At.useImperativeHandle = function(U, X, qe) {
    return Re.current.useImperativeHandle(U, X, qe);
  }, At.useInsertionEffect = function(U, X) {
    return Re.current.useInsertionEffect(U, X);
  }, At.useLayoutEffect = function(U, X) {
    return Re.current.useLayoutEffect(U, X);
  }, At.useMemo = function(U, X) {
    return Re.current.useMemo(U, X);
  }, At.useReducer = function(U, X, qe) {
    return Re.current.useReducer(U, X, qe);
  }, At.useRef = function(U) {
    return Re.current.useRef(U);
  }, At.useState = function(U) {
    return Re.current.useState(U);
  }, At.useSyncExternalStore = function(U, X, qe) {
    return Re.current.useSyncExternalStore(U, X, qe);
  }, At.useTransition = function() {
    return Re.current.useTransition();
  }, At.version = "18.3.1", At;
}
var bv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
bv.exports;
var f1;
function SO() {
  return f1 || (f1 = 1, function(f, u) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.3.1", y = Symbol.for("react.element"), E = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), A = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), Be = Symbol.for("react.offscreen"), we = Symbol.iterator, gt = "@@iterator";
      function ge(S) {
        if (S === null || typeof S != "object")
          return null;
        var _ = we && S[we] || S[gt];
        return typeof _ == "function" ? _ : null;
      }
      var Fe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, pt = {
        transition: null
      }, Oe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ut = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, We = {}, Gt = null;
      function Me(S) {
        Gt = S;
      }
      We.setExtraStackFrame = function(S) {
        Gt = S;
      }, We.getCurrentStack = null, We.getStackAddendum = function() {
        var S = "";
        Gt && (S += Gt);
        var _ = We.getCurrentStack;
        return _ && (S += _() || ""), S;
      };
      var Ht = !1, Nt = !1, sn = !1, Pe = !1, rt = !1, Tt = {
        ReactCurrentDispatcher: Fe,
        ReactCurrentBatchConfig: pt,
        ReactCurrentOwner: ut
      };
      Tt.ReactDebugCurrentFrame = We, Tt.ReactCurrentActQueue = Oe;
      function it(S) {
        {
          for (var _ = arguments.length, Y = new Array(_ > 1 ? _ - 1 : 0), q = 1; q < _; q++)
            Y[q - 1] = arguments[q];
          se("warn", S, Y);
        }
      }
      function Re(S) {
        {
          for (var _ = arguments.length, Y = new Array(_ > 1 ? _ - 1 : 0), q = 1; q < _; q++)
            Y[q - 1] = arguments[q];
          se("error", S, Y);
        }
      }
      function se(S, _, Y) {
        {
          var q = Tt.ReactDebugCurrentFrame, ce = q.getStackAddendum();
          ce !== "" && (_ += "%s", Y = Y.concat([ce]));
          var Ze = Y.map(function(ye) {
            return String(ye);
          });
          Ze.unshift("Warning: " + _), Function.prototype.apply.call(console[S], console, Ze);
        }
      }
      var Ae = {};
      function ve(S, _) {
        {
          var Y = S.constructor, q = Y && (Y.displayName || Y.name) || "ReactClass", ce = q + "." + _;
          if (Ae[ce])
            return;
          Re("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", _, q), Ae[ce] = !0;
        }
      }
      var U = {
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
        enqueueForceUpdate: function(S, _, Y) {
          ve(S, "forceUpdate");
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
        enqueueReplaceState: function(S, _, Y, q) {
          ve(S, "replaceState");
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
        enqueueSetState: function(S, _, Y, q) {
          ve(S, "setState");
        }
      }, X = Object.assign, qe = {};
      Object.freeze(qe);
      function Ne(S, _, Y) {
        this.props = S, this.context = _, this.refs = qe, this.updater = Y || U;
      }
      Ne.prototype.isReactComponent = {}, Ne.prototype.setState = function(S, _) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, _, "setState");
      }, Ne.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var vt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ht = function(S, _) {
          Object.defineProperty(Ne.prototype, S, {
            get: function() {
              it("%s(...) is deprecated in plain JavaScript React classes. %s", _[0], _[1]);
            }
          });
        };
        for (var kt in vt)
          vt.hasOwnProperty(kt) && ht(kt, vt[kt]);
      }
      function bt() {
      }
      bt.prototype = Ne.prototype;
      function St(S, _, Y) {
        this.props = S, this.context = _, this.refs = qe, this.updater = Y || U;
      }
      var en = St.prototype = new bt();
      en.constructor = St, X(en, Ne.prototype), en.isPureReactComponent = !0;
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
          var _ = typeof Symbol == "function" && Symbol.toStringTag, Y = _ && S[Symbol.toStringTag] || S.constructor.name || "Object";
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
          return Re("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zn(S)), On(S);
      }
      function _r(S, _, Y) {
        var q = S.displayName;
        if (q)
          return q;
        var ce = _.displayName || _.name || "";
        return ce !== "" ? Y + "(" + ce + ")" : Y;
      }
      function Dr(S) {
        return S.displayName || "Context";
      }
      function In(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && Re("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case R:
            return "Fragment";
          case E:
            return "Portal";
          case L:
            return "Profiler";
          case g:
            return "StrictMode";
          case M:
            return "Suspense";
          case K:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case A:
              var _ = S;
              return Dr(_) + ".Consumer";
            case k:
              var Y = S;
              return Dr(Y._context) + ".Provider";
            case H:
              return _r(S, S.render, "ForwardRef");
            case W:
              var q = S.displayName || null;
              return q !== null ? q : In(S.type) || "Memo";
            case ue: {
              var ce = S, Ze = ce._payload, ye = ce._init;
              try {
                return In(ye(Ze));
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
      }, ar, jr, Gn;
      Gn = {};
      function Lr(S) {
        if (ir.call(S, "ref")) {
          var _ = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function pn(S) {
        if (ir.call(S, "key")) {
          var _ = Object.getOwnPropertyDescriptor(S, "key").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function qn(S, _) {
        var Y = function() {
          ar || (ar = !0, Re("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        Y.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: Y,
          configurable: !0
        });
      }
      function Vr(S, _) {
        var Y = function() {
          jr || (jr = !0, Re("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        Y.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: Y,
          configurable: !0
        });
      }
      function vr(S) {
        if (typeof S.ref == "string" && ut.current && S.__self && ut.current.stateNode !== S.__self) {
          var _ = In(ut.current.type);
          Gn[_] || (Re('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _, S.ref), Gn[_] = !0);
        }
      }
      var pe = function(S, _, Y, q, ce, Ze, ye) {
        var Xe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: y,
          // Built-in properties that belong on the element
          type: S,
          key: _,
          ref: Y,
          props: ye,
          // Record the component responsible for creating this element.
          _owner: Ze
        };
        return Xe._store = {}, Object.defineProperty(Xe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Xe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.defineProperty(Xe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ce
        }), Object.freeze && (Object.freeze(Xe.props), Object.freeze(Xe)), Xe;
      };
      function $e(S, _, Y) {
        var q, ce = {}, Ze = null, ye = null, Xe = null, Rt = null;
        if (_ != null) {
          Lr(_) && (ye = _.ref, vr(_)), pn(_) && (wn(_.key), Ze = "" + _.key), Xe = _.__self === void 0 ? null : _.__self, Rt = _.__source === void 0 ? null : _.__source;
          for (q in _)
            ir.call(_, q) && !Or.hasOwnProperty(q) && (ce[q] = _[q]);
        }
        var Ut = arguments.length - 2;
        if (Ut === 1)
          ce.children = Y;
        else if (Ut > 1) {
          for (var on = Array(Ut), nn = 0; nn < Ut; nn++)
            on[nn] = arguments[nn + 2];
          Object.freeze && Object.freeze(on), ce.children = on;
        }
        if (S && S.defaultProps) {
          var ln = S.defaultProps;
          for (q in ln)
            ce[q] === void 0 && (ce[q] = ln[q]);
        }
        if (Ze || ye) {
          var cn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          Ze && qn(ce, cn), ye && Vr(ce, cn);
        }
        return pe(S, Ze, ye, Xe, Rt, ut.current, ce);
      }
      function ft(S, _) {
        var Y = pe(S.type, _, S.ref, S._self, S._source, S._owner, S.props);
        return Y;
      }
      function Ft(S, _, Y) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var q, ce = X({}, S.props), Ze = S.key, ye = S.ref, Xe = S._self, Rt = S._source, Ut = S._owner;
        if (_ != null) {
          Lr(_) && (ye = _.ref, Ut = ut.current), pn(_) && (wn(_.key), Ze = "" + _.key);
          var on;
          S.type && S.type.defaultProps && (on = S.type.defaultProps);
          for (q in _)
            ir.call(_, q) && !Or.hasOwnProperty(q) && (_[q] === void 0 && on !== void 0 ? ce[q] = on[q] : ce[q] = _[q]);
        }
        var nn = arguments.length - 2;
        if (nn === 1)
          ce.children = Y;
        else if (nn > 1) {
          for (var ln = Array(nn), cn = 0; cn < nn; cn++)
            ln[cn] = arguments[cn + 2];
          ce.children = ln;
        }
        return pe(S.type, Ze, ye, Xe, Rt, Ut, ce);
      }
      function jt(S) {
        return typeof S == "object" && S !== null && S.$$typeof === y;
      }
      var Tn = ".", vn = ":";
      function or(S) {
        var _ = /[=:]/g, Y = {
          "=": "=0",
          ":": "=2"
        }, q = S.replace(_, function(ce) {
          return Y[ce];
        });
        return "$" + q;
      }
      var qt = !1, hr = /\/+/g;
      function Vt(S) {
        return S.replace(hr, "$&/");
      }
      function Pt(S, _) {
        return typeof S == "object" && S !== null && S.key != null ? (wn(S.key), or("" + S.key)) : _.toString(36);
      }
      function Ri(S, _, Y, q, ce) {
        var Ze = typeof S;
        (Ze === "undefined" || Ze === "boolean") && (S = null);
        var ye = !1;
        if (S === null)
          ye = !0;
        else
          switch (Ze) {
            case "string":
            case "number":
              ye = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case y:
                case E:
                  ye = !0;
              }
          }
        if (ye) {
          var Xe = S, Rt = ce(Xe), Ut = q === "" ? Tn + Pt(Xe, 0) : q;
          if (dn(Rt)) {
            var on = "";
            Ut != null && (on = Vt(Ut) + "/"), Ri(Rt, _, on, "", function(hd) {
              return hd;
            });
          } else Rt != null && (jt(Rt) && (Rt.key && (!Xe || Xe.key !== Rt.key) && wn(Rt.key), Rt = ft(
            Rt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            Y + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Rt.key && (!Xe || Xe.key !== Rt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Vt("" + Rt.key) + "/"
            ) : "") + Ut
          )), _.push(Rt));
          return 1;
        }
        var nn, ln, cn = 0, Mt = q === "" ? Tn : q + vn;
        if (dn(S))
          for (var Wa = 0; Wa < S.length; Wa++)
            nn = S[Wa], ln = Mt + Pt(nn, Wa), cn += Ri(nn, _, Y, ln, ce);
        else {
          var ru = ge(S);
          if (typeof ru == "function") {
            var cs = S;
            ru === cs.entries && (qt || it("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qt = !0);
            for (var vd = ru.call(cs), pa, fs = 0; !(pa = vd.next()).done; )
              nn = pa.value, ln = Mt + Pt(nn, fs++), cn += Ri(nn, _, Y, ln, ce);
          } else if (Ze === "object") {
            var ds = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (ds === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : ds) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return cn;
      }
      function ri(S, _, Y) {
        if (S == null)
          return S;
        var q = [], ce = 0;
        return Ri(S, q, "", "", function(Ze) {
          return _.call(Y, Ze, ce++);
        }), q;
      }
      function Ca(S) {
        var _ = 0;
        return ri(S, function() {
          _++;
        }), _;
      }
      function Va(S, _, Y) {
        ri(S, function() {
          _.apply(this, arguments);
        }, Y);
      }
      function bo(S) {
        return ri(S, function(_) {
          return _;
        }) || [];
      }
      function ii(S) {
        if (!jt(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function wa(S) {
        var _ = {
          $$typeof: A,
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
        _.Provider = {
          $$typeof: k,
          _context: _
        };
        var Y = !1, q = !1, ce = !1;
        {
          var Ze = {
            $$typeof: A,
            _context: _
          };
          Object.defineProperties(Ze, {
            Provider: {
              get: function() {
                return q || (q = !0, Re("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), _.Provider;
              },
              set: function(ye) {
                _.Provider = ye;
              }
            },
            _currentValue: {
              get: function() {
                return _._currentValue;
              },
              set: function(ye) {
                _._currentValue = ye;
              }
            },
            _currentValue2: {
              get: function() {
                return _._currentValue2;
              },
              set: function(ye) {
                _._currentValue2 = ye;
              }
            },
            _threadCount: {
              get: function() {
                return _._threadCount;
              },
              set: function(ye) {
                _._threadCount = ye;
              }
            },
            Consumer: {
              get: function() {
                return Y || (Y = !0, Re("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), _.Consumer;
              }
            },
            displayName: {
              get: function() {
                return _.displayName;
              },
              set: function(ye) {
                ce || (it("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ye), ce = !0);
              }
            }
          }), _.Consumer = Ze;
        }
        return _._currentRenderer = null, _._currentRenderer2 = null, _;
      }
      var Mr = -1, Ar = 0, Nr = 1, bn = 2;
      function mr(S) {
        if (S._status === Mr) {
          var _ = S._result, Y = _();
          if (Y.then(function(Ze) {
            if (S._status === Ar || S._status === Mr) {
              var ye = S;
              ye._status = Nr, ye._result = Ze;
            }
          }, function(Ze) {
            if (S._status === Ar || S._status === Mr) {
              var ye = S;
              ye._status = bn, ye._result = Ze;
            }
          }), S._status === Mr) {
            var q = S;
            q._status = Ar, q._result = Y;
          }
        }
        if (S._status === Nr) {
          var ce = S._result;
          return ce === void 0 && Re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ce), "default" in ce || Re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ce), ce.default;
        } else
          throw S._result;
      }
      function Pr(S) {
        var _ = {
          // We use these fields to store the result.
          _status: Mr,
          _result: S
        }, Y = {
          $$typeof: ue,
          _payload: _,
          _init: mr
        };
        {
          var q, ce;
          Object.defineProperties(Y, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Ze) {
                Re("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Ze, Object.defineProperty(Y, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ce;
              },
              set: function(Ze) {
                Re("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ce = Ze, Object.defineProperty(Y, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Y;
      }
      function Fi(S) {
        S != null && S.$$typeof === W ? Re("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? Re("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && Re("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && Re("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var _ = {
          $$typeof: H,
          render: S
        };
        {
          var Y;
          Object.defineProperty(_, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(q) {
              Y = q, !S.name && !S.displayName && (S.displayName = q);
            }
          });
        }
        return _;
      }
      var xi;
      xi = Symbol.for("react.module.reference");
      function D(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === R || S === L || rt || S === g || S === M || S === K || Pe || S === Be || Ht || Nt || sn || typeof S == "object" && S !== null && (S.$$typeof === ue || S.$$typeof === W || S.$$typeof === k || S.$$typeof === A || S.$$typeof === H || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === xi || S.getModuleId !== void 0));
      }
      function ne(S, _) {
        D(S) || Re("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var Y = {
          $$typeof: W,
          type: S,
          compare: _ === void 0 ? null : _
        };
        {
          var q;
          Object.defineProperty(Y, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(ce) {
              q = ce, !S.name && !S.displayName && (S.displayName = ce);
            }
          });
        }
        return Y;
      }
      function oe() {
        var S = Fe.current;
        return S === null && Re(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function ze(S) {
        var _ = oe();
        if (S._context !== void 0) {
          var Y = S._context;
          Y.Consumer === S ? Re("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Y.Provider === S && Re("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return _.useContext(S);
      }
      function Ct(S) {
        var _ = oe();
        return _.useState(S);
      }
      function _t(S, _, Y) {
        var q = oe();
        return q.useReducer(S, _, Y);
      }
      function Ye(S) {
        var _ = oe();
        return _.useRef(S);
      }
      function Et(S, _) {
        var Y = oe();
        return Y.useEffect(S, _);
      }
      function Hn(S, _) {
        var Y = oe();
        return Y.useInsertionEffect(S, _);
      }
      function P(S, _) {
        var Y = oe();
        return Y.useLayoutEffect(S, _);
      }
      function fe(S, _) {
        var Y = oe();
        return Y.useCallback(S, _);
      }
      function Qe(S, _) {
        var Y = oe();
        return Y.useMemo(S, _);
      }
      function It(S, _, Y) {
        var q = oe();
        return q.useImperativeHandle(S, _, Y);
      }
      function at(S, _) {
        {
          var Y = oe();
          return Y.useDebugValue(S, _);
        }
      }
      function tn() {
        var S = oe();
        return S.useTransition();
      }
      function Rn(S) {
        var _ = oe();
        return _.useDeferredValue(S);
      }
      function wt() {
        var S = oe();
        return S.useId();
      }
      function ji(S, _, Y) {
        var q = oe();
        return q.useSyncExternalStore(S, _, Y);
      }
      var So = 0, Ql, Eo, ai, os, Ir, ls, us;
      function hc() {
      }
      hc.__reactDisabledLog = !0;
      function Gl() {
        {
          if (So === 0) {
            Ql = console.log, Eo = console.info, ai = console.warn, os = console.error, Ir = console.group, ls = console.groupCollapsed, us = console.groupEnd;
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
              log: X({}, S, {
                value: Ql
              }),
              info: X({}, S, {
                value: Eo
              }),
              warn: X({}, S, {
                value: ai
              }),
              error: X({}, S, {
                value: os
              }),
              group: X({}, S, {
                value: Ir
              }),
              groupCollapsed: X({}, S, {
                value: ls
              }),
              groupEnd: X({}, S, {
                value: us
              })
            });
          }
          So < 0 && Re("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var fa = Tt.ReactCurrentDispatcher, Br;
      function wo(S, _, Y) {
        {
          if (Br === void 0)
            try {
              throw Error();
            } catch (ce) {
              var q = ce.stack.trim().match(/\n( *(at )?)/);
              Br = q && q[1] || "";
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
      function Kl(S, _) {
        if (!S || To)
          return "";
        {
          var Y = Ro.get(S);
          if (Y !== void 0)
            return Y;
        }
        var q;
        To = !0;
        var ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ze;
        Ze = fa.current, fa.current = null, Gl();
        try {
          if (_) {
            var ye = function() {
              throw Error();
            };
            if (Object.defineProperty(ye.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ye, []);
              } catch (Mt) {
                q = Mt;
              }
              Reflect.construct(S, [], ye);
            } else {
              try {
                ye.call();
              } catch (Mt) {
                q = Mt;
              }
              S.call(ye.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Mt) {
              q = Mt;
            }
            S();
          }
        } catch (Mt) {
          if (Mt && q && typeof Mt.stack == "string") {
            for (var Xe = Mt.stack.split(`
`), Rt = q.stack.split(`
`), Ut = Xe.length - 1, on = Rt.length - 1; Ut >= 1 && on >= 0 && Xe[Ut] !== Rt[on]; )
              on--;
            for (; Ut >= 1 && on >= 0; Ut--, on--)
              if (Xe[Ut] !== Rt[on]) {
                if (Ut !== 1 || on !== 1)
                  do
                    if (Ut--, on--, on < 0 || Xe[Ut] !== Rt[on]) {
                      var nn = `
` + Xe[Ut].replace(" at new ", " at ");
                      return S.displayName && nn.includes("<anonymous>") && (nn = nn.replace("<anonymous>", S.displayName)), typeof S == "function" && Ro.set(S, nn), nn;
                    }
                  while (Ut >= 1 && on >= 0);
                break;
              }
          }
        } finally {
          To = !1, fa.current = Ze, Co(), Error.prepareStackTrace = ce;
        }
        var ln = S ? S.displayName || S.name : "", cn = ln ? wo(ln) : "";
        return typeof S == "function" && Ro.set(S, cn), cn;
      }
      function Pa(S, _, Y) {
        return Kl(S, !1);
      }
      function pd(S) {
        var _ = S.prototype;
        return !!(_ && _.isReactComponent);
      }
      function Ta(S, _, Y) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return Kl(S, pd(S));
        if (typeof S == "string")
          return wo(S);
        switch (S) {
          case M:
            return wo("Suspense");
          case K:
            return wo("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case H:
              return Pa(S.render);
            case W:
              return Ta(S.type, _, Y);
            case ue: {
              var q = S, ce = q._payload, Ze = q._init;
              try {
                return Ta(Ze(ce), _, Y);
              } catch {
              }
            }
          }
        return "";
      }
      var Bt = {}, Xl = Tt.ReactDebugCurrentFrame;
      function nl(S) {
        if (S) {
          var _ = S._owner, Y = Ta(S.type, S._source, _ ? _.type : null);
          Xl.setExtraStackFrame(Y);
        } else
          Xl.setExtraStackFrame(null);
      }
      function Zl(S, _, Y, q, ce) {
        {
          var Ze = Function.call.bind(ir);
          for (var ye in S)
            if (Ze(S, ye)) {
              var Xe = void 0;
              try {
                if (typeof S[ye] != "function") {
                  var Rt = Error((q || "React class") + ": " + Y + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Rt.name = "Invariant Violation", Rt;
                }
                Xe = S[ye](_, ye, q, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ut) {
                Xe = Ut;
              }
              Xe && !(Xe instanceof Error) && (nl(ce), Re("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", Y, ye, typeof Xe), nl(null)), Xe instanceof Error && !(Xe.message in Bt) && (Bt[Xe.message] = !0, nl(ce), Re("Failed %s type: %s", Y, Xe.message), nl(null));
            }
        }
      }
      function Lt(S) {
        if (S) {
          var _ = S._owner, Y = Ta(S.type, S._source, _ ? _.type : null);
          Me(Y);
        } else
          Me(null);
      }
      var Jl;
      Jl = !1;
      function eu() {
        if (ut.current) {
          var S = In(ut.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function st(S) {
        if (S !== void 0) {
          var _ = S.fileName.replace(/^.*[\\\/]/, ""), Y = S.lineNumber;
          return `

Check your code at ` + _ + ":" + Y + ".";
        }
        return "";
      }
      function rl(S) {
        return S != null ? st(S.__source) : "";
      }
      var xn = {};
      function oi(S) {
        var _ = eu();
        if (!_) {
          var Y = typeof S == "string" ? S : S.displayName || S.name;
          Y && (_ = `

Check the top-level render call using <` + Y + ">.");
        }
        return _;
      }
      function Wr(S, _) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var Y = oi(_);
          if (!xn[Y]) {
            xn[Y] = !0;
            var q = "";
            S && S._owner && S._owner !== ut.current && (q = " It was passed a child from " + In(S._owner.type) + "."), Lt(S), Re('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, q), Lt(null);
          }
        }
      }
      function xo(S, _) {
        if (typeof S == "object") {
          if (dn(S))
            for (var Y = 0; Y < S.length; Y++) {
              var q = S[Y];
              jt(q) && Wr(q, _);
            }
          else if (jt(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var ce = ge(S);
            if (typeof ce == "function" && ce !== S.entries)
              for (var Ze = ce.call(S), ye; !(ye = Ze.next()).done; )
                jt(ye.value) && Wr(ye.value, _);
          }
        }
      }
      function Ln(S) {
        {
          var _ = S.type;
          if (_ == null || typeof _ == "string")
            return;
          var Y;
          if (typeof _ == "function")
            Y = _.propTypes;
          else if (typeof _ == "object" && (_.$$typeof === H || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          _.$$typeof === W))
            Y = _.propTypes;
          else
            return;
          if (Y) {
            var q = In(_);
            Zl(Y, S.props, "prop", q, S);
          } else if (_.PropTypes !== void 0 && !Jl) {
            Jl = !0;
            var ce = In(_);
            Re("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
          }
          typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && Re("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Xt(S) {
        {
          for (var _ = Object.keys(S.props), Y = 0; Y < _.length; Y++) {
            var q = _[Y];
            if (q !== "children" && q !== "key") {
              Lt(S), Re("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Lt(null);
              break;
            }
          }
          S.ref !== null && (Lt(S), Re("Invalid attribute `ref` supplied to `React.Fragment`."), Lt(null));
        }
      }
      function mc(S, _, Y) {
        var q = D(S);
        if (!q) {
          var ce = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ze = rl(_);
          Ze ? ce += Ze : ce += eu();
          var ye;
          S === null ? ye = "null" : dn(S) ? ye = "array" : S !== void 0 && S.$$typeof === y ? (ye = "<" + (In(S.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : ye = typeof S, Re("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ye, ce);
        }
        var Xe = $e.apply(this, arguments);
        if (Xe == null)
          return Xe;
        if (q)
          for (var Rt = 2; Rt < arguments.length; Rt++)
            xo(arguments[Rt], S);
        return S === R ? Xt(Xe) : Ln(Xe), Xe;
      }
      var li = !1;
      function lr(S) {
        var _ = mc.bind(null, S);
        return _.type = S, li || (li = !0, it("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(_, "type", {
          enumerable: !1,
          get: function() {
            return it("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), _;
      }
      function Ra(S, _, Y) {
        for (var q = Ft.apply(this, arguments), ce = 2; ce < arguments.length; ce++)
          xo(arguments[ce], q.type);
        return Ln(q), q;
      }
      function yc(S, _) {
        var Y = pt.transition;
        pt.transition = {};
        var q = pt.transition;
        pt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (pt.transition = Y, Y === null && q._updatedFibers) {
            var ce = q._updatedFibers.size;
            ce > 10 && it("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var Ia = !1, ko = null;
      function gc(S) {
        if (ko === null)
          try {
            var _ = ("require" + Math.random()).slice(0, 7), Y = f && f[_];
            ko = Y.call(f, "timers").setImmediate;
          } catch {
            ko = function(ce) {
              Ia === !1 && (Ia = !0, typeof MessageChannel > "u" && Re("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ze = new MessageChannel();
              Ze.port1.onmessage = ce, Ze.port2.postMessage(void 0);
            };
          }
        return ko(S);
      }
      var Vi = 0, _o = !1;
      function Ba(S) {
        {
          var _ = Vi;
          Vi++, Oe.current === null && (Oe.current = []);
          var Y = Oe.isBatchingLegacy, q;
          try {
            if (Oe.isBatchingLegacy = !0, q = S(), !Y && Oe.didScheduleLegacyUpdate) {
              var ce = Oe.current;
              ce !== null && (Oe.didScheduleLegacyUpdate = !1, Oo(ce));
            }
          } catch (ln) {
            throw Pi(_), ln;
          } finally {
            Oe.isBatchingLegacy = Y;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var Ze = q, ye = !1, Xe = {
              then: function(ln, cn) {
                ye = !0, Ze.then(function(Mt) {
                  Pi(_), Vi === 0 ? tu(Mt, ln, cn) : ln(Mt);
                }, function(Mt) {
                  Pi(_), cn(Mt);
                });
              }
            };
            return !_o && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ye || (_o = !0, Re("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Xe;
          } else {
            var Rt = q;
            if (Pi(_), Vi === 0) {
              var Ut = Oe.current;
              Ut !== null && (Oo(Ut), Oe.current = null);
              var on = {
                then: function(ln, cn) {
                  Oe.current === null ? (Oe.current = [], tu(Rt, ln, cn)) : ln(Rt);
                }
              };
              return on;
            } else {
              var nn = {
                then: function(ln, cn) {
                  ln(Rt);
                }
              };
              return nn;
            }
          }
        }
      }
      function Pi(S) {
        S !== Vi - 1 && Re("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Vi = S;
      }
      function tu(S, _, Y) {
        {
          var q = Oe.current;
          if (q !== null)
            try {
              Oo(q), gc(function() {
                q.length === 0 ? (Oe.current = null, _(S)) : tu(S, _, Y);
              });
            } catch (ce) {
              Y(ce);
            }
          else
            _(S);
        }
      }
      var Do = !1;
      function Oo(S) {
        if (!Do) {
          Do = !0;
          var _ = 0;
          try {
            for (; _ < S.length; _++) {
              var Y = S[_];
              do
                Y = Y(!0);
              while (Y !== null);
            }
            S.length = 0;
          } catch (q) {
            throw S = S.slice(_ + 1), q;
          } finally {
            Do = !1;
          }
        }
      }
      var il = mc, nu = Ra, ss = lr, da = {
        map: ri,
        forEach: Va,
        count: Ca,
        toArray: bo,
        only: ii
      };
      u.Children = da, u.Component = Ne, u.Fragment = R, u.Profiler = L, u.PureComponent = St, u.StrictMode = g, u.Suspense = M, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tt, u.act = Ba, u.cloneElement = nu, u.createContext = wa, u.createElement = il, u.createFactory = ss, u.createRef = nr, u.forwardRef = Fi, u.isValidElement = jt, u.lazy = Pr, u.memo = ne, u.startTransition = yc, u.unstable_act = Ba, u.useCallback = fe, u.useContext = ze, u.useDebugValue = at, u.useDeferredValue = Rn, u.useEffect = Et, u.useId = wt, u.useImperativeHandle = It, u.useInsertionEffect = Hn, u.useLayoutEffect = P, u.useMemo = Qe, u.useReducer = _t, u.useRef = Ye, u.useState = Ct, u.useSyncExternalStore = ji, u.useTransition = tn, u.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(bv, bv.exports)), bv.exports;
}
process.env.NODE_ENV === "production" ? cS.exports = bO() : cS.exports = SO();
var Wl = cS.exports;
const et = /* @__PURE__ */ gO(Wl);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d1;
function EO() {
  if (d1) return mv;
  d1 = 1;
  var f = Wl, u = Symbol.for("react.element"), p = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, E = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(L, k, A) {
    var H, M = {}, K = null, W = null;
    A !== void 0 && (K = "" + A), k.key !== void 0 && (K = "" + k.key), k.ref !== void 0 && (W = k.ref);
    for (H in k) y.call(k, H) && !R.hasOwnProperty(H) && (M[H] = k[H]);
    if (L && L.defaultProps) for (H in k = L.defaultProps, k) M[H] === void 0 && (M[H] = k[H]);
    return { $$typeof: u, type: L, key: K, ref: W, props: M, _owner: E.current };
  }
  return mv.Fragment = p, mv.jsx = g, mv.jsxs = g, mv;
}
var yv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p1;
function CO() {
  return p1 || (p1 = 1, process.env.NODE_ENV !== "production" && function() {
    var f = Wl, u = Symbol.for("react.element"), p = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), L = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ue = Symbol.iterator, Be = "@@iterator";
    function we(D) {
      if (D === null || typeof D != "object")
        return null;
      var ne = ue && D[ue] || D[Be];
      return typeof ne == "function" ? ne : null;
    }
    var gt = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ge(D) {
      {
        for (var ne = arguments.length, oe = new Array(ne > 1 ? ne - 1 : 0), ze = 1; ze < ne; ze++)
          oe[ze - 1] = arguments[ze];
        Fe("error", D, oe);
      }
    }
    function Fe(D, ne, oe) {
      {
        var ze = gt.ReactDebugCurrentFrame, Ct = ze.getStackAddendum();
        Ct !== "" && (ne += "%s", oe = oe.concat([Ct]));
        var _t = oe.map(function(Ye) {
          return String(Ye);
        });
        _t.unshift("Warning: " + ne), Function.prototype.apply.call(console[D], console, _t);
      }
    }
    var pt = !1, Oe = !1, ut = !1, We = !1, Gt = !1, Me;
    Me = Symbol.for("react.module.reference");
    function Ht(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === y || D === R || Gt || D === E || D === A || D === H || We || D === W || pt || Oe || ut || typeof D == "object" && D !== null && (D.$$typeof === K || D.$$typeof === M || D.$$typeof === g || D.$$typeof === L || D.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === Me || D.getModuleId !== void 0));
    }
    function Nt(D, ne, oe) {
      var ze = D.displayName;
      if (ze)
        return ze;
      var Ct = ne.displayName || ne.name || "";
      return Ct !== "" ? oe + "(" + Ct + ")" : oe;
    }
    function sn(D) {
      return D.displayName || "Context";
    }
    function Pe(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case y:
          return "Fragment";
        case p:
          return "Portal";
        case R:
          return "Profiler";
        case E:
          return "StrictMode";
        case A:
          return "Suspense";
        case H:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case L:
            var ne = D;
            return sn(ne) + ".Consumer";
          case g:
            var oe = D;
            return sn(oe._context) + ".Provider";
          case k:
            return Nt(D, D.render, "ForwardRef");
          case M:
            var ze = D.displayName || null;
            return ze !== null ? ze : Pe(D.type) || "Memo";
          case K: {
            var Ct = D, _t = Ct._payload, Ye = Ct._init;
            try {
              return Pe(Ye(_t));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var rt = Object.assign, Tt = 0, it, Re, se, Ae, ve, U, X;
    function qe() {
    }
    qe.__reactDisabledLog = !0;
    function Ne() {
      {
        if (Tt === 0) {
          it = console.log, Re = console.info, se = console.warn, Ae = console.error, ve = console.group, U = console.groupCollapsed, X = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        Tt++;
      }
    }
    function vt() {
      {
        if (Tt--, Tt === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rt({}, D, {
              value: it
            }),
            info: rt({}, D, {
              value: Re
            }),
            warn: rt({}, D, {
              value: se
            }),
            error: rt({}, D, {
              value: Ae
            }),
            group: rt({}, D, {
              value: ve
            }),
            groupCollapsed: rt({}, D, {
              value: U
            }),
            groupEnd: rt({}, D, {
              value: X
            })
          });
        }
        Tt < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ht = gt.ReactCurrentDispatcher, kt;
    function bt(D, ne, oe) {
      {
        if (kt === void 0)
          try {
            throw Error();
          } catch (Ct) {
            var ze = Ct.stack.trim().match(/\n( *(at )?)/);
            kt = ze && ze[1] || "";
          }
        return `
` + kt + D;
      }
    }
    var St = !1, en;
    {
      var nr = typeof WeakMap == "function" ? WeakMap : Map;
      en = new nr();
    }
    function rr(D, ne) {
      if (!D || St)
        return "";
      {
        var oe = en.get(D);
        if (oe !== void 0)
          return oe;
      }
      var ze;
      St = !0;
      var Ct = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _t;
      _t = ht.current, ht.current = null, Ne();
      try {
        if (ne) {
          var Ye = function() {
            throw Error();
          };
          if (Object.defineProperty(Ye.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ye, []);
            } catch (tn) {
              ze = tn;
            }
            Reflect.construct(D, [], Ye);
          } else {
            try {
              Ye.call();
            } catch (tn) {
              ze = tn;
            }
            D.call(Ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (tn) {
            ze = tn;
          }
          D();
        }
      } catch (tn) {
        if (tn && ze && typeof tn.stack == "string") {
          for (var Et = tn.stack.split(`
`), Hn = ze.stack.split(`
`), P = Et.length - 1, fe = Hn.length - 1; P >= 1 && fe >= 0 && Et[P] !== Hn[fe]; )
            fe--;
          for (; P >= 1 && fe >= 0; P--, fe--)
            if (Et[P] !== Hn[fe]) {
              if (P !== 1 || fe !== 1)
                do
                  if (P--, fe--, fe < 0 || Et[P] !== Hn[fe]) {
                    var Qe = `
` + Et[P].replace(" at new ", " at ");
                    return D.displayName && Qe.includes("<anonymous>") && (Qe = Qe.replace("<anonymous>", D.displayName)), typeof D == "function" && en.set(D, Qe), Qe;
                  }
                while (P >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        St = !1, ht.current = _t, vt(), Error.prepareStackTrace = Ct;
      }
      var It = D ? D.displayName || D.name : "", at = It ? bt(It) : "";
      return typeof D == "function" && en.set(D, at), at;
    }
    function dn(D, ne, oe) {
      return rr(D, !1);
    }
    function zn(D) {
      var ne = D.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function Un(D, ne, oe) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return rr(D, zn(D));
      if (typeof D == "string")
        return bt(D);
      switch (D) {
        case A:
          return bt("Suspense");
        case H:
          return bt("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case k:
            return dn(D.render);
          case M:
            return Un(D.type, ne, oe);
          case K: {
            var ze = D, Ct = ze._payload, _t = ze._init;
            try {
              return Un(_t(Ct), ne, oe);
            } catch {
            }
          }
        }
      return "";
    }
    var On = Object.prototype.hasOwnProperty, wn = {}, _r = gt.ReactDebugCurrentFrame;
    function Dr(D) {
      if (D) {
        var ne = D._owner, oe = Un(D.type, D._source, ne ? ne.type : null);
        _r.setExtraStackFrame(oe);
      } else
        _r.setExtraStackFrame(null);
    }
    function In(D, ne, oe, ze, Ct) {
      {
        var _t = Function.call.bind(On);
        for (var Ye in D)
          if (_t(D, Ye)) {
            var Et = void 0;
            try {
              if (typeof D[Ye] != "function") {
                var Hn = Error((ze || "React class") + ": " + oe + " type `" + Ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Hn.name = "Invariant Violation", Hn;
              }
              Et = D[Ye](ne, Ye, ze, oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (P) {
              Et = P;
            }
            Et && !(Et instanceof Error) && (Dr(Ct), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ze || "React class", oe, Ye, typeof Et), Dr(null)), Et instanceof Error && !(Et.message in wn) && (wn[Et.message] = !0, Dr(Ct), ge("Failed %s type: %s", oe, Et.message), Dr(null));
          }
      }
    }
    var ir = Array.isArray;
    function Or(D) {
      return ir(D);
    }
    function ar(D) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, oe = ne && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return oe;
      }
    }
    function jr(D) {
      try {
        return Gn(D), !1;
      } catch {
        return !0;
      }
    }
    function Gn(D) {
      return "" + D;
    }
    function Lr(D) {
      if (jr(D))
        return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(D)), Gn(D);
    }
    var pn = gt.ReactCurrentOwner, qn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Vr, vr, pe;
    pe = {};
    function $e(D) {
      if (On.call(D, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function ft(D) {
      if (On.call(D, "key")) {
        var ne = Object.getOwnPropertyDescriptor(D, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function Ft(D, ne) {
      if (typeof D.ref == "string" && pn.current && ne && pn.current.stateNode !== ne) {
        var oe = Pe(pn.current.type);
        pe[oe] || (ge('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Pe(pn.current.type), D.ref), pe[oe] = !0);
      }
    }
    function jt(D, ne) {
      {
        var oe = function() {
          Vr || (Vr = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        oe.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: oe,
          configurable: !0
        });
      }
    }
    function Tn(D, ne) {
      {
        var oe = function() {
          vr || (vr = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        oe.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: oe,
          configurable: !0
        });
      }
    }
    var vn = function(D, ne, oe, ze, Ct, _t, Ye) {
      var Et = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: D,
        key: ne,
        ref: oe,
        props: Ye,
        // Record the component responsible for creating this element.
        _owner: _t
      };
      return Et._store = {}, Object.defineProperty(Et._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Et, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ze
      }), Object.defineProperty(Et, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ct
      }), Object.freeze && (Object.freeze(Et.props), Object.freeze(Et)), Et;
    };
    function or(D, ne, oe, ze, Ct) {
      {
        var _t, Ye = {}, Et = null, Hn = null;
        oe !== void 0 && (Lr(oe), Et = "" + oe), ft(ne) && (Lr(ne.key), Et = "" + ne.key), $e(ne) && (Hn = ne.ref, Ft(ne, Ct));
        for (_t in ne)
          On.call(ne, _t) && !qn.hasOwnProperty(_t) && (Ye[_t] = ne[_t]);
        if (D && D.defaultProps) {
          var P = D.defaultProps;
          for (_t in P)
            Ye[_t] === void 0 && (Ye[_t] = P[_t]);
        }
        if (Et || Hn) {
          var fe = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Et && jt(Ye, fe), Hn && Tn(Ye, fe);
        }
        return vn(D, Et, Hn, Ct, ze, pn.current, Ye);
      }
    }
    var qt = gt.ReactCurrentOwner, hr = gt.ReactDebugCurrentFrame;
    function Vt(D) {
      if (D) {
        var ne = D._owner, oe = Un(D.type, D._source, ne ? ne.type : null);
        hr.setExtraStackFrame(oe);
      } else
        hr.setExtraStackFrame(null);
    }
    var Pt;
    Pt = !1;
    function Ri(D) {
      return typeof D == "object" && D !== null && D.$$typeof === u;
    }
    function ri() {
      {
        if (qt.current) {
          var D = Pe(qt.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function Ca(D) {
      return "";
    }
    var Va = {};
    function bo(D) {
      {
        var ne = ri();
        if (!ne) {
          var oe = typeof D == "string" ? D : D.displayName || D.name;
          oe && (ne = `

Check the top-level render call using <` + oe + ">.");
        }
        return ne;
      }
    }
    function ii(D, ne) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var oe = bo(ne);
        if (Va[oe])
          return;
        Va[oe] = !0;
        var ze = "";
        D && D._owner && D._owner !== qt.current && (ze = " It was passed a child from " + Pe(D._owner.type) + "."), Vt(D), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, ze), Vt(null);
      }
    }
    function wa(D, ne) {
      {
        if (typeof D != "object")
          return;
        if (Or(D))
          for (var oe = 0; oe < D.length; oe++) {
            var ze = D[oe];
            Ri(ze) && ii(ze, ne);
          }
        else if (Ri(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var Ct = we(D);
          if (typeof Ct == "function" && Ct !== D.entries)
            for (var _t = Ct.call(D), Ye; !(Ye = _t.next()).done; )
              Ri(Ye.value) && ii(Ye.value, ne);
        }
      }
    }
    function Mr(D) {
      {
        var ne = D.type;
        if (ne == null || typeof ne == "string")
          return;
        var oe;
        if (typeof ne == "function")
          oe = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === M))
          oe = ne.propTypes;
        else
          return;
        if (oe) {
          var ze = Pe(ne);
          In(oe, D.props, "prop", ze, D);
        } else if (ne.PropTypes !== void 0 && !Pt) {
          Pt = !0;
          var Ct = Pe(ne);
          ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ct || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ar(D) {
      {
        for (var ne = Object.keys(D.props), oe = 0; oe < ne.length; oe++) {
          var ze = ne[oe];
          if (ze !== "children" && ze !== "key") {
            Vt(D), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ze), Vt(null);
            break;
          }
        }
        D.ref !== null && (Vt(D), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Vt(null));
      }
    }
    var Nr = {};
    function bn(D, ne, oe, ze, Ct, _t) {
      {
        var Ye = Ht(D);
        if (!Ye) {
          var Et = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Et += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Hn = Ca();
          Hn ? Et += Hn : Et += ri();
          var P;
          D === null ? P = "null" : Or(D) ? P = "array" : D !== void 0 && D.$$typeof === u ? (P = "<" + (Pe(D.type) || "Unknown") + " />", Et = " Did you accidentally export a JSX literal instead of a component?") : P = typeof D, ge("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, Et);
        }
        var fe = or(D, ne, oe, Ct, _t);
        if (fe == null)
          return fe;
        if (Ye) {
          var Qe = ne.children;
          if (Qe !== void 0)
            if (ze)
              if (Or(Qe)) {
                for (var It = 0; It < Qe.length; It++)
                  wa(Qe[It], D);
                Object.freeze && Object.freeze(Qe);
              } else
                ge("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wa(Qe, D);
        }
        if (On.call(ne, "key")) {
          var at = Pe(D), tn = Object.keys(ne).filter(function(ji) {
            return ji !== "key";
          }), Rn = tn.length > 0 ? "{key: someKey, " + tn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Nr[at + Rn]) {
            var wt = tn.length > 0 ? "{" + tn.join(": ..., ") + ": ...}" : "{}";
            ge(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Rn, at, wt, at), Nr[at + Rn] = !0;
          }
        }
        return D === y ? Ar(fe) : Mr(fe), fe;
      }
    }
    function mr(D, ne, oe) {
      return bn(D, ne, oe, !0);
    }
    function Pr(D, ne, oe) {
      return bn(D, ne, oe, !1);
    }
    var Fi = Pr, xi = mr;
    yv.Fragment = y, yv.jsx = Fi, yv.jsxs = xi;
  }()), yv;
}
process.env.NODE_ENV === "production" ? sS.exports = EO() : sS.exports = CO();
var wO = sS.exports;
const TA = ({ label: f, onClick: u, primary: p = !1 }) => {
  const y = p ? "btn-primary" : "btn-secondary";
  return /* @__PURE__ */ wO.jsx(
    "button",
    {
      className: `btn ${y}`,
      onClick: u,
      children: f
    }
  );
};
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
}, TO = Object.defineProperty, RO = (f, u) => {
  for (var p in u)
    TO(f, p, { get: u[p], enumerable: !0 });
}, xO = {
  isDev: !1,
  isBrowser: !0,
  isServer: !1,
  isTesting: !1
}, P1 = /* @__PURE__ */ new WeakMap(), vc = (f) => P1.get(f), kO = (f, u) => {
  const p = {
    $flags$: 0,
    $hostElement$: f,
    $cmpMeta$: u,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  return P1.set(f, p);
}, v1 = (f, u) => u in f, Ev = (f, u) => (0, console.error)(f, u), Ey = /* @__PURE__ */ new Map(), _O = [], DO = "slot-fb{display:contents}slot-fb[hidden]{display:none}", h1 = "http://www.w3.org/1999/xlink", Cv = typeof window < "u" ? window : {}, go = Cv.document || { head: {} }, fd = Cv.HTMLElement || class {
}, ni = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (f) => f(),
  raf: (f) => requestAnimationFrame(f),
  ael: (f, u, p, y) => f.addEventListener(u, p, y),
  rel: (f, u, p, y) => f.removeEventListener(u, p, y),
  ce: (f, u) => new CustomEvent(f, u)
}, OO = /* @__PURE__ */ (() => {
  let f = !1;
  try {
    go.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          f = !0;
        }
      })
    );
  } catch {
  }
  return f;
})(), LO = (f) => Promise.resolve(f), MO = /* @__PURE__ */ (() => {
  try {
    return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == "function";
  } catch {
  }
  return !1;
})(), fS = !1, dS = [], I1 = [], B1 = (f, u) => (p) => {
  f.push(p), fS || (fS = !0, u && ni.$flags$ & 4 ? AO(pS) : ni.raf(pS));
}, m1 = (f) => {
  for (let u = 0; u < f.length; u++)
    try {
      f[u](performance.now());
    } catch (p) {
      Ev(p);
    }
  f.length = 0;
}, pS = () => {
  m1(dS), m1(I1), (fS = dS.length > 0) && ni.raf(pS);
}, AO = (f) => LO().then(f), NO = /* @__PURE__ */ B1(dS, !1), wS = /* @__PURE__ */ B1(I1, !0), $O = (f) => {
  const u = new URL(f, ni.$resourcesUrl$);
  return u.origin !== Cv.location.origin ? u.href : u.pathname;
}, y1 = {}, zO = "http://www.w3.org/2000/svg", UO = "http://www.w3.org/1999/xhtml", HO = (f) => f != null, TS = (f) => (f = typeof f, f === "object" || f === "function");
function FO(f) {
  var u, p, y;
  return (y = (p = (u = f.head) == null ? void 0 : u.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : p.getAttribute("content")) != null ? y : void 0;
}
var jO = {};
RO(jO, {
  err: () => W1,
  map: () => VO,
  ok: () => vS,
  unwrap: () => PO,
  unwrapErr: () => IO
});
var vS = (f) => ({
  isOk: !0,
  isErr: !1,
  value: f
}), W1 = (f) => ({
  isOk: !1,
  isErr: !0,
  value: f
});
function VO(f, u) {
  if (f.isOk) {
    const p = u(f.value);
    return p instanceof Promise ? p.then((y) => vS(y)) : vS(p);
  }
  if (f.isErr) {
    const p = f.value;
    return W1(p);
  }
  throw "should never get here";
}
var PO = (f) => {
  if (f.isOk)
    return f.value;
  throw f.value;
}, IO = (f) => {
  if (f.isErr)
    return f.value;
  throw f.value;
}, pc = (f, u = "") => () => {
}, Hi = (f, u, ...p) => {
  let y = null, E = null, R = null, g = !1, L = !1;
  const k = [], A = (M) => {
    for (let K = 0; K < M.length; K++)
      y = M[K], Array.isArray(y) ? A(y) : y != null && typeof y != "boolean" && ((g = typeof f != "function" && !TS(y)) && (y = String(y)), g && L ? k[k.length - 1].$text$ += y : k.push(g ? Cy(null, y) : y), L = g);
  };
  if (A(p), u) {
    u.key && (E = u.key), u.name && (R = u.name);
    {
      const M = u.className || u.class;
      M && (u.class = typeof M != "object" ? M : Object.keys(M).filter((K) => M[K]).join(" "));
    }
  }
  if (typeof f == "function")
    return f(
      u === null ? {} : u,
      k,
      WO
    );
  const H = Cy(f, null);
  return H.$attrs$ = u, k.length > 0 && (H.$children$ = k), H.$key$ = E, H.$name$ = R, H;
}, Cy = (f, u) => {
  const p = {
    $flags$: 0,
    $tag$: f,
    $text$: u,
    $elm$: null,
    $children$: null
  };
  return p.$attrs$ = null, p.$key$ = null, p.$name$ = null, p;
}, wv = {}, BO = (f) => f && f.$tag$ === wv, WO = {
  forEach: (f, u) => f.map(g1).forEach(u),
  map: (f, u) => f.map(g1).map(u).map(YO)
}, g1 = (f) => ({
  vattrs: f.$attrs$,
  vchildren: f.$children$,
  vkey: f.$key$,
  vname: f.$name$,
  vtag: f.$tag$,
  vtext: f.$text$
}), YO = (f) => {
  if (typeof f.vtag == "function") {
    const p = { ...f.vattrs };
    return f.vkey && (p.key = f.vkey), f.vname && (p.name = f.vname), Hi(f.vtag, p, ...f.vchildren || []);
  }
  const u = Cy(f.vtag, f.vtext);
  return u.$attrs$ = f.vattrs, u.$children$ = f.vchildren, u.$key$ = f.vkey, u.$name$ = f.vname, u;
}, QO = (f) => _O.map((u) => u(f)).find((u) => !!u), GO = (f) => vc(f).$modeName$, qO = (f, u) => f != null && !TS(f) ? u & 4 ? f === "false" ? !1 : f === "" || !!f : u & 2 ? parseFloat(f) : u & 1 ? String(f) : f : f, KO = (f) => f, Il = (f, u, p) => {
  const y = KO(f);
  return {
    emit: (E) => XO(y, u, {
      bubbles: !!(p & 4),
      composed: !!(p & 2),
      cancelable: !!(p & 1),
      detail: E
    })
  };
}, XO = (f, u, p) => {
  const y = ni.ce(u, p);
  return f.dispatchEvent(y), y;
}, b1 = /* @__PURE__ */ new WeakMap(), ZO = (f, u, p) => {
  let y = Ey.get(f);
  MO && p ? (y = y || new CSSStyleSheet(), typeof y == "string" ? y = u : y.replaceSync(u)) : y = u, Ey.set(f, y);
}, JO = (f, u, p) => {
  var y;
  const E = Y1(u, p), R = Ey.get(E);
  if (f = f.nodeType === 11 ? f : go, R)
    if (typeof R == "string") {
      f = f.head || f;
      let g = b1.get(f), L;
      if (g || b1.set(f, g = /* @__PURE__ */ new Set()), !g.has(E)) {
        {
          L = go.createElement("style"), L.innerHTML = R;
          const k = (y = ni.$nonce$) != null ? y : FO(go);
          k != null && L.setAttribute("nonce", k), /**
           * we render a scoped component
           */
          (!(u.$flags$ & 1) || /**
          * we are using shadow dom and render the style tag within the shadowRoot
          */
          u.$flags$ & 1 && f.nodeName !== "HEAD") && f.insertBefore(L, f.querySelector("link"));
        }
        u.$flags$ & 4 && (L.innerHTML += DO), g && g.add(E);
      }
    } else f.adoptedStyleSheets.includes(R) || (f.adoptedStyleSheets = [...f.adoptedStyleSheets, R]);
  return E;
}, eL = (f) => {
  const u = f.$cmpMeta$, p = f.$hostElement$, y = u.$flags$, E = pc("attachStyles", u.$tagName$), R = JO(
    p.shadowRoot ? p.shadowRoot : p.getRootNode(),
    u,
    f.$modeName$
  );
  y & 10 && y & 2 && (p["s-sc"] = R, p.classList.add(R + "-h"), y & 2 && p.classList.add(R + "-s")), E();
}, Y1 = (f, u) => "sc-" + (u && f.$flags$ & 32 ? f.$tagName$ + "-" + u : f.$tagName$), S1 = (f, u, p, y, E, R) => {
  if (p !== y) {
    let g = v1(f, u), L = u.toLowerCase();
    if (u === "class") {
      const k = f.classList, A = E1(p), H = E1(y);
      k.remove(...A.filter((M) => M && !H.includes(M))), k.add(...H.filter((M) => M && !A.includes(M)));
    } else if (u === "style") {
      for (const k in p)
        (!y || y[k] == null) && (k.includes("-") ? f.style.removeProperty(k) : f.style[k] = "");
      for (const k in y)
        (!p || y[k] !== p[k]) && (k.includes("-") ? f.style.setProperty(k, y[k]) : f.style[k] = y[k]);
    } else if (u !== "key") if (u === "ref")
      y && y(f);
    else if (!f.__lookupSetter__(u) && u[0] === "o" && u[1] === "n") {
      if (u[2] === "-" ? u = u.slice(3) : v1(Cv, L) ? u = L.slice(2) : u = L[2] + u.slice(3), p || y) {
        const k = u.endsWith(Q1);
        u = u.replace(nL, ""), p && ni.rel(f, u, p, k), y && ni.ael(f, u, y, k);
      }
    } else {
      const k = TS(y);
      if ((g || k && y !== null) && !E)
        try {
          if (f.tagName.includes("-"))
            f[u] = y;
          else {
            const H = y ?? "";
            u === "list" ? g = !1 : (p == null || f[u] != H) && (f[u] = H);
          }
        } catch {
        }
      let A = !1;
      L !== (L = L.replace(/^xlink\:?/, "")) && (u = L, A = !0), y == null || y === !1 ? (y !== !1 || f.getAttribute(u) === "") && (A ? f.removeAttributeNS(h1, u) : f.removeAttribute(u)) : (!g || R & 4 || E) && !k && (y = y === !0 ? "" : y, A ? f.setAttributeNS(h1, u, y) : f.setAttribute(u, y));
    }
  }
}, tL = /\s/, E1 = (f) => f ? f.split(tL) : [], Q1 = "Capture", nL = new RegExp(Q1 + "$"), G1 = (f, u, p) => {
  const y = u.$elm$.nodeType === 11 && u.$elm$.host ? u.$elm$.host : u.$elm$, E = f && f.$attrs$ || y1, R = u.$attrs$ || y1;
  for (const g of C1(Object.keys(E)))
    g in R || S1(y, g, E[g], void 0, p, u.$flags$);
  for (const g of C1(Object.keys(R)))
    S1(y, g, E[g], R[g], p, u.$flags$);
};
function C1(f) {
  return f.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...f.filter((u) => u !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    f
  );
}
var od, hS, sd, wy = !1, Ty = !1, RS = !1, Ea = !1, Ry = (f, u, p, y) => {
  var E;
  const R = u.$children$[p];
  let g = 0, L, k, A;
  if (wy || (RS = !0, R.$tag$ === "slot" && (od && y.classList.add(od + "-s"), R.$flags$ |= R.$children$ ? (
    // slot element has fallback content
    // still create an element that "mocks" the slot element
    2
  ) : (
    // slot element does not have fallback content
    // create an html comment we'll use to always reference
    // where actual slot content should sit next to
    1
  ))), R.$text$ !== null)
    L = R.$elm$ = go.createTextNode(R.$text$);
  else if (R.$flags$ & 1)
    L = R.$elm$ = go.createTextNode("");
  else {
    if (Ea || (Ea = R.$tag$ === "svg"), L = R.$elm$ = go.createElementNS(
      Ea ? zO : UO,
      !wy && ja.slotRelocation && R.$flags$ & 2 ? "slot-fb" : R.$tag$
    ), Ea && R.$tag$ === "foreignObject" && (Ea = !1), G1(null, R, Ea), !!L.getRootNode().querySelector("body") && ja.scoped && HO(od) && L["s-si"] !== od && L.classList.add(L["s-si"] = od), kS(L, y), R.$children$)
      for (g = 0; g < R.$children$.length; ++g)
        k = Ry(f, R, g, L), k && L.appendChild(k);
    R.$tag$ === "svg" ? Ea = !1 : L.tagName === "foreignObject" && (Ea = !0);
  }
  return L["s-hn"] = sd, R.$flags$ & 3 && (L["s-sr"] = !0, L["s-cr"] = hS, L["s-sn"] = R.$name$ || "", L["s-rf"] = (E = R.$attrs$) == null ? void 0 : E.ref, A = f && f.$children$ && f.$children$[p], A && A.$tag$ === R.$tag$ && f.$elm$ && Sv(f.$elm$, !1)), L;
}, Sv = (f, u) => {
  ni.$flags$ |= 1;
  const p = Array.from(f.childNodes);
  if (f["s-sr"] && ja.experimentalSlotFixes) {
    let y = f;
    for (; y = y.nextSibling; )
      y && y["s-sn"] === f["s-sn"] && y["s-sh"] === sd && p.push(y);
  }
  for (let y = p.length - 1; y >= 0; y--) {
    const E = p[y];
    E["s-hn"] !== sd && E["s-ol"] && (is(X1(E), E, xS(E)), E["s-ol"].remove(), E["s-ol"] = void 0, E["s-sh"] = void 0, RS = !0), u && Sv(E, u);
  }
  ni.$flags$ &= -2;
}, q1 = (f, u, p, y, E, R) => {
  let g = f["s-cr"] && f["s-cr"].parentNode || f, L;
  for (g.shadowRoot && g.tagName === sd && (g = g.shadowRoot); E <= R; ++E)
    y[E] && (L = Ry(null, p, E, f), L && (y[E].$elm$ = L, is(g, L, xS(u))));
}, K1 = (f, u, p) => {
  for (let y = u; y <= p; ++y) {
    const E = f[y];
    if (E) {
      const R = E.$elm$;
      eT(E), R && (Ty = !0, R["s-ol"] ? R["s-ol"].remove() : Sv(R, !0), R.remove());
    }
  }
}, rL = (f, u, p, y, E = !1) => {
  let R = 0, g = 0, L = 0, k = 0, A = u.length - 1, H = u[0], M = u[A], K = y.length - 1, W = y[0], ue = y[K], Be, we;
  for (; R <= A && g <= K; )
    if (H == null)
      H = u[++R];
    else if (M == null)
      M = u[--A];
    else if (W == null)
      W = y[++g];
    else if (ue == null)
      ue = y[--K];
    else if (hy(H, W, E))
      ld(H, W, E), H = u[++R], W = y[++g];
    else if (hy(M, ue, E))
      ld(M, ue, E), M = u[--A], ue = y[--K];
    else if (hy(H, ue, E))
      (H.$tag$ === "slot" || ue.$tag$ === "slot") && Sv(H.$elm$.parentNode, !1), ld(H, ue, E), is(f, H.$elm$, M.$elm$.nextSibling), H = u[++R], ue = y[--K];
    else if (hy(M, W, E))
      (H.$tag$ === "slot" || ue.$tag$ === "slot") && Sv(M.$elm$.parentNode, !1), ld(M, W, E), is(f, M.$elm$, H.$elm$), M = u[--A], W = y[++g];
    else {
      for (L = -1, k = R; k <= A; ++k)
        if (u[k] && u[k].$key$ !== null && u[k].$key$ === W.$key$) {
          L = k;
          break;
        }
      L >= 0 ? (we = u[L], we.$tag$ !== W.$tag$ ? Be = Ry(u && u[g], p, L, f) : (ld(we, W, E), u[L] = void 0, Be = we.$elm$), W = y[++g]) : (Be = Ry(u && u[g], p, g, f), W = y[++g]), Be && is(X1(H.$elm$), Be, xS(H.$elm$));
    }
  R > A ? q1(
    f,
    y[K + 1] == null ? null : y[K + 1].$elm$,
    p,
    y,
    g,
    K
  ) : g > K && K1(u, R, A);
}, hy = (f, u, p = !1) => f.$tag$ === u.$tag$ ? f.$tag$ === "slot" ? (
  // The component gets hydrated and no VDOM has been initialized.
  // Here the comparison can't happen as $name$ property is not set for `leftNode`.
  "$nodeId$" in f && p && // `leftNode` is not from type HTMLComment which would cause many
  // hydration comments to be removed
  f.$elm$.nodeType !== 8 ? !1 : f.$name$ === u.$name$
) : p ? !0 : f.$key$ === u.$key$ : !1, xS = (f) => f && f["s-ol"] || f, X1 = (f) => (f["s-ol"] ? f["s-ol"] : f).parentNode, ld = (f, u, p = !1) => {
  const y = u.$elm$ = f.$elm$, E = f.$children$, R = u.$children$, g = u.$tag$, L = u.$text$;
  let k;
  L === null ? (Ea = g === "svg" ? !0 : g === "foreignObject" ? !1 : Ea, g === "slot" && !wy || G1(f, u, Ea), E !== null && R !== null ? rL(y, E, u, R, p) : R !== null ? (f.$text$ !== null && (y.textContent = ""), q1(y, null, u, R, 0, R.length - 1)) : (
    // don't do this on initial render as it can cause non-hydrated content to be removed
    !p && ja.updatable && E !== null && K1(E, 0, E.length - 1)
  ), Ea && g === "svg" && (Ea = !1)) : (k = y["s-cr"]) ? k.parentNode.textContent = L : f.$text$ !== L && (y.data = L);
}, Z1 = (f) => {
  const u = f.childNodes;
  for (const p of u)
    if (p.nodeType === 1) {
      if (p["s-sr"]) {
        const y = p["s-sn"];
        p.hidden = !1;
        for (const E of u)
          if (E !== p) {
            if (E["s-hn"] !== p["s-hn"] || y !== "") {
              if (E.nodeType === 1 && (y === E.getAttribute("slot") || y === E["s-sn"]) || E.nodeType === 3 && y === E["s-sn"]) {
                p.hidden = !0;
                break;
              }
            } else if (E.nodeType === 1 || E.nodeType === 3 && E.textContent.trim() !== "") {
              p.hidden = !0;
              break;
            }
          }
      }
      Z1(p);
    }
}, Vl = [], J1 = (f) => {
  let u, p, y;
  for (const E of f.childNodes) {
    if (E["s-sr"] && (u = E["s-cr"]) && u.parentNode) {
      p = u.parentNode.childNodes;
      const R = E["s-sn"];
      for (y = p.length - 1; y >= 0; y--)
        if (u = p[y], !u["s-cn"] && !u["s-nr"] && u["s-hn"] !== E["s-hn"] && !ja.experimentalSlotFixes)
          if (w1(u, R)) {
            let g = Vl.find((L) => L.$nodeToRelocate$ === u);
            Ty = !0, u["s-sn"] = u["s-sn"] || R, g ? (g.$nodeToRelocate$["s-sh"] = E["s-hn"], g.$slotRefNode$ = E) : (u["s-sh"] = E["s-hn"], Vl.push({
              $slotRefNode$: E,
              $nodeToRelocate$: u
            })), u["s-sr"] && Vl.map((L) => {
              w1(L.$nodeToRelocate$, u["s-sn"]) && (g = Vl.find((k) => k.$nodeToRelocate$ === u), g && !L.$slotRefNode$ && (L.$slotRefNode$ = g.$slotRefNode$));
            });
          } else Vl.some((g) => g.$nodeToRelocate$ === u) || Vl.push({
            $nodeToRelocate$: u
          });
    }
    E.nodeType === 1 && J1(E);
  }
}, w1 = (f, u) => f.nodeType === 1 ? f.getAttribute("slot") === null && u === "" || f.getAttribute("slot") === u : f["s-sn"] === u ? !0 : u === "", eT = (f) => {
  f.$attrs$ && f.$attrs$.ref && f.$attrs$.ref(null), f.$children$ && f.$children$.map(eT);
}, is = (f, u, p) => {
  const y = f == null ? void 0 : f.insertBefore(u, p);
  return kS(u, f), y;
}, tT = (f) => {
  const u = [];
  return f && u.push(
    ...f["s-scs"] || [],
    f["s-si"],
    f["s-sc"],
    ...tT(f.parentElement)
  ), u;
}, kS = (f, u, p = !1) => {
  var y;
  if (f && u && f.nodeType === 1) {
    const E = new Set(tT(u).filter(Boolean));
    if (E.size && ((y = f.classList) == null || y.add(...f["s-scs"] = [...E]), f["s-ol"] || p))
      for (const R of Array.from(f.childNodes))
        kS(R, f, !0);
  }
}, iL = (f, u, p = !1) => {
  var y, E, R, g, L;
  const k = f.$hostElement$, A = f.$cmpMeta$, H = f.$vnode$ || Cy(null, null), M = BO(u) ? u : Hi(null, null, u);
  if (sd = k.tagName, A.$attrsToReflect$ && (M.$attrs$ = M.$attrs$ || {}, A.$attrsToReflect$.map(
    ([K, W]) => M.$attrs$[W] = k[K]
  )), p && M.$attrs$)
    for (const K of Object.keys(M.$attrs$))
      k.hasAttribute(K) && !["key", "ref", "style", "class"].includes(K) && (M.$attrs$[K] = k[K]);
  M.$tag$ = null, M.$flags$ |= 4, f.$vnode$ = M, M.$elm$ = H.$elm$ = k.shadowRoot || k, od = k["s-sc"], wy = (A.$flags$ & 1) !== 0, hS = k["s-cr"], Ty = !1, ld(H, M, p);
  {
    if (ni.$flags$ |= 1, RS) {
      J1(M.$elm$);
      for (const K of Vl) {
        const W = K.$nodeToRelocate$;
        if (!W["s-ol"]) {
          const ue = go.createTextNode("");
          ue["s-nr"] = W, is(W.parentNode, W["s-ol"] = ue, W);
        }
      }
      for (const K of Vl) {
        const W = K.$nodeToRelocate$, ue = K.$slotRefNode$;
        if (ue) {
          const Be = ue.parentNode;
          let we = ue.nextSibling;
          {
            let gt = (y = W["s-ol"]) == null ? void 0 : y.previousSibling;
            for (; gt; ) {
              let ge = (E = gt["s-nr"]) != null ? E : null;
              if (ge && ge["s-sn"] === W["s-sn"] && Be === ge.parentNode) {
                for (ge = ge.nextSibling; ge === W || ge != null && ge["s-sr"]; )
                  ge = ge == null ? void 0 : ge.nextSibling;
                if (!ge || !ge["s-nr"]) {
                  we = ge;
                  break;
                }
              }
              gt = gt.previousSibling;
            }
          }
          (!we && Be !== W.parentNode || W.nextSibling !== we) && W !== we && (!W["s-hn"] && W["s-ol"] && (W["s-hn"] = W["s-ol"].parentNode.nodeName), is(Be, W, we), W.nodeType === 1 && (W.hidden = (R = W["s-ih"]) != null ? R : !1)), W && typeof ue["s-rf"] == "function" && ue["s-rf"](W);
        } else
          W.nodeType === 1 && (p && (W["s-ih"] = (g = W.hidden) != null ? g : !1), W.hidden = !0);
      }
    }
    Ty && Z1(M.$elm$), ni.$flags$ &= -2, Vl.length = 0;
  }
  if (ja.experimentalScopedSlotChanges && A.$flags$ & 2)
    for (const K of M.$elm$.childNodes)
      K["s-hn"] !== sd && !K["s-sh"] && (p && K["s-ih"] == null && (K["s-ih"] = (L = K.hidden) != null ? L : !1), K.hidden = !0);
  hS = void 0;
}, aL = (f, u) => {
}, nT = (f, u) => (f.$flags$ |= 16, aL(f, f.$ancestorComponent$), wS(() => oL(f, u))), oL = (f, u) => {
  const p = f.$hostElement$, y = pc("scheduleUpdate", f.$cmpMeta$.$tagName$), E = p;
  if (!E)
    throw new Error(
      `Can't render component <${p.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  let R;
  return u ? R = ud(E, "componentWillLoad") : R = ud(E, "componentWillUpdate"), R = T1(R, () => ud(E, "componentWillRender")), y(), T1(R, () => uL(f, E, u));
}, T1 = (f, u) => lL(f) ? f.then(u).catch((p) => {
  console.error(p), u();
}) : u(), lL = (f) => f instanceof Promise || f && f.then && typeof f.then == "function", uL = async (f, u, p) => {
  const y = f.$hostElement$, E = pc("update", f.$cmpMeta$.$tagName$);
  y["s-rc"], p && eL(f);
  const R = pc("render", f.$cmpMeta$.$tagName$);
  sL(f, u, y, p), R(), E(), cL(f);
}, R1 = null, sL = (f, u, p, y) => {
  try {
    R1 = u, u = u.render && u.render(), f.$flags$ &= -17, f.$flags$ |= 2, (ja.hasRenderFn || ja.reflect) && (ja.vdomRender || ja.reflect) && (ja.hydrateServerSide || iL(f, u, y));
  } catch (k) {
    Ev(k, f.$hostElement$);
  }
  return R1 = null, null;
}, cL = (f) => {
  const u = f.$cmpMeta$.$tagName$, p = f.$hostElement$, y = pc("postUpdate", u), E = p;
  f.$ancestorComponent$, ud(E, "componentDidRender"), f.$flags$ & 64 ? (ud(E, "componentDidUpdate"), y()) : (f.$flags$ |= 64, ud(E, "componentDidLoad"), y());
}, ud = (f, u, p) => {
  if (f && f[u])
    try {
      return f[u](p);
    } catch (y) {
      Ev(y);
    }
}, fL = (f, u) => vc(f).$instanceValues$.get(u), dL = (f, u, p, y) => {
  const E = vc(f), R = f, g = E.$instanceValues$.get(u), L = E.$flags$, k = R;
  p = qO(p, y.$members$[u][0]);
  const A = Number.isNaN(g) && Number.isNaN(p);
  if (p !== g && !A) {
    E.$instanceValues$.set(u, p);
    {
      if (y.$watchers$ && L & 128) {
        const M = y.$watchers$[u];
        M && M.map((K) => {
          try {
            k[K](p, g, u);
          } catch (W) {
            Ev(W, R);
          }
        });
      }
      if ((L & 18) === 2) {
        if (k.componentShouldUpdate && k.componentShouldUpdate(p, g, u) === !1)
          return;
        nT(E, !1);
      }
    }
  }
}, pL = (f, u, p) => {
  var y, E;
  const R = f.prototype;
  if (u.$members$ || u.$watchers$ || f.watchers) {
    f.watchers && !u.$watchers$ && (u.$watchers$ = f.watchers);
    const g = Object.entries((y = u.$members$) != null ? y : {});
    g.map(([L, [k]]) => {
      (k & 31 || k & 32) && Object.defineProperty(R, L, {
        get() {
          return fL(this, L);
        },
        set(A) {
          dL(this, L, A, u);
        },
        configurable: !0,
        enumerable: !0
      });
    });
    {
      const L = /* @__PURE__ */ new Map();
      R.attributeChangedCallback = function(k, A, H) {
        ni.jmp(() => {
          var M;
          const K = L.get(k);
          if (this.hasOwnProperty(K))
            H = this[K], delete this[K];
          else {
            if (R.hasOwnProperty(K) && typeof this[K] == "number" && // cast type to number to avoid TS compiler issues
            this[K] == H)
              return;
            if (K == null) {
              const W = vc(this), ue = W == null ? void 0 : W.$flags$;
              if (ue && !(ue & 8) && ue & 128 && H !== A) {
                const we = this, gt = (M = u.$watchers$) == null ? void 0 : M[k];
                gt == null || gt.forEach((ge) => {
                  we[ge] != null && we[ge].call(we, H, A, k);
                });
              }
              return;
            }
          }
          this[K] = H === null && typeof this[K] == "boolean" ? !1 : H;
        });
      }, f.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((E = u.$watchers$) != null ? E : {}),
          ...g.filter(
            ([k, A]) => A[0] & 15
            /* HasAttribute */
          ).map(([k, A]) => {
            var H;
            const M = A[1] || k;
            return L.set(M, k), A[0] & 512 && ((H = u.$attrsToReflect$) == null || H.push([k, M])), M;
          })
        ])
      );
    }
  }
  return f;
}, vL = async (f, u, p, y) => {
  let E;
  if (!(u.$flags$ & 32)) {
    u.$flags$ |= 32, p.$lazyBundleId$;
    {
      E = f.constructor;
      const g = f.localName;
      customElements.whenDefined(g).then(
        () => u.$flags$ |= 128
        /* isWatchReady */
      );
    }
    if (E && E.style) {
      let g;
      typeof E.style == "string" ? g = E.style : typeof E.style != "string" && (u.$modeName$ = QO(f), u.$modeName$ && (g = E.style[u.$modeName$]));
      const L = Y1(p, u.$modeName$);
      if (!Ey.has(L)) {
        const k = pc("registerStyles", p.$tagName$);
        ZO(L, g, !!(p.$flags$ & 1)), k();
      }
    }
  }
  u.$ancestorComponent$, nT(u, !0);
}, x1 = (f) => {
}, hL = (f) => {
  if (!(ni.$flags$ & 1)) {
    const u = vc(f), p = u.$cmpMeta$, y = pc("connectedCallback", p.$tagName$);
    u.$flags$ & 1 ? (rT(f, u, p.$listeners$), u != null && u.$lazyInstance$ ? x1(u.$lazyInstance$) : u != null && u.$onReadyPromise$ && u.$onReadyPromise$.then(() => x1(u.$lazyInstance$))) : (u.$flags$ |= 1, // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
    p.$flags$ & 12 && mL(f), p.$members$ && Object.entries(p.$members$).map(([E, [R]]) => {
      if (R & 31 && f.hasOwnProperty(E)) {
        const g = f[E];
        delete f[E], f[E] = g;
      }
    }), vL(f, u, p)), y();
  }
}, mL = (f) => {
  const u = f["s-cr"] = go.createComment(
    ""
  );
  u["s-cn"] = !0, is(f, u, f.firstChild);
}, yL = async (f) => {
  if (!(ni.$flags$ & 1)) {
    const u = vc(f);
    u.$rmListeners$ && (u.$rmListeners$.map((p) => p()), u.$rmListeners$ = void 0);
  }
}, dd = (f, u) => {
  const p = {
    $flags$: u[0],
    $tagName$: u[1]
  };
  p.$members$ = u[2], p.$listeners$ = u[3], p.$watchers$ = f.$watchers$, p.$attrsToReflect$ = [];
  const y = f.prototype.connectedCallback, E = f.prototype.disconnectedCallback;
  return Object.assign(f.prototype, {
    __registerHost() {
      kO(this, p);
    },
    connectedCallback() {
      const R = vc(this);
      rT(this, R, p.$listeners$), hL(this), y && y.call(this);
    },
    disconnectedCallback() {
      yL(this), E && E.call(this);
    },
    __attachShadow() {
      if (!this.shadowRoot)
        this.attachShadow({
          mode: "open",
          delegatesFocus: !!(p.$flags$ & 16)
        });
      else if (this.shadowRoot.mode !== "open")
        throw new Error(
          `Unable to re-use existing shadow root for ${p.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`
        );
    }
  }), f.is = p.$tagName$, pL(f, p);
}, rT = (f, u, p, y) => {
  p && p.map(([E, R, g]) => {
    const L = bL(f, E), k = gL(u, g), A = SL(E);
    ni.ael(L, R, k, A), (u.$rmListeners$ = u.$rmListeners$ || []).push(() => ni.rel(L, R, k, A));
  });
}, gL = (f, u) => (p) => {
  var y;
  try {
    ja.lazyLoad || f.$hostElement$[u](p);
  } catch (E) {
    Ev(E);
  }
}, bL = (f, u) => u & 4 ? go : u & 8 ? Cv : u & 16 ? go.body : f, SL = (f) => OO ? {
  passive: (f & 1) !== 0,
  capture: (f & 2) !== 0
} : (f & 2) !== 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Ti = typeof window < "u" ? window : void 0, Zb = typeof document < "u" ? document : void 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let Jb;
const EL = (f) => {
  if (Jb === void 0) {
    const u = f.style.animationName !== void 0, p = f.style.webkitAnimationName !== void 0;
    Jb = !u && p ? "-webkit-" : "";
  }
  return Jb;
}, eS = (f, u, p) => {
  const y = u.startsWith("animation") ? EL(f) : "";
  f.style.setProperty(y + u, p);
}, my = (f = [], u) => {
  if (u !== void 0) {
    const p = Array.isArray(u) ? u : [u];
    return [...f, ...p];
  }
  return f;
}, CL = (f) => {
  let u, p, y, E, R, g, L = [], k = [], A = [], H = !1, M, K = {}, W = [], ue = [], Be = {}, we = 0, gt = !1, ge = !1, Fe, pt, Oe, ut = !0, We = !1, Gt = !0, Me, Ht = !1;
  const Nt = f, sn = [], Pe = [], rt = [], Tt = [], it = [], Re = [], se = [], Ae = [], ve = [], U = [], X = [], qe = typeof AnimationEffect == "function" || Ti !== void 0 && typeof Ti.AnimationEffect == "function", Ne = typeof Element == "function" && typeof Element.prototype.animate == "function" && qe, vt = () => X, ht = (P) => (it.forEach((fe) => {
    fe.destroy(P);
  }), kt(P), Tt.length = 0, it.length = 0, L.length = 0, dn(), H = !1, Gt = !0, Me), kt = (P) => {
    zn(), P && Un();
  }, bt = () => {
    gt = !1, ge = !1, Gt = !0, Fe = void 0, pt = void 0, Oe = void 0, we = 0, We = !1, ut = !0, Ht = !1;
  }, St = () => we !== 0 && !Ht, en = (P, fe) => {
    const Qe = fe.findIndex((It) => It.c === P);
    Qe > -1 && fe.splice(Qe, 1);
  }, nr = (P, fe) => (rt.push({ c: P, o: fe }), Me), rr = (P, fe) => ((fe != null && fe.oneTimeCallback ? Pe : sn).push({ c: P, o: fe }), Me), dn = () => (sn.length = 0, Pe.length = 0, Me), zn = () => {
    Ne && (X.forEach((P) => {
      P.cancel();
    }), X.length = 0);
  }, Un = () => {
    Re.forEach((P) => {
      P != null && P.parentNode && P.parentNode.removeChild(P);
    }), Re.length = 0;
  }, On = (P) => (se.push(P), Me), wn = (P) => (Ae.push(P), Me), _r = (P) => (ve.push(P), Me), Dr = (P) => (U.push(P), Me), In = (P) => (k = my(k, P), Me), ir = (P) => (A = my(A, P), Me), Or = (P = {}) => (K = P, Me), ar = (P = []) => {
    for (const fe of P)
      K[fe] = "";
    return Me;
  }, jr = (P) => (W = my(W, P), Me), Gn = (P) => (ue = my(ue, P), Me), Lr = (P = {}) => (Be = P, Me), pn = (P = []) => {
    for (const fe of P)
      Be[fe] = "";
    return Me;
  }, qn = () => R !== void 0 ? R : M ? M.getFill() : "both", Vr = () => Fe !== void 0 ? Fe : g !== void 0 ? g : M ? M.getDirection() : "normal", vr = () => gt ? "linear" : y !== void 0 ? y : M ? M.getEasing() : "linear", pe = () => ge ? 0 : pt !== void 0 ? pt : p !== void 0 ? p : M ? M.getDuration() : 0, $e = () => E !== void 0 ? E : M ? M.getIterations() : 1, ft = () => Oe !== void 0 ? Oe : u !== void 0 ? u : M ? M.getDelay() : 0, Ft = () => L, jt = (P) => (g = P, bn(!0), Me), Tn = (P) => (R = P, bn(!0), Me), vn = (P) => (u = P, bn(!0), Me), or = (P) => (y = P, bn(!0), Me), qt = (P) => (!Ne && P === 0 && (P = 1), p = P, bn(!0), Me), hr = (P) => (E = P, bn(!0), Me), Vt = (P) => (M = P, Me), Pt = (P) => {
    if (P != null)
      if (P.nodeType === 1)
        Tt.push(P);
      else if (P.length >= 0)
        for (let fe = 0; fe < P.length; fe++)
          Tt.push(P[fe]);
      else
        console.error("Invalid addElement value");
    return Me;
  }, Ri = (P) => {
    if (P != null)
      if (Array.isArray(P))
        for (const fe of P)
          fe.parent(Me), it.push(fe);
      else
        P.parent(Me), it.push(P);
    return Me;
  }, ri = (P) => {
    const fe = L !== P;
    return L = P, fe && Ca(L), Me;
  }, Ca = (P) => {
    Ne && vt().forEach((fe) => {
      const Qe = fe.effect;
      if (Qe.setKeyframes)
        Qe.setKeyframes(P);
      else {
        const It = new KeyframeEffect(Qe.target, P, Qe.getTiming());
        fe.effect = It;
      }
    });
  }, Va = () => {
    se.forEach((It) => It()), Ae.forEach((It) => It());
    const P = k, fe = A, Qe = K;
    Tt.forEach((It) => {
      const at = It.classList;
      P.forEach((tn) => at.add(tn)), fe.forEach((tn) => at.remove(tn));
      for (const tn in Qe)
        Qe.hasOwnProperty(tn) && eS(It, tn, Qe[tn]);
    });
  }, bo = () => {
    ve.forEach((at) => at()), U.forEach((at) => at());
    const P = ut ? 1 : 0, fe = W, Qe = ue, It = Be;
    Tt.forEach((at) => {
      const tn = at.classList;
      fe.forEach((Rn) => tn.add(Rn)), Qe.forEach((Rn) => tn.remove(Rn));
      for (const Rn in It)
        It.hasOwnProperty(Rn) && eS(at, Rn, It[Rn]);
    }), pt = void 0, Fe = void 0, Oe = void 0, sn.forEach((at) => at.c(P, Me)), Pe.forEach((at) => at.c(P, Me)), Pe.length = 0, Gt = !0, ut && (We = !0), ut = !0;
  }, ii = () => {
    we !== 0 && (we--, we === 0 && (bo(), M && M.animationFinish()));
  }, wa = () => {
    Tt.forEach((P) => {
      const fe = P.animate(L, {
        id: Nt,
        delay: ft(),
        duration: pe(),
        easing: vr(),
        iterations: $e(),
        fill: qn(),
        direction: Vr()
      });
      fe.pause(), X.push(fe);
    }), X.length > 0 && (X[0].onfinish = () => {
      ii();
    });
  }, Mr = () => {
    Va(), L.length > 0 && Ne && wa(), H = !0;
  }, Ar = (P) => {
    P = Math.min(Math.max(P, 0), 0.9999), Ne && X.forEach((fe) => {
      fe.currentTime = fe.effect.getComputedTiming().delay + pe() * P, fe.pause();
    });
  }, Nr = (P) => {
    X.forEach((fe) => {
      fe.effect.updateTiming({
        delay: ft(),
        duration: pe(),
        easing: vr(),
        iterations: $e(),
        fill: qn(),
        direction: Vr()
      });
    }), P !== void 0 && Ar(P);
  }, bn = (P = !1, fe = !0, Qe) => (P && it.forEach((It) => {
    It.update(P, fe, Qe);
  }), Ne && Nr(Qe), Me), mr = (P = !1, fe) => (it.forEach((Qe) => {
    Qe.progressStart(P, fe);
  }), xi(), gt = P, H || Mr(), bn(!1, !0, fe), Me), Pr = (P) => (it.forEach((fe) => {
    fe.progressStep(P);
  }), Ar(P), Me), Fi = (P, fe, Qe) => (gt = !1, it.forEach((It) => {
    It.progressEnd(P, fe, Qe);
  }), Qe !== void 0 && (pt = Qe), We = !1, ut = !0, P === 0 ? (Fe = Vr() === "reverse" ? "normal" : "reverse", Fe === "reverse" && (ut = !1), Ne ? (bn(), Ar(1 - fe)) : (Oe = (1 - fe) * pe() * -1, bn(!1, !1))) : P === 1 && (Ne ? (bn(), Ar(fe)) : (Oe = fe * pe() * -1, bn(!1, !1))), P !== void 0 && !M && Ct(), Me), xi = () => {
    H && (Ne ? X.forEach((P) => {
      P.pause();
    }) : Tt.forEach((P) => {
      eS(P, "animation-play-state", "paused");
    }), Ht = !0);
  }, D = () => (it.forEach((P) => {
    P.pause();
  }), xi(), Me), ne = () => {
    ii();
  }, oe = () => {
    X.forEach((P) => {
      P.play();
    }), (L.length === 0 || Tt.length === 0) && ii();
  }, ze = () => {
    Ne && (Ar(0), Nr());
  }, Ct = (P) => new Promise((fe) => {
    P != null && P.sync && (ge = !0, rr(() => ge = !1, { oneTimeCallback: !0 })), H || Mr(), We && (ze(), We = !1), Gt && (we = it.length + 1, Gt = !1);
    const Qe = () => {
      en(It, Pe), fe();
    }, It = () => {
      en(Qe, rt), fe();
    };
    rr(It, { oneTimeCallback: !0 }), nr(Qe, { oneTimeCallback: !0 }), it.forEach((at) => {
      at.play();
    }), Ne ? oe() : ne(), Ht = !1;
  }), _t = () => {
    it.forEach((P) => {
      P.stop();
    }), H && (zn(), H = !1), bt(), rt.forEach((P) => P.c(0, Me)), rt.length = 0;
  }, Ye = (P, fe) => {
    const Qe = L[0];
    return Qe !== void 0 && (Qe.offset === void 0 || Qe.offset === 0) ? Qe[P] = fe : L = [{ offset: 0, [P]: fe }, ...L], Me;
  };
  return Me = {
    parentAnimation: M,
    elements: Tt,
    childAnimations: it,
    id: Nt,
    animationFinish: ii,
    from: Ye,
    to: (P, fe) => {
      const Qe = L[L.length - 1];
      return Qe !== void 0 && (Qe.offset === void 0 || Qe.offset === 1) ? Qe[P] = fe : L = [...L, { offset: 1, [P]: fe }], Me;
    },
    fromTo: (P, fe, Qe) => Ye(P, fe).to(P, Qe),
    parent: Vt,
    play: Ct,
    pause: D,
    stop: _t,
    destroy: ht,
    keyframes: ri,
    addAnimation: Ri,
    addElement: Pt,
    update: bn,
    fill: Tn,
    direction: jt,
    iterations: hr,
    duration: qt,
    easing: or,
    delay: vn,
    getWebAnimations: vt,
    getKeyframes: Ft,
    getFill: qn,
    getDirection: Vr,
    getDelay: ft,
    getIterations: $e,
    getEasing: vr,
    getDuration: pe,
    afterAddRead: _r,
    afterAddWrite: Dr,
    afterClearStyles: pn,
    afterStyles: Lr,
    afterRemoveClass: Gn,
    afterAddClass: jr,
    beforeAddRead: On,
    beforeAddWrite: wn,
    beforeClearStyles: ar,
    beforeStyles: Or,
    beforeRemoveClass: ir,
    beforeAddClass: In,
    onFinish: rr,
    isRunning: St,
    progressStart: mr,
    progressStep: Pr,
    progressEnd: Fi
  };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class wL {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(u) {
    this.m = new Map(Object.entries(u));
  }
  get(u, p) {
    const y = this.m.get(u);
    return y !== void 0 ? y : p;
  }
  getBoolean(u, p = !1) {
    const y = this.m.get(u);
    return y === void 0 ? p : typeof y == "string" ? y === "true" : !!y;
  }
  getNumber(u, p) {
    const y = parseFloat(this.m.get(u));
    return isNaN(y) ? p !== void 0 ? p : NaN : y;
  }
  set(u, p) {
    this.m.set(u, p);
  }
}
const Bl = /* @__PURE__ */ new wL();
let TL;
const cd = (f) => f && GO(f) || TL;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const RL = (f, ...u) => console.warn(`[Ionic Warning]: ${f}`, ...u);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const iT = (f, u) => {
  f.componentOnReady ? f.componentOnReady().then((p) => u(p)) : aT(() => u(f));
}, xL = (f) => f.componentOnReady !== void 0, kL = (f, u = []) => {
  const p = {};
  return u.forEach((y) => {
    f.hasAttribute(y) && (f.getAttribute(y) !== null && (p[y] = f.getAttribute(y)), f.removeAttribute(y));
  }), p;
}, aT = (f) => typeof __zone_symbol__requestAnimationFrame == "function" ? __zone_symbol__requestAnimationFrame(f) : typeof requestAnimationFrame == "function" ? requestAnimationFrame(f) : setTimeout(f), RA = (f, u, p) => Math.max(f, Math.min(u, p)), ca = (f, u) => {
  if (!f) {
    const p = "ASSERT: " + u;
    console.error(p);
    debugger;
    throw new Error(p);
  }
}, oT = (f, u) => {
  if (f ?? (f = {}), u ?? (u = {}), f === u)
    return !0;
  const p = Object.keys(f);
  if (p.length !== Object.keys(u).length)
    return !1;
  for (const y of p)
    if (!(y in u) || f[y] !== u[y])
      return !1;
  return !0;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const _L = "ionViewWillEnter", DL = "ionViewDidEnter", lT = "ionViewWillLeave", uT = "ionViewDidLeave", tS = "ionViewWillUnload", gv = (f) => {
  f.tabIndex = -1, f.focus();
}, yy = (f) => f.offsetParent !== null, OL = () => ({
  saveViewFocus: (p) => {
    if (Bl.get("focusManagerPriority", !1)) {
      const E = document.activeElement;
      E !== null && (p != null && p.contains(E)) && E.setAttribute(k1, "true");
    }
  },
  setViewFocus: (p) => {
    const y = Bl.get("focusManagerPriority", !1);
    if (Array.isArray(y) && !p.contains(document.activeElement)) {
      const E = p.querySelector(`[${k1}]`);
      if (E && yy(E)) {
        gv(E);
        return;
      }
      for (const R of y)
        switch (R) {
          case "content":
            const g = p.querySelector('main, [role="main"]');
            if (g && yy(g)) {
              gv(g);
              return;
            }
            break;
          case "heading":
            const L = p.querySelector('h1, [role="heading"][aria-level="1"]');
            if (L && yy(L)) {
              gv(L);
              return;
            }
            break;
          case "banner":
            const k = p.querySelector('header, [role="banner"]');
            if (k && yy(k)) {
              gv(k);
              return;
            }
            break;
          default:
            RL(`Unrecognized focus manager priority value ${R}`);
            break;
        }
      gv(p);
    }
  }
}), k1 = "ion-last-focus", LL = () => import("./ios.transition-DEY8vCZf.js"), ML = () => import("./md.transition-_S--nGeJ.js"), sT = OL(), cT = (f) => new Promise((u, p) => {
  wS(() => {
    AL(f), NL(f).then((y) => {
      y.animation && y.animation.destroy(), _1(f), u(y);
    }, (y) => {
      _1(f), p(y);
    });
  });
}), AL = (f) => {
  const u = f.enteringEl, p = f.leavingEl;
  sT.saveViewFocus(p), jL(u, p, f.direction), f.showGoBack ? u.classList.add("can-go-back") : u.classList.remove("can-go-back"), yS(u, !1), u.style.setProperty("pointer-events", "none"), p && (yS(p, !1), p.style.setProperty("pointer-events", "none"));
}, NL = async (f) => {
  const u = await $L(f);
  return u && xO.isBrowser ? zL(u, f) : UL(f);
}, _1 = (f) => {
  const u = f.enteringEl, p = f.leavingEl;
  u.classList.remove("ion-page-invisible"), u.style.removeProperty("pointer-events"), p !== void 0 && (p.classList.remove("ion-page-invisible"), p.style.removeProperty("pointer-events")), sT.setViewFocus(u);
}, $L = async (f) => !f.leavingEl || !f.animated || f.duration === 0 ? void 0 : f.animationBuilder ? f.animationBuilder : f.mode === "ios" ? (await LL()).iosTransitionAnimation : (await ML()).mdTransitionAnimation, zL = async (f, u) => {
  await fT(u, !0);
  const p = f(u.baseEl, u);
  dT(u.enteringEl, u.leavingEl);
  const y = await FL(p, u);
  return u.progressCallback && u.progressCallback(void 0), y && pT(u.enteringEl, u.leavingEl), {
    hasCompleted: y,
    animation: p
  };
}, UL = async (f) => {
  const u = f.enteringEl, p = f.leavingEl, y = Bl.get("focusManagerPriority", !1);
  return await fT(f, y), dT(u, p), pT(u, p), {
    hasCompleted: !0
  };
}, fT = async (f, u) => {
  (f.deepWait !== void 0 ? f.deepWait : u) && await Promise.all([mS(f.enteringEl), mS(f.leavingEl)]), await HL(f.viewIsReady, f.enteringEl);
}, HL = async (f, u) => {
  f && await f(u);
}, FL = (f, u) => {
  const p = u.progressCallback, y = new Promise((E) => {
    f.onFinish((R) => E(R === 1));
  });
  return p ? (f.progressStart(!0), p(f)) : f.play(), y;
}, dT = (f, u) => {
  Pl(u, lT), Pl(f, _L);
}, pT = (f, u) => {
  Pl(f, DL), Pl(u, uT);
}, Pl = (f, u) => {
  if (f) {
    const p = new CustomEvent(u, {
      bubbles: !1,
      cancelable: !1
    });
    f.dispatchEvent(p);
  }
}, mS = async (f) => {
  const u = f;
  if (u) {
    if (u.componentOnReady != null) {
      if (await u.componentOnReady() != null)
        return;
    } else if (u.__registerHost != null) {
      await new Promise((y) => aT(y));
      return;
    }
    await Promise.all(Array.from(u.children).map(mS));
  }
}, yS = (f, u) => {
  u ? (f.setAttribute("aria-hidden", "true"), f.classList.add("ion-page-hidden")) : (f.hidden = !1, f.removeAttribute("aria-hidden"), f.classList.remove("ion-page-hidden"));
}, jL = (f, u, p) => {
  f !== void 0 && (f.style.zIndex = p === "back" ? "99" : "101"), u !== void 0 && (u.style.zIndex = "100");
}, xA = (f) => {
  if (f.classList.contains("ion-page"))
    return f;
  const u = f.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
  return u || f;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const xy = (f, u, p, y, E) => PL(f[1], u[1], p[1], y[1], E).map((R) => VL(f[0], u[0], p[0], y[0], R)), VL = (f, u, p, y, E) => {
  const R = 3 * u * Math.pow(E - 1, 2), g = -3 * p * E + 3 * p + y * E, L = f * Math.pow(E - 1, 3);
  return E * (R + E * g) - L;
}, PL = (f, u, p, y, E) => (f -= E, u -= E, p -= E, y -= E, BL(y - 3 * p + 3 * u - f, 3 * p - 6 * u + 3 * f, 3 * u - 3 * f, f).filter((g) => g >= 0 && g <= 1)), IL = (f, u, p) => {
  const y = u * u - 4 * f * p;
  return y < 0 ? [] : [(-u + Math.sqrt(y)) / (2 * f), (-u - Math.sqrt(y)) / (2 * f)];
}, BL = (f, u, p, y) => {
  if (f === 0)
    return IL(u, p, y);
  u /= f, p /= f, y /= f;
  const E = (3 * p - u * u) / 3, R = (2 * u * u * u - 9 * u * p + 27 * y) / 27;
  if (E === 0)
    return [Math.pow(-R, 1 / 3)];
  if (R === 0)
    return [Math.sqrt(-E), -Math.sqrt(-E)];
  const g = Math.pow(R / 2, 2) + Math.pow(E / 3, 3);
  if (g === 0)
    return [Math.pow(R / 2, 1 / 2) - u / 3];
  if (g > 0)
    return [
      Math.pow(-(R / 2) + Math.sqrt(g), 1 / 3) - Math.pow(R / 2 + Math.sqrt(g), 1 / 3) - u / 3
    ];
  const L = Math.sqrt(Math.pow(-(E / 3), 3)), k = Math.acos(-(R / (2 * Math.sqrt(Math.pow(-(E / 3), 3))))), A = 2 * Math.pow(L, 1 / 3);
  return [
    A * Math.cos(k / 3) - u / 3,
    A * Math.cos((k + 2 * Math.PI) / 3) - u / 3,
    A * Math.cos((k + 4 * Math.PI) / 3) - u / 3
  ];
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const WL = (f, u) => typeof f == "string" && f.length > 0 ? Object.assign({ "ion-color": !0, [`ion-color-${f}`]: !0 }, u) : u;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const vT = async (f, u, p, y, E, R) => {
  var g;
  if (f)
    return f.attachViewToDom(u, p, E, y);
  if (typeof p != "string" && !(p instanceof HTMLElement))
    throw new Error("framework delegate is missing");
  const L = typeof p == "string" ? (g = u.ownerDocument) === null || g === void 0 ? void 0 : g.createElement(p) : p;
  return y && y.forEach((k) => L.classList.add(k)), E && Object.assign(L, E), u.appendChild(L), await new Promise((k) => iT(L, k)), L;
}, YL = (f, u) => {
  if (u) {
    if (f) {
      const p = u.parentElement;
      return f.removeViewFromDom(p, u);
    }
    u.remove();
  }
  return Promise.resolve();
};
function Yl(f, u) {
  var p = {};
  for (var y in f) Object.prototype.hasOwnProperty.call(f, y) && u.indexOf(y) < 0 && (p[y] = f[y]);
  if (f != null && typeof Object.getOwnPropertySymbols == "function")
    for (var E = 0, y = Object.getOwnPropertySymbols(f); E < y.length; E++)
      u.indexOf(y[E]) < 0 && Object.prototype.propertyIsEnumerable.call(f, y[E]) && (p[y[E]] = f[y[E]]);
  return p;
}
var gS = { exports: {} }, ua = {}, gy = { exports: {} }, nS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D1;
function QL() {
  return D1 || (D1 = 1, function(f) {
    function u(se, Ae) {
      var ve = se.length;
      se.push(Ae);
      e: for (; 0 < ve; ) {
        var U = ve - 1 >>> 1, X = se[U];
        if (0 < E(X, Ae)) se[U] = Ae, se[ve] = X, ve = U;
        else break e;
      }
    }
    function p(se) {
      return se.length === 0 ? null : se[0];
    }
    function y(se) {
      if (se.length === 0) return null;
      var Ae = se[0], ve = se.pop();
      if (ve !== Ae) {
        se[0] = ve;
        e: for (var U = 0, X = se.length, qe = X >>> 1; U < qe; ) {
          var Ne = 2 * (U + 1) - 1, vt = se[Ne], ht = Ne + 1, kt = se[ht];
          if (0 > E(vt, ve)) ht < X && 0 > E(kt, vt) ? (se[U] = kt, se[ht] = ve, U = ht) : (se[U] = vt, se[Ne] = ve, U = Ne);
          else if (ht < X && 0 > E(kt, ve)) se[U] = kt, se[ht] = ve, U = ht;
          else break e;
        }
      }
      return Ae;
    }
    function E(se, Ae) {
      var ve = se.sortIndex - Ae.sortIndex;
      return ve !== 0 ? ve : se.id - Ae.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var R = performance;
      f.unstable_now = function() {
        return R.now();
      };
    } else {
      var g = Date, L = g.now();
      f.unstable_now = function() {
        return g.now() - L;
      };
    }
    var k = [], A = [], H = 1, M = null, K = 3, W = !1, ue = !1, Be = !1, we = typeof setTimeout == "function" ? setTimeout : null, gt = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Fe(se) {
      for (var Ae = p(A); Ae !== null; ) {
        if (Ae.callback === null) y(A);
        else if (Ae.startTime <= se) y(A), Ae.sortIndex = Ae.expirationTime, u(k, Ae);
        else break;
        Ae = p(A);
      }
    }
    function pt(se) {
      if (Be = !1, Fe(se), !ue) if (p(k) !== null) ue = !0, it(Oe);
      else {
        var Ae = p(A);
        Ae !== null && Re(pt, Ae.startTime - se);
      }
    }
    function Oe(se, Ae) {
      ue = !1, Be && (Be = !1, gt(Gt), Gt = -1), W = !0;
      var ve = K;
      try {
        for (Fe(Ae), M = p(k); M !== null && (!(M.expirationTime > Ae) || se && !Nt()); ) {
          var U = M.callback;
          if (typeof U == "function") {
            M.callback = null, K = M.priorityLevel;
            var X = U(M.expirationTime <= Ae);
            Ae = f.unstable_now(), typeof X == "function" ? M.callback = X : M === p(k) && y(k), Fe(Ae);
          } else y(k);
          M = p(k);
        }
        if (M !== null) var qe = !0;
        else {
          var Ne = p(A);
          Ne !== null && Re(pt, Ne.startTime - Ae), qe = !1;
        }
        return qe;
      } finally {
        M = null, K = ve, W = !1;
      }
    }
    var ut = !1, We = null, Gt = -1, Me = 5, Ht = -1;
    function Nt() {
      return !(f.unstable_now() - Ht < Me);
    }
    function sn() {
      if (We !== null) {
        var se = f.unstable_now();
        Ht = se;
        var Ae = !0;
        try {
          Ae = We(!0, se);
        } finally {
          Ae ? Pe() : (ut = !1, We = null);
        }
      } else ut = !1;
    }
    var Pe;
    if (typeof ge == "function") Pe = function() {
      ge(sn);
    };
    else if (typeof MessageChannel < "u") {
      var rt = new MessageChannel(), Tt = rt.port2;
      rt.port1.onmessage = sn, Pe = function() {
        Tt.postMessage(null);
      };
    } else Pe = function() {
      we(sn, 0);
    };
    function it(se) {
      We = se, ut || (ut = !0, Pe());
    }
    function Re(se, Ae) {
      Gt = we(function() {
        se(f.unstable_now());
      }, Ae);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(se) {
      se.callback = null;
    }, f.unstable_continueExecution = function() {
      ue || W || (ue = !0, it(Oe));
    }, f.unstable_forceFrameRate = function(se) {
      0 > se || 125 < se ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Me = 0 < se ? Math.floor(1e3 / se) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return K;
    }, f.unstable_getFirstCallbackNode = function() {
      return p(k);
    }, f.unstable_next = function(se) {
      switch (K) {
        case 1:
        case 2:
        case 3:
          var Ae = 3;
          break;
        default:
          Ae = K;
      }
      var ve = K;
      K = Ae;
      try {
        return se();
      } finally {
        K = ve;
      }
    }, f.unstable_pauseExecution = function() {
    }, f.unstable_requestPaint = function() {
    }, f.unstable_runWithPriority = function(se, Ae) {
      switch (se) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          se = 3;
      }
      var ve = K;
      K = se;
      try {
        return Ae();
      } finally {
        K = ve;
      }
    }, f.unstable_scheduleCallback = function(se, Ae, ve) {
      var U = f.unstable_now();
      switch (typeof ve == "object" && ve !== null ? (ve = ve.delay, ve = typeof ve == "number" && 0 < ve ? U + ve : U) : ve = U, se) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return X = ve + X, se = { id: H++, callback: Ae, priorityLevel: se, startTime: ve, expirationTime: X, sortIndex: -1 }, ve > U ? (se.sortIndex = ve, u(A, se), p(k) === null && se === p(A) && (Be ? (gt(Gt), Gt = -1) : Be = !0, Re(pt, ve - U))) : (se.sortIndex = X, u(k, se), ue || W || (ue = !0, it(Oe))), se;
    }, f.unstable_shouldYield = Nt, f.unstable_wrapCallback = function(se) {
      var Ae = K;
      return function() {
        var ve = K;
        K = Ae;
        try {
          return se.apply(this, arguments);
        } finally {
          K = ve;
        }
      };
    };
  }(nS)), nS;
}
var rS = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var O1;
function GL() {
  return O1 || (O1 = 1, function(f) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var u = !1, p = !1, y = 5;
      function E(pe, $e) {
        var ft = pe.length;
        pe.push($e), L(pe, $e, ft);
      }
      function R(pe) {
        return pe.length === 0 ? null : pe[0];
      }
      function g(pe) {
        if (pe.length === 0)
          return null;
        var $e = pe[0], ft = pe.pop();
        return ft !== $e && (pe[0] = ft, k(pe, ft, 0)), $e;
      }
      function L(pe, $e, ft) {
        for (var Ft = ft; Ft > 0; ) {
          var jt = Ft - 1 >>> 1, Tn = pe[jt];
          if (A(Tn, $e) > 0)
            pe[jt] = $e, pe[Ft] = Tn, Ft = jt;
          else
            return;
        }
      }
      function k(pe, $e, ft) {
        for (var Ft = ft, jt = pe.length, Tn = jt >>> 1; Ft < Tn; ) {
          var vn = (Ft + 1) * 2 - 1, or = pe[vn], qt = vn + 1, hr = pe[qt];
          if (A(or, $e) < 0)
            qt < jt && A(hr, or) < 0 ? (pe[Ft] = hr, pe[qt] = $e, Ft = qt) : (pe[Ft] = or, pe[vn] = $e, Ft = vn);
          else if (qt < jt && A(hr, $e) < 0)
            pe[Ft] = hr, pe[qt] = $e, Ft = qt;
          else
            return;
        }
      }
      function A(pe, $e) {
        var ft = pe.sortIndex - $e.sortIndex;
        return ft !== 0 ? ft : pe.id - $e.id;
      }
      var H = 1, M = 2, K = 3, W = 4, ue = 5;
      function Be(pe, $e) {
      }
      var we = typeof performance == "object" && typeof performance.now == "function";
      if (we) {
        var gt = performance;
        f.unstable_now = function() {
          return gt.now();
        };
      } else {
        var ge = Date, Fe = ge.now();
        f.unstable_now = function() {
          return ge.now() - Fe;
        };
      }
      var pt = 1073741823, Oe = -1, ut = 250, We = 5e3, Gt = 1e4, Me = pt, Ht = [], Nt = [], sn = 1, Pe = null, rt = K, Tt = !1, it = !1, Re = !1, se = typeof setTimeout == "function" ? setTimeout : null, Ae = typeof clearTimeout == "function" ? clearTimeout : null, ve = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function U(pe) {
        for (var $e = R(Nt); $e !== null; ) {
          if ($e.callback === null)
            g(Nt);
          else if ($e.startTime <= pe)
            g(Nt), $e.sortIndex = $e.expirationTime, E(Ht, $e);
          else
            return;
          $e = R(Nt);
        }
      }
      function X(pe) {
        if (Re = !1, U(pe), !it)
          if (R(Ht) !== null)
            it = !0, Lr(qe);
          else {
            var $e = R(Nt);
            $e !== null && pn(X, $e.startTime - pe);
          }
      }
      function qe(pe, $e) {
        it = !1, Re && (Re = !1, qn()), Tt = !0;
        var ft = rt;
        try {
          var Ft;
          if (!p) return Ne(pe, $e);
        } finally {
          Pe = null, rt = ft, Tt = !1;
        }
      }
      function Ne(pe, $e) {
        var ft = $e;
        for (U(ft), Pe = R(Ht); Pe !== null && !u && !(Pe.expirationTime > ft && (!pe || Dr())); ) {
          var Ft = Pe.callback;
          if (typeof Ft == "function") {
            Pe.callback = null, rt = Pe.priorityLevel;
            var jt = Pe.expirationTime <= ft, Tn = Ft(jt);
            ft = f.unstable_now(), typeof Tn == "function" ? Pe.callback = Tn : Pe === R(Ht) && g(Ht), U(ft);
          } else
            g(Ht);
          Pe = R(Ht);
        }
        if (Pe !== null)
          return !0;
        var vn = R(Nt);
        return vn !== null && pn(X, vn.startTime - ft), !1;
      }
      function vt(pe, $e) {
        switch (pe) {
          case H:
          case M:
          case K:
          case W:
          case ue:
            break;
          default:
            pe = K;
        }
        var ft = rt;
        rt = pe;
        try {
          return $e();
        } finally {
          rt = ft;
        }
      }
      function ht(pe) {
        var $e;
        switch (rt) {
          case H:
          case M:
          case K:
            $e = K;
            break;
          default:
            $e = rt;
            break;
        }
        var ft = rt;
        rt = $e;
        try {
          return pe();
        } finally {
          rt = ft;
        }
      }
      function kt(pe) {
        var $e = rt;
        return function() {
          var ft = rt;
          rt = $e;
          try {
            return pe.apply(this, arguments);
          } finally {
            rt = ft;
          }
        };
      }
      function bt(pe, $e, ft) {
        var Ft = f.unstable_now(), jt;
        if (typeof ft == "object" && ft !== null) {
          var Tn = ft.delay;
          typeof Tn == "number" && Tn > 0 ? jt = Ft + Tn : jt = Ft;
        } else
          jt = Ft;
        var vn;
        switch (pe) {
          case H:
            vn = Oe;
            break;
          case M:
            vn = ut;
            break;
          case ue:
            vn = Me;
            break;
          case W:
            vn = Gt;
            break;
          case K:
          default:
            vn = We;
            break;
        }
        var or = jt + vn, qt = {
          id: sn++,
          callback: $e,
          priorityLevel: pe,
          startTime: jt,
          expirationTime: or,
          sortIndex: -1
        };
        return jt > Ft ? (qt.sortIndex = jt, E(Nt, qt), R(Ht) === null && qt === R(Nt) && (Re ? qn() : Re = !0, pn(X, jt - Ft))) : (qt.sortIndex = or, E(Ht, qt), !it && !Tt && (it = !0, Lr(qe))), qt;
      }
      function St() {
      }
      function en() {
        !it && !Tt && (it = !0, Lr(qe));
      }
      function nr() {
        return R(Ht);
      }
      function rr(pe) {
        pe.callback = null;
      }
      function dn() {
        return rt;
      }
      var zn = !1, Un = null, On = -1, wn = y, _r = -1;
      function Dr() {
        var pe = f.unstable_now() - _r;
        return !(pe < wn);
      }
      function In() {
      }
      function ir(pe) {
        if (pe < 0 || pe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        pe > 0 ? wn = Math.floor(1e3 / pe) : wn = y;
      }
      var Or = function() {
        if (Un !== null) {
          var pe = f.unstable_now();
          _r = pe;
          var $e = !0, ft = !0;
          try {
            ft = Un($e, pe);
          } finally {
            ft ? ar() : (zn = !1, Un = null);
          }
        } else
          zn = !1;
      }, ar;
      if (typeof ve == "function")
        ar = function() {
          ve(Or);
        };
      else if (typeof MessageChannel < "u") {
        var jr = new MessageChannel(), Gn = jr.port2;
        jr.port1.onmessage = Or, ar = function() {
          Gn.postMessage(null);
        };
      } else
        ar = function() {
          se(Or, 0);
        };
      function Lr(pe) {
        Un = pe, zn || (zn = !0, ar());
      }
      function pn(pe, $e) {
        On = se(function() {
          pe(f.unstable_now());
        }, $e);
      }
      function qn() {
        Ae(On), On = -1;
      }
      var Vr = In, vr = null;
      f.unstable_IdlePriority = ue, f.unstable_ImmediatePriority = H, f.unstable_LowPriority = W, f.unstable_NormalPriority = K, f.unstable_Profiling = vr, f.unstable_UserBlockingPriority = M, f.unstable_cancelCallback = rr, f.unstable_continueExecution = en, f.unstable_forceFrameRate = ir, f.unstable_getCurrentPriorityLevel = dn, f.unstable_getFirstCallbackNode = nr, f.unstable_next = ht, f.unstable_pauseExecution = St, f.unstable_requestPaint = Vr, f.unstable_runWithPriority = vt, f.unstable_scheduleCallback = bt, f.unstable_shouldYield = Dr, f.unstable_wrapCallback = kt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(rS)), rS;
}
var L1;
function hT() {
  return L1 || (L1 = 1, process.env.NODE_ENV === "production" ? gy.exports = QL() : gy.exports = GL()), gy.exports;
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
var M1;
function qL() {
  if (M1) return ua;
  M1 = 1;
  var f = Wl, u = hT();
  function p(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var y = /* @__PURE__ */ new Set(), E = {};
  function R(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (E[n] = r, n = 0; n < r.length; n++) y.add(r[n]);
  }
  var L = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, H = {}, M = {};
  function K(n) {
    return k.call(M, n) ? !0 : k.call(H, n) ? !1 : A.test(n) ? M[n] = !0 : (H[n] = !0, !1);
  }
  function W(n, r, o, s) {
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
  function ue(n, r, o, s) {
    if (r === null || typeof r > "u" || W(n, r, o, s)) return !0;
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
  function Be(n, r, o, s, d, h, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = d, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = C;
  }
  var we = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    we[n] = new Be(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    we[r] = new Be(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    we[n] = new Be(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    we[n] = new Be(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    we[n] = new Be(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    we[n] = new Be(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    we[n] = new Be(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    we[n] = new Be(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    we[n] = new Be(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var gt = /[\-:]([a-z])/g;
  function ge(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      gt,
      ge
    );
    we[r] = new Be(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(gt, ge);
    we[r] = new Be(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(gt, ge);
    we[r] = new Be(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    we[n] = new Be(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), we.xlinkHref = new Be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    we[n] = new Be(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Fe(n, r, o, s) {
    var d = we.hasOwnProperty(r) ? we[r] : null;
    (d !== null ? d.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ue(r, o, d, s) && (o = null), s || d === null ? K(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : d.mustUseProperty ? n[d.propertyName] = o === null ? d.type === 3 ? !1 : "" : o : (r = d.attributeName, s = d.attributeNamespace, o === null ? n.removeAttribute(r) : (d = d.type, o = d === 3 || d === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var pt = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oe = Symbol.for("react.element"), ut = Symbol.for("react.portal"), We = Symbol.for("react.fragment"), Gt = Symbol.for("react.strict_mode"), Me = Symbol.for("react.profiler"), Ht = Symbol.for("react.provider"), Nt = Symbol.for("react.context"), sn = Symbol.for("react.forward_ref"), Pe = Symbol.for("react.suspense"), rt = Symbol.for("react.suspense_list"), Tt = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), Re = Symbol.for("react.offscreen"), se = Symbol.iterator;
  function Ae(n) {
    return n === null || typeof n != "object" ? null : (n = se && n[se] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ve = Object.assign, U;
  function X(n) {
    if (U === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      U = r && r[1] || "";
    }
    return `
` + U + n;
  }
  var qe = !1;
  function Ne(n, r) {
    if (!n || qe) return "";
    qe = !0;
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
        } catch (Q) {
          var s = Q;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (Q) {
          s = Q;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (Q) {
          s = Q;
        }
        n();
      }
    } catch (Q) {
      if (Q && s && typeof Q.stack == "string") {
        for (var d = Q.stack.split(`
`), h = s.stack.split(`
`), C = d.length - 1, x = h.length - 1; 1 <= C && 0 <= x && d[C] !== h[x]; ) x--;
        for (; 1 <= C && 0 <= x; C--, x--) if (d[C] !== h[x]) {
          if (C !== 1 || x !== 1)
            do
              if (C--, x--, 0 > x || d[C] !== h[x]) {
                var O = `
` + d[C].replace(" at new ", " at ");
                return n.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", n.displayName)), O;
              }
            while (1 <= C && 0 <= x);
          break;
        }
      }
    } finally {
      qe = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? X(n) : "";
  }
  function vt(n) {
    switch (n.tag) {
      case 5:
        return X(n.type);
      case 16:
        return X("Lazy");
      case 13:
        return X("Suspense");
      case 19:
        return X("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ne(n.type, !1), n;
      case 11:
        return n = Ne(n.type.render, !1), n;
      case 1:
        return n = Ne(n.type, !0), n;
      default:
        return "";
    }
  }
  function ht(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case We:
        return "Fragment";
      case ut:
        return "Portal";
      case Me:
        return "Profiler";
      case Gt:
        return "StrictMode";
      case Pe:
        return "Suspense";
      case rt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Nt:
        return (n.displayName || "Context") + ".Consumer";
      case Ht:
        return (n._context.displayName || "Context") + ".Provider";
      case sn:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Tt:
        return r = n.displayName || null, r !== null ? r : ht(n.type) || "Memo";
      case it:
        r = n._payload, n = n._init;
        try {
          return ht(n(r));
        } catch {
        }
    }
    return null;
  }
  function kt(n) {
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
        return ht(r);
      case 8:
        return r === Gt ? "StrictMode" : "Mode";
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
  function bt(n) {
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
  function St(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function en(n) {
    var r = St(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var d = o.get, h = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return d.call(this);
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
    n._valueTracker || (n._valueTracker = en(n));
  }
  function rr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), s = "";
    return n && (s = St(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
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
    return ve({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Un(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = bt(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function On(n, r) {
    r = r.checked, r != null && Fe(n, "checked", r, !1);
  }
  function wn(n, r) {
    On(n, r);
    var o = bt(r.value), s = r.type;
    if (o != null) s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Dr(n, r.type, o) : r.hasOwnProperty("defaultValue") && Dr(n, r.type, bt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
      for (var d = 0; d < o.length; d++) r["$" + o[d]] = !0;
      for (o = 0; o < n.length; o++) d = r.hasOwnProperty("$" + n[o].value), n[o].selected !== d && (n[o].selected = d), d && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + bt(o), r = null, d = 0; d < n.length; d++) {
        if (n[d].value === o) {
          n[d].selected = !0, s && (n[d].defaultSelected = !0);
          return;
        }
        r !== null || n[d].disabled || (r = n[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Or(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(p(91));
    return ve({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ar(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(p(92));
        if (In(o)) {
          if (1 < o.length) throw Error(p(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: bt(o) };
  }
  function jr(n, r) {
    var o = bt(r.value), s = bt(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function Gn(n) {
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
  var qn, Vr = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, d);
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
  var pe = {
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
  }, $e = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pe).forEach(function(n) {
    $e.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), pe[r] = pe[n];
    });
  });
  function ft(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || pe.hasOwnProperty(n) && pe[n] ? ("" + r).trim() : r + "px";
  }
  function Ft(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var s = o.indexOf("--") === 0, d = ft(o, r[o], s);
      o === "float" && (o = "cssFloat"), s ? n.setProperty(o, d) : n[o] = d;
    }
  }
  var jt = ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Tn(n, r) {
    if (r) {
      if (jt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(p(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(p(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(p(62));
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
  function qt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var hr = null, Vt = null, Pt = null;
  function Ri(n) {
    if (n = ws(n)) {
      if (typeof hr != "function") throw Error(p(280));
      var r = n.stateNode;
      r && (r = Ge(r), hr(n.stateNode, n.type, r));
    }
  }
  function ri(n) {
    Vt ? Pt ? Pt.push(n) : Pt = [n] : Vt = n;
  }
  function Ca() {
    if (Vt) {
      var n = Vt, r = Pt;
      if (Pt = Vt = null, Ri(n), r) for (n = 0; n < r.length; n++) Ri(r[n]);
    }
  }
  function Va(n, r) {
    return n(r);
  }
  function bo() {
  }
  var ii = !1;
  function wa(n, r, o) {
    if (ii) return n(r, o);
    ii = !0;
    try {
      return Va(n, r, o);
    } finally {
      ii = !1, (Vt !== null || Pt !== null) && (bo(), Ca());
    }
  }
  function Mr(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var s = Ge(o);
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
    if (o && typeof o != "function") throw Error(p(231, r, typeof o));
    return o;
  }
  var Ar = !1;
  if (L) try {
    var Nr = {};
    Object.defineProperty(Nr, "passive", { get: function() {
      Ar = !0;
    } }), window.addEventListener("test", Nr, Nr), window.removeEventListener("test", Nr, Nr);
  } catch {
    Ar = !1;
  }
  function bn(n, r, o, s, d, h, C, x, O) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Q);
    } catch (ie) {
      this.onError(ie);
    }
  }
  var mr = !1, Pr = null, Fi = !1, xi = null, D = { onError: function(n) {
    mr = !0, Pr = n;
  } };
  function ne(n, r, o, s, d, h, C, x, O) {
    mr = !1, Pr = null, bn.apply(D, arguments);
  }
  function oe(n, r, o, s, d, h, C, x, O) {
    if (ne.apply(this, arguments), mr) {
      if (mr) {
        var Q = Pr;
        mr = !1, Pr = null;
      } else throw Error(p(198));
      Fi || (Fi = !0, xi = Q);
    }
  }
  function ze(n) {
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
  function Ct(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function _t(n) {
    if (ze(n) !== n) throw Error(p(188));
  }
  function Ye(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ze(n), r === null) throw Error(p(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var d = o.return;
      if (d === null) break;
      var h = d.alternate;
      if (h === null) {
        if (s = d.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (d.child === h.child) {
        for (h = d.child; h; ) {
          if (h === o) return _t(d), n;
          if (h === s) return _t(d), r;
          h = h.sibling;
        }
        throw Error(p(188));
      }
      if (o.return !== s.return) o = d, s = h;
      else {
        for (var C = !1, x = d.child; x; ) {
          if (x === o) {
            C = !0, o = d, s = h;
            break;
          }
          if (x === s) {
            C = !0, s = d, o = h;
            break;
          }
          x = x.sibling;
        }
        if (!C) {
          for (x = h.child; x; ) {
            if (x === o) {
              C = !0, o = h, s = d;
              break;
            }
            if (x === s) {
              C = !0, s = h, o = d;
              break;
            }
            x = x.sibling;
          }
          if (!C) throw Error(p(189));
        }
      }
      if (o.alternate !== s) throw Error(p(190));
    }
    if (o.tag !== 3) throw Error(p(188));
    return o.stateNode.current === o ? n : r;
  }
  function Et(n) {
    return n = Ye(n), n !== null ? Hn(n) : null;
  }
  function Hn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Hn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var P = u.unstable_scheduleCallback, fe = u.unstable_cancelCallback, Qe = u.unstable_shouldYield, It = u.unstable_requestPaint, at = u.unstable_now, tn = u.unstable_getCurrentPriorityLevel, Rn = u.unstable_ImmediatePriority, wt = u.unstable_UserBlockingPriority, ji = u.unstable_NormalPriority, So = u.unstable_LowPriority, Ql = u.unstable_IdlePriority, Eo = null, ai = null;
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
    var s = 0, d = n.suspendedLanes, h = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var x = C & ~d;
      x !== 0 ? s = fa(x) : (h &= C, h !== 0 && (s = fa(h)));
    } else C = o & ~d, C !== 0 ? s = fa(C) : h !== 0 && (s = fa(h));
    if (s === 0) return 0;
    if (r !== 0 && r !== s && !(r & d) && (d = s & -s, h = r & -r, d >= h || d === 16 && (h & 4194240) !== 0)) return r;
    if (s & 4 && (s |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= s; 0 < r; ) o = 31 - Ir(r), d = 1 << o, s |= n[o], r &= ~d;
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
    for (var o = n.suspendedLanes, s = n.pingedLanes, d = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var C = 31 - Ir(h), x = 1 << C, O = d[C];
      O === -1 ? (!(x & o) || x & s) && (d[C] = wo(x, r)) : O <= r && (n.expiredLanes |= x), h &= ~x;
    }
  }
  function Ro(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ql() {
    var n = Gl;
    return Gl <<= 1, !(Gl & 4194240) && (Gl = 64), n;
  }
  function Kl(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Pa(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ir(r), n[r] = o;
  }
  function pd(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var d = 31 - Ir(o), h = 1 << d;
      r[d] = 0, s[d] = -1, n[d] = -1, o &= ~h;
    }
  }
  function Ta(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - Ir(o), d = 1 << s;
      d & r | n[s] & r && (n[s] |= r), o &= ~d;
    }
  }
  var Bt = 0;
  function Xl(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nl, Zl, Lt, Jl, eu, st = !1, rl = [], xn = null, oi = null, Wr = null, xo = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), Xt = [], mc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
  function lr(n, r, o, s, d, h) {
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: h, targetContainers: [d] }, r !== null && (r = ws(r), r !== null && Zl(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), n);
  }
  function Ra(n, r, o, s, d) {
    switch (r) {
      case "focusin":
        return xn = lr(xn, n, r, o, s, d), !0;
      case "dragenter":
        return oi = lr(oi, n, r, o, s, d), !0;
      case "mouseover":
        return Wr = lr(Wr, n, r, o, s, d), !0;
      case "pointerover":
        var h = d.pointerId;
        return xo.set(h, lr(xo.get(h) || null, n, r, o, s, d)), !0;
      case "gotpointercapture":
        return h = d.pointerId, Ln.set(h, lr(Ln.get(h) || null, n, r, o, s, d)), !0;
    }
    return !1;
  }
  function yc(n) {
    var r = Bi(n.target);
    if (r !== null) {
      var o = ze(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Ct(o), r !== null) {
            n.blockedOn = r, eu(n.priority, function() {
              Lt(o);
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
    st = !1, xn !== null && Ia(xn) && (xn = null), oi !== null && Ia(oi) && (oi = null), Wr !== null && Ia(Wr) && (Wr = null), xo.forEach(ko), Ln.forEach(ko);
  }
  function Vi(n, r) {
    n.blockedOn === r && (n.blockedOn = null, st || (st = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, gc)));
  }
  function _o(n) {
    function r(d) {
      return Vi(d, n);
    }
    if (0 < rl.length) {
      Vi(rl[0], n);
      for (var o = 1; o < rl.length; o++) {
        var s = rl[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (xn !== null && Vi(xn, n), oi !== null && Vi(oi, n), Wr !== null && Vi(Wr, n), xo.forEach(r), Ln.forEach(r), o = 0; o < Xt.length; o++) s = Xt[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < Xt.length && (o = Xt[0], o.blockedOn === null); ) yc(o), o.blockedOn === null && Xt.shift();
  }
  var Ba = pt.ReactCurrentBatchConfig, Pi = !0;
  function tu(n, r, o, s) {
    var d = Bt, h = Ba.transition;
    Ba.transition = null;
    try {
      Bt = 1, Oo(n, r, o, s);
    } finally {
      Bt = d, Ba.transition = h;
    }
  }
  function Do(n, r, o, s) {
    var d = Bt, h = Ba.transition;
    Ba.transition = null;
    try {
      Bt = 4, Oo(n, r, o, s);
    } finally {
      Bt = d, Ba.transition = h;
    }
  }
  function Oo(n, r, o, s) {
    if (Pi) {
      var d = nu(n, r, o, s);
      if (d === null) kc(n, r, s, il, o), li(n, s);
      else if (Ra(d, n, r, o, s)) s.stopPropagation();
      else if (li(n, s), r & 4 && -1 < mc.indexOf(n)) {
        for (; d !== null; ) {
          var h = ws(d);
          if (h !== null && nl(h), h = nu(n, r, o, s), h === null && kc(n, r, s, il, o), h === d) break;
          d = h;
        }
        d !== null && s.stopPropagation();
      } else kc(n, r, s, null, o);
    }
  }
  var il = null;
  function nu(n, r, o, s) {
    if (il = null, n = qt(s), n = Bi(n), n !== null) if (r = ze(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = Ct(r), n !== null) return n;
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
        switch (tn()) {
          case Rn:
            return 1;
          case wt:
            return 4;
          case ji:
          case So:
            return 16;
          case Ql:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var da = null, S = null, _ = null;
  function Y() {
    if (_) return _;
    var n, r = S, o = r.length, s, d = "value" in da ? da.value : da.textContent, h = d.length;
    for (n = 0; n < o && r[n] === d[n]; n++) ;
    var C = o - n;
    for (s = 1; s <= C && r[o - s] === d[h - s]; s++) ;
    return _ = d.slice(n, 1 < s ? 1 - s : void 0);
  }
  function q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ce() {
    return !0;
  }
  function Ze() {
    return !1;
  }
  function ye(n) {
    function r(o, s, d, h, C) {
      this._reactName = o, this._targetInst = d, this.type = s, this.nativeEvent = h, this.target = C, this.currentTarget = null;
      for (var x in n) n.hasOwnProperty(x) && (o = n[x], this[x] = o ? o(h) : h[x]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? ce : Ze, this.isPropagationStopped = Ze, this;
    }
    return ve(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ce);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ce);
    }, persist: function() {
    }, isPersistent: ce }), r;
  }
  var Xe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Rt = ye(Xe), Ut = ve({}, Xe, { view: 0, detail: 0 }), on = ye(Ut), nn, ln, cn, Mt = ve({}, Ut, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== cn && (cn && n.type === "mousemove" ? (nn = n.screenX - cn.screenX, ln = n.screenY - cn.screenY) : ln = nn = 0, cn = n), nn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ln;
  } }), Wa = ye(Mt), ru = ve({}, Mt, { dataTransfer: 0 }), cs = ye(ru), vd = ve({}, Ut, { relatedTarget: 0 }), pa = ye(vd), fs = ve({}, Xe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ds = ye(fs), hd = ve({}, Xe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Dy = ye(hd), Oy = ve({}, Xe, { data: 0 }), md = ye(Oy), yd = {
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
  }, xv = {
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
  }, kv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function _v(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = kv[n]) ? !!r[n] : !1;
  }
  function gd() {
    return _v;
  }
  var Ya = ve({}, Ut, { key: function(n) {
    if (n.key) {
      var r = yd[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? xv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gd, charCode: function(n) {
    return n.type === "keypress" ? q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ly = ye(Ya), bd = ve({}, Mt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bc = ye(bd), Sd = ve({}, Ut, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gd }), My = ye(Sd), Sc = ve({}, Xe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Dv = ye(Sc), ui = ve({}, Mt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qa = ye(ui), Bn = [9, 13, 27, 32], va = L && "CompositionEvent" in window, al = null;
  L && "documentMode" in document && (al = document.documentMode);
  var Ec = L && "TextEvent" in window && !al, Ov = L && (!va || al && 8 < al && 11 >= al), iu = " ", Lv = !1;
  function Mv(n, r) {
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
  function Ay(n, r) {
    switch (n) {
      case "compositionend":
        return Cc(r);
      case "keypress":
        return r.which !== 32 ? null : (Lv = !0, iu);
      case "textInput":
        return n = r.data, n === iu && Lv ? null : n;
      default:
        return null;
    }
  }
  function Ny(n, r) {
    if (au) return n === "compositionend" || !va && Mv(n, r) ? (n = Y(), _ = S = da = null, au = !1, n) : null;
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
        return Ov && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Av = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Nv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Av[n.type] : r === "textarea";
  }
  function $v(n, r, o, s) {
    ri(s), r = Ss(r, "onChange"), 0 < r.length && (o = new Rt("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var ps = null, ou = null;
  function lu(n) {
    xc(n, 0);
  }
  function uu(n) {
    var r = cu(n);
    if (rr(r)) return n;
  }
  function zv(n, r) {
    if (n === "change") return r;
  }
  var Ed = !1;
  if (L) {
    var Cd;
    if (L) {
      var wd = "oninput" in document;
      if (!wd) {
        var Uv = document.createElement("div");
        Uv.setAttribute("oninput", "return;"), wd = typeof Uv.oninput == "function";
      }
      Cd = wd;
    } else Cd = !1;
    Ed = Cd && (!document.documentMode || 9 < document.documentMode);
  }
  function Hv() {
    ps && (ps.detachEvent("onpropertychange", Fv), ou = ps = null);
  }
  function Fv(n) {
    if (n.propertyName === "value" && uu(ou)) {
      var r = [];
      $v(r, ou, n, qt(n)), wa(lu, r);
    }
  }
  function $y(n, r, o) {
    n === "focusin" ? (Hv(), ps = r, ou = o, ps.attachEvent("onpropertychange", Fv)) : n === "focusout" && Hv();
  }
  function zy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return uu(ou);
  }
  function Uy(n, r) {
    if (n === "click") return uu(r);
  }
  function jv(n, r) {
    if (n === "input" || n === "change") return uu(r);
  }
  function Hy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ii = typeof Object.is == "function" ? Object.is : Hy;
  function vs(n, r) {
    if (Ii(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length) return !1;
    for (s = 0; s < o.length; s++) {
      var d = o[s];
      if (!k.call(r, d) || !Ii(n[d], r[d])) return !1;
    }
    return !0;
  }
  function Vv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Pv(n, r) {
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
  function Iv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Iv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
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
  function Ga(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Tc(n) {
    var r = wc(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Iv(o.ownerDocument.documentElement, o)) {
      if (s !== null && Ga(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var d = o.textContent.length, h = Math.min(s.start, d);
          s = s.end === void 0 ? h : Math.min(s.end, d), !n.extend && h > s && (d = s, s = h, h = d), d = Pv(o, h);
          var C = Pv(
            o,
            s
          );
          d && C && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), n.removeAllRanges(), h > s ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Bv = L && "documentMode" in document && 11 >= document.documentMode, ha = null, Td = null, hs = null, Rd = !1;
  function Wv(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Rd || ha == null || ha !== dn(s) || (s = ha, "selectionStart" in s && Ga(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), hs && vs(hs, s) || (hs = s, s = Ss(Td, "onSelect"), 0 < s.length && (r = new Rt("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = ha)));
  }
  function Rc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var ol = { animationend: Rc("Animation", "AnimationEnd"), animationiteration: Rc("Animation", "AnimationIteration"), animationstart: Rc("Animation", "AnimationStart"), transitionend: Rc("Transition", "TransitionEnd") }, xd = {}, kd = {};
  L && (kd = document.createElement("div").style, "AnimationEvent" in window || (delete ol.animationend.animation, delete ol.animationiteration.animation, delete ol.animationstart.animation), "TransitionEvent" in window || delete ol.transitionend.transition);
  function ur(n) {
    if (xd[n]) return xd[n];
    if (!ol[n]) return n;
    var r = ol[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in kd) return xd[n] = r[o];
    return n;
  }
  var _d = ur("animationend"), Yv = ur("animationiteration"), Qv = ur("animationstart"), Gv = ur("transitionend"), qv = /* @__PURE__ */ new Map(), Kv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function qa(n, r) {
    qv.set(n, r), R(r, [n]);
  }
  for (var ms = 0; ms < Kv.length; ms++) {
    var ll = Kv[ms], Fy = ll.toLowerCase(), ys = ll[0].toUpperCase() + ll.slice(1);
    qa(Fy, "on" + ys);
  }
  qa(_d, "onAnimationEnd"), qa(Yv, "onAnimationIteration"), qa(Qv, "onAnimationStart"), qa("dblclick", "onDoubleClick"), qa("focusin", "onFocus"), qa("focusout", "onBlur"), qa(Gv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), R("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), R("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), R("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), R("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jy = new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));
  function Xv(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, oe(s, r, void 0, n), n.currentTarget = null;
  }
  function xc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], d = s.event;
      s = s.listeners;
      e: {
        var h = void 0;
        if (r) for (var C = s.length - 1; 0 <= C; C--) {
          var x = s[C], O = x.instance, Q = x.currentTarget;
          if (x = x.listener, O !== h && d.isPropagationStopped()) break e;
          Xv(d, x, Q), h = O;
        }
        else for (C = 0; C < s.length; C++) {
          if (x = s[C], O = x.instance, Q = x.currentTarget, x = x.listener, O !== h && d.isPropagationStopped()) break e;
          Xv(d, x, Q), h = O;
        }
      }
    }
    if (Fi) throw n = xi, Fi = !1, xi = null, n;
  }
  function un(n, r) {
    var o = r[$d];
    o === void 0 && (o = r[$d] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (Zv(r, n, 2, !1), o.add(s));
  }
  function Lo(n, r, o) {
    var s = 0;
    r && (s |= 4), Zv(o, n, s, r);
  }
  var Ka = "_reactListening" + Math.random().toString(36).slice(2);
  function su(n) {
    if (!n[Ka]) {
      n[Ka] = !0, y.forEach(function(o) {
        o !== "selectionchange" && (jy.has(o) || Lo(o, !1, n), Lo(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ka] || (r[Ka] = !0, Lo("selectionchange", !1, r));
    }
  }
  function Zv(n, r, o, s) {
    switch (ss(r)) {
      case 1:
        var d = tu;
        break;
      case 4:
        d = Do;
        break;
      default:
        d = Oo;
    }
    o = d.bind(null, r, o, n), d = void 0, !Ar || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), s ? d !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: d }) : n.addEventListener(r, o, !0) : d !== void 0 ? n.addEventListener(r, o, { passive: d }) : n.addEventListener(r, o, !1);
  }
  function kc(n, r, o, s, d) {
    var h = s;
    if (!(r & 1) && !(r & 2) && s !== null) e: for (; ; ) {
      if (s === null) return;
      var C = s.tag;
      if (C === 3 || C === 4) {
        var x = s.stateNode.containerInfo;
        if (x === d || x.nodeType === 8 && x.parentNode === d) break;
        if (C === 4) for (C = s.return; C !== null; ) {
          var O = C.tag;
          if ((O === 3 || O === 4) && (O = C.stateNode.containerInfo, O === d || O.nodeType === 8 && O.parentNode === d)) return;
          C = C.return;
        }
        for (; x !== null; ) {
          if (C = Bi(x), C === null) return;
          if (O = C.tag, O === 5 || O === 6) {
            s = h = C;
            continue e;
          }
          x = x.parentNode;
        }
      }
      s = s.return;
    }
    wa(function() {
      var Q = h, ie = qt(o), ae = [];
      e: {
        var re = qv.get(n);
        if (re !== void 0) {
          var Ee = Rt, ke = n;
          switch (n) {
            case "keypress":
              if (q(o) === 0) break e;
            case "keydown":
            case "keyup":
              Ee = Ly;
              break;
            case "focusin":
              ke = "focus", Ee = pa;
              break;
            case "focusout":
              ke = "blur", Ee = pa;
              break;
            case "beforeblur":
            case "afterblur":
              Ee = pa;
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
              Ee = Wa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ee = cs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ee = My;
              break;
            case _d:
            case Yv:
            case Qv:
              Ee = ds;
              break;
            case Gv:
              Ee = Dv;
              break;
            case "scroll":
              Ee = on;
              break;
            case "wheel":
              Ee = Qa;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ee = Dy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ee = bc;
          }
          var Le = (r & 4) !== 0, Vn = !Le && n === "scroll", F = Le ? re !== null ? re + "Capture" : null : re;
          Le = [];
          for (var $ = Q, I; $ !== null; ) {
            I = $;
            var de = I.stateNode;
            if (I.tag === 5 && de !== null && (I = de, F !== null && (de = Mr($, F), de != null && Le.push(bs($, de, I)))), Vn) break;
            $ = $.return;
          }
          0 < Le.length && (re = new Ee(re, ke, null, o, ie), ae.push({ event: re, listeners: Le }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (re = n === "mouseover" || n === "pointerover", Ee = n === "mouseout" || n === "pointerout", re && o !== or && (ke = o.relatedTarget || o.fromElement) && (Bi(ke) || ke[Xa])) break e;
          if ((Ee || re) && (re = ie.window === ie ? ie : (re = ie.ownerDocument) ? re.defaultView || re.parentWindow : window, Ee ? (ke = o.relatedTarget || o.toElement, Ee = Q, ke = ke ? Bi(ke) : null, ke !== null && (Vn = ze(ke), ke !== Vn || ke.tag !== 5 && ke.tag !== 6) && (ke = null)) : (Ee = null, ke = Q), Ee !== ke)) {
            if (Le = Wa, de = "onMouseLeave", F = "onMouseEnter", $ = "mouse", (n === "pointerout" || n === "pointerover") && (Le = bc, de = "onPointerLeave", F = "onPointerEnter", $ = "pointer"), Vn = Ee == null ? re : cu(Ee), I = ke == null ? re : cu(ke), re = new Le(de, $ + "leave", Ee, o, ie), re.target = Vn, re.relatedTarget = I, de = null, Bi(ie) === Q && (Le = new Le(F, $ + "enter", ke, o, ie), Le.target = I, Le.relatedTarget = Vn, de = Le), Vn = de, Ee && ke) t: {
              for (Le = Ee, F = ke, $ = 0, I = Le; I; I = ul(I)) $++;
              for (I = 0, de = F; de; de = ul(de)) I++;
              for (; 0 < $ - I; ) Le = ul(Le), $--;
              for (; 0 < I - $; ) F = ul(F), I--;
              for (; $--; ) {
                if (Le === F || F !== null && Le === F.alternate) break t;
                Le = ul(Le), F = ul(F);
              }
              Le = null;
            }
            else Le = null;
            Ee !== null && Dd(ae, re, Ee, Le, !1), ke !== null && Vn !== null && Dd(ae, Vn, ke, Le, !0);
          }
        }
        e: {
          if (re = Q ? cu(Q) : window, Ee = re.nodeName && re.nodeName.toLowerCase(), Ee === "select" || Ee === "input" && re.type === "file") var He = zv;
          else if (Nv(re)) if (Ed) He = jv;
          else {
            He = zy;
            var Je = $y;
          }
          else (Ee = re.nodeName) && Ee.toLowerCase() === "input" && (re.type === "checkbox" || re.type === "radio") && (He = Uy);
          if (He && (He = He(n, Q))) {
            $v(ae, He, o, ie);
            break e;
          }
          Je && Je(n, re, Q), n === "focusout" && (Je = re._wrapperState) && Je.controlled && re.type === "number" && Dr(re, "number", re.value);
        }
        switch (Je = Q ? cu(Q) : window, n) {
          case "focusin":
            (Nv(Je) || Je.contentEditable === "true") && (ha = Je, Td = Q, hs = null);
            break;
          case "focusout":
            hs = Td = ha = null;
            break;
          case "mousedown":
            Rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rd = !1, Wv(ae, o, ie);
            break;
          case "selectionchange":
            if (Bv) break;
          case "keydown":
          case "keyup":
            Wv(ae, o, ie);
        }
        var _e;
        if (va) e: {
          switch (n) {
            case "compositionstart":
              var tt = "onCompositionStart";
              break e;
            case "compositionend":
              tt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              tt = "onCompositionUpdate";
              break e;
          }
          tt = void 0;
        }
        else au ? Mv(n, o) && (tt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (tt = "onCompositionStart");
        tt && (Ov && o.locale !== "ko" && (au || tt !== "onCompositionStart" ? tt === "onCompositionEnd" && au && (_e = Y()) : (da = ie, S = "value" in da ? da.value : da.textContent, au = !0)), Je = Ss(Q, tt), 0 < Je.length && (tt = new md(tt, n, null, o, ie), ae.push({ event: tt, listeners: Je }), _e ? tt.data = _e : (_e = Cc(o), _e !== null && (tt.data = _e)))), (_e = Ec ? Ay(n, o) : Ny(n, o)) && (Q = Ss(Q, "onBeforeInput"), 0 < Q.length && (ie = new md("onBeforeInput", "beforeinput", null, o, ie), ae.push({ event: ie, listeners: Q }), ie.data = _e));
      }
      xc(ae, r);
    });
  }
  function bs(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Ss(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var d = n, h = d.stateNode;
      d.tag === 5 && h !== null && (d = h, h = Mr(n, o), h != null && s.unshift(bs(n, h, d)), h = Mr(n, r), h != null && s.push(bs(n, h, d))), n = n.return;
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
  function Dd(n, r, o, s, d) {
    for (var h = r._reactName, C = []; o !== null && o !== s; ) {
      var x = o, O = x.alternate, Q = x.stateNode;
      if (O !== null && O === s) break;
      x.tag === 5 && Q !== null && (x = Q, d ? (O = Mr(o, h), O != null && C.unshift(bs(o, O, x))) : d || (O = Mr(o, h), O != null && C.push(bs(o, O, x)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Od = /\r\n?/g, Vy = /\u0000|\uFFFD/g;
  function Ld(n) {
    return (typeof n == "string" ? n : "" + n).replace(Od, `
`).replace(Vy, "");
  }
  function _c(n, r, o) {
    if (r = Ld(r), Ld(n) !== r && o) throw Error(p(425));
  }
  function Dc() {
  }
  var Md = null, sl = null;
  function Es(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var cl = typeof setTimeout == "function" ? setTimeout : void 0, Jv = typeof clearTimeout == "function" ? clearTimeout : void 0, Ad = typeof Promise == "function" ? Promise : void 0, Nd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ad < "u" ? function(n) {
    return Ad.resolve(null).then(n).catch(Py);
  } : cl;
  function Py(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Mo(n, r) {
    var o = r, s = 0;
    do {
      var d = o.nextSibling;
      if (n.removeChild(o), d && d.nodeType === 8) if (o = d.data, o === "/$") {
        if (s === 0) {
          n.removeChild(d), _o(r);
          return;
        }
        s--;
      } else o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = d;
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
  var Ao = Math.random().toString(36).slice(2), xa = "__reactFiber$" + Ao, fl = "__reactProps$" + Ao, Xa = "__reactContainer$" + Ao, $d = "__reactEvents$" + Ao, Iy = "__reactListeners$" + Ao, zd = "__reactHandles$" + Ao;
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
    throw Error(p(33));
  }
  function Ge(n) {
    return n[fl] || null;
  }
  var No = [], hn = -1;
  function yt(n) {
    return { current: n };
  }
  function Kt(n) {
    0 > hn || (n.current = No[hn], No[hn] = null, hn--);
  }
  function Zt(n, r) {
    hn++, No[hn] = n.current, n.current = r;
  }
  var ka = {}, ot = yt(ka), Mn = yt(!1), si = ka;
  function Wi(n, r) {
    var o = n.type.contextTypes;
    if (!o) return ka;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r) return s.__reactInternalMemoizedMaskedChildContext;
    var d = {}, h;
    for (h in o) d[h] = r[h];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function Sn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Yi() {
    Kt(Mn), Kt(ot);
  }
  function $o(n, r, o) {
    if (ot.current !== ka) throw Error(p(168));
    Zt(ot, r), Zt(Mn, o);
  }
  function Ts(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function") return o;
    s = s.getChildContext();
    for (var d in s) if (!(d in r)) throw Error(p(108, kt(n) || "Unknown", d));
    return ve({}, o, s);
  }
  function Oc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ka, si = ot.current, Zt(ot, n), Zt(Mn, Mn.current), !0;
  }
  function eh(n, r, o) {
    var s = n.stateNode;
    if (!s) throw Error(p(169));
    o ? (n = Ts(n, r, si), s.__reactInternalMemoizedMergedChildContext = n, Kt(Mn), Kt(ot), Zt(ot, n)) : Kt(Mn), Zt(Mn, o);
  }
  var ki = null, sr = !1, Rs = !1;
  function Ud(n) {
    ki === null ? ki = [n] : ki.push(n);
  }
  function Hd(n) {
    sr = !0, Ud(n);
  }
  function ci() {
    if (!Rs && ki !== null) {
      Rs = !0;
      var n = 0, r = Bt;
      try {
        var o = ki;
        for (Bt = 1; n < o.length; n++) {
          var s = o[n];
          do
            s = s(!0);
          while (s !== null);
        }
        ki = null, sr = !1;
      } catch (d) {
        throw ki !== null && (ki = ki.slice(n + 1)), P(Rn, ci), d;
      } finally {
        Bt = r, Rs = !1;
      }
    }
    return null;
  }
  var zo = [], fi = 0, dl = null, fu = 0, di = [], $r = 0, Qi = null, yr = 1, Za = "";
  function _i(n, r) {
    zo[fi++] = fu, zo[fi++] = dl, dl = n, fu = r;
  }
  function Fd(n, r, o) {
    di[$r++] = yr, di[$r++] = Za, di[$r++] = Qi, Qi = n;
    var s = yr;
    n = Za;
    var d = 32 - Ir(s) - 1;
    s &= ~(1 << d), o += 1;
    var h = 32 - Ir(r) + d;
    if (30 < h) {
      var C = d - d % 5;
      h = (s & (1 << C) - 1).toString(32), s >>= C, d -= C, yr = 1 << 32 - Ir(r) + d | o << d | s, Za = h + n;
    } else yr = 1 << h | o << d | s, Za = n;
  }
  function Lc(n) {
    n.return !== null && (_i(n, 1), Fd(n, 1, 0));
  }
  function jd(n) {
    for (; n === dl; ) dl = zo[--fi], zo[fi] = null, fu = zo[--fi], zo[fi] = null;
    for (; n === Qi; ) Qi = di[--$r], di[$r] = null, Za = di[--$r], di[$r] = null, yr = di[--$r], di[$r] = null;
  }
  var Di = null, pi = null, mn = !1, Gi = null;
  function Vd(n, r) {
    var o = na(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function th(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Di = n, pi = ma(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Di = n, pi = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Qi !== null ? { id: yr, overflow: Za } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = na(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Di = n, pi = null, !0) : !1;
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
        if (!th(n, r)) {
          if (Mc(n)) throw Error(p(418));
          r = ma(o.nextSibling);
          var s = Di;
          r && th(n, r) ? Vd(s, o) : (n.flags = n.flags & -4097 | 2, mn = !1, Di = n);
        }
      } else {
        if (Mc(n)) throw Error(p(418));
        n.flags = n.flags & -4097 | 2, mn = !1, Di = n;
      }
    }
  }
  function nh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Di = n;
  }
  function Nc(n) {
    if (n !== Di) return !1;
    if (!mn) return nh(n), mn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Es(n.type, n.memoizedProps)), r && (r = pi)) {
      if (Mc(n)) throw rh(), Error(p(418));
      for (; r; ) Vd(n, r), r = ma(r.nextSibling);
    }
    if (nh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(p(317));
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
  function rh() {
    for (var n = pi; n; ) n = ma(n.nextSibling);
  }
  function kn() {
    pi = Di = null, mn = !1;
  }
  function Pd(n) {
    Gi === null ? Gi = [n] : Gi.push(n);
  }
  var $c = pt.ReactCurrentBatchConfig;
  function pl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(p(309));
          var s = o.stateNode;
        }
        if (!s) throw Error(p(147, n));
        var d = s, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(C) {
          var x = d.refs;
          C === null ? delete x[h] : x[h] = C;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string") throw Error(p(284));
      if (!o._owner) throw Error(p(290, n));
    }
    return n;
  }
  function _a(n, r) {
    throw n = Object.prototype.toString.call(r), Error(p(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function ih(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zc(n) {
    function r(F, $) {
      if (n) {
        var I = F.deletions;
        I === null ? (F.deletions = [$], F.flags |= 16) : I.push($);
      }
    }
    function o(F, $) {
      if (!n) return null;
      for (; $ !== null; ) r(F, $), $ = $.sibling;
      return null;
    }
    function s(F, $) {
      for (F = /* @__PURE__ */ new Map(); $ !== null; ) $.key !== null ? F.set($.key, $) : F.set($.index, $), $ = $.sibling;
      return F;
    }
    function d(F, $) {
      return F = Bo(F, $), F.index = 0, F.sibling = null, F;
    }
    function h(F, $, I) {
      return F.index = I, n ? (I = F.alternate, I !== null ? (I = I.index, I < $ ? (F.flags |= 2, $) : I) : (F.flags |= 2, $)) : (F.flags |= 1048576, $);
    }
    function C(F) {
      return n && F.alternate === null && (F.flags |= 2), F;
    }
    function x(F, $, I, de) {
      return $ === null || $.tag !== 6 ? ($ = Tf(I, F.mode, de), $.return = F, $) : ($ = d($, I), $.return = F, $);
    }
    function O(F, $, I, de) {
      var He = I.type;
      return He === We ? ie(F, $, I.props.children, de, I.key) : $ !== null && ($.elementType === He || typeof He == "object" && He !== null && He.$$typeof === it && ih(He) === $.type) ? (de = d($, I.props), de.ref = pl(F, $, I), de.return = F, de) : (de = Cf(I.type, I.key, I.props, null, F.mode, de), de.ref = pl(F, $, I), de.return = F, de);
    }
    function Q(F, $, I, de) {
      return $ === null || $.tag !== 4 || $.stateNode.containerInfo !== I.containerInfo || $.stateNode.implementation !== I.implementation ? ($ = Is(I, F.mode, de), $.return = F, $) : ($ = d($, I.children || []), $.return = F, $);
    }
    function ie(F, $, I, de, He) {
      return $ === null || $.tag !== 7 ? ($ = _l(I, F.mode, de, He), $.return = F, $) : ($ = d($, I), $.return = F, $);
    }
    function ae(F, $, I) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number") return $ = Tf("" + $, F.mode, I), $.return = F, $;
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case Oe:
            return I = Cf($.type, $.key, $.props, null, F.mode, I), I.ref = pl(F, null, $), I.return = F, I;
          case ut:
            return $ = Is($, F.mode, I), $.return = F, $;
          case it:
            var de = $._init;
            return ae(F, de($._payload), I);
        }
        if (In($) || Ae($)) return $ = _l($, F.mode, I, null), $.return = F, $;
        _a(F, $);
      }
      return null;
    }
    function re(F, $, I, de) {
      var He = $ !== null ? $.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number") return He !== null ? null : x(F, $, "" + I, de);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Oe:
            return I.key === He ? O(F, $, I, de) : null;
          case ut:
            return I.key === He ? Q(F, $, I, de) : null;
          case it:
            return He = I._init, re(
              F,
              $,
              He(I._payload),
              de
            );
        }
        if (In(I) || Ae(I)) return He !== null ? null : ie(F, $, I, de, null);
        _a(F, I);
      }
      return null;
    }
    function Ee(F, $, I, de, He) {
      if (typeof de == "string" && de !== "" || typeof de == "number") return F = F.get(I) || null, x($, F, "" + de, He);
      if (typeof de == "object" && de !== null) {
        switch (de.$$typeof) {
          case Oe:
            return F = F.get(de.key === null ? I : de.key) || null, O($, F, de, He);
          case ut:
            return F = F.get(de.key === null ? I : de.key) || null, Q($, F, de, He);
          case it:
            var Je = de._init;
            return Ee(F, $, I, Je(de._payload), He);
        }
        if (In(de) || Ae(de)) return F = F.get(I) || null, ie($, F, de, He, null);
        _a($, de);
      }
      return null;
    }
    function ke(F, $, I, de) {
      for (var He = null, Je = null, _e = $, tt = $ = 0, er = null; _e !== null && tt < I.length; tt++) {
        _e.index > tt ? (er = _e, _e = null) : er = _e.sibling;
        var Wt = re(F, _e, I[tt], de);
        if (Wt === null) {
          _e === null && (_e = er);
          break;
        }
        n && _e && Wt.alternate === null && r(F, _e), $ = h(Wt, $, tt), Je === null ? He = Wt : Je.sibling = Wt, Je = Wt, _e = er;
      }
      if (tt === I.length) return o(F, _e), mn && _i(F, tt), He;
      if (_e === null) {
        for (; tt < I.length; tt++) _e = ae(F, I[tt], de), _e !== null && ($ = h(_e, $, tt), Je === null ? He = _e : Je.sibling = _e, Je = _e);
        return mn && _i(F, tt), He;
      }
      for (_e = s(F, _e); tt < I.length; tt++) er = Ee(_e, F, tt, I[tt], de), er !== null && (n && er.alternate !== null && _e.delete(er.key === null ? tt : er.key), $ = h(er, $, tt), Je === null ? He = er : Je.sibling = er, Je = er);
      return n && _e.forEach(function(ao) {
        return r(F, ao);
      }), mn && _i(F, tt), He;
    }
    function Le(F, $, I, de) {
      var He = Ae(I);
      if (typeof He != "function") throw Error(p(150));
      if (I = He.call(I), I == null) throw Error(p(151));
      for (var Je = He = null, _e = $, tt = $ = 0, er = null, Wt = I.next(); _e !== null && !Wt.done; tt++, Wt = I.next()) {
        _e.index > tt ? (er = _e, _e = null) : er = _e.sibling;
        var ao = re(F, _e, Wt.value, de);
        if (ao === null) {
          _e === null && (_e = er);
          break;
        }
        n && _e && ao.alternate === null && r(F, _e), $ = h(ao, $, tt), Je === null ? He = ao : Je.sibling = ao, Je = ao, _e = er;
      }
      if (Wt.done) return o(
        F,
        _e
      ), mn && _i(F, tt), He;
      if (_e === null) {
        for (; !Wt.done; tt++, Wt = I.next()) Wt = ae(F, Wt.value, de), Wt !== null && ($ = h(Wt, $, tt), Je === null ? He = Wt : Je.sibling = Wt, Je = Wt);
        return mn && _i(F, tt), He;
      }
      for (_e = s(F, _e); !Wt.done; tt++, Wt = I.next()) Wt = Ee(_e, F, tt, Wt.value, de), Wt !== null && (n && Wt.alternate !== null && _e.delete(Wt.key === null ? tt : Wt.key), $ = h(Wt, $, tt), Je === null ? He = Wt : Je.sibling = Wt, Je = Wt);
      return n && _e.forEach(function(lg) {
        return r(F, lg);
      }), mn && _i(F, tt), He;
    }
    function Vn(F, $, I, de) {
      if (typeof I == "object" && I !== null && I.type === We && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Oe:
            e: {
              for (var He = I.key, Je = $; Je !== null; ) {
                if (Je.key === He) {
                  if (He = I.type, He === We) {
                    if (Je.tag === 7) {
                      o(F, Je.sibling), $ = d(Je, I.props.children), $.return = F, F = $;
                      break e;
                    }
                  } else if (Je.elementType === He || typeof He == "object" && He !== null && He.$$typeof === it && ih(He) === Je.type) {
                    o(F, Je.sibling), $ = d(Je, I.props), $.ref = pl(F, Je, I), $.return = F, F = $;
                    break e;
                  }
                  o(F, Je);
                  break;
                } else r(F, Je);
                Je = Je.sibling;
              }
              I.type === We ? ($ = _l(I.props.children, F.mode, de, I.key), $.return = F, F = $) : (de = Cf(I.type, I.key, I.props, null, F.mode, de), de.ref = pl(F, $, I), de.return = F, F = de);
            }
            return C(F);
          case ut:
            e: {
              for (Je = I.key; $ !== null; ) {
                if ($.key === Je) if ($.tag === 4 && $.stateNode.containerInfo === I.containerInfo && $.stateNode.implementation === I.implementation) {
                  o(F, $.sibling), $ = d($, I.children || []), $.return = F, F = $;
                  break e;
                } else {
                  o(F, $);
                  break;
                }
                else r(F, $);
                $ = $.sibling;
              }
              $ = Is(I, F.mode, de), $.return = F, F = $;
            }
            return C(F);
          case it:
            return Je = I._init, Vn(F, $, Je(I._payload), de);
        }
        if (In(I)) return ke(F, $, I, de);
        if (Ae(I)) return Le(F, $, I, de);
        _a(F, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, $ !== null && $.tag === 6 ? (o(F, $.sibling), $ = d($, I), $.return = F, F = $) : (o(F, $), $ = Tf(I, F.mode, de), $.return = F, F = $), C(F)) : o(F, $);
    }
    return Vn;
  }
  var du = zc(!0), ah = zc(!1), Ja = yt(null), Kn = null, he = null, qi = null;
  function Oi() {
    qi = he = Kn = null;
  }
  function Id(n) {
    var r = Ja.current;
    Kt(Ja), n._currentValue = r;
  }
  function Bd(n, r, o) {
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
      if (Kn === null) throw Error(p(308));
      he = n, Kn.dependencies = { lanes: 0, firstContext: n };
    } else he = he.next = n;
    return r;
  }
  var vl = null;
  function Wn(n) {
    vl === null ? vl = [n] : vl.push(n);
  }
  function oh(n, r, o, s) {
    var d = r.interleaved;
    return d === null ? (o.next = o, Wn(r)) : (o.next = d.next, d.next = o), r.interleaved = o, eo(n, s);
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
  function Ho(n, r, o) {
    var s = n.updateQueue;
    if (s === null) return null;
    if (s = s.shared, Dt & 2) {
      var d = s.pending;
      return d === null ? r.next = r : (r.next = d.next, d.next = r), s.pending = r, eo(n, o);
    }
    return d = s.interleaved, d === null ? (r.next = r, Wn(s)) : (r.next = d.next, d.next = r), s.interleaved = r, eo(n, o);
  }
  function Hc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Ta(n, o);
    }
  }
  function lh(n, r) {
    var o = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var d = null, h = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var C = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          h === null ? d = h = C : h = h.next = C, o = o.next;
        } while (o !== null);
        h === null ? d = h = r : h = h.next = r;
      } else d = h = r;
      o = { baseState: s.baseState, firstBaseUpdate: d, lastBaseUpdate: h, shared: s.shared, effects: s.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Fc(n, r, o, s) {
    var d = n.updateQueue;
    Uo = !1;
    var h = d.firstBaseUpdate, C = d.lastBaseUpdate, x = d.shared.pending;
    if (x !== null) {
      d.shared.pending = null;
      var O = x, Q = O.next;
      O.next = null, C === null ? h = Q : C.next = Q, C = O;
      var ie = n.alternate;
      ie !== null && (ie = ie.updateQueue, x = ie.lastBaseUpdate, x !== C && (x === null ? ie.firstBaseUpdate = Q : x.next = Q, ie.lastBaseUpdate = O));
    }
    if (h !== null) {
      var ae = d.baseState;
      C = 0, ie = Q = O = null, x = h;
      do {
        var re = x.lane, Ee = x.eventTime;
        if ((s & re) === re) {
          ie !== null && (ie = ie.next = {
            eventTime: Ee,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var ke = n, Le = x;
            switch (re = r, Ee = o, Le.tag) {
              case 1:
                if (ke = Le.payload, typeof ke == "function") {
                  ae = ke.call(Ee, ae, re);
                  break e;
                }
                ae = ke;
                break e;
              case 3:
                ke.flags = ke.flags & -65537 | 128;
              case 0:
                if (ke = Le.payload, re = typeof ke == "function" ? ke.call(Ee, ae, re) : ke, re == null) break e;
                ae = ve({}, ae, re);
                break e;
              case 2:
                Uo = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, re = d.effects, re === null ? d.effects = [x] : re.push(x));
        } else Ee = { eventTime: Ee, lane: re, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, ie === null ? (Q = ie = Ee, O = ae) : ie = ie.next = Ee, C |= re;
        if (x = x.next, x === null) {
          if (x = d.shared.pending, x === null) break;
          re = x, x = re.next, re.next = null, d.lastBaseUpdate = re, d.shared.pending = null;
        }
      } while (!0);
      if (ie === null && (O = ae), d.baseState = O, d.firstBaseUpdate = Q, d.lastBaseUpdate = ie, r = d.shared.interleaved, r !== null) {
        d = r;
        do
          C |= d.lane, d = d.next;
        while (d !== r);
      } else h === null && (d.shared.lanes = 0);
      Tl |= C, n.lanes = C, n.memoizedState = ae;
    }
  }
  function uh(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var s = n[r], d = s.callback;
      if (d !== null) {
        if (s.callback = null, s = o, typeof d != "function") throw Error(p(191, d));
        d.call(s);
      }
    }
  }
  var xs = {}, ya = yt(xs), hu = yt(xs), ks = yt(xs);
  function hl(n) {
    if (n === xs) throw Error(p(174));
    return n;
  }
  function Wd(n, r) {
    switch (Zt(ks, r), Zt(hu, n), Zt(ya, xs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : pn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = pn(r, n);
    }
    Kt(ya), Zt(ya, r);
  }
  function mu() {
    Kt(ya), Kt(hu), Kt(ks);
  }
  function sh(n) {
    hl(ks.current);
    var r = hl(ya.current), o = pn(r, n.type);
    r !== o && (Zt(hu, n), Zt(ya, o));
  }
  function Yd(n) {
    hu.current === n && (Kt(ya), Kt(hu));
  }
  var En = yt(0);
  function jc(n) {
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
  var Vc = [];
  function Qd() {
    for (var n = 0; n < Vc.length; n++) Vc[n]._workInProgressVersionPrimary = null;
    Vc.length = 0;
  }
  var Pc = pt.ReactCurrentDispatcher, _s = pt.ReactCurrentBatchConfig, Ue = 0, je = null, lt = null, xt = null, Li = !1, yu = !1, Ds = 0, By = 0;
  function zr() {
    throw Error(p(321));
  }
  function Os(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!Ii(n[o], r[o])) return !1;
    return !0;
  }
  function te(n, r, o, s, d, h) {
    if (Ue = h, je = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Pc.current = n === null || n.memoizedState === null ? Wy : fn, n = o(s, d), yu) {
      h = 0;
      do {
        if (yu = !1, Ds = 0, 25 <= h) throw Error(p(301));
        h += 1, xt = lt = null, r.updateQueue = null, Pc.current = rf, n = o(s, d);
      } while (yu);
    }
    if (Pc.current = Ur, r = lt !== null && lt.next !== null, Ue = 0, xt = lt = je = null, Li = !1, r) throw Error(p(300));
    return n;
  }
  function Yn() {
    var n = Ds !== 0;
    return Ds = 0, n;
  }
  function Ie() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return xt === null ? je.memoizedState = xt = n : xt = xt.next = n, xt;
  }
  function gr() {
    if (lt === null) {
      var n = je.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = lt.next;
    var r = xt === null ? je.memoizedState : xt.next;
    if (r !== null) xt = r, lt = n;
    else {
      if (n === null) throw Error(p(310));
      lt = n, n = { memoizedState: lt.memoizedState, baseState: lt.baseState, baseQueue: lt.baseQueue, queue: lt.queue, next: null }, xt === null ? je.memoizedState = xt = n : xt = xt.next = n;
    }
    return xt;
  }
  function Mi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function to(n) {
    var r = gr(), o = r.queue;
    if (o === null) throw Error(p(311));
    o.lastRenderedReducer = n;
    var s = lt, d = s.baseQueue, h = o.pending;
    if (h !== null) {
      if (d !== null) {
        var C = d.next;
        d.next = h.next, h.next = C;
      }
      s.baseQueue = d = h, o.pending = null;
    }
    if (d !== null) {
      h = d.next, s = s.baseState;
      var x = C = null, O = null, Q = h;
      do {
        var ie = Q.lane;
        if ((Ue & ie) === ie) O !== null && (O = O.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), s = Q.hasEagerState ? Q.eagerState : n(s, Q.action);
        else {
          var ae = {
            lane: ie,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          O === null ? (x = O = ae, C = s) : O = O.next = ae, je.lanes |= ie, Tl |= ie;
        }
        Q = Q.next;
      } while (Q !== null && Q !== h);
      O === null ? C = s : O.next = x, Ii(s, r.memoizedState) || (mi = !0), r.memoizedState = s, r.baseState = C, r.baseQueue = O, o.lastRenderedState = s;
    }
    if (n = o.interleaved, n !== null) {
      d = n;
      do
        h = d.lane, je.lanes |= h, Tl |= h, d = d.next;
      while (d !== n);
    } else d === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Xi(n) {
    var r = gr(), o = r.queue;
    if (o === null) throw Error(p(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, d = o.pending, h = r.memoizedState;
    if (d !== null) {
      o.pending = null;
      var C = d = d.next;
      do
        h = n(h, C.action), C = C.next;
      while (C !== d);
      Ii(h, r.memoizedState) || (mi = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), o.lastRenderedState = h;
    }
    return [h, s];
  }
  function gu() {
  }
  function ml(n, r) {
    var o = je, s = gr(), d = r(), h = !Ii(s.memoizedState, d);
    if (h && (s.memoizedState = d, mi = !0), s = s.queue, Ls(Bc.bind(null, o, s, n), [n]), s.getSnapshot !== r || h || xt !== null && xt.memoizedState.tag & 1) {
      if (o.flags |= 2048, yl(9, Ic.bind(null, o, s, d, r), void 0, null), Nn === null) throw Error(p(349));
      Ue & 30 || bu(o, r, d);
    }
    return d;
  }
  function bu(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = je.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, je.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
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
  function Qc(n) {
    var r = Ie();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Mi, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ms.bind(null, je, n), [r.memoizedState, n];
  }
  function yl(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = je.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, je.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function Gc() {
    return gr().memoizedState;
  }
  function Su(n, r, o, s) {
    var d = Ie();
    je.flags |= n, d.memoizedState = yl(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function Eu(n, r, o, s) {
    var d = gr();
    s = s === void 0 ? null : s;
    var h = void 0;
    if (lt !== null) {
      var C = lt.memoizedState;
      if (h = C.destroy, s !== null && Os(s, C.deps)) {
        d.memoizedState = yl(r, o, h, s);
        return;
      }
    }
    je.flags |= n, d.memoizedState = yl(1 | r, o, h, s);
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
    return Ue & 21 ? (Ii(o, r) || (o = ql(), je.lanes |= o, Tl |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, mi = !0), n.memoizedState = o);
  }
  function Gd(n, r) {
    var o = Bt;
    Bt = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = _s.transition;
    _s.transition = {};
    try {
      n(!1), r();
    } finally {
      Bt = o, _s.transition = s;
    }
  }
  function nf() {
    return gr().memoizedState;
  }
  function ch(n, r, o) {
    var s = io(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, qd(n)) wu(r, o);
    else if (o = oh(n, r, o, s), o !== null) {
      var d = dr();
      _n(o, n, s, d), Fo(o, r, s);
    }
  }
  function Ms(n, r, o) {
    var s = io(n), d = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (qd(n)) wu(r, d);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null)) try {
        var C = r.lastRenderedState, x = h(C, o);
        if (d.hasEagerState = !0, d.eagerState = x, Ii(x, C)) {
          var O = r.interleaved;
          O === null ? (d.next = d, Wn(r)) : (d.next = O.next, O.next = d), r.interleaved = d;
          return;
        }
      } catch {
      } finally {
      }
      o = oh(n, r, d, s), o !== null && (d = dr(), _n(o, n, s, d), Fo(o, r, s));
    }
  }
  function qd(n) {
    var r = n.alternate;
    return n === je || r !== null && r === je;
  }
  function wu(n, r) {
    yu = Li = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Fo(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Ta(n, o);
    }
  }
  var Ur = { readContext: Ki, useCallback: zr, useContext: zr, useEffect: zr, useImperativeHandle: zr, useInsertionEffect: zr, useLayoutEffect: zr, useMemo: zr, useReducer: zr, useRef: zr, useState: zr, useDebugValue: zr, useDeferredValue: zr, useTransition: zr, useMutableSource: zr, useSyncExternalStore: zr, useId: zr, unstable_isNewReconciler: !1 }, Wy = { readContext: Ki, useCallback: function(n, r) {
    return Ie().memoizedState = [n, r === void 0 ? null : r], n;
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
    var o = Ie();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = Ie();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = ch.bind(null, je, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = Ie();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Qc, useDebugValue: Cu, useDeferredValue: function(n) {
    return Ie().memoizedState = n;
  }, useTransition: function() {
    var n = Qc(!1), r = n[0];
    return n = Gd.bind(null, n[1]), Ie().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = je, d = Ie();
    if (mn) {
      if (o === void 0) throw Error(p(407));
      o = o();
    } else {
      if (o = r(), Nn === null) throw Error(p(349));
      Ue & 30 || bu(s, r, o);
    }
    d.memoizedState = o;
    var h = { value: o, getSnapshot: r };
    return d.queue = h, qc(Bc.bind(
      null,
      s,
      h,
      n
    ), [n]), s.flags |= 2048, yl(9, Ic.bind(null, s, h, o, r), void 0, null), o;
  }, useId: function() {
    var n = Ie(), r = Nn.identifierPrefix;
    if (mn) {
      var o = Za, s = yr;
      o = (s & ~(1 << 32 - Ir(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ds++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = By++, r = ":" + r + "r" + o.toString(32) + ":";
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
    useRef: Gc,
    useState: function() {
      return to(Mi);
    },
    useDebugValue: Cu,
    useDeferredValue: function(n) {
      var r = gr();
      return tf(r, lt.memoizedState, n);
    },
    useTransition: function() {
      var n = to(Mi)[0], r = gr().memoizedState;
      return [n, r];
    },
    useMutableSource: gu,
    useSyncExternalStore: ml,
    useId: nf,
    unstable_isNewReconciler: !1
  }, rf = { readContext: Ki, useCallback: gl, useContext: Ki, useEffect: Ls, useImperativeHandle: Jc, useInsertionEffect: Kc, useLayoutEffect: Xc, useMemo: ef, useReducer: Xi, useRef: Gc, useState: function() {
    return Xi(Mi);
  }, useDebugValue: Cu, useDeferredValue: function(n) {
    var r = gr();
    return lt === null ? r.memoizedState = n : tf(r, lt.memoizedState, n);
  }, useTransition: function() {
    var n = Xi(Mi)[0], r = gr().memoizedState;
    return [n, r];
  }, useMutableSource: gu, useSyncExternalStore: ml, useId: nf, unstable_isNewReconciler: !1 };
  function hi(n, r) {
    if (n && n.defaultProps) {
      r = ve({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function bl(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : ve({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Sl = { isMounted: function(n) {
    return (n = n._reactInternals) ? ze(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var s = dr(), d = io(n), h = vi(s, d);
    h.payload = r, o != null && (h.callback = o), r = Ho(n, h, d), r !== null && (_n(r, n, d, s), Hc(r, n, d));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = dr(), d = io(n), h = vi(s, d);
    h.tag = 1, h.payload = r, o != null && (h.callback = o), r = Ho(n, h, d), r !== null && (_n(r, n, d, s), Hc(r, n, d));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = dr(), s = io(n), d = vi(o, s);
    d.tag = 2, r != null && (d.callback = r), r = Ho(n, d, s), r !== null && (_n(r, n, s, o), Hc(r, n, s));
  } };
  function fh(n, r, o, s, d, h, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, h, C) : r.prototype && r.prototype.isPureReactComponent ? !vs(o, s) || !vs(d, h) : !0;
  }
  function dh(n, r, o) {
    var s = !1, d = ka, h = r.contextType;
    return typeof h == "object" && h !== null ? h = Ki(h) : (d = Sn(r) ? si : ot.current, s = r.contextTypes, h = (s = s != null) ? Wi(n, d) : ka), r = new r(o, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Sl, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = d, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function ph(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && Sl.enqueueReplaceState(r, r.state, null);
  }
  function Kd(n, r, o, s) {
    var d = n.stateNode;
    d.props = o, d.state = n.memoizedState, d.refs = {}, Uc(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? d.context = Ki(h) : (h = Sn(r) ? si : ot.current, d.context = Wi(n, h)), d.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (bl(n, r, h, o), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && Sl.enqueueReplaceState(d, d.state, null), Fc(n, o, d, s), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function jo(n, r) {
    try {
      var o = "", s = r;
      do
        o += vt(s), s = s.return;
      while (s);
      var d = o;
    } catch (h) {
      d = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: n, source: r, stack: d, digest: null };
  }
  function Xd(n, r, o) {
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
  var vh = typeof WeakMap == "function" ? WeakMap : Map;
  function hh(n, r, o) {
    o = vi(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      mf || (mf = !0, op = s), As(n, r);
    }, o;
  }
  function mh(n, r, o) {
    o = vi(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var d = r.value;
      o.payload = function() {
        return s(d);
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
  function Ns(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new vh();
      var d = /* @__PURE__ */ new Set();
      s.set(r, d);
    } else d = s.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), s.set(r, d));
    d.has(o) || (d.add(o), n = tg.bind(null, n, r, o), r.then(n, n));
  }
  function yh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Zd(n, r, o, s, d) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = d, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = vi(-1, 1), r.tag = 2, Ho(o, r, 1))), o.lanes |= 1), n);
  }
  var gh = pt.ReactCurrentOwner, mi = !1;
  function Fn(n, r, o, s) {
    r.child = n === null ? ah(r, null, o, s) : du(r, n.child, o, s);
  }
  function Tu(n, r, o, s, d) {
    o = o.render;
    var h = r.ref;
    return pu(r, d), s = te(n, r, o, s, h, d), o = Yn(), n !== null && !mi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, jn(n, r, d)) : (mn && o && Lc(r), r.flags |= 1, Fn(n, r, s, d), r.child);
  }
  function Vo(n, r, o, s, d) {
    if (n === null) {
      var h = o.type;
      return typeof h == "function" && !fp(h) && h.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = h, af(n, r, h, s, d)) : (n = Cf(o.type, null, s, r, r.mode, d), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & d)) {
      var C = h.memoizedProps;
      if (o = o.compare, o = o !== null ? o : vs, o(C, s) && n.ref === r.ref) return jn(n, r, d);
    }
    return r.flags |= 1, n = Bo(h, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function af(n, r, o, s, d) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (vs(h, s) && n.ref === r.ref) if (mi = !1, r.pendingProps = s = h, (n.lanes & d) !== 0) n.flags & 131072 && (mi = !0);
      else return r.lanes = n.lanes, jn(n, r, d);
    }
    return mt(n, r, o, s, d);
  }
  function yi(n, r, o) {
    var s = r.pendingProps, d = s.children, h = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Zt(Nu, gi), gi |= o;
    else {
      if (!(o & 1073741824)) return n = h !== null ? h.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Zt(Nu, gi), gi |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = h !== null ? h.baseLanes : o, Zt(Nu, gi), gi |= s;
    }
    else h !== null ? (s = h.baseLanes | o, r.memoizedState = null) : s = o, Zt(Nu, gi), gi |= s;
    return Fn(n, r, d, o), r.child;
  }
  function El(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function mt(n, r, o, s, d) {
    var h = Sn(o) ? si : ot.current;
    return h = Wi(r, h), pu(r, d), o = te(n, r, o, s, h, d), s = Yn(), n !== null && !mi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, jn(n, r, d)) : (mn && s && Lc(r), r.flags |= 1, Fn(n, r, o, d), r.child);
  }
  function $s(n, r, o, s, d) {
    if (Sn(o)) {
      var h = !0;
      Oc(r);
    } else h = !1;
    if (pu(r, d), r.stateNode === null) Us(n, r), dh(r, o, s), Kd(r, o, s, d), s = !0;
    else if (n === null) {
      var C = r.stateNode, x = r.memoizedProps;
      C.props = x;
      var O = C.context, Q = o.contextType;
      typeof Q == "object" && Q !== null ? Q = Ki(Q) : (Q = Sn(o) ? si : ot.current, Q = Wi(r, Q));
      var ie = o.getDerivedStateFromProps, ae = typeof ie == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      ae || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== s || O !== Q) && ph(r, C, s, Q), Uo = !1;
      var re = r.memoizedState;
      C.state = re, Fc(r, s, C, d), O = r.memoizedState, x !== s || re !== O || Mn.current || Uo ? (typeof ie == "function" && (bl(r, o, ie, s), O = r.memoizedState), (x = Uo || fh(r, o, x, s, re, O, Q)) ? (ae || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = O), C.props = s, C.state = O, C.context = Q, s = x) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      C = r.stateNode, vu(n, r), x = r.memoizedProps, Q = r.type === r.elementType ? x : hi(r.type, x), C.props = Q, ae = r.pendingProps, re = C.context, O = o.contextType, typeof O == "object" && O !== null ? O = Ki(O) : (O = Sn(o) ? si : ot.current, O = Wi(r, O));
      var Ee = o.getDerivedStateFromProps;
      (ie = typeof Ee == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (x !== ae || re !== O) && ph(r, C, s, O), Uo = !1, re = r.memoizedState, C.state = re, Fc(r, s, C, d);
      var ke = r.memoizedState;
      x !== ae || re !== ke || Mn.current || Uo ? (typeof Ee == "function" && (bl(r, o, Ee, s), ke = r.memoizedState), (Q = Uo || fh(r, o, Q, s, re, ke, O) || !1) ? (ie || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(s, ke, O), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(s, ke, O)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = ke), C.props = s, C.state = ke, C.context = O, s = Q) : (typeof C.componentDidUpdate != "function" || x === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return of(n, r, o, s, h, d);
  }
  function of(n, r, o, s, d, h) {
    El(n, r);
    var C = (r.flags & 128) !== 0;
    if (!s && !C) return d && eh(r, o, !1), jn(n, r, h);
    s = r.stateNode, gh.current = r;
    var x = C && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && C ? (r.child = du(r, n.child, null, h), r.child = du(r, null, x, h)) : Fn(n, r, x, h), r.memoizedState = s.state, d && eh(r, o, !0), r.child;
  }
  function Yy(n) {
    var r = n.stateNode;
    r.pendingContext ? $o(n, r.pendingContext, r.pendingContext !== r.context) : r.context && $o(n, r.context, !1), Wd(n, r.containerInfo);
  }
  function bh(n, r, o, s, d) {
    return kn(), Pd(d), r.flags |= 256, Fn(n, r, o, s), r.child;
  }
  var zs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cl(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Sh(n, r, o) {
    var s = r.pendingProps, d = En.current, h = !1, C = (r.flags & 128) !== 0, x;
    if ((x = C) || (x = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), x ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1), Zt(En, d & 1), n === null)
      return Ac(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = s.children, n = s.fallback, h ? (s = r.mode, h = r.child, C = { mode: "hidden", children: C }, !(s & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = C) : h = wf(C, s, 0, null), n = _l(n, s, o, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = Cl(o), r.memoizedState = zs, n) : lf(r, C));
    if (d = n.memoizedState, d !== null && (x = d.dehydrated, x !== null)) return Jd(n, r, C, s, x, d, o);
    if (h) {
      h = s.fallback, C = r.mode, d = n.child, x = d.sibling;
      var O = { mode: "hidden", children: s.children };
      return !(C & 1) && r.child !== d ? (s = r.child, s.childLanes = 0, s.pendingProps = O, r.deletions = null) : (s = Bo(d, O), s.subtreeFlags = d.subtreeFlags & 14680064), x !== null ? h = Bo(x, h) : (h = _l(h, C, o, null), h.flags |= 2), h.return = r, s.return = r, s.sibling = h, r.child = s, s = h, h = r.child, C = n.child.memoizedState, C = C === null ? Cl(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, h.memoizedState = C, h.childLanes = n.childLanes & ~o, r.memoizedState = zs, s;
    }
    return h = n.child, n = h.sibling, s = Bo(h, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function lf(n, r) {
    return r = wf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function uf(n, r, o, s) {
    return s !== null && Pd(s), du(r, n.child, null, o), n = lf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Jd(n, r, o, s, d, h, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = Xd(Error(p(422))), uf(n, r, C, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = s.fallback, d = r.mode, s = wf({ mode: "visible", children: s.children }, d, 0, null), h = _l(h, d, C, null), h.flags |= 2, s.return = r, h.return = r, s.sibling = h, r.child = s, r.mode & 1 && du(r, n.child, null, C), r.child.memoizedState = Cl(C), r.memoizedState = zs, h);
    if (!(r.mode & 1)) return uf(n, r, C, null);
    if (d.data === "$!") {
      if (s = d.nextSibling && d.nextSibling.dataset, s) var x = s.dgst;
      return s = x, h = Error(p(419)), s = Xd(h, s, void 0), uf(n, r, C, s);
    }
    if (x = (C & n.childLanes) !== 0, mi || x) {
      if (s = Nn, s !== null) {
        switch (C & -C) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
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
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        d = d & (s.suspendedLanes | C) ? 0 : d, d !== 0 && d !== h.retryLane && (h.retryLane = d, eo(n, d), _n(s, n, d, -1));
      }
      return Ps(), s = Xd(Error(p(421))), uf(n, r, C, s);
    }
    return d.data === "$?" ? (r.flags |= 128, r.child = n.child, r = cp.bind(null, n), d._reactRetry = r, null) : (n = h.treeContext, pi = ma(d.nextSibling), Di = r, mn = !0, Gi = null, n !== null && (di[$r++] = yr, di[$r++] = Za, di[$r++] = Qi, yr = n.id, Za = n.overflow, Qi = r), r = lf(r, s.children), r.flags |= 4096, r);
  }
  function Eh(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), Bd(n.return, r, o);
  }
  function sf(n, r, o, s, d) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: d } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = s, h.tail = o, h.tailMode = d);
  }
  function ep(n, r, o) {
    var s = r.pendingProps, d = s.revealOrder, h = s.tail;
    if (Fn(n, r, s.children, o), s = En.current, s & 2) s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Eh(n, o, r);
        else if (n.tag === 19) Eh(n, o, r);
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
    if (Zt(En, s), !(r.mode & 1)) r.memoizedState = null;
    else switch (d) {
      case "forwards":
        for (o = r.child, d = null; o !== null; ) n = o.alternate, n !== null && jc(n) === null && (d = o), o = o.sibling;
        o = d, o === null ? (d = r.child, r.child = null) : (d = o.sibling, o.sibling = null), sf(r, !1, d, o, h);
        break;
      case "backwards":
        for (o = null, d = r.child, r.child = null; d !== null; ) {
          if (n = d.alternate, n !== null && jc(n) === null) {
            r.child = d;
            break;
          }
          n = d.sibling, d.sibling = o, o = d, d = n;
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
  function jn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Tl |= r.lanes, !(o & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(p(153));
    if (r.child !== null) {
      for (n = r.child, o = Bo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Bo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function no(n, r, o) {
    switch (r.tag) {
      case 3:
        Yy(r), kn();
        break;
      case 5:
        sh(r);
        break;
      case 1:
        Sn(r.type) && Oc(r);
        break;
      case 4:
        Wd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, d = r.memoizedProps.value;
        Zt(Ja, s._currentValue), s._currentValue = d;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (Zt(En, En.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Sh(n, r, o) : (Zt(En, En.current & 1), n = jn(n, r, o), n !== null ? n.sibling : null);
        Zt(En, En.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s) return ep(n, r, o);
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Zt(En, En.current), s) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, yi(n, r, o);
    }
    return jn(n, r, o);
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
    var d = n.memoizedProps;
    if (d !== s) {
      n = r.stateNode, hl(ya.current);
      var h = null;
      switch (o) {
        case "input":
          d = zn(n, d), s = zn(n, s), h = [];
          break;
        case "select":
          d = ve({}, d, { value: void 0 }), s = ve({}, s, { value: void 0 }), h = [];
          break;
        case "textarea":
          d = Or(n, d), s = Or(n, s), h = [];
          break;
        default:
          typeof d.onClick != "function" && typeof s.onClick == "function" && (n.onclick = Dc);
      }
      Tn(o, s);
      var C;
      o = null;
      for (Q in d) if (!s.hasOwnProperty(Q) && d.hasOwnProperty(Q) && d[Q] != null) if (Q === "style") {
        var x = d[Q];
        for (C in x) x.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
      } else Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (E.hasOwnProperty(Q) ? h || (h = []) : (h = h || []).push(Q, null));
      for (Q in s) {
        var O = s[Q];
        if (x = d != null ? d[Q] : void 0, s.hasOwnProperty(Q) && O !== x && (O != null || x != null)) if (Q === "style") if (x) {
          for (C in x) !x.hasOwnProperty(C) || O && O.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
          for (C in O) O.hasOwnProperty(C) && x[C] !== O[C] && (o || (o = {}), o[C] = O[C]);
        } else o || (h || (h = []), h.push(
          Q,
          o
        )), o = O;
        else Q === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, x = x ? x.__html : void 0, O != null && x !== O && (h = h || []).push(Q, O)) : Q === "children" ? typeof O != "string" && typeof O != "number" || (h = h || []).push(Q, "" + O) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (E.hasOwnProperty(Q) ? (O != null && Q === "onScroll" && un("scroll", n), h || x === O || (h = [])) : (h = h || []).push(Q, O));
      }
      o && (h = h || []).push("style", o);
      var Q = h;
      (r.updateQueue = Q) && (r.flags |= 4);
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
  function Hr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r) for (var d = n.child; d !== null; ) o |= d.lanes | d.childLanes, s |= d.subtreeFlags & 14680064, s |= d.flags & 14680064, d.return = n, d = d.sibling;
    else for (d = n.child; d !== null; ) o |= d.lanes | d.childLanes, s |= d.subtreeFlags, s |= d.flags, d.return = n, d = d.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function Qy(n, r, o) {
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
        return Hr(r), null;
      case 1:
        return Sn(r.type) && Yi(), Hr(r), null;
      case 3:
        return s = r.stateNode, mu(), Kt(Mn), Kt(ot), Qd(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (Nc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Gi !== null && (lp(Gi), Gi = null))), Ru(n, r), Hr(r), null;
      case 5:
        Yd(r);
        var d = hl(ks.current);
        if (o = r.type, n !== null && r.stateNode != null) xu(n, r, o, s, d), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null) throw Error(p(166));
            return Hr(r), null;
          }
          if (n = hl(ya.current), Nc(r)) {
            s = r.stateNode, o = r.type;
            var h = r.memoizedProps;
            switch (s[xa] = r, s[fl] = h, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                un("cancel", s), un("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                un("load", s);
                break;
              case "video":
              case "audio":
                for (d = 0; d < gs.length; d++) un(gs[d], s);
                break;
              case "source":
                un("error", s);
                break;
              case "img":
              case "image":
              case "link":
                un(
                  "error",
                  s
                ), un("load", s);
                break;
              case "details":
                un("toggle", s);
                break;
              case "input":
                Un(s, h), un("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!h.multiple }, un("invalid", s);
                break;
              case "textarea":
                ar(s, h), un("invalid", s);
            }
            Tn(o, h), d = null;
            for (var C in h) if (h.hasOwnProperty(C)) {
              var x = h[C];
              C === "children" ? typeof x == "string" ? s.textContent !== x && (h.suppressHydrationWarning !== !0 && _c(s.textContent, x, n), d = ["children", x]) : typeof x == "number" && s.textContent !== "" + x && (h.suppressHydrationWarning !== !0 && _c(
                s.textContent,
                x,
                n
              ), d = ["children", "" + x]) : E.hasOwnProperty(C) && x != null && C === "onScroll" && un("scroll", s);
            }
            switch (o) {
              case "input":
                nr(s), _r(s, h, !0);
                break;
              case "textarea":
                nr(s), Gn(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (s.onclick = Dc);
            }
            s = d, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            C = d.nodeType === 9 ? d : d.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Lr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = C.createElement(o, { is: s.is }) : (n = C.createElement(o), o === "select" && (C = n, s.multiple ? C.multiple = !0 : s.size && (C.size = s.size))) : n = C.createElementNS(n, o), n[xa] = r, n[fl] = s, Da(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = vn(o, s), o) {
                case "dialog":
                  un("cancel", n), un("close", n), d = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  un("load", n), d = s;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < gs.length; d++) un(gs[d], n);
                  d = s;
                  break;
                case "source":
                  un("error", n), d = s;
                  break;
                case "img":
                case "image":
                case "link":
                  un(
                    "error",
                    n
                  ), un("load", n), d = s;
                  break;
                case "details":
                  un("toggle", n), d = s;
                  break;
                case "input":
                  Un(n, s), d = zn(n, s), un("invalid", n);
                  break;
                case "option":
                  d = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, d = ve({}, s, { value: void 0 }), un("invalid", n);
                  break;
                case "textarea":
                  ar(n, s), d = Or(n, s), un("invalid", n);
                  break;
                default:
                  d = s;
              }
              Tn(o, d), x = d;
              for (h in x) if (x.hasOwnProperty(h)) {
                var O = x[h];
                h === "style" ? Ft(n, O) : h === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, O != null && Vr(n, O)) : h === "children" ? typeof O == "string" ? (o !== "textarea" || O !== "") && vr(n, O) : typeof O == "number" && vr(n, "" + O) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (E.hasOwnProperty(h) ? O != null && h === "onScroll" && un("scroll", n) : O != null && Fe(n, h, O, C));
              }
              switch (o) {
                case "input":
                  nr(n), _r(n, s, !1);
                  break;
                case "textarea":
                  nr(n), Gn(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + bt(s.value));
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
                  typeof d.onClick == "function" && (n.onclick = Dc);
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
        return Hr(r), null;
      case 6:
        if (n && r.stateNode != null) Zi(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null) throw Error(p(166));
          if (o = hl(ks.current), hl(ya.current), Nc(r)) {
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
        return Hr(r), null;
      case 13:
        if (Kt(En), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (mn && pi !== null && r.mode & 1 && !(r.flags & 128)) rh(), kn(), r.flags |= 98560, h = !1;
          else if (h = Nc(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!h) throw Error(p(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(p(317));
              h[xa] = r;
            } else kn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Hr(r), h = !1;
          } else Gi !== null && (lp(Gi), Gi = null), h = !0;
          if (!h) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || En.current & 1 ? Zn === 0 && (Zn = 3) : Ps())), r.updateQueue !== null && (r.flags |= 4), Hr(r), null);
      case 4:
        return mu(), Ru(n, r), n === null && su(r.stateNode.containerInfo), Hr(r), null;
      case 10:
        return Id(r.type._context), Hr(r), null;
      case 17:
        return Sn(r.type) && Yi(), Hr(r), null;
      case 19:
        if (Kt(En), h = r.memoizedState, h === null) return Hr(r), null;
        if (s = (r.flags & 128) !== 0, C = h.rendering, C === null) if (s) An(h, !1);
        else {
          if (Zn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (C = jc(n), C !== null) {
              for (r.flags |= 128, An(h, !1), s = C.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; ) h = o, n = s, h.flags &= 14680066, C = h.alternate, C === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = C.childLanes, h.lanes = C.lanes, h.child = C.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = C.memoizedProps, h.memoizedState = C.memoizedState, h.updateQueue = C.updateQueue, h.type = C.type, n = C.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return Zt(En, En.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          h.tail !== null && at() > zu && (r.flags |= 128, s = !0, An(h, !1), r.lanes = 4194304);
        }
        else {
          if (!s) if (n = jc(C), n !== null) {
            if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), An(h, !0), h.tail === null && h.tailMode === "hidden" && !C.alternate && !mn) return Hr(r), null;
          } else 2 * at() - h.renderingStartTime > zu && o !== 1073741824 && (r.flags |= 128, s = !0, An(h, !1), r.lanes = 4194304);
          h.isBackwards ? (C.sibling = r.child, r.child = C) : (o = h.last, o !== null ? o.sibling = C : r.child = C, h.last = C);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = at(), r.sibling = null, o = En.current, Zt(En, s ? o & 1 | 2 : o & 1), r) : (Hr(r), null);
      case 22:
      case 23:
        return Sf(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? gi & 1073741824 && (Hr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Hr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, r.tag));
  }
  function Gy(n, r) {
    switch (jd(r), r.tag) {
      case 1:
        return Sn(r.type) && Yi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return mu(), Kt(Mn), Kt(ot), Qd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Yd(r), null;
      case 13:
        if (Kt(En), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(p(340));
          kn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Kt(En), null;
      case 4:
        return mu(), null;
      case 10:
        return Id(r.type._context), null;
      case 22:
      case 23:
        return Sf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ku = !1, br = !1, cf = typeof WeakSet == "function" ? WeakSet : Set, xe = null;
  function _u(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (s) {
      $n(n, r, s);
    }
    else o.current = null;
  }
  function tp(n, r, o) {
    try {
      o();
    } catch (s) {
      $n(n, r, s);
    }
  }
  var ff = !1;
  function qy(n, r) {
    if (Md = Pi, n = wc(), Ga(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var s = o.getSelection && o.getSelection();
        if (s && s.rangeCount !== 0) {
          o = s.anchorNode;
          var d = s.anchorOffset, h = s.focusNode;
          s = s.focusOffset;
          try {
            o.nodeType, h.nodeType;
          } catch {
            o = null;
            break e;
          }
          var C = 0, x = -1, O = -1, Q = 0, ie = 0, ae = n, re = null;
          t: for (; ; ) {
            for (var Ee; ae !== o || d !== 0 && ae.nodeType !== 3 || (x = C + d), ae !== h || s !== 0 && ae.nodeType !== 3 || (O = C + s), ae.nodeType === 3 && (C += ae.nodeValue.length), (Ee = ae.firstChild) !== null; )
              re = ae, ae = Ee;
            for (; ; ) {
              if (ae === n) break t;
              if (re === o && ++Q === d && (x = C), re === h && ++ie === s && (O = C), (Ee = ae.nextSibling) !== null) break;
              ae = re, re = ae.parentNode;
            }
            ae = Ee;
          }
          o = x === -1 || O === -1 ? null : { start: x, end: O };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (sl = { focusedElem: n, selectionRange: o }, Pi = !1, xe = r; xe !== null; ) if (r = xe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, xe = n;
    else for (; xe !== null; ) {
      r = xe;
      try {
        var ke = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ke !== null) {
              var Le = ke.memoizedProps, Vn = ke.memoizedState, F = r.stateNode, $ = F.getSnapshotBeforeUpdate(r.elementType === r.type ? Le : hi(r.type, Le), Vn);
              F.__reactInternalSnapshotBeforeUpdate = $;
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
            throw Error(p(163));
        }
      } catch (de) {
        $n(r, r.return, de);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, xe = n;
        break;
      }
      xe = r.return;
    }
    return ke = ff, ff = !1, ke;
  }
  function Du(n, r, o) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var d = s = s.next;
      do {
        if ((d.tag & n) === n) {
          var h = d.destroy;
          d.destroy = void 0, h !== void 0 && tp(r, o, h);
        }
        d = d.next;
      } while (d !== s);
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
  function Ch(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ch(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[xa], delete r[fl], delete r[$d], delete r[Iy], delete r[zd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function np(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function wh(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || np(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Hs(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Dc));
    else if (s !== 4 && (n = n.child, n !== null)) for (Hs(n, r, o), n = n.sibling; n !== null; ) Hs(n, r, o), n = n.sibling;
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
        var s = Cn, d = cr;
        Cn = null, Yr(n, r, o), Cn = s, cr = d, Cn !== null && (cr ? (n = Cn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Cn.removeChild(o.stateNode));
        break;
      case 18:
        Cn !== null && (cr ? (n = Cn, o = o.stateNode, n.nodeType === 8 ? Mo(n.parentNode, o) : n.nodeType === 1 && Mo(n, o), _o(n)) : Mo(Cn, o.stateNode));
        break;
      case 4:
        s = Cn, d = cr, Cn = o.stateNode.containerInfo, cr = !0, Yr(n, r, o), Cn = s, cr = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!br && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          d = s = s.next;
          do {
            var h = d, C = h.destroy;
            h = h.tag, C !== void 0 && (h & 2 || h & 4) && tp(o, r, C), d = d.next;
          } while (d !== s);
        }
        Yr(n, r, o);
        break;
      case 1:
        if (!br && (_u(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
        } catch (x) {
          $n(o, r, x);
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
        var d = ng.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(d, d));
      });
    }
  }
  function fr(n, r) {
    var o = r.deletions;
    if (o !== null) for (var s = 0; s < o.length; s++) {
      var d = o[s];
      try {
        var h = n, C = r, x = C;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              Cn = x.stateNode, cr = !1;
              break e;
            case 3:
              Cn = x.stateNode.containerInfo, cr = !0;
              break e;
            case 4:
              Cn = x.stateNode.containerInfo, cr = !0;
              break e;
          }
          x = x.return;
        }
        if (Cn === null) throw Error(p(160));
        Lu(h, C, d), Cn = null, cr = !1;
        var O = d.alternate;
        O !== null && (O.return = null), d.return = null;
      } catch (Q) {
        $n(d, r, Q);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Th(r, n), r = r.sibling;
  }
  function Th(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (fr(r, n), Oa(n), s & 4) {
          try {
            Du(3, n, n.return), df(3, n);
          } catch (Le) {
            $n(n, n.return, Le);
          }
          try {
            Du(5, n, n.return);
          } catch (Le) {
            $n(n, n.return, Le);
          }
        }
        break;
      case 1:
        fr(r, n), Oa(n), s & 512 && o !== null && _u(o, o.return);
        break;
      case 5:
        if (fr(r, n), Oa(n), s & 512 && o !== null && _u(o, o.return), n.flags & 32) {
          var d = n.stateNode;
          try {
            vr(d, "");
          } catch (Le) {
            $n(n, n.return, Le);
          }
        }
        if (s & 4 && (d = n.stateNode, d != null)) {
          var h = n.memoizedProps, C = o !== null ? o.memoizedProps : h, x = n.type, O = n.updateQueue;
          if (n.updateQueue = null, O !== null) try {
            x === "input" && h.type === "radio" && h.name != null && On(d, h), vn(x, C);
            var Q = vn(x, h);
            for (C = 0; C < O.length; C += 2) {
              var ie = O[C], ae = O[C + 1];
              ie === "style" ? Ft(d, ae) : ie === "dangerouslySetInnerHTML" ? Vr(d, ae) : ie === "children" ? vr(d, ae) : Fe(d, ie, ae, Q);
            }
            switch (x) {
              case "input":
                wn(d, h);
                break;
              case "textarea":
                jr(d, h);
                break;
              case "select":
                var re = d._wrapperState.wasMultiple;
                d._wrapperState.wasMultiple = !!h.multiple;
                var Ee = h.value;
                Ee != null ? ir(d, !!h.multiple, Ee, !1) : re !== !!h.multiple && (h.defaultValue != null ? ir(
                  d,
                  !!h.multiple,
                  h.defaultValue,
                  !0
                ) : ir(d, !!h.multiple, h.multiple ? [] : "", !1));
            }
            d[fl] = h;
          } catch (Le) {
            $n(n, n.return, Le);
          }
        }
        break;
      case 6:
        if (fr(r, n), Oa(n), s & 4) {
          if (n.stateNode === null) throw Error(p(162));
          d = n.stateNode, h = n.memoizedProps;
          try {
            d.nodeValue = h;
          } catch (Le) {
            $n(n, n.return, Le);
          }
        }
        break;
      case 3:
        if (fr(r, n), Oa(n), s & 4 && o !== null && o.memoizedState.isDehydrated) try {
          _o(r.containerInfo);
        } catch (Le) {
          $n(n, n.return, Le);
        }
        break;
      case 4:
        fr(r, n), Oa(n);
        break;
      case 13:
        fr(r, n), Oa(n), d = n.child, d.flags & 8192 && (h = d.memoizedState !== null, d.stateNode.isHidden = h, !h || d.alternate !== null && d.alternate.memoizedState !== null || (hf = at())), s & 4 && Mu(n);
        break;
      case 22:
        if (ie = o !== null && o.memoizedState !== null, n.mode & 1 ? (br = (Q = br) || ie, fr(r, n), br = Q) : fr(r, n), Oa(n), s & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !ie && n.mode & 1) for (xe = n, ie = n.child; ie !== null; ) {
            for (ae = xe = ie; xe !== null; ) {
              switch (re = xe, Ee = re.child, re.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Du(4, re, re.return);
                  break;
                case 1:
                  _u(re, re.return);
                  var ke = re.stateNode;
                  if (typeof ke.componentWillUnmount == "function") {
                    s = re, o = re.return;
                    try {
                      r = s, ke.props = r.memoizedProps, ke.state = r.memoizedState, ke.componentWillUnmount();
                    } catch (Le) {
                      $n(s, o, Le);
                    }
                  }
                  break;
                case 5:
                  _u(re, re.return);
                  break;
                case 22:
                  if (re.memoizedState !== null) {
                    Rh(ae);
                    continue;
                  }
              }
              Ee !== null ? (Ee.return = re, xe = Ee) : Rh(ae);
            }
            ie = ie.sibling;
          }
          e: for (ie = null, ae = n; ; ) {
            if (ae.tag === 5) {
              if (ie === null) {
                ie = ae;
                try {
                  d = ae.stateNode, Q ? (h = d.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (x = ae.stateNode, O = ae.memoizedProps.style, C = O != null && O.hasOwnProperty("display") ? O.display : null, x.style.display = ft("display", C));
                } catch (Le) {
                  $n(n, n.return, Le);
                }
              }
            } else if (ae.tag === 6) {
              if (ie === null) try {
                ae.stateNode.nodeValue = Q ? "" : ae.memoizedProps;
              } catch (Le) {
                $n(n, n.return, Le);
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
            if (np(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(p(160));
        }
        switch (s.tag) {
          case 5:
            var d = s.stateNode;
            s.flags & 32 && (vr(d, ""), s.flags &= -33);
            var h = wh(n);
            Ou(n, h, d);
            break;
          case 3:
          case 4:
            var C = s.stateNode.containerInfo, x = wh(n);
            Hs(n, x, C);
            break;
          default:
            throw Error(p(161));
        }
      } catch (O) {
        $n(n, n.return, O);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ky(n, r, o) {
    xe = n, rp(n);
  }
  function rp(n, r, o) {
    for (var s = (n.mode & 1) !== 0; xe !== null; ) {
      var d = xe, h = d.child;
      if (d.tag === 22 && s) {
        var C = d.memoizedState !== null || ku;
        if (!C) {
          var x = d.alternate, O = x !== null && x.memoizedState !== null || br;
          x = ku;
          var Q = br;
          if (ku = C, (br = O) && !Q) for (xe = d; xe !== null; ) C = xe, O = C.child, C.tag === 22 && C.memoizedState !== null ? ip(d) : O !== null ? (O.return = C, xe = O) : ip(d);
          for (; h !== null; ) xe = h, rp(h), h = h.sibling;
          xe = d, ku = x, br = Q;
        }
        Au(n);
      } else d.subtreeFlags & 8772 && h !== null ? (h.return = d, xe = h) : Au(n);
    }
  }
  function Au(n) {
    for (; xe !== null; ) {
      var r = xe;
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
                var d = r.elementType === r.type ? o.memoizedProps : hi(r.type, o.memoizedProps);
                s.componentDidUpdate(d, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var h = r.updateQueue;
              h !== null && uh(r, h, s);
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
                uh(r, C, o);
              }
              break;
            case 5:
              var x = r.stateNode;
              if (o === null && r.flags & 4) {
                o = x;
                var O = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    O.autoFocus && o.focus();
                    break;
                  case "img":
                    O.src && (o.src = O.src);
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
                var Q = r.alternate;
                if (Q !== null) {
                  var ie = Q.memoizedState;
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
              throw Error(p(163));
          }
          br || r.flags & 512 && pf(r);
        } catch (re) {
          $n(r, r.return, re);
        }
      }
      if (r === n) {
        xe = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, xe = o;
        break;
      }
      xe = r.return;
    }
  }
  function Rh(n) {
    for (; xe !== null; ) {
      var r = xe;
      if (r === n) {
        xe = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, xe = o;
        break;
      }
      xe = r.return;
    }
  }
  function ip(n) {
    for (; xe !== null; ) {
      var r = xe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              df(4, r);
            } catch (O) {
              $n(r, o, O);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var d = r.return;
              try {
                s.componentDidMount();
              } catch (O) {
                $n(r, d, O);
              }
            }
            var h = r.return;
            try {
              pf(r);
            } catch (O) {
              $n(r, h, O);
            }
            break;
          case 5:
            var C = r.return;
            try {
              pf(r);
            } catch (O) {
              $n(r, C, O);
            }
        }
      } catch (O) {
        $n(r, r.return, O);
      }
      if (r === n) {
        xe = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, xe = x;
        break;
      }
      xe = r.return;
    }
  }
  var Xy = Math.ceil, wl = pt.ReactCurrentDispatcher, vf = pt.ReactCurrentOwner, Ji = pt.ReactCurrentBatchConfig, Dt = 0, Nn = null, yn = null, Xn = 0, gi = 0, Nu = yt(0), Zn = 0, Fs = null, Tl = 0, $u = 0, ap = 0, Po = null, Fr = null, hf = 0, zu = 1 / 0, ro = null, mf = !1, op = null, ea = null, Uu = !1, ta = null, yf = 0, js = 0, gf = null, Vs = -1, Rl = 0;
  function dr() {
    return Dt & 6 ? at() : Vs !== -1 ? Vs : Vs = at();
  }
  function io(n) {
    return n.mode & 1 ? Dt & 2 && Xn !== 0 ? Xn & -Xn : $c.transition !== null ? (Rl === 0 && (Rl = ql()), Rl) : (n = Bt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ss(n.type)), n) : 1;
  }
  function _n(n, r, o, s) {
    if (50 < js) throw js = 0, gf = null, Error(p(185));
    Pa(n, o, s), (!(Dt & 2) || n !== Nn) && (n === Nn && (!(Dt & 2) && ($u |= o), Zn === 4 && La(n, Xn)), Jn(n, s), o === 1 && Dt === 0 && !(r.mode & 1) && (zu = at() + 500, sr && ci()));
  }
  function Jn(n, r) {
    var o = n.callbackNode;
    To(n, r);
    var s = Br(n, n === Nn ? Xn : 0);
    if (s === 0) o !== null && fe(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && fe(o), r === 1) n.tag === 0 ? Hd(Hu.bind(null, n)) : Ud(Hu.bind(null, n)), Nd(function() {
        !(Dt & 6) && ci();
      }), o = null;
      else {
        switch (Xl(s)) {
          case 1:
            o = Rn;
            break;
          case 4:
            o = wt;
            break;
          case 16:
            o = ji;
            break;
          case 536870912:
            o = Ql;
            break;
          default:
            o = ji;
        }
        o = Ah(o, bf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function bf(n, r) {
    if (Vs = -1, Rl = 0, Dt & 6) throw Error(p(327));
    var o = n.callbackNode;
    if (Fu() && n.callbackNode !== o) return null;
    var s = Br(n, n === Nn ? Xn : 0);
    if (s === 0) return null;
    if (s & 30 || s & n.expiredLanes || r) r = Ef(n, s);
    else {
      r = s;
      var d = Dt;
      Dt |= 2;
      var h = kh();
      (Nn !== n || Xn !== r) && (ro = null, zu = at() + 500, kl(n, r));
      do
        try {
          Jy();
          break;
        } catch (x) {
          xh(n, x);
        }
      while (!0);
      Oi(), wl.current = h, Dt = d, yn !== null ? r = 0 : (Nn = null, Xn = 0, r = Zn);
    }
    if (r !== 0) {
      if (r === 2 && (d = Ro(n), d !== 0 && (s = d, r = xl(n, d))), r === 1) throw o = Fs, kl(n, 0), La(n, s), Jn(n, at()), o;
      if (r === 6) La(n, s);
      else {
        if (d = n.current.alternate, !(s & 30) && !up(d) && (r = Ef(n, s), r === 2 && (h = Ro(n), h !== 0 && (s = h, r = xl(n, h))), r === 1)) throw o = Fs, kl(n, 0), La(n, s), Jn(n, at()), o;
        switch (n.finishedWork = d, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Io(n, Fr, ro);
            break;
          case 3:
            if (La(n, s), (s & 130023424) === s && (r = hf + 500 - at(), 10 < r)) {
              if (Br(n, 0) !== 0) break;
              if (d = n.suspendedLanes, (d & s) !== s) {
                dr(), n.pingedLanes |= n.suspendedLanes & d;
                break;
              }
              n.timeoutHandle = cl(Io.bind(null, n, Fr, ro), r);
              break;
            }
            Io(n, Fr, ro);
            break;
          case 4:
            if (La(n, s), (s & 4194240) === s) break;
            for (r = n.eventTimes, d = -1; 0 < s; ) {
              var C = 31 - Ir(s);
              h = 1 << C, C = r[C], C > d && (d = C), s &= ~h;
            }
            if (s = d, s = at() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Xy(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = cl(Io.bind(null, n, Fr, ro), s);
              break;
            }
            Io(n, Fr, ro);
            break;
          case 5:
            Io(n, Fr, ro);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return Jn(n, at()), n.callbackNode === o ? bf.bind(null, n) : null;
  }
  function xl(n, r) {
    var o = Po;
    return n.current.memoizedState.isDehydrated && (kl(n, r).flags |= 256), n = Ef(n, r), n !== 2 && (r = Fr, Fr = o, r !== null && lp(r)), n;
  }
  function lp(n) {
    Fr === null ? Fr = n : Fr.push.apply(Fr, n);
  }
  function up(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var s = 0; s < o.length; s++) {
          var d = o[s], h = d.getSnapshot;
          d = d.value;
          try {
            if (!Ii(h(), d)) return !1;
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
    for (r &= ~ap, r &= ~$u, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Ir(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function Hu(n) {
    if (Dt & 6) throw Error(p(327));
    Fu();
    var r = Br(n, 0);
    if (!(r & 1)) return Jn(n, at()), null;
    var o = Ef(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = Ro(n);
      s !== 0 && (r = s, o = xl(n, s));
    }
    if (o === 1) throw o = Fs, kl(n, 0), La(n, r), Jn(n, at()), o;
    if (o === 6) throw Error(p(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Io(n, Fr, ro), Jn(n, at()), null;
  }
  function sp(n, r) {
    var o = Dt;
    Dt |= 1;
    try {
      return n(r);
    } finally {
      Dt = o, Dt === 0 && (zu = at() + 500, sr && ci());
    }
  }
  function Ma(n) {
    ta !== null && ta.tag === 0 && !(Dt & 6) && Fu();
    var r = Dt;
    Dt |= 1;
    var o = Ji.transition, s = Bt;
    try {
      if (Ji.transition = null, Bt = 1, n) return n();
    } finally {
      Bt = s, Ji.transition = o, Dt = r, !(Dt & 6) && ci();
    }
  }
  function Sf() {
    gi = Nu.current, Kt(Nu);
  }
  function kl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Jv(o)), yn !== null) for (o = yn.return; o !== null; ) {
      var s = o;
      switch (jd(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && Yi();
          break;
        case 3:
          mu(), Kt(Mn), Kt(ot), Qd();
          break;
        case 5:
          Yd(s);
          break;
        case 4:
          mu();
          break;
        case 13:
          Kt(En);
          break;
        case 19:
          Kt(En);
          break;
        case 10:
          Id(s.type._context);
          break;
        case 22:
        case 23:
          Sf();
      }
      o = o.return;
    }
    if (Nn = n, yn = n = Bo(n.current, null), Xn = gi = r, Zn = 0, Fs = null, ap = $u = Tl = 0, Fr = Po = null, vl !== null) {
      for (r = 0; r < vl.length; r++) if (o = vl[r], s = o.interleaved, s !== null) {
        o.interleaved = null;
        var d = s.next, h = o.pending;
        if (h !== null) {
          var C = h.next;
          h.next = d, s.next = C;
        }
        o.pending = s;
      }
      vl = null;
    }
    return n;
  }
  function xh(n, r) {
    do {
      var o = yn;
      try {
        if (Oi(), Pc.current = Ur, Li) {
          for (var s = je.memoizedState; s !== null; ) {
            var d = s.queue;
            d !== null && (d.pending = null), s = s.next;
          }
          Li = !1;
        }
        if (Ue = 0, xt = lt = je = null, yu = !1, Ds = 0, vf.current = null, o === null || o.return === null) {
          Zn = 1, Fs = r, yn = null;
          break;
        }
        e: {
          var h = n, C = o.return, x = o, O = r;
          if (r = Xn, x.flags |= 32768, O !== null && typeof O == "object" && typeof O.then == "function") {
            var Q = O, ie = x, ae = ie.tag;
            if (!(ie.mode & 1) && (ae === 0 || ae === 11 || ae === 15)) {
              var re = ie.alternate;
              re ? (ie.updateQueue = re.updateQueue, ie.memoizedState = re.memoizedState, ie.lanes = re.lanes) : (ie.updateQueue = null, ie.memoizedState = null);
            }
            var Ee = yh(C);
            if (Ee !== null) {
              Ee.flags &= -257, Zd(Ee, C, x, h, r), Ee.mode & 1 && Ns(h, Q, r), r = Ee, O = Q;
              var ke = r.updateQueue;
              if (ke === null) {
                var Le = /* @__PURE__ */ new Set();
                Le.add(O), r.updateQueue = Le;
              } else ke.add(O);
              break e;
            } else {
              if (!(r & 1)) {
                Ns(h, Q, r), Ps();
                break e;
              }
              O = Error(p(426));
            }
          } else if (mn && x.mode & 1) {
            var Vn = yh(C);
            if (Vn !== null) {
              !(Vn.flags & 65536) && (Vn.flags |= 256), Zd(Vn, C, x, h, r), Pd(jo(O, x));
              break e;
            }
          }
          h = O = jo(O, x), Zn !== 4 && (Zn = 2), Po === null ? Po = [h] : Po.push(h), h = C;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var F = hh(h, O, r);
                lh(h, F);
                break e;
              case 1:
                x = O;
                var $ = h.type, I = h.stateNode;
                if (!(h.flags & 128) && (typeof $.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (ea === null || !ea.has(I)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var de = mh(h, x, r);
                  lh(h, de);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        Dh(o);
      } catch (He) {
        r = He, yn === o && o !== null && (yn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function kh() {
    var n = wl.current;
    return wl.current = Ur, n === null ? Ur : n;
  }
  function Ps() {
    (Zn === 0 || Zn === 3 || Zn === 2) && (Zn = 4), Nn === null || !(Tl & 268435455) && !($u & 268435455) || La(Nn, Xn);
  }
  function Ef(n, r) {
    var o = Dt;
    Dt |= 2;
    var s = kh();
    (Nn !== n || Xn !== r) && (ro = null, kl(n, r));
    do
      try {
        Zy();
        break;
      } catch (d) {
        xh(n, d);
      }
    while (!0);
    if (Oi(), Dt = o, wl.current = s, yn !== null) throw Error(p(261));
    return Nn = null, Xn = 0, Zn;
  }
  function Zy() {
    for (; yn !== null; ) _h(yn);
  }
  function Jy() {
    for (; yn !== null && !Qe(); ) _h(yn);
  }
  function _h(n) {
    var r = Mh(n.alternate, n, gi);
    n.memoizedProps = n.pendingProps, r === null ? Dh(n) : yn = r, vf.current = null;
  }
  function Dh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Gy(o, r), o !== null) {
          o.flags &= 32767, yn = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Zn = 6, yn = null;
          return;
        }
      } else if (o = Qy(o, r, gi), o !== null) {
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
    var s = Bt, d = Ji.transition;
    try {
      Ji.transition = null, Bt = 1, eg(n, r, o, s);
    } finally {
      Ji.transition = d, Bt = s;
    }
    return null;
  }
  function eg(n, r, o, s) {
    do
      Fu();
    while (ta !== null);
    if (Dt & 6) throw Error(p(327));
    o = n.finishedWork;
    var d = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(p(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = o.lanes | o.childLanes;
    if (pd(n, h), n === Nn && (yn = Nn = null, Xn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Uu || (Uu = !0, Ah(ji, function() {
      return Fu(), null;
    })), h = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || h) {
      h = Ji.transition, Ji.transition = null;
      var C = Bt;
      Bt = 1;
      var x = Dt;
      Dt |= 4, vf.current = null, qy(n, o), Th(o, n), Tc(sl), Pi = !!Md, sl = Md = null, n.current = o, Ky(o), It(), Dt = x, Bt = C, Ji.transition = h;
    } else n.current = o;
    if (Uu && (Uu = !1, ta = n, yf = d), h = n.pendingLanes, h === 0 && (ea = null), os(o.stateNode), Jn(n, at()), r !== null) for (s = n.onRecoverableError, o = 0; o < r.length; o++) d = r[o], s(d.value, { componentStack: d.stack, digest: d.digest });
    if (mf) throw mf = !1, n = op, op = null, n;
    return yf & 1 && n.tag !== 0 && Fu(), h = n.pendingLanes, h & 1 ? n === gf ? js++ : (js = 0, gf = n) : js = 0, ci(), null;
  }
  function Fu() {
    if (ta !== null) {
      var n = Xl(yf), r = Ji.transition, o = Bt;
      try {
        if (Ji.transition = null, Bt = 16 > n ? 16 : n, ta === null) var s = !1;
        else {
          if (n = ta, ta = null, yf = 0, Dt & 6) throw Error(p(331));
          var d = Dt;
          for (Dt |= 4, xe = n.current; xe !== null; ) {
            var h = xe, C = h.child;
            if (xe.flags & 16) {
              var x = h.deletions;
              if (x !== null) {
                for (var O = 0; O < x.length; O++) {
                  var Q = x[O];
                  for (xe = Q; xe !== null; ) {
                    var ie = xe;
                    switch (ie.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Du(8, ie, h);
                    }
                    var ae = ie.child;
                    if (ae !== null) ae.return = ie, xe = ae;
                    else for (; xe !== null; ) {
                      ie = xe;
                      var re = ie.sibling, Ee = ie.return;
                      if (Ch(ie), ie === Q) {
                        xe = null;
                        break;
                      }
                      if (re !== null) {
                        re.return = Ee, xe = re;
                        break;
                      }
                      xe = Ee;
                    }
                  }
                }
                var ke = h.alternate;
                if (ke !== null) {
                  var Le = ke.child;
                  if (Le !== null) {
                    ke.child = null;
                    do {
                      var Vn = Le.sibling;
                      Le.sibling = null, Le = Vn;
                    } while (Le !== null);
                  }
                }
                xe = h;
              }
            }
            if (h.subtreeFlags & 2064 && C !== null) C.return = h, xe = C;
            else e: for (; xe !== null; ) {
              if (h = xe, h.flags & 2048) switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  Du(9, h, h.return);
              }
              var F = h.sibling;
              if (F !== null) {
                F.return = h.return, xe = F;
                break e;
              }
              xe = h.return;
            }
          }
          var $ = n.current;
          for (xe = $; xe !== null; ) {
            C = xe;
            var I = C.child;
            if (C.subtreeFlags & 2064 && I !== null) I.return = C, xe = I;
            else e: for (C = $; xe !== null; ) {
              if (x = xe, x.flags & 2048) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    df(9, x);
                }
              } catch (He) {
                $n(x, x.return, He);
              }
              if (x === C) {
                xe = null;
                break e;
              }
              var de = x.sibling;
              if (de !== null) {
                de.return = x.return, xe = de;
                break e;
              }
              xe = x.return;
            }
          }
          if (Dt = d, ci(), ai && typeof ai.onPostCommitFiberRoot == "function") try {
            ai.onPostCommitFiberRoot(Eo, n);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Bt = o, Ji.transition = r;
      }
    }
    return !1;
  }
  function Oh(n, r, o) {
    r = jo(o, r), r = hh(n, r, 1), n = Ho(n, r, 1), r = dr(), n !== null && (Pa(n, 1, r), Jn(n, r));
  }
  function $n(n, r, o) {
    if (n.tag === 3) Oh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Oh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var s = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ea === null || !ea.has(s))) {
          n = jo(o, n), n = mh(r, n, 1), r = Ho(r, n, 1), n = dr(), r !== null && (Pa(r, 1, n), Jn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function tg(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = dr(), n.pingedLanes |= n.suspendedLanes & o, Nn === n && (Xn & o) === o && (Zn === 4 || Zn === 3 && (Xn & 130023424) === Xn && 500 > at() - hf ? kl(n, 0) : ap |= o), Jn(n, r);
  }
  function Lh(n, r) {
    r === 0 && (n.mode & 1 ? (r = Co, Co <<= 1, !(Co & 130023424) && (Co = 4194304)) : r = 1);
    var o = dr();
    n = eo(n, r), n !== null && (Pa(n, r, o), Jn(n, o));
  }
  function cp(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Lh(n, o);
  }
  function ng(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var s = n.stateNode, d = n.memoizedState;
        d !== null && (o = d.retryLane);
        break;
      case 19:
        s = n.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    s !== null && s.delete(r), Lh(n, o);
  }
  var Mh;
  Mh = function(n, r, o) {
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
        var d = Wi(r, ot.current);
        pu(r, o), d = te(null, r, s, n, d, o);
        var h = Yn();
        return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Sn(s) ? (h = !0, Oc(r)) : h = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Uc(r), d.updater = Sl, r.stateNode = d, d._reactInternals = r, Kd(r, s, n, o), r = of(null, r, s, !0, h, o)) : (r.tag = 0, mn && h && Lc(r), Fn(null, r, d, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (Us(n, r), n = r.pendingProps, d = s._init, s = d(s._payload), r.type = s, d = r.tag = rg(s), n = hi(s, n), d) {
            case 0:
              r = mt(null, r, s, n, o);
              break e;
            case 1:
              r = $s(null, r, s, n, o);
              break e;
            case 11:
              r = Tu(null, r, s, n, o);
              break e;
            case 14:
              r = Vo(null, r, s, hi(s.type, n), o);
              break e;
          }
          throw Error(p(
            306,
            s,
            ""
          ));
        }
        return r;
      case 0:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : hi(s, d), mt(n, r, s, d, o);
      case 1:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : hi(s, d), $s(n, r, s, d, o);
      case 3:
        e: {
          if (Yy(r), n === null) throw Error(p(387));
          s = r.pendingProps, h = r.memoizedState, d = h.element, vu(n, r), Fc(r, s, null, o);
          var C = r.memoizedState;
          if (s = C.element, h.isDehydrated) if (h = { element: s, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
            d = jo(Error(p(423)), r), r = bh(n, r, s, o, d);
            break e;
          } else if (s !== d) {
            d = jo(Error(p(424)), r), r = bh(n, r, s, o, d);
            break e;
          } else for (pi = ma(r.stateNode.containerInfo.firstChild), Di = r, mn = !0, Gi = null, o = ah(r, null, s, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (kn(), s === d) {
              r = jn(n, r, o);
              break e;
            }
            Fn(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return sh(r), n === null && Ac(r), s = r.type, d = r.pendingProps, h = n !== null ? n.memoizedProps : null, C = d.children, Es(s, d) ? C = null : h !== null && Es(s, h) && (r.flags |= 32), El(n, r), Fn(n, r, C, o), r.child;
      case 6:
        return n === null && Ac(r), null;
      case 13:
        return Sh(n, r, o);
      case 4:
        return Wd(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = du(r, null, s, o) : Fn(n, r, s, o), r.child;
      case 11:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : hi(s, d), Tu(n, r, s, d, o);
      case 7:
        return Fn(n, r, r.pendingProps, o), r.child;
      case 8:
        return Fn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Fn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, d = r.pendingProps, h = r.memoizedProps, C = d.value, Zt(Ja, s._currentValue), s._currentValue = C, h !== null) if (Ii(h.value, C)) {
            if (h.children === d.children && !Mn.current) {
              r = jn(n, r, o);
              break e;
            }
          } else for (h = r.child, h !== null && (h.return = r); h !== null; ) {
            var x = h.dependencies;
            if (x !== null) {
              C = h.child;
              for (var O = x.firstContext; O !== null; ) {
                if (O.context === s) {
                  if (h.tag === 1) {
                    O = vi(-1, o & -o), O.tag = 2;
                    var Q = h.updateQueue;
                    if (Q !== null) {
                      Q = Q.shared;
                      var ie = Q.pending;
                      ie === null ? O.next = O : (O.next = ie.next, ie.next = O), Q.pending = O;
                    }
                  }
                  h.lanes |= o, O = h.alternate, O !== null && (O.lanes |= o), Bd(
                    h.return,
                    o,
                    r
                  ), x.lanes |= o;
                  break;
                }
                O = O.next;
              }
            } else if (h.tag === 10) C = h.type === r.type ? null : h.child;
            else if (h.tag === 18) {
              if (C = h.return, C === null) throw Error(p(341));
              C.lanes |= o, x = C.alternate, x !== null && (x.lanes |= o), Bd(C, o, r), C = h.sibling;
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
          Fn(n, r, d.children, o), r = r.child;
        }
        return r;
      case 9:
        return d = r.type, s = r.pendingProps.children, pu(r, o), d = Ki(d), s = s(d), r.flags |= 1, Fn(n, r, s, o), r.child;
      case 14:
        return s = r.type, d = hi(s, r.pendingProps), d = hi(s.type, d), Vo(n, r, s, d, o);
      case 15:
        return af(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : hi(s, d), Us(n, r), r.tag = 1, Sn(s) ? (n = !0, Oc(r)) : n = !1, pu(r, o), dh(r, s, d), Kd(r, s, d, o), of(null, r, s, !0, n, o);
      case 19:
        return ep(n, r, o);
      case 22:
        return yi(n, r, o);
    }
    throw Error(p(156, r.tag));
  };
  function Ah(n, r) {
    return P(n, r);
  }
  function Nh(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function na(n, r, o, s) {
    return new Nh(n, r, o, s);
  }
  function fp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function rg(n) {
    if (typeof n == "function") return fp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === sn) return 11;
      if (n === Tt) return 14;
    }
    return 2;
  }
  function Bo(n, r) {
    var o = n.alternate;
    return o === null ? (o = na(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Cf(n, r, o, s, d, h) {
    var C = 2;
    if (s = n, typeof n == "function") fp(n) && (C = 1);
    else if (typeof n == "string") C = 5;
    else e: switch (n) {
      case We:
        return _l(o.children, d, h, r);
      case Gt:
        C = 8, d |= 8;
        break;
      case Me:
        return n = na(12, o, r, d | 2), n.elementType = Me, n.lanes = h, n;
      case Pe:
        return n = na(13, o, r, d), n.elementType = Pe, n.lanes = h, n;
      case rt:
        return n = na(19, o, r, d), n.elementType = rt, n.lanes = h, n;
      case Re:
        return wf(o, d, h, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Ht:
            C = 10;
            break e;
          case Nt:
            C = 9;
            break e;
          case sn:
            C = 11;
            break e;
          case Tt:
            C = 14;
            break e;
          case it:
            C = 16, s = null;
            break e;
        }
        throw Error(p(130, n == null ? n : typeof n, ""));
    }
    return r = na(C, o, r, d), r.elementType = n, r.type = s, r.lanes = h, r;
  }
  function _l(n, r, o, s) {
    return n = na(7, n, s, r), n.lanes = o, n;
  }
  function wf(n, r, o, s) {
    return n = na(22, n, s, r), n.elementType = Re, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Tf(n, r, o) {
    return n = na(6, n, null, r), n.lanes = o, n;
  }
  function Is(n, r, o) {
    return r = na(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Bs(n, r, o, s, d) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = s, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function dp(n, r, o, s, d, h, C, x, O) {
    return n = new Bs(n, r, o, x, O), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = na(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Uc(h), n;
  }
  function $h(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ut, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function pp(n) {
    if (!n) return ka;
    n = n._reactInternals;
    e: {
      if (ze(n) !== n || n.tag !== 1) throw Error(p(170));
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
      throw Error(p(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Sn(o)) return Ts(n, o, r);
    }
    return r;
  }
  function vp(n, r, o, s, d, h, C, x, O) {
    return n = dp(o, s, !0, n, d, h, C, x, O), n.context = pp(null), o = n.current, s = dr(), d = io(o), h = vi(s, d), h.callback = r ?? null, Ho(o, h, d), n.current.lanes = d, Pa(n, d, s), Jn(n, s), n;
  }
  function Rf(n, r, o, s) {
    var d = r.current, h = dr(), C = io(d);
    return o = pp(o), r.context === null ? r.context = o : r.pendingContext = o, r = vi(h, C), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = Ho(d, r, C), n !== null && (_n(n, d, C, h), Hc(n, d, C)), C;
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
  function zh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function hp(n, r) {
    zh(n, r), (n = n.alternate) && zh(n, r);
  }
  function ig() {
    return null;
  }
  var mp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function xf(n) {
    this._internalRoot = n;
  }
  Ys.prototype.render = xf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(p(409));
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
      for (var o = 0; o < Xt.length && r !== 0 && r < Xt[o].priority; o++) ;
      Xt.splice(o, 0, n), o === 0 && yc(n);
    }
  };
  function Wo(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function kf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Uh() {
  }
  function ag(n, r, o, s, d) {
    if (d) {
      if (typeof s == "function") {
        var h = s;
        s = function() {
          var Q = Ws(C);
          h.call(Q);
        };
      }
      var C = vp(r, s, n, 0, null, !1, !1, "", Uh);
      return n._reactRootContainer = C, n[Xa] = C.current, su(n.nodeType === 8 ? n.parentNode : n), Ma(), C;
    }
    for (; d = n.lastChild; ) n.removeChild(d);
    if (typeof s == "function") {
      var x = s;
      s = function() {
        var Q = Ws(O);
        x.call(Q);
      };
    }
    var O = dp(n, 0, !1, null, null, !1, !1, "", Uh);
    return n._reactRootContainer = O, n[Xa] = O.current, su(n.nodeType === 8 ? n.parentNode : n), Ma(function() {
      Rf(r, O, o, s);
    }), O;
  }
  function _f(n, r, o, s, d) {
    var h = o._reactRootContainer;
    if (h) {
      var C = h;
      if (typeof d == "function") {
        var x = d;
        d = function() {
          var O = Ws(C);
          x.call(O);
        };
      }
      Rf(r, C, n, d);
    } else C = ag(o, r, n, d, s);
    return Ws(C);
  }
  nl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = fa(r.pendingLanes);
          o !== 0 && (Ta(r, o | 1), Jn(r, at()), !(Dt & 6) && (zu = at() + 500, ci()));
        }
        break;
      case 13:
        Ma(function() {
          var s = eo(n, 1);
          if (s !== null) {
            var d = dr();
            _n(s, n, 1, d);
          }
        }), hp(n, 1);
    }
  }, Zl = function(n) {
    if (n.tag === 13) {
      var r = eo(n, 134217728);
      if (r !== null) {
        var o = dr();
        _n(r, n, 134217728, o);
      }
      hp(n, 134217728);
    }
  }, Lt = function(n) {
    if (n.tag === 13) {
      var r = io(n), o = eo(n, r);
      if (o !== null) {
        var s = dr();
        _n(o, n, r, s);
      }
      hp(n, r);
    }
  }, Jl = function() {
    return Bt;
  }, eu = function(n, r) {
    var o = Bt;
    try {
      return Bt = n, r();
    } finally {
      Bt = o;
    }
  }, hr = function(n, r, o) {
    switch (r) {
      case "input":
        if (wn(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var d = Ge(s);
              if (!d) throw Error(p(90));
              rr(s), wn(s, d);
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
  }, Va = sp, bo = Ma;
  var og = { usingClientEntryPoint: !1, Events: [ws, cu, Ge, ri, Ca, sp] }, Qs = { findFiberByHostInstance: Bi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hh = { bundleType: Qs.bundleType, version: Qs.version, rendererPackageName: Qs.rendererPackageName, rendererConfig: Qs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Et(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Qs.findFiberByHostInstance || ig, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Df = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Df.isDisabled && Df.supportsFiber) try {
      Eo = Df.inject(Hh), ai = Df;
    } catch {
    }
  }
  return ua.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = og, ua.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wo(r)) throw Error(p(200));
    return $h(n, r, null, o);
  }, ua.createRoot = function(n, r) {
    if (!Wo(n)) throw Error(p(299));
    var o = !1, s = "", d = mp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = dp(n, 1, !1, null, null, o, !1, s, d), n[Xa] = r.current, su(n.nodeType === 8 ? n.parentNode : n), new xf(r);
  }, ua.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : (n = Object.keys(n).join(","), Error(p(268, n)));
    return n = Et(r), n = n === null ? null : n.stateNode, n;
  }, ua.flushSync = function(n) {
    return Ma(n);
  }, ua.hydrate = function(n, r, o) {
    if (!kf(r)) throw Error(p(200));
    return _f(null, n, r, !0, o);
  }, ua.hydrateRoot = function(n, r, o) {
    if (!Wo(n)) throw Error(p(405));
    var s = o != null && o.hydratedSources || null, d = !1, h = "", C = mp;
    if (o != null && (o.unstable_strictMode === !0 && (d = !0), o.identifierPrefix !== void 0 && (h = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = vp(r, null, n, 1, o ?? null, d, !1, h, C), n[Xa] = r.current, su(n), s) for (n = 0; n < s.length; n++) o = s[n], d = o._getVersion, d = d(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, d] : r.mutableSourceEagerHydrationData.push(
      o,
      d
    );
    return new Ys(r);
  }, ua.render = function(n, r, o) {
    if (!kf(r)) throw Error(p(200));
    return _f(null, n, r, !1, o);
  }, ua.unmountComponentAtNode = function(n) {
    if (!kf(n)) throw Error(p(40));
    return n._reactRootContainer ? (Ma(function() {
      _f(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Xa] = null;
      });
    }), !0) : !1;
  }, ua.unstable_batchedUpdates = sp, ua.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!kf(o)) throw Error(p(200));
    if (n == null || n._reactInternals === void 0) throw Error(p(38));
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
var A1;
function KL() {
  return A1 || (A1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var f = Wl, u = hT(), p = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, y = !1;
    function E(e) {
      y = e;
    }
    function R(e) {
      if (!y) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          i[a - 1] = arguments[a];
        L("warn", e, i);
      }
    }
    function g(e) {
      if (!y) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          i[a - 1] = arguments[a];
        L("error", e, i);
      }
    }
    function L(e, t, i) {
      {
        var a = p.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (t += "%s", i = i.concat([l]));
        var c = i.map(function(v) {
          return String(v);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var k = 0, A = 1, H = 2, M = 3, K = 4, W = 5, ue = 6, Be = 7, we = 8, gt = 9, ge = 10, Fe = 11, pt = 12, Oe = 13, ut = 14, We = 15, Gt = 16, Me = 17, Ht = 18, Nt = 19, sn = 21, Pe = 22, rt = 23, Tt = 24, it = 25, Re = !0, se = !1, Ae = !1, ve = !1, U = !1, X = !0, qe = !1, Ne = !0, vt = !0, ht = !0, kt = !0, bt = /* @__PURE__ */ new Set(), St = {}, en = {};
    function nr(e, t) {
      rr(e, t), rr(e + "Capture", t);
    }
    function rr(e, t) {
      St[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), St[e] = t;
      {
        var i = e.toLowerCase();
        en[i] = e, e === "onDoubleClick" && (en.ondblclick = e);
      }
      for (var a = 0; a < t.length; a++)
        bt.add(t[a]);
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
    var jr = 0, Gn = 1, Lr = 2, pn = 3, qn = 4, Vr = 5, vr = 6, pe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", $e = pe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ft = new RegExp("^[" + pe + "][" + $e + "]*$"), Ft = {}, jt = {};
    function Tn(e) {
      return zn.call(jt, e) ? !0 : zn.call(Ft, e) ? !1 : ft.test(e) ? (jt[e] = !0, !0) : (Ft[e] = !0, g("Invalid attribute name: `%s`", e), !1);
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
    function qt(e, t, i, a) {
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
          case Vr:
            return isNaN(t);
          case vr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function hr(e) {
      return Pt.hasOwnProperty(e) ? Pt[e] : null;
    }
    function Vt(e, t, i, a, l, c, v) {
      this.acceptsBooleans = t === Lr || t === pn || t === qn, this.attributeName = a, this.attributeNamespace = l, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = v;
    }
    var Pt = {}, Ri = [
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
      Pt[e] = new Vt(
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
      Pt[t] = new Vt(
        t,
        Gn,
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
      Pt[e] = new Vt(
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
      Pt[e] = new Vt(
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
      Pt[e] = new Vt(
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
      Pt[e] = new Vt(
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
      Pt[e] = new Vt(
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
      Pt[e] = new Vt(
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
      Pt[e] = new Vt(
        e,
        Vr,
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
      Pt[t] = new Vt(
        t,
        Gn,
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
      Pt[t] = new Vt(
        t,
        Gn,
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
      Pt[t] = new Vt(
        t,
        Gn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Pt[e] = new Vt(
        e,
        Gn,
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
    var Va = "xlinkHref";
    Pt[Va] = new Vt(
      "xlinkHref",
      Gn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Pt[e] = new Vt(
        e,
        Gn,
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
        var c = a.attributeName, v = null;
        if (a.type === qn) {
          if (e.hasAttribute(c)) {
            var m = e.getAttribute(c);
            return m === "" ? !0 : qt(t, i, a, !1) ? m : m === "" + i ? i : m;
          }
        } else if (e.hasAttribute(c)) {
          if (qt(t, i, a, !1))
            return e.getAttribute(c);
          if (a.type === pn)
            return i;
          v = e.getAttribute(c);
        }
        return qt(t, i, a, !1) ? v === null ? i : v : v === "" + i ? i : v;
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
    function Nr(e, t, i, a) {
      var l = hr(t);
      if (!vn(t, l, a)) {
        if (qt(t, i, l, a) && (i = null), a || l === null) {
          if (Tn(t)) {
            var c = t;
            i === null ? e.removeAttribute(c) : (_r(i, t), e.setAttribute(c, "" + i));
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
        var w = l.attributeName, T = l.attributeNamespace;
        if (i === null)
          e.removeAttribute(w);
        else {
          var z = l.type, N;
          z === pn || z === qn && i === !0 ? N = "" : (_r(i, w), N = "" + i, l.sanitizeURL && wa(N.toString())), T ? e.setAttributeNS(T, w, N) : e.setAttribute(w, N);
        }
      }
    }
    var bn = Symbol.for("react.element"), mr = Symbol.for("react.portal"), Pr = Symbol.for("react.fragment"), Fi = Symbol.for("react.strict_mode"), xi = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), ne = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), Ct = Symbol.for("react.suspense_list"), _t = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), Et = Symbol.for("react.scope"), Hn = Symbol.for("react.debug_trace_mode"), P = Symbol.for("react.offscreen"), fe = Symbol.for("react.legacy_hidden"), Qe = Symbol.for("react.cache"), It = Symbol.for("react.tracing_marker"), at = Symbol.iterator, tn = "@@iterator";
    function Rn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = at && e[at] || e[tn];
      return typeof t == "function" ? t : null;
    }
    var wt = Object.assign, ji = 0, So, Ql, Eo, ai, os, Ir, ls;
    function us() {
    }
    us.__reactDisabledLog = !0;
    function hc() {
      {
        if (ji === 0) {
          So = console.log, Ql = console.info, Eo = console.warn, ai = console.error, os = console.group, Ir = console.groupCollapsed, ls = console.groupEnd;
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
            log: wt({}, e, {
              value: So
            }),
            info: wt({}, e, {
              value: Ql
            }),
            warn: wt({}, e, {
              value: Eo
            }),
            error: wt({}, e, {
              value: ai
            }),
            group: wt({}, e, {
              value: os
            }),
            groupCollapsed: wt({}, e, {
              value: Ir
            }),
            groupEnd: wt({}, e, {
              value: ls
            })
          });
        }
        ji < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Co = p.ReactCurrentDispatcher, fa;
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
      var c;
      c = Co.current, Co.current = null, hc();
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
            } catch (G) {
              a = G;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (G) {
              a = G;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            a = G;
          }
          e();
        }
      } catch (G) {
        if (G && a && typeof G.stack == "string") {
          for (var m = G.stack.split(`
`), b = a.stack.split(`
`), w = m.length - 1, T = b.length - 1; w >= 1 && T >= 0 && m[w] !== b[T]; )
            T--;
          for (; w >= 1 && T >= 0; w--, T--)
            if (m[w] !== b[T]) {
              if (w !== 1 || T !== 1)
                do
                  if (w--, T--, T < 0 || m[w] !== b[T]) {
                    var z = `
` + m[w].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && To.set(e, z), z;
                  }
                while (w >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        wo = !1, Co.current = c, Gl(), Error.prepareStackTrace = l;
      }
      var N = e ? e.displayName || e.name : "", B = N ? Br(N) : "";
      return typeof e == "function" && To.set(e, B), B;
    }
    function Kl(e, t, i) {
      return ql(e, !0);
    }
    function Pa(e, t, i) {
      return ql(e, !1);
    }
    function pd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ta(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ql(e, pd(e));
      if (typeof e == "string")
        return Br(e);
      switch (e) {
        case ze:
          return Br("Suspense");
        case Ct:
          return Br("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case oe:
            return Pa(e.render);
          case _t:
            return Ta(e.type, t, i);
          case Ye: {
            var a = e, l = a._payload, c = a._init;
            try {
              return Ta(c(l), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    function Bt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case W:
          return Br(e.type);
        case Gt:
          return Br("Lazy");
        case Oe:
          return Br("Suspense");
        case Nt:
          return Br("SuspenseList");
        case k:
        case H:
        case We:
          return Pa(e.type);
        case Fe:
          return Pa(e.type.render);
        case A:
          return Kl(e.type);
        default:
          return "";
      }
    }
    function Xl(e) {
      try {
        var t = "", i = e;
        do
          t += Bt(i), i = i.return;
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
    function Lt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Pr:
          return "Fragment";
        case mr:
          return "Portal";
        case xi:
          return "Profiler";
        case Fi:
          return "StrictMode";
        case ze:
          return "Suspense";
        case Ct:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ne:
            var t = e;
            return Zl(t) + ".Consumer";
          case D:
            var i = e;
            return Zl(i._context) + ".Provider";
          case oe:
            return nl(e, e.render, "ForwardRef");
          case _t:
            var a = e.displayName || null;
            return a !== null ? a : Lt(e.type) || "Memo";
          case Ye: {
            var l = e, c = l._payload, v = l._init;
            try {
              return Lt(v(c));
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
    function st(e) {
      var t = e.tag, i = e.type;
      switch (t) {
        case Tt:
          return "Cache";
        case gt:
          var a = i;
          return eu(a) + ".Consumer";
        case ge:
          var l = i;
          return eu(l._context) + ".Provider";
        case Ht:
          return "DehydratedFragment";
        case Fe:
          return Jl(i, i.render, "ForwardRef");
        case Be:
          return "Fragment";
        case W:
          return i;
        case K:
          return "Portal";
        case M:
          return "Root";
        case ue:
          return "Text";
        case Gt:
          return Lt(i);
        case we:
          return i === Fi ? "StrictMode" : "Mode";
        case Pe:
          return "Offscreen";
        case pt:
          return "Profiler";
        case sn:
          return "Scope";
        case Oe:
          return "Suspense";
        case Nt:
          return "SuspenseList";
        case it:
          return "TracingMarker";
        case A:
        case k:
        case Me:
        case H:
        case ut:
        case We:
          if (typeof i == "function")
            return i.displayName || i.name || null;
          if (typeof i == "string")
            return i;
          break;
      }
      return null;
    }
    var rl = p.ReactDebugCurrentFrame, xn = null, oi = !1;
    function Wr() {
      {
        if (xn === null)
          return null;
        var e = xn._debugOwner;
        if (e !== null && typeof e < "u")
          return st(e);
      }
      return null;
    }
    function xo() {
      return xn === null ? "" : Xl(xn);
    }
    function Ln() {
      rl.getCurrentStack = null, xn = null, oi = !1;
    }
    function Xt(e) {
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
    function Vi(e) {
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
        var l = i.get, c = i.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(m) {
            ar(m), a = "" + m, c.call(this, m);
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
            Vi(e), delete e[t];
          }
        };
        return v;
      }
    }
    function Pi(e) {
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
      var i = e, a = t.checked, l = wt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: a ?? i._wrapperState.initialChecked
      });
      return l;
    }
    function _(e, t) {
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
      a != null && Nr(i, "checked", a, !1);
    }
    function q(e, t) {
      var i = e;
      {
        var a = da(t);
        !i._wrapperState.controlled && a && !ss && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ss = !0), i._wrapperState.controlled && !a && !nu && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), nu = !0);
      }
      Y(e, t);
      var l = Ra(t.value), c = t.type;
      if (l != null)
        c === "number" ? (l === 0 && i.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        i.value != l) && (i.value = lr(l)) : i.value !== lr(l) && (i.value = lr(l));
      else if (c === "submit" || c === "reset") {
        i.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Xe(i, t.type, l) : t.hasOwnProperty("defaultValue") && Xe(i, t.type, Ra(t.defaultValue)), t.checked == null && t.defaultChecked != null && (i.defaultChecked = !!t.defaultChecked);
    }
    function ce(e, t, i) {
      var a = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, c = l === "submit" || l === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var v = lr(a._wrapperState.initialValue);
        i || v !== a.value && (a.value = v), a.defaultValue = v;
      }
      var m = a.name;
      m !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, m !== "" && (a.name = m);
    }
    function Ze(e, t) {
      var i = e;
      q(i, t), ye(i, t);
    }
    function ye(e, t) {
      var i = t.name;
      if (t.type === "radio" && i != null) {
        for (var a = e; a.parentNode; )
          a = a.parentNode;
        _r(i, "name");
        for (var l = a.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), c = 0; c < l.length; c++) {
          var v = l[c];
          if (!(v === e || v.form !== e.form)) {
            var m = tm(v);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            tu(v), q(v, m);
          }
        }
      }
    }
    function Xe(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Do(e.ownerDocument) !== e) && (i == null ? e.defaultValue = lr(e._wrapperState.initialValue) : e.defaultValue !== lr(i) && (e.defaultValue = lr(i)));
    }
    var Rt = !1, Ut = !1, on = !1;
    function nn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? f.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || Ut || (Ut = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (on || (on = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Rt && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Rt = !0);
    }
    function ln(e, t) {
      t.value != null && e.setAttribute("value", lr(Ra(t.value)));
    }
    var cn = Array.isArray;
    function Mt(e) {
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
    function vd(e) {
      {
        Ia("select", e);
        for (var t = 0; t < cs.length; t++) {
          var i = cs[t];
          if (e[i] != null) {
            var a = Mt(e[i]);
            e.multiple && !a ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, ru()) : !e.multiple && a && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, ru());
          }
        }
      }
    }
    function pa(e, t, i, a) {
      var l = e.options;
      if (t) {
        for (var c = i, v = {}, m = 0; m < c.length; m++)
          v["$" + c[m]] = !0;
        for (var b = 0; b < l.length; b++) {
          var w = v.hasOwnProperty("$" + l[b].value);
          l[b].selected !== w && (l[b].selected = w), w && a && (l[b].defaultSelected = !0);
        }
      } else {
        for (var T = lr(Ra(i)), z = null, N = 0; N < l.length; N++) {
          if (l[N].value === T) {
            l[N].selected = !0, a && (l[N].defaultSelected = !0);
            return;
          }
          z === null && !l[N].disabled && (z = l[N]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function fs(e, t) {
      return wt({}, t, {
        value: void 0
      });
    }
    function ds(e, t) {
      var i = e;
      vd(t), i._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Wa && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Wa = !0);
    }
    function hd(e, t) {
      var i = e;
      i.multiple = !!t.multiple;
      var a = t.value;
      a != null ? pa(i, !!t.multiple, a, !1) : t.defaultValue != null && pa(i, !!t.multiple, t.defaultValue, !0);
    }
    function Dy(e, t) {
      var i = e, a = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? pa(i, !!t.multiple, l, !1) : a !== !!t.multiple && (t.defaultValue != null ? pa(i, !!t.multiple, t.defaultValue, !0) : pa(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Oy(e, t) {
      var i = e, a = t.value;
      a != null && pa(i, !!t.multiple, a, !1);
    }
    var md = !1;
    function yd(e, t) {
      var i = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var a = wt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: lr(i._wrapperState.initialValue)
      });
      return a;
    }
    function xv(e, t) {
      var i = e;
      Ia("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !md && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Wr() || "A component"), md = !0);
      var a = t.value;
      if (a == null) {
        var l = t.children, c = t.defaultValue;
        if (l != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (c != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Mt(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            c = l;
          }
        }
        c == null && (c = ""), a = c;
      }
      i._wrapperState = {
        initialValue: Ra(a)
      };
    }
    function kv(e, t) {
      var i = e, a = Ra(t.value), l = Ra(t.defaultValue);
      if (a != null) {
        var c = lr(a);
        c !== i.value && (i.value = c), t.defaultValue == null && i.defaultValue !== c && (i.defaultValue = c);
      }
      l != null && (i.defaultValue = lr(l));
    }
    function _v(e, t) {
      var i = e, a = i.textContent;
      a === i._wrapperState.initialValue && a !== "" && a !== null && (i.value = a);
    }
    function gd(e, t) {
      kv(e, t);
    }
    var Ya = "http://www.w3.org/1999/xhtml", Ly = "http://www.w3.org/1998/Math/MathML", bd = "http://www.w3.org/2000/svg";
    function bc(e) {
      switch (e) {
        case "svg":
          return bd;
        case "math":
          return Ly;
        default:
          return Ya;
      }
    }
    function Sd(e, t) {
      return e == null || e === Ya ? bc(t) : e === bd && t === "foreignObject" ? Ya : e;
    }
    var My = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, a, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, a, l);
        });
      } : e;
    }, Sc, Dv = My(function(e, t) {
      if (e.namespaceURI === bd && !("innerHTML" in e)) {
        Sc = Sc || document.createElement("div"), Sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = Sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ui = 1, Qa = 3, Bn = 8, va = 9, al = 11, Ec = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === Qa) {
          i.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Ov = {
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
    function Lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Mv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(iu).forEach(function(e) {
      Mv.forEach(function(t) {
        iu[Lv(t, e)] = iu[e];
      });
    });
    function Cc(e, t, i) {
      var a = t == null || typeof t == "boolean" || t === "";
      return a ? "" : !i && typeof t == "number" && t !== 0 && !(iu.hasOwnProperty(e) && iu[e]) ? t + "px" : (ir(t, e), ("" + t).trim());
    }
    var au = /([A-Z])/g, Ay = /^ms-/;
    function Ny(e) {
      return e.replace(au, "-$1").toLowerCase().replace(Ay, "-ms-");
    }
    var Av = function() {
    };
    {
      var Nv = /^(?:webkit|moz|o)[A-Z]/, $v = /^-ms-/, ps = /-(.)/g, ou = /;\s*$/, lu = {}, uu = {}, zv = !1, Ed = !1, Cd = function(e) {
        return e.replace(ps, function(t, i) {
          return i.toUpperCase();
        });
      }, wd = function(e) {
        lu.hasOwnProperty(e) && lu[e] || (lu[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Cd(e.replace($v, "ms-"))
        ));
      }, Uv = function(e) {
        lu.hasOwnProperty(e) && lu[e] || (lu[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Hv = function(e, t) {
        uu.hasOwnProperty(t) && uu[t] || (uu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ou, "")));
      }, Fv = function(e, t) {
        zv || (zv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, $y = function(e, t) {
        Ed || (Ed = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Av = function(e, t) {
        e.indexOf("-") > -1 ? wd(e) : Nv.test(e) ? Uv(e) : ou.test(t) && Hv(e, t), typeof t == "number" && (isNaN(t) ? Fv(e, t) : isFinite(t) || $y(e, t));
      };
    }
    var zy = Av;
    function Uy(e) {
      {
        var t = "", i = "";
        for (var a in e)
          if (e.hasOwnProperty(a)) {
            var l = e[a];
            if (l != null) {
              var c = a.indexOf("--") === 0;
              t += i + (c ? a : Ny(a)) + ":", t += Cc(a, l, c), i = ";";
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
          l || zy(a, t[a]);
          var c = Cc(a, t[a], l);
          a === "float" && (a = "cssFloat"), l ? i.setProperty(a, c) : i[a] = c;
        }
    }
    function Hy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ii(e) {
      var t = {};
      for (var i in e)
        for (var a = Ov[i] || [i], l = 0; l < a.length; l++)
          t[a[l]] = i;
      return t;
    }
    function vs(e, t) {
      {
        if (!t)
          return;
        var i = Ii(e), a = Ii(t), l = {};
        for (var c in i) {
          var v = i[c], m = a[c];
          if (m && v !== m) {
            var b = v + "," + m;
            if (l[b])
              continue;
            l[b] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Hy(e[v]) ? "Removing" : "Updating", v, m);
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
    }, Pv = wt({
      menuitem: !0
    }, Vv), Iv = "__html";
    function wc(e, t) {
      if (t) {
        if (Pv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Iv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ga(e, t) {
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
    }, Bv = {
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
    }, ha = {}, Td = new RegExp("^(aria)-[" + $e + "]*$"), hs = new RegExp("^(aria)[A-Z][" + $e + "]*$");
    function Rd(e, t) {
      {
        if (zn.call(ha, t) && ha[t])
          return !0;
        if (hs.test(t)) {
          var i = "aria-" + t.slice(4).toLowerCase(), a = Bv.hasOwnProperty(i) ? i : null;
          if (a == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ha[t] = !0, !0;
          if (t !== a)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), ha[t] = !0, !0;
        }
        if (Td.test(t)) {
          var l = t.toLowerCase(), c = Bv.hasOwnProperty(l) ? l : null;
          if (c == null)
            return ha[t] = !0, !1;
          if (t !== c)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), ha[t] = !0, !0;
        }
      }
      return !0;
    }
    function Wv(e, t) {
      {
        var i = [];
        for (var a in t) {
          var l = Rd(e, a);
          l || i.push(a);
        }
        var c = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : i.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function Rc(e, t) {
      Ga(e, t) || Wv(e, t);
    }
    var ol = !1;
    function xd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ol && (ol = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var kd = function() {
    };
    {
      var ur = {}, _d = /^on./, Yv = /^on[^A-Z]/, Qv = new RegExp("^(aria)-[" + $e + "]*$"), Gv = new RegExp("^(aria)[A-Z][" + $e + "]*$");
      kd = function(e, t, i, a) {
        if (zn.call(ur, t) && ur[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ur[t] = !0, !0;
        if (a != null) {
          var c = a.registrationNameDependencies, v = a.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var m = v.hasOwnProperty(l) ? v[l] : null;
          if (m != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, m), ur[t] = !0, !0;
          if (_d.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), ur[t] = !0, !0;
        } else if (_d.test(t))
          return Yv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ur[t] = !0, !0;
        if (Qv.test(t) || Gv.test(t))
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
        if (Tc.hasOwnProperty(l)) {
          var T = Tc[l];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), ur[t] = !0, !0;
        } else if (!w && t !== l)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), ur[t] = !0, !0;
        return typeof i == "boolean" && or(t, i, b, !1) ? (i ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), ur[t] = !0, !0) : w ? !0 : or(t, i, b, !1) ? (ur[t] = !0, !1) : ((i === "false" || i === "true") && b !== null && b.type === pn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), ur[t] = !0), !0);
      };
    }
    var qv = function(e, t, i) {
      {
        var a = [];
        for (var l in t) {
          var c = kd(e, l, t[l], i);
          c || a.push(l);
        }
        var v = a.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : a.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Kv(e, t, i) {
      Ga(e, t) || qv(e, t, i);
    }
    var qa = 1, ms = 2, ll = 4, Fy = qa | ms | ll, ys = null;
    function gs(e) {
      ys !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ys = e;
    }
    function jy() {
      ys === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ys = null;
    }
    function Xv(e) {
      return e === ys;
    }
    function xc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Qa ? t.parentNode : t;
    }
    var un = null, Lo = null, Ka = null;
    function su(e) {
      var t = Pu(e);
      if (t) {
        if (typeof un != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var a = tm(i);
          un(t.stateNode, t.type, a);
        }
      }
    }
    function Zv(e) {
      un = e;
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
    }, Dd = function() {
    }, Od = !1;
    function Vy() {
      var e = bs();
      e && (Dd(), Ss());
    }
    function Ld(e, t, i) {
      if (Od)
        return e(t, i);
      Od = !0;
      try {
        return ul(e, t, i);
      } finally {
        Od = !1, Vy();
      }
    }
    function _c(e, t, i) {
      ul = e, Dd = i;
    }
    function Dc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Md(e, t, i) {
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
      var a = tm(i);
      if (a === null)
        return null;
      var l = a[t];
      if (Md(t, e.type, a))
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
    function Jv(e, t, i, a, l, c, v, m, b) {
      var w = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, w);
      } catch (T) {
        this.onError(T);
      }
    }
    var Ad = Jv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Nd = document.createElement("react");
      Ad = function(t, i, a, l, c, v, m, b, w) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), z = !1, N = !0, B = window.event, G = Object.getOwnPropertyDescriptor(window, "event");
        function Z() {
          Nd.removeEventListener(J, Ke, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = B);
        }
        var be = Array.prototype.slice.call(arguments, 3);
        function Ke() {
          z = !0, Z(), i.apply(a, be), N = !1;
        }
        var Ve, zt = !1, Ot = !1;
        function j(V) {
          if (Ve = V.error, zt = !0, Ve === null && V.colno === 0 && V.lineno === 0 && (Ot = !0), V.defaultPrevented && Ve != null && typeof Ve == "object")
            try {
              Ve._suppressLogging = !0;
            } catch {
            }
        }
        var J = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", j), Nd.addEventListener(J, Ke, !1), T.initEvent(J, !1, !1), Nd.dispatchEvent(T), G && Object.defineProperty(window, "event", G), z && N && (zt ? Ot && (Ve = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ve = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ve)), window.removeEventListener("error", j), !z)
          return Z(), Jv.apply(this, arguments);
      };
    }
    var Py = Ad, Mo = !1, ma = null, Cs = !1, Ao = null, xa = {
      onError: function(e) {
        Mo = !0, ma = e;
      }
    };
    function fl(e, t, i, a, l, c, v, m, b) {
      Mo = !1, ma = null, Py.apply(xa, arguments);
    }
    function Xa(e, t, i, a, l, c, v, m, b) {
      if (fl.apply(this, arguments), Mo) {
        var w = zd();
        Cs || (Cs = !0, Ao = w);
      }
    }
    function $d() {
      if (Cs) {
        var e = Ao;
        throw Cs = !1, Ao = null, e;
      }
    }
    function Iy() {
      return Mo;
    }
    function zd() {
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
    var Ge = (
      /*                      */
      0
    ), No = (
      /*                */
      1
    ), hn = (
      /*                    */
      2
    ), yt = (
      /*                       */
      4
    ), Kt = (
      /*                */
      16
    ), Zt = (
      /*                 */
      32
    ), ka = (
      /*                     */
      64
    ), ot = (
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
    ), $o = (
      /*                   */
      8192
    ), Ts = (
      /*             */
      16384
    ), Oc = Sn | yt | ka | si | Wi | Ts, eh = (
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
    ), Ud = (
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
      yt | Wi | 0
    ), di = hn | yt | Kt | Zt | si | Yi | $o, $r = yt | ka | si | $o, Qi = Sn | Kt, yr = ci | zo | Hd, Za = p.ReactCurrentOwner;
    function _i(e) {
      var t = e, i = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var a = t;
        do
          t = a, (t.flags & (hn | Yi)) !== Ge && (i = t.return), a = t.return;
        while (a);
      }
      return t.tag === M ? i : null;
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
      return e.tag === M ? e.stateNode.containerInfo : null;
    }
    function jd(e) {
      return _i(e) === e;
    }
    function Di(e) {
      {
        var t = Za.current;
        if (t !== null && t.tag === A) {
          var i = t, a = i.stateNode;
          a._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", st(i) || "A component"), a._warnedAboutRefsInRender = !0;
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
        var c = a.return;
        if (c === null)
          break;
        var v = c.alternate;
        if (v === null) {
          var m = c.return;
          if (m !== null) {
            a = l = m;
            continue;
          }
          break;
        }
        if (c.child === v.child) {
          for (var b = c.child; b; ) {
            if (b === a)
              return pi(c), e;
            if (b === l)
              return pi(c), t;
            b = b.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== l.return)
          a = c, l = v;
        else {
          for (var w = !1, T = c.child; T; ) {
            if (T === a) {
              w = !0, a = c, l = v;
              break;
            }
            if (T === l) {
              w = !0, l = c, a = v;
              break;
            }
            T = T.sibling;
          }
          if (!w) {
            for (T = v.child; T; ) {
              if (T === a) {
                w = !0, a = v, l = c;
                break;
              }
              if (T === l) {
                w = !0, l = v, a = c;
                break;
              }
              T = T.sibling;
            }
            if (!w)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (a.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (a.tag !== M)
        throw new Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Gi(e) {
      var t = mn(e);
      return t !== null ? Vd(t) : null;
    }
    function Vd(e) {
      if (e.tag === W || e.tag === ue)
        return e;
      for (var t = e.child; t !== null; ) {
        var i = Vd(t);
        if (i !== null)
          return i;
        t = t.sibling;
      }
      return null;
    }
    function th(e) {
      var t = mn(e);
      return t !== null ? Mc(t) : null;
    }
    function Mc(e) {
      if (e.tag === W || e.tag === ue)
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
    var Ac = u.unstable_scheduleCallback, nh = u.unstable_cancelCallback, Nc = u.unstable_shouldYield, rh = u.unstable_requestPaint, kn = u.unstable_now, Pd = u.unstable_getCurrentPriorityLevel, $c = u.unstable_ImmediatePriority, pl = u.unstable_UserBlockingPriority, _a = u.unstable_NormalPriority, ih = u.unstable_LowPriority, zc = u.unstable_IdlePriority, du = u.unstable_yieldValue, ah = u.unstable_setDisableYieldValue, Ja = null, Kn = null, he = null, qi = !1, Oi = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Id(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        vt && (e = wt({}, e, {
          getLaneLabelMap: eo,
          injectProfilingHooks: oh
        })), Ja = t.inject(e), Kn = t;
      } catch (i) {
        g("React instrumentation encountered an error: %s.", i);
      }
      return !!t.checkDCE;
    }
    function Bd(e, t) {
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
          var i = (e.current.flags & ot) === ot;
          if (ht) {
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
      if (typeof du == "function" && (ah(e), E(e)), Kn && typeof Kn.setStrictMode == "function")
        try {
          Kn.setStrictMode(Ja, e);
        } catch (t) {
          qi || (qi = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function oh(e) {
      he = e;
    }
    function eo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, i = 0; i < Os; i++) {
          var a = Wy(t);
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
    function Ho(e) {
      he !== null && typeof he.markComponentPassiveEffectMountStarted == "function" && he.markComponentPassiveEffectMountStarted(e);
    }
    function Hc() {
      he !== null && typeof he.markComponentPassiveEffectMountStopped == "function" && he.markComponentPassiveEffectMountStopped();
    }
    function lh(e) {
      he !== null && typeof he.markComponentPassiveEffectUnmountStarted == "function" && he.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fc() {
      he !== null && typeof he.markComponentPassiveEffectUnmountStopped == "function" && he.markComponentPassiveEffectUnmountStopped();
    }
    function uh(e) {
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
    function Wd(e) {
      he !== null && typeof he.markLayoutEffectsStarted == "function" && he.markLayoutEffectsStarted(e);
    }
    function mu() {
      he !== null && typeof he.markLayoutEffectsStopped == "function" && he.markLayoutEffectsStopped();
    }
    function sh(e) {
      he !== null && typeof he.markPassiveEffectsStarted == "function" && he.markPassiveEffectsStarted(e);
    }
    function Yd() {
      he !== null && typeof he.markPassiveEffectsStopped == "function" && he.markPassiveEffectsStopped();
    }
    function En(e) {
      he !== null && typeof he.markRenderStarted == "function" && he.markRenderStarted(e);
    }
    function jc() {
      he !== null && typeof he.markRenderYielded == "function" && he.markRenderYielded();
    }
    function Vc() {
      he !== null && typeof he.markRenderStopped == "function" && he.markRenderStopped();
    }
    function Qd(e) {
      he !== null && typeof he.markRenderScheduled == "function" && he.markRenderScheduled(e);
    }
    function Pc(e, t) {
      he !== null && typeof he.markForceUpdateScheduled == "function" && he.markForceUpdateScheduled(e, t);
    }
    function _s(e, t) {
      he !== null && typeof he.markStateUpdateScheduled == "function" && he.markStateUpdateScheduled(e, t);
    }
    var Ue = (
      /*                         */
      0
    ), je = (
      /*                 */
      1
    ), lt = (
      /*                    */
      2
    ), xt = (
      /*               */
      8
    ), Li = (
      /*              */
      16
    ), yu = Math.clz32 ? Math.clz32 : zr, Ds = Math.log, By = Math.LN2;
    function zr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ds(t) / By | 0) | 0;
    }
    var Os = 31, te = (
      /*                        */
      0
    ), Yn = (
      /*                          */
      0
    ), Ie = (
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
    ), Qc = (
      /*                        */
      2048
    ), yl = (
      /*                        */
      4096
    ), Gc = (
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
    ), Gd = (
      /*                             */
      33554432
    ), nf = (
      /*                             */
      67108864
    ), ch = gl, Ms = (
      /*          */
      134217728
    ), qd = (
      /*                          */
      268435455
    ), wu = (
      /*               */
      268435456
    ), Fo = (
      /*                        */
      536870912
    ), Ur = (
      /*                   */
      1073741824
    );
    function Wy(e) {
      {
        if (e & Ie)
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
        if (e & Fo)
          return "Idle";
        if (e & Ur)
          return "Offscreen";
      }
    }
    var fn = -1, rf = bu, hi = gl;
    function bl(e) {
      switch (Fn(e)) {
        case Ie:
          return Ie;
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
        case Qc:
        case yl:
        case Gc:
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
        case Gd:
        case nf:
          return e & Cu;
        case Ms:
          return Ms;
        case wu:
          return wu;
        case Fo:
          return Fo;
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
      var a = te, l = e.suspendedLanes, c = e.pingedLanes, v = i & qd;
      if (v !== te) {
        var m = v & ~l;
        if (m !== te)
          a = bl(m);
        else {
          var b = v & c;
          b !== te && (a = bl(b));
        }
      } else {
        var w = i & ~l;
        w !== te ? a = bl(w) : c !== te && (a = bl(c));
      }
      if (a === te)
        return te;
      if (t !== te && t !== a && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === te) {
        var T = Fn(a), z = Fn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Xi && (z & ml) !== te
        )
          return t;
      }
      (a & Mi) !== te && (a |= i & Xi);
      var N = e.entangledLanes;
      if (N !== te)
        for (var B = e.entanglements, G = a & N; G > 0; ) {
          var Z = Vo(G), be = 1 << Z;
          a |= B[Z], G &= ~be;
        }
      return a;
    }
    function fh(e, t) {
      for (var i = e.eventTimes, a = fn; t > 0; ) {
        var l = Vo(t), c = 1 << l, v = i[l];
        v > a && (a = v), t &= ~c;
      }
      return a;
    }
    function dh(e, t) {
      switch (e) {
        case Ie:
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
        case Qc:
        case yl:
        case Gc:
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
        case Gd:
        case nf:
          return fn;
        case Ms:
        case wu:
        case Fo:
        case Ur:
          return fn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), fn;
      }
    }
    function ph(e, t) {
      for (var i = e.pendingLanes, a = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, v = i; v > 0; ) {
        var m = Vo(v), b = 1 << m, w = c[m];
        w === fn ? ((b & a) === te || (b & l) !== te) && (c[m] = dh(b, t)) : w <= t && (e.expiredLanes |= b), v &= ~b;
      }
    }
    function Kd(e) {
      return bl(e.pendingLanes);
    }
    function jo(e) {
      var t = e.pendingLanes & ~Ur;
      return t !== te ? t : t & Ur ? Ur : te;
    }
    function Xd(e) {
      return (e & Ie) !== te;
    }
    function As(e) {
      return (e & qd) !== te;
    }
    function vh(e) {
      return (e & Cu) === e;
    }
    function hh(e) {
      var t = Ie | Mi | Xi;
      return (e & t) === te;
    }
    function mh(e) {
      return (e & ml) === e;
    }
    function Ns(e, t) {
      var i = gr | Mi | to | Xi;
      return (t & i) !== te;
    }
    function yh(e, t) {
      return (t & e.expiredLanes) !== te;
    }
    function Zd(e) {
      return (e & ml) !== te;
    }
    function gh() {
      var e = rf;
      return rf <<= 1, (rf & ml) === te && (rf = bu), e;
    }
    function mi() {
      var e = hi;
      return hi <<= 1, (hi & Cu) === te && (hi = gl), e;
    }
    function Fn(e) {
      return e & -e;
    }
    function Tu(e) {
      return Fn(e);
    }
    function Vo(e) {
      return 31 - yu(e);
    }
    function af(e) {
      return Vo(e);
    }
    function yi(e, t) {
      return (e & t) !== te;
    }
    function El(e, t) {
      return (e & t) === t;
    }
    function mt(e, t) {
      return e | t;
    }
    function $s(e, t) {
      return e & ~t;
    }
    function of(e, t) {
      return e & t;
    }
    function Yy(e) {
      return e;
    }
    function bh(e, t) {
      return e !== Yn && e < t ? e : t;
    }
    function zs(e) {
      for (var t = [], i = 0; i < Os; i++)
        t.push(e);
      return t;
    }
    function Cl(e, t, i) {
      e.pendingLanes |= t, t !== Fo && (e.suspendedLanes = te, e.pingedLanes = te);
      var a = e.eventTimes, l = af(t);
      a[l] = i;
    }
    function Sh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var i = e.expirationTimes, a = t; a > 0; ) {
        var l = Vo(a), c = 1 << l;
        i[l] = fn, a &= ~c;
      }
    }
    function lf(e, t, i) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function uf(e, t) {
      var i = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = te, e.pingedLanes = te, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var a = e.entanglements, l = e.eventTimes, c = e.expirationTimes, v = i; v > 0; ) {
        var m = Vo(v), b = 1 << m;
        a[m] = te, l[m] = fn, c[m] = fn, v &= ~b;
      }
    }
    function Jd(e, t) {
      for (var i = e.entangledLanes |= t, a = e.entanglements, l = i; l; ) {
        var c = Vo(l), v = 1 << c;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        a[c] & t && (a[c] |= t), l &= ~v;
      }
    }
    function Eh(e, t) {
      var i = Fn(t), a;
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
        case Qc:
        case yl:
        case Gc:
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
        case Gd:
        case nf:
          a = gu;
          break;
        case Fo:
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
          var l = af(i), c = 1 << l, v = a[l];
          v.add(t), i &= ~c;
        }
    }
    function ep(e, t) {
      if (Oi)
        for (var i = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
          var l = af(t), c = 1 << l, v = i[l];
          v.size > 0 && (v.forEach(function(m) {
            var b = m.alternate;
            (b === null || !a.has(b)) && a.add(m);
          }), v.clear()), t &= ~c;
        }
    }
    function Us(e, t) {
      return null;
    }
    var jn = Ie, no = Mi, Da = Xi, Ru = Fo, xu = Yn;
    function Zi() {
      return xu;
    }
    function An(e) {
      xu = e;
    }
    function Hr(e, t) {
      var i = xu;
      try {
        return xu = e, t();
      } finally {
        xu = i;
      }
    }
    function Qy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Gy(e, t) {
      return e > t ? e : t;
    }
    function ku(e, t) {
      return e !== 0 && e < t;
    }
    function br(e) {
      var t = Fn(e);
      return ku(jn, t) ? ku(no, t) ? As(t) ? Da : Ru : no : jn;
    }
    function cf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var xe;
    function _u(e) {
      xe = e;
    }
    function tp(e) {
      xe(e);
    }
    var ff;
    function qy(e) {
      ff = e;
    }
    var Du;
    function df(e) {
      Du = e;
    }
    var pf;
    function Ch(e) {
      pf = e;
    }
    var np;
    function wh(e) {
      np = e;
    }
    var Hs = !1, Ou = [], Cn = null, cr = null, Yr = null, Lu = /* @__PURE__ */ new Map(), Mu = /* @__PURE__ */ new Map(), fr = [], Th = [
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
      return Th.indexOf(e) > -1;
    }
    function Ky(e, t, i, a, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: i,
        nativeEvent: l,
        targetContainers: [a]
      };
    }
    function rp(e, t) {
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
    function Au(e, t, i, a, l, c) {
      if (e === null || e.nativeEvent !== c) {
        var v = Ky(t, i, a, l, c);
        if (t !== null) {
          var m = Pu(t);
          m !== null && ff(m);
        }
        return v;
      }
      e.eventSystemFlags |= a;
      var b = e.targetContainers;
      return l !== null && b.indexOf(l) === -1 && b.push(l), e;
    }
    function Rh(e, t, i, a, l) {
      switch (t) {
        case "focusin": {
          var c = l;
          return Cn = Au(Cn, e, t, i, a, c), !0;
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
          var T = l, z = T.pointerId;
          return Mu.set(z, Au(Mu.get(z) || null, e, t, i, a, T)), !0;
        }
      }
      return !1;
    }
    function ip(e) {
      var t = Ks(e.target);
      if (t !== null) {
        var i = _i(t);
        if (i !== null) {
          var a = i.tag;
          if (a === Oe) {
            var l = Fd(i);
            if (l !== null) {
              e.blockedOn = l, np(e.priority, function() {
                Du(i);
              });
              return;
            }
          } else if (a === M) {
            var c = i.stateNode;
            if (cf(c)) {
              e.blockedOn = Lc(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Xy(e) {
      for (var t = pf(), i = {
        blockedOn: null,
        target: e,
        priority: t
      }, a = 0; a < fr.length && ku(t, fr[a].priority); a++)
        ;
      fr.splice(a, 0, i), a === 0 && ip(i);
    }
    function wl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var i = t[0], a = Fr(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
        if (a === null) {
          var l = e.nativeEvent, c = new l.constructor(l.type, l);
          gs(c), l.target.dispatchEvent(c), jy();
        } else {
          var v = Pu(a);
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
      Hs = !1, Cn !== null && wl(Cn) && (Cn = null), cr !== null && wl(cr) && (cr = null), Yr !== null && wl(Yr) && (Yr = null), Lu.forEach(vf), Mu.forEach(vf);
    }
    function Dt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Hs || (Hs = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Ji)));
    }
    function Nn(e) {
      if (Ou.length > 0) {
        Dt(Ou[0], e);
        for (var t = 1; t < Ou.length; t++) {
          var i = Ou[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      Cn !== null && Dt(Cn, e), cr !== null && Dt(cr, e), Yr !== null && Dt(Yr, e);
      var a = function(m) {
        return Dt(m, e);
      };
      Lu.forEach(a), Mu.forEach(a);
      for (var l = 0; l < fr.length; l++) {
        var c = fr[l];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; fr.length > 0; ) {
        var v = fr[0];
        if (v.blockedOn !== null)
          break;
        ip(v), v.blockedOn === null && fr.shift();
      }
    }
    var yn = p.ReactCurrentBatchConfig, Xn = !0;
    function gi(e) {
      Xn = !!e;
    }
    function Nu() {
      return Xn;
    }
    function Zn(e, t, i) {
      var a = hf(t), l;
      switch (a) {
        case jn:
          l = Fs;
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
    function Fs(e, t, i, a) {
      var l = Zi(), c = yn.transition;
      yn.transition = null;
      try {
        An(jn), $u(e, t, i, a);
      } finally {
        An(l), yn.transition = c;
      }
    }
    function Tl(e, t, i, a) {
      var l = Zi(), c = yn.transition;
      yn.transition = null;
      try {
        An(no), $u(e, t, i, a);
      } finally {
        An(l), yn.transition = c;
      }
    }
    function $u(e, t, i, a) {
      Xn && ap(e, t, i, a);
    }
    function ap(e, t, i, a) {
      var l = Fr(e, t, i, a);
      if (l === null) {
        vg(e, t, a, Po, i), rp(e, a);
        return;
      }
      if (Rh(l, e, t, i, a)) {
        a.stopPropagation();
        return;
      }
      if (rp(e, a), t & ll && Oa(e)) {
        for (; l !== null; ) {
          var c = Pu(l);
          c !== null && tp(c);
          var v = Fr(e, t, i, a);
          if (v === null && vg(e, t, a, Po, i), v === l)
            break;
          l = v;
        }
        l !== null && a.stopPropagation();
        return;
      }
      vg(e, t, a, null, i);
    }
    var Po = null;
    function Fr(e, t, i, a) {
      Po = null;
      var l = xc(a), c = Ks(l);
      if (c !== null) {
        var v = _i(c);
        if (v === null)
          c = null;
        else {
          var m = v.tag;
          if (m === Oe) {
            var b = Fd(v);
            if (b !== null)
              return b;
            c = null;
          } else if (m === M) {
            var w = v.stateNode;
            if (cf(w))
              return Lc(v);
            c = null;
          } else v !== c && (c = null);
        }
      }
      return Po = c, null;
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
          var t = Pd();
          switch (t) {
            case $c:
              return jn;
            case pl:
              return no;
            case _a:
            case ih:
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
    function op(e, t, i, a) {
      return e.addEventListener(t, i, {
        passive: a
      }), i;
    }
    var ea = null, Uu = null, ta = null;
    function yf(e) {
      return ea = e, Uu = Vs(), !0;
    }
    function js() {
      ea = null, Uu = null, ta = null;
    }
    function gf() {
      if (ta)
        return ta;
      var e, t = Uu, i = t.length, a, l = Vs(), c = l.length;
      for (e = 0; e < i && t[e] === l[e]; e++)
        ;
      var v = i - e;
      for (a = 1; a <= v && t[i - a] === l[c - a]; a++)
        ;
      var m = a > 1 ? 1 - a : void 0;
      return ta = l.slice(e, m), ta;
    }
    function Vs() {
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
      function t(i, a, l, c, v) {
        this._reactName = i, this._targetInst = l, this.type = a, this.nativeEvent = c, this.target = v, this.currentTarget = null;
        for (var m in e)
          if (e.hasOwnProperty(m)) {
            var b = e[m];
            b ? this[m] = b(c) : this[m] = c[m];
          }
        var w = c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1;
        return w ? this.isDefaultPrevented = dr : this.isDefaultPrevented = io, this.isPropagationStopped = io, this;
      }
      return wt(t.prototype, {
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
    }, bf = _n(Jn), xl = wt({}, Jn, {
      view: 0,
      detail: 0
    }), lp = _n(xl), up, La, Hu;
    function sp(e) {
      e !== Hu && (Hu && e.type === "mousemove" ? (up = e.screenX - Hu.screenX, La = e.screenY - Hu.screenY) : (up = 0, La = 0), Hu = e);
    }
    var Ma = wt({}, xl, {
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
      getModifierState: cp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (sp(e), up);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : La;
      }
    }), Sf = _n(Ma), kl = wt({}, Ma, {
      dataTransfer: 0
    }), xh = _n(kl), kh = wt({}, xl, {
      relatedTarget: 0
    }), Ps = _n(kh), Ef = wt({}, Jn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Zy = _n(Ef), Jy = wt({}, Jn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), _h = _n(Jy), Dh = wt({}, Jn, {
      data: 0
    }), Io = _n(Dh), eg = Io, Fu = {
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
    }, Oh = {
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
    function $n(e) {
      if (e.key) {
        var t = Fu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = Rl(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? Oh[e.keyCode] || "Unidentified" : "";
    }
    var tg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Lh(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var a = tg[e];
      return a ? !!i[a] : !1;
    }
    function cp(e) {
      return Lh;
    }
    var ng = wt({}, xl, {
      key: $n,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: cp,
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
    }), Mh = _n(ng), Ah = wt({}, Ma, {
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
    }), Nh = _n(Ah), na = wt({}, xl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: cp
    }), fp = _n(na), rg = wt({}, Jn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bo = _n(rg), Cf = wt({}, Ma, {
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
    var dp = dn && "TextEvent" in window && !Bs, $h = dn && (!Is || Bs && Bs > 8 && Bs <= 11), pp = 32, vp = String.fromCharCode(pp);
    function Rf() {
      nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), nr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), nr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), nr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ws = !1;
    function zh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function hp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ig(e, t) {
      return e === "keydown" && t.keyCode === Tf;
    }
    function mp(e, t) {
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
      var c, v;
      if (Is ? c = hp(t) : Wo ? mp(t, a) && (c = "onCompositionEnd") : ig(t, a) && (c = "onCompositionStart"), !c)
        return null;
      $h && !Ys(a) && (!Wo && c === "onCompositionStart" ? Wo = yf(l) : c === "onCompositionEnd" && Wo && (v = gf()));
      var m = Ph(i, c);
      if (m.length > 0) {
        var b = new Io(c, t, null, a, l);
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
    function Uh(e, t) {
      switch (e) {
        case "compositionend":
          return xf(t);
        case "keypress":
          var i = t.which;
          return i !== pp ? null : (Ws = !0, vp);
        case "textInput":
          var a = t.data;
          return a === vp && Ws ? null : a;
        default:
          return null;
      }
    }
    function ag(e, t) {
      if (Wo) {
        if (e === "compositionend" || !Is && mp(e, t)) {
          var i = gf();
          return js(), Wo = !1, i;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!zh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return $h && !Ys(t) ? null : t.data;
        default:
          return null;
      }
    }
    function _f(e, t, i, a, l) {
      var c;
      if (dp ? c = Uh(t, a) : c = ag(t, a), !c)
        return null;
      var v = Ph(i, "onBeforeInput");
      if (v.length > 0) {
        var m = new eg("onBeforeInput", "beforeinput", null, a, l);
        e.push({
          event: m,
          listeners: v
        }), m.data = c;
      }
    }
    function og(e, t, i, a, l, c, v) {
      kf(e, t, i, a, l), _f(e, t, i, a, l);
    }
    var Qs = {
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
      return t === "input" ? !!Qs[e.type] : t === "textarea";
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
      var l = Ph(t, "onChange");
      if (l.length > 0) {
        var c = new bf("onChange", "change", null, i, a);
        e.push({
          event: c,
          listeners: l
        });
      }
    }
    var o = null, s = null;
    function d(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function h(e) {
      var t = [];
      r(t, s, e, xc(e)), Ld(C, t);
    }
    function C(e) {
      VS(e, 0);
    }
    function x(e) {
      var t = $f(e);
      if (tu(t))
        return e;
    }
    function O(e, t) {
      if (e === "change")
        return t;
    }
    var Q = !1;
    dn && (Q = Df("input") && (!document.documentMode || document.documentMode > 9));
    function ie(e, t) {
      o = e, s = t, o.attachEvent("onpropertychange", re);
    }
    function ae() {
      o && (o.detachEvent("onpropertychange", re), o = null, s = null);
    }
    function re(e) {
      e.propertyName === "value" && x(s) && h(e);
    }
    function Ee(e, t, i) {
      e === "focusin" ? (ae(), ie(t, i)) : e === "focusout" && ae();
    }
    function ke(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return x(s);
    }
    function Le(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Vn(e, t) {
      if (e === "click")
        return x(t);
    }
    function F(e, t) {
      if (e === "input" || e === "change")
        return x(t);
    }
    function $(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Xe(e, "number", e.value);
    }
    function I(e, t, i, a, l, c, v) {
      var m = i ? $f(i) : window, b, w;
      if (d(m) ? b = O : Hh(m) ? Q ? b = F : (b = ke, w = Ee) : Le(m) && (b = Vn), b) {
        var T = b(t, i);
        if (T) {
          r(e, T, a, l);
          return;
        }
      }
      w && w(t, m, i), t === "focusout" && $(m);
    }
    function de() {
      rr("onMouseEnter", ["mouseout", "mouseover"]), rr("onMouseLeave", ["mouseout", "mouseover"]), rr("onPointerEnter", ["pointerout", "pointerover"]), rr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function He(e, t, i, a, l, c, v) {
      var m = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
      if (m && !Xv(a)) {
        var w = a.relatedTarget || a.fromElement;
        if (w && (Ks(w) || Op(w)))
          return;
      }
      if (!(!b && !m)) {
        var T;
        if (l.window === l)
          T = l;
        else {
          var z = l.ownerDocument;
          z ? T = z.defaultView || z.parentWindow : T = window;
        }
        var N, B;
        if (b) {
          var G = a.relatedTarget || a.toElement;
          if (N = i, B = G ? Ks(G) : null, B !== null) {
            var Z = _i(B);
            (B !== Z || B.tag !== W && B.tag !== ue) && (B = null);
          }
        } else
          N = null, B = i;
        if (N !== B) {
          var be = Sf, Ke = "onMouseLeave", Ve = "onMouseEnter", zt = "mouse";
          (t === "pointerout" || t === "pointerover") && (be = Nh, Ke = "onPointerLeave", Ve = "onPointerEnter", zt = "pointer");
          var Ot = N == null ? T : $f(N), j = B == null ? T : $f(B), J = new be(Ke, zt + "leave", N, a, l);
          J.target = Ot, J.relatedTarget = j;
          var V = null, le = Ks(l);
          if (le === i) {
            var Te = new be(Ve, zt + "enter", B, a, l);
            Te.target = j, Te.relatedTarget = Ot, V = Te;
          }
          KT(e, J, V, N, B);
        }
      }
    }
    function Je(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var _e = typeof Object.is == "function" ? Object.is : Je;
    function tt(e, t) {
      if (_e(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var i = Object.keys(e), a = Object.keys(t);
      if (i.length !== a.length)
        return !1;
      for (var l = 0; l < i.length; l++) {
        var c = i[l];
        if (!zn.call(t, c) || !_e(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    function er(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Wt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function ao(e, t) {
      for (var i = er(e), a = 0, l = 0; i; ) {
        if (i.nodeType === Qa) {
          if (l = a + i.textContent.length, a <= t && l >= t)
            return {
              node: i,
              offset: t - a
            };
          a = l;
        }
        i = er(Wt(i));
      }
    }
    function lg(e) {
      var t = e.ownerDocument, i = t && t.defaultView || window, a = i.getSelection && i.getSelection();
      if (!a || a.rangeCount === 0)
        return null;
      var l = a.anchorNode, c = a.anchorOffset, v = a.focusNode, m = a.focusOffset;
      try {
        l.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return OT(e, l, c, v, m);
    }
    function OT(e, t, i, a, l) {
      var c = 0, v = -1, m = -1, b = 0, w = 0, T = e, z = null;
      e: for (; ; ) {
        for (var N = null; T === t && (i === 0 || T.nodeType === Qa) && (v = c + i), T === a && (l === 0 || T.nodeType === Qa) && (m = c + l), T.nodeType === Qa && (c += T.nodeValue.length), (N = T.firstChild) !== null; )
          z = T, T = N;
        for (; ; ) {
          if (T === e)
            break e;
          if (z === t && ++b === i && (v = c), z === a && ++w === l && (m = c), (N = T.nextSibling) !== null)
            break;
          T = z, z = T.parentNode;
        }
        T = N;
      }
      return v === -1 || m === -1 ? null : {
        start: v,
        end: m
      };
    }
    function LT(e, t) {
      var i = e.ownerDocument || document, a = i && i.defaultView || window;
      if (a.getSelection) {
        var l = a.getSelection(), c = e.textContent.length, v = Math.min(t.start, c), m = t.end === void 0 ? v : Math.min(t.end, c);
        if (!l.extend && v > m) {
          var b = m;
          m = v, v = b;
        }
        var w = ao(e, v), T = ao(e, m);
        if (w && T) {
          if (l.rangeCount === 1 && l.anchorNode === w.node && l.anchorOffset === w.offset && l.focusNode === T.node && l.focusOffset === T.offset)
            return;
          var z = i.createRange();
          z.setStart(w.node, w.offset), l.removeAllRanges(), v > m ? (l.addRange(z), l.extend(T.node, T.offset)) : (z.setEnd(T.node, T.offset), l.addRange(z));
        }
      }
    }
    function DS(e) {
      return e && e.nodeType === Qa;
    }
    function OS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : DS(e) ? !1 : DS(t) ? OS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function MT(e) {
      return e && e.ownerDocument && OS(e.ownerDocument.documentElement, e);
    }
    function AT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function LS() {
      for (var e = window, t = Do(); t instanceof e.HTMLIFrameElement; ) {
        if (AT(t))
          e = t.contentWindow;
        else
          return t;
        t = Do(e.document);
      }
      return t;
    }
    function ug(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function NT() {
      var e = LS();
      return {
        focusedElem: e,
        selectionRange: ug(e) ? zT(e) : null
      };
    }
    function $T(e) {
      var t = LS(), i = e.focusedElem, a = e.selectionRange;
      if (t !== i && MT(i)) {
        a !== null && ug(i) && UT(i, a);
        for (var l = [], c = i; c = c.parentNode; )
          c.nodeType === ui && l.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
        typeof i.focus == "function" && i.focus();
        for (var v = 0; v < l.length; v++) {
          var m = l[v];
          m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
        }
      }
    }
    function zT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = lg(e), t || {
        start: 0,
        end: 0
      };
    }
    function UT(e, t) {
      var i = t.start, a = t.end;
      a === void 0 && (a = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(a, e.value.length)) : LT(e, t);
    }
    var HT = dn && "documentMode" in document && document.documentMode <= 11;
    function FT() {
      nr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Of = null, sg = null, yp = null, cg = !1;
    function jT(e) {
      if ("selectionStart" in e && ug(e))
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
    function VT(e) {
      return e.window === e ? e.document : e.nodeType === va ? e : e.ownerDocument;
    }
    function MS(e, t, i) {
      var a = VT(i);
      if (!(cg || Of == null || Of !== Do(a))) {
        var l = jT(Of);
        if (!yp || !tt(yp, l)) {
          yp = l;
          var c = Ph(sg, "onSelect");
          if (c.length > 0) {
            var v = new bf("onSelect", "select", null, t, i);
            e.push({
              event: v,
              listeners: c
            }), v.target = Of;
          }
        }
      }
    }
    function PT(e, t, i, a, l, c, v) {
      var m = i ? $f(i) : window;
      switch (t) {
        case "focusin":
          (Hh(m) || m.contentEditable === "true") && (Of = m, sg = i, yp = null);
          break;
        case "focusout":
          Of = null, sg = null, yp = null;
          break;
        case "mousedown":
          cg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          cg = !1, MS(e, a, l);
          break;
        case "selectionchange":
          if (HT)
            break;
        case "keydown":
        case "keyup":
          MS(e, a, l);
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
    }, fg = {}, AS = {};
    dn && (AS = document.createElement("div").style, "AnimationEvent" in window || (delete Lf.animationend.animation, delete Lf.animationiteration.animation, delete Lf.animationstart.animation), "TransitionEvent" in window || delete Lf.transitionend.transition);
    function jh(e) {
      if (fg[e])
        return fg[e];
      if (!Lf[e])
        return e;
      var t = Lf[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in AS)
          return fg[e] = t[i];
      return e;
    }
    var NS = jh("animationend"), $S = jh("animationiteration"), zS = jh("animationstart"), US = jh("transitionend"), HS = /* @__PURE__ */ new Map(), FS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ju(e, t) {
      HS.set(e, t), nr(t, [e]);
    }
    function IT() {
      for (var e = 0; e < FS.length; e++) {
        var t = FS[e], i = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
        ju(i, "on" + a);
      }
      ju(NS, "onAnimationEnd"), ju($S, "onAnimationIteration"), ju(zS, "onAnimationStart"), ju("dblclick", "onDoubleClick"), ju("focusin", "onFocus"), ju("focusout", "onBlur"), ju(US, "onTransitionEnd");
    }
    function BT(e, t, i, a, l, c, v) {
      var m = HS.get(t);
      if (m !== void 0) {
        var b = bf, w = t;
        switch (t) {
          case "keypress":
            if (Rl(a) === 0)
              return;
          case "keydown":
          case "keyup":
            b = Mh;
            break;
          case "focusin":
            w = "focus", b = Ps;
            break;
          case "focusout":
            w = "blur", b = Ps;
            break;
          case "beforeblur":
          case "afterblur":
            b = Ps;
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
            b = xh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = fp;
            break;
          case NS:
          case $S:
          case zS:
            b = Zy;
            break;
          case US:
            b = Bo;
            break;
          case "scroll":
            b = lp;
            break;
          case "wheel":
            b = _l;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = _h;
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
        var T = (c & ll) !== 0;
        {
          var z = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", N = GT(i, m, a.type, T, z);
          if (N.length > 0) {
            var B = new b(m, w, null, a, l);
            e.push({
              event: B,
              listeners: N
            });
          }
        }
      }
    }
    IT(), de(), n(), FT(), Rf();
    function WT(e, t, i, a, l, c, v) {
      BT(e, t, i, a, l, c);
      var m = (c & Fy) === 0;
      m && (He(e, t, i, a, l), I(e, t, i, a, l), PT(e, t, i, a, l), og(e, t, i, a, l));
    }
    var gp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], dg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(gp));
    function jS(e, t, i) {
      var a = e.type || "unknown-event";
      e.currentTarget = i, Xa(a, t, void 0, e), e.currentTarget = null;
    }
    function YT(e, t, i) {
      var a;
      if (i)
        for (var l = t.length - 1; l >= 0; l--) {
          var c = t[l], v = c.instance, m = c.currentTarget, b = c.listener;
          if (v !== a && e.isPropagationStopped())
            return;
          jS(e, b, m), a = v;
        }
      else
        for (var w = 0; w < t.length; w++) {
          var T = t[w], z = T.instance, N = T.currentTarget, B = T.listener;
          if (z !== a && e.isPropagationStopped())
            return;
          jS(e, B, N), a = z;
        }
    }
    function VS(e, t) {
      for (var i = (t & ll) !== 0, a = 0; a < e.length; a++) {
        var l = e[a], c = l.event, v = l.listeners;
        YT(c, v, i);
      }
      $d();
    }
    function QT(e, t, i, a, l) {
      var c = xc(i), v = [];
      WT(v, e, a, i, c, t), VS(v, t);
    }
    function Dn(e, t) {
      dg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var i = !1, a = wx(t), l = XT(e);
      a.has(l) || (PS(t, e, ms, i), a.add(l));
    }
    function pg(e, t, i) {
      dg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var a = 0;
      t && (a |= ll), PS(i, e, a, t);
    }
    var Vh = "_reactListening" + Math.random().toString(36).slice(2);
    function bp(e) {
      if (!e[Vh]) {
        e[Vh] = !0, bt.forEach(function(i) {
          i !== "selectionchange" && (dg.has(i) || pg(i, !1, e), pg(i, !0, e));
        });
        var t = e.nodeType === va ? e : e.ownerDocument;
        t !== null && (t[Vh] || (t[Vh] = !0, pg("selectionchange", !1, t)));
      }
    }
    function PS(e, t, i, a, l) {
      var c = Zn(e, t, i), v = void 0;
      Es && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, a ? v !== void 0 ? mf(e, t, c, v) : ro(e, t, c) : v !== void 0 ? op(e, t, c, v) : zu(e, t, c);
    }
    function IS(e, t) {
      return e === t || e.nodeType === Bn && e.parentNode === t;
    }
    function vg(e, t, i, a, l) {
      var c = a;
      if (!(t & qa) && !(t & ms)) {
        var v = l;
        if (a !== null) {
          var m = a;
          e: for (; ; ) {
            if (m === null)
              return;
            var b = m.tag;
            if (b === M || b === K) {
              var w = m.stateNode.containerInfo;
              if (IS(w, v))
                break;
              if (b === K)
                for (var T = m.return; T !== null; ) {
                  var z = T.tag;
                  if (z === M || z === K) {
                    var N = T.stateNode.containerInfo;
                    if (IS(N, v))
                      return;
                  }
                  T = T.return;
                }
              for (; w !== null; ) {
                var B = Ks(w);
                if (B === null)
                  return;
                var G = B.tag;
                if (G === W || G === ue) {
                  m = c = B;
                  continue e;
                }
                w = w.parentNode;
              }
            }
            m = m.return;
          }
        }
      }
      Ld(function() {
        return QT(e, t, i, c);
      });
    }
    function Sp(e, t, i) {
      return {
        instance: e,
        listener: t,
        currentTarget: i
      };
    }
    function GT(e, t, i, a, l, c) {
      for (var v = t !== null ? t + "Capture" : null, m = a ? v : t, b = [], w = e, T = null; w !== null; ) {
        var z = w, N = z.stateNode, B = z.tag;
        if (B === W && N !== null && (T = N, m !== null)) {
          var G = sl(w, m);
          G != null && b.push(Sp(w, G, T));
        }
        if (l)
          break;
        w = w.return;
      }
      return b;
    }
    function Ph(e, t) {
      for (var i = t + "Capture", a = [], l = e; l !== null; ) {
        var c = l, v = c.stateNode, m = c.tag;
        if (m === W && v !== null) {
          var b = v, w = sl(l, i);
          w != null && a.unshift(Sp(l, w, b));
          var T = sl(l, t);
          T != null && a.push(Sp(l, T, b));
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
      while (e && e.tag !== W);
      return e || null;
    }
    function qT(e, t) {
      for (var i = e, a = t, l = 0, c = i; c; c = Mf(c))
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
    function BS(e, t, i, a, l) {
      for (var c = t._reactName, v = [], m = i; m !== null && m !== a; ) {
        var b = m, w = b.alternate, T = b.stateNode, z = b.tag;
        if (w !== null && w === a)
          break;
        if (z === W && T !== null) {
          var N = T;
          if (l) {
            var B = sl(m, c);
            B != null && v.unshift(Sp(m, B, N));
          } else if (!l) {
            var G = sl(m, c);
            G != null && v.push(Sp(m, G, N));
          }
        }
        m = m.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function KT(e, t, i, a, l) {
      var c = a && l ? qT(a, l) : null;
      a !== null && BS(e, t, a, c, !1), l !== null && i !== null && BS(e, i, l, c, !0);
    }
    function XT(e, t) {
      return e + "__bubble";
    }
    var ra = !1, Ep = "dangerouslySetInnerHTML", Ih = "suppressContentEditableWarning", Vu = "suppressHydrationWarning", WS = "autoFocus", Gs = "children", qs = "style", Bh = "__html", hg, Wh, Cp, YS, Yh, QS, GS;
    hg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Wh = function(e, t) {
      Rc(e, t), xd(e, t), Kv(e, t, {
        registrationNameDependencies: St,
        possibleRegistrationNames: en
      });
    }, QS = dn && !document.documentMode, Cp = function(e, t, i) {
      if (!ra) {
        var a = Qh(i), l = Qh(t);
        l !== a && (ra = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(a)));
      }
    }, YS = function(e) {
      if (!ra) {
        ra = !0;
        var t = [];
        e.forEach(function(i) {
          t.push(i);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Yh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, GS = function(e, t) {
      var i = e.namespaceURI === Ya ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return i.innerHTML = t, i.innerHTML;
    };
    var ZT = /\r\n?/g, JT = /\u0000|\uFFFD/g;
    function Qh(e) {
      Or(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(ZT, `
`).replace(JT, "");
    }
    function Gh(e, t, i, a) {
      var l = Qh(t), c = Qh(e);
      if (c !== l && (a && (ra || (ra = !0, g('Text content did not match. Server: "%s" Client: "%s"', c, l))), i && Re))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function qS(e) {
      return e.nodeType === va ? e : e.ownerDocument;
    }
    function eR() {
    }
    function qh(e) {
      e.onclick = eR;
    }
    function tR(e, t, i, a, l) {
      for (var c in a)
        if (a.hasOwnProperty(c)) {
          var v = a[c];
          if (c === qs)
            v && Object.freeze(v), jv(t, v);
          else if (c === Ep) {
            var m = v ? v[Bh] : void 0;
            m != null && Dv(t, m);
          } else if (c === Gs)
            if (typeof v == "string") {
              var b = e !== "textarea" || v !== "";
              b && Ec(t, v);
            } else typeof v == "number" && Ec(t, "" + v);
          else c === Ih || c === Vu || c === WS || (St.hasOwnProperty(c) ? v != null && (typeof v != "function" && Yh(c, v), c === "onScroll" && Dn("scroll", t)) : v != null && Nr(t, c, v, l));
        }
    }
    function nR(e, t, i, a) {
      for (var l = 0; l < t.length; l += 2) {
        var c = t[l], v = t[l + 1];
        c === qs ? jv(e, v) : c === Ep ? Dv(e, v) : c === Gs ? Ec(e, v) : Nr(e, c, v, a);
      }
    }
    function rR(e, t, i, a) {
      var l, c = qS(i), v, m = a;
      if (m === Ya && (m = bc(e)), m === Ya) {
        if (l = Ga(e, t), !l && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var b = c.createElement("div");
          b.innerHTML = "<script><\/script>";
          var w = b.firstChild;
          v = b.removeChild(w);
        } else if (typeof t.is == "string")
          v = c.createElement(e, {
            is: t.is
          });
        else if (v = c.createElement(e), e === "select") {
          var T = v;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        v = c.createElementNS(m, e);
      return m === Ya && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !zn.call(hg, e) && (hg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function iR(e, t) {
      return qS(t).createTextNode(e);
    }
    function aR(e, t, i, a) {
      var l = Ga(t, i);
      Wh(t, i);
      var c;
      switch (t) {
        case "dialog":
          Dn("cancel", e), Dn("close", e), c = i;
          break;
        case "iframe":
        case "object":
        case "embed":
          Dn("load", e), c = i;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < gp.length; v++)
            Dn(gp[v], e);
          c = i;
          break;
        case "source":
          Dn("error", e), c = i;
          break;
        case "img":
        case "image":
        case "link":
          Dn("error", e), Dn("load", e), c = i;
          break;
        case "details":
          Dn("toggle", e), c = i;
          break;
        case "input":
          _(e, i), c = S(e, i), Dn("invalid", e);
          break;
        case "option":
          nn(e, i), c = i;
          break;
        case "select":
          ds(e, i), c = fs(e, i), Dn("invalid", e);
          break;
        case "textarea":
          xv(e, i), c = yd(e, i), Dn("invalid", e);
          break;
        default:
          c = i;
      }
      switch (wc(t, c), tR(t, e, a, c, l), t) {
        case "input":
          Pi(e), ce(e, i, !1);
          break;
        case "textarea":
          Pi(e), _v(e);
          break;
        case "option":
          ln(e, i);
          break;
        case "select":
          hd(e, i);
          break;
        default:
          typeof c.onClick == "function" && qh(e);
          break;
      }
    }
    function oR(e, t, i, a, l) {
      Wh(t, a);
      var c = null, v, m;
      switch (t) {
        case "input":
          v = S(e, i), m = S(e, a), c = [];
          break;
        case "select":
          v = fs(e, i), m = fs(e, a), c = [];
          break;
        case "textarea":
          v = yd(e, i), m = yd(e, a), c = [];
          break;
        default:
          v = i, m = a, typeof v.onClick != "function" && typeof m.onClick == "function" && qh(e);
          break;
      }
      wc(t, m);
      var b, w, T = null;
      for (b in v)
        if (!(m.hasOwnProperty(b) || !v.hasOwnProperty(b) || v[b] == null))
          if (b === qs) {
            var z = v[b];
            for (w in z)
              z.hasOwnProperty(w) && (T || (T = {}), T[w] = "");
          } else b === Ep || b === Gs || b === Ih || b === Vu || b === WS || (St.hasOwnProperty(b) ? c || (c = []) : (c = c || []).push(b, null));
      for (b in m) {
        var N = m[b], B = v != null ? v[b] : void 0;
        if (!(!m.hasOwnProperty(b) || N === B || N == null && B == null))
          if (b === qs)
            if (N && Object.freeze(N), B) {
              for (w in B)
                B.hasOwnProperty(w) && (!N || !N.hasOwnProperty(w)) && (T || (T = {}), T[w] = "");
              for (w in N)
                N.hasOwnProperty(w) && B[w] !== N[w] && (T || (T = {}), T[w] = N[w]);
            } else
              T || (c || (c = []), c.push(b, T)), T = N;
          else if (b === Ep) {
            var G = N ? N[Bh] : void 0, Z = B ? B[Bh] : void 0;
            G != null && Z !== G && (c = c || []).push(b, G);
          } else b === Gs ? (typeof N == "string" || typeof N == "number") && (c = c || []).push(b, "" + N) : b === Ih || b === Vu || (St.hasOwnProperty(b) ? (N != null && (typeof N != "function" && Yh(b, N), b === "onScroll" && Dn("scroll", e)), !c && B !== N && (c = [])) : (c = c || []).push(b, N));
      }
      return T && (vs(T, m[qs]), (c = c || []).push(qs, T)), c;
    }
    function lR(e, t, i, a, l) {
      i === "input" && l.type === "radio" && l.name != null && Y(e, l);
      var c = Ga(i, a), v = Ga(i, l);
      switch (nR(e, t, c, v), i) {
        case "input":
          q(e, l);
          break;
        case "textarea":
          kv(e, l);
          break;
        case "select":
          Dy(e, l);
          break;
      }
    }
    function uR(e) {
      {
        var t = e.toLowerCase();
        return Tc.hasOwnProperty(t) && Tc[t] || null;
      }
    }
    function sR(e, t, i, a, l, c, v) {
      var m, b;
      switch (m = Ga(t, i), Wh(t, i), t) {
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
          for (var w = 0; w < gp.length; w++)
            Dn(gp[w], e);
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
          _(e, i), Dn("invalid", e);
          break;
        case "option":
          nn(e, i);
          break;
        case "select":
          ds(e, i), Dn("invalid", e);
          break;
        case "textarea":
          xv(e, i), Dn("invalid", e);
          break;
      }
      wc(t, i);
      {
        b = /* @__PURE__ */ new Set();
        for (var T = e.attributes, z = 0; z < T.length; z++) {
          var N = T[z].name.toLowerCase();
          switch (N) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              b.add(T[z].name);
          }
        }
      }
      var B = null;
      for (var G in i)
        if (i.hasOwnProperty(G)) {
          var Z = i[G];
          if (G === Gs)
            typeof Z == "string" ? e.textContent !== Z && (i[Vu] !== !0 && Gh(e.textContent, Z, c, v), B = [Gs, Z]) : typeof Z == "number" && e.textContent !== "" + Z && (i[Vu] !== !0 && Gh(e.textContent, Z, c, v), B = [Gs, "" + Z]);
          else if (St.hasOwnProperty(G))
            Z != null && (typeof Z != "function" && Yh(G, Z), G === "onScroll" && Dn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var be = void 0, Ke = m && qe ? null : hr(G);
            if (i[Vu] !== !0) {
              if (!(G === Ih || G === Vu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              G === "value" || G === "checked" || G === "selected")) {
                if (G === Ep) {
                  var Ve = e.innerHTML, zt = Z ? Z[Bh] : void 0;
                  if (zt != null) {
                    var Ot = GS(e, zt);
                    Ot !== Ve && Cp(G, Ve, Ot);
                  }
                } else if (G === qs) {
                  if (b.delete(G), QS) {
                    var j = Uy(Z);
                    be = e.getAttribute("style"), j !== be && Cp(G, be, j);
                  }
                } else if (m && !qe)
                  b.delete(G.toLowerCase()), be = Ar(e, G, Z), Z !== be && Cp(G, be, Z);
                else if (!vn(G, Ke, m) && !qt(G, Z, Ke, m)) {
                  var J = !1;
                  if (Ke !== null)
                    b.delete(Ke.attributeName), be = Mr(e, G, Z, Ke);
                  else {
                    var V = a;
                    if (V === Ya && (V = bc(t)), V === Ya)
                      b.delete(G.toLowerCase());
                    else {
                      var le = uR(G);
                      le !== null && le !== G && (J = !0, b.delete(le)), b.delete(G);
                    }
                    be = Ar(e, G, Z);
                  }
                  var Te = qe;
                  !Te && Z !== be && !J && Cp(G, be, Z);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      b.size > 0 && i[Vu] !== !0 && YS(b), t) {
        case "input":
          Pi(e), ce(e, i, !0);
          break;
        case "textarea":
          Pi(e), _v(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && qh(e);
          break;
      }
      return B;
    }
    function cR(e, t, i) {
      var a = e.nodeValue !== t;
      return a;
    }
    function mg(e, t) {
      {
        if (ra)
          return;
        ra = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function yg(e, t) {
      {
        if (ra)
          return;
        ra = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function gg(e, t, i) {
      {
        if (ra)
          return;
        ra = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function bg(e, t) {
      {
        if (t === "" || ra)
          return;
        ra = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function fR(e, t, i) {
      switch (t) {
        case "input":
          Ze(e, i);
          return;
        case "textarea":
          gd(e, i);
          return;
        case "select":
          Oy(e, i);
          return;
      }
    }
    var wp = function() {
    }, Tp = function() {
    };
    {
      var dR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], KS = [
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
      ], pR = KS.concat(["button"]), vR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], XS = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Tp = function(e, t) {
        var i = wt({}, e || XS), a = {
          tag: t
        };
        return KS.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), pR.indexOf(t) !== -1 && (i.pTagInButtonScope = null), dR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = a, t === "form" && (i.formTag = a), t === "a" && (i.aTagInScope = a), t === "button" && (i.buttonTagInScope = a), t === "nobr" && (i.nobrTagInScope = a), t === "p" && (i.pTagInButtonScope = a), t === "li" && (i.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = a), i;
      };
      var hR = function(e, t) {
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
            return vR.indexOf(t) === -1;
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
      }, mR = function(e, t) {
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
      }, ZS = {};
      wp = function(e, t, i) {
        i = i || XS;
        var a = i.current, l = a && a.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = hR(e, l) ? null : a, v = c ? null : mR(e, i), m = c || v;
        if (m) {
          var b = m.tag, w = !!c + "|" + e + "|" + b;
          if (!ZS[w]) {
            ZS[w] = !0;
            var T = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", c) {
              var N = "";
              b === "table" && e === "tr" && (N += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, b, z, N);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, b);
          }
        }
      };
    }
    var Kh = "suppressHydrationWarning", Xh = "$", Zh = "/$", Rp = "$?", xp = "$!", yR = "style", Sg = null, Eg = null;
    function gR(e) {
      var t, i, a = e.nodeType;
      switch (a) {
        case va:
        case al: {
          t = a === va ? "#document" : "#fragment";
          var l = e.documentElement;
          i = l ? l.namespaceURI : Sd(null, "");
          break;
        }
        default: {
          var c = a === Bn ? e.parentNode : e, v = c.namespaceURI || null;
          t = c.tagName, i = Sd(v, t);
          break;
        }
      }
      {
        var m = t.toLowerCase(), b = Tp(null, m);
        return {
          namespace: i,
          ancestorInfo: b
        };
      }
    }
    function bR(e, t, i) {
      {
        var a = e, l = Sd(a.namespace, t), c = Tp(a.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: c
        };
      }
    }
    function EA(e) {
      return e;
    }
    function SR(e) {
      Sg = Nu(), Eg = NT();
      var t = null;
      return gi(!1), t;
    }
    function ER(e) {
      $T(Eg), gi(Sg), Sg = null, Eg = null;
    }
    function CR(e, t, i, a, l) {
      var c;
      {
        var v = a;
        if (wp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, b = Tp(v.ancestorInfo, e);
          wp(null, m, b);
        }
        c = v.namespace;
      }
      var w = rR(e, t, i, c);
      return Dp(l, w), Dg(w, t), w;
    }
    function wR(e, t) {
      e.appendChild(t);
    }
    function TR(e, t, i, a, l) {
      switch (aR(e, t, i, a), t) {
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
    function RR(e, t, i, a, l, c) {
      {
        var v = c;
        if (typeof a.children != typeof i.children && (typeof a.children == "string" || typeof a.children == "number")) {
          var m = "" + a.children, b = Tp(v.ancestorInfo, t);
          wp(null, m, b);
        }
      }
      return oR(e, t, i, a);
    }
    function Cg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function xR(e, t, i, a) {
      {
        var l = i;
        wp(null, e, l.ancestorInfo);
      }
      var c = iR(e, t);
      return Dp(a, c), c;
    }
    function kR() {
      var e = window.event;
      return e === void 0 ? Da : hf(e.type);
    }
    var wg = typeof setTimeout == "function" ? setTimeout : void 0, _R = typeof clearTimeout == "function" ? clearTimeout : void 0, Tg = -1, JS = typeof Promise == "function" ? Promise : void 0, DR = typeof queueMicrotask == "function" ? queueMicrotask : typeof JS < "u" ? function(e) {
      return JS.resolve(null).then(e).catch(OR);
    } : wg;
    function OR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function LR(e, t, i, a) {
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
    function MR(e, t, i, a, l, c) {
      lR(e, t, i, a, l), Dg(e, l);
    }
    function eE(e) {
      Ec(e, "");
    }
    function AR(e, t, i) {
      e.nodeValue = i;
    }
    function NR(e, t) {
      e.appendChild(t);
    }
    function $R(e, t) {
      var i;
      e.nodeType === Bn ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var a = e._reactRootContainer;
      a == null && i.onclick === null && qh(i);
    }
    function zR(e, t, i) {
      e.insertBefore(t, i);
    }
    function UR(e, t, i) {
      e.nodeType === Bn ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function HR(e, t) {
      e.removeChild(t);
    }
    function FR(e, t) {
      e.nodeType === Bn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Rg(e, t) {
      var i = t, a = 0;
      do {
        var l = i.nextSibling;
        if (e.removeChild(i), l && l.nodeType === Bn) {
          var c = l.data;
          if (c === Zh)
            if (a === 0) {
              e.removeChild(l), Nn(t);
              return;
            } else
              a--;
          else (c === Xh || c === Rp || c === xp) && a++;
        }
        i = l;
      } while (i);
      Nn(t);
    }
    function jR(e, t) {
      e.nodeType === Bn ? Rg(e.parentNode, t) : e.nodeType === ui && Rg(e, t), Nn(e);
    }
    function VR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function PR(e) {
      e.nodeValue = "";
    }
    function IR(e, t) {
      e = e;
      var i = t[yR], a = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = Cc("display", a);
    }
    function BR(e, t) {
      e.nodeValue = t;
    }
    function WR(e) {
      e.nodeType === ui ? e.textContent = "" : e.nodeType === va && e.documentElement && e.removeChild(e.documentElement);
    }
    function YR(e, t, i) {
      return e.nodeType !== ui || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function QR(e, t) {
      return t === "" || e.nodeType !== Qa ? null : e;
    }
    function GR(e) {
      return e.nodeType !== Bn ? null : e;
    }
    function tE(e) {
      return e.data === Rp;
    }
    function xg(e) {
      return e.data === xp;
    }
    function qR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, i, a, l;
      return t && (i = t.dgst, a = t.msg, l = t.stck), {
        message: a,
        digest: i,
        stack: l
      };
    }
    function KR(e, t) {
      e._reactRetry = t;
    }
    function Jh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ui || t === Qa)
          break;
        if (t === Bn) {
          var i = e.data;
          if (i === Xh || i === xp || i === Rp)
            break;
          if (i === Zh)
            return null;
        }
      }
      return e;
    }
    function kp(e) {
      return Jh(e.nextSibling);
    }
    function XR(e) {
      return Jh(e.firstChild);
    }
    function ZR(e) {
      return Jh(e.firstChild);
    }
    function JR(e) {
      return Jh(e.nextSibling);
    }
    function ex(e, t, i, a, l, c, v) {
      Dp(c, e), Dg(e, i);
      var m;
      {
        var b = l;
        m = b.namespace;
      }
      var w = (c.mode & je) !== Ue;
      return sR(e, t, i, m, a, w, v);
    }
    function tx(e, t, i, a) {
      return Dp(i, e), i.mode & je, cR(e, t);
    }
    function nx(e, t) {
      Dp(t, e);
    }
    function rx(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === Bn) {
          var a = t.data;
          if (a === Zh) {
            if (i === 0)
              return kp(t);
            i--;
          } else (a === Xh || a === xp || a === Rp) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function nE(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === Bn) {
          var a = t.data;
          if (a === Xh || a === xp || a === Rp) {
            if (i === 0)
              return t;
            i--;
          } else a === Zh && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ix(e) {
      Nn(e);
    }
    function ax(e) {
      Nn(e);
    }
    function ox(e) {
      return e !== "head" && e !== "body";
    }
    function lx(e, t, i, a) {
      var l = !0;
      Gh(t.nodeValue, i, a, l);
    }
    function ux(e, t, i, a, l, c) {
      if (t[Kh] !== !0) {
        var v = !0;
        Gh(a.nodeValue, l, c, v);
      }
    }
    function sx(e, t) {
      t.nodeType === ui ? mg(e, t) : t.nodeType === Bn || yg(e, t);
    }
    function cx(e, t) {
      {
        var i = e.parentNode;
        i !== null && (t.nodeType === ui ? mg(i, t) : t.nodeType === Bn || yg(i, t));
      }
    }
    function fx(e, t, i, a, l) {
      (l || t[Kh] !== !0) && (a.nodeType === ui ? mg(i, a) : a.nodeType === Bn || yg(i, a));
    }
    function dx(e, t, i) {
      gg(e, t);
    }
    function px(e, t) {
      bg(e, t);
    }
    function vx(e, t, i) {
      {
        var a = e.parentNode;
        a !== null && gg(a, t);
      }
    }
    function hx(e, t) {
      {
        var i = e.parentNode;
        i !== null && bg(i, t);
      }
    }
    function mx(e, t, i, a, l, c) {
      (c || t[Kh] !== !0) && gg(i, a);
    }
    function yx(e, t, i, a, l) {
      (l || t[Kh] !== !0) && bg(i, a);
    }
    function gx(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function bx(e) {
      bp(e);
    }
    var Af = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Af, kg = "__reactProps$" + Af, _p = "__reactContainer$" + Af, _g = "__reactEvents$" + Af, Sx = "__reactListeners$" + Af, Ex = "__reactHandles$" + Af;
    function Cx(e) {
      delete e[Nf], delete e[kg], delete e[_g], delete e[Sx], delete e[Ex];
    }
    function Dp(e, t) {
      t[Nf] = e;
    }
    function em(e, t) {
      t[_p] = e;
    }
    function rE(e) {
      e[_p] = null;
    }
    function Op(e) {
      return !!e[_p];
    }
    function Ks(e) {
      var t = e[Nf];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[_p] || i[Nf], t) {
          var a = t.alternate;
          if (t.child !== null || a !== null && a.child !== null)
            for (var l = nE(e); l !== null; ) {
              var c = l[Nf];
              if (c)
                return c;
              l = nE(l);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    function Pu(e) {
      var t = e[Nf] || e[_p];
      return t && (t.tag === W || t.tag === ue || t.tag === Oe || t.tag === M) ? t : null;
    }
    function $f(e) {
      if (e.tag === W || e.tag === ue)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function tm(e) {
      return e[kg] || null;
    }
    function Dg(e, t) {
      e[kg] = t;
    }
    function wx(e) {
      var t = e[_g];
      return t === void 0 && (t = e[_g] = /* @__PURE__ */ new Set()), t;
    }
    var iE = {}, aE = p.ReactDebugCurrentFrame;
    function nm(e) {
      if (e) {
        var t = e._owner, i = Ta(e.type, e._source, t ? t.type : null);
        aE.setExtraStackFrame(i);
      } else
        aE.setExtraStackFrame(null);
    }
    function oo(e, t, i, a, l) {
      {
        var c = Function.call.bind(zn);
        for (var v in e)
          if (c(e, v)) {
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
            m && !(m instanceof Error) && (nm(l), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", i, v, typeof m), nm(null)), m instanceof Error && !(m.message in iE) && (iE[m.message] = !0, nm(l), g("Failed %s type: %s", i, m.message), nm(null));
          }
      }
    }
    var Og = [], rm;
    rm = [];
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
      t !== rm[Dl] && g("Unexpected Fiber popped."), e.current = Og[Dl], Og[Dl] = null, rm[Dl] = null, Dl--;
    }
    function Si(e, t, i) {
      Dl++, Og[Dl] = e.current, rm[Dl] = i, e.current = t;
    }
    var Lg;
    Lg = {};
    var ga = {};
    Object.freeze(ga);
    var Ol = Iu(ga), Yo = Iu(!1), Mg = ga;
    function zf(e, t, i) {
      return i && Qo(t) ? Mg : Ol.current;
    }
    function oE(e, t, i) {
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
        var c = {};
        for (var v in a)
          c[v] = t[v];
        {
          var m = st(e) || "Unknown";
          oo(a, c, "context", m);
        }
        return l && oE(e, t, c), c;
      }
    }
    function im() {
      return Yo.current;
    }
    function Qo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function am(e) {
      bi(Yo, e), bi(Ol, e);
    }
    function Ag(e) {
      bi(Yo, e), bi(Ol, e);
    }
    function lE(e, t, i) {
      {
        if (Ol.current !== ga)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Si(Ol, t, e), Si(Yo, i, e);
      }
    }
    function uE(e, t, i) {
      {
        var a = e.stateNode, l = t.childContextTypes;
        if (typeof a.getChildContext != "function") {
          {
            var c = st(e) || "Unknown";
            Lg[c] || (Lg[c] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return i;
        }
        var v = a.getChildContext();
        for (var m in v)
          if (!(m in l))
            throw new Error((st(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var b = st(e) || "Unknown";
          oo(l, v, "child context", b);
        }
        return wt({}, i, v);
      }
    }
    function om(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || ga;
        return Mg = Ol.current, Si(Ol, i, e), Si(Yo, Yo.current, e), !0;
      }
    }
    function sE(e, t, i) {
      {
        var a = e.stateNode;
        if (!a)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var l = uE(e, t, Mg);
          a.__reactInternalMemoizedMergedChildContext = l, bi(Yo, e), bi(Ol, e), Si(Ol, l, e), Si(Yo, i, e);
        } else
          bi(Yo, e), Si(Yo, i, e);
      }
    }
    function Tx(e) {
      {
        if (!jd(e) || e.tag !== A)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case M:
              return t.stateNode.context;
            case A: {
              var i = t.type;
              if (Qo(i))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Bu = 0, lm = 1, Ll = null, Ng = !1, $g = !1;
    function cE(e) {
      Ll === null ? Ll = [e] : Ll.push(e);
    }
    function Rx(e) {
      Ng = !0, cE(e);
    }
    function fE() {
      Ng && Wu();
    }
    function Wu() {
      if (!$g && Ll !== null) {
        $g = !0;
        var e = 0, t = Zi();
        try {
          var i = !0, a = Ll;
          for (An(jn); e < a.length; e++) {
            var l = a[e];
            do
              l = l(i);
            while (l !== null);
          }
          Ll = null, Ng = !1;
        } catch (c) {
          throw Ll !== null && (Ll = Ll.slice(e + 1)), Ac($c, Wu), c;
        } finally {
          An(t), $g = !1;
        }
      }
      return null;
    }
    var Hf = [], Ff = 0, um = null, sm = 0, Aa = [], Na = 0, Xs = null, Ml = 1, Al = "";
    function xx(e) {
      return Js(), (e.flags & Ud) !== Ge;
    }
    function kx(e) {
      return Js(), sm;
    }
    function _x() {
      var e = Al, t = Ml, i = t & ~Dx(t);
      return i.toString(32) + e;
    }
    function Zs(e, t) {
      Js(), Hf[Ff++] = sm, Hf[Ff++] = um, um = e, sm = t;
    }
    function dE(e, t, i) {
      Js(), Aa[Na++] = Ml, Aa[Na++] = Al, Aa[Na++] = Xs, Xs = e;
      var a = Ml, l = Al, c = cm(a) - 1, v = a & ~(1 << c), m = i + 1, b = cm(t) + c;
      if (b > 30) {
        var w = c - c % 5, T = (1 << w) - 1, z = (v & T).toString(32), N = v >> w, B = c - w, G = cm(t) + B, Z = m << B, be = Z | N, Ke = z + l;
        Ml = 1 << G | be, Al = Ke;
      } else {
        var Ve = m << c, zt = Ve | v, Ot = l;
        Ml = 1 << b | zt, Al = Ot;
      }
    }
    function zg(e) {
      Js();
      var t = e.return;
      if (t !== null) {
        var i = 1, a = 0;
        Zs(e, i), dE(e, i, a);
      }
    }
    function cm(e) {
      return 32 - yu(e);
    }
    function Dx(e) {
      return 1 << cm(e) - 1;
    }
    function Ug(e) {
      for (; e === um; )
        um = Hf[--Ff], Hf[Ff] = null, sm = Hf[--Ff], Hf[Ff] = null;
      for (; e === Xs; )
        Xs = Aa[--Na], Aa[Na] = null, Al = Aa[--Na], Aa[Na] = null, Ml = Aa[--Na], Aa[Na] = null;
    }
    function Ox() {
      return Js(), Xs !== null ? {
        id: Ml,
        overflow: Al
      } : null;
    }
    function Lx(e, t) {
      Js(), Aa[Na++] = Ml, Aa[Na++] = Al, Aa[Na++] = Xs, Ml = t.id, Al = t.overflow, Xs = e;
    }
    function Js() {
      Gr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Qr = null, $a = null, lo = !1, ec = !1, Yu = null;
    function Mx() {
      lo && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function pE() {
      ec = !0;
    }
    function Ax() {
      return ec;
    }
    function Nx(e) {
      var t = e.stateNode.containerInfo;
      return $a = ZR(t), Qr = e, lo = !0, Yu = null, ec = !1, !0;
    }
    function $x(e, t, i) {
      return $a = JR(t), Qr = e, lo = !0, Yu = null, ec = !1, i !== null && Lx(e, i), !0;
    }
    function vE(e, t) {
      switch (e.tag) {
        case M: {
          sx(e.stateNode.containerInfo, t);
          break;
        }
        case W: {
          var i = (e.mode & je) !== Ue;
          fx(
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
          a.dehydrated !== null && cx(a.dehydrated, t);
          break;
        }
      }
    }
    function hE(e, t) {
      vE(e, t);
      var i = FD();
      i.stateNode = t, i.return = e;
      var a = e.deletions;
      a === null ? (e.deletions = [i], e.flags |= Kt) : a.push(i);
    }
    function Hg(e, t) {
      {
        if (ec)
          return;
        switch (e.tag) {
          case M: {
            var i = e.stateNode.containerInfo;
            switch (t.tag) {
              case W:
                var a = t.type;
                t.pendingProps, dx(i, a);
                break;
              case ue:
                var l = t.pendingProps;
                px(i, l);
                break;
            }
            break;
          }
          case W: {
            var c = e.type, v = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case W: {
                var b = t.type, w = t.pendingProps, T = (e.mode & je) !== Ue;
                mx(
                  c,
                  v,
                  m,
                  b,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case ue: {
                var z = t.pendingProps, N = (e.mode & je) !== Ue;
                yx(
                  c,
                  v,
                  m,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  N
                );
                break;
              }
            }
            break;
          }
          case Oe: {
            var B = e.memoizedState, G = B.dehydrated;
            if (G !== null) switch (t.tag) {
              case W:
                var Z = t.type;
                t.pendingProps, vx(G, Z);
                break;
              case ue:
                var be = t.pendingProps;
                hx(G, be);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function mE(e, t) {
      t.flags = t.flags & ~Yi | hn, Hg(e, t);
    }
    function yE(e, t) {
      switch (e.tag) {
        case W: {
          var i = e.type;
          e.pendingProps;
          var a = YR(t, i);
          return a !== null ? (e.stateNode = a, Qr = e, $a = XR(a), !0) : !1;
        }
        case ue: {
          var l = e.pendingProps, c = QR(t, l);
          return c !== null ? (e.stateNode = c, Qr = e, $a = null, !0) : !1;
        }
        case Oe: {
          var v = GR(t);
          if (v !== null) {
            var m = {
              dehydrated: v,
              treeContext: Ox(),
              retryLane: Ur
            };
            e.memoizedState = m;
            var b = jD(v);
            return b.return = e, e.child = b, Qr = e, $a = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Fg(e) {
      return (e.mode & je) !== Ue && (e.flags & ot) === Ge;
    }
    function jg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Vg(e) {
      if (lo) {
        var t = $a;
        if (!t) {
          Fg(e) && (Hg(Qr, e), jg()), mE(Qr, e), lo = !1, Qr = e;
          return;
        }
        var i = t;
        if (!yE(e, t)) {
          Fg(e) && (Hg(Qr, e), jg()), t = kp(i);
          var a = Qr;
          if (!t || !yE(e, t)) {
            mE(Qr, e), lo = !1, Qr = e;
            return;
          }
          hE(a, i);
        }
      }
    }
    function zx(e, t, i) {
      var a = e.stateNode, l = !ec, c = ex(a, e.type, e.memoizedProps, t, i, e, l);
      return e.updateQueue = c, c !== null;
    }
    function Ux(e) {
      var t = e.stateNode, i = e.memoizedProps, a = tx(t, i, e);
      if (a) {
        var l = Qr;
        if (l !== null)
          switch (l.tag) {
            case M: {
              var c = l.stateNode.containerInfo, v = (l.mode & je) !== Ue;
              lx(
                c,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case W: {
              var m = l.type, b = l.memoizedProps, w = l.stateNode, T = (l.mode & je) !== Ue;
              ux(
                m,
                b,
                w,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return a;
    }
    function Hx(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      nx(i, e);
    }
    function Fx(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return rx(i);
    }
    function gE(e) {
      for (var t = e.return; t !== null && t.tag !== W && t.tag !== M && t.tag !== Oe; )
        t = t.return;
      Qr = t;
    }
    function fm(e) {
      if (e !== Qr)
        return !1;
      if (!lo)
        return gE(e), lo = !0, !1;
      if (e.tag !== M && (e.tag !== W || ox(e.type) && !Cg(e.type, e.memoizedProps))) {
        var t = $a;
        if (t)
          if (Fg(e))
            bE(e), jg();
          else
            for (; t; )
              hE(e, t), t = kp(t);
      }
      return gE(e), e.tag === Oe ? $a = Fx(e) : $a = Qr ? kp(e.stateNode) : null, !0;
    }
    function jx() {
      return lo && $a !== null;
    }
    function bE(e) {
      for (var t = $a; t; )
        vE(e, t), t = kp(t);
    }
    function jf() {
      Qr = null, $a = null, lo = !1, ec = !1;
    }
    function SE() {
      Yu !== null && (pw(Yu), Yu = null);
    }
    function Gr() {
      return lo;
    }
    function Pg(e) {
      Yu === null ? Yu = [e] : Yu.push(e);
    }
    var Vx = p.ReactCurrentBatchConfig, Px = null;
    function Ix() {
      return Vx.transition;
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
      var Bx = function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & xt && (t = i), i = i.return;
        return t;
      }, tc = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, Lp = [], Mp = [], Ap = [], Np = [], $p = [], zp = [], nc = /* @__PURE__ */ new Set();
      uo.recordUnsafeLifecycleWarnings = function(e, t) {
        nc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Lp.push(e), e.mode & xt && typeof t.UNSAFE_componentWillMount == "function" && Mp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ap.push(e), e.mode & xt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Np.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && $p.push(e), e.mode & xt && typeof t.UNSAFE_componentWillUpdate == "function" && zp.push(e));
      }, uo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(N) {
          e.add(st(N) || "Component"), nc.add(N.type);
        }), Lp = []);
        var t = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(N) {
          t.add(st(N) || "Component"), nc.add(N.type);
        }), Mp = []);
        var i = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(N) {
          i.add(st(N) || "Component"), nc.add(N.type);
        }), Ap = []);
        var a = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(N) {
          a.add(st(N) || "Component"), nc.add(N.type);
        }), Np = []);
        var l = /* @__PURE__ */ new Set();
        $p.length > 0 && ($p.forEach(function(N) {
          l.add(st(N) || "Component"), nc.add(N.type);
        }), $p = []);
        var c = /* @__PURE__ */ new Set();
        if (zp.length > 0 && (zp.forEach(function(N) {
          c.add(st(N) || "Component"), nc.add(N.type);
        }), zp = []), t.size > 0) {
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
        if (c.size > 0) {
          var b = tc(c);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
        }
        if (e.size > 0) {
          var w = tc(e);
          R(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (i.size > 0) {
          var T = tc(i);
          R(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (l.size > 0) {
          var z = tc(l);
          R(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var dm = /* @__PURE__ */ new Map(), EE = /* @__PURE__ */ new Set();
      uo.recordLegacyContextWarning = function(e, t) {
        var i = Bx(e);
        if (i === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!EE.has(e.type)) {
          var a = dm.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], dm.set(i, a)), a.push(e));
        }
      }, uo.flushLegacyContextWarning = function() {
        dm.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], a = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              a.add(st(c) || "Component"), EE.add(c.type);
            });
            var l = tc(a);
            try {
              Xt(i), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Ln();
            }
          }
        });
      }, uo.discardPendingWarnings = function() {
        Lp = [], Mp = [], Ap = [], Np = [], $p = [], zp = [], dm = /* @__PURE__ */ new Map();
      };
    }
    var Ig, Bg, Wg, Yg, Qg, CE = function(e, t) {
    };
    Ig = !1, Bg = !1, Wg = {}, Yg = {}, Qg = {}, CE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var i = st(t) || "Component";
        Yg[i] || (Yg[i] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Wx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Up(e, t, i) {
      var a = i.ref;
      if (a !== null && typeof a != "function" && typeof a != "object") {
        if ((e.mode & xt || Ne) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(i._owner && i._self && i._owner.stateNode !== i._self) && // Will already throw with "Function components cannot have string refs"
        !(i._owner && i._owner.tag !== A) && // Will already warn with "Function components cannot be given refs"
        !(typeof i.type == "function" && !Wx(i.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        i._owner) {
          var l = st(e) || "Component";
          Wg[l] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, a), Wg[l] = !0);
        }
        if (i._owner) {
          var c = i._owner, v;
          if (c) {
            var m = c;
            if (m.tag !== A)
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
          var T = function(z) {
            var N = b.refs;
            z === null ? delete N[w] : N[w] = z;
          };
          return T._stringRef = w, T;
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
    function pm(e, t) {
      var i = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    }
    function vm(e) {
      {
        var t = st(e) || "Component";
        if (Qg[t])
          return;
        Qg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function wE(e) {
      var t = e._payload, i = e._init;
      return i(t);
    }
    function TE(e) {
      function t(j, J) {
        if (e) {
          var V = j.deletions;
          V === null ? (j.deletions = [J], j.flags |= Kt) : V.push(J);
        }
      }
      function i(j, J) {
        if (!e)
          return null;
        for (var V = J; V !== null; )
          t(j, V), V = V.sibling;
        return null;
      }
      function a(j, J) {
        for (var V = /* @__PURE__ */ new Map(), le = J; le !== null; )
          le.key !== null ? V.set(le.key, le) : V.set(le.index, le), le = le.sibling;
        return V;
      }
      function l(j, J) {
        var V = fc(j, J);
        return V.index = 0, V.sibling = null, V;
      }
      function c(j, J, V) {
        if (j.index = V, !e)
          return j.flags |= Ud, J;
        var le = j.alternate;
        if (le !== null) {
          var Te = le.index;
          return Te < J ? (j.flags |= hn, J) : Te;
        } else
          return j.flags |= hn, J;
      }
      function v(j) {
        return e && j.alternate === null && (j.flags |= hn), j;
      }
      function m(j, J, V, le) {
        if (J === null || J.tag !== ue) {
          var Te = Pb(V, j.mode, le);
          return Te.return = j, Te;
        } else {
          var Se = l(J, V);
          return Se.return = j, Se;
        }
      }
      function b(j, J, V, le) {
        var Te = V.type;
        if (Te === Pr)
          return T(j, J, V.props.children, le, V.key);
        if (J !== null && (J.elementType === Te || // Keep this check inline so it only runs on the false path:
        Dw(J, V) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Te == "object" && Te !== null && Te.$$typeof === Ye && wE(Te) === J.type)) {
          var Se = l(J, V.props);
          return Se.ref = Up(j, J, V), Se.return = j, Se._debugSource = V._source, Se._debugOwner = V._owner, Se;
        }
        var nt = Vb(V, j.mode, le);
        return nt.ref = Up(j, J, V), nt.return = j, nt;
      }
      function w(j, J, V, le) {
        if (J === null || J.tag !== K || J.stateNode.containerInfo !== V.containerInfo || J.stateNode.implementation !== V.implementation) {
          var Te = Ib(V, j.mode, le);
          return Te.return = j, Te;
        } else {
          var Se = l(J, V.children || []);
          return Se.return = j, Se;
        }
      }
      function T(j, J, V, le, Te) {
        if (J === null || J.tag !== Be) {
          var Se = rs(V, j.mode, le, Te);
          return Se.return = j, Se;
        } else {
          var nt = l(J, V);
          return nt.return = j, nt;
        }
      }
      function z(j, J, V) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var le = Pb("" + J, j.mode, V);
          return le.return = j, le;
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case bn: {
              var Te = Vb(J, j.mode, V);
              return Te.ref = Up(j, null, J), Te.return = j, Te;
            }
            case mr: {
              var Se = Ib(J, j.mode, V);
              return Se.return = j, Se;
            }
            case Ye: {
              var nt = J._payload, dt = J._init;
              return z(j, dt(nt), V);
            }
          }
          if (Mt(J) || Rn(J)) {
            var an = rs(J, j.mode, V, null);
            return an.return = j, an;
          }
          pm(j, J);
        }
        return typeof J == "function" && vm(j), null;
      }
      function N(j, J, V, le) {
        var Te = J !== null ? J.key : null;
        if (typeof V == "string" && V !== "" || typeof V == "number")
          return Te !== null ? null : m(j, J, "" + V, le);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case bn:
              return V.key === Te ? b(j, J, V, le) : null;
            case mr:
              return V.key === Te ? w(j, J, V, le) : null;
            case Ye: {
              var Se = V._payload, nt = V._init;
              return N(j, J, nt(Se), le);
            }
          }
          if (Mt(V) || Rn(V))
            return Te !== null ? null : T(j, J, V, le, null);
          pm(j, V);
        }
        return typeof V == "function" && vm(j), null;
      }
      function B(j, J, V, le, Te) {
        if (typeof le == "string" && le !== "" || typeof le == "number") {
          var Se = j.get(V) || null;
          return m(J, Se, "" + le, Te);
        }
        if (typeof le == "object" && le !== null) {
          switch (le.$$typeof) {
            case bn: {
              var nt = j.get(le.key === null ? V : le.key) || null;
              return b(J, nt, le, Te);
            }
            case mr: {
              var dt = j.get(le.key === null ? V : le.key) || null;
              return w(J, dt, le, Te);
            }
            case Ye:
              var an = le._payload, Yt = le._init;
              return B(j, J, V, Yt(an), Te);
          }
          if (Mt(le) || Rn(le)) {
            var tr = j.get(V) || null;
            return T(J, tr, le, Te, null);
          }
          pm(J, le);
        }
        return typeof le == "function" && vm(J), null;
      }
      function G(j, J, V) {
        {
          if (typeof j != "object" || j === null)
            return J;
          switch (j.$$typeof) {
            case bn:
            case mr:
              CE(j, V);
              var le = j.key;
              if (typeof le != "string")
                break;
              if (J === null) {
                J = /* @__PURE__ */ new Set(), J.add(le);
                break;
              }
              if (!J.has(le)) {
                J.add(le);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", le);
              break;
            case Ye:
              var Te = j._payload, Se = j._init;
              G(Se(Te), J, V);
              break;
          }
        }
        return J;
      }
      function Z(j, J, V, le) {
        for (var Te = null, Se = 0; Se < V.length; Se++) {
          var nt = V[Se];
          Te = G(nt, Te, j);
        }
        for (var dt = null, an = null, Yt = J, tr = 0, Qt = 0, Qn = null; Yt !== null && Qt < V.length; Qt++) {
          Yt.index > Qt ? (Qn = Yt, Yt = null) : Qn = Yt.sibling;
          var Ci = N(j, Yt, V[Qt], le);
          if (Ci === null) {
            Yt === null && (Yt = Qn);
            break;
          }
          e && Yt && Ci.alternate === null && t(j, Yt), tr = c(Ci, tr, Qt), an === null ? dt = Ci : an.sibling = Ci, an = Ci, Yt = Qn;
        }
        if (Qt === V.length) {
          if (i(j, Yt), Gr()) {
            var ti = Qt;
            Zs(j, ti);
          }
          return dt;
        }
        if (Yt === null) {
          for (; Qt < V.length; Qt++) {
            var Sa = z(j, V[Qt], le);
            Sa !== null && (tr = c(Sa, tr, Qt), an === null ? dt = Sa : an.sibling = Sa, an = Sa);
          }
          if (Gr()) {
            var zi = Qt;
            Zs(j, zi);
          }
          return dt;
        }
        for (var Ui = a(j, Yt); Qt < V.length; Qt++) {
          var wi = B(Ui, j, Qt, V[Qt], le);
          wi !== null && (e && wi.alternate !== null && Ui.delete(wi.key === null ? Qt : wi.key), tr = c(wi, tr, Qt), an === null ? dt = wi : an.sibling = wi, an = wi);
        }
        if (e && Ui.forEach(function(ad) {
          return t(j, ad);
        }), Gr()) {
          var jl = Qt;
          Zs(j, jl);
        }
        return dt;
      }
      function be(j, J, V, le) {
        var Te = Rn(V);
        if (typeof Te != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          V[Symbol.toStringTag] === "Generator" && (Bg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Bg = !0), V.entries === Te && (Ig || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ig = !0);
          var Se = Te.call(V);
          if (Se)
            for (var nt = null, dt = Se.next(); !dt.done; dt = Se.next()) {
              var an = dt.value;
              nt = G(an, nt, j);
            }
        }
        var Yt = Te.call(V);
        if (Yt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var tr = null, Qt = null, Qn = J, Ci = 0, ti = 0, Sa = null, zi = Yt.next(); Qn !== null && !zi.done; ti++, zi = Yt.next()) {
          Qn.index > ti ? (Sa = Qn, Qn = null) : Sa = Qn.sibling;
          var Ui = N(j, Qn, zi.value, le);
          if (Ui === null) {
            Qn === null && (Qn = Sa);
            break;
          }
          e && Qn && Ui.alternate === null && t(j, Qn), Ci = c(Ui, Ci, ti), Qt === null ? tr = Ui : Qt.sibling = Ui, Qt = Ui, Qn = Sa;
        }
        if (zi.done) {
          if (i(j, Qn), Gr()) {
            var wi = ti;
            Zs(j, wi);
          }
          return tr;
        }
        if (Qn === null) {
          for (; !zi.done; ti++, zi = Yt.next()) {
            var jl = z(j, zi.value, le);
            jl !== null && (Ci = c(jl, Ci, ti), Qt === null ? tr = jl : Qt.sibling = jl, Qt = jl);
          }
          if (Gr()) {
            var ad = ti;
            Zs(j, ad);
          }
          return tr;
        }
        for (var hv = a(j, Qn); !zi.done; ti++, zi = Yt.next()) {
          var tl = B(hv, j, ti, zi.value, le);
          tl !== null && (e && tl.alternate !== null && hv.delete(tl.key === null ? ti : tl.key), Ci = c(tl, Ci, ti), Qt === null ? tr = tl : Qt.sibling = tl, Qt = tl);
        }
        if (e && hv.forEach(function(yO) {
          return t(j, yO);
        }), Gr()) {
          var mO = ti;
          Zs(j, mO);
        }
        return tr;
      }
      function Ke(j, J, V, le) {
        if (J !== null && J.tag === ue) {
          i(j, J.sibling);
          var Te = l(J, V);
          return Te.return = j, Te;
        }
        i(j, J);
        var Se = Pb(V, j.mode, le);
        return Se.return = j, Se;
      }
      function Ve(j, J, V, le) {
        for (var Te = V.key, Se = J; Se !== null; ) {
          if (Se.key === Te) {
            var nt = V.type;
            if (nt === Pr) {
              if (Se.tag === Be) {
                i(j, Se.sibling);
                var dt = l(Se, V.props.children);
                return dt.return = j, dt._debugSource = V._source, dt._debugOwner = V._owner, dt;
              }
            } else if (Se.elementType === nt || // Keep this check inline so it only runs on the false path:
            Dw(Se, V) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof nt == "object" && nt !== null && nt.$$typeof === Ye && wE(nt) === Se.type) {
              i(j, Se.sibling);
              var an = l(Se, V.props);
              return an.ref = Up(j, Se, V), an.return = j, an._debugSource = V._source, an._debugOwner = V._owner, an;
            }
            i(j, Se);
            break;
          } else
            t(j, Se);
          Se = Se.sibling;
        }
        if (V.type === Pr) {
          var Yt = rs(V.props.children, j.mode, le, V.key);
          return Yt.return = j, Yt;
        } else {
          var tr = Vb(V, j.mode, le);
          return tr.ref = Up(j, J, V), tr.return = j, tr;
        }
      }
      function zt(j, J, V, le) {
        for (var Te = V.key, Se = J; Se !== null; ) {
          if (Se.key === Te)
            if (Se.tag === K && Se.stateNode.containerInfo === V.containerInfo && Se.stateNode.implementation === V.implementation) {
              i(j, Se.sibling);
              var nt = l(Se, V.children || []);
              return nt.return = j, nt;
            } else {
              i(j, Se);
              break;
            }
          else
            t(j, Se);
          Se = Se.sibling;
        }
        var dt = Ib(V, j.mode, le);
        return dt.return = j, dt;
      }
      function Ot(j, J, V, le) {
        var Te = typeof V == "object" && V !== null && V.type === Pr && V.key === null;
        if (Te && (V = V.props.children), typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case bn:
              return v(Ve(j, J, V, le));
            case mr:
              return v(zt(j, J, V, le));
            case Ye:
              var Se = V._payload, nt = V._init;
              return Ot(j, J, nt(Se), le);
          }
          if (Mt(V))
            return Z(j, J, V, le);
          if (Rn(V))
            return be(j, J, V, le);
          pm(j, V);
        }
        return typeof V == "string" && V !== "" || typeof V == "number" ? v(Ke(j, J, "" + V, le)) : (typeof V == "function" && vm(j), i(j, J));
      }
      return Ot;
    }
    var Vf = TE(!0), RE = TE(!1);
    function Yx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, a = fc(i, i.pendingProps);
        for (t.child = a, a.return = t; i.sibling !== null; )
          i = i.sibling, a = a.sibling = fc(i, i.pendingProps), a.return = t;
        a.sibling = null;
      }
    }
    function Qx(e, t) {
      for (var i = e.child; i !== null; )
        ND(i, t), i = i.sibling;
    }
    var Gg = Iu(null), qg;
    qg = {};
    var hm = null, Pf = null, Kg = null, mm = !1;
    function ym() {
      hm = null, Pf = null, Kg = null, mm = !1;
    }
    function xE() {
      mm = !0;
    }
    function kE() {
      mm = !1;
    }
    function _E(e, t, i) {
      Si(Gg, t._currentValue, e), t._currentValue = i, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== qg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = qg;
    }
    function Xg(e, t) {
      var i = Gg.current;
      bi(Gg, t), e._currentValue = i;
    }
    function Zg(e, t, i) {
      for (var a = e; a !== null; ) {
        var l = a.alternate;
        if (El(a.childLanes, t) ? l !== null && !El(l.childLanes, t) && (l.childLanes = mt(l.childLanes, t)) : (a.childLanes = mt(a.childLanes, t), l !== null && (l.childLanes = mt(l.childLanes, t))), a === i)
          break;
        a = a.return;
      }
      a !== i && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Gx(e, t, i) {
      qx(e, t, i);
    }
    function qx(e, t, i) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var l = void 0, c = a.dependencies;
        if (c !== null) {
          l = a.child;
          for (var v = c.firstContext; v !== null; ) {
            if (v.context === t) {
              if (a.tag === A) {
                var m = Tu(i), b = Nl(fn, m);
                b.tag = bm;
                var w = a.updateQueue;
                if (w !== null) {
                  var T = w.shared, z = T.pending;
                  z === null ? b.next = b : (b.next = z.next, z.next = b), T.pending = b;
                }
              }
              a.lanes = mt(a.lanes, i);
              var N = a.alternate;
              N !== null && (N.lanes = mt(N.lanes, i)), Zg(a.return, i, e), c.lanes = mt(c.lanes, i);
              break;
            }
            v = v.next;
          }
        } else if (a.tag === ge)
          l = a.type === e.type ? null : a.child;
        else if (a.tag === Ht) {
          var B = a.return;
          if (B === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          B.lanes = mt(B.lanes, i);
          var G = B.alternate;
          G !== null && (G.lanes = mt(G.lanes, i)), Zg(B, i, e), l = a.sibling;
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
      hm = e, Pf = null, Kg = null;
      var i = e.dependencies;
      if (i !== null) {
        var a = i.firstContext;
        a !== null && (yi(i.lanes, t) && Zp(), i.firstContext = null);
      }
    }
    function pr(e) {
      mm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Kg !== e) {
        var i = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Pf === null) {
          if (hm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Pf = i, hm.dependencies = {
            lanes: te,
            firstContext: i
          };
        } else
          Pf = Pf.next = i;
      }
      return t;
    }
    var rc = null;
    function Jg(e) {
      rc === null ? rc = [e] : rc.push(e);
    }
    function Kx() {
      if (rc !== null) {
        for (var e = 0; e < rc.length; e++) {
          var t = rc[e], i = t.interleaved;
          if (i !== null) {
            t.interleaved = null;
            var a = i.next, l = t.pending;
            if (l !== null) {
              var c = l.next;
              l.next = a, i.next = c;
            }
            t.pending = i;
          }
        }
        rc = null;
      }
    }
    function DE(e, t, i, a) {
      var l = t.interleaved;
      return l === null ? (i.next = i, Jg(t)) : (i.next = l.next, l.next = i), t.interleaved = i, gm(e, a);
    }
    function Xx(e, t, i, a) {
      var l = t.interleaved;
      l === null ? (i.next = i, Jg(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
    }
    function Zx(e, t, i, a) {
      var l = t.interleaved;
      return l === null ? (i.next = i, Jg(t)) : (i.next = l.next, l.next = i), t.interleaved = i, gm(e, a);
    }
    function ia(e, t) {
      return gm(e, t);
    }
    var Jx = gm;
    function gm(e, t) {
      e.lanes = mt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = mt(i.lanes, t)), i === null && (e.flags & (hn | Yi)) !== Ge && Rw(e);
      for (var a = e, l = e.return; l !== null; )
        l.childLanes = mt(l.childLanes, t), i = l.alternate, i !== null ? i.childLanes = mt(i.childLanes, t) : (l.flags & (hn | Yi)) !== Ge && Rw(e), a = l, l = l.return;
      if (a.tag === M) {
        var c = a.stateNode;
        return c;
      } else
        return null;
    }
    var OE = 0, LE = 1, bm = 2, e0 = 3, Sm = !1, t0, Em;
    t0 = !1, Em = null;
    function n0(e) {
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
    function ME(e, t) {
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
    function Nl(e, t) {
      var i = {
        eventTime: e,
        lane: t,
        tag: OE,
        payload: null,
        callback: null,
        next: null
      };
      return i;
    }
    function Qu(e, t, i) {
      var a = e.updateQueue;
      if (a === null)
        return null;
      var l = a.shared;
      if (Em === l && !t0 && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), t0 = !0), X_()) {
        var c = l.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), l.pending = t, Jx(e, i);
      } else
        return Zx(e, l, t, i);
    }
    function Cm(e, t, i) {
      var a = t.updateQueue;
      if (a !== null) {
        var l = a.shared;
        if (Zd(i)) {
          var c = l.lanes;
          c = of(c, e.pendingLanes);
          var v = mt(c, i);
          l.lanes = v, Jd(e, v);
        }
      }
    }
    function r0(e, t) {
      var i = e.updateQueue, a = e.alternate;
      if (a !== null) {
        var l = a.updateQueue;
        if (i === l) {
          var c = null, v = null, m = i.firstBaseUpdate;
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
              v === null ? c = v = w : (v.next = w, v = w), b = b.next;
            } while (b !== null);
            v === null ? c = v = t : (v.next = t, v = t);
          } else
            c = v = t;
          i = {
            baseState: l.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: v,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = i;
          return;
        }
      }
      var T = i.lastBaseUpdate;
      T === null ? i.firstBaseUpdate = t : T.next = t, i.lastBaseUpdate = t;
    }
    function ek(e, t, i, a, l, c) {
      switch (i.tag) {
        case LE: {
          var v = i.payload;
          if (typeof v == "function") {
            xE();
            var m = v.call(c, a, l);
            {
              if (e.mode & xt) {
                Wn(!0);
                try {
                  v.call(c, a, l);
                } finally {
                  Wn(!1);
                }
              }
              kE();
            }
            return m;
          }
          return v;
        }
        case e0:
          e.flags = e.flags & ~sr | ot;
        case OE: {
          var b = i.payload, w;
          if (typeof b == "function") {
            xE(), w = b.call(c, a, l);
            {
              if (e.mode & xt) {
                Wn(!0);
                try {
                  b.call(c, a, l);
                } finally {
                  Wn(!1);
                }
              }
              kE();
            }
          } else
            w = b;
          return w == null ? a : wt({}, a, w);
        }
        case bm:
          return Sm = !0, a;
      }
      return a;
    }
    function wm(e, t, i, a) {
      var l = e.updateQueue;
      Sm = !1, Em = l.shared;
      var c = l.firstBaseUpdate, v = l.lastBaseUpdate, m = l.shared.pending;
      if (m !== null) {
        l.shared.pending = null;
        var b = m, w = b.next;
        b.next = null, v === null ? c = w : v.next = w, v = b;
        var T = e.alternate;
        if (T !== null) {
          var z = T.updateQueue, N = z.lastBaseUpdate;
          N !== v && (N === null ? z.firstBaseUpdate = w : N.next = w, z.lastBaseUpdate = b);
        }
      }
      if (c !== null) {
        var B = l.baseState, G = te, Z = null, be = null, Ke = null, Ve = c;
        do {
          var zt = Ve.lane, Ot = Ve.eventTime;
          if (El(a, zt)) {
            if (Ke !== null) {
              var J = {
                eventTime: Ot,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Yn,
                tag: Ve.tag,
                payload: Ve.payload,
                callback: Ve.callback,
                next: null
              };
              Ke = Ke.next = J;
            }
            B = ek(e, l, Ve, B, t, i);
            var V = Ve.callback;
            if (V !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ve.lane !== Yn) {
              e.flags |= ka;
              var le = l.effects;
              le === null ? l.effects = [Ve] : le.push(Ve);
            }
          } else {
            var j = {
              eventTime: Ot,
              lane: zt,
              tag: Ve.tag,
              payload: Ve.payload,
              callback: Ve.callback,
              next: null
            };
            Ke === null ? (be = Ke = j, Z = B) : Ke = Ke.next = j, G = mt(G, zt);
          }
          if (Ve = Ve.next, Ve === null) {
            if (m = l.shared.pending, m === null)
              break;
            var Te = m, Se = Te.next;
            Te.next = null, Ve = Se, l.lastBaseUpdate = Te, l.shared.pending = null;
          }
        } while (!0);
        Ke === null && (Z = B), l.baseState = Z, l.firstBaseUpdate = be, l.lastBaseUpdate = Ke;
        var nt = l.shared.interleaved;
        if (nt !== null) {
          var dt = nt;
          do
            G = mt(G, dt.lane), dt = dt.next;
          while (dt !== nt);
        } else c === null && (l.shared.lanes = te);
        cv(G), e.lanes = G, e.memoizedState = B;
      }
      Em = null;
    }
    function tk(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function AE() {
      Sm = !1;
    }
    function Tm() {
      return Sm;
    }
    function NE(e, t, i) {
      var a = t.effects;
      if (t.effects = null, a !== null)
        for (var l = 0; l < a.length; l++) {
          var c = a[l], v = c.callback;
          v !== null && (c.callback = null, tk(v, i));
        }
    }
    var Hp = {}, Gu = Iu(Hp), Fp = Iu(Hp), Rm = Iu(Hp);
    function xm(e) {
      if (e === Hp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function $E() {
      var e = xm(Rm.current);
      return e;
    }
    function i0(e, t) {
      Si(Rm, t, e), Si(Fp, e, e), Si(Gu, Hp, e);
      var i = gR(t);
      bi(Gu, e), Si(Gu, i, e);
    }
    function Bf(e) {
      bi(Gu, e), bi(Fp, e), bi(Rm, e);
    }
    function a0() {
      var e = xm(Gu.current);
      return e;
    }
    function zE(e) {
      xm(Rm.current);
      var t = xm(Gu.current), i = bR(t, e.type);
      t !== i && (Si(Fp, e, e), Si(Gu, i, e));
    }
    function o0(e) {
      Fp.current === e && (bi(Gu, e), bi(Fp, e));
    }
    var nk = 0, UE = 1, HE = 1, jp = 2, so = Iu(nk);
    function l0(e, t) {
      return (e & t) !== 0;
    }
    function Wf(e) {
      return e & UE;
    }
    function u0(e, t) {
      return e & UE | t;
    }
    function rk(e, t) {
      return e | t;
    }
    function qu(e, t) {
      Si(so, t, e);
    }
    function Yf(e) {
      bi(so, e);
    }
    function ik(e, t) {
      var i = e.memoizedState;
      return i !== null ? i.dehydrated !== null : (e.memoizedProps, !0);
    }
    function km(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Oe) {
          var i = t.memoizedState;
          if (i !== null) {
            var a = i.dehydrated;
            if (a === null || tE(a) || xg(a))
              return t;
          }
        } else if (t.tag === Nt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & ot) !== Ge;
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
    ), Go = (
      /*  */
      2
    ), Er = (
      /*    */
      4
    ), qr = (
      /*   */
      8
    ), s0 = [];
    function c0() {
      for (var e = 0; e < s0.length; e++) {
        var t = s0[e];
        t._workInProgressVersionPrimary = null;
      }
      s0.length = 0;
    }
    function ak(e, t) {
      var i = t._getVersion, a = i(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a);
    }
    var Ce = p.ReactCurrentDispatcher, Vp = p.ReactCurrentBatchConfig, f0, Qf;
    f0 = /* @__PURE__ */ new Set();
    var ic = te, rn = null, Cr = null, wr = null, _m = !1, Pp = !1, Ip = 0, ok = 0, lk = 25, ee = null, za = null, Ku = -1, d0 = !1;
    function Jt() {
      {
        var e = ee;
        za === null ? za = [e] : za.push(e);
      }
    }
    function me() {
      {
        var e = ee;
        za !== null && (Ku++, za[Ku] !== e && uk(e));
      }
    }
    function Gf(e) {
      e != null && !Mt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ee, typeof e);
    }
    function uk(e) {
      {
        var t = st(rn);
        if (!f0.has(t) && (f0.add(t), za !== null)) {
          for (var i = "", a = 30, l = 0; l <= Ku; l++) {
            for (var c = za[l], v = l === Ku ? e : c, m = l + 1 + ". " + c; m.length < a; )
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
    function p0(e, t) {
      if (d0)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ee), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ee, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var i = 0; i < t.length && i < e.length; i++)
        if (!_e(e[i], t[i]))
          return !1;
      return !0;
    }
    function qf(e, t, i, a, l, c) {
      ic = c, rn = t, za = e !== null ? e._debugHookTypes : null, Ku = -1, d0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = te, e !== null && e.memoizedState !== null ? Ce.current = oC : za !== null ? Ce.current = aC : Ce.current = iC;
      var v = i(a, l);
      if (Pp) {
        var m = 0;
        do {
          if (Pp = !1, Ip = 0, m >= lk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, d0 = !1, Cr = null, wr = null, t.updateQueue = null, Ku = -1, Ce.current = lC, v = i(a, l);
        } while (Pp);
      }
      Ce.current = Vm, t._debugHookTypes = za;
      var b = Cr !== null && Cr.next !== null;
      if (ic = te, rn = null, Cr = null, wr = null, ee = null, za = null, Ku = -1, e !== null && (e.flags & yr) !== (t.flags & yr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & je) !== Ue && g("Internal React error: Expected static flag was missing. Please notify the React team."), _m = !1, b)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function Kf() {
      var e = Ip !== 0;
      return Ip = 0, e;
    }
    function FE(e, t, i) {
      t.updateQueue = e.updateQueue, (t.mode & Li) !== Ue ? t.flags &= ~(dl | fi | Sn | yt) : t.flags &= ~(Sn | yt), e.lanes = $s(e.lanes, i);
    }
    function jE() {
      if (Ce.current = Vm, _m) {
        for (var e = rn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        _m = !1;
      }
      ic = te, rn = null, Cr = null, wr = null, za = null, Ku = -1, ee = null, JE = !1, Pp = !1, Ip = 0;
    }
    function qo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return wr === null ? rn.memoizedState = wr = e : wr = wr.next = e, wr;
    }
    function Ua() {
      var e;
      if (Cr === null) {
        var t = rn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Cr.next;
      var i;
      if (wr === null ? i = rn.memoizedState : i = wr.next, i !== null)
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
        wr === null ? rn.memoizedState = wr = a : wr = wr.next = a;
      }
      return wr;
    }
    function VE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function v0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function h0(e, t, i) {
      var a = qo(), l;
      i !== void 0 ? l = i(t) : l = t, a.memoizedState = a.baseState = l;
      var c = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      a.queue = c;
      var v = c.dispatch = dk.bind(null, rn, c);
      return [a.memoizedState, v];
    }
    function m0(e, t, i) {
      var a = Ua(), l = a.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var c = Cr, v = c.baseQueue, m = l.pending;
      if (m !== null) {
        if (v !== null) {
          var b = v.next, w = m.next;
          v.next = w, m.next = b;
        }
        c.baseQueue !== v && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), c.baseQueue = v = m, l.pending = null;
      }
      if (v !== null) {
        var T = v.next, z = c.baseState, N = null, B = null, G = null, Z = T;
        do {
          var be = Z.lane;
          if (El(ic, be)) {
            if (G !== null) {
              var Ve = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Yn,
                action: Z.action,
                hasEagerState: Z.hasEagerState,
                eagerState: Z.eagerState,
                next: null
              };
              G = G.next = Ve;
            }
            if (Z.hasEagerState)
              z = Z.eagerState;
            else {
              var zt = Z.action;
              z = e(z, zt);
            }
          } else {
            var Ke = {
              lane: be,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            };
            G === null ? (B = G = Ke, N = z) : G = G.next = Ke, rn.lanes = mt(rn.lanes, be), cv(be);
          }
          Z = Z.next;
        } while (Z !== null && Z !== T);
        G === null ? N = z : G.next = B, _e(z, a.memoizedState) || Zp(), a.memoizedState = z, a.baseState = N, a.baseQueue = G, l.lastRenderedState = z;
      }
      var Ot = l.interleaved;
      if (Ot !== null) {
        var j = Ot;
        do {
          var J = j.lane;
          rn.lanes = mt(rn.lanes, J), cv(J), j = j.next;
        } while (j !== Ot);
      } else v === null && (l.lanes = te);
      var V = l.dispatch;
      return [a.memoizedState, V];
    }
    function y0(e, t, i) {
      var a = Ua(), l = a.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var c = l.dispatch, v = l.pending, m = a.memoizedState;
      if (v !== null) {
        l.pending = null;
        var b = v.next, w = b;
        do {
          var T = w.action;
          m = e(m, T), w = w.next;
        } while (w !== b);
        _e(m, a.memoizedState) || Zp(), a.memoizedState = m, a.baseQueue === null && (a.baseState = m), l.lastRenderedState = m;
      }
      return [m, c];
    }
    function CA(e, t, i) {
    }
    function wA(e, t, i) {
    }
    function g0(e, t, i) {
      var a = rn, l = qo(), c, v = Gr();
      if (v) {
        if (i === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        c = i(), Qf || c !== i() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Qf = !0);
      } else {
        if (c = t(), !Qf) {
          var m = t();
          _e(c, m) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Qf = !0);
        }
        var b = oy();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(b, ic) || PE(a, t, c);
      }
      l.memoizedState = c;
      var w = {
        value: c,
        getSnapshot: t
      };
      return l.queue = w, Am(BE.bind(null, a, w, e), [e]), a.flags |= Sn, Bp(Sr | qr, IE.bind(null, a, w, c, t), void 0, null), c;
    }
    function Dm(e, t, i) {
      var a = rn, l = Ua(), c = t();
      if (!Qf) {
        var v = t();
        _e(c, v) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Qf = !0);
      }
      var m = l.memoizedState, b = !_e(m, c);
      b && (l.memoizedState = c, Zp());
      var w = l.queue;
      if (Yp(BE.bind(null, a, w, e), [e]), w.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      wr !== null && wr.memoizedState.tag & Sr) {
        a.flags |= Sn, Bp(Sr | qr, IE.bind(null, a, w, c, t), void 0, null);
        var T = oy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ns(T, ic) || PE(a, t, c);
      }
      return c;
    }
    function PE(e, t, i) {
      e.flags |= Ts;
      var a = {
        getSnapshot: t,
        value: i
      }, l = rn.updateQueue;
      if (l === null)
        l = VE(), rn.updateQueue = l, l.stores = [a];
      else {
        var c = l.stores;
        c === null ? l.stores = [a] : c.push(a);
      }
    }
    function IE(e, t, i, a) {
      t.value = i, t.getSnapshot = a, WE(t) && YE(e);
    }
    function BE(e, t, i) {
      var a = function() {
        WE(t) && YE(e);
      };
      return i(a);
    }
    function WE(e) {
      var t = e.getSnapshot, i = e.value;
      try {
        var a = t();
        return !_e(i, a);
      } catch {
        return !0;
      }
    }
    function YE(e) {
      var t = ia(e, Ie);
      t !== null && kr(t, e, Ie, fn);
    }
    function Om(e) {
      var t = qo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: v0,
        lastRenderedState: e
      };
      t.queue = i;
      var a = i.dispatch = pk.bind(null, rn, i);
      return [t.memoizedState, a];
    }
    function b0(e) {
      return m0(v0);
    }
    function S0(e) {
      return y0(v0);
    }
    function Bp(e, t, i, a) {
      var l = {
        tag: e,
        create: t,
        destroy: i,
        deps: a,
        // Circular
        next: null
      }, c = rn.updateQueue;
      if (c === null)
        c = VE(), rn.updateQueue = c, c.lastEffect = l.next = l;
      else {
        var v = c.lastEffect;
        if (v === null)
          c.lastEffect = l.next = l;
        else {
          var m = v.next;
          v.next = l, l.next = m, c.lastEffect = l;
        }
      }
      return l;
    }
    function E0(e) {
      var t = qo();
      {
        var i = {
          current: e
        };
        return t.memoizedState = i, i;
      }
    }
    function Lm(e) {
      var t = Ua();
      return t.memoizedState;
    }
    function Wp(e, t, i, a) {
      var l = qo(), c = a === void 0 ? null : a;
      rn.flags |= e, l.memoizedState = Bp(Sr | t, i, void 0, c);
    }
    function Mm(e, t, i, a) {
      var l = Ua(), c = a === void 0 ? null : a, v = void 0;
      if (Cr !== null) {
        var m = Cr.memoizedState;
        if (v = m.destroy, c !== null) {
          var b = m.deps;
          if (p0(c, b)) {
            l.memoizedState = Bp(t, i, v, c);
            return;
          }
        }
      }
      rn.flags |= e, l.memoizedState = Bp(Sr | t, i, v, c);
    }
    function Am(e, t) {
      return (rn.mode & Li) !== Ue ? Wp(dl | Sn | zo, qr, e, t) : Wp(Sn | zo, qr, e, t);
    }
    function Yp(e, t) {
      return Mm(Sn, qr, e, t);
    }
    function C0(e, t) {
      return Wp(yt, Go, e, t);
    }
    function Nm(e, t) {
      return Mm(yt, Go, e, t);
    }
    function w0(e, t) {
      var i = yt;
      return i |= ci, (rn.mode & Li) !== Ue && (i |= fi), Wp(i, Er, e, t);
    }
    function $m(e, t) {
      return Mm(yt, Er, e, t);
    }
    function QE(e, t) {
      if (typeof t == "function") {
        var i = t, a = e();
        return i(a), function() {
          i(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var c = e();
        return l.current = c, function() {
          l.current = null;
        };
      }
    }
    function T0(e, t, i) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null, l = yt;
      return l |= ci, (rn.mode & Li) !== Ue && (l |= fi), Wp(l, Er, QE.bind(null, t, e), a);
    }
    function zm(e, t, i) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null;
      return Mm(yt, Er, QE.bind(null, t, e), a);
    }
    function sk(e, t) {
    }
    var Um = sk;
    function R0(e, t) {
      var i = qo(), a = t === void 0 ? null : t;
      return i.memoizedState = [e, a], e;
    }
    function Hm(e, t) {
      var i = Ua(), a = t === void 0 ? null : t, l = i.memoizedState;
      if (l !== null && a !== null) {
        var c = l[1];
        if (p0(a, c))
          return l[0];
      }
      return i.memoizedState = [e, a], e;
    }
    function x0(e, t) {
      var i = qo(), a = t === void 0 ? null : t, l = e();
      return i.memoizedState = [l, a], l;
    }
    function Fm(e, t) {
      var i = Ua(), a = t === void 0 ? null : t, l = i.memoizedState;
      if (l !== null && a !== null) {
        var c = l[1];
        if (p0(a, c))
          return l[0];
      }
      var v = e();
      return i.memoizedState = [v, a], v;
    }
    function k0(e) {
      var t = qo();
      return t.memoizedState = e, e;
    }
    function GE(e) {
      var t = Ua(), i = Cr, a = i.memoizedState;
      return KE(t, a, e);
    }
    function qE(e) {
      var t = Ua();
      if (Cr === null)
        return t.memoizedState = e, e;
      var i = Cr.memoizedState;
      return KE(t, i, e);
    }
    function KE(e, t, i) {
      var a = !hh(ic);
      if (a) {
        if (!_e(i, t)) {
          var l = gh();
          rn.lanes = mt(rn.lanes, l), cv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Zp()), e.memoizedState = i, i;
    }
    function ck(e, t, i) {
      var a = Zi();
      An(Qy(a, no)), e(!0);
      var l = Vp.transition;
      Vp.transition = {};
      var c = Vp.transition;
      Vp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (An(a), Vp.transition = l, l === null && c._updatedFibers) {
          var v = c._updatedFibers.size;
          v > 10 && R("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
        }
      }
    }
    function _0() {
      var e = Om(!1), t = e[0], i = e[1], a = ck.bind(null, i), l = qo();
      return l.memoizedState = a, [t, a];
    }
    function XE() {
      var e = b0(), t = e[0], i = Ua(), a = i.memoizedState;
      return [t, a];
    }
    function ZE() {
      var e = S0(), t = e[0], i = Ua(), a = i.memoizedState;
      return [t, a];
    }
    var JE = !1;
    function fk() {
      return JE;
    }
    function D0() {
      var e = qo(), t = oy(), i = t.identifierPrefix, a;
      if (Gr()) {
        var l = _x();
        a = ":" + i + "R" + l;
        var c = Ip++;
        c > 0 && (a += "H" + c.toString(32)), a += ":";
      } else {
        var v = ok++;
        a = ":" + i + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = a, a;
    }
    function jm() {
      var e = Ua(), t = e.memoizedState;
      return t;
    }
    function dk(e, t, i) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = ts(e), l = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (eC(e))
        tC(t, l);
      else {
        var c = DE(e, t, l, a);
        if (c !== null) {
          var v = $i();
          kr(c, e, a, v), nC(c, t, a);
        }
      }
      rC(e, a);
    }
    function pk(e, t, i) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = ts(e), l = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (eC(e))
        tC(t, l);
      else {
        var c = e.alternate;
        if (e.lanes === te && (c === null || c.lanes === te)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var m;
            m = Ce.current, Ce.current = co;
            try {
              var b = t.lastRenderedState, w = v(b, i);
              if (l.hasEagerState = !0, l.eagerState = w, _e(w, b)) {
                Xx(e, t, l, a);
                return;
              }
            } catch {
            } finally {
              Ce.current = m;
            }
          }
        }
        var T = DE(e, t, l, a);
        if (T !== null) {
          var z = $i();
          kr(T, e, a, z), nC(T, t, a);
        }
      }
      rC(e, a);
    }
    function eC(e) {
      var t = e.alternate;
      return e === rn || t !== null && t === rn;
    }
    function tC(e, t) {
      Pp = _m = !0;
      var i = e.pending;
      i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
    }
    function nC(e, t, i) {
      if (Zd(i)) {
        var a = t.lanes;
        a = of(a, e.pendingLanes);
        var l = mt(a, i);
        t.lanes = l, Jd(e, l);
      }
    }
    function rC(e, t, i) {
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
      unstable_isNewReconciler: se
    }, iC = null, aC = null, oC = null, lC = null, Ko = null, co = null, Pm = null;
    {
      var O0 = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ct = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      iC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", Jt(), Gf(t), R0(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", Jt(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", Jt(), Gf(t), Am(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", Jt(), Gf(i), T0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", Jt(), Gf(t), C0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", Jt(), Gf(t), w0(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", Jt(), Gf(t);
          var i = Ce.current;
          Ce.current = Ko;
          try {
            return x0(e, t);
          } finally {
            Ce.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", Jt();
          var a = Ce.current;
          Ce.current = Ko;
          try {
            return h0(e, t, i);
          } finally {
            Ce.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", Jt(), E0(e);
        },
        useState: function(e) {
          ee = "useState", Jt();
          var t = Ce.current;
          Ce.current = Ko;
          try {
            return Om(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", Jt(), k0(e);
        },
        useTransition: function() {
          return ee = "useTransition", Jt(), _0();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", Jt(), g0(e, t, i);
        },
        useId: function() {
          return ee = "useId", Jt(), D0();
        },
        unstable_isNewReconciler: se
      }, aC = {
        readContext: function(e) {
          return pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", me(), R0(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", me(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", me(), Am(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", me(), T0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), C0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), w0(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var i = Ce.current;
          Ce.current = Ko;
          try {
            return x0(e, t);
          } finally {
            Ce.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", me();
          var a = Ce.current;
          Ce.current = Ko;
          try {
            return h0(e, t, i);
          } finally {
            Ce.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), E0(e);
        },
        useState: function(e) {
          ee = "useState", me();
          var t = Ce.current;
          Ce.current = Ko;
          try {
            return Om(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), k0(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), _0();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", me(), g0(e, t, i);
        },
        useId: function() {
          return ee = "useId", me(), D0();
        },
        unstable_isNewReconciler: se
      }, oC = {
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
          return ee = "useEffect", me(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", me(), zm(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), $m(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var i = Ce.current;
          Ce.current = co;
          try {
            return Fm(e, t);
          } finally {
            Ce.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", me();
          var a = Ce.current;
          Ce.current = co;
          try {
            return m0(e, t, i);
          } finally {
            Ce.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), Lm();
        },
        useState: function(e) {
          ee = "useState", me();
          var t = Ce.current;
          Ce.current = co;
          try {
            return b0(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), Um();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), GE(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), XE();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", me(), Dm(e, t);
        },
        useId: function() {
          return ee = "useId", me(), jm();
        },
        unstable_isNewReconciler: se
      }, lC = {
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
          return ee = "useEffect", me(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", me(), zm(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), $m(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var i = Ce.current;
          Ce.current = Pm;
          try {
            return Fm(e, t);
          } finally {
            Ce.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", me();
          var a = Ce.current;
          Ce.current = Pm;
          try {
            return y0(e, t, i);
          } finally {
            Ce.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), Lm();
        },
        useState: function(e) {
          ee = "useState", me();
          var t = Ce.current;
          Ce.current = Pm;
          try {
            return S0(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), Um();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), qE(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), ZE();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", me(), Dm(e, t);
        },
        useId: function() {
          return ee = "useId", me(), jm();
        },
        unstable_isNewReconciler: se
      }, Ko = {
        readContext: function(e) {
          return O0(), pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", ct(), Jt(), R0(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", ct(), Jt(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", ct(), Jt(), Am(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", ct(), Jt(), T0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", ct(), Jt(), C0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", ct(), Jt(), w0(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", ct(), Jt();
          var i = Ce.current;
          Ce.current = Ko;
          try {
            return x0(e, t);
          } finally {
            Ce.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", ct(), Jt();
          var a = Ce.current;
          Ce.current = Ko;
          try {
            return h0(e, t, i);
          } finally {
            Ce.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", ct(), Jt(), E0(e);
        },
        useState: function(e) {
          ee = "useState", ct(), Jt();
          var t = Ce.current;
          Ce.current = Ko;
          try {
            return Om(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", ct(), Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", ct(), Jt(), k0(e);
        },
        useTransition: function() {
          return ee = "useTransition", ct(), Jt(), _0();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", ct(), Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", ct(), Jt(), g0(e, t, i);
        },
        useId: function() {
          return ee = "useId", ct(), Jt(), D0();
        },
        unstable_isNewReconciler: se
      }, co = {
        readContext: function(e) {
          return O0(), pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", ct(), me(), Hm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", ct(), me(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", ct(), me(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", ct(), me(), zm(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", ct(), me(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", ct(), me(), $m(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", ct(), me();
          var i = Ce.current;
          Ce.current = co;
          try {
            return Fm(e, t);
          } finally {
            Ce.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", ct(), me();
          var a = Ce.current;
          Ce.current = co;
          try {
            return m0(e, t, i);
          } finally {
            Ce.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", ct(), me(), Lm();
        },
        useState: function(e) {
          ee = "useState", ct(), me();
          var t = Ce.current;
          Ce.current = co;
          try {
            return b0(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", ct(), me(), Um();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", ct(), me(), GE(e);
        },
        useTransition: function() {
          return ee = "useTransition", ct(), me(), XE();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", ct(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", ct(), me(), Dm(e, t);
        },
        useId: function() {
          return ee = "useId", ct(), me(), jm();
        },
        unstable_isNewReconciler: se
      }, Pm = {
        readContext: function(e) {
          return O0(), pr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", ct(), me(), Hm(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", ct(), me(), pr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", ct(), me(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", ct(), me(), zm(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", ct(), me(), Nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", ct(), me(), $m(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", ct(), me();
          var i = Ce.current;
          Ce.current = co;
          try {
            return Fm(e, t);
          } finally {
            Ce.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", ct(), me();
          var a = Ce.current;
          Ce.current = co;
          try {
            return y0(e, t, i);
          } finally {
            Ce.current = a;
          }
        },
        useRef: function(e) {
          return ee = "useRef", ct(), me(), Lm();
        },
        useState: function(e) {
          ee = "useState", ct(), me();
          var t = Ce.current;
          Ce.current = co;
          try {
            return S0(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", ct(), me(), Um();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", ct(), me(), qE(e);
        },
        useTransition: function() {
          return ee = "useTransition", ct(), me(), ZE();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", ct(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", ct(), me(), Dm(e, t);
        },
        useId: function() {
          return ee = "useId", ct(), me(), jm();
        },
        unstable_isNewReconciler: se
      };
    }
    var Xu = u.unstable_now, uC = 0, Im = -1, Qp = -1, Bm = -1, L0 = !1, Wm = !1;
    function sC() {
      return L0;
    }
    function vk() {
      Wm = !0;
    }
    function hk() {
      L0 = !1, Wm = !1;
    }
    function mk() {
      L0 = Wm, Wm = !1;
    }
    function cC() {
      return uC;
    }
    function fC() {
      uC = Xu();
    }
    function M0(e) {
      Qp = Xu(), e.actualStartTime < 0 && (e.actualStartTime = Xu());
    }
    function dC(e) {
      Qp = -1;
    }
    function Ym(e, t) {
      if (Qp >= 0) {
        var i = Xu() - Qp;
        e.actualDuration += i, t && (e.selfBaseDuration = i), Qp = -1;
      }
    }
    function Xo(e) {
      if (Im >= 0) {
        var t = Xu() - Im;
        Im = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case M:
              var a = i.stateNode;
              a.effectDuration += t;
              return;
            case pt:
              var l = i.stateNode;
              l.effectDuration += t;
              return;
          }
          i = i.return;
        }
      }
    }
    function A0(e) {
      if (Bm >= 0) {
        var t = Xu() - Bm;
        Bm = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case M:
              var a = i.stateNode;
              a !== null && (a.passiveEffectDuration += t);
              return;
            case pt:
              var l = i.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          i = i.return;
        }
      }
    }
    function Zo() {
      Im = Xu();
    }
    function N0() {
      Bm = Xu();
    }
    function $0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function fo(e, t) {
      if (e && e.defaultProps) {
        var i = wt({}, t), a = e.defaultProps;
        for (var l in a)
          i[l] === void 0 && (i[l] = a[l]);
        return i;
      }
      return t;
    }
    var z0 = {}, U0, H0, F0, j0, V0, pC, Qm, P0, I0, B0, Gp;
    {
      U0 = /* @__PURE__ */ new Set(), H0 = /* @__PURE__ */ new Set(), F0 = /* @__PURE__ */ new Set(), j0 = /* @__PURE__ */ new Set(), P0 = /* @__PURE__ */ new Set(), V0 = /* @__PURE__ */ new Set(), I0 = /* @__PURE__ */ new Set(), B0 = /* @__PURE__ */ new Set(), Gp = /* @__PURE__ */ new Set();
      var vC = /* @__PURE__ */ new Set();
      Qm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          vC.has(i) || (vC.add(i), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, pC = function(e, t) {
        if (t === void 0) {
          var i = Lt(e) || "Component";
          V0.has(i) || (V0.add(i), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, Object.defineProperty(z0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(z0);
    }
    function W0(e, t, i, a) {
      var l = e.memoizedState, c = i(a, l);
      {
        if (e.mode & xt) {
          Wn(!0);
          try {
            c = i(a, l);
          } finally {
            Wn(!1);
          }
        }
        pC(t, c);
      }
      var v = c == null ? l : wt({}, l, c);
      if (e.memoizedState = v, e.lanes === te) {
        var m = e.updateQueue;
        m.baseState = v;
      }
    }
    var Y0 = {
      isMounted: Di,
      enqueueSetState: function(e, t, i) {
        var a = Bi(e), l = $i(), c = ts(a), v = Nl(l, c);
        v.payload = t, i != null && (Qm(i, "setState"), v.callback = i);
        var m = Qu(a, v, c);
        m !== null && (kr(m, a, c, l), Cm(m, a, c)), _s(a, c);
      },
      enqueueReplaceState: function(e, t, i) {
        var a = Bi(e), l = $i(), c = ts(a), v = Nl(l, c);
        v.tag = LE, v.payload = t, i != null && (Qm(i, "replaceState"), v.callback = i);
        var m = Qu(a, v, c);
        m !== null && (kr(m, a, c, l), Cm(m, a, c)), _s(a, c);
      },
      enqueueForceUpdate: function(e, t) {
        var i = Bi(e), a = $i(), l = ts(i), c = Nl(a, l);
        c.tag = bm, t != null && (Qm(t, "forceUpdate"), c.callback = t);
        var v = Qu(i, c, l);
        v !== null && (kr(v, i, l, a), Cm(v, i, l)), Pc(i, l);
      }
    };
    function hC(e, t, i, a, l, c, v) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        var b = m.shouldComponentUpdate(a, c, v);
        {
          if (e.mode & xt) {
            Wn(!0);
            try {
              b = m.shouldComponentUpdate(a, c, v);
            } finally {
              Wn(!1);
            }
          }
          b === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Lt(t) || "Component");
        }
        return b;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !tt(i, a) || !tt(l, c) : !0;
    }
    function yk(e, t, i) {
      var a = e.stateNode;
      {
        var l = Lt(t) || "Component", c = a.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), a.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), a.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Gp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & xt) === Ue && (Gp.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Gp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & xt) === Ue && (Gp.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), a.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !I0.has(t) && (I0.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof a.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Lt(t) || "A pure component"), typeof a.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof a.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof a.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof a.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var v = a.props !== i;
        a.props !== void 0 && v && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), a.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !F0.has(t) && (F0.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Lt(t))), typeof a.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof a.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var m = a.state;
        m && (typeof m != "object" || Mt(m)) && g("%s.state: must be set to an object or null", l), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function mC(e, t) {
      t.updater = Y0, e.stateNode = t, cu(t, e), t._reactInternalInstance = z0;
    }
    function yC(e, t, i) {
      var a = !1, l = ga, c = ga, v = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === ne && v._context === void 0
        );
        if (!m && !B0.has(t)) {
          B0.add(t);
          var b = "";
          v === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? b = " However, it is set to a " + typeof v + "." : v.$$typeof === D ? b = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Lt(t) || "Component", b);
        }
      }
      if (typeof v == "object" && v !== null)
        c = pr(v);
      else {
        l = zf(e, t, !0);
        var w = t.contextTypes;
        a = w != null, c = a ? Uf(e, l) : ga;
      }
      var T = new t(i, c);
      if (e.mode & xt) {
        Wn(!0);
        try {
          T = new t(i, c);
        } finally {
          Wn(!1);
        }
      }
      var z = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      mC(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var N = Lt(t) || "Component";
          H0.has(N) || (H0.add(N), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, T.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var B = null, G = null, Z = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? B = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (B = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? G = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (G = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), B !== null || G !== null || Z !== null) {
            var be = Lt(t) || "Component", Ke = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            j0.has(be) || (j0.add(be), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, be, Ke, B !== null ? `
  ` + B : "", G !== null ? `
  ` + G : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return a && oE(e, l, c), T;
    }
    function gk(e, t) {
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), i !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", st(e) || "Component"), Y0.enqueueReplaceState(t, t.state, null));
    }
    function gC(e, t, i, a) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, a), t.state !== l) {
        {
          var c = st(e) || "Component";
          U0.has(c) || (U0.add(c), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        Y0.enqueueReplaceState(t, t.state, null);
      }
    }
    function Q0(e, t, i, a) {
      yk(e, t, i);
      var l = e.stateNode;
      l.props = i, l.state = e.memoizedState, l.refs = {}, n0(e);
      var c = t.contextType;
      if (typeof c == "object" && c !== null)
        l.context = pr(c);
      else {
        var v = zf(e, t, !0);
        l.context = Uf(e, v);
      }
      {
        if (l.state === i) {
          var m = Lt(t) || "Component";
          P0.has(m) || (P0.add(m), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & xt && uo.recordLegacyContextWarning(e, l), uo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var b = t.getDerivedStateFromProps;
      if (typeof b == "function" && (W0(e, t, b, i), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (gk(e, l), wm(e, i, l, a), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var w = yt;
        w |= ci, (e.mode & Li) !== Ue && (w |= fi), e.flags |= w;
      }
    }
    function bk(e, t, i, a) {
      var l = e.stateNode, c = e.memoizedProps;
      l.props = c;
      var v = l.context, m = t.contextType, b = ga;
      if (typeof m == "object" && m !== null)
        b = pr(m);
      else {
        var w = zf(e, t, !0);
        b = Uf(e, w);
      }
      var T = t.getDerivedStateFromProps, z = typeof T == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !z && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (c !== i || v !== b) && gC(e, l, i, b), AE();
      var N = e.memoizedState, B = l.state = N;
      if (wm(e, i, l, a), B = e.memoizedState, c === i && N === B && !im() && !Tm()) {
        if (typeof l.componentDidMount == "function") {
          var G = yt;
          G |= ci, (e.mode & Li) !== Ue && (G |= fi), e.flags |= G;
        }
        return !1;
      }
      typeof T == "function" && (W0(e, t, T, i), B = e.memoizedState);
      var Z = Tm() || hC(e, t, c, i, N, B, b);
      if (Z) {
        if (!z && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var be = yt;
          be |= ci, (e.mode & Li) !== Ue && (be |= fi), e.flags |= be;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Ke = yt;
          Ke |= ci, (e.mode & Li) !== Ue && (Ke |= fi), e.flags |= Ke;
        }
        e.memoizedProps = i, e.memoizedState = B;
      }
      return l.props = i, l.state = B, l.context = b, Z;
    }
    function Sk(e, t, i, a, l) {
      var c = t.stateNode;
      ME(e, t);
      var v = t.memoizedProps, m = t.type === t.elementType ? v : fo(t.type, v);
      c.props = m;
      var b = t.pendingProps, w = c.context, T = i.contextType, z = ga;
      if (typeof T == "object" && T !== null)
        z = pr(T);
      else {
        var N = zf(t, i, !0);
        z = Uf(t, N);
      }
      var B = i.getDerivedStateFromProps, G = typeof B == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !G && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (v !== b || w !== z) && gC(t, c, a, z), AE();
      var Z = t.memoizedState, be = c.state = Z;
      if (wm(t, a, c, l), be = t.memoizedState, v === b && Z === be && !im() && !Tm() && !Ae)
        return typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= yt), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Wi), !1;
      typeof B == "function" && (W0(t, i, B, a), be = t.memoizedState);
      var Ke = Tm() || hC(t, i, m, a, Z, be, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ae;
      return Ke ? (!G && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(a, be, z), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(a, be, z)), typeof c.componentDidUpdate == "function" && (t.flags |= yt), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= Wi)) : (typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= yt), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Wi), t.memoizedProps = a, t.memoizedState = be), c.props = a, c.state = be, c.context = z, Ke;
    }
    function ac(e, t) {
      return {
        value: e,
        source: t,
        stack: Xl(t),
        digest: null
      };
    }
    function G0(e, t, i) {
      return {
        value: e,
        source: null,
        stack: i ?? null,
        digest: t ?? null
      };
    }
    function Ek(e, t) {
      return !0;
    }
    function q0(e, t) {
      try {
        var i = Ek(e, t);
        if (i === !1)
          return;
        var a = t.value, l = t.source, c = t.stack, v = c !== null ? c : "";
        if (a != null && a._suppressLogging) {
          if (e.tag === A)
            return;
          console.error(a);
        }
        var m = l ? st(l) : null, b = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", w;
        if (e.tag === M)
          w = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = st(e) || "Anonymous";
          w = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var z = b + `
` + v + `

` + ("" + w);
        console.error(z);
      } catch (N) {
        setTimeout(function() {
          throw N;
        });
      }
    }
    var Ck = typeof WeakMap == "function" ? WeakMap : Map;
    function bC(e, t, i) {
      var a = Nl(fn, i);
      a.tag = e0, a.payload = {
        element: null
      };
      var l = t.value;
      return a.callback = function() {
        vD(l), q0(e, t);
      }, a;
    }
    function K0(e, t, i) {
      var a = Nl(fn, i);
      a.tag = e0;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var c = t.value;
        a.payload = function() {
          return l(c);
        }, a.callback = function() {
          Ow(e), q0(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (a.callback = function() {
        Ow(e), q0(e, t), typeof l != "function" && dD(this);
        var b = t.value, w = t.stack;
        this.componentDidCatch(b, {
          componentStack: w !== null ? w : ""
        }), typeof l != "function" && (yi(e.lanes, Ie) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", st(e) || "Unknown"));
      }), a;
    }
    function SC(e, t, i) {
      var a = e.pingCache, l;
      if (a === null ? (a = e.pingCache = new Ck(), l = /* @__PURE__ */ new Set(), a.set(t, l)) : (l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l))), !l.has(i)) {
        l.add(i);
        var c = hD.bind(null, e, t, i);
        Oi && fv(e, i), t.then(c, c);
      }
    }
    function wk(e, t, i, a) {
      var l = e.updateQueue;
      if (l === null) {
        var c = /* @__PURE__ */ new Set();
        c.add(i), e.updateQueue = c;
      } else
        l.add(i);
    }
    function Tk(e, t) {
      var i = e.tag;
      if ((e.mode & je) === Ue && (i === k || i === Fe || i === We)) {
        var a = e.alternate;
        a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function EC(e) {
      var t = e;
      do {
        if (t.tag === Oe && ik(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function CC(e, t, i, a, l) {
      if ((e.mode & je) === Ue) {
        if (e === t)
          e.flags |= sr;
        else {
          if (e.flags |= ot, i.flags |= Rs, i.flags &= ~(Oc | ki), i.tag === A) {
            var c = i.alternate;
            if (c === null)
              i.tag = Me;
            else {
              var v = Nl(fn, Ie);
              v.tag = bm, Qu(i, v, Ie);
            }
          }
          i.lanes = mt(i.lanes, Ie);
        }
        return e;
      }
      return e.flags |= sr, e.lanes = l, e;
    }
    function Rk(e, t, i, a, l) {
      if (i.flags |= ki, Oi && fv(e, l), a !== null && typeof a == "object" && typeof a.then == "function") {
        var c = a;
        Tk(i), Gr() && i.mode & je && pE();
        var v = EC(t);
        if (v !== null) {
          v.flags &= ~Mn, CC(v, t, i, e, l), v.mode & je && SC(e, c, l), wk(v, e, c);
          return;
        } else {
          if (!Xd(l)) {
            SC(e, c, l), Db();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          a = m;
        }
      } else if (Gr() && i.mode & je) {
        pE();
        var b = EC(t);
        if (b !== null) {
          (b.flags & sr) === Ge && (b.flags |= Mn), CC(b, t, i, e, l), Pg(ac(a, i));
          return;
        }
      }
      a = ac(a, i), iD(a);
      var w = t;
      do {
        switch (w.tag) {
          case M: {
            var T = a;
            w.flags |= sr;
            var z = Tu(l);
            w.lanes = mt(w.lanes, z);
            var N = bC(w, T, z);
            r0(w, N);
            return;
          }
          case A:
            var B = a, G = w.type, Z = w.stateNode;
            if ((w.flags & ot) === Ge && (typeof G.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && !Ew(Z))) {
              w.flags |= sr;
              var be = Tu(l);
              w.lanes = mt(w.lanes, be);
              var Ke = K0(w, B, be);
              r0(w, Ke);
              return;
            }
            break;
        }
        w = w.return;
      } while (w !== null);
    }
    function xk() {
      return null;
    }
    var qp = p.ReactCurrentOwner, po = !1, X0, Kp, Z0, J0, eb, oc, tb, Gm, Xp;
    X0 = {}, Kp = {}, Z0 = {}, J0 = {}, eb = {}, oc = !1, tb = {}, Gm = {}, Xp = {};
    function Ai(e, t, i, a) {
      e === null ? t.child = RE(t, null, i, a) : t.child = Vf(t, e.child, i, a);
    }
    function kk(e, t, i, a) {
      t.child = Vf(t, e.child, null, a), t.child = Vf(t, null, i, a);
    }
    function wC(e, t, i, a, l) {
      if (t.type !== t.elementType) {
        var c = i.propTypes;
        c && oo(
          c,
          a,
          // Resolved props
          "prop",
          Lt(i)
        );
      }
      var v = i.render, m = t.ref, b, w;
      If(t, l), vu(t);
      {
        if (qp.current = t, li(!0), b = qf(e, t, v, a, m, l), w = Kf(), t.mode & xt) {
          Wn(!0);
          try {
            b = qf(e, t, v, a, m, l), w = Kf();
          } finally {
            Wn(!1);
          }
        }
        li(!1);
      }
      return vi(), e !== null && !po ? (FE(e, t, l), $l(e, t, l)) : (Gr() && w && zg(t), t.flags |= No, Ai(e, t, b, l), t.child);
    }
    function TC(e, t, i, a, l) {
      if (e === null) {
        var c = i.type;
        if (MD(c) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var v = c;
          return v = id(c), t.tag = We, t.type = v, ib(t, c), RC(e, t, v, a, l);
        }
        {
          var m = c.propTypes;
          if (m && oo(
            m,
            a,
            // Resolved props
            "prop",
            Lt(c)
          ), i.defaultProps !== void 0) {
            var b = Lt(c) || "Unknown";
            Xp[b] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", b), Xp[b] = !0);
          }
        }
        var w = jb(i.type, null, a, t, t.mode, l);
        return w.ref = t.ref, w.return = t, t.child = w, w;
      }
      {
        var T = i.type, z = T.propTypes;
        z && oo(
          z,
          a,
          // Resolved props
          "prop",
          Lt(T)
        );
      }
      var N = e.child, B = cb(e, l);
      if (!B) {
        var G = N.memoizedProps, Z = i.compare;
        if (Z = Z !== null ? Z : tt, Z(G, a) && e.ref === t.ref)
          return $l(e, t, l);
      }
      t.flags |= No;
      var be = fc(N, a);
      return be.ref = t.ref, be.return = t, t.child = be, be;
    }
    function RC(e, t, i, a, l) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === Ye) {
          var v = c, m = v._payload, b = v._init;
          try {
            c = b(m);
          } catch {
            c = null;
          }
          var w = c && c.propTypes;
          w && oo(
            w,
            a,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Lt(c)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (tt(T, a) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (po = !1, t.pendingProps = a = T, cb(e, l))
            (e.flags & Rs) !== Ge && (po = !0);
          else return t.lanes = e.lanes, $l(e, t, l);
      }
      return nb(e, t, i, a, l);
    }
    function xC(e, t, i) {
      var a = t.pendingProps, l = a.children, c = e !== null ? e.memoizedState : null;
      if (a.mode === "hidden" || ve)
        if ((t.mode & je) === Ue) {
          var v = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, ly(t, i);
        } else if (yi(i, Ur)) {
          var z = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var N = c !== null ? c.baseLanes : i;
          ly(t, N);
        } else {
          var m = null, b;
          if (c !== null) {
            var w = c.baseLanes;
            b = mt(w, i);
          } else
            b = i;
          t.lanes = t.childLanes = Ur;
          var T = {
            baseLanes: b,
            cachePool: m,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, ly(t, b), null;
        }
      else {
        var B;
        c !== null ? (B = mt(c.baseLanes, i), t.memoizedState = null) : B = i, ly(t, B);
      }
      return Ai(e, t, l, i), t.child;
    }
    function _k(e, t, i) {
      var a = t.pendingProps;
      return Ai(e, t, a, i), t.child;
    }
    function Dk(e, t, i) {
      var a = t.pendingProps.children;
      return Ai(e, t, a, i), t.child;
    }
    function Ok(e, t, i) {
      {
        t.flags |= yt;
        {
          var a = t.stateNode;
          a.effectDuration = 0, a.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, c = l.children;
      return Ai(e, t, c, i), t.child;
    }
    function kC(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= si, t.flags |= Hd);
    }
    function nb(e, t, i, a, l) {
      if (t.type !== t.elementType) {
        var c = i.propTypes;
        c && oo(
          c,
          a,
          // Resolved props
          "prop",
          Lt(i)
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
        if (qp.current = t, li(!0), b = qf(e, t, i, a, v, l), w = Kf(), t.mode & xt) {
          Wn(!0);
          try {
            b = qf(e, t, i, a, v, l), w = Kf();
          } finally {
            Wn(!1);
          }
        }
        li(!1);
      }
      return vi(), e !== null && !po ? (FE(e, t, l), $l(e, t, l)) : (Gr() && w && zg(t), t.flags |= No, Ai(e, t, b, l), t.child);
    }
    function _C(e, t, i, a, l) {
      {
        switch (QD(t)) {
          case !1: {
            var c = t.stateNode, v = t.type, m = new v(t.memoizedProps, c.context), b = m.state;
            c.updater.enqueueSetState(c, b, null);
            break;
          }
          case !0: {
            t.flags |= ot, t.flags |= sr;
            var w = new Error("Simulated error coming from DevTools"), T = Tu(l);
            t.lanes = mt(t.lanes, T);
            var z = K0(t, ac(w, t), T);
            r0(t, z);
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
            Lt(i)
          );
        }
      }
      var B;
      Qo(i) ? (B = !0, om(t)) : B = !1, If(t, l);
      var G = t.stateNode, Z;
      G === null ? (Km(e, t), yC(t, i, a), Q0(t, i, a, l), Z = !0) : e === null ? Z = bk(t, i, a, l) : Z = Sk(e, t, i, a, l);
      var be = rb(e, t, i, Z, B, l);
      {
        var Ke = t.stateNode;
        Z && Ke.props !== a && (oc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", st(t) || "a component"), oc = !0);
      }
      return be;
    }
    function rb(e, t, i, a, l, c) {
      kC(e, t);
      var v = (t.flags & ot) !== Ge;
      if (!a && !v)
        return l && sE(t, i, !1), $l(e, t, c);
      var m = t.stateNode;
      qp.current = t;
      var b;
      if (v && typeof i.getDerivedStateFromError != "function")
        b = null, dC();
      else {
        vu(t);
        {
          if (li(!0), b = m.render(), t.mode & xt) {
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
      return t.flags |= No, e !== null && v ? kk(e, t, b, c) : Ai(e, t, b, c), t.memoizedState = m.state, l && sE(t, i, !0), t.child;
    }
    function DC(e) {
      var t = e.stateNode;
      t.pendingContext ? lE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && lE(e, t.context, !1), i0(e, t.containerInfo);
    }
    function Lk(e, t, i) {
      if (DC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var a = t.pendingProps, l = t.memoizedState, c = l.element;
      ME(e, t), wm(t, a, null, i);
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
          var T = ac(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return OC(e, t, m, i, T);
        } else if (m !== c) {
          var z = ac(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return OC(e, t, m, i, z);
        } else {
          Nx(t);
          var N = RE(t, null, m, i);
          t.child = N;
          for (var B = N; B; )
            B.flags = B.flags & ~hn | Yi, B = B.sibling;
        }
      } else {
        if (jf(), m === c)
          return $l(e, t, i);
        Ai(e, t, m, i);
      }
      return t.child;
    }
    function OC(e, t, i, a, l) {
      return jf(), Pg(l), t.flags |= Mn, Ai(e, t, i, a), t.child;
    }
    function Mk(e, t, i) {
      zE(t), e === null && Vg(t);
      var a = t.type, l = t.pendingProps, c = e !== null ? e.memoizedProps : null, v = l.children, m = Cg(a, l);
      return m ? v = null : c !== null && Cg(a, c) && (t.flags |= Zt), kC(e, t), Ai(e, t, v, i), t.child;
    }
    function Ak(e, t) {
      return e === null && Vg(t), null;
    }
    function Nk(e, t, i, a) {
      Km(e, t);
      var l = t.pendingProps, c = i, v = c._payload, m = c._init, b = m(v);
      t.type = b;
      var w = t.tag = AD(b), T = fo(b, l), z;
      switch (w) {
        case k:
          return ib(t, b), t.type = b = id(b), z = nb(null, t, b, T, a), z;
        case A:
          return t.type = b = Nb(b), z = _C(null, t, b, T, a), z;
        case Fe:
          return t.type = b = $b(b), z = wC(null, t, b, T, a), z;
        case ut: {
          if (t.type !== t.elementType) {
            var N = b.propTypes;
            N && oo(
              N,
              T,
              // Resolved for outer only
              "prop",
              Lt(b)
            );
          }
          return z = TC(
            null,
            t,
            b,
            fo(b.type, T),
            // The inner type can have defaults too
            a
          ), z;
        }
      }
      var B = "";
      throw b !== null && typeof b == "object" && b.$$typeof === Ye && (B = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + B));
    }
    function $k(e, t, i, a, l) {
      Km(e, t), t.tag = A;
      var c;
      return Qo(i) ? (c = !0, om(t)) : c = !1, If(t, l), yC(t, i, a), Q0(t, i, a, l), rb(null, t, i, !0, c, l);
    }
    function zk(e, t, i, a) {
      Km(e, t);
      var l = t.pendingProps, c;
      {
        var v = zf(t, i, !1);
        c = Uf(t, v);
      }
      If(t, a);
      var m, b;
      vu(t);
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var w = Lt(i) || "Unknown";
          X0[w] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), X0[w] = !0);
        }
        t.mode & xt && uo.recordLegacyContextWarning(t, null), li(!0), qp.current = t, m = qf(null, t, i, l, c, a), b = Kf(), li(!1);
      }
      if (vi(), t.flags |= No, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var T = Lt(i) || "Unknown";
        Kp[T] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Kp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0
      ) {
        {
          var z = Lt(i) || "Unknown";
          Kp[z] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), Kp[z] = !0);
        }
        t.tag = A, t.memoizedState = null, t.updateQueue = null;
        var N = !1;
        return Qo(i) ? (N = !0, om(t)) : N = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, n0(t), mC(t, m), Q0(t, i, l, a), rb(null, t, i, !0, N, a);
      } else {
        if (t.tag = k, t.mode & xt) {
          Wn(!0);
          try {
            m = qf(null, t, i, l, c, a), b = Kf();
          } finally {
            Wn(!1);
          }
        }
        return Gr() && b && zg(t), Ai(null, t, m, a), ib(t, i), t.child;
      }
    }
    function ib(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var i = "", a = Wr();
          a && (i += `

Check the render method of \`` + a + "`.");
          var l = a || "", c = e._debugSource;
          c && (l = c.fileName + ":" + c.lineNumber), eb[l] || (eb[l] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (t.defaultProps !== void 0) {
          var v = Lt(t) || "Unknown";
          Xp[v] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", v), Xp[v] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var m = Lt(t) || "Unknown";
          J0[m] || (g("%s: Function components do not support getDerivedStateFromProps.", m), J0[m] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var b = Lt(t) || "Unknown";
          Z0[b] || (g("%s: Function components do not support contextType.", b), Z0[b] = !0);
        }
      }
    }
    var ab = {
      dehydrated: null,
      treeContext: null,
      retryLane: Yn
    };
    function ob(e) {
      return {
        baseLanes: e,
        cachePool: xk(),
        transitions: null
      };
    }
    function Uk(e, t) {
      var i = null;
      return {
        baseLanes: mt(e.baseLanes, t),
        cachePool: i,
        transitions: e.transitions
      };
    }
    function Hk(e, t, i, a) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return l0(e, jp);
    }
    function Fk(e, t) {
      return $s(e.childLanes, t);
    }
    function LC(e, t, i) {
      var a = t.pendingProps;
      GD(t) && (t.flags |= ot);
      var l = so.current, c = !1, v = (t.flags & ot) !== Ge;
      if (v || Hk(l, e) ? (c = !0, t.flags &= ~ot) : (e === null || e.memoizedState !== null) && (l = rk(l, HE)), l = Wf(l), qu(t, l), e === null) {
        Vg(t);
        var m = t.memoizedState;
        if (m !== null) {
          var b = m.dehydrated;
          if (b !== null)
            return Bk(t, b);
        }
        var w = a.children, T = a.fallback;
        if (c) {
          var z = jk(t, w, T, i), N = t.child;
          return N.memoizedState = ob(i), t.memoizedState = ab, z;
        } else
          return lb(t, w);
      } else {
        var B = e.memoizedState;
        if (B !== null) {
          var G = B.dehydrated;
          if (G !== null)
            return Wk(e, t, v, a, G, B, i);
        }
        if (c) {
          var Z = a.fallback, be = a.children, Ke = Pk(e, t, be, Z, i), Ve = t.child, zt = e.child.memoizedState;
          return Ve.memoizedState = zt === null ? ob(i) : Uk(zt, i), Ve.childLanes = Fk(e, i), t.memoizedState = ab, Ke;
        } else {
          var Ot = a.children, j = Vk(e, t, Ot, i);
          return t.memoizedState = null, j;
        }
      }
    }
    function lb(e, t, i) {
      var a = e.mode, l = {
        mode: "visible",
        children: t
      }, c = ub(l, a);
      return c.return = e, e.child = c, c;
    }
    function jk(e, t, i, a) {
      var l = e.mode, c = e.child, v = {
        mode: "hidden",
        children: t
      }, m, b;
      return (l & je) === Ue && c !== null ? (m = c, m.childLanes = te, m.pendingProps = v, e.mode & lt && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), b = rs(i, l, a, null)) : (m = ub(v, l), b = rs(i, l, a, null)), m.return = e, b.return = e, m.sibling = b, e.child = m, b;
    }
    function ub(e, t, i) {
      return Mw(e, t, te, null);
    }
    function MC(e, t) {
      return fc(e, t);
    }
    function Vk(e, t, i, a) {
      var l = e.child, c = l.sibling, v = MC(l, {
        mode: "visible",
        children: i
      });
      if ((t.mode & je) === Ue && (v.lanes = a), v.return = t, v.sibling = null, c !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [c], t.flags |= Kt) : m.push(c);
      }
      return t.child = v, v;
    }
    function Pk(e, t, i, a, l) {
      var c = t.mode, v = e.child, m = v.sibling, b = {
        mode: "hidden",
        children: i
      }, w;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (c & je) === Ue && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var T = t.child;
        w = T, w.childLanes = te, w.pendingProps = b, t.mode & lt && (w.actualDuration = 0, w.actualStartTime = -1, w.selfBaseDuration = v.selfBaseDuration, w.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        w = MC(v, b), w.subtreeFlags = v.subtreeFlags & yr;
      var z;
      return m !== null ? z = fc(m, a) : (z = rs(a, c, l, null), z.flags |= hn), z.return = t, w.return = t, w.sibling = z, t.child = w, z;
    }
    function qm(e, t, i, a) {
      a !== null && Pg(a), Vf(t, e.child, null, i);
      var l = t.pendingProps, c = l.children, v = lb(t, c);
      return v.flags |= hn, t.memoizedState = null, v;
    }
    function Ik(e, t, i, a, l) {
      var c = t.mode, v = {
        mode: "visible",
        children: i
      }, m = ub(v, c), b = rs(a, c, l, null);
      return b.flags |= hn, m.return = t, b.return = t, m.sibling = b, t.child = m, (t.mode & je) !== Ue && Vf(t, e.child, null, l), b;
    }
    function Bk(e, t, i) {
      return (e.mode & je) === Ue ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ie) : xg(t) ? e.lanes = to : e.lanes = Ur, null;
    }
    function Wk(e, t, i, a, l, c, v) {
      if (i)
        if (t.flags & Mn) {
          t.flags &= ~Mn;
          var j = G0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return qm(e, t, v, j);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ot, null;
          var J = a.children, V = a.fallback, le = Ik(e, t, J, V, v), Te = t.child;
          return Te.memoizedState = ob(v), t.memoizedState = ab, le;
        }
      else {
        if (Mx(), (t.mode & je) === Ue)
          return qm(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (xg(l)) {
          var m, b, w;
          {
            var T = qR(l);
            m = T.digest, b = T.message, w = T.stack;
          }
          var z;
          b ? z = new Error(b) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = G0(z, m, w);
          return qm(e, t, v, N);
        }
        var B = yi(v, e.childLanes);
        if (po || B) {
          var G = oy();
          if (G !== null) {
            var Z = Eh(G, v);
            if (Z !== Yn && Z !== c.retryLane) {
              c.retryLane = Z;
              var be = fn;
              ia(e, Z), kr(G, e, Z, be);
            }
          }
          Db();
          var Ke = G0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return qm(e, t, v, Ke);
        } else if (tE(l)) {
          t.flags |= ot, t.child = e.child;
          var Ve = mD.bind(null, e);
          return KR(l, Ve), null;
        } else {
          $x(t, l, c.treeContext);
          var zt = a.children, Ot = lb(t, zt);
          return Ot.flags |= Yi, Ot;
        }
      }
    }
    function AC(e, t, i) {
      e.lanes = mt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = mt(a.lanes, t)), Zg(e.return, t, i);
    }
    function Yk(e, t, i) {
      for (var a = t; a !== null; ) {
        if (a.tag === Oe) {
          var l = a.memoizedState;
          l !== null && AC(a, i, e);
        } else if (a.tag === Nt)
          AC(a, i, e);
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
    function Qk(e) {
      for (var t = e, i = null; t !== null; ) {
        var a = t.alternate;
        a !== null && km(a) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    function Gk(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !tb[e])
        if (tb[e] = !0, typeof e == "string")
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
    function qk(e, t) {
      e !== void 0 && !Gm[e] && (e !== "collapsed" && e !== "hidden" ? (Gm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Gm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function NC(e, t) {
      {
        var i = Mt(e), a = !i && typeof Rn(e) == "function";
        if (i || a) {
          var l = i ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function Kk(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Mt(e)) {
          for (var i = 0; i < e.length; i++)
            if (!NC(e[i], i))
              return;
        } else {
          var a = Rn(e);
          if (typeof a == "function") {
            var l = a.call(e);
            if (l)
              for (var c = l.next(), v = 0; !c.done; c = l.next()) {
                if (!NC(c.value, v))
                  return;
                v++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function sb(e, t, i, a, l) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: i,
        tailMode: l
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = i, c.tailMode = l);
    }
    function $C(e, t, i) {
      var a = t.pendingProps, l = a.revealOrder, c = a.tail, v = a.children;
      Gk(l), qk(c, l), Kk(v, l), Ai(e, t, v, i);
      var m = so.current, b = l0(m, jp);
      if (b)
        m = u0(m, jp), t.flags |= ot;
      else {
        var w = e !== null && (e.flags & ot) !== Ge;
        w && Yk(t, t.child, i), m = Wf(m);
      }
      if (qu(t, m), (t.mode & je) === Ue)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var T = Qk(t.child), z;
            T === null ? (z = t.child, t.child = null) : (z = T.sibling, T.sibling = null), sb(
              t,
              !1,
              // isBackwards
              z,
              T,
              c
            );
            break;
          }
          case "backwards": {
            var N = null, B = t.child;
            for (t.child = null; B !== null; ) {
              var G = B.alternate;
              if (G !== null && km(G) === null) {
                t.child = B;
                break;
              }
              var Z = B.sibling;
              B.sibling = N, N = B, B = Z;
            }
            sb(
              t,
              !0,
              // isBackwards
              N,
              null,
              // last
              c
            );
            break;
          }
          case "together": {
            sb(
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
    function Xk(e, t, i) {
      i0(t, t.stateNode.containerInfo);
      var a = t.pendingProps;
      return e === null ? t.child = Vf(t, null, a, i) : Ai(e, t, a, i), t.child;
    }
    var zC = !1;
    function Zk(e, t, i) {
      var a = t.type, l = a._context, c = t.pendingProps, v = t.memoizedProps, m = c.value;
      {
        "value" in c || zC || (zC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var b = t.type.propTypes;
        b && oo(b, c, "prop", "Context.Provider");
      }
      if (_E(t, l, m), v !== null) {
        var w = v.value;
        if (_e(w, m)) {
          if (v.children === c.children && !im())
            return $l(e, t, i);
        } else
          Gx(t, l, i);
      }
      var T = c.children;
      return Ai(e, t, T, i), t.child;
    }
    var UC = !1;
    function Jk(e, t, i) {
      var a = t.type;
      a._context === void 0 ? a !== a.Consumer && (UC || (UC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
      var l = t.pendingProps, c = l.children;
      typeof c != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), If(t, i);
      var v = pr(a);
      vu(t);
      var m;
      return qp.current = t, li(!0), m = c(v), li(!1), vi(), t.flags |= No, Ai(e, t, m, i), t.child;
    }
    function Zp() {
      po = !0;
    }
    function Km(e, t) {
      (t.mode & je) === Ue && e !== null && (e.alternate = null, t.alternate = null, t.flags |= hn);
    }
    function $l(e, t, i) {
      return e !== null && (t.dependencies = e.dependencies), dC(), cv(t.lanes), yi(i, t.childLanes) ? (Yx(e, t), t.child) : null;
    }
    function e_(e, t, i) {
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
        var c = a.deletions;
        return c === null ? (a.deletions = [e], a.flags |= Kt) : c.push(e), i.flags |= hn, i;
      }
    }
    function cb(e, t) {
      var i = e.lanes;
      return !!yi(i, t);
    }
    function t_(e, t, i) {
      switch (t.tag) {
        case M:
          DC(t), t.stateNode, jf();
          break;
        case W:
          zE(t);
          break;
        case A: {
          var a = t.type;
          Qo(a) && om(t);
          break;
        }
        case K:
          i0(t, t.stateNode.containerInfo);
          break;
        case ge: {
          var l = t.memoizedProps.value, c = t.type._context;
          _E(t, c, l);
          break;
        }
        case pt:
          {
            var v = yi(i, t.childLanes);
            v && (t.flags |= yt);
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
              return qu(t, Wf(so.current)), t.flags |= ot, null;
            var w = t.child, T = w.childLanes;
            if (yi(i, T))
              return LC(e, t, i);
            qu(t, Wf(so.current));
            var z = $l(e, t, i);
            return z !== null ? z.sibling : null;
          } else
            qu(t, Wf(so.current));
          break;
        }
        case Nt: {
          var N = (e.flags & ot) !== Ge, B = yi(i, t.childLanes);
          if (N) {
            if (B)
              return $C(e, t, i);
            t.flags |= ot;
          }
          var G = t.memoizedState;
          if (G !== null && (G.rendering = null, G.tail = null, G.lastEffect = null), qu(t, so.current), B)
            break;
          return null;
        }
        case Pe:
        case rt:
          return t.lanes = te, xC(e, t, i);
      }
      return $l(e, t, i);
    }
    function HC(e, t, i) {
      if (t._debugNeedsRemount && e !== null)
        return e_(e, t, jb(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var a = e.memoizedProps, l = t.pendingProps;
        if (a !== l || im() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          po = !0;
        else {
          var c = cb(e, i);
          if (!c && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ot) === Ge)
            return po = !1, t_(e, t, i);
          (e.flags & Rs) !== Ge ? po = !0 : po = !1;
        }
      } else if (po = !1, Gr() && xx(t)) {
        var v = t.index, m = kx();
        dE(t, m, v);
      }
      switch (t.lanes = te, t.tag) {
        case H:
          return zk(e, t, t.type, i);
        case Gt: {
          var b = t.elementType;
          return Nk(e, t, b, i);
        }
        case k: {
          var w = t.type, T = t.pendingProps, z = t.elementType === w ? T : fo(w, T);
          return nb(e, t, w, z, i);
        }
        case A: {
          var N = t.type, B = t.pendingProps, G = t.elementType === N ? B : fo(N, B);
          return _C(e, t, N, G, i);
        }
        case M:
          return Lk(e, t, i);
        case W:
          return Mk(e, t, i);
        case ue:
          return Ak(e, t);
        case Oe:
          return LC(e, t, i);
        case K:
          return Xk(e, t, i);
        case Fe: {
          var Z = t.type, be = t.pendingProps, Ke = t.elementType === Z ? be : fo(Z, be);
          return wC(e, t, Z, Ke, i);
        }
        case Be:
          return _k(e, t, i);
        case we:
          return Dk(e, t, i);
        case pt:
          return Ok(e, t, i);
        case ge:
          return Zk(e, t, i);
        case gt:
          return Jk(e, t, i);
        case ut: {
          var Ve = t.type, zt = t.pendingProps, Ot = fo(Ve, zt);
          if (t.type !== t.elementType) {
            var j = Ve.propTypes;
            j && oo(
              j,
              Ot,
              // Resolved for outer only
              "prop",
              Lt(Ve)
            );
          }
          return Ot = fo(Ve.type, Ot), TC(e, t, Ve, Ot, i);
        }
        case We:
          return RC(e, t, t.type, t.pendingProps, i);
        case Me: {
          var J = t.type, V = t.pendingProps, le = t.elementType === J ? V : fo(J, V);
          return $k(e, t, J, le, i);
        }
        case Nt:
          return $C(e, t, i);
        case sn:
          break;
        case Pe:
          return xC(e, t, i);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Xf(e) {
      e.flags |= yt;
    }
    function FC(e) {
      e.flags |= si, e.flags |= Hd;
    }
    var jC, fb, VC, PC;
    jC = function(e, t, i, a) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === W || l.tag === ue)
          wR(e, l.stateNode);
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
    }, fb = function(e, t) {
    }, VC = function(e, t, i, a, l) {
      var c = e.memoizedProps;
      if (c !== a) {
        var v = t.stateNode, m = a0(), b = RR(v, i, c, a, l, m);
        t.updateQueue = b, b && Xf(t);
      }
    }, PC = function(e, t, i, a) {
      i !== a && Xf(t);
    };
    function Jp(e, t) {
      if (!Gr())
        switch (e.tailMode) {
          case "hidden": {
            for (var i = e.tail, a = null; i !== null; )
              i.alternate !== null && (a = i), i = i.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, c = null; l !== null; )
              l.alternate !== null && (c = l), l = l.sibling;
            c === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : c.sibling = null;
            break;
          }
        }
    }
    function Kr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, i = te, a = Ge;
      if (t) {
        if ((e.mode & lt) !== Ue) {
          for (var b = e.selfBaseDuration, w = e.child; w !== null; )
            i = mt(i, mt(w.lanes, w.childLanes)), a |= w.subtreeFlags & yr, a |= w.flags & yr, b += w.treeBaseDuration, w = w.sibling;
          e.treeBaseDuration = b;
        } else
          for (var T = e.child; T !== null; )
            i = mt(i, mt(T.lanes, T.childLanes)), a |= T.subtreeFlags & yr, a |= T.flags & yr, T.return = e, T = T.sibling;
        e.subtreeFlags |= a;
      } else {
        if ((e.mode & lt) !== Ue) {
          for (var l = e.actualDuration, c = e.selfBaseDuration, v = e.child; v !== null; )
            i = mt(i, mt(v.lanes, v.childLanes)), a |= v.subtreeFlags, a |= v.flags, l += v.actualDuration, c += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = l, e.treeBaseDuration = c;
        } else
          for (var m = e.child; m !== null; )
            i = mt(i, mt(m.lanes, m.childLanes)), a |= m.subtreeFlags, a |= m.flags, m.return = e, m = m.sibling;
        e.subtreeFlags |= a;
      }
      return e.childLanes = i, t;
    }
    function n_(e, t, i) {
      if (jx() && (t.mode & je) !== Ue && (t.flags & ot) === Ge)
        return bE(t), jf(), t.flags |= Mn | ki | sr, !1;
      var a = fm(t);
      if (i !== null && i.dehydrated !== null)
        if (e === null) {
          if (!a)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Hx(t), Kr(t), (t.mode & lt) !== Ue) {
            var l = i !== null;
            if (l) {
              var c = t.child;
              c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (jf(), (t.flags & ot) === Ge && (t.memoizedState = null), t.flags |= yt, Kr(t), (t.mode & lt) !== Ue) {
            var v = i !== null;
            if (v) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return SE(), !0;
    }
    function IC(e, t, i) {
      var a = t.pendingProps;
      switch (Ug(t), t.tag) {
        case H:
        case Gt:
        case We:
        case k:
        case Fe:
        case Be:
        case we:
        case pt:
        case gt:
        case ut:
          return Kr(t), null;
        case A: {
          var l = t.type;
          return Qo(l) && am(t), Kr(t), null;
        }
        case M: {
          var c = t.stateNode;
          if (Bf(t), Ag(t), c0(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var v = fm(t);
            if (v)
              Xf(t);
            else if (e !== null) {
              var m = e.memoizedState;
              // Check if this is a client root
              (!m.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Mn) !== Ge) && (t.flags |= Wi, SE());
            }
          }
          return fb(e, t), Kr(t), null;
        }
        case W: {
          o0(t);
          var b = $E(), w = t.type;
          if (e !== null && t.stateNode != null)
            VC(e, t, w, a, b), e.ref !== t.ref && FC(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Kr(t), null;
            }
            var T = a0(), z = fm(t);
            if (z)
              zx(t, b, T) && Xf(t);
            else {
              var N = CR(w, a, b, T, t);
              jC(N, t, !1, !1), t.stateNode = N, TR(N, w, a, b) && Xf(t);
            }
            t.ref !== null && FC(t);
          }
          return Kr(t), null;
        }
        case ue: {
          var B = a;
          if (e && t.stateNode != null) {
            var G = e.memoizedProps;
            PC(e, t, G, B);
          } else {
            if (typeof B != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Z = $E(), be = a0(), Ke = fm(t);
            Ke ? Ux(t) && Xf(t) : t.stateNode = xR(B, Z, be, t);
          }
          return Kr(t), null;
        }
        case Oe: {
          Yf(t);
          var Ve = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var zt = n_(e, t, Ve);
            if (!zt)
              return t.flags & sr ? t : null;
          }
          if ((t.flags & ot) !== Ge)
            return t.lanes = i, (t.mode & lt) !== Ue && $0(t), t;
          var Ot = Ve !== null, j = e !== null && e.memoizedState !== null;
          if (Ot !== j && Ot) {
            var J = t.child;
            if (J.flags |= $o, (t.mode & je) !== Ue) {
              var V = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !U);
              V || l0(so.current, HE) ? rD() : Db();
            }
          }
          var le = t.updateQueue;
          if (le !== null && (t.flags |= yt), Kr(t), (t.mode & lt) !== Ue && Ot) {
            var Te = t.child;
            Te !== null && (t.treeBaseDuration -= Te.treeBaseDuration);
          }
          return null;
        }
        case K:
          return Bf(t), fb(e, t), e === null && bx(t.stateNode.containerInfo), Kr(t), null;
        case ge:
          var Se = t.type._context;
          return Xg(Se, t), Kr(t), null;
        case Me: {
          var nt = t.type;
          return Qo(nt) && am(t), Kr(t), null;
        }
        case Nt: {
          Yf(t);
          var dt = t.memoizedState;
          if (dt === null)
            return Kr(t), null;
          var an = (t.flags & ot) !== Ge, Yt = dt.rendering;
          if (Yt === null)
            if (an)
              Jp(dt, !1);
            else {
              var tr = aD() && (e === null || (e.flags & ot) === Ge);
              if (!tr)
                for (var Qt = t.child; Qt !== null; ) {
                  var Qn = km(Qt);
                  if (Qn !== null) {
                    an = !0, t.flags |= ot, Jp(dt, !1);
                    var Ci = Qn.updateQueue;
                    return Ci !== null && (t.updateQueue = Ci, t.flags |= yt), t.subtreeFlags = Ge, Qx(t, i), qu(t, u0(so.current, jp)), t.child;
                  }
                  Qt = Qt.sibling;
                }
              dt.tail !== null && kn() > cw() && (t.flags |= ot, an = !0, Jp(dt, !1), t.lanes = ch);
            }
          else {
            if (!an) {
              var ti = km(Yt);
              if (ti !== null) {
                t.flags |= ot, an = !0;
                var Sa = ti.updateQueue;
                if (Sa !== null && (t.updateQueue = Sa, t.flags |= yt), Jp(dt, !0), dt.tail === null && dt.tailMode === "hidden" && !Yt.alternate && !Gr())
                  return Kr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              kn() * 2 - dt.renderingStartTime > cw() && i !== Ur && (t.flags |= ot, an = !0, Jp(dt, !1), t.lanes = ch);
            }
            if (dt.isBackwards)
              Yt.sibling = t.child, t.child = Yt;
            else {
              var zi = dt.last;
              zi !== null ? zi.sibling = Yt : t.child = Yt, dt.last = Yt;
            }
          }
          if (dt.tail !== null) {
            var Ui = dt.tail;
            dt.rendering = Ui, dt.tail = Ui.sibling, dt.renderingStartTime = kn(), Ui.sibling = null;
            var wi = so.current;
            return an ? wi = u0(wi, jp) : wi = Wf(wi), qu(t, wi), Ui;
          }
          return Kr(t), null;
        }
        case sn:
          break;
        case Pe:
        case rt: {
          _b(t);
          var jl = t.memoizedState, ad = jl !== null;
          if (e !== null) {
            var hv = e.memoizedState, tl = hv !== null;
            tl !== ad && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ve && (t.flags |= $o);
          }
          return !ad || (t.mode & je) === Ue ? Kr(t) : yi(el, Ur) && (Kr(t), t.subtreeFlags & (hn | yt) && (t.flags |= $o)), null;
        }
        case Tt:
          return null;
        case it:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function r_(e, t, i) {
      switch (Ug(t), t.tag) {
        case A: {
          var a = t.type;
          Qo(a) && am(t);
          var l = t.flags;
          return l & sr ? (t.flags = l & ~sr | ot, (t.mode & lt) !== Ue && $0(t), t) : null;
        }
        case M: {
          t.stateNode, Bf(t), Ag(t), c0();
          var c = t.flags;
          return (c & sr) !== Ge && (c & ot) === Ge ? (t.flags = c & ~sr | ot, t) : null;
        }
        case W:
          return o0(t), null;
        case Oe: {
          Yf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            jf();
          }
          var m = t.flags;
          return m & sr ? (t.flags = m & ~sr | ot, (t.mode & lt) !== Ue && $0(t), t) : null;
        }
        case Nt:
          return Yf(t), null;
        case K:
          return Bf(t), null;
        case ge:
          var b = t.type._context;
          return Xg(b, t), null;
        case Pe:
        case rt:
          return _b(t), null;
        case Tt:
          return null;
        default:
          return null;
      }
    }
    function BC(e, t, i) {
      switch (Ug(t), t.tag) {
        case A: {
          var a = t.type.childContextTypes;
          a != null && am(t);
          break;
        }
        case M: {
          t.stateNode, Bf(t), Ag(t), c0();
          break;
        }
        case W: {
          o0(t);
          break;
        }
        case K:
          Bf(t);
          break;
        case Oe:
          Yf(t);
          break;
        case Nt:
          Yf(t);
          break;
        case ge:
          var l = t.type._context;
          Xg(l, t);
          break;
        case Pe:
        case rt:
          _b(t);
          break;
      }
    }
    var WC = null;
    WC = /* @__PURE__ */ new Set();
    var Xm = !1, Xr = !1, i_ = typeof WeakSet == "function" ? WeakSet : Set, De = null, Zf = null, Jf = null;
    function a_(e) {
      fl(null, function() {
        throw e;
      }), zd();
    }
    var o_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & lt)
        try {
          Zo(), t.componentWillUnmount();
        } finally {
          Xo(e);
        }
      else
        t.componentWillUnmount();
    };
    function YC(e, t) {
      try {
        Zu(Er, e);
      } catch (i) {
        gn(e, t, i);
      }
    }
    function db(e, t, i) {
      try {
        o_(e, i);
      } catch (a) {
        gn(e, t, a);
      }
    }
    function l_(e, t, i) {
      try {
        i.componentDidMount();
      } catch (a) {
        gn(e, t, a);
      }
    }
    function QC(e, t) {
      try {
        qC(e);
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
            if (ht && kt && e.mode & lt)
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
          typeof a == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", st(e));
        } else
          i.current = null;
    }
    function Zm(e, t, i) {
      try {
        i();
      } catch (a) {
        gn(e, t, a);
      }
    }
    var GC = !1;
    function u_(e, t) {
      SR(e.containerInfo), De = t, s_();
      var i = GC;
      return GC = !1, i;
    }
    function s_() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        (e.subtreeFlags & fu) !== Ge && t !== null ? (t.return = e, De = t) : c_();
      }
    }
    function c_() {
      for (; De !== null; ) {
        var e = De;
        Xt(e);
        try {
          f_(e);
        } catch (i) {
          gn(e, e.return, i);
        }
        Ln();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function f_(e) {
      var t = e.alternate, i = e.flags;
      if ((i & Wi) !== Ge) {
        switch (Xt(e), e.tag) {
          case k:
          case Fe:
          case We:
            break;
          case A: {
            if (t !== null) {
              var a = t.memoizedProps, l = t.memoizedState, c = e.stateNode;
              e.type === e.elementType && !oc && (c.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(e) || "instance"), c.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(e) || "instance"));
              var v = c.getSnapshotBeforeUpdate(e.elementType === e.type ? a : fo(e.type, a), l);
              {
                var m = WC;
                v === void 0 && !m.has(e.type) && (m.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", st(e)));
              }
              c.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case M: {
            {
              var b = e.stateNode;
              WR(b.containerInfo);
            }
            break;
          }
          case W:
          case ue:
          case K:
          case Me:
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
        var c = l.next, v = c;
        do {
          if ((v.tag & e) === e) {
            var m = v.destroy;
            v.destroy = void 0, m !== void 0 && ((e & qr) !== aa ? lh(t) : (e & Er) !== aa && ya(t), (e & Go) !== aa && dv(!0), Zm(t, i, m), (e & Go) !== aa && dv(!1), (e & qr) !== aa ? Fc() : (e & Er) !== aa && hu());
          }
          v = v.next;
        } while (v !== c);
      }
    }
    function Zu(e, t) {
      var i = t.updateQueue, a = i !== null ? i.lastEffect : null;
      if (a !== null) {
        var l = a.next, c = l;
        do {
          if ((c.tag & e) === e) {
            (e & qr) !== aa ? Ho(t) : (e & Er) !== aa && uh(t);
            var v = c.create;
            (e & Go) !== aa && dv(!0), c.destroy = v(), (e & Go) !== aa && dv(!1), (e & qr) !== aa ? Hc() : (e & Er) !== aa && xs();
            {
              var m = c.destroy;
              if (m !== void 0 && typeof m != "function") {
                var b = void 0;
                (c.tag & Er) !== Ge ? b = "useLayoutEffect" : (c.tag & Go) !== Ge ? b = "useInsertionEffect" : b = "useEffect";
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
          c = c.next;
        } while (c !== l);
      }
    }
    function d_(e, t) {
      if ((t.flags & yt) !== Ge)
        switch (t.tag) {
          case pt: {
            var i = t.stateNode.passiveEffectDuration, a = t.memoizedProps, l = a.id, c = a.onPostCommit, v = cC(), m = t.alternate === null ? "mount" : "update";
            sC() && (m = "nested-update"), typeof c == "function" && c(l, m, i, v);
            var b = t.return;
            e: for (; b !== null; ) {
              switch (b.tag) {
                case M:
                  var w = b.stateNode;
                  w.passiveEffectDuration += i;
                  break e;
                case pt:
                  var T = b.stateNode;
                  T.passiveEffectDuration += i;
                  break e;
              }
              b = b.return;
            }
            break;
          }
        }
    }
    function p_(e, t, i, a) {
      if ((i.flags & $r) !== Ge)
        switch (i.tag) {
          case k:
          case Fe:
          case We: {
            if (!Xr)
              if (i.mode & lt)
                try {
                  Zo(), Zu(Er | Sr, i);
                } finally {
                  Xo(i);
                }
              else
                Zu(Er | Sr, i);
            break;
          }
          case A: {
            var l = i.stateNode;
            if (i.flags & yt && !Xr)
              if (t === null)
                if (i.type === i.elementType && !oc && (l.props !== i.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(i) || "instance"), l.state !== i.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(i) || "instance")), i.mode & lt)
                  try {
                    Zo(), l.componentDidMount();
                  } finally {
                    Xo(i);
                  }
                else
                  l.componentDidMount();
              else {
                var c = i.elementType === i.type ? t.memoizedProps : fo(i.type, t.memoizedProps), v = t.memoizedState;
                if (i.type === i.elementType && !oc && (l.props !== i.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(i) || "instance"), l.state !== i.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(i) || "instance")), i.mode & lt)
                  try {
                    Zo(), l.componentDidUpdate(c, v, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Xo(i);
                  }
                else
                  l.componentDidUpdate(c, v, l.__reactInternalSnapshotBeforeUpdate);
              }
            var m = i.updateQueue;
            m !== null && (i.type === i.elementType && !oc && (l.props !== i.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", st(i) || "instance"), l.state !== i.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", st(i) || "instance")), NE(i, m, l));
            break;
          }
          case M: {
            var b = i.updateQueue;
            if (b !== null) {
              var w = null;
              if (i.child !== null)
                switch (i.child.tag) {
                  case W:
                    w = i.child.stateNode;
                    break;
                  case A:
                    w = i.child.stateNode;
                    break;
                }
              NE(i, b, w);
            }
            break;
          }
          case W: {
            var T = i.stateNode;
            if (t === null && i.flags & yt) {
              var z = i.type, N = i.memoizedProps;
              LR(T, z, N);
            }
            break;
          }
          case ue:
            break;
          case K:
            break;
          case pt: {
            {
              var B = i.memoizedProps, G = B.onCommit, Z = B.onRender, be = i.stateNode.effectDuration, Ke = cC(), Ve = t === null ? "mount" : "update";
              sC() && (Ve = "nested-update"), typeof Z == "function" && Z(i.memoizedProps.id, Ve, i.actualDuration, i.treeBaseDuration, i.actualStartTime, Ke);
              {
                typeof G == "function" && G(i.memoizedProps.id, Ve, be, Ke), cD(i);
                var zt = i.return;
                e: for (; zt !== null; ) {
                  switch (zt.tag) {
                    case M:
                      var Ot = zt.stateNode;
                      Ot.effectDuration += be;
                      break e;
                    case pt:
                      var j = zt.stateNode;
                      j.effectDuration += be;
                      break e;
                  }
                  zt = zt.return;
                }
              }
            }
            break;
          }
          case Oe: {
            E_(e, i);
            break;
          }
          case Nt:
          case Me:
          case sn:
          case Pe:
          case rt:
          case it:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Xr || i.flags & si && qC(i);
    }
    function v_(e) {
      switch (e.tag) {
        case k:
        case Fe:
        case We: {
          if (e.mode & lt)
            try {
              Zo(), YC(e, e.return);
            } finally {
              Xo(e);
            }
          else
            YC(e, e.return);
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && l_(e, e.return, t), QC(e, e.return);
          break;
        }
        case W: {
          QC(e, e.return);
          break;
        }
      }
    }
    function h_(e, t) {
      for (var i = null, a = e; ; ) {
        if (a.tag === W) {
          if (i === null) {
            i = a;
            try {
              var l = a.stateNode;
              t ? VR(l) : IR(a.stateNode, a.memoizedProps);
            } catch (v) {
              gn(e, e.return, v);
            }
          }
        } else if (a.tag === ue) {
          if (i === null)
            try {
              var c = a.stateNode;
              t ? PR(c) : BR(c, a.memoizedProps);
            } catch (v) {
              gn(e, e.return, v);
            }
        } else if (!((a.tag === Pe || a.tag === rt) && a.memoizedState !== null && a !== e)) {
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
    function qC(e) {
      var t = e.ref;
      if (t !== null) {
        var i = e.stateNode, a;
        switch (e.tag) {
          case W:
            a = i;
            break;
          default:
            a = i;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & lt)
            try {
              Zo(), l = t(a);
            } finally {
              Xo(e);
            }
          else
            l = t(a);
          typeof l == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", st(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", st(e)), t.current = a;
      }
    }
    function m_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function KC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, KC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === W) {
          var i = e.stateNode;
          i !== null && Cx(i);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function y_(e) {
      for (var t = e.return; t !== null; ) {
        if (XC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function XC(e) {
      return e.tag === W || e.tag === M || e.tag === K;
    }
    function ZC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || XC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== W && t.tag !== ue && t.tag !== Ht; ) {
          if (t.flags & hn || t.child === null || t.tag === K)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & hn))
          return t.stateNode;
      }
    }
    function g_(e) {
      var t = y_(e);
      switch (t.tag) {
        case W: {
          var i = t.stateNode;
          t.flags & Zt && (eE(i), t.flags &= ~Zt);
          var a = ZC(e);
          vb(e, a, i);
          break;
        }
        case M:
        case K: {
          var l = t.stateNode.containerInfo, c = ZC(e);
          pb(e, c, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function pb(e, t, i) {
      var a = e.tag, l = a === W || a === ue;
      if (l) {
        var c = e.stateNode;
        t ? UR(i, c, t) : $R(i, c);
      } else if (a !== K) {
        var v = e.child;
        if (v !== null) {
          pb(v, t, i);
          for (var m = v.sibling; m !== null; )
            pb(m, t, i), m = m.sibling;
        }
      }
    }
    function vb(e, t, i) {
      var a = e.tag, l = a === W || a === ue;
      if (l) {
        var c = e.stateNode;
        t ? zR(i, c, t) : NR(i, c);
      } else if (a !== K) {
        var v = e.child;
        if (v !== null) {
          vb(v, t, i);
          for (var m = v.sibling; m !== null; )
            vb(m, t, i), m = m.sibling;
        }
      }
    }
    var Zr = null, ho = !1;
    function b_(e, t, i) {
      {
        var a = t;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case W: {
              Zr = a.stateNode, ho = !1;
              break e;
            }
            case M: {
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
        JC(e, t, i), Zr = null, ho = !1;
      }
      m_(i);
    }
    function Ju(e, t, i) {
      for (var a = i.child; a !== null; )
        JC(e, t, a), a = a.sibling;
    }
    function JC(e, t, i) {
      switch (vl(i), i.tag) {
        case W:
          Xr || ed(i, t);
        case ue: {
          {
            var a = Zr, l = ho;
            Zr = null, Ju(e, t, i), Zr = a, ho = l, Zr !== null && (ho ? FR(Zr, i.stateNode) : HR(Zr, i.stateNode));
          }
          return;
        }
        case Ht: {
          Zr !== null && (ho ? jR(Zr, i.stateNode) : Rg(Zr, i.stateNode));
          return;
        }
        case K: {
          {
            var c = Zr, v = ho;
            Zr = i.stateNode.containerInfo, ho = !0, Ju(e, t, i), Zr = c, ho = v;
          }
          return;
        }
        case k:
        case Fe:
        case ut:
        case We: {
          if (!Xr) {
            var m = i.updateQueue;
            if (m !== null) {
              var b = m.lastEffect;
              if (b !== null) {
                var w = b.next, T = w;
                do {
                  var z = T, N = z.destroy, B = z.tag;
                  N !== void 0 && ((B & Go) !== aa ? Zm(i, t, N) : (B & Er) !== aa && (ya(i), i.mode & lt ? (Zo(), Zm(i, t, N), Xo(i)) : Zm(i, t, N), hu())), T = T.next;
                } while (T !== w);
              }
            }
          }
          Ju(e, t, i);
          return;
        }
        case A: {
          if (!Xr) {
            ed(i, t);
            var G = i.stateNode;
            typeof G.componentWillUnmount == "function" && db(i, t, G);
          }
          Ju(e, t, i);
          return;
        }
        case sn: {
          Ju(e, t, i);
          return;
        }
        case Pe: {
          if (
            // TODO: Remove this dead flag
            i.mode & je
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
    function S_(e) {
      e.memoizedState;
    }
    function E_(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var a = t.alternate;
        if (a !== null) {
          var l = a.memoizedState;
          if (l !== null) {
            var c = l.dehydrated;
            c !== null && ax(c);
          }
        }
      }
    }
    function ew(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new i_()), t.forEach(function(a) {
          var l = yD.bind(null, e, a);
          if (!i.has(a)) {
            if (i.add(a), Oi)
              if (Zf !== null && Jf !== null)
                fv(Jf, Zf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            a.then(l, l);
          }
        });
      }
    }
    function C_(e, t, i) {
      Zf = i, Jf = e, Xt(t), tw(t, e), Xt(t), Zf = null, Jf = null;
    }
    function mo(e, t, i) {
      var a = t.deletions;
      if (a !== null)
        for (var l = 0; l < a.length; l++) {
          var c = a[l];
          try {
            b_(e, t, c);
          } catch (b) {
            gn(c, t, b);
          }
        }
      var v = mc();
      if (t.subtreeFlags & di)
        for (var m = t.child; m !== null; )
          Xt(m), tw(m, e), m = m.sibling;
      Xt(v);
    }
    function tw(e, t, i) {
      var a = e.alternate, l = e.flags;
      switch (e.tag) {
        case k:
        case Fe:
        case ut:
        case We: {
          if (mo(t, e), Jo(e), l & yt) {
            try {
              vo(Go | Sr, e, e.return), Zu(Go | Sr, e);
            } catch (nt) {
              gn(e, e.return, nt);
            }
            if (e.mode & lt) {
              try {
                Zo(), vo(Er | Sr, e, e.return);
              } catch (nt) {
                gn(e, e.return, nt);
              }
              Xo(e);
            } else
              try {
                vo(Er | Sr, e, e.return);
              } catch (nt) {
                gn(e, e.return, nt);
              }
          }
          return;
        }
        case A: {
          mo(t, e), Jo(e), l & si && a !== null && ed(a, a.return);
          return;
        }
        case W: {
          mo(t, e), Jo(e), l & si && a !== null && ed(a, a.return);
          {
            if (e.flags & Zt) {
              var c = e.stateNode;
              try {
                eE(c);
              } catch (nt) {
                gn(e, e.return, nt);
              }
            }
            if (l & yt) {
              var v = e.stateNode;
              if (v != null) {
                var m = e.memoizedProps, b = a !== null ? a.memoizedProps : m, w = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    MR(v, T, w, b, m, e);
                  } catch (nt) {
                    gn(e, e.return, nt);
                  }
              }
            }
          }
          return;
        }
        case ue: {
          if (mo(t, e), Jo(e), l & yt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, N = e.memoizedProps, B = a !== null ? a.memoizedProps : N;
            try {
              AR(z, B, N);
            } catch (nt) {
              gn(e, e.return, nt);
            }
          }
          return;
        }
        case M: {
          if (mo(t, e), Jo(e), l & yt && a !== null) {
            var G = a.memoizedState;
            if (G.isDehydrated)
              try {
                ix(t.containerInfo);
              } catch (nt) {
                gn(e, e.return, nt);
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
          if (Z.flags & $o) {
            var be = Z.stateNode, Ke = Z.memoizedState, Ve = Ke !== null;
            if (be.isHidden = Ve, Ve) {
              var zt = Z.alternate !== null && Z.alternate.memoizedState !== null;
              zt || nD();
            }
          }
          if (l & yt) {
            try {
              S_(e);
            } catch (nt) {
              gn(e, e.return, nt);
            }
            ew(e);
          }
          return;
        }
        case Pe: {
          var Ot = a !== null && a.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & je
          ) {
            var j = Xr;
            Xr = j || Ot, mo(t, e), Xr = j;
          } else
            mo(t, e);
          if (Jo(e), l & $o) {
            var J = e.stateNode, V = e.memoizedState, le = V !== null, Te = e;
            if (J.isHidden = le, le && !Ot && (Te.mode & je) !== Ue) {
              De = Te;
              for (var Se = Te.child; Se !== null; )
                De = Se, T_(Se), Se = Se.sibling;
            }
            h_(Te, le);
          }
          return;
        }
        case Nt: {
          mo(t, e), Jo(e), l & yt && ew(e);
          return;
        }
        case sn:
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
          g_(e);
        } catch (i) {
          gn(e, e.return, i);
        }
        e.flags &= ~hn;
      }
      t & Yi && (e.flags &= ~Yi);
    }
    function w_(e, t, i) {
      Zf = i, Jf = t, De = e, nw(e, t, i), Zf = null, Jf = null;
    }
    function nw(e, t, i) {
      for (var a = (e.mode & je) !== Ue; De !== null; ) {
        var l = De, c = l.child;
        if (l.tag === Pe && a) {
          var v = l.memoizedState !== null, m = v || Xm;
          if (m) {
            hb(e, t, i);
            continue;
          } else {
            var b = l.alternate, w = b !== null && b.memoizedState !== null, T = w || Xr, z = Xm, N = Xr;
            Xm = m, Xr = T, Xr && !N && (De = l, R_(l));
            for (var B = c; B !== null; )
              De = B, nw(
                B,
                // New root; bubble back up to here and stop.
                t,
                i
              ), B = B.sibling;
            De = l, Xm = z, Xr = N, hb(e, t, i);
            continue;
          }
        }
        (l.subtreeFlags & $r) !== Ge && c !== null ? (c.return = l, De = c) : hb(e, t, i);
      }
    }
    function hb(e, t, i) {
      for (; De !== null; ) {
        var a = De;
        if ((a.flags & $r) !== Ge) {
          var l = a.alternate;
          Xt(a);
          try {
            p_(t, l, a, i);
          } catch (v) {
            gn(a, a.return, v);
          }
          Ln();
        }
        if (a === e) {
          De = null;
          return;
        }
        var c = a.sibling;
        if (c !== null) {
          c.return = a.return, De = c;
          return;
        }
        De = a.return;
      }
    }
    function T_(e) {
      for (; De !== null; ) {
        var t = De, i = t.child;
        switch (t.tag) {
          case k:
          case Fe:
          case ut:
          case We: {
            if (t.mode & lt)
              try {
                Zo(), vo(Er, t, t.return);
              } finally {
                Xo(t);
              }
            else
              vo(Er, t, t.return);
            break;
          }
          case A: {
            ed(t, t.return);
            var a = t.stateNode;
            typeof a.componentWillUnmount == "function" && db(t, t.return, a);
            break;
          }
          case W: {
            ed(t, t.return);
            break;
          }
          case Pe: {
            var l = t.memoizedState !== null;
            if (l) {
              rw(e);
              continue;
            }
            break;
          }
        }
        i !== null ? (i.return = t, De = i) : rw(e);
      }
    }
    function rw(e) {
      for (; De !== null; ) {
        var t = De;
        if (t === e) {
          De = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, De = i;
          return;
        }
        De = t.return;
      }
    }
    function R_(e) {
      for (; De !== null; ) {
        var t = De, i = t.child;
        if (t.tag === Pe) {
          var a = t.memoizedState !== null;
          if (a) {
            iw(e);
            continue;
          }
        }
        i !== null ? (i.return = t, De = i) : iw(e);
      }
    }
    function iw(e) {
      for (; De !== null; ) {
        var t = De;
        Xt(t);
        try {
          v_(t);
        } catch (a) {
          gn(t, t.return, a);
        }
        if (Ln(), t === e) {
          De = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, De = i;
          return;
        }
        De = t.return;
      }
    }
    function x_(e, t, i, a) {
      De = t, k_(t, e, i, a);
    }
    function k_(e, t, i, a) {
      for (; De !== null; ) {
        var l = De, c = l.child;
        (l.subtreeFlags & Qi) !== Ge && c !== null ? (c.return = l, De = c) : __(e, t, i, a);
      }
    }
    function __(e, t, i, a) {
      for (; De !== null; ) {
        var l = De;
        if ((l.flags & Sn) !== Ge) {
          Xt(l);
          try {
            D_(t, l, i, a);
          } catch (v) {
            gn(l, l.return, v);
          }
          Ln();
        }
        if (l === e) {
          De = null;
          return;
        }
        var c = l.sibling;
        if (c !== null) {
          c.return = l.return, De = c;
          return;
        }
        De = l.return;
      }
    }
    function D_(e, t, i, a) {
      switch (t.tag) {
        case k:
        case Fe:
        case We: {
          if (t.mode & lt) {
            N0();
            try {
              Zu(qr | Sr, t);
            } finally {
              A0(t);
            }
          } else
            Zu(qr | Sr, t);
          break;
        }
      }
    }
    function O_(e) {
      De = e, L_();
    }
    function L_() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        if ((De.flags & Kt) !== Ge) {
          var i = e.deletions;
          if (i !== null) {
            for (var a = 0; a < i.length; a++) {
              var l = i[a];
              De = l, N_(l, e);
            }
            {
              var c = e.alternate;
              if (c !== null) {
                var v = c.child;
                if (v !== null) {
                  c.child = null;
                  do {
                    var m = v.sibling;
                    v.sibling = null, v = m;
                  } while (v !== null);
                }
              }
            }
            De = e;
          }
        }
        (e.subtreeFlags & Qi) !== Ge && t !== null ? (t.return = e, De = t) : M_();
      }
    }
    function M_() {
      for (; De !== null; ) {
        var e = De;
        (e.flags & Sn) !== Ge && (Xt(e), A_(e), Ln());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function A_(e) {
      switch (e.tag) {
        case k:
        case Fe:
        case We: {
          e.mode & lt ? (N0(), vo(qr | Sr, e, e.return), A0(e)) : vo(qr | Sr, e, e.return);
          break;
        }
      }
    }
    function N_(e, t) {
      for (; De !== null; ) {
        var i = De;
        Xt(i), z_(i, t), Ln();
        var a = i.child;
        a !== null ? (a.return = i, De = a) : $_(e);
      }
    }
    function $_(e) {
      for (; De !== null; ) {
        var t = De, i = t.sibling, a = t.return;
        if (KC(t), t === e) {
          De = null;
          return;
        }
        if (i !== null) {
          i.return = a, De = i;
          return;
        }
        De = a;
      }
    }
    function z_(e, t) {
      switch (e.tag) {
        case k:
        case Fe:
        case We: {
          e.mode & lt ? (N0(), vo(qr, e, t), A0(e)) : vo(qr, e, t);
          break;
        }
      }
    }
    function U_(e) {
      switch (e.tag) {
        case k:
        case Fe:
        case We: {
          try {
            Zu(Er | Sr, e);
          } catch (i) {
            gn(e, e.return, i);
          }
          break;
        }
        case A: {
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
    function H_(e) {
      switch (e.tag) {
        case k:
        case Fe:
        case We: {
          try {
            Zu(qr | Sr, e);
          } catch (t) {
            gn(e, e.return, t);
          }
          break;
        }
      }
    }
    function F_(e) {
      switch (e.tag) {
        case k:
        case Fe:
        case We: {
          try {
            vo(Er | Sr, e, e.return);
          } catch (i) {
            gn(e, e.return, i);
          }
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && db(e, e.return, t);
          break;
        }
      }
    }
    function j_(e) {
      switch (e.tag) {
        case k:
        case Fe:
        case We:
          try {
            vo(qr | Sr, e, e.return);
          } catch (t) {
            gn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var ev = Symbol.for;
      ev("selector.component"), ev("selector.has_pseudo_class"), ev("selector.role"), ev("selector.test_id"), ev("selector.text");
    }
    var V_ = [];
    function P_() {
      V_.forEach(function(e) {
        return e();
      });
    }
    var I_ = p.ReactCurrentActQueue;
    function B_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), i = typeof jest < "u";
        return i && t !== !1;
      }
    }
    function aw() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && I_.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var W_ = Math.ceil, mb = p.ReactCurrentDispatcher, yb = p.ReactCurrentOwner, Jr = p.ReactCurrentBatchConfig, yo = p.ReactCurrentActQueue, Tr = (
      /*             */
      0
    ), ow = (
      /*               */
      1
    ), ei = (
      /*                */
      2
    ), Ha = (
      /*                */
      4
    ), zl = 0, tv = 1, lc = 2, Jm = 3, nv = 4, lw = 5, gb = 6, $t = Tr, Ni = null, Pn = null, Rr = te, el = te, bb = Iu(te), xr = zl, rv = null, ey = te, iv = te, ty = te, av = null, oa = null, Sb = 0, uw = 500, sw = 1 / 0, Y_ = 500, Ul = null;
    function ov() {
      sw = kn() + Y_;
    }
    function cw() {
      return sw;
    }
    var ny = !1, Eb = null, td = null, uc = !1, es = null, lv = te, Cb = [], wb = null, Q_ = 50, uv = 0, Tb = null, Rb = !1, ry = !1, G_ = 50, nd = 0, iy = null, sv = fn, ay = te, fw = !1;
    function oy() {
      return Ni;
    }
    function $i() {
      return ($t & (ei | Ha)) !== Tr ? kn() : (sv !== fn || (sv = kn()), sv);
    }
    function ts(e) {
      var t = e.mode;
      if ((t & je) === Ue)
        return Ie;
      if (($t & ei) !== Tr && Rr !== te)
        return Tu(Rr);
      var i = Ix() !== Px;
      if (i) {
        if (Jr.transition !== null) {
          var a = Jr.transition;
          a._updatedFibers || (a._updatedFibers = /* @__PURE__ */ new Set()), a._updatedFibers.add(e);
        }
        return ay === Yn && (ay = gh()), ay;
      }
      var l = Zi();
      if (l !== Yn)
        return l;
      var c = kR();
      return c;
    }
    function q_(e) {
      var t = e.mode;
      return (t & je) === Ue ? Ie : mi();
    }
    function kr(e, t, i, a) {
      bD(), fw && g("useInsertionEffect must not schedule updates."), Rb && (ry = !0), Cl(e, i, a), ($t & ei) !== te && e === Ni ? CD(t) : (Oi && sf(e, t, i), wD(t), e === Ni && (($t & ei) === Tr && (iv = mt(iv, i)), xr === nv && ns(e, Rr)), la(e, a), i === Ie && $t === Tr && (t.mode & je) === Ue && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !yo.isBatchingLegacy && (ov(), fE()));
    }
    function K_(e, t, i) {
      var a = e.current;
      a.lanes = t, Cl(e, t, i), la(e, i);
    }
    function X_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        ($t & ei) !== Tr
      );
    }
    function la(e, t) {
      var i = e.callbackNode;
      ph(e, t);
      var a = Sl(e, e === Ni ? Rr : te);
      if (a === te) {
        i !== null && kw(i), e.callbackNode = null, e.callbackPriority = Yn;
        return;
      }
      var l = Fn(a), c = e.callbackPriority;
      if (c === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(yo.current !== null && i !== Mb)) {
        i == null && c !== Ie && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      i != null && kw(i);
      var v;
      if (l === Ie)
        e.tag === Bu ? (yo.isBatchingLegacy !== null && (yo.didScheduleLegacyUpdate = !0), Rx(vw.bind(null, e))) : cE(vw.bind(null, e)), yo.current !== null ? yo.current.push(Wu) : DR(function() {
          ($t & (ei | Ha)) === Tr && Wu();
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
          case Ru:
            m = zc;
            break;
          default:
            m = _a;
            break;
        }
        v = Ab(m, dw.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = v;
    }
    function dw(e, t) {
      if (hk(), sv = fn, ay = te, ($t & (ei | Ha)) !== Tr)
        throw new Error("Should not already be working.");
      var i = e.callbackNode, a = Fl();
      if (a && e.callbackNode !== i)
        return null;
      var l = Sl(e, e === Ni ? Rr : te);
      if (l === te)
        return null;
      var c = !Ns(e, l) && !yh(e, l) && !t, v = c ? lD(e, l) : uy(e, l);
      if (v !== zl) {
        if (v === lc) {
          var m = jo(e);
          m !== te && (l = m, v = xb(e, m));
        }
        if (v === tv) {
          var b = rv;
          throw sc(e, te), ns(e, l), la(e, kn()), b;
        }
        if (v === gb)
          ns(e, l);
        else {
          var w = !Ns(e, l), T = e.current.alternate;
          if (w && !J_(T)) {
            if (v = uy(e, l), v === lc) {
              var z = jo(e);
              z !== te && (l = z, v = xb(e, z));
            }
            if (v === tv) {
              var N = rv;
              throw sc(e, te), ns(e, l), la(e, kn()), N;
            }
          }
          e.finishedWork = T, e.finishedLanes = l, Z_(e, v, l);
        }
      }
      return la(e, kn()), e.callbackNode === i ? dw.bind(null, e) : null;
    }
    function xb(e, t) {
      var i = av;
      if (cf(e)) {
        var a = sc(e, t);
        a.flags |= Mn, gx(e.containerInfo);
      }
      var l = uy(e, t);
      if (l !== lc) {
        var c = oa;
        oa = i, c !== null && pw(c);
      }
      return l;
    }
    function pw(e) {
      oa === null ? oa = e : oa.push.apply(oa, e);
    }
    function Z_(e, t, i) {
      switch (t) {
        case zl:
        case tv:
          throw new Error("Root did not complete. This is a bug in React.");
        case lc: {
          cc(e, oa, Ul);
          break;
        }
        case Jm: {
          if (ns(e, i), vh(i) && // do not delay if we're inside an act() scope
          !_w()) {
            var a = Sb + uw - kn();
            if (a > 10) {
              var l = Sl(e, te);
              if (l !== te)
                break;
              var c = e.suspendedLanes;
              if (!El(c, i)) {
                $i(), lf(e, c);
                break;
              }
              e.timeoutHandle = wg(cc.bind(null, e, oa, Ul), a);
              break;
            }
          }
          cc(e, oa, Ul);
          break;
        }
        case nv: {
          if (ns(e, i), mh(i))
            break;
          if (!_w()) {
            var v = fh(e, i), m = v, b = kn() - m, w = gD(b) - b;
            if (w > 10) {
              e.timeoutHandle = wg(cc.bind(null, e, oa, Ul), w);
              break;
            }
          }
          cc(e, oa, Ul);
          break;
        }
        case lw: {
          cc(e, oa, Ul);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function J_(e) {
      for (var t = e; ; ) {
        if (t.flags & Ts) {
          var i = t.updateQueue;
          if (i !== null) {
            var a = i.stores;
            if (a !== null)
              for (var l = 0; l < a.length; l++) {
                var c = a[l], v = c.getSnapshot, m = c.value;
                try {
                  if (!_e(v(), m))
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
      t = $s(t, ty), t = $s(t, iv), Sh(e, t);
    }
    function vw(e) {
      if (mk(), ($t & (ei | Ha)) !== Tr)
        throw new Error("Should not already be working.");
      Fl();
      var t = Sl(e, te);
      if (!yi(t, Ie))
        return la(e, kn()), null;
      var i = uy(e, t);
      if (e.tag !== Bu && i === lc) {
        var a = jo(e);
        a !== te && (t = a, i = xb(e, a));
      }
      if (i === tv) {
        var l = rv;
        throw sc(e, te), ns(e, t), la(e, kn()), l;
      }
      if (i === gb)
        throw new Error("Root did not complete. This is a bug in React.");
      var c = e.current.alternate;
      return e.finishedWork = c, e.finishedLanes = t, cc(e, oa, Ul), la(e, kn()), null;
    }
    function eD(e, t) {
      t !== te && (Jd(e, mt(t, Ie)), la(e, kn()), ($t & (ei | Ha)) === Tr && (ov(), Wu()));
    }
    function kb(e, t) {
      var i = $t;
      $t |= ow;
      try {
        return e(t);
      } finally {
        $t = i, $t === Tr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !yo.isBatchingLegacy && (ov(), fE());
      }
    }
    function tD(e, t, i, a, l) {
      var c = Zi(), v = Jr.transition;
      try {
        return Jr.transition = null, An(jn), e(t, i, a, l);
      } finally {
        An(c), Jr.transition = v, $t === Tr && ov();
      }
    }
    function Hl(e) {
      es !== null && es.tag === Bu && ($t & (ei | Ha)) === Tr && Fl();
      var t = $t;
      $t |= ow;
      var i = Jr.transition, a = Zi();
      try {
        return Jr.transition = null, An(jn), e ? e() : void 0;
      } finally {
        An(a), Jr.transition = i, $t = t, ($t & (ei | Ha)) === Tr && Wu();
      }
    }
    function hw() {
      return ($t & (ei | Ha)) !== Tr;
    }
    function ly(e, t) {
      Si(bb, el, e), el = mt(el, t);
    }
    function _b(e) {
      el = bb.current, bi(bb, e);
    }
    function sc(e, t) {
      e.finishedWork = null, e.finishedLanes = te;
      var i = e.timeoutHandle;
      if (i !== Tg && (e.timeoutHandle = Tg, _R(i)), Pn !== null)
        for (var a = Pn.return; a !== null; ) {
          var l = a.alternate;
          BC(l, a), a = a.return;
        }
      Ni = e;
      var c = fc(e.current, null);
      return Pn = c, Rr = el = t, xr = zl, rv = null, ey = te, iv = te, ty = te, av = null, oa = null, Kx(), uo.discardPendingWarnings(), c;
    }
    function mw(e, t) {
      do {
        var i = Pn;
        try {
          if (ym(), jE(), Ln(), yb.current = null, i === null || i.return === null) {
            xr = tv, rv = t, Pn = null;
            return;
          }
          if (ht && i.mode & lt && Ym(i, !0), vt)
            if (vi(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var a = t;
              hl(i, a, Rr);
            } else
              ks(i, t, Rr);
          Rk(e, i.return, i, t, Rr), Sw(i);
        } catch (l) {
          t = l, Pn === i && i !== null ? (i = i.return, Pn = i) : i = Pn;
          continue;
        }
        return;
      } while (!0);
    }
    function yw() {
      var e = mb.current;
      return mb.current = Vm, e === null ? Vm : e;
    }
    function gw(e) {
      mb.current = e;
    }
    function nD() {
      Sb = kn();
    }
    function cv(e) {
      ey = mt(e, ey);
    }
    function rD() {
      xr === zl && (xr = Jm);
    }
    function Db() {
      (xr === zl || xr === Jm || xr === lc) && (xr = nv), Ni !== null && (As(ey) || As(iv)) && ns(Ni, Rr);
    }
    function iD(e) {
      xr !== nv && (xr = lc), av === null ? av = [e] : av.push(e);
    }
    function aD() {
      return xr === zl;
    }
    function uy(e, t) {
      var i = $t;
      $t |= ei;
      var a = yw();
      if (Ni !== e || Rr !== t) {
        if (Oi) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (fv(e, Rr), l.clear()), ep(e, t);
        }
        Ul = Us(), sc(e, t);
      }
      En(t);
      do
        try {
          oD();
          break;
        } catch (c) {
          mw(e, c);
        }
      while (!0);
      if (ym(), $t = i, gw(a), Pn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Vc(), Ni = null, Rr = te, xr;
    }
    function oD() {
      for (; Pn !== null; )
        bw(Pn);
    }
    function lD(e, t) {
      var i = $t;
      $t |= ei;
      var a = yw();
      if (Ni !== e || Rr !== t) {
        if (Oi) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (fv(e, Rr), l.clear()), ep(e, t);
        }
        Ul = Us(), ov(), sc(e, t);
      }
      En(t);
      do
        try {
          uD();
          break;
        } catch (c) {
          mw(e, c);
        }
      while (!0);
      return ym(), gw(a), $t = i, Pn !== null ? (jc(), zl) : (Vc(), Ni = null, Rr = te, xr);
    }
    function uD() {
      for (; Pn !== null && !Nc(); )
        bw(Pn);
    }
    function bw(e) {
      var t = e.alternate;
      Xt(e);
      var i;
      (e.mode & lt) !== Ue ? (M0(e), i = Ob(t, e, el), Ym(e, !0)) : i = Ob(t, e, el), Ln(), e.memoizedProps = e.pendingProps, i === null ? Sw(e) : Pn = i, yb.current = null;
    }
    function Sw(e) {
      var t = e;
      do {
        var i = t.alternate, a = t.return;
        if ((t.flags & ki) === Ge) {
          Xt(t);
          var l = void 0;
          if ((t.mode & lt) === Ue ? l = IC(i, t, el) : (M0(t), l = IC(i, t, el), Ym(t, !1)), Ln(), l !== null) {
            Pn = l;
            return;
          }
        } else {
          var c = r_(i, t);
          if (c !== null) {
            c.flags &= eh, Pn = c;
            return;
          }
          if ((t.mode & lt) !== Ue) {
            Ym(t, !1);
            for (var v = t.actualDuration, m = t.child; m !== null; )
              v += m.actualDuration, m = m.sibling;
            t.actualDuration = v;
          }
          if (a !== null)
            a.flags |= ki, a.subtreeFlags = Ge, a.deletions = null;
          else {
            xr = gb, Pn = null;
            return;
          }
        }
        var b = t.sibling;
        if (b !== null) {
          Pn = b;
          return;
        }
        t = a, Pn = t;
      } while (t !== null);
      xr === zl && (xr = lw);
    }
    function cc(e, t, i) {
      var a = Zi(), l = Jr.transition;
      try {
        Jr.transition = null, An(jn), sD(e, t, i, a);
      } finally {
        Jr.transition = l, An(a);
      }
      return null;
    }
    function sD(e, t, i, a) {
      do
        Fl();
      while (es !== null);
      if (SD(), ($t & (ei | Ha)) !== Tr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, c = e.finishedLanes;
      if (Uo(c), l === null)
        return Uc(), null;
      if (c === te && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = te, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Yn;
      var v = mt(l.lanes, l.childLanes);
      uf(e, v), e === Ni && (Ni = null, Pn = null, Rr = te), ((l.subtreeFlags & Qi) !== Ge || (l.flags & Qi) !== Ge) && (uc || (uc = !0, wb = i, Ab(_a, function() {
        return Fl(), null;
      })));
      var m = (l.subtreeFlags & (fu | di | $r | Qi)) !== Ge, b = (l.flags & (fu | di | $r | Qi)) !== Ge;
      if (m || b) {
        var w = Jr.transition;
        Jr.transition = null;
        var T = Zi();
        An(jn);
        var z = $t;
        $t |= Ha, yb.current = null, u_(e, l), fC(), C_(e, l, c), ER(e.containerInfo), e.current = l, Wd(c), w_(l, e, c), mu(), rh(), $t = z, An(T), Jr.transition = w;
      } else
        e.current = l, fC();
      var N = uc;
      if (uc ? (uc = !1, es = e, lv = c) : (nd = 0, iy = null), v = e.pendingLanes, v === te && (td = null), N || Tw(e.current, !1), pu(l.stateNode, a), Oi && e.memoizedUpdaters.clear(), P_(), la(e, kn()), t !== null)
        for (var B = e.onRecoverableError, G = 0; G < t.length; G++) {
          var Z = t[G], be = Z.stack, Ke = Z.digest;
          B(Z.value, {
            componentStack: be,
            digest: Ke
          });
        }
      if (ny) {
        ny = !1;
        var Ve = Eb;
        throw Eb = null, Ve;
      }
      return yi(lv, Ie) && e.tag !== Bu && Fl(), v = e.pendingLanes, yi(v, Ie) ? (vk(), e === Tb ? uv++ : (uv = 0, Tb = e)) : uv = 0, Wu(), Uc(), null;
    }
    function Fl() {
      if (es !== null) {
        var e = br(lv), t = Gy(Da, e), i = Jr.transition, a = Zi();
        try {
          return Jr.transition = null, An(t), fD();
        } finally {
          An(a), Jr.transition = i;
        }
      }
      return !1;
    }
    function cD(e) {
      Cb.push(e), uc || (uc = !0, Ab(_a, function() {
        return Fl(), null;
      }));
    }
    function fD() {
      if (es === null)
        return !1;
      var e = wb;
      wb = null;
      var t = es, i = lv;
      if (es = null, lv = te, ($t & (ei | Ha)) !== Tr)
        throw new Error("Cannot flush passive effects while already rendering.");
      Rb = !0, ry = !1, sh(i);
      var a = $t;
      $t |= Ha, O_(t.current), x_(t, t.current, i, e);
      {
        var l = Cb;
        Cb = [];
        for (var c = 0; c < l.length; c++) {
          var v = l[c];
          d_(t, v);
        }
      }
      Yd(), Tw(t.current, !0), $t = a, Wu(), ry ? t === iy ? nd++ : (nd = 0, iy = t) : nd = 0, Rb = !1, ry = !1, Ki(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Ew(e) {
      return td !== null && td.has(e);
    }
    function dD(e) {
      td === null ? td = /* @__PURE__ */ new Set([e]) : td.add(e);
    }
    function pD(e) {
      ny || (ny = !0, Eb = e);
    }
    var vD = pD;
    function Cw(e, t, i) {
      var a = ac(i, t), l = bC(e, a, Ie), c = Qu(e, l, Ie), v = $i();
      c !== null && (Cl(c, Ie, v), la(c, v));
    }
    function gn(e, t, i) {
      if (a_(i), dv(!1), e.tag === M) {
        Cw(e, e, i);
        return;
      }
      var a = null;
      for (a = t; a !== null; ) {
        if (a.tag === M) {
          Cw(a, e, i);
          return;
        } else if (a.tag === A) {
          var l = a.type, c = a.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && !Ew(c)) {
            var v = ac(i, e), m = K0(a, v, Ie), b = Qu(a, m, Ie), w = $i();
            b !== null && (Cl(b, Ie, w), la(b, w));
            return;
          }
        }
        a = a.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, i);
    }
    function hD(e, t, i) {
      var a = e.pingCache;
      a !== null && a.delete(t);
      var l = $i();
      lf(e, i), TD(e), Ni === e && El(Rr, i) && (xr === nv || xr === Jm && vh(Rr) && kn() - Sb < uw ? sc(e, te) : ty = mt(ty, i)), la(e, l);
    }
    function ww(e, t) {
      t === Yn && (t = q_(e));
      var i = $i(), a = ia(e, t);
      a !== null && (Cl(a, t, i), la(a, i));
    }
    function mD(e) {
      var t = e.memoizedState, i = Yn;
      t !== null && (i = t.retryLane), ww(e, i);
    }
    function yD(e, t) {
      var i = Yn, a;
      switch (e.tag) {
        case Oe:
          a = e.stateNode;
          var l = e.memoizedState;
          l !== null && (i = l.retryLane);
          break;
        case Nt:
          a = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      a !== null && a.delete(t), ww(e, i);
    }
    function gD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : W_(e / 1960) * 1960;
    }
    function bD() {
      if (uv > Q_)
        throw uv = 0, Tb = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      nd > G_ && (nd = 0, iy = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function SD() {
      uo.flushLegacyContextWarning(), uo.flushPendingUnsafeLifecycleWarnings();
    }
    function Tw(e, t) {
      Xt(e), sy(e, fi, F_), t && sy(e, dl, j_), sy(e, fi, U_), t && sy(e, dl, H_), Ln();
    }
    function sy(e, t, i) {
      for (var a = e, l = null; a !== null; ) {
        var c = a.subtreeFlags & t;
        a !== l && a.child !== null && c !== Ge ? a = a.child : ((a.flags & t) !== Ge && i(a), a.sibling !== null ? a = a.sibling : a = l = a.return);
      }
    }
    var cy = null;
    function Rw(e) {
      {
        if (($t & ei) !== Tr || !(e.mode & je))
          return;
        var t = e.tag;
        if (t !== H && t !== M && t !== A && t !== k && t !== Fe && t !== ut && t !== We)
          return;
        var i = st(e) || "ReactComponent";
        if (cy !== null) {
          if (cy.has(i))
            return;
          cy.add(i);
        } else
          cy = /* @__PURE__ */ new Set([i]);
        var a = xn;
        try {
          Xt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          a ? Xt(e) : Ln();
        }
      }
    }
    var Ob;
    {
      var ED = null;
      Ob = function(e, t, i) {
        var a = Aw(ED, t);
        try {
          return HC(e, t, i);
        } catch (c) {
          if (Ax() || c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (ym(), jE(), BC(e, t), Aw(t, a), t.mode & lt && M0(t), fl(null, HC, null, e, t, i), Iy()) {
            var l = zd();
            typeof l == "object" && l !== null && l._suppressLogging && typeof c == "object" && c !== null && !c._suppressLogging && (c._suppressLogging = !0);
          }
          throw c;
        }
      };
    }
    var xw = !1, Lb;
    Lb = /* @__PURE__ */ new Set();
    function CD(e) {
      if (oi && !fk())
        switch (e.tag) {
          case k:
          case Fe:
          case We: {
            var t = Pn && st(Pn) || "Unknown", i = t;
            if (!Lb.has(i)) {
              Lb.add(i);
              var a = st(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
            }
            break;
          }
          case A: {
            xw || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), xw = !0);
            break;
          }
        }
    }
    function fv(e, t) {
      if (Oi) {
        var i = e.memoizedUpdaters;
        i.forEach(function(a) {
          sf(e, a, t);
        });
      }
    }
    var Mb = {};
    function Ab(e, t) {
      {
        var i = yo.current;
        return i !== null ? (i.push(t), Mb) : Ac(e, t);
      }
    }
    function kw(e) {
      if (e !== Mb)
        return nh(e);
    }
    function _w() {
      return yo.current !== null;
    }
    function wD(e) {
      {
        if (e.mode & je) {
          if (!aw())
            return;
        } else if (!B_() || $t !== Tr || e.tag !== k && e.tag !== Fe && e.tag !== We)
          return;
        if (yo.current === null) {
          var t = xn;
          try {
            Xt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, st(e));
          } finally {
            t ? Xt(e) : Ln();
          }
        }
      }
    }
    function TD(e) {
      e.tag !== Bu && aw() && yo.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function dv(e) {
      fw = e;
    }
    var Fa = null, rd = null, RD = function(e) {
      Fa = e;
    };
    function id(e) {
      {
        if (Fa === null)
          return e;
        var t = Fa(e);
        return t === void 0 ? e : t.current;
      }
    }
    function Nb(e) {
      return id(e);
    }
    function $b(e) {
      {
        if (Fa === null)
          return e;
        var t = Fa(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = id(e.render);
            if (e.render !== i) {
              var a = {
                $$typeof: oe,
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
    function Dw(e, t) {
      {
        if (Fa === null)
          return !1;
        var i = e.elementType, a = t.type, l = !1, c = typeof a == "object" && a !== null ? a.$$typeof : null;
        switch (e.tag) {
          case A: {
            typeof a == "function" && (l = !0);
            break;
          }
          case k: {
            (typeof a == "function" || c === Ye) && (l = !0);
            break;
          }
          case Fe: {
            (c === oe || c === Ye) && (l = !0);
            break;
          }
          case ut:
          case We: {
            (c === _t || c === Ye) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var v = Fa(i);
          if (v !== void 0 && v === Fa(a))
            return !0;
        }
        return !1;
      }
    }
    function Ow(e) {
      {
        if (Fa === null || typeof WeakSet != "function")
          return;
        rd === null && (rd = /* @__PURE__ */ new WeakSet()), rd.add(e);
      }
    }
    var xD = function(e, t) {
      {
        if (Fa === null)
          return;
        var i = t.staleFamilies, a = t.updatedFamilies;
        Fl(), Hl(function() {
          zb(e.current, a, i);
        });
      }
    }, kD = function(e, t) {
      {
        if (e.context !== ga)
          return;
        Fl(), Hl(function() {
          pv(t, e, null, null);
        });
      }
    };
    function zb(e, t, i) {
      {
        var a = e.alternate, l = e.child, c = e.sibling, v = e.tag, m = e.type, b = null;
        switch (v) {
          case k:
          case We:
          case A:
            b = m;
            break;
          case Fe:
            b = m.render;
            break;
        }
        if (Fa === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var w = !1, T = !1;
        if (b !== null) {
          var z = Fa(b);
          z !== void 0 && (i.has(z) ? T = !0 : t.has(z) && (v === A ? T = !0 : w = !0));
        }
        if (rd !== null && (rd.has(e) || a !== null && rd.has(a)) && (T = !0), T && (e._debugNeedsRemount = !0), T || w) {
          var N = ia(e, Ie);
          N !== null && kr(N, e, Ie, fn);
        }
        l !== null && !T && zb(l, t, i), c !== null && zb(c, t, i);
      }
    }
    var _D = function(e, t) {
      {
        var i = /* @__PURE__ */ new Set(), a = new Set(t.map(function(l) {
          return l.current;
        }));
        return Ub(e.current, a, i), i;
      }
    };
    function Ub(e, t, i) {
      {
        var a = e.child, l = e.sibling, c = e.tag, v = e.type, m = null;
        switch (c) {
          case k:
          case We:
          case A:
            m = v;
            break;
          case Fe:
            m = v.render;
            break;
        }
        var b = !1;
        m !== null && t.has(m) && (b = !0), b ? DD(e, i) : a !== null && Ub(a, t, i), l !== null && Ub(l, t, i);
      }
    }
    function DD(e, t) {
      {
        var i = OD(e, t);
        if (i)
          return;
        for (var a = e; ; ) {
          switch (a.tag) {
            case W:
              t.add(a.stateNode);
              return;
            case K:
              t.add(a.stateNode.containerInfo);
              return;
            case M:
              t.add(a.stateNode.containerInfo);
              return;
          }
          if (a.return === null)
            throw new Error("Expected to reach root first.");
          a = a.return;
        }
      }
    }
    function OD(e, t) {
      for (var i = e, a = !1; ; ) {
        if (i.tag === W)
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
    var Hb;
    {
      Hb = !1;
      try {
        var Lw = Object.preventExtensions({});
      } catch {
        Hb = !0;
      }
    }
    function LD(e, t, i, a) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = Ge, this.subtreeFlags = Ge, this.deletions = null, this.lanes = te, this.childLanes = te, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Hb && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ba = function(e, t, i, a) {
      return new LD(e, t, i, a);
    };
    function Fb(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function MD(e) {
      return typeof e == "function" && !Fb(e) && e.defaultProps === void 0;
    }
    function AD(e) {
      if (typeof e == "function")
        return Fb(e) ? A : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === oe)
          return Fe;
        if (t === _t)
          return ut;
      }
      return H;
    }
    function fc(e, t) {
      var i = e.alternate;
      i === null ? (i = ba(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = Ge, i.subtreeFlags = Ge, i.deletions = null, i.actualDuration = 0, i.actualStartTime = -1), i.flags = e.flags & yr, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var a = e.dependencies;
      switch (i.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case H:
        case k:
        case We:
          i.type = id(e.type);
          break;
        case A:
          i.type = Nb(e.type);
          break;
        case Fe:
          i.type = $b(e.type);
          break;
      }
      return i;
    }
    function ND(e, t) {
      e.flags &= yr | hn;
      var i = e.alternate;
      if (i === null)
        e.childLanes = te, e.lanes = t, e.child = null, e.subtreeFlags = Ge, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = Ge, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type;
        var a = i.dependencies;
        e.dependencies = a === null ? null : {
          lanes: a.lanes,
          firstContext: a.firstContext
        }, e.selfBaseDuration = i.selfBaseDuration, e.treeBaseDuration = i.treeBaseDuration;
      }
      return e;
    }
    function $D(e, t, i) {
      var a;
      return e === lm ? (a = je, t === !0 && (a |= xt, a |= Li)) : a = Ue, Oi && (a |= lt), ba(M, null, null, a);
    }
    function jb(e, t, i, a, l, c) {
      var v = H, m = e;
      if (typeof e == "function")
        Fb(e) ? (v = A, m = Nb(m)) : m = id(m);
      else if (typeof e == "string")
        v = W;
      else
        e: switch (e) {
          case Pr:
            return rs(i.children, l, c, t);
          case Fi:
            v = we, l |= xt, (l & je) !== Ue && (l |= Li);
            break;
          case xi:
            return zD(i, l, c, t);
          case ze:
            return UD(i, l, c, t);
          case Ct:
            return HD(i, l, c, t);
          case P:
            return Mw(i, l, c, t);
          case fe:
          case Et:
          case Qe:
          case It:
          case Hn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case D:
                  v = ge;
                  break e;
                case ne:
                  v = gt;
                  break e;
                case oe:
                  v = Fe, m = $b(m);
                  break e;
                case _t:
                  v = ut;
                  break e;
                case Ye:
                  v = Gt, m = null;
                  break e;
              }
            var b = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var w = a ? st(a) : null;
              w && (b += `

Check the render method of \`` + w + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + b));
          }
        }
      var T = ba(v, i, t, l);
      return T.elementType = e, T.type = m, T.lanes = c, T._debugOwner = a, T;
    }
    function Vb(e, t, i) {
      var a = null;
      a = e._owner;
      var l = e.type, c = e.key, v = e.props, m = jb(l, c, v, a, t, i);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function rs(e, t, i, a) {
      var l = ba(Be, e, a, t);
      return l.lanes = i, l;
    }
    function zD(e, t, i, a) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = ba(pt, e, a, t | lt);
      return l.elementType = xi, l.lanes = i, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function UD(e, t, i, a) {
      var l = ba(Oe, e, a, t);
      return l.elementType = ze, l.lanes = i, l;
    }
    function HD(e, t, i, a) {
      var l = ba(Nt, e, a, t);
      return l.elementType = Ct, l.lanes = i, l;
    }
    function Mw(e, t, i, a) {
      var l = ba(Pe, e, a, t);
      l.elementType = P, l.lanes = i;
      var c = {
        isHidden: !1
      };
      return l.stateNode = c, l;
    }
    function Pb(e, t, i) {
      var a = ba(ue, e, null, t);
      return a.lanes = i, a;
    }
    function FD() {
      var e = ba(W, null, null, Ue);
      return e.elementType = "DELETED", e;
    }
    function jD(e) {
      var t = ba(Ht, null, null, Ue);
      return t.stateNode = e, t;
    }
    function Ib(e, t, i) {
      var a = e.children !== null ? e.children : [], l = ba(K, a, e.key, t);
      return l.lanes = i, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function Aw(e, t) {
      return e === null && (e = ba(H, null, null, Ue)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function VD(e, t, i, a, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Tg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Yn, this.eventTimes = zs(te), this.expirationTimes = zs(fn), this.pendingLanes = te, this.suspendedLanes = te, this.pingedLanes = te, this.expiredLanes = te, this.mutableReadLanes = te, this.finishedLanes = te, this.entangledLanes = te, this.entanglements = zs(te), this.identifierPrefix = a, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var c = this.pendingUpdatersLaneMap = [], v = 0; v < Os; v++)
          c.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case lm:
          this._debugRootType = i ? "hydrateRoot()" : "createRoot()";
          break;
        case Bu:
          this._debugRootType = i ? "hydrate()" : "render()";
          break;
      }
    }
    function Nw(e, t, i, a, l, c, v, m, b, w) {
      var T = new VD(e, t, i, m, b), z = $D(t, c);
      T.current = z, z.stateNode = T;
      {
        var N = {
          element: a,
          isDehydrated: i,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = N;
      }
      return n0(z), T;
    }
    var Bb = "18.3.1";
    function PD(e, t, i) {
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
    var Wb, Yb;
    Wb = !1, Yb = {};
    function $w(e) {
      if (!e)
        return ga;
      var t = Bi(e), i = Tx(t);
      if (t.tag === A) {
        var a = t.type;
        if (Qo(a))
          return uE(t, a, i);
      }
      return i;
    }
    function ID(e, t) {
      {
        var i = Bi(e);
        if (i === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var a = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
        }
        var l = Gi(i);
        if (l === null)
          return null;
        if (l.mode & xt) {
          var c = st(i) || "Component";
          if (!Yb[c]) {
            Yb[c] = !0;
            var v = xn;
            try {
              Xt(l), i.mode & xt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c);
            } finally {
              v ? Xt(v) : Ln();
            }
          }
        }
        return l.stateNode;
      }
    }
    function zw(e, t, i, a, l, c, v, m) {
      var b = !1, w = null;
      return Nw(e, t, b, w, i, a, l, c, v);
    }
    function Uw(e, t, i, a, l, c, v, m, b, w) {
      var T = !0, z = Nw(i, a, T, e, l, c, v, m, b);
      z.context = $w(null);
      var N = z.current, B = $i(), G = ts(N), Z = Nl(B, G);
      return Z.callback = t ?? null, Qu(N, Z, G), K_(z, G, B), z;
    }
    function pv(e, t, i, a) {
      Bd(t, e);
      var l = t.current, c = $i(), v = ts(l);
      Qd(v);
      var m = $w(i);
      t.context === null ? t.context = m : t.pendingContext = m, oi && xn !== null && !Wb && (Wb = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, st(xn) || "Unknown"));
      var b = Nl(c, v);
      b.payload = {
        element: e
      }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), b.callback = a);
      var w = Qu(l, b, v);
      return w !== null && (kr(w, l, v, c), Cm(w, l, v)), v;
    }
    function fy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case W:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function BD(e) {
      switch (e.tag) {
        case M: {
          var t = e.stateNode;
          if (cf(t)) {
            var i = Kd(t);
            eD(t, i);
          }
          break;
        }
        case Oe: {
          Hl(function() {
            var l = ia(e, Ie);
            if (l !== null) {
              var c = $i();
              kr(l, e, Ie, c);
            }
          });
          var a = Ie;
          Qb(e, a);
          break;
        }
      }
    }
    function Hw(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && (i.retryLane = bh(i.retryLane, t));
    }
    function Qb(e, t) {
      Hw(e, t);
      var i = e.alternate;
      i && Hw(i, t);
    }
    function WD(e) {
      if (e.tag === Oe) {
        var t = Ms, i = ia(e, t);
        if (i !== null) {
          var a = $i();
          kr(i, e, t, a);
        }
        Qb(e, t);
      }
    }
    function YD(e) {
      if (e.tag === Oe) {
        var t = ts(e), i = ia(e, t);
        if (i !== null) {
          var a = $i();
          kr(i, e, t, a);
        }
        Qb(e, t);
      }
    }
    function Fw(e) {
      var t = th(e);
      return t === null ? null : t.stateNode;
    }
    var jw = function(e) {
      return null;
    };
    function QD(e) {
      return jw(e);
    }
    var Vw = function(e) {
      return !1;
    };
    function GD(e) {
      return Vw(e);
    }
    var Pw = null, Iw = null, Bw = null, Ww = null, Yw = null, Qw = null, Gw = null, qw = null, Kw = null;
    {
      var Xw = function(e, t, i) {
        var a = t[i], l = Mt(e) ? e.slice() : wt({}, e);
        return i + 1 === t.length ? (Mt(l) ? l.splice(a, 1) : delete l[a], l) : (l[a] = Xw(e[a], t, i + 1), l);
      }, Zw = function(e, t) {
        return Xw(e, t, 0);
      }, Jw = function(e, t, i, a) {
        var l = t[a], c = Mt(e) ? e.slice() : wt({}, e);
        if (a + 1 === t.length) {
          var v = i[a];
          c[v] = c[l], Mt(c) ? c.splice(l, 1) : delete c[l];
        } else
          c[l] = Jw(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            i,
            a + 1
          );
        return c;
      }, e1 = function(e, t, i) {
        if (t.length !== i.length) {
          R("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var a = 0; a < i.length - 1; a++)
            if (t[a] !== i[a]) {
              R("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Jw(e, t, i, 0);
      }, t1 = function(e, t, i, a) {
        if (i >= t.length)
          return a;
        var l = t[i], c = Mt(e) ? e.slice() : wt({}, e);
        return c[l] = t1(e[l], t, i + 1, a), c;
      }, n1 = function(e, t, i) {
        return t1(e, t, 0, i);
      }, Gb = function(e, t) {
        for (var i = e.memoizedState; i !== null && t > 0; )
          i = i.next, t--;
        return i;
      };
      Pw = function(e, t, i, a) {
        var l = Gb(e, t);
        if (l !== null) {
          var c = n1(l.memoizedState, i, a);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = wt({}, e.memoizedProps);
          var v = ia(e, Ie);
          v !== null && kr(v, e, Ie, fn);
        }
      }, Iw = function(e, t, i) {
        var a = Gb(e, t);
        if (a !== null) {
          var l = Zw(a.memoizedState, i);
          a.memoizedState = l, a.baseState = l, e.memoizedProps = wt({}, e.memoizedProps);
          var c = ia(e, Ie);
          c !== null && kr(c, e, Ie, fn);
        }
      }, Bw = function(e, t, i, a) {
        var l = Gb(e, t);
        if (l !== null) {
          var c = e1(l.memoizedState, i, a);
          l.memoizedState = c, l.baseState = c, e.memoizedProps = wt({}, e.memoizedProps);
          var v = ia(e, Ie);
          v !== null && kr(v, e, Ie, fn);
        }
      }, Ww = function(e, t, i) {
        e.pendingProps = n1(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ia(e, Ie);
        a !== null && kr(a, e, Ie, fn);
      }, Yw = function(e, t) {
        e.pendingProps = Zw(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ia(e, Ie);
        i !== null && kr(i, e, Ie, fn);
      }, Qw = function(e, t, i) {
        e.pendingProps = e1(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ia(e, Ie);
        a !== null && kr(a, e, Ie, fn);
      }, Gw = function(e) {
        var t = ia(e, Ie);
        t !== null && kr(t, e, Ie, fn);
      }, qw = function(e) {
        jw = e;
      }, Kw = function(e) {
        Vw = e;
      };
    }
    function qD(e) {
      var t = Gi(e);
      return t === null ? null : t.stateNode;
    }
    function KD(e) {
      return null;
    }
    function XD() {
      return xn;
    }
    function ZD(e) {
      var t = e.findFiberByHostInstance, i = p.ReactCurrentDispatcher;
      return Id({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Pw,
        overrideHookStateDeletePath: Iw,
        overrideHookStateRenamePath: Bw,
        overrideProps: Ww,
        overridePropsDeletePath: Yw,
        overridePropsRenamePath: Qw,
        setErrorHandler: qw,
        setSuspenseHandler: Kw,
        scheduleUpdate: Gw,
        currentDispatcherRef: i,
        findHostInstanceByFiber: qD,
        findFiberByHostInstance: t || KD,
        // React Refresh
        findHostInstancesForRefresh: _D,
        scheduleRefresh: xD,
        scheduleRoot: kD,
        setRefreshHandler: RD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: XD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: Bb
      });
    }
    var r1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function qb(e) {
      this._internalRoot = e;
    }
    dy.prototype.render = qb.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : py(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var i = t.containerInfo;
        if (i.nodeType !== Bn) {
          var a = Fw(t.current);
          a && a.parentNode !== i && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      pv(e, t, null, null);
    }, dy.prototype.unmount = qb.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        hw() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Hl(function() {
          pv(null, e, null, null);
        }), rE(t);
      }
    };
    function JD(e, t) {
      if (!py(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      i1(e);
      var i = !1, a = !1, l = "", c = r1;
      t != null && (t.hydrate ? R("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === bn && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = zw(e, lm, null, i, a, l, c);
      em(v.current, e);
      var m = e.nodeType === Bn ? e.parentNode : e;
      return bp(m), new qb(v);
    }
    function dy(e) {
      this._internalRoot = e;
    }
    function eO(e) {
      e && Xy(e);
    }
    dy.prototype.unstable_scheduleHydration = eO;
    function tO(e, t, i) {
      if (!py(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      i1(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var a = i ?? null, l = i != null && i.hydratedSources || null, c = !1, v = !1, m = "", b = r1;
      i != null && (i.unstable_strictMode === !0 && (c = !0), i.identifierPrefix !== void 0 && (m = i.identifierPrefix), i.onRecoverableError !== void 0 && (b = i.onRecoverableError));
      var w = Uw(t, null, e, lm, a, c, v, m, b);
      if (em(w.current, e), bp(e), l)
        for (var T = 0; T < l.length; T++) {
          var z = l[T];
          ak(w, z);
        }
      return new dy(w);
    }
    function py(e) {
      return !!(e && (e.nodeType === ui || e.nodeType === va || e.nodeType === al || !X));
    }
    function vv(e) {
      return !!(e && (e.nodeType === ui || e.nodeType === va || e.nodeType === al || e.nodeType === Bn && e.nodeValue === " react-mount-point-unstable "));
    }
    function i1(e) {
      e.nodeType === ui && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Op(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var nO = p.ReactCurrentOwner, a1;
    a1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Bn) {
        var t = Fw(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, a = Kb(e), l = !!(a && Pu(a));
      l && !i && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ui && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Kb(e) {
      return e ? e.nodeType === va ? e.documentElement : e.firstChild : null;
    }
    function o1() {
    }
    function rO(e, t, i, a, l) {
      if (l) {
        if (typeof a == "function") {
          var c = a;
          a = function() {
            var N = fy(v);
            c.call(N);
          };
        }
        var v = Uw(
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
          o1
        );
        e._reactRootContainer = v, em(v.current, e);
        var m = e.nodeType === Bn ? e.parentNode : e;
        return bp(m), Hl(), v;
      } else {
        for (var b; b = e.lastChild; )
          e.removeChild(b);
        if (typeof a == "function") {
          var w = a;
          a = function() {
            var N = fy(T);
            w.call(N);
          };
        }
        var T = zw(
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
          o1
        );
        e._reactRootContainer = T, em(T.current, e);
        var z = e.nodeType === Bn ? e.parentNode : e;
        return bp(z), Hl(function() {
          pv(t, T, i, a);
        }), T;
      }
    }
    function iO(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function vy(e, t, i, a, l) {
      a1(i), iO(l === void 0 ? null : l, "render");
      var c = i._reactRootContainer, v;
      if (!c)
        v = rO(i, t, e, l, a);
      else {
        if (v = c, typeof l == "function") {
          var m = l;
          l = function() {
            var b = fy(v);
            m.call(b);
          };
        }
        pv(t, v, e, l);
      }
      return fy(v);
    }
    var l1 = !1;
    function aO(e) {
      {
        l1 || (l1 = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = nO.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Lt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ui ? e : ID(e, "findDOMNode");
    }
    function oO(e, t, i) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Op(t) && t._reactRootContainer === void 0;
        a && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return vy(null, e, t, !0, i);
    }
    function lO(e, t, i) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Op(t) && t._reactRootContainer === void 0;
        a && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return vy(null, e, t, !1, i);
    }
    function uO(e, t, i, a) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vv(i))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ws(e))
        throw new Error("parentComponent must be a valid React Component");
      return vy(e, t, i, !1, a);
    }
    var u1 = !1;
    function sO(e) {
      if (u1 || (u1 = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !vv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Op(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = Kb(e), a = i && !Pu(i);
          a && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Hl(function() {
          vy(null, null, e, !1, function() {
            e._reactRootContainer = null, rE(e);
          });
        }), !0;
      } else {
        {
          var l = Kb(e), c = !!(l && Pu(l)), v = e.nodeType === ui && vv(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    _u(BD), qy(WD), df(YD), Ch(Zi), wh(Hr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Zv(fR), _c(kb, tD, Hl);
    function cO(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!py(t))
        throw new Error("Target container is not a DOM element.");
      return PD(e, t, null, i);
    }
    function fO(e, t, i, a) {
      return uO(e, t, i, a);
    }
    var Xb = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Pu, $f, tm, kc, Ss, kb]
    };
    function dO(e, t) {
      return Xb.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), JD(e, t);
    }
    function pO(e, t, i) {
      return Xb.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), tO(e, t, i);
    }
    function vO(e) {
      return hw() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Hl(e);
    }
    var hO = ZD({
      findFiberByHostInstance: Ks,
      bundleType: 1,
      version: Bb,
      rendererPackageName: "react-dom"
    });
    if (!hO && dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var s1 = window.location.protocol;
      /^(https?|file):$/.test(s1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (s1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    sa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xb, sa.createPortal = cO, sa.createRoot = dO, sa.findDOMNode = aO, sa.flushSync = vO, sa.hydrate = oO, sa.hydrateRoot = pO, sa.render = lO, sa.unmountComponentAtNode = sO, sa.unstable_batchedUpdates = kb, sa.unstable_renderSubtreeIntoContainer = fO, sa.version = Bb, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), sa;
}
function mT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mT);
    } catch (f) {
      console.error(f);
    }
  }
}
process.env.NODE_ENV === "production" ? (mT(), gS.exports = qL()) : gS.exports = KL();
var XL = gS.exports;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ZL = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}", JL = ZL, eM = /* @__PURE__ */ dd(class extends fd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.type = "bounded";
  }
  /**
   * Adds the ripple effect to the parent element.
   *
   * @param x The horizontal coordinate of where the ripple should start.
   * @param y The vertical coordinate of where the ripple should start.
   */
  async addRipple(u, p) {
    return new Promise((y) => {
      NO(() => {
        const E = this.el.getBoundingClientRect(), R = E.width, g = E.height, L = Math.sqrt(R * R + g * g), k = Math.max(g, R), A = this.unbounded ? k : L + nM, H = Math.floor(k * rM), M = A / H;
        let K = u - E.left, W = p - E.top;
        this.unbounded && (K = R * 0.5, W = g * 0.5);
        const ue = K - H * 0.5, Be = W - H * 0.5, we = R * 0.5 - K, gt = g * 0.5 - W;
        wS(() => {
          const ge = document.createElement("div");
          ge.classList.add("ripple-effect");
          const Fe = ge.style;
          Fe.top = Be + "px", Fe.left = ue + "px", Fe.width = Fe.height = H + "px", Fe.setProperty("--final-scale", `${M}`), Fe.setProperty("--translate-end", `${we}px, ${gt}px`), (this.el.shadowRoot || this.el).appendChild(ge), setTimeout(() => {
            y(() => {
              tM(ge);
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
    return Hi(wv, { key: "2302f087ab1c6755355736e4ca77309c5fdcf185", role: "presentation", class: {
      [u]: !0,
      unbounded: this.unbounded
    } });
  }
  get el() {
    return this;
  }
  static get style() {
    return JL;
  }
}, [1, "ion-ripple-effect", {
  type: [1],
  addRipple: [64]
}]), tM = (f) => {
  f.classList.add("fade-out"), setTimeout(() => {
    f.remove();
  }, 200);
}, nM = 10, rM = 0.5;
function iM() {
  if (typeof customElements > "u")
    return;
  ["ion-ripple-effect"].forEach((u) => {
    switch (u) {
      case "ion-ripple-effect":
        customElements.get(u) || customElements.define(u, eM);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const by = typeof window < "u" ? window : void 0;
by && (by.CSS && by.CSS.supports && by.CSS.supports("--a: 0"));
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const aM = () => {
  if (Ti !== void 0)
    return Ti.Capacitor;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const oM = () => {
  let f;
  return {
    lock: async () => {
      const p = f;
      let y;
      return f = new Promise((E) => y = E), p !== void 0 && await p, y;
    }
  };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var bS;
(function(f) {
  f.Unimplemented = "UNIMPLEMENTED", f.Unavailable = "UNAVAILABLE";
})(bS || (bS = {}));
var SS;
(function(f) {
  f.Body = "body", f.Ionic = "ionic", f.Native = "native", f.None = "none";
})(SS || (SS = {}));
const lM = {
  getEngine() {
    const f = aM();
    if (f != null && f.isPluginAvailable("Keyboard"))
      return f.Plugins.Keyboard;
  },
  getResizeMode() {
    const f = this.getEngine();
    return f != null && f.getResizeMode ? f.getResizeMode().catch((u) => {
      if (u.code !== bS.Unimplemented)
        throw u;
    }) : Promise.resolve(void 0);
  }
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const yT = (f) => {
  if (Zb === void 0 || f === SS.None || f === void 0)
    return null;
  const u = Zb.querySelector("ion-app");
  return u ?? Zb.body;
}, N1 = (f) => {
  const u = yT(f);
  return u === null ? 0 : u.clientHeight;
}, uM = async (f) => {
  let u, p, y, E;
  const R = async () => {
    const H = await lM.getResizeMode(), M = H === void 0 ? void 0 : H.mode;
    u = () => {
      E === void 0 && (E = N1(M)), y = !0, g(y, M);
    }, p = () => {
      y = !1, g(y, M);
    }, Ti == null || Ti.addEventListener("keyboardWillShow", u), Ti == null || Ti.addEventListener("keyboardWillHide", p);
  }, g = (H, M) => {
    f && f(H, L(M));
  }, L = (H) => {
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
      E === N1(H)
    )
      return;
    const M = yT(H);
    if (M !== null)
      return new Promise((K) => {
        const W = () => {
          M.clientHeight === E && (ue.disconnect(), K());
        }, ue = new ResizeObserver(W);
        ue.observe(M);
      });
  }, k = () => {
    Ti == null || Ti.removeEventListener("keyboardWillShow", u), Ti == null || Ti.removeEventListener("keyboardWillHide", p), u = p = void 0;
  }, A = () => y;
  return await R(), { init: R, destroy: k, isKeyboardVisible: A };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const gT = 1, bT = 2, ky = 3;
class ES {
  constructor(u, p) {
    this.component = u, this.params = p, this.state = gT;
  }
  async init(u) {
    if (this.state = bT, !this.element) {
      const p = this.component;
      this.element = await vT(this.delegate, u, p, ["ion-page", "ion-page-invisible"], this.params);
    }
  }
  /**
   * DOM WRITE
   */
  _destroy() {
    ca(this.state !== ky, "view state must be ATTACHED");
    const u = this.element;
    u && (this.delegate ? this.delegate.removeViewFromDom(u.parentElement, u) : u.remove()), this.nav = void 0, this.state = ky;
  }
}
const $1 = (f, u, p) => !f || f.component !== u ? !1 : oT(f.params, p), z1 = (f, u) => f ? f instanceof ES ? f : new ES(f, u) : null, sM = (f) => f.map((u) => u instanceof ES ? u : "component" in u ? z1(u.component, u.componentProps === null ? void 0 : u.componentProps) : z1(u, void 0)).filter((u) => u !== null), cM = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}", fM = cM, dM = /* @__PURE__ */ dd(class extends fd {
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
    this.didLoad = !0, this.rootChanged(), this.gesture = (await import("./swipe-back-By8G0WOK.js")).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this)), this.swipeGestureChanged();
  }
  connectedCallback() {
    this.destroyed = !1;
  }
  disconnectedCallback() {
    for (const u of this.views)
      Pl(u.element, tS), u._destroy();
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
  push(u, p, y, E) {
    return this.insert(-1, u, p, y, E);
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
  insert(u, p, y, E, R) {
    return this.insertPages(u, [{ component: p, componentProps: y }], E, R);
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
  insertPages(u, p, y, E) {
    return this.queueTrns({
      insertStart: u,
      insertViews: p,
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
  pop(u, p) {
    return this.removeIndex(-1, 1, u, p);
  }
  /**
   * Pop to a specific index in the navigation stack.
   *
   * @param indexOrViewCtrl The index or view controller to pop to.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popTo(u, p, y) {
    const E = {
      removeStart: -1,
      removeCount: -1,
      opts: p
    };
    return typeof u == "object" && u.component ? (E.removeView = u, E.removeStart = 1) : typeof u == "number" && (E.removeStart = u + 1), this.queueTrns(E, y);
  }
  /**
   * Navigate back to the root of the stack, no matter how far back that is.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popToRoot(u, p) {
    return this.removeIndex(1, -1, u, p);
  }
  /**
   * Removes a component from the navigation stack at the specified index.
   *
   * @param startIndex The number to begin removal at.
   * @param removeCount The number of components to remove.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  removeIndex(u, p = 1, y, E) {
    return this.queueTrns({
      removeStart: u,
      removeCount: p,
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
  setRoot(u, p, y, E) {
    return this.setPages([{ component: u, componentProps: p }], y, E);
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
  setPages(u, p, y) {
    return p ?? (p = {}), p.animated !== !0 && (p.animated = !1), this.queueTrns({
      insertStart: 0,
      insertViews: u,
      removeStart: 0,
      removeCount: -1,
      opts: p
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
  setRouteId(u, p, y, E) {
    const R = this.getActiveSync();
    if ($1(R, u, p))
      return Promise.resolve({
        changed: !1,
        element: R.element
      });
    let g;
    const L = new Promise((H) => g = H);
    let k;
    const A = {
      updateURL: !1,
      viewIsReady: (H) => {
        let M;
        const K = new Promise((W) => M = W);
        return g({
          changed: !0,
          element: H,
          markVisible: async () => {
            M(), await k;
          }
        }), K;
      }
    };
    if (y === "root")
      k = this.setRoot(u, p, A);
    else {
      const H = this.views.find((M) => $1(M, u, p));
      H ? k = this.popTo(H, Object.assign(Object.assign({}, A), { direction: "back", animationBuilder: E })) : y === "forward" ? k = this.push(u, p, Object.assign(Object.assign({}, A), { animationBuilder: E })) : y === "back" && (k = this.setRoot(u, p, Object.assign(Object.assign({}, A), { direction: "back", animated: !0, animationBuilder: E })));
    }
    return L;
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
    const p = this.views, y = p.indexOf(u);
    return y > 0 ? p[y - 1] : void 0;
  }
  /**
   * Adds a navigation stack change to the queue and schedules it to run.
   *
   * @returns Whether the transition succeeds.
   */
  async queueTrns(u, p) {
    var y, E;
    if (this.isTransitioning && (!((y = u.opts) === null || y === void 0) && y.skipIfBusy))
      return !1;
    const R = new Promise((g, L) => {
      u.resolve = g, u.reject = L;
    });
    if (u.done = p, u.opts && u.opts.updateURL !== !1 && this.useRouter) {
      const g = document.querySelector("ion-router");
      if (g) {
        const L = await g.canTransition();
        if (L === !1)
          return !1;
        if (typeof L == "string")
          return g.push(L, u.opts.direction || "back"), !1;
      }
    }
    return ((E = u.insertViews) === null || E === void 0 ? void 0 : E.length) === 0 && (u.insertViews = void 0), this.transInstr.push(u), this.nextTrns(), R;
  }
  success(u, p) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", p);
      return;
    }
    if (p.done && p.done(u.hasCompleted, u.requiresTransition, u.enteringView, u.leavingView, u.direction), p.resolve(u.hasCompleted), p.opts.updateURL !== !1 && this.useRouter) {
      const y = document.querySelector("ion-router");
      if (y) {
        const E = u.direction === "back" ? "back" : "forward";
        y.navChanged(E);
      }
    }
  }
  failed(u, p) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", p);
      return;
    }
    this.transInstr.length = 0, this.fireError(u, p);
  }
  fireError(u, p) {
    p.done && p.done(!1, !1, u), p.reject && !this.destroyed ? p.reject(u) : p.resolve(!1);
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
      const p = this.getActiveSync(), y = this.getEnteringView(u, p);
      if (!p && !y)
        throw new Error("no views in the stack to be removed");
      y && y.state === gT && await y.init(this.el), this.postViewInit(y, p, u);
      const E = (u.enteringRequiresTransition || u.leavingRequiresTransition) && y !== p;
      E && u.opts && p && (u.opts.direction === "back" && (u.opts.animationBuilder = u.opts.animationBuilder || (y == null ? void 0 : y.animationBuilder)), p.animationBuilder = u.opts.animationBuilder);
      let R;
      E ? R = await this.transition(y, p, u) : R = {
        hasCompleted: !0,
        requiresTransition: !1
      }, this.success(R, u), this.ionNavDidChange.emit();
    } catch (p) {
      this.failed(p, u);
    }
    this.isTransitioning = !1, this.nextTrns();
  }
  prepareTI(u) {
    var p, y, E;
    const R = this.views.length;
    if ((p = u.opts) !== null && p !== void 0 || (u.opts = {}), (y = (E = u.opts).delegate) !== null && y !== void 0 || (E.delegate = this.delegate), u.removeView !== void 0) {
      ca(u.removeStart !== void 0, "removeView needs removeStart"), ca(u.removeCount !== void 0, "removeView needs removeCount");
      const k = this.views.indexOf(u.removeView);
      if (k < 0)
        throw new Error("removeView was not found");
      u.removeStart += k;
    }
    u.removeStart !== void 0 && (u.removeStart < 0 && (u.removeStart = R - 1), u.removeCount < 0 && (u.removeCount = R - u.removeStart), u.leavingRequiresTransition = u.removeCount > 0 && u.removeStart + u.removeCount === R), u.insertViews && ((u.insertStart < 0 || u.insertStart > R) && (u.insertStart = R), u.enteringRequiresTransition = u.insertStart === R);
    const g = u.insertViews;
    if (!g)
      return;
    ca(g.length > 0, "length can not be zero");
    const L = sM(g);
    if (L.length === 0)
      throw new Error("invalid views to insert");
    for (const k of L) {
      k.delegate = u.opts.delegate;
      const A = k.nav;
      if (A && A !== this)
        throw new Error("inserted view was already inserted");
      if (k.state === ky)
        throw new Error("inserted view was already destroyed");
    }
    u.insertViews = L;
  }
  /**
   * Returns the view that will be entered considering the transition instructions.
   *
   * @param ti The instructions.
   * @param leavingView The view being left or undefined if none.
   *
   * @returns The view that will be entered, undefined if none.
   */
  getEnteringView(u, p) {
    const y = u.insertViews;
    if (y !== void 0)
      return y[y.length - 1];
    const E = u.removeStart;
    if (E !== void 0) {
      const R = this.views, g = E + u.removeCount;
      for (let L = R.length - 1; L >= 0; L--) {
        const k = R[L];
        if ((L < E || L >= g) && k !== p)
          return k;
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
  postViewInit(u, p, y) {
    var E, R, g;
    ca(p || u, "Both leavingView and enteringView are null"), ca(y.resolve, "resolve must be valid"), ca(y.reject, "reject must be valid");
    const L = y.opts, { insertViews: k, removeStart: A, removeCount: H } = y;
    let M;
    if (A !== void 0 && H !== void 0) {
      ca(A >= 0, "removeStart can not be negative"), ca(H >= 0, "removeCount can not be negative"), M = [];
      for (let W = A; W < A + H; W++) {
        const ue = this.views[W];
        ue !== void 0 && ue !== u && ue !== p && M.push(ue);
      }
      (E = L.direction) !== null && E !== void 0 || (L.direction = "back");
    }
    const K = this.views.length + ((R = k == null ? void 0 : k.length) !== null && R !== void 0 ? R : 0) - (H ?? 0);
    if (ca(K >= 0, "final balance can not be negative"), K === 0)
      throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el), new Error("navigation stack needs at least one root page");
    if (k) {
      let W = y.insertStart;
      for (const ue of k)
        this.insertViewAt(ue, W), W++;
      y.enteringRequiresTransition && ((g = L.direction) !== null && g !== void 0 || (L.direction = "forward"));
    }
    if (M && M.length > 0) {
      for (const W of M)
        Pl(W.element, lT), Pl(W.element, uT), Pl(W.element, tS);
      for (const W of M)
        this.destroyView(W);
    }
  }
  async transition(u, p, y) {
    const E = y.opts, R = E.progressAnimation ? (M) => {
      M !== void 0 && !this.gestureOrAnimationInProgress ? (this.gestureOrAnimationInProgress = !0, M.onFinish(() => {
        this.gestureOrAnimationInProgress = !1;
      }, { oneTimeCallback: !0 }), M.progressEnd(0, 0, 0)) : this.sbAni = M;
    } : void 0, g = cd(this), L = u.element, k = p && p.element, A = Object.assign(Object.assign({
      mode: g,
      showGoBack: this.canGoBackSync(u),
      baseEl: this.el,
      progressCallback: R,
      animated: this.animated && Bl.getBoolean("animated", !0),
      enteringEl: L,
      leavingEl: k
    }, E), { animationBuilder: E.animationBuilder || this.animation || Bl.get("navAnimation") }), { hasCompleted: H } = await cT(A);
    return this.transitionFinish(H, u, p, E);
  }
  transitionFinish(u, p, y, E) {
    const R = u ? p : y;
    return R && this.unmountInactiveViews(R), {
      hasCompleted: u,
      requiresTransition: !0,
      enteringView: p,
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
  insertViewAt(u, p) {
    const y = this.views, E = y.indexOf(u);
    E > -1 ? (ca(u.nav === this, "view is not part of the nav"), y.splice(E, 1), y.splice(p, 0, u)) : (ca(!u.nav, "nav is used"), u.nav = this, y.splice(p, 0, u));
  }
  /**
   * Removes a view from the stack.
   *
   * @param view The view to remove.
   */
  removeView(u) {
    ca(u.state === bT || u.state === ky, "view state should be loaded or destroyed");
    const p = this.views, y = p.indexOf(u);
    ca(y > -1, "view must be part of the stack"), y >= 0 && p.splice(y, 1);
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
    const p = this.views, y = p.indexOf(u);
    for (let E = p.length - 1; E >= 0; E--) {
      const R = p[E], g = R.element;
      g && (E > y ? (Pl(g, tS), this.destroyView(R)) : E < y && yS(g, !0));
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
  onEnd(u, p, y) {
    if (this.sbAni) {
      this.sbAni.onFinish(() => {
        this.gestureOrAnimationInProgress = !1;
      }, { oneTimeCallback: !0 });
      let E = u ? -1e-3 : 1e-3;
      u ? E += xy([0, 0], [0.32, 0.72], [0, 1], [1, 1], p)[0] : (this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"), E += xy([0, 0], [1, 0], [0.68, 0.28], [1, 1], p)[0]), this.sbAni.progressEnd(u ? 1 : 0, E, y);
    } else
      this.gestureOrAnimationInProgress = !1;
  }
  render() {
    return Hi("slot", { key: "e9d99a8a0b84f02f9964d8143cd5e647e43334f9" });
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
    return fM;
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
function pM() {
  if (typeof customElements > "u")
    return;
  ["ion-nav"].forEach((u) => {
    switch (u) {
      case "ion-nav":
        customElements.get(u) || customElements.define(u, dM);
        break;
    }
  });
}
const vM = pM;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var U1;
(function(f) {
  f.Dark = "DARK", f.Light = "LIGHT", f.Default = "DEFAULT";
})(U1 || (U1 = {}));
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const hM = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}", mM = hM, yM = /* @__PURE__ */ dd(class extends fd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = Il(this, "ionNavWillLoad", 7), this.ionNavWillChange = Il(this, "ionNavWillChange", 3), this.ionNavDidChange = Il(this, "ionNavDidChange", 3), this.lockController = oM(), this.gestureOrAnimationInProgress = !1, this.mode = cd(this), this.delegate = void 0, this.animated = !0, this.animation = void 0, this.swipeHandler = void 0;
  }
  swipeHandlerChanged() {
    this.gesture && this.gesture.enable(this.swipeHandler !== void 0);
  }
  async connectedCallback() {
    const u = () => {
      this.gestureOrAnimationInProgress = !0, this.swipeHandler && this.swipeHandler.onStart();
    };
    this.gesture = (await import("./swipe-back-By8G0WOK.js")).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => u(), (p) => {
      var y;
      return (y = this.ani) === null || y === void 0 ? void 0 : y.progressStep(p);
    }, (p, y, E) => {
      if (this.ani) {
        this.ani.onFinish(() => {
          this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(p);
        }, { oneTimeCallback: !0 });
        let R = p ? -1e-3 : 1e-3;
        p ? R += xy([0, 0], [0.32, 0.72], [0, 1], [1, 1], y)[0] : (this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"), R += xy([0, 0], [1, 0], [0.68, 0.28], [1, 1], y)[0]), this.ani.progressEnd(p ? 1 : 0, R, E);
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
  async commit(u, p, y) {
    const E = await this.lockController.lock();
    let R = !1;
    try {
      R = await this.transition(u, p, y);
    } catch (g) {
      console.error(g);
    }
    return E(), R;
  }
  /** @internal */
  async setRouteId(u, p, y, E) {
    return {
      changed: await this.setRoot(u, p, {
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
  async setRoot(u, p, y) {
    if (this.activeComponent === u && oT(p, this.activeParams))
      return !1;
    const E = this.activeEl, R = await vT(this.delegate, this.el, u, ["ion-page", "ion-page-invisible"], p);
    return this.activeComponent = u, this.activeEl = R, this.activeParams = p, await this.commit(R, E, y), await YL(this.delegate, E), !0;
  }
  async transition(u, p, y = {}) {
    if (p === u)
      return !1;
    this.ionNavWillChange.emit();
    const { el: E, mode: R } = this, g = this.animated && Bl.getBoolean("animated", !0), L = y.animationBuilder || this.animation || Bl.get("navAnimation");
    return await cT(Object.assign(Object.assign({
      mode: R,
      animated: g,
      enteringEl: u,
      leavingEl: p,
      baseEl: E,
      /**
       * We need to wait for all Stencil components
       * to be ready only when using the lazy
       * loaded bundle.
       */
      deepWait: xL(E),
      progressCallback: y.progressAnimation ? (k) => {
        k !== void 0 && !this.gestureOrAnimationInProgress ? (this.gestureOrAnimationInProgress = !0, k.onFinish(() => {
          this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(!1);
        }, { oneTimeCallback: !0 }), k.progressEnd(0, 0, 0)) : this.ani = k;
      } : void 0
    }, y), { animationBuilder: L })), this.ionNavDidChange.emit(), !0;
  }
  render() {
    return Hi("slot", { key: "8279a453c66a766e6e383ff59842b4ae070c13a9" });
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
    return mM;
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
function gM() {
  if (typeof customElements > "u")
    return;
  ["ion-router-outlet"].forEach((u) => {
    switch (u) {
      case "ion-router-outlet":
        customElements.get(u) || customElements.define(u, yM);
        break;
    }
  });
}
const bM = gM;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const SM = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}", EM = SM, CM = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.07)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, var(--ion-text-color-step-350, #595959)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:56px}", wM = CM, TM = /* @__PURE__ */ dd(class extends fd {
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
    this.keyboardCtrl = await uM(async (u, p) => {
      u === !1 && p !== void 0 && await p, this.keyboardVisible = u;
    });
  }
  disconnectedCallback() {
    this.keyboardCtrl && this.keyboardCtrl.destroy();
  }
  componentDidLoad() {
    this.ionTabBarLoaded.emit();
  }
  render() {
    const { color: u, translucent: p, keyboardVisible: y } = this, E = cd(this), R = y && this.el.getAttribute("slot") !== "top";
    return Hi(wv, { key: "3a8595dd83f89e8319471a7a7f9f64b2565b384c", role: "tablist", "aria-hidden": R ? "true" : null, class: WL(u, {
      [E]: !0,
      "tab-bar-translucent": p,
      "tab-bar-hidden": R
    }) }, Hi("slot", { key: "8b65eceb922f6abfa15f41046261586fb94b981f" }));
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
      ios: EM,
      md: wM
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
function RM() {
  if (typeof customElements > "u")
    return;
  ["ion-tab-bar"].forEach((u) => {
    switch (u) {
      case "ion-tab-bar":
        customElements.get(u) || customElements.define(u, TM);
        break;
    }
  });
}
const xM = RM;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const kM = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:24px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){font-size:30px}', _M = kM, DM = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}', OM = DM, LM = /* @__PURE__ */ dd(class extends fd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionTabButtonClick = Il(this, "ionTabButtonClick", 7), this.inheritedAttributes = {}, this.onKeyUp = (u) => {
      (u.key === "Enter" || u.key === " ") && this.selectTab(u);
    }, this.onClick = (u) => {
      this.selectTab(u);
    }, this.disabled = !1, this.download = void 0, this.href = void 0, this.rel = void 0, this.layout = void 0, this.selected = !1, this.tab = void 0, this.target = void 0;
  }
  onTabBarChanged(u) {
    const p = u.target, y = this.el.parentElement;
    (u.composedPath().includes(y) || p != null && p.contains(this.el)) && (this.selected = this.tab === u.detail.tab);
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign({}, kL(this.el, ["aria-label"])), this.layout === void 0 && (this.layout = Bl.get("tabButtonLayout", "icon-top"));
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
    const { disabled: u, hasIcon: p, hasLabel: y, href: E, rel: R, target: g, layout: L, selected: k, tab: A, inheritedAttributes: H } = this, M = cd(this), K = {
      download: this.download,
      href: E,
      rel: R,
      target: g
    };
    return Hi(wv, { key: "4b528ce31f67e10ad849e0c99bd034bba675c227", onClick: this.onClick, onKeyup: this.onKeyUp, id: A !== void 0 ? `tab-button-${A}` : null, class: {
      [M]: !0,
      "tab-selected": k,
      "tab-disabled": u,
      "tab-has-label": y,
      "tab-has-icon": p,
      "tab-has-label-only": y && !p,
      "tab-has-icon-only": p && !y,
      [`tab-layout-${L}`]: !0,
      "ion-activatable": !0,
      "ion-selectable": !0,
      "ion-focusable": !0
    } }, Hi("a", Object.assign({ key: "0da8784b1b243ffaaaf04dd7adb55d6881ed0c08" }, K, { class: "button-native", part: "native", role: "tab", "aria-selected": k ? "true" : null, "aria-disabled": u ? "true" : null, tabindex: u ? "-1" : void 0 }, H), Hi("span", { key: "2c628e8f1ebc129f84876c01530468cb97d8bf3a", class: "button-inner" }, Hi("slot", { key: "8052a171d197a7de1a7eb12b091c35f73ae1ee21" })), M === "md" && Hi("ion-ripple-effect", { key: "4186bdb5ed045ec16f495a14fa30ac864c576227", type: "unbounded" })));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: _M,
      md: OM
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
function MM() {
  if (typeof customElements > "u")
    return;
  ["ion-tab-button", "ion-ripple-effect"].forEach((u) => {
    switch (u) {
      case "ion-tab-button":
        customElements.get(u) || customElements.define(u, LM);
        break;
      case "ion-ripple-effect":
        customElements.get(u) || iM();
        break;
    }
  });
}
const AM = MM;
let iS;
const NM = () => {
  if (typeof window > "u")
    return /* @__PURE__ */ new Map();
  if (!iS) {
    const f = window;
    f.Ionicons = f.Ionicons || {}, iS = f.Ionicons.map = f.Ionicons.map || /* @__PURE__ */ new Map();
  }
  return iS;
}, $M = (f) => {
  let u = aS(f.src);
  return u || (u = ST(f.name, f.icon, f.mode, f.ios, f.md), u ? zM(u, f) : f.icon && (u = aS(f.icon), u || (u = aS(f.icon[f.mode]), u)) ? u : null);
}, zM = (f, u) => {
  const p = NM().get(f);
  if (p)
    return p;
  try {
    return $O(`svg/${f}.svg`);
  } catch {
    console.warn(`[Ionicons Warning]: Could not load icon with name "${f}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, u);
  }
}, ST = (f, u, p, y, E) => (p = (p && Sy(p)) === "ios" ? "ios" : "md", y && p === "ios" ? f = Sy(y) : E && p === "md" ? f = Sy(E) : (!f && u && !ET(u) && (f = u), _y(f) && (f = Sy(f))), !_y(f) || f.trim() === "" || f.replace(/[a-z]|-|\d/gi, "") !== "" ? null : f), aS = (f) => _y(f) && (f = f.trim(), ET(f)) ? f : null, ET = (f) => f.length > 0 && /(\/|\.)/.test(f), _y = (f) => typeof f == "string", Sy = (f) => f.toLowerCase(), UM = (f, u = []) => {
  const p = {};
  return u.forEach((y) => {
    f.hasAttribute(y) && (f.getAttribute(y) !== null && (p[y] = f.getAttribute(y)), f.removeAttribute(y));
  }), p;
}, HM = (f) => f && f.dir !== "" ? f.dir.toLowerCase() === "rtl" : (document == null ? void 0 : document.dir.toLowerCase()) === "rtl", FM = (f) => {
  const u = document.createElement("div");
  u.innerHTML = f;
  for (let y = u.childNodes.length - 1; y >= 0; y--)
    u.childNodes[y].nodeName.toLowerCase() !== "svg" && u.removeChild(u.childNodes[y]);
  const p = u.firstElementChild;
  if (p && p.nodeName.toLowerCase() === "svg") {
    const y = p.getAttribute("class") || "";
    if (p.setAttribute("class", (y + " s-ion-icon").trim()), CT(p))
      return u.innerHTML;
  }
  return "";
}, CT = (f) => {
  if (f.nodeType === 1) {
    if (f.nodeName.toLowerCase() === "script")
      return !1;
    for (let u = 0; u < f.attributes.length; u++) {
      const p = f.attributes[u].name;
      if (_y(p) && p.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let u = 0; u < f.childNodes.length; u++)
      if (!CT(f.childNodes[u]))
        return !1;
  }
  return !0;
}, jM = (f) => f.startsWith("data:image/svg+xml"), VM = (f) => f.indexOf(";utf8,") !== -1, dc = /* @__PURE__ */ new Map(), H1 = /* @__PURE__ */ new Map();
let oS;
const PM = (f, u) => {
  let p = H1.get(f);
  if (!p)
    if (typeof fetch < "u" && typeof document < "u")
      if (jM(f) && VM(f)) {
        oS || (oS = new DOMParser());
        const E = oS.parseFromString(f, "text/html").querySelector("svg");
        return E && dc.set(f, E.outerHTML), Promise.resolve();
      } else
        p = fetch(f).then((y) => {
          if (y.ok)
            return y.text().then((E) => {
              E && u !== !1 && (E = FM(E)), dc.set(f, E || "");
            });
          dc.set(f, "");
        }), H1.set(f, p);
    else
      return dc.set(f, ""), Promise.resolve();
  return p;
}, IM = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}", BM = /* @__PURE__ */ dd(class extends fd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.didLoadIcon = !1, this.svgContent = void 0, this.isVisible = !1, this.mode = WM(), this.color = void 0, this.ios = void 0, this.md = void 0, this.flipRtl = void 0, this.name = void 0, this.src = void 0, this.icon = void 0, this.size = void 0, this.lazy = !1, this.sanitize = !0;
  }
  componentWillLoad() {
    this.inheritedAttributes = UM(this.el, ["aria-label"]);
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
  waitUntilVisible(u, p, y) {
    if (this.lazy && typeof window < "u" && window.IntersectionObserver) {
      const E = this.io = new window.IntersectionObserver((R) => {
        R[0].isIntersecting && (E.disconnect(), this.io = void 0, y());
      }, { rootMargin: p });
      E.observe(u);
    } else
      y();
  }
  loadIcon() {
    if (this.isVisible) {
      const u = $M(this);
      u && (dc.has(u) ? this.svgContent = dc.get(u) : PM(u, this.sanitize).then(() => this.svgContent = dc.get(u)), this.didLoadIcon = !0);
    }
    this.iconName = ST(this.name, this.icon, this.mode, this.ios, this.md);
  }
  render() {
    const { flipRtl: u, iconName: p, inheritedAttributes: y, el: E } = this, R = this.mode || "md", g = p ? (p.includes("arrow") || p.includes("chevron")) && u !== !1 : !1, L = u || g;
    return Hi(wv, Object.assign({ role: "img", class: Object.assign(Object.assign({ [R]: !0 }, YM(this.color)), { [`icon-${this.size}`]: !!this.size, "flip-rtl": L, "icon-rtl": L && HM(E) }) }, y), this.svgContent ? Hi("div", { class: "icon-inner", innerHTML: this.svgContent }) : Hi("div", { class: "icon-inner" }));
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
    return IM;
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
}]), WM = () => typeof document < "u" && document.documentElement.getAttribute("mode") || "md", YM = (f) => f ? {
  "ion-color": !0,
  [`ion-color-${f}`]: !0
} : null;
function QM() {
  if (typeof customElements > "u")
    return;
  ["ion-icon"].forEach((u) => {
    switch (u) {
      case "ion-icon":
        customElements.get(u) || customElements.define(u, BM);
        break;
    }
  });
}
const GM = QM, _S = /* @__PURE__ */ et.createContext({
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
}), qM = class {
  constructor() {
    this.ionViewWillEnterCallbacks = [], this.ionViewDidEnterCallbacks = [], this.ionViewWillLeaveCallbacks = [], this.ionViewDidLeaveCallbacks = [], this.ionViewWillEnterDestructorCallbacks = [], this.ionViewDidEnterDestructorCallbacks = [], this.ionViewWillLeaveDestructorCallbacks = [], this.ionViewDidLeaveDestructorCallbacks = [];
  }
  onIonViewWillEnter(f) {
    if (f.id) {
      const u = this.ionViewWillEnterCallbacks.findIndex((p) => p.id === f.id);
      u > -1 ? this.ionViewWillEnterCallbacks[u] = f : this.ionViewWillEnterCallbacks.push(f);
    } else
      this.ionViewWillEnterCallbacks.push(f);
  }
  teardownCallback(f, u) {
    const p = u.filter((y) => y.id === f.id);
    p.length !== 0 && (p.forEach((y) => {
      y && typeof y.destructor == "function" && y.destructor();
    }), u = u.filter((y) => y.id !== f.id));
  }
  /**
   * Tears down the user-provided ionViewWillEnter lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewWillEnter(f) {
    this.teardownCallback(f, this.ionViewWillEnterDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewDidEnter lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewDidEnter(f) {
    this.teardownCallback(f, this.ionViewDidEnterDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewWillLeave lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewWillLeave(f) {
    this.teardownCallback(f, this.ionViewWillLeaveDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewDidLeave lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewDidLeave(f) {
    this.teardownCallback(f, this.ionViewDidLeaveDestructorCallbacks);
  }
  ionViewWillEnter() {
    this.ionViewWillEnterCallbacks.forEach((f) => {
      const u = f();
      f.id && this.ionViewWillEnterDestructorCallbacks.push({ id: f.id, destructor: u });
    });
  }
  onIonViewDidEnter(f) {
    if (f.id) {
      const u = this.ionViewDidEnterCallbacks.findIndex((p) => p.id === f.id);
      u > -1 ? this.ionViewDidEnterCallbacks[u] = f : this.ionViewDidEnterCallbacks.push(f);
    } else
      this.ionViewDidEnterCallbacks.push(f);
  }
  ionViewDidEnter() {
    this.ionViewDidEnterCallbacks.forEach((f) => {
      const u = f();
      f.id && this.ionViewDidEnterDestructorCallbacks.push({ id: f.id, destructor: u });
    });
  }
  onIonViewWillLeave(f) {
    if (f.id) {
      const u = this.ionViewWillLeaveCallbacks.findIndex((p) => p.id === f.id);
      u > -1 ? this.ionViewWillLeaveCallbacks[u] = f : this.ionViewWillLeaveCallbacks.push(f);
    } else
      this.ionViewWillLeaveCallbacks.push(f);
  }
  ionViewWillLeave() {
    this.ionViewWillLeaveCallbacks.forEach((f) => {
      const u = f();
      f.id && this.ionViewWillLeaveDestructorCallbacks.push({ id: f.id, destructor: u });
    });
  }
  onIonViewDidLeave(f) {
    if (f.id) {
      const u = this.ionViewDidLeaveCallbacks.findIndex((p) => p.id === f.id);
      u > -1 ? this.ionViewDidLeaveCallbacks[u] = f : this.ionViewDidLeaveCallbacks.push(f);
    } else
      this.ionViewDidLeaveCallbacks.push(f);
  }
  ionViewDidLeave() {
    this.ionViewDidLeaveCallbacks.forEach((f) => {
      const u = f();
      f.id && this.ionViewDidLeaveDestructorCallbacks.push({ id: f.id, destructor: u });
    }), this.componentCanBeDestroyed();
  }
  onComponentCanBeDestroyed(f) {
    this.componentCanBeDestroyedCallback = f;
  }
  componentCanBeDestroyed() {
    this.componentCanBeDestroyedCallback && this.componentCanBeDestroyedCallback();
  }
}, as = /* @__PURE__ */ et.createContext({
  getIonRedirect: () => {
  },
  getIonRoute: () => {
  },
  getPageManager: () => {
  },
  getStackManager: () => {
  },
  goBack: (f) => {
    typeof window < "u" && (typeof f == "string" ? window.location.pathname = f : window.history.back());
  },
  navigate: (f) => {
    typeof window < "u" && (window.location.pathname = f);
  },
  hasIonicRouter: () => !1,
  routeInfo: void 0,
  setCurrentTab: () => {
  },
  changeTab: (f, u) => {
    typeof window < "u" && (window.location.pathname = u);
  },
  resetTab: (f, u) => {
    typeof window < "u" && (window.location.pathname = u);
  }
}), KM = (f) => f.toLowerCase().split("-").map((u) => u.charAt(0).toUpperCase() + u.slice(1)).join(""), wT = (f) => f.replace(/([A-Z])/g, (u) => `-${u[0].toLowerCase()}`), XM = (f, u, p = {}) => {
  if (f instanceof Element) {
    const y = ZM(f.classList, u, p);
    y !== "" && (f.className = y), Object.keys(u).forEach((E) => {
      if (!(E === "children" || E === "style" || E === "ref" || E === "class" || E === "className" || E === "forwardedRef"))
        if (E.indexOf("on") === 0 && E[2] === E[2].toUpperCase()) {
          const R = E.substring(2), g = R[0].toLowerCase() + R.substring(1);
          TT(g) || eA(f, g, u[E]);
        } else
          f[E] = u[E], typeof u[E] === "string" && f.setAttribute(wT(E), u[E]);
    });
  }
}, ZM = (f, u, p) => {
  const y = u.className || u.class, E = p.className || p.class, R = lS(f), g = lS(y ? y.split(" ") : []), L = lS(E ? E.split(" ") : []), k = [];
  return R.forEach((A) => {
    g.has(A) ? (k.push(A), g.delete(A)) : L.has(A) || k.push(A);
  }), g.forEach((A) => k.push(A)), k.join(" ");
}, JM = (f) => {
  switch (f) {
    case "doubleclick":
      return "dblclick";
  }
  return f;
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const TT = (f) => {
  if (typeof document > "u")
    return !0;
  {
    const u = "on" + JM(f);
    let p = u in document;
    if (!p) {
      const y = document.createElement("div");
      y.setAttribute(u, "return;"), p = typeof y[u] == "function";
    }
    return p;
  }
}, eA = (f, u, p) => {
  const y = f.__events || (f.__events = {}), E = y[u];
  E && f.removeEventListener(u, E), f.addEventListener(u, y[u] = function(g) {
    p && p.call(this, g);
  });
}, lS = (f) => {
  const u = /* @__PURE__ */ new Map();
  return f.forEach((p) => u.set(p, p)), u;
}, tA = (f, u) => {
  typeof f == "function" ? f(u) : f != null && (f.current = u);
}, RT = (...f) => (u) => {
  f.forEach((p) => {
    tA(p, u);
  });
}, nA = (f, u) => {
  const p = (y, E) => et.createElement(f, Object.assign({}, y, { forwardedRef: E }));
  return p.displayName = u, et.forwardRef(p);
}, Tv = (f, u, p, y) => {
  y !== void 0 && y();
  const E = KM(f), R = class extends et.Component {
    constructor(g) {
      super(g), this.setComponentElRef = (L) => {
        this.componentEl = L;
      };
    }
    componentDidMount() {
      this.componentDidUpdate(this.props);
    }
    componentDidUpdate(g) {
      XM(this.componentEl, this.props, g);
    }
    render() {
      const g = this.props, { children: L, forwardedRef: k, style: A, className: H, ref: M } = g, K = Yl(g, ["children", "forwardedRef", "style", "className", "ref"]);
      let W = Object.keys(K).reduce((Be, we) => {
        const gt = K[we];
        if (we.indexOf("on") === 0 && we[2] === we[2].toUpperCase()) {
          const ge = we.substring(2).toLowerCase();
          typeof document < "u" && TT(ge) && (Be[we] = gt);
        } else {
          const ge = typeof gt;
          (ge === "string" || ge === "boolean" || ge === "number") && (Be[wT(we)] = gt);
        }
        return Be;
      }, {});
      const ue = Object.assign(Object.assign({}, W), { ref: RT(k, this.setComponentElRef), style: A });
      return Wl.createElement(f, ue, L);
    }
    static get displayName() {
      return E;
    }
  };
  return nA(R, E);
}, Rv = (f, u) => {
  const p = (y, E) => et.createElement(f, Object.assign({}, y, { forwardedRef: E }));
  return p.displayName = u, et.forwardRef(p);
}, rA = () => {
  if (typeof window < "u") {
    const f = window.Ionic;
    if (f && f.config)
      return f.config;
  }
  return null;
};
et.createContext({
  addOverlay: () => {
  },
  removeOverlay: () => {
  }
});
const iA = /* @__PURE__ */ Tv("ion-tab-button", void 0, void 0, AM), aA = /* @__PURE__ */ Tv("ion-tab-bar", void 0, void 0, xM), CS = /* @__PURE__ */ Tv("ion-router-outlet", void 0, void 0, bM), oA = /* @__PURE__ */ Tv("ion-icon", void 0, void 0, GM), xT = et.createContext({
  registerIonPage: () => {
  },
  isInOutlet: () => !1
});
class kT extends et.PureComponent {
  constructor(u) {
    super(u), this.ionPageElementRef = et.createRef(), this.stableMergedRefs = RT(this.ionPageElementRef, this.props.forwardedRef), this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this), this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this), this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this), this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
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
    const u = this.props, { className: p, children: y, routeInfo: E, forwardedRef: R } = u, g = Yl(u, ["className", "children", "routeInfo", "forwardedRef"]);
    return et.createElement(_S.Consumer, null, (L) => (this.ionLifeCycleContext = L, et.createElement("div", Object.assign({ className: p ? `${p} ion-page` : "ion-page", ref: this.stableMergedRefs }, g), y)));
  }
  static get contextType() {
    return xT;
  }
}
class lA extends et.Component {
  constructor(u) {
    super(u);
  }
  render() {
    const u = this.props, { className: p, children: y, forwardedRef: E } = u, R = Yl(u, ["className", "children", "forwardedRef"]);
    return this.context.hasIonicRouter() ? et.createElement(kT, Object.assign({ className: p ? `${p}` : "", routeInfo: this.context.routeInfo, forwardedRef: E }, R), y) : et.createElement("div", Object.assign({ className: p ? `ion-page ${p}` : "ion-page", ref: E }, R), y);
  }
  static get displayName() {
    return "IonPage";
  }
  static get contextType() {
    return as;
  }
}
Rv(lA, "IonPage");
const F1 = { main: 0 }, uA = (f = "main") => {
  var u;
  const p = ((u = F1[f]) !== null && u !== void 0 ? u : 0) + 1;
  return F1[f] = p, p.toString();
}, sA = (f, u) => {
  const p = /* @__PURE__ */ new WeakMap(), y = `react-delegate-${uA()}`;
  let E = 0;
  return {
    attachViewToDom: async (L, k, A, H) => {
      const M = document.createElement("div");
      H && M.classList.add(...H), L.appendChild(M);
      const K = k(A), W = `${y}-${E++}`, ue = XL.createPortal(K, M, W);
      return p.set(M, ue), f(ue), Promise.resolve(M);
    },
    removeViewFromDom: (L, k) => {
      const A = p.get(k);
      return A && u(A), k.remove(), Promise.resolve();
    }
  };
}, cA = Tv("ion-nav", void 0, void 0, vM), fA = (f) => {
  var { children: u, forwardedRef: p } = f, y = Yl(f, ["children", "forwardedRef"]);
  const [E, R] = Wl.useState([]), g = (A) => R((H) => [...H, A]), L = (A) => R((H) => H.filter((M) => M !== A)), k = Wl.useMemo(() => sA(g, L), []);
  return et.createElement(cA, Object.assign({ delegate: k, ref: p }, y), E);
};
Rv(fA, "IonNav");
et.createContext({
  activeTab: void 0,
  selectTab: () => !1
});
const dA = typeof HTMLElement < "u" ? HTMLElement : class {
};
class pA extends et.Component {
  constructor(u) {
    super(u), this.outletIsReady = !1, this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this), this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this), this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this), this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
  }
  componentDidMount() {
    this.ionRouterOutlet && (this.outletIsReady || iT(this.ionRouterOutlet, () => {
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
    const u = this.props, { StackManager: p, children: y, routeInfo: E } = u, R = Yl(u, ["StackManager", "children", "routeInfo"]);
    return et.createElement(_S.Consumer, null, (g) => (this.ionLifeCycleContext = g, et.createElement(
      p,
      { routeInfo: E },
      et.createElement(CS, Object.assign({ setRef: (L) => this.ionRouterOutlet = L }, R), y)
    )));
  }
  static get contextType() {
    return xT;
  }
}
class vA extends et.Component {
  constructor(u) {
    super(u);
  }
  render() {
    const u = this.context.getStackManager(), p = this.props, { children: y, forwardedRef: E } = p, R = Yl(p, ["children", "forwardedRef"]);
    return this.context.hasIonicRouter() ? R.ionPage ? et.createElement(pA, Object.assign({ StackManager: u, routeInfo: this.context.routeInfo }, R), y) : et.createElement(
      u,
      { routeInfo: this.context.routeInfo },
      et.createElement(CS, Object.assign({}, R, { forwardedRef: E }), y)
    ) : et.createElement(CS, Object.assign({ ref: E }, this.props), this.props.children);
  }
  static get contextType() {
    return as;
  }
}
Rv(vA, "IonRouterOutlet");
const uS = class extends et.Component {
  constructor(f) {
    super(f), this.handleIonTabButtonClick = this.handleIonTabButtonClick.bind(this);
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
    const f = this.props, u = Yl(f, ["onClick"]);
    return et.createElement(iA, Object.assign({ onIonTabButtonClick: this.handleIonTabButtonClick }, u));
  }
  static get displayName() {
    return "IonTabButton";
  }
};
class hA extends et.PureComponent {
  constructor(u) {
    super(u), this.setActiveTabOnContext = (y) => {
    };
    const p = {};
    et.Children.forEach(u.children, (y) => {
      var E, R, g, L;
      y != null && typeof y == "object" && y.props && (y.type === uS || y.type.isTabButton) && (p[y.props.tab] = {
        originalHref: y.props.href,
        currentHref: y.props.href,
        originalRouteOptions: y.props.href === ((E = u.routeInfo) === null || E === void 0 ? void 0 : E.pathname) ? (R = u.routeInfo) === null || R === void 0 ? void 0 : R.routeOptions : void 0,
        currentRouteOptions: y.props.href === ((g = u.routeInfo) === null || g === void 0 ? void 0 : g.pathname) ? (L = u.routeInfo) === null || L === void 0 ? void 0 : L.routeOptions : void 0
      });
    }), this.state = {
      tabs: p
    }, this.onTabButtonClick = this.onTabButtonClick.bind(this), this.renderTabButton = this.renderTabButton.bind(this), this.setActiveTabOnContext = this.setActiveTabOnContext.bind(this), this.selectTab = this.selectTab.bind(this);
  }
  componentDidMount() {
    const u = this.state.tabs, y = Object.keys(u).find((E) => {
      const R = u[E].originalHref;
      return this.props.routeInfo.pathname.startsWith(R);
    });
    y && this.setState({
      activeTab: y
    });
  }
  componentDidUpdate() {
    this.state.activeTab && this.setActiveTabOnContext(this.state.activeTab);
  }
  selectTab(u) {
    const p = this.state.tabs[u];
    return p ? (this.onTabButtonClick(new CustomEvent("ionTabButtonClick", {
      detail: {
        href: p.currentHref,
        tab: u,
        selected: u === this.state.activeTab,
        routeOptions: void 0
      }
    })), !0) : !1;
  }
  static getDerivedStateFromProps(u, p) {
    var y, E, R;
    const g = Object.assign({}, p.tabs), k = Object.keys(p.tabs).find((H) => {
      const M = p.tabs[H].originalHref;
      return u.routeInfo.pathname.startsWith(M);
    });
    et.Children.forEach(u.children, (H) => {
      if (H != null && typeof H == "object" && H.props && (H.type === uS || H.type.isTabButton)) {
        const M = g[H.props.tab];
        (!M || M.originalHref !== H.props.href) && (g[H.props.tab] = {
          originalHref: H.props.href,
          currentHref: H.props.href,
          originalRouteOptions: H.props.routeOptions,
          currentRouteOptions: H.props.routeOptions
        });
      }
    });
    const { activeTab: A } = p;
    if (k && A) {
      const H = p.tabs[A].currentHref, M = p.tabs[A].currentRouteOptions;
      (k !== A || H !== ((y = u.routeInfo) === null || y === void 0 ? void 0 : y.pathname) || M !== ((E = u.routeInfo) === null || E === void 0 ? void 0 : E.routeOptions)) && (g[k] = {
        originalHref: g[k].originalHref,
        currentHref: u.routeInfo.pathname + (u.routeInfo.search || ""),
        originalRouteOptions: g[k].originalRouteOptions,
        currentRouteOptions: (R = u.routeInfo) === null || R === void 0 ? void 0 : R.routeOptions
      }, u.routeInfo.routeAction === "pop" && k !== A && (g[A] = {
        originalHref: g[A].originalHref,
        currentHref: g[A].originalHref,
        originalRouteOptions: g[A].originalRouteOptions,
        currentRouteOptions: g[A].currentRouteOptions
      }));
    }
    return k && u.onSetCurrentTab(k, u.routeInfo), {
      activeTab: k,
      tabs: g
    };
  }
  onTabButtonClick(u, p) {
    const y = this.state.tabs[u.detail.tab], E = y.originalHref, R = u.detail.href, { activeTab: g } = this.state;
    p && p(u), g === u.detail.tab ? E !== R && this.context.resetTab(u.detail.tab, E, y.originalRouteOptions) : (this.props.onIonTabsWillChange && this.props.onIonTabsWillChange(new CustomEvent("ionTabWillChange", { detail: { tab: u.detail.tab } })), this.props.onIonTabsDidChange && this.props.onIonTabsDidChange(new CustomEvent("ionTabDidChange", { detail: { tab: u.detail.tab } })), this.setActiveTabOnContext(u.detail.tab), this.context.changeTab(u.detail.tab, R, u.detail.routeOptions));
  }
  renderTabButton(u) {
    return (p) => {
      var y, E;
      if (p != null && p.props && (p.type === uS || p.type.isTabButton)) {
        const R = p.props.tab === u ? (y = this.props.routeInfo) === null || y === void 0 ? void 0 : y.pathname : this.state.tabs[p.props.tab].currentHref, g = p.props.tab === u ? (E = this.props.routeInfo) === null || E === void 0 ? void 0 : E.routeOptions : this.state.tabs[p.props.tab].currentRouteOptions;
        return et.cloneElement(p, {
          href: R,
          routeOptions: g,
          onClick: (L) => this.onTabButtonClick(L, p.props.onClick)
        });
      }
      return null;
    };
  }
  render() {
    const { activeTab: u } = this.state;
    return et.createElement(aA, Object.assign({}, this.props, { selectedTab: u }), et.Children.map(this.props.children, this.renderTabButton(u)));
  }
  static get contextType() {
    return as;
  }
}
const mA = et.memo((f) => {
  var { forwardedRef: u } = f, p = Yl(f, ["forwardedRef"]);
  const y = Wl.useContext(as);
  return et.createElement(hA, Object.assign({ ref: u }, p, { routeInfo: p.routeInfo || y.routeInfo || { pathname: window.location.pathname }, onSetCurrentTab: y.setCurrentTab }), p.children);
});
Rv(mA, "IonTabBar");
class yA extends dA {
  constructor() {
    super();
  }
}
typeof window < "u" && window.customElements && (window.customElements.get("ion-tabs") || window.customElements.define("ion-tabs", yA));
class gA extends et.PureComponent {
  constructor(u) {
    super(u), this.props.name && console.warn('In Ionic React, you import icons from "ionicons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.');
  }
  render() {
    var u, p;
    const y = this.props, { icon: E, ios: R, md: g, mode: L } = y, k = Yl(y, ["icon", "ios", "md", "mode"]);
    let A;
    const H = rA(), M = L || (H == null ? void 0 : H.get("mode"));
    return R || g ? M === "ios" ? A = (u = R ?? g) !== null && u !== void 0 ? u : E : A = (p = g ?? R) !== null && p !== void 0 ? p : E : A = E, et.createElement(oA, Object.assign({ ref: this.props.forwardedRef, icon: A }, k), this.props.children);
  }
  static get contextType() {
    return as;
  }
}
Rv(gA, "IonIcon");
class _T extends et.PureComponent {
  render() {
    const u = this.context.getIonRoute();
    return !this.context.hasIonicRouter() || !_T ? (console.error("You either do not have an Ionic Router package, or your router does not support using <IonRoute>"), null) : et.createElement(u, Object.assign({}, this.props));
  }
  static get contextType() {
    return as;
  }
}
class DT extends et.PureComponent {
  render() {
    const u = this.context.getIonRedirect();
    return !this.context.hasIonicRouter() || !DT ? (console.error("You either do not have an Ionic Router package, or your router does not support using <IonRedirect>"), null) : et.createElement(u, Object.assign({}, this.props));
  }
  static get contextType() {
    return as;
  }
}
const bA = et.createContext({
  routeInfo: void 0,
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
class AA extends et.PureComponent {
  constructor(u) {
    super(u), this.nodes = /* @__PURE__ */ new Map(), this.animation = CL(u.id);
  }
  setupAnimation(u) {
    const p = this.animation;
    this.nodes.size > 0 && p.addElement(Array.from(this.nodes.values())), j1(p, u), V1(p, u);
  }
  componentDidMount() {
    const u = this.props;
    this.setupAnimation(u);
  }
  componentDidUpdate(u) {
    const p = this.animation, y = this.props;
    j1(p, y, u), SA(p, y, u), V1(p, y, u);
  }
  render() {
    const { children: u } = this.props;
    return et.createElement(et.Fragment, null, et.Children.map(u, (p, y) => et.cloneElement(p, { ref: (E) => this.nodes.set(y, E) })));
  }
}
const j1 = (f, u = {}, p = {}) => {
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
  for (const k in u)
    // eslint-disable-next-line no-prototype-builtins
    u.hasOwnProperty(k) && !y.includes(k) && u[k] !== p[k] && f[k](u[k]);
  const E = u.from;
  E && E !== p.from && (Array.isArray(E) ? E : [E]).forEach((A) => f.from(A.property, A.value));
  const R = u.to;
  R && R !== p.to && (Array.isArray(R) ? R : [R]).forEach((A) => f.to(A.property, A.value));
  const g = u.fromTo;
  g && g !== p.fromTo && (Array.isArray(g) ? g : [g]).forEach((A) => f.fromTo(A.property, A.fromValue, A.toValue));
  const L = u.onFinish;
  L && L !== p.onFinish && (Array.isArray(L) ? L : [L]).forEach((A) => f.onFinish(A.callback, A.opts));
}, SA = (f, u = {}, p = {}) => {
  var y, E, R, g, L;
  const { progressStart: k, progressStep: A, progressEnd: H } = u;
  k && (((y = p.progressStart) === null || y === void 0 ? void 0 : y.forceLinearEasing) !== (k == null ? void 0 : k.forceLinearEasing) || ((E = p.progressStart) === null || E === void 0 ? void 0 : E.step) !== (k == null ? void 0 : k.step)) && f.progressStart(k.forceLinearEasing, k.step), A && ((R = p.progressStep) === null || R === void 0 ? void 0 : R.step) !== (A == null ? void 0 : A.step) && f.progressStep(A.step), H && (((g = p.progressEnd) === null || g === void 0 ? void 0 : g.playTo) !== (H == null ? void 0 : H.playTo) || ((L = p.progressEnd) === null || L === void 0 ? void 0 : L.step) !== (H == null ? void 0 : H.step) || (p == null ? void 0 : p.dur) !== (H == null ? void 0 : H.dur)) && f.progressEnd(H.playTo, H.step, H.dur);
}, V1 = (f, u = {}, p = {}) => {
  !p.play && u.play && f.play(), !p.pause && u.pause && f.pause(), !p.stop && u.stop && f.stop(), !p.destroy && u.destroy && f.destroy();
};
class NA extends et.Component {
  constructor(u) {
    super(u), this.ionLifeCycleContext = new qM(), this._isMounted = !1, this.ionLifeCycleContext.onComponentCanBeDestroyed(() => {
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
    return et.createElement(_S.Provider, { value: this.ionLifeCycleContext }, u && this.props.children);
  }
}
class $A extends et.PureComponent {
  constructor(u) {
    super(u), this.ionRouterContextValue = {
      push: (p, y, E, R, g) => {
        this.navigate(p, y, E, g, R);
      },
      back: (p) => {
        this.goBack(void 0, p);
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
    u.detail.register(0, (p) => {
      this.nativeGoBack(), p();
    });
  }
  goBack(u, p) {
    this.props.onNavigateBack(u, p);
  }
  nativeGoBack() {
    this.props.onNativeBack();
  }
  navigate(u, p = "forward", y = "push", E, R, g) {
    this.props.onNavigate(u, y, p, E, R, g);
  }
  getPageManager() {
    return kT;
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
    return et.createElement(
      as.Provider,
      { value: Object.assign(Object.assign({}, this.state), { routeInfo: this.props.routeInfo }) },
      et.createElement(bA.Provider, { value: Object.assign(Object.assign({}, this.ionRouterContextValue), { routeInfo: this.props.routeInfo }) }, this.props.children)
    );
  }
}
export {
  TA as B,
  CL as a,
  RA as c,
  xA as g
};
//# sourceMappingURL=index-DqJZxezq.js.map
