(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        "7kCs": function (e, n, t) {},
        PhLX: function (e, n, t) {
            
            t.r(n);
            t("sMBO");
            const a = t("q1tI"),
                l = t.n(a),
                i = t("Bl7J"),
                c = t("vrFN"),
                o = t("jHpe"),
                s = t.n(o),
                r =
                    (t("y1X9"),
                    t("QWvX"),
                    t("ZgVT"),
                    t("bPOv"),
                    t("85O/"),
                    t("CjHp"),
                    t("hL/g"),
                    t("1PrZ")),
                m =
                    (t("7kCs"),
                    'import React, { useEffect, useState } from "react"\nimport Player from "react-howler-player";\n\n\nconst Component = () => {\n  const [filepath, setFilepath] = useState(\'\')\n  const [name, setName] = useState(\'\')\n\n  const onChange = (event) => {\n    if (!event.target.files[0]) {\n      return\n    }\n    let filepath = URL.createObjectURL(event.target.files[0]);\n    const {\n      type,\n      name\n    } = event.target.files[0];\n    setFilepath(filepath)\n    setName(name)\n  }\n  const removeAudio = (e) => {\n    e.preventDefault();\n    setFilepath(\'\')\n    setName(\'\')\n  }\n  return (\n    <div>\n      <div className="form-element">\n        <input type="file" \n            className="file-input" \n            id="file-input" \n            name="audio_file" \n            accept="audio/*" \n            onChange={(e) => onChange(e)}\n            id="audio-file"\n            hidden\n        />\n        <label htmlFor="audio-file">\n            <div className="form-label">\n                {name || \'Select an audio file\'} \n            </div>\n\n            {filepath ? \n                <div className="icon-close" onClick={(e)=>removeAudio(e)}>\n                    <i className="material-icons">\n                        close\n                    </i>\n                </div>\n                :null\n            }\n        </label>\n      </div>\n      {filepath ? \n          <Player\n              src={[filepath]}\n              format={[\'wav\', \'mp3\']}\n          /> : null\n      }\n    </div>\n  )\n}');
            n.default = function () {
                let e;
                Object(a.useEffect)(function () {
                    s.a.highlightAll(), t(!0);
                });
                var n = Object(a.useState)(!1),
                    t = (n[0], n[1]),
                    o = Object(a.useState)(""),
                    u = o[0],
                    f = o[1],
                    d = Object(a.useState)(""),
                    p = d[0],
                    v = d[1],
                    h = Object(a.useState)(!1),
                    b = h[0],
                    N = h[1];
                return l.a.createElement(
                    i.a,
                    null,
                    l.a.createElement(c.a, { title: "Local audio" }),
                    l.a.createElement("h2", null, "Local audio file"),
                    l.a.createElement(
                        "div",
                        { className: "form-element" },
                        l.a.createElement(
                            "input",
                            (((e = {
                                type: "file",
                                className: "file-input",
                                id: "file-input",
                                name: "audio_file",
                                accept: "audio/*",
                                onChange: function (e) {
                                    return (function (e) {
                                        if (e.target.files[0]) {
                                            const n = URL.createObjectURL(e.target.files[0]),
                                                t = e.target.files[0],
                                                a = (t.type, t.name);
                                            f(n), v(a);
                                        }
                                    })(e);
                                },
                            }).id = "audio-file"),
                            (e.hidden = !0),
                            e),
                        ),
                        l.a.createElement(
                            "label",
                            { htmlFor: "audio-file" },
                            l.a.createElement(
                                "div",
                                { className: "form-label" },
                                p || "Select an audio file",
                            ),
                            u
                                ? l.a.createElement(
                                    "div",
                                    {
                                        className: "icon-close",
                                        onClick: function (e) {
                                            return (function (e) {
                                                e.preventDefault(), f(""), v("");
                                            })(e);
                                        },
                                    },
                                    l.a.createElement(
                                        "i",
                                        { className: "material-icons" },
                                        "close",
                                    ),
                                )
                                : null,
                        ),
                    ),
                    u ? l.a.createElement(r.a, { src: [u], format: ["wav", "mp3"] }) : null,
                    l.a.createElement(
                        "button",
                        {
                            onClick: function () {
                                return N(!b);
                            },
                            className: "button-code",
                        },
                        b ? "Hide" : "Show",
                        " Source code",
                    ),
                    l.a.createElement(
                        "div",
                        { className: ["expandable-section", b ? "expand" : "close"].join(" ") },
                        l.a.createElement(
                            "pre",
                            { className: "line-numbers" },
                            l.a.createElement("code", { className: "language-jsx" }, m),
                        ),
                    ),
                );
            };
        },
    },
]);
//# sourceMappingURL=component---src-pages-local-file-js-5b1ba61aa1d9036a546b.js.map
