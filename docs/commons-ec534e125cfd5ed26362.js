/*! For license information please see commons-ec534e125cfd5ed26362.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        "1PrZ": function (e, t, n) {
            
            n("E9XD");
            const r = n("q1tI"),
                o = n.n(r),
                a = n("Cj6n"),
                i = n("17x9"),
                s = n.n(i);
            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function u(e, t) {
                for (let n = 0; n < t.length; n++) {
                    const r = t[n];
                    (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
            }
            function d(e, t, n) {
                return t && u(e.prototype, t), n && u(e, n), e;
            }
            function c(e, t, n) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                        })
                        : (e[t] = n),
                    e
                );
            }
            function _() {
                return (_ =
                    Object.assign ||
                    function (e) {
                        for (let t = 1; t < arguments.length; t++) {
                            const n = arguments[t];
                            for (const r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function p(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                })),
                t &&
                        (function (e, t) {
                            (
                                Object.setPrototypeOf ||
                                function (e, t) {
                                    return (e.__proto__ = t), e;
                                }
                            )(e, t);
                        })(e, t);
            }
            function h(e) {
                return (h = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
            }
            function f(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return e;
            }
            function m(e, t) {
                return !t || ("object" != typeof t && "function" != typeof t) ? f(e) : t;
            }
            function g(e) {
                const t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return (
                            Date.prototype.toString.call(
                                Reflect.construct(Date, [], function () {}),
                            ),
                            !0
                        );
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    let n,
                        r = h(e);
                    if (t) {
                        const o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return m(this, n);
                };
            }
            function y(e, t) {
                void 0 === t && (t = {});
                const n = t.insertAt;
                if (e && "undefined" != typeof document) {
                    const r = document.head || document.getElementsByTagName("head")[0],
                        o = document.createElement("style");
                    (o.type = "text/css"),
                    "top" === n && r.firstChild
                        ? r.insertBefore(o, r.firstChild)
                        : r.appendChild(o),
                    o.styleSheet
                        ? (o.styleSheet.cssText = e)
                        : o.appendChild(document.createTextNode(e));
                }
            }
            const v = {
                "r-howler": "styles_r-howler__3PySh",
                "dark-themed": "styles_dark-themed__1Mmdx",
                player: "styles_player__3QVPP",
                "player-controls": "styles_player-controls__n3mnQ",
                "player-rate-btn": "styles_player-rate-btn__2MhmA",
                "player-speed": "styles_player-speed__3d5xa",
                "selected-option": "styles_selected-option__23g7c",
                "rate-btn-hidden": "styles_rate-btn-hidden__1HxSh",
                "progress-bar": "styles_progress-bar__2-CEJ",
                "player-progress": "styles_player-progress__2d2KA",
                "volume-control": "styles_volume-control__229nl",
                "audio-bar": "styles_audio-bar__2iFkl",
                "audio-duration": "styles_audio-duration__1BIuq",
                duration: "styles_duration__166uF",
                prepare: "styles_prepare__M9RoR",
                icon: "styles_icon__3K4sp",
                "light-themed": "styles_light-themed__Pji_D",
            };
            y(
                '.styles_r-howler__3PySh.styles_dark-themed__1Mmdx.styles_player__3QVPP {\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  min-height: 45px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);\n  background-color: rgba(26, 26, 26, 0.8); }\n\n.styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_player-controls__n3mnQ {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 7px;\n  flex: 1; }\n\n.styles_r-howler__3PySh.styles_dark-themed__1Mmdx button {\n  height: 100%;\n  padding: 6px;\n  border: none;\n  margin: 0;\n  fill: white;\n  background: transparent;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-right: 5px;\n  box-sizing: border-box;\n  transition: background 0.1s ease-in, fill 0.1s ease-in;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .styles_r-howler__3PySh.styles_dark-themed__1Mmdx button:hover {\n    background: #37adbf;\n    fill: rgba(26, 26, 26, 0.8); }\n\n.styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_player-rate-btn__2MhmA {\n  color: white;\n  border-radius: 5px;\n  margin-right: 0;\n  width: 100%; }\n\n.styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_player-speed__3d5xa {\n  position: relative;\n  min-width: 40px;\n  display: flex;\n  justify-content: center; }\n\n.styles_r-howler__3PySh.styles_dark-themed__1Mmdx ol {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background-color: rgba(26, 26, 26, 0.8);\n  z-index: 999;\n  position: fixed;\n  border-radius: 4px;\n  left: 0;\n  text-align: center;\n  width: 47px; }\n  .styles_r-howler__3PySh.styles_dark-themed__1Mmdx ol li {\n    font-size: 13px;\n    margin: 0 2.5px;\n    padding: 5px 2.5px;\n    color: white;\n    cursor: pointer; }\n    .styles_r-howler__3PySh.styles_dark-themed__1Mmdx ol li.styles_selected-option__23g7c {\n      background-color: #37adbf;\n      border-radius: 4px; }\n\n.styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_rate-btn-hidden__1HxSh {\n  opacity: 0; }\n\n.styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_progress-bar__2-CEJ {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  position: relative; }\n\n.styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_player-progress__2d2KA {\n  width: 100%;\n  border: 0;\n  padding: 0;\n  -webkit-appearance: none;\n  height: 4px;\n  border-radius: 4px;\n  min-width: 50px;\n  margin: 0;\n  z-index: 2; }\n  .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_player-progress__2d2KA::-moz-range-thumb {\n    -webkit-appearance: none;\n    background: #37adbf; }\n  .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_player-progress__2d2KA::-ms-thumb {\n    -webkit-appearance: none;\n    background: #37adbf; }\n  .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_player-progress__2d2KA::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: #37adbf; }\n  .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_player-progress__2d2KA::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    border-radius: var(--progressbar-radius, 4px);\n    cursor: pointer;\n    background: linear-gradient(to right, white, white var(--progress-value, 0), black var(--progress-value, 0));\n    content: ""; }\n  .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_player-progress__2d2KA::-moz-range-track {\n    width: 100%;\n    height: 5px;\n    border-radius: var(--progressbar-radius, 4px);\n    cursor: pointer;\n    background: black; }\n  .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_player-progress__2d2KA::-ms-track {\n    width: 100%;\n    height: 5px;\n    border-radius: var(--progressbar-radius, 4px);\n    cursor: pointer;\n    background: black; }\n  .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_player-progress__2d2KA::-moz-range-progress {\n    height: 5px;\n    border-radius: 4px;\n    cursor: pointer;\n    background: white; }\n\n.styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_volume-control__229nl {\n  padding-right: 5px;\n  display: flex;\n  align-items: center; }\n  .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_volume-control__229nl .styles_audio-bar__2iFkl {\n    width: 100%;\n    border: 0;\n    padding: 0;\n    -webkit-appearance: none;\n    height: 4px;\n    border-radius: 4px;\n    min-width: 50px;\n    max-width: 75px;\n    background: transparent; }\n    .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_volume-control__229nl .styles_audio-bar__2iFkl::-moz-range-thumb {\n      -webkit-appearance: none;\n      width: 15px;\n      height: 15px;\n      margin: -5px 0 0;\n      border-radius: 50%;\n      cursor: pointer;\n      border: 0 !important;\n      z-index: 4;\n      box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);\n      background: #37adbf; }\n    .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_volume-control__229nl .styles_audio-bar__2iFkl::-ms-thumb {\n      -webkit-appearance: none;\n      width: 15px;\n      height: 15px;\n      margin: -5px 0 0;\n      border-radius: 50%;\n      cursor: pointer;\n      border: 0 !important;\n      z-index: 4;\n      box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);\n      background: #37adbf; }\n    .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_volume-control__229nl .styles_audio-bar__2iFkl::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      width: 15px;\n      height: 15px;\n      margin: -5px 0 0;\n      border-radius: 50%;\n      cursor: pointer;\n      border: 0 !important;\n      z-index: 4;\n      box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);\n      background: #37adbf; }\n    .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_volume-control__229nl .styles_audio-bar__2iFkl::-webkit-slider-runnable-track {\n      width: 100%;\n      height: 5px;\n      border-radius: 4px;\n      cursor: pointer;\n      background: linear-gradient(to right, white, white var(--progress-value, 0), black var(--progress-value, 0));\n      content: ""; }\n    .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_volume-control__229nl .styles_audio-bar__2iFkl::-moz-range-track {\n      width: 100%;\n      height: 5px;\n      border-radius: 4px;\n      cursor: pointer;\n      background: black; }\n    .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_volume-control__229nl .styles_audio-bar__2iFkl::-ms-track {\n      width: 100%;\n      height: 5px;\n      border-radius: 4px;\n      cursor: pointer;\n      background: black; }\n    .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_volume-control__229nl .styles_audio-bar__2iFkl::-moz-range-progress {\n      height: 5px;\n      border-radius: 4px;\n      cursor: pointer;\n      background: white; }\n\n.styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_audio-duration__1BIuq {\n  text-align: center;\n  padding-inline-start: 9px;\n  padding-inline-end: 9px;\n  white-space: nowrap;\n  pointer-events: none;\n  cursor: default;\n  color: white;\n  font-size: 14px;\n  font-variant-numeric: normal;\n  text-shadow: none; }\n  .styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_audio-duration__1BIuq .styles_duration__166uF {\n    display: inline-block;\n    white-space: pre;\n    color: #929292; }\n\n.styles_r-howler__3PySh.styles_dark-themed__1Mmdx .styles_prepare__M9RoR {\n  color: grey;\n  font-weight: bold;\n  font-family: monospace;\n  font-size: 17px; }\n\nsvg {\n  pointer-events: none;\n  display: block; }\n  svg.styles_icon__3K4sp {\n    width: 19px;\n    height: 19px; }\n\n.styles_r-howler__3PySh.styles_light-themed__Pji_D.styles_player__3QVPP {\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  min-height: 45px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);\n  background-color: white; }\n\n.styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_player-controls__n3mnQ {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 7px;\n  flex: 1; }\n\n.styles_r-howler__3PySh.styles_light-themed__Pji_D button {\n  height: 100%;\n  padding: 6px;\n  border: none;\n  margin: 0;\n  fill: rgba(26, 26, 26, 0.8);\n  background: transparent;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-right: 5px;\n  box-sizing: border-box;\n  transition: background 0.1s ease-in, fill 0.1s ease-in;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .styles_r-howler__3PySh.styles_light-themed__Pji_D button:hover {\n    background: #37adbf;\n    fill: white; }\n\n.styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_player-rate-btn__2MhmA {\n  color: rgba(26, 26, 26, 0.8);\n  border-radius: 5px;\n  margin-right: 0;\n  width: 100%; }\n\n.styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_player-speed__3d5xa {\n  position: relative;\n  min-width: 40px;\n  display: flex;\n  justify-content: center; }\n\n.styles_r-howler__3PySh.styles_light-themed__Pji_D ol {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background-color: lightgrey;\n  z-index: 999;\n  position: fixed;\n  border-radius: 4px;\n  left: 0;\n  text-align: center;\n  width: 47px; }\n  .styles_r-howler__3PySh.styles_light-themed__Pji_D ol li {\n    font-size: 13px;\n    margin: 0 2.5px;\n    padding: 5px 2.5px;\n    color: rgba(26, 26, 26, 0.8);\n    cursor: pointer; }\n    .styles_r-howler__3PySh.styles_light-themed__Pji_D ol li.styles_selected-option__23g7c {\n      background-color: #37adbf;\n      border-radius: 4px; }\n\n.styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_rate-btn-hidden__1HxSh {\n  opacity: 0; }\n\n.styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_progress-bar__2-CEJ {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  position: relative; }\n\n.styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_player-progress__2d2KA {\n  width: 100%;\n  border: 0;\n  padding: 0;\n  -webkit-appearance: none;\n  height: 4px;\n  border-radius: 4px;\n  min-width: 50px;\n  margin: 0;\n  z-index: 2; }\n  .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_player-progress__2d2KA::-moz-range-thumb {\n    -webkit-appearance: none;\n    background: white; }\n  .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_player-progress__2d2KA::-ms-thumb {\n    -webkit-appearance: none;\n    background: white; }\n  .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_player-progress__2d2KA::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: white; }\n  .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_player-progress__2d2KA::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    border-radius: var(--progressbar-radius, 4px);\n    cursor: pointer;\n    background: linear-gradient(to right, #37adbf, #37adbf var(--progress-value, 0), #ccc var(--progress-value, 0));\n    content: ""; }\n  .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_player-progress__2d2KA::-moz-range-track {\n    width: 100%;\n    height: 5px;\n    border-radius: var(--progressbar-radius, 4px);\n    cursor: pointer;\n    background: #ccc; }\n  .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_player-progress__2d2KA::-ms-track {\n    width: 100%;\n    height: 5px;\n    border-radius: var(--progressbar-radius, 4px);\n    cursor: pointer;\n    background: #ccc; }\n  .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_player-progress__2d2KA::-moz-range-progress {\n    height: 5px;\n    border-radius: 4px;\n    cursor: pointer;\n    background: #37adbf; }\n\n.styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_volume-control__229nl {\n  padding-right: 5px;\n  display: flex;\n  align-items: center; }\n  .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_volume-control__229nl .styles_audio-bar__2iFkl {\n    width: 100%;\n    border: 0;\n    padding: 0;\n    -webkit-appearance: none;\n    height: 4px;\n    border-radius: 4px;\n    min-width: 50px;\n    max-width: 75px;\n    background: transparent; }\n    .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_volume-control__229nl .styles_audio-bar__2iFkl::-moz-range-thumb {\n      -webkit-appearance: none;\n      width: 15px;\n      height: 15px;\n      margin: -5px 0 0;\n      border-radius: 50%;\n      cursor: pointer;\n      border: 0 !important;\n      z-index: 4;\n      box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);\n      background: white; }\n    .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_volume-control__229nl .styles_audio-bar__2iFkl::-ms-thumb {\n      -webkit-appearance: none;\n      width: 15px;\n      height: 15px;\n      margin: -5px 0 0;\n      border-radius: 50%;\n      cursor: pointer;\n      border: 0 !important;\n      z-index: 4;\n      box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);\n      background: white; }\n    .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_volume-control__229nl .styles_audio-bar__2iFkl::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      width: 15px;\n      height: 15px;\n      margin: -5px 0 0;\n      border-radius: 50%;\n      cursor: pointer;\n      border: 0 !important;\n      z-index: 4;\n      box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);\n      background: white; }\n    .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_volume-control__229nl .styles_audio-bar__2iFkl::-webkit-slider-runnable-track {\n      width: 100%;\n      height: 5px;\n      border-radius: 4px;\n      cursor: pointer;\n      background: linear-gradient(to right, #37adbf, #37adbf var(--progress-value, 0), #ccc var(--progress-value, 0));\n      content: ""; }\n    .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_volume-control__229nl .styles_audio-bar__2iFkl::-moz-range-track {\n      width: 100%;\n      height: 5px;\n      border-radius: 4px;\n      cursor: pointer;\n      background: #ccc; }\n    .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_volume-control__229nl .styles_audio-bar__2iFkl::-ms-track {\n      width: 100%;\n      height: 5px;\n      border-radius: 4px;\n      cursor: pointer;\n      background: #ccc; }\n    .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_volume-control__229nl .styles_audio-bar__2iFkl::-moz-range-progress {\n      height: 5px;\n      border-radius: 4px;\n      cursor: pointer;\n      background: #37adbf; }\n\n.styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_audio-duration__1BIuq {\n  text-align: center;\n  padding-inline-start: 9px;\n  padding-inline-end: 9px;\n  white-space: nowrap;\n  pointer-events: none;\n  cursor: default;\n  color: rgba(26, 26, 26, 0.8);\n  font-size: 14px;\n  font-variant-numeric: normal;\n  text-shadow: none; }\n  .styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_audio-duration__1BIuq .styles_duration__166uF {\n    display: inline-block;\n    white-space: pre;\n    color: #929292; }\n\n.styles_r-howler__3PySh.styles_light-themed__Pji_D .styles_prepare__M9RoR {\n  color: grey;\n  font-weight: bold;\n  font-family: monospace;\n  font-size: 17px; }\n\nsvg {\n  pointer-events: none;\n  display: block; }\n  svg.styles_icon__3K4sp {\n    width: 19px;\n    height: 19px; }\n',
            );
            const b = (function (e) {
                p(n, r.Component);
                const t = g(n);
                function n() {
                    return l(this, n), t.apply(this, arguments);
                }
                return (
                    d(n, [
                        {
                            key: "render",
                            value: function () {
                                const e = this.props,
                                    t = e.loadingText,
                                    n = void 0 === t ? "Preparing" : t,
                                    r = e.isDark,
                                    a = e.preparingComp,
                                    i = [
                                        v.player,
                                        v["r-howler"],
                                        v[r ? "dark-themed" : "light-themed"],
                                    ].join(" "),
                                    s =
                                        a ||
                                        o.a.createElement(
                                            "div",
                                            { className: [v.prepare, v.notready].join(" ") },
                                            n,
                                        );
                                return o.a.createElement("div", { className: i }, s);
                            },
                        },
                    ]),
                    n
                );
            })();
            c(b, "propTypes", {
                loadingText: s.a.string,
                isDark: s.a.bool,
                preparingComp: s.a.any,
            });
            const w = {
                backSpace: 8,
                tab: 9,
                clear: 12,
                return: 13,
                shift: 16,
                ctrl: 17,
                alt: 18,
                esc: 27,
                arrowLeft: 37,
                arrowUp: 38,
                arrowRight: 39,
                arrowDown: 40,
                delete: 46,
                home: 36,
                end: 35,
                pageUp: 33,
                pageDown: 34,
                insert: 45,
                capsLock: 20,
                leftCommand: 91,
                rightCommand: 93,
                mozillaCommand: 224,
                rightWindowsStart: 92,
                pause: 19,
                space: 32,
                help: 47,
                leftWindow: 91,
                select: 93,
                numPad0: 96,
                numPad1: 97,
                numPad2: 98,
                numPad3: 99,
                numPad4: 100,
                numPad5: 101,
                numPad6: 102,
                numPad7: 103,
                numPad8: 104,
                numPad9: 105,
                numPadMultiply: 106,
                numPadPlus: 107,
                numPadEnter: 108,
                numPadMinus: 109,
                numPadPeriod: 110,
                numPadDivide: 111,
                f1: 112,
                f2: 113,
                f3: 114,
                f4: 115,
                f5: 116,
                f6: 117,
                f7: 118,
                f8: 119,
                f9: 120,
                f10: 121,
                f11: 122,
                f12: 123,
                f13: 124,
                f14: 125,
                f15: 126,
                numLock: 144,
                scrollLock: 145,
                m: 77,
            };
            w.keyCodes = Object.keys(w).reduce(function (e, t) {
                return (e[w[t]] = t), e;
            }, {});
            const A = {
                profile_top_progress: "profile_profile_top_progress__3_Y69",
                profile_minimal: "profile_profile_minimal__1Qo5T",
                profile_generic: "profile_profile_generic__XgF7F",
                "player-controls": "profile_player-controls__1sYy9",
            };
            y(
                ".profile_profile_top_progress__3_Y69,\n.profile_profile_minimal__1Qo5T,\n.profile_profile_generic__XgF7F {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  position: relative; }\n  .profile_profile_top_progress__3_Y69 .profile_player-controls__1sYy9,\n  .profile_profile_minimal__1Qo5T .profile_player-controls__1sYy9,\n  .profile_profile_generic__XgF7F .profile_player-controls__1sYy9 {\n    flex: 1; }\n",
            );
            const T = "PREPARE",
                x = "READY",
                E = "ENDED",
                S = "PAUSE",
                k = "PLAYING",
                P = [0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4],
                M = (function (e) {
                    p(n, r.Component);
                    const t = g(n);
                    function n(e) {
                        let r;
                        return (
                            l(this, n),
                            c(f((r = t.call(this, e))), "stepInterval", null),
                            c(f(r), "ref", o.a.createRef()),
                            c(f(r), "toggleMute", function () {
                                r.setState(function (e) {
                                    const t = e.volume,
                                        n = e.sound;
                                    return 0 != t && e.isMute
                                        ? (n.mute(!1), { isMute: !e.isMute })
                                        : (n.mute(!0), { isMute: !0 });
                                });
                            }),
                            c(f(r), "readyToPlay", function () {
                                const e = r.state,
                                    t = e.playerState,
                                    n = e.sound,
                                    o = r.props.onLoad;
                                if (t !== k) {
                                    const a = {
                                        duration: Math.round(n.duration()),
                                        volume: n.volume(),
                                        audio: n,
                                    };
                                    r.setState(
                                        {
                                            playerState: x,
                                            duration: r.formatTime(Math.round(n.duration())),
                                        },
                                        o && "function" == typeof o
                                            ? function () {
                                                return o(a);
                                            }
                                            : void 0,
                                    );
                                }
                            }),
                            c(f(r), "setupPlayer", function () {
                                r.destroySound();
                                const e = r.props,
                                    t = e.src,
                                    n = e.format;
                                if (t) {
                                    const o = new a.Howl({
                                        src: t,
                                        format: void 0 === n ? ["wav", "mp3", "flac", "aac"] : n,
                                        html5: !0,
                                    });
                                    o.once("load", r.readyToPlay),
                                    o.on("end", r.playbackEnded),
                                    o.on("play", function () {
                                        r.stepInterval = setInterval(r.step, 15);
                                    }),
                                    o.on("pause", function () {
                                        r.playbackPause();
                                    }),
                                    r.setState({
                                        sound: o,
                                        playerState: T,
                                        progressValue: 0,
                                        currentPos: "0:00",
                                        src: t,
                                    });
                                }
                            }),
                            c(f(r), "playbackEnded", function () {
                                const e = r.props.onTimeUpdate,
                                    t = r.state.duration;
                                e &&
                                    e({
                                        currentTime: r.state.sound.duration(),
                                        progressPercent: 100,
                                    }),
                                clearInterval(r.stepInterval),
                                r.setState({
                                    playerState: E,
                                    progressValue: 100,
                                    currentPos: t,
                                });
                            }),
                            c(f(r), "playbackPlay", function () {
                                r.state.sound.play(), r.setState({ playerState: k });
                            }),
                            c(f(r), "playbackPause", function () {
                                const e = r.state.sound;
                                e.playing() && e.pause(),
                                clearInterval(r.stepInterval),
                                r.setState({ playerState: S });
                            }),
                            c(f(r), "formatTime", function (e) {
                                const t = Math.floor(e / 60) || 0,
                                    n = e - 60 * t || 0;
                                return t + ":" + (n < 10 ? "0" : "") + n;
                            }),
                            c(f(r), "seek", function (e) {
                                const t = r.state.sound,
                                    n = e.target.value / 100;
                                t.seek(t.duration() * n);
                                const o = t.seek() || 0;
                                r.setState({
                                    progressValue: e.target.value,
                                    currentPos: r.formatTime(Math.round(o)),
                                });
                            }),
                            c(f(r), "step", function () {
                                const e = r.state.sound,
                                    t = r.props.onTimeUpdate,
                                    n = e.seek() || 0,
                                    o = (n / e.duration()) * 100 || 0;
                                e.playing() &&
                                    (r.setState({
                                        progressValue: o.toFixed(3),
                                        currentPos: r.formatTime(Math.round(n)),
                                        playerState: k,
                                    }),
                                    t &&
                                        t({
                                            currentTime: n,
                                            progressPercent: Number(o.toFixed(3)),
                                        }));
                            }),
                            c(f(r), "changeVolume", function (e) {
                                r.state.sound.volume(Math.round(e) / 100),
                                r.setState({ volume: e, isMute: 0 === Number(e) });
                            }),
                            c(f(r), "volumeUp", function () {
                                r.setState(function (e) {
                                    let t = e.volume;
                                    return (
                                        (t += 5) > 100 && (t = 100),
                                        r.state.sound.volume(Math.round(t) / 100),
                                        { volume: t, isMute: !1 }
                                    );
                                });
                            }),
                            c(f(r), "volumeDown", function () {
                                r.setState(function (e) {
                                    let t = e.volume,
                                        n = e.isMute;
                                    return (
                                        (t -= 5) < 0 && ((t = 0), (n = !0)),
                                        r.state.sound.volume(Math.round(t) / 100),
                                        { volume: t, isMute: n }
                                    );
                                });
                            }),
                            c(f(r), "seekForward", function () {
                                let e = r.state.sound,
                                    t = e.seek(),
                                    n = e.duration(),
                                    o = n / 20 < 10 ? 10 : n / 20;
                                if (!(t + o > n)) {
                                    n - t < o && o > 50 && (o = 10), e.seek(t + o);
                                    const a = ((t + o) / e.duration()) * 100 || 0;
                                    r.setState({
                                        progressValue: Math.round(a),
                                        currentPos: r.formatTime(Math.round(t + o)),
                                    });
                                }
                            }),
                            c(f(r), "seekBackward", function () {
                                let e = r.state.sound,
                                    t = e.seek(),
                                    n = e.duration(),
                                    o = n / 20 < 10 ? 10 : n / 20;
                                if (!(t - o < 0)) {
                                    t < o && o > 50 && (o = 10), e.seek(t - o);
                                    const a = ((t - o) / e.duration()) * 100 || 0;
                                    r.setState({
                                        progressValue: Math.round(a),
                                        currentPos: r.formatTime(Math.round(t - o)),
                                    });
                                }
                            }),
                            c(f(r), "keyPress", function (e) {
                                const t = r.state,
                                    n = t.sound,
                                    o = t.playerState,
                                    a = t.isMute,
                                    i = e.keyCode ? e.keyCode : e.which;
                                if ("tab" !== w.keyCodes[i]) {
                                    e.preventDefault(), e.stopPropagation();
                                    const s = document.activeElement;
                                    switch (w.keyCodes[i]) {
                                        case "space":
                                        case "return":
                                            if ("volume" === s.name) {
                                                a ? n.mute(!1) : n.mute(!0),
                                                r.setState({ isMute: !r.state.isMute });
                                                break;
                                            }
                                            o === k
                                                ? (n.pause(), r.setState({ playerState: S }))
                                                : (o !== x && o !== S && o !== E) ||
                                                  (n.play(), r.setState({ playerState: k }));
                                            break;
                                        case "m":
                                            a ? n.mute(!1) : n.mute(!0),
                                            r.setState({ isMute: !r.state.isMute });
                                            break;
                                        case "arrowUp":
                                            r.volumeUp();
                                            break;
                                        case "arrowDown":
                                            r.volumeDown();
                                            break;
                                        case "arrowRight":
                                            r.seekForward();
                                            break;
                                        case "arrowLeft":
                                            r.seekBackward();
                                    }
                                }
                            }),
                            c(f(r), "setVolumePosition", function () {
                                const e = r.state,
                                    t = e.rate;
                                if (e.ratePanel) {
                                    const n = r.props.speedPanel,
                                        o = void 0 === n ? "relative" : n,
                                        a = r.rateRef.current,
                                        i = r.rateDivRef.current.getBoundingClientRect(),
                                        s = a.getBoundingClientRect(),
                                        l = (i.left, i.top),
                                        u = i.right,
                                        d = s.height,
                                        c = d / P.length;
                                    if ("relative" === o) {
                                        const _ = P.indexOf(t);
                                        (a.style.left = "".concat(u - 40, "px")),
                                        (a.style.top = "".concat(l - c * _ + 2.5, "px"));
                                    } else
                                        "top" === o
                                            ? ((a.style.left = "".concat(u - 40, "px")),
                                            (a.style.top = "".concat(l - d + c + 11, "px")))
                                            : "bottom" === o &&
                                              ((a.style.left = "".concat(u - 40, "px")),
                                              (a.style.top = "".concat(l - 9, "px")));
                                }
                            }),
                            c(f(r), "addResizeListener", function () {
                                window.addEventListener("resize", function () {
                                    r.setVolumePosition();
                                });
                            }),
                            c(f(r), "removeResizeListener", function () {
                                window.addEventListener("resize", function () {
                                    this.setVolumePosition();
                                });
                            }),
                            c(f(r), "destroySound", function () {
                                const e = r.state.sound;
                                clearInterval(r.stepInterval), e && (e.off(), e.stop());
                            }),
                            c(f(r), "toggleSettingsPanel", function (e) {
                                r.setState({ isSettingsOpen: e });
                            }),
                            c(f(r), "setRate", function (e, t) {
                                const n = r.state.sound;
                                r.setState({ rate: e }, function () {
                                    t && t(), n.rate(e);
                                });
                            }),
                            c(f(r), "toogleRatePanel", function (e) {
                                r.setState({ ratePanel: e }, r.setVolumePosition);
                            }),
                            (r.state = {
                                sound: null,
                                playerState: T,
                                src: [],
                                progressValue: 0,
                                currentPos: "0:00",
                                volume: 70,
                                isMute: !1,
                                isSettingsOpen: !1,
                                rate: 1,
                                ratePanel: !1,
                            }),
                            (r.rateRef = o.a.createRef()),
                            (r.rateDivRef = o.a.createRef()),
                            r
                        );
                    }
                    return (
                        d(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.setupPlayer(), this.addResizeListener();
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.destroySound(), this.removeResizeListener();
                                },
                            },
                            {
                                key: "UNSAFE_componentWillReceiveProps",
                                value: function (e) {
                                    let t, n;
                                    (t = this.state.src),
                                    (n = e.src),
                                    JSON.stringify(t) !== JSON.stringify(n) &&
                                            this.setupPlayer();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    const e = this,
                                        t = this.state,
                                        n = t.playerState,
                                        a = t.progressValue,
                                        i = t.duration,
                                        s = t.currentPos,
                                        l = t.volume,
                                        u = t.isMute,
                                        d = t.ratePanel,
                                        c = this.props,
                                        p = c.isDark,
                                        h = void 0 !== p && p,
                                        f = c.profile,
                                        m = void 0 === f ? "generic" : f;
                                    if (n === T) return o.a.createElement(b, this.props);
                                    let g = [
                                            v.player,
                                            v["r-howler"],
                                            v[h ? "dark-themed" : "light-themed"],
                                        ].join(" "),
                                        y = void 0,
                                        w = {};
                                    n === x || n === S || n === E
                                        ? ((y = this.playbackPlay),
                                        (w = { "aria-label": "Play", id: "rh-player-play" }))
                                        : n === k &&
                                          ((y = this.playbackPause),
                                          (w = { "aria-label": "Pause", id: "rh-player-pause" }));
                                    let M = Math.round(a),
                                        O = o.a.createElement(
                                            "button",
                                            _({ type: "button" }, w, { onClick: y }),
                                            o.a.createElement(
                                                "svg",
                                                { role: "presentation", className: v.icon },
                                                o.a.createElement("use", {
                                                    xlinkHref:
                                                        n === k ? "#r-howl-pause" : "#r-howl-play",
                                                }),
                                            ),
                                        ),
                                        I = o.a.createElement(
                                            "div",
                                            { className: v["progress-bar"] },
                                            o.a.createElement("input", {
                                                type: "range",
                                                id: "rh-player-media-progress",
                                                className: v["player-progress"],
                                                step: "0.01",
                                                min: "0",
                                                max: "100",
                                                value: a,
                                                "aria-valuemin": "0",
                                                "aria-valuemax": "100",
                                                "aria-valuenow": M,
                                                "aria-valuetext": ""
                                                    .concat(s, " of ")
                                                    .concat(i, ", ")
                                                    .concat(M, " percentage complete"),
                                                role: "slider",
                                                style: { "--progress-value": "".concat(a, "%") },
                                                autoComplete: "off",
                                                onChange: this.seek,
                                            }),
                                        ),
                                        R = o.a.createElement(
                                            "div",
                                            { className: v["audio-duration"] },
                                            s,
                                            " ",
                                            o.a.createElement(
                                                "span",
                                                { className: v.duration },
                                                "/ ",
                                                i || "...",
                                            ),
                                        ),
                                        F = o.a.createElement(
                                            "div",
                                            { className: v["volume-control"] },
                                            o.a.createElement(
                                                "button",
                                                {
                                                    type: "button",
                                                    onClick: this.toggleMute,
                                                    id: "rh-player-volume",
                                                    name: "volume",
                                                    "aria-label": u ? "Unmute" : "Mute",
                                                },
                                                o.a.createElement(
                                                    "svg",
                                                    { role: "presentation", className: v.icon },
                                                    o.a.createElement("use", {
                                                        xlinkHref: u
                                                            ? "#r-howl-muted"
                                                            : "#r-howl-volume",
                                                    }),
                                                ),
                                            ),
                                            o.a.createElement("input", {
                                                type: "range",
                                                id: "rh-player-volume-slider",
                                                className: v["audio-bar"],
                                                style: {
                                                    "--progress-value": "".concat(u ? 0 : l, "%"),
                                                },
                                                min: "0",
                                                max: "100",
                                                step: "0.01",
                                                value: u ? 0 : l,
                                                "aria-valuemin": "0",
                                                "aria-valuemax": "100",
                                                "aria-valuenow": u ? 0 : l,
                                                role: "slider",
                                                "aria-label": "volume",
                                                "aria-valuetext": u ? "Muted" : "".concat(l, "%"),
                                                onChange: function (t) {
                                                    e.changeVolume(t.target.value);
                                                },
                                            }),
                                        ),
                                        C = o.a.createElement(
                                            "div",
                                            { className: v["player-speed"], ref: this.rateDivRef },
                                            o.a.createElement(
                                                "button",
                                                {
                                                    className: [
                                                        v["player-rate-btn"],
                                                        d ? v["rate-btn-hidden"] : "",
                                                    ]
                                                        .filter(Boolean)
                                                        .join(" "),
                                                    hidden: d,
                                                    onClick: function () {
                                                        return e.toogleRatePanel(!0);
                                                    },
                                                    type: "button",
                                                },
                                                this.state.rate,
                                                " x",
                                            ),
                                            o.a.createElement(
                                                "ol",
                                                { hidden: !d, ref: this.rateRef },
                                                P.map(function (t, n) {
                                                    const r = {};
                                                    return (
                                                        t == e.state.rate &&
                                                            (r.className = v["selected-option"]),
                                                        o.a.createElement(
                                                            "li",
                                                            _({}, r, {
                                                                key: n,
                                                                onClick: function () {
                                                                    return e.setRate(
                                                                        t,
                                                                        function () {
                                                                            return e.toogleRatePanel(
                                                                                !1,
                                                                            );
                                                                        },
                                                                    );
                                                                },
                                                            }),
                                                            t,
                                                            o.a.createElement(
                                                                "span",
                                                                { "aria-hidden": "true" },
                                                                "x",
                                                            ),
                                                        )
                                                    );
                                                }),
                                            ),
                                        ),
                                        L = "";
                                    return (
                                        "top_progress" === m
                                            ? (L = o.a.createElement(
                                                r.Fragment,
                                                null,
                                                o.a.createElement(
                                                    "div",
                                                    {
                                                        className: A["profile_".concat(m)],
                                                        style: { "--progressbar-radius": 0 },
                                                    },
                                                    I,
                                                    o.a.createElement(
                                                        "div",
                                                        { className: v["player-controls"] },
                                                        o.a.createElement(
                                                            "div",
                                                            { className: v["left-controls"] },
                                                            O,
                                                        ),
                                                        R,
                                                        F,
                                                    ),
                                                ),
                                            ))
                                            : "generic" === m
                                                ? (L = o.a.createElement(
                                                    r.Fragment,
                                                    null,
                                                    o.a.createElement(
                                                        "div",
                                                        { className: A["profile_".concat(m)] },
                                                        o.a.createElement(
                                                            "div",
                                                            { className: v["player-controls"] },
                                                            o.a.createElement(
                                                                "div",
                                                                { className: v["left-controls"] },
                                                                O,
                                                            ),
                                                            I,
                                                            R,
                                                            F,
                                                            C,
                                                        ),
                                                    ),
                                                ))
                                                : "minimal" === m &&
                                              (L = o.a.createElement(
                                                  "div",
                                                  { className: A["profile_".concat(m)] },
                                                  o.a.createElement(
                                                      "div",
                                                      { className: v["player-controls"] },
                                                      o.a.createElement(
                                                          "div",
                                                          { className: v["left-controls"] },
                                                          O,
                                                      ),
                                                      R,
                                                  ),
                                              )),
                                        o.a.createElement(
                                            "div",
                                            {
                                                className: g,
                                                onKeyPress: function (t) {
                                                    return e.keyPress(t);
                                                },
                                                onKeyDown: function (t) {
                                                    return e.keyPress(t);
                                                },
                                                id: "rh-player-main",
                                                ref: this.ref,
                                            },
                                            o.a.createElement(
                                                "div",
                                                { hidden: !0 },
                                                o.a.createElement(
                                                    "svg",
                                                    {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                    },
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-airplay" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M16 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2H3V3h12v8h-2v2h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z",
                                                        }),
                                                        o.a.createElement("path", {
                                                            d: "M4 17h10l-5-6z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-captions-off" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z",
                                                            fillRule: "evenodd",
                                                            fillOpacity: ".5",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-captions-on" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z",
                                                            fillRule: "evenodd",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-download" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M9 13c.3 0 .5-.1.7-.3L15.4 7 14 5.6l-4 4V1H8v8.6l-4-4L2.6 7l5.7 5.7c.2.2.4.3.7.3zm-7 2h14v2H2z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-enter-fullscreen" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-exit-fullscreen" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-fast-forward" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M7.875 7.171L0 1v16l7.875-6.171V17L18 9 7.875 1z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-logo-vimeo" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M17 5.3c-.1 1.6-1.2 3.7-3.3 6.4-2.2 2.8-4 4.2-5.5 4.2-.9 0-1.7-.9-2.4-2.6C5 10.9 4.4 6 3 6c-.1 0-.5.3-1.2.8l-.8-1c.8-.7 3.5-3.4 4.7-3.5 1.2-.1 2 .7 2.3 2.5.3 2 .8 6.1 1.8 6.1.9 0 2.5-3.4 2.6-4 .1-.9-.3-1.9-2.3-1.1.8-2.6 2.3-3.8 4.5-3.8 1.7.1 2.5 1.2 2.4 3.3z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-logo-youtube" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M16.8 5.8c-.2-1.3-.8-2.2-2.2-2.4C12.4 3 9 3 9 3s-3.4 0-5.6.4C2 3.6 1.3 4.5 1.2 5.8 1 7.1 1 9 1 9s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4C5.6 15 9 15 9 15s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2zM7 12V6l5 3-5 3z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-muted" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-pause" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm6 0c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-pip" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M13.293 3.293L7.022 9.564l1.414 1.414 6.271-6.271L17 7V1h-6z",
                                                        }),
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M13 15H3V5h5V3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6h-2v5z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-play" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-restart" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M9.7 1.2l.7 6.4 2.1-2.1c1.9 1.9 1.9 5.1 0 7-.9 1-2.2 1.5-3.5 1.5-1.3 0-2.6-.5-3.5-1.5-1.9-1.9-1.9-5.1 0-7 .6-.6 1.4-1.1 2.3-1.3l-.6-1.9C6 2.6 4.9 3.2 4 4.1 1.3 6.8 1.3 11.2 4 14c1.3 1.3 3.1 2 4.9 2 1.9 0 3.6-.7 4.9-2 2.7-2.7 2.7-7.1 0-9.9L16 1.9l-6.3-.7z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-rewind" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M10.125 1L0 9l10.125 8v-6.171L18 17V1l-7.875 6.171z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-settings" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M16.135 7.784a2 2 0 0 1-1.23-2.969c.322-.536.225-.998-.094-1.316l-.31-.31c-.318-.318-.78-.415-1.316-.094a2 2 0 0 1-2.969-1.23C10.065 1.258 9.669 1 9.219 1h-.438c-.45 0-.845.258-.997.865a2 2 0 0 1-2.969 1.23c-.536-.322-.999-.225-1.317.093l-.31.31c-.318.318-.415.781-.093 1.317a2 2 0 0 1-1.23 2.969C1.26 7.935 1 8.33 1 8.781v.438c0 .45.258.845.865.997a2 2 0 0 1 1.23 2.969c-.322.536-.225.998.094 1.316l.31.31c.319.319.782.415 1.316.094a2 2 0 0 1 2.969 1.23c.151.607.547.865.997.865h.438c.45 0 .845-.258.997-.865a2 2 0 0 1 2.969-1.23c.535.321.997.225 1.316-.094l.31-.31c.318-.318.415-.781.094-1.316a2 2 0 0 1 1.23-2.969c.607-.151.865-.547.865-.997v-.438c0-.451-.26-.846-.865-.997zM9 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
                                                        }),
                                                    ),
                                                    o.a.createElement(
                                                        "symbol",
                                                        { id: "r-howl-volume" },
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z",
                                                        }),
                                                        o.a.createElement("path", {
                                                            d:
                                                                "M11.282 5.282a.909.909 0 0 0 0 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 0 0 0 1.316c.145.145.636.262 1.018.156a.725.725 0 0 0 .298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 0 0-1.316 0zm-7.496.726H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z",
                                                        }),
                                                    ),
                                                ),
                                            ),
                                            L,
                                        )
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })();
            (M.propTypes = {
                src: s.a.array.isRequired,
                format: s.a.array,
                loadingText: s.a.string,
                isDark: s.a.bool,
                onTimeUpdate: s.a.func,
                speedPanel: s.a.string,
                onLoad: s.a.func,
                profile: s.a.oneOf(["generic", "minimal", "top_progress"]),
            }),
            (t.a = M);
        },
        "1Y/n": function (e, t, n) {
            const r = n("HAuM"),
                o = n("ewvW"),
                a = n("RK3t"),
                i = n("UMSQ"),
                s = function (e) {
                    return function (t, n, s, l) {
                        r(n);
                        let u = o(t),
                            d = a(u),
                            c = i(u.length),
                            _ = e ? c - 1 : 0,
                            p = e ? -1 : 1;
                        if (s < 2)
                            for (;;) {
                                if (_ in d) {
                                    (l = d[_]), (_ += p);
                                    break;
                                }
                                if (((_ += p), e ? _ < 0 : c <= _))
                                    throw TypeError("Reduce of empty array with no initial value");
                            }
                        for (; e ? _ >= 0 : c > _; _ += p) _ in d && (l = n(l, d[_], _, u));
                        return l;
                    };
                };
            e.exports = { left: s(!1), right: s(!0) };
        },
        "2rMq": function (e, t, n) {
            let r;
            !(function () {
                
                const o = !(
                        "undefined" == typeof window ||
                        !window.document ||
                        !window.document.createElement
                    ),
                    a = {
                        canUseDOM: o,
                        canUseWorkers: "undefined" != typeof Worker,
                        canUseEventListeners:
                            o && !(!window.addEventListener && !window.attachEvent),
                        canUseViewport: o && !!window.screen,
                    };
                void 0 ===
                    (r = function () {
                        return a;
                    }.call(t, n, t, e)) || (e.exports = r);
            })();
        },
        "8+s/": function (e, t, n) {
            
            function r(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e;
            }
            const o = n("q1tI"),
                a = r(o),
                i = r(n("2rMq")),
                s = r(n("Gytx"));
            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function u(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
            }
            e.exports = function (e, t, n) {
                if ("function" != typeof e)
                    throw new Error("Expected reducePropsToState to be a function.");
                if ("function" != typeof t)
                    throw new Error("Expected handleStateChangeOnClient to be a function.");
                if (void 0 !== n && "function" != typeof n)
                    throw new Error(
                        "Expected mapStateOnServer to either be undefined or a function.",
                    );
                return function (r) {
                    if ("function" != typeof r)
                        throw new Error("Expected WrappedComponent to be a React component.");
                    let d = [],
                        c = void 0;
                    function _() {
                        (c = e(
                            d.map(function (e) {
                                return e.props;
                            }),
                        )),
                        p.canUseDOM ? t(c) : n && (c = n(c));
                    }
                    var p = (function (e) {
                        function t() {
                            return l(this, t), u(this, e.apply(this, arguments));
                        }
                        return (
                            (function (e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError(
                                        "Super expression must either be null or a function, not " +
                                            typeof t,
                                    );
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                t &&
                                        (Object.setPrototypeOf
                                            ? Object.setPrototypeOf(e, t)
                                            : (e.__proto__ = t));
                            })(t, e),
                            (t.peek = function () {
                                return c;
                            }),
                            (t.rewind = function () {
                                if (t.canUseDOM)
                                    throw new Error(
                                        "You may only call rewind() on the server. Call peek() to read the current state.",
                                    );
                                const e = c;
                                return (c = void 0), (d = []), e;
                            }),
                            (t.prototype.shouldComponentUpdate = function (e) {
                                return !s(e, this.props);
                            }),
                            (t.prototype.componentWillMount = function () {
                                d.push(this), _();
                            }),
                            (t.prototype.componentDidUpdate = function () {
                                _();
                            }),
                            (t.prototype.componentWillUnmount = function () {
                                const e = d.indexOf(this);
                                d.splice(e, 1), _();
                            }),
                            (t.prototype.render = function () {
                                return a.createElement(r, this.props);
                            }),
                            t
                        );
                    })(o.Component);
                    return (
                        (p.displayName =
                            "SideEffect(" +
                            (function (e) {
                                return e.displayName || e.name || "Component";
                            })(r) +
                            ")"),
                        (p.canUseDOM = i.canUseDOM),
                        p
                    );
                };
            };
        },
        "85O/": function (e, t) {
            (Prism.languages.json = {
                property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
                string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
                comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
                number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
                punctuation: /[{}[\],]/,
                operator: /:/,
                boolean: /\b(?:true|false)\b/,
                null: { pattern: /\bnull\b/, alias: "keyword" },
            }),
            (Prism.languages.webmanifest = Prism.languages.json);
        },
        "8ypT": function (e, t, n) {},
        Bl7J: function (e, t, n) {
            
            const r = n("q1tI"),
                o = n.n(r),
                a = (n("8ypT"), n("Wbzz")),
                i = function () {
                    const e = Object(a.c)("652469026").site.siteMetadata,
                        t = e.title,
                        n = e.description;
                    return o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(
                            "header",
                            { className: "banner-sec" },
                            o.a.createElement(
                                "div",
                                {
                                    style: {
                                        margin: "0 auto",
                                        maxWidth: 960,
                                        padding: "6.45rem 1.0875rem",
                                        marginBottom: "1em",
                                    },
                                },
                                o.a.createElement("h1", { style: { margin: 0 } }, t),
                                o.a.createElement("p", { className: "banner-text" }, n),
                                o.a.createElement("div", { className: "button-sec" }),
                            ),
                        ),
                    );
                };
            i.defaultProps = { siteTitle: "" };
            const s = i;
            t.a = function (e) {
                const t = e.children;
                return o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(s, null),
                    o.a.createElement(
                        "div",
                        {
                            style: {
                                margin: "0 auto",
                                maxWidth: 960,
                                padding: "0px 1.0875rem 1.45rem",
                                paddingTop: 0,
                            },
                        },
                        o.a.createElement("main", null, t),
                    ),
                );
            };
        },
        Cj6n: function (e, t, n) {
            (function (n) {
                let r;
                !(function () {
                    
                    const o = function () {
                        this.init();
                    };
                    o.prototype = {
                        init: function () {
                            const e = this || a;
                            return (
                                (e._counter = 1e3),
                                (e._html5AudioPool = []),
                                (e.html5PoolSize = 10),
                                (e._codecs = {}),
                                (e._howls = []),
                                (e._muted = !1),
                                (e._volume = 1),
                                (e._canPlayEvent = "canplaythrough"),
                                (e._navigator =
                                    "undefined" != typeof window && window.navigator
                                        ? window.navigator
                                        : null),
                                (e.masterGain = null),
                                (e.noAudio = !1),
                                (e.usingWebAudio = !0),
                                (e.autoSuspend = !0),
                                (e.ctx = null),
                                (e.autoUnlock = !0),
                                e._setup(),
                                e
                            );
                        },
                        volume: function (e) {
                            const t = this || a;
                            if (
                                ((e = parseFloat(e)),
                                t.ctx || p(),
                                void 0 !== e && e >= 0 && e <= 1)
                            ) {
                                if (((t._volume = e), t._muted)) return t;
                                t.usingWebAudio &&
                                    t.masterGain.gain.setValueAtTime(e, a.ctx.currentTime);
                                for (let n = 0; n < t._howls.length; n++)
                                    if (!t._howls[n]._webAudio)
                                        for (
                                            let r = t._howls[n]._getSoundIds(), o = 0;
                                            o < r.length;
                                            o++
                                        ) {
                                            const i = t._howls[n]._soundById(r[o]);
                                            i && i._node && (i._node.volume = i._volume * e);
                                        }
                                return t;
                            }
                            return t._volume;
                        },
                        mute: function (e) {
                            const t = this || a;
                            t.ctx || p(),
                            (t._muted = e),
                            t.usingWebAudio &&
                                    t.masterGain.gain.setValueAtTime(
                                        e ? 0 : t._volume,
                                        a.ctx.currentTime,
                                    );
                            for (let n = 0; n < t._howls.length; n++)
                                if (!t._howls[n]._webAudio)
                                    for (
                                        let r = t._howls[n]._getSoundIds(), o = 0;
                                        o < r.length;
                                        o++
                                    ) {
                                        const i = t._howls[n]._soundById(r[o]);
                                        i && i._node && (i._node.muted = !!e || i._muted);
                                    }
                            return t;
                        },
                        stop: function () {
                            for (var e = this || a, t = 0; t < e._howls.length; t++)
                                e._howls[t].stop();
                            return e;
                        },
                        unload: function () {
                            for (var e = this || a, t = e._howls.length - 1; t >= 0; t--)
                                e._howls[t].unload();
                            return (
                                e.usingWebAudio &&
                                    e.ctx &&
                                    void 0 !== e.ctx.close &&
                                    (e.ctx.close(), (e.ctx = null), p()),
                                e
                            );
                        },
                        codecs: function (e) {
                            return (this || a)._codecs[e.replace(/^x-/, "")];
                        },
                        _setup: function () {
                            const e = this || a;
                            if (
                                ((e.state = (e.ctx && e.ctx.state) || "suspended"),
                                e._autoSuspend(),
                                !e.usingWebAudio)
                            )
                                if ("undefined" != typeof Audio)
                                    try {
                                        void 0 === new Audio().oncanplaythrough &&
                                            (e._canPlayEvent = "canplay");
                                    } catch (t) {
                                        e.noAudio = !0;
                                    }
                                else e.noAudio = !0;
                            try {
                                new Audio().muted && (e.noAudio = !0);
                            } catch (t) {}
                            return e.noAudio || e._setupCodecs(), e;
                        },
                        _setupCodecs: function () {
                            let e = this || a,
                                t = null;
                            try {
                                t = "undefined" != typeof Audio ? new Audio() : null;
                            } catch (i) {
                                return e;
                            }
                            if (!t || "function" != typeof t.canPlayType) return e;
                            const n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                                r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                                o = r && parseInt(r[0].split("/")[1], 10) < 33;
                            return (
                                (e._codecs = {
                                    mp3: !(
                                        o ||
                                        (!n && !t.canPlayType("audio/mp3;").replace(/^no$/, ""))
                                    ),
                                    mpeg: !!n,
                                    opus: !!t
                                        .canPlayType('audio/ogg; codecs="opus"')
                                        .replace(/^no$/, ""),
                                    ogg: !!t
                                        .canPlayType('audio/ogg; codecs="vorbis"')
                                        .replace(/^no$/, ""),
                                    oga: !!t
                                        .canPlayType('audio/ogg; codecs="vorbis"')
                                        .replace(/^no$/, ""),
                                    wav: !!(
                                        t.canPlayType('audio/wav; codecs="1"') ||
                                        t.canPlayType("audio/wav")
                                    ).replace(/^no$/, ""),
                                    aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                                    caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                                    m4a: !!(
                                        t.canPlayType("audio/x-m4a;") ||
                                        t.canPlayType("audio/m4a;") ||
                                        t.canPlayType("audio/aac;")
                                    ).replace(/^no$/, ""),
                                    m4b: !!(
                                        t.canPlayType("audio/x-m4b;") ||
                                        t.canPlayType("audio/m4b;") ||
                                        t.canPlayType("audio/aac;")
                                    ).replace(/^no$/, ""),
                                    mp4: !!(
                                        t.canPlayType("audio/x-mp4;") ||
                                        t.canPlayType("audio/mp4;") ||
                                        t.canPlayType("audio/aac;")
                                    ).replace(/^no$/, ""),
                                    weba: !!t
                                        .canPlayType('audio/webm; codecs="vorbis"')
                                        .replace(/^no$/, ""),
                                    webm: !!t
                                        .canPlayType('audio/webm; codecs="vorbis"')
                                        .replace(/^no$/, ""),
                                    dolby: !!t
                                        .canPlayType('audio/mp4; codecs="ec-3"')
                                        .replace(/^no$/, ""),
                                    flac: !!(
                                        t.canPlayType("audio/x-flac;") ||
                                        t.canPlayType("audio/flac;")
                                    ).replace(/^no$/, ""),
                                }),
                                e
                            );
                        },
                        _unlockAudio: function () {
                            const e = this || a;
                            if (!e._audioUnlocked && e.ctx) {
                                (e._audioUnlocked = !1),
                                (e.autoUnlock = !1),
                                e._mobileUnloaded ||
                                        44100 === e.ctx.sampleRate ||
                                        ((e._mobileUnloaded = !0), e.unload()),
                                (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
                                const t = function t(n) {
                                    for (; e._html5AudioPool.length < e.html5PoolSize; )
                                        try {
                                            const r = new Audio();
                                            (r._unlocked = !0), e._releaseHtml5Audio(r);
                                        } catch (n) {
                                            e.noAudio = !0;
                                            break;
                                        }
                                    for (let o = 0; o < e._howls.length; o++)
                                        if (!e._howls[o]._webAudio)
                                            for (
                                                let a = e._howls[o]._getSoundIds(), i = 0;
                                                i < a.length;
                                                i++
                                            ) {
                                                const s = e._howls[o]._soundById(a[i]);
                                                s &&
                                                    s._node &&
                                                    !s._node._unlocked &&
                                                    ((s._node._unlocked = !0), s._node.load());
                                            }
                                    e._autoResume();
                                    const l = e.ctx.createBufferSource();
                                    (l.buffer = e._scratchBuffer),
                                    l.connect(e.ctx.destination),
                                    void 0 === l.start ? l.noteOn(0) : l.start(0),
                                    "function" == typeof e.ctx.resume && e.ctx.resume(),
                                    (l.onended = function () {
                                        l.disconnect(0),
                                        (e._audioUnlocked = !0),
                                        document.removeEventListener("touchstart", t, !0),
                                        document.removeEventListener("touchend", t, !0),
                                        document.removeEventListener("click", t, !0);
                                        for (let n = 0; n < e._howls.length; n++)
                                            e._howls[n]._emit("unlock");
                                    });
                                };
                                return (
                                    document.addEventListener("touchstart", t, !0),
                                    document.addEventListener("touchend", t, !0),
                                    document.addEventListener("click", t, !0),
                                    e
                                );
                            }
                        },
                        _obtainHtml5Audio: function () {
                            const e = this || a;
                            if (e._html5AudioPool.length) return e._html5AudioPool.pop();
                            const t = new Audio().play();
                            return (
                                t &&
                                    "undefined" != typeof Promise &&
                                    (t instanceof Promise || "function" == typeof t.then) &&
                                    t.catch(function () {
                                        console.warn(
                                            "HTML5 Audio pool exhausted, returning potentially locked audio object.",
                                        );
                                    }),
                                new Audio()
                            );
                        },
                        _releaseHtml5Audio: function (e) {
                            const t = this || a;
                            return e._unlocked && t._html5AudioPool.push(e), t;
                        },
                        _autoSuspend: function () {
                            const e = this;
                            if (
                                e.autoSuspend &&
                                e.ctx &&
                                void 0 !== e.ctx.suspend &&
                                a.usingWebAudio
                            ) {
                                for (let t = 0; t < e._howls.length; t++)
                                    if (e._howls[t]._webAudio)
                                        for (let n = 0; n < e._howls[t]._sounds.length; n++)
                                            if (!e._howls[t]._sounds[n]._paused) return e;
                                return (
                                    e._suspendTimer && clearTimeout(e._suspendTimer),
                                    (e._suspendTimer = setTimeout(function () {
                                        if (e.autoSuspend) {
                                            (e._suspendTimer = null), (e.state = "suspending");
                                            const t = function () {
                                                (e.state = "suspended"),
                                                e._resumeAfterSuspend &&
                                                        (delete e._resumeAfterSuspend,
                                                        e._autoResume());
                                            };
                                            e.ctx.suspend().then(t, t);
                                        }
                                    }, 3e4)),
                                    e
                                );
                            }
                        },
                        _autoResume: function () {
                            const e = this;
                            if (e.ctx && void 0 !== e.ctx.resume && a.usingWebAudio)
                                return (
                                    "running" === e.state &&
                                    "interrupted" !== e.ctx.state &&
                                    e._suspendTimer
                                        ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
                                        : "suspended" === e.state ||
                                          ("running" === e.state && "interrupted" === e.ctx.state)
                                            ? (e.ctx.resume().then(function () {
                                                e.state = "running";
                                                for (let t = 0; t < e._howls.length; t++)
                                                    e._howls[t]._emit("resume");
                                            }),
                                            e._suspendTimer &&
                                              (clearTimeout(e._suspendTimer),
                                              (e._suspendTimer = null)))
                                            : "suspending" === e.state && (e._resumeAfterSuspend = !0),
                                    e
                                );
                        },
                    };
                    var a = new o(),
                        i = function (e) {
                            e.src && 0 !== e.src.length
                                ? this.init(e)
                                : console.error(
                                    "An array of source files must be passed with any new Howl.",
                                );
                        };
                    i.prototype = {
                        init: function (e) {
                            const t = this;
                            return (
                                a.ctx || p(),
                                (t._autoplay = e.autoplay || !1),
                                (t._format = "string" != typeof e.format ? e.format : [e.format]),
                                (t._html5 = e.html5 || !1),
                                (t._muted = e.mute || !1),
                                (t._loop = e.loop || !1),
                                (t._pool = e.pool || 5),
                                (t._preload =
                                    ("boolean" != typeof e.preload && "metadata" !== e.preload) ||
                                    e.preload),
                                (t._rate = e.rate || 1),
                                (t._sprite = e.sprite || {}),
                                (t._src = "string" != typeof e.src ? e.src : [e.src]),
                                (t._volume = void 0 !== e.volume ? e.volume : 1),
                                (t._xhr = {
                                    method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                                    headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                                    withCredentials:
                                        !(!e.xhr || !e.xhr.withCredentials) &&
                                        e.xhr.withCredentials,
                                }),
                                (t._duration = 0),
                                (t._state = "unloaded"),
                                (t._sounds = []),
                                (t._endTimers = {}),
                                (t._queue = []),
                                (t._playLock = !1),
                                (t._onend = e.onend ? [{ fn: e.onend }] : []),
                                (t._onfade = e.onfade ? [{ fn: e.onfade }] : []),
                                (t._onload = e.onload ? [{ fn: e.onload }] : []),
                                (t._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
                                (t._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
                                (t._onpause = e.onpause ? [{ fn: e.onpause }] : []),
                                (t._onplay = e.onplay ? [{ fn: e.onplay }] : []),
                                (t._onstop = e.onstop ? [{ fn: e.onstop }] : []),
                                (t._onmute = e.onmute ? [{ fn: e.onmute }] : []),
                                (t._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
                                (t._onrate = e.onrate ? [{ fn: e.onrate }] : []),
                                (t._onseek = e.onseek ? [{ fn: e.onseek }] : []),
                                (t._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
                                (t._onresume = []),
                                (t._webAudio = a.usingWebAudio && !t._html5),
                                void 0 !== a.ctx && a.ctx && a.autoUnlock && a._unlockAudio(),
                                a._howls.push(t),
                                t._autoplay &&
                                    t._queue.push({
                                        event: "play",
                                        action: function () {
                                            t.play();
                                        },
                                    }),
                                t._preload && "none" !== t._preload && t.load(),
                                t
                            );
                        },
                        load: function () {
                            let e = null;
                            if (a.noAudio) this._emit("loaderror", null, "No audio support.");
                            else {
                                "string" == typeof this._src && (this._src = [this._src]);
                                for (let t = 0; t < this._src.length; t++) {
                                    var n, r;
                                    if (this._format && this._format[t]) n = this._format[t];
                                    else {
                                        if ("string" != typeof (r = this._src[t])) {
                                            this._emit(
                                                "loaderror",
                                                null,
                                                "Non-string found in selected audio sources - ignoring.",
                                            );
                                            continue;
                                        }
                                        (n = /^data:audio\/([^;,]+);/i.exec(r)) ||
                                            (n = /\.([^.]+)$/.exec(r.split("?", 1)[0])),
                                        n && (n = n[1].toLowerCase());
                                    }
                                    if (
                                        (n ||
                                            console.warn(
                                                'No file extension was found. Consider using the "format" property or specify an extension.',
                                            ),
                                        n && a.codecs(n))
                                    ) {
                                        e = this._src[t];
                                        break;
                                    }
                                }
                                if (e)
                                    return (
                                        (this._src = e),
                                        (this._state = "loading"),
                                        "https:" === window.location.protocol &&
                                            "http:" === e.slice(0, 5) &&
                                            ((this._html5 = !0), (this._webAudio = !1)),
                                        new s(this),
                                        this._webAudio && u(this),
                                        this
                                    );
                                this._emit(
                                    "loaderror",
                                    null,
                                    "No codec support for selected audio sources.",
                                );
                            }
                        },
                        play: function (e, t) {
                            let n = this,
                                r = null;
                            if ("number" == typeof e) (r = e), (e = null);
                            else {
                                if ("string" == typeof e && "loaded" === n._state && !n._sprite[e])
                                    return null;
                                if (void 0 === e && ((e = "__default"), !n._playLock)) {
                                    for (var o = 0, i = 0; i < n._sounds.length; i++)
                                        n._sounds[i]._paused &&
                                            !n._sounds[i]._ended &&
                                            (o++, (r = n._sounds[i]._id));
                                    1 === o ? (e = null) : (r = null);
                                }
                            }
                            const s = r ? n._soundById(r) : n._inactiveSound();
                            if (!s) return null;
                            if (
                                (r && !e && (e = s._sprite || "__default"), "loaded" !== n._state)
                            ) {
                                (s._sprite = e), (s._ended = !1);
                                const l = s._id;
                                return (
                                    n._queue.push({
                                        event: "play",
                                        action: function () {
                                            n.play(l);
                                        },
                                    }),
                                    l
                                );
                            }
                            if (r && !s._paused) return t || n._loadQueue("play"), s._id;
                            n._webAudio && a._autoResume();
                            const u = Math.max(0, s._seek > 0 ? s._seek : n._sprite[e][0] / 1e3),
                                d = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - u),
                                c = (1e3 * d) / Math.abs(s._rate),
                                _ = n._sprite[e][0] / 1e3,
                                p = (n._sprite[e][0] + n._sprite[e][1]) / 1e3;
                            (s._sprite = e), (s._ended = !1);
                            const h = function () {
                                (s._paused = !1),
                                (s._seek = u),
                                (s._start = _),
                                (s._stop = p),
                                (s._loop = !(!s._loop && !n._sprite[e][2]));
                            };
                            if (!(u >= p)) {
                                const f = s._node;
                                if (n._webAudio) {
                                    const m = function () {
                                        (n._playLock = !1), h(), n._refreshBuffer(s);
                                        const e = s._muted || n._muted ? 0 : s._volume;
                                        f.gain.setValueAtTime(e, a.ctx.currentTime),
                                        (s._playStart = a.ctx.currentTime),
                                        void 0 === f.bufferSource.start
                                            ? s._loop
                                                ? f.bufferSource.noteGrainOn(0, u, 86400)
                                                : f.bufferSource.noteGrainOn(0, u, d)
                                            : s._loop
                                                ? f.bufferSource.start(0, u, 86400)
                                                : f.bufferSource.start(0, u, d),
                                        c !== 1 / 0 &&
                                                (n._endTimers[s._id] = setTimeout(
                                                    n._ended.bind(n, s),
                                                    c,
                                                )),
                                        t ||
                                                setTimeout(function () {
                                                    n._emit("play", s._id), n._loadQueue();
                                                }, 0);
                                    };
                                    "running" === a.state && "interrupted" !== a.ctx.state
                                        ? m()
                                        : ((n._playLock = !0),
                                        n.once("resume", m),
                                        n._clearTimer(s._id));
                                } else {
                                    const g = function () {
                                        (f.currentTime = u),
                                        (f.muted = s._muted || n._muted || a._muted || f.muted),
                                        (f.volume = s._volume * a.volume()),
                                        (f.playbackRate = s._rate);
                                        try {
                                            const r = f.play();
                                            if (
                                                (r &&
                                                "undefined" != typeof Promise &&
                                                (r instanceof Promise ||
                                                    "function" == typeof r.then)
                                                    ? ((n._playLock = !0),
                                                    h(),
                                                    r
                                                        .then(function () {
                                                            (n._playLock = !1),
                                                            (f._unlocked = !0),
                                                            t ||
                                                                      (n._emit("play", s._id),
                                                                      n._loadQueue());
                                                        })
                                                        .catch(function () {
                                                            (n._playLock = !1),
                                                            n._emit(
                                                                "playerror",
                                                                s._id,
                                                                "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.",
                                                            ),
                                                            (s._ended = !0),
                                                            (s._paused = !0);
                                                        }))
                                                    : t ||
                                                      ((n._playLock = !1),
                                                      h(),
                                                      n._emit("play", s._id),
                                                      n._loadQueue()),
                                                (f.playbackRate = s._rate),
                                                f.paused)
                                            )
                                                return void n._emit(
                                                    "playerror",
                                                    s._id,
                                                    "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.",
                                                );
                                            "__default" !== e || s._loop
                                                ? (n._endTimers[s._id] = setTimeout(
                                                    n._ended.bind(n, s),
                                                    c,
                                                ))
                                                : ((n._endTimers[s._id] = function () {
                                                    n._ended(s),
                                                    f.removeEventListener(
                                                        "ended",
                                                        n._endTimers[s._id],
                                                        !1,
                                                    );
                                                }),
                                                f.addEventListener(
                                                    "ended",
                                                    n._endTimers[s._id],
                                                    !1,
                                                ));
                                        } catch (o) {
                                            n._emit("playerror", s._id, o);
                                        }
                                    };
                                    "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" ===
                                        f.src && ((f.src = n._src), f.load());
                                    const y =
                                        (window && window.ejecta) ||
                                        (!f.readyState && a._navigator.isCocoonJS);
                                    if (f.readyState >= 3 || y) g();
                                    else {
                                        n._playLock = !0;
                                        f.addEventListener(
                                            a._canPlayEvent,
                                            function e() {
                                                g(), f.removeEventListener(a._canPlayEvent, e, !1);
                                            },
                                            !1,
                                        ),
                                        n._clearTimer(s._id);
                                    }
                                }
                                return s._id;
                            }
                            n._ended(s);
                        },
                        pause: function (e) {
                            const t = this;
                            if ("loaded" !== t._state || t._playLock)
                                return (
                                    t._queue.push({
                                        event: "pause",
                                        action: function () {
                                            t.pause(e);
                                        },
                                    }),
                                    t
                                );
                            for (let n = t._getSoundIds(e), r = 0; r < n.length; r++) {
                                t._clearTimer(n[r]);
                                const o = t._soundById(n[r]);
                                if (
                                    o &&
                                    !o._paused &&
                                    ((o._seek = t.seek(n[r])),
                                    (o._rateSeek = 0),
                                    (o._paused = !0),
                                    t._stopFade(n[r]),
                                    o._node)
                                )
                                    if (t._webAudio) {
                                        if (!o._node.bufferSource) continue;
                                        void 0 === o._node.bufferSource.stop
                                            ? o._node.bufferSource.noteOff(0)
                                            : o._node.bufferSource.stop(0),
                                        t._cleanBuffer(o._node);
                                    } else
                                        (isNaN(o._node.duration) && o._node.duration !== 1 / 0) ||
                                            o._node.pause();
                                arguments[1] || t._emit("pause", o ? o._id : null);
                            }
                            return t;
                        },
                        stop: function (e, t) {
                            const n = this;
                            if ("loaded" !== n._state || n._playLock)
                                return (
                                    n._queue.push({
                                        event: "stop",
                                        action: function () {
                                            n.stop(e);
                                        },
                                    }),
                                    n
                                );
                            for (let r = n._getSoundIds(e), o = 0; o < r.length; o++) {
                                n._clearTimer(r[o]);
                                const a = n._soundById(r[o]);
                                a &&
                                    ((a._seek = a._start || 0),
                                    (a._rateSeek = 0),
                                    (a._paused = !0),
                                    (a._ended = !0),
                                    n._stopFade(r[o]),
                                    a._node &&
                                        (n._webAudio
                                            ? a._node.bufferSource &&
                                              (void 0 === a._node.bufferSource.stop
                                                  ? a._node.bufferSource.noteOff(0)
                                                  : a._node.bufferSource.stop(0),
                                              n._cleanBuffer(a._node))
                                            : (isNaN(a._node.duration) &&
                                                  a._node.duration !== 1 / 0) ||
                                              ((a._node.currentTime = a._start || 0),
                                              a._node.pause(),
                                              a._node.duration === 1 / 0 &&
                                                  n._clearSound(a._node))),
                                    t || n._emit("stop", a._id));
                            }
                            return n;
                        },
                        mute: function (e, t) {
                            const n = this;
                            if ("loaded" !== n._state || n._playLock)
                                return (
                                    n._queue.push({
                                        event: "mute",
                                        action: function () {
                                            n.mute(e, t);
                                        },
                                    }),
                                    n
                                );
                            if (void 0 === t) {
                                if ("boolean" != typeof e) return n._muted;
                                n._muted = e;
                            }
                            for (let r = n._getSoundIds(t), o = 0; o < r.length; o++) {
                                const i = n._soundById(r[o]);
                                i &&
                                    ((i._muted = e),
                                    i._interval && n._stopFade(i._id),
                                    n._webAudio && i._node
                                        ? i._node.gain.setValueAtTime(
                                            e ? 0 : i._volume,
                                            a.ctx.currentTime,
                                        )
                                        : i._node && (i._node.muted = !!a._muted || e),
                                    n._emit("mute", i._id));
                            }
                            return n;
                        },
                        volume: function () {
                            let e,
                                t,
                                n,
                                r = this,
                                o = arguments;
                            if (0 === o.length) return r._volume;
                            if (1 === o.length || (2 === o.length && void 0 === o[1])) {
                                const i = r._getSoundIds(),
                                    s = i.indexOf(o[0]);
                                s >= 0 ? (t = parseInt(o[0], 10)) : (e = parseFloat(o[0]));
                            } else
                                o.length >= 2 && ((e = parseFloat(o[0])), (t = parseInt(o[1], 10)));
                            if (!(void 0 !== e && e >= 0 && e <= 1))
                                return (n = t ? r._soundById(t) : r._sounds[0]) ? n._volume : 0;
                            if ("loaded" !== r._state || r._playLock)
                                return (
                                    r._queue.push({
                                        event: "volume",
                                        action: function () {
                                            r.volume.apply(r, o);
                                        },
                                    }),
                                    r
                                );
                            void 0 === t && (r._volume = e), (t = r._getSoundIds(t));
                            for (let l = 0; l < t.length; l++)
                                (n = r._soundById(t[l])) &&
                                    ((n._volume = e),
                                    o[2] || r._stopFade(t[l]),
                                    r._webAudio && n._node && !n._muted
                                        ? n._node.gain.setValueAtTime(e, a.ctx.currentTime)
                                        : n._node && !n._muted && (n._node.volume = e * a.volume()),
                                    r._emit("volume", n._id));
                            return r;
                        },
                        fade: function (e, t, n, r) {
                            const o = this;
                            if ("loaded" !== o._state || o._playLock)
                                return (
                                    o._queue.push({
                                        event: "fade",
                                        action: function () {
                                            o.fade(e, t, n, r);
                                        },
                                    }),
                                    o
                                );
                            (e = Math.min(Math.max(0, parseFloat(e)), 1)),
                            (t = Math.min(Math.max(0, parseFloat(t)), 1)),
                            (n = parseFloat(n)),
                            o.volume(e, r);
                            for (let i = o._getSoundIds(r), s = 0; s < i.length; s++) {
                                const l = o._soundById(i[s]);
                                if (l) {
                                    if ((r || o._stopFade(i[s]), o._webAudio && !l._muted)) {
                                        const u = a.ctx.currentTime,
                                            d = u + n / 1e3;
                                        (l._volume = e),
                                        l._node.gain.setValueAtTime(e, u),
                                        l._node.gain.linearRampToValueAtTime(t, d);
                                    }
                                    o._startFadeInterval(l, e, t, n, i[s], void 0 === r);
                                }
                            }
                            return o;
                        },
                        _startFadeInterval: function (e, t, n, r, o, a) {
                            let i = this,
                                s = t,
                                l = n - t,
                                u = Math.abs(l / 0.01),
                                d = Math.max(4, u > 0 ? r / u : r),
                                c = Date.now();
                            (e._fadeTo = n),
                            (e._interval = setInterval(function () {
                                const o = (Date.now() - c) / r;
                                (c = Date.now()),
                                (s += l * o),
                                (s = Math.round(100 * s) / 100),
                                (s = l < 0 ? Math.max(n, s) : Math.min(n, s)),
                                i._webAudio ? (e._volume = s) : i.volume(s, e._id, !0),
                                a && (i._volume = s),
                                ((n < t && s <= n) || (n > t && s >= n)) &&
                                            (clearInterval(e._interval),
                                            (e._interval = null),
                                            (e._fadeTo = null),
                                            i.volume(n, e._id),
                                            i._emit("fade", e._id));
                            }, d));
                        },
                        _stopFade: function (e) {
                            const t = this._soundById(e);
                            return (
                                t &&
                                    t._interval &&
                                    (this._webAudio &&
                                        t._node.gain.cancelScheduledValues(a.ctx.currentTime),
                                    clearInterval(t._interval),
                                    (t._interval = null),
                                    this.volume(t._fadeTo, e),
                                    (t._fadeTo = null),
                                    this._emit("fade", e)),
                                this
                            );
                        },
                        loop: function () {
                            let e,
                                t,
                                n,
                                r = this,
                                o = arguments;
                            if (0 === o.length) return r._loop;
                            if (1 === o.length) {
                                if ("boolean" != typeof o[0])
                                    return !!(n = r._soundById(parseInt(o[0], 10))) && n._loop;
                                (e = o[0]), (r._loop = e);
                            } else 2 === o.length && ((e = o[0]), (t = parseInt(o[1], 10)));
                            for (let a = r._getSoundIds(t), i = 0; i < a.length; i++)
                                (n = r._soundById(a[i])) &&
                                    ((n._loop = e),
                                    r._webAudio &&
                                        n._node &&
                                        n._node.bufferSource &&
                                        ((n._node.bufferSource.loop = e),
                                        e &&
                                            ((n._node.bufferSource.loopStart = n._start || 0),
                                            (n._node.bufferSource.loopEnd = n._stop))));
                            return r;
                        },
                        rate: function () {
                            let e,
                                t,
                                n,
                                r = this,
                                o = arguments;
                            if (0 === o.length) t = r._sounds[0]._id;
                            else if (1 === o.length) {
                                const i = r._getSoundIds(),
                                    s = i.indexOf(o[0]);
                                s >= 0 ? (t = parseInt(o[0], 10)) : (e = parseFloat(o[0]));
                            } else
                                2 === o.length &&
                                    ((e = parseFloat(o[0])), (t = parseInt(o[1], 10)));
                            if ("number" != typeof e)
                                return (n = r._soundById(t)) ? n._rate : r._rate;
                            if ("loaded" !== r._state || r._playLock)
                                return (
                                    r._queue.push({
                                        event: "rate",
                                        action: function () {
                                            r.rate.apply(r, o);
                                        },
                                    }),
                                    r
                                );
                            void 0 === t && (r._rate = e), (t = r._getSoundIds(t));
                            for (let l = 0; l < t.length; l++)
                                if ((n = r._soundById(t[l]))) {
                                    r.playing(t[l]) &&
                                        ((n._rateSeek = r.seek(t[l])),
                                        (n._playStart = r._webAudio
                                            ? a.ctx.currentTime
                                            : n._playStart)),
                                    (n._rate = e),
                                    r._webAudio && n._node && n._node.bufferSource
                                        ? n._node.bufferSource.playbackRate.setValueAtTime(
                                            e,
                                            a.ctx.currentTime,
                                        )
                                        : n._node && (n._node.playbackRate = e);
                                    const u = r.seek(t[l]),
                                        d =
                                            (r._sprite[n._sprite][0] + r._sprite[n._sprite][1]) /
                                                1e3 -
                                            u,
                                        c = (1e3 * d) / Math.abs(n._rate);
                                    (!r._endTimers[t[l]] && n._paused) ||
                                        (r._clearTimer(t[l]),
                                        (r._endTimers[t[l]] = setTimeout(r._ended.bind(r, n), c))),
                                    r._emit("rate", n._id);
                                }
                            return r;
                        },
                        seek: function () {
                            let e,
                                t,
                                n = this,
                                r = arguments;
                            if (0 === r.length) t = n._sounds[0]._id;
                            else if (1 === r.length) {
                                const o = n._getSoundIds(),
                                    i = o.indexOf(r[0]);
                                i >= 0
                                    ? (t = parseInt(r[0], 10))
                                    : n._sounds.length &&
                                      ((t = n._sounds[0]._id), (e = parseFloat(r[0])));
                            } else
                                2 === r.length &&
                                    ((e = parseFloat(r[0])), (t = parseInt(r[1], 10)));
                            if (void 0 === t) return n;
                            if ("number" == typeof e && ("loaded" !== n._state || n._playLock))
                                return (
                                    n._queue.push({
                                        event: "seek",
                                        action: function () {
                                            n.seek.apply(n, r);
                                        },
                                    }),
                                    n
                                );
                            const s = n._soundById(t);
                            if (s) {
                                if (!("number" == typeof e && e >= 0)) {
                                    if (n._webAudio) {
                                        const l = n.playing(t) ? a.ctx.currentTime - s._playStart : 0,
                                            u = s._rateSeek ? s._rateSeek - s._seek : 0;
                                        return s._seek + (u + l * Math.abs(s._rate));
                                    }
                                    return s._node.currentTime;
                                }
                                const d = n.playing(t);
                                d && n.pause(t, !0),
                                (s._seek = e),
                                (s._ended = !1),
                                n._clearTimer(t),
                                n._webAudio ||
                                        !s._node ||
                                        isNaN(s._node.duration) ||
                                        (s._node.currentTime = e);
                                const c = function () {
                                    n._emit("seek", t), d && n.play(t, !0);
                                };
                                if (d && !n._webAudio) {
                                    const _ = function e() {
                                        n._playLock ? setTimeout(e, 0) : c();
                                    };
                                    setTimeout(_, 0);
                                } else c();
                            }
                            return n;
                        },
                        playing: function (e) {
                            if ("number" == typeof e) {
                                const t = this._soundById(e);
                                return !!t && !t._paused;
                            }
                            for (let n = 0; n < this._sounds.length; n++)
                                if (!this._sounds[n]._paused) return !0;
                            return !1;
                        },
                        duration: function (e) {
                            let t = this._duration,
                                n = this._soundById(e);
                            return n && (t = this._sprite[n._sprite][1] / 1e3), t;
                        },
                        state: function () {
                            return this._state;
                        },
                        unload: function () {
                            for (var e = this, t = e._sounds, n = 0; n < t.length; n++)
                                t[n]._paused || e.stop(t[n]._id),
                                e._webAudio ||
                                        (e._clearSound(t[n]._node),
                                        t[n]._node.removeEventListener("error", t[n]._errorFn, !1),
                                        t[n]._node.removeEventListener(
                                            a._canPlayEvent,
                                            t[n]._loadFn,
                                            !1,
                                        ),
                                        t[n]._node.removeEventListener("ended", t[n]._endFn, !1),
                                        a._releaseHtml5Audio(t[n]._node)),
                                delete t[n]._node,
                                e._clearTimer(t[n]._id);
                            const r = a._howls.indexOf(e);
                            r >= 0 && a._howls.splice(r, 1);
                            let o = !0;
                            for (n = 0; n < a._howls.length; n++)
                                if (
                                    a._howls[n]._src === e._src ||
                                    e._src.indexOf(a._howls[n]._src) >= 0
                                ) {
                                    o = !1;
                                    break;
                                }
                            return (
                                l && o && delete l[e._src],
                                (a.noAudio = !1),
                                (e._state = "unloaded"),
                                (e._sounds = []),
                                (e = null),
                                null
                            );
                        },
                        on: function (e, t, n, r) {
                            const o = this["_on" + e];
                            return (
                                "function" == typeof t &&
                                    o.push(r ? { id: n, fn: t, once: r } : { id: n, fn: t }),
                                this
                            );
                        },
                        off: function (e, t, n) {
                            let r = this["_on" + e],
                                o = 0;
                            if (("number" == typeof t && ((n = t), (t = null)), t || n))
                                for (o = 0; o < r.length; o++) {
                                    const a = n === r[o].id;
                                    if ((t === r[o].fn && a) || (!t && a)) {
                                        r.splice(o, 1);
                                        break;
                                    }
                                }
                            else if (e) this["_on" + e] = [];
                            else {
                                const i = Object.keys(this);
                                for (o = 0; o < i.length; o++)
                                    0 === i[o].indexOf("_on") &&
                                        Array.isArray(this[i[o]]) &&
                                        (this[i[o]] = []);
                            }
                            return this;
                        },
                        once: function (e, t, n) {
                            return this.on(e, t, n, 1), this;
                        },
                        _emit: function (e, t, n) {
                            for (let r = this["_on" + e], o = r.length - 1; o >= 0; o--)
                                (r[o].id && r[o].id !== t && "load" !== e) ||
                                    (setTimeout(
                                        function (e) {
                                            e.call(this, t, n);
                                        }.bind(this, r[o].fn),
                                        0,
                                    ),
                                    r[o].once && this.off(e, r[o].fn, r[o].id));
                            return this._loadQueue(e), this;
                        },
                        _loadQueue: function (e) {
                            if (this._queue.length > 0) {
                                const t = this._queue[0];
                                t.event === e && (this._queue.shift(), this._loadQueue()),
                                e || t.action();
                            }
                            return this;
                        },
                        _ended: function (e) {
                            const t = e._sprite;
                            if (
                                !this._webAudio &&
                                e._node &&
                                !e._node.paused &&
                                !e._node.ended &&
                                e._node.currentTime < e._stop
                            )
                                return setTimeout(this._ended.bind(this, e), 100), this;
                            const n = !(!e._loop && !this._sprite[t][2]);
                            if (
                                (this._emit("end", e._id),
                                !this._webAudio && n && this.stop(e._id, !0).play(e._id),
                                this._webAudio && n)
                            ) {
                                this._emit("play", e._id),
                                (e._seek = e._start || 0),
                                (e._rateSeek = 0),
                                (e._playStart = a.ctx.currentTime);
                                const r = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
                                this._endTimers[e._id] = setTimeout(this._ended.bind(this, e), r);
                            }
                            return (
                                this._webAudio &&
                                    !n &&
                                    ((e._paused = !0),
                                    (e._ended = !0),
                                    (e._seek = e._start || 0),
                                    (e._rateSeek = 0),
                                    this._clearTimer(e._id),
                                    this._cleanBuffer(e._node),
                                    a._autoSuspend()),
                                this._webAudio || n || this.stop(e._id, !0),
                                this
                            );
                        },
                        _clearTimer: function (e) {
                            if (this._endTimers[e]) {
                                if ("function" != typeof this._endTimers[e])
                                    clearTimeout(this._endTimers[e]);
                                else {
                                    const t = this._soundById(e);
                                    t &&
                                        t._node &&
                                        t._node.removeEventListener(
                                            "ended",
                                            this._endTimers[e],
                                            !1,
                                        );
                                }
                                delete this._endTimers[e];
                            }
                            return this;
                        },
                        _soundById: function (e) {
                            for (let t = 0; t < this._sounds.length; t++)
                                if (e === this._sounds[t]._id) return this._sounds[t];
                            return null;
                        },
                        _inactiveSound: function () {
                            this._drain();
                            for (let e = 0; e < this._sounds.length; e++)
                                if (this._sounds[e]._ended) return this._sounds[e].reset();
                            return new s(this);
                        },
                        _drain: function () {
                            let e = this._pool,
                                t = 0,
                                n = 0;
                            if (!(this._sounds.length < e)) {
                                for (n = 0; n < this._sounds.length; n++)
                                    this._sounds[n]._ended && t++;
                                for (n = this._sounds.length - 1; n >= 0; n--) {
                                    if (t <= e) return;
                                    this._sounds[n]._ended &&
                                        (this._webAudio &&
                                            this._sounds[n]._node &&
                                            this._sounds[n]._node.disconnect(0),
                                        this._sounds.splice(n, 1),
                                        t--);
                                }
                            }
                        },
                        _getSoundIds: function (e) {
                            if (void 0 === e) {
                                for (var t = [], n = 0; n < this._sounds.length; n++)
                                    t.push(this._sounds[n]._id);
                                return t;
                            }
                            return [e];
                        },
                        _refreshBuffer: function (e) {
                            return (
                                (e._node.bufferSource = a.ctx.createBufferSource()),
                                (e._node.bufferSource.buffer = l[this._src]),
                                e._panner
                                    ? e._node.bufferSource.connect(e._panner)
                                    : e._node.bufferSource.connect(e._node),
                                (e._node.bufferSource.loop = e._loop),
                                e._loop &&
                                    ((e._node.bufferSource.loopStart = e._start || 0),
                                    (e._node.bufferSource.loopEnd = e._stop || 0)),
                                e._node.bufferSource.playbackRate.setValueAtTime(
                                    e._rate,
                                    a.ctx.currentTime,
                                ),
                                this
                            );
                        },
                        _cleanBuffer: function (e) {
                            const t = a._navigator && a._navigator.vendor.indexOf("Apple") >= 0;
                            if (
                                a._scratchBuffer &&
                                e.bufferSource &&
                                ((e.bufferSource.onended = null), e.bufferSource.disconnect(0), t)
                            )
                                try {
                                    e.bufferSource.buffer = a._scratchBuffer;
                                } catch (n) {}
                            return (e.bufferSource = null), this;
                        },
                        _clearSound: function (e) {
                            /MSIE |Trident\//.test(a._navigator && a._navigator.userAgent) ||
                                (e.src =
                                    "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
                        },
                    };
                    var s = function (e) {
                        (this._parent = e), this.init();
                    };
                    s.prototype = {
                        init: function () {
                            const e = this._parent;
                            return (
                                (this._muted = e._muted),
                                (this._loop = e._loop),
                                (this._volume = e._volume),
                                (this._rate = e._rate),
                                (this._seek = 0),
                                (this._paused = !0),
                                (this._ended = !0),
                                (this._sprite = "__default"),
                                (this._id = ++a._counter),
                                e._sounds.push(this),
                                this.create(),
                                this
                            );
                        },
                        create: function () {
                            const e = this._parent,
                                t =
                                    a._muted || this._muted || this._parent._muted
                                        ? 0
                                        : this._volume;
                            return (
                                e._webAudio
                                    ? ((this._node =
                                          void 0 === a.ctx.createGain
                                              ? a.ctx.createGainNode()
                                              : a.ctx.createGain()),
                                    this._node.gain.setValueAtTime(t, a.ctx.currentTime),
                                    (this._node.paused = !0),
                                    this._node.connect(a.masterGain))
                                    : a.noAudio ||
                                      ((this._node = a._obtainHtml5Audio()),
                                      (this._errorFn = this._errorListener.bind(this)),
                                      this._node.addEventListener("error", this._errorFn, !1),
                                      (this._loadFn = this._loadListener.bind(this)),
                                      this._node.addEventListener(
                                          a._canPlayEvent,
                                          this._loadFn,
                                          !1,
                                      ),
                                      (this._endFn = this._endListener.bind(this)),
                                      this._node.addEventListener("ended", this._endFn, !1),
                                      (this._node.src = e._src),
                                      (this._node.preload =
                                          !0 === e._preload ? "auto" : e._preload),
                                      (this._node.volume = t * a.volume()),
                                      this._node.load()),
                                this
                            );
                        },
                        reset: function () {
                            const e = this._parent;
                            return (
                                (this._muted = e._muted),
                                (this._loop = e._loop),
                                (this._volume = e._volume),
                                (this._rate = e._rate),
                                (this._seek = 0),
                                (this._rateSeek = 0),
                                (this._paused = !0),
                                (this._ended = !0),
                                (this._sprite = "__default"),
                                (this._id = ++a._counter),
                                this
                            );
                        },
                        _errorListener: function () {
                            this._parent._emit(
                                "loaderror",
                                this._id,
                                this._node.error ? this._node.error.code : 0,
                            ),
                            this._node.removeEventListener("error", this._errorFn, !1);
                        },
                        _loadListener: function () {
                            const e = this._parent;
                            (e._duration = Math.ceil(10 * this._node.duration) / 10),
                            0 === Object.keys(e._sprite).length &&
                                    (e._sprite = { __default: [0, 1e3 * e._duration] }),
                            "loaded" !== e._state &&
                                    ((e._state = "loaded"), e._emit("load"), e._loadQueue()),
                            this._node.removeEventListener(a._canPlayEvent, this._loadFn, !1);
                        },
                        _endListener: function () {
                            const e = this._parent;
                            e._duration === 1 / 0 &&
                                ((e._duration = Math.ceil(10 * this._node.duration) / 10),
                                e._sprite.__default[1] === 1 / 0 &&
                                    (e._sprite.__default[1] = 1e3 * e._duration),
                                e._ended(this)),
                            this._node.removeEventListener("ended", this._endFn, !1);
                        },
                    };
                    var l = {},
                        u = function (e) {
                            const t = e._src;
                            if (l[t]) return (e._duration = l[t].duration), void _(e);
                            if (/^data:[^;]+;base64,/.test(t)) {
                                for (
                                    var n = atob(t.split(",")[1]),
                                        r = new Uint8Array(n.length),
                                        o = 0;
                                    o < n.length;
                                    ++o
                                )
                                    r[o] = n.charCodeAt(o);
                                c(r.buffer, e);
                            } else {
                                const a = new XMLHttpRequest();
                                a.open(e._xhr.method, t, !0),
                                (a.withCredentials = e._xhr.withCredentials),
                                (a.responseType = "arraybuffer"),
                                e._xhr.headers &&
                                        Object.keys(e._xhr.headers).forEach(function (t) {
                                            a.setRequestHeader(t, e._xhr.headers[t]);
                                        }),
                                (a.onload = function () {
                                    const t = (a.status + "")[0];
                                    "0" === t || "2" === t || "3" === t
                                        ? c(a.response, e)
                                        : e._emit(
                                            "loaderror",
                                            null,
                                            "Failed loading audio file with status: " +
                                                      a.status +
                                                      ".",
                                        );
                                }),
                                (a.onerror = function () {
                                    e._webAudio &&
                                            ((e._html5 = !0),
                                            (e._webAudio = !1),
                                            (e._sounds = []),
                                            delete l[t],
                                            e.load());
                                }),
                                d(a);
                            }
                        },
                        d = function (e) {
                            try {
                                e.send();
                            } catch (t) {
                                e.onerror();
                            }
                        },
                        c = function (e, t) {
                            const n = function () {
                                    t._emit("loaderror", null, "Decoding audio data failed.");
                                },
                                r = function (e) {
                                    e && t._sounds.length > 0 ? ((l[t._src] = e), _(t, e)) : n();
                                };
                            "undefined" != typeof Promise && 1 === a.ctx.decodeAudioData.length
                                ? a.ctx.decodeAudioData(e).then(r).catch(n)
                                : a.ctx.decodeAudioData(e, r, n);
                        },
                        _ = function (e, t) {
                            t && !e._duration && (e._duration = t.duration),
                            0 === Object.keys(e._sprite).length &&
                                    (e._sprite = { __default: [0, 1e3 * e._duration] }),
                            "loaded" !== e._state &&
                                    ((e._state = "loaded"), e._emit("load"), e._loadQueue());
                        },
                        p = function () {
                            if (a.usingWebAudio) {
                                try {
                                    "undefined" != typeof AudioContext
                                        ? (a.ctx = new AudioContext())
                                        : "undefined" != typeof webkitAudioContext
                                            ? (a.ctx = new webkitAudioContext())
                                            : (a.usingWebAudio = !1);
                                } catch (o) {
                                    a.usingWebAudio = !1;
                                }
                                a.ctx || (a.usingWebAudio = !1);
                                const e = /iP(hone|od|ad)/.test(
                                        a._navigator && a._navigator.platform,
                                    ),
                                    t =
                                        a._navigator &&
                                        a._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                                    n = t ? parseInt(t[1], 10) : null;
                                if (e && n && n < 9) {
                                    const r = /safari/.test(
                                        a._navigator && a._navigator.userAgent.toLowerCase(),
                                    );
                                    a._navigator && !r && (a.usingWebAudio = !1);
                                }
                                a.usingWebAudio &&
                                    ((a.masterGain =
                                        void 0 === a.ctx.createGain
                                            ? a.ctx.createGainNode()
                                            : a.ctx.createGain()),
                                    a.masterGain.gain.setValueAtTime(
                                        a._muted ? 0 : a._volume,
                                        a.ctx.currentTime,
                                    ),
                                    a.masterGain.connect(a.ctx.destination)),
                                a._setup();
                            }
                        };
                    void 0 ===
                        (r = function () {
                            return { Howler: a, Howl: i };
                        }.apply(t, [])) || (e.exports = r),
                    (t.Howler = a),
                    (t.Howl = i),
                    void 0 !== n
                        ? ((n.HowlerGlobal = o), (n.Howler = a), (n.Howl = i), (n.Sound = s))
                        : "undefined" != typeof window &&
                              ((window.HowlerGlobal = o),
                              (window.Howler = a),
                              (window.Howl = i),
                              (window.Sound = s));
                })(),
                (function () {
                    
                    let e;
                    (HowlerGlobal.prototype._pos = [0, 0, 0]),
                    (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
                    (HowlerGlobal.prototype.stereo = function (e) {
                        if (!this.ctx || !this.ctx.listener) return this;
                        for (let t = this._howls.length - 1; t >= 0; t--)
                            this._howls[t].stereo(e);
                        return this;
                    }),
                    (HowlerGlobal.prototype.pos = function (e, t, n) {
                        return this.ctx && this.ctx.listener
                            ? ((t = "number" != typeof t ? this._pos[1] : t),
                            (n = "number" != typeof n ? this._pos[2] : n),
                            "number" != typeof e
                                ? this._pos
                                : ((this._pos = [e, t, n]),
                                void 0 !== this.ctx.listener.positionX
                                    ? (this.ctx.listener.positionX.setTargetAtTime(
                                        this._pos[0],
                                        Howler.ctx.currentTime,
                                        0.1,
                                    ),
                                    this.ctx.listener.positionY.setTargetAtTime(
                                        this._pos[1],
                                        Howler.ctx.currentTime,
                                        0.1,
                                    ),
                                    this.ctx.listener.positionZ.setTargetAtTime(
                                        this._pos[2],
                                        Howler.ctx.currentTime,
                                        0.1,
                                    ))
                                    : this.ctx.listener.setPosition(
                                        this._pos[0],
                                        this._pos[1],
                                        this._pos[2],
                                    ),
                                this))
                            : this;
                    }),
                    (HowlerGlobal.prototype.orientation = function (e, t, n, r, o, a) {
                        if (!this.ctx || !this.ctx.listener) return this;
                        const i = this._orientation;
                        return (
                            (t = "number" != typeof t ? i[1] : t),
                            (n = "number" != typeof n ? i[2] : n),
                            (r = "number" != typeof r ? i[3] : r),
                            (o = "number" != typeof o ? i[4] : o),
                            (a = "number" != typeof a ? i[5] : a),
                            "number" != typeof e
                                ? i
                                : ((this._orientation = [e, t, n, r, o, a]),
                                void 0 !== this.ctx.listener.forwardX
                                    ? (this.ctx.listener.forwardX.setTargetAtTime(
                                        e,
                                        Howler.ctx.currentTime,
                                        0.1,
                                    ),
                                    this.ctx.listener.forwardY.setTargetAtTime(
                                        t,
                                        Howler.ctx.currentTime,
                                        0.1,
                                    ),
                                    this.ctx.listener.forwardZ.setTargetAtTime(
                                        n,
                                        Howler.ctx.currentTime,
                                        0.1,
                                    ),
                                    this.ctx.listener.upX.setTargetAtTime(
                                        r,
                                        Howler.ctx.currentTime,
                                        0.1,
                                    ),
                                    this.ctx.listener.upY.setTargetAtTime(
                                        o,
                                        Howler.ctx.currentTime,
                                        0.1,
                                    ),
                                    this.ctx.listener.upZ.setTargetAtTime(
                                        a,
                                        Howler.ctx.currentTime,
                                        0.1,
                                    ))
                                    : this.ctx.listener.setOrientation(e, t, n, r, o, a),
                                this)
                        );
                    }),
                    (Howl.prototype.init =
                                ((e = Howl.prototype.init),
                                function (t) {
                                    return (
                                        (this._orientation = t.orientation || [1, 0, 0]),
                                        (this._stereo = t.stereo || null),
                                        (this._pos = t.pos || null),
                                        (this._pannerAttr = {
                                            coneInnerAngle:
                                                void 0 !== t.coneInnerAngle
                                                    ? t.coneInnerAngle
                                                    : 360,
                                            coneOuterAngle:
                                                void 0 !== t.coneOuterAngle
                                                    ? t.coneOuterAngle
                                                    : 360,
                                            coneOuterGain:
                                                void 0 !== t.coneOuterGain ? t.coneOuterGain : 0,
                                            distanceModel:
                                                void 0 !== t.distanceModel
                                                    ? t.distanceModel
                                                    : "inverse",
                                            maxDistance:
                                                void 0 !== t.maxDistance ? t.maxDistance : 1e4,
                                            panningModel:
                                                void 0 !== t.panningModel ? t.panningModel : "HRTF",
                                            refDistance:
                                                void 0 !== t.refDistance ? t.refDistance : 1,
                                            rolloffFactor:
                                                void 0 !== t.rolloffFactor ? t.rolloffFactor : 1,
                                        }),
                                        (this._onstereo = t.onstereo ? [{ fn: t.onstereo }] : []),
                                        (this._onpos = t.onpos ? [{ fn: t.onpos }] : []),
                                        (this._onorientation = t.onorientation
                                            ? [{ fn: t.onorientation }]
                                            : []),
                                        e.call(this, t)
                                    );
                                })),
                    (Howl.prototype.stereo = function (e, n) {
                        const r = this;
                        if (!r._webAudio) return r;
                        if ("loaded" !== r._state)
                            return (
                                r._queue.push({
                                    event: "stereo",
                                    action: function () {
                                        r.stereo(e, n);
                                    },
                                }),
                                r
                            );
                        const o =
                                    void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                        if (void 0 === n) {
                            if ("number" != typeof e) return r._stereo;
                            (r._stereo = e), (r._pos = [e, 0, 0]);
                        }
                        for (let a = r._getSoundIds(n), i = 0; i < a.length; i++) {
                            const s = r._soundById(a[i]);
                            if (s) {
                                if ("number" != typeof e) return s._stereo;
                                (s._stereo = e),
                                (s._pos = [e, 0, 0]),
                                s._node &&
                                                ((s._pannerAttr.panningModel = "equalpower"),
                                                (s._panner && s._panner.pan) || t(s, o),
                                                "spatial" === o
                                                    ? void 0 !== s._panner.positionX
                                                        ? (s._panner.positionX.setValueAtTime(
                                                            e,
                                                            Howler.ctx.currentTime,
                                                        ),
                                                        s._panner.positionY.setValueAtTime(
                                                            0,
                                                            Howler.ctx.currentTime,
                                                        ),
                                                        s._panner.positionZ.setValueAtTime(
                                                            0,
                                                            Howler.ctx.currentTime,
                                                        ))
                                                        : s._panner.setPosition(e, 0, 0)
                                                    : s._panner.pan.setValueAtTime(
                                                        e,
                                                        Howler.ctx.currentTime,
                                                    )),
                                r._emit("stereo", s._id);
                            }
                        }
                        return r;
                    }),
                    (Howl.prototype.pos = function (e, n, r, o) {
                        const a = this;
                        if (!a._webAudio) return a;
                        if ("loaded" !== a._state)
                            return (
                                a._queue.push({
                                    event: "pos",
                                    action: function () {
                                        a.pos(e, n, r, o);
                                    },
                                }),
                                a
                            );
                        if (
                            ((n = "number" != typeof n ? 0 : n),
                            (r = "number" != typeof r ? -0.5 : r),
                            void 0 === o)
                        ) {
                            if ("number" != typeof e) return a._pos;
                            a._pos = [e, n, r];
                        }
                        for (let i = a._getSoundIds(o), s = 0; s < i.length; s++) {
                            const l = a._soundById(i[s]);
                            if (l) {
                                if ("number" != typeof e) return l._pos;
                                (l._pos = [e, n, r]),
                                l._node &&
                                                ((l._panner && !l._panner.pan) || t(l, "spatial"),
                                                void 0 !== l._panner.positionX
                                                    ? (l._panner.positionX.setValueAtTime(
                                                        e,
                                                        Howler.ctx.currentTime,
                                                    ),
                                                    l._panner.positionY.setValueAtTime(
                                                        n,
                                                        Howler.ctx.currentTime,
                                                    ),
                                                    l._panner.positionZ.setValueAtTime(
                                                        r,
                                                        Howler.ctx.currentTime,
                                                    ))
                                                    : l._panner.setPosition(e, n, r)),
                                a._emit("pos", l._id);
                            }
                        }
                        return a;
                    }),
                    (Howl.prototype.orientation = function (e, n, r, o) {
                        const a = this;
                        if (!a._webAudio) return a;
                        if ("loaded" !== a._state)
                            return (
                                a._queue.push({
                                    event: "orientation",
                                    action: function () {
                                        a.orientation(e, n, r, o);
                                    },
                                }),
                                a
                            );
                        if (
                            ((n = "number" != typeof n ? a._orientation[1] : n),
                            (r = "number" != typeof r ? a._orientation[2] : r),
                            void 0 === o)
                        ) {
                            if ("number" != typeof e) return a._orientation;
                            a._orientation = [e, n, r];
                        }
                        for (let i = a._getSoundIds(o), s = 0; s < i.length; s++) {
                            const l = a._soundById(i[s]);
                            if (l) {
                                if ("number" != typeof e) return l._orientation;
                                (l._orientation = [e, n, r]),
                                l._node &&
                                                (l._panner ||
                                                    (l._pos || (l._pos = a._pos || [0, 0, -0.5]),
                                                    t(l, "spatial")),
                                                void 0 !== l._panner.orientationX
                                                    ? (l._panner.orientationX.setValueAtTime(
                                                        e,
                                                        Howler.ctx.currentTime,
                                                    ),
                                                    l._panner.orientationY.setValueAtTime(
                                                        n,
                                                        Howler.ctx.currentTime,
                                                    ),
                                                    l._panner.orientationZ.setValueAtTime(
                                                        r,
                                                        Howler.ctx.currentTime,
                                                    ))
                                                    : l._panner.setOrientation(e, n, r)),
                                a._emit("orientation", l._id);
                            }
                        }
                        return a;
                    }),
                    (Howl.prototype.pannerAttr = function () {
                        let e,
                            n,
                            r,
                            o = this,
                            a = arguments;
                        if (!o._webAudio) return o;
                        if (0 === a.length) return o._pannerAttr;
                        if (1 === a.length) {
                            if ("object" != typeof a[0])
                                return (r = o._soundById(parseInt(a[0], 10)))
                                    ? r._pannerAttr
                                    : o._pannerAttr;
                            (e = a[0]),
                            void 0 === n &&
                                            (e.pannerAttr ||
                                                (e.pannerAttr = {
                                                    coneInnerAngle: e.coneInnerAngle,
                                                    coneOuterAngle: e.coneOuterAngle,
                                                    coneOuterGain: e.coneOuterGain,
                                                    distanceModel: e.distanceModel,
                                                    maxDistance: e.maxDistance,
                                                    refDistance: e.refDistance,
                                                    rolloffFactor: e.rolloffFactor,
                                                    panningModel: e.panningModel,
                                                }),
                                            (o._pannerAttr = {
                                                coneInnerAngle:
                                                    void 0 !== e.pannerAttr.coneInnerAngle
                                                        ? e.pannerAttr.coneInnerAngle
                                                        : o._coneInnerAngle,
                                                coneOuterAngle:
                                                    void 0 !== e.pannerAttr.coneOuterAngle
                                                        ? e.pannerAttr.coneOuterAngle
                                                        : o._coneOuterAngle,
                                                coneOuterGain:
                                                    void 0 !== e.pannerAttr.coneOuterGain
                                                        ? e.pannerAttr.coneOuterGain
                                                        : o._coneOuterGain,
                                                distanceModel:
                                                    void 0 !== e.pannerAttr.distanceModel
                                                        ? e.pannerAttr.distanceModel
                                                        : o._distanceModel,
                                                maxDistance:
                                                    void 0 !== e.pannerAttr.maxDistance
                                                        ? e.pannerAttr.maxDistance
                                                        : o._maxDistance,
                                                refDistance:
                                                    void 0 !== e.pannerAttr.refDistance
                                                        ? e.pannerAttr.refDistance
                                                        : o._refDistance,
                                                rolloffFactor:
                                                    void 0 !== e.pannerAttr.rolloffFactor
                                                        ? e.pannerAttr.rolloffFactor
                                                        : o._rolloffFactor,
                                                panningModel:
                                                    void 0 !== e.pannerAttr.panningModel
                                                        ? e.pannerAttr.panningModel
                                                        : o._panningModel,
                                            }));
                        } else 2 === a.length && ((e = a[0]), (n = parseInt(a[1], 10)));
                        for (let i = o._getSoundIds(n), s = 0; s < i.length; s++)
                            if ((r = o._soundById(i[s]))) {
                                let l = r._pannerAttr;
                                l = {
                                    coneInnerAngle:
                                                void 0 !== e.coneInnerAngle
                                                    ? e.coneInnerAngle
                                                    : l.coneInnerAngle,
                                    coneOuterAngle:
                                                void 0 !== e.coneOuterAngle
                                                    ? e.coneOuterAngle
                                                    : l.coneOuterAngle,
                                    coneOuterGain:
                                                void 0 !== e.coneOuterGain
                                                    ? e.coneOuterGain
                                                    : l.coneOuterGain,
                                    distanceModel:
                                                void 0 !== e.distanceModel
                                                    ? e.distanceModel
                                                    : l.distanceModel,
                                    maxDistance:
                                                void 0 !== e.maxDistance
                                                    ? e.maxDistance
                                                    : l.maxDistance,
                                    refDistance:
                                                void 0 !== e.refDistance
                                                    ? e.refDistance
                                                    : l.refDistance,
                                    rolloffFactor:
                                                void 0 !== e.rolloffFactor
                                                    ? e.rolloffFactor
                                                    : l.rolloffFactor,
                                    panningModel:
                                                void 0 !== e.panningModel
                                                    ? e.panningModel
                                                    : l.panningModel,
                                };
                                const u = r._panner;
                                u
                                    ? ((u.coneInnerAngle = l.coneInnerAngle),
                                    (u.coneOuterAngle = l.coneOuterAngle),
                                    (u.coneOuterGain = l.coneOuterGain),
                                    (u.distanceModel = l.distanceModel),
                                    (u.maxDistance = l.maxDistance),
                                    (u.refDistance = l.refDistance),
                                    (u.rolloffFactor = l.rolloffFactor),
                                    (u.panningModel = l.panningModel))
                                    : (r._pos || (r._pos = o._pos || [0, 0, -0.5]),
                                    t(r, "spatial"));
                            }
                        return o;
                    }),
                    (Sound.prototype.init = (function (e) {
                        return function () {
                            const t = this._parent;
                            (this._orientation = t._orientation),
                            (this._stereo = t._stereo),
                            (this._pos = t._pos),
                            (this._pannerAttr = t._pannerAttr),
                            e.call(this),
                            this._stereo
                                ? t.stereo(this._stereo)
                                : this._pos &&
                                              t.pos(
                                                  this._pos[0],
                                                  this._pos[1],
                                                  this._pos[2],
                                                  this._id,
                                              );
                        };
                    })(Sound.prototype.init)),
                    (Sound.prototype.reset = (function (e) {
                        return function () {
                            const t = this._parent;
                            return (
                                (this._orientation = t._orientation),
                                (this._stereo = t._stereo),
                                (this._pos = t._pos),
                                (this._pannerAttr = t._pannerAttr),
                                this._stereo
                                    ? t.stereo(this._stereo)
                                    : this._pos
                                        ? t.pos(
                                            this._pos[0],
                                            this._pos[1],
                                            this._pos[2],
                                            this._id,
                                        )
                                        : this._panner &&
                                              (this._panner.disconnect(0),
                                              (this._panner = void 0),
                                              t._refreshBuffer(this)),
                                e.call(this)
                            );
                        };
                    })(Sound.prototype.reset));
                    var t = function (e, t) {
                        "spatial" === (t = t || "spatial")
                            ? ((e._panner = Howler.ctx.createPanner()),
                            (e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle),
                            (e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle),
                            (e._panner.coneOuterGain = e._pannerAttr.coneOuterGain),
                            (e._panner.distanceModel = e._pannerAttr.distanceModel),
                            (e._panner.maxDistance = e._pannerAttr.maxDistance),
                            (e._panner.refDistance = e._pannerAttr.refDistance),
                            (e._panner.rolloffFactor = e._pannerAttr.rolloffFactor),
                            (e._panner.panningModel = e._pannerAttr.panningModel),
                            void 0 !== e._panner.positionX
                                ? (e._panner.positionX.setValueAtTime(
                                    e._pos[0],
                                    Howler.ctx.currentTime,
                                ),
                                e._panner.positionY.setValueAtTime(
                                    e._pos[1],
                                    Howler.ctx.currentTime,
                                ),
                                e._panner.positionZ.setValueAtTime(
                                    e._pos[2],
                                    Howler.ctx.currentTime,
                                ))
                                : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
                            void 0 !== e._panner.orientationX
                                ? (e._panner.orientationX.setValueAtTime(
                                    e._orientation[0],
                                    Howler.ctx.currentTime,
                                ),
                                e._panner.orientationY.setValueAtTime(
                                    e._orientation[1],
                                    Howler.ctx.currentTime,
                                ),
                                e._panner.orientationZ.setValueAtTime(
                                    e._orientation[2],
                                    Howler.ctx.currentTime,
                                ))
                                : e._panner.setOrientation(
                                    e._orientation[0],
                                    e._orientation[1],
                                    e._orientation[2],
                                ))
                            : ((e._panner = Howler.ctx.createStereoPanner()),
                            e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)),
                        e._panner.connect(e._node),
                        e._paused || e._parent.pause(e._id, !0).play(e._id, !0);
                    };
                })();
            }.call(this, n("yLpj")));
        },
        CjHp: function (e, t) {
            !(function (e) {
                const t = e.util.clone(e.languages.javascript);
                (e.languages.jsx = e.languages.extend("markup", t)),
                (e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i),
                (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
                (e.languages.jsx.tag.inside[
                    "attr-value"
                ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i),
                (e.languages.jsx.tag.inside.tag.inside[
                    "class-name"
                ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
                e.languages.insertBefore(
                    "inside",
                    "attr-name",
                    {
                        spread: {
                            pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
                            inside: { punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/ },
                        },
                    },
                    e.languages.jsx.tag,
                ),
                e.languages.insertBefore(
                    "inside",
                    "attr-value",
                    {
                        script: {
                            pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
                            inside: {
                                "script-punctuation": {
                                    pattern: /^=(?={)/,
                                    alias: "punctuation",
                                },
                                rest: e.languages.jsx,
                            },
                            alias: "language-javascript",
                        },
                    },
                    e.languages.jsx.tag,
                );
                const n = function e(t) {
                    return t
                        ? "string" == typeof t
                            ? t
                            : "string" == typeof t.content
                                ? t.content
                                : t.content.map(e).join("")
                        : "";
                };
                e.hooks.add("after-tokenize", function (t) {
                    ("jsx" !== t.language && "tsx" !== t.language) ||
                        (function t(r) {
                            for (let o = [], a = 0; a < r.length; a++) {
                                let i = r[a],
                                    s = !1;
                                if (
                                    ("string" != typeof i &&
                                        ("tag" === i.type &&
                                        i.content[0] &&
                                        "tag" === i.content[0].type
                                            ? "</" === i.content[0].content[0].content
                                                ? o.length > 0 &&
                                                  o[o.length - 1].tagName ===
                                                      n(i.content[0].content[1]) &&
                                                  o.pop()
                                                : "/>" ===
                                                      i.content[i.content.length - 1].content ||
                                                  o.push({
                                                      tagName: n(i.content[0].content[1]),
                                                      openedBraces: 0,
                                                  })
                                            : o.length > 0 &&
                                              "punctuation" === i.type &&
                                              "{" === i.content
                                                ? o[o.length - 1].openedBraces++
                                                : o.length > 0 &&
                                              o[o.length - 1].openedBraces > 0 &&
                                              "punctuation" === i.type &&
                                              "}" === i.content
                                                    ? o[o.length - 1].openedBraces--
                                                    : (s = !0)),
                                    (s || "string" == typeof i) &&
                                        o.length > 0 &&
                                        0 === o[o.length - 1].openedBraces)
                                ) {
                                    let l = n(i);
                                    a < r.length - 1 &&
                                        ("string" == typeof r[a + 1] ||
                                            "plain-text" === r[a + 1].type) &&
                                        ((l += n(r[a + 1])), r.splice(a + 1, 1)),
                                    a > 0 &&
                                            ("string" == typeof r[a - 1] ||
                                                "plain-text" === r[a - 1].type) &&
                                            ((l = n(r[a - 1]) + l), r.splice(a - 1, 1), a--),
                                    (r[a] = new e.Token("plain-text", l, null, l));
                                }
                                i.content && "string" != typeof i.content && t(i.content);
                            }
                        })(t.tokens);
                });
            })(Prism);
        },
        E9XD: function (e, t, n) {
            
            const r = n("I+eb"),
                o = n("1Y/n").left,
                a = n("pkCn"),
                i = n("rkAj"),
                s = n("LQDL"),
                l = n("YF1G"),
                u = a("reduce"),
                d = i("reduce", { 1: 0 });
            r(
                { target: "Array", proto: !0, forced: !u || !d || (!l && s > 79 && s < 83) },
                {
                    reduce: function (e) {
                        return o(
                            this,
                            e,
                            arguments.length,
                            arguments.length > 1 ? arguments[1] : void 0,
                        );
                    },
                },
            );
        },
        Gytx: function (e, t) {
            e.exports = function (e, t, n, r) {
                let o = n ? n.call(r, e, t) : void 0;
                if (void 0 !== o) return !!o;
                if (e === t) return !0;
                if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                const a = Object.keys(e),
                    i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (let s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < a.length; l++) {
                    const u = a[l];
                    if (!s(u)) return !1;
                    const d = e[u],
                        c = t[u];
                    if (!1 === (o = n ? n.call(r, d, c, u) : void 0) || (void 0 === o && d !== c))
                        return !1;
                }
                return !0;
            };
        },
        QWvX: function (e, t) {
            (Prism.languages.javascript = Prism.languages.extend("clike", {
                "class-name": [
                    Prism.languages.clike["class-name"],
                    {
                        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
                        lookbehind: !0,
                    },
                ],
                keyword: [
                    { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
                    {
                        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                        lookbehind: !0,
                    },
                ],
                number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
                function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
            })),
            (Prism.languages.javascript[
                "class-name"
            ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
            Prism.languages.insertBefore("javascript", "keyword", {
                regex: {
                    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        "regex-source": {
                            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                            lookbehind: !0,
                            alias: "language-regex",
                            inside: Prism.languages.regex,
                        },
                        "regex-flags": /[a-z]+$/,
                        "regex-delimiter": /^\/|\/$/,
                    },
                },
                "function-variable": {
                    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
                    alias: "function",
                },
                parameter: [
                    {
                        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
                        lookbehind: !0,
                        inside: Prism.languages.javascript,
                    },
                    {
                        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
                        inside: Prism.languages.javascript,
                    },
                    {
                        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
                        lookbehind: !0,
                        inside: Prism.languages.javascript,
                    },
                    {
                        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
                        lookbehind: !0,
                        inside: Prism.languages.javascript,
                    },
                ],
                constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
            }),
            Prism.languages.insertBefore("javascript", "string", {
                "template-string": {
                    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
                    greedy: !0,
                    inside: {
                        "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                        interpolation: {
                            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                            lookbehind: !0,
                            inside: {
                                "interpolation-punctuation": {
                                    pattern: /^\${|}$/,
                                    alias: "punctuation",
                                },
                                rest: Prism.languages.javascript,
                            },
                        },
                        string: /[\s\S]+/,
                    },
                },
            }),
            Prism.languages.markup &&
                    Prism.languages.markup.tag.addInlined("script", "javascript"),
            (Prism.languages.js = Prism.languages.javascript);
        },
        TJpk: function (e, t, n) {
            (t.__esModule = !0), (t.Helmet = void 0);
            const r =
                    Object.assign ||
                    function (e) {
                        for (let t = 1; t < arguments.length; t++) {
                            const n = arguments[t];
                            for (const r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    },
                o = (function () {
                    function e(e, t) {
                        for (let n = 0; n < t.length; n++) {
                            const r = t[n];
                            (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t;
                    };
                })(),
                a = c(n("q1tI")),
                i = c(n("17x9")),
                s = c(n("8+s/")),
                l = c(n("bmMU")),
                u = n("v1p5"),
                d = n("hFT/");
            function c(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function _(e, t) {
                const n = {};
                for (const r in e)
                    t.indexOf(r) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                return n;
            }
            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function h(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
            }
            let f,
                m,
                g,
                y = (0, s.default)(
                    u.reducePropsToState,
                    u.handleClientStateChange,
                    u.mapStateOnServer,
                )(function () {
                    return null;
                }),
                v =
                    ((f = y),
                    (g = m = (function (e) {
                        function t() {
                            return p(this, t), h(this, e.apply(this, arguments));
                        }
                        return (
                            (function (e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError(
                                        "Super expression must either be null or a function, not " +
                                            typeof t,
                                    );
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                t &&
                                        (Object.setPrototypeOf
                                            ? Object.setPrototypeOf(e, t)
                                            : (e.__proto__ = t));
                            })(t, e),
                            (t.prototype.shouldComponentUpdate = function (e) {
                                return !(0, l.default)(this.props, e);
                            }),
                            (t.prototype.mapNestedChildrenToProps = function (e, t) {
                                if (!t) return null;
                                switch (e.type) {
                                    case d.TAG_NAMES.SCRIPT:
                                    case d.TAG_NAMES.NOSCRIPT:
                                        return { innerHTML: t };
                                    case d.TAG_NAMES.STYLE:
                                        return { cssText: t };
                                }
                                throw new Error(
                                    "<" +
                                        e.type +
                                        " /> elements are self-closing and can not contain children. Refer to our API for more information.",
                                );
                            }),
                            (t.prototype.flattenArrayTypeChildren = function (e) {
                                let t,
                                    n = e.child,
                                    o = e.arrayTypeChildren,
                                    a = e.newChildProps,
                                    i = e.nestedChildren;
                                return r(
                                    {},
                                    o,
                                    (((t = {})[n.type] = [].concat(o[n.type] || [], [
                                        r({}, a, this.mapNestedChildrenToProps(n, i)),
                                    ])),
                                    t),
                                );
                            }),
                            (t.prototype.mapObjectTypeChildren = function (e) {
                                let t,
                                    n,
                                    o = e.child,
                                    a = e.newProps,
                                    i = e.newChildProps,
                                    s = e.nestedChildren;
                                switch (o.type) {
                                    case d.TAG_NAMES.TITLE:
                                        return r(
                                            {},
                                            a,
                                            (((t = {})[o.type] = s),
                                            (t.titleAttributes = r({}, i)),
                                            t),
                                        );
                                    case d.TAG_NAMES.BODY:
                                        return r({}, a, { bodyAttributes: r({}, i) });
                                    case d.TAG_NAMES.HTML:
                                        return r({}, a, { htmlAttributes: r({}, i) });
                                }
                                return r({}, a, (((n = {})[o.type] = r({}, i)), n));
                            }),
                            (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                                let n = r({}, t);
                                return (
                                    Object.keys(e).forEach(function (t) {
                                        let o;
                                        n = r({}, n, (((o = {})[t] = e[t]), o));
                                    }),
                                    n
                                );
                            }),
                            (t.prototype.warnOnInvalidChildren = function (e, t) {
                                return !0;
                            }),
                            (t.prototype.mapChildrenToProps = function (e, t) {
                                let n = this,
                                    r = {};
                                return (
                                    a.default.Children.forEach(e, function (e) {
                                        if (e && e.props) {
                                            const o = e.props,
                                                a = o.children,
                                                i = _(o, ["children"]),
                                                s = (0, u.convertReactPropstoHtmlAttributes)(i);
                                            switch ((n.warnOnInvalidChildren(e, a), e.type)) {
                                                case d.TAG_NAMES.LINK:
                                                case d.TAG_NAMES.META:
                                                case d.TAG_NAMES.NOSCRIPT:
                                                case d.TAG_NAMES.SCRIPT:
                                                case d.TAG_NAMES.STYLE:
                                                    r = n.flattenArrayTypeChildren({
                                                        child: e,
                                                        arrayTypeChildren: r,
                                                        newChildProps: s,
                                                        nestedChildren: a,
                                                    });
                                                    break;
                                                default:
                                                    t = n.mapObjectTypeChildren({
                                                        child: e,
                                                        newProps: t,
                                                        newChildProps: s,
                                                        nestedChildren: a,
                                                    });
                                            }
                                        }
                                    }),
                                    (t = this.mapArrayTypeChildrenToProps(r, t))
                                );
                            }),
                            (t.prototype.render = function () {
                                let e = this.props,
                                    t = e.children,
                                    n = _(e, ["children"]),
                                    o = r({}, n);
                                return (
                                    t && (o = this.mapChildrenToProps(t, o)),
                                    a.default.createElement(f, o)
                                );
                            }),
                            o(t, null, [
                                {
                                    key: "canUseDOM",
                                    set: function (e) {
                                        f.canUseDOM = e;
                                    },
                                },
                            ]),
                            t
                        );
                    })(a.default.Component)),
                    (m.propTypes = {
                        base: i.default.object,
                        bodyAttributes: i.default.object,
                        children: i.default.oneOfType([
                            i.default.arrayOf(i.default.node),
                            i.default.node,
                        ]),
                        defaultTitle: i.default.string,
                        defer: i.default.bool,
                        encodeSpecialCharacters: i.default.bool,
                        htmlAttributes: i.default.object,
                        link: i.default.arrayOf(i.default.object),
                        meta: i.default.arrayOf(i.default.object),
                        noscript: i.default.arrayOf(i.default.object),
                        onChangeClientState: i.default.func,
                        script: i.default.arrayOf(i.default.object),
                        style: i.default.arrayOf(i.default.object),
                        title: i.default.string,
                        titleAttributes: i.default.object,
                        titleTemplate: i.default.string,
                    }),
                    (m.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
                    (m.peek = f.peek),
                    (m.rewind = function () {
                        let e = f.rewind();
                        return (
                            e ||
                                (e = (0, u.mapStateOnServer)({
                                    baseTag: [],
                                    bodyAttributes: {},
                                    encodeSpecialCharacters: !0,
                                    htmlAttributes: {},
                                    linkTags: [],
                                    metaTags: [],
                                    noscriptTags: [],
                                    scriptTags: [],
                                    styleTags: [],
                                    title: "",
                                    titleAttributes: {},
                                })),
                            e
                        );
                    }),
                    g);
            (v.renderStatic = v.rewind), (t.Helmet = v), (t.default = v);
        },
        ZgVT: function (e, t) {
            !(function (e) {
                const t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
                (e.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
                        inside: {
                            rule: /^@[\w-]+/,
                            "selector-function-argument": {
                                pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
                                lookbehind: !0,
                                alias: "selector",
                            },
                            keyword: {
                                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                                lookbehind: !0,
                            },
                        },
                    },
                    url: {
                        pattern: RegExp(
                            "\\burl\\((?:" +
                                t.source +
                                "|" +
                                /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                                ")\\)",
                            "i",
                        ),
                        greedy: !0,
                        inside: {
                            function: /^url/i,
                            punctuation: /^\(|\)$/,
                            string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
                        },
                    },
                    selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
                    string: { pattern: t, greedy: !0 },
                    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
                    important: /!important\b/i,
                    function: /[-a-z0-9]+(?=\()/i,
                    punctuation: /[(){};:,]/,
                }),
                (e.languages.css.atrule.inside.rest = e.languages.css);
                const n = e.languages.markup;
                n &&
                    (n.tag.addInlined("style", "css"),
                    e.languages.insertBefore(
                        "inside",
                        "attr-value",
                        {
                            "style-attr": {
                                pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                                inside: {
                                    "attr-name": { pattern: /^\s*style/i, inside: n.tag.inside },
                                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                                    "attr-value": { pattern: /.+/i, inside: e.languages.css },
                                },
                                alias: "language-css",
                            },
                        },
                        n.tag,
                    ));
            })(Prism);
        },
        bPOv: function (e, t) {
            (Prism.languages.markup = {
                comment: /<!--[\s\S]*?-->/,
                prolog: /<\?[\s\S]+?\?>/,
                doctype: {
                    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                    greedy: !0,
                    inside: {
                        "internal-subset": {
                            pattern: /(\[)[\s\S]+(?=\]>$)/,
                            lookbehind: !0,
                            greedy: !0,
                            inside: null,
                        },
                        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
                        punctuation: /^<!|>$|[[\]]/,
                        "doctype-tag": /^DOCTYPE/,
                        name: /[^\s<>'"]+/,
                    },
                },
                cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                    greedy: !0,
                    inside: {
                        tag: {
                            pattern: /^<\/?[^\s>\/]+/,
                            inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
                        },
                        "attr-value": {
                            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                            inside: {
                                punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                            },
                        },
                        punctuation: /\/?>/,
                        "attr-name": {
                            pattern: /[^\s>\/]+/,
                            inside: { namespace: /^[^\s>\/:]+:/ },
                        },
                    },
                },
                entity: [
                    { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
                    /&#x?[\da-f]{1,8};/i,
                ],
            }),
            (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
                    Prism.languages.markup.entity),
            (Prism.languages.markup.doctype.inside["internal-subset"].inside =
                    Prism.languages.markup),
            Prism.hooks.add("wrap", function (e) {
                "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
            }),
            Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
                value: function (e, t) {
                    const n = {};
                    (n["language-" + t] = {
                        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                        lookbehind: !0,
                        inside: Prism.languages[t],
                    }),
                    (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
                    const r = {
                        "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n },
                    };
                    r["language-" + t] = { pattern: /[\s\S]+/, inside: Prism.languages[t] };
                    const o = {};
                    (o[e] = {
                        pattern: RegExp(
                            /(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                                /__/g,
                                function () {
                                    return e;
                                },
                            ),
                            "i",
                        ),
                        lookbehind: !0,
                        greedy: !0,
                        inside: r,
                    }),
                    Prism.languages.insertBefore("markup", "cdata", o);
                },
            }),
            (Prism.languages.html = Prism.languages.markup),
            (Prism.languages.mathml = Prism.languages.markup),
            (Prism.languages.svg = Prism.languages.markup),
            (Prism.languages.xml = Prism.languages.extend("markup", {})),
            (Prism.languages.ssml = Prism.languages.xml),
            (Prism.languages.atom = Prism.languages.xml),
            (Prism.languages.rss = Prism.languages.xml);
        },
        bmMU: function (e, t, n) {
            
            const r = Array.isArray,
                o = Object.keys,
                a = Object.prototype.hasOwnProperty,
                i = "undefined" != typeof Element;
            e.exports = function (e, t) {
                try {
                    return (function e(t, n) {
                        if (t === n) return !0;
                        if (t && n && "object" == typeof t && "object" == typeof n) {
                            let s,
                                l,
                                u,
                                d = r(t),
                                c = r(n);
                            if (d && c) {
                                if ((l = t.length) != n.length) return !1;
                                for (s = l; 0 != s--; ) if (!e(t[s], n[s])) return !1;
                                return !0;
                            }
                            if (d != c) return !1;
                            const _ = t instanceof Date,
                                p = n instanceof Date;
                            if (_ != p) return !1;
                            if (_ && p) return t.getTime() == n.getTime();
                            const h = t instanceof RegExp,
                                f = n instanceof RegExp;
                            if (h != f) return !1;
                            if (h && f) return t.toString() == n.toString();
                            const m = o(t);
                            if ((l = m.length) !== o(n).length) return !1;
                            for (s = l; 0 != s--; ) if (!a.call(n, m[s])) return !1;
                            if (i && t instanceof Element && n instanceof Element) return t === n;
                            for (s = l; 0 != s--; )
                                if (!(("_owner" === (u = m[s]) && t.$$typeof) || e(t[u], n[u])))
                                    return !1;
                            return !0;
                        }
                        return t != t && n != n;
                    })(e, t);
                } catch (n) {
                    if (
                        (n.message && n.message.match(/stack|recursion/i)) ||
                        -2146828260 === n.number
                    )
                        return (
                            console.warn(
                                "Warning: react-fast-compare does not handle circular references.",
                                n.name,
                                n.message,
                            ),
                            !1
                        );
                    throw n;
                }
            };
        },
        "hFT/": function (e, t, n) {
            n("E9XD"), (t.__esModule = !0);
            t.ATTRIBUTE_NAMES = {
                BODY: "bodyAttributes",
                HTML: "htmlAttributes",
                TITLE: "titleAttributes",
            };
            const r = (t.TAG_NAMES = {
                    BASE: "base",
                    BODY: "body",
                    HEAD: "head",
                    HTML: "html",
                    LINK: "link",
                    META: "meta",
                    NOSCRIPT: "noscript",
                    SCRIPT: "script",
                    STYLE: "style",
                    TITLE: "title",
                }),
                o =
                    ((t.VALID_TAG_NAMES = Object.keys(r).map(function (e) {
                        return r[e];
                    })),
                    (t.TAG_PROPERTIES = {
                        CHARSET: "charset",
                        CSS_TEXT: "cssText",
                        HREF: "href",
                        HTTPEQUIV: "http-equiv",
                        INNER_HTML: "innerHTML",
                        ITEM_PROP: "itemprop",
                        NAME: "name",
                        PROPERTY: "property",
                        REL: "rel",
                        SRC: "src",
                    }),
                    (t.REACT_TAG_MAP = {
                        accesskey: "accessKey",
                        charset: "charSet",
                        class: "className",
                        contenteditable: "contentEditable",
                        contextmenu: "contextMenu",
                        "http-equiv": "httpEquiv",
                        itemprop: "itemProp",
                        tabindex: "tabIndex",
                    }));
            (t.HELMET_PROPS = {
                DEFAULT_TITLE: "defaultTitle",
                DEFER: "defer",
                ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
                ON_CHANGE_CLIENT_STATE: "onChangeClientState",
                TITLE_TEMPLATE: "titleTemplate",
            }),
            (t.HTML_TAG_MAP = Object.keys(o).reduce(function (e, t) {
                return (e[o[t]] = t), e;
            }, {})),
            (t.SELF_CLOSING_TAGS = [r.NOSCRIPT, r.SCRIPT, r.STYLE]),
            (t.HELMET_ATTRIBUTE = "data-react-helmet");
        },
        "hL/g": function (e, t, n) {},
        jHpe: function (e, t, n) {
            (function (t) {
                const n = (function (e) {
                    var t = /\blang(?:uage)?-([\w-]+)\b/i,
                        n = 0,
                        r = {
                            manual: e.Prism && e.Prism.manual,
                            disableWorkerMessageHandler:
                                e.Prism && e.Prism.disableWorkerMessageHandler,
                            util: {
                                encode: function e(t) {
                                    return t instanceof o
                                        ? new o(t.type, e(t.content), t.alias)
                                        : Array.isArray(t)
                                            ? t.map(e)
                                            : t
                                                .replace(/&/g, "&amp;")
                                                .replace(/</g, "&lt;")
                                                .replace(/\u00a0/g, " ");
                                },
                                type: function (e) {
                                    return Object.prototype.toString.call(e).slice(8, -1);
                                },
                                objId: function (e) {
                                    return (
                                        e.__id || Object.defineProperty(e, "__id", { value: ++n }),
                                        e.__id
                                    );
                                },
                                clone: function e(t, n) {
                                    let o, a;
                                    switch (((n = n || {}), r.util.type(t))) {
                                        case "Object":
                                            if (((a = r.util.objId(t)), n[a])) return n[a];
                                            for (const i in ((o = {}), (n[a] = o), t))
                                                t.hasOwnProperty(i) && (o[i] = e(t[i], n));
                                            return o;
                                        case "Array":
                                            return (
                                                (a = r.util.objId(t)),
                                                n[a]
                                                    ? n[a]
                                                    : ((o = []),
                                                    (n[a] = o),
                                                    t.forEach(function (t, r) {
                                                        o[r] = e(t, n);
                                                    }),
                                                    o)
                                            );
                                        default:
                                            return t;
                                    }
                                },
                                getLanguage: function (e) {
                                    for (; e && !t.test(e.className); ) e = e.parentElement;
                                    return e
                                        ? (e.className.match(t) || [, "none"])[1].toLowerCase()
                                        : "none";
                                },
                                currentScript: function () {
                                    if ("undefined" == typeof document) return null;
                                    if ("currentScript" in document) return document.currentScript;
                                    try {
                                        throw new Error();
                                    } catch (r) {
                                        const e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack) ||
                                            [])[1];
                                        if (e) {
                                            const t = document.getElementsByTagName("script");
                                            for (const n in t) if (t[n].src == e) return t[n];
                                        }
                                        return null;
                                    }
                                },
                                isActive: function (e, t, n) {
                                    for (let r = "no-" + t; e; ) {
                                        const o = e.classList;
                                        if (o.contains(t)) return !0;
                                        if (o.contains(r)) return !1;
                                        e = e.parentElement;
                                    }
                                    return !!n;
                                },
                            },
                            languages: {
                                extend: function (e, t) {
                                    const n = r.util.clone(r.languages[e]);
                                    for (const o in t) n[o] = t[o];
                                    return n;
                                },
                                insertBefore: function (e, t, n, o) {
                                    const a = (o = o || r.languages)[e],
                                        i = {};
                                    for (const s in a)
                                        if (a.hasOwnProperty(s)) {
                                            if (s == t)
                                                for (const l in n)
                                                    n.hasOwnProperty(l) && (i[l] = n[l]);
                                            n.hasOwnProperty(s) || (i[s] = a[s]);
                                        }
                                    const u = o[e];
                                    return (
                                        (o[e] = i),
                                        r.languages.DFS(r.languages, function (t, n) {
                                            n === u && t != e && (this[t] = i);
                                        }),
                                        i
                                    );
                                },
                                DFS: function e(t, n, o, a) {
                                    a = a || {};
                                    const i = r.util.objId;
                                    for (const s in t)
                                        if (t.hasOwnProperty(s)) {
                                            n.call(t, s, t[s], o || s);
                                            const l = t[s],
                                                u = r.util.type(l);
                                            "Object" !== u || a[i(l)]
                                                ? "Array" !== u ||
                                                  a[i(l)] ||
                                                  ((a[i(l)] = !0), e(l, n, s, a))
                                                : ((a[i(l)] = !0), e(l, n, null, a));
                                        }
                                },
                            },
                            plugins: {},
                            highlightAll: function (e, t) {
                                r.highlightAllUnder(document, e, t);
                            },
                            highlightAllUnder: function (e, t, n) {
                                const o = {
                                    callback: n,
                                    container: e,
                                    selector:
                                        'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                                };
                                r.hooks.run("before-highlightall", o),
                                (o.elements = Array.prototype.slice.apply(
                                    o.container.querySelectorAll(o.selector),
                                )),
                                r.hooks.run("before-all-elements-highlight", o);
                                for (var a, i = 0; (a = o.elements[i++]); )
                                    r.highlightElement(a, !0 === t, o.callback);
                            },
                            highlightElement: function (n, o, a) {
                                const i = r.util.getLanguage(n),
                                    s = r.languages[i];
                                n.className =
                                    n.className.replace(t, "").replace(/\s+/g, " ") +
                                    " language-" +
                                    i;
                                const l = n.parentElement;
                                l &&
                                    "pre" === l.nodeName.toLowerCase() &&
                                    (l.className =
                                        l.className.replace(t, "").replace(/\s+/g, " ") +
                                        " language-" +
                                        i);
                                const u = {
                                    element: n,
                                    language: i,
                                    grammar: s,
                                    code: n.textContent,
                                };
                                function d(e) {
                                    (u.highlightedCode = e),
                                    r.hooks.run("before-insert", u),
                                    (u.element.innerHTML = u.highlightedCode),
                                    r.hooks.run("after-highlight", u),
                                    r.hooks.run("complete", u),
                                    a && a.call(u.element);
                                }
                                if ((r.hooks.run("before-sanity-check", u), !u.code))
                                    return (
                                        r.hooks.run("complete", u), void (a && a.call(u.element))
                                    );
                                if ((r.hooks.run("before-highlight", u), u.grammar))
                                    if (o && e.Worker) {
                                        const c = new Worker(r.filename);
                                        (c.onmessage = function (e) {
                                            d(e.data);
                                        }),
                                        c.postMessage(
                                            JSON.stringify({
                                                language: u.language,
                                                code: u.code,
                                                immediateClose: !0,
                                            }),
                                        );
                                    } else d(r.highlight(u.code, u.grammar, u.language));
                                else d(r.util.encode(u.code));
                            },
                            highlight: function (e, t, n) {
                                const a = { code: e, grammar: t, language: n };
                                return (
                                    r.hooks.run("before-tokenize", a),
                                    (a.tokens = r.tokenize(a.code, a.grammar)),
                                    r.hooks.run("after-tokenize", a),
                                    o.stringify(r.util.encode(a.tokens), a.language)
                                );
                            },
                            tokenize: function (e, t) {
                                const n = t.rest;
                                if (n) {
                                    for (const l in n) t[l] = n[l];
                                    delete t.rest;
                                }
                                const u = new a();
                                return (
                                    i(u, u.head, e),
                                    (function e(t, n, a, l, u, d) {
                                        for (const c in a)
                                            if (a.hasOwnProperty(c) && a[c]) {
                                                let _ = a[c];
                                                _ = Array.isArray(_) ? _ : [_];
                                                for (let p = 0; p < _.length; ++p) {
                                                    if (d && d.cause == c + "," + p) return;
                                                    let h = _[p],
                                                        f = h.inside,
                                                        m = !!h.lookbehind,
                                                        g = !!h.greedy,
                                                        y = 0,
                                                        v = h.alias;
                                                    if (g && !h.pattern.global) {
                                                        const b = h.pattern
                                                            .toString()
                                                            .match(/[imsuy]*$/)[0];
                                                        h.pattern = RegExp(
                                                            h.pattern.source,
                                                            b + "g",
                                                        );
                                                    }
                                                    for (
                                                        let w = h.pattern || h, A = l.next, T = u;
                                                        A !== n.tail && !(d && T >= d.reach);
                                                        T += A.value.length, A = A.next
                                                    ) {
                                                        let x = A.value;
                                                        if (n.length > t.length) return;
                                                        if (!(x instanceof o)) {
                                                            let E = 1;
                                                            if (g && A != n.tail.prev) {
                                                                if (
                                                                    ((w.lastIndex = T),
                                                                    !(O = w.exec(t)))
                                                                )
                                                                    break;
                                                                var S =
                                                                        O.index +
                                                                        (m && O[1]
                                                                            ? O[1].length
                                                                            : 0),
                                                                    k = O.index + O[0].length,
                                                                    P = T;
                                                                for (P += A.value.length; S >= P; )
                                                                    (A = A.next),
                                                                    (P += A.value.length);
                                                                if (
                                                                    ((P -= A.value.length),
                                                                    (T = P),
                                                                    A.value instanceof o)
                                                                )
                                                                    continue;
                                                                for (
                                                                    let M = A;
                                                                    M !== n.tail &&
                                                                    (P < k ||
                                                                        "string" == typeof M.value);
                                                                    M = M.next
                                                                )
                                                                    E++, (P += M.value.length);
                                                                E--,
                                                                (x = t.slice(T, P)),
                                                                (O.index -= T);
                                                            } else {
                                                                w.lastIndex = 0;
                                                                var O = w.exec(x);
                                                            }
                                                            if (O) {
                                                                m && (y = O[1] ? O[1].length : 0);
                                                                S = O.index + y;
                                                                const I = O[0].slice(y),
                                                                    R =
                                                                        ((k = S + I.length),
                                                                        x.slice(0, S)),
                                                                    F = x.slice(k),
                                                                    C = T + x.length;
                                                                d && C > d.reach && (d.reach = C);
                                                                let L = A.prev;
                                                                R &&
                                                                    ((L = i(n, L, R)),
                                                                    (T += R.length)),
                                                                s(n, L, E);
                                                                const j = new o(
                                                                    c,
                                                                    f ? r.tokenize(I, f) : I,
                                                                    v,
                                                                    I,
                                                                );
                                                                (A = i(n, L, j)),
                                                                F && i(n, A, F),
                                                                E > 1 &&
                                                                        e(t, n, a, A.prev, T, {
                                                                            cause: c + "," + p,
                                                                            reach: C,
                                                                        });
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                    })(e, u, t, u.head, 0),
                                    (function (e) {
                                        let t = [],
                                            n = e.head.next;
                                        for (; n !== e.tail; ) t.push(n.value), (n = n.next);
                                        return t;
                                    })(u)
                                );
                            },
                            hooks: {
                                all: {},
                                add: function (e, t) {
                                    const n = r.hooks.all;
                                    (n[e] = n[e] || []), n[e].push(t);
                                },
                                run: function (e, t) {
                                    const n = r.hooks.all[e];
                                    if (n && n.length) for (var o, a = 0; (o = n[a++]); ) o(t);
                                },
                            },
                            Token: o,
                        };
                    function o(e, t, n, r) {
                        (this.type = e),
                        (this.content = t),
                        (this.alias = n),
                        (this.length = 0 | (r || "").length);
                    }
                    function a() {
                        const e = { value: null, prev: null, next: null },
                            t = { value: null, prev: e, next: null };
                        (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
                    }
                    function i(e, t, n) {
                        const r = t.next,
                            o = { value: n, prev: t, next: r };
                        return (t.next = o), (r.prev = o), e.length++, o;
                    }
                    function s(e, t, n) {
                        for (var r = t.next, o = 0; o < n && r !== e.tail; o++) r = r.next;
                        (t.next = r), (r.prev = t), (e.length -= o);
                    }
                    if (
                        ((e.Prism = r),
                        (o.stringify = function e(t, n) {
                            if ("string" == typeof t) return t;
                            if (Array.isArray(t)) {
                                let o = "";
                                return (
                                    t.forEach(function (t) {
                                        o += e(t, n);
                                    }),
                                    o
                                );
                            }
                            const a = {
                                    type: t.type,
                                    content: e(t.content, n),
                                    tag: "span",
                                    classes: ["token", t.type],
                                    attributes: {},
                                    language: n,
                                },
                                i = t.alias;
                            i &&
                                (Array.isArray(i)
                                    ? Array.prototype.push.apply(a.classes, i)
                                    : a.classes.push(i)),
                            r.hooks.run("wrap", a);
                            let s = "";
                            for (const l in a.attributes)
                                s +=
                                    " " +
                                    l +
                                    '="' +
                                    (a.attributes[l] || "").replace(/"/g, "&quot;") +
                                    '"';
                            return (
                                "<" +
                                a.tag +
                                ' class="' +
                                a.classes.join(" ") +
                                '"' +
                                s +
                                ">" +
                                a.content +
                                "</" +
                                a.tag +
                                ">"
                            );
                        }),
                        !e.document)
                    )
                        return e.addEventListener
                            ? (r.disableWorkerMessageHandler ||
                                  e.addEventListener(
                                      "message",
                                      function (t) {
                                          const n = JSON.parse(t.data),
                                              o = n.language,
                                              a = n.code,
                                              i = n.immediateClose;
                                          e.postMessage(r.highlight(a, r.languages[o], o)),
                                          i && e.close();
                                      },
                                      !1,
                                  ),
                            r)
                            : r;
                    const l = r.util.currentScript();
                    function u() {
                        r.manual || r.highlightAll();
                    }
                    if (
                        (l &&
                            ((r.filename = l.src),
                            l.hasAttribute("data-manual") && (r.manual = !0)),
                        !r.manual)
                    ) {
                        const d = document.readyState;
                        "loading" === d || ("interactive" === d && l && l.defer)
                            ? document.addEventListener("DOMContentLoaded", u)
                            : window.requestAnimationFrame
                                ? window.requestAnimationFrame(u)
                                : window.setTimeout(u, 16);
                    }
                    return r;
                })(
                    "undefined" != typeof window
                        ? window
                        : "undefined" != typeof WorkerGlobalScope &&
                          self instanceof WorkerGlobalScope
                            ? self
                            : {},
                );
                e.exports && (e.exports = n), void 0 !== t && (t.Prism = n);
            }.call(this, n("yLpj")));
        },
        pkCn: function (e, t, n) {
            
            const r = n("0Dky");
            e.exports = function (e, t) {
                const n = [][e];
                return (
                    !!n &&
                    r(function () {
                        n.call(
                            null,
                            t ||
                                function () {
                                    throw 1;
                                },
                            1,
                        );
                    })
                );
            };
        },
        v1p5: function (e, t, n) {
            (function (e) {
                n("E9XD"),
                (t.__esModule = !0),
                (t.warn = t.requestAnimationFrame = t.reducePropsToState = t.mapStateOnServer = t.handleClientStateChange = t.convertReactPropstoHtmlAttributes = void 0);
                const r =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                return typeof e;
                            }
                            : function (e) {
                                return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                    ? "symbol"
                                    : typeof e;
                            },
                    o =
                        Object.assign ||
                        function (e) {
                            for (let t = 1; t < arguments.length; t++) {
                                const n = arguments[t];
                                for (const r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        },
                    a = l(n("q1tI")),
                    i = l(n("YVoz")),
                    s = n("hFT/");
                function l(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var u,
                    d = function (e) {
                        const t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return !1 === t
                            ? String(e)
                            : String(e)
                                .replace(/&/g, "&amp;")
                                .replace(/</g, "&lt;")
                                .replace(/>/g, "&gt;")
                                .replace(/"/g, "&quot;")
                                .replace(/'/g, "&#x27;");
                    },
                    c = function (e) {
                        const t = m(e, s.TAG_NAMES.TITLE),
                            n = m(e, s.HELMET_PROPS.TITLE_TEMPLATE);
                        if (n && t)
                            return n.replace(/%s/g, function () {
                                return t;
                            });
                        const r = m(e, s.HELMET_PROPS.DEFAULT_TITLE);
                        return t || r || void 0;
                    },
                    _ = function (e) {
                        return m(e, s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
                    },
                    p = function (e, t) {
                        return t
                            .filter(function (t) {
                                return void 0 !== t[e];
                            })
                            .map(function (t) {
                                return t[e];
                            })
                            .reduce(function (e, t) {
                                return o({}, e, t);
                            }, {});
                    },
                    h = function (e, t) {
                        return t
                            .filter(function (e) {
                                return void 0 !== e[s.TAG_NAMES.BASE];
                            })
                            .map(function (e) {
                                return e[s.TAG_NAMES.BASE];
                            })
                            .reverse()
                            .reduce(function (t, n) {
                                if (!t.length)
                                    for (let r = Object.keys(n), o = 0; o < r.length; o++) {
                                        const a = r[o].toLowerCase();
                                        if (-1 !== e.indexOf(a) && n[a]) return t.concat(n);
                                    }
                                return t;
                            }, []);
                    },
                    f = function (e, t, n) {
                        const o = {};
                        return n
                            .filter(function (t) {
                                return (
                                    !!Array.isArray(t[e]) ||
                                    (void 0 !== t[e] &&
                                        w(
                                            "Helmet: " +
                                                e +
                                                ' should be of type "Array". Instead found type "' +
                                                r(t[e]) +
                                                '"',
                                        ),
                                    !1)
                                );
                            })
                            .map(function (t) {
                                return t[e];
                            })
                            .reverse()
                            .reduce(function (e, n) {
                                const r = {};
                                n.filter(function (e) {
                                    for (
                                        var n = void 0, a = Object.keys(e), i = 0;
                                        i < a.length;
                                        i++
                                    ) {
                                        const l = a[i],
                                            u = l.toLowerCase();
                                        -1 === t.indexOf(u) ||
                                            (n === s.TAG_PROPERTIES.REL &&
                                                "canonical" === e[n].toLowerCase()) ||
                                            (u === s.TAG_PROPERTIES.REL &&
                                                "stylesheet" === e[u].toLowerCase()) ||
                                            (n = u),
                                        -1 === t.indexOf(l) ||
                                                (l !== s.TAG_PROPERTIES.INNER_HTML &&
                                                    l !== s.TAG_PROPERTIES.CSS_TEXT &&
                                                    l !== s.TAG_PROPERTIES.ITEM_PROP) ||
                                                (n = l);
                                    }
                                    if (!n || !e[n]) return !1;
                                    const d = e[n].toLowerCase();
                                    return (
                                        o[n] || (o[n] = {}),
                                        r[n] || (r[n] = {}),
                                        !o[n][d] && ((r[n][d] = !0), !0)
                                    );
                                })
                                    .reverse()
                                    .forEach(function (t) {
                                        return e.push(t);
                                    });
                                for (let a = Object.keys(r), l = 0; l < a.length; l++) {
                                    const u = a[l],
                                        d = (0, i.default)({}, o[u], r[u]);
                                    o[u] = d;
                                }
                                return e;
                            }, [])
                            .reverse();
                    },
                    m = function (e, t) {
                        for (let n = e.length - 1; n >= 0; n--) {
                            const r = e[n];
                            if (r.hasOwnProperty(t)) return r[t];
                        }
                        return null;
                    },
                    g =
                        ((u = Date.now()),
                        function (e) {
                            const t = Date.now();
                            t - u > 16
                                ? ((u = t), e(t))
                                : setTimeout(function () {
                                    g(e);
                                }, 0);
                        }),
                    y = function (e) {
                        return clearTimeout(e);
                    },
                    v =
                        "undefined" != typeof window
                            ? window.requestAnimationFrame ||
                              window.webkitRequestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              g
                            : e.requestAnimationFrame || g,
                    b =
                        "undefined" != typeof window
                            ? window.cancelAnimationFrame ||
                              window.webkitCancelAnimationFrame ||
                              window.mozCancelAnimationFrame ||
                              y
                            : e.cancelAnimationFrame || y,
                    w = function (e) {
                        return console && "function" == typeof console.warn && console.warn(e);
                    },
                    A = null,
                    T = function (e, t) {
                        const n = e.baseTag,
                            r = e.bodyAttributes,
                            o = e.htmlAttributes,
                            a = e.linkTags,
                            i = e.metaTags,
                            l = e.noscriptTags,
                            u = e.onChangeClientState,
                            d = e.scriptTags,
                            c = e.styleTags,
                            _ = e.title,
                            p = e.titleAttributes;
                        S(s.TAG_NAMES.BODY, r), S(s.TAG_NAMES.HTML, o), E(_, p);
                        const h = {
                                baseTag: k(s.TAG_NAMES.BASE, n),
                                linkTags: k(s.TAG_NAMES.LINK, a),
                                metaTags: k(s.TAG_NAMES.META, i),
                                noscriptTags: k(s.TAG_NAMES.NOSCRIPT, l),
                                scriptTags: k(s.TAG_NAMES.SCRIPT, d),
                                styleTags: k(s.TAG_NAMES.STYLE, c),
                            },
                            f = {},
                            m = {};
                        Object.keys(h).forEach(function (e) {
                            const t = h[e],
                                n = t.newTags,
                                r = t.oldTags;
                            n.length && (f[e] = n), r.length && (m[e] = h[e].oldTags);
                        }),
                        t && t(),
                        u(e, f, m);
                    },
                    x = function (e) {
                        return Array.isArray(e) ? e.join("") : e;
                    },
                    E = function (e, t) {
                        void 0 !== e && document.title !== e && (document.title = x(e)),
                        S(s.TAG_NAMES.TITLE, t);
                    },
                    S = function (e, t) {
                        const n = document.getElementsByTagName(e)[0];
                        if (n) {
                            for (
                                var r = n.getAttribute(s.HELMET_ATTRIBUTE),
                                    o = r ? r.split(",") : [],
                                    a = [].concat(o),
                                    i = Object.keys(t),
                                    l = 0;
                                l < i.length;
                                l++
                            ) {
                                const u = i[l],
                                    d = t[u] || "";
                                n.getAttribute(u) !== d && n.setAttribute(u, d),
                                -1 === o.indexOf(u) && o.push(u);
                                const c = a.indexOf(u);
                                -1 !== c && a.splice(c, 1);
                            }
                            for (let _ = a.length - 1; _ >= 0; _--) n.removeAttribute(a[_]);
                            o.length === a.length
                                ? n.removeAttribute(s.HELMET_ATTRIBUTE)
                                : n.getAttribute(s.HELMET_ATTRIBUTE) !== i.join(",") &&
                                  n.setAttribute(s.HELMET_ATTRIBUTE, i.join(","));
                        }
                    },
                    k = function (e, t) {
                        let n = document.head || document.querySelector(s.TAG_NAMES.HEAD),
                            r = n.querySelectorAll(e + "[" + s.HELMET_ATTRIBUTE + "]"),
                            o = Array.prototype.slice.call(r),
                            a = [],
                            i = void 0;
                        return (
                            t &&
                                t.length &&
                                t.forEach(function (t) {
                                    const n = document.createElement(e);
                                    for (const r in t)
                                        if (t.hasOwnProperty(r))
                                            if (r === s.TAG_PROPERTIES.INNER_HTML)
                                                n.innerHTML = t.innerHTML;
                                            else if (r === s.TAG_PROPERTIES.CSS_TEXT)
                                                n.styleSheet
                                                    ? (n.styleSheet.cssText = t.cssText)
                                                    : n.appendChild(
                                                        document.createTextNode(t.cssText),
                                                    );
                                            else {
                                                const l = void 0 === t[r] ? "" : t[r];
                                                n.setAttribute(r, l);
                                            }
                                    n.setAttribute(s.HELMET_ATTRIBUTE, "true"),
                                    o.some(function (e, t) {
                                        return (i = t), n.isEqualNode(e);
                                    })
                                        ? o.splice(i, 1)
                                        : a.push(n);
                                }),
                            o.forEach(function (e) {
                                return e.parentNode.removeChild(e);
                            }),
                            a.forEach(function (e) {
                                return n.appendChild(e);
                            }),
                            { oldTags: o, newTags: a }
                        );
                    },
                    P = function (e) {
                        return Object.keys(e).reduce(function (t, n) {
                            const r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
                            return t ? t + " " + r : r;
                        }, "");
                    },
                    M = function (e) {
                        const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object.keys(e).reduce(function (t, n) {
                            return (t[s.REACT_TAG_MAP[n] || n] = e[n]), t;
                        }, t);
                    },
                    O = function (e, t, n) {
                        switch (e) {
                            case s.TAG_NAMES.TITLE:
                                return {
                                    toComponent: function () {
                                        return (
                                            (e = t.title),
                                            (n = t.titleAttributes),
                                            ((r = { key: e })[s.HELMET_ATTRIBUTE] = !0),
                                            (o = M(n, r)),
                                            [a.default.createElement(s.TAG_NAMES.TITLE, o, e)]
                                        );
                                        let e, n, r, o;
                                    },
                                    toString: function () {
                                        return (function (e, t, n, r) {
                                            const o = P(n),
                                                a = x(t);
                                            return o
                                                ? "<" +
                                                      e +
                                                      " " +
                                                      s.HELMET_ATTRIBUTE +
                                                      '="true" ' +
                                                      o +
                                                      ">" +
                                                      d(a, r) +
                                                      "</" +
                                                      e +
                                                      ">"
                                                : "<" +
                                                      e +
                                                      " " +
                                                      s.HELMET_ATTRIBUTE +
                                                      '="true">' +
                                                      d(a, r) +
                                                      "</" +
                                                      e +
                                                      ">";
                                        })(e, t.title, t.titleAttributes, n);
                                    },
                                };
                            case s.ATTRIBUTE_NAMES.BODY:
                            case s.ATTRIBUTE_NAMES.HTML:
                                return {
                                    toComponent: function () {
                                        return M(t);
                                    },
                                    toString: function () {
                                        return P(t);
                                    },
                                };
                            default:
                                return {
                                    toComponent: function () {
                                        return (function (e, t) {
                                            return t.map(function (t, n) {
                                                let r,
                                                    o =
                                                        (((r = { key: n })[
                                                            s.HELMET_ATTRIBUTE
                                                        ] = !0),
                                                        r);
                                                return (
                                                    Object.keys(t).forEach(function (e) {
                                                        const n = s.REACT_TAG_MAP[e] || e;
                                                        if (
                                                            n === s.TAG_PROPERTIES.INNER_HTML ||
                                                            n === s.TAG_PROPERTIES.CSS_TEXT
                                                        ) {
                                                            const r = t.innerHTML || t.cssText;
                                                            o.dangerouslySetInnerHTML = {
                                                                __html: r,
                                                            };
                                                        } else o[n] = t[e];
                                                    }),
                                                    a.default.createElement(e, o)
                                                );
                                            });
                                        })(e, t);
                                    },
                                    toString: function () {
                                        return (function (e, t, n) {
                                            return t.reduce(function (t, r) {
                                                const o = Object.keys(r)
                                                        .filter(function (e) {
                                                            return !(
                                                                e === s.TAG_PROPERTIES.INNER_HTML ||
                                                                e === s.TAG_PROPERTIES.CSS_TEXT
                                                            );
                                                        })
                                                        .reduce(function (e, t) {
                                                            const o =
                                                                void 0 === r[t]
                                                                    ? t
                                                                    : t + '="' + d(r[t], n) + '"';
                                                            return e ? e + " " + o : o;
                                                        }, ""),
                                                    a = r.innerHTML || r.cssText || "",
                                                    i = -1 === s.SELF_CLOSING_TAGS.indexOf(e);
                                                return (
                                                    t +
                                                    "<" +
                                                    e +
                                                    " " +
                                                    s.HELMET_ATTRIBUTE +
                                                    '="true" ' +
                                                    o +
                                                    (i ? "/>" : ">" + a + "</" + e + ">")
                                                );
                                            }, "");
                                        })(e, t, n);
                                    },
                                };
                        }
                    };
                (t.convertReactPropstoHtmlAttributes = function (e) {
                    const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object.keys(e).reduce(function (t, n) {
                        return (t[s.HTML_TAG_MAP[n] || n] = e[n]), t;
                    }, t);
                }),
                (t.handleClientStateChange = function (e) {
                    A && b(A),
                    e.defer
                        ? (A = v(function () {
                            T(e, function () {
                                A = null;
                            });
                        }))
                        : (T(e), (A = null));
                }),
                (t.mapStateOnServer = function (e) {
                    const t = e.baseTag,
                        n = e.bodyAttributes,
                        r = e.encode,
                        o = e.htmlAttributes,
                        a = e.linkTags,
                        i = e.metaTags,
                        l = e.noscriptTags,
                        u = e.scriptTags,
                        d = e.styleTags,
                        c = e.title,
                        _ = void 0 === c ? "" : c,
                        p = e.titleAttributes;
                    return {
                        base: O(s.TAG_NAMES.BASE, t, r),
                        bodyAttributes: O(s.ATTRIBUTE_NAMES.BODY, n, r),
                        htmlAttributes: O(s.ATTRIBUTE_NAMES.HTML, o, r),
                        link: O(s.TAG_NAMES.LINK, a, r),
                        meta: O(s.TAG_NAMES.META, i, r),
                        noscript: O(s.TAG_NAMES.NOSCRIPT, l, r),
                        script: O(s.TAG_NAMES.SCRIPT, u, r),
                        style: O(s.TAG_NAMES.STYLE, d, r),
                        title: O(s.TAG_NAMES.TITLE, { title: _, titleAttributes: p }, r),
                    };
                }),
                (t.reducePropsToState = function (e) {
                    return {
                        baseTag: h([s.TAG_PROPERTIES.HREF], e),
                        bodyAttributes: p(s.ATTRIBUTE_NAMES.BODY, e),
                        defer: m(e, s.HELMET_PROPS.DEFER),
                        encode: m(e, s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
                        htmlAttributes: p(s.ATTRIBUTE_NAMES.HTML, e),
                        linkTags: f(
                            s.TAG_NAMES.LINK,
                            [s.TAG_PROPERTIES.REL, s.TAG_PROPERTIES.HREF],
                            e,
                        ),
                        metaTags: f(
                            s.TAG_NAMES.META,
                            [
                                s.TAG_PROPERTIES.NAME,
                                s.TAG_PROPERTIES.CHARSET,
                                s.TAG_PROPERTIES.HTTPEQUIV,
                                s.TAG_PROPERTIES.PROPERTY,
                                s.TAG_PROPERTIES.ITEM_PROP,
                            ],
                            e,
                        ),
                        noscriptTags: f(s.TAG_NAMES.NOSCRIPT, [s.TAG_PROPERTIES.INNER_HTML], e),
                        onChangeClientState: _(e),
                        scriptTags: f(
                            s.TAG_NAMES.SCRIPT,
                            [s.TAG_PROPERTIES.SRC, s.TAG_PROPERTIES.INNER_HTML],
                            e,
                        ),
                        styleTags: f(s.TAG_NAMES.STYLE, [s.TAG_PROPERTIES.CSS_TEXT], e),
                        title: c(e),
                        titleAttributes: p(s.ATTRIBUTE_NAMES.TITLE, e),
                    };
                }),
                (t.requestAnimationFrame = v),
                (t.warn = w);
            }.call(this, n("yLpj")));
        },
        vrFN: function (e, t, n) {
            
            const r = n("q1tI"),
                o = n.n(r),
                a = n("TJpk"),
                i = n.n(a),
                s = n("Wbzz");
            function l(e) {
                const t = e.description,
                    n = e.lang,
                    r = e.meta,
                    a = e.title,
                    l = Object(s.c)("63159454").site,
                    u = t || l.siteMetadata.description;
                return o.a.createElement(i.a, {
                    htmlAttributes: { lang: n },
                    title: a,
                    titleTemplate: "%s | " + l.siteMetadata.title,
                    meta: [
                        { name: "description", content: u },
                        { property: "og:title", content: a },
                        { property: "og:description", content: u },
                        { property: "og:type", content: "website" },
                        { name: "twitter:card", content: "summary" },
                        { name: "twitter:creator", content: l.siteMetadata.author },
                        { name: "twitter:title", content: a },
                        { name: "twitter:description", content: u },
                    ].concat(r),
                });
            }
            (l.defaultProps = { lang: "en", meta: [], description: "" }), (t.a = l);
        },
        y1X9: function (e, t) {
            Prism.languages.clike = {
                comment: [
                    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
                    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
                ],
                string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
                "class-name": {
                    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
                    lookbehind: !0,
                    inside: { punctuation: /[.\\]/ },
                },
                keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                boolean: /\b(?:true|false)\b/,
                function: /\w+(?=\()/,
                number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                punctuation: /[{}[\];(),.:]/,
            };
        },
        yLpj: function (e, t) {
            let n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function("return this")();
            } catch (r) {
                "object" == typeof window && (n = window);
            }
            e.exports = n;
        },
    },
]);
//# sourceMappingURL=commons-ec534e125cfd5ed26362.js.map
