__ez.bit = (function() {
    var pixels = [],
        pxURL = "/detroitchicago/greenoaks.gif";

    function AddAndFirePixel(pvId, pixelData) {
        AddPixel(pvId, pixelData);
        Fire();
    }

    function AddPixel(pvId, pixelData) {
        if (__ez.dot.isDefined(pvId) && __ez.dot.isValid(pixelData)) {
            pixels.push({
                type: "pageview",
                pageview_id: pvId,
                domain_id: __ez.dot.getDID(),
                t_epoch: __ez.dot.getEpoch(0),
                data: __ez.dot.dataToStr(pixelData)
            })
        }
    }

    function Fire() {
        if (typeof document.visibilityState !== 'undefined' && document.visibilityState === "prerender") return;
        if (__ez.dot.isDefined(pixels) && pixels.length > 0) {
            while (pixels.length > 0) {
                var j = 5;
                if (j > pixels.length) {
                    j = pixels.length;
                }
                var pushPixels = pixels.splice(0, j);
                var pixelURL = __ez.dot.getURL(pxURL) + "?orig=" + (__ez.template.isOrig === true ? 1 : 0) + "&ds=" + btoa(JSON.stringify(pushPixels));
                __ez.dot.Fire(pixelURL);
            }
        }
        pixels = []
    }
    return {
        Add: AddPixel,
        AddAndFire: AddAndFirePixel,
        Fire: Fire
    }
})();
window.ezLazySizesConfig = window.ezLazySizesConfig || {};
window.ezLazySizesConfig.lazyClass = 'ezlazyload';
window.ezLazySizesConfig.loadingClass = 'ezlazyloading';
window.ezLazySizesConfig.loadedClass = 'ezlazyloaded';
window.ezLazySizesConfig.srcAttr = 'data-ezsrc';
window.ezLazySizesConfig.srcsetAttr = 'data-ezsrcset';
window.ezLazySizesConfig.sizesAttr = 'sizes';
window.ezLazySizesConfig.isWebP = false;
! function(a, b) {
    var c = b(a, a.document);
    a.ezLazySizes = c, "object" == typeof module && module.exports && (module.exports = c)
}(window, function(a, b) {
    "use strict";
    if (b.getElementsByClassName) {
        var c, d, e = b.documentElement,
            f = a.Date,
            g = a.HTMLPictureElement,
            h = "addEventListener",
            i = "getAttribute",
            j = a[h],
            k = a.setTimeout,
            l = a.requestAnimationFrame || k,
            m = a.requestIdleCallback,
            n = /^picture$/i,
            o = ["load", "error", "lazyincluded", "_lazyloaded"],
            p = {},
            q = Array.prototype.forEach,
            r = function(a, b) {
                return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b]
            },
            s = function(a, b) {
                r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b)
            },
            t = function(a, b) {
                var c;
                (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "))
            },
            u = function(a, b, c) {
                var d = c ? h : "removeEventListener";
                c && u(a, b), o.forEach(function(c) {
                    a[d](c, b)
                })
            },
            v = function(a, d, e, f, g) {
                var h = b.createEvent("Event");
                return e || (e = {}), e.instance = c, h.initEvent(d, !f, !g), h.detail = e, a.dispatchEvent(h), h
            },
            w = function(b, c) {
                var e;
                !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), e({
                    reevaluate: !0,
                    elements: [b]
                })) : c && c.src && (b.src = c.src)
            },
            x = function(a, b) {
                return (getComputedStyle(a, null) || {})[b]
            },
            y = function(a, b, c) {
                for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;) c = b.offsetWidth, b = b.parentNode;
                return c
            },
            z = function() {
                var a, c, d = [],
                    e = [],
                    f = d,
                    g = function() {
                        var b = f;
                        for (f = d.length ? e : d, a = !0, c = !1; b.length;) b.shift()();
                        a = !1
                    },
                    h = function(d, e) {
                        a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g)))
                    };
                return h._lsFlush = g, h
            }(),
            A = function(a, b) {
                return b ? function() {
                    z(a)
                } : function() {
                    var b = this,
                        c = arguments;
                    z(function() {
                        a.apply(b, c)
                    })
                }
            },
            B = function(a) {
                var b, c = 0,
                    e = d.throttleDelay,
                    g = d.ricTimeout,
                    h = function() {
                        b = !1, c = f.now(), a()
                    },
                    i = m && g > 49 ? function() {
                        m(h, {
                            timeout: g
                        }), g !== d.ricTimeout && (g = d.ricTimeout)
                    } : A(function() {
                        k(h)
                    }, !0);
                return function(a) {
                    var d;
                    (a = a === !0) && (g = 33), b || (b = !0, d = e - (f.now() - c), 0 > d && (d = 0), a || 9 > d ? i() : k(i, d))
                }
            },
            C = function(a) {
                var b, c, d = 99,
                    e = function() {
                        b = null, a()
                    },
                    g = function() {
                        var a = f.now() - c;
                        d > a ? k(g, d - a) : (m || e)(e)
                    };
                return function() {
                    c = f.now(), b || (b = k(g, d))
                }
            };
        ! function() {
            var b, c = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125
            };
            d = a.ezLazySizesConfig || a.lazysizesConfig || {};
            for (b in c) b in d || (d[b] = c[b]);
            a.ezLazySizesConfig = d, k(function() {
                d.init && F()
            })
        }();
        var D = function() {
                var g, l, m, o, p, y, D, F, G, H, I, J, K, L, M = /^img$/i,
                    N = /^iframe$/i,
                    O = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent),
                    P = 0,
                    Q = 0,
                    R = 0,
                    S = -1,
                    T = function(a) {
                        R--, a && a.target && u(a.target, T), (!a || 0 > R || !a.target) && (R = 0)
                    },
                    U = function(a, c) {
                        var d, f = a,
                            g = "hidden" == x(b.body, "visibility") || "hidden" != x(a.parentNode, "visibility") && "hidden" != x(a, "visibility");
                        for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;) g = (x(f, "opacity") || 1) > 0, g && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1);
                        return g
                    },
                    V = function() {
                        var a, f, h, j, k, m, n, p, q, r = c.elements;
                        if ((o = d.loadMode) && 8 > R && (a = r.length)) {
                            f = 0, S++, null == K && ("expand" in d || (d.expand = e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370), J = d.expand, K = J * d.expFactor), K > Q && 1 > R && S > 2 && o > 2 && !b.hidden ? (Q = K, S = 0) : Q = o > 1 && S > 1 && 6 > R ? J : P;
                            for (; a > f; f++)
                                if (r[f] && !r[f]._lazyRace)
                                    if (O)
                                        if ((p = r[f][i]("data-expand")) && (m = 1 * p) || (m = Q), q !== m && (y = innerWidth + m * L, D = innerHeight + m, n = -1 * m, q = m), h = r[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * L && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || "hidden" != x(r[f], "visibility")) && (l && 3 > R && !p && (3 > o || 4 > S) || U(r[f], m))) {
                                            if (ba(r[f]), k = !0, R > 9) break
                                        } else !k && l && !j && 4 > R && 4 > S && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != r[f][i](d.sizesAttr))) && (j = g[0] || r[f]);
                            else ba(r[f]);
                            j && !k && ba(j)
                        }
                    },
                    W = B(V),
                    X = function(a) {
                        s(a.target, d.loadedClass), t(a.target, d.loadingClass), u(a.target, Z), v(a.target, "lazyloaded")
                    },
                    Y = A(X),
                    Z = function(a) {
                        Y({
                            target: a.target
                        })
                    },
                    $ = function(a, b) {
                        try {
                            a.contentWindow.location.replace(b)
                        } catch (c) {
                            a.src = b
                        }
                    },
                    _ = function(a) {
                        var b, c = a[i](d.srcsetAttr);
                        (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c)
                    },
                    aa = A(function(a, b, c, e, f) {
                        var g, h, j, l, o, p;
                        (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = {
                            target: a
                        }, p && (u(a, T, !0), clearTimeout(m), m = k(T, 2500), s(a, d.loadingClass), u(a, Z, !0)), l && q.call(j.getElementsByTagName("source"), _), h ? a.setAttribute("srcset", h) : g && !l && (N.test(a.nodeName) ? $(a, g) : a.src = g), f && (h || l) && w(a, {
                            src: g
                        })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function() {
                            (!p || a.complete && a.naturalWidth > 1) && (p ? T(o) : R--, X(o))
                        }, !0)
                    }),
                    ba = function(a) {
                        var b, c = M.test(a.nodeName),
                            e = c && (a[i](d.sizesAttr) || a[i]("sizes")),
                            f = "auto" == e;
                        (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, R++, aa(a, b, f, e, c))
                    },
                    ca = function() {
                        if (!l) {
                            if (f.now() - p < 999) return void k(ca, 999);
                            var a = C(function() {
                                d.loadMode = 3, W()
                            });
                            l = !0, d.loadMode = 3, W(), j("scroll", function() {
                                3 == d.loadMode && (d.loadMode = 2), a()
                            }, !0)
                        }
                    };
                return {
                    _: function() {
                        p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), L = d.hFac, j("scroll", W, !0), j("resize", W, !0), a.MutationObserver ? new MutationObserver(W).observe(e, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (e[h]("DOMNodeInserted", W, !0), e[h]("DOMAttrModified", W, !0), setInterval(W, 999)), j("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(a) {
                            b[h](a, W, !0)
                        }), /d$|^c/.test(b.readyState) ? ca() : (j("load", ca), b[h]("DOMContentLoaded", W), k(ca, 2e4)), c.elements.length ? (V(), z._lsFlush()) : W()
                    },
                    checkElems: W,
                    unveil: ba
                }
            }(),
            E = function() {
                var a, c = A(function(a, b, c, d) {
                        var e, f, g;
                        if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || ""))
                            for (e = b.getElementsByTagName("source"), f = 0, g = e.length; g > f; f++) e[f].setAttribute("sizes", d);
                        c.detail.dataAttr || w(a, c.detail)
                    }),
                    e = function(a, b, d) {
                        var e, f = a.parentNode;
                        f && (d = y(a, f, d), e = v(a, "lazybeforesizes", {
                            width: d,
                            dataAttr: !!b
                        }), e.defaultPrevented || (d = e.detail.width, d && d !== a._lazysizesWidth && c(a, f, e, d)))
                    },
                    f = function() {
                        var b, c = a.length;
                        if (c)
                            for (b = 0; c > b; b++) e(a[b])
                    },
                    g = C(f);
                return {
                    _: function() {
                        a = b.getElementsByClassName(d.autosizesClass), j("resize", g)
                    },
                    checkElems: g,
                    updateElem: e
                }
            }(),
            F = function() {
                F.i || (F.i = !0, E._(), D._())
            };
        return c = {
            cfg: d,
            autoSizer: E,
            loader: D,
            init: F,
            uP: w,
            aC: s,
            rC: t,
            hC: r,
            fire: v,
            gW: y,
            rAF: z
        }
    }
});
! function(e, t) {
    var r = function() {
        t(e.ezLazySizes), e.removeEventListener("lazyunveilread", r, !0)
    };
    t = t.bind(null, e, e.document), "object" == typeof module && module.exports ? t(require("lazysizes")) : e.ezLazySizes ? r() : e.addEventListener("lazyunveilread", r, !0)
}(window, function(e, t, r) {
    "use strict";

    function a(e, r) {
        if (!o[e]) {
            var a = t.createElement(r ? "link" : "script"),
                n = t.getElementsByTagName("script")[0];
            r ? (a.rel = "stylesheet", a.href = e) : a.src = e, o[e] = !0, o[a.src || a.href] = !0, n.parentNode.insertBefore(a, n)
        }
    }
    var n, i, o = {};
    t.addEventListener && (i = /\(|\)|\s|'/, n = function(e, r) {
        var a = t.createElement("img");
        a.onload = function() {
            a.onload = null, a.onerror = null, a = null, r()
        }, a.onerror = a.onload, a.src = e, a && a.complete && a.onload && a.onload()
    }, addEventListener("lazybeforeunveil", function(e) {
        var t, o, l, d;
        e.detail.instance == r && (e.defaultPrevented || ("none" == e.target.preload && (e.target.preload = "auto"), (t = e.target.getAttribute("data-link")) && a(t, !0), (t = e.target.getAttribute("data-script")) && a(t), (t = e.target.getAttribute("data-require")) && (r.cfg.requireJs ? r.cfg.requireJs([t]) : a(t)), (l = e.target.getAttribute("data-ezbg")) && (e.detail.firesLoad = !0, o = function() {
            l = e.target.getAttribute("data-ezbg"), e.target.style.setProperty("background-image", "url(" + (i.test(l) ? JSON.stringify(l) : l) + ")", e.target.style.getPropertyPriority("background-image")), e.detail.firesLoad = !1, r.fire(e.target, "_lazyloaded", {}, !0, !0)
        }, n(l, o)), (d = e.target.getAttribute("data-poster")) && (e.detail.firesLoad = !0, n(d, o = function() {
            e.target.poster = d, e.detail.firesLoad = !1, r.fire(e.target, "_lazyloaded", {}, !0, !0)
        }))))
    }, !1))
});
(function() {
    function check_webp_feature(feature, callback) {
        var kTestImages = {
            lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
            lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
            alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
            animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        };
        var img = new Image();
        img.onload = function() {
            var result = (img.width > 0) && (img.height > 0);
            callback(feature, result);
        };
        img.onerror = function() {
            callback(feature, false);
        };
        img.src = "data:image/webp;base64," + kTestImages[feature];
    }
    check_webp_feature('lossy', function(feature, supported) {
        window.ezLazySizesConfig.isWebP = supported;
    });
})();
var _ezImgFmt = (function(w) {
    var alterSrcset = false;
    var alterSrc = false;
    var alterBg = false;

    function SrcsetItem(originalValue) {
        this.originalValue = originalValue;
        this.filename = "";
        this.inherentWidth = "";
        this.loaded = false;
        if (attrEmpty(originalValue) === true) {
            return;
        }
        var set = originalValue.trim();
        var parts = set.split(" ");
        if (parts.length === 0) {
            return;
        }
        this.filename = parts[0];
        this.inherentWidth = parts[1];
        this.loaded = true;
    }

    function SrcsetItems(srcset) {
        this.list = [];
        this.srcset = srcset;
        if (attrEmpty(srcset) === true) {
            return;
        }
        var sets = srcset.split(",");
        for (var i = 0; i < sets.length; i++) {
            var item = new SrcsetItem(sets[i]);
            if (item.loaded === true) {
                this.list.push(item);
            }
        }
    }

    function appendQueryParam(u, param) {
        if (u.indexOf("ezimgfmt") !== -1) return u;
        var q = u.indexOf('?') === -1 ? "?" : "&";
        q += param;
        return u + q;
    }

    function attrEmpty(attrVal) {
        return attrVal === null || attrVal.trim() === '';
    }

    function createParam(imgVars) {
        return "ezimgfmt=" + imgVars.join("/");
    }

    function processElement(el) {
        if (typeof el === 'undefined' || el === null) {
            return;
        }
        var ezimgfmt = el.getAttribute("ezimgfmt");
        if (attrEmpty(ezimgfmt) === true) {
            return;
        }
        ezimgfmt = ezimgfmt.replace(/\s+/g, ' ');
        if (attrEmpty(ezimgfmt) === true) {
            return;
        }
        var imgVars = ezimgfmt.split(' ');
        if (imgVars.length === 0) {
            return;
        }
        imgVars = processImgVars(el, imgVars);
        if (imgVars.length === 0) {
            return;
        }
        processSrc(el, imgVars);
        processSrcset(el, imgVars);
        processBg(el, imgVars);
    }

    function processImgVars(el, imgVars) {
        var idxSrc = imgVars.indexOf("src");
        if (idxSrc !== -1) {
            alterSrc = true;
            imgVars.splice(idxSrc, 1);
        }
        var idxSrcset = imgVars.indexOf("srcset");
        if (idxSrcset !== -1) {
            alterSrcset = true;
            imgVars.splice(idxSrcset, 1);
        }
        var idxBg = imgVars.indexOf("bg");
        if (idxBg !== -1) {
            alterBg = true;
            imgVars.splice(idxBg, 1);
        }
        var idxNg = imgVars.indexOf('ng');
        if (idxNg !== -1) {
            if (w.ezLazySizesConfig.isWebP === true) {
                imgVars[idxNg] = imgVars[idxNg] + ":webp";
            } else {
                imgVars.splice(idxNg, 1);
                imgVars.push('notWebP');
            }
        }
        var idxRs = imgVars.indexOf('rs');
        if (idxRs !== -1) {
            var size = el.clientWidth + "x" + el.clientHeight;
            imgVars[idxRs] = imgVars[idxRs] + ":" + size;
        }
        return imgVars;
    }

    function processBg(el, imageVars) {
        if (alterBg === false) {
            return;
        }
        var dataEzBg = el.getAttribute("data-ezbg");
        if (attrEmpty(dataEzBg) === true) {
            return;
        }
        var bgImgVars = removeResizeVars(imageVars);
        var newURL = appendQueryParam(dataEzBg, createParam(bgImgVars));
        el.setAttribute("data-ezbg", newURL);
    }

    function processSrc(el, imageVars) {
        if (alterSrc === false) {
            return;
        }
        var dataEzSrc = el.getAttribute("data-ezsrc");
        if (attrEmpty(dataEzSrc) === true) {
            return;
        }
        var newURL = appendQueryParam(dataEzSrc, createParam(imageVars));
        el.setAttribute("data-ezsrc", newURL);
    }

    function processSrcset(el, imgVars) {
        if (alterSrcset === false) {
            return;
        }
        var dataEzSrcset = el.getAttribute("data-ezsrcset");
        if (attrEmpty(dataEzSrcset) === true) {
            return;
        }
        var ssImgVars = removeResizeVars(imgVars);
        var srcsetItems = new SrcsetItems(dataEzSrcset);
        if (srcsetItems.list === 0) {
            return;
        }
        var param = createParam(ssImgVars);
        for (var i = 0; i < srcsetItems.list.length; i++) {
            var item = srcsetItems.list[i];
            var orig = item.originalValue.replace(item.filename, appendQueryParam(item.filename, param));
            dataEzSrcset = dataEzSrcset.replace(item.originalValue, orig);
        }
        el.setAttribute("data-ezsrcset", dataEzSrcset);
    }

    function removeResizeVars(imageVars) {
        var vars = [];
        for (var i = 0; i < imageVars.length; i++) {
            var v = imageVars[i];
            if (v.lastIndexOf("rs", 0) !== 0) vars.push(v);
        }
        return vars;
    }
    return {
        process: processElement
    };
})(window);
document.addEventListener("lazybeforeunveil", function(t) {
    var id = Math.random();
    t.target.setAttribute("ezoid", id);
    if (typeof ezorqs != 'undefined') {
        ezorqs(t, id);
    }
    _ezImgFmt.process(t.target);
});
document.addEventListener("lazyloaded", function(t) {
    var id = t.target.getAttribute("ezoid");
    if ((id == null || id.length < 1) && typeof ezorqe != 'undefined') {
        ezorqe(t, Math.random(), true)
    } else if (typeof ezorqe != 'undefined') {
        ezorqe(t, id)
    }
});
!(function(win) {
    'use strict';
    var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function(cb) {
        return setTimeout(cb, 16);
    };
    var reg = new RegExp('[?&]ezfd=([^&#]*)', 'i');
    var str = reg.exec(window.location.href);
    var res = str ? str[1] : null;

    function FastDOM() {
        var self = this;
        self.reads = [];
        self.writes = [];
        self.raf = raf.bind(win);
        log('initialized', self);
    }
    FastDOM.prototype = {
        constructor: FastDOM,
        runTasks: function(tasks) {
            log('run tasks');
            var task;
            while (task = tasks.shift()) task();
        },
        measure: function(fn, ctx) {
            log('measure');
            var task = !ctx ? fn : fn.bind(ctx);
            this.reads.push(task);
            scheduleFlush(this);
            return task;
        },
        mutate: function(fn, ctx) {
            log('mutate');
            var task = !ctx ? fn : fn.bind(ctx);
            this.writes.push(task);
            scheduleFlush(this);
            return task;
        },
        clear: function(task) {
            log('clear', task);
            return remove(this.reads, task) || remove(this.writes, task);
        },
        extend: function(props) {
            log('extend', props);
            if (typeof props != 'object') throw new Error('expected object');
            var child = Object.create(this);
            mixin(child, props);
            child.fastdom = this;
            if (child.initialize) child.initialize();
            return child;
        },
        catch: null
    };

    function scheduleFlush(fastdom) {
        if (!fastdom.scheduled) {
            fastdom.scheduled = true;
            fastdom.raf(flush.bind(null, fastdom));
            log('flush scheduled');
        }
    }

    function flush(fastdom) {
        log('flush');
        var writes = fastdom.writes;
        var reads = fastdom.reads;
        var error;
        try {
            log('flushing reads', reads.length);
            fastdom.runTasks(reads);
            log('flushing writes', writes.length);
            fastdom.runTasks(writes);
        } catch (e) {
            error = e;
        }
        fastdom.scheduled = false;
        if (reads.length || writes.length) scheduleFlush(fastdom);
        if (error) {
            log('task errored', error.message);
            if (fastdom.catch) fastdom.catch(error);
            else throw error;
        }
    }

    function remove(array, item) {
        var index = array.indexOf(item);
        return !!~index && !!array.splice(index, 1);
    }

    function mixin(target, source) {
        for (var key in source) {
            if (source.hasOwnProperty(key)) target[key] = source[key];
        }
    }

    function log() {
        if (res === "1") console.log.apply(null, arguments);
    }
    var exports = win._ezfd = (win._ezfd || new FastDOM());
    if ((typeof define) == 'function') define(function() {
        return exports;
    });
    else if ((typeof module) == 'object') module.exports = exports;
})(typeof window !== 'undefined' ? window : this);

function ez_attachEvent(element, evt, func) {
    if (element.addEventListener) {
        element.addEventListener(evt, func, false);
    } else {
        element.attachEvent("on" + evt, func);
    }
}

function ez_attachEventWithCapture(element, evt, func, useCapture) {
    if (element.addEventListener) {
        element.addEventListener(evt, func, useCapture);
    } else {
        element.attachEvent("on" + evt, func);
    }
}

