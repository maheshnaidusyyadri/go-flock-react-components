import { R as u } from "./index-C8nqVD4G.js";
var j = (e) => e.type === "checkbox", w = (e) => e instanceof Date, x = (e) => e == null;
const B = (e) => typeof e == "object";
var g = (e) => !x(e) && !Array.isArray(e) && B(e) && !w(e), R = (e) => g(e) && e.target ? j(e.target) ? e.target.checked : e.target.value : e, T = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, U = (e, s) => e.has(T(s)), D = (e) => {
  const s = e.constructor && e.constructor.prototype;
  return g(s) && s.hasOwnProperty("isPrototypeOf");
}, L = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function v(e) {
  let s;
  const t = Array.isArray(e), n = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    s = new Date(e);
  else if (e instanceof Set)
    s = new Set(e);
  else if (!(L && (e instanceof Blob || n)) && (t || g(e)))
    if (s = t ? [] : {}, !t && !D(e))
      s = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (s[r] = v(e[r]));
  else
    return e;
  return s;
}
var C = (e) => Array.isArray(e) ? e.filter(Boolean) : [], V = (e) => e === void 0, c = (e, s, t) => {
  if (!s || !g(e))
    return t;
  const n = C(s.split(/[,[\].]+?/)).reduce((r, o) => x(r) ? r : r[o], e);
  return V(n) || n === e ? V(e[s]) ? t : e[s] : n;
}, p = (e) => typeof e == "boolean", M = (e) => /^\w*$/.test(e), I = (e) => C(e.replace(/["|']|\]/g, "").split(/\.|\[/)), A = (e, s, t) => {
  let n = -1;
  const r = M(s) ? [s] : I(s), o = r.length, a = o - 1;
  for (; ++n < o; ) {
    const l = r[n];
    let i = t;
    if (n !== a) {
      const f = e[l];
      i = g(f) || Array.isArray(f) ? f : isNaN(+r[n + 1]) ? {} : [];
    }
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return;
    e[l] = i, e = e[l];
  }
  return e;
};
const O = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, S = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, W = u.createContext(null), F = () => u.useContext(W);
var H = (e, s, t, n = !0) => {
  const r = {
    defaultValues: s._defaultValues
  };
  for (const o in e)
    Object.defineProperty(r, o, {
      get: () => {
        const a = o;
        return s._proxyFormState[a] !== S.all && (s._proxyFormState[a] = !n || S.all), t && (t[a] = !0), e[a];
      }
    });
  return r;
}, N = (e) => g(e) && !Object.keys(e).length, G = (e, s, t, n) => {
  t(e);
  const { name: r, ...o } = e;
  return N(o) || Object.keys(o).length >= Object.keys(s).length || Object.keys(o).find((a) => s[a] === !n);
}, $ = (e) => Array.isArray(e) ? e : [e], E = (e, s, t) => !e || !s || e === s || $(e).some((n) => n && (t ? n === s : n.startsWith(s) || s.startsWith(n)));
function k(e) {
  const s = u.useRef(e);
  s.current = e, u.useEffect(() => {
    const t = !e.disabled && s.current.subject && s.current.subject.subscribe({
      next: s.current.next
    });
    return () => {
      t && t.unsubscribe();
    };
  }, [e.disabled]);
}
function K(e) {
  const s = F(), { control: t = s.control, disabled: n, name: r, exact: o } = e || {}, [a, l] = u.useState(t._formState), i = u.useRef(!0), f = u.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), y = u.useRef(r);
  return y.current = r, k({
    disabled: n,
    next: (_) => i.current && E(y.current, _.name, o) && G(_, f.current, t._updateFormState) && l({
      ...t._formState,
      ..._
    }),
    subject: t._subjects.state
  }), u.useEffect(() => (i.current = !0, f.current.isValid && t._updateValid(!0), () => {
    i.current = !1;
  }), [t]), u.useMemo(() => H(a, t, f.current, !1), [a, t]);
}
var q = (e) => typeof e == "string", z = (e, s, t, n, r) => q(e) ? c(t, e, r) : Array.isArray(e) ? e.map((o) => c(t, o)) : t;
function J(e) {
  const s = F(), { control: t = s.control, name: n, defaultValue: r, disabled: o, exact: a } = e || {}, l = u.useRef(n);
  l.current = n, k({
    disabled: o,
    subject: t._subjects.values,
    next: (y) => {
      E(l.current, y.name, a) && f(v(z(l.current, t._names, y.values || t._formValues, !1, r)));
    }
  });
  const [i, f] = u.useState(t._getWatch(n, r));
  return u.useEffect(() => t._removeUnmounted()), i;
}
function Q(e) {
  const s = F(), { name: t, disabled: n, control: r = s.control, shouldUnregister: o } = e, a = U(r._names.array, t), l = J({
    control: r,
    name: t,
    defaultValue: c(r._formValues, t, c(r._defaultValues, t, e.defaultValue)),
    exact: !0
  }), i = K({
    control: r,
    name: t,
    exact: !0
  }), f = u.useRef(r.register(t, {
    ...e.rules,
    value: l,
    ...p(e.disabled) ? { disabled: e.disabled } : {}
  })), y = u.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!c(i.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!c(i.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!c(i.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!c(i.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => c(i.errors, t)
    }
  }), [i, t]), _ = u.useMemo(() => ({
    name: t,
    value: l,
    ...p(n) || i.disabled ? { disabled: i.disabled || n } : {},
    onChange: (d) => f.current.onChange({
      target: {
        value: R(d),
        name: t
      },
      type: O.CHANGE
    }),
    onBlur: () => f.current.onBlur({
      target: {
        value: c(r._formValues, t),
        name: t
      },
      type: O.BLUR
    }),
    ref: (d) => {
      const m = c(r._fields, t);
      m && d && (m._f.ref = {
        focus: () => d.focus(),
        select: () => d.select(),
        setCustomValidity: (b) => d.setCustomValidity(b),
        reportValidity: () => d.reportValidity()
      });
    }
  }), [
    t,
    r._formValues,
    n,
    i.disabled,
    l,
    r._fields
  ]);
  return u.useEffect(() => {
    const d = r._options.shouldUnregister || o, m = (b, P) => {
      const h = c(r._fields, b);
      h && h._f && (h._f.mount = P);
    };
    if (m(t, !0), d) {
      const b = v(c(r._options.defaultValues, t));
      A(r._defaultValues, t, b), V(c(r._formValues, t)) && A(r._formValues, t, b);
    }
    return () => {
      (a ? d && !r._state.action : d) ? r.unregister(t) : m(t, !1);
    };
  }, [t, r, a, o]), u.useEffect(() => {
    p(n) && c(r._fields, t) && r._updateDisabledField({
      disabled: n,
      fields: r._fields,
      name: t,
      value: c(r._fields, t)._f.value
    });
  }, [n, t, r]), u.useMemo(() => ({
    field: _,
    formState: i,
    fieldState: y
  }), [_, i, y]);
}
const Y = (e) => e.render(Q(e));
export {
  Y as C
};
//# sourceMappingURL=index.esm-BjkH1hm0.js.map
