function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tutorial-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTutorialTutorialHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color='primary' (click)=\"startApp()\" [hidden]=\"!showSkip\">Skip</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-slides #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\" pager=\"false\">\n    <ion-slide>\n      <img src=\"assets/img/slides/logo-large.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">\n        Welcome to\n        <b>Integritometer</b>\n      </h2>\n      <p>\n        Integritometer is the app that keeps your word alive.\n        Do you find it challenging to keep track of all your important promises,\n        commitments, and things to do, scattered in multiple places?\n        Maybe you are a loving friend, family member, colleague or coach.\n        What about all the things other people who matter to you said they would do?\n        Dive in and have a look!\n      </p>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/img/slides/ws1.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">\n        Make a Promise and Keep it\n      </h2>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit malesuada est nibh, non congue nisi sagittis at.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/slides/ws2.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">\n        Describe the Promise and set a deadline\n      </h2>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit malesuada est nibh, non congue nisi sagittis at.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/slides/ws3.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">\n        Draft promises for later\n      </h2>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit malesuada est nibh, non congue nisi sagittis at.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/slides/ws4.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">\n        Search for Contacts to share with\n      </h2>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit malesuada est nibh, non congue nisi sagittis at.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/slides/ws5.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">\n        Schedule actions\n      </h2>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit malesuada est nibh, non congue nisi sagittis at.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/slides/ws6.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">\n        Swipe left to reveal actions\n      </h2>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit malesuada est nibh, non congue nisi sagittis at.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/slides/ws7.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">\n        Chat to keep in touch\n      </h2>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit malesuada est nibh, non congue nisi sagittis at.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/img/slides/ica-slidebox-img-4.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">Ready to Play?</h2>\n      <ion-button fill=\"clear\" (click)=\"startApp()\">\n        Continue\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/tutorial/tutorial-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/tutorial/tutorial-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: TutorialPageRoutingModule */

  /***/
  function srcAppPagesTutorialTutorialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPageRoutingModule", function () {
      return TutorialPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tutorial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tutorial */
    "./src/app/pages/tutorial/tutorial.ts");

    var routes = [{
      path: '',
      component: _tutorial__WEBPACK_IMPORTED_MODULE_3__["TutorialPage"]
    }];

    var TutorialPageRoutingModule = function TutorialPageRoutingModule() {
      _classCallCheck(this, TutorialPageRoutingModule);
    };

    TutorialPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TutorialPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tutorial/tutorial.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
    \***************************************************/

  /*! exports provided: TutorialModule */

  /***/
  function srcAppPagesTutorialTutorialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialModule", function () {
      return TutorialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tutorial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tutorial */
    "./src/app/pages/tutorial/tutorial.ts");
    /* harmony import */


    var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tutorial-routing.module */
    "./src/app/pages/tutorial/tutorial-routing.module.ts");

    var TutorialModule = function TutorialModule() {
      _classCallCheck(this, TutorialModule);
    };

    TutorialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_5__["TutorialPageRoutingModule"]],
      declarations: [_tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"]],
      entryComponents: [_tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"]]
    })], TutorialModule);
    /***/
  },

  /***/
  "./src/app/pages/tutorial/tutorial.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/tutorial/tutorial.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTutorialTutorialScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: transparent;\n  --border-color: transparent;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.slide-title {\n  margin-top: 2.8rem;\n}\n\n.slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2xlb25nL2Rldi90ZXN0L2lvbmljLWRhbm55LW5ldy9zcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUNDRjs7QURDRTtFQUNFLHFDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90dXRvcmlhbC90dXRvcmlhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNsaWRlLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogNjAlO1xuICBtYXJnaW46IDM2cHggMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xuXG4gIGIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG4gIH1cbn1cbiIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAzNnB4IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcbn1cbnAgYiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/tutorial/tutorial.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/tutorial/tutorial.ts ***!
    \********************************************/

  /*! exports provided: TutorialPage */

  /***/
  function srcAppPagesTutorialTutorialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPage", function () {
      return TutorialPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var TutorialPage =
    /*#__PURE__*/
    function () {
      function TutorialPage(menu, router, storage) {
        _classCallCheck(this, TutorialPage);

        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.showSkip = true;
      }

      _createClass(TutorialPage, [{
        key: "startApp",
        value: function startApp() {
          var _this = this;

          this.router.navigateByUrl('/app/tabs/schedule', {
            replaceUrl: true
          }).then(function () {
            return _this.storage.set('ion_did_tutorial', true);
          });
        }
      }, {
        key: "onSlideChangeStart",
        value: function onSlideChangeStart(event) {
          var _this2 = this;

          event.target.isEnd().then(function (isEnd) {
            _this2.showSkip = !isEnd;
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this3 = this;

          this.storage.get('ion_did_tutorial').then(function (res) {
            if (res === true) {
              _this3.router.navigateByUrl('/app/tabs/schedule', {
                replaceUrl: true
              });
            }
          });
          this.menu.enable(false);
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          // enable the root left menu when leaving the tutorial page
          this.menu.enable(true);
        }
      }]);

      return TutorialPage;
    }();

    TutorialPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])], TutorialPage.prototype, "slides", void 0);
    TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-tutorial',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorial.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorial.scss */
      "./src/app/pages/tutorial/tutorial.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])], TutorialPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tutorial-tutorial-module-es5.js.map