function ez_detachEvent(element, evt, func) {
    if (element.removeEventListener) {
        element.removeEventListener(evt, func);
    } else {
        element.detachEvent("on" + evt, func);
    }
}

function ez_getQueryString(field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
}
if (typeof execute_ez_queue === "function") {
    ez_attachEvent(window, 'load', execute_ez_queue);
}
__ez.ck.get = function(cname, did) {
    if (did !== null) cname = cname + "_" + did;
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
};
__ez.ck.setByCat = function(cookie, categoryId) {
    if (location.protocol === 'https:') {
        cookie = cookie + "; Secure; SameSite=Lax;";
    }
    if (cookie.indexOf('path=') === -1) {
        cookie += '; path=/';
    }
    if (typeof cmpIsOn === "undefined") {
        document.cookie = cookie;
        return;
    }
    if (typeof categoryId === "undefined" || categoryId === null) {
        return;
    }
    var cmpCookie = __ez.ck.get("ezCMPCookieConsent", null);
    cmpCookie = cmpCookie.substring(1, cmpCookie.length);
    if (cmpCookie.indexOf(categoryId + "=1") !== -1) {
        document.cookie = cookie;
    } else if (cmpCookie === "") {
        if (typeof cmpCookies !== "undefined") {
            if (typeof cmpCookies[categoryId] === "undefined") {
                cmpCookies[categoryId] = [];
            }
            cmpCookies[categoryId].push(cookie);
        }
    }
};
if (typeof ct !== "undefined" && ct !== null) {
    ct.destroy();
}
var ct = {
    DEBUG: false,
    frameTimeoutId: -1,
    frameLoadCount: 0,
    frameElements: [],
    frameData: [],
    currentFrame: null,
    currentFrameIndex: -1,
    stopLoadFrames: false,
    loadFramesTimeoutMs: 800,
    ilLoadIntervalId: -1,
    ilLoadCount: 0,
    stopIlLoad: false,
    oldBrowser: false,
    eventLoopTimeoutId: -1,
    eventLoopRateMs: 310,
    lastActiveElement: null,
    windowHasFocus: false,
    documentHasFocus: false,
    activeFrameIndex: false,
    activeFrame: null,
    twoClickEventTimeoutId: null,
    clickTimeoutMs: 800,
    windowBlurFunc: null,
    windowFocusFunc: null,
    windowBeforeUnloadFunc: null,
    isInitialized: false,
    selectors: [
        [".ezoic_ad > .ezoic_ad", 2],
        [".ez_sa_ad", 2],
        [".ezo_ad > center > .ezoic-ad > .ezoic-ad", 2],
        [".ezoic-ad > .ezoic-ad", 2],
        [".ezo_link_unit_a", 5],
        [".ezo_link_unit_m", 38],
        [".ezo_link_unit_unknown", 0],
        [".ezoic-ad > .OUTBRAIN > .ob-widget", 41],
        [".ezoic-ad > div[id *= 'taboola-'] > .trc_rbox_container", 37],
        [".ezflad", 46],
        [".ezflad-47", 47]
    ],
    init: function() {
        this.log("Init Func called");
        if (this.isInitialized === true) {
            this.log("Initialized already called before.  Not running again.");
            return;
        }
        this.initVars();
        this.loadFrames();
        var self = this;
        this.ilLoadIntervalId = setInterval(function() {
            self.loadILTrack()
        }, 500);
        this.startEventLoop();
        this.attachWindowEvents();
        this.isInitialized = true;
    },
    destroy: function() {
        this.log("Destroy Func called");
        this.unloadFrames();
        this.unloadIlTrack();
        this.unsetClickEvents();
        this.stopEventLoop();
        this.detachWindowEvents();
        this.isInitialized = false;
    },
    initVars: function() {
        this.log("Initialize Vars");
        this.frameTimeoutId = -1;
        this.frameLoadCount = 0;
        this.frameElements = [];
        this.frameData = [];
        this.currentFrame = null;
        this.currentFrameIndex = -1;
        this.stopLoadFrames = false;
        this.ilLoadIntervalId = -1;
        this.ilLoadCount = 0;
        this.stopIlLoad = false;
        this.oldBrowser = this.isUndefined(document.hasFocus);
        this.eventLoopTimeoutId = -1;
        this.eventLoopRateMs = 310;
        this.lastActiveElement = null;
        this.windowHasFocus = false;
        this.documentHasFocus = false;
        this.activeFrameIndex = false;
        this.activeFrame = null;
        this.twoClickEventTimeoutId = null;
        this.clickTimeoutMs = 800;
        this.windowBlurFunc = null;
        this.windowFocusFunc = null;
        this.windowBeforeUnloadFunc = null;
        this.isInitialized = false;
    },
    loadFrames: function() {
        this.log("Loading Frames");
        this.frameLoadCount++;
        for (var i = 0; i < this.selectors.length; i++) {
            var elems = document.querySelectorAll(this.selectors[i][0]);
            var statSourceId = this.selectors[i][1];
            for (var j = 0; j < elems.length; j++) {
                this.setClickEvents(elems[j], statSourceId);
            }
        }
        if (this.frameLoadCount > 40) {
            this.stopLoadFrames = true;
        }
        var self = this;
        if (this.stopLoadFrames == false) {
            this.frameTimeoutId = setTimeout(function() {
                self.loadFrames();
            }, this.loadFramesTimeoutMs);
        }
    },
    unloadFrames: function() {
        this.log("Unloading frames");
        this.stopLoadFrames = true;
        clearTimeout(this.frameTimeoutId);
    },
    setClickEvents: function(elem, statSourceId) {
        if (this.isUndefined(elem.ezo_flag) === false) {
            return;
        }
        this.log("Set Click Events for elem : " + elem.id);
        this.frameElements.push(elem);
        this.frameData.push({
            statSourceId: statSourceId,
            twoClickRecorded: false,
            navigationsRecorded: 0
        });
        var self = this;
        var index = this.frameElements.length - 1;
        elem.ezo_flag = true;
        elem.mouseOverFunc = function() {
            self.log("Mouse Over Func");
            self.currentFrame = this;
            self.currentFrameIndex = index;
        };
        elem.mouseOutFunc = function() {
            self.log("Mouse Out Func");
            self.currentFrame = null;
            self.currentFrameIndex = -1;
        };
        elem.clickFunc = function() {
            self.log("Click Func");
            self.currentFrame = this;
            self.currentFrameIndex = index;
            self.ezAwesomeClick(false, index);
        };
        ez_attachEvent(elem, "mouseover", elem.mouseOverFunc);
        ez_attachEvent(elem, "mouseout", elem.mouseOutFunc);
        if (statSourceId == 46) {
            ez_attachEventWithCapture(elem, "click", elem.clickFunc, true);
        }
        if (statSourceId === 4) {
            elem.mouseOverFuncIl = function() {
                self.log("Mouse Over Il Func");
                if (self.ilLoadCount > 30) {
                    self.ilLoadCount -= 30;
                }
                clearInterval(self.ilLoadIntervalId);
                self.ilLoadIntervalId = setInterval(function() {
                    self.loadILTrack()
                }, 500);
            };
            ez_attachEvent(elem, "mouseover", elem.mouseOverFuncIl);
        }
        this.log("Finished Set Click Events");
    },
    unsetClickEvents: function() {
        this.log("Unset Click Events");
        while (this.frameElements.length) {
            var elem = this.frameElements.pop();
            if (this.isUndefined(elem) === false) {
                delete elem.ezo_flag;
                ez_detachEvent(elem, "mouseover", elem.mouseOverFunc);
                delete elem.mouseOverFunc;
                ez_detachEvent(elem, "mouseout", elem.mouseOutFunc);
                delete elem.mouseOutFunc;
                if (this.isUndefined(elem.mouseOverFuncIl) === false) {
                    ez_detachEvent(elem, "mouseover", elem.mouseOverFuncIl);
                    delete elem.mouseOverFuncIl;
                }
            }
            this.frameData.pop();
        }
        this.log("Finished unset Click Events");
    },
    loadILTrack: function() {
        this.ilLoadCount++;
        var elems = document.querySelectorAll("span.IL_AD, .IL_BASE");
        for (var i = 0; i < elems.length; i++) {
            var elem = elems[i];
            if (this.isUndefined(elem.ezo_flag) == false) {
                continue;
            }
            if (this.findParentsWithClass(elem, ["IL_AD", "IL_BASE"]) !== false) {
                this.setClickEvents(elem, 4);
            }
        }
        if (this.ilLoadCount > 55) {
            this.log("Il Load Count is over 55.  Stopping.");
            this.stopIlLoad = true;
        }
        if (this.stopIlLoad === true) {
            this.log("Clearing ilLoadInterval");
            clearInterval(this.ilLoadIntervalId);
        }
    },
    unloadIlTrack: function() {
        this.log("Unloading Il Track");
        this.stopIlLoad = true;
        clearInterval(this.ilLoadIntervalId);
    },
    startEventLoop: function() {
        this.log("Starting Event Loop");
        if (this.oldBrowser === true) {
            return;
        }
        var self = this;
        this.eventLoopTimeoutId = setInterval(function() {
            self.doEventLoop()
        }, this.eventLoopRateMs);
    },
    doEventLoop: function() {
        if (this.oldBrowser === true) {
            return;
        }
        var docNowHasFocus = document.hasFocus() && !document.hidden;
        if (this.lastActiveElement !== document.activeElement) {
            if (this.windowHasFocus === false) {
                this.fixedWindowBlur();
            }
            this.lastActiveElement = document.activeElement;
            this.documentHasFocus = true;
        }
        if (this.documentHasFocus === true && docNowHasFocus === false) {
            this.documentBlur();
        }
        this.documentHasFocus = docNowHasFocus;
        var self = this;
    },
    stopEventLoop: function() {
        this.log("Stopping event loop");
        if (this.oldBrowser === true) {
            return;
        }
        clearInterval(this.eventLoopTimeoutId);
    },
    documentBlur: function() {
        this.log("Document Blur");
        if (this.twoClickEventTimeoutId !== null) {
            clearTimeout(this.twoClickEventTimeoutId);
        }
        if (this.activeFrameIndex != -1 && this.activeFrameIndex == this.currentFrameIndex) {
            this.ezAwesomeClick(false, this.activeFrameIndex);
        }
    },
    fixedWindowBlur: function() {
        this.log("Fixed Window Blur");
        this.activeFrameIndex = this.searchFrames(document.activeElement);
        if (this.activeFrameIndex < 0) {
            this.activeFrame = null;
            return;
        }
        this.activeFrame = this.frameElements[this.activeFrameIndex];
        var self = this;
        var frameIndex = this.activeFrameIndex;
        this.twoClickEventTimeoutId = setTimeout(function() {
            self.ezAwesomeClick(true, frameIndex);
        }, this.clickTimeoutMs);
    },
    searchFrames: function(frameToFind) {
        for (var i = 0; i < this.frameElements.length; i++) {
            if (this.frameElements[i] === frameToFind || this.frameElements[i].contains(frameToFind)) {
                return i;
            }
        }
        return -1;
    },
    findParentsWithClass: function(elem, classNameList) {
        var parent = elem.parentNode;
        do {
            var classes = parent.className.split(/\s+/);
            for (var i = 0; i < classes.length; i++) {
                for (var j = 0; j < classNameList.length; j++) {
                    if (classes[i] == classNameList[j]) {
                        return parent;
                    }
                }
            }
        } while ((parent = parent.parentNode) && this.isUndefined(parent.className) == false);
        return false;
    },
    ezAwesomeClick: function(isTwoClick, frameIndex) {
        this.log("EzAwesomeClick isTwoClick : ", isTwoClick, " and frame index : ", frameIndex);
        this.log(this.frameElements);
        var frameElem = this.frameElements[frameIndex];
        var data = this.frameData[frameIndex];
        var statSourceId = 0;
        if (typeof data != 'undefined') {
            statSourceId = data.statSourceId;
        }
        var adUnitName = this.getAdUnitFromElement(frameElem, statSourceId);
        this.log("adUnitName is: ", adUnitName);
        var paramsObj = null;
        if (adUnitName != "") {
            paramsObj = _ezim_d[adUnitName];
        } else {
            paramsObj = {
                position_id: 0,
                sub_position_id: 0,
                full_id: "0",
                width: 0,
                height: 0
            };
        }
        if (statSourceId == 2) {
            var iframes = frameElem.querySelectorAll("iframe");
            if (iframes.length > 0 && iframes[0].id.substring(0, 3) == "ox_") {
                statSourceId = 33;
            } else {
                statSourceId = 5;
            }
        }
        if (this.isUndefined(window._ezaq) === true) {
            this.log("_ezaq not defined");
            return;
        }
        if (isTwoClick === true) {
            data.twoClickRecorded = true;
        } else {
            __ez.ck.setByCat("ezoawesome_" + _ezaq.domain_id + "=" + paramsObj.full_id + ' ' + Date.now() + "; path=/;", 3);
            if (data.navigationsRecorded >= 5) {
                return;
            }
            data.navigationsRecorded += 1;
        }
        if (this.isUndefined(window.ezoTemplate) === true || ezoTemplate === "pub_site_noads" || ezoTemplate === "pub_site_mobile_noads" || ezoTemplate === "pub_site_tablet_noads") {
            this.log("no click ezoTemplate is : ", ezoTemplate);
            return;
        }
        if (isTwoClick === false) {
            this.clickRequest("/utilcave_com/awesome.php", {
                url: _ezaq.url,
                width: paramsObj.width,
                height: paramsObj.height,
                did: _ezaq.domain_id,
                sourceid: statSourceId,
                uid: _ezaq.user_id,
                template: ezoTemplate
            });
        }
        if (paramsObj.full_id === "0" || paramsObj.full_id === 0) {
            this.log("Impression_id is 0");
            return;
        }
        this.clickRequest("/ezoic_awesome/", {
            url: _ezaq.url,
            width: paramsObj.width,
            height: paramsObj.height,
            did: _ezaq.domain_id,
            sourceid: statSourceId,
            uid: _ezaq.user_id,
            ff: _ezaq.form_factor_id,
            tid: _ezaq.template_id,
            apid: paramsObj.position_id,
            sapid: paramsObj.sub_position_id,
            iuid: paramsObj.full_id,
            creative: (this.isUndefined(paramsObj.creative_id) === false ? paramsObj.creative_id : ""),
            template: ezoTemplate,
            country: _ezaq.country,
            sub_ad_positions: _ezaq.sub_page_ad_positions,
            twoclick: (isTwoClick === true ? 1 : 0),
            max_ads: _ezaq.max_ads,
            word_count: _ezaq.word_count,
            user_agent: _ezaq.user_agent
        });
        if (isTwoClick === false) {
            this.loadUUIDScript();
        }
    },
    loadUUIDScript: function() {
        if (typeof ezosuigenerisc != "undefined" || ((typeof window.isAmp != 'undefined') && isAmp === true)) {
            return;
        }
        this.log("Load UUID Script");
        (function() {
            var el = document.createElement("script");
            el.async = true;
            el.type = 'text/javascript';
            el.src = "//g.ezoic.net/ezosuigenerisc.js";
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(el, node);
        })();
    },
    clickRequest: function(url, data) {
        this.log("Click Request with url : ", url, " and data : ", data);
        if ((this.isUndefined(window.ezJsu) === false && ezJsu === true) || (this.isUndefined(window._ez_sa) === false && _ez_sa === true) || (this.isUndefined(window.isAmp) === false && isAmp == true) || (this.isUndefined(window.ezWp) === false && ezWp === true)) {
            url = "//g.ezoic.net" + url;
        } else {
            url = window.location.protocol + "//" + window.location.host + url;
        }
        var request = new XMLHttpRequest();
        var request_type = true;
        if (this.isMobileOperatingSystem() === true) {
            request_type = false;
        }
        request.open('POST', url, request_type);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        var queryData = [];
        for (var param in data) {
            queryData.push(param + "=" + encodeURIComponent(data[param]));
        }
        request.send(queryData.join("&"));
    },
    getAdUnitFromElement: function(elem, statSourceId) {
        if (this.isUndefined(window._ezim_d) === true) {
            this.log("_ezim_d not found");
            return "";
        }
        if (statSourceId == 4) {
            for (key in _ezim_d) {
                if (key.indexOf("inline-1") != -1) {
                    this.log("found inline");
                    return key;
                }
            }
        } else if (this.isUndefined(elem.adunitname) === false) {
            this.log("found ad unit from elem.adunitname field");
            return elem.adunitname;
        } else if (elem.getAttribute('adunitname') != null) {
            this.log("found ad unit from property field: ", elem.getAttribute('adunitname'));
            return elem.getAttribute('adunitname');
        } else {
            var widgetWrapParent = this.findParentsWithClass(elem, ["ezoic-ad"]);
            if (widgetWrapParent !== false) {
                if (this.isUndefined(_ezim_d[widgetWrapParent.getAttribute("data-ez-name")]) === false) {
                    return widgetWrapParent.getAttribute("data-ez-name");
                }
            }
        }
        return "";
    },
    attachWindowEvents: function() {
        this.log("Attaching window events");
        var self = this;
        this.windowBlurFunc = function() {
            self.log("Window Blur Func");
            self.windowHasFocus = false;
            if (self.lastActiveElement !== document.activeElement && self.oldBrowser === false) {
                self.fixedWindowBlur();
                self.lastActiveElement = document.activeElement;
            } else if (self.currentFrame !== null) {
                self.ezAwesomeClick(false, self.currentFrameIndex);
            }
        };
        this.windowFocusFunc = function() {
            self.log("Window Focus Func");
            self.windowHasFocus = true;
            self.activeFrame = null;
            self.activeFrameIndex = -1;
        };
        this.windowBeforeUnloadFunc = function() {
            self.log("Window Before Unload Func");
            if (self.twoClickEventTimeoutId !== null) {
                clearTimeout(self.twoClickEventTimeoutId);
            }
            if (self.isMobileOperatingSystem()) {
                self.fixedWindowBlur();
            }
            if (self.currentFrameIndex != -1 && self.activeFrameIndex == self.currentFrameIndex && self.frameData[self.activeFrameIndex].navigationsRecorded == 0) {
                self.ezAwesomeClick(false, self.activeFrameIndex);
            }
        };
        ez_attachEvent(window, "blur", this.windowBlurFunc);
        ez_attachEvent(window, "focus", this.windowFocusFunc);
        ez_attachEvent(window, "beforeunload", this.windowBeforeUnloadFunc);
        if (this.isIosUserAgent() === true) {
            this.log("Attaching pagehide");
            ez_attachEvent(window, "pagehide", this.windowBeforeUnloadFunc);
        }
    },
    detachWindowEvents: function() {
        this.log("Detaching window events.");
        ez_detachEvent(window, "blur", this.windowBlurFunc);
        ez_detachEvent(window, "focus", this.windowFocusFunc);
        ez_detachEvent(window, "beforeunload", this.windowBeforeUnloadFunc);
        if (this.isIosUserAgent() === true) {
            ez_detachEvent(window, "pagehide", this.windowBeforeUnloadFunc);
        }
    },
    isUndefined: function() {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'undefined' || arguments[i] === null) {
                return true;
            }
        }
        return false;
    },
    log: function() {
        if (this.DEBUG) {
            console.log.apply(console, arguments);
        }
    },
    isMobileOperatingSystem: function() {
        return typeof ezoFormfactor !== "undefined" && (ezoFormfactor == "2" || ezoFormfactor == "3");
    },
    isIosUserAgent: function() {
        return navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPod") != -1;
    }
};
ct.init();
var __ezDotData = function(name, val) {
    if (typeof(name) != 'string' && name.length == 2) {
        val = name[1];
        name = name[0];
    }
    this.name = name;
    this.val = val;
};
__ez.dot.b64 = {
    keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    },
    decode: function(e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+\/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode: function(e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function(e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
};
__ez.dot.dataToStr = function(pixelData) {
    if (typeof pixelData === "undefined") {
        return []
    }
    try {
        for (var i in pixelData) {
            pixelData[i].val = pixelData[i].val + '';
        }
    } catch (e) {}
    return pixelData
};
__ez.dot.getCC = function() {
    var countryCode = "XX";
    if (typeof _ezaq !== "undefined" && _ezaq.hasOwnProperty("country")) {
        countryCode = _ezaq.country;
    }
    return countryCode;
};
__ez.dot.getDID = function() {
    var domainId = "0";
    if (typeof _ezaq !== "undefined" && _ezaq.hasOwnProperty("domain_id")) {
        domainId = _ezaq.domain_id.toString();
    }
    return domainId;
};
__ez.dot.getEpoch = function(tEpoch) {
    if (typeof _ezaq !== "undefined" && _ezaq.hasOwnProperty("t_epoch")) {
        tEpoch = _ezaq.t_epoch;
    }
    return tEpoch
};
__ez.dot.getPageviewId = function() {
    var pageviewId = "";
    if (typeof _ezaq !== "undefined" && _ezaq.hasOwnProperty("page_view_id")) {
        pageviewId = _ezaq.page_view_id;
    }
    return pageviewId;
};
__ez.dot.getURL = function(pxURL) {
    if ((typeof ezJsu !== "undefined" && ezJsu == true) || (typeof _ez_sa !== "undefined" && _ez_sa == true) || (typeof isAmp !== 'undefined' && isAmp === true) || (typeof ezWp !== 'undefined' && ezWp === true)) {
        pxURL = "//g.ezoic.net" + pxURL;
    }
    return pxURL;
};
__ez.dot.isValid = function(pixelData) {
    for (var i = 0; i < pixelData.length; i++) {
        if (pixelData[i] instanceof __ezDotData === false) {
            console.error("Invalid data. ", pixelData[i]);
            return false
        }
    }
    return true
};
__ez.dot.isDefined = function() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'undefined' || arguments[i] === null) {
            console.error("Argument not defined. ", arguments);
            return false
        }
    }
    return true
};
__ez.dot.isAnyDefined = function() {
    var result = false;
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'undefined' && arguments[i] !== null) {
            result = true
        }
    }
    if (result == false) {
        console.error("isAnyDefined Arguments not defined. ", arguments);
    }
    return result
};
__ez.dot.getSlotIID = function(slot) {
    var iid = "0";
    try {
        var map = __ez.dot.getTargetingMap(slot),
            dvid = __ez.dot.getElementId(slot);
        if (dvid.indexOf("div-gpt-ad") === -1) {
            return iid;
        }
        if (typeof map !== "undefined") {
            for (var key in map) {
                if (key.indexOf('iid') !== -1 && typeof map[key][0] !== "undefined") {
                    iid = map[key][0];
                    break;
                }
            }
        }
    } catch (e) {}
    return iid;
};
__ez.dot.getElementId = function(slot) {
    if (typeof(slot.ElementId) != 'undefined') {
        return slot.ElementId;
    } else {
        return slot.getSlotElementId()
    }
};
__ez.dot.getAdUnitPath = function(slot) {
    if (typeof(slot.AdUnitPath) != 'undefined') {
        return slot.AdUnitPath;
    } else {
        return slot.getAdUnitPath()
    }
};
__ez.dot.getSizes = function(slot) {
    if (typeof(slot.Sizes) != 'undefined') {
        return slot.Sizes;
    } else {
        return slot.getSizes();
    }
};
__ez.dot.getTargeting = function(slot, key) {
    if (typeof(slot.Targeting) != 'undefined') {
        return slot.Targeting[key];
    } else {
        return slot.getTargeting(key)[0];
    }
};
__ez.dot.getTargetingMap = function(slot) {
    if (typeof(slot.Targeting) != 'undefined') {
        return slot.Targeting;
    } else {
        return slot.getTargetingMap();
    }
};
__ez.dot.getAdUnit = function(adSlot, isOrig) {
    if (__ez.template.isOrig === true || isOrig) {
        return __ez.dot.getAdUnitPath(adSlot).split("/").pop() + "|~ez~|" + __ez.dot.getElementId(adSlot);
    }
    return __ez.dot.getElementId(adSlot);
};
__ez.dot.Fire = function(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
};
var ezdent = ezdent || {};
ezdent.msgs = [];
ezdent.debug = function() {
    if (!ezDenty.processed) {
        return;
    }
    if (ezdent.msgs.length > 0) {
        for (var ll = 0, imax = ezdent.msgs.length; ll < imax; ll++) {
            console.debug(ezdent.msgs[ll]);
        }
    }
    ezDenty.highlight();
};
ezdent.log = function(l1) {
    ezdent.msgs.push(l1);
};
ezdent.Denty = function() {
    this.headTag = document.getElementsByTagName('head').item(0);
    this.stylesheet = '';
    this.displayQ = ['ins.adsbygoogle', 'iframe[id^="_mN_main_"]', 'ins[id^="aswift_"] > iframe', 'iframe.switch_request_frame'];
    this.nativeQ = ['.OUTBRAIN > .ob-widget', 'div[id*="taboola-"] > .trc_rbox_container', 'div.rc-wc.rc-bp'];
    this.initArrays();
    this.processed = false;
};
ezdent.Denty.prototype.Process = function() {
    this.setSizes();
    this.getDisplay();
    this.getNative();
    this.fire();
    this.processed = true;
    ezdent.log(this);
};
ezdent.Denty.prototype.addA = function(el, type) {
    if (typeof el === "undefined" || el === null) {
        return;
    }
    if (!this.alreadyFound(el, 5) && el.clientWidth > 0 && el.clientHeight > 0) {
        this.as.push(new ezdent.Item(el, type));
    }
};
ezdent.Denty.prototype.alreadyFound = function(el, numElsToCheck) {
    if (typeof el.parentNode !== "undefined") {
        var parent = el.parentNode;
        for (var ll = 0, imax = numElsToCheck; ll < imax; ll++) {
            if (typeof parent !== "undefined" && parent != null && typeof parent.hasAttribute == "function" && parent.hasAttribute("class") && parent.classList.contains('ezfound')) {
                return true;
            }
            parent = parent.parentNode;
            if (typeof parent === "undefined" || parent == null) {
                break;
            }
        }
    }
    var lI = el.querySelector('.ezfound');
    return lI != null;
};
ezdent.Denty.prototype.destroy = function() {
    if (this.stylesheet !== '') this.headTag.removeChild(this.stylesheet);
    this.removeClasses();
    this.initArrays();
};
ezdent.Denty.prototype.fire = function() {
    if (typeof _ezaq === "undefined" || !_ezaq.hasOwnProperty("page_view_id")) {
        return;
    }
    var l1l = _ezaq["page_view_id"],
        p = this.getPD(),
        pxArr = [];
    if (typeof p === "object" && Object.keys(p).length > 0) {
        for (var l11 in p) {
            if (p.hasOwnProperty(l11) === false) continue;
            pxArr.push(new __ezDotData(l11, p[l11]));
        }
        __ez.bit.Add(l1l, pxArr);
        __ez.bit.Fire();
        ezdent.log(p);
    }
};
ezdent.Denty.prototype.getDisplay = function() {
    this.getDisplayDfp();
    if (this.displayQ.length < 1) {
        return;
    }
    for (var ll = 0, imax = this.displayQ.length; ll < imax; ll++) {
        var els = document.querySelectorAll(this.displayQ[ll]);
        if (els.length > 0) {
            for (var l1I = 0, jmax = els.length; l1I < jmax; l1I++) {
                this.addA(els[l1I], 'display');
            }
        }
    }
};
ezdent.Denty.prototype.getDisplayDfp = function() {
    if (typeof googletag === 'undefined' || googletag === null || typeof googletag.pubads !== 'function' || typeof googletag.pubads().getSlots !== 'function') {
        return;
    }
    var slots = googletag.pubads().getSlots();
    for (var ll = 0, imax = slots.length; ll < imax; ll++) {
        var lIl = slots[ll].getSlotElementId(),
            slotEl = document.getElementById(lIl);
        if (typeof slotEl !== 'undefined') {
            this.addA(slotEl, 'display');
        }
    }
};
ezdent.Denty.prototype.getNative = function() {
    if (this.nativeQ.length < 1) {
        return;
    }
    for (var ll = 0, imax = this.nativeQ.length; ll < imax; ll++) {
        var els = document.querySelectorAll(this.nativeQ[ll]);
        if (els.length > 0) {
            for (var l1I = 0, jmax = els.length; l1I < jmax; l1I++) {
                this.addA(els[l1I], 'native');
            }
        }
    }
};
ezdent.Denty.prototype.getPD = function() {
    var p = [];
    p["display_ad_viewport_px"] = 0;
    p["display_ad_viewport_count"] = 0;
    p["native_ad_viewport_px"] = 0;
    p["native_ad_viewport_count"] = 0;
    p["display_ad_doc_px"] = 0;
    p["display_ad_doc_count"] = 0;
    p["native_ad_doc_px"] = 0;
    p["native_ad_doc_count"] = 0;
    p["viewport_size"] = this.viewportSize[0] + "x" + this.viewportSize[1];
    p["viewport_px"] = this.viewportSize[0] * this.viewportSize[1];
    p["doc_px"] = this.documentSize[0] * this.documentSize[1];
    p["doc_height"] = this.documentSize[1];
    if (this.as.length < 1) {
        return p;
    }
    for (var ll = 0, imax = this.as.length; ll < imax; ll++) {
        var a = this.as[ll];
        if (a.onScreen) {
            if (this.isBF(a.el, 3) == false) {
                p[a.type + "_ad_viewport_px"] = p[a.type + "_ad_viewport_px"] + a.getPxInView();
            } else {
                ezdent.log("BF not adding");
            }
            p[a.type + "_ad_viewport_count"]++;
        }
        p[a.type + "_ad_doc_px"] += a.height * a.width;
        p[a.type + "_ad_doc_count"]++;
    }
    return p;
};
ezdent.Denty.prototype.highlight = function() {
    this.stylesheet = document.createElement("style");
    this.stylesheet.innerHTML = ".ezhlght-on{border:5px solid aqua!important;}.ezhlght-off{border:5px solid red!important;}";
    this.headTag.insertBefore(this.stylesheet, this.headTag.firstChild);
    if (this.as.length > 0) {
        for (var ll = 0, imax = this.as.length; ll < imax; ll++) {
            if (this.as[ll].onScreen) {
                this.as[ll].el.classList.add("ezhlght-on");
            } else {
                this.as[ll].el.classList.add("ezhlght-off");
            }
        }
    }
};
ezdent.Denty.prototype.initArrays = function() {
    this.as = [];
    this.viewportSize = [];
    this.windowSize = [];
    this.documentSize = [];
};
ezdent.Denty.prototype.isBF = function(el, numElsToCheck) {
    if (typeof el.hasAttribute == "function" && el.hasAttribute("class") && el.classList.contains("ezoic-floating-bottom")) {
        return true;
    }
    if (typeof el.parentNode !== "undefined") {
        var parent = el.parentNode;
        for (var ll = 0, imax = numElsToCheck; ll < imax; ll++) {
            if (typeof parent !== "undefined" && parent != null && typeof parent.hasAttribute == "function" && parent.hasAttribute("class") && parent.classList.contains("ezoic-floating-bottom")) {
                return true;
            }
            parent = parent.parentNode;
            if (typeof parent === "undefined" || parent == null) {
                break;
            }
        }
    }
    var lI1 = el.querySelector('.ezoic-floating-bottom');
    return lI1 != null;
};
ezdent.Denty.prototype.removeClasses = function() {
    if (this.as.length > 0) {
        for (var ll = 0, imax = this.as.length; ll < imax; ll++) {
            this.as[ll].el.classList.remove("ezhlght-on");
            this.as[ll].el.classList.remove("ezhlght-off");
            this.as[ll].el.classList.remove("ezfound");
        }
    }
};
ezdent.Denty.prototype.setSizes = function() {
    var body = document.body,
        html = document.documentElement;
    var lII = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var vpH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    lII = Math.min(lII, 10000);
    vpH = Math.min(vpH, 10000);
    this.viewportSize = [lII, vpH];
    this.documentSize = [Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth), Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)];
};
ezdent.Item = function(el, type) {
    this.el = el;
    this.type = type;
    this.width = el.clientWidth;
    this.height = el.clientHeight;
    this.coords = this.getCoords();
    this.onScreen = this.ios();
    if (typeof el.classList != 'undefined') {
        el.classList.add("ezfound");
    }
};
ezdent.Item.prototype.getCoords = function() {
    var box = this.el.getBoundingClientRect();
    var body = document.body;
    var docEl = document.documentElement;
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return {
        top: Math.round(top),
        left: Math.round(left)
    };
};
ezdent.Item.prototype.getPxInView = function() {
    var l1ll = this.height;
    if ((this.coords.top + this.height) > window.innerHeight) {
        l1ll = window.innerHeight - this.coords.top;
    }
    var l1l1 = this.width;
    if ((this.coords.left + this.width) > window.innerWidth) {
        l1l1 = window.innerWidth - this.coords.left;
    }
    ezdent.log(this.el);
    ezdent.log('usable ' + l1ll + ' * ' + l1l1);
    ezdent.log(l1l1 * l1ll);
    return l1l1 * l1ll;
};
ezdent.Item.prototype.ios = function() {
    return (this.coords.top <= window.innerHeight && this.coords.left >= 0 && this.coords.left <= window.innerWidth);
};
var ezDenty = new ezdent.Denty();
setTimeout(function() {
    ezDenty.Process();
}, 7500);
if (typeof ezmt !== "undefined" && ezmt !== null) {
    ezmt.destroy();
    delete window.ezmt;
}
var ezmt = {
    DEBUG: false,
    intervalTime: 220,
    zoneDistance: 100,
    maxNumZones: 8,
    isInitialized: false,
    mouseMoveListener: null,
    elems: null,
    zoneTimes: null,
    clientX: 0,
    clientY: 0,
    intervalId: -1,
    init: function() {
        this.log("Init Func called");
        if (this.isInitialized === true) {
            this.log("Initialized already called before.  Not running again.");
            return;
        }
        this.elems = document.querySelectorAll("span[data-ez-name]");
        if (this.elems.length == 0) {
            this.isInitialized = true;
            return;
        }
        this.zoneTimes = {};
        for (var i = 0; i < this.elems.length; i++) {
            var groupId = this.getGroupId(this.elems[i]);
            if (groupId === null) {
                continue;
            }
            this.log("GroupId : ", groupId);
            this.zoneTimes[groupId] = {
                x: [],
                y: [],
                r: [],
            };
            for (var j = 0; j < this.maxNumZones; j++) {
                this.zoneTimes[groupId].total_time = 0;
                this.zoneTimes[groupId].x[j] = 0;
                this.zoneTimes[groupId].y[j] = 0;
                this.zoneTimes[groupId].r[j] = 0;
            }
        }
        this.addEventListeners();
        this.addInterval();
        this.isInitialized = true;
    },
    destroy: function() {
        this.log("Destroy Func called");
        this.removeInterval();
        this.removeEventListeners();
    },
    addEventListeners: function() {
        var self = this;
        this.mouseMoveListener = function(event) {
            self.clientX = event.clientX;
            self.clientY = event.clientY;
        };
        this.touchEndListener = function(event) {
            if (event.changedTouches.length > 0) {
                self.clientX = event.changedTouches[0].clientX;
                self.clientY = event.changedTouches[0].clientY;
            }
        };
        this.windowBeforeUnloadListener = function(event) {
            self.postData();
        };
        document.addEventListener("mousemove", this.mouseMoveListener);
        document.addEventListener("touchend", this.touchEndListener);
        if (this.isIosUserAgent() === true) {
            window.addEventListener("pagehide", this.windowBeforeUnloadListener);
        }
        window.addEventListener("beforeunload", this.windowBeforeUnloadListener);
    },
    removeEventListeners: function() {
        document.removeEventListener("mousemove", this.mouseMoveListener);
        document.removeEventListener("touchend", this.touchEndListener);
        if (this.isIosUserAgent() === true) {
            window.removeEventListener("pagehide", this.windowBeforeUnloadListener);
        }
        window.removeEventListener("beforeunload", this.windowBeforeUnloadListener);
    },
    addInterval: function() {
        this.intervalId = window.setInterval(this.getIntervalFunc(), this.intervalTime);
    },
    removeInterval: function() {
        window.clearInterval(this.intervalId);
    },
    getIntervalFunc: function(self) {
        var self = this;
        return function(e) {
            window._ezfd.measure(function() {
                self.handleMouseMove(e);
            });
        };
    },
    handleMouseMove: function(e) {
        var elems = this.getVisibleElements();
        for (var i = 0; i < elems.length; i++) {
            var distances = this.calculateDistancesFromElem(this.clientX, this.clientY, elems[i]);
            this.updateTimes(distances);
        }
    },
    calculateDistancesFromElem: function(x, y, elem) {
        var distances = {};
        distances.id = this.getGroupId(elem);
        var rect = elem.getBoundingClientRect();
        if (x < rect.left) {
            distances.x = rect.left - x;
        } else if (x > rect.right) {
            distances.x = x - rect.right;
        } else {
            distances.x = 0;
        }
        if (y < rect.top) {
            distances.y = rect.top - y;
        } else if (y > rect.bottom) {
            distances.y = y - rect.bottom;
        } else {
            distances.y = 0;
        }
        distances.r = Math.floor(Math.sqrt(Math.pow(distances.x, 2) + Math.pow(distances.y, 2)));
        return distances;
    },
    getGroupId: function(elem) {
        if (typeof _ezim_d === "undefined" || typeof _ezim_d[elem.getAttribute("data-ez-name")] === "undefined") {
            return null;
        }
        return _ezim_d[elem.getAttribute("data-ez-name")].full_id;
    },
    updateTimes: function(distance) {
        var xZone = Math.floor(distance.x / this.zoneDistance);
        var yZone = Math.floor(distance.y / this.zoneDistance);
        var rZone = Math.floor(distance.r / this.zoneDistance);
        if (typeof this.zoneTimes[distance.id] === "undefined") {
            return;
        }
        this.zoneTimes[distance.id].total_time += this.intervalTime;
        if (xZone < this.maxNumZones) {
            this.zoneTimes[distance.id].x[xZone] += this.intervalTime;
        }
        if (yZone < this.maxNumZones) {
            this.zoneTimes[distance.id].y[yZone] += this.intervalTime;
        }
        if (rZone < this.maxNumZones) {
            this.zoneTimes[distance.id].r[rZone] += this.intervalTime;
        }
    },
    getVisibleElements: function() {
        var visibleElems = [];
        for (var i = 0; i < this.elems.length; i++) {
            if (this.isElementInViewport(this.elems[i]) === true) {
                visibleElems.push(this.elems[i]);
            }
        }
        return visibleElems;
    },
    isElementInViewport: function(elem) {
        if (this.isUndefined(elem) || elem == null) {
            return false;
        }
        try {
            var rect = elem.getBoundingClientRect();
        } catch (e) {
            return false;
        }
        var height = window.innerHeight || document.documentElement.clientHeight;
        var width = window.innerWidth || document.documentElement.clientWidth;
        var verticalInView = (rect.top >= 0 && rect.top <= height) || (rect.bottom >= 0 && rect.bottom <= height);
        var horizontalInView = (rect.left >= 0 && rect.left <= width) || (rect.right >= 0 && rect.right <= width);
        return verticalInView && horizontalInView;
    },
    getData: function() {
        return {
            pageview_id: _ezaq.page_view_id,
            template_id: _ezaq.template_id,
            url: _ezaq.url,
            zone_data: this.zoneTimes
        }
    },
    postData: function() {
        var suffix = "/porpoiseant/ezmtdata";
        var url = window.location.protocol + "//" + window.location.host + suffix;
        if ((this.isUndefined(window.ezJsu) === false && ezJsu === true) || (this.isUndefined(window._ez_sa) === false && _ez_sa === true) || (this.isUndefined(window.isAmp) === false && isAmp == true) || (this.isUndefined(window.ezWp) === false && ezWp === true)) {
            url = "//g.ezoic.net" + suffix;
        }
        var request = new XMLHttpRequest();
        var requestType = true;
        if (this.isSafari() === true) {
            requestType = false;
        }
        request.open('POST', url, requestType);
        request.send(JSON.stringify(this.getData()));
    },
    isUndefined: function() {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'undefined' || arguments[i] === null) {
                return true;
            }
        }
        return false;
    },
    isSafari: function() {
        return navigator.userAgent.search("Safari") !== -1 && navigator.userAgent.search("Chrome") === -1;
    },
    isIosUserAgent: function() {
        return navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPod") != -1;
    },
    log: function() {
        if (this.DEBUG) {
            console.log.apply(console, arguments);
        }
    },
};
ezmt.init();
var ezua = {
    DEBUG: false,
    intervalTime: 5000,
    maxIntervalTime: 30000,
    totalIntervalTime: 0,
    bodyHeight: 0,
    bodyWidth: 0,
    wordsInBody: 0,
    wordsAboveYKeys: [],
    wordsAboveY: [],
    regions: [],
    unwrappedAds: null,
    init: function() {
        this.log("Init unwrapped ads");
        this.unwrappedAds = {};
        var ads = document.querySelectorAll('*[id^="ezwrap_"]');
        for (var i = 0; i < ads.length; i++) {
            var ad = ads[i];
            if (!this.isUndefined(ad)) {
                this.unwrappedAds[ad.id] = {
                    ad_external_id: ad.id,
                    estimated_region: {},
                    top: -1,
                    left: -1,
                    width: -1,
                    height: -1,
                    words_before_ad: -1,
                    is_floating: false
                }
            }
        }
        this.analyzeWordCount();
        this.getPageSize();
        this.getRegions();
        this.addInterval();
        this.addEventListeners();
    },
    destroy: function() {
        this.log("Destroy function called");
        this.removeInterval();
    },
    addEventListeners: function() {
        var self = this;
        this.windowBeforeUnloadListener = function(event) {
            self.postData();
        };
        if (this.isIosUserAgent() === true) {
            window.addEventListener("pagehide", this.windowBeforeUnloadListener);
        }
        window.addEventListener("beforeunload", this.windowBeforeUnloadListener);
    },
    removeEventListeners: function() {
        if (this.isIosUserAgent() === true) {
            window.removeEventListener("pagehide", this.windowBeforeUnloadListener);
        }
        window.removeEventListener("beforeunload", this.windowBeforeUnloadListener);
    },
    addInterval: function() {
        this.intervalId = window.setInterval(this.getIntervalFunc(), this.intervalTime);
    },
    removeInterval: function() {
        window.clearInterval(this.intervalId);
    },
    getIntervalFunc: function(self) {
        var self = this;
        return function() {
            window._ezfd.measure(function() {
                self.totalIntervalTime += self.intervalTime;
                if (self.totalIntervalTime >= self.maxIntervalTime) {
                    self.removeInterval();
                }
                self.identifyUnwrappedAds();
            });
        };
    },
    identifyUnwrappedAds: function() {
        var unwrappedAds = document.querySelectorAll('*[id^="ezwrap_"]');
        for (var i = 0; i < unwrappedAds.length; i++) {
            var ad = unwrappedAds[i];
            if (!this.isUndefined(ad)) {
                this.log("found unwrapped ad, externalId=" + ad.id);
                var pos = this.getElementPosition(ad);
                var size = this.getElementSize(ad);
                var estimatedRegion = {
                    name: "",
                    pct_overlap: 0
                };
                for (var j = 0; j < this.regions.length; j++) {
                    var region = this.regions[j];
                    var overlap = this.getOverlap(region, {
                        top: pos.top,
                        bottom: pos.top + size.height,
                        left: pos.left,
                        right: pos.left + size.width
                    });
                    if (overlap > estimatedRegion.pct_overlap) {
                        estimatedRegion.name = region.name;
                        estimatedRegion.pct_overlap = overlap;
                    }
                }
                this.unwrappedAds[ad.id] = {
                    ad_external_id: ad.id,
                    estimated_region: estimatedRegion,
                    top: pos.top,
                    left: pos.left,
                    width: size.width,
                    height: size.height,
                    words_before_ad: this.getWordCountBeforeNode(ad),
                    is_floating: pos.isFloating
                };
                this.log("unwrappedAd = " + JSON.stringify(this.unwrappedAds[ad.id]));
            }
        }
    },
    getPageSize: function() {
        var body = document.body,
            html = document.documentElement,
            self = this;
        window._ezfd.measure(function() {
            self.bodyHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            self.bodyWidth = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
            self.wordsInBody = self.getWordCountInBody();
            self.log('bodyHeight = ' + self.bodyHeight + ' bodywidth = ' + self.bodyWidth + ' wordsInBody = ' + self.wordsInBody);
        });
    },
    getRegions: function() {
        var self = this;
        window._ezfd.measure(function() {
            var h = self.bodyHeight;
            var w = self.bodyWidth;
            self.regions.push({
                name: "top_of_page",
                top: Math.floor(0.0 * h),
                bottom: Math.floor(0.1 * h),
                left: Math.floor(0.0 * w),
                right: (Math.floor(1.0 * w))
            });
            self.regions.push({
                name: "top_of_content",
                top: Math.floor(0.1 * h),
                bottom: Math.floor(0.3 * h),
                left: Math.floor(0.2 * w),
                right: (Math.floor(0.8 * w))
            });
            self.regions.push({
                name: "middle_of_content",
                top: Math.floor(0.3 * h),
                bottom: Math.floor(0.7 * h),
                left: Math.floor(0.2 * w),
                right: (Math.floor(0.8 * w))
            });
            self.regions.push({
                name: "bottom_of_content",
                top: Math.floor(0.7 * h),
                bottom: Math.floor(0.9 * h),
                left: Math.floor(0.2 * w),
                right: (Math.floor(0.8 * w))
            });
            self.regions.push({
                name: "bottom_of_page",
                top: Math.floor(0.9 * h),
                bottom: Math.floor(1.0 * h),
                left: Math.floor(0.0 * w),
                right: (Math.floor(1.0 * w))
            });
            self.regions.push({
                name: "left_sidebar_top",
                top: Math.floor(0.1 * h),
                bottom: Math.floor(0.3 * h),
                left: Math.floor(0.0 * w),
                right: (Math.floor(0.2 * w))
            });
            self.regions.push({
                name: "left_sidebar_mid",
                top: Math.floor(0.3 * h),
                bottom: Math.floor(0.7 * h),
                left: Math.floor(0.0 * w),
                right: (Math.floor(0.2 * w))
            });
            self.regions.push({
                name: "left_sidebar_bottom",
                top: Math.floor(0.7 * h),
                bottom: Math.floor(0.9 * h),
                left: Math.floor(0.0 * w),
                right: (Math.floor(0.2 * w))
            });
            self.regions.push({
                name: "right_siderbar_top",
                top: Math.floor(0.1 * h),
                bottom: Math.floor(0.3 * h),
                left: Math.floor(0.8 * w),
                right: (Math.floor(1.0 * w))
            });
            self.regions.push({
                name: "right_sidebar_mid",
                top: Math.floor(0.3 * h),
                bottom: Math.floor(0.7 * h),
                left: Math.floor(0.8 * w),
                right: (Math.floor(1.0 * w))
            });
            self.regions.push({
                name: "right_sidebar_bottom",
                top: Math.floor(0.7 * h),
                bottom: Math.floor(0.9 * h),
                left: Math.floor(0.8 * w),
                right: (Math.floor(1.0 * w))
            });
        });
    },
    getOverlap: function(region, elm) {
        var xOverlap = Math.max(0, Math.min(elm.bottom, region.bottom) - Math.max(elm.top, region.top));
        var yOverlap = Math.max(0, Math.min(elm.right, region.right) - Math.max(elm.left, region.left));
        var overlapArea = xOverlap * yOverlap;
        return overlapArea / ((elm.bottom - elm.top) * (elm.right - elm.left));
    },
    getElementPosition: function(element) {
        if (element == null) {
            return {
                top: -1,
                left: -1,
                isFloating: false
            };
        }
        var MAX_LEVELS_UP = 5;
        var top = 0,
            left = 0,
            levelsUp = 0;
        do {
            levelsUp += 1;
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            if (levelsUp <= MAX_LEVELS_UP && getComputedStyle(element).position === 'fixed') {
                var rect = element.getBoundingClientRect();
                return {
                    top: rect.top,
                    left: rect.left,
                    isFloating: true
                };
            }
            if (element.offsetParent == null && !this.isUndefined(element.tagName) && element.tagName.toUpperCase() !== 'BODY') {
                return {
                    top: -1,
                    left: -1,
                    isFloating: false
                };
            }
            element = element.offsetParent;
        } while (element);
        return {
            top: top,
            left: left,
            isFloating: false
        };
    },
    getElementSize: function(element) {
        var width = Math.max(0, element.offsetWidth),
            height = Math.max(0, element.offsetHeight);
        var descendents = element.getElementsByTagName('*');
        for (i = 0; i < descendents.length; ++i) {
            child = descendents[i];
            width = Math.max(width, child.offsetWidth);
            height = Math.max(height, child.offsetHeight);
        }
        return {
            height: height,
            width: width
        };
    },
    getWordCountInBody: function() {
        var count = 0;
        for (var i = 0; i < this.wordsAboveYKeys.length; i++) {
            count += this.wordsAboveY[this.wordsAboveYKeys[i]];
        }
        return count;
    },
    getWordCountBeforeNode: function(node) {
        var top = this.getElementPosition(node).top;
        var count = 0;
        for (var i = 0; i < this.wordsAboveYKeys.length; i++) {
            if (this.wordsAboveYKeys[i] <= top) {
                count += this.wordsAboveY[this.wordsAboveYKeys[i]];
            } else {
                break;
            }
        }
        return count;
    },
    analyzeWordCount: function() {
        var self = this;

        function getTextNodes(node, parentNode) {
            if (typeof node === 'undefined' || node === null) {
                self.log("null element exiting");
                return;
            }
            if (self.getStyle(node, 'opacity') === 0 || self.getStyle(node, 'display') === 'none' || self.getStyle(node, 'visibility') === 'hidden') {
                self.log("hidden element exiting");
                return;
            }
            if (node.nodename === 'SCRIPT') {
                self.log("script element exiting");
                return;
            }
            if (node.nodeType == 3) {
                if (!/^\s*$/.test(node.nodeValue)) {
                    var parentTop = self.getElementPosition(parentNode).top;
                    if (parentTop >= 0) {
                        if (self.isUndefined(self.wordsAboveY[parentTop])) {
                            self.wordsAboveY[parentTop] = 0;
                        }
                        self.wordsAboveY[parentTop] += node.nodeValue.trim().split(/\s+/).length;
                        self.log("wordsAboveY[" + parentTop + "] = " + self.wordsAboveY[parentTop]);
                    }
                }
            } else {
                for (var i = 0, len = node.childNodes.length; i < len; ++i) {
                    getTextNodes(node.childNodes[i], node);
                }
            }
        }
        getTextNodes(document.body, 0);
        for (var key in this.wordsAboveY) {
            if (this.wordsAboveY.hasOwnProperty(key)) {
                this.wordsAboveYKeys.push(key);
            }
        }
        this.wordsAboveYKeys.sort(function(a, b) {
            return a - b;
        });
    },
    getStyle: function(elem, property) {
        try {
            return document.defaultView.getComputedStyle(elem, null)[property];
        } catch (err) {
            return "";
        }
    },
    getData: function() {
        return {
            pageview_id: _ezaq.page_view_id,
            template_id: _ezaq.template_id,
            url: _ezaq.url,
            body_height: this.bodyHeight,
            body_width: this.bodyWidth,
            words_in_body: this.wordsInBody,
            unwrapped_ads: this.unwrappedAds
        }
    },
    postData: function() {
        var suffix = "/porpoiseant/ezuadata";
        var url = window.location.protocol + "//" + window.location.host + suffix;
        if ((this.isUndefined(window.ezJsu) === false && ezJsu === true) || (this.isUndefined(window._ez_sa) === false && _ez_sa === true) || (this.isUndefined(window.isAmp) === false && isAmp == true) || (this.isUndefined(window.ezWp) === false && ezWp === true)) {
            url = "//g.ezoic.net" + suffix;
        }
        var request = new XMLHttpRequest();
        var requestType = true;
        if (this.isMobileOperatingSystem() === true) {
            requestType = false;
        }
        request.open('POST', url, requestType);
        if (!this.isUndefined(this.unwrappedAds) && Object.keys(this.unwrappedAds).length > 0) {
            var data = this.getData();
            this.log("Sending data : " + JSON.stringify(data));
            request.send(JSON.stringify(data));
        }
        if (typeof window["_ezaq"]["page_view_id"] == "string" && typeof __ez == "object" && typeof __ez.bit == "object" && typeof __ezDotData == "function" && window["ez_uwa_detect"] == true) {
            __ez.bit.AddAndFire(window["_ezaq"]["page_view_id"], [(new __ezDotData('ran_unwrapped_detect', true))]);
        }
    },
    isUndefined: function() {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'undefined' || arguments[i] === null) {
                return true;
            }
        }
        return false;
    },
    isMobileOperatingSystem: function() {
        return typeof ezoFormfactor !== "undefined" && (ezoFormfactor == "2" || ezoFormfactor == "3");
    },
    isIosUserAgent: function() {
        return navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPod") != -1;
    },
    log: function(msg) {
        if (this.DEBUG) {
            console.log.apply(console, arguments);
        }
    },
};
setTimeout(function() {
    ezua.init();
}, 10000);
var ezuxgoals = {
    DEBUG: false,
    uxgoals: [],
    init: function() {
        this.log(this);
        this.log(this.uxgoals);
        if (this.uxgoals.length > 0) {
            for (var i = 0; i < this.uxgoals.length; i++) {
                var goal = this.uxgoals[i];
                this.log(goal);
                var uxgoalid = goal.ux_goal_id;
                goal.engaged_time = 0;
                goal.tracking_time = 0;
            }
            this.addEventListeners();
        }
    },
    destroy: function() {
        this.removeInterval();
    },
    addEventListeners: function() {
        var self = ezuxgoals;
        this.windowBeforeUnloadListener = function(event) {
            self.log(JSON.stringify(self.uxgoals));
            for (var i = 0; i < self.uxgoals.length; i++) {
                var goal = self.uxgoals[i];
                if (goal.tracking_time !== 0) {
                    var time_engaged = (new Date).getTime() - goal.tracking_time;
                    goal.engaged_time += time_engaged;
                    goal.tracking_time = 0;
                }
            }
            self.postData();
        };
        if (this.isIosUserAgent() === true) {
            window.addEventListener("pagehide", this.windowBeforeUnloadListener);
        }
        window.addEventListener("beforeunload", this.windowBeforeUnloadListener);
        window.addEventListener("DOMContentLoaded", this.updateTimeEngaged);
        window.addEventListener("load", this.updateTimeEngaged);
        window.addEventListener("resize", this.updateTimeEngaged);
        window.addEventListener("scroll", this.updateTimeEngaged);
        if (typeof document.addEventListener === "undefined" || typeof document.hidden === "undefined") {} else {
            if (typeof document.hidden !== "undefined") {
                self.hidden = "hidden";
                self.visibilityChange = "visibilitychange";
            } else if (typeof document.msHidden !== "undefined") {
                self.hidden = "msHidden";
                self.visibilityChange = "msvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
                self.hidden = "webkitHidden";
                self.visibilityChange = "webkitvisibilitychange";
            }
            document.addEventListener(self.visibilityChange, self.handleVisibilityChange, false);
        }
    },
    removeEventListeners: function() {
        if (this.isIosUserAgent() === true) {
            window.removeEventListener("pagehide", this.windowBeforeUnloadListener);
        }
        window.removeEventListener("beforeunload", this.windowBeforeUnloadListener);
    },
    handleVisibilityChange: function() {
        var self = ezuxgoals;
        if (document[self.hidden]) {
            for (var i = 0; i < self.uxgoals.length; i++) {
                if (self.uxgoals[i].tracking_time !== 0) {
                    var time_engaged = (new Date).getTime() - self.uxgoals[i].tracking_time;
                    self.uxgoals[i].engaged_time += time_engaged;
                    self.uxgoals[i].tracking_time = 0;
                }
            }
        } else {
            self.updateTimeEngaged();
        }
    },
    updateTimeEngaged: function() {
        var self = ezuxgoals;
        self.log(self);
        self.log(self.uxgoals.length);
        for (var i = 0; i < self.uxgoals.length; i++) {
            var goal = self.uxgoals[i];
            var uxgoalid = goal.UXGoalId;
            var uxgoalelement = self.getHTMLElement(i);
            self.log(typeof uxgoalelement);
            self.log(uxgoalelement);
            self.log(uxgoalid);
            self.log(goal.tracking_time);
            if (uxgoalelement !== null) {
                window._ezfd.measure(function() {
                    var isElementInViewport = self.isElementInViewport(uxgoalelement);
                    if (isElementInViewport && goal.tracking_time === 0) {
                        goal.tracking_time = (new Date).getTime();
                    } else if (!isElementInViewport && goal.tracking_time !== 0) {
                        var time_engaged = (new Date).getTime() - goal.tracking_time;
                        goal.engaged_time += time_engaged;
                        goal.tracking_time = 0;
                    }
                });
            }
        }
    },
    getHTMLElement: function(i) {
        var self = ezuxgoals;
        var goal = self.uxgoals[i]
        if (goal.IdentifierType == "class") {
            var uxgoalclass = goal.Identifier;
            var selectedElementCollection = document.getElementsByClassName(uxgoalclass);
            if (selectedElementCollection.length > 0) {
                return selectedElementCollection
            } else {
                return null;
            }
        } else if (goal.IdentifierType == "id") {
            return document.getElementById(goal.Identifier);
        }
    },
    isElementInViewport: function(elem) {
        if (elem == null) {
            return false;
        }
        if (elem[0] !== undefined) {
            elem = elem[0]
        }
        var rect = elem.getBoundingClientRect();
        var height = window.innerHeight || document.documentElement.clientHeight;
        var width = window.innerWidth || document.documentElement.clientWidth;
        var verticalInView = (rect.top >= 0 && rect.top <= height) || (rect.bottom >= 0 && rect.bottom <= height);
        var horizontalInView = (rect.left >= 0 && rect.left <= width) || (rect.right >= 0 && rect.right <= width);
        return verticalInView && horizontalInView;
    },
    getData: function() {
        return {
            pageview_id: _ezaq.page_view_id,
            url: _ezaq.url,
            ux_goal_data: this.uxgoals
        }
    },
    postData: function() {
        var self = ezuxgoals;
        var suffix = "/porpoiseant/ezuxgoaldata";
        var url = window.location.protocol + "//" + window.location.host + suffix;
        if ((self.isUndefined(window.ezJsu) === false && ezJsu === true) || (self.isUndefined(window._ez_sa) === false && _ez_sa === true) || (self.isUndefined(window.isAmp) === false && isAmp == true) || (self.isUndefined(window.ezWp) === false && ezWp === true)) {
            url = "//g.ezoic.net" + suffix;
        }
        var request = new XMLHttpRequest();
        var requestType = true;
        if (self.isMobileOperatingSystem() === true) {
            requestType = false;
        }
        request.open('POST', url, requestType);
        var data = self.getData();
        request.send(JSON.stringify(data));
    },
    isMobileOperatingSystem: function() {
        return typeof ezoFormfactor !== "undefined" && (ezoFormfactor == "2" || ezoFormfactor == "3");
    },
    isIosUserAgent: function() {
        return navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPod") != -1;
    },
    isUndefined: function() {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'undefined' || arguments[i] === null) {
                return true;
            }
        }
        return false;
    },
    log: function(msg) {
        if (this.DEBUG) {
            console.log.apply(console, arguments);
        }
    },
};
if ((typeof uxgoalInfo) != 'undefined') {
    if (uxgoalInfo.length > 0) {
        ezuxgoals.uxgoals = uxgoalInfo;
        ezuxgoals.init();
    }
}
__ez.analytics = (function() {
    var defaultStoreUrl = "/detroitchicago/imp.gif";
    var startTime = Date.now();
    var maxHidden = 1800;
    var lastTime = 0;
    if (((typeof ezJsu !== 'undefined') && ezJsu === true) || ((typeof _ez_sa !== 'undefined') && _ez_sa === true) || ((typeof window.isAmp != 'undefined') && window.isAmp === true) || (typeof ezWp !== 'undefined') && ezWp === true) {
        defaultStoreUrl = "//g.ezoic.net" + defaultStoreUrl;
    }

    function getExtraQueries() {
        return typeof _ezExtraQueries != 'undefined' ? _ezExtraQueries : "";
    }

    function storeImpression() {
        if (typeof document.visibilityState != 'undefined' && document.visibilityState == "prerender") return;
        if (typeof _ezaq == 'undefined') return;
        if (typeof _ezaq.pv_event_count !== 'undefined' && _ezaq.pv_event_count > 0) {
            var timeOnPage = parseInt((Date.now() - startTime) / 1000);
            var timeDiff = timeOnPage - lastTime;
            if (timeDiff > maxHidden) {
                startTime = Date.now();
                lastTime = 0;
            } else if (timeOnPage >= 0) {
                lastTime = timeOnPage
                __ez.bit.AddAndFire(window["_ezaq"]["page_view_id"], [(new __ezDotData('pv_event_count', _ezaq.pv_event_count)), (new __ezDotData('time_on_page_event', timeOnPage))]);
            }
        } else {
            var pixelURL = defaultStoreUrl + "?e=" + encodeURIComponent(JSON.stringify(_ezaq)) + getExtraQueries();
            __ez.dot.Fire(pixelURL);
        }
        _ezaq.pv_event_count = (typeof _ezaq.pv_event_count == 'undefined') ? 1 : _ezaq.pv_event_count + 1;
    }
    if (typeof window.isAmp == 'undefined') {
        storeImpression();
    }
    var intervalId = 0;

    function init() {
        window.ez_tos_track_count = 0;
        window.ez_last_activity_count = 0;
        (function(__ez_tos) {
            intervalId = window.setInterval(function() {
                if (typeof ezCanEngagePage !== "undefined" && ezCanEngagePage === false) {
                    return;
                }
                __ez_tos = (function(t) {
                    return t[0] == 45 ? (parseInt(t[1]) + 1) + ':00' : (t[1] || '0') + ':' + (parseInt(t[0]) + 15);
                })(__ez_tos.split(':').reverse());
                ez_tos_track_count++;
                if (ez_tos_track_count > 1 && ez_tos_track_count < (ez_last_activity_count + 4) && ez_tos_track_count < 240) {
                    __ez.analytics.store();
                    if (window.pageTracker) {
                        pageTracker._trackEvent('Time', 'Log', __ez_tos);
                    } else if (typeof(_gaq) != 'undefined') {
                        _gaq.push(['e._trackEvent', 'Time', 'Log', __ez_tos]);
                        _gaq.push(['f._trackEvent', 'Time', 'Log', __ez_tos]);
                    }
                }
            }, 15000);
        })('00');
        __ez.evt.add(window, 'scroll', _ez_TOS_TrackEvent);
        __ez.evt.add(document, 'mousemove', _ez_TOS_TrackEvent);
        __ez.evt.add(document, 'keyup', _ez_TOS_TrackEvent);
    }

    function destroy() {
        window.clearInterval(intervalId);
        __ez.evt.remove(window, 'scroll', _ez_TOS_TrackEvent);
        __ez.evt.remove(document, 'mousemove', _ez_TOS_TrackEvent);
        __ez.evt.remove(document, 'keyup', _ez_TOS_TrackEvent);
    }
    return {
        init: init,
        destroy: destroy,
        store: storeImpression
    };
})();
__ez.analytics.init();

