import { c as A } from "./index-DJxXtR3S.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class R {
  constructor() {
    this.gestureId = 0, this.requestedStart = /* @__PURE__ */ new Map(), this.disabledGestures = /* @__PURE__ */ new Map(), this.disabledScroll = /* @__PURE__ */ new Set();
  }
  /**
   * Creates a gesture delegate based on the GestureConfig passed
   */
  createGesture(t) {
    var s;
    return new W(this, this.newID(), t.name, (s = t.priority) !== null && s !== void 0 ? s : 0, !!t.disableScroll);
  }
  /**
   * Creates a blocker that will block any other gesture events from firing. Set in the ion-gesture component.
   */
  createBlocker(t = {}) {
    return new B(this, this.newID(), t.disable, !!t.disableScroll);
  }
  start(t, s, n) {
    return this.canStart(t) ? (this.requestedStart.set(s, n), !0) : (this.requestedStart.delete(s), !1);
  }
  capture(t, s, n) {
    if (!this.start(t, s, n))
      return !1;
    const c = this.requestedStart;
    let i = -1e4;
    if (c.forEach((a) => {
      i = Math.max(i, a);
    }), i === n) {
      this.capturedId = s, c.clear();
      const a = new CustomEvent("ionGestureCaptured", { detail: { gestureName: t } });
      return document.dispatchEvent(a), !0;
    }
    return c.delete(s), !1;
  }
  release(t) {
    this.requestedStart.delete(t), this.capturedId === t && (this.capturedId = void 0);
  }
  disableGesture(t, s) {
    let n = this.disabledGestures.get(t);
    n === void 0 && (n = /* @__PURE__ */ new Set(), this.disabledGestures.set(t, n)), n.add(s);
  }
  enableGesture(t, s) {
    const n = this.disabledGestures.get(t);
    n !== void 0 && n.delete(s);
  }
  disableScroll(t) {
    this.disabledScroll.add(t), this.disabledScroll.size === 1 && document.body.classList.add(P);
  }
  enableScroll(t) {
    this.disabledScroll.delete(t), this.disabledScroll.size === 0 && document.body.classList.remove(P);
  }
  canStart(t) {
    return !(this.capturedId !== void 0 || this.isDisabled(t));
  }
  isCaptured() {
    return this.capturedId !== void 0;
  }
  isScrollDisabled() {
    return this.disabledScroll.size > 0;
  }
  isDisabled(t) {
    const s = this.disabledGestures.get(t);
    return !!(s && s.size > 0);
  }
  newID() {
    return this.gestureId++, this.gestureId;
  }
}
class W {
  constructor(t, s, n, c, i) {
    this.id = s, this.name = n, this.disableScroll = i, this.priority = c * 1e6 + s, this.ctrl = t;
  }
  canStart() {
    return this.ctrl ? this.ctrl.canStart(this.name) : !1;
  }
  start() {
    return this.ctrl ? this.ctrl.start(this.name, this.id, this.priority) : !1;
  }
  capture() {
    if (!this.ctrl)
      return !1;
    const t = this.ctrl.capture(this.name, this.id, this.priority);
    return t && this.disableScroll && this.ctrl.disableScroll(this.id), t;
  }
  release() {
    this.ctrl && (this.ctrl.release(this.id), this.disableScroll && this.ctrl.enableScroll(this.id));
  }
  destroy() {
    this.release(), this.ctrl = void 0;
  }
}
class B {
  constructor(t, s, n, c) {
    this.id = s, this.disable = n, this.disableScroll = c, this.ctrl = t;
  }
  block() {
    if (this.ctrl) {
      if (this.disable)
        for (const t of this.disable)
          this.ctrl.disableGesture(t, this.id);
      this.disableScroll && this.ctrl.disableScroll(this.id);
    }
  }
  unblock() {
    if (this.ctrl) {
      if (this.disable)
        for (const t of this.disable)
          this.ctrl.enableGesture(t, this.id);
      this.disableScroll && this.ctrl.enableScroll(this.id);
    }
  }
  destroy() {
    this.unblock(), this.ctrl = void 0;
  }
}
const P = "backdrop-no-scroll", V = new R();
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const g = (e, t, s, n) => {
  const c = F(e) ? {
    capture: !!n.capture,
    passive: !!n.passive
  } : !!n.capture;
  let i, a;
  return e.__zone_symbol__addEventListener ? (i = "__zone_symbol__addEventListener", a = "__zone_symbol__removeEventListener") : (i = "addEventListener", a = "removeEventListener"), e[i](t, s, c), () => {
    e[a](t, s, c);
  };
}, F = (e) => {
  if (D === void 0)
    try {
      const t = Object.defineProperty({}, "passive", {
        get: () => {
          D = !0;
        }
      });
      e.addEventListener("optsTest", () => {
      }, t);
    } catch {
      D = !1;
    }
  return !!D;
};
let D;
const j = 2e3, H = (e, t, s, n, c) => {
  let i, a, b, u, d, l, S, y = 0;
  const o = (f) => {
    y = Date.now() + j, t(f) && (!a && s && (a = g(e, "touchmove", s, c)), b || (b = g(f.target, "touchend", r, c)), u || (u = g(f.target, "touchcancel", r, c)));
  }, p = (f) => {
    y > Date.now() || t(f) && (!l && s && (l = g(I(e), "mousemove", s, c)), S || (S = g(I(e), "mouseup", v, c)));
  }, r = (f) => {
    m(), n && n(f);
  }, v = (f) => {
    Y(), n && n(f);
  }, m = () => {
    a && a(), b && b(), u && u(), a = b = u = void 0;
  }, Y = () => {
    l && l(), S && S(), l = S = void 0;
  }, X = () => {
    m(), Y();
  }, E = (f = !0) => {
    f ? (i || (i = g(e, "touchstart", o, c)), d || (d = g(e, "mousedown", p, c))) : (i && i(), d && d(), i = d = void 0, X());
  };
  return {
    enable: E,
    stop: X,
    destroy: () => {
      E(!1), n = s = t = void 0;
    }
  };
}, I = (e) => e instanceof Document ? e : e.ownerDocument, K = (e, t, s) => {
  const n = s * (Math.PI / 180), c = e === "x", i = Math.cos(n), a = t * t;
  let b = 0, u = 0, d = !1, l = 0;
  return {
    start(S, y) {
      b = S, u = y, l = 0, d = !0;
    },
    detect(S, y) {
      if (!d)
        return !1;
      const o = S - b, p = y - u, r = o * o + p * p;
      if (r < a)
        return !1;
      const v = Math.sqrt(r), m = (c ? o : p) / v;
      return m > i ? l = 1 : m < -i ? l = -1 : l = 0, d = !1, !0;
    },
    isGesture() {
      return l !== 0;
    },
    getDirection() {
      return l;
    }
  };
}, N = (e) => {
  let t = !1, s = !1, n = !0, c = !1;
  const i = Object.assign({ disableScroll: !1, direction: "x", gesturePriority: 0, passive: !0, maxAngle: 40, threshold: 10 }, e), a = i.canStart, b = i.onWillStart, u = i.onStart, d = i.onEnd, l = i.notCaptured, S = i.onMove, y = i.threshold, o = i.passive, p = i.blurOnStart, r = {
    type: "pan",
    startX: 0,
    startY: 0,
    startTime: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    deltaX: 0,
    deltaY: 0,
    currentTime: 0,
    event: void 0,
    data: void 0
  }, v = K(i.direction, i.threshold, i.maxAngle), m = V.createGesture({
    name: e.gestureName,
    priority: e.gesturePriority,
    disableScroll: e.disableScroll
  }), Y = (h) => {
    const M = z(h);
    return s || !n || (x(h, r), r.startX = r.currentX, r.startY = r.currentY, r.startTime = r.currentTime = M, r.velocityX = r.velocityY = r.deltaX = r.deltaY = 0, r.event = h, a && a(r) === !1) || (m.release(), !m.start()) ? !1 : (s = !0, y === 0 ? w() : (v.start(r.startX, r.startY), !0));
  }, X = (h) => {
    if (t) {
      !c && n && (c = !0, C(r, h), requestAnimationFrame(E));
      return;
    }
    C(r, h), v.detect(r.currentX, r.currentY) && (!v.isGesture() || !w()) && q();
  }, E = () => {
    t && (c = !1, S && S(r));
  }, w = () => m.capture() ? (t = !0, n = !1, r.startX = r.currentX, r.startY = r.currentY, r.startTime = r.currentTime, b ? b(r).then(T) : T(), !0) : !1, f = () => {
    if (typeof document < "u") {
      const h = document.activeElement;
      h != null && h.blur && h.blur();
    }
  }, T = () => {
    p && f(), u && u(r), n = !0;
  }, G = () => {
    t = !1, s = !1, c = !1, n = !0, m.release();
  }, L = (h) => {
    const M = t, k = n;
    if (G(), !!k) {
      if (C(r, h), M) {
        d && d(r);
        return;
      }
      l && l(r);
    }
  }, _ = H(i.el, Y, X, L, {
    capture: !1,
    passive: o
  }), q = () => {
    G(), _.stop(), l && l(r);
  };
  return {
    enable(h = !0) {
      h || (t && L(void 0), G()), _.enable(h);
    },
    destroy() {
      m.destroy(), _.destroy();
    }
  };
}, C = (e, t) => {
  if (!t)
    return;
  const s = e.currentX, n = e.currentY, c = e.currentTime;
  x(t, e);
  const i = e.currentX, a = e.currentY, u = (e.currentTime = z(t)) - c;
  if (u > 0 && u < 100) {
    const d = (i - s) / u, l = (a - n) / u;
    e.velocityX = d * 0.7 + e.velocityX * 0.3, e.velocityY = l * 0.7 + e.velocityY * 0.3;
  }
  e.deltaX = i - e.startX, e.deltaY = a - e.startY, e.event = t;
}, x = (e, t) => {
  let s = 0, n = 0;
  if (e) {
    const c = e.changedTouches;
    if (c && c.length > 0) {
      const i = c[0];
      s = i.clientX, n = i.clientY;
    } else e.pageX !== void 0 && (s = e.pageX, n = e.pageY);
  }
  t.currentX = s, t.currentY = n;
}, z = (e) => e.timeStamp || Date.now();
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const O = (e) => e && e.dir !== "" ? e.dir.toLowerCase() === "rtl" : (document == null ? void 0 : document.dir.toLowerCase()) === "rtl";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const U = (e, t, s, n, c) => {
  const i = e.ownerDocument.defaultView;
  let a = O(e);
  const b = (o) => {
    const { startX: r } = o;
    return a ? r >= i.innerWidth - 50 : r <= 50;
  }, u = (o) => a ? -o.deltaX : o.deltaX, d = (o) => a ? -o.velocityX : o.velocityX;
  return N({
    el: e,
    gestureName: "goback-swipe",
    /**
     * Swipe to go back should have priority over other horizontal swipe
     * gestures. These gestures have a priority of 100 which is why 101 was chosen here.
     */
    gesturePriority: 101,
    threshold: 10,
    canStart: (o) => (a = O(e), b(o) && t()),
    onStart: s,
    onMove: (o) => {
      const r = u(o) / i.innerWidth;
      n(r);
    },
    onEnd: (o) => {
      const p = u(o), r = i.innerWidth, v = p / r, m = d(o), Y = r / 2, X = m >= 0 && (m > 0.2 || p > Y), w = (X ? 1 - v : v) * r;
      let f = 0;
      if (w > 5) {
        const T = w / Math.abs(m);
        f = Math.min(T, 540);
      }
      c(X, v <= 0 ? 0.01 : A(0, v, 0.9999), f);
    }
  });
};
export {
  U as createSwipeBackGesture
};
//# sourceMappingURL=swipe-back-xneTdsQv.js.map
