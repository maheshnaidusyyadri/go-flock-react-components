import U, { useContext as ua, createElement as xs, useState as uc, useMemo as dc, lazy as Cs } from "react";
import { createPortal as fc } from "react-dom";
function hc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ii = { exports: {} }, fr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var da;
function pc() {
  if (da) return fr;
  da = 1;
  var e = U, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, c, u) {
    var d, m = {}, v = null, _ = null;
    u !== void 0 && (v = "" + u), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (_ = c.ref);
    for (d in c) r.call(c, d) && !o.hasOwnProperty(d) && (m[d] = c[d]);
    if (s && s.defaultProps) for (d in c = s.defaultProps, c) m[d] === void 0 && (m[d] = c[d]);
    return { $$typeof: t, type: s, key: v, ref: _, props: m, _owner: i.current };
  }
  return fr.Fragment = n, fr.jsx = a, fr.jsxs = a, fr;
}
var hr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fa;
function mc() {
  return fa || (fa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = U, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), E = Symbol.iterator, se = "@@iterator";
    function x(p) {
      if (p === null || typeof p != "object")
        return null;
      var k = E && p[E] || p[se];
      return typeof k == "function" ? k : null;
    }
    var re = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(p) {
      {
        for (var k = arguments.length, M = new Array(k > 1 ? k - 1 : 0), J = 1; J < k; J++)
          M[J - 1] = arguments[J];
        Q("error", p, M);
      }
    }
    function Q(p, k, M) {
      {
        var J = re.ReactDebugCurrentFrame, me = J.getStackAddendum();
        me !== "" && (k += "%s", M = M.concat([me]));
        var _e = M.map(function(fe) {
          return String(fe);
        });
        _e.unshift("Warning: " + k), Function.prototype.apply.call(console[p], console, _e);
      }
    }
    var B = !1, W = !1, he = !1, Se = !1, de = !1, V;
    V = Symbol.for("react.module.reference");
    function ge(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === o || de || p === i || p === u || p === d || Se || p === _ || B || W || he || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === m || p.$$typeof === a || p.$$typeof === s || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === V || p.getModuleId !== void 0));
    }
    function Je(p, k, M) {
      var J = p.displayName;
      if (J)
        return J;
      var me = k.displayName || k.name || "";
      return me !== "" ? M + "(" + me + ")" : M;
    }
    function Fe(p) {
      return p.displayName || "Context";
    }
    function Ee(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case s:
            var k = p;
            return Fe(k) + ".Consumer";
          case a:
            var M = p;
            return Fe(M._context) + ".Provider";
          case c:
            return Je(p, p.render, "ForwardRef");
          case m:
            var J = p.displayName || null;
            return J !== null ? J : Ee(p.type) || "Memo";
          case v: {
            var me = p, _e = me._payload, fe = me._init;
            try {
              return Ee(fe(_e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, I = 0, P, X, Me, nt, j, T, z;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function R() {
      {
        if (I === 0) {
          P = console.log, X = console.info, Me = console.warn, nt = console.error, j = console.group, T = console.groupCollapsed, z = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        I++;
      }
    }
    function h() {
      {
        if (I--, I === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, p, {
              value: P
            }),
            info: O({}, p, {
              value: X
            }),
            warn: O({}, p, {
              value: Me
            }),
            error: O({}, p, {
              value: nt
            }),
            group: O({}, p, {
              value: j
            }),
            groupCollapsed: O({}, p, {
              value: T
            }),
            groupEnd: O({}, p, {
              value: z
            })
          });
        }
        I < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = re.ReactCurrentDispatcher, le;
    function oe(p, k, M) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (me) {
            var J = me.stack.trim().match(/\n( *(at )?)/);
            le = J && J[1] || "";
          }
        return `
` + le + p;
      }
    }
    var Te = !1, we;
    {
      var Ie = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Ie();
    }
    function Re(p, k) {
      if (!p || Te)
        return "";
      {
        var M = we.get(p);
        if (M !== void 0)
          return M;
      }
      var J;
      Te = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _e;
      _e = pe.current, pe.current = null, R();
      try {
        if (k) {
          var fe = function() {
            throw Error();
          };
          if (Object.defineProperty(fe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(fe, []);
            } catch (D) {
              J = D;
            }
            Reflect.construct(p, [], fe);
          } else {
            try {
              fe.call();
            } catch (D) {
              J = D;
            }
            p.call(fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            J = D;
          }
          p();
        }
      } catch (D) {
        if (D && J && typeof D.stack == "string") {
          for (var ce = D.stack.split(`
`), et = J.stack.split(`
`), l = ce.length - 1, f = et.length - 1; l >= 1 && f >= 0 && ce[l] !== et[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (ce[l] !== et[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || ce[l] !== et[f]) {
                    var g = `
` + ce[l].replace(" at new ", " at ");
                    return p.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", p.displayName)), typeof p == "function" && we.set(p, g), g;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        Te = !1, pe.current = _e, h(), Error.prepareStackTrace = me;
      }
      var y = p ? p.displayName || p.name : "", $ = y ? oe(y) : "";
      return typeof p == "function" && we.set(p, $), $;
    }
    function ze(p, k, M) {
      return Re(p, !1);
    }
    function De(p) {
      var k = p.prototype;
      return !!(k && k.isReactComponent);
    }
    function b(p, k, M) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return Re(p, De(p));
      if (typeof p == "string")
        return oe(p);
      switch (p) {
        case u:
          return oe("Suspense");
        case d:
          return oe("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case c:
            return ze(p.render);
          case m:
            return b(p.type, k, M);
          case v: {
            var J = p, me = J._payload, _e = J._init;
            try {
              return b(_e(me), k, M);
            } catch {
            }
          }
        }
      return "";
    }
    var w = Object.prototype.hasOwnProperty, A = {}, ee = re.ReactDebugCurrentFrame;
    function q(p) {
      if (p) {
        var k = p._owner, M = b(p.type, p._source, k ? k.type : null);
        ee.setExtraStackFrame(M);
      } else
        ee.setExtraStackFrame(null);
    }
    function te(p, k, M, J, me) {
      {
        var _e = Function.call.bind(w);
        for (var fe in p)
          if (_e(p, fe)) {
            var ce = void 0;
            try {
              if (typeof p[fe] != "function") {
                var et = Error((J || "React class") + ": " + M + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw et.name = "Invariant Violation", et;
              }
              ce = p[fe](k, fe, J, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              ce = l;
            }
            ce && !(ce instanceof Error) && (q(me), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", M, fe, typeof ce), q(null)), ce instanceof Error && !(ce.message in A) && (A[ce.message] = !0, q(me), S("Failed %s type: %s", M, ce.message), q(null));
          }
      }
    }
    var ne = Array.isArray;
    function be(p) {
      return ne(p);
    }
    function N(p) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, M = k && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return M;
      }
    }
    function G(p) {
      try {
        return ae(p), !1;
      } catch {
        return !0;
      }
    }
    function ae(p) {
      return "" + p;
    }
    function Y(p) {
      if (G(p))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", N(p)), ae(p);
    }
    var H = re.ReactCurrentOwner, Oe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ke, He, qe;
    qe = {};
    function ot(p) {
      if (w.call(p, "ref")) {
        var k = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function dt(p) {
      if (w.call(p, "key")) {
        var k = Object.getOwnPropertyDescriptor(p, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function Be(p, k) {
      if (typeof p.ref == "string" && H.current && k && H.current.stateNode !== k) {
        var M = Ee(H.current.type);
        qe[M] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ee(H.current.type), p.ref), qe[M] = !0);
      }
    }
    function It(p, k) {
      {
        var M = function() {
          Ke || (Ke = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        M.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function Bt(p, k) {
      {
        var M = function() {
          He || (He = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        M.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var xn = function(p, k, M, J, me, _e, fe) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: p,
        key: k,
        ref: M,
        props: fe,
        // Record the component responsible for creating this element.
        _owner: _e
      };
      return ce._store = {}, Object.defineProperty(ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function Ut(p, k, M, J, me) {
      {
        var _e, fe = {}, ce = null, et = null;
        M !== void 0 && (Y(M), ce = "" + M), dt(k) && (Y(k.key), ce = "" + k.key), ot(k) && (et = k.ref, Be(k, me));
        for (_e in k)
          w.call(k, _e) && !Oe.hasOwnProperty(_e) && (fe[_e] = k[_e]);
        if (p && p.defaultProps) {
          var l = p.defaultProps;
          for (_e in l)
            fe[_e] === void 0 && (fe[_e] = l[_e]);
        }
        if (ce || et) {
          var f = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          ce && It(fe, f), et && Bt(fe, f);
        }
        return xn(p, ce, et, me, J, H.current, fe);
      }
    }
    var St = re.ReactCurrentOwner, Hn = re.ReactDebugCurrentFrame;
    function Pt(p) {
      if (p) {
        var k = p._owner, M = b(p.type, p._source, k ? k.type : null);
        Hn.setExtraStackFrame(M);
      } else
        Hn.setExtraStackFrame(null);
    }
    var hn;
    hn = !1;
    function pn(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function qt() {
      {
        if (St.current) {
          var p = Ee(St.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function Lt(p) {
      return "";
    }
    var ft = {};
    function Bn(p) {
      {
        var k = qt();
        if (!k) {
          var M = typeof p == "string" ? p : p.displayName || p.name;
          M && (k = `

Check the top-level render call using <` + M + ">.");
        }
        return k;
      }
    }
    function yt(p, k) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var M = Bn(k);
        if (ft[M])
          return;
        ft[M] = !0;
        var J = "";
        p && p._owner && p._owner !== St.current && (J = " It was passed a child from " + Ee(p._owner.type) + "."), Pt(p), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, J), Pt(null);
      }
    }
    function Cn(p, k) {
      {
        if (typeof p != "object")
          return;
        if (be(p))
          for (var M = 0; M < p.length; M++) {
            var J = p[M];
            pn(J) && yt(J, k);
          }
        else if (pn(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var me = x(p);
          if (typeof me == "function" && me !== p.entries)
            for (var _e = me.call(p), fe; !(fe = _e.next()).done; )
              pn(fe.value) && yt(fe.value, k);
        }
      }
    }
    function Sn(p) {
      {
        var k = p.type;
        if (k == null || typeof k == "string")
          return;
        var M;
        if (typeof k == "function")
          M = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === m))
          M = k.propTypes;
        else
          return;
        if (M) {
          var J = Ee(k);
          te(M, p.props, "prop", J, p);
        } else if (k.PropTypes !== void 0 && !hn) {
          hn = !0;
          var me = Ee(k);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gt(p) {
      {
        for (var k = Object.keys(p.props), M = 0; M < k.length; M++) {
          var J = k[M];
          if (J !== "children" && J !== "key") {
            Pt(p), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), Pt(null);
            break;
          }
        }
        p.ref !== null && (Pt(p), S("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var At = {};
    function Ge(p, k, M, J, me, _e) {
      {
        var fe = ge(p);
        if (!fe) {
          var ce = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var et = Lt();
          et ? ce += et : ce += qt();
          var l;
          p === null ? l = "null" : be(p) ? l = "array" : p !== void 0 && p.$$typeof === t ? (l = "<" + (Ee(p.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : l = typeof p, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, ce);
        }
        var f = Ut(p, k, M, me, _e);
        if (f == null)
          return f;
        if (fe) {
          var g = k.children;
          if (g !== void 0)
            if (J)
              if (be(g)) {
                for (var y = 0; y < g.length; y++)
                  Cn(g[y], p);
                Object.freeze && Object.freeze(g);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Cn(g, p);
        }
        if (w.call(k, "key")) {
          var $ = Ee(p), D = Object.keys(k).filter(function(je) {
            return je !== "key";
          }), Z = D.length > 0 ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!At[$ + Z]) {
            var Ae = D.length > 0 ? "{" + D.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, $, Ae, $), At[$ + Z] = !0;
          }
        }
        return p === r ? Gt(f) : Sn(f), f;
      }
    }
    function En(p, k, M) {
      return Ge(p, k, M, !0);
    }
    function Un(p, k, M) {
      return Ge(p, k, M, !1);
    }
    var qn = Un, ht = En;
    hr.Fragment = r, hr.jsx = qn, hr.jsxs = ht;
  }()), hr;
}
var ha;
function gc() {
  return ha || (ha = 1, process.env.NODE_ENV === "production" ? ii.exports = pc() : ii.exports = mc()), ii.exports;
}
var nb = gc(), kt = {
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
}, bc = Object.defineProperty, vc = (e, t) => {
  for (var n in t)
    bc(e, n, { get: t[n], enumerable: !0 });
}, yc = {
  isDev: !1,
  isBrowser: !0,
  isServer: !1,
  isTesting: !1
}, Ss = /* @__PURE__ */ new WeakMap(), Wn = (e) => Ss.get(e), wc = (e, t) => {
  const n = {
    $flags$: 0,
    $hostElement$: e,
    $cmpMeta$: t,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  return Ss.set(e, n);
}, pa = (e, t) => t in e, Vr = (e, t) => (0, console.error)(e, t), mi = /* @__PURE__ */ new Map(), _c = [], kc = "slot-fb{display:contents}slot-fb[hidden]{display:none}", ma = "http://www.w3.org/1999/xlink", zr = typeof window < "u" ? window : {}, Tt = zr.document || { head: {} }, Ft = zr.HTMLElement || class {
}, it = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (e) => e(),
  raf: (e) => requestAnimationFrame(e),
  ael: (e, t, n, r) => e.addEventListener(t, n, r),
  rel: (e, t, n, r) => e.removeEventListener(t, n, r),
  ce: (e, t) => new CustomEvent(e, t)
}, xc = /* @__PURE__ */ (() => {
  let e = !1;
  try {
    Tt.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          e = !0;
        }
      })
    );
  } catch {
  }
  return e;
})(), Cc = (e) => Promise.resolve(e), Sc = /* @__PURE__ */ (() => {
  try {
    return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == "function";
  } catch {
  }
  return !1;
})(), so = !1, lo = [], Es = [], Os = (e, t) => (n) => {
  e.push(n), so || (so = !0, t && it.$flags$ & 4 ? Ec(co) : it.raf(co));
}, ga = (e) => {
  for (let t = 0; t < e.length; t++)
    try {
      e[t](performance.now());
    } catch (n) {
      Vr(n);
    }
  e.length = 0;
}, co = () => {
  ga(lo), ga(Es), (so = lo.length > 0) && it.raf(co);
}, Ec = (e) => Cc().then(e), Oc = /* @__PURE__ */ Os(lo, !1), Eo = /* @__PURE__ */ Os(Es, !0), Tc = (e) => {
  const t = new URL(e, it.$resourcesUrl$);
  return t.origin !== zr.location.origin ? t.href : t.pathname;
}, ba = {}, Rc = "http://www.w3.org/2000/svg", Dc = "http://www.w3.org/1999/xhtml", $c = (e) => e != null, Oo = (e) => (e = typeof e, e === "object" || e === "function");
function Mc(e) {
  var t, n, r;
  return (r = (n = (t = e.head) == null ? void 0 : t.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : n.getAttribute("content")) != null ? r : void 0;
}
var Ic = {};
vc(Ic, {
  err: () => Ts,
  map: () => Pc,
  ok: () => uo,
  unwrap: () => Lc,
  unwrapErr: () => Ac
});
var uo = (e) => ({
  isOk: !0,
  isErr: !1,
  value: e
}), Ts = (e) => ({
  isOk: !1,
  isErr: !0,
  value: e
});
function Pc(e, t) {
  if (e.isOk) {
    const n = t(e.value);
    return n instanceof Promise ? n.then((r) => uo(r)) : uo(n);
  }
  if (e.isErr) {
    const n = e.value;
    return Ts(n);
  }
  throw "should never get here";
}
var Lc = (e) => {
  if (e.isOk)
    return e.value;
  throw e.value;
}, Ac = (e) => {
  if (e.isErr)
    return e.value;
  throw e.value;
}, Fn = (e, t = "") => () => {
}, Ye = (e, t, ...n) => {
  let r = null, i = null, o = null, a = !1, s = !1;
  const c = [], u = (m) => {
    for (let v = 0; v < m.length; v++)
      r = m[v], Array.isArray(r) ? u(r) : r != null && typeof r != "boolean" && ((a = typeof e != "function" && !Oo(r)) && (r = String(r)), a && s ? c[c.length - 1].$text$ += r : c.push(a ? gi(null, r) : r), s = a);
  };
  if (u(n), t) {
    t.key && (i = t.key), t.name && (o = t.name);
    {
      const m = t.className || t.class;
      m && (t.class = typeof m != "object" ? m : Object.keys(m).filter((v) => m[v]).join(" "));
    }
  }
  if (typeof e == "function")
    return e(
      t === null ? {} : t,
      c,
      Nc
    );
  const d = gi(e, null);
  return d.$attrs$ = t, c.length > 0 && (d.$children$ = c), d.$key$ = i, d.$name$ = o, d;
}, gi = (e, t) => {
  const n = {
    $flags$: 0,
    $tag$: e,
    $text$: t,
    $elm$: null,
    $children$: null
  };
  return n.$attrs$ = null, n.$key$ = null, n.$name$ = null, n;
}, ln = {}, jc = (e) => e && e.$tag$ === ln, Nc = {
  forEach: (e, t) => e.map(va).forEach(t),
  map: (e, t) => e.map(va).map(t).map(Yc)
}, va = (e) => ({
  vattrs: e.$attrs$,
  vchildren: e.$children$,
  vkey: e.$key$,
  vname: e.$name$,
  vtag: e.$tag$,
  vtext: e.$text$
}), Yc = (e) => {
  if (typeof e.vtag == "function") {
    const n = { ...e.vattrs };
    return e.vkey && (n.key = e.vkey), e.vname && (n.name = e.vname), Ye(e.vtag, n, ...e.vchildren || []);
  }
  const t = gi(e.vtag, e.vtext);
  return t.$attrs$ = e.vattrs, t.$children$ = e.vchildren, t.$key$ = e.vkey, t.$name$ = e.vname, t;
}, Fc = (e) => _c.map((t) => t(e)).find((t) => !!t), Wc = (e) => Wn(e).$modeName$, Vc = (e, t) => e != null && !Oo(e) ? t & 4 ? e === "false" ? !1 : e === "" || !!e : t & 2 ? parseFloat(e) : t & 1 ? String(e) : e : e, zc = (e) => e, Rt = (e, t, n) => {
  const r = zc(e);
  return {
    emit: (i) => Hc(r, t, {
      bubbles: !!(n & 4),
      composed: !!(n & 2),
      cancelable: !!(n & 1),
      detail: i
    })
  };
}, Hc = (e, t, n) => {
  const r = it.ce(t, n);
  return e.dispatchEvent(r), r;
}, ya = /* @__PURE__ */ new WeakMap(), Bc = (e, t, n) => {
  let r = mi.get(e);
  Sc && n ? (r = r || new CSSStyleSheet(), typeof r == "string" ? r = t : r.replaceSync(t)) : r = t, mi.set(e, r);
}, Uc = (e, t, n) => {
  var r;
  const i = Rs(t, n), o = mi.get(i);
  if (e = e.nodeType === 11 ? e : Tt, o)
    if (typeof o == "string") {
      e = e.head || e;
      let a = ya.get(e), s;
      if (a || ya.set(e, a = /* @__PURE__ */ new Set()), !a.has(i)) {
        {
          s = Tt.createElement("style"), s.innerHTML = o;
          const c = (r = it.$nonce$) != null ? r : Mc(Tt);
          c != null && s.setAttribute("nonce", c), /**
           * we render a scoped component
           */
          (!(t.$flags$ & 1) || /**
          * we are using shadow dom and render the style tag within the shadowRoot
          */
          t.$flags$ & 1 && e.nodeName !== "HEAD") && e.insertBefore(s, e.querySelector("link"));
        }
        t.$flags$ & 4 && (s.innerHTML += kc), a && a.add(i);
      }
    } else e.adoptedStyleSheets.includes(o) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, o]);
  return i;
}, qc = (e) => {
  const t = e.$cmpMeta$, n = e.$hostElement$, r = t.$flags$, i = Fn("attachStyles", t.$tagName$), o = Uc(
    n.shadowRoot ? n.shadowRoot : n.getRootNode(),
    t,
    e.$modeName$
  );
  r & 10 && r & 2 && (n["s-sc"] = o, n.classList.add(o + "-h"), r & 2 && n.classList.add(o + "-s")), i();
}, Rs = (e, t) => "sc-" + (t && e.$flags$ & 32 ? e.$tagName$ + "-" + t : e.$tagName$), wa = (e, t, n, r, i, o) => {
  if (n !== r) {
    let a = pa(e, t), s = t.toLowerCase();
    if (t === "class") {
      const c = e.classList, u = _a(n), d = _a(r);
      c.remove(...u.filter((m) => m && !d.includes(m))), c.add(...d.filter((m) => m && !u.includes(m)));
    } else if (t === "style") {
      for (const c in n)
        (!r || r[c] == null) && (c.includes("-") ? e.style.removeProperty(c) : e.style[c] = "");
      for (const c in r)
        (!n || r[c] !== n[c]) && (c.includes("-") ? e.style.setProperty(c, r[c]) : e.style[c] = r[c]);
    } else if (t !== "key") if (t === "ref")
      r && r(e);
    else if (!e.__lookupSetter__(t) && t[0] === "o" && t[1] === "n") {
      if (t[2] === "-" ? t = t.slice(3) : pa(zr, s) ? t = s.slice(2) : t = s[2] + t.slice(3), n || r) {
        const c = t.endsWith(Ds);
        t = t.replace(Kc, ""), n && it.rel(e, t, n, c), r && it.ael(e, t, r, c);
      }
    } else {
      const c = Oo(r);
      if ((a || c && r !== null) && !i)
        try {
          if (e.tagName.includes("-"))
            e[t] = r;
          else {
            const d = r ?? "";
            t === "list" ? a = !1 : (n == null || e[t] != d) && (e[t] = d);
          }
        } catch {
        }
      let u = !1;
      s !== (s = s.replace(/^xlink\:?/, "")) && (t = s, u = !0), r == null || r === !1 ? (r !== !1 || e.getAttribute(t) === "") && (u ? e.removeAttributeNS(ma, t) : e.removeAttribute(t)) : (!a || o & 4 || i) && !c && (r = r === !0 ? "" : r, u ? e.setAttributeNS(ma, t, r) : e.setAttribute(t, r));
    }
  }
}, Gc = /\s/, _a = (e) => e ? e.split(Gc) : [], Ds = "Capture", Kc = new RegExp(Ds + "$"), $s = (e, t, n) => {
  const r = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$, i = e && e.$attrs$ || ba, o = t.$attrs$ || ba;
  for (const a of ka(Object.keys(i)))
    a in o || wa(r, a, i[a], void 0, n, t.$flags$);
  for (const a of ka(Object.keys(o)))
    wa(r, a, i[a], o[a], n, t.$flags$);
};
function ka(e) {
  return e.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...e.filter((t) => t !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    e
  );
}
var Jn, fo, or, bi = !1, vi = !1, To = !1, bt = !1, yi = (e, t, n, r) => {
  var i;
  const o = t.$children$[n];
  let a = 0, s, c, u;
  if (bi || (To = !0, o.$tag$ === "slot" && (Jn && r.classList.add(Jn + "-s"), o.$flags$ |= o.$children$ ? (
    // slot element has fallback content
    // still create an element that "mocks" the slot element
    2
  ) : (
    // slot element does not have fallback content
    // create an html comment we'll use to always reference
    // where actual slot content should sit next to
    1
  ))), o.$text$ !== null)
    s = o.$elm$ = Tt.createTextNode(o.$text$);
  else if (o.$flags$ & 1)
    s = o.$elm$ = Tt.createTextNode("");
  else {
    if (bt || (bt = o.$tag$ === "svg"), s = o.$elm$ = Tt.createElementNS(
      bt ? Rc : Dc,
      !bi && kt.slotRelocation && o.$flags$ & 2 ? "slot-fb" : o.$tag$
    ), bt && o.$tag$ === "foreignObject" && (bt = !1), $s(null, o, bt), !!s.getRootNode().querySelector("body") && kt.scoped && $c(Jn) && s["s-si"] !== Jn && s.classList.add(s["s-si"] = Jn), Do(s, r), o.$children$)
      for (a = 0; a < o.$children$.length; ++a)
        c = yi(e, o, a, s), c && s.appendChild(c);
    o.$tag$ === "svg" ? bt = !1 : s.tagName === "foreignObject" && (bt = !0);
  }
  return s["s-hn"] = or, o.$flags$ & 3 && (s["s-sr"] = !0, s["s-cr"] = fo, s["s-sn"] = o.$name$ || "", s["s-rf"] = (i = o.$attrs$) == null ? void 0 : i.ref, u = e && e.$children$ && e.$children$[n], u && u.$tag$ === o.$tag$ && e.$elm$ && jr(e.$elm$, !1)), s;
}, jr = (e, t) => {
  it.$flags$ |= 1;
  const n = Array.from(e.childNodes);
  if (e["s-sr"] && kt.experimentalSlotFixes) {
    let r = e;
    for (; r = r.nextSibling; )
      r && r["s-sn"] === e["s-sn"] && r["s-sh"] === or && n.push(r);
  }
  for (let r = n.length - 1; r >= 0; r--) {
    const i = n[r];
    i["s-hn"] !== or && i["s-ol"] && (wn(Ps(i), i, Ro(i)), i["s-ol"].remove(), i["s-ol"] = void 0, i["s-sh"] = void 0, To = !0), t && jr(i, t);
  }
  it.$flags$ &= -2;
}, Ms = (e, t, n, r, i, o) => {
  let a = e["s-cr"] && e["s-cr"].parentNode || e, s;
  for (a.shadowRoot && a.tagName === or && (a = a.shadowRoot); i <= o; ++i)
    r[i] && (s = yi(null, n, i, e), s && (r[i].$elm$ = s, wn(a, s, Ro(t))));
}, Is = (e, t, n) => {
  for (let r = t; r <= n; ++r) {
    const i = e[r];
    if (i) {
      const o = i.$elm$;
      js(i), o && (vi = !0, o["s-ol"] ? o["s-ol"].remove() : jr(o, !0), o.remove());
    }
  }
}, Zc = (e, t, n, r, i = !1) => {
  let o = 0, a = 0, s = 0, c = 0, u = t.length - 1, d = t[0], m = t[u], v = r.length - 1, _ = r[0], E = r[v], se, x;
  for (; o <= u && a <= v; )
    if (d == null)
      d = t[++o];
    else if (m == null)
      m = t[--u];
    else if (_ == null)
      _ = r[++a];
    else if (E == null)
      E = r[--v];
    else if (oi(d, _, i))
      Xn(d, _, i), d = t[++o], _ = r[++a];
    else if (oi(m, E, i))
      Xn(m, E, i), m = t[--u], E = r[--v];
    else if (oi(d, E, i))
      (d.$tag$ === "slot" || E.$tag$ === "slot") && jr(d.$elm$.parentNode, !1), Xn(d, E, i), wn(e, d.$elm$, m.$elm$.nextSibling), d = t[++o], E = r[--v];
    else if (oi(m, _, i))
      (d.$tag$ === "slot" || E.$tag$ === "slot") && jr(m.$elm$.parentNode, !1), Xn(m, _, i), wn(e, m.$elm$, d.$elm$), m = t[--u], _ = r[++a];
    else {
      for (s = -1, c = o; c <= u; ++c)
        if (t[c] && t[c].$key$ !== null && t[c].$key$ === _.$key$) {
          s = c;
          break;
        }
      s >= 0 ? (x = t[s], x.$tag$ !== _.$tag$ ? se = yi(t && t[a], n, s, e) : (Xn(x, _, i), t[s] = void 0, se = x.$elm$), _ = r[++a]) : (se = yi(t && t[a], n, a, e), _ = r[++a]), se && wn(Ps(d.$elm$), se, Ro(d.$elm$));
    }
  o > u ? Ms(
    e,
    r[v + 1] == null ? null : r[v + 1].$elm$,
    n,
    r,
    a,
    v
  ) : a > v && Is(t, o, u);
}, oi = (e, t, n = !1) => e.$tag$ === t.$tag$ ? e.$tag$ === "slot" ? (
  // The component gets hydrated and no VDOM has been initialized.
  // Here the comparison can't happen as $name$ property is not set for `leftNode`.
  "$nodeId$" in e && n && // `leftNode` is not from type HTMLComment which would cause many
  // hydration comments to be removed
  e.$elm$.nodeType !== 8 ? !1 : e.$name$ === t.$name$
) : n ? !0 : e.$key$ === t.$key$ : !1, Ro = (e) => e && e["s-ol"] || e, Ps = (e) => (e["s-ol"] ? e["s-ol"] : e).parentNode, Xn = (e, t, n = !1) => {
  const r = t.$elm$ = e.$elm$, i = e.$children$, o = t.$children$, a = t.$tag$, s = t.$text$;
  let c;
  s === null ? (bt = a === "svg" ? !0 : a === "foreignObject" ? !1 : bt, a === "slot" && !bi || $s(e, t, bt), i !== null && o !== null ? Zc(r, i, t, o, n) : o !== null ? (e.$text$ !== null && (r.textContent = ""), Ms(r, null, t, o, 0, o.length - 1)) : (
    // don't do this on initial render as it can cause non-hydrated content to be removed
    !n && kt.updatable && i !== null && Is(i, 0, i.length - 1)
  ), bt && a === "svg" && (bt = !1)) : (c = r["s-cr"]) ? c.parentNode.textContent = s : e.$text$ !== s && (r.data = s);
}, Ls = (e) => {
  const t = e.childNodes;
  for (const n of t)
    if (n.nodeType === 1) {
      if (n["s-sr"]) {
        const r = n["s-sn"];
        n.hidden = !1;
        for (const i of t)
          if (i !== n) {
            if (i["s-hn"] !== n["s-hn"] || r !== "") {
              if (i.nodeType === 1 && (r === i.getAttribute("slot") || r === i["s-sn"]) || i.nodeType === 3 && r === i["s-sn"]) {
                n.hidden = !0;
                break;
              }
            } else if (i.nodeType === 1 || i.nodeType === 3 && i.textContent.trim() !== "") {
              n.hidden = !0;
              break;
            }
          }
      }
      Ls(n);
    }
}, Qt = [], As = (e) => {
  let t, n, r;
  for (const i of e.childNodes) {
    if (i["s-sr"] && (t = i["s-cr"]) && t.parentNode) {
      n = t.parentNode.childNodes;
      const o = i["s-sn"];
      for (r = n.length - 1; r >= 0; r--)
        if (t = n[r], !t["s-cn"] && !t["s-nr"] && t["s-hn"] !== i["s-hn"] && !kt.experimentalSlotFixes)
          if (xa(t, o)) {
            let a = Qt.find((s) => s.$nodeToRelocate$ === t);
            vi = !0, t["s-sn"] = t["s-sn"] || o, a ? (a.$nodeToRelocate$["s-sh"] = i["s-hn"], a.$slotRefNode$ = i) : (t["s-sh"] = i["s-hn"], Qt.push({
              $slotRefNode$: i,
              $nodeToRelocate$: t
            })), t["s-sr"] && Qt.map((s) => {
              xa(s.$nodeToRelocate$, t["s-sn"]) && (a = Qt.find((c) => c.$nodeToRelocate$ === t), a && !s.$slotRefNode$ && (s.$slotRefNode$ = a.$slotRefNode$));
            });
          } else Qt.some((a) => a.$nodeToRelocate$ === t) || Qt.push({
            $nodeToRelocate$: t
          });
    }
    i.nodeType === 1 && As(i);
  }
}, xa = (e, t) => e.nodeType === 1 ? e.getAttribute("slot") === null && t === "" || e.getAttribute("slot") === t : e["s-sn"] === t ? !0 : t === "", js = (e) => {
  e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(js);
}, wn = (e, t, n) => {
  const r = e == null ? void 0 : e.insertBefore(t, n);
  return Do(t, e), r;
}, Ns = (e) => {
  const t = [];
  return e && t.push(
    ...e["s-scs"] || [],
    e["s-si"],
    e["s-sc"],
    ...Ns(e.parentElement)
  ), t;
}, Do = (e, t, n = !1) => {
  var r;
  if (e && t && e.nodeType === 1) {
    const i = new Set(Ns(t).filter(Boolean));
    if (i.size && ((r = e.classList) == null || r.add(...e["s-scs"] = [...i]), e["s-ol"] || n))
      for (const o of Array.from(e.childNodes))
        Do(o, e, !0);
  }
}, Jc = (e, t, n = !1) => {
  var r, i, o, a, s;
  const c = e.$hostElement$, u = e.$cmpMeta$, d = e.$vnode$ || gi(null, null), m = jc(t) ? t : Ye(null, null, t);
  if (or = c.tagName, u.$attrsToReflect$ && (m.$attrs$ = m.$attrs$ || {}, u.$attrsToReflect$.map(
    ([v, _]) => m.$attrs$[_] = c[v]
  )), n && m.$attrs$)
    for (const v of Object.keys(m.$attrs$))
      c.hasAttribute(v) && !["key", "ref", "style", "class"].includes(v) && (m.$attrs$[v] = c[v]);
  m.$tag$ = null, m.$flags$ |= 4, e.$vnode$ = m, m.$elm$ = d.$elm$ = c.shadowRoot || c, Jn = c["s-sc"], bi = (u.$flags$ & 1) !== 0, fo = c["s-cr"], vi = !1, Xn(d, m, n);
  {
    if (it.$flags$ |= 1, To) {
      As(m.$elm$);
      for (const v of Qt) {
        const _ = v.$nodeToRelocate$;
        if (!_["s-ol"]) {
          const E = Tt.createTextNode("");
          E["s-nr"] = _, wn(_.parentNode, _["s-ol"] = E, _);
        }
      }
      for (const v of Qt) {
        const _ = v.$nodeToRelocate$, E = v.$slotRefNode$;
        if (E) {
          const se = E.parentNode;
          let x = E.nextSibling;
          {
            let re = (r = _["s-ol"]) == null ? void 0 : r.previousSibling;
            for (; re; ) {
              let S = (i = re["s-nr"]) != null ? i : null;
              if (S && S["s-sn"] === _["s-sn"] && se === S.parentNode) {
                for (S = S.nextSibling; S === _ || S != null && S["s-sr"]; )
                  S = S == null ? void 0 : S.nextSibling;
                if (!S || !S["s-nr"]) {
                  x = S;
                  break;
                }
              }
              re = re.previousSibling;
            }
          }
          (!x && se !== _.parentNode || _.nextSibling !== x) && _ !== x && (!_["s-hn"] && _["s-ol"] && (_["s-hn"] = _["s-ol"].parentNode.nodeName), wn(se, _, x), _.nodeType === 1 && (_.hidden = (o = _["s-ih"]) != null ? o : !1)), _ && typeof E["s-rf"] == "function" && E["s-rf"](_);
        } else
          _.nodeType === 1 && (n && (_["s-ih"] = (a = _.hidden) != null ? a : !1), _.hidden = !0);
      }
    }
    vi && Ls(m.$elm$), it.$flags$ &= -2, Qt.length = 0;
  }
  if (kt.experimentalScopedSlotChanges && u.$flags$ & 2)
    for (const v of m.$elm$.childNodes)
      v["s-hn"] !== or && !v["s-sh"] && (n && v["s-ih"] == null && (v["s-ih"] = (s = v.hidden) != null ? s : !1), v.hidden = !0);
  fo = void 0;
}, Xc = (e, t) => {
}, Ys = (e, t) => (e.$flags$ |= 16, Xc(e, e.$ancestorComponent$), Eo(() => Qc(e, t))), Qc = (e, t) => {
  const n = e.$hostElement$, r = Fn("scheduleUpdate", e.$cmpMeta$.$tagName$), i = n;
  if (!i)
    throw new Error(
      `Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  let o;
  return t ? o = tr(i, "componentWillLoad") : o = tr(i, "componentWillUpdate"), o = Ca(o, () => tr(i, "componentWillRender")), r(), Ca(o, () => tu(e, i, t));
}, Ca = (e, t) => eu(e) ? e.then(t).catch((n) => {
  console.error(n), t();
}) : t(), eu = (e) => e instanceof Promise || e && e.then && typeof e.then == "function", tu = async (e, t, n) => {
  const r = e.$hostElement$, i = Fn("update", e.$cmpMeta$.$tagName$);
  r["s-rc"], n && qc(e);
  const o = Fn("render", e.$cmpMeta$.$tagName$);
  nu(e, t, r, n), o(), i(), ru(e);
}, Sa = null, nu = (e, t, n, r) => {
  try {
    Sa = t, t = t.render && t.render(), e.$flags$ &= -17, e.$flags$ |= 2, (kt.hasRenderFn || kt.reflect) && (kt.vdomRender || kt.reflect) && (kt.hydrateServerSide || Jc(e, t, r));
  } catch (c) {
    Vr(c, e.$hostElement$);
  }
  return Sa = null, null;
}, ru = (e) => {
  const t = e.$cmpMeta$.$tagName$, n = e.$hostElement$, r = Fn("postUpdate", t), i = n;
  e.$ancestorComponent$, tr(i, "componentDidRender"), e.$flags$ & 64 ? (tr(i, "componentDidUpdate"), r()) : (e.$flags$ |= 64, tr(i, "componentDidLoad"), r());
}, tr = (e, t, n) => {
  if (e && e[t])
    try {
      return e[t](n);
    } catch (r) {
      Vr(r);
    }
}, iu = (e, t) => Wn(e).$instanceValues$.get(t), ou = (e, t, n, r) => {
  const i = Wn(e), o = e, a = i.$instanceValues$.get(t), s = i.$flags$, c = o;
  n = Vc(n, r.$members$[t][0]);
  const u = Number.isNaN(a) && Number.isNaN(n);
  if (n !== a && !u) {
    i.$instanceValues$.set(t, n);
    {
      if (r.$watchers$ && s & 128) {
        const m = r.$watchers$[t];
        m && m.map((v) => {
          try {
            c[v](n, a, t);
          } catch (_) {
            Vr(_, o);
          }
        });
      }
      if ((s & 18) === 2) {
        if (c.componentShouldUpdate && c.componentShouldUpdate(n, a, t) === !1)
          return;
        Ys(i, !1);
      }
    }
  }
}, au = (e, t, n) => {
  var r, i;
  const o = e.prototype;
  if (t.$members$ || t.$watchers$ || e.watchers) {
    e.watchers && !t.$watchers$ && (t.$watchers$ = e.watchers);
    const a = Object.entries((r = t.$members$) != null ? r : {});
    a.map(([s, [c]]) => {
      (c & 31 || c & 32) && Object.defineProperty(o, s, {
        get() {
          return iu(this, s);
        },
        set(u) {
          ou(this, s, u, t);
        },
        configurable: !0,
        enumerable: !0
      });
    });
    {
      const s = /* @__PURE__ */ new Map();
      o.attributeChangedCallback = function(c, u, d) {
        it.jmp(() => {
          var m;
          const v = s.get(c);
          if (this.hasOwnProperty(v))
            d = this[v], delete this[v];
          else {
            if (o.hasOwnProperty(v) && typeof this[v] == "number" && // cast type to number to avoid TS compiler issues
            this[v] == d)
              return;
            if (v == null) {
              const _ = Wn(this), E = _ == null ? void 0 : _.$flags$;
              if (E && !(E & 8) && E & 128 && d !== u) {
                const x = this, re = (m = t.$watchers$) == null ? void 0 : m[c];
                re == null || re.forEach((S) => {
                  x[S] != null && x[S].call(x, d, u, c);
                });
              }
              return;
            }
          }
          this[v] = d === null && typeof this[v] == "boolean" ? !1 : d;
        });
      }, e.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((i = t.$watchers$) != null ? i : {}),
          ...a.filter(
            ([c, u]) => u[0] & 15
            /* HasAttribute */
          ).map(([c, u]) => {
            var d;
            const m = u[1] || c;
            return s.set(m, c), u[0] & 512 && ((d = t.$attrsToReflect$) == null || d.push([c, m])), m;
          })
        ])
      );
    }
  }
  return e;
}, su = async (e, t, n, r) => {
  let i;
  if (!(t.$flags$ & 32)) {
    t.$flags$ |= 32, n.$lazyBundleId$;
    {
      i = e.constructor;
      const a = e.localName;
      customElements.whenDefined(a).then(
        () => t.$flags$ |= 128
        /* isWatchReady */
      );
    }
    if (i && i.style) {
      let a;
      typeof i.style == "string" ? a = i.style : typeof i.style != "string" && (t.$modeName$ = Fc(e), t.$modeName$ && (a = i.style[t.$modeName$]));
      const s = Rs(n, t.$modeName$);
      if (!mi.has(s)) {
        const c = Fn("registerStyles", n.$tagName$);
        Bc(s, a, !!(n.$flags$ & 1)), c();
      }
    }
  }
  t.$ancestorComponent$, Ys(t, !0);
}, Ea = (e) => {
}, lu = (e) => {
  if (!(it.$flags$ & 1)) {
    const t = Wn(e), n = t.$cmpMeta$, r = Fn("connectedCallback", n.$tagName$);
    t.$flags$ & 1 ? (Fs(e, t, n.$listeners$), t != null && t.$lazyInstance$ ? Ea(t.$lazyInstance$) : t != null && t.$onReadyPromise$ && t.$onReadyPromise$.then(() => Ea(t.$lazyInstance$))) : (t.$flags$ |= 1, // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
    n.$flags$ & 12 && cu(e), n.$members$ && Object.entries(n.$members$).map(([i, [o]]) => {
      if (o & 31 && e.hasOwnProperty(i)) {
        const a = e[i];
        delete e[i], e[i] = a;
      }
    }), su(e, t, n)), r();
  }
}, cu = (e) => {
  const t = e["s-cr"] = Tt.createComment(
    ""
  );
  t["s-cn"] = !0, wn(e, t, e.firstChild);
}, uu = async (e) => {
  if (!(it.$flags$ & 1)) {
    const t = Wn(e);
    t.$rmListeners$ && (t.$rmListeners$.map((n) => n()), t.$rmListeners$ = void 0);
  }
}, Wt = (e, t) => {
  const n = {
    $flags$: t[0],
    $tagName$: t[1]
  };
  n.$members$ = t[2], n.$listeners$ = t[3], n.$watchers$ = e.$watchers$, n.$attrsToReflect$ = [];
  const r = e.prototype.connectedCallback, i = e.prototype.disconnectedCallback;
  return Object.assign(e.prototype, {
    __registerHost() {
      wc(this, n);
    },
    connectedCallback() {
      const o = Wn(this);
      Fs(this, o, n.$listeners$), lu(this), r && r.call(this);
    },
    disconnectedCallback() {
      uu(this), i && i.call(this);
    },
    __attachShadow() {
      if (!this.shadowRoot)
        this.attachShadow({
          mode: "open",
          delegatesFocus: !!(n.$flags$ & 16)
        });
      else if (this.shadowRoot.mode !== "open")
        throw new Error(
          `Unable to re-use existing shadow root for ${n.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`
        );
    }
  }), e.is = n.$tagName$, au(e, n);
}, Fs = (e, t, n, r) => {
  n && n.map(([i, o, a]) => {
    const s = fu(e, i), c = du(t, a), u = hu(i);
    it.ael(s, o, c, u), (t.$rmListeners$ = t.$rmListeners$ || []).push(() => it.rel(s, o, c, u));
  });
}, du = (e, t) => (n) => {
  var r;
  try {
    kt.lazyLoad || e.$hostElement$[t](n);
  } catch (i) {
    Vr(i);
  }
}, fu = (e, t) => t & 4 ? Tt : t & 8 ? zr : t & 16 ? Tt.body : e, hu = (e) => xc ? {
  passive: (e & 1) !== 0,
  capture: (e & 2) !== 0
} : (e & 2) !== 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const at = typeof window < "u" ? window : void 0, Hi = typeof document < "u" ? document : void 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let Bi;
const pu = (e) => {
  if (Bi === void 0) {
    const t = e.style.animationName !== void 0, n = e.style.webkitAnimationName !== void 0;
    Bi = !t && n ? "-webkit-" : "";
  }
  return Bi;
}, Ui = (e, t, n) => {
  const r = t.startsWith("animation") ? pu(e) : "";
  e.style.setProperty(r + t, n);
}, ai = (e = [], t) => {
  if (t !== void 0) {
    const n = Array.isArray(t) ? t : [t];
    return [...e, ...n];
  }
  return e;
}, mu = (e) => {
  let t, n, r, i, o, a, s = [], c = [], u = [], d = !1, m, v = {}, _ = [], E = [], se = {}, x = 0, re = !1, S = !1, Q, B, W, he = !0, Se = !1, de = !0, V, ge = !1;
  const Je = e, Fe = [], Ee = [], O = [], I = [], P = [], X = [], Me = [], nt = [], j = [], T = [], z = [], ie = typeof AnimationEffect == "function" || at !== void 0 && typeof at.AnimationEffect == "function", R = typeof Element == "function" && typeof Element.prototype.animate == "function" && ie, h = () => z, pe = (l) => (P.forEach((f) => {
    f.destroy(l);
  }), le(l), I.length = 0, P.length = 0, s.length = 0, ze(), d = !1, de = !0, V), le = (l) => {
    De(), l && b();
  }, oe = () => {
    re = !1, S = !1, de = !0, Q = void 0, B = void 0, W = void 0, x = 0, Se = !1, he = !0, ge = !1;
  }, Te = () => x !== 0 && !ge, we = (l, f) => {
    const g = f.findIndex((y) => y.c === l);
    g > -1 && f.splice(g, 1);
  }, Ie = (l, f) => (O.push({ c: l, o: f }), V), Re = (l, f) => ((f != null && f.oneTimeCallback ? Ee : Fe).push({ c: l, o: f }), V), ze = () => (Fe.length = 0, Ee.length = 0, V), De = () => {
    R && (z.forEach((l) => {
      l.cancel();
    }), z.length = 0);
  }, b = () => {
    X.forEach((l) => {
      l != null && l.parentNode && l.parentNode.removeChild(l);
    }), X.length = 0;
  }, w = (l) => (Me.push(l), V), A = (l) => (nt.push(l), V), ee = (l) => (j.push(l), V), q = (l) => (T.push(l), V), te = (l) => (c = ai(c, l), V), ne = (l) => (u = ai(u, l), V), be = (l = {}) => (v = l, V), N = (l = []) => {
    for (const f of l)
      v[f] = "";
    return V;
  }, G = (l) => (_ = ai(_, l), V), ae = (l) => (E = ai(E, l), V), Y = (l = {}) => (se = l, V), H = (l = []) => {
    for (const f of l)
      se[f] = "";
    return V;
  }, Oe = () => o !== void 0 ? o : m ? m.getFill() : "both", Ke = () => Q !== void 0 ? Q : a !== void 0 ? a : m ? m.getDirection() : "normal", He = () => re ? "linear" : r !== void 0 ? r : m ? m.getEasing() : "linear", qe = () => S ? 0 : B !== void 0 ? B : n !== void 0 ? n : m ? m.getDuration() : 0, ot = () => i !== void 0 ? i : m ? m.getIterations() : 1, dt = () => W !== void 0 ? W : t !== void 0 ? t : m ? m.getDelay() : 0, Be = () => s, It = (l) => (a = l, Ge(!0), V), Bt = (l) => (o = l, Ge(!0), V), xn = (l) => (t = l, Ge(!0), V), Ut = (l) => (r = l, Ge(!0), V), St = (l) => (!R && l === 0 && (l = 1), n = l, Ge(!0), V), Hn = (l) => (i = l, Ge(!0), V), Pt = (l) => (m = l, V), hn = (l) => {
    if (l != null)
      if (l.nodeType === 1)
        I.push(l);
      else if (l.length >= 0)
        for (let f = 0; f < l.length; f++)
          I.push(l[f]);
      else
        console.error("Invalid addElement value");
    return V;
  }, pn = (l) => {
    if (l != null)
      if (Array.isArray(l))
        for (const f of l)
          f.parent(V), P.push(f);
      else
        l.parent(V), P.push(l);
    return V;
  }, qt = (l) => {
    const f = s !== l;
    return s = l, f && Lt(s), V;
  }, Lt = (l) => {
    R && h().forEach((f) => {
      const g = f.effect;
      if (g.setKeyframes)
        g.setKeyframes(l);
      else {
        const y = new KeyframeEffect(g.target, l, g.getTiming());
        f.effect = y;
      }
    });
  }, ft = () => {
    Me.forEach((y) => y()), nt.forEach((y) => y());
    const l = c, f = u, g = v;
    I.forEach((y) => {
      const $ = y.classList;
      l.forEach((D) => $.add(D)), f.forEach((D) => $.remove(D));
      for (const D in g)
        g.hasOwnProperty(D) && Ui(y, D, g[D]);
    });
  }, Bn = () => {
    j.forEach(($) => $()), T.forEach(($) => $());
    const l = he ? 1 : 0, f = _, g = E, y = se;
    I.forEach(($) => {
      const D = $.classList;
      f.forEach((Z) => D.add(Z)), g.forEach((Z) => D.remove(Z));
      for (const Z in y)
        y.hasOwnProperty(Z) && Ui($, Z, y[Z]);
    }), B = void 0, Q = void 0, W = void 0, Fe.forEach(($) => $.c(l, V)), Ee.forEach(($) => $.c(l, V)), Ee.length = 0, de = !0, he && (Se = !0), he = !0;
  }, yt = () => {
    x !== 0 && (x--, x === 0 && (Bn(), m && m.animationFinish()));
  }, Cn = () => {
    I.forEach((l) => {
      const f = l.animate(s, {
        id: Je,
        delay: dt(),
        duration: qe(),
        easing: He(),
        iterations: ot(),
        fill: Oe(),
        direction: Ke()
      });
      f.pause(), z.push(f);
    }), z.length > 0 && (z[0].onfinish = () => {
      yt();
    });
  }, Sn = () => {
    ft(), s.length > 0 && R && Cn(), d = !0;
  }, Gt = (l) => {
    l = Math.min(Math.max(l, 0), 0.9999), R && z.forEach((f) => {
      f.currentTime = f.effect.getComputedTiming().delay + qe() * l, f.pause();
    });
  }, At = (l) => {
    z.forEach((f) => {
      f.effect.updateTiming({
        delay: dt(),
        duration: qe(),
        easing: He(),
        iterations: ot(),
        fill: Oe(),
        direction: Ke()
      });
    }), l !== void 0 && Gt(l);
  }, Ge = (l = !1, f = !0, g) => (l && P.forEach((y) => {
    y.update(l, f, g);
  }), R && At(g), V), En = (l = !1, f) => (P.forEach((g) => {
    g.progressStart(l, f);
  }), ht(), re = l, d || Sn(), Ge(!1, !0, f), V), Un = (l) => (P.forEach((f) => {
    f.progressStep(l);
  }), Gt(l), V), qn = (l, f, g) => (re = !1, P.forEach((y) => {
    y.progressEnd(l, f, g);
  }), g !== void 0 && (B = g), Se = !1, he = !0, l === 0 ? (Q = Ke() === "reverse" ? "normal" : "reverse", Q === "reverse" && (he = !1), R ? (Ge(), Gt(1 - f)) : (W = (1 - f) * qe() * -1, Ge(!1, !1))) : l === 1 && (R ? (Ge(), Gt(f)) : (W = f * qe() * -1, Ge(!1, !1))), l !== void 0 && !m && me(), V), ht = () => {
    d && (R ? z.forEach((l) => {
      l.pause();
    }) : I.forEach((l) => {
      Ui(l, "animation-play-state", "paused");
    }), ge = !0);
  }, p = () => (P.forEach((l) => {
    l.pause();
  }), ht(), V), k = () => {
    yt();
  }, M = () => {
    z.forEach((l) => {
      l.play();
    }), (s.length === 0 || I.length === 0) && yt();
  }, J = () => {
    R && (Gt(0), At());
  }, me = (l) => new Promise((f) => {
    l != null && l.sync && (S = !0, Re(() => S = !1, { oneTimeCallback: !0 })), d || Sn(), Se && (J(), Se = !1), de && (x = P.length + 1, de = !1);
    const g = () => {
      we(y, Ee), f();
    }, y = () => {
      we(g, O), f();
    };
    Re(y, { oneTimeCallback: !0 }), Ie(g, { oneTimeCallback: !0 }), P.forEach(($) => {
      $.play();
    }), R ? M() : k(), ge = !1;
  }), _e = () => {
    P.forEach((l) => {
      l.stop();
    }), d && (De(), d = !1), oe(), O.forEach((l) => l.c(0, V)), O.length = 0;
  }, fe = (l, f) => {
    const g = s[0];
    return g !== void 0 && (g.offset === void 0 || g.offset === 0) ? g[l] = f : s = [{ offset: 0, [l]: f }, ...s], V;
  };
  return V = {
    parentAnimation: m,
    elements: I,
    childAnimations: P,
    id: Je,
    animationFinish: yt,
    from: fe,
    to: (l, f) => {
      const g = s[s.length - 1];
      return g !== void 0 && (g.offset === void 0 || g.offset === 1) ? g[l] = f : s = [...s, { offset: 1, [l]: f }], V;
    },
    fromTo: (l, f, g) => fe(l, f).to(l, g),
    parent: Pt,
    play: me,
    pause: p,
    stop: _e,
    destroy: pe,
    keyframes: qt,
    addAnimation: pn,
    addElement: hn,
    update: Ge,
    fill: Bt,
    direction: It,
    iterations: Hn,
    duration: St,
    easing: Ut,
    delay: xn,
    getWebAnimations: h,
    getKeyframes: Be,
    getFill: Oe,
    getDirection: Ke,
    getDelay: dt,
    getIterations: ot,
    getEasing: He,
    getDuration: qe,
    afterAddRead: ee,
    afterAddWrite: q,
    afterClearStyles: H,
    afterStyles: Y,
    afterRemoveClass: ae,
    afterAddClass: G,
    beforeAddRead: w,
    beforeAddWrite: A,
    beforeClearStyles: N,
    beforeStyles: be,
    beforeRemoveClass: ne,
    beforeAddClass: te,
    onFinish: Re,
    isRunning: Te,
    progressStart: En,
    progressStep: Un,
    progressEnd: qn
  };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class gu {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(t) {
    this.m = new Map(Object.entries(t));
  }
  get(t, n) {
    const r = this.m.get(t);
    return r !== void 0 ? r : n;
  }
  getBoolean(t, n = !1) {
    const r = this.m.get(t);
    return r === void 0 ? n : typeof r == "string" ? r === "true" : !!r;
  }
  getNumber(t, n) {
    const r = parseFloat(this.m.get(t));
    return isNaN(r) ? n !== void 0 ? n : NaN : r;
  }
  set(t, n) {
    this.m.set(t, n);
  }
}
const rn = /* @__PURE__ */ new gu();
let bu;
const Nt = (e) => e && Wc(e) || bu;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const vu = (e, ...t) => console.warn(`[Ionic Warning]: ${e}`, ...t);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Ws = (e, t) => {
  e.componentOnReady ? e.componentOnReady().then((n) => t(n)) : zs(() => t(e));
}, yu = (e) => e.componentOnReady !== void 0, Vs = (e, t = []) => {
  const n = {};
  return t.forEach((r) => {
    e.hasAttribute(r) && (e.getAttribute(r) !== null && (n[r] = e.getAttribute(r)), e.removeAttribute(r));
  }), n;
}, zs = (e) => typeof __zone_symbol__requestAnimationFrame == "function" ? __zone_symbol__requestAnimationFrame(e) : typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : setTimeout(e), rb = (e, t, n) => Math.max(e, Math.min(t, n)), ct = (e, t) => {
  if (!e) {
    const n = "ASSERT: " + t;
    console.error(n);
    debugger;
    throw new Error(n);
  }
}, Hs = (e, t) => {
  if (e ?? (e = {}), t ?? (t = {}), e === t)
    return !0;
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (const r of n)
    if (!(r in t) || e[r] !== t[r])
      return !1;
  return !0;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const wu = "ionViewWillEnter", _u = "ionViewDidEnter", Bs = "ionViewWillLeave", Us = "ionViewDidLeave", qi = "ionViewWillUnload", pr = (e) => {
  e.tabIndex = -1, e.focus();
}, si = (e) => e.offsetParent !== null, ku = () => ({
  saveViewFocus: (n) => {
    if (rn.get("focusManagerPriority", !1)) {
      const i = document.activeElement;
      i !== null && (n != null && n.contains(i)) && i.setAttribute(Oa, "true");
    }
  },
  setViewFocus: (n) => {
    const r = rn.get("focusManagerPriority", !1);
    if (Array.isArray(r) && !n.contains(document.activeElement)) {
      const i = n.querySelector(`[${Oa}]`);
      if (i && si(i)) {
        pr(i);
        return;
      }
      for (const o of r)
        switch (o) {
          case "content":
            const a = n.querySelector('main, [role="main"]');
            if (a && si(a)) {
              pr(a);
              return;
            }
            break;
          case "heading":
            const s = n.querySelector('h1, [role="heading"][aria-level="1"]');
            if (s && si(s)) {
              pr(s);
              return;
            }
            break;
          case "banner":
            const c = n.querySelector('header, [role="banner"]');
            if (c && si(c)) {
              pr(c);
              return;
            }
            break;
          default:
            vu(`Unrecognized focus manager priority value ${o}`);
            break;
        }
      pr(n);
    }
  }
}), Oa = "ion-last-focus", xu = () => import("./ios.transition-C0os9Czr.js"), Cu = () => import("./md.transition-BLGeDVWY.js"), qs = ku(), Gs = (e) => new Promise((t, n) => {
  Eo(() => {
    Su(e), Eu(e).then((r) => {
      r.animation && r.animation.destroy(), Ta(e), t(r);
    }, (r) => {
      Ta(e), n(r);
    });
  });
}), Su = (e) => {
  const t = e.enteringEl, n = e.leavingEl;
  qs.saveViewFocus(n), Mu(t, n, e.direction), e.showGoBack ? t.classList.add("can-go-back") : t.classList.remove("can-go-back"), po(t, !1), t.style.setProperty("pointer-events", "none"), n && (po(n, !1), n.style.setProperty("pointer-events", "none"));
}, Eu = async (e) => {
  const t = await Ou(e);
  return t && yc.isBrowser ? Tu(t, e) : Ru(e);
}, Ta = (e) => {
  const t = e.enteringEl, n = e.leavingEl;
  t.classList.remove("ion-page-invisible"), t.style.removeProperty("pointer-events"), n !== void 0 && (n.classList.remove("ion-page-invisible"), n.style.removeProperty("pointer-events")), qs.setViewFocus(t);
}, Ou = async (e) => !e.leavingEl || !e.animated || e.duration === 0 ? void 0 : e.animationBuilder ? e.animationBuilder : e.mode === "ios" ? (await xu()).iosTransitionAnimation : (await Cu()).mdTransitionAnimation, Tu = async (e, t) => {
  await Ks(t, !0);
  const n = e(t.baseEl, t);
  Zs(t.enteringEl, t.leavingEl);
  const r = await $u(n, t);
  return t.progressCallback && t.progressCallback(void 0), r && Js(t.enteringEl, t.leavingEl), {
    hasCompleted: r,
    animation: n
  };
}, Ru = async (e) => {
  const t = e.enteringEl, n = e.leavingEl, r = rn.get("focusManagerPriority", !1);
  return await Ks(e, r), Zs(t, n), Js(t, n), {
    hasCompleted: !0
  };
}, Ks = async (e, t) => {
  (e.deepWait !== void 0 ? e.deepWait : t) && await Promise.all([ho(e.enteringEl), ho(e.leavingEl)]), await Du(e.viewIsReady, e.enteringEl);
}, Du = async (e, t) => {
  e && await e(t);
}, $u = (e, t) => {
  const n = t.progressCallback, r = new Promise((i) => {
    e.onFinish((o) => i(o === 1));
  });
  return n ? (e.progressStart(!0), n(e)) : e.play(), r;
}, Zs = (e, t) => {
  en(t, Bs), en(e, wu);
}, Js = (e, t) => {
  en(e, _u), en(t, Us);
}, en = (e, t) => {
  if (e) {
    const n = new CustomEvent(t, {
      bubbles: !1,
      cancelable: !1
    });
    e.dispatchEvent(n);
  }
}, ho = async (e) => {
  const t = e;
  if (t) {
    if (t.componentOnReady != null) {
      if (await t.componentOnReady() != null)
        return;
    } else if (t.__registerHost != null) {
      await new Promise((r) => zs(r));
      return;
    }
    await Promise.all(Array.from(t.children).map(ho));
  }
}, po = (e, t) => {
  t ? (e.setAttribute("aria-hidden", "true"), e.classList.add("ion-page-hidden")) : (e.hidden = !1, e.removeAttribute("aria-hidden"), e.classList.remove("ion-page-hidden"));
}, Mu = (e, t, n) => {
  e !== void 0 && (e.style.zIndex = n === "back" ? "99" : "101"), t !== void 0 && (t.style.zIndex = "100");
}, ib = (e) => {
  if (e.classList.contains("ion-page"))
    return e;
  const t = e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
  return t || e;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const wi = (e, t, n, r, i) => Pu(e[1], t[1], n[1], r[1], i).map((o) => Iu(e[0], t[0], n[0], r[0], o)), Iu = (e, t, n, r, i) => {
  const o = 3 * t * Math.pow(i - 1, 2), a = -3 * n * i + 3 * n + r * i, s = e * Math.pow(i - 1, 3);
  return i * (o + i * a) - s;
}, Pu = (e, t, n, r, i) => (e -= i, t -= i, n -= i, r -= i, Au(r - 3 * n + 3 * t - e, 3 * n - 6 * t + 3 * e, 3 * t - 3 * e, e).filter((a) => a >= 0 && a <= 1)), Lu = (e, t, n) => {
  const r = t * t - 4 * e * n;
  return r < 0 ? [] : [(-t + Math.sqrt(r)) / (2 * e), (-t - Math.sqrt(r)) / (2 * e)];
}, Au = (e, t, n, r) => {
  if (e === 0)
    return Lu(t, n, r);
  t /= e, n /= e, r /= e;
  const i = (3 * n - t * t) / 3, o = (2 * t * t * t - 9 * t * n + 27 * r) / 27;
  if (i === 0)
    return [Math.pow(-o, 1 / 3)];
  if (o === 0)
    return [Math.sqrt(-i), -Math.sqrt(-i)];
  const a = Math.pow(o / 2, 2) + Math.pow(i / 3, 3);
  if (a === 0)
    return [Math.pow(o / 2, 1 / 2) - t / 3];
  if (a > 0)
    return [
      Math.pow(-(o / 2) + Math.sqrt(a), 1 / 3) - Math.pow(o / 2 + Math.sqrt(a), 1 / 3) - t / 3
    ];
  const s = Math.sqrt(Math.pow(-(i / 3), 3)), c = Math.acos(-(o / (2 * Math.sqrt(Math.pow(-(i / 3), 3))))), u = 2 * Math.pow(s, 1 / 3);
  return [
    u * Math.cos(c / 3) - t / 3,
    u * Math.cos((c + 2 * Math.PI) / 3) - t / 3,
    u * Math.cos((c + 4 * Math.PI) / 3) - t / 3
  ];
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ju = (e, t) => t.closest(e) !== null, Ti = (e, t) => typeof e == "string" && e.length > 0 ? Object.assign({ "ion-color": !0, [`ion-color-${e}`]: !0 }, t) : t, Nu = /^[a-z][a-z0-9+\-.]*:/, Yu = async (e, t, n, r) => {
  if (e != null && e[0] !== "#" && !Nu.test(e)) {
    const i = document.querySelector("ion-router");
    if (i)
      return t != null && t.preventDefault(), i.push(e, n, r);
  }
  return !1;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Xs = async (e, t, n, r, i, o) => {
  var a;
  if (e)
    return e.attachViewToDom(t, n, i, r);
  if (typeof n != "string" && !(n instanceof HTMLElement))
    throw new Error("framework delegate is missing");
  const s = typeof n == "string" ? (a = t.ownerDocument) === null || a === void 0 ? void 0 : a.createElement(n) : n;
  return r && r.forEach((c) => s.classList.add(c)), i && Object.assign(s, i), t.appendChild(s), await new Promise((c) => Ws(s, c)), s;
}, Fu = (e, t) => {
  if (t) {
    if (e) {
      const n = t.parentElement;
      return e.removeViewFromDom(n, t);
    }
    t.remove();
  }
  return Promise.resolve();
};
function Vt(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Wu = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}", Vu = Wu, zu = /* @__PURE__ */ Wt(class extends Ft {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.type = "bounded";
  }
  /**
   * Adds the ripple effect to the parent element.
   *
   * @param x The horizontal coordinate of where the ripple should start.
   * @param y The vertical coordinate of where the ripple should start.
   */
  async addRipple(t, n) {
    return new Promise((r) => {
      Oc(() => {
        const i = this.el.getBoundingClientRect(), o = i.width, a = i.height, s = Math.sqrt(o * o + a * a), c = Math.max(a, o), u = this.unbounded ? c : s + Bu, d = Math.floor(c * Uu), m = u / d;
        let v = t - i.left, _ = n - i.top;
        this.unbounded && (v = o * 0.5, _ = a * 0.5);
        const E = v - d * 0.5, se = _ - d * 0.5, x = o * 0.5 - v, re = a * 0.5 - _;
        Eo(() => {
          const S = document.createElement("div");
          S.classList.add("ripple-effect");
          const Q = S.style;
          Q.top = se + "px", Q.left = E + "px", Q.width = Q.height = d + "px", Q.setProperty("--final-scale", `${m}`), Q.setProperty("--translate-end", `${x}px, ${re}px`), (this.el.shadowRoot || this.el).appendChild(S), setTimeout(() => {
            r(() => {
              Hu(S);
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
    const t = Nt(this);
    return Ye(ln, { key: "7ae559bda5d2c1856a45bfa150c2cb4f83373f8e", role: "presentation", class: {
      [t]: !0,
      unbounded: this.unbounded
    } });
  }
  get el() {
    return this;
  }
  static get style() {
    return Vu;
  }
}, [1, "ion-ripple-effect", {
  type: [1],
  addRipple: [64]
}]), Hu = (e) => {
  e.classList.add("fade-out"), setTimeout(() => {
    e.remove();
  }, 200);
}, Bu = 10, Uu = 0.5;
function qu() {
  if (typeof customElements > "u")
    return;
  ["ion-ripple-effect"].forEach((t) => {
    switch (t) {
      case "ion-ripple-effect":
        customElements.get(t) || customElements.define(t, zu);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const li = typeof window < "u" ? window : void 0;
li && (li.CSS && li.CSS.supports && li.CSS.supports("--a: 0"));
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Gu = () => {
  if (at !== void 0)
    return at.Capacitor;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Ku = () => {
  let e;
  return {
    lock: async () => {
      const n = e;
      let r;
      return e = new Promise((i) => r = i), n !== void 0 && await n, r;
    }
  };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var mo;
(function(e) {
  e.Unimplemented = "UNIMPLEMENTED", e.Unavailable = "UNAVAILABLE";
})(mo || (mo = {}));
var go;
(function(e) {
  e.Body = "body", e.Ionic = "ionic", e.Native = "native", e.None = "none";
})(go || (go = {}));
const Zu = {
  getEngine() {
    const e = Gu();
    if (e != null && e.isPluginAvailable("Keyboard"))
      return e.Plugins.Keyboard;
  },
  getResizeMode() {
    const e = this.getEngine();
    return e != null && e.getResizeMode ? e.getResizeMode().catch((t) => {
      if (t.code !== mo.Unimplemented)
        throw t;
    }) : Promise.resolve(void 0);
  }
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Qs = (e) => {
  if (Hi === void 0 || e === go.None || e === void 0)
    return null;
  const t = Hi.querySelector("ion-app");
  return t ?? Hi.body;
}, Ra = (e) => {
  const t = Qs(e);
  return t === null ? 0 : t.clientHeight;
}, Ju = async (e) => {
  let t, n, r, i;
  const o = async () => {
    const d = await Zu.getResizeMode(), m = d === void 0 ? void 0 : d.mode;
    t = () => {
      i === void 0 && (i = Ra(m)), r = !0, a(r, m);
    }, n = () => {
      r = !1, a(r, m);
    }, at == null || at.addEventListener("keyboardWillShow", t), at == null || at.addEventListener("keyboardWillHide", n);
  }, a = (d, m) => {
    e && e(d, s(m));
  }, s = (d) => {
    if (
      /**
       * If we are in an SSR environment then there is
       * no window to resize. Additionally, if there
       * is no resize mode or the resize mode is "None"
       * then initialResizeContainerHeight will be 0
       */
      i === 0 || /**
       * If the keyboard is closed before the webview resizes initially
       * then the webview will never resize.
       */
      i === Ra(d)
    )
      return;
    const m = Qs(d);
    if (m !== null)
      return new Promise((v) => {
        const _ = () => {
          m.clientHeight === i && (E.disconnect(), v());
        }, E = new ResizeObserver(_);
        E.observe(m);
      });
  }, c = () => {
    at == null || at.removeEventListener("keyboardWillShow", t), at == null || at.removeEventListener("keyboardWillHide", n), t = n = void 0;
  }, u = () => r;
  return await o(), { init: o, destroy: c, isKeyboardVisible: u };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Xu = ":host{-webkit-padding-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;display:block;-ms-flex:1;flex:1}@media (min-width: 576px){:host{-webkit-padding-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}}@media (min-width: 768px){:host{-webkit-padding-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}}@media (min-width: 992px){:host{-webkit-padding-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}}@media (min-width: 1200px){:host{-webkit-padding-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}}:host(.grid-fixed){width:var(--ion-grid-width-xs, var(--ion-grid-width, 100%));max-width:100%}@media (min-width: 576px){:host(.grid-fixed){width:var(--ion-grid-width-sm, var(--ion-grid-width, 540px))}}@media (min-width: 768px){:host(.grid-fixed){width:var(--ion-grid-width-md, var(--ion-grid-width, 720px))}}@media (min-width: 992px){:host(.grid-fixed){width:var(--ion-grid-width-lg, var(--ion-grid-width, 960px))}}@media (min-width: 1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl, var(--ion-grid-width, 1140px))}}:host(.ion-no-padding){--ion-grid-column-padding:0;--ion-grid-column-padding-xs:0;--ion-grid-column-padding-sm:0;--ion-grid-column-padding-md:0;--ion-grid-column-padding-lg:0;--ion-grid-column-padding-xl:0}", Qu = Xu, ed = /* @__PURE__ */ Wt(class extends Ft {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.fixed = !1;
  }
  render() {
    const t = Nt(this);
    return Ye(ln, { key: "617127ecfabf9bf615bef1dda1be3fed5a065949", class: {
      [t]: !0,
      "grid-fixed": this.fixed
    } }, Ye("slot", { key: "c781fff853b093d8f44bdb7943bbc4f17c903803" }));
  }
  static get style() {
    return Qu;
  }
}, [1, "ion-grid", {
  fixed: [4]
}]);
function td() {
  if (typeof customElements > "u")
    return;
  ["ion-grid"].forEach((t) => {
    switch (t) {
      case "ion-grid":
        customElements.get(t) || customElements.define(t, ed);
        break;
    }
  });
}
const nd = td;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const rd = ".item.sc-ion-label-ios-h,.item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-nowrap.sc-ion-label-ios-h{overflow:hidden}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-ios-h,.item-input .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h,.item-textarea .sc-ion-label-ios-h{-ms-flex-item-align:baseline;align-self:baseline}.item-skeleton-text.sc-ion-label-ios-h,.item-skeleton-text .sc-ion-label-ios-h{overflow:hidden}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-ios-h,.label-floating.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}.sc-ion-label-ios-s h1,.sc-ion-label-ios-s h2,.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-ios-h{font-size:0.875rem;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:0.875rem}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate(0, 29px);transform:translate(0, 29px);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}[dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl].label-floating.sc-ion-label-ios-h,[dir=rtl] .label-floating.sc-ion-label-ios-h{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.label-floating.sc-ion-label-ios-h:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.item-textarea.label-floating.sc-ion-label-ios-h,.item-textarea .label-floating.sc-ion-label-ios-h{-webkit-transform:translate(0, 28px);transform:translate(0, 28px)}.item-has-focus.label-floating.sc-ion-label-ios-h,.item-has-focus .label-floating.sc-ion-label-ios-h,.item-has-placeholder.sc-ion-label-ios-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-ios-h,.item-has-value.label-floating.sc-ion-label-ios-h,.item-has-value .label-floating.sc-ion-label-ios-h{-webkit-transform:scale(0.82);transform:scale(0.82)}.sc-ion-label-ios-s h1{margin-left:0;margin-right:0;margin-top:3px;margin-bottom:2px;font-size:1.375rem;font-weight:normal}.sc-ion-label-ios-s h2{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.0625rem;font-weight:normal}.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:0.875rem;font-weight:normal;line-height:normal}.sc-ion-label-ios-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s>p{color:var(--ion-color-step-400, var(--ion-text-color-step-600, #999999))}.sc-ion-label-ios-h.in-item-color.sc-ion-label-ios-s>p{color:inherit}.sc-ion-label-ios-s h2:last-child,.sc-ion-label-ios-s h3:last-child,.sc-ion-label-ios-s h4:last-child,.sc-ion-label-ios-s h5:last-child,.sc-ion-label-ios-s h6:last-child,.sc-ion-label-ios-s p:last-child{margin-bottom:0}", id = rd, od = ".item.sc-ion-label-md-h,.item .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}.ion-text-nowrap.sc-ion-label-md-h{overflow:hidden}.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-md-h,.item-input .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h,.item-textarea .sc-ion-label-md-h{-ms-flex-item-align:baseline;align-self:baseline}.item-skeleton-text.sc-ion-label-md-h,.item-skeleton-text .sc-ion-label-md-h{overflow:hidden}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}.sc-ion-label-md-s h1,.sc-ion-label-md-s h2,.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:top left;transform-origin:top left}.label-stacked.label-rtl.sc-ion-label-md-h,.label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform-origin:top right;transform-origin:top right}.label-stacked.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.label-floating.sc-ion-label-md-h{-webkit-transform:translateY(96%);transform:translateY(96%);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.ion-focused.label-floating.sc-ion-label-md-h,.ion-focused .label-floating.sc-ion-label-md-h,.item-has-focus.label-floating.sc-ion-label-md-h,.item-has-focus .label-floating.sc-ion-label-md-h,.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-has-value.label-floating.sc-ion-label-md-h,.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75)}.ion-focused.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-primary, #0054e9)}.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-contrast)}.ion-invalid.ion-touched.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--highlight-color-invalid)}.sc-ion-label-md-s h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.sc-ion-label-md-s h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal;line-height:normal}.sc-ion-label-md-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;line-height:1.25rem;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s>p{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.sc-ion-label-md-h.in-item-color.sc-ion-label-md-s>p{color:inherit}", ad = od, sd = /* @__PURE__ */ Wt(class extends Ft {
  constructor() {
    super(), this.__registerHost(), this.ionColor = Rt(this, "ionColor", 7), this.ionStyle = Rt(this, "ionStyle", 7), this.inRange = !1, this.color = void 0, this.position = void 0, this.noAnimate = !1;
  }
  componentWillLoad() {
    this.inRange = !!this.el.closest("ion-range"), this.noAnimate = this.position === "floating", this.emitStyle(), this.emitColor();
  }
  componentDidLoad() {
    this.noAnimate && setTimeout(() => {
      this.noAnimate = !1;
    }, 1e3);
  }
  colorChanged() {
    this.emitColor();
  }
  positionChanged() {
    this.emitStyle();
  }
  emitColor() {
    const { color: t } = this;
    this.ionColor.emit({
      "item-label-color": t !== void 0,
      [`ion-color-${t}`]: t !== void 0
    });
  }
  emitStyle() {
    const { inRange: t, position: n } = this;
    t || this.ionStyle.emit({
      label: !0,
      [`label-${n}`]: n !== void 0
    });
  }
  render() {
    const t = this.position, n = Nt(this);
    return Ye(ln, { key: "6353a70565ef6fbbbf4042b000e536c61bcf99a9", class: Ti(this.color, {
      [n]: !0,
      "in-item-color": ju("ion-item.ion-color", this.el),
      [`label-${t}`]: t !== void 0,
      "label-no-animate": this.noAnimate,
      "label-rtl": document.dir === "rtl"
    }) }, Ye("slot", { key: "6ef9c2758c0168442aa84941af0a6cec1ef1ec21" }));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      color: ["colorChanged"],
      position: ["positionChanged"]
    };
  }
  static get style() {
    return {
      ios: id,
      md: ad
    };
  }
}, [38, "ion-label", {
  color: [513],
  position: [1],
  noAnimate: [32]
}, void 0, {
  color: ["colorChanged"],
  position: ["positionChanged"]
}]);
function ld() {
  if (typeof customElements > "u")
    return;
  ["ion-label"].forEach((t) => {
    switch (t) {
      case "ion-label":
        customElements.get(t) || customElements.define(t, sd);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const cd = ld;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const el = 1, tl = 2, _i = 3;
class bo {
  constructor(t, n) {
    this.component = t, this.params = n, this.state = el;
  }
  async init(t) {
    if (this.state = tl, !this.element) {
      const n = this.component;
      this.element = await Xs(this.delegate, t, n, ["ion-page", "ion-page-invisible"], this.params);
    }
  }
  /**
   * DOM WRITE
   */
  _destroy() {
    ct(this.state !== _i, "view state must be ATTACHED");
    const t = this.element;
    t && (this.delegate ? this.delegate.removeViewFromDom(t.parentElement, t) : t.remove()), this.nav = void 0, this.state = _i;
  }
}
const Da = (e, t, n) => !e || e.component !== t ? !1 : Hs(e.params, n), $a = (e, t) => e ? e instanceof bo ? e : new bo(e, t) : null, ud = (e) => e.map((t) => t instanceof bo ? t : "component" in t ? $a(t.component, t.componentProps === null ? void 0 : t.componentProps) : $a(t, void 0)).filter((t) => t !== null), dd = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}", fd = dd, hd = /* @__PURE__ */ Wt(class extends Ft {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = Rt(this, "ionNavWillLoad", 7), this.ionNavWillChange = Rt(this, "ionNavWillChange", 3), this.ionNavDidChange = Rt(this, "ionNavDidChange", 3), this.transInstr = [], this.gestureOrAnimationInProgress = !1, this.useRouter = !1, this.isTransitioning = !1, this.destroyed = !1, this.views = [], this.didLoad = !1, this.delegate = void 0, this.swipeGesture = void 0, this.animated = !0, this.animation = void 0, this.rootParams = void 0, this.root = void 0;
  }
  swipeGestureChanged() {
    this.gesture && this.gesture.enable(this.swipeGesture === !0);
  }
  rootChanged() {
    this.root !== void 0 && this.didLoad !== !1 && (this.useRouter || this.root !== void 0 && this.setRoot(this.root, this.rootParams));
  }
  componentWillLoad() {
    if (this.useRouter = document.querySelector("ion-router") !== null && this.el.closest("[no-router]") === null, this.swipeGesture === void 0) {
      const t = Nt(this);
      this.swipeGesture = rn.getBoolean("swipeBackEnabled", t === "ios");
    }
    this.ionNavWillLoad.emit();
  }
  async componentDidLoad() {
    this.didLoad = !0, this.rootChanged(), this.gesture = (await import("./swipe-back-Bki4P0tM.js")).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this)), this.swipeGestureChanged();
  }
  connectedCallback() {
    this.destroyed = !1;
  }
  disconnectedCallback() {
    for (const t of this.views)
      en(t.element, qi), t._destroy();
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
  push(t, n, r, i) {
    return this.insert(-1, t, n, r, i);
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
  insert(t, n, r, i, o) {
    return this.insertPages(t, [{ component: n, componentProps: r }], i, o);
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
  insertPages(t, n, r, i) {
    return this.queueTrns({
      insertStart: t,
      insertViews: n,
      opts: r
    }, i);
  }
  /**
   * Pop a component off of the navigation stack. Navigates back from the current
   * component.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  pop(t, n) {
    return this.removeIndex(-1, 1, t, n);
  }
  /**
   * Pop to a specific index in the navigation stack.
   *
   * @param indexOrViewCtrl The index or view controller to pop to.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popTo(t, n, r) {
    const i = {
      removeStart: -1,
      removeCount: -1,
      opts: n
    };
    return typeof t == "object" && t.component ? (i.removeView = t, i.removeStart = 1) : typeof t == "number" && (i.removeStart = t + 1), this.queueTrns(i, r);
  }
  /**
   * Navigate back to the root of the stack, no matter how far back that is.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popToRoot(t, n) {
    return this.removeIndex(1, -1, t, n);
  }
  /**
   * Removes a component from the navigation stack at the specified index.
   *
   * @param startIndex The number to begin removal at.
   * @param removeCount The number of components to remove.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  removeIndex(t, n = 1, r, i) {
    return this.queueTrns({
      removeStart: t,
      removeCount: n,
      opts: r
    }, i);
  }
  /**
   * Set the root for the current navigation stack to a component.
   *
   * @param component The component to set as the root of the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setRoot(t, n, r, i) {
    return this.setPages([{ component: t, componentProps: n }], r, i);
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
  setPages(t, n, r) {
    return n ?? (n = {}), n.animated !== !0 && (n.animated = !1), this.queueTrns({
      insertStart: 0,
      insertViews: t,
      removeStart: 0,
      removeCount: -1,
      opts: n
    }, r);
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
  setRouteId(t, n, r, i) {
    const o = this.getActiveSync();
    if (Da(o, t, n))
      return Promise.resolve({
        changed: !1,
        element: o.element
      });
    let a;
    const s = new Promise((d) => a = d);
    let c;
    const u = {
      updateURL: !1,
      viewIsReady: (d) => {
        let m;
        const v = new Promise((_) => m = _);
        return a({
          changed: !0,
          element: d,
          markVisible: async () => {
            m(), await c;
          }
        }), v;
      }
    };
    if (r === "root")
      c = this.setRoot(t, n, u);
    else {
      const d = this.views.find((m) => Da(m, t, n));
      d ? c = this.popTo(d, Object.assign(Object.assign({}, u), { direction: "back", animationBuilder: i })) : r === "forward" ? c = this.push(t, n, Object.assign(Object.assign({}, u), { animationBuilder: i })) : r === "back" && (c = this.setRoot(t, n, Object.assign(Object.assign({}, u), { direction: "back", animated: !0, animationBuilder: i })));
    }
    return s;
  }
  /**
   * Called by <ion-router> to retrieve the current component.
   *
   * @internal
   */
  async getRouteId() {
    const t = this.getActiveSync();
    if (t)
      return {
        id: t.element.tagName,
        params: t.params,
        element: t.element
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
  async getByIndex(t) {
    return this.views[t];
  }
  /**
   * Returns `true` if the current view can go back.
   *
   * @param view The view to check.
   */
  async canGoBack(t) {
    return this.canGoBackSync(t);
  }
  /**
   * Get the previous view.
   *
   * @param view The view to get.
   */
  async getPrevious(t) {
    return this.getPreviousSync(t);
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
  canGoBackSync(t = this.getActiveSync()) {
    return !!(t && this.getPreviousSync(t));
  }
  getPreviousSync(t = this.getActiveSync()) {
    if (!t)
      return;
    const n = this.views, r = n.indexOf(t);
    return r > 0 ? n[r - 1] : void 0;
  }
  /**
   * Adds a navigation stack change to the queue and schedules it to run.
   *
   * @returns Whether the transition succeeds.
   */
  async queueTrns(t, n) {
    var r, i;
    if (this.isTransitioning && (!((r = t.opts) === null || r === void 0) && r.skipIfBusy))
      return !1;
    const o = new Promise((a, s) => {
      t.resolve = a, t.reject = s;
    });
    if (t.done = n, t.opts && t.opts.updateURL !== !1 && this.useRouter) {
      const a = document.querySelector("ion-router");
      if (a) {
        const s = await a.canTransition();
        if (s === !1)
          return !1;
        if (typeof s == "string")
          return a.push(s, t.opts.direction || "back"), !1;
      }
    }
    return ((i = t.insertViews) === null || i === void 0 ? void 0 : i.length) === 0 && (t.insertViews = void 0), this.transInstr.push(t), this.nextTrns(), o;
  }
  success(t, n) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", n);
      return;
    }
    if (n.done && n.done(t.hasCompleted, t.requiresTransition, t.enteringView, t.leavingView, t.direction), n.resolve(t.hasCompleted), n.opts.updateURL !== !1 && this.useRouter) {
      const r = document.querySelector("ion-router");
      if (r) {
        const i = t.direction === "back" ? "back" : "forward";
        r.navChanged(i);
      }
    }
  }
  failed(t, n) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", n);
      return;
    }
    this.transInstr.length = 0, this.fireError(t, n);
  }
  fireError(t, n) {
    n.done && n.done(!1, !1, t), n.reject && !this.destroyed ? n.reject(t) : n.resolve(!1);
  }
  /**
   * Consumes the next transition in the queue.
   *
   * @returns whether the transition is executed.
   */
  nextTrns() {
    if (this.isTransitioning)
      return !1;
    const t = this.transInstr.shift();
    return t ? (this.runTransition(t), !0) : !1;
  }
  /** Executes all the transition instruction from the queue. */
  async runTransition(t) {
    try {
      this.ionNavWillChange.emit(), this.isTransitioning = !0, this.prepareTI(t);
      const n = this.getActiveSync(), r = this.getEnteringView(t, n);
      if (!n && !r)
        throw new Error("no views in the stack to be removed");
      r && r.state === el && await r.init(this.el), this.postViewInit(r, n, t);
      const i = (t.enteringRequiresTransition || t.leavingRequiresTransition) && r !== n;
      i && t.opts && n && (t.opts.direction === "back" && (t.opts.animationBuilder = t.opts.animationBuilder || (r == null ? void 0 : r.animationBuilder)), n.animationBuilder = t.opts.animationBuilder);
      let o;
      i ? o = await this.transition(r, n, t) : o = {
        hasCompleted: !0,
        requiresTransition: !1
      }, this.success(o, t), this.ionNavDidChange.emit();
    } catch (n) {
      this.failed(n, t);
    }
    this.isTransitioning = !1, this.nextTrns();
  }
  prepareTI(t) {
    var n, r, i;
    const o = this.views.length;
    if ((n = t.opts) !== null && n !== void 0 || (t.opts = {}), (r = (i = t.opts).delegate) !== null && r !== void 0 || (i.delegate = this.delegate), t.removeView !== void 0) {
      ct(t.removeStart !== void 0, "removeView needs removeStart"), ct(t.removeCount !== void 0, "removeView needs removeCount");
      const c = this.views.indexOf(t.removeView);
      if (c < 0)
        throw new Error("removeView was not found");
      t.removeStart += c;
    }
    t.removeStart !== void 0 && (t.removeStart < 0 && (t.removeStart = o - 1), t.removeCount < 0 && (t.removeCount = o - t.removeStart), t.leavingRequiresTransition = t.removeCount > 0 && t.removeStart + t.removeCount === o), t.insertViews && ((t.insertStart < 0 || t.insertStart > o) && (t.insertStart = o), t.enteringRequiresTransition = t.insertStart === o);
    const a = t.insertViews;
    if (!a)
      return;
    ct(a.length > 0, "length can not be zero");
    const s = ud(a);
    if (s.length === 0)
      throw new Error("invalid views to insert");
    for (const c of s) {
      c.delegate = t.opts.delegate;
      const u = c.nav;
      if (u && u !== this)
        throw new Error("inserted view was already inserted");
      if (c.state === _i)
        throw new Error("inserted view was already destroyed");
    }
    t.insertViews = s;
  }
  /**
   * Returns the view that will be entered considering the transition instructions.
   *
   * @param ti The instructions.
   * @param leavingView The view being left or undefined if none.
   *
   * @returns The view that will be entered, undefined if none.
   */
  getEnteringView(t, n) {
    const r = t.insertViews;
    if (r !== void 0)
      return r[r.length - 1];
    const i = t.removeStart;
    if (i !== void 0) {
      const o = this.views, a = i + t.removeCount;
      for (let s = o.length - 1; s >= 0; s--) {
        const c = o[s];
        if ((s < i || s >= a) && c !== n)
          return c;
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
  postViewInit(t, n, r) {
    var i, o, a;
    ct(n || t, "Both leavingView and enteringView are null"), ct(r.resolve, "resolve must be valid"), ct(r.reject, "reject must be valid");
    const s = r.opts, { insertViews: c, removeStart: u, removeCount: d } = r;
    let m;
    if (u !== void 0 && d !== void 0) {
      ct(u >= 0, "removeStart can not be negative"), ct(d >= 0, "removeCount can not be negative"), m = [];
      for (let _ = u; _ < u + d; _++) {
        const E = this.views[_];
        E !== void 0 && E !== t && E !== n && m.push(E);
      }
      (i = s.direction) !== null && i !== void 0 || (s.direction = "back");
    }
    const v = this.views.length + ((o = c == null ? void 0 : c.length) !== null && o !== void 0 ? o : 0) - (d ?? 0);
    if (ct(v >= 0, "final balance can not be negative"), v === 0)
      throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el), new Error("navigation stack needs at least one root page");
    if (c) {
      let _ = r.insertStart;
      for (const E of c)
        this.insertViewAt(E, _), _++;
      r.enteringRequiresTransition && ((a = s.direction) !== null && a !== void 0 || (s.direction = "forward"));
    }
    if (m && m.length > 0) {
      for (const _ of m)
        en(_.element, Bs), en(_.element, Us), en(_.element, qi);
      for (const _ of m)
        this.destroyView(_);
    }
  }
  async transition(t, n, r) {
    const i = r.opts, o = i.progressAnimation ? (m) => {
      m !== void 0 && !this.gestureOrAnimationInProgress ? (this.gestureOrAnimationInProgress = !0, m.onFinish(() => {
        this.gestureOrAnimationInProgress = !1;
      }, { oneTimeCallback: !0 }), m.progressEnd(0, 0, 0)) : this.sbAni = m;
    } : void 0, a = Nt(this), s = t.element, c = n && n.element, u = Object.assign(Object.assign({
      mode: a,
      showGoBack: this.canGoBackSync(t),
      baseEl: this.el,
      progressCallback: o,
      animated: this.animated && rn.getBoolean("animated", !0),
      enteringEl: s,
      leavingEl: c
    }, i), { animationBuilder: i.animationBuilder || this.animation || rn.get("navAnimation") }), { hasCompleted: d } = await Gs(u);
    return this.transitionFinish(d, t, n, i);
  }
  transitionFinish(t, n, r, i) {
    const o = t ? n : r;
    return o && this.unmountInactiveViews(o), {
      hasCompleted: t,
      requiresTransition: !0,
      enteringView: n,
      leavingView: r,
      direction: i.direction
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
  insertViewAt(t, n) {
    const r = this.views, i = r.indexOf(t);
    i > -1 ? (ct(t.nav === this, "view is not part of the nav"), r.splice(i, 1), r.splice(n, 0, t)) : (ct(!t.nav, "nav is used"), t.nav = this, r.splice(n, 0, t));
  }
  /**
   * Removes a view from the stack.
   *
   * @param view The view to remove.
   */
  removeView(t) {
    ct(t.state === tl || t.state === _i, "view state should be loaded or destroyed");
    const n = this.views, r = n.indexOf(t);
    ct(r > -1, "view must be part of the stack"), r >= 0 && n.splice(r, 1);
  }
  destroyView(t) {
    t._destroy(), this.removeView(t);
  }
  /**
   * Unmounts all inactive views after the specified active view.
   *
   * DOM WRITE
   *
   * @param activeView The view that is actively visible in the stack. Used to calculate which views to unmount.
   */
  unmountInactiveViews(t) {
    if (this.destroyed)
      return;
    const n = this.views, r = n.indexOf(t);
    for (let i = n.length - 1; i >= 0; i--) {
      const o = n[i], a = o.element;
      a && (i > r ? (en(a, qi), this.destroyView(o)) : i < r && po(a, !0));
    }
  }
  canStart() {
    return !this.gestureOrAnimationInProgress && !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.canGoBackSync();
  }
  onStart() {
    this.gestureOrAnimationInProgress = !0, this.pop({ direction: "back", progressAnimation: !0 });
  }
  onMove(t) {
    this.sbAni && this.sbAni.progressStep(t);
  }
  onEnd(t, n, r) {
    if (this.sbAni) {
      this.sbAni.onFinish(() => {
        this.gestureOrAnimationInProgress = !1;
      }, { oneTimeCallback: !0 });
      let i = t ? -1e-3 : 1e-3;
      t ? i += wi([0, 0], [0.32, 0.72], [0, 1], [1, 1], n)[0] : (this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"), i += wi([0, 0], [1, 0], [0.68, 0.28], [1, 1], n)[0]), this.sbAni.progressEnd(t ? 1 : 0, i, r);
    } else
      this.gestureOrAnimationInProgress = !1;
  }
  render() {
    return Ye("slot", { key: "dfe98cb6604a2015a49f41beffebdd2da957dfff" });
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
    return fd;
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
function pd() {
  if (typeof customElements > "u")
    return;
  ["ion-nav"].forEach((t) => {
    switch (t) {
      case "ion-nav":
        customElements.get(t) || customElements.define(t, hd);
        break;
    }
  });
}
const md = pd;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const gd = ":host(.ion-color){color:var(--ion-color-base)}", bd = gd, vd = /* @__PURE__ */ Wt(class extends Ft {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.color = void 0;
  }
  render() {
    const t = Nt(this);
    return Ye(ln, { key: "e134d70c04344b708a2ecf6253722781ad2ca826", class: Ti(this.color, {
      [t]: !0
    }) }, Ye("slot", { key: "da79c760f7ebbcd007ce110439f05a62cb22eac8" }));
  }
  static get style() {
    return bd;
  }
}, [1, "ion-text", {
  color: [513]
}]);
function yd() {
  if (typeof customElements > "u")
    return;
  ["ion-text"].forEach((t) => {
    switch (t) {
      case "ion-text":
        customElements.get(t) || customElements.define(t, vd);
        break;
    }
  });
}
const wd = yd;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const _d = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))));-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1), -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:0.875rem;-webkit-box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}:host(.ion-activated){-webkit-transform:scale3d(0.97, 0.97, 1);transform:scale3d(0.97, 0.97, 1)}", kd = _d, xd = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))));-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:0.875rem;-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}", Cd = xd, Sd = /* @__PURE__ */ Wt(class extends Ft {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.inheritedAriaAttributes = {}, this.color = void 0, this.button = !1, this.type = "button", this.disabled = !1, this.download = void 0, this.href = void 0, this.rel = void 0, this.routerDirection = "forward", this.routerAnimation = void 0, this.target = void 0;
  }
  componentWillLoad() {
    this.inheritedAriaAttributes = Vs(this.el, ["aria-label"]);
  }
  isClickable() {
    return this.href !== void 0 || this.button;
  }
  renderCard(t) {
    const n = this.isClickable();
    if (!n)
      return [Ye("slot", null)];
    const { href: r, routerAnimation: i, routerDirection: o, inheritedAriaAttributes: a } = this, s = n ? r === void 0 ? "button" : "a" : "div", c = s === "button" ? { type: this.type } : {
      download: this.download,
      href: this.href,
      rel: this.rel,
      target: this.target
    };
    return Ye(s, Object.assign({}, c, a, { class: "card-native", part: "native", disabled: this.disabled, onClick: (u) => Yu(r, u, o, i) }), Ye("slot", null), n && t === "md" && Ye("ion-ripple-effect", null));
  }
  render() {
    const t = Nt(this);
    return Ye(ln, { key: "85e9b30bd81e79a0c7ac75cb3664bdcf9e4afc4d", class: Ti(this.color, {
      [t]: !0,
      "card-disabled": this.disabled,
      "ion-activatable": this.isClickable()
    }) }, this.renderCard(t));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: kd,
      md: Cd
    };
  }
}, [33, "ion-card", {
  color: [513],
  button: [4],
  type: [1],
  disabled: [4],
  download: [1],
  href: [1],
  rel: [1],
  routerDirection: [1, "router-direction"],
  routerAnimation: [16],
  target: [1]
}]), Ed = Sd;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Od = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}", Td = Od, Rd = /* @__PURE__ */ Wt(class extends Ft {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = Rt(this, "ionNavWillLoad", 7), this.ionNavWillChange = Rt(this, "ionNavWillChange", 3), this.ionNavDidChange = Rt(this, "ionNavDidChange", 3), this.lockController = Ku(), this.gestureOrAnimationInProgress = !1, this.mode = Nt(this), this.delegate = void 0, this.animated = !0, this.animation = void 0, this.swipeHandler = void 0;
  }
  swipeHandlerChanged() {
    this.gesture && this.gesture.enable(this.swipeHandler !== void 0);
  }
  async connectedCallback() {
    const t = () => {
      this.gestureOrAnimationInProgress = !0, this.swipeHandler && this.swipeHandler.onStart();
    };
    this.gesture = (await import("./swipe-back-Bki4P0tM.js")).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => t(), (n) => {
      var r;
      return (r = this.ani) === null || r === void 0 ? void 0 : r.progressStep(n);
    }, (n, r, i) => {
      if (this.ani) {
        this.ani.onFinish(() => {
          this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(n);
        }, { oneTimeCallback: !0 });
        let o = n ? -1e-3 : 1e-3;
        n ? o += wi([0, 0], [0.32, 0.72], [0, 1], [1, 1], r)[0] : (this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"), o += wi([0, 0], [1, 0], [0.68, 0.28], [1, 1], r)[0]), this.ani.progressEnd(n ? 1 : 0, o, i);
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
  async commit(t, n, r) {
    const i = await this.lockController.lock();
    let o = !1;
    try {
      o = await this.transition(t, n, r);
    } catch (a) {
      console.error(a);
    }
    return i(), o;
  }
  /** @internal */
  async setRouteId(t, n, r, i) {
    return {
      changed: await this.setRoot(t, n, {
        duration: r === "root" ? 0 : void 0,
        direction: r === "back" ? "back" : "forward",
        animationBuilder: i
      }),
      element: this.activeEl
    };
  }
  /** @internal */
  async getRouteId() {
    const t = this.activeEl;
    return t ? {
      id: t.tagName,
      element: t,
      params: this.activeParams
    } : void 0;
  }
  async setRoot(t, n, r) {
    if (this.activeComponent === t && Hs(n, this.activeParams))
      return !1;
    const i = this.activeEl, o = await Xs(this.delegate, this.el, t, ["ion-page", "ion-page-invisible"], n);
    return this.activeComponent = t, this.activeEl = o, this.activeParams = n, await this.commit(o, i, r), await Fu(this.delegate, i), !0;
  }
  async transition(t, n, r = {}) {
    if (n === t)
      return !1;
    this.ionNavWillChange.emit();
    const { el: i, mode: o } = this, a = this.animated && rn.getBoolean("animated", !0), s = r.animationBuilder || this.animation || rn.get("navAnimation");
    return await Gs(Object.assign(Object.assign({
      mode: o,
      animated: a,
      enteringEl: t,
      leavingEl: n,
      baseEl: i,
      /**
       * We need to wait for all Stencil components
       * to be ready only when using the lazy
       * loaded bundle.
       */
      deepWait: yu(i),
      progressCallback: r.progressAnimation ? (c) => {
        c !== void 0 && !this.gestureOrAnimationInProgress ? (this.gestureOrAnimationInProgress = !0, c.onFinish(() => {
          this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(!1);
        }, { oneTimeCallback: !0 }), c.progressEnd(0, 0, 0)) : this.ani = c;
      } : void 0
    }, r), { animationBuilder: s })), this.ionNavDidChange.emit(), !0;
  }
  render() {
    return Ye("slot", { key: "a70341f58d19df55de1dad00e3464388e446aa2a" });
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
    return Td;
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
function Dd() {
  if (typeof customElements > "u")
    return;
  ["ion-router-outlet"].forEach((t) => {
    switch (t) {
      case "ion-router-outlet":
        customElements.get(t) || customElements.define(t, Rd);
        break;
    }
  });
}
const $d = Dd;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Md = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}", Id = Md, Pd = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.07)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, var(--ion-text-color-step-350, #595959)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:56px}", Ld = Pd, Ad = /* @__PURE__ */ Wt(class extends Ft {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionTabBarChanged = Rt(this, "ionTabBarChanged", 7), this.ionTabBarLoaded = Rt(this, "ionTabBarLoaded", 7), this.keyboardCtrl = null, this.keyboardVisible = !1, this.color = void 0, this.selectedTab = void 0, this.translucent = !1;
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
    this.keyboardCtrl = await Ju(async (t, n) => {
      t === !1 && n !== void 0 && await n, this.keyboardVisible = t;
    });
  }
  disconnectedCallback() {
    this.keyboardCtrl && this.keyboardCtrl.destroy();
  }
  componentDidLoad() {
    this.ionTabBarLoaded.emit();
  }
  render() {
    const { color: t, translucent: n, keyboardVisible: r } = this, i = Nt(this), o = r && this.el.getAttribute("slot") !== "top";
    return Ye(ln, { key: "a87fd2ea5df053705a37ea7ffec043e75c4a9907", role: "tablist", "aria-hidden": o ? "true" : null, class: Ti(t, {
      [i]: !0,
      "tab-bar-translucent": n,
      "tab-bar-hidden": o
    }) }, Ye("slot", { key: "81a6223299b6cab29d7ddced590e9152e2b3ded0" }));
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
      ios: Id,
      md: Ld
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
function jd() {
  if (typeof customElements > "u")
    return;
  ["ion-tab-bar"].forEach((t) => {
    switch (t) {
      case "ion-tab-bar":
        customElements.get(t) || customElements.define(t, Ad);
        break;
    }
  });
}
const Nd = jd;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Yd = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:24px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){font-size:30px}', Fd = Yd, Wd = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}', Vd = Wd, zd = /* @__PURE__ */ Wt(class extends Ft {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionTabButtonClick = Rt(this, "ionTabButtonClick", 7), this.inheritedAttributes = {}, this.onKeyUp = (t) => {
      (t.key === "Enter" || t.key === " ") && this.selectTab(t);
    }, this.onClick = (t) => {
      this.selectTab(t);
    }, this.disabled = !1, this.download = void 0, this.href = void 0, this.rel = void 0, this.layout = void 0, this.selected = !1, this.tab = void 0, this.target = void 0;
  }
  onTabBarChanged(t) {
    const n = t.target, r = this.el.parentElement;
    (t.composedPath().includes(r) || n != null && n.contains(this.el)) && (this.selected = this.tab === t.detail.tab);
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign({}, Vs(this.el, ["aria-label"])), this.layout === void 0 && (this.layout = rn.get("tabButtonLayout", "icon-top"));
  }
  selectTab(t) {
    this.tab !== void 0 && (this.disabled || this.ionTabButtonClick.emit({
      tab: this.tab,
      href: this.href,
      selected: this.selected
    }), t.preventDefault());
  }
  get hasLabel() {
    return !!this.el.querySelector("ion-label");
  }
  get hasIcon() {
    return !!this.el.querySelector("ion-icon");
  }
  render() {
    const { disabled: t, hasIcon: n, hasLabel: r, href: i, rel: o, target: a, layout: s, selected: c, tab: u, inheritedAttributes: d } = this, m = Nt(this), v = {
      download: this.download,
      href: i,
      rel: o,
      target: a
    };
    return Ye(ln, { key: "5976c45943ea7ea8e7c1a85fc9996de421439f08", onClick: this.onClick, onKeyup: this.onKeyUp, id: u !== void 0 ? `tab-button-${u}` : null, class: {
      [m]: !0,
      "tab-selected": c,
      "tab-disabled": t,
      "tab-has-label": r,
      "tab-has-icon": n,
      "tab-has-label-only": r && !n,
      "tab-has-icon-only": n && !r,
      [`tab-layout-${s}`]: !0,
      "ion-activatable": !0,
      "ion-selectable": !0,
      "ion-focusable": !0
    } }, Ye("a", Object.assign({ key: "1db09d861b67ff292018fb4b0dc7b85bd4677eb8" }, v, { class: "button-native", part: "native", role: "tab", "aria-selected": c ? "true" : null, "aria-disabled": t ? "true" : null, tabindex: t ? "-1" : void 0 }, d), Ye("span", { key: "4381eafcb27e8c7bb0d86d4f115ceb0caf03b9b4", class: "button-inner" }, Ye("slot", { key: "1981135f6fbb88376c1bd923c55c70fe8b5c5159" })), m === "md" && Ye("ion-ripple-effect", { key: "0509bc7155d055d1ed710600e9cf4df135881491", type: "unbounded" })));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: Fd,
      md: Vd
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
function Hd() {
  if (typeof customElements > "u")
    return;
  ["ion-tab-button", "ion-ripple-effect"].forEach((t) => {
    switch (t) {
      case "ion-tab-button":
        customElements.get(t) || customElements.define(t, zd);
        break;
      case "ion-ripple-effect":
        customElements.get(t) || qu();
        break;
    }
  });
}
const Bd = Hd;
let Gi;
const Ud = () => {
  if (typeof window > "u")
    return /* @__PURE__ */ new Map();
  if (!Gi) {
    const e = window;
    e.Ionicons = e.Ionicons || {}, Gi = e.Ionicons.map = e.Ionicons.map || /* @__PURE__ */ new Map();
  }
  return Gi;
}, qd = (e) => {
  let t = Ki(e.src);
  return t || (t = nl(e.name, e.icon, e.mode, e.ios, e.md), t ? Gd(t, e) : e.icon && (t = Ki(e.icon), t || (t = Ki(e.icon[e.mode]), t)) ? t : null);
}, Gd = (e, t) => {
  const n = Ud().get(e);
  if (n)
    return n;
  try {
    return Tc(`svg/${e}.svg`);
  } catch {
    console.warn(`[Ionicons Warning]: Could not load icon with name "${e}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, t);
  }
}, nl = (e, t, n, r, i) => (n = (n && ci(n)) === "ios" ? "ios" : "md", r && n === "ios" ? e = ci(r) : i && n === "md" ? e = ci(i) : (!e && t && !rl(t) && (e = t), ki(e) && (e = ci(e))), !ki(e) || e.trim() === "" || e.replace(/[a-z]|-|\d/gi, "") !== "" ? null : e), Ki = (e) => ki(e) && (e = e.trim(), rl(e)) ? e : null, rl = (e) => e.length > 0 && /(\/|\.)/.test(e), ki = (e) => typeof e == "string", ci = (e) => e.toLowerCase(), Kd = (e, t = []) => {
  const n = {};
  return t.forEach((r) => {
    e.hasAttribute(r) && (e.getAttribute(r) !== null && (n[r] = e.getAttribute(r)), e.removeAttribute(r));
  }), n;
}, Zd = (e) => e && e.dir !== "" ? e.dir.toLowerCase() === "rtl" : (document == null ? void 0 : document.dir.toLowerCase()) === "rtl", Jd = (e) => {
  const t = document.createElement("div");
  t.innerHTML = e;
  for (let r = t.childNodes.length - 1; r >= 0; r--)
    t.childNodes[r].nodeName.toLowerCase() !== "svg" && t.removeChild(t.childNodes[r]);
  const n = t.firstElementChild;
  if (n && n.nodeName.toLowerCase() === "svg") {
    const r = n.getAttribute("class") || "";
    if (n.setAttribute("class", (r + " s-ion-icon").trim()), il(n))
      return t.innerHTML;
  }
  return "";
}, il = (e) => {
  if (e.nodeType === 1) {
    if (e.nodeName.toLowerCase() === "script")
      return !1;
    for (let t = 0; t < e.attributes.length; t++) {
      const n = e.attributes[t].name;
      if (ki(n) && n.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let t = 0; t < e.childNodes.length; t++)
      if (!il(e.childNodes[t]))
        return !1;
  }
  return !0;
}, Xd = (e) => e.startsWith("data:image/svg+xml"), Qd = (e) => e.indexOf(";utf8,") !== -1, jn = /* @__PURE__ */ new Map(), Ma = /* @__PURE__ */ new Map();
let Zi;
const ef = (e, t) => {
  let n = Ma.get(e);
  if (!n)
    if (typeof fetch < "u" && typeof document < "u")
      if (Xd(e) && Qd(e)) {
        Zi || (Zi = new DOMParser());
        const i = Zi.parseFromString(e, "text/html").querySelector("svg");
        return i && jn.set(e, i.outerHTML), Promise.resolve();
      } else
        n = fetch(e).then((r) => {
          if (r.ok)
            return r.text().then((i) => {
              i && t !== !1 && (i = Jd(i)), jn.set(e, i || "");
            });
          jn.set(e, "");
        }), Ma.set(e, n);
    else
      return jn.set(e, ""), Promise.resolve();
  return n;
}, tf = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}", nf = /* @__PURE__ */ Wt(class extends Ft {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.didLoadIcon = !1, this.svgContent = void 0, this.isVisible = !1, this.mode = rf(), this.color = void 0, this.ios = void 0, this.md = void 0, this.flipRtl = void 0, this.name = void 0, this.src = void 0, this.icon = void 0, this.size = void 0, this.lazy = !1, this.sanitize = !0;
  }
  componentWillLoad() {
    this.inheritedAttributes = Kd(this.el, ["aria-label"]);
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
  waitUntilVisible(t, n, r) {
    if (this.lazy && typeof window < "u" && window.IntersectionObserver) {
      const i = this.io = new window.IntersectionObserver((o) => {
        o[0].isIntersecting && (i.disconnect(), this.io = void 0, r());
      }, { rootMargin: n });
      i.observe(t);
    } else
      r();
  }
  loadIcon() {
    if (this.isVisible) {
      const t = qd(this);
      t && (jn.has(t) ? this.svgContent = jn.get(t) : ef(t, this.sanitize).then(() => this.svgContent = jn.get(t)), this.didLoadIcon = !0);
    }
    this.iconName = nl(this.name, this.icon, this.mode, this.ios, this.md);
  }
  render() {
    const { flipRtl: t, iconName: n, inheritedAttributes: r, el: i } = this, o = this.mode || "md", a = n ? (n.includes("arrow") || n.includes("chevron")) && t !== !1 : !1, s = t || a;
    return Ye(ln, Object.assign({ role: "img", class: Object.assign(Object.assign({ [o]: !0 }, of(this.color)), { [`icon-${this.size}`]: !!this.size, "flip-rtl": s, "icon-rtl": s && Zd(i) }) }, r), this.svgContent ? Ye("div", { class: "icon-inner", innerHTML: this.svgContent }) : Ye("div", { class: "icon-inner" }));
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
    return tf;
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
}]), rf = () => typeof document < "u" && document.documentElement.getAttribute("mode") || "md", of = (e) => e ? {
  "ion-color": !0,
  [`ion-color-${e}`]: !0
} : null;
function af() {
  if (typeof customElements > "u")
    return;
  ["ion-icon"].forEach((t) => {
    switch (t) {
      case "ion-icon":
        customElements.get(t) || customElements.define(t, nf);
        break;
    }
  });
}
const sf = af, $o = /* @__PURE__ */ U.createContext({
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
}), lf = class {
  constructor() {
    this.ionViewWillEnterCallbacks = [], this.ionViewDidEnterCallbacks = [], this.ionViewWillLeaveCallbacks = [], this.ionViewDidLeaveCallbacks = [], this.ionViewWillEnterDestructorCallbacks = [], this.ionViewDidEnterDestructorCallbacks = [], this.ionViewWillLeaveDestructorCallbacks = [], this.ionViewDidLeaveDestructorCallbacks = [];
  }
  onIonViewWillEnter(e) {
    if (e.id) {
      const t = this.ionViewWillEnterCallbacks.findIndex((n) => n.id === e.id);
      t > -1 ? this.ionViewWillEnterCallbacks[t] = e : this.ionViewWillEnterCallbacks.push(e);
    } else
      this.ionViewWillEnterCallbacks.push(e);
  }
  teardownCallback(e, t) {
    const n = t.filter((r) => r.id === e.id);
    n.length !== 0 && (n.forEach((r) => {
      r && typeof r.destructor == "function" && r.destructor();
    }), t = t.filter((r) => r.id !== e.id));
  }
  /**
   * Tears down the user-provided ionViewWillEnter lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewWillEnter(e) {
    this.teardownCallback(e, this.ionViewWillEnterDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewDidEnter lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewDidEnter(e) {
    this.teardownCallback(e, this.ionViewDidEnterDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewWillLeave lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewWillLeave(e) {
    this.teardownCallback(e, this.ionViewWillLeaveDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewDidLeave lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewDidLeave(e) {
    this.teardownCallback(e, this.ionViewDidLeaveDestructorCallbacks);
  }
  ionViewWillEnter() {
    this.ionViewWillEnterCallbacks.forEach((e) => {
      const t = e();
      e.id && this.ionViewWillEnterDestructorCallbacks.push({ id: e.id, destructor: t });
    });
  }
  onIonViewDidEnter(e) {
    if (e.id) {
      const t = this.ionViewDidEnterCallbacks.findIndex((n) => n.id === e.id);
      t > -1 ? this.ionViewDidEnterCallbacks[t] = e : this.ionViewDidEnterCallbacks.push(e);
    } else
      this.ionViewDidEnterCallbacks.push(e);
  }
  ionViewDidEnter() {
    this.ionViewDidEnterCallbacks.forEach((e) => {
      const t = e();
      e.id && this.ionViewDidEnterDestructorCallbacks.push({ id: e.id, destructor: t });
    });
  }
  onIonViewWillLeave(e) {
    if (e.id) {
      const t = this.ionViewWillLeaveCallbacks.findIndex((n) => n.id === e.id);
      t > -1 ? this.ionViewWillLeaveCallbacks[t] = e : this.ionViewWillLeaveCallbacks.push(e);
    } else
      this.ionViewWillLeaveCallbacks.push(e);
  }
  ionViewWillLeave() {
    this.ionViewWillLeaveCallbacks.forEach((e) => {
      const t = e();
      e.id && this.ionViewWillLeaveDestructorCallbacks.push({ id: e.id, destructor: t });
    });
  }
  onIonViewDidLeave(e) {
    if (e.id) {
      const t = this.ionViewDidLeaveCallbacks.findIndex((n) => n.id === e.id);
      t > -1 ? this.ionViewDidLeaveCallbacks[t] = e : this.ionViewDidLeaveCallbacks.push(e);
    } else
      this.ionViewDidLeaveCallbacks.push(e);
  }
  ionViewDidLeave() {
    this.ionViewDidLeaveCallbacks.forEach((e) => {
      const t = e();
      e.id && this.ionViewDidLeaveDestructorCallbacks.push({ id: e.id, destructor: t });
    }), this.componentCanBeDestroyed();
  }
  onComponentCanBeDestroyed(e) {
    this.componentCanBeDestroyedCallback = e;
  }
  componentCanBeDestroyed() {
    this.componentCanBeDestroyedCallback && this.componentCanBeDestroyedCallback();
  }
}, cn = /* @__PURE__ */ U.createContext({
  getIonRedirect: () => {
  },
  getIonRoute: () => {
  },
  getPageManager: () => {
  },
  getStackManager: () => {
  },
  goBack: (e) => {
    typeof window < "u" && (typeof e == "string" ? window.location.pathname = e : window.history.back());
  },
  navigate: (e) => {
    typeof window < "u" && (window.location.pathname = e);
  },
  hasIonicRouter: () => !1,
  routeInfo: void 0,
  setCurrentTab: () => {
  },
  changeTab: (e, t) => {
    typeof window < "u" && (window.location.pathname = t);
  },
  resetTab: (e, t) => {
    typeof window < "u" && (window.location.pathname = t);
  }
}), ol = (e) => e.toLowerCase().split("-").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(""), Mo = (e) => e.replace(/([A-Z])/g, (t) => `-${t[0].toLowerCase()}`), al = (e, t, n = {}) => {
  if (e instanceof Element) {
    const r = cf(e.classList, t, n);
    r !== "" && (e.className = r), Object.keys(t).forEach((i) => {
      if (!(i === "children" || i === "style" || i === "ref" || i === "class" || i === "className" || i === "forwardedRef"))
        if (i.indexOf("on") === 0 && i[2] === i[2].toUpperCase()) {
          const o = i.substring(2), a = o[0].toLowerCase() + o.substring(1);
          Io(a) || df(e, a, t[i]);
        } else
          e[i] = t[i], typeof t[i] === "string" && e.setAttribute(Mo(i), t[i]);
    });
  }
}, cf = (e, t, n) => {
  const r = t.className || t.class, i = n.className || n.class, o = Ji(e), a = Ji(r ? r.split(" ") : []), s = Ji(i ? i.split(" ") : []), c = [];
  return o.forEach((u) => {
    a.has(u) ? (c.push(u), a.delete(u)) : s.has(u) || c.push(u);
  }), a.forEach((u) => c.push(u)), c.join(" ");
}, uf = (e) => {
  switch (e) {
    case "doubleclick":
      return "dblclick";
  }
  return e;
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const Io = (e) => {
  if (typeof document > "u")
    return !0;
  {
    const t = "on" + uf(e);
    let n = t in document;
    if (!n) {
      const r = document.createElement("div");
      r.setAttribute(t, "return;"), n = typeof r[t] == "function";
    }
    return n;
  }
}, df = (e, t, n) => {
  const r = e.__events || (e.__events = {}), i = r[t];
  i && e.removeEventListener(t, i), e.addEventListener(t, r[t] = function(a) {
    n && n.call(this, a);
  });
}, Ji = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => t.set(n, n)), t;
}, ff = (e, t) => {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}, Po = (...e) => (t) => {
  e.forEach((n) => {
    ff(n, t);
  });
}, hf = (e, t) => {
  const n = (r, i) => U.createElement(e, Object.assign({}, r, { forwardedRef: i }));
  return n.displayName = t, U.forwardRef(n);
}, pf = (e, t) => {
  t !== void 0 && typeof customElements < "u" && !customElements.get(e) && customElements.define(e, t);
}, kn = (e, t, n, r) => {
  r !== void 0 && r();
  const i = ol(e), o = class extends U.Component {
    constructor(a) {
      super(a), this.setComponentElRef = (s) => {
        this.componentEl = s;
      };
    }
    componentDidMount() {
      this.componentDidUpdate(this.props);
    }
    componentDidUpdate(a) {
      al(this.componentEl, this.props, a);
    }
    render() {
      const a = this.props, { children: s, forwardedRef: c, style: u, className: d, ref: m } = a, v = Vt(a, ["children", "forwardedRef", "style", "className", "ref"]);
      let _ = Object.keys(v).reduce((se, x) => {
        const re = v[x];
        if (x.indexOf("on") === 0 && x[2] === x[2].toUpperCase()) {
          const S = x.substring(2).toLowerCase();
          typeof document < "u" && Io(S) && (se[x] = re);
        } else {
          const S = typeof re;
          (S === "string" || S === "boolean" || S === "number") && (se[Mo(x)] = re);
        }
        return se;
      }, {});
      const E = Object.assign(Object.assign({}, _), { ref: Po(c, this.setComponentElRef), style: u });
      return xs(e, E, s);
    }
    static get displayName() {
      return i;
    }
  };
  return hf(o, i);
}, mb = /* @__PURE__ */ kn("ion-grid", void 0, void 0, nd), gb = /* @__PURE__ */ kn("ion-label", void 0, void 0, cd), bb = /* @__PURE__ */ kn("ion-text", void 0, void 0, wd), sr = (e, t) => {
  const n = (r, i) => U.createElement(e, Object.assign({}, r, { forwardedRef: i }));
  return n.displayName = t, U.forwardRef(n);
}, mf = () => {
  if (typeof window < "u") {
    const e = window.Ionic;
    if (e && e.config)
      return e.config;
  }
  return null;
}, gf = (e, t) => {
  pf(e, t);
  const n = ol(e), r = class extends U.Component {
    constructor(i) {
      super(i), this.handleClick = (o) => {
        const { routerLink: a, routerDirection: s, routerOptions: c, routerAnimation: u } = this.props;
        a !== void 0 && (o.preventDefault(), this.context.navigate(a, s, void 0, u, c));
      }, this.ref = U.createRef(), this.stableMergedRefs = Po(this.ref, this.props.forwardedRef);
    }
    componentDidMount() {
      this.componentDidUpdate(this.props);
    }
    componentDidUpdate(i) {
      const o = this.ref.current;
      al(o, this.props, i);
    }
    render() {
      const i = this.props, { children: o, forwardedRef: a, style: s, className: c, ref: u } = i, d = Vt(i, ["children", "forwardedRef", "style", "className", "ref"]), m = Object.keys(d).reduce((_, E) => {
        if (E.indexOf("on") === 0 && E[2] === E[2].toUpperCase()) {
          const se = E.substring(2).toLowerCase();
          Io(se) && (_[E] = d[E]);
        } else ["string", "boolean", "number"].includes(typeof d[E]) && (_[Mo(E)] = d[E]);
        return _;
      }, {}), v = Object.assign(Object.assign({}, m), { ref: this.stableMergedRefs, style: s });
      if (this.props.routerLink && !this.props.href && (v.href = this.props.routerLink), v.onClick) {
        const _ = v.onClick;
        v.onClick = (E) => {
          _(E), E.defaultPrevented || this.handleClick(E);
        };
      } else
        v.onClick = this.handleClick;
      return xs(e, v, o);
    }
    static get displayName() {
      return n;
    }
    static get contextType() {
      return cn;
    }
  };
  return sr(r, n);
}, vb = /* @__PURE__ */ gf("ion-card", Ed);
U.createContext({
  addOverlay: () => {
  },
  removeOverlay: () => {
  }
});
const bf = /* @__PURE__ */ kn("ion-tab-button", void 0, void 0, Bd), vf = /* @__PURE__ */ kn("ion-tab-bar", void 0, void 0, Nd), vo = /* @__PURE__ */ kn("ion-router-outlet", void 0, void 0, $d), yf = /* @__PURE__ */ kn("ion-icon", void 0, void 0, sf), sl = U.createContext({
  registerIonPage: () => {
  },
  isInOutlet: () => !1
});
class ll extends U.PureComponent {
  constructor(t) {
    super(t), this.ionPageElementRef = U.createRef(), this.stableMergedRefs = Po(this.ionPageElementRef, this.props.forwardedRef), this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this), this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this), this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this), this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
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
    const t = this.props, { className: n, children: r, routeInfo: i, forwardedRef: o } = t, a = Vt(t, ["className", "children", "routeInfo", "forwardedRef"]);
    return U.createElement($o.Consumer, null, (s) => (this.ionLifeCycleContext = s, U.createElement("div", Object.assign({ className: n ? `${n} ion-page` : "ion-page", ref: this.stableMergedRefs }, a), r)));
  }
  static get contextType() {
    return sl;
  }
}
class wf extends U.Component {
  constructor(t) {
    super(t);
  }
  render() {
    const t = this.props, { className: n, children: r, forwardedRef: i } = t, o = Vt(t, ["className", "children", "forwardedRef"]);
    return this.context.hasIonicRouter() ? U.createElement(ll, Object.assign({ className: n ? `${n}` : "", routeInfo: this.context.routeInfo, forwardedRef: i }, o), r) : U.createElement("div", Object.assign({ className: n ? `ion-page ${n}` : "ion-page", ref: i }, o), r);
  }
  static get displayName() {
    return "IonPage";
  }
  static get contextType() {
    return cn;
  }
}
sr(wf, "IonPage");
const Ia = { main: 0 }, _f = (e = "main") => {
  var t;
  const n = ((t = Ia[e]) !== null && t !== void 0 ? t : 0) + 1;
  return Ia[e] = n, n.toString();
}, kf = (e, t) => {
  const n = /* @__PURE__ */ new WeakMap(), r = `react-delegate-${_f()}`;
  let i = 0;
  return {
    attachViewToDom: async (s, c, u, d) => {
      const m = document.createElement("div");
      d && m.classList.add(...d), s.appendChild(m);
      const v = c(u), _ = `${r}-${i++}`, E = fc(v, m, _);
      return n.set(m, E), e(E), Promise.resolve(m);
    },
    removeViewFromDom: (s, c) => {
      const u = n.get(c);
      return u && t(u), c.remove(), Promise.resolve();
    }
  };
}, xf = kn("ion-nav", void 0, void 0, md), Cf = (e) => {
  var { children: t, forwardedRef: n } = e, r = Vt(e, ["children", "forwardedRef"]);
  const [i, o] = uc([]), a = (u) => o((d) => [...d, u]), s = (u) => o((d) => d.filter((m) => m !== u)), c = dc(() => kf(a, s), []);
  return U.createElement(xf, Object.assign({ delegate: c, ref: n }, r), i);
};
sr(Cf, "IonNav");
const Sf = U.createContext({
  activeTab: void 0,
  selectTab: () => !1,
  hasRouterOutlet: !1,
  tabBarProps: { ref: U.createRef() }
}), Ef = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Of extends U.Component {
  constructor(t) {
    super(t), this.outletIsReady = !1, this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this), this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this), this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this), this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
  }
  componentDidMount() {
    this.ionRouterOutlet && (this.outletIsReady || Ws(this.ionRouterOutlet, () => {
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
    const t = this.props, { StackManager: n, children: r, routeInfo: i } = t, o = Vt(t, ["StackManager", "children", "routeInfo"]);
    return U.createElement($o.Consumer, null, (a) => (this.ionLifeCycleContext = a, U.createElement(
      n,
      { routeInfo: i },
      U.createElement(vo, Object.assign({ setRef: (s) => this.ionRouterOutlet = s }, o), r)
    )));
  }
  static get contextType() {
    return sl;
  }
}
class Tf extends U.Component {
  constructor(t) {
    super(t);
  }
  render() {
    const t = this.context.getStackManager(), n = this.props, { children: r, forwardedRef: i } = n, o = Vt(n, ["children", "forwardedRef"]);
    return this.context.hasIonicRouter() ? o.ionPage ? U.createElement(Of, Object.assign({ StackManager: t, routeInfo: this.context.routeInfo }, o), r) : U.createElement(
      t,
      { routeInfo: this.context.routeInfo },
      U.createElement(vo, Object.assign({}, o, { forwardedRef: i }), r)
    ) : U.createElement(vo, Object.assign({ ref: i }, this.props), this.props.children);
  }
  static get contextType() {
    return cn;
  }
}
sr(Tf, "IonRouterOutlet");
class Rf extends Ef {
  constructor() {
    super();
  }
}
typeof window < "u" && window.customElements && (window.customElements.get("ion-tabs") || window.customElements.define("ion-tabs", Rf));
const Xi = class extends U.Component {
  constructor(e) {
    super(e), this.handleIonTabButtonClick = this.handleIonTabButtonClick.bind(this);
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
    const e = this.props, t = Vt(e, ["onClick"]);
    return U.createElement(bf, Object.assign({ onIonTabButtonClick: this.handleIonTabButtonClick }, t));
  }
  static get displayName() {
    return "IonTabButton";
  }
};
class Df extends U.PureComponent {
  constructor(t) {
    super(t), this.setActiveTabOnContext = (r) => {
    };
    const n = {};
    U.Children.forEach(t.children, (r) => {
      var i, o, a, s;
      r != null && typeof r == "object" && r.props && (r.type === Xi || r.type.isTabButton) && (n[r.props.tab] = {
        originalHref: r.props.href,
        currentHref: r.props.href,
        originalRouteOptions: r.props.href === ((i = t.routeInfo) === null || i === void 0 ? void 0 : i.pathname) ? (o = t.routeInfo) === null || o === void 0 ? void 0 : o.routeOptions : void 0,
        currentRouteOptions: r.props.href === ((a = t.routeInfo) === null || a === void 0 ? void 0 : a.pathname) ? (s = t.routeInfo) === null || s === void 0 ? void 0 : s.routeOptions : void 0
      });
    }), this.state = {
      tabs: n
    }, this.onTabButtonClick = this.onTabButtonClick.bind(this), this.renderTabButton = this.renderTabButton.bind(this), this.setActiveTabOnContext = this.setActiveTabOnContext.bind(this), this.selectTab = this.selectTab.bind(this);
  }
  componentDidMount() {
    const t = this.state.tabs, r = Object.keys(t).find((i) => {
      const o = t[i].originalHref;
      return this.props.routeInfo.pathname.startsWith(o);
    });
    r && this.setState({
      activeTab: r
    });
  }
  componentDidUpdate() {
    this.state.activeTab && this.setActiveTabOnContext(this.state.activeTab);
  }
  selectTab(t) {
    const n = this.state.tabs[t];
    return n ? (this.onTabButtonClick(new CustomEvent("ionTabButtonClick", {
      detail: {
        href: n.currentHref,
        tab: t,
        selected: t === this.state.activeTab,
        routeOptions: void 0
      }
    })), !0) : !1;
  }
  static getDerivedStateFromProps(t, n) {
    var r, i, o;
    const a = Object.assign({}, n.tabs), c = Object.keys(n.tabs).find((d) => {
      const m = n.tabs[d].originalHref;
      return t.routeInfo.pathname.startsWith(m);
    });
    U.Children.forEach(t.children, (d) => {
      if (d != null && typeof d == "object" && d.props && (d.type === Xi || d.type.isTabButton)) {
        const m = a[d.props.tab];
        (!m || m.originalHref !== d.props.href) && (a[d.props.tab] = {
          originalHref: d.props.href,
          currentHref: d.props.href,
          originalRouteOptions: d.props.routeOptions,
          currentRouteOptions: d.props.routeOptions
        });
      }
    });
    const { activeTab: u } = n;
    if (c && u) {
      const d = n.tabs[u].currentHref, m = n.tabs[u].currentRouteOptions;
      (c !== u || d !== ((r = t.routeInfo) === null || r === void 0 ? void 0 : r.pathname) || m !== ((i = t.routeInfo) === null || i === void 0 ? void 0 : i.routeOptions)) && (a[c] = {
        originalHref: a[c].originalHref,
        currentHref: t.routeInfo.pathname + (t.routeInfo.search || ""),
        originalRouteOptions: a[c].originalRouteOptions,
        currentRouteOptions: (o = t.routeInfo) === null || o === void 0 ? void 0 : o.routeOptions
      }, t.routeInfo.routeAction === "pop" && c !== u && (a[u] = {
        originalHref: a[u].originalHref,
        currentHref: a[u].originalHref,
        originalRouteOptions: a[u].originalRouteOptions,
        currentRouteOptions: a[u].currentRouteOptions
      }));
    }
    return c && t.onSetCurrentTab(c, t.routeInfo), {
      activeTab: c,
      tabs: a
    };
  }
  onTabButtonClick(t, n) {
    var r;
    const i = this.state.tabs[t.detail.tab], o = i.originalHref, a = (r = this.props.tabsContext) === null || r === void 0 ? void 0 : r.hasRouterOutlet, s = a ? t.detail.href : "", { activeTab: c } = this.state;
    n && n(t), c === t.detail.tab ? o !== s && this.context.resetTab(t.detail.tab, o, i.originalRouteOptions) : (this.props.onIonTabsWillChange && this.props.onIonTabsWillChange(new CustomEvent("ionTabWillChange", { detail: { tab: t.detail.tab } })), this.props.onIonTabsDidChange && this.props.onIonTabsDidChange(new CustomEvent("ionTabDidChange", { detail: { tab: t.detail.tab } })), a && (this.setActiveTabOnContext(t.detail.tab), this.context.changeTab(t.detail.tab, s, t.detail.routeOptions)));
  }
  renderTabButton(t) {
    return (n) => {
      var r, i;
      if (n != null && n.props && (n.type === Xi || n.type.isTabButton)) {
        const o = n.props.tab === t ? (r = this.props.routeInfo) === null || r === void 0 ? void 0 : r.pathname : this.state.tabs[n.props.tab].currentHref, a = n.props.tab === t ? (i = this.props.routeInfo) === null || i === void 0 ? void 0 : i.routeOptions : this.state.tabs[n.props.tab].currentRouteOptions;
        return U.cloneElement(n, {
          href: o,
          routeOptions: a,
          onClick: (s) => this.onTabButtonClick(s, n.props.onClick)
        });
      }
      return null;
    };
  }
  render() {
    const { activeTab: t } = this.state;
    return U.createElement(vf, Object.assign({}, this.props, { selectedTab: t }), U.Children.map(this.props.children, this.renderTabButton(t)));
  }
  static get contextType() {
    return cn;
  }
}
const $f = U.memo((e) => {
  var { forwardedRef: t } = e, n = Vt(e, ["forwardedRef"]);
  const r = ua(cn), i = ua(Sf), o = t || i.tabBarProps.ref, a = Object.assign(Object.assign({}, i.tabBarProps), { ref: o });
  return U.createElement(Df, Object.assign({ ref: o }, n, {
    routeInfo: n.routeInfo || r.routeInfo || { pathname: window.location.pathname },
    onSetCurrentTab: r.setCurrentTab,
    /**
     * Tab bar can be used as a standalone component,
     * so it cannot be modified directly through
     * IonTabs. Instead, props will be passed through
     * the context.
     */
    tabsContext: Object.assign(Object.assign({}, i), { tabBarProps: a })
  }), n.children);
});
sr($f, "IonTabBar");
class Mf extends U.PureComponent {
  constructor(t) {
    super(t), this.props.name && console.warn('In Ionic React, you import icons from "ionicons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.');
  }
  render() {
    var t, n;
    const r = this.props, { icon: i, ios: o, md: a, mode: s } = r, c = Vt(r, ["icon", "ios", "md", "mode"]);
    let u;
    const d = mf(), m = s || (d == null ? void 0 : d.get("mode"));
    return o || a ? m === "ios" ? u = (t = o ?? a) !== null && t !== void 0 ? t : i : u = (n = a ?? o) !== null && n !== void 0 ? n : i : u = i, U.createElement(yf, Object.assign({ ref: this.props.forwardedRef, icon: u }, c), this.props.children);
  }
  static get contextType() {
    return cn;
  }
}
sr(Mf, "IonIcon");
class cl extends U.PureComponent {
  render() {
    const t = this.context.getIonRoute();
    return !this.context.hasIonicRouter() || !cl ? (console.error("You either do not have an Ionic Router package, or your router does not support using <IonRoute>"), null) : U.createElement(t, Object.assign({}, this.props));
  }
  static get contextType() {
    return cn;
  }
}
class ul extends U.PureComponent {
  render() {
    const t = this.context.getIonRedirect();
    return !this.context.hasIonicRouter() || !ul ? (console.error("You either do not have an Ionic Router package, or your router does not support using <IonRedirect>"), null) : U.createElement(t, Object.assign({}, this.props));
  }
  static get contextType() {
    return cn;
  }
}
const If = U.createContext({
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
class yb extends U.PureComponent {
  constructor(t) {
    super(t), this.nodes = /* @__PURE__ */ new Map(), this.animation = mu(t.id);
  }
  setupAnimation(t) {
    const n = this.animation;
    this.nodes.size > 0 && n.addElement(Array.from(this.nodes.values())), Pa(n, t), La(n, t);
  }
  componentDidMount() {
    const t = this.props;
    this.setupAnimation(t);
  }
  componentDidUpdate(t) {
    const n = this.animation, r = this.props;
    Pa(n, r, t), Pf(n, r, t), La(n, r, t);
  }
  render() {
    const { children: t } = this.props;
    return U.createElement(U.Fragment, null, U.Children.map(t, (n, r) => U.cloneElement(n, { ref: (i) => this.nodes.set(r, i) })));
  }
}
const Pa = (e, t = {}, n = {}) => {
  const r = [
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
  for (const c in t)
    // eslint-disable-next-line no-prototype-builtins
    t.hasOwnProperty(c) && !r.includes(c) && t[c] !== n[c] && e[c](t[c]);
  const i = t.from;
  i && i !== n.from && (Array.isArray(i) ? i : [i]).forEach((u) => e.from(u.property, u.value));
  const o = t.to;
  o && o !== n.to && (Array.isArray(o) ? o : [o]).forEach((u) => e.to(u.property, u.value));
  const a = t.fromTo;
  a && a !== n.fromTo && (Array.isArray(a) ? a : [a]).forEach((u) => e.fromTo(u.property, u.fromValue, u.toValue));
  const s = t.onFinish;
  s && s !== n.onFinish && (Array.isArray(s) ? s : [s]).forEach((u) => e.onFinish(u.callback, u.opts));
}, Pf = (e, t = {}, n = {}) => {
  var r, i, o, a, s;
  const { progressStart: c, progressStep: u, progressEnd: d } = t;
  c && (((r = n.progressStart) === null || r === void 0 ? void 0 : r.forceLinearEasing) !== (c == null ? void 0 : c.forceLinearEasing) || ((i = n.progressStart) === null || i === void 0 ? void 0 : i.step) !== (c == null ? void 0 : c.step)) && e.progressStart(c.forceLinearEasing, c.step), u && ((o = n.progressStep) === null || o === void 0 ? void 0 : o.step) !== (u == null ? void 0 : u.step) && e.progressStep(u.step), d && (((a = n.progressEnd) === null || a === void 0 ? void 0 : a.playTo) !== (d == null ? void 0 : d.playTo) || ((s = n.progressEnd) === null || s === void 0 ? void 0 : s.step) !== (d == null ? void 0 : d.step) || (n == null ? void 0 : n.dur) !== (d == null ? void 0 : d.dur)) && e.progressEnd(d.playTo, d.step, d.dur);
}, La = (e, t = {}, n = {}) => {
  !n.play && t.play && e.play(), !n.pause && t.pause && e.pause(), !n.stop && t.stop && e.stop(), !n.destroy && t.destroy && e.destroy();
};
class wb extends U.Component {
  constructor(t) {
    super(t), this.ionLifeCycleContext = new lf(), this._isMounted = !1, this.ionLifeCycleContext.onComponentCanBeDestroyed(() => {
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
    const { show: t } = this.state;
    return U.createElement($o.Provider, { value: this.ionLifeCycleContext }, t && this.props.children);
  }
}
class _b extends U.PureComponent {
  constructor(t) {
    super(t), this.ionRouterContextValue = {
      push: (n, r, i, o, a) => {
        this.navigate(n, r, i, a, o);
      },
      back: (n) => {
        this.goBack(void 0, n);
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
  handleHardwareBackButton(t) {
    t.detail.register(0, (n) => {
      this.nativeGoBack(), n();
    });
  }
  goBack(t, n) {
    this.props.onNavigateBack(t, n);
  }
  nativeGoBack() {
    this.props.onNativeBack();
  }
  navigate(t, n = "forward", r = "push", i, o, a) {
    this.props.onNavigate(t, r, n, i, o, a);
  }
  getPageManager() {
    return ll;
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
    return U.createElement(
      cn.Provider,
      { value: Object.assign(Object.assign({}, this.state), { routeInfo: this.props.routeInfo }) },
      U.createElement(If.Provider, { value: Object.assign(Object.assign({}, this.ionRouterContextValue), { routeInfo: this.props.routeInfo }) }, this.props.children)
    );
  }
}
var Qi, Aa;
function Lf() {
  return Aa || (Aa = 1, Qi = function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = { i: r, l: !1, exports: {} };
      return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }
    return n.m = e, n.c = t, n.d = function(r, i, o) {
      n.o(r, i) || Object.defineProperty(r, i, { enumerable: !0, get: o });
    }, n.r = function(r) {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
    }, n.t = function(r, i) {
      if (1 & i && (r = n(r)), 8 & i || 4 & i && typeof r == "object" && r && r.__esModule) return r;
      var o = /* @__PURE__ */ Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: r }), 2 & i && typeof r != "string") for (var a in r) n.d(o, a, (function(s) {
        return r[s];
      }).bind(null, a));
      return o;
    }, n.n = function(r) {
      var i = r && r.__esModule ? function() {
        return r.default;
      } : function() {
        return r;
      };
      return n.d(i, "a", i), i;
    }, n.o = function(r, i) {
      return Object.prototype.hasOwnProperty.call(r, i);
    }, n.p = "", n(n.s = 9);
  }([function(e, t) {
    e.exports = U;
  }, function(e, t, n) {
    var r;
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    (function() {
      var i = {}.hasOwnProperty;
      function o() {
        for (var a = [], s = 0; s < arguments.length; s++) {
          var c = arguments[s];
          if (c) {
            var u = typeof c;
            if (u === "string" || u === "number") a.push(c);
            else if (Array.isArray(c) && c.length) {
              var d = o.apply(null, c);
              d && a.push(d);
            } else if (u === "object") for (var m in c) i.call(c, m) && c[m] && a.push(m);
          }
        }
        return a.join(" ");
      }
      e.exports ? (o.default = o, e.exports = o) : (r = (function() {
        return o;
      }).apply(t, [])) === void 0 || (e.exports = r);
    })();
  }, function(e, t, n) {
    (function(r) {
      var i = /^\s+|\s+$/g, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, s = /^0o[0-7]+$/i, c = parseInt, u = typeof r == "object" && r && r.Object === Object && r, d = typeof self == "object" && self && self.Object === Object && self, m = u || d || Function("return this")(), v = Object.prototype.toString, _ = m.Symbol, E = _ ? _.prototype : void 0, se = E ? E.toString : void 0;
      function x(B) {
        if (typeof B == "string") return B;
        if (S(B)) return se ? se.call(B) : "";
        var W = B + "";
        return W == "0" && 1 / B == -1 / 0 ? "-0" : W;
      }
      function re(B) {
        var W = typeof B;
        return !!B && (W == "object" || W == "function");
      }
      function S(B) {
        return typeof B == "symbol" || /* @__PURE__ */ function(W) {
          return !!W && typeof W == "object";
        }(B) && v.call(B) == "[object Symbol]";
      }
      function Q(B) {
        return B ? (B = function(W) {
          if (typeof W == "number") return W;
          if (S(W)) return NaN;
          if (re(W)) {
            var he = typeof W.valueOf == "function" ? W.valueOf() : W;
            W = re(he) ? he + "" : he;
          }
          if (typeof W != "string") return W === 0 ? W : +W;
          W = W.replace(i, "");
          var Se = a.test(W);
          return Se || s.test(W) ? c(W.slice(2), Se ? 2 : 8) : o.test(W) ? NaN : +W;
        }(B)) === 1 / 0 || B === -1 / 0 ? 17976931348623157e292 * (B < 0 ? -1 : 1) : B == B ? B : 0 : B === 0 ? B : 0;
      }
      e.exports = function(B, W, he) {
        var Se, de, V, ge;
        return B = (Se = B) == null ? "" : x(Se), de = function(Je) {
          var Fe = Q(Je), Ee = Fe % 1;
          return Fe == Fe ? Ee ? Fe - Ee : Fe : 0;
        }(he), V = 0, ge = B.length, de == de && (ge !== void 0 && (de = de <= ge ? de : ge), V !== void 0 && (de = de >= V ? de : V)), he = de, W = x(W), B.slice(he, he + W.length) == W;
      };
    }).call(this, n(3));
  }, function(e, t) {
    var n;
    n = /* @__PURE__ */ function() {
      return this;
    }();
    try {
      n = n || new Function("return this")();
    } catch {
      typeof window == "object" && (n = window);
    }
    e.exports = n;
  }, function(e, t, n) {
    (function(r) {
      var i = /^\[object .+?Constructor\]$/, o = typeof r == "object" && r && r.Object === Object && r, a = typeof self == "object" && self && self.Object === Object && self, s = o || a || Function("return this")(), c, u = Array.prototype, d = Function.prototype, m = Object.prototype, v = s["__core-js_shared__"], _ = (c = /[^.]+$/.exec(v && v.keys && v.keys.IE_PROTO || "")) ? "Symbol(src)_1." + c : "", E = d.toString, se = m.hasOwnProperty, x = m.toString, re = RegExp("^" + E.call(se).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), S = u.splice, Q = Je(s, "Map"), B = Je(Object, "create");
      function W(O) {
        var I = -1, P = O ? O.length : 0;
        for (this.clear(); ++I < P; ) {
          var X = O[I];
          this.set(X[0], X[1]);
        }
      }
      function he(O) {
        var I = -1, P = O ? O.length : 0;
        for (this.clear(); ++I < P; ) {
          var X = O[I];
          this.set(X[0], X[1]);
        }
      }
      function Se(O) {
        var I = -1, P = O ? O.length : 0;
        for (this.clear(); ++I < P; ) {
          var X = O[I];
          this.set(X[0], X[1]);
        }
      }
      function de(O, I) {
        for (var P, X, Me = O.length; Me--; ) if ((P = O[Me][0]) === (X = I) || P != P && X != X) return Me;
        return -1;
      }
      function V(O) {
        return !(!Ee(O) || (I = O, _ && _ in I)) && (function(P) {
          var X = Ee(P) ? x.call(P) : "";
          return X == "[object Function]" || X == "[object GeneratorFunction]";
        }(O) || function(P) {
          var X = !1;
          if (P != null && typeof P.toString != "function") try {
            X = !!(P + "");
          } catch {
          }
          return X;
        }(O) ? re : i).test(function(P) {
          if (P != null) {
            try {
              return E.call(P);
            } catch {
            }
            try {
              return P + "";
            } catch {
            }
          }
          return "";
        }(O));
        var I;
      }
      function ge(O, I) {
        var P, X, Me = O.__data__;
        return ((X = typeof (P = I)) == "string" || X == "number" || X == "symbol" || X == "boolean" ? P !== "__proto__" : P === null) ? Me[typeof I == "string" ? "string" : "hash"] : Me.map;
      }
      function Je(O, I) {
        var P = function(X, Me) {
          return X == null ? void 0 : X[Me];
        }(O, I);
        return V(P) ? P : void 0;
      }
      function Fe(O, I) {
        if (typeof O != "function" || I && typeof I != "function") throw new TypeError("Expected a function");
        var P = function() {
          var X = arguments, Me = I ? I.apply(this, X) : X[0], nt = P.cache;
          if (nt.has(Me)) return nt.get(Me);
          var j = O.apply(this, X);
          return P.cache = nt.set(Me, j), j;
        };
        return P.cache = new (Fe.Cache || Se)(), P;
      }
      function Ee(O) {
        var I = typeof O;
        return !!O && (I == "object" || I == "function");
      }
      W.prototype.clear = function() {
        this.__data__ = B ? B(null) : {};
      }, W.prototype.delete = function(O) {
        return this.has(O) && delete this.__data__[O];
      }, W.prototype.get = function(O) {
        var I = this.__data__;
        if (B) {
          var P = I[O];
          return P === "__lodash_hash_undefined__" ? void 0 : P;
        }
        return se.call(I, O) ? I[O] : void 0;
      }, W.prototype.has = function(O) {
        var I = this.__data__;
        return B ? I[O] !== void 0 : se.call(I, O);
      }, W.prototype.set = function(O, I) {
        return this.__data__[O] = B && I === void 0 ? "__lodash_hash_undefined__" : I, this;
      }, he.prototype.clear = function() {
        this.__data__ = [];
      }, he.prototype.delete = function(O) {
        var I = this.__data__, P = de(I, O);
        return !(P < 0) && (P == I.length - 1 ? I.pop() : S.call(I, P, 1), !0);
      }, he.prototype.get = function(O) {
        var I = this.__data__, P = de(I, O);
        return P < 0 ? void 0 : I[P][1];
      }, he.prototype.has = function(O) {
        return de(this.__data__, O) > -1;
      }, he.prototype.set = function(O, I) {
        var P = this.__data__, X = de(P, O);
        return X < 0 ? P.push([O, I]) : P[X][1] = I, this;
      }, Se.prototype.clear = function() {
        this.__data__ = { hash: new W(), map: new (Q || he)(), string: new W() };
      }, Se.prototype.delete = function(O) {
        return ge(this, O).delete(O);
      }, Se.prototype.get = function(O) {
        return ge(this, O).get(O);
      }, Se.prototype.has = function(O) {
        return ge(this, O).has(O);
      }, Se.prototype.set = function(O, I) {
        return ge(this, O).set(O, I), this;
      }, Fe.Cache = Se, e.exports = Fe;
    }).call(this, n(3));
  }, function(e, t, n) {
    (function(r) {
      var i = /^\s+|\s+$/g, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, s = /^0o[0-7]+$/i, c = parseInt, u = typeof r == "object" && r && r.Object === Object && r, d = typeof self == "object" && self && self.Object === Object && self, m = u || d || Function("return this")(), v = Object.prototype.toString, _ = Math.max, E = Math.min, se = function() {
        return m.Date.now();
      };
      function x(S) {
        var Q = typeof S;
        return !!S && (Q == "object" || Q == "function");
      }
      function re(S) {
        if (typeof S == "number") return S;
        if (function(W) {
          return typeof W == "symbol" || /* @__PURE__ */ function(he) {
            return !!he && typeof he == "object";
          }(W) && v.call(W) == "[object Symbol]";
        }(S)) return NaN;
        if (x(S)) {
          var Q = typeof S.valueOf == "function" ? S.valueOf() : S;
          S = x(Q) ? Q + "" : Q;
        }
        if (typeof S != "string") return S === 0 ? S : +S;
        S = S.replace(i, "");
        var B = a.test(S);
        return B || s.test(S) ? c(S.slice(2), B ? 2 : 8) : o.test(S) ? NaN : +S;
      }
      e.exports = function(S, Q, B) {
        var W, he, Se, de, V, ge, Je = 0, Fe = !1, Ee = !1, O = !0;
        if (typeof S != "function") throw new TypeError("Expected a function");
        function I(T) {
          var z = W, ie = he;
          return W = he = void 0, Je = T, de = S.apply(ie, z);
        }
        function P(T) {
          return Je = T, V = setTimeout(Me, Q), Fe ? I(T) : de;
        }
        function X(T) {
          var z = T - ge;
          return ge === void 0 || z >= Q || z < 0 || Ee && T - Je >= Se;
        }
        function Me() {
          var T = se();
          if (X(T)) return nt(T);
          V = setTimeout(Me, function(z) {
            var ie = Q - (z - ge);
            return Ee ? E(ie, Se - (z - Je)) : ie;
          }(T));
        }
        function nt(T) {
          return V = void 0, O && W ? I(T) : (W = he = void 0, de);
        }
        function j() {
          var T = se(), z = X(T);
          if (W = arguments, he = this, ge = T, z) {
            if (V === void 0) return P(ge);
            if (Ee) return V = setTimeout(Me, Q), I(ge);
          }
          return V === void 0 && (V = setTimeout(Me, Q)), de;
        }
        return Q = re(Q) || 0, x(B) && (Fe = !!B.leading, Se = (Ee = "maxWait" in B) ? _(re(B.maxWait) || 0, Q) : Se, O = "trailing" in B ? !!B.trailing : O), j.cancel = function() {
          V !== void 0 && clearTimeout(V), Je = 0, W = ge = he = V = void 0;
        }, j.flush = function() {
          return V === void 0 ? de : nt(se());
        }, j;
      };
    }).call(this, n(3));
  }, function(e, t, n) {
    (function(r, i) {
      var o = "[object Arguments]", a = "[object Map]", s = "[object Object]", c = "[object Set]", u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, d = /^\w*$/, m = /^\./, v = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _ = /\\(\\)?/g, E = /^\[object .+?Constructor\]$/, se = /^(?:0|[1-9]\d*)$/, x = {};
      x["[object Float32Array]"] = x["[object Float64Array]"] = x["[object Int8Array]"] = x["[object Int16Array]"] = x["[object Int32Array]"] = x["[object Uint8Array]"] = x["[object Uint8ClampedArray]"] = x["[object Uint16Array]"] = x["[object Uint32Array]"] = !0, x[o] = x["[object Array]"] = x["[object ArrayBuffer]"] = x["[object Boolean]"] = x["[object DataView]"] = x["[object Date]"] = x["[object Error]"] = x["[object Function]"] = x[a] = x["[object Number]"] = x[s] = x["[object RegExp]"] = x[c] = x["[object String]"] = x["[object WeakMap]"] = !1;
      var re = typeof r == "object" && r && r.Object === Object && r, S = typeof self == "object" && self && self.Object === Object && self, Q = re || S || Function("return this")(), B = t && !t.nodeType && t, W = B && typeof i == "object" && i && !i.nodeType && i, he = W && W.exports === B && re.process, Se = function() {
        try {
          return he && he.binding("util");
        } catch {
        }
      }(), de = Se && Se.isTypedArray;
      function V(l, f, g, y) {
        var $ = -1, D = l ? l.length : 0;
        for (y && D && (g = l[++$]); ++$ < D; ) g = f(g, l[$], $, l);
        return g;
      }
      function ge(l, f) {
        for (var g = -1, y = l ? l.length : 0; ++g < y; ) if (f(l[g], g, l)) return !0;
        return !1;
      }
      function Je(l, f, g, y, $) {
        return $(l, function(D, Z, Ae) {
          g = y ? (y = !1, D) : f(g, D, Z, Ae);
        }), g;
      }
      function Fe(l) {
        var f = !1;
        if (l != null && typeof l.toString != "function") try {
          f = !!(l + "");
        } catch {
        }
        return f;
      }
      function Ee(l) {
        var f = -1, g = Array(l.size);
        return l.forEach(function(y, $) {
          g[++f] = [$, y];
        }), g;
      }
      function O(l) {
        var f = -1, g = Array(l.size);
        return l.forEach(function(y) {
          g[++f] = y;
        }), g;
      }
      var I, P, X, Me = Array.prototype, nt = Function.prototype, j = Object.prototype, T = Q["__core-js_shared__"], z = (I = /[^.]+$/.exec(T && T.keys && T.keys.IE_PROTO || "")) ? "Symbol(src)_1." + I : "", ie = nt.toString, R = j.hasOwnProperty, h = j.toString, pe = RegExp("^" + ie.call(R).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), le = Q.Symbol, oe = Q.Uint8Array, Te = j.propertyIsEnumerable, we = Me.splice, Ie = (P = Object.keys, X = Object, function(l) {
        return P(X(l));
      }), Re = Lt(Q, "DataView"), ze = Lt(Q, "Map"), De = Lt(Q, "Promise"), b = Lt(Q, "Set"), w = Lt(Q, "WeakMap"), A = Lt(Object, "create"), ee = Ge(Re), q = Ge(ze), te = Ge(De), ne = Ge(b), be = Ge(w), N = le ? le.prototype : void 0, G = N ? N.valueOf : void 0, ae = N ? N.toString : void 0;
      function Y(l) {
        var f = -1, g = l ? l.length : 0;
        for (this.clear(); ++f < g; ) {
          var y = l[f];
          this.set(y[0], y[1]);
        }
      }
      function H(l) {
        var f = -1, g = l ? l.length : 0;
        for (this.clear(); ++f < g; ) {
          var y = l[f];
          this.set(y[0], y[1]);
        }
      }
      function Oe(l) {
        var f = -1, g = l ? l.length : 0;
        for (this.clear(); ++f < g; ) {
          var y = l[f];
          this.set(y[0], y[1]);
        }
      }
      function Ke(l) {
        var f = -1, g = l ? l.length : 0;
        for (this.__data__ = new Oe(); ++f < g; ) this.add(l[f]);
      }
      function He(l) {
        this.__data__ = new H(l);
      }
      function qe(l, f) {
        var g = ht(l) || qn(l) ? function(Z, Ae) {
          for (var je = -1, Pe = Array(Z); ++je < Z; ) Pe[je] = Ae(je);
          return Pe;
        }(l.length, String) : [], y = g.length, $ = !!y;
        for (var D in l) !R.call(l, D) || $ && (D == "length" || Bn(D, y)) || g.push(D);
        return g;
      }
      function ot(l, f) {
        for (var g = l.length; g--; ) if (Un(l[g][0], f)) return g;
        return -1;
      }
      Y.prototype.clear = function() {
        this.__data__ = A ? A(null) : {};
      }, Y.prototype.delete = function(l) {
        return this.has(l) && delete this.__data__[l];
      }, Y.prototype.get = function(l) {
        var f = this.__data__;
        if (A) {
          var g = f[l];
          return g === "__lodash_hash_undefined__" ? void 0 : g;
        }
        return R.call(f, l) ? f[l] : void 0;
      }, Y.prototype.has = function(l) {
        var f = this.__data__;
        return A ? f[l] !== void 0 : R.call(f, l);
      }, Y.prototype.set = function(l, f) {
        return this.__data__[l] = A && f === void 0 ? "__lodash_hash_undefined__" : f, this;
      }, H.prototype.clear = function() {
        this.__data__ = [];
      }, H.prototype.delete = function(l) {
        var f = this.__data__, g = ot(f, l);
        return !(g < 0) && (g == f.length - 1 ? f.pop() : we.call(f, g, 1), !0);
      }, H.prototype.get = function(l) {
        var f = this.__data__, g = ot(f, l);
        return g < 0 ? void 0 : f[g][1];
      }, H.prototype.has = function(l) {
        return ot(this.__data__, l) > -1;
      }, H.prototype.set = function(l, f) {
        var g = this.__data__, y = ot(g, l);
        return y < 0 ? g.push([l, f]) : g[y][1] = f, this;
      }, Oe.prototype.clear = function() {
        this.__data__ = { hash: new Y(), map: new (ze || H)(), string: new Y() };
      }, Oe.prototype.delete = function(l) {
        return qt(this, l).delete(l);
      }, Oe.prototype.get = function(l) {
        return qt(this, l).get(l);
      }, Oe.prototype.has = function(l) {
        return qt(this, l).has(l);
      }, Oe.prototype.set = function(l, f) {
        return qt(this, l).set(l, f), this;
      }, Ke.prototype.add = Ke.prototype.push = function(l) {
        return this.__data__.set(l, "__lodash_hash_undefined__"), this;
      }, Ke.prototype.has = function(l) {
        return this.__data__.has(l);
      }, He.prototype.clear = function() {
        this.__data__ = new H();
      }, He.prototype.delete = function(l) {
        return this.__data__.delete(l);
      }, He.prototype.get = function(l) {
        return this.__data__.get(l);
      }, He.prototype.has = function(l) {
        return this.__data__.has(l);
      }, He.prototype.set = function(l, f) {
        var g = this.__data__;
        if (g instanceof H) {
          var y = g.__data__;
          if (!ze || y.length < 199) return y.push([l, f]), this;
          g = this.__data__ = new Oe(y);
        }
        return g.set(l, f), this;
      };
      var dt, Be = (dt = function(l, f) {
        return l && It(l, f, ce);
      }, function(l, f) {
        if (l == null) return l;
        if (!p(l)) return dt(l, f);
        for (var g = l.length, y = -1, $ = Object(l); ++y < g && f($[y], y, $) !== !1; ) ;
        return l;
      }), It = /* @__PURE__ */ function(l) {
        return function(f, g, y) {
          for (var $ = -1, D = Object(f), Z = y(f), Ae = Z.length; Ae--; ) {
            var je = Z[++$];
            if (g(D[je], je, D) === !1) break;
          }
          return f;
        };
      }();
      function Bt(l, f) {
        for (var g = 0, y = (f = yt(f, l) ? [f] : hn(f)).length; l != null && g < y; ) l = l[At(f[g++])];
        return g && g == y ? l : void 0;
      }
      function xn(l, f) {
        return l != null && f in Object(l);
      }
      function Ut(l, f, g, y, $) {
        return l === f || (l == null || f == null || !J(l) && !me(f) ? l != l && f != f : function(D, Z, Ae, je, Pe, ke) {
          var wt = ht(D), rt = ht(Z), Xe = "[object Array]", tt = "[object Array]";
          wt || (Xe = (Xe = ft(D)) == o ? s : Xe), rt || (tt = (tt = ft(Z)) == o ? s : tt);
          var Et = Xe == s && !Fe(D), Gn = tt == s && !Fe(Z), mn = Xe == tt;
          if (mn && !Et) return ke || (ke = new He()), wt || fe(D) ? pn(D, Z, Ae, je, Pe, ke) : function(Ne, $e, Vi, On, Jr, pt, Kt) {
            switch (Vi) {
              case "[object DataView]":
                if (Ne.byteLength != $e.byteLength || Ne.byteOffset != $e.byteOffset) return !1;
                Ne = Ne.buffer, $e = $e.buffer;
              case "[object ArrayBuffer]":
                return !(Ne.byteLength != $e.byteLength || !On(new oe(Ne), new oe($e)));
              case "[object Boolean]":
              case "[object Date]":
              case "[object Number]":
                return Un(+Ne, +$e);
              case "[object Error]":
                return Ne.name == $e.name && Ne.message == $e.message;
              case "[object RegExp]":
              case "[object String]":
                return Ne == $e + "";
              case a:
                var gn = Ee;
              case c:
                var dr = 2 & pt;
                if (gn || (gn = O), Ne.size != $e.size && !dr) return !1;
                var Xr = Kt.get(Ne);
                if (Xr) return Xr == $e;
                pt |= 1, Kt.set(Ne, $e);
                var Kn = pn(gn(Ne), gn($e), On, Jr, pt, Kt);
                return Kt.delete(Ne), Kn;
              case "[object Symbol]":
                if (G) return G.call(Ne) == G.call($e);
            }
            return !1;
          }(D, Z, Xe, Ae, je, Pe, ke);
          if (!(2 & Pe)) {
            var aa = Et && R.call(D, "__wrapped__"), sa = Gn && R.call(Z, "__wrapped__");
            if (aa || sa) {
              var lc = aa ? D.value() : D, cc = sa ? Z.value() : Z;
              return ke || (ke = new He()), Ae(lc, cc, je, Pe, ke);
            }
          }
          return mn ? (ke || (ke = new He()), function(Ne, $e, Vi, On, Jr, pt) {
            var Kt = 2 & Jr, gn = ce(Ne), dr = gn.length, Xr = ce($e).length;
            if (dr != Xr && !Kt) return !1;
            for (var Kn = dr; Kn--; ) {
              var bn = gn[Kn];
              if (!(Kt ? bn in $e : R.call($e, bn))) return !1;
            }
            var la = pt.get(Ne);
            if (la && pt.get($e)) return la == $e;
            var Qr = !0;
            pt.set(Ne, $e), pt.set($e, Ne);
            for (var zi = Kt; ++Kn < dr; ) {
              bn = gn[Kn];
              var ei = Ne[bn], ti = $e[bn];
              if (On) var ca = Kt ? On(ti, ei, bn, $e, Ne, pt) : On(ei, ti, bn, Ne, $e, pt);
              if (!(ca === void 0 ? ei === ti || Vi(ei, ti, On, Jr, pt) : ca)) {
                Qr = !1;
                break;
              }
              zi || (zi = bn == "constructor");
            }
            if (Qr && !zi) {
              var ni = Ne.constructor, ri = $e.constructor;
              ni == ri || !("constructor" in Ne) || !("constructor" in $e) || typeof ni == "function" && ni instanceof ni && typeof ri == "function" && ri instanceof ri || (Qr = !1);
            }
            return pt.delete(Ne), pt.delete($e), Qr;
          }(D, Z, Ae, je, Pe, ke)) : !1;
        }(l, f, Ut, g, y, $));
      }
      function St(l) {
        return !(!J(l) || function(f) {
          return !!z && z in f;
        }(l)) && (k(l) || Fe(l) ? pe : E).test(Ge(l));
      }
      function Hn(l) {
        return typeof l == "function" ? l : l == null ? et : typeof l == "object" ? ht(l) ? function(y, $) {
          return yt(y) && Cn($) ? Sn(At(y), $) : function(D) {
            var Z = function(Ae, je, Pe) {
              var ke = Ae == null ? void 0 : Bt(Ae, je);
              return ke === void 0 ? Pe : ke;
            }(D, y);
            return Z === void 0 && Z === $ ? function(Ae, je) {
              return Ae != null && function(Pe, ke, wt) {
                ke = yt(ke, Pe) ? [ke] : hn(ke);
                for (var rt, Xe = -1, tt = ke.length; ++Xe < tt; ) {
                  var Et = At(ke[Xe]);
                  if (!(rt = Pe != null && wt(Pe, Et))) break;
                  Pe = Pe[Et];
                }
                return rt || !!(tt = Pe ? Pe.length : 0) && M(tt) && Bn(Et, tt) && (ht(Pe) || qn(Pe));
              }(Ae, je, xn);
            }(D, y) : Ut($, Z, void 0, 3);
          };
        }(l[0], l[1]) : function(y) {
          var $ = function(D) {
            for (var Z = ce(D), Ae = Z.length; Ae--; ) {
              var je = Z[Ae], Pe = D[je];
              Z[Ae] = [je, Pe, Cn(Pe)];
            }
            return Z;
          }(y);
          return $.length == 1 && $[0][2] ? Sn($[0][0], $[0][1]) : function(D) {
            return D === y || function(Z, Ae, je, Pe) {
              var ke = je.length, wt = ke;
              if (Z == null) return !wt;
              for (Z = Object(Z); ke--; ) {
                var rt = je[ke];
                if (rt[2] ? rt[1] !== Z[rt[0]] : !(rt[0] in Z)) return !1;
              }
              for (; ++ke < wt; ) {
                var Xe = (rt = je[ke])[0], tt = Z[Xe], Et = rt[1];
                if (rt[2]) {
                  if (tt === void 0 && !(Xe in Z)) return !1;
                } else {
                  var Gn = new He(), mn;
                  if (!(mn === void 0 ? Ut(Et, tt, Pe, 3, Gn) : mn)) return !1;
                }
              }
              return !0;
            }(D, y, $);
          };
        }(l) : yt(f = l) ? (g = At(f), function(y) {
          return y == null ? void 0 : y[g];
        }) : /* @__PURE__ */ function(y) {
          return function($) {
            return Bt($, y);
          };
        }(f);
        var f, g;
      }
      function Pt(l) {
        if (g = (f = l) && f.constructor, y = typeof g == "function" && g.prototype || j, f !== y) return Ie(l);
        var f, g, y, $ = [];
        for (var D in Object(l)) R.call(l, D) && D != "constructor" && $.push(D);
        return $;
      }
      function hn(l) {
        return ht(l) ? l : Gt(l);
      }
      function pn(l, f, g, y, $, D) {
        var Z = 2 & $, Ae = l.length, je = f.length;
        if (Ae != je && !(Z && je > Ae)) return !1;
        var Pe = D.get(l);
        if (Pe && D.get(f)) return Pe == f;
        var ke = -1, wt = !0, rt = 1 & $ ? new Ke() : void 0;
        for (D.set(l, f), D.set(f, l); ++ke < Ae; ) {
          var Xe = l[ke], tt = f[ke];
          if (y) var Et = Z ? y(tt, Xe, ke, f, l, D) : y(Xe, tt, ke, l, f, D);
          if (Et !== void 0) {
            if (Et) continue;
            wt = !1;
            break;
          }
          if (rt) {
            if (!ge(f, function(Gn, mn) {
              if (!rt.has(mn) && (Xe === Gn || g(Xe, Gn, y, $, D))) return rt.add(mn);
            })) {
              wt = !1;
              break;
            }
          } else if (Xe !== tt && !g(Xe, tt, y, $, D)) {
            wt = !1;
            break;
          }
        }
        return D.delete(l), D.delete(f), wt;
      }
      function qt(l, f) {
        var g, y, $ = l.__data__;
        return ((y = typeof (g = f)) == "string" || y == "number" || y == "symbol" || y == "boolean" ? g !== "__proto__" : g === null) ? $[typeof f == "string" ? "string" : "hash"] : $.map;
      }
      function Lt(l, f) {
        var g = function(y, $) {
          return y == null ? void 0 : y[$];
        }(l, f);
        return St(g) ? g : void 0;
      }
      var ft = function(l) {
        return h.call(l);
      };
      function Bn(l, f) {
        return !!(f = f ?? 9007199254740991) && (typeof l == "number" || se.test(l)) && l > -1 && l % 1 == 0 && l < f;
      }
      function yt(l, f) {
        if (ht(l)) return !1;
        var g = typeof l;
        return !(g != "number" && g != "symbol" && g != "boolean" && l != null && !_e(l)) || d.test(l) || !u.test(l) || f != null && l in Object(f);
      }
      function Cn(l) {
        return l == l && !J(l);
      }
      function Sn(l, f) {
        return function(g) {
          return g != null && g[l] === f && (f !== void 0 || l in Object(g));
        };
      }
      (Re && ft(new Re(new ArrayBuffer(1))) != "[object DataView]" || ze && ft(new ze()) != a || De && ft(De.resolve()) != "[object Promise]" || b && ft(new b()) != c || w && ft(new w()) != "[object WeakMap]") && (ft = function(l) {
        var f = h.call(l), g = f == s ? l.constructor : void 0, y = g ? Ge(g) : void 0;
        if (y) switch (y) {
          case ee:
            return "[object DataView]";
          case q:
            return a;
          case te:
            return "[object Promise]";
          case ne:
            return c;
          case be:
            return "[object WeakMap]";
        }
        return f;
      });
      var Gt = En(function(l) {
        var f;
        l = (f = l) == null ? "" : function(y) {
          if (typeof y == "string") return y;
          if (_e(y)) return ae ? ae.call(y) : "";
          var $ = y + "";
          return $ == "0" && 1 / y == -1 / 0 ? "-0" : $;
        }(f);
        var g = [];
        return m.test(l) && g.push(""), l.replace(v, function(y, $, D, Z) {
          g.push(D ? Z.replace(_, "$1") : $ || y);
        }), g;
      });
      function At(l) {
        if (typeof l == "string" || _e(l)) return l;
        var f = l + "";
        return f == "0" && 1 / l == -1 / 0 ? "-0" : f;
      }
      function Ge(l) {
        if (l != null) {
          try {
            return ie.call(l);
          } catch {
          }
          try {
            return l + "";
          } catch {
          }
        }
        return "";
      }
      function En(l, f) {
        if (typeof l != "function" || f && typeof f != "function") throw new TypeError("Expected a function");
        var g = function() {
          var y = arguments, $ = f ? f.apply(this, y) : y[0], D = g.cache;
          if (D.has($)) return D.get($);
          var Z = l.apply(this, y);
          return g.cache = D.set($, Z), Z;
        };
        return g.cache = new (En.Cache || Oe)(), g;
      }
      function Un(l, f) {
        return l === f || l != l && f != f;
      }
      function qn(l) {
        return function(f) {
          return me(f) && p(f);
        }(l) && R.call(l, "callee") && (!Te.call(l, "callee") || h.call(l) == o);
      }
      En.Cache = Oe;
      var ht = Array.isArray;
      function p(l) {
        return l != null && M(l.length) && !k(l);
      }
      function k(l) {
        var f = J(l) ? h.call(l) : "";
        return f == "[object Function]" || f == "[object GeneratorFunction]";
      }
      function M(l) {
        return typeof l == "number" && l > -1 && l % 1 == 0 && l <= 9007199254740991;
      }
      function J(l) {
        var f = typeof l;
        return !!l && (f == "object" || f == "function");
      }
      function me(l) {
        return !!l && typeof l == "object";
      }
      function _e(l) {
        return typeof l == "symbol" || me(l) && h.call(l) == "[object Symbol]";
      }
      var fe = de ? /* @__PURE__ */ function(l) {
        return function(f) {
          return l(f);
        };
      }(de) : function(l) {
        return me(l) && M(l.length) && !!x[h.call(l)];
      };
      function ce(l) {
        return p(l) ? qe(l) : Pt(l);
      }
      function et(l) {
        return l;
      }
      i.exports = function(l, f, g) {
        var y = ht(l) ? V : Je, $ = arguments.length < 3;
        return y(l, Hn(f), g, $, Be);
      };
    }).call(this, n(3), n(7)(e));
  }, function(e, t) {
    e.exports = function(n) {
      return n.webpackPolyfill || (n.deprecate = function() {
      }, n.paths = [], n.children || (n.children = []), Object.defineProperty(n, "loaded", { enumerable: !0, get: function() {
        return n.l;
      } }), Object.defineProperty(n, "id", { enumerable: !0, get: function() {
        return n.i;
      } }), n.webpackPolyfill = 1), n;
    };
  }, function(e, t) {
    String.prototype.padEnd || (String.prototype.padEnd = function(n, r) {
      return n >>= 0, r = String(r !== void 0 ? r : " "), this.length > n ? String(this) : ((n -= this.length) > r.length && (r += r.repeat(n / r.length)), String(this) + r.slice(0, n));
    });
  }, function(e, t, n) {
    function r(j, T, z) {
      return T in j ? Object.defineProperty(j, T, { value: z, enumerable: !0, configurable: !0, writable: !0 }) : j[T] = z, j;
    }
    function i(j) {
      if (Symbol.iterator in Object(j) || Object.prototype.toString.call(j) === "[object Arguments]") return Array.from(j);
    }
    function o(j) {
      return function(T) {
        if (Array.isArray(T)) {
          for (var z = 0, ie = new Array(T.length); z < T.length; z++) ie[z] = T[z];
          return ie;
        }
      }(j) || i(j) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }
    function a(j) {
      if (Array.isArray(j)) return j;
    }
    function s() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
    function c(j, T) {
      if (!(j instanceof T)) throw new TypeError("Cannot call a class as a function");
    }
    function u(j, T) {
      for (var z = 0; z < T.length; z++) {
        var ie = T[z];
        ie.enumerable = ie.enumerable || !1, ie.configurable = !0, "value" in ie && (ie.writable = !0), Object.defineProperty(j, ie.key, ie);
      }
    }
    function d(j) {
      return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
        return typeof T;
      } : function(T) {
        return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
      })(j);
    }
    function m(j) {
      return (m = typeof Symbol == "function" && d(Symbol.iterator) === "symbol" ? function(T) {
        return d(T);
      } : function(T) {
        return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : d(T);
      })(j);
    }
    function v(j) {
      if (j === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return j;
    }
    function _(j) {
      return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(T) {
        return T.__proto__ || Object.getPrototypeOf(T);
      })(j);
    }
    function E(j, T) {
      return (E = Object.setPrototypeOf || function(z, ie) {
        return z.__proto__ = ie, z;
      })(j, T);
    }
    n.r(t);
    var se = n(0), x = n.n(se), re = n(5), S = n.n(re), Q = n(4), B = n.n(Q), W = n(6), he = n.n(W), Se = n(2), de = n.n(Se), V = n(1), ge = n.n(V);
    n(8);
    function Je(j, T) {
      return a(j) || function(z, ie) {
        var R = [], h = !0, pe = !1, le = void 0;
        try {
          for (var oe, Te = z[Symbol.iterator](); !(h = (oe = Te.next()).done) && (R.push(oe.value), !ie || R.length !== ie); h = !0) ;
        } catch (we) {
          pe = !0, le = we;
        } finally {
          try {
            h || Te.return == null || Te.return();
          } finally {
            if (pe) throw le;
          }
        }
        return R;
      }(j, T) || s();
    }
    var Fe = [["Afghanistan", ["asia"], "af", "93"], ["Albania", ["europe"], "al", "355"], ["Algeria", ["africa", "north-africa"], "dz", "213"], ["Andorra", ["europe"], "ad", "376"], ["Angola", ["africa"], "ao", "244"], ["Antigua and Barbuda", ["america", "carribean"], "ag", "1268"], ["Argentina", ["america", "south-america"], "ar", "54", "(..) ........", 0, ["11", "221", "223", "261", "264", "2652", "280", "2905", "291", "2920", "2966", "299", "341", "342", "343", "351", "376", "379", "381", "3833", "385", "387", "388"]], ["Armenia", ["asia", "ex-ussr"], "am", "374", ".. ......"], ["Aruba", ["america", "carribean"], "aw", "297"], ["Australia", ["oceania"], "au", "61", "(..) .... ....", 0, ["2", "3", "4", "7", "8", "02", "03", "04", "07", "08"]], ["Austria", ["europe", "eu-union"], "at", "43"], ["Azerbaijan", ["asia", "ex-ussr"], "az", "994", "(..) ... .. .."], ["Bahamas", ["america", "carribean"], "bs", "1242"], ["Bahrain", ["middle-east"], "bh", "973"], ["Bangladesh", ["asia"], "bd", "880"], ["Barbados", ["america", "carribean"], "bb", "1246"], ["Belarus", ["europe", "ex-ussr"], "by", "375", "(..) ... .. .."], ["Belgium", ["europe", "eu-union"], "be", "32", "... .. .. .."], ["Belize", ["america", "central-america"], "bz", "501"], ["Benin", ["africa"], "bj", "229"], ["Bhutan", ["asia"], "bt", "975"], ["Bolivia", ["america", "south-america"], "bo", "591"], ["Bosnia and Herzegovina", ["europe", "ex-yugos"], "ba", "387"], ["Botswana", ["africa"], "bw", "267"], ["Brazil", ["america", "south-america"], "br", "55", "(..) ........."], ["British Indian Ocean Territory", ["asia"], "io", "246"], ["Brunei", ["asia"], "bn", "673"], ["Bulgaria", ["europe", "eu-union"], "bg", "359"], ["Burkina Faso", ["africa"], "bf", "226"], ["Burundi", ["africa"], "bi", "257"], ["Cambodia", ["asia"], "kh", "855"], ["Cameroon", ["africa"], "cm", "237"], ["Canada", ["america", "north-america"], "ca", "1", "(...) ...-....", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", ["africa"], "cv", "238"], ["Caribbean Netherlands", ["america", "carribean"], "bq", "599", "", 1], ["Central African Republic", ["africa"], "cf", "236"], ["Chad", ["africa"], "td", "235"], ["Chile", ["america", "south-america"], "cl", "56"], ["China", ["asia"], "cn", "86", "..-........."], ["Colombia", ["america", "south-america"], "co", "57", "... ... ...."], ["Comoros", ["africa"], "km", "269"], ["Congo", ["africa"], "cd", "243"], ["Congo", ["africa"], "cg", "242"], ["Costa Rica", ["america", "central-america"], "cr", "506", "....-...."], ["Côte d’Ivoire", ["africa"], "ci", "225", ".. .. .. .."], ["Croatia", ["europe", "eu-union", "ex-yugos"], "hr", "385"], ["Cuba", ["america", "carribean"], "cu", "53"], ["Curaçao", ["america", "carribean"], "cw", "599", "", 0], ["Cyprus", ["europe", "eu-union"], "cy", "357", ".. ......"], ["Czech Republic", ["europe", "eu-union"], "cz", "420", "... ... ..."], ["Denmark", ["europe", "eu-union", "baltic"], "dk", "45", ".. .. .. .."], ["Djibouti", ["africa"], "dj", "253"], ["Dominica", ["america", "carribean"], "dm", "1767"], ["Dominican Republic", ["america", "carribean"], "do", "1", "", 2, ["809", "829", "849"]], ["Ecuador", ["america", "south-america"], "ec", "593"], ["Egypt", ["africa", "north-africa"], "eg", "20"], ["El Salvador", ["america", "central-america"], "sv", "503", "....-...."], ["Equatorial Guinea", ["africa"], "gq", "240"], ["Eritrea", ["africa"], "er", "291"], ["Estonia", ["europe", "eu-union", "ex-ussr", "baltic"], "ee", "372", ".... ......"], ["Ethiopia", ["africa"], "et", "251"], ["Fiji", ["oceania"], "fj", "679"], ["Finland", ["europe", "eu-union", "baltic"], "fi", "358", ".. ... .. .."], ["France", ["europe", "eu-union"], "fr", "33", ". .. .. .. .."], ["French Guiana", ["america", "south-america"], "gf", "594"], ["French Polynesia", ["oceania"], "pf", "689"], ["Gabon", ["africa"], "ga", "241"], ["Gambia", ["africa"], "gm", "220"], ["Georgia", ["asia", "ex-ussr"], "ge", "995"], ["Germany", ["europe", "eu-union", "baltic"], "de", "49", ".... ........"], ["Ghana", ["africa"], "gh", "233"], ["Greece", ["europe", "eu-union"], "gr", "30"], ["Grenada", ["america", "carribean"], "gd", "1473"], ["Guadeloupe", ["america", "carribean"], "gp", "590", "", 0], ["Guam", ["oceania"], "gu", "1671"], ["Guatemala", ["america", "central-america"], "gt", "502", "....-...."], ["Guinea", ["africa"], "gn", "224"], ["Guinea-Bissau", ["africa"], "gw", "245"], ["Guyana", ["america", "south-america"], "gy", "592"], ["Haiti", ["america", "carribean"], "ht", "509", "....-...."], ["Honduras", ["america", "central-america"], "hn", "504"], ["Hong Kong", ["asia"], "hk", "852", ".... ...."], ["Hungary", ["europe", "eu-union"], "hu", "36"], ["Iceland", ["europe"], "is", "354", "... ...."], ["India", ["asia"], "in", "91", ".....-....."], ["Indonesia", ["asia"], "id", "62"], ["Iran", ["middle-east"], "ir", "98", "... ... ...."], ["Iraq", ["middle-east"], "iq", "964"], ["Ireland", ["europe", "eu-union"], "ie", "353", ".. ......."], ["Israel", ["middle-east"], "il", "972", "... ... ...."], ["Italy", ["europe", "eu-union"], "it", "39", "... .......", 0], ["Jamaica", ["america", "carribean"], "jm", "1876"], ["Japan", ["asia"], "jp", "81", ".. .... ...."], ["Jordan", ["middle-east"], "jo", "962"], ["Kazakhstan", ["asia", "ex-ussr"], "kz", "7", "... ...-..-..", 1, ["310", "311", "312", "313", "315", "318", "321", "324", "325", "326", "327", "336", "7172", "73622"]], ["Kenya", ["africa"], "ke", "254"], ["Kiribati", ["oceania"], "ki", "686"], ["Kosovo", ["europe", "ex-yugos"], "xk", "383"], ["Kuwait", ["middle-east"], "kw", "965"], ["Kyrgyzstan", ["asia", "ex-ussr"], "kg", "996", "... ... ..."], ["Laos", ["asia"], "la", "856"], ["Latvia", ["europe", "eu-union", "ex-ussr", "baltic"], "lv", "371", ".. ... ..."], ["Lebanon", ["middle-east"], "lb", "961"], ["Lesotho", ["africa"], "ls", "266"], ["Liberia", ["africa"], "lr", "231"], ["Libya", ["africa", "north-africa"], "ly", "218"], ["Liechtenstein", ["europe"], "li", "423"], ["Lithuania", ["europe", "eu-union", "ex-ussr", "baltic"], "lt", "370"], ["Luxembourg", ["europe", "eu-union"], "lu", "352"], ["Macau", ["asia"], "mo", "853"], ["Macedonia", ["europe", "ex-yugos"], "mk", "389"], ["Madagascar", ["africa"], "mg", "261"], ["Malawi", ["africa"], "mw", "265"], ["Malaysia", ["asia"], "my", "60", "..-....-...."], ["Maldives", ["asia"], "mv", "960"], ["Mali", ["africa"], "ml", "223"], ["Malta", ["europe", "eu-union"], "mt", "356"], ["Marshall Islands", ["oceania"], "mh", "692"], ["Martinique", ["america", "carribean"], "mq", "596"], ["Mauritania", ["africa"], "mr", "222"], ["Mauritius", ["africa"], "mu", "230"], ["Mexico", ["america", "central-america"], "mx", "52", "... ... ....", 0, ["55", "81", "33", "656", "664", "998", "774", "229"]], ["Micronesia", ["oceania"], "fm", "691"], ["Moldova", ["europe"], "md", "373", "(..) ..-..-.."], ["Monaco", ["europe"], "mc", "377"], ["Mongolia", ["asia"], "mn", "976"], ["Montenegro", ["europe", "ex-yugos"], "me", "382"], ["Morocco", ["africa", "north-africa"], "ma", "212"], ["Mozambique", ["africa"], "mz", "258"], ["Myanmar", ["asia"], "mm", "95"], ["Namibia", ["africa"], "na", "264"], ["Nauru", ["africa"], "nr", "674"], ["Nepal", ["asia"], "np", "977"], ["Netherlands", ["europe", "eu-union"], "nl", "31", ".. ........"], ["New Caledonia", ["oceania"], "nc", "687"], ["New Zealand", ["oceania"], "nz", "64", "...-...-...."], ["Nicaragua", ["america", "central-america"], "ni", "505"], ["Niger", ["africa"], "ne", "227"], ["Nigeria", ["africa"], "ng", "234"], ["North Korea", ["asia"], "kp", "850"], ["Norway", ["europe", "baltic"], "no", "47", "... .. ..."], ["Oman", ["middle-east"], "om", "968"], ["Pakistan", ["asia"], "pk", "92", "...-......."], ["Palau", ["oceania"], "pw", "680"], ["Palestine", ["middle-east"], "ps", "970"], ["Panama", ["america", "central-america"], "pa", "507"], ["Papua New Guinea", ["oceania"], "pg", "675"], ["Paraguay", ["america", "south-america"], "py", "595"], ["Peru", ["america", "south-america"], "pe", "51"], ["Philippines", ["asia"], "ph", "63", ".... ......."], ["Poland", ["europe", "eu-union", "baltic"], "pl", "48", "...-...-..."], ["Portugal", ["europe", "eu-union"], "pt", "351"], ["Puerto Rico", ["america", "carribean"], "pr", "1", "", 3, ["787", "939"]], ["Qatar", ["middle-east"], "qa", "974"], ["Réunion", ["africa"], "re", "262"], ["Romania", ["europe", "eu-union"], "ro", "40"], ["Russia", ["europe", "asia", "ex-ussr", "baltic"], "ru", "7", "(...) ...-..-..", 0], ["Rwanda", ["africa"], "rw", "250"], ["Saint Kitts and Nevis", ["america", "carribean"], "kn", "1869"], ["Saint Lucia", ["america", "carribean"], "lc", "1758"], ["Saint Vincent and the Grenadines", ["america", "carribean"], "vc", "1784"], ["Samoa", ["oceania"], "ws", "685"], ["San Marino", ["europe"], "sm", "378"], ["São Tomé and Príncipe", ["africa"], "st", "239"], ["Saudi Arabia", ["middle-east"], "sa", "966"], ["Senegal", ["africa"], "sn", "221"], ["Serbia", ["europe", "ex-yugos"], "rs", "381"], ["Seychelles", ["africa"], "sc", "248"], ["Sierra Leone", ["africa"], "sl", "232"], ["Singapore", ["asia"], "sg", "65", "....-...."], ["Slovakia", ["europe", "eu-union"], "sk", "421"], ["Slovenia", ["europe", "eu-union", "ex-yugos"], "si", "386"], ["Solomon Islands", ["oceania"], "sb", "677"], ["Somalia", ["africa"], "so", "252"], ["South Africa", ["africa"], "za", "27"], ["South Korea", ["asia"], "kr", "82", "... .... ...."], ["South Sudan", ["africa", "north-africa"], "ss", "211"], ["Spain", ["europe", "eu-union"], "es", "34", "... ... ..."], ["Sri Lanka", ["asia"], "lk", "94"], ["Sudan", ["africa"], "sd", "249"], ["Suriname", ["america", "south-america"], "sr", "597"], ["Swaziland", ["africa"], "sz", "268"], ["Sweden", ["europe", "eu-union", "baltic"], "se", "46", "(...) ...-..."], ["Switzerland", ["europe"], "ch", "41", ".. ... .. .."], ["Syria", ["middle-east"], "sy", "963"], ["Taiwan", ["asia"], "tw", "886"], ["Tajikistan", ["asia", "ex-ussr"], "tj", "992"], ["Tanzania", ["africa"], "tz", "255"], ["Thailand", ["asia"], "th", "66"], ["Timor-Leste", ["asia"], "tl", "670"], ["Togo", ["africa"], "tg", "228"], ["Tonga", ["oceania"], "to", "676"], ["Trinidad and Tobago", ["america", "carribean"], "tt", "1868"], ["Tunisia", ["africa", "north-africa"], "tn", "216"], ["Turkey", ["europe"], "tr", "90", "... ... .. .."], ["Turkmenistan", ["asia", "ex-ussr"], "tm", "993"], ["Tuvalu", ["asia"], "tv", "688"], ["Uganda", ["africa"], "ug", "256"], ["Ukraine", ["europe", "ex-ussr"], "ua", "380", "(..) ... .. .."], ["United Arab Emirates", ["middle-east"], "ae", "971"], ["United Kingdom", ["europe", "eu-union"], "gb", "44", ".... ......"], ["United States", ["america", "north-america"], "us", "1", "(...) ...-....", 0, ["907", "205", "251", "256", "334", "479", "501", "870", "480", "520", "602", "623", "928", "209", "213", "310", "323", "408", "415", "510", "530", "559", "562", "619", "626", "650", "661", "707", "714", "760", "805", "818", "831", "858", "909", "916", "925", "949", "951", "303", "719", "970", "203", "860", "202", "302", "239", "305", "321", "352", "386", "407", "561", "727", "772", "813", "850", "863", "904", "941", "954", "229", "404", "478", "706", "770", "912", "808", "319", "515", "563", "641", "712", "208", "217", "309", "312", "618", "630", "708", "773", "815", "847", "219", "260", "317", "574", "765", "812", "316", "620", "785", "913", "270", "502", "606", "859", "225", "318", "337", "504", "985", "413", "508", "617", "781", "978", "301", "410", "207", "231", "248", "269", "313", "517", "586", "616", "734", "810", "906", "989", "218", "320", "507", "612", "651", "763", "952", "314", "417", "573", "636", "660", "816", "228", "601", "662", "406", "252", "336", "704", "828", "910", "919", "701", "308", "402", "603", "201", "609", "732", "856", "908", "973", "505", "575", "702", "775", "212", "315", "516", "518", "585", "607", "631", "716", "718", "845", "914", "216", "330", "419", "440", "513", "614", "740", "937", "405", "580", "918", "503", "541", "215", "412", "570", "610", "717", "724", "814", "401", "803", "843", "864", "605", "423", "615", "731", "865", "901", "931", "210", "214", "254", "281", "325", "361", "409", "432", "512", "713", "806", "817", "830", "903", "915", "936", "940", "956", "972", "979", "435", "801", "276", "434", "540", "703", "757", "804", "802", "206", "253", "360", "425", "509", "262", "414", "608", "715", "920", "304", "307"]], ["Uruguay", ["america", "south-america"], "uy", "598"], ["Uzbekistan", ["asia", "ex-ussr"], "uz", "998", ".. ... .. .."], ["Vanuatu", ["oceania"], "vu", "678"], ["Vatican City", ["europe"], "va", "39", ".. .... ....", 1], ["Venezuela", ["america", "south-america"], "ve", "58"], ["Vietnam", ["asia"], "vn", "84"], ["Yemen", ["middle-east"], "ye", "967"], ["Zambia", ["africa"], "zm", "260"], ["Zimbabwe", ["africa"], "zw", "263"]], Ee = [["American Samoa", ["oceania"], "as", "1684"], ["Anguilla", ["america", "carribean"], "ai", "1264"], ["Bermuda", ["america", "north-america"], "bm", "1441"], ["British Virgin Islands", ["america", "carribean"], "vg", "1284"], ["Cayman Islands", ["america", "carribean"], "ky", "1345"], ["Cook Islands", ["oceania"], "ck", "682"], ["Falkland Islands", ["america", "south-america"], "fk", "500"], ["Faroe Islands", ["europe"], "fo", "298"], ["Gibraltar", ["europe"], "gi", "350"], ["Greenland", ["america"], "gl", "299"], ["Jersey", ["europe", "eu-union"], "je", "44", ".... ......"], ["Montserrat", ["america", "carribean"], "ms", "1664"], ["Niue", ["asia"], "nu", "683"], ["Norfolk Island", ["oceania"], "nf", "672"], ["Northern Mariana Islands", ["oceania"], "mp", "1670"], ["Saint Barthélemy", ["america", "carribean"], "bl", "590", "", 1], ["Saint Helena", ["africa"], "sh", "290"], ["Saint Martin", ["america", "carribean"], "mf", "590", "", 2], ["Saint Pierre and Miquelon", ["america", "north-america"], "pm", "508"], ["Sint Maarten", ["america", "carribean"], "sx", "1721"], ["Tokelau", ["oceania"], "tk", "690"], ["Turks and Caicos Islands", ["america", "carribean"], "tc", "1649"], ["U.S. Virgin Islands", ["america", "carribean"], "vi", "1340"], ["Wallis and Futuna", ["oceania"], "wf", "681"]];
    function O(j, T, z, ie, R) {
      return !z || R ? j + "".padEnd(T.length, ".") + " " + ie : j + "".padEnd(T.length, ".") + " " + z;
    }
    function I(j, T, z, ie, R) {
      var h, pe, le = [];
      return pe = T === !0, [(h = []).concat.apply(h, o(j.map(function(oe) {
        var Te = { name: oe[0], regions: oe[1], iso2: oe[2], countryCode: oe[3], dialCode: oe[3], format: O(z, oe[3], oe[4], ie, R), priority: oe[5] || 0 }, we = [];
        return oe[6] && oe[6].map(function(Ie) {
          var Re = function(ze) {
            for (var De = 1; De < arguments.length; De++) {
              var b = arguments[De] != null ? arguments[De] : {}, w = Object.keys(b);
              typeof Object.getOwnPropertySymbols == "function" && (w = w.concat(Object.getOwnPropertySymbols(b).filter(function(A) {
                return Object.getOwnPropertyDescriptor(b, A).enumerable;
              }))), w.forEach(function(A) {
                r(ze, A, b[A]);
              });
            }
            return ze;
          }({}, Te);
          Re.dialCode = oe[3] + Ie, Re.isAreaCode = !0, Re.areaCodeLength = Ie.length, we.push(Re);
        }), we.length > 0 ? (Te.mainCode = !0, pe || T.constructor.name === "Array" && T.includes(oe[2]) ? (Te.hasAreaCodes = !0, [Te].concat(we)) : (le = le.concat(we), [Te])) : [Te];
      }))), le];
    }
    function P(j, T, z, ie) {
      if (z !== null) {
        var R = Object.keys(z), h = Object.values(z);
        R.forEach(function(pe, le) {
          if (ie) return j.push([pe, h[le]]);
          var oe = j.findIndex(function(we) {
            return we[0] === pe;
          });
          if (oe === -1) {
            var Te = [pe];
            Te[T] = h[le], j.push(Te);
          } else j[oe][T] = h[le];
        });
      }
    }
    function X(j, T) {
      return T.length === 0 ? j : j.map(function(z) {
        var ie = T.findIndex(function(h) {
          return h[0] === z[2];
        });
        if (ie === -1) return z;
        var R = T[ie];
        return R[1] && (z[4] = R[1]), R[3] && (z[5] = R[3]), R[2] && (z[6] = R[2]), z;
      });
    }
    var Me = function j(T, z, ie, R, h, pe, le, oe, Te, we, Ie, Re, ze, De) {
      c(this, j), this.filterRegions = function(N, G) {
        if (typeof N == "string") {
          var ae = N;
          return G.filter(function(Y) {
            return Y.regions.some(function(H) {
              return H === ae;
            });
          });
        }
        return G.filter(function(Y) {
          return N.map(function(H) {
            return Y.regions.some(function(Oe) {
              return Oe === H;
            });
          }).some(function(H) {
            return H;
          });
        });
      }, this.sortTerritories = function(N, G) {
        var ae = [].concat(o(N), o(G));
        return ae.sort(function(Y, H) {
          return Y.name < H.name ? -1 : Y.name > H.name ? 1 : 0;
        }), ae;
      }, this.getFilteredCountryList = function(N, G, ae) {
        return N.length === 0 ? G : ae ? N.map(function(Y) {
          var H = G.find(function(Oe) {
            return Oe.iso2 === Y;
          });
          if (H) return H;
        }).filter(function(Y) {
          return Y;
        }) : G.filter(function(Y) {
          return N.some(function(H) {
            return H === Y.iso2;
          });
        });
      }, this.localizeCountries = function(N, G, ae) {
        for (var Y = 0; Y < N.length; Y++) G[N[Y].iso2] !== void 0 ? N[Y].localName = G[N[Y].iso2] : G[N[Y].name] !== void 0 && (N[Y].localName = G[N[Y].name]);
        return ae || N.sort(function(H, Oe) {
          return H.localName < Oe.localName ? -1 : H.localName > Oe.localName ? 1 : 0;
        }), N;
      }, this.getCustomAreas = function(N, G) {
        for (var ae = [], Y = 0; Y < G.length; Y++) {
          var H = JSON.parse(JSON.stringify(N));
          H.dialCode += G[Y], ae.push(H);
        }
        return ae;
      }, this.excludeCountries = function(N, G) {
        return G.length === 0 ? N : N.filter(function(ae) {
          return !G.includes(ae.iso2);
        });
      };
      var b = function(N, G, ae) {
        var Y = [];
        return P(Y, 1, N, !0), P(Y, 3, G), P(Y, 2, ae), Y;
      }(oe, Te, we), w = X(JSON.parse(JSON.stringify(Fe)), b), A = X(JSON.parse(JSON.stringify(Ee)), b), ee = Je(I(w, T, Re, ze, De), 2), q = ee[0], te = ee[1];
      if (z) {
        var ne = Je(I(A, T, Re, ze, De), 2), be = ne[0];
        ne[1], q = this.sortTerritories(be, q);
      }
      ie && (q = this.filterRegions(ie, q)), this.onlyCountries = this.localizeCountries(this.excludeCountries(this.getFilteredCountryList(R, q, le.includes("onlyCountries")), pe), Ie, le.includes("onlyCountries")), this.preferredCountries = h.length === 0 ? [] : this.localizeCountries(this.getFilteredCountryList(h, q, le.includes("preferredCountries")), Ie, le.includes("preferredCountries")), this.hiddenAreaCodes = this.excludeCountries(this.getFilteredCountryList(R, te), pe);
    }, nt = function(j) {
      function T(R) {
        var h;
        c(this, T), (h = function(b, w) {
          return !w || m(w) !== "object" && typeof w != "function" ? v(b) : w;
        }(this, _(T).call(this, R))).getProbableCandidate = B()(function(b) {
          return b && b.length !== 0 ? h.state.onlyCountries.filter(function(w) {
            return de()(w.name.toLowerCase(), b.toLowerCase());
          }, v(v(h)))[0] : null;
        }), h.guessSelectedCountry = B()(function(b, w, A, ee) {
          var q;
          if (h.props.enableAreaCodes === !1 && (ee.some(function(be) {
            if (de()(b, be.dialCode)) return A.some(function(N) {
              if (be.iso2 === N.iso2 && N.mainCode) return q = N, !0;
            }), !0;
          }), q)) return q;
          var te = A.find(function(be) {
            return be.iso2 == w;
          });
          if (b.trim() === "") return te;
          var ne = A.reduce(function(be, N) {
            return de()(b, N.dialCode) && (N.dialCode.length > be.dialCode.length || N.dialCode.length === be.dialCode.length && N.priority < be.priority) ? N : be;
          }, { dialCode: "", priority: 10001 }, v(v(h)));
          return ne.name ? ne : te;
        }), h.updateCountry = function(b) {
          var w, A = h.state.onlyCountries;
          (w = b.indexOf(0) >= "0" && b.indexOf(0) <= "9" ? A.find(function(ee) {
            return ee.dialCode == +b;
          }) : A.find(function(ee) {
            return ee.iso2 == b;
          })) && w.dialCode && h.setState({ selectedCountry: w, formattedNumber: h.props.disableCountryCode ? "" : h.formatNumber(w.dialCode, w) });
        }, h.scrollTo = function(b, w) {
          if (b) {
            var A = h.dropdownRef;
            if (A && document.body) {
              var ee = A.offsetHeight, q = A.getBoundingClientRect().top + document.body.scrollTop, te = q + ee, ne = b, be = ne.getBoundingClientRect(), N = ne.offsetHeight, G = be.top + document.body.scrollTop, ae = G + N, Y = G - q + A.scrollTop, H = ee / 2 - N / 2;
              if (h.props.enableSearch ? G < q + 32 : G < q) w && (Y -= H), A.scrollTop = Y;
              else if (ae > te) {
                w && (Y += H);
                var Oe = ee - N;
                A.scrollTop = Y - Oe;
              }
            }
          }
        }, h.scrollToTop = function() {
          var b = h.dropdownRef;
          b && document.body && (b.scrollTop = 0);
        }, h.formatNumber = function(b, w) {
          if (!w) return b;
          var A, ee = w.format, q = h.props, te = q.disableCountryCode, ne = q.enableAreaCodeStretch, be = q.enableLongNumbers, N = q.autoFormat;
          if (te ? ((A = ee.split(" ")).shift(), A = A.join(" ")) : ne && w.isAreaCode ? ((A = ee.split(" "))[1] = A[1].replace(/\.+/, "".padEnd(w.areaCodeLength, ".")), A = A.join(" ")) : A = ee, !b || b.length === 0) return te ? "" : h.props.prefix;
          if (b && b.length < 2 || !A || !N) return te ? b : h.props.prefix + b;
          var G, ae = he()(A, function(Y, H) {
            if (Y.remainingText.length === 0) return Y;
            if (H !== ".") return { formattedText: Y.formattedText + H, remainingText: Y.remainingText };
            var Oe, Ke = a(Oe = Y.remainingText) || i(Oe) || s(), He = Ke[0], qe = Ke.slice(1);
            return { formattedText: Y.formattedText + He, remainingText: qe };
          }, { formattedText: "", remainingText: b.split("") });
          return (G = be ? ae.formattedText + ae.remainingText.join("") : ae.formattedText).includes("(") && !G.includes(")") && (G += ")"), G;
        }, h.cursorToEnd = function() {
          var b = h.numberInputRef;
          if (document.activeElement === b) {
            b.focus();
            var w = b.value.length;
            b.value.charAt(w - 1) === ")" && (w -= 1), b.setSelectionRange(w, w);
          }
        }, h.getElement = function(b) {
          return h["flag_no_".concat(b)];
        }, h.getCountryData = function() {
          return h.state.selectedCountry ? { name: h.state.selectedCountry.name || "", dialCode: h.state.selectedCountry.dialCode || "", countryCode: h.state.selectedCountry.iso2 || "", format: h.state.selectedCountry.format || "" } : {};
        }, h.handleFlagDropdownClick = function(b) {
          if (b.preventDefault(), h.state.showDropdown || !h.props.disabled) {
            var w = h.state, A = w.preferredCountries, ee = w.onlyCountries, q = w.selectedCountry, te = h.concatPreferredCountries(A, ee).findIndex(function(ne) {
              return ne.dialCode === q.dialCode && ne.iso2 === q.iso2;
            });
            h.setState({ showDropdown: !h.state.showDropdown, highlightCountryIndex: te }, function() {
              h.state.showDropdown && h.scrollTo(h.getElement(h.state.highlightCountryIndex));
            });
          }
        }, h.handleInput = function(b) {
          var w = b.target.value, A = h.props, ee = A.prefix, q = A.onChange, te = h.props.disableCountryCode ? "" : ee, ne = h.state.selectedCountry, be = h.state.freezeSelection;
          if (!h.props.countryCodeEditable) {
            var N = ee + (ne.hasAreaCodes ? h.state.onlyCountries.find(function(Be) {
              return Be.iso2 === ne.iso2 && Be.mainCode;
            }).dialCode : ne.dialCode);
            if (w.slice(0, N.length) !== N) return;
          }
          if (w === ee) return q && q("", h.getCountryData(), b, ""), h.setState({ formattedNumber: "" });
          if (!(w.replace(/\D/g, "").length > 15 && (h.props.enableLongNumbers === !1 || typeof h.props.enableLongNumbers == "number" && w.replace(/\D/g, "").length > h.props.enableLongNumbers)) && w !== h.state.formattedNumber) {
            b.preventDefault ? b.preventDefault() : b.returnValue = !1;
            var G = h.props.country, ae = h.state, Y = ae.onlyCountries, H = ae.selectedCountry, Oe = ae.hiddenAreaCodes;
            if (q && b.persist(), w.length > 0) {
              var Ke = w.replace(/\D/g, "");
              (!h.state.freezeSelection || H && H.dialCode.length > Ke.length) && (ne = h.props.disableCountryGuess ? H : h.guessSelectedCountry(Ke.substring(0, 6), G, Y, Oe) || H, be = !1), te = h.formatNumber(Ke, ne), ne = ne.dialCode ? ne : H;
            }
            var He = b.target.selectionStart, qe = b.target.selectionStart, ot = h.state.formattedNumber, dt = te.length - ot.length;
            h.setState({ formattedNumber: te, freezeSelection: be, selectedCountry: ne }, function() {
              dt > 0 && (qe -= dt), te.charAt(te.length - 1) == ")" ? h.numberInputRef.setSelectionRange(te.length - 1, te.length - 1) : qe > 0 && ot.length >= te.length ? h.numberInputRef.setSelectionRange(qe, qe) : He < ot.length && h.numberInputRef.setSelectionRange(He, He), q && q(te.replace(/[^0-9]+/g, ""), h.getCountryData(), b, te);
            });
          }
        }, h.handleInputClick = function(b) {
          h.setState({ showDropdown: !1 }), h.props.onClick && h.props.onClick(b, h.getCountryData());
        }, h.handleDoubleClick = function(b) {
          var w = b.target.value.length;
          b.target.setSelectionRange(0, w);
        }, h.handleFlagItemClick = function(b, w) {
          var A = h.state.selectedCountry, ee = h.state.onlyCountries.find(function(be) {
            return be == b;
          });
          if (ee) {
            var q = h.state.formattedNumber.replace(" ", "").replace("(", "").replace(")", "").replace("-", ""), te = q.length > 1 ? q.replace(A.dialCode, ee.dialCode) : ee.dialCode, ne = h.formatNumber(te.replace(/\D/g, ""), ee);
            h.setState({ showDropdown: !1, selectedCountry: ee, freezeSelection: !0, formattedNumber: ne, searchValue: "" }, function() {
              h.cursorToEnd(), h.props.onChange && h.props.onChange(ne.replace(/[^0-9]+/g, ""), h.getCountryData(), w, ne);
            });
          }
        }, h.handleInputFocus = function(b) {
          h.numberInputRef && h.numberInputRef.value === h.props.prefix && h.state.selectedCountry && !h.props.disableCountryCode && h.setState({ formattedNumber: h.props.prefix + h.state.selectedCountry.dialCode }, function() {
            h.props.jumpCursorToEnd && setTimeout(h.cursorToEnd, 0);
          }), h.setState({ placeholder: "" }), h.props.onFocus && h.props.onFocus(b, h.getCountryData()), h.props.jumpCursorToEnd && setTimeout(h.cursorToEnd, 0);
        }, h.handleInputBlur = function(b) {
          b.target.value || h.setState({ placeholder: h.props.placeholder }), h.props.onBlur && h.props.onBlur(b, h.getCountryData());
        }, h.handleInputCopy = function(b) {
          if (h.props.copyNumbersOnly) {
            var w = window.getSelection().toString().replace(/[^0-9]+/g, "");
            b.clipboardData.setData("text/plain", w), b.preventDefault();
          }
        }, h.getHighlightCountryIndex = function(b) {
          var w = h.state.highlightCountryIndex + b;
          return w < 0 || w >= h.state.onlyCountries.length + h.state.preferredCountries.length ? w - b : h.props.enableSearch && w > h.getSearchFilteredCountries().length ? 0 : w;
        }, h.searchCountry = function() {
          var b = h.getProbableCandidate(h.state.queryString) || h.state.onlyCountries[0], w = h.state.onlyCountries.findIndex(function(A) {
            return A == b;
          }) + h.state.preferredCountries.length;
          h.scrollTo(h.getElement(w), !0), h.setState({ queryString: "", highlightCountryIndex: w });
        }, h.handleKeydown = function(b) {
          var w = h.props.keys, A = b.target.className;
          if (A.includes("selected-flag") && b.which === w.ENTER && !h.state.showDropdown) return h.handleFlagDropdownClick(b);
          if (A.includes("form-control") && (b.which === w.ENTER || b.which === w.ESC)) return b.target.blur();
          if (h.state.showDropdown && !h.props.disabled && (!A.includes("search-box") || b.which === w.UP || b.which === w.DOWN || b.which === w.ENTER || b.which === w.ESC && b.target.value === "")) {
            b.preventDefault ? b.preventDefault() : b.returnValue = !1;
            var ee = function(q) {
              h.setState({ highlightCountryIndex: h.getHighlightCountryIndex(q) }, function() {
                h.scrollTo(h.getElement(h.state.highlightCountryIndex), !0);
              });
            };
            switch (b.which) {
              case w.DOWN:
                ee(1);
                break;
              case w.UP:
                ee(-1);
                break;
              case w.ENTER:
                h.props.enableSearch ? h.handleFlagItemClick(h.getSearchFilteredCountries()[h.state.highlightCountryIndex] || h.getSearchFilteredCountries()[0], b) : h.handleFlagItemClick([].concat(o(h.state.preferredCountries), o(h.state.onlyCountries))[h.state.highlightCountryIndex], b);
                break;
              case w.ESC:
              case w.TAB:
                h.setState({ showDropdown: !1 }, h.cursorToEnd);
                break;
              default:
                (b.which >= w.A && b.which <= w.Z || b.which === w.SPACE) && h.setState({ queryString: h.state.queryString + String.fromCharCode(b.which) }, h.state.debouncedQueryStingSearcher);
            }
          }
        }, h.handleInputKeyDown = function(b) {
          var w = h.props, A = w.keys, ee = w.onEnterKeyPress, q = w.onKeyDown;
          b.which === A.ENTER && ee && ee(b), q && q(b);
        }, h.handleClickOutside = function(b) {
          h.dropdownRef && !h.dropdownContainerRef.contains(b.target) && h.state.showDropdown && h.setState({ showDropdown: !1 });
        }, h.handleSearchChange = function(b) {
          var w = b.currentTarget.value, A = h.state, ee = A.preferredCountries, q = A.selectedCountry, te = 0;
          if (w === "" && q) {
            var ne = h.state.onlyCountries;
            te = h.concatPreferredCountries(ee, ne).findIndex(function(be) {
              return be == q;
            }), setTimeout(function() {
              return h.scrollTo(h.getElement(te));
            }, 100);
          }
          h.setState({ searchValue: w, highlightCountryIndex: te });
        }, h.concatPreferredCountries = function(b, w) {
          return b.length > 0 ? o(new Set(b.concat(w))) : w;
        }, h.getDropdownCountryName = function(b) {
          return b.localName || b.name;
        }, h.getSearchFilteredCountries = function() {
          var b = h.state, w = b.preferredCountries, A = b.onlyCountries, ee = b.searchValue, q = h.props.enableSearch, te = h.concatPreferredCountries(w, A), ne = ee.trim().toLowerCase().replace("+", "");
          if (q && ne) {
            if (/^\d+$/.test(ne)) return te.filter(function(G) {
              var ae = G.dialCode;
              return ["".concat(ae)].some(function(Y) {
                return Y.toLowerCase().includes(ne);
              });
            });
            var be = te.filter(function(G) {
              var ae = G.iso2;
              return ["".concat(ae)].some(function(Y) {
                return Y.toLowerCase().includes(ne);
              });
            }), N = te.filter(function(G) {
              var ae = G.name, Y = G.localName;
              return G.iso2, ["".concat(ae), "".concat(Y || "")].some(function(H) {
                return H.toLowerCase().includes(ne);
              });
            });
            return h.scrollToTop(), o(new Set([].concat(be, N)));
          }
          return te;
        }, h.getCountryDropdownList = function() {
          var b = h.state, w = b.preferredCountries, A = b.highlightCountryIndex, ee = b.showDropdown, q = b.searchValue, te = h.props, ne = te.disableDropdown, be = te.prefix, N = h.props, G = N.enableSearch, ae = N.searchNotFound, Y = N.disableSearchIcon, H = N.searchClass, Oe = N.searchStyle, Ke = N.searchPlaceholder, He = N.autocompleteSearch, qe = h.getSearchFilteredCountries().map(function(Be, It) {
            var Bt = A === It, xn = ge()({ country: !0, preferred: Be.iso2 === "us" || Be.iso2 === "gb", active: Be.iso2 === "us", highlight: Bt }), Ut = "flag ".concat(Be.iso2);
            return x.a.createElement("li", Object.assign({ ref: function(St) {
              return h["flag_no_".concat(It)] = St;
            }, key: "flag_no_".concat(It), "data-flag-key": "flag_no_".concat(It), className: xn, "data-dial-code": "1", tabIndex: ne ? "-1" : "0", "data-country-code": Be.iso2, onClick: function(St) {
              return h.handleFlagItemClick(Be, St);
            }, role: "option" }, Bt ? { "aria-selected": !0 } : {}), x.a.createElement("div", { className: Ut }), x.a.createElement("span", { className: "country-name" }, h.getDropdownCountryName(Be)), x.a.createElement("span", { className: "dial-code" }, Be.format ? h.formatNumber(Be.dialCode, Be) : be + Be.dialCode));
          }), ot = x.a.createElement("li", { key: "dashes", className: "divider" });
          w.length > 0 && (!G || G && !q.trim()) && qe.splice(w.length, 0, ot);
          var dt = ge()(r({ "country-list": !0, hide: !ee }, h.props.dropdownClass, !0));
          return x.a.createElement("ul", { ref: function(Be) {
            return !G && Be && Be.focus(), h.dropdownRef = Be;
          }, className: dt, style: h.props.dropdownStyle, role: "listbox", tabIndex: "0" }, G && x.a.createElement("li", { className: ge()(r({ search: !0 }, H, H)) }, !Y && x.a.createElement("span", { className: ge()(r({ "search-emoji": !0 }, "".concat(H, "-emoji"), H)), role: "img", "aria-label": "Magnifying glass" }, "🔎"), x.a.createElement("input", { className: ge()(r({ "search-box": !0 }, "".concat(H, "-box"), H)), style: Oe, type: "search", placeholder: Ke, autoFocus: !0, autoComplete: He ? "on" : "off", value: q, onChange: h.handleSearchChange })), qe.length > 0 ? qe : x.a.createElement("li", { className: "no-entries-message" }, x.a.createElement("span", null, ae)));
        };
        var pe, le = new Me(R.enableAreaCodes, R.enableTerritories, R.regions, R.onlyCountries, R.preferredCountries, R.excludeCountries, R.preserveOrder, R.masks, R.priority, R.areaCodes, R.localization, R.prefix, R.defaultMask, R.alwaysDefaultMask), oe = le.onlyCountries, Te = le.preferredCountries, we = le.hiddenAreaCodes, Ie = R.value ? R.value.replace(/\D/g, "") : "";
        pe = R.disableInitialCountryGuess ? 0 : Ie.length > 1 ? h.guessSelectedCountry(Ie.substring(0, 6), R.country, oe, we) || 0 : R.country && oe.find(function(b) {
          return b.iso2 == R.country;
        }) || 0;
        var Re, ze = Ie.length < 2 && pe && !de()(Ie, pe.dialCode) ? pe.dialCode : "";
        Re = Ie === "" && pe === 0 ? "" : h.formatNumber((R.disableCountryCode ? "" : ze) + Ie, pe.name ? pe : void 0);
        var De = oe.findIndex(function(b) {
          return b == pe;
        });
        return h.state = { showDropdown: R.showDropdown, formattedNumber: Re, onlyCountries: oe, preferredCountries: Te, hiddenAreaCodes: we, selectedCountry: pe, highlightCountryIndex: De, queryString: "", freezeSelection: !1, debouncedQueryStingSearcher: S()(h.searchCountry, 250), searchValue: "" }, h;
      }
      var z, ie;
      return function(R, h) {
        if (typeof h != "function" && h !== null) throw new TypeError("Super expression must either be null or a function");
        R.prototype = Object.create(h && h.prototype, { constructor: { value: R, writable: !0, configurable: !0 } }), h && E(R, h);
      }(T, j), z = T, (ie = [{ key: "componentDidMount", value: function() {
        document.addEventListener && this.props.enableClickOutside && document.addEventListener("mousedown", this.handleClickOutside), this.props.onMount && this.props.onMount(this.state.formattedNumber.replace(/[^0-9]+/g, ""), this.getCountryData(), this.state.formattedNumber);
      } }, { key: "componentWillUnmount", value: function() {
        document.removeEventListener && this.props.enableClickOutside && document.removeEventListener("mousedown", this.handleClickOutside);
      } }, { key: "componentDidUpdate", value: function(R, h, pe) {
        R.country !== this.props.country ? this.updateCountry(this.props.country) : R.value !== this.props.value && this.updateFormattedNumber(this.props.value);
      } }, { key: "updateFormattedNumber", value: function(R) {
        if (R === null) return this.setState({ selectedCountry: 0, formattedNumber: "" });
        var h = this.state, pe = h.onlyCountries, le = h.selectedCountry, oe = h.hiddenAreaCodes, Te = this.props, we = Te.country, Ie = Te.prefix;
        if (R === "") return this.setState({ selectedCountry: le, formattedNumber: "" });
        var Re, ze, De = R.replace(/\D/g, "");
        if (le && de()(R, Ie + le.dialCode)) ze = this.formatNumber(De, le), this.setState({ formattedNumber: ze });
        else {
          var b = (Re = this.props.disableCountryGuess ? le : this.guessSelectedCountry(De.substring(0, 6), we, pe, oe) || le) && de()(De, Ie + Re.dialCode) ? Re.dialCode : "";
          ze = this.formatNumber((this.props.disableCountryCode ? "" : b) + De, Re || void 0), this.setState({ selectedCountry: Re, formattedNumber: ze });
        }
      } }, { key: "render", value: function() {
        var R, h, pe, le = this, oe = this.state, Te = oe.onlyCountries, we = oe.selectedCountry, Ie = oe.showDropdown, Re = oe.formattedNumber, ze = oe.hiddenAreaCodes, De = this.props, b = De.disableDropdown, w = De.renderStringAsFlag, A = De.isValid, ee = De.defaultErrorMessage, q = De.specialLabel;
        if (typeof A == "boolean") h = A;
        else {
          var te = A(Re.replace(/\D/g, ""), we, Te, ze);
          typeof te == "boolean" ? (h = te) === !1 && (pe = ee) : (h = !1, pe = te);
        }
        var ne = ge()((r(R = {}, this.props.containerClass, !0), r(R, "react-tel-input", !0), R)), be = ge()({ arrow: !0, up: Ie }), N = ge()(r({ "form-control": !0, "invalid-number": !h, open: Ie }, this.props.inputClass, !0)), G = ge()({ "selected-flag": !0, open: Ie }), ae = ge()(r({ "flag-dropdown": !0, "invalid-number": !h, open: Ie }, this.props.buttonClass, !0)), Y = "flag ".concat(we && we.iso2);
        return x.a.createElement("div", { className: "".concat(ne, " ").concat(this.props.className), style: this.props.style || this.props.containerStyle, onKeyDown: this.handleKeydown }, q && x.a.createElement("div", { className: "special-label" }, q), pe && x.a.createElement("div", { className: "invalid-number-message" }, pe), x.a.createElement("input", Object.assign({ className: N, style: this.props.inputStyle, onChange: this.handleInput, onClick: this.handleInputClick, onDoubleClick: this.handleDoubleClick, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur, onCopy: this.handleInputCopy, value: Re, onKeyDown: this.handleInputKeyDown, placeholder: this.props.placeholder, disabled: this.props.disabled, type: "tel" }, this.props.inputProps, { ref: function(H) {
          le.numberInputRef = H, typeof le.props.inputProps.ref == "function" ? le.props.inputProps.ref(H) : typeof le.props.inputProps.ref == "object" && (le.props.inputProps.ref.current = H);
        } })), x.a.createElement("div", { className: ae, style: this.props.buttonStyle, ref: function(H) {
          return le.dropdownContainerRef = H;
        } }, w ? x.a.createElement("div", { className: G }, w) : x.a.createElement("div", { onClick: b ? void 0 : this.handleFlagDropdownClick, className: G, title: we ? "".concat(we.localName || we.name, ": + ").concat(we.dialCode) : "", tabIndex: b ? "-1" : "0", role: "button", "aria-haspopup": "listbox", "aria-expanded": !!Ie || void 0 }, x.a.createElement("div", { className: Y }, !b && x.a.createElement("div", { className: be }))), Ie && this.getCountryDropdownList()));
      } }]) && u(z.prototype, ie), T;
    }(x.a.Component);
    nt.defaultProps = { country: "", value: "", onlyCountries: [], preferredCountries: [], excludeCountries: [], placeholder: "1 (702) 123-4567", searchPlaceholder: "search", searchNotFound: "No entries to show", flagsImagePath: "./flags.png", disabled: !1, containerStyle: {}, inputStyle: {}, buttonStyle: {}, dropdownStyle: {}, searchStyle: {}, containerClass: "", inputClass: "", buttonClass: "", dropdownClass: "", searchClass: "", className: "", autoFormat: !0, enableAreaCodes: !1, enableTerritories: !1, disableCountryCode: !1, disableDropdown: !1, enableLongNumbers: !1, countryCodeEditable: !0, enableSearch: !1, disableSearchIcon: !1, disableInitialCountryGuess: !1, disableCountryGuess: !1, regions: "", inputProps: {}, localization: {}, masks: null, priority: null, areaCodes: null, preserveOrder: [], defaultMask: "... ... ... ... ..", alwaysDefaultMask: !1, prefix: "+", copyNumbersOnly: !0, renderStringAsFlag: "", autocompleteSearch: !1, jumpCursorToEnd: !0, enableAreaCodeStretch: !1, enableClickOutside: !0, showDropdown: !1, isValid: !0, defaultErrorMessage: "", specialLabel: "Phone", onEnterKeyPress: null, keys: { UP: 38, DOWN: 40, RIGHT: 39, LEFT: 37, ENTER: 13, ESC: 27, PLUS: 43, A: 65, Z: 90, SPACE: 32, TAB: 9 } }, t.default = nt;
  }])), Qi;
}
var Af = Lf();
const kb = /* @__PURE__ */ hc(Af);
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var dl;
function L() {
  return dl.apply(null, arguments);
}
function jf(e) {
  dl = e;
}
function Dt(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Yn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function xe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Lo(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (xe(e, t))
      return !1;
  return !0;
}
function ut(e) {
  return e === void 0;
}
function sn(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Hr(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function fl(e, t) {
  var n = [], r, i = e.length;
  for (r = 0; r < i; ++r)
    n.push(t(e[r], r));
  return n;
}
function vn(e, t) {
  for (var n in t)
    xe(t, n) && (e[n] = t[n]);
  return xe(t, "toString") && (e.toString = t.toString), xe(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function zt(e, t, n, r) {
  return Ll(e, t, n, r, !0).utc();
}
function Nf() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function ue(e) {
  return e._pf == null && (e._pf = Nf()), e._pf;
}
var yo;
Array.prototype.some ? yo = Array.prototype.some : yo = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Ao(e) {
  var t = null, n = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = ue(e), n = yo.call(t.parsedDateParts, function(i) {
    return i != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Ri(e) {
  var t = zt(NaN);
  return e != null ? vn(ue(t), e) : ue(t).userInvalidated = !0, t;
}
var ja = L.momentProperties = [], eo = !1;
function jo(e, t) {
  var n, r, i, o = ja.length;
  if (ut(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), ut(t._i) || (e._i = t._i), ut(t._f) || (e._f = t._f), ut(t._l) || (e._l = t._l), ut(t._strict) || (e._strict = t._strict), ut(t._tzm) || (e._tzm = t._tzm), ut(t._isUTC) || (e._isUTC = t._isUTC), ut(t._offset) || (e._offset = t._offset), ut(t._pf) || (e._pf = ue(t)), ut(t._locale) || (e._locale = t._locale), o > 0)
    for (n = 0; n < o; n++)
      r = ja[n], i = t[r], ut(i) || (e[r] = i);
  return e;
}
function Br(e) {
  jo(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), eo === !1 && (eo = !0, L.updateOffset(this), eo = !1);
}
function $t(e) {
  return e instanceof Br || e != null && e._isAMomentObject != null;
}
function hl(e) {
  L.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function xt(e, t) {
  var n = !0;
  return vn(function() {
    if (L.deprecationHandler != null && L.deprecationHandler(null, e), n) {
      var r = [], i, o, a, s = arguments.length;
      for (o = 0; o < s; o++) {
        if (i = "", typeof arguments[o] == "object") {
          i += `
[` + o + "] ";
          for (a in arguments[0])
            xe(arguments[0], a) && (i += a + ": " + arguments[0][a] + ", ");
          i = i.slice(0, -2);
        } else
          i = arguments[o];
        r.push(i);
      }
      hl(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Na = {};
function pl(e, t) {
  L.deprecationHandler != null && L.deprecationHandler(e, t), Na[e] || (hl(t), Na[e] = !0);
}
L.suppressDeprecationWarnings = !1;
L.deprecationHandler = null;
function Ht(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Yf(e) {
  var t, n;
  for (n in e)
    xe(e, n) && (t = e[n], Ht(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function wo(e, t) {
  var n = vn({}, e), r;
  for (r in t)
    xe(t, r) && (Yn(e[r]) && Yn(t[r]) ? (n[r] = {}, vn(n[r], e[r]), vn(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    xe(e, r) && !xe(t, r) && Yn(e[r]) && (n[r] = vn({}, n[r]));
  return n;
}
function No(e) {
  e != null && this.set(e);
}
var _o;
Object.keys ? _o = Object.keys : _o = function(e) {
  var t, n = [];
  for (t in e)
    xe(e, t) && n.push(t);
  return n;
};
var Ff = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Wf(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return Ht(r) ? r.call(t, n) : r;
}
function Yt(e, t, n) {
  var r = "" + Math.abs(e), i = t - r.length, o = e >= 0;
  return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r;
}
var Yo = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ui = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, to = {}, nr = {};
function K(e, t, n, r) {
  var i = r;
  typeof r == "string" && (i = function() {
    return this[r]();
  }), e && (nr[e] = i), t && (nr[t[0]] = function() {
    return Yt(i.apply(this, arguments), t[1], t[2]);
  }), n && (nr[n] = function() {
    return this.localeData().ordinal(
      i.apply(this, arguments),
      e
    );
  });
}
function Vf(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function zf(e) {
  var t = e.match(Yo), n, r;
  for (n = 0, r = t.length; n < r; n++)
    nr[t[n]] ? t[n] = nr[t[n]] : t[n] = Vf(t[n]);
  return function(i) {
    var o = "", a;
    for (a = 0; a < r; a++)
      o += Ht(t[a]) ? t[a].call(i, e) : t[a];
    return o;
  };
}
function fi(e, t) {
  return e.isValid() ? (t = ml(t, e.localeData()), to[t] = to[t] || zf(t), to[t](e)) : e.localeData().invalidDate();
}
function ml(e, t) {
  var n = 5;
  function r(i) {
    return t.longDateFormat(i) || i;
  }
  for (ui.lastIndex = 0; n >= 0 && ui.test(e); )
    e = e.replace(
      ui,
      r
    ), ui.lastIndex = 0, n -= 1;
  return e;
}
var Hf = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Bf(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(Yo).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Uf = "Invalid date";
function qf() {
  return this._invalidDate;
}
var Gf = "%d", Kf = /\d{1,2}/;
function Zf(e) {
  return this._ordinal.replace("%d", e);
}
var Jf = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function Xf(e, t, n, r) {
  var i = this._relativeTime[n];
  return Ht(i) ? i(e, t, n, r) : i.replace(/%d/i, e);
}
function Qf(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return Ht(n) ? n(t) : n.replace(/%s/i, t);
}
var Ya = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function Ct(e) {
  return typeof e == "string" ? Ya[e] || Ya[e.toLowerCase()] : void 0;
}
function Fo(e) {
  var t = {}, n, r;
  for (r in e)
    xe(e, r) && (n = Ct(r), n && (t[n] = e[r]));
  return t;
}
var eh = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function th(e) {
  var t = [], n;
  for (n in e)
    xe(e, n) && t.push({ unit: n, priority: eh[n] });
  return t.sort(function(r, i) {
    return r.priority - i.priority;
  }), t;
}
var gl = /\d/, vt = /\d\d/, bl = /\d{3}/, Wo = /\d{4}/, Di = /[+-]?\d{6}/, Ve = /\d\d?/, vl = /\d\d\d\d?/, yl = /\d\d\d\d\d\d?/, $i = /\d{1,3}/, Vo = /\d{1,4}/, Mi = /[+-]?\d{1,6}/, lr = /\d+/, Ii = /[+-]?\d+/, nh = /Z|[+-]\d\d:?\d\d/gi, Pi = /Z|[+-]\d\d(?::?\d\d)?/gi, rh = /[+-]?\d+(\.\d{1,3})?/, Ur = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, cr = /^[1-9]\d?/, zo = /^([1-9]\d|\d)/, xi;
xi = {};
function F(e, t, n) {
  xi[e] = Ht(t) ? t : function(r, i) {
    return r && n ? n : t;
  };
}
function ih(e, t) {
  return xe(xi, e) ? xi[e](t._strict, t._locale) : new RegExp(oh(e));
}
function oh(e) {
  return on(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, i, o) {
        return n || r || i || o;
      }
    )
  );
}
function on(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function _t(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function ve(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = _t(t)), n;
}
var ko = {};
function Le(e, t) {
  var n, r = t, i;
  for (typeof e == "string" && (e = [e]), sn(t) && (r = function(o, a) {
    a[t] = ve(o);
  }), i = e.length, n = 0; n < i; n++)
    ko[e[n]] = r;
}
function qr(e, t) {
  Le(e, function(n, r, i, o) {
    i._w = i._w || {}, t(n, i._w, i, o);
  });
}
function ah(e, t, n) {
  t != null && xe(ko, e) && ko[e](t, n._a, n, e);
}
function Li(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var st = 0, tn = 1, jt = 2, Qe = 3, Ot = 4, nn = 5, Nn = 6, sh = 7, lh = 8;
K("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Yt(e, 4) : "+" + e;
});
K(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
K(0, ["YYYY", 4], 0, "year");
K(0, ["YYYYY", 5], 0, "year");
K(0, ["YYYYYY", 6, !0], 0, "year");
F("Y", Ii);
F("YY", Ve, vt);
F("YYYY", Vo, Wo);
F("YYYYY", Mi, Di);
F("YYYYYY", Mi, Di);
Le(["YYYYY", "YYYYYY"], st);
Le("YYYY", function(e, t) {
  t[st] = e.length === 2 ? L.parseTwoDigitYear(e) : ve(e);
});
Le("YY", function(e, t) {
  t[st] = L.parseTwoDigitYear(e);
});
Le("Y", function(e, t) {
  t[st] = parseInt(e, 10);
});
function Ar(e) {
  return Li(e) ? 366 : 365;
}
L.parseTwoDigitYear = function(e) {
  return ve(e) + (ve(e) > 68 ? 1900 : 2e3);
};
var wl = ur("FullYear", !0);
function ch() {
  return Li(this.year());
}
function ur(e, t) {
  return function(n) {
    return n != null ? (_l(this, e, n), L.updateOffset(this, t), this) : Nr(this, e);
  };
}
function Nr(e, t) {
  if (!e.isValid())
    return NaN;
  var n = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? n.getUTCMilliseconds() : n.getMilliseconds();
    case "Seconds":
      return r ? n.getUTCSeconds() : n.getSeconds();
    case "Minutes":
      return r ? n.getUTCMinutes() : n.getMinutes();
    case "Hours":
      return r ? n.getUTCHours() : n.getHours();
    case "Date":
      return r ? n.getUTCDate() : n.getDate();
    case "Day":
      return r ? n.getUTCDay() : n.getDay();
    case "Month":
      return r ? n.getUTCMonth() : n.getMonth();
    case "FullYear":
      return r ? n.getUTCFullYear() : n.getFullYear();
    default:
      return NaN;
  }
}
function _l(e, t, n) {
  var r, i, o, a, s;
  if (!(!e.isValid() || isNaN(n))) {
    switch (r = e._d, i = e._isUTC, t) {
      case "Milliseconds":
        return void (i ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
      case "Seconds":
        return void (i ? r.setUTCSeconds(n) : r.setSeconds(n));
      case "Minutes":
        return void (i ? r.setUTCMinutes(n) : r.setMinutes(n));
      case "Hours":
        return void (i ? r.setUTCHours(n) : r.setHours(n));
      case "Date":
        return void (i ? r.setUTCDate(n) : r.setDate(n));
      // case 'Day': // Not real
      //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
      // case 'Month': // Not used because we need to pass two variables
      //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
      case "FullYear":
        break;
      // See below ...
      default:
        return;
    }
    o = n, a = e.month(), s = e.date(), s = s === 29 && a === 1 && !Li(o) ? 28 : s, i ? r.setUTCFullYear(o, a, s) : r.setFullYear(o, a, s);
  }
}
function uh(e) {
  return e = Ct(e), Ht(this[e]) ? this[e]() : this;
}
function dh(e, t) {
  if (typeof e == "object") {
    e = Fo(e);
    var n = th(e), r, i = n.length;
    for (r = 0; r < i; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = Ct(e), Ht(this[e]))
    return this[e](t);
  return this;
}
function fh(e, t) {
  return (e % t + t) % t;
}
var Ze;
Array.prototype.indexOf ? Ze = Array.prototype.indexOf : Ze = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ho(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = fh(t, 12);
  return e += (t - n) / 12, n === 1 ? Li(e) ? 29 : 28 : 31 - n % 7 % 2;
}
K("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
K("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
K("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
F("M", Ve, cr);
F("MM", Ve, vt);
F("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
F("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Le(["M", "MM"], function(e, t) {
  t[tn] = ve(e) - 1;
});
Le(["MMM", "MMMM"], function(e, t, n, r) {
  var i = n._locale.monthsParse(e, r, n._strict);
  i != null ? t[tn] = i : ue(n).invalidMonth = e;
});
var hh = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), kl = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), xl = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, ph = Ur, mh = Ur;
function gh(e, t) {
  return e ? Dt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || xl).test(t) ? "format" : "standalone"][e.month()] : Dt(this._months) ? this._months : this._months.standalone;
}
function bh(e, t) {
  return e ? Dt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[xl.test(t) ? "format" : "standalone"][e.month()] : Dt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function vh(e, t, n) {
  var r, i, o, a = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      o = zt([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        o,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (i = Ze.call(this._shortMonthsParse, a), i !== -1 ? i : null) : (i = Ze.call(this._longMonthsParse, a), i !== -1 ? i : null) : t === "MMM" ? (i = Ze.call(this._shortMonthsParse, a), i !== -1 ? i : (i = Ze.call(this._longMonthsParse, a), i !== -1 ? i : null)) : (i = Ze.call(this._longMonthsParse, a), i !== -1 ? i : (i = Ze.call(this._shortMonthsParse, a), i !== -1 ? i : null));
}
function yh(e, t, n) {
  var r, i, o;
  if (this._monthsParseExact)
    return vh.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (i = zt([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(i, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(i, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[r] && (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!n && this._monthsParse[r].test(e))
      return r;
  }
}
function Cl(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = ve(t);
    else if (t = e.localeData().monthsParse(t), !sn(t))
      return e;
  }
  var n = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, Ho(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), e;
}
function Sl(e) {
  return e != null ? (Cl(this, e), L.updateOffset(this, !0), this) : Nr(this, "Month");
}
function wh() {
  return Ho(this.year(), this.month());
}
function _h(e) {
  return this._monthsParseExact ? (xe(this, "_monthsRegex") || El.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (xe(this, "_monthsShortRegex") || (this._monthsShortRegex = ph), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function kh(e) {
  return this._monthsParseExact ? (xe(this, "_monthsRegex") || El.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (xe(this, "_monthsRegex") || (this._monthsRegex = mh), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function El() {
  function e(c, u) {
    return u.length - c.length;
  }
  var t = [], n = [], r = [], i, o, a, s;
  for (i = 0; i < 12; i++)
    o = zt([2e3, i]), a = on(this.monthsShort(o, "")), s = on(this.months(o, "")), t.push(a), n.push(s), r.push(s), r.push(a);
  t.sort(e), n.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function xh(e, t, n, r, i, o, a) {
  var s;
  return e < 100 && e >= 0 ? (s = new Date(e + 400, t, n, r, i, o, a), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, n, r, i, o, a), s;
}
function Yr(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Ci(e, t, n) {
  var r = 7 + t - n, i = (7 + Yr(e, 0, r).getUTCDay() - t) % 7;
  return -i + r - 1;
}
function Ol(e, t, n, r, i) {
  var o = (7 + n - r) % 7, a = Ci(e, r, i), s = 1 + 7 * (t - 1) + o + a, c, u;
  return s <= 0 ? (c = e - 1, u = Ar(c) + s) : s > Ar(e) ? (c = e + 1, u = s - Ar(e)) : (c = e, u = s), {
    year: c,
    dayOfYear: u
  };
}
function Fr(e, t, n) {
  var r = Ci(e.year(), t, n), i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, o, a;
  return i < 1 ? (a = e.year() - 1, o = i + an(a, t, n)) : i > an(e.year(), t, n) ? (o = i - an(e.year(), t, n), a = e.year() + 1) : (a = e.year(), o = i), {
    week: o,
    year: a
  };
}
function an(e, t, n) {
  var r = Ci(e, t, n), i = Ci(e + 1, t, n);
  return (Ar(e) - r + i) / 7;
}
K("w", ["ww", 2], "wo", "week");
K("W", ["WW", 2], "Wo", "isoWeek");
F("w", Ve, cr);
F("ww", Ve, vt);
F("W", Ve, cr);
F("WW", Ve, vt);
qr(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = ve(e);
  }
);
function Ch(e) {
  return Fr(e, this._week.dow, this._week.doy).week;
}
var Sh = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Eh() {
  return this._week.dow;
}
function Oh() {
  return this._week.doy;
}
function Th(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Rh(e) {
  var t = Fr(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
K("d", 0, "do", "day");
K("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
K("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
K("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
K("e", 0, 0, "weekday");
K("E", 0, 0, "isoWeekday");
F("d", Ve);
F("e", Ve);
F("E", Ve);
F("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
F("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
F("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
qr(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var i = n._locale.weekdaysParse(e, r, n._strict);
  i != null ? t.d = i : ue(n).invalidWeekday = e;
});
qr(["d", "e", "E"], function(e, t, n, r) {
  t[r] = ve(e);
});
function Dh(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function $h(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Bo(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Mh = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Tl = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ih = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ph = Ur, Lh = Ur, Ah = Ur;
function jh(e, t) {
  var n = Dt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Bo(n, this._week.dow) : e ? n[e.day()] : n;
}
function Nh(e) {
  return e === !0 ? Bo(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Yh(e) {
  return e === !0 ? Bo(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Fh(e, t, n) {
  var r, i, o, a = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      o = zt([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        o,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        o,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (i = Ze.call(this._weekdaysParse, a), i !== -1 ? i : null) : t === "ddd" ? (i = Ze.call(this._shortWeekdaysParse, a), i !== -1 ? i : null) : (i = Ze.call(this._minWeekdaysParse, a), i !== -1 ? i : null) : t === "dddd" ? (i = Ze.call(this._weekdaysParse, a), i !== -1 || (i = Ze.call(this._shortWeekdaysParse, a), i !== -1) ? i : (i = Ze.call(this._minWeekdaysParse, a), i !== -1 ? i : null)) : t === "ddd" ? (i = Ze.call(this._shortWeekdaysParse, a), i !== -1 || (i = Ze.call(this._weekdaysParse, a), i !== -1) ? i : (i = Ze.call(this._minWeekdaysParse, a), i !== -1 ? i : null)) : (i = Ze.call(this._minWeekdaysParse, a), i !== -1 || (i = Ze.call(this._weekdaysParse, a), i !== -1) ? i : (i = Ze.call(this._shortWeekdaysParse, a), i !== -1 ? i : null));
}
function Wh(e, t, n) {
  var r, i, o;
  if (this._weekdaysParseExact)
    return Fh.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (i = zt([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!n && this._weekdaysParse[r].test(e))
      return r;
  }
}
function Vh(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Nr(this, "Day");
  return e != null ? (e = Dh(e, this.localeData()), this.add(e - t, "d")) : t;
}
function zh(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Hh(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = $h(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Bh(e) {
  return this._weekdaysParseExact ? (xe(this, "_weekdaysRegex") || Uo.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (xe(this, "_weekdaysRegex") || (this._weekdaysRegex = Ph), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Uh(e) {
  return this._weekdaysParseExact ? (xe(this, "_weekdaysRegex") || Uo.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (xe(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Lh), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function qh(e) {
  return this._weekdaysParseExact ? (xe(this, "_weekdaysRegex") || Uo.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (xe(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ah), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Uo() {
  function e(d, m) {
    return m.length - d.length;
  }
  var t = [], n = [], r = [], i = [], o, a, s, c, u;
  for (o = 0; o < 7; o++)
    a = zt([2e3, 1]).day(o), s = on(this.weekdaysMin(a, "")), c = on(this.weekdaysShort(a, "")), u = on(this.weekdays(a, "")), t.push(s), n.push(c), r.push(u), i.push(s), i.push(c), i.push(u);
  t.sort(e), n.sort(e), r.sort(e), i.sort(e), this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function qo() {
  return this.hours() % 12 || 12;
}
function Gh() {
  return this.hours() || 24;
}
K("H", ["HH", 2], 0, "hour");
K("h", ["hh", 2], 0, qo);
K("k", ["kk", 2], 0, Gh);
K("hmm", 0, 0, function() {
  return "" + qo.apply(this) + Yt(this.minutes(), 2);
});
K("hmmss", 0, 0, function() {
  return "" + qo.apply(this) + Yt(this.minutes(), 2) + Yt(this.seconds(), 2);
});
K("Hmm", 0, 0, function() {
  return "" + this.hours() + Yt(this.minutes(), 2);
});
K("Hmmss", 0, 0, function() {
  return "" + this.hours() + Yt(this.minutes(), 2) + Yt(this.seconds(), 2);
});
function Rl(e, t) {
  K(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Rl("a", !0);
Rl("A", !1);
function Dl(e, t) {
  return t._meridiemParse;
}
F("a", Dl);
F("A", Dl);
F("H", Ve, zo);
F("h", Ve, cr);
F("k", Ve, cr);
F("HH", Ve, vt);
F("hh", Ve, vt);
F("kk", Ve, vt);
F("hmm", vl);
F("hmmss", yl);
F("Hmm", vl);
F("Hmmss", yl);
Le(["H", "HH"], Qe);
Le(["k", "kk"], function(e, t, n) {
  var r = ve(e);
  t[Qe] = r === 24 ? 0 : r;
});
Le(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
Le(["h", "hh"], function(e, t, n) {
  t[Qe] = ve(e), ue(n).bigHour = !0;
});
Le("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[Qe] = ve(e.substr(0, r)), t[Ot] = ve(e.substr(r)), ue(n).bigHour = !0;
});
Le("hmmss", function(e, t, n) {
  var r = e.length - 4, i = e.length - 2;
  t[Qe] = ve(e.substr(0, r)), t[Ot] = ve(e.substr(r, 2)), t[nn] = ve(e.substr(i)), ue(n).bigHour = !0;
});
Le("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[Qe] = ve(e.substr(0, r)), t[Ot] = ve(e.substr(r));
});
Le("Hmmss", function(e, t, n) {
  var r = e.length - 4, i = e.length - 2;
  t[Qe] = ve(e.substr(0, r)), t[Ot] = ve(e.substr(r, 2)), t[nn] = ve(e.substr(i));
});
function Kh(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Zh = /[ap]\.?m?\.?/i, Jh = ur("Hours", !0);
function Xh(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var $l = {
  calendar: Ff,
  longDateFormat: Hf,
  invalidDate: Uf,
  ordinal: Gf,
  dayOfMonthOrdinalParse: Kf,
  relativeTime: Jf,
  months: hh,
  monthsShort: kl,
  week: Sh,
  weekdays: Mh,
  weekdaysMin: Ih,
  weekdaysShort: Tl,
  meridiemParse: Zh
}, Ue = {}, mr = {}, Wr;
function Qh(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function Fa(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function ep(e) {
  for (var t = 0, n, r, i, o; t < e.length; ) {
    for (o = Fa(e[t]).split("-"), n = o.length, r = Fa(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (i = Ai(o.slice(0, n).join("-")), i)
        return i;
      if (r && r.length >= n && Qh(o, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return Wr;
}
function tp(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Ai(e) {
  var t = null, n;
  if (Ue[e] === void 0 && typeof module < "u" && module && module.exports && tp(e))
    try {
      t = Wr._abbr, n = require, n("./locale/" + e), _n(t);
    } catch {
      Ue[e] = null;
    }
  return Ue[e];
}
function _n(e, t) {
  var n;
  return e && (ut(t) ? n = un(e) : n = Go(e, t), n ? Wr = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Wr._abbr;
}
function Go(e, t) {
  if (t !== null) {
    var n, r = $l;
    if (t.abbr = e, Ue[e] != null)
      pl(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = Ue[e]._config;
    else if (t.parentLocale != null)
      if (Ue[t.parentLocale] != null)
        r = Ue[t.parentLocale]._config;
      else if (n = Ai(t.parentLocale), n != null)
        r = n._config;
      else
        return mr[t.parentLocale] || (mr[t.parentLocale] = []), mr[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Ue[e] = new No(wo(r, t)), mr[e] && mr[e].forEach(function(i) {
      Go(i.name, i.config);
    }), _n(e), Ue[e];
  } else
    return delete Ue[e], null;
}
function np(e, t) {
  if (t != null) {
    var n, r, i = $l;
    Ue[e] != null && Ue[e].parentLocale != null ? Ue[e].set(wo(Ue[e]._config, t)) : (r = Ai(e), r != null && (i = r._config), t = wo(i, t), r == null && (t.abbr = e), n = new No(t), n.parentLocale = Ue[e], Ue[e] = n), _n(e);
  } else
    Ue[e] != null && (Ue[e].parentLocale != null ? (Ue[e] = Ue[e].parentLocale, e === _n() && _n(e)) : Ue[e] != null && delete Ue[e]);
  return Ue[e];
}
function un(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Wr;
  if (!Dt(e)) {
    if (t = Ai(e), t)
      return t;
    e = [e];
  }
  return ep(e);
}
function rp() {
  return _o(Ue);
}
function Ko(e) {
  var t, n = e._a;
  return n && ue(e).overflow === -2 && (t = n[tn] < 0 || n[tn] > 11 ? tn : n[jt] < 1 || n[jt] > Ho(n[st], n[tn]) ? jt : n[Qe] < 0 || n[Qe] > 24 || n[Qe] === 24 && (n[Ot] !== 0 || n[nn] !== 0 || n[Nn] !== 0) ? Qe : n[Ot] < 0 || n[Ot] > 59 ? Ot : n[nn] < 0 || n[nn] > 59 ? nn : n[Nn] < 0 || n[Nn] > 999 ? Nn : -1, ue(e)._overflowDayOfYear && (t < st || t > jt) && (t = jt), ue(e)._overflowWeeks && t === -1 && (t = sh), ue(e)._overflowWeekday && t === -1 && (t = lh), ue(e).overflow = t), e;
}
var ip = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, op = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ap = /Z|[+-]\d\d(?::?\d\d)?/, di = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], no = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], sp = /^\/?Date\((-?\d+)/i, lp = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, cp = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Ml(e) {
  var t, n, r = e._i, i = ip.exec(r) || op.exec(r), o, a, s, c, u = di.length, d = no.length;
  if (i) {
    for (ue(e).iso = !0, t = 0, n = u; t < n; t++)
      if (di[t][1].exec(i[1])) {
        a = di[t][0], o = di[t][2] !== !1;
        break;
      }
    if (a == null) {
      e._isValid = !1;
      return;
    }
    if (i[3]) {
      for (t = 0, n = d; t < n; t++)
        if (no[t][1].exec(i[3])) {
          s = (i[2] || " ") + no[t][0];
          break;
        }
      if (s == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!o && s != null) {
      e._isValid = !1;
      return;
    }
    if (i[4])
      if (ap.exec(i[4]))
        c = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = a + (s || "") + (c || ""), Jo(e);
  } else
    e._isValid = !1;
}
function up(e, t, n, r, i, o) {
  var a = [
    dp(e),
    kl.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(i, 10)
  ];
  return o && a.push(parseInt(o, 10)), a;
}
function dp(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function fp(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function hp(e, t, n) {
  if (e) {
    var r = Tl.indexOf(e), i = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== i)
      return ue(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function pp(e, t, n) {
  if (e)
    return cp[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), i = r % 100, o = (r - i) / 100;
  return o * 60 + i;
}
function Il(e) {
  var t = lp.exec(fp(e._i)), n;
  if (t) {
    if (n = up(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !hp(t[1], n, e))
      return;
    e._a = n, e._tzm = pp(t[8], t[9], t[10]), e._d = Yr.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), ue(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function mp(e) {
  var t = sp.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Ml(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Il(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : L.createFromInputFallback(e);
}
L.createFromInputFallback = xt(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Qn(e, t, n) {
  return e ?? t ?? n;
}
function gp(e) {
  var t = new Date(L.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Zo(e) {
  var t, n, r = [], i, o, a;
  if (!e._d) {
    for (i = gp(e), e._w && e._a[jt] == null && e._a[tn] == null && bp(e), e._dayOfYear != null && (a = Qn(e._a[st], i[st]), (e._dayOfYear > Ar(a) || e._dayOfYear === 0) && (ue(e)._overflowDayOfYear = !0), n = Yr(a, 0, e._dayOfYear), e._a[tn] = n.getUTCMonth(), e._a[jt] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = i[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Qe] === 24 && e._a[Ot] === 0 && e._a[nn] === 0 && e._a[Nn] === 0 && (e._nextDay = !0, e._a[Qe] = 0), e._d = (e._useUTC ? Yr : xh).apply(
      null,
      r
    ), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Qe] = 24), e._w && typeof e._w.d < "u" && e._w.d !== o && (ue(e).weekdayMismatch = !0);
  }
}
function bp(e) {
  var t, n, r, i, o, a, s, c, u;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (o = 1, a = 4, n = Qn(
    t.GG,
    e._a[st],
    Fr(We(), 1, 4).year
  ), r = Qn(t.W, 1), i = Qn(t.E, 1), (i < 1 || i > 7) && (c = !0)) : (o = e._locale._week.dow, a = e._locale._week.doy, u = Fr(We(), o, a), n = Qn(t.gg, e._a[st], u.year), r = Qn(t.w, u.week), t.d != null ? (i = t.d, (i < 0 || i > 6) && (c = !0)) : t.e != null ? (i = t.e + o, (t.e < 0 || t.e > 6) && (c = !0)) : i = o), r < 1 || r > an(n, o, a) ? ue(e)._overflowWeeks = !0 : c != null ? ue(e)._overflowWeekday = !0 : (s = Ol(n, r, i, o, a), e._a[st] = s.year, e._dayOfYear = s.dayOfYear);
}
L.ISO_8601 = function() {
};
L.RFC_2822 = function() {
};
function Jo(e) {
  if (e._f === L.ISO_8601) {
    Ml(e);
    return;
  }
  if (e._f === L.RFC_2822) {
    Il(e);
    return;
  }
  e._a = [], ue(e).empty = !0;
  var t = "" + e._i, n, r, i, o, a, s = t.length, c = 0, u, d;
  for (i = ml(e._f, e._locale).match(Yo) || [], d = i.length, n = 0; n < d; n++)
    o = i[n], r = (t.match(ih(o, e)) || [])[0], r && (a = t.substr(0, t.indexOf(r)), a.length > 0 && ue(e).unusedInput.push(a), t = t.slice(
      t.indexOf(r) + r.length
    ), c += r.length), nr[o] ? (r ? ue(e).empty = !1 : ue(e).unusedTokens.push(o), ah(o, r, e)) : e._strict && !r && ue(e).unusedTokens.push(o);
  ue(e).charsLeftOver = s - c, t.length > 0 && ue(e).unusedInput.push(t), e._a[Qe] <= 12 && ue(e).bigHour === !0 && e._a[Qe] > 0 && (ue(e).bigHour = void 0), ue(e).parsedDateParts = e._a.slice(0), ue(e).meridiem = e._meridiem, e._a[Qe] = vp(
    e._locale,
    e._a[Qe],
    e._meridiem
  ), u = ue(e).era, u !== null && (e._a[st] = e._locale.erasConvertYear(u, e._a[st])), Zo(e), Ko(e);
}
function vp(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function yp(e) {
  var t, n, r, i, o, a, s = !1, c = e._f.length;
  if (c === 0) {
    ue(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (i = 0; i < c; i++)
    o = 0, a = !1, t = jo({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[i], Jo(t), Ao(t) && (a = !0), o += ue(t).charsLeftOver, o += ue(t).unusedTokens.length * 10, ue(t).score = o, s ? o < r && (r = o, n = t) : (r == null || o < r || a) && (r = o, n = t, a && (s = !0));
  vn(e, n || t);
}
function wp(e) {
  if (!e._d) {
    var t = Fo(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = fl(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Zo(e);
  }
}
function _p(e) {
  var t = new Br(Ko(Pl(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Pl(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || un(e._l), t === null || n === void 0 && t === "" ? Ri({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), $t(t) ? new Br(Ko(t)) : (Hr(t) ? e._d = t : Dt(n) ? yp(e) : n ? Jo(e) : kp(e), Ao(e) || (e._d = null), e));
}
function kp(e) {
  var t = e._i;
  ut(t) ? e._d = new Date(L.now()) : Hr(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? mp(e) : Dt(t) ? (e._a = fl(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Zo(e)) : Yn(t) ? wp(e) : sn(t) ? e._d = new Date(t) : L.createFromInputFallback(e);
}
function Ll(e, t, n, r, i) {
  var o = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (Yn(e) && Lo(e) || Dt(e) && e.length === 0) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = i, o._l = n, o._i = e, o._f = t, o._strict = r, _p(o);
}
function We(e, t, n, r) {
  return Ll(e, t, n, r, !1);
}
var xp = xt(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = We.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ri();
  }
), Cp = xt(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = We.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ri();
  }
);
function Al(e, t) {
  var n, r;
  if (t.length === 1 && Dt(t[0]) && (t = t[0]), !t.length)
    return We();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function Sp() {
  var e = [].slice.call(arguments, 0);
  return Al("isBefore", e);
}
function Ep() {
  var e = [].slice.call(arguments, 0);
  return Al("isAfter", e);
}
var Op = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, gr = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Tp(e) {
  var t, n = !1, r, i = gr.length;
  for (t in e)
    if (xe(e, t) && !(Ze.call(gr, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < i; ++r)
    if (e[gr[r]]) {
      if (n)
        return !1;
      parseFloat(e[gr[r]]) !== ve(e[gr[r]]) && (n = !0);
    }
  return !0;
}
function Rp() {
  return this._isValid;
}
function Dp() {
  return Mt(NaN);
}
function ji(e) {
  var t = Fo(e), n = t.year || 0, r = t.quarter || 0, i = t.month || 0, o = t.week || t.isoWeek || 0, a = t.day || 0, s = t.hour || 0, c = t.minute || 0, u = t.second || 0, d = t.millisecond || 0;
  this._isValid = Tp(t), this._milliseconds = +d + u * 1e3 + // 1000
  c * 6e4 + // 1000 * 60
  s * 1e3 * 60 * 60, this._days = +a + o * 7, this._months = +i + r * 3 + n * 12, this._data = {}, this._locale = un(), this._bubble();
}
function hi(e) {
  return e instanceof ji;
}
function xo(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function $p(e, t, n) {
  var r = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), o = 0, a;
  for (a = 0; a < r; a++)
    ve(e[a]) !== ve(t[a]) && o++;
  return o + i;
}
function jl(e, t) {
  K(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + Yt(~~(n / 60), 2) + t + Yt(~~n % 60, 2);
  });
}
jl("Z", ":");
jl("ZZ", "");
F("Z", Pi);
F("ZZ", Pi);
Le(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = Xo(Pi, e);
});
var Mp = /([\+\-]|\d\d)/gi;
function Xo(e, t) {
  var n = (t || "").match(e), r, i, o;
  return n === null ? null : (r = n[n.length - 1] || [], i = (r + "").match(Mp) || ["-", 0, 0], o = +(i[1] * 60) + ve(i[2]), o === 0 ? 0 : i[0] === "+" ? o : -o);
}
function Qo(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = ($t(e) || Hr(e) ? e.valueOf() : We(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), L.updateOffset(n, !1), n) : We(e).local();
}
function Co(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
L.updateOffset = function() {
};
function Ip(e, t, n) {
  var r = this._offset || 0, i;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Xo(Pi, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (i = Co(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? Fl(
      this,
      Mt(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, L.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Co(this);
}
function Pp(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Lp(e) {
  return this.utcOffset(0, e);
}
function Ap(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Co(this), "m")), this;
}
function jp() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Xo(nh, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Np(e) {
  return this.isValid() ? (e = e ? We(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Yp() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Fp() {
  if (!ut(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return jo(e, this), e = Pl(e), e._a ? (t = e._isUTC ? zt(e._a) : We(e._a), this._isDSTShifted = this.isValid() && $p(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Wp() {
  return this.isValid() ? !this._isUTC : !1;
}
function Vp() {
  return this.isValid() ? this._isUTC : !1;
}
function Nl() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var zp = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Hp = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Mt(e, t) {
  var n = e, r = null, i, o, a;
  return hi(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : sn(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = zp.exec(e)) ? (i = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: ve(r[jt]) * i,
    h: ve(r[Qe]) * i,
    m: ve(r[Ot]) * i,
    s: ve(r[nn]) * i,
    ms: ve(xo(r[Nn] * 1e3)) * i
    // the millisecond decimal point is included in the match
  }) : (r = Hp.exec(e)) ? (i = r[1] === "-" ? -1 : 1, n = {
    y: Tn(r[2], i),
    M: Tn(r[3], i),
    w: Tn(r[4], i),
    d: Tn(r[5], i),
    h: Tn(r[6], i),
    m: Tn(r[7], i),
    s: Tn(r[8], i)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (a = Bp(
    We(n.from),
    We(n.to)
  ), n = {}, n.ms = a.milliseconds, n.M = a.months), o = new ji(n), hi(e) && xe(e, "_locale") && (o._locale = e._locale), hi(e) && xe(e, "_isValid") && (o._isValid = e._isValid), o;
}
Mt.fn = ji.prototype;
Mt.invalid = Dp;
function Tn(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Wa(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Bp(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = Qo(t, e), e.isBefore(t) ? n = Wa(e, t) : (n = Wa(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function Yl(e, t) {
  return function(n, r) {
    var i, o;
    return r !== null && !isNaN(+r) && (pl(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), o = n, n = r, r = o), i = Mt(n, r), Fl(this, i, e), this;
  };
}
function Fl(e, t, n, r) {
  var i = t._milliseconds, o = xo(t._days), a = xo(t._months);
  e.isValid() && (r = r ?? !0, a && Cl(e, Nr(e, "Month") + a * n), o && _l(e, "Date", Nr(e, "Date") + o * n), i && e._d.setTime(e._d.valueOf() + i * n), r && L.updateOffset(e, o || a));
}
var Up = Yl(1, "add"), qp = Yl(-1, "subtract");
function Wl(e) {
  return typeof e == "string" || e instanceof String;
}
function Gp(e) {
  return $t(e) || Hr(e) || Wl(e) || sn(e) || Zp(e) || Kp(e) || e === null || e === void 0;
}
function Kp(e) {
  var t = Yn(e) && !Lo(e), n = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], i, o, a = r.length;
  for (i = 0; i < a; i += 1)
    o = r[i], n = n || xe(e, o);
  return t && n;
}
function Zp(e) {
  var t = Dt(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !sn(r) && Wl(e);
  }).length === 0), t && n;
}
function Jp(e) {
  var t = Yn(e) && !Lo(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], i, o;
  for (i = 0; i < r.length; i += 1)
    o = r[i], n = n || xe(e, o);
  return t && n;
}
function Xp(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function Qp(e, t) {
  arguments.length === 1 && (arguments[0] ? Gp(arguments[0]) ? (e = arguments[0], t = void 0) : Jp(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || We(), r = Qo(n, this).startOf("day"), i = L.calendarFormat(this, r) || "sameElse", o = t && (Ht(t[i]) ? t[i].call(this, n) : t[i]);
  return this.format(
    o || this.localeData().calendar(i, this, We(n))
  );
}
function em() {
  return new Br(this);
}
function tm(e, t) {
  var n = $t(e) ? e : We(e);
  return this.isValid() && n.isValid() ? (t = Ct(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function nm(e, t) {
  var n = $t(e) ? e : We(e);
  return this.isValid() && n.isValid() ? (t = Ct(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function rm(e, t, n, r) {
  var i = $t(e) ? e : We(e), o = $t(t) ? t : We(t);
  return this.isValid() && i.isValid() && o.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(i, n) : !this.isBefore(i, n)) && (r[1] === ")" ? this.isBefore(o, n) : !this.isAfter(o, n))) : !1;
}
function im(e, t) {
  var n = $t(e) ? e : We(e), r;
  return this.isValid() && n.isValid() ? (t = Ct(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function om(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function am(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function sm(e, t, n) {
  var r, i, o;
  if (!this.isValid())
    return NaN;
  if (r = Qo(e, this), !r.isValid())
    return NaN;
  switch (i = (r.utcOffset() - this.utcOffset()) * 6e4, t = Ct(t), t) {
    case "year":
      o = pi(this, r) / 12;
      break;
    case "month":
      o = pi(this, r);
      break;
    case "quarter":
      o = pi(this, r) / 3;
      break;
    case "second":
      o = (this - r) / 1e3;
      break;
    // 1000
    case "minute":
      o = (this - r) / 6e4;
      break;
    // 1000 * 60
    case "hour":
      o = (this - r) / 36e5;
      break;
    // 1000 * 60 * 60
    case "day":
      o = (this - r - i) / 864e5;
      break;
    // 1000 * 60 * 60 * 24, negate dst
    case "week":
      o = (this - r - i) / 6048e5;
      break;
    // 1000 * 60 * 60 * 24 * 7, negate dst
    default:
      o = this - r;
  }
  return n ? o : _t(o);
}
function pi(e, t) {
  if (e.date() < t.date())
    return -pi(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), i, o;
  return t - r < 0 ? (i = e.clone().add(n - 1, "months"), o = (t - r) / (r - i)) : (i = e.clone().add(n + 1, "months"), o = (t - r) / (i - r)), -(n + o) || 0;
}
L.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
L.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function lm() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function cm(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? fi(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Ht(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", fi(n, "Z")) : fi(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function um() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, i, o;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", o = t + '[")]', this.format(n + r + i + o);
}
function dm(e) {
  e || (e = this.isUtc() ? L.defaultFormatUtc : L.defaultFormat);
  var t = fi(this, e);
  return this.localeData().postformat(t);
}
function fm(e, t) {
  return this.isValid() && ($t(e) && e.isValid() || We(e).isValid()) ? Mt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function hm(e) {
  return this.from(We(), e);
}
function pm(e, t) {
  return this.isValid() && ($t(e) && e.isValid() || We(e).isValid()) ? Mt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function mm(e) {
  return this.to(We(), e);
}
function Vl(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = un(e), t != null && (this._locale = t), this);
}
var zl = xt(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Hl() {
  return this._locale;
}
var Si = 1e3, rr = 60 * Si, Ei = 60 * rr, Bl = (365 * 400 + 97) * 24 * Ei;
function ir(e, t) {
  return (e % t + t) % t;
}
function Ul(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Bl : new Date(e, t, n).valueOf();
}
function ql(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Bl : Date.UTC(e, t, n);
}
function gm(e) {
  var t, n;
  if (e = Ct(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? ql : Ul, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= ir(
        t + (this._isUTC ? 0 : this.utcOffset() * rr),
        Ei
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= ir(t, rr);
      break;
    case "second":
      t = this._d.valueOf(), t -= ir(t, Si);
      break;
  }
  return this._d.setTime(t), L.updateOffset(this, !0), this;
}
function bm(e) {
  var t, n;
  if (e = Ct(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? ql : Ul, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Ei - ir(
        t + (this._isUTC ? 0 : this.utcOffset() * rr),
        Ei
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += rr - ir(t, rr) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Si - ir(t, Si) - 1;
      break;
  }
  return this._d.setTime(t), L.updateOffset(this, !0), this;
}
function vm() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function ym() {
  return Math.floor(this.valueOf() / 1e3);
}
function wm() {
  return new Date(this.valueOf());
}
function _m() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function km() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function xm() {
  return this.isValid() ? this.toISOString() : null;
}
function Cm() {
  return Ao(this);
}
function Sm() {
  return vn({}, ue(this));
}
function Em() {
  return ue(this).overflow;
}
function Om() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
K("N", 0, 0, "eraAbbr");
K("NN", 0, 0, "eraAbbr");
K("NNN", 0, 0, "eraAbbr");
K("NNNN", 0, 0, "eraName");
K("NNNNN", 0, 0, "eraNarrow");
K("y", ["y", 1], "yo", "eraYear");
K("y", ["yy", 2], 0, "eraYear");
K("y", ["yyy", 3], 0, "eraYear");
K("y", ["yyyy", 4], 0, "eraYear");
F("N", ea);
F("NN", ea);
F("NNN", ea);
F("NNNN", Nm);
F("NNNNN", Ym);
Le(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var i = n._locale.erasParse(e, r, n._strict);
    i ? ue(n).era = i : ue(n).invalidEra = e;
  }
);
F("y", lr);
F("yy", lr);
F("yyy", lr);
F("yyyy", lr);
F("yo", Fm);
Le(["y", "yy", "yyy", "yyyy"], st);
Le(["yo"], function(e, t, n, r) {
  var i;
  n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[st] = n._locale.eraYearOrdinalParse(e, i) : t[st] = parseInt(e, 10);
});
function Tm(e, t) {
  var n, r, i, o = this._eras || un("en")._eras;
  for (n = 0, r = o.length; n < r; ++n) {
    switch (typeof o[n].since) {
      case "string":
        i = L(o[n].since).startOf("day"), o[n].since = i.valueOf();
        break;
    }
    switch (typeof o[n].until) {
      case "undefined":
        o[n].until = 1 / 0;
        break;
      case "string":
        i = L(o[n].until).startOf("day").valueOf(), o[n].until = i.valueOf();
        break;
    }
  }
  return o;
}
function Rm(e, t, n) {
  var r, i, o = this.eras(), a, s, c;
  for (e = e.toUpperCase(), r = 0, i = o.length; r < i; ++r)
    if (a = o[r].name.toUpperCase(), s = o[r].abbr.toUpperCase(), c = o[r].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (s === e)
            return o[r];
          break;
        case "NNNN":
          if (a === e)
            return o[r];
          break;
        case "NNNNN":
          if (c === e)
            return o[r];
          break;
      }
    else if ([a, s, c].indexOf(e) >= 0)
      return o[r];
}
function Dm(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? L(e.since).year() : L(e.since).year() + (t - e.offset) * n;
}
function $m() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function Mm() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function Im() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function Pm() {
  var e, t, n, r, i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (n = i[e].since <= i[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), i[e].since <= r && r <= i[e].until || i[e].until <= r && r <= i[e].since)
      return (this.year() - L(i[e].since).year()) * n + i[e].offset;
  return this.year();
}
function Lm(e) {
  return xe(this, "_erasNameRegex") || ta.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Am(e) {
  return xe(this, "_erasAbbrRegex") || ta.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function jm(e) {
  return xe(this, "_erasNarrowRegex") || ta.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function ea(e, t) {
  return t.erasAbbrRegex(e);
}
function Nm(e, t) {
  return t.erasNameRegex(e);
}
function Ym(e, t) {
  return t.erasNarrowRegex(e);
}
function Fm(e, t) {
  return t._eraYearOrdinalRegex || lr;
}
function ta() {
  var e = [], t = [], n = [], r = [], i, o, a, s, c, u = this.eras();
  for (i = 0, o = u.length; i < o; ++i)
    a = on(u[i].name), s = on(u[i].abbr), c = on(u[i].narrow), t.push(a), e.push(s), n.push(c), r.push(a), r.push(s), r.push(c);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
K(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
K(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ni(e, t) {
  K(0, [e, e.length], 0, t);
}
Ni("gggg", "weekYear");
Ni("ggggg", "weekYear");
Ni("GGGG", "isoWeekYear");
Ni("GGGGG", "isoWeekYear");
F("G", Ii);
F("g", Ii);
F("GG", Ve, vt);
F("gg", Ve, vt);
F("GGGG", Vo, Wo);
F("gggg", Vo, Wo);
F("GGGGG", Mi, Di);
F("ggggg", Mi, Di);
qr(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = ve(e);
  }
);
qr(["gg", "GG"], function(e, t, n, r) {
  t[r] = L.parseTwoDigitYear(e);
});
function Wm(e) {
  return Gl.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Vm(e) {
  return Gl.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function zm() {
  return an(this.year(), 1, 4);
}
function Hm() {
  return an(this.isoWeekYear(), 1, 4);
}
function Bm() {
  var e = this.localeData()._week;
  return an(this.year(), e.dow, e.doy);
}
function Um() {
  var e = this.localeData()._week;
  return an(this.weekYear(), e.dow, e.doy);
}
function Gl(e, t, n, r, i) {
  var o;
  return e == null ? Fr(this, r, i).year : (o = an(e, r, i), t > o && (t = o), qm.call(this, e, t, n, r, i));
}
function qm(e, t, n, r, i) {
  var o = Ol(e, t, n, r, i), a = Yr(o.year, 0, o.dayOfYear);
  return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
}
K("Q", 0, "Qo", "quarter");
F("Q", gl);
Le("Q", function(e, t) {
  t[tn] = (ve(e) - 1) * 3;
});
function Gm(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
K("D", ["DD", 2], "Do", "date");
F("D", Ve, cr);
F("DD", Ve, vt);
F("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Le(["D", "DD"], jt);
Le("Do", function(e, t) {
  t[jt] = ve(e.match(Ve)[0]);
});
var Kl = ur("Date", !0);
K("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
F("DDD", $i);
F("DDDD", bl);
Le(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = ve(e);
});
function Km(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
K("m", ["mm", 2], 0, "minute");
F("m", Ve, zo);
F("mm", Ve, vt);
Le(["m", "mm"], Ot);
var Zm = ur("Minutes", !1);
K("s", ["ss", 2], 0, "second");
F("s", Ve, zo);
F("ss", Ve, vt);
Le(["s", "ss"], nn);
var Jm = ur("Seconds", !1);
K("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
K(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
K(0, ["SSS", 3], 0, "millisecond");
K(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
K(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
K(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
K(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
K(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
K(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
F("S", $i, gl);
F("SS", $i, vt);
F("SSS", $i, bl);
var yn, Zl;
for (yn = "SSSS"; yn.length <= 9; yn += "S")
  F(yn, lr);
function Xm(e, t) {
  t[Nn] = ve(("0." + e) * 1e3);
}
for (yn = "S"; yn.length <= 9; yn += "S")
  Le(yn, Xm);
Zl = ur("Milliseconds", !1);
K("z", 0, 0, "zoneAbbr");
K("zz", 0, 0, "zoneName");
function Qm() {
  return this._isUTC ? "UTC" : "";
}
function eg() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var C = Br.prototype;
C.add = Up;
C.calendar = Qp;
C.clone = em;
C.diff = sm;
C.endOf = bm;
C.format = dm;
C.from = fm;
C.fromNow = hm;
C.to = pm;
C.toNow = mm;
C.get = uh;
C.invalidAt = Em;
C.isAfter = tm;
C.isBefore = nm;
C.isBetween = rm;
C.isSame = im;
C.isSameOrAfter = om;
C.isSameOrBefore = am;
C.isValid = Cm;
C.lang = zl;
C.locale = Vl;
C.localeData = Hl;
C.max = Cp;
C.min = xp;
C.parsingFlags = Sm;
C.set = dh;
C.startOf = gm;
C.subtract = qp;
C.toArray = _m;
C.toObject = km;
C.toDate = wm;
C.toISOString = cm;
C.inspect = um;
typeof Symbol < "u" && Symbol.for != null && (C[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
C.toJSON = xm;
C.toString = lm;
C.unix = ym;
C.valueOf = vm;
C.creationData = Om;
C.eraName = $m;
C.eraNarrow = Mm;
C.eraAbbr = Im;
C.eraYear = Pm;
C.year = wl;
C.isLeapYear = ch;
C.weekYear = Wm;
C.isoWeekYear = Vm;
C.quarter = C.quarters = Gm;
C.month = Sl;
C.daysInMonth = wh;
C.week = C.weeks = Th;
C.isoWeek = C.isoWeeks = Rh;
C.weeksInYear = Bm;
C.weeksInWeekYear = Um;
C.isoWeeksInYear = zm;
C.isoWeeksInISOWeekYear = Hm;
C.date = Kl;
C.day = C.days = Vh;
C.weekday = zh;
C.isoWeekday = Hh;
C.dayOfYear = Km;
C.hour = C.hours = Jh;
C.minute = C.minutes = Zm;
C.second = C.seconds = Jm;
C.millisecond = C.milliseconds = Zl;
C.utcOffset = Ip;
C.utc = Lp;
C.local = Ap;
C.parseZone = jp;
C.hasAlignedHourOffset = Np;
C.isDST = Yp;
C.isLocal = Wp;
C.isUtcOffset = Vp;
C.isUtc = Nl;
C.isUTC = Nl;
C.zoneAbbr = Qm;
C.zoneName = eg;
C.dates = xt(
  "dates accessor is deprecated. Use date instead.",
  Kl
);
C.months = xt(
  "months accessor is deprecated. Use month instead",
  Sl
);
C.years = xt(
  "years accessor is deprecated. Use year instead",
  wl
);
C.zone = xt(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Pp
);
C.isDSTShifted = xt(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Fp
);
function tg(e) {
  return We(e * 1e3);
}
function ng() {
  return We.apply(null, arguments).parseZone();
}
function Jl(e) {
  return e;
}
var Ce = No.prototype;
Ce.calendar = Wf;
Ce.longDateFormat = Bf;
Ce.invalidDate = qf;
Ce.ordinal = Zf;
Ce.preparse = Jl;
Ce.postformat = Jl;
Ce.relativeTime = Xf;
Ce.pastFuture = Qf;
Ce.set = Yf;
Ce.eras = Tm;
Ce.erasParse = Rm;
Ce.erasConvertYear = Dm;
Ce.erasAbbrRegex = Am;
Ce.erasNameRegex = Lm;
Ce.erasNarrowRegex = jm;
Ce.months = gh;
Ce.monthsShort = bh;
Ce.monthsParse = yh;
Ce.monthsRegex = kh;
Ce.monthsShortRegex = _h;
Ce.week = Ch;
Ce.firstDayOfYear = Oh;
Ce.firstDayOfWeek = Eh;
Ce.weekdays = jh;
Ce.weekdaysMin = Yh;
Ce.weekdaysShort = Nh;
Ce.weekdaysParse = Wh;
Ce.weekdaysRegex = Bh;
Ce.weekdaysShortRegex = Uh;
Ce.weekdaysMinRegex = qh;
Ce.isPM = Kh;
Ce.meridiem = Xh;
function Oi(e, t, n, r) {
  var i = un(), o = zt().set(r, t);
  return i[n](o, e);
}
function Xl(e, t, n) {
  if (sn(e) && (t = e, e = void 0), e = e || "", t != null)
    return Oi(e, t, n, "month");
  var r, i = [];
  for (r = 0; r < 12; r++)
    i[r] = Oi(e, r, n, "month");
  return i;
}
function na(e, t, n, r) {
  typeof e == "boolean" ? (sn(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, sn(t) && (n = t, t = void 0), t = t || "");
  var i = un(), o = e ? i._week.dow : 0, a, s = [];
  if (n != null)
    return Oi(t, (n + o) % 7, r, "day");
  for (a = 0; a < 7; a++)
    s[a] = Oi(t, (a + o) % 7, r, "day");
  return s;
}
function rg(e, t) {
  return Xl(e, t, "months");
}
function ig(e, t) {
  return Xl(e, t, "monthsShort");
}
function og(e, t, n) {
  return na(e, t, n, "weekdays");
}
function ag(e, t, n) {
  return na(e, t, n, "weekdaysShort");
}
function sg(e, t, n) {
  return na(e, t, n, "weekdaysMin");
}
_n("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, n = ve(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
L.lang = xt(
  "moment.lang is deprecated. Use moment.locale instead.",
  _n
);
L.langData = xt(
  "moment.langData is deprecated. Use moment.localeData instead.",
  un
);
var Zt = Math.abs;
function lg() {
  var e = this._data;
  return this._milliseconds = Zt(this._milliseconds), this._days = Zt(this._days), this._months = Zt(this._months), e.milliseconds = Zt(e.milliseconds), e.seconds = Zt(e.seconds), e.minutes = Zt(e.minutes), e.hours = Zt(e.hours), e.months = Zt(e.months), e.years = Zt(e.years), this;
}
function Ql(e, t, n, r) {
  var i = Mt(t, n);
  return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble();
}
function cg(e, t) {
  return Ql(this, e, t, 1);
}
function ug(e, t) {
  return Ql(this, e, t, -1);
}
function Va(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function dg() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, i, o, a, s, c;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Va(So(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, i = _t(e / 1e3), r.seconds = i % 60, o = _t(i / 60), r.minutes = o % 60, a = _t(o / 60), r.hours = a % 24, t += _t(a / 24), c = _t(ec(t)), n += c, t -= Va(So(c)), s = _t(n / 12), n %= 12, r.days = t, r.months = n, r.years = s, this;
}
function ec(e) {
  return e * 4800 / 146097;
}
function So(e) {
  return e * 146097 / 4800;
}
function fg(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = Ct(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + ec(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(So(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      // Math.floor prevents floating point math errors here
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function dn(e) {
  return function() {
    return this.as(e);
  };
}
var tc = dn("ms"), hg = dn("s"), pg = dn("m"), mg = dn("h"), gg = dn("d"), bg = dn("w"), vg = dn("M"), yg = dn("Q"), wg = dn("y"), _g = tc;
function kg() {
  return Mt(this);
}
function xg(e) {
  return e = Ct(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Vn(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Cg = Vn("milliseconds"), Sg = Vn("seconds"), Eg = Vn("minutes"), Og = Vn("hours"), Tg = Vn("days"), Rg = Vn("months"), Dg = Vn("years");
function $g() {
  return _t(this.days() / 7);
}
var Xt = Math.round, er = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Mg(e, t, n, r, i) {
  return i.relativeTime(t || 1, !!n, e, r);
}
function Ig(e, t, n, r) {
  var i = Mt(e).abs(), o = Xt(i.as("s")), a = Xt(i.as("m")), s = Xt(i.as("h")), c = Xt(i.as("d")), u = Xt(i.as("M")), d = Xt(i.as("w")), m = Xt(i.as("y")), v = o <= n.ss && ["s", o] || o < n.s && ["ss", o] || a <= 1 && ["m"] || a < n.m && ["mm", a] || s <= 1 && ["h"] || s < n.h && ["hh", s] || c <= 1 && ["d"] || c < n.d && ["dd", c];
  return n.w != null && (v = v || d <= 1 && ["w"] || d < n.w && ["ww", d]), v = v || u <= 1 && ["M"] || u < n.M && ["MM", u] || m <= 1 && ["y"] || ["yy", m], v[2] = t, v[3] = +e > 0, v[4] = r, Mg.apply(null, v);
}
function Pg(e) {
  return e === void 0 ? Xt : typeof e == "function" ? (Xt = e, !0) : !1;
}
function Lg(e, t) {
  return er[e] === void 0 ? !1 : t === void 0 ? er[e] : (er[e] = t, e === "s" && (er.ss = t - 1), !0);
}
function Ag(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = er, i, o;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, er, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), i = this.localeData(), o = Ig(this, !n, r, i), n && (o = i.pastFuture(+this, o)), i.postformat(o);
}
var ro = Math.abs;
function Zn(e) {
  return (e > 0) - (e < 0) || +e;
}
function Yi() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = ro(this._milliseconds) / 1e3, t = ro(this._days), n = ro(this._months), r, i, o, a, s = this.asSeconds(), c, u, d, m;
  return s ? (r = _t(e / 60), i = _t(r / 60), e %= 60, r %= 60, o = _t(n / 12), n %= 12, a = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", c = s < 0 ? "-" : "", u = Zn(this._months) !== Zn(s) ? "-" : "", d = Zn(this._days) !== Zn(s) ? "-" : "", m = Zn(this._milliseconds) !== Zn(s) ? "-" : "", c + "P" + (o ? u + o + "Y" : "") + (n ? u + n + "M" : "") + (t ? d + t + "D" : "") + (i || r || e ? "T" : "") + (i ? m + i + "H" : "") + (r ? m + r + "M" : "") + (e ? m + a + "S" : "")) : "P0D";
}
var ye = ji.prototype;
ye.isValid = Rp;
ye.abs = lg;
ye.add = cg;
ye.subtract = ug;
ye.as = fg;
ye.asMilliseconds = tc;
ye.asSeconds = hg;
ye.asMinutes = pg;
ye.asHours = mg;
ye.asDays = gg;
ye.asWeeks = bg;
ye.asMonths = vg;
ye.asQuarters = yg;
ye.asYears = wg;
ye.valueOf = _g;
ye._bubble = dg;
ye.clone = kg;
ye.get = xg;
ye.milliseconds = Cg;
ye.seconds = Sg;
ye.minutes = Eg;
ye.hours = Og;
ye.days = Tg;
ye.weeks = $g;
ye.months = Rg;
ye.years = Dg;
ye.humanize = Ag;
ye.toISOString = Yi;
ye.toString = Yi;
ye.toJSON = Yi;
ye.locale = Vl;
ye.localeData = Hl;
ye.toIsoString = xt(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Yi
);
ye.lang = zl;
K("X", 0, 0, "unix");
K("x", 0, 0, "valueOf");
F("x", Ii);
F("X", rh);
Le("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
Le("x", function(e, t, n) {
  n._d = new Date(ve(e));
});
//! moment.js
L.version = "2.30.1";
jf(We);
L.fn = C;
L.min = Sp;
L.max = Ep;
L.now = Op;
L.utc = zt;
L.unix = tg;
L.months = rg;
L.isDate = Hr;
L.locale = _n;
L.invalid = Ri;
L.duration = Mt;
L.isMoment = $t;
L.weekdays = og;
L.parseZone = ng;
L.localeData = un;
L.isDuration = hi;
L.monthsShort = ig;
L.weekdaysMin = sg;
L.defineLocale = Go;
L.updateLocale = np;
L.locales = rp;
L.weekdaysShort = ag;
L.normalizeUnits = Ct;
L.relativeTimeRounding = Pg;
L.relativeTimeThreshold = Lg;
L.calendarFormat = Xp;
L.prototype = C;
L.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
var Rn = {}, br = {}, Dn = {}, io = {}, vr = {}, za;
function Fi() {
  return za || (za = 1, Object.defineProperty(vr, "__esModule", { value: !0 }), vr.settings = void 0, vr.settings = {
    debug: !1,
    gravity: 800,
    zIndex: 99999,
    respectReducedMotion: !0
  }), vr;
}
var $n = {}, yr = {}, Ha;
function ra() {
  if (Ha) return yr;
  Ha = 1, Object.defineProperty(yr, "__esModule", { value: !0 }), yr.overrideDefaults = void 0;
  function e(t, n) {
    return Object.assign({}, t, n);
  }
  return yr.overrideDefaults = e, yr;
}
var wr = {}, Mn = {}, _r = {}, Ba;
function jg() {
  if (Ba) return _r;
  Ba = 1, Object.defineProperty(_r, "__esModule", { value: !0 }), _r.Circle = void 0;
  var e = (
    /** @class */
    function() {
      function t(n, r, i) {
        i === void 0 && (i = 0), this.x = n, this.y = r, this.radius = i;
      }
      return t.zero = new t(0, 0), t;
    }()
  );
  return _r.Circle = e, _r;
}
var kr = {}, oo = {}, Ua;
function zn() {
  return Ua || (Ua = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.approximately = e.clamp = e.invlerp = e.slerp = e.lerp = e.epsilon = e.rad2deg = e.deg2rad = void 0, e.deg2rad = Math.PI / 180, e.rad2deg = 180 / Math.PI, e.epsilon = 1e-6;
    function t(a, s, c) {
      return (1 - c) * a + c * s;
    }
    e.lerp = t;
    function n(a, s, c) {
      return t(a, s, (1 - Math.cos(c * Math.PI)) / 2);
    }
    e.slerp = n;
    function r(a, s, c) {
      return (c - a) / (s - a);
    }
    e.invlerp = r;
    function i(a, s, c) {
      return Math.min(c, Math.max(s, a));
    }
    e.clamp = i;
    function o(a, s) {
      return Math.abs(a - s) < e.epsilon;
    }
    e.approximately = o;
  }(oo)), oo;
}
var qa;
function Ng() {
  if (qa) return kr;
  qa = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.Color = void 0;
  var e = zn(), t = (
    /** @class */
    function() {
      function n(r, i, o) {
        this.values = new Float32Array(3), this.rgb = [r, i, o];
      }
      return Object.defineProperty(n.prototype, "r", {
        /**
         * Returns the r-component of the color.
         */
        get: function() {
          return this.values[0];
        },
        /**
         * Modifies the r-component of the color.
         * Note that this also floors the value.
         */
        set: function(r) {
          this.values[0] = Math.floor(r);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "g", {
        /**
         * Returns the g-component of the color.
         */
        get: function() {
          return this.values[1];
        },
        /**
         * Modifies the g-component of the color.
         * Note that this also floors the value.
         */
        set: function(r) {
          this.values[1] = Math.floor(r);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "b", {
        /**
         * Returns the b-component of the color.
         * Note that this also floors the value.
         */
        get: function() {
          return this.values[2];
        },
        /**
         * Modifies the b-component of the color.
         */
        set: function(r) {
          this.values[2] = Math.floor(r);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "rgb", {
        /**
         * Returns the rgb-components of the color, bundled as a copied array.
         */
        get: function() {
          return [this.r, this.g, this.b];
        },
        /**
         * Simultaneously updates the rgb-components of the color, by passing an array.
         */
        set: function(r) {
          this.r = r[0], this.g = r[1], this.b = r[2];
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.mix = function(r, i) {
        return i === void 0 && (i = 0.5), new n(e.lerp(this.r, r.r, i), e.lerp(this.g, r.g, i), e.lerp(this.b, r.b, i));
      }, n.prototype.toHex = function() {
        var r = function(i) {
          return i.toString(16).padStart(2, "0");
        };
        return "#" + r(this.r) + r(this.g) + r(this.b);
      }, n.prototype.toString = function() {
        return "rgb(" + this.values.join(", ") + ")";
      }, n.fromHex = function(r) {
        return r.startsWith("#") && (r = r.substr(1)), new n(parseInt(r.substr(0, 2), 16), parseInt(r.substr(2, 2), 16), parseInt(r.substr(4, 2), 16));
      }, n.fromHsl = function(r, i, o) {
        if (r /= 360, i /= 100, o /= 100, i === 0)
          return new n(o, o, o);
        var a = function(d, m, v) {
          return v < 0 && (v += 1), v > 1 && (v -= 1), v < 0.16666666666666666 ? d + (m - d) * 6 * v : v < 0.5 ? m : v < 0.6666666666666666 ? d + (m - d) * (0.6666666666666666 - v) * 6 : d;
        }, s = function(d) {
          return Math.min(255, 256 * d);
        }, c = o < 0.5 ? o * (1 + i) : o + i - o * i, u = 2 * o - c;
        return new n(s(a(u, c, r + 1 / 3)), s(a(u, c, r)), s(a(u, c, r - 1 / 3)));
      }, n.white = new n(255, 255, 255), n.black = new n(0, 0, 0), n;
    }()
  );
  return kr.Color = t, kr;
}
var Jt = {}, xr = {}, Ga;
function nc() {
  if (Ga) return xr;
  Ga = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.Spline = void 0;
  var e = zn(), t = (
    /** @class */
    function() {
      function n() {
        for (var r = [], i = 0; i < arguments.length; i++)
          r[i] = arguments[i];
        if (r.length === 0)
          throw new Error("Splines require at least one key.");
        if (Array.isArray(r[0]))
          throw new Error("You are trying to pass an array to the spline constructor, which is not supported. Try to spread the array into the constructor instead.");
        this.keys = r;
      }
      return n.prototype.evaluate = function(r) {
        if (this.keys.length === 0)
          throw new Error("Attempt to evaluate a spline with no keys.");
        if (this.keys.length === 1)
          return this.keys[0].value;
        var i = this.keys.sort(function(u, d) {
          return u.time - d.time;
        }), o = i.findIndex(function(u) {
          return u.time > r;
        });
        if (o === 0)
          return i[0].value;
        if (o === -1)
          return i[i.length - 1].value;
        var a = i[o - 1], s = i[o], c = e.invlerp(a.time, s.time, r);
        return this.interpolate(a.value, s.value, c);
      }, n;
    }()
  );
  return xr.Spline = t, xr;
}
var Ka;
function Yg() {
  if (Ka) return Jt;
  Ka = 1;
  var e = Jt && Jt.__extends || /* @__PURE__ */ function() {
    var i = function(o, a) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
        s.__proto__ = c;
      } || function(s, c) {
        for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (s[u] = c[u]);
      }, i(o, a);
    };
    return function(o, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      i(o, a);
      function s() {
        this.constructor = o;
      }
      o.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
    };
  }(), t = Jt && Jt.__spreadArray || function(i, o) {
    for (var a = 0, s = o.length, c = i.length; a < s; a++, c++)
      i[c] = o[a];
    return i;
  };
  Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.Gradient = void 0;
  var n = nc(), r = (
    /** @class */
    function(i) {
      e(o, i);
      function o() {
        return i !== null && i.apply(this, arguments) || this;
      }
      return o.prototype.interpolate = function(a, s, c) {
        return a.mix(s, c);
      }, o.solid = function(a) {
        return new o({ value: a, time: 0.5 });
      }, o.simple = function() {
        for (var a = [], s = 0; s < arguments.length; s++)
          a[s] = arguments[s];
        var c = 1 / (a.length - 1);
        return new (o.bind.apply(o, t([void 0], a.map(function(u, d) {
          return {
            value: u,
            time: d * c
          };
        }))))();
      }, o;
    }(n.Spline)
  );
  return Jt.Gradient = r, Jt;
}
var In = {}, Za;
function Fg() {
  if (Za) return In;
  Za = 1;
  var e = In && In.__extends || /* @__PURE__ */ function() {
    var i = function(o, a) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
        s.__proto__ = c;
      } || function(s, c) {
        for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (s[u] = c[u]);
      }, i(o, a);
    };
    return function(o, a) {
      if (typeof a != "function" && a !== null)
        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
      i(o, a);
      function s() {
        this.constructor = o;
      }
      o.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
    };
  }();
  Object.defineProperty(In, "__esModule", { value: !0 }), In.NumericSpline = void 0;
  var t = zn(), n = nc(), r = (
    /** @class */
    function(i) {
      e(o, i);
      function o() {
        return i !== null && i.apply(this, arguments) || this;
      }
      return o.prototype.interpolate = function(a, s, c) {
        return t.slerp(a, s, c);
      }, o;
    }(n.Spline)
  );
  return In.NumericSpline = r, In;
}
var Cr = {}, Ja;
function Wg() {
  if (Ja) return Cr;
  Ja = 1, Object.defineProperty(Cr, "__esModule", { value: !0 }), Cr.Rect = void 0;
  var e = (
    /** @class */
    function() {
      function t(n, r, i, o) {
        i === void 0 && (i = 0), o === void 0 && (o = 0), this.x = n, this.y = r, this.width = i, this.height = o;
      }
      return t.fromScreen = function() {
        return new t(window.scrollX, window.scrollY, window.innerWidth, window.innerHeight);
      }, t.fromElement = function(n) {
        var r = n.getBoundingClientRect();
        return new t(window.scrollX + r.x, window.scrollY + r.y, r.width, r.height);
      }, t.zero = new t(0, 0), t;
    }()
  );
  return Cr.Rect = e, Cr;
}
var Pn = {}, Xa;
function ia() {
  if (Xa) return Pn;
  Xa = 1;
  var e = Pn && Pn.__spreadArray || function(r, i) {
    for (var o = 0, a = i.length, s = r.length; o < a; o++, s++)
      r[s] = i[o];
    return r;
  };
  Object.defineProperty(Pn, "__esModule", { value: !0 }), Pn.Vector = void 0;
  var t = zn(), n = (
    /** @class */
    function() {
      function r(i, o, a) {
        i === void 0 && (i = 0), o === void 0 && (o = 0), a === void 0 && (a = 0), this.values = new Float32Array(3), this.xyz = [i, o, a];
      }
      return Object.defineProperty(r.prototype, "x", {
        /**
         * Returns the x-component of the vector.
         */
        get: function() {
          return this.values[0];
        },
        /**
         * Modifies the x-component of the vector.
         */
        set: function(i) {
          this.values[0] = i;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(r.prototype, "y", {
        /**
         * Returns the y-component of the vector.
         */
        get: function() {
          return this.values[1];
        },
        /**
         * Modifies the y-component of the vector.
         */
        set: function(i) {
          this.values[1] = i;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(r.prototype, "z", {
        /**
         * Returns the z-component of the vector.
         */
        get: function() {
          return this.values[2];
        },
        /**
         * Modifies the z-component of the vector.
         */
        set: function(i) {
          this.values[2] = i;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(r.prototype, "xyz", {
        /**
         * Returns the xyz-components of the vector, bundled as a copied array.
         */
        get: function() {
          return [this.x, this.y, this.z];
        },
        /**
         * Simultaneously updates the xyz-components of the vector, by passing an array.
         */
        set: function(i) {
          this.values[0] = i[0], this.values[1] = i[1], this.values[2] = i[2];
        },
        enumerable: !1,
        configurable: !0
      }), r.prototype.magnitude = function() {
        return Math.sqrt(this.sqrMagnitude());
      }, r.prototype.sqrMagnitude = function() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      }, r.prototype.add = function(i) {
        return new r(this.x + i.x, this.y + i.y, this.z + i.z);
      }, r.prototype.subtract = function(i) {
        return new r(this.x - i.x, this.y - i.y, this.z - i.z);
      }, r.prototype.scale = function(i) {
        return typeof i == "number" ? new r(this.x * i, this.y * i, this.z * i) : new r(this.x * i.x, this.y * i.y, this.z * i.z);
      }, r.prototype.normalized = function() {
        var i = this.magnitude();
        return i !== 0 ? this.scale(1 / i) : new (r.bind.apply(r, e([void 0], this.xyz)))();
      }, r.prototype.angle = function(i) {
        return t.rad2deg * Math.acos((this.x * i.x + this.y * i.y + this.z * i.z) / (this.magnitude() * i.magnitude()));
      }, r.prototype.cross = function(i) {
        return new r(this.y * i.z - this.z * i.y, this.z * i.x - this.x * i.z, this.x * i.y - this.y * i.x);
      }, r.prototype.dot = function(i) {
        return this.magnitude() * i.magnitude() * Math.cos(t.deg2rad * this.angle(i));
      }, r.prototype.toString = function() {
        return "Vector(" + this.values.join(", ") + ")";
      }, r.from2dAngle = function(i) {
        return new r(Math.cos(i * t.deg2rad), Math.sin(i * t.deg2rad));
      }, r.zero = new r(0, 0, 0), r.one = new r(1, 1, 1), r.right = new r(1, 0, 0), r.up = new r(0, 1, 0), r.forward = new r(0, 0, 1), r;
    }()
  );
  return Pn.Vector = n, Pn;
}
var Qa;
function fn() {
  return Qa || (Qa = 1, function(e) {
    var t = Mn && Mn.__createBinding || (Object.create ? function(r, i, o, a) {
      a === void 0 && (a = o), Object.defineProperty(r, a, { enumerable: !0, get: function() {
        return i[o];
      } });
    } : function(r, i, o, a) {
      a === void 0 && (a = o), r[a] = i[o];
    }), n = Mn && Mn.__exportStar || function(r, i) {
      for (var o in r) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), n(jg(), e), n(Ng(), e), n(Yg(), e), n(Fg(), e), n(Wg(), e), n(ia(), e);
  }(Mn)), Mn;
}
var es;
function Vg() {
  if (es) return wr;
  es = 1, Object.defineProperty(wr, "__esModule", { value: !0 }), wr.rotationToNormal = void 0;
  var e = fn(), t = zn();
  function n(r) {
    var i = r.x * t.deg2rad, o = r.y * t.deg2rad, a = new e.Vector(Math.cos(o), 0, Math.sin(o)), s = new e.Vector(0, Math.cos(i), Math.sin(i));
    return a.cross(s);
  }
  return wr.rotationToNormal = n, wr;
}
var Sr = {}, ts;
function rc() {
  return ts || (ts = 1, Object.defineProperty(Sr, "__esModule", { value: !0 }), Sr.despawningRules = void 0, Sr.despawningRules = {
    /**
     * A rule that despawns a particle once its lifetime is over.
     */
    lifetime: function(e) {
      return e.lifetime <= 0;
    },
    /**
     * A rule that despawns a particle once its y-coordinate is outside of the document.
     */
    bounds: function(e) {
      var t = document.documentElement.scrollHeight;
      return e.location.y > t;
    }
  }), Sr;
}
var Er = {}, ns;
function zg() {
  if (ns) return Er;
  ns = 1, Object.defineProperty(Er, "__esModule", { value: !0 }), Er.Lazy = void 0;
  var e = (
    /** @class */
    function() {
      function t(n, r) {
        r === void 0 && (r = t.defaultExists), this.factory = n, this.exists = r;
      }
      return Object.defineProperty(t.prototype, "current", {
        /**
         * The current value of the lazy object. Will be initialized, if the 'exists'
         * predicate doesn't match.
         */
        get: function() {
          return this.exists(this.value) || (this.value = this.factory()), this.value;
        },
        enumerable: !1,
        configurable: !0
      }), t.defaultExists = function(n) {
        return typeof n < "u";
      }, t;
    }()
  );
  return Er.Lazy = e, Er;
}
var rs;
function ar() {
  return rs || (rs = 1, function(e) {
    var t = $n && $n.__createBinding || (Object.create ? function(r, i, o, a) {
      a === void 0 && (a = o), Object.defineProperty(r, a, { enumerable: !0, get: function() {
        return i[o];
      } });
    } : function(r, i, o, a) {
      a === void 0 && (a = o), r[a] = i[o];
    }), n = $n && $n.__exportStar || function(r, i) {
      for (var o in r) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), n(ra(), e), n(Vg(), e), n(rc(), e), n(zg(), e);
  }($n)), $n;
}
var is;
function ic() {
  return is || (is = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.particleContainer = e.debugContainer = e.rootContainer = void 0;
    var t = Fi(), n = ar(), r = "party-js-";
    function i(a) {
      return a && a.isConnected;
    }
    function o(a, s, c) {
      var u = document.createElement("div");
      return u.id = r + a, Object.assign(u.style, s), c.appendChild(u);
    }
    e.rootContainer = new n.Lazy(function() {
      return o("container", {
        position: "fixed",
        left: "0",
        top: "0",
        height: "100vh",
        width: "100vw",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: t.settings.zIndex.toString()
      }, document.body);
    }, i), e.debugContainer = new n.Lazy(function() {
      return o("debug", {
        position: "absolute",
        top: "0",
        left: "0",
        margin: "0.5em",
        padding: "0.5em 1em",
        border: "2px solid rgb(0, 0, 0, 0.2)",
        background: "rgb(0, 0, 0, 0.1)",
        color: "#555",
        fontFamily: "monospace"
      }, e.rootContainer.current);
    }, i), e.particleContainer = new n.Lazy(function() {
      return o("particles", {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        perspective: "1200px"
      }, e.rootContainer.current);
    }, i);
  }(io)), io;
}
var os;
function Hg() {
  if (os) return Dn;
  os = 1;
  var e = Dn && Dn.__spreadArray || function(i, o) {
    for (var a = 0, s = o.length, c = i.length; a < s; a++, c++)
      i[c] = o[a];
    return i;
  };
  Object.defineProperty(Dn, "__esModule", { value: !0 }), Dn.Debug = void 0;
  var t = ic(), n = Fi(), r = (
    /** @class */
    function() {
      function i(o) {
        this.scene = o, this.refreshRate = 8, this.refreshTimer = 1 / this.refreshRate;
      }
      return i.prototype.tick = function(o) {
        var a = t.debugContainer.current, s = n.settings.debug ? "block" : "none";
        a.style.display !== s && (a.style.display = s), n.settings.debug && (this.refreshTimer += o, this.refreshTimer > 1 / this.refreshRate && (this.refreshTimer = 0, a.innerHTML = this.getDebugInformation(o).join("<br>")));
      }, i.prototype.getDebugInformation = function(o) {
        var a = this.scene.emitters.length, s = this.scene.emitters.reduce(function(d, m) {
          return d + m.particles.length;
        }, 0), c = [
          "<b>party.js Debug</b>",
          "--------------",
          "FPS: " + Math.round(1 / o),
          "Emitters: " + a,
          "Particles: " + s
        ], u = this.scene.emitters.map(function(d) {
          return [
            // Show the current loop and the total loops.
            "⭯: " + (d.currentLoop + 1) + "/" + (d.options.loops >= 0 ? d.options.loops : "∞"),
            // Show the amount of particle contained.
            "Σp: " + d.particles.length,
            // Show the internal timer.
            d.isExpired ? "<i>expired</i>" : "Σt: " + d.durationTimer.toFixed(3) + "s"
          ].join(", ");
        });
        return c.push.apply(c, e(["--------------"], u)), c;
      }, i;
    }()
  );
  return Dn.Debug = r, Dn;
}
var Or = {}, lt = {}, mt = {}, as;
function Gr() {
  if (as) return mt;
  as = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.randomInsideCircle = mt.randomInsideRect = mt.randomUnitVector = mt.pick = mt.randomRange = void 0;
  var e = fn(), t = zn();
  function n(s, c) {
    return s === void 0 && (s = 0), c === void 0 && (c = 1), t.lerp(s, c, Math.random());
  }
  mt.randomRange = n;
  function r(s) {
    return s.length === 0 ? void 0 : s[Math.floor(Math.random() * s.length)];
  }
  mt.pick = r;
  function i() {
    var s = n(0, 2 * Math.PI), c = n(-1, 1);
    return new e.Vector(Math.sqrt(1 - c * c) * Math.cos(s), Math.sqrt(1 - c * c) * Math.sin(s), c);
  }
  mt.randomUnitVector = i;
  function o(s) {
    return new e.Vector(s.x + n(0, s.width), s.y + n(0, s.height));
  }
  mt.randomInsideRect = o;
  function a(s) {
    var c = n(0, 2 * Math.PI), u = n(0, s.radius);
    return new e.Vector(s.x + Math.cos(c) * u, s.y + Math.sin(c) * u);
  }
  return mt.randomInsideCircle = a, mt;
}
var ss;
function Kr() {
  if (ss) return lt;
  ss = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.gradientSample = lt.splineSample = lt.skewRelative = lt.skew = lt.range = lt.evaluateVariation = void 0;
  var e = Gr();
  function t(s) {
    return Array.isArray(s) ? e.pick(s) : typeof s == "function" ? s() : s;
  }
  lt.evaluateVariation = t;
  function n(s, c) {
    return function() {
      return e.randomRange(s, c);
    };
  }
  lt.range = n;
  function r(s, c) {
    return function() {
      return s + e.randomRange(-c, c);
    };
  }
  lt.skew = r;
  function i(s, c) {
    return function() {
      return s * (1 + e.randomRange(-c, c));
    };
  }
  lt.skewRelative = i;
  function o(s) {
    return function() {
      return s.evaluate(Math.random());
    };
  }
  lt.splineSample = o;
  function a(s) {
    return o(s);
  }
  return lt.gradientSample = a, lt;
}
var Ln = {}, Tr = {}, ls;
function Bg() {
  if (ls) return Tr;
  ls = 1, Object.defineProperty(Tr, "__esModule", { value: !0 }), Tr.getDefaultEmitterOptions = void 0;
  var e = rc();
  function t() {
    return {
      duration: 5,
      loops: 1,
      useGravity: !0,
      maxParticles: 300,
      despawningRules: [e.despawningRules.lifetime, e.despawningRules.bounds],
      modules: []
    };
  }
  return Tr.getDefaultEmitterOptions = t, Tr;
}
var Rr = {}, gt = {}, cs;
function Wi() {
  if (cs) return gt;
  cs = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.circleSource = gt.rectSource = gt.mouseSource = gt.elementSource = gt.dynamicSource = void 0;
  var e = fn(), t = Gr();
  function n(s) {
    if (s instanceof HTMLElement)
      return r(s);
    if (s instanceof e.Circle)
      return a(s);
    if (s instanceof e.Rect)
      return o(s);
    if (s instanceof MouseEvent)
      return i(s);
    throw new Error("Cannot infer the source type of '" + s + "'.");
  }
  gt.dynamicSource = n;
  function r(s) {
    return function() {
      return t.randomInsideRect(e.Rect.fromElement(s));
    };
  }
  gt.elementSource = r;
  function i(s) {
    return function() {
      return new e.Vector(window.scrollX + s.clientX, window.scrollY + s.clientY);
    };
  }
  gt.mouseSource = i;
  function o(s) {
    return function() {
      return t.randomInsideRect(s);
    };
  }
  gt.rectSource = o;
  function a(s) {
    return function() {
      return t.randomInsideCircle(s);
    };
  }
  return gt.circleSource = a, gt;
}
var us;
function Ug() {
  if (us) return Rr;
  us = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.getDefaultEmissionOptions = void 0;
  var e = fn(), t = Wi();
  function n() {
    return {
      rate: 10,
      angle: 0,
      bursts: [],
      sourceSampler: t.rectSource(e.Rect.zero),
      initialLifetime: 5,
      initialSpeed: 5,
      initialSize: 1,
      initialRotation: e.Vector.zero,
      initialColor: e.Color.white
    };
  }
  return Rr.getDefaultEmissionOptions = n, Rr;
}
var Dr = {}, ds;
function qg() {
  if (ds) return Dr;
  ds = 1, Object.defineProperty(Dr, "__esModule", { value: !0 }), Dr.getDefaultRendererOptions = void 0;
  function e() {
    return {
      shapeFactory: "square",
      applyColor: t,
      applyOpacity: n,
      applyLighting: r,
      applyTransform: i
    };
  }
  Dr.getDefaultRendererOptions = e;
  function t(o, a) {
    var s = o.toHex();
    switch (a.nodeName.toLowerCase()) {
      case "div":
        a.style.background = s;
        break;
      case "svg":
        a.style.fill = a.style.color = s;
        break;
      default:
        a.style.color = s;
        break;
    }
  }
  function n(o, a) {
    a.style.opacity = o.toString();
  }
  function r(o, a) {
    a.style.filter = "brightness(" + (0.5 + Math.abs(o)) + ")";
  }
  function i(o, a) {
    a.style.transform = // Make sure to take window scrolling into account.
    "translateX(" + (o.location.x - window.scrollX).toFixed(3) + "px) " + ("translateY(" + (o.location.y - window.scrollY).toFixed(3) + "px) ") + ("translateZ(" + o.location.z.toFixed(3) + "px) ") + ("rotateX(" + o.rotation.x.toFixed(3) + "deg) ") + ("rotateY(" + o.rotation.y.toFixed(3) + "deg) ") + ("rotateZ(" + o.rotation.z.toFixed(3) + "deg) ") + ("scale(" + o.size.toFixed(3) + ")");
  }
  return Dr;
}
var fs;
function Gg() {
  return fs || (fs = 1, function(e) {
    var t = Ln && Ln.__createBinding || (Object.create ? function(r, i, o, a) {
      a === void 0 && (a = o), Object.defineProperty(r, a, { enumerable: !0, get: function() {
        return i[o];
      } });
    } : function(r, i, o, a) {
      a === void 0 && (a = o), r[a] = i[o];
    }), n = Ln && Ln.__exportStar || function(r, i) {
      for (var o in r) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), n(Bg(), e), n(Ug(), e), n(qg(), e);
  }(Ln)), Ln;
}
var $r = {}, hs;
function oc() {
  if (hs) return $r;
  hs = 1, Object.defineProperty($r, "__esModule", { value: !0 }), $r.Particle = void 0;
  var e = fn(), t = ra(), n = (
    /** @class */
    /* @__PURE__ */ function() {
      function r(i) {
        var o = t.overrideDefaults({
          lifetime: 0,
          size: 1,
          location: e.Vector.zero,
          rotation: e.Vector.zero,
          velocity: e.Vector.zero,
          color: e.Color.white,
          opacity: 1
        }, i);
        this.id = Symbol(), this.size = this.initialSize = o.size, this.lifetime = this.initialLifetime = o.lifetime, this.rotation = this.initialRotation = o.rotation, this.location = o.location, this.velocity = o.velocity, this.color = o.color, this.opacity = o.opacity;
      }
      return r;
    }()
  );
  return $r.Particle = n, $r;
}
var ps;
function ac() {
  if (ps) return Or;
  ps = 1, Object.defineProperty(Or, "__esModule", { value: !0 }), Or.Emitter = void 0;
  var e = ia(), t = Fi(), n = Kr(), r = ra(), i = Gg(), o = oc(), a = (
    /** @class */
    function() {
      function s(c) {
        this.particles = [], this.currentLoop = 0, this.durationTimer = 0, this.emissionTimer = 0, this.attemptedBurstIndices = [], this.options = r.overrideDefaults(i.getDefaultEmitterOptions(), c == null ? void 0 : c.emitterOptions), this.emission = r.overrideDefaults(i.getDefaultEmissionOptions(), c == null ? void 0 : c.emissionOptions), this.renderer = r.overrideDefaults(i.getDefaultRendererOptions(), c == null ? void 0 : c.rendererOptions);
      }
      return Object.defineProperty(s.prototype, "isExpired", {
        /**
         * Checks if the emitter is already expired and can be removed.
         * Expired emitters do not emit new particles.
         */
        get: function() {
          return this.options.loops >= 0 && this.currentLoop >= this.options.loops;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(s.prototype, "canRemove", {
        /**
         * Checks if the emitter can safely be removed.
         * This is true if no more particles are active.
         */
        get: function() {
          return this.particles.length === 0;
        },
        enumerable: !1,
        configurable: !0
      }), s.prototype.clearParticles = function() {
        return this.particles.splice(0).length;
      }, s.prototype.tick = function(c) {
        if (!this.isExpired && (this.durationTimer += c, this.durationTimer >= this.options.duration && (this.currentLoop++, this.durationTimer = 0, this.attemptedBurstIndices = []), !this.isExpired)) {
          for (var u = 0, d = 0, m = this.emission.bursts; d < m.length; d++) {
            var v = m[d];
            if (v.time <= this.durationTimer && !this.attemptedBurstIndices.includes(u)) {
              for (var _ = n.evaluateVariation(v.count), E = 0; E < _; E++)
                this.emitParticle();
              this.attemptedBurstIndices.push(u);
            }
            u++;
          }
          this.emissionTimer += c;
          for (var se = 1 / this.emission.rate; this.emissionTimer > se; )
            this.emissionTimer -= se, this.emitParticle();
        }
        for (var x = function(S) {
          var Q = re.particles[S];
          re.tickParticle(Q, c), re.options.despawningRules.some(function(B) {
            return B(Q);
          }) && re.particles.splice(S, 1);
        }, re = this, E = this.particles.length - 1; E >= 0; E--)
          x(E);
      }, s.prototype.tickParticle = function(c, u) {
        c.lifetime -= u, this.options.useGravity && (c.velocity = c.velocity.add(e.Vector.up.scale(t.settings.gravity * u))), c.location = c.location.add(c.velocity.scale(u));
        for (var d = 0, m = this.options.modules; d < m.length; d++) {
          var v = m[d];
          v(c);
        }
      }, s.prototype.emitParticle = function() {
        var c = new o.Particle({
          location: this.emission.sourceSampler(),
          lifetime: n.evaluateVariation(this.emission.initialLifetime),
          velocity: e.Vector.from2dAngle(n.evaluateVariation(this.emission.angle)).scale(n.evaluateVariation(this.emission.initialSpeed)),
          size: n.evaluateVariation(this.emission.initialSize),
          rotation: n.evaluateVariation(this.emission.initialRotation),
          color: n.evaluateVariation(this.emission.initialColor)
        });
        return this.particles.push(c), this.particles.length > this.options.maxParticles && this.particles.shift(), c;
      }, s;
    }()
  );
  return Or.Emitter = a, Or;
}
var Mr = {}, ao = {}, ms;
function sc() {
  return ms || (ms = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.resolveShapeFactory = e.resolvableShapes = void 0;
    var t = Kr();
    e.resolvableShapes = {
      square: '<div style="height: 10px; width: 10px;"></div>',
      rectangle: '<div style="height: 6px; width: 10px;"></div>',
      circle: '<svg viewBox="0 0 2 2" width="10" height="10"><circle cx="1" cy="1" r="1" fill="currentColor"/></svg>',
      roundedSquare: '<div style="height: 10px; width: 10px; border-radius: 3px;"></div>',
      roundedRectangle: '<div style="height: 6px; width: 10px; border-radius: 3px;"></div>',
      star: '<svg viewBox="0 0 512 512" width="15" height="15"><polygon fill="currentColor" points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842"/></svg>'
    };
    function n(r) {
      var i = t.evaluateVariation(r);
      if (typeof i == "string") {
        var o = e.resolvableShapes[i];
        if (!o)
          throw new Error("Failed to resolve shape key '" + i + "'. Did you forget to add it to the 'resolvableShapes' lookup?");
        var a = document.createElement("div");
        return a.innerHTML = o, a.firstElementChild;
      }
      return i;
    }
    e.resolveShapeFactory = n;
  }(ao)), ao;
}
var gs;
function Kg() {
  if (gs) return Mr;
  gs = 1, Object.defineProperty(Mr, "__esModule", { value: !0 }), Mr.Renderer = void 0;
  var e = Zr(), t = ia(), n = ic(), r = sc(), i = ar(), o = (
    /** @class */
    function() {
      function a() {
        this.elements = /* @__PURE__ */ new Map(), this.light = new t.Vector(0, 0, 1), this.enabled = !0, this.enabled = !e.settings.respectReducedMotion || !window.matchMedia("(prefers-reduced-motion)").matches;
      }
      return a.prototype.begin = function() {
        this.renderedParticles = [];
      }, a.prototype.end = function() {
        for (var s = this.elements.keys(), c = s.next(); !c.done; ) {
          var u = c.value;
          this.renderedParticles.includes(u) || (this.elements.get(u).remove(), this.elements.delete(u)), c = s.next();
        }
        return this.renderedParticles.length;
      }, a.prototype.renderParticle = function(s, c) {
        if (this.enabled) {
          var u = c.renderer, d = this.elements.has(s.id) ? this.elements.get(s.id) : this.createParticleElement(s, u);
          if (u.applyColor && u.applyColor(s.color, d), u.applyOpacity && u.applyOpacity(s.opacity, d), u.applyLighting) {
            var m = i.rotationToNormal(s.rotation), v = m.dot(this.light);
            u.applyLighting(v, d);
          }
          u.applyTransform && u.applyTransform(s, d), this.renderedParticles.push(s.id);
        }
      }, a.prototype.createParticleElement = function(s, c) {
        var u = r.resolveShapeFactory(c.shapeFactory), d = u.cloneNode(!0);
        return d.style.position = "absolute", this.elements.set(s.id, n.particleContainer.current.appendChild(d)), d;
      }, a;
    }()
  );
  return Mr.Renderer = o, Mr;
}
var bs;
function Zg() {
  if (bs) return br;
  bs = 1, Object.defineProperty(br, "__esModule", { value: !0 }), br.Scene = void 0;
  var e = Hg(), t = ac(), n = Kg(), r = (
    /** @class */
    function() {
      function i() {
        this.emitters = [], this.debug = new e.Debug(this), this.renderer = new n.Renderer(), this.scheduledTickId = void 0, this.lastTickTimestamp = performance.now(), this.tick = this.tick.bind(this), this.scheduleTick();
      }
      return i.prototype.createEmitter = function(o) {
        var a = new t.Emitter(o);
        return this.emitters.push(a), a;
      }, i.prototype.clearEmitters = function() {
        return this.emitters.splice(0).length;
      }, i.prototype.clearParticles = function() {
        return this.emitters.reduce(function(o, a) {
          return o + a.clearParticles();
        }, 0);
      }, i.prototype.scheduleTick = function() {
        this.scheduledTickId = window.requestAnimationFrame(this.tick);
      }, i.prototype.cancelTick = function() {
        window.cancelAnimationFrame(this.scheduledTickId);
      }, i.prototype.tick = function(o) {
        var a = (o - this.lastTickTimestamp) / 1e3;
        try {
          for (var s = 0; s < this.emitters.length; s++) {
            var c = this.emitters[s];
            c.tick(a), c.isExpired && c.canRemove && this.emitters.splice(s--, 1);
          }
        } catch (E) {
          console.error(`An error occurred while updating the scene's emitters:
"` + E + '"');
        }
        try {
          this.renderer.begin();
          for (var u = 0, d = this.emitters; u < d.length; u++)
            for (var c = d[u], m = 0, v = c.particles; m < v.length; m++) {
              var _ = v[m];
              this.renderer.renderParticle(_, c);
            }
          this.renderer.end();
        } catch (E) {
          console.error(`An error occurred while rendering the scene's particles:
"` + E + '"');
        }
        this.debug.tick(a), this.lastTickTimestamp = o, this.scheduleTick();
      }, i;
    }()
  );
  return br.Scene = r, br;
}
var An = {}, Ir = {}, Pr = {}, vs;
function oa() {
  if (vs) return Pr;
  vs = 1, Object.defineProperty(Pr, "__esModule", { value: !0 }), Pr.ModuleBuilder = void 0;
  var e = fn(), t = (
    /** @class */
    function() {
      function o() {
        this.factor = "lifetime", this.isRelative = !1;
      }
      return o.prototype.drive = function(a) {
        return this.driverKey = a, this;
      }, o.prototype.through = function(a) {
        return this.factor = a, this;
      }, o.prototype.by = function(a) {
        return this.driverValue = a, this;
      }, o.prototype.relative = function(a) {
        return a === void 0 && (a = !0), this.isRelative = a, this;
      }, o.prototype.build = function() {
        var a = this;
        if (typeof this.driverKey > "u")
          throw new Error("No driving key was provided in the module builder. Did you forget a '.drive()' call?");
        if (typeof this.driverValue > "u")
          throw new Error("No driving value was provided in the module builder. Did you forget a '.through()' call?");
        return function(s) {
          i(s, a.driverKey, n(a.driverValue, r(a.factor, s), s), a.isRelative);
        };
      }, o;
    }()
  );
  Pr.ModuleBuilder = t;
  function n(o, a, s) {
    return typeof o == "object" && "evaluate" in o ? o.evaluate(a) : typeof o == "function" ? o(a, s) : o;
  }
  function r(o, a) {
    switch (o) {
      case "lifetime":
        return a.initialLifetime - a.lifetime;
      case "relativeLifetime":
        return (a.initialLifetime - a.lifetime) / a.initialLifetime;
      case "size":
        return a.size;
      default:
        throw new Error("Invalid driving factor '" + o + "'.");
    }
  }
  function i(o, a, s, c) {
    if (c === void 0 && (c = !1), !c)
      o[a] = s;
    else {
      var u = o["initial" + a[0].toUpperCase() + a.substr(1)];
      if (typeof u > "u")
        throw new Error("Unable to use relative chaining with key '" + a + "'; no initial value exists.");
      if (s instanceof e.Vector)
        i(o, a, u.add(s));
      else if (typeof s == "number")
        i(o, a, u * s);
      else
        throw new Error("Unable to use relative chaining with particle key '" + a + "'; no relative operation for '" + s + "' could be inferred.");
    }
  }
  return Pr;
}
var ys;
function Jg() {
  if (ys) return Ir;
  ys = 1, Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.confetti = void 0;
  var e = Zr(), t = fn(), n = oa(), r = Gr(), i = Wi(), o = Kr(), a = ar();
  function s(c, u) {
    var d = a.overrideDefaults({
      count: o.range(20, 40),
      spread: o.range(35, 45),
      speed: o.range(300, 600),
      size: o.skew(1, 0.2),
      rotation: function() {
        return r.randomUnitVector().scale(180);
      },
      color: function() {
        return t.Color.fromHsl(r.randomRange(0, 360), 100, 70);
      },
      modules: [
        new n.ModuleBuilder().drive("size").by(function(v) {
          return Math.min(1, v * 3);
        }).relative().build(),
        new n.ModuleBuilder().drive("rotation").by(function(v) {
          return new t.Vector(140, 200, 260).scale(v);
        }).relative().build()
      ],
      shapes: ["square", "circle"]
    }, u), m = e.scene.current.createEmitter({
      emitterOptions: {
        loops: 1,
        duration: 8,
        modules: d.modules
      },
      emissionOptions: {
        rate: 0,
        bursts: [{ time: 0, count: d.count }],
        sourceSampler: i.dynamicSource(c),
        angle: o.skew(-90, o.evaluateVariation(d.spread)),
        initialLifetime: 8,
        initialSpeed: d.speed,
        initialSize: d.size,
        initialRotation: d.rotation,
        initialColor: d.color
      },
      rendererOptions: {
        shapeFactory: d.shapes
      }
    });
    return m;
  }
  return Ir.confetti = s, Ir;
}
var Lr = {}, ws;
function Xg() {
  if (ws) return Lr;
  ws = 1, Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.sparkles = void 0;
  var e = Zr(), t = fn(), n = oa(), r = Gr(), i = Wi(), o = Kr(), a = ar();
  function s(c, u) {
    var d = a.overrideDefaults({
      lifetime: o.range(1, 2),
      count: o.range(10, 20),
      speed: o.range(100, 200),
      size: o.range(0.8, 1.8),
      rotation: function() {
        return new t.Vector(0, 0, r.randomRange(0, 360));
      },
      color: function() {
        return t.Color.fromHsl(50, 100, r.randomRange(55, 85));
      },
      modules: [
        new n.ModuleBuilder().drive("rotation").by(function(v) {
          return new t.Vector(0, 0, 200).scale(v);
        }).relative().build(),
        new n.ModuleBuilder().drive("size").by(new t.NumericSpline({ time: 0, value: 0 }, { time: 0.3, value: 1 }, { time: 0.7, value: 1 }, { time: 1, value: 0 })).through("relativeLifetime").relative().build(),
        new n.ModuleBuilder().drive("opacity").by(new t.NumericSpline({ time: 0, value: 1 }, { time: 0.5, value: 1 }, { time: 1, value: 0 })).through("relativeLifetime").build()
      ],
      shapes: "star"
    }, u), m = e.scene.current.createEmitter({
      emitterOptions: {
        loops: 1,
        duration: 3,
        useGravity: !1,
        modules: d.modules
      },
      emissionOptions: {
        rate: 0,
        bursts: [{ time: 0, count: d.count }],
        sourceSampler: i.dynamicSource(c),
        angle: o.range(0, 360),
        initialLifetime: d.lifetime,
        initialSpeed: d.speed,
        initialSize: d.size,
        initialRotation: d.rotation,
        initialColor: d.color
      },
      rendererOptions: {
        applyLighting: void 0,
        shapeFactory: d.shapes
      }
    });
    return m;
  }
  return Lr.sparkles = s, Lr;
}
var _s;
function Qg() {
  return _s || (_s = 1, function(e) {
    var t = An && An.__createBinding || (Object.create ? function(r, i, o, a) {
      a === void 0 && (a = o), Object.defineProperty(r, a, { enumerable: !0, get: function() {
        return i[o];
      } });
    } : function(r, i, o, a) {
      a === void 0 && (a = o), r[a] = i[o];
    }), n = An && An.__exportStar || function(r, i) {
      for (var o in r) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), n(Jg(), e), n(Xg(), e);
  }(An)), An;
}
var ks;
function Zr() {
  return ks || (ks = 1, function(e) {
    var t = Rn && Rn.__createBinding || (Object.create ? function(u, d, m, v) {
      v === void 0 && (v = m), Object.defineProperty(u, v, { enumerable: !0, get: function() {
        return d[m];
      } });
    } : function(u, d, m, v) {
      v === void 0 && (v = m), u[v] = d[m];
    }), n = Rn && Rn.__exportStar || function(u, d) {
      for (var m in u) m !== "default" && !Object.prototype.hasOwnProperty.call(d, m) && t(d, u, m);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.forceInit = e.util = e.math = e.random = e.sources = e.variation = e.Emitter = e.Particle = e.settings = e.scene = void 0;
    var r = Zg(), i = ar();
    n(fn(), e), n(Qg(), e), n(sc(), e), n(oa(), e), e.scene = new i.Lazy(function() {
      if (typeof document > "u" || typeof window > "u")
        throw new Error("It seems like you are trying to run party.js in a non-browser-like environment, which is not supported.");
      return new r.Scene();
    });
    var o = Fi();
    Object.defineProperty(e, "settings", { enumerable: !0, get: function() {
      return o.settings;
    } });
    var a = oc();
    Object.defineProperty(e, "Particle", { enumerable: !0, get: function() {
      return a.Particle;
    } });
    var s = ac();
    Object.defineProperty(e, "Emitter", { enumerable: !0, get: function() {
      return s.Emitter;
    } }), e.variation = Kr(), e.sources = Wi(), e.random = Gr(), e.math = zn(), e.util = ar();
    function c() {
      e.scene.current;
    }
    e.forceInit = c, e.default = Zr();
  }(Rn)), Rn;
}
Zr();
Cs(() => import("./CustomPhone-Dt24OLFX.js"));
Cs(() => import("./OtpVerification-tfUDsLSc.js"));
export {
  mb as I,
  kb as P,
  gb as a,
  bb as b,
  vb as c,
  rb as d,
  mu as e,
  ib as f,
  hc as g,
  nb as j
};
//# sourceMappingURL=index-DltW6k-P.js.map
