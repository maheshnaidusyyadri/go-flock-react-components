import { a as i, g as Z } from "./index-BK0jkQ1u.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const j = 540, z = (r) => document.querySelector(`${r}.ion-cloned-element`), I = (r) => r.shadowRoot || r, P = (r) => {
  const l = r.tagName === "ION-TABS" ? r : r.querySelector("ion-tabs"), c = "ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";
  if (l != null) {
    const n = l.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
    return n != null ? n.querySelector(c) : null;
  }
  return r.querySelector(c);
}, D = (r, l) => {
  const c = r.tagName === "ION-TABS" ? r : r.querySelector("ion-tabs");
  let n = [];
  if (c != null) {
    const t = c.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
    t != null && (n = t.querySelectorAll("ion-buttons"));
  } else
    n = r.querySelectorAll("ion-buttons");
  for (const t of n) {
    const g = t.closest("ion-header"), e = g && !g.classList.contains("header-collapse-condense-inactive"), C = t.querySelector("ion-back-button"), a = t.classList.contains("buttons-collapse"), S = t.slot === "start" || t.slot === "";
    if (C !== null && S && (a && e && l || !a))
      return C;
  }
  return null;
}, J = (r, l, c, n, t) => {
  const g = D(n, c), e = P(t), C = P(n), a = D(t, c), S = g !== null && e !== null && !c, y = C !== null && a !== null && c;
  if (S) {
    const E = e.getBoundingClientRect(), m = g.getBoundingClientRect(), d = I(g).querySelector(".button-text"), R = d == null ? void 0 : d.getBoundingClientRect(), A = I(e).querySelector(".toolbar-title").getBoundingClientRect();
    G(r, l, c, e, E, A, m, d, R), k(r, l, c, g, m, d, R, e, A);
  } else if (y) {
    const E = C.getBoundingClientRect(), m = a.getBoundingClientRect(), d = I(a).querySelector(".button-text"), R = d == null ? void 0 : d.getBoundingClientRect(), A = I(C).querySelector(".toolbar-title").getBoundingClientRect();
    G(r, l, c, C, E, A, m, d, R), k(r, l, c, a, m, d, R, C, A);
  }
  return {
    forward: S,
    backward: y
  };
}, k = (r, l, c, n, t, g, e, C, a) => {
  var S, y;
  const E = l ? `calc(100% - ${t.right + 4}px)` : `${t.left - 4}px`, m = l ? "right" : "left", d = l ? "left" : "right", R = l ? "right" : "left";
  let L = 1, A = 1, T = `scale(${A})`;
  const X = "scale(1)";
  if (g && e) {
    const Y = ((S = g.textContent) === null || S === void 0 ? void 0 : S.trim()) === ((y = C.textContent) === null || y === void 0 ? void 0 : y.trim());
    L = a.width / e.width, A = (a.height - U) / e.height, T = Y ? `scale(${L}, ${A})` : `scale(${A})`;
  }
  const x = I(n).querySelector("ion-icon").getBoundingClientRect(), W = l ? `${x.width / 2 - (x.right - t.right)}px` : `${t.left - x.width / 2}px`, o = l ? `-${window.innerWidth - t.right}px` : `${t.left}px`, p = `${a.top}px`, $ = `${t.top}px`, v = [
    { offset: 0, transform: `translate3d(${W}, ${p}, 0)` },
    { offset: 1, transform: `translate3d(${o}, ${$}, 0)` }
  ], s = [
    { offset: 0, transform: `translate3d(${o}, ${$}, 0)` },
    { offset: 1, transform: `translate3d(${W}, ${p}, 0)` }
  ], f = c ? s : v, q = c ? [
    { offset: 0, opacity: 1, transform: X },
    { offset: 1, opacity: 0, transform: T }
  ] : [
    { offset: 0, opacity: 0, transform: T },
    { offset: 1, opacity: 1, transform: X }
  ], w = c ? [
    { offset: 0, opacity: 1, transform: "scale(1)" },
    { offset: 0.2, opacity: 0, transform: "scale(0.6)" },
    { offset: 1, opacity: 0, transform: "scale(0.6)" }
  ] : [
    { offset: 0, opacity: 0, transform: "scale(0.6)" },
    { offset: 0.6, opacity: 0, transform: "scale(0.6)" },
    { offset: 1, opacity: 1, transform: "scale(1)" }
  ], b = i(), F = i(), B = i(), u = z("ion-back-button"), M = I(u).querySelector(".button-text"), H = I(u).querySelector("ion-icon");
  u.text = n.text, u.mode = n.mode, u.icon = n.icon, u.color = n.color, u.disabled = n.disabled, u.style.setProperty("display", "block"), u.style.setProperty("position", "fixed"), F.addElement(H), b.addElement(M), B.addElement(u), B.beforeStyles({
    position: "absolute",
    top: "0px",
    [R]: "0px"
  }).beforeAddWrite(() => {
    n.style.setProperty("display", "none"), u.style.setProperty(m, E);
  }).afterAddWrite(() => {
    n.style.setProperty("display", ""), u.style.setProperty("display", "none"), u.style.removeProperty(m);
  }).keyframes(f), b.beforeStyles({
    "transform-origin": `${m} top`
  }).keyframes(q), F.beforeStyles({
    "transform-origin": `${d} center`
  }).keyframes(w), r.addAnimation([
    b,
    F,
    B
  ]);
}, G = (r, l, c, n, t, g, e, C, a) => {
  var S, y;
  const E = l ? "right" : "left", m = l ? `calc(100% - ${t.right}px)` : `${t.left}px`, d = "0px", R = `${t.top}px`, L = 8;
  let A = l ? `-${window.innerWidth - e.right - L}px` : `${e.x + L}px`, T = 0.5;
  const X = "scale(1)";
  let K = `scale(${T})`;
  if (C && a) {
    A = l ? `-${window.innerWidth - a.right - L}px` : `${a.x - L}px`;
    const N = ((S = C.textContent) === null || S === void 0 ? void 0 : S.trim()) === ((y = n.textContent) === null || y === void 0 ? void 0 : y.trim()), h = a.width / g.width;
    T = a.height / (g.height - U), K = N ? `scale(${h}, ${T})` : `scale(${T})`;
  }
  const x = e.top + e.height / 2, W = t.height * T / 2, o = `${x - W}px`, p = [
    { offset: 0, opacity: 0, transform: `translate3d(${A}, ${o}, 0) ${K}` },
    { offset: 0.1, opacity: 0 },
    { offset: 1, opacity: 1, transform: `translate3d(${d}, ${R}, 0) ${X}` }
  ], $ = [
    {
      offset: 0,
      opacity: 0.99,
      transform: `translate3d(${d}, ${R}, 0) ${X}`
    },
    { offset: 0.6, opacity: 0 },
    { offset: 1, opacity: 0, transform: `translate3d(${A}, ${o}, 0) ${K}` }
  ], v = c ? p : $, s = z("ion-title"), f = i();
  s.innerText = n.innerText, s.size = n.size, s.color = n.color, f.addElement(s), f.beforeStyles({
    "transform-origin": `${E} top`,
    /**
     * Since font size changes will cause
     * the dimension of the large title to change
     * we need to set the cloned title height
     * equal to that of the original large title height.
     */
    height: `${t.height}px`,
    display: "",
    position: "relative",
    [E]: m
  }).beforeAddWrite(() => {
    n.style.setProperty("opacity", "0");
  }).afterAddWrite(() => {
    n.style.setProperty("opacity", ""), s.style.setProperty("display", "none");
  }).keyframes(v), r.addAnimation(f);
}, V = (r, l) => {
  var c;
  try {
    const n = "cubic-bezier(0.32,0.72,0,1)", t = "opacity", g = "transform", e = "0%", a = r.ownerDocument.dir === "rtl", S = a ? "-99.5%" : "99.5%", y = a ? "33%" : "-33%", E = l.enteringEl, m = l.leavingEl, d = l.direction === "back", R = E.querySelector(":scope > ion-content"), L = E.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"), A = E.querySelectorAll(":scope > ion-header > ion-toolbar"), T = i(), X = i();
    if (T.addElement(E).duration(((c = l.duration) !== null && c !== void 0 ? c : 0) || j).easing(l.easing || n).fill("both").beforeRemoveClass("ion-page-invisible"), m && r !== null && r !== void 0) {
      const o = i();
      o.addElement(r), T.addAnimation(o);
    }
    if (!R && A.length === 0 && L.length === 0 ? X.addElement(E.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")) : (X.addElement(R), X.addElement(L)), T.addAnimation(X), d ? X.beforeClearStyles([t]).fromTo("transform", `translateX(${y})`, `translateX(${e})`).fromTo(t, 0.8, 1) : X.beforeClearStyles([t]).fromTo("transform", `translateX(${S})`, `translateX(${e})`), R) {
      const o = I(R).querySelector(".transition-effect");
      if (o) {
        const p = o.querySelector(".transition-cover"), $ = o.querySelector(".transition-shadow"), v = i(), s = i(), f = i();
        v.addElement(o).beforeStyles({ opacity: "1", display: "block" }).afterStyles({ opacity: "", display: "" }), s.addElement(p).beforeClearStyles([t]).fromTo(t, 0, 0.1), f.addElement($).beforeClearStyles([t]).fromTo(t, 0.03, 0.7), v.addAnimation([s, f]), X.addAnimation([v]);
      }
    }
    const K = E.querySelector("ion-header.header-collapse-condense"), { forward: x, backward: W } = J(T, a, d, E, m);
    if (A.forEach((o) => {
      const p = i();
      p.addElement(o), T.addAnimation(p);
      const $ = i();
      $.addElement(o.querySelector("ion-title"));
      const v = i(), s = Array.from(o.querySelectorAll("ion-buttons,[menuToggle]")), f = o.closest("ion-header"), N = f == null ? void 0 : f.classList.contains("header-collapse-condense-inactive");
      let h;
      d ? h = s.filter((b) => {
        const F = b.classList.contains("buttons-collapse");
        return F && !N || !F;
      }) : h = s.filter((b) => !b.classList.contains("buttons-collapse")), v.addElement(h);
      const q = i();
      q.addElement(o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));
      const _ = i();
      _.addElement(I(o).querySelector(".toolbar-background"));
      const O = i(), w = o.querySelector("ion-back-button");
      if (w && O.addElement(w), p.addAnimation([
        $,
        v,
        q,
        _,
        O
      ]), v.fromTo(t, 0.01, 1), q.fromTo(t, 0.01, 1), d)
        N || $.fromTo("transform", `translateX(${y})`, `translateX(${e})`).fromTo(t, 0.01, 1), q.fromTo("transform", `translateX(${y})`, `translateX(${e})`), O.fromTo(t, 0.01, 1);
      else if (K || $.fromTo("transform", `translateX(${S})`, `translateX(${e})`).fromTo(t, 0.01, 1), q.fromTo("transform", `translateX(${S})`, `translateX(${e})`), _.beforeClearStyles([t, "transform"]), (f == null ? void 0 : f.translucent) ? _.fromTo("transform", a ? "translateX(-100%)" : "translateX(100%)", "translateX(0px)") : _.fromTo(t, 0.01, "var(--opacity)"), x || O.fromTo(t, 0.01, 1), w && !x) {
        const F = i();
        F.addElement(I(w).querySelector(".button-text")).fromTo("transform", a ? "translateX(-100px)" : "translateX(100px)", "translateX(0px)"), p.addAnimation(F);
      }
    }), m) {
      const o = i(), p = m.querySelector(":scope > ion-content"), $ = m.querySelectorAll(":scope > ion-header > ion-toolbar"), v = m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
      if (!p && $.length === 0 && v.length === 0 ? o.addElement(m.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")) : (o.addElement(p), o.addElement(v)), T.addAnimation(o), d) {
        o.beforeClearStyles([t]).fromTo("transform", `translateX(${e})`, a ? "translateX(-100%)" : "translateX(100%)");
        const s = Z(m);
        T.afterAddWrite(() => {
          T.getDirection() === "normal" && s.style.setProperty("display", "none");
        });
      } else
        o.fromTo("transform", `translateX(${e})`, `translateX(${y})`).fromTo(t, 1, 0.8);
      if (p) {
        const s = I(p).querySelector(".transition-effect");
        if (s) {
          const f = s.querySelector(".transition-cover"), N = s.querySelector(".transition-shadow"), h = i(), q = i(), _ = i();
          h.addElement(s).beforeStyles({ opacity: "1", display: "block" }).afterStyles({ opacity: "", display: "" }), q.addElement(f).beforeClearStyles([t]).fromTo(t, 0.1, 0), _.addElement(N).beforeClearStyles([t]).fromTo(t, 0.7, 0.03), h.addAnimation([q, _]), o.addAnimation([h]);
        }
      }
      $.forEach((s) => {
        const f = i();
        f.addElement(s);
        const N = i();
        N.addElement(s.querySelector("ion-title"));
        const h = i(), q = s.querySelectorAll("ion-buttons,[menuToggle]"), _ = s.closest("ion-header"), O = _ == null ? void 0 : _.classList.contains("header-collapse-condense-inactive"), w = Array.from(q).filter((H) => {
          const Y = H.classList.contains("buttons-collapse");
          return Y && !O || !Y;
        });
        h.addElement(w);
        const b = i(), F = s.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");
        F.length > 0 && b.addElement(F);
        const B = i();
        B.addElement(I(s).querySelector(".toolbar-background"));
        const u = i(), M = s.querySelector("ion-back-button");
        if (M && u.addElement(M), f.addAnimation([
          N,
          h,
          b,
          u,
          B
        ]), T.addAnimation(f), u.fromTo(t, 0.99, 0), h.fromTo(t, 0.99, 0), b.fromTo(t, 0.99, 0), d) {
          if (O || N.fromTo("transform", `translateX(${e})`, a ? "translateX(-100%)" : "translateX(100%)").fromTo(t, 0.99, 0), b.fromTo("transform", `translateX(${e})`, a ? "translateX(-100%)" : "translateX(100%)"), B.beforeClearStyles([t, "transform"]), (_ == null ? void 0 : _.translucent) ? B.fromTo("transform", "translateX(0px)", a ? "translateX(-100%)" : "translateX(100%)") : B.fromTo(t, "var(--opacity)", 0), M && !W) {
            const Y = i();
            Y.addElement(I(M).querySelector(".button-text")).fromTo("transform", `translateX(${e})`, `translateX(${(a ? -124 : 124) + "px"})`), f.addAnimation(Y);
          }
        } else
          O || N.fromTo("transform", `translateX(${e})`, `translateX(${y})`).fromTo(t, 0.99, 0).afterClearStyles([g, t]), b.fromTo("transform", `translateX(${e})`, `translateX(${y})`).afterClearStyles([g, t]), u.afterClearStyles([t]), N.afterClearStyles([t]), h.afterClearStyles([t]);
      });
    }
    return T;
  } catch (n) {
    throw n;
  }
}, U = 10;
export {
  V as iosTransitionAnimation,
  I as shadow
};
//# sourceMappingURL=ios.transition-Fuq58_BC.js.map
