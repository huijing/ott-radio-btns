"use strict";

if ("document" in self) {
  if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
    (function (t) {
      "use strict";
      if (!("Element" in t)) return;var e = "classList",
          i = "prototype",
          n = t.Element[i],
          s = Object,
          r = String[i].trim || function () {
        return this.replace(/^\s+|\s+$/g, "");
      },
          a = Array[i].indexOf || function (t) {
        var e = 0,
            i = this.length;for (; e < i; e++) {
          if (e in this && this[e] === t) {
            return e;
          }
        }return -1;
      },
          o = function o(t, e) {
        this.name = t;this.code = DOMException[t];this.message = e;
      },
          l = function l(t, e) {
        if (e === "") {
          throw new o("SYNTAX_ERR", "An invalid or illegal string was specified");
        }if (/\s/.test(e)) {
          throw new o("INVALID_CHARACTER_ERR", "String contains an invalid character");
        }return a.call(t, e);
      },
          c = function c(t) {
        var e = r.call(t.getAttribute("class") || ""),
            i = e ? e.split(/\s+/) : [],
            n = 0,
            s = i.length;for (; n < s; n++) {
          this.push(i[n]);
        }this._updateClassName = function () {
          t.setAttribute("class", this.toString());
        };
      },
          u = c[i] = [],
          f = function f() {
        return new c(this);
      };o[i] = Error[i];u.item = function (t) {
        return this[t] || null;
      };u.contains = function (t) {
        t += "";return l(this, t) !== -1;
      };u.add = function () {
        var t = arguments,
            e = 0,
            i = t.length,
            n,
            s = false;do {
          n = t[e] + "";if (l(this, n) === -1) {
            this.push(n);s = true;
          }
        } while (++e < i);if (s) {
          this._updateClassName();
        }
      };u.remove = function () {
        var t = arguments,
            e = 0,
            i = t.length,
            n,
            s = false,
            r;do {
          n = t[e] + "";r = l(this, n);while (r !== -1) {
            this.splice(r, 1);s = true;r = l(this, n);
          }
        } while (++e < i);if (s) {
          this._updateClassName();
        }
      };u.toggle = function (t, e) {
        t += "";var i = this.contains(t),
            n = i ? e !== true && "remove" : e !== false && "add";if (n) {
          this[n](t);
        }if (e === true || e === false) {
          return e;
        } else {
          return !i;
        }
      };u.toString = function () {
        return this.join(" ");
      };if (s.defineProperty) {
        var h = { get: f, enumerable: true, configurable: true };try {
          s.defineProperty(n, e, h);
        } catch (d) {
          if (d.number === -2146823252) {
            h.enumerable = false;s.defineProperty(n, e, h);
          }
        }
      } else if (s[i].__defineGetter__) {
        n.__defineGetter__(e, f);
      }
    })(self);
  } else {
    (function () {
      "use strict";
      var t = document.createElement("_");t.classList.add("c1", "c2");if (!t.classList.contains("c2")) {
        var e = function e(t) {
          var e = DOMTokenList.prototype[t];DOMTokenList.prototype[t] = function (t) {
            var i,
                n = arguments.length;for (i = 0; i < n; i++) {
              t = arguments[i];e.call(this, t);
            }
          };
        };e("add");e("remove");
      }t.classList.toggle("c3", false);if (t.classList.contains("c3")) {
        var i = DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle = function (t, e) {
          if (1 in arguments && !this.contains(t) === !e) {
            return e;
          } else {
            return i.call(this, t);
          }
        };
      }t = null;
    })();
  }
}
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransitions-setclasses !*/
!function (e, n, t) {
  function r(e, n) {
    return (typeof e === "undefined" ? "undefined" : _typeof(e)) === n;
  }function s() {
    var e, n, t, s, o, i, a;for (var l in C) {
      if (C.hasOwnProperty(l)) {
        if (e = [], n = C[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) {
          e.push(n.options.aliases[t].toLowerCase());
        }for (s = r(n.fn, "function") ? n.fn() : n.fn, o = 0; o < e.length; o++) {
          i = e[o], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), g.push((s ? "" : "no-") + a.join("-"));
        }
      }
    }
  }function o(e) {
    var n = _.className,
        t = Modernizr._config.classPrefix || "";if (S && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");n = n.replace(r, "$1" + t + "js$2");
    }Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), S ? _.className.baseVal = n : _.className = n);
  }function i(e, n) {
    return !!~("" + e).indexOf(n);
  }function a() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }function l(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
      return n + t.toUpperCase();
    }).replace(/^-/, "");
  }function f(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }function u(e, n, t) {
    var s;for (var o in e) {
      if (e[o] in n) return t === !1 ? e[o] : (s = n[e[o]], r(s, "function") ? f(s, t || n) : s);
    }return !1;
  }function d(e) {
    return e.replace(/([A-Z])/g, function (e, n) {
      return "-" + n.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }function c() {
    var e = n.body;return e || (e = a(S ? "svg" : "body"), e.fake = !0), e;
  }function p(e, t, r, s) {
    var o,
        i,
        l,
        f,
        u = "modernizr",
        d = a("div"),
        p = c();if (parseInt(r, 10)) for (; r--;) {
      l = a("div"), l.id = s ? s[r] : u + (r + 1), d.appendChild(l);
    }return o = a("style"), o.type = "text/css", o.id = "s" + u, (p.fake ? p : d).appendChild(o), p.appendChild(d), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(n.createTextNode(e)), d.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = _.style.overflow, _.style.overflow = "hidden", _.appendChild(p)), i = t(d, e), p.fake ? (p.parentNode.removeChild(p), _.style.overflow = f, _.offsetHeight) : d.parentNode.removeChild(d), !!i;
  }function m(n, r) {
    var s = n.length;if ("CSS" in e && "supports" in e.CSS) {
      for (; s--;) {
        if (e.CSS.supports(d(n[s]), r)) return !0;
      }return !1;
    }if ("CSSSupportsRule" in e) {
      for (var o = []; s--;) {
        o.push("(" + d(n[s]) + ":" + r + ")");
      }return o = o.join(" or "), p("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == getComputedStyle(e, null).position;
      });
    }return t;
  }function h(e, n, s, o) {
    function f() {
      d && (delete z.style, delete z.modElem);
    }if (o = r(o, "undefined") ? !1 : o, !r(s, "undefined")) {
      var u = m(e, s);if (!r(u, "undefined")) return u;
    }for (var d, c, p, h, v, y = ["modernizr", "tspan", "samp"]; !z.style && y.length;) {
      d = !0, z.modElem = a(y.shift()), z.style = z.modElem.style;
    }for (p = e.length, c = 0; p > c; c++) {
      if (h = e[c], v = z.style[h], i(h, "-") && (h = l(h)), z.style[h] !== t) {
        if (o || r(s, "undefined")) return f(), "pfx" == n ? h : !0;try {
          z.style[h] = s;
        } catch (g) {}if (z.style[h] != v) return f(), "pfx" == n ? h : !0;
      }
    }return f(), !1;
  }function v(e, n, t, s, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + b.join(i + " ") + i).split(" ");return r(n, "string") || r(n, "undefined") ? h(a, n, s, o) : (a = (e + " " + E.join(i + " ") + i).split(" "), u(a, n, t));
  }function y(e, n, r) {
    return v(e, t, t, n, r);
  }var g = [],
      C = [],
      w = { _version: "3.3.1", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function on(e, n) {
      var t = this;setTimeout(function () {
        n(t[e]);
      }, 0);
    }, addTest: function addTest(e, n, t) {
      C.push({ name: e, fn: n, options: t });
    }, addAsyncTest: function addAsyncTest(e) {
      C.push({ name: null, fn: e });
    } },
      Modernizr = function Modernizr() {};Modernizr.prototype = w, Modernizr = new Modernizr();var _ = n.documentElement,
      S = "svg" === _.nodeName.toLowerCase(),
      x = "Moz O ms Webkit",
      b = w._config.usePrefixes ? x.split(" ") : [];w._cssomPrefixes = b;var E = w._config.usePrefixes ? x.toLowerCase().split(" ") : [];w._domPrefixes = E;var P = { elem: a("modernizr") };Modernizr._q.push(function () {
    delete P.elem;
  });var z = { style: P.elem.style };Modernizr._q.unshift(function () {
    delete z.style;
  }), w.testAllProps = v, w.testAllProps = y, Modernizr.addTest("csstransforms", function () {
    return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0);
  }), Modernizr.addTest("csstransitions", y("transition", "all", !0)), s(), o(g), delete w.addTest, delete w.addAsyncTest;for (var N = 0; N < Modernizr._q.length; N++) {
    Modernizr._q[N]();
  }e.Modernizr = Modernizr;
}(window, document);
'use strict';

