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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("./helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_config__ = __webpack_require__("./global-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer_scss__ = __webpack_require__("./components/Footer.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Footer_scss__);
var _jsxFileName = '/Users/humbl3man/workspace/nicolas_kitchen_next/components/Footer.js';





var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'footer',
    { className: 'site-footer', __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row justify-content-between', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-4 site-footer__col', __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'heading', __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
              __WEBPACK_IMPORTED_MODULE_2__global_config__["g" /* siteName */]
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            },
            __WEBPACK_IMPORTED_MODULE_2__global_config__["a" /* address */].street,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            }),
            ' ',
            __WEBPACK_IMPORTED_MODULE_2__global_config__["a" /* address */].city,
            ', ',
            __WEBPACK_IMPORTED_MODULE_2__global_config__["a" /* address */].state,
            ' ',
            __WEBPACK_IMPORTED_MODULE_2__global_config__["a" /* address */].zipCode
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe', {
              title: 'nicola kitchen google maps',
              src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.1947394787594!2d-118.59239268484637!3d34.16693841912481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29eb79ebfbf67%3A0xa2e5abf120db0788!2sNicola\'s+Kitchen!5e0!3m2!1sen!2sus!4v1521421486407',
              width: '100%',
              height: '100%',
              frameBorder: '0',
              style: {
                border: 0
              },
              allowFullScreen: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-4 site-footer__col site-footer__links', __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'heading', __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              'Hours'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'list-unstyled hours', __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                { className: 'mr-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                },
                'Mon'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  }
                },
                '11:00am - 9:00pm'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                { className: 'mr-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                },
                'Tue-Thu'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  }
                },
                '8:00am - 9:00pm'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                { className: 'mr-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                },
                'Fri'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                },
                '8:00am - 10:00pm'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                { className: 'mr-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                'Sat'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                },
                '8:00am - 10:00pm'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                { className: 'mr-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                },
                'Sun'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  }
                },
                '8:00am - 9:00pm'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-4 site-footer__col site-footer__social', __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'heading', __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              'Contact us'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'tel:' + __WEBPACK_IMPORTED_MODULE_2__global_config__["b" /* contact */].phone.raw, className: 'text-dark', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                }
              },
              __WEBPACK_IMPORTED_MODULE_2__global_config__["b" /* contact */].phone.display
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'mailto:' + __WEBPACK_IMPORTED_MODULE_2__global_config__["b" /* contact */].email, className: 'text-dark', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                }
              },
              __WEBPACK_IMPORTED_MODULE_2__global_config__["b" /* contact */].email
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'heading', __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                }
              },
              'We are Social'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'list-unstyled list-inline', __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            },
            __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].twitter && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 79
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].twitter, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/assets/social/twitter.svg', alt: 'twitter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].yelp && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].yelp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/assets/social/yelp.svg', alt: 'yelp', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].instagram && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].instagram, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/assets/social/instagram.svg', alt: 'instagram', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].facebook && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: __WEBPACK_IMPORTED_MODULE_2__global_config__["h" /* social */].facebook, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/assets/social/facebook.svg', alt: 'facebook', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                  }
                })
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-lg-12 site-footer__copyright text-center', __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { id: 'copyright-year', __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              }
            },
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

/***/ "./components/Footer.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers__ = __webpack_require__("./helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_config__ = __webpack_require__("./global-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Header_scss__ = __webpack_require__("./components/Header.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Header_scss__);
var _jsxFileName = '/Users/humbl3man/workspace/nicolas_kitchen_next/components/Header.js';

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
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'title',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            __WEBPACK_IMPORTED_MODULE_7__global_config__["g" /* siteName */] + ' | ' + Object(__WEBPACK_IMPORTED_MODULE_6__helpers__["a" /* capitalize */])(this.props.title)
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/nprogress.css', __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'header',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'top-nav', className: 'top-nav', __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'top-nav__wrapper container-fluid d-flex justify-content-between align-items-center', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'brand', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 86
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_7__global_config__["g" /* siteName */]
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'nav',
                { className: 'nav-links d-none d-md-inline-block d-lg-inline-block d-xl-inline-block', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                  { href: '/', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 90
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: this.props.title === 'home' ? 'active' : '', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 91
                      }
                    },
                    'Home'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                  { href: '/about', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 93
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: this.props.title === 'about' ? 'active' : '', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                      }
                    },
                    'About Us'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                  { href: '/menu', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: this.props.title === 'menu' ? 'active' : '', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                      }
                    },
                    'Menu'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                  { href: '/catering', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 99
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: this.props.title === 'catering' ? 'active' : '', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100
                      }
                    },
                    'Catering'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { id: 'nav-toggle', className: 'nav-toggle d-md-none', onClick: this.toggleMobileMenu, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-bars', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  }
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'nav',
            { id: 'mobile-nav', className: 'mobile-nav d-md-none' + (this.state.mobileMenuOpen ? ' is-shown' : ''), __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: '#', id: 'close-mobile-nav', className: 'close-mobile-nav', onClick: this.closeMobileMenu, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-close', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 112
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 114
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                  }
                },
                'Home'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
              { href: '/about', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 117
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                  }
                },
                'About Us'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
              { href: '/menu', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 120
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                  }
                },
                'Menu'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', {
          id: 'back-to-top',
          className: 'back-to-top fa fa-arrow-circle-o-up' + (this.state.showBackToTop ? ' is-visible' : ''),
          onClick: this.scrollToTop,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        })
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Header.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Header.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./global-config.js":
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

/***/ "./helpers.js":
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

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_global_scss__ = __webpack_require__("./styles/_global.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_global_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_global_scss__);
var _jsxFileName = '/Users/humbl3man/workspace/nicolas_kitchen_next/pages/about.js';






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'nc-site', __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header__["a" /* default */], { title: 'about', __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'section',
      {
        className: 'about-us',
        style: {
          marginTop: '3rem',
          marginBottom: '3rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'row', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-lg-6 mb-3', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-fluid', src: '/static/assets/owners_bw.jpg', alt: 'Kate and John (owners)', __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-lg-6', __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                }
              },
              'About Us'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              'Established in 1990, Nicola',
              "'",
              's Kitchen has been serving the San Fernando Valley for many years. In that time we have developed a style of Italian food with influences ranging from the California Coast to the shores of Thailand. We hope that you and your family have had the pleasure of experiencing our unique homemade food as well as our prompt and friendly service.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'text-right mt-3 text-muted lead', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'em',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  }
                },
                'Kate & John (owners)'
              )
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Footer__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    })
  );
});

/***/ }),

/***/ "./styles/_global.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map