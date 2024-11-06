import { W as a } from "./index-BK0jkQ1u.js";
class n extends a {
  async canShare() {
    return typeof navigator > "u" || !navigator.share ? { value: !1 } : { value: !0 };
  }
  async share(e) {
    if (typeof navigator > "u" || !navigator.share)
      throw this.unavailable("Share API not available in this browser");
    return await navigator.share({
      title: e.title,
      text: e.text,
      url: e.url
    }), {};
  }
}
export {
  n as ShareWeb
};
//# sourceMappingURL=web-B7o0theB.js.map
