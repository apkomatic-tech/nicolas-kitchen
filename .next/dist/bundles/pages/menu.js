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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./components/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/humbl3man/workspace/nicolas_kitchen_next/components/Menu.js';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




function priceFormatter(price) {
  return (typeof price === 'undefined' ? 'undefined' : _typeof(price)) === 'object' ? Object.entries(price).map(function (p, i) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { className: 'mr-2', key: i, __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'mr-1 small text-muted', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        p[0],
        ':'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        '$',
        p[1]
      )
    );
  }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { className: 'mr-2', __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    },
    '$',
    price
  );
}

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      displayMenu: _this.props.initialMenu,
      filter: 'eggs'
    }, _this.onFilterClick = function (e) {
      e.preventDefault();
      var filter = e.target.dataset.filter;

      _this.setState({
        filter: filter
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var filter = this.state.filter;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'menu', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'aside',
          { className: 'menu__filters', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#', 'data-filter': 'eggs', className: filter === 'eggs' ? 'selected' : '', onClick: this.onFilterClick, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            'Eggs'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            {
              href: '#',
              'data-filter': 'pasta scrambles',
              className: filter === 'pasta scrambles' ? 'selected' : '',
              onClick: this.onFilterClick,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            'Pasta Scrambles'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            {
              href: '#',
              'data-filter': 'other good things',
              className: filter === 'other good things' ? 'selected' : '',
              onClick: this.onFilterClick,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            },
            'Other Good Things'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'article',
          { className: 'menu__container', __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          },
          filter === 'eggs' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            { className: 'menu__section', __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'lead menu__heading', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  }
                },
                'Eggs'
              )
            ),
            this.state.displayMenu.eggs.map(function (m) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'menu__row', key: m.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'label', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'mb-0 lead', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                      }
                    },
                    m.title
                  ),
                  m.description && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'description', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                      }
                    },
                    m.description
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'price', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 69
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'mr-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                      }
                    },
                    priceFormatter(m.price)
                  )
                )
              );
            })
          ),
          filter === 'pasta scrambles' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            { className: 'menu__section', __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'lead menu__heading', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  }
                },
                'Pasta Scrambles'
              )
            ),
            this.state.displayMenu['pasta scrambles'].map(function (m) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'menu__row', key: m.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'label', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 83
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'mb-0 lead', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                      }
                    },
                    m.title
                  ),
                  m.description && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'description', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      }
                    },
                    m.description
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'price', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 87
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'mr-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88
                      }
                    },
                    priceFormatter(m.price)
                  )
                )
              );
            })
          ),
          filter === 'other good things' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            { className: 'menu__section', __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'lead menu__heading', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                  }
                },
                'Other Good Things'
              )
            ),
            this.state.displayMenu['other good things'].map(function (m) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'menu__row', key: m.id, 'data-key': m.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'label', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 101
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'mb-0 lead', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                      }
                    },
                    m.title
                  ),
                  m.description && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'description', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 103
                      }
                    },
                    m.description
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'price', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 105
                    }
                  },
                  priceFormatter(m.price)
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Menu.propTypes = {};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "./data/menu.json":
/***/ (function(module, exports) {

module.exports = {"menu":{"eggs":[{"id":1,"title":"The Two Timer","description":"2 eggs any style, 2 French toast or pancake and 2 pieces of bacon or sausage","price":10.95},{"id":2,"title":"Americana","description":"2 eggs any style, thick cut bacon, red roasted potatoes, and toast","price":12.95},{"id":3,"title":"Flat Iron Steak & Eggs","description":"Flat Iron steak prepared to your liking and served with 2 eggs any style and red roasted potatoes","price":18.95},{"id":4,"title":"Huevos Rancheros","description":"2 fried eggs topped with cheddar cheese, salsa verde, avocado, and sour cream, served on a crispy corn tortilla, with red roasted potatoes and black beans","price":12.95},{"id":5,"title":"Daily Frittata","description":"A slice of our daily baked frittata served with arugula in lemon vinaigrette","price":11.95}],"pasta scrambles":[{"id":1,"title":"Nicola's Original Pasta Scramble","description":"Spicy Italian sausage, scrambled eggs, and capellini pasta, tossed in a tomato cream sauce","price":12.95},{"id":2,"title":"Rosemary Chicken Pasta Scramble","description":"Chicken, scrambled eggs, broccoli, roasted red bell peppers, and capellini pasta tossed in a light rosemary cream sauce","price":12.95},{"id":3,"title":"Grilled Vegetable Pasta Scramble","description":"Scrambled eggs, julienne carrots, bell peppers, zucchini, yellow squash, eggplant, parmesan, and capellini pasta, tossed in olive oil & garlic","price":12.95}],"other good things":[{"id":1,"title":"Nicola's Famous Cinnamon Focaccia","description":"Pizza dough topped with cinnamon sugar and butter, baked to perfection, then drizzled with sugar glaze","price":{"half":6.95,"full":9.95}},{"id":2,"title":"Nicola's Homemade Granola","description":"Rolled oats, sliced almonds, pecans, cashews, coconut, dried cranberries, and honey, served with 2% milk and brown sugar","price":{"bowl":7.95}},{"id":3,"title":"Good Ol' Oatmeal","description":"Oatmeal served with brown sugar and sliced almonds","price":{"bowl":7.95}},{"id":4,"title":"Creme Brûlée Oatmeal","description":"Steel cut oatmeal topped with homemade Creme Brûlée","price":{"bowl":9.95}},{"id":5,"title":"Nic's Breakwich","description":"Fried egg, cheddar cheese, and applewood smoked bacon, on focaccia","price":9.95}]}}

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

/***/ "./pages/menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Menu__ = __webpack_require__("./components/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_scss__ = __webpack_require__("./pages/menu.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__menu_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_menu_json__ = __webpack_require__("./data/menu.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_menu_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__data_menu_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_config__ = __webpack_require__("./global-config.js");
var _jsxFileName = '/Users/humbl3man/workspace/nicolas_kitchen_next/pages/menu.js';








/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'nc-site', __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header__["a" /* default */], { title: 'menu', __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        { className: 'text-center', style: { margin: '3rem 0' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_6__global_config__["g" /* siteName */],
        ' Menu'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Menu__["a" /* default */], { initialMenu: __WEBPACK_IMPORTED_MODULE_5__data_menu_json__["menu"], __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Footer__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    })
  );
});

/***/ }),

/***/ "./pages/menu.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/menu.js");


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
//# sourceMappingURL=menu.js.map