/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var da = ba(this);

function ea(a, b) {
    if (b) a: {
        var c = da;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}
ea("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
ea("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
ea("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
ea("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
var p = this || self;

function q(a, b) {
    a = a.split(".");
    b = b || p;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function fa() {}

function u(a, b) {
    a = a.split(".");
    var c = p;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function ha(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.ya = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Fa = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
};

function ia(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, ia);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.la = b)
}
ha(ia, Error);
ia.prototype.name = "CustomError";

function ja(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function ka(a, b) {
    for (let d = 1; d < arguments.length; d++) {
        const e = arguments[d];
        var c = typeof e;
        c = "object" != c ? c : e ? Array.isArray(e) ? "array" : c : "null";
        if ("array" == c || "object" == c && "number" == typeof e.length) {
            c = a.length || 0;
            const f = e.length || 0;
            a.length = c + f;
            for (let g = 0; g < f; g++) a[c + g] = e[g]
        } else a.push(e)
    }
};

function la(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = la(a[c]);
    return b
}
const ma = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function na(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < ma.length; f++) c = ma[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function oa() {}

function x(a) {
    return new oa(pa, a)
}
var pa = {};
x("");
var qa = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
var ra;
a: {
    var sa = p.navigator;
    if (sa) {
        var ta = sa.userAgent;
        if (ta) {
            ra = ta;
            break a
        }
    }
    ra = ""
}

function y(a) {
    return -1 != ra.indexOf(a)
};

function ua() {
    return y("Firefox") || y("FxiOS")
}

function va() {
    return (y("Chrome") || y("CriOS")) && !y("Edge")
};
var A = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function wa(a) {
    return a ? decodeURI(a) : a
}

function xa(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) xa(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function ya(a) {
    var b = [],
        c;
    for (c in a) xa(c, a[c], b);
    return b.join("&")
};

function za(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b
}
let Aa;
const Ba = "undefined" !== typeof TextDecoder;

function Ca(a, b, c, d) {
    if (Da.length) {
        const e = Da.pop();
        e.M = null == d ? !1 : d.M;
        a && Ea(e, a, b, c);
        return e
    }
    return new Fa(a, b, c, d)
}

function Ea(a, b, c, d) {
    b = b.constructor === Uint8Array ? b : b.constructor === ArrayBuffer ? new Uint8Array(b) : b.constructor === Array ? new Uint8Array(b) : b.constructor === String ? Ga(b) : b instanceof Uint8Array ? new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : new Uint8Array(0);
    a.j = b;
    a.l = void 0 !== c ? c : 0;
    a.i = void 0 !== d ? a.l + d : a.j.length;
    a.h = a.l
}

function Ha(a) {
    const b = a.j;
    let c = b[a.h + 0],
        d = c & 127;
    if (128 > c) return a.h += 1, d;
    c = b[a.h + 1];
    d |= (c & 127) << 7;
    if (128 > c) return a.h += 2, d;
    c = b[a.h + 2];
    d |= (c & 127) << 14;
    if (128 > c) return a.h += 3, d;
    c = b[a.h + 3];
    d |= (c & 127) << 21;
    if (128 > c) return a.h += 4, d;
    c = b[a.h + 4];
    d |= (c & 15) << 28;
    if (128 > c) return a.h += 5, d >>> 0;
    a.h += 5;
    128 <= b[a.h++] && 128 <= b[a.h++] && 128 <= b[a.h++] && 128 <= b[a.h++] && a.h++;
    return d
}
var Fa = class {
        constructor(a, b, c, d) {
            this.j = null;
            this.h = this.i = this.l = 0;
            this.M = this.m = !1;
            a && Ea(this, a, b, c);
            this.M = null == d ? !1 : d.M
        }
        clone() {
            return Ca(this.j, this.l, this.i - this.l)
        }
        clear() {
            this.j = null;
            this.h = this.i = this.l = 0;
            this.m = !1
        }
        reset() {
            this.h = this.l
        }
        advance(a) {
            this.h += a
        }
    },
    Da = [];

function Ia(a) {
    var b = a.h;
    (b = b.h == b.i) || (b = a.j) || (b = a.h, b = b.m || 0 > b.h || b.h > b.i);
    if (b) return !1;
    b = Ha(a.h);
    const c = b & 7;
    if (0 != c && 5 != c && 1 != c && 2 != c && 3 != c && 4 != c) return a.j = !0, !1;
    a.m = b;
    a.l = b >>> 3;
    a.i = c;
    return !0
}

function B(a) {
    switch (a.i) {
        case 0:
            if (0 != a.i) B(a);
            else {
                for (a = a.h; a.j[a.h] & 128;) a.h++;
                a.h++
            }
            break;
        case 1:
            1 != a.i ? B(a) : a.h.advance(8);
            break;
        case 2:
            if (2 != a.i) B(a);
            else {
                var b = Ha(a.h);
                a.h.advance(b)
            }
            break;
        case 5:
            5 != a.i ? B(a) : a.h.advance(4);
            break;
        case 3:
            b = a.l;
            do {
                if (!Ia(a)) {
                    a.j = !0;
                    break
                }
                if (4 == a.i) {
                    a.l != b && (a.j = !0);
                    break
                }
                B(a)
            } while (1);
            break;
        default:
            a.j = !0
    }
}
var Ka = class {
    constructor(a) {
        this.h = Ca(a, void 0, void 0, void 0);
        this.i = this.m = this.l = -1;
        this.j = !1
    }
    reset() {
        this.h.reset();
        this.i = this.l = -1
    }
    advance(a) {
        this.h.advance(a)
    }
};
ua();
!y("Android") || va() || ua();
va();
var La = y("Safari") && !(va() || y("Coast") || y("Opera") || y("Edge") || y("Edg/") || y("OPR") || ua() || y("Silk") || y("Android")) && !(y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod"));
var Ma = {},
    Na = null;

function Oa(a, b) {
    void 0 === b && (b = 0);
    Pa();
    b = Ma[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}

function Ga(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    Qa(a, function(f) {
        d[e++] = f
    });
    return d.subarray(0, e)
}

function Qa(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                n = Na[l];
            if (null != n) return n;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    Pa();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function Pa() {
    if (!Na) {
        Na = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            Ma[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === Na[f] && (Na[f] = e)
            }
        }
    }
};
var Ra = "function" === typeof Uint8Array;

function Sa(a) {
    return null !== a && "object" == typeof a && !Array.isArray(a) && !(Ra && a instanceof Uint8Array)
}

function Ta(a) {
    return Ua(a, b => b, b => new Uint8Array(b))
}

function Va(a, b, c) {
    return "object" === typeof a ? Ra && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : Ua(a, b, c) : b(a)
}

function Ua(a, b, c) {
    if (Array.isArray(a)) {
        var d = Array(a.length);
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            null != f && (d[e] = Va(f, b, c))
        }
        Array.isArray(a) && a.X && Wa(d);
        return d
    }
    d = {};
    for (e in a) f = a[e], null != f && (d[e] = Va(f, b, c));
    return d
}

function Xa(a) {
    return Ua(a, b => "number" === typeof b ? isFinite(b) ? b : String(b) : b, b => Oa(b))
}
const Ya = {
    X: {
        value: !0,
        configurable: !0
    }
};

function Wa(a) {
    Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, Ya);
    return a
};
let Za;

function $a(a, b, c) {
    var d = Za;
    Za = null;
    a || (a = d);
    d = this.constructor.fa;
    a || (a = d ? [d] : []);
    this.l = d ? 0 : -1;
    this.h = null;
    this.i = a;
    a: {
        d = this.i.length;a = d - 1;
        if (d && (d = this.i[a], Sa(d))) {
            this.m = a - this.l;
            this.j = d;
            break a
        }
        void 0 !== b && -1 < b ? (this.m = Math.max(b, a + 1 - this.l), this.j = null) : this.m = Number.MAX_VALUE
    }
    if (c)
        for (b = 0; b < c.length; b++) a = c[b], a < this.m ? (a += this.l, (d = this.i[a]) ? Wa(d) : this.i[a] = ab) : (bb(this), (d = this.j[a]) ? Wa(d) : this.j[a] = ab)
}
const ab = Object.freeze(Wa([]));

function bb(a) {
    let b = a.m + a.l;
    a.i[b] || (a.j = a.i[b] = {})
}

function C(a, b) {
    if (-1 === b) return null;
    if (b < a.m) {
        b += a.l;
        var c = a.i[b];
        return c !== ab ? c : a.i[b] = Wa([])
    }
    if (a.j) return c = a.j[b], c !== ab ? c : a.j[b] = Wa([])
}

function cb(a, b) {
    a.h || (a.h = {});
    if (!a.h[1]) {
        let c = C(a, 1),
            d = [];
        for (let e = 0; e < c.length; e++) d[e] = new b(c[e]);
        a.h[1] = d
    }
    return a.h[1]
}
$a.prototype.toJSON = function() {
    const a = db(eb(this, !1));
    return Xa(a)
};

function eb(a, b) {
    if (a.h)
        for (let c in a.h) {
            const d = a.h[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e++) d[e] && eb(d[e], b);
            else d && eb(d, b)
        }
    return a.i
}

function db(a) {
    let b, c = a.length,
        d = !1;
    for (let g = a.length; g--;) {
        let h = a[g];
        if (Array.isArray(h)) {
            var e = h;
            Array.isArray(h) && h.X && !h.length ? h = null : h = db(h);
            h != e && (d = !0)
        } else if (Sa(h)) {
            a: {
                var f = h;e = {};
                let k = !1;
                for (let l in f) {
                    let n = f[l];
                    if (Array.isArray(n)) {
                        let r = n;
                        Array.isArray(n) && n.X && !n.length ? n = null : n = db(n);
                        n != r && (k = !0)
                    }
                    null != n ? e[l] = n : k = !0
                }
                if (k) {
                    for (let l in e) {
                        f = e;
                        break a
                    }
                    f = null
                }
            }
            f != h && (d = !0);c--;
            continue
        }
        null == h && c == g + 1 ? (d = !0, c--) : d && (b || (b = a.slice(0, c)), b[g] = h)
    }
    if (!d) return a;
    b || (b = a.slice(0, c));
    f && b.push(f);
    return b
}
$a.prototype.clone = function() {
    var a = this.constructor,
        b = Ta(eb(this, !1));
    Za = b;
    a = new a(b);
    Za = null;
    return a
};

function fb(a) {
    if (4 == a.i) return !1;
    B(a);
    return !0
};

function D(a, b) {
    var c = void 0;
    return new(c || (c = Promise))(function(d, e) {
        function f(k) {
            try {
                h(b.next(k))
            } catch (l) {
                e(l)
            }
        }

        function g(k) {
            try {
                h(b["throw"](k))
            } catch (l) {
                e(l)
            }
        }

        function h(k) {
            k.done ? d(k.value) : (new c(function(l) {
                l(k.value)
            })).then(f, g)
        }
        h((b = b.apply(a, void 0)).next())
    })
};
x("csi.gstatic.com");
x("googleads.g.doubleclick.net");
x("pagead2.googlesyndication.com");
x("partner.googleadservices.com");
x("pubads.g.doubleclick.net");
x("securepubads.g.doubleclick.net");
x("tpc.googlesyndication.com");

function gb(a) {
    if (!a) return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !==
        c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};
var hb = "client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" ");

function ib() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        n = l = 0
    }

    function b(r) {
        for (var t = g, m = 0; 64 > m; m += 4) t[m / 4] = r[m] << 24 | r[m + 1] << 16 | r[m + 2] << 8 | r[m + 3];
        for (m = 16; 80 > m; m++) r = t[m - 3] ^ t[m - 8] ^ t[m - 14] ^ t[m - 16], t[m] = (r << 1 | r >>> 31) & 4294967295;
        r = e[0];
        var v = e[1],
            w = e[2],
            z = e[3],
            ca = e[4];
        for (m = 0; 80 > m; m++) {
            if (40 > m)
                if (20 > m) {
                    var N = z ^ v & (w ^ z);
                    var Ja = 1518500249
                } else N = v ^ w ^ z, Ja = 1859775393;
            else 60 > m ? (N = v & w | z & (v | w), Ja = 2400959708) : (N = v ^ w ^ z, Ja = 3395469782);
            N = ((r << 5 | r >>> 27) & 4294967295) + N + ca + Ja + t[m] & 4294967295;
            ca = z;
            z = w;
            w = (v << 30 | v >>> 2) & 4294967295;
            v = r;
            r = N
        }
        e[0] = e[0] + r & 4294967295;
        e[1] = e[1] + v & 4294967295;
        e[2] = e[2] + w & 4294967295;
        e[3] = e[3] + z & 4294967295;
        e[4] = e[4] + ca & 4294967295
    }

    function c(r, t) {
        if ("string" === typeof r) {
            r = unescape(encodeURIComponent(r));
            for (var m = [], v = 0, w = r.length; v < w; ++v) m.push(r.charCodeAt(v));
            r = m
        }
        t || (t = r.length);
        m = 0;
        if (0 == l)
            for (; m + 64 < t;) b(r.slice(m, m + 64)), m += 64, n += 64;
        for (; m < t;)
            if (f[l++] = r[m++], n++, 64 == l)
                for (l = 0, b(f); m + 64 < t;) b(r.slice(m, m + 64)), m += 64, n += 64
    }

    function d() {
        var r = [],
            t = 8 * n;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var m = 63; 56 <= m; m--) f[m] = t & 255, t >>>= 8;
        b(f);
        for (m = t = 0; 5 > m; m++)
            for (var v = 24; 0 <= v; v -= 8) r[t++] = e[m] >> v & 255;
        return r
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, n;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        ma: function() {
            for (var r = d(), t = "", m = 0; m < r.length; m++) t += "0123456789ABCDEF".charAt(Math.floor(r[m] / 16)) + "0123456789ABCDEF".charAt(r[m] % 16);
            return t
        }
    }
};

function jb(a, b, c) {
    var d = String(p.location.href);
    return d && a && b ? [b, kb(gb(d), a, c || null)].join(" ") : null
}

function kb(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], ja(d, function(h) {
        e.push(h)
    }), lb(e.join(" "));
    var f = [],
        g = [];
    ja(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    ja(d, function(h) {
        e.push(h)
    });
    a = lb(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function lb(a) {
    var b = ib();
    b.update(a);
    return b.ma().toLowerCase()
};
const mb = {};

function E() {
    this.h = document || {
        cookie: ""
    }
}
E.prototype.isEnabled = function() {
    if (!p.navigator.cookieEnabled) return !1;
    if (!this.isEmpty()) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        ea: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
E.prototype.set = function(a, b, c) {
    let d, e, f, g = !1,
        h;
    "object" === typeof c && (h = c.Ma, g = c.Na || !1, f = c.domain || void 0, e = c.path || void 0, d = c.ea);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
};
E.prototype.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = qa(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return ""
    }
    return b
};
E.prototype.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        ea: 0,
        path: b,
        domain: c
    });
    return d
};
E.prototype.isEmpty = function() {
    return !this.h.cookie
};
E.prototype.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = qa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function nb() {
    return !!mb.FPA_SAMESITE_PHASE2_MOD || !1
}

function ob(a, b, c, d) {
    (a = p[a]) || (a = (new E).get(b));
    return a ? jb(a, c, d) : null
}

function pb() {
    var a = [],
        b = gb(String(p.location.href));
    const c = [];
    var d = p.__SAPISID || p.__APISID || p.__3PSAPISID || p.__OVERRIDE_SID;
    nb() && (d = d || p.__1PSAPISID);
    if (d) var e = !0;
    else e = new E, d = e.get("SAPISID") || e.get("APISID") || e.get("__Secure-3PAPISID") || e.get("SID"), nb() && (d = d || e.get("__Secure-1PAPISID")), e = !!d;
    e && (d = (e = b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:") || 0 == b.indexOf("moz-extension:")) ? p.__SAPISID : p.__APISID, d || (d = new E, d = d.get(e ? "SAPISID" : "APISID") || d.get("__Secure-3PAPISID")),
        (e = d ? jb(d, e ? "SAPISIDHASH" : "APISIDHASH", a) : null) && c.push(e), b && nb() && ((b = ob("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && c.push(b), (a = ob("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && c.push(a)));
    return 0 == c.length ? null : c.join(" ")
};
var qb = class {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        0 < this.i ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
    put(a) {
        this.l(a);
        100 > this.i && (this.i++, a.next = this.h, this.h = a)
    }
};

function rb(a) {
    p.setTimeout(() => {
        throw a;
    }, 0)
};
class sb {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = tb.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var tb = new qb(() => new ub, a => a.reset());
class ub {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};

function vb(a, b) {
    wb || xb();
    yb || (wb(), yb = !0);
    zb.add(a, b)
}
var wb;

function xb() {
    var a = p.Promise.resolve(void 0);
    wb = function() {
        a.then(Ab)
    }
}
var yb = !1,
    zb = new sb;

function Ab() {
    for (var a; a = zb.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            rb(b)
        }
        tb.put(a)
    }
    yb = !1
};

function Bb(a) {
    var b = q("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a) return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || p.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = Cb(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, Db[c]) c = Db[c];
                else {
                    c = String(c);
                    if (!Db[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        Db[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = Db[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    a.stack =
        b;
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: a.stack
    }
}

function Cb(a, b) {
    b || (b = {});
    b[Eb(a)] = !0;
    var c = a.stack || "";
    (a = a.la) && !b[Eb(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Cb(a, b));
    return c
}

function Eb(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var Db = {};

function Fb() {
    this.j = this.j;
    this.l = this.l
}
Fb.prototype.j = !1;
Fb.prototype.dispose = function() {
    this.j || (this.j = !0, this.J())
};
Fb.prototype.J = function() {
    if (this.l)
        for (; this.l.length;) this.l.shift()()
};
class Gb {
    constructor() {
        this.promise = new Promise((a, b) => {
            this.resolve = a;
            this.reject = b
        })
    }
};

function F(a) {
    this.s = 0;
    this.ha = void 0;
    this.I = this.B = this.H = null;
    this.O = this.W = !1;
    if (a != fa) try {
        var b = this;
        a.call(void 0, function(c) {
            G(b, 2, c)
        }, function(c) {
            G(b, 3, c)
        })
    } catch (c) {
        G(this, 3, c)
    }
}

function Hb() {
    this.next = this.context = this.onRejected = this.i = this.h = null;
    this.j = !1
}
Hb.prototype.reset = function() {
    this.context = this.onRejected = this.i = this.h = null;
    this.j = !1
};
var Ib = new qb(function() {
    return new Hb
}, function(a) {
    a.reset()
});

function Jb(a, b, c) {
    var d = Ib.get();
    d.i = a;
    d.onRejected = b;
    d.context = c;
    return d
}

function Kb(a) {
    if (a instanceof F) return a;
    var b = new F(fa);
    G(b, 2, a);
    return b
}
F.prototype.then = function(a, b, c) {
    return Lb(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
F.prototype.$goog_Thenable = !0;
F.prototype.cancel = function(a) {
    if (0 == this.s) {
        var b = new Mb(a);
        vb(function() {
            Nb(this, b)
        }, this)
    }
};

function Nb(a, b) {
    if (0 == a.s)
        if (a.H) {
            var c = a.H;
            if (c.B) {
                for (var d = 0, e = null, f = null, g = c.B; g && (g.j || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.s && 1 == d ? Nb(c, b) : (f ? (d = f, d.next == c.I && (c.I = d), d.next = d.next.next) : Ob(c), Pb(c, e, 3, b)))
            }
            a.H = null
        } else G(a, 3, b)
}

function Qb(a, b) {
    a.B || 2 != a.s && 3 != a.s || Rb(a);
    a.I ? a.I.next = b : a.B = b;
    a.I = b
}

function Lb(a, b, c, d) {
    var e = Jb(null, null, null);
    e.h = new F(function(f, g) {
        e.i = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.onRejected = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof Mb ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.h.H = a;
    Qb(a, e);
    return e.h
}
F.prototype.Ba = function(a) {
    this.s = 0;
    G(this, 2, a)
};
F.prototype.Ca = function(a) {
    this.s = 0;
    G(this, 3, a)
};

function G(a, b, c) {
    if (0 == a.s) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.s = 1;
        a: {
            var d = c,
                e = a.Ba,
                f = a.Ca;
            if (d instanceof F) {
                Qb(d, Jb(e || fa, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    h = typeof d;
                    if ("object" == h && null != d || "function" == h) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            Sb(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.ha = c, a.s = b, a.H = null, Rb(a), 3 != b || c instanceof Mb || Tb(a, c))
    }
}

function Sb(a, b, c, d, e) {
    function f(k) {
        h || (h = !0, d.call(e, k))
    }

    function g(k) {
        h || (h = !0, c.call(e, k))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}

function Rb(a) {
    a.W || (a.W = !0, vb(a.na, a))
}

function Ob(a) {
    var b = null;
    a.B && (b = a.B, a.B = b.next, b.next = null);
    a.B || (a.I = null);
    return b
}
F.prototype.na = function() {
    for (var a; a = Ob(this);) Pb(this, a, this.s, this.ha);
    this.W = !1
};

function Pb(a, b, c, d) {
    if (3 == c && b.onRejected && !b.j)
        for (; a && a.O; a = a.H) a.O = !1;
    if (b.h) b.h.H = null, Ub(b, c, d);
    else try {
        b.j ? b.i.call(b.context) : Ub(b, c, d)
    } catch (e) {
        Vb.call(null, e)
    }
    Ib.put(b)
}

function Ub(a, b, c) {
    2 == b ? a.i.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
}

function Tb(a, b) {
    a.O = !0;
    vb(function() {
        a.O && Vb.call(null, b)
    })
}
var Vb = rb;

function Mb(a) {
    ia.call(this, a)
}
ha(Mb, ia);
Mb.prototype.name = "cancel";

function H(a) {
    Fb.call(this);
    this.ca = 1;
    this.m = [];
    this.D = 0;
    this.h = [];
    this.i = {};
    this.ja = !!a
}
ha(H, Fb);
H.prototype.subscribe = function(a, b, c) {
    var d = this.i[a];
    d || (d = this.i[a] = []);
    var e = this.ca;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.ca = e + 3;
    d.push(e);
    return e
};
H.prototype.ba = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.i[b];
        if (0 != this.D) this.m.push(a), this.h[a + 1] = fa;
        else {
            if (c) {
                const d = Array.prototype.indexOf.call(c, a, void 0);
                0 <= d && Array.prototype.splice.call(c, d, 1)
            }
            delete this.h[a];
            delete this.h[a + 1];
            delete this.h[a + 2]
        }
    }
    return !!b
};
H.prototype.K = function(a, b) {
    var c = this.i[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.ja)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                Wb(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.D++;
                try {
                    for (e = 0, f = c.length; e < f && !this.j; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.D--, 0 < this.m.length && 0 == this.D)
                        for (; c = this.m.pop();) this.ba(c)
                }
            }
        return 0 != e
    }
    return !1
};

function Wb(a, b, c) {
    vb(function() {
        a.apply(b, c)
    })
}
H.prototype.clear = function(a) {
    if (a) {
        var b = this.i[a];
        b && (b.forEach(this.ba, this), delete this.i[a])
    } else this.h.length = 0, this.i = {}
};
H.prototype.J = function() {
    H.ya.J.call(this);
    this.clear();
    this.m.length = 0
};
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Xb = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Yb = ["notification/convert_endpoint_to_url"],
    Zb = ["notification/record_interactions"],
    $b = ["notification_registration/set_registration"];
var ac = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var bc = ["notifications_register", "notifications_check_registration"];
var cc = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let dc = null;

function I(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return ec().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function fc() {
    return I("IndexedDBCheck", "testing IndexedDB").then(() => J("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function J(a) {
    const b = new cc("Error accessing DB");
    return ec().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function ec() {
    return dc ? Promise.resolve(dc) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) dc = d, a(dc);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), ec()
        };
        c.onupgradeneeded = gc
    })
}

function gc(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const hc = {
    ["WEB_UNPLUGGED"]: "^unplugged/",
    ["WEB_UNPLUGGED_ONBOARDING"]: "^unplugged/",
    ["WEB_UNPLUGGED_OPS"]: "^unplugged/",
    ["WEB_UNPLUGGED_PUBLIC"]: "^unplugged/",
    ["WEB_CREATOR"]: "^creator/",
    ["WEB_KIDS"]: "^kids/",
    ["WEB_EXPERIMENTS"]: "^experiments/",
    ["WEB_MUSIC"]: "^music/",
    ["WEB_REMIX"]: "^music/",
    ["WEB_MUSIC_EMBEDDED_PLAYER"]: "^music/",
    ["WEB_MUSIC_EMBEDDED_PLAYER"]: "^main_app/|^sfv/"
};

function ic(a) {
    if (1 === a.length) return a[0];
    var b = hc.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(hc).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function jc(a) {
    return `/youtubei/v1/${ic(a)}`
};
var kc = class extends $a {
    constructor(a) {
        super(a)
    }
};
var lc = class extends $a {
    constructor(a) {
        super(a)
    }
};
lc.fa = "yt.sw.adr";
var mc, nc;
const oc = p.window,
    K = (null === (mc = null === oc || void 0 === oc ? void 0 : oc.yt) || void 0 === mc ? void 0 : mc.config_) || (null === (nc = null === oc || void 0 === oc ? void 0 : oc.ytcfg) || void 0 === nc ? void 0 : nc.data_) || {};
u("yt.config_", K);

function L(...a) {
    a = arguments;
    1 < a.length ? K[a[0]] = a[1] : 1 === a.length && Object.assign(K, a[0])
}

function M(a, b) {
    return a in K ? K[a] : b
};

function O(a) {
    a = pc(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function qc(a, b) {
    a = pc(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function pc(a) {
    const b = M("EXPERIMENTS_FORCED_FLAGS", {});
    return void 0 !== b[a] ? b[a] : M("EXPERIMENT_FLAGS", {})[a]
};
let rc = 0;
u("ytDomDomGetNextId", q("ytDomDomGetNextId") || (() => ++rc));
const sc = [];

function tc(a) {
    sc.forEach(b => b(a))
}

function uc(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            vc(b)
        }
    } : a
}

function vc(a) {
    var b = q("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0) : (b = M("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0]), L("ERRORS", b));
    tc(a)
}

function wc(a) {
    var b = q("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0) : (b = M("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0]), L("ERRORS", b))
};
u("ytEventsEventsListeners", p.ytEventsEventsListeners || {});
u("ytEventsEventsCounter", p.ytEventsEventsCounter || {
    count: 0
});

function xc(a, b) {
    "function" === typeof a && (a = uc(a));
    return window.setTimeout(a, b)
};
var yc = class {};
var zc = class extends yc {
    start() {
        const a = q("yt.scheduler.instance.start");
        a && a()
    }
};
zc.h || (zc.h = new zc);
const Ac = /^[\w.]*$/,
    Bc = {
        q: !0,
        search_query: !0
    };

function Cc(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 == h.length && h[0] || 2 == h.length) try {
            const k = Dc(h[0] || ""),
                l = Dc(h[1] || "");
            k in c ? Array.isArray(c[k]) ? ka(c[k], l) : c[k] = [c[k], l] : c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(Cc);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: Ec == l ? "unchanged" : l
            }];
            Bc.hasOwnProperty(e) || wc(d)
        }
    }
    return c
}
const Ec = String(Cc);

function Fc(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return Cc(a, "&")
}

function Gc(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = Fc(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = ya(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.substr(0, f), e, b.substr(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function Hc(a) {
    if (!b) var b = window.location.href;
    const c = a.match(A)[1] || null,
        d = wa(a.match(A)[3] || null);
    c && d ? (a = a.match(A), b = b.match(A), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? wa(b.match(A)[3] || null) == d && (Number(b.match(A)[4] || null) || null) == (Number(a.match(A)[4] || null) || null) : !0;
    return a
}

function Dc(a) {
    return a && a.match(Ac) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};
[...hb];
let Ic = !1;

function Jc(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = Kc(a, b);
    const d = Lc(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || p;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = n => {
                    n = n || {};
                    k ? b.onSuccess && b.onSuccess.call(e, n, h) : b.onError && b.onError.call(e, n, h);
                    b.onFinish && b.onFinish.call(e, n, h)
                };
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, function() {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    b.onFetchTimeout && 0 < b.timeout && (g = xc(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || p))
    }, b.timeout))
}

function Kc(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = M("XSRF_FIELD_NAME", void 0);
    if (b = b.urlParams) b[c] && delete b[c], a = Gc(a, b || {}, !0);
    return a
}

function Lc(a, b) {
    const c = M("XSRF_FIELD_NAME", void 0),
        d = M("XSRF_TOKEN", void 0);
    var e = b.postBody || "",
        f = b.postParams;
    const g = M("XSRF_FIELD_NAME", void 0);
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || wa(a.match(A)[3] || null) && !b.withCredentials && wa(a.match(A)[3] || null) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    f && "string" === typeof e && (e = Fc(e), na(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ?
        JSON.stringify(e) : ya(e));
    if (!(a = e) && (a = f)) {
        a: {
            for (const k in f) {
                f = !1;
                break a
            }
            f = !0
        }
        a = !f
    }!Ic && a && "POST" != b.method && (Ic = !0, vc(Error("AJAX request with postData should use POST")));
    return e
};
p.ytPubsubPubsubInstance || new H;
const P = window;
var Q = P.ytcsi && P.ytcsi.now ? P.ytcsi.now : P.performance && P.performance.timing && P.performance.now && P.performance.timing.navigationStart ? () => P.performance.timing.navigationStart + P.performance.now() : () => (new Date).getTime();
const Mc = qc("initial_gel_batch_timeout", 2E3),
    Nc = Math.pow(2, 16) - 1;
let R = void 0,
    Oc = 0,
    Pc = 0,
    Qc = 0,
    Rc = !0;
const Sc = p.ytLoggingTransportGELQueue_ || new Map,
    Tc = p.ytLoggingTransportTokensToCttTargetIds_ || {};

function Uc(a, b) {
    if ("log_event" === a.endpoint) {
        var c = "";
        a.N ? c = "visitorOnlyApprovedKey" : a.v && (Tc[a.v.token] = Vc(a.v), c = a.v.token);
        var d = Sc.get(c) || [];
        Sc.set(c, d);
        d.push(a.payload);
        b && (R = new b);
        a = qc("tvhtml5_logging_max_batch") || qc("web_logging_max_batch") || 100;
        b = Q();
        d.length >= a ? Wc({
            writeThenSend: !0
        }, O("flush_only_full_queue") ? c : void 0) : 10 <= b - Qc && (Xc(), Qc = b)
    }
}

function Yc(a, b) {
    if ("log_event" === a.endpoint) {
        var c = "";
        a.N ? c = "visitorOnlyApprovedKey" : a.v && (Tc[a.v.token] = Vc(a.v), c = a.v.token);
        var d = new Map;
        d.set(c, [a.payload]);
        b && (R = new b);
        return new F(e => {
            R && R.isReady() ? Zc(d, e, {
                bypassNetworkless: !0
            }) : e()
        })
    }
}

function Wc(a = {}, b) {
    new F(c => {
        window.clearTimeout(Oc);
        window.clearTimeout(Pc);
        Pc = 0;
        if (R && R.isReady())
            if (void 0 !== b) {
                const d = new Map,
                    e = Sc.get(b) || [];
                d.set(b, e);
                Zc(d, c, a);
                Sc.delete(b)
            } else Zc(Sc, c, a), Sc.clear();
        else Xc(), c()
    })
}

function Xc() {
    O("web_gel_timeout_cap") && !Pc && (Pc = xc(() => {
        Wc({
            writeThenSend: !0
        })
    }, 6E4));
    window.clearTimeout(Oc);
    let a = M("LOGGING_BATCH_TIMEOUT", qc("web_gel_debounce_ms", 1E4));
    O("shorten_initial_gel_batch_timeout") && Rc && (a = Mc);
    Oc = xc(() => {
        Wc({
            writeThenSend: !0
        })
    }, a)
}

function Zc(a, b, c = {}) {
    var d = R;
    const e = Math.round(Q());
    let f = a.size;
    for (const [k, l] of a) {
        var g = k,
            h = l;
        a = la({
            context: $c(d.config_ || ad())
        });
        a.events = h;
        (h = Tc[g]) && bd(a, g, h);
        delete Tc[g];
        g = "visitorOnlyApprovedKey" === g;
        cd(a, e, g);
        dd(d, a, {
            retry: !0,
            onSuccess: () => {
                f--;
                f || b()
            },
            onError: () => {
                f--;
                f || b()
            },
            Ia: c,
            N: g
        });
        Rc = !1
    }
}

function cd(a, b, c) {
    a.requestTimeMs = String(b);
    O("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = M("EVENT_ID", void 0)) && ((c = M("BATCH_CLIENT_COUNTER", void 0) || 0) || (c = Math.floor(Math.random() * Nc / 2)), c++, c > Nc && (c = 1), L("BATCH_CLIENT_COUNTER", c), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function bd(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function Vc(a) {
    const b = {};
    a.videoId ? b.videoId = a.videoId : a.playlistId && (b.playlistId = a.playlistId);
    return b
};
const ed = p.ytLoggingGelSequenceIdObj_ || {};

function fd(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || Q());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = q("_lact", window);
    a = null == a ? -1 : Math.max(Date.now() - a, 0);
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    O("log_sequence_info_on_gel_web") && d.ia && (a = e.context, b = d.ia, ed[b] = b in ed ? ed[b] + 1 : 0, a.sequence = {
        index: ed[b],
        groupKey: b
    }, d.Ha && delete ed[d.ia]);
    (d.Oa ? Yc : Uc)({
        endpoint: "log_event",
        payload: e,
        v: d.v,
        N: d.N
    }, c)
};

function gd() {
    if (!p.matchMedia) return "WEB_DISPLAY_MODE_UNKNOWN";
    try {
        return p.matchMedia("(display-mode: standalone)").matches ? "WEB_DISPLAY_MODE_STANDALONE" : p.matchMedia("(display-mode: minimal-ui)").matches ? "WEB_DISPLAY_MODE_MINIMAL_UI" : p.matchMedia("(display-mode: fullscreen)").matches ? "WEB_DISPLAY_MODE_FULLSCREEN" : p.matchMedia("(display-mode: browser)").matches ? "WEB_DISPLAY_MODE_BROWSER" : "WEB_DISPLAY_MODE_UNKNOWN"
    } catch (a) {
        return "WEB_DISPLAY_MODE_UNKNOWN"
    }
};
u("ytglobal.prefsUserPrefsPrefs_", q("ytglobal.prefsUserPrefsPrefs_") || {});
const hd = {
        bluetooth: "CONN_DISCO",
        cellular: "CONN_CELLULAR_UNKNOWN",
        ethernet: "CONN_WIFI",
        none: "CONN_NONE",
        wifi: "CONN_WIFI",
        wimax: "CONN_CELLULAR_4G",
        other: "CONN_UNKNOWN",
        unknown: "CONN_UNKNOWN",
        "slow-2g": "CONN_CELLULAR_2G",
        "2g": "CONN_CELLULAR_2G",
        "3g": "CONN_CELLULAR_3G",
        "4g": "CONN_CELLULAR_4G"
    },
    id = {
        "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
        "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
        "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
        "4g": "EFFECTIVE_CONNECTION_TYPE_4G"
    };

function jd() {
    const a = p.navigator;
    return a ? a.connection : void 0
};

function kd() {
    return "INNERTUBE_API_KEY" in K && "INNERTUBE_API_VERSION" in K
}

function ad() {
    return {
        innertubeApiKey: M("INNERTUBE_API_KEY", void 0),
        innertubeApiVersion: M("INNERTUBE_API_VERSION", void 0),
        oa: M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        pa: M("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        innertubeContextClientVersion: M("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0),
        ra: M("INNERTUBE_CONTEXT_HL", void 0),
        qa: M("INNERTUBE_CONTEXT_GL", void 0),
        sa: M("INNERTUBE_HOST_OVERRIDE", void 0) || "",
        va: !!M("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        ta: !!M("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: M("SERIALIZED_CLIENT_CONFIG_DATA", void 0)
    }
}

function $c(a) {
    const b = {
        client: {
            hl: a.ra,
            gl: a.qa,
            clientName: a.pa,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.oa
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = p.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = M("EXPERIMENTS_TOKEN", "");
    "" !== c && (b.client.experimentsToken = c);
    c = [];
    const d = M("EXPERIMENTS_FORCED_FLAGS", {});
    for (var e in d) c.push({
        key: e,
        value: String(d[e])
    });
    e = M("EXPERIMENT_FLAGS", {});
    for (var f in e) f.startsWith("force_") && void 0 ===
        d[f] && c.push({
            key: f,
            value: String(e[f])
        });
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    f = b.client.clientName;
    if ("WEB" === f || "MWEB" === f || 1 === f || 2 === f) {
        if (!O("web_include_display_mode_killswitch")) {
            var g;
            b.client.mainAppWebInfo = null != (g = b.client.mainAppWebInfo) ? g : {};
            b.client.mainAppWebInfo.webDisplayMode = gd()
        }
    } else if (g = b.client.clientName, ("WEB_REMIX" === g || 76 === g) && !O("music_web_display_mode_killswitch")) {
        var h;
        b.client.ga = null != (h = b.client.ga) ? h : {};
        b.client.ga.webDisplayMode = gd()
    }
    a.appInstallData &&
        (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.appInstallData = a.appInstallData);
    M("DELEGATED_SESSION_ID") && !O("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: M("DELEGATED_SESSION_ID")
    });
    a: {
        if (h = jd()) {
            a = hd[h.type || "unknown"] || "CONN_UNKNOWN";
            h = hd[h.effectiveType || "unknown"] || "CONN_UNKNOWN";
            "CONN_CELLULAR_UNKNOWN" === a && "CONN_UNKNOWN" !== h && (a = h);
            if ("CONN_UNKNOWN" !== a) break a;
            if ("CONN_UNKNOWN" !== h) {
                a = h;
                break a
            }
        }
        a = void 0
    }
    a && (b.client.connectionType = a);
    O("web_log_effective_connection_type") &&
        (a = jd(), a = null !== a && void 0 !== a && a.effectiveType ? id.hasOwnProperty(a.effectiveType) ? id[a.effectiveType] : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN" : void 0, a && (b.client.effectiveConnectionType = a));
    a = Object;
    h = a.assign;
    g = b.client;
    e = M("DEVICE", "");
    f = {};
    for (const [k, l] of Object.entries(Fc(e))) e = k, c = l, "cbrand" === e ? f.deviceMake = c : "cmodel" === e ? f.deviceModel = c : "cbr" === e ? f.browserName = c : "cbrver" === e ? f.browserVersion = c : "cos" === e ? f.osName = c : "cosver" === e ? f.osVersion = c : "cplatform" === e && (f.platform = c);
    b.client = h.call(a,
        g, f);
    return b
}

function ld(a, b, c) {
    c = void 0 === c ? {} : c;
    const d = {
        "X-Goog-Visitor-Id": c.visitorData || M("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    (b = c.Ea || M("AUTHORIZATION")) || (a ? b = `Bearer ${q("gapi.auth.getToken")().Da}` : b = pb());
    b && (d.Authorization = b, d["X-Goog-AuthUser"] = M("SESSION_INDEX", 0), O("pageid_as_header_web") && (d["X-Goog-PageId"] = M("DELEGATED_SESSION_ID")));
    return d
};
const md = q("ytPubsub2Pubsub2Instance") || new H;
H.prototype.subscribe = H.prototype.subscribe;
H.prototype.unsubscribeByKey = H.prototype.ba;
H.prototype.publish = H.prototype.K;
H.prototype.clear = H.prototype.clear;
u("ytPubsub2Pubsub2Instance", md);
u("ytPubsub2Pubsub2SubscribedKeys", q("ytPubsub2Pubsub2SubscribedKeys") || {});
u("ytPubsub2Pubsub2TopicToKeys", q("ytPubsub2Pubsub2TopicToKeys") || {});
u("ytPubsub2Pubsub2IsAsync", q("ytPubsub2Pubsub2IsAsync") || {});
u("ytPubsub2Pubsub2SkipSubKey", null);
var nd = class {
    isSupported() {
        return !0
    }
};
const S = [];
let T, od = !1;

function pd(a) {
    od || (T ? T.handleError(a) : (S.push({
        type: "ERROR",
        payload: a
    }), 10 < S.length && S.shift()))
}

function qd(a, b) {
    od || (T ? T.S(a, b) : (S.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < S.length && S.shift()))
};

function rd() {
    if (void 0 !== M("DATASYNC_ID", void 0)) return M("DATASYNC_ID", void 0);
    throw new cc("Datasync ID not set", "unknown");
};

function sd(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function td(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const ud = {
        ["AUTH_INVALID"]: "No user identifier specified.",
        ["EXPLICIT_ABORT"]: "Transaction was explicitly aborted.",
        ["IDB_NOT_SUPPORTED"]: "IndexedDB is not supported.",
        ["MISSING_INDEX"]: "Index not created.",
        ["MISSING_OBJECT_STORE"]: "Object store not created.",
        ["DB_DELETED_BY_MISSING_OBJECT_STORE"]: "Database is deleted because an expected object store was not created.",
        ["UNKNOWN_ABORT"]: "Transaction was aborted for unknown reasons.",
        ["QUOTA_EXCEEDED"]: "The current transaction exceeded its quota limitations.",
        ["QUOTA_MAYBE_EXCEEDED"]: "The current transaction may have failed because of exceeding quota limitations.",
        ["EXECUTE_TRANSACTION_ON_CLOSED_DB"]: "Can't start a transaction on a closed database",
        ["INCOMPATIBLE_DB_VERSION"]: "The binary is incompatible with the database version"
    },
    vd = {
        ["AUTH_INVALID"]: "ERROR",
        ["EXECUTE_TRANSACTION_ON_CLOSED_DB"]: "WARNING",
        ["EXPLICIT_ABORT"]: "IGNORED",
        ["IDB_NOT_SUPPORTED"]: "ERROR",
        ["MISSING_INDEX"]: "WARNING",
        ["MISSING_OBJECT_STORE"]: "ERROR",
        ["DB_DELETED_BY_MISSING_OBJECT_STORE"]: "WARNING",
        ["QUOTA_EXCEEDED"]: "WARNING",
        ["QUOTA_MAYBE_EXCEEDED"]: "WARNING",
        ["UNKNOWN_ABORT"]: "WARNING",
        ["INCOMPATIBLE_DB_VERSION"]: "WARNING"
    },
    wd = {
        ["AUTH_INVALID"]: !1,
        ["EXECUTE_TRANSACTION_ON_CLOSED_DB"]: !1,
        ["EXPLICIT_ABORT"]: !1,
        ["IDB_NOT_SUPPORTED"]: !1,
        ["MISSING_INDEX"]: !1,
        ["MISSING_OBJECT_STORE"]: !1,
        ["DB_DELETED_BY_MISSING_OBJECT_STORE"]: !1,
        ["QUOTA_EXCEEDED"]: !1,
        ["QUOTA_MAYBE_EXCEEDED"]: !0,
        ["UNKNOWN_ABORT"]: !0,
        ["INCOMPATIBLE_DB_VERSION"]: !1
    };
var U = class extends cc {
        constructor(a, b = {}, c = ud[a], d = vd[a], e = wd[a]) {
            super(c, Object.assign({
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, U.prototype)
        }
    },
    xd = class extends U {
        constructor(a) {
            super("MISSING_OBJECT_STORE", {
                xa: a
            }, ud.MISSING_OBJECT_STORE);
            Object.setPrototypeOf(this, xd.prototype)
        }
    },
    yd = class extends Error {
        constructor(a, b) {
            super();
            this.index = a;
            this.objectStore = b;
            Object.setPrototypeOf(this,
                yd.prototype)
        }
    };
const zd = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function Ad(a, b, c, d) {
    b = td(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof U) return e;
    if ("QuotaExceededError" === e.name) return new U("QUOTA_EXCEEDED", {
        objectStoreNames: c,
        dbName: b
    });
    if (La && "UnknownError" === e.name) return new U("QUOTA_MAYBE_EXCEEDED", {
        objectStoreNames: c,
        dbName: b
    });
    if (e instanceof yd) return new U("MISSING_INDEX", {
        dbName: b,
        dbVersion: d,
        objectStore: e.objectStore,
        index: e.index
    });
    if ("InvalidStateError" === e.name && zd.some(f => e.message.includes(f))) return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB", {
        objectStoreNames: c,
        dbName: b
    });
    if ("AbortError" === e.name) return new U("UNKNOWN_ABORT", {
        objectStoreNames: c,
        dbName: b
    }, e.message);
    e.args = [{
        name: "IdbError",
        Ja: e.name,
        dbName: b,
        objectStoreNames: c
    }];
    e.level = "WARNING";
    return e
};

function Bd(a) {
    if (!a) throw Error();
    throw a;
}

function Cd(a) {
    return a
}
var Dd = class {
    constructor(a) {
        this.h = a
    }
};

function Ed(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof V ? Fd(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Gd(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof V ? Fd(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Fd(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof V ? Fd(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var V = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.onRejected = [];
        a = a.h;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.onRejected) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new V(new Dd((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) V.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new V(new Dd((b, c) => {
            a instanceof V ? a.then(b, c) : b(a)
        }))
    }
    static reject(a) {
        return new V(new Dd((b, c) => {
            c(a)
        }))
    }
    then(a, b) {
        const c = null !== a && void 0 !== a ? a : Cd,
            d = null !== b && void 0 !== b ? b : Bd;
        return new V(new Dd((e, f) => {
            "PENDING" === this.state.status ? (this.h.push(() => {
                Ed(this, this, c, e, f)
            }), this.onRejected.push(() => {
                Gd(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? Ed(this, this, c, e, f) : "REJECTED" === this.state.status && Gd(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function Hd(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function Id(a) {
    return new Promise((b, c) => {
        Hd(a, b, c)
    })
}

function W(a) {
    return new V(new Dd((b, c) => {
        Hd(a, b, c)
    }))
};

function Jd(a, b) {
    return new V(new Dd((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};

function X(a, b, c, d) {
    return D(a, function*() {
        const e = {
            mode: "readonly",
            C: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        this.transactionCount++;
        const f = e.C ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const l = Math.round(Q());
            try {
                const n = this.h.transaction(b, e.mode);
                var k = d;
                const r = new Kd(n),
                    t = yield Ld(r, k), m = Math.round(Q());
                Md(this, l, m, g, void 0, b.join(), e);
                return t
            } catch (n) {
                k = Math.round(Q());
                const r = Ad(n, this.h.name, b.join(), this.h.version);
                if (r instanceof U && !r.h || g >= f) Md(this,
                    l, k, g, r, b.join(), e), h = r
            }
        }
        return Promise.reject(h)
    })
}

function Nd(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new Od(a)
}

function Md(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof U && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && qd("QUOTA_EXCEEDED", {
        dbName: td(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof U && "UNKNOWN_ABORT" === e.type && (c -= a.j, 0 > c && c >= Math.pow(2, 31) && (c = 0), qd("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), Pd(a, !1, d, f, b, g.tag), pd(e)) : Pd(a, !0, d, f, b, g.tag)
}

function Pd(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    qd("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var Qd = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(Q());
        this.i = !1
    }
    add(a, b, c) {
        return X(this, [a], {
            mode: "readwrite",
            C: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return X(this, [a], {
            mode: "readwrite",
            C: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        var a;
        this.h.close();
        (null === (a = this.options) || void 0 === a ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return X(this, [a], {
            mode: "readonly",
            C: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return X(this, [a], {
            mode: "readwrite",
            C: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return X(this, [a], {
            mode: "readonly",
            C: !0
        }, c => c.objectStore(a).get(b))
    }
    put(a, b, c) {
        return X(this, [a], {
            mode: "readwrite",
            C: !0
        }, d => d.objectStore(a).put(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
};

function Rd(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return Sd(a).then(d => Jd(d, c))
}

function Td(a, b) {
    return Rd(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}
var Od = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return W(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return W(this.h.clear()).then(() => {})
    }
    count(a) {
        return W(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? Td(this, a) : W(this.h.delete(a))
    }
    get(a) {
        return W(this.h.get(a))
    }
    index(a) {
        try {
            return new Ud(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new yd(a, this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
    put(a, b) {
        return W(this.h.put(a, b))
    }
};

function Ld(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var Kd = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = U;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new U("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.j.get(a);
        b || (b = new Od(a), this.j.set(a, b));
        return b
    }
};

function Vd(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return Sd(a).then(f => Jd(f, c))
}
var Ud = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return W(this.h.count(a))
    }
    delete(a) {
        return Vd(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return W(this.h.get(a))
    }
    getKey(a) {
        return W(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function Sd(a) {
    return W(a).then(b => b ? new Wd(a, b) : null)
}
var Wd = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return Sd(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return Sd(this.request)
    }
    delete() {
        return W(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    update(a) {
        return W(this.cursor.update(a))
    }
};

function Xd(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.blocked,
            h = c.blocking,
            k = c.Aa,
            l = c.upgrade,
            n = c.closed;
        let r;
        const t = () => {
            r || (r = new Qd(f.result, {
                closed: n
            }));
            return r
        };
        f.addEventListener("upgradeneeded", m => {
            try {
                if (null === m.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                m.dataLoss && "none" !== m.dataLoss && qd("IDB_DATA_CORRUPTED", {
                    reason: m.dataLossMessage || "unknown reason",
                    dbName: td(a)
                });
                const v = t(),
                    w = new Kd(f.transaction);
                l && l(v, z => m.oldVersion < z && m.newVersion >= z, w);
                w.done.catch(z => {
                    e(z)
                })
            } catch (v) {
                e(v)
            }
        });
        f.addEventListener("success", () => {
            const m = f.result;
            h && m.addEventListener("versionchange", () => {
                h(t())
            });
            m.addEventListener("close", () => {
                qd("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: td(a),
                    dbVersion: m.version
                });
                k && k()
            });
            d(t())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function Yd(a, b, c = {}) {
    return Xd(a, b, c)
}

function Zd(a, b = {}) {
    return D(this, function*() {
        const c = self.indexedDB.deleteDatabase(a),
            d = b.blocked;
        d && c.addEventListener("blocked", () => {
            d()
        });
        yield Id(c)
    })
};

function $d(a, b) {
    return new U("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}
var ae = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.l = !0;
        this.j = !1
    }
    i(a, b, c = {}) {
        return Yd(a, b, c)
    }
    delete(a = {}) {
        return Zd(this.name, a)
    }
    open() {
        if (!this.l) throw $d(this);
        if (this.h) return this.h;
        let a;
        const b = () => {
                this.h === a && (this.h = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                Aa: b,
                upgrade: this.options.upgrade
            },
            d = () => D(this, function*() {
                try {
                    var e = yield this.i(this.name, this.options.version, c);
                    a: {
                        var f = e,
                            g = this.options;
                        for (const k of Object.keys(g.T)) {
                            const {
                                L: l,
                                La: n = Number.MAX_VALUE
                            } = g.T[k];
                            if (f.h.version >= l && !(f.h.version >= n) && !f.h.objectStoreNames.contains(k)) {
                                var h = k;
                                break a
                            }
                        }
                        h = void 0
                    }
                    if (void 0 !== h) {
                        if (!this.j) return this.j = !0, yield this.delete(), pd(new U("DB_DELETED_BY_MISSING_OBJECT_STORE", {
                            dbName: this.name,
                            xa: h
                        })), d();
                        throw new xd(h);
                    }
                    return e
                } catch (k) {
                    if (k instanceof DOMException ? "VersionError" === k.name : "DOMError" in self && k instanceof DOMError ? "VersionError" === k.name : k instanceof Object && "message" in k && "An attempt was made to open a database using a lower version than the existing version." === k.message) {
                        e = yield this.i(this.name, void 0, Object.assign(Object.assign({}, c), {
                            upgrade: void 0
                        }));
                        h = e.h.version;
                        if (void 0 !== this.options.version && h > this.options.version + 1) throw e.close(), this.l = !1, $d(this, h);
                        return e
                    }
                    b();
                    throw k;
                }
            });
        return this.h = a = d()
    }
};
const be = new ae("YtIdbMeta", {
    T: {
        databases: {
            L: 1
        }
    },
    upgrade(a, b) {
        b(1) && Nd(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function ce(a) {
    return D(this, function*() {
        return X(yield be.open(), ["databases"], {
            C: !0,
            mode: "readwrite"
        }, b => {
            const c = b.objectStore("databases");
            return c.get(a.actualName).then(d => {
                if (d ? a.actualName !== d.actualName || a.publicName !== d.publicName || a.userIdentifier !== d.userIdentifier : 1) return c.put(a).then(() => {})
            })
        })
    })
}

function de(a) {
    return D(this, function*() {
        if (a) return (yield be.open()).delete("databases", a)
    })
};
let ee;
const fe = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function ge() {
    return D(this, function*() {
        return new nd
    })
}

function he() {
    if (void 0 !== ee) return ee;
    od = !0;
    return ee = ge().then(a => {
        od = !1;
        return a.isSupported()
    })
}

function ie() {
    return he().then(a => a ? fe : void 0)
};
new Gb;

function je(a) {
    try {
        rd();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new U("AUTH_INVALID", {
        dbName: a
    }), pd(a), a;
    b = rd();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function ke(a, b, c, d) {
    return D(this, function*() {
        if (!(yield ie())) {
            var e = new U("IDB_NOT_SUPPORTED", {
                context: {
                    caller: "openDbImpl",
                    publicName: a,
                    version: b
                }
            });
            pd(e);
            throw e;
        }
        sd(a);
        e = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : je(a);
        try {
            return yield ce(e), yield Yd(e.actualName, b, d)
        } catch (f) {
            try {
                yield de(e.actualName)
            } catch (g) {}
            throw f;
        }
    })
}

function le(a, b, c = {}) {
    return ke(a, b, !1, c)
}

function me(a, b, c = {}) {
    return ke(a, b, !0, c)
}

function ne(a, b = {}) {
    return D(this, function*() {
        if (yield ie()) {
            sd(a);
            var c = je(a);
            yield Zd(c.actualName, b);
            yield de(c.actualName)
        }
    })
}

function oe(a, b = {}) {
    return D(this, function*() {
        if (yield ie()) sd(a), yield Zd(a, b), yield de(a)
    })
};

function pe(a, b) {
    let c;
    return () => {
        c || (c = new qe(a, b));
        return c
    }
}
var qe = class extends ae {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        sd(a)
    }
    i(a, b, c = {}) {
        return (this.options.Z ? me : le)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.Z ? oe : ne)(this.name, a)
    }
};
const re = ["client.name", "client.version"];

function se(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? re.includes(b.key) : !1);
    return a
};
var te;
te = pe("ServiceWorkerLogsDatabase", {
    T: {
        ["SWHealthLog"]: {
            L: 1
        }
    },
    Z: !0,
    upgrade: (a, b) => {
        b(1) && Nd(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function ue(a) {
    return D(this, function*() {
        var b = yield te().open(), c = b.put, d = M("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = se(e.clientError));
        e.interface = d;
        return c.call(b, "SWHealthLog", e)
    })
};
const ve = p.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1,
    databaseToken: void 0,
    potentialEsfErrorCounter: 0,
    isIdbSupported: !1
};
u("ytNetworklessLoggingInitializationOptions", ve);

function dd(a, b, c) {
    !M("VISITOR_DATA") && .01 > Math.random() && wc(new cc("Missing VISITOR_DATA when sending innertube request.", "log_event", b, c));
    if (!a.isReady()) throw a = new cc("innertube xhrclient not ready", "log_event", b, c), vc(a), a;
    const d = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        postParams: b,
        postBodyFormat: "JSON",
        onTimeout: () => {
            c.onTimeout()
        },
        onFetchTimeout: c.onTimeout,
        onSuccess: (k, l) => {
            if (c.onSuccess) c.onSuccess(l)
        },
        onFetchSuccess: k => {
            if (c.onSuccess) c.onSuccess(k)
        },
        onError: (k, l) => {
            if (c.onError) c.onError(l)
        },
        onFetchError: k => {
            if (c.onError) c.onError(k)
        },
        timeout: c.timeout,
        withCredentials: !0
    };
    b = "";
    var e = a.config_.sa;
    e && (b = e);
    e = ld(a.config_.va || !1, b, c);
    Object.assign(d.headers, e);
    d.headers.Authorization && !b && (d.headers["x-origin"] = window.location.origin);
    e = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;
    let f = {
        alt: "json"
    };
    a.config_.ta && d.headers.Authorization || (f.key = a.config_.innertubeApiKey);
    const g = Gc(`${b}${e}`, f || {}, !0),
        h = () => {
            try {
                Jc(g, d)
            } catch (k) {
                if ("InvalidAccessError" == k.name) wc(Error("An extension is blocking network request."));
                else throw k;
            }
        };
    O("use_new_nwl") || q("ytNetworklessLoggingInitializationOptions") && ve.isNwlInitialized ? he().then(k => {
        h(k)
    }) : h(!1)
}
class we {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : kd() && (this.config_ = ad())
    }
    isReady() {
        !this.config_ && kd() && (this.config_ = ad());
        return !!this.config_
    }
};
let xe = we;

function ye(a, b, c = {}) {
    let d = xe;
    M("ytLoggingEventsDefaultDisabled", !1) && xe == we && (d = null);
    fd(a, b, d, c)
};
const ze = [{
    Y: a => `Cannot read property '${a.key}'`,
    U: {
        Error: [{
            o: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            o: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            o: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            o: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            o: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            o: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            o: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    Y: a => `Cannot call '${a.key}'`,
    U: {
        TypeError: [{
            o: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            o: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            o: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            o: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            o: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            o: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    Y: a => `${a.key} is not defined`,
    U: {
        ReferenceError: [{
            o: /(.*) is not defined/,
            groups: ["key"]
        }, {
            o: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var Be = {
    A: [],
    u: [{
        ka: Ae,
        weight: 500
    }]
};

function Ae(a) {
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function Ce() {
    if (!De) {
        var a = De = new Ee;
        a.A.length = 0;
        a.u.length = 0;
        Fe(a, Be)
    }
    return De
}

function Fe(a, b) {
    b.A && a.A.push.apply(a.A, b.A);
    b.u && a.u.push.apply(a.u, b.u)
}
var Ee = class {
        constructor() {
            this.u = [];
            this.A = []
        }
    },
    De;
const Ge = new H;

function He(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = Ie(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = Ie(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = Ie(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function Ie(a) {
    let b = a(),
        c = b & 127;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 7;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 14;
    if (128 > b) return c;
    b = a();
    return 128 > b ? c | (b & 127) << 21 : Infinity
};

function Je(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += Ke(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = He(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? Ke(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += Ke(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = Le(a), d += c[b].length;
    else c[b] = Le(a), d += c[b].length;
    return d
}

function Ke(a, b, c, d) {
    c += `.${a}`;
    a = Le(b);
    d[c] = a;
    return c.length + a.length
}

function Le(a) {
    return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
};
var Me = new Set,
    Ne = 0,
    Oe = 0,
    Pe = 0,
    Qe = [];
const Re = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function Se(a) {
    Te(a)
}

function Te(a, b = "ERROR") {
    var c = {};
    c.name = M("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = M("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0);
    Ue(a, c || {}, b)
}

function Ue(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (O("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= Ne)) {
            var e = Bb(a);
            d = e.message || "Unknown Error";
            const v =
                e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${v}: ${d}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let w = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(w = Je(a.args[h], `params.${h}`, b, w), 500 <= w); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const z = a.params;
                if ("object" === typeof a.params)
                    for (h in z) {
                        if (!z[h]) continue;
                        const ca = `params.${h}`,
                            N = Le(z[h]);
                        b[ca] = N;
                        w +=
                            ca.length + N.length;
                        if (500 < w) break
                    } else b.params = Le(z)
            }
            if (Qe.length)
                for (h = 0; h < Qe.length && !(w = Je(Qe[h], `params.context.${h}`, b, w), 500 <= w); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: d,
                name: v,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = Ce();d = b;
                for (k of a.A)
                    if (d.message && d.message.match(k.wa)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.u)
                    if (l.ka(d)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var n of ze)
                if (n.U[k.name]) {
                    l = n.U[k.name];
                    for (var r of l)
                        if (l = k.message.match(r.o)) {
                            k.params["params.error.original"] = l[0];
                            a = r.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = n.Y(b);
                            break
                        }
                }
            k.params || (k.params = {});
            n = Ce();
            k.params["params.errorServiceSignature"] = `msg=${n.A.length}&cb=${n.u.length}`;
            k.params["params.serviceWorker"] = "true";
            p.document && p.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            x("sample").constructor !== oa && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            if (0 !== k.sampleWeight && !Me.has(k.message)) {
                "ERROR" === c ? (Ge.K("handleError", k), O("record_app_crashed_web") && 0 === Pe && 1 === k.sampleWeight && (Pe++, ye("appCrashed", {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                })), Oe++) : "WARNING" === c && Ge.K("handleWarning", k);
                b: {
                    for (t of Re)
                        if ((n = ra) && 0 <= n.toLowerCase().indexOf(t.toLowerCase())) {
                            var t = !0;
                            break b
                        }
                    t = !1
                }
                if (t) var m = void 0;
                else {
                    n = {
                        stackTrace: k.stack
                    };
                    k.fileName && (n.filename = k.fileName);
                    t = k.lineNumber && k.lineNumber.split ? k.lineNumber.split(":") : [];
                    0 !== t.length && (1 !== t.length || isNaN(Number(t[0])) ? 2 !== t.length || isNaN(Number(t[0])) || isNaN(Number(t[1])) || (n.lineNumber = Number(t[0]), n.columnNumber = Number(t[1])) : n.lineNumber = Number(t[0]));
                    t = {
                        level: "ERROR_LEVEL_UNKNOWN",
                        message: k.message,
                        errorClassName: k.name,
                        sampleWeight: k.sampleWeight
                    };
                    "ERROR" === c ? t.level = "ERROR_LEVEL_ERROR" : "WARNING" === c &&
                        (t.level = "ERROR_LEVEL_WARNNING");
                    n = {
                        isObfuscated: !0,
                        browserStackInfo: n
                    };
                    r = {
                        pageUrl: window.location.href,
                        kvPairs: []
                    };
                    M("FEXP_EXPERIMENTS") && (r.experimentIds = M("FEXP_EXPERIMENTS"));
                    if (l = k.params)
                        for (m of Object.keys(l)) r.kvPairs.push({
                            key: `client.${m}`,
                            value: String(l[m])
                        });
                    m = M("SERVER_NAME", void 0);
                    l = M("SERVER_VERSION", void 0);
                    m && l && (r.kvPairs.push({
                        key: "server.name",
                        value: m
                    }), r.kvPairs.push({
                        key: "server.version",
                        value: l
                    }));
                    m = {
                        errorMetadata: r,
                        stackTrace: n,
                        logMessage: t
                    }
                }
                m && (ye("clientError", m), ("ERROR" ===
                    c || O("errors_flush_gel_always_killswitch")) && Wc());
                try {
                    Me.add(k.message)
                } catch (z) {}
                Ne++
            }
        }
    }
};

function Ve(a) {
    return D(a, function*() {
        var b = yield p.fetch(this.i);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === (new lc).constructor.fa) {
                    b = new lc(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function We(a = !1) {
    return D(Xe.h, function*() {
        if (a || !this.h) this.h = Ve(this).then(this.j).catch(b => {
            delete this.h;
            Te(b)
        });
        return this.h
    })
}
var Xe = class {
    constructor() {
        this.i = `${self.location.origin}/sw.js_data`
    }
    j(a) {
        var b;
        a.h || (a.h = {});
        a.h[2] || (b = C(a, 2)) && (a.h[2] = new kc(b));
        if (b = a.h[2]) {
            const c = C(b, 5);
            c && (p.__SAPISID = c);
            null != C(b, 7) && L("VISITOR_DATA", C(b, 7));
            null != C(b, 4) && L("SESSION_INDEX", String(C(b, 4)));
            null != C(b, 8) && L("DELEGATED_SESSION_ID", C(b, 8))
        }
        return a
    }
};

function Ye(a) {
    const b = {};
    var c = pb();
    c && (b.Authorization = c, c = a = null === a || void 0 === a ? void 0 : a.sessionIndex, void 0 === c && (c = Number(M("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), b["X-Goog-AuthUser"] = c, "INNERTUBE_HOST_OVERRIDE" in K || (b["X-Origin"] = window.location.origin), void 0 === a && "DELEGATED_SESSION_ID" in K && (b["X-Goog-PageId"] = M("DELEGATED_SESSION_ID")));
    return b
}
var Ze = class {
    constructor() {
        this.za = !0
    }
};
var $e = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};
let af = Date.now().toString();
let bf = p.ytLoggingDocDocumentNonce_;
if (!bf) {
    var cf;
    a: {
        if (window.crypto && window.crypto.getRandomValues) try {
            const d = Array(16),
                e = new Uint8Array(16);
            window.crypto.getRandomValues(e);
            for (let f = 0; f < d.length; f++) d[f] = e[f];
            cf = d;
            break a
        } catch (d) {}
        const c = Array(16);
        for (let d = 0; 16 > d; d++) {
            const e = Date.now();
            for (let f = 0; f < e % 23; f++) c[d] = Math.random();
            c[d] = Math.floor(256 * Math.random())
        }
        if (af) {
            let d = 1;
            for (let e = 0; e < af.length; e++) c[d % 16] = c[d % 16] ^ c[(d - 1) % 16] / 4 ^ af.charCodeAt(e), d++
        }
        cf = c
    }
    const a = cf,
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] &
        63));
    bf = b.join("")
};

function df(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var ef = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        var c, d, e;
        b = (null === (d = null === (c = b.G.context) || void 0 === c ? void 0 : c.request) || void 0 === d ? void 0 : d.consistencyTokenJars) || [];
        if (a = null === (e = a.responseContext) || void 0 === e ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            df(this, a)
        }
    }
};

function ff() {
    var a = M("INNERTUBE_CONTEXT");
    if (!a) return Te(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = la(a);
    O("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = M("EXPERIMENTS_TOKEN", "");
    c ? b.experimentsToken = c : delete b.experimentsToken;
    ef.h || (ef.h = new ef);
    b = ef.h.h;
    c = [];
    let d = 0;
    for (const e in b) c[d++] = b[e];
    a.request = Object.assign(Object.assign({},
        a.request), {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    return a
};

function gf(a) {
    var b = a;
    if (a = M("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(A);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};
var hf = class {};
const jf = {
    ["GET_DATASYNC_IDS"]: class extends hf {}
};

function kf(a) {
    var b = {
        Ga: {}
    };
    Ze.h || (Ze.h = new Ze);
    var c = Ze.h;
    if (void 0 !== lf.h) {
        const d = lf.h;
        a = [b !== d.l, a !== d.j, c !== d.i, !1, !1, void 0 !== d.h];
        if (a.some(e => e)) throw new cc("InnerTubeTransportService is already initialized", a);
    } else lf.h = new lf(b, a, c)
}

function mf(a, b, c) {
    return D(a, function*() {
        var d;
        if (this.i.za) {
            const e = null === (d = null === b || void 0 === b ? void 0 : b.da) || void 0 === d ? void 0 : d.sessionIndex;
            d = Ye({
                sessionIndex: e
            });
            d = Object.assign(Object.assign({}, nf(c)), d)
        } else d = of (b, c);
        return d
    })
}

function pf(a, b, c) {
    var d, e;
    return D(a, function*() {
        for (var f of []) f.Ka(b.G.context);
        if (null === (d = this.h) || void 0 === d ? 0 : d.l(b.input, b.G)) return this.h.j(b.input, b.G);
        f = JSON.stringify(b.G);
        b.V = Object.assign(Object.assign({}, b.V), {
            headers: c
        });
        let g = Object.assign({}, b.V);
        "POST" === b.V.method && (g = Object.assign(Object.assign({}, g), {
            body: f
        }));
        f = yield this.j.fetch(b.input, g, b.config);
        !f && (null === (e = this.h) || void 0 === e ? 0 : e.h(b.input, b.G)) && (f = yield this.h.i(b.input, b.G));
        return f
    })
}

function qf(a, b, c) {
    var d = {
        da: {
            identity: $e
        }
    };
    b.context || (b.context = ff());
    return new F(e => D(a, function*() {
        var f = gf(c);
        f = Hc(f) ? "same-origin" : "cors";
        f = yield mf(this, d, f);
        var g = gf(c);
        M("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null === f || void 0 === f ? 0 : f.Authorization) || (g = Gc(g, {
            key: M("INNERTUBE_API_KEY")
        }, !1));
        var h = {
            method: "POST",
            mode: Hc(g) ? "same-origin" : "cors",
            credentials: Hc(g) ? "same-origin" : "include"
        };
        e(pf(this, {
            input: g,
            V: h,
            G: b,
            config: d
        }, f))
    }))
}

function of (a, b) {
    var c;
    a = null === (c = null === a || void 0 === a ? void 0 : a.da) || void 0 === c ? void 0 : c.sessionIndex;
    return Kb(Ye({
        sessionIndex: a
    })).then(d => Promise.resolve(Object.assign(Object.assign({}, nf(b)), d)))
}

function nf(a) {
    const b = {
            "Content-Type": "application/json"
        },
        c = M("VISITOR_DATA");
    c && (b["X-Goog-Visitor-Id"] = c);
    "cors" !== a && ((a = M("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = M("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = M("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), O("forward_domain_admin_state_on_embeds") && (a = M("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
    return b
}
var lf = class {
    constructor(a, b, c) {
        this.l = a;
        this.j = b;
        this.i = c;
        this.h = void 0;
        a.aa || (a.aa = {});
        a.aa = Object.assign(Object.assign({}, jf), a.aa)
    }
};
let rf;

function sf() {
    rf || (kf({
        fetch: (a, b) => Kb(fetch(new Request(a, b)))
    }), rf = lf.h);
    return rf
};

function Y(a) {
    return D(this, function*() {
        yield tf();
        Te(a, "WARNING")
    })
}

function uf(a) {
    D(this, function*() {
        var b = yield ie();
        O("nwl_sw_health_payloads") && b ? yield ue(a): (yield We(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            payloadName: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            payloadName: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && ye(b.payloadName, b.payload))
    })
}

function tf() {
    return D(this, function*() {
        try {
            yield We()
        } catch (a) {}
    })
};
const vf = {
    granted: "GRANTED",
    denied: "DENIED",
    unknown: "UNKNOWN"
};

function wf(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (I("IDToken", b), xf()) : "notifications_check_registration" === a && yf(b)
}

function zf() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function Af(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function Bf(a) {
    return D(this, function*() {
        const b = Af(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = jc(Yb);
        return Cf().then(e => qf(e, c, d).then(f => {
            f.json().then(g => {
                if (!g || !g.endpointUrl) return Promise.resolve();
                a.payload.chrome.postedEndpoint && Df(a.payload.chrome.postedEndpoint);
                return Ef(a, g.endpointUrl)
            })
        }))
    })
}

function Ef(a, b) {
    a.deviceId && I("DeviceId", a.deviceId);
    a.timestampSec && I("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome;
    return self.registration.showNotification(c.title, {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: b,
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint
        },
        tag: c.title + c.body + c.iconUrl,
        requireInteraction: !0
    }).then(() => {
        Ff(a.displayCap)
    }).catch(() => {})
}

function Df(a) {
    if (!a.recordNotificationInteractionsEndpoint) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: a.recordNotificationInteractionsEndpoint.serializedInteractionsRequest
        },
        c = jc(Zb);
    return Cf().then(d => qf(d, b, c))
}

function Ff(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let c = 0; c < b.length - a; c++) b[c].close()
    })
}

function yf(a) {
    const b = [Gf(a), J("RegistrationTimestamp").then(Hf), If(), Jf(), Kf()];
    Promise.all(b).catch(() => {
        I("IDToken", a);
        xf();
        return Promise.resolve()
    })
}

function Hf(a) {
    return 9E7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject()
}

function Gf(a) {
    return J("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function If() {
    return J("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function Jf() {
    return J("Endpoint").then(a => Lf().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Kf() {
    return J("application_server_key").then(a => Mf().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Nf() {
    var a = Notification.permission;
    if (vf[a]) return vf[a]
}

function xf() {
    I("RegistrationTimestamp", 0);
    Promise.all([Lf(), Of(), Pf(), Mf()]).then(([a, b, c, d]) => {
        b = b ? ac(b) : null;
        c = c ? ac(c) : null;
        d = d ? Oa(new Uint8Array(d), 4) : null;
        Qf(a, b, c, d)
    }).catch(() => {
        Qf()
    })
}

function Qf(a = null, b = null, c = null, d = null) {
    fc().then(e => {
        e && (I("Endpoint", a), I("P256dhKey", b), I("AuthKey", c), I("application_server_key", d), I("Permission", Notification.permission), Promise.all([J("DeviceId"), J("NotificationsDisabled")]).then(([f, g]) => {
            if (null !== f && void 0 !== f) var h = f;
            else {
                f = [];
                var k;
                h = h || Xb.length;
                for (k = 0; 256 > k; k++) f[k] = Xb[0 | Math.random() * h];
                h = f.join("")
            }
            Rf(h, null !== a && void 0 !== a ? a : void 0, null !== b && void 0 !== b ? b : void 0, null !== c && void 0 !== c ? c : void 0, null !== d && void 0 !== d ? d : void 0, null !==
                g && void 0 !== g ? g : void 0)
        }))
    })
}

function Rf(a, b, c, d, e, f) {
    D(this, function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: Nf()
                    }
                }
            },
            h = jc($b);
        return Cf().then(k => qf(k, g, h).then(() => {
            I("DeviceId", a);
            I("RegistrationTimestamp", Date.now());
            I("TimestampLowerBound", Date.now())
        }, l => {
            Y(l)
        }))
    })
}

function Lf() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function Of() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function Pf() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function Mf() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function Cf() {
    return D(this, function*() {
        try {
            return yield We(!0), sf()
        } catch (a) {
            return yield Y(a), Promise.reject(a)
        }
    })
};
let Sf = void 0;

function Tf(a) {
    return D(this, function*() {
        Sf || (Sf = yield a.open("yt-appshell-assets"));
        return Sf
    })
}

function Uf(a, b) {
    return D(this, function*() {
        const c = yield Tf(a), d = b.map(e => Vf(c, e));
        return Promise.all(d)
    })
}

function Wf(a, b) {
    return D(this, function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function Xf(a, b) {
    return D(this, function*() {
        const c = yield Tf(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function Yf(a, b, c) {
    return D(this, function*() {
        yield(yield Tf(a)).put(b, c)
    })
}

function Zf(a, b) {
    D(this, function*() {
        yield(yield Tf(a)).delete(b)
    })
}

function Vf(a, b) {
    return D(this, function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var Z;
Z = pe("yt-serviceworker-metadata", {
    T: {
        ["auth"]: {
            L: 1
        },
        ["resource-manifest-assets"]: {
            L: 2
        }
    },
    Z: !0,
    upgrade(a, b) {
        b(1) && Nd(a, "resource-manifest-assets");
        b(2) && Nd(a, "auth")
    },
    version: 2
});
let $f = null;

function ag() {
    return D(bg, function*() {
        const a = yield ie();
        if (a) return bg.h || (bg.h = new bg(a)), bg.h
    })
}

function cg(a, b) {
    return D(a, function*() {
        yield X(yield Z().open(), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return d.put(b, e).then(() => {
                $f = e;
                let f = !0;
                return Rd(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1, g.advance(5)) : d.delete(g.getKey()).then(() => g.continue()))
            })
        })
    })
}

function dg(a, b) {
    return D(a, function*() {
        let c = !1,
            d = 0;
        yield X(yield Z().open(), ["resource-manifest-assets"], "readonly", e => Rd(e.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.cursor.value.includes(b)) c = !0;
            else return d += 1, f.continue()
        }));
        return c ? d : -1
    })
}

function eg(a) {
    return D(a, function*() {
        $f || (yield X(yield Z().open(), ["resource-manifest-assets"], "readonly", b => Rd(b.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            $f = c.getKey()
        })));
        return $f
    })
}
var bg = class {
    constructor(a) {
        this.token = a
    }
};

function fg() {
    return D(gg, function*() {
        const a = yield ie();
        if (a) return gg.h || (gg.h = new gg(a)), gg.h
    })
}

function hg(a, b) {
    return D(a, function*() {
        yield(yield Z().open()).put("auth", b, "shell_identifier_key")
    })
}

function ig(a) {
    return D(a, function*() {
        return (yield(yield Z().open()).get("auth", "shell_identifier_key")) || ""
    })
}

function jg(a) {
    return D(a, function*() {
        yield(yield Z().open()).clear("auth")
    })
}
var gg = class {
    constructor(a) {
        this.token = a
    }
};

function kg() {
    D(this, function*() {
        const a = yield fg();
        a && (yield jg(a))
    })
};

function lg(a, b) {
    for (; Ia(b);) switch (b.m) {
        case 10:
            var c = b,
                d = Ha(c.h);
            c = c.h;
            var e = c.h;
            c.h += d;
            var f = c.j,
                g = d;
            if (Ba) d = f, c = e, f = g, (e = Aa) || (e = Aa = new TextDecoder("utf-8", {
                fatal: !1
            })), c = e.decode(d.subarray(c, c + f));
            else {
                var h = c = d = void 0;
                let k;
                g = e + g;
                const l = [];
                let n = null;
                for (; e < g;) k = f[e++], 128 > k ? l.push(k) : 224 > k ? e >= g ? l.push(65533) : (h = f[e++], 194 > k || 128 !== (h & 192) ? (e--, l.push(65533)) : l.push((k & 31) << 6 | h & 63)) : 240 > k ? e >= g - 1 ? l.push(65533) : (h = f[e++], 128 !== (h & 192) || 224 === k && 160 > h || 237 === k && 160 <= h || 128 !== ((c = f[e++]) & 192) ?
                    (e--, l.push(65533)) : l.push((k & 15) << 12 | (h & 63) << 6 | c & 63)) : 244 >= k ? e >= g - 2 ? l.push(65533) : (h = f[e++], 128 !== (h & 192) || 0 !== (k << 28) + (h - 144) >> 30 || 128 !== ((c = f[e++]) & 192) || 128 !== ((d = f[e++]) & 192) ? (e--, l.push(65533)) : (h = (k & 7) << 18 | (h & 63) << 12 | (c & 63) << 6 | d & 63, h -= 65536, l.push((h >> 10 & 1023) + 55296, (h & 1023) + 56320))) : l.push(65533), 8192 <= l.length && (n = za(n, l), l.length = 0);
                c = za(n, l)
            }
            d = a;
            1 < d.m ? d.i[1 + d.l] = c : (bb(d), d.j[1] = c);
            break;
        default:
            if (!fb(b)) return a
    }
    return a
}
var mg = class extends $a {
    constructor(a) {
        super(a)
    }
};

function ng(a) {
    a: {
        var b = new og;
        for (a = new Ka(a); Ia(a);) switch (a.m) {
            case 10:
                var c = b,
                    d = a,
                    e = new mg,
                    f = lg;
                const h = d.h.i;
                var g = Ha(d.h);
                g = d.h.h + g;
                d.h.i = g;
                f(e, d);
                d.h.h = g;
                d.h.i = h;
                d = e;
                f = mg;
                e = cb(c, f);
                d = d ? d : new f;
                c = C(c, 1);
                e.push(d);
                c.push(eb(d, !1));
                break;
            default:
                if (!fb(a)) break a
        }
    }
    return b
}
var og = class extends $a {
        constructor() {
            super(void 0, -1, pg)
        }
    },
    pg = [1];

function qg(a) {
    return D(this, function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(rg(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function rg(a) {
    return cb(ng(decodeURIComponent(a)), mg).reduce((b, c) => {
        (c = C(c, 1)) && b.push(c);
        return b
    }, [])
};

function sg(a) {
    return D(a, function*() {
        const b = yield We();
        if (b && null != C(b, 3)) {
            var c = yield fg();
            c && (c = yield ig(c), C(b, 3) !== c && (Zf(this.h, this.i), kg()))
        }
    })
}

function tg(a) {
    return D(a, function*() {
        let b, c;
        try {
            c = yield ug(this, this.j), b = yield qg(c), yield Uf(this.h, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield vg(this), yield Yf(this.h, this.i, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield wg(this, b, this.i)
        } catch (d) {}
        return Promise.resolve()
    })
}

function xg(a) {
    return D(a, function*() {
        yield sg(this);
        return tg(this)
    })
}

function ug(a, b) {
    return D(a, function*() {
        try {
            return yield p.fetch(new Request(b))
        } catch (c) {
            return Promise.reject(c)
        }
    })
}

function vg(a) {
    return D(a, function*() {
        var b = yield We();
        let c;
        b && null != C(b, 3) && (c = C(b, 3));
        return c ? (b = yield fg()) ? Promise.resolve(hg(b, c)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function wg(a, b, c) {
    return D(a, function*() {
        const d = yield ag();
        if (d) try {
            yield cg(d, b)
        } catch (e) {
            yield Y(e)
        }
        b.push(c);
        try {
            yield Xf(this.h, b)
        } catch (e) {
            yield Y(e)
        }
        return Promise.resolve()
    })
}

function yg(a, b) {
    return D(a, function*() {
        return Wf(this.h, b)
    })
}

function zg(a) {
    return D(a, function*() {
        return Wf(this.h, this.i)
    })
}
var Ag = class {
    constructor() {
        var a = self.location.origin + "/app_shell",
            b = self.location.origin + "/app_shell_home";
        this.h = self.caches;
        this.j = a;
        this.i = b
    }
};

function Bg(a, b) {
    return D(a, function*() {
        const c = b.request,
            d = yield yg(this.h, c.url);
        if (d) return uf({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: Q()
        }), d;
        Cg(c);
        return Dg(b)
    })
}

function Eg(a, b) {
    return D(a, function*() {
        const c = yield Fg(this, b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield zg(this.h);
        if (d) return Gg(this), d;
        Hg(this);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function Ig(a, b) {
    b = new URL(b);
    if (!a.i.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    for (const c of a.l)
        if (a = b.searchParams.get(c.key), void 0 === c.value || a === c.value)
            if (b.searchParams.delete(c.key), !b.search) return !0;
    return !1
}

function Jg(a, b) {
    return D(a, function*() {
        const c = yield zg(this.h);
        if (!c) return Hg(this), Dg(b);
        Gg(this);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(Q() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return c;
        d = yield Fg(this, b);
        return d.response && d.response.ok ? d.response : c
    })
}

function Dg(a) {
    return Promise.resolve(a.preloadResponse).then(b => b || p.fetch(a.request))
}

function Cg(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    ag().then(c => {
        if (c) {
            var d = eg(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = dg(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                Y(e)
            }).finally(() => {
                uf({
                    appShellAssetLoadReport: b,
                    timestamp: Q()
                })
            })
        } else uf({
            appShellAssetLoadReport: b,
            timestamp: Q()
        })
    })
}

function Gg(a) {
    uf({
        appShellAssetLoadReport: {
            assetPath: a.h.i,
            cacheHit: !0
        },
        timestamp: Q()
    })
}

function Hg(a) {
    uf({
        appShellAssetLoadReport: {
            assetPath: a.h.i,
            cacheHit: !1
        },
        timestamp: Q()
    })
}

function Fg(a, b) {
    return D(a, function*() {
        try {
            return {
                response: yield Dg(b)
            }
        } catch (c) {
            return {
                error: c
            }
        }
    })
}
var Pg = class {
    constructor() {
        var a = Kg,
            b = Lg,
            c = Mg,
            d = Ng;
        const e = [];
        e.push({
            key: "feature",
            value: "ytca"
        });
        for (var f of hb) e.push({
            key: f
        });
        f = Og();
        this.h = a;
        this.m = b;
        this.D = c;
        this.i = d;
        this.l = e;
        this.j = f
    }
};
var Ng = ["/", "/feed/downloads"];
const Qg = [/^\/$/, /^\/feed\/downloads$/],
    Rg = [/^\/$/, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function Og() {
    return new RegExp((O("kevlar_sw_app_wide_fallback") ? Rg : Qg).map(a => a.source).join("|"))
}
var Lg = /^https:\/\/[\w-]*\.?youtube\.com.*(\.css$|\.js$|\.ico$|\/ytmweb\/_\/js\/|\/ytmweb\/_\/ss\/)/,
    Mg = /^https:\/\/[\w-]*\.?youtube\.com.*(purge_shell=1|\/signin|\/logout)/;
var Sg = class {
    constructor() {
        var a = Kg,
            b = new Pg;
        this.h = self;
        this.i = a;
        this.m = b;
        this.K = bc
    }
    init() {
        this.h.oninstall = this.D.bind(this);
        this.h.onactivate = this.j.bind(this);
        this.h.onfetch = this.l.bind(this);
        this.h.onmessage = this.J.bind(this)
    }
    D(a) {
        a.waitUntil(this.h.skipWaiting());
        const b = xg(this.i).catch(c => {
            Y(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    j(a) {
        const b = [this.h.clients.claim()];
        this.h.registration.navigationPreload && b.push(this.h.registration.navigationPreload.enable());
        a.waitUntil(Promise.all(b))
    }
    l(a) {
        return D(this, function*() {
            var b = this.m,
                c = !!this.h.registration.navigationPreload;
            const d = a.request;
            if (b.D.test(d.url)) Xe.h && (delete Xe.h.h, p.__SAPISID = void 0, L("VISITOR_DATA", void 0), L("SESSION_INDEX", void 0), L("DELEGATED_SESSION_ID", void 0)), c = a.respondWith, b = b.h, Zf(b.h, b.i), kg(), b = Dg(a), c.call(a, b);
            else if (b.m.test(d.url)) a.respondWith(Bg(b,
                a));
            else if ("navigate" === d.mode) {
                if (O("sw_nav_request_network_first")) {
                    var e = new URL(d.url);
                    e = b.j.test(e.pathname)
                } else e = !1;
                e ? a.respondWith(Eg(b, a)) : Ig(b, d.url) ? a.respondWith(Jg(b, a)) : c && a.respondWith(Dg(a))
            }
        })
    }
    J(a) {
        const b = a.data;
        this.K.includes(b.type) ? wf(a) : "refresh_shell" === b.type && tg(this.i).catch(c => {
            Y(c)
        })
    }
};

function Tg() {
    let a = q("ytglobal.storage_");
    a || (a = new Ug, u("ytglobal.storage_", a));
    return a
}
var Ug = class {
    estimate() {
        var a, b;
        return D(this, function*() {
            const c = navigator;
            if (null === (a = c.storage) || void 0 === a ? 0 : a.estimate) return c.storage.estimate();
            if (null === (b = c.webkitTemporaryStorage) || void 0 === b ? 0 : b.queryUsageAndQuota) return Vg()
        })
    }
};

function Vg() {
    const a = navigator;
    return new Promise((b, c) => {
        var d;
        null !== (d = a.webkitTemporaryStorage) && void 0 !== d && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
u("ytglobal.storageClass_", Ug);

function Wg(a, b) {
    Tg().estimate().then(c => {
        c = Object.assign(Object.assign({}, b), {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: Xg(null === c || void 0 === c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: Xg(null === c || void 0 === c ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class Yg {
    constructor() {
        var a = Zg;
        this.handleError = $g;
        this.h = a;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= qc("ytidb_transaction_ended_event_rate_limit", .02)
    }
    S(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                O("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                O("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                Wg(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a =
                    Object.assign(Object.assign({}, b), {
                        hasWindowUnloaded: this.i
                    }), this.h("idbTransactionAborted", a)
        }
    }
}

function Xg(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
Fe(Ce(), {
    A: [{
        wa: /Failed to fetch/,
        weight: 500
    }],
    u: []
});
var {
    handleError: $g = Se,
    S: Zg = ye
} = {
    handleError: function(a) {
        return D(this, function*() {
            yield tf();
            Te(a)
        })
    },
    S: function(a, b) {
        return D(this, function*() {
            yield tf();
            ye(a, b)
        })
    }
};
for (T = new Yg; 0 < S.length;) {
    const a = S.shift();
    switch (a.type) {
        case "ERROR":
            T.handleError(a.payload);
            break;
        case "EVENT":
            T.S(a.eventType, a.payload)
    }
}
Xe.h = new Xe;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data,
        c = self.clients.matchAll({
            type: "window",
            includeUncontrolled: !0
        });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(Df(b.clickEndpoint))
};
self.onpush = function(a) {
    a.waitUntil(J("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return Bf(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(zf())
};
self.onpushsubscriptionchange = function() {
    xf()
};
const Kg = new Ag;
(new Sg).init();