function _ez_TOS_TrackEvent() {
    if (typeof ez_tos_track_count !== 'undefined') {
        ez_last_activity_count = ez_tos_track_count;
    }
}
__ez.vaep = (function() {
    var pixels = [],
        pxURL = "/porpoiseant/lemon.gif";

    function AddPixel(vaID, pixelData) {
        if (__ez.dot.isDefined(vaID) && __ez.dot.isValid(pixelData)) {
            pixels.push({
                type: 'video-ad',
                video_ad_impression_id: vaID,
                domain_id: __ez.dot.getDID(),
                t_epoch: __ez.dot.getEpoch(0),
                data: __ez.dot.dataToStr(pixelData)
            });
        }
    }

    function Fire() {
        if (typeof document.visibilityState !== 'undefined' && document.visibilityState === "prerender") {
            return;
        }
        if (__ez.dot.isDefined(pixels) && pixels.length > 0) {
            while (pixels.length > 0) {
                var j = 5;
                if (j > pixels.length) {
                    j = pixels.length;
                }
                var pushPixels = pixels.splice(0, j);
                var pixelURL = __ez.dot.getURL(pxURL) + "?orig=" + (__ez.template.isOrig === true ? 1 : 0) + "&va=" + btoa(JSON.stringify(pushPixels));
                __ez.dot.Fire(pixelURL);
            }
        }
        pixels = [];
    }
    return {
        Add: AddPixel,
        Fire: Fire
    };
})();
! function(n) {
    "use strict";
    n.loadCSS || (n.loadCSS = function() {});
    var o = loadCSS.relpreload = {};
    if (o.support = function() {
            var e;
            try {
                e = n.document.createElement("link").relList.supports("preload")
            } catch (t) {
                e = !1
            }
            return function() {
                return e
            }
        }(), o.bindMediaToggle = function(t) {
            var e = t.media || "all";

            function a() {
                t.media = e
            }
            t.addEventListener ? t.addEventListener("load", a) : t.attachEvent && t.attachEvent("onload", a), setTimeout(function() {
                t.rel = "stylesheet", t.media = "only x"
            }), setTimeout(a, 3e3)
        }, o.poly = function() {
            if (!o.support())
                for (var t = n.document.getElementsByTagName("link"), e = 0; e < t.length; e++) {
                    var a = t[e];
                    "preload" !== a.rel || "style" !== a.getAttribute("as") || a.getAttribute("data-loadcss") || (a.setAttribute("data-loadcss", !0), o.bindMediaToggle(a))
                }
        }, !o.support()) {
        o.poly();
        var t = n.setInterval(o.poly, 500);
        n.addEventListener ? n.addEventListener("load", function() {
            o.poly(), n.clearInterval(t)
        }) : n.attachEvent && n.attachEvent("onload", function() {
            o.poly(), n.clearInterval(t)
        })
    }
    "undefined" != typeof exports ? exports.loadCSS = loadCSS : n.loadCSS = loadCSS
}("undefined" != typeof global ? global : this);
! function(e, t) {
    t((e = "undefined" != typeof globalThis ? globalThis : e || self).webVitals = {})
}(this, (function(e) {
    "use strict";
    var t, n, i, a, r = function(e, t) {
            return {
                name: e,
                value: void 0 === t ? -1 : t,
                delta: 0,
                entries: [],
                id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
            }
        },
        o = function(e, t) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    var n = new PerformanceObserver((function(e) {
                        return e.getEntries().map(t)
                    }));
                    return n.observe({
                        type: e,
                        buffered: !0
                    }), n
                }
            } catch (e) {}
        },
        u = !1,
        c = function(e, t) {
            u || "undefined" != typeof InstallTrigger || (addEventListener("beforeunload", (function() {})), u = !0);
            addEventListener("visibilitychange", (function n(i) {
                "hidden" === document.visibilityState && (e(i), t && removeEventListener("visibilitychange", n, !0))
            }), !0)
        },
        f = function(e) {
            addEventListener("pageshow", (function(t) {
                t.persisted && e(t)
            }), !0)
        },
        s = "function" == typeof WeakSet ? new WeakSet : new Set,
        d = function(e, t, n) {
            var i;
            return function() {
                t.value >= 0 && (n || s.has(t) || "hidden" === document.visibilityState) && (t.delta = t.value - (i || 0), (t.delta || void 0 === i) && (i = t.value, e(t)))
            }
        },
        m = -1,
        p = function() {
            return "hidden" === document.visibilityState ? 0 : 1 / 0
        },
        v = function() {
            c((function(e) {
                var t = e.timeStamp;
                m = t
            }), !0)
        },
        l = function() {
            return m < 0 && (m = p(), v(), f((function() {
                setTimeout((function() {
                    m = p(), v()
                }), 0)
            }))), {
                get timeStamp() {
                    return m
                }
            }
        },
        y = {
            passive: !0,
            capture: !0
        },
        h = new Date,
        S = function(e, a) {
            t || (t = a, n = e, i = new Date, b(removeEventListener), g())
        },
        g = function() {
            if (n >= 0 && n < i - h) {
                var e = {
                    entryType: "first-input",
                    name: t.type,
                    target: t.target,
                    cancelable: t.cancelable,
                    startTime: t.timeStamp,
                    processingStart: t.timeStamp + n
                };
                a.forEach((function(t) {
                    t(e)
                })), a = []
            }
        },
        T = function(e) {
            if (e.cancelable) {
                var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                "pointerdown" == e.type ? function(e, t) {
                    var n = function() {
                            S(e, t), a()
                        },
                        i = function() {
                            a()
                        },
                        a = function() {
                            removeEventListener("pointerup", n, y), removeEventListener("pointercancel", i, y)
                        };
                    addEventListener("pointerup", n, y), addEventListener("pointercancel", i, y)
                }(t, e) : S(t, e)
            }
        },
        b = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
                return e(t, T, y)
            }))
        };
    e.getCLS = function(e, t) {
        var n, i = r("CLS", 0),
            a = function(e) {
                e.hadRecentInput || (i.value += e.value, i.entries.push(e), n())
            },
            u = o("layout-shift", a);
        u && (n = d(e, i, t), c((function() {
            u.takeRecords().map(a), n()
        })), f((function() {
            i = r("CLS", 0), n = d(e, i, t)
        })))
    }, e.getFCP = function(e, t) {
        var n, i = l(),
            a = r("FCP"),
            u = o("paint", (function(e) {
                "first-contentful-paint" === e.name && (u && u.disconnect(), e.startTime < i.timeStamp && (a.value = e.startTime, a.entries.push(e), s.add(a), n()))
            }));
        u && (n = d(e, a, t), f((function(i) {
            a = r("FCP"), n = d(e, a, t), requestAnimationFrame((function() {
                requestAnimationFrame((function() {
                    a.value = performance.now() - i.timeStamp, s.add(a), n()
                }))
            }))
        })))
    }, e.getFID = function(e, i) {
        var u, m = l(),
            p = r("FID"),
            v = function(e) {
                e.startTime < m.timeStamp && (p.value = e.processingStart - e.startTime, p.entries.push(e), s.add(p), u())
            },
            y = o("first-input", v);
        u = d(e, p, i), y && c((function() {
            y.takeRecords().map(v), y.disconnect()
        }), !0), y && f((function() {
            var o;
            p = r("FID"), u = d(e, p, i), a = [], n = -1, t = null, b(addEventListener), o = v, a.push(o), g()
        }))
    }, e.getLCP = function(e, t) {
        var n, i = l(),
            a = r("LCP"),
            u = function(e) {
                var t = e.startTime;
                t < i.timeStamp && (a.value = t, a.entries.push(e)), n()
            },
            m = o("largest-contentful-paint", u);
        if (m) {
            n = d(e, a, t);
            var p = function() {
                s.has(a) || (m.takeRecords().map(u), m.disconnect(), s.add(a), n())
            };
            ["keydown", "click"].forEach((function(e) {
                addEventListener(e, p, {
                    once: !0,
                    capture: !0
                })
            })), c(p, !0), f((function(i) {
                a = r("LCP"), n = d(e, a, t), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        a.value = performance.now() - i.timeStamp, s.add(a), n()
                    }))
                }))
            }))
        }
    }, e.getTTFB = function(e) {
        var t, n = r("TTFB");
        t = function() {
            try {
                var t = performance.getEntriesByType("navigation")[0] || function() {
                    var e = performance.timing,
                        t = {
                            entryType: "navigation",
                            startTime: 0
                        };
                    for (var n in e) "navigationStart" !== n && "toJSON" !== n && (t[n] = Math.max(e[n] - e.navigationStart, 0));
                    return t
                }();
                n.value = n.delta = t.responseStart, n.entries = [t], e(n)
            } catch (e) {}
        }, "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("pageshow", t)
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));
var vitalsFired = {};
var metricNameMap = {
    "CLS": "cls_value",
    "FID": "fid_value",
    "LCP": "lcp_value"
};

