import { R as d, j as n, I as U, c as L, a as $, b as v } from "./index-D1uHzWjM.js";
import { C as J } from "./index.esm-BaApstCa.js";
var R = function(r) {
  return typeof r == "object" && r !== null;
}, Q = function(r) {
  var C = r.value, p = C === void 0 ? "" : C, m = r.numInputs, i = m === void 0 ? 4 : m, g = r.onChange, T = r.onPaste, c = r.renderInput, x = r.shouldAutoFocus, h = x === void 0 ? !1 : x, y = r.inputType, V = y === void 0 ? "text" : y, N = r.renderSeparator, j = r.placeholder, b = r.containerStyle, I = r.inputStyle, E = r.skipDefaultStyles, k = E === void 0 ? !1 : E, H = d.useState(0), o = H[0], O = H[1], f = d.useRef([]), w = function() {
    return p ? p.toString().split("") : [];
  }, S = V === "number" || V === "tel";
  d.useEffect(function() {
    f.current = f.current.slice(0, i);
  }, [i]), d.useEffect(function() {
    var e;
    h && ((e = f.current[0]) === null || e === void 0 || e.focus());
  }, [h]);
  var B = function() {
    if (typeof j == "string") {
      if (j.length === i)
        return j;
      j.length > 0 && console.error("Length of the placeholder should be equal to the number of inputs.");
    }
  }, A = function(e) {
    var t = S ? !isNaN(Number(e)) : typeof e == "string";
    return t && e.trim().length === 1;
  }, F = function(e) {
    var t = e.target.value;
    A(t) && (D(t), u(o + 1));
  }, Z = function(e) {
    var t = e.nativeEvent, a = e.target.value;
    if (!A(a)) {
      if (a.length === i) {
        var l = a.split("").some(function(s) {
          return !A(s);
        });
        l || (M(a.split("")), u(i - 1));
      }
      t.data === null && t.inputType === "deleteContentBackward" && (e.preventDefault(), D(""), u(o - 1)), e.target.value = "";
    }
  }, _ = function(e) {
    return function(t) {
      O(t), e.target.select();
    };
  }, q = function() {
    O(o - 1);
  }, K = function(e) {
    var t = w();
    [e.code, e.key].includes("Backspace") ? (e.preventDefault(), D(""), u(o - 1)) : e.code === "Delete" ? (e.preventDefault(), D("")) : e.code === "ArrowLeft" ? (e.preventDefault(), u(o - 1)) : e.code === "ArrowRight" || e.key === t[o] ? (e.preventDefault(), u(o + 1)) : (e.code === "Spacebar" || e.code === "Space" || e.code === "ArrowUp" || e.code === "ArrowDown") && e.preventDefault();
  }, u = function(e) {
    var t, a, l = Math.max(Math.min(i - 1, e), 0);
    f.current[l] && ((t = f.current[l]) === null || t === void 0 || t.focus(), (a = f.current[l]) === null || a === void 0 || a.select(), O(l));
  }, D = function(e) {
    var t = w();
    t[o] = e[0], M(t);
  }, M = function(e) {
    var t = e.join("");
    g(t);
  }, z = function(e) {
    var t;
    e.preventDefault();
    var a = w(), l = o, s = e.clipboardData.getData("text/plain").slice(0, i - o).split("");
    if (!(S && s.some(function(G) {
      return isNaN(Number(G));
    }))) {
      for (var P = 0; P < i; ++P)
        P >= o && s.length > 0 && (a[P] = (t = s.shift()) !== null && t !== void 0 ? t : "", l++);
      u(l), M(a);
    }
  };
  return d.createElement("div", { style: Object.assign({ display: "flex", alignItems: "center" }, R(b) && b), className: typeof b == "string" ? b : void 0, onPaste: T }, Array.from({ length: i }, function(e, t) {
    return t;
  }).map(function(e) {
    var t, a, l;
    return d.createElement(
      d.Fragment,
      { key: e },
      c({
        value: (t = w()[e]) !== null && t !== void 0 ? t : "",
        placeholder: (l = (a = B()) === null || a === void 0 ? void 0 : a[e]) !== null && l !== void 0 ? l : void 0,
        ref: function(s) {
          return f.current[e] = s;
        },
        onChange: F,
        onFocus: function(s) {
          return _(s)(e);
        },
        onBlur: q,
        onKeyDown: K,
        onPaste: z,
        autoComplete: "off",
        "aria-label": "Please enter OTP character ".concat(e + 1),
        style: Object.assign(k ? {} : { width: "1em", textAlign: "center" }, R(I) ? I : {}),
        className: typeof I == "string" ? I : void 0,
        type: V,
        inputMode: S ? "numeric" : "text",
        onInput: Z
      }, e),
      e < i - 1 && (typeof N == "function" ? N(e) : N)
    );
  }));
};
const W = ({}) => /* @__PURE__ */ n.jsxs(
  "svg",
  {
    className: "ion-margin-bottom",
    width: "61",
    height: "122",
    viewBox: "0 0 61 122",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M60.8324 28.9915H60.1618V10.628C60.1618 7.8093 59.0421 5.10602 57.049 3.11288C55.0558 1.11973 52.3525 0 49.5338 0H10.628C7.8093 0 5.10602 1.11973 3.11288 3.11288C1.11974 5.10602 0 7.8093 0 10.628V111.372C0 114.191 1.11974 116.894 3.11288 118.887C5.10602 120.88 7.8093 122 10.628 122H49.5336C52.3524 122 55.0556 120.88 57.0488 118.887C59.0419 116.894 60.1617 114.191 60.1617 111.372V42.063H60.8322L60.8324 28.9915Z",
          fill: "#263238"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M50.031 3.11328H44.9525C45.1862 3.6859 45.2754 4.3072 45.2124 4.92244C45.1493 5.53768 44.9359 6.12797 44.591 6.64129C44.246 7.15461 43.7801 7.57521 43.2343 7.86603C42.6885 8.15685 42.0795 8.30895 41.461 8.30894H19.1725C18.5542 8.30889 17.9453 8.15676 17.3995 7.86596C16.8538 7.57516 16.3879 7.15461 16.043 6.64136C15.6981 6.12811 15.4847 5.53791 15.4216 4.92275C15.3585 4.3076 15.4477 3.68637 15.6812 3.11379H10.9372C8.8321 3.11379 6.81325 3.95002 5.32474 5.43852C3.83624 6.92703 3 8.94588 3 11.0509V111.647C3 113.752 3.83624 115.77 5.32474 117.259C6.81325 118.747 8.8321 119.584 10.9372 119.584H50.0295C52.1346 119.584 54.1534 118.747 55.6419 117.259C57.1304 115.77 57.9667 113.752 57.9667 111.647V11.0504C57.9667 8.94537 57.1304 6.92653 55.6419 5.43802C54.1534 3.94952 52.1346 3.11328 50.0295 3.11328L50.031 3.11328Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M34.842 105.902C34.842 103.495 32.8906 101.544 30.4835 101.544C28.0764 101.544 26.125 103.495 26.125 105.902C26.125 108.309 28.0764 110.261 30.4835 110.261C32.8906 110.261 34.842 108.309 34.842 105.902Z",
          fill: "#EBEBEB"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M30.4108 74.9348C37.8173 74.9348 43.8215 68.9306 43.8215 61.524C43.8215 54.1175 37.8173 48.1133 30.4108 48.1133C23.0042 48.1133 17 54.1175 17 61.524C17 68.9306 23.0042 74.9348 30.4108 74.9348Z",
          fill: "#263238"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M36.9466 57.2664V65.7806C36.9466 65.8605 36.9309 65.9396 36.9003 66.0134C36.8698 66.0872 36.825 66.1542 36.7685 66.2107C36.712 66.2672 36.645 66.312 36.5712 66.3425C36.4974 66.3731 36.4183 66.3888 36.3384 66.3888H24.4793C24.3994 66.3888 24.3203 66.3731 24.2465 66.3425C24.1727 66.312 24.1057 66.2672 24.0492 66.2107C23.9927 66.1542 23.9479 66.0872 23.9173 66.0134C23.8868 65.9396 23.8711 65.8605 23.8711 65.7806V57.2664C23.8707 57.1968 23.8831 57.1277 23.9076 57.0626C23.944 56.9587 24.0081 56.8668 24.0931 56.7968C24.1781 56.7269 24.2806 56.6815 24.3896 56.6658C24.4192 56.6609 24.4492 56.6584 24.4793 56.6582H36.3384C36.3685 56.6584 36.3985 56.6609 36.4281 56.6658C36.5371 56.6815 36.6396 56.7268 36.7246 56.7968C36.8096 56.8668 36.8737 56.9587 36.9101 57.0626C36.9346 57.1277 36.947 57.1968 36.9466 57.2664Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M36.9106 57.0628L30.5903 61.767C30.5383 61.8064 30.4747 61.8278 30.4094 61.8278C30.3441 61.8278 30.2806 61.8064 30.2285 61.767L23.9082 57.0628C23.9446 56.9589 24.0087 56.867 24.0937 56.797C24.1787 56.7271 24.2812 56.6818 24.3902 56.666L30.4094 61.1451L36.4287 56.666C36.5376 56.6817 36.6402 56.727 36.7252 56.797C36.8101 56.867 36.8743 56.9589 36.9106 57.0628Z",
          fill: "#263238"
        }
      )
    ]
  }
), ee = ({
  control: r,
  errors: C,
  fieldName: p,
  isRequired: m = !1,
  phoneNumber: i,
  sendOTP: g
}) => {
  const T = () => {
    g ? g(`${i}`).then((c) => {
      console.error("send OTP", c);
    }).catch((c) => {
      console.error("Failed to send OTP", c);
    }) : console.log("ResendOTP-Method is undefined");
  };
  return /* @__PURE__ */ n.jsx(U, { className: "varification-sec", children: /* @__PURE__ */ n.jsxs(L, { className: "auth-cnt ion-no-margin", children: [
    /* @__PURE__ */ n.jsx($, { className: "auth-title", children: "Verify Account" }),
    /* @__PURE__ */ n.jsx(W, {}),
    /* @__PURE__ */ n.jsx(v, { className: "vatification-title", children: "Mobile Verification" }),
    /* @__PURE__ */ n.jsxs(v, { className: "subtitle", children: [
      "To continue, please enter the OTP we just sent to",
      " ",
      /* @__PURE__ */ n.jsx(v, { className: "mobile-number", children: i ? "+" + i : "" })
    ] }),
    /* @__PURE__ */ n.jsx(L, { className: "otp-fields", children: /* @__PURE__ */ n.jsx(
      J,
      {
        name: p,
        control: r,
        rules: {
          required: m ? "Please enter a complete OTP." : !1,
          minLength: {
            value: 6,
            message: "OTP must be 6 digits."
          }
        },
        render: ({ field: { onChange: c, value: x } }) => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx(
            Q,
            {
              value: x,
              onChange: (h) => {
                const y = h.replace(/\D/g, "");
                c(y);
              },
              numInputs: 6,
              renderInput: (h) => /* @__PURE__ */ n.jsx(
                "input",
                {
                  ...h,
                  type: "number",
                  inputMode: "numeric",
                  pattern: "\\d*",
                  style: {
                    width: "40px",
                    height: "40px",
                    textAlign: "center",
                    fontSize: "20px",
                    border: "0px solid #ccc",
                    borderRadius: "0px",
                    margin: "0 5px"
                  }
                }
              )
            }
          ),
          C[p] && /* @__PURE__ */ n.jsx(v, { className: "otp_error", children: C[p].message })
        ] })
      }
    ) }),
    /* @__PURE__ */ n.jsxs(v, { className: "otp-resend", onClick: T, children: [
      "Didn't receive the code? ",
      /* @__PURE__ */ n.jsx("a", { children: "Resend" })
    ] })
  ] }) });
};
export {
  ee as default
};
//# sourceMappingURL=OtpVerification-D-D9LxZ-.js.map
