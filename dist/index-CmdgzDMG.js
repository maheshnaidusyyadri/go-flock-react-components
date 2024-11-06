function TO(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var yh = {}, dS = { exports: {} }, vn = {};
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
  if (p1) return vn;
  p1 = 1;
  var c = Symbol.for("react.element"), u = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), g = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), N = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), z = Symbol.iterator;
  function X(D) {
    return D === null || typeof D != "object" ? null : (D = z && D[z] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var V = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ve = Object.assign, Ke = {};
  function ae(D, H, Ee) {
    this.props = D, this.context = H, this.refs = Ke, this.updater = Ee || V;
  }
  ae.prototype.isReactComponent = {}, ae.prototype.setState = function(D, H) {
    if (typeof D != "object" && typeof D != "function" && D != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, H, "setState");
  }, ae.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function Ct() {
  }
  Ct.prototype = ae.prototype;
  function he(D, H, Ee) {
    this.props = D, this.context = H, this.refs = Ke, this.updater = Ee || V;
  }
  var Oe = he.prototype = new Ct();
  Oe.constructor = he, ve(Oe, ae.prototype), Oe.isPureReactComponent = !0;
  var xe = Array.isArray, le = Object.prototype.hasOwnProperty, Ve = { current: null }, Re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ze(D, H, Ee) {
    var ne, _ = {}, Ue = null, Fe = null;
    if (H != null) for (ne in H.ref !== void 0 && (Fe = H.ref), H.key !== void 0 && (Ue = "" + H.key), H) le.call(H, ne) && !Re.hasOwnProperty(ne) && (_[ne] = H[ne]);
    var He = arguments.length - 2;
    if (He === 1) _.children = Ee;
    else if (1 < He) {
      for (var at = Array(He), kt = 0; kt < He; kt++) at[kt] = arguments[kt + 2];
      _.children = at;
    }
    if (D && D.defaultProps) for (ne in He = D.defaultProps, He) _[ne] === void 0 && (_[ne] = He[ne]);
    return { $$typeof: c, type: D, key: Ue, ref: Fe, props: _, _owner: Ve.current };
  }
  function Le(D, H) {
    return { $$typeof: c, type: D.type, key: H, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function Xe(D) {
    return typeof D == "object" && D !== null && D.$$typeof === c;
  }
  function Et(D) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(Ee) {
      return H[Ee];
    });
  }
  var Rt = /\/+/g;
  function qe(D, H) {
    return typeof D == "object" && D !== null && D.key != null ? Et("" + D.key) : H.toString(36);
  }
  function ue(D, H, Ee, ne, _) {
    var Ue = typeof D;
    (Ue === "undefined" || Ue === "boolean") && (D = null);
    var Fe = !1;
    if (D === null) Fe = !0;
    else switch (Ue) {
      case "string":
      case "number":
        Fe = !0;
        break;
      case "object":
        switch (D.$$typeof) {
          case c:
          case u:
            Fe = !0;
        }
    }
    if (Fe) return Fe = D, _ = _(Fe), D = ne === "" ? "." + qe(Fe, 0) : ne, xe(_) ? (Ee = "", D != null && (Ee = D.replace(Rt, "$&/") + "/"), ue(_, H, Ee, "", function(kt) {
      return kt;
    })) : _ != null && (Xe(_) && (_ = Le(_, Ee + (!_.key || Fe && Fe.key === _.key ? "" : ("" + _.key).replace(Rt, "$&/") + "/") + D)), H.push(_)), 1;
    if (Fe = 0, ne = ne === "" ? "." : ne + ":", xe(D)) for (var He = 0; He < D.length; He++) {
      Ue = D[He];
      var at = ne + qe(Ue, He);
      Fe += ue(Ue, H, Ee, at, _);
    }
    else if (at = X(D), typeof at == "function") for (D = at.call(D), He = 0; !(Ue = D.next()).done; ) Ue = Ue.value, at = ne + qe(Ue, He++), Fe += ue(Ue, H, Ee, at, _);
    else if (Ue === "object") throw H = String(D), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.");
    return Fe;
  }
  function be(D, H, Ee) {
    if (D == null) return D;
    var ne = [], _ = 0;
    return ue(D, ne, "", "", function(Ue) {
      return H.call(Ee, Ue, _++);
    }), ne;
  }
  function me(D) {
    if (D._status === -1) {
      var H = D._result;
      H = H(), H.then(function(Ee) {
        (D._status === 0 || D._status === -1) && (D._status = 1, D._result = Ee);
      }, function(Ee) {
        (D._status === 0 || D._status === -1) && (D._status = 2, D._result = Ee);
      }), D._status === -1 && (D._status = 0, D._result = H);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var pe = { current: null }, de = { transition: null }, Ye = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: de, ReactCurrentOwner: Ve };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return vn.Children = { map: be, forEach: function(D, H, Ee) {
    be(D, function() {
      H.apply(this, arguments);
    }, Ee);
  }, count: function(D) {
    var H = 0;
    return be(D, function() {
      H++;
    }), H;
  }, toArray: function(D) {
    return be(D, function(H) {
      return H;
    }) || [];
  }, only: function(D) {
    if (!Xe(D)) throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, vn.Component = ae, vn.Fragment = d, vn.Profiler = b, vn.PureComponent = he, vn.StrictMode = v, vn.Suspense = k, vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ye, vn.act = q, vn.cloneElement = function(D, H, Ee) {
    if (D == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var ne = ve({}, D.props), _ = D.key, Ue = D.ref, Fe = D._owner;
    if (H != null) {
      if (H.ref !== void 0 && (Ue = H.ref, Fe = Ve.current), H.key !== void 0 && (_ = "" + H.key), D.type && D.type.defaultProps) var He = D.type.defaultProps;
      for (at in H) le.call(H, at) && !Re.hasOwnProperty(at) && (ne[at] = H[at] === void 0 && He !== void 0 ? He[at] : H[at]);
    }
    var at = arguments.length - 2;
    if (at === 1) ne.children = Ee;
    else if (1 < at) {
      He = Array(at);
      for (var kt = 0; kt < at; kt++) He[kt] = arguments[kt + 2];
      ne.children = He;
    }
    return { $$typeof: c, type: D.type, key: _, ref: Ue, props: ne, _owner: Fe };
  }, vn.createContext = function(D) {
    return D = { $$typeof: g, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: T, _context: D }, D.Consumer = D;
  }, vn.createElement = ze, vn.createFactory = function(D) {
    var H = ze.bind(null, D);
    return H.type = D, H;
  }, vn.createRef = function() {
    return { current: null };
  }, vn.forwardRef = function(D) {
    return { $$typeof: O, render: D };
  }, vn.isValidElement = Xe, vn.lazy = function(D) {
    return { $$typeof: I, _payload: { _status: -1, _result: D }, _init: me };
  }, vn.memo = function(D, H) {
    return { $$typeof: N, type: D, compare: H === void 0 ? null : H };
  }, vn.startTransition = function(D) {
    var H = de.transition;
    de.transition = {};
    try {
      D();
    } finally {
      de.transition = H;
    }
  }, vn.unstable_act = q, vn.useCallback = function(D, H) {
    return pe.current.useCallback(D, H);
  }, vn.useContext = function(D) {
    return pe.current.useContext(D);
  }, vn.useDebugValue = function() {
  }, vn.useDeferredValue = function(D) {
    return pe.current.useDeferredValue(D);
  }, vn.useEffect = function(D, H) {
    return pe.current.useEffect(D, H);
  }, vn.useId = function() {
    return pe.current.useId();
  }, vn.useImperativeHandle = function(D, H, Ee) {
    return pe.current.useImperativeHandle(D, H, Ee);
  }, vn.useInsertionEffect = function(D, H) {
    return pe.current.useInsertionEffect(D, H);
  }, vn.useLayoutEffect = function(D, H) {
    return pe.current.useLayoutEffect(D, H);
  }, vn.useMemo = function(D, H) {
    return pe.current.useMemo(D, H);
  }, vn.useReducer = function(D, H, Ee) {
    return pe.current.useReducer(D, H, Ee);
  }, vn.useRef = function(D) {
    return pe.current.useRef(D);
  }, vn.useState = function(D) {
    return pe.current.useState(D);
  }, vn.useSyncExternalStore = function(D, H, Ee) {
    return pe.current.useSyncExternalStore(D, H, Ee);
  }, vn.useTransition = function() {
    return pe.current.useTransition();
  }, vn.version = "18.3.1", vn;
}
var Sh = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Sh.exports;
var h1;
function RO() {
  return h1 || (h1 = 1, function(c, u) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = "18.3.1", v = Symbol.for("react.element"), b = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), N = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), Ke = Symbol.for("react.offscreen"), ae = Symbol.iterator, Ct = "@@iterator";
      function he(C) {
        if (C === null || typeof C != "object")
          return null;
        var M = ae && C[ae] || C[Ct];
        return typeof M == "function" ? M : null;
      }
      var Oe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, xe = {
        transition: null
      }, le = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ve = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Re = {}, ze = null;
      function Le(C) {
        ze = C;
      }
      Re.setExtraStackFrame = function(C) {
        ze = C;
      }, Re.getCurrentStack = null, Re.getStackAddendum = function() {
        var C = "";
        ze && (C += ze);
        var M = Re.getCurrentStack;
        return M && (C += M() || ""), C;
      };
      var Xe = !1, Et = !1, Rt = !1, qe = !1, ue = !1, be = {
        ReactCurrentDispatcher: Oe,
        ReactCurrentBatchConfig: xe,
        ReactCurrentOwner: Ve
      };
      be.ReactDebugCurrentFrame = Re, be.ReactCurrentActQueue = le;
      function me(C) {
        {
          for (var M = arguments.length, Z = new Array(M > 1 ? M - 1 : 0), re = 1; re < M; re++)
            Z[re - 1] = arguments[re];
          de("warn", C, Z);
        }
      }
      function pe(C) {
        {
          for (var M = arguments.length, Z = new Array(M > 1 ? M - 1 : 0), re = 1; re < M; re++)
            Z[re - 1] = arguments[re];
          de("error", C, Z);
        }
      }
      function de(C, M, Z) {
        {
          var re = be.ReactDebugCurrentFrame, Ae = re.getStackAddendum();
          Ae !== "" && (M += "%s", Z = Z.concat([Ae]));
          var Nt = Z.map(function(Ge) {
            return String(Ge);
          });
          Nt.unshift("Warning: " + M), Function.prototype.apply.call(console[C], console, Nt);
        }
      }
      var Ye = {};
      function q(C, M) {
        {
          var Z = C.constructor, re = Z && (Z.displayName || Z.name) || "ReactClass", Ae = re + "." + M;
          if (Ye[Ae])
            return;
          pe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", M, re), Ye[Ae] = !0;
        }
      }
      var D = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(C) {
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
        enqueueForceUpdate: function(C, M, Z) {
          q(C, "forceUpdate");
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
        enqueueReplaceState: function(C, M, Z, re) {
          q(C, "replaceState");
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
        enqueueSetState: function(C, M, Z, re) {
          q(C, "setState");
        }
      }, H = Object.assign, Ee = {};
      Object.freeze(Ee);
      function ne(C, M, Z) {
        this.props = C, this.context = M, this.refs = Ee, this.updater = Z || D;
      }
      ne.prototype.isReactComponent = {}, ne.prototype.setState = function(C, M) {
        if (typeof C != "object" && typeof C != "function" && C != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, M, "setState");
      }, ne.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate");
      };
      {
        var _ = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ue = function(C, M) {
          Object.defineProperty(ne.prototype, C, {
            get: function() {
              me("%s(...) is deprecated in plain JavaScript React classes. %s", M[0], M[1]);
            }
          });
        };
        for (var Fe in _)
          _.hasOwnProperty(Fe) && Ue(Fe, _[Fe]);
      }
      function He() {
      }
      He.prototype = ne.prototype;
      function at(C, M, Z) {
        this.props = C, this.context = M, this.refs = Ee, this.updater = Z || D;
      }
      var kt = at.prototype = new He();
      kt.constructor = at, H(kt, ne.prototype), kt.isPureReactComponent = !0;
      function Kt() {
        var C = {
          current: null
        };
        return Object.seal(C), C;
      }
      var Jt = Array.isArray;
      function Vt(C) {
        return Jt(C);
      }
      function Bt(C) {
        {
          var M = typeof Symbol == "function" && Symbol.toStringTag, Z = M && C[Symbol.toStringTag] || C.constructor.name || "Object";
          return Z;
        }
      }
      function Q(C) {
        try {
          return ce(C), !1;
        } catch {
          return !0;
        }
      }
      function ce(C) {
        return "" + C;
      }
      function Ne(C) {
        if (Q(C))
          return pe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bt(C)), ce(C);
      }
      function vt(C, M, Z) {
        var re = C.displayName;
        if (re)
          return re;
        var Ae = M.displayName || M.name || "";
        return Ae !== "" ? Z + "(" + Ae + ")" : Z;
      }
      function it(C) {
        return C.displayName || "Context";
      }
      function ct(C) {
        if (C == null)
          return null;
        if (typeof C.tag == "number" && pe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
          return C.displayName || C.name || null;
        if (typeof C == "string")
          return C;
        switch (C) {
          case T:
            return "Fragment";
          case b:
            return "Portal";
          case O:
            return "Profiler";
          case g:
            return "StrictMode";
          case z:
            return "Suspense";
          case X:
            return "SuspenseList";
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case N:
              var M = C;
              return it(M) + ".Consumer";
            case k:
              var Z = C;
              return it(Z._context) + ".Provider";
            case I:
              return vt(C, C.render, "ForwardRef");
            case V:
              var re = C.displayName || null;
              return re !== null ? re : ct(C.type) || "Memo";
            case ve: {
              var Ae = C, Nt = Ae._payload, Ge = Ae._init;
              try {
                return ct(Ge(Nt));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var mt = Object.prototype.hasOwnProperty, Ht = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, je, nt, wt;
      wt = {};
      function Ie(C) {
        if (mt.call(C, "ref")) {
          var M = Object.getOwnPropertyDescriptor(C, "ref").get;
          if (M && M.isReactWarning)
            return !1;
        }
        return C.ref !== void 0;
      }
      function Pe(C) {
        if (mt.call(C, "key")) {
          var M = Object.getOwnPropertyDescriptor(C, "key").get;
          if (M && M.isReactWarning)
            return !1;
        }
        return C.key !== void 0;
      }
      function Gt(C, M) {
        var Z = function() {
          je || (je = !0, pe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        Z.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: Z,
          configurable: !0
        });
      }
      function An(C, M) {
        var Z = function() {
          nt || (nt = !0, pe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        Z.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: Z,
          configurable: !0
        });
      }
      function mn(C) {
        if (typeof C.ref == "string" && Ve.current && C.__self && Ve.current.stateNode !== C.__self) {
          var M = ct(Ve.current.type);
          wt[M] || (pe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M, C.ref), wt[M] = !0);
        }
      }
      var we = function(C, M, Z, re, Ae, Nt, Ge) {
        var At = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: v,
          // Built-in properties that belong on the element
          type: C,
          key: M,
          ref: Z,
          props: Ge,
          // Record the component responsible for creating this element.
          _owner: Nt
        };
        return At._store = {}, Object.defineProperty(At._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(At, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: re
        }), Object.defineProperty(At, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Ae
        }), Object.freeze && (Object.freeze(At.props), Object.freeze(At)), At;
      };
      function Je(C, M, Z) {
        var re, Ae = {}, Nt = null, Ge = null, At = null, rn = null;
        if (M != null) {
          Ie(M) && (Ge = M.ref, mn(M)), Pe(M) && (Ne(M.key), Nt = "" + M.key), At = M.__self === void 0 ? null : M.__self, rn = M.__source === void 0 ? null : M.__source;
          for (re in M)
            mt.call(M, re) && !Ht.hasOwnProperty(re) && (Ae[re] = M[re]);
        }
        var En = arguments.length - 2;
        if (En === 1)
          Ae.children = Z;
        else if (En > 1) {
          for (var jn = Array(En), $n = 0; $n < En; $n++)
            jn[$n] = arguments[$n + 2];
          Object.freeze && Object.freeze(jn), Ae.children = jn;
        }
        if (C && C.defaultProps) {
          var Pn = C.defaultProps;
          for (re in Pn)
            Ae[re] === void 0 && (Ae[re] = Pn[re]);
        }
        if (Nt || Ge) {
          var In = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          Nt && Gt(Ae, In), Ge && An(Ae, In);
        }
        return we(C, Nt, Ge, At, rn, Ve.current, Ae);
      }
      function Lt(C, M) {
        var Z = we(C.type, M, C.ref, C._self, C._source, C._owner, C.props);
        return Z;
      }
      function Dt(C, M, Z) {
        if (C == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
        var re, Ae = H({}, C.props), Nt = C.key, Ge = C.ref, At = C._self, rn = C._source, En = C._owner;
        if (M != null) {
          Ie(M) && (Ge = M.ref, En = Ve.current), Pe(M) && (Ne(M.key), Nt = "" + M.key);
          var jn;
          C.type && C.type.defaultProps && (jn = C.type.defaultProps);
          for (re in M)
            mt.call(M, re) && !Ht.hasOwnProperty(re) && (M[re] === void 0 && jn !== void 0 ? Ae[re] = jn[re] : Ae[re] = M[re]);
        }
        var $n = arguments.length - 2;
        if ($n === 1)
          Ae.children = Z;
        else if ($n > 1) {
          for (var Pn = Array($n), In = 0; In < $n; In++)
            Pn[In] = arguments[In + 2];
          Ae.children = Pn;
        }
        return we(C.type, Nt, Ge, At, rn, En, Ae);
      }
      function en(C) {
        return typeof C == "object" && C !== null && C.$$typeof === v;
      }
      var Mn = ".", Nn = ":";
      function Qn(C) {
        var M = /[=:]/g, Z = {
          "=": "=0",
          ":": "=2"
        }, re = C.replace(M, function(Ae) {
          return Z[Ae];
        });
        return "$" + re;
      }
      var sn = !1, Er = /\/+/g;
      function Sn(C) {
        return C.replace(Er, "$&/");
      }
      function yn(C, M) {
        return typeof C == "object" && C !== null && C.key != null ? (Ne(C.key), Qn("" + C.key)) : M.toString(36);
      }
      function aa(C, M, Z, re, Ae) {
        var Nt = typeof C;
        (Nt === "undefined" || Nt === "boolean") && (C = null);
        var Ge = !1;
        if (C === null)
          Ge = !0;
        else
          switch (Nt) {
            case "string":
            case "number":
              Ge = !0;
              break;
            case "object":
              switch (C.$$typeof) {
                case v:
                case b:
                  Ge = !0;
              }
          }
        if (Ge) {
          var At = C, rn = Ae(At), En = re === "" ? Mn + yn(At, 0) : re;
          if (Vt(rn)) {
            var jn = "";
            En != null && (jn = Sn(En) + "/"), aa(rn, M, jn, "", function(md) {
              return md;
            });
          } else rn != null && (en(rn) && (rn.key && (!At || At.key !== rn.key) && Ne(rn.key), rn = Lt(
            rn,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            Z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (rn.key && (!At || At.key !== rn.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Sn("" + rn.key) + "/"
            ) : "") + En
          )), M.push(rn));
          return 1;
        }
        var $n, Pn, In = 0, hn = re === "" ? Mn : re + Nn;
        if (Vt(C))
          for (var ho = 0; ho < C.length; ho++)
            $n = C[ho], Pn = hn + yn($n, ho), In += aa($n, M, Z, Pn, Ae);
        else {
          var uu = he(C);
          if (typeof uu == "function") {
            var ds = C;
            uu === ds.entries && (sn || me("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), sn = !0);
            for (var vd = uu.call(ds), ji, ps = 0; !(ji = vd.next()).done; )
              $n = ji.value, Pn = hn + yn($n, ps++), In += aa($n, M, Z, Pn, Ae);
          } else if (Nt === "object") {
            var hs = String(C);
            throw new Error("Objects are not valid as a React child (found: " + (hs === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : hs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return In;
      }
      function wr(C, M, Z) {
        if (C == null)
          return C;
        var re = [], Ae = 0;
        return aa(C, re, "", "", function(Nt) {
          return M.call(Z, Nt, Ae++);
        }), re;
      }
      function Br(C) {
        var M = 0;
        return wr(C, function() {
          M++;
        }), M;
      }
      function Nr(C, M, Z) {
        wr(C, function() {
          M.apply(this, arguments);
        }, Z);
      }
      function Ai(C) {
        return wr(C, function(M) {
          return M;
        }) || [];
      }
      function Tr(C) {
        if (!en(C))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return C;
      }
      function Va(C) {
        var M = {
          $$typeof: N,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: C,
          _currentValue2: C,
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
        M.Provider = {
          $$typeof: k,
          _context: M
        };
        var Z = !1, re = !1, Ae = !1;
        {
          var Nt = {
            $$typeof: N,
            _context: M
          };
          Object.defineProperties(Nt, {
            Provider: {
              get: function() {
                return re || (re = !0, pe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), M.Provider;
              },
              set: function(Ge) {
                M.Provider = Ge;
              }
            },
            _currentValue: {
              get: function() {
                return M._currentValue;
              },
              set: function(Ge) {
                M._currentValue = Ge;
              }
            },
            _currentValue2: {
              get: function() {
                return M._currentValue2;
              },
              set: function(Ge) {
                M._currentValue2 = Ge;
              }
            },
            _threadCount: {
              get: function() {
                return M._threadCount;
              },
              set: function(Ge) {
                M._threadCount = Ge;
              }
            },
            Consumer: {
              get: function() {
                return Z || (Z = !0, pe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), M.Consumer;
              }
            },
            displayName: {
              get: function() {
                return M.displayName;
              },
              set: function(Ge) {
                Ae || (me("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ge), Ae = !0);
              }
            }
          }), M.Consumer = Nt;
        }
        return M._currentRenderer = null, M._currentRenderer2 = null, M;
      }
      var xr = -1, $r = 0, cr = 1, wn = 2;
      function fr(C) {
        if (C._status === xr) {
          var M = C._result, Z = M();
          if (Z.then(function(Nt) {
            if (C._status === $r || C._status === xr) {
              var Ge = C;
              Ge._status = cr, Ge._result = Nt;
            }
          }, function(Nt) {
            if (C._status === $r || C._status === xr) {
              var Ge = C;
              Ge._status = wn, Ge._result = Nt;
            }
          }), C._status === xr) {
            var re = C;
            re._status = $r, re._result = Z;
          }
        }
        if (C._status === cr) {
          var Ae = C._result;
          return Ae === void 0 && pe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Ae), "default" in Ae || pe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Ae), Ae.default;
        } else
          throw C._result;
      }
      function zr(C) {
        var M = {
          // We use these fields to store the result.
          _status: xr,
          _result: C
        }, Z = {
          $$typeof: ve,
          _payload: M,
          _init: fr
        };
        {
          var re, Ae;
          Object.defineProperties(Z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return re;
              },
              set: function(Nt) {
                pe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), re = Nt, Object.defineProperty(Z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Ae;
              },
              set: function(Nt) {
                pe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Ae = Nt, Object.defineProperty(Z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Z;
      }
      function ca(C) {
        C != null && C.$$typeof === V ? pe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof C != "function" ? pe("forwardRef requires a render function but was given %s.", C === null ? "null" : typeof C) : C.length !== 0 && C.length !== 2 && pe("forwardRef render functions accept exactly two parameters: props and ref. %s", C.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), C != null && (C.defaultProps != null || C.propTypes != null) && pe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var M = {
          $$typeof: I,
          render: C
        };
        {
          var Z;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Z;
            },
            set: function(re) {
              Z = re, !C.name && !C.displayName && (C.displayName = re);
            }
          });
        }
        return M;
      }
      var ar;
      ar = Symbol.for("react.module.reference");
      function $(C) {
        return !!(typeof C == "string" || typeof C == "function" || C === T || C === O || ue || C === g || C === z || C === X || qe || C === Ke || Xe || Et || Rt || typeof C == "object" && C !== null && (C.$$typeof === ve || C.$$typeof === V || C.$$typeof === k || C.$$typeof === N || C.$$typeof === I || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        C.$$typeof === ar || C.getModuleId !== void 0));
      }
      function ye(C, M) {
        $(C) || pe("memo: The first argument must be a component. Instead received: %s", C === null ? "null" : typeof C);
        var Z = {
          $$typeof: V,
          type: C,
          compare: M === void 0 ? null : M
        };
        {
          var re;
          Object.defineProperty(Z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return re;
            },
            set: function(Ae) {
              re = Ae, !C.name && !C.displayName && (C.displayName = Ae);
            }
          });
        }
        return Z;
      }
      function ke() {
        var C = Oe.current;
        return C === null && pe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), C;
      }
      function ut(C) {
        var M = ke();
        if (C._context !== void 0) {
          var Z = C._context;
          Z.Consumer === C ? pe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Z.Provider === C && pe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return M.useContext(C);
      }
      function Wt(C) {
        var M = ke();
        return M.useState(C);
      }
      function Zt(C, M, Z) {
        var re = ke();
        return re.useReducer(C, M, Z);
      }
      function Tt(C) {
        var M = ke();
        return M.useRef(C);
      }
      function It(C, M) {
        var Z = ke();
        return Z.useEffect(C, M);
      }
      function Zn(C, M) {
        var Z = ke();
        return Z.useInsertionEffect(C, M);
      }
      function E(C, M) {
        var Z = ke();
        return Z.useLayoutEffect(C, M);
      }
      function A(C, M) {
        var Z = ke();
        return Z.useCallback(C, M);
      }
      function G(C, M) {
        var Z = ke();
        return Z.useMemo(C, M);
      }
      function se(C, M, Z) {
        var re = ke();
        return re.useImperativeHandle(C, M, Z);
      }
      function Ce(C, M) {
        {
          var Z = ke();
          return Z.useDebugValue(C, M);
        }
      }
      function $e() {
        var C = ke();
        return C.useTransition();
      }
      function st(C) {
        var M = ke();
        return M.useDeferredValue(C);
      }
      function ot() {
        var C = ke();
        return C.useId();
      }
      function on(C, M, Z) {
        var re = ke();
        return re.useSyncExternalStore(C, M, Z);
      }
      var cn = 0, tn, dr, Tn, Bn, Cn, Wr, ii;
      function Ba() {
      }
      Ba.__reactDisabledLog = !0;
      function co() {
        {
          if (cn === 0) {
            tn = console.log, dr = console.info, Tn = console.warn, Bn = console.error, Cn = console.group, Wr = console.groupCollapsed, ii = console.groupEnd;
            var C = {
              configurable: !0,
              enumerable: !0,
              value: Ba,
              writable: !0
            };
            Object.defineProperties(console, {
              info: C,
              log: C,
              warn: C,
              error: C,
              group: C,
              groupCollapsed: C,
              groupEnd: C
            });
          }
          cn++;
        }
      }
      function Mi() {
        {
          if (cn--, cn === 0) {
            var C = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: H({}, C, {
                value: tn
              }),
              info: H({}, C, {
                value: dr
              }),
              warn: H({}, C, {
                value: Tn
              }),
              error: H({}, C, {
                value: Bn
              }),
              group: H({}, C, {
                value: Cn
              }),
              groupCollapsed: H({}, C, {
                value: Wr
              }),
              groupEnd: H({}, C, {
                value: ii
              })
            });
          }
          cn < 0 && pe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Wa = be.ReactCurrentDispatcher, Yr;
      function pn(C, M, Z) {
        {
          if (Yr === void 0)
            try {
              throw Error();
            } catch (Ae) {
              var re = Ae.stack.trim().match(/\n( *(at )?)/);
              Yr = re && re[1] || "";
            }
          return `
` + Yr + C;
        }
      }
      var ln = !1, oi;
      {
        var wa = typeof WeakMap == "function" ? WeakMap : Map;
        oi = new wa();
      }
      function Ni(C, M) {
        if (!C || ln)
          return "";
        {
          var Z = oi.get(C);
          if (Z !== void 0)
            return Z;
        }
        var re;
        ln = !0;
        var Ae = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Nt;
        Nt = Wa.current, Wa.current = null, co();
        try {
          if (M) {
            var Ge = function() {
              throw Error();
            };
            if (Object.defineProperty(Ge.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ge, []);
              } catch (hn) {
                re = hn;
              }
              Reflect.construct(C, [], Ge);
            } else {
              try {
                Ge.call();
              } catch (hn) {
                re = hn;
              }
              C.call(Ge.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              re = hn;
            }
            C();
          }
        } catch (hn) {
          if (hn && re && typeof hn.stack == "string") {
            for (var At = hn.stack.split(`
`), rn = re.stack.split(`
`), En = At.length - 1, jn = rn.length - 1; En >= 1 && jn >= 0 && At[En] !== rn[jn]; )
              jn--;
            for (; En >= 1 && jn >= 0; En--, jn--)
              if (At[En] !== rn[jn]) {
                if (En !== 1 || jn !== 1)
                  do
                    if (En--, jn--, jn < 0 || At[En] !== rn[jn]) {
                      var $n = `
` + At[En].replace(" at new ", " at ");
                      return C.displayName && $n.includes("<anonymous>") && ($n = $n.replace("<anonymous>", C.displayName)), typeof C == "function" && oi.set(C, $n), $n;
                    }
                  while (En >= 1 && jn >= 0);
                break;
              }
          }
        } finally {
          ln = !1, Wa.current = Nt, Mi(), Error.prepareStackTrace = Ae;
        }
        var Pn = C ? C.displayName || C.name : "", In = Pn ? pn(Pn) : "";
        return typeof C == "function" && oi.set(C, In), In;
      }
      function er(C, M, Z) {
        return Ni(C, !1);
      }
      function Ya(C) {
        var M = C.prototype;
        return !!(M && M.isReactComponent);
      }
      function Rr(C, M, Z) {
        if (C == null)
          return "";
        if (typeof C == "function")
          return Ni(C, Ya(C));
        if (typeof C == "string")
          return pn(C);
        switch (C) {
          case z:
            return pn("Suspense");
          case X:
            return pn("SuspenseList");
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case I:
              return er(C.render);
            case V:
              return Rr(C.type, M, Z);
            case ve: {
              var re = C, Ae = re._payload, Nt = re._init;
              try {
                return Rr(Nt(Ae), M, Z);
              } catch {
              }
            }
          }
        return "";
      }
      var un = {}, $i = be.ReactDebugCurrentFrame;
      function Ta(C) {
        if (C) {
          var M = C._owner, Z = Rr(C.type, C._source, M ? M.type : null);
          $i.setExtraStackFrame(Z);
        } else
          $i.setExtraStackFrame(null);
      }
      function fa(C, M, Z, re, Ae) {
        {
          var Nt = Function.call.bind(mt);
          for (var Ge in C)
            if (Nt(C, Ge)) {
              var At = void 0;
              try {
                if (typeof C[Ge] != "function") {
                  var rn = Error((re || "React class") + ": " + Z + " type `" + Ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[Ge] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw rn.name = "Invariant Violation", rn;
                }
                At = C[Ge](M, Ge, re, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (En) {
                At = En;
              }
              At && !(At instanceof Error) && (Ta(Ae), pe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", Z, Ge, typeof At), Ta(null)), At instanceof Error && !(At.message in un) && (un[At.message] = !0, Ta(Ae), pe("Failed %s type: %s", Z, At.message), Ta(null));
            }
        }
      }
      function nn(C) {
        if (C) {
          var M = C._owner, Z = Rr(C.type, C._source, M ? M.type : null);
          Le(Z);
        } else
          Le(null);
      }
      var zi;
      zi = !1;
      function Gi() {
        if (Ve.current) {
          var C = ct(Ve.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
      function zt(C) {
        if (C !== void 0) {
          var M = C.fileName.replace(/^.*[\\\/]/, ""), Z = C.lineNumber;
          return `

Check your code at ` + M + ":" + Z + ".";
        }
        return "";
      }
      function li(C) {
        return C != null ? zt(C.__source) : "";
      }
      var Hn = {};
      function kr(C) {
        var M = Gi();
        if (!M) {
          var Z = typeof C == "string" ? C : C.displayName || C.name;
          Z && (M = `

Check the top-level render call using <` + Z + ">.");
        }
        return M;
      }
      function yr(C, M) {
        if (!(!C._store || C._store.validated || C.key != null)) {
          C._store.validated = !0;
          var Z = kr(M);
          if (!Hn[Z]) {
            Hn[Z] = !0;
            var re = "";
            C && C._owner && C._owner !== Ve.current && (re = " It was passed a child from " + ct(C._owner.type) + "."), nn(C), pe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, re), nn(null);
          }
        }
      }
      function Io(C, M) {
        if (typeof C == "object") {
          if (Vt(C))
            for (var Z = 0; Z < C.length; Z++) {
              var re = C[Z];
              en(re) && yr(re, M);
            }
          else if (en(C))
            C._store && (C._store.validated = !0);
          else if (C) {
            var Ae = he(C);
            if (typeof Ae == "function" && Ae !== C.entries)
              for (var Nt = Ae.call(C), Ge; !(Ge = Nt.next()).done; )
                en(Ge.value) && yr(Ge.value, M);
          }
        }
      }
      function ir(C) {
        {
          var M = C.type;
          if (M == null || typeof M == "string")
            return;
          var Z;
          if (typeof M == "function")
            Z = M.propTypes;
          else if (typeof M == "object" && (M.$$typeof === I || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          M.$$typeof === V))
            Z = M.propTypes;
          else
            return;
          if (Z) {
            var re = ct(M);
            fa(Z, C.props, "prop", re, C);
          } else if (M.PropTypes !== void 0 && !zi) {
            zi = !0;
            var Ae = ct(M);
            pe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
          }
          typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && pe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Dn(C) {
        {
          for (var M = Object.keys(C.props), Z = 0; Z < M.length; Z++) {
            var re = M[Z];
            if (re !== "children" && re !== "key") {
              nn(C), pe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), nn(null);
              break;
            }
          }
          C.ref !== null && (nn(C), pe("Invalid attribute `ref` supplied to `React.Fragment`."), nn(null));
        }
      }
      function yc(C, M, Z) {
        var re = $(C);
        if (!re) {
          var Ae = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (Ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Nt = li(M);
          Nt ? Ae += Nt : Ae += Gi();
          var Ge;
          C === null ? Ge = "null" : Vt(C) ? Ge = "array" : C !== void 0 && C.$$typeof === v ? (Ge = "<" + (ct(C.type) || "Unknown") + " />", Ae = " Did you accidentally export a JSX literal instead of a component?") : Ge = typeof C, pe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ge, Ae);
        }
        var At = Je.apply(this, arguments);
        if (At == null)
          return At;
        if (re)
          for (var rn = 2; rn < arguments.length; rn++)
            Io(arguments[rn], C);
        return C === T ? Dn(At) : ir(At), At;
      }
      var xa = !1;
      function Ur(C) {
        var M = yc.bind(null, C);
        return M.type = C, xa || (xa = !0, me("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(M, "type", {
          enumerable: !1,
          get: function() {
            return me("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: C
            }), C;
          }
        }), M;
      }
      function qi(C, M, Z) {
        for (var re = Dt.apply(this, arguments), Ae = 2; Ae < arguments.length; Ae++)
          Io(arguments[Ae], re.type);
        return ir(re), re;
      }
      function gc(C, M) {
        var Z = xe.transition;
        xe.transition = {};
        var re = xe.transition;
        xe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          C();
        } finally {
          if (xe.transition = Z, Z === null && re._updatedFibers) {
            var Ae = re._updatedFibers.size;
            Ae > 10 && me("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), re._updatedFibers.clear();
          }
        }
      }
      var fo = !1, Vo = null;
      function bc(C) {
        if (Vo === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7), Z = c && c[M];
            Vo = Z.call(c, "timers").setImmediate;
          } catch {
            Vo = function(Ae) {
              fo === !1 && (fo = !0, typeof MessageChannel > "u" && pe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Nt = new MessageChannel();
              Nt.port1.onmessage = Ae, Nt.port2.postMessage(void 0);
            };
          }
        return Vo(C);
      }
      var ui = 0, Bo = !1;
      function po(C) {
        {
          var M = ui;
          ui++, le.current === null && (le.current = []);
          var Z = le.isBatchingLegacy, re;
          try {
            if (le.isBatchingLegacy = !0, re = C(), !Z && le.didScheduleLegacyUpdate) {
              var Ae = le.current;
              Ae !== null && (le.didScheduleLegacyUpdate = !1, Yo(Ae));
            }
          } catch (Pn) {
            throw si(M), Pn;
          } finally {
            le.isBatchingLegacy = Z;
          }
          if (re !== null && typeof re == "object" && typeof re.then == "function") {
            var Nt = re, Ge = !1, At = {
              then: function(Pn, In) {
                Ge = !0, Nt.then(function(hn) {
                  si(M), ui === 0 ? ou(hn, Pn, In) : Pn(hn);
                }, function(hn) {
                  si(M), In(hn);
                });
              }
            };
            return !Bo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ge || (Bo = !0, pe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), At;
          } else {
            var rn = re;
            if (si(M), ui === 0) {
              var En = le.current;
              En !== null && (Yo(En), le.current = null);
              var jn = {
                then: function(Pn, In) {
                  le.current === null ? (le.current = [], ou(rn, Pn, In)) : Pn(rn);
                }
              };
              return jn;
            } else {
              var $n = {
                then: function(Pn, In) {
                  Pn(rn);
                }
              };
              return $n;
            }
          }
        }
      }
      function si(C) {
        C !== ui - 1 && pe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ui = C;
      }
      function ou(C, M, Z) {
        {
          var re = le.current;
          if (re !== null)
            try {
              Yo(re), bc(function() {
                re.length === 0 ? (le.current = null, M(C)) : ou(C, M, Z);
              });
            } catch (Ae) {
              Z(Ae);
            }
          else
            M(C);
        }
      }
      var Wo = !1;
      function Yo(C) {
        if (!Wo) {
          Wo = !0;
          var M = 0;
          try {
            for (; M < C.length; M++) {
              var Z = C[M];
              do
                Z = Z(!0);
              while (Z !== null);
            }
            C.length = 0;
          } catch (re) {
            throw C = C.slice(M + 1), re;
          } finally {
            Wo = !1;
          }
        }
      }
      var gl = yc, lu = qi, fs = Ur, Ui = {
        map: wr,
        forEach: Nr,
        count: Br,
        toArray: Ai,
        only: Tr
      };
      u.Children = Ui, u.Component = ne, u.Fragment = T, u.Profiler = O, u.PureComponent = at, u.StrictMode = g, u.Suspense = z, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, u.act = po, u.cloneElement = lu, u.createContext = Va, u.createElement = gl, u.createFactory = fs, u.createRef = Kt, u.forwardRef = ca, u.isValidElement = en, u.lazy = zr, u.memo = ye, u.startTransition = gc, u.unstable_act = po, u.useCallback = A, u.useContext = ut, u.useDebugValue = Ce, u.useDeferredValue = st, u.useEffect = It, u.useId = ot, u.useImperativeHandle = se, u.useInsertionEffect = Zn, u.useLayoutEffect = E, u.useMemo = G, u.useReducer = Zt, u.useRef = Tt, u.useState = Wt, u.useSyncExternalStore = on, u.useTransition = $e, u.version = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Sh, Sh.exports)), Sh.exports;
}
process.env.NODE_ENV === "production" ? dS.exports = xO() : dS.exports = RO();
var Ho = dS.exports;
const Mt = /* @__PURE__ */ TO(Ho);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v1;
function kO() {
  if (v1) return yh;
  v1 = 1;
  var c = Ho, u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, b = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(O, k, N) {
    var I, z = {}, X = null, V = null;
    N !== void 0 && (X = "" + N), k.key !== void 0 && (X = "" + k.key), k.ref !== void 0 && (V = k.ref);
    for (I in k) v.call(k, I) && !T.hasOwnProperty(I) && (z[I] = k[I]);
    if (O && O.defaultProps) for (I in k = O.defaultProps, k) z[I] === void 0 && (z[I] = k[I]);
    return { $$typeof: u, type: O, key: X, ref: V, props: z, _owner: b.current };
  }
  return yh.Fragment = d, yh.jsx = g, yh.jsxs = g, yh;
}
var gh = {};
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
function _O() {
  return m1 || (m1 = 1, process.env.NODE_ENV !== "production" && function() {
    var c = Ho, u = Symbol.for("react.element"), d = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), O = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), ve = Symbol.iterator, Ke = "@@iterator";
    function ae($) {
      if ($ === null || typeof $ != "object")
        return null;
      var ye = ve && $[ve] || $[Ke];
      return typeof ye == "function" ? ye : null;
    }
    var Ct = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function he($) {
      {
        for (var ye = arguments.length, ke = new Array(ye > 1 ? ye - 1 : 0), ut = 1; ut < ye; ut++)
          ke[ut - 1] = arguments[ut];
        Oe("error", $, ke);
      }
    }
    function Oe($, ye, ke) {
      {
        var ut = Ct.ReactDebugCurrentFrame, Wt = ut.getStackAddendum();
        Wt !== "" && (ye += "%s", ke = ke.concat([Wt]));
        var Zt = ke.map(function(Tt) {
          return String(Tt);
        });
        Zt.unshift("Warning: " + ye), Function.prototype.apply.call(console[$], console, Zt);
      }
    }
    var xe = !1, le = !1, Ve = !1, Re = !1, ze = !1, Le;
    Le = Symbol.for("react.module.reference");
    function Xe($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === v || $ === T || ze || $ === b || $ === N || $ === I || Re || $ === V || xe || le || Ve || typeof $ == "object" && $ !== null && ($.$$typeof === X || $.$$typeof === z || $.$$typeof === g || $.$$typeof === O || $.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === Le || $.getModuleId !== void 0));
    }
    function Et($, ye, ke) {
      var ut = $.displayName;
      if (ut)
        return ut;
      var Wt = ye.displayName || ye.name || "";
      return Wt !== "" ? ke + "(" + Wt + ")" : ke;
    }
    function Rt($) {
      return $.displayName || "Context";
    }
    function qe($) {
      if ($ == null)
        return null;
      if (typeof $.tag == "number" && he("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof $ == "function")
        return $.displayName || $.name || null;
      if (typeof $ == "string")
        return $;
      switch ($) {
        case v:
          return "Fragment";
        case d:
          return "Portal";
        case T:
          return "Profiler";
        case b:
          return "StrictMode";
        case N:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof $ == "object")
        switch ($.$$typeof) {
          case O:
            var ye = $;
            return Rt(ye) + ".Consumer";
          case g:
            var ke = $;
            return Rt(ke._context) + ".Provider";
          case k:
            return Et($, $.render, "ForwardRef");
          case z:
            var ut = $.displayName || null;
            return ut !== null ? ut : qe($.type) || "Memo";
          case X: {
            var Wt = $, Zt = Wt._payload, Tt = Wt._init;
            try {
              return qe(Tt(Zt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ue = Object.assign, be = 0, me, pe, de, Ye, q, D, H;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function ne() {
      {
        if (be === 0) {
          me = console.log, pe = console.info, de = console.warn, Ye = console.error, q = console.group, D = console.groupCollapsed, H = console.groupEnd;
          var $ = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: $,
            log: $,
            warn: $,
            error: $,
            group: $,
            groupCollapsed: $,
            groupEnd: $
          });
        }
        be++;
      }
    }
    function _() {
      {
        if (be--, be === 0) {
          var $ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ue({}, $, {
              value: me
            }),
            info: ue({}, $, {
              value: pe
            }),
            warn: ue({}, $, {
              value: de
            }),
            error: ue({}, $, {
              value: Ye
            }),
            group: ue({}, $, {
              value: q
            }),
            groupCollapsed: ue({}, $, {
              value: D
            }),
            groupEnd: ue({}, $, {
              value: H
            })
          });
        }
        be < 0 && he("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ue = Ct.ReactCurrentDispatcher, Fe;
    function He($, ye, ke) {
      {
        if (Fe === void 0)
          try {
            throw Error();
          } catch (Wt) {
            var ut = Wt.stack.trim().match(/\n( *(at )?)/);
            Fe = ut && ut[1] || "";
          }
        return `
` + Fe + $;
      }
    }
    var at = !1, kt;
    {
      var Kt = typeof WeakMap == "function" ? WeakMap : Map;
      kt = new Kt();
    }
    function Jt($, ye) {
      if (!$ || at)
        return "";
      {
        var ke = kt.get($);
        if (ke !== void 0)
          return ke;
      }
      var ut;
      at = !0;
      var Wt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Zt;
      Zt = Ue.current, Ue.current = null, ne();
      try {
        if (ye) {
          var Tt = function() {
            throw Error();
          };
          if (Object.defineProperty(Tt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Tt, []);
            } catch ($e) {
              ut = $e;
            }
            Reflect.construct($, [], Tt);
          } else {
            try {
              Tt.call();
            } catch ($e) {
              ut = $e;
            }
            $.call(Tt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($e) {
            ut = $e;
          }
          $();
        }
      } catch ($e) {
        if ($e && ut && typeof $e.stack == "string") {
          for (var It = $e.stack.split(`
`), Zn = ut.stack.split(`
`), E = It.length - 1, A = Zn.length - 1; E >= 1 && A >= 0 && It[E] !== Zn[A]; )
            A--;
          for (; E >= 1 && A >= 0; E--, A--)
            if (It[E] !== Zn[A]) {
              if (E !== 1 || A !== 1)
                do
                  if (E--, A--, A < 0 || It[E] !== Zn[A]) {
                    var G = `
` + It[E].replace(" at new ", " at ");
                    return $.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", $.displayName)), typeof $ == "function" && kt.set($, G), G;
                  }
                while (E >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        at = !1, Ue.current = Zt, _(), Error.prepareStackTrace = Wt;
      }
      var se = $ ? $.displayName || $.name : "", Ce = se ? He(se) : "";
      return typeof $ == "function" && kt.set($, Ce), Ce;
    }
    function Vt($, ye, ke) {
      return Jt($, !1);
    }
    function Bt($) {
      var ye = $.prototype;
      return !!(ye && ye.isReactComponent);
    }
    function Q($, ye, ke) {
      if ($ == null)
        return "";
      if (typeof $ == "function")
        return Jt($, Bt($));
      if (typeof $ == "string")
        return He($);
      switch ($) {
        case N:
          return He("Suspense");
        case I:
          return He("SuspenseList");
      }
      if (typeof $ == "object")
        switch ($.$$typeof) {
          case k:
            return Vt($.render);
          case z:
            return Q($.type, ye, ke);
          case X: {
            var ut = $, Wt = ut._payload, Zt = ut._init;
            try {
              return Q(Zt(Wt), ye, ke);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, Ne = {}, vt = Ct.ReactDebugCurrentFrame;
    function it($) {
      if ($) {
        var ye = $._owner, ke = Q($.type, $._source, ye ? ye.type : null);
        vt.setExtraStackFrame(ke);
      } else
        vt.setExtraStackFrame(null);
    }
    function ct($, ye, ke, ut, Wt) {
      {
        var Zt = Function.call.bind(ce);
        for (var Tt in $)
          if (Zt($, Tt)) {
            var It = void 0;
            try {
              if (typeof $[Tt] != "function") {
                var Zn = Error((ut || "React class") + ": " + ke + " type `" + Tt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof $[Tt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Zn.name = "Invariant Violation", Zn;
              }
              It = $[Tt](ye, Tt, ut, ke, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              It = E;
            }
            It && !(It instanceof Error) && (it(Wt), he("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ut || "React class", ke, Tt, typeof It), it(null)), It instanceof Error && !(It.message in Ne) && (Ne[It.message] = !0, it(Wt), he("Failed %s type: %s", ke, It.message), it(null));
          }
      }
    }
    var mt = Array.isArray;
    function Ht($) {
      return mt($);
    }
    function je($) {
      {
        var ye = typeof Symbol == "function" && Symbol.toStringTag, ke = ye && $[Symbol.toStringTag] || $.constructor.name || "Object";
        return ke;
      }
    }
    function nt($) {
      try {
        return wt($), !1;
      } catch {
        return !0;
      }
    }
    function wt($) {
      return "" + $;
    }
    function Ie($) {
      if (nt($))
        return he("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", je($)), wt($);
    }
    var Pe = Ct.ReactCurrentOwner, Gt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, An, mn, we;
    we = {};
    function Je($) {
      if (ce.call($, "ref")) {
        var ye = Object.getOwnPropertyDescriptor($, "ref").get;
        if (ye && ye.isReactWarning)
          return !1;
      }
      return $.ref !== void 0;
    }
    function Lt($) {
      if (ce.call($, "key")) {
        var ye = Object.getOwnPropertyDescriptor($, "key").get;
        if (ye && ye.isReactWarning)
          return !1;
      }
      return $.key !== void 0;
    }
    function Dt($, ye) {
      if (typeof $.ref == "string" && Pe.current && ye && Pe.current.stateNode !== ye) {
        var ke = qe(Pe.current.type);
        we[ke] || (he('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', qe(Pe.current.type), $.ref), we[ke] = !0);
      }
    }
    function en($, ye) {
      {
        var ke = function() {
          An || (An = !0, he("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ye));
        };
        ke.isReactWarning = !0, Object.defineProperty($, "key", {
          get: ke,
          configurable: !0
        });
      }
    }
    function Mn($, ye) {
      {
        var ke = function() {
          mn || (mn = !0, he("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ye));
        };
        ke.isReactWarning = !0, Object.defineProperty($, "ref", {
          get: ke,
          configurable: !0
        });
      }
    }
    var Nn = function($, ye, ke, ut, Wt, Zt, Tt) {
      var It = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: $,
        key: ye,
        ref: ke,
        props: Tt,
        // Record the component responsible for creating this element.
        _owner: Zt
      };
      return It._store = {}, Object.defineProperty(It._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(It, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ut
      }), Object.defineProperty(It, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Wt
      }), Object.freeze && (Object.freeze(It.props), Object.freeze(It)), It;
    };
    function Qn($, ye, ke, ut, Wt) {
      {
        var Zt, Tt = {}, It = null, Zn = null;
        ke !== void 0 && (Ie(ke), It = "" + ke), Lt(ye) && (Ie(ye.key), It = "" + ye.key), Je(ye) && (Zn = ye.ref, Dt(ye, Wt));
        for (Zt in ye)
          ce.call(ye, Zt) && !Gt.hasOwnProperty(Zt) && (Tt[Zt] = ye[Zt]);
        if ($ && $.defaultProps) {
          var E = $.defaultProps;
          for (Zt in E)
            Tt[Zt] === void 0 && (Tt[Zt] = E[Zt]);
        }
        if (It || Zn) {
          var A = typeof $ == "function" ? $.displayName || $.name || "Unknown" : $;
          It && en(Tt, A), Zn && Mn(Tt, A);
        }
        return Nn($, It, Zn, Wt, ut, Pe.current, Tt);
      }
    }
    var sn = Ct.ReactCurrentOwner, Er = Ct.ReactDebugCurrentFrame;
    function Sn($) {
      if ($) {
        var ye = $._owner, ke = Q($.type, $._source, ye ? ye.type : null);
        Er.setExtraStackFrame(ke);
      } else
        Er.setExtraStackFrame(null);
    }
    var yn;
    yn = !1;
    function aa($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === u;
    }
    function wr() {
      {
        if (sn.current) {
          var $ = qe(sn.current.type);
          if ($)
            return `

Check the render method of \`` + $ + "`.";
        }
        return "";
      }
    }
    function Br($) {
      return "";
    }
    var Nr = {};
    function Ai($) {
      {
        var ye = wr();
        if (!ye) {
          var ke = typeof $ == "string" ? $ : $.displayName || $.name;
          ke && (ye = `

Check the top-level render call using <` + ke + ">.");
        }
        return ye;
      }
    }
    function Tr($, ye) {
      {
        if (!$._store || $._store.validated || $.key != null)
          return;
        $._store.validated = !0;
        var ke = Ai(ye);
        if (Nr[ke])
          return;
        Nr[ke] = !0;
        var ut = "";
        $ && $._owner && $._owner !== sn.current && (ut = " It was passed a child from " + qe($._owner.type) + "."), Sn($), he('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ke, ut), Sn(null);
      }
    }
    function Va($, ye) {
      {
        if (typeof $ != "object")
          return;
        if (Ht($))
          for (var ke = 0; ke < $.length; ke++) {
            var ut = $[ke];
            aa(ut) && Tr(ut, ye);
          }
        else if (aa($))
          $._store && ($._store.validated = !0);
        else if ($) {
          var Wt = ae($);
          if (typeof Wt == "function" && Wt !== $.entries)
            for (var Zt = Wt.call($), Tt; !(Tt = Zt.next()).done; )
              aa(Tt.value) && Tr(Tt.value, ye);
        }
      }
    }
    function xr($) {
      {
        var ye = $.type;
        if (ye == null || typeof ye == "string")
          return;
        var ke;
        if (typeof ye == "function")
          ke = ye.propTypes;
        else if (typeof ye == "object" && (ye.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ye.$$typeof === z))
          ke = ye.propTypes;
        else
          return;
        if (ke) {
          var ut = qe(ye);
          ct(ke, $.props, "prop", ut, $);
        } else if (ye.PropTypes !== void 0 && !yn) {
          yn = !0;
          var Wt = qe(ye);
          he("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Wt || "Unknown");
        }
        typeof ye.getDefaultProps == "function" && !ye.getDefaultProps.isReactClassApproved && he("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $r($) {
      {
        for (var ye = Object.keys($.props), ke = 0; ke < ye.length; ke++) {
          var ut = ye[ke];
          if (ut !== "children" && ut !== "key") {
            Sn($), he("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ut), Sn(null);
            break;
          }
        }
        $.ref !== null && (Sn($), he("Invalid attribute `ref` supplied to `React.Fragment`."), Sn(null));
      }
    }
    var cr = {};
    function wn($, ye, ke, ut, Wt, Zt) {
      {
        var Tt = Xe($);
        if (!Tt) {
          var It = "";
          ($ === void 0 || typeof $ == "object" && $ !== null && Object.keys($).length === 0) && (It += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Zn = Br();
          Zn ? It += Zn : It += wr();
          var E;
          $ === null ? E = "null" : Ht($) ? E = "array" : $ !== void 0 && $.$$typeof === u ? (E = "<" + (qe($.type) || "Unknown") + " />", It = " Did you accidentally export a JSX literal instead of a component?") : E = typeof $, he("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, It);
        }
        var A = Qn($, ye, ke, Wt, Zt);
        if (A == null)
          return A;
        if (Tt) {
          var G = ye.children;
          if (G !== void 0)
            if (ut)
              if (Ht(G)) {
                for (var se = 0; se < G.length; se++)
                  Va(G[se], $);
                Object.freeze && Object.freeze(G);
              } else
                he("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Va(G, $);
        }
        if (ce.call(ye, "key")) {
          var Ce = qe($), $e = Object.keys(ye).filter(function(on) {
            return on !== "key";
          }), st = $e.length > 0 ? "{key: someKey, " + $e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!cr[Ce + st]) {
            var ot = $e.length > 0 ? "{" + $e.join(": ..., ") + ": ...}" : "{}";
            he(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, st, Ce, ot, Ce), cr[Ce + st] = !0;
          }
        }
        return $ === v ? $r(A) : xr(A), A;
      }
    }
    function fr($, ye, ke) {
      return wn($, ye, ke, !0);
    }
    function zr($, ye, ke) {
      return wn($, ye, ke, !1);
    }
    var ca = zr, ar = fr;
    gh.Fragment = v, gh.jsx = ca, gh.jsxs = ar;
  }()), gh;
}
process.env.NODE_ENV === "production" ? kO() : _O();
var so = {
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
}, DO = Object.defineProperty, OO = (c, u) => {
  for (var d in u)
    DO(c, d, { get: u[d], enumerable: !0 });
}, LO = {
  isDev: !1,
  isBrowser: !0,
  isServer: !1,
  isTesting: !1
}, Y1 = /* @__PURE__ */ new WeakMap(), mc = (c) => Y1.get(c), AO = (c, u) => {
  const d = {
    $flags$: 0,
    $hostElement$: c,
    $cmpMeta$: u,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  return Y1.set(c, d);
}, y1 = (c, u) => u in c, Eh = (c, u) => (0, console.error)(c, u), Ey = /* @__PURE__ */ new Map(), MO = [], NO = "slot-fb{display:contents}slot-fb[hidden]{display:none}", g1 = "http://www.w3.org/1999/xlink", wh = typeof window < "u" ? window : {}, Fo = wh.document || { head: {} }, pd = wh.HTMLElement || class {
}, Ea = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (c) => c(),
  raf: (c) => requestAnimationFrame(c),
  ael: (c, u, d, v) => c.addEventListener(u, d, v),
  rel: (c, u, d, v) => c.removeEventListener(u, d, v),
  ce: (c, u) => new CustomEvent(c, u)
}, $O = /* @__PURE__ */ (() => {
  let c = !1;
  try {
    Fo.addEventListener(
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
})(), zO = (c) => Promise.resolve(c), UO = /* @__PURE__ */ (() => {
  try {
    return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == "function";
  } catch {
  }
  return !1;
})(), pS = !1, hS = [], G1 = [], q1 = (c, u) => (d) => {
  c.push(d), pS || (pS = !0, u && Ea.$flags$ & 4 ? jO(vS) : Ea.raf(vS));
}, b1 = (c) => {
  for (let u = 0; u < c.length; u++)
    try {
      c[u](performance.now());
    } catch (d) {
      Eh(d);
    }
  c.length = 0;
}, vS = () => {
  b1(hS), b1(G1), (pS = hS.length > 0) && Ea.raf(vS);
}, jO = (c) => zO().then(c), PO = /* @__PURE__ */ q1(hS, !1), xS = /* @__PURE__ */ q1(G1, !0), FO = (c) => {
  const u = new URL(c, Ea.$resourcesUrl$);
  return u.origin !== wh.location.origin ? u.href : u.pathname;
}, S1 = {}, HO = "http://www.w3.org/2000/svg", IO = "http://www.w3.org/1999/xhtml", VO = (c) => c != null, RS = (c) => (c = typeof c, c === "object" || c === "function");
function BO(c) {
  var u, d, v;
  return (v = (d = (u = c.head) == null ? void 0 : u.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : d.getAttribute("content")) != null ? v : void 0;
}
var WO = {};
OO(WO, {
  err: () => Q1,
  map: () => YO,
  ok: () => mS,
  unwrap: () => GO,
  unwrapErr: () => qO
});
var mS = (c) => ({
  isOk: !0,
  isErr: !1,
  value: c
}), Q1 = (c) => ({
  isOk: !1,
  isErr: !0,
  value: c
});
function YO(c, u) {
  if (c.isOk) {
    const d = u(c.value);
    return d instanceof Promise ? d.then((v) => mS(v)) : mS(d);
  }
  if (c.isErr) {
    const d = c.value;
    return Q1(d);
  }
  throw "should never get here";
}
var GO = (c) => {
  if (c.isOk)
    return c.value;
  throw c.value;
}, qO = (c) => {
  if (c.isErr)
    return c.value;
  throw c.value;
}, vc = (c, u = "") => () => {
}, ai = (c, u, ...d) => {
  let v = null, b = null, T = null, g = !1, O = !1;
  const k = [], N = (z) => {
    for (let X = 0; X < z.length; X++)
      v = z[X], Array.isArray(v) ? N(v) : v != null && typeof v != "boolean" && ((g = typeof c != "function" && !RS(v)) && (v = String(v)), g && O ? k[k.length - 1].$text$ += v : k.push(g ? wy(null, v) : v), O = g);
  };
  if (N(d), u) {
    u.key && (b = u.key), u.name && (T = u.name);
    {
      const z = u.className || u.class;
      z && (u.class = typeof z != "object" ? z : Object.keys(z).filter((X) => z[X]).join(" "));
    }
  }
  if (typeof c == "function")
    return c(
      u === null ? {} : u,
      k,
      KO
    );
  const I = wy(c, null);
  return I.$attrs$ = u, k.length > 0 && (I.$children$ = k), I.$key$ = b, I.$name$ = T, I;
}, wy = (c, u) => {
  const d = {
    $flags$: 0,
    $tag$: c,
    $text$: u,
    $elm$: null,
    $children$: null
  };
  return d.$attrs$ = null, d.$key$ = null, d.$name$ = null, d;
}, Th = {}, QO = (c) => c && c.$tag$ === Th, KO = {
  forEach: (c, u) => c.map(C1).forEach(u),
  map: (c, u) => c.map(C1).map(u).map(XO)
}, C1 = (c) => ({
  vattrs: c.$attrs$,
  vchildren: c.$children$,
  vkey: c.$key$,
  vname: c.$name$,
  vtag: c.$tag$,
  vtext: c.$text$
}), XO = (c) => {
  if (typeof c.vtag == "function") {
    const d = { ...c.vattrs };
    return c.vkey && (d.key = c.vkey), c.vname && (d.name = c.vname), ai(c.vtag, d, ...c.vchildren || []);
  }
  const u = wy(c.vtag, c.vtext);
  return u.$attrs$ = c.vattrs, u.$children$ = c.vchildren, u.$key$ = c.vkey, u.$name$ = c.vname, u;
}, JO = (c) => MO.map((u) => u(c)).find((u) => !!u), ZO = (c) => mc(c).$modeName$, eL = (c, u) => c != null && !RS(c) ? u & 4 ? c === "false" ? !1 : c === "" || !!c : u & 2 ? parseFloat(c) : u & 1 ? String(c) : c : c, tL = (c) => c, ru = (c, u, d) => {
  const v = tL(c);
  return {
    emit: (b) => nL(v, u, {
      bubbles: !!(d & 4),
      composed: !!(d & 2),
      cancelable: !!(d & 1),
      detail: b
    })
  };
}, nL = (c, u, d) => {
  const v = Ea.ce(u, d);
  return c.dispatchEvent(v), v;
}, E1 = /* @__PURE__ */ new WeakMap(), rL = (c, u, d) => {
  let v = Ey.get(c);
  UO && d ? (v = v || new CSSStyleSheet(), typeof v == "string" ? v = u : v.replaceSync(u)) : v = u, Ey.set(c, v);
}, aL = (c, u, d) => {
  var v;
  const b = K1(u, d), T = Ey.get(b);
  if (c = c.nodeType === 11 ? c : Fo, T)
    if (typeof T == "string") {
      c = c.head || c;
      let g = E1.get(c), O;
      if (g || E1.set(c, g = /* @__PURE__ */ new Set()), !g.has(b)) {
        {
          O = Fo.createElement("style"), O.innerHTML = T;
          const k = (v = Ea.$nonce$) != null ? v : BO(Fo);
          k != null && O.setAttribute("nonce", k), /**
           * we render a scoped component
           */
          (!(u.$flags$ & 1) || /**
          * we are using shadow dom and render the style tag within the shadowRoot
          */
          u.$flags$ & 1 && c.nodeName !== "HEAD") && c.insertBefore(O, c.querySelector("link"));
        }
        u.$flags$ & 4 && (O.innerHTML += NO), g && g.add(b);
      }
    } else c.adoptedStyleSheets.includes(T) || (c.adoptedStyleSheets = [...c.adoptedStyleSheets, T]);
  return b;
}, iL = (c) => {
  const u = c.$cmpMeta$, d = c.$hostElement$, v = u.$flags$, b = vc("attachStyles", u.$tagName$), T = aL(
    d.shadowRoot ? d.shadowRoot : d.getRootNode(),
    u,
    c.$modeName$
  );
  v & 10 && v & 2 && (d["s-sc"] = T, d.classList.add(T + "-h"), v & 2 && d.classList.add(T + "-s")), b();
}, K1 = (c, u) => "sc-" + (u && c.$flags$ & 32 ? c.$tagName$ + "-" + u : c.$tagName$), w1 = (c, u, d, v, b, T) => {
  if (d !== v) {
    let g = y1(c, u), O = u.toLowerCase();
    if (u === "class") {
      const k = c.classList, N = T1(d), I = T1(v);
      k.remove(...N.filter((z) => z && !I.includes(z))), k.add(...I.filter((z) => z && !N.includes(z)));
    } else if (u === "style") {
      for (const k in d)
        (!v || v[k] == null) && (k.includes("-") ? c.style.removeProperty(k) : c.style[k] = "");
      for (const k in v)
        (!d || v[k] !== d[k]) && (k.includes("-") ? c.style.setProperty(k, v[k]) : c.style[k] = v[k]);
    } else if (u !== "key") if (u === "ref")
      v && v(c);
    else if (!c.__lookupSetter__(u) && u[0] === "o" && u[1] === "n") {
      if (u[2] === "-" ? u = u.slice(3) : y1(wh, O) ? u = O.slice(2) : u = O[2] + u.slice(3), d || v) {
        const k = u.endsWith(X1);
        u = u.replace(lL, ""), d && Ea.rel(c, u, d, k), v && Ea.ael(c, u, v, k);
      }
    } else {
      const k = RS(v);
      if ((g || k && v !== null) && !b)
        try {
          if (c.tagName.includes("-"))
            c[u] = v;
          else {
            const I = v ?? "";
            u === "list" ? g = !1 : (d == null || c[u] != I) && (c[u] = I);
          }
        } catch {
        }
      let N = !1;
      O !== (O = O.replace(/^xlink\:?/, "")) && (u = O, N = !0), v == null || v === !1 ? (v !== !1 || c.getAttribute(u) === "") && (N ? c.removeAttributeNS(g1, u) : c.removeAttribute(u)) : (!g || T & 4 || b) && !k && (v = v === !0 ? "" : v, N ? c.setAttributeNS(g1, u, v) : c.setAttribute(u, v));
    }
  }
}, oL = /\s/, T1 = (c) => c ? c.split(oL) : [], X1 = "Capture", lL = new RegExp(X1 + "$"), J1 = (c, u, d) => {
  const v = u.$elm$.nodeType === 11 && u.$elm$.host ? u.$elm$.host : u.$elm$, b = c && c.$attrs$ || S1, T = u.$attrs$ || S1;
  for (const g of x1(Object.keys(b)))
    g in T || w1(v, g, b[g], void 0, d, u.$flags$);
  for (const g of x1(Object.keys(T)))
    w1(v, g, b[g], T[g], d, u.$flags$);
};
function x1(c) {
  return c.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...c.filter((u) => u !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    c
  );
}
var ld, yS, cd, Ty = !1, xy = !1, kS = !1, Yi = !1, Ry = (c, u, d, v) => {
  var b;
  const T = u.$children$[d];
  let g = 0, O, k, N;
  if (Ty || (kS = !0, T.$tag$ === "slot" && (ld && v.classList.add(ld + "-s"), T.$flags$ |= T.$children$ ? (
    // slot element has fallback content
    // still create an element that "mocks" the slot element
    2
  ) : (
    // slot element does not have fallback content
    // create an html comment we'll use to always reference
    // where actual slot content should sit next to
    1
  ))), T.$text$ !== null)
    O = T.$elm$ = Fo.createTextNode(T.$text$);
  else if (T.$flags$ & 1)
    O = T.$elm$ = Fo.createTextNode("");
  else {
    if (Yi || (Yi = T.$tag$ === "svg"), O = T.$elm$ = Fo.createElementNS(
      Yi ? HO : IO,
      !Ty && so.slotRelocation && T.$flags$ & 2 ? "slot-fb" : T.$tag$
    ), Yi && T.$tag$ === "foreignObject" && (Yi = !1), J1(null, T, Yi), !!O.getRootNode().querySelector("body") && so.scoped && VO(ld) && O["s-si"] !== ld && O.classList.add(O["s-si"] = ld), DS(O, v), T.$children$)
      for (g = 0; g < T.$children$.length; ++g)
        k = Ry(c, T, g, O), k && O.appendChild(k);
    T.$tag$ === "svg" ? Yi = !1 : O.tagName === "foreignObject" && (Yi = !0);
  }
  return O["s-hn"] = cd, T.$flags$ & 3 && (O["s-sr"] = !0, O["s-cr"] = yS, O["s-sn"] = T.$name$ || "", O["s-rf"] = (b = T.$attrs$) == null ? void 0 : b.ref, N = c && c.$children$ && c.$children$[d], N && N.$tag$ === T.$tag$ && c.$elm$ && Ch(c.$elm$, !1)), O;
}, Ch = (c, u) => {
  Ea.$flags$ |= 1;
  const d = Array.from(c.childNodes);
  if (c["s-sr"] && so.experimentalSlotFixes) {
    let v = c;
    for (; v = v.nextSibling; )
      v && v["s-sn"] === c["s-sn"] && v["s-sh"] === cd && d.push(v);
  }
  for (let v = d.length - 1; v >= 0; v--) {
    const b = d[v];
    b["s-hn"] !== cd && b["s-ol"] && (ss(tT(b), b, _S(b)), b["s-ol"].remove(), b["s-ol"] = void 0, b["s-sh"] = void 0, kS = !0), u && Ch(b, u);
  }
  Ea.$flags$ &= -2;
}, Z1 = (c, u, d, v, b, T) => {
  let g = c["s-cr"] && c["s-cr"].parentNode || c, O;
  for (g.shadowRoot && g.tagName === cd && (g = g.shadowRoot); b <= T; ++b)
    v[b] && (O = Ry(null, d, b, c), O && (v[b].$elm$ = O, ss(g, O, _S(u))));
}, eT = (c, u, d) => {
  for (let v = u; v <= d; ++v) {
    const b = c[v];
    if (b) {
      const T = b.$elm$;
      aT(b), T && (xy = !0, T["s-ol"] ? T["s-ol"].remove() : Ch(T, !0), T.remove());
    }
  }
}, uL = (c, u, d, v, b = !1) => {
  let T = 0, g = 0, O = 0, k = 0, N = u.length - 1, I = u[0], z = u[N], X = v.length - 1, V = v[0], ve = v[X], Ke, ae;
  for (; T <= N && g <= X; )
    if (I == null)
      I = u[++T];
    else if (z == null)
      z = u[--N];
    else if (V == null)
      V = v[++g];
    else if (ve == null)
      ve = v[--X];
    else if (my(I, V, b))
      ud(I, V, b), I = u[++T], V = v[++g];
    else if (my(z, ve, b))
      ud(z, ve, b), z = u[--N], ve = v[--X];
    else if (my(I, ve, b))
      (I.$tag$ === "slot" || ve.$tag$ === "slot") && Ch(I.$elm$.parentNode, !1), ud(I, ve, b), ss(c, I.$elm$, z.$elm$.nextSibling), I = u[++T], ve = v[--X];
    else if (my(z, V, b))
      (I.$tag$ === "slot" || ve.$tag$ === "slot") && Ch(z.$elm$.parentNode, !1), ud(z, V, b), ss(c, z.$elm$, I.$elm$), z = u[--N], V = v[++g];
    else {
      for (O = -1, k = T; k <= N; ++k)
        if (u[k] && u[k].$key$ !== null && u[k].$key$ === V.$key$) {
          O = k;
          break;
        }
      O >= 0 ? (ae = u[O], ae.$tag$ !== V.$tag$ ? Ke = Ry(u && u[g], d, O, c) : (ud(ae, V, b), u[O] = void 0, Ke = ae.$elm$), V = v[++g]) : (Ke = Ry(u && u[g], d, g, c), V = v[++g]), Ke && ss(tT(I.$elm$), Ke, _S(I.$elm$));
    }
  T > N ? Z1(
    c,
    v[X + 1] == null ? null : v[X + 1].$elm$,
    d,
    v,
    g,
    X
  ) : g > X && eT(u, T, N);
}, my = (c, u, d = !1) => c.$tag$ === u.$tag$ ? c.$tag$ === "slot" ? (
  // The component gets hydrated and no VDOM has been initialized.
  // Here the comparison can't happen as $name$ property is not set for `leftNode`.
  "$nodeId$" in c && d && // `leftNode` is not from type HTMLComment which would cause many
  // hydration comments to be removed
  c.$elm$.nodeType !== 8 ? !1 : c.$name$ === u.$name$
) : d ? !0 : c.$key$ === u.$key$ : !1, _S = (c) => c && c["s-ol"] || c, tT = (c) => (c["s-ol"] ? c["s-ol"] : c).parentNode, ud = (c, u, d = !1) => {
  const v = u.$elm$ = c.$elm$, b = c.$children$, T = u.$children$, g = u.$tag$, O = u.$text$;
  let k;
  O === null ? (Yi = g === "svg" ? !0 : g === "foreignObject" ? !1 : Yi, g === "slot" && !Ty || J1(c, u, Yi), b !== null && T !== null ? uL(v, b, u, T, d) : T !== null ? (c.$text$ !== null && (v.textContent = ""), Z1(v, null, u, T, 0, T.length - 1)) : (
    // don't do this on initial render as it can cause non-hydrated content to be removed
    !d && so.updatable && b !== null && eT(b, 0, b.length - 1)
  ), Yi && g === "svg" && (Yi = !1)) : (k = v["s-cr"]) ? k.parentNode.textContent = O : c.$text$ !== O && (v.data = O);
}, nT = (c) => {
  const u = c.childNodes;
  for (const d of u)
    if (d.nodeType === 1) {
      if (d["s-sr"]) {
        const v = d["s-sn"];
        d.hidden = !1;
        for (const b of u)
          if (b !== d) {
            if (b["s-hn"] !== d["s-hn"] || v !== "") {
              if (b.nodeType === 1 && (v === b.getAttribute("slot") || v === b["s-sn"]) || b.nodeType === 3 && v === b["s-sn"]) {
                d.hidden = !0;
                break;
              }
            } else if (b.nodeType === 1 || b.nodeType === 3 && b.textContent.trim() !== "") {
              d.hidden = !0;
              break;
            }
          }
      }
      nT(d);
    }
}, tu = [], rT = (c) => {
  let u, d, v;
  for (const b of c.childNodes) {
    if (b["s-sr"] && (u = b["s-cr"]) && u.parentNode) {
      d = u.parentNode.childNodes;
      const T = b["s-sn"];
      for (v = d.length - 1; v >= 0; v--)
        if (u = d[v], !u["s-cn"] && !u["s-nr"] && u["s-hn"] !== b["s-hn"] && !so.experimentalSlotFixes)
          if (R1(u, T)) {
            let g = tu.find((O) => O.$nodeToRelocate$ === u);
            xy = !0, u["s-sn"] = u["s-sn"] || T, g ? (g.$nodeToRelocate$["s-sh"] = b["s-hn"], g.$slotRefNode$ = b) : (u["s-sh"] = b["s-hn"], tu.push({
              $slotRefNode$: b,
              $nodeToRelocate$: u
            })), u["s-sr"] && tu.map((O) => {
              R1(O.$nodeToRelocate$, u["s-sn"]) && (g = tu.find((k) => k.$nodeToRelocate$ === u), g && !O.$slotRefNode$ && (O.$slotRefNode$ = g.$slotRefNode$));
            });
          } else tu.some((g) => g.$nodeToRelocate$ === u) || tu.push({
            $nodeToRelocate$: u
          });
    }
    b.nodeType === 1 && rT(b);
  }
}, R1 = (c, u) => c.nodeType === 1 ? c.getAttribute("slot") === null && u === "" || c.getAttribute("slot") === u : c["s-sn"] === u ? !0 : u === "", aT = (c) => {
  c.$attrs$ && c.$attrs$.ref && c.$attrs$.ref(null), c.$children$ && c.$children$.map(aT);
}, ss = (c, u, d) => {
  const v = c == null ? void 0 : c.insertBefore(u, d);
  return DS(u, c), v;
}, iT = (c) => {
  const u = [];
  return c && u.push(
    ...c["s-scs"] || [],
    c["s-si"],
    c["s-sc"],
    ...iT(c.parentElement)
  ), u;
}, DS = (c, u, d = !1) => {
  var v;
  if (c && u && c.nodeType === 1) {
    const b = new Set(iT(u).filter(Boolean));
    if (b.size && ((v = c.classList) == null || v.add(...c["s-scs"] = [...b]), c["s-ol"] || d))
      for (const T of Array.from(c.childNodes))
        DS(T, c, !0);
  }
}, sL = (c, u, d = !1) => {
  var v, b, T, g, O;
  const k = c.$hostElement$, N = c.$cmpMeta$, I = c.$vnode$ || wy(null, null), z = QO(u) ? u : ai(null, null, u);
  if (cd = k.tagName, N.$attrsToReflect$ && (z.$attrs$ = z.$attrs$ || {}, N.$attrsToReflect$.map(
    ([X, V]) => z.$attrs$[V] = k[X]
  )), d && z.$attrs$)
    for (const X of Object.keys(z.$attrs$))
      k.hasAttribute(X) && !["key", "ref", "style", "class"].includes(X) && (z.$attrs$[X] = k[X]);
  z.$tag$ = null, z.$flags$ |= 4, c.$vnode$ = z, z.$elm$ = I.$elm$ = k.shadowRoot || k, ld = k["s-sc"], Ty = (N.$flags$ & 1) !== 0, yS = k["s-cr"], xy = !1, ud(I, z, d);
  {
    if (Ea.$flags$ |= 1, kS) {
      rT(z.$elm$);
      for (const X of tu) {
        const V = X.$nodeToRelocate$;
        if (!V["s-ol"]) {
          const ve = Fo.createTextNode("");
          ve["s-nr"] = V, ss(V.parentNode, V["s-ol"] = ve, V);
        }
      }
      for (const X of tu) {
        const V = X.$nodeToRelocate$, ve = X.$slotRefNode$;
        if (ve) {
          const Ke = ve.parentNode;
          let ae = ve.nextSibling;
          {
            let Ct = (v = V["s-ol"]) == null ? void 0 : v.previousSibling;
            for (; Ct; ) {
              let he = (b = Ct["s-nr"]) != null ? b : null;
              if (he && he["s-sn"] === V["s-sn"] && Ke === he.parentNode) {
                for (he = he.nextSibling; he === V || he != null && he["s-sr"]; )
                  he = he == null ? void 0 : he.nextSibling;
                if (!he || !he["s-nr"]) {
                  ae = he;
                  break;
                }
              }
              Ct = Ct.previousSibling;
            }
          }
          (!ae && Ke !== V.parentNode || V.nextSibling !== ae) && V !== ae && (!V["s-hn"] && V["s-ol"] && (V["s-hn"] = V["s-ol"].parentNode.nodeName), ss(Ke, V, ae), V.nodeType === 1 && (V.hidden = (T = V["s-ih"]) != null ? T : !1)), V && typeof ve["s-rf"] == "function" && ve["s-rf"](V);
        } else
          V.nodeType === 1 && (d && (V["s-ih"] = (g = V.hidden) != null ? g : !1), V.hidden = !0);
      }
    }
    xy && nT(z.$elm$), Ea.$flags$ &= -2, tu.length = 0;
  }
  if (so.experimentalScopedSlotChanges && N.$flags$ & 2)
    for (const X of z.$elm$.childNodes)
      X["s-hn"] !== cd && !X["s-sh"] && (d && X["s-ih"] == null && (X["s-ih"] = (O = X.hidden) != null ? O : !1), X.hidden = !0);
  yS = void 0;
}, cL = (c, u) => {
}, oT = (c, u) => (c.$flags$ |= 16, cL(c, c.$ancestorComponent$), xS(() => fL(c, u))), fL = (c, u) => {
  const d = c.$hostElement$, v = vc("scheduleUpdate", c.$cmpMeta$.$tagName$), b = d;
  if (!b)
    throw new Error(
      `Can't render component <${d.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  let T;
  return u ? T = sd(b, "componentWillLoad") : T = sd(b, "componentWillUpdate"), T = k1(T, () => sd(b, "componentWillRender")), v(), k1(T, () => pL(c, b, u));
}, k1 = (c, u) => dL(c) ? c.then(u).catch((d) => {
  console.error(d), u();
}) : u(), dL = (c) => c instanceof Promise || c && c.then && typeof c.then == "function", pL = async (c, u, d) => {
  const v = c.$hostElement$, b = vc("update", c.$cmpMeta$.$tagName$);
  v["s-rc"], d && iL(c);
  const T = vc("render", c.$cmpMeta$.$tagName$);
  hL(c, u, v, d), T(), b(), vL(c);
}, _1 = null, hL = (c, u, d, v) => {
  try {
    _1 = u, u = u.render && u.render(), c.$flags$ &= -17, c.$flags$ |= 2, (so.hasRenderFn || so.reflect) && (so.vdomRender || so.reflect) && (so.hydrateServerSide || sL(c, u, v));
  } catch (k) {
    Eh(k, c.$hostElement$);
  }
  return _1 = null, null;
}, vL = (c) => {
  const u = c.$cmpMeta$.$tagName$, d = c.$hostElement$, v = vc("postUpdate", u), b = d;
  c.$ancestorComponent$, sd(b, "componentDidRender"), c.$flags$ & 64 ? (sd(b, "componentDidUpdate"), v()) : (c.$flags$ |= 64, sd(b, "componentDidLoad"), v());
}, sd = (c, u, d) => {
  if (c && c[u])
    try {
      return c[u](d);
    } catch (v) {
      Eh(v);
    }
}, mL = (c, u) => mc(c).$instanceValues$.get(u), yL = (c, u, d, v) => {
  const b = mc(c), T = c, g = b.$instanceValues$.get(u), O = b.$flags$, k = T;
  d = eL(d, v.$members$[u][0]);
  const N = Number.isNaN(g) && Number.isNaN(d);
  if (d !== g && !N) {
    b.$instanceValues$.set(u, d);
    {
      if (v.$watchers$ && O & 128) {
        const z = v.$watchers$[u];
        z && z.map((X) => {
          try {
            k[X](d, g, u);
          } catch (V) {
            Eh(V, T);
          }
        });
      }
      if ((O & 18) === 2) {
        if (k.componentShouldUpdate && k.componentShouldUpdate(d, g, u) === !1)
          return;
        oT(b, !1);
      }
    }
  }
}, gL = (c, u, d) => {
  var v, b;
  const T = c.prototype;
  if (u.$members$ || u.$watchers$ || c.watchers) {
    c.watchers && !u.$watchers$ && (u.$watchers$ = c.watchers);
    const g = Object.entries((v = u.$members$) != null ? v : {});
    g.map(([O, [k]]) => {
      (k & 31 || k & 32) && Object.defineProperty(T, O, {
        get() {
          return mL(this, O);
        },
        set(N) {
          yL(this, O, N, u);
        },
        configurable: !0,
        enumerable: !0
      });
    });
    {
      const O = /* @__PURE__ */ new Map();
      T.attributeChangedCallback = function(k, N, I) {
        Ea.jmp(() => {
          var z;
          const X = O.get(k);
          if (this.hasOwnProperty(X))
            I = this[X], delete this[X];
          else {
            if (T.hasOwnProperty(X) && typeof this[X] == "number" && // cast type to number to avoid TS compiler issues
            this[X] == I)
              return;
            if (X == null) {
              const V = mc(this), ve = V == null ? void 0 : V.$flags$;
              if (ve && !(ve & 8) && ve & 128 && I !== N) {
                const ae = this, Ct = (z = u.$watchers$) == null ? void 0 : z[k];
                Ct == null || Ct.forEach((he) => {
                  ae[he] != null && ae[he].call(ae, I, N, k);
                });
              }
              return;
            }
          }
          this[X] = I === null && typeof this[X] == "boolean" ? !1 : I;
        });
      }, c.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((b = u.$watchers$) != null ? b : {}),
          ...g.filter(
            ([k, N]) => N[0] & 15
            /* HasAttribute */
          ).map(([k, N]) => {
            var I;
            const z = N[1] || k;
            return O.set(z, k), N[0] & 512 && ((I = u.$attrsToReflect$) == null || I.push([k, z])), z;
          })
        ])
      );
    }
  }
  return c;
}, bL = async (c, u, d, v) => {
  let b;
  if (!(u.$flags$ & 32)) {
    u.$flags$ |= 32, d.$lazyBundleId$;
    {
      b = c.constructor;
      const g = c.localName;
      customElements.whenDefined(g).then(
        () => u.$flags$ |= 128
        /* isWatchReady */
      );
    }
    if (b && b.style) {
      let g;
      typeof b.style == "string" ? g = b.style : typeof b.style != "string" && (u.$modeName$ = JO(c), u.$modeName$ && (g = b.style[u.$modeName$]));
      const O = K1(d, u.$modeName$);
      if (!Ey.has(O)) {
        const k = vc("registerStyles", d.$tagName$);
        rL(O, g, !!(d.$flags$ & 1)), k();
      }
    }
  }
  u.$ancestorComponent$, oT(u, !0);
}, D1 = (c) => {
}, SL = (c) => {
  if (!(Ea.$flags$ & 1)) {
    const u = mc(c), d = u.$cmpMeta$, v = vc("connectedCallback", d.$tagName$);
    u.$flags$ & 1 ? (lT(c, u, d.$listeners$), u != null && u.$lazyInstance$ ? D1(u.$lazyInstance$) : u != null && u.$onReadyPromise$ && u.$onReadyPromise$.then(() => D1(u.$lazyInstance$))) : (u.$flags$ |= 1, // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
    d.$flags$ & 12 && CL(c), d.$members$ && Object.entries(d.$members$).map(([b, [T]]) => {
      if (T & 31 && c.hasOwnProperty(b)) {
        const g = c[b];
        delete c[b], c[b] = g;
      }
    }), bL(c, u, d)), v();
  }
}, CL = (c) => {
  const u = c["s-cr"] = Fo.createComment(
    ""
  );
  u["s-cn"] = !0, ss(c, u, c.firstChild);
}, EL = async (c) => {
  if (!(Ea.$flags$ & 1)) {
    const u = mc(c);
    u.$rmListeners$ && (u.$rmListeners$.map((d) => d()), u.$rmListeners$ = void 0);
  }
}, hd = (c, u) => {
  const d = {
    $flags$: u[0],
    $tagName$: u[1]
  };
  d.$members$ = u[2], d.$listeners$ = u[3], d.$watchers$ = c.$watchers$, d.$attrsToReflect$ = [];
  const v = c.prototype.connectedCallback, b = c.prototype.disconnectedCallback;
  return Object.assign(c.prototype, {
    __registerHost() {
      AO(this, d);
    },
    connectedCallback() {
      const T = mc(this);
      lT(this, T, d.$listeners$), SL(this), v && v.call(this);
    },
    disconnectedCallback() {
      EL(this), b && b.call(this);
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
  }), c.is = d.$tagName$, gL(c, d);
}, lT = (c, u, d, v) => {
  d && d.map(([b, T, g]) => {
    const O = TL(c, b), k = wL(u, g), N = xL(b);
    Ea.ael(O, T, k, N), (u.$rmListeners$ = u.$rmListeners$ || []).push(() => Ea.rel(O, T, k, N));
  });
}, wL = (c, u) => (d) => {
  var v;
  try {
    so.lazyLoad || c.$hostElement$[u](d);
  } catch (b) {
    Eh(b);
  }
}, TL = (c, u) => u & 4 ? Fo : u & 8 ? wh : u & 16 ? Fo.body : c, xL = (c) => $O ? {
  passive: (c & 1) !== 0,
  capture: (c & 2) !== 0
} : (c & 2) !== 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Ia = typeof window < "u" ? window : void 0, eS = typeof document < "u" ? document : void 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let tS;
const RL = (c) => {
  if (tS === void 0) {
    const u = c.style.animationName !== void 0, d = c.style.webkitAnimationName !== void 0;
    tS = !u && d ? "-webkit-" : "";
  }
  return tS;
}, nS = (c, u, d) => {
  const v = u.startsWith("animation") ? RL(c) : "";
  c.style.setProperty(v + u, d);
}, yy = (c = [], u) => {
  if (u !== void 0) {
    const d = Array.isArray(u) ? u : [u];
    return [...c, ...d];
  }
  return c;
}, kL = (c) => {
  let u, d, v, b, T, g, O = [], k = [], N = [], I = !1, z, X = {}, V = [], ve = [], Ke = {}, ae = 0, Ct = !1, he = !1, Oe, xe, le, Ve = !0, Re = !1, ze = !0, Le, Xe = !1;
  const Et = c, Rt = [], qe = [], ue = [], be = [], me = [], pe = [], de = [], Ye = [], q = [], D = [], H = [], Ee = typeof AnimationEffect == "function" || Ia !== void 0 && typeof Ia.AnimationEffect == "function", ne = typeof Element == "function" && typeof Element.prototype.animate == "function" && Ee, _ = () => H, Ue = (E) => (me.forEach((A) => {
    A.destroy(E);
  }), Fe(E), be.length = 0, me.length = 0, O.length = 0, Vt(), I = !1, ze = !0, Le), Fe = (E) => {
    Bt(), E && Q();
  }, He = () => {
    Ct = !1, he = !1, ze = !0, Oe = void 0, xe = void 0, le = void 0, ae = 0, Re = !1, Ve = !0, Xe = !1;
  }, at = () => ae !== 0 && !Xe, kt = (E, A) => {
    const G = A.findIndex((se) => se.c === E);
    G > -1 && A.splice(G, 1);
  }, Kt = (E, A) => (ue.push({ c: E, o: A }), Le), Jt = (E, A) => ((A != null && A.oneTimeCallback ? qe : Rt).push({ c: E, o: A }), Le), Vt = () => (Rt.length = 0, qe.length = 0, Le), Bt = () => {
    ne && (H.forEach((E) => {
      E.cancel();
    }), H.length = 0);
  }, Q = () => {
    pe.forEach((E) => {
      E != null && E.parentNode && E.parentNode.removeChild(E);
    }), pe.length = 0;
  }, ce = (E) => (de.push(E), Le), Ne = (E) => (Ye.push(E), Le), vt = (E) => (q.push(E), Le), it = (E) => (D.push(E), Le), ct = (E) => (k = yy(k, E), Le), mt = (E) => (N = yy(N, E), Le), Ht = (E = {}) => (X = E, Le), je = (E = []) => {
    for (const A of E)
      X[A] = "";
    return Le;
  }, nt = (E) => (V = yy(V, E), Le), wt = (E) => (ve = yy(ve, E), Le), Ie = (E = {}) => (Ke = E, Le), Pe = (E = []) => {
    for (const A of E)
      Ke[A] = "";
    return Le;
  }, Gt = () => T !== void 0 ? T : z ? z.getFill() : "both", An = () => Oe !== void 0 ? Oe : g !== void 0 ? g : z ? z.getDirection() : "normal", mn = () => Ct ? "linear" : v !== void 0 ? v : z ? z.getEasing() : "linear", we = () => he ? 0 : xe !== void 0 ? xe : d !== void 0 ? d : z ? z.getDuration() : 0, Je = () => b !== void 0 ? b : z ? z.getIterations() : 1, Lt = () => le !== void 0 ? le : u !== void 0 ? u : z ? z.getDelay() : 0, Dt = () => O, en = (E) => (g = E, wn(!0), Le), Mn = (E) => (T = E, wn(!0), Le), Nn = (E) => (u = E, wn(!0), Le), Qn = (E) => (v = E, wn(!0), Le), sn = (E) => (!ne && E === 0 && (E = 1), d = E, wn(!0), Le), Er = (E) => (b = E, wn(!0), Le), Sn = (E) => (z = E, Le), yn = (E) => {
    if (E != null)
      if (E.nodeType === 1)
        be.push(E);
      else if (E.length >= 0)
        for (let A = 0; A < E.length; A++)
          be.push(E[A]);
      else
        console.error("Invalid addElement value");
    return Le;
  }, aa = (E) => {
    if (E != null)
      if (Array.isArray(E))
        for (const A of E)
          A.parent(Le), me.push(A);
      else
        E.parent(Le), me.push(E);
    return Le;
  }, wr = (E) => {
    const A = O !== E;
    return O = E, A && Br(O), Le;
  }, Br = (E) => {
    ne && _().forEach((A) => {
      const G = A.effect;
      if (G.setKeyframes)
        G.setKeyframes(E);
      else {
        const se = new KeyframeEffect(G.target, E, G.getTiming());
        A.effect = se;
      }
    });
  }, Nr = () => {
    de.forEach((se) => se()), Ye.forEach((se) => se());
    const E = k, A = N, G = X;
    be.forEach((se) => {
      const Ce = se.classList;
      E.forEach(($e) => Ce.add($e)), A.forEach(($e) => Ce.remove($e));
      for (const $e in G)
        G.hasOwnProperty($e) && nS(se, $e, G[$e]);
    });
  }, Ai = () => {
    q.forEach((Ce) => Ce()), D.forEach((Ce) => Ce());
    const E = Ve ? 1 : 0, A = V, G = ve, se = Ke;
    be.forEach((Ce) => {
      const $e = Ce.classList;
      A.forEach((st) => $e.add(st)), G.forEach((st) => $e.remove(st));
      for (const st in se)
        se.hasOwnProperty(st) && nS(Ce, st, se[st]);
    }), xe = void 0, Oe = void 0, le = void 0, Rt.forEach((Ce) => Ce.c(E, Le)), qe.forEach((Ce) => Ce.c(E, Le)), qe.length = 0, ze = !0, Ve && (Re = !0), Ve = !0;
  }, Tr = () => {
    ae !== 0 && (ae--, ae === 0 && (Ai(), z && z.animationFinish()));
  }, Va = () => {
    be.forEach((E) => {
      const A = E.animate(O, {
        id: Et,
        delay: Lt(),
        duration: we(),
        easing: mn(),
        iterations: Je(),
        fill: Gt(),
        direction: An()
      });
      A.pause(), H.push(A);
    }), H.length > 0 && (H[0].onfinish = () => {
      Tr();
    });
  }, xr = () => {
    Nr(), O.length > 0 && ne && Va(), I = !0;
  }, $r = (E) => {
    E = Math.min(Math.max(E, 0), 0.9999), ne && H.forEach((A) => {
      A.currentTime = A.effect.getComputedTiming().delay + we() * E, A.pause();
    });
  }, cr = (E) => {
    H.forEach((A) => {
      A.effect.updateTiming({
        delay: Lt(),
        duration: we(),
        easing: mn(),
        iterations: Je(),
        fill: Gt(),
        direction: An()
      });
    }), E !== void 0 && $r(E);
  }, wn = (E = !1, A = !0, G) => (E && me.forEach((se) => {
    se.update(E, A, G);
  }), ne && cr(G), Le), fr = (E = !1, A) => (me.forEach((G) => {
    G.progressStart(E, A);
  }), ar(), Ct = E, I || xr(), wn(!1, !0, A), Le), zr = (E) => (me.forEach((A) => {
    A.progressStep(E);
  }), $r(E), Le), ca = (E, A, G) => (Ct = !1, me.forEach((se) => {
    se.progressEnd(E, A, G);
  }), G !== void 0 && (xe = G), Re = !1, Ve = !0, E === 0 ? (Oe = An() === "reverse" ? "normal" : "reverse", Oe === "reverse" && (Ve = !1), ne ? (wn(), $r(1 - A)) : (le = (1 - A) * we() * -1, wn(!1, !1))) : E === 1 && (ne ? (wn(), $r(A)) : (le = A * we() * -1, wn(!1, !1))), E !== void 0 && !z && Wt(), Le), ar = () => {
    I && (ne ? H.forEach((E) => {
      E.pause();
    }) : be.forEach((E) => {
      nS(E, "animation-play-state", "paused");
    }), Xe = !0);
  }, $ = () => (me.forEach((E) => {
    E.pause();
  }), ar(), Le), ye = () => {
    Tr();
  }, ke = () => {
    H.forEach((E) => {
      E.play();
    }), (O.length === 0 || be.length === 0) && Tr();
  }, ut = () => {
    ne && ($r(0), cr());
  }, Wt = (E) => new Promise((A) => {
    E != null && E.sync && (he = !0, Jt(() => he = !1, { oneTimeCallback: !0 })), I || xr(), Re && (ut(), Re = !1), ze && (ae = me.length + 1, ze = !1);
    const G = () => {
      kt(se, qe), A();
    }, se = () => {
      kt(G, ue), A();
    };
    Jt(se, { oneTimeCallback: !0 }), Kt(G, { oneTimeCallback: !0 }), me.forEach((Ce) => {
      Ce.play();
    }), ne ? ke() : ye(), Xe = !1;
  }), Zt = () => {
    me.forEach((E) => {
      E.stop();
    }), I && (Bt(), I = !1), He(), ue.forEach((E) => E.c(0, Le)), ue.length = 0;
  }, Tt = (E, A) => {
    const G = O[0];
    return G !== void 0 && (G.offset === void 0 || G.offset === 0) ? G[E] = A : O = [{ offset: 0, [E]: A }, ...O], Le;
  };
  return Le = {
    parentAnimation: z,
    elements: be,
    childAnimations: me,
    id: Et,
    animationFinish: Tr,
    from: Tt,
    to: (E, A) => {
      const G = O[O.length - 1];
      return G !== void 0 && (G.offset === void 0 || G.offset === 1) ? G[E] = A : O = [...O, { offset: 1, [E]: A }], Le;
    },
    fromTo: (E, A, G) => Tt(E, A).to(E, G),
    parent: Sn,
    play: Wt,
    pause: $,
    stop: Zt,
    destroy: Ue,
    keyframes: wr,
    addAnimation: aa,
    addElement: yn,
    update: wn,
    fill: Mn,
    direction: en,
    iterations: Er,
    duration: sn,
    easing: Qn,
    delay: Nn,
    getWebAnimations: _,
    getKeyframes: Dt,
    getFill: Gt,
    getDirection: An,
    getDelay: Lt,
    getIterations: Je,
    getEasing: mn,
    getDuration: we,
    afterAddRead: vt,
    afterAddWrite: it,
    afterClearStyles: Pe,
    afterStyles: Ie,
    afterRemoveClass: wt,
    afterAddClass: nt,
    beforeAddRead: ce,
    beforeAddWrite: Ne,
    beforeClearStyles: je,
    beforeStyles: Ht,
    beforeRemoveClass: mt,
    beforeAddClass: ct,
    onFinish: Jt,
    isRunning: at,
    progressStart: fr,
    progressStep: zr,
    progressEnd: ca
  };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class _L {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(u) {
    this.m = new Map(Object.entries(u));
  }
  get(u, d) {
    const v = this.m.get(u);
    return v !== void 0 ? v : d;
  }
  getBoolean(u, d = !1) {
    const v = this.m.get(u);
    return v === void 0 ? d : typeof v == "string" ? v === "true" : !!v;
  }
  getNumber(u, d) {
    const v = parseFloat(this.m.get(u));
    return isNaN(v) ? d !== void 0 ? d : NaN : v;
  }
  set(u, d) {
    this.m.set(u, d);
  }
}
const au = /* @__PURE__ */ new _L();
let DL;
const fd = (c) => c && ZO(c) || DL;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const OL = (c, ...u) => console.warn(`[Ionic Warning]: ${c}`, ...u);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const uT = (c, u) => {
  c.componentOnReady ? c.componentOnReady().then((d) => u(d)) : sT(() => u(c));
}, LL = (c) => c.componentOnReady !== void 0, AL = (c, u = []) => {
  const d = {};
  return u.forEach((v) => {
    c.hasAttribute(v) && (c.getAttribute(v) !== null && (d[v] = c.getAttribute(v)), c.removeAttribute(v));
  }), d;
}, sT = (c) => typeof __zone_symbol__requestAnimationFrame == "function" ? __zone_symbol__requestAnimationFrame(c) : typeof requestAnimationFrame == "function" ? requestAnimationFrame(c) : setTimeout(c), HA = (c, u, d) => Math.max(c, Math.min(u, d)), Li = (c, u) => {
  if (!c) {
    const d = "ASSERT: " + u;
    console.error(d);
    debugger;
    throw new Error(d);
  }
}, cT = (c, u) => {
  if (c ?? (c = {}), u ?? (u = {}), c === u)
    return !0;
  const d = Object.keys(c);
  if (d.length !== Object.keys(u).length)
    return !1;
  for (const v of d)
    if (!(v in u) || c[v] !== u[v])
      return !1;
  return !0;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ML = "ionViewWillEnter", NL = "ionViewDidEnter", fT = "ionViewWillLeave", dT = "ionViewDidLeave", rS = "ionViewWillUnload", bh = (c) => {
  c.tabIndex = -1, c.focus();
}, gy = (c) => c.offsetParent !== null, $L = () => ({
  saveViewFocus: (d) => {
    if (au.get("focusManagerPriority", !1)) {
      const b = document.activeElement;
      b !== null && (d != null && d.contains(b)) && b.setAttribute(O1, "true");
    }
  },
  setViewFocus: (d) => {
    const v = au.get("focusManagerPriority", !1);
    if (Array.isArray(v) && !d.contains(document.activeElement)) {
      const b = d.querySelector(`[${O1}]`);
      if (b && gy(b)) {
        bh(b);
        return;
      }
      for (const T of v)
        switch (T) {
          case "content":
            const g = d.querySelector('main, [role="main"]');
            if (g && gy(g)) {
              bh(g);
              return;
            }
            break;
          case "heading":
            const O = d.querySelector('h1, [role="heading"][aria-level="1"]');
            if (O && gy(O)) {
              bh(O);
              return;
            }
            break;
          case "banner":
            const k = d.querySelector('header, [role="banner"]');
            if (k && gy(k)) {
              bh(k);
              return;
            }
            break;
          default:
            OL(`Unrecognized focus manager priority value ${T}`);
            break;
        }
      bh(d);
    }
  }
}), O1 = "ion-last-focus", zL = () => import("./ios.transition-BhApB8r-.js"), UL = () => import("./md.transition-BPdlns9v.js"), pT = $L(), hT = (c) => new Promise((u, d) => {
  xS(() => {
    jL(c), PL(c).then((v) => {
      v.animation && v.animation.destroy(), L1(c), u(v);
    }, (v) => {
      L1(c), d(v);
    });
  });
}), jL = (c) => {
  const u = c.enteringEl, d = c.leavingEl;
  pT.saveViewFocus(d), WL(u, d, c.direction), c.showGoBack ? u.classList.add("can-go-back") : u.classList.remove("can-go-back"), bS(u, !1), u.style.setProperty("pointer-events", "none"), d && (bS(d, !1), d.style.setProperty("pointer-events", "none"));
}, PL = async (c) => {
  const u = await FL(c);
  return u && LO.isBrowser ? HL(u, c) : IL(c);
}, L1 = (c) => {
  const u = c.enteringEl, d = c.leavingEl;
  u.classList.remove("ion-page-invisible"), u.style.removeProperty("pointer-events"), d !== void 0 && (d.classList.remove("ion-page-invisible"), d.style.removeProperty("pointer-events")), pT.setViewFocus(u);
}, FL = async (c) => !c.leavingEl || !c.animated || c.duration === 0 ? void 0 : c.animationBuilder ? c.animationBuilder : c.mode === "ios" ? (await zL()).iosTransitionAnimation : (await UL()).mdTransitionAnimation, HL = async (c, u) => {
  await vT(u, !0);
  const d = c(u.baseEl, u);
  mT(u.enteringEl, u.leavingEl);
  const v = await BL(d, u);
  return u.progressCallback && u.progressCallback(void 0), v && yT(u.enteringEl, u.leavingEl), {
    hasCompleted: v,
    animation: d
  };
}, IL = async (c) => {
  const u = c.enteringEl, d = c.leavingEl, v = au.get("focusManagerPriority", !1);
  return await vT(c, v), mT(u, d), yT(u, d), {
    hasCompleted: !0
  };
}, vT = async (c, u) => {
  (c.deepWait !== void 0 ? c.deepWait : u) && await Promise.all([gS(c.enteringEl), gS(c.leavingEl)]), await VL(c.viewIsReady, c.enteringEl);
}, VL = async (c, u) => {
  c && await c(u);
}, BL = (c, u) => {
  const d = u.progressCallback, v = new Promise((b) => {
    c.onFinish((T) => b(T === 1));
  });
  return d ? (c.progressStart(!0), d(c)) : c.play(), v;
}, mT = (c, u) => {
  nu(u, fT), nu(c, ML);
}, yT = (c, u) => {
  nu(c, NL), nu(u, dT);
}, nu = (c, u) => {
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
      await new Promise((v) => sT(v));
      return;
    }
    await Promise.all(Array.from(u.children).map(gS));
  }
}, bS = (c, u) => {
  u ? (c.setAttribute("aria-hidden", "true"), c.classList.add("ion-page-hidden")) : (c.hidden = !1, c.removeAttribute("aria-hidden"), c.classList.remove("ion-page-hidden"));
}, WL = (c, u, d) => {
  c !== void 0 && (c.style.zIndex = d === "back" ? "99" : "101"), u !== void 0 && (u.style.zIndex = "100");
}, IA = (c) => {
  if (c.classList.contains("ion-page"))
    return c;
  const u = c.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
  return u || c;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ky = (c, u, d, v, b) => GL(c[1], u[1], d[1], v[1], b).map((T) => YL(c[0], u[0], d[0], v[0], T)), YL = (c, u, d, v, b) => {
  const T = 3 * u * Math.pow(b - 1, 2), g = -3 * d * b + 3 * d + v * b, O = c * Math.pow(b - 1, 3);
  return b * (T + b * g) - O;
}, GL = (c, u, d, v, b) => (c -= b, u -= b, d -= b, v -= b, QL(v - 3 * d + 3 * u - c, 3 * d - 6 * u + 3 * c, 3 * u - 3 * c, c).filter((g) => g >= 0 && g <= 1)), qL = (c, u, d) => {
  const v = u * u - 4 * c * d;
  return v < 0 ? [] : [(-u + Math.sqrt(v)) / (2 * c), (-u - Math.sqrt(v)) / (2 * c)];
}, QL = (c, u, d, v) => {
  if (c === 0)
    return qL(u, d, v);
  u /= c, d /= c, v /= c;
  const b = (3 * d - u * u) / 3, T = (2 * u * u * u - 9 * u * d + 27 * v) / 27;
  if (b === 0)
    return [Math.pow(-T, 1 / 3)];
  if (T === 0)
    return [Math.sqrt(-b), -Math.sqrt(-b)];
  const g = Math.pow(T / 2, 2) + Math.pow(b / 3, 3);
  if (g === 0)
    return [Math.pow(T / 2, 1 / 2) - u / 3];
  if (g > 0)
    return [
      Math.pow(-(T / 2) + Math.sqrt(g), 1 / 3) - Math.pow(T / 2 + Math.sqrt(g), 1 / 3) - u / 3
    ];
  const O = Math.sqrt(Math.pow(-(b / 3), 3)), k = Math.acos(-(T / (2 * Math.sqrt(Math.pow(-(b / 3), 3))))), N = 2 * Math.pow(O, 1 / 3);
  return [
    N * Math.cos(k / 3) - u / 3,
    N * Math.cos((k + 2 * Math.PI) / 3) - u / 3,
    N * Math.cos((k + 4 * Math.PI) / 3) - u / 3
  ];
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const KL = (c, u) => typeof c == "string" && c.length > 0 ? Object.assign({ "ion-color": !0, [`ion-color-${c}`]: !0 }, u) : u;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const gT = async (c, u, d, v, b, T) => {
  var g;
  if (c)
    return c.attachViewToDom(u, d, b, v);
  if (typeof d != "string" && !(d instanceof HTMLElement))
    throw new Error("framework delegate is missing");
  const O = typeof d == "string" ? (g = u.ownerDocument) === null || g === void 0 ? void 0 : g.createElement(d) : d;
  return v && v.forEach((k) => O.classList.add(k)), b && Object.assign(O, b), u.appendChild(O), await new Promise((k) => uT(O, k)), O;
}, XL = (c, u) => {
  if (u) {
    if (c) {
      const d = u.parentElement;
      return c.removeViewFromDom(d, u);
    }
    u.remove();
  }
  return Promise.resolve();
};
function iu(c, u) {
  var d = {};
  for (var v in c) Object.prototype.hasOwnProperty.call(c, v) && u.indexOf(v) < 0 && (d[v] = c[v]);
  if (c != null && typeof Object.getOwnPropertySymbols == "function")
    for (var b = 0, v = Object.getOwnPropertySymbols(c); b < v.length; b++)
      u.indexOf(v[b]) < 0 && Object.prototype.propertyIsEnumerable.call(c, v[b]) && (d[v[b]] = c[v[b]]);
  return d;
}
var SS = { exports: {} }, Di = {}, by = { exports: {} }, aS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A1;
function JL() {
  return A1 || (A1 = 1, function(c) {
    function u(de, Ye) {
      var q = de.length;
      de.push(Ye);
      e: for (; 0 < q; ) {
        var D = q - 1 >>> 1, H = de[D];
        if (0 < b(H, Ye)) de[D] = Ye, de[q] = H, q = D;
        else break e;
      }
    }
    function d(de) {
      return de.length === 0 ? null : de[0];
    }
    function v(de) {
      if (de.length === 0) return null;
      var Ye = de[0], q = de.pop();
      if (q !== Ye) {
        de[0] = q;
        e: for (var D = 0, H = de.length, Ee = H >>> 1; D < Ee; ) {
          var ne = 2 * (D + 1) - 1, _ = de[ne], Ue = ne + 1, Fe = de[Ue];
          if (0 > b(_, q)) Ue < H && 0 > b(Fe, _) ? (de[D] = Fe, de[Ue] = q, D = Ue) : (de[D] = _, de[ne] = q, D = ne);
          else if (Ue < H && 0 > b(Fe, q)) de[D] = Fe, de[Ue] = q, D = Ue;
          else break e;
        }
      }
      return Ye;
    }
    function b(de, Ye) {
      var q = de.sortIndex - Ye.sortIndex;
      return q !== 0 ? q : de.id - Ye.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var T = performance;
      c.unstable_now = function() {
        return T.now();
      };
    } else {
      var g = Date, O = g.now();
      c.unstable_now = function() {
        return g.now() - O;
      };
    }
    var k = [], N = [], I = 1, z = null, X = 3, V = !1, ve = !1, Ke = !1, ae = typeof setTimeout == "function" ? setTimeout : null, Ct = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Oe(de) {
      for (var Ye = d(N); Ye !== null; ) {
        if (Ye.callback === null) v(N);
        else if (Ye.startTime <= de) v(N), Ye.sortIndex = Ye.expirationTime, u(k, Ye);
        else break;
        Ye = d(N);
      }
    }
    function xe(de) {
      if (Ke = !1, Oe(de), !ve) if (d(k) !== null) ve = !0, me(le);
      else {
        var Ye = d(N);
        Ye !== null && pe(xe, Ye.startTime - de);
      }
    }
    function le(de, Ye) {
      ve = !1, Ke && (Ke = !1, Ct(ze), ze = -1), V = !0;
      var q = X;
      try {
        for (Oe(Ye), z = d(k); z !== null && (!(z.expirationTime > Ye) || de && !Et()); ) {
          var D = z.callback;
          if (typeof D == "function") {
            z.callback = null, X = z.priorityLevel;
            var H = D(z.expirationTime <= Ye);
            Ye = c.unstable_now(), typeof H == "function" ? z.callback = H : z === d(k) && v(k), Oe(Ye);
          } else v(k);
          z = d(k);
        }
        if (z !== null) var Ee = !0;
        else {
          var ne = d(N);
          ne !== null && pe(xe, ne.startTime - Ye), Ee = !1;
        }
        return Ee;
      } finally {
        z = null, X = q, V = !1;
      }
    }
    var Ve = !1, Re = null, ze = -1, Le = 5, Xe = -1;
    function Et() {
      return !(c.unstable_now() - Xe < Le);
    }
    function Rt() {
      if (Re !== null) {
        var de = c.unstable_now();
        Xe = de;
        var Ye = !0;
        try {
          Ye = Re(!0, de);
        } finally {
          Ye ? qe() : (Ve = !1, Re = null);
        }
      } else Ve = !1;
    }
    var qe;
    if (typeof he == "function") qe = function() {
      he(Rt);
    };
    else if (typeof MessageChannel < "u") {
      var ue = new MessageChannel(), be = ue.port2;
      ue.port1.onmessage = Rt, qe = function() {
        be.postMessage(null);
      };
    } else qe = function() {
      ae(Rt, 0);
    };
    function me(de) {
      Re = de, Ve || (Ve = !0, qe());
    }
    function pe(de, Ye) {
      ze = ae(function() {
        de(c.unstable_now());
      }, Ye);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(de) {
      de.callback = null;
    }, c.unstable_continueExecution = function() {
      ve || V || (ve = !0, me(le));
    }, c.unstable_forceFrameRate = function(de) {
      0 > de || 125 < de ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Le = 0 < de ? Math.floor(1e3 / de) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, c.unstable_getFirstCallbackNode = function() {
      return d(k);
    }, c.unstable_next = function(de) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var Ye = 3;
          break;
        default:
          Ye = X;
      }
      var q = X;
      X = Ye;
      try {
        return de();
      } finally {
        X = q;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(de, Ye) {
      switch (de) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          de = 3;
      }
      var q = X;
      X = de;
      try {
        return Ye();
      } finally {
        X = q;
      }
    }, c.unstable_scheduleCallback = function(de, Ye, q) {
      var D = c.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? D + q : D) : q = D, de) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return H = q + H, de = { id: I++, callback: Ye, priorityLevel: de, startTime: q, expirationTime: H, sortIndex: -1 }, q > D ? (de.sortIndex = q, u(N, de), d(k) === null && de === d(N) && (Ke ? (Ct(ze), ze = -1) : Ke = !0, pe(xe, q - D))) : (de.sortIndex = H, u(k, de), ve || V || (ve = !0, me(le))), de;
    }, c.unstable_shouldYield = Et, c.unstable_wrapCallback = function(de) {
      var Ye = X;
      return function() {
        var q = X;
        X = Ye;
        try {
          return de.apply(this, arguments);
        } finally {
          X = q;
        }
      };
    };
  }(aS)), aS;
}
var iS = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M1;
function ZL() {
  return M1 || (M1 = 1, function(c) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var u = !1, d = !1, v = 5;
      function b(we, Je) {
        var Lt = we.length;
        we.push(Je), O(we, Je, Lt);
      }
      function T(we) {
        return we.length === 0 ? null : we[0];
      }
      function g(we) {
        if (we.length === 0)
          return null;
        var Je = we[0], Lt = we.pop();
        return Lt !== Je && (we[0] = Lt, k(we, Lt, 0)), Je;
      }
      function O(we, Je, Lt) {
        for (var Dt = Lt; Dt > 0; ) {
          var en = Dt - 1 >>> 1, Mn = we[en];
          if (N(Mn, Je) > 0)
            we[en] = Je, we[Dt] = Mn, Dt = en;
          else
            return;
        }
      }
      function k(we, Je, Lt) {
        for (var Dt = Lt, en = we.length, Mn = en >>> 1; Dt < Mn; ) {
          var Nn = (Dt + 1) * 2 - 1, Qn = we[Nn], sn = Nn + 1, Er = we[sn];
          if (N(Qn, Je) < 0)
            sn < en && N(Er, Qn) < 0 ? (we[Dt] = Er, we[sn] = Je, Dt = sn) : (we[Dt] = Qn, we[Nn] = Je, Dt = Nn);
          else if (sn < en && N(Er, Je) < 0)
            we[Dt] = Er, we[sn] = Je, Dt = sn;
          else
            return;
        }
      }
      function N(we, Je) {
        var Lt = we.sortIndex - Je.sortIndex;
        return Lt !== 0 ? Lt : we.id - Je.id;
      }
      var I = 1, z = 2, X = 3, V = 4, ve = 5;
      function Ke(we, Je) {
      }
      var ae = typeof performance == "object" && typeof performance.now == "function";
      if (ae) {
        var Ct = performance;
        c.unstable_now = function() {
          return Ct.now();
        };
      } else {
        var he = Date, Oe = he.now();
        c.unstable_now = function() {
          return he.now() - Oe;
        };
      }
      var xe = 1073741823, le = -1, Ve = 250, Re = 5e3, ze = 1e4, Le = xe, Xe = [], Et = [], Rt = 1, qe = null, ue = X, be = !1, me = !1, pe = !1, de = typeof setTimeout == "function" ? setTimeout : null, Ye = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function D(we) {
        for (var Je = T(Et); Je !== null; ) {
          if (Je.callback === null)
            g(Et);
          else if (Je.startTime <= we)
            g(Et), Je.sortIndex = Je.expirationTime, b(Xe, Je);
          else
            return;
          Je = T(Et);
        }
      }
      function H(we) {
        if (pe = !1, D(we), !me)
          if (T(Xe) !== null)
            me = !0, Ie(Ee);
          else {
            var Je = T(Et);
            Je !== null && Pe(H, Je.startTime - we);
          }
      }
      function Ee(we, Je) {
        me = !1, pe && (pe = !1, Gt()), be = !0;
        var Lt = ue;
        try {
          var Dt;
          if (!d) return ne(we, Je);
        } finally {
          qe = null, ue = Lt, be = !1;
        }
      }
      function ne(we, Je) {
        var Lt = Je;
        for (D(Lt), qe = T(Xe); qe !== null && !u && !(qe.expirationTime > Lt && (!we || it())); ) {
          var Dt = qe.callback;
          if (typeof Dt == "function") {
            qe.callback = null, ue = qe.priorityLevel;
            var en = qe.expirationTime <= Lt, Mn = Dt(en);
            Lt = c.unstable_now(), typeof Mn == "function" ? qe.callback = Mn : qe === T(Xe) && g(Xe), D(Lt);
          } else
            g(Xe);
          qe = T(Xe);
        }
        if (qe !== null)
          return !0;
        var Nn = T(Et);
        return Nn !== null && Pe(H, Nn.startTime - Lt), !1;
      }
      function _(we, Je) {
        switch (we) {
          case I:
          case z:
          case X:
          case V:
          case ve:
            break;
          default:
            we = X;
        }
        var Lt = ue;
        ue = we;
        try {
          return Je();
        } finally {
          ue = Lt;
        }
      }
      function Ue(we) {
        var Je;
        switch (ue) {
          case I:
          case z:
          case X:
            Je = X;
            break;
          default:
            Je = ue;
            break;
        }
        var Lt = ue;
        ue = Je;
        try {
          return we();
        } finally {
          ue = Lt;
        }
      }
      function Fe(we) {
        var Je = ue;
        return function() {
          var Lt = ue;
          ue = Je;
          try {
            return we.apply(this, arguments);
          } finally {
            ue = Lt;
          }
        };
      }
      function He(we, Je, Lt) {
        var Dt = c.unstable_now(), en;
        if (typeof Lt == "object" && Lt !== null) {
          var Mn = Lt.delay;
          typeof Mn == "number" && Mn > 0 ? en = Dt + Mn : en = Dt;
        } else
          en = Dt;
        var Nn;
        switch (we) {
          case I:
            Nn = le;
            break;
          case z:
            Nn = Ve;
            break;
          case ve:
            Nn = Le;
            break;
          case V:
            Nn = ze;
            break;
          case X:
          default:
            Nn = Re;
            break;
        }
        var Qn = en + Nn, sn = {
          id: Rt++,
          callback: Je,
          priorityLevel: we,
          startTime: en,
          expirationTime: Qn,
          sortIndex: -1
        };
        return en > Dt ? (sn.sortIndex = en, b(Et, sn), T(Xe) === null && sn === T(Et) && (pe ? Gt() : pe = !0, Pe(H, en - Dt))) : (sn.sortIndex = Qn, b(Xe, sn), !me && !be && (me = !0, Ie(Ee))), sn;
      }
      function at() {
      }
      function kt() {
        !me && !be && (me = !0, Ie(Ee));
      }
      function Kt() {
        return T(Xe);
      }
      function Jt(we) {
        we.callback = null;
      }
      function Vt() {
        return ue;
      }
      var Bt = !1, Q = null, ce = -1, Ne = v, vt = -1;
      function it() {
        var we = c.unstable_now() - vt;
        return !(we < Ne);
      }
      function ct() {
      }
      function mt(we) {
        if (we < 0 || we > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        we > 0 ? Ne = Math.floor(1e3 / we) : Ne = v;
      }
      var Ht = function() {
        if (Q !== null) {
          var we = c.unstable_now();
          vt = we;
          var Je = !0, Lt = !0;
          try {
            Lt = Q(Je, we);
          } finally {
            Lt ? je() : (Bt = !1, Q = null);
          }
        } else
          Bt = !1;
      }, je;
      if (typeof q == "function")
        je = function() {
          q(Ht);
        };
      else if (typeof MessageChannel < "u") {
        var nt = new MessageChannel(), wt = nt.port2;
        nt.port1.onmessage = Ht, je = function() {
          wt.postMessage(null);
        };
      } else
        je = function() {
          de(Ht, 0);
        };
      function Ie(we) {
        Q = we, Bt || (Bt = !0, je());
      }
      function Pe(we, Je) {
        ce = de(function() {
          we(c.unstable_now());
        }, Je);
      }
      function Gt() {
        Ye(ce), ce = -1;
      }
      var An = ct, mn = null;
      c.unstable_IdlePriority = ve, c.unstable_ImmediatePriority = I, c.unstable_LowPriority = V, c.unstable_NormalPriority = X, c.unstable_Profiling = mn, c.unstable_UserBlockingPriority = z, c.unstable_cancelCallback = Jt, c.unstable_continueExecution = kt, c.unstable_forceFrameRate = mt, c.unstable_getCurrentPriorityLevel = Vt, c.unstable_getFirstCallbackNode = Kt, c.unstable_next = Ue, c.unstable_pauseExecution = at, c.unstable_requestPaint = An, c.unstable_runWithPriority = _, c.unstable_scheduleCallback = He, c.unstable_shouldYield = it, c.unstable_wrapCallback = Fe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(iS)), iS;
}
var N1;
function bT() {
  return N1 || (N1 = 1, process.env.NODE_ENV === "production" ? by.exports = JL() : by.exports = ZL()), by.exports;
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
var $1;
function e2() {
  if ($1) return Di;
  $1 = 1;
  var c = Ho, u = bT();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var v = /* @__PURE__ */ new Set(), b = {};
  function T(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (b[n] = r, n = 0; n < r.length; n++) v.add(r[n]);
  }
  var O = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), k = Object.prototype.hasOwnProperty, N = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, I = {}, z = {};
  function X(n) {
    return k.call(z, n) ? !0 : k.call(I, n) ? !1 : N.test(n) ? z[n] = !0 : (I[n] = !0, !1);
  }
  function V(n, r, o, s) {
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
  function ve(n, r, o, s) {
    if (r === null || typeof r > "u" || V(n, r, o, s)) return !0;
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
  function Ke(n, r, o, s, p, m, w) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = w;
  }
  var ae = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ae[n] = new Ke(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ae[r] = new Ke(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ae[n] = new Ke(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ae[n] = new Ke(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ae[n] = new Ke(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ae[n] = new Ke(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ae[n] = new Ke(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ae[n] = new Ke(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ae[n] = new Ke(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ct = /[\-:]([a-z])/g;
  function he(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ct,
      he
    );
    ae[r] = new Ke(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ct, he);
    ae[r] = new Ke(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ct, he);
    ae[r] = new Ke(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ae[n] = new Ke(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ae.xlinkHref = new Ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ae[n] = new Ke(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Oe(n, r, o, s) {
    var p = ae.hasOwnProperty(r) ? ae[r] : null;
    (p !== null ? p.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ve(r, o, p, s) && (o = null), s || p === null ? X(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : p.mustUseProperty ? n[p.propertyName] = o === null ? p.type === 3 ? !1 : "" : o : (r = p.attributeName, s = p.attributeNamespace, o === null ? n.removeAttribute(r) : (p = p.type, o = p === 3 || p === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var xe = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, le = Symbol.for("react.element"), Ve = Symbol.for("react.portal"), Re = Symbol.for("react.fragment"), ze = Symbol.for("react.strict_mode"), Le = Symbol.for("react.profiler"), Xe = Symbol.for("react.provider"), Et = Symbol.for("react.context"), Rt = Symbol.for("react.forward_ref"), qe = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), be = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), pe = Symbol.for("react.offscreen"), de = Symbol.iterator;
  function Ye(n) {
    return n === null || typeof n != "object" ? null : (n = de && n[de] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var q = Object.assign, D;
  function H(n) {
    if (D === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      D = r && r[1] || "";
    }
    return `
` + D + n;
  }
  var Ee = !1;
  function ne(n, r) {
    if (!n || Ee) return "";
    Ee = !0;
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
        } catch (ee) {
          var s = ee;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (ee) {
          s = ee;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (ee) {
          s = ee;
        }
        n();
      }
    } catch (ee) {
      if (ee && s && typeof ee.stack == "string") {
        for (var p = ee.stack.split(`
`), m = s.stack.split(`
`), w = p.length - 1, L = m.length - 1; 1 <= w && 0 <= L && p[w] !== m[L]; ) L--;
        for (; 1 <= w && 0 <= L; w--, L--) if (p[w] !== m[L]) {
          if (w !== 1 || L !== 1)
            do
              if (w--, L--, 0 > L || p[w] !== m[L]) {
                var U = `
` + p[w].replace(" at new ", " at ");
                return n.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", n.displayName)), U;
              }
            while (1 <= w && 0 <= L);
          break;
        }
      }
    } finally {
      Ee = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? H(n) : "";
  }
  function _(n) {
    switch (n.tag) {
      case 5:
        return H(n.type);
      case 16:
        return H("Lazy");
      case 13:
        return H("Suspense");
      case 19:
        return H("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ne(n.type, !1), n;
      case 11:
        return n = ne(n.type.render, !1), n;
      case 1:
        return n = ne(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ue(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Re:
        return "Fragment";
      case Ve:
        return "Portal";
      case Le:
        return "Profiler";
      case ze:
        return "StrictMode";
      case qe:
        return "Suspense";
      case ue:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Et:
        return (n.displayName || "Context") + ".Consumer";
      case Xe:
        return (n._context.displayName || "Context") + ".Provider";
      case Rt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case be:
        return r = n.displayName || null, r !== null ? r : Ue(n.type) || "Memo";
      case me:
        r = n._payload, n = n._init;
        try {
          return Ue(n(r));
        } catch {
        }
    }
    return null;
  }
  function Fe(n) {
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
        return Ue(r);
      case 8:
        return r === ze ? "StrictMode" : "Mode";
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
  function He(n) {
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
  function at(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function kt(n) {
    var r = at(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var p = o.get, m = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(w) {
        s = "" + w, m.call(this, w);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(w) {
        s = "" + w;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Kt(n) {
    n._valueTracker || (n._valueTracker = kt(n));
  }
  function Jt(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), s = "";
    return n && (s = at(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Vt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Bt(n, r) {
    var o = r.checked;
    return q({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Q(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = He(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function ce(n, r) {
    r = r.checked, r != null && Oe(n, "checked", r, !1);
  }
  function Ne(n, r) {
    ce(n, r);
    var o = He(r.value), s = r.type;
    if (o != null) s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? it(n, r.type, o) : r.hasOwnProperty("defaultValue") && it(n, r.type, He(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function vt(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function it(n, r, o) {
    (r !== "number" || Vt(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var ct = Array.isArray;
  function mt(n, r, o, s) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < o.length; p++) r["$" + o[p]] = !0;
      for (o = 0; o < n.length; o++) p = r.hasOwnProperty("$" + n[o].value), n[o].selected !== p && (n[o].selected = p), p && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + He(o), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === o) {
          n[p].selected = !0, s && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ht(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(d(91));
    return q({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function je(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(d(92));
        if (ct(o)) {
          if (1 < o.length) throw Error(d(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: He(o) };
  }
  function nt(n, r) {
    var o = He(r.value), s = He(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function wt(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ie(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Pe(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ie(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Gt, An = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Gt = Gt || document.createElement("div"), Gt.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Gt.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function mn(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var we = {
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
  }, Je = ["Webkit", "ms", "Moz", "O"];
  Object.keys(we).forEach(function(n) {
    Je.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), we[r] = we[n];
    });
  });
  function Lt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || we.hasOwnProperty(n) && we[n] ? ("" + r).trim() : r + "px";
  }
  function Dt(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var s = o.indexOf("--") === 0, p = Lt(o, r[o], s);
      o === "float" && (o = "cssFloat"), s ? n.setProperty(o, p) : n[o] = p;
    }
  }
  var en = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Mn(n, r) {
    if (r) {
      if (en[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(d(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(d(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(d(62));
    }
  }
  function Nn(n, r) {
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
  var Qn = null;
  function sn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Er = null, Sn = null, yn = null;
  function aa(n) {
    if (n = xs(n)) {
      if (typeof Er != "function") throw Error(d(280));
      var r = n.stateNode;
      r && (r = _t(r), Er(n.stateNode, n.type, r));
    }
  }
  function wr(n) {
    Sn ? yn ? yn.push(n) : yn = [n] : Sn = n;
  }
  function Br() {
    if (Sn) {
      var n = Sn, r = yn;
      if (yn = Sn = null, aa(n), r) for (n = 0; n < r.length; n++) aa(r[n]);
    }
  }
  function Nr(n, r) {
    return n(r);
  }
  function Ai() {
  }
  var Tr = !1;
  function Va(n, r, o) {
    if (Tr) return n(r, o);
    Tr = !0;
    try {
      return Nr(n, r, o);
    } finally {
      Tr = !1, (Sn !== null || yn !== null) && (Ai(), Br());
    }
  }
  function xr(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var s = _t(o);
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
  var $r = !1;
  if (O) try {
    var cr = {};
    Object.defineProperty(cr, "passive", { get: function() {
      $r = !0;
    } }), window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr);
  } catch {
    $r = !1;
  }
  function wn(n, r, o, s, p, m, w, L, U) {
    var ee = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, ee);
    } catch (Te) {
      this.onError(Te);
    }
  }
  var fr = !1, zr = null, ca = !1, ar = null, $ = { onError: function(n) {
    fr = !0, zr = n;
  } };
  function ye(n, r, o, s, p, m, w, L, U) {
    fr = !1, zr = null, wn.apply($, arguments);
  }
  function ke(n, r, o, s, p, m, w, L, U) {
    if (ye.apply(this, arguments), fr) {
      if (fr) {
        var ee = zr;
        fr = !1, zr = null;
      } else throw Error(d(198));
      ca || (ca = !0, ar = ee);
    }
  }
  function ut(n) {
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
  function Wt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Zt(n) {
    if (ut(n) !== n) throw Error(d(188));
  }
  function Tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ut(n), r === null) throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var p = o.return;
      if (p === null) break;
      var m = p.alternate;
      if (m === null) {
        if (s = p.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (p.child === m.child) {
        for (m = p.child; m; ) {
          if (m === o) return Zt(p), n;
          if (m === s) return Zt(p), r;
          m = m.sibling;
        }
        throw Error(d(188));
      }
      if (o.return !== s.return) o = p, s = m;
      else {
        for (var w = !1, L = p.child; L; ) {
          if (L === o) {
            w = !0, o = p, s = m;
            break;
          }
          if (L === s) {
            w = !0, s = p, o = m;
            break;
          }
          L = L.sibling;
        }
        if (!w) {
          for (L = m.child; L; ) {
            if (L === o) {
              w = !0, o = m, s = p;
              break;
            }
            if (L === s) {
              w = !0, s = m, o = p;
              break;
            }
            L = L.sibling;
          }
          if (!w) throw Error(d(189));
        }
      }
      if (o.alternate !== s) throw Error(d(190));
    }
    if (o.tag !== 3) throw Error(d(188));
    return o.stateNode.current === o ? n : r;
  }
  function It(n) {
    return n = Tt(n), n !== null ? Zn(n) : null;
  }
  function Zn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Zn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var E = u.unstable_scheduleCallback, A = u.unstable_cancelCallback, G = u.unstable_shouldYield, se = u.unstable_requestPaint, Ce = u.unstable_now, $e = u.unstable_getCurrentPriorityLevel, st = u.unstable_ImmediatePriority, ot = u.unstable_UserBlockingPriority, on = u.unstable_NormalPriority, cn = u.unstable_LowPriority, tn = u.unstable_IdlePriority, dr = null, Tn = null;
  function Bn(n) {
    if (Tn && typeof Tn.onCommitFiberRoot == "function") try {
      Tn.onCommitFiberRoot(dr, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Cn = Math.clz32 ? Math.clz32 : Ba, Wr = Math.log, ii = Math.LN2;
  function Ba(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Wr(n) / ii | 0) | 0;
  }
  var co = 64, Mi = 4194304;
  function Wa(n) {
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
  function Yr(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var s = 0, p = n.suspendedLanes, m = n.pingedLanes, w = o & 268435455;
    if (w !== 0) {
      var L = w & ~p;
      L !== 0 ? s = Wa(L) : (m &= w, m !== 0 && (s = Wa(m)));
    } else w = o & ~p, w !== 0 ? s = Wa(w) : m !== 0 && (s = Wa(m));
    if (s === 0) return 0;
    if (r !== 0 && r !== s && !(r & p) && (p = s & -s, m = r & -r, p >= m || p === 16 && (m & 4194240) !== 0)) return r;
    if (s & 4 && (s |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= s; 0 < r; ) o = 31 - Cn(r), p = 1 << o, s |= n[o], r &= ~p;
    return s;
  }
  function pn(n, r) {
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
  function ln(n, r) {
    for (var o = n.suspendedLanes, s = n.pingedLanes, p = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var w = 31 - Cn(m), L = 1 << w, U = p[w];
      U === -1 ? (!(L & o) || L & s) && (p[w] = pn(L, r)) : U <= r && (n.expiredLanes |= L), m &= ~L;
    }
  }
  function oi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function wa() {
    var n = co;
    return co <<= 1, !(co & 4194240) && (co = 64), n;
  }
  function Ni(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function er(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Cn(r), n[r] = o;
  }
  function Ya(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var p = 31 - Cn(o), m = 1 << p;
      r[p] = 0, s[p] = -1, n[p] = -1, o &= ~m;
    }
  }
  function Rr(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - Cn(o), p = 1 << s;
      p & r | n[s] & r && (n[s] |= r), o &= ~p;
    }
  }
  var un = 0;
  function $i(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ta, fa, nn, zi, Gi, zt = !1, li = [], Hn = null, kr = null, yr = null, Io = /* @__PURE__ */ new Map(), ir = /* @__PURE__ */ new Map(), Dn = [], yc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function xa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Hn = null;
        break;
      case "dragenter":
      case "dragleave":
        kr = null;
        break;
      case "mouseover":
      case "mouseout":
        yr = null;
        break;
      case "pointerover":
      case "pointerout":
        Io.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ir.delete(r.pointerId);
    }
  }
  function Ur(n, r, o, s, p, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: m, targetContainers: [p] }, r !== null && (r = xs(r), r !== null && fa(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function qi(n, r, o, s, p) {
    switch (r) {
      case "focusin":
        return Hn = Ur(Hn, n, r, o, s, p), !0;
      case "dragenter":
        return kr = Ur(kr, n, r, o, s, p), !0;
      case "mouseover":
        return yr = Ur(yr, n, r, o, s, p), !0;
      case "pointerover":
        var m = p.pointerId;
        return Io.set(m, Ur(Io.get(m) || null, n, r, o, s, p)), !0;
      case "gotpointercapture":
        return m = p.pointerId, ir.set(m, Ur(ir.get(m) || null, n, r, o, s, p)), !0;
    }
    return !1;
  }
  function gc(n) {
    var r = fi(n.target);
    if (r !== null) {
      var o = ut(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Wt(o), r !== null) {
            n.blockedOn = r, Gi(n.priority, function() {
              nn(o);
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
  function fo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = lu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var s = new o.constructor(o.type, o);
        Qn = s, o.target.dispatchEvent(s), Qn = null;
      } else return r = xs(o), r !== null && fa(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Vo(n, r, o) {
    fo(n) && o.delete(r);
  }
  function bc() {
    zt = !1, Hn !== null && fo(Hn) && (Hn = null), kr !== null && fo(kr) && (kr = null), yr !== null && fo(yr) && (yr = null), Io.forEach(Vo), ir.forEach(Vo);
  }
  function ui(n, r) {
    n.blockedOn === r && (n.blockedOn = null, zt || (zt = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, bc)));
  }
  function Bo(n) {
    function r(p) {
      return ui(p, n);
    }
    if (0 < li.length) {
      ui(li[0], n);
      for (var o = 1; o < li.length; o++) {
        var s = li[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (Hn !== null && ui(Hn, n), kr !== null && ui(kr, n), yr !== null && ui(yr, n), Io.forEach(r), ir.forEach(r), o = 0; o < Dn.length; o++) s = Dn[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < Dn.length && (o = Dn[0], o.blockedOn === null); ) gc(o), o.blockedOn === null && Dn.shift();
  }
  var po = xe.ReactCurrentBatchConfig, si = !0;
  function ou(n, r, o, s) {
    var p = un, m = po.transition;
    po.transition = null;
    try {
      un = 1, Yo(n, r, o, s);
    } finally {
      un = p, po.transition = m;
    }
  }
  function Wo(n, r, o, s) {
    var p = un, m = po.transition;
    po.transition = null;
    try {
      un = 4, Yo(n, r, o, s);
    } finally {
      un = p, po.transition = m;
    }
  }
  function Yo(n, r, o, s) {
    if (si) {
      var p = lu(n, r, o, s);
      if (p === null) _c(n, r, s, gl, o), xa(n, s);
      else if (qi(p, n, r, o, s)) s.stopPropagation();
      else if (xa(n, s), r & 4 && -1 < yc.indexOf(n)) {
        for (; p !== null; ) {
          var m = xs(p);
          if (m !== null && Ta(m), m = lu(n, r, o, s), m === null && _c(n, r, s, gl, o), m === p) break;
          p = m;
        }
        p !== null && s.stopPropagation();
      } else _c(n, r, s, null, o);
    }
  }
  var gl = null;
  function lu(n, r, o, s) {
    if (gl = null, n = sn(s), n = fi(n), n !== null) if (r = ut(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = Wt(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return gl = n, null;
  }
  function fs(n) {
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
        switch ($e()) {
          case st:
            return 1;
          case ot:
            return 4;
          case on:
          case cn:
            return 16;
          case tn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ui = null, C = null, M = null;
  function Z() {
    if (M) return M;
    var n, r = C, o = r.length, s, p = "value" in Ui ? Ui.value : Ui.textContent, m = p.length;
    for (n = 0; n < o && r[n] === p[n]; n++) ;
    var w = o - n;
    for (s = 1; s <= w && r[o - s] === p[m - s]; s++) ;
    return M = p.slice(n, 1 < s ? 1 - s : void 0);
  }
  function re(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ae() {
    return !0;
  }
  function Nt() {
    return !1;
  }
  function Ge(n) {
    function r(o, s, p, m, w) {
      this._reactName = o, this._targetInst = p, this.type = s, this.nativeEvent = m, this.target = w, this.currentTarget = null;
      for (var L in n) n.hasOwnProperty(L) && (o = n[L], this[L] = o ? o(m) : m[L]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Ae : Nt, this.isPropagationStopped = Nt, this;
    }
    return q(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Ae);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Ae);
    }, persist: function() {
    }, isPersistent: Ae }), r;
  }
  var At = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, rn = Ge(At), En = q({}, At, { view: 0, detail: 0 }), jn = Ge(En), $n, Pn, In, hn = q({}, En, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: bd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== In && (In && n.type === "mousemove" ? ($n = n.screenX - In.screenX, Pn = n.screenY - In.screenY) : Pn = $n = 0, In = n), $n);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Pn;
  } }), ho = Ge(hn), uu = q({}, hn, { dataTransfer: 0 }), ds = Ge(uu), vd = q({}, En, { relatedTarget: 0 }), ji = Ge(vd), ps = q({}, At, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hs = Ge(ps), md = q({}, At, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Ly = Ge(md), Ay = q({}, At, { data: 0 }), yd = Ge(Ay), gd = {
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
  }, kh = {
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
  }, _h = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Dh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = _h[n]) ? !!r[n] : !1;
  }
  function bd() {
    return Dh;
  }
  var vo = q({}, En, { key: function(n) {
    if (n.key) {
      var r = gd[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = re(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? kh[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: bd, charCode: function(n) {
    return n.type === "keypress" ? re(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? re(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), My = Ge(vo), Sd = q({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sc = Ge(Sd), Cd = q({}, En, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: bd }), Ny = Ge(Cd), Cc = q({}, At, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Oh = Ge(Cc), Ra = q({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), mo = Ge(Ra), gr = [9, 13, 27, 32], Pi = O && "CompositionEvent" in window, bl = null;
  O && "documentMode" in document && (bl = document.documentMode);
  var Ec = O && "TextEvent" in window && !bl, Lh = O && (!Pi || bl && 8 < bl && 11 >= bl), su = " ", Ah = !1;
  function Mh(n, r) {
    switch (n) {
      case "keyup":
        return gr.indexOf(r.keyCode) !== -1;
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
  function wc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var cu = !1;
  function $y(n, r) {
    switch (n) {
      case "compositionend":
        return wc(r);
      case "keypress":
        return r.which !== 32 ? null : (Ah = !0, su);
      case "textInput":
        return n = r.data, n === su && Ah ? null : n;
      default:
        return null;
    }
  }
  function zy(n, r) {
    if (cu) return n === "compositionend" || !Pi && Mh(n, r) ? (n = Z(), M = C = Ui = null, cu = !1, n) : null;
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
        return Lh && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Nh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function $h(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Nh[n.type] : r === "textarea";
  }
  function zh(n, r, o, s) {
    wr(s), r = Es(r, "onChange"), 0 < r.length && (o = new rn("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var vs = null, fu = null;
  function du(n) {
    kc(n, 0);
  }
  function pu(n) {
    var r = vu(n);
    if (Jt(r)) return n;
  }
  function Uh(n, r) {
    if (n === "change") return r;
  }
  var Ed = !1;
  if (O) {
    var wd;
    if (O) {
      var Td = "oninput" in document;
      if (!Td) {
        var jh = document.createElement("div");
        jh.setAttribute("oninput", "return;"), Td = typeof jh.oninput == "function";
      }
      wd = Td;
    } else wd = !1;
    Ed = wd && (!document.documentMode || 9 < document.documentMode);
  }
  function Ph() {
    vs && (vs.detachEvent("onpropertychange", Fh), fu = vs = null);
  }
  function Fh(n) {
    if (n.propertyName === "value" && pu(fu)) {
      var r = [];
      zh(r, fu, n, sn(n)), Va(du, r);
    }
  }
  function Uy(n, r, o) {
    n === "focusin" ? (Ph(), vs = r, fu = o, vs.attachEvent("onpropertychange", Fh)) : n === "focusout" && Ph();
  }
  function jy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return pu(fu);
  }
  function Py(n, r) {
    if (n === "click") return pu(r);
  }
  function Hh(n, r) {
    if (n === "input" || n === "change") return pu(r);
  }
  function Fy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ci = typeof Object.is == "function" ? Object.is : Fy;
  function ms(n, r) {
    if (ci(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length) return !1;
    for (s = 0; s < o.length; s++) {
      var p = o[s];
      if (!k.call(r, p) || !ci(n[p], r[p])) return !1;
    }
    return !0;
  }
  function Ih(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Vh(n, r) {
    var o = Ih(n);
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
      o = Ih(o);
    }
  }
  function Bh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Bh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Tc() {
    for (var n = window, r = Vt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = Vt(n.document);
    }
    return r;
  }
  function yo(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function xc(n) {
    var r = Tc(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Bh(o.ownerDocument.documentElement, o)) {
      if (s !== null && yo(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, m = Math.min(s.start, p);
          s = s.end === void 0 ? m : Math.min(s.end, p), !n.extend && m > s && (p = s, s = m, m = p), p = Vh(o, m);
          var w = Vh(
            o,
            s
          );
          p && w && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== w.node || n.focusOffset !== w.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), m > s ? (n.addRange(r), n.extend(w.node, w.offset)) : (r.setEnd(w.node, w.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Wh = O && "documentMode" in document && 11 >= document.documentMode, Fi = null, xd = null, ys = null, Rd = !1;
  function Yh(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Rd || Fi == null || Fi !== Vt(s) || (s = Fi, "selectionStart" in s && yo(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ys && ms(ys, s) || (ys = s, s = Es(xd, "onSelect"), 0 < s.length && (r = new rn("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = Fi)));
  }
  function Rc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Sl = { animationend: Rc("Animation", "AnimationEnd"), animationiteration: Rc("Animation", "AnimationIteration"), animationstart: Rc("Animation", "AnimationStart"), transitionend: Rc("Transition", "TransitionEnd") }, kd = {}, _d = {};
  O && (_d = document.createElement("div").style, "AnimationEvent" in window || (delete Sl.animationend.animation, delete Sl.animationiteration.animation, delete Sl.animationstart.animation), "TransitionEvent" in window || delete Sl.transitionend.transition);
  function jr(n) {
    if (kd[n]) return kd[n];
    if (!Sl[n]) return n;
    var r = Sl[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in _d) return kd[n] = r[o];
    return n;
  }
  var Dd = jr("animationend"), Gh = jr("animationiteration"), qh = jr("animationstart"), Qh = jr("transitionend"), Kh = /* @__PURE__ */ new Map(), Xh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function go(n, r) {
    Kh.set(n, r), T(r, [n]);
  }
  for (var gs = 0; gs < Xh.length; gs++) {
    var Cl = Xh[gs], Hy = Cl.toLowerCase(), bs = Cl[0].toUpperCase() + Cl.slice(1);
    go(Hy, "on" + bs);
  }
  go(Dd, "onAnimationEnd"), go(Gh, "onAnimationIteration"), go(qh, "onAnimationStart"), go("dblclick", "onDoubleClick"), go("focusin", "onFocus"), go("focusout", "onBlur"), go(Qh, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), T("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), T("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), T("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ss = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Iy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ss));
  function Jh(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, ke(s, r, void 0, n), n.currentTarget = null;
  }
  function kc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], p = s.event;
      s = s.listeners;
      e: {
        var m = void 0;
        if (r) for (var w = s.length - 1; 0 <= w; w--) {
          var L = s[w], U = L.instance, ee = L.currentTarget;
          if (L = L.listener, U !== m && p.isPropagationStopped()) break e;
          Jh(p, L, ee), m = U;
        }
        else for (w = 0; w < s.length; w++) {
          if (L = s[w], U = L.instance, ee = L.currentTarget, L = L.listener, U !== m && p.isPropagationStopped()) break e;
          Jh(p, L, ee), m = U;
        }
      }
    }
    if (ca) throw n = ar, ca = !1, ar = null, n;
  }
  function Fn(n, r) {
    var o = r[zd];
    o === void 0 && (o = r[zd] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (Zh(r, n, 2, !1), o.add(s));
  }
  function Go(n, r, o) {
    var s = 0;
    r && (s |= 4), Zh(o, n, s, r);
  }
  var bo = "_reactListening" + Math.random().toString(36).slice(2);
  function hu(n) {
    if (!n[bo]) {
      n[bo] = !0, v.forEach(function(o) {
        o !== "selectionchange" && (Iy.has(o) || Go(o, !1, n), Go(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[bo] || (r[bo] = !0, Go("selectionchange", !1, r));
    }
  }
  function Zh(n, r, o, s) {
    switch (fs(r)) {
      case 1:
        var p = ou;
        break;
      case 4:
        p = Wo;
        break;
      default:
        p = Yo;
    }
    o = p.bind(null, r, o, n), p = void 0, !$r || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), s ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function _c(n, r, o, s, p) {
    var m = s;
    if (!(r & 1) && !(r & 2) && s !== null) e: for (; ; ) {
      if (s === null) return;
      var w = s.tag;
      if (w === 3 || w === 4) {
        var L = s.stateNode.containerInfo;
        if (L === p || L.nodeType === 8 && L.parentNode === p) break;
        if (w === 4) for (w = s.return; w !== null; ) {
          var U = w.tag;
          if ((U === 3 || U === 4) && (U = w.stateNode.containerInfo, U === p || U.nodeType === 8 && U.parentNode === p)) return;
          w = w.return;
        }
        for (; L !== null; ) {
          if (w = fi(L), w === null) return;
          if (U = w.tag, U === 5 || U === 6) {
            s = m = w;
            continue e;
          }
          L = L.parentNode;
        }
      }
      s = s.return;
    }
    Va(function() {
      var ee = m, Te = sn(o), _e = [];
      e: {
        var Se = Kh.get(n);
        if (Se !== void 0) {
          var et = rn, ft = n;
          switch (n) {
            case "keypress":
              if (re(o) === 0) break e;
            case "keydown":
            case "keyup":
              et = My;
              break;
            case "focusin":
              ft = "focus", et = ji;
              break;
            case "focusout":
              ft = "blur", et = ji;
              break;
            case "beforeblur":
            case "afterblur":
              et = ji;
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
              et = ho;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              et = ds;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              et = Ny;
              break;
            case Dd:
            case Gh:
            case qh:
              et = hs;
              break;
            case Qh:
              et = Oh;
              break;
            case "scroll":
              et = jn;
              break;
            case "wheel":
              et = mo;
              break;
            case "copy":
            case "cut":
            case "paste":
              et = Ly;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              et = Sc;
          }
          var ht = (r & 4) !== 0, vr = !ht && n === "scroll", B = ht ? Se !== null ? Se + "Capture" : null : Se;
          ht = [];
          for (var P = ee, K; P !== null; ) {
            K = P;
            var Me = K.stateNode;
            if (K.tag === 5 && Me !== null && (K = Me, B !== null && (Me = xr(P, B), Me != null && ht.push(Cs(P, Me, K)))), vr) break;
            P = P.return;
          }
          0 < ht.length && (Se = new et(Se, ft, null, o, Te), _e.push({ event: Se, listeners: ht }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Se = n === "mouseover" || n === "pointerover", et = n === "mouseout" || n === "pointerout", Se && o !== Qn && (ft = o.relatedTarget || o.fromElement) && (fi(ft) || ft[So])) break e;
          if ((et || Se) && (Se = Te.window === Te ? Te : (Se = Te.ownerDocument) ? Se.defaultView || Se.parentWindow : window, et ? (ft = o.relatedTarget || o.toElement, et = ee, ft = ft ? fi(ft) : null, ft !== null && (vr = ut(ft), ft !== vr || ft.tag !== 5 && ft.tag !== 6) && (ft = null)) : (et = null, ft = ee), et !== ft)) {
            if (ht = ho, Me = "onMouseLeave", B = "onMouseEnter", P = "mouse", (n === "pointerout" || n === "pointerover") && (ht = Sc, Me = "onPointerLeave", B = "onPointerEnter", P = "pointer"), vr = et == null ? Se : vu(et), K = ft == null ? Se : vu(ft), Se = new ht(Me, P + "leave", et, o, Te), Se.target = vr, Se.relatedTarget = K, Me = null, fi(Te) === ee && (ht = new ht(B, P + "enter", ft, o, Te), ht.target = K, ht.relatedTarget = vr, Me = ht), vr = Me, et && ft) t: {
              for (ht = et, B = ft, P = 0, K = ht; K; K = El(K)) P++;
              for (K = 0, Me = B; Me; Me = El(Me)) K++;
              for (; 0 < P - K; ) ht = El(ht), P--;
              for (; 0 < K - P; ) B = El(B), K--;
              for (; P--; ) {
                if (ht === B || B !== null && ht === B.alternate) break t;
                ht = El(ht), B = El(B);
              }
              ht = null;
            }
            else ht = null;
            et !== null && Od(_e, Se, et, ht, !1), ft !== null && vr !== null && Od(_e, vr, ft, ht, !0);
          }
        }
        e: {
          if (Se = ee ? vu(ee) : window, et = Se.nodeName && Se.nodeName.toLowerCase(), et === "select" || et === "input" && Se.type === "file") var gt = Uh;
          else if ($h(Se)) if (Ed) gt = Hh;
          else {
            gt = jy;
            var $t = Uy;
          }
          else (et = Se.nodeName) && et.toLowerCase() === "input" && (Se.type === "checkbox" || Se.type === "radio") && (gt = Py);
          if (gt && (gt = gt(n, ee))) {
            zh(_e, gt, o, Te);
            break e;
          }
          $t && $t(n, Se, ee), n === "focusout" && ($t = Se._wrapperState) && $t.controlled && Se.type === "number" && it(Se, "number", Se.value);
        }
        switch ($t = ee ? vu(ee) : window, n) {
          case "focusin":
            ($h($t) || $t.contentEditable === "true") && (Fi = $t, xd = ee, ys = null);
            break;
          case "focusout":
            ys = xd = Fi = null;
            break;
          case "mousedown":
            Rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rd = !1, Yh(_e, o, Te);
            break;
          case "selectionchange":
            if (Wh) break;
          case "keydown":
          case "keyup":
            Yh(_e, o, Te);
        }
        var dt;
        if (Pi) e: {
          switch (n) {
            case "compositionstart":
              var Ut = "onCompositionStart";
              break e;
            case "compositionend":
              Ut = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ut = "onCompositionUpdate";
              break e;
          }
          Ut = void 0;
        }
        else cu ? Mh(n, o) && (Ut = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Ut = "onCompositionStart");
        Ut && (Lh && o.locale !== "ko" && (cu || Ut !== "onCompositionStart" ? Ut === "onCompositionEnd" && cu && (dt = Z()) : (Ui = Te, C = "value" in Ui ? Ui.value : Ui.textContent, cu = !0)), $t = Es(ee, Ut), 0 < $t.length && (Ut = new yd(Ut, n, null, o, Te), _e.push({ event: Ut, listeners: $t }), dt ? Ut.data = dt : (dt = wc(o), dt !== null && (Ut.data = dt)))), (dt = Ec ? $y(n, o) : zy(n, o)) && (ee = Es(ee, "onBeforeInput"), 0 < ee.length && (Te = new yd("onBeforeInput", "beforeinput", null, o, Te), _e.push({ event: Te, listeners: ee }), Te.data = dt));
      }
      kc(_e, r);
    });
  }
  function Cs(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Es(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var p = n, m = p.stateNode;
      p.tag === 5 && m !== null && (p = m, m = xr(n, o), m != null && s.unshift(Cs(n, m, p)), m = xr(n, r), m != null && s.push(Cs(n, m, p))), n = n.return;
    }
    return s;
  }
  function El(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Od(n, r, o, s, p) {
    for (var m = r._reactName, w = []; o !== null && o !== s; ) {
      var L = o, U = L.alternate, ee = L.stateNode;
      if (U !== null && U === s) break;
      L.tag === 5 && ee !== null && (L = ee, p ? (U = xr(o, m), U != null && w.unshift(Cs(o, U, L))) : p || (U = xr(o, m), U != null && w.push(Cs(o, U, L)))), o = o.return;
    }
    w.length !== 0 && n.push({ event: r, listeners: w });
  }
  var Ld = /\r\n?/g, Vy = /\u0000|\uFFFD/g;
  function Ad(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ld, `
`).replace(Vy, "");
  }
  function Dc(n, r, o) {
    if (r = Ad(r), Ad(n) !== r && o) throw Error(d(425));
  }
  function Oc() {
  }
  var Md = null, wl = null;
  function ws(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Tl = typeof setTimeout == "function" ? setTimeout : void 0, ev = typeof clearTimeout == "function" ? clearTimeout : void 0, Nd = typeof Promise == "function" ? Promise : void 0, $d = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nd < "u" ? function(n) {
    return Nd.resolve(null).then(n).catch(By);
  } : Tl;
  function By(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function qo(n, r) {
    var o = r, s = 0;
    do {
      var p = o.nextSibling;
      if (n.removeChild(o), p && p.nodeType === 8) if (o = p.data, o === "/$") {
        if (s === 0) {
          n.removeChild(p), Bo(r);
          return;
        }
        s--;
      } else o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = p;
    } while (o);
    Bo(r);
  }
  function Hi(n) {
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
  function Ts(n) {
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
  var Qo = Math.random().toString(36).slice(2), Qi = "__reactFiber$" + Qo, xl = "__reactProps$" + Qo, So = "__reactContainer$" + Qo, zd = "__reactEvents$" + Qo, Wy = "__reactListeners$" + Qo, Ud = "__reactHandles$" + Qo;
  function fi(n) {
    var r = n[Qi];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[So] || o[Qi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Ts(n); n !== null; ) {
          if (o = n[Qi]) return o;
          n = Ts(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function xs(n) {
    return n = n[Qi] || n[So], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function vu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(d(33));
  }
  function _t(n) {
    return n[xl] || null;
  }
  var Ko = [], Wn = -1;
  function Xt(n) {
    return { current: n };
  }
  function _n(n) {
    0 > Wn || (n.current = Ko[Wn], Ko[Wn] = null, Wn--);
  }
  function On(n, r) {
    Wn++, Ko[Wn] = n.current, n.current = r;
  }
  var Ki = {}, Pt = Xt(Ki), or = Xt(!1), ka = Ki;
  function di(n, r) {
    var o = n.type.contextTypes;
    if (!o) return Ki;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r) return s.__reactInternalMemoizedMaskedChildContext;
    var p = {}, m;
    for (m in o) p[m] = r[m];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function Kn(n) {
    return n = n.childContextTypes, n != null;
  }
  function pi() {
    _n(or), _n(Pt);
  }
  function Xo(n, r, o) {
    if (Pt.current !== Ki) throw Error(d(168));
    On(Pt, r), On(or, o);
  }
  function Rs(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function") return o;
    s = s.getChildContext();
    for (var p in s) if (!(p in r)) throw Error(d(108, Fe(n) || "Unknown", p));
    return q({}, o, s);
  }
  function Lc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ki, ka = Pt.current, On(Pt, n), On(or, or.current), !0;
  }
  function tv(n, r, o) {
    var s = n.stateNode;
    if (!s) throw Error(d(169));
    o ? (n = Rs(n, r, ka), s.__reactInternalMemoizedMergedChildContext = n, _n(or), _n(Pt), On(Pt, n)) : _n(or), On(or, o);
  }
  var Ga = null, Pr = !1, ks = !1;
  function jd(n) {
    Ga === null ? Ga = [n] : Ga.push(n);
  }
  function Pd(n) {
    Pr = !0, jd(n);
  }
  function _a() {
    if (!ks && Ga !== null) {
      ks = !0;
      var n = 0, r = un;
      try {
        var o = Ga;
        for (un = 1; n < o.length; n++) {
          var s = o[n];
          do
            s = s(!0);
          while (s !== null);
        }
        Ga = null, Pr = !1;
      } catch (p) {
        throw Ga !== null && (Ga = Ga.slice(n + 1)), E(st, _a), p;
      } finally {
        un = r, ks = !1;
      }
    }
    return null;
  }
  var Jo = [], Da = 0, Rl = null, mu = 0, Oa = [], ia = 0, hi = null, Gr = 1, Co = "";
  function qa(n, r) {
    Jo[Da++] = mu, Jo[Da++] = Rl, Rl = n, mu = r;
  }
  function Fd(n, r, o) {
    Oa[ia++] = Gr, Oa[ia++] = Co, Oa[ia++] = hi, hi = n;
    var s = Gr;
    n = Co;
    var p = 32 - Cn(s) - 1;
    s &= ~(1 << p), o += 1;
    var m = 32 - Cn(r) + p;
    if (30 < m) {
      var w = p - p % 5;
      m = (s & (1 << w) - 1).toString(32), s >>= w, p -= w, Gr = 1 << 32 - Cn(r) + p | o << p | s, Co = m + n;
    } else Gr = 1 << m | o << p | s, Co = n;
  }
  function Ac(n) {
    n.return !== null && (qa(n, 1), Fd(n, 1, 0));
  }
  function Hd(n) {
    for (; n === Rl; ) Rl = Jo[--Da], Jo[Da] = null, mu = Jo[--Da], Jo[Da] = null;
    for (; n === hi; ) hi = Oa[--ia], Oa[ia] = null, Co = Oa[--ia], Oa[ia] = null, Gr = Oa[--ia], Oa[ia] = null;
  }
  var Qa = null, La = null, Yn = !1, vi = null;
  function Id(n, r) {
    var o = wi(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function nv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Qa = n, La = Hi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Qa = n, La = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = hi !== null ? { id: Gr, overflow: Co } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = wi(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Qa = n, La = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Mc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Nc(n) {
    if (Yn) {
      var r = La;
      if (r) {
        var o = r;
        if (!nv(n, r)) {
          if (Mc(n)) throw Error(d(418));
          r = Hi(o.nextSibling);
          var s = Qa;
          r && nv(n, r) ? Id(s, o) : (n.flags = n.flags & -4097 | 2, Yn = !1, Qa = n);
        }
      } else {
        if (Mc(n)) throw Error(d(418));
        n.flags = n.flags & -4097 | 2, Yn = !1, Qa = n;
      }
    }
  }
  function rv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Qa = n;
  }
  function $c(n) {
    if (n !== Qa) return !1;
    if (!Yn) return rv(n), Yn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ws(n.type, n.memoizedProps)), r && (r = La)) {
      if (Mc(n)) throw av(), Error(d(418));
      for (; r; ) Id(n, r), r = Hi(r.nextSibling);
    }
    if (rv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                La = Hi(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        La = null;
      }
    } else La = Qa ? Hi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function av() {
    for (var n = La; n; ) n = Hi(n.nextSibling);
  }
  function tr() {
    La = Qa = null, Yn = !1;
  }
  function Vd(n) {
    vi === null ? vi = [n] : vi.push(n);
  }
  var zc = xe.ReactCurrentBatchConfig;
  function kl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(d(309));
          var s = o.stateNode;
        }
        if (!s) throw Error(d(147, n));
        var p = s, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(w) {
          var L = p.refs;
          w === null ? delete L[m] : L[m] = w;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string") throw Error(d(284));
      if (!o._owner) throw Error(d(290, n));
    }
    return n;
  }
  function Xi(n, r) {
    throw n = Object.prototype.toString.call(r), Error(d(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function iv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Uc(n) {
    function r(B, P) {
      if (n) {
        var K = B.deletions;
        K === null ? (B.deletions = [P], B.flags |= 16) : K.push(P);
      }
    }
    function o(B, P) {
      if (!n) return null;
      for (; P !== null; ) r(B, P), P = P.sibling;
      return null;
    }
    function s(B, P) {
      for (B = /* @__PURE__ */ new Map(); P !== null; ) P.key !== null ? B.set(P.key, P) : B.set(P.index, P), P = P.sibling;
      return B;
    }
    function p(B, P) {
      return B = ol(B, P), B.index = 0, B.sibling = null, B;
    }
    function m(B, P, K) {
      return B.index = K, n ? (K = B.alternate, K !== null ? (K = K.index, K < P ? (B.flags |= 2, P) : K) : (B.flags |= 2, P)) : (B.flags |= 1048576, P);
    }
    function w(B) {
      return n && B.alternate === null && (B.flags |= 2), B;
    }
    function L(B, P, K, Me) {
      return P === null || P.tag !== 6 ? (P = xf(K, B.mode, Me), P.return = B, P) : (P = p(P, K), P.return = B, P);
    }
    function U(B, P, K, Me) {
      var gt = K.type;
      return gt === Re ? Te(B, P, K.props.children, Me, K.key) : P !== null && (P.elementType === gt || typeof gt == "object" && gt !== null && gt.$$typeof === me && iv(gt) === P.type) ? (Me = p(P, K.props), Me.ref = kl(B, P, K), Me.return = B, Me) : (Me = wf(K.type, K.key, K.props, null, B.mode, Me), Me.ref = kl(B, P, K), Me.return = B, Me);
    }
    function ee(B, P, K, Me) {
      return P === null || P.tag !== 4 || P.stateNode.containerInfo !== K.containerInfo || P.stateNode.implementation !== K.implementation ? (P = Ws(K, B.mode, Me), P.return = B, P) : (P = p(P, K.children || []), P.return = B, P);
    }
    function Te(B, P, K, Me, gt) {
      return P === null || P.tag !== 7 ? (P = Il(K, B.mode, Me, gt), P.return = B, P) : (P = p(P, K), P.return = B, P);
    }
    function _e(B, P, K) {
      if (typeof P == "string" && P !== "" || typeof P == "number") return P = xf("" + P, B.mode, K), P.return = B, P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case le:
            return K = wf(P.type, P.key, P.props, null, B.mode, K), K.ref = kl(B, null, P), K.return = B, K;
          case Ve:
            return P = Ws(P, B.mode, K), P.return = B, P;
          case me:
            var Me = P._init;
            return _e(B, Me(P._payload), K);
        }
        if (ct(P) || Ye(P)) return P = Il(P, B.mode, K, null), P.return = B, P;
        Xi(B, P);
      }
      return null;
    }
    function Se(B, P, K, Me) {
      var gt = P !== null ? P.key : null;
      if (typeof K == "string" && K !== "" || typeof K == "number") return gt !== null ? null : L(B, P, "" + K, Me);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case le:
            return K.key === gt ? U(B, P, K, Me) : null;
          case Ve:
            return K.key === gt ? ee(B, P, K, Me) : null;
          case me:
            return gt = K._init, Se(
              B,
              P,
              gt(K._payload),
              Me
            );
        }
        if (ct(K) || Ye(K)) return gt !== null ? null : Te(B, P, K, Me, null);
        Xi(B, K);
      }
      return null;
    }
    function et(B, P, K, Me, gt) {
      if (typeof Me == "string" && Me !== "" || typeof Me == "number") return B = B.get(K) || null, L(P, B, "" + Me, gt);
      if (typeof Me == "object" && Me !== null) {
        switch (Me.$$typeof) {
          case le:
            return B = B.get(Me.key === null ? K : Me.key) || null, U(P, B, Me, gt);
          case Ve:
            return B = B.get(Me.key === null ? K : Me.key) || null, ee(P, B, Me, gt);
          case me:
            var $t = Me._init;
            return et(B, P, K, $t(Me._payload), gt);
        }
        if (ct(Me) || Ye(Me)) return B = B.get(K) || null, Te(P, B, Me, gt, null);
        Xi(P, Me);
      }
      return null;
    }
    function ft(B, P, K, Me) {
      for (var gt = null, $t = null, dt = P, Ut = P = 0, Ar = null; dt !== null && Ut < K.length; Ut++) {
        dt.index > Ut ? (Ar = dt, dt = null) : Ar = dt.sibling;
        var xn = Se(B, dt, K[Ut], Me);
        if (xn === null) {
          dt === null && (dt = Ar);
          break;
        }
        n && dt && xn.alternate === null && r(B, dt), P = m(xn, P, Ut), $t === null ? gt = xn : $t.sibling = xn, $t = xn, dt = Ar;
      }
      if (Ut === K.length) return o(B, dt), Yn && qa(B, Ut), gt;
      if (dt === null) {
        for (; Ut < K.length; Ut++) dt = _e(B, K[Ut], Me), dt !== null && (P = m(dt, P, Ut), $t === null ? gt = dt : $t.sibling = dt, $t = dt);
        return Yn && qa(B, Ut), gt;
      }
      for (dt = s(B, dt); Ut < K.length; Ut++) Ar = et(dt, B, Ut, K[Ut], Me), Ar !== null && (n && Ar.alternate !== null && dt.delete(Ar.key === null ? Ut : Ar.key), P = m(Ar, P, Ut), $t === null ? gt = Ar : $t.sibling = Ar, $t = Ar);
      return n && dt.forEach(function(_o) {
        return r(B, _o);
      }), Yn && qa(B, Ut), gt;
    }
    function ht(B, P, K, Me) {
      var gt = Ye(K);
      if (typeof gt != "function") throw Error(d(150));
      if (K = gt.call(K), K == null) throw Error(d(151));
      for (var $t = gt = null, dt = P, Ut = P = 0, Ar = null, xn = K.next(); dt !== null && !xn.done; Ut++, xn = K.next()) {
        dt.index > Ut ? (Ar = dt, dt = null) : Ar = dt.sibling;
        var _o = Se(B, dt, xn.value, Me);
        if (_o === null) {
          dt === null && (dt = Ar);
          break;
        }
        n && dt && _o.alternate === null && r(B, dt), P = m(_o, P, Ut), $t === null ? gt = _o : $t.sibling = _o, $t = _o, dt = Ar;
      }
      if (xn.done) return o(
        B,
        dt
      ), Yn && qa(B, Ut), gt;
      if (dt === null) {
        for (; !xn.done; Ut++, xn = K.next()) xn = _e(B, xn.value, Me), xn !== null && (P = m(xn, P, Ut), $t === null ? gt = xn : $t.sibling = xn, $t = xn);
        return Yn && qa(B, Ut), gt;
      }
      for (dt = s(B, dt); !xn.done; Ut++, xn = K.next()) xn = et(dt, B, Ut, xn.value, Me), xn !== null && (n && xn.alternate !== null && dt.delete(xn.key === null ? Ut : xn.key), P = m(xn, P, Ut), $t === null ? gt = xn : $t.sibling = xn, $t = xn);
      return n && dt.forEach(function(sg) {
        return r(B, sg);
      }), Yn && qa(B, Ut), gt;
    }
    function vr(B, P, K, Me) {
      if (typeof K == "object" && K !== null && K.type === Re && K.key === null && (K = K.props.children), typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case le:
            e: {
              for (var gt = K.key, $t = P; $t !== null; ) {
                if ($t.key === gt) {
                  if (gt = K.type, gt === Re) {
                    if ($t.tag === 7) {
                      o(B, $t.sibling), P = p($t, K.props.children), P.return = B, B = P;
                      break e;
                    }
                  } else if ($t.elementType === gt || typeof gt == "object" && gt !== null && gt.$$typeof === me && iv(gt) === $t.type) {
                    o(B, $t.sibling), P = p($t, K.props), P.ref = kl(B, $t, K), P.return = B, B = P;
                    break e;
                  }
                  o(B, $t);
                  break;
                } else r(B, $t);
                $t = $t.sibling;
              }
              K.type === Re ? (P = Il(K.props.children, B.mode, Me, K.key), P.return = B, B = P) : (Me = wf(K.type, K.key, K.props, null, B.mode, Me), Me.ref = kl(B, P, K), Me.return = B, B = Me);
            }
            return w(B);
          case Ve:
            e: {
              for ($t = K.key; P !== null; ) {
                if (P.key === $t) if (P.tag === 4 && P.stateNode.containerInfo === K.containerInfo && P.stateNode.implementation === K.implementation) {
                  o(B, P.sibling), P = p(P, K.children || []), P.return = B, B = P;
                  break e;
                } else {
                  o(B, P);
                  break;
                }
                else r(B, P);
                P = P.sibling;
              }
              P = Ws(K, B.mode, Me), P.return = B, B = P;
            }
            return w(B);
          case me:
            return $t = K._init, vr(B, P, $t(K._payload), Me);
        }
        if (ct(K)) return ft(B, P, K, Me);
        if (Ye(K)) return ht(B, P, K, Me);
        Xi(B, K);
      }
      return typeof K == "string" && K !== "" || typeof K == "number" ? (K = "" + K, P !== null && P.tag === 6 ? (o(B, P.sibling), P = p(P, K), P.return = B, B = P) : (o(B, P), P = xf(K, B.mode, Me), P.return = B, B = P), w(B)) : o(B, P);
    }
    return vr;
  }
  var yu = Uc(!0), ov = Uc(!1), Eo = Xt(null), _r = null, Be = null, mi = null;
  function Ka() {
    mi = Be = _r = null;
  }
  function Bd(n) {
    var r = Eo.current;
    _n(Eo), n._currentValue = r;
  }
  function Wd(n, r, o) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, s !== null && (s.childLanes |= r)) : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function gu(n, r) {
    _r = n, mi = Be = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Na = !0), n.firstContext = null);
  }
  function yi(n) {
    var r = n._currentValue;
    if (mi !== n) if (n = { context: n, memoizedValue: r, next: null }, Be === null) {
      if (_r === null) throw Error(d(308));
      Be = n, _r.dependencies = { lanes: 0, firstContext: n };
    } else Be = Be.next = n;
    return r;
  }
  var _l = null;
  function br(n) {
    _l === null ? _l = [n] : _l.push(n);
  }
  function lv(n, r, o, s) {
    var p = r.interleaved;
    return p === null ? (o.next = o, br(r)) : (o.next = p.next, p.next = o), r.interleaved = o, wo(n, s);
  }
  function wo(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Zo = !1;
  function jc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function bu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Aa(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function el(n, r, o) {
    var s = n.updateQueue;
    if (s === null) return null;
    if (s = s.shared, fn & 2) {
      var p = s.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), s.pending = r, wo(n, o);
    }
    return p = s.interleaved, p === null ? (r.next = r, br(s)) : (r.next = p.next, p.next = r), s.interleaved = r, wo(n, o);
  }
  function Pc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Rr(n, o);
    }
  }
  function uv(n, r) {
    var o = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var p = null, m = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var w = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          m === null ? p = m = w : m = m.next = w, o = o.next;
        } while (o !== null);
        m === null ? p = m = r : m = m.next = r;
      } else p = m = r;
      o = { baseState: s.baseState, firstBaseUpdate: p, lastBaseUpdate: m, shared: s.shared, effects: s.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Fc(n, r, o, s) {
    var p = n.updateQueue;
    Zo = !1;
    var m = p.firstBaseUpdate, w = p.lastBaseUpdate, L = p.shared.pending;
    if (L !== null) {
      p.shared.pending = null;
      var U = L, ee = U.next;
      U.next = null, w === null ? m = ee : w.next = ee, w = U;
      var Te = n.alternate;
      Te !== null && (Te = Te.updateQueue, L = Te.lastBaseUpdate, L !== w && (L === null ? Te.firstBaseUpdate = ee : L.next = ee, Te.lastBaseUpdate = U));
    }
    if (m !== null) {
      var _e = p.baseState;
      w = 0, Te = ee = U = null, L = m;
      do {
        var Se = L.lane, et = L.eventTime;
        if ((s & Se) === Se) {
          Te !== null && (Te = Te.next = {
            eventTime: et,
            lane: 0,
            tag: L.tag,
            payload: L.payload,
            callback: L.callback,
            next: null
          });
          e: {
            var ft = n, ht = L;
            switch (Se = r, et = o, ht.tag) {
              case 1:
                if (ft = ht.payload, typeof ft == "function") {
                  _e = ft.call(et, _e, Se);
                  break e;
                }
                _e = ft;
                break e;
              case 3:
                ft.flags = ft.flags & -65537 | 128;
              case 0:
                if (ft = ht.payload, Se = typeof ft == "function" ? ft.call(et, _e, Se) : ft, Se == null) break e;
                _e = q({}, _e, Se);
                break e;
              case 2:
                Zo = !0;
            }
          }
          L.callback !== null && L.lane !== 0 && (n.flags |= 64, Se = p.effects, Se === null ? p.effects = [L] : Se.push(L));
        } else et = { eventTime: et, lane: Se, tag: L.tag, payload: L.payload, callback: L.callback, next: null }, Te === null ? (ee = Te = et, U = _e) : Te = Te.next = et, w |= Se;
        if (L = L.next, L === null) {
          if (L = p.shared.pending, L === null) break;
          Se = L, L = Se.next, Se.next = null, p.lastBaseUpdate = Se, p.shared.pending = null;
        }
      } while (!0);
      if (Te === null && (U = _e), p.baseState = U, p.firstBaseUpdate = ee, p.lastBaseUpdate = Te, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          w |= p.lane, p = p.next;
        while (p !== r);
      } else m === null && (p.shared.lanes = 0);
      jl |= w, n.lanes = w, n.memoizedState = _e;
    }
  }
  function sv(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var s = n[r], p = s.callback;
      if (p !== null) {
        if (s.callback = null, s = o, typeof p != "function") throw Error(d(191, p));
        p.call(s);
      }
    }
  }
  var _s = {}, Ii = Xt(_s), Su = Xt(_s), Ds = Xt(_s);
  function Dl(n) {
    if (n === _s) throw Error(d(174));
    return n;
  }
  function Yd(n, r) {
    switch (On(Ds, r), On(Su, n), On(Ii, _s), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Pe(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Pe(r, n);
    }
    _n(Ii), On(Ii, r);
  }
  function Cu() {
    _n(Ii), _n(Su), _n(Ds);
  }
  function cv(n) {
    Dl(Ds.current);
    var r = Dl(Ii.current), o = Pe(r, n.type);
    r !== o && (On(Su, n), On(Ii, o));
  }
  function Gd(n) {
    Su.current === n && (_n(Ii), _n(Su));
  }
  var Xn = Xt(0);
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
  var Ic = [];
  function qd() {
    for (var n = 0; n < Ic.length; n++) Ic[n]._workInProgressVersionPrimary = null;
    Ic.length = 0;
  }
  var Vc = xe.ReactCurrentDispatcher, Os = xe.ReactCurrentBatchConfig, yt = 0, bt = null, Ft = null, an = null, Xa = !1, Eu = !1, Ls = 0, Yy = 0;
  function oa() {
    throw Error(d(321));
  }
  function As(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!ci(n[o], r[o])) return !1;
    return !0;
  }
  function ge(n, r, o, s, p, m) {
    if (yt = m, bt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Vc.current = n === null || n.memoizedState === null ? Gy : Vn, n = o(s, p), Eu) {
      m = 0;
      do {
        if (Eu = !1, Ls = 0, 25 <= m) throw Error(d(301));
        m += 1, an = Ft = null, r.updateQueue = null, Vc.current = af, n = o(s, p);
      } while (Eu);
    }
    if (Vc.current = la, r = Ft !== null && Ft.next !== null, yt = 0, an = Ft = bt = null, Xa = !1, r) throw Error(d(300));
    return n;
  }
  function Sr() {
    var n = Ls !== 0;
    return Ls = 0, n;
  }
  function xt() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return an === null ? bt.memoizedState = an = n : an = an.next = n, an;
  }
  function qr() {
    if (Ft === null) {
      var n = bt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ft.next;
    var r = an === null ? bt.memoizedState : an.next;
    if (r !== null) an = r, Ft = n;
    else {
      if (n === null) throw Error(d(310));
      Ft = n, n = { memoizedState: Ft.memoizedState, baseState: Ft.baseState, baseQueue: Ft.baseQueue, queue: Ft.queue, next: null }, an === null ? bt.memoizedState = an = n : an = an.next = n;
    }
    return an;
  }
  function Ja(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function To(n) {
    var r = qr(), o = r.queue;
    if (o === null) throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = Ft, p = s.baseQueue, m = o.pending;
    if (m !== null) {
      if (p !== null) {
        var w = p.next;
        p.next = m.next, m.next = w;
      }
      s.baseQueue = p = m, o.pending = null;
    }
    if (p !== null) {
      m = p.next, s = s.baseState;
      var L = w = null, U = null, ee = m;
      do {
        var Te = ee.lane;
        if ((yt & Te) === Te) U !== null && (U = U.next = { lane: 0, action: ee.action, hasEagerState: ee.hasEagerState, eagerState: ee.eagerState, next: null }), s = ee.hasEagerState ? ee.eagerState : n(s, ee.action);
        else {
          var _e = {
            lane: Te,
            action: ee.action,
            hasEagerState: ee.hasEagerState,
            eagerState: ee.eagerState,
            next: null
          };
          U === null ? (L = U = _e, w = s) : U = U.next = _e, bt.lanes |= Te, jl |= Te;
        }
        ee = ee.next;
      } while (ee !== null && ee !== m);
      U === null ? w = s : U.next = L, ci(s, r.memoizedState) || (Na = !0), r.memoizedState = s, r.baseState = w, r.baseQueue = U, o.lastRenderedState = s;
    }
    if (n = o.interleaved, n !== null) {
      p = n;
      do
        m = p.lane, bt.lanes |= m, jl |= m, p = p.next;
      while (p !== n);
    } else p === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function gi(n) {
    var r = qr(), o = r.queue;
    if (o === null) throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, p = o.pending, m = r.memoizedState;
    if (p !== null) {
      o.pending = null;
      var w = p = p.next;
      do
        m = n(m, w.action), w = w.next;
      while (w !== p);
      ci(m, r.memoizedState) || (Na = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), o.lastRenderedState = m;
    }
    return [m, s];
  }
  function wu() {
  }
  function Ol(n, r) {
    var o = bt, s = qr(), p = r(), m = !ci(s.memoizedState, p);
    if (m && (s.memoizedState = p, Na = !0), s = s.queue, Ms(Wc.bind(null, o, s, n), [n]), s.getSnapshot !== r || m || an !== null && an.memoizedState.tag & 1) {
      if (o.flags |= 2048, Ll(9, Bc.bind(null, o, s, p, r), void 0, null), ur === null) throw Error(d(349));
      yt & 30 || Tu(o, r, p);
    }
    return p;
  }
  function Tu(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, bt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Bc(n, r, o, s) {
    r.value = o, r.getSnapshot = s, Yc(r) && Gc(n);
  }
  function Wc(n, r, o) {
    return o(function() {
      Yc(r) && Gc(n);
    });
  }
  function Yc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !ci(n, o);
    } catch {
      return !0;
    }
  }
  function Gc(n) {
    var r = wo(n, 1);
    r !== null && nr(r, n, 1, -1);
  }
  function qc(n) {
    var r = xt();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ja, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ns.bind(null, bt, n), [r.memoizedState, n];
  }
  function Ll(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, bt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function Qc() {
    return qr().memoizedState;
  }
  function xu(n, r, o, s) {
    var p = xt();
    bt.flags |= n, p.memoizedState = Ll(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function Ru(n, r, o, s) {
    var p = qr();
    s = s === void 0 ? null : s;
    var m = void 0;
    if (Ft !== null) {
      var w = Ft.memoizedState;
      if (m = w.destroy, s !== null && As(s, w.deps)) {
        p.memoizedState = Ll(r, o, m, s);
        return;
      }
    }
    bt.flags |= n, p.memoizedState = Ll(1 | r, o, m, s);
  }
  function Kc(n, r) {
    return xu(8390656, 8, n, r);
  }
  function Ms(n, r) {
    return Ru(2048, 8, n, r);
  }
  function Xc(n, r) {
    return Ru(4, 2, n, r);
  }
  function Jc(n, r) {
    return Ru(4, 4, n, r);
  }
  function Zc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function ef(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ru(4, 4, Zc.bind(null, r, n), o);
  }
  function ku() {
  }
  function Al(n, r) {
    var o = qr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && As(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function tf(n, r) {
    var o = qr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && As(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function nf(n, r, o) {
    return yt & 21 ? (ci(o, r) || (o = wa(), bt.lanes |= o, jl |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Na = !0), n.memoizedState = o);
  }
  function Qd(n, r) {
    var o = un;
    un = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = Os.transition;
    Os.transition = {};
    try {
      n(!1), r();
    } finally {
      un = o, Os.transition = s;
    }
  }
  function rf() {
    return qr().memoizedState;
  }
  function fv(n, r, o) {
    var s = ko(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, Kd(n)) _u(r, o);
    else if (o = lv(n, r, o, s), o !== null) {
      var p = Ir();
      nr(o, n, s, p), tl(o, r, s);
    }
  }
  function Ns(n, r, o) {
    var s = ko(n), p = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Kd(n)) _u(r, p);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var w = r.lastRenderedState, L = m(w, o);
        if (p.hasEagerState = !0, p.eagerState = L, ci(L, w)) {
          var U = r.interleaved;
          U === null ? (p.next = p, br(r)) : (p.next = U.next, U.next = p), r.interleaved = p;
          return;
        }
      } catch {
      } finally {
      }
      o = lv(n, r, p, s), o !== null && (p = Ir(), nr(o, n, s, p), tl(o, r, s));
    }
  }
  function Kd(n) {
    var r = n.alternate;
    return n === bt || r !== null && r === bt;
  }
  function _u(n, r) {
    Eu = Xa = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function tl(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, Rr(n, o);
    }
  }
  var la = { readContext: yi, useCallback: oa, useContext: oa, useEffect: oa, useImperativeHandle: oa, useInsertionEffect: oa, useLayoutEffect: oa, useMemo: oa, useReducer: oa, useRef: oa, useState: oa, useDebugValue: oa, useDeferredValue: oa, useTransition: oa, useMutableSource: oa, useSyncExternalStore: oa, useId: oa, unstable_isNewReconciler: !1 }, Gy = { readContext: yi, useCallback: function(n, r) {
    return xt().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: yi, useEffect: Kc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, xu(
      4194308,
      4,
      Zc.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return xu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return xu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = xt();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = xt();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = fv.bind(null, bt, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = xt();
    return n = { current: n }, r.memoizedState = n;
  }, useState: qc, useDebugValue: ku, useDeferredValue: function(n) {
    return xt().memoizedState = n;
  }, useTransition: function() {
    var n = qc(!1), r = n[0];
    return n = Qd.bind(null, n[1]), xt().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = bt, p = xt();
    if (Yn) {
      if (o === void 0) throw Error(d(407));
      o = o();
    } else {
      if (o = r(), ur === null) throw Error(d(349));
      yt & 30 || Tu(s, r, o);
    }
    p.memoizedState = o;
    var m = { value: o, getSnapshot: r };
    return p.queue = m, Kc(Wc.bind(
      null,
      s,
      m,
      n
    ), [n]), s.flags |= 2048, Ll(9, Bc.bind(null, s, m, o, r), void 0, null), o;
  }, useId: function() {
    var n = xt(), r = ur.identifierPrefix;
    if (Yn) {
      var o = Co, s = Gr;
      o = (s & ~(1 << 32 - Cn(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ls++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = Yy++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Vn = {
    readContext: yi,
    useCallback: Al,
    useContext: yi,
    useEffect: Ms,
    useImperativeHandle: ef,
    useInsertionEffect: Xc,
    useLayoutEffect: Jc,
    useMemo: tf,
    useReducer: To,
    useRef: Qc,
    useState: function() {
      return To(Ja);
    },
    useDebugValue: ku,
    useDeferredValue: function(n) {
      var r = qr();
      return nf(r, Ft.memoizedState, n);
    },
    useTransition: function() {
      var n = To(Ja)[0], r = qr().memoizedState;
      return [n, r];
    },
    useMutableSource: wu,
    useSyncExternalStore: Ol,
    useId: rf,
    unstable_isNewReconciler: !1
  }, af = { readContext: yi, useCallback: Al, useContext: yi, useEffect: Ms, useImperativeHandle: ef, useInsertionEffect: Xc, useLayoutEffect: Jc, useMemo: tf, useReducer: gi, useRef: Qc, useState: function() {
    return gi(Ja);
  }, useDebugValue: ku, useDeferredValue: function(n) {
    var r = qr();
    return Ft === null ? r.memoizedState = n : nf(r, Ft.memoizedState, n);
  }, useTransition: function() {
    var n = gi(Ja)[0], r = qr().memoizedState;
    return [n, r];
  }, useMutableSource: wu, useSyncExternalStore: Ol, useId: rf, unstable_isNewReconciler: !1 };
  function Ma(n, r) {
    if (n && n.defaultProps) {
      r = q({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function Ml(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : q({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Nl = { isMounted: function(n) {
    return (n = n._reactInternals) ? ut(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var s = Ir(), p = ko(n), m = Aa(s, p);
    m.payload = r, o != null && (m.callback = o), r = el(n, m, p), r !== null && (nr(r, n, p, s), Pc(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = Ir(), p = ko(n), m = Aa(s, p);
    m.tag = 1, m.payload = r, o != null && (m.callback = o), r = el(n, m, p), r !== null && (nr(r, n, p, s), Pc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = Ir(), s = ko(n), p = Aa(o, s);
    p.tag = 2, r != null && (p.callback = r), r = el(n, p, s), r !== null && (nr(r, n, s, o), Pc(r, n, s));
  } };
  function dv(n, r, o, s, p, m, w) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, m, w) : r.prototype && r.prototype.isPureReactComponent ? !ms(o, s) || !ms(p, m) : !0;
  }
  function pv(n, r, o) {
    var s = !1, p = Ki, m = r.contextType;
    return typeof m == "object" && m !== null ? m = yi(m) : (p = Kn(r) ? ka : Pt.current, s = r.contextTypes, m = (s = s != null) ? di(n, p) : Ki), r = new r(o, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Nl, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function hv(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && Nl.enqueueReplaceState(r, r.state, null);
  }
  function Xd(n, r, o, s) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = {}, jc(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? p.context = yi(m) : (m = Kn(r) ? ka : Pt.current, p.context = di(n, m)), p.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (Ml(n, r, m, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && Nl.enqueueReplaceState(p, p.state, null), Fc(n, o, p, s), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function nl(n, r) {
    try {
      var o = "", s = r;
      do
        o += _(s), s = s.return;
      while (s);
      var p = o;
    } catch (m) {
      p = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function Jd(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function $s(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var vv = typeof WeakMap == "function" ? WeakMap : Map;
  function mv(n, r, o) {
    o = Aa(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      yf || (yf = !0, lp = s), $s(n, r);
    }, o;
  }
  function yv(n, r, o) {
    o = Aa(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var p = r.value;
      o.payload = function() {
        return s(p);
      }, o.callback = function() {
        $s(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
      $s(n, r), typeof s != "function" && (Ci === null ? Ci = /* @__PURE__ */ new Set([this]) : Ci.add(this));
      var w = r.stack;
      this.componentDidCatch(r.value, { componentStack: w !== null ? w : "" });
    }), o;
  }
  function zs(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new vv();
      var p = /* @__PURE__ */ new Set();
      s.set(r, p);
    } else p = s.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), s.set(r, p));
    p.has(o) || (p.add(o), n = rg.bind(null, n, r, o), r.then(n, n));
  }
  function gv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Zd(n, r, o, s, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Aa(-1, 1), r.tag = 2, el(o, r, 1))), o.lanes |= 1), n);
  }
  var bv = xe.ReactCurrentOwner, Na = !1;
  function pr(n, r, o, s) {
    r.child = n === null ? ov(r, null, o, s) : yu(r, n.child, o, s);
  }
  function Du(n, r, o, s, p) {
    o = o.render;
    var m = r.ref;
    return gu(r, p), s = ge(n, r, o, s, m, p), o = Sr(), n !== null && !Na ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, hr(n, r, p)) : (Yn && o && Ac(r), r.flags |= 1, pr(n, r, s, p), r.child);
  }
  function rl(n, r, o, s, p) {
    if (n === null) {
      var m = o.type;
      return typeof m == "function" && !dp(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = m, of(n, r, m, s, p)) : (n = wf(o.type, null, s, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, !(n.lanes & p)) {
      var w = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ms, o(w, s) && n.ref === r.ref) return hr(n, r, p);
    }
    return r.flags |= 1, n = ol(m, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function of(n, r, o, s, p) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (ms(m, s) && n.ref === r.ref) if (Na = !1, r.pendingProps = s = m, (n.lanes & p) !== 0) n.flags & 131072 && (Na = !0);
      else return r.lanes = n.lanes, hr(n, r, p);
    }
    return Qt(n, r, o, s, p);
  }
  function $a(n, r, o) {
    var s = r.pendingProps, p = s.children, m = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, On(Pu, za), za |= o;
    else {
      if (!(o & 1073741824)) return n = m !== null ? m.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, On(Pu, za), za |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = m !== null ? m.baseLanes : o, On(Pu, za), za |= s;
    }
    else m !== null ? (s = m.baseLanes | o, r.memoizedState = null) : s = o, On(Pu, za), za |= s;
    return pr(n, r, p, o), r.child;
  }
  function $l(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Qt(n, r, o, s, p) {
    var m = Kn(o) ? ka : Pt.current;
    return m = di(r, m), gu(r, p), o = ge(n, r, o, s, m, p), s = Sr(), n !== null && !Na ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, hr(n, r, p)) : (Yn && s && Ac(r), r.flags |= 1, pr(n, r, o, p), r.child);
  }
  function Us(n, r, o, s, p) {
    if (Kn(o)) {
      var m = !0;
      Lc(r);
    } else m = !1;
    if (gu(r, p), r.stateNode === null) Ps(n, r), pv(r, o, s), Xd(r, o, s, p), s = !0;
    else if (n === null) {
      var w = r.stateNode, L = r.memoizedProps;
      w.props = L;
      var U = w.context, ee = o.contextType;
      typeof ee == "object" && ee !== null ? ee = yi(ee) : (ee = Kn(o) ? ka : Pt.current, ee = di(r, ee));
      var Te = o.getDerivedStateFromProps, _e = typeof Te == "function" || typeof w.getSnapshotBeforeUpdate == "function";
      _e || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (L !== s || U !== ee) && hv(r, w, s, ee), Zo = !1;
      var Se = r.memoizedState;
      w.state = Se, Fc(r, s, w, p), U = r.memoizedState, L !== s || Se !== U || or.current || Zo ? (typeof Te == "function" && (Ml(r, o, Te, s), U = r.memoizedState), (L = Zo || dv(r, o, L, s, Se, U, ee)) ? (_e || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = U), w.props = s, w.state = U, w.context = ee, s = L) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      w = r.stateNode, bu(n, r), L = r.memoizedProps, ee = r.type === r.elementType ? L : Ma(r.type, L), w.props = ee, _e = r.pendingProps, Se = w.context, U = o.contextType, typeof U == "object" && U !== null ? U = yi(U) : (U = Kn(o) ? ka : Pt.current, U = di(r, U));
      var et = o.getDerivedStateFromProps;
      (Te = typeof et == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (L !== _e || Se !== U) && hv(r, w, s, U), Zo = !1, Se = r.memoizedState, w.state = Se, Fc(r, s, w, p);
      var ft = r.memoizedState;
      L !== _e || Se !== ft || or.current || Zo ? (typeof et == "function" && (Ml(r, o, et, s), ft = r.memoizedState), (ee = Zo || dv(r, o, ee, s, Se, ft, U) || !1) ? (Te || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(s, ft, U), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(s, ft, U)), typeof w.componentDidUpdate == "function" && (r.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || L === n.memoizedProps && Se === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || L === n.memoizedProps && Se === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = ft), w.props = s, w.state = ft, w.context = U, s = ee) : (typeof w.componentDidUpdate != "function" || L === n.memoizedProps && Se === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || L === n.memoizedProps && Se === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return lf(n, r, o, s, m, p);
  }
  function lf(n, r, o, s, p, m) {
    $l(n, r);
    var w = (r.flags & 128) !== 0;
    if (!s && !w) return p && tv(r, o, !1), hr(n, r, m);
    s = r.stateNode, bv.current = r;
    var L = w && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && w ? (r.child = yu(r, n.child, null, m), r.child = yu(r, null, L, m)) : pr(n, r, L, m), r.memoizedState = s.state, p && tv(r, o, !0), r.child;
  }
  function qy(n) {
    var r = n.stateNode;
    r.pendingContext ? Xo(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Xo(n, r.context, !1), Yd(n, r.containerInfo);
  }
  function Sv(n, r, o, s, p) {
    return tr(), Vd(p), r.flags |= 256, pr(n, r, o, s), r.child;
  }
  var js = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zl(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Cv(n, r, o) {
    var s = r.pendingProps, p = Xn.current, m = !1, w = (r.flags & 128) !== 0, L;
    if ((L = w) || (L = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), L ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), On(Xn, p & 1), n === null)
      return Nc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (w = s.children, n = s.fallback, m ? (s = r.mode, m = r.child, w = { mode: "hidden", children: w }, !(s & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = w) : m = Tf(w, s, 0, null), n = Il(n, s, o, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = zl(o), r.memoizedState = js, n) : uf(r, w));
    if (p = n.memoizedState, p !== null && (L = p.dehydrated, L !== null)) return ep(n, r, w, s, L, p, o);
    if (m) {
      m = s.fallback, w = r.mode, p = n.child, L = p.sibling;
      var U = { mode: "hidden", children: s.children };
      return !(w & 1) && r.child !== p ? (s = r.child, s.childLanes = 0, s.pendingProps = U, r.deletions = null) : (s = ol(p, U), s.subtreeFlags = p.subtreeFlags & 14680064), L !== null ? m = ol(L, m) : (m = Il(m, w, o, null), m.flags |= 2), m.return = r, s.return = r, s.sibling = m, r.child = s, s = m, m = r.child, w = n.child.memoizedState, w = w === null ? zl(o) : { baseLanes: w.baseLanes | o, cachePool: null, transitions: w.transitions }, m.memoizedState = w, m.childLanes = n.childLanes & ~o, r.memoizedState = js, s;
    }
    return m = n.child, n = m.sibling, s = ol(m, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function uf(n, r) {
    return r = Tf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function sf(n, r, o, s) {
    return s !== null && Vd(s), yu(r, n.child, null, o), n = uf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ep(n, r, o, s, p, m, w) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = Jd(Error(d(422))), sf(n, r, w, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = s.fallback, p = r.mode, s = Tf({ mode: "visible", children: s.children }, p, 0, null), m = Il(m, p, w, null), m.flags |= 2, s.return = r, m.return = r, s.sibling = m, r.child = s, r.mode & 1 && yu(r, n.child, null, w), r.child.memoizedState = zl(w), r.memoizedState = js, m);
    if (!(r.mode & 1)) return sf(n, r, w, null);
    if (p.data === "$!") {
      if (s = p.nextSibling && p.nextSibling.dataset, s) var L = s.dgst;
      return s = L, m = Error(d(419)), s = Jd(m, s, void 0), sf(n, r, w, s);
    }
    if (L = (w & n.childLanes) !== 0, Na || L) {
      if (s = ur, s !== null) {
        switch (w & -w) {
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
        p = p & (s.suspendedLanes | w) ? 0 : p, p !== 0 && p !== m.retryLane && (m.retryLane = p, wo(n, p), nr(s, n, p, -1));
      }
      return Bs(), s = Jd(Error(d(421))), sf(n, r, w, s);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = fp.bind(null, n), p._reactRetry = r, null) : (n = m.treeContext, La = Hi(p.nextSibling), Qa = r, Yn = !0, vi = null, n !== null && (Oa[ia++] = Gr, Oa[ia++] = Co, Oa[ia++] = hi, Gr = n.id, Co = n.overflow, hi = r), r = uf(r, s.children), r.flags |= 4096, r);
  }
  function Ev(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), Wd(n.return, r, o);
  }
  function cf(n, r, o, s, p) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: p } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = s, m.tail = o, m.tailMode = p);
  }
  function tp(n, r, o) {
    var s = r.pendingProps, p = s.revealOrder, m = s.tail;
    if (pr(n, r, s.children, o), s = Xn.current, s & 2) s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ev(n, o, r);
        else if (n.tag === 19) Ev(n, o, r);
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
    if (On(Xn, s), !(r.mode & 1)) r.memoizedState = null;
    else switch (p) {
      case "forwards":
        for (o = r.child, p = null; o !== null; ) n = o.alternate, n !== null && Hc(n) === null && (p = o), o = o.sibling;
        o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), cf(r, !1, p, o, m);
        break;
      case "backwards":
        for (o = null, p = r.child, r.child = null; p !== null; ) {
          if (n = p.alternate, n !== null && Hc(n) === null) {
            r.child = p;
            break;
          }
          n = p.sibling, p.sibling = o, o = p, p = n;
        }
        cf(r, !0, o, null, m);
        break;
      case "together":
        cf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ps(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function hr(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), jl |= r.lanes, !(o & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, o = ol(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = ol(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function xo(n, r, o) {
    switch (r.tag) {
      case 3:
        qy(r), tr();
        break;
      case 5:
        cv(r);
        break;
      case 1:
        Kn(r.type) && Lc(r);
        break;
      case 4:
        Yd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, p = r.memoizedProps.value;
        On(Eo, s._currentValue), s._currentValue = p;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (On(Xn, Xn.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Cv(n, r, o) : (On(Xn, Xn.current & 1), n = hr(n, r, o), n !== null ? n.sibling : null);
        On(Xn, Xn.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s) return tp(n, r, o);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), On(Xn, Xn.current), s) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, $a(n, r, o);
    }
    return hr(n, r, o);
  }
  var Ji, Ou, Lu, bi;
  Ji = function(n, r) {
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
  }, Ou = function() {
  }, Lu = function(n, r, o, s) {
    var p = n.memoizedProps;
    if (p !== s) {
      n = r.stateNode, Dl(Ii.current);
      var m = null;
      switch (o) {
        case "input":
          p = Bt(n, p), s = Bt(n, s), m = [];
          break;
        case "select":
          p = q({}, p, { value: void 0 }), s = q({}, s, { value: void 0 }), m = [];
          break;
        case "textarea":
          p = Ht(n, p), s = Ht(n, s), m = [];
          break;
        default:
          typeof p.onClick != "function" && typeof s.onClick == "function" && (n.onclick = Oc);
      }
      Mn(o, s);
      var w;
      o = null;
      for (ee in p) if (!s.hasOwnProperty(ee) && p.hasOwnProperty(ee) && p[ee] != null) if (ee === "style") {
        var L = p[ee];
        for (w in L) L.hasOwnProperty(w) && (o || (o = {}), o[w] = "");
      } else ee !== "dangerouslySetInnerHTML" && ee !== "children" && ee !== "suppressContentEditableWarning" && ee !== "suppressHydrationWarning" && ee !== "autoFocus" && (b.hasOwnProperty(ee) ? m || (m = []) : (m = m || []).push(ee, null));
      for (ee in s) {
        var U = s[ee];
        if (L = p != null ? p[ee] : void 0, s.hasOwnProperty(ee) && U !== L && (U != null || L != null)) if (ee === "style") if (L) {
          for (w in L) !L.hasOwnProperty(w) || U && U.hasOwnProperty(w) || (o || (o = {}), o[w] = "");
          for (w in U) U.hasOwnProperty(w) && L[w] !== U[w] && (o || (o = {}), o[w] = U[w]);
        } else o || (m || (m = []), m.push(
          ee,
          o
        )), o = U;
        else ee === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, L = L ? L.__html : void 0, U != null && L !== U && (m = m || []).push(ee, U)) : ee === "children" ? typeof U != "string" && typeof U != "number" || (m = m || []).push(ee, "" + U) : ee !== "suppressContentEditableWarning" && ee !== "suppressHydrationWarning" && (b.hasOwnProperty(ee) ? (U != null && ee === "onScroll" && Fn("scroll", n), m || L === U || (m = [])) : (m = m || []).push(ee, U));
      }
      o && (m = m || []).push("style", o);
      var ee = m;
      (r.updateQueue = ee) && (r.flags |= 4);
    }
  }, bi = function(n, r, o, s) {
    o !== s && (r.flags |= 4);
  };
  function lr(n, r) {
    if (!Yn) switch (n.tailMode) {
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
  function ua(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r) for (var p = n.child; p !== null; ) o |= p.lanes | p.childLanes, s |= p.subtreeFlags & 14680064, s |= p.flags & 14680064, p.return = n, p = p.sibling;
    else for (p = n.child; p !== null; ) o |= p.lanes | p.childLanes, s |= p.subtreeFlags, s |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function Qy(n, r, o) {
    var s = r.pendingProps;
    switch (Hd(r), r.tag) {
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
        return ua(r), null;
      case 1:
        return Kn(r.type) && pi(), ua(r), null;
      case 3:
        return s = r.stateNode, Cu(), _n(or), _n(Pt), qd(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && ($c(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, vi !== null && (up(vi), vi = null))), Ou(n, r), ua(r), null;
      case 5:
        Gd(r);
        var p = Dl(Ds.current);
        if (o = r.type, n !== null && r.stateNode != null) Lu(n, r, o, s, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null) throw Error(d(166));
            return ua(r), null;
          }
          if (n = Dl(Ii.current), $c(r)) {
            s = r.stateNode, o = r.type;
            var m = r.memoizedProps;
            switch (s[Qi] = r, s[xl] = m, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Fn("cancel", s), Fn("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Fn("load", s);
                break;
              case "video":
              case "audio":
                for (p = 0; p < Ss.length; p++) Fn(Ss[p], s);
                break;
              case "source":
                Fn("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Fn(
                  "error",
                  s
                ), Fn("load", s);
                break;
              case "details":
                Fn("toggle", s);
                break;
              case "input":
                Q(s, m), Fn("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!m.multiple }, Fn("invalid", s);
                break;
              case "textarea":
                je(s, m), Fn("invalid", s);
            }
            Mn(o, m), p = null;
            for (var w in m) if (m.hasOwnProperty(w)) {
              var L = m[w];
              w === "children" ? typeof L == "string" ? s.textContent !== L && (m.suppressHydrationWarning !== !0 && Dc(s.textContent, L, n), p = ["children", L]) : typeof L == "number" && s.textContent !== "" + L && (m.suppressHydrationWarning !== !0 && Dc(
                s.textContent,
                L,
                n
              ), p = ["children", "" + L]) : b.hasOwnProperty(w) && L != null && w === "onScroll" && Fn("scroll", s);
            }
            switch (o) {
              case "input":
                Kt(s), vt(s, m, !0);
                break;
              case "textarea":
                Kt(s), wt(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (s.onclick = Oc);
            }
            s = p, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            w = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ie(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = w.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = w.createElement(o, { is: s.is }) : (n = w.createElement(o), o === "select" && (w = n, s.multiple ? w.multiple = !0 : s.size && (w.size = s.size))) : n = w.createElementNS(n, o), n[Qi] = r, n[xl] = s, Ji(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (w = Nn(o, s), o) {
                case "dialog":
                  Fn("cancel", n), Fn("close", n), p = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Fn("load", n), p = s;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < Ss.length; p++) Fn(Ss[p], n);
                  p = s;
                  break;
                case "source":
                  Fn("error", n), p = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Fn(
                    "error",
                    n
                  ), Fn("load", n), p = s;
                  break;
                case "details":
                  Fn("toggle", n), p = s;
                  break;
                case "input":
                  Q(n, s), p = Bt(n, s), Fn("invalid", n);
                  break;
                case "option":
                  p = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, p = q({}, s, { value: void 0 }), Fn("invalid", n);
                  break;
                case "textarea":
                  je(n, s), p = Ht(n, s), Fn("invalid", n);
                  break;
                default:
                  p = s;
              }
              Mn(o, p), L = p;
              for (m in L) if (L.hasOwnProperty(m)) {
                var U = L[m];
                m === "style" ? Dt(n, U) : m === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && An(n, U)) : m === "children" ? typeof U == "string" ? (o !== "textarea" || U !== "") && mn(n, U) : typeof U == "number" && mn(n, "" + U) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (b.hasOwnProperty(m) ? U != null && m === "onScroll" && Fn("scroll", n) : U != null && Oe(n, m, U, w));
              }
              switch (o) {
                case "input":
                  Kt(n), vt(n, s, !1);
                  break;
                case "textarea":
                  Kt(n), wt(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + He(s.value));
                  break;
                case "select":
                  n.multiple = !!s.multiple, m = s.value, m != null ? mt(n, !!s.multiple, m, !1) : s.defaultValue != null && mt(
                    n,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = Oc);
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
        return ua(r), null;
      case 6:
        if (n && r.stateNode != null) bi(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null) throw Error(d(166));
          if (o = Dl(Ds.current), Dl(Ii.current), $c(r)) {
            if (s = r.stateNode, o = r.memoizedProps, s[Qi] = r, (m = s.nodeValue !== o) && (n = Qa, n !== null)) switch (n.tag) {
              case 3:
                Dc(s.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Dc(s.nodeValue, o, (n.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[Qi] = r, r.stateNode = s;
        }
        return ua(r), null;
      case 13:
        if (_n(Xn), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Yn && La !== null && r.mode & 1 && !(r.flags & 128)) av(), tr(), r.flags |= 98560, m = !1;
          else if (m = $c(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!m) throw Error(d(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(d(317));
              m[Qi] = r;
            } else tr(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            ua(r), m = !1;
          } else vi !== null && (up(vi), vi = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || Xn.current & 1 ? Or === 0 && (Or = 3) : Bs())), r.updateQueue !== null && (r.flags |= 4), ua(r), null);
      case 4:
        return Cu(), Ou(n, r), n === null && hu(r.stateNode.containerInfo), ua(r), null;
      case 10:
        return Bd(r.type._context), ua(r), null;
      case 17:
        return Kn(r.type) && pi(), ua(r), null;
      case 19:
        if (_n(Xn), m = r.memoizedState, m === null) return ua(r), null;
        if (s = (r.flags & 128) !== 0, w = m.rendering, w === null) if (s) lr(m, !1);
        else {
          if (Or !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (w = Hc(n), w !== null) {
              for (r.flags |= 128, lr(m, !1), s = w.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; ) m = o, n = s, m.flags &= 14680066, w = m.alternate, w === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = w.childLanes, m.lanes = w.lanes, m.child = w.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = w.memoizedProps, m.memoizedState = w.memoizedState, m.updateQueue = w.updateQueue, m.type = w.type, n = w.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return On(Xn, Xn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          m.tail !== null && Ce() > Hu && (r.flags |= 128, s = !0, lr(m, !1), r.lanes = 4194304);
        }
        else {
          if (!s) if (n = Hc(w), n !== null) {
            if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), lr(m, !0), m.tail === null && m.tailMode === "hidden" && !w.alternate && !Yn) return ua(r), null;
          } else 2 * Ce() - m.renderingStartTime > Hu && o !== 1073741824 && (r.flags |= 128, s = !0, lr(m, !1), r.lanes = 4194304);
          m.isBackwards ? (w.sibling = r.child, r.child = w) : (o = m.last, o !== null ? o.sibling = w : r.child = w, m.last = w);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = Ce(), r.sibling = null, o = Xn.current, On(Xn, s ? o & 1 | 2 : o & 1), r) : (ua(r), null);
      case 22:
      case 23:
        return Cf(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? za & 1073741824 && (ua(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ua(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function Ky(n, r) {
    switch (Hd(r), r.tag) {
      case 1:
        return Kn(r.type) && pi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Cu(), _n(or), _n(Pt), qd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Gd(r), null;
      case 13:
        if (_n(Xn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(d(340));
          tr();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return _n(Xn), null;
      case 4:
        return Cu(), null;
      case 10:
        return Bd(r.type._context), null;
      case 22:
      case 23:
        return Cf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Au = !1, Qr = !1, ff = typeof WeakSet == "function" ? WeakSet : Set, lt = null;
  function Mu(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (s) {
      sr(n, r, s);
    }
    else o.current = null;
  }
  function np(n, r, o) {
    try {
      o();
    } catch (s) {
      sr(n, r, s);
    }
  }
  var df = !1;
  function Xy(n, r) {
    if (Md = si, n = Tc(), yo(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var s = o.getSelection && o.getSelection();
        if (s && s.rangeCount !== 0) {
          o = s.anchorNode;
          var p = s.anchorOffset, m = s.focusNode;
          s = s.focusOffset;
          try {
            o.nodeType, m.nodeType;
          } catch {
            o = null;
            break e;
          }
          var w = 0, L = -1, U = -1, ee = 0, Te = 0, _e = n, Se = null;
          t: for (; ; ) {
            for (var et; _e !== o || p !== 0 && _e.nodeType !== 3 || (L = w + p), _e !== m || s !== 0 && _e.nodeType !== 3 || (U = w + s), _e.nodeType === 3 && (w += _e.nodeValue.length), (et = _e.firstChild) !== null; )
              Se = _e, _e = et;
            for (; ; ) {
              if (_e === n) break t;
              if (Se === o && ++ee === p && (L = w), Se === m && ++Te === s && (U = w), (et = _e.nextSibling) !== null) break;
              _e = Se, Se = _e.parentNode;
            }
            _e = et;
          }
          o = L === -1 || U === -1 ? null : { start: L, end: U };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (wl = { focusedElem: n, selectionRange: o }, si = !1, lt = r; lt !== null; ) if (r = lt, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, lt = n;
    else for (; lt !== null; ) {
      r = lt;
      try {
        var ft = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ft !== null) {
              var ht = ft.memoizedProps, vr = ft.memoizedState, B = r.stateNode, P = B.getSnapshotBeforeUpdate(r.elementType === r.type ? ht : Ma(r.type, ht), vr);
              B.__reactInternalSnapshotBeforeUpdate = P;
            }
            break;
          case 3:
            var K = r.stateNode.containerInfo;
            K.nodeType === 1 ? K.textContent = "" : K.nodeType === 9 && K.documentElement && K.removeChild(K.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(d(163));
        }
      } catch (Me) {
        sr(r, r.return, Me);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, lt = n;
        break;
      }
      lt = r.return;
    }
    return ft = df, df = !1, ft;
  }
  function Nu(n, r, o) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var p = s = s.next;
      do {
        if ((p.tag & n) === n) {
          var m = p.destroy;
          p.destroy = void 0, m !== void 0 && np(r, o, m);
        }
        p = p.next;
      } while (p !== s);
    }
  }
  function pf(n, r) {
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
  function hf(n) {
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
  function wv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, wv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Qi], delete r[xl], delete r[zd], delete r[Wy], delete r[Ud])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function rp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Tv(n) {
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
  function Fs(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Oc));
    else if (s !== 4 && (n = n.child, n !== null)) for (Fs(n, r, o), n = n.sibling; n !== null; ) Fs(n, r, o), n = n.sibling;
  }
  function $u(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null)) for ($u(n, r, o), n = n.sibling; n !== null; ) $u(n, r, o), n = n.sibling;
  }
  var Jn = null, Fr = !1;
  function da(n, r, o) {
    for (o = o.child; o !== null; ) zu(n, r, o), o = o.sibling;
  }
  function zu(n, r, o) {
    if (Tn && typeof Tn.onCommitFiberUnmount == "function") try {
      Tn.onCommitFiberUnmount(dr, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        Qr || Mu(o, r);
      case 6:
        var s = Jn, p = Fr;
        Jn = null, da(n, r, o), Jn = s, Fr = p, Jn !== null && (Fr ? (n = Jn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Jn.removeChild(o.stateNode));
        break;
      case 18:
        Jn !== null && (Fr ? (n = Jn, o = o.stateNode, n.nodeType === 8 ? qo(n.parentNode, o) : n.nodeType === 1 && qo(n, o), Bo(n)) : qo(Jn, o.stateNode));
        break;
      case 4:
        s = Jn, p = Fr, Jn = o.stateNode.containerInfo, Fr = !0, da(n, r, o), Jn = s, Fr = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Qr && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          p = s = s.next;
          do {
            var m = p, w = m.destroy;
            m = m.tag, w !== void 0 && (m & 2 || m & 4) && np(o, r, w), p = p.next;
          } while (p !== s);
        }
        da(n, r, o);
        break;
      case 1:
        if (!Qr && (Mu(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
        } catch (L) {
          sr(o, r, L);
        }
        da(n, r, o);
        break;
      case 21:
        da(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Qr = (s = Qr) || o.memoizedState !== null, da(n, r, o), Qr = s) : da(n, r, o);
        break;
      default:
        da(n, r, o);
    }
  }
  function Uu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new ff()), r.forEach(function(s) {
        var p = ag.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(p, p));
      });
    }
  }
  function Hr(n, r) {
    var o = r.deletions;
    if (o !== null) for (var s = 0; s < o.length; s++) {
      var p = o[s];
      try {
        var m = n, w = r, L = w;
        e: for (; L !== null; ) {
          switch (L.tag) {
            case 5:
              Jn = L.stateNode, Fr = !1;
              break e;
            case 3:
              Jn = L.stateNode.containerInfo, Fr = !0;
              break e;
            case 4:
              Jn = L.stateNode.containerInfo, Fr = !0;
              break e;
          }
          L = L.return;
        }
        if (Jn === null) throw Error(d(160));
        zu(m, w, p), Jn = null, Fr = !1;
        var U = p.alternate;
        U !== null && (U.return = null), p.return = null;
      } catch (ee) {
        sr(p, r, ee);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) xv(r, n), r = r.sibling;
  }
  function xv(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Hr(r, n), Zi(n), s & 4) {
          try {
            Nu(3, n, n.return), pf(3, n);
          } catch (ht) {
            sr(n, n.return, ht);
          }
          try {
            Nu(5, n, n.return);
          } catch (ht) {
            sr(n, n.return, ht);
          }
        }
        break;
      case 1:
        Hr(r, n), Zi(n), s & 512 && o !== null && Mu(o, o.return);
        break;
      case 5:
        if (Hr(r, n), Zi(n), s & 512 && o !== null && Mu(o, o.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            mn(p, "");
          } catch (ht) {
            sr(n, n.return, ht);
          }
        }
        if (s & 4 && (p = n.stateNode, p != null)) {
          var m = n.memoizedProps, w = o !== null ? o.memoizedProps : m, L = n.type, U = n.updateQueue;
          if (n.updateQueue = null, U !== null) try {
            L === "input" && m.type === "radio" && m.name != null && ce(p, m), Nn(L, w);
            var ee = Nn(L, m);
            for (w = 0; w < U.length; w += 2) {
              var Te = U[w], _e = U[w + 1];
              Te === "style" ? Dt(p, _e) : Te === "dangerouslySetInnerHTML" ? An(p, _e) : Te === "children" ? mn(p, _e) : Oe(p, Te, _e, ee);
            }
            switch (L) {
              case "input":
                Ne(p, m);
                break;
              case "textarea":
                nt(p, m);
                break;
              case "select":
                var Se = p._wrapperState.wasMultiple;
                p._wrapperState.wasMultiple = !!m.multiple;
                var et = m.value;
                et != null ? mt(p, !!m.multiple, et, !1) : Se !== !!m.multiple && (m.defaultValue != null ? mt(
                  p,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : mt(p, !!m.multiple, m.multiple ? [] : "", !1));
            }
            p[xl] = m;
          } catch (ht) {
            sr(n, n.return, ht);
          }
        }
        break;
      case 6:
        if (Hr(r, n), Zi(n), s & 4) {
          if (n.stateNode === null) throw Error(d(162));
          p = n.stateNode, m = n.memoizedProps;
          try {
            p.nodeValue = m;
          } catch (ht) {
            sr(n, n.return, ht);
          }
        }
        break;
      case 3:
        if (Hr(r, n), Zi(n), s & 4 && o !== null && o.memoizedState.isDehydrated) try {
          Bo(r.containerInfo);
        } catch (ht) {
          sr(n, n.return, ht);
        }
        break;
      case 4:
        Hr(r, n), Zi(n);
        break;
      case 13:
        Hr(r, n), Zi(n), p = n.child, p.flags & 8192 && (m = p.memoizedState !== null, p.stateNode.isHidden = m, !m || p.alternate !== null && p.alternate.memoizedState !== null || (mf = Ce())), s & 4 && Uu(n);
        break;
      case 22:
        if (Te = o !== null && o.memoizedState !== null, n.mode & 1 ? (Qr = (ee = Qr) || Te, Hr(r, n), Qr = ee) : Hr(r, n), Zi(n), s & 8192) {
          if (ee = n.memoizedState !== null, (n.stateNode.isHidden = ee) && !Te && n.mode & 1) for (lt = n, Te = n.child; Te !== null; ) {
            for (_e = lt = Te; lt !== null; ) {
              switch (Se = lt, et = Se.child, Se.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nu(4, Se, Se.return);
                  break;
                case 1:
                  Mu(Se, Se.return);
                  var ft = Se.stateNode;
                  if (typeof ft.componentWillUnmount == "function") {
                    s = Se, o = Se.return;
                    try {
                      r = s, ft.props = r.memoizedProps, ft.state = r.memoizedState, ft.componentWillUnmount();
                    } catch (ht) {
                      sr(s, o, ht);
                    }
                  }
                  break;
                case 5:
                  Mu(Se, Se.return);
                  break;
                case 22:
                  if (Se.memoizedState !== null) {
                    Rv(_e);
                    continue;
                  }
              }
              et !== null ? (et.return = Se, lt = et) : Rv(_e);
            }
            Te = Te.sibling;
          }
          e: for (Te = null, _e = n; ; ) {
            if (_e.tag === 5) {
              if (Te === null) {
                Te = _e;
                try {
                  p = _e.stateNode, ee ? (m = p.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (L = _e.stateNode, U = _e.memoizedProps.style, w = U != null && U.hasOwnProperty("display") ? U.display : null, L.style.display = Lt("display", w));
                } catch (ht) {
                  sr(n, n.return, ht);
                }
              }
            } else if (_e.tag === 6) {
              if (Te === null) try {
                _e.stateNode.nodeValue = ee ? "" : _e.memoizedProps;
              } catch (ht) {
                sr(n, n.return, ht);
              }
            } else if ((_e.tag !== 22 && _e.tag !== 23 || _e.memoizedState === null || _e === n) && _e.child !== null) {
              _e.child.return = _e, _e = _e.child;
              continue;
            }
            if (_e === n) break e;
            for (; _e.sibling === null; ) {
              if (_e.return === null || _e.return === n) break e;
              Te === _e && (Te = null), _e = _e.return;
            }
            Te === _e && (Te = null), _e.sibling.return = _e.return, _e = _e.sibling;
          }
        }
        break;
      case 19:
        Hr(r, n), Zi(n), s & 4 && Uu(n);
        break;
      case 21:
        break;
      default:
        Hr(
          r,
          n
        ), Zi(n);
    }
  }
  function Zi(n) {
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
            s.flags & 32 && (mn(p, ""), s.flags &= -33);
            var m = Tv(n);
            $u(n, m, p);
            break;
          case 3:
          case 4:
            var w = s.stateNode.containerInfo, L = Tv(n);
            Fs(n, L, w);
            break;
          default:
            throw Error(d(161));
        }
      } catch (U) {
        sr(n, n.return, U);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Jy(n, r, o) {
    lt = n, ap(n);
  }
  function ap(n, r, o) {
    for (var s = (n.mode & 1) !== 0; lt !== null; ) {
      var p = lt, m = p.child;
      if (p.tag === 22 && s) {
        var w = p.memoizedState !== null || Au;
        if (!w) {
          var L = p.alternate, U = L !== null && L.memoizedState !== null || Qr;
          L = Au;
          var ee = Qr;
          if (Au = w, (Qr = U) && !ee) for (lt = p; lt !== null; ) w = lt, U = w.child, w.tag === 22 && w.memoizedState !== null ? ip(p) : U !== null ? (U.return = w, lt = U) : ip(p);
          for (; m !== null; ) lt = m, ap(m), m = m.sibling;
          lt = p, Au = L, Qr = ee;
        }
        ju(n);
      } else p.subtreeFlags & 8772 && m !== null ? (m.return = p, lt = m) : ju(n);
    }
  }
  function ju(n) {
    for (; lt !== null; ) {
      var r = lt;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Qr || pf(5, r);
              break;
            case 1:
              var s = r.stateNode;
              if (r.flags & 4 && !Qr) if (o === null) s.componentDidMount();
              else {
                var p = r.elementType === r.type ? o.memoizedProps : Ma(r.type, o.memoizedProps);
                s.componentDidUpdate(p, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && sv(r, m, s);
              break;
            case 3:
              var w = r.updateQueue;
              if (w !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                sv(r, w, o);
              }
              break;
            case 5:
              var L = r.stateNode;
              if (o === null && r.flags & 4) {
                o = L;
                var U = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    U.autoFocus && o.focus();
                    break;
                  case "img":
                    U.src && (o.src = U.src);
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
                var ee = r.alternate;
                if (ee !== null) {
                  var Te = ee.memoizedState;
                  if (Te !== null) {
                    var _e = Te.dehydrated;
                    _e !== null && Bo(_e);
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
          Qr || r.flags & 512 && hf(r);
        } catch (Se) {
          sr(r, r.return, Se);
        }
      }
      if (r === n) {
        lt = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, lt = o;
        break;
      }
      lt = r.return;
    }
  }
  function Rv(n) {
    for (; lt !== null; ) {
      var r = lt;
      if (r === n) {
        lt = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, lt = o;
        break;
      }
      lt = r.return;
    }
  }
  function ip(n) {
    for (; lt !== null; ) {
      var r = lt;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              pf(4, r);
            } catch (U) {
              sr(r, o, U);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var p = r.return;
              try {
                s.componentDidMount();
              } catch (U) {
                sr(r, p, U);
              }
            }
            var m = r.return;
            try {
              hf(r);
            } catch (U) {
              sr(r, m, U);
            }
            break;
          case 5:
            var w = r.return;
            try {
              hf(r);
            } catch (U) {
              sr(r, w, U);
            }
        }
      } catch (U) {
        sr(r, r.return, U);
      }
      if (r === n) {
        lt = null;
        break;
      }
      var L = r.sibling;
      if (L !== null) {
        L.return = r.return, lt = L;
        break;
      }
      lt = r.return;
    }
  }
  var Zy = Math.ceil, Ul = xe.ReactCurrentDispatcher, vf = xe.ReactCurrentOwner, Si = xe.ReactCurrentBatchConfig, fn = 0, ur = null, Gn = null, Dr = 0, za = 0, Pu = Xt(0), Or = 0, Hs = null, jl = 0, Fu = 0, op = 0, al = null, sa = null, mf = 0, Hu = 1 / 0, Ro = null, yf = !1, lp = null, Ci = null, Iu = !1, Ei = null, gf = 0, Is = 0, bf = null, Vs = -1, Pl = 0;
  function Ir() {
    return fn & 6 ? Ce() : Vs !== -1 ? Vs : Vs = Ce();
  }
  function ko(n) {
    return n.mode & 1 ? fn & 2 && Dr !== 0 ? Dr & -Dr : zc.transition !== null ? (Pl === 0 && (Pl = wa()), Pl) : (n = un, n !== 0 || (n = window.event, n = n === void 0 ? 16 : fs(n.type)), n) : 1;
  }
  function nr(n, r, o, s) {
    if (50 < Is) throw Is = 0, bf = null, Error(d(185));
    er(n, o, s), (!(fn & 2) || n !== ur) && (n === ur && (!(fn & 2) && (Fu |= o), Or === 4 && eo(n, Dr)), Lr(n, s), o === 1 && fn === 0 && !(r.mode & 1) && (Hu = Ce() + 500, Pr && _a()));
  }
  function Lr(n, r) {
    var o = n.callbackNode;
    ln(n, r);
    var s = Yr(n, n === ur ? Dr : 0);
    if (s === 0) o !== null && A(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && A(o), r === 1) n.tag === 0 ? Pd(Vu.bind(null, n)) : jd(Vu.bind(null, n)), $d(function() {
        !(fn & 6) && _a();
      }), o = null;
      else {
        switch ($i(s)) {
          case 1:
            o = st;
            break;
          case 4:
            o = ot;
            break;
          case 16:
            o = on;
            break;
          case 536870912:
            o = tn;
            break;
          default:
            o = on;
        }
        o = Nv(o, Sf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Sf(n, r) {
    if (Vs = -1, Pl = 0, fn & 6) throw Error(d(327));
    var o = n.callbackNode;
    if (Bu() && n.callbackNode !== o) return null;
    var s = Yr(n, n === ur ? Dr : 0);
    if (s === 0) return null;
    if (s & 30 || s & n.expiredLanes || r) r = Ef(n, s);
    else {
      r = s;
      var p = fn;
      fn |= 2;
      var m = _v();
      (ur !== n || Dr !== r) && (Ro = null, Hu = Ce() + 500, Hl(n, r));
      do
        try {
          tg();
          break;
        } catch (L) {
          kv(n, L);
        }
      while (!0);
      Ka(), Ul.current = m, fn = p, Gn !== null ? r = 0 : (ur = null, Dr = 0, r = Or);
    }
    if (r !== 0) {
      if (r === 2 && (p = oi(n), p !== 0 && (s = p, r = Fl(n, p))), r === 1) throw o = Hs, Hl(n, 0), eo(n, s), Lr(n, Ce()), o;
      if (r === 6) eo(n, s);
      else {
        if (p = n.current.alternate, !(s & 30) && !sp(p) && (r = Ef(n, s), r === 2 && (m = oi(n), m !== 0 && (s = m, r = Fl(n, m))), r === 1)) throw o = Hs, Hl(n, 0), eo(n, s), Lr(n, Ce()), o;
        switch (n.finishedWork = p, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            il(n, sa, Ro);
            break;
          case 3:
            if (eo(n, s), (s & 130023424) === s && (r = mf + 500 - Ce(), 10 < r)) {
              if (Yr(n, 0) !== 0) break;
              if (p = n.suspendedLanes, (p & s) !== s) {
                Ir(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = Tl(il.bind(null, n, sa, Ro), r);
              break;
            }
            il(n, sa, Ro);
            break;
          case 4:
            if (eo(n, s), (s & 4194240) === s) break;
            for (r = n.eventTimes, p = -1; 0 < s; ) {
              var w = 31 - Cn(s);
              m = 1 << w, w = r[w], w > p && (p = w), s &= ~m;
            }
            if (s = p, s = Ce() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Zy(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = Tl(il.bind(null, n, sa, Ro), s);
              break;
            }
            il(n, sa, Ro);
            break;
          case 5:
            il(n, sa, Ro);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return Lr(n, Ce()), n.callbackNode === o ? Sf.bind(null, n) : null;
  }
  function Fl(n, r) {
    var o = al;
    return n.current.memoizedState.isDehydrated && (Hl(n, r).flags |= 256), n = Ef(n, r), n !== 2 && (r = sa, sa = o, r !== null && up(r)), n;
  }
  function up(n) {
    sa === null ? sa = n : sa.push.apply(sa, n);
  }
  function sp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var s = 0; s < o.length; s++) {
          var p = o[s], m = p.getSnapshot;
          p = p.value;
          try {
            if (!ci(m(), p)) return !1;
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
  function eo(n, r) {
    for (r &= ~op, r &= ~Fu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Cn(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function Vu(n) {
    if (fn & 6) throw Error(d(327));
    Bu();
    var r = Yr(n, 0);
    if (!(r & 1)) return Lr(n, Ce()), null;
    var o = Ef(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = oi(n);
      s !== 0 && (r = s, o = Fl(n, s));
    }
    if (o === 1) throw o = Hs, Hl(n, 0), eo(n, r), Lr(n, Ce()), o;
    if (o === 6) throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, il(n, sa, Ro), Lr(n, Ce()), null;
  }
  function cp(n, r) {
    var o = fn;
    fn |= 1;
    try {
      return n(r);
    } finally {
      fn = o, fn === 0 && (Hu = Ce() + 500, Pr && _a());
    }
  }
  function to(n) {
    Ei !== null && Ei.tag === 0 && !(fn & 6) && Bu();
    var r = fn;
    fn |= 1;
    var o = Si.transition, s = un;
    try {
      if (Si.transition = null, un = 1, n) return n();
    } finally {
      un = s, Si.transition = o, fn = r, !(fn & 6) && _a();
    }
  }
  function Cf() {
    za = Pu.current, _n(Pu);
  }
  function Hl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, ev(o)), Gn !== null) for (o = Gn.return; o !== null; ) {
      var s = o;
      switch (Hd(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && pi();
          break;
        case 3:
          Cu(), _n(or), _n(Pt), qd();
          break;
        case 5:
          Gd(s);
          break;
        case 4:
          Cu();
          break;
        case 13:
          _n(Xn);
          break;
        case 19:
          _n(Xn);
          break;
        case 10:
          Bd(s.type._context);
          break;
        case 22:
        case 23:
          Cf();
      }
      o = o.return;
    }
    if (ur = n, Gn = n = ol(n.current, null), Dr = za = r, Or = 0, Hs = null, op = Fu = jl = 0, sa = al = null, _l !== null) {
      for (r = 0; r < _l.length; r++) if (o = _l[r], s = o.interleaved, s !== null) {
        o.interleaved = null;
        var p = s.next, m = o.pending;
        if (m !== null) {
          var w = m.next;
          m.next = p, s.next = w;
        }
        o.pending = s;
      }
      _l = null;
    }
    return n;
  }
  function kv(n, r) {
    do {
      var o = Gn;
      try {
        if (Ka(), Vc.current = la, Xa) {
          for (var s = bt.memoizedState; s !== null; ) {
            var p = s.queue;
            p !== null && (p.pending = null), s = s.next;
          }
          Xa = !1;
        }
        if (yt = 0, an = Ft = bt = null, Eu = !1, Ls = 0, vf.current = null, o === null || o.return === null) {
          Or = 1, Hs = r, Gn = null;
          break;
        }
        e: {
          var m = n, w = o.return, L = o, U = r;
          if (r = Dr, L.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var ee = U, Te = L, _e = Te.tag;
            if (!(Te.mode & 1) && (_e === 0 || _e === 11 || _e === 15)) {
              var Se = Te.alternate;
              Se ? (Te.updateQueue = Se.updateQueue, Te.memoizedState = Se.memoizedState, Te.lanes = Se.lanes) : (Te.updateQueue = null, Te.memoizedState = null);
            }
            var et = gv(w);
            if (et !== null) {
              et.flags &= -257, Zd(et, w, L, m, r), et.mode & 1 && zs(m, ee, r), r = et, U = ee;
              var ft = r.updateQueue;
              if (ft === null) {
                var ht = /* @__PURE__ */ new Set();
                ht.add(U), r.updateQueue = ht;
              } else ft.add(U);
              break e;
            } else {
              if (!(r & 1)) {
                zs(m, ee, r), Bs();
                break e;
              }
              U = Error(d(426));
            }
          } else if (Yn && L.mode & 1) {
            var vr = gv(w);
            if (vr !== null) {
              !(vr.flags & 65536) && (vr.flags |= 256), Zd(vr, w, L, m, r), Vd(nl(U, L));
              break e;
            }
          }
          m = U = nl(U, L), Or !== 4 && (Or = 2), al === null ? al = [m] : al.push(m), m = w;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var B = mv(m, U, r);
                uv(m, B);
                break e;
              case 1:
                L = U;
                var P = m.type, K = m.stateNode;
                if (!(m.flags & 128) && (typeof P.getDerivedStateFromError == "function" || K !== null && typeof K.componentDidCatch == "function" && (Ci === null || !Ci.has(K)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var Me = yv(m, L, r);
                  uv(m, Me);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Ov(o);
      } catch (gt) {
        r = gt, Gn === o && o !== null && (Gn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function _v() {
    var n = Ul.current;
    return Ul.current = la, n === null ? la : n;
  }
  function Bs() {
    (Or === 0 || Or === 3 || Or === 2) && (Or = 4), ur === null || !(jl & 268435455) && !(Fu & 268435455) || eo(ur, Dr);
  }
  function Ef(n, r) {
    var o = fn;
    fn |= 2;
    var s = _v();
    (ur !== n || Dr !== r) && (Ro = null, Hl(n, r));
    do
      try {
        eg();
        break;
      } catch (p) {
        kv(n, p);
      }
    while (!0);
    if (Ka(), fn = o, Ul.current = s, Gn !== null) throw Error(d(261));
    return ur = null, Dr = 0, Or;
  }
  function eg() {
    for (; Gn !== null; ) Dv(Gn);
  }
  function tg() {
    for (; Gn !== null && !G(); ) Dv(Gn);
  }
  function Dv(n) {
    var r = Mv(n.alternate, n, za);
    n.memoizedProps = n.pendingProps, r === null ? Ov(n) : Gn = r, vf.current = null;
  }
  function Ov(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Ky(o, r), o !== null) {
          o.flags &= 32767, Gn = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Or = 6, Gn = null;
          return;
        }
      } else if (o = Qy(o, r, za), o !== null) {
        Gn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        Gn = r;
        return;
      }
      Gn = r = n;
    } while (r !== null);
    Or === 0 && (Or = 5);
  }
  function il(n, r, o) {
    var s = un, p = Si.transition;
    try {
      Si.transition = null, un = 1, ng(n, r, o, s);
    } finally {
      Si.transition = p, un = s;
    }
    return null;
  }
  function ng(n, r, o, s) {
    do
      Bu();
    while (Ei !== null);
    if (fn & 6) throw Error(d(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = o.lanes | o.childLanes;
    if (Ya(n, m), n === ur && (Gn = ur = null, Dr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Iu || (Iu = !0, Nv(on, function() {
      return Bu(), null;
    })), m = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || m) {
      m = Si.transition, Si.transition = null;
      var w = un;
      un = 1;
      var L = fn;
      fn |= 4, vf.current = null, Xy(n, o), xv(o, n), xc(wl), si = !!Md, wl = Md = null, n.current = o, Jy(o), se(), fn = L, un = w, Si.transition = m;
    } else n.current = o;
    if (Iu && (Iu = !1, Ei = n, gf = p), m = n.pendingLanes, m === 0 && (Ci = null), Bn(o.stateNode), Lr(n, Ce()), r !== null) for (s = n.onRecoverableError, o = 0; o < r.length; o++) p = r[o], s(p.value, { componentStack: p.stack, digest: p.digest });
    if (yf) throw yf = !1, n = lp, lp = null, n;
    return gf & 1 && n.tag !== 0 && Bu(), m = n.pendingLanes, m & 1 ? n === bf ? Is++ : (Is = 0, bf = n) : Is = 0, _a(), null;
  }
  function Bu() {
    if (Ei !== null) {
      var n = $i(gf), r = Si.transition, o = un;
      try {
        if (Si.transition = null, un = 16 > n ? 16 : n, Ei === null) var s = !1;
        else {
          if (n = Ei, Ei = null, gf = 0, fn & 6) throw Error(d(331));
          var p = fn;
          for (fn |= 4, lt = n.current; lt !== null; ) {
            var m = lt, w = m.child;
            if (lt.flags & 16) {
              var L = m.deletions;
              if (L !== null) {
                for (var U = 0; U < L.length; U++) {
                  var ee = L[U];
                  for (lt = ee; lt !== null; ) {
                    var Te = lt;
                    switch (Te.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Nu(8, Te, m);
                    }
                    var _e = Te.child;
                    if (_e !== null) _e.return = Te, lt = _e;
                    else for (; lt !== null; ) {
                      Te = lt;
                      var Se = Te.sibling, et = Te.return;
                      if (wv(Te), Te === ee) {
                        lt = null;
                        break;
                      }
                      if (Se !== null) {
                        Se.return = et, lt = Se;
                        break;
                      }
                      lt = et;
                    }
                  }
                }
                var ft = m.alternate;
                if (ft !== null) {
                  var ht = ft.child;
                  if (ht !== null) {
                    ft.child = null;
                    do {
                      var vr = ht.sibling;
                      ht.sibling = null, ht = vr;
                    } while (ht !== null);
                  }
                }
                lt = m;
              }
            }
            if (m.subtreeFlags & 2064 && w !== null) w.return = m, lt = w;
            else e: for (; lt !== null; ) {
              if (m = lt, m.flags & 2048) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Nu(9, m, m.return);
              }
              var B = m.sibling;
              if (B !== null) {
                B.return = m.return, lt = B;
                break e;
              }
              lt = m.return;
            }
          }
          var P = n.current;
          for (lt = P; lt !== null; ) {
            w = lt;
            var K = w.child;
            if (w.subtreeFlags & 2064 && K !== null) K.return = w, lt = K;
            else e: for (w = P; lt !== null; ) {
              if (L = lt, L.flags & 2048) try {
                switch (L.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pf(9, L);
                }
              } catch (gt) {
                sr(L, L.return, gt);
              }
              if (L === w) {
                lt = null;
                break e;
              }
              var Me = L.sibling;
              if (Me !== null) {
                Me.return = L.return, lt = Me;
                break e;
              }
              lt = L.return;
            }
          }
          if (fn = p, _a(), Tn && typeof Tn.onPostCommitFiberRoot == "function") try {
            Tn.onPostCommitFiberRoot(dr, n);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        un = o, Si.transition = r;
      }
    }
    return !1;
  }
  function Lv(n, r, o) {
    r = nl(o, r), r = mv(n, r, 1), n = el(n, r, 1), r = Ir(), n !== null && (er(n, 1, r), Lr(n, r));
  }
  function sr(n, r, o) {
    if (n.tag === 3) Lv(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Lv(r, n, o);
        break;
      } else if (r.tag === 1) {
        var s = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Ci === null || !Ci.has(s))) {
          n = nl(o, n), n = yv(r, n, 1), r = el(r, n, 1), n = Ir(), r !== null && (er(r, 1, n), Lr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function rg(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = Ir(), n.pingedLanes |= n.suspendedLanes & o, ur === n && (Dr & o) === o && (Or === 4 || Or === 3 && (Dr & 130023424) === Dr && 500 > Ce() - mf ? Hl(n, 0) : op |= o), Lr(n, r);
  }
  function Av(n, r) {
    r === 0 && (n.mode & 1 ? (r = Mi, Mi <<= 1, !(Mi & 130023424) && (Mi = 4194304)) : r = 1);
    var o = Ir();
    n = wo(n, r), n !== null && (er(n, r, o), Lr(n, o));
  }
  function fp(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Av(n, o);
  }
  function ag(n, r) {
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
    s !== null && s.delete(r), Av(n, o);
  }
  var Mv;
  Mv = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || or.current) Na = !0;
    else {
      if (!(n.lanes & o) && !(r.flags & 128)) return Na = !1, xo(n, r, o);
      Na = !!(n.flags & 131072);
    }
    else Na = !1, Yn && r.flags & 1048576 && Fd(r, mu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        Ps(n, r), n = r.pendingProps;
        var p = di(r, Pt.current);
        gu(r, o), p = ge(null, r, s, n, p, o);
        var m = Sr();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Kn(s) ? (m = !0, Lc(r)) : m = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, jc(r), p.updater = Nl, r.stateNode = p, p._reactInternals = r, Xd(r, s, n, o), r = lf(null, r, s, !0, m, o)) : (r.tag = 0, Yn && m && Ac(r), pr(null, r, p, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (Ps(n, r), n = r.pendingProps, p = s._init, s = p(s._payload), r.type = s, p = r.tag = ig(s), n = Ma(s, n), p) {
            case 0:
              r = Qt(null, r, s, n, o);
              break e;
            case 1:
              r = Us(null, r, s, n, o);
              break e;
            case 11:
              r = Du(null, r, s, n, o);
              break e;
            case 14:
              r = rl(null, r, s, Ma(s.type, n), o);
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
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : Ma(s, p), Qt(n, r, s, p, o);
      case 1:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : Ma(s, p), Us(n, r, s, p, o);
      case 3:
        e: {
          if (qy(r), n === null) throw Error(d(387));
          s = r.pendingProps, m = r.memoizedState, p = m.element, bu(n, r), Fc(r, s, null, o);
          var w = r.memoizedState;
          if (s = w.element, m.isDehydrated) if (m = { element: s, isDehydrated: !1, cache: w.cache, pendingSuspenseBoundaries: w.pendingSuspenseBoundaries, transitions: w.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            p = nl(Error(d(423)), r), r = Sv(n, r, s, o, p);
            break e;
          } else if (s !== p) {
            p = nl(Error(d(424)), r), r = Sv(n, r, s, o, p);
            break e;
          } else for (La = Hi(r.stateNode.containerInfo.firstChild), Qa = r, Yn = !0, vi = null, o = ov(r, null, s, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (tr(), s === p) {
              r = hr(n, r, o);
              break e;
            }
            pr(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return cv(r), n === null && Nc(r), s = r.type, p = r.pendingProps, m = n !== null ? n.memoizedProps : null, w = p.children, ws(s, p) ? w = null : m !== null && ws(s, m) && (r.flags |= 32), $l(n, r), pr(n, r, w, o), r.child;
      case 6:
        return n === null && Nc(r), null;
      case 13:
        return Cv(n, r, o);
      case 4:
        return Yd(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = yu(r, null, s, o) : pr(n, r, s, o), r.child;
      case 11:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : Ma(s, p), Du(n, r, s, p, o);
      case 7:
        return pr(n, r, r.pendingProps, o), r.child;
      case 8:
        return pr(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return pr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, p = r.pendingProps, m = r.memoizedProps, w = p.value, On(Eo, s._currentValue), s._currentValue = w, m !== null) if (ci(m.value, w)) {
            if (m.children === p.children && !or.current) {
              r = hr(n, r, o);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var L = m.dependencies;
            if (L !== null) {
              w = m.child;
              for (var U = L.firstContext; U !== null; ) {
                if (U.context === s) {
                  if (m.tag === 1) {
                    U = Aa(-1, o & -o), U.tag = 2;
                    var ee = m.updateQueue;
                    if (ee !== null) {
                      ee = ee.shared;
                      var Te = ee.pending;
                      Te === null ? U.next = U : (U.next = Te.next, Te.next = U), ee.pending = U;
                    }
                  }
                  m.lanes |= o, U = m.alternate, U !== null && (U.lanes |= o), Wd(
                    m.return,
                    o,
                    r
                  ), L.lanes |= o;
                  break;
                }
                U = U.next;
              }
            } else if (m.tag === 10) w = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (w = m.return, w === null) throw Error(d(341));
              w.lanes |= o, L = w.alternate, L !== null && (L.lanes |= o), Wd(w, o, r), w = m.sibling;
            } else w = m.child;
            if (w !== null) w.return = m;
            else for (w = m; w !== null; ) {
              if (w === r) {
                w = null;
                break;
              }
              if (m = w.sibling, m !== null) {
                m.return = w.return, w = m;
                break;
              }
              w = w.return;
            }
            m = w;
          }
          pr(n, r, p.children, o), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, s = r.pendingProps.children, gu(r, o), p = yi(p), s = s(p), r.flags |= 1, pr(n, r, s, o), r.child;
      case 14:
        return s = r.type, p = Ma(s, r.pendingProps), p = Ma(s.type, p), rl(n, r, s, p, o);
      case 15:
        return of(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : Ma(s, p), Ps(n, r), r.tag = 1, Kn(s) ? (n = !0, Lc(r)) : n = !1, gu(r, o), pv(r, s, p), Xd(r, s, p, o), lf(null, r, s, !0, n, o);
      case 19:
        return tp(n, r, o);
      case 22:
        return $a(n, r, o);
    }
    throw Error(d(156, r.tag));
  };
  function Nv(n, r) {
    return E(n, r);
  }
  function $v(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function wi(n, r, o, s) {
    return new $v(n, r, o, s);
  }
  function dp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function ig(n) {
    if (typeof n == "function") return dp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Rt) return 11;
      if (n === be) return 14;
    }
    return 2;
  }
  function ol(n, r) {
    var o = n.alternate;
    return o === null ? (o = wi(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function wf(n, r, o, s, p, m) {
    var w = 2;
    if (s = n, typeof n == "function") dp(n) && (w = 1);
    else if (typeof n == "string") w = 5;
    else e: switch (n) {
      case Re:
        return Il(o.children, p, m, r);
      case ze:
        w = 8, p |= 8;
        break;
      case Le:
        return n = wi(12, o, r, p | 2), n.elementType = Le, n.lanes = m, n;
      case qe:
        return n = wi(13, o, r, p), n.elementType = qe, n.lanes = m, n;
      case ue:
        return n = wi(19, o, r, p), n.elementType = ue, n.lanes = m, n;
      case pe:
        return Tf(o, p, m, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Xe:
            w = 10;
            break e;
          case Et:
            w = 9;
            break e;
          case Rt:
            w = 11;
            break e;
          case be:
            w = 14;
            break e;
          case me:
            w = 16, s = null;
            break e;
        }
        throw Error(d(130, n == null ? n : typeof n, ""));
    }
    return r = wi(w, o, r, p), r.elementType = n, r.type = s, r.lanes = m, r;
  }
  function Il(n, r, o, s) {
    return n = wi(7, n, s, r), n.lanes = o, n;
  }
  function Tf(n, r, o, s) {
    return n = wi(22, n, s, r), n.elementType = pe, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function xf(n, r, o) {
    return n = wi(6, n, null, r), n.lanes = o, n;
  }
  function Ws(n, r, o) {
    return r = wi(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ys(n, r, o, s, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ni(0), this.expirationTimes = Ni(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ni(0), this.identifierPrefix = s, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function pp(n, r, o, s, p, m, w, L, U) {
    return n = new Ys(n, r, o, L, U), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = wi(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jc(m), n;
  }
  function zv(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ve, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function hp(n) {
    if (!n) return Ki;
    n = n._reactInternals;
    e: {
      if (ut(n) !== n || n.tag !== 1) throw Error(d(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Kn(r.type)) {
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
      if (Kn(o)) return Rs(n, o, r);
    }
    return r;
  }
  function vp(n, r, o, s, p, m, w, L, U) {
    return n = pp(o, s, !0, n, p, m, w, L, U), n.context = hp(null), o = n.current, s = Ir(), p = ko(o), m = Aa(s, p), m.callback = r ?? null, el(o, m, p), n.current.lanes = p, er(n, p, s), Lr(n, s), n;
  }
  function Rf(n, r, o, s) {
    var p = r.current, m = Ir(), w = ko(p);
    return o = hp(o), r.context === null ? r.context = o : r.pendingContext = o, r = Aa(m, w), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = el(p, r, w), n !== null && (nr(n, p, w, m), Pc(n, p, w)), w;
  }
  function Gs(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Uv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function mp(n, r) {
    Uv(n, r), (n = n.alternate) && Uv(n, r);
  }
  function og() {
    return null;
  }
  var yp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function kf(n) {
    this._internalRoot = n;
  }
  qs.prototype.render = kf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(d(409));
    Rf(n, r, null, null);
  }, qs.prototype.unmount = kf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      to(function() {
        Rf(null, n, null, null);
      }), r[So] = null;
    }
  };
  function qs(n) {
    this._internalRoot = n;
  }
  qs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = zi();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Dn.length && r !== 0 && r < Dn[o].priority; o++) ;
      Dn.splice(o, 0, n), o === 0 && gc(n);
    }
  };
  function ll(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function _f(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function jv() {
  }
  function lg(n, r, o, s, p) {
    if (p) {
      if (typeof s == "function") {
        var m = s;
        s = function() {
          var ee = Gs(w);
          m.call(ee);
        };
      }
      var w = vp(r, s, n, 0, null, !1, !1, "", jv);
      return n._reactRootContainer = w, n[So] = w.current, hu(n.nodeType === 8 ? n.parentNode : n), to(), w;
    }
    for (; p = n.lastChild; ) n.removeChild(p);
    if (typeof s == "function") {
      var L = s;
      s = function() {
        var ee = Gs(U);
        L.call(ee);
      };
    }
    var U = pp(n, 0, !1, null, null, !1, !1, "", jv);
    return n._reactRootContainer = U, n[So] = U.current, hu(n.nodeType === 8 ? n.parentNode : n), to(function() {
      Rf(r, U, o, s);
    }), U;
  }
  function Df(n, r, o, s, p) {
    var m = o._reactRootContainer;
    if (m) {
      var w = m;
      if (typeof p == "function") {
        var L = p;
        p = function() {
          var U = Gs(w);
          L.call(U);
        };
      }
      Rf(r, w, n, p);
    } else w = lg(o, r, n, p, s);
    return Gs(w);
  }
  Ta = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Wa(r.pendingLanes);
          o !== 0 && (Rr(r, o | 1), Lr(r, Ce()), !(fn & 6) && (Hu = Ce() + 500, _a()));
        }
        break;
      case 13:
        to(function() {
          var s = wo(n, 1);
          if (s !== null) {
            var p = Ir();
            nr(s, n, 1, p);
          }
        }), mp(n, 1);
    }
  }, fa = function(n) {
    if (n.tag === 13) {
      var r = wo(n, 134217728);
      if (r !== null) {
        var o = Ir();
        nr(r, n, 134217728, o);
      }
      mp(n, 134217728);
    }
  }, nn = function(n) {
    if (n.tag === 13) {
      var r = ko(n), o = wo(n, r);
      if (o !== null) {
        var s = Ir();
        nr(o, n, r, s);
      }
      mp(n, r);
    }
  }, zi = function() {
    return un;
  }, Gi = function(n, r) {
    var o = un;
    try {
      return un = n, r();
    } finally {
      un = o;
    }
  }, Er = function(n, r, o) {
    switch (r) {
      case "input":
        if (Ne(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var p = _t(s);
              if (!p) throw Error(d(90));
              Jt(s), Ne(s, p);
            }
          }
        }
        break;
      case "textarea":
        nt(n, o);
        break;
      case "select":
        r = o.value, r != null && mt(n, !!o.multiple, r, !1);
    }
  }, Nr = cp, Ai = to;
  var ug = { usingClientEntryPoint: !1, Events: [xs, vu, _t, wr, Br, cp] }, Qs = { findFiberByHostInstance: fi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Pv = { bundleType: Qs.bundleType, version: Qs.version, rendererPackageName: Qs.rendererPackageName, rendererConfig: Qs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: xe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = It(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Qs.findFiberByHostInstance || og, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Of = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Of.isDisabled && Of.supportsFiber) try {
      dr = Of.inject(Pv), Tn = Of;
    } catch {
    }
  }
  return Di.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ug, Di.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ll(r)) throw Error(d(200));
    return zv(n, r, null, o);
  }, Di.createRoot = function(n, r) {
    if (!ll(n)) throw Error(d(299));
    var o = !1, s = "", p = yp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = pp(n, 1, !1, null, null, o, !1, s, p), n[So] = r.current, hu(n.nodeType === 8 ? n.parentNode : n), new kf(r);
  }, Di.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : (n = Object.keys(n).join(","), Error(d(268, n)));
    return n = It(r), n = n === null ? null : n.stateNode, n;
  }, Di.flushSync = function(n) {
    return to(n);
  }, Di.hydrate = function(n, r, o) {
    if (!_f(r)) throw Error(d(200));
    return Df(null, n, r, !0, o);
  }, Di.hydrateRoot = function(n, r, o) {
    if (!ll(n)) throw Error(d(405));
    var s = o != null && o.hydratedSources || null, p = !1, m = "", w = yp;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (w = o.onRecoverableError)), r = vp(r, null, n, 1, o ?? null, p, !1, m, w), n[So] = r.current, hu(n), s) for (n = 0; n < s.length; n++) o = s[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
      o,
      p
    );
    return new qs(r);
  }, Di.render = function(n, r, o) {
    if (!_f(r)) throw Error(d(200));
    return Df(null, n, r, !1, o);
  }, Di.unmountComponentAtNode = function(n) {
    if (!_f(n)) throw Error(d(40));
    return n._reactRootContainer ? (to(function() {
      Df(null, null, n, !1, function() {
        n._reactRootContainer = null, n[So] = null;
      });
    }), !0) : !1;
  }, Di.unstable_batchedUpdates = cp, Di.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!_f(o)) throw Error(d(200));
    if (n == null || n._reactInternals === void 0) throw Error(d(38));
    return Df(n, r, o, !1, s);
  }, Di.version = "18.3.1-next-f1338f8080-20240426", Di;
}
var Oi = {};
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
function t2() {
  return z1 || (z1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = Ho, u = bT(), d = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, v = !1;
    function b(e) {
      v = e;
    }
    function T(e) {
      if (!v) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        O("warn", e, a);
      }
    }
    function g(e) {
      if (!v) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        O("error", e, a);
      }
    }
    function O(e, t, a) {
      {
        var i = d.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var f = a.map(function(h) {
          return String(h);
        });
        f.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var k = 0, N = 1, I = 2, z = 3, X = 4, V = 5, ve = 6, Ke = 7, ae = 8, Ct = 9, he = 10, Oe = 11, xe = 12, le = 13, Ve = 14, Re = 15, ze = 16, Le = 17, Xe = 18, Et = 19, Rt = 21, qe = 22, ue = 23, be = 24, me = 25, pe = !0, de = !1, Ye = !1, q = !1, D = !1, H = !0, Ee = !1, ne = !0, _ = !0, Ue = !0, Fe = !0, He = /* @__PURE__ */ new Set(), at = {}, kt = {};
    function Kt(e, t) {
      Jt(e, t), Jt(e + "Capture", t);
    }
    function Jt(e, t) {
      at[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), at[e] = t;
      {
        var a = e.toLowerCase();
        kt[a] = e, e === "onDoubleClick" && (kt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        He.add(t[i]);
    }
    var Vt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Bt = Object.prototype.hasOwnProperty;
    function Q(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ce(e) {
      try {
        return Ne(e), !1;
      } catch {
        return !0;
      }
    }
    function Ne(e) {
      return "" + e;
    }
    function vt(e, t) {
      if (ce(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Q(e)), Ne(e);
    }
    function it(e) {
      if (ce(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Q(e)), Ne(e);
    }
    function ct(e, t) {
      if (ce(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Q(e)), Ne(e);
    }
    function mt(e, t) {
      if (ce(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Q(e)), Ne(e);
    }
    function Ht(e) {
      if (ce(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Q(e)), Ne(e);
    }
    function je(e) {
      if (ce(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Q(e)), Ne(e);
    }
    var nt = 0, wt = 1, Ie = 2, Pe = 3, Gt = 4, An = 5, mn = 6, we = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Je = we + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Lt = new RegExp("^[" + we + "][" + Je + "]*$"), Dt = {}, en = {};
    function Mn(e) {
      return Bt.call(en, e) ? !0 : Bt.call(Dt, e) ? !1 : Lt.test(e) ? (en[e] = !0, !0) : (Dt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Nn(e, t, a) {
      return t !== null ? t.type === nt : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Qn(e, t, a, i) {
      if (a !== null && a.type === nt)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function sn(e, t, a, i) {
      if (t === null || typeof t > "u" || Qn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Pe:
            return !t;
          case Gt:
            return t === !1;
          case An:
            return isNaN(t);
          case mn:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Er(e) {
      return yn.hasOwnProperty(e) ? yn[e] : null;
    }
    function Sn(e, t, a, i, l, f, h) {
      this.acceptsBooleans = t === Ie || t === Pe || t === Gt, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = h;
    }
    var yn = {}, aa = [
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
    aa.forEach(function(e) {
      yn[e] = new Sn(
        e,
        nt,
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
      var t = e[0], a = e[1];
      yn[t] = new Sn(
        t,
        wt,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      yn[e] = new Sn(
        e,
        Ie,
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
      yn[e] = new Sn(
        e,
        Ie,
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
      yn[e] = new Sn(
        e,
        Pe,
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
      yn[e] = new Sn(
        e,
        Pe,
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
      yn[e] = new Sn(
        e,
        Gt,
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
      yn[e] = new Sn(
        e,
        mn,
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
      yn[e] = new Sn(
        e,
        An,
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
    var wr = /[\-\:]([a-z])/g, Br = function(e) {
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
      var t = e.replace(wr, Br);
      yn[t] = new Sn(
        t,
        wt,
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
      var t = e.replace(wr, Br);
      yn[t] = new Sn(
        t,
        wt,
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
      var t = e.replace(wr, Br);
      yn[t] = new Sn(
        t,
        wt,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      yn[e] = new Sn(
        e,
        wt,
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
    var Nr = "xlinkHref";
    yn[Nr] = new Sn(
      "xlinkHref",
      wt,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      yn[e] = new Sn(
        e,
        wt,
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
    var Ai = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Tr = !1;
    function Va(e) {
      !Tr && Ai.test(e) && (Tr = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function xr(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        vt(a, t), i.sanitizeURL && Va("" + a);
        var f = i.attributeName, h = null;
        if (i.type === Gt) {
          if (e.hasAttribute(f)) {
            var y = e.getAttribute(f);
            return y === "" ? !0 : sn(t, a, i, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(f)) {
          if (sn(t, a, i, !1))
            return e.getAttribute(f);
          if (i.type === Pe)
            return a;
          h = e.getAttribute(f);
        }
        return sn(t, a, i, !1) ? h === null ? a : h : h === "" + a ? a : h;
      }
    }
    function $r(e, t, a, i) {
      {
        if (!Mn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return vt(a, t), l === "" + a ? a : l;
      }
    }
    function cr(e, t, a, i) {
      var l = Er(t);
      if (!Nn(t, l, i)) {
        if (sn(t, a, l, i) && (a = null), i || l === null) {
          if (Mn(t)) {
            var f = t;
            a === null ? e.removeAttribute(f) : (vt(a, t), e.setAttribute(f, "" + a));
          }
          return;
        }
        var h = l.mustUseProperty;
        if (h) {
          var y = l.propertyName;
          if (a === null) {
            var S = l.type;
            e[y] = S === Pe ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var x = l.attributeName, R = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(x);
        else {
          var F = l.type, j;
          F === Pe || F === Gt && a === !0 ? j = "" : (vt(a, x), j = "" + a, l.sanitizeURL && Va(j.toString())), R ? e.setAttributeNS(R, x, j) : e.setAttribute(x, j);
        }
      }
    }
    var wn = Symbol.for("react.element"), fr = Symbol.for("react.portal"), zr = Symbol.for("react.fragment"), ca = Symbol.for("react.strict_mode"), ar = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), ye = Symbol.for("react.context"), ke = Symbol.for("react.forward_ref"), ut = Symbol.for("react.suspense"), Wt = Symbol.for("react.suspense_list"), Zt = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), It = Symbol.for("react.scope"), Zn = Symbol.for("react.debug_trace_mode"), E = Symbol.for("react.offscreen"), A = Symbol.for("react.legacy_hidden"), G = Symbol.for("react.cache"), se = Symbol.for("react.tracing_marker"), Ce = Symbol.iterator, $e = "@@iterator";
    function st(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ce && e[Ce] || e[$e];
      return typeof t == "function" ? t : null;
    }
    var ot = Object.assign, on = 0, cn, tn, dr, Tn, Bn, Cn, Wr;
    function ii() {
    }
    ii.__reactDisabledLog = !0;
    function Ba() {
      {
        if (on === 0) {
          cn = console.log, tn = console.info, dr = console.warn, Tn = console.error, Bn = console.group, Cn = console.groupCollapsed, Wr = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ii,
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
        on++;
      }
    }
    function co() {
      {
        if (on--, on === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ot({}, e, {
              value: cn
            }),
            info: ot({}, e, {
              value: tn
            }),
            warn: ot({}, e, {
              value: dr
            }),
            error: ot({}, e, {
              value: Tn
            }),
            group: ot({}, e, {
              value: Bn
            }),
            groupCollapsed: ot({}, e, {
              value: Cn
            }),
            groupEnd: ot({}, e, {
              value: Wr
            })
          });
        }
        on < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Mi = d.ReactCurrentDispatcher, Wa;
    function Yr(e, t, a) {
      {
        if (Wa === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            Wa = i && i[1] || "";
          }
        return `
` + Wa + e;
      }
    }
    var pn = !1, ln;
    {
      var oi = typeof WeakMap == "function" ? WeakMap : Map;
      ln = new oi();
    }
    function wa(e, t) {
      if (!e || pn)
        return "";
      {
        var a = ln.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      pn = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = Mi.current, Mi.current = null, Ba();
      try {
        if (t) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (te) {
              i = te;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (te) {
              i = te;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            i = te;
          }
          e();
        }
      } catch (te) {
        if (te && i && typeof te.stack == "string") {
          for (var y = te.stack.split(`
`), S = i.stack.split(`
`), x = y.length - 1, R = S.length - 1; x >= 1 && R >= 0 && y[x] !== S[R]; )
            R--;
          for (; x >= 1 && R >= 0; x--, R--)
            if (y[x] !== S[R]) {
              if (x !== 1 || R !== 1)
                do
                  if (x--, R--, R < 0 || y[x] !== S[R]) {
                    var F = `
` + y[x].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && ln.set(e, F), F;
                  }
                while (x >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        pn = !1, Mi.current = f, co(), Error.prepareStackTrace = l;
      }
      var j = e ? e.displayName || e.name : "", J = j ? Yr(j) : "";
      return typeof e == "function" && ln.set(e, J), J;
    }
    function Ni(e, t, a) {
      return wa(e, !0);
    }
    function er(e, t, a) {
      return wa(e, !1);
    }
    function Ya(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Rr(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return wa(e, Ya(e));
      if (typeof e == "string")
        return Yr(e);
      switch (e) {
        case ut:
          return Yr("Suspense");
        case Wt:
          return Yr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ke:
            return er(e.render);
          case Zt:
            return Rr(e.type, t, a);
          case Tt: {
            var i = e, l = i._payload, f = i._init;
            try {
              return Rr(f(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function un(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case V:
          return Yr(e.type);
        case ze:
          return Yr("Lazy");
        case le:
          return Yr("Suspense");
        case Et:
          return Yr("SuspenseList");
        case k:
        case I:
        case Re:
          return er(e.type);
        case Oe:
          return er(e.type.render);
        case N:
          return Ni(e.type);
        default:
          return "";
      }
    }
    function $i(e) {
      try {
        var t = "", a = e;
        do
          t += un(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ta(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function fa(e) {
      return e.displayName || "Context";
    }
    function nn(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case zr:
          return "Fragment";
        case fr:
          return "Portal";
        case ar:
          return "Profiler";
        case ca:
          return "StrictMode";
        case ut:
          return "Suspense";
        case Wt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ye:
            var t = e;
            return fa(t) + ".Consumer";
          case $:
            var a = e;
            return fa(a._context) + ".Provider";
          case ke:
            return Ta(e, e.render, "ForwardRef");
          case Zt:
            var i = e.displayName || null;
            return i !== null ? i : nn(e.type) || "Memo";
          case Tt: {
            var l = e, f = l._payload, h = l._init;
            try {
              return nn(h(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function zi(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Gi(e) {
      return e.displayName || "Context";
    }
    function zt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case be:
          return "Cache";
        case Ct:
          var i = a;
          return Gi(i) + ".Consumer";
        case he:
          var l = a;
          return Gi(l._context) + ".Provider";
        case Xe:
          return "DehydratedFragment";
        case Oe:
          return zi(a, a.render, "ForwardRef");
        case Ke:
          return "Fragment";
        case V:
          return a;
        case X:
          return "Portal";
        case z:
          return "Root";
        case ve:
          return "Text";
        case ze:
          return nn(a);
        case ae:
          return a === ca ? "StrictMode" : "Mode";
        case qe:
          return "Offscreen";
        case xe:
          return "Profiler";
        case Rt:
          return "Scope";
        case le:
          return "Suspense";
        case Et:
          return "SuspenseList";
        case me:
          return "TracingMarker";
        case N:
        case k:
        case Le:
        case I:
        case Ve:
        case Re:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var li = d.ReactDebugCurrentFrame, Hn = null, kr = !1;
    function yr() {
      {
        if (Hn === null)
          return null;
        var e = Hn._debugOwner;
        if (e !== null && typeof e < "u")
          return zt(e);
      }
      return null;
    }
    function Io() {
      return Hn === null ? "" : $i(Hn);
    }
    function ir() {
      li.getCurrentStack = null, Hn = null, kr = !1;
    }
    function Dn(e) {
      li.getCurrentStack = e === null ? null : Io, Hn = e, kr = !1;
    }
    function yc() {
      return Hn;
    }
    function xa(e) {
      kr = e;
    }
    function Ur(e) {
      return "" + e;
    }
    function qi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return je(e), e;
        default:
          return "";
      }
    }
    var gc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function fo(e, t) {
      gc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Vo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function bc(e) {
      return e._valueTracker;
    }
    function ui(e) {
      e._valueTracker = null;
    }
    function Bo(e) {
      var t = "";
      return e && (Vo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function po(e) {
      var t = Vo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      je(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, f = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(y) {
            je(y), i = "" + y, f.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var h = {
          getValue: function() {
            return i;
          },
          setValue: function(y) {
            je(y), i = "" + y;
          },
          stopTracking: function() {
            ui(e), delete e[t];
          }
        };
        return h;
      }
    }
    function si(e) {
      bc(e) || (e._valueTracker = po(e));
    }
    function ou(e) {
      if (!e)
        return !1;
      var t = bc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Bo(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Wo(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Yo = !1, gl = !1, lu = !1, fs = !1;
    function Ui(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function C(e, t) {
      var a = e, i = t.checked, l = ot({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function M(e, t) {
      fo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !gl && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", yr() || "A component", t.type), gl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Yo && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", yr() || "A component", t.type), Yo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: qi(t.value != null ? t.value : i),
        controlled: Ui(t)
      };
    }
    function Z(e, t) {
      var a = e, i = t.checked;
      i != null && cr(a, "checked", i, !1);
    }
    function re(e, t) {
      var a = e;
      {
        var i = Ui(t);
        !a._wrapperState.controlled && i && !fs && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), fs = !0), a._wrapperState.controlled && !i && !lu && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), lu = !0);
      }
      Z(e, t);
      var l = qi(t.value), f = t.type;
      if (l != null)
        f === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Ur(l)) : a.value !== Ur(l) && (a.value = Ur(l));
      else if (f === "submit" || f === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? At(a, t.type, l) : t.hasOwnProperty("defaultValue") && At(a, t.type, qi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Ae(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, f = l === "submit" || l === "reset";
        if (f && (t.value === void 0 || t.value === null))
          return;
        var h = Ur(i._wrapperState.initialValue);
        a || h !== i.value && (i.value = h), i.defaultValue = h;
      }
      var y = i.name;
      y !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, y !== "" && (i.name = y);
    }
    function Nt(e, t) {
      var a = e;
      re(a, t), Ge(a, t);
    }
    function Ge(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        vt(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), f = 0; f < l.length; f++) {
          var h = l[f];
          if (!(h === e || h.form !== e.form)) {
            var y = nm(h);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ou(h), re(h, y);
          }
        }
      }
    }
    function At(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Wo(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ur(e._wrapperState.initialValue) : e.defaultValue !== Ur(a) && (e.defaultValue = Ur(a)));
    }
    var rn = !1, En = !1, jn = !1;
    function $n(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || En || (En = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (jn || (jn = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !rn && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), rn = !0);
    }
    function Pn(e, t) {
      t.value != null && e.setAttribute("value", Ur(qi(t.value)));
    }
    var In = Array.isArray;
    function hn(e) {
      return In(e);
    }
    var ho;
    ho = !1;
    function uu() {
      var e = yr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ds = ["value", "defaultValue"];
    function vd(e) {
      {
        fo("select", e);
        for (var t = 0; t < ds.length; t++) {
          var a = ds[t];
          if (e[a] != null) {
            var i = hn(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, uu()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, uu());
          }
        }
      }
    }
    function ji(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var f = a, h = {}, y = 0; y < f.length; y++)
          h["$" + f[y]] = !0;
        for (var S = 0; S < l.length; S++) {
          var x = h.hasOwnProperty("$" + l[S].value);
          l[S].selected !== x && (l[S].selected = x), x && i && (l[S].defaultSelected = !0);
        }
      } else {
        for (var R = Ur(qi(a)), F = null, j = 0; j < l.length; j++) {
          if (l[j].value === R) {
            l[j].selected = !0, i && (l[j].defaultSelected = !0);
            return;
          }
          F === null && !l[j].disabled && (F = l[j]);
        }
        F !== null && (F.selected = !0);
      }
    }
    function ps(e, t) {
      return ot({}, t, {
        value: void 0
      });
    }
    function hs(e, t) {
      var a = e;
      vd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ho && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ho = !0);
    }
    function md(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ji(a, !!t.multiple, i, !1) : t.defaultValue != null && ji(a, !!t.multiple, t.defaultValue, !0);
    }
    function Ly(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? ji(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? ji(a, !!t.multiple, t.defaultValue, !0) : ji(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ay(e, t) {
      var a = e, i = t.value;
      i != null && ji(a, !!t.multiple, i, !1);
    }
    var yd = !1;
    function gd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ot({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ur(a._wrapperState.initialValue)
      });
      return i;
    }
    function kh(e, t) {
      var a = e;
      fo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !yd && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", yr() || "A component"), yd = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, f = t.defaultValue;
        if (l != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (f != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (hn(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            f = l;
          }
        }
        f == null && (f = ""), i = f;
      }
      a._wrapperState = {
        initialValue: qi(i)
      };
    }
    function _h(e, t) {
      var a = e, i = qi(t.value), l = qi(t.defaultValue);
      if (i != null) {
        var f = Ur(i);
        f !== a.value && (a.value = f), t.defaultValue == null && a.defaultValue !== f && (a.defaultValue = f);
      }
      l != null && (a.defaultValue = Ur(l));
    }
    function Dh(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function bd(e, t) {
      _h(e, t);
    }
    var vo = "http://www.w3.org/1999/xhtml", My = "http://www.w3.org/1998/Math/MathML", Sd = "http://www.w3.org/2000/svg";
    function Sc(e) {
      switch (e) {
        case "svg":
          return Sd;
        case "math":
          return My;
        default:
          return vo;
      }
    }
    function Cd(e, t) {
      return e == null || e === vo ? Sc(t) : e === Sd && t === "foreignObject" ? vo : e;
    }
    var Ny = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Cc, Oh = Ny(function(e, t) {
      if (e.namespaceURI === Sd && !("innerHTML" in e)) {
        Cc = Cc || document.createElement("div"), Cc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Cc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Ra = 1, mo = 3, gr = 8, Pi = 9, bl = 11, Ec = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === mo) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Lh = {
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
    }, su = {
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
    function Ah(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Mh = ["Webkit", "ms", "Moz", "O"];
    Object.keys(su).forEach(function(e) {
      Mh.forEach(function(t) {
        su[Ah(t, e)] = su[e];
      });
    });
    function wc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(su.hasOwnProperty(e) && su[e]) ? t + "px" : (mt(t, e), ("" + t).trim());
    }
    var cu = /([A-Z])/g, $y = /^ms-/;
    function zy(e) {
      return e.replace(cu, "-$1").toLowerCase().replace($y, "-ms-");
    }
    var Nh = function() {
    };
    {
      var $h = /^(?:webkit|moz|o)[A-Z]/, zh = /^-ms-/, vs = /-(.)/g, fu = /;\s*$/, du = {}, pu = {}, Uh = !1, Ed = !1, wd = function(e) {
        return e.replace(vs, function(t, a) {
          return a.toUpperCase();
        });
      }, Td = function(e) {
        du.hasOwnProperty(e) && du[e] || (du[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          wd(e.replace(zh, "ms-"))
        ));
      }, jh = function(e) {
        du.hasOwnProperty(e) && du[e] || (du[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Ph = function(e, t) {
        pu.hasOwnProperty(t) && pu[t] || (pu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(fu, "")));
      }, Fh = function(e, t) {
        Uh || (Uh = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Uy = function(e, t) {
        Ed || (Ed = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Nh = function(e, t) {
        e.indexOf("-") > -1 ? Td(e) : $h.test(e) ? jh(e) : fu.test(t) && Ph(e, t), typeof t == "number" && (isNaN(t) ? Fh(e, t) : isFinite(t) || Uy(e, t));
      };
    }
    var jy = Nh;
    function Py(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var f = i.indexOf("--") === 0;
              t += a + (f ? i : zy(i)) + ":", t += wc(i, l, f), a = ";";
            }
          }
        return t || null;
      }
    }
    function Hh(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || jy(i, t[i]);
          var f = wc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, f) : a[i] = f;
        }
    }
    function Fy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ci(e) {
      var t = {};
      for (var a in e)
        for (var i = Lh[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function ms(e, t) {
      {
        if (!t)
          return;
        var a = ci(e), i = ci(t), l = {};
        for (var f in a) {
          var h = a[f], y = i[f];
          if (y && h !== y) {
            var S = h + "," + y;
            if (l[S])
              continue;
            l[S] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Fy(e[h]) ? "Removing" : "Updating", h, y);
          }
        }
      }
    }
    var Ih = {
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
    }, Vh = ot({
      menuitem: !0
    }, Ih), Bh = "__html";
    function Tc(e, t) {
      if (t) {
        if (Vh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Bh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function yo(e, t) {
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
    var xc = {
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
    }, Wh = {
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
    }, Fi = {}, xd = new RegExp("^(aria)-[" + Je + "]*$"), ys = new RegExp("^(aria)[A-Z][" + Je + "]*$");
    function Rd(e, t) {
      {
        if (Bt.call(Fi, t) && Fi[t])
          return !0;
        if (ys.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Wh.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Fi[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Fi[t] = !0, !0;
        }
        if (xd.test(t)) {
          var l = t.toLowerCase(), f = Wh.hasOwnProperty(l) ? l : null;
          if (f == null)
            return Fi[t] = !0, !1;
          if (t !== f)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, f), Fi[t] = !0, !0;
        }
      }
      return !0;
    }
    function Yh(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = Rd(e, i);
          l || a.push(i);
        }
        var f = a.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e);
      }
    }
    function Rc(e, t) {
      yo(e, t) || Yh(e, t);
    }
    var Sl = !1;
    function kd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Sl && (Sl = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var _d = function() {
    };
    {
      var jr = {}, Dd = /^on./, Gh = /^on[^A-Z]/, qh = new RegExp("^(aria)-[" + Je + "]*$"), Qh = new RegExp("^(aria)[A-Z][" + Je + "]*$");
      _d = function(e, t, a, i) {
        if (Bt.call(jr, t) && jr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), jr[t] = !0, !0;
        if (i != null) {
          var f = i.registrationNameDependencies, h = i.possibleRegistrationNames;
          if (f.hasOwnProperty(t))
            return !0;
          var y = h.hasOwnProperty(l) ? h[l] : null;
          if (y != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, y), jr[t] = !0, !0;
          if (Dd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), jr[t] = !0, !0;
        } else if (Dd.test(t))
          return Gh.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), jr[t] = !0, !0;
        if (qh.test(t) || Qh.test(t))
          return !0;
        if (l === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), jr[t] = !0, !0;
        if (l === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), jr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), jr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), jr[t] = !0, !0;
        var S = Er(t), x = S !== null && S.type === nt;
        if (xc.hasOwnProperty(l)) {
          var R = xc[l];
          if (R !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, R), jr[t] = !0, !0;
        } else if (!x && t !== l)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), jr[t] = !0, !0;
        return typeof a == "boolean" && Qn(t, a, S, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), jr[t] = !0, !0) : x ? !0 : Qn(t, a, S, !1) ? (jr[t] = !0, !1) : ((a === "false" || a === "true") && S !== null && S.type === Pe && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), jr[t] = !0), !0);
      };
    }
    var Kh = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var f = _d(e, l, t[l], a);
          f || i.push(l);
        }
        var h = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e);
      }
    };
    function Xh(e, t, a) {
      yo(e, t) || Kh(e, t, a);
    }
    var go = 1, gs = 2, Cl = 4, Hy = go | gs | Cl, bs = null;
    function Ss(e) {
      bs !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), bs = e;
    }
    function Iy() {
      bs === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), bs = null;
    }
    function Jh(e) {
      return e === bs;
    }
    function kc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === mo ? t.parentNode : t;
    }
    var Fn = null, Go = null, bo = null;
    function hu(e) {
      var t = Gu(e);
      if (t) {
        if (typeof Fn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = nm(a);
          Fn(t.stateNode, t.type, i);
        }
      }
    }
    function Zh(e) {
      Fn = e;
    }
    function _c(e) {
      Go ? bo ? bo.push(e) : bo = [e] : Go = e;
    }
    function Cs() {
      return Go !== null || bo !== null;
    }
    function Es() {
      if (Go) {
        var e = Go, t = bo;
        if (Go = null, bo = null, hu(e), t)
          for (var a = 0; a < t.length; a++)
            hu(t[a]);
      }
    }
    var El = function(e, t) {
      return e(t);
    }, Od = function() {
    }, Ld = !1;
    function Vy() {
      var e = Cs();
      e && (Od(), Es());
    }
    function Ad(e, t, a) {
      if (Ld)
        return e(t, a);
      Ld = !0;
      try {
        return El(e, t, a);
      } finally {
        Ld = !1, Vy();
      }
    }
    function Dc(e, t, a) {
      El = e, Od = a;
    }
    function Oc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Md(e, t, a) {
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
          return !!(a.disabled && Oc(t));
        default:
          return !1;
      }
    }
    function wl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = nm(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Md(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var ws = !1;
    if (Vt)
      try {
        var Tl = {};
        Object.defineProperty(Tl, "passive", {
          get: function() {
            ws = !0;
          }
        }), window.addEventListener("test", Tl, Tl), window.removeEventListener("test", Tl, Tl);
      } catch {
        ws = !1;
      }
    function ev(e, t, a, i, l, f, h, y, S) {
      var x = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, x);
      } catch (R) {
        this.onError(R);
      }
    }
    var Nd = ev;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var $d = document.createElement("react");
      Nd = function(t, a, i, l, f, h, y, S, x) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), F = !1, j = !0, J = window.event, te = Object.getOwnPropertyDescriptor(window, "event");
        function ie() {
          $d.removeEventListener(oe, Ot, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = J);
        }
        var Qe = Array.prototype.slice.call(arguments, 3);
        function Ot() {
          F = !0, ie(), a.apply(i, Qe), j = !1;
        }
        var St, bn = !1, dn = !1;
        function W(Y) {
          if (St = Y.error, bn = !0, St === null && Y.colno === 0 && Y.lineno === 0 && (dn = !0), Y.defaultPrevented && St != null && typeof St == "object")
            try {
              St._suppressLogging = !0;
            } catch {
            }
        }
        var oe = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", W), $d.addEventListener(oe, Ot, !1), R.initEvent(oe, !1, !1), $d.dispatchEvent(R), te && Object.defineProperty(window, "event", te), F && j && (bn ? dn && (St = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : St = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(St)), window.removeEventListener("error", W), !F)
          return ie(), ev.apply(this, arguments);
      };
    }
    var By = Nd, qo = !1, Hi = null, Ts = !1, Qo = null, Qi = {
      onError: function(e) {
        qo = !0, Hi = e;
      }
    };
    function xl(e, t, a, i, l, f, h, y, S) {
      qo = !1, Hi = null, By.apply(Qi, arguments);
    }
    function So(e, t, a, i, l, f, h, y, S) {
      if (xl.apply(this, arguments), qo) {
        var x = Ud();
        Ts || (Ts = !0, Qo = x);
      }
    }
    function zd() {
      if (Ts) {
        var e = Qo;
        throw Ts = !1, Qo = null, e;
      }
    }
    function Wy() {
      return qo;
    }
    function Ud() {
      if (qo) {
        var e = Hi;
        return qo = !1, Hi = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function fi(e) {
      return e._reactInternals;
    }
    function xs(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var _t = (
      /*                      */
      0
    ), Ko = (
      /*                */
      1
    ), Wn = (
      /*                    */
      2
    ), Xt = (
      /*                       */
      4
    ), _n = (
      /*                */
      16
    ), On = (
      /*                 */
      32
    ), Ki = (
      /*                     */
      64
    ), Pt = (
      /*                   */
      128
    ), or = (
      /*            */
      256
    ), ka = (
      /*                          */
      512
    ), di = (
      /*                     */
      1024
    ), Kn = (
      /*                      */
      2048
    ), pi = (
      /*                    */
      4096
    ), Xo = (
      /*                   */
      8192
    ), Rs = (
      /*             */
      16384
    ), Lc = Kn | Xt | Ki | ka | di | Rs, tv = (
      /*               */
      32767
    ), Ga = (
      /*                   */
      32768
    ), Pr = (
      /*                */
      65536
    ), ks = (
      /* */
      131072
    ), jd = (
      /*                       */
      1048576
    ), Pd = (
      /*                    */
      2097152
    ), _a = (
      /*                 */
      4194304
    ), Jo = (
      /*                */
      8388608
    ), Da = (
      /*               */
      16777216
    ), Rl = (
      /*              */
      33554432
    ), mu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Xt | di | 0
    ), Oa = Wn | Xt | _n | On | ka | pi | Xo, ia = Xt | Ki | ka | Xo, hi = Kn | _n, Gr = _a | Jo | Pd, Co = d.ReactCurrentOwner;
    function qa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Wn | pi)) !== _t && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === z ? a : null;
    }
    function Fd(e) {
      if (e.tag === le) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ac(e) {
      return e.tag === z ? e.stateNode.containerInfo : null;
    }
    function Hd(e) {
      return qa(e) === e;
    }
    function Qa(e) {
      {
        var t = Co.current;
        if (t !== null && t.tag === N) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", zt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = fi(e);
      return l ? qa(l) === l : !1;
    }
    function La(e) {
      if (qa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Yn(e) {
      var t = e.alternate;
      if (!t) {
        var a = qa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var f = i.return;
        if (f === null)
          break;
        var h = f.alternate;
        if (h === null) {
          var y = f.return;
          if (y !== null) {
            i = l = y;
            continue;
          }
          break;
        }
        if (f.child === h.child) {
          for (var S = f.child; S; ) {
            if (S === i)
              return La(f), e;
            if (S === l)
              return La(f), t;
            S = S.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = f, l = h;
        else {
          for (var x = !1, R = f.child; R; ) {
            if (R === i) {
              x = !0, i = f, l = h;
              break;
            }
            if (R === l) {
              x = !0, l = f, i = h;
              break;
            }
            R = R.sibling;
          }
          if (!x) {
            for (R = h.child; R; ) {
              if (R === i) {
                x = !0, i = h, l = f;
                break;
              }
              if (R === l) {
                x = !0, l = h, i = f;
                break;
              }
              R = R.sibling;
            }
            if (!x)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function vi(e) {
      var t = Yn(e);
      return t !== null ? Id(t) : null;
    }
    function Id(e) {
      if (e.tag === V || e.tag === ve)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Id(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function nv(e) {
      var t = Yn(e);
      return t !== null ? Mc(t) : null;
    }
    function Mc(e) {
      if (e.tag === V || e.tag === ve)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== X) {
          var a = Mc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Nc = u.unstable_scheduleCallback, rv = u.unstable_cancelCallback, $c = u.unstable_shouldYield, av = u.unstable_requestPaint, tr = u.unstable_now, Vd = u.unstable_getCurrentPriorityLevel, zc = u.unstable_ImmediatePriority, kl = u.unstable_UserBlockingPriority, Xi = u.unstable_NormalPriority, iv = u.unstable_LowPriority, Uc = u.unstable_IdlePriority, yu = u.unstable_yieldValue, ov = u.unstable_setDisableYieldValue, Eo = null, _r = null, Be = null, mi = !1, Ka = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Bd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        _ && (e = ot({}, e, {
          getLaneLabelMap: wo,
          injectProfilingHooks: lv
        })), Eo = t.inject(e), _r = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Wd(e, t) {
      if (_r && typeof _r.onScheduleFiberRoot == "function")
        try {
          _r.onScheduleFiberRoot(Eo, e, t);
        } catch (a) {
          mi || (mi = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function gu(e, t) {
      if (_r && typeof _r.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Pt) === Pt;
          if (Ue) {
            var i;
            switch (t) {
              case hr:
                i = zc;
                break;
              case xo:
                i = kl;
                break;
              case Ji:
                i = Xi;
                break;
              case Ou:
                i = Uc;
                break;
              default:
                i = Xi;
                break;
            }
            _r.onCommitFiberRoot(Eo, e, i, a);
          }
        } catch (l) {
          mi || (mi = !0, g("React instrumentation encountered an error: %s", l));
        }
    }
    function yi(e) {
      if (_r && typeof _r.onPostCommitFiberRoot == "function")
        try {
          _r.onPostCommitFiberRoot(Eo, e);
        } catch (t) {
          mi || (mi = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function _l(e) {
      if (_r && typeof _r.onCommitFiberUnmount == "function")
        try {
          _r.onCommitFiberUnmount(Eo, e);
        } catch (t) {
          mi || (mi = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function br(e) {
      if (typeof yu == "function" && (ov(e), b(e)), _r && typeof _r.setStrictMode == "function")
        try {
          _r.setStrictMode(Eo, e);
        } catch (t) {
          mi || (mi = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function lv(e) {
      Be = e;
    }
    function wo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < As; a++) {
          var i = Gy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Zo(e) {
      Be !== null && typeof Be.markCommitStarted == "function" && Be.markCommitStarted(e);
    }
    function jc() {
      Be !== null && typeof Be.markCommitStopped == "function" && Be.markCommitStopped();
    }
    function bu(e) {
      Be !== null && typeof Be.markComponentRenderStarted == "function" && Be.markComponentRenderStarted(e);
    }
    function Aa() {
      Be !== null && typeof Be.markComponentRenderStopped == "function" && Be.markComponentRenderStopped();
    }
    function el(e) {
      Be !== null && typeof Be.markComponentPassiveEffectMountStarted == "function" && Be.markComponentPassiveEffectMountStarted(e);
    }
    function Pc() {
      Be !== null && typeof Be.markComponentPassiveEffectMountStopped == "function" && Be.markComponentPassiveEffectMountStopped();
    }
    function uv(e) {
      Be !== null && typeof Be.markComponentPassiveEffectUnmountStarted == "function" && Be.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fc() {
      Be !== null && typeof Be.markComponentPassiveEffectUnmountStopped == "function" && Be.markComponentPassiveEffectUnmountStopped();
    }
    function sv(e) {
      Be !== null && typeof Be.markComponentLayoutEffectMountStarted == "function" && Be.markComponentLayoutEffectMountStarted(e);
    }
    function _s() {
      Be !== null && typeof Be.markComponentLayoutEffectMountStopped == "function" && Be.markComponentLayoutEffectMountStopped();
    }
    function Ii(e) {
      Be !== null && typeof Be.markComponentLayoutEffectUnmountStarted == "function" && Be.markComponentLayoutEffectUnmountStarted(e);
    }
    function Su() {
      Be !== null && typeof Be.markComponentLayoutEffectUnmountStopped == "function" && Be.markComponentLayoutEffectUnmountStopped();
    }
    function Ds(e, t, a) {
      Be !== null && typeof Be.markComponentErrored == "function" && Be.markComponentErrored(e, t, a);
    }
    function Dl(e, t, a) {
      Be !== null && typeof Be.markComponentSuspended == "function" && Be.markComponentSuspended(e, t, a);
    }
    function Yd(e) {
      Be !== null && typeof Be.markLayoutEffectsStarted == "function" && Be.markLayoutEffectsStarted(e);
    }
    function Cu() {
      Be !== null && typeof Be.markLayoutEffectsStopped == "function" && Be.markLayoutEffectsStopped();
    }
    function cv(e) {
      Be !== null && typeof Be.markPassiveEffectsStarted == "function" && Be.markPassiveEffectsStarted(e);
    }
    function Gd() {
      Be !== null && typeof Be.markPassiveEffectsStopped == "function" && Be.markPassiveEffectsStopped();
    }
    function Xn(e) {
      Be !== null && typeof Be.markRenderStarted == "function" && Be.markRenderStarted(e);
    }
    function Hc() {
      Be !== null && typeof Be.markRenderYielded == "function" && Be.markRenderYielded();
    }
    function Ic() {
      Be !== null && typeof Be.markRenderStopped == "function" && Be.markRenderStopped();
    }
    function qd(e) {
      Be !== null && typeof Be.markRenderScheduled == "function" && Be.markRenderScheduled(e);
    }
    function Vc(e, t) {
      Be !== null && typeof Be.markForceUpdateScheduled == "function" && Be.markForceUpdateScheduled(e, t);
    }
    function Os(e, t) {
      Be !== null && typeof Be.markStateUpdateScheduled == "function" && Be.markStateUpdateScheduled(e, t);
    }
    var yt = (
      /*                         */
      0
    ), bt = (
      /*                 */
      1
    ), Ft = (
      /*                    */
      2
    ), an = (
      /*               */
      8
    ), Xa = (
      /*              */
      16
    ), Eu = Math.clz32 ? Math.clz32 : oa, Ls = Math.log, Yy = Math.LN2;
    function oa(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ls(t) / Yy | 0) | 0;
    }
    var As = 31, ge = (
      /*                        */
      0
    ), Sr = (
      /*                          */
      0
    ), xt = (
      /*                        */
      1
    ), qr = (
      /*    */
      2
    ), Ja = (
      /*             */
      4
    ), To = (
      /*            */
      8
    ), gi = (
      /*                     */
      16
    ), wu = (
      /*                */
      32
    ), Ol = (
      /*                       */
      4194240
    ), Tu = (
      /*                        */
      64
    ), Bc = (
      /*                        */
      128
    ), Wc = (
      /*                        */
      256
    ), Yc = (
      /*                        */
      512
    ), Gc = (
      /*                        */
      1024
    ), qc = (
      /*                        */
      2048
    ), Ll = (
      /*                        */
      4096
    ), Qc = (
      /*                        */
      8192
    ), xu = (
      /*                        */
      16384
    ), Ru = (
      /*                       */
      32768
    ), Kc = (
      /*                       */
      65536
    ), Ms = (
      /*                       */
      131072
    ), Xc = (
      /*                       */
      262144
    ), Jc = (
      /*                       */
      524288
    ), Zc = (
      /*                       */
      1048576
    ), ef = (
      /*                       */
      2097152
    ), ku = (
      /*                            */
      130023424
    ), Al = (
      /*                             */
      4194304
    ), tf = (
      /*                             */
      8388608
    ), nf = (
      /*                             */
      16777216
    ), Qd = (
      /*                             */
      33554432
    ), rf = (
      /*                             */
      67108864
    ), fv = Al, Ns = (
      /*          */
      134217728
    ), Kd = (
      /*                          */
      268435455
    ), _u = (
      /*               */
      268435456
    ), tl = (
      /*                        */
      536870912
    ), la = (
      /*                   */
      1073741824
    );
    function Gy(e) {
      {
        if (e & xt)
          return "Sync";
        if (e & qr)
          return "InputContinuousHydration";
        if (e & Ja)
          return "InputContinuous";
        if (e & To)
          return "DefaultHydration";
        if (e & gi)
          return "Default";
        if (e & wu)
          return "TransitionHydration";
        if (e & Ol)
          return "Transition";
        if (e & ku)
          return "Retry";
        if (e & Ns)
          return "SelectiveHydration";
        if (e & _u)
          return "IdleHydration";
        if (e & tl)
          return "Idle";
        if (e & la)
          return "Offscreen";
      }
    }
    var Vn = -1, af = Tu, Ma = Al;
    function Ml(e) {
      switch (pr(e)) {
        case xt:
          return xt;
        case qr:
          return qr;
        case Ja:
          return Ja;
        case To:
          return To;
        case gi:
          return gi;
        case wu:
          return wu;
        case Tu:
        case Bc:
        case Wc:
        case Yc:
        case Gc:
        case qc:
        case Ll:
        case Qc:
        case xu:
        case Ru:
        case Kc:
        case Ms:
        case Xc:
        case Jc:
        case Zc:
        case ef:
          return e & Ol;
        case Al:
        case tf:
        case nf:
        case Qd:
        case rf:
          return e & ku;
        case Ns:
          return Ns;
        case _u:
          return _u;
        case tl:
          return tl;
        case la:
          return la;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Nl(e, t) {
      var a = e.pendingLanes;
      if (a === ge)
        return ge;
      var i = ge, l = e.suspendedLanes, f = e.pingedLanes, h = a & Kd;
      if (h !== ge) {
        var y = h & ~l;
        if (y !== ge)
          i = Ml(y);
        else {
          var S = h & f;
          S !== ge && (i = Ml(S));
        }
      } else {
        var x = a & ~l;
        x !== ge ? i = Ml(x) : f !== ge && (i = Ml(f));
      }
      if (i === ge)
        return ge;
      if (t !== ge && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === ge) {
        var R = pr(i), F = pr(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          R >= F || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          R === gi && (F & Ol) !== ge
        )
          return t;
      }
      (i & Ja) !== ge && (i |= a & gi);
      var j = e.entangledLanes;
      if (j !== ge)
        for (var J = e.entanglements, te = i & j; te > 0; ) {
          var ie = rl(te), Qe = 1 << ie;
          i |= J[ie], te &= ~Qe;
        }
      return i;
    }
    function dv(e, t) {
      for (var a = e.eventTimes, i = Vn; t > 0; ) {
        var l = rl(t), f = 1 << l, h = a[l];
        h > i && (i = h), t &= ~f;
      }
      return i;
    }
    function pv(e, t) {
      switch (e) {
        case xt:
        case qr:
        case Ja:
          return t + 250;
        case To:
        case gi:
        case wu:
        case Tu:
        case Bc:
        case Wc:
        case Yc:
        case Gc:
        case qc:
        case Ll:
        case Qc:
        case xu:
        case Ru:
        case Kc:
        case Ms:
        case Xc:
        case Jc:
        case Zc:
        case ef:
          return t + 5e3;
        case Al:
        case tf:
        case nf:
        case Qd:
        case rf:
          return Vn;
        case Ns:
        case _u:
        case tl:
        case la:
          return Vn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), Vn;
      }
    }
    function hv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, f = e.expirationTimes, h = a; h > 0; ) {
        var y = rl(h), S = 1 << y, x = f[y];
        x === Vn ? ((S & i) === ge || (S & l) !== ge) && (f[y] = pv(S, t)) : x <= t && (e.expiredLanes |= S), h &= ~S;
      }
    }
    function Xd(e) {
      return Ml(e.pendingLanes);
    }
    function nl(e) {
      var t = e.pendingLanes & ~la;
      return t !== ge ? t : t & la ? la : ge;
    }
    function Jd(e) {
      return (e & xt) !== ge;
    }
    function $s(e) {
      return (e & Kd) !== ge;
    }
    function vv(e) {
      return (e & ku) === e;
    }
    function mv(e) {
      var t = xt | Ja | gi;
      return (e & t) === ge;
    }
    function yv(e) {
      return (e & Ol) === e;
    }
    function zs(e, t) {
      var a = qr | Ja | To | gi;
      return (t & a) !== ge;
    }
    function gv(e, t) {
      return (t & e.expiredLanes) !== ge;
    }
    function Zd(e) {
      return (e & Ol) !== ge;
    }
    function bv() {
      var e = af;
      return af <<= 1, (af & Ol) === ge && (af = Tu), e;
    }
    function Na() {
      var e = Ma;
      return Ma <<= 1, (Ma & ku) === ge && (Ma = Al), e;
    }
    function pr(e) {
      return e & -e;
    }
    function Du(e) {
      return pr(e);
    }
    function rl(e) {
      return 31 - Eu(e);
    }
    function of(e) {
      return rl(e);
    }
    function $a(e, t) {
      return (e & t) !== ge;
    }
    function $l(e, t) {
      return (e & t) === t;
    }
    function Qt(e, t) {
      return e | t;
    }
    function Us(e, t) {
      return e & ~t;
    }
    function lf(e, t) {
      return e & t;
    }
    function qy(e) {
      return e;
    }
    function Sv(e, t) {
      return e !== Sr && e < t ? e : t;
    }
    function js(e) {
      for (var t = [], a = 0; a < As; a++)
        t.push(e);
      return t;
    }
    function zl(e, t, a) {
      e.pendingLanes |= t, t !== tl && (e.suspendedLanes = ge, e.pingedLanes = ge);
      var i = e.eventTimes, l = of(t);
      i[l] = a;
    }
    function Cv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = rl(i), f = 1 << l;
        a[l] = Vn, i &= ~f;
      }
    }
    function uf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function sf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ge, e.pingedLanes = ge, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, f = e.expirationTimes, h = a; h > 0; ) {
        var y = rl(h), S = 1 << y;
        i[y] = ge, l[y] = Vn, f[y] = Vn, h &= ~S;
      }
    }
    function ep(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var f = rl(l), h = 1 << f;
        // Is this one of the newly entangled lanes?
        h & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[f] & t && (i[f] |= t), l &= ~h;
      }
    }
    function Ev(e, t) {
      var a = pr(t), i;
      switch (a) {
        case Ja:
          i = qr;
          break;
        case gi:
          i = To;
          break;
        case Tu:
        case Bc:
        case Wc:
        case Yc:
        case Gc:
        case qc:
        case Ll:
        case Qc:
        case xu:
        case Ru:
        case Kc:
        case Ms:
        case Xc:
        case Jc:
        case Zc:
        case ef:
        case Al:
        case tf:
        case nf:
        case Qd:
        case rf:
          i = wu;
          break;
        case tl:
          i = _u;
          break;
        default:
          i = Sr;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Sr ? Sr : i;
    }
    function cf(e, t, a) {
      if (Ka)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = of(a), f = 1 << l, h = i[l];
          h.add(t), a &= ~f;
        }
    }
    function tp(e, t) {
      if (Ka)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = of(t), f = 1 << l, h = a[l];
          h.size > 0 && (h.forEach(function(y) {
            var S = y.alternate;
            (S === null || !i.has(S)) && i.add(y);
          }), h.clear()), t &= ~f;
        }
    }
    function Ps(e, t) {
      return null;
    }
    var hr = xt, xo = Ja, Ji = gi, Ou = tl, Lu = Sr;
    function bi() {
      return Lu;
    }
    function lr(e) {
      Lu = e;
    }
    function ua(e, t) {
      var a = Lu;
      try {
        return Lu = e, t();
      } finally {
        Lu = a;
      }
    }
    function Qy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ky(e, t) {
      return e > t ? e : t;
    }
    function Au(e, t) {
      return e !== 0 && e < t;
    }
    function Qr(e) {
      var t = pr(e);
      return Au(hr, t) ? Au(xo, t) ? $s(t) ? Ji : Ou : xo : hr;
    }
    function ff(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var lt;
    function Mu(e) {
      lt = e;
    }
    function np(e) {
      lt(e);
    }
    var df;
    function Xy(e) {
      df = e;
    }
    var Nu;
    function pf(e) {
      Nu = e;
    }
    var hf;
    function wv(e) {
      hf = e;
    }
    var rp;
    function Tv(e) {
      rp = e;
    }
    var Fs = !1, $u = [], Jn = null, Fr = null, da = null, zu = /* @__PURE__ */ new Map(), Uu = /* @__PURE__ */ new Map(), Hr = [], xv = [
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
    function Zi(e) {
      return xv.indexOf(e) > -1;
    }
    function Jy(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function ap(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Jn = null;
          break;
        case "dragenter":
        case "dragleave":
          Fr = null;
          break;
        case "mouseover":
        case "mouseout":
          da = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          zu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Uu.delete(i);
          break;
        }
      }
    }
    function ju(e, t, a, i, l, f) {
      if (e === null || e.nativeEvent !== f) {
        var h = Jy(t, a, i, l, f);
        if (t !== null) {
          var y = Gu(t);
          y !== null && df(y);
        }
        return h;
      }
      e.eventSystemFlags |= i;
      var S = e.targetContainers;
      return l !== null && S.indexOf(l) === -1 && S.push(l), e;
    }
    function Rv(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var f = l;
          return Jn = ju(Jn, e, t, a, i, f), !0;
        }
        case "dragenter": {
          var h = l;
          return Fr = ju(Fr, e, t, a, i, h), !0;
        }
        case "mouseover": {
          var y = l;
          return da = ju(da, e, t, a, i, y), !0;
        }
        case "pointerover": {
          var S = l, x = S.pointerId;
          return zu.set(x, ju(zu.get(x) || null, e, t, a, i, S)), !0;
        }
        case "gotpointercapture": {
          var R = l, F = R.pointerId;
          return Uu.set(F, ju(Uu.get(F) || null, e, t, a, i, R)), !0;
        }
      }
      return !1;
    }
    function ip(e) {
      var t = Js(e.target);
      if (t !== null) {
        var a = qa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === le) {
            var l = Fd(a);
            if (l !== null) {
              e.blockedOn = l, rp(e.priority, function() {
                Nu(a);
              });
              return;
            }
          } else if (i === z) {
            var f = a.stateNode;
            if (ff(f)) {
              e.blockedOn = Ac(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zy(e) {
      for (var t = hf(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Hr.length && Au(t, Hr[i].priority); i++)
        ;
      Hr.splice(i, 0, a), i === 0 && ip(a);
    }
    function Ul(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = sa(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, f = new l.constructor(l.type, l);
          Ss(f), l.target.dispatchEvent(f), Iy();
        } else {
          var h = Gu(i);
          return h !== null && df(h), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function vf(e, t, a) {
      Ul(e) && a.delete(t);
    }
    function Si() {
      Fs = !1, Jn !== null && Ul(Jn) && (Jn = null), Fr !== null && Ul(Fr) && (Fr = null), da !== null && Ul(da) && (da = null), zu.forEach(vf), Uu.forEach(vf);
    }
    function fn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Fs || (Fs = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Si)));
    }
    function ur(e) {
      if ($u.length > 0) {
        fn($u[0], e);
        for (var t = 1; t < $u.length; t++) {
          var a = $u[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Jn !== null && fn(Jn, e), Fr !== null && fn(Fr, e), da !== null && fn(da, e);
      var i = function(y) {
        return fn(y, e);
      };
      zu.forEach(i), Uu.forEach(i);
      for (var l = 0; l < Hr.length; l++) {
        var f = Hr[l];
        f.blockedOn === e && (f.blockedOn = null);
      }
      for (; Hr.length > 0; ) {
        var h = Hr[0];
        if (h.blockedOn !== null)
          break;
        ip(h), h.blockedOn === null && Hr.shift();
      }
    }
    var Gn = d.ReactCurrentBatchConfig, Dr = !0;
    function za(e) {
      Dr = !!e;
    }
    function Pu() {
      return Dr;
    }
    function Or(e, t, a) {
      var i = mf(t), l;
      switch (i) {
        case hr:
          l = Hs;
          break;
        case xo:
          l = jl;
          break;
        case Ji:
        default:
          l = Fu;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Hs(e, t, a, i) {
      var l = bi(), f = Gn.transition;
      Gn.transition = null;
      try {
        lr(hr), Fu(e, t, a, i);
      } finally {
        lr(l), Gn.transition = f;
      }
    }
    function jl(e, t, a, i) {
      var l = bi(), f = Gn.transition;
      Gn.transition = null;
      try {
        lr(xo), Fu(e, t, a, i);
      } finally {
        lr(l), Gn.transition = f;
      }
    }
    function Fu(e, t, a, i) {
      Dr && op(e, t, a, i);
    }
    function op(e, t, a, i) {
      var l = sa(e, t, a, i);
      if (l === null) {
        mg(e, t, i, al, a), ap(e, i);
        return;
      }
      if (Rv(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ap(e, i), t & Cl && Zi(e)) {
        for (; l !== null; ) {
          var f = Gu(l);
          f !== null && np(f);
          var h = sa(e, t, a, i);
          if (h === null && mg(e, t, i, al, a), h === l)
            break;
          l = h;
        }
        l !== null && i.stopPropagation();
        return;
      }
      mg(e, t, i, null, a);
    }
    var al = null;
    function sa(e, t, a, i) {
      al = null;
      var l = kc(i), f = Js(l);
      if (f !== null) {
        var h = qa(f);
        if (h === null)
          f = null;
        else {
          var y = h.tag;
          if (y === le) {
            var S = Fd(h);
            if (S !== null)
              return S;
            f = null;
          } else if (y === z) {
            var x = h.stateNode;
            if (ff(x))
              return Ac(h);
            f = null;
          } else h !== f && (f = null);
        }
      }
      return al = f, null;
    }
    function mf(e) {
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
          return hr;
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
          return xo;
        case "message": {
          var t = Vd();
          switch (t) {
            case zc:
              return hr;
            case kl:
              return xo;
            case Xi:
            case iv:
              return Ji;
            case Uc:
              return Ou;
            default:
              return Ji;
          }
        }
        default:
          return Ji;
      }
    }
    function Hu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Ro(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function yf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function lp(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ci = null, Iu = null, Ei = null;
    function gf(e) {
      return Ci = e, Iu = Vs(), !0;
    }
    function Is() {
      Ci = null, Iu = null, Ei = null;
    }
    function bf() {
      if (Ei)
        return Ei;
      var e, t = Iu, a = t.length, i, l = Vs(), f = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var h = a - e;
      for (i = 1; i <= h && t[a - i] === l[f - i]; i++)
        ;
      var y = i > 1 ? 1 - i : void 0;
      return Ei = l.slice(e, y), Ei;
    }
    function Vs() {
      return "value" in Ci ? Ci.value : Ci.textContent;
    }
    function Pl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Ir() {
      return !0;
    }
    function ko() {
      return !1;
    }
    function nr(e) {
      function t(a, i, l, f, h) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = f, this.target = h, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var S = e[y];
            S ? this[y] = S(f) : this[y] = f[y];
          }
        var x = f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1;
        return x ? this.isDefaultPrevented = Ir : this.isDefaultPrevented = ko, this.isPropagationStopped = ko, this;
      }
      return ot(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ir);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ir);
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
        isPersistent: Ir
      }), t;
    }
    var Lr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Sf = nr(Lr), Fl = ot({}, Lr, {
      view: 0,
      detail: 0
    }), up = nr(Fl), sp, eo, Vu;
    function cp(e) {
      e !== Vu && (Vu && e.type === "mousemove" ? (sp = e.screenX - Vu.screenX, eo = e.screenY - Vu.screenY) : (sp = 0, eo = 0), Vu = e);
    }
    var to = ot({}, Fl, {
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
        return "movementY" in e ? e.movementY : eo;
      }
    }), Cf = nr(to), Hl = ot({}, to, {
      dataTransfer: 0
    }), kv = nr(Hl), _v = ot({}, Fl, {
      relatedTarget: 0
    }), Bs = nr(_v), Ef = ot({}, Lr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), eg = nr(Ef), tg = ot({}, Lr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Dv = nr(tg), Ov = ot({}, Lr, {
      data: 0
    }), il = nr(Ov), ng = il, Bu = {
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
    }, Lv = {
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
    function sr(e) {
      if (e.key) {
        var t = Bu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Pl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Lv[e.keyCode] || "Unidentified" : "";
    }
    var rg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Av(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = rg[e];
      return i ? !!a[i] : !1;
    }
    function fp(e) {
      return Av;
    }
    var ag = ot({}, Fl, {
      key: sr,
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
        return e.type === "keypress" ? Pl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Pl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Mv = nr(ag), Nv = ot({}, to, {
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
    }), $v = nr(Nv), wi = ot({}, Fl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fp
    }), dp = nr(wi), ig = ot({}, Lr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ol = nr(ig), wf = ot({}, to, {
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
    }), Il = nr(wf), Tf = [9, 13, 27, 32], xf = 229, Ws = Vt && "CompositionEvent" in window, Ys = null;
    Vt && "documentMode" in document && (Ys = document.documentMode);
    var pp = Vt && "TextEvent" in window && !Ys, zv = Vt && (!Ws || Ys && Ys > 8 && Ys <= 11), hp = 32, vp = String.fromCharCode(hp);
    function Rf() {
      Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Kt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Kt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Kt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gs = !1;
    function Uv(e) {
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
      return e === "keydown" && t.keyCode === xf;
    }
    function yp(e, t) {
      switch (e) {
        case "keyup":
          return Tf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== xf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function kf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function qs(e) {
      return e.locale === "ko";
    }
    var ll = !1;
    function _f(e, t, a, i, l) {
      var f, h;
      if (Ws ? f = mp(t) : ll ? yp(t, i) && (f = "onCompositionEnd") : og(t, i) && (f = "onCompositionStart"), !f)
        return null;
      zv && !qs(i) && (!ll && f === "onCompositionStart" ? ll = gf(l) : f === "onCompositionEnd" && ll && (h = bf()));
      var y = Vv(a, f);
      if (y.length > 0) {
        var S = new il(f, t, null, i, l);
        if (e.push({
          event: S,
          listeners: y
        }), h)
          S.data = h;
        else {
          var x = kf(i);
          x !== null && (S.data = x);
        }
      }
    }
    function jv(e, t) {
      switch (e) {
        case "compositionend":
          return kf(t);
        case "keypress":
          var a = t.which;
          return a !== hp ? null : (Gs = !0, vp);
        case "textInput":
          var i = t.data;
          return i === vp && Gs ? null : i;
        default:
          return null;
      }
    }
    function lg(e, t) {
      if (ll) {
        if (e === "compositionend" || !Ws && yp(e, t)) {
          var a = bf();
          return Is(), ll = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Uv(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return zv && !qs(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Df(e, t, a, i, l) {
      var f;
      if (pp ? f = jv(t, i) : f = lg(t, i), !f)
        return null;
      var h = Vv(a, "onBeforeInput");
      if (h.length > 0) {
        var y = new ng("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: y,
          listeners: h
        }), y.data = f;
      }
    }
    function ug(e, t, a, i, l, f, h) {
      _f(e, t, a, i, l), Df(e, t, a, i, l);
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
    function Pv(e) {
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
    function Of(e) {
      if (!Vt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Kt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      _c(i);
      var l = Vv(t, "onChange");
      if (l.length > 0) {
        var f = new Sf("onChange", "change", null, a, i);
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
    function m(e) {
      var t = [];
      r(t, s, e, kc(e)), Ad(w, t);
    }
    function w(e) {
      BS(e, 0);
    }
    function L(e) {
      var t = zf(e);
      if (ou(t))
        return e;
    }
    function U(e, t) {
      if (e === "change")
        return t;
    }
    var ee = !1;
    Vt && (ee = Of("input") && (!document.documentMode || document.documentMode > 9));
    function Te(e, t) {
      o = e, s = t, o.attachEvent("onpropertychange", Se);
    }
    function _e() {
      o && (o.detachEvent("onpropertychange", Se), o = null, s = null);
    }
    function Se(e) {
      e.propertyName === "value" && L(s) && m(e);
    }
    function et(e, t, a) {
      e === "focusin" ? (_e(), Te(t, a)) : e === "focusout" && _e();
    }
    function ft(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return L(s);
    }
    function ht(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function vr(e, t) {
      if (e === "click")
        return L(t);
    }
    function B(e, t) {
      if (e === "input" || e === "change")
        return L(t);
    }
    function P(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || At(e, "number", e.value);
    }
    function K(e, t, a, i, l, f, h) {
      var y = a ? zf(a) : window, S, x;
      if (p(y) ? S = U : Pv(y) ? ee ? S = B : (S = ft, x = et) : ht(y) && (S = vr), S) {
        var R = S(t, a);
        if (R) {
          r(e, R, i, l);
          return;
        }
      }
      x && x(t, y, a), t === "focusout" && P(y);
    }
    function Me() {
      Jt("onMouseEnter", ["mouseout", "mouseover"]), Jt("onMouseLeave", ["mouseout", "mouseover"]), Jt("onPointerEnter", ["pointerout", "pointerover"]), Jt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function gt(e, t, a, i, l, f, h) {
      var y = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout";
      if (y && !Jh(i)) {
        var x = i.relatedTarget || i.fromElement;
        if (x && (Js(x) || Lp(x)))
          return;
      }
      if (!(!S && !y)) {
        var R;
        if (l.window === l)
          R = l;
        else {
          var F = l.ownerDocument;
          F ? R = F.defaultView || F.parentWindow : R = window;
        }
        var j, J;
        if (S) {
          var te = i.relatedTarget || i.toElement;
          if (j = a, J = te ? Js(te) : null, J !== null) {
            var ie = qa(J);
            (J !== ie || J.tag !== V && J.tag !== ve) && (J = null);
          }
        } else
          j = null, J = a;
        if (j !== J) {
          var Qe = Cf, Ot = "onMouseLeave", St = "onMouseEnter", bn = "mouse";
          (t === "pointerout" || t === "pointerover") && (Qe = $v, Ot = "onPointerLeave", St = "onPointerEnter", bn = "pointer");
          var dn = j == null ? R : zf(j), W = J == null ? R : zf(J), oe = new Qe(Ot, bn + "leave", j, i, l);
          oe.target = dn, oe.relatedTarget = W;
          var Y = null, De = Js(l);
          if (De === a) {
            var rt = new Qe(St, bn + "enter", J, i, l);
            rt.target = W, rt.relatedTarget = dn, Y = rt;
          }
          nx(e, oe, Y, j, J);
        }
      }
    }
    function $t(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var dt = typeof Object.is == "function" ? Object.is : $t;
    function Ut(e, t) {
      if (dt(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var f = a[l];
        if (!Bt.call(t, f) || !dt(e[f], t[f]))
          return !1;
      }
      return !0;
    }
    function Ar(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function xn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function _o(e, t) {
      for (var a = Ar(e), i = 0, l = 0; a; ) {
        if (a.nodeType === mo) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = Ar(xn(a));
      }
    }
    function sg(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, f = i.anchorOffset, h = i.focusNode, y = i.focusOffset;
      try {
        l.nodeType, h.nodeType;
      } catch {
        return null;
      }
      return zT(e, l, f, h, y);
    }
    function zT(e, t, a, i, l) {
      var f = 0, h = -1, y = -1, S = 0, x = 0, R = e, F = null;
      e: for (; ; ) {
        for (var j = null; R === t && (a === 0 || R.nodeType === mo) && (h = f + a), R === i && (l === 0 || R.nodeType === mo) && (y = f + l), R.nodeType === mo && (f += R.nodeValue.length), (j = R.firstChild) !== null; )
          F = R, R = j;
        for (; ; ) {
          if (R === e)
            break e;
          if (F === t && ++S === a && (h = f), F === i && ++x === l && (y = f), (j = R.nextSibling) !== null)
            break;
          R = F, F = R.parentNode;
        }
        R = j;
      }
      return h === -1 || y === -1 ? null : {
        start: h,
        end: y
      };
    }
    function UT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), f = e.textContent.length, h = Math.min(t.start, f), y = t.end === void 0 ? h : Math.min(t.end, f);
        if (!l.extend && h > y) {
          var S = y;
          y = h, h = S;
        }
        var x = _o(e, h), R = _o(e, y);
        if (x && R) {
          if (l.rangeCount === 1 && l.anchorNode === x.node && l.anchorOffset === x.offset && l.focusNode === R.node && l.focusOffset === R.offset)
            return;
          var F = a.createRange();
          F.setStart(x.node, x.offset), l.removeAllRanges(), h > y ? (l.addRange(F), l.extend(R.node, R.offset)) : (F.setEnd(R.node, R.offset), l.addRange(F));
        }
      }
    }
    function AS(e) {
      return e && e.nodeType === mo;
    }
    function MS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : AS(e) ? !1 : AS(t) ? MS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function jT(e) {
      return e && e.ownerDocument && MS(e.ownerDocument.documentElement, e);
    }
    function PT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function NS() {
      for (var e = window, t = Wo(); t instanceof e.HTMLIFrameElement; ) {
        if (PT(t))
          e = t.contentWindow;
        else
          return t;
        t = Wo(e.document);
      }
      return t;
    }
    function cg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function FT() {
      var e = NS();
      return {
        focusedElem: e,
        selectionRange: cg(e) ? IT(e) : null
      };
    }
    function HT(e) {
      var t = NS(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && jT(a)) {
        i !== null && cg(a) && VT(a, i);
        for (var l = [], f = a; f = f.parentNode; )
          f.nodeType === Ra && l.push({
            element: f,
            left: f.scrollLeft,
            top: f.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var h = 0; h < l.length; h++) {
          var y = l[h];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
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
    function VT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : UT(e, t);
    }
    var BT = Vt && "documentMode" in document && document.documentMode <= 11;
    function WT() {
      Kt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Lf = null, fg = null, gp = null, dg = !1;
    function YT(e) {
      if ("selectionStart" in e && cg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function GT(e) {
      return e.window === e ? e.document : e.nodeType === Pi ? e : e.ownerDocument;
    }
    function $S(e, t, a) {
      var i = GT(a);
      if (!(dg || Lf == null || Lf !== Wo(i))) {
        var l = YT(Lf);
        if (!gp || !Ut(gp, l)) {
          gp = l;
          var f = Vv(fg, "onSelect");
          if (f.length > 0) {
            var h = new Sf("onSelect", "select", null, t, a);
            e.push({
              event: h,
              listeners: f
            }), h.target = Lf;
          }
        }
      }
    }
    function qT(e, t, a, i, l, f, h) {
      var y = a ? zf(a) : window;
      switch (t) {
        case "focusin":
          (Pv(y) || y.contentEditable === "true") && (Lf = y, fg = a, gp = null);
          break;
        case "focusout":
          Lf = null, fg = null, gp = null;
          break;
        case "mousedown":
          dg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          dg = !1, $S(e, i, l);
          break;
        case "selectionchange":
          if (BT)
            break;
        case "keydown":
        case "keyup":
          $S(e, i, l);
      }
    }
    function Fv(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Af = {
      animationend: Fv("Animation", "AnimationEnd"),
      animationiteration: Fv("Animation", "AnimationIteration"),
      animationstart: Fv("Animation", "AnimationStart"),
      transitionend: Fv("Transition", "TransitionEnd")
    }, pg = {}, zS = {};
    Vt && (zS = document.createElement("div").style, "AnimationEvent" in window || (delete Af.animationend.animation, delete Af.animationiteration.animation, delete Af.animationstart.animation), "TransitionEvent" in window || delete Af.transitionend.transition);
    function Hv(e) {
      if (pg[e])
        return pg[e];
      if (!Af[e])
        return e;
      var t = Af[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in zS)
          return pg[e] = t[a];
      return e;
    }
    var US = Hv("animationend"), jS = Hv("animationiteration"), PS = Hv("animationstart"), FS = Hv("transitionend"), HS = /* @__PURE__ */ new Map(), IS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Wu(e, t) {
      HS.set(e, t), Kt(t, [e]);
    }
    function QT() {
      for (var e = 0; e < IS.length; e++) {
        var t = IS[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Wu(a, "on" + i);
      }
      Wu(US, "onAnimationEnd"), Wu(jS, "onAnimationIteration"), Wu(PS, "onAnimationStart"), Wu("dblclick", "onDoubleClick"), Wu("focusin", "onFocus"), Wu("focusout", "onBlur"), Wu(FS, "onTransitionEnd");
    }
    function KT(e, t, a, i, l, f, h) {
      var y = HS.get(t);
      if (y !== void 0) {
        var S = Sf, x = t;
        switch (t) {
          case "keypress":
            if (Pl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            S = Mv;
            break;
          case "focusin":
            x = "focus", S = Bs;
            break;
          case "focusout":
            x = "blur", S = Bs;
            break;
          case "beforeblur":
          case "afterblur":
            S = Bs;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = Cf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = kv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = dp;
            break;
          case US:
          case jS:
          case PS:
            S = eg;
            break;
          case FS:
            S = ol;
            break;
          case "scroll":
            S = up;
            break;
          case "wheel":
            S = Il;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Dv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = $v;
            break;
        }
        var R = (f & Cl) !== 0;
        {
          var F = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", j = ex(a, y, i.type, R, F);
          if (j.length > 0) {
            var J = new S(y, x, null, i, l);
            e.push({
              event: J,
              listeners: j
            });
          }
        }
      }
    }
    QT(), Me(), n(), WT(), Rf();
    function XT(e, t, a, i, l, f, h) {
      KT(e, t, a, i, l, f);
      var y = (f & Hy) === 0;
      y && (gt(e, t, a, i, l), K(e, t, a, i, l), qT(e, t, a, i, l), ug(e, t, a, i, l));
    }
    var bp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], hg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(bp));
    function VS(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, So(i, t, void 0, e), e.currentTarget = null;
    }
    function JT(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var f = t[l], h = f.instance, y = f.currentTarget, S = f.listener;
          if (h !== i && e.isPropagationStopped())
            return;
          VS(e, S, y), i = h;
        }
      else
        for (var x = 0; x < t.length; x++) {
          var R = t[x], F = R.instance, j = R.currentTarget, J = R.listener;
          if (F !== i && e.isPropagationStopped())
            return;
          VS(e, J, j), i = F;
        }
    }
    function BS(e, t) {
      for (var a = (t & Cl) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], f = l.event, h = l.listeners;
        JT(f, h, a);
      }
      zd();
    }
    function ZT(e, t, a, i, l) {
      var f = kc(a), h = [];
      XT(h, e, i, a, f, t), BS(h, t);
    }
    function rr(e, t) {
      hg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = DR(t), l = rx(e);
      i.has(l) || (WS(t, e, gs, a), i.add(l));
    }
    function vg(e, t, a) {
      hg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Cl), WS(a, e, i, t);
    }
    var Iv = "_reactListening" + Math.random().toString(36).slice(2);
    function Sp(e) {
      if (!e[Iv]) {
        e[Iv] = !0, He.forEach(function(a) {
          a !== "selectionchange" && (hg.has(a) || vg(a, !1, e), vg(a, !0, e));
        });
        var t = e.nodeType === Pi ? e : e.ownerDocument;
        t !== null && (t[Iv] || (t[Iv] = !0, vg("selectionchange", !1, t)));
      }
    }
    function WS(e, t, a, i, l) {
      var f = Or(e, t, a), h = void 0;
      ws && (t === "touchstart" || t === "touchmove" || t === "wheel") && (h = !0), e = e, i ? h !== void 0 ? yf(e, t, f, h) : Ro(e, t, f) : h !== void 0 ? lp(e, t, f, h) : Hu(e, t, f);
    }
    function YS(e, t) {
      return e === t || e.nodeType === gr && e.parentNode === t;
    }
    function mg(e, t, a, i, l) {
      var f = i;
      if (!(t & go) && !(t & gs)) {
        var h = l;
        if (i !== null) {
          var y = i;
          e: for (; ; ) {
            if (y === null)
              return;
            var S = y.tag;
            if (S === z || S === X) {
              var x = y.stateNode.containerInfo;
              if (YS(x, h))
                break;
              if (S === X)
                for (var R = y.return; R !== null; ) {
                  var F = R.tag;
                  if (F === z || F === X) {
                    var j = R.stateNode.containerInfo;
                    if (YS(j, h))
                      return;
                  }
                  R = R.return;
                }
              for (; x !== null; ) {
                var J = Js(x);
                if (J === null)
                  return;
                var te = J.tag;
                if (te === V || te === ve) {
                  y = f = J;
                  continue e;
                }
                x = x.parentNode;
              }
            }
            y = y.return;
          }
        }
      }
      Ad(function() {
        return ZT(e, t, a, f);
      });
    }
    function Cp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ex(e, t, a, i, l, f) {
      for (var h = t !== null ? t + "Capture" : null, y = i ? h : t, S = [], x = e, R = null; x !== null; ) {
        var F = x, j = F.stateNode, J = F.tag;
        if (J === V && j !== null && (R = j, y !== null)) {
          var te = wl(x, y);
          te != null && S.push(Cp(x, te, R));
        }
        if (l)
          break;
        x = x.return;
      }
      return S;
    }
    function Vv(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var f = l, h = f.stateNode, y = f.tag;
        if (y === V && h !== null) {
          var S = h, x = wl(l, a);
          x != null && i.unshift(Cp(l, x, S));
          var R = wl(l, t);
          R != null && i.push(Cp(l, R, S));
        }
        l = l.return;
      }
      return i;
    }
    function Mf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== V);
      return e || null;
    }
    function tx(e, t) {
      for (var a = e, i = t, l = 0, f = a; f; f = Mf(f))
        l++;
      for (var h = 0, y = i; y; y = Mf(y))
        h++;
      for (; l - h > 0; )
        a = Mf(a), l--;
      for (; h - l > 0; )
        i = Mf(i), h--;
      for (var S = l; S--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Mf(a), i = Mf(i);
      }
      return null;
    }
    function GS(e, t, a, i, l) {
      for (var f = t._reactName, h = [], y = a; y !== null && y !== i; ) {
        var S = y, x = S.alternate, R = S.stateNode, F = S.tag;
        if (x !== null && x === i)
          break;
        if (F === V && R !== null) {
          var j = R;
          if (l) {
            var J = wl(y, f);
            J != null && h.unshift(Cp(y, J, j));
          } else if (!l) {
            var te = wl(y, f);
            te != null && h.push(Cp(y, te, j));
          }
        }
        y = y.return;
      }
      h.length !== 0 && e.push({
        event: t,
        listeners: h
      });
    }
    function nx(e, t, a, i, l) {
      var f = i && l ? tx(i, l) : null;
      i !== null && GS(e, t, i, f, !1), l !== null && a !== null && GS(e, a, l, f, !0);
    }
    function rx(e, t) {
      return e + "__bubble";
    }
    var Ti = !1, Ep = "dangerouslySetInnerHTML", Bv = "suppressContentEditableWarning", Yu = "suppressHydrationWarning", qS = "autoFocus", Ks = "children", Xs = "style", Wv = "__html", yg, Yv, wp, QS, Gv, KS, XS;
    yg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Yv = function(e, t) {
      Rc(e, t), kd(e, t), Xh(e, t, {
        registrationNameDependencies: at,
        possibleRegistrationNames: kt
      });
    }, KS = Vt && !document.documentMode, wp = function(e, t, a) {
      if (!Ti) {
        var i = qv(a), l = qv(t);
        l !== i && (Ti = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, QS = function(e) {
      if (!Ti) {
        Ti = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Gv = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, XS = function(e, t) {
      var a = e.namespaceURI === vo ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var ax = /\r\n?/g, ix = /\u0000|\uFFFD/g;
    function qv(e) {
      Ht(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(ax, `
`).replace(ix, "");
    }
    function Qv(e, t, a, i) {
      var l = qv(t), f = qv(e);
      if (f !== l && (i && (Ti || (Ti = !0, g('Text content did not match. Server: "%s" Client: "%s"', f, l))), a && pe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function JS(e) {
      return e.nodeType === Pi ? e : e.ownerDocument;
    }
    function ox() {
    }
    function Kv(e) {
      e.onclick = ox;
    }
    function lx(e, t, a, i, l) {
      for (var f in i)
        if (i.hasOwnProperty(f)) {
          var h = i[f];
          if (f === Xs)
            h && Object.freeze(h), Hh(t, h);
          else if (f === Ep) {
            var y = h ? h[Wv] : void 0;
            y != null && Oh(t, y);
          } else if (f === Ks)
            if (typeof h == "string") {
              var S = e !== "textarea" || h !== "";
              S && Ec(t, h);
            } else typeof h == "number" && Ec(t, "" + h);
          else f === Bv || f === Yu || f === qS || (at.hasOwnProperty(f) ? h != null && (typeof h != "function" && Gv(f, h), f === "onScroll" && rr("scroll", t)) : h != null && cr(t, f, h, l));
        }
    }
    function ux(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var f = t[l], h = t[l + 1];
        f === Xs ? Hh(e, h) : f === Ep ? Oh(e, h) : f === Ks ? Ec(e, h) : cr(e, f, h, i);
      }
    }
    function sx(e, t, a, i) {
      var l, f = JS(a), h, y = i;
      if (y === vo && (y = Sc(e)), y === vo) {
        if (l = yo(e, t), !l && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var S = f.createElement("div");
          S.innerHTML = "<script><\/script>";
          var x = S.firstChild;
          h = S.removeChild(x);
        } else if (typeof t.is == "string")
          h = f.createElement(e, {
            is: t.is
          });
        else if (h = f.createElement(e), e === "select") {
          var R = h;
          t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
        }
      } else
        h = f.createElementNS(y, e);
      return y === vo && !l && Object.prototype.toString.call(h) === "[object HTMLUnknownElement]" && !Bt.call(yg, e) && (yg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), h;
    }
    function cx(e, t) {
      return JS(t).createTextNode(e);
    }
    function fx(e, t, a, i) {
      var l = yo(t, a);
      Yv(t, a);
      var f;
      switch (t) {
        case "dialog":
          rr("cancel", e), rr("close", e), f = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          rr("load", e), f = a;
          break;
        case "video":
        case "audio":
          for (var h = 0; h < bp.length; h++)
            rr(bp[h], e);
          f = a;
          break;
        case "source":
          rr("error", e), f = a;
          break;
        case "img":
        case "image":
        case "link":
          rr("error", e), rr("load", e), f = a;
          break;
        case "details":
          rr("toggle", e), f = a;
          break;
        case "input":
          M(e, a), f = C(e, a), rr("invalid", e);
          break;
        case "option":
          $n(e, a), f = a;
          break;
        case "select":
          hs(e, a), f = ps(e, a), rr("invalid", e);
          break;
        case "textarea":
          kh(e, a), f = gd(e, a), rr("invalid", e);
          break;
        default:
          f = a;
      }
      switch (Tc(t, f), lx(t, e, i, f, l), t) {
        case "input":
          si(e), Ae(e, a, !1);
          break;
        case "textarea":
          si(e), Dh(e);
          break;
        case "option":
          Pn(e, a);
          break;
        case "select":
          md(e, a);
          break;
        default:
          typeof f.onClick == "function" && Kv(e);
          break;
      }
    }
    function dx(e, t, a, i, l) {
      Yv(t, i);
      var f = null, h, y;
      switch (t) {
        case "input":
          h = C(e, a), y = C(e, i), f = [];
          break;
        case "select":
          h = ps(e, a), y = ps(e, i), f = [];
          break;
        case "textarea":
          h = gd(e, a), y = gd(e, i), f = [];
          break;
        default:
          h = a, y = i, typeof h.onClick != "function" && typeof y.onClick == "function" && Kv(e);
          break;
      }
      Tc(t, y);
      var S, x, R = null;
      for (S in h)
        if (!(y.hasOwnProperty(S) || !h.hasOwnProperty(S) || h[S] == null))
          if (S === Xs) {
            var F = h[S];
            for (x in F)
              F.hasOwnProperty(x) && (R || (R = {}), R[x] = "");
          } else S === Ep || S === Ks || S === Bv || S === Yu || S === qS || (at.hasOwnProperty(S) ? f || (f = []) : (f = f || []).push(S, null));
      for (S in y) {
        var j = y[S], J = h != null ? h[S] : void 0;
        if (!(!y.hasOwnProperty(S) || j === J || j == null && J == null))
          if (S === Xs)
            if (j && Object.freeze(j), J) {
              for (x in J)
                J.hasOwnProperty(x) && (!j || !j.hasOwnProperty(x)) && (R || (R = {}), R[x] = "");
              for (x in j)
                j.hasOwnProperty(x) && J[x] !== j[x] && (R || (R = {}), R[x] = j[x]);
            } else
              R || (f || (f = []), f.push(S, R)), R = j;
          else if (S === Ep) {
            var te = j ? j[Wv] : void 0, ie = J ? J[Wv] : void 0;
            te != null && ie !== te && (f = f || []).push(S, te);
          } else S === Ks ? (typeof j == "string" || typeof j == "number") && (f = f || []).push(S, "" + j) : S === Bv || S === Yu || (at.hasOwnProperty(S) ? (j != null && (typeof j != "function" && Gv(S, j), S === "onScroll" && rr("scroll", e)), !f && J !== j && (f = [])) : (f = f || []).push(S, j));
      }
      return R && (ms(R, y[Xs]), (f = f || []).push(Xs, R)), f;
    }
    function px(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && Z(e, l);
      var f = yo(a, i), h = yo(a, l);
      switch (ux(e, t, f, h), a) {
        case "input":
          re(e, l);
          break;
        case "textarea":
          _h(e, l);
          break;
        case "select":
          Ly(e, l);
          break;
      }
    }
    function hx(e) {
      {
        var t = e.toLowerCase();
        return xc.hasOwnProperty(t) && xc[t] || null;
      }
    }
    function vx(e, t, a, i, l, f, h) {
      var y, S;
      switch (y = yo(t, a), Yv(t, a), t) {
        case "dialog":
          rr("cancel", e), rr("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          rr("load", e);
          break;
        case "video":
        case "audio":
          for (var x = 0; x < bp.length; x++)
            rr(bp[x], e);
          break;
        case "source":
          rr("error", e);
          break;
        case "img":
        case "image":
        case "link":
          rr("error", e), rr("load", e);
          break;
        case "details":
          rr("toggle", e);
          break;
        case "input":
          M(e, a), rr("invalid", e);
          break;
        case "option":
          $n(e, a);
          break;
        case "select":
          hs(e, a), rr("invalid", e);
          break;
        case "textarea":
          kh(e, a), rr("invalid", e);
          break;
      }
      Tc(t, a);
      {
        S = /* @__PURE__ */ new Set();
        for (var R = e.attributes, F = 0; F < R.length; F++) {
          var j = R[F].name.toLowerCase();
          switch (j) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              S.add(R[F].name);
          }
        }
      }
      var J = null;
      for (var te in a)
        if (a.hasOwnProperty(te)) {
          var ie = a[te];
          if (te === Ks)
            typeof ie == "string" ? e.textContent !== ie && (a[Yu] !== !0 && Qv(e.textContent, ie, f, h), J = [Ks, ie]) : typeof ie == "number" && e.textContent !== "" + ie && (a[Yu] !== !0 && Qv(e.textContent, ie, f, h), J = [Ks, "" + ie]);
          else if (at.hasOwnProperty(te))
            ie != null && (typeof ie != "function" && Gv(te, ie), te === "onScroll" && rr("scroll", e));
          else if (h && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var Qe = void 0, Ot = y && Ee ? null : Er(te);
            if (a[Yu] !== !0) {
              if (!(te === Bv || te === Yu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              te === "value" || te === "checked" || te === "selected")) {
                if (te === Ep) {
                  var St = e.innerHTML, bn = ie ? ie[Wv] : void 0;
                  if (bn != null) {
                    var dn = XS(e, bn);
                    dn !== St && wp(te, St, dn);
                  }
                } else if (te === Xs) {
                  if (S.delete(te), KS) {
                    var W = Py(ie);
                    Qe = e.getAttribute("style"), W !== Qe && wp(te, Qe, W);
                  }
                } else if (y && !Ee)
                  S.delete(te.toLowerCase()), Qe = $r(e, te, ie), ie !== Qe && wp(te, Qe, ie);
                else if (!Nn(te, Ot, y) && !sn(te, ie, Ot, y)) {
                  var oe = !1;
                  if (Ot !== null)
                    S.delete(Ot.attributeName), Qe = xr(e, te, ie, Ot);
                  else {
                    var Y = i;
                    if (Y === vo && (Y = Sc(t)), Y === vo)
                      S.delete(te.toLowerCase());
                    else {
                      var De = hx(te);
                      De !== null && De !== te && (oe = !0, S.delete(De)), S.delete(te);
                    }
                    Qe = $r(e, te, ie);
                  }
                  var rt = Ee;
                  !rt && ie !== Qe && !oe && wp(te, Qe, ie);
                }
              }
            }
          }
        }
      switch (h && // $FlowFixMe - Should be inferred as not undefined.
      S.size > 0 && a[Yu] !== !0 && QS(S), t) {
        case "input":
          si(e), Ae(e, a, !0);
          break;
        case "textarea":
          si(e), Dh(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Kv(e);
          break;
      }
      return J;
    }
    function mx(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function gg(e, t) {
      {
        if (Ti)
          return;
        Ti = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function bg(e, t) {
      {
        if (Ti)
          return;
        Ti = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Sg(e, t, a) {
      {
        if (Ti)
          return;
        Ti = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Cg(e, t) {
      {
        if (t === "" || Ti)
          return;
        Ti = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function yx(e, t, a) {
      switch (t) {
        case "input":
          Nt(e, a);
          return;
        case "textarea":
          bd(e, a);
          return;
        case "select":
          Ay(e, a);
          return;
      }
    }
    var Tp = function() {
    }, xp = function() {
    };
    {
      var gx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], ZS = [
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
      ], bx = ZS.concat(["button"]), Sx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], eC = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      xp = function(e, t) {
        var a = ot({}, e || eC), i = {
          tag: t
        };
        return ZS.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), bx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), gx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Cx = function(e, t) {
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
            return Sx.indexOf(t) === -1;
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
      }, Ex = function(e, t) {
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
      }, tC = {};
      Tp = function(e, t, a) {
        a = a || eC;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var f = Cx(e, l) ? null : i, h = f ? null : Ex(e, a), y = f || h;
        if (y) {
          var S = y.tag, x = !!f + "|" + e + "|" + S;
          if (!tC[x]) {
            tC[x] = !0;
            var R = e, F = "";
            if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", F = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", f) {
              var j = "";
              S === "table" && e === "tr" && (j += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, S, F, j);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, S);
          }
        }
      };
    }
    var Xv = "suppressHydrationWarning", Jv = "$", Zv = "/$", Rp = "$?", kp = "$!", wx = "style", Eg = null, wg = null;
    function Tx(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Pi:
        case bl: {
          t = i === Pi ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Cd(null, "");
          break;
        }
        default: {
          var f = i === gr ? e.parentNode : e, h = f.namespaceURI || null;
          t = f.tagName, a = Cd(h, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), S = xp(null, y);
        return {
          namespace: a,
          ancestorInfo: S
        };
      }
    }
    function xx(e, t, a) {
      {
        var i = e, l = Cd(i.namespace, t), f = xp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: f
        };
      }
    }
    function jA(e) {
      return e;
    }
    function Rx(e) {
      Eg = Pu(), wg = FT();
      var t = null;
      return za(!1), t;
    }
    function kx(e) {
      HT(wg), za(Eg), Eg = null, wg = null;
    }
    function _x(e, t, a, i, l) {
      var f;
      {
        var h = i;
        if (Tp(e, null, h.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, S = xp(h.ancestorInfo, e);
          Tp(null, y, S);
        }
        f = h.namespace;
      }
      var x = sx(e, t, a, f);
      return Op(l, x), Lg(x, t), x;
    }
    function Dx(e, t) {
      e.appendChild(t);
    }
    function Ox(e, t, a, i, l) {
      switch (fx(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function Lx(e, t, a, i, l, f) {
      {
        var h = f;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, S = xp(h.ancestorInfo, t);
          Tp(null, y, S);
        }
      }
      return dx(e, t, a, i);
    }
    function Tg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Ax(e, t, a, i) {
      {
        var l = a;
        Tp(null, e, l.ancestorInfo);
      }
      var f = cx(e, t);
      return Op(i, f), f;
    }
    function Mx() {
      var e = window.event;
      return e === void 0 ? Ji : mf(e.type);
    }
    var xg = typeof setTimeout == "function" ? setTimeout : void 0, Nx = typeof clearTimeout == "function" ? clearTimeout : void 0, Rg = -1, nC = typeof Promise == "function" ? Promise : void 0, $x = typeof queueMicrotask == "function" ? queueMicrotask : typeof nC < "u" ? function(e) {
      return nC.resolve(null).then(e).catch(zx);
    } : xg;
    function zx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Ux(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function jx(e, t, a, i, l, f) {
      px(e, t, a, i, l), Lg(e, l);
    }
    function rC(e) {
      Ec(e, "");
    }
    function Px(e, t, a) {
      e.nodeValue = a;
    }
    function Fx(e, t) {
      e.appendChild(t);
    }
    function Hx(e, t) {
      var a;
      e.nodeType === gr ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Kv(a);
    }
    function Ix(e, t, a) {
      e.insertBefore(t, a);
    }
    function Vx(e, t, a) {
      e.nodeType === gr ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Bx(e, t) {
      e.removeChild(t);
    }
    function Wx(e, t) {
      e.nodeType === gr ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function kg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === gr) {
          var f = l.data;
          if (f === Zv)
            if (i === 0) {
              e.removeChild(l), ur(t);
              return;
            } else
              i--;
          else (f === Jv || f === Rp || f === kp) && i++;
        }
        a = l;
      } while (a);
      ur(t);
    }
    function Yx(e, t) {
      e.nodeType === gr ? kg(e.parentNode, t) : e.nodeType === Ra && kg(e, t), ur(e);
    }
    function Gx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function qx(e) {
      e.nodeValue = "";
    }
    function Qx(e, t) {
      e = e;
      var a = t[wx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = wc("display", i);
    }
    function Kx(e, t) {
      e.nodeValue = t;
    }
    function Xx(e) {
      e.nodeType === Ra ? e.textContent = "" : e.nodeType === Pi && e.documentElement && e.removeChild(e.documentElement);
    }
    function Jx(e, t, a) {
      return e.nodeType !== Ra || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Zx(e, t) {
      return t === "" || e.nodeType !== mo ? null : e;
    }
    function eR(e) {
      return e.nodeType !== gr ? null : e;
    }
    function aC(e) {
      return e.data === Rp;
    }
    function _g(e) {
      return e.data === kp;
    }
    function tR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function nR(e, t) {
      e._reactRetry = t;
    }
    function em(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Ra || t === mo)
          break;
        if (t === gr) {
          var a = e.data;
          if (a === Jv || a === kp || a === Rp)
            break;
          if (a === Zv)
            return null;
        }
      }
      return e;
    }
    function _p(e) {
      return em(e.nextSibling);
    }
    function rR(e) {
      return em(e.firstChild);
    }
    function aR(e) {
      return em(e.firstChild);
    }
    function iR(e) {
      return em(e.nextSibling);
    }
    function oR(e, t, a, i, l, f, h) {
      Op(f, e), Lg(e, a);
      var y;
      {
        var S = l;
        y = S.namespace;
      }
      var x = (f.mode & bt) !== yt;
      return vx(e, t, a, y, i, x, h);
    }
    function lR(e, t, a, i) {
      return Op(a, e), a.mode & bt, mx(e, t);
    }
    function uR(e, t) {
      Op(t, e);
    }
    function sR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === gr) {
          var i = t.data;
          if (i === Zv) {
            if (a === 0)
              return _p(t);
            a--;
          } else (i === Jv || i === kp || i === Rp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function iC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === gr) {
          var i = t.data;
          if (i === Jv || i === kp || i === Rp) {
            if (a === 0)
              return t;
            a--;
          } else i === Zv && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function cR(e) {
      ur(e);
    }
    function fR(e) {
      ur(e);
    }
    function dR(e) {
      return e !== "head" && e !== "body";
    }
    function pR(e, t, a, i) {
      var l = !0;
      Qv(t.nodeValue, a, i, l);
    }
    function hR(e, t, a, i, l, f) {
      if (t[Xv] !== !0) {
        var h = !0;
        Qv(i.nodeValue, l, f, h);
      }
    }
    function vR(e, t) {
      t.nodeType === Ra ? gg(e, t) : t.nodeType === gr || bg(e, t);
    }
    function mR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Ra ? gg(a, t) : t.nodeType === gr || bg(a, t));
      }
    }
    function yR(e, t, a, i, l) {
      (l || t[Xv] !== !0) && (i.nodeType === Ra ? gg(a, i) : i.nodeType === gr || bg(a, i));
    }
    function gR(e, t, a) {
      Sg(e, t);
    }
    function bR(e, t) {
      Cg(e, t);
    }
    function SR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Sg(i, t);
      }
    }
    function CR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Cg(a, t);
      }
    }
    function ER(e, t, a, i, l, f) {
      (f || t[Xv] !== !0) && Sg(a, i);
    }
    function wR(e, t, a, i, l) {
      (l || t[Xv] !== !0) && Cg(a, i);
    }
    function TR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function xR(e) {
      Sp(e);
    }
    var Nf = Math.random().toString(36).slice(2), $f = "__reactFiber$" + Nf, Dg = "__reactProps$" + Nf, Dp = "__reactContainer$" + Nf, Og = "__reactEvents$" + Nf, RR = "__reactListeners$" + Nf, kR = "__reactHandles$" + Nf;
    function _R(e) {
      delete e[$f], delete e[Dg], delete e[Og], delete e[RR], delete e[kR];
    }
    function Op(e, t) {
      t[$f] = e;
    }
    function tm(e, t) {
      t[Dp] = e;
    }
    function oC(e) {
      e[Dp] = null;
    }
    function Lp(e) {
      return !!e[Dp];
    }
    function Js(e) {
      var t = e[$f];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Dp] || a[$f], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = iC(e); l !== null; ) {
              var f = l[$f];
              if (f)
                return f;
              l = iC(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Gu(e) {
      var t = e[$f] || e[Dp];
      return t && (t.tag === V || t.tag === ve || t.tag === le || t.tag === z) ? t : null;
    }
    function zf(e) {
      if (e.tag === V || e.tag === ve)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function nm(e) {
      return e[Dg] || null;
    }
    function Lg(e, t) {
      e[Dg] = t;
    }
    function DR(e) {
      var t = e[Og];
      return t === void 0 && (t = e[Og] = /* @__PURE__ */ new Set()), t;
    }
    var lC = {}, uC = d.ReactDebugCurrentFrame;
    function rm(e) {
      if (e) {
        var t = e._owner, a = Rr(e.type, e._source, t ? t.type : null);
        uC.setExtraStackFrame(a);
      } else
        uC.setExtraStackFrame(null);
    }
    function Do(e, t, a, i, l) {
      {
        var f = Function.call.bind(Bt);
        for (var h in e)
          if (f(e, h)) {
            var y = void 0;
            try {
              if (typeof e[h] != "function") {
                var S = Error((i || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              y = e[h](t, h, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              y = x;
            }
            y && !(y instanceof Error) && (rm(l), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, h, typeof y), rm(null)), y instanceof Error && !(y.message in lC) && (lC[y.message] = !0, rm(l), g("Failed %s type: %s", a, y.message), rm(null));
          }
      }
    }
    var Ag = [], am;
    am = [];
    var Vl = -1;
    function qu(e) {
      return {
        current: e
      };
    }
    function Ua(e, t) {
      if (Vl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== am[Vl] && g("Unexpected Fiber popped."), e.current = Ag[Vl], Ag[Vl] = null, am[Vl] = null, Vl--;
    }
    function ja(e, t, a) {
      Vl++, Ag[Vl] = e.current, am[Vl] = a, e.current = t;
    }
    var Mg;
    Mg = {};
    var Vi = {};
    Object.freeze(Vi);
    var Bl = qu(Vi), ul = qu(!1), Ng = Vi;
    function Uf(e, t, a) {
      return a && sl(t) ? Ng : Bl.current;
    }
    function sC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function jf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Vi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var f = {};
        for (var h in i)
          f[h] = t[h];
        {
          var y = zt(e) || "Unknown";
          Do(i, f, "context", y);
        }
        return l && sC(e, t, f), f;
      }
    }
    function im() {
      return ul.current;
    }
    function sl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function om(e) {
      Ua(ul, e), Ua(Bl, e);
    }
    function $g(e) {
      Ua(ul, e), Ua(Bl, e);
    }
    function cC(e, t, a) {
      {
        if (Bl.current !== Vi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ja(Bl, t, e), ja(ul, a, e);
      }
    }
    function fC(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var f = zt(e) || "Unknown";
            Mg[f] || (Mg[f] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", f, f));
          }
          return a;
        }
        var h = i.getChildContext();
        for (var y in h)
          if (!(y in l))
            throw new Error((zt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var S = zt(e) || "Unknown";
          Do(l, h, "child context", S);
        }
        return ot({}, a, h);
      }
    }
    function lm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Vi;
        return Ng = Bl.current, ja(Bl, a, e), ja(ul, ul.current, e), !0;
      }
    }
    function dC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = fC(e, t, Ng);
          i.__reactInternalMemoizedMergedChildContext = l, Ua(ul, e), Ua(Bl, e), ja(Bl, l, e), ja(ul, a, e);
        } else
          Ua(ul, e), ja(ul, a, e);
      }
    }
    function OR(e) {
      {
        if (!Hd(e) || e.tag !== N)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case z:
              return t.stateNode.context;
            case N: {
              var a = t.type;
              if (sl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Qu = 0, um = 1, Wl = null, zg = !1, Ug = !1;
    function pC(e) {
      Wl === null ? Wl = [e] : Wl.push(e);
    }
    function LR(e) {
      zg = !0, pC(e);
    }
    function hC() {
      zg && Ku();
    }
    function Ku() {
      if (!Ug && Wl !== null) {
        Ug = !0;
        var e = 0, t = bi();
        try {
          var a = !0, i = Wl;
          for (lr(hr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Wl = null, zg = !1;
        } catch (f) {
          throw Wl !== null && (Wl = Wl.slice(e + 1)), Nc(zc, Ku), f;
        } finally {
          lr(t), Ug = !1;
        }
      }
      return null;
    }
    var Pf = [], Ff = 0, sm = null, cm = 0, no = [], ro = 0, Zs = null, Yl = 1, Gl = "";
    function AR(e) {
      return tc(), (e.flags & jd) !== _t;
    }
    function MR(e) {
      return tc(), cm;
    }
    function NR() {
      var e = Gl, t = Yl, a = t & ~$R(t);
      return a.toString(32) + e;
    }
    function ec(e, t) {
      tc(), Pf[Ff++] = cm, Pf[Ff++] = sm, sm = e, cm = t;
    }
    function vC(e, t, a) {
      tc(), no[ro++] = Yl, no[ro++] = Gl, no[ro++] = Zs, Zs = e;
      var i = Yl, l = Gl, f = fm(i) - 1, h = i & ~(1 << f), y = a + 1, S = fm(t) + f;
      if (S > 30) {
        var x = f - f % 5, R = (1 << x) - 1, F = (h & R).toString(32), j = h >> x, J = f - x, te = fm(t) + J, ie = y << J, Qe = ie | j, Ot = F + l;
        Yl = 1 << te | Qe, Gl = Ot;
      } else {
        var St = y << f, bn = St | h, dn = l;
        Yl = 1 << S | bn, Gl = dn;
      }
    }
    function jg(e) {
      tc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ec(e, a), vC(e, a, i);
      }
    }
    function fm(e) {
      return 32 - Eu(e);
    }
    function $R(e) {
      return 1 << fm(e) - 1;
    }
    function Pg(e) {
      for (; e === sm; )
        sm = Pf[--Ff], Pf[Ff] = null, cm = Pf[--Ff], Pf[Ff] = null;
      for (; e === Zs; )
        Zs = no[--ro], no[ro] = null, Gl = no[--ro], no[ro] = null, Yl = no[--ro], no[ro] = null;
    }
    function zR() {
      return tc(), Zs !== null ? {
        id: Yl,
        overflow: Gl
      } : null;
    }
    function UR(e, t) {
      tc(), no[ro++] = Yl, no[ro++] = Gl, no[ro++] = Zs, Yl = t.id, Gl = t.overflow, Zs = e;
    }
    function tc() {
      ha() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var pa = null, ao = null, Oo = !1, nc = !1, Xu = null;
    function jR() {
      Oo && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function mC() {
      nc = !0;
    }
    function PR() {
      return nc;
    }
    function FR(e) {
      var t = e.stateNode.containerInfo;
      return ao = aR(t), pa = e, Oo = !0, Xu = null, nc = !1, !0;
    }
    function HR(e, t, a) {
      return ao = iR(t), pa = e, Oo = !0, Xu = null, nc = !1, a !== null && UR(e, a), !0;
    }
    function yC(e, t) {
      switch (e.tag) {
        case z: {
          vR(e.stateNode.containerInfo, t);
          break;
        }
        case V: {
          var a = (e.mode & bt) !== yt;
          yR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case le: {
          var i = e.memoizedState;
          i.dehydrated !== null && mR(i.dehydrated, t);
          break;
        }
      }
    }
    function gC(e, t) {
      yC(e, t);
      var a = WD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= _n) : i.push(a);
    }
    function Fg(e, t) {
      {
        if (nc)
          return;
        switch (e.tag) {
          case z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case V:
                var i = t.type;
                t.pendingProps, gR(a, i);
                break;
              case ve:
                var l = t.pendingProps;
                bR(a, l);
                break;
            }
            break;
          }
          case V: {
            var f = e.type, h = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case V: {
                var S = t.type, x = t.pendingProps, R = (e.mode & bt) !== yt;
                ER(
                  f,
                  h,
                  y,
                  S,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
              case ve: {
                var F = t.pendingProps, j = (e.mode & bt) !== yt;
                wR(
                  f,
                  h,
                  y,
                  F,
                  // TODO: Delete this argument when we remove the legacy root API.
                  j
                );
                break;
              }
            }
            break;
          }
          case le: {
            var J = e.memoizedState, te = J.dehydrated;
            if (te !== null) switch (t.tag) {
              case V:
                var ie = t.type;
                t.pendingProps, SR(te, ie);
                break;
              case ve:
                var Qe = t.pendingProps;
                CR(te, Qe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function bC(e, t) {
      t.flags = t.flags & ~pi | Wn, Fg(e, t);
    }
    function SC(e, t) {
      switch (e.tag) {
        case V: {
          var a = e.type;
          e.pendingProps;
          var i = Jx(t, a);
          return i !== null ? (e.stateNode = i, pa = e, ao = rR(i), !0) : !1;
        }
        case ve: {
          var l = e.pendingProps, f = Zx(t, l);
          return f !== null ? (e.stateNode = f, pa = e, ao = null, !0) : !1;
        }
        case le: {
          var h = eR(t);
          if (h !== null) {
            var y = {
              dehydrated: h,
              treeContext: zR(),
              retryLane: la
            };
            e.memoizedState = y;
            var S = YD(h);
            return S.return = e, e.child = S, pa = e, ao = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Hg(e) {
      return (e.mode & bt) !== yt && (e.flags & Pt) === _t;
    }
    function Ig(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Vg(e) {
      if (Oo) {
        var t = ao;
        if (!t) {
          Hg(e) && (Fg(pa, e), Ig()), bC(pa, e), Oo = !1, pa = e;
          return;
        }
        var a = t;
        if (!SC(e, t)) {
          Hg(e) && (Fg(pa, e), Ig()), t = _p(a);
          var i = pa;
          if (!t || !SC(e, t)) {
            bC(pa, e), Oo = !1, pa = e;
            return;
          }
          gC(i, a);
        }
      }
    }
    function IR(e, t, a) {
      var i = e.stateNode, l = !nc, f = oR(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = f, f !== null;
    }
    function VR(e) {
      var t = e.stateNode, a = e.memoizedProps, i = lR(t, a, e);
      if (i) {
        var l = pa;
        if (l !== null)
          switch (l.tag) {
            case z: {
              var f = l.stateNode.containerInfo, h = (l.mode & bt) !== yt;
              pR(
                f,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                h
              );
              break;
            }
            case V: {
              var y = l.type, S = l.memoizedProps, x = l.stateNode, R = (l.mode & bt) !== yt;
              hR(
                y,
                S,
                x,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
          }
      }
      return i;
    }
    function BR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      uR(a, e);
    }
    function WR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return sR(a);
    }
    function CC(e) {
      for (var t = e.return; t !== null && t.tag !== V && t.tag !== z && t.tag !== le; )
        t = t.return;
      pa = t;
    }
    function dm(e) {
      if (e !== pa)
        return !1;
      if (!Oo)
        return CC(e), Oo = !0, !1;
      if (e.tag !== z && (e.tag !== V || dR(e.type) && !Tg(e.type, e.memoizedProps))) {
        var t = ao;
        if (t)
          if (Hg(e))
            EC(e), Ig();
          else
            for (; t; )
              gC(e, t), t = _p(t);
      }
      return CC(e), e.tag === le ? ao = WR(e) : ao = pa ? _p(e.stateNode) : null, !0;
    }
    function YR() {
      return Oo && ao !== null;
    }
    function EC(e) {
      for (var t = ao; t; )
        yC(e, t), t = _p(t);
    }
    function Hf() {
      pa = null, ao = null, Oo = !1, nc = !1;
    }
    function wC() {
      Xu !== null && (mw(Xu), Xu = null);
    }
    function ha() {
      return Oo;
    }
    function Bg(e) {
      Xu === null ? Xu = [e] : Xu.push(e);
    }
    var GR = d.ReactCurrentBatchConfig, qR = null;
    function QR() {
      return GR.transition;
    }
    var Lo = {
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
      var KR = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & an && (t = a), a = a.return;
        return t;
      }, rc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Ap = [], Mp = [], Np = [], $p = [], zp = [], Up = [], ac = /* @__PURE__ */ new Set();
      Lo.recordUnsafeLifecycleWarnings = function(e, t) {
        ac.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Ap.push(e), e.mode & an && typeof t.UNSAFE_componentWillMount == "function" && Mp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Np.push(e), e.mode & an && typeof t.UNSAFE_componentWillReceiveProps == "function" && $p.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && zp.push(e), e.mode & an && typeof t.UNSAFE_componentWillUpdate == "function" && Up.push(e));
      }, Lo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(j) {
          e.add(zt(j) || "Component"), ac.add(j.type);
        }), Ap = []);
        var t = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(j) {
          t.add(zt(j) || "Component"), ac.add(j.type);
        }), Mp = []);
        var a = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(j) {
          a.add(zt(j) || "Component"), ac.add(j.type);
        }), Np = []);
        var i = /* @__PURE__ */ new Set();
        $p.length > 0 && ($p.forEach(function(j) {
          i.add(zt(j) || "Component"), ac.add(j.type);
        }), $p = []);
        var l = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(j) {
          l.add(zt(j) || "Component"), ac.add(j.type);
        }), zp = []);
        var f = /* @__PURE__ */ new Set();
        if (Up.length > 0 && (Up.forEach(function(j) {
          f.add(zt(j) || "Component"), ac.add(j.type);
        }), Up = []), t.size > 0) {
          var h = rc(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, h);
        }
        if (i.size > 0) {
          var y = rc(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (f.size > 0) {
          var S = rc(f);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, S);
        }
        if (e.size > 0) {
          var x = rc(e);
          T(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (a.size > 0) {
          var R = rc(a);
          T(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (l.size > 0) {
          var F = rc(l);
          T(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, F);
        }
      };
      var pm = /* @__PURE__ */ new Map(), TC = /* @__PURE__ */ new Set();
      Lo.recordLegacyContextWarning = function(e, t) {
        var a = KR(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!TC.has(e.type)) {
          var i = pm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], pm.set(a, i)), i.push(e));
        }
      }, Lo.flushLegacyContextWarning = function() {
        pm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(f) {
              i.add(zt(f) || "Component"), TC.add(f.type);
            });
            var l = rc(i);
            try {
              Dn(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              ir();
            }
          }
        });
      }, Lo.discardPendingWarnings = function() {
        Ap = [], Mp = [], Np = [], $p = [], zp = [], Up = [], pm = /* @__PURE__ */ new Map();
      };
    }
    var Wg, Yg, Gg, qg, Qg, xC = function(e, t) {
    };
    Wg = !1, Yg = !1, Gg = {}, qg = {}, Qg = {}, xC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = zt(t) || "Component";
        qg[a] || (qg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function XR(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function jp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & an || ne) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== N) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !XR(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = zt(e) || "Component";
          Gg[l] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), Gg[l] = !0);
        }
        if (a._owner) {
          var f = a._owner, h;
          if (f) {
            var y = f;
            if (y.tag !== N)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            h = y.stateNode;
          }
          if (!h)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var S = h;
          ct(i, "ref");
          var x = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var R = function(F) {
            var j = S.refs;
            F === null ? delete j[x] : j[x] = F;
          };
          return R._stringRef = x, R;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function hm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function vm(e) {
      {
        var t = zt(e) || "Component";
        if (Qg[t])
          return;
        Qg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function RC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function kC(e) {
      function t(W, oe) {
        if (e) {
          var Y = W.deletions;
          Y === null ? (W.deletions = [oe], W.flags |= _n) : Y.push(oe);
        }
      }
      function a(W, oe) {
        if (!e)
          return null;
        for (var Y = oe; Y !== null; )
          t(W, Y), Y = Y.sibling;
        return null;
      }
      function i(W, oe) {
        for (var Y = /* @__PURE__ */ new Map(), De = oe; De !== null; )
          De.key !== null ? Y.set(De.key, De) : Y.set(De.index, De), De = De.sibling;
        return Y;
      }
      function l(W, oe) {
        var Y = pc(W, oe);
        return Y.index = 0, Y.sibling = null, Y;
      }
      function f(W, oe, Y) {
        if (W.index = Y, !e)
          return W.flags |= jd, oe;
        var De = W.alternate;
        if (De !== null) {
          var rt = De.index;
          return rt < oe ? (W.flags |= Wn, oe) : rt;
        } else
          return W.flags |= Wn, oe;
      }
      function h(W) {
        return e && W.alternate === null && (W.flags |= Wn), W;
      }
      function y(W, oe, Y, De) {
        if (oe === null || oe.tag !== ve) {
          var rt = B0(Y, W.mode, De);
          return rt.return = W, rt;
        } else {
          var Ze = l(oe, Y);
          return Ze.return = W, Ze;
        }
      }
      function S(W, oe, Y, De) {
        var rt = Y.type;
        if (rt === zr)
          return R(W, oe, Y.props.children, De, Y.key);
        if (oe !== null && (oe.elementType === rt || // Keep this check inline so it only runs on the false path:
        Aw(oe, Y) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof rt == "object" && rt !== null && rt.$$typeof === Tt && RC(rt) === oe.type)) {
          var Ze = l(oe, Y.props);
          return Ze.ref = jp(W, oe, Y), Ze.return = W, Ze._debugSource = Y._source, Ze._debugOwner = Y._owner, Ze;
        }
        var jt = V0(Y, W.mode, De);
        return jt.ref = jp(W, oe, Y), jt.return = W, jt;
      }
      function x(W, oe, Y, De) {
        if (oe === null || oe.tag !== X || oe.stateNode.containerInfo !== Y.containerInfo || oe.stateNode.implementation !== Y.implementation) {
          var rt = W0(Y, W.mode, De);
          return rt.return = W, rt;
        } else {
          var Ze = l(oe, Y.children || []);
          return Ze.return = W, Ze;
        }
      }
      function R(W, oe, Y, De, rt) {
        if (oe === null || oe.tag !== Ke) {
          var Ze = us(Y, W.mode, De, rt);
          return Ze.return = W, Ze;
        } else {
          var jt = l(oe, Y);
          return jt.return = W, jt;
        }
      }
      function F(W, oe, Y) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") {
          var De = B0("" + oe, W.mode, Y);
          return De.return = W, De;
        }
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case wn: {
              var rt = V0(oe, W.mode, Y);
              return rt.ref = jp(W, null, oe), rt.return = W, rt;
            }
            case fr: {
              var Ze = W0(oe, W.mode, Y);
              return Ze.return = W, Ze;
            }
            case Tt: {
              var jt = oe._payload, qt = oe._init;
              return F(W, qt(jt), Y);
            }
          }
          if (hn(oe) || st(oe)) {
            var Un = us(oe, W.mode, Y, null);
            return Un.return = W, Un;
          }
          hm(W, oe);
        }
        return typeof oe == "function" && vm(W), null;
      }
      function j(W, oe, Y, De) {
        var rt = oe !== null ? oe.key : null;
        if (typeof Y == "string" && Y !== "" || typeof Y == "number")
          return rt !== null ? null : y(W, oe, "" + Y, De);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case wn:
              return Y.key === rt ? S(W, oe, Y, De) : null;
            case fr:
              return Y.key === rt ? x(W, oe, Y, De) : null;
            case Tt: {
              var Ze = Y._payload, jt = Y._init;
              return j(W, oe, jt(Ze), De);
            }
          }
          if (hn(Y) || st(Y))
            return rt !== null ? null : R(W, oe, Y, De, null);
          hm(W, Y);
        }
        return typeof Y == "function" && vm(W), null;
      }
      function J(W, oe, Y, De, rt) {
        if (typeof De == "string" && De !== "" || typeof De == "number") {
          var Ze = W.get(Y) || null;
          return y(oe, Ze, "" + De, rt);
        }
        if (typeof De == "object" && De !== null) {
          switch (De.$$typeof) {
            case wn: {
              var jt = W.get(De.key === null ? Y : De.key) || null;
              return S(oe, jt, De, rt);
            }
            case fr: {
              var qt = W.get(De.key === null ? Y : De.key) || null;
              return x(oe, qt, De, rt);
            }
            case Tt:
              var Un = De._payload, Rn = De._init;
              return J(W, oe, Y, Rn(Un), rt);
          }
          if (hn(De) || st(De)) {
            var Mr = W.get(Y) || null;
            return R(oe, Mr, De, rt, null);
          }
          hm(oe, De);
        }
        return typeof De == "function" && vm(oe), null;
      }
      function te(W, oe, Y) {
        {
          if (typeof W != "object" || W === null)
            return oe;
          switch (W.$$typeof) {
            case wn:
            case fr:
              xC(W, Y);
              var De = W.key;
              if (typeof De != "string")
                break;
              if (oe === null) {
                oe = /* @__PURE__ */ new Set(), oe.add(De);
                break;
              }
              if (!oe.has(De)) {
                oe.add(De);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", De);
              break;
            case Tt:
              var rt = W._payload, Ze = W._init;
              te(Ze(rt), oe, Y);
              break;
          }
        }
        return oe;
      }
      function ie(W, oe, Y, De) {
        for (var rt = null, Ze = 0; Ze < Y.length; Ze++) {
          var jt = Y[Ze];
          rt = te(jt, rt, W);
        }
        for (var qt = null, Un = null, Rn = oe, Mr = 0, kn = 0, Cr = null; Rn !== null && kn < Y.length; kn++) {
          Rn.index > kn ? (Cr = Rn, Rn = null) : Cr = Rn.sibling;
          var Fa = j(W, Rn, Y[kn], De);
          if (Fa === null) {
            Rn === null && (Rn = Cr);
            break;
          }
          e && Rn && Fa.alternate === null && t(W, Rn), Mr = f(Fa, Mr, kn), Un === null ? qt = Fa : Un.sibling = Fa, Un = Fa, Rn = Cr;
        }
        if (kn === Y.length) {
          if (a(W, Rn), ha()) {
            var Ca = kn;
            ec(W, Ca);
          }
          return qt;
        }
        if (Rn === null) {
          for (; kn < Y.length; kn++) {
            var Wi = F(W, Y[kn], De);
            Wi !== null && (Mr = f(Wi, Mr, kn), Un === null ? qt = Wi : Un.sibling = Wi, Un = Wi);
          }
          if (ha()) {
            var ni = kn;
            ec(W, ni);
          }
          return qt;
        }
        for (var ri = i(W, Rn); kn < Y.length; kn++) {
          var Ha = J(ri, W, kn, Y[kn], De);
          Ha !== null && (e && Ha.alternate !== null && ri.delete(Ha.key === null ? kn : Ha.key), Mr = f(Ha, Mr, kn), Un === null ? qt = Ha : Un.sibling = Ha, Un = Ha);
        }
        if (e && ri.forEach(function(od) {
          return t(W, od);
        }), ha()) {
          var eu = kn;
          ec(W, eu);
        }
        return qt;
      }
      function Qe(W, oe, Y, De) {
        var rt = st(Y);
        if (typeof rt != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Y[Symbol.toStringTag] === "Generator" && (Yg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Yg = !0), Y.entries === rt && (Wg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Wg = !0);
          var Ze = rt.call(Y);
          if (Ze)
            for (var jt = null, qt = Ze.next(); !qt.done; qt = Ze.next()) {
              var Un = qt.value;
              jt = te(Un, jt, W);
            }
        }
        var Rn = rt.call(Y);
        if (Rn == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Mr = null, kn = null, Cr = oe, Fa = 0, Ca = 0, Wi = null, ni = Rn.next(); Cr !== null && !ni.done; Ca++, ni = Rn.next()) {
          Cr.index > Ca ? (Wi = Cr, Cr = null) : Wi = Cr.sibling;
          var ri = j(W, Cr, ni.value, De);
          if (ri === null) {
            Cr === null && (Cr = Wi);
            break;
          }
          e && Cr && ri.alternate === null && t(W, Cr), Fa = f(ri, Fa, Ca), kn === null ? Mr = ri : kn.sibling = ri, kn = ri, Cr = Wi;
        }
        if (ni.done) {
          if (a(W, Cr), ha()) {
            var Ha = Ca;
            ec(W, Ha);
          }
          return Mr;
        }
        if (Cr === null) {
          for (; !ni.done; Ca++, ni = Rn.next()) {
            var eu = F(W, ni.value, De);
            eu !== null && (Fa = f(eu, Fa, Ca), kn === null ? Mr = eu : kn.sibling = eu, kn = eu);
          }
          if (ha()) {
            var od = Ca;
            ec(W, od);
          }
          return Mr;
        }
        for (var mh = i(W, Cr); !ni.done; Ca++, ni = Rn.next()) {
          var yl = J(mh, W, Ca, ni.value, De);
          yl !== null && (e && yl.alternate !== null && mh.delete(yl.key === null ? Ca : yl.key), Fa = f(yl, Fa, Ca), kn === null ? Mr = yl : kn.sibling = yl, kn = yl);
        }
        if (e && mh.forEach(function(wO) {
          return t(W, wO);
        }), ha()) {
          var EO = Ca;
          ec(W, EO);
        }
        return Mr;
      }
      function Ot(W, oe, Y, De) {
        if (oe !== null && oe.tag === ve) {
          a(W, oe.sibling);
          var rt = l(oe, Y);
          return rt.return = W, rt;
        }
        a(W, oe);
        var Ze = B0(Y, W.mode, De);
        return Ze.return = W, Ze;
      }
      function St(W, oe, Y, De) {
        for (var rt = Y.key, Ze = oe; Ze !== null; ) {
          if (Ze.key === rt) {
            var jt = Y.type;
            if (jt === zr) {
              if (Ze.tag === Ke) {
                a(W, Ze.sibling);
                var qt = l(Ze, Y.props.children);
                return qt.return = W, qt._debugSource = Y._source, qt._debugOwner = Y._owner, qt;
              }
            } else if (Ze.elementType === jt || // Keep this check inline so it only runs on the false path:
            Aw(Ze, Y) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof jt == "object" && jt !== null && jt.$$typeof === Tt && RC(jt) === Ze.type) {
              a(W, Ze.sibling);
              var Un = l(Ze, Y.props);
              return Un.ref = jp(W, Ze, Y), Un.return = W, Un._debugSource = Y._source, Un._debugOwner = Y._owner, Un;
            }
            a(W, Ze);
            break;
          } else
            t(W, Ze);
          Ze = Ze.sibling;
        }
        if (Y.type === zr) {
          var Rn = us(Y.props.children, W.mode, De, Y.key);
          return Rn.return = W, Rn;
        } else {
          var Mr = V0(Y, W.mode, De);
          return Mr.ref = jp(W, oe, Y), Mr.return = W, Mr;
        }
      }
      function bn(W, oe, Y, De) {
        for (var rt = Y.key, Ze = oe; Ze !== null; ) {
          if (Ze.key === rt)
            if (Ze.tag === X && Ze.stateNode.containerInfo === Y.containerInfo && Ze.stateNode.implementation === Y.implementation) {
              a(W, Ze.sibling);
              var jt = l(Ze, Y.children || []);
              return jt.return = W, jt;
            } else {
              a(W, Ze);
              break;
            }
          else
            t(W, Ze);
          Ze = Ze.sibling;
        }
        var qt = W0(Y, W.mode, De);
        return qt.return = W, qt;
      }
      function dn(W, oe, Y, De) {
        var rt = typeof Y == "object" && Y !== null && Y.type === zr && Y.key === null;
        if (rt && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case wn:
              return h(St(W, oe, Y, De));
            case fr:
              return h(bn(W, oe, Y, De));
            case Tt:
              var Ze = Y._payload, jt = Y._init;
              return dn(W, oe, jt(Ze), De);
          }
          if (hn(Y))
            return ie(W, oe, Y, De);
          if (st(Y))
            return Qe(W, oe, Y, De);
          hm(W, Y);
        }
        return typeof Y == "string" && Y !== "" || typeof Y == "number" ? h(Ot(W, oe, "" + Y, De)) : (typeof Y == "function" && vm(W), a(W, oe));
      }
      return dn;
    }
    var If = kC(!0), _C = kC(!1);
    function JR(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = pc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = pc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function ZR(e, t) {
      for (var a = e.child; a !== null; )
        FD(a, t), a = a.sibling;
    }
    var Kg = qu(null), Xg;
    Xg = {};
    var mm = null, Vf = null, Jg = null, ym = !1;
    function gm() {
      mm = null, Vf = null, Jg = null, ym = !1;
    }
    function DC() {
      ym = !0;
    }
    function OC() {
      ym = !1;
    }
    function LC(e, t, a) {
      ja(Kg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Xg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Xg;
    }
    function Zg(e, t) {
      var a = Kg.current;
      Ua(Kg, t), e._currentValue = a;
    }
    function eb(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if ($l(i.childLanes, t) ? l !== null && !$l(l.childLanes, t) && (l.childLanes = Qt(l.childLanes, t)) : (i.childLanes = Qt(i.childLanes, t), l !== null && (l.childLanes = Qt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ek(e, t, a) {
      tk(e, t, a);
    }
    function tk(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, f = i.dependencies;
        if (f !== null) {
          l = i.child;
          for (var h = f.firstContext; h !== null; ) {
            if (h.context === t) {
              if (i.tag === N) {
                var y = Du(a), S = ql(Vn, y);
                S.tag = Sm;
                var x = i.updateQueue;
                if (x !== null) {
                  var R = x.shared, F = R.pending;
                  F === null ? S.next = S : (S.next = F.next, F.next = S), R.pending = S;
                }
              }
              i.lanes = Qt(i.lanes, a);
              var j = i.alternate;
              j !== null && (j.lanes = Qt(j.lanes, a)), eb(i.return, a, e), f.lanes = Qt(f.lanes, a);
              break;
            }
            h = h.next;
          }
        } else if (i.tag === he)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === Xe) {
          var J = i.return;
          if (J === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          J.lanes = Qt(J.lanes, a);
          var te = J.alternate;
          te !== null && (te.lanes = Qt(te.lanes, a)), eb(J, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var ie = l.sibling;
            if (ie !== null) {
              ie.return = l.return, l = ie;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Bf(e, t) {
      mm = e, Vf = null, Jg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && ($a(a.lanes, t) && Zp(), a.firstContext = null);
      }
    }
    function Vr(e) {
      ym && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Jg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Vf === null) {
          if (mm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Vf = a, mm.dependencies = {
            lanes: ge,
            firstContext: a
          };
        } else
          Vf = Vf.next = a;
      }
      return t;
    }
    var ic = null;
    function tb(e) {
      ic === null ? ic = [e] : ic.push(e);
    }
    function nk() {
      if (ic !== null) {
        for (var e = 0; e < ic.length; e++) {
          var t = ic[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var f = l.next;
              l.next = i, a.next = f;
            }
            t.pending = a;
          }
        }
        ic = null;
      }
    }
    function AC(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, tb(t)) : (a.next = l.next, l.next = a), t.interleaved = a, bm(e, i);
    }
    function rk(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, tb(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function ak(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, tb(t)) : (a.next = l.next, l.next = a), t.interleaved = a, bm(e, i);
    }
    function xi(e, t) {
      return bm(e, t);
    }
    var ik = bm;
    function bm(e, t) {
      e.lanes = Qt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Qt(a.lanes, t)), a === null && (e.flags & (Wn | pi)) !== _t && _w(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Qt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Qt(a.childLanes, t) : (l.flags & (Wn | pi)) !== _t && _w(e), i = l, l = l.return;
      if (i.tag === z) {
        var f = i.stateNode;
        return f;
      } else
        return null;
    }
    var MC = 0, NC = 1, Sm = 2, nb = 3, Cm = !1, rb, Em;
    rb = !1, Em = null;
    function ab(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ge
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function $C(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function ql(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: MC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ju(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (Em === l && !rb && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), rb = !0), rD()) {
        var f = l.pending;
        return f === null ? t.next = t : (t.next = f.next, f.next = t), l.pending = t, ik(e, a);
      } else
        return ak(e, l, t, a);
    }
    function wm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Zd(a)) {
          var f = l.lanes;
          f = lf(f, e.pendingLanes);
          var h = Qt(f, a);
          l.lanes = h, ep(e, h);
        }
      }
    }
    function ib(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var f = null, h = null, y = a.firstBaseUpdate;
          if (y !== null) {
            var S = y;
            do {
              var x = {
                eventTime: S.eventTime,
                lane: S.lane,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null
              };
              h === null ? f = h = x : (h.next = x, h = x), S = S.next;
            } while (S !== null);
            h === null ? f = h = t : (h.next = t, h = t);
          } else
            f = h = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: f,
            lastBaseUpdate: h,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var R = a.lastBaseUpdate;
      R === null ? a.firstBaseUpdate = t : R.next = t, a.lastBaseUpdate = t;
    }
    function ok(e, t, a, i, l, f) {
      switch (a.tag) {
        case NC: {
          var h = a.payload;
          if (typeof h == "function") {
            DC();
            var y = h.call(f, i, l);
            {
              if (e.mode & an) {
                br(!0);
                try {
                  h.call(f, i, l);
                } finally {
                  br(!1);
                }
              }
              OC();
            }
            return y;
          }
          return h;
        }
        case nb:
          e.flags = e.flags & ~Pr | Pt;
        case MC: {
          var S = a.payload, x;
          if (typeof S == "function") {
            DC(), x = S.call(f, i, l);
            {
              if (e.mode & an) {
                br(!0);
                try {
                  S.call(f, i, l);
                } finally {
                  br(!1);
                }
              }
              OC();
            }
          } else
            x = S;
          return x == null ? i : ot({}, i, x);
        }
        case Sm:
          return Cm = !0, i;
      }
      return i;
    }
    function Tm(e, t, a, i) {
      var l = e.updateQueue;
      Cm = !1, Em = l.shared;
      var f = l.firstBaseUpdate, h = l.lastBaseUpdate, y = l.shared.pending;
      if (y !== null) {
        l.shared.pending = null;
        var S = y, x = S.next;
        S.next = null, h === null ? f = x : h.next = x, h = S;
        var R = e.alternate;
        if (R !== null) {
          var F = R.updateQueue, j = F.lastBaseUpdate;
          j !== h && (j === null ? F.firstBaseUpdate = x : j.next = x, F.lastBaseUpdate = S);
        }
      }
      if (f !== null) {
        var J = l.baseState, te = ge, ie = null, Qe = null, Ot = null, St = f;
        do {
          var bn = St.lane, dn = St.eventTime;
          if ($l(i, bn)) {
            if (Ot !== null) {
              var oe = {
                eventTime: dn,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Sr,
                tag: St.tag,
                payload: St.payload,
                callback: St.callback,
                next: null
              };
              Ot = Ot.next = oe;
            }
            J = ok(e, l, St, J, t, a);
            var Y = St.callback;
            if (Y !== null && // If the update was already committed, we should not queue its
            // callback again.
            St.lane !== Sr) {
              e.flags |= Ki;
              var De = l.effects;
              De === null ? l.effects = [St] : De.push(St);
            }
          } else {
            var W = {
              eventTime: dn,
              lane: bn,
              tag: St.tag,
              payload: St.payload,
              callback: St.callback,
              next: null
            };
            Ot === null ? (Qe = Ot = W, ie = J) : Ot = Ot.next = W, te = Qt(te, bn);
          }
          if (St = St.next, St === null) {
            if (y = l.shared.pending, y === null)
              break;
            var rt = y, Ze = rt.next;
            rt.next = null, St = Ze, l.lastBaseUpdate = rt, l.shared.pending = null;
          }
        } while (!0);
        Ot === null && (ie = J), l.baseState = ie, l.firstBaseUpdate = Qe, l.lastBaseUpdate = Ot;
        var jt = l.shared.interleaved;
        if (jt !== null) {
          var qt = jt;
          do
            te = Qt(te, qt.lane), qt = qt.next;
          while (qt !== jt);
        } else f === null && (l.shared.lanes = ge);
        fh(te), e.lanes = te, e.memoizedState = J;
      }
      Em = null;
    }
    function lk(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function zC() {
      Cm = !1;
    }
    function xm() {
      return Cm;
    }
    function UC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var f = i[l], h = f.callback;
          h !== null && (f.callback = null, lk(h, a));
        }
    }
    var Pp = {}, Zu = qu(Pp), Fp = qu(Pp), Rm = qu(Pp);
    function km(e) {
      if (e === Pp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function jC() {
      var e = km(Rm.current);
      return e;
    }
    function ob(e, t) {
      ja(Rm, t, e), ja(Fp, e, e), ja(Zu, Pp, e);
      var a = Tx(t);
      Ua(Zu, e), ja(Zu, a, e);
    }
    function Wf(e) {
      Ua(Zu, e), Ua(Fp, e), Ua(Rm, e);
    }
    function lb() {
      var e = km(Zu.current);
      return e;
    }
    function PC(e) {
      km(Rm.current);
      var t = km(Zu.current), a = xx(t, e.type);
      t !== a && (ja(Fp, e, e), ja(Zu, a, e));
    }
    function ub(e) {
      Fp.current === e && (Ua(Zu, e), Ua(Fp, e));
    }
    var uk = 0, FC = 1, HC = 1, Hp = 2, Ao = qu(uk);
    function sb(e, t) {
      return (e & t) !== 0;
    }
    function Yf(e) {
      return e & FC;
    }
    function cb(e, t) {
      return e & FC | t;
    }
    function sk(e, t) {
      return e | t;
    }
    function es(e, t) {
      ja(Ao, t, e);
    }
    function Gf(e) {
      Ua(Ao, e);
    }
    function ck(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function _m(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === le) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || aC(i) || _g(i))
              return t;
          }
        } else if (t.tag === Et && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & Pt) !== _t;
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
    var Ri = (
      /*   */
      0
    ), Kr = (
      /* */
      1
    ), cl = (
      /*  */
      2
    ), Xr = (
      /*    */
      4
    ), va = (
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
    function fk(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var tt = d.ReactCurrentDispatcher, Ip = d.ReactCurrentBatchConfig, pb, qf;
    pb = /* @__PURE__ */ new Set();
    var oc = ge, zn = null, Jr = null, Zr = null, Dm = !1, Vp = !1, Bp = 0, dk = 0, pk = 25, fe = null, io = null, ts = -1, hb = !1;
    function Ln() {
      {
        var e = fe;
        io === null ? io = [e] : io.push(e);
      }
    }
    function We() {
      {
        var e = fe;
        io !== null && (ts++, io[ts] !== e && hk(e));
      }
    }
    function Qf(e) {
      e != null && !hn(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", fe, typeof e);
    }
    function hk(e) {
      {
        var t = zt(zn);
        if (!pb.has(t) && (pb.add(t), io !== null)) {
          for (var a = "", i = 30, l = 0; l <= ts; l++) {
            for (var f = io[l], h = l === ts ? e : f, y = l + 1 + ". " + f; y.length < i; )
              y += " ";
            y += h + `
`, a += y;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Pa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function vb(e, t) {
      if (hb)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", fe), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, fe, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!dt(e[a], t[a]))
          return !1;
      return !0;
    }
    function Kf(e, t, a, i, l, f) {
      oc = f, zn = t, io = e !== null ? e._debugHookTypes : null, ts = -1, hb = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ge, e !== null && e.memoizedState !== null ? tt.current = sE : io !== null ? tt.current = uE : tt.current = lE;
      var h = a(i, l);
      if (Vp) {
        var y = 0;
        do {
          if (Vp = !1, Bp = 0, y >= pk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, hb = !1, Jr = null, Zr = null, t.updateQueue = null, ts = -1, tt.current = cE, h = a(i, l);
        } while (Vp);
      }
      tt.current = Im, t._debugHookTypes = io;
      var S = Jr !== null && Jr.next !== null;
      if (oc = ge, zn = null, Jr = null, Zr = null, fe = null, io = null, ts = -1, e !== null && (e.flags & Gr) !== (t.flags & Gr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & bt) !== yt && g("Internal React error: Expected static flag was missing. Please notify the React team."), Dm = !1, S)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return h;
    }
    function Xf() {
      var e = Bp !== 0;
      return Bp = 0, e;
    }
    function IC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Xa) !== yt ? t.flags &= ~(Rl | Da | Kn | Xt) : t.flags &= ~(Kn | Xt), e.lanes = Us(e.lanes, a);
    }
    function VC() {
      if (tt.current = Im, Dm) {
        for (var e = zn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Dm = !1;
      }
      oc = ge, zn = null, Jr = null, Zr = null, io = null, ts = -1, fe = null, nE = !1, Vp = !1, Bp = 0;
    }
    function fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Zr === null ? zn.memoizedState = Zr = e : Zr = Zr.next = e, Zr;
    }
    function oo() {
      var e;
      if (Jr === null) {
        var t = zn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Jr.next;
      var a;
      if (Zr === null ? a = zn.memoizedState : a = Zr.next, a !== null)
        Zr = a, a = Zr.next, Jr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Jr = e;
        var i = {
          memoizedState: Jr.memoizedState,
          baseState: Jr.baseState,
          baseQueue: Jr.baseQueue,
          queue: Jr.queue,
          next: null
        };
        Zr === null ? zn.memoizedState = Zr = i : Zr = Zr.next = i;
      }
      return Zr;
    }
    function BC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function mb(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function yb(e, t, a) {
      var i = fl(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var f = {
        pending: null,
        interleaved: null,
        lanes: ge,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = f;
      var h = f.dispatch = gk.bind(null, zn, f);
      return [i.memoizedState, h];
    }
    function gb(e, t, a) {
      var i = oo(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var f = Jr, h = f.baseQueue, y = l.pending;
      if (y !== null) {
        if (h !== null) {
          var S = h.next, x = y.next;
          h.next = x, y.next = S;
        }
        f.baseQueue !== h && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), f.baseQueue = h = y, l.pending = null;
      }
      if (h !== null) {
        var R = h.next, F = f.baseState, j = null, J = null, te = null, ie = R;
        do {
          var Qe = ie.lane;
          if ($l(oc, Qe)) {
            if (te !== null) {
              var St = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Sr,
                action: ie.action,
                hasEagerState: ie.hasEagerState,
                eagerState: ie.eagerState,
                next: null
              };
              te = te.next = St;
            }
            if (ie.hasEagerState)
              F = ie.eagerState;
            else {
              var bn = ie.action;
              F = e(F, bn);
            }
          } else {
            var Ot = {
              lane: Qe,
              action: ie.action,
              hasEagerState: ie.hasEagerState,
              eagerState: ie.eagerState,
              next: null
            };
            te === null ? (J = te = Ot, j = F) : te = te.next = Ot, zn.lanes = Qt(zn.lanes, Qe), fh(Qe);
          }
          ie = ie.next;
        } while (ie !== null && ie !== R);
        te === null ? j = F : te.next = J, dt(F, i.memoizedState) || Zp(), i.memoizedState = F, i.baseState = j, i.baseQueue = te, l.lastRenderedState = F;
      }
      var dn = l.interleaved;
      if (dn !== null) {
        var W = dn;
        do {
          var oe = W.lane;
          zn.lanes = Qt(zn.lanes, oe), fh(oe), W = W.next;
        } while (W !== dn);
      } else h === null && (l.lanes = ge);
      var Y = l.dispatch;
      return [i.memoizedState, Y];
    }
    function bb(e, t, a) {
      var i = oo(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var f = l.dispatch, h = l.pending, y = i.memoizedState;
      if (h !== null) {
        l.pending = null;
        var S = h.next, x = S;
        do {
          var R = x.action;
          y = e(y, R), x = x.next;
        } while (x !== S);
        dt(y, i.memoizedState) || Zp(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), l.lastRenderedState = y;
      }
      return [y, f];
    }
    function PA(e, t, a) {
    }
    function FA(e, t, a) {
    }
    function Sb(e, t, a) {
      var i = zn, l = fl(), f, h = ha();
      if (h) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        f = a(), qf || f !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), qf = !0);
      } else {
        if (f = t(), !qf) {
          var y = t();
          dt(f, y) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), qf = !0);
        }
        var S = ly();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        zs(S, oc) || WC(i, t, f);
      }
      l.memoizedState = f;
      var x = {
        value: f,
        getSnapshot: t
      };
      return l.queue = x, Nm(GC.bind(null, i, x, e), [e]), i.flags |= Kn, Wp(Kr | va, YC.bind(null, i, x, f, t), void 0, null), f;
    }
    function Om(e, t, a) {
      var i = zn, l = oo(), f = t();
      if (!qf) {
        var h = t();
        dt(f, h) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), qf = !0);
      }
      var y = l.memoizedState, S = !dt(y, f);
      S && (l.memoizedState = f, Zp());
      var x = l.queue;
      if (Gp(GC.bind(null, i, x, e), [e]), x.getSnapshot !== t || S || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Zr !== null && Zr.memoizedState.tag & Kr) {
        i.flags |= Kn, Wp(Kr | va, YC.bind(null, i, x, f, t), void 0, null);
        var R = ly();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        zs(R, oc) || WC(i, t, f);
      }
      return f;
    }
    function WC(e, t, a) {
      e.flags |= Rs;
      var i = {
        getSnapshot: t,
        value: a
      }, l = zn.updateQueue;
      if (l === null)
        l = BC(), zn.updateQueue = l, l.stores = [i];
      else {
        var f = l.stores;
        f === null ? l.stores = [i] : f.push(i);
      }
    }
    function YC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, qC(t) && QC(e);
    }
    function GC(e, t, a) {
      var i = function() {
        qC(t) && QC(e);
      };
      return a(i);
    }
    function qC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !dt(a, i);
      } catch {
        return !0;
      }
    }
    function QC(e) {
      var t = xi(e, xt);
      t !== null && ra(t, e, xt, Vn);
    }
    function Lm(e) {
      var t = fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ge,
        dispatch: null,
        lastRenderedReducer: mb,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = bk.bind(null, zn, a);
      return [t.memoizedState, i];
    }
    function Cb(e) {
      return gb(mb);
    }
    function Eb(e) {
      return bb(mb);
    }
    function Wp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, f = zn.updateQueue;
      if (f === null)
        f = BC(), zn.updateQueue = f, f.lastEffect = l.next = l;
      else {
        var h = f.lastEffect;
        if (h === null)
          f.lastEffect = l.next = l;
        else {
          var y = h.next;
          h.next = l, l.next = y, f.lastEffect = l;
        }
      }
      return l;
    }
    function wb(e) {
      var t = fl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Am(e) {
      var t = oo();
      return t.memoizedState;
    }
    function Yp(e, t, a, i) {
      var l = fl(), f = i === void 0 ? null : i;
      zn.flags |= e, l.memoizedState = Wp(Kr | t, a, void 0, f);
    }
    function Mm(e, t, a, i) {
      var l = oo(), f = i === void 0 ? null : i, h = void 0;
      if (Jr !== null) {
        var y = Jr.memoizedState;
        if (h = y.destroy, f !== null) {
          var S = y.deps;
          if (vb(f, S)) {
            l.memoizedState = Wp(t, a, h, f);
            return;
          }
        }
      }
      zn.flags |= e, l.memoizedState = Wp(Kr | t, a, h, f);
    }
    function Nm(e, t) {
      return (zn.mode & Xa) !== yt ? Yp(Rl | Kn | Jo, va, e, t) : Yp(Kn | Jo, va, e, t);
    }
    function Gp(e, t) {
      return Mm(Kn, va, e, t);
    }
    function Tb(e, t) {
      return Yp(Xt, cl, e, t);
    }
    function $m(e, t) {
      return Mm(Xt, cl, e, t);
    }
    function xb(e, t) {
      var a = Xt;
      return a |= _a, (zn.mode & Xa) !== yt && (a |= Da), Yp(a, Xr, e, t);
    }
    function zm(e, t) {
      return Mm(Xt, Xr, e, t);
    }
    function KC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
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
    function Rb(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = Xt;
      return l |= _a, (zn.mode & Xa) !== yt && (l |= Da), Yp(l, Xr, KC.bind(null, t, e), i);
    }
    function Um(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Mm(Xt, Xr, KC.bind(null, t, e), i);
    }
    function vk(e, t) {
    }
    var jm = vk;
    function kb(e, t) {
      var a = fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Pm(e, t) {
      var a = oo(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var f = l[1];
        if (vb(i, f))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function _b(e, t) {
      var a = fl(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Fm(e, t) {
      var a = oo(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var f = l[1];
        if (vb(i, f))
          return l[0];
      }
      var h = e();
      return a.memoizedState = [h, i], h;
    }
    function Db(e) {
      var t = fl();
      return t.memoizedState = e, e;
    }
    function XC(e) {
      var t = oo(), a = Jr, i = a.memoizedState;
      return ZC(t, i, e);
    }
    function JC(e) {
      var t = oo();
      if (Jr === null)
        return t.memoizedState = e, e;
      var a = Jr.memoizedState;
      return ZC(t, a, e);
    }
    function ZC(e, t, a) {
      var i = !mv(oc);
      if (i) {
        if (!dt(a, t)) {
          var l = bv();
          zn.lanes = Qt(zn.lanes, l), fh(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Zp()), e.memoizedState = a, a;
    }
    function mk(e, t, a) {
      var i = bi();
      lr(Qy(i, xo)), e(!0);
      var l = Ip.transition;
      Ip.transition = {};
      var f = Ip.transition;
      Ip.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (lr(i), Ip.transition = l, l === null && f._updatedFibers) {
          var h = f._updatedFibers.size;
          h > 10 && T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), f._updatedFibers.clear();
        }
      }
    }
    function Ob() {
      var e = Lm(!1), t = e[0], a = e[1], i = mk.bind(null, a), l = fl();
      return l.memoizedState = i, [t, i];
    }
    function eE() {
      var e = Cb(), t = e[0], a = oo(), i = a.memoizedState;
      return [t, i];
    }
    function tE() {
      var e = Eb(), t = e[0], a = oo(), i = a.memoizedState;
      return [t, i];
    }
    var nE = !1;
    function yk() {
      return nE;
    }
    function Lb() {
      var e = fl(), t = ly(), a = t.identifierPrefix, i;
      if (ha()) {
        var l = NR();
        i = ":" + a + "R" + l;
        var f = Bp++;
        f > 0 && (i += "H" + f.toString(32)), i += ":";
      } else {
        var h = dk++;
        i = ":" + a + "r" + h.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Hm() {
      var e = oo(), t = e.memoizedState;
      return t;
    }
    function gk(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = os(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (rE(e))
        aE(t, l);
      else {
        var f = AC(e, t, l, i);
        if (f !== null) {
          var h = ti();
          ra(f, e, i, h), iE(f, t, i);
        }
      }
      oE(e, i);
    }
    function bk(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = os(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (rE(e))
        aE(t, l);
      else {
        var f = e.alternate;
        if (e.lanes === ge && (f === null || f.lanes === ge)) {
          var h = t.lastRenderedReducer;
          if (h !== null) {
            var y;
            y = tt.current, tt.current = Mo;
            try {
              var S = t.lastRenderedState, x = h(S, a);
              if (l.hasEagerState = !0, l.eagerState = x, dt(x, S)) {
                rk(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              tt.current = y;
            }
          }
        }
        var R = AC(e, t, l, i);
        if (R !== null) {
          var F = ti();
          ra(R, e, i, F), iE(R, t, i);
        }
      }
      oE(e, i);
    }
    function rE(e) {
      var t = e.alternate;
      return e === zn || t !== null && t === zn;
    }
    function aE(e, t) {
      Vp = Dm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function iE(e, t, a) {
      if (Zd(a)) {
        var i = t.lanes;
        i = lf(i, e.pendingLanes);
        var l = Qt(i, a);
        t.lanes = l, ep(e, l);
      }
    }
    function oE(e, t, a) {
      Os(e, t);
    }
    var Im = {
      readContext: Vr,
      useCallback: Pa,
      useContext: Pa,
      useEffect: Pa,
      useImperativeHandle: Pa,
      useInsertionEffect: Pa,
      useLayoutEffect: Pa,
      useMemo: Pa,
      useReducer: Pa,
      useRef: Pa,
      useState: Pa,
      useDebugValue: Pa,
      useDeferredValue: Pa,
      useTransition: Pa,
      useMutableSource: Pa,
      useSyncExternalStore: Pa,
      useId: Pa,
      unstable_isNewReconciler: de
    }, lE = null, uE = null, sE = null, cE = null, dl = null, Mo = null, Vm = null;
    {
      var Ab = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Yt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      lE = {
        readContext: function(e) {
          return Vr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Ln(), Qf(t), kb(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Ln(), Vr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Ln(), Qf(t), Nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", Ln(), Qf(a), Rb(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Ln(), Qf(t), Tb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Ln(), Qf(t), xb(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Ln(), Qf(t);
          var a = tt.current;
          tt.current = dl;
          try {
            return _b(e, t);
          } finally {
            tt.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", Ln();
          var i = tt.current;
          tt.current = dl;
          try {
            return yb(e, t, a);
          } finally {
            tt.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Ln(), wb(e);
        },
        useState: function(e) {
          fe = "useState", Ln();
          var t = tt.current;
          tt.current = dl;
          try {
            return Lm(e);
          } finally {
            tt.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Ln(), void 0;
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Ln(), Db(e);
        },
        useTransition: function() {
          return fe = "useTransition", Ln(), Ob();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", Ln(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", Ln(), Sb(e, t, a);
        },
        useId: function() {
          return fe = "useId", Ln(), Lb();
        },
        unstable_isNewReconciler: de
      }, uE = {
        readContext: function(e) {
          return Vr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", We(), kb(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", We(), Vr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", We(), Nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", We(), Rb(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", We(), Tb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", We(), xb(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", We();
          var a = tt.current;
          tt.current = dl;
          try {
            return _b(e, t);
          } finally {
            tt.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", We();
          var i = tt.current;
          tt.current = dl;
          try {
            return yb(e, t, a);
          } finally {
            tt.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", We(), wb(e);
        },
        useState: function(e) {
          fe = "useState", We();
          var t = tt.current;
          tt.current = dl;
          try {
            return Lm(e);
          } finally {
            tt.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", We(), void 0;
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", We(), Db(e);
        },
        useTransition: function() {
          return fe = "useTransition", We(), Ob();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", We(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", We(), Sb(e, t, a);
        },
        useId: function() {
          return fe = "useId", We(), Lb();
        },
        unstable_isNewReconciler: de
      }, sE = {
        readContext: function(e) {
          return Vr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", We(), Pm(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", We(), Vr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", We(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", We(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", We(), $m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", We(), zm(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", We();
          var a = tt.current;
          tt.current = Mo;
          try {
            return Fm(e, t);
          } finally {
            tt.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", We();
          var i = tt.current;
          tt.current = Mo;
          try {
            return gb(e, t, a);
          } finally {
            tt.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", We(), Am();
        },
        useState: function(e) {
          fe = "useState", We();
          var t = tt.current;
          tt.current = Mo;
          try {
            return Cb(e);
          } finally {
            tt.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", We(), jm();
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", We(), XC(e);
        },
        useTransition: function() {
          return fe = "useTransition", We(), eE();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", We(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", We(), Om(e, t);
        },
        useId: function() {
          return fe = "useId", We(), Hm();
        },
        unstable_isNewReconciler: de
      }, cE = {
        readContext: function(e) {
          return Vr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", We(), Pm(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", We(), Vr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", We(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", We(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", We(), $m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", We(), zm(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", We();
          var a = tt.current;
          tt.current = Vm;
          try {
            return Fm(e, t);
          } finally {
            tt.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", We();
          var i = tt.current;
          tt.current = Vm;
          try {
            return bb(e, t, a);
          } finally {
            tt.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", We(), Am();
        },
        useState: function(e) {
          fe = "useState", We();
          var t = tt.current;
          tt.current = Vm;
          try {
            return Eb(e);
          } finally {
            tt.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", We(), jm();
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", We(), JC(e);
        },
        useTransition: function() {
          return fe = "useTransition", We(), tE();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", We(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", We(), Om(e, t);
        },
        useId: function() {
          return fe = "useId", We(), Hm();
        },
        unstable_isNewReconciler: de
      }, dl = {
        readContext: function(e) {
          return Ab(), Vr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Yt(), Ln(), kb(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Yt(), Ln(), Vr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Yt(), Ln(), Nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", Yt(), Ln(), Rb(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Yt(), Ln(), Tb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Yt(), Ln(), xb(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Yt(), Ln();
          var a = tt.current;
          tt.current = dl;
          try {
            return _b(e, t);
          } finally {
            tt.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", Yt(), Ln();
          var i = tt.current;
          tt.current = dl;
          try {
            return yb(e, t, a);
          } finally {
            tt.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Yt(), Ln(), wb(e);
        },
        useState: function(e) {
          fe = "useState", Yt(), Ln();
          var t = tt.current;
          tt.current = dl;
          try {
            return Lm(e);
          } finally {
            tt.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Yt(), Ln(), void 0;
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Yt(), Ln(), Db(e);
        },
        useTransition: function() {
          return fe = "useTransition", Yt(), Ln(), Ob();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", Yt(), Ln(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", Yt(), Ln(), Sb(e, t, a);
        },
        useId: function() {
          return fe = "useId", Yt(), Ln(), Lb();
        },
        unstable_isNewReconciler: de
      }, Mo = {
        readContext: function(e) {
          return Ab(), Vr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Yt(), We(), Pm(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Yt(), We(), Vr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Yt(), We(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", Yt(), We(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Yt(), We(), $m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Yt(), We(), zm(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Yt(), We();
          var a = tt.current;
          tt.current = Mo;
          try {
            return Fm(e, t);
          } finally {
            tt.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", Yt(), We();
          var i = tt.current;
          tt.current = Mo;
          try {
            return gb(e, t, a);
          } finally {
            tt.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Yt(), We(), Am();
        },
        useState: function(e) {
          fe = "useState", Yt(), We();
          var t = tt.current;
          tt.current = Mo;
          try {
            return Cb(e);
          } finally {
            tt.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Yt(), We(), jm();
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Yt(), We(), XC(e);
        },
        useTransition: function() {
          return fe = "useTransition", Yt(), We(), eE();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", Yt(), We(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", Yt(), We(), Om(e, t);
        },
        useId: function() {
          return fe = "useId", Yt(), We(), Hm();
        },
        unstable_isNewReconciler: de
      }, Vm = {
        readContext: function(e) {
          return Ab(), Vr(e);
        },
        useCallback: function(e, t) {
          return fe = "useCallback", Yt(), We(), Pm(e, t);
        },
        useContext: function(e) {
          return fe = "useContext", Yt(), We(), Vr(e);
        },
        useEffect: function(e, t) {
          return fe = "useEffect", Yt(), We(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return fe = "useImperativeHandle", Yt(), We(), Um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return fe = "useInsertionEffect", Yt(), We(), $m(e, t);
        },
        useLayoutEffect: function(e, t) {
          return fe = "useLayoutEffect", Yt(), We(), zm(e, t);
        },
        useMemo: function(e, t) {
          fe = "useMemo", Yt(), We();
          var a = tt.current;
          tt.current = Mo;
          try {
            return Fm(e, t);
          } finally {
            tt.current = a;
          }
        },
        useReducer: function(e, t, a) {
          fe = "useReducer", Yt(), We();
          var i = tt.current;
          tt.current = Mo;
          try {
            return bb(e, t, a);
          } finally {
            tt.current = i;
          }
        },
        useRef: function(e) {
          return fe = "useRef", Yt(), We(), Am();
        },
        useState: function(e) {
          fe = "useState", Yt(), We();
          var t = tt.current;
          tt.current = Mo;
          try {
            return Eb(e);
          } finally {
            tt.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return fe = "useDebugValue", Yt(), We(), jm();
        },
        useDeferredValue: function(e) {
          return fe = "useDeferredValue", Yt(), We(), JC(e);
        },
        useTransition: function() {
          return fe = "useTransition", Yt(), We(), tE();
        },
        useMutableSource: function(e, t, a) {
          return fe = "useMutableSource", Yt(), We(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return fe = "useSyncExternalStore", Yt(), We(), Om(e, t);
        },
        useId: function() {
          return fe = "useId", Yt(), We(), Hm();
        },
        unstable_isNewReconciler: de
      };
    }
    var ns = u.unstable_now, fE = 0, Bm = -1, qp = -1, Wm = -1, Mb = !1, Ym = !1;
    function dE() {
      return Mb;
    }
    function Sk() {
      Ym = !0;
    }
    function Ck() {
      Mb = !1, Ym = !1;
    }
    function Ek() {
      Mb = Ym, Ym = !1;
    }
    function pE() {
      return fE;
    }
    function hE() {
      fE = ns();
    }
    function Nb(e) {
      qp = ns(), e.actualStartTime < 0 && (e.actualStartTime = ns());
    }
    function vE(e) {
      qp = -1;
    }
    function Gm(e, t) {
      if (qp >= 0) {
        var a = ns() - qp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), qp = -1;
      }
    }
    function pl(e) {
      if (Bm >= 0) {
        var t = ns() - Bm;
        Bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case xe:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function $b(e) {
      if (Wm >= 0) {
        var t = ns() - Wm;
        Wm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case z:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case xe:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function hl() {
      Bm = ns();
    }
    function zb() {
      Wm = ns();
    }
    function Ub(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function No(e, t) {
      if (e && e.defaultProps) {
        var a = ot({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var jb = {}, Pb, Fb, Hb, Ib, Vb, mE, qm, Bb, Wb, Yb, Qp;
    {
      Pb = /* @__PURE__ */ new Set(), Fb = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Ib = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set(), Vb = /* @__PURE__ */ new Set(), Wb = /* @__PURE__ */ new Set(), Yb = /* @__PURE__ */ new Set(), Qp = /* @__PURE__ */ new Set();
      var yE = /* @__PURE__ */ new Set();
      qm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          yE.has(a) || (yE.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, mE = function(e, t) {
        if (t === void 0) {
          var a = nn(e) || "Component";
          Vb.has(a) || (Vb.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(jb, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(jb);
    }
    function Gb(e, t, a, i) {
      var l = e.memoizedState, f = a(i, l);
      {
        if (e.mode & an) {
          br(!0);
          try {
            f = a(i, l);
          } finally {
            br(!1);
          }
        }
        mE(t, f);
      }
      var h = f == null ? l : ot({}, l, f);
      if (e.memoizedState = h, e.lanes === ge) {
        var y = e.updateQueue;
        y.baseState = h;
      }
    }
    var qb = {
      isMounted: Qa,
      enqueueSetState: function(e, t, a) {
        var i = fi(e), l = ti(), f = os(i), h = ql(l, f);
        h.payload = t, a != null && (qm(a, "setState"), h.callback = a);
        var y = Ju(i, h, f);
        y !== null && (ra(y, i, f, l), wm(y, i, f)), Os(i, f);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = fi(e), l = ti(), f = os(i), h = ql(l, f);
        h.tag = NC, h.payload = t, a != null && (qm(a, "replaceState"), h.callback = a);
        var y = Ju(i, h, f);
        y !== null && (ra(y, i, f, l), wm(y, i, f)), Os(i, f);
      },
      enqueueForceUpdate: function(e, t) {
        var a = fi(e), i = ti(), l = os(a), f = ql(i, l);
        f.tag = Sm, t != null && (qm(t, "forceUpdate"), f.callback = t);
        var h = Ju(a, f, l);
        h !== null && (ra(h, a, l, i), wm(h, a, l)), Vc(a, l);
      }
    };
    function gE(e, t, a, i, l, f, h) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var S = y.shouldComponentUpdate(i, f, h);
        {
          if (e.mode & an) {
            br(!0);
            try {
              S = y.shouldComponentUpdate(i, f, h);
            } finally {
              br(!1);
            }
          }
          S === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", nn(t) || "Component");
        }
        return S;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ut(a, i) || !Ut(l, f) : !0;
    }
    function wk(e, t, a) {
      var i = e.stateNode;
      {
        var l = nn(t) || "Component", f = i.render;
        f || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Qp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & an) === yt && (Qp.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Qp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & an) === yt && (Qp.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !Wb.has(t) && (Wb.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", nn(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var h = i.props !== a;
        i.props !== void 0 && h && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Hb.has(t) && (Hb.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", nn(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var y = i.state;
        y && (typeof y != "object" || hn(y)) && g("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function bE(e, t) {
      t.updater = qb, e.stateNode = t, vu(t, e), t._reactInternalInstance = jb;
    }
    function SE(e, t, a) {
      var i = !1, l = Vi, f = Vi, h = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          h === null || h !== void 0 && h.$$typeof === ye && h._context === void 0
        );
        if (!y && !Yb.has(t)) {
          Yb.add(t);
          var S = "";
          h === void 0 ? S = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof h != "object" ? S = " However, it is set to a " + typeof h + "." : h.$$typeof === $ ? S = " Did you accidentally pass the Context.Provider instead?" : h._context !== void 0 ? S = " Did you accidentally pass the Context.Consumer instead?" : S = " However, it is set to an object with keys {" + Object.keys(h).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", nn(t) || "Component", S);
        }
      }
      if (typeof h == "object" && h !== null)
        f = Vr(h);
      else {
        l = Uf(e, t, !0);
        var x = t.contextTypes;
        i = x != null, f = i ? jf(e, l) : Vi;
      }
      var R = new t(a, f);
      if (e.mode & an) {
        br(!0);
        try {
          R = new t(a, f);
        } finally {
          br(!1);
        }
      }
      var F = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      bE(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && F === null) {
          var j = nn(t) || "Component";
          Fb.has(j) || (Fb.add(j), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", j, R.state === null ? "null" : "undefined", j));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var J = null, te = null, ie = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? J = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (J = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? te = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (te = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ie = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (ie = "UNSAFE_componentWillUpdate"), J !== null || te !== null || ie !== null) {
            var Qe = nn(t) || "Component", Ot = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Ib.has(Qe) || (Ib.add(Qe), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Qe, Ot, J !== null ? `
  ` + J : "", te !== null ? `
  ` + te : "", ie !== null ? `
  ` + ie : ""));
          }
        }
      }
      return i && sC(e, l, f), R;
    }
    function Tk(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", zt(e) || "Component"), qb.enqueueReplaceState(t, t.state, null));
    }
    function CE(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var f = zt(e) || "Component";
          Pb.has(f) || (Pb.add(f), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", f));
        }
        qb.enqueueReplaceState(t, t.state, null);
      }
    }
    function Qb(e, t, a, i) {
      wk(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, ab(e);
      var f = t.contextType;
      if (typeof f == "object" && f !== null)
        l.context = Vr(f);
      else {
        var h = Uf(e, t, !0);
        l.context = jf(e, h);
      }
      {
        if (l.state === a) {
          var y = nn(t) || "Component";
          Bb.has(y) || (Bb.add(y), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & an && Lo.recordLegacyContextWarning(e, l), Lo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var S = t.getDerivedStateFromProps;
      if (typeof S == "function" && (Gb(e, t, S, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Tk(e, l), Tm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var x = Xt;
        x |= _a, (e.mode & Xa) !== yt && (x |= Da), e.flags |= x;
      }
    }
    function xk(e, t, a, i) {
      var l = e.stateNode, f = e.memoizedProps;
      l.props = f;
      var h = l.context, y = t.contextType, S = Vi;
      if (typeof y == "object" && y !== null)
        S = Vr(y);
      else {
        var x = Uf(e, t, !0);
        S = jf(e, x);
      }
      var R = t.getDerivedStateFromProps, F = typeof R == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !F && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (f !== a || h !== S) && CE(e, l, a, S), zC();
      var j = e.memoizedState, J = l.state = j;
      if (Tm(e, a, l, i), J = e.memoizedState, f === a && j === J && !im() && !xm()) {
        if (typeof l.componentDidMount == "function") {
          var te = Xt;
          te |= _a, (e.mode & Xa) !== yt && (te |= Da), e.flags |= te;
        }
        return !1;
      }
      typeof R == "function" && (Gb(e, t, R, a), J = e.memoizedState);
      var ie = xm() || gE(e, t, f, a, j, J, S);
      if (ie) {
        if (!F && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Qe = Xt;
          Qe |= _a, (e.mode & Xa) !== yt && (Qe |= Da), e.flags |= Qe;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Ot = Xt;
          Ot |= _a, (e.mode & Xa) !== yt && (Ot |= Da), e.flags |= Ot;
        }
        e.memoizedProps = a, e.memoizedState = J;
      }
      return l.props = a, l.state = J, l.context = S, ie;
    }
    function Rk(e, t, a, i, l) {
      var f = t.stateNode;
      $C(e, t);
      var h = t.memoizedProps, y = t.type === t.elementType ? h : No(t.type, h);
      f.props = y;
      var S = t.pendingProps, x = f.context, R = a.contextType, F = Vi;
      if (typeof R == "object" && R !== null)
        F = Vr(R);
      else {
        var j = Uf(t, a, !0);
        F = jf(t, j);
      }
      var J = a.getDerivedStateFromProps, te = typeof J == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !te && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (h !== S || x !== F) && CE(t, f, i, F), zC();
      var ie = t.memoizedState, Qe = f.state = ie;
      if (Tm(t, i, f, l), Qe = t.memoizedState, h === S && ie === Qe && !im() && !xm() && !Ye)
        return typeof f.componentDidUpdate == "function" && (h !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Xt), typeof f.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= di), !1;
      typeof J == "function" && (Gb(t, a, J, i), Qe = t.memoizedState);
      var Ot = xm() || gE(t, a, y, i, ie, Qe, F) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ye;
      return Ot ? (!te && (typeof f.UNSAFE_componentWillUpdate == "function" || typeof f.componentWillUpdate == "function") && (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, Qe, F), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(i, Qe, F)), typeof f.componentDidUpdate == "function" && (t.flags |= Xt), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= di)) : (typeof f.componentDidUpdate == "function" && (h !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Xt), typeof f.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= di), t.memoizedProps = i, t.memoizedState = Qe), f.props = i, f.state = Qe, f.context = F, Ot;
    }
    function lc(e, t) {
      return {
        value: e,
        source: t,
        stack: $i(t),
        digest: null
      };
    }
    function Kb(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function kk(e, t) {
      return !0;
    }
    function Xb(e, t) {
      try {
        var a = kk(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, f = t.stack, h = f !== null ? f : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === N)
            return;
          console.error(i);
        }
        var y = l ? zt(l) : null, S = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", x;
        if (e.tag === z)
          x = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = zt(e) || "Anonymous";
          x = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var F = S + `
` + h + `

` + ("" + x);
        console.error(F);
      } catch (j) {
        setTimeout(function() {
          throw j;
        });
      }
    }
    var _k = typeof WeakMap == "function" ? WeakMap : Map;
    function EE(e, t, a) {
      var i = ql(Vn, a);
      i.tag = nb, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        SD(l), Xb(e, t);
      }, i;
    }
    function Jb(e, t, a) {
      var i = ql(Vn, a);
      i.tag = nb;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var f = t.value;
        i.payload = function() {
          return l(f);
        }, i.callback = function() {
          Mw(e), Xb(e, t);
        };
      }
      var h = e.stateNode;
      return h !== null && typeof h.componentDidCatch == "function" && (i.callback = function() {
        Mw(e), Xb(e, t), typeof l != "function" && gD(this);
        var S = t.value, x = t.stack;
        this.componentDidCatch(S, {
          componentStack: x !== null ? x : ""
        }), typeof l != "function" && ($a(e.lanes, xt) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", zt(e) || "Unknown"));
      }), i;
    }
    function wE(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new _k(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var f = CD.bind(null, e, t, a);
        Ka && dh(e, a), t.then(f, f);
      }
    }
    function Dk(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var f = /* @__PURE__ */ new Set();
        f.add(a), e.updateQueue = f;
      } else
        l.add(a);
    }
    function Ok(e, t) {
      var a = e.tag;
      if ((e.mode & bt) === yt && (a === k || a === Oe || a === Re)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function TE(e) {
      var t = e;
      do {
        if (t.tag === le && ck(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function xE(e, t, a, i, l) {
      if ((e.mode & bt) === yt) {
        if (e === t)
          e.flags |= Pr;
        else {
          if (e.flags |= Pt, a.flags |= ks, a.flags &= ~(Lc | Ga), a.tag === N) {
            var f = a.alternate;
            if (f === null)
              a.tag = Le;
            else {
              var h = ql(Vn, xt);
              h.tag = Sm, Ju(a, h, xt);
            }
          }
          a.lanes = Qt(a.lanes, xt);
        }
        return e;
      }
      return e.flags |= Pr, e.lanes = l, e;
    }
    function Lk(e, t, a, i, l) {
      if (a.flags |= Ga, Ka && dh(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var f = i;
        Ok(a), ha() && a.mode & bt && mC();
        var h = TE(t);
        if (h !== null) {
          h.flags &= ~or, xE(h, t, a, e, l), h.mode & bt && wE(e, f, l), Dk(h, e, f);
          return;
        } else {
          if (!Jd(l)) {
            wE(e, f, l), L0();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if (ha() && a.mode & bt) {
        mC();
        var S = TE(t);
        if (S !== null) {
          (S.flags & Pr) === _t && (S.flags |= or), xE(S, t, a, e, l), Bg(lc(i, a));
          return;
        }
      }
      i = lc(i, a), cD(i);
      var x = t;
      do {
        switch (x.tag) {
          case z: {
            var R = i;
            x.flags |= Pr;
            var F = Du(l);
            x.lanes = Qt(x.lanes, F);
            var j = EE(x, R, F);
            ib(x, j);
            return;
          }
          case N:
            var J = i, te = x.type, ie = x.stateNode;
            if ((x.flags & Pt) === _t && (typeof te.getDerivedStateFromError == "function" || ie !== null && typeof ie.componentDidCatch == "function" && !Tw(ie))) {
              x.flags |= Pr;
              var Qe = Du(l);
              x.lanes = Qt(x.lanes, Qe);
              var Ot = Jb(x, J, Qe);
              ib(x, Ot);
              return;
            }
            break;
        }
        x = x.return;
      } while (x !== null);
    }
    function Ak() {
      return null;
    }
    var Kp = d.ReactCurrentOwner, $o = !1, Zb, Xp, e0, t0, n0, uc, r0, Qm, Jp;
    Zb = {}, Xp = {}, e0 = {}, t0 = {}, n0 = {}, uc = !1, r0 = {}, Qm = {}, Jp = {};
    function Za(e, t, a, i) {
      e === null ? t.child = _C(t, null, a, i) : t.child = If(t, e.child, a, i);
    }
    function Mk(e, t, a, i) {
      t.child = If(t, e.child, null, i), t.child = If(t, null, a, i);
    }
    function RE(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var f = a.propTypes;
        f && Do(
          f,
          i,
          // Resolved props
          "prop",
          nn(a)
        );
      }
      var h = a.render, y = t.ref, S, x;
      Bf(t, l), bu(t);
      {
        if (Kp.current = t, xa(!0), S = Kf(e, t, h, i, y, l), x = Xf(), t.mode & an) {
          br(!0);
          try {
            S = Kf(e, t, h, i, y, l), x = Xf();
          } finally {
            br(!1);
          }
        }
        xa(!1);
      }
      return Aa(), e !== null && !$o ? (IC(e, t, l), Ql(e, t, l)) : (ha() && x && jg(t), t.flags |= Ko, Za(e, t, S, l), t.child);
    }
    function kE(e, t, a, i, l) {
      if (e === null) {
        var f = a.type;
        if (jD(f) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var h = f;
          return h = id(f), t.tag = Re, t.type = h, o0(t, f), _E(e, t, h, i, l);
        }
        {
          var y = f.propTypes;
          if (y && Do(
            y,
            i,
            // Resolved props
            "prop",
            nn(f)
          ), a.defaultProps !== void 0) {
            var S = nn(f) || "Unknown";
            Jp[S] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", S), Jp[S] = !0);
          }
        }
        var x = I0(a.type, null, i, t, t.mode, l);
        return x.ref = t.ref, x.return = t, t.child = x, x;
      }
      {
        var R = a.type, F = R.propTypes;
        F && Do(
          F,
          i,
          // Resolved props
          "prop",
          nn(R)
        );
      }
      var j = e.child, J = d0(e, l);
      if (!J) {
        var te = j.memoizedProps, ie = a.compare;
        if (ie = ie !== null ? ie : Ut, ie(te, i) && e.ref === t.ref)
          return Ql(e, t, l);
      }
      t.flags |= Ko;
      var Qe = pc(j, i);
      return Qe.ref = t.ref, Qe.return = t, t.child = Qe, Qe;
    }
    function _E(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var f = t.elementType;
        if (f.$$typeof === Tt) {
          var h = f, y = h._payload, S = h._init;
          try {
            f = S(y);
          } catch {
            f = null;
          }
          var x = f && f.propTypes;
          x && Do(
            x,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            nn(f)
          );
        }
      }
      if (e !== null) {
        var R = e.memoizedProps;
        if (Ut(R, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if ($o = !1, t.pendingProps = i = R, d0(e, l))
            (e.flags & ks) !== _t && ($o = !0);
          else return t.lanes = e.lanes, Ql(e, t, l);
      }
      return a0(e, t, a, i, l);
    }
    function DE(e, t, a) {
      var i = t.pendingProps, l = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || q)
        if ((t.mode & bt) === yt) {
          var h = {
            baseLanes: ge,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = h, uy(t, a);
        } else if ($a(a, la)) {
          var F = {
            baseLanes: ge,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = F;
          var j = f !== null ? f.baseLanes : a;
          uy(t, j);
        } else {
          var y = null, S;
          if (f !== null) {
            var x = f.baseLanes;
            S = Qt(x, a);
          } else
            S = a;
          t.lanes = t.childLanes = la;
          var R = {
            baseLanes: S,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = R, t.updateQueue = null, uy(t, S), null;
        }
      else {
        var J;
        f !== null ? (J = Qt(f.baseLanes, a), t.memoizedState = null) : J = a, uy(t, J);
      }
      return Za(e, t, l, a), t.child;
    }
    function Nk(e, t, a) {
      var i = t.pendingProps;
      return Za(e, t, i, a), t.child;
    }
    function $k(e, t, a) {
      var i = t.pendingProps.children;
      return Za(e, t, i, a), t.child;
    }
    function zk(e, t, a) {
      {
        t.flags |= Xt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, f = l.children;
      return Za(e, t, f, a), t.child;
    }
    function OE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ka, t.flags |= Pd);
    }
    function a0(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var f = a.propTypes;
        f && Do(
          f,
          i,
          // Resolved props
          "prop",
          nn(a)
        );
      }
      var h;
      {
        var y = Uf(t, a, !0);
        h = jf(t, y);
      }
      var S, x;
      Bf(t, l), bu(t);
      {
        if (Kp.current = t, xa(!0), S = Kf(e, t, a, i, h, l), x = Xf(), t.mode & an) {
          br(!0);
          try {
            S = Kf(e, t, a, i, h, l), x = Xf();
          } finally {
            br(!1);
          }
        }
        xa(!1);
      }
      return Aa(), e !== null && !$o ? (IC(e, t, l), Ql(e, t, l)) : (ha() && x && jg(t), t.flags |= Ko, Za(e, t, S, l), t.child);
    }
    function LE(e, t, a, i, l) {
      {
        switch (ZD(t)) {
          case !1: {
            var f = t.stateNode, h = t.type, y = new h(t.memoizedProps, f.context), S = y.state;
            f.updater.enqueueSetState(f, S, null);
            break;
          }
          case !0: {
            t.flags |= Pt, t.flags |= Pr;
            var x = new Error("Simulated error coming from DevTools"), R = Du(l);
            t.lanes = Qt(t.lanes, R);
            var F = Jb(t, lc(x, t), R);
            ib(t, F);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var j = a.propTypes;
          j && Do(
            j,
            i,
            // Resolved props
            "prop",
            nn(a)
          );
        }
      }
      var J;
      sl(a) ? (J = !0, lm(t)) : J = !1, Bf(t, l);
      var te = t.stateNode, ie;
      te === null ? (Xm(e, t), SE(t, a, i), Qb(t, a, i, l), ie = !0) : e === null ? ie = xk(t, a, i, l) : ie = Rk(e, t, a, i, l);
      var Qe = i0(e, t, a, ie, J, l);
      {
        var Ot = t.stateNode;
        ie && Ot.props !== i && (uc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", zt(t) || "a component"), uc = !0);
      }
      return Qe;
    }
    function i0(e, t, a, i, l, f) {
      OE(e, t);
      var h = (t.flags & Pt) !== _t;
      if (!i && !h)
        return l && dC(t, a, !1), Ql(e, t, f);
      var y = t.stateNode;
      Kp.current = t;
      var S;
      if (h && typeof a.getDerivedStateFromError != "function")
        S = null, vE();
      else {
        bu(t);
        {
          if (xa(!0), S = y.render(), t.mode & an) {
            br(!0);
            try {
              y.render();
            } finally {
              br(!1);
            }
          }
          xa(!1);
        }
        Aa();
      }
      return t.flags |= Ko, e !== null && h ? Mk(e, t, S, f) : Za(e, t, S, f), t.memoizedState = y.state, l && dC(t, a, !0), t.child;
    }
    function AE(e) {
      var t = e.stateNode;
      t.pendingContext ? cC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cC(e, t.context, !1), ob(e, t.containerInfo);
    }
    function Uk(e, t, a) {
      if (AE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, f = l.element;
      $C(e, t), Tm(t, i, null, a);
      var h = t.memoizedState;
      t.stateNode;
      var y = h.element;
      if (l.isDehydrated) {
        var S = {
          element: y,
          isDehydrated: !1,
          cache: h.cache,
          pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
          transitions: h.transitions
        }, x = t.updateQueue;
        if (x.baseState = S, t.memoizedState = S, t.flags & or) {
          var R = lc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return ME(e, t, y, a, R);
        } else if (y !== f) {
          var F = lc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return ME(e, t, y, a, F);
        } else {
          FR(t);
          var j = _C(t, null, y, a);
          t.child = j;
          for (var J = j; J; )
            J.flags = J.flags & ~Wn | pi, J = J.sibling;
        }
      } else {
        if (Hf(), y === f)
          return Ql(e, t, a);
        Za(e, t, y, a);
      }
      return t.child;
    }
    function ME(e, t, a, i, l) {
      return Hf(), Bg(l), t.flags |= or, Za(e, t, a, i), t.child;
    }
    function jk(e, t, a) {
      PC(t), e === null && Vg(t);
      var i = t.type, l = t.pendingProps, f = e !== null ? e.memoizedProps : null, h = l.children, y = Tg(i, l);
      return y ? h = null : f !== null && Tg(i, f) && (t.flags |= On), OE(e, t), Za(e, t, h, a), t.child;
    }
    function Pk(e, t) {
      return e === null && Vg(t), null;
    }
    function Fk(e, t, a, i) {
      Xm(e, t);
      var l = t.pendingProps, f = a, h = f._payload, y = f._init, S = y(h);
      t.type = S;
      var x = t.tag = PD(S), R = No(S, l), F;
      switch (x) {
        case k:
          return o0(t, S), t.type = S = id(S), F = a0(null, t, S, R, i), F;
        case N:
          return t.type = S = z0(S), F = LE(null, t, S, R, i), F;
        case Oe:
          return t.type = S = U0(S), F = RE(null, t, S, R, i), F;
        case Ve: {
          if (t.type !== t.elementType) {
            var j = S.propTypes;
            j && Do(
              j,
              R,
              // Resolved for outer only
              "prop",
              nn(S)
            );
          }
          return F = kE(
            null,
            t,
            S,
            No(S.type, R),
            // The inner type can have defaults too
            i
          ), F;
        }
      }
      var J = "";
      throw S !== null && typeof S == "object" && S.$$typeof === Tt && (J = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + S + ". " + ("Lazy element type must resolve to a class or function." + J));
    }
    function Hk(e, t, a, i, l) {
      Xm(e, t), t.tag = N;
      var f;
      return sl(a) ? (f = !0, lm(t)) : f = !1, Bf(t, l), SE(t, a, i), Qb(t, a, i, l), i0(null, t, a, !0, f, l);
    }
    function Ik(e, t, a, i) {
      Xm(e, t);
      var l = t.pendingProps, f;
      {
        var h = Uf(t, a, !1);
        f = jf(t, h);
      }
      Bf(t, i);
      var y, S;
      bu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var x = nn(a) || "Unknown";
          Zb[x] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), Zb[x] = !0);
        }
        t.mode & an && Lo.recordLegacyContextWarning(t, null), xa(!0), Kp.current = t, y = Kf(null, t, a, l, f, i), S = Xf(), xa(!1);
      }
      if (Aa(), t.flags |= Ko, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var R = nn(a) || "Unknown";
        Xp[R] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Xp[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var F = nn(a) || "Unknown";
          Xp[F] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", F, F, F), Xp[F] = !0);
        }
        t.tag = N, t.memoizedState = null, t.updateQueue = null;
        var j = !1;
        return sl(a) ? (j = !0, lm(t)) : j = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, ab(t), bE(t, y), Qb(t, a, l, i), i0(null, t, a, !0, j, i);
      } else {
        if (t.tag = k, t.mode & an) {
          br(!0);
          try {
            y = Kf(null, t, a, l, f, i), S = Xf();
          } finally {
            br(!1);
          }
        }
        return ha() && S && jg(t), Za(null, t, y, i), o0(t, a), t.child;
      }
    }
    function o0(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = yr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", f = e._debugSource;
          f && (l = f.fileName + ":" + f.lineNumber), n0[l] || (n0[l] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var h = nn(t) || "Unknown";
          Jp[h] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", h), Jp[h] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = nn(t) || "Unknown";
          t0[y] || (g("%s: Function components do not support getDerivedStateFromProps.", y), t0[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var S = nn(t) || "Unknown";
          e0[S] || (g("%s: Function components do not support contextType.", S), e0[S] = !0);
        }
      }
    }
    var l0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Sr
    };
    function u0(e) {
      return {
        baseLanes: e,
        cachePool: Ak(),
        transitions: null
      };
    }
    function Vk(e, t) {
      var a = null;
      return {
        baseLanes: Qt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Bk(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return sb(e, Hp);
    }
    function Wk(e, t) {
      return Us(e.childLanes, t);
    }
    function NE(e, t, a) {
      var i = t.pendingProps;
      eO(t) && (t.flags |= Pt);
      var l = Ao.current, f = !1, h = (t.flags & Pt) !== _t;
      if (h || Bk(l, e) ? (f = !0, t.flags &= ~Pt) : (e === null || e.memoizedState !== null) && (l = sk(l, HC)), l = Yf(l), es(t, l), e === null) {
        Vg(t);
        var y = t.memoizedState;
        if (y !== null) {
          var S = y.dehydrated;
          if (S !== null)
            return Kk(t, S);
        }
        var x = i.children, R = i.fallback;
        if (f) {
          var F = Yk(t, x, R, a), j = t.child;
          return j.memoizedState = u0(a), t.memoizedState = l0, F;
        } else
          return s0(t, x);
      } else {
        var J = e.memoizedState;
        if (J !== null) {
          var te = J.dehydrated;
          if (te !== null)
            return Xk(e, t, h, i, te, J, a);
        }
        if (f) {
          var ie = i.fallback, Qe = i.children, Ot = qk(e, t, Qe, ie, a), St = t.child, bn = e.child.memoizedState;
          return St.memoizedState = bn === null ? u0(a) : Vk(bn, a), St.childLanes = Wk(e, a), t.memoizedState = l0, Ot;
        } else {
          var dn = i.children, W = Gk(e, t, dn, a);
          return t.memoizedState = null, W;
        }
      }
    }
    function s0(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, f = c0(l, i);
      return f.return = e, e.child = f, f;
    }
    function Yk(e, t, a, i) {
      var l = e.mode, f = e.child, h = {
        mode: "hidden",
        children: t
      }, y, S;
      return (l & bt) === yt && f !== null ? (y = f, y.childLanes = ge, y.pendingProps = h, e.mode & Ft && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), S = us(a, l, i, null)) : (y = c0(h, l), S = us(a, l, i, null)), y.return = e, S.return = e, y.sibling = S, e.child = y, S;
    }
    function c0(e, t, a) {
      return $w(e, t, ge, null);
    }
    function $E(e, t) {
      return pc(e, t);
    }
    function Gk(e, t, a, i) {
      var l = e.child, f = l.sibling, h = $E(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & bt) === yt && (h.lanes = i), h.return = t, h.sibling = null, f !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [f], t.flags |= _n) : y.push(f);
      }
      return t.child = h, h;
    }
    function qk(e, t, a, i, l) {
      var f = t.mode, h = e.child, y = h.sibling, S = {
        mode: "hidden",
        children: a
      }, x;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (f & bt) === yt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== h
      ) {
        var R = t.child;
        x = R, x.childLanes = ge, x.pendingProps = S, t.mode & Ft && (x.actualDuration = 0, x.actualStartTime = -1, x.selfBaseDuration = h.selfBaseDuration, x.treeBaseDuration = h.treeBaseDuration), t.deletions = null;
      } else
        x = $E(h, S), x.subtreeFlags = h.subtreeFlags & Gr;
      var F;
      return y !== null ? F = pc(y, i) : (F = us(i, f, l, null), F.flags |= Wn), F.return = t, x.return = t, x.sibling = F, t.child = x, F;
    }
    function Km(e, t, a, i) {
      i !== null && Bg(i), If(t, e.child, null, a);
      var l = t.pendingProps, f = l.children, h = s0(t, f);
      return h.flags |= Wn, t.memoizedState = null, h;
    }
    function Qk(e, t, a, i, l) {
      var f = t.mode, h = {
        mode: "visible",
        children: a
      }, y = c0(h, f), S = us(i, f, l, null);
      return S.flags |= Wn, y.return = t, S.return = t, y.sibling = S, t.child = y, (t.mode & bt) !== yt && If(t, e.child, null, l), S;
    }
    function Kk(e, t, a) {
      return (e.mode & bt) === yt ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = xt) : _g(t) ? e.lanes = To : e.lanes = la, null;
    }
    function Xk(e, t, a, i, l, f, h) {
      if (a)
        if (t.flags & or) {
          t.flags &= ~or;
          var W = Kb(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Km(e, t, h, W);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Pt, null;
          var oe = i.children, Y = i.fallback, De = Qk(e, t, oe, Y, h), rt = t.child;
          return rt.memoizedState = u0(h), t.memoizedState = l0, De;
        }
      else {
        if (jR(), (t.mode & bt) === yt)
          return Km(
            e,
            t,
            h,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (_g(l)) {
          var y, S, x;
          {
            var R = tR(l);
            y = R.digest, S = R.message, x = R.stack;
          }
          var F;
          S ? F = new Error(S) : F = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var j = Kb(F, y, x);
          return Km(e, t, h, j);
        }
        var J = $a(h, e.childLanes);
        if ($o || J) {
          var te = ly();
          if (te !== null) {
            var ie = Ev(te, h);
            if (ie !== Sr && ie !== f.retryLane) {
              f.retryLane = ie;
              var Qe = Vn;
              xi(e, ie), ra(te, e, ie, Qe);
            }
          }
          L0();
          var Ot = Kb(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Km(e, t, h, Ot);
        } else if (aC(l)) {
          t.flags |= Pt, t.child = e.child;
          var St = ED.bind(null, e);
          return nR(l, St), null;
        } else {
          HR(t, l, f.treeContext);
          var bn = i.children, dn = s0(t, bn);
          return dn.flags |= pi, dn;
        }
      }
    }
    function zE(e, t, a) {
      e.lanes = Qt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Qt(i.lanes, t)), eb(e.return, t, a);
    }
    function Jk(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === le) {
          var l = i.memoizedState;
          l !== null && zE(i, a, e);
        } else if (i.tag === Et)
          zE(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Zk(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && _m(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function e_(e) {
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
    function t_(e, t) {
      e !== void 0 && !Qm[e] && (e !== "collapsed" && e !== "hidden" ? (Qm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Qm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function UE(e, t) {
      {
        var a = hn(e), i = !a && typeof st(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function n_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (hn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!UE(e[a], a))
              return;
        } else {
          var i = st(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var f = l.next(), h = 0; !f.done; f = l.next()) {
                if (!UE(f.value, h))
                  return;
                h++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function f0(e, t, a, i, l) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = l);
    }
    function jE(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, f = i.tail, h = i.children;
      e_(l), t_(f, l), n_(h, l), Za(e, t, h, a);
      var y = Ao.current, S = sb(y, Hp);
      if (S)
        y = cb(y, Hp), t.flags |= Pt;
      else {
        var x = e !== null && (e.flags & Pt) !== _t;
        x && Jk(t, t.child, a), y = Yf(y);
      }
      if (es(t, y), (t.mode & bt) === yt)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var R = Zk(t.child), F;
            R === null ? (F = t.child, t.child = null) : (F = R.sibling, R.sibling = null), f0(
              t,
              !1,
              // isBackwards
              F,
              R,
              f
            );
            break;
          }
          case "backwards": {
            var j = null, J = t.child;
            for (t.child = null; J !== null; ) {
              var te = J.alternate;
              if (te !== null && _m(te) === null) {
                t.child = J;
                break;
              }
              var ie = J.sibling;
              J.sibling = j, j = J, J = ie;
            }
            f0(
              t,
              !0,
              // isBackwards
              j,
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
    function r_(e, t, a) {
      ob(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = If(t, null, i, a) : Za(e, t, i, a), t.child;
    }
    var PE = !1;
    function a_(e, t, a) {
      var i = t.type, l = i._context, f = t.pendingProps, h = t.memoizedProps, y = f.value;
      {
        "value" in f || PE || (PE = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var S = t.type.propTypes;
        S && Do(S, f, "prop", "Context.Provider");
      }
      if (LC(t, l, y), h !== null) {
        var x = h.value;
        if (dt(x, y)) {
          if (h.children === f.children && !im())
            return Ql(e, t, a);
        } else
          ek(t, l, a);
      }
      var R = f.children;
      return Za(e, t, R, a), t.child;
    }
    var FE = !1;
    function i_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (FE || (FE = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, f = l.children;
      typeof f != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Bf(t, a);
      var h = Vr(i);
      bu(t);
      var y;
      return Kp.current = t, xa(!0), y = f(h), xa(!1), Aa(), t.flags |= Ko, Za(e, t, y, a), t.child;
    }
    function Zp() {
      $o = !0;
    }
    function Xm(e, t) {
      (t.mode & bt) === yt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Wn);
    }
    function Ql(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), vE(), fh(t.lanes), $a(a, t.childLanes) ? (JR(e, t), t.child) : null;
    }
    function o_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var f = i.deletions;
        return f === null ? (i.deletions = [e], i.flags |= _n) : f.push(e), a.flags |= Wn, a;
      }
    }
    function d0(e, t) {
      var a = e.lanes;
      return !!$a(a, t);
    }
    function l_(e, t, a) {
      switch (t.tag) {
        case z:
          AE(t), t.stateNode, Hf();
          break;
        case V:
          PC(t);
          break;
        case N: {
          var i = t.type;
          sl(i) && lm(t);
          break;
        }
        case X:
          ob(t, t.stateNode.containerInfo);
          break;
        case he: {
          var l = t.memoizedProps.value, f = t.type._context;
          LC(t, f, l);
          break;
        }
        case xe:
          {
            var h = $a(a, t.childLanes);
            h && (t.flags |= Xt);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case le: {
          var S = t.memoizedState;
          if (S !== null) {
            if (S.dehydrated !== null)
              return es(t, Yf(Ao.current)), t.flags |= Pt, null;
            var x = t.child, R = x.childLanes;
            if ($a(a, R))
              return NE(e, t, a);
            es(t, Yf(Ao.current));
            var F = Ql(e, t, a);
            return F !== null ? F.sibling : null;
          } else
            es(t, Yf(Ao.current));
          break;
        }
        case Et: {
          var j = (e.flags & Pt) !== _t, J = $a(a, t.childLanes);
          if (j) {
            if (J)
              return jE(e, t, a);
            t.flags |= Pt;
          }
          var te = t.memoizedState;
          if (te !== null && (te.rendering = null, te.tail = null, te.lastEffect = null), es(t, Ao.current), J)
            break;
          return null;
        }
        case qe:
        case ue:
          return t.lanes = ge, DE(e, t, a);
      }
      return Ql(e, t, a);
    }
    function HE(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return o_(e, t, I0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || im() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          $o = !0;
        else {
          var f = d0(e, a);
          if (!f && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Pt) === _t)
            return $o = !1, l_(e, t, a);
          (e.flags & ks) !== _t ? $o = !0 : $o = !1;
        }
      } else if ($o = !1, ha() && AR(t)) {
        var h = t.index, y = MR();
        vC(t, y, h);
      }
      switch (t.lanes = ge, t.tag) {
        case I:
          return Ik(e, t, t.type, a);
        case ze: {
          var S = t.elementType;
          return Fk(e, t, S, a);
        }
        case k: {
          var x = t.type, R = t.pendingProps, F = t.elementType === x ? R : No(x, R);
          return a0(e, t, x, F, a);
        }
        case N: {
          var j = t.type, J = t.pendingProps, te = t.elementType === j ? J : No(j, J);
          return LE(e, t, j, te, a);
        }
        case z:
          return Uk(e, t, a);
        case V:
          return jk(e, t, a);
        case ve:
          return Pk(e, t);
        case le:
          return NE(e, t, a);
        case X:
          return r_(e, t, a);
        case Oe: {
          var ie = t.type, Qe = t.pendingProps, Ot = t.elementType === ie ? Qe : No(ie, Qe);
          return RE(e, t, ie, Ot, a);
        }
        case Ke:
          return Nk(e, t, a);
        case ae:
          return $k(e, t, a);
        case xe:
          return zk(e, t, a);
        case he:
          return a_(e, t, a);
        case Ct:
          return i_(e, t, a);
        case Ve: {
          var St = t.type, bn = t.pendingProps, dn = No(St, bn);
          if (t.type !== t.elementType) {
            var W = St.propTypes;
            W && Do(
              W,
              dn,
              // Resolved for outer only
              "prop",
              nn(St)
            );
          }
          return dn = No(St.type, dn), kE(e, t, St, dn, a);
        }
        case Re:
          return _E(e, t, t.type, t.pendingProps, a);
        case Le: {
          var oe = t.type, Y = t.pendingProps, De = t.elementType === oe ? Y : No(oe, Y);
          return Hk(e, t, oe, De, a);
        }
        case Et:
          return jE(e, t, a);
        case Rt:
          break;
        case qe:
          return DE(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Jf(e) {
      e.flags |= Xt;
    }
    function IE(e) {
      e.flags |= ka, e.flags |= Pd;
    }
    var VE, p0, BE, WE;
    VE = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === V || l.tag === ve)
          Dx(e, l.stateNode);
        else if (l.tag !== X) {
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
    }, BE = function(e, t, a, i, l) {
      var f = e.memoizedProps;
      if (f !== i) {
        var h = t.stateNode, y = lb(), S = Lx(h, a, f, i, l, y);
        t.updateQueue = S, S && Jf(t);
      }
    }, WE = function(e, t, a, i) {
      a !== i && Jf(t);
    };
    function eh(e, t) {
      if (!ha())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
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
    function ma(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ge, i = _t;
      if (t) {
        if ((e.mode & Ft) !== yt) {
          for (var S = e.selfBaseDuration, x = e.child; x !== null; )
            a = Qt(a, Qt(x.lanes, x.childLanes)), i |= x.subtreeFlags & Gr, i |= x.flags & Gr, S += x.treeBaseDuration, x = x.sibling;
          e.treeBaseDuration = S;
        } else
          for (var R = e.child; R !== null; )
            a = Qt(a, Qt(R.lanes, R.childLanes)), i |= R.subtreeFlags & Gr, i |= R.flags & Gr, R.return = e, R = R.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ft) !== yt) {
          for (var l = e.actualDuration, f = e.selfBaseDuration, h = e.child; h !== null; )
            a = Qt(a, Qt(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, l += h.actualDuration, f += h.treeBaseDuration, h = h.sibling;
          e.actualDuration = l, e.treeBaseDuration = f;
        } else
          for (var y = e.child; y !== null; )
            a = Qt(a, Qt(y.lanes, y.childLanes)), i |= y.subtreeFlags, i |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function u_(e, t, a) {
      if (YR() && (t.mode & bt) !== yt && (t.flags & Pt) === _t)
        return EC(t), Hf(), t.flags |= or | Ga | Pr, !1;
      var i = dm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (BR(t), ma(t), (t.mode & Ft) !== yt) {
            var l = a !== null;
            if (l) {
              var f = t.child;
              f !== null && (t.treeBaseDuration -= f.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Hf(), (t.flags & Pt) === _t && (t.memoizedState = null), t.flags |= Xt, ma(t), (t.mode & Ft) !== yt) {
            var h = a !== null;
            if (h) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return wC(), !0;
    }
    function YE(e, t, a) {
      var i = t.pendingProps;
      switch (Pg(t), t.tag) {
        case I:
        case ze:
        case Re:
        case k:
        case Oe:
        case Ke:
        case ae:
        case xe:
        case Ct:
        case Ve:
          return ma(t), null;
        case N: {
          var l = t.type;
          return sl(l) && om(t), ma(t), null;
        }
        case z: {
          var f = t.stateNode;
          if (Wf(t), $g(t), db(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), e === null || e.child === null) {
            var h = dm(t);
            if (h)
              Jf(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & or) !== _t) && (t.flags |= di, wC());
            }
          }
          return p0(e, t), ma(t), null;
        }
        case V: {
          ub(t);
          var S = jC(), x = t.type;
          if (e !== null && t.stateNode != null)
            BE(e, t, x, i, S), e.ref !== t.ref && IE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return ma(t), null;
            }
            var R = lb(), F = dm(t);
            if (F)
              IR(t, S, R) && Jf(t);
            else {
              var j = _x(x, i, S, R, t);
              VE(j, t, !1, !1), t.stateNode = j, Ox(j, x, i, S) && Jf(t);
            }
            t.ref !== null && IE(t);
          }
          return ma(t), null;
        }
        case ve: {
          var J = i;
          if (e && t.stateNode != null) {
            var te = e.memoizedProps;
            WE(e, t, te, J);
          } else {
            if (typeof J != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ie = jC(), Qe = lb(), Ot = dm(t);
            Ot ? VR(t) && Jf(t) : t.stateNode = Ax(J, ie, Qe, t);
          }
          return ma(t), null;
        }
        case le: {
          Gf(t);
          var St = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var bn = u_(e, t, St);
            if (!bn)
              return t.flags & Pr ? t : null;
          }
          if ((t.flags & Pt) !== _t)
            return t.lanes = a, (t.mode & Ft) !== yt && Ub(t), t;
          var dn = St !== null, W = e !== null && e.memoizedState !== null;
          if (dn !== W && dn) {
            var oe = t.child;
            if (oe.flags |= Xo, (t.mode & bt) !== yt) {
              var Y = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !D);
              Y || sb(Ao.current, HC) ? sD() : L0();
            }
          }
          var De = t.updateQueue;
          if (De !== null && (t.flags |= Xt), ma(t), (t.mode & Ft) !== yt && dn) {
            var rt = t.child;
            rt !== null && (t.treeBaseDuration -= rt.treeBaseDuration);
          }
          return null;
        }
        case X:
          return Wf(t), p0(e, t), e === null && xR(t.stateNode.containerInfo), ma(t), null;
        case he:
          var Ze = t.type._context;
          return Zg(Ze, t), ma(t), null;
        case Le: {
          var jt = t.type;
          return sl(jt) && om(t), ma(t), null;
        }
        case Et: {
          Gf(t);
          var qt = t.memoizedState;
          if (qt === null)
            return ma(t), null;
          var Un = (t.flags & Pt) !== _t, Rn = qt.rendering;
          if (Rn === null)
            if (Un)
              eh(qt, !1);
            else {
              var Mr = fD() && (e === null || (e.flags & Pt) === _t);
              if (!Mr)
                for (var kn = t.child; kn !== null; ) {
                  var Cr = _m(kn);
                  if (Cr !== null) {
                    Un = !0, t.flags |= Pt, eh(qt, !1);
                    var Fa = Cr.updateQueue;
                    return Fa !== null && (t.updateQueue = Fa, t.flags |= Xt), t.subtreeFlags = _t, ZR(t, a), es(t, cb(Ao.current, Hp)), t.child;
                  }
                  kn = kn.sibling;
                }
              qt.tail !== null && tr() > pw() && (t.flags |= Pt, Un = !0, eh(qt, !1), t.lanes = fv);
            }
          else {
            if (!Un) {
              var Ca = _m(Rn);
              if (Ca !== null) {
                t.flags |= Pt, Un = !0;
                var Wi = Ca.updateQueue;
                if (Wi !== null && (t.updateQueue = Wi, t.flags |= Xt), eh(qt, !0), qt.tail === null && qt.tailMode === "hidden" && !Rn.alternate && !ha())
                  return ma(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              tr() * 2 - qt.renderingStartTime > pw() && a !== la && (t.flags |= Pt, Un = !0, eh(qt, !1), t.lanes = fv);
            }
            if (qt.isBackwards)
              Rn.sibling = t.child, t.child = Rn;
            else {
              var ni = qt.last;
              ni !== null ? ni.sibling = Rn : t.child = Rn, qt.last = Rn;
            }
          }
          if (qt.tail !== null) {
            var ri = qt.tail;
            qt.rendering = ri, qt.tail = ri.sibling, qt.renderingStartTime = tr(), ri.sibling = null;
            var Ha = Ao.current;
            return Un ? Ha = cb(Ha, Hp) : Ha = Yf(Ha), es(t, Ha), ri;
          }
          return ma(t), null;
        }
        case Rt:
          break;
        case qe:
        case ue: {
          O0(t);
          var eu = t.memoizedState, od = eu !== null;
          if (e !== null) {
            var mh = e.memoizedState, yl = mh !== null;
            yl !== od && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !q && (t.flags |= Xo);
          }
          return !od || (t.mode & bt) === yt ? ma(t) : $a(ml, la) && (ma(t), t.subtreeFlags & (Wn | Xt) && (t.flags |= Xo)), null;
        }
        case be:
          return null;
        case me:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function s_(e, t, a) {
      switch (Pg(t), t.tag) {
        case N: {
          var i = t.type;
          sl(i) && om(t);
          var l = t.flags;
          return l & Pr ? (t.flags = l & ~Pr | Pt, (t.mode & Ft) !== yt && Ub(t), t) : null;
        }
        case z: {
          t.stateNode, Wf(t), $g(t), db();
          var f = t.flags;
          return (f & Pr) !== _t && (f & Pt) === _t ? (t.flags = f & ~Pr | Pt, t) : null;
        }
        case V:
          return ub(t), null;
        case le: {
          Gf(t);
          var h = t.memoizedState;
          if (h !== null && h.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Hf();
          }
          var y = t.flags;
          return y & Pr ? (t.flags = y & ~Pr | Pt, (t.mode & Ft) !== yt && Ub(t), t) : null;
        }
        case Et:
          return Gf(t), null;
        case X:
          return Wf(t), null;
        case he:
          var S = t.type._context;
          return Zg(S, t), null;
        case qe:
        case ue:
          return O0(t), null;
        case be:
          return null;
        default:
          return null;
      }
    }
    function GE(e, t, a) {
      switch (Pg(t), t.tag) {
        case N: {
          var i = t.type.childContextTypes;
          i != null && om(t);
          break;
        }
        case z: {
          t.stateNode, Wf(t), $g(t), db();
          break;
        }
        case V: {
          ub(t);
          break;
        }
        case X:
          Wf(t);
          break;
        case le:
          Gf(t);
          break;
        case Et:
          Gf(t);
          break;
        case he:
          var l = t.type._context;
          Zg(l, t);
          break;
        case qe:
        case ue:
          O0(t);
          break;
      }
    }
    var qE = null;
    qE = /* @__PURE__ */ new Set();
    var Jm = !1, ya = !1, c_ = typeof WeakSet == "function" ? WeakSet : Set, pt = null, Zf = null, ed = null;
    function f_(e) {
      xl(null, function() {
        throw e;
      }), Ud();
    }
    var d_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ft)
        try {
          hl(), t.componentWillUnmount();
        } finally {
          pl(e);
        }
      else
        t.componentWillUnmount();
    };
    function QE(e, t) {
      try {
        rs(Xr, e);
      } catch (a) {
        qn(e, t, a);
      }
    }
    function h0(e, t, a) {
      try {
        d_(e, a);
      } catch (i) {
        qn(e, t, i);
      }
    }
    function p_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        qn(e, t, i);
      }
    }
    function KE(e, t) {
      try {
        JE(e);
      } catch (a) {
        qn(e, t, a);
      }
    }
    function td(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ue && Fe && e.mode & Ft)
              try {
                hl(), i = a(null);
              } finally {
                pl(e);
              }
            else
              i = a(null);
          } catch (l) {
            qn(e, t, l);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", zt(e));
        } else
          a.current = null;
    }
    function Zm(e, t, a) {
      try {
        a();
      } catch (i) {
        qn(e, t, i);
      }
    }
    var XE = !1;
    function h_(e, t) {
      Rx(e.containerInfo), pt = t, v_();
      var a = XE;
      return XE = !1, a;
    }
    function v_() {
      for (; pt !== null; ) {
        var e = pt, t = e.child;
        (e.subtreeFlags & mu) !== _t && t !== null ? (t.return = e, pt = t) : m_();
      }
    }
    function m_() {
      for (; pt !== null; ) {
        var e = pt;
        Dn(e);
        try {
          y_(e);
        } catch (a) {
          qn(e, e.return, a);
        }
        ir();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, pt = t;
          return;
        }
        pt = e.return;
      }
    }
    function y_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & di) !== _t) {
        switch (Dn(e), e.tag) {
          case k:
          case Oe:
          case Re:
            break;
          case N: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, f = e.stateNode;
              e.type === e.elementType && !uc && (f.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", zt(e) || "instance"), f.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", zt(e) || "instance"));
              var h = f.getSnapshotBeforeUpdate(e.elementType === e.type ? i : No(e.type, i), l);
              {
                var y = qE;
                h === void 0 && !y.has(e.type) && (y.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", zt(e)));
              }
              f.__reactInternalSnapshotBeforeUpdate = h;
            }
            break;
          }
          case z: {
            {
              var S = e.stateNode;
              Xx(S.containerInfo);
            }
            break;
          }
          case V:
          case ve:
          case X:
          case Le:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        ir();
      }
    }
    function zo(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var f = l.next, h = f;
        do {
          if ((h.tag & e) === e) {
            var y = h.destroy;
            h.destroy = void 0, y !== void 0 && ((e & va) !== Ri ? uv(t) : (e & Xr) !== Ri && Ii(t), (e & cl) !== Ri && ph(!0), Zm(t, a, y), (e & cl) !== Ri && ph(!1), (e & va) !== Ri ? Fc() : (e & Xr) !== Ri && Su());
          }
          h = h.next;
        } while (h !== f);
      }
    }
    function rs(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, f = l;
        do {
          if ((f.tag & e) === e) {
            (e & va) !== Ri ? el(t) : (e & Xr) !== Ri && sv(t);
            var h = f.create;
            (e & cl) !== Ri && ph(!0), f.destroy = h(), (e & cl) !== Ri && ph(!1), (e & va) !== Ri ? Pc() : (e & Xr) !== Ri && _s();
            {
              var y = f.destroy;
              if (y !== void 0 && typeof y != "function") {
                var S = void 0;
                (f.tag & Xr) !== _t ? S = "useLayoutEffect" : (f.tag & cl) !== _t ? S = "useInsertionEffect" : S = "useEffect";
                var x = void 0;
                y === null ? x = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? x = `

It looks like you wrote ` + S + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + S + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : x = " You returned: " + y, g("%s must not return anything besides a function, which is used for clean-up.%s", S, x);
              }
            }
          }
          f = f.next;
        } while (f !== l);
      }
    }
    function g_(e, t) {
      if ((t.flags & Xt) !== _t)
        switch (t.tag) {
          case xe: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, f = i.onPostCommit, h = pE(), y = t.alternate === null ? "mount" : "update";
            dE() && (y = "nested-update"), typeof f == "function" && f(l, y, a, h);
            var S = t.return;
            e: for (; S !== null; ) {
              switch (S.tag) {
                case z:
                  var x = S.stateNode;
                  x.passiveEffectDuration += a;
                  break e;
                case xe:
                  var R = S.stateNode;
                  R.passiveEffectDuration += a;
                  break e;
              }
              S = S.return;
            }
            break;
          }
        }
    }
    function b_(e, t, a, i) {
      if ((a.flags & ia) !== _t)
        switch (a.tag) {
          case k:
          case Oe:
          case Re: {
            if (!ya)
              if (a.mode & Ft)
                try {
                  hl(), rs(Xr | Kr, a);
                } finally {
                  pl(a);
                }
              else
                rs(Xr | Kr, a);
            break;
          }
          case N: {
            var l = a.stateNode;
            if (a.flags & Xt && !ya)
              if (t === null)
                if (a.type === a.elementType && !uc && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", zt(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", zt(a) || "instance")), a.mode & Ft)
                  try {
                    hl(), l.componentDidMount();
                  } finally {
                    pl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var f = a.elementType === a.type ? t.memoizedProps : No(a.type, t.memoizedProps), h = t.memoizedState;
                if (a.type === a.elementType && !uc && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", zt(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", zt(a) || "instance")), a.mode & Ft)
                  try {
                    hl(), l.componentDidUpdate(f, h, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    pl(a);
                  }
                else
                  l.componentDidUpdate(f, h, l.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !uc && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", zt(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", zt(a) || "instance")), UC(a, y, l));
            break;
          }
          case z: {
            var S = a.updateQueue;
            if (S !== null) {
              var x = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case V:
                    x = a.child.stateNode;
                    break;
                  case N:
                    x = a.child.stateNode;
                    break;
                }
              UC(a, S, x);
            }
            break;
          }
          case V: {
            var R = a.stateNode;
            if (t === null && a.flags & Xt) {
              var F = a.type, j = a.memoizedProps;
              Ux(R, F, j);
            }
            break;
          }
          case ve:
            break;
          case X:
            break;
          case xe: {
            {
              var J = a.memoizedProps, te = J.onCommit, ie = J.onRender, Qe = a.stateNode.effectDuration, Ot = pE(), St = t === null ? "mount" : "update";
              dE() && (St = "nested-update"), typeof ie == "function" && ie(a.memoizedProps.id, St, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ot);
              {
                typeof te == "function" && te(a.memoizedProps.id, St, Qe, Ot), mD(a);
                var bn = a.return;
                e: for (; bn !== null; ) {
                  switch (bn.tag) {
                    case z:
                      var dn = bn.stateNode;
                      dn.effectDuration += Qe;
                      break e;
                    case xe:
                      var W = bn.stateNode;
                      W.effectDuration += Qe;
                      break e;
                  }
                  bn = bn.return;
                }
              }
            }
            break;
          }
          case le: {
            k_(e, a);
            break;
          }
          case Et:
          case Le:
          case Rt:
          case qe:
          case ue:
          case me:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      ya || a.flags & ka && JE(a);
    }
    function S_(e) {
      switch (e.tag) {
        case k:
        case Oe:
        case Re: {
          if (e.mode & Ft)
            try {
              hl(), QE(e, e.return);
            } finally {
              pl(e);
            }
          else
            QE(e, e.return);
          break;
        }
        case N: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && p_(e, e.return, t), KE(e, e.return);
          break;
        }
        case V: {
          KE(e, e.return);
          break;
        }
      }
    }
    function C_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === V) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? Gx(l) : Qx(i.stateNode, i.memoizedProps);
            } catch (h) {
              qn(e, e.return, h);
            }
          }
        } else if (i.tag === ve) {
          if (a === null)
            try {
              var f = i.stateNode;
              t ? qx(f) : Kx(f, i.memoizedProps);
            } catch (h) {
              qn(e, e.return, h);
            }
        } else if (!((i.tag === qe || i.tag === ue) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function JE(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case V:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & Ft)
            try {
              hl(), l = t(i);
            } finally {
              pl(e);
            }
          else
            l = t(i);
          typeof l == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", zt(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", zt(e)), t.current = i;
      }
    }
    function E_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function ZE(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, ZE(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === V) {
          var a = e.stateNode;
          a !== null && _R(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function w_(e) {
      for (var t = e.return; t !== null; ) {
        if (ew(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ew(e) {
      return e.tag === V || e.tag === z || e.tag === X;
    }
    function tw(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || ew(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== V && t.tag !== ve && t.tag !== Xe; ) {
          if (t.flags & Wn || t.child === null || t.tag === X)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Wn))
          return t.stateNode;
      }
    }
    function T_(e) {
      var t = w_(e);
      switch (t.tag) {
        case V: {
          var a = t.stateNode;
          t.flags & On && (rC(a), t.flags &= ~On);
          var i = tw(e);
          m0(e, i, a);
          break;
        }
        case z:
        case X: {
          var l = t.stateNode.containerInfo, f = tw(e);
          v0(e, f, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function v0(e, t, a) {
      var i = e.tag, l = i === V || i === ve;
      if (l) {
        var f = e.stateNode;
        t ? Vx(a, f, t) : Hx(a, f);
      } else if (i !== X) {
        var h = e.child;
        if (h !== null) {
          v0(h, t, a);
          for (var y = h.sibling; y !== null; )
            v0(y, t, a), y = y.sibling;
        }
      }
    }
    function m0(e, t, a) {
      var i = e.tag, l = i === V || i === ve;
      if (l) {
        var f = e.stateNode;
        t ? Ix(a, f, t) : Fx(a, f);
      } else if (i !== X) {
        var h = e.child;
        if (h !== null) {
          m0(h, t, a);
          for (var y = h.sibling; y !== null; )
            m0(y, t, a), y = y.sibling;
        }
      }
    }
    var ga = null, Uo = !1;
    function x_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case V: {
              ga = i.stateNode, Uo = !1;
              break e;
            }
            case z: {
              ga = i.stateNode.containerInfo, Uo = !0;
              break e;
            }
            case X: {
              ga = i.stateNode.containerInfo, Uo = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (ga === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        nw(e, t, a), ga = null, Uo = !1;
      }
      E_(a);
    }
    function as(e, t, a) {
      for (var i = a.child; i !== null; )
        nw(e, t, i), i = i.sibling;
    }
    function nw(e, t, a) {
      switch (_l(a), a.tag) {
        case V:
          ya || td(a, t);
        case ve: {
          {
            var i = ga, l = Uo;
            ga = null, as(e, t, a), ga = i, Uo = l, ga !== null && (Uo ? Wx(ga, a.stateNode) : Bx(ga, a.stateNode));
          }
          return;
        }
        case Xe: {
          ga !== null && (Uo ? Yx(ga, a.stateNode) : kg(ga, a.stateNode));
          return;
        }
        case X: {
          {
            var f = ga, h = Uo;
            ga = a.stateNode.containerInfo, Uo = !0, as(e, t, a), ga = f, Uo = h;
          }
          return;
        }
        case k:
        case Oe:
        case Ve:
        case Re: {
          if (!ya) {
            var y = a.updateQueue;
            if (y !== null) {
              var S = y.lastEffect;
              if (S !== null) {
                var x = S.next, R = x;
                do {
                  var F = R, j = F.destroy, J = F.tag;
                  j !== void 0 && ((J & cl) !== Ri ? Zm(a, t, j) : (J & Xr) !== Ri && (Ii(a), a.mode & Ft ? (hl(), Zm(a, t, j), pl(a)) : Zm(a, t, j), Su())), R = R.next;
                } while (R !== x);
              }
            }
          }
          as(e, t, a);
          return;
        }
        case N: {
          if (!ya) {
            td(a, t);
            var te = a.stateNode;
            typeof te.componentWillUnmount == "function" && h0(a, t, te);
          }
          as(e, t, a);
          return;
        }
        case Rt: {
          as(e, t, a);
          return;
        }
        case qe: {
          if (
            // TODO: Remove this dead flag
            a.mode & bt
          ) {
            var ie = ya;
            ya = ie || a.memoizedState !== null, as(e, t, a), ya = ie;
          } else
            as(e, t, a);
          break;
        }
        default: {
          as(e, t, a);
          return;
        }
      }
    }
    function R_(e) {
      e.memoizedState;
    }
    function k_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var f = l.dehydrated;
            f !== null && fR(f);
          }
        }
      }
    }
    function rw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new c_()), t.forEach(function(i) {
          var l = wD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ka)
              if (Zf !== null && ed !== null)
                dh(ed, Zf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function __(e, t, a) {
      Zf = a, ed = e, Dn(t), aw(t, e), Dn(t), Zf = null, ed = null;
    }
    function jo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var f = i[l];
          try {
            x_(e, t, f);
          } catch (S) {
            qn(f, t, S);
          }
        }
      var h = yc();
      if (t.subtreeFlags & Oa)
        for (var y = t.child; y !== null; )
          Dn(y), aw(y, e), y = y.sibling;
      Dn(h);
    }
    function aw(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case k:
        case Oe:
        case Ve:
        case Re: {
          if (jo(t, e), vl(e), l & Xt) {
            try {
              zo(cl | Kr, e, e.return), rs(cl | Kr, e);
            } catch (jt) {
              qn(e, e.return, jt);
            }
            if (e.mode & Ft) {
              try {
                hl(), zo(Xr | Kr, e, e.return);
              } catch (jt) {
                qn(e, e.return, jt);
              }
              pl(e);
            } else
              try {
                zo(Xr | Kr, e, e.return);
              } catch (jt) {
                qn(e, e.return, jt);
              }
          }
          return;
        }
        case N: {
          jo(t, e), vl(e), l & ka && i !== null && td(i, i.return);
          return;
        }
        case V: {
          jo(t, e), vl(e), l & ka && i !== null && td(i, i.return);
          {
            if (e.flags & On) {
              var f = e.stateNode;
              try {
                rC(f);
              } catch (jt) {
                qn(e, e.return, jt);
              }
            }
            if (l & Xt) {
              var h = e.stateNode;
              if (h != null) {
                var y = e.memoizedProps, S = i !== null ? i.memoizedProps : y, x = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    jx(h, R, x, S, y, e);
                  } catch (jt) {
                    qn(e, e.return, jt);
                  }
              }
            }
          }
          return;
        }
        case ve: {
          if (jo(t, e), vl(e), l & Xt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var F = e.stateNode, j = e.memoizedProps, J = i !== null ? i.memoizedProps : j;
            try {
              Px(F, J, j);
            } catch (jt) {
              qn(e, e.return, jt);
            }
          }
          return;
        }
        case z: {
          if (jo(t, e), vl(e), l & Xt && i !== null) {
            var te = i.memoizedState;
            if (te.isDehydrated)
              try {
                cR(t.containerInfo);
              } catch (jt) {
                qn(e, e.return, jt);
              }
          }
          return;
        }
        case X: {
          jo(t, e), vl(e);
          return;
        }
        case le: {
          jo(t, e), vl(e);
          var ie = e.child;
          if (ie.flags & Xo) {
            var Qe = ie.stateNode, Ot = ie.memoizedState, St = Ot !== null;
            if (Qe.isHidden = St, St) {
              var bn = ie.alternate !== null && ie.alternate.memoizedState !== null;
              bn || uD();
            }
          }
          if (l & Xt) {
            try {
              R_(e);
            } catch (jt) {
              qn(e, e.return, jt);
            }
            rw(e);
          }
          return;
        }
        case qe: {
          var dn = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & bt
          ) {
            var W = ya;
            ya = W || dn, jo(t, e), ya = W;
          } else
            jo(t, e);
          if (vl(e), l & Xo) {
            var oe = e.stateNode, Y = e.memoizedState, De = Y !== null, rt = e;
            if (oe.isHidden = De, De && !dn && (rt.mode & bt) !== yt) {
              pt = rt;
              for (var Ze = rt.child; Ze !== null; )
                pt = Ze, O_(Ze), Ze = Ze.sibling;
            }
            C_(rt, De);
          }
          return;
        }
        case Et: {
          jo(t, e), vl(e), l & Xt && rw(e);
          return;
        }
        case Rt:
          return;
        default: {
          jo(t, e), vl(e);
          return;
        }
      }
    }
    function vl(e) {
      var t = e.flags;
      if (t & Wn) {
        try {
          T_(e);
        } catch (a) {
          qn(e, e.return, a);
        }
        e.flags &= ~Wn;
      }
      t & pi && (e.flags &= ~pi);
    }
    function D_(e, t, a) {
      Zf = a, ed = t, pt = e, iw(e, t, a), Zf = null, ed = null;
    }
    function iw(e, t, a) {
      for (var i = (e.mode & bt) !== yt; pt !== null; ) {
        var l = pt, f = l.child;
        if (l.tag === qe && i) {
          var h = l.memoizedState !== null, y = h || Jm;
          if (y) {
            y0(e, t, a);
            continue;
          } else {
            var S = l.alternate, x = S !== null && S.memoizedState !== null, R = x || ya, F = Jm, j = ya;
            Jm = y, ya = R, ya && !j && (pt = l, L_(l));
            for (var J = f; J !== null; )
              pt = J, iw(
                J,
                // New root; bubble back up to here and stop.
                t,
                a
              ), J = J.sibling;
            pt = l, Jm = F, ya = j, y0(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & ia) !== _t && f !== null ? (f.return = l, pt = f) : y0(e, t, a);
      }
    }
    function y0(e, t, a) {
      for (; pt !== null; ) {
        var i = pt;
        if ((i.flags & ia) !== _t) {
          var l = i.alternate;
          Dn(i);
          try {
            b_(t, l, i, a);
          } catch (h) {
            qn(i, i.return, h);
          }
          ir();
        }
        if (i === e) {
          pt = null;
          return;
        }
        var f = i.sibling;
        if (f !== null) {
          f.return = i.return, pt = f;
          return;
        }
        pt = i.return;
      }
    }
    function O_(e) {
      for (; pt !== null; ) {
        var t = pt, a = t.child;
        switch (t.tag) {
          case k:
          case Oe:
          case Ve:
          case Re: {
            if (t.mode & Ft)
              try {
                hl(), zo(Xr, t, t.return);
              } finally {
                pl(t);
              }
            else
              zo(Xr, t, t.return);
            break;
          }
          case N: {
            td(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && h0(t, t.return, i);
            break;
          }
          case V: {
            td(t, t.return);
            break;
          }
          case qe: {
            var l = t.memoizedState !== null;
            if (l) {
              ow(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, pt = a) : ow(e);
      }
    }
    function ow(e) {
      for (; pt !== null; ) {
        var t = pt;
        if (t === e) {
          pt = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, pt = a;
          return;
        }
        pt = t.return;
      }
    }
    function L_(e) {
      for (; pt !== null; ) {
        var t = pt, a = t.child;
        if (t.tag === qe) {
          var i = t.memoizedState !== null;
          if (i) {
            lw(e);
            continue;
          }
        }
        a !== null ? (a.return = t, pt = a) : lw(e);
      }
    }
    function lw(e) {
      for (; pt !== null; ) {
        var t = pt;
        Dn(t);
        try {
          S_(t);
        } catch (i) {
          qn(t, t.return, i);
        }
        if (ir(), t === e) {
          pt = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, pt = a;
          return;
        }
        pt = t.return;
      }
    }
    function A_(e, t, a, i) {
      pt = t, M_(t, e, a, i);
    }
    function M_(e, t, a, i) {
      for (; pt !== null; ) {
        var l = pt, f = l.child;
        (l.subtreeFlags & hi) !== _t && f !== null ? (f.return = l, pt = f) : N_(e, t, a, i);
      }
    }
    function N_(e, t, a, i) {
      for (; pt !== null; ) {
        var l = pt;
        if ((l.flags & Kn) !== _t) {
          Dn(l);
          try {
            $_(t, l, a, i);
          } catch (h) {
            qn(l, l.return, h);
          }
          ir();
        }
        if (l === e) {
          pt = null;
          return;
        }
        var f = l.sibling;
        if (f !== null) {
          f.return = l.return, pt = f;
          return;
        }
        pt = l.return;
      }
    }
    function $_(e, t, a, i) {
      switch (t.tag) {
        case k:
        case Oe:
        case Re: {
          if (t.mode & Ft) {
            zb();
            try {
              rs(va | Kr, t);
            } finally {
              $b(t);
            }
          } else
            rs(va | Kr, t);
          break;
        }
      }
    }
    function z_(e) {
      pt = e, U_();
    }
    function U_() {
      for (; pt !== null; ) {
        var e = pt, t = e.child;
        if ((pt.flags & _n) !== _t) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              pt = l, F_(l, e);
            }
            {
              var f = e.alternate;
              if (f !== null) {
                var h = f.child;
                if (h !== null) {
                  f.child = null;
                  do {
                    var y = h.sibling;
                    h.sibling = null, h = y;
                  } while (h !== null);
                }
              }
            }
            pt = e;
          }
        }
        (e.subtreeFlags & hi) !== _t && t !== null ? (t.return = e, pt = t) : j_();
      }
    }
    function j_() {
      for (; pt !== null; ) {
        var e = pt;
        (e.flags & Kn) !== _t && (Dn(e), P_(e), ir());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, pt = t;
          return;
        }
        pt = e.return;
      }
    }
    function P_(e) {
      switch (e.tag) {
        case k:
        case Oe:
        case Re: {
          e.mode & Ft ? (zb(), zo(va | Kr, e, e.return), $b(e)) : zo(va | Kr, e, e.return);
          break;
        }
      }
    }
    function F_(e, t) {
      for (; pt !== null; ) {
        var a = pt;
        Dn(a), I_(a, t), ir();
        var i = a.child;
        i !== null ? (i.return = a, pt = i) : H_(e);
      }
    }
    function H_(e) {
      for (; pt !== null; ) {
        var t = pt, a = t.sibling, i = t.return;
        if (ZE(t), t === e) {
          pt = null;
          return;
        }
        if (a !== null) {
          a.return = i, pt = a;
          return;
        }
        pt = i;
      }
    }
    function I_(e, t) {
      switch (e.tag) {
        case k:
        case Oe:
        case Re: {
          e.mode & Ft ? (zb(), zo(va, e, t), $b(e)) : zo(va, e, t);
          break;
        }
      }
    }
    function V_(e) {
      switch (e.tag) {
        case k:
        case Oe:
        case Re: {
          try {
            rs(Xr | Kr, e);
          } catch (a) {
            qn(e, e.return, a);
          }
          break;
        }
        case N: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            qn(e, e.return, a);
          }
          break;
        }
      }
    }
    function B_(e) {
      switch (e.tag) {
        case k:
        case Oe:
        case Re: {
          try {
            rs(va | Kr, e);
          } catch (t) {
            qn(e, e.return, t);
          }
          break;
        }
      }
    }
    function W_(e) {
      switch (e.tag) {
        case k:
        case Oe:
        case Re: {
          try {
            zo(Xr | Kr, e, e.return);
          } catch (a) {
            qn(e, e.return, a);
          }
          break;
        }
        case N: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && h0(e, e.return, t);
          break;
        }
      }
    }
    function Y_(e) {
      switch (e.tag) {
        case k:
        case Oe:
        case Re:
          try {
            zo(va | Kr, e, e.return);
          } catch (t) {
            qn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var th = Symbol.for;
      th("selector.component"), th("selector.has_pseudo_class"), th("selector.role"), th("selector.test_id"), th("selector.text");
    }
    var G_ = [];
    function q_() {
      G_.forEach(function(e) {
        return e();
      });
    }
    var Q_ = d.ReactCurrentActQueue;
    function K_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function uw() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Q_.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var X_ = Math.ceil, g0 = d.ReactCurrentDispatcher, b0 = d.ReactCurrentOwner, ba = d.ReactCurrentBatchConfig, Po = d.ReactCurrentActQueue, ea = (
      /*             */
      0
    ), sw = (
      /*               */
      1
    ), Sa = (
      /*                */
      2
    ), lo = (
      /*                */
      4
    ), Kl = 0, nh = 1, sc = 2, ey = 3, rh = 4, cw = 5, S0 = 6, gn = ea, ei = null, mr = null, ta = ge, ml = ge, C0 = qu(ge), na = Kl, ah = null, ty = ge, ih = ge, ny = ge, oh = null, ki = null, E0 = 0, fw = 500, dw = 1 / 0, J_ = 500, Xl = null;
    function lh() {
      dw = tr() + J_;
    }
    function pw() {
      return dw;
    }
    var ry = !1, w0 = null, nd = null, cc = !1, is = null, uh = ge, T0 = [], x0 = null, Z_ = 50, sh = 0, R0 = null, k0 = !1, ay = !1, eD = 50, rd = 0, iy = null, ch = Vn, oy = ge, hw = !1;
    function ly() {
      return ei;
    }
    function ti() {
      return (gn & (Sa | lo)) !== ea ? tr() : (ch !== Vn || (ch = tr()), ch);
    }
    function os(e) {
      var t = e.mode;
      if ((t & bt) === yt)
        return xt;
      if ((gn & Sa) !== ea && ta !== ge)
        return Du(ta);
      var a = QR() !== qR;
      if (a) {
        if (ba.transition !== null) {
          var i = ba.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return oy === Sr && (oy = bv()), oy;
      }
      var l = bi();
      if (l !== Sr)
        return l;
      var f = Mx();
      return f;
    }
    function tD(e) {
      var t = e.mode;
      return (t & bt) === yt ? xt : Na();
    }
    function ra(e, t, a, i) {
      xD(), hw && g("useInsertionEffect must not schedule updates."), k0 && (ay = !0), zl(e, a, i), (gn & Sa) !== ge && e === ei ? _D(t) : (Ka && cf(e, t, a), DD(t), e === ei && ((gn & Sa) === ea && (ih = Qt(ih, a)), na === rh && ls(e, ta)), _i(e, i), a === xt && gn === ea && (t.mode & bt) === yt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Po.isBatchingLegacy && (lh(), hC()));
    }
    function nD(e, t, a) {
      var i = e.current;
      i.lanes = t, zl(e, t, a), _i(e, a);
    }
    function rD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (gn & Sa) !== ea
      );
    }
    function _i(e, t) {
      var a = e.callbackNode;
      hv(e, t);
      var i = Nl(e, e === ei ? ta : ge);
      if (i === ge) {
        a !== null && Ow(a), e.callbackNode = null, e.callbackPriority = Sr;
        return;
      }
      var l = pr(i), f = e.callbackPriority;
      if (f === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Po.current !== null && a !== N0)) {
        a == null && f !== xt && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Ow(a);
      var h;
      if (l === xt)
        e.tag === Qu ? (Po.isBatchingLegacy !== null && (Po.didScheduleLegacyUpdate = !0), LR(yw.bind(null, e))) : pC(yw.bind(null, e)), Po.current !== null ? Po.current.push(Ku) : $x(function() {
          (gn & (Sa | lo)) === ea && Ku();
        }), h = null;
      else {
        var y;
        switch (Qr(i)) {
          case hr:
            y = zc;
            break;
          case xo:
            y = kl;
            break;
          case Ji:
            y = Xi;
            break;
          case Ou:
            y = Uc;
            break;
          default:
            y = Xi;
            break;
        }
        h = $0(y, vw.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = h;
    }
    function vw(e, t) {
      if (Ck(), ch = Vn, oy = ge, (gn & (Sa | lo)) !== ea)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Zl();
      if (i && e.callbackNode !== a)
        return null;
      var l = Nl(e, e === ei ? ta : ge);
      if (l === ge)
        return null;
      var f = !zs(e, l) && !gv(e, l) && !t, h = f ? pD(e, l) : sy(e, l);
      if (h !== Kl) {
        if (h === sc) {
          var y = nl(e);
          y !== ge && (l = y, h = _0(e, y));
        }
        if (h === nh) {
          var S = ah;
          throw fc(e, ge), ls(e, l), _i(e, tr()), S;
        }
        if (h === S0)
          ls(e, l);
        else {
          var x = !zs(e, l), R = e.current.alternate;
          if (x && !iD(R)) {
            if (h = sy(e, l), h === sc) {
              var F = nl(e);
              F !== ge && (l = F, h = _0(e, F));
            }
            if (h === nh) {
              var j = ah;
              throw fc(e, ge), ls(e, l), _i(e, tr()), j;
            }
          }
          e.finishedWork = R, e.finishedLanes = l, aD(e, h, l);
        }
      }
      return _i(e, tr()), e.callbackNode === a ? vw.bind(null, e) : null;
    }
    function _0(e, t) {
      var a = oh;
      if (ff(e)) {
        var i = fc(e, t);
        i.flags |= or, TR(e.containerInfo);
      }
      var l = sy(e, t);
      if (l !== sc) {
        var f = ki;
        ki = a, f !== null && mw(f);
      }
      return l;
    }
    function mw(e) {
      ki === null ? ki = e : ki.push.apply(ki, e);
    }
    function aD(e, t, a) {
      switch (t) {
        case Kl:
        case nh:
          throw new Error("Root did not complete. This is a bug in React.");
        case sc: {
          dc(e, ki, Xl);
          break;
        }
        case ey: {
          if (ls(e, a), vv(a) && // do not delay if we're inside an act() scope
          !Lw()) {
            var i = E0 + fw - tr();
            if (i > 10) {
              var l = Nl(e, ge);
              if (l !== ge)
                break;
              var f = e.suspendedLanes;
              if (!$l(f, a)) {
                ti(), uf(e, f);
                break;
              }
              e.timeoutHandle = xg(dc.bind(null, e, ki, Xl), i);
              break;
            }
          }
          dc(e, ki, Xl);
          break;
        }
        case rh: {
          if (ls(e, a), yv(a))
            break;
          if (!Lw()) {
            var h = dv(e, a), y = h, S = tr() - y, x = TD(S) - S;
            if (x > 10) {
              e.timeoutHandle = xg(dc.bind(null, e, ki, Xl), x);
              break;
            }
          }
          dc(e, ki, Xl);
          break;
        }
        case cw: {
          dc(e, ki, Xl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function iD(e) {
      for (var t = e; ; ) {
        if (t.flags & Rs) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var f = i[l], h = f.getSnapshot, y = f.value;
                try {
                  if (!dt(h(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var S = t.child;
        if (t.subtreeFlags & Rs && S !== null) {
          S.return = t, t = S;
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
    function ls(e, t) {
      t = Us(t, ny), t = Us(t, ih), Cv(e, t);
    }
    function yw(e) {
      if (Ek(), (gn & (Sa | lo)) !== ea)
        throw new Error("Should not already be working.");
      Zl();
      var t = Nl(e, ge);
      if (!$a(t, xt))
        return _i(e, tr()), null;
      var a = sy(e, t);
      if (e.tag !== Qu && a === sc) {
        var i = nl(e);
        i !== ge && (t = i, a = _0(e, i));
      }
      if (a === nh) {
        var l = ah;
        throw fc(e, ge), ls(e, t), _i(e, tr()), l;
      }
      if (a === S0)
        throw new Error("Root did not complete. This is a bug in React.");
      var f = e.current.alternate;
      return e.finishedWork = f, e.finishedLanes = t, dc(e, ki, Xl), _i(e, tr()), null;
    }
    function oD(e, t) {
      t !== ge && (ep(e, Qt(t, xt)), _i(e, tr()), (gn & (Sa | lo)) === ea && (lh(), Ku()));
    }
    function D0(e, t) {
      var a = gn;
      gn |= sw;
      try {
        return e(t);
      } finally {
        gn = a, gn === ea && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Po.isBatchingLegacy && (lh(), hC());
      }
    }
    function lD(e, t, a, i, l) {
      var f = bi(), h = ba.transition;
      try {
        return ba.transition = null, lr(hr), e(t, a, i, l);
      } finally {
        lr(f), ba.transition = h, gn === ea && lh();
      }
    }
    function Jl(e) {
      is !== null && is.tag === Qu && (gn & (Sa | lo)) === ea && Zl();
      var t = gn;
      gn |= sw;
      var a = ba.transition, i = bi();
      try {
        return ba.transition = null, lr(hr), e ? e() : void 0;
      } finally {
        lr(i), ba.transition = a, gn = t, (gn & (Sa | lo)) === ea && Ku();
      }
    }
    function gw() {
      return (gn & (Sa | lo)) !== ea;
    }
    function uy(e, t) {
      ja(C0, ml, e), ml = Qt(ml, t);
    }
    function O0(e) {
      ml = C0.current, Ua(C0, e);
    }
    function fc(e, t) {
      e.finishedWork = null, e.finishedLanes = ge;
      var a = e.timeoutHandle;
      if (a !== Rg && (e.timeoutHandle = Rg, Nx(a)), mr !== null)
        for (var i = mr.return; i !== null; ) {
          var l = i.alternate;
          GE(l, i), i = i.return;
        }
      ei = e;
      var f = pc(e.current, null);
      return mr = f, ta = ml = t, na = Kl, ah = null, ty = ge, ih = ge, ny = ge, oh = null, ki = null, nk(), Lo.discardPendingWarnings(), f;
    }
    function bw(e, t) {
      do {
        var a = mr;
        try {
          if (gm(), VC(), ir(), b0.current = null, a === null || a.return === null) {
            na = nh, ah = t, mr = null;
            return;
          }
          if (Ue && a.mode & Ft && Gm(a, !0), _)
            if (Aa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Dl(a, i, ta);
            } else
              Ds(a, t, ta);
          Lk(e, a.return, a, t, ta), ww(a);
        } catch (l) {
          t = l, mr === a && a !== null ? (a = a.return, mr = a) : a = mr;
          continue;
        }
        return;
      } while (!0);
    }
    function Sw() {
      var e = g0.current;
      return g0.current = Im, e === null ? Im : e;
    }
    function Cw(e) {
      g0.current = e;
    }
    function uD() {
      E0 = tr();
    }
    function fh(e) {
      ty = Qt(e, ty);
    }
    function sD() {
      na === Kl && (na = ey);
    }
    function L0() {
      (na === Kl || na === ey || na === sc) && (na = rh), ei !== null && ($s(ty) || $s(ih)) && ls(ei, ta);
    }
    function cD(e) {
      na !== rh && (na = sc), oh === null ? oh = [e] : oh.push(e);
    }
    function fD() {
      return na === Kl;
    }
    function sy(e, t) {
      var a = gn;
      gn |= Sa;
      var i = Sw();
      if (ei !== e || ta !== t) {
        if (Ka) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (dh(e, ta), l.clear()), tp(e, t);
        }
        Xl = Ps(), fc(e, t);
      }
      Xn(t);
      do
        try {
          dD();
          break;
        } catch (f) {
          bw(e, f);
        }
      while (!0);
      if (gm(), gn = a, Cw(i), mr !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ic(), ei = null, ta = ge, na;
    }
    function dD() {
      for (; mr !== null; )
        Ew(mr);
    }
    function pD(e, t) {
      var a = gn;
      gn |= Sa;
      var i = Sw();
      if (ei !== e || ta !== t) {
        if (Ka) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (dh(e, ta), l.clear()), tp(e, t);
        }
        Xl = Ps(), lh(), fc(e, t);
      }
      Xn(t);
      do
        try {
          hD();
          break;
        } catch (f) {
          bw(e, f);
        }
      while (!0);
      return gm(), Cw(i), gn = a, mr !== null ? (Hc(), Kl) : (Ic(), ei = null, ta = ge, na);
    }
    function hD() {
      for (; mr !== null && !$c(); )
        Ew(mr);
    }
    function Ew(e) {
      var t = e.alternate;
      Dn(e);
      var a;
      (e.mode & Ft) !== yt ? (Nb(e), a = A0(t, e, ml), Gm(e, !0)) : a = A0(t, e, ml), ir(), e.memoizedProps = e.pendingProps, a === null ? ww(e) : mr = a, b0.current = null;
    }
    function ww(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ga) === _t) {
          Dn(t);
          var l = void 0;
          if ((t.mode & Ft) === yt ? l = YE(a, t, ml) : (Nb(t), l = YE(a, t, ml), Gm(t, !1)), ir(), l !== null) {
            mr = l;
            return;
          }
        } else {
          var f = s_(a, t);
          if (f !== null) {
            f.flags &= tv, mr = f;
            return;
          }
          if ((t.mode & Ft) !== yt) {
            Gm(t, !1);
            for (var h = t.actualDuration, y = t.child; y !== null; )
              h += y.actualDuration, y = y.sibling;
            t.actualDuration = h;
          }
          if (i !== null)
            i.flags |= Ga, i.subtreeFlags = _t, i.deletions = null;
          else {
            na = S0, mr = null;
            return;
          }
        }
        var S = t.sibling;
        if (S !== null) {
          mr = S;
          return;
        }
        t = i, mr = t;
      } while (t !== null);
      na === Kl && (na = cw);
    }
    function dc(e, t, a) {
      var i = bi(), l = ba.transition;
      try {
        ba.transition = null, lr(hr), vD(e, t, a, i);
      } finally {
        ba.transition = l, lr(i);
      }
      return null;
    }
    function vD(e, t, a, i) {
      do
        Zl();
      while (is !== null);
      if (RD(), (gn & (Sa | lo)) !== ea)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, f = e.finishedLanes;
      if (Zo(f), l === null)
        return jc(), null;
      if (f === ge && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ge, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Sr;
      var h = Qt(l.lanes, l.childLanes);
      sf(e, h), e === ei && (ei = null, mr = null, ta = ge), ((l.subtreeFlags & hi) !== _t || (l.flags & hi) !== _t) && (cc || (cc = !0, x0 = a, $0(Xi, function() {
        return Zl(), null;
      })));
      var y = (l.subtreeFlags & (mu | Oa | ia | hi)) !== _t, S = (l.flags & (mu | Oa | ia | hi)) !== _t;
      if (y || S) {
        var x = ba.transition;
        ba.transition = null;
        var R = bi();
        lr(hr);
        var F = gn;
        gn |= lo, b0.current = null, h_(e, l), hE(), __(e, l, f), kx(e.containerInfo), e.current = l, Yd(f), D_(l, e, f), Cu(), av(), gn = F, lr(R), ba.transition = x;
      } else
        e.current = l, hE();
      var j = cc;
      if (cc ? (cc = !1, is = e, uh = f) : (rd = 0, iy = null), h = e.pendingLanes, h === ge && (nd = null), j || kw(e.current, !1), gu(l.stateNode, i), Ka && e.memoizedUpdaters.clear(), q_(), _i(e, tr()), t !== null)
        for (var J = e.onRecoverableError, te = 0; te < t.length; te++) {
          var ie = t[te], Qe = ie.stack, Ot = ie.digest;
          J(ie.value, {
            componentStack: Qe,
            digest: Ot
          });
        }
      if (ry) {
        ry = !1;
        var St = w0;
        throw w0 = null, St;
      }
      return $a(uh, xt) && e.tag !== Qu && Zl(), h = e.pendingLanes, $a(h, xt) ? (Sk(), e === R0 ? sh++ : (sh = 0, R0 = e)) : sh = 0, Ku(), jc(), null;
    }
    function Zl() {
      if (is !== null) {
        var e = Qr(uh), t = Ky(Ji, e), a = ba.transition, i = bi();
        try {
          return ba.transition = null, lr(t), yD();
        } finally {
          lr(i), ba.transition = a;
        }
      }
      return !1;
    }
    function mD(e) {
      T0.push(e), cc || (cc = !0, $0(Xi, function() {
        return Zl(), null;
      }));
    }
    function yD() {
      if (is === null)
        return !1;
      var e = x0;
      x0 = null;
      var t = is, a = uh;
      if (is = null, uh = ge, (gn & (Sa | lo)) !== ea)
        throw new Error("Cannot flush passive effects while already rendering.");
      k0 = !0, ay = !1, cv(a);
      var i = gn;
      gn |= lo, z_(t.current), A_(t, t.current, a, e);
      {
        var l = T0;
        T0 = [];
        for (var f = 0; f < l.length; f++) {
          var h = l[f];
          g_(t, h);
        }
      }
      Gd(), kw(t.current, !0), gn = i, Ku(), ay ? t === iy ? rd++ : (rd = 0, iy = t) : rd = 0, k0 = !1, ay = !1, yi(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Tw(e) {
      return nd !== null && nd.has(e);
    }
    function gD(e) {
      nd === null ? nd = /* @__PURE__ */ new Set([e]) : nd.add(e);
    }
    function bD(e) {
      ry || (ry = !0, w0 = e);
    }
    var SD = bD;
    function xw(e, t, a) {
      var i = lc(a, t), l = EE(e, i, xt), f = Ju(e, l, xt), h = ti();
      f !== null && (zl(f, xt, h), _i(f, h));
    }
    function qn(e, t, a) {
      if (f_(a), ph(!1), e.tag === z) {
        xw(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === z) {
          xw(i, e, a);
          return;
        } else if (i.tag === N) {
          var l = i.type, f = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && !Tw(f)) {
            var h = lc(a, e), y = Jb(i, h, xt), S = Ju(i, y, xt), x = ti();
            S !== null && (zl(S, xt, x), _i(S, x));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function CD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = ti();
      uf(e, a), OD(e), ei === e && $l(ta, a) && (na === rh || na === ey && vv(ta) && tr() - E0 < fw ? fc(e, ge) : ny = Qt(ny, a)), _i(e, l);
    }
    function Rw(e, t) {
      t === Sr && (t = tD(e));
      var a = ti(), i = xi(e, t);
      i !== null && (zl(i, t, a), _i(i, a));
    }
    function ED(e) {
      var t = e.memoizedState, a = Sr;
      t !== null && (a = t.retryLane), Rw(e, a);
    }
    function wD(e, t) {
      var a = Sr, i;
      switch (e.tag) {
        case le:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case Et:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), Rw(e, a);
    }
    function TD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : X_(e / 1960) * 1960;
    }
    function xD() {
      if (sh > Z_)
        throw sh = 0, R0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      rd > eD && (rd = 0, iy = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function RD() {
      Lo.flushLegacyContextWarning(), Lo.flushPendingUnsafeLifecycleWarnings();
    }
    function kw(e, t) {
      Dn(e), cy(e, Da, W_), t && cy(e, Rl, Y_), cy(e, Da, V_), t && cy(e, Rl, B_), ir();
    }
    function cy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var f = i.subtreeFlags & t;
        i !== l && i.child !== null && f !== _t ? i = i.child : ((i.flags & t) !== _t && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var fy = null;
    function _w(e) {
      {
        if ((gn & Sa) !== ea || !(e.mode & bt))
          return;
        var t = e.tag;
        if (t !== I && t !== z && t !== N && t !== k && t !== Oe && t !== Ve && t !== Re)
          return;
        var a = zt(e) || "ReactComponent";
        if (fy !== null) {
          if (fy.has(a))
            return;
          fy.add(a);
        } else
          fy = /* @__PURE__ */ new Set([a]);
        var i = Hn;
        try {
          Dn(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Dn(e) : ir();
        }
      }
    }
    var A0;
    {
      var kD = null;
      A0 = function(e, t, a) {
        var i = zw(kD, t);
        try {
          return HE(e, t, a);
        } catch (f) {
          if (PR() || f !== null && typeof f == "object" && typeof f.then == "function")
            throw f;
          if (gm(), VC(), GE(e, t), zw(t, i), t.mode & Ft && Nb(t), xl(null, HE, null, e, t, a), Wy()) {
            var l = Ud();
            typeof l == "object" && l !== null && l._suppressLogging && typeof f == "object" && f !== null && !f._suppressLogging && (f._suppressLogging = !0);
          }
          throw f;
        }
      };
    }
    var Dw = !1, M0;
    M0 = /* @__PURE__ */ new Set();
    function _D(e) {
      if (kr && !yk())
        switch (e.tag) {
          case k:
          case Oe:
          case Re: {
            var t = mr && zt(mr) || "Unknown", a = t;
            if (!M0.has(a)) {
              M0.add(a);
              var i = zt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case N: {
            Dw || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Dw = !0);
            break;
          }
        }
    }
    function dh(e, t) {
      if (Ka) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          cf(e, i, t);
        });
      }
    }
    var N0 = {};
    function $0(e, t) {
      {
        var a = Po.current;
        return a !== null ? (a.push(t), N0) : Nc(e, t);
      }
    }
    function Ow(e) {
      if (e !== N0)
        return rv(e);
    }
    function Lw() {
      return Po.current !== null;
    }
    function DD(e) {
      {
        if (e.mode & bt) {
          if (!uw())
            return;
        } else if (!K_() || gn !== ea || e.tag !== k && e.tag !== Oe && e.tag !== Re)
          return;
        if (Po.current === null) {
          var t = Hn;
          try {
            Dn(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, zt(e));
          } finally {
            t ? Dn(e) : ir();
          }
        }
      }
    }
    function OD(e) {
      e.tag !== Qu && uw() && Po.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function ph(e) {
      hw = e;
    }
    var uo = null, ad = null, LD = function(e) {
      uo = e;
    };
    function id(e) {
      {
        if (uo === null)
          return e;
        var t = uo(e);
        return t === void 0 ? e : t.current;
      }
    }
    function z0(e) {
      return id(e);
    }
    function U0(e) {
      {
        if (uo === null)
          return e;
        var t = uo(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = id(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ke,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function Aw(e, t) {
      {
        if (uo === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, f = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case N: {
            typeof i == "function" && (l = !0);
            break;
          }
          case k: {
            (typeof i == "function" || f === Tt) && (l = !0);
            break;
          }
          case Oe: {
            (f === ke || f === Tt) && (l = !0);
            break;
          }
          case Ve:
          case Re: {
            (f === Zt || f === Tt) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var h = uo(a);
          if (h !== void 0 && h === uo(i))
            return !0;
        }
        return !1;
      }
    }
    function Mw(e) {
      {
        if (uo === null || typeof WeakSet != "function")
          return;
        ad === null && (ad = /* @__PURE__ */ new WeakSet()), ad.add(e);
      }
    }
    var AD = function(e, t) {
      {
        if (uo === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Zl(), Jl(function() {
          j0(e.current, i, a);
        });
      }
    }, MD = function(e, t) {
      {
        if (e.context !== Vi)
          return;
        Zl(), Jl(function() {
          hh(t, e, null, null);
        });
      }
    };
    function j0(e, t, a) {
      {
        var i = e.alternate, l = e.child, f = e.sibling, h = e.tag, y = e.type, S = null;
        switch (h) {
          case k:
          case Re:
          case N:
            S = y;
            break;
          case Oe:
            S = y.render;
            break;
        }
        if (uo === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var x = !1, R = !1;
        if (S !== null) {
          var F = uo(S);
          F !== void 0 && (a.has(F) ? R = !0 : t.has(F) && (h === N ? R = !0 : x = !0));
        }
        if (ad !== null && (ad.has(e) || i !== null && ad.has(i)) && (R = !0), R && (e._debugNeedsRemount = !0), R || x) {
          var j = xi(e, xt);
          j !== null && ra(j, e, xt, Vn);
        }
        l !== null && !R && j0(l, t, a), f !== null && j0(f, t, a);
      }
    }
    var ND = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return P0(e.current, i, a), a;
      }
    };
    function P0(e, t, a) {
      {
        var i = e.child, l = e.sibling, f = e.tag, h = e.type, y = null;
        switch (f) {
          case k:
          case Re:
          case N:
            y = h;
            break;
          case Oe:
            y = h.render;
            break;
        }
        var S = !1;
        y !== null && t.has(y) && (S = !0), S ? $D(e, a) : i !== null && P0(i, t, a), l !== null && P0(l, t, a);
      }
    }
    function $D(e, t) {
      {
        var a = zD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case V:
              t.add(i.stateNode);
              return;
            case X:
              t.add(i.stateNode.containerInfo);
              return;
            case z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function zD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === V)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var F0;
    {
      F0 = !1;
      try {
        var Nw = Object.preventExtensions({});
      } catch {
        F0 = !0;
      }
    }
    function UD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = _t, this.subtreeFlags = _t, this.deletions = null, this.lanes = ge, this.childLanes = ge, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !F0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Bi = function(e, t, a, i) {
      return new UD(e, t, a, i);
    };
    function H0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function jD(e) {
      return typeof e == "function" && !H0(e) && e.defaultProps === void 0;
    }
    function PD(e) {
      if (typeof e == "function")
        return H0(e) ? N : k;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ke)
          return Oe;
        if (t === Zt)
          return Ve;
      }
      return I;
    }
    function pc(e, t) {
      var a = e.alternate;
      a === null ? (a = Bi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = _t, a.subtreeFlags = _t, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Gr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case I:
        case k:
        case Re:
          a.type = id(e.type);
          break;
        case N:
          a.type = z0(e.type);
          break;
        case Oe:
          a.type = U0(e.type);
          break;
      }
      return a;
    }
    function FD(e, t) {
      e.flags &= Gr | Wn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ge, e.lanes = t, e.child = null, e.subtreeFlags = _t, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = _t, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function HD(e, t, a) {
      var i;
      return e === um ? (i = bt, t === !0 && (i |= an, i |= Xa)) : i = yt, Ka && (i |= Ft), Bi(z, null, null, i);
    }
    function I0(e, t, a, i, l, f) {
      var h = I, y = e;
      if (typeof e == "function")
        H0(e) ? (h = N, y = z0(y)) : y = id(y);
      else if (typeof e == "string")
        h = V;
      else
        e: switch (e) {
          case zr:
            return us(a.children, l, f, t);
          case ca:
            h = ae, l |= an, (l & bt) !== yt && (l |= Xa);
            break;
          case ar:
            return ID(a, l, f, t);
          case ut:
            return VD(a, l, f, t);
          case Wt:
            return BD(a, l, f, t);
          case E:
            return $w(a, l, f, t);
          case A:
          case It:
          case G:
          case se:
          case Zn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case $:
                  h = he;
                  break e;
                case ye:
                  h = Ct;
                  break e;
                case ke:
                  h = Oe, y = U0(y);
                  break e;
                case Zt:
                  h = Ve;
                  break e;
                case Tt:
                  h = ze, y = null;
                  break e;
              }
            var S = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var x = i ? zt(i) : null;
              x && (S += `

Check the render method of \`` + x + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + S));
          }
        }
      var R = Bi(h, a, t, l);
      return R.elementType = e, R.type = y, R.lanes = f, R._debugOwner = i, R;
    }
    function V0(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, f = e.key, h = e.props, y = I0(l, f, h, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function us(e, t, a, i) {
      var l = Bi(Ke, e, i, t);
      return l.lanes = a, l;
    }
    function ID(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = Bi(xe, e, i, t | Ft);
      return l.elementType = ar, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function VD(e, t, a, i) {
      var l = Bi(le, e, i, t);
      return l.elementType = ut, l.lanes = a, l;
    }
    function BD(e, t, a, i) {
      var l = Bi(Et, e, i, t);
      return l.elementType = Wt, l.lanes = a, l;
    }
    function $w(e, t, a, i) {
      var l = Bi(qe, e, i, t);
      l.elementType = E, l.lanes = a;
      var f = {
        isHidden: !1
      };
      return l.stateNode = f, l;
    }
    function B0(e, t, a) {
      var i = Bi(ve, e, null, t);
      return i.lanes = a, i;
    }
    function WD() {
      var e = Bi(V, null, null, yt);
      return e.elementType = "DELETED", e;
    }
    function YD(e) {
      var t = Bi(Xe, null, null, yt);
      return t.stateNode = e, t;
    }
    function W0(e, t, a) {
      var i = e.children !== null ? e.children : [], l = Bi(X, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function zw(e, t) {
      return e === null && (e = Bi(I, null, null, yt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function GD(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Rg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Sr, this.eventTimes = js(ge), this.expirationTimes = js(Vn), this.pendingLanes = ge, this.suspendedLanes = ge, this.pingedLanes = ge, this.expiredLanes = ge, this.mutableReadLanes = ge, this.finishedLanes = ge, this.entangledLanes = ge, this.entanglements = js(ge), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var f = this.pendingUpdatersLaneMap = [], h = 0; h < As; h++)
          f.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case um:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Qu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Uw(e, t, a, i, l, f, h, y, S, x) {
      var R = new GD(e, t, a, y, S), F = HD(t, f);
      R.current = F, F.stateNode = R;
      {
        var j = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        F.memoizedState = j;
      }
      return ab(F), R;
    }
    var Y0 = "18.3.1";
    function qD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return it(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: fr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var G0, q0;
    G0 = !1, q0 = {};
    function jw(e) {
      if (!e)
        return Vi;
      var t = fi(e), a = OR(t);
      if (t.tag === N) {
        var i = t.type;
        if (sl(i))
          return fC(t, i, a);
      }
      return a;
    }
    function QD(e, t) {
      {
        var a = fi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = vi(a);
        if (l === null)
          return null;
        if (l.mode & an) {
          var f = zt(a) || "Component";
          if (!q0[f]) {
            q0[f] = !0;
            var h = Hn;
            try {
              Dn(l), a.mode & an ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f);
            } finally {
              h ? Dn(h) : ir();
            }
          }
        }
        return l.stateNode;
      }
    }
    function Pw(e, t, a, i, l, f, h, y) {
      var S = !1, x = null;
      return Uw(e, t, S, x, a, i, l, f, h);
    }
    function Fw(e, t, a, i, l, f, h, y, S, x) {
      var R = !0, F = Uw(a, i, R, e, l, f, h, y, S);
      F.context = jw(null);
      var j = F.current, J = ti(), te = os(j), ie = ql(J, te);
      return ie.callback = t ?? null, Ju(j, ie, te), nD(F, te, J), F;
    }
    function hh(e, t, a, i) {
      Wd(t, e);
      var l = t.current, f = ti(), h = os(l);
      qd(h);
      var y = jw(a);
      t.context === null ? t.context = y : t.pendingContext = y, kr && Hn !== null && !G0 && (G0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, zt(Hn) || "Unknown"));
      var S = ql(f, h);
      S.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), S.callback = i);
      var x = Ju(l, S, h);
      return x !== null && (ra(x, l, h, f), wm(x, l, h)), h;
    }
    function dy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case V:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function KD(e) {
      switch (e.tag) {
        case z: {
          var t = e.stateNode;
          if (ff(t)) {
            var a = Xd(t);
            oD(t, a);
          }
          break;
        }
        case le: {
          Jl(function() {
            var l = xi(e, xt);
            if (l !== null) {
              var f = ti();
              ra(l, e, xt, f);
            }
          });
          var i = xt;
          Q0(e, i);
          break;
        }
      }
    }
    function Hw(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Sv(a.retryLane, t));
    }
    function Q0(e, t) {
      Hw(e, t);
      var a = e.alternate;
      a && Hw(a, t);
    }
    function XD(e) {
      if (e.tag === le) {
        var t = Ns, a = xi(e, t);
        if (a !== null) {
          var i = ti();
          ra(a, e, t, i);
        }
        Q0(e, t);
      }
    }
    function JD(e) {
      if (e.tag === le) {
        var t = os(e), a = xi(e, t);
        if (a !== null) {
          var i = ti();
          ra(a, e, t, i);
        }
        Q0(e, t);
      }
    }
    function Iw(e) {
      var t = nv(e);
      return t === null ? null : t.stateNode;
    }
    var Vw = function(e) {
      return null;
    };
    function ZD(e) {
      return Vw(e);
    }
    var Bw = function(e) {
      return !1;
    };
    function eO(e) {
      return Bw(e);
    }
    var Ww = null, Yw = null, Gw = null, qw = null, Qw = null, Kw = null, Xw = null, Jw = null, Zw = null;
    {
      var e1 = function(e, t, a) {
        var i = t[a], l = hn(e) ? e.slice() : ot({}, e);
        return a + 1 === t.length ? (hn(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = e1(e[i], t, a + 1), l);
      }, t1 = function(e, t) {
        return e1(e, t, 0);
      }, n1 = function(e, t, a, i) {
        var l = t[i], f = hn(e) ? e.slice() : ot({}, e);
        if (i + 1 === t.length) {
          var h = a[i];
          f[h] = f[l], hn(f) ? f.splice(l, 1) : delete f[l];
        } else
          f[l] = n1(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return f;
      }, r1 = function(e, t, a) {
        if (t.length !== a.length) {
          T("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              T("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return n1(e, t, a, 0);
      }, a1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], f = hn(e) ? e.slice() : ot({}, e);
        return f[l] = a1(e[l], t, a + 1, i), f;
      }, i1 = function(e, t, a) {
        return a1(e, t, 0, a);
      }, K0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Ww = function(e, t, a, i) {
        var l = K0(e, t);
        if (l !== null) {
          var f = i1(l.memoizedState, a, i);
          l.memoizedState = f, l.baseState = f, e.memoizedProps = ot({}, e.memoizedProps);
          var h = xi(e, xt);
          h !== null && ra(h, e, xt, Vn);
        }
      }, Yw = function(e, t, a) {
        var i = K0(e, t);
        if (i !== null) {
          var l = t1(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = ot({}, e.memoizedProps);
          var f = xi(e, xt);
          f !== null && ra(f, e, xt, Vn);
        }
      }, Gw = function(e, t, a, i) {
        var l = K0(e, t);
        if (l !== null) {
          var f = r1(l.memoizedState, a, i);
          l.memoizedState = f, l.baseState = f, e.memoizedProps = ot({}, e.memoizedProps);
          var h = xi(e, xt);
          h !== null && ra(h, e, xt, Vn);
        }
      }, qw = function(e, t, a) {
        e.pendingProps = i1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = xi(e, xt);
        i !== null && ra(i, e, xt, Vn);
      }, Qw = function(e, t) {
        e.pendingProps = t1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = xi(e, xt);
        a !== null && ra(a, e, xt, Vn);
      }, Kw = function(e, t, a) {
        e.pendingProps = r1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = xi(e, xt);
        i !== null && ra(i, e, xt, Vn);
      }, Xw = function(e) {
        var t = xi(e, xt);
        t !== null && ra(t, e, xt, Vn);
      }, Jw = function(e) {
        Vw = e;
      }, Zw = function(e) {
        Bw = e;
      };
    }
    function tO(e) {
      var t = vi(e);
      return t === null ? null : t.stateNode;
    }
    function nO(e) {
      return null;
    }
    function rO() {
      return Hn;
    }
    function aO(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return Bd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Ww,
        overrideHookStateDeletePath: Yw,
        overrideHookStateRenamePath: Gw,
        overrideProps: qw,
        overridePropsDeletePath: Qw,
        overridePropsRenamePath: Kw,
        setErrorHandler: Jw,
        setSuspenseHandler: Zw,
        scheduleUpdate: Xw,
        currentDispatcherRef: a,
        findHostInstanceByFiber: tO,
        findFiberByHostInstance: t || nO,
        // React Refresh
        findHostInstancesForRefresh: ND,
        scheduleRefresh: AD,
        scheduleRoot: MD,
        setRefreshHandler: LD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: rO,
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
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : hy(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== gr) {
          var i = Iw(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      hh(e, t, null, null);
    }, py.prototype.unmount = X0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        gw() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Jl(function() {
          hh(null, e, null, null);
        }), oC(t);
      }
    };
    function iO(e, t) {
      if (!hy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      l1(e);
      var a = !1, i = !1, l = "", f = o1;
      t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === wn && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var h = Pw(e, um, null, a, i, l, f);
      tm(h.current, e);
      var y = e.nodeType === gr ? e.parentNode : e;
      return Sp(y), new X0(h);
    }
    function py(e) {
      this._internalRoot = e;
    }
    function oO(e) {
      e && Zy(e);
    }
    py.prototype.unstable_scheduleHydration = oO;
    function lO(e, t, a) {
      if (!hy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      l1(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, f = !1, h = !1, y = "", S = o1;
      a != null && (a.unstable_strictMode === !0 && (f = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (S = a.onRecoverableError));
      var x = Fw(t, null, e, um, i, f, h, y, S);
      if (tm(x.current, e), Sp(e), l)
        for (var R = 0; R < l.length; R++) {
          var F = l[R];
          fk(x, F);
        }
      return new py(x);
    }
    function hy(e) {
      return !!(e && (e.nodeType === Ra || e.nodeType === Pi || e.nodeType === bl || !H));
    }
    function vh(e) {
      return !!(e && (e.nodeType === Ra || e.nodeType === Pi || e.nodeType === bl || e.nodeType === gr && e.nodeValue === " react-mount-point-unstable "));
    }
    function l1(e) {
      e.nodeType === Ra && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Lp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var uO = d.ReactCurrentOwner, u1;
    u1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== gr) {
        var t = Iw(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = J0(e), l = !!(i && Gu(i));
      l && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Ra && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function J0(e) {
      return e ? e.nodeType === Pi ? e.documentElement : e.firstChild : null;
    }
    function s1() {
    }
    function sO(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var f = i;
          i = function() {
            var j = dy(h);
            f.call(j);
          };
        }
        var h = Fw(
          t,
          i,
          e,
          Qu,
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
        e._reactRootContainer = h, tm(h.current, e);
        var y = e.nodeType === gr ? e.parentNode : e;
        return Sp(y), Jl(), h;
      } else {
        for (var S; S = e.lastChild; )
          e.removeChild(S);
        if (typeof i == "function") {
          var x = i;
          i = function() {
            var j = dy(R);
            x.call(j);
          };
        }
        var R = Pw(
          e,
          Qu,
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
        var F = e.nodeType === gr ? e.parentNode : e;
        return Sp(F), Jl(function() {
          hh(t, R, a, i);
        }), R;
      }
    }
    function cO(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function vy(e, t, a, i, l) {
      u1(a), cO(l === void 0 ? null : l, "render");
      var f = a._reactRootContainer, h;
      if (!f)
        h = sO(a, t, e, l, i);
      else {
        if (h = f, typeof l == "function") {
          var y = l;
          l = function() {
            var S = dy(h);
            y.call(S);
          };
        }
        hh(t, h, e, l);
      }
      return dy(h);
    }
    var c1 = !1;
    function fO(e) {
      {
        c1 || (c1 = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = uO.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nn(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Ra ? e : QD(e, "findDOMNode");
    }
    function dO(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Lp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return vy(null, e, t, !0, a);
    }
    function pO(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Lp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return vy(null, e, t, !1, a);
    }
    function hO(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vh(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !xs(e))
        throw new Error("parentComponent must be a valid React Component");
      return vy(e, t, a, !1, i);
    }
    var f1 = !1;
    function vO(e) {
      if (f1 || (f1 = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !vh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Lp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = J0(e), i = a && !Gu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Jl(function() {
          vy(null, null, e, !1, function() {
            e._reactRootContainer = null, oC(e);
          });
        }), !0;
      } else {
        {
          var l = J0(e), f = !!(l && Gu(l)), h = e.nodeType === Ra && vh(e.parentNode) && !!e.parentNode._reactRootContainer;
          f && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", h ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Mu(KD), Xy(XD), pf(JD), wv(bi), Tv(ua), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Zh(yx), Dc(D0, lD, Jl);
    function mO(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!hy(t))
        throw new Error("Target container is not a DOM element.");
      return qD(e, t, null, a);
    }
    function yO(e, t, a, i) {
      return hO(e, t, a, i);
    }
    var Z0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Gu, zf, nm, _c, Es, D0]
    };
    function gO(e, t) {
      return Z0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), iO(e, t);
    }
    function bO(e, t, a) {
      return Z0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), lO(e, t, a);
    }
    function SO(e) {
      return gw() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Jl(e);
    }
    var CO = aO({
      findFiberByHostInstance: Js,
      bundleType: 1,
      version: Y0,
      rendererPackageName: "react-dom"
    });
    if (!CO && Vt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var d1 = window.location.protocol;
      /^(https?|file):$/.test(d1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (d1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z0, Oi.createPortal = mO, Oi.createRoot = gO, Oi.findDOMNode = fO, Oi.flushSync = SO, Oi.hydrate = dO, Oi.hydrateRoot = bO, Oi.render = pO, Oi.unmountComponentAtNode = vO, Oi.unstable_batchedUpdates = D0, Oi.unstable_renderSubtreeIntoContainer = yO, Oi.version = Y0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Oi;
}
function ST() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ST);
    } catch (c) {
      console.error(c);
    }
  }
}
process.env.NODE_ENV === "production" ? (ST(), SS.exports = e2()) : SS.exports = t2();
var n2 = SS.exports;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const r2 = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}", a2 = r2, i2 = /* @__PURE__ */ hd(class extends pd {
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
    return new Promise((v) => {
      PO(() => {
        const b = this.el.getBoundingClientRect(), T = b.width, g = b.height, O = Math.sqrt(T * T + g * g), k = Math.max(g, T), N = this.unbounded ? k : O + l2, I = Math.floor(k * u2), z = N / I;
        let X = u - b.left, V = d - b.top;
        this.unbounded && (X = T * 0.5, V = g * 0.5);
        const ve = X - I * 0.5, Ke = V - I * 0.5, ae = T * 0.5 - X, Ct = g * 0.5 - V;
        xS(() => {
          const he = document.createElement("div");
          he.classList.add("ripple-effect");
          const Oe = he.style;
          Oe.top = Ke + "px", Oe.left = ve + "px", Oe.width = Oe.height = I + "px", Oe.setProperty("--final-scale", `${z}`), Oe.setProperty("--translate-end", `${ae}px, ${Ct}px`), (this.el.shadowRoot || this.el).appendChild(he), setTimeout(() => {
            v(() => {
              o2(he);
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
    const u = fd(this);
    return ai(Th, { key: "7ae559bda5d2c1856a45bfa150c2cb4f83373f8e", role: "presentation", class: {
      [u]: !0,
      unbounded: this.unbounded
    } });
  }
  get el() {
    return this;
  }
  static get style() {
    return a2;
  }
}, [1, "ion-ripple-effect", {
  type: [1],
  addRipple: [64]
}]), o2 = (c) => {
  c.classList.add("fade-out"), setTimeout(() => {
    c.remove();
  }, 200);
}, l2 = 10, u2 = 0.5;
function s2() {
  if (typeof customElements > "u")
    return;
  ["ion-ripple-effect"].forEach((u) => {
    switch (u) {
      case "ion-ripple-effect":
        customElements.get(u) || customElements.define(u, i2);
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
const c2 = () => {
  if (Ia !== void 0)
    return Ia.Capacitor;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const f2 = () => {
  let c;
  return {
    lock: async () => {
      const d = c;
      let v;
      return c = new Promise((b) => v = b), d !== void 0 && await d, v;
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
var ES;
(function(c) {
  c.Body = "body", c.Ionic = "ionic", c.Native = "native", c.None = "none";
})(ES || (ES = {}));
const d2 = {
  getEngine() {
    const c = c2();
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
const CT = (c) => {
  if (eS === void 0 || c === ES.None || c === void 0)
    return null;
  const u = eS.querySelector("ion-app");
  return u ?? eS.body;
}, U1 = (c) => {
  const u = CT(c);
  return u === null ? 0 : u.clientHeight;
}, p2 = async (c) => {
  let u, d, v, b;
  const T = async () => {
    const I = await d2.getResizeMode(), z = I === void 0 ? void 0 : I.mode;
    u = () => {
      b === void 0 && (b = U1(z)), v = !0, g(v, z);
    }, d = () => {
      v = !1, g(v, z);
    }, Ia == null || Ia.addEventListener("keyboardWillShow", u), Ia == null || Ia.addEventListener("keyboardWillHide", d);
  }, g = (I, z) => {
    c && c(I, O(z));
  }, O = (I) => {
    if (
      /**
       * If we are in an SSR environment then there is
       * no window to resize. Additionally, if there
       * is no resize mode or the resize mode is "None"
       * then initialResizeContainerHeight will be 0
       */
      b === 0 || /**
       * If the keyboard is closed before the webview resizes initially
       * then the webview will never resize.
       */
      b === U1(I)
    )
      return;
    const z = CT(I);
    if (z !== null)
      return new Promise((X) => {
        const V = () => {
          z.clientHeight === b && (ve.disconnect(), X());
        }, ve = new ResizeObserver(V);
        ve.observe(z);
      });
  }, k = () => {
    Ia == null || Ia.removeEventListener("keyboardWillShow", u), Ia == null || Ia.removeEventListener("keyboardWillHide", d), u = d = void 0;
  }, N = () => v;
  return await T(), { init: T, destroy: k, isKeyboardVisible: N };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ET = 1, wT = 2, _y = 3;
class wS {
  constructor(u, d) {
    this.component = u, this.params = d, this.state = ET;
  }
  async init(u) {
    if (this.state = wT, !this.element) {
      const d = this.component;
      this.element = await gT(this.delegate, u, d, ["ion-page", "ion-page-invisible"], this.params);
    }
  }
  /**
   * DOM WRITE
   */
  _destroy() {
    Li(this.state !== _y, "view state must be ATTACHED");
    const u = this.element;
    u && (this.delegate ? this.delegate.removeViewFromDom(u.parentElement, u) : u.remove()), this.nav = void 0, this.state = _y;
  }
}
const j1 = (c, u, d) => !c || c.component !== u ? !1 : cT(c.params, d), P1 = (c, u) => c ? c instanceof wS ? c : new wS(c, u) : null, h2 = (c) => c.map((u) => u instanceof wS ? u : "component" in u ? P1(u.component, u.componentProps === null ? void 0 : u.componentProps) : P1(u, void 0)).filter((u) => u !== null), v2 = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}", m2 = v2, y2 = /* @__PURE__ */ hd(class extends pd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = ru(this, "ionNavWillLoad", 7), this.ionNavWillChange = ru(this, "ionNavWillChange", 3), this.ionNavDidChange = ru(this, "ionNavDidChange", 3), this.transInstr = [], this.gestureOrAnimationInProgress = !1, this.useRouter = !1, this.isTransitioning = !1, this.destroyed = !1, this.views = [], this.didLoad = !1, this.delegate = void 0, this.swipeGesture = void 0, this.animated = !0, this.animation = void 0, this.rootParams = void 0, this.root = void 0;
  }
  swipeGestureChanged() {
    this.gesture && this.gesture.enable(this.swipeGesture === !0);
  }
  rootChanged() {
    this.root !== void 0 && this.didLoad !== !1 && (this.useRouter || this.root !== void 0 && this.setRoot(this.root, this.rootParams));
  }
  componentWillLoad() {
    if (this.useRouter = document.querySelector("ion-router") !== null && this.el.closest("[no-router]") === null, this.swipeGesture === void 0) {
      const u = fd(this);
      this.swipeGesture = au.getBoolean("swipeBackEnabled", u === "ios");
    }
    this.ionNavWillLoad.emit();
  }
  async componentDidLoad() {
    this.didLoad = !0, this.rootChanged(), this.gesture = (await import("./swipe-back-Bufa1ie6.js")).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this)), this.swipeGestureChanged();
  }
  connectedCallback() {
    this.destroyed = !1;
  }
  disconnectedCallback() {
    for (const u of this.views)
      nu(u.element, rS), u._destroy();
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
  push(u, d, v, b) {
    return this.insert(-1, u, d, v, b);
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
  insert(u, d, v, b, T) {
    return this.insertPages(u, [{ component: d, componentProps: v }], b, T);
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
  insertPages(u, d, v, b) {
    return this.queueTrns({
      insertStart: u,
      insertViews: d,
      opts: v
    }, b);
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
  popTo(u, d, v) {
    const b = {
      removeStart: -1,
      removeCount: -1,
      opts: d
    };
    return typeof u == "object" && u.component ? (b.removeView = u, b.removeStart = 1) : typeof u == "number" && (b.removeStart = u + 1), this.queueTrns(b, v);
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
  removeIndex(u, d = 1, v, b) {
    return this.queueTrns({
      removeStart: u,
      removeCount: d,
      opts: v
    }, b);
  }
  /**
   * Set the root for the current navigation stack to a component.
   *
   * @param component The component to set as the root of the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setRoot(u, d, v, b) {
    return this.setPages([{ component: u, componentProps: d }], v, b);
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
  setPages(u, d, v) {
    return d ?? (d = {}), d.animated !== !0 && (d.animated = !1), this.queueTrns({
      insertStart: 0,
      insertViews: u,
      removeStart: 0,
      removeCount: -1,
      opts: d
    }, v);
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
  setRouteId(u, d, v, b) {
    const T = this.getActiveSync();
    if (j1(T, u, d))
      return Promise.resolve({
        changed: !1,
        element: T.element
      });
    let g;
    const O = new Promise((I) => g = I);
    let k;
    const N = {
      updateURL: !1,
      viewIsReady: (I) => {
        let z;
        const X = new Promise((V) => z = V);
        return g({
          changed: !0,
          element: I,
          markVisible: async () => {
            z(), await k;
          }
        }), X;
      }
    };
    if (v === "root")
      k = this.setRoot(u, d, N);
    else {
      const I = this.views.find((z) => j1(z, u, d));
      I ? k = this.popTo(I, Object.assign(Object.assign({}, N), { direction: "back", animationBuilder: b })) : v === "forward" ? k = this.push(u, d, Object.assign(Object.assign({}, N), { animationBuilder: b })) : v === "back" && (k = this.setRoot(u, d, Object.assign(Object.assign({}, N), { direction: "back", animated: !0, animationBuilder: b })));
    }
    return O;
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
    const d = this.views, v = d.indexOf(u);
    return v > 0 ? d[v - 1] : void 0;
  }
  /**
   * Adds a navigation stack change to the queue and schedules it to run.
   *
   * @returns Whether the transition succeeds.
   */
  async queueTrns(u, d) {
    var v, b;
    if (this.isTransitioning && (!((v = u.opts) === null || v === void 0) && v.skipIfBusy))
      return !1;
    const T = new Promise((g, O) => {
      u.resolve = g, u.reject = O;
    });
    if (u.done = d, u.opts && u.opts.updateURL !== !1 && this.useRouter) {
      const g = document.querySelector("ion-router");
      if (g) {
        const O = await g.canTransition();
        if (O === !1)
          return !1;
        if (typeof O == "string")
          return g.push(O, u.opts.direction || "back"), !1;
      }
    }
    return ((b = u.insertViews) === null || b === void 0 ? void 0 : b.length) === 0 && (u.insertViews = void 0), this.transInstr.push(u), this.nextTrns(), T;
  }
  success(u, d) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", d);
      return;
    }
    if (d.done && d.done(u.hasCompleted, u.requiresTransition, u.enteringView, u.leavingView, u.direction), d.resolve(u.hasCompleted), d.opts.updateURL !== !1 && this.useRouter) {
      const v = document.querySelector("ion-router");
      if (v) {
        const b = u.direction === "back" ? "back" : "forward";
        v.navChanged(b);
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
      const d = this.getActiveSync(), v = this.getEnteringView(u, d);
      if (!d && !v)
        throw new Error("no views in the stack to be removed");
      v && v.state === ET && await v.init(this.el), this.postViewInit(v, d, u);
      const b = (u.enteringRequiresTransition || u.leavingRequiresTransition) && v !== d;
      b && u.opts && d && (u.opts.direction === "back" && (u.opts.animationBuilder = u.opts.animationBuilder || (v == null ? void 0 : v.animationBuilder)), d.animationBuilder = u.opts.animationBuilder);
      let T;
      b ? T = await this.transition(v, d, u) : T = {
        hasCompleted: !0,
        requiresTransition: !1
      }, this.success(T, u), this.ionNavDidChange.emit();
    } catch (d) {
      this.failed(d, u);
    }
    this.isTransitioning = !1, this.nextTrns();
  }
  prepareTI(u) {
    var d, v, b;
    const T = this.views.length;
    if ((d = u.opts) !== null && d !== void 0 || (u.opts = {}), (v = (b = u.opts).delegate) !== null && v !== void 0 || (b.delegate = this.delegate), u.removeView !== void 0) {
      Li(u.removeStart !== void 0, "removeView needs removeStart"), Li(u.removeCount !== void 0, "removeView needs removeCount");
      const k = this.views.indexOf(u.removeView);
      if (k < 0)
        throw new Error("removeView was not found");
      u.removeStart += k;
    }
    u.removeStart !== void 0 && (u.removeStart < 0 && (u.removeStart = T - 1), u.removeCount < 0 && (u.removeCount = T - u.removeStart), u.leavingRequiresTransition = u.removeCount > 0 && u.removeStart + u.removeCount === T), u.insertViews && ((u.insertStart < 0 || u.insertStart > T) && (u.insertStart = T), u.enteringRequiresTransition = u.insertStart === T);
    const g = u.insertViews;
    if (!g)
      return;
    Li(g.length > 0, "length can not be zero");
    const O = h2(g);
    if (O.length === 0)
      throw new Error("invalid views to insert");
    for (const k of O) {
      k.delegate = u.opts.delegate;
      const N = k.nav;
      if (N && N !== this)
        throw new Error("inserted view was already inserted");
      if (k.state === _y)
        throw new Error("inserted view was already destroyed");
    }
    u.insertViews = O;
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
    const v = u.insertViews;
    if (v !== void 0)
      return v[v.length - 1];
    const b = u.removeStart;
    if (b !== void 0) {
      const T = this.views, g = b + u.removeCount;
      for (let O = T.length - 1; O >= 0; O--) {
        const k = T[O];
        if ((O < b || O >= g) && k !== d)
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
  postViewInit(u, d, v) {
    var b, T, g;
    Li(d || u, "Both leavingView and enteringView are null"), Li(v.resolve, "resolve must be valid"), Li(v.reject, "reject must be valid");
    const O = v.opts, { insertViews: k, removeStart: N, removeCount: I } = v;
    let z;
    if (N !== void 0 && I !== void 0) {
      Li(N >= 0, "removeStart can not be negative"), Li(I >= 0, "removeCount can not be negative"), z = [];
      for (let V = N; V < N + I; V++) {
        const ve = this.views[V];
        ve !== void 0 && ve !== u && ve !== d && z.push(ve);
      }
      (b = O.direction) !== null && b !== void 0 || (O.direction = "back");
    }
    const X = this.views.length + ((T = k == null ? void 0 : k.length) !== null && T !== void 0 ? T : 0) - (I ?? 0);
    if (Li(X >= 0, "final balance can not be negative"), X === 0)
      throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el), new Error("navigation stack needs at least one root page");
    if (k) {
      let V = v.insertStart;
      for (const ve of k)
        this.insertViewAt(ve, V), V++;
      v.enteringRequiresTransition && ((g = O.direction) !== null && g !== void 0 || (O.direction = "forward"));
    }
    if (z && z.length > 0) {
      for (const V of z)
        nu(V.element, fT), nu(V.element, dT), nu(V.element, rS);
      for (const V of z)
        this.destroyView(V);
    }
  }
  async transition(u, d, v) {
    const b = v.opts, T = b.progressAnimation ? (z) => {
      z !== void 0 && !this.gestureOrAnimationInProgress ? (this.gestureOrAnimationInProgress = !0, z.onFinish(() => {
        this.gestureOrAnimationInProgress = !1;
      }, { oneTimeCallback: !0 }), z.progressEnd(0, 0, 0)) : this.sbAni = z;
    } : void 0, g = fd(this), O = u.element, k = d && d.element, N = Object.assign(Object.assign({
      mode: g,
      showGoBack: this.canGoBackSync(u),
      baseEl: this.el,
      progressCallback: T,
      animated: this.animated && au.getBoolean("animated", !0),
      enteringEl: O,
      leavingEl: k
    }, b), { animationBuilder: b.animationBuilder || this.animation || au.get("navAnimation") }), { hasCompleted: I } = await hT(N);
    return this.transitionFinish(I, u, d, b);
  }
  transitionFinish(u, d, v, b) {
    const T = u ? d : v;
    return T && this.unmountInactiveViews(T), {
      hasCompleted: u,
      requiresTransition: !0,
      enteringView: d,
      leavingView: v,
      direction: b.direction
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
    const v = this.views, b = v.indexOf(u);
    b > -1 ? (Li(u.nav === this, "view is not part of the nav"), v.splice(b, 1), v.splice(d, 0, u)) : (Li(!u.nav, "nav is used"), u.nav = this, v.splice(d, 0, u));
  }
  /**
   * Removes a view from the stack.
   *
   * @param view The view to remove.
   */
  removeView(u) {
    Li(u.state === wT || u.state === _y, "view state should be loaded or destroyed");
    const d = this.views, v = d.indexOf(u);
    Li(v > -1, "view must be part of the stack"), v >= 0 && d.splice(v, 1);
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
    const d = this.views, v = d.indexOf(u);
    for (let b = d.length - 1; b >= 0; b--) {
      const T = d[b], g = T.element;
      g && (b > v ? (nu(g, rS), this.destroyView(T)) : b < v && bS(g, !0));
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
  onEnd(u, d, v) {
    if (this.sbAni) {
      this.sbAni.onFinish(() => {
        this.gestureOrAnimationInProgress = !1;
      }, { oneTimeCallback: !0 });
      let b = u ? -1e-3 : 1e-3;
      u ? b += ky([0, 0], [0.32, 0.72], [0, 1], [1, 1], d)[0] : (this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"), b += ky([0, 0], [1, 0], [0.68, 0.28], [1, 1], d)[0]), this.sbAni.progressEnd(u ? 1 : 0, b, v);
    } else
      this.gestureOrAnimationInProgress = !1;
  }
  render() {
    return ai("slot", { key: "dfe98cb6604a2015a49f41beffebdd2da957dfff" });
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
    return m2;
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
function g2() {
  if (typeof customElements > "u")
    return;
  ["ion-nav"].forEach((u) => {
    switch (u) {
      case "ion-nav":
        customElements.get(u) || customElements.define(u, y2);
        break;
    }
  });
}
const b2 = g2;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const S2 = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}", C2 = S2, E2 = /* @__PURE__ */ hd(class extends pd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = ru(this, "ionNavWillLoad", 7), this.ionNavWillChange = ru(this, "ionNavWillChange", 3), this.ionNavDidChange = ru(this, "ionNavDidChange", 3), this.lockController = f2(), this.gestureOrAnimationInProgress = !1, this.mode = fd(this), this.delegate = void 0, this.animated = !0, this.animation = void 0, this.swipeHandler = void 0;
  }
  swipeHandlerChanged() {
    this.gesture && this.gesture.enable(this.swipeHandler !== void 0);
  }
  async connectedCallback() {
    const u = () => {
      this.gestureOrAnimationInProgress = !0, this.swipeHandler && this.swipeHandler.onStart();
    };
    this.gesture = (await import("./swipe-back-Bufa1ie6.js")).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => u(), (d) => {
      var v;
      return (v = this.ani) === null || v === void 0 ? void 0 : v.progressStep(d);
    }, (d, v, b) => {
      if (this.ani) {
        this.ani.onFinish(() => {
          this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(d);
        }, { oneTimeCallback: !0 });
        let T = d ? -1e-3 : 1e-3;
        d ? T += ky([0, 0], [0.32, 0.72], [0, 1], [1, 1], v)[0] : (this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"), T += ky([0, 0], [1, 0], [0.68, 0.28], [1, 1], v)[0]), this.ani.progressEnd(d ? 1 : 0, T, b);
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
  async commit(u, d, v) {
    const b = await this.lockController.lock();
    let T = !1;
    try {
      T = await this.transition(u, d, v);
    } catch (g) {
      console.error(g);
    }
    return b(), T;
  }
  /** @internal */
  async setRouteId(u, d, v, b) {
    return {
      changed: await this.setRoot(u, d, {
        duration: v === "root" ? 0 : void 0,
        direction: v === "back" ? "back" : "forward",
        animationBuilder: b
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
  async setRoot(u, d, v) {
    if (this.activeComponent === u && cT(d, this.activeParams))
      return !1;
    const b = this.activeEl, T = await gT(this.delegate, this.el, u, ["ion-page", "ion-page-invisible"], d);
    return this.activeComponent = u, this.activeEl = T, this.activeParams = d, await this.commit(T, b, v), await XL(this.delegate, b), !0;
  }
  async transition(u, d, v = {}) {
    if (d === u)
      return !1;
    this.ionNavWillChange.emit();
    const { el: b, mode: T } = this, g = this.animated && au.getBoolean("animated", !0), O = v.animationBuilder || this.animation || au.get("navAnimation");
    return await hT(Object.assign(Object.assign({
      mode: T,
      animated: g,
      enteringEl: u,
      leavingEl: d,
      baseEl: b,
      /**
       * We need to wait for all Stencil components
       * to be ready only when using the lazy
       * loaded bundle.
       */
      deepWait: LL(b),
      progressCallback: v.progressAnimation ? (k) => {
        k !== void 0 && !this.gestureOrAnimationInProgress ? (this.gestureOrAnimationInProgress = !0, k.onFinish(() => {
          this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(!1);
        }, { oneTimeCallback: !0 }), k.progressEnd(0, 0, 0)) : this.ani = k;
      } : void 0
    }, v), { animationBuilder: O })), this.ionNavDidChange.emit(), !0;
  }
  render() {
    return ai("slot", { key: "a70341f58d19df55de1dad00e3464388e446aa2a" });
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
    return C2;
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
function w2() {
  if (typeof customElements > "u")
    return;
  ["ion-router-outlet"].forEach((u) => {
    switch (u) {
      case "ion-router-outlet":
        customElements.get(u) || customElements.define(u, E2);
        break;
    }
  });
}
const T2 = w2;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const x2 = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}", R2 = x2, k2 = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.07)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, var(--ion-text-color-step-350, #595959)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:56px}", _2 = k2, D2 = /* @__PURE__ */ hd(class extends pd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionTabBarChanged = ru(this, "ionTabBarChanged", 7), this.ionTabBarLoaded = ru(this, "ionTabBarLoaded", 7), this.keyboardCtrl = null, this.keyboardVisible = !1, this.color = void 0, this.selectedTab = void 0, this.translucent = !1;
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
    this.keyboardCtrl = await p2(async (u, d) => {
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
    const { color: u, translucent: d, keyboardVisible: v } = this, b = fd(this), T = v && this.el.getAttribute("slot") !== "top";
    return ai(Th, { key: "a87fd2ea5df053705a37ea7ffec043e75c4a9907", role: "tablist", "aria-hidden": T ? "true" : null, class: KL(u, {
      [b]: !0,
      "tab-bar-translucent": d,
      "tab-bar-hidden": T
    }) }, ai("slot", { key: "81a6223299b6cab29d7ddced590e9152e2b3ded0" }));
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
      ios: R2,
      md: _2
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
function O2() {
  if (typeof customElements > "u")
    return;
  ["ion-tab-bar"].forEach((u) => {
    switch (u) {
      case "ion-tab-bar":
        customElements.get(u) || customElements.define(u, D2);
        break;
    }
  });
}
const L2 = O2;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const A2 = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:24px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){font-size:30px}', M2 = A2, N2 = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}', $2 = N2, z2 = /* @__PURE__ */ hd(class extends pd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionTabButtonClick = ru(this, "ionTabButtonClick", 7), this.inheritedAttributes = {}, this.onKeyUp = (u) => {
      (u.key === "Enter" || u.key === " ") && this.selectTab(u);
    }, this.onClick = (u) => {
      this.selectTab(u);
    }, this.disabled = !1, this.download = void 0, this.href = void 0, this.rel = void 0, this.layout = void 0, this.selected = !1, this.tab = void 0, this.target = void 0;
  }
  onTabBarChanged(u) {
    const d = u.target, v = this.el.parentElement;
    (u.composedPath().includes(v) || d != null && d.contains(this.el)) && (this.selected = this.tab === u.detail.tab);
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign({}, AL(this.el, ["aria-label"])), this.layout === void 0 && (this.layout = au.get("tabButtonLayout", "icon-top"));
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
    const { disabled: u, hasIcon: d, hasLabel: v, href: b, rel: T, target: g, layout: O, selected: k, tab: N, inheritedAttributes: I } = this, z = fd(this), X = {
      download: this.download,
      href: b,
      rel: T,
      target: g
    };
    return ai(Th, { key: "5976c45943ea7ea8e7c1a85fc9996de421439f08", onClick: this.onClick, onKeyup: this.onKeyUp, id: N !== void 0 ? `tab-button-${N}` : null, class: {
      [z]: !0,
      "tab-selected": k,
      "tab-disabled": u,
      "tab-has-label": v,
      "tab-has-icon": d,
      "tab-has-label-only": v && !d,
      "tab-has-icon-only": d && !v,
      [`tab-layout-${O}`]: !0,
      "ion-activatable": !0,
      "ion-selectable": !0,
      "ion-focusable": !0
    } }, ai("a", Object.assign({ key: "1db09d861b67ff292018fb4b0dc7b85bd4677eb8" }, X, { class: "button-native", part: "native", role: "tab", "aria-selected": k ? "true" : null, "aria-disabled": u ? "true" : null, tabindex: u ? "-1" : void 0 }, I), ai("span", { key: "4381eafcb27e8c7bb0d86d4f115ceb0caf03b9b4", class: "button-inner" }, ai("slot", { key: "1981135f6fbb88376c1bd923c55c70fe8b5c5159" })), z === "md" && ai("ion-ripple-effect", { key: "0509bc7155d055d1ed710600e9cf4df135881491", type: "unbounded" })));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: M2,
      md: $2
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
function U2() {
  if (typeof customElements > "u")
    return;
  ["ion-tab-button", "ion-ripple-effect"].forEach((u) => {
    switch (u) {
      case "ion-tab-button":
        customElements.get(u) || customElements.define(u, z2);
        break;
      case "ion-ripple-effect":
        customElements.get(u) || s2();
        break;
    }
  });
}
const j2 = U2;
let oS;
const P2 = () => {
  if (typeof window > "u")
    return /* @__PURE__ */ new Map();
  if (!oS) {
    const c = window;
    c.Ionicons = c.Ionicons || {}, oS = c.Ionicons.map = c.Ionicons.map || /* @__PURE__ */ new Map();
  }
  return oS;
}, F2 = (c) => {
  let u = lS(c.src);
  return u || (u = TT(c.name, c.icon, c.mode, c.ios, c.md), u ? H2(u, c) : c.icon && (u = lS(c.icon), u || (u = lS(c.icon[c.mode]), u)) ? u : null);
}, H2 = (c, u) => {
  const d = P2().get(c);
  if (d)
    return d;
  try {
    return FO(`svg/${c}.svg`);
  } catch {
    console.warn(`[Ionicons Warning]: Could not load icon with name "${c}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, u);
  }
}, TT = (c, u, d, v, b) => (d = (d && Cy(d)) === "ios" ? "ios" : "md", v && d === "ios" ? c = Cy(v) : b && d === "md" ? c = Cy(b) : (!c && u && !xT(u) && (c = u), Dy(c) && (c = Cy(c))), !Dy(c) || c.trim() === "" || c.replace(/[a-z]|-|\d/gi, "") !== "" ? null : c), lS = (c) => Dy(c) && (c = c.trim(), xT(c)) ? c : null, xT = (c) => c.length > 0 && /(\/|\.)/.test(c), Dy = (c) => typeof c == "string", Cy = (c) => c.toLowerCase(), I2 = (c, u = []) => {
  const d = {};
  return u.forEach((v) => {
    c.hasAttribute(v) && (c.getAttribute(v) !== null && (d[v] = c.getAttribute(v)), c.removeAttribute(v));
  }), d;
}, V2 = (c) => c && c.dir !== "" ? c.dir.toLowerCase() === "rtl" : (document == null ? void 0 : document.dir.toLowerCase()) === "rtl", B2 = (c) => {
  const u = document.createElement("div");
  u.innerHTML = c;
  for (let v = u.childNodes.length - 1; v >= 0; v--)
    u.childNodes[v].nodeName.toLowerCase() !== "svg" && u.removeChild(u.childNodes[v]);
  const d = u.firstElementChild;
  if (d && d.nodeName.toLowerCase() === "svg") {
    const v = d.getAttribute("class") || "";
    if (d.setAttribute("class", (v + " s-ion-icon").trim()), RT(d))
      return u.innerHTML;
  }
  return "";
}, RT = (c) => {
  if (c.nodeType === 1) {
    if (c.nodeName.toLowerCase() === "script")
      return !1;
    for (let u = 0; u < c.attributes.length; u++) {
      const d = c.attributes[u].name;
      if (Dy(d) && d.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let u = 0; u < c.childNodes.length; u++)
      if (!RT(c.childNodes[u]))
        return !1;
  }
  return !0;
}, W2 = (c) => c.startsWith("data:image/svg+xml"), Y2 = (c) => c.indexOf(";utf8,") !== -1, hc = /* @__PURE__ */ new Map(), F1 = /* @__PURE__ */ new Map();
let uS;
const G2 = (c, u) => {
  let d = F1.get(c);
  if (!d)
    if (typeof fetch < "u" && typeof document < "u")
      if (W2(c) && Y2(c)) {
        uS || (uS = new DOMParser());
        const b = uS.parseFromString(c, "text/html").querySelector("svg");
        return b && hc.set(c, b.outerHTML), Promise.resolve();
      } else
        d = fetch(c).then((v) => {
          if (v.ok)
            return v.text().then((b) => {
              b && u !== !1 && (b = B2(b)), hc.set(c, b || "");
            });
          hc.set(c, "");
        }), F1.set(c, d);
    else
      return hc.set(c, ""), Promise.resolve();
  return d;
}, q2 = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}", Q2 = /* @__PURE__ */ hd(class extends pd {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.didLoadIcon = !1, this.svgContent = void 0, this.isVisible = !1, this.mode = K2(), this.color = void 0, this.ios = void 0, this.md = void 0, this.flipRtl = void 0, this.name = void 0, this.src = void 0, this.icon = void 0, this.size = void 0, this.lazy = !1, this.sanitize = !0;
  }
  componentWillLoad() {
    this.inheritedAttributes = I2(this.el, ["aria-label"]);
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
  waitUntilVisible(u, d, v) {
    if (this.lazy && typeof window < "u" && window.IntersectionObserver) {
      const b = this.io = new window.IntersectionObserver((T) => {
        T[0].isIntersecting && (b.disconnect(), this.io = void 0, v());
      }, { rootMargin: d });
      b.observe(u);
    } else
      v();
  }
  loadIcon() {
    if (this.isVisible) {
      const u = F2(this);
      u && (hc.has(u) ? this.svgContent = hc.get(u) : G2(u, this.sanitize).then(() => this.svgContent = hc.get(u)), this.didLoadIcon = !0);
    }
    this.iconName = TT(this.name, this.icon, this.mode, this.ios, this.md);
  }
  render() {
    const { flipRtl: u, iconName: d, inheritedAttributes: v, el: b } = this, T = this.mode || "md", g = d ? (d.includes("arrow") || d.includes("chevron")) && u !== !1 : !1, O = u || g;
    return ai(Th, Object.assign({ role: "img", class: Object.assign(Object.assign({ [T]: !0 }, X2(this.color)), { [`icon-${this.size}`]: !!this.size, "flip-rtl": O, "icon-rtl": O && V2(b) }) }, v), this.svgContent ? ai("div", { class: "icon-inner", innerHTML: this.svgContent }) : ai("div", { class: "icon-inner" }));
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
    return q2;
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
}]), K2 = () => typeof document < "u" && document.documentElement.getAttribute("mode") || "md", X2 = (c) => c ? {
  "ion-color": !0,
  [`ion-color-${c}`]: !0
} : null;
function J2() {
  if (typeof customElements > "u")
    return;
  ["ion-icon"].forEach((u) => {
    switch (u) {
      case "ion-icon":
        customElements.get(u) || customElements.define(u, Q2);
        break;
    }
  });
}
const Z2 = J2, OS = /* @__PURE__ */ Mt.createContext({
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
}), eA = class {
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
    const d = u.filter((v) => v.id === c.id);
    d.length !== 0 && (d.forEach((v) => {
      v && typeof v.destructor == "function" && v.destructor();
    }), u = u.filter((v) => v.id !== c.id));
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
}, cs = /* @__PURE__ */ Mt.createContext({
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
}), tA = (c) => c.toLowerCase().split("-").map((u) => u.charAt(0).toUpperCase() + u.slice(1)).join(""), kT = (c) => c.replace(/([A-Z])/g, (u) => `-${u[0].toLowerCase()}`), nA = (c, u, d = {}) => {
  if (c instanceof Element) {
    const v = rA(c.classList, u, d);
    v !== "" && (c.className = v), Object.keys(u).forEach((b) => {
      if (!(b === "children" || b === "style" || b === "ref" || b === "class" || b === "className" || b === "forwardedRef"))
        if (b.indexOf("on") === 0 && b[2] === b[2].toUpperCase()) {
          const T = b.substring(2), g = T[0].toLowerCase() + T.substring(1);
          _T(g) || iA(c, g, u[b]);
        } else
          c[b] = u[b], typeof u[b] === "string" && c.setAttribute(kT(b), u[b]);
    });
  }
}, rA = (c, u, d) => {
  const v = u.className || u.class, b = d.className || d.class, T = sS(c), g = sS(v ? v.split(" ") : []), O = sS(b ? b.split(" ") : []), k = [];
  return T.forEach((N) => {
    g.has(N) ? (k.push(N), g.delete(N)) : O.has(N) || k.push(N);
  }), g.forEach((N) => k.push(N)), k.join(" ");
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
const _T = (c) => {
  if (typeof document > "u")
    return !0;
  {
    const u = "on" + aA(c);
    let d = u in document;
    if (!d) {
      const v = document.createElement("div");
      v.setAttribute(u, "return;"), d = typeof v[u] == "function";
    }
    return d;
  }
}, iA = (c, u, d) => {
  const v = c.__events || (c.__events = {}), b = v[u];
  b && c.removeEventListener(u, b), c.addEventListener(u, v[u] = function(g) {
    d && d.call(this, g);
  });
}, sS = (c) => {
  const u = /* @__PURE__ */ new Map();
  return c.forEach((d) => u.set(d, d)), u;
}, oA = (c, u) => {
  typeof c == "function" ? c(u) : c != null && (c.current = u);
}, DT = (...c) => (u) => {
  c.forEach((d) => {
    oA(d, u);
  });
}, lA = (c, u) => {
  const d = (v, b) => Mt.createElement(c, Object.assign({}, v, { forwardedRef: b }));
  return d.displayName = u, Mt.forwardRef(d);
}, xh = (c, u, d, v) => {
  v !== void 0 && v();
  const b = tA(c), T = class extends Mt.Component {
    constructor(g) {
      super(g), this.setComponentElRef = (O) => {
        this.componentEl = O;
      };
    }
    componentDidMount() {
      this.componentDidUpdate(this.props);
    }
    componentDidUpdate(g) {
      nA(this.componentEl, this.props, g);
    }
    render() {
      const g = this.props, { children: O, forwardedRef: k, style: N, className: I, ref: z } = g, X = iu(g, ["children", "forwardedRef", "style", "className", "ref"]);
      let V = Object.keys(X).reduce((Ke, ae) => {
        const Ct = X[ae];
        if (ae.indexOf("on") === 0 && ae[2] === ae[2].toUpperCase()) {
          const he = ae.substring(2).toLowerCase();
          typeof document < "u" && _T(he) && (Ke[ae] = Ct);
        } else {
          const he = typeof Ct;
          (he === "string" || he === "boolean" || he === "number") && (Ke[kT(ae)] = Ct);
        }
        return Ke;
      }, {});
      const ve = Object.assign(Object.assign({}, V), { ref: DT(k, this.setComponentElRef), style: N });
      return Ho.createElement(c, ve, O);
    }
    static get displayName() {
      return b;
    }
  };
  return lA(T, b);
}, Rh = (c, u) => {
  const d = (v, b) => Mt.createElement(c, Object.assign({}, v, { forwardedRef: b }));
  return d.displayName = u, Mt.forwardRef(d);
}, uA = () => {
  if (typeof window < "u") {
    const c = window.Ionic;
    if (c && c.config)
      return c.config;
  }
  return null;
};
Mt.createContext({
  addOverlay: () => {
  },
  removeOverlay: () => {
  }
});
const sA = /* @__PURE__ */ xh("ion-tab-button", void 0, void 0, j2), cA = /* @__PURE__ */ xh("ion-tab-bar", void 0, void 0, L2), TS = /* @__PURE__ */ xh("ion-router-outlet", void 0, void 0, T2), fA = /* @__PURE__ */ xh("ion-icon", void 0, void 0, Z2), OT = Mt.createContext({
  registerIonPage: () => {
  },
  isInOutlet: () => !1
});
class LT extends Mt.PureComponent {
  constructor(u) {
    super(u), this.ionPageElementRef = Mt.createRef(), this.stableMergedRefs = DT(this.ionPageElementRef, this.props.forwardedRef), this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this), this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this), this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this), this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
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
    const u = this.props, { className: d, children: v, routeInfo: b, forwardedRef: T } = u, g = iu(u, ["className", "children", "routeInfo", "forwardedRef"]);
    return Mt.createElement(OS.Consumer, null, (O) => (this.ionLifeCycleContext = O, Mt.createElement("div", Object.assign({ className: d ? `${d} ion-page` : "ion-page", ref: this.stableMergedRefs }, g), v)));
  }
  static get contextType() {
    return OT;
  }
}
class dA extends Mt.Component {
  constructor(u) {
    super(u);
  }
  render() {
    const u = this.props, { className: d, children: v, forwardedRef: b } = u, T = iu(u, ["className", "children", "forwardedRef"]);
    return this.context.hasIonicRouter() ? Mt.createElement(LT, Object.assign({ className: d ? `${d}` : "", routeInfo: this.context.routeInfo, forwardedRef: b }, T), v) : Mt.createElement("div", Object.assign({ className: d ? `ion-page ${d}` : "ion-page", ref: b }, T), v);
  }
  static get displayName() {
    return "IonPage";
  }
  static get contextType() {
    return cs;
  }
}
Rh(dA, "IonPage");
const H1 = { main: 0 }, pA = (c = "main") => {
  var u;
  const d = ((u = H1[c]) !== null && u !== void 0 ? u : 0) + 1;
  return H1[c] = d, d.toString();
}, hA = (c, u) => {
  const d = /* @__PURE__ */ new WeakMap(), v = `react-delegate-${pA()}`;
  let b = 0;
  return {
    attachViewToDom: async (O, k, N, I) => {
      const z = document.createElement("div");
      I && z.classList.add(...I), O.appendChild(z);
      const X = k(N), V = `${v}-${b++}`, ve = n2.createPortal(X, z, V);
      return d.set(z, ve), c(ve), Promise.resolve(z);
    },
    removeViewFromDom: (O, k) => {
      const N = d.get(k);
      return N && u(N), k.remove(), Promise.resolve();
    }
  };
}, vA = xh("ion-nav", void 0, void 0, b2), mA = (c) => {
  var { children: u, forwardedRef: d } = c, v = iu(c, ["children", "forwardedRef"]);
  const [b, T] = Ho.useState([]), g = (N) => T((I) => [...I, N]), O = (N) => T((I) => I.filter((z) => z !== N)), k = Ho.useMemo(() => hA(g, O), []);
  return Mt.createElement(vA, Object.assign({ delegate: k, ref: d }, v), b);
};
Rh(mA, "IonNav");
const yA = Mt.createContext({
  activeTab: void 0,
  selectTab: () => !1,
  hasRouterOutlet: !1,
  tabBarProps: { ref: Mt.createRef() }
}), gA = typeof HTMLElement < "u" ? HTMLElement : class {
};
class bA extends Mt.Component {
  constructor(u) {
    super(u), this.outletIsReady = !1, this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this), this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this), this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this), this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
  }
  componentDidMount() {
    this.ionRouterOutlet && (this.outletIsReady || uT(this.ionRouterOutlet, () => {
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
    const u = this.props, { StackManager: d, children: v, routeInfo: b } = u, T = iu(u, ["StackManager", "children", "routeInfo"]);
    return Mt.createElement(OS.Consumer, null, (g) => (this.ionLifeCycleContext = g, Mt.createElement(
      d,
      { routeInfo: b },
      Mt.createElement(TS, Object.assign({ setRef: (O) => this.ionRouterOutlet = O }, T), v)
    )));
  }
  static get contextType() {
    return OT;
  }
}
class SA extends Mt.Component {
  constructor(u) {
    super(u);
  }
  render() {
    const u = this.context.getStackManager(), d = this.props, { children: v, forwardedRef: b } = d, T = iu(d, ["children", "forwardedRef"]);
    return this.context.hasIonicRouter() ? T.ionPage ? Mt.createElement(bA, Object.assign({ StackManager: u, routeInfo: this.context.routeInfo }, T), v) : Mt.createElement(
      u,
      { routeInfo: this.context.routeInfo },
      Mt.createElement(TS, Object.assign({}, T, { forwardedRef: b }), v)
    ) : Mt.createElement(TS, Object.assign({ ref: b }, this.props), this.props.children);
  }
  static get contextType() {
    return cs;
  }
}
Rh(SA, "IonRouterOutlet");
class CA extends gA {
  constructor() {
    super();
  }
}
typeof window < "u" && window.customElements && (window.customElements.get("ion-tabs") || window.customElements.define("ion-tabs", CA));
const cS = class extends Mt.Component {
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
    const c = this.props, u = iu(c, ["onClick"]);
    return Mt.createElement(sA, Object.assign({ onIonTabButtonClick: this.handleIonTabButtonClick }, u));
  }
  static get displayName() {
    return "IonTabButton";
  }
};
class EA extends Mt.PureComponent {
  constructor(u) {
    super(u), this.setActiveTabOnContext = (v) => {
    };
    const d = {};
    Mt.Children.forEach(u.children, (v) => {
      var b, T, g, O;
      v != null && typeof v == "object" && v.props && (v.type === cS || v.type.isTabButton) && (d[v.props.tab] = {
        originalHref: v.props.href,
        currentHref: v.props.href,
        originalRouteOptions: v.props.href === ((b = u.routeInfo) === null || b === void 0 ? void 0 : b.pathname) ? (T = u.routeInfo) === null || T === void 0 ? void 0 : T.routeOptions : void 0,
        currentRouteOptions: v.props.href === ((g = u.routeInfo) === null || g === void 0 ? void 0 : g.pathname) ? (O = u.routeInfo) === null || O === void 0 ? void 0 : O.routeOptions : void 0
      });
    }), this.state = {
      tabs: d
    }, this.onTabButtonClick = this.onTabButtonClick.bind(this), this.renderTabButton = this.renderTabButton.bind(this), this.setActiveTabOnContext = this.setActiveTabOnContext.bind(this), this.selectTab = this.selectTab.bind(this);
  }
  componentDidMount() {
    const u = this.state.tabs, v = Object.keys(u).find((b) => {
      const T = u[b].originalHref;
      return this.props.routeInfo.pathname.startsWith(T);
    });
    v && this.setState({
      activeTab: v
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
    var v, b, T;
    const g = Object.assign({}, d.tabs), k = Object.keys(d.tabs).find((I) => {
      const z = d.tabs[I].originalHref;
      return u.routeInfo.pathname.startsWith(z);
    });
    Mt.Children.forEach(u.children, (I) => {
      if (I != null && typeof I == "object" && I.props && (I.type === cS || I.type.isTabButton)) {
        const z = g[I.props.tab];
        (!z || z.originalHref !== I.props.href) && (g[I.props.tab] = {
          originalHref: I.props.href,
          currentHref: I.props.href,
          originalRouteOptions: I.props.routeOptions,
          currentRouteOptions: I.props.routeOptions
        });
      }
    });
    const { activeTab: N } = d;
    if (k && N) {
      const I = d.tabs[N].currentHref, z = d.tabs[N].currentRouteOptions;
      (k !== N || I !== ((v = u.routeInfo) === null || v === void 0 ? void 0 : v.pathname) || z !== ((b = u.routeInfo) === null || b === void 0 ? void 0 : b.routeOptions)) && (g[k] = {
        originalHref: g[k].originalHref,
        currentHref: u.routeInfo.pathname + (u.routeInfo.search || ""),
        originalRouteOptions: g[k].originalRouteOptions,
        currentRouteOptions: (T = u.routeInfo) === null || T === void 0 ? void 0 : T.routeOptions
      }, u.routeInfo.routeAction === "pop" && k !== N && (g[N] = {
        originalHref: g[N].originalHref,
        currentHref: g[N].originalHref,
        originalRouteOptions: g[N].originalRouteOptions,
        currentRouteOptions: g[N].currentRouteOptions
      }));
    }
    return k && u.onSetCurrentTab(k, u.routeInfo), {
      activeTab: k,
      tabs: g
    };
  }
  onTabButtonClick(u, d) {
    var v;
    const b = this.state.tabs[u.detail.tab], T = b.originalHref, g = (v = this.props.tabsContext) === null || v === void 0 ? void 0 : v.hasRouterOutlet, O = g ? u.detail.href : "", { activeTab: k } = this.state;
    d && d(u), k === u.detail.tab ? T !== O && this.context.resetTab(u.detail.tab, T, b.originalRouteOptions) : (this.props.onIonTabsWillChange && this.props.onIonTabsWillChange(new CustomEvent("ionTabWillChange", { detail: { tab: u.detail.tab } })), this.props.onIonTabsDidChange && this.props.onIonTabsDidChange(new CustomEvent("ionTabDidChange", { detail: { tab: u.detail.tab } })), g && (this.setActiveTabOnContext(u.detail.tab), this.context.changeTab(u.detail.tab, O, u.detail.routeOptions)));
  }
  renderTabButton(u) {
    return (d) => {
      var v, b;
      if (d != null && d.props && (d.type === cS || d.type.isTabButton)) {
        const T = d.props.tab === u ? (v = this.props.routeInfo) === null || v === void 0 ? void 0 : v.pathname : this.state.tabs[d.props.tab].currentHref, g = d.props.tab === u ? (b = this.props.routeInfo) === null || b === void 0 ? void 0 : b.routeOptions : this.state.tabs[d.props.tab].currentRouteOptions;
        return Mt.cloneElement(d, {
          href: T,
          routeOptions: g,
          onClick: (O) => this.onTabButtonClick(O, d.props.onClick)
        });
      }
      return null;
    };
  }
  render() {
    const { activeTab: u } = this.state;
    return Mt.createElement(cA, Object.assign({}, this.props, { selectedTab: u }), Mt.Children.map(this.props.children, this.renderTabButton(u)));
  }
  static get contextType() {
    return cs;
  }
}
const wA = Mt.memo((c) => {
  var { forwardedRef: u } = c, d = iu(c, ["forwardedRef"]);
  const v = Ho.useContext(cs), b = Ho.useContext(yA), T = u || b.tabBarProps.ref, g = Object.assign(Object.assign({}, b.tabBarProps), { ref: T });
  return Mt.createElement(EA, Object.assign({ ref: T }, d, {
    routeInfo: d.routeInfo || v.routeInfo || { pathname: window.location.pathname },
    onSetCurrentTab: v.setCurrentTab,
    /**
     * Tab bar can be used as a standalone component,
     * so it cannot be modified directly through
     * IonTabs. Instead, props will be passed through
     * the context.
     */
    tabsContext: Object.assign(Object.assign({}, b), { tabBarProps: g })
  }), d.children);
});
Rh(wA, "IonTabBar");
class TA extends Mt.PureComponent {
  constructor(u) {
    super(u), this.props.name && console.warn('In Ionic React, you import icons from "ionicons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.');
  }
  render() {
    var u, d;
    const v = this.props, { icon: b, ios: T, md: g, mode: O } = v, k = iu(v, ["icon", "ios", "md", "mode"]);
    let N;
    const I = uA(), z = O || (I == null ? void 0 : I.get("mode"));
    return T || g ? z === "ios" ? N = (u = T ?? g) !== null && u !== void 0 ? u : b : N = (d = g ?? T) !== null && d !== void 0 ? d : b : N = b, Mt.createElement(fA, Object.assign({ ref: this.props.forwardedRef, icon: N }, k), this.props.children);
  }
  static get contextType() {
    return cs;
  }
}
Rh(TA, "IonIcon");
class AT extends Mt.PureComponent {
  render() {
    const u = this.context.getIonRoute();
    return !this.context.hasIonicRouter() || !AT ? (console.error("You either do not have an Ionic Router package, or your router does not support using <IonRoute>"), null) : Mt.createElement(u, Object.assign({}, this.props));
  }
  static get contextType() {
    return cs;
  }
}
class MT extends Mt.PureComponent {
  render() {
    const u = this.context.getIonRedirect();
    return !this.context.hasIonicRouter() || !MT ? (console.error("You either do not have an Ionic Router package, or your router does not support using <IonRedirect>"), null) : Mt.createElement(u, Object.assign({}, this.props));
  }
  static get contextType() {
    return cs;
  }
}
const xA = Mt.createContext({
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
class QA extends Mt.PureComponent {
  constructor(u) {
    super(u), this.nodes = /* @__PURE__ */ new Map(), this.animation = kL(u.id);
  }
  setupAnimation(u) {
    const d = this.animation;
    this.nodes.size > 0 && d.addElement(Array.from(this.nodes.values())), I1(d, u), V1(d, u);
  }
  componentDidMount() {
    const u = this.props;
    this.setupAnimation(u);
  }
  componentDidUpdate(u) {
    const d = this.animation, v = this.props;
    I1(d, v, u), RA(d, v, u), V1(d, v, u);
  }
  render() {
    const { children: u } = this.props;
    return Mt.createElement(Mt.Fragment, null, Mt.Children.map(u, (d, v) => Mt.cloneElement(d, { ref: (b) => this.nodes.set(v, b) })));
  }
}
const I1 = (c, u = {}, d = {}) => {
  const v = [
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
    u.hasOwnProperty(k) && !v.includes(k) && u[k] !== d[k] && c[k](u[k]);
  const b = u.from;
  b && b !== d.from && (Array.isArray(b) ? b : [b]).forEach((N) => c.from(N.property, N.value));
  const T = u.to;
  T && T !== d.to && (Array.isArray(T) ? T : [T]).forEach((N) => c.to(N.property, N.value));
  const g = u.fromTo;
  g && g !== d.fromTo && (Array.isArray(g) ? g : [g]).forEach((N) => c.fromTo(N.property, N.fromValue, N.toValue));
  const O = u.onFinish;
  O && O !== d.onFinish && (Array.isArray(O) ? O : [O]).forEach((N) => c.onFinish(N.callback, N.opts));
}, RA = (c, u = {}, d = {}) => {
  var v, b, T, g, O;
  const { progressStart: k, progressStep: N, progressEnd: I } = u;
  k && (((v = d.progressStart) === null || v === void 0 ? void 0 : v.forceLinearEasing) !== (k == null ? void 0 : k.forceLinearEasing) || ((b = d.progressStart) === null || b === void 0 ? void 0 : b.step) !== (k == null ? void 0 : k.step)) && c.progressStart(k.forceLinearEasing, k.step), N && ((T = d.progressStep) === null || T === void 0 ? void 0 : T.step) !== (N == null ? void 0 : N.step) && c.progressStep(N.step), I && (((g = d.progressEnd) === null || g === void 0 ? void 0 : g.playTo) !== (I == null ? void 0 : I.playTo) || ((O = d.progressEnd) === null || O === void 0 ? void 0 : O.step) !== (I == null ? void 0 : I.step) || (d == null ? void 0 : d.dur) !== (I == null ? void 0 : I.dur)) && c.progressEnd(I.playTo, I.step, I.dur);
}, V1 = (c, u = {}, d = {}) => {
  !d.play && u.play && c.play(), !d.pause && u.pause && c.pause(), !d.stop && u.stop && c.stop(), !d.destroy && u.destroy && c.destroy();
};
class KA extends Mt.Component {
  constructor(u) {
    super(u), this.ionLifeCycleContext = new eA(), this._isMounted = !1, this.ionLifeCycleContext.onComponentCanBeDestroyed(() => {
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
    return Mt.createElement(OS.Provider, { value: this.ionLifeCycleContext }, u && this.props.children);
  }
}
class XA extends Mt.PureComponent {
  constructor(u) {
    super(u), this.ionRouterContextValue = {
      push: (d, v, b, T, g) => {
        this.navigate(d, v, b, g, T);
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
  navigate(u, d = "forward", v = "push", b, T, g) {
    this.props.onNavigate(u, v, d, b, T, g);
  }
  getPageManager() {
    return LT;
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
    return Mt.createElement(
      cs.Provider,
      { value: Object.assign(Object.assign({}, this.state), { routeInfo: this.props.routeInfo }) },
      Mt.createElement(xA.Provider, { value: Object.assign(Object.assign({}, this.ionRouterContextValue), { routeInfo: this.props.routeInfo }) }, this.props.children)
    );
  }
}
(function(c) {
  var u = {};
  function d(v) {
    if (u[v]) return u[v].exports;
    var b = u[v] = { i: v, l: !1, exports: {} };
    return c[v].call(b.exports, b, b.exports, d), b.l = !0, b.exports;
  }
  return d.m = c, d.c = u, d.d = function(v, b, T) {
    d.o(v, b) || Object.defineProperty(v, b, { enumerable: !0, get: T });
  }, d.r = function(v) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(v, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(v, "__esModule", { value: !0 });
  }, d.t = function(v, b) {
    if (1 & b && (v = d(v)), 8 & b || 4 & b && typeof v == "object" && v && v.__esModule) return v;
    var T = /* @__PURE__ */ Object.create(null);
    if (d.r(T), Object.defineProperty(T, "default", { enumerable: !0, value: v }), 2 & b && typeof v != "string") for (var g in v) d.d(T, g, (function(O) {
      return v[O];
    }).bind(null, g));
    return T;
  }, d.n = function(v) {
    var b = v && v.__esModule ? function() {
      return v.default;
    } : function() {
      return v;
    };
    return d.d(b, "a", b), b;
  }, d.o = function(v, b) {
    return Object.prototype.hasOwnProperty.call(v, b);
  }, d.p = "", d(d.s = 9);
})([function(c, u) {
  c.exports = Ho;
}, function(c, u, d) {
  var v;
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  (function() {
    var b = {}.hasOwnProperty;
    function T() {
      for (var g = [], O = 0; O < arguments.length; O++) {
        var k = arguments[O];
        if (k) {
          var N = typeof k;
          if (N === "string" || N === "number") g.push(k);
          else if (Array.isArray(k) && k.length) {
            var I = T.apply(null, k);
            I && g.push(I);
          } else if (N === "object") for (var z in k) b.call(k, z) && k[z] && g.push(z);
        }
      }
      return g.join(" ");
    }
    c.exports ? (T.default = T, c.exports = T) : (v = (function() {
      return T;
    }).apply(u, [])) === void 0 || (c.exports = v);
  })();
}, function(c, u, d) {
  (function(v) {
    var b = /^\s+|\s+$/g, T = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, O = /^0o[0-7]+$/i, k = parseInt, N = typeof v == "object" && v && v.Object === Object && v, I = typeof self == "object" && self && self.Object === Object && self, z = N || I || Function("return this")(), X = Object.prototype.toString, V = z.Symbol, ve = V ? V.prototype : void 0, Ke = ve ? ve.toString : void 0;
    function ae(xe) {
      if (typeof xe == "string") return xe;
      if (he(xe)) return Ke ? Ke.call(xe) : "";
      var le = xe + "";
      return le == "0" && 1 / xe == -1 / 0 ? "-0" : le;
    }
    function Ct(xe) {
      var le = typeof xe;
      return !!xe && (le == "object" || le == "function");
    }
    function he(xe) {
      return typeof xe == "symbol" || /* @__PURE__ */ function(le) {
        return !!le && typeof le == "object";
      }(xe) && X.call(xe) == "[object Symbol]";
    }
    function Oe(xe) {
      return xe ? (xe = function(le) {
        if (typeof le == "number") return le;
        if (he(le)) return NaN;
        if (Ct(le)) {
          var Ve = typeof le.valueOf == "function" ? le.valueOf() : le;
          le = Ct(Ve) ? Ve + "" : Ve;
        }
        if (typeof le != "string") return le === 0 ? le : +le;
        le = le.replace(b, "");
        var Re = g.test(le);
        return Re || O.test(le) ? k(le.slice(2), Re ? 2 : 8) : T.test(le) ? NaN : +le;
      }(xe)) === 1 / 0 || xe === -1 / 0 ? 17976931348623157e292 * (xe < 0 ? -1 : 1) : xe == xe ? xe : 0 : xe === 0 ? xe : 0;
    }
    c.exports = function(xe, le, Ve) {
      var Re, ze, Le, Xe;
      return xe = (Re = xe) == null ? "" : ae(Re), ze = function(Et) {
        var Rt = Oe(Et), qe = Rt % 1;
        return Rt == Rt ? qe ? Rt - qe : Rt : 0;
      }(Ve), Le = 0, Xe = xe.length, ze == ze && (Xe !== void 0 && (ze = ze <= Xe ? ze : Xe), Le !== void 0 && (ze = ze >= Le ? ze : Le)), Ve = ze, le = ae(le), xe.slice(Ve, Ve + le.length) == le;
    };
  }).call(this, d(3));
}, function(c, u) {
  var d;
  d = /* @__PURE__ */ function() {
    return this;
  }();
  try {
    d = d || new Function("return this")();
  } catch {
    typeof window == "object" && (d = window);
  }
  c.exports = d;
}, function(c, u, d) {
  (function(v) {
    var b = /^\[object .+?Constructor\]$/, T = typeof v == "object" && v && v.Object === Object && v, g = typeof self == "object" && self && self.Object === Object && self, O = T || g || Function("return this")(), k, N = Array.prototype, I = Function.prototype, z = Object.prototype, X = O["__core-js_shared__"], V = (k = /[^.]+$/.exec(X && X.keys && X.keys.IE_PROTO || "")) ? "Symbol(src)_1." + k : "", ve = I.toString, Ke = z.hasOwnProperty, ae = z.toString, Ct = RegExp("^" + ve.call(Ke).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), he = N.splice, Oe = Et(O, "Map"), xe = Et(Object, "create");
    function le(ue) {
      var be = -1, me = ue ? ue.length : 0;
      for (this.clear(); ++be < me; ) {
        var pe = ue[be];
        this.set(pe[0], pe[1]);
      }
    }
    function Ve(ue) {
      var be = -1, me = ue ? ue.length : 0;
      for (this.clear(); ++be < me; ) {
        var pe = ue[be];
        this.set(pe[0], pe[1]);
      }
    }
    function Re(ue) {
      var be = -1, me = ue ? ue.length : 0;
      for (this.clear(); ++be < me; ) {
        var pe = ue[be];
        this.set(pe[0], pe[1]);
      }
    }
    function ze(ue, be) {
      for (var me, pe, de = ue.length; de--; ) if ((me = ue[de][0]) === (pe = be) || me != me && pe != pe) return de;
      return -1;
    }
    function Le(ue) {
      return !(!qe(ue) || (be = ue, V && V in be)) && (function(me) {
        var pe = qe(me) ? ae.call(me) : "";
        return pe == "[object Function]" || pe == "[object GeneratorFunction]";
      }(ue) || function(me) {
        var pe = !1;
        if (me != null && typeof me.toString != "function") try {
          pe = !!(me + "");
        } catch {
        }
        return pe;
      }(ue) ? Ct : b).test(function(me) {
        if (me != null) {
          try {
            return ve.call(me);
          } catch {
          }
          try {
            return me + "";
          } catch {
          }
        }
        return "";
      }(ue));
      var be;
    }
    function Xe(ue, be) {
      var me, pe, de = ue.__data__;
      return ((pe = typeof (me = be)) == "string" || pe == "number" || pe == "symbol" || pe == "boolean" ? me !== "__proto__" : me === null) ? de[typeof be == "string" ? "string" : "hash"] : de.map;
    }
    function Et(ue, be) {
      var me = function(pe, de) {
        return pe == null ? void 0 : pe[de];
      }(ue, be);
      return Le(me) ? me : void 0;
    }
    function Rt(ue, be) {
      if (typeof ue != "function" || be && typeof be != "function") throw new TypeError("Expected a function");
      var me = function() {
        var pe = arguments, de = be ? be.apply(this, pe) : pe[0], Ye = me.cache;
        if (Ye.has(de)) return Ye.get(de);
        var q = ue.apply(this, pe);
        return me.cache = Ye.set(de, q), q;
      };
      return me.cache = new (Rt.Cache || Re)(), me;
    }
    function qe(ue) {
      var be = typeof ue;
      return !!ue && (be == "object" || be == "function");
    }
    le.prototype.clear = function() {
      this.__data__ = xe ? xe(null) : {};
    }, le.prototype.delete = function(ue) {
      return this.has(ue) && delete this.__data__[ue];
    }, le.prototype.get = function(ue) {
      var be = this.__data__;
      if (xe) {
        var me = be[ue];
        return me === "__lodash_hash_undefined__" ? void 0 : me;
      }
      return Ke.call(be, ue) ? be[ue] : void 0;
    }, le.prototype.has = function(ue) {
      var be = this.__data__;
      return xe ? be[ue] !== void 0 : Ke.call(be, ue);
    }, le.prototype.set = function(ue, be) {
      return this.__data__[ue] = xe && be === void 0 ? "__lodash_hash_undefined__" : be, this;
    }, Ve.prototype.clear = function() {
      this.__data__ = [];
    }, Ve.prototype.delete = function(ue) {
      var be = this.__data__, me = ze(be, ue);
      return !(me < 0) && (me == be.length - 1 ? be.pop() : he.call(be, me, 1), !0);
    }, Ve.prototype.get = function(ue) {
      var be = this.__data__, me = ze(be, ue);
      return me < 0 ? void 0 : be[me][1];
    }, Ve.prototype.has = function(ue) {
      return ze(this.__data__, ue) > -1;
    }, Ve.prototype.set = function(ue, be) {
      var me = this.__data__, pe = ze(me, ue);
      return pe < 0 ? me.push([ue, be]) : me[pe][1] = be, this;
    }, Re.prototype.clear = function() {
      this.__data__ = { hash: new le(), map: new (Oe || Ve)(), string: new le() };
    }, Re.prototype.delete = function(ue) {
      return Xe(this, ue).delete(ue);
    }, Re.prototype.get = function(ue) {
      return Xe(this, ue).get(ue);
    }, Re.prototype.has = function(ue) {
      return Xe(this, ue).has(ue);
    }, Re.prototype.set = function(ue, be) {
      return Xe(this, ue).set(ue, be), this;
    }, Rt.Cache = Re, c.exports = Rt;
  }).call(this, d(3));
}, function(c, u, d) {
  (function(v) {
    var b = /^\s+|\s+$/g, T = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, O = /^0o[0-7]+$/i, k = parseInt, N = typeof v == "object" && v && v.Object === Object && v, I = typeof self == "object" && self && self.Object === Object && self, z = N || I || Function("return this")(), X = Object.prototype.toString, V = Math.max, ve = Math.min, Ke = function() {
      return z.Date.now();
    };
    function ae(he) {
      var Oe = typeof he;
      return !!he && (Oe == "object" || Oe == "function");
    }
    function Ct(he) {
      if (typeof he == "number") return he;
      if (function(le) {
        return typeof le == "symbol" || /* @__PURE__ */ function(Ve) {
          return !!Ve && typeof Ve == "object";
        }(le) && X.call(le) == "[object Symbol]";
      }(he)) return NaN;
      if (ae(he)) {
        var Oe = typeof he.valueOf == "function" ? he.valueOf() : he;
        he = ae(Oe) ? Oe + "" : Oe;
      }
      if (typeof he != "string") return he === 0 ? he : +he;
      he = he.replace(b, "");
      var xe = g.test(he);
      return xe || O.test(he) ? k(he.slice(2), xe ? 2 : 8) : T.test(he) ? NaN : +he;
    }
    c.exports = function(he, Oe, xe) {
      var le, Ve, Re, ze, Le, Xe, Et = 0, Rt = !1, qe = !1, ue = !0;
      if (typeof he != "function") throw new TypeError("Expected a function");
      function be(D) {
        var H = le, Ee = Ve;
        return le = Ve = void 0, Et = D, ze = he.apply(Ee, H);
      }
      function me(D) {
        return Et = D, Le = setTimeout(de, Oe), Rt ? be(D) : ze;
      }
      function pe(D) {
        var H = D - Xe;
        return Xe === void 0 || H >= Oe || H < 0 || qe && D - Et >= Re;
      }
      function de() {
        var D = Ke();
        if (pe(D)) return Ye(D);
        Le = setTimeout(de, function(H) {
          var Ee = Oe - (H - Xe);
          return qe ? ve(Ee, Re - (H - Et)) : Ee;
        }(D));
      }
      function Ye(D) {
        return Le = void 0, ue && le ? be(D) : (le = Ve = void 0, ze);
      }
      function q() {
        var D = Ke(), H = pe(D);
        if (le = arguments, Ve = this, Xe = D, H) {
          if (Le === void 0) return me(Xe);
          if (qe) return Le = setTimeout(de, Oe), be(Xe);
        }
        return Le === void 0 && (Le = setTimeout(de, Oe)), ze;
      }
      return Oe = Ct(Oe) || 0, ae(xe) && (Rt = !!xe.leading, Re = (qe = "maxWait" in xe) ? V(Ct(xe.maxWait) || 0, Oe) : Re, ue = "trailing" in xe ? !!xe.trailing : ue), q.cancel = function() {
        Le !== void 0 && clearTimeout(Le), Et = 0, le = Xe = Ve = Le = void 0;
      }, q.flush = function() {
        return Le === void 0 ? ze : Ye(Ke());
      }, q;
    };
  }).call(this, d(3));
}, function(c, u, d) {
  (function(v, b) {
    var T = "[object Arguments]", g = "[object Map]", O = "[object Object]", k = "[object Set]", N = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, I = /^\w*$/, z = /^\./, X = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, V = /\\(\\)?/g, ve = /^\[object .+?Constructor\]$/, Ke = /^(?:0|[1-9]\d*)$/, ae = {};
    ae["[object Float32Array]"] = ae["[object Float64Array]"] = ae["[object Int8Array]"] = ae["[object Int16Array]"] = ae["[object Int32Array]"] = ae["[object Uint8Array]"] = ae["[object Uint8ClampedArray]"] = ae["[object Uint16Array]"] = ae["[object Uint32Array]"] = !0, ae[T] = ae["[object Array]"] = ae["[object ArrayBuffer]"] = ae["[object Boolean]"] = ae["[object DataView]"] = ae["[object Date]"] = ae["[object Error]"] = ae["[object Function]"] = ae[g] = ae["[object Number]"] = ae[O] = ae["[object RegExp]"] = ae[k] = ae["[object String]"] = ae["[object WeakMap]"] = !1;
    var Ct = typeof v == "object" && v && v.Object === Object && v, he = typeof self == "object" && self && self.Object === Object && self, Oe = Ct || he || Function("return this")(), xe = u && !u.nodeType && u, le = xe && typeof b == "object" && b && !b.nodeType && b, Ve = le && le.exports === xe && Ct.process, Re = function() {
      try {
        return Ve && Ve.binding("util");
      } catch {
      }
    }(), ze = Re && Re.isTypedArray;
    function Le(E, A, G, se) {
      var Ce = -1, $e = E ? E.length : 0;
      for (se && $e && (G = E[++Ce]); ++Ce < $e; ) G = A(G, E[Ce], Ce, E);
      return G;
    }
    function Xe(E, A) {
      for (var G = -1, se = E ? E.length : 0; ++G < se; ) if (A(E[G], G, E)) return !0;
      return !1;
    }
    function Et(E, A, G, se, Ce) {
      return Ce(E, function($e, st, ot) {
        G = se ? (se = !1, $e) : A(G, $e, st, ot);
      }), G;
    }
    function Rt(E) {
      var A = !1;
      if (E != null && typeof E.toString != "function") try {
        A = !!(E + "");
      } catch {
      }
      return A;
    }
    function qe(E) {
      var A = -1, G = Array(E.size);
      return E.forEach(function(se, Ce) {
        G[++A] = [Ce, se];
      }), G;
    }
    function ue(E) {
      var A = -1, G = Array(E.size);
      return E.forEach(function(se) {
        G[++A] = se;
      }), G;
    }
    var be, me, pe, de = Array.prototype, Ye = Function.prototype, q = Object.prototype, D = Oe["__core-js_shared__"], H = (be = /[^.]+$/.exec(D && D.keys && D.keys.IE_PROTO || "")) ? "Symbol(src)_1." + be : "", Ee = Ye.toString, ne = q.hasOwnProperty, _ = q.toString, Ue = RegExp("^" + Ee.call(ne).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Fe = Oe.Symbol, He = Oe.Uint8Array, at = q.propertyIsEnumerable, kt = de.splice, Kt = (me = Object.keys, pe = Object, function(E) {
      return me(pe(E));
    }), Jt = Br(Oe, "DataView"), Vt = Br(Oe, "Map"), Bt = Br(Oe, "Promise"), Q = Br(Oe, "Set"), ce = Br(Oe, "WeakMap"), Ne = Br(Object, "create"), vt = wn(Jt), it = wn(Vt), ct = wn(Bt), mt = wn(Q), Ht = wn(ce), je = Fe ? Fe.prototype : void 0, nt = je ? je.valueOf : void 0, wt = je ? je.toString : void 0;
    function Ie(E) {
      var A = -1, G = E ? E.length : 0;
      for (this.clear(); ++A < G; ) {
        var se = E[A];
        this.set(se[0], se[1]);
      }
    }
    function Pe(E) {
      var A = -1, G = E ? E.length : 0;
      for (this.clear(); ++A < G; ) {
        var se = E[A];
        this.set(se[0], se[1]);
      }
    }
    function Gt(E) {
      var A = -1, G = E ? E.length : 0;
      for (this.clear(); ++A < G; ) {
        var se = E[A];
        this.set(se[0], se[1]);
      }
    }
    function An(E) {
      var A = -1, G = E ? E.length : 0;
      for (this.__data__ = new Gt(); ++A < G; ) this.add(E[A]);
    }
    function mn(E) {
      this.__data__ = new Pe(E);
    }
    function we(E, A) {
      var G = ar(E) || ca(E) ? function(st, ot) {
        for (var on = -1, cn = Array(st); ++on < st; ) cn[on] = ot(on);
        return cn;
      }(E.length, String) : [], se = G.length, Ce = !!se;
      for (var $e in E) !ne.call(E, $e) || Ce && ($e == "length" || Ai($e, se)) || G.push($e);
      return G;
    }
    function Je(E, A) {
      for (var G = E.length; G--; ) if (zr(E[G][0], A)) return G;
      return -1;
    }
    Ie.prototype.clear = function() {
      this.__data__ = Ne ? Ne(null) : {};
    }, Ie.prototype.delete = function(E) {
      return this.has(E) && delete this.__data__[E];
    }, Ie.prototype.get = function(E) {
      var A = this.__data__;
      if (Ne) {
        var G = A[E];
        return G === "__lodash_hash_undefined__" ? void 0 : G;
      }
      return ne.call(A, E) ? A[E] : void 0;
    }, Ie.prototype.has = function(E) {
      var A = this.__data__;
      return Ne ? A[E] !== void 0 : ne.call(A, E);
    }, Ie.prototype.set = function(E, A) {
      return this.__data__[E] = Ne && A === void 0 ? "__lodash_hash_undefined__" : A, this;
    }, Pe.prototype.clear = function() {
      this.__data__ = [];
    }, Pe.prototype.delete = function(E) {
      var A = this.__data__, G = Je(A, E);
      return !(G < 0) && (G == A.length - 1 ? A.pop() : kt.call(A, G, 1), !0);
    }, Pe.prototype.get = function(E) {
      var A = this.__data__, G = Je(A, E);
      return G < 0 ? void 0 : A[G][1];
    }, Pe.prototype.has = function(E) {
      return Je(this.__data__, E) > -1;
    }, Pe.prototype.set = function(E, A) {
      var G = this.__data__, se = Je(G, E);
      return se < 0 ? G.push([E, A]) : G[se][1] = A, this;
    }, Gt.prototype.clear = function() {
      this.__data__ = { hash: new Ie(), map: new (Vt || Pe)(), string: new Ie() };
    }, Gt.prototype.delete = function(E) {
      return wr(this, E).delete(E);
    }, Gt.prototype.get = function(E) {
      return wr(this, E).get(E);
    }, Gt.prototype.has = function(E) {
      return wr(this, E).has(E);
    }, Gt.prototype.set = function(E, A) {
      return wr(this, E).set(E, A), this;
    }, An.prototype.add = An.prototype.push = function(E) {
      return this.__data__.set(E, "__lodash_hash_undefined__"), this;
    }, An.prototype.has = function(E) {
      return this.__data__.has(E);
    }, mn.prototype.clear = function() {
      this.__data__ = new Pe();
    }, mn.prototype.delete = function(E) {
      return this.__data__.delete(E);
    }, mn.prototype.get = function(E) {
      return this.__data__.get(E);
    }, mn.prototype.has = function(E) {
      return this.__data__.has(E);
    }, mn.prototype.set = function(E, A) {
      var G = this.__data__;
      if (G instanceof Pe) {
        var se = G.__data__;
        if (!Vt || se.length < 199) return se.push([E, A]), this;
        G = this.__data__ = new Gt(se);
      }
      return G.set(E, A), this;
    };
    var Lt, Dt = (Lt = function(E, A) {
      return E && en(E, A, It);
    }, function(E, A) {
      if (E == null) return E;
      if (!$(E)) return Lt(E, A);
      for (var G = E.length, se = -1, Ce = Object(E); ++se < G && A(Ce[se], se, Ce) !== !1; ) ;
      return E;
    }), en = /* @__PURE__ */ function(E) {
      return function(A, G, se) {
        for (var Ce = -1, $e = Object(A), st = se(A), ot = st.length; ot--; ) {
          var on = st[++Ce];
          if (G($e[on], on, $e) === !1) break;
        }
        return A;
      };
    }();
    function Mn(E, A) {
      for (var G = 0, se = (A = Tr(A, E) ? [A] : yn(A)).length; E != null && G < se; ) E = E[cr(A[G++])];
      return G && G == se ? E : void 0;
    }
    function Nn(E, A) {
      return E != null && A in Object(E);
    }
    function Qn(E, A, G, se, Ce) {
      return E === A || (E == null || A == null || !ut(E) && !Wt(A) ? E != E && A != A : function($e, st, ot, on, cn, tn) {
        var dr = ar($e), Tn = ar(st), Bn = "[object Array]", Cn = "[object Array]";
        dr || (Bn = (Bn = Nr($e)) == T ? O : Bn), Tn || (Cn = (Cn = Nr(st)) == T ? O : Cn);
        var Wr = Bn == O && !Rt($e), ii = Cn == O && !Rt(st), Ba = Bn == Cn;
        if (Ba && !Wr) return tn || (tn = new mn()), dr || Tt($e) ? aa($e, st, ot, on, cn, tn) : function(pn, ln, oi, wa, Ni, er, Ya) {
          switch (oi) {
            case "[object DataView]":
              if (pn.byteLength != ln.byteLength || pn.byteOffset != ln.byteOffset) return !1;
              pn = pn.buffer, ln = ln.buffer;
            case "[object ArrayBuffer]":
              return !(pn.byteLength != ln.byteLength || !wa(new He(pn), new He(ln)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return zr(+pn, +ln);
            case "[object Error]":
              return pn.name == ln.name && pn.message == ln.message;
            case "[object RegExp]":
            case "[object String]":
              return pn == ln + "";
            case g:
              var Rr = qe;
            case k:
              var un = 2 & er;
              if (Rr || (Rr = ue), pn.size != ln.size && !un) return !1;
              var $i = Ya.get(pn);
              if ($i) return $i == ln;
              er |= 1, Ya.set(pn, ln);
              var Ta = aa(Rr(pn), Rr(ln), wa, Ni, er, Ya);
              return Ya.delete(pn), Ta;
            case "[object Symbol]":
              if (nt) return nt.call(pn) == nt.call(ln);
          }
          return !1;
        }($e, st, Bn, ot, on, cn, tn);
        if (!(2 & cn)) {
          var co = Wr && ne.call($e, "__wrapped__"), Mi = ii && ne.call(st, "__wrapped__");
          if (co || Mi) {
            var Wa = co ? $e.value() : $e, Yr = Mi ? st.value() : st;
            return tn || (tn = new mn()), ot(Wa, Yr, on, cn, tn);
          }
        }
        return Ba ? (tn || (tn = new mn()), function(pn, ln, oi, wa, Ni, er) {
          var Ya = 2 & Ni, Rr = It(pn), un = Rr.length, $i = It(ln).length;
          if (un != $i && !Ya) return !1;
          for (var Ta = un; Ta--; ) {
            var fa = Rr[Ta];
            if (!(Ya ? fa in ln : ne.call(ln, fa))) return !1;
          }
          var nn = er.get(pn);
          if (nn && er.get(ln)) return nn == ln;
          var zi = !0;
          er.set(pn, ln), er.set(ln, pn);
          for (var Gi = Ya; ++Ta < un; ) {
            fa = Rr[Ta];
            var zt = pn[fa], li = ln[fa];
            if (wa) var Hn = Ya ? wa(li, zt, fa, ln, pn, er) : wa(zt, li, fa, pn, ln, er);
            if (!(Hn === void 0 ? zt === li || oi(zt, li, wa, Ni, er) : Hn)) {
              zi = !1;
              break;
            }
            Gi || (Gi = fa == "constructor");
          }
          if (zi && !Gi) {
            var kr = pn.constructor, yr = ln.constructor;
            kr == yr || !("constructor" in pn) || !("constructor" in ln) || typeof kr == "function" && kr instanceof kr && typeof yr == "function" && yr instanceof yr || (zi = !1);
          }
          return er.delete(pn), er.delete(ln), zi;
        }($e, st, ot, on, cn, tn)) : !1;
      }(E, A, Qn, G, se, Ce));
    }
    function sn(E) {
      return !(!ut(E) || function(A) {
        return !!H && H in A;
      }(E)) && (ye(E) || Rt(E) ? Ue : ve).test(wn(E));
    }
    function Er(E) {
      return typeof E == "function" ? E : E == null ? Zn : typeof E == "object" ? ar(E) ? function(se, Ce) {
        return Tr(se) && Va(Ce) ? xr(cr(se), Ce) : function($e) {
          var st = function(ot, on, cn) {
            var tn = ot == null ? void 0 : Mn(ot, on);
            return tn === void 0 ? cn : tn;
          }($e, se);
          return st === void 0 && st === Ce ? function(ot, on) {
            return ot != null && function(cn, tn, dr) {
              tn = Tr(tn, cn) ? [tn] : yn(tn);
              for (var Tn, Bn = -1, Cn = tn.length; ++Bn < Cn; ) {
                var Wr = cr(tn[Bn]);
                if (!(Tn = cn != null && dr(cn, Wr))) break;
                cn = cn[Wr];
              }
              return Tn || !!(Cn = cn ? cn.length : 0) && ke(Cn) && Ai(Wr, Cn) && (ar(cn) || ca(cn));
            }(ot, on, Nn);
          }($e, se) : Qn(Ce, st, void 0, 3);
        };
      }(E[0], E[1]) : function(se) {
        var Ce = function($e) {
          for (var st = It($e), ot = st.length; ot--; ) {
            var on = st[ot], cn = $e[on];
            st[ot] = [on, cn, Va(cn)];
          }
          return st;
        }(se);
        return Ce.length == 1 && Ce[0][2] ? xr(Ce[0][0], Ce[0][1]) : function($e) {
          return $e === se || function(st, ot, on, cn) {
            var tn = on.length, dr = tn;
            if (st == null) return !dr;
            for (st = Object(st); tn--; ) {
              var Tn = on[tn];
              if (Tn[2] ? Tn[1] !== st[Tn[0]] : !(Tn[0] in st)) return !1;
            }
            for (; ++tn < dr; ) {
              var Bn = (Tn = on[tn])[0], Cn = st[Bn], Wr = Tn[1];
              if (Tn[2]) {
                if (Cn === void 0 && !(Bn in st)) return !1;
              } else {
                var ii = new mn(), Ba;
                if (!(Ba === void 0 ? Qn(Wr, Cn, cn, 3, ii) : Ba)) return !1;
              }
            }
            return !0;
          }($e, se, Ce);
        };
      }(E) : Tr(A = E) ? (G = cr(A), function(se) {
        return se == null ? void 0 : se[G];
      }) : /* @__PURE__ */ function(se) {
        return function(Ce) {
          return Mn(Ce, se);
        };
      }(A);
      var A, G;
    }
    function Sn(E) {
      if (G = (A = E) && A.constructor, se = typeof G == "function" && G.prototype || q, A !== se) return Kt(E);
      var A, G, se, Ce = [];
      for (var $e in Object(E)) ne.call(E, $e) && $e != "constructor" && Ce.push($e);
      return Ce;
    }
    function yn(E) {
      return ar(E) ? E : $r(E);
    }
    function aa(E, A, G, se, Ce, $e) {
      var st = 2 & Ce, ot = E.length, on = A.length;
      if (ot != on && !(st && on > ot)) return !1;
      var cn = $e.get(E);
      if (cn && $e.get(A)) return cn == A;
      var tn = -1, dr = !0, Tn = 1 & Ce ? new An() : void 0;
      for ($e.set(E, A), $e.set(A, E); ++tn < ot; ) {
        var Bn = E[tn], Cn = A[tn];
        if (se) var Wr = st ? se(Cn, Bn, tn, A, E, $e) : se(Bn, Cn, tn, E, A, $e);
        if (Wr !== void 0) {
          if (Wr) continue;
          dr = !1;
          break;
        }
        if (Tn) {
          if (!Xe(A, function(ii, Ba) {
            if (!Tn.has(Ba) && (Bn === ii || G(Bn, ii, se, Ce, $e))) return Tn.add(Ba);
          })) {
            dr = !1;
            break;
          }
        } else if (Bn !== Cn && !G(Bn, Cn, se, Ce, $e)) {
          dr = !1;
          break;
        }
      }
      return $e.delete(E), $e.delete(A), dr;
    }
    function wr(E, A) {
      var G, se, Ce = E.__data__;
      return ((se = typeof (G = A)) == "string" || se == "number" || se == "symbol" || se == "boolean" ? G !== "__proto__" : G === null) ? Ce[typeof A == "string" ? "string" : "hash"] : Ce.map;
    }
    function Br(E, A) {
      var G = function(se, Ce) {
        return se == null ? void 0 : se[Ce];
      }(E, A);
      return sn(G) ? G : void 0;
    }
    var Nr = function(E) {
      return _.call(E);
    };
    function Ai(E, A) {
      return !!(A = A ?? 9007199254740991) && (typeof E == "number" || Ke.test(E)) && E > -1 && E % 1 == 0 && E < A;
    }
    function Tr(E, A) {
      if (ar(E)) return !1;
      var G = typeof E;
      return !(G != "number" && G != "symbol" && G != "boolean" && E != null && !Zt(E)) || I.test(E) || !N.test(E) || A != null && E in Object(A);
    }
    function Va(E) {
      return E == E && !ut(E);
    }
    function xr(E, A) {
      return function(G) {
        return G != null && G[E] === A && (A !== void 0 || E in Object(G));
      };
    }
    (Jt && Nr(new Jt(new ArrayBuffer(1))) != "[object DataView]" || Vt && Nr(new Vt()) != g || Bt && Nr(Bt.resolve()) != "[object Promise]" || Q && Nr(new Q()) != k || ce && Nr(new ce()) != "[object WeakMap]") && (Nr = function(E) {
      var A = _.call(E), G = A == O ? E.constructor : void 0, se = G ? wn(G) : void 0;
      if (se) switch (se) {
        case vt:
          return "[object DataView]";
        case it:
          return g;
        case ct:
          return "[object Promise]";
        case mt:
          return k;
        case Ht:
          return "[object WeakMap]";
      }
      return A;
    });
    var $r = fr(function(E) {
      var A;
      E = (A = E) == null ? "" : function(se) {
        if (typeof se == "string") return se;
        if (Zt(se)) return wt ? wt.call(se) : "";
        var Ce = se + "";
        return Ce == "0" && 1 / se == -1 / 0 ? "-0" : Ce;
      }(A);
      var G = [];
      return z.test(E) && G.push(""), E.replace(X, function(se, Ce, $e, st) {
        G.push($e ? st.replace(V, "$1") : Ce || se);
      }), G;
    });
    function cr(E) {
      if (typeof E == "string" || Zt(E)) return E;
      var A = E + "";
      return A == "0" && 1 / E == -1 / 0 ? "-0" : A;
    }
    function wn(E) {
      if (E != null) {
        try {
          return Ee.call(E);
        } catch {
        }
        try {
          return E + "";
        } catch {
        }
      }
      return "";
    }
    function fr(E, A) {
      if (typeof E != "function" || A && typeof A != "function") throw new TypeError("Expected a function");
      var G = function() {
        var se = arguments, Ce = A ? A.apply(this, se) : se[0], $e = G.cache;
        if ($e.has(Ce)) return $e.get(Ce);
        var st = E.apply(this, se);
        return G.cache = $e.set(Ce, st), st;
      };
      return G.cache = new (fr.Cache || Gt)(), G;
    }
    function zr(E, A) {
      return E === A || E != E && A != A;
    }
    function ca(E) {
      return function(A) {
        return Wt(A) && $(A);
      }(E) && ne.call(E, "callee") && (!at.call(E, "callee") || _.call(E) == T);
    }
    fr.Cache = Gt;
    var ar = Array.isArray;
    function $(E) {
      return E != null && ke(E.length) && !ye(E);
    }
    function ye(E) {
      var A = ut(E) ? _.call(E) : "";
      return A == "[object Function]" || A == "[object GeneratorFunction]";
    }
    function ke(E) {
      return typeof E == "number" && E > -1 && E % 1 == 0 && E <= 9007199254740991;
    }
    function ut(E) {
      var A = typeof E;
      return !!E && (A == "object" || A == "function");
    }
    function Wt(E) {
      return !!E && typeof E == "object";
    }
    function Zt(E) {
      return typeof E == "symbol" || Wt(E) && _.call(E) == "[object Symbol]";
    }
    var Tt = ze ? /* @__PURE__ */ function(E) {
      return function(A) {
        return E(A);
      };
    }(ze) : function(E) {
      return Wt(E) && ke(E.length) && !!ae[_.call(E)];
    };
    function It(E) {
      return $(E) ? we(E) : Sn(E);
    }
    function Zn(E) {
      return E;
    }
    b.exports = function(E, A, G) {
      var se = ar(E) ? Le : Et, Ce = arguments.length < 3;
      return se(E, Er(A), G, Ce, Dt);
    };
  }).call(this, d(3), d(7)(c));
}, function(c, u) {
  c.exports = function(d) {
    return d.webpackPolyfill || (d.deprecate = function() {
    }, d.paths = [], d.children || (d.children = []), Object.defineProperty(d, "loaded", { enumerable: !0, get: function() {
      return d.l;
    } }), Object.defineProperty(d, "id", { enumerable: !0, get: function() {
      return d.i;
    } }), d.webpackPolyfill = 1), d;
  };
}, function(c, u) {
  String.prototype.padEnd || (String.prototype.padEnd = function(d, v) {
    return d >>= 0, v = String(v !== void 0 ? v : " "), this.length > d ? String(this) : ((d -= this.length) > v.length && (v += v.repeat(d / v.length)), String(this) + v.slice(0, d));
  });
}, function(c, u, d) {
  function v(q, D, H) {
    return D in q ? Object.defineProperty(q, D, { value: H, enumerable: !0, configurable: !0, writable: !0 }) : q[D] = H, q;
  }
  function b(q) {
    if (Symbol.iterator in Object(q) || Object.prototype.toString.call(q) === "[object Arguments]") return Array.from(q);
  }
  function T(q) {
    return function(D) {
      if (Array.isArray(D)) {
        for (var H = 0, Ee = new Array(D.length); H < D.length; H++) Ee[H] = D[H];
        return Ee;
      }
    }(q) || b(q) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }
  function g(q) {
    if (Array.isArray(q)) return q;
  }
  function O() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
  function k(q, D) {
    if (!(q instanceof D)) throw new TypeError("Cannot call a class as a function");
  }
  function N(q, D) {
    for (var H = 0; H < D.length; H++) {
      var Ee = D[H];
      Ee.enumerable = Ee.enumerable || !1, Ee.configurable = !0, "value" in Ee && (Ee.writable = !0), Object.defineProperty(q, Ee.key, Ee);
    }
  }
  function I(q) {
    return (I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(D) {
      return typeof D;
    } : function(D) {
      return D && typeof Symbol == "function" && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : typeof D;
    })(q);
  }
  function z(q) {
    return (z = typeof Symbol == "function" && I(Symbol.iterator) === "symbol" ? function(D) {
      return I(D);
    } : function(D) {
      return D && typeof Symbol == "function" && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : I(D);
    })(q);
  }
  function X(q) {
    if (q === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return q;
  }
  function V(q) {
    return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function(D) {
      return D.__proto__ || Object.getPrototypeOf(D);
    })(q);
  }
  function ve(q, D) {
    return (ve = Object.setPrototypeOf || function(H, Ee) {
      return H.__proto__ = Ee, H;
    })(q, D);
  }
  d.r(u);
  var Ke = d(0), ae = d.n(Ke), Ct = d(5), he = d.n(Ct), Oe = d(4), xe = d.n(Oe), le = d(6), Ve = d.n(le), Re = d(2), ze = d.n(Re), Le = d(1), Xe = d.n(Le);
  d(8);
  function Et(q, D) {
    return g(q) || function(H, Ee) {
      var ne = [], _ = !0, Ue = !1, Fe = void 0;
      try {
        for (var He, at = H[Symbol.iterator](); !(_ = (He = at.next()).done) && (ne.push(He.value), !Ee || ne.length !== Ee); _ = !0) ;
      } catch (kt) {
        Ue = !0, Fe = kt;
      } finally {
        try {
          _ || at.return == null || at.return();
        } finally {
          if (Ue) throw Fe;
        }
      }
      return ne;
    }(q, D) || O();
  }
  var Rt = [["Afghanistan", ["asia"], "af", "93"], ["Albania", ["europe"], "al", "355"], ["Algeria", ["africa", "north-africa"], "dz", "213"], ["Andorra", ["europe"], "ad", "376"], ["Angola", ["africa"], "ao", "244"], ["Antigua and Barbuda", ["america", "carribean"], "ag", "1268"], ["Argentina", ["america", "south-america"], "ar", "54", "(..) ........", 0, ["11", "221", "223", "261", "264", "2652", "280", "2905", "291", "2920", "2966", "299", "341", "342", "343", "351", "376", "379", "381", "3833", "385", "387", "388"]], ["Armenia", ["asia", "ex-ussr"], "am", "374", ".. ......"], ["Aruba", ["america", "carribean"], "aw", "297"], ["Australia", ["oceania"], "au", "61", "(..) .... ....", 0, ["2", "3", "4", "7", "8", "02", "03", "04", "07", "08"]], ["Austria", ["europe", "eu-union"], "at", "43"], ["Azerbaijan", ["asia", "ex-ussr"], "az", "994", "(..) ... .. .."], ["Bahamas", ["america", "carribean"], "bs", "1242"], ["Bahrain", ["middle-east"], "bh", "973"], ["Bangladesh", ["asia"], "bd", "880"], ["Barbados", ["america", "carribean"], "bb", "1246"], ["Belarus", ["europe", "ex-ussr"], "by", "375", "(..) ... .. .."], ["Belgium", ["europe", "eu-union"], "be", "32", "... .. .. .."], ["Belize", ["america", "central-america"], "bz", "501"], ["Benin", ["africa"], "bj", "229"], ["Bhutan", ["asia"], "bt", "975"], ["Bolivia", ["america", "south-america"], "bo", "591"], ["Bosnia and Herzegovina", ["europe", "ex-yugos"], "ba", "387"], ["Botswana", ["africa"], "bw", "267"], ["Brazil", ["america", "south-america"], "br", "55", "(..) ........."], ["British Indian Ocean Territory", ["asia"], "io", "246"], ["Brunei", ["asia"], "bn", "673"], ["Bulgaria", ["europe", "eu-union"], "bg", "359"], ["Burkina Faso", ["africa"], "bf", "226"], ["Burundi", ["africa"], "bi", "257"], ["Cambodia", ["asia"], "kh", "855"], ["Cameroon", ["africa"], "cm", "237"], ["Canada", ["america", "north-america"], "ca", "1", "(...) ...-....", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", ["africa"], "cv", "238"], ["Caribbean Netherlands", ["america", "carribean"], "bq", "599", "", 1], ["Central African Republic", ["africa"], "cf", "236"], ["Chad", ["africa"], "td", "235"], ["Chile", ["america", "south-america"], "cl", "56"], ["China", ["asia"], "cn", "86", "..-........."], ["Colombia", ["america", "south-america"], "co", "57", "... ... ...."], ["Comoros", ["africa"], "km", "269"], ["Congo", ["africa"], "cd", "243"], ["Congo", ["africa"], "cg", "242"], ["Costa Rica", ["america", "central-america"], "cr", "506", "....-...."], ["Côte d’Ivoire", ["africa"], "ci", "225", ".. .. .. .."], ["Croatia", ["europe", "eu-union", "ex-yugos"], "hr", "385"], ["Cuba", ["america", "carribean"], "cu", "53"], ["Curaçao", ["america", "carribean"], "cw", "599", "", 0], ["Cyprus", ["europe", "eu-union"], "cy", "357", ".. ......"], ["Czech Republic", ["europe", "eu-union"], "cz", "420", "... ... ..."], ["Denmark", ["europe", "eu-union", "baltic"], "dk", "45", ".. .. .. .."], ["Djibouti", ["africa"], "dj", "253"], ["Dominica", ["america", "carribean"], "dm", "1767"], ["Dominican Republic", ["america", "carribean"], "do", "1", "", 2, ["809", "829", "849"]], ["Ecuador", ["america", "south-america"], "ec", "593"], ["Egypt", ["africa", "north-africa"], "eg", "20"], ["El Salvador", ["america", "central-america"], "sv", "503", "....-...."], ["Equatorial Guinea", ["africa"], "gq", "240"], ["Eritrea", ["africa"], "er", "291"], ["Estonia", ["europe", "eu-union", "ex-ussr", "baltic"], "ee", "372", ".... ......"], ["Ethiopia", ["africa"], "et", "251"], ["Fiji", ["oceania"], "fj", "679"], ["Finland", ["europe", "eu-union", "baltic"], "fi", "358", ".. ... .. .."], ["France", ["europe", "eu-union"], "fr", "33", ". .. .. .. .."], ["French Guiana", ["america", "south-america"], "gf", "594"], ["French Polynesia", ["oceania"], "pf", "689"], ["Gabon", ["africa"], "ga", "241"], ["Gambia", ["africa"], "gm", "220"], ["Georgia", ["asia", "ex-ussr"], "ge", "995"], ["Germany", ["europe", "eu-union", "baltic"], "de", "49", ".... ........"], ["Ghana", ["africa"], "gh", "233"], ["Greece", ["europe", "eu-union"], "gr", "30"], ["Grenada", ["america", "carribean"], "gd", "1473"], ["Guadeloupe", ["america", "carribean"], "gp", "590", "", 0], ["Guam", ["oceania"], "gu", "1671"], ["Guatemala", ["america", "central-america"], "gt", "502", "....-...."], ["Guinea", ["africa"], "gn", "224"], ["Guinea-Bissau", ["africa"], "gw", "245"], ["Guyana", ["america", "south-america"], "gy", "592"], ["Haiti", ["america", "carribean"], "ht", "509", "....-...."], ["Honduras", ["america", "central-america"], "hn", "504"], ["Hong Kong", ["asia"], "hk", "852", ".... ...."], ["Hungary", ["europe", "eu-union"], "hu", "36"], ["Iceland", ["europe"], "is", "354", "... ...."], ["India", ["asia"], "in", "91", ".....-....."], ["Indonesia", ["asia"], "id", "62"], ["Iran", ["middle-east"], "ir", "98", "... ... ...."], ["Iraq", ["middle-east"], "iq", "964"], ["Ireland", ["europe", "eu-union"], "ie", "353", ".. ......."], ["Israel", ["middle-east"], "il", "972", "... ... ...."], ["Italy", ["europe", "eu-union"], "it", "39", "... .......", 0], ["Jamaica", ["america", "carribean"], "jm", "1876"], ["Japan", ["asia"], "jp", "81", ".. .... ...."], ["Jordan", ["middle-east"], "jo", "962"], ["Kazakhstan", ["asia", "ex-ussr"], "kz", "7", "... ...-..-..", 1, ["310", "311", "312", "313", "315", "318", "321", "324", "325", "326", "327", "336", "7172", "73622"]], ["Kenya", ["africa"], "ke", "254"], ["Kiribati", ["oceania"], "ki", "686"], ["Kosovo", ["europe", "ex-yugos"], "xk", "383"], ["Kuwait", ["middle-east"], "kw", "965"], ["Kyrgyzstan", ["asia", "ex-ussr"], "kg", "996", "... ... ..."], ["Laos", ["asia"], "la", "856"], ["Latvia", ["europe", "eu-union", "ex-ussr", "baltic"], "lv", "371", ".. ... ..."], ["Lebanon", ["middle-east"], "lb", "961"], ["Lesotho", ["africa"], "ls", "266"], ["Liberia", ["africa"], "lr", "231"], ["Libya", ["africa", "north-africa"], "ly", "218"], ["Liechtenstein", ["europe"], "li", "423"], ["Lithuania", ["europe", "eu-union", "ex-ussr", "baltic"], "lt", "370"], ["Luxembourg", ["europe", "eu-union"], "lu", "352"], ["Macau", ["asia"], "mo", "853"], ["Macedonia", ["europe", "ex-yugos"], "mk", "389"], ["Madagascar", ["africa"], "mg", "261"], ["Malawi", ["africa"], "mw", "265"], ["Malaysia", ["asia"], "my", "60", "..-....-...."], ["Maldives", ["asia"], "mv", "960"], ["Mali", ["africa"], "ml", "223"], ["Malta", ["europe", "eu-union"], "mt", "356"], ["Marshall Islands", ["oceania"], "mh", "692"], ["Martinique", ["america", "carribean"], "mq", "596"], ["Mauritania", ["africa"], "mr", "222"], ["Mauritius", ["africa"], "mu", "230"], ["Mexico", ["america", "central-america"], "mx", "52", "... ... ....", 0, ["55", "81", "33", "656", "664", "998", "774", "229"]], ["Micronesia", ["oceania"], "fm", "691"], ["Moldova", ["europe"], "md", "373", "(..) ..-..-.."], ["Monaco", ["europe"], "mc", "377"], ["Mongolia", ["asia"], "mn", "976"], ["Montenegro", ["europe", "ex-yugos"], "me", "382"], ["Morocco", ["africa", "north-africa"], "ma", "212"], ["Mozambique", ["africa"], "mz", "258"], ["Myanmar", ["asia"], "mm", "95"], ["Namibia", ["africa"], "na", "264"], ["Nauru", ["africa"], "nr", "674"], ["Nepal", ["asia"], "np", "977"], ["Netherlands", ["europe", "eu-union"], "nl", "31", ".. ........"], ["New Caledonia", ["oceania"], "nc", "687"], ["New Zealand", ["oceania"], "nz", "64", "...-...-...."], ["Nicaragua", ["america", "central-america"], "ni", "505"], ["Niger", ["africa"], "ne", "227"], ["Nigeria", ["africa"], "ng", "234"], ["North Korea", ["asia"], "kp", "850"], ["Norway", ["europe", "baltic"], "no", "47", "... .. ..."], ["Oman", ["middle-east"], "om", "968"], ["Pakistan", ["asia"], "pk", "92", "...-......."], ["Palau", ["oceania"], "pw", "680"], ["Palestine", ["middle-east"], "ps", "970"], ["Panama", ["america", "central-america"], "pa", "507"], ["Papua New Guinea", ["oceania"], "pg", "675"], ["Paraguay", ["america", "south-america"], "py", "595"], ["Peru", ["america", "south-america"], "pe", "51"], ["Philippines", ["asia"], "ph", "63", ".... ......."], ["Poland", ["europe", "eu-union", "baltic"], "pl", "48", "...-...-..."], ["Portugal", ["europe", "eu-union"], "pt", "351"], ["Puerto Rico", ["america", "carribean"], "pr", "1", "", 3, ["787", "939"]], ["Qatar", ["middle-east"], "qa", "974"], ["Réunion", ["africa"], "re", "262"], ["Romania", ["europe", "eu-union"], "ro", "40"], ["Russia", ["europe", "asia", "ex-ussr", "baltic"], "ru", "7", "(...) ...-..-..", 0], ["Rwanda", ["africa"], "rw", "250"], ["Saint Kitts and Nevis", ["america", "carribean"], "kn", "1869"], ["Saint Lucia", ["america", "carribean"], "lc", "1758"], ["Saint Vincent and the Grenadines", ["america", "carribean"], "vc", "1784"], ["Samoa", ["oceania"], "ws", "685"], ["San Marino", ["europe"], "sm", "378"], ["São Tomé and Príncipe", ["africa"], "st", "239"], ["Saudi Arabia", ["middle-east"], "sa", "966"], ["Senegal", ["africa"], "sn", "221"], ["Serbia", ["europe", "ex-yugos"], "rs", "381"], ["Seychelles", ["africa"], "sc", "248"], ["Sierra Leone", ["africa"], "sl", "232"], ["Singapore", ["asia"], "sg", "65", "....-...."], ["Slovakia", ["europe", "eu-union"], "sk", "421"], ["Slovenia", ["europe", "eu-union", "ex-yugos"], "si", "386"], ["Solomon Islands", ["oceania"], "sb", "677"], ["Somalia", ["africa"], "so", "252"], ["South Africa", ["africa"], "za", "27"], ["South Korea", ["asia"], "kr", "82", "... .... ...."], ["South Sudan", ["africa", "north-africa"], "ss", "211"], ["Spain", ["europe", "eu-union"], "es", "34", "... ... ..."], ["Sri Lanka", ["asia"], "lk", "94"], ["Sudan", ["africa"], "sd", "249"], ["Suriname", ["america", "south-america"], "sr", "597"], ["Swaziland", ["africa"], "sz", "268"], ["Sweden", ["europe", "eu-union", "baltic"], "se", "46", "(...) ...-..."], ["Switzerland", ["europe"], "ch", "41", ".. ... .. .."], ["Syria", ["middle-east"], "sy", "963"], ["Taiwan", ["asia"], "tw", "886"], ["Tajikistan", ["asia", "ex-ussr"], "tj", "992"], ["Tanzania", ["africa"], "tz", "255"], ["Thailand", ["asia"], "th", "66"], ["Timor-Leste", ["asia"], "tl", "670"], ["Togo", ["africa"], "tg", "228"], ["Tonga", ["oceania"], "to", "676"], ["Trinidad and Tobago", ["america", "carribean"], "tt", "1868"], ["Tunisia", ["africa", "north-africa"], "tn", "216"], ["Turkey", ["europe"], "tr", "90", "... ... .. .."], ["Turkmenistan", ["asia", "ex-ussr"], "tm", "993"], ["Tuvalu", ["asia"], "tv", "688"], ["Uganda", ["africa"], "ug", "256"], ["Ukraine", ["europe", "ex-ussr"], "ua", "380", "(..) ... .. .."], ["United Arab Emirates", ["middle-east"], "ae", "971"], ["United Kingdom", ["europe", "eu-union"], "gb", "44", ".... ......"], ["United States", ["america", "north-america"], "us", "1", "(...) ...-....", 0, ["907", "205", "251", "256", "334", "479", "501", "870", "480", "520", "602", "623", "928", "209", "213", "310", "323", "408", "415", "510", "530", "559", "562", "619", "626", "650", "661", "707", "714", "760", "805", "818", "831", "858", "909", "916", "925", "949", "951", "303", "719", "970", "203", "860", "202", "302", "239", "305", "321", "352", "386", "407", "561", "727", "772", "813", "850", "863", "904", "941", "954", "229", "404", "478", "706", "770", "912", "808", "319", "515", "563", "641", "712", "208", "217", "309", "312", "618", "630", "708", "773", "815", "847", "219", "260", "317", "574", "765", "812", "316", "620", "785", "913", "270", "502", "606", "859", "225", "318", "337", "504", "985", "413", "508", "617", "781", "978", "301", "410", "207", "231", "248", "269", "313", "517", "586", "616", "734", "810", "906", "989", "218", "320", "507", "612", "651", "763", "952", "314", "417", "573", "636", "660", "816", "228", "601", "662", "406", "252", "336", "704", "828", "910", "919", "701", "308", "402", "603", "201", "609", "732", "856", "908", "973", "505", "575", "702", "775", "212", "315", "516", "518", "585", "607", "631", "716", "718", "845", "914", "216", "330", "419", "440", "513", "614", "740", "937", "405", "580", "918", "503", "541", "215", "412", "570", "610", "717", "724", "814", "401", "803", "843", "864", "605", "423", "615", "731", "865", "901", "931", "210", "214", "254", "281", "325", "361", "409", "432", "512", "713", "806", "817", "830", "903", "915", "936", "940", "956", "972", "979", "435", "801", "276", "434", "540", "703", "757", "804", "802", "206", "253", "360", "425", "509", "262", "414", "608", "715", "920", "304", "307"]], ["Uruguay", ["america", "south-america"], "uy", "598"], ["Uzbekistan", ["asia", "ex-ussr"], "uz", "998", ".. ... .. .."], ["Vanuatu", ["oceania"], "vu", "678"], ["Vatican City", ["europe"], "va", "39", ".. .... ....", 1], ["Venezuela", ["america", "south-america"], "ve", "58"], ["Vietnam", ["asia"], "vn", "84"], ["Yemen", ["middle-east"], "ye", "967"], ["Zambia", ["africa"], "zm", "260"], ["Zimbabwe", ["africa"], "zw", "263"]], qe = [["American Samoa", ["oceania"], "as", "1684"], ["Anguilla", ["america", "carribean"], "ai", "1264"], ["Bermuda", ["america", "north-america"], "bm", "1441"], ["British Virgin Islands", ["america", "carribean"], "vg", "1284"], ["Cayman Islands", ["america", "carribean"], "ky", "1345"], ["Cook Islands", ["oceania"], "ck", "682"], ["Falkland Islands", ["america", "south-america"], "fk", "500"], ["Faroe Islands", ["europe"], "fo", "298"], ["Gibraltar", ["europe"], "gi", "350"], ["Greenland", ["america"], "gl", "299"], ["Jersey", ["europe", "eu-union"], "je", "44", ".... ......"], ["Montserrat", ["america", "carribean"], "ms", "1664"], ["Niue", ["asia"], "nu", "683"], ["Norfolk Island", ["oceania"], "nf", "672"], ["Northern Mariana Islands", ["oceania"], "mp", "1670"], ["Saint Barthélemy", ["america", "carribean"], "bl", "590", "", 1], ["Saint Helena", ["africa"], "sh", "290"], ["Saint Martin", ["america", "carribean"], "mf", "590", "", 2], ["Saint Pierre and Miquelon", ["america", "north-america"], "pm", "508"], ["Sint Maarten", ["america", "carribean"], "sx", "1721"], ["Tokelau", ["oceania"], "tk", "690"], ["Turks and Caicos Islands", ["america", "carribean"], "tc", "1649"], ["U.S. Virgin Islands", ["america", "carribean"], "vi", "1340"], ["Wallis and Futuna", ["oceania"], "wf", "681"]];
  function ue(q, D, H, Ee, ne) {
    return !H || ne ? q + "".padEnd(D.length, ".") + " " + Ee : q + "".padEnd(D.length, ".") + " " + H;
  }
  function be(q, D, H, Ee, ne) {
    var _, Ue, Fe = [];
    return Ue = D === !0, [(_ = []).concat.apply(_, T(q.map(function(He) {
      var at = { name: He[0], regions: He[1], iso2: He[2], countryCode: He[3], dialCode: He[3], format: ue(H, He[3], He[4], Ee, ne), priority: He[5] || 0 }, kt = [];
      return He[6] && He[6].map(function(Kt) {
        var Jt = function(Vt) {
          for (var Bt = 1; Bt < arguments.length; Bt++) {
            var Q = arguments[Bt] != null ? arguments[Bt] : {}, ce = Object.keys(Q);
            typeof Object.getOwnPropertySymbols == "function" && (ce = ce.concat(Object.getOwnPropertySymbols(Q).filter(function(Ne) {
              return Object.getOwnPropertyDescriptor(Q, Ne).enumerable;
            }))), ce.forEach(function(Ne) {
              v(Vt, Ne, Q[Ne]);
            });
          }
          return Vt;
        }({}, at);
        Jt.dialCode = He[3] + Kt, Jt.isAreaCode = !0, Jt.areaCodeLength = Kt.length, kt.push(Jt);
      }), kt.length > 0 ? (at.mainCode = !0, Ue || D.constructor.name === "Array" && D.includes(He[2]) ? (at.hasAreaCodes = !0, [at].concat(kt)) : (Fe = Fe.concat(kt), [at])) : [at];
    }))), Fe];
  }
  function me(q, D, H, Ee) {
    if (H !== null) {
      var ne = Object.keys(H), _ = Object.values(H);
      ne.forEach(function(Ue, Fe) {
        if (Ee) return q.push([Ue, _[Fe]]);
        var He = q.findIndex(function(kt) {
          return kt[0] === Ue;
        });
        if (He === -1) {
          var at = [Ue];
          at[D] = _[Fe], q.push(at);
        } else q[He][D] = _[Fe];
      });
    }
  }
  function pe(q, D) {
    return D.length === 0 ? q : q.map(function(H) {
      var Ee = D.findIndex(function(_) {
        return _[0] === H[2];
      });
      if (Ee === -1) return H;
      var ne = D[Ee];
      return ne[1] && (H[4] = ne[1]), ne[3] && (H[5] = ne[3]), ne[2] && (H[6] = ne[2]), H;
    });
  }
  var de = function q(D, H, Ee, ne, _, Ue, Fe, He, at, kt, Kt, Jt, Vt, Bt) {
    k(this, q), this.filterRegions = function(je, nt) {
      if (typeof je == "string") {
        var wt = je;
        return nt.filter(function(Ie) {
          return Ie.regions.some(function(Pe) {
            return Pe === wt;
          });
        });
      }
      return nt.filter(function(Ie) {
        return je.map(function(Pe) {
          return Ie.regions.some(function(Gt) {
            return Gt === Pe;
          });
        }).some(function(Pe) {
          return Pe;
        });
      });
    }, this.sortTerritories = function(je, nt) {
      var wt = [].concat(T(je), T(nt));
      return wt.sort(function(Ie, Pe) {
        return Ie.name < Pe.name ? -1 : Ie.name > Pe.name ? 1 : 0;
      }), wt;
    }, this.getFilteredCountryList = function(je, nt, wt) {
      return je.length === 0 ? nt : wt ? je.map(function(Ie) {
        var Pe = nt.find(function(Gt) {
          return Gt.iso2 === Ie;
        });
        if (Pe) return Pe;
      }).filter(function(Ie) {
        return Ie;
      }) : nt.filter(function(Ie) {
        return je.some(function(Pe) {
          return Pe === Ie.iso2;
        });
      });
    }, this.localizeCountries = function(je, nt, wt) {
      for (var Ie = 0; Ie < je.length; Ie++) nt[je[Ie].iso2] !== void 0 ? je[Ie].localName = nt[je[Ie].iso2] : nt[je[Ie].name] !== void 0 && (je[Ie].localName = nt[je[Ie].name]);
      return wt || je.sort(function(Pe, Gt) {
        return Pe.localName < Gt.localName ? -1 : Pe.localName > Gt.localName ? 1 : 0;
      }), je;
    }, this.getCustomAreas = function(je, nt) {
      for (var wt = [], Ie = 0; Ie < nt.length; Ie++) {
        var Pe = JSON.parse(JSON.stringify(je));
        Pe.dialCode += nt[Ie], wt.push(Pe);
      }
      return wt;
    }, this.excludeCountries = function(je, nt) {
      return nt.length === 0 ? je : je.filter(function(wt) {
        return !nt.includes(wt.iso2);
      });
    };
    var Q = function(je, nt, wt) {
      var Ie = [];
      return me(Ie, 1, je, !0), me(Ie, 3, nt), me(Ie, 2, wt), Ie;
    }(He, at, kt), ce = pe(JSON.parse(JSON.stringify(Rt)), Q), Ne = pe(JSON.parse(JSON.stringify(qe)), Q), vt = Et(be(ce, D, Jt, Vt, Bt), 2), it = vt[0], ct = vt[1];
    if (H) {
      var mt = Et(be(Ne, D, Jt, Vt, Bt), 2), Ht = mt[0];
      mt[1], it = this.sortTerritories(Ht, it);
    }
    Ee && (it = this.filterRegions(Ee, it)), this.onlyCountries = this.localizeCountries(this.excludeCountries(this.getFilteredCountryList(ne, it, Fe.includes("onlyCountries")), Ue), Kt, Fe.includes("onlyCountries")), this.preferredCountries = _.length === 0 ? [] : this.localizeCountries(this.getFilteredCountryList(_, it, Fe.includes("preferredCountries")), Kt, Fe.includes("preferredCountries")), this.hiddenAreaCodes = this.excludeCountries(this.getFilteredCountryList(ne, ct), Ue);
  }, Ye = function(q) {
    function D(ne) {
      var _;
      k(this, D), (_ = function(Q, ce) {
        return !ce || z(ce) !== "object" && typeof ce != "function" ? X(Q) : ce;
      }(this, V(D).call(this, ne))).getProbableCandidate = xe()(function(Q) {
        return Q && Q.length !== 0 ? _.state.onlyCountries.filter(function(ce) {
          return ze()(ce.name.toLowerCase(), Q.toLowerCase());
        }, X(X(_)))[0] : null;
      }), _.guessSelectedCountry = xe()(function(Q, ce, Ne, vt) {
        var it;
        if (_.props.enableAreaCodes === !1 && (vt.some(function(Ht) {
          if (ze()(Q, Ht.dialCode)) return Ne.some(function(je) {
            if (Ht.iso2 === je.iso2 && je.mainCode) return it = je, !0;
          }), !0;
        }), it)) return it;
        var ct = Ne.find(function(Ht) {
          return Ht.iso2 == ce;
        });
        if (Q.trim() === "") return ct;
        var mt = Ne.reduce(function(Ht, je) {
          return ze()(Q, je.dialCode) && (je.dialCode.length > Ht.dialCode.length || je.dialCode.length === Ht.dialCode.length && je.priority < Ht.priority) ? je : Ht;
        }, { dialCode: "", priority: 10001 }, X(X(_)));
        return mt.name ? mt : ct;
      }), _.updateCountry = function(Q) {
        var ce, Ne = _.state.onlyCountries;
        (ce = Q.indexOf(0) >= "0" && Q.indexOf(0) <= "9" ? Ne.find(function(vt) {
          return vt.dialCode == +Q;
        }) : Ne.find(function(vt) {
          return vt.iso2 == Q;
        })) && ce.dialCode && _.setState({ selectedCountry: ce, formattedNumber: _.props.disableCountryCode ? "" : _.formatNumber(ce.dialCode, ce) });
      }, _.scrollTo = function(Q, ce) {
        if (Q) {
          var Ne = _.dropdownRef;
          if (Ne && document.body) {
            var vt = Ne.offsetHeight, it = Ne.getBoundingClientRect().top + document.body.scrollTop, ct = it + vt, mt = Q, Ht = mt.getBoundingClientRect(), je = mt.offsetHeight, nt = Ht.top + document.body.scrollTop, wt = nt + je, Ie = nt - it + Ne.scrollTop, Pe = vt / 2 - je / 2;
            if (_.props.enableSearch ? nt < it + 32 : nt < it) ce && (Ie -= Pe), Ne.scrollTop = Ie;
            else if (wt > ct) {
              ce && (Ie += Pe);
              var Gt = vt - je;
              Ne.scrollTop = Ie - Gt;
            }
          }
        }
      }, _.scrollToTop = function() {
        var Q = _.dropdownRef;
        Q && document.body && (Q.scrollTop = 0);
      }, _.formatNumber = function(Q, ce) {
        if (!ce) return Q;
        var Ne, vt = ce.format, it = _.props, ct = it.disableCountryCode, mt = it.enableAreaCodeStretch, Ht = it.enableLongNumbers, je = it.autoFormat;
        if (ct ? ((Ne = vt.split(" ")).shift(), Ne = Ne.join(" ")) : mt && ce.isAreaCode ? ((Ne = vt.split(" "))[1] = Ne[1].replace(/\.+/, "".padEnd(ce.areaCodeLength, ".")), Ne = Ne.join(" ")) : Ne = vt, !Q || Q.length === 0) return ct ? "" : _.props.prefix;
        if (Q && Q.length < 2 || !Ne || !je) return ct ? Q : _.props.prefix + Q;
        var nt, wt = Ve()(Ne, function(Ie, Pe) {
          if (Ie.remainingText.length === 0) return Ie;
          if (Pe !== ".") return { formattedText: Ie.formattedText + Pe, remainingText: Ie.remainingText };
          var Gt, An = g(Gt = Ie.remainingText) || b(Gt) || O(), mn = An[0], we = An.slice(1);
          return { formattedText: Ie.formattedText + mn, remainingText: we };
        }, { formattedText: "", remainingText: Q.split("") });
        return (nt = Ht ? wt.formattedText + wt.remainingText.join("") : wt.formattedText).includes("(") && !nt.includes(")") && (nt += ")"), nt;
      }, _.cursorToEnd = function() {
        var Q = _.numberInputRef;
        if (document.activeElement === Q) {
          Q.focus();
          var ce = Q.value.length;
          Q.value.charAt(ce - 1) === ")" && (ce -= 1), Q.setSelectionRange(ce, ce);
        }
      }, _.getElement = function(Q) {
        return _["flag_no_".concat(Q)];
      }, _.getCountryData = function() {
        return _.state.selectedCountry ? { name: _.state.selectedCountry.name || "", dialCode: _.state.selectedCountry.dialCode || "", countryCode: _.state.selectedCountry.iso2 || "", format: _.state.selectedCountry.format || "" } : {};
      }, _.handleFlagDropdownClick = function(Q) {
        if (Q.preventDefault(), _.state.showDropdown || !_.props.disabled) {
          var ce = _.state, Ne = ce.preferredCountries, vt = ce.onlyCountries, it = ce.selectedCountry, ct = _.concatPreferredCountries(Ne, vt).findIndex(function(mt) {
            return mt.dialCode === it.dialCode && mt.iso2 === it.iso2;
          });
          _.setState({ showDropdown: !_.state.showDropdown, highlightCountryIndex: ct }, function() {
            _.state.showDropdown && _.scrollTo(_.getElement(_.state.highlightCountryIndex));
          });
        }
      }, _.handleInput = function(Q) {
        var ce = Q.target.value, Ne = _.props, vt = Ne.prefix, it = Ne.onChange, ct = _.props.disableCountryCode ? "" : vt, mt = _.state.selectedCountry, Ht = _.state.freezeSelection;
        if (!_.props.countryCodeEditable) {
          var je = vt + (mt.hasAreaCodes ? _.state.onlyCountries.find(function(Dt) {
            return Dt.iso2 === mt.iso2 && Dt.mainCode;
          }).dialCode : mt.dialCode);
          if (ce.slice(0, je.length) !== je) return;
        }
        if (ce === vt) return it && it("", _.getCountryData(), Q, ""), _.setState({ formattedNumber: "" });
        if (!(ce.replace(/\D/g, "").length > 15 && (_.props.enableLongNumbers === !1 || typeof _.props.enableLongNumbers == "number" && ce.replace(/\D/g, "").length > _.props.enableLongNumbers)) && ce !== _.state.formattedNumber) {
          Q.preventDefault ? Q.preventDefault() : Q.returnValue = !1;
          var nt = _.props.country, wt = _.state, Ie = wt.onlyCountries, Pe = wt.selectedCountry, Gt = wt.hiddenAreaCodes;
          if (it && Q.persist(), ce.length > 0) {
            var An = ce.replace(/\D/g, "");
            (!_.state.freezeSelection || Pe && Pe.dialCode.length > An.length) && (mt = _.props.disableCountryGuess ? Pe : _.guessSelectedCountry(An.substring(0, 6), nt, Ie, Gt) || Pe, Ht = !1), ct = _.formatNumber(An, mt), mt = mt.dialCode ? mt : Pe;
          }
          var mn = Q.target.selectionStart, we = Q.target.selectionStart, Je = _.state.formattedNumber, Lt = ct.length - Je.length;
          _.setState({ formattedNumber: ct, freezeSelection: Ht, selectedCountry: mt }, function() {
            Lt > 0 && (we -= Lt), ct.charAt(ct.length - 1) == ")" ? _.numberInputRef.setSelectionRange(ct.length - 1, ct.length - 1) : we > 0 && Je.length >= ct.length ? _.numberInputRef.setSelectionRange(we, we) : mn < Je.length && _.numberInputRef.setSelectionRange(mn, mn), it && it(ct.replace(/[^0-9]+/g, ""), _.getCountryData(), Q, ct);
          });
        }
      }, _.handleInputClick = function(Q) {
        _.setState({ showDropdown: !1 }), _.props.onClick && _.props.onClick(Q, _.getCountryData());
      }, _.handleDoubleClick = function(Q) {
        var ce = Q.target.value.length;
        Q.target.setSelectionRange(0, ce);
      }, _.handleFlagItemClick = function(Q, ce) {
        var Ne = _.state.selectedCountry, vt = _.state.onlyCountries.find(function(Ht) {
          return Ht == Q;
        });
        if (vt) {
          var it = _.state.formattedNumber.replace(" ", "").replace("(", "").replace(")", "").replace("-", ""), ct = it.length > 1 ? it.replace(Ne.dialCode, vt.dialCode) : vt.dialCode, mt = _.formatNumber(ct.replace(/\D/g, ""), vt);
          _.setState({ showDropdown: !1, selectedCountry: vt, freezeSelection: !0, formattedNumber: mt, searchValue: "" }, function() {
            _.cursorToEnd(), _.props.onChange && _.props.onChange(mt.replace(/[^0-9]+/g, ""), _.getCountryData(), ce, mt);
          });
        }
      }, _.handleInputFocus = function(Q) {
        _.numberInputRef && _.numberInputRef.value === _.props.prefix && _.state.selectedCountry && !_.props.disableCountryCode && _.setState({ formattedNumber: _.props.prefix + _.state.selectedCountry.dialCode }, function() {
          _.props.jumpCursorToEnd && setTimeout(_.cursorToEnd, 0);
        }), _.setState({ placeholder: "" }), _.props.onFocus && _.props.onFocus(Q, _.getCountryData()), _.props.jumpCursorToEnd && setTimeout(_.cursorToEnd, 0);
      }, _.handleInputBlur = function(Q) {
        Q.target.value || _.setState({ placeholder: _.props.placeholder }), _.props.onBlur && _.props.onBlur(Q, _.getCountryData());
      }, _.handleInputCopy = function(Q) {
        if (_.props.copyNumbersOnly) {
          var ce = window.getSelection().toString().replace(/[^0-9]+/g, "");
          Q.clipboardData.setData("text/plain", ce), Q.preventDefault();
        }
      }, _.getHighlightCountryIndex = function(Q) {
        var ce = _.state.highlightCountryIndex + Q;
        return ce < 0 || ce >= _.state.onlyCountries.length + _.state.preferredCountries.length ? ce - Q : _.props.enableSearch && ce > _.getSearchFilteredCountries().length ? 0 : ce;
      }, _.searchCountry = function() {
        var Q = _.getProbableCandidate(_.state.queryString) || _.state.onlyCountries[0], ce = _.state.onlyCountries.findIndex(function(Ne) {
          return Ne == Q;
        }) + _.state.preferredCountries.length;
        _.scrollTo(_.getElement(ce), !0), _.setState({ queryString: "", highlightCountryIndex: ce });
      }, _.handleKeydown = function(Q) {
        var ce = _.props.keys, Ne = Q.target.className;
        if (Ne.includes("selected-flag") && Q.which === ce.ENTER && !_.state.showDropdown) return _.handleFlagDropdownClick(Q);
        if (Ne.includes("form-control") && (Q.which === ce.ENTER || Q.which === ce.ESC)) return Q.target.blur();
        if (_.state.showDropdown && !_.props.disabled && (!Ne.includes("search-box") || Q.which === ce.UP || Q.which === ce.DOWN || Q.which === ce.ENTER || Q.which === ce.ESC && Q.target.value === "")) {
          Q.preventDefault ? Q.preventDefault() : Q.returnValue = !1;
          var vt = function(it) {
            _.setState({ highlightCountryIndex: _.getHighlightCountryIndex(it) }, function() {
              _.scrollTo(_.getElement(_.state.highlightCountryIndex), !0);
            });
          };
          switch (Q.which) {
            case ce.DOWN:
              vt(1);
              break;
            case ce.UP:
              vt(-1);
              break;
            case ce.ENTER:
              _.props.enableSearch ? _.handleFlagItemClick(_.getSearchFilteredCountries()[_.state.highlightCountryIndex] || _.getSearchFilteredCountries()[0], Q) : _.handleFlagItemClick([].concat(T(_.state.preferredCountries), T(_.state.onlyCountries))[_.state.highlightCountryIndex], Q);
              break;
            case ce.ESC:
            case ce.TAB:
              _.setState({ showDropdown: !1 }, _.cursorToEnd);
              break;
            default:
              (Q.which >= ce.A && Q.which <= ce.Z || Q.which === ce.SPACE) && _.setState({ queryString: _.state.queryString + String.fromCharCode(Q.which) }, _.state.debouncedQueryStingSearcher);
          }
        }
      }, _.handleInputKeyDown = function(Q) {
        var ce = _.props, Ne = ce.keys, vt = ce.onEnterKeyPress, it = ce.onKeyDown;
        Q.which === Ne.ENTER && vt && vt(Q), it && it(Q);
      }, _.handleClickOutside = function(Q) {
        _.dropdownRef && !_.dropdownContainerRef.contains(Q.target) && _.state.showDropdown && _.setState({ showDropdown: !1 });
      }, _.handleSearchChange = function(Q) {
        var ce = Q.currentTarget.value, Ne = _.state, vt = Ne.preferredCountries, it = Ne.selectedCountry, ct = 0;
        if (ce === "" && it) {
          var mt = _.state.onlyCountries;
          ct = _.concatPreferredCountries(vt, mt).findIndex(function(Ht) {
            return Ht == it;
          }), setTimeout(function() {
            return _.scrollTo(_.getElement(ct));
          }, 100);
        }
        _.setState({ searchValue: ce, highlightCountryIndex: ct });
      }, _.concatPreferredCountries = function(Q, ce) {
        return Q.length > 0 ? T(new Set(Q.concat(ce))) : ce;
      }, _.getDropdownCountryName = function(Q) {
        return Q.localName || Q.name;
      }, _.getSearchFilteredCountries = function() {
        var Q = _.state, ce = Q.preferredCountries, Ne = Q.onlyCountries, vt = Q.searchValue, it = _.props.enableSearch, ct = _.concatPreferredCountries(ce, Ne), mt = vt.trim().toLowerCase().replace("+", "");
        if (it && mt) {
          if (/^\d+$/.test(mt)) return ct.filter(function(nt) {
            var wt = nt.dialCode;
            return ["".concat(wt)].some(function(Ie) {
              return Ie.toLowerCase().includes(mt);
            });
          });
          var Ht = ct.filter(function(nt) {
            var wt = nt.iso2;
            return ["".concat(wt)].some(function(Ie) {
              return Ie.toLowerCase().includes(mt);
            });
          }), je = ct.filter(function(nt) {
            var wt = nt.name, Ie = nt.localName;
            return nt.iso2, ["".concat(wt), "".concat(Ie || "")].some(function(Pe) {
              return Pe.toLowerCase().includes(mt);
            });
          });
          return _.scrollToTop(), T(new Set([].concat(Ht, je)));
        }
        return ct;
      }, _.getCountryDropdownList = function() {
        var Q = _.state, ce = Q.preferredCountries, Ne = Q.highlightCountryIndex, vt = Q.showDropdown, it = Q.searchValue, ct = _.props, mt = ct.disableDropdown, Ht = ct.prefix, je = _.props, nt = je.enableSearch, wt = je.searchNotFound, Ie = je.disableSearchIcon, Pe = je.searchClass, Gt = je.searchStyle, An = je.searchPlaceholder, mn = je.autocompleteSearch, we = _.getSearchFilteredCountries().map(function(Dt, en) {
          var Mn = Ne === en, Nn = Xe()({ country: !0, preferred: Dt.iso2 === "us" || Dt.iso2 === "gb", active: Dt.iso2 === "us", highlight: Mn }), Qn = "flag ".concat(Dt.iso2);
          return ae.a.createElement("li", Object.assign({ ref: function(sn) {
            return _["flag_no_".concat(en)] = sn;
          }, key: "flag_no_".concat(en), "data-flag-key": "flag_no_".concat(en), className: Nn, "data-dial-code": "1", tabIndex: mt ? "-1" : "0", "data-country-code": Dt.iso2, onClick: function(sn) {
            return _.handleFlagItemClick(Dt, sn);
          }, role: "option" }, Mn ? { "aria-selected": !0 } : {}), ae.a.createElement("div", { className: Qn }), ae.a.createElement("span", { className: "country-name" }, _.getDropdownCountryName(Dt)), ae.a.createElement("span", { className: "dial-code" }, Dt.format ? _.formatNumber(Dt.dialCode, Dt) : Ht + Dt.dialCode));
        }), Je = ae.a.createElement("li", { key: "dashes", className: "divider" });
        ce.length > 0 && (!nt || nt && !it.trim()) && we.splice(ce.length, 0, Je);
        var Lt = Xe()(v({ "country-list": !0, hide: !vt }, _.props.dropdownClass, !0));
        return ae.a.createElement("ul", { ref: function(Dt) {
          return !nt && Dt && Dt.focus(), _.dropdownRef = Dt;
        }, className: Lt, style: _.props.dropdownStyle, role: "listbox", tabIndex: "0" }, nt && ae.a.createElement("li", { className: Xe()(v({ search: !0 }, Pe, Pe)) }, !Ie && ae.a.createElement("span", { className: Xe()(v({ "search-emoji": !0 }, "".concat(Pe, "-emoji"), Pe)), role: "img", "aria-label": "Magnifying glass" }, "🔎"), ae.a.createElement("input", { className: Xe()(v({ "search-box": !0 }, "".concat(Pe, "-box"), Pe)), style: Gt, type: "search", placeholder: An, autoFocus: !0, autoComplete: mn ? "on" : "off", value: it, onChange: _.handleSearchChange })), we.length > 0 ? we : ae.a.createElement("li", { className: "no-entries-message" }, ae.a.createElement("span", null, wt)));
      };
      var Ue, Fe = new de(ne.enableAreaCodes, ne.enableTerritories, ne.regions, ne.onlyCountries, ne.preferredCountries, ne.excludeCountries, ne.preserveOrder, ne.masks, ne.priority, ne.areaCodes, ne.localization, ne.prefix, ne.defaultMask, ne.alwaysDefaultMask), He = Fe.onlyCountries, at = Fe.preferredCountries, kt = Fe.hiddenAreaCodes, Kt = ne.value ? ne.value.replace(/\D/g, "") : "";
      Ue = ne.disableInitialCountryGuess ? 0 : Kt.length > 1 ? _.guessSelectedCountry(Kt.substring(0, 6), ne.country, He, kt) || 0 : ne.country && He.find(function(Q) {
        return Q.iso2 == ne.country;
      }) || 0;
      var Jt, Vt = Kt.length < 2 && Ue && !ze()(Kt, Ue.dialCode) ? Ue.dialCode : "";
      Jt = Kt === "" && Ue === 0 ? "" : _.formatNumber((ne.disableCountryCode ? "" : Vt) + Kt, Ue.name ? Ue : void 0);
      var Bt = He.findIndex(function(Q) {
        return Q == Ue;
      });
      return _.state = { showDropdown: ne.showDropdown, formattedNumber: Jt, onlyCountries: He, preferredCountries: at, hiddenAreaCodes: kt, selectedCountry: Ue, highlightCountryIndex: Bt, queryString: "", freezeSelection: !1, debouncedQueryStingSearcher: he()(_.searchCountry, 250), searchValue: "" }, _;
    }
    var H, Ee;
    return function(ne, _) {
      if (typeof _ != "function" && _ !== null) throw new TypeError("Super expression must either be null or a function");
      ne.prototype = Object.create(_ && _.prototype, { constructor: { value: ne, writable: !0, configurable: !0 } }), _ && ve(ne, _);
    }(D, q), H = D, (Ee = [{ key: "componentDidMount", value: function() {
      document.addEventListener && this.props.enableClickOutside && document.addEventListener("mousedown", this.handleClickOutside), this.props.onMount && this.props.onMount(this.state.formattedNumber.replace(/[^0-9]+/g, ""), this.getCountryData(), this.state.formattedNumber);
    } }, { key: "componentWillUnmount", value: function() {
      document.removeEventListener && this.props.enableClickOutside && document.removeEventListener("mousedown", this.handleClickOutside);
    } }, { key: "componentDidUpdate", value: function(ne, _, Ue) {
      ne.country !== this.props.country ? this.updateCountry(this.props.country) : ne.value !== this.props.value && this.updateFormattedNumber(this.props.value);
    } }, { key: "updateFormattedNumber", value: function(ne) {
      if (ne === null) return this.setState({ selectedCountry: 0, formattedNumber: "" });
      var _ = this.state, Ue = _.onlyCountries, Fe = _.selectedCountry, He = _.hiddenAreaCodes, at = this.props, kt = at.country, Kt = at.prefix;
      if (ne === "") return this.setState({ selectedCountry: Fe, formattedNumber: "" });
      var Jt, Vt, Bt = ne.replace(/\D/g, "");
      if (Fe && ze()(ne, Kt + Fe.dialCode)) Vt = this.formatNumber(Bt, Fe), this.setState({ formattedNumber: Vt });
      else {
        var Q = (Jt = this.props.disableCountryGuess ? Fe : this.guessSelectedCountry(Bt.substring(0, 6), kt, Ue, He) || Fe) && ze()(Bt, Kt + Jt.dialCode) ? Jt.dialCode : "";
        Vt = this.formatNumber((this.props.disableCountryCode ? "" : Q) + Bt, Jt || void 0), this.setState({ selectedCountry: Jt, formattedNumber: Vt });
      }
    } }, { key: "render", value: function() {
      var ne, _, Ue, Fe = this, He = this.state, at = He.onlyCountries, kt = He.selectedCountry, Kt = He.showDropdown, Jt = He.formattedNumber, Vt = He.hiddenAreaCodes, Bt = this.props, Q = Bt.disableDropdown, ce = Bt.renderStringAsFlag, Ne = Bt.isValid, vt = Bt.defaultErrorMessage, it = Bt.specialLabel;
      if (typeof Ne == "boolean") _ = Ne;
      else {
        var ct = Ne(Jt.replace(/\D/g, ""), kt, at, Vt);
        typeof ct == "boolean" ? (_ = ct) === !1 && (Ue = vt) : (_ = !1, Ue = ct);
      }
      var mt = Xe()((v(ne = {}, this.props.containerClass, !0), v(ne, "react-tel-input", !0), ne)), Ht = Xe()({ arrow: !0, up: Kt }), je = Xe()(v({ "form-control": !0, "invalid-number": !_, open: Kt }, this.props.inputClass, !0)), nt = Xe()({ "selected-flag": !0, open: Kt }), wt = Xe()(v({ "flag-dropdown": !0, "invalid-number": !_, open: Kt }, this.props.buttonClass, !0)), Ie = "flag ".concat(kt && kt.iso2);
      return ae.a.createElement("div", { className: "".concat(mt, " ").concat(this.props.className), style: this.props.style || this.props.containerStyle, onKeyDown: this.handleKeydown }, it && ae.a.createElement("div", { className: "special-label" }, it), Ue && ae.a.createElement("div", { className: "invalid-number-message" }, Ue), ae.a.createElement("input", Object.assign({ className: je, style: this.props.inputStyle, onChange: this.handleInput, onClick: this.handleInputClick, onDoubleClick: this.handleDoubleClick, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur, onCopy: this.handleInputCopy, value: Jt, onKeyDown: this.handleInputKeyDown, placeholder: this.props.placeholder, disabled: this.props.disabled, type: "tel" }, this.props.inputProps, { ref: function(Pe) {
        Fe.numberInputRef = Pe, typeof Fe.props.inputProps.ref == "function" ? Fe.props.inputProps.ref(Pe) : typeof Fe.props.inputProps.ref == "object" && (Fe.props.inputProps.ref.current = Pe);
      } })), ae.a.createElement("div", { className: wt, style: this.props.buttonStyle, ref: function(Pe) {
        return Fe.dropdownContainerRef = Pe;
      } }, ce ? ae.a.createElement("div", { className: nt }, ce) : ae.a.createElement("div", { onClick: Q ? void 0 : this.handleFlagDropdownClick, className: nt, title: kt ? "".concat(kt.localName || kt.name, ": + ").concat(kt.dialCode) : "", tabIndex: Q ? "-1" : "0", role: "button", "aria-haspopup": "listbox", "aria-expanded": !!Kt || void 0 }, ae.a.createElement("div", { className: Ie }, !Q && ae.a.createElement("div", { className: Ht }))), Kt && this.getCountryDropdownList()));
    } }]) && N(H.prototype, Ee), D;
  }(ae.a.Component);
  Ye.defaultProps = { country: "", value: "", onlyCountries: [], preferredCountries: [], excludeCountries: [], placeholder: "1 (702) 123-4567", searchPlaceholder: "search", searchNotFound: "No entries to show", flagsImagePath: "./flags.png", disabled: !1, containerStyle: {}, inputStyle: {}, buttonStyle: {}, dropdownStyle: {}, searchStyle: {}, containerClass: "", inputClass: "", buttonClass: "", dropdownClass: "", searchClass: "", className: "", autoFormat: !0, enableAreaCodes: !1, enableTerritories: !1, disableCountryCode: !1, disableDropdown: !1, enableLongNumbers: !1, countryCodeEditable: !0, enableSearch: !1, disableSearchIcon: !1, disableInitialCountryGuess: !1, disableCountryGuess: !1, regions: "", inputProps: {}, localization: {}, masks: null, priority: null, areaCodes: null, preserveOrder: [], defaultMask: "... ... ... ... ..", alwaysDefaultMask: !1, prefix: "+", copyNumbersOnly: !0, renderStringAsFlag: "", autocompleteSearch: !1, jumpCursorToEnd: !0, enableAreaCodeStretch: !1, enableClickOutside: !0, showDropdown: !1, isValid: !0, defaultErrorMessage: "", specialLabel: "Phone", onEnterKeyPress: null, keys: { UP: 38, DOWN: 40, RIGHT: 39, LEFT: 37, ENTER: 13, ESC: 27, PLUS: 43, A: 65, Z: 90, SPACE: 32, TAB: 9 } }, u.default = Ye;
}]);
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const kA = (c) => {
  const u = /* @__PURE__ */ new Map();
  u.set("web", { name: "web" });
  const d = c.CapacitorPlatforms || {
    currentPlatform: { name: "web" },
    platforms: u
  }, v = (T, g) => {
    d.platforms.set(T, g);
  }, b = (T) => {
    d.platforms.has(T) && (d.currentPlatform = d.platforms.get(T));
  };
  return d.addPlatform = v, d.setPlatform = b, d;
}, _A = (c) => c.CapacitorPlatforms = kA(c), NT = /* @__PURE__ */ _A(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
NT.addPlatform;
NT.setPlatform;
var dd;
(function(c) {
  c.Unimplemented = "UNIMPLEMENTED", c.Unavailable = "UNAVAILABLE";
})(dd || (dd = {}));
class fS extends Error {
  constructor(u, d, v) {
    super(u), this.message = u, this.code = d, this.data = v;
  }
}
const DA = (c) => {
  var u, d;
  return c != null && c.androidBridge ? "android" : !((d = (u = c == null ? void 0 : c.webkit) === null || u === void 0 ? void 0 : u.messageHandlers) === null || d === void 0) && d.bridge ? "ios" : "web";
}, OA = (c) => {
  var u, d, v, b, T;
  const g = c.CapacitorCustomPlatform || null, O = c.Capacitor || {}, k = O.Plugins = O.Plugins || {}, N = c.CapacitorPlatforms, I = () => g !== null ? g.name : DA(c), z = ((u = N == null ? void 0 : N.currentPlatform) === null || u === void 0 ? void 0 : u.getPlatform) || I, X = () => z() !== "web", V = ((d = N == null ? void 0 : N.currentPlatform) === null || d === void 0 ? void 0 : d.isNativePlatform) || X, ve = (Re) => {
    const ze = xe.get(Re);
    return !!(ze != null && ze.platforms.has(z()) || Ct(Re));
  }, Ke = ((v = N == null ? void 0 : N.currentPlatform) === null || v === void 0 ? void 0 : v.isPluginAvailable) || ve, ae = (Re) => {
    var ze;
    return (ze = O.PluginHeaders) === null || ze === void 0 ? void 0 : ze.find((Le) => Le.name === Re);
  }, Ct = ((b = N == null ? void 0 : N.currentPlatform) === null || b === void 0 ? void 0 : b.getPluginHeader) || ae, he = (Re) => c.console.error(Re), Oe = (Re, ze, Le) => Promise.reject(`${Le} does not have an implementation of "${ze}".`), xe = /* @__PURE__ */ new Map(), le = (Re, ze = {}) => {
    const Le = xe.get(Re);
    if (Le)
      return console.warn(`Capacitor plugin "${Re}" already registered. Cannot register plugins twice.`), Le.proxy;
    const Xe = z(), Et = Ct(Re);
    let Rt;
    const qe = async () => (!Rt && Xe in ze ? Rt = typeof ze[Xe] == "function" ? Rt = await ze[Xe]() : Rt = ze[Xe] : g !== null && !Rt && "web" in ze && (Rt = typeof ze.web == "function" ? Rt = await ze.web() : Rt = ze.web), Rt), ue = (q, D) => {
      var H, Ee;
      if (Et) {
        const ne = Et == null ? void 0 : Et.methods.find((_) => D === _.name);
        if (ne)
          return ne.rtype === "promise" ? (_) => O.nativePromise(Re, D.toString(), _) : (_, Ue) => O.nativeCallback(Re, D.toString(), _, Ue);
        if (q)
          return (H = q[D]) === null || H === void 0 ? void 0 : H.bind(q);
      } else {
        if (q)
          return (Ee = q[D]) === null || Ee === void 0 ? void 0 : Ee.bind(q);
        throw new fS(`"${Re}" plugin is not implemented on ${Xe}`, dd.Unimplemented);
      }
    }, be = (q) => {
      let D;
      const H = (...Ee) => {
        const ne = qe().then((_) => {
          const Ue = ue(_, q);
          if (Ue) {
            const Fe = Ue(...Ee);
            return D = Fe == null ? void 0 : Fe.remove, Fe;
          } else
            throw new fS(`"${Re}.${q}()" is not implemented on ${Xe}`, dd.Unimplemented);
        });
        return q === "addListener" && (ne.remove = async () => D()), ne;
      };
      return H.toString = () => `${q.toString()}() { [capacitor code] }`, Object.defineProperty(H, "name", {
        value: q,
        writable: !1,
        configurable: !1
      }), H;
    }, me = be("addListener"), pe = be("removeListener"), de = (q, D) => {
      const H = me({ eventName: q }, D), Ee = async () => {
        const _ = await H;
        pe({
          eventName: q,
          callbackId: _
        }, D);
      }, ne = new Promise((_) => H.then(() => _({ remove: Ee })));
      return ne.remove = async () => {
        console.warn("Using addListener() without 'await' is deprecated."), await Ee();
      }, ne;
    }, Ye = new Proxy({}, {
      get(q, D) {
        switch (D) {
          case "$$typeof":
            return;
          case "toJSON":
            return () => ({});
          case "addListener":
            return Et ? de : me;
          case "removeListener":
            return pe;
          default:
            return be(D);
        }
      }
    });
    return k[Re] = Ye, xe.set(Re, {
      name: Re,
      proxy: Ye,
      platforms: /* @__PURE__ */ new Set([
        ...Object.keys(ze),
        ...Et ? [Xe] : []
      ])
    }), Ye;
  }, Ve = ((T = N == null ? void 0 : N.currentPlatform) === null || T === void 0 ? void 0 : T.registerPlugin) || le;
  return O.convertFileSrc || (O.convertFileSrc = (Re) => Re), O.getPlatform = z, O.handleError = he, O.isNativePlatform = V, O.isPluginAvailable = Ke, O.pluginMethodNoop = Oe, O.registerPlugin = Ve, O.Exception = fS, O.DEBUG = !!O.DEBUG, O.isLoggingEnabled = !!O.isLoggingEnabled, O.platform = O.getPlatform(), O.isNative = O.isNativePlatform(), O;
}, LA = (c) => c.Capacitor = OA(c), Oy = /* @__PURE__ */ LA(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), LS = Oy.registerPlugin;
Oy.Plugins;
class $T {
  constructor(u) {
    this.listeners = {}, this.retainedEventArguments = {}, this.windowListeners = {}, u && (console.warn(`Capacitor WebPlugin "${u.name}" config object was deprecated in v3 and will be removed in v4.`), this.config = u);
  }
  addListener(u, d) {
    let v = !1;
    this.listeners[u] || (this.listeners[u] = [], v = !0), this.listeners[u].push(d);
    const T = this.windowListeners[u];
    T && !T.registered && this.addWindowListener(T), v && this.sendRetainedArgumentsForEvent(u);
    const g = async () => this.removeListener(u, d);
    return Promise.resolve({ remove: g });
  }
  async removeAllListeners() {
    this.listeners = {};
    for (const u in this.windowListeners)
      this.removeWindowListener(this.windowListeners[u]);
    this.windowListeners = {};
  }
  notifyListeners(u, d, v) {
    const b = this.listeners[u];
    if (!b) {
      if (v) {
        let T = this.retainedEventArguments[u];
        T || (T = []), T.push(d), this.retainedEventArguments[u] = T;
      }
      return;
    }
    b.forEach((T) => T(d));
  }
  hasListeners(u) {
    return !!this.listeners[u].length;
  }
  registerWindowListener(u, d) {
    this.windowListeners[d] = {
      registered: !1,
      windowEventName: u,
      pluginEventName: d,
      handler: (v) => {
        this.notifyListeners(d, v);
      }
    };
  }
  unimplemented(u = "not implemented") {
    return new Oy.Exception(u, dd.Unimplemented);
  }
  unavailable(u = "not available") {
    return new Oy.Exception(u, dd.Unavailable);
  }
  async removeListener(u, d) {
    const v = this.listeners[u];
    if (!v)
      return;
    const b = v.indexOf(d);
    this.listeners[u].splice(b, 1), this.listeners[u].length || this.removeWindowListener(this.windowListeners[u]);
  }
  addWindowListener(u) {
    window.addEventListener(u.windowEventName, u.handler), u.registered = !0;
  }
  removeWindowListener(u) {
    u && (window.removeEventListener(u.windowEventName, u.handler), u.registered = !1);
  }
  sendRetainedArgumentsForEvent(u) {
    const d = this.retainedEventArguments[u];
    d && (delete this.retainedEventArguments[u], d.forEach((v) => {
      this.notifyListeners(u, v);
    }));
  }
}
const B1 = (c) => encodeURIComponent(c).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), W1 = (c) => c.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class AA extends $T {
  async getCookies() {
    const u = document.cookie, d = {};
    return u.split(";").forEach((v) => {
      if (v.length <= 0)
        return;
      let [b, T] = v.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
      b = W1(b).trim(), T = W1(T).trim(), d[b] = T;
    }), d;
  }
  async setCookie(u) {
    try {
      const d = B1(u.key), v = B1(u.value), b = `; expires=${(u.expires || "").replace("expires=", "")}`, T = (u.path || "/").replace("path=", ""), g = u.url != null && u.url.length > 0 ? `domain=${u.url}` : "";
      document.cookie = `${d}=${v || ""}${b}; path=${T}; ${g};`;
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
  web: () => new AA()
});
const MA = async (c) => new Promise((u, d) => {
  const v = new FileReader();
  v.onload = () => {
    const b = v.result;
    u(b.indexOf(",") >= 0 ? b.split(",")[1] : b);
  }, v.onerror = (b) => d(b), v.readAsDataURL(c);
}), NA = (c = {}) => {
  const u = Object.keys(c);
  return Object.keys(c).map((b) => b.toLocaleLowerCase()).reduce((b, T, g) => (b[T] = c[u[g]], b), {});
}, $A = (c, u = !0) => c ? Object.entries(c).reduce((v, b) => {
  const [T, g] = b;
  let O, k;
  return Array.isArray(g) ? (k = "", g.forEach((N) => {
    O = u ? encodeURIComponent(N) : N, k += `${T}=${O}&`;
  }), k.slice(0, -1)) : (O = u ? encodeURIComponent(g) : g, k = `${T}=${O}`), `${v}&${k}`;
}, "").substr(1) : null, zA = (c, u = {}) => {
  const d = Object.assign({ method: c.method || "GET", headers: c.headers }, u), b = NA(c.headers)["content-type"] || "";
  if (typeof c.data == "string")
    d.body = c.data;
  else if (b.includes("application/x-www-form-urlencoded")) {
    const T = new URLSearchParams();
    for (const [g, O] of Object.entries(c.data || {}))
      T.set(g, O);
    d.body = T.toString();
  } else if (b.includes("multipart/form-data") || c.data instanceof FormData) {
    const T = new FormData();
    if (c.data instanceof FormData)
      c.data.forEach((O, k) => {
        T.append(k, O);
      });
    else
      for (const O of Object.keys(c.data))
        T.append(O, c.data[O]);
    d.body = T;
    const g = new Headers(d.headers);
    g.delete("content-type"), d.headers = g;
  } else (b.includes("application/json") || typeof c.data == "object") && (d.body = JSON.stringify(c.data));
  return d;
};
class UA extends $T {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  async request(u) {
    const d = zA(u, u.webFetchExtra), v = $A(u.params, u.shouldEncodeUrlParams), b = v ? `${u.url}?${v}` : u.url, T = await fetch(b, d), g = T.headers.get("content-type") || "";
    let { responseType: O = "text" } = T.ok ? u : {};
    g.includes("application/json") && (O = "json");
    let k, N;
    switch (O) {
      case "arraybuffer":
      case "blob":
        N = await T.blob(), k = await MA(N);
        break;
      case "json":
        k = await T.json();
        break;
      case "document":
      case "text":
      default:
        k = await T.text();
    }
    const I = {};
    return T.headers.forEach((z, X) => {
      I[X] = z;
    }), {
      data: k,
      headers: I,
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
  web: () => import("./web-DF1U02FJ.js").then((c) => new c.ShareWeb())
});
export {
  $T as W,
  kL as a,
  HA as c,
  IA as g
};
//# sourceMappingURL=index-CmdgzDMG.js.map