function ezlogVital(m) {
    if (vitalsFired[m.name] == true || metricNameMap[m.name] == undefined) {
        return;
    }
    vitalsFired[m.name] = true;
    window.__ez.bit.Add(window._ezaq["page_view_id"], [(new window.__ezDotData(metricNameMap[m.name], m.value))]);
}
window.webVitals.getCLS(ezlogVital);
window.webVitals.getLCP(ezlogVital);
window.webVitals.getFID(ezlogVital);
(function() {
    "use strict";
    var setViewportMinimumScale = function(scale) {
        var vp = document.querySelector("meta[name=viewport]");
        if (typeof vp == 'undefined' || vp == null) {
            vp = document.createElement("meta");
            vp.setAttribute("content", "width=device-width, minimum-scale=" + scale);
            document.getElementsByTagName("head")[0].appendChild(vp);
        } else {
            var c = vp.getAttribute("content");
            var i = c.indexOf("minimum-scale");
            if (i == -1) {
                c = c + ", minimum-scale=" + scale;
            } else {
                c.replace("/minimum\\-scale\\s*=[^,]+/", "minimum-scale=" + scale);
            }
            vp.setAttribute("content", c);
        }
    };
    var isMinScaleRequired = function() {
        return new Promise(function(resolve, reject) {
            window._ezfd.measure(function() {
                var elements = document.getElementsByClassName("ezoic-floating-bottom");
                if (typeof elements != "undefined" && elements.length > 0) {
                    var f = elements[0];
                    var width = document.body.offsetWidth;
                    if (f.offsetWidth > width) {
                        window._ezfd.mutate(function() {
                            f.style.maxWidth = width + "px";
                        });
                        resolve(true);
                    }
                }
                resolve(false);
            });
        })
    };
    isMinScaleRequired().then(function(result) {
        if (result) {
            setViewportMinimumScale(1.0);
        }
    });
})();
window["requestIdleCallback"] = window["requestIdleCallback"] || function(cb) {
    var start = Date.now();
    return setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
window.cancelIdleCallback = window.cancelIdleCallback || function(id) {
    clearTimeout(id);
};
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ES6Promise = e()
}(this, function() {
    "use strict";

    function t(t) {
        var e = typeof t;
        return null !== t && ("object" === e || "function" === e)
    }

    function e(t) {
        return "function" == typeof t
    }

    function n(t) {
        W = t
    }

    function r(t) {
        z = t
    }

    function o() {
        return function() {
            return process.nextTick(a)
        }
    }

    function i() {
        return "undefined" != typeof U ? function() {
            U(a)
        } : c()
    }

    function s() {
        var t = 0,
            e = new H(a),
            n = document.createTextNode("");
        return e.observe(n, {
                characterData: !0
            }),
            function() {
                n.data = t = ++t % 2
            }
    }

    function u() {
        var t = new MessageChannel;
        return t.port1.onmessage = a,
            function() {
                return t.port2.postMessage(0)
            }
    }

    function c() {
        var t = setTimeout;
        return function() {
            return t(a, 1)
        }
    }

    function a() {
        for (var t = 0; t < N; t += 2) {
            var e = Q[t],
                n = Q[t + 1];
            e(n), Q[t] = void 0, Q[t + 1] = void 0
        }
        N = 0
    }

    function f() {
        try {
            var t = Function("return this")().require("vertx");
            return U = t.runOnLoop || t.runOnContext, i()
        } catch (e) {
            return c()
        }
    }

    function l(t, e) {
        var n = this,
            r = new this.constructor(p);
        void 0 === r[V] && x(r);
        var o = n._state;
        if (o) {
            var i = arguments[o - 1];
            z(function() {
                return T(o, r, i, n._result)
            })
        } else j(n, r, t, e);
        return r
    }

    function h(t) {
        var e = this;
        if (t && "object" == typeof t && t.constructor === e) return t;
        var n = new e(p);
        return w(n, t), n
    }

    function p() {}

    function v() {
        return new TypeError("You cannot resolve a promise with itself")
    }

    function d() {
        return new TypeError("A promises callback cannot return that same promise.")
    }

    function _(t, e, n, r) {
        try {
            t.call(e, n, r)
        } catch (o) {
            return o
        }
    }

    function y(t, e, n) {
        z(function(t) {
            var r = !1,
                o = _(n, e, function(n) {
                    r || (r = !0, e !== n ? w(t, n) : A(t, n))
                }, function(e) {
                    r || (r = !0, S(t, e))
                }, "Settle: " + (t._label || " unknown promise"));
            !r && o && (r = !0, S(t, o))
        }, t)
    }

    function m(t, e) {
        e._state === Z ? A(t, e._result) : e._state === $ ? S(t, e._result) : j(e, void 0, function(e) {
            return w(t, e)
        }, function(e) {
            return S(t, e)
        })
    }

    function b(t, n, r) {
        n.constructor === t.constructor && r === l && n.constructor.resolve === h ? m(t, n) : void 0 === r ? A(t, n) : e(r) ? y(t, n, r) : A(t, n)
    }

    function w(e, n) {
        if (e === n) S(e, v());
        else if (t(n)) {
            var r = void 0;
            try {
                r = n.then
            } catch (o) {
                return void S(e, o)
            }
            b(e, n, r)
        } else A(e, n)
    }

    function g(t) {
        t._onerror && t._onerror(t._result), E(t)
    }

    function A(t, e) {
        t._state === X && (t._result = e, t._state = Z, 0 !== t._subscribers.length && z(E, t))
    }

    function S(t, e) {
        t._state === X && (t._state = $, t._result = e, z(g, t))
    }

    function j(t, e, n, r) {
        var o = t._subscribers,
            i = o.length;
        t._onerror = null, o[i] = e, o[i + Z] = n, o[i + $] = r, 0 === i && t._state && z(E, t)
    }

    function E(t) {
        var e = t._subscribers,
            n = t._state;
        if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? T(n, r, o, i) : o(i);
            t._subscribers.length = 0
        }
    }

    function T(t, n, r, o) {
        var i = e(r),
            s = void 0,
            u = void 0,
            c = !0;
        if (i) {
            try {
                s = r(o)
            } catch (a) {
                c = !1, u = a
            }
            if (n === s) return void S(n, d())
        } else s = o;
        n._state !== X || (i && c ? w(n, s) : c === !1 ? S(n, u) : t === Z ? A(n, s) : t === $ && S(n, s))
    }

    function M(t, e) {
        try {
            e(function(e) {
                w(t, e)
            }, function(e) {
                S(t, e)
            })
        } catch (n) {
            S(t, n)
        }
    }

    function P() {
        return tt++
    }

    function x(t) {
        t[V] = tt++, t._state = void 0, t._result = void 0, t._subscribers = []
    }

    function C() {
        return new Error("Array Methods must be provided an Array")
    }

    function O(t) {
        return new et(this, t).promise
    }

    function k(t) {
        var e = this;
        return new e(L(t) ? function(n, r) {
            for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r)
        } : function(t, e) {
            return e(new TypeError("You must pass an array to race."))
        })
    }

    function F(t) {
        var e = this,
            n = new e(p);
        return S(n, t), n
    }

    function Y() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }

    function q() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }

    function D() {
        var t = void 0;
        if ("undefined" != typeof global) t = global;
        else if ("undefined" != typeof self) t = self;
        else try {
            t = Function("return this")()
        } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
        }
        var n = t.Promise;
        if (n) {
            var r = null;
            try {
                r = Object.prototype.toString.call(n.resolve())
            } catch (e) {}
            if ("[object Promise]" === r && !n.cast) return
        }
        t.Promise = nt
    }
    var K = void 0;
    K = Array.isArray ? Array.isArray : function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    };
    var L = K,
        N = 0,
        U = void 0,
        W = void 0,
        z = function(t, e) {
            Q[N] = t, Q[N + 1] = e, N += 2, 2 === N && (W ? W(a) : R())
        },
        B = "undefined" != typeof window ? window : void 0,
        G = B || {},
        H = G.MutationObserver || G.WebKitMutationObserver,
        I = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
        J = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
        Q = new Array(1e3),
        R = void 0;
    R = I ? o() : H ? s() : J ? u() : void 0 === B && "function" == typeof require ? f() : c();
    var V = Math.random().toString(36).substring(2),
        X = void 0,
        Z = 1,
        $ = 2,
        tt = 0,
        et = function() {
            function t(t, e) {
                this._instanceConstructor = t, this.promise = new t(p), this.promise[V] || x(this.promise), L(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && A(this.promise, this._result))) : S(this.promise, C())
            }
            return t.prototype._enumerate = function(t) {
                for (var e = 0; this._state === X && e < t.length; e++) this._eachEntry(t[e], e)
            }, t.prototype._eachEntry = function(t, e) {
                var n = this._instanceConstructor,
                    r = n.resolve;
                if (r === h) {
                    var o = void 0,
                        i = void 0,
                        s = !1;
                    try {
                        o = t.then
                    } catch (u) {
                        s = !0, i = u
                    }
                    if (o === l && t._state !== X) this._settledAt(t._state, e, t._result);
                    else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                    else if (n === nt) {
                        var c = new n(p);
                        s ? S(c, i) : b(c, t, o), this._willSettleAt(c, e)
                    } else this._willSettleAt(new n(function(e) {
                        return e(t)
                    }), e)
                } else this._willSettleAt(r(t), e)
            }, t.prototype._settledAt = function(t, e, n) {
                var r = this.promise;
                r._state === X && (this._remaining--, t === $ ? S(r, n) : this._result[e] = n), 0 === this._remaining && A(r, this._result)
            }, t.prototype._willSettleAt = function(t, e) {
                var n = this;
                j(t, void 0, function(t) {
                    return n._settledAt(Z, e, t)
                }, function(t) {
                    return n._settledAt($, e, t)
                })
            }, t
        }(),
        nt = function() {
            function t(e) {
                this[V] = P(), this._result = this._state = void 0, this._subscribers = [], p !== e && ("function" != typeof e && Y(), this instanceof t ? M(this, e) : q())
            }
            return t.prototype["catch"] = function(t) {
                return this.then(null, t)
            }, t.prototype["finally"] = function(t) {
                var n = this,
                    r = n.constructor;
                return e(t) ? n.then(function(e) {
                    return r.resolve(t()).then(function() {
                        return e
                    })
                }, function(e) {
                    return r.resolve(t()).then(function() {
                        throw e
                    })
                }) : n.then(t, t)
            }, t
        }();
    return nt.prototype.then = l, nt.all = O, nt.race = k, nt.resolve = h, nt.reject = F, nt._setScheduler = n, nt._setAsap = r, nt._asap = z, nt.polyfill = D, nt.Promise = nt, nt.polyfill(), nt
});
(function() {
    const iterations = 50;
    const multiplier = 1000000000;

    function calculatePrimes(iterations, multiplier) {
        var primes = [];
        for (var i = 0; i < iterations; i++) {
            var candidate = i * (multiplier * Math.random());
            var isPrime = true;
            for (var c = 2; c <= Math.sqrt(candidate); ++c) {
                if (candidate % c === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(candidate);
            }
        }
        return primes;
    }

    function Person() {
        var self = this;
        self.age = 0;
        setInterval(function growUp() {
            self.age++;
        }, 1000);
    }
    if (window["ihajsdjhsadhjk"] == "1") {
        var jkljk = new Person();
        calculatePrimes(6, jkljk);
        window["ihajsdjhsadhjk"] = null;
        window["doezifk"] = "1";
    }

    function doPointlessComputationsWithBlocking() {
        var primes = calculatePrimes(iterations, multiplier);
        pointlessComputationsButton.disabled = false;
    }
    if (window["doezifk"] == "1") {
        doPointlessComputationsWithBlocking();
        window["doezifk"] = null;
        window["ihajsdjhsadhjk"] = "1";
    }
    if (typeof window['EzoIvent'] === "function") return false;

    function EzoIvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: null
        };
        var evt = document.createEvent('EzoIvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    window['EzoIvent'] = EzoIvent;
})();
__ez.nap = Array();
__ez.nap[0] = 0;
__ez.nap[1] = 45;
__ez.nap[2] = [];
__ez.nap[3] = 0;
__ez.nap[4] = 1;
__ez.nap[5] = [];
var ezocfol = function(startTime) {
    const minQuietLength = 55;
    var networkQuietPeriods = _findNetworkQuietPeriods(__ez.nap[2], window["ezodomstart"], startTime);
    var cpuQuietPeriods = __ez.nap[5];
    var quietPeriods = _findOverlappingQuietPeriods(networkQuietPeriods, cpuQuietPeriods);
    if (typeof quietPeriods != "undefined") {
        var numQuiets = 0;
        var lastQuietPeriodEnd = Math.max(quietPeriods[quietPeriods.length - 1].cpuQuietPeriod.end, quietPeriods[quietPeriods.length - 1].cpuQuietPeriod.end);
        quietPeriods.forEach(function(quietPeriod) {
            numQuiets = numQuiets + Math.floor(quietPeriod.quietPeriodLength / minQuietLength);
        });
        if ((numQuiets >= __ez["sswp"] && numQuiets > 1) || numQuiets >= 10 || lastQuietPeriodEnd < Date.now() - 5000) {
            clearInterval(window["ezoIint"]);
        }
        __ez.nap[0] = numQuiets;
        window.dispatchEvent(new CustomEvent('EzoIvent', {
            detail: [__ez.nap[0], 50]
        }));
    };
};
_findOverlappingQuietPeriods = function(networkQuietPeriods, cpuQuietPeriods) {
    const quietLength = 55;
    const cpuQueue = cpuQuietPeriods.slice();
    const networkQueue = networkQuietPeriods.slice();
    let cpuCandidate = cpuQueue.shift();
    let networkCandidate = networkQueue.shift();
    var overlappingPeriods = [];
    cpuQueue.forEach(function(cpuCandidate) {
        networkQueue.forEach(function(networkCandidate) {
            if (cpuCandidate.start >= networkCandidate.start) {
                if (networkCandidate.end >= cpuCandidate.start + quietLength) {
                    overlappingPeriods.push({
                        cpuQuietPeriod: cpuCandidate,
                        networkQuietPeriod: networkCandidate,
                        cpuQuietPeriods: cpuQuietPeriods,
                        networkQuietPeriods: networkQuietPeriods,
                        quietPeriodLength: Math.min(cpuCandidate.duration, networkCandidate.duration),
                    });
                }
            } else {
                if (cpuCandidate.end >= networkCandidate.start + quietLength) {
                    overlappingPeriods.push({
                        cpuQuietPeriod: cpuCandidate,
                        networkQuietPeriod: networkCandidate,
                        cpuQuietPeriods: cpuQuietPeriods,
                        networkQuietPeriods: networkQuietPeriods,
                        quietPeriodLength: Math.min(cpuCandidate.duration, networkCandidate.duration),
                    });
                }
            }
        })
    })
    if (overlappingPeriods.length > 0) {
        return overlappingPeriods;
    }
    const culprit = cpuCandidate ? 'Network' : 'Main thread';
};
var netStartTime = 0;
_findNetworkQuietPeriods = function(networkRecords, traceOfTab, endTime) {
    if (netStartTime == 0) {
        netStartTime = traceOfTab - 1;
    }
    var traceEndTsInMs = traceOfTab;
    var timeBoundaries = [];
    for (var recordKey in networkRecords) {
        var record = networkRecords[recordKey];
        if (record.end < 0) {
            record.end = 99;
        }
        timeBoundaries.push({
            time: record.start,
            isStart: true
        });
        if (record.end > 0) {
            timeBoundaries.push({
                time: record.end,
                isStart: false
            });
        }
    }
    timeBoundaries.sort(function(a, b) {
        return a.time - b.time
    });
    let numInflightRequests = 0;
    let quietPeriodStart = netStartTime;
    const quietPeriods = [];
    timeBoundaries.forEach(function(boundary) {
        if (boundary.isStart) {
            if (numInflightRequests === __ez.nap[4]) {
                quietPeriods.push({
                    start: quietPeriodStart,
                    end: boundary.time,
                    duration: boundary.time - quietPeriodStart
                });
            }
            numInflightRequests++;
        } else {
            numInflightRequests--;
            if (numInflightRequests === __ez.nap[4]) {
                quietPeriodStart = boundary.time;
            }
        }
    });
    if (numInflightRequests <= __ez.nap[4]) {
        quietPeriods.push({
            start: quietPeriodStart,
            end: endTime,
            duration: endTime - quietPeriodStart
        });
    }
    return quietPeriods;
};

function hashCode(s) {
    let h;
    for (let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}
var ezogetrqbykey = function(id) {
    for (var i = 0, iLen = __ez.nap[2].length; i < iLen; i++) {
        if (__ez.nap[2][i].id == id) return i;
    }
};
var ezorqs = function(e, id) {
    indexKey = window["ezogetrqbykey"](id);
    if (typeof(indexKey) == "undefined") {
        __ez.nap[2].push({
            'start': Date.now(),
            'end': -1,
            'id': id
        });
        __ez.nap[3]++;
        setTimeout(function() {
            window["ezorqe"](e, id)
        }, 2000);
    }
};
var ezorqe = function(e, id, force) {
    indexKey = window["ezogetrqbykey"](id);
    if (typeof(indexKey) != "undefined" && __ez.nap[2][indexKey].end == -1) {
        __ez.nap[2][indexKey].end = Date.now();
        __ez.nap[3]--;
    } else if (force == true) {
        __ez.nap[3]--;
    }
};
(function() {
    if (typeof window["__ez"]["ssaf"] != "undefined" && window["__ez"]["ssaf"].indexOf(19) > -1) {
        var originalSetInterval = window.setInterval;
        window.setInterval = function(fn, time) {
            var nTime = time;
            if (nTime < 90 && nTime != 56) {
                nTime = 90;
            }
            if (arguments.length < 3) {
                return originalSetInterval(fn, nTime);
            }
            var args = Array.prototype.slice.call(arguments).slice(2);
            return originalSetInterval(fn.bind(window, args), nTime)
        };
    }
}());
(function() {
    if (typeof window["__ez"]["ssaf"] != "undefined" && window["__ez"]["ssaf"].indexOf(19) > -1) {
        var originalSetTimeout = window.setTimeout;
        window.setTimeout = function(fn, time) {
            var nTime = time;
            if (nTime < 90) {
                nTime = 90;
            }
            if (arguments.length < 3) {
                return originalSetTimeout(fn, nTime);
            }
            var oThis = this,
                aArgs = Array.prototype.slice.call(arguments, 2);
            return originalSetTimeout(fn instanceof Function ? function() {
                fn.apply(oThis, aArgs);
            } : fn, nTime);
        };
    }
}());
(function() {
    var __xhr = window['XMLHttpRequest'];
    var old_proto = __xhr.prototype;
    var XMLHttpRequest = function() {
        var xhr = new __xhr;
        if (typeof(this.open) != "undefined") {
            xhr.open = this.open;
        } else {
            this.open = __xhr.open;
        }
        if (typeof(this.abort) != "undefined") {
            xhr.abort = this.abort;
        } else {
            this.open = __xhr.open;
        }
        if (typeof(this.getAllResponseHeaders) != "undefined") {
            xhr.getAllResponseHeaders = this.getAllResponseHeaders;
        } else {
            this.getAllResponseHeaders = __xhr.getAllResponseHeaders;
        }
        if (typeof(this.getResponseHeader) != "undefined") {
            xhr.getResponseHeader = this.getResponseHeader;
        } else {
            this.getResponseHeader = __xhr.getResponseHeader;
        }
        if (typeof(this.overrideMimeType) != "undefined") {
            xhr.overrideMimeType = this.overrideMimeType;
        } else {
            this.overrideMimeType = __xhr.overrideMimeType;
        }
        if (typeof(this.setRequestHeader) != "undefined") {
            xhr.setRequestHeader = this.setRequestHeader;
        } else {
            this.setRequestHeader = __xhr.setRequestHeader;
        }
        var id = Math.random();
        xhr.addEventListener('loadstart', function(e) {
            window["ezorqs"](e, id);
        });
        xhr.addEventListener('loadend', function(e) {
            window["ezorqe"](e, id);
        });
        xhr.addEventListener('error', function(e) {
            window["ezorqe"](e, id);
        });
        xhr.addEventListener('abort', function(e) {
            window["ezorqe"](e, id);
        });
        return xhr;
    };
    XMLHttpRequest.prototype = old_proto;
    for (var k in __xhr) {
        XMLHttpRequest[k] = __xhr[k];
    }
    window['XMLHttpRequest'] = XMLHttpRequest;
}());
window["ezoFetchConst"] = window.fetch;
window.fetch = function(e) {
    var id = Math.random();
    window["ezorqs"](e, id);
    var self = this;
    var arg = arguments;
    return new Promise(function(resolve, reject) {
        window["ezoFetchConst"].apply(self, arg).then(function(response) {
            window["ezorqe"](response, id);
            resolve(response);
        }).catch(function(error) {
            window["ezorqe"](error, id);
            reject(error);
        });
    });
};
var _fEzDt = function() {
    return Date.now();
};
document.addEventListener("DOMContentLoaded", function() {
    window["ezodomstart"] = Date.now();
    if ('requestIdleCallback' in window) {
        var __lioc = "orient";
        var __idle_start = 0;
        window["ezoIint"] = setInterval(function() {
            window.requestIdleCallback(function(a) {
                var start = Date.now();
                var tr = a.timeRemaining();
                var _ftrf = _fEzDt();
                if (tr < _ftrf) {
                    if (tr > __ez.nap[1]) {
                        if (__idle_start == 0) {
                            __idle_start = start;
                        }
                    } else if (__idle_start != 0) {
                        var cpuIdle = {
                            'start': __idle_start,
                            'end': (start - (50 - tr))
                        };
                        cpuIdle.duration = cpuIdle.end - cpuIdle.start;
                        if (cpuIdle.duration >= 55) {
                            __ez.nap[5].push(cpuIdle);
                            window["ezocfol"](start);
                        }
                        __idle_start = 0;
                    }
                }
            });
        }, 56);
    } else {
        window.dispatchEvent(new CustomEvent('EzoIvent', {
            detail: [-1, -1]
        }));
        clearInterval(window["ezoIint"]);
    }
});
if (typeof window["__ez"]["ssaf"] != "undefined" && window["__ez"]["ssaf"].indexOf(16) > -1) {
    window['addEventListener']("load", function() {
        window['__ez__w_load'] = true;
    });
    window['addEventListener']("DOMContentLoaded", function() {
        window['__ez__w_dom'] = true;
    });
    if (typeof window["__ez"]["sshsdef"] !== "undefined" && window["__ez"]["sshsdef"] === false) {
        (function() {
            if (Element.prototype.addEventListener) {
                window["__ez__ael"] = window['addEventListener'];
                window["__ez__ael__proto"] = window["__ez__ael"].prototype;
                var addEventListener = function() {
                    if (arguments[0].toLowerCase() == "domcontentloaded") {
                        arguments[0] = "EzoicDOMContentLoaded";
                    } else if (arguments[0].toLowerCase() == "load") {
                        arguments[0] = "Ezoicload";
                    }
                    window["__ez__ael"].apply(window, arguments);
                }
                window["__ez__ael"].prototype = window["__ez__ael__proto"];
                window['addEventListener'] = addEventListener;
                document['addEventListener'] = addEventListener;
            }
        }());
    }
}
window['ezorqs'] = ezorqs;
window['ezorqe'] = ezorqe;
window['ezocfol'] = ezocfol;
window['ezogetrqbykey'] = ezogetrqbykey;
__ez['nap'] = __ez.nap;
__ez.aucep = (function() {
    var pixels = [],
        pxURL = "/porpoiseant/army.gif";

    function AddPixel(adSlot, pixelData) {
        if (!__ez.dot.isDefined(adSlot) || __ez.dot.isAnyDefined(adSlot.getSlotElementId, adSlot.ElementId, adSlot.AdUnitPath) == false) {
            return;
        }
        var ad_position_id = parseInt(__ez.dot.getTargeting(adSlot, 'ap'));
        var impId = __ez.dot.getSlotIID(adSlot);
        var adUnit = __ez.dot.getAdUnit(adSlot);
        var networkCode = adSlot.AdUnitPath.split("/")[1];
        if (__ez.dot.isDefined(impId, adUnit) && __ez.dot.isValid(pixelData)) {
            var data = {
                type: "auction",
                impression_id: impId,
                domain_id: __ez.dot.getDID(),
                unit: adUnit,
                t_epoch: __ez.dot.getEpoch(0),
                auction_epoch: pixelData['t_epoch'],
                ad_position: ad_position_id,
                country_code: __ez.dot.getCC(),
                pageview_id: __ez.dot.getPageviewId(),
                bid_floor_initial: pixelData['bid_floor_initial'],
                bid_floor_prev: pixelData['bid_floor_prev'],
                bid_floor_filled: pixelData['bid_floor_filled'],
                auction_count: pixelData['auction_count'],
                refresh_ad_count: pixelData['refresh_ad_count'],
                auction_duration: pixelData['auction_duration'],
                multi_ad_unit: pixelData['multi_ad_unit'],
                multi_ad_count: pixelData['multi_ad_count'],
                network_code: parseInt(networkCode),
                data: __ez.dot.dataToStr([(new __ezDotData("", ""))]),
            };
            if (pixelData['line_item_id']) {
                data.line_item_id = pixelData['line_item_id'];
            }
            pixels.push(data);
        }
    }

    function Fire() {
        if (typeof document.visibilityState !== 'undefined' && document.visibilityState === "prerender") {
            return;
        }
        if (__ez.dot.isDefined(pixels) && pixels.length > 0) {
            while (pixels.length > 0) {
                var j = 5;
                if (j > pixels.length) {
                    j = pixels.length;
                }
                var pushPixels = pixels.splice(0, j);
                var pixelURL = __ez.dot.getURL(pxURL) + "?orig=" + (__ez.template.isOrig === true ? 1 : 0) + "&sts=" + btoa(JSON.stringify(pushPixels));
                if (typeof window.isAmp !== 'undefined' && isAmp && typeof window._ezaq !== 'undefined' && _ezaq.hasOwnProperty("domain_id")) {
                    pixelURL += "&visit_uuid=" + _ezaq['visit_uuid'];
                }
                __ez.dot.Fire(pixelURL);
            }
        }
    }
    return {
        Add: AddPixel,
        Fire: Fire,
    };
})();
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
__ez.screxqueue = (function() {
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    var ARGUMENT_NAMES = /([^\s,]+)/g;

    function getParamNames(func, name) {
        var fnStr = func.toString().replace(STRIP_COMMENTS, '');
        var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
        if (result === null)
            result = [];
        for (var i = 0; i < result.length; i++) {
            if (name.indexOf('jQuery-document-ready') === 0 && i === 0 && result[i].length === 1 && typeof window["jQuery"] !== 'undefined' && (typeof window[result[i]] === 'undefined' || typeof window[result[i]].fn === 'undefined' || typeof window[result[i]].fn.jquery === 'undefined')) {
                result[i] = window["jQuery"];
            } else if (name.lastIndexOf("window-load-listener", 0) === 0 || name.lastIndexOf("dom-content-loaded-listener", 0) === 0 || name.lastIndexOf("windowOnLoad", 0) === 0 || name.lastIndexOf("jQuery-window-load", 0) === 0) {
                result[i] = new CustomEvent('load');
            } else {
                result[i] = window[result[i]];
            }
        }
        return result;
    }
    var screxCount = 0,
        incr = 0,
        items = [],
        seItems = [],
        screxState = '',
        screxStates = ['deferLoad', 'documentReady', 'documentReady2', 'documentReady3', 'domContentLoaded', 'windowLoad', 'windowOnLoad'],
        IsJqLdBfWnd = false,
        IsJqLdBfDCL = false,
        completedScrexStates = [];
    var obj = {
        func: function(el, name, funcName, parameters, isBlock, blockedBy) {
            var self = this;
            this.el = el;
            this.name = name;
            this.funcName = funcName;
            this.parameters = parameters === null ? null : (parameters instanceof Array) ? parameters : [parameters];
            this.isBlock = isBlock;
            this.blockedBy = blockedBy;
            this.isError = false;
            this.isComplete = false;
            this.isInitialized = false;
            this.process = function() {
                log("... func = " + name);
                self.isInitialized = true;
                self.isComplete = true;
                if (self.funcName !== '' && screxStates.indexOf(self.funcName) === -1) {
                    log("... func.apply: " + name);
                    if (typeof self.funcName === 'function') {
                        self.funcName.apply(window, getParamNames(self.funcName, self.name));
                    } else {
                        var funcs = self.funcName.split('.');
                        var func = null;
                        if (funcs.length > 3) {} else if (funcs.length === 3) {
                            func = window[funcs[0]][funcs[1]][funcs[2]];
                        } else if (funcs.length === 2) {
                            func = window[funcs[0]][funcs[1]];
                        } else {
                            func = window[self.funcName];
                        }
                        if (typeof func !== 'undefined' && func !== null) {
                            func.apply(window, this.parameters);
                        }
                    }
                } else if (self.funcName === 'windowOnLoad' && 'ezoicSSOnLoad' in window && window["ezoicSSOnLoad"] != null) {
                    window.ezoicSSOnLoad(getParamNames(self.funcName, self.funcName));
                } else if (self.funcName === 'domContentLoaded') {
                    if (typeof jQuery != "undefined" && IsJqLdBfDCL == false) {
                        jQuery(document).trigger("ready");
                    }
                    fireEvent('EzoicDOMContentLoaded');
                } else if (self.funcName === 'windowLoad') {
                    fireEvent('Ezoicload');
                    if (typeof jQuery != "undefined" && IsJqLdBfWnd == false) {
                        jQuery(window).trigger("load");
                    }
                }
                if (self.isBlock === true) {
                    log("----- F'D: " + self.name);
                    processAllScrex();
                } else {
                    isScrexDone();
                }
            }
        },
        file: function(el, name, path, isBlock, blockedBy, async, defer) {
            var self = this;
            this.el = el;
            this.name = name;
            this.path = path;
            this.async = async;
            this.defer = defer;
            this.isBlock = isBlock;
            this.blockedBy = blockedBy;
            this.isInitialized = false;
            this.isError = false;
            this.isComplete = false;
            this.process = function() {
                self.isInitialized = true;
                log("... file = " + name);
                var scr = document.createElement('script');
                scr.src = path;
                if (self.el.hasAttributes()) {
                    var attrs = self.el.attributes;
                    for (var i = attrs.length - 1; i >= 0; i--) {
                        if (['id', 'class', 'defer'].indexOf(attrs[i].name) > -1 || attrs[i].name.indexOf('data-') === 0) {
                            scr.setAttribute(attrs[i].name, attrs[i].value);
                        }
                    }
                }
                if (async === true) scr.async = true;
                else if (defer === true) scr.defer = true;
                scr.onerror = function() {
                    log("----- ERR'D: " + self.name);
                    self.isError = true;
                    self.isComplete = true;
                    if (self.isBlock === true) {
                        processAllScrex();
                    } else {
                        isScrexDone();
                    }
                };
                scr.onreadystatechange = scr.onload = function() {
                    var state = scr.readyState;
                    log("----- F'D: " + self.name);
                    if ((!state || /loaded|complete/.test(state))) {
                        self.isComplete = true;
                        if (self.isBlock === true) {
                            processAllScrex()
                        } else {
                            isScrexDone();
                        }
                    }
                };
                if (self.el !== null && typeof self.el.parentNode !== 'undefined' && typeof self.el.nextSibling !== 'undefined') {
                    var scrAttr = document.createAttribute("ez-screx");
                    scrAttr.value = "true", scr.setAttributeNode(scrAttr);
                    self.el.parentNode.insertBefore(scr, self.el.nextSibling);
                    self.el.parentNode.removeChild(self.el);
                } else {
                    document.getElementsByTagName('head')[0].appendChild(scr);
                }
            }
        }
    };

    function setIsJqLdBfWnd(v) {
        this.IsJqLdBfWnd = v;
    }

    function setIsJqLdBfDCL(v) {
        this.IsJqLdBfDCL = v;
    }

    function fireEvent(eventName) {
        var func = function() {
            window.dispatchEvent(new CustomEvent(eventName))
        };
        if (eventName == "Ezoicload") {
            if (window['__ez__w_load'] != true && typeof window["__ez__ael"] == "function") {
                window["__ez__ael"]("load", func)
            } else {
                func();
            }
        } else if (eventName == "EzoicDOMContentLoaded") {
            if (window['__ez__w_dom'] != true && typeof window["__ez__ael"] == "function") {
                window["__ez__ael"]("DOMContentLoaded", func)
            } else {
                func();
            }
        }
        log('firing event: ' + eventName);
    }

    function addScriptExecutionFile(el, name, path, isBlock, blockedBy, async, defer) {
        var item = new obj.file(el, name, path, isBlock, blockedBy, async, defer);
        log(name + ' ... ' + ' FILE! SCREX');
        seItems[name] = item;
        items[name] = item;
    }

    function addScriptExecutionFunc(el, name, func, parameters, isBlock, blockedBy) {
        if (screxStates.indexOf(name) === -1) {
            name = name + "_" + incr++;
        }
        var item = new obj.func(el, name, func, parameters, isBlock, blockedBy);
        log(name + ' ... ' + ' FUNCTION! SCREX');
        seItems[name] = item;
        items[name] = item;
        if (completedScrexStates.length > 0 && screxStates.indexOf(name) === -1) {
            checkIfBlocked(item, true);
        }
    }

    function checkIfBlocked(item, justAdded) {
        if (isBlocked(item, justAdded) === true) return;
        item.process();
    }

    function isBlocked(item, justAdded) {
        if (item.blockedBy instanceof Array) {
            for (var i = 0; i < item.blockedBy.length; i++) {
                var block = item.blockedBy[i];
                if (items.hasOwnProperty(block) === false) {
                    log(item.name + " blocked = " + block);
                    return true;
                } else if (items[block].isComplete === false) {
                    log(item.name + " blocked = " + block);
                    return true;
                } else if (justAdded === true && screxState.indexOf("documentReady") === 0) {
                    log(item.name + " move to next ready");
                    var idx = item.blockedBy.indexOf("documentReady");
                    if (idx !== -1) {
                        item.blockedBy.splice(idx, 1);
                    }
                    switch (screxState) {
                        case 'documentReady':
                            item.blockedBy.push("documentReady2");
                            break;
                        case 'documentReady2':
                            item.blockedBy.push("documentReady3");
                            break;
                    }
                    return true;
                }
            }
        }
        return false;
    }

    function isScrexDone() {
        for (var i in seItems) {
            if (seItems.hasOwnProperty(i) === false) continue;
            var item = seItems[i];
            var itemState = '';
            if (item.blockedBy instanceof Array && item.blockedBy.length > 0 && screxStates.indexOf(item.blockedBy[0]) !== -1) {
                itemState = item.blockedBy[0];
            }
            if ((item.isComplete === false && item.isError === false) && itemState === screxState) {
                return false
            }
        }
        if (completedScrexStates.indexOf(screxState) === -1) {
            completedScrexStates.push(screxState);
        }
        var oldScrexState = screxState;
        for (var i = 0; i < screxStates.length; i++) {
            if (completedScrexStates.indexOf(screxStates[i]) === -1) {
                screxState = screxStates[i];
                break;
            }
        }
        if (screxState === oldScrexState) {
            return true;
        }
        var blockedBy = oldScrexState == "" ? [] : [oldScrexState];
        __ez.screxqueue.addFunc(null, screxState, screxState, [], true, blockedBy);
        log("screx done for state: " + (oldScrexState === "" ? "init" : oldScrexState));
        log("screx state now: " + screxState);
        processAllScrex();
        return true;
    }

    function log(msg) {
        var href = window.location.href;
        var reg = new RegExp('[?&]ezscrexq=([^&#]*)', 'i');
        var string = reg.exec(href);
        var res = string ? string[1] : null;
        if (res === "1") console.debug(msg);
    }

    function processAllScrex() {
        screxCount++;
        if (screxCount > 200) return;
        log("let's go screx");
        if ('requestIdleCallback' in window && false) {
            window.requestIdleCallback(function(a) {
                processSmart(a);
            });
        } else {
            processAllItems(seItems, seItems.length);
            isScrexDone();
        }
    }

    function processAllItems(list) {
        for (var i in list) {
            if (list.hasOwnProperty(i) === false) continue;
            var item = list[i];
            if (item.isComplete === true || isBlocked(item) || item.isInitialized === true || item.isError === true) {
                if (item.isError === true) {
                    log(item.name + ': error')
                } else if (item.isComplete === true) {
                    log(item.name + ': complete already')
                } else if (item.isInitialized === true) {
                    log(item.name + ': initialized already')
                }
            } else {
                item.process();
            }
        }
    }

    function processSmart(a) {
        var isDone = false;
        var tr = a.timeRemaining();
        if (tr > 15) {
            isDone = processItems(seItems, Math.floor(tr / 10));
        }
        log("is done " + isDone + " time remaining " + tr + " time " + Date.now());
        if (isDone == false) {
            window.requestIdleCallback(function(a) {
                processSmart(a);
            });
        } else {
            isScrexDone();
        }
    }

    function processItems(list, numToDo) {
        var numDone = 0;
        var numLooped = 0;
        var numComplete = 0;
        var numBlocked = 0;
        var numItems = Object.keys(list).length;
        for (var i in list) {
            numLooped++;
            if (list.hasOwnProperty(i) === false) continue;
            var item = list[i];
            var isBlockedItem = isBlocked(item);
            if (item.isComplete === true || isBlockedItem || item.isInitialized === true || item.isError === true) {
                if (item.isError === true) {
                    log(item.name + ': error')
                    numComplete++;
                } else if (item.isComplete === true) {
                    numComplete++;
                    log(item.name + ': complete already')
                } else if (item.isInitialized === true) {
                    log(item.name + ': initialized already')
                } else if (isBlockedItem == true) {
                    numBlocked++;
                }
            } else {
                item.process();
                numDone++;
            }
            log(numItems + " - " + numLooped + " - " + numToDo);
            if (numDone >= numToDo) {
                if (numItems > numLooped) {
                    return false;
                } else {
                    return true;
                }
            }
        }
        log("complete: " + numComplete + " items: " + numItems);
        if (numComplete >= numItems) {
            return true;
        } else {
            if ((numComplete + numBlocked) == numItems) {
                isScrexDone();
            }
            return false;
        }
    }

    function init() {
        log("Init Screx!");
        processAllScrex();
    }
    return {
        addFile: addScriptExecutionFile,
        addFunc: addScriptExecutionFunc,
        sjql: setIsJqLdBfWnd,
        sjsdl: setIsJqLdBfDCL,
        items: items,
        init: init
    };
})();
window.addEventListener("load", function() {
    if (typeof jQuery != "undefined") {
        __ez.screxqueue.sjql(true);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    if (typeof jQuery != "undefined") {
        __ez.screxqueue.sjsdl(true);
    }
});
__ez.script.inline = function(e) {
    var scr = document.createElement("script");
    if (typeof e.id !== 'undefined' && e.id !== null && e.id !== "") scr.id = e.id;
    var screxAttr = document.createAttribute("ez-screx");
    screxAttr.value = "true";
    scr.setAttributeNode(screxAttr);
    var txtNode = document.createTextNode(e.innerHTML);
    scr.appendChild(txtNode);
    if (typeof e.parentNode !== 'undefined' && typeof e.nextSibling !== 'undefined') {
        e.parentNode.insertBefore(scr, e.nextSibling);
        e.remove();
    } else {
        document.body.appendChild(scr);
        e.remove();
    }
};
__ez.pel = (function() {
    var pixels = [],
        pxURL = "/porpoiseant/army.gif";

    function AddAndFirePixel(adSlot, pixelData) {
        AddPixel(adSlot, pixelData, 0, 0, 0, 0, 0);
        Fire();
    }

    function AddAndFireOrigPixel(adSlot, pixelData) {
        AddPixel(adSlot, pixelData, 0, 0, 0, 0, 0, true);
        Fire();
    }

    function GetCurrentPixels() {
        return pixels;
    }

    function AddPixel(adSlot, pixelData, revenue, est_revenue, bid_floor_filled, bid_floor_prev, stat_source_id, isOrig) {
        if (!__ez.dot.isDefined(adSlot) || __ez.dot.isAnyDefined(adSlot.getSlotElementId, adSlot.ElementId) == false) {
            return;
        }
        var ad_position_id = parseInt(__ez.dot.getTargeting(adSlot, 'ap'));
        var impId = __ez.dot.getSlotIID(adSlot),
            adUnit = __ez.dot.getAdUnit(adSlot, isOrig);
        var compId = parseInt(__ez.dot.getTargeting(adSlot, "compid"));
        var lineItemId = 0;
        var creativeId = 0;
        var ezimData = getEzimData(adSlot);
        if (typeof ezimData == 'object') {
            if (ezimData.creative_id !== undefined) {
                creativeId = ezimData.creative_id;
            }
            if (ezimData.line_item_id !== undefined) {
                lineItemId = ezimData.line_item_id;
            }
        }
        if (__ez.dot.isDefined(impId, adUnit) && __ez.dot.isValid(pixelData)) {
            pixels.push({
                type: "impression",
                impression_id: impId,
                domain_id: __ez.dot.getDID(),
                unit: adUnit,
                t_epoch: __ez.dot.getEpoch(0),
                revenue: revenue,
                est_revenue: est_revenue,
                ad_position: ad_position_id,
                ad_size: "",
                bid_floor_filled: bid_floor_filled,
                bid_floor_prev: bid_floor_prev,
                stat_source_id: stat_source_id,
                country_code: __ez.dot.getCC(),
                pageview_id: __ez.dot.getPageviewId(),
                comp_id: compId,
                line_item_id: lineItemId,
                creative_id: creativeId,
                data: __ez.dot.dataToStr(pixelData),
                is_orig: isOrig || __ez.template.isOrig,
            });
        }
    }

    function AddPixelById(impFullId, pixelData, isOrig) {
        var vals = impFullId.split('/');
        if (__ez.dot.isDefined(impFullId) && vals.length === 3 && __ez.dot.isValid(pixelData)) {
            var adUnit = vals[0],
                impId = vals[2];
            pixels.push({
                type: "impression",
                impression_id: impId,
                domain_id: __ez.dot.getDID(),
                unit: adUnit,
                t_epoch: __ez.dot.getEpoch(0),
                pageview_id: __ez.dot.getPageviewId(),
                data: __ez.dot.dataToStr(pixelData),
                is_orig: isOrig || __ez.template.isOrig
            });
        }
    }

    function Fire() {
        if (typeof document.visibilityState !== 'undefined' && document.visibilityState === "prerender") return;
        if (__ez.dot.isDefined(pixels) && pixels.length > 0) {
            var allPixels = [pixels.filter(function(pixel) {
                return pixel.is_orig
            }), pixels.filter(function(pixel) {
                return !pixel.is_orig
            })];
            allPixels.forEach(function(pixels) {
                while (pixels.length > 0) {
                    var isOrig = pixels[0].is_orig || false;
                    var j = 5;
                    if (j > pixels.length) {
                        j = pixels.length;
                    }
                    var pushPixels = pixels.splice(0, j);
                    var pixelURL = __ez.dot.getURL(pxURL) + "?orig=" + (isOrig === true ? 1 : 0) + "&sts=" + btoa(JSON.stringify(pushPixels));
                    if (typeof window.isAmp !== 'undefined' && isAmp && typeof window._ezaq !== 'undefined' && _ezaq.hasOwnProperty("domain_id")) {
                        pixelURL += "&visit_uuid=" + _ezaq['visit_uuid'];
                    }
                    __ez.dot.Fire(pixelURL);
                }
            })
        }
        pixels = [];
    }

    function getEzimData(adSlot) {
        if (typeof _ezim_d == "undefined") {
            return false
        }
        var adUnitName = __ez.dot.getAdUnitPath(adSlot).split('/').pop();
        if (typeof _ezim_d === 'object' && _ezim_d.hasOwnProperty(adUnitName)) {
            return _ezim_d[adUnitName];
        }
        for (var ezimKey in _ezim_d) {
            if (ezimKey.split('/').pop() === adUnitName) {
                return _ezim_d[ezimKey];
            }
        }
        return false;
    }
    return {
        Add: AddPixel,
        AddAndFire: AddAndFirePixel,
        AddAndFireOrig: AddAndFireOrigPixel,
        AddById: AddPixelById,
        Fire: Fire,
        GetPixels: GetCurrentPixels,
    };
})();
window.ezoChar = function(slot, elm) {
    var h = elm.style.minHeight.slice(0, -2);
    var w = elm.style.minWidth.slice(0, -2);
    var size = window.ezoCharSize(h, w);
    if (size == '0') {
        return false;
    }
    var rand_num = Math.floor(Math.random() * 2) + 1;
    var url = 'https://go.ezodn.com/charity/https/charity-ads.s3.amazonaws.com/charity_ads/' + size + '.png';
    var click_url = 'https://fundraise.pencilsofpromise.org/campaign/a-teachers-promise/c335183';
    if (rand_num === 1) {
        url = 'https://go.ezodn.com/charity/https/charity-ads.s3.amazonaws.com/charity_ads/' + size + '-mdcc' + '.png';
        click_url = 'https://mariadroste.org/communications/mental-health-awareness-month-2021/';
    }
    var div = document.createElement('div');
    div.id = elm.id + '_charity';
    innerElm = elm.childNodes[0];
    if (innerElm.tagName.toLowerCase() == 'script') {
        innerElm = elm.childNodes[1];
    }
    if (slot.isEmpty == false || innerElm.innerHTML !== "") {
        return true
    }
    var a = document.createElement('a');
    a.href = click_url;
    var img = document.createElement('img');
    img.src = url;
    a.appendChild(img);
    div.appendChild(a);
    innerElm.appendChild(div);
    __ez.pel.Add(slot, [(new __ezDotData("stat_source_id", 11303))], 0, 0, 0, slot.Targeting.br1[0], 11303);
    return true;
};
window.ezoCharSize = function(h, w) {
    if (w >= 728) {
        if (h >= 600) {
            return '300x600';
        }
        return '728x90';
    }
    if (w >= 300) {
        if (h >= 600) {
            return '300x600';
        } else if (h >= 250) {
            return '300x250';
        } else if (h >= 50) {
            return '320x50';
        }
        return '0';
    }
    if (w >= 234) {
        if (h >= 60) {
            return '234x60';
        }
        return '0';
    }
    if (w >= 160) {
        if (h >= 90) {
            return '160x90';
        }
        return '0';
    }
    if (w >= 100) {
        if (h >= 480) {
            return '100x480';
        } else if (h >= 240) {
            return '100x240';
        }
        return '0';
    }
    return '0';
};
var _qevents = _qevents || [];
(function() {
    var elem = document.createElement('script');
    elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
    elem.async = true;
    elem.type = "text/javascript";
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt)
})();
_qevents.push({
    qacct: "p-31iz6hfFutd16",
    labels: "Domain." + _audins_dom + ",DomainId." + _audins_did
});
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('ezRiveted', [], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.riveted = factory();
    }
}(this, function() {
    var riveted = (function() {
        var started = false,
            stopped = false,
            turnedOff = false,
            clockTime = 0,
            startTime = new Date(),
            clockTimer = null,
            idleTimer = null,
            sendEvent, sendUserTiming, reportInterval, scrollDepth = 0,
            idleTimeout, scrollTimer = 0;

        function init(options) {
            options = options || {};
            reportInterval = parseInt(options.reportInterval, 10) || 5;
            idleTimeout = parseInt(options.idleTimeout, 10) || 30;
            if (typeof options.eventHandler == 'function') {
                sendEvent = options.eventHandler;
            }
            if (typeof options.userTimingHandler == 'function') {
                sendUserTiming = options.userTimingHandler;
            }
            addListener(document, 'keydown', trigger);
            addListener(document, 'click', trigger);
            addListener(document, 'touchstart', trigger);
            addListener(window, 'mousemove', throttle(trigger, 500));
            addListener(window, 'scroll', triggerScroll);
            addListener(document, 'visibilitychange', visibilityChange);
            addListener(document, 'webkitvisibilitychange', visibilityChange);
        }

        function triggerScroll() {
            if (scrollTimer > 0) {
                clearTimeout(scrollTimer);
            }
            setIdle();
            scrollTimer = setTimeout(function() {
                stopScroll();
            }, 50);
        }

        function stopScroll() {
            clearTimeout(scrollTimer);
            trigger();
            setScrollDepth();
        }

        function setScrollDepth() {
            window._ezfd.measure(function() {
                var h = document.documentElement,
                    b = document.body,
                    st = 'scrollTop',
                    sh = 'scrollHeight';
                var percent = 0;
                if (b.clientHeight < h.clientHeight) {
                    percent = 100 * ((h[st] || b[st]) + b.clientHeight) / (h[sh] || b[sh]);
                } else {
                    percent = 100 * ((h[st] || b[st]) + h.clientHeight) / (h[sh] || b[sh]);
                }
                if (percent > scrollDepth) {
                    scrollDepth = percent;
                }
            });
        }

        function throttle(func, wait) {
            var context, args, result;
            var timeout = null;
            var previous = 0;
            var later = function() {
                previous = new Date;
                timeout = null;
                result = func.apply(context, args);
            };
            return function() {
                var now = new Date;
                if (!previous) previous = now;
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0) {
                    clearTimeout(timeout);
                    timeout = null;
                    previous = now;
                    result = func.apply(context, args);
                } else if (!timeout) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        }

        function addListener(element, eventName, handler) {
            if (element.addEventListener) {
                element.addEventListener(eventName, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + eventName, handler);
            } else {
                element['on' + eventName] = handler;
            }
        }
        sendUserTiming = function(timingValue) {};
        sendEvent = function(time) {};

        function setIdle() {
            clearTimeout(idleTimer);
            stopClock();
        }

        function visibilityChange() {
            if (document.hidden || document.webkitHidden) {
                setIdle();
            }
        }

        function clock() {
            clockTime += 0.1;
            clockTime = Math.round(clockTime * 100) / 100;
            if (clockTime > 0 && (clockTime % reportInterval === 0)) {
                sendEvent(clockTime);
            }
        }

        function stopClock() {
            stopped = true;
            clearInterval(clockTimer);
        }

        function turnOff() {
            setIdle();
            turnedOff = true;
        }

        function turnOn() {
            turnedOff = false;
        }

        function restartClock() {
            stopped = false;
            clearInterval(clockTimer);
            clockTimer = setInterval(clock, 100);
        }

        function getEngagedTime() {
            return Math.round(clockTime);
        }

        function getScrollDepth() {
            return Math.round(scrollDepth);
        }

        function startRiveted() {
            var currentTime = new Date();
            var diff = currentTime - startTime;
            started = true;
            sendUserTiming(diff);
            clockTimer = setInterval(clock, 1000);
        }

        function resetRiveted() {
            startTime = new Date();
            clockTime = 0;
            started = false;
            stopped = false;
            clearInterval(clockTimer);
            clearTimeout(idleTimer);
        }

        function trigger() {
            if (turnedOff) {
                return;
            }
            if (!started) {
                startRiveted();
            }
            if (stopped) {
                restartClock();
            }
            clearTimeout(idleTimer);
            idleTimer = setTimeout(setIdle, idleTimeout * 1000 + 100);
        }
        return {
            init: init,
            trigger: trigger,
            setIdle: setIdle,
            on: turnOn,
            off: turnOff,
            reset: resetRiveted,
            getTime: getEngagedTime,
            getScrollDepth: getScrollDepth
        };
    })();
    return riveted;
}));
var ezux = (function() {
    if (typeof _ezaq === "undefined" || !_ezaq.hasOwnProperty("page_view_id")) {
        return;
    }
    var storedPerf = false;
    var autoTimer = 0,
        autoUploadMs = 15000,
        debug = ez_getQueryString('ezux_debug') == "1",
        counts = {
            copyPaste: 0,
            shares: 0
        },
        last = {
            copyPasteCount: 0,
            engagedTime: 0,
            isEngagedPage: 0,
            scrollDepth: 0,
            unloadTime: 0,
            shareCount: 0
        },
        current = {
            et: 0,
            tos: 0,
        },
        maxEngagedSeconds = 1800,
        pvID = _ezaq["page_view_id"],
        secondsUntilEngaged = 10,
        startTime = new Date(),
        timer, totals = {
            engagedAdded: 0,
            tosAdded: 0
        },
        unloadedTimeDelayMs = 3000,
        visbilityChangeFunc = null;
    var evts = {
        copyPaste: function() {
            counts.copyPaste++;
        },
        mouseOut: function(e) {
            e = e ? e : window.event;
            if (typeof e === 'undefined' || typeof e.target === 'undefined' || typeof e.target.tagName === 'undefined') return;
            if (e.target.tagName.toLowerCase() === "input") return;
            var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if (e.clientX >= (vpWidth - 50)) return;
            if (e.clientY >= 50) return;
            var from = e.relatedTarget || e.toElement;
            if (!from) evts.unload(e);
        },
        load: function(e) {
            storePerformance();
            addPaintTimings();
            addConnectionInfo();
        },
        unload: function(e) {
            var currentTime = (new Date).getTime();
            if (last.unloadTime === 0 || currentTime > (last.unloadTime + unloadedTimeDelayMs)) {
                storeTimes();
                storePerformance();
                pixels.unloadAll(e);
                last.unloadTime = currentTime;
            }
        },
        pageshow: function(e) {
            var cnAwesome = getCookieName('ezoawesome'),
                cvAwesome = getCookie(cnAwesome);
            if (cvAwesome.length > 0) {
                log("Bounce (" + cnAwesome + ") detected with val " + cvAwesome);
                storeAdBounce(cvAwesome);
                expireCookie(cnAwesome);
            }
        },
        pageshare: function(e) {
            counts.shares++;
            pixels.addPageShares();
        },
        addUnloadTime: function(e) {
            pixels.addUnloadTime();
        }
    };
    var pixels = {
        addCopyPaste: function() {
            if (counts.copyPaste > 0 && counts.copyPaste != last.copyPasteCount) {
                __ez.bit.Add(pvID, [(new __ezDotData('copy_paste_count', counts.copyPaste))]);
                last.copyPasteCount = counts.copyPaste;
            }
        },
        addDeviceSizes: function() {
            log("Storing device sizes");
            __ez.bit.Add(pvID, [(new __ezDotData('device_width', screen.width)), (new __ezDotData('device_height', screen.height))]);
        },
        addEngagedTimes: function(t) {
            if (t != last.engagedTime) {
                __ez.bit.Add(pvID, [(new __ezDotData('engaged_time', t))]);
                last.engagedTime = t;
            }
        },
        addIsEngagedPage: function(t) {
            if (last.isEngagedPage == 0 && isEngagedPage(t)) {
                __ez.bit.Add(pvID, [(new __ezDotData('is_engaged_page', 1))]);
                last.isEngagedPage = 1;
            }
        },
        addIsFirstEngagedPage: function(t) {
            var ckName = getCookieName("ezux_ifep");
            if (getCookie(ckName).length == 0 && isEngagedPage(t)) {
                log("Adding first engaged cookie");
                __ez.ck.setByCat(ckName + "=true", 3);
                __ez.bit.Add(pvID, [(new __ezDotData('is_first_engaged_page', 1))]);
            }
        },
        addLanguage: function() {
            log("Storing language tag");
            var languageTag = window.navigator.userLanguage || window.navigator.language;
            var tagArray = languageTag.split('-');
            if (typeof languageTag !== 'undefined' && languageTag !== '') {
                if (languageTag.length > 36) {
                    languageTag = languageTag.substring(0, 36);
                }
                __ez.bit.Add(pvID, [(new __ezDotData('language_tag', languageTag))]);
            }
            if (tagArray.length >= 2) {
                var primaryLanguageSubtag = tagArray[0];
                if (primaryLanguageSubtag > 8) {
                    primaryLanguageSubtag = primaryLanguageSubtag.substring(0, 8);
                }
                __ez.bit.Add(pvID, [(new __ezDotData('language_primary_subtag', primaryLanguageSubtag))]);
            }
        },
        addLocalTime: function() {
            log("Storing local time");
            var now = new Date();
            var tzOffset = now.getTimezoneOffset();
            if (tzOffset < -840 || tzOffset > 720) {
                return
            }
            var lDate = new Date(now - (tzOffset * 60000));
            if ((Math.abs(lDate - now) / 3600000) > 14) {
                return
            }
            if (!Date.prototype.toISOString) {
                (function() {
                    function pad(number) {
                        if (number < 10) {
                            return '0' + number;
                        }
                        return number;
                    }
                    Date.prototype.toISOString = function() {
                        return this.getUTCFullYear() +
                            '-' + pad(this.getUTCMonth() + 1) +
                            '-' + pad(this.getUTCDate()) +
                            'T' + pad(this.getUTCHours()) +
                            ':' + pad(this.getUTCMinutes()) +
                            ':' + pad(this.getUTCSeconds()) +
                            '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
                            'Z';
                    };
                }());
            }
            var localDate = lDate.toISOString().slice(0, 19).replace('T', ' ').split(' ')[0];
            if (localDate.length < 1 || localDate[0] == '0') {
                return
            }
            var localHour = now.getHours();
            var localDay = now.getDay();
            __ez.bit.Add(pvID, [(new __ezDotData('t_local_date', localDate)), (new __ezDotData('t_local_hour', localHour)), (new __ezDotData('t_local_day_of_week', localDay)), (new __ezDotData('t_local_timezone', tzOffset))]);
        },
        addScrollDepth: function() {
            var sd = timer.getScrollDepth();
            if (sd != last.scrollDepth) {
                __ez.bit.Add(pvID, [(new __ezDotData('scroll_percent_vertical', sd))]);
                last.scrollDepth = sd;
            }
        },
        addPageShares: function() {
            if (counts.shares > 0 && counts.shares != last.shareCount) {
                log("[Page Share] Store page shares: " + counts.shares);
                __ez.bit.Add(pvID, [(new __ezDotData('share', counts.shares))]);
                last.shareCount = counts.shares;
            }
        },
        addUnloadTime: function() {
            __ez.bit.Add(pvID, [(new __ezDotData('t_unload', (new Date()).getTime()))]);
            __ez.bit.Fire();
        },
        unloadAll: function(e) {
            var t = timer.getTime();
            pixels.addEngagedTimes(t);
            pixels.addCopyPaste();
            pixels.addScrollDepth();
            pixels.addIsEngagedPage(t);
            pixels.addIsFirstEngagedPage(t);
            pixels.addPageShares();
            log('Unload (' + e.type + ')');
            firePixels();
        }
    };

    function init() {
        initVars();
        pixels.addDeviceSizes();
        pixels.addLocalTime();
        pixels.addLanguage();
        attachListeners();
        startRiveted();
        startAutomaticUnloadTimer();
    }

    function initVars() {
        autoTimer = 0, autoUploadMs = 15000, debug = ez_getQueryString('ezux_debug') == "1", counts = {
            copyPaste: 0,
            shares: 0
        }, last = {
            copyPasteCount: 0,
            engagedTime: 0,
            isEngagedPage: 0,
            scrollDepth: 0,
            unloadTime: 0,
            shareCount: 0
        }, current = {
            et: getCookie(getCookieName("ezux_et")),
            tos: getCookie(getCookieName("ezux_tos")),
        }, maxEngagedSeconds = 1800, pvID = _ezaq["page_view_id"], secondsUntilEngaged = 10, startTime = new Date(), timer, totals = {
            engagedAdded: 0,
            tosAdded: 0
        }, unloadedTimeDelayMs = 3000, visbilityChangeFunc = null;
    }

    function destroy() {
        stopAutomaticUnloadTimer();
        removeListeners();
        stopRiveted();
    }

    function addListener(element, eventName, handler) {
        if (element.addEventListener) {
            element.addEventListener(eventName, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, handler);
        } else {
            element['on' + eventName] = handler;
        }
    }

    function removeListener(element, eventName, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(eventName, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + eventName, handler);
        } else {
            delete element['on' + eventName];
        }
    }

    function attachListeners() {
        addListener(document, 'blur', evts.unload);
        addListener(document, 'ezPageUnload', evts.unload);
        addListener(document, 'copy', evts.copyPaste);
        addListener(document, 'cut', evts.copyPaste);
        addListener(document, 'mouseout', evts.mouseOut);
        addListener(document, 'paste', evts.copyPaste);
        addListener(window, 'beforeunload', evts.unload);
        addListener(window, 'beforeunload', evts.addUnloadTime);
        addListener(window, 'blur', evts.unload);
        addListener(window, 'pagehide', evts.unload);
        addListener(window, 'unload', evts.unload);
        if (document.readyState === 'complete') {
            evts.load();
        } else {
            addListener(window, 'load', evts.load);
        }
        addListener(window, 'pageshow', evts.pageshow);
        attachPageShareListeners();
        if (document.addEventListener) {
            var visibilityChangeEventInfo = getVisibilityChangeEventInfo();
            visbilityChangeFunc = function(e) {
                if (document[visibilityChangeEventInfo.hiddenPropName]) {
                    evts.unload(e);
                } else {
                    evts.pageshow(e);
                }
            };
            document.addEventListener(visibilityChangeEventInfo.visibilityChangeEventName, visbilityChangeFunc, false);
        } else {
            document.attachEvent("onvisibilitychange", evts.unload);
        }
    }

    function getVisibilityChangeEventInfo() {
        var hiddenPropName, visibilityChangeEventName;
        if (typeof document.hidden !== "undefined") {
            hiddenPropName = "hidden";
            visibilityChangeEventName = "visibilitychange";
        } else if (typeof document.msHidden !== "undefined") {
            hiddenPropName = "msHidden";
            visibilityChangeEventName = "msvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") {
            hiddenPropName = "webkitHidden";
            visibilityChangeEventName = "webkitvisibilitychange";
        }
        return {
            hiddenPropName: hiddenPropName,
            visibilityChangeEventName: visibilityChangeEventName
        };
    }

    function removeListeners() {
        removeListener(document, 'blur', evts.unload);
        removeListener(document, 'copy', evts.copyPaste);
        removeListener(document, 'cut', evts.copyPaste);
        removeListener(document, 'mouseout', evts.mouseOut);
        removeListener(document, 'paste', evts.copyPaste);
        removeListener(window, 'beforeunload', evts.unload);
        removeListener(window, 'beforeunload', evts.addUnloadTime);
        removeListener(window, 'blur', evts.unload);
        removeListener(window, 'pagehide', evts.unload);
        removeListener(window, 'unload', evts.unload);
        removeListener(window, 'load', evts.load);
        removeListener(window, 'pageshow', evts.pageshow);
        removePageShareListeners();
        if (document.removeEventListener) {
            var visibilityChangeEventInfo = getVisibilityChangeEventInfo();
            document.removeEventListener(visibilityChangeEventInfo.visibilityChangeEventName, visbilityChangeFunc, false);
        } else {
            document.detachEvent("onvisibilitychange", evts.unload);
        }
    }

    function attachPageShareListeners() {
        var socialLinks = getSocialLinks();
        if (debug) {
            var links = socialLinks.map(function(elm) {
                return elm.href;
            });
            if (typeof links !== "undefined") {
                log("[Page Share] " + links.join(', '));
            }
        }
        for (var i = 0; i < socialLinks.length; i++) {
            addListener(socialLinks[i], 'click', evts.pageshare);
        }
    }

    function removePageShareListeners() {
        var socialLinks = getSocialLinks();
        for (var i = 0; i < socialLinks.length; i++) {
            removeListener(socialLinks[i], 'click', evts.pageshare);
        }
    }

    function getSocialLinks() {
        var socialLinks = [];
        socialLinks.push.apply(socialLinks, document.querySelectorAll('a[href*="facebook.com/sharer/sharer.php"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('a[href*="facebook.com/sharer.php"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('a[href*="facebook.com/share.php"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('div[class*="fb-share-button"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('a[href*="twitter.com/share"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('a[href*="twitter.com/intent/tweet"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('iframe[class*="twitter-share-button"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('a[href*="plus.google.com/share"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('iframe[src*="apis.google.com/u/0/se/0/_/+1/sharebutton"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('a[href*="linkedin.com/cws/share"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('a[href*="linkedin.com/shareArticle"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('a[href*="pinterest.com/pin/create/button"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('a[href*="pinterest.com/pin/create/bookmarklet"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('a[href*="tumblr.com/share/link"]'));
        socialLinks.push.apply(socialLinks, document.querySelectorAll('a[href*="reddit.com/submit"]'));
        return socialLinks;
    }

    function expireCookie(cname) {
        log("Deleting " + cname);
        document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function getCookieName(cname) {
        return cname + "_" + did;
    }

    function getSecondsOnPage() {
        return (new Date() - startTime) / 1000;
    }

    function firePixels() {
        __ez.bit.Fire();
        __ez.pel.Fire();
    }

    function isEngagedPage(t) {
        return t >= secondsUntilEngaged;
    }

    function log(msg) {
        if (debug) console.info("[UX] " + msg);
    }

    function startRiveted() {
        if (typeof define === 'function' && define.amd) {
            require(['ezRiveted'], function(riveted) {
                initializeTimer(riveted);
            })
        } else {
            initializeTimer(riveted);
        }
    }

    function stopRiveted() {
        if (typeof riveted !== "undefined") {
            timer = riveted;
            timer.reset();
        }
    }

    function initializeTimer(riveted) {
        timer = riveted;
        timer.init({
            reportInterval: 5,
            idleTimeout: 30,
            eventHandler: function(dataSeconds) {
                log("Event: " + parseInt(dataSeconds) + " --- Engaged Time: " + parseInt(timer.getTime()));
                if (timer.getTime() >= maxEngagedSeconds) {
                    log('Turning off timer');
                    evts.unload({
                        type: 'max'
                    });
                    timer.off();
                }
            }
        });
    }

    function startAutomaticUnloadTimer() {
        autoTimer = setInterval(function() {
            evts.unload({
                type: 'auto'
            });
            if (getSecondsOnPage() > maxEngagedSeconds) {
                log('Turning off auto');
                clearInterval(autoTimer);
            }
        }, autoUploadMs);
    }

    function stopAutomaticUnloadTimer() {
        evts.unload({
            type: 'auto'
        });
        clearInterval(autoTimer);
    }

    function storePerformance() {
        log("[Performance] Store performance");
        if ((storedPerf != true && window.performance)) {
            var performanceNavigationTimingEntry = performance.getEntriesByType("navigation")[0];
            if (performanceNavigationTimingEntry && performanceNavigationTimingEntry.connectEnd > 0) {
                var nav_start = performance.timeOrigin;
                var connect = performanceNavigationTimingEntry.connectEnd;
                var resp_start = performanceNavigationTimingEntry.responseStart;
                var resp_end = performanceNavigationTimingEntry.responseEnd;
                var interactive = performanceNavigationTimingEntry.domInteractive;
                var contloaded = performanceNavigationTimingEntry.domContentLoadedEventEnd;
                var complete = performanceNavigationTimingEntry.domComplete;
                if (nav_start > 0 && complete > 0) {
                    var navtye_string = performanceNavigationTimingEntry.type
                    var navtype = 0;
                    var redirect_count = performanceNavigationTimingEntry.redirectCount;
                    switch (navtye_string) {
                        case "navigate":
                            navtype = 0;
                            break
                        case "reload":
                            navtype = 1;
                            break;
                        case "back_forward":
                            navtype = 2;
                            break
                        case "prerender":
                            navtype = 255;
                            break
                        default:
                            navtype = 255;
                            break
                    }
                    __ez.bit.Add(pvID, [(new __ezDotData('navigation_type', navtype)), (new __ezDotData('redirect_count', redirect_count))]);
                    perf_vals = {};
                    var perf_nav_to_connect = Math.round(connect);
                    var perf_connect_to_resp_start = Math.round(resp_start);
                    var perf_resp_time = Math.round(resp_end - resp_start);
                    var perf_interactive = Math.round(interactive - resp_end);
                    var perf_contentloaded = Math.round(contloaded - resp_end);
                    var perf_complete = Math.round(complete - resp_end);
                    __ez.bit.Add(pvID, [(new __ezDotData('perf_is_tracked', 1)), (new __ezDotData('perf_nav_to_connect', perf_nav_to_connect)), (new __ezDotData('perf_connect_to_resp_start', perf_connect_to_resp_start)), (new __ezDotData('perf_resp_time', perf_resp_time)), (new __ezDotData('perf_interactive', perf_interactive)), (new __ezDotData('perf_contentloaded', perf_contentloaded)), (new __ezDotData('perf_complete', perf_complete))]);
                    log("[Performance] perf_nav_to_connect: " + perf_nav_to_connect);
                    log("[Performance] perf_connect_to_resp_start: " + perf_connect_to_resp_start);
                    log("[Performance] perf_resp_time: " + perf_resp_time);
                    log("[Performance] perf_interactive: " + perf_interactive);
                    log("[Performance] perf_contentloaded: " + perf_contentloaded);
                    log("[Performance] perf_complete: " + perf_complete);
                    storedPerf = true;
                }
            }
        }
    }

    function storeTimes() {
        var ckEt = getCookieName("ezux_et"),
            ckTos = getCookieName("ezux_tos"),
            et = timer.getTime() - totals.engagedAdded,
            tos = getSecondsOnPage() - totals.tosAdded;
        if (et == last.engagedTime) {
            et = 0;
        }
        current.et = parseInt(et) + parseInt(current.et == "" ? 0 : current.et);
        current.tos = parseInt(tos) + parseInt(current.tos == "" ? 0 : current.tos);
        log("[Times] Total Engaged: " + current.et + " (+" + et + ")");
        log("[Times] Total TOS: " + current.tos + " (+" + tos + ")");
        __ez.ck.setByCat(ckEt + "=" + current.et, 3);
        __ez.ck.setByCat(ckTos + "=" + current.tos, 3);
        totals.engagedAdded += et;
        totals.tosAdded += tos;
    }

    function storeAdBounce(cv) {
        var vals = cv.split(' ');
        if (vals.length !== 2) {
            log("Invalid ezoawesome cookie value");
        }
        var impId = vals[0],
            clickTime = vals[1];
        if (isNaN(clickTime)) {
            return;
        }
        var bounceTime = Math.floor((Date.now() - clickTime) / 1000);
        __ez.pel.AddById(impId, [(new __ezDotData('click_bounce_time', bounceTime))]);
        log("[Bounce] impId: " + impId);
        log("[Bounce] bounceTime: " + bounceTime);
    }

    function addPaintTimings() {
        if (typeof performance !== 'undefined' && performance !== null) {
            var paintTimings = performance.getEntriesByType('paint');
            var fp = paintTimings.find(function(timing) {
                return timing.name === 'first-paint'
            });
            var fcp = paintTimings.find(function(timing) {
                return timing.name === 'first-contentful-paint'
            });
            if (typeof fp !== "undefined" && fp !== null) {
                var fpTime = Math.round(fp.startTime);
                __ez.bit.Add(pvID, [(new __ezDotData('first_paint', fpTime))]);
                log("first_paint: " + fpTime);
            }
            if (typeof fcp !== "undefined" && fcp !== null) {
                var fcpTime = Math.round(fcp.startTime);
                __ez.bit.Add(pvID, [(new __ezDotData('first_contentful_paint', fcpTime))]);
                log("first_contentful_paint: " + fcpTime);
            }
        }
    }

    function addConnectionInfo() {
        var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (typeof connection !== "undefined" && connection !== null) {
            var type = connection.effectiveType;
            var downlink = connection.downlink;
            var rtt = connection.rtt;
            if (typeof type !== "undefined" && type !== null) {
                __ez.bit.Add(pvID, [(new __ezDotData('connection_effective_type', type))]);
                log("connection_effective_type: " + type);
            }
            if (typeof downlink !== "undefined" && downlink !== null) {
                __ez.bit.Add(pvID, [(new __ezDotData('connection_downlink', downlink))]);
                log("connection_downlink: " + downlink);
            }
            if (typeof rtt !== "undefined" && rtt !== null) {
                __ez.bit.Add(pvID, [(new __ezDotData('connection_rtt', rtt))]);
                log("connection_rtt: " + rtt);
            }
        }
    }
    init();
    return {
        init: init,
        destroy: destroy
    };
})();

function ezoicSiteSpeed(objOrFunction, evnt, name, func) {
    function ReturnJQueryOrNull() {
        if (typeof jQuery !== "undefined") {
            return jQuery;
        } else if (typeof $ !== "undefined") {
            return $;
        }
        return null;
    }

    function IsJQueryFunction(func) {
        return (typeof func === 'function' && typeof func.fn === 'object' && typeof func.fn.jquery === 'string');
    }

    function IsJQueryObject(obj) {
        var j = ReturnJQueryOrNull();
        return Boolean(obj && j && IsJQueryFunction(j) && (obj instanceof j || obj.constructor.prototype.jquery));
    }
    var isDocumentDotReady = false;
    if (name === "jQuery-document-dot-ready") {
        isDocumentDotReady = true;
        name = "jQuery-document-ready";
    }
    var obj = null;
    var objFunc = null;
    if (objOrFunction && typeof(objOrFunction.objOrFunction) != 'undefined' && typeof(objOrFunction.function) === 'string' && typeof(objOrFunction.object) != 'undefined') {
        obj = objOrFunction.object
        objFunc = objOrFunction.function
        objOrFunction = objOrFunction.objOrFunction;
    }
    if (typeof func !== 'function') {
        if (obj && objFunc) {
            return obj[objFunc](func);
        } else if (typeof objOrFunction === 'function') {
            return objOrFunction(func);
        }
        return;
    }
    if (name === "jQuery-document-ready" || name === "jQuery-window-load") {
        if (objOrFunction === null) {
            __ez.screxqueue.addFunc(null, name, func, [], false, [evnt]);
            var j = ReturnJQueryOrNull();
            return (j ? j(document) : j);
        } else if (objOrFunction && IsJQueryFunction(objOrFunction)) {
            __ez.screxqueue.addFunc(null, name, func, [], false, [evnt]);
            return objOrFunction(document);
        } else if (objOrFunction && IsJQueryObject(objOrFunction)) {
            __ez.screxqueue.addFunc(null, name, func, [], false, [evnt]);
            return objOrFunction;
        } else {
            if (isDocumentDotReady) {
                return objOrFunction.ready(func);
            } else if (name === "jQuery-window-load") {
                return objOrFunction.load(func);
            }
            if (obj && objFunc) {
                if (arguments.length > 4) {
                    return obj[objFunc](func, ...Array.from(arguments).slice(4))
                }
                return obj[objFunc](func);
            }
            if (arguments.length > 4) {
                return objOrFunction(func, ...Array.from(arguments).slice(4))
            }
            return objOrFunction(func);
        }
    } else if (name === "dom-content-loaded-listener") {
        if (objOrFunction === null || objOrFunction === window || objOrFunction === document) {
            __ez.screxqueue.addFunc(null, name, func, [], false, [evnt]);
            return;
        } else {
            return objOrFunction.addEventListener("DOMContentLoaded", func);
        }
    } else if (name === "window-load-listener") {
        if (objOrFunction === null || objOrFunction === window || objOrFunction === document) {
            __ez.screxqueue.addFunc(null, name, func, [], false, [evnt]);
            return;
        } else {
            return objOrFunction.addEventListener("load", func);
        }
    }
    __ez.screxqueue.addFunc(null, name, func, [], false, [evnt]);
}
__ez.scxr = {
    getDW: function(a) {
        return (a === document) ? __ez.scxr : a;
    },
    write: function(str) {
        function InsertAdjacent(str) {
            var scr = document.currentScript;
            scr.insertAdjacentHTML("afterend", str)
        }

        function decodeHTML(html) {
            var txt = document.createElement('textarea');
            txt.innerHTML = html;
            return txt.value;
        }
        if ('currentScript' in document) {
            var scriptRe = new RegExp(/([\s\S]*?)(<script[^>]*>)([\s\S]*?)(<\/script\s*>)/, 'g');
            if (typeof str === "string") {
                var scriptMatch = str.matchAll(scriptRe);
                if (scriptMatch) {
                    let matchIt = scriptMatch.next();
                    var unprocessedStr = str;
                    while (!matchIt.done) {
                        if (matchIt.value[1]) {
                            InsertAdjacent(matchIt.value[1]);
                        }
                        var sNew = document.createElement("script");
                        var urlRe = /src=["']([^\s]+?[^\\])["']/;
                        var urlMatch = matchIt.value[2].match(urlRe);
                        if (urlMatch) {
                            sNew.src = decodeHTML(urlMatch[1]);
                        } else {
                            var inlineScript = document.createTextNode(matchIt.value[3]);
                            sNew.appendChild(inlineScript);
                        }
                        var typeRe = /type=["\']([^\'"\s]+)["\']/;
                        var typeMatch = matchIt.value[2].match(typeRe);
                        sNew.type = typeMatch ? typeMatch[1] : "text/javascript";
                        var idRe = /id=["\']([^\'"\s]+)["\']/;
                        var idMatch = matchIt.value[2].match(idRe);
                        if (idMatch) {
                            sNew.id = idMatch[1];
                        }
                        if (typeof document.currentScript.parentNode !== undefined && typeof document.currentScript.nextSibling !== undefined) {
                            document.currentScript.parentNode.insertBefore(sNew, document.currentScript.nextSibling);
                        } else {
                            var s0 = document.getElementsByTagName('script')[0];
                            s0.parentNode.insertBefore(sNew, s0);
                        }
                        unprocessedStr = unprocessedStr.replace(matchIt.value[0], '');
                        matchIt = scriptMatch.next();
                    }
                    InsertAdjacent(unprocessedStr);
                } else {
                    InsertAdjacent(str);
                }
            } else {
                InsertAdjacent(str);
            }
        } else {
            document.write(str);
        }
    }
};

function ezoicDocumentWrite(ob, str) {
    if (arguments.length === 1) {
        str = ob;
    } else if (typeof ob !== 'undefined' && ob !== document && ob.hasOwnProperty("write") === true) {
        __ez.screxqueue.addFunc(null, "custom-write", ob.write(str), [], false, []);
        return;
    }
    if ('currentScript' in document) {
        var scr = document.currentScript;
        scr.insertAdjacentHTML("afterend", str);
    } else {
        document.write(str);
    }
}
var __ezScrexFired = false;

function __ezScrexify() {
    if (__ezScrexFired === false) {
        _defer_wait = [];
        for (var _screx_scripts = document.querySelectorAll("script[type='text/ez-screx']"), _screx_wait = [], i = 0; i < _screx_scripts.length; i++) {
            var _screx_name = "screx-" + i,
                _screx_waitfor = _screx_wait.slice(),
                _defer_waitfor = _defer_wait.slice(),
                _screx_src = _screx_scripts[i].getAttribute("src");
            if (null == _screx_src || "" === _screx_src) {
                __ez.screxqueue.addFunc(_screx_scripts[i], _screx_name, "__ez.script.inline", _screx_scripts[i], false, _screx_waitfor);
            } else {
                var _screx_async = _screx_scripts[i].getAttribute("async"),
                    _screx_isasync = null != _screx_async && "false" !== _screx_async;
                var _screx_defer = _screx_scripts[i].getAttribute("defer"),
                    _screx_isdefer = null != _screx_defer && "false" !== _screx_defer;
                if (_screx_isasync === true) {
                    __ez.screxqueue.addFile(_screx_scripts[i], _screx_name, _screx_src, false, _screx_waitfor)
                } else if (_screx_isdefer === true) {
                    var pl = document.createElement("link");
                    pl.href = _screx_src;
                    pl.setAttribute("as", "script");
                    pl.setAttribute("rel", "preload");
                    document.getElementsByTagName('head')[0].appendChild(pl);
                    _defer_waitfor = ["deferLoad"].concat(_defer_waitfor);
                    __ez.screxqueue.addFile(_screx_scripts[i], _screx_name, _screx_src, true, _defer_waitfor);
                    _defer_wait.push(_screx_name);
                } else {
                    __ez.screxqueue.addFile(_screx_scripts[i], _screx_name, _screx_src, true, _screx_waitfor);
                    _screx_wait.push(_screx_name);
                }
            }
        }
        __ez.screxqueue.init();
    }
    __ezScrexFired = true;
}
setTimeout(function() {
    isScrexed = true;
    __ezScrexify();
    window.dispatchEvent(new CustomEvent('EzoIvent', {
        detail: [-1, -1]
    }));
}, 5000);
var isScrexed = false;
window.addEventListener('EzoIvent', function(e) {
    var wp = 4;
    if (typeof window["__ez"]["sswp"] != "undefined" && window["__ez"]["sswp"] > 0) {
        wp = window["__ez"]["sswp"];
    }
    if (typeof e.detail[0] !== 'undefined' && e.detail[0] >= wp && isScrexed == false) {
        isScrexed = true;
        __ezScrexify();
    }
});
(function() {
    if (typeof __ez === "undefined" || typeof __ez.queue === "undefined" || typeof __ez.queue.markLoaded !== "function") {
        return;
    }
    __ez.queue.markLoaded("/tardisrocinante/vitals.js");
    __ez.queue.markLoaded("/ezoic/anchorfix.js");
    __ez.queue.markLoaded("/detroitchicago/tulsa.js");
    __ez.queue.markLoaded("/tardisrocinante/lazy_load.js");
    __ez.queue.markLoaded("/detroitchicago/boise.js");
    __ez.queue.markLoaded("/detroitchicago/memphis.js");
    __ez.queue.markLoaded("/porpoiseant/jellyfish.webp");
    __ez.queue.markLoaded("/tardisrocinante/css_onload.js");
    __ez.queue.markLoaded("/detroitchicago/augusta.js");
    __ez.queue.markLoaded("/detroitchicago/minneapolis.js");
    __ez.queue.markLoaded("/detroitchicago/tampa.js");
    __ez.queue.markLoaded("/detroitchicago/wichita.js");
    __ez.queue.markLoaded("/detroitchicago/edmonton.webp");
    __ez.queue.markLoaded("/detroitchicago/rochester.js");
    __ez.queue.markLoaded("/tardisrocinante/screx.js");
    __ez.queue.markLoaded("/detroitchicago/mesa.js");
    __ez.queue.markLoaded("/detroitchicago/raleigh.js");
    __ez.queue.markLoaded("/detroitchicago/audins.js");
    __ez.queue.markLoaded("/tardisrocinante/script_delay.js");
})();