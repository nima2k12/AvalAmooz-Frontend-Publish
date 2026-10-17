"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_throttle_throttle_module_ts"],{

/***/ 18478:
/*!***************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/throttle/throttle-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThrottleRoutingModule": () => (/* binding */ ThrottleRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _throttle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./throttle.component */ 3049);




const routes = [{ path: '', component: _throttle_component__WEBPACK_IMPORTED_MODULE_0__.ThrottleComponent }];
let ThrottleRoutingModule = class ThrottleRoutingModule {
};
ThrottleRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ThrottleRoutingModule);



/***/ }),

/***/ 3049:
/*!**********************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/throttle/throttle.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThrottleComponent": () => (/* binding */ ThrottleComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _throttle_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throttle.component.html?ngResource */ 38126);
/* harmony import */ var _throttle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle.component.scss?ngResource */ 23846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/common/G */ 67122);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/service/site/Slider.service */ 79519);




/* eslint-disable eqeqeq */













let ThrottleComponent = class ThrottleComponent {
  constructor(fb, router, alertController, sanitizer, loadingController, toastController, siteService, courseService) {
    this.fb = fb;
    this.router = router;
    this.alertController = alertController;
    this.sanitizer = sanitizer;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.siteService = siteService;
    this.courseService = courseService;
    this.isShow = false;
    this.isCheck = true;
    this.queryText = '';
    this.showSearchbar = false;
    this.instagram = '';
    this.twiter = '';
    this.facebook = '';
    this.telegram = '';
    this.pinterest = '';
    this.aparat = '';
    this.discord = '';
    this.youtube = '';
    this.twitch = '';
    this.linkedin = '';
    this.tunerPlusVideo = 'AXhdq';
    this.hp = 298;
    this.isShow = false;

    if (!_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
      this.router.navigateByUrl('/Account');
    }

    this.check();
  }

  ngOnInit() {
    this.instagram = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Instagram;
    this.twiter = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Twiter;
    this.facebook = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Facebook;
    this.telegram = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Telegram;
    this.youtube = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Youtube;
    this.pinterest = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Pinterest;
    this.linkedin = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Linkedin;
    this.twitch = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Twitch;
    this.aparat = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Aparat;
    this.discord = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Discord;
    this.tunerPlusVideo = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.TunerPlusThrottleVideo;
    this.form = this.fb.group({
      n: [4, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      s: [36, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000000)]]
    });
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(_this.loadingController);

      _this.siteService.GetTunerPlusById(5).subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
          if (res.data.isActive) {
            if (!res.data.isFree) {
              _this.courseService.GetUserCoursesId().subscribe(ress => {
                if (ress.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
                  let found = false;
                  res.data.courseIds.forEach(courseId => {
                    if (ress.data.find(n => n == courseId)) {
                      found = true;

                      _this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
                        if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                          _this.isCheck = false;
                        } else {
                          _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                        }
                      }, errs => {
                        _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                      });
                    }
                  });

                  if (!found) {
                    _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                  }
                } else {
                  _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                }
              }, errs => {
                _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
              });
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
              _this.isCheck = false;
            }
          } else {
            _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
          }
        } else {
          _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
        }
      }, err => {
        _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
      });
    })();
  }

  goTop() {
    this.content.scrollToTop(3000);
  }

  forwardUrl(url) {
    window.location.href = url;
  }

  onNavigate(url) {
    this.router.navigateByUrl(url);
  }

  onCancel() {
    this.showSearchbar = false;
  }

  search() {
    if (this.queryText == null || this.queryText.length < 1) {
      return;
    }

    this.router.navigate(['Home', 'Search'], {
      queryParams: {
        title: this.queryText
      }
    });
  }

  onCalc() {
    if (!this.form.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
        this.hp = Math.round(this.form.value.n / 2 * this.form.value.s * this.form.value.s * 0.115);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onReset() {
    this.hp = 298;
    this.form.setValue({
      n: 4,
      s: 36
    });
  }

  onInfo(type) {
    switch (type) {
      case 'n':
        this.presentActiveAlertConfirm('تعداد دریچه گاز در خودرو های کاربراتی و یا تعداد پورت هوا در خودرو های انژکتوری');
        break;

      case 's':
        this.presentActiveAlertConfirm('قطر دریچه گاز بر حسب میلیمتر');
        break;

      default:
        break;
    }
  }

  presentActiveAlertConfirm(msg = '') {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert',
        header: 'توضیحات',
        message: msg,
        buttons: [{
          text: 'بستن',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  checkURL() {
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + this.tunerPlusVideo + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoUrl() {
    const url = 'https://www.aparat.com/v/' + this.tunerPlusVideo;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

};

ThrottleComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_9__.SliderService
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService
}];

ThrottleComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent]
  }]
};
ThrottleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-throttle',
  template: _throttle_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_throttle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ThrottleComponent);