var doc = window.document.documentElement;
var optWrapper = document.getElementById('js-options');
var actWrapper = document.getElementById('js-actions');
var optInput = doc.querySelectorAll('.js-option');
var btn = doc.querySelectorAll('.js-btn');
var switcher = doc.querySelectorAll('.js-switcher');

var hasClass = function hasClass(element, cls) {
  return element.classList.contains(cls);
};

var addEventListenerList = function addEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
};

var removeClass = function removeClass(list, className, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].classList.remove(className);
  }
};

var handleSwitch = function handleSwitch(event) {
  var checked = event.target.checked;
  doc.classList[!checked ? 'add' : 'remove']('basic');
  doc.classList[checked ? 'add' : 'remove']('enhanced');
  optWrapper.classList.remove('is-active');
  actWrapper.classList.remove('is-active');
  removeClass(optInput, 'is-checked');
  if (checked) {
    if (window.Modernizr.csstransforms && window.Modernizr.csstransitions) {
      doc.className += ' has-animation';
      window['hasAnimation'] = true;
    }
  } else {
    doc.classList.remove('has-animation');
  }
};

var handleClick = function handleClick(event) {
  var checked = event.target.checked;
  var parent = event.target.parentNode;
  if (checked && hasClass(doc, 'enhanced')) {
    parent.classList.add('is-checked');
    optWrapper.classList.add('is-active');
    actWrapper.classList.add('is-active');
  }
};

var handleAction = function handleAction() {
  if (hasClass(doc, 'enhanced')) {
    optWrapper.classList.remove('is-active');
    actWrapper.classList.remove('is-active');
    removeClass(optInput, 'is-checked');
  }
};

addEventListenerList(switcher, 'change', handleSwitch);

addEventListenerList(optInput, 'change', handleClick);

addEventListenerList(btn, 'click', handleAction);