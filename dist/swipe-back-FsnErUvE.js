import { i as h, c as D, a as M } from "./index-B7VMIACg.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const k = (n, m, g, p, X) => {
  const c = n.ownerDocument.defaultView;
  let s = h(n);
  const w = (t) => {
    const { startX: e } = t;
    return s ? e >= c.innerWidth - 50 : e <= 50;
  }, a = (t) => s ? -t.deltaX : t.deltaX, v = (t) => s ? -t.velocityX : t.velocityX;
  return D({
    el: n,
    gestureName: "goback-swipe",
    /**
     * Swipe to go back should have priority over other horizontal swipe
     * gestures. These gestures have a priority of 100 which is why 101 was chosen here.
     */
    gesturePriority: 101,
    threshold: 10,
    canStart: (t) => (s = h(n), w(t) && m()),
    onStart: g,
    onMove: (t) => {
      const e = a(t) / c.innerWidth;
      p(e);
    },
    onEnd: (t) => {
      const o = a(t), e = c.innerWidth, r = o / e, i = v(t), y = e / 2, l = i >= 0 && (i > 0.2 || o > y), u = (l ? 1 - r : r) * e;
      let d = 0;
      if (u > 5) {
        const f = u / Math.abs(i);
        d = Math.min(f, 540);
      }
      X(l, r <= 0 ? 0.01 : M(0, r, 0.9999), d);
    }
  });
};
export {
  k as createSwipeBackGesture
};
//# sourceMappingURL=swipe-back-FsnErUvE.js.map