/***/ }),

/***/ 35174:
/*!*******************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/throttle/throttle.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThrottleModule": () => (/* binding */ ThrottleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _throttle_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throttle-routing.module */ 18478);
/* harmony import */ var _throttle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle.component */ 3049);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let ThrottleModule = class ThrottleModule {
};
ThrottleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_throttle_component__WEBPACK_IMPORTED_MODULE_2__.ThrottleComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _throttle_routing_module__WEBPACK_IMPORTED_MODULE_1__.ThrottleRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ]
    })
], ThrottleModule);



/***/ }),

/***/ 23846:
/*!***********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/throttle/throttle.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".h_iframe-aparat_embed_frame {\n  position: relative;\n}\n\n.h_iframe-aparat_embed_frame .ratio {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  border-radius: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.video-span {\n  display: block;\n  padding-top: 57%;\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRocm90dGxlLmNvbXBvbmVudC5zY3NzIiwiLi5cXF90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQURGOztBQ2hCRTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FEbUJKOztBQ2hCSTs7O0VBR0Usd0JBQUE7RUFDQSxtQ0FBQTtBRGtCTjs7QUNmSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBRGlCTjs7QUNkSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtBRGdCTjs7QUNkSTtFQUFjLCtCQUFBO0VBQWlDLDBCQUFBO0FEa0JuRDs7QUNqQkk7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QURtQk47O0FDakJJO0VBQVcsZ0NBQUE7QURvQmY7O0FDbkJJO0VBQW9DLHdCQUFBO0FEc0J4Qzs7QUNyQkk7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtBRHVCTjs7QUNyQkk7RUFBa0QsbUNBQUE7QUR3QnREIiwiZmlsZSI6InRocm90dGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdGhlbWUnO1xyXG5cclxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaF9pZnJhbWUtYXBhcmF0X2VtYmVkX2ZyYW1lIC5yYXRpbyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaF9pZnJhbWUtYXBhcmF0X2VtYmVkX2ZyYW1lIGlmcmFtZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udmlkZW8tc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6IDU3JTtcclxufVxyXG5cclxuQGluY2x1ZGUgdHVuZXItZGFyay10aGVtZTtcclxuIiwiLy8gS2VlcCB0aGUgb3JpZ2luYWwgbGlnaHQgY29sb3IgYXQgZWFjaCBjYWxsIHNpdGUuIFRva2VucyBleGlzdCBvbmx5IGluIGRhcmsgbW9kZS5cbkBmdW5jdGlvbiB0dW5lci1jb2xvcigkcm9sZSwgJGxpZ2h0KSB7XG4gIEByZXR1cm4gdmFyKC0tdHVuZXItI3skcm9sZX0sICN7JGxpZ2h0fSk7XG59XG5cbkBtaXhpbiB0dW5lci1kYXJrLXRoZW1lIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgLS10dW5lci1wYWdlOiAjMTExNTFlO1xuICAgIC0tdHVuZXItc3VyZmFjZTogIzFjMjIzMDtcbiAgICAtLXR1bmVyLXNvZnQ6ICMyNTJlM2Q7XG4gICAgLS10dW5lci1ib3JkZXI6ICM0NjUyNjk7XG4gICAgLS10dW5lci10ZXh0OiAjZWRmMWY4O1xuICAgIC0tdHVuZXItbXV0ZWQ6ICNiMmJmZDE7XG4gICAgLS10dW5lci1oZWFkZXI6IHJnYmEoMjgsIDM0LCA0OCwgMC45NCk7XG4gICAgLS10dW5lci1vdmVybGF5OiByZ2JhKDI4LCAzNCwgNDgsIDAuOTUpO1xuICAgIC0tdHVuZXItcHVycGxlLXRleHQ6ICNjNGI1ZmQ7XG4gICAgLS10dW5lci1wdXJwbGUtc29mdDogIzMwMjQ0NDtcbiAgICAtLXR1bmVyLXB1cnBsZS1ib3JkZXI6ICM3MjU3OWI7XG4gICAgLS10dW5lci1pbmZvLXRleHQ6ICM5M2M1ZmQ7XG4gICAgLS10dW5lci1pbmZvLXNvZnQ6ICMxZDMwNGM7XG4gICAgLS10dW5lci1pbmZvLWJvcmRlcjogIzQ2NmI5YTtcbiAgICAtLXR1bmVyLXdhcm5pbmctdGV4dDogI2ZjZDQ3NztcbiAgICAtLXR1bmVyLXdhcm5pbmctc29mdDogIzNiMzAyMDtcbiAgICAtLXR1bmVyLXdhcm5pbmctYm9yZGVyOiAjOTM3NDNkO1xuICAgIC0tdHVuZXItc3VjY2Vzcy10ZXh0OiAjODZlZmFjO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1zb2Z0OiAjMTkzOTJlO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1ib3JkZXI6ICM0MTdkNjA7XG4gICAgLS10dW5lci1kYW5nZXItdGV4dDogI2ZkYTRhZjtcbiAgICAtLXR1bmVyLWRhbmdlci1zb2Z0OiAjNDAyNjMxO1xuICAgIC0tdHVuZXItZGFuZ2VyLWJvcmRlcjogIzk4NTM2NztcbiAgICAtLXR1bmVyLXRlYWwtdGV4dDogIzdkZTRkNDtcbiAgICAtLXR1bmVyLXRlYWwtc29mdDogIzE5M2EzYTtcbiAgICAtLXR1bmVyLXRlYWwtYm9yZGVyOiAjNDM3ZjdjO1xuXG4gICAgLy8gTmF0aXZlIGNvbnRyb2xzIHdpdGhvdXQgYW4gZXhwbGljaXQgbGlnaHQgYmFja2dyb3VuZCBuZWVkIGEgZGFyayBzdXJmYWNlIHRvby5cbiAgICBpbnB1dDpub3QoW3R5cGU9J3JhbmdlJ10pOm5vdChbdHlwZT0nY2hlY2tib3gnXSk6bm90KFt0eXBlPSdyYWRpbyddKTpub3QoW3R5cGU9J2J1dHRvbiddKTpub3QoW3R5cGU9J3N1Ym1pdCddKTpub3QoW3R5cGU9J2ZpbGUnXSksXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci1tdXRlZCk7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cblxuICAgIGlvbi1oZWFkZXIubGVhcm5pbmctaGVhZGVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItcGFnZSk7IC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmQ6bm90KFtjb2xvcl0pLCBpb24tbGlzdCwgaW9uLWl0ZW06bm90KFtjb2xvcl0pLCBpb24taXRlbS1kaXZpZGVyOm5vdChbY29sb3JdKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWxpc3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTsgfVxuICAgIGlvbi1jYXJkLXRpdGxlLCBpb24tY2FyZC1zdWJ0aXRsZSB7IGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkW2NvbG9yPSdsaWdodGVzdCddLCBpb24taXRlbVtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWZhYi1idXR0b25bY29sb3I9J2xpZ2h0ZXN0J10ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2RhcmsnXSwgaW9uLWxhYmVsW2NvbG9yPSdkYXJrJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 38126:
/*!***********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/throttle/throttle.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          color=\"lightest\"\r\n          defaultHref=\"/TunerPlus\"\r\n        ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\">محاسبه دریچه گاز</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n        <ion-button (click)=\"showSearchbar = true\">\r\n          <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\n<ion-searchbar\r\n        dir=\"rtl\"\r\n        *ngIf=\"showSearchbar\"\r\n        showCancelButton=\"always\"\r\n        [(ngModel)]=\"queryText\"\r\n        placeholder=\"جستجوی آموزشگاه\"\r\n        (ionCancel)=\"onCancel()\"\r\n        (keyup.enter)=\"search()\"\r\n      ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n  <ion-content>\r\n    <Section *ngIf=\"!isCheck\">\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col\r\n            dir=\"rtl\"\r\n            size=\"12\"\r\n            offset=\"0\"\r\n            size-md=\"10\"\r\n            offset-md=\"1\"\r\n            size-lg=\"8\"\r\n            offset-lg=\"2\"\r\n          >\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n              <ion-card>\r\n                <ion-card-header color=\"primary\">\r\n                  <ion-card-subtitle class=\"text-center\">این محاسبات برای موتور های تنفس طبیعی میباشد</ion-card-subtitle>\r\n                  <ion-card-title class=\"text-center\"\r\n                    >توان بر اساس تعداد و قطر دریچه گاز</ion-card-title\r\n                  >\r\n                </ion-card-header>\r\n                <ion-list>\r\n                  <ion-item class=\"ion-margin\">\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"apps-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label position=\"floating\" color=\"light\"\r\n                      >تعداد دریچه</ion-label\r\n                    >\r\n                    <ion-input\r\n                      placeholder=\"4\"\r\n                      formControlName=\"n\"\r\n                      type=\"number\"\r\n                    >\r\n                    </ion-input>\r\n                    <ion-button\r\n                      size=\"large\"\r\n                      fill=\"clear\"\r\n                      shape=\"round\"\r\n                      color=\"twitter\"\r\n                      slot=\"end\"\r\n                      (click)=\"onInfo('n')\"\r\n                    >\r\n                      <ion-icon\r\n                        size=\"large\"\r\n                        slot=\"icon-only\"\r\n                        name=\"information-circle-outline\"\r\n                      ></ion-icon>\r\n                    </ion-button>\r\n                  </ion-item>\r\n\r\n                  <ion-item class=\"ion-margin\">\r\n                    <ion-icon\r\n                      color=\"twitter\"\r\n                      slot=\"start\"\r\n                      name=\"filter-circle-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label position=\"floating\" color=\"light\"\r\n                      >قطر دریچه (mm)</ion-label\r\n                    >\r\n                    <ion-input\r\n                      placeholder=\"36\"\r\n                      formControlName=\"s\"\r\n                      type=\"number\"\r\n                    >\r\n                    </ion-input>\r\n                    <ion-button\r\n                      size=\"large\"\r\n                      fill=\"clear\"\r\n                      shape=\"round\"\r\n                      color=\"twitter\"\r\n                      slot=\"end\"\r\n                      (click)=\"onInfo('s')\"\r\n                    >\r\n                      <ion-icon\r\n                        size=\"large\"\r\n                        slot=\"icon-only\"\r\n                        name=\"information-circle-outline\"\r\n                      ></ion-icon>\r\n                    </ion-button>\r\n                  </ion-item>\r\n                </ion-list>\r\n\r\n                <ion-button\r\n                  class=\"ion-margin\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"form.invalid\"\r\n                >\r\n                  محاسبه\r\n                </ion-button>\r\n\r\n                <ion-button\r\n                  class=\"ion-margin\"\r\n                  expand=\"block\"\r\n                  fill=\"clear\"\r\n                  shape=\"round\"\r\n                  color=\"warning\"\r\n                  (click)=\"onReset()\"\r\n                >\r\n                  ریست\r\n                </ion-button>\r\n              </ion-card>\r\n            </form>\r\n\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-subtitle class=\"text-center\"\r\n                  >حداکثر توان</ion-card-subtitle\r\n                >\r\n                <ion-card-title class=\"text-center\">HP</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-item>\r\n                <ion-label class=\"text-center\">\r\n                  <h2 dir=\"ltr\">\r\n                    <ion-text color=\"success\" style=\"font-size: large\">\r\n                      {{ hp }}\r\n                    </ion-text>\r\n                    &nbsp;اسب بخار\r\n                  </h2>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n              <ion-item>\r\n                <ion-label\r\n                  >ویدیو آموزش استفاده از توان بر اساس دریچه گاز تیونر پلاس</ion-label\r\n                >\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"arrow-down-circle-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <div class=\"h_iframe-aparat_embed_frame\">\r\n                <span class=\"video-span\"></span\r\n                ><iframe\r\n                  [src]=\"checkURL()\"\r\n                  title=\"ویدیو آموزش استفاده از توان بر اساس دریچه گاز تیونر پلاس ویژه اول آموز\"\r\n                  allowfullscreen=\"true\"\r\n                  webkitallowfullscreen=\"true\"\r\n                  mozallowfullscreen=\"true\"\r\n                ></iframe>\r\n              </div>\r\n\r\n              <ion-item>\r\n                <ion-label>{{\r\n                  \"ویدیو آموزش استفاده از توان بر اساس دریچه گاز تیونر پلاس\"\r\n                }}</ion-label>\r\n                <a\r\n                  class=\"decoration-none\"\r\n                  [href]=\"checkVideoUrl()\"\r\n                  target=\"_blank\"\r\n                  title=\"ویدیو آموزش استفاده از توان بر اساس دریچه گاز تیونر پلاس ویژه اول آموز\"\r\n                  ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"icon-only\"\r\n                      name=\"download-outline\"\r\n                    ></ion-icon> </ion-button\r\n                ></a>\r\n              </ion-item>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </Section>\r\n    <app-footer></app-footer>\r\n  </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_throttle_throttle_module_ts.js.map