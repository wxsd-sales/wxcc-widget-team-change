function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = false,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function (t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = true, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), true), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
    return this;
  }), _regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function () {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine = function (e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine(e, r, n, t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(t.prototype ), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1 = globalThis,
  e$2 = t$1.ShadowRoot && (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  s$2 = Symbol(),
  o$3 = new WeakMap();
var n$2 = /*#__PURE__*/function () {
  function n(t, e, o) {
    _classCallCheck(this, n);
    if (this._$cssResult$ = true, o !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  return _createClass(n, [{
    key: "styleSheet",
    get: function get() {
      var t = this.o;
      var s = this.t;
      if (e$2 && void 0 === t) {
        var _e = void 0 !== s && 1 === s.length;
        _e && (t = o$3.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), _e && o$3.set(s, t));
      }
      return t;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }]);
}();
var r$2 = function r(t) {
    return new n$2("string" == typeof t ? t : t + "", void 0, s$2);
  },
  i$3 = function i(t) {
    for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      e[_key - 1] = arguments[_key];
    }
    var o = 1 === t.length ? t[0] : e.reduce(function (e, s, o) {
      return e + function (t) {
        if (true === t._$cssResult$) return t.cssText;
        if ("number" == typeof t) return t;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      }(s) + t[o + 1];
    }, t[0]);
    return new n$2(o, t, s$2);
  },
  S$1 = function S(s, o) {
    if (e$2) s.adoptedStyleSheets = o.map(function (t) {
      return t instanceof CSSStyleSheet ? t : t.styleSheet;
    });else {
      var _iterator = _createForOfIteratorHelper(o),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _e2 = _step.value;
          var _o = document.createElement("style"),
            _n = t$1.litNonce;
          void 0 !== _n && _o.setAttribute("nonce", _n), _o.textContent = _e2.cssText, s.appendChild(_o);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  },
  c$2 = e$2 ? function (t) {
    return t;
  } : function (t) {
    return t instanceof CSSStyleSheet ? function (t) {
      var e = "";
      var _iterator2 = _createForOfIteratorHelper(t.cssRules),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _s = _step2.value;
          e += _s.cssText;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return r$2(e);
    }(t) : t;
  };

var _Symbol$metadata, _a$litPropertyMetadat, _a$reactiveElementVer;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var i$2 = Object.is,
  e$1 = Object.defineProperty,
  h$1 = Object.getOwnPropertyDescriptor,
  r$1 = Object.getOwnPropertyNames,
  o$2 = Object.getOwnPropertySymbols,
  n$1 = Object.getPrototypeOf,
  a$1 = globalThis,
  c$1 = a$1.trustedTypes,
  l$1 = c$1 ? c$1.emptyScript : "",
  p$1 = a$1.reactiveElementPolyfillSupport,
  d$1 = function d(t, s) {
    return t;
  },
  u$1 = {
    toAttribute: function toAttribute(t, s) {
      switch (s) {
        case Boolean:
          t = t ? l$1 : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute: function fromAttribute(t, s) {
      var i = t;
      switch (s) {
        case Boolean:
          i = null !== t;
          break;
        case Number:
          i = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            i = JSON.parse(t);
          } catch (t) {
            i = null;
          }
      }
      return i;
    }
  },
  f$1 = function f(t, s) {
    return !i$2(t, s);
  },
  b$1 = {
    attribute: true,
    type: String,
    converter: u$1,
    reflect: false,
    useDefault: false,
    hasChanged: f$1
  };
(_Symbol$metadata = Symbol.metadata) !== null && _Symbol$metadata !== void 0 ? _Symbol$metadata : Symbol.metadata = Symbol("metadata"), (_a$litPropertyMetadat = a$1.litPropertyMetadata) !== null && _a$litPropertyMetadat !== void 0 ? _a$litPropertyMetadat : a$1.litPropertyMetadata = new WeakMap();
var y$1 = /*#__PURE__*/function (_HTMLElement) {
  function y() {
    var _this;
    _classCallCheck(this, y);
    _this = _callSuper(this, y), _this._$Ep = void 0, _this.isUpdatePending = false, _this.hasUpdated = false, _this._$Em = null, _this._$Ev();
    return _this;
  }
  _inherits(y, _HTMLElement);
  return _createClass(y, [{
    key: "_$Ev",
    value: function _$Ev() {
      var _this2 = this,
        _this$constructor$l;
      this._$ES = new Promise(function (t) {
        return _this2.enableUpdating = t;
      }), this._$AL = new Map(), this._$E_(), this.requestUpdate(), (_this$constructor$l = this.constructor.l) === null || _this$constructor$l === void 0 ? void 0 : _this$constructor$l.forEach(function (t) {
        return t(_this2);
      });
    }
  }, {
    key: "addController",
    value: function addController(t) {
      var _this$_$EO, _t$hostConnected;
      ((_this$_$EO = this._$EO) !== null && _this$_$EO !== void 0 ? _this$_$EO : this._$EO = new Set()).add(t), void 0 !== this.renderRoot && this.isConnected && ((_t$hostConnected = t.hostConnected) === null || _t$hostConnected === void 0 ? void 0 : _t$hostConnected.call(t));
    }
  }, {
    key: "removeController",
    value: function removeController(t) {
      var _this$_$EO2;
      (_this$_$EO2 = this._$EO) === null || _this$_$EO2 === void 0 || _this$_$EO2["delete"](t);
    }
  }, {
    key: "_$E_",
    value: function _$E_() {
      var t = new Map(),
        s = this.constructor.elementProperties;
      var _iterator = _createForOfIteratorHelper(s.keys()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _i = _step.value;
          this.hasOwnProperty(_i) && (t.set(_i, this[_i]), delete this[_i]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      t.size > 0 && (this._$Ep = t);
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var _this$shadowRoot;
      var t = (_this$shadowRoot = this.shadowRoot) !== null && _this$shadowRoot !== void 0 ? _this$shadowRoot : this.attachShadow(this.constructor.shadowRootOptions);
      return S$1(t, this.constructor.elementStyles), t;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this$renderRoot, _this$_$EO3;
      (_this$renderRoot = this.renderRoot) !== null && _this$renderRoot !== void 0 ? _this$renderRoot : this.renderRoot = this.createRenderRoot(), this.enableUpdating(true), (_this$_$EO3 = this._$EO) === null || _this$_$EO3 === void 0 ? void 0 : _this$_$EO3.forEach(function (t) {
        var _t$hostConnected2;
        return (_t$hostConnected2 = t.hostConnected) === null || _t$hostConnected2 === void 0 ? void 0 : _t$hostConnected2.call(t);
      });
    }
  }, {
    key: "enableUpdating",
    value: function enableUpdating(t) {}
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this$_$EO4;
      (_this$_$EO4 = this._$EO) === null || _this$_$EO4 === void 0 || _this$_$EO4.forEach(function (t) {
        var _t$hostDisconnected;
        return (_t$hostDisconnected = t.hostDisconnected) === null || _t$hostDisconnected === void 0 ? void 0 : _t$hostDisconnected.call(t);
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(t, s, i) {
      this._$AK(t, i);
    }
  }, {
    key: "_$ET",
    value: function _$ET(t, s) {
      var i = this.constructor.elementProperties.get(t),
        e = this.constructor._$Eu(t, i);
      if (void 0 !== e && true === i.reflect) {
        var _i$converter;
        var _h = (void 0 !== ((_i$converter = i.converter) === null || _i$converter === void 0 ? void 0 : _i$converter.toAttribute) ? i.converter : u$1).toAttribute(s, i.type);
        this._$Em = t, null == _h ? this.removeAttribute(e) : this.setAttribute(e, _h), this._$Em = null;
      }
    }
  }, {
    key: "_$AK",
    value: function _$AK(t, s) {
      var i = this.constructor,
        e = i._$Eh.get(t);
      if (void 0 !== e && this._$Em !== e) {
        var _t$converter, _ref, _this$_$Ej;
        var _t = i.getPropertyOptions(e),
          _h2 = "function" == typeof _t.converter ? {
            fromAttribute: _t.converter
          } : void 0 !== ((_t$converter = _t.converter) === null || _t$converter === void 0 ? void 0 : _t$converter.fromAttribute) ? _t.converter : u$1;
        this._$Em = e;
        var _r = _h2.fromAttribute(s, _t.type);
        this[e] = (_ref = _r !== null && _r !== void 0 ? _r : (_this$_$Ej = this._$Ej) === null || _this$_$Ej === void 0 ? void 0 : _this$_$Ej.get(e)) !== null && _ref !== void 0 ? _ref : _r, this._$Em = null;
      }
    }
  }, {
    key: "requestUpdate",
    value: function requestUpdate(t, s, i) {
      var e = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var h = arguments.length > 4 ? arguments[4] : undefined;
      if (void 0 !== t) {
        var _i$hasChanged, _this$_$Ej2;
        var _r2 = this.constructor;
        if (false === e && (h = this[t]), i !== null && i !== void 0 ? i : i = _r2.getPropertyOptions(t), !(((_i$hasChanged = i.hasChanged) !== null && _i$hasChanged !== void 0 ? _i$hasChanged : f$1)(h, s) || i.useDefault && i.reflect && h === ((_this$_$Ej2 = this._$Ej) === null || _this$_$Ej2 === void 0 ? void 0 : _this$_$Ej2.get(t)) && !this.hasAttribute(_r2._$Eu(t, i)))) return;
        this.C(t, s, i);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
  }, {
    key: "C",
    value: function C(t, s, _ref2, r) {
      var _this$_$Ej3, _ref3, _this$_$Eq;
      var i = _ref2.useDefault,
        e = _ref2.reflect,
        h = _ref2.wrapped;
      i && !((_this$_$Ej3 = this._$Ej) !== null && _this$_$Ej3 !== void 0 ? _this$_$Ej3 : this._$Ej = new Map()).has(t) && (this._$Ej.set(t, (_ref3 = r !== null && r !== void 0 ? r : s) !== null && _ref3 !== void 0 ? _ref3 : this[t]), true !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), true === e && this._$Em !== t && ((_this$_$Eq = this._$Eq) !== null && _this$_$Eq !== void 0 ? _this$_$Eq : this._$Eq = new Set()).add(t));
    }
  }, {
    key: "_$EP",
    value: function () {
      var _$EP2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var t, _t2, _t3;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              this.isUpdatePending = true;
              _context.p = 1;
              _context.n = 2;
              return this._$ES;
            case 2:
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t2 = _context.v;
              Promise.reject(_t2);
            case 4:
              t = this.scheduleUpdate();
              _t3 = null != t;
              if (!_t3) {
                _context.n = 5;
                break;
              }
              _context.n = 5;
              return t;
            case 5:
              return _context.a(2, !this.isUpdatePending);
          }
        }, _callee, this, [[1, 3]]);
      }));
      function _$EP() {
        return _$EP2.apply(this, arguments);
      }
      return _$EP;
    }()
  }, {
    key: "scheduleUpdate",
    value: function scheduleUpdate() {
      return this.performUpdate();
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        var _this$renderRoot2;
        if ((_this$renderRoot2 = this.renderRoot) !== null && _this$renderRoot2 !== void 0 ? _this$renderRoot2 : this.renderRoot = this.createRenderRoot(), this._$Ep) {
          var _iterator2 = _createForOfIteratorHelper(this._$Ep),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                _t4 = _step2$value[0],
                _s = _step2$value[1];
              this[_t4] = _s;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          this._$Ep = void 0;
        }
        var _t5 = this.constructor.elementProperties;
        if (_t5.size > 0) {
          var _iterator3 = _createForOfIteratorHelper(_t5),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _step3$value = _slicedToArray(_step3.value, 2),
                _s2 = _step3$value[0],
                _i2 = _step3$value[1];
              var _t6 = _i2.wrapped,
                _e = this[_s2];
              !0 !== _t6 || this._$AL.has(_s2) || void 0 === _e || this.C(_s2, void 0, _i2, _e);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }
      var t = false;
      var s = this._$AL;
      try {
        var _this$_$EO5;
        t = this.shouldUpdate(s), t ? (this.willUpdate(s), (_this$_$EO5 = this._$EO) !== null && _this$_$EO5 !== void 0 && _this$_$EO5.forEach(function (t) {
          var _t$hostUpdate;
          return (_t$hostUpdate = t.hostUpdate) === null || _t$hostUpdate === void 0 ? void 0 : _t$hostUpdate.call(t);
        }), this.update(s)) : this._$EM();
      } catch (s) {
        throw t = false, this._$EM(), s;
      }
      t && this._$AE(s);
    }
  }, {
    key: "willUpdate",
    value: function willUpdate(t) {}
  }, {
    key: "_$AE",
    value: function _$AE(t) {
      var _this$_$EO6;
      (_this$_$EO6 = this._$EO) !== null && _this$_$EO6 !== void 0 && _this$_$EO6.forEach(function (t) {
        var _t$hostUpdated;
        return (_t$hostUpdated = t.hostUpdated) === null || _t$hostUpdated === void 0 ? void 0 : _t$hostUpdated.call(t);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t)), this.updated(t);
    }
  }, {
    key: "_$EM",
    value: function _$EM() {
      this._$AL = new Map(), this.isUpdatePending = false;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this.getUpdateComplete();
    }
  }, {
    key: "getUpdateComplete",
    value: function getUpdateComplete() {
      return this._$ES;
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(t) {
      return true;
    }
  }, {
    key: "update",
    value: function update(t) {
      var _this3 = this;
      this._$Eq && (this._$Eq = this._$Eq.forEach(function (t) {
        return _this3._$ET(t, _this3[t]);
      })), this._$EM();
    }
  }, {
    key: "updated",
    value: function updated(t) {}
  }, {
    key: "firstUpdated",
    value: function firstUpdated(t) {}
  }], [{
    key: "addInitializer",
    value: function addInitializer(t) {
      var _this$l;
      this._$Ei(), ((_this$l = this.l) !== null && _this$l !== void 0 ? _this$l : this.l = []).push(t);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      return this.finalize(), this._$Eh && _toConsumableArray(this._$Eh.keys());
    }
  }, {
    key: "createProperty",
    value: function createProperty(t) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : b$1;
      if (s.state && (s.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = true), this.elementProperties.set(t, s), !s.noAccessor) {
        var _i3 = Symbol(),
          _h3 = this.getPropertyDescriptor(t, _i3, s);
        void 0 !== _h3 && e$1(this.prototype, t, _h3);
      }
    }
  }, {
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(t, s, i) {
      var _h4;
      var _ref4 = (_h4 = h$1(this.prototype, t)) !== null && _h4 !== void 0 ? _h4 : {
          get: function get() {
            return this[s];
          },
          set: function set(t) {
            this[s] = t;
          }
        },
        e = _ref4.get,
        r = _ref4.set;
      return {
        get: e,
        set: function set(s) {
          var h = e === null || e === void 0 ? void 0 : e.call(this);
          r !== null && r !== void 0 && r.call(this, s), this.requestUpdate(t, h, i);
        },
        configurable: true,
        enumerable: true
      };
    }
  }, {
    key: "getPropertyOptions",
    value: function getPropertyOptions(t) {
      var _this$elementProperti;
      return (_this$elementProperti = this.elementProperties.get(t)) !== null && _this$elementProperti !== void 0 ? _this$elementProperti : b$1;
    }
  }, {
    key: "_$Ei",
    value: function _$Ei() {
      if (this.hasOwnProperty(d$1("elementProperties"))) return;
      var t = n$1(this);
      t.finalize(), void 0 !== t.l && (this.l = _toConsumableArray(t.l)), this.elementProperties = new Map(t.elementProperties);
    }
  }, {
    key: "finalize",
    value: function finalize() {
      if (this.hasOwnProperty(d$1("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
        var _t7 = this.properties,
          _s3 = [].concat(_toConsumableArray(r$1(_t7)), _toConsumableArray(o$2(_t7)));
        var _iterator4 = _createForOfIteratorHelper(_s3),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _i4 = _step4.value;
            this.createProperty(_i4, _t7[_i4]);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      var t = this[Symbol.metadata];
      if (null !== t) {
        var _s4 = litPropertyMetadata.get(t);
        if (void 0 !== _s4) {
          var _iterator5 = _createForOfIteratorHelper(_s4),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _step5$value = _slicedToArray(_step5.value, 2),
                _t8 = _step5$value[0],
                _i5 = _step5$value[1];
              this.elementProperties.set(_t8, _i5);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      }
      this._$Eh = new Map();
      var _iterator6 = _createForOfIteratorHelper(this.elementProperties),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _step6$value = _slicedToArray(_step6.value, 2),
            _t9 = _step6$value[0],
            _s5 = _step6$value[1];
          var _i6 = this._$Eu(_t9, _s5);
          void 0 !== _i6 && this._$Eh.set(_i6, _t9);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
  }, {
    key: "finalizeStyles",
    value: function finalizeStyles(s) {
      var i = [];
      if (Array.isArray(s)) {
        var _e2 = new Set(s.flat(1 / 0).reverse());
        var _iterator7 = _createForOfIteratorHelper(_e2),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _s6 = _step7.value;
            i.unshift(c$2(_s6));
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      } else void 0 !== s && i.push(c$2(s));
      return i;
    }
  }, {
    key: "_$Eu",
    value: function _$Eu(t, s) {
      var i = s.attribute;
      return false === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
y$1.elementStyles = [], y$1.shadowRootOptions = {
  mode: "open"
}, y$1[d$1("elementProperties")] = new Map(), y$1[d$1("finalized")] = new Map(), p$1 !== null && p$1 !== void 0 && p$1({
  ReactiveElement: y$1
}), ((_a$reactiveElementVer = a$1.reactiveElementVersions) !== null && _a$reactiveElementVer !== void 0 ? _a$reactiveElementVer : a$1.reactiveElementVersions = []).push("2.1.2");

var _t$litHtmlVersions;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t = globalThis,
  i$1 = function i(t) {
    return t;
  },
  s$1 = t.trustedTypes,
  e = s$1 ? s$1.createPolicy("lit-html", {
    createHTML: function createHTML(t) {
      return t;
    }
  }) : void 0,
  h = "$lit$",
  o$1 = "lit$".concat(Math.random().toFixed(9).slice(2), "$"),
  n = "?" + o$1,
  r = "<".concat(n, ">"),
  l = document,
  c = function c() {
    return l.createComment("");
  },
  a = function a(t) {
    return null === t || "object" != _typeof(t) && "function" != typeof t;
  },
  u = Array.isArray,
  d = function d(t) {
    return u(t) || "function" == typeof (t === null || t === void 0 ? void 0 : t[Symbol.iterator]);
  },
  f = "[ \t\n\f\r]",
  v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  _ = /-->/g,
  m = />/g,
  p = RegExp(">|".concat(f, "(?:([^\\s\"'>=/]+)(").concat(f, "*=").concat(f, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"), "g"),
  g = /'/g,
  $ = /"/g,
  y = /^(?:script|style|textarea|title)$/i,
  x = function x(t) {
    return function (i) {
      for (var _len = arguments.length, s = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        s[_key - 1] = arguments[_key];
      }
      return {
        _$litType$: t,
        strings: i,
        values: s
      };
    };
  },
  b = x(1),
  E = Symbol["for"]("lit-noChange"),
  A = Symbol["for"]("lit-nothing"),
  C = new WeakMap(),
  P = l.createTreeWalker(l, 129);
function V(t, i) {
  if (!u(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e ? e.createHTML(i) : i;
}
var N = function N(t, i) {
  var s = t.length - 1,
    e = [];
  var n,
    l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "",
    c = v;
  for (var _i = 0; _i < s; _i++) {
    var _s = t[_i];
    var _a = void 0,
      _u = void 0,
      _d = -1,
      _f = 0;
    for (; _f < _s.length && (c.lastIndex = _f, _u = c.exec(_s), null !== _u);) _f = c.lastIndex, c === v ? "!--" === _u[1] ? c = _ : void 0 !== _u[1] ? c = m : void 0 !== _u[2] ? (y.test(_u[2]) && (n = RegExp("</" + _u[2], "g")), c = p) : void 0 !== _u[3] && (c = p) : c === p ? ">" === _u[0] ? (c = n !== null && n !== void 0 ? n : v, _d = -1) : void 0 === _u[1] ? _d = -2 : (_d = c.lastIndex - _u[2].length, _a = _u[1], c = void 0 === _u[3] ? p : '"' === _u[3] ? $ : g) : c === $ || c === g ? c = p : c === _ || c === m ? c = v : (c = p, n = void 0);
    var _x = c === p && t[_i + 1].startsWith("/>") ? " " : "";
    l += c === v ? _s + r : _d >= 0 ? (e.push(_a), _s.slice(0, _d) + h + _s.slice(_d) + o$1 + _x) : _s + o$1 + (-2 === _d ? _i : _x);
  }
  return [V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")), e];
};
var S = /*#__PURE__*/function () {
  function S(_ref, e) {
    var t = _ref.strings,
      i = _ref._$litType$;
    _classCallCheck(this, S);
    var r;
    this.parts = [];
    var l = 0,
      a = 0;
    var u = t.length - 1,
      d = this.parts,
      _N = N(t, i),
      _N2 = _slicedToArray(_N, 2),
      f = _N2[0],
      v = _N2[1];
    if (this.el = S.createElement(f, e), P.currentNode = this.el.content, 2 === i || 3 === i) {
      var _t = this.el.content.firstChild;
      _t.replaceWith.apply(_t, _toConsumableArray(_t.childNodes));
    }
    for (; null !== (r = P.nextNode()) && d.length < u;) {
      if (1 === r.nodeType) {
        if (r.hasAttributes()) {
          var _iterator = _createForOfIteratorHelper(r.getAttributeNames()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _t2 = _step.value;
              if (_t2.endsWith(h)) {
                var _i2 = v[a++],
                  _s2 = r.getAttribute(_t2).split(o$1),
                  _e = /([.?@])?(.*)/.exec(_i2);
                d.push({
                  type: 1,
                  index: l,
                  name: _e[2],
                  strings: _s2,
                  ctor: "." === _e[1] ? I : "?" === _e[1] ? L : "@" === _e[1] ? z : H
                }), r.removeAttribute(_t2);
              } else _t2.startsWith(o$1) && (d.push({
                type: 6,
                index: l
              }), r.removeAttribute(_t2));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (y.test(r.tagName)) {
          var _t3 = r.textContent.split(o$1),
            _i3 = _t3.length - 1;
          if (_i3 > 0) {
            r.textContent = s$1 ? s$1.emptyScript : "";
            for (var _s3 = 0; _s3 < _i3; _s3++) r.append(_t3[_s3], c()), P.nextNode(), d.push({
              type: 2,
              index: ++l
            });
            r.append(_t3[_i3], c());
          }
        }
      } else if (8 === r.nodeType) if (r.data === n) d.push({
        type: 2,
        index: l
      });else {
        var _t4 = -1;
        for (; -1 !== (_t4 = r.data.indexOf(o$1, _t4 + 1));) d.push({
          type: 7,
          index: l
        }), _t4 += o$1.length - 1;
      }
      l++;
    }
  }
  return _createClass(S, null, [{
    key: "createElement",
    value: function createElement(t, i) {
      var s = l.createElement("template");
      return s.innerHTML = t, s;
    }
  }]);
}();
function M(t, i) {
  var _s$_$Co, _h, _h2, _h2$_$AO, _s$_$Co2;
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
  var e = arguments.length > 3 ? arguments[3] : undefined;
  if (i === E) return i;
  var h = void 0 !== e ? (_s$_$Co = s._$Co) === null || _s$_$Co === void 0 ? void 0 : _s$_$Co[e] : s._$Cl;
  var o = a(i) ? void 0 : i._$litDirective$;
  return ((_h = h) === null || _h === void 0 ? void 0 : _h.constructor) !== o && ((_h2 = h) !== null && _h2 !== void 0 && (_h2$_$AO = _h2._$AO) !== null && _h2$_$AO !== void 0 && _h2$_$AO.call(_h2, false), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? ((_s$_$Co2 = s._$Co) !== null && _s$_$Co2 !== void 0 ? _s$_$Co2 : s._$Co = [])[e] = h : s._$Cl = h), void 0 !== h && (i = M(t, h._$AS(t, i.values), h, e)), i;
}
var R = /*#__PURE__*/function () {
  function R(t, i) {
    _classCallCheck(this, R);
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  return _createClass(R, [{
    key: "parentNode",
    get: function get() {
      return this._$AM.parentNode;
    }
  }, {
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "u",
    value: function u(t) {
      var _t$creationScope;
      var _this$_$AD = this._$AD,
        i = _this$_$AD.el.content,
        s = _this$_$AD.parts,
        e = ((_t$creationScope = t === null || t === void 0 ? void 0 : t.creationScope) !== null && _t$creationScope !== void 0 ? _t$creationScope : l).importNode(i, true);
      P.currentNode = e;
      var h = P.nextNode(),
        o = 0,
        n = 0,
        r = s[0];
      for (; void 0 !== r;) {
        var _r;
        if (o === r.index) {
          var _i4 = void 0;
          2 === r.type ? _i4 = new k(h, h.nextSibling, this, t) : 1 === r.type ? _i4 = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (_i4 = new Z(h, this, t)), this._$AV.push(_i4), r = s[++n];
        }
        o !== ((_r = r) === null || _r === void 0 ? void 0 : _r.index) && (h = P.nextNode(), o++);
      }
      return P.currentNode = l, e;
    }
  }, {
    key: "p",
    value: function p(t) {
      var i = 0;
      var _iterator2 = _createForOfIteratorHelper(this._$AV),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _s4 = _step2.value;
          void 0 !== _s4 && (void 0 !== _s4.strings ? (_s4._$AI(t, _s4, i), i += _s4.strings.length - 2) : _s4._$AI(t[i])), i++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);
}();
var k = /*#__PURE__*/function () {
  function k(t, i, s, e) {
    var _e$isConnected;
    _classCallCheck(this, k);
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = (_e$isConnected = e === null || e === void 0 ? void 0 : e.isConnected) !== null && _e$isConnected !== void 0 ? _e$isConnected : true;
  }
  return _createClass(k, [{
    key: "_$AU",
    get: function get() {
      var _this$_$AM$_$AU, _this$_$AM;
      return (_this$_$AM$_$AU = (_this$_$AM = this._$AM) === null || _this$_$AM === void 0 ? void 0 : _this$_$AM._$AU) !== null && _this$_$AM$_$AU !== void 0 ? _this$_$AM$_$AU : this._$Cv;
    }
  }, {
    key: "parentNode",
    get: function get() {
      var _t5;
      var t = this._$AA.parentNode;
      var i = this._$AM;
      return void 0 !== i && 11 === ((_t5 = t) === null || _t5 === void 0 ? void 0 : _t5.nodeType) && (t = i.parentNode), t;
    }
  }, {
    key: "startNode",
    get: function get() {
      return this._$AA;
    }
  }, {
    key: "endNode",
    get: function get() {
      return this._$AB;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      t = M(this, t, i), a(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== E && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : d(t) ? this.k(t) : this._(t);
    }
  }, {
    key: "O",
    value: function O(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
  }, {
    key: "T",
    value: function T(t) {
      this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
  }, {
    key: "_",
    value: function _(t) {
      this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t : this.T(l.createTextNode(t)), this._$AH = t;
    }
  }, {
    key: "$",
    value: function $(t) {
      var _this$_$AH;
      var i = t.values,
        s = t._$litType$,
        e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = S.createElement(V(s.h, s.h[0]), this.options)), s);
      if (((_this$_$AH = this._$AH) === null || _this$_$AH === void 0 ? void 0 : _this$_$AH._$AD) === e) this._$AH.p(i);else {
        var _t6 = new R(e, this),
          _s5 = _t6.u(this.options);
        _t6.p(i), this.T(_s5), this._$AH = _t6;
      }
    }
  }, {
    key: "_$AC",
    value: function _$AC(t) {
      var i = C.get(t.strings);
      return void 0 === i && C.set(t.strings, i = new S(t)), i;
    }
  }, {
    key: "k",
    value: function k(t) {
      u(this._$AH) || (this._$AH = [], this._$AR());
      var i = this._$AH;
      var s,
        e = 0;
      var _iterator3 = _createForOfIteratorHelper(t),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _h3 = _step3.value;
          e === i.length ? i.push(s = new _k(this.O(c()), this.O(c()), this, this.options)) : s = i[e], s._$AI(_h3), e++;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
  }, {
    key: "_$AR",
    value: function _$AR() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._$AA.nextSibling;
      var s = arguments.length > 1 ? arguments[1] : undefined;
      for ((_this$_$AP = this._$AP) === null || _this$_$AP === void 0 ? void 0 : _this$_$AP.call(this, false, true, s); t !== this._$AB;) {
        var _this$_$AP;
        var _s6 = i$1(t).nextSibling;
        i$1(t).remove(), t = _s6;
      }
    }
  }, {
    key: "setConnected",
    value: function setConnected(t) {
      var _this$_$AP2;
      void 0 === this._$AM && (this._$Cv = t, (_this$_$AP2 = this._$AP) === null || _this$_$AP2 === void 0 ? void 0 : _this$_$AP2.call(this, t));
    }
  }]);
}();
var H = /*#__PURE__*/function () {
  function H(t, i, s, e, h) {
    _classCallCheck(this, H);
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = A;
  }
  return _createClass(H, [{
    key: "tagName",
    get: function get() {
      return this.element.tagName;
    }
  }, {
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var e = arguments.length > 3 ? arguments[3] : undefined;
      var h = this.strings;
      var o = false;
      if (void 0 === h) t = M(this, t, i, 0), o = !a(t) || t !== this._$AH && t !== E, o && (this._$AH = t);else {
        var _e2 = t;
        var _n, _r2;
        for (t = h[0], _n = 0; _n < h.length - 1; _n++) _r2 = M(this, _e2[s + _n], i, _n), _r2 === E && (_r2 = this._$AH[_n]), o || (o = !a(_r2) || _r2 !== this._$AH[_n]), _r2 === A ? t = A : t !== A && (t += (_r2 !== null && _r2 !== void 0 ? _r2 : "") + h[_n + 1]), this._$AH[_n] = _r2;
      }
      o && !e && this.j(t);
    }
  }, {
    key: "j",
    value: function j(t) {
      t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t !== null && t !== void 0 ? t : "");
    }
  }]);
}();
var I = /*#__PURE__*/function (_H) {
  function I() {
    var _this;
    _classCallCheck(this, I);
    _this = _callSuper(this, I, arguments), _this.type = 3;
    return _this;
  }
  _inherits(I, _H);
  return _createClass(I, [{
    key: "j",
    value: function j(t) {
      this.element[this.name] = t === A ? void 0 : t;
    }
  }]);
}(H);
var L = /*#__PURE__*/function (_H2) {
  function L() {
    var _this2;
    _classCallCheck(this, L);
    _this2 = _callSuper(this, L, arguments), _this2.type = 4;
    return _this2;
  }
  _inherits(L, _H2);
  return _createClass(L, [{
    key: "j",
    value: function j(t) {
      this.element.toggleAttribute(this.name, !!t && t !== A);
    }
  }]);
}(H);
var z = /*#__PURE__*/function (_H3) {
  function z(t, i, s, e, h) {
    var _this3;
    _classCallCheck(this, z);
    _this3 = _callSuper(this, z, [t, i, s, e, h]), _this3.type = 5;
    return _this3;
  }
  _inherits(z, _H3);
  return _createClass(z, [{
    key: "_$AI",
    value: function _$AI(t) {
      var _M;
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      if ((t = (_M = M(this, t, i, 0)) !== null && _M !== void 0 ? _M : A) === E) return;
      var s = this._$AH,
        e = t === A && s !== A || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive,
        h = t !== A && (s === A || e);
      e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(t) {
      var _this$options$host, _this$options;
      "function" == typeof this._$AH ? this._$AH.call((_this$options$host = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.host) !== null && _this$options$host !== void 0 ? _this$options$host : this.element, t) : this._$AH.handleEvent(t);
    }
  }]);
}(H);
var Z = /*#__PURE__*/function () {
  function Z(t, i, s) {
    _classCallCheck(this, Z);
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  return _createClass(Z, [{
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      M(this, t);
    }
  }]);
}();
var B = t.litHtmlPolyfillSupport;
B !== null && B !== void 0 && B(S, k), ((_t$litHtmlVersions = t.litHtmlVersions) !== null && _t$litHtmlVersions !== void 0 ? _t$litHtmlVersions : t.litHtmlVersions = []).push("3.3.2");
var D = function D(t, i, s) {
  var _s$renderBefore;
  var e = (_s$renderBefore = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s$renderBefore !== void 0 ? _s$renderBefore : i;
  var h = e._$litPart$;
  if (void 0 === h) {
    var _s$renderBefore2;
    var _t7 = (_s$renderBefore2 = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s$renderBefore2 !== void 0 ? _s$renderBefore2 : null;
    e._$litPart$ = h = new k(i.insertBefore(c(), _t7), _t7, void 0, s !== null && s !== void 0 ? s : {});
  }
  return h._$AI(t), h;
};

var _s$litElementHydrateS, _s$litElementVersions;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s = globalThis;
var i = /*#__PURE__*/function (_t) {
  function i() {
    var _this;
    _classCallCheck(this, i);
    _this = _callSuper(this, i, arguments), _this.renderOptions = {
      host: _assertThisInitialized(_this)
    }, _this._$Do = void 0;
    return _this;
  }
  _inherits(i, _t);
  return _createClass(i, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var _this$renderOptions, _this$renderOptions$r;
      var t = _superPropGet(i, "createRenderRoot", this, 3)([]);
      return (_this$renderOptions$r = (_this$renderOptions = this.renderOptions).renderBefore) !== null && _this$renderOptions$r !== void 0 ? _this$renderOptions$r : _this$renderOptions.renderBefore = t.firstChild, t;
    }
  }, {
    key: "update",
    value: function update(t) {
      var r = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), _superPropGet(i, "update", this, 3)([t]), this._$Do = D(r, this.renderRoot, this.renderOptions);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this$_$Do;
      _superPropGet(i, "connectedCallback", this, 3)([]), (_this$_$Do = this._$Do) === null || _this$_$Do === void 0 ? void 0 : _this$_$Do.setConnected(true);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this$_$Do2;
      _superPropGet(i, "disconnectedCallback", this, 3)([]), (_this$_$Do2 = this._$Do) === null || _this$_$Do2 === void 0 ? void 0 : _this$_$Do2.setConnected(false);
    }
  }, {
    key: "render",
    value: function render() {
      return E;
    }
  }]);
}(y$1);
i._$litElement$ = true, i["finalized"] = true, (_s$litElementHydrateS = s.litElementHydrateSupport) === null || _s$litElementHydrateS === void 0 ? void 0 : _s$litElementHydrateS.call(s, {
  LitElement: i
});
var o = s.litElementPolyfillSupport;
o === null || o === void 0 || o({
  LitElement: i
});
((_s$litElementVersions = s.litElementVersions) !== null && _s$litElementVersions !== void 0 ? _s$litElementVersions : s.litElementVersions = []).push("4.2.2");

var _templateObject, _templateObject2;
console.log('[Widget]: script executing');
var GESTION_SINISTRE_TEAM_ID = 'db207f60-25ca-41e2-9b94-de1f612006a0';
var DECLARATION_SINISTRE_TEAM_ID = '5bc78dda-728b-43dc-9be9-7ebac552cef3';
var DIAL_NUMBER = '5555';
var TeamChangeWidget = /*#__PURE__*/function (_LitElement) {
  function TeamChangeWidget() {
    _classCallCheck(this, TeamChangeWidget);
    return _callSuper(this, TeamChangeWidget, arguments);
  }
  _inherits(TeamChangeWidget, _LitElement);
  return _createClass(TeamChangeWidget, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet(TeamChangeWidget, "connectedCallback", this, 3)([]);
      console.log('[Widget]: connectedCallback, token available:', !!this.bearerToken);
      this._initWebex();
    }
  }, {
    key: "_initWebex",
    value: function _initWebex() {
      var _this = this;
      if (!this.bearerToken) {
        console.error('[Widget]: No bearerToken available');
        return;
      }
      this._webex = Webex.init({
        credentials: {
          access_token: this.bearerToken
        },
        config: {
          plugin: {
            allowMultiLogin: true
          }
        }
      });
      this._webex.once('ready', function () {
        console.log('[Widget]: Webex ready, registering...');
        _this._register();
      });
    }
  }, {
    key: "_register",
    value: function _register() {
      var _this2 = this;
      this._webex.cc.register().then(function (agentProfile) {
        console.log('[Widget]: Registered:', agentProfile);
        return _this2._stationLogin();
      })["catch"](function (err) {
        return console.error('[Widget]: Register failed:', err);
      });
    }
  }, {
    key: "_stationLogin",
    value: function _stationLogin() {
      return this._webex.cc.stationLogin({
        teamId: GESTION_SINISTRE_TEAM_ID,
        loginOption: 'BROWSER',
        dialNumber: DIAL_NUMBER
      }).then(function (result) {
        return console.log('[Widget]: Station login OK:', result);
      })["catch"](function (err) {
        var _err$message;
        console.error('[Widget]: Station login failed:', err);
        if (err !== null && err !== void 0 && (_err$message = err.message) !== null && _err$message !== void 0 && _err$message.includes('AGENT_SESSION_ALREADY_EXISTS')) {
          console.log('[Widget]: Session already exists, continuing');
        }
      });
    }
  }, {
    key: "_updateProfile",
    value: function () {
      var _updateProfile2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var resp, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              console.log('[Widget]: Updating profile...');
              _context.p = 1;
              _context.n = 2;
              return this._webex.cc.updateAgentProfile({
                teamId: DECLARATION_SINISTRE_TEAM_ID,
                loginOption: 'BROWSER',
                dialNumber: DIAL_NUMBER
              });
            case 2:
              resp = _context.v;
              console.log('[Widget]: Profile updated:', resp);
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('[Widget]: Profile update failed:', _t);
            case 4:
              return _context.a(2);
          }
        }, _callee, this, [[1, 3]]);
      }));
      function _updateProfile() {
        return _updateProfile2.apply(this, arguments);
      }
      return _updateProfile;
    }()
  }, {
    key: "render",
    value: function render() {
      return b(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <button @click=", ">Switch to D\xE9claration Sinistre team</button>\n    "])), this._updateProfile);
    }
  }]);
}(i);
_defineProperty(TeamChangeWidget, "properties", {
  bearerToken: {
    type: String
  } // injected by WxCC Desktop via layout
});
_defineProperty(TeamChangeWidget, "styles", i$3(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    :host {\n      display: block;\n      font-family: sans-serif;\n      padding: 1rem;\n    }\n    button {\n      padding: 0.5rem 1rem;\n      cursor: pointer;\n    }\n  "]))));
if (!customElements.get('team-change-widget')) {
  customElements.define('team-change-widget', TeamChangeWidget);
}
//# sourceMappingURL=widget.js.map
