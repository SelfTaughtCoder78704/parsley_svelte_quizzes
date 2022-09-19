function O() {
}
function ve(e) {
  return e();
}
function ae() {
  return /* @__PURE__ */ Object.create(null);
}
function F(e) {
  e.forEach(ve);
}
function ee(e) {
  return typeof e == "function";
}
function D(e, l) {
  return e != e ? l == l : e !== l || e && typeof e == "object" || typeof e == "function";
}
function ke(e) {
  return Object.keys(e).length === 0;
}
function oe(e) {
  return e == null ? "" : e;
}
function He(e) {
  return e && ee(e.destroy) ? e.destroy : O;
}
function m(e, l) {
  e.appendChild(l);
}
function C(e, l, t) {
  e.insertBefore(l, t || null);
}
function p(e) {
  e.parentNode.removeChild(e);
}
function te(e, l) {
  for (let t = 0; t < e.length; t += 1)
    e[t] && e[t].d(l);
}
function y(e) {
  return document.createElement(e);
}
function Q(e) {
  return document.createTextNode(e);
}
function H() {
  return Q(" ");
}
function be() {
  return Q("");
}
function q(e, l, t, n) {
  return e.addEventListener(l, t, n), () => e.removeEventListener(l, t, n);
}
function v(e, l, t) {
  t == null ? e.removeAttribute(l) : e.getAttribute(l) !== t && e.setAttribute(l, t);
}
function Oe(e, l, t) {
  const n = /* @__PURE__ */ new Set();
  for (let a = 0; a < e.length; a += 1)
    e[a].checked && n.add(e[a].__value);
  return t || n.delete(l), Array.from(n);
}
function we(e) {
  return Array.from(e.childNodes);
}
function le(e, l) {
  l = "" + l, e.wholeText !== l && (e.data = l);
}
function se(e, l) {
  e.value = l == null ? "" : l;
}
let ne;
function W(e) {
  ne = e;
}
const j = [], P = [], J = [], Y = [], Ne = Promise.resolve();
let $ = !1;
function Te() {
  $ || ($ = !0, Ne.then(pe));
}
function x(e) {
  J.push(e);
}
function I(e) {
  Y.push(e);
}
const X = /* @__PURE__ */ new Set();
let Z = 0;
function pe() {
  const e = ne;
  do {
    for (; Z < j.length; ) {
      const l = j[Z];
      Z++, W(l), Se(l.$$);
    }
    for (W(null), j.length = 0, Z = 0; P.length; )
      P.pop()();
    for (let l = 0; l < J.length; l += 1) {
      const t = J[l];
      X.has(t) || (X.add(t), t());
    }
    J.length = 0;
  } while (j.length);
  for (; Y.length; )
    Y.pop()();
  $ = !1, X.clear(), W(e);
}
function Se(e) {
  if (e.fragment !== null) {
    e.update(), F(e.before_update);
    const l = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, l), e.after_update.forEach(x);
  }
}
const K = /* @__PURE__ */ new Set();
let G;
function Be() {
  G = {
    r: 0,
    c: [],
    p: G
  };
}
function Me() {
  G.r || F(G.c), G = G.p;
}
function w(e, l) {
  e && e.i && (K.delete(e), e.i(l));
}
function N(e, l, t, n) {
  if (e && e.o) {
    if (K.has(e))
      return;
    K.add(e), G.c.push(() => {
      K.delete(e), n && (t && e.d(1), n());
    }), e.o(l);
  } else
    n && n();
}
function A(e, l, t) {
  const n = e.$$.props[l];
  n !== void 0 && (e.$$.bound[n] = t, t(e.$$.ctx[n]));
}
function B(e) {
  e && e.c();
}
function T(e, l, t, n) {
  const { fragment: a, on_mount: s, on_destroy: i, after_update: f } = e.$$;
  a && a.m(l, t), n || x(() => {
    const r = s.map(ve).filter(ee);
    i ? i.push(...r) : F(r), e.$$.on_mount = [];
  }), f.forEach(x);
}
function S(e, l) {
  const t = e.$$;
  t.fragment !== null && (F(t.on_destroy), t.fragment && t.fragment.d(l), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Re(e, l) {
  e.$$.dirty[0] === -1 && (j.push(e), Te(), e.$$.dirty.fill(0)), e.$$.dirty[l / 31 | 0] |= 1 << l % 31;
}
function U(e, l, t, n, a, s, i, f = [-1]) {
  const r = ne;
  W(e);
  const c = e.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: O,
    not_equal: a,
    bound: ae(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(l.context || (r ? r.$$.context : [])),
    callbacks: ae(),
    dirty: f,
    skip_bound: !1,
    root: l.target || r.$$.root
  };
  i && i(c.root);
  let o = !1;
  if (c.ctx = t ? t(e, l.props || {}, (u, d, ..._) => {
    const b = _.length ? _[0] : d;
    return c.ctx && a(c.ctx[u], c.ctx[u] = b) && (!c.skip_bound && c.bound[u] && c.bound[u](b), o && Re(e, u)), d;
  }) : [], c.update(), o = !0, F(c.before_update), c.fragment = n ? n(c.ctx) : !1, l.target) {
    if (l.hydrate) {
      const u = we(l.target);
      c.fragment && c.fragment.l(u), u.forEach(p);
    } else
      c.fragment && c.fragment.c();
    l.intro && w(e.$$.fragment), T(e, l.target, l.anchor, l.customElement), pe();
  }
  W(r);
}
class L {
  $destroy() {
    S(this, 1), this.$destroy = O;
  }
  $on(l, t) {
    const n = this.$$.callbacks[l] || (this.$$.callbacks[l] = []);
    return n.push(t), () => {
      const a = n.indexOf(t);
      a !== -1 && n.splice(a, 1);
    };
  }
  $set(l) {
    this.$$set && !ke(l) && (this.$$.skip_bound = !0, this.$$set(l), this.$$.skip_bound = !1);
  }
}
function ue(e) {
  let l, t, n;
  return {
    c() {
      l = y("label"), t = Q(e[2]), n = Q(":"), v(l, "class", "label"), v(l, "for", e[1]);
    },
    m(a, s) {
      C(a, l, s), m(l, t), m(l, n);
    },
    p(a, s) {
      s & 4 && le(t, a[2]), s & 2 && v(l, "for", a[1]);
    },
    d(a) {
      a && p(l);
    }
  };
}
function qe(e) {
  let l, t, n, a, s, i, f, r = e[2] && ue(e);
  return {
    c() {
      l = y("p"), r && r.c(), t = H(), n = y("input"), v(n, "name", e[1]), n.required = !0, v(n, "class", "input svelte-utfbqb"), v(n, "placeholder", a = e[3] === "tel" ? "123-456-7890" : ""), v(n, "pattern", s = e[3] === "tel" ? "\\d{3}-\\d{3}-\\d{4}" : ""), v(l, "class", "form-control svelte-utfbqb");
    },
    m(c, o) {
      C(c, l, o), r && r.m(l, null), m(l, t), m(l, n), se(n, e[0]), i || (f = [
        q(n, "change", e[5]),
        He(e[4].call(null, n)),
        q(n, "input", e[7])
      ], i = !0);
    },
    p(c, [o]) {
      c[2] ? r ? r.p(c, o) : (r = ue(c), r.c(), r.m(l, t)) : r && (r.d(1), r = null), o & 2 && v(n, "name", c[1]), o & 8 && a !== (a = c[3] === "tel" ? "123-456-7890" : "") && v(n, "placeholder", a), o & 8 && s !== (s = c[3] === "tel" ? "\\d{3}-\\d{3}-\\d{4}" : "") && v(n, "pattern", s), o & 1 && n.value !== c[0] && se(n, c[0]);
    },
    i: O,
    o: O,
    d(c) {
      c && p(l), r && r.d(), i = !1, F(f);
    }
  };
}
function ze(e, l, t) {
  let { value: n, name: a, label: s, filled: i = !1, type: f = "text" } = l;
  function r(u) {
    u.type = f;
  }
  function c(u) {
    if (f === "email") {
      u.preventDefault();
      const d = u.target.value;
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(d) ? (t(0, n = d), t(6, i = !0)) : (alert("Please enter a valid email address"), t(6, i = !1));
    }
    if (f === "tel") {
      u.preventDefault();
      const d = u.target.value;
      /^\d{3}-\d{3}-\d{4}$/.test(d) ? (t(0, n = d), t(6, i = !0)) : (alert("Please enter a valid phone number"), t(6, i = !1));
    }
    if (f === "text") {
      u.preventDefault();
      const d = u.target.value;
      d.length > 2 ? (t(0, n = d), t(6, i = !0)) : (alert("Please enter a valid name"), t(6, i = !1));
    }
  }
  function o() {
    n = this.value, t(0, n);
  }
  return e.$$set = (u) => {
    "value" in u && t(0, n = u.value), "name" in u && t(1, a = u.name), "label" in u && t(2, s = u.label), "filled" in u && t(6, i = u.filled), "type" in u && t(3, f = u.type);
  }, [
    n,
    a,
    s,
    f,
    r,
    c,
    i,
    o
  ];
}
class V extends L {
  constructor(l) {
    super(), U(this, l, ze, qe, D, {
      value: 0,
      name: 1,
      label: 2,
      filled: 6,
      type: 3
    });
  }
}
function re(e, l, t) {
  const n = e.slice();
  return n[8] = l[t], n;
}
function fe(e) {
  let l, t, n, a, s = e[8].label + "", i, f, r, c;
  return {
    c() {
      l = y("label"), t = y("input"), a = H(), i = Q(s), f = H(), v(t, "type", "radio"), v(t, "name", "healthGoal"), t.__value = n = e[8].value, t.value = t.__value, v(t, "class", "svelte-hfz2wg"), e[7][0].push(t), v(l, "class", "svelte-hfz2wg");
    },
    m(o, u) {
      C(o, l, u), m(l, t), t.checked = t.__value === e[0], m(l, a), m(l, i), m(l, f), r || (c = [
        q(t, "click", function() {
          ee(e[1] ? e[3] : e[4]) && (e[1] ? e[3] : e[4]).apply(this, arguments);
        }),
        q(t, "change", e[6])
      ], r = !0);
    },
    p(o, u) {
      e = o, u & 4 && n !== (n = e[8].value) && (t.__value = n, t.value = t.__value), u & 1 && (t.checked = t.__value === e[0]), u & 4 && s !== (s = e[8].label + "") && le(i, s);
    },
    d(o) {
      o && p(l), e[7][0].splice(e[7][0].indexOf(t), 1), r = !1, F(c);
    }
  };
}
function Fe(e) {
  let l, t = e[2], n = [];
  for (let a = 0; a < t.length; a += 1)
    n[a] = fe(re(e, t, a));
  return {
    c() {
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      l = be();
    },
    m(a, s) {
      for (let i = 0; i < n.length; i += 1)
        n[i].m(a, s);
      C(a, l, s);
    },
    p(a, [s]) {
      if (s & 31) {
        t = a[2];
        let i;
        for (i = 0; i < t.length; i += 1) {
          const f = re(a, t, i);
          n[i] ? n[i].p(f, s) : (n[i] = fe(f), n[i].c(), n[i].m(l.parentNode, l));
        }
        for (; i < n.length; i += 1)
          n[i].d(1);
        n.length = t.length;
      }
    },
    i: O,
    o: O,
    d(a) {
      te(n, a), a && p(l);
    }
  };
}
function Ge(e, l, t) {
  let { group: n = "" } = l, { choices: a = [] } = l, { step_filled: s = !1 } = l, { quiz_ender: i = !1 } = l;
  function f(u) {
    t(0, n = u.target.value), t(5, s = !0);
  }
  function r(u) {
    t(0, n = u.target.value), t(5, s = !0), t(1, i = !0);
  }
  const c = [[]];
  function o() {
    n = this.__value, t(0, n);
  }
  return e.$$set = (u) => {
    "group" in u && t(0, n = u.group), "choices" in u && t(2, a = u.choices), "step_filled" in u && t(5, s = u.step_filled), "quiz_ender" in u && t(1, i = u.quiz_ender);
  }, [
    n,
    i,
    a,
    f,
    r,
    s,
    o,
    c
  ];
}
class me extends L {
  constructor(l) {
    super(), U(this, l, Ge, Fe, D, {
      group: 0,
      choices: 2,
      step_filled: 5,
      quiz_ender: 1
    });
  }
}
function ce(e, l, t) {
  const n = e.slice();
  return n[6] = l[t], n;
}
function de(e) {
  let l, t = e[6].label + "", n, a, s, i, f, r, c, o, u;
  return {
    c() {
      l = y("label"), n = Q(t), a = H(), s = y("input"), f = H(), r = y("span"), c = H(), v(s, "type", "checkbox"), v(s, "name", "healthGoal"), s.__value = i = e[6].value, s.value = s.__value, v(s, "class", "svelte-15hg2d0"), e[5][0].push(s), v(r, "class", "checkmark svelte-15hg2d0"), v(l, "class", "svelte-15hg2d0");
    },
    m(d, _) {
      C(d, l, _), m(l, n), m(l, a), m(l, s), s.checked = ~e[0].indexOf(s.__value), m(l, f), m(l, r), m(l, c), o || (u = [
        q(s, "click", e[3]),
        q(s, "change", e[4])
      ], o = !0);
    },
    p(d, _) {
      _ & 4 && t !== (t = d[6].label + "") && le(n, t), _ & 4 && i !== (i = d[6].value) && (s.__value = i, s.value = s.__value), _ & 1 && (s.checked = ~d[0].indexOf(s.__value));
    },
    d(d) {
      d && p(l), e[5][0].splice(e[5][0].indexOf(s), 1), o = !1, F(u);
    }
  };
}
function Qe(e) {
  let l, t = e[2], n = [];
  for (let a = 0; a < t.length; a += 1)
    n[a] = de(ce(e, t, a));
  return {
    c() {
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      l = be();
    },
    m(a, s) {
      for (let i = 0; i < n.length; i += 1)
        n[i].m(a, s);
      C(a, l, s);
    },
    p(a, [s]) {
      if (s & 7) {
        t = a[2];
        let i;
        for (i = 0; i < t.length; i += 1) {
          const f = ce(a, t, i);
          n[i] ? n[i].p(f, s) : (n[i] = de(f), n[i].c(), n[i].m(l.parentNode, l));
        }
        for (; i < n.length; i += 1)
          n[i].d(1);
        n.length = t.length;
      }
    },
    i: O,
    o: O,
    d(a) {
      te(n, a), a && p(l);
    }
  };
}
function De(e, l, t) {
  let { group: n = "" } = l, { choices: a = [] } = l, { filled: s = !0 } = l;
  const i = [[]], f = () => t(1, s = !0);
  function r() {
    n = Oe(i[0], this.__value, this.checked), t(0, n);
  }
  return e.$$set = (c) => {
    "group" in c && t(0, n = c.group), "choices" in c && t(2, a = c.choices), "filled" in c && t(1, s = c.filled);
  }, [n, s, a, f, r, i];
}
class ie extends L {
  constructor(l) {
    super(), U(this, l, De, Qe, D, { group: 0, choices: 2, filled: 1 });
  }
}
function Ue(e) {
  let l, t, n, a, s, i, f, r;
  return {
    c() {
      l = y("div"), t = y("h2"), t.textContent = "Thanks for telling us about you!", n = H(), a = y("p"), a.textContent = "Parsley will be in touch within the next 24 hours to", s = H(), i = y("button"), i.textContent = "Finish", v(i, "class", "btn submit svelte-56bh4x"), v(l, "class", "message svelte-56bh4x");
    },
    m(c, o) {
      C(c, l, o), m(l, t), m(l, n), m(l, a), m(l, s), m(l, i), f || (r = q(i, "click", e[4]), f = !0);
    },
    p: O,
    i: O,
    o: O,
    d(c) {
      c && p(l), f = !1, r();
    }
  };
}
function Le(e) {
  let l, t, n, a, s, i, f;
  function r(d) {
    e[20](d);
  }
  function c(d) {
    e[21](d);
  }
  function o(d) {
    e[22](d);
  }
  let u = {
    choices: [
      {
        label: "Just looking for more information/research stage",
        value: "Just looking for more information/research stage"
      },
      {
        label: "Looking to start within the next 30-60 days",
        value: "Looking to start within the next 30-60 days"
      },
      {
        label: "Looking to start as soon as possible",
        value: "Looking to start as soon as possible"
      }
    ]
  };
  return e[3].howSoonLookingToMakeChanges !== void 0 && (u.group = e[3].howSoonLookingToMakeChanges), e[1] !== void 0 && (u.step_filled = e[1]), e[0] !== void 0 && (u.quiz_ender = e[0]), n = new me({ props: u }), P.push(() => A(n, "group", r)), P.push(() => A(n, "step_filled", c)), P.push(() => A(n, "quiz_ender", o)), {
    c() {
      l = y("h2"), l.textContent = "How soon are you looking to make changes to your health?", t = H(), B(n.$$.fragment);
    },
    m(d, _) {
      C(d, l, _), C(d, t, _), T(n, d, _), f = !0;
    },
    p(d, _) {
      const b = {};
      !a && _ & 8 && (a = !0, b.group = d[3].howSoonLookingToMakeChanges, I(() => a = !1)), !s && _ & 2 && (s = !0, b.step_filled = d[1], I(() => s = !1)), !i && _ & 1 && (i = !0, b.quiz_ender = d[0], I(() => i = !1)), n.$set(b);
    },
    i(d) {
      f || (w(n.$$.fragment, d), f = !0);
    },
    o(d) {
      N(n.$$.fragment, d), f = !1;
    },
    d(d) {
      d && p(l), d && p(t), S(n, d);
    }
  };
}
function je(e) {
  let l, t, n, a, s, i, f, r, c, o;
  function u(h) {
    e[16](h);
  }
  function d(h) {
    e[17](h);
  }
  let _ = {
    choices: [
      {
        label: "Modifying my diet",
        value: "Modifying my diet"
      },
      {
        label: "Taking supplements",
        value: "Taking supplements"
      },
      {
        label: "Keeping a food journal",
        value: "Keeping a food journal"
      },
      {
        label: "Prescription medications",
        value: "Prescription medications"
      },
      {
        label: "OTC medications",
        value: "OTC medications"
      },
      {
        label: "Exercising regularly",
        value: "Exercising regularly"
      },
      {
        label: "Completing periodic lab tests",
        value: "Completing periodic lab tests"
      },
      {
        label: "Alternative treatments (e.g. Acupuncture, Reiki, Cupping, etc).",
        value: "Alternative treatments (e.g. Acupuncture, Reiki, Cupping, etc)."
      },
      {
        label: "None of the above",
        value: "None of the above"
      },
      { label: "Other", value: "Other" }
    ]
  };
  e[3].triedToImproveHealth !== void 0 && (_.group = e[3].triedToImproveHealth), e[1] !== void 0 && (_.filled = e[1]), n = new ie({ props: _ }), P.push(() => A(n, "group", u)), P.push(() => A(n, "filled", d));
  function b(h) {
    e[18](h);
  }
  function M(h) {
    e[19](h);
  }
  let E = { label: "Other", name: "fullName" };
  return e[3].triedToImproveHealthOther !== void 0 && (E.value = e[3].triedToImproveHealthOther), e[1] !== void 0 && (E.filled = e[1]), f = new V({ props: E }), P.push(() => A(f, "value", b)), P.push(() => A(f, "filled", M)), {
    c() {
      l = y("h2"), l.textContent = "What have you tried to improve your health?", t = H(), B(n.$$.fragment), i = H(), B(f.$$.fragment);
    },
    m(h, k) {
      C(h, l, k), C(h, t, k), T(n, h, k), C(h, i, k), T(f, h, k), o = !0;
    },
    p(h, k) {
      const z = {};
      !a && k & 8 && (a = !0, z.group = h[3].triedToImproveHealth, I(() => a = !1)), !s && k & 2 && (s = !0, z.filled = h[1], I(() => s = !1)), n.$set(z);
      const R = {};
      !r && k & 8 && (r = !0, R.value = h[3].triedToImproveHealthOther, I(() => r = !1)), !c && k & 2 && (c = !0, R.filled = h[1], I(() => c = !1)), f.$set(R);
    },
    i(h) {
      o || (w(n.$$.fragment, h), w(f.$$.fragment, h), o = !0);
    },
    o(h) {
      N(n.$$.fragment, h), N(f.$$.fragment, h), o = !1;
    },
    d(h) {
      h && p(l), h && p(t), S(n, h), h && p(i), S(f, h);
    }
  };
}
function We(e) {
  let l, t, n, a, s, i;
  function f(o) {
    e[14](o);
  }
  function r(o) {
    e[15](o);
  }
  let c = {
    choices: e[3].healthConcerns == "Preventative care" ? [
      {
        label: "Essential Nutrients (Baseline Panel)",
        value: "Essential Nutrients (Baseline Panel)"
      },
      {
        label: "Hormone Panel",
        value: "Hormone Panel"
      },
      { label: "Other", value: "Other" },
      {
        label: "I haven\u2019t done any testing",
        value: "I haven\u2019t done any testing"
      }
    ] : e[3].healthConcerns == "Digestive" ? [
      {
        label: "GI Effects/ GI MAP specialty testing",
        value: "GI Effects/ GI MAP specialty testing"
      },
      {
        label: "Food Sensitivity testing",
        value: "Food Sensitivity testing"
      },
      { label: "SIBO", value: "SIBO" },
      {
        label: "Thyroid Function",
        value: "Thyroid Function"
      },
      {
        label: "Essential Nutrients (Baseline Panel)",
        value: "Essential Nutrients (Baseline Panel)"
      },
      {
        label: "Hormone Panel",
        value: "Hormone Panel"
      },
      { label: "Other", value: "Other" },
      {
        label: "I haven\u2019t done any testing",
        value: "I haven\u2019t done any testing"
      }
    ] : e[3].healthConcerns == "Metabolism & heart health" ? [
      {
        label: "Cardio IQ Panel",
        value: "Cardio IQ Panel"
      },
      {
        label: "Cardiovascular health and metabolic functioning blood work",
        value: "Cardiovascular health and metabolic functioning blood work"
      },
      {
        label: "Essential Nutrients (Baseline Panel)",
        value: "Essential Nutrients (Baseline Panel)"
      },
      {
        label: "Hormone Panel",
        value: "Hormone Panel"
      },
      { label: "Other", value: "Other" },
      {
        label: "I haven\u2019t done any testing",
        value: "I haven\u2019t done any testing"
      }
    ] : e[3].healthConcerns == "Mental wellbeing" ? [
      {
        label: "Essential Nutrients (Baseline Panel)",
        value: "Essential Nutrients (Baseline Panel)"
      },
      {
        label: "Hormone Panel",
        value: "Hormone Panel"
      },
      { label: "Other", value: "Other" },
      {
        label: "I haven\u2019t done any testing",
        value: "I haven\u2019t done any testing"
      }
    ] : e[3].healthConcerns == "Fertility and postpartum" ? [
      {
        label: "Hormone Metabolism testing (Ex. DUTCH)",
        value: "Hormone Metabolism testing (Ex. DUTCH)"
      },
      {
        label: "Essential Nutrients (Baseline Panel)",
        value: "Essential Nutrients (Baseline Panel)"
      },
      {
        label: "Hormone Panel",
        value: "Hormone Panel"
      },
      { label: "Other", value: "Other" },
      {
        label: "I haven\u2019t done any testing",
        value: "I haven\u2019t done any testing"
      }
    ] : e[3].healthConcerns == "Autoimmune and inflammation" ? [
      {
        label: "C-reactive protein (CRP)",
        value: "C-reactive protein (CRP)"
      },
      {
        label: "Erythrocyte sedimentation rate (ESR)",
        value: "Erythrocyte sedimentation rate (ESR)"
      },
      {
        label: "Antinuclear Antibody (ANA)",
        value: "Antinuclear Antibody (ANA)"
      },
      {
        label: "Reflex testing",
        value: "Reflex testing"
      },
      {
        label: "Essential Nutrients (Baseline Panel)",
        value: "Essential Nutrients (Baseline Panel)"
      },
      {
        label: "Hormone Panel",
        value: "Hormone Panel"
      },
      { label: "Other", value: "Other" },
      {
        label: "I haven\u2019t done any testing",
        value: "I haven\u2019t done any testing"
      }
    ] : e[3].healthConcerns == "Hormonal health" ? [
      {
        label: "Hormone Metabolism Testing (Ex. Dutch)",
        value: "Hormone Metabolism Testing (Ex. Dutch)"
      },
      {
        label: "Essential Nutrients (Baseline Panel)",
        value: "Essential Nutrients (Baseline Panel)"
      },
      {
        label: "Hormone Panel",
        value: "Hormone Panel"
      },
      { label: "Other", value: "Other" },
      {
        label: "I haven\u2019t done any testing",
        value: "I haven\u2019t done any testing"
      }
    ] : e[3].healthConcerns == "Unwell & undiagnosed" ? [
      {
        label: "Show all tests (consolidate among conditions)",
        value: "Show all tests (consolidate among conditions)"
      },
      {
        label: "GI Effects/ GI MAP specialty testing",
        value: "GI Effects/ GI MAP specialty testing"
      },
      {
        label: "Food Sensitivity testing",
        value: "Food Sensitivity testing"
      },
      { label: "SIBO", value: "SIBO" },
      {
        label: "Thyroid Function",
        value: "Thyroid Function"
      },
      {
        label: "Essential Nutrients (Baseline Panel)",
        value: "Essential Nutrients (Baseline Panel)"
      },
      {
        label: "Hormone Panel",
        value: "Hormone Panel"
      },
      {
        label: "Cardio IQ Panel",
        value: "Cardio IQ Panel"
      },
      {
        label: "Cardiovascular health and metabolic functioning blood work",
        value: "Cardiovascular health and metabolic functioning blood work"
      },
      {
        label: "Hormone Metabolism testing (Ex. DUTCH)",
        value: "Hormone Metabolism testing (Ex. DUTCH)"
      },
      {
        label: "C-reactive protein (CRP)",
        value: "C-reactive protein (CRP)"
      },
      {
        label: "Erythrocyte sedimentation rate (ESR)",
        value: "Erythrocyte sedimentation rate (ESR)"
      },
      {
        label: "Antinuclear Antibody (ANA)",
        value: "Antinuclear Antibody (ANA)"
      },
      {
        label: "Reflex testing",
        value: "Reflex testing"
      },
      { label: "Other", value: "Other" },
      {
        label: "I haven\u2019t done any testing",
        value: "I haven\u2019t done any testing"
      }
    ] : [
      {
        label: "GI Effects/ GI MAP specialty testing",
        value: "GI Effects/ GI MAP specialty testing"
      },
      {
        label: "Food Sensitivity testing",
        value: "Food Sensitivity testing"
      },
      { label: "SIBO", value: "SIBO" },
      {
        label: "Thyroid Function",
        value: "Thyroid Function"
      },
      {
        label: "Essential Nutrients (Baseline Panel)",
        value: "Essential Nutrients (Baseline Panel)"
      },
      {
        label: "Hormone Panel",
        value: "Hormone Panel"
      },
      {
        label: "Cardio IQ Panel",
        value: "Cardio IQ Panel"
      },
      {
        label: "Cardiovascular health and metabolic functioning blood work",
        value: "Cardiovascular health and metabolic functioning blood work"
      },
      {
        label: "Hormone Metabolism testing (Ex. DUTCH)",
        value: "Hormone Metabolism testing (Ex. DUTCH)"
      },
      {
        label: "C-reactive protein (CRP)",
        value: "C-reactive protein (CRP)"
      },
      {
        label: "Erythrocyte sedimentation rate (ESR)",
        value: "Erythrocyte sedimentation rate (ESR)"
      },
      {
        label: "Antinuclear Antibody (ANA)",
        value: "Antinuclear Antibody (ANA)"
      },
      {
        label: "Reflex testing",
        value: "Reflex testing"
      },
      { label: "Other", value: "Other" },
      {
        label: "I haven\u2019t done any testing",
        value: "I haven\u2019t done any testing"
      }
    ]
  };
  return e[1] !== void 0 && (c.filled = e[1]), e[3].whatTesting !== void 0 && (c.group = e[3].whatTesting), n = new ie({ props: c }), P.push(() => A(n, "filled", f)), P.push(() => A(n, "group", r)), {
    c() {
      l = y("h2"), l.textContent = "What testing have you done regarding your health concerns?", t = H(), B(n.$$.fragment);
    },
    m(o, u) {
      C(o, l, u), C(o, t, u), T(n, o, u), i = !0;
    },
    p(o, u) {
      const d = {};
      u & 8 && (d.choices = o[3].healthConcerns == "Preventative care" ? [
        {
          label: "Essential Nutrients (Baseline Panel)",
          value: "Essential Nutrients (Baseline Panel)"
        },
        {
          label: "Hormone Panel",
          value: "Hormone Panel"
        },
        { label: "Other", value: "Other" },
        {
          label: "I haven\u2019t done any testing",
          value: "I haven\u2019t done any testing"
        }
      ] : o[3].healthConcerns == "Digestive" ? [
        {
          label: "GI Effects/ GI MAP specialty testing",
          value: "GI Effects/ GI MAP specialty testing"
        },
        {
          label: "Food Sensitivity testing",
          value: "Food Sensitivity testing"
        },
        { label: "SIBO", value: "SIBO" },
        {
          label: "Thyroid Function",
          value: "Thyroid Function"
        },
        {
          label: "Essential Nutrients (Baseline Panel)",
          value: "Essential Nutrients (Baseline Panel)"
        },
        {
          label: "Hormone Panel",
          value: "Hormone Panel"
        },
        { label: "Other", value: "Other" },
        {
          label: "I haven\u2019t done any testing",
          value: "I haven\u2019t done any testing"
        }
      ] : o[3].healthConcerns == "Metabolism & heart health" ? [
        {
          label: "Cardio IQ Panel",
          value: "Cardio IQ Panel"
        },
        {
          label: "Cardiovascular health and metabolic functioning blood work",
          value: "Cardiovascular health and metabolic functioning blood work"
        },
        {
          label: "Essential Nutrients (Baseline Panel)",
          value: "Essential Nutrients (Baseline Panel)"
        },
        {
          label: "Hormone Panel",
          value: "Hormone Panel"
        },
        { label: "Other", value: "Other" },
        {
          label: "I haven\u2019t done any testing",
          value: "I haven\u2019t done any testing"
        }
      ] : o[3].healthConcerns == "Mental wellbeing" ? [
        {
          label: "Essential Nutrients (Baseline Panel)",
          value: "Essential Nutrients (Baseline Panel)"
        },
        {
          label: "Hormone Panel",
          value: "Hormone Panel"
        },
        { label: "Other", value: "Other" },
        {
          label: "I haven\u2019t done any testing",
          value: "I haven\u2019t done any testing"
        }
      ] : o[3].healthConcerns == "Fertility and postpartum" ? [
        {
          label: "Hormone Metabolism testing (Ex. DUTCH)",
          value: "Hormone Metabolism testing (Ex. DUTCH)"
        },
        {
          label: "Essential Nutrients (Baseline Panel)",
          value: "Essential Nutrients (Baseline Panel)"
        },
        {
          label: "Hormone Panel",
          value: "Hormone Panel"
        },
        { label: "Other", value: "Other" },
        {
          label: "I haven\u2019t done any testing",
          value: "I haven\u2019t done any testing"
        }
      ] : o[3].healthConcerns == "Autoimmune and inflammation" ? [
        {
          label: "C-reactive protein (CRP)",
          value: "C-reactive protein (CRP)"
        },
        {
          label: "Erythrocyte sedimentation rate (ESR)",
          value: "Erythrocyte sedimentation rate (ESR)"
        },
        {
          label: "Antinuclear Antibody (ANA)",
          value: "Antinuclear Antibody (ANA)"
        },
        {
          label: "Reflex testing",
          value: "Reflex testing"
        },
        {
          label: "Essential Nutrients (Baseline Panel)",
          value: "Essential Nutrients (Baseline Panel)"
        },
        {
          label: "Hormone Panel",
          value: "Hormone Panel"
        },
        { label: "Other", value: "Other" },
        {
          label: "I haven\u2019t done any testing",
          value: "I haven\u2019t done any testing"
        }
      ] : o[3].healthConcerns == "Hormonal health" ? [
        {
          label: "Hormone Metabolism Testing (Ex. Dutch)",
          value: "Hormone Metabolism Testing (Ex. Dutch)"
        },
        {
          label: "Essential Nutrients (Baseline Panel)",
          value: "Essential Nutrients (Baseline Panel)"
        },
        {
          label: "Hormone Panel",
          value: "Hormone Panel"
        },
        { label: "Other", value: "Other" },
        {
          label: "I haven\u2019t done any testing",
          value: "I haven\u2019t done any testing"
        }
      ] : o[3].healthConcerns == "Unwell & undiagnosed" ? [
        {
          label: "Show all tests (consolidate among conditions)",
          value: "Show all tests (consolidate among conditions)"
        },
        {
          label: "GI Effects/ GI MAP specialty testing",
          value: "GI Effects/ GI MAP specialty testing"
        },
        {
          label: "Food Sensitivity testing",
          value: "Food Sensitivity testing"
        },
        { label: "SIBO", value: "SIBO" },
        {
          label: "Thyroid Function",
          value: "Thyroid Function"
        },
        {
          label: "Essential Nutrients (Baseline Panel)",
          value: "Essential Nutrients (Baseline Panel)"
        },
        {
          label: "Hormone Panel",
          value: "Hormone Panel"
        },
        {
          label: "Cardio IQ Panel",
          value: "Cardio IQ Panel"
        },
        {
          label: "Cardiovascular health and metabolic functioning blood work",
          value: "Cardiovascular health and metabolic functioning blood work"
        },
        {
          label: "Hormone Metabolism testing (Ex. DUTCH)",
          value: "Hormone Metabolism testing (Ex. DUTCH)"
        },
        {
          label: "C-reactive protein (CRP)",
          value: "C-reactive protein (CRP)"
        },
        {
          label: "Erythrocyte sedimentation rate (ESR)",
          value: "Erythrocyte sedimentation rate (ESR)"
        },
        {
          label: "Antinuclear Antibody (ANA)",
          value: "Antinuclear Antibody (ANA)"
        },
        {
          label: "Reflex testing",
          value: "Reflex testing"
        },
        { label: "Other", value: "Other" },
        {
          label: "I haven\u2019t done any testing",
          value: "I haven\u2019t done any testing"
        }
      ] : [
        {
          label: "GI Effects/ GI MAP specialty testing",
          value: "GI Effects/ GI MAP specialty testing"
        },
        {
          label: "Food Sensitivity testing",
          value: "Food Sensitivity testing"
        },
        { label: "SIBO", value: "SIBO" },
        {
          label: "Thyroid Function",
          value: "Thyroid Function"
        },
        {
          label: "Essential Nutrients (Baseline Panel)",
          value: "Essential Nutrients (Baseline Panel)"
        },
        {
          label: "Hormone Panel",
          value: "Hormone Panel"
        },
        {
          label: "Cardio IQ Panel",
          value: "Cardio IQ Panel"
        },
        {
          label: "Cardiovascular health and metabolic functioning blood work",
          value: "Cardiovascular health and metabolic functioning blood work"
        },
        {
          label: "Hormone Metabolism testing (Ex. DUTCH)",
          value: "Hormone Metabolism testing (Ex. DUTCH)"
        },
        {
          label: "C-reactive protein (CRP)",
          value: "C-reactive protein (CRP)"
        },
        {
          label: "Erythrocyte sedimentation rate (ESR)",
          value: "Erythrocyte sedimentation rate (ESR)"
        },
        {
          label: "Antinuclear Antibody (ANA)",
          value: "Antinuclear Antibody (ANA)"
        },
        {
          label: "Reflex testing",
          value: "Reflex testing"
        },
        { label: "Other", value: "Other" },
        {
          label: "I haven\u2019t done any testing",
          value: "I haven\u2019t done any testing"
        }
      ]), !a && u & 2 && (a = !0, d.filled = o[1], I(() => a = !1)), !s && u & 8 && (s = !0, d.group = o[3].whatTesting, I(() => s = !1)), n.$set(d);
    },
    i(o) {
      i || (w(n.$$.fragment, o), i = !0);
    },
    o(o) {
      N(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && p(l), o && p(t), S(n, o);
    }
  };
}
function Ze(e) {
  let l, t, n, a, s, i;
  function f(o) {
    e[12](o);
  }
  function r(o) {
    e[13](o);
  }
  let c = {
    choices: [
      {
        label: "Preventative care",
        value: "Preventative care"
      },
      { label: "Digestive", value: "Digestive" },
      {
        label: "Metabolism & heart health",
        value: "Metabolism & heart health"
      },
      {
        label: "Mental wellbeing",
        value: "Mental wellbeing"
      },
      {
        label: "Fertility and postpartum",
        value: "Fertility and postpartum"
      },
      {
        label: "Autoimmune and inflammation",
        value: "Autoimmune and inflammation"
      },
      {
        label: "Hormonal health",
        value: "Hormonal health"
      },
      {
        label: "Unwell & undiagnosed",
        value: "Unwell & undiagnosed"
      },
      { label: "Other", value: "Other" }
    ]
  };
  return e[1] !== void 0 && (c.filled = e[1]), e[3].healthConcerns !== void 0 && (c.group = e[3].healthConcerns), n = new ie({ props: c }), P.push(() => A(n, "filled", f)), P.push(() => A(n, "group", r)), {
    c() {
      l = y("h2"), l.textContent = "What are your biggest health concerns?", t = H(), B(n.$$.fragment);
    },
    m(o, u) {
      C(o, l, u), C(o, t, u), T(n, o, u), i = !0;
    },
    p(o, u) {
      const d = {};
      !a && u & 2 && (a = !0, d.filled = o[1], I(() => a = !1)), !s && u & 8 && (s = !0, d.group = o[3].healthConcerns, I(() => s = !1)), n.$set(d);
    },
    i(o) {
      i || (w(n.$$.fragment, o), i = !0);
    },
    o(o) {
      N(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && p(l), o && p(t), S(n, o);
    }
  };
}
function Je(e) {
  let l, t, n, a, s, i;
  function f(o) {
    e[10](o);
  }
  function r(o) {
    e[11](o);
  }
  let c = {
    choices: [
      {
        label: "Resolve unexplained symptoms",
        value: "Resolve unexplained symptoms"
      },
      {
        label: "Manage my condition",
        value: "Manage my condition"
      },
      {
        label: "Optimize my health",
        value: "Optimize my health"
      },
      {
        label: "Prevent future health issues",
        value: "Prevent future health issues"
      }
    ]
  };
  return e[3].healthGoal !== void 0 && (c.group = e[3].healthGoal), e[1] !== void 0 && (c.step_filled = e[1]), n = new me({ props: c }), P.push(() => A(n, "group", f)), P.push(() => A(n, "step_filled", r)), {
    c() {
      l = y("h2"), l.textContent = "Which statement best describes your health goal?", t = H(), B(n.$$.fragment);
    },
    m(o, u) {
      C(o, l, u), C(o, t, u), T(n, o, u), i = !0;
    },
    p(o, u) {
      const d = {};
      !a && u & 8 && (a = !0, d.group = o[3].healthGoal, I(() => a = !1)), !s && u & 2 && (s = !0, d.step_filled = o[1], I(() => s = !1)), n.$set(d);
    },
    i(o) {
      i || (w(n.$$.fragment, o), i = !0);
    },
    o(o) {
      N(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && p(l), o && p(t), S(n, o);
    }
  };
}
function Ke(e) {
  let l, t, n, a, s, i, f;
  function r(_) {
    e[7](_);
  }
  let c = {
    label: "Email",
    type: "email",
    name: "Email",
    filled: e[1]
  };
  e[3].email !== void 0 && (c.value = e[3].email), l = new V({ props: c }), P.push(() => A(l, "value", r));
  function o(_) {
    e[8](_);
  }
  function u(_) {
    e[9](_);
  }
  let d = {
    type: "tel",
    label: "Phone Number",
    name: "Phone Number"
  };
  return e[3].phoneNum !== void 0 && (d.value = e[3].phoneNum), e[1] !== void 0 && (d.filled = e[1]), a = new V({ props: d }), P.push(() => A(a, "value", o)), P.push(() => A(a, "filled", u)), {
    c() {
      B(l.$$.fragment), n = H(), B(a.$$.fragment);
    },
    m(_, b) {
      T(l, _, b), C(_, n, b), T(a, _, b), f = !0;
    },
    p(_, b) {
      const M = {};
      b & 2 && (M.filled = _[1]), !t && b & 8 && (t = !0, M.value = _[3].email, I(() => t = !1)), l.$set(M);
      const E = {};
      !s && b & 8 && (s = !0, E.value = _[3].phoneNum, I(() => s = !1)), !i && b & 2 && (i = !0, E.filled = _[1], I(() => i = !1)), a.$set(E);
    },
    i(_) {
      f || (w(l.$$.fragment, _), w(a.$$.fragment, _), f = !0);
    },
    o(_) {
      N(l.$$.fragment, _), N(a.$$.fragment, _), f = !1;
    },
    d(_) {
      S(l, _), _ && p(n), S(a, _);
    }
  };
}
function Ve(e) {
  let l, t, n, a, s, i;
  function f(o) {
    e[5](o);
  }
  function r(o) {
    e[6](o);
  }
  let c = { label: "Full Name", name: "fullName" };
  return e[3].name !== void 0 && (c.value = e[3].name), e[1] !== void 0 && (c.filled = e[1]), n = new V({ props: c }), P.push(() => A(n, "value", f)), P.push(() => A(n, "filled", r)), {
    c() {
      l = y("h2"), l.textContent = "What\u2019s your full name?", t = H(), B(n.$$.fragment);
    },
    m(o, u) {
      C(o, l, u), C(o, t, u), T(n, o, u), i = !0;
    },
    p(o, u) {
      const d = {};
      !a && u & 8 && (a = !0, d.value = o[3].name, I(() => a = !1)), !s && u & 2 && (s = !0, d.filled = o[1], I(() => s = !1)), n.$set(d);
    },
    i(o) {
      i || (w(n.$$.fragment, o), i = !0);
    },
    o(o) {
      N(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && p(l), o && p(t), S(n, o);
    }
  };
}
function Xe(e) {
  let l, t, n, a, s, i;
  const f = [
    Ve,
    Ke,
    Je,
    Ze,
    We,
    je,
    Le,
    Ue
  ], r = [];
  function c(o, u) {
    return o[2] == "Q1" ? 0 : o[2] == "Q2" ? 1 : o[2] == "Q3" ? 2 : o[2] == "Q4" ? 3 : o[2] == "Q5" ? 4 : o[2] == "Q6" ? 5 : o[2] == "Q7" ? 6 : o[2] == "Thanks" ? 7 : -1;
  }
  return ~(t = c(e)) && (n = r[t] = f[t](e)), {
    c() {
      l = y("form"), n && n.c(), v(l, "class", "form-container svelte-56bh4x");
    },
    m(o, u) {
      C(o, l, u), ~t && r[t].m(l, null), a = !0, s || (i = q(l, "submit", e[4]), s = !0);
    },
    p(o, [u]) {
      let d = t;
      t = c(o), t === d ? ~t && r[t].p(o, u) : (n && (Be(), N(r[d], 1, 1, () => {
        r[d] = null;
      }), Me()), ~t ? (n = r[t], n ? n.p(o, u) : (n = r[t] = f[t](o), n.c()), w(n, 1), n.m(l, null)) : n = null);
    },
    i(o) {
      a || (w(n), a = !0);
    },
    o(o) {
      N(n), a = !1;
    },
    d(o) {
      o && p(l), ~t && r[t].d(), s = !1, i();
    }
  };
}
function Ye(e, l, t) {
  let { active_step: n } = l, { step_filled: a = !1 } = l, { quiz_ender: s = !1 } = l, i = {
    name: "",
    email: "",
    phoneNum: "",
    healthGoal: "",
    healthConcerns: "",
    whatTesting: "",
    triedToImproveHealth: "",
    triedToImproveHealthOther: "",
    howSoonLookingToMakeChanges: ""
  };
  const f = (g) => {
    g.preventDefault(), console.table(i);
  }, r = () => {
    console.log("end"), console.table(i);
  };
  function c(g) {
    e.$$.not_equal(i.name, g) && (i.name = g, t(3, i));
  }
  function o(g) {
    a = g, t(1, a);
  }
  function u(g) {
    e.$$.not_equal(i.email, g) && (i.email = g, t(3, i));
  }
  function d(g) {
    e.$$.not_equal(i.phoneNum, g) && (i.phoneNum = g, t(3, i));
  }
  function _(g) {
    a = g, t(1, a);
  }
  function b(g) {
    e.$$.not_equal(i.healthGoal, g) && (i.healthGoal = g, t(3, i));
  }
  function M(g) {
    a = g, t(1, a);
  }
  function E(g) {
    a = g, t(1, a);
  }
  function h(g) {
    e.$$.not_equal(i.healthConcerns, g) && (i.healthConcerns = g, t(3, i));
  }
  function k(g) {
    a = g, t(1, a);
  }
  function z(g) {
    e.$$.not_equal(i.whatTesting, g) && (i.whatTesting = g, t(3, i));
  }
  function R(g) {
    e.$$.not_equal(i.triedToImproveHealth, g) && (i.triedToImproveHealth = g, t(3, i));
  }
  function ye(g) {
    a = g, t(1, a);
  }
  function Pe(g) {
    e.$$.not_equal(i.triedToImproveHealthOther, g) && (i.triedToImproveHealthOther = g, t(3, i));
  }
  function Ce(g) {
    a = g, t(1, a);
  }
  function Ee(g) {
    e.$$.not_equal(i.howSoonLookingToMakeChanges, g) && (i.howSoonLookingToMakeChanges = g, t(3, i));
  }
  function Ie(g) {
    a = g, t(1, a);
  }
  function Ae(g) {
    s = g, t(0, s);
  }
  return e.$$set = (g) => {
    "active_step" in g && t(2, n = g.active_step), "step_filled" in g && t(1, a = g.step_filled), "quiz_ender" in g && t(0, s = g.quiz_ender);
  }, e.$$.update = () => {
    e.$$.dirty & 1 && s === !0 && r();
  }, [
    s,
    a,
    n,
    i,
    f,
    c,
    o,
    u,
    d,
    _,
    b,
    M,
    E,
    h,
    k,
    z,
    R,
    ye,
    Pe,
    Ce,
    Ee,
    Ie,
    Ae
  ];
}
class $e extends L {
  constructor(l) {
    super(), U(this, l, Ye, Xe, D, {
      active_step: 2,
      step_filled: 1,
      quiz_ender: 0
    });
  }
}
function he(e, l, t) {
  const n = e.slice();
  return n[8] = l[t], n[10] = t, n;
}
function _e(e) {
  let l, t;
  return {
    c() {
      l = y("div"), v(l, "class", "circle " + (e[10] == 0 ? "active" : "") + " svelte-1vmt17z"), v(l, "data-title", t = e[8]);
    },
    m(n, a) {
      C(n, l, a);
    },
    p(n, a) {
      a & 1 && t !== (t = n[8]) && v(l, "data-title", t);
    },
    d(n) {
      n && p(l);
    }
  };
}
function xe(e) {
  let l, t, n, a = e[0], s = [];
  for (let i = 0; i < a.length; i += 1)
    s[i] = _e(he(e, a, i));
  return {
    c() {
      l = y("div"), t = y("div"), n = H();
      for (let i = 0; i < s.length; i += 1)
        s[i].c();
      v(t, "class", "progress svelte-1vmt17z"), v(l, "class", "progress-container svelte-1vmt17z");
    },
    m(i, f) {
      C(i, l, f), m(l, t), e[5](t), m(l, n);
      for (let r = 0; r < s.length; r += 1)
        s[r].m(l, null);
      e[6](l);
    },
    p(i, [f]) {
      if (f & 1) {
        a = i[0];
        let r;
        for (r = 0; r < a.length; r += 1) {
          const c = he(i, a, r);
          s[r] ? s[r].p(c, f) : (s[r] = _e(c), s[r].c(), s[r].m(l, null));
        }
        for (; r < s.length; r += 1)
          s[r].d(1);
        s.length = a.length;
      }
    },
    i: O,
    o: O,
    d(i) {
      i && p(l), e[5](null), te(s, i), e[6](null);
    }
  };
}
function et(e, l, t) {
  let { steps: n = [], currentActive: a = 1 } = l, s, i;
  const f = (u) => {
    t(1, s = document.querySelectorAll(".circle")), u == 1 ? (t(3, a++, a), a > s.length && t(3, a = s.length)) : (t(3, a--, a), a < 1 && t(3, a = 1)), r();
  };
  function r() {
    s.forEach((d, _) => {
      _ < a ? d.classList.add("active") : d.classList.remove("active");
    });
    const u = document.querySelectorAll(".active");
    t(2, i.style.width = (u.length - 1) / (s.length - 1) * 100 + "%", i);
  }
  function c(u) {
    P[u ? "unshift" : "push"](() => {
      i = u, t(2, i);
    });
  }
  function o(u) {
    P[u ? "unshift" : "push"](() => {
      s = u, t(1, s);
    });
  }
  return e.$$set = (u) => {
    "steps" in u && t(0, n = u.steps), "currentActive" in u && t(3, a = u.currentActive);
  }, [
    n,
    s,
    i,
    a,
    f,
    c,
    o
  ];
}
class tt extends L {
  constructor(l) {
    super(), U(this, l, et, xe, D, {
      steps: 0,
      currentActive: 3,
      handleProgress: 4
    });
  }
  get handleProgress() {
    return this.$$.ctx[4];
  }
}
function ge(e) {
  let l, t, n, a, s, i;
  return {
    c() {
      l = y("div"), t = y("button"), n = Q("Continue"), v(t, "class", a = oe(e[1] == e[4].length || e[2] == !1 ? "btn disabled" : "btn") + " svelte-j6dlvr"), v(t, "tabindex", "0"), v(t, "type", "button"), v(l, "class", "step-button svelte-j6dlvr");
    },
    m(f, r) {
      C(f, l, r), m(l, t), m(t, n), s || (i = q(t, "click", e[10]), s = !0);
    },
    p(f, r) {
      r & 6 && a !== (a = oe(f[1] == f[4].length || f[2] == !1 ? "btn disabled" : "btn") + " svelte-j6dlvr") && v(t, "class", a);
    },
    d(f) {
      f && p(l), s = !1, i();
    }
  };
}
function lt(e) {
  let l, t, n, a, s, i, f, r, c, o;
  function u(h) {
    e[6](h);
  }
  let d = { steps: e[4] };
  e[1] !== void 0 && (d.currentActive = e[1]), n = new tt({ props: d }), P.push(() => A(n, "currentActive", u)), e[7](n);
  function _(h) {
    e[8](h);
  }
  function b(h) {
    e[9](h);
  }
  let M = {
    active_step: e[4][e[1] - 1]
  };
  e[0] !== void 0 && (M.quiz_ender = e[0]), e[2] !== void 0 && (M.step_filled = e[2]), i = new $e({ props: M }), P.push(() => A(i, "quiz_ender", _)), P.push(() => A(i, "step_filled", b));
  let E = e[1] <= 6 && ge(e);
  return {
    c() {
      l = y("main"), t = y("div"), B(n.$$.fragment), s = H(), B(i.$$.fragment), c = H(), E && E.c(), v(t, "class", "container svelte-j6dlvr"), v(l, "class", "svelte-j6dlvr");
    },
    m(h, k) {
      C(h, l, k), m(l, t), T(n, t, null), m(t, s), T(i, t, null), m(t, c), E && E.m(t, null), o = !0;
    },
    p(h, [k]) {
      const z = {};
      !a && k & 2 && (a = !0, z.currentActive = h[1], I(() => a = !1)), n.$set(z);
      const R = {};
      k & 2 && (R.active_step = h[4][h[1] - 1]), !f && k & 1 && (f = !0, R.quiz_ender = h[0], I(() => f = !1)), !r && k & 4 && (r = !0, R.step_filled = h[2], I(() => r = !1)), i.$set(R), h[1] <= 6 ? E ? E.p(h, k) : (E = ge(h), E.c(), E.m(t, null)) : E && (E.d(1), E = null);
    },
    i(h) {
      o || (w(n.$$.fragment, h), w(i.$$.fragment, h), o = !0);
    },
    o(h) {
      N(n.$$.fragment, h), N(i.$$.fragment, h), o = !1;
    },
    d(h) {
      h && p(l), e[7](null), S(n), S(i), E && E.d();
    }
  };
}
function nt(e, l, t) {
  let n = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Thanks"], a = 1, s = !1, i = !1, f;
  const r = (b) => {
    f.handleProgress(b), t(2, s = !1);
  };
  function c(b) {
    a = b, t(1, a);
  }
  function o(b) {
    P[b ? "unshift" : "push"](() => {
      f = b, t(3, f);
    });
  }
  function u(b) {
    i = b, t(0, i);
  }
  function d(b) {
    s = b, t(2, s);
  }
  const _ = () => r(1);
  return e.$$.update = () => {
    e.$$.dirty & 1 && i === !0 && r(1);
  }, [
    i,
    a,
    s,
    f,
    n,
    r,
    c,
    o,
    u,
    d,
    _
  ];
}
class it extends L {
  constructor(l) {
    super(), U(this, l, nt, lt, D, {});
  }
}
function at(e) {
  let l, t;
  return l = new it({}), {
    c() {
      B(l.$$.fragment);
    },
    m(n, a) {
      T(l, n, a), t = !0;
    },
    p: O,
    i(n) {
      t || (w(l.$$.fragment, n), t = !0);
    },
    o(n) {
      N(l.$$.fragment, n), t = !1;
    },
    d(n) {
      S(l, n);
    }
  };
}
class ot extends L {
  constructor(l) {
    super(), U(this, l, null, at, D, {});
  }
}
var st = new ot({
  target: document.body
});
export {
  st as default
};
