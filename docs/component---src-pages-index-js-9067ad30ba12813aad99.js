/*! For license information please see component---src-pages-index-js-9067ad30ba12813aad99.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        "9EFL": function (e, t, r) {
            
            e.exports = r("R1wR");
        },
        R1wR: function (e, t, r) {
            
            const n = r("YVoz"),
                o = "function" == typeof Symbol && Symbol.for,
                a = o ? Symbol.for("react.element") : 60103,
                l = o ? Symbol.for("react.portal") : 60106,
                u = o ? Symbol.for("react.fragment") : 60107,
                c = o ? Symbol.for("react.strict_mode") : 60108,
                i = o ? Symbol.for("react.profiler") : 60114,
                s = o ? Symbol.for("react.provider") : 60109,
                f = o ? Symbol.for("react.context") : 60110,
                p = o ? Symbol.for("react.forward_ref") : 60112,
                m = o ? Symbol.for("react.suspense") : 60113,
                y = o ? Symbol.for("react.memo") : 60115,
                d = o ? Symbol.for("react.lazy") : 60116,
                h = "function" == typeof Symbol && Symbol.iterator;
            function b(e) {
                for (
                    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
                    r < arguments.length;
                    r++
                )
                    t += "&args[]=" + encodeURIComponent(arguments[r]);
                return (
                    "Minified React error #" +
                    e +
                    "; visit " +
                    t +
                    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                );
            }
            const E = {
                    isMounted: function () {
                        return !1;
                    },
                    enqueueForceUpdate: function () {},
                    enqueueReplaceState: function () {},
                    enqueueSetState: function () {},
                },
                g = {};
            function v(e, t, r) {
                (this.props = e), (this.context = t), (this.refs = g), (this.updater = r || E);
            }
            function w() {}
            function k(e, t, r) {
                (this.props = e), (this.context = t), (this.refs = g), (this.updater = r || E);
            }
            (v.prototype.isReactComponent = {}),
            (v.prototype.setState = function (e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e)
                    throw Error(b(85));
                this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (v.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (w.prototype = v.prototype);
            const _ = (k.prototype = new w());
            (_.constructor = k), n(_, v.prototype), (_.isPureReactComponent = !0);
            const S = { current: null },
                R = Object.prototype.hasOwnProperty,
                C = { key: !0, ref: !0, __self: !0, __source: !0 };
            function P(e, t, r) {
                let n,
                    o = {},
                    l = null,
                    u = null;
                if (null != t)
                    for (n in (void 0 !== t.ref && (u = t.ref),
                    void 0 !== t.key && (l = "" + t.key),
                    t))
                        R.call(t, n) && !C.hasOwnProperty(n) && (o[n] = t[n]);
                let c = arguments.length - 2;
                if (1 === c) o.children = r;
                else if (1 < c) {
                    for (var i = Array(c), s = 0; s < c; s++) i[s] = arguments[s + 2];
                    o.children = i;
                }
                if (e && e.defaultProps)
                    for (n in (c = e.defaultProps)) void 0 === o[n] && (o[n] = c[n]);
                return { $$typeof: a, type: e, key: l, ref: u, props: o, _owner: S.current };
            }
            function x(e) {
                return "object" == typeof e && null !== e && e.$$typeof === a;
            }
            const $ = /\/+/g,
                j = [];
            function O(e, t, r, n) {
                if (j.length) {
                    const o = j.pop();
                    return (
                        (o.result = e),
                        (o.keyPrefix = t),
                        (o.func = r),
                        (o.context = n),
                        (o.count = 0),
                        o
                    );
                }
                return { result: e, keyPrefix: t, func: r, context: n, count: 0 };
            }
            function I(e) {
                (e.result = null),
                (e.keyPrefix = null),
                (e.func = null),
                (e.context = null),
                (e.count = 0),
                10 > j.length && j.push(e);
            }
            function N(e, t, r) {
                return null == e
                    ? 0
                    : (function e(t, r, n, o) {
                        let u = typeof t;
                        ("undefined" !== u && "boolean" !== u) || (t = null);
                        let c = !1;
                        if (null === t) c = !0;
                        else
                            switch (u) {
                                case "string":
                                case "number":
                                    c = !0;
                                    break;
                                case "object":
                                    switch (t.$$typeof) {
                                        case a:
                                        case l:
                                            c = !0;
                                    }
                            }
                        if (c) return n(o, t, "" === r ? "." + A(t, 0) : r), 1;
                        if (((c = 0), (r = "" === r ? "." : r + ":"), Array.isArray(t)))
                            for (var i = 0; i < t.length; i++) {
                                var s = r + A((u = t[i]), i);
                                c += e(u, s, n, o);
                            }
                        else if (
                            (null === t || "object" != typeof t
                                ? (s = null)
                                : (s =
                                        "function" == typeof (s = (h && t[h]) || t["@@iterator"])
                                            ? s
                                            : null),
                            "function" == typeof s)
                        )
                            for (t = s.call(t), i = 0; !(u = t.next()).done; )
                                c += e((u = u.value), (s = r + A(u, i++)), n, o);
                        else if ("object" === u)
                            throw (
                                ((n = "" + t),
                                Error(
                                    b(
                                        31,
                                        "[object Object]" === n
                                            ? "object with keys {" +
                                                    Object.keys(t).join(", ") +
                                                    "}"
                                            : n,
                                        "",
                                    ),
                                ))
                            );
                        return c;
                    })(e, "", t, r);
            }
            function A(e, t) {
                return "object" == typeof e && null !== e && null != e.key
                    ? (function (e) {
                        const t = { "=": "=0", ":": "=2" };
                        return (
                            "$" +
                              ("" + e).replace(/[=:]/g, function (e) {
                                  return t[e];
                              })
                        );
                    })(e.key)
                    : t.toString(36);
            }
            function L(e, t) {
                e.func.call(e.context, t, e.count++);
            }
            function D(e, t, r) {
                const n = e.result,
                    o = e.keyPrefix;
                (e = e.func.call(e.context, t, e.count++)),
                Array.isArray(e)
                    ? U(e, n, r, function (e) {
                        return e;
                    })
                    : null != e &&
                          (x(e) &&
                              (e = (function (e, t) {
                                  return {
                                      $$typeof: a,
                                      type: e.type,
                                      key: t,
                                      ref: e.ref,
                                      props: e.props,
                                      _owner: e._owner,
                                  };
                              })(
                                  e,
                                  o +
                                      (!e.key || (t && t.key === e.key)
                                          ? ""
                                          : ("" + e.key).replace($, "$&/") + "/") +
                                      r,
                              )),
                          n.push(e));
            }
            function U(e, t, r, n, o) {
                let a = "";
                null != r && (a = ("" + r).replace($, "$&/") + "/"),
                N(e, D, (t = O(t, a, n, o))),
                I(t);
            }
            const F = { current: null };
            function M() {
                const e = F.current;
                if (null === e) throw Error(b(321));
                return e;
            }
            const q = {
                ReactCurrentDispatcher: F,
                ReactCurrentBatchConfig: { suspense: null },
                ReactCurrentOwner: S,
                IsSomeRendererActing: { current: !1 },
                assign: n,
            };
            (t.Children = {
                map: function (e, t, r) {
                    if (null == e) return e;
                    const n = [];
                    return U(e, n, null, t, r), n;
                },
                forEach: function (e, t, r) {
                    if (null == e) return e;
                    N(e, L, (t = O(null, null, t, r))), I(t);
                },
                count: function (e) {
                    return N(
                        e,
                        function () {
                            return null;
                        },
                        null,
                    );
                },
                toArray: function (e) {
                    const t = [];
                    return (
                        U(e, t, null, function (e) {
                            return e;
                        }),
                        t
                    );
                },
                only: function (e) {
                    if (!x(e)) throw Error(b(143));
                    return e;
                },
            }),
            (t.Component = v),
            (t.Fragment = u),
            (t.Profiler = i),
            (t.PureComponent = k),
            (t.StrictMode = c),
            (t.Suspense = m),
            (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q),
            (t.cloneElement = function (e, t, r) {
                if (null == e) throw Error(b(267, e));
                let o = n({}, e.props),
                    l = e.key,
                    u = e.ref,
                    c = e._owner;
                if (null != t) {
                    if (
                        (void 0 !== t.ref && ((u = t.ref), (c = S.current)),
                        void 0 !== t.key && (l = "" + t.key),
                        e.type && e.type.defaultProps)
                    )
                        var i = e.type.defaultProps;
                    for (s in t)
                        R.call(t, s) &&
                                !C.hasOwnProperty(s) &&
                                (o[s] = void 0 === t[s] && void 0 !== i ? i[s] : t[s]);
                }
                var s = arguments.length - 2;
                if (1 === s) o.children = r;
                else if (1 < s) {
                    i = Array(s);
                    for (let f = 0; f < s; f++) i[f] = arguments[f + 2];
                    o.children = i;
                }
                return { $$typeof: a, type: e.type, key: l, ref: u, props: o, _owner: c };
            }),
            (t.createContext = function (e, t) {
                return (
                    void 0 === t && (t = null),
                    ((e = {
                        $$typeof: f,
                        _calculateChangedBits: t,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                    }).Provider = { $$typeof: s, _context: e }),
                    (e.Consumer = e)
                );
            }),
            (t.createElement = P),
            (t.createFactory = function (e) {
                const t = P.bind(null, e);
                return (t.type = e), t;
            }),
            (t.createRef = function () {
                return { current: null };
            }),
            (t.forwardRef = function (e) {
                return { $$typeof: p, render: e };
            }),
            (t.isValidElement = x),
            (t.lazy = function (e) {
                return { $$typeof: d, _ctor: e, _status: -1, _result: null };
            }),
            (t.memo = function (e, t) {
                return { $$typeof: y, type: e, compare: void 0 === t ? null : t };
            }),
            (t.useCallback = function (e, t) {
                return M().useCallback(e, t);
            }),
            (t.useContext = function (e, t) {
                return M().useContext(e, t);
            }),
            (t.useDebugValue = function () {}),
            (t.useEffect = function (e, t) {
                return M().useEffect(e, t);
            }),
            (t.useImperativeHandle = function (e, t, r) {
                return M().useImperativeHandle(e, t, r);
            }),
            (t.useLayoutEffect = function (e, t) {
                return M().useLayoutEffect(e, t);
            }),
            (t.useMemo = function (e, t) {
                return M().useMemo(e, t);
            }),
            (t.useReducer = function (e, t, r) {
                return M().useReducer(e, t, r);
            }),
            (t.useRef = function (e) {
                return M().useRef(e);
            }),
            (t.useState = function (e) {
                return M().useState(e);
            }),
            (t.version = "16.14.0");
        },
        RXBc: function (e, t, r) {
            
            r.r(t);
            const n = r("q1tI"),
                o = r.n(n),
                a = r("Wbzz"),
                l = r("Bl7J"),
                u = r("vrFN"),
                c = r("jHpe"),
                i = r.n(c),
                s =
                    (r("y1X9"),
                    r("QWvX"),
                    r("ZgVT"),
                    r("bPOv"),
                    r("85O/"),
                    r("CjHp"),
                    r("hL/g"),
                    r("1PrZ")),
                f = function () {
                    return o.a.createElement(
                        "footer",
                        { className: "footer-sec" },
                        o.a.createElement(
                            "div",
                            { style: { margin: "0 auto", maxWidth: 960, padding: "1.0875rem" } },
                            o.a.createElement(
                                "h4",
                                { style: { margin: 0 } },
                                "MIT ©",
                                " ",
                                o.a.createElement(
                                    "a",
                                    {
                                        href: "https://github.com/binodswain",
                                        target: "_blank",
                                        rel: "noreferrer",
                                    },
                                    "Binod Swain",
                                ),
                            ),
                        ),
                    );
                };
            f.defaultProps = { siteTitle: "" };
            const p = f,
                m = r("9EFL"),
                y = r.n(m),
                d = function () {
                    return y.a.createElement(
                        "section",
                        { className: "badges" },
                        y.a.createElement(
                            "a",
                            {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://www.npmjs.com/package/react-howler-player",
                            },
                            y.a.createElement("img", {
                                src: "https://badgen.net/npm/v/react-howler-player",
                                alt: "release",
                            }),
                        ),
                        y.a.createElement(
                            "a",
                            {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href:
                                    "https://github.com/binodswain/react-howler-player/open-issues",
                            },
                            y.a.createElement("img", {
                                src:
                                    "https://badgen.net/github/open-issues/binodswain/react-howler-player",
                                alt: "open issues",
                            }),
                        ),
                        y.a.createElement(
                            "a",
                            {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href:
                                    "https://github.com/binodswain/react-howler-player/blob/master/LICENSE",
                            },
                            y.a.createElement("img", {
                                src:
                                    "https://badgen.net/github/license/binodswain/react-howler-player",
                                alt: "license",
                            }),
                        ),
                    );
                },
                h =
                    "https://github.com/binodswain/react-howler-player/raw/master/example/audio_file.mp3";
            t.default = function () {
                Object(n.useEffect)(function () {
                    i.a.highlightAll(), r(!0);
                });
                var e = Object(n.useState)(!1),
                    t = e[0],
                    r = e[1],
                    c = Object(n.useState)(!1),
                    f = c[0],
                    m = c[1];
                return o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                        l.a,
                        null,
                        o.a.createElement(u.a, { title: "Demo" }),
                        o.a.createElement(d, null),
                        o.a.createElement(
                            "section",
                            { className: "demo" },
                            o.a.createElement(
                                "div",
                                { className: "demo-header" },
                                o.a.createElement("h2", null, "Demo"),
                                o.a.createElement(
                                    "button",
                                    {
                                        className: "dark-mode",
                                        onClick: function () {
                                            return m(!f);
                                        },
                                        type: "button",
                                    },
                                    "dark mode ",
                                    f ? "on" : "off",
                                ),
                            ),
                            t
                                ? o.a.createElement(
                                    "ol",
                                    null,
                                    o.a.createElement(
                                        "li",
                                        null,
                                        o.a.createElement("h4", null, "default view"),
                                        o.a.createElement(s.a, {
                                            src: [h],
                                            isDark: f,
                                            profile: "generic",
                                        }),
                                    ),
                                    o.a.createElement(
                                        "li",
                                        null,
                                        o.a.createElement("h4", null, "top_progress profile"),
                                        o.a.createElement(s.a, {
                                            src: [h],
                                            isDark: f,
                                            onLoad: function (e) {
                                                return console.log(e);
                                            },
                                            profile: "top_progress",
                                        }),
                                    ),
                                    o.a.createElement(
                                        "li",
                                        null,
                                        o.a.createElement("h4", null, "minimal profile"),
                                        o.a.createElement(s.a, {
                                            src: [h],
                                            profile: "minimal",
                                            isDark: f,
                                        }),
                                    ),
                                    o.a.createElement(
                                        "li",
                                        null,
                                        o.a.createElement(
                                            a.a,
                                            { to: "/local-file/" },
                                            o.a.createElement("h4", null, "Local audio file"),
                                        ),
                                    ),
                                )
                                : null,
                        ),
                        o.a.createElement("h2", null, "Usage"),
                        "Install the package",
                        o.a.createElement(
                            "pre",
                            null,
                            o.a.createElement(
                                "code",
                                { className: "language-ssh" },
                                "npm install --save react-howler-player",
                            ),
                        ),
                        "Import the package",
                        o.a.createElement(
                            "pre",
                            null,
                            o.a.createElement(
                                "code",
                                { className: "language-jsx" },
                                'import Player from "react-howler-player"',
                            ),
                        ),
                        "Pass an audio url in props.",
                        o.a.createElement(
                            "pre",
                            { className: "line-numbers" },
                            o.a.createElement(
                                "code",
                                { className: "language-jsx" },
                                'import React, { Component, PureComponent } from \'react\nimport Player from "react-howler-player"\n\nexport default class App extends PureComponent {\n  render() {\n      return (\n          <div>\n            <Player\n                src={[AUDIO_URL]}\n            />\n            <Player\n                src={[AUDIO_URL]}   \n                isDark={true}\n            />\n          </div>\n      )\n  }\n}\n',
                            ),
                        ),
                        o.a.createElement(
                            "a",
                            {
                                href: "https://github.com/binodswain/react-howler-player#readme",
                                target: "_blank",
                            },
                            "More config",
                        ),
                    ),
                    o.a.createElement(p, null),
                );
            };
        },
    },
]);
//# sourceMappingURL=component---src-pages-index-js-9067ad30ba12813aad99.js.map
