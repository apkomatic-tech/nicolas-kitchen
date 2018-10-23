module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return siteName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return contact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return social; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reserve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return headline1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return headline2; });
var siteName = "Nicola's Kitchen";
var headline1 = 'Come join us for breakfast, brunch, lunch or dinner!';
var headline2 = 'Pasta | Seafood | Beer & Wine!';
var address = {
  street: '20969 Ventura Blvd.',
  city: 'Woodland Hills',
  state: 'CA',
  zipCode: 91364
};
var meta = {
  description: "Nicola's Kitchen is a family owned restaurant, serving the San Fernando Valley since 1990.",
  keywords: 'Italian, restaurant, chicken, Woodland Hills, wine, beer, to go, delivery, catering, reservations, private parties, dog friendly breakfast patio'
};
var contact = {
  phone: {
    raw: '+18188839477',
    display: '818.883.9477'
  },
  email: 'nicolaswoodlandhills@gmail.com'
};

var reserve = {
  reserveHeroLink: 'https://www.yelp.com/reservations/nicolas-kitchen-woodland-hills?from_reserve_now=1'
};

var social = {
  twitter: 'https://twitter.com/_nicolaskitchen',
  yelp: 'https://www.yelp.com/biz/nicolas-kitchen-woodland-hills',
  instagram: 'https://instagram.com/nicolaskitchen/',
  facebook: 'https://www.facebook.com/nicolaskitchen'
};



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentYear; });
/* unused harmony export randomize */
var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.split('').splice(1, str.length).join('');
};

var getCurrentYear = function getCurrentYear() {
  var d = new Date();
  return d.getFullYear();
};

var randomize = function randomize() {
  var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100000;
  return '' + Math.floor(Math.random() * max) + Math.floor(Math.random() * max);
};



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nprogress__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Header_scss__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Header_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












__WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeStart = function () {
  return __WEBPACK_IMPORTED_MODULE_5_nprogress___default.a.start();
};
__WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeComplete = function () {
  return __WEBPACK_IMPORTED_MODULE_5_nprogress___default.a.done();
};
__WEBPACK_IMPORTED_MODULE_4_next_router___default.a.onRouteChangeError = function () {
  return __WEBPACK_IMPORTED_MODULE_5_nprogress___default.a.done();
};

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mobileMenuOpen: false,
      showBackToTop: false
    }, _this.initBackToTop = function () {
      var vm = _this;

      window.addEventListener('scroll', function scrollhandler() {
        var offsetY = this.pageYOffset || document.documentElement.scrollTop || null;
        if (offsetY > 300) {
          vm.setState({
            showBackToTop: true
          });
        }

        if (offsetY <= 300) {
          vm.setState({
            showBackToTop: false
          });
        }
      });
    }, _this.scrollToTop = function (e) {
      e.preventDefault();

      (function smoothScroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothScroll);
          window.scrollTo(0, currentScroll - currentScroll / 5);
        }
      })();
    }, _this.toggleMobileMenu = function () {
      _this.setState({
        mobileMenuOpen: !_this.state.mobileMenuOpen
      });
    }, _this.closeMobileMenu = function (e) {
      e.preventDefault();

      _this.setState({
        mobileMenuOpen: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initBackToTop();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'title',
            null,
            __WEBPACK_IMPORTED_MODULE_7__global_config__["g" /* siteName */] + ' | ' + Object(__WEBPACK_IMPORTED_MODULE_6__helpers__["a" /* capitalize */])(this.props.title)
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/nprogress.css' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'header',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'top-nav', className: 'top-nav' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'top-nav__wrapper container-fluid d-flex justify-content-between align-items-center' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                { href: '/' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'brand' },
                  __WEBPACK_IMPORTED_MODULE_7__global_config__["g" /* siteName */]
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'nav',
                { className: 'nav-links d-none d-md-inline-block d-lg-inline-block d-xl-inline-block' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                  { href: '/' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: this.props.title === 'home' ? 'active' : '' },
                    'Home'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                  { href: '/about' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: this.props.title === 'about' ? 'active' : '' },
                    'About Us'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                  { href: '/menu' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: this.props.title === 'menu' ? 'active' : '' },
                    'Menu'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                  { href: '/catering' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: this.props.title === 'catering' ? 'active' : '' },
                    'Catering'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { id: 'nav-toggle', className: 'nav-toggle d-md-none', onClick: this.toggleMobileMenu },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-bars' })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'nav',
            { id: 'mobile-nav', className: 'mobile-nav d-md-none' + (this.state.mobileMenuOpen ? ' is-shown' : '') },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: '#', id: 'close-mobile-nav', className: 'close-mobile-nav', onClick: this.closeMobileMenu },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-close' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
              { href: '/' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                null,
                'Home'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
              { href: '/about' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                null,
                'About Us'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
              { href: '/menu' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                null,
                'Menu'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', {
          id: 'back-to-top',
          className: 'back-to-top fa fa-arrow-circle-o-up' + (this.state.showBackToTop ? ' is-visible' : ''),
          onClick: this.scrollToTop
        })
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 9 */
/***/ (function(module, exports) {



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer_scss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Footer_scss__);





var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'footer',
    { className: 'site-footer' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row justify-content-between' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-4 site-footer__col' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'heading' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              __WEBPACK_IMPORTED_MODULE_2__global_config__["g" /* siteName */]
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_2__global_config__["a" /* address */].street,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
            ' ',
            __WEBPACK_IMPORTED_MODULE_2__global_config__["a" /* address */].city,
            ', ',
            __WEBPACK_IMPORTED_MODULE_2__global_config__["a" /* address */].state,
            ' ',
            __WEBPACK_IMPORTED_MODULE_2__global_config__["a" /* address */].zipCode
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe', {
              title: 'nicola kitchen google maps',
              src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.1947394787594!2d-118.59239268484637!3d34.16693841912481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29eb79ebfbf67%3A0xa2e5abf120db0788!2sNicola\'s+Kitchen!5e0!3m2!1sen!2sus!4v1521421486407',
              width: '100%',
              height: '100%',
              frameBorder: '0',
              style: {
                border: 0
              },
              allowFullScreen: true
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-4 site-footer__col site-footer__links' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'heading' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Hours'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'list-unstyled hours' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                { className: 'mr-1' },
                'Mon'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                '11:00am - 9:00pm'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                { className: 'mr-1' },
                'Tue-Thu'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                '8:00am - 9:00pm'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                { className: 'mr-1' },
                'Fri'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                '8:00am - 10:00pm'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                { className: 'mr-1' },
                'Sat'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                '8:00am - 10:00pm'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                { className: 'mr-1' },
                'Sun'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                '8:00am - 9:00pm'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-4 site-footer__col site-footer__social' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'heading' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'Contact us'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'tel:' + __WEBPACK_IMPORTED_MODULE_2__global_config__["b" /* contact */].phone.raw, className: 'text-dark' },
              __WEBPACK_IMPORTED_MODULE_2__global_config__["b" /* contact */].phone.display
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'mailto:' + __WEBPACK_IMPORTED_MODULE_2__global_config__["b" /* contact */].email, className: 'text-dark' },
              __WEBPACK_IMPORTED_MODULE_2__global_config__["b" /* contact */].email
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'heading' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              'We are Social'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'list-unstyled list-inline' },
            __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].twitter && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].twitter },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/assets/social/twitter.svg', alt: 'twitter' })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].yelp && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].yelp },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/assets/social/yelp.svg', alt: 'yelp' })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].instagram && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].instagram },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/assets/social/instagram.svg', alt: 'instagram' })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].facebook && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].facebook },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/assets/social/facebook.svg', alt: 'facebook' })
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-lg-12 site-footer__copyright text-center' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { id: 'copyright-year' },
            Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* getCurrentYear */])()
          ),
          ' \xA9 ',
          __WEBPACK_IMPORTED_MODULE_2__global_config__["g" /* siteName */],
          ', All Rights Reserved'
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 11 */
/***/ (function(module, exports) {



/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Footer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_slick__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_slick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_scss__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__index_scss__);







var ReserveSlider = function ReserveSlider() {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    edgeFriction: 0.1,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 460,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'reserve-options' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h3',
        { className: 'text-center mb-3' },
        'Order anywhere. Find us on:'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          className: 'reserve-options-slider',
          style: {
            maxWidth: '45rem',
            margin: 'auto'
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_slick___default.a,
          settings,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            {
              className: 'd-flex',
              href: 'https://www.ubereats.com/los-angeles/food-delivery/nicolas-kitchen/oCnqZRuoT66XNn0gzLVr1g/'
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-fluid', src: '/static/assets/order/ubereats.png', alt: 'ubereats' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'd-flex', href: 'https://woodland-hills.eat24hours.com/nicola-s-kitchen/39607' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-fluid', src: '/static/assets/order/eat24.png', alt: 'eat24' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            {
              className: 'd-flex',
              href: 'https://www.grubhub.com/restaurant/nicolas-kitchen-20969-ventura-blvd-woodland-hills/272259'
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-fluid', src: '/static/assets/order/grubhub.png', alt: 'grubhub' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'd-flex', href: 'https://ordering.chownow.com/order/3815/locations' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-fluid', src: '/static/assets/order/chownow.png', alt: 'chownow' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'd-flex', href: 'https://foursquare.com/v/nicolas-kitchen/4b43b2fef964a520d0e625e3' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
              className: 'img-fluid',
              src: '/static/assets/order/foursquare.png',
              alt: 'foursquare',
              style: { height: '71px' }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'd-flex', href: 'https://postmates.com/merchant/nicolas-kitchen-woodland-hills' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-fluid', src: '/static/assets/order/postmates.png', alt: 'postmates' })
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'nc-site' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header__["a" /* default */], { title: 'home' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'nc-hero jumbotron' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container animated fade-in-up' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'heading' },
          __WEBPACK_IMPORTED_MODULE_4__global_config__["g" /* siteName */]
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'lead my-0' },
          __WEBPACK_IMPORTED_MODULE_4__global_config__["c" /* headline1 */]
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'cta-container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: __WEBPACK_IMPORTED_MODULE_4__global_config__["f" /* reserve */].reserveHeroLink, className: 'cta text-white' },
            'Reserve a table',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-yelp' })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'lead' },
          __WEBPACK_IMPORTED_MODULE_4__global_config__["d" /* headline2 */]
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ReserveSlider, null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Footer__["a" /* default */], null)
  );
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 23 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);