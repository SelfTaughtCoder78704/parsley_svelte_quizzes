function w() {
}
function be(e) {
  return e();
}
function ue() {
  return /* @__PURE__ */ Object.create(null);
}
function F(e) {
  e.forEach(be);
}
function ne(e) {
  return typeof e == "function";
}
function D(e, l) {
  return e != e ? l == l : e !== l || e && typeof e == "object" || typeof e == "function";
}
function Se(e) {
  return Object.keys(e).length === 0;
}
function re(e) {
  return e == null ? "" : e;
}
function Be(e) {
  return e && ne(e.destroy) ? e.destroy : w;
}
function b(e, l) {
  e.appendChild(l);
}
function C(e, l, t) {
  e.insertBefore(l, t || null);
}
function m(e) {
  e.parentNode.removeChild(e);
}
function ie(e, l) {
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
function ye() {
  return Q("");
}
function z(e, l, t, n) {
  return e.addEventListener(l, t, n), () => e.removeEventListener(l, t, n);
}
function v(e, l, t) {
  t == null ? e.removeAttribute(l) : e.getAttribute(l) !== t && e.setAttribute(l, t);
}
function Me(e, l, t) {
  const n = /* @__PURE__ */ new Set();
  for (let i = 0; i < e.length; i += 1)
    e[i].checked && n.add(e[i].__value);
  return t || n.delete(l), Array.from(n);
}
function Re(e) {
  return Array.from(e.childNodes);
}
function ae(e, l) {
  l = "" + l, e.wholeText !== l && (e.data = l);
}
function fe(e, l) {
  e.value = l == null ? "" : l;
}
let oe;
function Z(e) {
  oe = e;
}
const W = [], P = [], X = [], ee = [], ze = Promise.resolve();
let te = !1;
function qe() {
  te || (te = !0, ze.then(Pe));
}
function le(e) {
  X.push(e);
}
function I(e) {
  ee.push(e);
}
const x = /* @__PURE__ */ new Set();
let V = 0;
function Pe() {
  const e = oe;
  do {
    for (; V < W.length; ) {
      const l = W[V];
      V++, Z(l), Fe(l.$$);
    }
    for (Z(null), W.length = 0, V = 0; P.length; )
      P.pop()();
    for (let l = 0; l < X.length; l += 1) {
      const t = X[l];
      x.has(t) || (x.add(t), t());
    }
    X.length = 0;
  } while (W.length);
  for (; ee.length; )
    ee.pop()();
  te = !1, x.clear(), Z(e);
}
function Fe(e) {
  if (e.fragment !== null) {
    e.update(), F(e.before_update);
    const l = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, l), e.after_update.forEach(le);
  }
}
const Y = /* @__PURE__ */ new Set();
let G;
function Ge() {
  G = {
    r: 0,
    c: [],
    p: G
  };
}
function Qe() {
  G.r || F(G.c), G = G.p;
}
function O(e, l) {
  e && e.i && (Y.delete(e), e.i(l));
}
function N(e, l, t, n) {
  if (e && e.o) {
    if (Y.has(e))
      return;
    Y.add(e), G.c.push(() => {
      Y.delete(e), n && (t && e.d(1), n());
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
  const { fragment: i, on_mount: s, on_destroy: a, after_update: u } = e.$$;
  i && i.m(l, t), n || le(() => {
    const f = s.map(be).filter(ne);
    a ? a.push(...f) : F(f), e.$$.on_mount = [];
  }), u.forEach(le);
}
function S(e, l) {
  const t = e.$$;
  t.fragment !== null && (F(t.on_destroy), t.fragment && t.fragment.d(l), t.on_destroy = t.fragment = null, t.ctx = []);
}
function De(e, l) {
  e.$$.dirty[0] === -1 && (W.push(e), qe(), e.$$.dirty.fill(0)), e.$$.dirty[l / 31 | 0] |= 1 << l % 31;
}
function U(e, l, t, n, i, s, a, u = [-1]) {
  const f = oe;
  Z(e);
  const c = e.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: w,
    not_equal: i,
    bound: ue(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(l.context || (f ? f.$$.context : [])),
    callbacks: ue(),
    dirty: u,
    skip_bound: !1,
    root: l.target || f.$$.root
  };
  a && a(c.root);
  let o = !1;
  if (c.ctx = t ? t(e, l.props || {}, (r, d, ...g) => {
    const p = g.length ? g[0] : d;
    return c.ctx && i(c.ctx[r], c.ctx[r] = p) && (!c.skip_bound && c.bound[r] && c.bound[r](p), o && De(e, r)), d;
  }) : [], c.update(), o = !0, F(c.before_update), c.fragment = n ? n(c.ctx) : !1, l.target) {
    if (l.hydrate) {
      const r = Re(l.target);
      c.fragment && c.fragment.l(r), r.forEach(m);
    } else
      c.fragment && c.fragment.c();
    l.intro && O(e.$$.fragment), T(e, l.target, l.anchor, l.customElement), Pe();
  }
  Z(f);
}
class L {
  $destroy() {
    S(this, 1), this.$destroy = w;
  }
  $on(l, t) {
    const n = this.$$.callbacks[l] || (this.$$.callbacks[l] = []);
    return n.push(t), () => {
      const i = n.indexOf(t);
      i !== -1 && n.splice(i, 1);
    };
  }
  $set(l) {
    this.$$set && !Se(l) && (this.$$.skip_bound = !0, this.$$set(l), this.$$.skip_bound = !1);
  }
}
function ce(e) {
  let l, t, n;
  return {
    c() {
      l = y("label"), t = Q(e[2]), n = Q(":"), v(l, "class", "label"), v(l, "for", e[1]);
    },
    m(i, s) {
      C(i, l, s), b(l, t), b(l, n);
    },
    p(i, s) {
      s & 4 && ae(t, i[2]), s & 2 && v(l, "for", i[1]);
    },
    d(i) {
      i && m(l);
    }
  };
}
function Ue(e) {
  let l, t, n, i, s, a, u, f = e[2] && ce(e);
  return {
    c() {
      l = y("p"), f && f.c(), t = H(), n = y("input"), v(n, "name", e[1]), n.required = !0, v(n, "class", "input svelte-utfbqb"), v(n, "placeholder", i = e[3] === "tel" ? "123-456-7890" : ""), v(n, "pattern", s = e[3] === "tel" ? "\\d{3}-\\d{3}-\\d{4}" : ""), v(l, "class", "form-control svelte-utfbqb");
    },
    m(c, o) {
      C(c, l, o), f && f.m(l, null), b(l, t), b(l, n), fe(n, e[0]), a || (u = [
        z(n, "change", e[5]),
        Be(e[4].call(null, n)),
        z(n, "input", e[7])
      ], a = !0);
    },
    p(c, [o]) {
      c[2] ? f ? f.p(c, o) : (f = ce(c), f.c(), f.m(l, t)) : f && (f.d(1), f = null), o & 2 && v(n, "name", c[1]), o & 8 && i !== (i = c[3] === "tel" ? "123-456-7890" : "") && v(n, "placeholder", i), o & 8 && s !== (s = c[3] === "tel" ? "\\d{3}-\\d{3}-\\d{4}" : "") && v(n, "pattern", s), o & 1 && n.value !== c[0] && fe(n, c[0]);
    },
    i: w,
    o: w,
    d(c) {
      c && m(l), f && f.d(), a = !1, F(u);
    }
  };
}
function Le(e, l, t) {
  let { value: n, name: i, label: s, filled: a = !1, type: u = "text" } = l;
  function f(r) {
    r.type = u;
  }
  function c(r) {
    if (u === "email") {
      r.preventDefault();
      const d = r.target.value;
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(d) ? (t(0, n = d), t(6, a = !0)) : (alert("Please enter a valid email address"), t(6, a = !1));
    }
    if (u === "tel") {
      r.preventDefault();
      const d = r.target.value;
      /^\d{3}-\d{3}-\d{4}$/.test(d) ? (t(0, n = d), t(6, a = !0)) : (alert("Please enter a valid phone number in the format 123-456-7890"), t(6, a = !1));
    }
    if (u === "text") {
      r.preventDefault();
      const d = r.target.value;
      d.length > 2 ? (t(0, n = d), t(6, a = !0)) : (alert("Please enter a valid name"), t(6, a = !1));
    }
  }
  function o() {
    n = this.value, t(0, n);
  }
  return e.$$set = (r) => {
    "value" in r && t(0, n = r.value), "name" in r && t(1, i = r.name), "label" in r && t(2, s = r.label), "filled" in r && t(6, a = r.filled), "type" in r && t(3, u = r.type);
  }, [
    n,
    i,
    s,
    u,
    f,
    c,
    a,
    o
  ];
}
class $ extends L {
  constructor(l) {
    super(), U(this, l, Le, Ue, D, {
      value: 0,
      name: 1,
      label: 2,
      filled: 6,
      type: 3
    });
  }
}
function de(e, l, t) {
  const n = e.slice();
  return n[8] = l[t], n;
}
function he(e) {
  let l, t, n, i, s = e[8].label + "", a, u, f, c;
  return {
    c() {
      l = y("label"), t = y("input"), i = H(), a = Q(s), u = H(), v(t, "type", "radio"), v(t, "name", "healthGoal"), t.__value = n = e[8].value, t.value = t.__value, v(t, "class", "svelte-hfz2wg"), e[7][0].push(t), v(l, "class", "svelte-hfz2wg");
    },
    m(o, r) {
      C(o, l, r), b(l, t), t.checked = t.__value === e[0], b(l, i), b(l, a), b(l, u), f || (c = [
        z(t, "click", function() {
          ne(e[1] ? e[3] : e[4]) && (e[1] ? e[3] : e[4]).apply(this, arguments);
        }),
        z(t, "change", e[6])
      ], f = !0);
    },
    p(o, r) {
      e = o, r & 4 && n !== (n = e[8].value) && (t.__value = n, t.value = t.__value), r & 1 && (t.checked = t.__value === e[0]), r & 4 && s !== (s = e[8].label + "") && ae(a, s);
    },
    d(o) {
      o && m(l), e[7][0].splice(e[7][0].indexOf(t), 1), f = !1, F(c);
    }
  };
}
function je(e) {
  let l, t = e[2], n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = he(de(e, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      l = ye();
    },
    m(i, s) {
      for (let a = 0; a < n.length; a += 1)
        n[a].m(i, s);
      C(i, l, s);
    },
    p(i, [s]) {
      if (s & 31) {
        t = i[2];
        let a;
        for (a = 0; a < t.length; a += 1) {
          const u = de(i, t, a);
          n[a] ? n[a].p(u, s) : (n[a] = he(u), n[a].c(), n[a].m(l.parentNode, l));
        }
        for (; a < n.length; a += 1)
          n[a].d(1);
        n.length = t.length;
      }
    },
    i: w,
    o: w,
    d(i) {
      ie(n, i), i && m(l);
    }
  };
}
function We(e, l, t) {
  let { group: n = "" } = l, { choices: i = [] } = l, { step_filled: s = !1 } = l, { quiz_ender: a = !1 } = l;
  function u(r) {
    t(0, n = r.target.value), t(5, s = !0);
  }
  function f(r) {
    t(0, n = r.target.value), t(5, s = !0), t(1, a = !0);
  }
  const c = [[]];
  function o() {
    n = this.__value, t(0, n);
  }
  return e.$$set = (r) => {
    "group" in r && t(0, n = r.group), "choices" in r && t(2, i = r.choices), "step_filled" in r && t(5, s = r.step_filled), "quiz_ender" in r && t(1, a = r.quiz_ender);
  }, [
    n,
    a,
    i,
    u,
    f,
    s,
    o,
    c
  ];
}
class Ce extends L {
  constructor(l) {
    super(), U(this, l, We, je, D, {
      group: 0,
      choices: 2,
      step_filled: 5,
      quiz_ender: 1
    });
  }
}
function _e(e, l, t) {
  const n = e.slice();
  return n[6] = l[t], n;
}
function ge(e) {
  let l, t = e[6].label + "", n, i, s, a, u, f, c, o, r;
  return {
    c() {
      l = y("label"), n = Q(t), i = H(), s = y("input"), u = H(), f = y("span"), c = H(), v(s, "type", "checkbox"), v(s, "name", "healthGoal"), s.__value = a = e[6].value, s.value = s.__value, v(s, "class", "svelte-15hg2d0"), e[5][0].push(s), v(f, "class", "checkmark svelte-15hg2d0"), v(l, "class", "svelte-15hg2d0");
    },
    m(d, g) {
      C(d, l, g), b(l, n), b(l, i), b(l, s), s.checked = ~e[0].indexOf(s.__value), b(l, u), b(l, f), b(l, c), o || (r = [
        z(s, "click", e[3]),
        z(s, "change", e[4])
      ], o = !0);
    },
    p(d, g) {
      g & 4 && t !== (t = d[6].label + "") && ae(n, t), g & 4 && a !== (a = d[6].value) && (s.__value = a, s.value = s.__value), g & 1 && (s.checked = ~d[0].indexOf(s.__value));
    },
    d(d) {
      d && m(l), e[5][0].splice(e[5][0].indexOf(s), 1), o = !1, F(r);
    }
  };
}
function Ze(e) {
  let l, t = e[2], n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = ge(_e(e, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      l = ye();
    },
    m(i, s) {
      for (let a = 0; a < n.length; a += 1)
        n[a].m(i, s);
      C(i, l, s);
    },
    p(i, [s]) {
      if (s & 7) {
        t = i[2];
        let a;
        for (a = 0; a < t.length; a += 1) {
          const u = _e(i, t, a);
          n[a] ? n[a].p(u, s) : (n[a] = ge(u), n[a].c(), n[a].m(l.parentNode, l));
        }
        for (; a < n.length; a += 1)
          n[a].d(1);
        n.length = t.length;
      }
    },
    i: w,
    o: w,
    d(i) {
      ie(n, i), i && m(l);
    }
  };
}
function Je(e, l, t) {
  let { group: n = "" } = l, { choices: i = [] } = l, { filled: s = !0 } = l;
  const a = [[]], u = () => t(1, s = !0);
  function f() {
    n = Me(a[0], this.__value, this.checked), t(0, n);
  }
  return e.$$set = (c) => {
    "group" in c && t(0, n = c.group), "choices" in c && t(2, i = c.choices), "filled" in c && t(1, s = c.filled);
  }, [n, s, i, u, f, a];
}
class se extends L {
  constructor(l) {
    super(), U(this, l, Je, Ze, D, { group: 0, choices: 2, filled: 1 });
  }
}
function Ke(e) {
  let l, t, n, i, s, a, u, f;
  return {
    c() {
      l = y("div"), t = y("h2"), t.textContent = "Thanks for telling us about you!", n = H(), i = y("p"), i.textContent = "Parsley will be in touch within the next 24 hours to", s = H(), a = y("button"), a.textContent = "Finish", v(a, "class", "btn submit svelte-9rvajx"), v(l, "class", "message svelte-9rvajx");
    },
    m(c, o) {
      C(c, l, o), b(l, t), b(l, n), b(l, i), b(l, s), b(l, a), u || (f = z(a, "click", e[4]), u = !0);
    },
    p: w,
    i: w,
    o: w,
    d(c) {
      c && m(l), u = !1, f();
    }
  };
}
function Ve(e) {
  let l, t, n, i, s, a, u;
  function f(d) {
    e[20](d);
  }
  function c(d) {
    e[21](d);
  }
  function o(d) {
    e[22](d);
  }
  let r = {
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
  return e[3].howSoonLookingToMakeChanges !== void 0 && (r.group = e[3].howSoonLookingToMakeChanges), e[1] !== void 0 && (r.step_filled = e[1]), e[0] !== void 0 && (r.quiz_ender = e[0]), n = new Ce({ props: r }), P.push(() => A(n, "group", f)), P.push(() => A(n, "step_filled", c)), P.push(() => A(n, "quiz_ender", o)), {
    c() {
      l = y("h2"), l.textContent = "How soon are you looking to make changes to your health?", t = H(), B(n.$$.fragment);
    },
    m(d, g) {
      C(d, l, g), C(d, t, g), T(n, d, g), u = !0;
    },
    p(d, g) {
      const p = {};
      !i && g & 8 && (i = !0, p.group = d[3].howSoonLookingToMakeChanges, I(() => i = !1)), !s && g & 2 && (s = !0, p.step_filled = d[1], I(() => s = !1)), !a && g & 1 && (a = !0, p.quiz_ender = d[0], I(() => a = !1)), n.$set(p);
    },
    i(d) {
      u || (O(n.$$.fragment, d), u = !0);
    },
    o(d) {
      N(n.$$.fragment, d), u = !1;
    },
    d(d) {
      d && m(l), d && m(t), S(n, d);
    }
  };
}
function Xe(e) {
  let l, t, n, i, s, a, u, f, c, o;
  function r(_) {
    e[16](_);
  }
  function d(_) {
    e[17](_);
  }
  let g = {
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
  e[3].triedToImproveHealth !== void 0 && (g.group = e[3].triedToImproveHealth), e[1] !== void 0 && (g.filled = e[1]), n = new se({ props: g }), P.push(() => A(n, "group", r)), P.push(() => A(n, "filled", d));
  function p(_) {
    e[18](_);
  }
  function M(_) {
    e[19](_);
  }
  let E = { label: "Other", name: "fullName" };
  return e[3].triedToImproveHealthOther !== void 0 && (E.value = e[3].triedToImproveHealthOther), e[1] !== void 0 && (E.filled = e[1]), u = new $({ props: E }), P.push(() => A(u, "value", p)), P.push(() => A(u, "filled", M)), {
    c() {
      l = y("h2"), l.textContent = "What have you tried to improve your health?", t = H(), B(n.$$.fragment), a = H(), B(u.$$.fragment);
    },
    m(_, k) {
      C(_, l, k), C(_, t, k), T(n, _, k), C(_, a, k), T(u, _, k), o = !0;
    },
    p(_, k) {
      const q = {};
      !i && k & 8 && (i = !0, q.group = _[3].triedToImproveHealth, I(() => i = !1)), !s && k & 2 && (s = !0, q.filled = _[1], I(() => s = !1)), n.$set(q);
      const R = {};
      !f && k & 8 && (f = !0, R.value = _[3].triedToImproveHealthOther, I(() => f = !1)), !c && k & 2 && (c = !0, R.filled = _[1], I(() => c = !1)), u.$set(R);
    },
    i(_) {
      o || (O(n.$$.fragment, _), O(u.$$.fragment, _), o = !0);
    },
    o(_) {
      N(n.$$.fragment, _), N(u.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && m(l), _ && m(t), S(n, _), _ && m(a), S(u, _);
    }
  };
}
function Ye(e) {
  let l, t, n, i, s, a;
  function u(o) {
    e[14](o);
  }
  function f(o) {
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
  return e[1] !== void 0 && (c.filled = e[1]), e[3].whatTesting !== void 0 && (c.group = e[3].whatTesting), n = new se({ props: c }), P.push(() => A(n, "filled", u)), P.push(() => A(n, "group", f)), {
    c() {
      l = y("h2"), l.textContent = "What testing have you done regarding your health concerns?", t = H(), B(n.$$.fragment);
    },
    m(o, r) {
      C(o, l, r), C(o, t, r), T(n, o, r), a = !0;
    },
    p(o, r) {
      const d = {};
      r & 8 && (d.choices = o[3].healthConcerns == "Preventative care" ? [
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
      ]), !i && r & 2 && (i = !0, d.filled = o[1], I(() => i = !1)), !s && r & 8 && (s = !0, d.group = o[3].whatTesting, I(() => s = !1)), n.$set(d);
    },
    i(o) {
      a || (O(n.$$.fragment, o), a = !0);
    },
    o(o) {
      N(n.$$.fragment, o), a = !1;
    },
    d(o) {
      o && m(l), o && m(t), S(n, o);
    }
  };
}
function $e(e) {
  let l, t, n, i, s, a;
  function u(o) {
    e[12](o);
  }
  function f(o) {
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
  return e[1] !== void 0 && (c.filled = e[1]), e[3].healthConcerns !== void 0 && (c.group = e[3].healthConcerns), n = new se({ props: c }), P.push(() => A(n, "filled", u)), P.push(() => A(n, "group", f)), {
    c() {
      l = y("h2"), l.textContent = "What are your biggest health concerns?", t = H(), B(n.$$.fragment);
    },
    m(o, r) {
      C(o, l, r), C(o, t, r), T(n, o, r), a = !0;
    },
    p(o, r) {
      const d = {};
      !i && r & 2 && (i = !0, d.filled = o[1], I(() => i = !1)), !s && r & 8 && (s = !0, d.group = o[3].healthConcerns, I(() => s = !1)), n.$set(d);
    },
    i(o) {
      a || (O(n.$$.fragment, o), a = !0);
    },
    o(o) {
      N(n.$$.fragment, o), a = !1;
    },
    d(o) {
      o && m(l), o && m(t), S(n, o);
    }
  };
}
function xe(e) {
  let l, t, n, i, s, a;
  function u(o) {
    e[10](o);
  }
  function f(o) {
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
  return e[3].healthGoal !== void 0 && (c.group = e[3].healthGoal), e[1] !== void 0 && (c.step_filled = e[1]), n = new Ce({ props: c }), P.push(() => A(n, "group", u)), P.push(() => A(n, "step_filled", f)), {
    c() {
      l = y("h2"), l.textContent = "Which statement best describes your health goal?", t = H(), B(n.$$.fragment);
    },
    m(o, r) {
      C(o, l, r), C(o, t, r), T(n, o, r), a = !0;
    },
    p(o, r) {
      const d = {};
      !i && r & 8 && (i = !0, d.group = o[3].healthGoal, I(() => i = !1)), !s && r & 2 && (s = !0, d.step_filled = o[1], I(() => s = !1)), n.$set(d);
    },
    i(o) {
      a || (O(n.$$.fragment, o), a = !0);
    },
    o(o) {
      N(n.$$.fragment, o), a = !1;
    },
    d(o) {
      o && m(l), o && m(t), S(n, o);
    }
  };
}
function et(e) {
  let l, t, n, i, s, a, u;
  function f(g) {
    e[7](g);
  }
  let c = {
    label: "Email",
    type: "email",
    name: "Email",
    filled: e[1]
  };
  e[3].email !== void 0 && (c.value = e[3].email), l = new $({ props: c }), P.push(() => A(l, "value", f));
  function o(g) {
    e[8](g);
  }
  function r(g) {
    e[9](g);
  }
  let d = {
    type: "tel",
    label: "Phone Number",
    name: "Phone Number"
  };
  return e[3].phoneNum !== void 0 && (d.value = e[3].phoneNum), e[1] !== void 0 && (d.filled = e[1]), i = new $({ props: d }), P.push(() => A(i, "value", o)), P.push(() => A(i, "filled", r)), {
    c() {
      B(l.$$.fragment), n = H(), B(i.$$.fragment);
    },
    m(g, p) {
      T(l, g, p), C(g, n, p), T(i, g, p), u = !0;
    },
    p(g, p) {
      const M = {};
      p & 2 && (M.filled = g[1]), !t && p & 8 && (t = !0, M.value = g[3].email, I(() => t = !1)), l.$set(M);
      const E = {};
      !s && p & 8 && (s = !0, E.value = g[3].phoneNum, I(() => s = !1)), !a && p & 2 && (a = !0, E.filled = g[1], I(() => a = !1)), i.$set(E);
    },
    i(g) {
      u || (O(l.$$.fragment, g), O(i.$$.fragment, g), u = !0);
    },
    o(g) {
      N(l.$$.fragment, g), N(i.$$.fragment, g), u = !1;
    },
    d(g) {
      S(l, g), g && m(n), S(i, g);
    }
  };
}
function tt(e) {
  let l, t, n, i, s, a;
  function u(o) {
    e[5](o);
  }
  function f(o) {
    e[6](o);
  }
  let c = { label: "Full Name", name: "fullName" };
  return e[3].name !== void 0 && (c.value = e[3].name), e[1] !== void 0 && (c.filled = e[1]), n = new $({ props: c }), P.push(() => A(n, "value", u)), P.push(() => A(n, "filled", f)), {
    c() {
      l = y("h2"), l.textContent = "What\u2019s your full name?", t = H(), B(n.$$.fragment);
    },
    m(o, r) {
      C(o, l, r), C(o, t, r), T(n, o, r), a = !0;
    },
    p(o, r) {
      const d = {};
      !i && r & 8 && (i = !0, d.value = o[3].name, I(() => i = !1)), !s && r & 2 && (s = !0, d.filled = o[1], I(() => s = !1)), n.$set(d);
    },
    i(o) {
      a || (O(n.$$.fragment, o), a = !0);
    },
    o(o) {
      N(n.$$.fragment, o), a = !1;
    },
    d(o) {
      o && m(l), o && m(t), S(n, o);
    }
  };
}
function lt(e) {
  let l, t, n, i, s, a;
  const u = [
    tt,
    et,
    xe,
    $e,
    Ye,
    Xe,
    Ve,
    Ke
  ], f = [];
  function c(o, r) {
    return o[2] == "Q1" ? 0 : o[2] == "Q2" ? 1 : o[2] == "Q3" ? 2 : o[2] == "Q4" ? 3 : o[2] == "Q5" ? 4 : o[2] == "Q6" ? 5 : o[2] == "Q7" ? 6 : o[2] == "Thanks" ? 7 : -1;
  }
  return ~(t = c(e)) && (n = f[t] = u[t](e)), {
    c() {
      l = y("form"), n && n.c(), v(l, "class", "form-container svelte-9rvajx");
    },
    m(o, r) {
      C(o, l, r), ~t && f[t].m(l, null), i = !0, s || (a = z(l, "submit", e[4]), s = !0);
    },
    p(o, [r]) {
      let d = t;
      t = c(o), t === d ? ~t && f[t].p(o, r) : (n && (Ge(), N(f[d], 1, 1, () => {
        f[d] = null;
      }), Qe()), ~t ? (n = f[t], n ? n.p(o, r) : (n = f[t] = u[t](o), n.c()), O(n, 1), n.m(l, null)) : n = null);
    },
    i(o) {
      i || (O(n), i = !0);
    },
    o(o) {
      N(n), i = !1;
    },
    d(o) {
      o && m(l), ~t && f[t].d(), s = !1, a();
    }
  };
}
function nt(e, l, t) {
  let { active_step: n } = l, { step_filled: i = !1 } = l, { quiz_ender: s = !1 } = l, a = window.location.href, u = {
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
  const f = (h) => {
    h.preventDefault(), console.table(u);
  }, c = () => {
    console.log("end"), console.table(u), o(u);
  }, o = (h) => {
    console.log("converting data");
    let j = h.name.split(" "), J = {
      email: h.email,
      health_goal: h.healthGoal,
      optimization_timeline: h.howSoonLookingToMakeChanges,
      first_name: j[0].toUpperCase(),
      last_name: j[j.length - 1].toUpperCase(),
      phoneNumber: h.phoneNum,
      pre_parsley_optimizations: h.triedToImproveHealth,
      pre_parsley_optimizations_other: h.triedToImproveHealthOther,
      pre_parsley_testing: h.whatTesting
    };
    for (let K = 0; K < h.healthConcerns.length; K++)
      J[`health_concern_${K + 1}`] = h.healthConcerns[K];
    console.log(J), r(a);
  }, r = (h) => {
    let j = new URLSearchParams(h.search);
    j.set("quiz_provided_by", "thesis_quiz");
    let J = h + "?" + j.toString();
    window.history.pushState({}, "", J);
  };
  function d(h) {
    e.$$.not_equal(u.name, h) && (u.name = h, t(3, u));
  }
  function g(h) {
    i = h, t(1, i);
  }
  function p(h) {
    e.$$.not_equal(u.email, h) && (u.email = h, t(3, u));
  }
  function M(h) {
    e.$$.not_equal(u.phoneNum, h) && (u.phoneNum = h, t(3, u));
  }
  function E(h) {
    i = h, t(1, i);
  }
  function _(h) {
    e.$$.not_equal(u.healthGoal, h) && (u.healthGoal = h, t(3, u));
  }
  function k(h) {
    i = h, t(1, i);
  }
  function q(h) {
    i = h, t(1, i);
  }
  function R(h) {
    e.$$.not_equal(u.healthConcerns, h) && (u.healthConcerns = h, t(3, u));
  }
  function Ee(h) {
    i = h, t(1, i);
  }
  function Ie(h) {
    e.$$.not_equal(u.whatTesting, h) && (u.whatTesting = h, t(3, u));
  }
  function Ae(h) {
    e.$$.not_equal(u.triedToImproveHealth, h) && (u.triedToImproveHealth = h, t(3, u));
  }
  function ke(h) {
    i = h, t(1, i);
  }
  function He(h) {
    e.$$.not_equal(u.triedToImproveHealthOther, h) && (u.triedToImproveHealthOther = h, t(3, u));
  }
  function we(h) {
    i = h, t(1, i);
  }
  function Oe(h) {
    e.$$.not_equal(u.howSoonLookingToMakeChanges, h) && (u.howSoonLookingToMakeChanges = h, t(3, u));
  }
  function Ne(h) {
    i = h, t(1, i);
  }
  function Te(h) {
    s = h, t(0, s);
  }
  return e.$$set = (h) => {
    "active_step" in h && t(2, n = h.active_step), "step_filled" in h && t(1, i = h.step_filled), "quiz_ender" in h && t(0, s = h.quiz_ender);
  }, e.$$.update = () => {
    e.$$.dirty & 1 && s === !0 && c();
  }, [
    s,
    i,
    n,
    u,
    f,
    d,
    g,
    p,
    M,
    E,
    _,
    k,
    q,
    R,
    Ee,
    Ie,
    Ae,
    ke,
    He,
    we,
    Oe,
    Ne,
    Te
  ];
}
class it extends L {
  constructor(l) {
    super(), U(this, l, nt, lt, D, {
      active_step: 2,
      step_filled: 1,
      quiz_ender: 0
    });
  }
}
function ve(e, l, t) {
  const n = e.slice();
  return n[8] = l[t], n[10] = t, n;
}
function pe(e) {
  let l, t;
  return {
    c() {
      l = y("div"), v(l, "class", "circle " + (e[10] == 0 ? "active" : "") + " svelte-1vmt17z"), v(l, "data-title", t = e[8]);
    },
    m(n, i) {
      C(n, l, i);
    },
    p(n, i) {
      i & 1 && t !== (t = n[8]) && v(l, "data-title", t);
    },
    d(n) {
      n && m(l);
    }
  };
}
function at(e) {
  let l, t, n, i = e[0], s = [];
  for (let a = 0; a < i.length; a += 1)
    s[a] = pe(ve(e, i, a));
  return {
    c() {
      l = y("div"), t = y("div"), n = H();
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      v(t, "class", "progress svelte-1vmt17z"), v(l, "class", "progress-container svelte-1vmt17z");
    },
    m(a, u) {
      C(a, l, u), b(l, t), e[5](t), b(l, n);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(l, null);
      e[6](l);
    },
    p(a, [u]) {
      if (u & 1) {
        i = a[0];
        let f;
        for (f = 0; f < i.length; f += 1) {
          const c = ve(a, i, f);
          s[f] ? s[f].p(c, u) : (s[f] = pe(c), s[f].c(), s[f].m(l, null));
        }
        for (; f < s.length; f += 1)
          s[f].d(1);
        s.length = i.length;
      }
    },
    i: w,
    o: w,
    d(a) {
      a && m(l), e[5](null), ie(s, a), e[6](null);
    }
  };
}
function ot(e, l, t) {
  let { steps: n = [], currentActive: i = 1 } = l, s, a;
  const u = (r) => {
    t(1, s = document.querySelectorAll(".circle")), r == 1 ? (t(3, i++, i), i > s.length && t(3, i = s.length)) : (t(3, i--, i), i < 1 && t(3, i = 1)), f();
  };
  function f() {
    s.forEach((d, g) => {
      g < i ? d.classList.add("active") : d.classList.remove("active");
    });
    const r = document.querySelectorAll(".active");
    t(2, a.style.width = (r.length - 1) / (s.length - 1) * 100 + "%", a);
  }
  function c(r) {
    P[r ? "unshift" : "push"](() => {
      a = r, t(2, a);
    });
  }
  function o(r) {
    P[r ? "unshift" : "push"](() => {
      s = r, t(1, s);
    });
  }
  return e.$$set = (r) => {
    "steps" in r && t(0, n = r.steps), "currentActive" in r && t(3, i = r.currentActive);
  }, [
    n,
    s,
    a,
    i,
    u,
    c,
    o
  ];
}
class st extends L {
  constructor(l) {
    super(), U(this, l, ot, at, D, {
      steps: 0,
      currentActive: 3,
      handleProgress: 4
    });
  }
  get handleProgress() {
    return this.$$.ctx[4];
  }
}
function me(e) {
  let l, t, n, i, s, a;
  return {
    c() {
      l = y("div"), t = y("button"), n = Q("Continue"), v(t, "class", i = re(e[1] == e[4].length || e[2] == !1 ? "btn disabled" : "btn") + " svelte-j6dlvr"), v(t, "tabindex", "0"), v(t, "type", "button"), v(l, "class", "step-button svelte-j6dlvr");
    },
    m(u, f) {
      C(u, l, f), b(l, t), b(t, n), s || (a = z(t, "click", e[10]), s = !0);
    },
    p(u, f) {
      f & 6 && i !== (i = re(u[1] == u[4].length || u[2] == !1 ? "btn disabled" : "btn") + " svelte-j6dlvr") && v(t, "class", i);
    },
    d(u) {
      u && m(l), s = !1, a();
    }
  };
}
function ut(e) {
  let l, t, n, i, s, a, u, f, c, o;
  function r(_) {
    e[6](_);
  }
  let d = { steps: e[4] };
  e[1] !== void 0 && (d.currentActive = e[1]), n = new st({ props: d }), P.push(() => A(n, "currentActive", r)), e[7](n);
  function g(_) {
    e[8](_);
  }
  function p(_) {
    e[9](_);
  }
  let M = {
    active_step: e[4][e[1] - 1]
  };
  e[0] !== void 0 && (M.quiz_ender = e[0]), e[2] !== void 0 && (M.step_filled = e[2]), a = new it({ props: M }), P.push(() => A(a, "quiz_ender", g)), P.push(() => A(a, "step_filled", p));
  let E = e[1] <= 6 && me(e);
  return {
    c() {
      l = y("main"), t = y("div"), B(n.$$.fragment), s = H(), B(a.$$.fragment), c = H(), E && E.c(), v(t, "class", "container svelte-j6dlvr"), v(l, "class", "svelte-j6dlvr");
    },
    m(_, k) {
      C(_, l, k), b(l, t), T(n, t, null), b(t, s), T(a, t, null), b(t, c), E && E.m(t, null), o = !0;
    },
    p(_, [k]) {
      const q = {};
      !i && k & 2 && (i = !0, q.currentActive = _[1], I(() => i = !1)), n.$set(q);
      const R = {};
      k & 2 && (R.active_step = _[4][_[1] - 1]), !u && k & 1 && (u = !0, R.quiz_ender = _[0], I(() => u = !1)), !f && k & 4 && (f = !0, R.step_filled = _[2], I(() => f = !1)), a.$set(R), _[1] <= 6 ? E ? E.p(_, k) : (E = me(_), E.c(), E.m(t, null)) : E && (E.d(1), E = null);
    },
    i(_) {
      o || (O(n.$$.fragment, _), O(a.$$.fragment, _), o = !0);
    },
    o(_) {
      N(n.$$.fragment, _), N(a.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && m(l), e[7](null), S(n), S(a), E && E.d();
    }
  };
}
function rt(e, l, t) {
  let n = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Thanks"], i = 1, s = !1, a = !1, u;
  const f = (p) => {
    u.handleProgress(p), t(2, s = !1);
  };
  function c(p) {
    i = p, t(1, i);
  }
  function o(p) {
    P[p ? "unshift" : "push"](() => {
      u = p, t(3, u);
    });
  }
  function r(p) {
    a = p, t(0, a);
  }
  function d(p) {
    s = p, t(2, s);
  }
  const g = () => f(1);
  return e.$$.update = () => {
    e.$$.dirty & 1 && a === !0 && f(1);
  }, [
    a,
    i,
    s,
    u,
    n,
    f,
    c,
    o,
    r,
    d,
    g
  ];
}
class ft extends L {
  constructor(l) {
    super(), U(this, l, rt, ut, D, {});
  }
}
function ct(e) {
  let l, t;
  return l = new ft({}), {
    c() {
      B(l.$$.fragment);
    },
    m(n, i) {
      T(l, n, i), t = !0;
    },
    p: w,
    i(n) {
      t || (O(l.$$.fragment, n), t = !0);
    },
    o(n) {
      N(l.$$.fragment, n), t = !1;
    },
    d(n) {
      S(l, n);
    }
  };
}
class dt extends L {
  constructor(l) {
    super(), U(this, l, null, ct, D, {});
  }
}
var ht = new dt({
  target: document.getElementById("svelte-container")
});
export {
  ht as default
};
