/**
* auikit - v0.0.1 by aliencode
* Copyright 2014 http://aliencode.github.io/
*/

if (function(a, b) {
    function c(a) {
        var b = a.length, c = fb.type(a);
        return fb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }
    function d(a) {
        var b = ob[a] = {};
        return fb.each(a.match(hb) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function e() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = fb.expando + Math.random();
    }
    function f(a, c, d) {
        var e;
        if (d === b && 1 === a.nodeType) if (e = "data-" + c.replace(sb, "-$1").toLowerCase(), 
        d = a.getAttribute(e), "string" == typeof d) {
            try {
                d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : rb.test(d) ? JSON.parse(d) : d;
            } catch (f) {}
            pb.set(a, c, d);
        } else d = b;
        return d;
    }
    function g() {
        return !0;
    }
    function h() {
        return !1;
    }
    function i() {
        try {
            return T.activeElement;
        } catch (a) {}
    }
    function j(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function k(a, b, c) {
        if (fb.isFunction(b)) return fb.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return fb.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (Cb.test(b)) return fb.filter(b, a, c);
            b = fb.filter(b, a);
        }
        return fb.grep(a, function(a) {
            return bb.call(b, a) >= 0 !== c;
        });
    }
    function l(a, b) {
        return fb.nodeName(a, "table") && fb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function m(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function n(a) {
        var b = Nb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function o(a, b) {
        for (var c = a.length, d = 0; c > d; d++) qb.set(a[d], "globalEval", !b || qb.get(b[d], "globalEval"));
    }
    function p(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (qb.hasData(a) && (f = qb.access(a), g = qb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) fb.event.add(b, e, j[e][c]);
            }
            pb.hasData(a) && (h = pb.access(a), i = fb.extend({}, h), pb.set(b, i));
        }
    }
    function q(a, c) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return c === b || c && fb.nodeName(a, c) ? fb.merge([ a ], d) : d;
    }
    function r(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Kb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    function s(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = _b.length; e--; ) if (b = _b[e] + c, 
        b in a) return b;
        return d;
    }
    function t(a, b) {
        return a = b || a, "none" === fb.css(a, "display") || !fb.contains(a.ownerDocument, a);
    }
    function u(b) {
        return a.getComputedStyle(b, null);
    }
    function v(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = qb.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && t(d) && (f[g] = qb.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), 
        (c && "none" !== c || !e) && qb.set(d, "olddisplay", e ? c : fb.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function w(a, b, c) {
        var d = Ub.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function x(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fb.css(a, c + $b[f], !0, e)), 
        d ? ("content" === c && (g -= fb.css(a, "padding" + $b[f], !0, e)), "margin" !== c && (g -= fb.css(a, "border" + $b[f] + "Width", !0, e))) : (g += fb.css(a, "padding" + $b[f], !0, e), 
        "padding" !== c && (g += fb.css(a, "border" + $b[f] + "Width", !0, e)));
        return g;
    }
    function y(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = u(a), g = fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Qb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Vb.test(e)) return e;
            d = g && (fb.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function z(a) {
        var b = T, c = Xb[a];
        return c || (c = A(a, b), "none" !== c && c || (Rb = (Rb || fb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), 
        b = (Rb[0].contentWindow || Rb[0].contentDocument).document, b.write("<!doctype html><html><body>"), 
        b.close(), c = A(a, b), Rb.detach()), Xb[a] = c), c;
    }
    function A(a, b) {
        var c = fb(b.createElement(a)).appendTo(b.body), d = fb.css(c[0], "display");
        return c.remove(), d;
    }
    function B(a, b, c, d) {
        var e;
        if (fb.isArray(b)) fb.each(b, function(b, e) {
            c || bc.test(a) ? d(a, e) : B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== fb.type(b)) d(a, b); else for (e in b) B(a + "[" + e + "]", b[e], c, d);
    }
    function C(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(hb) || [];
            if (fb.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function D(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, fb.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                e(j), !1);
            }), i;
        }
        var f = {}, g = a === sc;
        return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    function E(a, c) {
        var d, e, f = fb.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        return e && fb.extend(!0, a, e), a;
    }
    function F(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes; "*" === j[0]; ) j.shift(), 
        e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
        if (e) for (f in i) if (i[f] && i[f].test(e)) {
            j.unshift(f);
            break;
        }
        if (j[0] in d) g = j[0]; else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break;
                }
                h || (h = f);
            }
            g = g || h;
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0;
    }
    function G(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function H() {
        return setTimeout(function() {
            Bc = b;
        }), Bc = fb.now();
    }
    function I(a, b, c) {
        for (var d, e = (Hc[b] || []).concat(Hc["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function J(a, b, c) {
        var d, e, f = 0, g = Gc.length, h = fb.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Bc || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: fb.extend({}, b),
            opts: fb.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Bc || H(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = fb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (K(k, j.opts.specialEasing); g > f; f++) if (d = Gc[f].call(j, a, k, j.opts)) return d;
        return fb.map(k, I, j), fb.isFunction(j.opts.start) && j.opts.start.call(a, j), 
        fb.fx.timer(fb.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function K(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = fb.camelCase(c), e = b[d], f = a[c], fb.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fb.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function L(a, c, d) {
        var e, f, g, h, i, j, k = this, l = {}, m = a.style, n = a.nodeType && t(a), o = qb.get(a, "fxshow");
        d.queue || (i = fb._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, 
        j = i.empty.fire, i.empty.fire = function() {
            i.unqueued || j();
        }), i.unqueued++, k.always(function() {
            k.always(function() {
                i.unqueued--, fb.queue(a, "fx").length || i.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in c || "width" in c) && (d.overflow = [ m.overflow, m.overflowX, m.overflowY ], 
        "inline" === fb.css(a, "display") && "none" === fb.css(a, "float") && (m.display = "inline-block")), 
        d.overflow && (m.overflow = "hidden", k.always(function() {
            m.overflow = d.overflow[0], m.overflowX = d.overflow[1], m.overflowY = d.overflow[2];
        }));
        for (e in c) if (f = c[e], Dc.exec(f)) {
            if (delete c[e], g = g || "toggle" === f, f === (n ? "hide" : "show")) {
                if ("show" !== f || !o || o[e] === b) continue;
                n = !0;
            }
            l[e] = o && o[e] || fb.style(a, e);
        }
        if (!fb.isEmptyObject(l)) {
            o ? "hidden" in o && (n = o.hidden) : o = qb.access(a, "fxshow", {}), g && (o.hidden = !n), 
            n ? fb(a).show() : k.done(function() {
                fb(a).hide();
            }), k.done(function() {
                var b;
                qb.remove(a, "fxshow");
                for (b in l) fb.style(a, b, l[b]);
            });
            for (e in l) h = I(n ? o[e] : 0, e, k), e in o || (o[e] = h.start, n && (h.end = h.start, 
            h.start = "width" === e || "height" === e ? 1 : 0));
        }
    }
    function M(a, b, c, d, e) {
        return new M.prototype.init(a, b, c, d, e);
    }
    function N(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = $b[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    function O(a) {
        return fb.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var P, Q, R = typeof b, S = a.location, T = a.document, U = T.documentElement, V = a.jQuery, W = a.$, X = {}, Y = [], Z = "2.0.3", $ = Y.concat, _ = Y.push, ab = Y.slice, bb = Y.indexOf, cb = X.toString, db = X.hasOwnProperty, eb = Z.trim, fb = function(a, b) {
        return new fb.fn.init(a, b, P);
    }, gb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, hb = /\S+/g, ib = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, jb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, kb = /^-ms-/, lb = /-([\da-z])/gi, mb = function(a, b) {
        return b.toUpperCase();
    }, nb = function() {
        T.removeEventListener("DOMContentLoaded", nb, !1), a.removeEventListener("load", nb, !1), 
        fb.ready();
    };
    fb.fn = fb.prototype = {
        jquery: Z,
        constructor: fb,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : ib.exec(a), 
                !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof fb ? c[0] : c, fb.merge(this, fb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : T, !0)), 
                    jb.test(e[1]) && fb.isPlainObject(c)) for (e in c) fb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this;
                }
                return f = T.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), 
                this.context = T, this.selector = a, this;
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, 
            this.context = a.context), fb.makeArray(a, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return ab.call(this);
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a];
        },
        pushStack: function(a) {
            var b = fb.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return fb.each(this, a, b);
        },
        ready: function(a) {
            return fb.ready.promise().done(a), this;
        },
        slice: function() {
            return this.pushStack(ab.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        map: function(a) {
            return this.pushStack(fb.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: _,
        sort: [].sort,
        splice: [].splice
    }, fb.fn.init.prototype = fb.fn, fb.extend = fb.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || fb.isFunction(h) || (h = {}), 
        j === i && (h = this, --i); j > i; i++) if (null != (a = arguments[i])) for (c in a) d = h[c], 
        e = a[c], h !== e && (k && e && (fb.isPlainObject(e) || (f = fb.isArray(e))) ? (f ? (f = !1, 
        g = d && fb.isArray(d) ? d : []) : g = d && fb.isPlainObject(d) ? d : {}, h[c] = fb.extend(k, g, e)) : e !== b && (h[c] = e));
        return h;
    }, fb.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            return a.$ === fb && (a.$ = W), b && a.jQuery === fb && (a.jQuery = V), fb;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? fb.readyWait++ : fb.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --fb.readyWait : fb.isReady) || (fb.isReady = !0, a !== !0 && --fb.readyWait > 0 || (Q.resolveWith(T, [ fb ]), 
            fb.fn.trigger && fb(T).trigger("ready").off("ready")));
        },
        isFunction: function(a) {
            return "function" === fb.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
        },
        type: function(a) {
            return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? X[cb.call(a)] || "object" : typeof a;
        },
        isPlainObject: function(a) {
            if ("object" !== fb.type(a) || a.nodeType || fb.isWindow(a)) return !1;
            try {
                if (a.constructor && !db.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (b) {
                return !1;
            }
            return !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        error: function(a) {
            throw new Error(a);
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || T;
            var d = jb.exec(a), e = !c && [];
            return d ? [ b.createElement(d[1]) ] : (d = fb.buildFragment([ a ], b, e), e && fb(e).remove(), 
            fb.merge([], d.childNodes));
        },
        parseJSON: JSON.parse,
        parseXML: function(a) {
            var c, d;
            if (!a || "string" != typeof a) return null;
            try {
                d = new DOMParser(), c = d.parseFromString(a, "text/xml");
            } catch (e) {
                c = b;
            }
            return (!c || c.getElementsByTagName("parsererror").length) && fb.error("Invalid XML: " + a), 
            c;
        },
        noop: function() {},
        globalEval: function(a) {
            var b, c = eval;
            a = fb.trim(a), a && (1 === a.indexOf("use strict") ? (b = T.createElement("script"), 
            b.text = a, T.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(kb, "ms-").replace(lb, mb);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (;g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : eb.call(a);
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fb.merge(d, "string" == typeof a ? [ a ] : a) : _.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : bb.call(b, a, c);
        },
        merge: function(a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d) for (;d > f; f++) a[e++] = c[f]; else for (;c[f] !== b; ) a[e++] = c[f++];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e); else for (f in a) e = b(a[f], f, d), 
            null != e && (i[i.length] = e);
            return $.apply([], i);
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c], c = a, a = d), fb.isFunction(a) ? (e = ab.call(arguments, 2), 
            f = function() {
                return a.apply(c || this, e.concat(ab.call(arguments)));
            }, f.guid = a.guid = a.guid || fb.guid++, f) : b;
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0, j = a.length, k = null == d;
            if ("object" === fb.type(d)) {
                f = !0;
                for (i in d) fb.access(a, c, i, d[i], !0, g, h);
            } else if (e !== b && (f = !0, fb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), 
            c = null) : (k = c, c = function(a, b, c) {
                return k.call(fb(a), c);
            })), c)) for (;j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g;
        },
        now: Date.now,
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        }
    }), fb.ready.promise = function(b) {
        return Q || (Q = fb.Deferred(), "complete" === T.readyState ? setTimeout(fb.ready) : (T.addEventListener("DOMContentLoaded", nb, !1), 
        a.addEventListener("load", nb, !1))), Q.promise(b);
    }, fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        X["[object " + b + "]"] = b.toLowerCase();
    }), P = fb(T), function(a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, i, j, k, l, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                if (e = tb.exec(a)) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return ab.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return ab.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                if (x.qsa && (!J || !J.test(a))) {
                    if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wb, "\\$&") : b.setAttribute("id", l), 
                        l = "[id='" + l + "'] ", i = j.length; i--; ) j[i] = l + n(j[i]);
                        o = nb.test(a) && b.parentNode || b, p = j.join(",");
                    }
                    if (p) try {
                        return ab.apply(c, o.querySelectorAll(p)), c;
                    } catch (q) {} finally {
                        k || b.removeAttribute("id");
                    }
                }
            }
            return v(a.replace(kb, "$1"), b, c, d);
        }
        function d() {
            function a(c, d) {
                return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d;
            }
            var b = [];
            return a;
        }
        function e(a) {
            return a[N] = !0, a;
        }
        function f(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function g(a, b) {
            for (var c = a.split("|"), d = a.length; d--; ) z.attrHandle[c[d]] = b;
        }
        function h(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function j(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function k(a) {
            return e(function(b) {
                return b = +b, e(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function l() {}
        function m(a, b) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = z.preFilter; h; ) {
                (!d || (e = lb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = mb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(kb, " ")
                }), h = h.slice(d.length));
                for (g in z.filter) !(e = rb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return b ? h.length : h ? c.error(a) : S(a, i).slice(0);
        }
        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function o(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j, k = P + " " + f;
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) if (j = b[N] || (b[N] = {}), 
                (i = j[d]) && i[0] === k) {
                    if ((h = i[1]) === !0 || h === y) return h === !0;
                } else if (i = j[d] = [ k ], i[1] = a(b, c, g) || y, i[1] === !0) return !0;
            };
        }
        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function r(a, b, c, d, f, g) {
            return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function(e, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = e || u(b || "*", h.nodeType ? [ h ] : h, []), r = !a || !e && b ? p : q(p, m, a, h, i), s = c ? f || (e ? a : o || d) ? [] : g : r;
                if (c && c(r, s, h, i), d) for (j = q(s, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (e) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--; ) (l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i);
                        }
                        for (k = s.length; k--; ) (l = s[k]) && (j = f ? cb.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l));
                    }
                } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : ab.apply(g, s);
            });
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                return a === b;
            }, g, !0), j = o(function(a) {
                return cb.call(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
            } ]; e > h; h++) if (c = z.relative[a[h].type]) k = [ o(p(k), c) ]; else {
                if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !z.relative[a[d].type]; d++) ;
                    return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(kb, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a));
                }
                k.push(c);
            }
            return p(k);
        }
        function t(a, b) {
            var d = 0, f = b.length > 0, g = a.length > 0, h = function(e, h, i, j, k) {
                var l, m, n, o = [], p = 0, r = "0", s = e && [], t = null != k, u = D, v = e || g && z.find.TAG("*", k && h.parentNode || h), w = P += null == u ? 1 : Math.random() || .1;
                for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                    if (g && l) {
                        for (m = 0; n = a[m++]; ) if (n(l, h, i)) {
                            j.push(l);
                            break;
                        }
                        t && (P = w, y = ++d);
                    }
                    f && ((l = !n && l) && p--, e && s.push(l));
                }
                if (p += r, f && r !== p) {
                    for (m = 0; n = b[m++]; ) n(s, o, h, i);
                    if (e) {
                        if (p > 0) for (;r--; ) s[r] || o[r] || (o[r] = $.call(j));
                        o = q(o);
                    }
                    ab.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j);
                }
                return t && (P = w, D = u), s;
            };
            return f ? e(h) : h;
        }
        function u(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
            return d;
        }
        function v(a, b, c, d) {
            var e, f, g, h, i, j = m(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                    if (b = (z.find.ID(g.matches[0].replace(xb, yb), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length);
                }
                for (e = rb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]); ) if ((i = z.find[h]) && (d = i(g.matches[0].replace(xb, yb), nb.test(f[0].type) && b.parentNode || b))) {
                    if (f.splice(e, 1), a = d.length && n(f), !a) return ab.apply(c, d), c;
                    break;
                }
            }
            return C(a, j)(d, b, !I, c, nb.test(a)), c;
        }
        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date(), O = a.document, P = 0, Q = 0, R = d(), S = d(), T = d(), U = !1, V = function(a, b) {
            return a === b ? (U = !0, 0) : 0;
        }, W = typeof b, X = 1 << 31, Y = {}.hasOwnProperty, Z = [], $ = Z.pop, _ = Z.push, ab = Z.push, bb = Z.slice, cb = Z.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
            return -1;
        }, db = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", eb = "[\\x20\\t\\r\\n\\f]", gb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", hb = gb.replace("w", "w#"), ib = "\\[" + eb + "*(" + gb + ")" + eb + "*(?:([*^$|!~]?=)" + eb + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + hb + ")|)|)" + eb + "*\\]", jb = ":(" + gb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ib.replace(3, 8) + ")*)|.*)\\)|)", kb = new RegExp("^" + eb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eb + "+$", "g"), lb = new RegExp("^" + eb + "*," + eb + "*"), mb = new RegExp("^" + eb + "*([>+~]|" + eb + ")" + eb + "*"), nb = new RegExp(eb + "*[+~]"), ob = new RegExp("=" + eb + "*([^\\]'\"]*)" + eb + "*\\]", "g"), pb = new RegExp(jb), qb = new RegExp("^" + hb + "$"), rb = {
            ID: new RegExp("^#(" + gb + ")"),
            CLASS: new RegExp("^\\.(" + gb + ")"),
            TAG: new RegExp("^(" + gb.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ib),
            PSEUDO: new RegExp("^" + jb),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + eb + "*(even|odd|(([+-]|)(\\d*)n|)" + eb + "*(?:([+-]|)" + eb + "*(\\d+)|))" + eb + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + db + ")$", "i"),
            needsContext: new RegExp("^" + eb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + eb + "*((?:-\\d)?\\d*)" + eb + "*\\)|)(?=[^-]|$)", "i")
        }, sb = /^[^{]+\{\s*\[native \w/, tb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ub = /^(?:input|select|textarea|button)$/i, vb = /^h\d$/i, wb = /'|\\/g, xb = new RegExp("\\\\([\\da-f]{1,6}" + eb + "?|(" + eb + ")|.)", "ig"), yb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        };
        try {
            ab.apply(Z = bb.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType;
        } catch (zb) {
            ab = {
                apply: Z.length ? function(a, b) {
                    _.apply(a, bb.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        B = c.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, x = c.support = {}, F = c.setDocument = function(a) {
            var b = a ? a.ownerDocument || a : O, c = b.defaultView;
            return b !== G && 9 === b.nodeType && b.documentElement ? (G = b, H = b.documentElement, 
            I = !B(b), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function() {
                F();
            }), x.attributes = f(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), x.getElementsByTagName = f(function(a) {
                return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length;
            }), x.getElementsByClassName = f(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 
                2 === a.getElementsByClassName("i").length;
            }), x.getById = f(function(a) {
                return H.appendChild(a).id = N, !b.getElementsByName || !b.getElementsByName(N).length;
            }), x.getById ? (z.find.ID = function(a, b) {
                if (typeof b.getElementById !== W && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete z.find.ID, z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), z.find.TAG = x.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== W ? b.getElementsByTagName(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, z.find.CLASS = x.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== W && I ? b.getElementsByClassName(a) : void 0;
            }, K = [], J = [], (x.qsa = sb.test(b.querySelectorAll)) && (f(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + eb + "*(?:value|" + db + ")"), 
                a.querySelectorAll(":checked").length || J.push(":checked");
            }), f(function(a) {
                var c = b.createElement("input");
                c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + eb + "*(?:''|\"\")"), 
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                J.push(",.*:");
            })), (x.matchesSelector = sb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function(a) {
                x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", jb);
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), 
            M = sb.test(H.contains) || H.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, V = H.compareDocumentPosition ? function(a, c) {
                if (a === c) return U = !0, 0;
                var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                return d ? 1 & d || !x.sortDetached && c.compareDocumentPosition(a) === d ? a === b || M(O, a) ? -1 : c === b || M(O, c) ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1;
            } : function(a, c) {
                var d, e = 0, f = a.parentNode, g = c.parentNode, i = [ a ], j = [ c ];
                if (a === c) return U = !0, 0;
                if (!f || !g) return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0;
                if (f === g) return h(a, c);
                for (d = a; d = d.parentNode; ) i.unshift(d);
                for (d = c; d = d.parentNode; ) j.unshift(d);
                for (;i[e] === j[e]; ) e++;
                return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
            }, b) : G;
        }, c.matches = function(a, b) {
            return c(a, null, null, b);
        }, c.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== G && F(a), b = b.replace(ob, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b))) try {
                var d = L.call(a, b);
                if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return c(b, G, null, [ a ]).length > 0;
        }, c.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }, c.attr = function(a, c) {
            (a.ownerDocument || a) !== G && F(a);
            var d = z.attrHandle[c.toLowerCase()], e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
            return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e;
        }, c.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, c.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return a;
        }, A = c.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += A(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d]; d++) c += A(b);
            return c;
        }, z = c.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: rb,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(xb, yb), a[3] = (a[4] || a[5] || "").replace(xb, yb), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return rb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pb.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), 
                    a[2] = d.slice(0, c)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(xb, yb).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + eb + ")" + a + "(" + eb + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, d) {
                    return function(e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ P, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [ P, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return f[N] ? f(b) : f.length > 1 ? (d = [ a, a, "", b ], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                        for (var d, e = f(a, b), g = e.length; g--; ) d = cb.call(a, e[g]), a[d] = !(c[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, d);
                    }) : f;
                }
            },
            pseudos: {
                not: e(function(a) {
                    var b = [], c = [], d = C(a.replace(kb, "$1"));
                    return d[N] ? e(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop();
                    };
                }),
                has: e(function(a) {
                    return function(b) {
                        return c(a, b).length > 0;
                    };
                }),
                contains: e(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || A(b)).indexOf(a) > -1;
                    };
                }),
                lang: e(function(a) {
                    return qb.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xb, yb).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === H;
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !z.pseudos.empty(a);
                },
                header: function(a) {
                    return vb.test(a.nodeName);
                },
                input: function(a) {
                    return ub.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type);
                },
                first: k(function() {
                    return [ 0 ];
                }),
                last: k(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: k(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: k(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: k(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, z.pseudos.nth = z.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) z.pseudos[w] = i(w);
        for (w in {
            submit: !0,
            reset: !0
        }) z.pseudos[w] = j(w);
        l.prototype = z.filters = z.pseudos, z.setFilters = new l(), C = c.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = m(a)), c = b.length; c--; ) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d));
            }
            return f;
        }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), 
        x.sortDetached = f(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"));
        }), f(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || g("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), x.attributes && f(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || g("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), f(function(a) {
            return null == a.getAttribute("disabled");
        }) || g(db, function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && d.specified ? d.value : a[b] === !0 ? b.toLowerCase() : null;
        }), fb.find = c, fb.expr = c.selectors, fb.expr[":"] = fb.expr.pseudos, fb.unique = c.uniqueSort, 
        fb.text = c.getText, fb.isXMLDoc = c.isXML, fb.contains = c.contains;
    }(a);
    var ob = {};
    fb.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || d(a) : fb.extend({}, a);
        var c, e, f, g, h, i, j = [], k = !a.once && [], l = function(b) {
            for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++) if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break;
            }
            f = !1, j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable());
        }, m = {
            add: function() {
                if (j) {
                    var b = j.length;
                    !function d(b) {
                        fb.each(b, function(b, c) {
                            var e = fb.type(c);
                            "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c);
                        });
                    }(arguments), f ? h = j.length : c && (g = b, l(c));
                }
                return this;
            },
            remove: function() {
                return j && fb.each(arguments, function(a, b) {
                    for (var c; (c = fb.inArray(b, j, c)) > -1; ) j.splice(c, 1), f && (h >= c && h--, 
                    i >= c && i--);
                }), this;
            },
            has: function(a) {
                return a ? fb.inArray(a, j) > -1 : !(!j || !j.length);
            },
            empty: function() {
                return j = [], h = 0, this;
            },
            disable: function() {
                return j = k = c = b, this;
            },
            disabled: function() {
                return !j;
            },
            lock: function() {
                return k = b, c || m.disable(), this;
            },
            locked: function() {
                return !k;
            },
            fireWith: function(a, b) {
                return !j || e && !k || (b = b || [], b = [ a, b.slice ? b.slice() : b ], f ? k.push(b) : l(b)), 
                this;
            },
            fire: function() {
                return m.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!e;
            }
        };
        return m;
    }, fb.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", fb.Callbacks("once memory"), "resolved" ], [ "reject", "fail", fb.Callbacks("once memory"), "rejected" ], [ "notify", "progress", fb.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return fb.Deferred(function(c) {
                        fb.each(b, function(b, f) {
                            var g = f[0], h = fb.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = h && h.apply(this, arguments);
                                a && fb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? fb.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, fb.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b, c, d, e = 0, f = ab.call(arguments), g = f.length, h = 1 !== g || a && fb.isFunction(a.promise) ? g : 0, i = 1 === h ? a : fb.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? ab.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise();
        }
    }), fb.support = function(b) {
        var c = T.createElement("input"), d = T.createDocumentFragment(), e = T.createElement("div"), f = T.createElement("select"), g = f.appendChild(T.createElement("option"));
        return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, 
        b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, 
        b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, 
        c = T.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, 
        c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.focusinBubbles = "onfocusin" in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", 
        b.clearCloneStyle = "content-box" === e.style.backgroundClip, fb(function() {
            var c, d, f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", g = T.getElementsByTagName("body")[0];
            g && (c = T.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            g.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", 
            fb.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = 4 === e.offsetWidth;
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, 
            b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {
                width: "4px"
            }).width, d = e.appendChild(T.createElement("div")), d.style.cssText = e.style.cssText = f, 
            d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), 
            g.removeChild(c));
        }), b) : b;
    }({});
    var pb, qb, rb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, sb = /([A-Z])/g;
    e.uid = 1, e.accepts = function(a) {
        return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0;
    }, e.prototype = {
        key: function(a) {
            if (!e.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = e.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, fb.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (fb.isEmptyObject(f)) fb.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, c) {
            var d = this.cache[this.key(a)];
            return c === b ? d : d[c];
        },
        access: function(a, c, d) {
            var e;
            return c === b || c && "string" == typeof c && d === b ? (e = this.get(a, c), e !== b ? e : this.get(a, fb.camelCase(c))) : (this.set(a, c, d), 
            d !== b ? d : c);
        },
        remove: function(a, c) {
            var d, e, f, g = this.key(a), h = this.cache[g];
            if (c === b) this.cache[g] = {}; else {
                fb.isArray(c) ? e = c.concat(c.map(fb.camelCase)) : (f = fb.camelCase(c), c in h ? e = [ c, f ] : (e = f, 
                e = e in h ? [ e ] : e.match(hb) || [])), d = e.length;
                for (;d--; ) delete h[e[d]];
            }
        },
        hasData: function(a) {
            return !fb.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    }, pb = new e(), qb = new e(), fb.extend({
        acceptData: e.accepts,
        hasData: function(a) {
            return pb.hasData(a) || qb.hasData(a);
        },
        data: function(a, b, c) {
            return pb.access(a, b, c);
        },
        removeData: function(a, b) {
            pb.remove(a, b);
        },
        _data: function(a, b, c) {
            return qb.access(a, b, c);
        },
        _removeData: function(a, b) {
            qb.remove(a, b);
        }
    }), fb.fn.extend({
        data: function(a, c) {
            var d, e, g = this[0], h = 0, i = null;
            if (a === b) {
                if (this.length && (i = pb.get(g), 1 === g.nodeType && !qb.get(g, "hasDataAttrs"))) {
                    for (d = g.attributes; h < d.length; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = fb.camelCase(e.slice(5)), 
                    f(g, e, i[e]));
                    qb.set(g, "hasDataAttrs", !0);
                }
                return i;
            }
            return "object" == typeof a ? this.each(function() {
                pb.set(this, a);
            }) : fb.access(this, function(c) {
                var d, e = fb.camelCase(a);
                if (g && c === b) {
                    if (d = pb.get(g, a), d !== b) return d;
                    if (d = pb.get(g, e), d !== b) return d;
                    if (d = f(g, e, b), d !== b) return d;
                } else this.each(function() {
                    var d = pb.get(this, e);
                    pb.set(this, e, c), -1 !== a.indexOf("-") && d !== b && pb.set(this, a, c);
                });
            }, null, c, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                pb.remove(this, a);
            });
        }
    }), fb.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = qb.get(a, b), c && (!d || fb.isArray(c) ? d = qb.access(a, b, fb.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = fb.queue(a, b), d = c.length, e = c.shift(), f = fb._queueHooks(a, b), g = function() {
                fb.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return qb.get(a, c) || qb.access(a, c, {
                empty: fb.Callbacks("once memory").add(function() {
                    qb.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), fb.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? fb.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = fb.queue(this, a, c);
                fb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && fb.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                fb.dequeue(this, a);
            });
        },
        delay: function(a, b) {
            return a = fb.fx ? fb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d);
                };
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, c) {
            var d, e = 1, f = fb.Deferred(), g = this, h = this.length, i = function() {
                --e || f.resolveWith(g, [ g ]);
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--; ) d = qb.get(g[h], a + "queueHooks"), 
            d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c);
        }
    });
    var tb, ub, vb = /[\t\r\n\f]/g, wb = /\r/g, xb = /^(?:input|select|textarea|button)$/i;
    fb.fn.extend({
        attr: function(a, b) {
            return fb.access(this, fb.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                fb.removeAttr(this, a);
            });
        },
        prop: function(a, b) {
            return fb.access(this, fb.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[fb.propFix[a] || a];
            });
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = "string" == typeof a && a;
            if (fb.isFunction(a)) return this.each(function(b) {
                fb(this).addClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(hb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                c.className = fb.trim(d);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = 0 === arguments.length || "string" == typeof a && a;
            if (fb.isFunction(a)) return this.each(function(b) {
                fb(this).removeClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(hb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                c.className = a ? fb.trim(d) : "";
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(fb.isFunction(a) ? function(c) {
                fb(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) for (var b, d = 0, e = fb(this), f = a.match(hb) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === R || "boolean" === c) && (this.className && qb.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : qb.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vb, " ").indexOf(b) >= 0) return !0;
            return !1;
        },
        val: function(a) {
            var c, d, e, f = this[0];
            {
                if (arguments.length) return e = fb.isFunction(a), this.each(function(d) {
                    var f;
                    1 === this.nodeType && (f = e ? a.call(this, d, fb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : fb.isArray(f) && (f = fb.map(f, function(a) {
                        return null == a ? "" : a + "";
                    })), c = fb.valHooks[this.type] || fb.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f));
                });
                if (f) return c = fb.valHooks[f.type] || fb.valHooks[f.nodeName.toLowerCase()], 
                c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(wb, "") : null == d ? "" : d);
            }
        }
    }), fb.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text;
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (fb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fb.nodeName(c.parentNode, "optgroup"))) {
                        if (b = fb(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = fb.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = fb.inArray(fb(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return typeof a.getAttribute === R ? fb.prop(a, c, d) : (1 === g && fb.isXMLDoc(a) || (c = c.toLowerCase(), 
            e = fb.attrHooks[c] || (fb.expr.match.bool.test(c) ? ub : tb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = fb.find.attr(a, c), 
            null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), 
            d) : void fb.removeAttr(a, c));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(hb);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = fb.propFix[c] || c, fb.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!fb.support.radioValue && "radio" === b && fb.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !fb.isXMLDoc(a), g && (c = fb.propFix[c] || c, 
            f = fb.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || xb.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), ub = {
        set: function(a, b, c) {
            return b === !1 ? fb.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, fb.each(fb.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = fb.expr.attrHandle[c] || fb.find.attr;
        fb.expr.attrHandle[c] = function(a, c, e) {
            var f = fb.expr.attrHandle[c], g = e ? b : (fb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return fb.expr.attrHandle[c] = f, g;
        };
    }), fb.support.optSelected || (fb.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), fb.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        fb.propFix[this.toLowerCase()] = this;
    }), fb.each([ "radio", "checkbox" ], function() {
        fb.valHooks[this] = {
            set: function(a, b) {
                return fb.isArray(b) ? a.checked = fb.inArray(fb(a).val(), b) >= 0 : void 0;
            }
        }, fb.support.checkOn || (fb.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var yb = /^key/, zb = /^(?:mouse|contextmenu)|click/, Ab = /^(?:focusinfocus|focusoutblur)$/, Bb = /^([^.]*)(?:\.(.+)|)$/;
    fb.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = qb.get(a);
            if (r) {
                for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = fb.guid++), 
                (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function(a) {
                    return typeof fb === R || a && fb.event.triggered === a.type ? b : fb.event.dispatch.apply(h.elem, arguments);
                }, h.elem = a), c = (c || "").match(hb) || [ "" ], k = c.length; k--; ) i = Bb.exec(c[k]) || [], 
                o = q = i[1], p = (i[2] || "").split(".").sort(), o && (m = fb.event.special[o] || {}, 
                o = (f ? m.delegateType : m.bindType) || o, m = fb.event.special[o] || {}, l = fb.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && fb.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, g), (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), 
                m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, l) : n.push(l), 
                fb.event.global[o] = !0);
                a = null;
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = qb.hasData(a) && qb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(hb) || [ "" ], j = b.length; j--; ) if (h = Bb.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = fb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, 
                    m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    g = f = m.length; f--; ) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fb.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) fb.event.remove(a, n + b[j], c, d, !0);
                fb.isEmptyObject(i) && (delete q.handle, qb.remove(a, "events"));
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [ e || T ], o = db.call(c, "type") ? c.type : c, p = db.call(c, "namespace") ? c.namespace.split(".") : [];
            if (h = i = e = e || T, 3 !== e.nodeType && 8 !== e.nodeType && !Ab.test(o + fb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), 
            o = p.shift(), p.sort()), k = o.indexOf(":") < 0 && "on" + o, c = c[fb.expando] ? c : new fb.Event(o, "object" == typeof c && c), 
            c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            c.result = b, c.target || (c.target = e), d = null == d ? [ c ] : fb.makeArray(d, [ c ]), 
            m = fb.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
                if (!f && !m.noBubble && !fb.isWindow(e)) {
                    for (j = m.delegateType || o, Ab.test(j + o) || (h = h.parentNode); h; h = h.parentNode) n.push(h), 
                    i = h;
                    i === (e.ownerDocument || T) && n.push(i.defaultView || i.parentWindow || a);
                }
                for (g = 0; (h = n[g++]) && !c.isPropagationStopped(); ) c.type = g > 1 ? j : m.bindType || o, 
                l = (qb.get(h, "events") || {})[c.type] && qb.get(h, "handle"), l && l.apply(h, d), 
                l = k && h[k], l && fb.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
                return c.type = o, f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !fb.acceptData(e) || k && fb.isFunction(e[o]) && !fb.isWindow(e) && (i = e[k], 
                i && (e[k] = null), fb.event.triggered = o, e[o](), fb.event.triggered = b, i && (e[k] = i)), 
                c.result;
            }
        },
        dispatch: function(a) {
            a = fb.event.fix(a);
            var c, d, e, f, g, h = [], i = ab.call(arguments), j = (qb.get(this, "events") || {})[a.type] || [], k = fb.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = fb.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped(); ) for (a.currentTarget = f.elem, 
                d = 0; (g = f.handlers[d++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, 
                a.data = g.data, e = ((fb.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [], i = c.delegateCount, j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type)) for (;j !== this; j = j.parentNode || this) if (j.disabled !== !0 || "click" !== a.type) {
                for (e = [], d = 0; i > d; d++) g = c[d], f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? fb(f, this).index(j) >= 0 : fb.find(f, this, null, [ j ]).length), 
                e[f] && e.push(g);
                e.length && h.push({
                    elem: j,
                    handlers: e
                });
            }
            return i < c.length && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || T, 
                e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), 
                a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), 
                a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[fb.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = zb.test(e) ? this.mouseHooks : yb.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new fb.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = T), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== i() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === i() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && fb.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return fb.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = fb.extend(new fb.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? fb.event.trigger(e, null, b) : fb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, fb.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, fb.Event = function(a, b) {
        return this instanceof fb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, 
        b && fb.extend(this, b), this.timeStamp = a && a.timeStamp || fb.now(), void (this[fb.expando] = !0)) : new fb.Event(a, b);
    }, fb.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = g, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = g, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = g, this.stopPropagation();
        }
    }, fb.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        fb.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !fb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), fb.support.focusinBubbles || fb.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0, d = function(a) {
            fb.event.simulate(b, a.target, fb.event.fix(a), !0);
        };
        fb.event.special[b] = {
            setup: function() {
                0 === c++ && T.addEventListener(a, d, !0);
            },
            teardown: function() {
                0 === --c && T.removeEventListener(a, d, !0);
            }
        };
    }), fb.fn.extend({
        on: function(a, c, d, e, f) {
            var g, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], f);
                return this;
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, 
            d = b) : (e = d, d = c, c = b)), e === !1) e = h; else if (!e) return this;
            return 1 === f && (g = e, e = function(a) {
                return fb().off(a), g.apply(this, arguments);
            }, e.guid = g.guid || (g.guid = fb.guid++)), this.each(function() {
                fb.event.add(this, a, e, d, c);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, fb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), 
            this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this;
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = h), 
            this.each(function() {
                fb.event.remove(this, a, d, c);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                fb.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? fb.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var Cb = /^.[^:#\[\.,]*$/, Db = /^(?:parents|prev(?:Until|All))/, Eb = fb.expr.match.needsContext, Fb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fb.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(fb(a).filter(function() {
                for (b = 0; e > b; b++) if (fb.contains(d[b], this)) return !0;
            }));
            for (b = 0; e > b; b++) fb.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? fb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, 
            c;
        },
        has: function(a) {
            var b = fb(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (fb.contains(this, b[a])) return !0;
            });
        },
        not: function(a) {
            return this.pushStack(k(this, a || [], !0));
        },
        filter: function(a) {
            return this.pushStack(k(this, a || [], !1));
        },
        is: function(a) {
            return !!k(this, "string" == typeof a && Eb.test(a) ? fb(a) : a || [], !1).length;
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Eb.test(a) || "string" != typeof a ? fb(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fb.find.matchesSelector(c, a))) {
                c = f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? fb.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? bb.call(fb(a), this[0]) : bb.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            var c = "string" == typeof a ? fb(a, b) : fb.makeArray(a && a.nodeType ? [ a ] : a), d = fb.merge(this.get(), c);
            return this.pushStack(fb.unique(d));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), fb.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return fb.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return fb.dir(a, "parentNode", c);
        },
        next: function(a) {
            return j(a, "nextSibling");
        },
        prev: function(a) {
            return j(a, "previousSibling");
        },
        nextAll: function(a) {
            return fb.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return fb.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return fb.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return fb.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return fb.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return fb.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || fb.merge([], a.childNodes);
        }
    }, function(a, b) {
        fb.fn[a] = function(c, d) {
            var e = fb.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fb.filter(d, e)), 
            this.length > 1 && (Fb[a] || fb.unique(e), Db.test(a) && e.reverse()), this.pushStack(e);
        };
    }), fb.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fb.find.matchesSelector(d, a) ? [ d ] : [] : fb.find.matches(a, fb.grep(b, function(a) {
                return 1 === a.nodeType;
            }));
        },
        dir: function(a, c, d) {
            for (var e = [], f = d !== b; (a = a[c]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                if (f && fb(a).is(d)) break;
                e.push(a);
            }
            return e;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    });
    var Gb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Hb = /<([\w:]+)/, Ib = /<|&#?\w+;/, Jb = /<(?:script|style|link)/i, Kb = /^(?:checkbox|radio)$/i, Lb = /checked\s*(?:[^=]|=\s*.checked.)/i, Mb = /^$|\/(?:java|ecma)script/i, Nb = /^true\/(.*)/, Ob = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Pb = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Pb.optgroup = Pb.option, Pb.tbody = Pb.tfoot = Pb.colgroup = Pb.caption = Pb.thead, 
    Pb.th = Pb.td, fb.fn.extend({
        text: function(a) {
            return fb.access(this, function(a) {
                return a === b ? fb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? fb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || fb.cleanData(q(c)), 
            c.parentNode && (b && fb.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fb.cleanData(q(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return fb.clone(this, a, b);
            });
        },
        html: function(a) {
            return fb.access(this, function(a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b && 1 === c.nodeType) return c.innerHTML;
                if ("string" == typeof a && !Jb.test(a) && !Pb[(Hb.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(Gb, "<$1></$2>");
                    try {
                        for (;e > d; d++) c = this[d] || {}, 1 === c.nodeType && (fb.cleanData(q(c, !1)), 
                        c.innerHTML = a);
                        c = 0;
                    } catch (f) {}
                }
                c && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = fb.map(this, function(a) {
                return [ a.nextSibling, a.parentNode ];
            }), b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++], e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), fb(this).remove(), e.insertBefore(c, d));
            }, !0), b ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b, c) {
            a = $.apply([], a);
            var d, e, f, g, h, i, j = 0, k = this.length, l = this, o = k - 1, p = a[0], r = fb.isFunction(p);
            if (r || !(1 >= k || "string" != typeof p || fb.support.checkClone) && Lb.test(p)) return this.each(function(d) {
                var e = l.eq(d);
                r && (a[0] = p.call(this, d, e.html())), e.domManip(a, b, c);
            });
            if (k && (d = fb.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 
            1 === d.childNodes.length && (d = e), e)) {
                for (f = fb.map(q(d, "script"), m), g = f.length; k > j; j++) h = d, j !== o && (h = fb.clone(h, !0, !0), 
                g && fb.merge(f, q(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, fb.map(f, n), j = 0; g > j; j++) h = f[j], 
                Mb.test(h.type || "") && !qb.access(h, "globalEval") && fb.contains(i, h) && (h.src ? fb._evalUrl(h.src) : fb.globalEval(h.textContent.replace(Ob, "")));
            }
            return this;
        }
    }), fb.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        fb.fn[a] = function(a) {
            for (var c, d = [], e = fb(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), 
            fb(e[g])[b](c), _.apply(d, c.get());
            return this.pushStack(d);
        };
    }), fb.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = fb.contains(a.ownerDocument, a);
            if (!(fb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fb.isXMLDoc(a))) for (g = q(h), 
            f = q(a), d = 0, e = f.length; e > d; d++) r(f[d], g[d]);
            if (b) if (c) for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++) p(f[d], g[d]); else p(a, h);
            return g = q(h, "script"), g.length > 0 && o(g, !i && q(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++) if (e = a[k], 
            e || 0 === e) if ("object" === fb.type(e)) fb.merge(n, e.nodeType ? [ e ] : e); else if (Ib.test(e)) {
                for (f = f || m.appendChild(b.createElement("div")), g = (Hb.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = Pb[g] || Pb._default, f.innerHTML = h[1] + e.replace(Gb, "<$1></$2>") + h[2], 
                j = h[0]; j--; ) f = f.lastChild;
                fb.merge(n, f.childNodes), f = m.firstChild, f.textContent = "";
            } else n.push(b.createTextNode(e));
            for (m.textContent = "", k = 0; e = n[k++]; ) if ((!d || -1 === fb.inArray(e, d)) && (i = fb.contains(e.ownerDocument, e), 
            f = q(m.appendChild(e), "script"), i && o(f), c)) for (j = 0; e = f[j++]; ) Mb.test(e.type || "") && c.push(e);
            return m;
        },
        cleanData: function(a) {
            for (var c, d, f, g, h, i, j = fb.event.special, k = 0; (d = a[k]) !== b; k++) {
                if (e.accepts(d) && (h = d[qb.expando], h && (c = qb.cache[h]))) {
                    if (f = Object.keys(c.events || {}), f.length) for (i = 0; (g = f[i]) !== b; i++) j[g] ? fb.event.remove(d, g) : fb.removeEvent(d, g, c.handle);
                    qb.cache[h] && delete qb.cache[h];
                }
                delete pb.cache[d[pb.expando]];
            }
        },
        _evalUrl: function(a) {
            return fb.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), fb.fn.extend({
        wrapAll: function(a) {
            var b;
            return fb.isFunction(a) ? this.each(function(b) {
                fb(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = fb(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(fb.isFunction(a) ? function(b) {
                fb(this).wrapInner(a.call(this, b));
            } : function() {
                var b = fb(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = fb.isFunction(a);
            return this.each(function(c) {
                fb(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                fb.nodeName(this, "body") || fb(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var Qb, Rb, Sb = /^(none|table(?!-c[ea]).+)/, Tb = /^margin/, Ub = new RegExp("^(" + gb + ")(.*)$", "i"), Vb = new RegExp("^(" + gb + ")(?!px)[a-z%]+$", "i"), Wb = new RegExp("^([+-])=(" + gb + ")", "i"), Xb = {
        BODY: "block"
    }, Yb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Zb = {
        letterSpacing: 0,
        fontWeight: 400
    }, $b = [ "Top", "Right", "Bottom", "Left" ], _b = [ "Webkit", "O", "Moz", "ms" ];
    fb.fn.extend({
        css: function(a, c) {
            return fb.access(this, function(a, c, d) {
                var e, f, g = {}, h = 0;
                if (fb.isArray(c)) {
                    for (e = u(a), f = c.length; f > h; h++) g[c[h]] = fb.css(a, c[h], !1, e);
                    return g;
                }
                return d !== b ? fb.style(a, c, d) : fb.css(a, c);
            }, a, c, arguments.length > 1);
        },
        show: function() {
            return v(this, !0);
        },
        hide: function() {
            return v(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                t(this) ? fb(this).show() : fb(this).hide();
            });
        }
    }), fb.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Qb(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = fb.camelCase(c), j = a.style;
                return c = fb.cssProps[i] || (fb.cssProps[i] = s(j, i)), h = fb.cssHooks[c] || fb.cssHooks[i], 
                d === b ? h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, 
                "string" === g && (f = Wb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(fb.css(a, c)), 
                g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || fb.cssNumber[i] || (d += "px"), 
                fb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), 
                h && "set" in h && (d = h.set(a, d, e)) === b || (j[c] = d)), void 0);
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = fb.camelCase(c);
            return c = fb.cssProps[i] || (fb.cssProps[i] = s(a.style, i)), h = fb.cssHooks[c] || fb.cssHooks[i], 
            h && "get" in h && (f = h.get(a, !0, d)), f === b && (f = Qb(a, c, e)), "normal" === f && c in Zb && (f = Zb[c]), 
            "" === d || d ? (g = parseFloat(f), d === !0 || fb.isNumeric(g) ? g || 0 : f) : f;
        }
    }), Qb = function(a, c, d) {
        var e, f, g, h = d || u(a), i = h ? h.getPropertyValue(c) || h[c] : b, j = a.style;
        return h && ("" !== i || fb.contains(a.ownerDocument, a) || (i = fb.style(a, c)), 
        Vb.test(i) && Tb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, 
        i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i;
    }, fb.each([ "height", "width" ], function(a, b) {
        fb.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Sb.test(fb.css(a, "display")) ? fb.swap(a, Yb, function() {
                    return y(a, b, d);
                }) : y(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && u(a);
                return w(a, c, d ? x(a, b, d, fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), fb(function() {
        fb.support.reliableMarginRight || (fb.cssHooks.marginRight = {
            get: function(a, b) {
                return b ? fb.swap(a, {
                    display: "inline-block"
                }, Qb, [ a, "marginRight" ]) : void 0;
            }
        }), !fb.support.pixelPosition && fb.fn.position && fb.each([ "top", "left" ], function(a, b) {
            fb.cssHooks[b] = {
                get: function(a, c) {
                    return c ? (c = Qb(a, b), Vb.test(c) ? fb(a).position()[b] + "px" : c) : void 0;
                }
            };
        });
    }), fb.expr && fb.expr.filters && (fb.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, fb.expr.filters.visible = function(a) {
        return !fb.expr.filters.hidden(a);
    }), fb.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        fb.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + $b[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Tb.test(a) || (fb.cssHooks[a + b].set = w);
    });
    var ac = /%20/g, bc = /\[\]$/, cc = /\r?\n/g, dc = /^(?:submit|button|image|reset|file)$/i, ec = /^(?:input|select|textarea|keygen)/i;
    fb.fn.extend({
        serialize: function() {
            return fb.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = fb.prop(this, "elements");
                return a ? fb.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !fb(this).is(":disabled") && ec.test(this.nodeName) && !dc.test(a) && (this.checked || !Kb.test(a));
            }).map(function(a, b) {
                var c = fb(this).val();
                return null == c ? null : fb.isArray(c) ? fb.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(cc, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(cc, "\r\n")
                };
            }).get();
        }
    }), fb.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            b = fb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (c === b && (c = fb.ajaxSettings && fb.ajaxSettings.traditional), fb.isArray(a) || a.jquery && !fb.isPlainObject(a)) fb.each(a, function() {
            f(this.name, this.value);
        }); else for (d in a) B(d, a[d], c, f);
        return e.join("&").replace(ac, "+");
    }, fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        fb.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), fb.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var fc, gc, hc = fb.now(), ic = /\?/, jc = /#.*$/, kc = /([?&])_=[^&]*/, lc = /^(.*?):[ \t]*([^\r\n]*)$/gm, mc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, nc = /^(?:GET|HEAD)$/, oc = /^\/\//, pc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, qc = fb.fn.load, rc = {}, sc = {}, tc = "*/".concat("*");
    try {
        gc = S.href;
    } catch (uc) {
        gc = T.createElement("a"), gc.href = "", gc = gc.href;
    }
    fc = pc.exec(gc.toLowerCase()) || [], fb.fn.load = function(a, c, d) {
        if ("string" != typeof a && qc) return qc.apply(this, arguments);
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i), a = a.slice(0, i)), fb.isFunction(c) ? (d = c, 
        c = b) : c && "object" == typeof c && (f = "POST"), h.length > 0 && fb.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c
        }).done(function(a) {
            g = arguments, h.html(e ? fb("<div>").append(fb.parseHTML(a)).find(e) : a);
        }).complete(d && function(a, b) {
            h.each(d, g || [ a.responseText, b, a ]);
        }), this;
    }, fb.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        fb.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), fb.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gc,
            type: "GET",
            isLocal: mc.test(fc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fb.parseJSON,
                "text xml": fb.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? E(E(a, fb.ajaxSettings), b) : E(fb.ajaxSettings, a);
        },
        ajaxPrefilter: C(rc),
        ajaxTransport: C(sc),
        ajax: function(a, c) {
            function d(a, c, d, h) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), e = b, g = h || "", w.readyState = a > 0 ? 4 : 0, 
                j = a >= 200 && 300 > a || 304 === a, d && (t = F(m, w, d)), t = G(m, t, w, j), 
                j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fb.lastModified[f] = v), 
                v = w.getResponseHeader("etag"), v && (fb.etag[f] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, 
                l = t.data, s = t.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [ l, x, w ]) : p.rejectWith(n, [ w, x, s ]), 
                w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [ w, m, j ? l : s ]), 
                q.fireWith(n, [ w, x ]), k && (o.trigger("ajaxComplete", [ w, m ]), --fb.active || fb.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = fb.ajaxSetup({}, c), n = m.context || m, o = m.context && (n.nodeType || n.jquery) ? fb(n) : fb.event, p = fb.Deferred(), q = fb.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!h) for (h = {}; b = lc.exec(g); ) h[b[1].toLowerCase()] = b[2];
                        b = h[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? g : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return u || (m.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > u) for (b in a) r[b] = [ r[b], a[b] ]; else w.always(a[w.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || v;
                    return e && e.abort(b), d(0, b), this;
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || gc) + "").replace(jc, "").replace(oc, fc[1] + "//"), 
            m.type = c.method || c.type || m.method || m.type, m.dataTypes = fb.trim(m.dataType || "*").toLowerCase().match(hb) || [ "" ], 
            null == m.crossDomain && (j = pc.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === fc[1] && j[2] === fc[2] && (j[3] || ("http:" === j[1] ? "80" : "443")) === (fc[3] || ("http:" === fc[1] ? "80" : "443")))), 
            m.data && m.processData && "string" != typeof m.data && (m.data = fb.param(m.data, m.traditional)), 
            D(rc, m, c, w), 2 === u) return w;
            k = m.global, k && 0 === fb.active++ && fb.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), 
            m.hasContent = !nc.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (ic.test(f) ? "&" : "?") + m.data, 
            delete m.data), m.cache === !1 && (m.url = kc.test(f) ? f.replace(kc, "$1_=" + hc++) : f + (ic.test(f) ? "&" : "?") + "_=" + hc++)), 
            m.ifModified && (fb.lastModified[f] && w.setRequestHeader("If-Modified-Since", fb.lastModified[f]), 
            fb.etag[f] && w.setRequestHeader("If-None-Match", fb.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), 
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tc + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) w[l](m[l]);
            if (e = D(sc, m, c, w)) {
                w.readyState = 1, k && o.trigger("ajaxSend", [ w, m ]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout");
                }, m.timeout));
                try {
                    u = 1, e.send(s, d);
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x);
                }
            } else d(-1, "No Transport");
            return w;
        },
        getJSON: function(a, b, c) {
            return fb.get(a, b, c, "json");
        },
        getScript: function(a, c) {
            return fb.get(a, b, c, "script");
        }
    }), fb.each([ "get", "post" ], function(a, c) {
        fb[c] = function(a, d, e, f) {
            return fb.isFunction(d) && (f = f || e, e = d, d = b), fb.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            });
        };
    }), fb.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return fb.globalEval(a), a;
            }
        }
    }), fb.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), fb.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = fb("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), T.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var vc = [], wc = /(=)\?(?=&|$)|\?\?/;
    fb.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = vc.pop() || fb.expando + "_" + hc++;
            return this[a] = !0, a;
        }
    }), fb.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (wc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && wc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = fb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, 
        i ? c[i] = c[i].replace(wc, "$1" + f) : c.jsonp !== !1 && (c.url += (ic.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), 
        c.converters["script json"] = function() {
            return h || fb.error(f + " was not called"), h[0];
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments;
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, vc.push(f)), h && fb.isFunction(g) && g(h[0]), 
            h = g = b;
        }), "script") : void 0;
    }), fb.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var xc = fb.ajaxSettings.xhr(), yc = {
        0: 200,
        1223: 204
    }, zc = 0, Ac = {};
    a.ActiveXObject && fb(a).on("unload", function() {
        for (var a in Ac) Ac[a]();
        Ac = b;
    }), fb.support.cors = !!xc && "withCredentials" in xc, fb.support.ajax = xc = !!xc, 
    fb.ajaxTransport(function(a) {
        var c;
        return fb.support.cors || xc && !a.crossDomain ? {
            send: function(d, e) {
                var f, g, h = a.xhr();
                if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (f in a.xhrFields) h[f] = a.xhrFields[f];
                a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType), a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (f in d) h.setRequestHeader(f, d[f]);
                c = function(a) {
                    return function() {
                        c && (delete Ac[g], c = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? e(h.status || 404, h.statusText) : e(yc[h.status] || h.status, h.statusText, "string" == typeof h.responseText ? {
                            text: h.responseText
                        } : b, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), h.onerror = c("error"), c = Ac[g = zc++] = c("abort"), h.send(a.hasContent && a.data || null);
            },
            abort: function() {
                c && c();
            }
        } : void 0;
    });
    var Bc, Cc, Dc = /^(?:toggle|show|hide)$/, Ec = new RegExp("^(?:([+-])=|)(" + gb + ")([a-z%]*)$", "i"), Fc = /queueHooks$/, Gc = [ L ], Hc = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ec.exec(b), f = e && e[3] || (fb.cssNumber[a] ? "" : "px"), g = (fb.cssNumber[a] || "px" !== f && +d) && Ec.exec(fb.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, fb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    fb.Animation = fb.extend(J, {
        tweener: function(a, b) {
            fb.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Hc[c] = Hc[c] || [], Hc[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? Gc.unshift(a) : Gc.push(a);
        }
    }), fb.Tween = M, M.prototype = {
        constructor: M,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (fb.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = M.propHooks[this.prop];
            return a && a.get ? a.get(this) : M.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = M.propHooks[this.prop];
            return this.pos = b = this.options.duration ? fb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : M.propHooks._default.set(this), this;
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fb.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                fb.fx.step[a.prop] ? fb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fb.cssProps[a.prop]] || fb.cssHooks[a.prop]) ? fb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, fb.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = fb.fn[b];
        fb.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e);
        };
    }), fb.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(t).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = fb.isEmptyObject(a), f = fb.speed(b, c, d), g = function() {
                var b = J(this, fb.extend({}, a), f);
                (e || qb.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d);
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, c = null != a && a + "queueHooks", f = fb.timers, g = qb.get(this);
                if (c) g[c] && g[c].stop && e(g[c]); else for (c in g) g[c] && g[c].stop && Fc.test(c) && e(g[c]);
                for (c = f.length; c--; ) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), 
                b = !1, f.splice(c, 1));
                (b || !d) && fb.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = qb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fb.timers, g = d ? d.length : 0;
                for (c.finish = !0, fb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), fb.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        fb.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), fb.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? fb.extend({}, a) : {
            complete: c || !c && b || fb.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !fb.isFunction(b) && b
        };
        return d.duration = fb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fb.fx.speeds ? fb.fx.speeds[d.duration] : fb.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            fb.isFunction(d.old) && d.old.call(this), d.queue && fb.dequeue(this, d.queue);
        }, d;
    }, fb.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, fb.timers = [], fb.fx = M.prototype.init, fb.fx.tick = function() {
        var a, c = fb.timers, d = 0;
        for (Bc = fb.now(); d < c.length; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || fb.fx.stop(), Bc = b;
    }, fb.fx.timer = function(a) {
        a() && fb.timers.push(a) && fb.fx.start();
    }, fb.fx.interval = 13, fb.fx.start = function() {
        Cc || (Cc = setInterval(fb.fx.tick, fb.fx.interval));
    }, fb.fx.stop = function() {
        clearInterval(Cc), Cc = null;
    }, fb.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fb.fx.step = {}, fb.expr && fb.expr.filters && (fb.expr.filters.animated = function(a) {
        return fb.grep(fb.timers, function(b) {
            return a === b.elem;
        }).length;
    }), fb.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            fb.offset.setOffset(this, a, b);
        });
        var c, d, e = this[0], f = {
            top: 0,
            left: 0
        }, g = e && e.ownerDocument;
        if (g) return c = g.documentElement, fb.contains(c, e) ? (typeof e.getBoundingClientRect !== R && (f = e.getBoundingClientRect()), 
        d = O(g), {
            top: f.top + d.pageYOffset - c.clientTop,
            left: f.left + d.pageXOffset - c.clientLeft
        }) : f;
    }, fb.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = fb.css(a, "position"), l = fb(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fb.css(a, "top"), 
            i = fb.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            fb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, fb.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === fb.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), fb.nodeName(a[0], "html") || (d = a.offset()), d.top += fb.css(a[0], "borderTopWidth", !0), 
                d.left += fb.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - fb.css(c, "marginTop", !0),
                    left: b.left - d.left - fb.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || U; a && !fb.nodeName(a, "html") && "static" === fb.css(a, "position"); ) a = a.offsetParent;
                return a || U;
            });
        }
    }), fb.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(c, d) {
        var e = "pageYOffset" === d;
        fb.fn[c] = function(f) {
            return fb.access(this, function(c, f, g) {
                var h = O(c);
                return g === b ? h ? h[d] : c[f] : void (h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g);
            }, c, f, arguments.length, null);
        };
    }), fb.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        fb.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            fb.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return fb.access(this, function(c, d, e) {
                    var f;
                    return fb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, 
                    Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? fb.css(c, d, h) : fb.style(c, d, e, h);
                }, c, g ? e : b, g, null);
            };
        });
    }), fb.fn.size = function() {
        return this.length;
    }, fb.fn.andSelf = fb.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = fb : "function" == typeof define && define.amd && define("jquery", [], function() {
        return fb;
    }), "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = fb);
}(window), function() {
    var a = this, b = a._, c = {}, d = Array.prototype, e = Object.prototype, f = Function.prototype, g = d.push, h = d.slice, i = d.concat, j = e.toString, k = e.hasOwnProperty, l = d.forEach, m = d.map, n = d.reduce, o = d.reduceRight, p = d.filter, q = d.every, r = d.some, s = d.indexOf, t = d.lastIndexOf, u = Array.isArray, v = Object.keys, w = f.bind, x = function(a) {
        return a instanceof x ? a : this instanceof x ? void (this._wrapped = a) : new x(a);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), 
    exports._ = x) : a._ = x, x.VERSION = "1.6.0";
    var y = x.each = x.forEach = function(a, b, d) {
        if (null == a) return a;
        if (l && a.forEach === l) a.forEach(b, d); else if (a.length === +a.length) {
            for (var e = 0, f = a.length; f > e; e++) if (b.call(d, a[e], e, a) === c) return;
        } else for (var g = x.keys(a), e = 0, f = g.length; f > e; e++) if (b.call(d, a[g[e]], g[e], a) === c) return;
        return a;
    };
    x.map = x.collect = function(a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function(a, e, f) {
            d.push(b.call(c, a, e, f));
        }), d);
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)), 
        e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function(a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a, e = !0);
        }), !e) throw new TypeError(z);
        return c;
    }, x.reduceRight = x.foldr = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)), 
        e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length;
        }
        if (y(a, function(h, i, j) {
            i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0);
        }), !e) throw new TypeError(z);
        return c;
    }, x.find = x.detect = function(a, b, c) {
        var d;
        return A(a, function(a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0;
        }), d;
    }, x.filter = x.select = function(a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function(a, e, f) {
            b.call(c, a, e, f) && d.push(a);
        }), d);
    }, x.reject = function(a, b, c) {
        return x.filter(a, function(a, d, e) {
            return !b.call(c, a, d, e);
        }, c);
    }, x.every = x.all = function(a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function(a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c;
        }), !!e);
    };
    var A = x.some = x.any = function(a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function(a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0;
        }), !!e);
    };
    x.contains = x.include = function(a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function(a) {
            return a === b;
        });
    }, x.invoke = function(a, b) {
        var c = h.call(arguments, 2), d = x.isFunction(b);
        return x.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c);
        });
    }, x.pluck = function(a, b) {
        return x.map(a, x.property(b));
    }, x.where = function(a, b) {
        return x.filter(a, x.matches(b));
    }, x.findWhere = function(a, b) {
        return x.find(a, x.matches(b));
    }, x.max = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.max.apply(Math, a);
        var d = -1/0, e = -1/0;
        return y(a, function(a, f, g) {
            var h = b ? b.call(c, a, f, g) : a;
            h > e && (d = a, e = h);
        }), d;
    }, x.min = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.min.apply(Math, a);
        var d = 1/0, e = 1/0;
        return y(a, function(a, f, g) {
            var h = b ? b.call(c, a, f, g) : a;
            e > h && (d = a, e = h);
        }), d;
    }, x.shuffle = function(a) {
        var b, c = 0, d = [];
        return y(a, function(a) {
            b = x.random(c++), d[c - 1] = d[b], d[b] = a;
        }), d;
    }, x.sample = function(a, b, c) {
        return null == b || c ? (a.length !== +a.length && (a = x.values(a)), a[x.random(a.length - 1)]) : x.shuffle(a).slice(0, Math.max(0, b));
    };
    var B = function(a) {
        return null == a ? x.identity : x.isFunction(a) ? a : x.property(a);
    };
    x.sortBy = function(a, b, c) {
        return b = B(b), x.pluck(x.map(a, function(a, d, e) {
            return {
                value: a,
                index: d,
                criteria: b.call(c, a, d, e)
            };
        }).sort(function(a, b) {
            var c = a.criteria, d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1;
            }
            return a.index - b.index;
        }), "value");
    };
    var C = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = B(c), y(b, function(f, g) {
                var h = c.call(d, f, g, b);
                a(e, h, f);
            }), e;
        };
    };
    x.groupBy = C(function(a, b, c) {
        x.has(a, b) ? a[b].push(c) : a[b] = [ c ];
    }), x.indexBy = C(function(a, b, c) {
        a[b] = c;
    }), x.countBy = C(function(a, b) {
        x.has(a, b) ? a[b]++ : a[b] = 1;
    }), x.sortedIndex = function(a, b, c, d) {
        c = B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f; ) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h;
        }
        return f;
    }, x.toArray = function(a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : [];
    }, x.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length;
    }, x.first = x.head = x.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : 0 > b ? [] : h.call(a, 0, b);
    }, x.initial = function(a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b));
    }, x.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0));
    }, x.rest = x.tail = x.drop = function(a, b, c) {
        return h.call(a, null == b || c ? 1 : b);
    }, x.compact = function(a) {
        return x.filter(a, x.identity);
    };
    var D = function(a, b, c) {
        return b && x.every(a, x.isArray) ? i.apply(c, a) : (y(a, function(a) {
            x.isArray(a) || x.isArguments(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a);
        }), c);
    };
    x.flatten = function(a, b) {
        return D(a, b, []);
    }, x.without = function(a) {
        return x.difference(a, h.call(arguments, 1));
    }, x.partition = function(a, b) {
        var c = [], d = [];
        return y(a, function(a) {
            (b(a) ? c : d).push(a);
        }), [ c, d ];
    }, x.uniq = x.unique = function(a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a, f = [], g = [];
        return y(e, function(c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]));
        }), f;
    }, x.union = function() {
        return x.uniq(x.flatten(arguments, !0));
    }, x.intersection = function(a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function(a) {
            return x.every(b, function(b) {
                return x.contains(b, a);
            });
        });
    }, x.difference = function(a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function(a) {
            return !x.contains(b, a);
        });
    }, x.zip = function() {
        for (var a = x.max(x.pluck(arguments, "length").concat(0)), b = new Array(a), c = 0; a > c; c++) b[c] = x.pluck(arguments, "" + c);
        return b;
    }, x.object = function(a, b) {
        if (null == a) return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c;
    }, x.indexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = 0, e = a.length;
        if (c) {
            if ("number" != typeof c) return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c;
        }
        if (s && a.indexOf === s) return a.indexOf(b, c);
        for (;e > d; d++) if (a[d] === b) return d;
        return -1;
    }, x.lastIndexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = null != c;
        if (t && a.lastIndexOf === t) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--; ) if (a[e] === b) return e;
        return -1;
    }, x.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e; ) f[e++] = a, 
        a += c;
        return f;
    };
    var E = function() {};
    x.bind = function(a, b) {
        var c, d;
        if (w && a.bind === w) return w.apply(a, h.call(arguments, 1));
        if (!x.isFunction(a)) throw new TypeError();
        return c = h.call(arguments, 2), d = function() {
            if (!(this instanceof d)) return a.apply(b, c.concat(h.call(arguments)));
            E.prototype = a.prototype;
            var e = new E();
            E.prototype = null;
            var f = a.apply(e, c.concat(h.call(arguments)));
            return Object(f) === f ? f : e;
        };
    }, x.partial = function(a) {
        var b = h.call(arguments, 1);
        return function() {
            for (var c = 0, d = b.slice(), e = 0, f = d.length; f > e; e++) d[e] === x && (d[e] = arguments[c++]);
            for (;c < arguments.length; ) d.push(arguments[c++]);
            return a.apply(this, d);
        };
    }, x.bindAll = function(a) {
        var b = h.call(arguments, 1);
        if (0 === b.length) throw new Error("bindAll must be passed function names");
        return y(b, function(b) {
            a[b] = x.bind(a[b], a);
        }), a;
    }, x.memoize = function(a, b) {
        var c = {};
        return b || (b = x.identity), function() {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments);
        };
    }, x.delay = function(a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c);
        }, b);
    }, x.defer = function(a) {
        return x.delay.apply(x, [ a, 1 ].concat(h.call(arguments, 1)));
    }, x.throttle = function(a, b, c) {
        var d, e, f, g = null, h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : x.now(), g = null, f = a.apply(d, e), d = e = null;
        };
        return function() {
            var j = x.now();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), 
            d = e = null) : g || c.trailing === !1 || (g = setTimeout(i, k)), f;
        };
    }, x.debounce = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = x.now() - g;
            b > j ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), f = e = null));
        };
        return function() {
            f = this, e = arguments, g = x.now();
            var j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h;
        };
    }, x.once = function(a) {
        var b, c = !1;
        return function() {
            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b);
        };
    }, x.wrap = function(a, b) {
        return x.partial(b, a);
    }, x.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments, c = a.length - 1; c >= 0; c--) b = [ a[c].apply(this, b) ];
            return b[0];
        };
    }, x.after = function(a, b) {
        return function() {
            return --a < 1 ? b.apply(this, arguments) : void 0;
        };
    }, x.keys = function(a) {
        if (!x.isObject(a)) return [];
        if (v) return v(a);
        var b = [];
        for (var c in a) x.has(a, c) && b.push(c);
        return b;
    }, x.values = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
        return d;
    }, x.pairs = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++) d[e] = [ b[e], a[b[e]] ];
        return d;
    }, x.invert = function(a) {
        for (var b = {}, c = x.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
        return b;
    }, x.functions = x.methods = function(a) {
        var b = [];
        for (var c in a) x.isFunction(a[c]) && b.push(c);
        return b.sort();
    }, x.extend = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b) for (var c in b) a[c] = b[c];
        }), a;
    }, x.pick = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        return y(c, function(c) {
            c in a && (b[c] = a[c]);
        }), b;
    }, x.omit = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        for (var e in a) x.contains(c, e) || (b[e] = a[e]);
        return b;
    }, x.defaults = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b) for (var c in b) void 0 === a[c] && (a[c] = b[c]);
        }), a;
    }, x.clone = function(a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a;
    }, x.tap = function(a, b) {
        return b(a), a;
    };
    var F = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b)) return !1;
        switch (e) {
          case "[object String]":
            return a == String(b);

          case "[object Number]":
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;

          case "[object Date]":
          case "[object Boolean]":
            return +a == +b;

          case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
        }
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var f = c.length; f--; ) if (c[f] == a) return d[f] == b;
        var g = a.constructor, h = b.constructor;
        if (g !== h && !(x.isFunction(g) && g instanceof g && x.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b) return !1;
        c.push(a), d.push(b);
        var i = 0, k = !0;
        if ("[object Array]" == e) {
            if (i = a.length, k = i == b.length) for (;i-- && (k = F(a[i], b[i], c, d)); ) ;
        } else {
            for (var l in a) if (x.has(a, l) && (i++, !(k = x.has(b, l) && F(a[l], b[l], c, d)))) break;
            if (k) {
                for (l in b) if (x.has(b, l) && !i--) break;
                k = !i;
            }
        }
        return c.pop(), d.pop(), k;
    };
    x.isEqual = function(a, b) {
        return F(a, b, [], []);
    }, x.isEmpty = function(a) {
        if (null == a) return !0;
        if (x.isArray(a) || x.isString(a)) return 0 === a.length;
        for (var b in a) if (x.has(a, b)) return !1;
        return !0;
    }, x.isElement = function(a) {
        return !(!a || 1 !== a.nodeType);
    }, x.isArray = u || function(a) {
        return "[object Array]" == j.call(a);
    }, x.isObject = function(a) {
        return a === Object(a);
    }, y([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(a) {
        x["is" + a] = function(b) {
            return j.call(b) == "[object " + a + "]";
        };
    }), x.isArguments(arguments) || (x.isArguments = function(a) {
        return !(!a || !x.has(a, "callee"));
    }), "function" != typeof /./ && (x.isFunction = function(a) {
        return "function" == typeof a;
    }), x.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a));
    }, x.isNaN = function(a) {
        return x.isNumber(a) && a != +a;
    }, x.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a);
    }, x.isNull = function(a) {
        return null === a;
    }, x.isUndefined = function(a) {
        return void 0 === a;
    }, x.has = function(a, b) {
        return k.call(a, b);
    }, x.noConflict = function() {
        return a._ = b, this;
    }, x.identity = function(a) {
        return a;
    }, x.constant = function(a) {
        return function() {
            return a;
        };
    }, x.property = function(a) {
        return function(b) {
            return b[a];
        };
    }, x.matches = function(a) {
        return function(b) {
            if (b === a) return !0;
            for (var c in a) if (a[c] !== b[c]) return !1;
            return !0;
        };
    }, x.times = function(a, b, c) {
        for (var d = Array(Math.max(0, a)), e = 0; a > e; e++) d[e] = b.call(c, e);
        return d;
    }, x.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1));
    }, x.now = Date.now || function() {
        return new Date().getTime();
    };
    var G = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    G.unescape = x.invert(G.escape);
    var H = {
        escape: new RegExp("[" + x.keys(G.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(G.unescape).join("|") + ")", "g")
    };
    x.each([ "escape", "unescape" ], function(a) {
        x[a] = function(b) {
            return null == b ? "" : ("" + b).replace(H[a], function(b) {
                return G[a][b];
            });
        };
    }), x.result = function(a, b) {
        if (null == a) return void 0;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c;
    }, x.mixin = function(a) {
        y(x.functions(a), function(b) {
            var c = x[b] = a[b];
            x.prototype[b] = function() {
                var a = [ this._wrapped ];
                return g.apply(a, arguments), M.call(this, c.apply(x, a));
            };
        });
    };
    var I = 0;
    x.uniqueId = function(a) {
        var b = ++I + "";
        return a ? a + b : b;
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var J = /(.)^/, K = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(a, b, c) {
        var d;
        c = x.defaults({}, c, x.templateSettings);
        var e = new RegExp([ (c.escape || J).source, (c.interpolate || J).source, (c.evaluate || J).source ].join("|") + "|$", "g"), f = 0, g = "__p+='";
        a.replace(e, function(b, c, d, e, h) {
            return g += a.slice(f, h).replace(L, function(a) {
                return "\\" + K[a];
            }), c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), 
            e && (g += "';\n" + e + "\n__p+='"), f = h + b.length, b;
        }), g += "';\n", c.variable || (g = "with(obj||{}){\n" + g + "}\n"), g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = new Function(c.variable || "obj", "_", g);
        } catch (h) {
            throw h.source = g, h;
        }
        if (b) return d(b, x);
        var i = function(a) {
            return d.call(this, a, x);
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}", i;
    }, x.chain = function(a) {
        return x(a).chain();
    };
    var M = function(a) {
        return this._chain ? x(a).chain() : a;
    };
    x.mixin(x), y([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], 
            M.call(this, c);
        };
    }), y([ "concat", "join", "slice" ], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            return M.call(this, b.apply(this._wrapped, arguments));
        };
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    }), "function" == typeof define && define.amd && define("underscore", [], function() {
        return x;
    });
}.call(this), function(a, b) {
    function c(b, c) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], 
        !!g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b);
    }
    function d(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility");
        }).length;
    }
    var e = 0, f = /^ui-id-\d+$/;
    a.ui = a.ui || {}, a.extend(a.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus(), d && d.call(b);
                    }, c);
                }) : b.apply(this, arguments);
            };
        }(a.fn.focus),
        scrollParent: function() {
            var b;
            return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"));
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"));
            }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b;
        },
        zIndex: function(c) {
            if (c !== b) return this.css("zIndex", c);
            if (this.length) for (var d, e, f = a(this[0]); f.length && f[0] !== document; ) {
                if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), 
                !isNaN(e) && 0 !== e)) return e;
                f = f.parent();
            }
            return 0;
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++e);
            });
        },
        removeUniqueId: function() {
            return this.each(function() {
                f.test(this.id) && a(this).removeAttr("id");
            });
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b);
            };
        }) : function(b, c, d) {
            return !!a.data(b, d[3]);
        },
        focusable: function(b) {
            return c(b, !isNaN(a.attr(b, "tabindex")));
        },
        tabbable: function(b) {
            var d = a.attr(b, "tabindex"), e = isNaN(d);
            return (e || d >= 0) && c(b, !e);
        }
    }), a("<a>").outerWidth(1).jquery || a.each([ "Width", "Height" ], function(c, d) {
        function e(b, c, d, e) {
            return a.each(f, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), 
                e && (c -= parseFloat(a.css(b, "margin" + this)) || 0);
            }), c;
        }
        var f = "Width" === d ? [ "Left", "Right" ] : [ "Top", "Bottom" ], g = d.toLowerCase(), h = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + d] = function(c) {
            return c === b ? h["inner" + d].call(this) : this.each(function() {
                a(this).css(g, e(this, c) + "px");
            });
        }, a.fn["outer" + d] = function(b, c) {
            return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function() {
                a(this).css(g, e(this, b, !0, c) + "px");
            });
        };
    }), a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this);
        };
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), 
    a.support.selectstart = "onselectstart" in document.createElement("div"), a.fn.extend({
        disableSelection: function() {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                a.preventDefault();
            });
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        }
    }), a.extend(a.ui, {
        plugin: {
            add: function(b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([ c, d[e] ]);
            },
            call: function(a, b, c) {
                var d, e = a.plugins[b];
                if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType) for (d = 0; d < e.length; d++) a.options[e[d][0]] && e[d][1].apply(a.element, c);
            }
        },
        hasScroll: function(b, c) {
            if ("hidden" === a(b).css("overflow")) return !1;
            var d = c && "left" === c ? "scrollLeft" : "scrollTop", e = !1;
            return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e);
        }
    });
}(jQuery), function(a, b) {
    var c = 0, d = Array.prototype.slice, e = a.cleanData;
    a.cleanData = function(b) {
        for (var c, d = 0; null != (c = b[d]); d++) try {
            a(c).triggerHandler("remove");
        } catch (f) {}
        e(b);
    }, a.widget = function(b, c, d) {
        var e, f, g, h, i = {}, j = b.split(".")[0];
        b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
            return !!a.data(b, e);
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
            return this._createWidget ? void (arguments.length && this._createWidget(a, b)) : new g(a, b);
        }, a.extend(g, f, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }), h = new c(), h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
            return a.isFunction(d) ? void (i[b] = function() {
                var a = function() {
                    return c.prototype[b].apply(this, arguments);
                }, e = function(a) {
                    return c.prototype[b].apply(this, a);
                };
                return function() {
                    var b, c = this._super, f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, 
                    this._superApply = f, b;
                };
            }()) : void (i[b] = d);
        }), g.prototype = a.widget.extend(h, {
            widgetEventPrefix: f ? h.widgetEventPrefix || b : b
        }, i, {
            constructor: g,
            namespace: j,
            widgetName: b,
            widgetFullName: e
        }), f ? (a.each(f._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto);
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g);
    }, a.widget.extend = function(c) {
        for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++) for (e in g[h]) f = g[h][e], 
        g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : f);
        return c;
    }, a.widget.bridge = function(c, e) {
        var f = e.prototype.widgetFullName || c;
        a.fn[c] = function(g) {
            var h = "string" == typeof g, i = d.call(arguments, 1), j = this;
            return g = !h && i.length ? a.widget.extend.apply(null, [ g ].concat(i)) : g, this.each(h ? function() {
                var d, e = a.data(this, f);
                return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, 
                !1) : void 0) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'");
            } : function() {
                var b = a.data(this, f);
                b ? b.option(g || {})._init() : a.data(this, f, new e(g, this));
            }), j;
        };
    }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(b, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), 
            this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), 
            this._on(!0, this.element, {
                remove: function(a) {
                    a.target === d && this.destroy();
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), 
            this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), 
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
            this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), 
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: a.noop,
        widget: function() {
            return this.element;
        },
        option: function(c, d) {
            var e, f, g, h = c;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof c) if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; g < e.length - 1; g++) f[e[g]] = f[e[g]] || {}, 
                f = f[e[g]];
                if (c = e.pop(), 1 === arguments.length) return f[c] === b ? null : f[c];
                f[c] = d;
            } else {
                if (1 === arguments.length) return this.options[c] === b ? null : this.options[c];
                h[c] = d;
            }
            return this._setOptions(h), this;
        },
        _setOptions: function(a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this;
        },
        _setOption: function(a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), 
            this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), 
            this;
        },
        enable: function() {
            return this._setOption("disabled", !1);
        },
        disable: function() {
            return this._setOption("disabled", !0);
        },
        _on: function(b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, 
            c = this.element, e = this.widget()), a.each(d, function(d, g) {
                function h() {
                    return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0;
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^(\w+)\s*(.*)$/), j = i[1] + f.eventNamespace, k = i[2];
                k ? e.delegate(k, j, h) : c.bind(j, h);
            });
        },
        _off: function(a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            a.unbind(b).undelegate(b);
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments);
            }
            var d = this;
            return setTimeout(c, b || 0);
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), 
            c.target = this.element[0], f = c.originalEvent) for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [ c ].concat(d)) === !1 || c.isDefaultPrevented());
        }
    }, a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {
                duration: e
            }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](), f && f.call(d[0]), c();
            });
        };
    });
}(jQuery), function(a) {
    var b = !1;
    a(document).mouseup(function() {
        b = !1;
    }), a.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a);
            }).bind("click." + this.widgetName, function(c) {
                return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), 
                c.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(c) {
            if (!b) {
                this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                var d = this, e = 1 === c.which, f = "string" == typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                return e && !f && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, 
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    d.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, 
                !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(a) {
                    return d._mouseMove(a);
                }, this._mouseUpDelegate = function(a) {
                    return d._mouseUp(a);
                }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                c.preventDefault(), b = !0, !0)) : !0;
            }
        },
        _mouseMove: function(b) {
            return a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button ? this._mouseUp(b) : this._mouseStarted ? (this._mouseDrag(b), 
            b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, 
            this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted);
        },
        _mouseUp: function(b) {
            return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(b)), !1;
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    });
}(jQuery), function(a, b) {
    function c(a, b, c) {
        return [ parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1) ];
    }
    function d(b, c) {
        return parseInt(a.css(b, c), 10) || 0;
    }
    function e(b) {
        var c = b[0];
        return 9 === c.nodeType ? {
            width: b.width(),
            height: b.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : a.isWindow(c) ? {
            width: b.width(),
            height: b.height(),
            offset: {
                top: b.scrollTop(),
                left: b.scrollLeft()
            }
        } : c.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: c.pageY,
                left: c.pageX
            }
        } : {
            width: b.outerWidth(),
            height: b.outerHeight(),
            offset: b.offset()
        };
    }
    a.ui = a.ui || {};
    var f, g = Math.max, h = Math.abs, i = Math.round, j = /left|center|right/, k = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, m = /^\w+/, n = /%$/, o = a.fn.position;
    a.position = {
        scrollbarWidth: function() {
            if (f !== b) return f;
            var c, d, e = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), g = e.children()[0];
            return a("body").append(e), c = g.offsetWidth, e.css("overflow", "scroll"), d = g.offsetWidth, 
            c === d && (d = e[0].clientWidth), e.remove(), f = c - d;
        },
        getScrollInfo: function(b) {
            var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"), d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"), e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth, f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
            return {
                width: f ? a.position.scrollbarWidth() : 0,
                height: e ? a.position.scrollbarWidth() : 0
            };
        },
        getWithinInfo: function(b) {
            var c = a(b || window), d = a.isWindow(c[0]), e = !!c[0] && 9 === c[0].nodeType;
            return {
                element: c,
                isWindow: d,
                isDocument: e,
                offset: c.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: c.scrollLeft(),
                scrollTop: c.scrollTop(),
                width: d ? c.width() : c.outerWidth(),
                height: d ? c.height() : c.outerHeight()
            };
        }
    }, a.fn.position = function(b) {
        if (!b || !b.of) return o.apply(this, arguments);
        b = a.extend({}, b);
        var f, n, p, q, r, s, t = a(b.of), u = a.position.getWithinInfo(b.within), v = a.position.getScrollInfo(u), w = (b.collision || "flip").split(" "), x = {};
        return s = e(t), t[0].preventDefault && (b.at = "left top"), n = s.width, p = s.height, 
        q = s.offset, r = a.extend({}, q), a.each([ "my", "at" ], function() {
            var a, c, d = (b[this] || "").split(" ");
            1 === d.length && (d = j.test(d[0]) ? d.concat([ "center" ]) : k.test(d[0]) ? [ "center" ].concat(d) : [ "center", "center" ]), 
            d[0] = j.test(d[0]) ? d[0] : "center", d[1] = k.test(d[1]) ? d[1] : "center", a = l.exec(d[0]), 
            c = l.exec(d[1]), x[this] = [ a ? a[0] : 0, c ? c[0] : 0 ], b[this] = [ m.exec(d[0])[0], m.exec(d[1])[0] ];
        }), 1 === w.length && (w[1] = w[0]), "right" === b.at[0] ? r.left += n : "center" === b.at[0] && (r.left += n / 2), 
        "bottom" === b.at[1] ? r.top += p : "center" === b.at[1] && (r.top += p / 2), f = c(x.at, n, p), 
        r.left += f[0], r.top += f[1], this.each(function() {
            var e, j, k = a(this), l = k.outerWidth(), m = k.outerHeight(), o = d(this, "marginLeft"), s = d(this, "marginTop"), y = l + o + d(this, "marginRight") + v.width, z = m + s + d(this, "marginBottom") + v.height, A = a.extend({}, r), B = c(x.my, k.outerWidth(), k.outerHeight());
            "right" === b.my[0] ? A.left -= l : "center" === b.my[0] && (A.left -= l / 2), "bottom" === b.my[1] ? A.top -= m : "center" === b.my[1] && (A.top -= m / 2), 
            A.left += B[0], A.top += B[1], a.support.offsetFractions || (A.left = i(A.left), 
            A.top = i(A.top)), e = {
                marginLeft: o,
                marginTop: s
            }, a.each([ "left", "top" ], function(c, d) {
                a.ui.position[w[c]] && a.ui.position[w[c]][d](A, {
                    targetWidth: n,
                    targetHeight: p,
                    elemWidth: l,
                    elemHeight: m,
                    collisionPosition: e,
                    collisionWidth: y,
                    collisionHeight: z,
                    offset: [ f[0] + B[0], f[1] + B[1] ],
                    my: b.my,
                    at: b.at,
                    within: u,
                    elem: k
                });
            }), b.using && (j = function(a) {
                var c = q.left - A.left, d = c + n - l, e = q.top - A.top, f = e + p - m, i = {
                    target: {
                        element: t,
                        left: q.left,
                        top: q.top,
                        width: n,
                        height: p
                    },
                    element: {
                        element: k,
                        left: A.left,
                        top: A.top,
                        width: l,
                        height: m
                    },
                    horizontal: 0 > d ? "left" : c > 0 ? "right" : "center",
                    vertical: 0 > f ? "top" : e > 0 ? "bottom" : "middle"
                };
                l > n && h(c + d) < n && (i.horizontal = "center"), m > p && h(e + f) < p && (i.vertical = "middle"), 
                i.important = g(h(c), h(d)) > g(h(e), h(f)) ? "horizontal" : "vertical", b.using.call(this, a, i);
            }), k.offset(a.extend(A, {
                using: j
            }));
        });
    }, a.ui.position = {
        fit: {
            left: function(a, b) {
                var c, d = b.within, e = d.isWindow ? d.scrollLeft : d.offset.left, f = d.width, h = a.left - b.collisionPosition.marginLeft, i = e - h, j = h + b.collisionWidth - f - e;
                b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, 
                a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left);
            },
            top: function(a, b) {
                var c, d = b.within, e = d.isWindow ? d.scrollTop : d.offset.top, f = b.within.height, h = a.top - b.collisionPosition.marginTop, i = e - h, j = h + b.collisionHeight - f - e;
                b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, 
                a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top);
            }
        },
        flip: {
            left: function(a, b) {
                var c, d, e = b.within, f = e.offset.left + e.scrollLeft, g = e.width, i = e.isWindow ? e.scrollLeft : e.offset.left, j = a.left - b.collisionPosition.marginLeft, k = j - i, l = j + b.collisionWidth - g - i, m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, o = -2 * b.offset[0];
                0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || c < h(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, 
                (d > 0 || h(d) < l) && (a.left += m + n + o));
            },
            top: function(a, b) {
                var c, d, e = b.within, f = e.offset.top + e.scrollTop, g = e.height, i = e.isWindow ? e.scrollTop : e.offset.top, j = a.top - b.collisionPosition.marginTop, k = j - i, l = j + b.collisionHeight - g - i, m = "top" === b.my[1], n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, p = -2 * b.offset[1];
                0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, a.top + n + o + p > k && (0 > d || d < h(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, 
                a.top + n + o + p > l && (c > 0 || h(c) < l) && (a.top += n + o + p));
            }
        },
        flipfit: {
            left: function() {
                a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments);
            },
            top: function() {
                a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments);
            }
        }
    }, function() {
        var b, c, d, e, f, g = document.getElementsByTagName("body")[0], h = document.createElement("div");
        b = document.createElement(g ? "div" : "body"), d = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, g && a.extend(d, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (f in d) b.style[f] = d[f];
        b.appendChild(h), c = g || document.documentElement, c.insertBefore(b, c.firstChild), 
        h.style.cssText = "position: absolute; left: 10.7432222px;", e = a(h).offset().left, 
        a.support.offsetFractions = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b);
    }();
}(jQuery), function(a) {
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), 
            this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), 
            this._mouseInit();
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), 
            this._mouseDestroy();
        },
        _mouseCapture: function(b) {
            var c = this.options;
            return this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), 
            this.handle ? (a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function() {
                a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(a(this).offset()).appendTo("body");
            }), !0) : !1);
        },
        _mouseStart: function(b) {
            var c = this.options;
            return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), 
            this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), 
            this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), 
            this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), 
            this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, 
            this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), 
            this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), 
            a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), 
            a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0);
        },
        _mouseDrag: function(b, c) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), 
            this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), 
            !c) {
                var d = this._uiHash();
                if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
                this.position = d.position;
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1;
        },
        _mouseStop: function(b) {
            var c = this, d = !1;
            return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), 
            this.dropped && (d = this.dropped, this.dropped = !1), "original" !== this.options.helper || a.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                c._trigger("stop", b) !== !1 && c._clear();
            }) : this._trigger("stop", b) !== !1 && this._clear(), !1) : !1;
        },
        _mouseUp: function(b) {
            return a("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this);
            }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b);
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), 
            this;
        },
        _getHandle: function(b) {
            return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0;
        },
        _createHelper: function(b) {
            var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [ b ])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return d.parents("body").length || d.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), 
            d[0] === this.element[0] || /(fixed|absolute)/.test(d.css("position")) || d.css("position", "absolute"), 
            d;
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), 
            "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), 
            b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.element.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var b, c, d, e = this.options;
            return e.containment ? "window" === e.containment ? void (this.containment = [ a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]) : "document" === e.containment ? void (this.containment = [ 0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]) : e.containment.constructor === Array ? void (this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), 
            c = a(e.containment), d = c[0], void (d && (b = "hidden" !== c.css("overflow"), 
            this.containment = [ (parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
            this.relative_container = c))) : void (this.containment = null);
        },
        _convertPositionTo: function(b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1, e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }), {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * d
            };
        },
        _generatePosition: function(b) {
            var c, d, e, f, g = this.options, h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, i = b.pageX, j = b.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: h.scrollTop(),
                left: h.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (d = this.relative_container.offset(), 
            c = [ this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top ]) : c = this.containment, 
            b.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), 
            b.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), b.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), 
            b.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, 
            j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, 
            f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, 
            i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f)), 
            {
                top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            };
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
            this.helper = null, this.cancelHelperRemoval = !1;
        },
        _trigger: function(b, c, d) {
            return d = d || this._uiHash(), a.ui.plugin.call(this, b, [ c, d ]), "drag" === b && (this.positionAbs = this._convertPositionTo("absolute")), 
            a.Widget.prototype._trigger.call(this, b, c, d);
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(b, c) {
            var d = a(this).data("ui-draggable"), e = d.options, f = a.extend({}, c, {
                item: d.element
            });
            d.sortables = [], a(e.connectToSortable).each(function() {
                var c = a.data(this, "ui-sortable");
                c && !c.options.disabled && (d.sortables.push({
                    instance: c,
                    shouldRevert: c.options.revert
                }), c.refreshPositions(), c._trigger("activate", b, f));
            });
        },
        stop: function(b, c) {
            var d = a(this).data("ui-draggable"), e = a.extend({}, c, {
                item: d.element
            });
            a.each(d.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, 
                this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(b), 
                this.instance.options.helper = this.instance.options._helper, "original" === d.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e));
            });
        },
        drag: function(b, c) {
            var d = a(this).data("ui-draggable"), e = this;
            a.each(d.sortables, function() {
                var f = !1, g = this;
                this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, 
                this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (f = !0, 
                a.each(d.sortables, function() {
                    return this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, 
                    this.instance.offset.click = d.offset.click, this !== g && this.instance._intersectsWith(this.instance.containerCache) && a.contains(g.instance.element[0], this.instance.element[0]) && (f = !1), 
                    f;
                })), f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), 
                this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return c.helper[0];
                }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), 
                this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, 
                this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, 
                this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, 
                d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, 
                this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, 
                this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), 
                this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, 
                this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), 
                d._trigger("fromSortable", b), d.dropped = !1);
            });
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var b = a("body"), c = a(this).data("ui-draggable").options;
            b.css("cursor") && (c._cursor = b.css("cursor")), b.css("cursor", c.cursor);
        },
        stop: function() {
            var b = a(this).data("ui-draggable").options;
            b._cursor && a("body").css("cursor", b._cursor);
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function(b, c) {
            var d = a(c.helper), e = a(this).data("ui-draggable").options;
            d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity);
        },
        stop: function(b, c) {
            var d = a(this).data("ui-draggable").options;
            d._opacity && a(c.helper).css("opacity", d._opacity);
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var b = a(this).data("ui-draggable");
            b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset());
        },
        drag: function(b) {
            var c = a(this).data("ui-draggable"), d = c.options, e = !1;
            c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName ? (d.axis && "x" === d.axis || (c.overflowOffset.top + c.scrollParent[0].offsetHeight - b.pageY < d.scrollSensitivity ? c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop + d.scrollSpeed : b.pageY - c.overflowOffset.top < d.scrollSensitivity && (c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop - d.scrollSpeed)), 
            d.axis && "y" === d.axis || (c.overflowOffset.left + c.scrollParent[0].offsetWidth - b.pageX < d.scrollSensitivity ? c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft + d.scrollSpeed : b.pageX - c.overflowOffset.left < d.scrollSensitivity && (c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft - d.scrollSpeed))) : (d.axis && "x" === d.axis || (b.pageY - a(document).scrollTop() < d.scrollSensitivity ? e = a(document).scrollTop(a(document).scrollTop() - d.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < d.scrollSensitivity && (e = a(document).scrollTop(a(document).scrollTop() + d.scrollSpeed))), 
            d.axis && "y" === d.axis || (b.pageX - a(document).scrollLeft() < d.scrollSensitivity ? e = a(document).scrollLeft(a(document).scrollLeft() - d.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < d.scrollSensitivity && (e = a(document).scrollLeft(a(document).scrollLeft() + d.scrollSpeed)))), 
            e !== !1 && a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, b);
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function() {
            var b = a(this).data("ui-draggable"), c = b.options;
            b.snapElements = [], a(c.snap.constructor !== String ? c.snap.items || ":data(ui-draggable)" : c.snap).each(function() {
                var c = a(this), d = c.offset();
                this !== b.element[0] && b.snapElements.push({
                    item: this,
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: d.top,
                    left: d.left
                });
            });
        },
        drag: function(b, c) {
            var d, e, f, g, h, i, j, k, l, m, n = a(this).data("ui-draggable"), o = n.options, p = o.snapTolerance, q = c.offset.left, r = q + n.helperProportions.width, s = c.offset.top, t = s + n.helperProportions.height;
            for (l = n.snapElements.length - 1; l >= 0; l--) h = n.snapElements[l].left, i = h + n.snapElements[l].width, 
            j = n.snapElements[l].top, k = j + n.snapElements[l].height, h - p > r || q > i + p || j - p > t || s > k + p || !a.contains(n.snapElements[l].item.ownerDocument, n.snapElements[l].item) ? (n.snapElements[l].snapping && n.options.snap.release && n.options.snap.release.call(n.element, b, a.extend(n._uiHash(), {
                snapItem: n.snapElements[l].item
            })), n.snapElements[l].snapping = !1) : ("inner" !== o.snapMode && (d = Math.abs(j - t) <= p, 
            e = Math.abs(k - s) <= p, f = Math.abs(h - r) <= p, g = Math.abs(i - q) <= p, d && (c.position.top = n._convertPositionTo("relative", {
                top: j - n.helperProportions.height,
                left: 0
            }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                top: k,
                left: 0
            }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h - n.helperProportions.width
            }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: i
            }).left - n.margins.left)), m = d || e || f || g, "outer" !== o.snapMode && (d = Math.abs(j - s) <= p, 
            e = Math.abs(k - t) <= p, f = Math.abs(h - q) <= p, g = Math.abs(i - r) <= p, d && (c.position.top = n._convertPositionTo("relative", {
                top: j,
                left: 0
            }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                top: k - n.helperProportions.height,
                left: 0
            }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: i - n.helperProportions.width
            }).left - n.margins.left)), !n.snapElements[l].snapping && (d || e || f || g || m) && n.options.snap.snap && n.options.snap.snap.call(n.element, b, a.extend(n._uiHash(), {
                snapItem: n.snapElements[l].item
            })), n.snapElements[l].snapping = d || e || f || g || m);
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function() {
            var b, c = this.data("ui-draggable").options, d = a.makeArray(a(c.stack)).sort(function(b, c) {
                return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0);
            });
            d.length && (b = parseInt(a(d[0]).css("zIndex"), 10) || 0, a(d).each(function(c) {
                a(this).css("zIndex", b + c);
            }), this.css("zIndex", b + d.length));
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function(b, c) {
            var d = a(c.helper), e = a(this).data("ui-draggable").options;
            d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex);
        },
        stop: function(b, c) {
            var d = a(this).data("ui-draggable").options;
            d._zIndex && a(c.helper).css("zIndex", d._zIndex);
        }
    });
}(jQuery), function(a) {
    a.widget("ui.autocomplete", {
        version: "1.10.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var b, c, d, e = this.element[0].nodeName.toLowerCase(), f = "textarea" === e, g = "input" === e;
            this.isMultiLine = f ? !0 : g ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[f || g ? "val" : "text"], 
            this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), 
            this._on(this.element, {
                keydown: function(e) {
                    if (this.element.prop("readOnly")) return b = !0, d = !0, void (c = !0);
                    b = !1, d = !1, c = !1;
                    var f = a.ui.keyCode;
                    switch (e.keyCode) {
                      case f.PAGE_UP:
                        b = !0, this._move("previousPage", e);
                        break;

                      case f.PAGE_DOWN:
                        b = !0, this._move("nextPage", e);
                        break;

                      case f.UP:
                        b = !0, this._keyEvent("previous", e);
                        break;

                      case f.DOWN:
                        b = !0, this._keyEvent("next", e);
                        break;

                      case f.ENTER:
                      case f.NUMPAD_ENTER:
                        this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                        break;

                      case f.TAB:
                        this.menu.active && this.menu.select(e);
                        break;

                      case f.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term), this.close(e), e.preventDefault());
                        break;

                      default:
                        c = !0, this._searchTimeout(e);
                    }
                },
                keypress: function(d) {
                    if (b) return b = !1, void ((!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault());
                    if (!c) {
                        var e = a.ui.keyCode;
                        switch (d.keyCode) {
                          case e.PAGE_UP:
                            this._move("previousPage", d);
                            break;

                          case e.PAGE_DOWN:
                            this._move("nextPage", d);
                            break;

                          case e.UP:
                            this._keyEvent("previous", d);
                            break;

                          case e.DOWN:
                            this._keyEvent("next", d);
                        }
                    }
                },
                input: function(a) {
                    return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a);
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value();
                },
                blur: function(a) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), 
                    this.close(a), void this._change(a));
                }
            }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function(b) {
                    b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur;
                    });
                    var c = this.menu.element[0];
                    a(b.target).closest(".ui-menu-item").length || this._delay(function() {
                        var b = this;
                        this.document.one("mousedown", function(d) {
                            d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close();
                        });
                    });
                },
                menufocus: function(b, c) {
                    if (this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type))) return this.menu.blur(), 
                    void this.document.one("mousemove", function() {
                        a(b.target).trigger(b.originalEvent);
                    });
                    var d = c.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", b, {
                        item: d
                    }) ? b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(d.value) : this.liveRegion.text(d.value);
                },
                menuselect: function(a, b) {
                    var c = b.item.data("ui-autocomplete-item"), d = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, 
                    this._delay(function() {
                        this.previous = d, this.selectedItem = c;
                    })), !1 !== this._trigger("select", a, {
                        item: c
                    }) && this._value(c.value), this.term = this._value(), this.close(a), this.selectedItem = c;
                }
            }), this.liveRegion = a("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), 
            this.menu.element.remove(), this.liveRegion.remove();
        },
        _setOption: function(a, b) {
            this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), 
            "disabled" === a && b && this.xhr && this.xhr.abort();
        },
        _appendTo: function() {
            var b = this.options.appendTo;
            return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b || (b = this.element.closest(".ui-front")), 
            b.length || (b = this.document[0].body), b;
        },
        _initSource: function() {
            var b, c, d = this;
            a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
                d(a.ui.autocomplete.filter(b, c.term));
            }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
                d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                    url: c,
                    data: b,
                    dataType: "json",
                    success: function(a) {
                        e(a);
                    },
                    error: function() {
                        e([]);
                    }
                });
            }) : this.source = this.options.source;
        },
        _searchTimeout: function(a) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, a));
            }, this.options.delay);
        },
        search: function(a, b) {
            return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0;
        },
        _search: function(a) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
            this.source({
                term: a
            }, this._response());
        },
        _response: function() {
            var b = ++this.requestIndex;
            return a.proxy(function(a) {
                b === this.requestIndex && this.__response(a), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading");
            }, this);
        },
        __response: function(a) {
            a && (a = this._normalize(a)), this._trigger("response", null, {
                content: a
            }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), 
            this._trigger("open")) : this._close();
        },
        close: function(a) {
            this.cancelSearch = !0, this._close(a);
        },
        _close: function(a) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), 
            this.isNewMenu = !0, this._trigger("close", a));
        },
        _change: function(a) {
            this.previous !== this._value() && this._trigger("change", a, {
                item: this.selectedItem
            });
        },
        _normalize: function(b) {
            return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
                return "string" == typeof b ? {
                    label: b,
                    value: b
                } : a.extend({
                    label: b.label || b.value,
                    value: b.value || b.label
                }, b);
            });
        },
        _suggest: function(b) {
            var c = this.menu.element.empty();
            this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), 
            c.position(a.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next();
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(b, c) {
            var d = this;
            a.each(c, function(a, c) {
                d._renderItemData(b, c);
            });
        },
        _renderItemData: function(a, b) {
            return this._renderItem(a, b).data("ui-autocomplete-item", b);
        },
        _renderItem: function(b, c) {
            return a("<li>").append(a("<a>").text(c.label)).appendTo(b);
        },
        _move: function(a, b) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this._value(this.term), 
            void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(a, b) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault());
        }
    }), a.extend(a.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(b, c) {
            var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
            return a.grep(b, function(a) {
                return d.test(a.label || a.value || a);
            });
        }
    }), a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(a) {
                    return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        },
        __response: function(a) {
            var b;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (b = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, 
            this.liveRegion.text(b));
        }
    });
}(jQuery), function(a, b) {
    function c() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, 
        this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", 
        this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", 
        this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", 
        this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", 
        this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayNamesMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, a.extend(this._defaults, this.regional[""]), this.dpDiv = d(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    function d(b) {
        var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return b.delegate(c, "mouseout", function() {
            a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), 
            -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover");
        }).delegate(c, "mouseover", function() {
            a.datepicker._isDisabledDatepicker(f.inline ? b.parent()[0] : f.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), 
            a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), 
            -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"));
        });
    }
    function e(b, c) {
        a.extend(b, c);
        for (var d in c) null == c[d] && (b[d] = c[d]);
        return b;
    }
    a.extend(a.ui, {
        datepicker: {
            version: "1.10.4"
        }
    });
    var f, g = "datepicker";
    a.extend(c.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(a) {
            return e(this._defaults, a || {}), this;
        },
        _attachDatepicker: function(b, c) {
            var d, e, f;
            d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, 
            b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), 
            "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f);
        },
        _newInst: function(b, c) {
            var e = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: e,
                input: b,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: c,
                dpDiv: c ? d(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            };
        },
        _connectDatepicker: function(b, c) {
            var d = a(b);
            c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), 
            d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), 
            this._autoSize(c), a.data(b, g, c), c.settings.disabled && this._disableDatepicker(b));
        },
        _attachments: function(b, c) {
            var d, e, f, g = this._get(c, "appendText"), h = this._get(c, "isRTL");
            c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), 
            b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), 
            d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.focus(this._showDatepicker), 
            ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), 
            c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: e,
                title: e
            }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
                src: f,
                alt: e,
                title: e
            }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function() {
                return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), 
                a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1;
            }));
        },
        _autoSize: function(a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b, c, d, e, f = new Date(2009, 11, 20), g = this._get(a, "dateFormat");
                g.match(/[DM]/) && (b = function(a) {
                    for (c = 0, d = 0, e = 0; e < a.length; e++) a[e].length > c && (c = a[e].length, 
                    d = e);
                    return d;
                }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), 
                f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), 
                a.input.attr("size", this._formatDate(a, f).length);
            }
        },
        _inlineDatepicker: function(b, c) {
            var d = a(b);
            d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), 
            a.data(b, g, c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), 
            this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function(b, c, d, f, h) {
            var i, j, k, l, m, n = this._dialogInst;
            return n || (this.uuid += 1, i = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + i + "' style='position: absolute; top: -100px; width: 0px;'/>"), 
            this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), 
            n = this._dialogInst = this._newInst(this._dialogInput, !1), n.settings = {}, a.data(this._dialogInput[0], g, n)), 
            e(n.settings, f || {}), c = c && c.constructor === Date ? this._formatDate(n, c) : c, 
            this._dialogInput.val(c), this._pos = h ? h.length ? h : [ h.pageX, h.pageY ] : null, 
            this._pos || (j = document.documentElement.clientWidth, k = document.documentElement.clientHeight, 
            l = document.documentElement.scrollLeft || document.body.scrollLeft, m = document.documentElement.scrollTop || document.body.scrollTop, 
            this._pos = [ j / 2 - 100 + l, k / 2 - 150 + m ]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), 
            n.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), 
            this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), 
            a.data(this._dialogInput[0], g, n), this;
        },
        _destroyDatepicker: function(b) {
            var c, d = a(b), e = a.data(b, g);
            d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, g), 
            "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty());
        },
        _enableDatepicker: function(b) {
            var c, d, e = a(b), f = a.data(b, g);
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, 
            f.trigger.filter("button").each(function() {
                this.disabled = !1;
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), 
            d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), 
            this._disabledInputs = a.map(this._disabledInputs, function(a) {
                return a === b ? null : a;
            }));
        },
        _disableDatepicker: function(b) {
            var c, d, e = a(b), f = a.data(b, g);
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, 
            f.trigger.filter("button").each(function() {
                this.disabled = !0;
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), 
            d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), 
            this._disabledInputs = a.map(this._disabledInputs, function(a) {
                return a === b ? null : a;
            }), this._disabledInputs[this._disabledInputs.length] = b);
        },
        _isDisabledDatepicker: function(a) {
            if (!a) return !1;
            for (var b = 0; b < this._disabledInputs.length; b++) if (this._disabledInputs[b] === a) return !0;
            return !1;
        },
        _getInst: function(b) {
            try {
                return a.data(b, g);
            } catch (c) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(c, d, f) {
            var g, h, i, j, k = this._getInst(c);
            return 2 === arguments.length && "string" == typeof d ? "defaults" === d ? a.extend({}, a.datepicker._defaults) : k ? "all" === d ? a.extend({}, k.settings) : this._get(k, d) : null : (g = d || {}, 
            "string" == typeof d && (g = {}, g[d] = f), void (k && (this._curInst === k && this._hideDatepicker(), 
            h = this._getDateDatepicker(c, !0), i = this._getMinMaxDate(k, "min"), j = this._getMinMaxDate(k, "max"), 
            e(k.settings, g), null !== i && g.dateFormat !== b && g.minDate === b && (k.settings.minDate = this._formatDate(k, i)), 
            null !== j && g.dateFormat !== b && g.maxDate === b && (k.settings.maxDate = this._formatDate(k, j)), 
            "disabled" in g && (g.disabled ? this._disableDatepicker(c) : this._enableDatepicker(c)), 
            this._attachments(a(c), k), this._autoSize(k), this._setDate(k, h), this._updateAlternate(k), 
            this._updateDatepicker(k))));
        },
        _changeDatepicker: function(a, b, c) {
            this._optionDatepicker(a, b, c);
        },
        _refreshDatepicker: function(a) {
            var b = this._getInst(a);
            b && this._updateDatepicker(b);
        },
        _setDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c));
        },
        _getDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null;
        },
        _doKeyDown: function(b) {
            var c, d, e, f = a.datepicker._getInst(b.target), g = !0, h = f.dpDiv.is(".ui-datepicker-rtl");
            if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
              case 9:
                a.datepicker._hideDatepicker(), g = !1;
                break;

              case 13:
                return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), 
                e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), 
                c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [ d, f ])) : a.datepicker._hideDatepicker(), 
                !1;

              case 27:
                a.datepicker._hideDatepicker();
                break;

              case 33:
                a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 34:
                a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 35:
                (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
                break;

              case 36:
                (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
                break;

              case 37:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), 
                g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 38:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
                break;

              case 39:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), 
                g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 40:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
                break;

              default:
                g = !1;
            } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
            g && (b.preventDefault(), b.stopPropagation());
        },
        _doKeyPress: function(b) {
            var c, d, e = a.datepicker._getInst(b.target);
            return a.datepicker._get(e, "constrainInput") ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), 
            d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || c.indexOf(d) > -1) : void 0;
        },
        _doKeyUp: function(b) {
            var c, d = a.datepicker._getInst(b.target);
            if (d.input.val() !== d.lastVal) try {
                c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), 
                c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d));
            } catch (e) {}
            return !0;
        },
        _showDatepicker: function(b) {
            if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), 
            !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
                var c, d, f, g, h, i, j;
                c = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), 
                c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), 
                d = a.datepicker._get(c, "beforeShow"), f = d ? d.apply(b, [ b, c ]) : {}, f !== !1 && (e(c.settings, f), 
                c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), 
                a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), 
                a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function() {
                    return g |= "fixed" === a(this).css("position"), !g;
                }), h = {
                    left: a.datepicker._pos[0],
                    top: a.datepicker._pos[1]
                }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), a.datepicker._updateDatepicker(c), h = a.datepicker._checkOffset(c, h, g), c.dpDiv.css({
                    position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }), c.inline || (i = a.datepicker._get(c, "showAnim"), j = a.datepicker._get(c, "duration"), 
                c.dpDiv.zIndex(a(b).zIndex() + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[i] ? c.dpDiv.show(i, a.datepicker._get(c, "showOptions"), j) : c.dpDiv[i || "show"](i ? j : null), 
                a.datepicker._shouldFocusInput(c) && c.input.focus(), a.datepicker._curInst = c));
            }
        },
        _updateDatepicker: function(b) {
            this.maxRows = 4, f = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b), 
            b.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var c, d = this._getNumberOfMonths(b), e = d[1], g = 17;
            b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 
            e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", g * e + "em"), 
            b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), 
            b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), 
            b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(), 
            b.yearshtml && (c = b.yearshtml, setTimeout(function() {
                c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), 
                c = b.yearshtml = null;
            }, 0));
        },
        _shouldFocusInput: function(a) {
            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus");
        },
        _checkOffset: function(b, c, d) {
            var e = b.dpDiv.outerWidth(), f = b.dpDiv.outerHeight(), g = b.input ? b.input.outerWidth() : 0, h = b.input ? b.input.outerHeight() : 0, i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()), j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
            return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, 
            c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, 
            c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), 
            c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c;
        },
        _findPos: function(b) {
            for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b)); ) b = b[e ? "previousSibling" : "nextSibling"];
            return c = a(b).offset(), [ c.left, c.top ];
        },
        _hideDatepicker: function(b) {
            var c, d, e, f, h = this._curInst;
            !h || b && h !== a.data(b, g) || this._datepickerShowing && (c = this._get(h, "showAnim"), 
            d = this._get(h, "duration"), e = function() {
                a.datepicker._tidyDialog(h);
            }, a.effects && (a.effects.effect[c] || a.effects[c]) ? h.dpDiv.hide(c, a.datepicker._get(h, "showOptions"), d, e) : h.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), 
            c || e(), this._datepickerShowing = !1, f = this._get(h, "onClose"), f && f.apply(h.input ? h.input[0] : null, [ h.input ? h.input.val() : "", h ]), 
            this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1);
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(b) {
            if (a.datepicker._curInst) {
                var c = a(b.target), d = a.datepicker._getInst(c[0]);
                (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(b, c, d) {
            var e = a(b), f = this._getInst(e[0]);
            this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), 
            this._updateDatepicker(f));
        },
        _gotoToday: function(b) {
            var c, d = a(b), e = this._getInst(d[0]);
            this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, 
            e.drawYear = e.selectedYear = e.currentYear) : (c = new Date(), e.selectedDay = c.getDate(), 
            e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), 
            this._notifyChange(e), this._adjustDate(d);
        },
        _selectMonthYear: function(b, c, d) {
            var e = a(b), f = this._getInst(e[0]);
            f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), 
            this._notifyChange(f), this._adjustDate(e);
        },
        _selectDay: function(b, c, d, e) {
            var f, g = a(b);
            a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), 
            f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, 
            f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)));
        },
        _clearDate: function(b) {
            var c = a(b);
            this._selectDate(c, "");
        },
        _selectDate: function(b, c) {
            var d, e = a(b), f = this._getInst(e[0]);
            c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), 
            d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [ c, f ]) : f.input && f.input.trigger("change"), 
            f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], 
            "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null);
        },
        _updateAlternate: function(b) {
            var c, d, e, f = this._get(b, "altField");
            f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), 
            e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function() {
                a(this).val(e);
            }));
        },
        noWeekends: function(a) {
            var b = a.getDay();
            return [ b > 0 && 6 > b, "" ];
        },
        iso8601Week: function(a) {
            var b, c = new Date(a.getTime());
            return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), 
            c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1;
        },
        parseDate: function(b, c, d) {
            if (null == b || null == c) throw "Invalid arguments";
            if (c = "object" == typeof c ? c.toString() : c + "", "" === c) return null;
            var e, f, g, h, i = 0, j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff, k = "string" != typeof j ? j : new Date().getFullYear() % 100 + parseInt(j, 10), l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort, m = (d ? d.dayNames : null) || this._defaults.dayNames, n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort, o = (d ? d.monthNames : null) || this._defaults.monthNames, p = -1, q = -1, r = -1, s = -1, t = !1, u = function(a) {
                var c = e + 1 < b.length && b.charAt(e + 1) === a;
                return c && e++, c;
            }, v = function(a) {
                var b = u(a), d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2, e = new RegExp("^\\d{1," + d + "}"), f = c.substring(i).match(e);
                if (!f) throw "Missing number at position " + i;
                return i += f[0].length, parseInt(f[0], 10);
            }, w = function(b, d, e) {
                var f = -1, g = a.map(u(b) ? e : d, function(a, b) {
                    return [ [ b, a ] ];
                }).sort(function(a, b) {
                    return -(a[1].length - b[1].length);
                });
                if (a.each(g, function(a, b) {
                    var d = b[1];
                    return c.substr(i, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], i += d.length, 
                    !1) : void 0;
                }), -1 !== f) return f + 1;
                throw "Unknown name at position " + i;
            }, x = function() {
                if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
                i++;
            };
            for (e = 0; e < b.length; e++) if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1; else switch (b.charAt(e)) {
              case "d":
                r = v("d");
                break;

              case "D":
                w("D", l, m);
                break;

              case "o":
                s = v("o");
                break;

              case "m":
                q = v("m");
                break;

              case "M":
                q = w("M", n, o);
                break;

              case "y":
                p = v("y");
                break;

              case "@":
                h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
                break;

              case "!":
                h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, 
                r = h.getDate();
                break;

              case "'":
                u("'") ? x() : t = !0;
                break;

              default:
                x();
            }
            if (i < c.length && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
            if (-1 === p ? p = new Date().getFullYear() : 100 > p && (p += new Date().getFullYear() - new Date().getFullYear() % 100 + (k >= p ? 0 : -100)), 
            s > -1) for (q = 1, r = s; ;) {
                if (f = this._getDaysInMonth(p, q - 1), f >= r) break;
                q++, r -= f;
            }
            if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date";
            return h;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(a, b, c) {
            if (!b) return "";
            var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, h = (c ? c.monthNames : null) || this._defaults.monthNames, i = function(b) {
                var c = d + 1 < a.length && a.charAt(d + 1) === b;
                return c && d++, c;
            }, j = function(a, b, c) {
                var d = "" + b;
                if (i(a)) for (;d.length < c; ) d = "0" + d;
                return d;
            }, k = function(a, b, c, d) {
                return i(a) ? d[b] : c[b];
            }, l = "", m = !1;
            if (b) for (d = 0; d < a.length; d++) if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1; else switch (a.charAt(d)) {
              case "d":
                l += j("d", b.getDate(), 2);
                break;

              case "D":
                l += k("D", b.getDay(), e, f);
                break;

              case "o":
                l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;

              case "m":
                l += j("m", b.getMonth() + 1, 2);
                break;

              case "M":
                l += k("M", b.getMonth(), g, h);
                break;

              case "y":
                l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                break;

              case "@":
                l += b.getTime();
                break;

              case "!":
                l += 1e4 * b.getTime() + this._ticksTo1970;
                break;

              case "'":
                i("'") ? l += "'" : m = !0;
                break;

              default:
                l += a.charAt(d);
            }
            return l;
        },
        _possibleChars: function(a) {
            var b, c = "", d = !1, e = function(c) {
                var d = b + 1 < a.length && a.charAt(b + 1) === c;
                return d && b++, d;
            };
            for (b = 0; b < a.length; b++) if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1; else switch (a.charAt(b)) {
              case "d":
              case "m":
              case "y":
              case "@":
                c += "0123456789";
                break;

              case "D":
              case "M":
                return null;

              case "'":
                e("'") ? c += "'" : d = !0;
                break;

              default:
                c += a.charAt(b);
            }
            return c;
        },
        _get: function(a, c) {
            return a.settings[c] !== b ? a.settings[c] : this._defaults[c];
        },
        _setDateFromField: function(a, b) {
            if (a.input.val() !== a.lastVal) {
                var c = this._get(a, "dateFormat"), d = a.lastVal = a.input ? a.input.val() : null, e = this._getDefaultDate(a), f = e, g = this._getFormatConfig(a);
                try {
                    f = this.parseDate(c, d, g) || e;
                } catch (h) {
                    d = b ? "" : d;
                }
                a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), 
                a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, 
                this._adjustInstDate(a);
            }
        },
        _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date()));
        },
        _determineDate: function(b, c, d) {
            var e = function(a) {
                var b = new Date();
                return b.setDate(b.getDate() + a), b;
            }, f = function(c) {
                try {
                    return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b));
                } catch (d) {}
                for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date(), f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j; ) {
                    switch (j[2] || "d") {
                      case "d":
                      case "D":
                        h += parseInt(j[1], 10);
                        break;

                      case "w":
                      case "W":
                        h += 7 * parseInt(j[1], 10);
                        break;

                      case "m":
                      case "M":
                        g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                        break;

                      case "y":
                      case "Y":
                        f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                    }
                    j = i.exec(c);
                }
                return new Date(f, g, h);
            }, g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
            return g = g && "Invalid Date" === g.toString() ? d : g, g && (g.setHours(0), g.setMinutes(0), 
            g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g);
        },
        _daylightSavingAdjust: function(a) {
            return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null;
        },
        _setDate: function(a, b, c) {
            var d = !b, e = a.selectedMonth, f = a.selectedYear, g = this._restrictMinMax(a, this._determineDate(a, b, new Date()));
            a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), 
            a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), 
            this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a));
        },
        _getDate: function(a) {
            var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return b;
        },
        _attachHandlers: function(b) {
            var c = this._get(b, "stepMonths"), d = "#" + b.id.replace(/\\\\/g, "\\");
            b.dpDiv.find("[data-handler]").map(function() {
                var b = {
                    prev: function() {
                        a.datepicker._adjustDate(d, -c, "M");
                    },
                    next: function() {
                        a.datepicker._adjustDate(d, +c, "M");
                    },
                    hide: function() {
                        a.datepicker._hideDatepicker();
                    },
                    today: function() {
                        a.datepicker._gotoToday(d);
                    },
                    selectDay: function() {
                        return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), 
                        !1;
                    },
                    selectMonth: function() {
                        return a.datepicker._selectMonthYear(d, this, "M"), !1;
                    },
                    selectYear: function() {
                        return a.datepicker._selectMonthYear(d, this, "Y"), !1;
                    }
                };
                a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date(), P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())), Q = this._get(a, "isRTL"), R = this._get(a, "showButtonPanel"), S = this._get(a, "hideIfNoPrevNext"), T = this._get(a, "navigationAsDateFormat"), U = this._getNumberOfMonths(a), V = this._get(a, "showCurrentAtPos"), W = this._get(a, "stepMonths"), X = 1 !== U[0] || 1 !== U[1], Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)), Z = this._getMinMaxDate(a, "min"), $ = this._getMinMaxDate(a, "max"), _ = a.drawMonth - V, ab = a.drawYear;
            if (0 > _ && (_ += 12, ab--), $) for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), 
            b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(ab, _, 1)) > b; ) _--, 
            0 > _ && (_ = 11, ab--);
            for (a.drawMonth = _, a.drawYear = ab, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(ab, _ - W, 1)), this._getFormatConfig(a)) : c, 
            d = this._canAdjustMonth(a, -1, ab, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", 
            e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(ab, _ + W, 1)), this._getFormatConfig(a)) : e, 
            f = this._canAdjustMonth(a, 1, ab, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", 
            g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, 
            g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", 
            j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", 
            k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), 
            m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), 
            p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), 
            s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; w < U[0]; w++) {
                for (x = "", this.maxRows = 4, y = 0; y < U[1]; y++) {
                    if (z = this._daylightSavingAdjust(new Date(ab, _, a.selectedDay)), A = " ui-corner-all", 
                    B = "", X) {
                        if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
                          case 0:
                            B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                            break;

                          case U[1] - 1:
                            B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                            break;

                          default:
                            B += " ui-datepicker-group-middle", A = "";
                        }
                        B += "'>";
                    }
                    for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, ab, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", 
                    C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", 
                    v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
                    for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(ab, _), ab === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), 
                    F = (this._getFirstDayOfMonth(ab, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, 
                    this.maxRows = H, I = this._daylightSavingAdjust(new Date(ab, _, 1 - F)), J = 0; H > J; J++) {
                        for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", 
                        v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [ I ]) : [ !0, "" ], 
                        M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", 
                        I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                        B += K + "</tr>";
                    }
                    _++, _ > 11 && (_ = 0, ab++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), 
                    x += B;
                }
                u += x;
            }
            return u += j, a._keyEvent = !1, u;
        },
        _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
            var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"), r = this._get(a, "changeYear"), s = this._get(a, "showMonthAfterYear"), t = "<div class='ui-datepicker-title'>", u = "";
            if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>"; else {
                for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", 
                k = 0; 12 > k; k++) (!i || k >= d.getMonth()) && (!j || k <= e.getMonth()) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                u += "</select>";
            }
            if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml) if (a.yearshtml = "", 
            f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>"; else {
                for (l = this._get(a, "yearRange").split(":"), m = new Date().getFullYear(), n = function(a) {
                    var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                    return isNaN(b) ? m : b;
                }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, 
                p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null;
            }
            return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), 
            t += "</div>";
        },
        _adjustInstDate: function(a, b, c) {
            var d = a.drawYear + ("Y" === c ? b : 0), e = a.drawMonth + ("M" === c ? b : 0), f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0), g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
            a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), 
            ("M" === c || "Y" === c) && this._notifyChange(a);
        },
        _restrictMinMax: function(a, b) {
            var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max"), e = c && c > b ? c : b;
            return d && e > d ? d : e;
        },
        _notifyChange: function(a) {
            var b = this._get(a, "onChangeMonthYear");
            b && b.apply(a.input ? a.input[0] : null, [ a.selectedYear, a.selectedMonth + 1, a ]);
        },
        _getNumberOfMonths: function(a) {
            var b = this._get(a, "numberOfMonths");
            return null == b ? [ 1, 1 ] : "number" == typeof b ? [ 1, b ] : b;
        },
        _getMinMaxDate: function(a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null);
        },
        _getDaysInMonth: function(a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate();
        },
        _getFirstDayOfMonth: function(a, b) {
            return new Date(a, b, 1).getDay();
        },
        _canAdjustMonth: function(a, b, c, d) {
            var e = this._getNumberOfMonths(a), f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
            return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), 
            this._isInRange(a, f);
        },
        _isInRange: function(a, b) {
            var c, d, e = this._getMinMaxDate(a, "min"), f = this._getMinMaxDate(a, "max"), g = null, h = null, i = this._get(a, "yearRange");
            return i && (c = i.split(":"), d = new Date().getFullYear(), g = parseInt(c[0], 10), 
            h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), 
            (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || b.getFullYear() <= h);
        },
        _getFormatConfig: function(a) {
            var b = this._get(a, "shortYearCutoff");
            return b = "string" != typeof b ? b : new Date().getFullYear() % 100 + parseInt(b, 10), 
            {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            };
        },
        _formatDate: function(a, b, c, d) {
            b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a));
        }
    }), a.fn.datepicker = function(b) {
        if (!this.length) return this;
        a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), 
        a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
        var c = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this[0] ].concat(c)) : this.each(function() {
            "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this ].concat(c)) : a.datepicker._attachDatepicker(this, b);
        }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this[0] ].concat(c));
    }, a.datepicker = new c(), a.datepicker.initialized = !1, a.datepicker.uuid = new Date().getTime(), 
    a.datepicker.version = "1.10.4";
}(jQuery), function(a) {
    a.widget("ui.menu", {
        version: "1.10.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, a.proxy(function(a) {
                this.options.disabled && a.preventDefault();
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), 
            this._on({
                "mousedown .ui-menu-item > a": function(a) {
                    a.preventDefault();
                },
                "click .ui-state-disabled > a": function(a) {
                    a.preventDefault();
                },
                "click .ui-menu-item:has(a)": function(b) {
                    var c = a(b.target).closest(".ui-menu-item");
                    !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), 
                    c.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && a(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                },
                "mouseenter .ui-menu-item": function(b) {
                    var c = a(b.currentTarget);
                    c.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c);
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(a, b) {
                    var c = this.active || this.element.children(".ui-menu-item").eq(0);
                    b || this.focus(a, c);
                },
                blur: function(b) {
                    this._delay(function() {
                        a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b);
                    });
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(b) {
                    a(b.target).closest(".ui-menu").length || this.collapseAll(b), this.mouseHandled = !1;
                }
            });
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), 
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var b = a(this);
                b.data("ui-menu-submenu-carat") && b.remove();
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
        },
        _keydown: function(b) {
            function c(a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            }
            var d, e, f, g, h, i = !0;
            switch (b.keyCode) {
              case a.ui.keyCode.PAGE_UP:
                this.previousPage(b);
                break;

              case a.ui.keyCode.PAGE_DOWN:
                this.nextPage(b);
                break;

              case a.ui.keyCode.HOME:
                this._move("first", "first", b);
                break;

              case a.ui.keyCode.END:
                this._move("last", "last", b);
                break;

              case a.ui.keyCode.UP:
                this.previous(b);
                break;

              case a.ui.keyCode.DOWN:
                this.next(b);
                break;

              case a.ui.keyCode.LEFT:
                this.collapse(b);
                break;

              case a.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                break;

              case a.ui.keyCode.ENTER:
              case a.ui.keyCode.SPACE:
                this._activate(b);
                break;

              case a.ui.keyCode.ESCAPE:
                this.collapse(b);
                break;

              default:
                i = !1, e = this.previousFilter || "", f = String.fromCharCode(b.keyCode), g = !1, 
                clearTimeout(this.filterTimer), f === e ? g = !0 : f = e + f, h = new RegExp("^" + c(f), "i"), 
                d = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return h.test(a(this).children("a").text());
                }), d = g && -1 !== d.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : d, 
                d.length || (f = String.fromCharCode(b.keyCode), h = new RegExp("^" + c(f), "i"), 
                d = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return h.test(a(this).children("a").text());
                })), d.length ? (this.focus(b, d), d.length > 1 ? (this.previousFilter = f, this.filterTimer = this._delay(function() {
                    delete this.previousFilter;
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter;
            }
            i && b.preventDefault();
        },
        _activate: function(a) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(a) : this.select(a));
        },
        refresh: function() {
            var b, c = this.options.icons.submenu, d = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), 
            d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var b = a(this), d = b.prev("a"), e = a("<span>").addClass("ui-menu-icon ui-icon " + c).data("ui-menu-submenu-carat", !0);
                d.attr("aria-haspopup", "true").prepend(e), b.attr("aria-labelledby", d.attr("id"));
            }), b = d.add(this.element), b.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), b.children(":not(.ui-menu-item)").each(function() {
                var b = a(this);
                /[^\-\u2014\u2013\s]/.test(b.text()) || b.addClass("ui-widget-content ui-menu-divider");
            }), b.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },
        _setOption: function(a, b) {
            "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), 
            this._super(a, b);
        },
        focus: function(a, b) {
            var c, d;
            this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), 
            d = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), 
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), 
            a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), c = b.children(".ui-menu"), c.length && a && /^mouse/.test(a.type) && this._startOpening(c), 
            this.activeMenu = b.parent(), this._trigger("focus", a, {
                item: b
            });
        },
        _scrollIntoView: function(b) {
            var c, d, e, f, g, h;
            this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, 
            d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, 
            f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.height(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h));
        },
        blur: function(a, b) {
            b || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), 
            this.active = null, this._trigger("blur", a, {
                item: this.active
            }));
        },
        _startOpening: function(a) {
            clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(a);
            }, this.delay));
        },
        _open: function(b) {
            var c = a.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
            b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c);
        },
        collapseAll: function(b, c) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d;
            }, this.delay);
        },
        _close: function(a) {
            a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active");
        },
        collapse: function(a) {
            var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            b && b.length && (this._close(), this.focus(a, b));
        },
        expand: function(a) {
            var b = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            b && b.length && (this._open(b.parent()), this._delay(function() {
                this.focus(a, b);
            }));
        },
        next: function(a) {
            this._move("next", "first", a);
        },
        previous: function(a) {
            this._move("prev", "last", a);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(a, b, c) {
            var d;
            this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), 
            d && d.length && this.active || (d = this.activeMenu.children(".ui-menu-item")[b]()), 
            this.focus(c, d);
        },
        nextPage: function(b) {
            var c, d, e;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, 
            e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return c = a(this), c.offset().top - d - e < 0;
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(b);
        },
        previousPage: function(b) {
            var c, d, e;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, 
            e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return c = a(this), c.offset().top - d + e > 0;
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(b);
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(b) {
            this.active = this.active || a(b.target).closest(".ui-menu-item");
            var c = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c);
        }
    });
}(jQuery), function(a) {
    var b = 5;
    a.widget("ui.slider", a.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, 
            this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), 
            this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        },
        _createHandles: function() {
            var b, c, d = this.options, e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), f = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", g = [];
            for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), 
            e = e.slice(0, c)), b = e.length; c > b; b++) g.push(f);
            this.handles = e.add(a(g.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), 
            this.handles.each(function(b) {
                a(this).data("ui-slider-handle-index", b);
            });
        },
        _createRange: function() {
            var b = this.options, c = "";
            b.range ? (b.range === !0 && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [ b.values[0], b.values[0] ] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [ this._valueMin(), this._valueMin() ]), 
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), 
            this.range.addClass(c + ("min" === b.range || "max" === b.range ? " ui-slider-range-" + b.range : ""))) : (this.range && this.range.remove(), 
            this.range = null);
        },
        _setupEvents: function() {
            var a = this.handles.add(this.range).filter("a");
            this._off(a), this._on(a, this._handleEvents), this._hoverable(a), this._focusable(a);
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), 
            this._mouseDestroy();
        },
        _mouseCapture: function(b) {
            var c, d, e, f, g, h, i, j, k = this, l = this.options;
            return l.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), c = {
                x: b.pageX,
                y: b.pageY
            }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, 
            this.handles.each(function(b) {
                var c = Math.abs(d - k.values(b));
                (e > c || e === c && (b === k._lastChangedValue || k.values(b) === l.min)) && (e = c, 
                f = a(this), g = b);
            }), h = this._start(b, g), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = g, 
            f.addClass("ui-state-active").focus(), i = f.offset(), j = !a(b.target).parents().addBack().is(".ui-slider-handle"), 
            this._clickOffset = j ? {
                left: 0,
                top: 0
            } : {
                left: b.pageX - i.left - f.width() / 2,
                top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, 
            !0));
        },
        _mouseStart: function() {
            return !0;
        },
        _mouseDrag: function(a) {
            var b = {
                x: a.pageX,
                y: a.pageY
            }, c = this._normValueFromMouse(b);
            return this._slide(a, this._handleIndex, c), !1;
        },
        _mouseStop: function(a) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), 
            this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, 
            this._animateOff = !1, !1;
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(a) {
            var b, c, d, e, f;
            return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, 
            c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 
            d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), 
            e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f);
        },
        _start: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (c.value = this.values(b), 
            c.values = this.values()), this._trigger("start", a, c);
        },
        _slide: function(a, b, c) {
            var d, e, f;
            this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 
            2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && d > c) && (c = d), 
            c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c,
                values: e
            }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c))) : c !== this.value() && (f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c
            }), f !== !1 && this.value(c));
        },
        _stop: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            this.options.values && this.options.values.length && (c.value = this.values(b), 
            c.values = this.values()), this._trigger("stop", a, c);
        },
        _change: function(a, b) {
            if (!this._keySliding && !this._mouseSliding) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (c.value = this.values(b), 
                c.values = this.values()), this._lastChangedValue = b, this._trigger("change", a, c);
            }
        },
        value: function(a) {
            return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), 
            void this._change(null, 0)) : this._value();
        },
        values: function(b, c) {
            var d, e, f;
            if (arguments.length > 1) return this.options.values[b] = this._trimAlignValue(c), 
            this._refreshValue(), void this._change(null, b);
            if (!arguments.length) return this._values();
            if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();
            for (d = this.options.values, e = arguments[0], f = 0; f < d.length; f += 1) d[f] = this._trimAlignValue(e[f]), 
            this._change(null, f);
            this._refreshValue();
        },
        _setOption: function(b, c) {
            var d, e = 0;
            switch ("range" === b && this.options.range === !0 && ("min" === c ? (this.options.value = this._values(0), 
            this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), 
            this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), 
            a.Widget.prototype._setOption.apply(this, arguments), b) {
              case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), 
                this._refreshValue();
                break;

              case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;

              case "values":
                for (this._animateOff = !0, this._refreshValue(), d = 0; e > d; d += 1) this._change(null, d);
                this._animateOff = !1;
                break;

              case "min":
              case "max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                break;

              case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1;
            }
        },
        _value: function() {
            var a = this.options.value;
            return a = this._trimAlignValue(a);
        },
        _values: function(a) {
            var b, c, d;
            if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b);
            if (this.options.values && this.options.values.length) {
                for (c = this.options.values.slice(), d = 0; d < c.length; d += 1) c[d] = this._trimAlignValue(c[d]);
                return c;
            }
            return [];
        },
        _trimAlignValue: function(a) {
            if (a <= this._valueMin()) return this._valueMin();
            if (a >= this._valueMax()) return this._valueMax();
            var b = this.options.step > 0 ? this.options.step : 1, c = (a - this._valueMin()) % b, d = a - c;
            return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5));
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.options.max;
        },
        _refreshValue: function() {
            var b, c, d, e, f, g = this.options.range, h = this.options, i = this, j = this._animateOff ? !1 : h.animate, k = {};
            this.options.values && this.options.values.length ? this.handles.each(function(d) {
                c = (i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100, k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", 
                a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), i.options.range === !0 && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                    left: c + "%"
                }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                    width: c - b + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                    bottom: c + "%"
                }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                    height: c - b + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                }))), b = c;
            }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, 
            k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), 
            "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                width: c + "%"
            }, h.animate), "max" === g && "horizontal" === this.orientation && this.range[j ? "animate" : "css"]({
                width: 100 - c + "%"
            }, {
                queue: !1,
                duration: h.animate
            }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                height: c + "%"
            }, h.animate), "max" === g && "vertical" === this.orientation && this.range[j ? "animate" : "css"]({
                height: 100 - c + "%"
            }, {
                queue: !1,
                duration: h.animate
            }));
        },
        _handleEvents: {
            keydown: function(c) {
                var d, e, f, g, h = a(c.target).data("ui-slider-handle-index");
                switch (c.keyCode) {
                  case a.ui.keyCode.HOME:
                  case a.ui.keyCode.END:
                  case a.ui.keyCode.PAGE_UP:
                  case a.ui.keyCode.PAGE_DOWN:
                  case a.ui.keyCode.UP:
                  case a.ui.keyCode.RIGHT:
                  case a.ui.keyCode.DOWN:
                  case a.ui.keyCode.LEFT:
                    if (c.preventDefault(), !this._keySliding && (this._keySliding = !0, a(c.target).addClass("ui-state-active"), 
                    d = this._start(c, h), d === !1)) return;
                }
                switch (g = this.options.step, e = f = this.options.values && this.options.values.length ? this.values(h) : this.value(), 
                c.keyCode) {
                  case a.ui.keyCode.HOME:
                    f = this._valueMin();
                    break;

                  case a.ui.keyCode.END:
                    f = this._valueMax();
                    break;

                  case a.ui.keyCode.PAGE_UP:
                    f = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / b);
                    break;

                  case a.ui.keyCode.PAGE_DOWN:
                    f = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / b);
                    break;

                  case a.ui.keyCode.UP:
                  case a.ui.keyCode.RIGHT:
                    if (e === this._valueMax()) return;
                    f = this._trimAlignValue(e + g);
                    break;

                  case a.ui.keyCode.DOWN:
                  case a.ui.keyCode.LEFT:
                    if (e === this._valueMin()) return;
                    f = this._trimAlignValue(e - g);
                }
                this._slide(c, h, f);
            },
            click: function(a) {
                a.preventDefault();
            },
            keyup: function(b) {
                var c = a(b.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), 
                a(b.target).removeClass("ui-state-active"));
            }
        }
    });
}(jQuery), jQuery(function(a) {
    a.datepicker.regional["zh-CN"] = {
        closeText: "关闭",
        prevText: "&#x3C;上月",
        nextText: "下月&#x3E;",
        currentText: "今天",
        monthNames: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
        monthNamesShort: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
        dayNames: [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ],
        dayNamesShort: [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ],
        dayNamesMin: [ "日", "一", "二", "三", "四", "五", "六" ],
        weekHeader: "周",
        dateFormat: "yy-mm-dd",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !0,
        yearSuffix: "年"
    }, a.datepicker.setDefaults(a.datepicker.regional["zh-CN"]);
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        };
        return !1;
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0;
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end);
        };
        return setTimeout(e, b), this;
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
            }
        });
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
        });
    }
    var c = '[data-dismiss="alert"]', d = function(b) {
        a(b).on("click", c, this.close);
    };
    d.VERSION = "3.2.0", d.prototype.close = function(b) {
        function c() {
            f.detach().trigger("closed.bs.alert").remove();
        }
        var d = a(this), e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), 
        f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), 
        a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", c).emulateTransitionEnd(150) : c());
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this;
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
        });
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), d[e](null == f[b] ? this.options[b] : f[b]), 
        setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, 
            d.removeClass(c).removeAttr(c));
        }, this), 0);
    }, c.prototype.toggle = function() {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), 
            a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
        }
        a && this.$element.toggleClass("active");
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this;
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault();
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }
    var c = function(b, c) {
        this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, 
        "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, c.prototype.keydown = function(a) {
        switch (a.which) {
          case 37:
            this.prev();
            break;

          case 39:
            this.next();
            break;

          default:
            return;
        }
        a.preventDefault();
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), 
        this;
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
    }, c.prototype.to = function(b) {
        var c = this, d = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b);
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]));
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next");
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev");
    }, c.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"), e = c || d[b](), f = this.interval, g = "next" == b ? "left" : "right", h = "next" == b ? "first" : "last", i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]();
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = e[0], k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: g
        });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(e)]);
                l && l.addClass("active");
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: g
            });
            return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), 
            e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd", function() {
                e.removeClass([ b, g ].join(" ")).addClass("active"), d.removeClass([ "active", g ].join(" ")), 
                i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m);
                }, 0);
            }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), 
            e.addClass("active"), this.sliding = !1, this.$element.trigger(m)), f && this.cycle(), 
            this;
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this;
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
        }
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data());
        });
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.collapse"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), 
            "string" == typeof b && e[b]();
        });
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, 
        this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle();
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        toggle: !0
    }, c.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
    }, c.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var c = a.Event("show.bs.collapse");
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                var d = this.$parent && this.$parent.find("> .panel > .in");
                if (d && d.length) {
                    var e = d.data("bs.collapse");
                    if (e && e.transitioning) return;
                    b.call(d, "hide"), e || d.data("bs.collapse", null);
                }
                var f = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1;
                var g = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, 
                    this.$element.trigger("shown.bs.collapse");
                };
                if (!a.support.transition) return g.call(this);
                var h = a.camelCase([ "scroll", f ].join("-"));
                this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h]);
            }
        }
    }, c.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), 
                this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this);
            }
        }
    }, c.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    var d = a.fn.collapse;
    a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = d, this;
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(c) {
        var d, e = a(this), f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""), g = a(f), h = g.data("bs.collapse"), i = h ? "toggle" : e.data(), j = e.attr("data-parent"), k = j && a(j);
        h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), 
        e[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), b.call(g, i);
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = c(a(this)), e = {
                relatedTarget: this
            };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e));
        }));
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent();
    }
    function d(b) {
        return this.each(function() {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
        });
    }
    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    };
    g.VERSION = "3.2.0", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
            }
            return !1;
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d), g = e.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && e.find(f).trigger("focus"), 
                d.trigger("click");
                var h = " li:not(.divider):visible a", i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), 
                    i.eq(j).trigger("focus");
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this;
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown);
}(jQuery), +function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
        });
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, 
        this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a);
    }, c.prototype.show = function(b) {
        var c = this, d = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, 
        this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), 
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), 
        this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0), 
            d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), 
            c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                c.$element.trigger("focus").trigger(e);
            }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e);
        }));
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), 
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), 
        this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), 
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
        }, this));
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$element.trigger("hidden.bs.modal");
        });
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, c.prototype.backdrop = function(b) {
        var c = this, d = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var e = a.support.transition && d;
            if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), 
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
            }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var f = function() {
                c.removeBackdrop(), b && b();
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f();
        } else b && b();
    }, c.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar());
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth);
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "");
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this;
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(e) && e
        }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus");
            });
        }), b.call(f, g, this);
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
        });
    }
    var c = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, 
        this.init("tooltip", a, b);
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), 
        this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), 
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS;
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b;
    }, c.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d);
        }), b;
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
        a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", 
        c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show();
        }, c.options.delay.show)) : c.show();
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
        a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", 
        c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide();
        }, c.options.delay.hide)) : c.hide();
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var c = a.contains(document.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !c) return;
            var d = this, e = this.tip(), f = this.getUID(this.type);
            this.setContent(), e.attr("id", f), this.$element.attr("aria-describedby", f), this.options.animation && e.addClass("fade");
            var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, h = /\s?auto?\s?/i, i = h.test(g);
            i && (g = g.replace(h, "") || "top"), e.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(g).data("bs." + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
            var j = this.getPosition(), k = e[0].offsetWidth, l = e[0].offsetHeight;
            if (i) {
                var m = g, n = this.$element.parent(), o = this.getPosition(n);
                g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top" : "top" == g && j.top - o.scroll - l < 0 ? "bottom" : "right" == g && j.right + k > o.width ? "left" : "left" == g && j.left - k < o.left ? "right" : g, 
                e.removeClass(m).addClass(g);
            }
            var p = this.getCalculatedOffset(g, j, k, l);
            this.applyPlacement(p, g);
            var q = function() {
                d.$element.trigger("shown.bs." + d.type), d.hoverState = null;
            };
            a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q();
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, 
        a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                });
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j, m = k.left ? "left" : "top", n = k.left ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(l, d[0][n], m);
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, c.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type);
        }
        var c = this, d = this.tip(), e = a.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), 
        a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), 
        this.hoverState = null, this);
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, c.prototype.hasContent = function() {
        return this.getTitle();
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName;
        return a.extend({}, "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop(),
            width: d ? a(window).width() : b.outerWidth(),
            height: d ? a(window).height() : b.outerHeight()
        }, d ? {
            top: 0,
            left: 0
        } : b.offset());
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        };
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k);
        }
        return e;
    }, c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a;
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template);
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, c.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
    }, c.prototype.enable = function() {
        this.enabled = !0;
    }, c.prototype.disable = function() {
        this.enabled = !1;
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
        a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, c.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type);
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this;
    };
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
        });
    }
    var c = function(a, b) {
        this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.2.0", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, 
    c.prototype.getDefaults = function() {
        return c.DEFAULTS;
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), 
        a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, c.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    }, c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this;
    };
}(jQuery), +function(a) {
    "use strict";
    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), 
        this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], 
        this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), 
        this.refresh(), this.process();
    }
    function c(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }
    b.VERSION = "3.2.0", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, b.prototype.refresh = function() {
        var b = "offset", c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), 
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this), e = d.data("target") || d.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [ [ f[b]().top + c, e ] ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            d.offsets.push(this[0]), d.targets.push(this[1]);
        });
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--; ) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), 
        d.trigger("activate.bs.scrollspy");
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this;
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data());
        });
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
        });
    }
    var c = function(b) {
        this.element = a(b);
    };
    c.VERSION = "3.2.0", c.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0], f = a.Event("show.bs.tab", {
                relatedTarget: e
            });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.closest("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    });
                });
            }
        }
    }, c.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), 
            b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), 
            b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d();
        }
        var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade");
        g ? f.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), f.removeClass("in");
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this;
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(c) {
        c.preventDefault(), b.call(a(this), "show");
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
        });
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), 
        this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
    };
    c.VERSION = "3.2.0", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a;
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1);
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = a(document).height(), d = this.$target.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.top, h = f.bottom;
            "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), 
            "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom" : null != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                null != this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : ""), k = a.Event(j + ".bs.affix");
                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, 
                this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), 
                "bottom" == i && this.$element.offset({
                    top: b - this.$element.height() - h
                }));
            }
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this;
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), 
            d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
        });
    });
}(jQuery), function(a, b, c) {
    "use strict";
    function d(a, b) {
        return b = b || Error, function() {
            var c, d, e = arguments[0], f = "[" + (a ? a + ":" : "") + e + "] ", g = arguments[1], h = arguments, i = function(a) {
                return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? JSON.stringify(a) : a;
            };
            for (c = f + g.replace(/\{\d+\}/g, function(a) {
                var b, c = +a.slice(1, -1);
                return c + 2 < h.length ? (b = h[c + 2], "function" == typeof b ? b.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof b ? "undefined" : "string" != typeof b ? Q(b) : b) : a;
            }), c = c + "\nhttp://errors.angularjs.org/1.3.0/" + (a ? a + "/" : "") + e, d = 2; d < arguments.length; d++) c = c + (2 == d ? "?" : "&") + "p" + (d - 2) + "=" + encodeURIComponent(i(arguments[d]));
            return new b(c);
        };
    }
    function e(a) {
        if (null == a || z(a)) return !1;
        var b = a.length;
        return a.nodeType === ee && b ? !0 : u(a) || $d(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function f(a, b, c) {
        var d, g;
        if (a) if (x(a)) for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a); else if ($d(a) || e(a)) {
            var h = "object" != typeof a;
            for (d = 0, g = a.length; g > d; d++) (h || d in a) && b.call(c, a[d], d, a);
        } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a); else for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
        return a;
    }
    function g(a) {
        var b = [];
        for (var c in a) a.hasOwnProperty(c) && b.push(c);
        return b.sort();
    }
    function h(a, b, c) {
        for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d;
    }
    function i(a) {
        return function(b, c) {
            a(c, b);
        };
    }
    function j() {
        return ++Yd;
    }
    function k(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey;
    }
    function l(a) {
        for (var b = a.$$hashKey, c = 1, d = arguments.length; d > c; c++) {
            var e = arguments[c];
            if (e) for (var f = Object.keys(e), g = 0, h = f.length; h > g; g++) {
                var i = f[g];
                a[i] = e[i];
            }
        }
        return k(a, b), a;
    }
    function m(a) {
        return parseInt(a, 10);
    }
    function n(a, b) {
        return l(new (l(function() {}, {
            prototype: a
        }))(), b);
    }
    function o() {}
    function p(a) {
        return a;
    }
    function q(a) {
        return function() {
            return a;
        };
    }
    function r(a) {
        return "undefined" == typeof a;
    }
    function s(a) {
        return "undefined" != typeof a;
    }
    function t(a) {
        return null !== a && "object" == typeof a;
    }
    function u(a) {
        return "string" == typeof a;
    }
    function v(a) {
        return "number" == typeof a;
    }
    function w(a) {
        return "[object Date]" === Vd.call(a);
    }
    function x(a) {
        return "function" == typeof a;
    }
    function y(a) {
        return "[object RegExp]" === Vd.call(a);
    }
    function z(a) {
        return a && a.window === a;
    }
    function A(a) {
        return a && a.$evalAsync && a.$watch;
    }
    function B(a) {
        return "[object File]" === Vd.call(a);
    }
    function C(a) {
        return "[object Blob]" === Vd.call(a);
    }
    function D(a) {
        return "boolean" == typeof a;
    }
    function E(a) {
        return a && x(a.then);
    }
    function F(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
    }
    function G(a) {
        var b, c = {}, d = a.split(",");
        for (b = 0; b < d.length; b++) c[d[b]] = !0;
        return c;
    }
    function H(a) {
        return Jd(a.nodeName || a[0].nodeName);
    }
    function I(a, b) {
        var c = a.indexOf(b);
        return c >= 0 && a.splice(c, 1), b;
    }
    function J(a, b, c, d) {
        if (z(a) || A(a)) throw Wd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (b) {
            if (a === b) throw Wd("cpi", "Can't copy! Source and destination are identical.");
            if (c = c || [], d = d || [], t(a)) {
                var e = c.indexOf(a);
                if (-1 !== e) return d[e];
                c.push(a), d.push(b);
            }
            var g;
            if ($d(a)) {
                b.length = 0;
                for (var h = 0; h < a.length; h++) g = J(a[h], null, c, d), t(a[h]) && (c.push(a[h]), 
                d.push(g)), b.push(g);
            } else {
                var i = b.$$hashKey;
                $d(b) ? b.length = 0 : f(b, function(a, c) {
                    delete b[c];
                });
                for (var j in a) a.hasOwnProperty(j) && (g = J(a[j], null, c, d), t(a[j]) && (c.push(a[j]), 
                d.push(g)), b[j] = g);
                k(b, i);
            }
        } else if (b = a, a) if ($d(a)) b = J(a, [], c, d); else if (w(a)) b = new Date(a.getTime()); else if (y(a)) b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), 
        b.lastIndex = a.lastIndex; else if (t(a)) {
            var l = Object.create(Object.getPrototypeOf(a));
            b = J(a, l, c, d);
        }
        return b;
    }
    function K(a, b) {
        if ($d(a)) {
            b = b || [];
            for (var c = 0, d = a.length; d > c; c++) b[c] = a[c];
        } else if (t(a)) {
            b = b || {};
            for (var e in a) ("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e]);
        }
        return b || a;
    }
    function L(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d, e, f, g = typeof a, h = typeof b;
        if (g == h && "object" == g) {
            if (!$d(a)) {
                if (w(a)) return w(b) ? L(a.getTime(), b.getTime()) : !1;
                if (y(a) && y(b)) return a.toString() == b.toString();
                if (A(a) || A(b) || z(a) || z(b) || $d(b)) return !1;
                f = {};
                for (e in a) if ("$" !== e.charAt(0) && !x(a[e])) {
                    if (!L(a[e], b[e])) return !1;
                    f[e] = !0;
                }
                for (e in b) if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !x(b[e])) return !1;
                return !0;
            }
            if (!$d(b)) return !1;
            if ((d = a.length) == b.length) {
                for (e = 0; d > e; e++) if (!L(a[e], b[e])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function M(a, b, c) {
        return a.concat(Sd.call(b, c));
    }
    function N(a, b) {
        return Sd.call(a, b || 0);
    }
    function O(a, b) {
        var c = arguments.length > 2 ? N(arguments, 2) : [];
        return !x(b) || b instanceof RegExp ? b : c.length ? function() {
            return arguments.length ? b.apply(a, c.concat(Sd.call(arguments, 0))) : b.apply(a, c);
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a);
        };
    }
    function P(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : z(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : A(d) && (e = "$SCOPE"), 
        e;
    }
    function Q(a, b) {
        return "undefined" == typeof a ? c : JSON.stringify(a, P, b ? "  " : null);
    }
    function R(a) {
        return u(a) ? JSON.parse(a) : a;
    }
    function S(a) {
        a = Pd(a).clone();
        try {
            a.empty();
        } catch (b) {}
        var c = Pd("<div>").append(a).html();
        try {
            return a[0].nodeType === fe ? Jd(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + Jd(b);
            });
        } catch (b) {
            return Jd(c);
        }
    }
    function T(a) {
        try {
            return decodeURIComponent(a);
        } catch (b) {}
    }
    function U(a) {
        var b, c, d = {};
        return f((a || "").split("&"), function(a) {
            if (a && (b = a.replace(/\+/g, "%20").split("="), c = T(b[0]), s(c))) {
                var e = s(b[1]) ? T(b[1]) : !0;
                Kd.call(d, c) ? $d(d[c]) ? d[c].push(e) : d[c] = [ d[c], e ] : d[c] = e;
            }
        }), d;
    }
    function V(a) {
        var b = [];
        return f(a, function(a, c) {
            $d(a) ? f(a, function(a) {
                b.push(X(c, !0) + (a === !0 ? "" : "=" + X(a, !0)));
            }) : b.push(X(c, !0) + (a === !0 ? "" : "=" + X(a, !0)));
        }), b.length ? b.join("&") : "";
    }
    function W(a) {
        return X(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function X(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
    }
    function Y(a, b) {
        var c, d, e = be.length;
        for (a = Pd(a), d = 0; e > d; ++d) if (c = be[d] + b, u(c = a.attr(c))) return c;
        return null;
    }
    function Z(a, b) {
        var c, d, e = {};
        f(be, function(b) {
            var e = b + "app";
            !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e));
        }), f(be, function(b) {
            var e, f = b + "app";
            !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f));
        }), c && (e.strictDi = null !== Y(c, "strict-di"), b(c, d ? [ d ] : [], e));
    }
    function $(c, d, e) {
        t(e) || (e = {});
        var g = {
            strictDi: !1
        };
        e = l(g, e);
        var h = function() {
            if (c = Pd(c), c.injector()) {
                var a = c[0] === b ? "document" : S(c);
                throw Wd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            d = d || [], d.unshift([ "$provide", function(a) {
                a.value("$rootElement", c);
            } ]), e.debugInfoEnabled && d.push([ "$compileProvider", function(a) {
                a.debugInfoEnabled(!0);
            } ]), d.unshift("ng");
            var f = Ob(d, e.strictDi);
            return f.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                a.$apply(function() {
                    b.data("$injector", d), c(b)(a);
                });
            } ]), f;
        }, i = /^NG_ENABLE_DEBUG_INFO!/, j = /^NG_DEFER_BOOTSTRAP!/;
        return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), 
        a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), void (Xd.resumeBootstrap = function(a) {
            f(a, function(a) {
                d.push(a);
            }), h();
        }));
    }
    function _() {
        a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload();
    }
    function ab(a) {
        return Xd.element(a).injector().get("$$testability");
    }
    function bb(a, b) {
        return b = b || "_", a.replace(ce, function(a, c) {
            return (c ? b : "") + a.toLowerCase();
        });
    }
    function cb() {
        var b;
        de || (Qd = a.jQuery, Qd && Qd.fn.on ? (Pd = Qd, l(Qd.fn, {
            scope: xe.scope,
            isolateScope: xe.isolateScope,
            controller: xe.controller,
            injector: xe.injector,
            inheritedData: xe.inheritedData
        }), b = Qd.cleanData, Qd.cleanData = function(a) {
            var c;
            if (Zd) Zd = !1; else for (var d, e = 0; null != (d = a[e]); e++) c = Qd._data(d, "events"), 
            c && c.$destroy && Qd(d).triggerHandler("$destroy");
            b(a);
        }) : Pd = rb, Xd.element = Pd, de = !0);
    }
    function db(a, b, c) {
        if (!a) throw Wd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a;
    }
    function eb(a, b, c) {
        return c && $d(a) && (a = a[a.length - 1]), db(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), 
        a;
    }
    function fb(a, b) {
        if ("hasOwnProperty" === a) throw Wd("badname", "hasOwnProperty is not a valid {0} name", b);
    }
    function gb(a, b, c) {
        if (!b) return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], 
        a && (a = (f = a)[d]);
        return !c && x(a) ? O(f, a) : a;
    }
    function hb(a) {
        var b = a[0], c = a[a.length - 1], d = [ b ];
        do {
            if (b = b.nextSibling, !b) break;
            d.push(b);
        } while (b !== c);
        return Pd(d);
    }
    function ib() {
        return Object.create(null);
    }
    function jb(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c());
        }
        var c = d("$injector"), e = d("ng"), f = b(a, "angular", Object);
        return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
            var a = {};
            return function(d, f, g) {
                var h = function(a, b) {
                    if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b);
                };
                return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
                    function a(a, c, d, e) {
                        return e || (e = b), function() {
                            return e[d || "push"]([ a, c, arguments ]), j;
                        };
                    }
                    if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                    var b = [], e = [], h = [], i = a("$injector", "invoke", "push", e), j = {
                        _invokeQueue: b,
                        _configBlocks: e,
                        _runBlocks: h,
                        requires: f,
                        name: d,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        animation: a("$animateProvider", "register"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: i,
                        run: function(a) {
                            return h.push(a), this;
                        }
                    };
                    return g && i(g), j;
                });
            };
        });
    }
    function kb(b) {
        l(b, {
            bootstrap: $,
            copy: J,
            extend: l,
            equals: L,
            element: Pd,
            forEach: f,
            injector: Ob,
            noop: o,
            bind: O,
            toJson: Q,
            fromJson: R,
            identity: p,
            isUndefined: r,
            isDefined: s,
            isString: u,
            isFunction: x,
            isObject: t,
            isNumber: v,
            isElement: F,
            isArray: $d,
            version: je,
            isDate: w,
            lowercase: Jd,
            uppercase: Ld,
            callbacks: {
                counter: 0
            },
            getTestability: ab,
            $$minErr: d,
            $$csp: ae,
            reloadWithDebugInfo: _
        }), Rd = jb(a);
        try {
            Rd("ngLocale");
        } catch (c) {
            Rd("ngLocale", []).provider("$locale", kc);
        }
        Rd("ng", [ "ngLocale" ], [ "$provide", function(a) {
            a.provider({
                $$sanitizeUri: Mc
            }), a.provider("$compile", Vb).directive({
                a: hf,
                input: Bf,
                textarea: Bf,
                form: nf,
                script: sg,
                select: vg,
                style: xg,
                option: wg,
                ngBind: Uf,
                ngBindHtml: Wf,
                ngBindTemplate: Vf,
                ngClass: Xf,
                ngClassEven: Zf,
                ngClassOdd: Yf,
                ngCloak: $f,
                ngController: _f,
                ngForm: of,
                ngHide: mg,
                ngIf: cg,
                ngInclude: dg,
                ngInit: fg,
                ngNonBindable: gg,
                ngPluralize: hg,
                ngRepeat: ig,
                ngShow: lg,
                ngStyle: ng,
                ngSwitch: og,
                ngSwitchWhen: pg,
                ngSwitchDefault: qg,
                ngOptions: ug,
                ngTransclude: rg,
                ngModel: Kf,
                ngList: Qf,
                ngChange: Lf,
                pattern: Nf,
                ngPattern: Nf,
                required: Mf,
                ngRequired: Mf,
                minlength: Pf,
                ngMinlength: Pf,
                maxlength: Of,
                ngMaxlength: Of,
                ngValue: Sf,
                ngModelOptions: Tf
            }).directive({
                ngInclude: eg
            }).directive(jf).directive(ag), a.provider({
                $anchorScroll: Pb,
                $animate: He,
                $browser: Sb,
                $cacheFactory: Tb,
                $controller: Zb,
                $document: $b,
                $exceptionHandler: _b,
                $filter: Zc,
                $interpolate: ic,
                $interval: jc,
                $http: ec,
                $httpBackend: gc,
                $location: xc,
                $log: yc,
                $parse: Gc,
                $rootScope: Lc,
                $q: Hc,
                $$q: Ic,
                $sce: Rc,
                $sceDelegate: Qc,
                $sniffer: Sc,
                $templateCache: Ub,
                $templateRequest: Tc,
                $$testability: Uc,
                $timeout: Vc,
                $window: Yc,
                $$rAF: Kc,
                $$asyncCallback: Qb
            });
        } ]);
    }
    function lb() {
        return ++le;
    }
    function mb(a) {
        return a.replace(oe, function(a, b, c, d) {
            return d ? c.toUpperCase() : c;
        }).replace(pe, "Moz$1");
    }
    function nb(a) {
        return !te.test(a);
    }
    function ob(a) {
        var b = a.nodeType;
        return b === ee || !b || b === he;
    }
    function pb(a, b) {
        var c, d, e, g, h = b.createDocumentFragment(), i = [];
        if (nb(a)) i.push(b.createTextNode(a)); else {
            for (c = c || h.appendChild(b.createElement("div")), d = (ue.exec(a) || [ "", "" ])[1].toLowerCase(), 
            e = we[d] || we._default, c.innerHTML = e[1] + a.replace(ve, "<$1></$2>") + e[2], 
            g = e[0]; g--; ) c = c.lastChild;
            i = M(i, c.childNodes), c = h.firstChild, c.textContent = "";
        }
        return h.textContent = "", h.innerHTML = "", f(i, function(a) {
            h.appendChild(a);
        }), h;
    }
    function qb(a, c) {
        c = c || b;
        var d;
        return (d = se.exec(a)) ? [ c.createElement(d[1]) ] : (d = pb(a, c)) ? d.childNodes : [];
    }
    function rb(a) {
        if (a instanceof rb) return a;
        var b;
        if (u(a) && (a = _d(a), b = !0), !(this instanceof rb)) {
            if (b && "<" != a.charAt(0)) throw re("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new rb(a);
        }
        b ? Bb(this, qb(a)) : Bb(this, a);
    }
    function sb(a) {
        return a.cloneNode(!0);
    }
    function tb(a, b) {
        if (b || vb(a), a.querySelectorAll) for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) vb(c[d]);
    }
    function ub(a, b, c, d) {
        if (s(d)) throw re("offargs", "jqLite#off() does not support the `selector` argument");
        var e = wb(a), g = e && e.events, h = e && e.handle;
        if (h) if (b) f(b.split(" "), function(b) {
            if (s(c)) {
                var d = g[b];
                if (I(d || [], c), d && d.length > 0) return;
            }
            ne(a, b, h), delete g[b];
        }); else for (b in g) "$destroy" !== b && ne(a, b, h), delete g[b];
    }
    function vb(a, b) {
        var d = a.ng339, e = d && ke[d];
        if (e) {
            if (b) return void delete e.data[b];
            e.handle && (e.events.$destroy && e.handle({}, "$destroy"), ub(a)), delete ke[d], 
            a.ng339 = c;
        }
    }
    function wb(a, b) {
        var d = a.ng339, e = d && ke[d];
        return b && !e && (a.ng339 = d = lb(), e = ke[d] = {
            events: {},
            data: {},
            handle: c
        }), e;
    }
    function xb(a, b, c) {
        if (ob(a)) {
            var d = s(c), e = !d && b && !t(b), f = !b, g = wb(a, !e), h = g && g.data;
            if (d) h[b] = c; else {
                if (f) return h;
                if (e) return h && h[b];
                l(h, b);
            }
        }
    }
    function yb(a, b) {
        return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1;
    }
    function zb(a, b) {
        b && a.setAttribute && f(b.split(" "), function(b) {
            a.setAttribute("class", _d((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + _d(b) + " ", " ")));
        });
    }
    function Ab(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function(a) {
                a = _d(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ");
            }), a.setAttribute("class", _d(c));
        }
    }
    function Bb(a, b) {
        if (b) if (b.nodeType) a[a.length++] = b; else {
            var c = b.length;
            if ("number" == typeof c && b.window !== b) {
                if (c) for (var d = 0; c > d; d++) a[a.length++] = b[d];
            } else a[a.length++] = b;
        }
    }
    function Cb(a, b) {
        return Db(a, "$" + (b || "ngController") + "Controller");
    }
    function Db(a, b, d) {
        a.nodeType == he && (a = a.documentElement);
        for (var e = $d(b) ? b : [ b ]; a; ) {
            for (var f = 0, g = e.length; g > f; f++) if ((d = Pd.data(a, e[f])) !== c) return d;
            a = a.parentNode || a.nodeType === ie && a.host;
        }
    }
    function Eb(a) {
        for (tb(a, !0); a.firstChild; ) a.removeChild(a.firstChild);
    }
    function Fb(a, b) {
        b || tb(a);
        var c = a.parentNode;
        c && c.removeChild(a);
    }
    function Gb(b, c) {
        c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : Pd(c).on("load", b);
    }
    function Hb(a, b) {
        var c = ye[b.toLowerCase()];
        return c && ze[H(a)] && c;
    }
    function Ib(a, b) {
        var c = a.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Ae[b];
    }
    function Jb(a, b) {
        var c = function(c, d) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented;
            };
            var e = b[d || c.type], f = e ? e.length : 0;
            if (f) {
                if (r(c.immediatePropagationStopped)) {
                    var g = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c);
                    };
                }
                c.isImmediatePropagationStopped = function() {
                    return c.immediatePropagationStopped === !0;
                }, f > 1 && (e = K(e));
                for (var h = 0; f > h; h++) c.isImmediatePropagationStopped() || e[h].call(a, c);
            }
        };
        return c.elem = a, c;
    }
    function Kb(a, b) {
        var c = a && a.$$hashKey;
        if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
        var d = typeof a;
        return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || j)() : d + ":" + a;
    }
    function Lb(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function() {
                return ++c;
            };
        }
        f(a, this.put, this);
    }
    function Mb(a) {
        var b = a.toString().replace(Ee, ""), c = b.match(Be);
        return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
    }
    function Nb(a, b, c) {
        var d, e, g, h;
        if ("function" == typeof a) {
            if (!(d = a.$inject)) {
                if (d = [], a.length) {
                    if (b) throw u(c) && c || (c = a.name || Mb(a)), Fe("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
                    e = a.toString().replace(Ee, ""), g = e.match(Be), f(g[1].split(Ce), function(a) {
                        a.replace(De, function(a, b, c) {
                            d.push(c);
                        });
                    });
                }
                a.$inject = d;
            }
        } else $d(a) ? (h = a.length - 1, eb(a[h], "fn"), d = a.slice(0, h)) : eb(a, "fn", !0);
        return d;
    }
    function Ob(a, b) {
        function d(a) {
            return function(b, c) {
                return t(b) ? void f(b, i(a)) : a(b, c);
            };
        }
        function e(a, b) {
            if (fb(a, "service"), (x(b) || $d(b)) && (b = A.instantiate(b)), !b.$get) throw Fe("pget", "Provider '{0}' must define $get factory method.", a);
            return z[a + v] = b;
        }
        function g(a, b) {
            return function() {
                var d = C.invoke(b, this, c, a);
                if (r(d)) throw Fe("undef", "Provider '{0}' must return a value from $get factory method.", a);
                return d;
            };
        }
        function h(a, b, c) {
            return e(a, {
                $get: c !== !1 ? g(a, b) : b
            });
        }
        function j(a, b) {
            return h(a, [ "$injector", function(a) {
                return a.instantiate(b);
            } ]);
        }
        function k(a, b) {
            return h(a, q(b), !1);
        }
        function l(a, b) {
            fb(a, "constant"), z[a] = b, B[a] = b;
        }
        function m(a, b) {
            var c = A.get(a + v), d = c.$get;
            c.$get = function() {
                var a = C.invoke(d, c);
                return C.invoke(b, null, {
                    $delegate: a
                });
            };
        }
        function n(a) {
            var b, c = [];
            return f(a, function(a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; c > b; b++) {
                        var d = a[b], e = A.get(d[0]);
                        e[d[1]].apply(e, d[2]);
                    }
                }
                if (!y.get(a)) {
                    y.put(a, !0);
                    try {
                        u(a) ? (b = Rd(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), 
                        d(b._configBlocks)) : x(a) ? c.push(A.invoke(a)) : $d(a) ? c.push(A.invoke(a)) : eb(a, "module");
                    } catch (e) {
                        throw $d(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
                        Fe("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e);
                    }
                }
            }), c;
        }
        function p(a, c) {
            function d(b) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === s) throw Fe("cdep", "Circular dependency found: {0}", b + " <- " + w.join(" <- "));
                    return a[b];
                }
                try {
                    return w.unshift(b), a[b] = s, a[b] = c(b);
                } catch (d) {
                    throw a[b] === s && delete a[b], d;
                } finally {
                    w.shift();
                }
            }
            function e(a, c, e, f) {
                "string" == typeof e && (f = e, e = null);
                var g, h, i, j = [], k = Nb(a, b, f);
                for (h = 0, g = k.length; g > h; h++) {
                    if (i = k[h], "string" != typeof i) throw Fe("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
                    j.push(e && e.hasOwnProperty(i) ? e[i] : d(i));
                }
                return $d(a) && (a = a[g]), a.apply(c, j);
            }
            function f(a, b, c) {
                var d, f, g = function() {};
                return g.prototype = ($d(a) ? a[a.length - 1] : a).prototype, d = new g(), f = e(a, d, b, c), 
                t(f) || x(f) ? f : d;
            }
            return {
                invoke: e,
                instantiate: f,
                get: d,
                annotate: Nb,
                has: function(b) {
                    return z.hasOwnProperty(b + v) || a.hasOwnProperty(b);
                }
            };
        }
        b = b === !0;
        var s = {}, v = "Provider", w = [], y = new Lb([], !0), z = {
            $provide: {
                provider: d(e),
                factory: d(h),
                service: d(j),
                value: d(k),
                constant: d(l),
                decorator: m
            }
        }, A = z.$injector = p(z, function() {
            throw Fe("unpr", "Unknown provider: {0}", w.join(" <- "));
        }), B = {}, C = B.$injector = p(B, function(a) {
            var b = A.get(a + v);
            return C.invoke(b.$get, b, c, a);
        });
        return f(n(a), function(a) {
            C.invoke(a || o);
        }), C;
    }
    function Pb() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function(b, c, d) {
            function e(a) {
                var b = null;
                return Array.prototype.some.call(a, function(a) {
                    return "a" === H(a) ? (b = a, !0) : void 0;
                }), b;
            }
            function f() {
                var a = h.yOffset;
                if (x(a)) a = a(); else if (F(a)) {
                    var c = a[0], d = b.getComputedStyle(c);
                    a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom;
                } else v(a) || (a = 0);
                return a;
            }
            function g(a) {
                if (a) {
                    a.scrollIntoView();
                    var c = f();
                    if (c) {
                        var d = a.getBoundingClientRect().top;
                        b.scrollBy(0, d - c);
                    }
                } else b.scrollTo(0, 0);
            }
            function h() {
                var a, b = c.hash();
                b ? (a = i.getElementById(b)) ? g(a) : (a = e(i.getElementsByName(b))) ? g(a) : "top" === b && g(null) : g(null);
            }
            var i = b.document;
            return a && d.$watch(function() {
                return c.hash();
            }, function(a, b) {
                (a !== b || "" !== a) && Gb(function() {
                    d.$evalAsync(h);
                });
            }), h;
        } ];
    }
    function Qb() {
        this.$get = [ "$$rAF", "$timeout", function(a, b) {
            return a.supported ? function(b) {
                return a(b);
            } : function(a) {
                return b(a, 0, !1);
            };
        } ];
    }
    function Rb(a, b, d, e) {
        function g(a) {
            try {
                a.apply(null, N(arguments, 1));
            } finally {
                if (w--, 0 === w) for (;x.length; ) try {
                    x.pop()();
                } catch (b) {
                    d.error(b);
                }
            }
        }
        function h(a, b) {
            !function c() {
                f(z, function(a) {
                    a();
                }), y = b(c, a);
            }();
        }
        function i() {
            j(), k();
        }
        function j() {
            A = a.history.state, A = r(A) ? null : A, L(A, H) && (A = H), H = A;
        }
        function k() {
            (C !== m.url() || B !== A) && (C = m.url(), B = A, f(F, function(a) {
                a(m.url(), A);
            }));
        }
        function l(a) {
            try {
                return decodeURIComponent(a);
            } catch (b) {
                return a;
            }
        }
        var m = this, n = b[0], p = a.location, q = a.history, s = a.setTimeout, t = a.clearTimeout, v = {};
        m.isMock = !1;
        var w = 0, x = [];
        m.$$completeOutstandingRequest = g, m.$$incOutstandingRequestCount = function() {
            w++;
        }, m.notifyWhenNoOutstandingRequests = function(a) {
            f(z, function(a) {
                a();
            }), 0 === w ? a() : x.push(a);
        };
        var y, z = [];
        m.addPollFn = function(a) {
            return r(y) && h(100, s), z.push(a), a;
        };
        var A, B, C = p.href, D = b.find("base"), E = null;
        j(), B = A, m.url = function(b, c, d) {
            if (r(d) && (d = null), p !== a.location && (p = a.location), q !== a.history && (q = a.history), 
            b) {
                var f = B === d;
                if (C === b && (!e.history || f)) return;
                var g = C && pc(C) === pc(b);
                return C = b, B = d, !e.history || g && f ? (g || (E = b), c ? p.replace(b) : p.href = b) : (q[c ? "replaceState" : "pushState"](d, "", b), 
                j(), B = A), m;
            }
            return E || p.href.replace(/%27/g, "'");
        }, m.state = function() {
            return A;
        };
        var F = [], G = !1, H = null;
        m.onUrlChange = function(b) {
            return G || (e.history && Pd(a).on("popstate", i), Pd(a).on("hashchange", i), G = !0), 
            F.push(b), b;
        }, m.$$checkUrlChange = k, m.baseHref = function() {
            var a = D.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var I = {}, J = "", K = m.baseHref();
        m.cookies = function(a, b) {
            var e, f, g, h, i;
            if (!a) {
                if (n.cookie !== J) for (J = n.cookie, f = J.split("; "), I = {}, h = 0; h < f.length; h++) g = f[h], 
                i = g.indexOf("="), i > 0 && (a = l(g.substring(0, i)), I[a] === c && (I[a] = l(g.substring(i + 1))));
                return I;
            }
            b === c ? n.cookie = encodeURIComponent(a) + "=;path=" + K + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (n.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + K).length + 1, 
            e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"));
        }, m.defer = function(a, b) {
            var c;
            return w++, c = s(function() {
                delete v[c], g(a);
            }, b || 0), v[c] = !0, c;
        }, m.defer.cancel = function(a) {
            return v[a] ? (delete v[a], t(a), g(o), !0) : !1;
        };
    }
    function Sb() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
            return new Rb(a, d, b, c);
        } ];
    }
    function Tb() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null);
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a));
                }
                if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                var g = 0, h = l({}, c, {
                    id: a
                }), i = {}, j = c && c.capacity || Number.MAX_VALUE, k = {}, m = null, n = null;
                return b[a] = {
                    put: function(a, b) {
                        if (j < Number.MAX_VALUE) {
                            var c = k[a] || (k[a] = {
                                key: a
                            });
                            e(c);
                        }
                        if (!r(b)) return a in i || g++, i[a] = b, g > j && this.remove(n.key), b;
                    },
                    get: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            e(b);
                        }
                        return i[a];
                    },
                    remove: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a];
                        }
                        delete i[a], g--;
                    },
                    removeAll: function() {
                        i = {}, g = 0, k = {}, m = n = null;
                    },
                    destroy: function() {
                        i = null, h = null, k = null, delete b[a];
                    },
                    info: function() {
                        return l({}, h, {
                            size: g
                        });
                    }
                };
            }
            var b = {};
            return a.info = function() {
                var a = {};
                return f(b, function(b, c) {
                    a[c] = b.info();
                }), a;
            }, a.get = function(a) {
                return b[a];
            }, a;
        };
    }
    function Ub() {
        this.$get = [ "$cacheFactory", function(a) {
            return a("templates");
        } ];
    }
    function Vb(a, d) {
        function e(a, b) {
            var c = /^\s*([@=&])(\??)\s*(\w*)\s*$/, d = {};
            return f(a, function(a, e) {
                var f = a.match(c);
                if (!f) throw Ie("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, e, a);
                d[e] = {
                    attrName: f[3] || e,
                    mode: f[1],
                    optional: "?" === f[2]
                };
            }), d;
        }
        var g = {}, h = "Directive", j = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, k = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, m = G("ngSrc,ngSrcset,src,srcset"), r = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, v = /^(on[a-z]+|formaction)$/;
        this.directive = function y(b, c) {
            return fb(b, "directive"), u(b) ? (db(c, "directiveFactory"), g.hasOwnProperty(b) || (g[b] = [], 
            a.factory(b + h, [ "$injector", "$exceptionHandler", function(a, c) {
                var d = [];
                return f(g[b], function(f, g) {
                    try {
                        var h = a.invoke(f);
                        x(h) ? h = {
                            compile: q(h)
                        } : !h.compile && h.link && (h.compile = q(h.link)), h.priority = h.priority || 0, 
                        h.index = g, h.name = h.name || b, h.require = h.require || h.controller && h.name, 
                        h.restrict = h.restrict || "EA", t(h.scope) && (h.$$isolateBindings = e(h.scope, h.name)), 
                        d.push(h);
                    } catch (i) {
                        c(i);
                    }
                }), d;
            } ])), g[b].push(c)) : f(b, i(y)), this;
        }, this.aHrefSanitizationWhitelist = function(a) {
            return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist();
        };
        var w = !0;
        this.debugInfoEnabled = function(a) {
            return s(a) ? (w = a, this) : w;
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, e, i, q, s, y, z, B, C, D) {
            function E(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function F(a, b, c, d, e) {
                a instanceof Pd || (a = Pd(a)), f(a, function(b, c) {
                    b.nodeType == fe && b.nodeValue.match(/\S+/) && (a[c] = Pd(b).wrap("<span></span>").parent()[0]);
                });
                var g = J(a, b, a, c, d, e);
                F.$$addScopeClass(a);
                var h = null;
                return function(b, c, d, e, f) {
                    db(b, "scope"), h || (h = G(f));
                    var i;
                    if (i = "html" !== h ? Pd($(h, Pd("<div>").append(a).html())) : c ? xe.clone.call(a) : a, 
                    d) for (var j in d) i.data("$" + j + "Controller", d[j].instance);
                    return F.$$addScopeInfo(i, b), c && c(i, b), g && g(b, i, i, e), i;
                };
            }
            function G(a) {
                var b = a && a[0];
                return b && "foreignobject" !== H(b) && b.toString().match(/SVG/) ? "svg" : "html";
            }
            function J(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, m, n, q;
                    if (o) {
                        var r = d.length;
                        for (q = new Array(r), k = 0; k < p.length; k += 3) m = p[k], q[m] = d[m];
                    } else q = d;
                    for (k = 0, l = p.length; l > k; ) i = q[p[k++]], g = p[k++], h = p[k++], g ? (g.scope ? (j = a.$new(), 
                    F.$$addScopeInfo(Pd(i), j)) : j = a, n = g.transcludeOnThisElement ? K(a, g.transclude, f, g.elementTranscludeOnThisElement) : !g.templateOnThisElement && f ? f : !f && b ? K(a, b) : null, 
                    g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f);
                }
                for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++) i = new gb(), j = M(a[q], [], i, 0 === q ? e : c, f), 
                k = j.length ? Q(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && F.$$addScopeClass(i.$$element), 
                m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : J(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), 
                (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
                return n ? h : null;
            }
            function K(a, b, c) {
                var d = function(d, e, f, g, h) {
                    return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, f, c, g);
                };
                return d;
            }
            function M(a, b, c, d, e) {
                var f, g, h = a.nodeType, i = c.$attr;
                switch (h) {
                  case ee:
                    T(b, Wb(H(a)), "E", d, e);
                    for (var l, m, n, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
                        var v = !1, w = !1;
                        l = r[s], m = l.name, p = _d(l.value), o = Wb(m), (q = lb.test(o)) && (m = bb(o.substr(6), "-"));
                        var x = o.replace(/(Start|End)$/, "");
                        U(x) && o === x + "Start" && (v = m, w = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), 
                        n = Wb(m.toLowerCase()), i[n] = m, (q || !c.hasOwnProperty(n)) && (c[n] = p, Hb(a, n) && (c[n] = !0)), 
                        ab(a, b, p, n, q), T(b, n, "A", d, e, v, w);
                    }
                    if (g = a.className, u(g) && "" !== g) for (;f = k.exec(g); ) n = Wb(f[2]), T(b, n, "C", d, e) && (c[n] = _d(f[3])), 
                    g = g.substr(f.index + f[0].length);
                    break;

                  case fe:
                    Z(b, a.nodeValue);
                    break;

                  case ge:
                    try {
                        f = j.exec(a.nodeValue), f && (n = Wb(f[1]), T(b, n, "M", d, e) && (c[n] = _d(f[2])));
                    } catch (y) {}
                }
                return b.sort(X), b;
            }
            function O(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw Ie("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                        a.nodeType == ee && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), 
                        a = a.nextSibling;
                    } while (e > 0);
                } else d.push(a);
                return Pd(d);
            }
            function P(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = O(e[0], b, c), a(d, e, f, g, h);
                };
            }
            function Q(a, g, h, i, j, k, l, m, n) {
                function o(a, b, c, d) {
                    a && (c && (a = P(a, c, d)), a.require = z.require, a.directiveName = B, (I === z || z.$$isolateScope) && (a = eb(a, {
                        isolateScope: !0
                    })), l.push(a)), b && (c && (b = P(b, c, d)), b.require = z.require, b.directiveName = B, 
                    (I === z || z.$$isolateScope) && (b = eb(b, {
                        isolateScope: !0
                    })), m.push(b));
                }
                function p(a, b, c, d) {
                    var e, g, h = "data", i = !1, j = c;
                    if (u(b)) {
                        if (g = b.match(r), b = b.substring(g[0].length), g[3] && (g[1] ? g[3] = null : g[1] = g[3]), 
                        "^" === g[1] ? h = "inheritedData" : "^^" === g[1] && (h = "inheritedData", j = c.parent()), 
                        "?" === g[2] && (i = !0), e = null, d && "data" === h && (e = d[b]) && (e = e.instance), 
                        e = e || j[h]("$" + b + "Controller"), !e && !i) throw Ie("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", b, a);
                        return e;
                    }
                    return $d(b) && (e = [], f(b, function(b) {
                        e.push(p(a, b, c, d));
                    })), e;
                }
                function v(a, b, e, i, j) {
                    function k(a, b, d) {
                        var e;
                        return A(a) || (d = b, b = a, a = c), U && (e = v), d || (d = U ? x.parent() : x), 
                        j(a, b, e, d, D);
                    }
                    var n, o, r, t, u, v, w, x, z;
                    if (g === e ? (z = h, x = h.$$element) : (x = Pd(e), z = new gb(x, h)), I && (u = b.$new(!0)), 
                    w = j && k, H && (y = {}, v = {}, f(H, function(a) {
                        var c, d = {
                            $scope: a === I || a.$$isolateScope ? u : b,
                            $element: x,
                            $attrs: z,
                            $transclude: w
                        };
                        t = a.controller, "@" == t && (t = z[a.name]), c = s(t, d, !0, a.controllerAs), 
                        v[a.name] = c, U || x.data("$" + a.name + "Controller", c.instance), y[a.name] = c;
                    })), I) {
                        F.$$addScopeInfo(x, u, !0, !(J && (J === I || J === I.$$originalDirective))), F.$$addScopeClass(x, !0);
                        var B = y && y[I.name], C = u;
                        B && B.identifier && I.bindToController === !0 && (C = B.instance), f(u.$$isolateBindings = I.$$isolateBindings, function(a, c) {
                            var e, f, g, h, i = a.attrName, j = a.optional, k = a.mode;
                            switch (k) {
                              case "@":
                                z.$observe(i, function(a) {
                                    C[c] = a;
                                }), z.$$observers[i].$$scope = b, z[i] && (C[c] = d(z[i])(b));
                                break;

                              case "=":
                                if (j && !z[i]) return;
                                f = q(z[i]), h = f.literal ? L : function(a, b) {
                                    return a === b || a !== a && b !== b;
                                }, g = f.assign || function() {
                                    throw e = C[c] = f(b), Ie("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", z[i], I.name);
                                }, e = C[c] = f(b);
                                var l = function(a) {
                                    return h(a, C[c]) || (h(a, e) ? g(b, a = C[c]) : C[c] = a), e = a;
                                };
                                l.$stateful = !0;
                                var m = b.$watch(q(z[i], l), null, f.literal);
                                u.$on("$destroy", m);
                                break;

                              case "&":
                                f = q(z[i]), C[c] = function(a) {
                                    return f(b, a);
                                };
                            }
                        });
                    }
                    for (y && (f(y, function(a) {
                        a();
                    }), y = null), n = 0, o = l.length; o > n; n++) r = l[n], fb(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w);
                    var D = b;
                    for (I && (I.template || null === I.templateUrl) && (D = u), a && a(D, e.childNodes, c, j), 
                    n = m.length - 1; n >= 0; n--) r = m[n], fb(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w);
                }
                n = n || {};
                for (var w, y, z, B, C, D, E, G = -Number.MAX_VALUE, H = n.controllerDirectives, I = n.newIsolateScopeDirective, J = n.templateDirective, K = n.nonTlbTranscludeDirective, Q = !1, T = !1, U = n.hasElementTranscludeDirective, X = h.$$element = Pd(g), Z = k, _ = i, ab = 0, bb = a.length; bb > ab; ab++) {
                    z = a[ab];
                    var db = z.$$start, hb = z.$$end;
                    if (db && (X = O(g, db, hb)), C = c, G > z.priority) break;
                    if ((E = z.scope) && (z.templateUrl || (t(E) ? (Y("new/isolated scope", I || w, z, X), 
                    I = z) : Y("new/isolated scope", I, z, X)), w = w || z), B = z.name, !z.templateUrl && z.controller && (E = z.controller, 
                    H = H || {}, Y("'" + B + "' controller", H[B], z, X), H[B] = z), (E = z.transclude) && (Q = !0, 
                    z.$$tlb || (Y("transclusion", K, z, X), K = z), "element" == E ? (U = !0, G = z.priority, 
                    C = X, X = h.$$element = Pd(b.createComment(" " + B + ": " + h[B] + " ")), g = X[0], 
                    cb(j, N(C), g), _ = F(C, i, G, Z && Z.name, {
                        nonTlbTranscludeDirective: K
                    })) : (C = Pd(sb(g)).contents(), X.empty(), _ = F(C, i))), z.template) if (T = !0, 
                    Y("template", J, z, X), J = z, E = x(z.template) ? z.template(X, h) : z.template, 
                    E = kb(E), z.replace) {
                        if (Z = z, C = nb(E) ? [] : Yb($(z.templateNamespace, _d(E))), g = C[0], 1 != C.length || g.nodeType !== ee) throw Ie("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", B, "");
                        cb(j, X, g);
                        var ib = {
                            $attr: {}
                        }, jb = M(g, [], ib), lb = a.splice(ab + 1, a.length - (ab + 1));
                        I && R(jb), a = a.concat(jb).concat(lb), V(h, ib), bb = a.length;
                    } else X.html(E);
                    if (z.templateUrl) T = !0, Y("template", J, z, X), J = z, z.replace && (Z = z), 
                    v = W(a.splice(ab, a.length - ab), X, h, j, Q && _, l, m, {
                        controllerDirectives: H,
                        newIsolateScopeDirective: I,
                        templateDirective: J,
                        nonTlbTranscludeDirective: K
                    }), bb = a.length; else if (z.compile) try {
                        D = z.compile(X, h, _), x(D) ? o(null, D, db, hb) : D && o(D.pre, D.post, db, hb);
                    } catch (mb) {
                        e(mb, S(X));
                    }
                    z.terminal && (v.terminal = !0, G = Math.max(G, z.priority));
                }
                return v.scope = w && w.scope === !0, v.transcludeOnThisElement = Q, v.elementTranscludeOnThisElement = U, 
                v.templateOnThisElement = T, v.transclude = _, n.hasElementTranscludeDirective = U, 
                v;
            }
            function R(a) {
                for (var b = 0, c = a.length; c > b; b++) a[b] = n(a[b], {
                    $$isolateScope: !0
                });
            }
            function T(b, d, f, i, j, k, l) {
                if (d === j) return null;
                var m = null;
                if (g.hasOwnProperty(d)) for (var o, p = a.get(d + h), q = 0, r = p.length; r > q; q++) try {
                    o = p[q], (i === c || i > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
                        $$start: k,
                        $$end: l
                    })), b.push(o), m = o);
                } catch (s) {
                    e(s);
                }
                return m;
            }
            function U(b) {
                if (g.hasOwnProperty(b)) for (var c, d = a.get(b + h), e = 0, f = d.length; f > e; e++) if (c = d[e], 
                c.multiElement) return !0;
                return !1;
            }
            function V(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                f(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), 
                    a.$set(e, d, !0, c[e]));
                }), f(b, function(b, f) {
                    "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), 
                    a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, 
                    d[f] = c[f]);
                });
            }
            function W(a, b, c, d, e, g, h, j) {
                var k, m, n = [], o = b[0], p = a.shift(), q = l({}, p, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: p
                }), r = x(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl, s = p.templateNamespace;
                return b.empty(), i(B.getTrustedResourceUrl(r)).then(function(i) {
                    var l, u, v, w;
                    if (i = kb(i), p.replace) {
                        if (v = nb(i) ? [] : Yb($(s, _d(i))), l = v[0], 1 != v.length || l.nodeType !== ee) throw Ie("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                        u = {
                            $attr: {}
                        }, cb(d, b, l);
                        var x = M(l, [], u);
                        t(p.scope) && R(x), a = x.concat(a), V(c, u);
                    } else l = o, b.html(i);
                    for (a.unshift(q), k = Q(a, l, c, e, b, p, g, h, j), f(d, function(a, c) {
                        a == l && (d[c] = b[0]);
                    }), m = J(b[0].childNodes, e); n.length; ) {
                        var y = n.shift(), z = n.shift(), A = n.shift(), B = n.shift(), C = b[0];
                        if (!y.$$destroyed) {
                            if (z !== o) {
                                var D = z.className;
                                j.hasElementTranscludeDirective && p.replace || (C = sb(l)), cb(A, Pd(z), C), E(Pd(C), D);
                            }
                            w = k.transcludeOnThisElement ? K(y, k.transclude, B) : B, k(m, y, C, d, w);
                        }
                    }
                    n = null;
                }), function(a, b, c, d, e) {
                    var f = e;
                    b.$$destroyed || (n ? (n.push(b), n.push(c), n.push(d), n.push(f)) : (k.transcludeOnThisElement && (f = K(b, k.transclude, e)), 
                    k(m, b, c, d, f)));
                };
            }
            function X(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function Y(a, b, c, d) {
                if (b) throw Ie("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, S(d));
            }
            function Z(a, b) {
                var c = d(b, !0);
                c && a.push({
                    priority: 0,
                    compile: function(a) {
                        var b = a.parent(), d = !!b.length;
                        return d && F.$$addBindingClass(b), function(a, b) {
                            var e = b.parent();
                            d || F.$$addBindingClass(e), F.$$addBindingInfo(e, c.expressions), a.$watch(c, function(a) {
                                b[0].nodeValue = a;
                            });
                        };
                    }
                });
            }
            function $(a, c) {
                switch (a = Jd(a || "html")) {
                  case "svg":
                  case "math":
                    var d = b.createElement("div");
                    return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;

                  default:
                    return c;
                }
            }
            function _(a, b) {
                if ("srcdoc" == b) return B.HTML;
                var c = H(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? B.RESOURCE_URL : void 0;
            }
            function ab(a, b, c, e, f) {
                var g = d(c, !0);
                if (g) {
                    if ("multiple" === e && "select" === H(a)) throw Ie("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", S(a));
                    b.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(b, c, h) {
                                    var i = h.$$observers || (h.$$observers = {});
                                    if (v.test(e)) throw Ie("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    h[e] && (g = d(h[e], !0, _(a, e), m[e] || f), g && (h[e] = g(b), (i[e] || (i[e] = [])).$$inter = !0, 
                                    (h.$$observers && h.$$observers[e].$$scope || b).$watch(g, function(a, b) {
                                        "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a);
                                    })));
                                }
                            };
                        }
                    });
                }
            }
            function cb(a, c, d) {
                var e, f, g = c[0], h = c.length, i = g.parentNode;
                if (a) for (e = 0, f = a.length; f > e; e++) if (a[e] == g) {
                    a[e++] = d;
                    for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                    a.length -= h - 1, a.context === g && (a.context = d);
                    break;
                }
                i && i.replaceChild(d, g);
                var m = b.createDocumentFragment();
                m.appendChild(g), Pd(d).data(Pd(g).data()), Qd ? (Zd = !0, Qd.cleanData([ g ])) : delete Pd.cache[g[Pd.expando]];
                for (var n = 1, o = c.length; o > n; n++) {
                    var p = c[n];
                    Pd(p).remove(), m.appendChild(p), delete c[n];
                }
                c[0] = d, c.length = 1;
            }
            function eb(a, b) {
                return l(function() {
                    return a.apply(null, arguments);
                }, a, b);
            }
            function fb(a, b, c, d, f, g) {
                try {
                    a(b, c, d, f, g);
                } catch (h) {
                    e(h, S(c));
                }
            }
            var gb = function(a, b) {
                if (b) {
                    var c, d, e, f = Object.keys(b);
                    for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e];
                } else this.$attr = {};
                this.$$element = a;
            };
            gb.prototype = {
                $normalize: Wb,
                $addClass: function(a) {
                    a && a.length > 0 && C.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && a.length > 0 && C.removeClass(this.$$element, a);
                },
                $updateClass: function(a, b) {
                    var c = Xb(a, b);
                    c && c.length && C.addClass(this.$$element, c);
                    var d = Xb(b, a);
                    d && d.length && C.removeClass(this.$$element, d);
                },
                $set: function(a, b, d, g) {
                    var h, i = this.$$element[0], j = Hb(i, a), k = Ib(i, a), l = a;
                    if (j ? (this.$$element.prop(a, b), g = j) : k && (this[k] = b, l = k), this[a] = b, 
                    g ? this.$attr[a] = g : (g = this.$attr[a], g || (this.$attr[a] = g = bb(a, "-"))), 
                    h = H(this.$$element), "a" === h && "href" === a || "img" === h && "src" === a) this[a] = b = D(b, "src" === a); else if ("img" === h && "srcset" === a) {
                        for (var m = "", n = _d(b), o = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, p = /\s/.test(n) ? o : /(,)/, q = n.split(p), r = Math.floor(q.length / 2), s = 0; r > s; s++) {
                            var t = 2 * s;
                            m += D(_d(q[t]), !0), m += " " + _d(q[t + 1]);
                        }
                        var u = _d(q[2 * s]).split(/\s/);
                        m += D(_d(u[0]), !0), 2 === u.length && (m += " " + _d(u[1])), this[a] = b = m;
                    }
                    d !== !1 && (null === b || b === c ? this.$$element.removeAttr(g) : this.$$element.attr(g, b));
                    var v = this.$$observers;
                    v && f(v[l], function(a) {
                        try {
                            a(b);
                        } catch (c) {
                            e(c);
                        }
                    });
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = ib()), e = d[a] || (d[a] = []);
                    return e.push(b), y.$evalAsync(function() {
                        e.$$inter || b(c[a]);
                    }), function() {
                        I(e, b);
                    };
                }
            };
            var hb = d.startSymbol(), jb = d.endSymbol(), kb = "{{" == hb || "}}" == jb ? p : function(a) {
                return a.replace(/\{\{/g, hb).replace(/}}/g, jb);
            }, lb = /^ngAttr[A-Z]/;
            return F.$$addBindingInfo = w ? function(a, b) {
                var c = a.data("$binding") || [];
                $d(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c);
            } : o, F.$$addBindingClass = w ? function(a) {
                E(a, "ng-binding");
            } : o, F.$$addScopeInfo = w ? function(a, b, c, d) {
                var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                a.data(e, b);
            } : o, F.$$addScopeClass = w ? function(a, b) {
                E(a, b ? "ng-isolate-scope" : "ng-scope");
            } : o, F;
        } ];
    }
    function Wb(a) {
        return mb(a.replace(Je, ""));
    }
    function Xb(a, b) {
        var c = "", d = a.split(/\s+/), e = b.split(/\s+/);
        a: for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
            c += (c.length > 0 ? " " : "") + g;
        }
        return c;
    }
    function Yb(a) {
        a = Pd(a);
        var b = a.length;
        if (1 >= b) return a;
        for (;b--; ) {
            var c = a[b];
            c.nodeType === ge && Td.call(a, b, 1);
        }
        return a;
    }
    function Zb() {
        var a = {}, b = !1, e = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(b, c) {
            fb(b, "controller"), t(b) ? l(a, b) : a[b] = c;
        }, this.allowGlobals = function() {
            b = !0;
        }, this.$get = [ "$injector", "$window", function(f, g) {
            function h(a, b, c, e) {
                if (!a || !t(a.$scope)) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
                a.$scope[b] = c;
            }
            return function(d, i, j, k) {
                var m, n, o, p;
                if (j = j === !0, k && u(k) && (p = k), u(d) && (n = d.match(e), o = n[1], p = p || n[3], 
                d = a.hasOwnProperty(o) ? a[o] : gb(i.$scope, o, !0) || (b ? gb(g, o, !0) : c), 
                eb(d, o, !0)), j) {
                    var q = function() {};
                    return q.prototype = ($d(d) ? d[d.length - 1] : d).prototype, m = new q(), p && h(i, p, m, o || d.name), 
                    l(function() {
                        return f.invoke(d, m, i, o), m;
                    }, {
                        instance: m,
                        identifier: p
                    });
                }
                return m = f.instantiate(d, i, o), p && h(i, p, m, o || d.name), m;
            };
        } ];
    }
    function $b() {
        this.$get = [ "$window", function(a) {
            return Pd(a.document);
        } ];
    }
    function _b() {
        this.$get = [ "$log", function(a) {
            return function() {
                a.error.apply(a, arguments);
            };
        } ];
    }
    function ac(a) {
        var b, c, d, e = {};
        return a ? (f(a.split("\n"), function(a) {
            d = a.indexOf(":"), b = Jd(_d(a.substr(0, d))), c = _d(a.substr(d + 1)), b && (e[b] = e[b] ? e[b] + ", " + c : c);
        }), e) : e;
    }
    function bc(a) {
        var b = t(a) ? a : c;
        return function(c) {
            return b || (b = ac(a)), c ? b[Jd(c)] || null : b;
        };
    }
    function cc(a, b, c) {
        return x(c) ? c(a, b) : (f(c, function(c) {
            a = c(a, b);
        }), a);
    }
    function dc(a) {
        return a >= 200 && 300 > a;
    }
    function ec() {
        var a = /^\s*(\[|\{[^\{])/, b = /[\}\]]\s*$/, d = /^\)\]\}',?\n/, e = "application/json", g = {
            "Content-Type": e + ";charset=utf-8"
        }, i = this.defaults = {
            transformResponse: [ function(c, f) {
                if (u(c)) {
                    c = c.replace(d, "");
                    var g = f("Content-Type");
                    (g && 0 === g.indexOf(e) || a.test(c) && b.test(c)) && (c = R(c));
                }
                return c;
            } ],
            transformRequest: [ function(a) {
                return !t(a) || B(a) || C(a) ? a : Q(a);
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: K(g),
                put: K(g),
                patch: K(g)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, j = !1;
        this.useApplyAsync = function(a) {
            return s(a) ? (j = !!a, this) : j;
        };
        var k = this.interceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, d, e, g, m) {
            function n(a) {
                function b(a) {
                    var b = l({}, a);
                    return b.data = a.data ? cc(a.data, a.headers, e.transformResponse) : a.data, dc(a.status) ? b : g.reject(b);
                }
                function d(a) {
                    function b(a) {
                        var b;
                        f(a, function(c, d) {
                            x(c) && (b = c(), null != b ? a[d] = b : delete a[d]);
                        });
                    }
                    var c, d, e, g = i.headers, h = l({}, a.headers);
                    g = l({}, g.common, g[Jd(a.method)]);
                    a: for (c in g) {
                        d = Jd(c);
                        for (e in h) if (Jd(e) === d) continue a;
                        h[c] = g[c];
                    }
                    return b(h), h;
                }
                var e = {
                    method: "get",
                    transformRequest: i.transformRequest,
                    transformResponse: i.transformResponse
                }, h = d(a);
                l(e, a), e.headers = h, e.method = Ld(e.method);
                var j = function(a) {
                    h = a.headers;
                    var c = cc(a.data, bc(h), a.transformRequest);
                    return r(c) && f(h, function(a, b) {
                        "content-type" === Jd(b) && delete h[b];
                    }), r(a.withCredentials) && !r(i.withCredentials) && (a.withCredentials = i.withCredentials), 
                    q(a, c, h).then(b, b);
                }, k = [ j, c ], m = g.when(e);
                for (f(z, function(a) {
                    (a.request || a.requestError) && k.unshift(a.request, a.requestError), (a.response || a.responseError) && k.push(a.response, a.responseError);
                }); k.length; ) {
                    var n = k.shift(), o = k.shift();
                    m = m.then(n, o);
                }
                return m.success = function(a) {
                    return m.then(function(b) {
                        a(b.data, b.status, b.headers, e);
                    }), m;
                }, m.error = function(a) {
                    return m.then(null, function(b) {
                        a(b.data, b.status, b.headers, e);
                    }), m;
                }, m;
            }
            function o() {
                f(arguments, function(a) {
                    n[a] = function(b, c) {
                        return n(l(c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            }
            function p() {
                f(arguments, function(a) {
                    n[a] = function(b, c, d) {
                        return n(l(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }));
                    };
                });
            }
            function q(d, f, h) {
                function k(a, b, c, d) {
                    function f() {
                        l(b, a, c, d);
                    }
                    o && (dc(a) ? o.put(w, [ a, b, ac(c), d ]) : o.remove(w)), j ? e.$applyAsync(f) : (f(), 
                    e.$$phase || e.$apply());
                }
                function l(a, b, c, e) {
                    b = Math.max(b, 0), (dc(b) ? q.resolve : q.reject)({
                        data: a,
                        status: b,
                        headers: bc(c),
                        config: d,
                        statusText: e
                    });
                }
                function m() {
                    var a = n.pendingRequests.indexOf(d);
                    -1 !== a && n.pendingRequests.splice(a, 1);
                }
                var o, p, q = g.defer(), u = q.promise, w = v(d.url, d.params);
                if (n.pendingRequests.push(d), u.then(m, m), !d.cache && !i.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (o = t(d.cache) ? d.cache : t(i.cache) ? i.cache : y), 
                o) if (p = o.get(w), s(p)) {
                    if (E(p)) return p.then(m, m), p;
                    $d(p) ? l(p[1], p[0], K(p[2]), p[3]) : l(p, 200, {}, "OK");
                } else o.put(w, u);
                if (r(p)) {
                    var x = Xc(d.url) ? b.cookies()[d.xsrfCookieName || i.xsrfCookieName] : c;
                    x && (h[d.xsrfHeaderName || i.xsrfHeaderName] = x), a(d.method, w, f, k, h, d.timeout, d.withCredentials, d.responseType);
                }
                return u;
            }
            function v(a, b) {
                if (!b) return a;
                var c = [];
                return h(b, function(a, b) {
                    null === a || r(a) || ($d(a) || (a = [ a ]), f(a, function(a) {
                        t(a) && (a = w(a) ? a.toISOString() : Q(a)), c.push(X(b) + "=" + X(a));
                    }));
                }), c.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a;
            }
            var y = d("$http"), z = [];
            return f(k, function(a) {
                z.unshift(u(a) ? m.get(a) : m.invoke(a));
            }), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put", "patch"), 
            n.defaults = i, n;
        } ];
    }
    function fc() {
        return new a.XMLHttpRequest();
    }
    function gc() {
        this.$get = [ "$browser", "$window", "$document", function(a, b, c) {
            return hc(a, fc, a.defer, b.angular.callbacks, c[0]);
        } ];
    }
    function hc(a, b, c, d, e) {
        function g(a, b, c) {
            var f = e.createElement("script"), g = null;
            return f.type = "text/javascript", f.src = a, f.async = !0, g = function(a) {
                ne(f, "load", g), ne(f, "error", g), e.body.removeChild(f), f = null;
                var h = -1, i = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i);
            }, me(f, "load", g), me(f, "error", g), e.body.appendChild(f), g;
        }
        return function(e, h, i, j, k, l, m, n) {
            function p() {
                t && t(), u && u.abort();
            }
            function q(b, d, e, f, g) {
                x && c.cancel(x), t = u = null, b(d, e, f, g), a.$$completeOutstandingRequest(o);
            }
            if (a.$$incOutstandingRequestCount(), h = h || a.url(), "jsonp" == Jd(e)) {
                var r = "_" + (d.counter++).toString(36);
                d[r] = function(a) {
                    d[r].data = a, d[r].called = !0;
                };
                var t = g(h.replace("JSON_CALLBACK", "angular.callbacks." + r), r, function(a, b) {
                    q(j, a, d[r].data, "", b), d[r] = o;
                });
            } else {
                var u = b();
                u.open(e, h, !0), f(k, function(a, b) {
                    s(a) && u.setRequestHeader(b, a);
                }), u.onload = function() {
                    var a = u.statusText || "", b = "response" in u ? u.response : u.responseText, c = 1223 === u.status ? 204 : u.status;
                    0 === c && (c = b ? 200 : "file" == Wc(h).protocol ? 404 : 0), q(j, c, b, u.getAllResponseHeaders(), a);
                };
                var v = function() {
                    q(j, -1, null, null, "");
                };
                if (u.onerror = v, u.onabort = v, m && (u.withCredentials = !0), n) try {
                    u.responseType = n;
                } catch (w) {
                    if ("json" !== n) throw w;
                }
                u.send(i || null);
            }
            if (l > 0) var x = c(p, l); else E(l) && l.then(p);
        };
    }
    function ic() {
        var a = "{{", b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a;
        }, this.endSymbol = function(a) {
            return a ? (b = a, this) : b;
        }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(a) {
                return "\\\\\\" + a;
            }
            function g(f, g, m, n) {
                function o(c) {
                    return c.replace(j, a).replace(k, b);
                }
                function p(a) {
                    try {
                        return D(C(a));
                    } catch (b) {
                        var c = Ke("interr", "Can't interpolate: {0}\n{1}", f, b.toString());
                        d(c);
                    }
                }
                n = !!n;
                for (var q, s, t, u = 0, v = [], w = [], y = f.length, z = [], A = []; y > u; ) {
                    if (-1 == (q = f.indexOf(a, u)) || -1 == (s = f.indexOf(b, q + h))) {
                        u !== y && z.push(o(f.substring(u)));
                        break;
                    }
                    u !== q && z.push(o(f.substring(u, q))), t = f.substring(q + h, s), v.push(t), w.push(c(t, p)), 
                    u = s + i, A.push(z.length), z.push("");
                }
                if (m && z.length > 1) throw Ke("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
                if (!g || v.length) {
                    var B = function(a) {
                        for (var b = 0, c = v.length; c > b; b++) {
                            if (n && r(a[b])) return;
                            z[A[b]] = a[b];
                        }
                        return z.join("");
                    }, C = function(a) {
                        return m ? e.getTrusted(m, a) : e.valueOf(a);
                    }, D = function(a) {
                        if (null == a) return "";
                        switch (typeof a) {
                          case "string":
                            break;

                          case "number":
                            a = "" + a;
                            break;

                          default:
                            a = Q(a);
                        }
                        return a;
                    };
                    return l(function(a) {
                        var b = 0, c = v.length, e = new Array(c);
                        try {
                            for (;c > b; b++) e[b] = w[b](a);
                            return B(e);
                        } catch (g) {
                            var h = Ke("interr", "Can't interpolate: {0}\n{1}", f, g.toString());
                            d(h);
                        }
                    }, {
                        exp: f,
                        expressions: v,
                        $$watchDelegate: function(a, b, c) {
                            var d;
                            return a.$watchGroup(w, function(c, e) {
                                var f = B(c);
                                x(b) && b.call(this, f, c !== e ? d : f, a), d = f;
                            }, c);
                        }
                    });
                }
            }
            var h = a.length, i = b.length, j = new RegExp(a.replace(/./g, f), "g"), k = new RegExp(b.replace(/./g, f), "g");
            return g.startSymbol = function() {
                return a;
            }, g.endSymbol = function() {
                return b;
            }, g;
        } ];
    }
    function jc() {
        this.$get = [ "$rootScope", "$window", "$q", "$$q", function(a, b, c, d) {
            function e(e, g, h, i) {
                var j = b.setInterval, k = b.clearInterval, l = 0, m = s(i) && !i, n = (m ? d : c).defer(), o = n.promise;
                return h = s(h) ? h : 0, o.then(null, null, e), o.$$intervalId = j(function() {
                    n.notify(l++), h > 0 && l >= h && (n.resolve(l), k(o.$$intervalId), delete f[o.$$intervalId]), 
                    m || a.$apply();
                }, g), f[o.$$intervalId] = n, o;
            }
            var f = {};
            return e.cancel = function(a) {
                return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), 
                delete f[a.$$intervalId], !0) : !1;
            }, e;
        } ];
    }
    function kc() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(a) {
                    return 1 === a ? "one" : "other";
                }
            };
        };
    }
    function lc(a) {
        for (var b = a.split("/"), c = b.length; c--; ) b[c] = W(b[c]);
        return b.join("/");
    }
    function mc(a, b, c) {
        var d = Wc(a, c);
        b.$$protocol = d.protocol, b.$$host = d.hostname, b.$$port = m(d.port) || Me[d.protocol] || null;
    }
    function nc(a, b, c) {
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var e = Wc(a, c);
        b.$$path = decodeURIComponent(d && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), 
        b.$$search = U(e.search), b.$$hash = decodeURIComponent(e.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
    }
    function oc(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0;
    }
    function pc(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b);
    }
    function qc(a) {
        return a.substr(0, pc(a).lastIndexOf("/") + 1);
    }
    function rc(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2));
    }
    function sc(a, b) {
        this.$$html5 = !0, b = b || "";
        var d = qc(a);
        mc(a, this, a), this.$$parse = function(b) {
            var c = oc(d, b);
            if (!u(c)) throw Ne("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', b, d);
            nc(c, this, a), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var a = V(this.$$search), b = this.$$hash ? "#" + W(this.$$hash) : "";
            this.$$url = lc(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1);
        }, this.$$parseLinkUrl = function(e, f) {
            if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;
            var g, h, i;
            return (g = oc(a, e)) !== c ? (h = g, i = (g = oc(b, g)) !== c ? d + (oc("/", g) || g) : a + h) : (g = oc(d, e)) !== c ? i = d + g : d == e + "/" && (i = d), 
            i && this.$$parse(i), !!i;
        };
    }
    function tc(a, b) {
        var c = qc(a);
        mc(a, this, a), this.$$parse = function(d) {
            function e(a, b, c) {
                var d, e = /^\/[A-Z]:(\/.*)/;
                return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), 
                d ? d[1] : a);
            }
            var f = oc(a, d) || oc(c, d), g = "#" == f.charAt(0) ? oc(b, f) : this.$$html5 ? f : "";
            if (!u(g)) throw Ne("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', d, b);
            nc(g, this, a), this.$$path = e(this.$$path, g, a), this.$$compose();
        }, this.$$compose = function() {
            var c = V(this.$$search), d = this.$$hash ? "#" + W(this.$$hash) : "";
            this.$$url = lc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "");
        }, this.$$parseLinkUrl = function(b) {
            return pc(a) == pc(b) ? (this.$$parse(b), !0) : !1;
        };
    }
    function uc(a, b) {
        this.$$html5 = !0, tc.apply(this, arguments);
        var c = qc(a);
        this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return a == pc(d) ? f = d : (g = oc(c, d)) ? f = a + b + g : c === d + "/" && (f = c), 
            f && this.$$parse(f), !!f;
        }, this.$$compose = function() {
            var c = V(this.$$search), d = this.$$hash ? "#" + W(this.$$hash) : "";
            this.$$url = lc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url;
        };
    }
    function vc(a) {
        return function() {
            return this[a];
        };
    }
    function wc(a, b) {
        return function(c) {
            return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this);
        };
    }
    function xc() {
        var b = "", c = {
            enabled: !1,
            requireBase: !0,
            rewriteLinks: !0
        };
        this.hashPrefix = function(a) {
            return s(a) ? (b = a, this) : b;
        }, this.html5Mode = function(a) {
            return D(a) ? (c.enabled = a, this) : t(a) ? (D(a.enabled) && (c.enabled = a.enabled), 
            D(a.requireBase) && (c.requireBase = a.requireBase), D(a.rewriteLinks) && (c.rewriteLinks = a.rewriteLinks), 
            this) : c;
        }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function(d, e, f, g) {
            function h(a, b, c) {
                var d = j.url(), f = j.$$state;
                try {
                    e.url(a, b, c), j.$$state = e.state();
                } catch (g) {
                    throw j.url(d), j.$$state = f, g;
                }
            }
            function i(a, b) {
                d.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b);
            }
            var j, k, l, m = e.baseHref(), n = e.url();
            if (c.enabled) {
                if (!m && c.requireBase) throw Ne("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                l = rc(n) + (m || "/"), k = f.history ? sc : uc;
            } else l = pc(n), k = tc;
            j = new k(l, "#" + b), j.$$parseLinkUrl(n, n), j.$$state = e.state();
            var o = /^\s*(javascript|mailto):/i;
            g.on("click", function(b) {
                if (c.rewriteLinks && !b.ctrlKey && !b.metaKey && 2 != b.which) {
                    for (var f = Pd(b.target); "a" !== H(f[0]); ) if (f[0] === g[0] || !(f = f.parent())[0]) return;
                    var h = f.prop("href"), i = f.attr("href") || f.attr("xlink:href");
                    t(h) && "[object SVGAnimatedString]" === h.toString() && (h = Wc(h.animVal).href), 
                    o.test(h) || !h || f.attr("target") || b.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (b.preventDefault(), 
                    j.absUrl() != e.url() && (d.$apply(), a.angular["ff-684208-preventDefault"] = !0));
                }
            }), j.absUrl() != n && e.url(j.absUrl(), !0);
            var p = !0;
            return e.onUrlChange(function(a, b) {
                d.$evalAsync(function() {
                    var c = j.absUrl(), e = j.$$state;
                    j.$$parse(a), j.$$state = b, d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented ? (j.$$parse(c), 
                    j.$$state = e, h(c, !1, e)) : (p = !1, i(c, e));
                }), d.$$phase || d.$digest();
            }), d.$watch(function() {
                var a = e.url(), b = e.state(), c = j.$$replace, g = a !== j.absUrl() || j.$$html5 && f.history && b !== j.$$state;
                (p || g) && (p = !1, d.$evalAsync(function() {
                    d.$broadcast("$locationChangeStart", j.absUrl(), a, j.$$state, b).defaultPrevented ? (j.$$parse(a), 
                    j.$$state = b) : (g && h(j.absUrl(), c, b === j.$$state ? null : j.$$state), i(a, b));
                })), j.$$replace = !1;
            }), j;
        } ];
    }
    function yc() {
        var a = !0, b = this;
        this.debugEnabled = function(b) {
            return s(b) ? (a = b, this) : a;
        }, this.$get = [ "$window", function(c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), 
                a;
            }
            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || o, g = !1;
                try {
                    g = !!e.apply;
                } catch (h) {}
                return g ? function() {
                    var a = [];
                    return f(arguments, function(b) {
                        a.push(d(b));
                    }), e.apply(b, a);
                } : function(a, b) {
                    e(a, null == b ? "" : b);
                };
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        a && c.apply(b, arguments);
                    };
                }()
            };
        } ];
    }
    function zc(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw Pe("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
        return a;
    }
    function Ac(a, b) {
        if (a) {
            if (a.constructor === a) throw Pe("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.window === a) throw Pe("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw Pe("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Object) throw Pe("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b);
        }
        return a;
    }
    function Bc(a, b) {
        if (a) {
            if (a.constructor === a) throw Pe("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Qe || a === Re || a === Se) throw Pe("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b);
        }
    }
    function Cc(a) {
        return a.constant;
    }
    function Dc(a, b, c, d) {
        Ac(a, d);
        for (var e, f = b.split("."), g = 0; f.length > 1; g++) {
            e = zc(f.shift(), d);
            var h = Ac(a[e], d);
            h || (h = {}, a[e] = h), a = h;
        }
        return e = zc(f.shift(), d), Ac(a[e], d), a[e] = c, c;
    }
    function Ec(a, b, d, e, f, g) {
        return zc(a, g), zc(b, g), zc(d, g), zc(e, g), zc(f, g), function(g, h) {
            var i = h && h.hasOwnProperty(a) ? h : g;
            return null == i ? i : (i = i[a], b ? null == i ? c : (i = i[b], d ? null == i ? c : (i = i[d], 
            e ? null == i ? c : (i = i[e], f ? null == i ? c : i = i[f] : i) : i) : i) : i);
        };
    }
    function Fc(a, b, d) {
        var e = Ye[a];
        if (e) return e;
        var g = a.split("."), h = g.length;
        if (b.csp) e = 6 > h ? Ec(g[0], g[1], g[2], g[3], g[4], d) : function(a, b) {
            var e, f = 0;
            do e = Ec(g[f++], g[f++], g[f++], g[f++], g[f++], d)(a, b), b = c, a = e; while (h > f);
            return e;
        }; else {
            var i = "";
            f(g, function(a, b) {
                zc(a, d), i += "if(s == null) return undefined;\ns=" + (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a + ";\n";
            }), i += "return s;";
            var j = new Function("s", "l", i);
            j.toString = q(i), e = j;
        }
        return e.sharedGetter = !0, e.assign = function(b, c) {
            return Dc(b, a, c, a);
        }, Ye[a] = e, e;
    }
    function Gc() {
        var a = ib(), b = {
            csp: !1
        };
        this.$get = [ "$filter", "$sniffer", function(c, d) {
            function e(a) {
                var b = a;
                return a.sharedGetter && (b = function(b, c) {
                    return a(b, c);
                }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign), b;
            }
            function g(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.constant || (e.inputs ? g(e.inputs, b) : -1 === b.indexOf(e) && b.push(e));
                }
                return b;
            }
            function h(a, b) {
                return null == a || null == b ? a === b : "object" == typeof a && (a = a.valueOf(), 
                "object" == typeof a) ? !1 : a === b || a !== a && b !== b;
            }
            function i(a, b, c, d) {
                var e, f = d.$$inputs || (d.$$inputs = g(d.inputs, []));
                if (1 === f.length) {
                    var i = h;
                    return f = f[0], a.$watch(function(a) {
                        var b = f(a);
                        return h(b, i) || (e = d(a), i = b && b.valueOf()), e;
                    }, b, c);
                }
                for (var j = [], k = 0, l = f.length; l > k; k++) j[k] = h;
                return a.$watch(function(a) {
                    for (var b = !1, c = 0, g = f.length; g > c; c++) {
                        var i = f[c](a);
                        (b || (b = !h(i, j[c]))) && (j[c] = i && i.valueOf());
                    }
                    return b && (e = d(a)), e;
                }, b, c);
            }
            function j(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    f = a, x(b) && b.apply(this, arguments), s(a) && d.$$postDigest(function() {
                        s(f) && e();
                    });
                }, c);
            }
            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return f(a, function(a) {
                        s(a) || (b = !1);
                    }), b;
                }
                var g, h;
                return g = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    h = a, x(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
                        e(h) && g();
                    });
                }, c);
            }
            function l(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function() {
                    x(b) && b.apply(this, arguments), e();
                }, c);
            }
            function m(a, b) {
                if (!b) return a;
                var c = function(c, d) {
                    var e = a(c, d), f = b(e, c, d);
                    return s(e) ? f : e;
                };
                return a.$$watchDelegate && a.$$watchDelegate !== i ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = i, 
                c.inputs = [ a ]), c;
            }
            return b.csp = d.csp, function(d, f) {
                var g, h, n;
                switch (typeof d) {
                  case "string":
                    if (n = d = d.trim(), g = a[n], !g) {
                        ":" === d.charAt(0) && ":" === d.charAt(1) && (h = !0, d = d.substring(2));
                        var p = new We(b), q = new Xe(p, c, b);
                        g = q.parse(d), g.constant ? g.$$watchDelegate = l : h ? (g = e(g), g.$$watchDelegate = g.literal ? k : j) : g.inputs && (g.$$watchDelegate = i), 
                        a[n] = g;
                    }
                    return m(g, f);

                  case "function":
                    return m(d, f);

                  default:
                    return m(o, f);
                }
            };
        } ];
    }
    function Hc() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(a, b) {
            return Jc(function(b) {
                a.$evalAsync(b);
            }, b);
        } ];
    }
    function Ic() {
        this.$get = [ "$browser", "$exceptionHandler", function(a, b) {
            return Jc(function(b) {
                a.defer(b);
            }, b);
        } ];
    }
    function Jc(a, b) {
        function e(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0, b.call(a, c));
                };
            }
            var e = !1;
            return [ d(b), d(c) ];
        }
        function g() {
            this.$$state = {
                status: 0
            };
        }
        function h(a, b) {
            return function(c) {
                b.call(a, c);
            };
        }
        function i(a) {
            var d, e, f;
            f = a.pending, a.processScheduled = !1, a.pending = c;
            for (var g = 0, h = f.length; h > g; ++g) {
                e = f[g][0], d = f[g][a.status];
                try {
                    x(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value);
                } catch (i) {
                    e.reject(i), b(i);
                }
            }
        }
        function j(b) {
            !b.processScheduled && b.pending && (b.processScheduled = !0, a(function() {
                i(b);
            }));
        }
        function k() {
            this.promise = new g(), this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), 
            this.notify = h(this, this.notify);
        }
        function l(a) {
            var b = new k(), c = 0, d = $d(a) ? [] : {};
            return f(a, function(a, e) {
                c++, r(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a);
                });
            }), 0 === c && b.resolve(d), b.promise;
        }
        var m = d("$q", TypeError), n = function() {
            return new k();
        };
        g.prototype = {
            then: function(a, b, c) {
                var d = new k();
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([ d, a, b, c ]), 
                this.$$state.status > 0 && j(this.$$state), d.promise;
            },
            "catch": function(a) {
                return this.then(null, a);
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return q(b, !0, a);
                }, function(b) {
                    return q(b, !1, a);
                }, b);
            }
        }, k.prototype = {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(m("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a));
            },
            $$resolve: function(a) {
                var c, d;
                d = e(this, this.$$resolve, this.$$reject);
                try {
                    (t(a) || x(a)) && (c = a && a.then), x(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, 
                    this.promise.$$state.status = 1, j(this.promise.$$state));
                } catch (f) {
                    d[1](f), b(f);
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a);
            },
            $$reject: function(a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state);
            },
            notify: function(c) {
                var d = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && d && d.length && a(function() {
                    for (var a, e, f = 0, g = d.length; g > f; f++) {
                        e = d[f][0], a = d[f][3];
                        try {
                            e.notify(x(a) ? a(c) : c);
                        } catch (h) {
                            b(h);
                        }
                    }
                });
            }
        };
        var o = function(a) {
            var b = new k();
            return b.reject(a), b.promise;
        }, p = function(a, b) {
            var c = new k();
            return b ? c.resolve(a) : c.reject(a), c.promise;
        }, q = function(a, b, c) {
            var d = null;
            try {
                x(c) && (d = c());
            } catch (e) {
                return p(e, !1);
            }
            return E(d) ? d.then(function() {
                return p(a, b);
            }, function(a) {
                return p(a, !1);
            }) : p(a, b);
        }, r = function(a, b, c, d) {
            var e = new k();
            return e.resolve(a), e.promise.then(b, c, d);
        }, s = function u(a) {
            function b(a) {
                d.resolve(a);
            }
            function c(a) {
                d.reject(a);
            }
            if (!x(a)) throw m("norslvr", "Expected resolverFn, got '{0}'", a);
            if (!(this instanceof u)) return new u(a);
            var d = new k();
            return a(b, c), d.promise;
        };
        return s.defer = n, s.reject = o, s.when = r, s.all = l, s;
    }
    function Kc() {
        this.$get = [ "$window", "$timeout", function(a, b) {
            var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame, d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function(a) {
                var b = c(a);
                return function() {
                    d(b);
                };
            } : function(a) {
                var c = b(a, 16.66, !1);
                return function() {
                    b.cancel(c);
                };
            };
            return f.supported = e, f;
        } ];
    }
    function Lc() {
        var a = 10, b = d("$rootScope"), c = null, g = null;
        this.digestTtl = function(b) {
            return arguments.length && (a = b), a;
        }, this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(d, h, i, k) {
            function l() {
                this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, 
                this.$$isolateBindings = null;
            }
            function m(a) {
                if (u.$$phase) throw b("inprog", "{0} already in progress", u.$$phase);
                u.$$phase = a;
            }
            function n() {
                u.$$phase = null;
            }
            function p(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
            }
            function q() {}
            function r() {
                for (;y.length; ) try {
                    y.shift()();
                } catch (a) {
                    h(a);
                }
                g = null;
            }
            function s() {
                null === g && (g = k.defer(function() {
                    u.$apply(r);
                }));
            }
            l.prototype = {
                constructor: l,
                $new: function(a, b) {
                    function c() {
                        d.$$destroyed = !0;
                    }
                    var d;
                    return b = b || this, a ? (d = new l(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, 
                        this.$$listeners = {}, this.$$listenerCount = {}, this.$id = j(), this.$$ChildScope = null;
                    }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope()), d.$parent = b, 
                    d.$$prevSibling = b.$$childTail, b.$$childHead ? (b.$$childTail.$$nextSibling = d, 
                    b.$$childTail = d) : b.$$childHead = b.$$childTail = d, (a || b != this) && d.$on("$destroy", c), 
                    d;
                },
                $watch: function(a, b, d) {
                    var e = i(a);
                    if (e.$$watchDelegate) return e.$$watchDelegate(this, b, d, e);
                    var f = this, g = f.$$watchers, h = {
                        fn: b,
                        last: q,
                        get: e,
                        exp: a,
                        eq: !!d
                    };
                    return c = null, x(b) || (h.fn = o), g || (g = f.$$watchers = []), g.unshift(h), 
                    function() {
                        I(g, h), c = null;
                    };
                },
                $watchGroup: function(a, b) {
                    function c() {
                        i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h);
                    }
                    var d = new Array(a.length), e = new Array(a.length), g = [], h = this, i = !1, j = !0;
                    if (!a.length) {
                        var k = !0;
                        return h.$evalAsync(function() {
                            k && b(e, e, h);
                        }), function() {
                            k = !1;
                        };
                    }
                    return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
                        e[0] = a, d[0] = c, b(e, a === c ? e : d, f);
                    }) : (f(a, function(a, b) {
                        var f = h.$watch(a, function(a, f) {
                            e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c));
                        });
                        g.push(f);
                    }), function() {
                        for (;g.length; ) g.shift()();
                    });
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        f = a;
                        var b, c, d, h, i;
                        if (t(f)) if (e(f)) {
                            g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                            for (var j = 0; b > j; j++) i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++, 
                            g[j] = h);
                        } else {
                            g !== o && (g = o = {}, q = 0, l++), b = 0;
                            for (c in f) f.hasOwnProperty(c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, 
                            d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                            if (q > b) {
                                l++;
                                for (c in g) f.hasOwnProperty(c) || (q--, delete g[c]);
                            }
                        } else g !== f && (g = f, l++);
                        return l;
                    }
                    function d() {
                        if (p ? (p = !1, b(f, f, j)) : b(f, h, j), k) if (t(f)) if (e(f)) {
                            h = new Array(f.length);
                            for (var a = 0; a < f.length; a++) h[a] = f[a];
                        } else {
                            h = {};
                            for (var c in f) Kd.call(f, c) && (h[c] = f[c]);
                        } else h = f;
                    }
                    c.$stateful = !0;
                    var f, g, h, j = this, k = b.length > 1, l = 0, m = i(a, c), n = [], o = {}, p = !0, q = 0;
                    return this.$watch(m, d);
                },
                $digest: function() {
                    var d, e, f, i, j, l, o, p, s, t, y, z = a, A = this, B = [];
                    m("$digest"), k.$$checkUrlChange(), this === u && null !== g && (k.defer.cancel(g), 
                    r()), c = null;
                    do {
                        for (l = !1, p = A; v.length; ) {
                            try {
                                y = v.shift(), y.scope.$eval(y.expression);
                            } catch (C) {
                                h(C);
                            }
                            c = null;
                        }
                        a: do {
                            if (i = p.$$watchers) for (j = i.length; j--; ) try {
                                if (d = i[j]) if ((e = d.get(p)) === (f = d.last) || (d.eq ? L(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
                                    if (d === c) {
                                        l = !1;
                                        break a;
                                    }
                                } else l = !0, c = d, d.last = d.eq ? J(e, null) : e, d.fn(e, f === q ? e : f, p), 
                                5 > z && (s = 4 - z, B[s] || (B[s] = []), t = x(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, 
                                t += "; newVal: " + Q(e) + "; oldVal: " + Q(f), B[s].push(t));
                            } catch (C) {
                                h(C);
                            }
                            if (!(o = p.$$childHead || p !== A && p.$$nextSibling)) for (;p !== A && !(o = p.$$nextSibling); ) p = p.$parent;
                        } while (p = o);
                        if ((l || v.length) && !z--) throw n(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, Q(B));
                    } while (l || v.length);
                    for (n(); w.length; ) try {
                        w.shift()();
                    } catch (C) {
                        h(C);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== u) {
                            for (var b in this.$$listenerCount) p(this, this.$$listenerCount[b], b);
                            a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), 
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = o, 
                            this.$on = this.$watch = this.$watchGroup = function() {
                                return o;
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
                        }
                    }
                },
                $eval: function(a, b) {
                    return i(a)(this, b);
                },
                $evalAsync: function(a) {
                    u.$$phase || v.length || k.defer(function() {
                        v.length && u.$digest();
                    }), v.push({
                        scope: this,
                        expression: a
                    });
                },
                $$postDigest: function(a) {
                    w.push(a);
                },
                $apply: function(a) {
                    try {
                        return m("$apply"), this.$eval(a);
                    } catch (b) {
                        h(b);
                    } finally {
                        n();
                        try {
                            u.$digest();
                        } catch (b) {
                            throw h(b), b;
                        }
                    }
                },
                $applyAsync: function(a) {
                    function b() {
                        c.$eval(a);
                    }
                    var c = this;
                    a && y.push(b), s();
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        c[c.indexOf(b)] = null, p(e, 1, a);
                    };
                },
                $emit: function(a) {
                    var b, c, d, e = [], f = this, g = !1, i = {
                        name: a,
                        targetScope: f,
                        stopPropagation: function() {
                            g = !0;
                        },
                        preventDefault: function() {
                            i.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, j = M([ i ], arguments, 1);
                    do {
                        for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++) if (b[c]) try {
                            b[c].apply(null, j);
                        } catch (k) {
                            h(k);
                        } else b.splice(c, 1), c--, d--;
                        if (g) return i.currentScope = null, i;
                        f = f.$parent;
                    } while (f);
                    return i.currentScope = null, i;
                },
                $broadcast: function(a) {
                    var b = this, c = b, d = b, e = {
                        name: a,
                        targetScope: b,
                        preventDefault: function() {
                            e.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    };
                    if (!b.$$listenerCount[a]) return e;
                    for (var f, g, i, j = M([ e ], arguments, 1); c = d; ) {
                        for (e.currentScope = c, f = c.$$listeners[a] || [], g = 0, i = f.length; i > g; g++) if (f[g]) try {
                            f[g].apply(null, j);
                        } catch (k) {
                            h(k);
                        } else f.splice(g, 1), g--, i--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== b && c.$$nextSibling)) for (;c !== b && !(d = c.$$nextSibling); ) c = c.$parent;
                    }
                    return e.currentScope = null, e;
                }
            };
            var u = new l(), v = u.$$asyncQueue = [], w = u.$$postDigestQueue = [], y = u.$$applyAsyncQueue = [];
            return u;
        } ];
    }
    function Mc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return s(b) ? (a = b, this) : a;
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (b = a, this) : b;
        }, this.$get = function() {
            return function(c, d) {
                var e, f = d ? b : a;
                return e = Wc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e;
            };
        };
    }
    function Nc(a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }
    function Oc(a) {
        if ("self" === a) return a;
        if (u(a)) {
            if (a.indexOf("***") > -1) throw Ze("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = Nc(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$");
        }
        if (y(a)) return new RegExp("^" + a.source + "$");
        throw Ze("imatcher", 'Matchers may only be "self", string patterns or RegExp objects');
    }
    function Pc(a) {
        var b = [];
        return s(a) && f(a, function(a) {
            b.push(Oc(a));
        }), b;
    }
    function Qc() {
        this.SCE_CONTEXTS = $e;
        var a = [ "self" ], b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = Pc(b)), a;
        }, this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = Pc(a)), b;
        }, this.$get = [ "$injector", function(d) {
            function e(a, b) {
                return "self" === a ? Xc(b) : !!a.exec(b.href);
            }
            function f(c) {
                var d, f, g = Wc(c.toString()), h = !1;
                for (d = 0, f = a.length; f > d; d++) if (e(a[d], g)) {
                    h = !0;
                    break;
                }
                if (h) for (d = 0, f = b.length; f > d; d++) if (e(b[d], g)) {
                    h = !1;
                    break;
                }
                return h;
            }
            function g(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a;
                    };
                };
                return a && (b.prototype = new a()), b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                }, b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                }, b;
            }
            function h(a, b) {
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (!d) throw Ze("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                if (null === b || b === c || "" === b) return b;
                if ("string" != typeof b) throw Ze("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                return new d(b);
            }
            function i(a) {
                return a instanceof l ? a.$$unwrapTrustedValue() : a;
            }
            function j(a, b) {
                if (null === b || b === c || "" === b) return b;
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (d && b instanceof d) return b.$$unwrapTrustedValue();
                if (a === $e.RESOURCE_URL) {
                    if (f(b)) return b;
                    throw Ze("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString());
                }
                if (a === $e.HTML) return k(b);
                throw Ze("unsafe", "Attempting to use an unsafe value in a safe context.");
            }
            var k = function() {
                throw Ze("unsafe", "Attempting to use an unsafe value in a safe context.");
            };
            d.has("$sanitize") && (k = d.get("$sanitize"));
            var l = g(), m = {};
            return m[$e.HTML] = g(l), m[$e.CSS] = g(l), m[$e.URL] = g(l), m[$e.JS] = g(l), m[$e.RESOURCE_URL] = g(m[$e.URL]), 
            {
                trustAs: h,
                getTrusted: j,
                valueOf: i
            };
        } ];
    }
    function Rc() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !!b), a;
        }, this.$get = [ "$document", "$parse", "$sceDelegate", function(b, c, d) {
            if (a && b[0].documentMode < 8) throw Ze("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var e = K($e);
            e.isEnabled = function() {
                return a;
            }, e.trustAs = d.trustAs, e.getTrusted = d.getTrusted, e.valueOf = d.valueOf, a || (e.trustAs = e.getTrusted = function(a, b) {
                return b;
            }, e.valueOf = p), e.parseAs = function(a, b) {
                var d = c(b);
                return d.literal && d.constant ? d : c(b, function(b) {
                    return e.getTrusted(a, b);
                });
            };
            var g = e.parseAs, h = e.getTrusted, i = e.trustAs;
            return f($e, function(a, b) {
                var c = Jd(b);
                e[mb("parse_as_" + c)] = function(b) {
                    return g(a, b);
                }, e[mb("get_trusted_" + c)] = function(b) {
                    return h(a, b);
                }, e[mb("trust_as_" + c)] = function(b) {
                    return i(a, b);
                };
            }), e;
        } ];
    }
    function Sc() {
        this.$get = [ "$window", "$document", function(a, b) {
            var c, d, e = {}, f = m((/android (\d+)/.exec(Jd((a.navigator || {}).userAgent)) || [])[1]), g = /Boxee/i.test((a.navigator || {}).userAgent), h = b[0] || {}, i = /^(Moz|webkit|O|ms)(?=[A-Z])/, j = h.body && h.body.style, k = !1, l = !1;
            if (j) {
                for (var n in j) if (d = i.exec(n)) {
                    c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                    break;
                }
                c || (c = "WebkitOpacity" in j && "webkit"), k = !!("transition" in j || c + "Transition" in j), 
                l = !!("animation" in j || c + "Animation" in j), !f || k && l || (k = u(h.body.style.webkitTransition), 
                l = u(h.body.style.webkitAnimation));
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > f || g),
                hasEvent: function(a) {
                    if ("input" == a && 9 == Od) return !1;
                    if (r(e[a])) {
                        var b = h.createElement("div");
                        e[a] = "on" + a in b;
                    }
                    return e[a];
                },
                csp: ae(),
                vendorPrefix: c,
                transitions: k,
                animations: l,
                android: f
            };
        } ];
    }
    function Tc() {
        this.$get = [ "$templateCache", "$http", "$q", function(a, b, c) {
            function d(e, f) {
                function g() {
                    if (h.totalPendingRequests--, !f) throw Ie("tpload", "Failed to load template: {0}", e);
                    return c.reject();
                }
                var h = d;
                return h.totalPendingRequests++, b.get(e, {
                    cache: a
                }).then(function(b) {
                    var c = b.data;
                    return c && 0 !== c.length ? (h.totalPendingRequests--, a.put(e, c), c) : g();
                }, g);
            }
            return d.totalPendingRequests = 0, d;
        } ];
    }
    function Uc() {
        this.$get = [ "$rootScope", "$browser", "$location", function(a, b, c) {
            var d = {};
            return d.findBindings = function(a, b, c) {
                var d = a.getElementsByClassName("ng-binding"), e = [];
                return f(d, function(a) {
                    var d = Xd.element(a).data("$binding");
                    d && f(d, function(d) {
                        if (c) {
                            var f = new RegExp("(^|\\s)" + b + "(\\s|\\||$)");
                            f.test(d) && e.push(a);
                        } else -1 != d.indexOf(b) && e.push(a);
                    });
                }), e;
            }, d.findModels = function(a, b, c) {
                for (var d = [ "ng-", "data-ng-", "ng\\:" ], e = 0; e < d.length; ++e) {
                    var f = c ? "=" : "*=", g = "[" + d[e] + "model" + f + '"' + b + '"]', h = a.querySelectorAll(g);
                    if (h.length) return h;
                }
            }, d.getLocation = function() {
                return c.url();
            }, d.setLocation = function(b) {
                b !== c.url() && (c.url(b), a.$digest());
            }, d.whenStable = function(a) {
                b.notifyWhenNoOutstandingRequests(a);
            }, d;
        } ];
    }
    function Vc() {
        this.$get = [ "$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, c, d, e) {
            function f(f, h, i) {
                var j, k = s(i) && !i, l = (k ? d : c).defer(), m = l.promise;
                return j = b.defer(function() {
                    try {
                        l.resolve(f());
                    } catch (b) {
                        l.reject(b), e(b);
                    } finally {
                        delete g[m.$$timeoutId];
                    }
                    k || a.$apply();
                }, h), m.$$timeoutId = j, g[j] = l, m;
            }
            var g = {};
            return f.cancel = function(a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], 
                b.defer.cancel(a.$$timeoutId)) : !1;
            }, f;
        } ];
    }
    function Wc(a) {
        var b = a;
        return Od && (_e.setAttribute("href", b), b = _e.href), _e.setAttribute("href", b), 
        {
            href: _e.href,
            protocol: _e.protocol ? _e.protocol.replace(/:$/, "") : "",
            host: _e.host,
            search: _e.search ? _e.search.replace(/^\?/, "") : "",
            hash: _e.hash ? _e.hash.replace(/^#/, "") : "",
            hostname: _e.hostname,
            port: _e.port,
            pathname: "/" === _e.pathname.charAt(0) ? _e.pathname : "/" + _e.pathname
        };
    }
    function Xc(a) {
        var b = u(a) ? Wc(a) : a;
        return b.protocol === af.protocol && b.host === af.host;
    }
    function Yc() {
        this.$get = q(a);
    }
    function Zc(a) {
        function b(d, e) {
            if (t(d)) {
                var g = {};
                return f(d, function(a, c) {
                    g[c] = b(c, a);
                }), g;
            }
            return a.factory(d + c, e);
        }
        var c = "Filter";
        this.register = b, this.$get = [ "$injector", function(a) {
            return function(b) {
                return a.get(b + c);
            };
        } ], b("currency", _c), b("date", kd), b("filter", $c), b("json", ld), b("limitTo", md), 
        b("lowercase", ff), b("number", ad), b("orderBy", nd), b("uppercase", gf);
    }
    function $c() {
        return function(a, b, c) {
            if (!$d(a)) return a;
            var d = typeof c, e = [];
            e.check = function(a, b) {
                for (var c = 0; c < e.length; c++) if (!e[c](a, b)) return !1;
                return !0;
            }, "function" !== d && (c = "boolean" === d && c ? function(a, b) {
                return Xd.equals(a, b);
            } : function(a, b) {
                if (a && b && "object" == typeof a && "object" == typeof b) {
                    for (var d in a) if ("$" !== d.charAt(0) && Kd.call(a, d) && c(a[d], b[d])) return !0;
                    return !1;
                }
                return b = ("" + b).toLowerCase(), ("" + a).toLowerCase().indexOf(b) > -1;
            });
            var f = function(a, b) {
                if ("string" == typeof b && "!" === b.charAt(0)) return !f(a, b.substr(1));
                switch (typeof a) {
                  case "boolean":
                  case "number":
                  case "string":
                    return c(a, b);

                  case "object":
                    switch (typeof b) {
                      case "object":
                        return c(a, b);

                      default:
                        for (var d in a) if ("$" !== d.charAt(0) && f(a[d], b)) return !0;
                    }
                    return !1;

                  case "array":
                    for (var e = 0; e < a.length; e++) if (f(a[e], b)) return !0;
                    return !1;

                  default:
                    return !1;
                }
            };
            switch (typeof b) {
              case "boolean":
              case "number":
              case "string":
                b = {
                    $: b
                };

              case "object":
                for (var g in b) !function(a) {
                    "undefined" != typeof b[a] && e.push(function(c) {
                        return f("$" == a ? c : c && c[a], b[a]);
                    });
                }(g);
                break;

              case "function":
                e.push(b);
                break;

              default:
                return a;
            }
            for (var h = [], i = 0; i < a.length; i++) {
                var j = a[i];
                e.check(j, i) && h.push(j);
            }
            return h;
        };
    }
    function _c(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c, d) {
            return r(c) && (c = b.CURRENCY_SYM), r(d) && (d = 2), null == a ? a : bd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c);
        };
    }
    function ad(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return null == a ? a : bd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
        };
    }
    function bd(a, b, c, d, e) {
        if (!isFinite(a) || t(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a + "", h = "", i = [], j = !1;
        if (-1 !== g.indexOf("e")) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && "-" == k[2] && k[3] > e + 1 ? (g = "0", a = 0) : (h = g, j = !0);
        }
        if (j) e > 0 && a > -1 && 1 > a && (h = a.toFixed(e)); else {
            var l = (g.split(bf)[1] || "").length;
            r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e), 
            0 === a && (f = !1);
            var m = ("" + a).split(bf), n = m[0];
            m = m[1] || "";
            var o, p = 0, q = b.lgSize, s = b.gSize;
            if (n.length >= q + s) for (p = n.length - q, o = 0; p > o; o++) (p - o) % s === 0 && 0 !== o && (h += c), 
            h += n.charAt(o);
            for (o = p; o < n.length; o++) (n.length - o) % q === 0 && 0 !== o && (h += c), 
            h += n.charAt(o);
            for (;m.length < e; ) m += "0";
            e && "0" !== e && (h += d + m.substr(0, e));
        }
        return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), 
        i.join("");
    }
    function cd(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b; ) a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a;
    }
    function dd(a, b, c, d) {
        return c = c || 0, function(e) {
            var f = e["get" + a]();
            return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), cd(f, b, d);
        };
    }
    function ed(a, b) {
        return function(c, d) {
            var e = c["get" + a](), f = Ld(b ? "SHORT" + a : a);
            return d[f][e];
        };
    }
    function fd(a) {
        var b = -1 * a.getTimezoneOffset(), c = b >= 0 ? "+" : "";
        return c += cd(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + cd(Math.abs(b % 60), 2);
    }
    function gd(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b);
    }
    function hd(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()));
    }
    function id(a) {
        return function(b) {
            var c = gd(b.getFullYear()), d = hd(b), e = +d - +c, f = 1 + Math.round(e / 6048e5);
            return cd(f, a);
        };
    }
    function jd(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1];
    }
    function kd(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0), e = 0, f = 0, g = b[8] ? d.setUTCFullYear : d.setFullYear, h = b[8] ? d.setUTCHours : d.setHours;
                b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
                var i = m(b[4] || 0) - e, j = m(b[5] || 0) - f, k = m(b[6] || 0), l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                return h.call(d, i, j, k, l), d;
            }
            return a;
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d, e) {
            var g, h, i = "", j = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = ef.test(c) ? m(c) : b(c)), 
            v(c) && (c = new Date(c)), !w(c)) return c;
            for (;d; ) h = df.exec(d), h ? (j = M(j, h, 1), d = j.pop()) : (j.push(d), d = null);
            return e && "UTC" === e && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset())), 
            f(j, function(b) {
                g = cf[b], i += g ? g(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), i;
        };
    }
    function ld() {
        return function(a) {
            return Q(a, !0);
        };
    }
    function md() {
        return function(a, b) {
            if (v(a) && (a = a.toString()), !$d(a) && !u(a)) return a;
            if (b = 1/0 === Math.abs(Number(b)) ? Number(b) : m(b), u(a)) return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : "";
            var c, d, e = [];
            for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, 
            d = b) : (c = a.length + b, d = a.length); d > c; c++) e.push(a[c]);
            return e;
        };
    }
    function nd(a) {
        return function(b, c, d) {
            function f(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e;
                }
                return 0;
            }
            function g(a, b) {
                return b ? function(b, c) {
                    return a(c, b);
                } : a;
            }
            function h(a, b) {
                var c = typeof a, d = typeof b;
                return c == d ? (w(a) && w(b) && (a = a.valueOf(), b = b.valueOf()), "string" == c && (a = a.toLowerCase(), 
                b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1;
            }
            if (!e(b)) return b;
            c = $d(c) ? c : [ c ], 0 === c.length && (c = [ "+" ]), c = c.map(function(b) {
                var c = !1, d = b || p;
                if (u(b)) {
                    if (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), 
                    "" === b) return g(function(a, b) {
                        return h(a, b);
                    }, c);
                    if (d = a(b), d.constant) {
                        var e = d();
                        return g(function(a, b) {
                            return h(a[e], b[e]);
                        }, c);
                    }
                }
                return g(function(a, b) {
                    return h(d(a), d(b));
                }, c);
            });
            for (var i = [], j = 0; j < b.length; j++) i.push(b[j]);
            return i.sort(g(f, d));
        };
    }
    function od(a) {
        return x(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", q(a);
    }
    function pd(a, b) {
        a.$name = b;
    }
    function qd(a, b, d, e, g) {
        var h = this, i = [], j = h.$$parentForm = a.parent().controller("form") || kf;
        h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), 
        h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, 
        j.$addControl(h), h.$rollbackViewValue = function() {
            f(i, function(a) {
                a.$rollbackViewValue();
            });
        }, h.$commitViewValue = function() {
            f(i, function(a) {
                a.$commitViewValue();
            });
        }, h.$addControl = function(a) {
            fb(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a);
        }, h.$$renameControl = function(a, b) {
            var c = a.$name;
            h[c] === a && delete h[c], h[b] = a, a.$name = b;
        }, h.$removeControl = function(a) {
            a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function(b, c) {
                h.$setValidity(c, null, a);
            }), f(h.$error, function(b, c) {
                h.$setValidity(c, null, a);
            }), I(i, a);
        }, Ed({
            ctrl: this,
            $element: a,
            set: function(a, b, c) {
                var d = a[b];
                if (d) {
                    var e = d.indexOf(c);
                    -1 === e && d.push(c);
                } else a[b] = [ c ];
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && (I(d, c), 0 === d.length && delete a[b]);
            },
            parentForm: j,
            $animate: e
        }), h.$setDirty = function() {
            e.removeClass(a, Ef), e.addClass(a, Ff), h.$dirty = !0, h.$pristine = !1, j.$setDirty();
        }, h.$setPristine = function() {
            e.setClass(a, Ef, Ff + " " + lf), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, 
            f(i, function(a) {
                a.$setPristine();
            });
        }, h.$setUntouched = function() {
            f(i, function(a) {
                a.$setUntouched();
            });
        }, h.$setSubmitted = function() {
            e.addClass(a, lf), h.$submitted = !0, j.$setSubmitted();
        };
    }
    function rd(a) {
        a.$formatters.push(function(b) {
            return a.$isEmpty(b) ? b : b.toString();
        });
    }
    function sd(a, b, c, d, e, f) {
        td(a, b, c, d, e, f), rd(d);
    }
    function td(a, b, c, d, e, f) {
        var g = (b.prop(Id), b[0].placeholder), h = {}, i = Jd(b[0].type);
        if (!e.android) {
            var j = !1;
            b.on("compositionstart", function() {
                j = !0;
            }), b.on("compositionend", function() {
                j = !1, k();
            });
        }
        var k = function(a) {
            if (!j) {
                var e = b.val(), f = a && a.type;
                if (Od && "input" === (a || h).type && b[0].placeholder !== g) return void (g = b[0].placeholder);
                "password" === i || c.ngTrim && "false" === c.ngTrim || (e = _d(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, f);
            }
        };
        if (e.hasEvent("input")) b.on("input", k); else {
            var l, m = function(a) {
                l || (l = f.defer(function() {
                    k(a), l = null;
                }));
            };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || m(a);
            }), e.hasEvent("paste") && b.on("paste cut", m);
        }
        b.on("change", k), d.$render = function() {
            b.val(d.$isEmpty(d.$modelValue) ? "" : d.$viewValue);
        };
    }
    function ud(a, b) {
        if (w(a)) return a;
        if (u(a)) {
            vf.lastIndex = 0;
            var c = vf.exec(a);
            if (c) {
                var d = +c[1], e = +c[2], f = 0, g = 0, h = 0, i = 0, j = gd(d), k = 7 * (e - 1);
                return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), 
                new Date(d, 0, j.getDate() + k, f, g, h, i);
            }
        }
        return 0/0;
    }
    function vd(a, b) {
        return function(c, d) {
            var e, g;
            if (w(c)) return c;
            if (u(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), 
                pf.test(c)) return new Date(c);
                if (a.lastIndex = 0, e = a.exec(c)) return e.shift(), g = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, f(e, function(a, c) {
                    c < b.length && (g[b[c]] = +a);
                }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0);
            }
            return 0/0;
        };
    }
    function wd(a, b, d, e) {
        return function(f, g, h, i, j, k, l) {
            function m(a) {
                return s(a) ? w(a) ? a : d(a) : c;
            }
            xd(f, g, h, i), td(f, g, h, i, j, k);
            var n, o = i && i.$options && i.$options.timezone;
            if (i.$$parserName = a, i.$parsers.push(function(a) {
                if (i.$isEmpty(a)) return null;
                if (b.test(a)) {
                    var e = d(a, n);
                    return "UTC" === o && e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e;
                }
                return c;
            }), i.$formatters.push(function(a) {
                if (!i.$isEmpty(a)) {
                    if (!w(a)) throw zf("datefmt", "Expected `{0}` to be a date", a);
                    if (n = a, n && "UTC" === o) {
                        var b = 6e4 * n.getTimezoneOffset();
                        n = new Date(n.getTime() + b);
                    }
                    return l("date")(a, e, o);
                }
                return n = null, "";
            }), s(h.min) || h.ngMin) {
                var p;
                i.$validators.min = function(a) {
                    return i.$isEmpty(a) || r(p) || d(a) >= p;
                }, h.$observe("min", function(a) {
                    p = m(a), i.$validate();
                });
            }
            if (s(h.max) || h.ngMax) {
                var q;
                i.$validators.max = function(a) {
                    return i.$isEmpty(a) || r(q) || d(a) <= q;
                }, h.$observe("max", function(a) {
                    q = m(a), i.$validate();
                });
            }
            i.$isEmpty = function(a) {
                return !a || a.getTime && a.getTime() !== a.getTime();
            };
        };
    }
    function xd(a, b, d, e) {
        var f = b[0], g = e.$$hasNativeValidators = t(f.validity);
        g && e.$parsers.push(function(a) {
            var d = b.prop(Id) || {};
            return d.badInput && !d.typeMismatch ? c : a;
        });
    }
    function yd(a, b, d, e, f, g) {
        if (xd(a, b, d, e), td(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
            return e.$isEmpty(a) ? null : sf.test(a) ? parseFloat(a) : c;
        }), e.$formatters.push(function(a) {
            if (!e.$isEmpty(a)) {
                if (!v(a)) throw zf("numfmt", "Expected `{0}` to be a number", a);
                a = a.toString();
            }
            return a;
        }), d.min || d.ngMin) {
            var h;
            e.$validators.min = function(a) {
                return e.$isEmpty(a) || r(h) || a >= h;
            }, d.$observe("min", function(a) {
                s(a) && !v(a) && (a = parseFloat(a, 10)), h = v(a) && !isNaN(a) ? a : c, e.$validate();
            });
        }
        if (d.max || d.ngMax) {
            var i;
            e.$validators.max = function(a) {
                return e.$isEmpty(a) || r(i) || i >= a;
            }, d.$observe("max", function(a) {
                s(a) && !v(a) && (a = parseFloat(a, 10)), i = v(a) && !isNaN(a) ? a : c, e.$validate();
            });
        }
    }
    function zd(a, b, c, d, e, f) {
        td(a, b, c, d, e, f), rd(d), d.$$parserName = "url", d.$validators.url = function(a) {
            return d.$isEmpty(a) || qf.test(a);
        };
    }
    function Ad(a, b, c, d, e, f) {
        td(a, b, c, d, e, f), rd(d), d.$$parserName = "email", d.$validators.email = function(a) {
            return d.$isEmpty(a) || rf.test(a);
        };
    }
    function Bd(a, b, c, d) {
        r(c.name) && b.attr("name", j());
        var e = function(a) {
            b[0].checked && d.$setViewValue(c.value, a && a.type);
        };
        b.on("click", e), d.$render = function() {
            var a = c.value;
            b[0].checked = a == d.$viewValue;
        }, c.$observe("value", d.$render);
    }
    function Cd(a, b, c, e, f) {
        var g;
        if (s(e)) {
            if (g = a(e), !g.constant) throw d("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, e);
            return g(b);
        }
        return f;
    }
    function Dd(a, b, c, d, e, f, g, h) {
        var i = Cd(h, a, "ngTrueValue", c.ngTrueValue, !0), j = Cd(h, a, "ngFalseValue", c.ngFalseValue, !1), k = function(a) {
            d.$setViewValue(b[0].checked, a && a.type);
        };
        b.on("click", k), d.$render = function() {
            b[0].checked = d.$viewValue;
        }, d.$isEmpty = function(a) {
            return a !== i;
        }, d.$formatters.push(function(a) {
            return L(a, i);
        }), d.$parsers.push(function(a) {
            return a ? i : j;
        });
    }
    function Ed(a) {
        function b(a, b, i) {
            b === c ? d("$pending", a, i) : e("$pending", a, i), D(b) ? b ? (l(h.$error, a, i), 
            k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), 
            l(h.$$success, a, i)), h.$pending ? (f(If, !0), h.$valid = h.$invalid = c, g("", null)) : (f(If, !1), 
            h.$valid = Fd(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
            var j;
            j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, 
            g(a, j), m.$setValidity(a, j, h);
        }
        function d(a, b, c) {
            h[a] || (h[a] = {}), k(h[a], b, c);
        }
        function e(a, b, d) {
            h[a] && l(h[a], b, d), Fd(h[a]) && (h[a] = c);
        }
        function f(a, b) {
            b && !j[a] ? (n.addClass(i, a), j[a] = !0) : !b && j[a] && (n.removeClass(i, a), 
            j[a] = !1);
        }
        function g(a, b) {
            a = a ? "-" + bb(a, "-") : "", f(Cf + a, b === !0), f(Df + a, b === !1);
        }
        var h = a.ctrl, i = a.$element, j = {}, k = a.set, l = a.unset, m = a.parentForm, n = a.$animate;
        j[Df] = !(j[Cf] = i.hasClass(Cf)), h.$setValidity = b;
    }
    function Fd(a) {
        if (a) for (var b in a) return !1;
        return !0;
    }
    function Gd(a, b) {
        return a = "ngClass" + a, [ "$animate", function(c) {
            function d(a, b) {
                var c = [];
                a: for (var d = 0; d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++) if (e == b[f]) continue a;
                    c.push(e);
                }
                return c;
            }
            function e(a) {
                if ($d(a)) return a;
                if (u(a)) return a.split(" ");
                if (t(a)) {
                    var b = [];
                    return f(a, function(a, c) {
                        a && (b = b.concat(c.split(" ")));
                    }), b;
                }
                return a;
            }
            return {
                restrict: "AC",
                link: function(g, h, i) {
                    function j(a) {
                        var b = l(a, 1);
                        i.$addClass(b);
                    }
                    function k(a) {
                        var b = l(a, -1);
                        i.$removeClass(b);
                    }
                    function l(a, b) {
                        var c = h.data("$classCounts") || {}, d = [];
                        return f(a, function(a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a));
                        }), h.data("$classCounts", c), d.join(" ");
                    }
                    function m(a, b) {
                        var e = d(b, a), f = d(a, b);
                        e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f);
                    }
                    function n(a) {
                        if (b === !0 || g.$index % 2 === b) {
                            var c = e(a || []);
                            if (o) {
                                if (!L(a, o)) {
                                    var d = e(o);
                                    m(d, c);
                                }
                            } else j(c);
                        }
                        o = K(a);
                    }
                    var o;
                    g.$watch(i[a], n, !0), i.$observe("class", function() {
                        n(g.$eval(i[a]));
                    }), "ngClass" !== a && g.$watch("$index", function(c, d) {
                        var f = 1 & c;
                        if (f !== (1 & d)) {
                            var h = e(g.$eval(i[a]));
                            f === b ? j(h) : k(h);
                        }
                    });
                }
            };
        } ];
    }
    var Hd = /^\/(.+)\/([a-z]*)$/, Id = "validity", Jd = function(a) {
        return u(a) ? a.toLowerCase() : a;
    }, Kd = Object.prototype.hasOwnProperty, Ld = function(a) {
        return u(a) ? a.toUpperCase() : a;
    }, Md = function(a) {
        return u(a) ? a.replace(/[A-Z]/g, function(a) {
            return String.fromCharCode(32 | a.charCodeAt(0));
        }) : a;
    }, Nd = function(a) {
        return u(a) ? a.replace(/[a-z]/g, function(a) {
            return String.fromCharCode(-33 & a.charCodeAt(0));
        }) : a;
    };
    "i" !== "I".toLowerCase() && (Jd = Md, Ld = Nd);
    var Od, Pd, Qd, Rd, Sd = [].slice, Td = [].splice, Ud = [].push, Vd = Object.prototype.toString, Wd = d("ng"), Xd = a.angular || (a.angular = {}), Yd = 0;
    Od = b.documentMode, o.$inject = [], p.$inject = [];
    var Zd, $d = Array.isArray, _d = function(a) {
        return u(a) ? a.trim() : a;
    }, ae = function() {
        if (s(ae.isActive_)) return ae.isActive_;
        var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
        if (!a) try {
            new Function("");
        } catch (c) {
            a = !0;
        }
        return ae.isActive_ = a;
    }, be = [ "ng-", "data-ng-", "ng:", "x-ng-" ], ce = /[A-Z]/g, de = !1, ee = 1, fe = 3, ge = 8, he = 9, ie = 11, je = {
        full: "1.3.0",
        major: 1,
        minor: 3,
        dot: 0,
        codeName: "superluminal-nudge"
    };
    rb.expando = "ng339";
    var ke = rb.cache = {}, le = 1, me = function(a, b, c) {
        a.addEventListener(b, c, !1);
    }, ne = function(a, b, c) {
        a.removeEventListener(b, c, !1);
    };
    rb._data = function(a) {
        return this.cache[a[this.expando]] || {};
    };
    var oe = /([\:\-\_]+(.))/g, pe = /^moz([A-Z])/, qe = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, re = d("jqLite"), se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, te = /<|&#?\w+;/, ue = /<([\w:]+)/, ve = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, we = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    we.optgroup = we.option, we.tbody = we.tfoot = we.colgroup = we.caption = we.thead, 
    we.th = we.td;
    var xe = rb.prototype = {
        ready: function(c) {
            function d() {
                e || (e = !0, c());
            }
            var e = !1;
            "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), rb(a).on("load", d), 
            this.on("DOMContentLoaded", d));
        },
        toString: function() {
            var a = [];
            return f(this, function(b) {
                a.push("" + b);
            }), "[" + a.join(", ") + "]";
        },
        eq: function(a) {
            return Pd(a >= 0 ? this[a] : this[this.length + a]);
        },
        length: 0,
        push: Ud,
        sort: [].sort,
        splice: [].splice
    }, ye = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
        ye[Jd(a)] = a;
    });
    var ze = {};
    f("input,select,option,textarea,button,form,details".split(","), function(a) {
        ze[a] = !0;
    });
    var Ae = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    f({
        data: xb,
        removeData: vb
    }, function(a, b) {
        rb[b] = a;
    }), f({
        data: xb,
        inheritedData: Db,
        scope: function(a) {
            return Pd.data(a, "$scope") || Db(a.parentNode || a, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(a) {
            return Pd.data(a, "$isolateScope") || Pd.data(a, "$isolateScopeNoTemplate");
        },
        controller: Cb,
        injector: function(a) {
            return Db(a, "$injector");
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b);
        },
        hasClass: yb,
        css: function(a, b, c) {
            return b = mb(b), s(c) ? void (a.style[b] = c) : a.style[b];
        },
        attr: function(a, b, d) {
            var e = Jd(b);
            if (ye[e]) {
                if (!s(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e));
            } else if (s(d)) a.setAttribute(b, d); else if (a.getAttribute) {
                var f = a.getAttribute(b, 2);
                return null === f ? c : f;
            }
        },
        prop: function(a, b, c) {
            return s(c) ? void (a[b] = c) : a[b];
        },
        text: function() {
            function a(a, b) {
                if (r(b)) {
                    var c = a.nodeType;
                    return c === ee || c === fe ? a.textContent : "";
                }
                a.textContent = b;
            }
            return a.$dv = "", a;
        }(),
        val: function(a, b) {
            if (r(b)) {
                if (a.multiple && "select" === H(a)) {
                    var c = [];
                    return f(a.options, function(a) {
                        a.selected && c.push(a.value || a.text);
                    }), 0 === c.length ? null : c;
                }
                return a.value;
            }
            a.value = b;
        },
        html: function(a, b) {
            return r(b) ? a.innerHTML : (tb(a, !0), void (a.innerHTML = b));
        },
        empty: Eb
    }, function(a, b) {
        rb.prototype[b] = function(b, d) {
            var e, f, g = this.length;
            if (a !== Eb && (2 == a.length && a !== yb && a !== Cb ? b : d) === c) {
                if (t(b)) {
                    for (e = 0; g > e; e++) if (a === xb) a(this[e], b); else for (f in b) a(this[e], f, b[f]);
                    return this;
                }
                for (var h = a.$dv, i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) {
                    var k = a(this[j], b, d);
                    h = h ? h + k : k;
                }
                return h;
            }
            for (e = 0; g > e; e++) a(this[e], b, d);
            return this;
        };
    }), f({
        removeData: vb,
        on: function yg(a, b, c, d) {
            if (s(d)) throw re("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (ob(a)) {
                var e = wb(a, !0), f = e.events, g = e.handle;
                g || (g = e.handle = Jb(a, f));
                for (var h = b.indexOf(" ") >= 0 ? b.split(" ") : [ b ], i = h.length; i--; ) {
                    b = h[i];
                    var j = f[b];
                    j || (f[b] = [], "mouseenter" === b || "mouseleave" === b ? yg(a, qe[b], function(a) {
                        var c = this, d = a.relatedTarget;
                        (!d || d !== c && !c.contains(d)) && g(a, b);
                    }) : "$destroy" !== b && me(a, b, g), j = f[b]), j.push(c);
                }
            }
        },
        off: ub,
        one: function(a, b, c) {
            a = Pd(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d);
            }), a.on(b, c);
        },
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            tb(a), f(new rb(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b;
            });
        },
        children: function(a) {
            var b = [];
            return f(a.childNodes, function(a) {
                a.nodeType === ee && b.push(a);
            }), b;
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || [];
        },
        append: function(a, b) {
            var c = a.nodeType;
            if (c === ee || c === ie) {
                b = new rb(b);
                for (var d = 0, e = b.length; e > d; d++) {
                    var f = b[d];
                    a.appendChild(f);
                }
            }
        },
        prepend: function(a, b) {
            if (a.nodeType === ee) {
                var c = a.firstChild;
                f(new rb(b), function(b) {
                    a.insertBefore(b, c);
                });
            }
        },
        wrap: function(a, b) {
            b = Pd(b).eq(0).clone()[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a);
        },
        remove: Fb,
        detach: function(a) {
            Fb(a, !0);
        },
        after: function(a, b) {
            var c = a, d = a.parentNode;
            b = new rb(b);
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e];
                d.insertBefore(g, c.nextSibling), c = g;
            }
        },
        addClass: Ab,
        removeClass: zb,
        toggleClass: function(a, b, c) {
            b && f(b.split(" "), function(b) {
                var d = c;
                r(d) && (d = !yb(a, b)), (d ? Ab : zb)(a, b);
            });
        },
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== ie ? b : null;
        },
        next: function(a) {
            return a.nextElementSibling;
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
        },
        clone: sb,
        triggerHandler: function(a, b, c) {
            var d, e, g, h = b.type || b, i = wb(a), j = i && i.events, k = j && j[h];
            k && (d = {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                    return this.defaultPrevented === !0;
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0;
                },
                isImmediatePropagationStopped: function() {
                    return this.immediatePropagationStopped === !0;
                },
                stopPropagation: o,
                type: h,
                target: a
            }, b.type && (d = l(d, b)), e = K(k), g = c ? [ d ].concat(c) : [ d ], f(e, function(b) {
                d.isImmediatePropagationStopped() || b.apply(a, g);
            }));
        }
    }, function(a, b) {
        rb.prototype[b] = function(b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++) r(e) ? (e = a(this[f], b, c, d), 
            s(e) && (e = Pd(e))) : Bb(e, a(this[f], b, c, d));
            return s(e) ? e : this;
        }, rb.prototype.bind = rb.prototype.on, rb.prototype.unbind = rb.prototype.off;
    }), Lb.prototype = {
        put: function(a, b) {
            this[Kb(a, this.nextUid)] = b;
        },
        get: function(a) {
            return this[Kb(a, this.nextUid)];
        },
        remove: function(a) {
            var b = this[a = Kb(a, this.nextUid)];
            return delete this[a], b;
        }
    };
    var Be = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Ce = /,/, De = /^\s*(_?)(\S+?)\1\s*$/, Ee = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Fe = d("$injector");
    Ob.$$annotate = Nb;
    var Ge = d("$animate"), He = [ "$provide", function(a) {
        this.$$selectors = {}, this.register = function(b, c) {
            var d = b + "-animation";
            if (b && "." != b.charAt(0)) throw Ge("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
            this.$$selectors[b.substr(1)] = d, a.factory(d, c);
        }, this.classNameFilter = function(a) {
            return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), 
            this.$$classNameFilter;
        }, this.$get = [ "$$q", "$$asyncCallback", "$rootScope", function(a, b, c) {
            function d(b) {
                var d, e = a.defer();
                return e.promise.$$cancelFn = function() {
                    d && d();
                }, c.$$postDigest(function() {
                    d = b(function() {
                        e.resolve();
                    });
                }), e.promise;
            }
            function e(a, b) {
                var c = [], d = [], e = ib();
                return f((a.attr("class") || "").split(/\s+/), function(a) {
                    e[a] = !0;
                }), f(b, function(a, b) {
                    var f = e[b];
                    a === !1 && f ? d.push(b) : a !== !0 || f || c.push(b);
                }), c.length + d.length > 0 && [ c.length ? c : null, d.length ? d : null ];
            }
            function g(a, b, c) {
                for (var d = 0, e = b.length; e > d; ++d) {
                    var f = b[d];
                    a[f] = c;
                }
            }
            function h() {
                return j || (j = a.defer(), b(function() {
                    j.resolve(), j = null;
                })), j.promise;
            }
            function i(a, b) {
                if (Xd.isObject(b)) {
                    var c = l(b.from || {}, b.to || {});
                    a.css(c);
                }
            }
            var j;
            return {
                animate: function(a, b, c) {
                    return i(a, {
                        from: b,
                        to: c
                    }), h();
                },
                enter: function(a, b, c, d) {
                    return i(a, d), c ? c.after(a) : b.prepend(a), h();
                },
                leave: function(a) {
                    return a.remove(), h();
                },
                move: function(a, b, c, d) {
                    return this.enter(a, b, c, d);
                },
                addClass: function(a, b, c) {
                    return this.setClass(a, b, [], c);
                },
                $$addClassImmediately: function(a, b, c) {
                    return a = Pd(a), b = u(b) ? b : $d(b) ? b.join(" ") : "", f(a, function(a) {
                        Ab(a, b);
                    }), i(a, c), h();
                },
                removeClass: function(a, b, c) {
                    return this.setClass(a, [], b, c);
                },
                $$removeClassImmediately: function(a, b, c) {
                    return a = Pd(a), b = u(b) ? b : $d(b) ? b.join(" ") : "", f(a, function(a) {
                        zb(a, b);
                    }), i(a, c), h();
                },
                setClass: function(a, b, c, f) {
                    var h = this, i = "$$animateClasses", j = !1;
                    a = Pd(a);
                    var k = a.data(i);
                    k ? f && k.options && (k.options = Xd.extend(k.options || {}, f)) : (k = {
                        classes: {},
                        options: f
                    }, j = !0);
                    var l = k.classes;
                    return b = $d(b) ? b : b.split(" "), c = $d(c) ? c : c.split(" "), g(l, b, !0), 
                    g(l, c, !1), j && (k.promise = d(function(b) {
                        var c = a.data(i);
                        if (a.removeData(i), c) {
                            var d = e(a, c.classes);
                            d && h.$$setClassImmediately(a, d[0], d[1], c.options);
                        }
                        b();
                    }), a.data(i, k)), k.promise;
                },
                $$setClassImmediately: function(a, b, c, d) {
                    return b && this.$$addClassImmediately(a, b), c && this.$$removeClassImmediately(a, c), 
                    i(a, d), h();
                },
                enabled: o,
                cancel: o
            };
        } ];
    } ], Ie = d("$compile");
    Vb.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var Je = /^(x[\:\-_]|data[\:\-_])/i, Ke = d("$interpolate"), Le = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Me = {
        http: 80,
        https: 443,
        ftp: 21
    }, Ne = d("$location"), Oe = {
        $$html5: !1,
        $$replace: !1,
        absUrl: vc("$$absUrl"),
        url: function(a) {
            if (r(a)) return this.$$url;
            var b = Le.exec(a);
            return b[1] && this.path(decodeURIComponent(b[1])), (b[2] || b[1]) && this.search(b[3] || ""), 
            this.hash(b[5] || ""), this;
        },
        protocol: vc("$$protocol"),
        host: vc("$$host"),
        port: vc("$$port"),
        path: wc("$$path", function(a) {
            return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a;
        }),
        search: function(a, b) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (u(a) || v(a)) a = a.toString(), this.$$search = U(a); else {
                    if (!t(a)) throw Ne("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                    a = J(a, {}), f(a, function(b, c) {
                        null == b && delete a[c];
                    }), this.$$search = a;
                }
                break;

              default:
                r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;
            }
            return this.$$compose(), this;
        },
        hash: wc("$$hash", function(a) {
            return null !== a ? a.toString() : "";
        }),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    f([ uc, tc, sc ], function(a) {
        a.prototype = Object.create(Oe), a.prototype.state = function(b) {
            if (!arguments.length) return this.$$state;
            if (a !== sc || !this.$$html5) throw Ne("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = r(b) ? null : b, this;
        };
    });
    var Pe = d("$parse"), Qe = Function.prototype.call, Re = Function.prototype.apply, Se = Function.prototype.bind, Te = ib();
    f({
        "null": function() {
            return null;
        },
        "true": function() {
            return !0;
        },
        "false": function() {
            return !1;
        },
        undefined: function() {}
    }, function(a, b) {
        a.constant = a.literal = a.sharedGetter = !0, Te[b] = a;
    }), Te["this"] = function(a) {
        return a;
    }, Te["this"].sharedGetter = !0;
    var Ue = l(ib(), {
        "+": function(a, b, d, e) {
            return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c;
        },
        "-": function(a, b, c, d) {
            return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0);
        },
        "*": function(a, b, c, d) {
            return c(a, b) * d(a, b);
        },
        "/": function(a, b, c, d) {
            return c(a, b) / d(a, b);
        },
        "%": function(a, b, c, d) {
            return c(a, b) % d(a, b);
        },
        "===": function(a, b, c, d) {
            return c(a, b) === d(a, b);
        },
        "!==": function(a, b, c, d) {
            return c(a, b) !== d(a, b);
        },
        "==": function(a, b, c, d) {
            return c(a, b) == d(a, b);
        },
        "!=": function(a, b, c, d) {
            return c(a, b) != d(a, b);
        },
        "<": function(a, b, c, d) {
            return c(a, b) < d(a, b);
        },
        ">": function(a, b, c, d) {
            return c(a, b) > d(a, b);
        },
        "<=": function(a, b, c, d) {
            return c(a, b) <= d(a, b);
        },
        ">=": function(a, b, c, d) {
            return c(a, b) >= d(a, b);
        },
        "&&": function(a, b, c, d) {
            return c(a, b) && d(a, b);
        },
        "||": function(a, b, c, d) {
            return c(a, b) || d(a, b);
        },
        "!": function(a, b, c) {
            return !c(a, b);
        },
        "=": !0,
        "|": !0
    }), Ve = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, We = function(a) {
        this.options = a;
    };
    We.prototype = {
        constructor: We,
        lex: function(a) {
            for (this.text = a, this.index = 0, this.ch = c, this.tokens = []; this.index < this.text.length; ) if (this.ch = this.text.charAt(this.index), 
            this.is("\"'")) this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(this.ch)) this.readIdent(); else if (this.is("(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: this.ch
            }), this.index++; else if (this.isWhitespace(this.ch)) this.index++; else {
                var b = this.ch + this.peek(), d = b + this.peek(2), e = Ue[this.ch], f = Ue[b], g = Ue[d];
                g ? (this.tokens.push({
                    index: this.index,
                    text: d,
                    fn: g
                }), this.index += 3) : f ? (this.tokens.push({
                    index: this.index,
                    text: b,
                    fn: f
                }), this.index += 2) : e ? (this.tokens.push({
                    index: this.index,
                    text: this.ch,
                    fn: e
                }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1);
            }
            return this.tokens;
        },
        is: function(a) {
            return -1 !== a.indexOf(this.ch);
        },
        peek: function(a) {
            var b = a || 1;
            return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1;
        },
        isNumber: function(a) {
            return a >= "0" && "9" >= a;
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a;
        },
        isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a;
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a);
        },
        throwError: function(a, b, c) {
            c = c || this.index;
            var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
            throw Pe("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text);
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length; ) {
                var c = Jd(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c; else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c; else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c; else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent");
                    }
                }
                this.index++;
            }
            a = 1 * a, this.tokens.push({
                index: b,
                text: a,
                constant: !0,
                fn: function() {
                    return a;
                }
            });
        },
        readIdent: function() {
            for (var a, b, d, e, f = this.text, g = "", h = this.index; this.index < this.text.length && (e = this.text.charAt(this.index), 
            "." === e || this.isIdent(e) || this.isNumber(e)); ) "." === e && (a = this.index), 
            g += e, this.index++;
            if (a && "." === g[g.length - 1] && (this.index--, g = g.slice(0, -1), a = g.lastIndexOf("."), 
            -1 === a && (a = c)), a) for (b = this.index; b < this.text.length; ) {
                if (e = this.text.charAt(b), "(" === e) {
                    d = g.substr(a - h + 1), g = g.substr(0, a - h), this.index = b;
                    break;
                }
                if (!this.isWhitespace(e)) break;
                b++;
            }
            this.tokens.push({
                index: h,
                text: g,
                fn: Te[g] || Fc(g, this.options, f)
            }), d && (this.tokens.push({
                index: a,
                text: "."
            }), this.tokens.push({
                index: a + 1,
                text: d
            }));
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length; ) {
                var f = this.text.charAt(this.index);
                if (d += f, e) {
                    if ("u" === f) {
                        var g = this.text.substring(this.index + 1, this.index + 5);
                        g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), 
                        this.index += 4, c += String.fromCharCode(parseInt(g, 16));
                    } else {
                        var h = Ve[f];
                        c += h || f;
                    }
                    e = !1;
                } else if ("\\" === f) e = !0; else {
                    if (f === a) return this.index++, void this.tokens.push({
                        index: b,
                        text: d,
                        string: c,
                        constant: !0,
                        fn: function() {
                            return c;
                        }
                    });
                    c += f;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", b);
        }
    };
    var Xe = function(a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c;
    };
    Xe.ZERO = l(function() {
        return 0;
    }, {
        sharedGetter: !0,
        constant: !0
    }), Xe.prototype = {
        constructor: Xe,
        parse: function(a) {
            this.text = a, this.tokens = this.lexer.lex(a);
            var b = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
            b.literal = !!b.literal, b.constant = !!b.constant, b;
        },
        primary: function() {
            var a;
            if (this.expect("(")) a = this.filterChain(), this.consume(")"); else if (this.expect("[")) a = this.arrayDeclaration(); else if (this.expect("{")) a = this.object(); else {
                var b = this.expect();
                a = b.fn, a || this.throwError("not a primary expression", b), b.constant && (a.constant = !0, 
                a.literal = !0);
            }
            for (var c, d; c = this.expect("(", "[", "."); ) "(" === c.text ? (a = this.functionCall(a, d), 
            d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, 
            a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a;
        },
        throwError: function(a, b) {
            throw Pe("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Pe("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0];
        },
        peek: function(a, b, c, d) {
            if (this.tokens.length > 0) {
                var e = this.tokens[0], f = e.text;
                if (f === a || f === b || f === c || f === d || !a && !b && !c && !d) return e;
            }
            return !1;
        },
        expect: function(a, b, c, d) {
            var e = this.peek(a, b, c, d);
            return e ? (this.tokens.shift(), e) : !1;
        },
        consume: function(a) {
            this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
        },
        unaryFn: function(a, b) {
            return l(function(c, d) {
                return a(c, d, b);
            }, {
                constant: b.constant,
                inputs: [ b ]
            });
        },
        binaryFn: function(a, b, c, d) {
            return l(function(d, e) {
                return b(d, e, a, c);
            }, {
                constant: a.constant && c.constant,
                inputs: !d && [ a, c ]
            });
        },
        statements: function() {
            for (var a = []; ;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), 
            !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) {
                for (var d, e = 0, f = a.length; f > e; e++) d = a[e](b, c);
                return d;
            };
        },
        filterChain: function() {
            for (var a, b = this.expression(); a = this.expect("|"); ) b = this.filter(b);
            return b;
        },
        filter: function(a) {
            var b, d, e = this.expect(), f = this.$filter(e.text);
            if (this.peek(":")) for (b = [], d = []; this.expect(":"); ) b.push(this.expression());
            var g = [ a ].concat(b || []);
            return l(function(e, g) {
                var h = a(e, g);
                if (d) {
                    d[0] = h;
                    for (var i = b.length; i--; ) d[i + 1] = b[i](e, g);
                    return f.apply(c, d);
                }
                return f(h);
            }, {
                constant: !f.$stateful && g.every(Cc),
                inputs: !f.$stateful && g
            });
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var a, b, c = this.ternary();
            return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), 
            a = this.ternary(), l(function(b, d) {
                return c.assign(b, a(b, d), d);
            }, {
                inputs: [ c, a ]
            })) : c;
        },
        ternary: function() {
            var a, b, c = this.logicalOR();
            if (b = this.expect("?")) {
                if (a = this.assignment(), b = this.expect(":")) {
                    var d = this.assignment();
                    return l(function(b, e) {
                        return c(b, e) ? a(b, e) : d(b, e);
                    }, {
                        constant: c.constant && a.constant && d.constant
                    });
                }
                this.throwError("expected :", b);
            }
            return c;
        },
        logicalOR: function() {
            for (var a, b = this.logicalAND(); a = this.expect("||"); ) b = this.binaryFn(b, a.fn, this.logicalAND(), !0);
            return b;
        },
        logicalAND: function() {
            var a, b = this.equality();
            return (a = this.expect("&&")) && (b = this.binaryFn(b, a.fn, this.logicalAND(), !0)), 
            b;
        },
        equality: function() {
            var a, b = this.relational();
            return (a = this.expect("==", "!=", "===", "!==")) && (b = this.binaryFn(b, a.fn, this.equality())), 
            b;
        },
        relational: function() {
            var a, b = this.additive();
            return (a = this.expect("<", ">", "<=", ">=")) && (b = this.binaryFn(b, a.fn, this.relational())), 
            b;
        },
        additive: function() {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-"); ) b = this.binaryFn(b, a.fn, this.multiplicative());
            return b;
        },
        multiplicative: function() {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%"); ) b = this.binaryFn(b, a.fn, this.unary());
            return b;
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(Xe.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary();
        },
        fieldAccess: function(a) {
            var b = this.text, c = this.expect().text, d = Fc(c, this.options, b);
            return l(function(b, c, e) {
                return d(e || a(b, c));
            }, {
                assign: function(d, e, f) {
                    var g = a(d, f);
                    return g || a.assign(d, g = {}), Dc(g, c, e, b);
                }
            });
        },
        objectIndex: function(a) {
            var b = this.text, d = this.expression();
            return this.consume("]"), l(function(e, f) {
                var g, h = a(e, f), i = d(e, f);
                return zc(i, b), h ? g = Ac(h[i], b) : c;
            }, {
                assign: function(c, e, f) {
                    var g = zc(d(c, f), b), h = Ac(a(c, f), b);
                    return h || a.assign(c, h = {}), h[g] = e;
                }
            });
        },
        functionCall: function(a, b) {
            var c = [];
            if (")" !== this.peekToken().text) do c.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var d = this.text, e = c.length ? [] : null;
            return function(f, g) {
                var h = b ? b(f, g) : f, i = a(f, g, h) || o;
                if (e) for (var j = c.length; j--; ) e[j] = Ac(c[j](f, g), d);
                Ac(h, d), Bc(i, d);
                var k = i.apply ? i.apply(h, e) : i(e[0], e[1], e[2], e[3], e[4]);
                return Ac(k, d);
            };
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                var b = this.expression();
                a.push(b);
            } while (this.expect(","));
            return this.consume("]"), l(function(b, c) {
                for (var d = [], e = 0, f = a.length; f > e; e++) d.push(a[e](b, c));
                return d;
            }, {
                literal: !0,
                constant: a.every(Cc),
                inputs: a
            });
        },
        object: function() {
            var a = [], b = [];
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                var c = this.expect();
                a.push(c.string || c.text), this.consume(":");
                var d = this.expression();
                b.push(d);
            } while (this.expect(","));
            return this.consume("}"), l(function(c, d) {
                for (var e = {}, f = 0, g = b.length; g > f; f++) e[a[f]] = b[f](c, d);
                return e;
            }, {
                literal: !0,
                constant: b.every(Cc),
                inputs: b
            });
        }
    };
    var Ye = ib(), Ze = d("$sce"), $e = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Ie = d("$compile"), _e = b.createElement("a"), af = Wc(a.location.href, !0);
    Zc.$inject = [ "$provide" ], _c.$inject = [ "$locale" ], ad.$inject = [ "$locale" ];
    var bf = ".", cf = {
        yyyy: dd("FullYear", 4),
        yy: dd("FullYear", 2, 0, !0),
        y: dd("FullYear", 1),
        MMMM: ed("Month"),
        MMM: ed("Month", !0),
        MM: dd("Month", 2, 1),
        M: dd("Month", 1, 1),
        dd: dd("Date", 2),
        d: dd("Date", 1),
        HH: dd("Hours", 2),
        H: dd("Hours", 1),
        hh: dd("Hours", 2, -12),
        h: dd("Hours", 1, -12),
        mm: dd("Minutes", 2),
        m: dd("Minutes", 1),
        ss: dd("Seconds", 2),
        s: dd("Seconds", 1),
        sss: dd("Milliseconds", 3),
        EEEE: ed("Day"),
        EEE: ed("Day", !0),
        a: jd,
        Z: fd,
        ww: id(2),
        w: id(1)
    }, df = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, ef = /^\-?\d+$/;
    kd.$inject = [ "$locale" ];
    var ff = q(Jd), gf = q(Ld);
    nd.$inject = [ "$parse" ];
    var hf = q({
        restrict: "E",
        compile: function(a, b) {
            return b.href || b.xlinkHref || b.name ? void 0 : function(a, b) {
                var c = "[object SVGAnimatedString]" === Vd.call(b.prop("href")) ? "xlink:href" : "href";
                b.on("click", function(a) {
                    b.attr(c) || a.preventDefault();
                });
            };
        }
    }), jf = {};
    f(ye, function(a, b) {
        if ("multiple" != a) {
            var c = Wb("ng-" + b);
            jf[c] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: function(a, d, e) {
                        a.$watch(e[c], function(a) {
                            e.$set(b, !!a);
                        });
                    }
                };
            };
        }
    }), f(Ae, function(a, b) {
        jf[b] = function() {
            return {
                priority: 100,
                link: function(a, c, d) {
                    if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                        var e = d.ngPattern.match(Hd);
                        if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]));
                    }
                    a.$watch(d[b], function(a) {
                        d.$set(b, a);
                    });
                }
            };
        };
    }), f([ "src", "srcset", "href" ], function(a) {
        var b = Wb("ng-" + a);
        jf[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    var f = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" === Vd.call(d.prop("href")) && (g = "xlinkHref", 
                    e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
                        return b ? (e.$set(g, b), void (Od && f && d.prop(f, e[g]))) : void ("href" === a && e.$set(g, null));
                    });
                }
            };
        };
    });
    var kf = {
        $addControl: o,
        $$renameControl: pd,
        $removeControl: o,
        $setValidity: o,
        $setDirty: o,
        $setPristine: o,
        $setSubmitted: o
    }, lf = "ng-submitted";
    qd.$inject = [ "$element", "$attrs", "$scope", "$animate", "$interpolate" ];
    var mf = function(a) {
        return [ "$timeout", function(b) {
            var d = {
                name: "form",
                restrict: a ? "EAC" : "E",
                controller: qd,
                compile: function(a) {
                    return a.addClass(Ef).addClass(Cf), {
                        pre: function(a, d, e, f) {
                            if (!("action" in e)) {
                                var g = function(b) {
                                    a.$apply(function() {
                                        f.$commitViewValue(), f.$setSubmitted();
                                    }), b.preventDefault ? b.preventDefault() : b.returnValue = !1;
                                };
                                me(d[0], "submit", g), d.on("$destroy", function() {
                                    b(function() {
                                        ne(d[0], "submit", g);
                                    }, 0, !1);
                                });
                            }
                            var h = f.$$parentForm, i = f.$name;
                            i && (Dc(a, i, f, i), e.$observe(e.name ? "name" : "ngForm", function(b) {
                                i !== b && (Dc(a, i, c, i), i = b, Dc(a, i, f, i), h.$$renameControl(f, i));
                            })), d.on("$destroy", function() {
                                h.$removeControl(f), i && Dc(a, i, c, i), l(f, kf);
                            });
                        }
                    };
                }
            };
            return d;
        } ];
    }, nf = mf(), of = mf(!0), pf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, qf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, rf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, sf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, tf = /^(\d{4})-(\d{2})-(\d{2})$/, uf = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, vf = /^(\d{4})-W(\d\d)$/, wf = /^(\d{4})-(\d\d)$/, xf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, yf = /(\s+|^)default(\s+|$)/, zf = new d("ngModel"), Af = {
        text: sd,
        date: wd("date", tf, vd(tf, [ "yyyy", "MM", "dd" ]), "yyyy-MM-dd"),
        "datetime-local": wd("datetimelocal", uf, vd(uf, [ "yyyy", "MM", "dd", "HH", "mm", "ss", "sss" ]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: wd("time", xf, vd(xf, [ "HH", "mm", "ss", "sss" ]), "HH:mm:ss.sss"),
        week: wd("week", vf, ud, "yyyy-Www"),
        month: wd("month", wf, vd(wf, [ "yyyy", "MM" ]), "yyyy-MM"),
        number: yd,
        url: zd,
        email: Ad,
        radio: Bd,
        checkbox: Dd,
        hidden: o,
        button: o,
        submit: o,
        reset: o,
        file: o
    }, Bf = [ "$browser", "$sniffer", "$filter", "$parse", function(a, b, c, d) {
        return {
            restrict: "E",
            require: [ "?ngModel" ],
            link: {
                pre: function(e, f, g, h) {
                    h[0] && (Af[Jd(g.type)] || Af.text)(e, f, g, h[0], b, a, c, d);
                }
            }
        };
    } ], Cf = "ng-valid", Df = "ng-invalid", Ef = "ng-pristine", Ff = "ng-dirty", Gf = "ng-untouched", Hf = "ng-touched", If = "ng-pending", Jf = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, e, g, h, i, j, k, l) {
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$validators = {}, 
        this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], 
        this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, 
        this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, 
        this.$name = l(d.name || "", !1)(a);
        var m = g(d.ngModel), n = null, p = this, q = function() {
            var b = m(a);
            return p.$options && p.$options.getterSetter && x(b) && (b = b()), b;
        }, t = function() {
            var b;
            p.$options && p.$options.getterSetter && x(b = m(a)) ? b(p.$modelValue) : m.assign(a, p.$modelValue);
        };
        this.$$setOptions = function(a) {
            if (p.$options = a, !(m.assign || a && a.getterSetter)) throw zf("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, S(e));
        }, this.$render = o, this.$isEmpty = function(a) {
            return r(a) || "" === a || null === a || a !== a;
        };
        var u = e.inheritedData("$formController") || kf, w = 0;
        Ed({
            ctrl: this,
            $element: e,
            set: function(a, b) {
                a[b] = !0;
            },
            unset: function(a, b) {
                delete a[b];
            },
            parentForm: u,
            $animate: h
        }), this.$setPristine = function() {
            p.$dirty = !1, p.$pristine = !0, h.removeClass(e, Ff), h.addClass(e, Ef);
        }, this.$setUntouched = function() {
            p.$touched = !1, p.$untouched = !0, h.setClass(e, Gf, Hf);
        }, this.$setTouched = function() {
            p.$touched = !0, p.$untouched = !1, h.setClass(e, Hf, Gf);
        }, this.$rollbackViewValue = function() {
            i.cancel(n), p.$viewValue = p.$$lastCommittedViewValue, p.$render();
        }, this.$validate = function() {
            v(p.$modelValue) && isNaN(p.$modelValue) || this.$$parseAndValidate();
        }, this.$$runValidators = function(a, b, d, e) {
            function g(a) {
                var b = p.$$parserName || "parse";
                if (a === c) j(b, null); else if (j(b, a), !a) return f(p.$validators, function(a, b) {
                    j(b, null);
                }), f(p.$asyncValidators, function(a, b) {
                    j(b, null);
                }), !1;
                return !0;
            }
            function h() {
                var a = !0;
                return f(p.$validators, function(c, e) {
                    var f = c(b, d);
                    a = a && f, j(e, f);
                }), a ? !0 : (f(p.$asyncValidators, function(a, b) {
                    j(b, null);
                }), !1);
            }
            function i() {
                var a = [], e = !0;
                f(p.$asyncValidators, function(f, g) {
                    var h = f(b, d);
                    if (!E(h)) throw zf("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
                    j(g, c), a.push(h.then(function() {
                        j(g, !0);
                    }, function() {
                        e = !1, j(g, !1);
                    }));
                }), a.length ? k.all(a).then(function() {
                    l(e);
                }, o) : l(!0);
            }
            function j(a, b) {
                m === w && p.$setValidity(a, b);
            }
            function l(a) {
                m === w && e(a);
            }
            w++;
            var m = w;
            return g(a) && h() ? void i() : void l(!1);
        }, this.$commitViewValue = function() {
            var a = p.$viewValue;
            i.cancel(n), (p.$$lastCommittedViewValue !== a || "" === a && p.$$hasNativeValidators) && (p.$$lastCommittedViewValue = a, 
            p.$pristine && (p.$dirty = !0, p.$pristine = !1, h.removeClass(e, Ef), h.addClass(e, Ff), 
            u.$setDirty()), this.$$parseAndValidate());
        }, this.$$parseAndValidate = function() {
            function a() {
                p.$modelValue !== g && p.$$writeModelToScope();
            }
            var b = p.$$lastCommittedViewValue, d = b, e = r(d) ? c : !0;
            if (e) for (var f = 0; f < p.$parsers.length; f++) if (d = p.$parsers[f](d), r(d)) {
                e = !1;
                break;
            }
            v(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = q());
            var g = p.$modelValue, h = p.$options && p.$options.allowInvalid;
            h && (p.$modelValue = d, a()), p.$$runValidators(e, d, b, function(b) {
                h || (p.$modelValue = b ? d : c, a());
            });
        }, this.$$writeModelToScope = function() {
            t(p.$modelValue), f(p.$viewChangeListeners, function(a) {
                try {
                    a();
                } catch (c) {
                    b(c);
                }
            });
        }, this.$setViewValue = function(a, b) {
            p.$viewValue = a, (!p.$options || p.$options.updateOnDefault) && p.$$debounceViewValueCommit(b);
        }, this.$$debounceViewValueCommit = function(b) {
            var c, d = 0, e = p.$options;
            e && s(e.debounce) && (c = e.debounce, v(c) ? d = c : v(c[b]) ? d = c[b] : v(c["default"]) && (d = c["default"])), 
            i.cancel(n), d ? n = i(function() {
                p.$commitViewValue();
            }, d) : j.$$phase ? p.$commitViewValue() : a.$apply(function() {
                p.$commitViewValue();
            });
        }, a.$watch(function() {
            var a = q();
            if (a !== p.$modelValue) {
                p.$modelValue = a;
                for (var b = p.$formatters, d = b.length, e = a; d--; ) e = b[d](e);
                p.$viewValue !== e && (p.$viewValue = p.$$lastCommittedViewValue = e, p.$render(), 
                p.$$runValidators(c, a, e, o));
            }
            return a;
        });
    } ], Kf = function() {
        return {
            restrict: "A",
            require: [ "ngModel", "^?form", "^?ngModelOptions" ],
            controller: Jf,
            priority: 1,
            compile: function(a) {
                return a.addClass(Ef).addClass(Gf).addClass(Cf), {
                    pre: function(a, b, c, d) {
                        var e = d[0], f = d[1] || kf;
                        e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function(a) {
                            e.$name !== a && f.$$renameControl(e, a);
                        }), a.$on("$destroy", function() {
                            f.$removeControl(e);
                        });
                    },
                    post: function(a, b, c, d) {
                        var e = d[0];
                        e.$options && e.$options.updateOn && b.on(e.$options.updateOn, function(a) {
                            e.$$debounceViewValueCommit(a && a.type);
                        }), b.on("blur", function() {
                            e.$touched || a.$apply(function() {
                                e.$setTouched();
                            });
                        });
                    }
                };
            }
        };
    }, Lf = q({
        restrict: "A",
        require: "ngModel",
        link: function(a, b, c, d) {
            d.$viewChangeListeners.push(function() {
                a.$eval(c.ngChange);
            });
        }
    }), Mf = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, c, d) {
                d && (c.required = !0, d.$validators.required = function(a) {
                    return !c.required || !d.$isEmpty(a);
                }, c.$observe("required", function() {
                    d.$validate();
                }));
            }
        };
    }, Nf = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, e, f) {
                if (f) {
                    var g, h = e.ngPattern || e.pattern;
                    e.$observe("pattern", function(a) {
                        if (u(a) && a.length > 0 && (a = new RegExp(a)), a && !a.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, S(b));
                        g = a || c, f.$validate();
                    }), f.$validators.pattern = function(a) {
                        return f.$isEmpty(a) || r(g) || g.test(a);
                    };
                }
            }
        };
    }, Of = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, c, d) {
                if (d) {
                    var e = 0;
                    c.$observe("maxlength", function(a) {
                        e = m(a) || 0, d.$validate();
                    }), d.$validators.maxlength = function(a, b) {
                        return d.$isEmpty(a) || b.length <= e;
                    };
                }
            }
        };
    }, Pf = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, c, d) {
                if (d) {
                    var e = 0;
                    c.$observe("minlength", function(a) {
                        e = m(a) || 0, d.$validate();
                    }), d.$validators.minlength = function(a, b) {
                        return d.$isEmpty(a) || b.length >= e;
                    };
                }
            }
        };
    }, Qf = function() {
        return {
            restrict: "A",
            priority: 100,
            require: "ngModel",
            link: function(a, b, d, e) {
                var g = b.attr(d.$attr.ngList) || ", ", h = "false" !== d.ngTrim, i = h ? _d(g) : g, j = function(a) {
                    if (!r(a)) {
                        var b = [];
                        return a && f(a.split(i), function(a) {
                            a && b.push(h ? _d(a) : a);
                        }), b;
                    }
                };
                e.$parsers.push(j), e.$formatters.push(function(a) {
                    return $d(a) ? a.join(g) : c;
                }), e.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, Rf = /^(true|false|\d+)$/, Sf = function() {
        return {
            restrict: "A",
            priority: 100,
            compile: function(a, b) {
                return Rf.test(b.ngValue) ? function(a, b, c) {
                    c.$set("value", a.$eval(c.ngValue));
                } : function(a, b, c) {
                    a.$watch(c.ngValue, function(a) {
                        c.$set("value", a);
                    });
                };
            }
        };
    }, Tf = function() {
        return {
            restrict: "A",
            controller: [ "$scope", "$attrs", function(a, b) {
                var d = this;
                this.$options = a.$eval(b.ngModelOptions), this.$options.updateOn !== c ? (this.$options.updateOnDefault = !1, 
                this.$options.updateOn = _d(this.$options.updateOn.replace(yf, function() {
                    return d.$options.updateOnDefault = !0, " ";
                }))) : this.$options.updateOnDefault = !0;
            } ]
        };
    }, Uf = [ "$compile", function(a) {
        return {
            restrict: "AC",
            compile: function(b) {
                return a.$$addBindingClass(b), function(b, d, e) {
                    a.$$addBindingInfo(d, e.ngBind), d = d[0], b.$watch(e.ngBind, function(a) {
                        d.textContent = a === c ? "" : a;
                    });
                };
            }
        };
    } ], Vf = [ "$interpolate", "$compile", function(a, b) {
        return {
            compile: function(d) {
                return b.$$addBindingClass(d), function(d, e, f) {
                    var g = a(e.attr(f.$attr.ngBindTemplate));
                    b.$$addBindingInfo(e, g.expressions), e = e[0], f.$observe("ngBindTemplate", function(a) {
                        e.textContent = a === c ? "" : a;
                    });
                };
            }
        };
    } ], Wf = [ "$sce", "$parse", "$compile", function(a, b, c) {
        return {
            restrict: "A",
            compile: function(d, e) {
                var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function(a) {
                    return (a || "").toString();
                });
                return c.$$addBindingClass(d), function(b, d, e) {
                    c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function() {
                        d.html(a.getTrustedHtml(f(b)) || "");
                    });
                };
            }
        };
    } ], Xf = Gd("", !0), Yf = Gd("Odd", 0), Zf = Gd("Even", 1), $f = od({
        compile: function(a, b) {
            b.$set("ngCloak", c), a.removeClass("ng-cloak");
        }
    }), _f = [ function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], ag = {}, bg = {
        blur: !0,
        focus: !0
    };
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = Wb("ng-" + a);
        ag[b] = [ "$parse", "$rootScope", function(c, d) {
            return {
                restrict: "A",
                compile: function(e, f) {
                    var g = c(f[b]);
                    return function(b, c) {
                        c.on(a, function(c) {
                            var e = function() {
                                g(b, {
                                    $event: c
                                });
                            };
                            bg[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e);
                        });
                    };
                }
            };
        } ];
    });
    var cg = [ "$animate", function(a) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(c, d, e, f, g) {
                var h, i, j;
                c.$watch(e.ngIf, function(c) {
                    c ? i || g(function(c, f) {
                        i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                            clone: c
                        }, a.enter(c, d.parent(), d);
                    }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = hb(h.clone), 
                    a.leave(j).then(function() {
                        j = null;
                    }), h = null));
                });
            }
        };
    } ], dg = [ "$templateRequest", "$anchorScroll", "$animate", "$sce", function(a, b, c, d) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: Xd.noop,
            compile: function(e, f) {
                var g = f.ngInclude || f.src, h = f.onload || "", i = f.autoscroll;
                return function(e, f, j, k, l) {
                    var m, n, o, p = 0, q = function() {
                        n && (n.remove(), n = null), m && (m.$destroy(), m = null), o && (c.leave(o).then(function() {
                            n = null;
                        }), n = o, o = null);
                    };
                    e.$watch(d.parseAsResourceUrl(g), function(d) {
                        var g = function() {
                            !s(i) || i && !e.$eval(i) || b();
                        }, j = ++p;
                        d ? (a(d, !0).then(function(a) {
                            if (j === p) {
                                var b = e.$new();
                                k.template = a;
                                var i = l(b, function(a) {
                                    q(), c.enter(a, null, f).then(g);
                                });
                                m = b, o = i, m.$emit("$includeContentLoaded", d), e.$eval(h);
                            }
                        }, function() {
                            j === p && (q(), e.$emit("$includeContentError", d));
                        }), e.$emit("$includeContentRequested", d)) : (q(), k.template = null);
                    });
                };
            }
        };
    } ], eg = [ "$compile", function(a) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(d, e, f, g) {
                return /SVG/.test(e[0].toString()) ? (e.empty(), void a(pb(g.template, b).childNodes)(d, function(a) {
                    e.append(a);
                }, c, c, e)) : (e.html(g.template), void a(e.contents())(d));
            }
        };
    } ], fg = od({
        priority: 450,
        compile: function() {
            return {
                pre: function(a, b, c) {
                    a.$eval(c.ngInit);
                }
            };
        }
    }), gg = od({
        terminal: !0,
        priority: 1e3
    }), hg = [ "$locale", "$interpolate", function(a, b) {
        var c = /{}/g;
        return {
            restrict: "EA",
            link: function(d, e, g) {
                var h = g.count, i = g.$attr.when && e.attr(g.$attr.when), j = g.offset || 0, k = d.$eval(i) || {}, l = {}, m = b.startSymbol(), n = b.endSymbol(), o = /^when(Minus)?(.+)$/;
                f(g, function(a, b) {
                    o.test(b) && (k[Jd(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b]));
                }), f(k, function(a, d) {
                    l[d] = b(a.replace(c, m + h + "-" + j + n));
                }), d.$watch(function() {
                    var b = parseFloat(d.$eval(h));
                    return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d));
                }, function(a) {
                    e.text(a);
                });
            }
        };
    } ], ig = [ "$parse", "$animate", function(a, g) {
        var h = "$$NG_REMOVED", i = d("ngRepeat"), j = function(a, b, c, d, e, f, g) {
            a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, 
            a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b));
        }, k = function(a) {
            return a.clone[0];
        }, l = function(a) {
            return a.clone[a.clone.length - 1];
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function(d, m) {
                var n = m.ngRepeat, o = b.createComment(" end ngRepeat: " + n + " "), p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!p) throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
                var q = p[1], r = p[2], s = p[3], t = p[4];
                if (p = q.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !p) throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
                var u = p[3] || p[1], v = p[2];
                if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(s))) throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
                var w, x, y, z, A = {
                    $id: Kb
                };
                return t ? w = a(t) : (y = function(a, b) {
                    return Kb(b);
                }, z = function(a) {
                    return a;
                }), function(a, b, d, m, p) {
                    w && (x = function(b, c, d) {
                        return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A);
                    });
                    var q = ib();
                    a.$watchCollection(r, function(d) {
                        var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0], J = ib();
                        if (s && (a[s] = d), e(d)) E = d, D = x || y; else {
                            D = x || z, E = [];
                            for (var K in d) d.hasOwnProperty(K) && "$" != K.charAt(0) && E.push(K);
                            E.sort();
                        }
                        for (w = E.length, G = new Array(w), m = 0; w > m; m++) if (A = d === E ? m : E[m], 
                        B = d[A], C = D(A, B, m), q[C]) F = q[C], delete q[C], J[C] = F, G[m] = F; else {
                            if (J[C]) throw f(G, function(a) {
                                a && a.scope && (q[a.id] = a);
                            }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, Q(B));
                            G[m] = {
                                id: C,
                                scope: c,
                                clone: c
                            }, J[C] = !0;
                        }
                        for (var L in q) {
                            if (F = q[L], H = hb(F.clone), g.leave(H), H[0].parentNode) for (m = 0, r = H.length; r > m; m++) H[m][h] = !0;
                            F.scope.$destroy();
                        }
                        for (m = 0; w > m; m++) if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                            t = I;
                            do t = t.nextSibling; while (t && t[h]);
                            k(F) != t && g.move(hb(F.clone), null, Pd(I)), I = l(F), j(F.scope, m, u, B, v, A, w);
                        } else p(function(a, b) {
                            F.scope = b;
                            var c = o.cloneNode(!1);
                            a[a.length++] = c, g.enter(a, null, Pd(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w);
                        });
                        q = J;
                    });
                };
            }
        };
    } ], jg = "ng-hide", kg = "ng-hide-animate", lg = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(b, c, d) {
                b.$watch(d.ngShow, function(b) {
                    a[b ? "removeClass" : "addClass"](c, jg, {
                        tempClasses: kg
                    });
                });
            }
        };
    } ], mg = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(b, c, d) {
                b.$watch(d.ngHide, function(b) {
                    a[b ? "addClass" : "removeClass"](c, jg, {
                        tempClasses: kg
                    });
                });
            }
        };
    } ], ng = od(function(a, b, c) {
        a.$watch(c.ngStyle, function(a, c) {
            c && a !== c && f(c, function(a, c) {
                b.css(c, "");
            }), a && b.css(a);
        }, !0);
    }), og = [ "$animate", function(a) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(c, d, e, g) {
                var h = e.ngSwitch || e.on, i = [], j = [], k = [], l = [], m = function(a, b) {
                    return function() {
                        a.splice(b, 1);
                    };
                };
                c.$watch(h, function(c) {
                    var d, e;
                    for (d = 0, e = k.length; e > d; ++d) a.cancel(k[d]);
                    for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                        var h = hb(j[d].clone);
                        l[d].$destroy();
                        var n = k[d] = a.leave(h);
                        n.then(m(k, d));
                    }
                    j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function(c) {
                        c.transclude(function(d, e) {
                            l.push(e);
                            var f = c.element;
                            d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                            var g = {
                                clone: d
                            };
                            j.push(g), a.enter(d, f.parent(), f);
                        });
                    });
                });
            }
        };
    } ], pg = od({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, c, d, e) {
            d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                transclude: e,
                element: b
            });
        }
    }), qg = od({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, c, d, e) {
            d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                transclude: e,
                element: b
            });
        }
    }), rg = od({
        restrict: "EAC",
        link: function(a, b, c, e, f) {
            if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", S(b));
            f(function(a) {
                b.empty(), b.append(a);
            });
        }
    }), sg = [ "$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(b, c) {
                if ("text/ng-template" == c.type) {
                    var d = c.id, e = b[0].text;
                    a.put(d, e);
                }
            }
        };
    } ], tg = d("ngOptions"), ug = q({
        restrict: "A",
        terminal: !0
    }), vg = [ "$compile", "$parse", function(a, d) {
        var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, h = {
            $setViewValue: o
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function(a, b, c) {
                var d, e, f = this, g = {}, i = h;
                f.databound = c.ngModel, f.init = function(a, b, c) {
                    i = a, d = b, e = c;
                }, f.addOption = function(b, c) {
                    fb(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove()), 
                    c && c[0].hasAttribute("selected") && (c[0].selected = !0);
                }, f.removeOption = function(a) {
                    this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a));
                }, f.renderUnknownOption = function(b) {
                    var c = "? " + Kb(b) + " ?";
                    e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0);
                }, f.hasOption = function(a) {
                    return g.hasOwnProperty(a);
                }, b.$on("$destroy", function() {
                    f.renderUnknownOption = o;
                });
            } ],
            link: function(h, i, j, k) {
                function l(a, b, c, d) {
                    c.$render = function() {
                        var a = c.$viewValue;
                        d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a);
                    }, b.on("change", function() {
                        a.$apply(function() {
                            z.parent() && z.remove(), c.$setViewValue(b.val());
                        });
                    });
                }
                function m(a, b, c) {
                    var d;
                    c.$render = function() {
                        var a = new Lb(c.$viewValue);
                        f(b.find("option"), function(b) {
                            b.selected = s(a.get(b.value));
                        });
                    }, a.$watch(function() {
                        L(d, c.$viewValue) || (d = K(c.$viewValue), c.$render());
                    }), b.on("change", function() {
                        a.$apply(function() {
                            var a = [];
                            f(b.find("option"), function(b) {
                                b.selected && a.push(b.value);
                            }), c.$setViewValue(a);
                        });
                    });
                }
                function n(b, h, i) {
                    function j(a, c, d) {
                        return L[B] = d, E && (L[E] = c), a(b, L);
                    }
                    function k() {
                        b.$apply(function() {
                            var a, c = H(b) || [];
                            if (t) a = [], f(h.val(), function(b) {
                                a.push(l(b, c[b]));
                            }); else {
                                var d = h.val();
                                a = l(d, c[d]);
                            }
                            i.$setViewValue(a), r();
                        });
                    }
                    function l(a, b) {
                        if ("?" === a) return c;
                        if ("" === a) return null;
                        var d = D ? D : G;
                        return j(d, a, b);
                    }
                    function m() {
                        var a, c = H(b);
                        if (c && $d(c)) {
                            a = new Array(c.length);
                            for (var d = 0, e = c.length; e > d; d++) a[d] = j(A, d, c[d]);
                            return a;
                        }
                        if (c) {
                            a = {};
                            for (var f in c) c.hasOwnProperty(f) && (a[f] = j(A, f, c[f]));
                        }
                        return a;
                    }
                    function n(a) {
                        var b;
                        if (t) if (J && $d(a)) {
                            b = new Lb([]);
                            for (var c = 0; c < a.length; c++) b.put(j(J, null, a[c]), !0);
                        } else b = new Lb(a); else J && (a = j(J, null, a));
                        return function(c, d) {
                            var e;
                            return e = J ? J : D ? D : G, t ? s(b.remove(j(e, c, d))) : a == j(e, c, d);
                        };
                    }
                    function o() {
                        w || (b.$$postDigest(r), w = !0);
                    }
                    function q(a, b, c) {
                        a[b] = a[b] || 0, a[b] += c ? 1 : -1;
                    }
                    function r() {
                        w = !1;
                        var a, c, d, e, k, l, m, o, r, u, z, B, C, D, G, I, J = {
                            "": []
                        }, L = [ "" ], M = i.$viewValue, N = H(b) || [], O = E ? g(N) : N, P = {}, Q = n(M), R = !1;
                        for (B = 0; u = O.length, u > B; B++) m = B, E && (m = O[B], "$" === m.charAt(0)) || (o = N[m], 
                        a = j(F, m, o) || "", (c = J[a]) || (c = J[a] = [], L.push(a)), C = Q(m, o), R = R || C, 
                        I = j(A, m, o), I = s(I) ? I : "", c.push({
                            id: E ? O[B] : B,
                            label: I,
                            selected: C
                        }));
                        for (t || (v || null === M ? J[""].unshift({
                            id: "",
                            label: "",
                            selected: !R
                        }) : R || J[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        })), z = 0, r = L.length; r > z; z++) {
                            for (a = L[z], c = J[a], K.length <= z ? (e = {
                                element: y.clone().attr("label", a),
                                label: c.label
                            }, k = [ e ], K.push(k), h.append(e.element)) : (k = K[z], e = k[0], e.label != a && e.element.attr("label", e.label = a)), 
                            D = null, B = 0, u = c.length; u > B; B++) d = c[B], (l = k[B + 1]) ? (D = l.element, 
                            l.label !== d.label && (q(P, l.label, !1), q(P, d.label, !0), D.text(l.label = d.label)), 
                            l.id !== d.id && D.val(l.id = d.id), D[0].selected !== d.selected && (D.prop("selected", l.selected = d.selected), 
                            Od && D.prop("selected", l.selected))) : ("" === d.id && v ? G = v : (G = x.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).text(d.label), 
                            k.push(l = {
                                element: G,
                                label: d.label,
                                id: d.id,
                                selected: d.selected
                            }), q(P, d.label, !0), D ? D.after(G) : e.element.append(G), D = G);
                            for (B++; k.length > B; ) d = k.pop(), q(P, d.label, !1), d.element.remove();
                            f(P, function(a, b) {
                                a > 0 ? p.addOption(b) : 0 > a && p.removeOption(b);
                            });
                        }
                        for (;K.length > z; ) K.pop()[0].element.remove();
                    }
                    var z;
                    if (!(z = u.match(e))) throw tg("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, S(h));
                    var A = d(z[2] || z[1]), B = z[4] || z[6], C = / as /.test(z[0]) && z[1], D = C ? d(C) : null, E = z[5], F = d(z[3] || ""), G = d(z[2] ? z[1] : B), H = d(z[7]), I = z[8], J = I ? d(z[8]) : null, K = [ [ {
                        element: h,
                        label: ""
                    } ] ], L = {};
                    v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), h.empty(), h.on("change", k), 
                    i.$render = r, b.$watchCollection(H, o), b.$watchCollection(m, o), t && b.$watchCollection(function() {
                        return i.$modelValue;
                    }, o);
                }
                if (k[1]) {
                    for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = !1, x = Pd(b.createElement("option")), y = Pd(b.createElement("optgroup")), z = x.clone(), A = 0, B = i.children(), C = B.length; C > A; A++) if ("" === B[A].value) {
                        o = v = B.eq(A);
                        break;
                    }
                    p.init(q, v, z), t && (q.$isEmpty = function(a) {
                        return !a || 0 === a.length;
                    }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p);
                }
            }
        };
    } ], wg = [ "$interpolate", function(a) {
        var b = {
            addOption: o,
            removeOption: o
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(c, d) {
                if (r(d.value)) {
                    var e = a(c.text(), !0);
                    e || d.$set("value", c.text());
                }
                return function(a, c, d) {
                    var f = "$selectController", g = c.parent(), h = g.data(f) || g.parent().data(f);
                    h && h.databound || (h = b), e ? a.$watch(e, function(a, b) {
                        d.$set("value", a), b !== a && h.removeOption(b), h.addOption(a, c);
                    }) : h.addOption(d.value, c), c.on("$destroy", function() {
                        h.removeOption(d.value);
                    });
                };
            }
        };
    } ], xg = q({
        restrict: "E",
        terminal: !1
    });
    return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (cb(), 
    kb(Xd), void Pd(b).ready(function() {
        Z(b, $);
    }));
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), 
function(a, b, c) {
    "use strict";
    function d(a) {
        return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a);
    }
    function e(a, b) {
        if (!d(b)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
        for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
            var i = e[f];
            a = null !== a ? a[i] : c;
        }
        return a;
    }
    function f(a, c) {
        c = c || {}, b.forEach(c, function(a, b) {
            delete c[b];
        });
        for (var d in a) !a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
        return c;
    }
    var g = b.$$minErr("$resource"), h = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    b.module("ngResource", [ "ng" ]).provider("$resource", function() {
        var a = this;
        this.defaults = {
            stripTrailingSlashes: !0,
            actions: {
                get: {
                    method: "GET"
                },
                save: {
                    method: "POST"
                },
                query: {
                    method: "GET",
                    isArray: !0
                },
                remove: {
                    method: "DELETE"
                },
                "delete": {
                    method: "DELETE"
                }
            }
        }, this.$get = [ "$http", "$q", function(d, h) {
            function i(a) {
                return j(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
            }
            function j(a, b) {
                return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+");
            }
            function k(b, c) {
                this.template = b, this.defaults = o({}, a.defaults, c), this.urlParams = {};
            }
            function l(i, j, r, s) {
                function t(a, b) {
                    var c = {};
                    return b = o({}, j, b), n(b, function(b, d) {
                        q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b;
                    }), c;
                }
                function u(a) {
                    return a.resource;
                }
                function v(a) {
                    f(a || {}, this);
                }
                var w = new k(i, s);
                return r = o({}, a.defaults.actions, r), v.prototype.toJSON = function() {
                    var a = o({}, this);
                    return delete a.$promise, delete a.$resolved, a;
                }, n(r, function(a, e) {
                    var i = /^(POST|PUT|PATCH)$/i.test(a.method);
                    v[e] = function(j, k, l, r) {
                        var s, x, y, z = {};
                        switch (arguments.length) {
                          case 4:
                            y = r, x = l;

                          case 3:
                          case 2:
                            if (!q(k)) {
                                z = j, s = k, x = l;
                                break;
                            }
                            if (q(j)) {
                                x = j, y = k;
                                break;
                            }
                            x = k, y = l;

                          case 1:
                            q(j) ? x = j : i ? s = j : z = j;
                            break;

                          case 0:
                            break;

                          default:
                            throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length);
                        }
                        var A = this instanceof v, B = A ? s : a.isArray ? [] : new v(s), C = {}, D = a.interceptor && a.interceptor.response || u, E = a.interceptor && a.interceptor.responseError || c;
                        n(a, function(a, b) {
                            "params" != b && "isArray" != b && "interceptor" != b && (C[b] = p(a));
                        }), i && (C.data = s), w.setUrlParams(C, o({}, t(s, a.params || {}), z), a.url);
                        var F = d(C).then(function(c) {
                            var d = c.data, h = B.$promise;
                            if (d) {
                                if (b.isArray(d) !== !!a.isArray) throw g("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2}", e, a.isArray ? "array" : "object", b.isArray(d) ? "array" : "object");
                                a.isArray ? (B.length = 0, n(d, function(a) {
                                    B.push("object" == typeof a ? new v(a) : a);
                                })) : (f(d, B), B.$promise = h);
                            }
                            return B.$resolved = !0, c.resource = B, c;
                        }, function(a) {
                            return B.$resolved = !0, (y || m)(a), h.reject(a);
                        });
                        return F = F.then(function(a) {
                            var b = D(a);
                            return (x || m)(b, a.headers), b;
                        }, E), A ? F : (B.$promise = F, B.$resolved = !1, B);
                    }, v.prototype["$" + e] = function(a, b, c) {
                        q(a) && (c = b, b = a, a = {});
                        var d = v[e].call(this, a, this, b, c);
                        return d.$promise || d;
                    };
                }), v.bind = function(a) {
                    return l(i, o({}, j, a), r);
                }, v;
            }
            var m = b.noop, n = b.forEach, o = b.extend, p = b.copy, q = b.isFunction;
            return k.prototype = {
                setUrlParams: function(a, c, d) {
                    var e, f, h = this, j = d || h.template, k = h.urlParams = {};
                    n(j.split(/\W/), function(a) {
                        if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");
                        !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0);
                    }), j = j.replace(/\\:/g, ":"), c = c || {}, n(h.urlParams, function(a, d) {
                        e = c.hasOwnProperty(d) ? c[d] : h.defaults[d], b.isDefined(e) && null !== e ? (f = i(e), 
                        j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), function(a, b) {
                            return f + b;
                        })) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function(a, b, c) {
                            return "/" == c.charAt(0) ? c : b + c;
                        });
                    }), h.defaults.stripTrailingSlashes && (j = j.replace(/\/+$/, "") || "/"), j = j.replace(/\/\.(?=\w+($|\?))/, "."), 
                    a.url = j.replace(/\/\\\./, "/."), n(c, function(b, c) {
                        h.urlParams[c] || (a.params = a.params || {}, a.params[c] = b);
                    });
                }
            }, l;
        } ];
    });
}(window, window.angular), function(a, b, c) {
    "use strict";
    b.module("ngAnimate", [ "ng" ]).directive("ngAnimateChildren", function() {
        var a = "$$ngAnimateChildren";
        return function(c, d, e) {
            var f = e.ngAnimateChildren;
            b.isString(f) && 0 === f.length ? d.data(a, !0) : c.$watch(f, function(b) {
                d.data(a, !!b);
            });
        };
    }).factory("$$animateReflow", [ "$$rAF", "$document", function(a, b) {
        var c = b[0].body;
        return function(b) {
            return a(function() {
                c.offsetWidth + 1;
                b();
            });
        };
    } ]).config([ "$provide", "$animateProvider", function(d, e) {
        function f(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.nodeType == p) return c;
            }
        }
        function g(a) {
            return a && b.element(a);
        }
        function h(a) {
            return b.element(f(a));
        }
        function i(a, b) {
            return f(a) == f(b);
        }
        var j = b.noop, k = b.forEach, l = e.$$selectors, m = b.isArray, n = b.isString, o = b.isObject, p = 1, q = "$$ngAnimateState", r = "$$ngAnimateChildren", s = "ng-animate", t = {
            running: !0
        };
        d.decorator("$animate", [ "$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", function(a, c, d, p, u, v, w, x, y) {
            function z(a, b) {
                var c = a.data(q) || {};
                return b && (c.running = !0, c.structural = !0, a.data(q, c)), c.disabled || c.running && c.structural;
            }
            function A(a) {
                var b, d = c.defer();
                return d.promise.$$cancelFn = function() {
                    b && b();
                }, w.$$postDigest(function() {
                    b = a(function() {
                        d.resolve();
                    });
                }), d.promise;
            }
            function B(a) {
                return o(a) ? (a.tempClasses && n(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), 
                a) : void 0;
            }
            function C(a, b, c) {
                c = c || {};
                var d = {};
                k(c, function(a, b) {
                    k(b.split(" "), function(b) {
                        d[b] = a;
                    });
                });
                var e = Object.create(null);
                k((a.attr("class") || "").split(/\s+/), function(a) {
                    e[a] = !0;
                });
                var f = [], g = [];
                return k(b.classes, function(a, b) {
                    var c = e[b], h = d[b] || {};
                    a === !1 ? (c || "addClass" == h.event) && g.push(b) : a === !0 && (c && "removeClass" != h.event || f.push(b));
                }), f.length + g.length > 0 && [ f.join(" "), g.join(" ") ];
            }
            function D(a) {
                if (a) {
                    var b = [], c = {}, e = a.substr(1).split(".");
                    (p.transitions || p.animations) && b.push(d.get(l[""]));
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f], h = l[g];
                        h && !c[g] && (b.push(d.get(h)), c[g] = !0);
                    }
                    return b;
                }
            }
            function E(a, c, d, e) {
                function f(a, b) {
                    var c = a[b], d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
                    return c || d ? ("leave" == b && (d = c, c = null), w.push({
                        event: b,
                        fn: c
                    }), t.push({
                        event: b,
                        fn: d
                    }), !0) : void 0;
                }
                function g(b, c, f) {
                    function g(a) {
                        if (c) {
                            if ((c[a] || j)(), ++m < h.length) return;
                            c = null;
                        }
                        f();
                    }
                    var h = [];
                    k(b, function(a) {
                        a.fn && h.push(a);
                    });
                    var m = 0;
                    k(h, function(b, f) {
                        var h = function() {
                            g(f);
                        };
                        switch (b.event) {
                          case "setClass":
                            c.push(b.fn(a, i, l, h, e));
                            break;

                          case "animate":
                            c.push(b.fn(a, d, e.from, e.to, h));
                            break;

                          case "addClass":
                            c.push(b.fn(a, i || d, h, e));
                            break;

                          case "removeClass":
                            c.push(b.fn(a, l || d, h, e));
                            break;

                          default:
                            c.push(b.fn(a, h, e));
                        }
                    }), c && 0 === c.length && f();
                }
                var h = a[0];
                if (h) {
                    e && (e.to = e.to || {}, e.from = e.from || {});
                    var i, l;
                    m(d) && (i = d[0], l = d[1], i ? l ? d = i + " " + l : (d = i, c = "addClass") : (d = l, 
                    c = "removeClass"));
                    var n = "setClass" == c, o = n || "addClass" == c || "removeClass" == c || "animate" == c, p = a.attr("class"), q = p + " " + d;
                    if (M(q)) {
                        var r = j, s = [], t = [], u = j, v = [], w = [], x = (" " + q).replace(/\s+/g, ".");
                        return k(D(x), function(a) {
                            var b = f(a, c);
                            !b && n && (f(a, "addClass"), f(a, "removeClass"));
                        }), {
                            node: h,
                            event: c,
                            className: d,
                            isClassBased: o,
                            isSetClassOperation: n,
                            applyStyles: function() {
                                e && a.css(b.extend(e.from || {}, e.to || {}));
                            },
                            before: function(a) {
                                r = a, g(t, s, function() {
                                    r = j, a();
                                });
                            },
                            after: function(a) {
                                u = a, g(w, v, function() {
                                    u = j, a();
                                });
                            },
                            cancel: function() {
                                s && (k(s, function(a) {
                                    (a || j)(!0);
                                }), r(!0)), v && (k(v, function(a) {
                                    (a || j)(!0);
                                }), u(!0));
                            }
                        };
                    }
                }
            }
            function F(a, c, d, e, f, g, h, i) {
                function l(b) {
                    var e = "$animate:" + b;
                    w && w[e] && w[e].length > 0 && v(function() {
                        d.triggerHandler(e, {
                            event: a,
                            className: c
                        });
                    });
                }
                function m() {
                    l("before");
                }
                function n() {
                    l("after");
                }
                function o() {
                    l("close"), i();
                }
                function p() {
                    p.hasBeenRun || (p.hasBeenRun = !0, g());
                }
                function r() {
                    if (!r.hasBeenRun) {
                        u && u.applyStyles(), r.hasBeenRun = !0, h && h.tempClasses && k(h.tempClasses, function(a) {
                            d.removeClass(a);
                        });
                        var b = d.data(q);
                        b && (u && u.isClassBased ? H(d, c) : (v(function() {
                            var b = d.data(q) || {};
                            G == b.index && H(d, c, a);
                        }), d.data(q, b))), o();
                    }
                }
                var t = j, u = E(d, a, c, h);
                if (!u) return p(), m(), n(), r(), t;
                a = u.event, c = u.className;
                var w = b.element._data(u.node);
                if (w = w && w.events, e || (e = f ? f.parent() : d.parent()), I(d, e)) return p(), 
                m(), n(), r(), t;
                var x = d.data(q) || {}, y = x.active || {}, z = x.totalActive || 0, A = x.last, B = !1;
                if (z > 0) {
                    var C = [];
                    if (u.isClassBased) {
                        if ("setClass" == A.event) C.push(A), H(d, c); else if (y[c]) {
                            var D = y[c];
                            D.event == a ? B = !0 : (C.push(D), H(d, c));
                        }
                    } else if ("leave" == a && y["ng-leave"]) B = !0; else {
                        for (var F in y) C.push(y[F]);
                        x = {}, H(d, !0);
                    }
                    C.length > 0 && k(C, function(a) {
                        a.cancel();
                    });
                }
                if (!u.isClassBased || u.isSetClassOperation || "animate" == a || B || (B = "addClass" == a == d.hasClass(c)), 
                B) return p(), m(), n(), o(), t;
                y = x.active || {}, z = x.totalActive || 0, "leave" == a && d.one("$destroy", function() {
                    var a = b.element(this), c = a.data(q);
                    if (c) {
                        var d = c.active["ng-leave"];
                        d && (d.cancel(), H(a, "ng-leave"));
                    }
                }), d.addClass(s), h && h.tempClasses && k(h.tempClasses, function(a) {
                    d.addClass(a);
                });
                var G = K++;
                return z++, y[c] = u, d.data(q, {
                    last: u,
                    active: y,
                    index: G,
                    totalActive: z
                }), m(), u.before(function(b) {
                    var e = d.data(q);
                    b = b || !e || !e.active[c] || u.isClassBased && e.active[c].event != a, p(), b === !0 ? r() : (n(), 
                    u.after(r));
                }), u.cancel;
            }
            function G(a) {
                var c = f(a);
                if (c) {
                    var d = b.isFunction(c.getElementsByClassName) ? c.getElementsByClassName(s) : c.querySelectorAll("." + s);
                    k(d, function(a) {
                        a = b.element(a);
                        var c = a.data(q);
                        c && c.active && k(c.active, function(a) {
                            a.cancel();
                        });
                    });
                }
            }
            function H(a, b) {
                if (i(a, u)) t.disabled || (t.running = !1, t.structural = !1); else if (b) {
                    var c = a.data(q) || {}, d = b === !0;
                    !d && c.active && c.active[b] && (c.totalActive--, delete c.active[b]), (d || !c.totalActive) && (a.removeClass(s), 
                    a.removeData(q));
                }
            }
            function I(a, c) {
                if (t.disabled) return !0;
                if (i(a, u)) return t.running;
                var d, e, f;
                do {
                    if (0 === c.length) break;
                    var g = i(c, u), h = g ? t : c.data(q) || {};
                    if (h.disabled) return !0;
                    if (g && (f = !0), d !== !1) {
                        var j = c.data(r);
                        b.isDefined(j) && (d = j);
                    }
                    e = e || h.running || h.last && !h.last.isClassBased;
                } while (c = c.parent());
                return !f || !d && e;
            }
            u.data(q, t);
            var J = w.$watch(function() {
                return y.totalPendingRequests;
            }, function(a) {
                0 === a && (J(), w.$$postDigest(function() {
                    w.$$postDigest(function() {
                        t.running = !1;
                    });
                }));
            }), K = 0, L = e.classNameFilter(), M = L ? function(a) {
                return L.test(a);
            } : function() {
                return !0;
            };
            return {
                animate: function(a, b, c, d, e) {
                    return d = d || "ng-inline-animate", e = B(e) || {}, e.from = c ? b : null, e.to = c ? c : b, 
                    A(function(b) {
                        return F("animate", d, h(a), null, null, j, e, b);
                    });
                },
                enter: function(c, d, e, f) {
                    return f = B(f), c = b.element(c), d = g(d), e = g(e), z(c, !0), a.enter(c, d, e), 
                    A(function(a) {
                        return F("enter", "ng-enter", h(c), d, e, j, f, a);
                    });
                },
                leave: function(c, d) {
                    return d = B(d), c = b.element(c), G(c), z(c, !0), A(function(b) {
                        return F("leave", "ng-leave", h(c), null, null, function() {
                            a.leave(c);
                        }, d, b);
                    });
                },
                move: function(c, d, e, f) {
                    return f = B(f), c = b.element(c), d = g(d), e = g(e), G(c), z(c, !0), a.move(c, d, e), 
                    A(function(a) {
                        return F("move", "ng-move", h(c), d, e, j, f, a);
                    });
                },
                addClass: function(a, b, c) {
                    return this.setClass(a, b, [], c);
                },
                removeClass: function(a, b, c) {
                    return this.setClass(a, [], b, c);
                },
                setClass: function(c, d, e, g) {
                    g = B(g);
                    var i = "$$animateClasses";
                    if (c = b.element(c), c = h(c), z(c)) return a.$$setClassImmediately(c, d, e, g);
                    var j, l = c.data(i), n = !!l;
                    return l || (l = {}, l.classes = {}), j = l.classes, d = m(d) ? d : d.split(" "), 
                    k(d, function(a) {
                        a && a.length && (j[a] = !0);
                    }), e = m(e) ? e : e.split(" "), k(e, function(a) {
                        a && a.length && (j[a] = !1);
                    }), n ? (g && l.options && (l.options = b.extend(l.options || {}, g)), l.promise) : (c.data(i, l = {
                        classes: j,
                        options: g
                    }), l.promise = A(function(b) {
                        var d = c.parent(), e = f(c), g = e.parentNode;
                        if (!g || g.$$NG_REMOVED || e.$$NG_REMOVED) return void b();
                        var h = c.data(i);
                        c.removeData(i);
                        var j = c.data(q) || {}, k = C(c, h, j.active);
                        return k ? F("setClass", k, c, d, null, function() {
                            k[0] && a.$$addClassImmediately(c, k[0]), k[1] && a.$$removeClassImmediately(c, k[1]);
                        }, h.options, b) : b();
                    }));
                },
                cancel: function(a) {
                    a.$$cancelFn();
                },
                enabled: function(a, b) {
                    switch (arguments.length) {
                      case 2:
                        if (a) H(b); else {
                            var c = b.data(q) || {};
                            c.disabled = !0, b.data(q, c);
                        }
                        break;

                      case 1:
                        t.disabled = !a;
                        break;

                      default:
                        a = !t.disabled;
                    }
                    return !!a;
                }
            };
        } ]), e.register("", [ "$window", "$sniffer", "$timeout", "$$animateReflow", function(d, e, g, h) {
            function i() {
                I || (I = h(function() {
                    V = [], I = null, T = {};
                }));
            }
            function l(a, b) {
                I && I(), V.push(b), I = h(function() {
                    k(V, function(a) {
                        a();
                    }), V = [], I = null, T = {};
                });
            }
            function o(a, c) {
                var d = f(a);
                a = b.element(d), Y.push(a);
                var e = Date.now() + c;
                X >= e || (g.cancel(W), X = e, W = g(function() {
                    q(Y), Y = [];
                }, c, !1));
            }
            function q(a) {
                k(a, function(a) {
                    var b = a.data(P);
                    b && k(b.closeAnimationFns, function(a) {
                        a();
                    });
                });
            }
            function r(a, b) {
                var c = b ? T[b] : null;
                if (!c) {
                    var e = 0, f = 0, g = 0, h = 0;
                    k(a, function(a) {
                        if (a.nodeType == p) {
                            var b = d.getComputedStyle(a) || {}, c = b[D + J];
                            e = Math.max(s(c), e);
                            var i = b[D + L];
                            f = Math.max(s(i), f);
                            {
                                b[F + L];
                            }
                            h = Math.max(s(b[F + L]), h);
                            var j = s(b[F + J]);
                            j > 0 && (j *= parseInt(b[F + M], 10) || 1), g = Math.max(j, g);
                        }
                    }), c = {
                        total: 0,
                        transitionDelay: f,
                        transitionDuration: e,
                        animationDelay: h,
                        animationDuration: g
                    }, b && (T[b] = c);
                }
                return c;
            }
            function s(a) {
                var b = 0, c = n(a) ? a.split(/\s*,\s*/) : [];
                return k(c, function(a) {
                    b = Math.max(parseFloat(a) || 0, b);
                }), b;
            }
            function t(a) {
                var b = a.parent(), c = b.data(O);
                return c || (b.data(O, ++U), c = U), c + "-" + f(a).getAttribute("class");
            }
            function u(a, b, c, d) {
                var e = [ "ng-enter", "ng-leave", "ng-move" ].indexOf(c) >= 0, g = t(b), h = g + " " + c, i = T[h] ? ++T[h].total : 0, j = {};
                if (i > 0) {
                    var k = c + "-stagger", l = g + " " + k, m = !T[l];
                    m && b.addClass(k), j = r(b, l), m && b.removeClass(k);
                }
                b.addClass(c);
                var n = b.data(P) || {}, o = r(b, h), p = o.transitionDuration, q = o.animationDuration;
                if (e && 0 === p && 0 === q) return b.removeClass(c), !1;
                var s = d || e && p > 0, u = q > 0 && j.animationDelay > 0 && 0 === j.animationDuration, v = n.closeAnimationFns || [];
                b.data(P, {
                    stagger: j,
                    cacheKey: h,
                    running: n.running || 0,
                    itemIndex: i,
                    blockTransition: s,
                    closeAnimationFns: v
                });
                var y = f(b);
                return s && (w(y, !0), d && b.css(d)), u && x(y, !0), !0;
            }
            function v(a, b, c, d, e) {
                function h() {
                    b.off(L, i), b.removeClass(m), b.removeClass(n), J && g.cancel(J), B(b, c);
                    var a = f(b);
                    for (var d in q) a.style.removeProperty(q[d]);
                }
                function i(a) {
                    a.stopPropagation();
                    var b = a.originalEvent || a, c = b.$manualTimeStamp || b.timeStamp || Date.now(), e = parseFloat(b.elapsedTime.toFixed(Q));
                    Math.max(c - K, 0) >= F && e >= C && d();
                }
                var j = f(b), l = b.data(P);
                if (-1 == j.getAttribute("class").indexOf(c) || !l) return void d();
                var m = "", n = "";
                k(c.split(" "), function(a, b) {
                    var c = (b > 0 ? " " : "") + a;
                    m += c + "-active", n += c + "-pending";
                });
                var p = "", q = [], s = l.itemIndex, t = l.stagger, u = 0;
                if (s > 0) {
                    var v = 0;
                    t.transitionDelay > 0 && 0 === t.transitionDuration && (v = t.transitionDelay * s);
                    var y = 0;
                    t.animationDelay > 0 && 0 === t.animationDuration && (y = t.animationDelay * s, 
                    q.push(H + "animation-play-state")), u = Math.round(100 * Math.max(v, y)) / 100;
                }
                u || (b.addClass(m), l.blockTransition && w(j, !1));
                var z = l.cacheKey + " " + m, A = r(b, z), C = Math.max(A.transitionDuration, A.animationDuration);
                if (0 === C) return b.removeClass(m), B(b, c), void d();
                !u && e && (A.transitionDuration || (b.css("transition", A.animationDuration + "s linear all"), 
                q.push("transition")), b.css(e));
                var D = Math.max(A.transitionDelay, A.animationDelay), F = D * S;
                if (q.length > 0) {
                    var I = j.getAttribute("style") || "";
                    ";" !== I.charAt(I.length - 1) && (I += ";"), j.setAttribute("style", I + " " + p);
                }
                var J, K = Date.now(), L = G + " " + E, M = (D + C) * R, N = (u + M) * S;
                return u > 0 && (b.addClass(n), J = g(function() {
                    J = null, A.transitionDuration > 0 && w(j, !1), A.animationDuration > 0 && x(j, !1), 
                    b.addClass(m), b.removeClass(n), e && (0 === A.transitionDuration && b.css("transition", A.animationDuration + "s linear all"), 
                    b.css(e), q.push("transition"));
                }, u * S, !1)), b.on(L, i), l.closeAnimationFns.push(function() {
                    h(), d();
                }), l.running++, o(b, N), h;
            }
            function w(a, b) {
                a.style[D + K] = b ? "none" : "";
            }
            function x(a, b) {
                a.style[F + N] = b ? "paused" : "";
            }
            function y(a, b, c, d) {
                return u(a, b, c, d) ? function(a) {
                    a && B(b, c);
                } : void 0;
            }
            function z(a, b, c, d, e) {
                return b.data(P) ? v(a, b, c, d, e) : (B(b, c), void d());
            }
            function A(a, b, c, d, e) {
                var f = y(a, b, c, e.from);
                if (!f) return i(), void d();
                var g = f;
                return l(b, function() {
                    g = z(a, b, c, d, e.to);
                }), function(a) {
                    (g || j)(a);
                };
            }
            function B(a, b) {
                a.removeClass(b);
                var c = a.data(P);
                c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(P));
            }
            function C(a, b) {
                var c = "";
                return a = m(a) ? a : a.split(/\s+/), k(a, function(a, d) {
                    a && a.length > 0 && (c += (d > 0 ? " " : "") + a + b);
                }), c;
            }
            var D, E, F, G, H = "";
            a.ontransitionend === c && a.onwebkittransitionend !== c ? (H = "-webkit-", D = "WebkitTransition", 
            E = "webkitTransitionEnd transitionend") : (D = "transition", E = "transitionend"), 
            a.onanimationend === c && a.onwebkitanimationend !== c ? (H = "-webkit-", F = "WebkitAnimation", 
            G = "webkitAnimationEnd animationend") : (F = "animation", G = "animationend");
            var I, J = "Duration", K = "Property", L = "Delay", M = "IterationCount", N = "PlayState", O = "$$ngAnimateKey", P = "$$ngAnimateCSS3Data", Q = 3, R = 1.5, S = 1e3, T = {}, U = 0, V = [], W = null, X = 0, Y = [];
            return {
                animate: function(a, b, c, d, e, f) {
                    return f = f || {}, f.from = c, f.to = d, A("animate", a, b, e, f);
                },
                enter: function(a, b, c) {
                    return c = c || {}, A("enter", a, "ng-enter", b, c);
                },
                leave: function(a, b, c) {
                    return c = c || {}, A("leave", a, "ng-leave", b, c);
                },
                move: function(a, b, c) {
                    return c = c || {}, A("move", a, "ng-move", b, c);
                },
                beforeSetClass: function(a, b, c, d, e) {
                    e = e || {};
                    var f = C(c, "-remove") + " " + C(b, "-add"), g = y("setClass", a, f, e.from);
                    return g ? (l(a, d), g) : (i(), void d());
                },
                beforeAddClass: function(a, b, c, d) {
                    d = d || {};
                    var e = y("addClass", a, C(b, "-add"), d.from);
                    return e ? (l(a, c), e) : (i(), void c());
                },
                beforeRemoveClass: function(a, b, c, d) {
                    d = d || {};
                    var e = y("removeClass", a, C(b, "-remove"), d.from);
                    return e ? (l(a, c), e) : (i(), void c());
                },
                setClass: function(a, b, c, d, e) {
                    e = e || {}, c = C(c, "-remove"), b = C(b, "-add");
                    var f = c + " " + b;
                    return z("setClass", a, f, d, e.to);
                },
                addClass: function(a, b, c, d) {
                    return d = d || {}, z("addClass", a, C(b, "-add"), c, d.to);
                },
                removeClass: function(a, b, c, d) {
                    return d = d || {}, z("removeClass", a, C(b, "-remove"), c, d.to);
                }
            };
        } ]);
    } ]);
}(window, window.angular), function(a) {
    "function" == typeof define && define.amd ? define("pnotify", [ "jquery" ], a) : a(jQuery);
}(function(a) {
    var b, c, d = {
        dir1: "down",
        dir2: "left",
        push: "bottom",
        spacing1: 25,
        spacing2: 25,
        context: a("body")
    }, e = a(window), f = function() {
        c = a("body"), PNotify.prototype.options.stack.context = c, e = a(window), e.bind("resize", function() {
            b && clearTimeout(b), b = setTimeout(function() {
                PNotify.positionAll(!0);
            }, 10);
        });
    };
    return PNotify = function(a) {
        this.parseOptions(a), this.init();
    }, a.extend(PNotify.prototype, {
        version: "2.0.1",
        options: {
            title: !1,
            title_escape: !1,
            text: !1,
            text_escape: !1,
            styling: "bootstrap3",
            addclass: "",
            cornerclass: "",
            auto_display: !0,
            width: "300px",
            min_height: "16px",
            type: "notice",
            icon: !0,
            opacity: 1,
            animation: "fade",
            animate_speed: "slow",
            position_animate_speed: 500,
            shadow: !0,
            hide: !0,
            delay: 8e3,
            mouse_reset: !0,
            remove: !0,
            insert_brs: !0,
            destroy: !0,
            stack: d
        },
        modules: {},
        runModules: function(a, b) {
            var c;
            for (var d in this.modules) c = "object" == typeof b && d in b ? b[d] : b, "function" == typeof this.modules[d][a] && this.modules[d][a](this, "object" == typeof this.options[d] ? this.options[d] : {}, c);
        },
        state: "initializing",
        timer: null,
        styles: null,
        elem: null,
        container: null,
        title_container: null,
        text_container: null,
        animating: !1,
        timerHide: !1,
        init: function() {
            var b = this;
            return this.modules = {}, a.extend(!0, this.modules, PNotify.prototype.modules), 
            this.styles = "object" == typeof this.options.styling ? this.options.styling : PNotify.styling[this.options.styling], 
            this.elem = a("<div />", {
                "class": "ui-pnotify " + this.options.addclass,
                css: {
                    display: "none"
                },
                mouseenter: function() {
                    if (b.options.mouse_reset && "out" === b.animating) {
                        if (!b.timerHide) return;
                        b.cancelRemove();
                    }
                    b.options.hide && b.options.mouse_reset && b.cancelRemove();
                },
                mouseleave: function() {
                    b.options.hide && b.options.mouse_reset && b.queueRemove(), PNotify.positionAll();
                }
            }), this.container = a("<div />", {
                "class": this.styles.container + " ui-pnotify-container " + ("error" === this.options.type ? this.styles.error : "info" === this.options.type ? this.styles.info : "success" === this.options.type ? this.styles.success : this.styles.notice)
            }).appendTo(this.elem), "" !== this.options.cornerclass && this.container.removeClass("ui-corner-all").addClass(this.options.cornerclass), 
            this.options.shadow && this.container.addClass("ui-pnotify-shadow"), this.options.icon !== !1 && a("<div />", {
                "class": "ui-pnotify-icon"
            }).append(a("<span />", {
                "class": this.options.icon === !0 ? "error" === this.options.type ? this.styles.error_icon : "info" === this.options.type ? this.styles.info_icon : "success" === this.options.type ? this.styles.success_icon : this.styles.notice_icon : this.options.icon
            })).prependTo(this.container), this.title_container = a("<h4 />", {
                "class": "ui-pnotify-title"
            }).appendTo(this.container), this.options.title === !1 ? this.title_container.hide() : this.options.title_escape ? this.title_container.text(this.options.title) : this.title_container.html(this.options.title), 
            this.text_container = a("<div />", {
                "class": "ui-pnotify-text"
            }).appendTo(this.container), this.options.text === !1 ? this.text_container.hide() : this.options.text_escape ? this.text_container.text(this.options.text) : this.text_container.html(this.options.insert_brs ? String(this.options.text).replace(/\n/g, "<br />") : this.options.text), 
            "string" == typeof this.options.width && this.elem.css("width", this.options.width), 
            "string" == typeof this.options.min_height && this.container.css("min-height", this.options.min_height), 
            PNotify.notices = "top" === this.options.stack.push ? a.merge([ this ], PNotify.notices) : a.merge(PNotify.notices, [ this ]), 
            "top" === this.options.stack.push && this.queuePosition(!1, 1), this.options.stack.animation = !1, 
            this.runModules("init"), this.options.auto_display && this.open(), this;
        },
        update: function(b) {
            var c = this.options;
            return this.parseOptions(c, b), this.options.cornerclass !== c.cornerclass && this.container.removeClass("ui-corner-all " + c.cornerclass).addClass(this.options.cornerclass), 
            this.options.shadow !== c.shadow && (this.options.shadow ? this.container.addClass("ui-pnotify-shadow") : this.container.removeClass("ui-pnotify-shadow")), 
            this.options.addclass === !1 ? this.elem.removeClass(c.addclass) : this.options.addclass !== c.addclass && this.elem.removeClass(c.addclass).addClass(this.options.addclass), 
            this.options.title === !1 ? this.title_container.slideUp("fast") : this.options.title !== c.title && (this.options.title_escape ? this.title_container.text(this.options.title) : this.title_container.html(this.options.title), 
            c.title === !1 && this.title_container.slideDown(200)), this.options.text === !1 ? this.text_container.slideUp("fast") : this.options.text !== c.text && (this.options.text_escape ? this.text_container.text(this.options.text) : this.text_container.html(this.options.insert_brs ? String(this.options.text).replace(/\n/g, "<br />") : this.options.text), 
            c.text === !1 && this.text_container.slideDown(200)), this.options.type !== c.type && this.container.removeClass(this.styles.error + " " + this.styles.notice + " " + this.styles.success + " " + this.styles.info).addClass("error" === this.options.type ? this.styles.error : "info" === this.options.type ? this.styles.info : "success" === this.options.type ? this.styles.success : this.styles.notice), 
            (this.options.icon !== c.icon || this.options.icon === !0 && this.options.type !== c.type) && (this.container.find("div.ui-pnotify-icon").remove(), 
            this.options.icon !== !1 && a("<div />", {
                "class": "ui-pnotify-icon"
            }).append(a("<span />", {
                "class": this.options.icon === !0 ? "error" === this.options.type ? this.styles.error_icon : "info" === this.options.type ? this.styles.info_icon : "success" === this.options.type ? this.styles.success_icon : this.styles.notice_icon : this.options.icon
            })).prependTo(this.container)), this.options.width !== c.width && this.elem.animate({
                width: this.options.width
            }), this.options.min_height !== c.min_height && this.container.animate({
                minHeight: this.options.min_height
            }), this.options.opacity !== c.opacity && this.elem.fadeTo(this.options.animate_speed, this.options.opacity), 
            this.options.hide ? c.hide || this.queueRemove() : this.cancelRemove(), this.queuePosition(!0), 
            this.runModules("update", c), this;
        },
        open: function() {
            this.state = "opening", this.runModules("beforeOpen");
            var a = this;
            return this.elem.parent().length || this.elem.appendTo(this.options.stack.context ? this.options.stack.context : c), 
            "top" !== this.options.stack.push && this.position(!0), "fade" === this.options.animation || "fade" === this.options.animation.effect_in ? this.elem.show().fadeTo(0, 0).hide() : 1 !== this.options.opacity && this.elem.show().fadeTo(0, this.options.opacity).hide(), 
            this.animateIn(function() {
                a.queuePosition(!0), a.options.hide && a.queueRemove(), a.state = "open", a.runModules("afterOpen");
            }), this;
        },
        remove: function(b) {
            this.state = "closing", this.timerHide = !!b, this.runModules("beforeClose");
            var c = this;
            return this.timer && (window.clearTimeout(this.timer), this.timer = null), this.animateOut(function() {
                if (c.state = "closed", c.runModules("afterClose"), c.queuePosition(!0), c.options.remove && c.elem.detach(), 
                c.runModules("beforeDestroy"), c.options.destroy && null !== PNotify.notices) {
                    var b = a.inArray(c, PNotify.notices);
                    -1 !== b && PNotify.notices.splice(b, 1);
                }
                c.runModules("afterDestroy");
            }), this;
        },
        get: function() {
            return this.elem;
        },
        parseOptions: function(b, c) {
            this.options = a.extend(!0, {}, PNotify.prototype.options), this.options.stack = PNotify.prototype.options.stack;
            var d, e = [ b, c ];
            for (var f in e) {
                if (d = e[f], "undefined" == typeof d) break;
                if ("object" != typeof d) this.options.text = d; else for (var g in d) this.modules[g] ? a.extend(!0, this.options[g], d[g]) : this.options[g] = d[g];
            }
        },
        animateIn: function(a) {
            this.animating = "in";
            var b;
            b = "undefined" != typeof this.options.animation.effect_in ? this.options.animation.effect_in : this.options.animation, 
            "none" === b ? (this.elem.show(), a()) : "show" === b ? this.elem.show(this.options.animate_speed, a) : "fade" === b ? this.elem.show().fadeTo(this.options.animate_speed, this.options.opacity, a) : "slide" === b ? this.elem.slideDown(this.options.animate_speed, a) : "function" == typeof b ? b("in", a, this.elem) : this.elem.show(b, "object" == typeof this.options.animation.options_in ? this.options.animation.options_in : {}, this.options.animate_speed, a), 
            this.elem.parent().hasClass("ui-effects-wrapper") && this.elem.parent().css({
                position: "fixed",
                overflow: "visible"
            }), "slide" !== b && this.elem.css("overflow", "visible"), this.container.css("overflow", "hidden");
        },
        animateOut: function(a) {
            this.animating = "out";
            var b;
            b = "undefined" != typeof this.options.animation.effect_out ? this.options.animation.effect_out : this.options.animation, 
            "none" === b ? (this.elem.hide(), a()) : "show" === b ? this.elem.hide(this.options.animate_speed, a) : "fade" === b ? this.elem.fadeOut(this.options.animate_speed, a) : "slide" === b ? this.elem.slideUp(this.options.animate_speed, a) : "function" == typeof b ? b("out", a, this.elem) : this.elem.hide(b, "object" == typeof this.options.animation.options_out ? this.options.animation.options_out : {}, this.options.animate_speed, a), 
            this.elem.parent().hasClass("ui-effects-wrapper") && this.elem.parent().css({
                position: "fixed",
                overflow: "visible"
            }), "slide" !== b && this.elem.css("overflow", "visible"), this.container.css("overflow", "hidden");
        },
        position: function(a) {
            var b = this.options.stack, d = this.elem;
            if (d.parent().hasClass("ui-effects-wrapper") && (d = this.elem.css({
                left: "0",
                top: "0",
                right: "0",
                bottom: "0"
            }).parent()), "undefined" == typeof b.context && (b.context = c), b) {
                "number" != typeof b.nextpos1 && (b.nextpos1 = b.firstpos1), "number" != typeof b.nextpos2 && (b.nextpos2 = b.firstpos2), 
                "number" != typeof b.addpos2 && (b.addpos2 = 0);
                var f = "none" === d.css("display");
                if (!f || a) {
                    var g, h, i, j = {};
                    switch (b.dir1) {
                      case "down":
                        i = "top";
                        break;

                      case "up":
                        i = "bottom";
                        break;

                      case "left":
                        i = "right";
                        break;

                      case "right":
                        i = "left";
                    }
                    g = parseInt(d.css(i).replace(/(?:\..*|[^0-9.])/g, "")), isNaN(g) && (g = 0), "undefined" != typeof b.firstpos1 || f || (b.firstpos1 = g, 
                    b.nextpos1 = b.firstpos1);
                    var k;
                    switch (b.dir2) {
                      case "down":
                        k = "top";
                        break;

                      case "up":
                        k = "bottom";
                        break;

                      case "left":
                        k = "right";
                        break;

                      case "right":
                        k = "left";
                    }
                    if (h = parseInt(d.css(k).replace(/(?:\..*|[^0-9.])/g, "")), isNaN(h) && (h = 0), 
                    "undefined" != typeof b.firstpos2 || f || (b.firstpos2 = h, b.nextpos2 = b.firstpos2), 
                    ("down" === b.dir1 && b.nextpos1 + d.height() > (b.context.is(c) ? e.height() : b.context.prop("scrollHeight")) || "up" === b.dir1 && b.nextpos1 + d.height() > (b.context.is(c) ? e.height() : b.context.prop("scrollHeight")) || "left" === b.dir1 && b.nextpos1 + d.width() > (b.context.is(c) ? e.width() : b.context.prop("scrollWidth")) || "right" === b.dir1 && b.nextpos1 + d.width() > (b.context.is(c) ? e.width() : b.context.prop("scrollWidth"))) && (b.nextpos1 = b.firstpos1, 
                    b.nextpos2 += b.addpos2 + ("undefined" == typeof b.spacing2 ? 25 : b.spacing2), 
                    b.addpos2 = 0), b.animation && b.nextpos2 < h) switch (b.dir2) {
                      case "down":
                        j.top = b.nextpos2 + "px";
                        break;

                      case "up":
                        j.bottom = b.nextpos2 + "px";
                        break;

                      case "left":
                        j.right = b.nextpos2 + "px";
                        break;

                      case "right":
                        j.left = b.nextpos2 + "px";
                    } else "number" == typeof b.nextpos2 && d.css(k, b.nextpos2 + "px");
                    switch (b.dir2) {
                      case "down":
                      case "up":
                        d.outerHeight(!0) > b.addpos2 && (b.addpos2 = d.height());
                        break;

                      case "left":
                      case "right":
                        d.outerWidth(!0) > b.addpos2 && (b.addpos2 = d.width());
                    }
                    if ("number" == typeof b.nextpos1) if (b.animation && (g > b.nextpos1 || j.top || j.bottom || j.right || j.left)) switch (b.dir1) {
                      case "down":
                        j.top = b.nextpos1 + "px";
                        break;

                      case "up":
                        j.bottom = b.nextpos1 + "px";
                        break;

                      case "left":
                        j.right = b.nextpos1 + "px";
                        break;

                      case "right":
                        j.left = b.nextpos1 + "px";
                    } else d.css(i, b.nextpos1 + "px");
                    switch ((j.top || j.bottom || j.right || j.left) && d.animate(j, {
                        duration: this.options.position_animate_speed,
                        queue: !1
                    }), b.dir1) {
                      case "down":
                      case "up":
                        b.nextpos1 += d.height() + ("undefined" == typeof b.spacing1 ? 25 : b.spacing1);
                        break;

                      case "left":
                      case "right":
                        b.nextpos1 += d.width() + ("undefined" == typeof b.spacing1 ? 25 : b.spacing1);
                    }
                }
                return this;
            }
        },
        queuePosition: function(a, c) {
            return b && clearTimeout(b), c || (c = 10), b = setTimeout(function() {
                PNotify.positionAll(a);
            }, c), this;
        },
        cancelRemove: function() {
            return this.timer && window.clearTimeout(this.timer), "closing" === this.state && (this.elem.stop(!0), 
            this.state = "open", this.animating = "in", this.elem.css("height", "auto").animate({
                width: this.options.width,
                opacity: this.options.opacity
            }, "fast")), this;
        },
        queueRemove: function() {
            var a = this;
            return this.cancelRemove(), this.timer = window.setTimeout(function() {
                a.remove(!0);
            }, isNaN(this.options.delay) ? 0 : this.options.delay), this;
        }
    }), a.extend(PNotify, {
        notices: [],
        removeAll: function() {
            a.each(PNotify.notices, function() {
                this.remove && this.remove();
            });
        },
        positionAll: function(c) {
            b && clearTimeout(b), b = null, a.each(PNotify.notices, function() {
                var a = this.options.stack;
                a && (a.nextpos1 = a.firstpos1, a.nextpos2 = a.firstpos2, a.addpos2 = 0, a.animation = c);
            }), a.each(PNotify.notices, function() {
                this.position();
            });
        },
        styling: {
            jqueryui: {
                container: "ui-widget ui-widget-content ui-corner-all",
                notice: "ui-state-highlight",
                notice_icon: "ui-icon ui-icon-info",
                info: "",
                info_icon: "ui-icon ui-icon-info",
                success: "ui-state-default",
                success_icon: "ui-icon ui-icon-circle-check",
                error: "ui-state-error",
                error_icon: "ui-icon ui-icon-alert"
            },
            bootstrap2: {
                container: "alert",
                notice: "",
                notice_icon: "icon-exclamation-sign",
                info: "alert-info",
                info_icon: "icon-info-sign",
                success: "alert-success",
                success_icon: "icon-ok-sign",
                error: "alert-error",
                error_icon: "icon-warning-sign"
            },
            bootstrap3: {
                container: "alert",
                notice: "alert-warning",
                notice_icon: "glyphicon glyphicon-exclamation-sign",
                info: "alert-info",
                info_icon: "glyphicon glyphicon-info-sign",
                success: "alert-success",
                success_icon: "glyphicon glyphicon-ok-sign",
                error: "alert-danger",
                error_icon: "glyphicon glyphicon-warning-sign"
            }
        }
    }), PNotify.styling.fontawesome = a.extend({}, PNotify.styling.bootstrap3), a.extend(PNotify.styling.fontawesome, {
        notice_icon: "fa fa-exclamation-circle",
        info_icon: "fa fa-info",
        success_icon: "fa fa-check",
        error_icon: "fa fa-warning"
    }), document.body ? f() : a(f), PNotify;
}), function(a) {
    "function" == typeof define && define.amd ? define("pnotify.buttons", [ "jquery", "pnotify" ], a) : a(jQuery, PNotify);
}(function(a, b) {
    b.prototype.options.buttons = {
        closer: !0,
        closer_hover: !0,
        sticker: !0,
        sticker_hover: !0,
        labels: {
            close: "Close",
            stick: "Stick"
        }
    }, b.prototype.modules.buttons = {
        myOptions: null,
        closer: null,
        sticker: null,
        init: function(b, c) {
            var d = this;
            this.myOptions = c, b.elem.on({
                mouseenter: function() {
                    !d.myOptions.sticker || b.options.nonblock && b.options.nonblock.nonblock || d.sticker.trigger("pnotify_icon").css("visibility", "visible"), 
                    !d.myOptions.closer || b.options.nonblock && b.options.nonblock.nonblock || d.closer.css("visibility", "visible");
                },
                mouseleave: function() {
                    d.myOptions.sticker_hover && d.sticker.css("visibility", "hidden"), d.myOptions.closer_hover && d.closer.css("visibility", "hidden");
                }
            }), this.sticker = a("<div />", {
                "class": "ui-pnotify-sticker",
                css: {
                    cursor: "pointer",
                    visibility: c.sticker_hover ? "hidden" : "visible"
                },
                click: function() {
                    b.options.hide = !b.options.hide, b.options.hide ? b.queueRemove() : b.cancelRemove(), 
                    a(this).trigger("pnotify_icon");
                }
            }).bind("pnotify_icon", function() {
                a(this).children().removeClass(b.styles.pin_up + " " + b.styles.pin_down).addClass(b.options.hide ? b.styles.pin_up : b.styles.pin_down);
            }).append(a("<span />", {
                "class": b.styles.pin_up,
                title: c.labels.stick
            })).prependTo(b.container), (!c.sticker || b.options.nonblock && b.options.nonblock.nonblock) && this.sticker.css("display", "none"), 
            this.closer = a("<div />", {
                "class": "ui-pnotify-closer",
                css: {
                    cursor: "pointer",
                    visibility: c.closer_hover ? "hidden" : "visible"
                },
                click: function() {
                    b.remove(!1), d.sticker.css("visibility", "hidden"), d.closer.css("visibility", "hidden");
                }
            }).append(a("<span />", {
                "class": b.styles.closer,
                title: c.labels.close
            })).prependTo(b.container), (!c.closer || b.options.nonblock && b.options.nonblock.nonblock) && this.closer.css("display", "none");
        },
        update: function(a, b) {
            this.myOptions = b, !b.closer || a.options.nonblock && a.options.nonblock.nonblock ? this.closer.css("display", "none") : b.closer && this.closer.css("display", "block"), 
            !b.sticker || a.options.nonblock && a.options.nonblock.nonblock ? this.sticker.css("display", "none") : b.sticker && this.sticker.css("display", "block"), 
            this.sticker.trigger("pnotify_icon"), b.sticker_hover ? this.sticker.css("visibility", "hidden") : a.options.nonblock && a.options.nonblock.nonblock || this.sticker.css("visibility", "visible"), 
            b.closer_hover ? this.closer.css("visibility", "hidden") : a.options.nonblock && a.options.nonblock.nonblock || this.closer.css("visibility", "visible");
        }
    }, a.extend(b.styling.jqueryui, {
        closer: "ui-icon ui-icon-close",
        pin_up: "ui-icon ui-icon-pin-w",
        pin_down: "ui-icon ui-icon-pin-s"
    }), a.extend(b.styling.bootstrap2, {
        closer: "icon-remove",
        pin_up: "icon-pause",
        pin_down: "icon-play"
    }), a.extend(b.styling.bootstrap3, {
        closer: "glyphicon glyphicon-remove",
        pin_up: "glyphicon glyphicon-pause",
        pin_down: "glyphicon glyphicon-play"
    }), a.extend(b.styling.fontawesome, {
        closer: "fa fa-times",
        pin_up: "fa fa-pause",
        pin_down: "fa fa-play"
    });
}), function(a) {
    "function" == typeof define && define.amd ? define("pnotify.confirm", [ "jquery", "pnotify" ], a) : a(jQuery, PNotify);
}(function(a, b) {
    b.prototype.options.confirm = {
        confirm: !1,
        prompt: !1,
        prompt_class: "",
        prompt_default: "",
        prompt_multi_line: !1,
        align: "right",
        buttons: [ {
            text: "Ok",
            addClass: "",
            promptTrigger: !0,
            click: function(a, b) {
                a.remove(), a.get().trigger("pnotify.confirm", [ a, b ]);
            }
        }, {
            text: "Cancel",
            addClass: "",
            click: function(a) {
                a.remove(), a.get().trigger("pnotify.cancel", a);
            }
        } ]
    }, b.prototype.modules.confirm = {
        container: null,
        prompt: null,
        init: function(b, c) {
            this.container = a('<div style="margin-top:5px;clear:both;" />').css("text-align", c.align).appendTo(b.container), 
            c.confirm || c.prompt ? this.makeDialog(b, c) : this.container.hide();
        },
        update: function(a, b) {
            b.confirm ? (this.makeDialog(a, b), this.container.show()) : this.container.hide().empty();
        },
        afterOpen: function(a, b) {
            b.prompt && this.prompt.focus();
        },
        makeDialog: function(b, c) {
            var d, e, f = !1, g = this;
            this.container.empty(), c.prompt && (this.prompt = a("<" + (c.prompt_multi_line ? 'textarea rows="5"' : 'input type="text"') + ' style="margin-bottom:5px;clear:both;" />').addClass(b.styles.input + " " + c.prompt_class).val(c.prompt_default).appendTo(this.container));
            for (var h in c.buttons) d = c.buttons[h], f ? this.container.append(" ") : f = !0, 
            e = a('<button type="button" />').addClass(b.styles.btn + " " + d.addClass).text(d.text).appendTo(this.container).on("click", function(a) {
                return function() {
                    "function" == typeof a.click && a.click(b, c.prompt ? g.prompt.val() : null);
                };
            }(d)), c.prompt && !c.prompt_multi_line && d.promptTrigger && this.prompt.keypress(function(a) {
                return function(b) {
                    13 == b.keyCode && a.click();
                };
            }(e)), b.styles.text && e.wrapInner('<span class="' + b.styles.text + '"></span>'), 
            b.styles.btnhover && e.hover(function(a) {
                return function() {
                    a.addClass(b.styles.btnhover);
                };
            }(e), function(a) {
                return function() {
                    a.removeClass(b.styles.btnhover);
                };
            }(e)), b.styles.btnactive && e.on("mousedown", function(a) {
                return function() {
                    a.addClass(b.styles.btnactive);
                };
            }(e)).on("mouseup", function(a) {
                return function() {
                    a.removeClass(b.styles.btnactive);
                };
            }(e)), b.styles.btnfocus && e.on("focus", function(a) {
                return function() {
                    a.addClass(b.styles.btnfocus);
                };
            }(e)).on("blur", function(a) {
                return function() {
                    a.removeClass(b.styles.btnfocus);
                };
            }(e));
        }
    }, a.extend(b.styling.jqueryui, {
        btn: "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only",
        btnhover: "ui-state-hover",
        btnactive: "ui-state-active",
        btnfocus: "ui-state-focus",
        input: "",
        text: "ui-button-text"
    }), a.extend(b.styling.bootstrap2, {
        btn: "btn",
        input: ""
    }), a.extend(b.styling.bootstrap3, {
        btn: "btn btn-default",
        input: "form-control"
    }), a.extend(b.styling.fontawesome, {
        btn: "btn btn-default",
        input: "form-control"
    });
}), function(a) {
    "function" == typeof define && define.amd ? define("pnotify.nonblock", [ "jquery", "pnotify" ], a) : a(jQuery, PNotify);
}(function(a, b) {
    var c, d = /^on/, e = /^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/, f = /^(focus|blur|select|change|reset)$|^key(press|down|up)$/, g = /^(scroll|resize|(un)?load|abort|error)$/, h = function(b, c) {
        var h;
        if (b = b.toLowerCase(), document.createEvent && this.dispatchEvent) {
            if (b = b.replace(d, ""), b.match(e) ? (a(this).offset(), h = document.createEvent("MouseEvents"), 
            h.initMouseEvent(b, c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget)) : b.match(f) ? (h = document.createEvent("UIEvents"), 
            h.initUIEvent(b, c.bubbles, c.cancelable, c.view, c.detail)) : b.match(g) && (h = document.createEvent("HTMLEvents"), 
            h.initEvent(b, c.bubbles, c.cancelable)), !h) return;
            this.dispatchEvent(h);
        } else b.match(d) || (b = "on" + b), h = document.createEventObject(c), this.fireEvent(b, h);
    }, i = function(b, d, e) {
        b.elem.css("display", "none");
        var f = document.elementFromPoint(d.clientX, d.clientY);
        b.elem.css("display", "block");
        var g = a(f), i = g.css("cursor");
        b.elem.css("cursor", "auto" !== i ? i : "default"), c && c.get(0) == f || (c && (h.call(c.get(0), "mouseleave", d.originalEvent), 
        h.call(c.get(0), "mouseout", d.originalEvent)), h.call(f, "mouseenter", d.originalEvent), 
        h.call(f, "mouseover", d.originalEvent)), h.call(f, e, d.originalEvent), c = g;
    };
    b.prototype.options.nonblock = {
        nonblock: !1,
        nonblock_opacity: .2
    }, b.prototype.modules.nonblock = {
        myOptions: null,
        init: function(a, b) {
            var d = this;
            this.myOptions = b, a.elem.on({
                mouseenter: function(b) {
                    d.myOptions.nonblock && b.stopPropagation(), d.myOptions.nonblock && a.elem.stop().animate({
                        opacity: d.myOptions.nonblock_opacity
                    }, "fast");
                },
                mouseleave: function(b) {
                    d.myOptions.nonblock && b.stopPropagation(), c = null, a.elem.css("cursor", "auto"), 
                    d.myOptions.nonblock && "out" !== a.animating && a.elem.stop().animate({
                        opacity: a.options.opacity
                    }, "fast");
                },
                mouseover: function(a) {
                    d.myOptions.nonblock && a.stopPropagation();
                },
                mouseout: function(a) {
                    d.myOptions.nonblock && a.stopPropagation();
                },
                mousemove: function(b) {
                    d.myOptions.nonblock && (b.stopPropagation(), i(a, b, "onmousemove"));
                },
                mousedown: function(b) {
                    d.myOptions.nonblock && (b.stopPropagation(), b.preventDefault(), i(a, b, "onmousedown"));
                },
                mouseup: function(b) {
                    d.myOptions.nonblock && (b.stopPropagation(), b.preventDefault(), i(a, b, "onmouseup"));
                },
                click: function(b) {
                    d.myOptions.nonblock && (b.stopPropagation(), i(a, b, "onclick"));
                },
                dblclick: function(b) {
                    d.myOptions.nonblock && (b.stopPropagation(), i(a, b, "ondblclick"));
                }
            });
        },
        update: function(a, b) {
            this.myOptions = b;
        }
    };
}), function(a) {
    "function" == typeof define && define.amd ? define("pnotify.desktop", [ "jquery", "pnotify" ], a) : a(jQuery, PNotify);
}(function(a, b) {
    var c, d = function(a, b) {
        return (d = "Notification" in window ? function(a, b) {
            return new Notification(a, b);
        } : "mozNotification" in navigator ? function(a, b) {
            return navigator.mozNotification.createNotification(a, b.body, b.icon).show();
        } : "webkitNotifications" in window ? function(a, b) {
            return window.webkitNotifications.createNotification(b.icon, a, b.body);
        } : function() {
            return null;
        })(a, b);
    };
    b.prototype.options.desktop = {
        desktop: !1,
        icon: null,
        tag: null
    }, b.prototype.modules.desktop = {
        tag: null,
        icon: null,
        genNotice: function(a, b) {
            this.icon = null === b.icon ? "http://sciactive.com/pnotify/includes/desktop/" + a.options.type + ".png" : b.icon === !1 ? null : b.icon, 
            (null === this.tag || null !== b.tag) && (this.tag = null === b.tag ? "PNotify-" + Math.round(1e6 * Math.random()) : b.tag), 
            a.desktop = d(a.options.title, {
                icon: this.icon,
                body: a.options.text,
                tag: this.tag
            }), "close" in a.desktop || (a.desktop.close = function() {
                a.desktop.cancel();
            }), a.desktop.onclick = function() {
                a.elem.trigger("click");
            }, a.desktop.onclose = function() {
                "closing" !== a.state && "closed" !== a.state && a.remove();
            };
        },
        init: function(a, d) {
            d.desktop && (c = b.desktop.checkPermission(), 0 == c && this.genNotice(a, d));
        },
        update: function(a, b) {
            0 == c && b.desktop && this.genNotice(a, b);
        },
        beforeOpen: function(a, b) {
            0 == c && b.desktop && a.elem.css({
                left: "-10000px",
                display: "none"
            });
        },
        afterOpen: function(a, b) {
            0 == c && b.desktop && (a.elem.css({
                left: "-10000px",
                display: "none"
            }), "show" in a.desktop && a.desktop.show());
        },
        beforeClose: function(a, b) {
            0 == c && b.desktop && a.elem.css({
                left: "-10000px",
                display: "none"
            });
        },
        afterClose: function(a, b) {
            0 == c && b.desktop && (a.elem.css({
                left: "-10000px",
                display: "none"
            }), a.desktop.close());
        }
    }, b.desktop = {
        permission: function() {
            "undefined" != typeof Notification && "requestPermission" in Notification ? Notification.requestPermission() : "webkitNotifications" in window && window.webkitNotifications.requestPermission();
        },
        checkPermission: function() {
            return "undefined" != typeof Notification && "permission" in Notification ? "granted" == Notification.permission ? 0 : 1 : "webkitNotifications" in window ? window.webkitNotifications.checkPermission() : 1;
        }
    }, c = b.desktop.checkPermission();
}), function(a) {
    "function" == typeof define && define.amd ? define("pnotify.history", [ "jquery", "pnotify" ], a) : a(jQuery, PNotify);
}(function(a, b) {
    var c, d;
    a(function() {
        a("body").on("pnotify.history-all", function() {
            a.each(b.notices, function() {
                this.modules.history.inHistory && (this.elem.is(":visible") ? this.options.hide && this.queueRemove() : this.open && this.open());
            });
        }).on("pnotify.history-last", function() {
            var a, c = "top" === b.prototype.options.stack.push, d = c ? 0 : -1;
            do {
                if (a = -1 === d ? b.notices.slice(d) : b.notices.slice(d, d + 1), !a[0]) return !1;
                d = c ? d + 1 : d - 1;
            } while (!a[0].modules.history.inHistory || a[0].elem.is(":visible"));
            a[0].open && a[0].open();
        });
    }), b.prototype.options.history = {
        history: !0,
        menu: !1,
        fixed: !0,
        maxonscreen: 1/0,
        labels: {
            redisplay: "Redisplay",
            all: "All",
            last: "Last"
        }
    }, b.prototype.modules.history = {
        inHistory: !1,
        init: function(b, e) {
            if (b.options.destroy = !1, this.inHistory = e.history, e.menu && "undefined" == typeof c) {
                c = a("<div />", {
                    "class": "ui-pnotify-history-container " + b.styles.hi_menu,
                    mouseleave: function() {
                        c.animate({
                            top: "-" + d + "px"
                        }, {
                            duration: 100,
                            queue: !1
                        });
                    }
                }).append(a("<div />", {
                    "class": "ui-pnotify-history-header",
                    text: e.labels.redisplay
                })).append(a("<button />", {
                    "class": "ui-pnotify-history-all " + b.styles.hi_btn,
                    text: e.labels.all,
                    mouseenter: function() {
                        a(this).addClass(b.styles.hi_btnhov);
                    },
                    mouseleave: function() {
                        a(this).removeClass(b.styles.hi_btnhov);
                    },
                    click: function() {
                        return a(this).trigger("pnotify.history-all"), !1;
                    }
                })).append(a("<button />", {
                    "class": "ui-pnotify-history-last " + b.styles.hi_btn,
                    text: e.labels.last,
                    mouseenter: function() {
                        a(this).addClass(b.styles.hi_btnhov);
                    },
                    mouseleave: function() {
                        a(this).removeClass(b.styles.hi_btnhov);
                    },
                    click: function() {
                        return a(this).trigger("pnotify.history-last"), !1;
                    }
                })).appendTo("body");
                var f = a("<span />", {
                    "class": "ui-pnotify-history-pulldown " + b.styles.hi_hnd,
                    mouseenter: function() {
                        c.animate({
                            top: "0"
                        }, {
                            duration: 100,
                            queue: !1
                        });
                    }
                }).appendTo(c);
                console.log(f.offset()), d = f.offset().top + 2, c.css({
                    top: "-" + d + "px"
                }), e.fixed && c.addClass("ui-pnotify-history-fixed");
            }
        },
        update: function(a, b) {
            this.inHistory = b.history, b.fixed && c ? c.addClass("ui-pnotify-history-fixed") : c && c.removeClass("ui-pnotify-history-fixed");
        },
        beforeOpen: function(c, d) {
            if (b.notices && b.notices.length > d.maxonscreen) {
                var e;
                e = "top" !== c.options.stack.push ? b.notices.slice(0, b.notices.length - d.maxonscreen) : b.notices.slice(d.maxonscreen, b.notices.length), 
                a.each(e, function() {
                    this.remove && this.remove();
                });
            }
        }
    }, a.extend(b.styling.jqueryui, {
        hi_menu: "ui-state-default ui-corner-bottom",
        hi_btn: "ui-state-default ui-corner-all",
        hi_btnhov: "ui-state-hover",
        hi_hnd: "ui-icon ui-icon-grip-dotted-horizontal"
    }), a.extend(b.styling.bootstrap2, {
        hi_menu: "well",
        hi_btn: "btn",
        hi_btnhov: "",
        hi_hnd: "icon-chevron-down"
    }), a.extend(b.styling.bootstrap3, {
        hi_menu: "well",
        hi_btn: "btn btn-default",
        hi_btnhov: "",
        hi_hnd: "glyphicon glyphicon-chevron-down"
    }), a.extend(b.styling.fontawesome, {
        hi_menu: "well",
        hi_btn: "btn btn-default",
        hi_btnhov: "",
        hi_hnd: "fa fa-chevron-down"
    });
}), function(a) {
    "function" == typeof define && define.amd ? define("pnotify.callbacks", [ "jquery", "pnotify" ], a) : a(jQuery, PNotify);
}(function(a, b) {
    var c = b.prototype.init, d = b.prototype.open, e = b.prototype.remove;
    b.prototype.init = function() {
        this.options.before_init && this.options.before_init(this.options), c.apply(this, arguments), 
        this.options.after_init && this.options.after_init(this);
    }, b.prototype.open = function() {
        var a;
        this.options.before_open && (a = this.options.before_open(this)), a !== !1 && (d.apply(this, arguments), 
        this.options.after_open && this.options.after_open(this));
    }, b.prototype.remove = function(a) {
        var b;
        this.options.before_close && (b = this.options.before_close(this, a)), b !== !1 && (e.apply(this, arguments), 
        this.options.after_close && this.options.after_close(this, a));
    };
}), function(a) {
    "function" == typeof define && define.amd ? define("pnotify.reference", [ "jquery", "pnotify" ], a) : a(jQuery, PNotify);
}(function(a, b) {
    b.prototype.options.reference = {
        putThing: !1,
        labels: {
            text: "Spin Around"
        }
    }, b.prototype.modules.reference = {
        thingElem: null,
        init: function(b, c) {
            var d = this;
            c.putThing && (this.thingElem = a('<button style="float:right;" class="btn btn-default" type="button" disabled><i class="' + b.styles.athing + '" />&nbsp;' + c.labels.text + "</button>").appendTo(b.container), 
            b.container.append('<div style="clear: right; line-height: 0;" />'), b.elem.on({
                mouseenter: function() {
                    d.thingElem.prop("disabled", !1);
                },
                mouseleave: function() {
                    d.thingElem.prop("disabled", !0);
                }
            }), this.thingElem.on("click", function() {
                var a = 0, c = setInterval(function() {
                    a += 10, 360 == a && (a = 0, clearInterval(c)), b.elem.css({
                        "-moz-transform": "rotate(" + a + "deg)",
                        "-webkit-transform": "rotate(" + a + "deg)",
                        "-o-transform": "rotate(" + a + "deg)",
                        "-ms-transform": "rotate(" + a + "deg)",
                        filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=" + a / 360 * 4 + ")"
                    });
                }, 20);
            }));
        },
        update: function(a, b) {
            b.putThing && this.thingElem ? this.thingElem.show() : !b.putThing && this.thingElem && this.thingElem.hide(), 
            this.thingElem && this.thingElem.find("i").attr("class", a.styles.athing);
        },
        beforeOpen: function() {},
        afterOpen: function() {},
        beforeClose: function() {},
        afterClose: function() {},
        beforeDestroy: function() {},
        afterDestroy: function() {}
    }, a.extend(b.styling.jqueryui, {
        athing: "ui-icon ui-icon-refresh"
    }), a.extend(b.styling.bootstrap2, {
        athing: "icon-refresh"
    }), a.extend(b.styling.bootstrap3, {
        athing: "glyphicon glyphicon-refresh"
    }), a.extend(b.styling.fontawesome, {
        athing: "fa fa-refresh"
    });
}), !function(a) {
    "use strict";
    var b = function(a, b) {
        this.init(a, b);
    }, c = null;
    b.prototype = {
        init: function(b, c) {
            this.$element = a(b);
            {
                var d = c && c.bootstrapMajorVersion ? c.bootstrapMajorVersion : a.fn.bootstrapPaginator.defaults.bootstrapMajorVersion;
                this.$element.attr("id");
            }
            if (2 === d && !this.$element.is("div")) throw "in Bootstrap version 2 the pagination must be a div element. Or if you are using Bootstrap pagination 3. Please specify it in bootstrapMajorVersion in the option";
            if (d > 2 && !this.$element.is("ul")) throw "in Bootstrap version 3 the pagination root item must be an ul element.";
            this.currentPage = 1, this.lastPage = 1, this.setOptions(c), this.initialized = !0;
        },
        setOptions: function(b) {
            this.options = a.extend({}, this.options || a.fn.bootstrapPaginator.defaults, b), 
            this.totalPages = parseInt(this.options.totalPages, 10), this.numberOfPages = parseInt(this.options.numberOfPages, 10), 
            b && "undefined" != typeof b.currentPage && this.setCurrentPage(b.currentPage), 
            this.listen(), this.render(), this.initialized || this.lastPage === this.currentPage || this.$element.trigger("page-changed", [ this.lastPage, this.currentPage ]);
        },
        listen: function() {
            this.$element.off("page-clicked"), this.$element.off("page-changed"), "function" == typeof this.options.onPageClicked && this.$element.bind("page-clicked", this.options.onPageClicked), 
            "function" == typeof this.options.onPageChanged && this.$element.on("page-changed", this.options.onPageChanged), 
            this.$element.bind("page-clicked", this.onPageClicked);
        },
        destroy: function() {
            this.$element.off("page-clicked"), this.$element.off("page-changed"), this.$element.removeData("bootstrapPaginator"), 
            this.$element.empty();
        },
        show: function(a) {
            this.setCurrentPage(a), this.render(), this.lastPage !== this.currentPage && this.$element.trigger("page-changed", [ this.lastPage, this.currentPage ]);
        },
        showNext: function() {
            var a = this.getPages();
            a.next && this.show(a.next);
        },
        showPrevious: function() {
            var a = this.getPages();
            a.prev && this.show(a.prev);
        },
        showFirst: function() {
            var a = this.getPages();
            a.first && this.show(a.first);
        },
        showLast: function() {
            var a = this.getPages();
            a.last && this.show(a.last);
        },
        onPageItemClicked: function(a) {
            var b = a.data.type, c = a.data.page;
            this.$element.trigger("page-clicked", [ a, b, c ]);
        },
        onPageClicked: function(b, c, d, e) {
            var f = a(b.currentTarget);
            switch (d) {
              case "first":
                f.bootstrapPaginator("showFirst");
                break;

              case "prev":
                f.bootstrapPaginator("showPrevious");
                break;

              case "next":
                f.bootstrapPaginator("showNext");
                break;

              case "last":
                f.bootstrapPaginator("showLast");
                break;

              case "page":
                f.bootstrapPaginator("show", e);
            }
        },
        render: function() {
            var b = this.getValueFromOption(this.options.containerClass, this.$element), c = this.options.size || "normal", d = this.options.alignment || "left", e = this.getPages(), f = 2 === this.options.bootstrapMajorVersion ? a("<ul></ul>") : this.$element, g = 2 === this.options.bootstrapMajorVersion ? this.getValueFromOption(this.options.listContainerClass, f) : null, h = null, i = null, j = null, k = null, l = null, m = 0;
            switch (this.$element.prop("class", ""), this.$element.addClass("pagination"), c.toLowerCase()) {
              case "large":
              case "small":
              case "mini":
                this.$element.addClass(a.fn.bootstrapPaginator.sizeArray[this.options.bootstrapMajorVersion][c.toLowerCase()]);
            }
            if (2 === this.options.bootstrapMajorVersion) switch (d.toLowerCase()) {
              case "center":
                this.$element.addClass("pagination-centered");
                break;

              case "right":
                this.$element.addClass("pagination-right");
            }
            for (this.$element.addClass(b), this.$element.empty(), 2 === this.options.bootstrapMajorVersion && (this.$element.append(f), 
            f.addClass(g)), this.pageRef = [], e.first && (h = this.buildPageItem("first", e.first), 
            h && f.append(h)), e.prev && (i = this.buildPageItem("prev", e.prev), i && f.append(i)), 
            m = 0; m < e.length; m += 1) l = this.buildPageItem("page", e[m]), l && f.append(l);
            e.next && (j = this.buildPageItem("next", e.next), j && f.append(j)), e.last && (k = this.buildPageItem("last", e.last), 
            k && f.append(k));
        },
        buildPageItem: function(b, c) {
            var d = a("<li></li>"), e = a("<a></a>"), f = "", g = "", h = this.options.itemContainerClass(b, c, this.currentPage), i = this.getValueFromOption(this.options.itemContentClass, b, c, this.currentPage), j = null;
            switch (b) {
              case "first":
                if (!this.getValueFromOption(this.options.shouldShowPage, b, c, this.currentPage)) return;
                f = this.options.itemTexts(b, c, this.currentPage), g = this.options.tooltipTitles(b, c, this.currentPage);
                break;

              case "last":
                if (!this.getValueFromOption(this.options.shouldShowPage, b, c, this.currentPage)) return;
                f = this.options.itemTexts(b, c, this.currentPage), g = this.options.tooltipTitles(b, c, this.currentPage);
                break;

              case "prev":
                if (!this.getValueFromOption(this.options.shouldShowPage, b, c, this.currentPage)) return;
                f = this.options.itemTexts(b, c, this.currentPage), g = this.options.tooltipTitles(b, c, this.currentPage);
                break;

              case "next":
                if (!this.getValueFromOption(this.options.shouldShowPage, b, c, this.currentPage)) return;
                f = this.options.itemTexts(b, c, this.currentPage), g = this.options.tooltipTitles(b, c, this.currentPage);
                break;

              case "page":
                if (!this.getValueFromOption(this.options.shouldShowPage, b, c, this.currentPage)) return;
                f = this.options.itemTexts(b, c, this.currentPage), g = this.options.tooltipTitles(b, c, this.currentPage);
            }
            return d.addClass(h).append(e), e.addClass(i).html(f).on("click", null, {
                type: b,
                page: c
            }, a.proxy(this.onPageItemClicked, this)), this.options.pageUrl && e.attr("href", this.getValueFromOption(this.options.pageUrl, b, c, this.currentPage)), 
            this.options.useBootstrapTooltip ? (j = a.extend({}, this.options.bootstrapTooltipOptions, {
                title: g
            }), e.tooltip(j)) : e.attr("title", g), d;
        },
        setCurrentPage: function(a) {
            if (a > this.totalPages || 1 > a) throw "Page out of range";
            this.lastPage = this.currentPage, this.currentPage = parseInt(a, 10);
        },
        getPages: function() {
            var a = this.totalPages, b = 0 === this.currentPage % this.numberOfPages ? (parseInt(this.currentPage / this.numberOfPages, 10) - 1) * this.numberOfPages + 1 : parseInt(this.currentPage / this.numberOfPages, 10) * this.numberOfPages + 1, c = [], d = 0, e = 0;
            for (b = 1 > b ? 1 : b, d = b, e = 0; e < this.numberOfPages && a >= d; d += 1, 
            e += 1) c.push(d);
            return c.first = 1, c.prev = this.currentPage > 1 ? this.currentPage - 1 : 1, c.next = this.currentPage < a ? this.currentPage + 1 : a, 
            c.last = a, c.current = this.currentPage, c.total = a, c.numberOfPages = this.options.numberOfPages, 
            c;
        },
        getValueFromOption: function(a) {
            var b = null, c = Array.prototype.slice.call(arguments, 1);
            return b = "function" == typeof a ? a.apply(this, c) : a;
        }
    }, c = a.fn.bootstrapPaginator, a.fn.bootstrapPaginator = function(c) {
        var d = arguments, e = null;
        return a(this).each(function(f, g) {
            var h = a(g), i = h.data("bootstrapPaginator"), j = "object" != typeof c ? null : c;
            if (!i) return i = new b(this, j), h = a(i.$element), void h.data("bootstrapPaginator", i);
            if ("string" == typeof c) {
                if (!i[c]) throw "Method " + c + " does not exist";
                e = i[c].apply(i, Array.prototype.slice.call(d, 1));
            } else e = i.setOptions(c);
        }), e;
    }, a.fn.bootstrapPaginator.sizeArray = {
        2: {
            large: "pagination-large",
            small: "pagination-small",
            mini: "pagination-mini"
        },
        3: {
            large: "pagination-lg",
            small: "pagination-sm",
            mini: ""
        }
    }, a.fn.bootstrapPaginator.defaults = {
        containerClass: "",
        size: "normal",
        alignment: "left",
        bootstrapMajorVersion: 2,
        listContainerClass: "",
        itemContainerClass: function(a, b, c) {
            return b === c ? "active" : "";
        },
        itemContentClass: function() {
            return "";
        },
        currentPage: 1,
        numberOfPages: 5,
        totalPages: 1,
        pageUrl: function() {
            return null;
        },
        onPageClicked: null,
        onPageChanged: null,
        useBootstrapTooltip: !1,
        shouldShowPage: function(a, b, c) {
            var d = !0;
            switch (a) {
              case "first":
                d = 1 !== c;
                break;

              case "prev":
                d = 1 !== c;
                break;

              case "next":
                d = c !== this.totalPages;
                break;

              case "last":
                d = c !== this.totalPages;
                break;

              case "page":
                d = !0;
            }
            return d;
        },
        itemTexts: function(a, b) {
            switch (a) {
              case "first":
                return "&lt;&lt;";

              case "prev":
                return "&lt;";

              case "next":
                return "&gt;";

              case "last":
                return "&gt;&gt;";

              case "page":
                return b;
            }
        },
        tooltipTitles: function(a, b, c) {
            switch (a) {
              case "first":
                return "Go to first page";

              case "prev":
                return "Go to previous page";

              case "next":
                return "Go to next page";

              case "last":
                return "Go to last page";

              case "page":
                return b === c ? "Current page is " + b : "Go to page " + b;
            }
        },
        bootstrapTooltipOptions: {
            animation: !0,
            html: !0,
            placement: "top",
            selector: !1,
            title: "",
            container: !1
        }
    }, a.fn.bootstrapPaginator.Constructor = b;
}(window.jQuery), function(a, b, c, d) {
    function e(c, d) {
        this.w = a(b), this.el = a(c), this.options = a.extend({}, k, d), this.init();
    }
    var f = "ontouchstart" in b, g = function() {
        var a = c.createElement("div"), d = c.documentElement;
        if (!("pointerEvents" in a.style)) return !1;
        a.style.pointerEvents = "auto", a.style.pointerEvents = "x", d.appendChild(a);
        var e = b.getComputedStyle && "auto" === b.getComputedStyle(a, "").pointerEvents;
        return d.removeChild(a), !!e;
    }(), h = f ? "touchstart" : "mousedown", i = f ? "touchmove" : "mousemove", j = f ? "touchend" : "mouseup";
    eCancel = f ? "touchcancel" : "mouseup";
    var k = {
        listNodeName: "ol",
        itemNodeName: "li",
        rootClass: "dd",
        listClass: "dd-list",
        itemClass: "dd-item",
        dragClass: "dd-dragel",
        handleClass: "dd-handle",
        collapsedClass: "dd-collapsed",
        placeClass: "dd-placeholder",
        noDragClass: "dd-nodrag",
        emptyClass: "dd-empty",
        expandBtnHTML: '<button data-action="expand" type="button">Expand</button>',
        collapseBtnHTML: '<button data-action="collapse" type="button">Collapse</button>',
        group: 0,
        maxDepth: 5,
        threshold: 20
    };
    e.prototype = {
        init: function() {
            var c = this;
            c.reset(), c.el.data("nestable-group", this.options.group), c.placeEl = a('<div class="' + c.options.placeClass + '"/>'), 
            a.each(this.el.find(c.options.itemNodeName), function(b, d) {
                c.setParent(a(d));
            }), c.el.on("click", "button", function(b) {
                if (!c.dragEl && (f || 0 === b.button)) {
                    var d = a(b.currentTarget), e = d.data("action"), g = d.parent(c.options.itemNodeName);
                    "collapse" === e && c.collapseItem(g), "expand" === e && c.expandItem(g);
                }
            });
            var d = function(b) {
                var d = a(b.target);
                if (!d.hasClass(c.options.handleClass)) {
                    if (d.closest("." + c.options.noDragClass).length) return;
                    d = d.closest("." + c.options.handleClass);
                }
                !d.length || c.dragEl || !f && 0 !== b.button || f && 1 !== b.touches.length || (b.preventDefault(), 
                c.dragStart(f ? b.touches[0] : b));
            }, e = function(a) {
                c.dragEl && (a.preventDefault(), c.dragMove(f ? a.touches[0] : a));
            }, g = function(a) {
                c.dragEl && (a.preventDefault(), c.dragStop(f ? a.touches[0] : a));
            };
            f ? (c.el[0].addEventListener(h, d, !1), b.addEventListener(i, e, !1), b.addEventListener(j, g, !1), 
            b.addEventListener(eCancel, g, !1)) : (c.el.on(h, d), c.w.on(i, e), c.w.on(j, g));
        },
        serialize: function() {
            var b, c = 0, d = this;
            return step = function(b, c) {
                var e = [], f = b.children(d.options.itemNodeName);
                return f.each(function() {
                    var b = a(this), f = a.extend({}, b.data()), g = b.children(d.options.listNodeName);
                    g.length && (f.children = step(g, c + 1)), e.push(f);
                }), e;
            }, b = step(d.el.find(d.options.listNodeName).first(), c);
        },
        serialise: function() {
            return this.serialize();
        },
        reset: function() {
            this.mouse = {
                offsetX: 0,
                offsetY: 0,
                startX: 0,
                startY: 0,
                lastX: 0,
                lastY: 0,
                nowX: 0,
                nowY: 0,
                distX: 0,
                distY: 0,
                dirAx: 0,
                dirX: 0,
                dirY: 0,
                lastDirX: 0,
                lastDirY: 0,
                distAxX: 0,
                distAxY: 0
            }, this.moving = !1, this.dragEl = null, this.dragRootEl = null, this.dragDepth = 0, 
            this.hasNewRoot = !1, this.pointEl = null;
        },
        expandItem: function(a) {
            a.removeClass(this.options.collapsedClass), a.children('[data-action="expand"]').hide(), 
            a.children('[data-action="collapse"]').show(), a.children(this.options.listNodeName).show();
        },
        collapseItem: function(a) {
            var b = a.children(this.options.listNodeName);
            b.length && (a.addClass(this.options.collapsedClass), a.children('[data-action="collapse"]').hide(), 
            a.children('[data-action="expand"]').show(), a.children(this.options.listNodeName).hide());
        },
        expandAll: function() {
            var b = this;
            b.el.find(b.options.itemNodeName).each(function() {
                b.expandItem(a(this));
            });
        },
        collapseAll: function() {
            var b = this;
            b.el.find(b.options.itemNodeName).each(function() {
                b.collapseItem(a(this));
            });
        },
        setParent: function(b) {
            b.children(this.options.listNodeName).length && (b.prepend(a(this.options.expandBtnHTML)), 
            b.prepend(a(this.options.collapseBtnHTML))), b.children('[data-action="expand"]').hide();
        },
        unsetParent: function(a) {
            a.removeClass(this.options.collapsedClass), a.children("[data-action]").remove(), 
            a.children(this.options.listNodeName).remove();
        },
        dragStart: function(b) {
            var e = this.mouse, f = a(b.target), g = f.closest(this.options.itemNodeName);
            this.placeEl.css("height", g.height()), e.offsetX = b.offsetX !== d ? b.offsetX : b.pageX - f.offset().left, 
            e.offsetY = b.offsetY !== d ? b.offsetY : b.pageY - f.offset().top, e.startX = e.lastX = b.pageX, 
            e.startY = e.lastY = b.pageY, this.dragRootEl = this.el, this.dragEl = a(c.createElement(this.options.listNodeName)).addClass(this.options.listClass + " " + this.options.dragClass), 
            this.dragEl.css("width", g.width()), g.after(this.placeEl), g[0].parentNode.removeChild(g[0]), 
            g.appendTo(this.dragEl), a(c.body).append(this.dragEl), this.dragEl.css({
                left: b.pageX - e.offsetX,
                top: b.pageY - e.offsetY
            });
            var h, i, j = this.dragEl.find(this.options.itemNodeName);
            for (h = 0; h < j.length; h++) i = a(j[h]).parents(this.options.listNodeName).length, 
            i > this.dragDepth && (this.dragDepth = i);
        },
        dragStop: function() {
            var a = this.dragEl.children(this.options.itemNodeName).first();
            a[0].parentNode.removeChild(a[0]), this.placeEl.replaceWith(a), this.dragEl.remove(), 
            this.el.trigger("change"), this.hasNewRoot && this.dragRootEl.trigger("change"), 
            this.reset();
        },
        dragMove: function(d) {
            var e, f, h, i, j, k = this.options, l = this.mouse;
            this.dragEl.css({
                left: d.pageX - l.offsetX,
                top: d.pageY - l.offsetY
            }), l.lastX = l.nowX, l.lastY = l.nowY, l.nowX = d.pageX, l.nowY = d.pageY, l.distX = l.nowX - l.lastX, 
            l.distY = l.nowY - l.lastY, l.lastDirX = l.dirX, l.lastDirY = l.dirY, l.dirX = 0 === l.distX ? 0 : l.distX > 0 ? 1 : -1, 
            l.dirY = 0 === l.distY ? 0 : l.distY > 0 ? 1 : -1;
            var m = Math.abs(l.distX) > Math.abs(l.distY) ? 1 : 0;
            if (!l.moving) return l.dirAx = m, void (l.moving = !0);
            l.dirAx !== m ? (l.distAxX = 0, l.distAxY = 0) : (l.distAxX += Math.abs(l.distX), 
            0 !== l.dirX && l.dirX !== l.lastDirX && (l.distAxX = 0), l.distAxY += Math.abs(l.distY), 
            0 !== l.dirY && l.dirY !== l.lastDirY && (l.distAxY = 0)), l.dirAx = m, l.dirAx && l.distAxX >= k.threshold && (l.distAxX = 0, 
            h = this.placeEl.prev(k.itemNodeName), l.distX > 0 && h.length && !h.hasClass(k.collapsedClass) && (e = h.find(k.listNodeName).last(), 
            j = this.placeEl.parents(k.listNodeName).length, j + this.dragDepth <= k.maxDepth && (e.length ? (e = h.children(k.listNodeName).last(), 
            e.append(this.placeEl)) : (e = a("<" + k.listNodeName + "/>").addClass(k.listClass), 
            e.append(this.placeEl), h.append(e), this.setParent(h)))), l.distX < 0 && (i = this.placeEl.next(k.itemNodeName), 
            i.length || (f = this.placeEl.parent(), this.placeEl.closest(k.itemNodeName).after(this.placeEl), 
            f.children().length || this.unsetParent(f.parent()))));
            var n = !1;
            if (g || (this.dragEl[0].style.visibility = "hidden"), this.pointEl = a(c.elementFromPoint(d.pageX - c.body.scrollLeft, d.pageY - (b.pageYOffset || c.documentElement.scrollTop))), 
            g || (this.dragEl[0].style.visibility = "visible"), this.pointEl.hasClass(k.handleClass) && (this.pointEl = this.pointEl.parent(k.itemNodeName)), 
            this.pointEl.hasClass(k.emptyClass)) n = !0; else if (!this.pointEl.length || !this.pointEl.hasClass(k.itemClass)) return;
            var o = this.pointEl.closest("." + k.rootClass), p = this.dragRootEl.data("nestable-id") !== o.data("nestable-id");
            if (!l.dirAx || p || n) {
                if (p && k.group !== o.data("nestable-group")) return;
                if (j = this.dragDepth - 1 + this.pointEl.parents(k.listNodeName).length, j > k.maxDepth) return;
                var q = d.pageY < this.pointEl.offset().top + this.pointEl.height() / 2;
                f = this.placeEl.parent(), n ? (e = a(c.createElement(k.listNodeName)).addClass(k.listClass), 
                e.append(this.placeEl), this.pointEl.replaceWith(e)) : q ? this.pointEl.before(this.placeEl) : this.pointEl.after(this.placeEl), 
                f.children().length || this.unsetParent(f.parent()), this.dragRootEl.find(k.itemNodeName).length || this.dragRootEl.append('<div class="' + k.emptyClass + '"/>'), 
                p && (this.dragRootEl = o, this.hasNewRoot = this.el[0] !== this.dragRootEl[0]);
            }
        }
    }, a.fn.nestable = function(b) {
        var c = this, d = this;
        return c.each(function() {
            var c = a(this).data("nestable");
            c ? "string" == typeof b && "function" == typeof c[b] && (d = c[b]()) : (a(this).data("nestable", new e(this, b)), 
            a(this).data("nestable-id", new Date().getTime()));
        }), d || c;
    };
}(window.jQuery || window.Zepto, window, document), function(a) {
    function b() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        };
    }
    function c(a, b) {
        function c() {
            ib.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a);
        }
        var d = !0;
        return i(function() {
            return d && (c(), d = !1), b.apply(this, arguments);
        }, b);
    }
    function d(a, b) {
        return function(c) {
            return l(a.call(this, c), b);
        };
    }
    function e(a, b) {
        return function(c) {
            return this.lang().ordinal(a.call(this, c), b);
        };
    }
    function f() {}
    function g(a) {
        y(a), i(this, a);
    }
    function h(a) {
        var b = r(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, 
        this._months = +e + 3 * d + 12 * c, this._data = {}, this._bubble();
    }
    function i(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), 
        a;
    }
    function j(a) {
        var b, c = {};
        for (b in a) a.hasOwnProperty(b) && wb.hasOwnProperty(b) && (c[b] = a[b]);
        return c;
    }
    function k(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a);
    }
    function l(a, b, c) {
        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b; ) d = "0" + d;
        return (e ? c ? "+" : "" : "-") + d;
    }
    function m(a, b, c, d) {
        var e = b._milliseconds, f = b._days, g = b._months;
        d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && db(a, "Date", cb(a, "Date") + f * c), 
        g && bb(a, cb(a, "Month") + g * c), d && ib.updateOffset(a, f || g);
    }
    function n(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
    }
    function o(a) {
        return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date;
    }
    function p(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; e > d; d++) (c && a[d] !== b[d] || !c && t(a[d]) !== t(b[d])) && g++;
        return g + f;
    }
    function q(a) {
        if (a) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = Zb[a] || $b[b] || b;
        }
        return a;
    }
    function r(a) {
        var b, c, d = {};
        for (c in a) a.hasOwnProperty(c) && (b = q(c), b && (d[b] = a[c]));
        return d;
    }
    function s(b) {
        var c, d;
        if (0 === b.indexOf("week")) c = 7, d = "day"; else {
            if (0 !== b.indexOf("month")) return;
            c = 12, d = "month";
        }
        ib[b] = function(e, f) {
            var g, h, i = ib.fn._lang[b], j = [];
            if ("number" == typeof e && (f = e, e = a), h = function(a) {
                var b = ib().utc().set(d, a);
                return i.call(ib.fn._lang, b, e || "");
            }, null != f) return h(f);
            for (g = 0; c > g; g++) j.push(h(g));
            return j;
        };
    }
    function t(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c;
    }
    function u(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
    }
    function v(a, b, c) {
        return $(ib([ a, 11, 31 + b - c ]), b, c).week;
    }
    function w(a) {
        return x(a) ? 366 : 365;
    }
    function x(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
    }
    function y(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[pb] < 0 || a._a[pb] > 11 ? pb : a._a[qb] < 1 || a._a[qb] > u(a._a[ob], a._a[pb]) ? qb : a._a[rb] < 0 || a._a[rb] > 23 ? rb : a._a[sb] < 0 || a._a[sb] > 59 ? sb : a._a[tb] < 0 || a._a[tb] > 59 ? tb : a._a[ub] < 0 || a._a[ub] > 999 ? ub : -1, 
        a._pf._overflowDayOfYear && (ob > b || b > qb) && (b = qb), a._pf.overflow = b);
    }
    function z(a) {
        return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, 
        a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), 
        a._isValid;
    }
    function A(a) {
        return a ? a.toLowerCase().replace("_", "-") : a;
    }
    function B(a, b) {
        return b._isUTC ? ib(a).zone(b._offset || 0) : ib(a).local();
    }
    function C(a, b) {
        return b.abbr = a, vb[a] || (vb[a] = new f()), vb[a].set(b), vb[a];
    }
    function D(a) {
        delete vb[a];
    }
    function E(a) {
        var b, c, d, e, f = 0, g = function(a) {
            if (!vb[a] && xb) try {
                require("./lang/" + a);
            } catch (b) {}
            return vb[a];
        };
        if (!a) return ib.fn._lang;
        if (!n(a)) {
            if (c = g(a)) return c;
            a = [ a ];
        }
        for (;f < a.length; ) {
            for (e = A(a[f]).split("-"), b = e.length, d = A(a[f + 1]), d = d ? d.split("-") : null; b > 0; ) {
                if (c = g(e.slice(0, b).join("-"))) return c;
                if (d && d.length >= b && p(e, d, !0) >= b - 1) break;
                b--;
            }
            f++;
        }
        return ib.fn._lang;
    }
    function F(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
    }
    function G(a) {
        var b, c, d = a.match(Bb);
        for (b = 0, c = d.length; c > b; b++) d[b] = cc[d[b]] ? cc[d[b]] : F(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f;
        };
    }
    function H(a, b) {
        return a.isValid() ? (b = I(b, a.lang()), _b[b] || (_b[b] = G(b)), _b[b](a)) : a.lang().invalidDate();
    }
    function I(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a;
        }
        var d = 5;
        for (Cb.lastIndex = 0; d >= 0 && Cb.test(a); ) a = a.replace(Cb, c), Cb.lastIndex = 0, 
        d -= 1;
        return a;
    }
    function J(a, b) {
        var c, d = b._strict;
        switch (a) {
          case "Q":
            return Nb;

          case "DDDD":
            return Pb;

          case "YYYY":
          case "GGGG":
          case "gggg":
            return d ? Qb : Fb;

          case "Y":
          case "G":
          case "g":
            return Sb;

          case "YYYYYY":
          case "YYYYY":
          case "GGGGG":
          case "ggggg":
            return d ? Rb : Gb;

          case "S":
            if (d) return Nb;

          case "SS":
            if (d) return Ob;

          case "SSS":
            if (d) return Pb;

          case "DDD":
            return Eb;

          case "MMM":
          case "MMMM":
          case "dd":
          case "ddd":
          case "dddd":
            return Ib;

          case "a":
          case "A":
            return E(b._l)._meridiemParse;

          case "X":
            return Lb;

          case "Z":
          case "ZZ":
            return Jb;

          case "T":
            return Kb;

          case "SSSS":
            return Hb;

          case "MM":
          case "DD":
          case "YY":
          case "GG":
          case "gg":
          case "HH":
          case "hh":
          case "mm":
          case "ss":
          case "ww":
          case "WW":
            return d ? Ob : Db;

          case "M":
          case "D":
          case "d":
          case "H":
          case "h":
          case "m":
          case "s":
          case "w":
          case "W":
          case "e":
          case "E":
            return Db;

          case "Do":
            return Mb;

          default:
            return c = new RegExp(R(Q(a.replace("\\", "")), "i"));
        }
    }
    function K(a) {
        a = a || "";
        var b = a.match(Jb) || [], c = b[b.length - 1] || [], d = (c + "").match(Xb) || [ "-", 0, 0 ], e = +(60 * d[1]) + t(d[2]);
        return "+" === d[0] ? -e : e;
    }
    function L(a, b, c) {
        var d, e = c._a;
        switch (a) {
          case "Q":
            null != b && (e[pb] = 3 * (t(b) - 1));
            break;

          case "M":
          case "MM":
            null != b && (e[pb] = t(b) - 1);
            break;

          case "MMM":
          case "MMMM":
            d = E(c._l).monthsParse(b), null != d ? e[pb] = d : c._pf.invalidMonth = b;
            break;

          case "D":
          case "DD":
            null != b && (e[qb] = t(b));
            break;

          case "Do":
            null != b && (e[qb] = t(parseInt(b, 10)));
            break;

          case "DDD":
          case "DDDD":
            null != b && (c._dayOfYear = t(b));
            break;

          case "YY":
            e[ob] = ib.parseTwoDigitYear(b);
            break;

          case "YYYY":
          case "YYYYY":
          case "YYYYYY":
            e[ob] = t(b);
            break;

          case "a":
          case "A":
            c._isPm = E(c._l).isPM(b);
            break;

          case "H":
          case "HH":
          case "h":
          case "hh":
            e[rb] = t(b);
            break;

          case "m":
          case "mm":
            e[sb] = t(b);
            break;

          case "s":
          case "ss":
            e[tb] = t(b);
            break;

          case "S":
          case "SS":
          case "SSS":
          case "SSSS":
            e[ub] = t(1e3 * ("0." + b));
            break;

          case "X":
            c._d = new Date(1e3 * parseFloat(b));
            break;

          case "Z":
          case "ZZ":
            c._useUTC = !0, c._tzm = K(b);
            break;

          case "w":
          case "ww":
          case "W":
          case "WW":
          case "d":
          case "dd":
          case "ddd":
          case "dddd":
          case "e":
          case "E":
            a = a.substr(0, 1);

          case "gg":
          case "gggg":
          case "GG":
          case "GGGG":
          case "GGGGG":
            a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = b);
        }
    }
    function M(a) {
        var b, c, d, e, f, g, h, i, j, k, l = [];
        if (!a._d) {
            for (d = O(a), a._w && null == a._a[qb] && null == a._a[pb] && (f = function(b) {
                var c = parseInt(b, 10);
                return b ? b.length < 3 ? c > 68 ? 1900 + c : 2e3 + c : c : null == a._a[ob] ? ib().weekYear() : a._a[ob];
            }, g = a._w, null != g.GG || null != g.W || null != g.E ? h = _(f(g.GG), g.W || 1, g.E, 4, 1) : (i = E(a._l), 
            j = null != g.d ? X(g.d, i) : null != g.e ? parseInt(g.e, 10) + i._week.dow : 0, 
            k = parseInt(g.w, 10) || 1, null != g.d && j < i._week.dow && k++, h = _(f(g.gg), k, j, i._week.doy, i._week.dow)), 
            a._a[ob] = h.year, a._dayOfYear = h.dayOfYear), a._dayOfYear && (e = null == a._a[ob] ? d[ob] : a._a[ob], 
            a._dayOfYear > w(e) && (a._pf._overflowDayOfYear = !0), c = W(e, 0, a._dayOfYear), 
            a._a[pb] = c.getUTCMonth(), a._a[qb] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = l[b] = d[b];
            for (;7 > b; b++) a._a[b] = l[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            l[rb] += t((a._tzm || 0) / 60), l[sb] += t((a._tzm || 0) % 60), a._d = (a._useUTC ? W : V).apply(null, l);
        }
    }
    function N(a) {
        var b;
        a._d || (b = r(a._i), a._a = [ b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond ], 
        M(a));
    }
    function O(a) {
        var b = new Date();
        return a._useUTC ? [ b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate() ] : [ b.getFullYear(), b.getMonth(), b.getDate() ];
    }
    function P(a) {
        a._a = [], a._pf.empty = !0;
        var b, c, d, e, f, g = E(a._l), h = "" + a._i, i = h.length, j = 0;
        for (d = I(a._f, g).match(Bb) || [], b = 0; b < d.length; b++) e = d[b], c = (h.match(J(e, a)) || [])[0], 
        c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), 
        h = h.slice(h.indexOf(c) + c.length), j += c.length), cc[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), 
        L(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
        a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[rb] < 12 && (a._a[rb] += 12), 
        a._isPm === !1 && 12 === a._a[rb] && (a._a[rb] = 0), M(a), y(a);
    }
    function Q(a) {
        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e;
        });
    }
    function R(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function S(a) {
        var c, d, e, f, g;
        if (0 === a._f.length) return a._pf.invalidFormat = !0, void (a._d = new Date(0/0));
        for (f = 0; f < a._f.length; f++) g = 0, c = i({}, a), c._pf = b(), c._f = a._f[f], 
        P(c), z(c) && (g += c._pf.charsLeftOver, g += 10 * c._pf.unusedTokens.length, c._pf.score = g, 
        (null == e || e > g) && (e = g, d = c));
        i(a, d || c);
    }
    function T(a) {
        var b, c, d = a._i, e = Tb.exec(d);
        if (e) {
            for (a._pf.iso = !0, b = 0, c = Vb.length; c > b; b++) if (Vb[b][1].exec(d)) {
                a._f = Vb[b][0] + (e[6] || " ");
                break;
            }
            for (b = 0, c = Wb.length; c > b; b++) if (Wb[b][1].exec(d)) {
                a._f += Wb[b][0];
                break;
            }
            d.match(Jb) && (a._f += "Z"), P(a);
        } else ib.createFromInputFallback(a);
    }
    function U(b) {
        var c = b._i, d = yb.exec(c);
        c === a ? b._d = new Date() : d ? b._d = new Date(+d[1]) : "string" == typeof c ? T(b) : n(c) ? (b._a = c.slice(0), 
        M(b)) : o(c) ? b._d = new Date(+c) : "object" == typeof c ? N(b) : "number" == typeof c ? b._d = new Date(c) : ib.createFromInputFallback(b);
    }
    function V(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h;
    }
    function W(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b;
    }
    function X(a, b) {
        if ("string" == typeof a) if (isNaN(a)) {
            if (a = b.weekdaysParse(a), "number" != typeof a) return null;
        } else a = parseInt(a, 10);
        return a;
    }
    function Y(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d);
    }
    function Z(a, b, c) {
        var d = nb(Math.abs(a) / 1e3), e = nb(d / 60), f = nb(e / 60), g = nb(f / 24), h = nb(g / 365), i = 45 > d && [ "s", d ] || 1 === e && [ "m" ] || 45 > e && [ "mm", e ] || 1 === f && [ "h" ] || 22 > f && [ "hh", f ] || 1 === g && [ "d" ] || 25 >= g && [ "dd", g ] || 45 >= g && [ "M" ] || 345 > g && [ "MM", nb(g / 30) ] || 1 === h && [ "y" ] || [ "yy", h ];
        return i[2] = b, i[3] = a > 0, i[4] = c, Y.apply({}, i);
    }
    function $(a, b, c) {
        var d, e = c - b, f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = ib(a).add("d", f), {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        };
    }
    function _(a, b, c, d, e) {
        var f, g, h = W(a, 0, 1).getUTCDay();
        return c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, 
        {
            year: g > 0 ? a : a - 1,
            dayOfYear: g > 0 ? g : w(a - 1) + g
        };
    }
    function ab(b) {
        var c = b._i, d = b._f;
        return null === c || d === a && "" === c ? ib.invalid({
            nullInput: !0
        }) : ("string" == typeof c && (b._i = c = E().preparse(c)), ib.isMoment(c) ? (b = j(c), 
        b._d = new Date(+c._d)) : d ? n(d) ? S(b) : P(b) : U(b), new g(b));
    }
    function bb(a, b) {
        var c;
        return "string" == typeof b && (b = a.lang().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), u(a.year(), b)), 
        a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a);
    }
    function cb(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]();
    }
    function db(a, b, c) {
        return "Month" === b ? bb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
    }
    function eb(a, b) {
        return function(c) {
            return null != c ? (db(this, a, c), ib.updateOffset(this, b), this) : cb(this, a);
        };
    }
    function fb(a) {
        ib.duration.fn[a] = function() {
            return this._data[a];
        };
    }
    function gb(a, b) {
        ib.duration.fn["as" + a] = function() {
            return +this / b;
        };
    }
    function hb(a) {
        "undefined" == typeof ender && (jb = mb.moment, mb.moment = a ? c("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", ib) : ib);
    }
    for (var ib, jb, kb, lb = "2.6.0", mb = "undefined" != typeof global ? global : this, nb = Math.round, ob = 0, pb = 1, qb = 2, rb = 3, sb = 4, tb = 5, ub = 6, vb = {}, wb = {
        _isAMomentObject: null,
        _i: null,
        _f: null,
        _l: null,
        _strict: null,
        _isUTC: null,
        _offset: null,
        _pf: null,
        _lang: null
    }, xb = "undefined" != typeof module && module.exports, yb = /^\/?Date\((\-?\d+)/i, zb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ab = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Bb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Cb = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Db = /\d\d?/, Eb = /\d{1,3}/, Fb = /\d{1,4}/, Gb = /[+\-]?\d{1,6}/, Hb = /\d+/, Ib = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Jb = /Z|[\+\-]\d\d:?\d\d/gi, Kb = /T/i, Lb = /[\+\-]?\d+(\.\d{1,3})?/, Mb = /\d{1,2}/, Nb = /\d/, Ob = /\d\d/, Pb = /\d{3}/, Qb = /\d{4}/, Rb = /[+-]?\d{6}/, Sb = /[+-]?\d+/, Tb = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ub = "YYYY-MM-DDTHH:mm:ssZ", Vb = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/ ], [ "YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d{2}/ ], [ "YYYY-DDD", /\d{4}-\d{3}/ ] ], Wb = [ [ "HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss", /(T| )\d\d:\d\d:\d\d/ ], [ "HH:mm", /(T| )\d\d:\d\d/ ], [ "HH", /(T| )\d\d/ ] ], Xb = /([\+\-]|\d\d)/gi, Yb = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), 
    {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }), Zb = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        Q: "quarter",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    }, $b = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    }, _b = {}, ac = "DDD w W M D d".split(" "), bc = "M D H h m s w W".split(" "), cc = {
        M: function() {
            return this.month() + 1;
        },
        MMM: function(a) {
            return this.lang().monthsShort(this, a);
        },
        MMMM: function(a) {
            return this.lang().months(this, a);
        },
        D: function() {
            return this.date();
        },
        DDD: function() {
            return this.dayOfYear();
        },
        d: function() {
            return this.day();
        },
        dd: function(a) {
            return this.lang().weekdaysMin(this, a);
        },
        ddd: function(a) {
            return this.lang().weekdaysShort(this, a);
        },
        dddd: function(a) {
            return this.lang().weekdays(this, a);
        },
        w: function() {
            return this.week();
        },
        W: function() {
            return this.isoWeek();
        },
        YY: function() {
            return l(this.year() % 100, 2);
        },
        YYYY: function() {
            return l(this.year(), 4);
        },
        YYYYY: function() {
            return l(this.year(), 5);
        },
        YYYYYY: function() {
            var a = this.year(), b = a >= 0 ? "+" : "-";
            return b + l(Math.abs(a), 6);
        },
        gg: function() {
            return l(this.weekYear() % 100, 2);
        },
        gggg: function() {
            return l(this.weekYear(), 4);
        },
        ggggg: function() {
            return l(this.weekYear(), 5);
        },
        GG: function() {
            return l(this.isoWeekYear() % 100, 2);
        },
        GGGG: function() {
            return l(this.isoWeekYear(), 4);
        },
        GGGGG: function() {
            return l(this.isoWeekYear(), 5);
        },
        e: function() {
            return this.weekday();
        },
        E: function() {
            return this.isoWeekday();
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0);
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1);
        },
        H: function() {
            return this.hours();
        },
        h: function() {
            return this.hours() % 12 || 12;
        },
        m: function() {
            return this.minutes();
        },
        s: function() {
            return this.seconds();
        },
        S: function() {
            return t(this.milliseconds() / 100);
        },
        SS: function() {
            return l(t(this.milliseconds() / 10), 2);
        },
        SSS: function() {
            return l(this.milliseconds(), 3);
        },
        SSSS: function() {
            return l(this.milliseconds(), 3);
        },
        Z: function() {
            var a = -this.zone(), b = "+";
            return 0 > a && (a = -a, b = "-"), b + l(t(a / 60), 2) + ":" + l(t(a) % 60, 2);
        },
        ZZ: function() {
            var a = -this.zone(), b = "+";
            return 0 > a && (a = -a, b = "-"), b + l(t(a / 60), 2) + l(t(a) % 60, 2);
        },
        z: function() {
            return this.zoneAbbr();
        },
        zz: function() {
            return this.zoneName();
        },
        X: function() {
            return this.unix();
        },
        Q: function() {
            return this.quarter();
        }
    }, dc = [ "months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin" ]; ac.length; ) kb = ac.pop(), 
    cc[kb + "o"] = e(cc[kb], kb);
    for (;bc.length; ) kb = bc.pop(), cc[kb + kb] = d(cc[kb], 2);
    for (cc.DDDD = d(cc.DDD, 3), i(f.prototype, {
        set: function(a) {
            var b, c;
            for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(a) {
            return this._months[a.month()];
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(a) {
            return this._monthsShort[a.month()];
        },
        monthsParse: function(a) {
            var b, c, d;
            for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++) if (this._monthsParse[b] || (c = ib.utc([ 2e3, b ]), 
            d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), 
            this._monthsParse[b].test(a)) return b;
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(a) {
            return this._weekdays[a.day()];
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(a) {
            return this._weekdaysShort[a.day()];
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(a) {
            return this._weekdaysMin[a.day()];
        },
        weekdaysParse: function(a) {
            var b, c, d;
            for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++) if (this._weekdaysParse[b] || (c = ib([ 2e3, 1 ]).day(b), 
            d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), 
            this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b;
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(a) {
            var b = this._longDateFormat[a];
            return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
                return a.slice(1);
            }), this._longDateFormat[a] = b), b;
        },
        isPM: function(a) {
            return "p" === (a + "").toLowerCase().charAt(0);
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(a, b) {
            var c = this._calendar[a];
            return "function" == typeof c ? c.apply(b) : c;
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(a, b, c, d) {
            var e = this._relativeTime[c];
            return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a);
        },
        pastFuture: function(a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return "function" == typeof c ? c(b) : c.replace(/%s/i, b);
        },
        ordinal: function(a) {
            return this._ordinal.replace("%d", a);
        },
        _ordinal: "%d",
        preparse: function(a) {
            return a;
        },
        postformat: function(a) {
            return a;
        },
        week: function(a) {
            return $(a, this._week.dow, this._week.doy).week;
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate;
        }
    }), ib = function(c, d, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, 
        g._i = c, g._f = d, g._l = e, g._strict = f, g._isUTC = !1, g._pf = b(), ab(g);
    }, ib.suppressDeprecationWarnings = !1, ib.createFromInputFallback = c("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
        a._d = new Date(a._i);
    }), ib.utc = function(c, d, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, 
        g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = c, g._f = d, g._strict = f, g._pf = b(), 
        ab(g).utc();
    }, ib.unix = function(a) {
        return ib(1e3 * a);
    }, ib.duration = function(a, b) {
        var c, d, e, f = a, g = null;
        return ib.isDuration(a) ? f = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = zb.exec(a)) ? (c = "-" === g[1] ? -1 : 1, 
        f = {
            y: 0,
            d: t(g[qb]) * c,
            h: t(g[rb]) * c,
            m: t(g[sb]) * c,
            s: t(g[tb]) * c,
            ms: t(g[ub]) * c
        }) : (g = Ab.exec(a)) && (c = "-" === g[1] ? -1 : 1, e = function(a) {
            var b = a && parseFloat(a.replace(",", "."));
            return (isNaN(b) ? 0 : b) * c;
        }, f = {
            y: e(g[2]),
            M: e(g[3]),
            d: e(g[4]),
            h: e(g[5]),
            m: e(g[6]),
            s: e(g[7]),
            w: e(g[8])
        }), d = new h(f), ib.isDuration(a) && a.hasOwnProperty("_lang") && (d._lang = a._lang), 
        d;
    }, ib.version = lb, ib.defaultFormat = Ub, ib.momentProperties = wb, ib.updateOffset = function() {}, 
    ib.lang = function(a, b) {
        var c;
        return a ? (b ? C(A(a), b) : null === b ? (D(a), a = "en") : vb[a] || E(a), c = ib.duration.fn._lang = ib.fn._lang = E(a), 
        c._abbr) : ib.fn._lang._abbr;
    }, ib.langData = function(a) {
        return a && a._lang && a._lang._abbr && (a = a._lang._abbr), E(a);
    }, ib.isMoment = function(a) {
        return a instanceof g || null != a && a.hasOwnProperty("_isAMomentObject");
    }, ib.isDuration = function(a) {
        return a instanceof h;
    }, kb = dc.length - 1; kb >= 0; --kb) s(dc[kb]);
    ib.normalizeUnits = function(a) {
        return q(a);
    }, ib.invalid = function(a) {
        var b = ib.utc(0/0);
        return null != a ? i(b._pf, a) : b._pf.userInvalidated = !0, b;
    }, ib.parseZone = function() {
        return ib.apply(null, arguments).parseZone();
    }, ib.parseTwoDigitYear = function(a) {
        return t(a) + (t(a) > 68 ? 1900 : 2e3);
    }, i(ib.fn = g.prototype, {
        clone: function() {
            return ib(this);
        },
        valueOf: function() {
            return +this._d + 6e4 * (this._offset || 0);
        },
        unix: function() {
            return Math.floor(+this / 1e3);
        },
        toString: function() {
            return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d;
        },
        toISOString: function() {
            var a = ib(this).utc();
            return 0 < a.year() && a.year() <= 9999 ? H(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : H(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
        },
        toArray: function() {
            var a = this;
            return [ a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds() ];
        },
        isValid: function() {
            return z(this);
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && p(this._a, (this._isUTC ? ib.utc(this._a) : ib(this._a)).toArray()) > 0 : !1;
        },
        parsingFlags: function() {
            return i({}, this._pf);
        },
        invalidAt: function() {
            return this._pf.overflow;
        },
        utc: function() {
            return this.zone(0);
        },
        local: function() {
            return this.zone(0), this._isUTC = !1, this;
        },
        format: function(a) {
            var b = H(this, a || ib.defaultFormat);
            return this.lang().postformat(b);
        },
        add: function(a, b) {
            var c;
            return c = "string" == typeof a ? ib.duration(+b, a) : ib.duration(a, b), m(this, c, 1), 
            this;
        },
        subtract: function(a, b) {
            var c;
            return c = "string" == typeof a ? ib.duration(+b, a) : ib.duration(a, b), m(this, c, -1), 
            this;
        },
        diff: function(a, b, c) {
            var d, e, f = B(a, this), g = 6e4 * (this.zone() - f.zone());
            return b = q(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), 
            e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - ib(this).startOf("month") - (f - ib(f).startOf("month"))) / d, 
            e -= 6e4 * (this.zone() - ib(this).startOf("month").zone() - (f.zone() - ib(f).startOf("month").zone())) / d, 
            "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), 
            c ? e : k(e);
        },
        from: function(a, b) {
            return ib.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b);
        },
        fromNow: function(a) {
            return this.from(ib(), a);
        },
        calendar: function() {
            var a = B(ib(), this).startOf("day"), b = this.diff(a, "days", !0), c = -6 > b ? "sameElse" : -1 > b ? "lastWeek" : 0 > b ? "lastDay" : 1 > b ? "sameDay" : 2 > b ? "nextDay" : 7 > b ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(c, this));
        },
        isLeapYear: function() {
            return x(this.year());
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone();
        },
        day: function(a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? (a = X(a, this.lang()), this.add({
                d: a - b
            })) : b;
        },
        month: eb("Month", !0),
        startOf: function(a) {
            switch (a = q(a)) {
              case "year":
                this.month(0);

              case "quarter":
              case "month":
                this.date(1);

              case "week":
              case "isoWeek":
              case "day":
                this.hours(0);

              case "hour":
                this.minutes(0);

              case "minute":
                this.seconds(0);

              case "second":
                this.milliseconds(0);
            }
            return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), 
            this;
        },
        endOf: function(a) {
            return a = q(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1);
        },
        isAfter: function(a, b) {
            return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +ib(a).startOf(b);
        },
        isBefore: function(a, b) {
            return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +ib(a).startOf(b);
        },
        isSame: function(a, b) {
            return b = b || "ms", +this.clone().startOf(b) === +B(a, this).startOf(b);
        },
        min: function(a) {
            return a = ib.apply(null, arguments), this > a ? this : a;
        },
        max: function(a) {
            return a = ib.apply(null, arguments), a > this ? this : a;
        },
        zone: function(a, b) {
            var c = this._offset || 0;
            return null == a ? this._isUTC ? c : this._d.getTimezoneOffset() : ("string" == typeof a && (a = K(a)), 
            Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, c !== a && (!b || this._changeInProgress ? m(this, ib.duration(c - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
            ib.updateOffset(this, !0), this._changeInProgress = null)), this);
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : "";
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : "";
        },
        parseZone: function() {
            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), 
            this;
        },
        hasAlignedHourOffset: function(a) {
            return a = a ? ib(a).zone() : 0, (this.zone() - a) % 60 === 0;
        },
        daysInMonth: function() {
            return u(this.year(), this.month());
        },
        dayOfYear: function(a) {
            var b = nb((ib(this).startOf("day") - ib(this).startOf("year")) / 864e5) + 1;
            return null == a ? b : this.add("d", a - b);
        },
        quarter: function(a) {
            return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3);
        },
        weekYear: function(a) {
            var b = $(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == a ? b : this.add("y", a - b);
        },
        isoWeekYear: function(a) {
            var b = $(this, 1, 4).year;
            return null == a ? b : this.add("y", a - b);
        },
        week: function(a) {
            var b = this.lang().week(this);
            return null == a ? b : this.add("d", 7 * (a - b));
        },
        isoWeek: function(a) {
            var b = $(this, 1, 4).week;
            return null == a ? b : this.add("d", 7 * (a - b));
        },
        weekday: function(a) {
            var b = (this.day() + 7 - this.lang()._week.dow) % 7;
            return null == a ? b : this.add("d", a - b);
        },
        isoWeekday: function(a) {
            return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
        },
        isoWeeksInYear: function() {
            return v(this.year(), 1, 4);
        },
        weeksInYear: function() {
            var a = this._lang._week;
            return v(this.year(), a.dow, a.doy);
        },
        get: function(a) {
            return a = q(a), this[a]();
        },
        set: function(a, b) {
            return a = q(a), "function" == typeof this[a] && this[a](b), this;
        },
        lang: function(b) {
            return b === a ? this._lang : (this._lang = E(b), this);
        }
    }), ib.fn.millisecond = ib.fn.milliseconds = eb("Milliseconds", !1), ib.fn.second = ib.fn.seconds = eb("Seconds", !1), 
    ib.fn.minute = ib.fn.minutes = eb("Minutes", !1), ib.fn.hour = ib.fn.hours = eb("Hours", !0), 
    ib.fn.date = eb("Date", !0), ib.fn.dates = c("dates accessor is deprecated. Use date instead.", eb("Date", !0)), 
    ib.fn.year = eb("FullYear", !0), ib.fn.years = c("years accessor is deprecated. Use year instead.", eb("FullYear", !0)), 
    ib.fn.days = ib.fn.day, ib.fn.months = ib.fn.month, ib.fn.weeks = ib.fn.week, ib.fn.isoWeeks = ib.fn.isoWeek, 
    ib.fn.quarters = ib.fn.quarter, ib.fn.toJSON = ib.fn.toISOString, i(ib.duration.fn = h.prototype, {
        _bubble: function() {
            var a, b, c, d, e = this._milliseconds, f = this._days, g = this._months, h = this._data;
            h.milliseconds = e % 1e3, a = k(e / 1e3), h.seconds = a % 60, b = k(a / 60), h.minutes = b % 60, 
            c = k(b / 60), h.hours = c % 24, f += k(c / 24), h.days = f % 30, g += k(f / 30), 
            h.months = g % 12, d = k(g / 12), h.years = d;
        },
        weeks: function() {
            return k(this.days() / 7);
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * t(this._months / 12);
        },
        humanize: function(a) {
            var b = +this, c = Z(b, !a, this.lang());
            return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c);
        },
        add: function(a, b) {
            var c = ib.duration(a, b);
            return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, 
            this._bubble(), this;
        },
        subtract: function(a, b) {
            var c = ib.duration(a, b);
            return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, 
            this._bubble(), this;
        },
        get: function(a) {
            return a = q(a), this[a.toLowerCase() + "s"]();
        },
        as: function(a) {
            return a = q(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]();
        },
        lang: ib.fn.lang,
        toIsoString: function() {
            var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D";
        }
    });
    for (kb in Yb) Yb.hasOwnProperty(kb) && (gb(kb, Yb[kb]), fb(kb.toLowerCase()));
    gb("Weeks", 6048e5), ib.duration.fn.asMonths = function() {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years();
    }, ib.lang("en", {
        ordinal: function(a) {
            var b = a % 10, c = 1 === t(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c;
        }
    }), xb ? module.exports = ib : "function" == typeof define && define.amd ? (define("moment", function(a, b, c) {
        return c.config && c.config() && c.config().noGlobal === !0 && (mb.moment = jb), 
        ib;
    }), hb(!0)) : hb();
}.call(this), function(a) {
    "function" == typeof define && define.amd ? define([ "moment" ], a) : "object" == typeof exports ? module.exports = a(require("../moment")) : a(window.moment);
}(function(a) {
    return a.lang("zh-cn", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "Ah点mm",
            L: "YYYY-MM-DD",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日LT",
            LLLL: "YYYY年MMMD日ddddLT",
            l: "YYYY-MM-DD",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日LT",
            llll: "YYYY年MMMD日ddddLT"
        },
        meridiem: function(a, b) {
            var c = 100 * a + b;
            return 600 > c ? "凌晨" : 900 > c ? "早上" : 1130 > c ? "上午" : 1230 > c ? "中午" : 1800 > c ? "下午" : "晚上";
        },
        calendar: {
            sameDay: function() {
                return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT";
            },
            nextDay: function() {
                return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT";
            },
            lastDay: function() {
                return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT";
            },
            nextWeek: function() {
                var b, c;
                return b = a().startOf("week"), c = this.unix() - b.unix() >= 604800 ? "[下]" : "[本]", 
                0 === this.minutes() ? c + "dddAh点整" : c + "dddAh点mm";
            },
            lastWeek: function() {
                var b, c;
                return b = a().startOf("week"), c = this.unix() < b.unix() ? "[上]" : "[本]", 0 === this.minutes() ? c + "dddAh点整" : c + "dddAh点mm";
            },
            sameElse: "LL"
        },
        ordinal: function(a, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return a + "日";

              case "M":
                return a + "月";

              case "w":
              case "W":
                return a + "周";

              default:
                return a;
            }
        },
        relativeTime: {
            future: "%s内",
            past: "%s前",
            s: "几秒",
            m: "1分钟",
            mm: "%d分钟",
            h: "1小时",
            hh: "%d小时",
            d: "1天",
            dd: "%d天",
            M: "1个月",
            MM: "%d个月",
            y: "1年",
            yy: "%d年"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
}), function(a, b) {
    "function" == typeof define && define.amd ? define("sifter", b) : "object" == typeof exports ? module.exports = b() : a.Sifter = b();
}(this, function() {
    var a = function(a, b) {
        this.items = a, this.settings = b || {
            diacritics: !0
        };
    };
    a.prototype.tokenize = function(a) {
        if (a = d(String(a || "").toLowerCase()), !a || !a.length) return [];
        var b, c, f, h, i = [], j = a.split(/ +/);
        for (b = 0, c = j.length; c > b; b++) {
            if (f = e(j[b]), this.settings.diacritics) for (h in g) g.hasOwnProperty(h) && (f = f.replace(new RegExp(h, "g"), g[h]));
            i.push({
                string: j[b],
                regex: new RegExp(f, "i")
            });
        }
        return i;
    }, a.prototype.iterator = function(a, b) {
        var c;
        c = f(a) ? Array.prototype.forEach || function(a) {
            for (var b = 0, c = this.length; c > b; b++) a(this[b], b, this);
        } : function(a) {
            for (var b in this) this.hasOwnProperty(b) && a(this[b], b, this);
        }, c.apply(a, [ b ]);
    }, a.prototype.getScoreFunction = function(a, b) {
        var c, d, e, f;
        c = this, a = c.prepareSearch(a, b), e = a.tokens, d = a.options.fields, f = e.length;
        var g = function(a, b) {
            var c, d;
            return a ? (a = String(a || ""), d = a.search(b.regex), -1 === d ? 0 : (c = b.string.length / a.length, 
            0 === d && (c += .5), c)) : 0;
        }, h = function() {
            var a = d.length;
            return a ? 1 === a ? function(a, b) {
                return g(b[d[0]], a);
            } : function(b, c) {
                for (var e = 0, f = 0; a > e; e++) f += g(c[d[e]], b);
                return f / a;
            } : function() {
                return 0;
            };
        }();
        return f ? 1 === f ? function(a) {
            return h(e[0], a);
        } : "and" === a.options.conjunction ? function(a) {
            for (var b, c = 0, d = 0; f > c; c++) {
                if (b = h(e[c], a), 0 >= b) return 0;
                d += b;
            }
            return d / f;
        } : function(a) {
            for (var b = 0, c = 0; f > b; b++) c += h(e[b], a);
            return c / f;
        } : function() {
            return 0;
        };
    }, a.prototype.getSortFunction = function(a, c) {
        var d, e, f, g, h, i, j, k, l, m, n;
        if (f = this, a = f.prepareSearch(a, c), n = !a.query && c.sort_empty || c.sort, 
        l = function(a, b) {
            return "$score" === a ? b.score : f.items[b.id][a];
        }, h = [], n) for (d = 0, e = n.length; e > d; d++) (a.query || "$score" !== n[d].field) && h.push(n[d]);
        if (a.query) {
            for (m = !0, d = 0, e = h.length; e > d; d++) if ("$score" === h[d].field) {
                m = !1;
                break;
            }
            m && h.unshift({
                field: "$score",
                direction: "desc"
            });
        } else for (d = 0, e = h.length; e > d; d++) if ("$score" === h[d].field) {
            h.splice(d, 1);
            break;
        }
        for (k = [], d = 0, e = h.length; e > d; d++) k.push("desc" === h[d].direction ? -1 : 1);
        return i = h.length, i ? 1 === i ? (g = h[0].field, j = k[0], function(a, c) {
            return j * b(l(g, a), l(g, c));
        }) : function(a, c) {
            var d, e, f;
            for (d = 0; i > d; d++) if (f = h[d].field, e = k[d] * b(l(f, a), l(f, c))) return e;
            return 0;
        } : null;
    }, a.prototype.prepareSearch = function(a, b) {
        if ("object" == typeof a) return a;
        b = c({}, b);
        var d = b.fields, e = b.sort, g = b.sort_empty;
        return d && !f(d) && (b.fields = [ d ]), e && !f(e) && (b.sort = [ e ]), g && !f(g) && (b.sort_empty = [ g ]), 
        {
            options: b,
            query: String(a || "").toLowerCase(),
            tokens: this.tokenize(a),
            total: 0,
            items: []
        };
    }, a.prototype.search = function(a, b) {
        var c, d, e, f, g = this;
        return d = this.prepareSearch(a, b), b = d.options, a = d.query, f = b.score || g.getScoreFunction(d), 
        a.length ? g.iterator(g.items, function(a, e) {
            c = f(a), (b.filter === !1 || c > 0) && d.items.push({
                score: c,
                id: e
            });
        }) : g.iterator(g.items, function(a, b) {
            d.items.push({
                score: 1,
                id: b
            });
        }), e = g.getSortFunction(d, b), e && d.items.sort(e), d.total = d.items.length, 
        "number" == typeof b.limit && (d.items = d.items.slice(0, b.limit)), d;
    };
    var b = function(a, b) {
        return "number" == typeof a && "number" == typeof b ? a > b ? 1 : b > a ? -1 : 0 : (a = String(a || "").toLowerCase(), 
        b = String(b || "").toLowerCase(), a > b ? 1 : b > a ? -1 : 0);
    }, c = function(a) {
        var b, c, d, e;
        for (b = 1, c = arguments.length; c > b; b++) if (e = arguments[b]) for (d in e) e.hasOwnProperty(d) && (a[d] = e[d]);
        return a;
    }, d = function(a) {
        return (a + "").replace(/^\s+|\s+$|/g, "");
    }, e = function(a) {
        return (a + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    }, f = Array.isArray || $ && $.isArray || function(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
    }, g = {
        a: "[aÀÁÂÃÄÅàáâãäåĀā]",
        c: "[cÇçćĆčČ]",
        d: "[dđĐďĎ]",
        e: "[eÈÉÊËèéêëěĚĒē]",
        i: "[iÌÍÎÏìíîïĪī]",
        n: "[nÑñňŇ]",
        o: "[oÒÓÔÕÕÖØòóôõöøŌō]",
        r: "[rřŘ]",
        s: "[sŠš]",
        t: "[tťŤ]",
        u: "[uÙÚÛÜùúûüůŮŪū]",
        y: "[yŸÿýÝ]",
        z: "[zŽž]"
    };
    return a;
}), function(a, b) {
    "function" == typeof define && define.amd ? define("microplugin", b) : "object" == typeof exports ? module.exports = b() : a.MicroPlugin = b();
}(this, function() {
    var a = {};
    a.mixin = function(a) {
        a.plugins = {}, a.prototype.initializePlugins = function(a) {
            var c, d, e, f = this, g = [];
            if (f.plugins = {
                names: [],
                settings: {},
                requested: {},
                loaded: {}
            }, b.isArray(a)) for (c = 0, d = a.length; d > c; c++) "string" == typeof a[c] ? g.push(a[c]) : (f.plugins.settings[a[c].name] = a[c].options, 
            g.push(a[c].name)); else if (a) for (e in a) a.hasOwnProperty(e) && (f.plugins.settings[e] = a[e], 
            g.push(e));
            for (;g.length; ) f.require(g.shift());
        }, a.prototype.loadPlugin = function(b) {
            var c = this, d = c.plugins, e = a.plugins[b];
            if (!a.plugins.hasOwnProperty(b)) throw new Error('Unable to find "' + b + '" plugin');
            d.requested[b] = !0, d.loaded[b] = e.fn.apply(c, [ c.plugins.settings[b] || {} ]), 
            d.names.push(b);
        }, a.prototype.require = function(a) {
            var b = this, c = b.plugins;
            if (!b.plugins.loaded.hasOwnProperty(a)) {
                if (c.requested[a]) throw new Error('Plugin has circular dependency ("' + a + '")');
                b.loadPlugin(a);
            }
            return c.loaded[a];
        }, a.define = function(b, c) {
            a.plugins[b] = {
                name: b,
                fn: c
            };
        };
    };
    var b = {
        isArray: Array.isArray || function(a) {
            return "[object Array]" === Object.prototype.toString.call(a);
        }
    };
    return a;
}), function(a, b) {
    "function" == typeof define && define.amd ? define("selectize", [ "jquery", "sifter", "microplugin" ], b) : "object" == typeof exports ? module.exports = b(require("jquery"), require("sifter"), require("microplugin")) : a.Selectize = b(a.jQuery, a.Sifter, a.MicroPlugin);
}(this, function(a, b, c) {
    "use strict";
    var d = function(a, b) {
        if ("string" != typeof b || b.length) {
            var c = "string" == typeof b ? new RegExp(b, "i") : b, d = function(a) {
                var b = 0;
                if (3 === a.nodeType) {
                    var e = a.data.search(c);
                    if (e >= 0 && a.data.length > 0) {
                        var f = a.data.match(c), g = document.createElement("span");
                        g.className = "highlight";
                        var h = a.splitText(e), i = (h.splitText(f[0].length), h.cloneNode(!0));
                        g.appendChild(i), h.parentNode.replaceChild(g, h), b = 1;
                    }
                } else if (1 === a.nodeType && a.childNodes && !/(script|style)/i.test(a.tagName)) for (var j = 0; j < a.childNodes.length; ++j) j += d(a.childNodes[j]);
                return b;
            };
            return a.each(function() {
                d(this);
            });
        }
    }, e = function() {};
    e.prototype = {
        on: function(a, b) {
            this._events = this._events || {}, this._events[a] = this._events[a] || [], this._events[a].push(b);
        },
        off: function(a, b) {
            var c = arguments.length;
            return 0 === c ? delete this._events : 1 === c ? delete this._events[a] : (this._events = this._events || {}, 
            void (a in this._events != !1 && this._events[a].splice(this._events[a].indexOf(b), 1)));
        },
        trigger: function(a) {
            if (this._events = this._events || {}, a in this._events != !1) for (var b = 0; b < this._events[a].length; b++) this._events[a][b].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    }, e.mixin = function(a) {
        for (var b = [ "on", "off", "trigger" ], c = 0; c < b.length; c++) a.prototype[b[c]] = e.prototype[b[c]];
    };
    var f = /Mac/.test(navigator.userAgent), g = 65, h = 13, i = 27, j = 37, k = 38, l = 80, m = 39, n = 40, o = 78, p = 8, q = 46, r = 16, s = f ? 91 : 17, t = f ? 18 : 17, u = 9, v = 1, w = 2, x = function(a) {
        return "undefined" != typeof a;
    }, y = function(a) {
        return "undefined" == typeof a || null === a ? null : "boolean" == typeof a ? a ? "1" : "0" : a + "";
    }, z = function(a) {
        return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }, A = function(a) {
        return (a + "").replace(/\$/g, "$$$$");
    }, B = {};
    B.before = function(a, b, c) {
        var d = a[b];
        a[b] = function() {
            return c.apply(a, arguments), d.apply(a, arguments);
        };
    }, B.after = function(a, b, c) {
        var d = a[b];
        a[b] = function() {
            var b = d.apply(a, arguments);
            return c.apply(a, arguments), b;
        };
    };
    var C = function(b, c) {
        if (!a.isArray(c)) return c;
        var d, e, f = {};
        for (d = 0, e = c.length; e > d; d++) c[d].hasOwnProperty(b) && (f[c[d][b]] = c[d]);
        return f;
    }, D = function(a) {
        var b = !1;
        return function() {
            b || (b = !0, a.apply(this, arguments));
        };
    }, E = function(a, b) {
        var c;
        return function() {
            var d = this, e = arguments;
            window.clearTimeout(c), c = window.setTimeout(function() {
                a.apply(d, e);
            }, b);
        };
    }, F = function(a, b, c) {
        var d, e = a.trigger, f = {};
        a.trigger = function() {
            var c = arguments[0];
            return -1 === b.indexOf(c) ? e.apply(a, arguments) : void (f[c] = arguments);
        }, c.apply(a, []), a.trigger = e;
        for (d in f) f.hasOwnProperty(d) && e.apply(a, f[d]);
    }, G = function(a, b, c, d) {
        a.on(b, c, function(b) {
            for (var c = b.target; c && c.parentNode !== a[0]; ) c = c.parentNode;
            return b.currentTarget = c, d.apply(this, [ b ]);
        });
    }, H = function(a) {
        var b = {};
        if ("selectionStart" in a) b.start = a.selectionStart, b.length = a.selectionEnd - b.start; else if (document.selection) {
            a.focus();
            var c = document.selection.createRange(), d = document.selection.createRange().text.length;
            c.moveStart("character", -a.value.length), b.start = c.text.length - d, b.length = d;
        }
        return b;
    }, I = function(a, b, c) {
        var d, e, f = {};
        if (c) for (d = 0, e = c.length; e > d; d++) f[c[d]] = a.css(c[d]); else f = a.css();
        b.css(f);
    }, J = function(b, c) {
        if (!b) return 0;
        var d = a("<test>").css({
            position: "absolute",
            top: -99999,
            left: -99999,
            width: "auto",
            padding: 0,
            whiteSpace: "pre"
        }).text(b).appendTo("body");
        I(c, d, [ "letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform" ]);
        var e = d.width();
        return d.remove(), e;
    }, K = function(a) {
        var b = null, c = function(c, d) {
            var e, f, g, h, i, j, k, l;
            c = c || window.event || {}, d = d || {}, c.metaKey || c.altKey || (d.force || a.data("grow") !== !1) && (e = a.val(), 
            c.type && "keydown" === c.type.toLowerCase() && (f = c.keyCode, g = f >= 97 && 122 >= f || f >= 65 && 90 >= f || f >= 48 && 57 >= f || 32 === f, 
            f === q || f === p ? (l = H(a[0]), l.length ? e = e.substring(0, l.start) + e.substring(l.start + l.length) : f === p && l.start ? e = e.substring(0, l.start - 1) + e.substring(l.start + 1) : f === q && "undefined" != typeof l.start && (e = e.substring(0, l.start) + e.substring(l.start + 1))) : g && (j = c.shiftKey, 
            k = String.fromCharCode(c.keyCode), k = j ? k.toUpperCase() : k.toLowerCase(), e += k)), 
            h = a.attr("placeholder"), !e && h && (e = h), i = J(e, a) + 4, i !== b && (b = i, 
            a.width(i), a.triggerHandler("resize")));
        };
        a.on("keydown keyup update blur", c), c();
    }, L = function(c, d) {
        var e, f, g = this;
        f = c[0], f.selectize = g, e = window.getComputedStyle ? window.getComputedStyle(f, null).getPropertyValue("direction") : f.currentStyle && f.currentStyle.direction, 
        e = e || c.parents("[dir]:first").attr("dir") || "", a.extend(g, {
            settings: d,
            $input: c,
            tagType: "select" === f.tagName.toLowerCase() ? v : w,
            rtl: /rtl/i.test(e),
            eventNS: ".selectize" + ++L.count,
            highlightedValue: null,
            isOpen: !1,
            isDisabled: !1,
            isRequired: c.is("[required]"),
            isInvalid: !1,
            isLocked: !1,
            isFocused: !1,
            isInputHidden: !1,
            isSetup: !1,
            isShiftDown: !1,
            isCmdDown: !1,
            isCtrlDown: !1,
            ignoreFocus: !1,
            ignoreBlur: !1,
            ignoreHover: !1,
            hasOptions: !1,
            currentResults: null,
            lastValue: "",
            caretPos: 0,
            loading: 0,
            loadedSearches: {},
            $activeOption: null,
            $activeItems: [],
            optgroups: {},
            options: {},
            userOptions: {},
            items: [],
            renderCache: {},
            onSearchChange: null === d.loadThrottle ? g.onSearchChange : E(g.onSearchChange, d.loadThrottle)
        }), g.sifter = new b(this.options, {
            diacritics: d.diacritics
        }), a.extend(g.options, C(d.valueField, d.options)), delete g.settings.options, 
        a.extend(g.optgroups, C(d.optgroupValueField, d.optgroups)), delete g.settings.optgroups, 
        g.settings.mode = g.settings.mode || (1 === g.settings.maxItems ? "single" : "multi"), 
        "boolean" != typeof g.settings.hideSelected && (g.settings.hideSelected = "multi" === g.settings.mode), 
        g.settings.create && (g.canCreate = function(a) {
            var b = g.settings.createFilter;
            return !(!a.length || "function" == typeof b && !b.apply(g, [ a ]) || "string" == typeof b && !new RegExp(b).test(a) || b instanceof RegExp && !b.test(a));
        }), g.initializePlugins(g.settings.plugins), g.setupCallbacks(), g.setupTemplates(), 
        g.setup();
    };
    return e.mixin(L), c.mixin(L), a.extend(L.prototype, {
        setup: function() {
            var b, c, d, e, g, h, i, j, k, l, m = this, n = m.settings, o = m.eventNS, p = a(window), q = a(document), u = m.$input;
            i = m.settings.mode, j = u.attr("tabindex") || "", k = u.attr("class") || "", b = a("<div>").addClass(n.wrapperClass).addClass(k).addClass(i), 
            c = a("<div>").addClass(n.inputClass).addClass("items").appendTo(b), d = a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex", j), 
            h = a(n.dropdownParent || b), e = a("<div>").addClass(n.dropdownClass).addClass(k).addClass(i).hide().appendTo(h), 
            g = a("<div>").addClass(n.dropdownContentClass).appendTo(e), b.css({
                width: u[0].style.width
            }), m.plugins.names.length && (l = "plugin-" + m.plugins.names.join(" plugin-"), 
            b.addClass(l), e.addClass(l)), (null === n.maxItems || n.maxItems > 1) && m.tagType === v && u.attr("multiple", "multiple"), 
            m.settings.placeholder && d.attr("placeholder", n.placeholder), u.attr("autocorrect") && d.attr("autocorrect", u.attr("autocorrect")), 
            u.attr("autocapitalize") && d.attr("autocapitalize", u.attr("autocapitalize")), 
            m.$wrapper = b, m.$control = c, m.$control_input = d, m.$dropdown = e, m.$dropdown_content = g, 
            e.on("mouseenter", "[data-selectable]", function() {
                return m.onOptionHover.apply(m, arguments);
            }), e.on("mousedown", "[data-selectable]", function() {
                return m.onOptionSelect.apply(m, arguments);
            }), G(c, "mousedown", "*:not(input)", function() {
                return m.onItemSelect.apply(m, arguments);
            }), K(d), c.on({
                mousedown: function() {
                    return m.onMouseDown.apply(m, arguments);
                },
                click: function() {
                    return m.onClick.apply(m, arguments);
                }
            }), d.on({
                mousedown: function(a) {
                    a.stopPropagation();
                },
                keydown: function() {
                    return m.onKeyDown.apply(m, arguments);
                },
                keyup: function() {
                    return m.onKeyUp.apply(m, arguments);
                },
                keypress: function() {
                    return m.onKeyPress.apply(m, arguments);
                },
                resize: function() {
                    m.positionDropdown.apply(m, []);
                },
                blur: function() {
                    return m.onBlur.apply(m, arguments);
                },
                focus: function() {
                    return m.ignoreBlur = !1, m.onFocus.apply(m, arguments);
                },
                paste: function() {
                    return m.onPaste.apply(m, arguments);
                }
            }), q.on("keydown" + o, function(a) {
                m.isCmdDown = a[f ? "metaKey" : "ctrlKey"], m.isCtrlDown = a[f ? "altKey" : "ctrlKey"], 
                m.isShiftDown = a.shiftKey;
            }), q.on("keyup" + o, function(a) {
                a.keyCode === t && (m.isCtrlDown = !1), a.keyCode === r && (m.isShiftDown = !1), 
                a.keyCode === s && (m.isCmdDown = !1);
            }), q.on("mousedown" + o, function(a) {
                if (m.isFocused) {
                    if (a.target === m.$dropdown[0] || a.target.parentNode === m.$dropdown[0]) return !1;
                    m.$control.has(a.target).length || a.target === m.$control[0] || m.blur();
                }
            }), p.on([ "scroll" + o, "resize" + o ].join(" "), function() {
                m.isOpen && m.positionDropdown.apply(m, arguments);
            }), p.on("mousemove" + o, function() {
                m.ignoreHover = !1;
            }), this.revertSettings = {
                $children: u.children().detach(),
                tabindex: u.attr("tabindex")
            }, u.attr("tabindex", -1).hide().after(m.$wrapper), a.isArray(n.items) && (m.setValue(n.items), 
            delete n.items), u[0].validity && u.on("invalid" + o, function(a) {
                a.preventDefault(), m.isInvalid = !0, m.refreshState();
            }), m.updateOriginalInput(), m.refreshItems(), m.refreshState(), m.updatePlaceholder(), 
            m.isSetup = !0, u.is(":disabled") && m.disable(), m.on("change", this.onChange), 
            u.data("selectize", m), u.addClass("selectized"), m.trigger("initialize"), n.preload === !0 && m.onSearchChange("");
        },
        setupTemplates: function() {
            var b = this, c = b.settings.labelField, d = b.settings.optgroupLabelField, e = {
                optgroup: function(a) {
                    return '<div class="optgroup">' + a.html + "</div>";
                },
                optgroup_header: function(a, b) {
                    return '<div class="optgroup-header">' + b(a[d]) + "</div>";
                },
                option: function(a, b) {
                    return '<div class="option">' + b(a[c]) + "</div>";
                },
                item: function(a, b) {
                    return '<div class="item">' + b(a[c]) + "</div>";
                },
                option_create: function(a, b) {
                    return '<div class="create">Add <strong>' + b(a.input) + "</strong>&hellip;</div>";
                }
            };
            b.settings.render = a.extend({}, e, b.settings.render);
        },
        setupCallbacks: function() {
            var a, b, c = {
                initialize: "onInitialize",
                change: "onChange",
                item_add: "onItemAdd",
                item_remove: "onItemRemove",
                clear: "onClear",
                option_add: "onOptionAdd",
                option_remove: "onOptionRemove",
                option_clear: "onOptionClear",
                dropdown_open: "onDropdownOpen",
                dropdown_close: "onDropdownClose",
                type: "onType"
            };
            for (a in c) c.hasOwnProperty(a) && (b = this.settings[c[a]], b && this.on(a, b));
        },
        onClick: function(a) {
            var b = this;
            b.isFocused || (b.focus(), a.preventDefault());
        },
        onMouseDown: function(b) {
            {
                var c = this, d = b.isDefaultPrevented();
                a(b.target);
            }
            if (c.isFocused) {
                if (b.target !== c.$control_input[0]) return "single" === c.settings.mode ? c.isOpen ? c.close() : c.open() : d || c.setActiveItem(null), 
                !1;
            } else d || window.setTimeout(function() {
                c.focus();
            }, 0);
        },
        onChange: function() {
            this.$input.trigger("change");
        },
        onPaste: function(a) {
            var b = this;
            (b.isFull() || b.isInputHidden || b.isLocked) && a.preventDefault();
        },
        onKeyPress: function(a) {
            if (this.isLocked) return a && a.preventDefault();
            var b = String.fromCharCode(a.keyCode || a.which);
            return this.settings.create && b === this.settings.delimiter ? (this.createItem(), 
            a.preventDefault(), !1) : void 0;
        },
        onKeyDown: function(a) {
            var b = (a.target === this.$control_input[0], this);
            if (b.isLocked) return void (a.keyCode !== u && a.preventDefault());
            switch (a.keyCode) {
              case g:
                if (b.isCmdDown) return void b.selectAll();
                break;

              case i:
                return void b.close();

              case o:
                if (!a.ctrlKey || a.altKey) break;

              case n:
                if (!b.isOpen && b.hasOptions) b.open(); else if (b.$activeOption) {
                    b.ignoreHover = !0;
                    var c = b.getAdjacentOption(b.$activeOption, 1);
                    c.length && b.setActiveOption(c, !0, !0);
                }
                return void a.preventDefault();

              case l:
                if (!a.ctrlKey || a.altKey) break;

              case k:
                if (b.$activeOption) {
                    b.ignoreHover = !0;
                    var d = b.getAdjacentOption(b.$activeOption, -1);
                    d.length && b.setActiveOption(d, !0, !0);
                }
                return void a.preventDefault();

              case h:
                return b.isOpen && b.$activeOption && b.onOptionSelect({
                    currentTarget: b.$activeOption
                }), void a.preventDefault();

              case j:
                return void b.advanceSelection(-1, a);

              case m:
                return void b.advanceSelection(1, a);

              case u:
                return b.settings.selectOnTab && b.isOpen && b.$activeOption && (b.onOptionSelect({
                    currentTarget: b.$activeOption
                }), a.preventDefault()), void (b.settings.create && b.createItem() && a.preventDefault());

              case p:
              case q:
                return void b.deleteSelection(a);
            }
            return !b.isFull() && !b.isInputHidden || (f ? a.metaKey : a.ctrlKey) ? void 0 : void a.preventDefault();
        },
        onKeyUp: function(a) {
            var b = this;
            if (b.isLocked) return a && a.preventDefault();
            var c = b.$control_input.val() || "";
            b.lastValue !== c && (b.lastValue = c, b.onSearchChange(c), b.refreshOptions(), 
            b.trigger("type", c));
        },
        onSearchChange: function(a) {
            var b = this, c = b.settings.load;
            c && (b.loadedSearches.hasOwnProperty(a) || (b.loadedSearches[a] = !0, b.load(function(d) {
                c.apply(b, [ a, d ]);
            })));
        },
        onFocus: function(a) {
            var b = this;
            return b.isFocused = !0, b.isDisabled ? (b.blur(), a && a.preventDefault(), !1) : void (b.ignoreFocus || ("focus" === b.settings.preload && b.onSearchChange(""), 
            b.$activeItems.length || (b.showInput(), b.setActiveItem(null), b.refreshOptions(!!b.settings.openOnFocus)), 
            b.refreshState()));
        },
        onBlur: function(a) {
            var b = this;
            if (b.isFocused = !1, !b.ignoreFocus) {
                if (!b.ignoreBlur && document.activeElement === b.$dropdown_content[0]) return b.ignoreBlur = !0, 
                void b.onFocus(a);
                b.settings.create && b.settings.createOnBlur && b.createItem(!1), b.close(), b.setTextboxValue(""), 
                b.setActiveItem(null), b.setActiveOption(null), b.setCaret(b.items.length), b.refreshState();
            }
        },
        onOptionHover: function(a) {
            this.ignoreHover || this.setActiveOption(a.currentTarget, !1);
        },
        onOptionSelect: function(b) {
            var c, d, e = this;
            b.preventDefault && (b.preventDefault(), b.stopPropagation()), d = a(b.currentTarget), 
            d.hasClass("create") ? e.createItem() : (c = d.attr("data-value"), "undefined" != typeof c && (e.lastQuery = null, 
            e.setTextboxValue(""), e.addItem(c), !e.settings.hideSelected && b.type && /mouse/.test(b.type) && e.setActiveOption(e.getOption(c))));
        },
        onItemSelect: function(a) {
            var b = this;
            b.isLocked || "multi" === b.settings.mode && (a.preventDefault(), b.setActiveItem(a.currentTarget, a));
        },
        load: function(a) {
            var b = this, c = b.$wrapper.addClass("loading");
            b.loading++, a.apply(b, [ function(a) {
                b.loading = Math.max(b.loading - 1, 0), a && a.length && (b.addOption(a), b.refreshOptions(b.isFocused && !b.isInputHidden)), 
                b.loading || c.removeClass("loading"), b.trigger("load", a);
            } ]);
        },
        setTextboxValue: function(a) {
            var b = this.$control_input, c = b.val() !== a;
            c && (b.val(a).triggerHandler("update"), this.lastValue = a);
        },
        getValue: function() {
            return this.tagType === v && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter);
        },
        setValue: function(a) {
            F(this, [ "change" ], function() {
                this.clear(), this.addItems(a);
            });
        },
        setActiveItem: function(b, c) {
            var d, e, f, g, h, i, j, k, l = this;
            if ("single" !== l.settings.mode) {
                if (b = a(b), !b.length) return a(l.$activeItems).removeClass("active"), l.$activeItems = [], 
                void (l.isFocused && l.showInput());
                if (d = c && c.type.toLowerCase(), "mousedown" === d && l.isShiftDown && l.$activeItems.length) {
                    for (k = l.$control.children(".active:last"), g = Array.prototype.indexOf.apply(l.$control[0].childNodes, [ k[0] ]), 
                    h = Array.prototype.indexOf.apply(l.$control[0].childNodes, [ b[0] ]), g > h && (j = g, 
                    g = h, h = j), e = g; h >= e; e++) i = l.$control[0].childNodes[e], -1 === l.$activeItems.indexOf(i) && (a(i).addClass("active"), 
                    l.$activeItems.push(i));
                    c.preventDefault();
                } else "mousedown" === d && l.isCtrlDown || "keydown" === d && this.isShiftDown ? b.hasClass("active") ? (f = l.$activeItems.indexOf(b[0]), 
                l.$activeItems.splice(f, 1), b.removeClass("active")) : l.$activeItems.push(b.addClass("active")[0]) : (a(l.$activeItems).removeClass("active"), 
                l.$activeItems = [ b.addClass("active")[0] ]);
                l.hideInput(), this.isFocused || l.focus();
            }
        },
        setActiveOption: function(b, c, d) {
            var e, f, g, h, i, j = this;
            j.$activeOption && j.$activeOption.removeClass("active"), j.$activeOption = null, 
            b = a(b), b.length && (j.$activeOption = b.addClass("active"), (c || !x(c)) && (e = j.$dropdown_content.height(), 
            f = j.$activeOption.outerHeight(!0), c = j.$dropdown_content.scrollTop() || 0, g = j.$activeOption.offset().top - j.$dropdown_content.offset().top + c, 
            h = g, i = g - e + f, g + f > e + c ? j.$dropdown_content.stop().animate({
                scrollTop: i
            }, d ? j.settings.scrollDuration : 0) : c > g && j.$dropdown_content.stop().animate({
                scrollTop: h
            }, d ? j.settings.scrollDuration : 0)));
        },
        selectAll: function() {
            var a = this;
            "single" !== a.settings.mode && (a.$activeItems = Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")), 
            a.$activeItems.length && (a.hideInput(), a.close()), a.focus());
        },
        hideInput: function() {
            var a = this;
            a.setTextboxValue(""), a.$control_input.css({
                opacity: 0,
                position: "absolute",
                left: a.rtl ? 1e4 : -1e4
            }), a.isInputHidden = !0;
        },
        showInput: function() {
            this.$control_input.css({
                opacity: 1,
                position: "relative",
                left: 0
            }), this.isInputHidden = !1;
        },
        focus: function() {
            var a = this;
            a.isDisabled || (a.ignoreFocus = !0, a.$control_input[0].focus(), window.setTimeout(function() {
                a.ignoreFocus = !1, a.onFocus();
            }, 0));
        },
        blur: function() {
            this.$control_input.trigger("blur");
        },
        getScoreFunction: function(a) {
            return this.sifter.getScoreFunction(a, this.getSearchOptions());
        },
        getSearchOptions: function() {
            var a = this.settings, b = a.sortField;
            return "string" == typeof b && (b = {
                field: b
            }), {
                fields: a.searchField,
                conjunction: a.searchConjunction,
                sort: b
            };
        },
        search: function(b) {
            var c, d, e, f = this, g = f.settings, h = this.getSearchOptions();
            if (g.score && (e = f.settings.score.apply(this, [ b ]), "function" != typeof e)) throw new Error('Selectize "score" setting must be a function that returns a function');
            if (b !== f.lastQuery ? (f.lastQuery = b, d = f.sifter.search(b, a.extend(h, {
                score: e
            })), f.currentResults = d) : d = a.extend(!0, {}, f.currentResults), g.hideSelected) for (c = d.items.length - 1; c >= 0; c--) -1 !== f.items.indexOf(y(d.items[c].id)) && d.items.splice(c, 1);
            return d;
        },
        refreshOptions: function(b) {
            var c, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
            "undefined" == typeof b && (b = !0);
            var t = this, u = t.$control_input.val(), v = t.search(u), w = t.$dropdown_content, x = t.$activeOption && y(t.$activeOption.attr("data-value"));
            if (g = v.items.length, "number" == typeof t.settings.maxOptions && (g = Math.min(g, t.settings.maxOptions)), 
            h = {}, t.settings.optgroupOrder) for (i = t.settings.optgroupOrder, c = 0; c < i.length; c++) h[i[c]] = []; else i = [];
            for (c = 0; g > c; c++) for (j = t.options[v.items[c].id], k = t.render("option", j), 
            l = j[t.settings.optgroupField] || "", m = a.isArray(l) ? l : [ l ], e = 0, f = m && m.length; f > e; e++) l = m[e], 
            t.optgroups.hasOwnProperty(l) || (l = ""), h.hasOwnProperty(l) || (h[l] = [], i.push(l)), 
            h[l].push(k);
            for (n = [], c = 0, g = i.length; g > c; c++) l = i[c], t.optgroups.hasOwnProperty(l) && h[l].length ? (o = t.render("optgroup_header", t.optgroups[l]) || "", 
            o += h[l].join(""), n.push(t.render("optgroup", a.extend({}, t.optgroups[l], {
                html: o
            })))) : n.push(h[l].join(""));
            if (w.html(n.join("")), t.settings.highlight && v.query.length && v.tokens.length) for (c = 0, 
            g = v.tokens.length; g > c; c++) d(w, v.tokens[c].regex);
            if (!t.settings.hideSelected) for (c = 0, g = t.items.length; g > c; c++) t.getOption(t.items[c]).addClass("selected");
            p = t.settings.create && t.canCreate(v.query), p && (w.prepend(t.render("option_create", {
                input: u
            })), s = a(w[0].childNodes[0])), t.hasOptions = v.items.length > 0 || p, t.hasOptions ? (v.items.length > 0 ? (r = x && t.getOption(x), 
            r && r.length ? q = r : "single" === t.settings.mode && t.items.length && (q = t.getOption(t.items[0])), 
            q && q.length || (q = s && !t.settings.addPrecedence ? t.getAdjacentOption(s, 1) : w.find("[data-selectable]:first"))) : q = s, 
            t.setActiveOption(q), b && !t.isOpen && t.open()) : (t.setActiveOption(null), b && t.isOpen && t.close());
        },
        addOption: function(b) {
            var c, d, e, f = this;
            if (a.isArray(b)) for (c = 0, d = b.length; d > c; c++) f.addOption(b[c]); else e = y(b[f.settings.valueField]), 
            "string" != typeof e || f.options.hasOwnProperty(e) || (f.userOptions[e] = !0, f.options[e] = b, 
            f.lastQuery = null, f.trigger("option_add", e, b));
        },
        addOptionGroup: function(a, b) {
            this.optgroups[a] = b, this.trigger("optgroup_add", a, b);
        },
        updateOption: function(b, c) {
            var d, e, f, g, h, i, j = this;
            if (b = y(b), f = y(c[j.settings.valueField]), null !== b && j.options.hasOwnProperty(b)) {
                if ("string" != typeof f) throw new Error("Value must be set in option data");
                f !== b && (delete j.options[b], g = j.items.indexOf(b), -1 !== g && j.items.splice(g, 1, f)), 
                j.options[f] = c, h = j.renderCache.item, i = j.renderCache.option, h && (delete h[b], 
                delete h[f]), i && (delete i[b], delete i[f]), -1 !== j.items.indexOf(f) && (d = j.getItem(b), 
                e = a(j.render("item", c)), d.hasClass("active") && e.addClass("active"), d.replaceWith(e)), 
                j.isOpen && j.refreshOptions(!1);
            }
        },
        removeOption: function(a) {
            var b = this;
            a = y(a);
            var c = b.renderCache.item, d = b.renderCache.option;
            c && delete c[a], d && delete d[a], delete b.userOptions[a], delete b.options[a], 
            b.lastQuery = null, b.trigger("option_remove", a), b.removeItem(a);
        },
        clearOptions: function() {
            var a = this;
            a.loadedSearches = {}, a.userOptions = {}, a.renderCache = {}, a.options = a.sifter.items = {}, 
            a.lastQuery = null, a.trigger("option_clear"), a.clear();
        },
        getOption: function(a) {
            return this.getElementWithValue(a, this.$dropdown_content.find("[data-selectable]"));
        },
        getAdjacentOption: function(b, c) {
            var d = this.$dropdown.find("[data-selectable]"), e = d.index(b) + c;
            return e >= 0 && e < d.length ? d.eq(e) : a();
        },
        getElementWithValue: function(b, c) {
            if (b = y(b), "undefined" != typeof b && null !== b) for (var d = 0, e = c.length; e > d; d++) if (c[d].getAttribute("data-value") === b) return a(c[d]);
            return a();
        },
        getItem: function(a) {
            return this.getElementWithValue(a, this.$control.children());
        },
        addItems: function(b) {
            for (var c = a.isArray(b) ? b : [ b ], d = 0, e = c.length; e > d; d++) this.isPending = e - 1 > d, 
            this.addItem(c[d]);
        },
        addItem: function(b) {
            F(this, [ "change" ], function() {
                var c, d, e, f, g, h = this, i = h.settings.mode;
                return b = y(b), -1 !== h.items.indexOf(b) ? void ("single" === i && h.close()) : void (h.options.hasOwnProperty(b) && ("single" === i && h.clear(), 
                "multi" === i && h.isFull() || (c = a(h.render("item", h.options[b])), g = h.isFull(), 
                h.items.splice(h.caretPos, 0, b), h.insertAtCaret(c), (!h.isPending || !g && h.isFull()) && h.refreshState(), 
                h.isSetup && (e = h.$dropdown_content.find("[data-selectable]"), h.isPending || (d = h.getOption(b), 
                f = h.getAdjacentOption(d, 1).attr("data-value"), h.refreshOptions(h.isFocused && "single" !== i), 
                f && h.setActiveOption(h.getOption(f))), !e.length || h.isFull() ? h.close() : h.positionDropdown(), 
                h.updatePlaceholder(), h.trigger("item_add", b, c), h.updateOriginalInput()))));
            });
        },
        removeItem: function(a) {
            var b, c, d, e = this;
            b = "object" == typeof a ? a : e.getItem(a), a = y(b.attr("data-value")), c = e.items.indexOf(a), 
            -1 !== c && (b.remove(), b.hasClass("active") && (d = e.$activeItems.indexOf(b[0]), 
            e.$activeItems.splice(d, 1)), e.items.splice(c, 1), e.lastQuery = null, !e.settings.persist && e.userOptions.hasOwnProperty(a) && e.removeOption(a), 
            c < e.caretPos && e.setCaret(e.caretPos - 1), e.refreshState(), e.updatePlaceholder(), 
            e.updateOriginalInput(), e.positionDropdown(), e.trigger("item_remove", a));
        },
        createItem: function(b) {
            var c = this, d = a.trim(c.$control_input.val() || ""), e = c.caretPos;
            if (!c.canCreate(d)) return !1;
            c.lock(), "undefined" == typeof b && (b = !0);
            var f = "function" == typeof c.settings.create ? this.settings.create : function(a) {
                var b = {};
                return b[c.settings.labelField] = a, b[c.settings.valueField] = a, b;
            }, g = D(function(a) {
                if (c.unlock(), a && "object" == typeof a) {
                    var d = y(a[c.settings.valueField]);
                    "string" == typeof d && (c.setTextboxValue(""), c.addOption(a), c.setCaret(e), c.addItem(d), 
                    c.refreshOptions(b && "single" !== c.settings.mode));
                }
            }), h = f.apply(this, [ d, g ]);
            return "undefined" != typeof h && g(h), !0;
        },
        refreshItems: function() {
            if (this.lastQuery = null, this.isSetup) for (var a = 0; a < this.items.length; a++) this.addItem(this.items);
            this.refreshState(), this.updateOriginalInput();
        },
        refreshState: function() {
            var a, b = this;
            b.isRequired && (b.items.length && (b.isInvalid = !1), b.$control_input.prop("required", a)), 
            b.refreshClasses();
        },
        refreshClasses: function() {
            var b = this, c = b.isFull(), d = b.isLocked;
            b.$wrapper.toggleClass("rtl", b.rtl), b.$control.toggleClass("focus", b.isFocused).toggleClass("disabled", b.isDisabled).toggleClass("required", b.isRequired).toggleClass("invalid", b.isInvalid).toggleClass("locked", d).toggleClass("full", c).toggleClass("not-full", !c).toggleClass("input-active", b.isFocused && !b.isInputHidden).toggleClass("dropdown-active", b.isOpen).toggleClass("has-options", !a.isEmptyObject(b.options)).toggleClass("has-items", b.items.length > 0), 
            b.$control_input.data("grow", !c && !d);
        },
        isFull: function() {
            return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems;
        },
        updateOriginalInput: function() {
            var a, b, c, d = this;
            if (d.tagType === v) {
                for (c = [], a = 0, b = d.items.length; b > a; a++) c.push('<option value="' + z(d.items[a]) + '" selected="selected"></option>');
                c.length || this.$input.attr("multiple") || c.push('<option value="" selected="selected"></option>'), 
                d.$input.html(c.join(""));
            } else d.$input.val(d.getValue()), d.$input.attr("value", d.$input.val());
            d.isSetup && d.trigger("change", d.$input.val());
        },
        updatePlaceholder: function() {
            if (this.settings.placeholder) {
                var a = this.$control_input;
                this.items.length ? a.removeAttr("placeholder") : a.attr("placeholder", this.settings.placeholder), 
                a.triggerHandler("update", {
                    force: !0
                });
            }
        },
        open: function() {
            var a = this;
            a.isLocked || a.isOpen || "multi" === a.settings.mode && a.isFull() || (a.focus(), 
            a.isOpen = !0, a.refreshState(), a.$dropdown.css({
                visibility: "hidden",
                display: "block"
            }), a.positionDropdown(), a.$dropdown.css({
                visibility: "visible"
            }), a.trigger("dropdown_open", a.$dropdown));
        },
        close: function() {
            var a = this, b = a.isOpen;
            "single" === a.settings.mode && a.items.length && a.hideInput(), a.isOpen = !1, 
            a.$dropdown.hide(), a.setActiveOption(null), a.refreshState(), b && a.trigger("dropdown_close", a.$dropdown);
        },
        positionDropdown: function() {
            var a = this.$control, b = "body" === this.settings.dropdownParent ? a.offset() : a.position();
            b.top += a.outerHeight(!0), this.$dropdown.css({
                width: a.outerWidth(),
                top: b.top,
                left: b.left
            });
        },
        clear: function() {
            var a = this;
            a.items.length && (a.$control.children(":not(input)").remove(), a.items = [], a.lastQuery = null, 
            a.setCaret(0), a.setActiveItem(null), a.updatePlaceholder(), a.updateOriginalInput(), 
            a.refreshState(), a.showInput(), a.trigger("clear"));
        },
        insertAtCaret: function(b) {
            var c = Math.min(this.caretPos, this.items.length);
            0 === c ? this.$control.prepend(b) : a(this.$control[0].childNodes[c]).before(b), 
            this.setCaret(c + 1);
        },
        deleteSelection: function(b) {
            var c, d, e, f, g, h, i, j, k, l = this;
            if (e = b && b.keyCode === p ? -1 : 1, f = H(l.$control_input[0]), l.$activeOption && !l.settings.hideSelected && (i = l.getAdjacentOption(l.$activeOption, -1).attr("data-value")), 
            g = [], l.$activeItems.length) {
                for (k = l.$control.children(".active:" + (e > 0 ? "last" : "first")), h = l.$control.children(":not(input)").index(k), 
                e > 0 && h++, c = 0, d = l.$activeItems.length; d > c; c++) g.push(a(l.$activeItems[c]).attr("data-value"));
                b && (b.preventDefault(), b.stopPropagation());
            } else (l.isFocused || "single" === l.settings.mode) && l.items.length && (0 > e && 0 === f.start && 0 === f.length ? g.push(l.items[l.caretPos - 1]) : e > 0 && f.start === l.$control_input.val().length && g.push(l.items[l.caretPos]));
            if (!g.length || "function" == typeof l.settings.onDelete && l.settings.onDelete.apply(l, [ g ]) === !1) return !1;
            for ("undefined" != typeof h && l.setCaret(h); g.length; ) l.removeItem(g.pop());
            return l.showInput(), l.positionDropdown(), l.refreshOptions(!0), i && (j = l.getOption(i), 
            j.length && l.setActiveOption(j)), !0;
        },
        advanceSelection: function(a, b) {
            var c, d, e, f, g, h, i = this;
            0 !== a && (i.rtl && (a *= -1), c = a > 0 ? "last" : "first", d = H(i.$control_input[0]), 
            i.isFocused && !i.isInputHidden ? (f = i.$control_input.val().length, g = 0 > a ? 0 === d.start && 0 === d.length : d.start === f, 
            g && !f && i.advanceCaret(a, b)) : (h = i.$control.children(".active:" + c), h.length && (e = i.$control.children(":not(input)").index(h), 
            i.setActiveItem(null), i.setCaret(a > 0 ? e + 1 : e))));
        },
        advanceCaret: function(a, b) {
            var c, d, e = this;
            0 !== a && (c = a > 0 ? "next" : "prev", e.isShiftDown ? (d = e.$control_input[c](), 
            d.length && (e.hideInput(), e.setActiveItem(d), b && b.preventDefault())) : e.setCaret(e.caretPos + a));
        },
        setCaret: function(b) {
            var c = this;
            if (b = "single" === c.settings.mode ? c.items.length : Math.max(0, Math.min(c.items.length, b)), 
            !c.isPending) {
                var d, e, f, g;
                for (f = c.$control.children(":not(input)"), d = 0, e = f.length; e > d; d++) g = a(f[d]).detach(), 
                b > d ? c.$control_input.before(g) : c.$control.append(g);
            }
            c.caretPos = b;
        },
        lock: function() {
            this.close(), this.isLocked = !0, this.refreshState();
        },
        unlock: function() {
            this.isLocked = !1, this.refreshState();
        },
        disable: function() {
            var a = this;
            a.$input.prop("disabled", !0), a.isDisabled = !0, a.lock();
        },
        enable: function() {
            var a = this;
            a.$input.prop("disabled", !1), a.isDisabled = !1, a.unlock();
        },
        destroy: function() {
            var b = this, c = b.eventNS, d = b.revertSettings;
            b.trigger("destroy"), b.off(), b.$wrapper.remove(), b.$dropdown.remove(), b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({
                tabindex: d.tabindex
            }).show(), b.$control_input.removeData("grow"), b.$input.removeData("selectize"), 
            a(window).off(c), a(document).off(c), a(document.body).off(c), delete b.$input[0].selectize;
        },
        render: function(a, b) {
            var c, d, e = "", f = !1, g = this, h = /^[\t ]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
            return ("option" === a || "item" === a) && (c = y(b[g.settings.valueField]), f = !!c), 
            f && (x(g.renderCache[a]) || (g.renderCache[a] = {}), g.renderCache[a].hasOwnProperty(c)) ? g.renderCache[a][c] : (e = g.settings.render[a].apply(this, [ b, z ]), 
            ("option" === a || "option_create" === a) && (e = e.replace(h, "<$1 data-selectable")), 
            "optgroup" === a && (d = b[g.settings.optgroupValueField] || "", e = e.replace(h, '<$1 data-group="' + A(z(d)) + '"')), 
            ("option" === a || "item" === a) && (e = e.replace(h, '<$1 data-value="' + A(z(c || "")) + '"')), 
            f && (g.renderCache[a][c] = e), e);
        },
        clearCache: function(a) {
            var b = this;
            "undefined" == typeof a ? b.renderCache = {} : delete b.renderCache[a];
        }
    }), L.count = 0, L.defaults = {
        plugins: [],
        delimiter: ",",
        persist: !0,
        diacritics: !0,
        create: !1,
        createOnBlur: !1,
        createFilter: null,
        highlight: !0,
        openOnFocus: !0,
        maxOptions: 1e3,
        maxItems: null,
        hideSelected: null,
        addPrecedence: !1,
        selectOnTab: !1,
        preload: !1,
        allowEmptyOption: !1,
        scrollDuration: 60,
        loadThrottle: 300,
        dataAttr: "data-data",
        optgroupField: "optgroup",
        valueField: "value",
        labelField: "text",
        optgroupLabelField: "label",
        optgroupValueField: "value",
        optgroupOrder: null,
        sortField: "$order",
        searchField: [ "text" ],
        searchConjunction: "and",
        mode: null,
        wrapperClass: "selectize-control",
        inputClass: "selectize-input",
        dropdownClass: "selectize-dropdown",
        dropdownContentClass: "selectize-dropdown-content",
        dropdownParent: null,
        render: {}
    }, a.fn.selectize = function(b) {
        var c = a.fn.selectize.defaults, d = a.extend({}, c, b), e = d.dataAttr, f = d.labelField, g = d.valueField, h = d.optgroupField, i = d.optgroupLabelField, j = d.optgroupValueField, k = function(b, c) {
            var e, h, i, j, k = a.trim(b.val() || "");
            if (d.allowEmptyOption || k.length) {
                for (i = k.split(d.delimiter), e = 0, h = i.length; h > e; e++) j = {}, j[f] = i[e], 
                j[g] = i[e], c.options[i[e]] = j;
                c.items = i;
            }
        }, l = function(b, c) {
            var k, l, m, n, o = 0, p = c.options, q = function(a) {
                var b = e && a.attr(e);
                return "string" == typeof b && b.length ? JSON.parse(b) : null;
            }, r = function(b, e) {
                var i, j;
                if (b = a(b), i = b.attr("value") || "", i.length || d.allowEmptyOption) {
                    if (p.hasOwnProperty(i)) return void (e && (p[i].optgroup ? a.isArray(p[i].optgroup) ? p[i].optgroup.push(e) : p[i].optgroup = [ p[i].optgroup, e ] : p[i].optgroup = e));
                    j = q(b) || {}, j[f] = j[f] || b.text(), j[g] = j[g] || i, j[h] = j[h] || e, j.$order = ++o, 
                    p[i] = j, b.is(":selected") && c.items.push(i);
                }
            }, s = function(b) {
                var d, e, f, g, h;
                for (b = a(b), f = b.attr("label"), f && (g = q(b) || {}, g[i] = f, g[j] = f, c.optgroups[f] = g), 
                h = a("option", b), d = 0, e = h.length; e > d; d++) r(h[d], f);
            };
            for (c.maxItems = b.attr("multiple") ? null : 1, n = b.children(), k = 0, l = n.length; l > k; k++) m = n[k].tagName.toLowerCase(), 
            "optgroup" === m ? s(n[k]) : "option" === m && r(n[k]);
        };
        return this.each(function() {
            if (!this.selectize) {
                var e, f = a(this), g = this.tagName.toLowerCase(), h = f.attr("placeholder") || f.attr("data-placeholder");
                h || d.allowEmptyOption || (h = f.children('option[value=""]').text());
                var i = {
                    placeholder: h,
                    options: {},
                    optgroups: {},
                    items: []
                };
                "select" === g ? l(f, i) : k(f, i), e = new L(f, a.extend(!0, {}, c, i, b));
            }
        });
    }, a.fn.selectize.defaults = L.defaults, L.define("drag_drop", function() {
        if (!a.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
        if ("multi" === this.settings.mode) {
            var b = this;
            b.lock = function() {
                var a = b.lock;
                return function() {
                    var c = b.$control.data("sortable");
                    return c && c.disable(), a.apply(b, arguments);
                };
            }(), b.unlock = function() {
                var a = b.unlock;
                return function() {
                    var c = b.$control.data("sortable");
                    return c && c.enable(), a.apply(b, arguments);
                };
            }(), b.setup = function() {
                var c = b.setup;
                return function() {
                    c.apply(this, arguments);
                    var d = b.$control.sortable({
                        items: "[data-value]",
                        forcePlaceholderSize: !0,
                        disabled: b.isLocked,
                        start: function(a, b) {
                            b.placeholder.css("width", b.helper.css("width")), d.css({
                                overflow: "visible"
                            });
                        },
                        stop: function() {
                            d.css({
                                overflow: "hidden"
                            });
                            var c = b.$activeItems ? b.$activeItems.slice() : null, e = [];
                            d.children("[data-value]").each(function() {
                                e.push(a(this).attr("data-value"));
                            }), b.setValue(e), b.setActiveItem(c);
                        }
                    });
                };
            }();
        }
    }), L.define("dropdown_header", function(b) {
        var c = this;
        b = a.extend({
            title: "Untitled",
            headerClass: "selectize-dropdown-header",
            titleRowClass: "selectize-dropdown-header-title",
            labelClass: "selectize-dropdown-header-label",
            closeClass: "selectize-dropdown-header-close",
            html: function(a) {
                return '<div class="' + a.headerClass + '"><div class="' + a.titleRowClass + '"><span class="' + a.labelClass + '">' + a.title + '</span><a href="javascript:void(0)" class="' + a.closeClass + '">&times;</a></div></div>';
            }
        }, b), c.setup = function() {
            var d = c.setup;
            return function() {
                d.apply(c, arguments), c.$dropdown_header = a(b.html(b)), c.$dropdown.prepend(c.$dropdown_header);
            };
        }();
    }), L.define("optgroup_columns", function(b) {
        var c = this;
        b = a.extend({
            equalizeWidth: !0,
            equalizeHeight: !0
        }, b), this.getAdjacentOption = function(b, c) {
            var d = b.closest("[data-group]").find("[data-selectable]"), e = d.index(b) + c;
            return e >= 0 && e < d.length ? d.eq(e) : a();
        }, this.onKeyDown = function() {
            var a = c.onKeyDown;
            return function(b) {
                var d, e, f, g;
                return !this.isOpen || b.keyCode !== j && b.keyCode !== m ? a.apply(this, arguments) : (c.ignoreHover = !0, 
                g = this.$activeOption.closest("[data-group]"), d = g.find("[data-selectable]").index(this.$activeOption), 
                g = b.keyCode === j ? g.prev("[data-group]") : g.next("[data-group]"), f = g.find("[data-selectable]"), 
                e = f.eq(Math.min(f.length - 1, d)), void (e.length && this.setActiveOption(e)));
            };
        }();
        var d = function() {
            var a, b = d.width, c = document;
            return "undefined" == typeof b && (a = c.createElement("div"), a.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', 
            a = a.firstChild, c.body.appendChild(a), b = d.width = a.offsetWidth - a.clientWidth, 
            c.body.removeChild(a)), b;
        }, e = function() {
            var e, f, g, h, i, j, k;
            if (k = a("[data-group]", c.$dropdown_content), f = k.length, f && c.$dropdown_content.width()) {
                if (b.equalizeHeight) {
                    for (g = 0, e = 0; f > e; e++) g = Math.max(g, k.eq(e).height());
                    k.css({
                        height: g
                    });
                }
                b.equalizeWidth && (j = c.$dropdown_content.innerWidth() - d(), h = Math.round(j / f), 
                k.css({
                    width: h
                }), f > 1 && (i = j - h * (f - 1), k.eq(f - 1).css({
                    width: i
                })));
            }
        };
        (b.equalizeHeight || b.equalizeWidth) && (B.after(this, "positionDropdown", e), 
        B.after(this, "refreshOptions", e));
    }), L.define("remove_button", function(b) {
        if ("single" !== this.settings.mode) {
            b = a.extend({
                label: "&times;",
                title: "Remove",
                className: "remove",
                append: !0
            }, b);
            var c = this, d = '<a href="javascript:void(0)" class="' + b.className + '" tabindex="-1" title="' + z(b.title) + '">' + b.label + "</a>", e = function(a, b) {
                var c = a.search(/(<\/[^>]+>\s*)$/);
                return a.substring(0, c) + b + a.substring(c);
            };
            this.setup = function() {
                var f = c.setup;
                return function() {
                    if (b.append) {
                        var g = c.settings.render.item;
                        c.settings.render.item = function() {
                            return e(g.apply(this, arguments), d);
                        };
                    }
                    f.apply(this, arguments), this.$control.on("click", "." + b.className, function(b) {
                        if (b.preventDefault(), !c.isLocked) {
                            var d = a(b.currentTarget).parent();
                            c.setActiveItem(d), c.deleteSelection() && c.setCaret(c.items.length);
                        }
                    });
                };
            }();
        }
    }), L.define("restore_on_backspace", function(a) {
        var b = this;
        a.text = a.text || function(a) {
            return a[this.settings.labelField];
        }, this.onKeyDown = function() {
            var c = b.onKeyDown;
            return function(b) {
                var d, e;
                return b.keyCode === p && "" === this.$control_input.val() && !this.$activeItems.length && (d = this.caretPos - 1, 
                d >= 0 && d < this.items.length) ? (e = this.options[this.items[d]], this.deleteSelection(b) && (this.setTextboxValue(a.text.apply(this, [ e ])), 
                this.refreshOptions(!0)), void b.preventDefault()) : c.apply(this, arguments);
            };
        }();
    }), L;
}), function(a, b) {
    "use strict";
    "undefined" != typeof module && module.exports ? module.exports = b(require("jquery")(a)) : "function" == typeof define && define.amd ? define("bootstrap-dialog", [ "jquery" ], function(a) {
        return b(a);
    }) : a.BootstrapDialog = b(a.jQuery);
}(this, function(a) {
    "use strict";
    var b = function(c) {
        this.defaultOptions = a.extend(!0, {
            id: b.newGuid(),
            buttons: [],
            data: {},
            onshow: null,
            onshown: null,
            onhide: null,
            onhidden: null
        }, b.defaultOptions), this.indexedButtons = {}, this.registeredButtonHotkeys = {}, 
        this.draggableData = {
            isMouseDown: !1,
            mouseOffset: {}
        }, this.realized = !1, this.opened = !1, this.initOptions(c), this.holdThisInstance();
    };
    return b.NAMESPACE = "bootstrap-dialog", b.TYPE_DEFAULT = "type-default", b.TYPE_INFO = "type-info", 
    b.TYPE_PRIMARY = "type-primary", b.TYPE_SUCCESS = "type-success", b.TYPE_WARNING = "type-warning", 
    b.TYPE_DANGER = "type-danger", b.DEFAULT_TEXTS = {}, b.DEFAULT_TEXTS[b.TYPE_DEFAULT] = "Information", 
    b.DEFAULT_TEXTS[b.TYPE_INFO] = "Information", b.DEFAULT_TEXTS[b.TYPE_PRIMARY] = "Information", 
    b.DEFAULT_TEXTS[b.TYPE_SUCCESS] = "Success", b.DEFAULT_TEXTS[b.TYPE_WARNING] = "Warning", 
    b.DEFAULT_TEXTS[b.TYPE_DANGER] = "Danger", b.SIZE_NORMAL = "size-normal", b.SIZE_LARGE = "size-large", 
    b.BUTTON_SIZES = {}, b.BUTTON_SIZES[b.SIZE_NORMAL] = "", b.BUTTON_SIZES[b.SIZE_LARGE] = "btn-lg", 
    b.ICON_SPINNER = "glyphicon glyphicon-asterisk", b.ZINDEX_BACKDROP = 1040, b.ZINDEX_MODAL = 1050, 
    b.defaultOptions = {
        type: b.TYPE_PRIMARY,
        size: b.SIZE_NORMAL,
        cssClass: "",
        title: null,
        message: null,
        nl2br: !0,
        closable: !0,
        closeByBackdrop: !0,
        closeByKeyboard: !0,
        spinicon: b.ICON_SPINNER,
        autodestroy: !0,
        draggable: !1,
        animate: !0
    }, b.configDefaultOptions = function(c) {
        b.defaultOptions = a.extend(!0, b.defaultOptions, c);
    }, b.dialogs = {}, b.openAll = function() {
        a.each(b.dialogs, function(a, b) {
            b.open();
        });
    }, b.closeAll = function() {
        a.each(b.dialogs, function(a, b) {
            b.close();
        });
    }, b.moveFocus = function() {
        var c = null;
        a.each(b.dialogs, function(a, b) {
            c = b;
        }), null !== c && c.isRealized() && c.getModal().focus();
    }, b.showScrollbar = function() {
        var c = null;
        if (a.each(b.dialogs, function(a, b) {
            c = b;
        }), null !== c && c.isRealized() && c.isOpened()) {
            var d = c.getModal().data("bs.modal");
            d.checkScrollbar(), a("body").addClass("modal-open"), d.setScrollbar();
        }
    }, b.prototype = {
        constructor: b,
        initOptions: function(b) {
            return this.options = a.extend(!0, this.defaultOptions, b), this;
        },
        holdThisInstance: function() {
            return b.dialogs[this.getId()] = this, this;
        },
        initModalStuff: function() {
            return this.setModal(this.createModal()).setModalDialog(this.createModalDialog()).setModalContent(this.createModalContent()).setModalHeader(this.createModalHeader()).setModalBody(this.createModalBody()).setModalFooter(this.createModalFooter()), 
            this.getModal().append(this.getModalDialog()), this.getModalDialog().append(this.getModalContent()), 
            this.getModalContent().append(this.getModalHeader()).append(this.getModalBody()).append(this.getModalFooter()), 
            this;
        },
        createModal: function() {
            var b = a('<div class="modal" tabindex="-1"></div>');
            return b.prop("id", this.getId()), b;
        },
        getModal: function() {
            return this.$modal;
        },
        setModal: function(a) {
            return this.$modal = a, this;
        },
        createModalDialog: function() {
            return a('<div class="modal-dialog"></div>');
        },
        getModalDialog: function() {
            return this.$modalDialog;
        },
        setModalDialog: function(a) {
            return this.$modalDialog = a, this;
        },
        createModalContent: function() {
            return a('<div class="modal-content"></div>');
        },
        getModalContent: function() {
            return this.$modalContent;
        },
        setModalContent: function(a) {
            return this.$modalContent = a, this;
        },
        createModalHeader: function() {
            return a('<div class="modal-header"></div>');
        },
        getModalHeader: function() {
            return this.$modalHeader;
        },
        setModalHeader: function(a) {
            return this.$modalHeader = a, this;
        },
        createModalBody: function() {
            return a('<div class="modal-body"></div>');
        },
        getModalBody: function() {
            return this.$modalBody;
        },
        setModalBody: function(a) {
            return this.$modalBody = a, this;
        },
        createModalFooter: function() {
            return a('<div class="modal-footer"></div>');
        },
        getModalFooter: function() {
            return this.$modalFooter;
        },
        setModalFooter: function(a) {
            return this.$modalFooter = a, this;
        },
        createDynamicContent: function(a) {
            var b = null;
            return b = "function" == typeof a ? a.call(a, this) : a, "string" == typeof b && (b = this.formatStringContent(b)), 
            b;
        },
        formatStringContent: function(a) {
            return this.options.nl2br ? a.replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />") : a;
        },
        setData: function(a, b) {
            return this.options.data[a] = b, this;
        },
        getData: function(a) {
            return this.options.data[a];
        },
        setId: function(a) {
            return this.options.id = a, this;
        },
        getId: function() {
            return this.options.id;
        },
        getType: function() {
            return this.options.type;
        },
        setType: function(a) {
            return this.options.type = a, this;
        },
        getSize: function() {
            return this.options.size;
        },
        setSize: function(a) {
            return this.options.size = a, this;
        },
        getCssClass: function() {
            return this.options.cssClass;
        },
        setCssClass: function(a) {
            return this.options.cssClass = a, this;
        },
        getTitle: function() {
            return this.options.title;
        },
        setTitle: function(a) {
            return this.options.title = a, this.updateTitle(), this;
        },
        updateTitle: function() {
            if (this.isRealized()) {
                var a = null !== this.getTitle() ? this.createDynamicContent(this.getTitle()) : this.getDefaultText();
                this.getModalHeader().find("." + this.getNamespace("title")).html("").append(a);
            }
            return this;
        },
        getMessage: function() {
            return this.options.message;
        },
        setMessage: function(a) {
            return this.options.message = a, this.updateMessage(), this;
        },
        updateMessage: function() {
            if (this.isRealized()) {
                var a = this.createDynamicContent(this.getMessage());
                this.getModalBody().find("." + this.getNamespace("message")).html("").append(a);
            }
            return this;
        },
        isClosable: function() {
            return this.options.closable;
        },
        setClosable: function(a) {
            return this.options.closable = a, this.updateClosable(), this;
        },
        setCloseByBackdrop: function(a) {
            return this.options.closeByBackdrop = a, this;
        },
        canCloseByBackdrop: function() {
            return this.options.closeByBackdrop;
        },
        setCloseByKeyboard: function(a) {
            return this.options.closeByKeyboard = a, this;
        },
        canCloseByKeyboard: function() {
            return this.options.closeByKeyboard;
        },
        isAnimate: function() {
            return this.options.animate;
        },
        setAnimate: function(a) {
            return this.options.animate = a, this;
        },
        updateAnimate: function() {
            return this.isRealized() && this.getModal().toggleClass("fade", this.isAnimate()), 
            this;
        },
        getSpinicon: function() {
            return this.options.spinicon;
        },
        setSpinicon: function(a) {
            return this.options.spinicon = a, this;
        },
        addButton: function(a) {
            return this.options.buttons.push(a), this;
        },
        addButtons: function(b) {
            var c = this;
            return a.each(b, function(a, b) {
                c.addButton(b);
            }), this;
        },
        getButtons: function() {
            return this.options.buttons;
        },
        setButtons: function(a) {
            return this.options.buttons = a, this.updateButtons(), this;
        },
        getButton: function(a) {
            return "undefined" != typeof this.indexedButtons[a] ? this.indexedButtons[a] : null;
        },
        getButtonSize: function() {
            return "undefined" != typeof b.BUTTON_SIZES[this.getSize()] ? b.BUTTON_SIZES[this.getSize()] : "";
        },
        updateButtons: function() {
            return this.isRealized() && (0 === this.getButtons().length ? this.getModalFooter().hide() : this.getModalFooter().find("." + this.getNamespace("footer")).html("").append(this.createFooterButtons())), 
            this;
        },
        isAutodestroy: function() {
            return this.options.autodestroy;
        },
        setAutodestroy: function(a) {
            this.options.autodestroy = a;
        },
        getDefaultText: function() {
            return b.DEFAULT_TEXTS[this.getType()];
        },
        getNamespace: function(a) {
            return b.NAMESPACE + "-" + a;
        },
        createHeaderContent: function() {
            var b = a("<div></div>");
            return b.addClass(this.getNamespace("header")), b.append(this.createTitleContent()), 
            b.prepend(this.createCloseButton()), b;
        },
        createTitleContent: function() {
            var b = a("<div></div>");
            return b.addClass(this.getNamespace("title")), b;
        },
        createCloseButton: function() {
            var b = a("<div></div>");
            b.addClass(this.getNamespace("close-button"));
            var c = a('<button class="close">&times;</button>');
            return b.append(c), b.on("click", {
                dialog: this
            }, function(a) {
                a.data.dialog.close();
            }), b;
        },
        createBodyContent: function() {
            var b = a("<div></div>");
            return b.addClass(this.getNamespace("body")), b.append(this.createMessageContent()), 
            b;
        },
        createMessageContent: function() {
            var b = a("<div></div>");
            return b.addClass(this.getNamespace("message")), b;
        },
        createFooterContent: function() {
            var b = a("<div></div>");
            return b.addClass(this.getNamespace("footer")), b;
        },
        createFooterButtons: function() {
            var c = this, d = a("<div></div>");
            return d.addClass(this.getNamespace("footer-buttons")), this.indexedButtons = {}, 
            a.each(this.options.buttons, function(a, e) {
                e.id || (e.id = b.newGuid());
                var f = c.createButton(e);
                c.indexedButtons[e.id] = f, d.append(f);
            }), d;
        },
        createButton: function(b) {
            var c = a('<button class="btn"></button>');
            return c.addClass(this.getButtonSize()), c.prop("id", b.id), "undefined" != typeof b.icon && "" !== a.trim(b.icon) && c.append(this.createButtonIcon(b.icon)), 
            "undefined" != typeof b.label && c.append(b.label), c.addClass("undefined" != typeof b.cssClass && "" !== a.trim(b.cssClass) ? b.cssClass : "btn-default"), 
            "undefined" != typeof b.hotkey && (this.registeredButtonHotkeys[b.hotkey] = c), 
            c.on("click", {
                dialog: this,
                $button: c,
                button: b
            }, function(a) {
                var b = a.data.dialog, c = a.data.$button, d = a.data.button;
                "function" == typeof d.action && d.action.call(c, b), d.autospin && c.toggleSpin(!0);
            }), this.enhanceButton(c), c;
        },
        enhanceButton: function(a) {
            return a.dialog = this, a.toggleEnable = function(a) {
                var b = this;
                return "undefined" != typeof a ? b.prop("disabled", !a).toggleClass("disabled", !a) : b.prop("disabled", !b.prop("disabled")), 
                b;
            }, a.enable = function() {
                var a = this;
                return a.toggleEnable(!0), a;
            }, a.disable = function() {
                var a = this;
                return a.toggleEnable(!1), a;
            }, a.toggleSpin = function(b) {
                var c = this, d = c.dialog, e = c.find("." + d.getNamespace("button-icon"));
                return "undefined" == typeof b && (b = !(a.find(".icon-spin").length > 0)), b ? (e.hide(), 
                a.prepend(d.createButtonIcon(d.getSpinicon()).addClass("icon-spin"))) : (e.show(), 
                a.find(".icon-spin").remove()), c;
            }, a.spin = function() {
                var a = this;
                return a.toggleSpin(!0), a;
            }, a.stopSpin = function() {
                var a = this;
                return a.toggleSpin(!1), a;
            }, this;
        },
        createButtonIcon: function(b) {
            var c = a("<span></span>");
            return c.addClass(this.getNamespace("button-icon")).addClass(b), c;
        },
        enableButtons: function(b) {
            return a.each(this.indexedButtons, function(a, c) {
                c.toggleEnable(b);
            }), this;
        },
        updateClosable: function() {
            return this.isRealized() && this.getModalHeader().find("." + this.getNamespace("close-button")).toggle(this.isClosable()), 
            this;
        },
        onShow: function(a) {
            return this.options.onshow = a, this;
        },
        onShown: function(a) {
            return this.options.onshown = a, this;
        },
        onHide: function(a) {
            return this.options.onhide = a, this;
        },
        onHidden: function(a) {
            return this.options.onhidden = a, this;
        },
        isRealized: function() {
            return this.realized;
        },
        setRealized: function(a) {
            return this.realized = a, this;
        },
        isOpened: function() {
            return this.opened;
        },
        setOpened: function(a) {
            return this.opened = a, this;
        },
        handleModalEvents: function() {
            return this.getModal().on("show.bs.modal", {
                dialog: this
            }, function(a) {
                var b = a.data.dialog;
                return "function" == typeof b.options.onshow ? b.options.onshow(b) : void 0;
            }), this.getModal().on("shown.bs.modal", {
                dialog: this
            }, function(a) {
                var b = a.data.dialog;
                "function" == typeof b.options.onshown && b.options.onshown(b);
            }), this.getModal().on("hide.bs.modal", {
                dialog: this
            }, function(a) {
                var b = a.data.dialog;
                return "function" == typeof b.options.onhide ? b.options.onhide(b) : void 0;
            }), this.getModal().on("hidden.bs.modal", {
                dialog: this
            }, function(b) {
                var c = b.data.dialog;
                "function" == typeof c.options.onhidden && c.options.onhidden(c), c.isAutodestroy() && a(this).remove();
            }), this.getModal().on("mouseup", {
                dialog: this
            }, function(a) {
                a.target === this && a.data.dialog.isClosable() && a.data.dialog.canCloseByBackdrop() && a.data.dialog.close();
            }), this.getModal().on("keyup", {
                dialog: this
            }, function(a) {
                27 === a.which && a.data.dialog.isClosable() && a.data.dialog.canCloseByKeyboard() && a.data.dialog.close();
            }), this.getModal().on("keyup", {
                dialog: this
            }, function(b) {
                var c = b.data.dialog;
                if ("undefined" != typeof c.registeredButtonHotkeys[b.which]) {
                    var d = a(c.registeredButtonHotkeys[b.which]);
                    !d.prop("disabled") && d.focus().trigger("click");
                }
            }), this;
        },
        makeModalDraggable: function() {
            return this.options.draggable && (this.getModalHeader().addClass(this.getNamespace("draggable")).on("mousedown", {
                dialog: this
            }, function(a) {
                var b = a.data.dialog;
                b.draggableData.isMouseDown = !0;
                var c = b.getModalContent().offset();
                b.draggableData.mouseOffset = {
                    top: a.clientY - c.top,
                    left: a.clientX - c.left
                };
            }), this.getModal().on("mouseup mouseleave", {
                dialog: this
            }, function(a) {
                a.data.dialog.draggableData.isMouseDown = !1;
            }), a("body").on("mousemove", {
                dialog: this
            }, function(a) {
                var b = a.data.dialog;
                b.draggableData.isMouseDown && b.getModalContent().offset({
                    top: a.clientY - b.draggableData.mouseOffset.top,
                    left: a.clientX - b.draggableData.mouseOffset.left
                });
            })), this;
        },
        updateZIndex: function() {
            var c = 0;
            if (a.each(b.dialogs, function() {
                c++;
            }), c > 1) {
                var d = this.getModal(), e = d.data("bs.modal").$backdrop;
                d.css("z-index", b.ZINDEX_MODAL + 20 * (c - 1)), e.css("z-index", b.ZINDEX_BACKDROP + 20 * (c - 1));
            }
            return this;
        },
        realize: function() {
            return this.initModalStuff(), this.getModal().addClass(b.NAMESPACE).addClass(this.getType()).addClass(this.getSize()).addClass(this.getCssClass()), 
            this.getModalFooter().append(this.createFooterContent()), this.getModalHeader().append(this.createHeaderContent()), 
            this.getModalBody().append(this.createBodyContent()), this.getModal().modal({
                backdrop: "static",
                keyboard: !1,
                show: !1
            }), this.makeModalDraggable(), this.handleModalEvents(), this.setRealized(!0), this.updateButtons(), 
            this.updateTitle(), this.updateMessage(), this.updateClosable(), this.updateAnimate(), 
            this;
        },
        open: function() {
            return !this.isRealized() && this.realize(), this.getModal().modal("show"), this.updateZIndex(), 
            this.setOpened(!0), this;
        },
        close: function() {
            return this.getModal().modal("hide"), this.isAutodestroy() && delete b.dialogs[this.getId()], 
            this.setOpened(!1), b.moveFocus(), b.showScrollbar(), this;
        }
    }, b.newGuid = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0, c = "x" === a ? b : 3 & b | 8;
            return c.toString(16);
        });
    }, b.show = function(a) {
        return new b(a).open();
    }, b.alert = function() {
        var c = {}, d = {
            type: b.TYPE_PRIMARY,
            title: null,
            message: null,
            closable: !0,
            buttonLabel: "OK",
            callback: null
        };
        return c = "object" == typeof arguments[0] && arguments[0].constructor === {}.constructor ? a.extend(!0, d, arguments[0]) : a.extend(!0, d, {
            message: arguments[0],
            closable: !1,
            buttonLabel: "OK",
            callback: "undefined" != typeof arguments[1] ? arguments[1] : null
        }), new b({
            type: c.type,
            title: c.title,
            message: c.message,
            closable: c.closable,
            data: {
                callback: c.callback
            },
            onhide: function(a) {
                !a.getData("btnClicked") && a.isClosable() && "function" == typeof a.getData("callback") && a.getData("callback")(!1);
            },
            buttons: [ {
                label: c.buttonLabel,
                action: function(a) {
                    a.setData("btnClicked", !0), "function" == typeof a.getData("callback") && a.getData("callback")(!0), 
                    a.close();
                }
            } ]
        }).open();
    }, b.confirm = function(a, c) {
        return new b({
            title: "Confirmation",
            message: a,
            closable: !1,
            data: {
                callback: c
            },
            buttons: [ {
                label: "Cancel",
                action: function(a) {
                    "function" == typeof a.getData("callback") && a.getData("callback")(!1), a.close();
                }
            }, {
                label: "OK",
                cssClass: "btn-primary",
                action: function(a) {
                    "function" == typeof a.getData("callback") && a.getData("callback")(!0), a.close();
                }
            } ]
        }).open();
    }, b.warning = function(a) {
        return new b({
            type: b.TYPE_WARNING,
            message: a
        }).open();
    }, b.danger = function(a) {
        return new b({
            type: b.TYPE_DANGER,
            message: a
        }).open();
    }, b.success = function(a) {
        return new b({
            type: b.TYPE_SUCCESS,
            message: a
        }).open();
    }, b;
}), function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), 
            a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), 
                void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0);
            }), this.submit(function(b) {
                function d() {
                    var d;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), 
                    c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), 
                    !1) : !0;
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, 
                d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), 
                !1);
            })), c);
        },
        valid: function() {
            var b, c;
            return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), 
            this.each(function() {
                b = c.element(this) && b;
            })), b;
        },
        removeAttrs: function(b) {
            var c = {}, d = this;
            return a.each(b.split(/\s/), function(a, b) {
                c[b] = d.attr(b), d.removeAttr(b);
            }), c;
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), 
            b) {
              case "add":
                a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                break;

              case "remove":
                return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
                    i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required");
                }), i) : (delete e[j.name], f);
            }
            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), 
            g.required && (h = g.required, delete g.required, g = a.extend({
                required: h
            }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, 
            g = a.extend(g, {
                remote: h
            })), g;
        }
    }), a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val());
        },
        filled: function(b) {
            return !!a.trim("" + a(b).val());
        },
        unchecked: function(b) {
            return !a(b).prop("checked");
        }
    }), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, 
        this.init();
    }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), 
        c.constructor !== Array && (c = [ c ]), a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c;
            });
        }), b);
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), 
                this.addWrapper(this.errorsFor(a)).hide());
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
            },
            onkeyup: function(a, b) {
                (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a);
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b);
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = a.data(this[0].form, "validator"), d = "on" + b.type.replace(/^validate/, ""), e = c.settings;
                    e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b);
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), 
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), 
                this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, 
                this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                        d[c] = b;
                    });
                }), c = this.settings.rules, a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d);
                }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), 
                this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), 
                a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), 
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [ this ]), this.showErrors(), 
                this.valid();
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid();
            },
            element: function(b) {
                var c = this.clean(b), d = this.validationTargetFor(c), e = !0;
                return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), 
                this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), 
                a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), 
                this.showErrors(), e;
            },
            showErrors: function(b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b) this.errorList.push({
                        message: b[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b);
                    });
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, 
                this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid");
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a) c++;
                return c;
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide();
            },
            valid: function() {
                return 0 === this.size();
            },
            size: function() {
                return this.errorList.length;
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name;
                }).length && b;
            },
            elements: function() {
                var b = this, c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), 
                    this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0);
                });
            },
            clean: function(b) {
                return a(b)[0];
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext);
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), 
                this.toHide = a([]), this.currentElements = a([]);
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(a) {
                this.reset(), this.toHide = this.errorsFor(a);
            },
            elementValue: function(b) {
                var c, d = a(b), e = d.attr("type");
                return "radio" === e || "checkbox" === e ? a("input[name='" + d.attr("name") + "']:checked").val() : (c = d.val(), 
                "string" == typeof c ? c.replace(/\r/g, "") : c);
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(), g = a.map(f, function(a, b) {
                    return b;
                }).length, h = !1, i = this.elementValue(b);
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue;
                        }
                        if (h = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1;
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), 
                        j;
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0;
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c[0].toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b]);
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
                return void 0;
            },
            defaultMessage: function(b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>");
            },
            formatAndAdd: function(b, c) {
                var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), 
                this.errorList.push({
                    message: d,
                    element: b,
                    method: c.method
                }), this.errorMap[b.name] = d, this.submitted[b.name] = d;
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), 
                this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(b, c) {
                var d = this.errorsFor(b);
                d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), 
                d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), 
                this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), 
                this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), 
                !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), 
                this.toShow = this.toShow.add(d);
            },
            errorsFor: function(b) {
                var c = this.idOrName(b);
                return this.errors().filter(function() {
                    return a(this).attr("for") === c;
                });
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
            },
            validationTargetFor: function(a) {
                return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), 
                a;
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type);
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + b + "']");
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                  case "select":
                    return a("option:selected", c).length;

                  case "input":
                    if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
                }
                return b.length;
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0;
            },
            dependTypes: {
                "boolean": function(a) {
                    return a;
                },
                string: function(b, c) {
                    return !!a(b, c.form).length;
                },
                "function": function(a, b) {
                    return a(b);
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
            },
            startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0);
            },
            stopRequest: function(b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], 
                c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), 
                this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [ this ]), 
                this.formSubmitted = !1);
            },
            previousValue: function(b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                });
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
        },
        classRules: function(b) {
            var c = {}, d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
            }), c;
        },
        attributeRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), 
            d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), 
            d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, 
            e;
        },
        dataRules: function(b) {
            var c, d, e = {}, f = a(b);
            for (c in a.validator.methods) d = f.data("rule" + c[0].toUpperCase() + c.substring(1).toLowerCase()), 
            void 0 !== d && (e[c] = d);
            return e;
        },
        staticRules: function(b) {
            var c = {}, d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), 
            c;
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                      case "string":
                        f = !!a(e.depends, c.form).length;
                        break;

                      case "function":
                        f = e.depends.call(c, c);
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d];
                }
            }), a.each(b, function(d, e) {
                b[d] = a.isFunction(e) ? e(c) : e;
            }), a.each([ "minlength", "maxlength" ], function() {
                b[this] && (b[this] = Number(b[this]));
            }), a.each([ "rangelength", "range" ], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [ Number(b[this][0]), Number(b[this][1]) ] : "string" == typeof b[this] && (c = b[this].split(/[\s,]+/), 
                b[this] = [ Number(c[0]), Number(c[1]) ]));
            }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [ b.min, b.max ], 
            delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [ b.minlength, b.maxlength ], 
            delete b.minlength, delete b.maxlength)), b;
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0;
                }), b = c;
            }
            return b;
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], 
            c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0;
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0;
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
            },
            url: function(a, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a);
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString());
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a);
            },
            number: function(a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a);
            },
            creditcard: function(a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var c, d, e = 0, f = 0, g = !1;
                if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), 
                e += f, g = !g;
                return e % 10 === 0;
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d;
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || d >= e;
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d[0] && e <= d[1];
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c;
            },
            max: function(a, b, c) {
                return this.optional(b) || c >= a;
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1];
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    a(c).valid();
                }), b === e.val();
            },
            remote: function(b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e, f, g = this.previousValue(c);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), 
                g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, 
                d = "string" == typeof d && {
                    url: d
                } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, 
                f[c.name] = b, a.ajax(a.extend(!0, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: f,
                    context: e.currentForm,
                    success: function(d) {
                        var f, h, i, j = d === !0 || "true" === d;
                        e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, 
                        e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], 
                        e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, 
                        e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j);
                    }
                }, d)), "pending");
            }
        }
    }), a.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead.";
    };
}(jQuery), function(a) {
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d);
    }) : (b = a.ajax, a.ajax = function(d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
    });
}(jQuery), function(a) {
    a.extend(a.fn, {
        validateDelegate: function(b, c, d) {
            return this.bind(c, function(c) {
                var e = a(c.target);
                return e.is(b) ? d.apply(e, arguments) : void 0;
            });
        }
    });
}(jQuery), function(a) {
    "use strict";
    function b(a, b) {
        var c = (65535 & a) + (65535 & b), d = (a >> 16) + (b >> 16) + (c >> 16);
        return d << 16 | 65535 & c;
    }
    function c(a, b) {
        return a << b | a >>> 32 - b;
    }
    function d(a, d, e, f, g, h) {
        return b(c(b(b(d, a), b(f, h)), g), e);
    }
    function e(a, b, c, e, f, g, h) {
        return d(b & c | ~b & e, a, b, f, g, h);
    }
    function f(a, b, c, e, f, g, h) {
        return d(b & e | c & ~e, a, b, f, g, h);
    }
    function g(a, b, c, e, f, g, h) {
        return d(b ^ c ^ e, a, b, f, g, h);
    }
    function h(a, b, c, e, f, g, h) {
        return d(c ^ (b | ~e), a, b, f, g, h);
    }
    function i(a, c) {
        a[c >> 5] |= 128 << c % 32, a[(c + 64 >>> 9 << 4) + 14] = c;
        var d, i, j, k, l, m = 1732584193, n = -271733879, o = -1732584194, p = 271733878;
        for (d = 0; d < a.length; d += 16) i = m, j = n, k = o, l = p, m = e(m, n, o, p, a[d], 7, -680876936), 
        p = e(p, m, n, o, a[d + 1], 12, -389564586), o = e(o, p, m, n, a[d + 2], 17, 606105819), 
        n = e(n, o, p, m, a[d + 3], 22, -1044525330), m = e(m, n, o, p, a[d + 4], 7, -176418897), 
        p = e(p, m, n, o, a[d + 5], 12, 1200080426), o = e(o, p, m, n, a[d + 6], 17, -1473231341), 
        n = e(n, o, p, m, a[d + 7], 22, -45705983), m = e(m, n, o, p, a[d + 8], 7, 1770035416), 
        p = e(p, m, n, o, a[d + 9], 12, -1958414417), o = e(o, p, m, n, a[d + 10], 17, -42063), 
        n = e(n, o, p, m, a[d + 11], 22, -1990404162), m = e(m, n, o, p, a[d + 12], 7, 1804603682), 
        p = e(p, m, n, o, a[d + 13], 12, -40341101), o = e(o, p, m, n, a[d + 14], 17, -1502002290), 
        n = e(n, o, p, m, a[d + 15], 22, 1236535329), m = f(m, n, o, p, a[d + 1], 5, -165796510), 
        p = f(p, m, n, o, a[d + 6], 9, -1069501632), o = f(o, p, m, n, a[d + 11], 14, 643717713), 
        n = f(n, o, p, m, a[d], 20, -373897302), m = f(m, n, o, p, a[d + 5], 5, -701558691), 
        p = f(p, m, n, o, a[d + 10], 9, 38016083), o = f(o, p, m, n, a[d + 15], 14, -660478335), 
        n = f(n, o, p, m, a[d + 4], 20, -405537848), m = f(m, n, o, p, a[d + 9], 5, 568446438), 
        p = f(p, m, n, o, a[d + 14], 9, -1019803690), o = f(o, p, m, n, a[d + 3], 14, -187363961), 
        n = f(n, o, p, m, a[d + 8], 20, 1163531501), m = f(m, n, o, p, a[d + 13], 5, -1444681467), 
        p = f(p, m, n, o, a[d + 2], 9, -51403784), o = f(o, p, m, n, a[d + 7], 14, 1735328473), 
        n = f(n, o, p, m, a[d + 12], 20, -1926607734), m = g(m, n, o, p, a[d + 5], 4, -378558), 
        p = g(p, m, n, o, a[d + 8], 11, -2022574463), o = g(o, p, m, n, a[d + 11], 16, 1839030562), 
        n = g(n, o, p, m, a[d + 14], 23, -35309556), m = g(m, n, o, p, a[d + 1], 4, -1530992060), 
        p = g(p, m, n, o, a[d + 4], 11, 1272893353), o = g(o, p, m, n, a[d + 7], 16, -155497632), 
        n = g(n, o, p, m, a[d + 10], 23, -1094730640), m = g(m, n, o, p, a[d + 13], 4, 681279174), 
        p = g(p, m, n, o, a[d], 11, -358537222), o = g(o, p, m, n, a[d + 3], 16, -722521979), 
        n = g(n, o, p, m, a[d + 6], 23, 76029189), m = g(m, n, o, p, a[d + 9], 4, -640364487), 
        p = g(p, m, n, o, a[d + 12], 11, -421815835), o = g(o, p, m, n, a[d + 15], 16, 530742520), 
        n = g(n, o, p, m, a[d + 2], 23, -995338651), m = h(m, n, o, p, a[d], 6, -198630844), 
        p = h(p, m, n, o, a[d + 7], 10, 1126891415), o = h(o, p, m, n, a[d + 14], 15, -1416354905), 
        n = h(n, o, p, m, a[d + 5], 21, -57434055), m = h(m, n, o, p, a[d + 12], 6, 1700485571), 
        p = h(p, m, n, o, a[d + 3], 10, -1894986606), o = h(o, p, m, n, a[d + 10], 15, -1051523), 
        n = h(n, o, p, m, a[d + 1], 21, -2054922799), m = h(m, n, o, p, a[d + 8], 6, 1873313359), 
        p = h(p, m, n, o, a[d + 15], 10, -30611744), o = h(o, p, m, n, a[d + 6], 15, -1560198380), 
        n = h(n, o, p, m, a[d + 13], 21, 1309151649), m = h(m, n, o, p, a[d + 4], 6, -145523070), 
        p = h(p, m, n, o, a[d + 11], 10, -1120210379), o = h(o, p, m, n, a[d + 2], 15, 718787259), 
        n = h(n, o, p, m, a[d + 9], 21, -343485551), m = b(m, i), n = b(n, j), o = b(o, k), 
        p = b(p, l);
        return [ m, n, o, p ];
    }
    function j(a) {
        var b, c = "";
        for (b = 0; b < 32 * a.length; b += 8) c += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
        return c;
    }
    function k(a) {
        var b, c = [];
        for (c[(a.length >> 2) - 1] = void 0, b = 0; b < c.length; b += 1) c[b] = 0;
        for (b = 0; b < 8 * a.length; b += 8) c[b >> 5] |= (255 & a.charCodeAt(b / 8)) << b % 32;
        return c;
    }
    function l(a) {
        return j(i(k(a), 8 * a.length));
    }
    function m(a, b) {
        var c, d, e = k(a), f = [], g = [];
        for (f[15] = g[15] = void 0, e.length > 16 && (e = i(e, 8 * a.length)), c = 0; 16 > c; c += 1) f[c] = 909522486 ^ e[c], 
        g[c] = 1549556828 ^ e[c];
        return d = i(f.concat(k(b)), 512 + 8 * b.length), j(i(g.concat(d), 640));
    }
    function n(a) {
        var b, c, d = "0123456789abcdef", e = "";
        for (c = 0; c < a.length; c += 1) b = a.charCodeAt(c), e += d.charAt(b >>> 4 & 15) + d.charAt(15 & b);
        return e;
    }
    function o(a) {
        return unescape(encodeURIComponent(a));
    }
    function p(a) {
        return l(o(a));
    }
    function q(a) {
        return n(p(a));
    }
    function r(a, b) {
        return m(o(a), o(b));
    }
    function s(a, b) {
        return n(r(a, b));
    }
    function t(a, b, c) {
        return b ? c ? r(b, a) : s(b, a) : c ? p(a) : q(a);
    }
    "function" == typeof define && define.amd ? define(function() {
        return t;
    }) : a.md5 = t;
}(this), function(a) {
    jQuery.fn.extend({
        slimScroll: function(b) {
            var c = {
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, d = a.extend(c, b);
            return this.each(function() {
                function c(b) {
                    if (j) {
                        var b = b || window.event, c = 0;
                        b.wheelDelta && (c = -b.wheelDelta / 120), b.detail && (c = b.detail / 3);
                        var f = b.target || b.srcTarget || b.srcElement;
                        a(f).closest("." + d.wrapperClass).is(v.parent()) && e(c, !0), b.preventDefault && !u && b.preventDefault(), 
                        u || (b.returnValue = !1);
                    }
                }
                function e(a, b, c) {
                    u = !1;
                    var e = a, f = v.outerHeight() - A.outerHeight();
                    if (b && (e = parseInt(A.css("top")) + a * parseInt(d.wheelStep) / 100 * A.outerHeight(), 
                    e = Math.min(Math.max(e, 0), f), e = a > 0 ? Math.ceil(e) : Math.floor(e), A.css({
                        top: e + "px"
                    })), p = parseInt(A.css("top")) / (v.outerHeight() - A.outerHeight()), e = p * (v[0].scrollHeight - v.outerHeight()), 
                    c) {
                        e = a;
                        var g = e / v[0].scrollHeight * v.outerHeight();
                        g = Math.min(Math.max(g, 0), f), A.css({
                            top: g + "px"
                        });
                    }
                    v.scrollTop(e), v.trigger("slimscrolling", ~~e), h(), i();
                }
                function f() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", c, !1), this.addEventListener("mousewheel", c, !1), 
                    this.addEventListener("MozMousePixelScroll", c, !1)) : document.attachEvent("onmousewheel", c);
                }
                function g() {
                    o = Math.max(v.outerHeight() / v[0].scrollHeight * v.outerHeight(), s), A.css({
                        height: o + "px"
                    });
                    var a = o == v.outerHeight() ? "none" : "block";
                    A.css({
                        display: a
                    });
                }
                function h() {
                    if (g(), clearTimeout(m), p == ~~p) {
                        if (u = d.allowPageScroll, q != p) {
                            var a = 0 == ~~p ? "top" : "bottom";
                            v.trigger("slimscroll", a);
                        }
                    } else u = !1;
                    return q = p, o >= v.outerHeight() ? void (u = !0) : (A.stop(!0, !0).fadeIn("fast"), 
                    void (d.railVisible && z.stop(!0, !0).fadeIn("fast")));
                }
                function i() {
                    d.alwaysVisible || (m = setTimeout(function() {
                        d.disableFadeOut && j || k || l || (A.fadeOut("slow"), z.fadeOut("slow"));
                    }, 1e3));
                }
                var j, k, l, m, n, o, p, q, r = "<div></div>", s = 30, u = !1, v = a(this);
                if (v.parent().hasClass(d.wrapperClass)) {
                    var w = v.scrollTop();
                    if (A = v.parent().find("." + d.barClass), z = v.parent().find("." + d.railClass), 
                    g(), a.isPlainObject(b)) {
                        if ("height" in b && "auto" == b.height) {
                            v.parent().css("height", "auto"), v.css("height", "auto");
                            var x = v.parent().parent().height();
                            v.parent().css("height", x), v.css("height", x);
                        }
                        if ("scrollTo" in b) w = parseInt(d.scrollTo); else if ("scrollBy" in b) w += parseInt(d.scrollBy); else if ("destroy" in b) return A.remove(), 
                        z.remove(), void v.unwrap();
                        e(w, !1, !0);
                    }
                } else {
                    d.height = "auto" == d.height ? v.parent().height() : d.height;
                    var y = a(r).addClass(d.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: d.width,
                        height: d.height
                    });
                    v.css({
                        overflow: "hidden",
                        width: d.width,
                        height: d.height
                    });
                    var z = a(r).addClass(d.railClass).css({
                        width: d.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: d.alwaysVisible && d.railVisible ? "block" : "none",
                        "border-radius": d.railBorderRadius,
                        background: d.railColor,
                        opacity: d.railOpacity,
                        zIndex: 90
                    }), A = a(r).addClass(d.barClass).css({
                        background: d.color,
                        width: d.size,
                        position: "absolute",
                        top: 0,
                        opacity: d.opacity,
                        display: d.alwaysVisible ? "block" : "none",
                        "border-radius": d.borderRadius,
                        BorderRadius: d.borderRadius,
                        MozBorderRadius: d.borderRadius,
                        WebkitBorderRadius: d.borderRadius,
                        zIndex: 99
                    }), B = "right" == d.position ? {
                        right: d.distance
                    } : {
                        left: d.distance
                    };
                    z.css(B), A.css(B), v.wrap(y), v.parent().append(A), v.parent().append(z), d.railDraggable && A.bind("mousedown", function(b) {
                        var c = a(document);
                        return l = !0, t = parseFloat(A.css("top")), pageY = b.pageY, c.bind("mousemove.slimscroll", function(a) {
                            currTop = t + a.pageY - pageY, A.css("top", currTop), e(0, A.position().top, !1);
                        }), c.bind("mouseup.slimscroll", function() {
                            l = !1, i(), c.unbind(".slimscroll");
                        }), !1;
                    }).bind("selectstart.slimscroll", function(a) {
                        return a.stopPropagation(), a.preventDefault(), !1;
                    }), z.hover(function() {
                        h();
                    }, function() {
                        i();
                    }), A.hover(function() {
                        k = !0;
                    }, function() {
                        k = !1;
                    }), v.hover(function() {
                        j = !0, h(), i();
                    }, function() {
                        j = !1, i();
                    }), v.bind("touchstart", function(a) {
                        a.originalEvent.touches.length && (n = a.originalEvent.touches[0].pageY);
                    }), v.bind("touchmove", function(a) {
                        if (u || a.originalEvent.preventDefault(), a.originalEvent.touches.length) {
                            var b = (n - a.originalEvent.touches[0].pageY) / d.touchScrollStep;
                            e(b, !0), n = a.originalEvent.touches[0].pageY;
                        }
                    }), g(), "bottom" === d.start ? (A.css({
                        top: v.outerHeight() - A.outerHeight()
                    }), e(0, !0)) : "top" !== d.start && (e(a(d.start).position().top, null, !0), d.alwaysVisible || A.hide()), 
                    f();
                }
            }), this;
        }
    }), jQuery.fn.extend({
        slimscroll: jQuery.fn.slimScroll
    });
}(jQuery), function(a, b) {
    function c(a) {
        a.is(":checkbox, :radio") ? a.attr("checked", !1) : a.val("");
    }
    function d(c, d, e) {
        for (var f, g, h = [], i = 0, j = ""; f = c[i++]; ) switch (f) {
          case " ":
          case "_":
          case ".":
          case "[":
          case "]":
            if ("]" === f && !j.length) {
                j = 0;
                for (var k in e) e.hasOwnProperty(k) && k % 1 === 0 && (j = Math.max(parseInt(k, 10) + 1, j));
            }
            (0 === j || j) && (g = {
                scope: e,
                key: j
            }, e[j] === b && (e[j] = {}), e = e[j], h.push(j)), j = "";
            break;

          default:
            j += f;
        }
        return j.length ? h.push(j) : (e = g.scope, j = g.key), !e[j] || a.isEmptyObject(e[j]) ? e[j] = d : (a.isArray(e[j]) || (e[j] = [ e[j] ]), 
        e[j].push(d)), h;
    }
    var e = {
        set: function(b) {
            var e = a(this), f = {};
            e.find(":input[name]").each(function() {
                var e = a(this), g = b, h = !0;
                c(e);
                for (var i = d(e.attr("name"), null, f), j = 0, k = i.length; k > j; j++) {
                    var l = i[j];
                    if (!g[l]) {
                        h = !1;
                        break;
                    }
                    g = g[l];
                }
                if (h) if (e.is(":checkbox, :radio")) if (a.isArray(g)) for (var j = 0, k = g.length; k > j; j++) e.filter("[value=" + g[j] + "]").attr("checked", !0); else e.filter("[value=" + g + "]").attr("checked", !0); else e.val(g);
            });
        },
        get: function() {
            var b = {};
            return a.each(a(this).serializeArray(), function() {
                d(this.name, this.value, b);
            }), b;
        }
    };
    a.fn.inputs = function(b) {
        return e[b] ? e[b].apply(this, Array.prototype.slice.call(arguments, 1)) : void a.error("Method " + b + " does not exist on jQuery.inputs");
    };
}(jQuery), function(a) {
    var b = {
        initTree: function(b) {
            var c = a.extend({}, this.treegrid.defaults, b);
            return this.each(function() {
                var b = a(this);
                b.treegrid("setTreeContainer", a(this)), b.treegrid("setSettings", c), c.getRootNodes.apply(this, [ a(this) ]).treegrid("initNode", c);
            });
        },
        initNode: function(b) {
            return this.each(function() {
                var c = a(this);
                c.treegrid("setTreeContainer", b.getTreeGridContainer.apply(this)), c.treegrid("getChildNodes").treegrid("initNode", b), 
                c.treegrid("initExpander").treegrid("initIndent").treegrid("initEvents").treegrid("initState").treegrid("initSettingsEvents");
            });
        },
        initEvents: function() {
            var b = a(this);
            return b.on("change", function() {
                var b = a(this);
                b.treegrid("render"), b.treegrid("getSetting", "saveState") && b.treegrid("saveState");
            }), b.on("collapse", function() {
                var b = a(this);
                b.removeClass("treegrid-expanded"), b.addClass("treegrid-collapsed");
            }), b.on("expand", function() {
                var b = a(this);
                b.removeClass("treegrid-collapsed"), b.addClass("treegrid-expanded");
            }), b;
        },
        initSettingsEvents: function() {
            var b = a(this);
            return b.on("change", function() {
                var b = a(this);
                "function" == typeof b.treegrid("getSetting", "onChange") && b.treegrid("getSetting", "onChange").apply(b);
            }), b.on("collapse", function() {
                var b = a(this);
                "function" == typeof b.treegrid("getSetting", "onCollapse") && b.treegrid("getSetting", "onCollapse").apply(b);
            }), b.on("expand", function() {
                var b = a(this);
                "function" == typeof b.treegrid("getSetting", "onExpand") && b.treegrid("getSetting", "onExpand").apply(b);
            }), b;
        },
        initExpander: function() {
            var b = a(this), c = b.find("td").get(b.treegrid("getSetting", "treeColumn")), d = b.treegrid("getSetting", "expanderTemplate"), e = b.treegrid("getSetting", "getExpander").apply(this);
            return e && e.remove(), a(d).prependTo(c).click(function() {
                a(a(this).closest("tr")).treegrid("toggle");
            }), b;
        },
        initIndent: function() {
            var b = a(this);
            b.find(".treegrid-indent").remove();
            for (var c = 0; c < a(this).treegrid("getDepth"); c++) a(b.treegrid("getSetting", "indentTemplate")).insertBefore(b.find(".treegrid-expander"));
            return b;
        },
        initState: function() {
            var b = a(this);
            return b.treegrid(b.treegrid("getSetting", "saveState") && !b.treegrid("isFirstInit") ? "restoreState" : "expanded" === b.treegrid("getSetting", "initialState") ? "expand" : "collapse"), 
            b;
        },
        isFirstInit: function() {
            var b = a(this).treegrid("getTreeContainer");
            return void 0 === b.data("first_init") && b.data("first_init", void 0 === a.cookie(b.treegrid("getSetting", "saveStateName"))), 
            b.data("first_init");
        },
        saveState: function() {
            var b = a(this);
            if ("cookie" === b.treegrid("getSetting", "saveStateMethod")) {
                var c = a.cookie(b.treegrid("getSetting", "saveStateName")) || "", d = "" === c ? [] : c.split(","), e = b.treegrid("getNodeId");
                b.treegrid("isExpanded") ? -1 === a.inArray(e, d) && d.push(e) : b.treegrid("isCollapsed") && -1 !== a.inArray(e, d) && d.splice(a.inArray(e, d), 1), 
                a.cookie(b.treegrid("getSetting", "saveStateName"), d.join(","));
            }
            return b;
        },
        restoreState: function() {
            var b = a(this);
            if ("cookie" === b.treegrid("getSetting", "saveStateMethod")) {
                var c = a.cookie(b.treegrid("getSetting", "saveStateName")).split(",");
                b.treegrid(-1 !== a.inArray(b.treegrid("getNodeId"), c) ? "expand" : "collapse");
            }
            return b;
        },
        getSetting: function(b) {
            return a(this).treegrid("getTreeContainer") ? a(this).treegrid("getTreeContainer").data("settings")[b] : null;
        },
        setSettings: function(b) {
            a(this).treegrid("getTreeContainer").data("settings", b);
        },
        getTreeContainer: function() {
            return a(this).data("treegrid");
        },
        setTreeContainer: function(b) {
            return a(this).data("treegrid", b);
        },
        getRootNodes: function() {
            return a(this).treegrid("getSetting", "getRootNodes").apply(this, [ a(this).treegrid("getTreeContainer") ]);
        },
        getAllNodes: function() {
            return a(this).treegrid("getSetting", "getAllNodes").apply(this, [ a(this).treegrid("getTreeContainer") ]);
        },
        isNode: function() {
            return null !== a(this).treegrid("getNodeId");
        },
        getNodeId: function() {
            return null === a(this).treegrid("getSetting", "getNodeId") ? null : a(this).treegrid("getSetting", "getNodeId").apply(this);
        },
        getParentNodeId: function() {
            return a(this).treegrid("getSetting", "getParentNodeId").apply(this);
        },
        getParentNode: function() {
            return null === a(this).treegrid("getParentNodeId") ? null : a(this).treegrid("getSetting", "getNodeById").apply(this, [ a(this).treegrid("getParentNodeId"), a(this).treegrid("getTreeContainer") ]);
        },
        getChildNodes: function() {
            return a(this).treegrid("getSetting", "getChildNodes").apply(this, [ a(this).treegrid("getNodeId"), a(this).treegrid("getTreeContainer") ]);
        },
        getDepth: function() {
            return null === a(this).treegrid("getParentNode") ? 0 : a(this).treegrid("getParentNode").treegrid("getDepth") + 1;
        },
        isRoot: function() {
            return 0 === a(this).treegrid("getDepth");
        },
        isLeaf: function() {
            return 0 === a(this).treegrid("getChildNodes").length;
        },
        isLast: function() {
            if (a(this).treegrid("isNode")) {
                var b = a(this).treegrid("getParentNode");
                if (null === b) {
                    if (a(this).treegrid("getNodeId") === a(this).treegrid("getRootNodes").last().treegrid("getNodeId")) return !0;
                } else if (a(this).treegrid("getNodeId") === b.treegrid("getChildNodes").last().treegrid("getNodeId")) return !0;
            }
            return !1;
        },
        isFirst: function() {
            if (a(this).treegrid("isNode")) {
                var b = a(this).treegrid("getParentNode");
                if (null === b) {
                    if (a(this).treegrid("getNodeId") === a(this).treegrid("getRootNodes").first().treegrid("getNodeId")) return !0;
                } else if (a(this).treegrid("getNodeId") === b.treegrid("getChildNodes").first().treegrid("getNodeId")) return !0;
            }
            return !1;
        },
        isExpanded: function() {
            return a(this).hasClass("treegrid-expanded");
        },
        isCollapsed: function() {
            return a(this).hasClass("treegrid-collapsed");
        },
        isOneOfParentsCollapsed: function() {
            var b = a(this);
            return b.treegrid("isRoot") ? !1 : b.treegrid("getParentNode").treegrid("isCollapsed") ? !0 : b.treegrid("getParentNode").treegrid("isOneOfParentsCollapsed");
        },
        expand: function() {
            return a(this).each(function() {
                var b = a(this);
                b.treegrid("isLeaf") || b.treegrid("isExpanded") || (b.trigger("expand"), b.trigger("change"));
            });
        },
        expandAll: function() {
            var b = a(this);
            return b.treegrid("getRootNodes").treegrid("expandRecursive"), b;
        },
        expandRecursive: function() {
            return a(this).each(function() {
                var b = a(this);
                b.treegrid("expand"), b.treegrid("isLeaf") || b.treegrid("getChildNodes").treegrid("expandRecursive");
            });
        },
        collapse: function() {
            return a(this).each(function() {
                var b = a(this);
                b.treegrid("isLeaf") || b.treegrid("isCollapsed") || (b.trigger("collapse"), b.trigger("change"));
            });
        },
        collapseAll: function() {
            var b = a(this);
            return b.treegrid("getRootNodes").treegrid("collapseRecursive"), b;
        },
        collapseRecursive: function() {
            return a(this).each(function() {
                var b = a(this);
                b.treegrid("collapse"), b.treegrid("isLeaf") || b.treegrid("getChildNodes").treegrid("collapseRecursive");
            });
        },
        toggle: function() {
            var b = a(this);
            return b.treegrid(b.treegrid("isExpanded") ? "collapse" : "expand"), b;
        },
        render: function() {
            return a(this).each(function() {
                var b = a(this);
                b.treegrid("isOneOfParentsCollapsed") ? b.hide() : b.show(), b.treegrid("isLeaf") || (b.treegrid("renderExpander"), 
                b.treegrid("getChildNodes").treegrid("render"));
            });
        },
        renderExpander: function() {
            return a(this).each(function() {
                var b = a(this), c = b.treegrid("getSetting", "getExpander").apply(this);
                c ? b.treegrid("isCollapsed") ? (c.removeClass(b.treegrid("getSetting", "expanderExpandedClass")), 
                c.addClass(b.treegrid("getSetting", "expanderCollapsedClass"))) : (c.removeClass(b.treegrid("getSetting", "expanderCollapsedClass")), 
                c.addClass(b.treegrid("getSetting", "expanderExpandedClass"))) : (b.treegrid("initExpander"), 
                b.treegrid("renderExpander"));
            });
        }
    };
    a.fn.treegrid = function(c) {
        return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method with name " + c + " does not exists for jQuery.treegrid") : b.initTree.apply(this, arguments);
    }, a.fn.treegrid.defaults = {
        initialState: "expanded",
        saveState: !1,
        saveStateMethod: "cookie",
        saveStateName: "tree-grid-state",
        expanderTemplate: '<span class="treegrid-expander"></span>',
        indentTemplate: '<span class="treegrid-indent"></span>',
        expanderExpandedClass: "treegrid-expander-expanded",
        expanderCollapsedClass: "treegrid-expander-collapsed",
        treeColumn: 0,
        getExpander: function() {
            return a(this).find(".treegrid-expander");
        },
        getNodeId: function() {
            var b = /treegrid-([A-Za-z0-9_-]+)/;
            return b.test(a(this).attr("class")) ? b.exec(a(this).attr("class"))[1] : null;
        },
        getParentNodeId: function() {
            var b = /treegrid-parent-([A-Za-z0-9_-]+)/;
            return b.test(a(this).attr("class")) ? b.exec(a(this).attr("class"))[1] : null;
        },
        getNodeById: function(a, b) {
            var c = "treegrid-" + a;
            return b.find("tr." + c);
        },
        getChildNodes: function(a, b) {
            var c = "treegrid-parent-" + a;
            return b.find("tr." + c);
        },
        getTreeGridContainer: function() {
            return a(this).closest("table");
        },
        getRootNodes: function(b) {
            var c = a.grep(b.find("tr"), function(b) {
                var c = a(b).attr("class"), d = /treegrid-([A-Za-z0-9_-]+)/, e = /treegrid-parent-([A-Za-z0-9_-]+)/;
                return d.test(c) && !e.test(c);
            });
            return a(c);
        },
        getAllNodes: function(b) {
            var c = a.grep(b.find("tr"), function(b) {
                var c = a(b).attr("class"), d = /treegrid-([A-Za-z0-9_-]+)/;
                return d.test(c);
            });
            return a(c);
        },
        onCollapse: null,
        onExpand: null,
        onChange: null
    };
}(jQuery), $.extend($.fn.treegrid.defaults, {
    expanderExpandedClass: "glyphicon glyphicon-chevron-down",
    expanderCollapsedClass: "glyphicon glyphicon-chevron-right"
}), window.scrollReveal = function(a) {
    "use strict";
    function b(a) {
        this.options = this.extend(this.defaults, a), this.docElem = this.options.elem, 
        this.styleBank = {}, 1 == this.options.init && this.init();
    }
    var c = 1, d = function() {
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || function(b) {
            a.setTimeout(b, 1e3 / 60);
        };
    }();
    return b.prototype = {
        defaults: {
            after: "0s",
            enter: "bottom",
            move: "24px",
            over: "0.66s",
            easing: "ease-in-out",
            opacity: 0,
            viewportFactor: .33,
            reset: !1,
            init: !0,
            elem: a.document.documentElement
        },
        init: function() {
            this.scrolled = !1;
            var b = this;
            this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")), 
            this.elems.forEach(function(a) {
                var d = a.getAttribute("data-scroll-reveal-id");
                d || (d = c++, a.setAttribute("data-scroll-reveal-id", d)), b.styleBank[d] || (b.styleBank[d] = a.getAttribute("style")), 
                b.update(a);
            });
            var e = function() {
                b.scrolled || (b.scrolled = !0, d(function() {
                    b._scrollPage();
                }));
            }, f = function() {
                function a() {
                    b._scrollPage(), b.resizeTimeout = null;
                }
                b.resizeTimeout && clearTimeout(b.resizeTimeout), b.resizeTimeout = setTimeout(a, 200);
            };
            this.docElem == a.document.documentElement ? (a.addEventListener("scroll", e, !1), 
            a.addEventListener("resize", f, !1)) : this.docElem.addEventListener("scroll", e, !1);
        },
        _scrollPage: function() {
            var a = this;
            this.elems.forEach(function(b) {
                a.update(b);
            }), this.scrolled = !1;
        },
        parseLanguage: function(a) {
            function b(a) {
                var b = [], c = [ "from", "the", "and", "then", "but", "with" ];
                return a.forEach(function(a) {
                    c.indexOf(a) > -1 || b.push(a);
                }), b;
            }
            var c = a.getAttribute("data-scroll-reveal").split(/[, ]+/), d = {};
            return c = b(c), c.forEach(function(a, b) {
                switch (a) {
                  case "enter":
                    return void (d.enter = c[b + 1]);

                  case "after":
                    return void (d.after = c[b + 1]);

                  case "wait":
                    return void (d.after = c[b + 1]);

                  case "move":
                    return void (d.move = c[b + 1]);

                  case "ease":
                    return d.move = c[b + 1], void (d.ease = "ease");

                  case "ease-in":
                    return d.move = c[b + 1], void (d.easing = "ease-in");

                  case "ease-in-out":
                    return d.move = c[b + 1], void (d.easing = "ease-in-out");

                  case "ease-out":
                    return d.move = c[b + 1], void (d.easing = "ease-out");

                  case "over":
                    return void (d.over = c[b + 1]);

                  default:
                    return;
                }
            }), d;
        },
        update: function(a) {
            var b = this.genCSS(a), c = this.styleBank[a.getAttribute("data-scroll-reveal-id")];
            return null != c ? c += ";" : c = "", a.getAttribute("data-scroll-reveal-initialized") || (a.setAttribute("style", c + b.initial), 
            a.setAttribute("data-scroll-reveal-initialized", !0)), this.isElementInViewport(a, this.options.viewportFactor) ? a.getAttribute("data-scroll-reveal-complete") ? void 0 : this.isElementInViewport(a, this.options.viewportFactor) ? (a.setAttribute("style", c + b.target + b.transition), 
            void (this.options.reset || setTimeout(function() {
                "" != c ? a.setAttribute("style", c) : a.removeAttribute("style"), a.setAttribute("data-scroll-reveal-complete", !0);
            }, b.totalDuration))) : void 0 : void (this.options.reset && a.setAttribute("style", c + b.initial + b.reset));
        },
        genCSS: function(a) {
            var b, c, d = this.parseLanguage(a);
            d.enter ? (("top" == d.enter || "bottom" == d.enter) && (b = d.enter, c = "y"), 
            ("left" == d.enter || "right" == d.enter) && (b = d.enter, c = "x")) : (("top" == this.options.enter || "bottom" == this.options.enter) && (b = this.options.enter, 
            c = "y"), ("left" == this.options.enter || "right" == this.options.enter) && (b = this.options.enter, 
            c = "x")), ("top" == b || "left" == b) && (d.move = d.move ? "-" + d.move : "-" + this.options.move);
            var e = d.move || this.options.move, f = d.over || this.options.over, g = d.after || this.options.after, h = d.easing || this.options.easing, i = d.opacity || this.options.opacity, j = "-webkit-transition: -webkit-transform " + f + " " + h + " " + g + ",  opacity " + f + " " + h + " " + g + ";transition: transform " + f + " " + h + " " + g + ", opacity " + f + " " + h + " " + g + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;", k = "-webkit-transition: -webkit-transform " + f + " " + h + " 0s,  opacity " + f + " " + h + " " + g + ";transition: transform " + f + " " + h + " 0s,  opacity " + f + " " + h + " " + g + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;", l = "-webkit-transform: translate" + c + "(" + e + ");transform: translate" + c + "(" + e + ");opacity: " + i + ";", m = "-webkit-transform: translate" + c + "(0);transform: translate" + c + "(0);opacity: 1;";
            return {
                transition: j,
                initial: l,
                target: m,
                reset: k,
                totalDuration: 1e3 * (parseFloat(f) + parseFloat(g))
            };
        },
        getViewportH: function() {
            var b = this.docElem.clientHeight, c = a.innerHeight;
            return this.docElem == a.document.documentElement && c > b ? c : b;
        },
        getOffset: function(a) {
            var b = 0, c = 0;
            do isNaN(a.offsetTop) || (b += a.offsetTop), isNaN(a.offsetLeft) || (c += a.offsetLeft); while (a = a.offsetParent);
            return {
                top: b,
                left: c
            };
        },
        isElementInViewport: function(b, c) {
            var d = this.docElem.scrollTop + this.docElem.offsetTop;
            this.docElem == a.document.documentElement && (d = a.pageYOffset);
            var e = d + this.getViewportH(), f = b.offsetHeight, g = this.getOffset(b).top, h = g + f, c = c || 0;
            return e >= g + f * c && h >= d || "fixed" == (b.currentStyle ? b.currentStyle : a.getComputedStyle(b, null)).position;
        },
        extend: function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            return a;
        }
    }, b;
}(window), function(a, b) {
    "function" == typeof define && define.amd ? define("gridster-coords", [ "jquery" ], b) : a.GridsterCoords = b(a.$ || a.jQuery);
}(this, function(a) {
    function b(b) {
        return b[0] && a.isPlainObject(b[0]) ? this.data = b[0] : this.el = b, this.isCoords = !0, 
        this.coords = {}, this.init(), this;
    }
    var c = b.prototype;
    return c.init = function() {
        this.set(), this.original_coords = this.get();
    }, c.set = function(a, b) {
        var c = this.el;
        if (c && !a && (this.data = c.offset(), this.data.width = c.width(), this.data.height = c.height()), 
        c && a && !b) {
            var d = c.offset();
            this.data.top = d.top, this.data.left = d.left;
        }
        var e = this.data;
        return "undefined" == typeof e.left && (e.left = e.x1), "undefined" == typeof e.top && (e.top = e.y1), 
        this.coords.x1 = e.left, this.coords.y1 = e.top, this.coords.x2 = e.left + e.width, 
        this.coords.y2 = e.top + e.height, this.coords.cx = e.left + e.width / 2, this.coords.cy = e.top + e.height / 2, 
        this.coords.width = e.width, this.coords.height = e.height, this.coords.el = c || !1, 
        this;
    }, c.update = function(b) {
        if (!b && !this.el) return this;
        if (b) {
            var c = a.extend({}, this.data, b);
            return this.data = c, this.set(!0, !0);
        }
        return this.set(!0), this;
    }, c.get = function() {
        return this.coords;
    }, c.destroy = function() {
        this.el.removeData("coords"), delete this.el;
    }, a.fn.coords = function() {
        if (this.data("coords")) return this.data("coords");
        var a = new b(this, arguments[0]);
        return this.data("coords", a), a;
    }, b;
}), function(a, b) {
    "function" == typeof define && define.amd ? define("gridster-collision", [ "jquery", "gridster-coords" ], b) : a.GridsterCollision = b(a.$ || a.jQuery, a.GridsterCoords);
}(this, function(a) {
    function b(b, d, e) {
        this.options = a.extend(c, e), this.$element = b, this.last_colliders = [], this.last_colliders_coords = [], 
        this.set_colliders(d), this.init();
    }
    var c = {
        colliders_context: document.body,
        overlapping_region: "C"
    };
    b.defaults = c;
    var d = b.prototype;
    return d.init = function() {
        this.find_collisions();
    }, d.overlaps = function(a, b) {
        var c = !1, d = !1;
        return (b.x1 >= a.x1 && b.x1 <= a.x2 || b.x2 >= a.x1 && b.x2 <= a.x2 || a.x1 >= b.x1 && a.x2 <= b.x2) && (c = !0), 
        (b.y1 >= a.y1 && b.y1 <= a.y2 || b.y2 >= a.y1 && b.y2 <= a.y2 || a.y1 >= b.y1 && a.y2 <= b.y2) && (d = !0), 
        c && d;
    }, d.detect_overlapping_region = function(a, b) {
        var c = "", d = "";
        return a.y1 > b.cy && a.y1 < b.y2 && (c = "N"), a.y2 > b.y1 && a.y2 < b.cy && (c = "S"), 
        a.x1 > b.cx && a.x1 < b.x2 && (d = "W"), a.x2 > b.x1 && a.x2 < b.cx && (d = "E"), 
        c + d || "C";
    }, d.calculate_overlapped_area_coords = function(b, c) {
        var d = Math.max(b.x1, c.x1), e = Math.max(b.y1, c.y1), f = Math.min(b.x2, c.x2), g = Math.min(b.y2, c.y2);
        return a({
            left: d,
            top: e,
            width: f - d,
            height: g - e
        }).coords().get();
    }, d.calculate_overlapped_area = function(a) {
        return a.width * a.height;
    }, d.manage_colliders_start_stop = function(b, c, d) {
        for (var e = this.last_colliders_coords, f = 0, g = e.length; g > f; f++) -1 === a.inArray(e[f], b) && c.call(this, e[f]);
        for (var h = 0, i = b.length; i > h; h++) -1 === a.inArray(b[h], e) && d.call(this, b[h]);
    }, d.find_collisions = function(b) {
        for (var c = this, d = this.options.overlapping_region, e = [], f = [], g = this.colliders || this.$colliders, h = g.length, i = c.$element.coords().update(b || !1).get(); h--; ) {
            var j = c.$colliders ? a(g[h]) : g[h], k = j.isCoords ? j : j.coords(), l = k.get(), m = c.overlaps(i, l);
            if (m) {
                var n = c.detect_overlapping_region(i, l);
                if (n === d || "all" === d) {
                    var o = c.calculate_overlapped_area_coords(i, l), p = c.calculate_overlapped_area(o), q = {
                        area: p,
                        area_coords: o,
                        region: n,
                        coords: l,
                        player_coords: i,
                        el: j
                    };
                    c.options.on_overlap && c.options.on_overlap.call(this, q), e.push(k), f.push(q);
                }
            }
        }
        return (c.options.on_overlap_stop || c.options.on_overlap_start) && this.manage_colliders_start_stop(e, c.options.on_overlap_start, c.options.on_overlap_stop), 
        this.last_colliders_coords = e, f;
    }, d.get_closest_colliders = function(a) {
        var b = this.find_collisions(a);
        return b.sort(function(a, b) {
            return "C" === a.region && "C" === b.region ? a.coords.y1 < b.coords.y1 || a.coords.x1 < b.coords.x1 ? -1 : 1 : a.area < b.area ? 1 : 1;
        }), b;
    }, d.set_colliders = function(b) {
        "string" == typeof b || b instanceof a ? this.$colliders = a(b, this.options.colliders_context).not(this.$element) : this.colliders = a(b);
    }, a.fn.collision = function(a, c) {
        return new b(this, a, c);
    }, b;
}), function(a) {
    a.delay = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c);
        }, b);
    }, a.debounce = function(a, b, c) {
        var d;
        return function() {
            var e = this, f = arguments, g = function() {
                d = null, c || a.apply(e, f);
            };
            c && !d && a.apply(e, f), clearTimeout(d), d = setTimeout(g, b);
        };
    }, a.throttle = function(a, b) {
        var c, d, e, f, g, h, i = debounce(function() {
            g = f = !1;
        }, b);
        return function() {
            c = this, d = arguments;
            var j = function() {
                e = null, g && a.apply(c, d), i();
            };
            return e || (e = setTimeout(j, b)), f ? g = !0 : h = a.apply(c, d), i(), f = !0, 
            h;
        };
    };
}(window), function(a, b) {
    "function" == typeof define && define.amd ? define("gridster-draggable", [ "jquery" ], b) : a.GridsterDraggable = b(a.$ || a.jQuery);
}(this, function(a) {
    function b(b, d) {
        this.options = a.extend({}, c, d), this.$document = a(document), this.$container = a(b), 
        this.$dragitems = a(this.options.items, this.$container), this.is_dragging = !1, 
        this.player_min_left = 0 + this.options.offset_left, this.init();
    }
    var c = {
        items: "li",
        distance: 1,
        limit: !0,
        offset_left: 0,
        autoscroll: !0,
        ignore_dragging: [ "INPUT", "TEXTAREA", "SELECT", "BUTTON" ],
        handle: null,
        container_width: 0,
        move_element: !0,
        helper: !1,
        remove_helper: !0
    }, d = a(window), e = {
        x: "left",
        y: "top"
    }, f = !!("ontouchstart" in window), g = {
        start: "touchstart.gridster-draggable mousedown.gridster-draggable",
        move: "touchmove.gridster-draggable mousemove.gridster-draggable",
        end: "touchend.gridster-draggable mouseup.gridster-draggable"
    }, h = function(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    };
    b.defaults = c;
    var i = b.prototype;
    return i.init = function() {
        var b = this.$container.css("position");
        this.calculate_dimensions(), this.$container.css("position", "static" === b ? "relative" : b), 
        this.disabled = !1, this.events(), a(window).bind("resize.gridster-draggable", throttle(a.proxy(this.calculate_dimensions, this), 200));
    }, i.events = function() {
        this.$container.on("selectstart.gridster-draggable", a.proxy(this.on_select_start, this)), 
        this.$container.on(g.start, this.options.items, a.proxy(this.drag_handler, this)), 
        this.$document.on(g.end, a.proxy(function(a) {
            this.is_dragging = !1, this.disabled || (this.$document.off(g.move), this.drag_start && this.on_dragstop(a));
        }, this));
    }, i.get_actual_pos = function(a) {
        var b = a.position();
        return b;
    }, i.get_mouse_pos = function(a) {
        if (a.originalEvent && a.originalEvent.touches) {
            var b = a.originalEvent;
            a = b.touches.length ? b.touches[0] : b.changedTouches[0];
        }
        return {
            left: a.clientX,
            top: a.clientY
        };
    }, i.get_offset = function(b) {
        b.preventDefault();
        var c = this.get_mouse_pos(b), d = Math.round(c.left - this.mouse_init_pos.left), e = Math.round(c.top - this.mouse_init_pos.top), f = Math.round(this.el_init_offset.left + d - this.baseX + a(window).scrollLeft() - this.win_offset_x), g = Math.round(this.el_init_offset.top + e - this.baseY + a(window).scrollTop() - this.win_offset_y);
        return this.options.limit && (f > this.player_max_left ? f = this.player_max_left : f < this.player_min_left && (f = this.player_min_left)), 
        {
            position: {
                left: f,
                top: g
            },
            pointer: {
                left: c.left,
                top: c.top,
                diff_left: d + (a(window).scrollLeft() - this.win_offset_x),
                diff_top: e + (a(window).scrollTop() - this.win_offset_y)
            }
        };
    }, i.get_drag_data = function(a) {
        var b = this.get_offset(a);
        return b.$player = this.$player, b.$helper = this.helper ? this.$helper : this.$player, 
        b;
    }, i.set_limits = function(a) {
        return a || (a = this.$container.width()), this.player_max_left = a - this.player_width + -this.options.offset_left, 
        this.options.container_width = a, this;
    }, i.scroll_in = function(b, c) {
        var f, g = e[b], i = 50, j = 30, k = "x" === b, l = k ? this.window_width : this.window_height, m = k ? a(document).width() : a(document).height(), n = k ? this.$player.width() : this.$player.height(), o = d["scroll" + h(g)](), p = o, q = p + l, r = q - i, s = p + i, t = p + c.pointer[g], u = m - l + n;
        return t >= r && (f = o + j, u > f && (d["scroll" + h(g)](f), this["scroll_offset_" + b] += j)), 
        s >= t && (f = o - j, f > 0 && (d["scroll" + h(g)](f), this["scroll_offset_" + b] -= j)), 
        this;
    }, i.manage_scroll = function(a) {
        this.scroll_in("x", a), this.scroll_in("y", a);
    }, i.calculate_dimensions = function() {
        this.window_height = d.height(), this.window_width = d.width();
    }, i.drag_handler = function(b) {
        b.target.nodeName;
        if (!this.disabled && (1 === b.which || f) && !this.ignore_drag(b)) {
            var c = this, d = !0;
            return this.$player = a(b.currentTarget), this.el_init_pos = this.get_actual_pos(this.$player), 
            this.mouse_init_pos = this.get_mouse_pos(b), this.offsetY = this.mouse_init_pos.top - this.el_init_pos.top, 
            this.$document.on(g.move, function(a) {
                var b = c.get_mouse_pos(a), e = Math.abs(b.left - c.mouse_init_pos.left), f = Math.abs(b.top - c.mouse_init_pos.top);
                return e > c.options.distance || f > c.options.distance ? d ? (d = !1, c.on_dragstart.call(c, a), 
                !1) : (c.is_dragging === !0 && c.on_dragmove.call(c, a), !1) : !1;
            }), f ? void 0 : !1;
        }
    }, i.on_dragstart = function(b) {
        if (b.preventDefault(), this.is_dragging) return this;
        this.drag_start = this.is_dragging = !0;
        var c = this.$container.offset();
        return this.baseX = Math.round(c.left), this.baseY = Math.round(c.top), this.initial_container_width = this.options.container_width || this.$container.width(), 
        "clone" === this.options.helper ? (this.$helper = this.$player.clone().appendTo(this.$container).addClass("helper"), 
        this.helper = !0) : this.helper = !1, this.win_offset_y = a(window).scrollTop(), 
        this.win_offset_x = a(window).scrollLeft(), this.scroll_offset_y = 0, this.scroll_offset_x = 0, 
        this.el_init_offset = this.$player.offset(), this.player_width = this.$player.width(), 
        this.player_height = this.$player.height(), this.set_limits(this.options.container_width), 
        this.options.start && this.options.start.call(this.$player, b, this.get_drag_data(b)), 
        !1;
    }, i.on_dragmove = function(a) {
        var b = this.get_drag_data(a);
        this.options.autoscroll && this.manage_scroll(b), this.options.move_element && (this.helper ? this.$helper : this.$player).css({
            position: "absolute",
            left: b.position.left,
            top: b.position.top
        });
        var c = this.last_position || b.position;
        return b.prev_position = c, this.options.drag && this.options.drag.call(this.$player, a, b), 
        this.last_position = b.position, !1;
    }, i.on_dragstop = function(a) {
        var b = this.get_drag_data(a);
        return this.drag_start = !1, this.options.stop && this.options.stop.call(this.$player, a, b), 
        this.helper && this.options.remove_helper && this.$helper.remove(), !1;
    }, i.on_select_start = function(a) {
        return this.disabled || this.ignore_drag(a) ? void 0 : !1;
    }, i.enable = function() {
        this.disabled = !1;
    }, i.disable = function() {
        this.disabled = !0;
    }, i.destroy = function() {
        this.disable(), this.$container.off(".gridster-draggable"), this.$document.off(".gridster-draggable"), 
        a(window).off(".gridster-draggable"), a.removeData(this.$container, "drag");
    }, i.ignore_drag = function(b) {
        return this.options.handle ? !a(b.target).is(this.options.handle) : a.isFunction(this.options.ignore_dragging) ? this.options.ignore_dragging(b) : a(b.target).is(this.options.ignore_dragging.join(", "));
    }, a.fn.drag = function(a) {
        return new b(this, a);
    }, b;
}), function(a, b) {
    "function" == typeof define && define.amd ? define([ "jquery", "gridster-draggable", "gridster-collision" ], b) : a.Gridster = b(a.$ || a.jQuery, a.GridsterDraggable, a.GridsterCollision);
}(this, function(a, b) {
    function c(b, c) {
        this.options = a.extend(!0, {}, d, c), this.$el = a(b), this.$wrapper = this.$el.parent(), 
        this.$widgets = this.$el.children(this.options.widget_selector).addClass("gs-w"), 
        this.widgets = [], this.$changed = a([]), this.wrapper_width = this.$wrapper.width(), 
        this.min_widget_width = 2 * this.options.widget_margins[0] + this.options.widget_base_dimensions[0], 
        this.min_widget_height = 2 * this.options.widget_margins[1] + this.options.widget_base_dimensions[1], 
        this.generated_stylesheets = [], this.$style_tags = a([]), this.options.auto_init && this.init();
    }
    var d = {
        namespace: "",
        widget_selector: "li",
        widget_margins: [ 10, 10 ],
        widget_base_dimensions: [ 400, 225 ],
        extra_rows: 0,
        extra_cols: 0,
        min_cols: 1,
        max_cols: 1/0,
        min_rows: 15,
        max_size_x: !1,
        autogrow_cols: !1,
        autogenerate_stylesheet: !0,
        avoid_overlapped_widgets: !0,
        auto_init: !0,
        serialize_params: function(a, b) {
            return {
                col: b.col,
                row: b.row,
                size_x: b.size_x,
                size_y: b.size_y
            };
        },
        collision: {},
        draggable: {
            items: ".gs-w",
            distance: 4,
            ignore_dragging: b.defaults.ignore_dragging.slice(0)
        },
        resize: {
            enabled: !1,
            axes: [ "both" ],
            handle_append_to: "",
            handle_class: "gs-resize-handle",
            max_size: [ 1/0, 1/0 ],
            min_size: [ 1, 1 ]
        }
    };
    c.defaults = d, c.generated_stylesheets = [], c.sort_by_row_asc = function(b) {
        return b = b.sort(function(b, c) {
            return b.row || (b = a(b).coords().grid, c = a(c).coords().grid), b.row > c.row ? 1 : -1;
        });
    }, c.sort_by_row_and_col_asc = function(a) {
        return a = a.sort(function(a, b) {
            return a.row > b.row || a.row === b.row && a.col > b.col ? 1 : -1;
        });
    }, c.sort_by_col_asc = function(a) {
        return a = a.sort(function(a, b) {
            return a.col > b.col ? 1 : -1;
        });
    }, c.sort_by_row_desc = function(a) {
        return a = a.sort(function(a, b) {
            return a.row + a.size_y < b.row + b.size_y ? 1 : -1;
        });
    };
    var e = c.prototype;
    return e.init = function() {
        this.options.resize.enabled && this.setup_resize(), this.generate_grid_and_stylesheet(), 
        this.get_widgets_from_DOM(), this.set_dom_grid_height(), this.set_dom_grid_width(), 
        this.$wrapper.addClass("ready"), this.draggable(), this.options.resize.enabled && this.resizable(), 
        a(window).bind("resize.gridster", throttle(a.proxy(this.recalculate_faux_grid, this), 200));
    }, e.disable = function() {
        return this.$wrapper.find(".player-revert").removeClass("player-revert"), this.drag_api.disable(), 
        this;
    }, e.enable = function() {
        return this.drag_api.enable(), this;
    }, e.disable_resize = function() {
        return this.$el.addClass("gs-resize-disabled"), this.resize_api.disable(), this;
    }, e.enable_resize = function() {
        return this.$el.removeClass("gs-resize-disabled"), this.resize_api.enable(), this;
    }, e.add_widget = function(b, c, d, e, f, g, h) {
        var i;
        c || (c = 1), d || (d = 1), !e & !f ? i = this.next_position(c, d) : (i = {
            col: e,
            row: f,
            size_x: c,
            size_y: d
        }, this.empty_cells(e, f, c, d));
        var j = a(b).attr({
            "data-col": i.col,
            "data-row": i.row,
            "data-sizex": c,
            "data-sizey": d
        }).addClass("gs-w").appendTo(this.$el).hide();
        return this.$widgets = this.$widgets.add(j), this.register_widget(j), this.add_faux_rows(i.size_y), 
        g && this.set_widget_max_size(j, g), h && this.set_widget_min_size(j, h), this.set_dom_grid_width(), 
        this.set_dom_grid_height(), this.drag_api.set_limits(this.cols * this.min_widget_width), 
        j.fadeIn();
    }, e.set_widget_min_size = function(a, b) {
        if (a = "number" == typeof a ? this.$widgets.eq(a) : a, !a.length) return this;
        var c = a.data("coords").grid;
        return c.min_size_x = b[0], c.min_size_y = b[1], this;
    }, e.set_widget_max_size = function(a, b) {
        if (a = "number" == typeof a ? this.$widgets.eq(a) : a, !a.length) return this;
        var c = a.data("coords").grid;
        return c.max_size_x = b[0], c.max_size_y = b[1], this;
    }, e.add_resize_handle = function(b) {
        var c = this.options.resize.handle_append_to;
        return a(this.resize_handle_tpl).appendTo(c ? a(c, b) : b), this;
    }, e.resize_widget = function(a, b, c, d) {
        var e = a.coords().grid, f = e.col, g = this.options.max_cols, h = e.size_y, i = e.col, j = i;
        b || (b = e.size_x), c || (c = e.size_y), 1/0 !== g && (b = Math.min(b, g - f + 1)), 
        c > h && this.add_faux_rows(Math.max(c - h, 0));
        var k = f + b - 1;
        k > this.cols && this.add_faux_cols(k - this.cols);
        var l = {
            col: j,
            row: e.row,
            size_x: b,
            size_y: c
        };
        return this.mutate_widget_in_gridmap(a, e, l), this.set_dom_grid_height(), this.set_dom_grid_width(), 
        d && d.call(this, l.size_x, l.size_y), a;
    }, e.mutate_widget_in_gridmap = function(b, c, d) {
        var e = (c.size_x, c.size_y), f = this.get_cells_occupied(c), g = this.get_cells_occupied(d), h = [];
        a.each(f.cols, function(b, c) {
            -1 === a.inArray(c, g.cols) && h.push(c);
        });
        var i = [];
        a.each(g.cols, function(b, c) {
            -1 === a.inArray(c, f.cols) && i.push(c);
        });
        var j = [];
        a.each(f.rows, function(b, c) {
            -1 === a.inArray(c, g.rows) && j.push(c);
        });
        var k = [];
        if (a.each(g.rows, function(b, c) {
            -1 === a.inArray(c, f.rows) && k.push(c);
        }), this.remove_from_gridmap(c), i.length) {
            var l = [ d.col, d.row, d.size_x, Math.min(e, d.size_y), b ];
            this.empty_cells.apply(this, l);
        }
        if (k.length) {
            var m = [ d.col, d.row, d.size_x, d.size_y, b ];
            this.empty_cells.apply(this, m);
        }
        if (c.col = d.col, c.row = d.row, c.size_x = d.size_x, c.size_y = d.size_y, this.add_to_gridmap(d, b), 
        b.removeClass("player-revert"), b.data("coords").update({
            width: d.size_x * this.options.widget_base_dimensions[0] + (d.size_x - 1) * this.options.widget_margins[0] * 2,
            height: d.size_y * this.options.widget_base_dimensions[1] + (d.size_y - 1) * this.options.widget_margins[1] * 2
        }), b.attr({
            "data-col": d.col,
            "data-row": d.row,
            "data-sizex": d.size_x,
            "data-sizey": d.size_y
        }), h.length) {
            var n = [ h[0], d.row, h.length, Math.min(e, d.size_y), b ];
            this.remove_empty_cells.apply(this, n);
        }
        if (j.length) {
            var o = [ d.col, d.row, d.size_x, d.size_y, b ];
            this.remove_empty_cells.apply(this, o);
        }
        return this.move_widget_up(b), this;
    }, e.empty_cells = function(b, c, d, e, f) {
        var g = this.widgets_below({
            col: b,
            row: c - e,
            size_x: d,
            size_y: e
        });
        return g.not(f).each(a.proxy(function(b, d) {
            var f = a(d).coords().grid;
            if (f.row <= c + e - 1) {
                var g = c + e - f.row;
                this.move_widget_down(a(d), g);
            }
        }, this)), this.set_dom_grid_height(), this;
    }, e.remove_empty_cells = function(b, c, d, e, f) {
        var g = this.widgets_below({
            col: b,
            row: c,
            size_x: d,
            size_y: e
        });
        return g.not(f).each(a.proxy(function(b, c) {
            this.move_widget_up(a(c), e);
        }, this)), this.set_dom_grid_height(), this;
    }, e.next_position = function(a, b) {
        a || (a = 1), b || (b = 1);
        for (var d, e = this.gridmap, f = e.length, g = [], h = 1; f > h; h++) {
            d = e[h].length;
            for (var i = 1; d >= i; i++) {
                var j = this.can_move_to({
                    size_x: a,
                    size_y: b
                }, h, i);
                j && g.push({
                    col: h,
                    row: i,
                    size_y: b,
                    size_x: a
                });
            }
        }
        return g.length ? c.sort_by_row_and_col_asc(g)[0] : !1;
    }, e.remove_widget = function(b, c, d) {
        var e = b instanceof a ? b : a(b), f = e.coords().grid;
        a.isFunction(c) && (d = c, c = !1), this.cells_occupied_by_placeholder = {}, this.$widgets = this.$widgets.not(e);
        var g = this.widgets_below(e);
        return this.remove_from_gridmap(f), e.fadeOut(a.proxy(function() {
            e.remove(), c || g.each(a.proxy(function(b, c) {
                this.move_widget_up(a(c), f.size_y);
            }, this)), this.set_dom_grid_height(), d && d.call(this, b);
        }, this)), this;
    }, e.remove_all_widgets = function(b) {
        return this.$widgets.each(a.proxy(function(a, c) {
            this.remove_widget(c, !0, b);
        }, this)), this;
    }, e.serialize = function(b) {
        return b || (b = this.$widgets), b.map(a.proxy(function(b, c) {
            var d = a(c);
            return this.options.serialize_params(d, d.coords().grid);
        }, this)).get();
    }, e.serialize_changed = function() {
        return this.serialize(this.$changed);
    }, e.dom_to_coords = function(a) {
        return {
            col: parseInt(a.attr("data-col"), 10),
            row: parseInt(a.attr("data-row"), 10),
            size_x: parseInt(a.attr("data-sizex"), 10) || 1,
            size_y: parseInt(a.attr("data-sizey"), 10) || 1,
            max_size_x: parseInt(a.attr("data-max-sizex"), 10) || !1,
            max_size_y: parseInt(a.attr("data-max-sizey"), 10) || !1,
            min_size_x: parseInt(a.attr("data-min-sizex"), 10) || !1,
            min_size_y: parseInt(a.attr("data-min-sizey"), 10) || !1,
            el: a
        };
    }, e.register_widget = function(b) {
        var c = b instanceof jQuery, d = c ? this.dom_to_coords(b) : b, e = !1;
        c || (b = d.el);
        var f = this.can_go_widget_up(d);
        return f && (d.row = f, b.attr("data-row", f), this.$el.trigger("gridster:positionchanged", [ d ]), 
        e = !0), this.options.avoid_overlapped_widgets && !this.can_move_to({
            size_x: d.size_x,
            size_y: d.size_y
        }, d.col, d.row) && (a.extend(d, this.next_position(d.size_x, d.size_y)), b.attr({
            "data-col": d.col,
            "data-row": d.row,
            "data-sizex": d.size_x,
            "data-sizey": d.size_y
        }), e = !0), b.data("coords", b.coords()), b.data("coords").grid = d, this.add_to_gridmap(d, b), 
        this.options.resize.enabled && this.add_resize_handle(b), e;
    }, e.update_widget_position = function(a, b) {
        return this.for_each_cell_occupied(a, function(a, c) {
            return this.gridmap[a] ? void (this.gridmap[a][c] = b) : this;
        }), this;
    }, e.remove_from_gridmap = function(a) {
        return this.update_widget_position(a, !1);
    }, e.add_to_gridmap = function(b, c) {
        if (this.update_widget_position(b, c || b.el), b.el) {
            var d = this.widgets_below(b.el);
            d.each(a.proxy(function(b, c) {
                this.move_widget_up(a(c));
            }, this));
        }
    }, e.draggable = function() {
        var b = this, c = a.extend(!0, {}, this.options.draggable, {
            offset_left: this.options.widget_margins[0],
            offset_top: this.options.widget_margins[1],
            container_width: this.cols * this.min_widget_width,
            limit: !0,
            start: function(c, d) {
                b.$widgets.filter(".player-revert").removeClass("player-revert"), b.$player = a(this), 
                b.$helper = a(d.$helper), b.helper = !b.$helper.is(b.$player), b.on_start_drag.call(b, c, d), 
                b.$el.trigger("gridster:dragstart");
            },
            stop: function(a, c) {
                b.on_stop_drag.call(b, a, c), b.$el.trigger("gridster:dragstop");
            },
            drag: throttle(function(a, c) {
                b.on_drag.call(b, a, c), b.$el.trigger("gridster:drag");
            }, 60)
        });
        return this.drag_api = this.$el.drag(c), this;
    }, e.resizable = function() {
        return this.resize_api = this.$el.drag({
            items: "." + this.options.resize.handle_class,
            offset_left: this.options.widget_margins[0],
            container_width: this.container_width,
            move_element: !1,
            resize: !0,
            limit: this.options.autogrow_cols ? !1 : !0,
            start: a.proxy(this.on_start_resize, this),
            stop: a.proxy(function(b, c) {
                delay(a.proxy(function() {
                    this.on_stop_resize(b, c);
                }, this), 120);
            }, this),
            drag: throttle(a.proxy(this.on_resize, this), 60)
        }), this;
    }, e.setup_resize = function() {
        this.resize_handle_class = this.options.resize.handle_class;
        var b = this.options.resize.axes, c = '<span class="' + this.resize_handle_class + " " + this.resize_handle_class + '-{type}" />';
        return this.resize_handle_tpl = a.map(b, function(a) {
            return c.replace("{type}", a);
        }).join(""), a.isArray(this.options.draggable.ignore_dragging) && this.options.draggable.ignore_dragging.push("." + this.resize_handle_class), 
        this;
    }, e.on_start_drag = function(b, c) {
        this.$helper.add(this.$player).add(this.$wrapper).addClass("dragging"), this.highest_col = this.get_highest_occupied_cell().col, 
        this.$player.addClass("player"), this.player_grid_data = this.$player.coords().grid, 
        this.placeholder_grid_data = a.extend({}, this.player_grid_data), this.set_dom_grid_height(this.$el.height() + this.player_grid_data.size_y * this.min_widget_height), 
        this.set_dom_grid_width(this.cols);
        var d = this.player_grid_data.size_x, e = this.cols - this.highest_col;
        this.options.autogrow_cols && d >= e && this.add_faux_cols(Math.min(d - e, 1));
        var f = this.faux_grid, g = this.$player.data("coords").coords;
        this.cells_occupied_by_player = this.get_cells_occupied(this.player_grid_data), 
        this.cells_occupied_by_placeholder = this.get_cells_occupied(this.placeholder_grid_data), 
        this.last_cols = [], this.last_rows = [], this.collision_api = this.$helper.collision(f, this.options.collision), 
        this.$preview_holder = a("<" + this.$player.get(0).tagName + " />", {
            "class": "preview-holder",
            "data-row": this.$player.attr("data-row"),
            "data-col": this.$player.attr("data-col"),
            css: {
                width: g.width,
                height: g.height
            }
        }).appendTo(this.$el), this.options.draggable.start && this.options.draggable.start.call(this, b, c);
    }, e.on_drag = function(a, b) {
        if (null === this.$player) return !1;
        var c = {
            left: b.position.left + this.baseX,
            top: b.position.top + this.baseY
        };
        if (this.options.autogrow_cols) {
            var d = this.placeholder_grid_data.col + this.placeholder_grid_data.size_x - 1;
            d >= this.cols - 1 && this.options.max_cols >= this.cols + 1 && (this.add_faux_cols(1), 
            this.set_dom_grid_width(this.cols + 1), this.drag_api.set_limits(this.container_width)), 
            this.collision_api.set_colliders(this.faux_grid);
        }
        this.colliders_data = this.collision_api.get_closest_colliders(c), this.on_overlapped_column_change(this.on_start_overlapping_column, this.on_stop_overlapping_column), 
        this.on_overlapped_row_change(this.on_start_overlapping_row, this.on_stop_overlapping_row), 
        this.helper && this.$player && this.$player.css({
            left: b.position.left,
            top: b.position.top
        }), this.options.draggable.drag && this.options.draggable.drag.call(this, a, b);
    }, e.on_stop_drag = function(a, b) {
        this.$helper.add(this.$player).add(this.$wrapper).removeClass("dragging"), b.position.left = b.position.left + this.baseX, 
        b.position.top = b.position.top + this.baseY, this.colliders_data = this.collision_api.get_closest_colliders(b.position), 
        this.on_overlapped_column_change(this.on_start_overlapping_column, this.on_stop_overlapping_column), 
        this.on_overlapped_row_change(this.on_start_overlapping_row, this.on_stop_overlapping_row), 
        this.$player.addClass("player-revert").removeClass("player").attr({
            "data-col": this.placeholder_grid_data.col,
            "data-row": this.placeholder_grid_data.row
        }).css({
            left: "",
            top: ""
        }), this.$changed = this.$changed.add(this.$player), this.cells_occupied_by_player = this.get_cells_occupied(this.placeholder_grid_data), 
        this.set_cells_player_occupies(this.placeholder_grid_data.col, this.placeholder_grid_data.row), 
        this.$player.coords().grid.row = this.placeholder_grid_data.row, this.$player.coords().grid.col = this.placeholder_grid_data.col, 
        this.options.draggable.stop && this.options.draggable.stop.call(this, a, b), this.$preview_holder.remove(), 
        this.$player = null, this.$helper = null, this.placeholder_grid_data = {}, this.player_grid_data = {}, 
        this.cells_occupied_by_placeholder = {}, this.cells_occupied_by_player = {}, this.set_dom_grid_height(), 
        this.set_dom_grid_width(), this.options.autogrow_cols && this.drag_api.set_limits(this.cols * this.min_widget_width);
    }, e.on_start_resize = function(b, c) {
        this.$resized_widget = c.$player.closest(".gs-w"), this.resize_coords = this.$resized_widget.coords(), 
        this.resize_wgd = this.resize_coords.grid, this.resize_initial_width = this.resize_coords.coords.width, 
        this.resize_initial_height = this.resize_coords.coords.height, this.resize_initial_sizex = this.resize_coords.grid.size_x, 
        this.resize_initial_sizey = this.resize_coords.grid.size_y, this.resize_initial_col = this.resize_coords.grid.col, 
        this.resize_last_sizex = this.resize_initial_sizex, this.resize_last_sizey = this.resize_initial_sizey, 
        this.resize_max_size_x = Math.min(this.resize_wgd.max_size_x || this.options.resize.max_size[0], this.options.max_cols - this.resize_initial_col + 1), 
        this.resize_max_size_y = this.resize_wgd.max_size_y || this.options.resize.max_size[1], 
        this.resize_min_size_x = this.resize_wgd.min_size_x || this.options.resize.min_size[0] || 1, 
        this.resize_min_size_y = this.resize_wgd.min_size_y || this.options.resize.min_size[1] || 1, 
        this.resize_initial_last_col = this.get_highest_occupied_cell().col, this.set_dom_grid_width(this.cols), 
        this.resize_dir = {
            right: c.$player.is("." + this.resize_handle_class + "-x"),
            bottom: c.$player.is("." + this.resize_handle_class + "-y")
        }, this.$resized_widget.css({
            "min-width": this.options.widget_base_dimensions[0],
            "min-height": this.options.widget_base_dimensions[1]
        });
        var d = this.$resized_widget.get(0).tagName;
        this.$resize_preview_holder = a("<" + d + " />", {
            "class": "preview-holder resize-preview-holder",
            "data-row": this.$resized_widget.attr("data-row"),
            "data-col": this.$resized_widget.attr("data-col"),
            css: {
                width: this.resize_initial_width,
                height: this.resize_initial_height
            }
        }).appendTo(this.$el), this.$resized_widget.addClass("resizing"), this.options.resize.start && this.options.resize.start.call(this, b, c, this.$resized_widget), 
        this.$el.trigger("gridster:resizestart");
    }, e.on_stop_resize = function(b, c) {
        this.$resized_widget.removeClass("resizing").css({
            width: "",
            height: ""
        }), delay(a.proxy(function() {
            this.$resize_preview_holder.remove().css({
                "min-width": "",
                "min-height": ""
            }), this.options.resize.stop && this.options.resize.stop.call(this, b, c, this.$resized_widget), 
            this.$el.trigger("gridster:resizestop");
        }, this), 300), this.set_dom_grid_width(), this.options.autogrow_cols && this.drag_api.set_limits(this.cols * this.min_widget_width);
    }, e.on_resize = function(a, b) {
        var c, d = b.pointer.diff_left, e = b.pointer.diff_top, f = this.options.widget_base_dimensions[0], g = this.options.widget_base_dimensions[1], h = this.options.widget_margins[0], i = this.options.widget_margins[1], j = this.resize_max_size_x, k = this.resize_min_size_x, l = this.resize_max_size_y, m = this.resize_min_size_y, n = this.options.autogrow_cols, o = 1/0, p = 1/0, q = Math.ceil(d / (f + 2 * h) - .2), r = Math.ceil(e / (g + 2 * i) - .2), s = Math.max(1, this.resize_initial_sizex + q), t = Math.max(1, this.resize_initial_sizey + r), u = this.container_width / this.min_widget_width - this.resize_initial_col + 1, v = u * this.min_widget_width - 2 * h;
        if (s = Math.max(Math.min(s, j), k), s = Math.min(u, s), c = j * f + (s - 1) * h * 2, 
        o = Math.min(c, v), min_width = k * f + (s - 1) * h * 2, t = Math.max(Math.min(t, l), m), 
        p = l * g + (t - 1) * i * 2, min_height = m * g + (t - 1) * i * 2, this.resize_dir.right ? t = this.resize_initial_sizey : this.resize_dir.bottom && (s = this.resize_initial_sizex), 
        n) {
            var w = this.resize_initial_col + s - 1;
            n && this.resize_initial_last_col <= w && (this.set_dom_grid_width(Math.max(w + 1, this.cols)), 
            this.cols < w && this.add_faux_cols(w - this.cols));
        }
        var x = {};
        !this.resize_dir.bottom && (x.width = Math.max(Math.min(this.resize_initial_width + d, o), min_width)), 
        !this.resize_dir.right && (x.height = Math.max(Math.min(this.resize_initial_height + e, p), min_height)), 
        this.$resized_widget.css(x), (s !== this.resize_last_sizex || t !== this.resize_last_sizey) && (this.resize_widget(this.$resized_widget, s, t), 
        this.set_dom_grid_width(this.cols), this.$resize_preview_holder.css({
            width: "",
            height: ""
        }).attr({
            "data-row": this.$resized_widget.attr("data-row"),
            "data-sizex": s,
            "data-sizey": t
        })), this.options.resize.resize && this.options.resize.resize.call(this, a, b, this.$resized_widget), 
        this.$el.trigger("gridster:resize"), this.resize_last_sizex = s, this.resize_last_sizey = t;
    }, e.on_overlapped_column_change = function(b, c) {
        if (!this.colliders_data.length) return this;
        var d, e = this.get_targeted_columns(this.colliders_data[0].el.data.col), f = this.last_cols.length, g = e.length;
        for (d = 0; g > d; d++) -1 === a.inArray(e[d], this.last_cols) && (b || a.noop).call(this, e[d]);
        for (d = 0; f > d; d++) -1 === a.inArray(this.last_cols[d], e) && (c || a.noop).call(this, this.last_cols[d]);
        return this.last_cols = e, this;
    }, e.on_overlapped_row_change = function(b, c) {
        if (!this.colliders_data.length) return this;
        var d, e = this.get_targeted_rows(this.colliders_data[0].el.data.row), f = this.last_rows.length, g = e.length;
        for (d = 0; g > d; d++) -1 === a.inArray(e[d], this.last_rows) && (b || a.noop).call(this, e[d]);
        for (d = 0; f > d; d++) -1 === a.inArray(this.last_rows[d], e) && (c || a.noop).call(this, this.last_rows[d]);
        this.last_rows = e;
    }, e.set_player = function(a, b, c) {
        var d = this;
        c || this.empty_cells_player_occupies();
        var e = c ? {
            col: a
        } : d.colliders_data[0].el.data, f = e.col, g = b || e.row;
        this.player_grid_data = {
            col: f,
            row: g,
            size_y: this.player_grid_data.size_y,
            size_x: this.player_grid_data.size_x
        }, this.cells_occupied_by_player = this.get_cells_occupied(this.player_grid_data);
        var h = this.get_widgets_overlapped(this.player_grid_data), i = this.widgets_constraints(h);
        if (this.manage_movements(i.can_go_up, f, g), this.manage_movements(i.can_not_go_up, f, g), 
        !h.length) {
            var j = this.can_go_player_up(this.player_grid_data);
            j !== !1 && (g = j), this.set_placeholder(f, g);
        }
        return {
            col: f,
            row: g
        };
    }, e.widgets_constraints = function(b) {
        var d, e = a([]), f = [], g = [];
        return b.each(a.proxy(function(b, c) {
            var d = a(c), h = d.coords().grid;
            this.can_go_widget_up(h) ? (e = e.add(d), f.push(h)) : g.push(h);
        }, this)), d = b.not(e), {
            can_go_up: c.sort_by_row_asc(f),
            can_not_go_up: c.sort_by_row_desc(g)
        };
    }, e.manage_movements = function(b, c, d) {
        return a.each(b, a.proxy(function(a, b) {
            var e = b, f = e.el, g = this.can_go_widget_up(e);
            if (g) this.move_widget_to(f, g), this.set_placeholder(c, g + e.size_y); else {
                var h = this.can_go_player_up(this.player_grid_data);
                if (!h) {
                    var i = d + this.player_grid_data.size_y - e.row;
                    this.move_widget_down(f, i), this.set_placeholder(c, d);
                }
            }
        }, this)), this;
    }, e.is_player = function(a, b) {
        if (b && !this.gridmap[a]) return !1;
        var c = b ? this.gridmap[a][b] : a;
        return c && (c.is(this.$player) || c.is(this.$helper));
    }, e.is_player_in = function(b, c) {
        var d = this.cells_occupied_by_player || {};
        return a.inArray(b, d.cols) >= 0 && a.inArray(c, d.rows) >= 0;
    }, e.is_placeholder_in = function(b, c) {
        var d = this.cells_occupied_by_placeholder || {};
        return this.is_placeholder_in_col(b) && a.inArray(c, d.rows) >= 0;
    }, e.is_placeholder_in_col = function(b) {
        var c = this.cells_occupied_by_placeholder || [];
        return a.inArray(b, c.cols) >= 0;
    }, e.is_empty = function(a, b) {
        return "undefined" != typeof this.gridmap[a] ? "undefined" != typeof this.gridmap[a][b] && this.gridmap[a][b] === !1 ? !0 : !1 : !0;
    }, e.is_occupied = function(a, b) {
        return this.gridmap[a] && this.gridmap[a][b] ? !0 : !1;
    }, e.is_widget = function(a, b) {
        var c = this.gridmap[a];
        return c ? (c = c[b], c ? c : !1) : !1;
    }, e.is_widget_under_player = function(a, b) {
        return this.is_widget(a, b) ? this.is_player_in(a, b) : !1;
    }, e.get_widgets_under_player = function(b) {
        b || (b = this.cells_occupied_by_player || {
            cols: [],
            rows: []
        });
        var c = a([]);
        return a.each(b.cols, a.proxy(function(d, e) {
            a.each(b.rows, a.proxy(function(a, b) {
                this.is_widget(e, b) && (c = c.add(this.gridmap[e][b]));
            }, this));
        }, this)), c;
    }, e.set_placeholder = function(b, c) {
        var d = a.extend({}, this.placeholder_grid_data), e = this.widgets_below({
            col: d.col,
            row: d.row,
            size_y: d.size_y,
            size_x: d.size_x
        }), f = b + d.size_x - 1;
        f > this.cols && (b -= f - b);
        var g = this.placeholder_grid_data.row < c, h = this.placeholder_grid_data.col !== b;
        this.placeholder_grid_data.col = b, this.placeholder_grid_data.row = c, this.cells_occupied_by_placeholder = this.get_cells_occupied(this.placeholder_grid_data), 
        this.$preview_holder.attr({
            "data-row": c,
            "data-col": b
        }), (g || h) && e.each(a.proxy(function(c, e) {
            this.move_widget_up(a(e), this.placeholder_grid_data.col - b + d.size_y);
        }, this));
        var i = this.get_widgets_under_player(this.cells_occupied_by_placeholder);
        i.length && i.each(a.proxy(function(b, e) {
            var f = a(e);
            this.move_widget_down(f, c + d.size_y - f.data("coords").grid.row);
        }, this));
    }, e.can_go_player_up = function(a) {
        var b = a.row + a.size_y - 1, c = !0, d = [], e = 1e4, f = this.get_widgets_under_player();
        return this.for_each_column_occupied(a, function(a) {
            var g = this.gridmap[a], h = b + 1;
            for (d[a] = []; --h > 0 && (this.is_empty(a, h) || this.is_player(a, h) || this.is_widget(a, h) && g[h].is(f)); ) d[a].push(h), 
            e = e > h ? h : e;
            return 0 === d[a].length ? (c = !1, !0) : void d[a].sort(function(a, b) {
                return a - b;
            });
        }), c ? this.get_valid_rows(a, d, e) : !1;
    }, e.can_go_widget_up = function(a) {
        var b = a.row + a.size_y - 1, c = !0, d = [], e = 1e4;
        return this.for_each_column_occupied(a, function(f) {
            var g = this.gridmap[f];
            d[f] = [];
            for (var h = b + 1; --h > 0 && (!this.is_widget(f, h) || this.is_player_in(f, h) || g[h].is(a.el)); ) this.is_player(f, h) || this.is_placeholder_in(f, h) || this.is_player_in(f, h) || d[f].push(h), 
            e > h && (e = h);
            return 0 === d[f].length ? (c = !1, !0) : void d[f].sort(function(a, b) {
                return a - b;
            });
        }), c ? this.get_valid_rows(a, d, e) : !1;
    }, e.get_valid_rows = function(b, c, d) {
        for (var e = b.row, f = b.row + b.size_y - 1, g = b.size_y, h = d - 1, i = []; ++h <= f; ) {
            var j = !0;
            if (a.each(c, function(b, c) {
                a.isArray(c) && -1 === a.inArray(h, c) && (j = !1);
            }), j === !0 && (i.push(h), i.length === g)) break;
        }
        var k = !1;
        return 1 === g ? i[0] !== e && (k = i[0] || !1) : i[0] !== e && (k = this.get_consecutive_numbers_index(i, g)), 
        k;
    }, e.get_consecutive_numbers_index = function(a, b) {
        for (var c = a.length, d = [], e = !0, f = -1, g = 0; c > g; g++) {
            if (e || a[g] === f + 1) {
                if (d.push(g), d.length === b) break;
                e = !1;
            } else d = [], e = !0;
            f = a[g];
        }
        return d.length >= b ? a[d[0]] : !1;
    }, e.get_widgets_overlapped = function() {
        var b = a([]), c = [], d = this.cells_occupied_by_player.rows.slice(0);
        return d.reverse(), a.each(this.cells_occupied_by_player.cols, a.proxy(function(e, f) {
            a.each(d, a.proxy(function(d, e) {
                if (!this.gridmap[f]) return !0;
                var g = this.gridmap[f][e];
                this.is_occupied(f, e) && !this.is_player(g) && -1 === a.inArray(g, c) && (b = b.add(g), 
                c.push(g));
            }, this));
        }, this)), b;
    }, e.on_start_overlapping_column = function(a) {
        this.set_player(a, !1);
    }, e.on_start_overlapping_row = function(a) {
        this.set_player(!1, a);
    }, e.on_stop_overlapping_column = function(a) {
        this.set_player(a, !1);
        var b = this;
        this.for_each_widget_below(a, this.cells_occupied_by_player.rows[0], function() {
            b.move_widget_up(this, b.player_grid_data.size_y);
        });
    }, e.on_stop_overlapping_row = function(a) {
        this.set_player(!1, a);
        for (var b = this, c = this.cells_occupied_by_player.cols, d = 0, e = c.length; e > d; d++) this.for_each_widget_below(c[d], a, function() {
            b.move_widget_up(this, b.player_grid_data.size_y);
        });
    }, e.move_widget_to = function(b, c) {
        var d = this, e = b.coords().grid, f = (c - e.row, this.widgets_below(b)), g = this.can_move_to(e, e.col, c, b);
        return g === !1 ? !1 : (this.remove_from_gridmap(e), e.row = c, this.add_to_gridmap(e), 
        b.attr("data-row", c), this.$changed = this.$changed.add(b), f.each(function(b, c) {
            var e = a(c), f = e.coords().grid, g = d.can_go_widget_up(f);
            g && g !== f.row && d.move_widget_to(e, g);
        }), this);
    }, e.move_widget_up = function(b, c) {
        var d = b.coords().grid, e = d.row, f = [];
        return c || (c = 1), this.can_go_up(b) ? void this.for_each_column_occupied(d, function(d) {
            if (-1 === a.inArray(b, f)) {
                var g = b.coords().grid, h = e - c;
                if (h = this.can_go_up_to_row(g, d, h), !h) return !0;
                var i = this.widgets_below(b);
                this.remove_from_gridmap(g), g.row = h, this.add_to_gridmap(g), b.attr("data-row", g.row), 
                this.$changed = this.$changed.add(b), f.push(b), i.each(a.proxy(function(b, d) {
                    this.move_widget_up(a(d), c);
                }, this));
            }
        }) : !1;
    }, e.move_widget_down = function(b, c) {
        var d, e, f, g;
        if (0 >= c) return !1;
        if (d = b.coords().grid, e = d.row, f = [], g = c, !b) return !1;
        if (-1 === a.inArray(b, f)) {
            var h = b.coords().grid, i = e + c, j = this.widgets_below(b);
            this.remove_from_gridmap(h), j.each(a.proxy(function(b, c) {
                var d = a(c), e = d.coords().grid, f = this.displacement_diff(e, h, g);
                f > 0 && this.move_widget_down(d, f);
            }, this)), h.row = i, this.update_widget_position(h, b), b.attr("data-row", h.row), 
            this.$changed = this.$changed.add(b), f.push(b);
        }
    }, e.can_go_up_to_row = function(b, c, d) {
        var e, f = this.gridmap, g = !0, h = [], i = b.row;
        if (this.for_each_column_occupied(b, function(a) {
            f[a];
            for (h[a] = [], e = i; e-- && this.is_empty(a, e) && !this.is_placeholder_in(a, e); ) h[a].push(e);
            return h[a].length ? void 0 : (g = !1, !0);
        }), !g) return !1;
        for (e = d, e = 1; i > e; e++) {
            for (var j = !0, k = 0, l = h.length; l > k; k++) h[k] && -1 === a.inArray(e, h[k]) && (j = !1);
            if (j === !0) {
                g = e;
                break;
            }
        }
        return g;
    }, e.displacement_diff = function(a, b, c) {
        var d = a.row, e = [], f = b.row + b.size_y;
        this.for_each_column_occupied(a, function(a) {
            for (var b = 0, c = f; d > c; c++) this.is_empty(a, c) && (b += 1);
            e.push(b);
        });
        var g = Math.max.apply(Math, e);
        return c -= g, c > 0 ? c : 0;
    }, e.widgets_below = function(b) {
        var d = a.isPlainObject(b) ? b : b.coords().grid, e = this, f = (this.gridmap, d.row + d.size_y - 1), g = a([]);
        return this.for_each_column_occupied(d, function(b) {
            e.for_each_widget_below(b, f, function() {
                return e.is_player(this) || -1 !== a.inArray(this, g) ? void 0 : (g = g.add(this), 
                !0);
            });
        }), c.sort_by_row_asc(g);
    }, e.set_cells_player_occupies = function(a, b) {
        return this.remove_from_gridmap(this.placeholder_grid_data), this.placeholder_grid_data.col = a, 
        this.placeholder_grid_data.row = b, this.add_to_gridmap(this.placeholder_grid_data, this.$player), 
        this;
    }, e.empty_cells_player_occupies = function() {
        return this.remove_from_gridmap(this.placeholder_grid_data), this;
    }, e.can_go_up = function(a) {
        var b = a.coords().grid, c = b.row, d = c - 1, e = (this.gridmap, !0);
        return 1 === c ? !1 : (this.for_each_column_occupied(b, function(a) {
            this.is_widget(a, d);
            return this.is_occupied(a, d) || this.is_player(a, d) || this.is_placeholder_in(a, d) || this.is_player_in(a, d) ? (e = !1, 
            !0) : void 0;
        }), e);
    }, e.can_move_to = function(a, b, c, d) {
        var e = (this.gridmap, a.el), f = {
            size_y: a.size_y,
            size_x: a.size_x,
            col: b,
            row: c
        }, g = !0, h = b + a.size_x - 1;
        return h > this.cols ? !1 : d && d < c + a.size_y - 1 ? !1 : (this.for_each_cell_occupied(f, function(b, c) {
            var d = this.is_widget(b, c);
            !d || a.el && !d.is(e) || (g = !1);
        }), g);
    }, e.get_targeted_columns = function(a) {
        for (var b = (a || this.player_grid_data.col) + (this.player_grid_data.size_x - 1), c = [], d = a; b >= d; d++) c.push(d);
        return c;
    }, e.get_targeted_rows = function(a) {
        for (var b = (a || this.player_grid_data.row) + (this.player_grid_data.size_y - 1), c = [], d = a; b >= d; d++) c.push(d);
        return c;
    }, e.get_cells_occupied = function(b) {
        var c, d = {
            cols: [],
            rows: []
        };
        for (arguments[1] instanceof a && (b = arguments[1].coords().grid), c = 0; c < b.size_x; c++) {
            var e = b.col + c;
            d.cols.push(e);
        }
        for (c = 0; c < b.size_y; c++) {
            var f = b.row + c;
            d.rows.push(f);
        }
        return d;
    }, e.for_each_cell_occupied = function(a, b) {
        return this.for_each_column_occupied(a, function(c) {
            this.for_each_row_occupied(a, function(a) {
                b.call(this, c, a);
            });
        }), this;
    }, e.for_each_column_occupied = function(a, b) {
        for (var c = 0; c < a.size_x; c++) {
            var d = a.col + c;
            b.call(this, d, a);
        }
    }, e.for_each_row_occupied = function(a, b) {
        for (var c = 0; c < a.size_y; c++) {
            var d = a.row + c;
            b.call(this, d, a);
        }
    }, e._traversing_widgets = function(b, c, d, e, f) {
        var g = this.gridmap;
        if (g[d]) {
            var h, i, j = b + "/" + c;
            if (arguments[2] instanceof a) {
                var k = arguments[2].coords().grid;
                d = k.col, e = k.row, f = arguments[3];
            }
            var l = [], m = e, n = {
                "for_each/above": function() {
                    for (;m-- && !(m > 0 && this.is_widget(d, m) && -1 === a.inArray(g[d][m], l) && (h = f.call(g[d][m], d, m), 
                    l.push(g[d][m]), h)); ) ;
                },
                "for_each/below": function() {
                    for (m = e + 1, i = g[d].length; i > m && (!this.is_widget(d, m) || -1 !== a.inArray(g[d][m], l) || (h = f.call(g[d][m], d, m), 
                    l.push(g[d][m]), !h)); m++) ;
                }
            };
            n[j] && n[j].call(this);
        }
    }, e.for_each_widget_above = function(a, b, c) {
        return this._traversing_widgets("for_each", "above", a, b, c), this;
    }, e.for_each_widget_below = function(a, b, c) {
        return this._traversing_widgets("for_each", "below", a, b, c), this;
    }, e.get_highest_occupied_cell = function() {
        for (var a, b = this.gridmap, c = b[1].length, d = [], e = [], f = b.length - 1; f >= 1; f--) for (a = c - 1; a >= 1; a--) if (this.is_widget(f, a)) {
            d.push(a), e.push(f);
            break;
        }
        return {
            col: Math.max.apply(Math, e),
            row: Math.max.apply(Math, d)
        };
    }, e.get_widgets_from = function(b, c) {
        var d = (this.gridmap, a());
        return b && (d = d.add(this.$widgets.filter(function() {
            var c = a(this).attr("data-col");
            return c === b || c > b;
        }))), c && (d = d.add(this.$widgets.filter(function() {
            var b = a(this).attr("data-row");
            return b === c || b > c;
        }))), d;
    }, e.set_dom_grid_height = function(a) {
        if ("undefined" == typeof a) {
            var b = this.get_highest_occupied_cell().row;
            a = b * this.min_widget_height;
        }
        return this.container_height = a, this.$el.css("height", this.container_height), 
        this;
    }, e.set_dom_grid_width = function(a) {
        "undefined" == typeof a && (a = this.get_highest_occupied_cell().col);
        var b = this.options.autogrow_cols ? this.options.max_cols : this.cols;
        return a = Math.min(b, Math.max(a, this.options.min_cols)), this.container_width = a * this.min_widget_width, 
        this.$el.css("width", this.container_width), this;
    }, e.generate_stylesheet = function(b) {
        var d, e = "", f = this.options.max_size_x || this.cols;
        b || (b = {}), b.cols || (b.cols = this.cols), b.rows || (b.rows = this.rows), b.namespace || (b.namespace = this.options.namespace), 
        b.widget_base_dimensions || (b.widget_base_dimensions = this.options.widget_base_dimensions), 
        b.widget_margins || (b.widget_margins = this.options.widget_margins), b.min_widget_width = 2 * b.widget_margins[0] + b.widget_base_dimensions[0], 
        b.min_widget_height = 2 * b.widget_margins[1] + b.widget_base_dimensions[1];
        var g = a.param(b);
        if (a.inArray(g, c.generated_stylesheets) >= 0) return !1;
        for (this.generated_stylesheets.push(g), c.generated_stylesheets.push(g), d = b.cols; d >= 0; d--) e += b.namespace + ' [data-col="' + (d + 1) + '"] { left:' + (d * b.widget_base_dimensions[0] + d * b.widget_margins[0] + (d + 1) * b.widget_margins[0]) + "px; }\n";
        for (d = b.rows; d >= 0; d--) e += b.namespace + ' [data-row="' + (d + 1) + '"] { top:' + (d * b.widget_base_dimensions[1] + d * b.widget_margins[1] + (d + 1) * b.widget_margins[1]) + "px; }\n";
        for (var h = 1; h <= b.rows; h++) e += b.namespace + ' [data-sizey="' + h + '"] { height:' + (h * b.widget_base_dimensions[1] + 2 * (h - 1) * b.widget_margins[1]) + "px; }\n";
        for (var i = 1; f >= i; i++) e += b.namespace + ' [data-sizex="' + i + '"] { width:' + (i * b.widget_base_dimensions[0] + 2 * (i - 1) * b.widget_margins[0]) + "px; }\n";
        return this.remove_style_tags(), this.add_style_tag(e);
    }, e.add_style_tag = function(a) {
        var b = document, c = b.createElement("style");
        return b.getElementsByTagName("head")[0].appendChild(c), c.setAttribute("type", "text/css"), 
        c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a)), 
        this.$style_tags = this.$style_tags.add(c), this;
    }, e.remove_style_tags = function() {
        var b = c.generated_stylesheets, d = this.generated_stylesheets;
        this.$style_tags.remove(), c.generated_stylesheets = a.map(b, function(b) {
            return -1 === a.inArray(b, d) ? b : void 0;
        });
    }, e.generate_faux_grid = function(a, b) {
        this.faux_grid = [], this.gridmap = [];
        var c, d;
        for (c = b; c > 0; c--) for (this.gridmap[c] = [], d = a; d > 0; d--) this.add_faux_cell(d, c);
        return this;
    }, e.add_faux_cell = function(b, c) {
        var d = a({
            left: this.baseX + (c - 1) * this.min_widget_width,
            top: this.baseY + (b - 1) * this.min_widget_height,
            width: this.min_widget_width,
            height: this.min_widget_height,
            col: c,
            row: b,
            original_col: c,
            original_row: b
        }).coords();
        return a.isArray(this.gridmap[c]) || (this.gridmap[c] = []), this.gridmap[c][b] = !1, 
        this.faux_grid.push(d), this;
    }, e.add_faux_rows = function(a) {
        for (var b = this.rows, c = b + (a || 1), d = c; d > b; d--) for (var e = this.cols; e >= 1; e--) this.add_faux_cell(d, e);
        return this.rows = c, this.options.autogenerate_stylesheet && this.generate_stylesheet(), 
        this;
    }, e.add_faux_cols = function(a) {
        var b = this.cols, c = b + (a || 1);
        c = Math.min(c, this.options.max_cols);
        for (var d = b + 1; c >= d; d++) for (var e = this.rows; e >= 1; e--) this.add_faux_cell(e, d);
        return this.cols = c, this.options.autogenerate_stylesheet && this.generate_stylesheet(), 
        this;
    }, e.recalculate_faux_grid = function() {
        var b = this.$wrapper.width();
        return this.baseX = (a(window).width() - b) / 2, this.baseY = this.$wrapper.offset().top, 
        a.each(this.faux_grid, a.proxy(function(a, b) {
            this.faux_grid[a] = b.update({
                left: this.baseX + (b.data.col - 1) * this.min_widget_width,
                top: this.baseY + (b.data.row - 1) * this.min_widget_height
            });
        }, this)), this;
    }, e.get_widgets_from_DOM = function() {
        var b = this.$widgets.map(a.proxy(function(b, c) {
            var d = a(c);
            return this.dom_to_coords(d);
        }, this));
        b = c.sort_by_row_and_col_asc(b);
        var d = a(b).map(a.proxy(function(a, b) {
            return this.register_widget(b) || null;
        }, this));
        return d.length && this.$el.trigger("gridster:positionschanged"), this;
    }, e.generate_grid_and_stylesheet = function() {
        var b = this.$wrapper.width(), c = this.options.max_cols, d = Math.floor(b / this.min_widget_width) + this.options.extra_cols, e = this.$widgets.map(function() {
            return a(this).attr("data-col");
        }).get();
        e.length || (e = [ 0 ]);
        var f = Math.max.apply(Math, e);
        this.cols = Math.max(f, d, this.options.min_cols), 1/0 !== c && c >= f && c < this.cols && (this.cols = c);
        var g = this.options.extra_rows;
        return this.$widgets.each(function(b, c) {
            g += +a(c).attr("data-sizey");
        }), this.rows = Math.max(g, this.options.min_rows), this.baseX = (a(window).width() - b) / 2, 
        this.baseY = this.$wrapper.offset().top, this.options.autogenerate_stylesheet && this.generate_stylesheet(), 
        this.generate_faux_grid(this.rows, this.cols);
    }, e.destroy = function(b) {
        return this.$el.removeData("gridster"), a(window).unbind(".gridster"), this.drag_api && this.drag_api.destroy(), 
        this.remove_style_tags(), b && this.$el.remove(), this;
    }, a.fn.gridster = function(b) {
        return this.each(function() {
            a(this).data("gridster") || a(this).data("gridster", new c(this, b));
        });
    }, c;
}), function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W = [].slice, X = {}.hasOwnProperty, Y = function(a, b) {
        function c() {
            this.constructor = a;
        }
        for (var d in b) X.call(b, d) && (a[d] = b[d]);
        return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, 
        a;
    }, Z = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
        return -1;
    };
    for (t = {
        catchupTime: 500,
        initialRate: .03,
        minTime: 500,
        ghostTime: 500,
        maxProgressPerFrame: 10,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {
            checkInterval: 100,
            selectors: [ "body" ]
        },
        eventLag: {
            minSamples: 10,
            sampleCount: 3,
            lagThreshold: 3
        },
        ajax: {
            trackMethods: [ "GET" ],
            trackWebSockets: !0,
            ignoreURLs: []
        }
    }, B = function() {
        var a;
        return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
    }, D = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, 
    s = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == D && (D = function(a) {
        return setTimeout(a, 50);
    }, s = function(a) {
        return clearTimeout(a);
    }), F = function(a) {
        var b, c;
        return b = B(), (c = function() {
            var d;
            return d = B() - b, d >= 33 ? (b = B(), a(d, function() {
                return D(c);
            })) : setTimeout(c, 33 - d);
        })();
    }, E = function() {
        var a, b, c;
        return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? W.call(arguments, 2) : [], 
        "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
    }, u = function() {
        var a, b, c, d, e, f, g;
        for (b = arguments[0], d = 2 <= arguments.length ? W.call(arguments, 1) : [], f = 0, 
        g = d.length; g > f; f++) if (c = d[f]) for (a in c) X.call(c, a) && (e = c[a], 
        null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? u(b[a], e) : b[a] = e);
        return b;
    }, p = function(a) {
        var b, c, d, e, f;
        for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
        return c / b;
    }, w = function(a, b) {
        var c, d, e;
        if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
            if (c = e.getAttribute("data-pace-" + a), !b) return c;
            try {
                return JSON.parse(c);
            } catch (f) {
                return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
            }
        }
    }, g = function() {
        function a() {}
        return a.prototype.on = function(a, b, c, d) {
            var e;
            return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), 
            this.bindings[a].push({
                handler: b,
                ctx: c,
                once: d
            });
        }, a.prototype.once = function(a, b, c) {
            return this.on(a, b, c, !0);
        }, a.prototype.off = function(a, b) {
            var c, d, e;
            if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                if (null == b) return delete this.bindings[a];
                for (c = 0, e = []; c < this.bindings[a].length; ) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
                return e;
            }
        }, a.prototype.trigger = function() {
            var a, b, c, d, e, f, g, h, i;
            if (c = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                for (e = 0, i = []; e < this.bindings[c].length; ) h = this.bindings[c][e], d = h.handler, 
                b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
                return i;
            }
        }, a;
    }(), null == window.Pace && (window.Pace = {}), u(Pace, g.prototype), C = Pace.options = u({}, t, window.paceOptions, w()), 
    T = [ "ajax", "document", "eventLag", "elements" ], P = 0, R = T.length; R > P; P++) J = T[P], 
    C[J] === !0 && (C[J] = t[J]);
    i = function(a) {
        function b() {
            return U = b.__super__.constructor.apply(this, arguments);
        }
        return Y(b, a), b;
    }(Error), b = function() {
        function a() {
            this.progress = 0;
        }
        return a.prototype.getElement = function() {
            var a;
            if (null == this.el) {
                if (a = document.querySelector(C.target), !a) throw new i();
                this.el = document.createElement("div"), this.el.className = "pace pace-active", 
                document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", 
                this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', 
                null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
            }
            return this.el;
        }, a.prototype.finish = function() {
            var a;
            return a = this.getElement(), a.className = a.className.replace("pace-active", ""), 
            a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), 
            document.body.className += " pace-done";
        }, a.prototype.update = function(a) {
            return this.progress = a, this.render();
        }, a.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement());
            } catch (a) {
                i = a;
            }
            return this.el = void 0;
        }, a.prototype.render = function() {
            var a, b;
            return null == document.querySelector(C.target) ? !1 : (a = this.getElement(), a.children[0].style.width = "" + this.progress + "%", 
            (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), 
            this.progress >= 100 ? b = "99" : (b = this.progress < 10 ? "0" : "", b += 0 | this.progress), 
            a.children[0].setAttribute("data-progress", "" + b)), this.lastRenderedProgress = this.progress);
        }, a.prototype.done = function() {
            return this.progress >= 100;
        }, a;
    }(), h = function() {
        function a() {
            this.bindings = {};
        }
        return a.prototype.trigger = function(a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
                for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
                return g;
            }
        }, a.prototype.on = function(a, b) {
            var c;
            return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
        }, a;
    }(), O = window.XMLHttpRequest, N = window.XDomainRequest, M = window.WebSocket, 
    v = function(a, b) {
        var c, d, e, f;
        f = [];
        for (d in b.prototype) try {
            e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0);
        } catch (g) {
            c = g;
        }
        return f;
    }, z = [], Pace.ignore = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], 
        z.unshift("ignore"), c = b.apply(null, a), z.shift(), c;
    }, Pace.track = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], 
        z.unshift("track"), c = b.apply(null, a), z.shift(), c;
    }, I = function(a) {
        var b;
        if (null == a && (a = "GET"), "track" === z[0]) return "force";
        if (!z.length && C.ajax) {
            if ("socket" === a && C.ajax.trackWebSockets) return !0;
            if (b = a.toUpperCase(), Z.call(C.ajax.trackMethods, b) >= 0) return !0;
        }
        return !1;
    }, j = function(a) {
        function b() {
            var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function(a) {
                var b;
                return b = a.open, a.open = function(d, e) {
                    return I(d) && c.trigger("request", {
                        type: d,
                        url: e,
                        request: a
                    }), b.apply(a, arguments);
                };
            }, window.XMLHttpRequest = function(b) {
                var c;
                return c = new O(b), a(c), c;
            };
            try {
                v(window.XMLHttpRequest, O);
            } catch (d) {}
            if (null != N) {
                window.XDomainRequest = function() {
                    var b;
                    return b = new N(), a(b), b;
                };
                try {
                    v(window.XDomainRequest, N);
                } catch (d) {}
            }
            if (null != M && C.ajax.trackWebSockets) {
                window.WebSocket = function(a, b) {
                    var d;
                    return d = null != b ? new M(a, b) : new M(a), I("socket") && c.trigger("request", {
                        type: "socket",
                        url: a,
                        protocols: b,
                        request: d
                    }), d;
                };
                try {
                    v(window.WebSocket, M);
                } catch (d) {}
            }
        }
        return Y(b, a), b;
    }(h), Q = null, x = function() {
        return null == Q && (Q = new j()), Q;
    }, H = function(a) {
        var b, c, d, e;
        for (e = C.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) if (b = e[c], "string" == typeof b) {
            if (-1 !== a.indexOf(b)) return !0;
        } else if (b.test(a)) return !0;
        return !1;
    }, x().on("request", function(b) {
        var c, d, e, f, g;
        return f = b.type, e = b.request, g = b.url, H(g) ? void 0 : Pace.running || C.restartOnRequestAfter === !1 && "force" !== I(f) ? void 0 : (d = arguments, 
        c = C.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() {
            var b, c, g, h, i, j;
            if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                for (Pace.restart(), i = Pace.sources, j = [], c = 0, g = i.length; g > c; c++) {
                    if (J = i[c], J instanceof a) {
                        J.watch.apply(J, d);
                        break;
                    }
                    j.push(void 0);
                }
                return j;
            }
        }, c));
    }), a = function() {
        function a() {
            var a = this;
            this.elements = [], x().on("request", function() {
                return a.watch.apply(a, arguments);
            });
        }
        return a.prototype.watch = function(a) {
            var b, c, d, e;
            return d = a.type, b = a.request, e = a.url, H(e) ? void 0 : (c = "socket" === d ? new m(b) : new n(b), 
            this.elements.push(c));
        }, a;
    }(), n = function() {
        function a(a) {
            var b, c, d, e, f, g, h = this;
            if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function(a) {
                return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2;
            }), g = [ "load", "abort", "timeout", "error" ], d = 0, e = g.length; e > d; d++) b = g[d], 
            a.addEventListener(b, function() {
                return h.progress = 100;
            }); else f = a.onreadystatechange, a.onreadystatechange = function() {
                var b;
                return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), 
                "function" == typeof f ? f.apply(null, arguments) : void 0;
            };
        }
        return a;
    }(), m = function() {
        function a(a) {
            var b, c, d, e, f = this;
            for (this.progress = 0, e = [ "error", "open" ], c = 0, d = e.length; d > c; c++) b = e[c], 
            a.addEventListener(b, function() {
                return f.progress = 100;
            });
        }
        return a;
    }(), d = function() {
        function a(a) {
            var b, c, d, f;
            for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), 
            f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b));
        }
        return a;
    }(), e = function() {
        function a(a) {
            this.selector = a, this.progress = 0, this.check();
        }
        return a.prototype.check = function() {
            var a = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                return a.check();
            }, C.elements.checkInterval);
        }, a.prototype.done = function() {
            return this.progress = 100;
        }, a;
    }(), c = function() {
        function a() {
            var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, 
            document.onreadystatechange = function() {
                return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), 
                "function" == typeof a ? a.apply(null, arguments) : void 0;
            };
        }
        return a.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, a;
    }(), f = function() {
        function a() {
            var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = B(), b = setInterval(function() {
                var g;
                return g = B() - c - 50, c = B(), e.push(g), e.length > C.eventLag.sampleCount && e.shift(), 
                a = p(e), ++d >= C.eventLag.minSamples && a < C.eventLag.lagThreshold ? (f.progress = 100, 
                clearInterval(b)) : f.progress = 100 * (3 / (a + 3));
            }, 50);
        }
        return a;
    }(), l = function() {
        function a(a) {
            this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = C.initialRate, 
            this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = E(this.source, "progress"));
        }
        return a.prototype.tick = function(a, b) {
            var c;
            return null == b && (b = E(this.source, "progress")), b >= 100 && (this.done = !0), 
            b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), 
            this.catchup = (b - this.progress) / C.catchupTime, this.sinceLastUpdate = 0, this.last = b), 
            b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, C.easeFactor), 
            this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + C.maxProgressPerFrame, this.progress), 
            this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), 
            this.lastProgress = this.progress, this.progress;
        }, a;
    }(), K = null, G = null, q = null, L = null, o = null, r = null, Pace.running = !1, 
    y = function() {
        return C.restartOnPushState ? Pace.restart() : void 0;
    }, null != window.history.pushState && (S = window.history.pushState, window.history.pushState = function() {
        return y(), S.apply(window.history, arguments);
    }), null != window.history.replaceState && (V = window.history.replaceState, window.history.replaceState = function() {
        return y(), V.apply(window.history, arguments);
    }), k = {
        ajax: a,
        elements: d,
        document: c,
        eventLag: f
    }, (A = function() {
        var a, c, d, e, f, g, h, i;
        for (Pace.sources = K = [], g = [ "ajax", "elements", "document", "eventLag" ], 
        c = 0, e = g.length; e > c; c++) a = g[c], C[a] !== !1 && K.push(new k[a](C[a]));
        for (i = null != (h = C.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) J = i[d], 
        K.push(new J(C));
        return Pace.bar = q = new b(), G = [], L = new l();
    })(), Pace.stop = function() {
        return Pace.trigger("stop"), Pace.running = !1, q.destroy(), r = !0, null != o && ("function" == typeof s && s(o), 
        o = null), A();
    }, Pace.restart = function() {
        return Pace.trigger("restart"), Pace.stop(), Pace.start();
    }, Pace.go = function() {
        var a;
        return Pace.running = !0, q.render(), a = B(), r = !1, o = F(function(b, c) {
            var d, e, f, g, h, i, j, k, m, n, o, p, s, t, u, v;
            for (k = 100 - q.progress, e = o = 0, f = !0, i = p = 0, t = K.length; t > p; i = ++p) for (J = K[i], 
            n = null != G[i] ? G[i] : G[i] = [], h = null != (v = J.elements) ? v : [ J ], j = s = 0, 
            u = h.length; u > s; j = ++s) g = h[j], m = null != n[j] ? n[j] : n[j] = new l(g), 
            f &= m.done, m.done || (e++, o += m.tick(b));
            return d = o / e, q.update(L.tick(b, d)), q.done() || f || r ? (q.update(100), Pace.trigger("done"), 
            setTimeout(function() {
                return q.finish(), Pace.running = !1, Pace.trigger("hide");
            }, Math.max(C.ghostTime, Math.max(C.minTime - (B() - a), 0)))) : c();
        });
    }, Pace.start = function(a) {
        u(C, a), Pace.running = !0;
        try {
            q.render();
        } catch (b) {
            i = b;
        }
        return document.querySelector(".pace") ? (Pace.trigger("start"), Pace.go()) : setTimeout(Pace.start, 50);
    }, "function" == typeof define && define.amd ? define(function() {
        return Pace;
    }) : "object" == typeof exports ? module.exports = Pace : C.startOnPageLoad && Pace.start();
}.call(this);