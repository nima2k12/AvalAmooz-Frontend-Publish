"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_injector-resistor_injector-resistor_module_ts"],{

/***/ 66397:
/*!*********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/injector-resistor/injector-resistor-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InjectorResistorPageRoutingModule": () => (/* binding */ InjectorResistorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _injector_resistor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./injector-resistor.page */ 94595);




const routes = [
    {
        path: '',
        component: _injector_resistor_page__WEBPACK_IMPORTED_MODULE_0__.InjectorResistorPage
    }
];
let InjectorResistorPageRoutingModule = class InjectorResistorPageRoutingModule {
};
InjectorResistorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InjectorResistorPageRoutingModule);



/***/ }),

/***/ 25553:
/*!*************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/injector-resistor/injector-resistor.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InjectorResistorPageModule": () => (/* binding */ InjectorResistorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _injector_resistor_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector-resistor-routing.module */ 66397);
/* harmony import */ var _injector_resistor_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injector-resistor.page */ 94595);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let InjectorResistorPageModule = class InjectorResistorPageModule {
};
InjectorResistorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _injector_resistor_routing_module__WEBPACK_IMPORTED_MODULE_1__.InjectorResistorPageRoutingModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ],
        declarations: [_injector_resistor_page__WEBPACK_IMPORTED_MODULE_2__.InjectorResistorPage]
    })
], InjectorResistorPageModule);



/***/ }),

/***/ 94595:
/*!***********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/injector-resistor/injector-resistor.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InjectorResistorPage": () => (/* binding */ InjectorResistorPage)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _injector_resistor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector-resistor.page.html?ngResource */ 34727);
/* harmony import */ var _injector_resistor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injector-resistor.page.scss?ngResource */ 67636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/common/G */ 67122);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);




/* eslint-disable eqeqeq */













let InjectorResistorPage = class InjectorResistorPage {
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
    this.res = 0;
    this.watt = 14;
    this.isShow = false;

    if (!_core_common_GAccount__WEBPACK_IMPORTED_MODULE_7__.GAccount.IsLoggedIn()) {
      this.router.navigateByUrl('/Account');
    }

    this.check();
  }

  ngOnInit() {
    this.instagram = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Instagram;
    this.twiter = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Twiter;
    this.facebook = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Facebook;
    this.telegram = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Telegram;
    this.youtube = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Youtube;
    this.pinterest = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Pinterest;
    this.linkedin = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Linkedin;
    this.twitch = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Twitch;
    this.aparat = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Aparat;
    this.discord = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Discord;
    this.tunerPlusVideo = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.TunerPlusThrottleVideo;
    this.form = this.fb.group({
      res: [14, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(10000000)]],
      current: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(10000000)]],
      voltage: [14, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(10000000)]]
    });
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(_this.loadingController);

      _this.siteService.GetTunerPlusById(30).subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
          if (res.data.isActive) {
            if (!res.data.isFree) {
              _this.courseService.GetUserCoursesId().subscribe(ress => {
                if (ress.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
                  let found = false;
                  res.data.courseIds.forEach(courseId => {
                    if (ress.data.find(n => n == courseId)) {
                      found = true;

                      _this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
                        if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
                          _this.isCheck = false;
                        } else {
                          _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
                        }
                      }, errs => {
                        _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

                        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
                      });
                    }
                  });

                  if (!found) {
                    _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

                    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
                  }
                } else {
                  _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
                }
              }, errs => {
                _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
              });
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
              _this.isCheck = false;
            }
          } else {
            _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
          }
        } else {
          _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
        }
      }, err => {
        _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
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

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.res = Math.round(this.form.value.voltage / this.form.value.current - this.form.value.res);
        this.watt = Math.round(this.form.value.voltage * this.form.value.current);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onReset() {
    this.res = 0;
    this.watt = 14;
    this.form.setValue({
      res: 14,
      current: 1,
      voltage: 14
    });
  }

  onInfo(type) {
    switch (type) {
      case 'res':
        this.presentActiveAlertConfirm('مقاومت انژکتور برحسب اهم');
        break;

      case 'current':
        this.presentActiveAlertConfirm('جریان مورد نیاز انژکتور برحسب آمپر');
        break;

      case 'voltage':
        this.presentActiveAlertConfirm('ولتاژ انژکتور');
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

};

InjectorResistorPage.ctorParameters = () => [{
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
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_9__.SliderService
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService
}];

InjectorResistorPage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent]
  }]
};
InjectorResistorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-injector-resistor',
  template: _injector_resistor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_injector_resistor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], InjectorResistorPage);


/***/ }),

/***/ 67636:
/*!************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/injector-resistor/injector-resistor.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = ":host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfdGhlbWUuc2NzcyIsImluamVjdG9yLXJlc2lzdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDTEo7QURRSTs7O0VBR0Usd0JBQUE7RUFDQSxtQ0FBQTtBQ05OO0FEU0k7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUNQTjtBRFVJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0FDUk47QURVSTtFQUFjLCtCQUFBO0VBQWlDLDBCQUFBO0FDTm5EO0FET0k7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUNMTjtBRE9JO0VBQVcsZ0NBQUE7QUNKZjtBREtJO0VBQW9DLHdCQUFBO0FDRnhDO0FER0k7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtBQ0ROO0FER0k7RUFBa0QsbUNBQUE7QUNBdEQiLCJmaWxlIjoiaW5qZWN0b3ItcmVzaXN0b3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gS2VlcCB0aGUgb3JpZ2luYWwgbGlnaHQgY29sb3IgYXQgZWFjaCBjYWxsIHNpdGUuIFRva2VucyBleGlzdCBvbmx5IGluIGRhcmsgbW9kZS5cbkBmdW5jdGlvbiB0dW5lci1jb2xvcigkcm9sZSwgJGxpZ2h0KSB7XG4gIEByZXR1cm4gdmFyKC0tdHVuZXItI3skcm9sZX0sICN7JGxpZ2h0fSk7XG59XG5cbkBtaXhpbiB0dW5lci1kYXJrLXRoZW1lIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgLS10dW5lci1wYWdlOiAjMTExNTFlO1xuICAgIC0tdHVuZXItc3VyZmFjZTogIzFjMjIzMDtcbiAgICAtLXR1bmVyLXNvZnQ6ICMyNTJlM2Q7XG4gICAgLS10dW5lci1ib3JkZXI6ICM0NjUyNjk7XG4gICAgLS10dW5lci10ZXh0OiAjZWRmMWY4O1xuICAgIC0tdHVuZXItbXV0ZWQ6ICNiMmJmZDE7XG4gICAgLS10dW5lci1oZWFkZXI6IHJnYmEoMjgsIDM0LCA0OCwgMC45NCk7XG4gICAgLS10dW5lci1vdmVybGF5OiByZ2JhKDI4LCAzNCwgNDgsIDAuOTUpO1xuICAgIC0tdHVuZXItcHVycGxlLXRleHQ6ICNjNGI1ZmQ7XG4gICAgLS10dW5lci1wdXJwbGUtc29mdDogIzMwMjQ0NDtcbiAgICAtLXR1bmVyLXB1cnBsZS1ib3JkZXI6ICM3MjU3OWI7XG4gICAgLS10dW5lci1pbmZvLXRleHQ6ICM5M2M1ZmQ7XG4gICAgLS10dW5lci1pbmZvLXNvZnQ6ICMxZDMwNGM7XG4gICAgLS10dW5lci1pbmZvLWJvcmRlcjogIzQ2NmI5YTtcbiAgICAtLXR1bmVyLXdhcm5pbmctdGV4dDogI2ZjZDQ3NztcbiAgICAtLXR1bmVyLXdhcm5pbmctc29mdDogIzNiMzAyMDtcbiAgICAtLXR1bmVyLXdhcm5pbmctYm9yZGVyOiAjOTM3NDNkO1xuICAgIC0tdHVuZXItc3VjY2Vzcy10ZXh0OiAjODZlZmFjO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1zb2Z0OiAjMTkzOTJlO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1ib3JkZXI6ICM0MTdkNjA7XG4gICAgLS10dW5lci1kYW5nZXItdGV4dDogI2ZkYTRhZjtcbiAgICAtLXR1bmVyLWRhbmdlci1zb2Z0OiAjNDAyNjMxO1xuICAgIC0tdHVuZXItZGFuZ2VyLWJvcmRlcjogIzk4NTM2NztcbiAgICAtLXR1bmVyLXRlYWwtdGV4dDogIzdkZTRkNDtcbiAgICAtLXR1bmVyLXRlYWwtc29mdDogIzE5M2EzYTtcbiAgICAtLXR1bmVyLXRlYWwtYm9yZGVyOiAjNDM3ZjdjO1xuXG4gICAgLy8gTmF0aXZlIGNvbnRyb2xzIHdpdGhvdXQgYW4gZXhwbGljaXQgbGlnaHQgYmFja2dyb3VuZCBuZWVkIGEgZGFyayBzdXJmYWNlIHRvby5cbiAgICBpbnB1dDpub3QoW3R5cGU9J3JhbmdlJ10pOm5vdChbdHlwZT0nY2hlY2tib3gnXSk6bm90KFt0eXBlPSdyYWRpbyddKTpub3QoW3R5cGU9J2J1dHRvbiddKTpub3QoW3R5cGU9J3N1Ym1pdCddKTpub3QoW3R5cGU9J2ZpbGUnXSksXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci1tdXRlZCk7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cblxuICAgIGlvbi1oZWFkZXIubGVhcm5pbmctaGVhZGVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItcGFnZSk7IC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmQ6bm90KFtjb2xvcl0pLCBpb24tbGlzdCwgaW9uLWl0ZW06bm90KFtjb2xvcl0pLCBpb24taXRlbS1kaXZpZGVyOm5vdChbY29sb3JdKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWxpc3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTsgfVxuICAgIGlvbi1jYXJkLXRpdGxlLCBpb24tY2FyZC1zdWJ0aXRsZSB7IGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkW2NvbG9yPSdsaWdodGVzdCddLCBpb24taXRlbVtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWZhYi1idXR0b25bY29sb3I9J2xpZ2h0ZXN0J10ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2RhcmsnXSwgaW9uLWxhYmVsW2NvbG9yPSdkYXJrJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICB9XG59XG4iLCI6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gIC0tdHVuZXItc3VyZmFjZTogIzFjMjIzMDtcbiAgLS10dW5lci1zb2Z0OiAjMjUyZTNkO1xuICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgLS10dW5lci10ZXh0OiAjZWRmMWY4O1xuICAtLXR1bmVyLW11dGVkOiAjYjJiZmQxO1xuICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgLS10dW5lci1vdmVybGF5OiByZ2JhKDI4LCAzNCwgNDgsIDAuOTUpO1xuICAtLXR1bmVyLXB1cnBsZS10ZXh0OiAjYzRiNWZkO1xuICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAtLXR1bmVyLXB1cnBsZS1ib3JkZXI6ICM3MjU3OWI7XG4gIC0tdHVuZXItaW5mby10ZXh0OiAjOTNjNWZkO1xuICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgLS10dW5lci1pbmZvLWJvcmRlcjogIzQ2NmI5YTtcbiAgLS10dW5lci13YXJuaW5nLXRleHQ6ICNmY2Q0Nzc7XG4gIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAtLXR1bmVyLXdhcm5pbmctYm9yZGVyOiAjOTM3NDNkO1xuICAtLXR1bmVyLXN1Y2Nlc3MtdGV4dDogIzg2ZWZhYztcbiAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gIC0tdHVuZXItc3VjY2Vzcy1ib3JkZXI6ICM0MTdkNjA7XG4gIC0tdHVuZXItZGFuZ2VyLXRleHQ6ICNmZGE0YWY7XG4gIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gIC0tdHVuZXItZGFuZ2VyLWJvcmRlcjogIzk4NTM2NztcbiAgLS10dW5lci10ZWFsLXRleHQ6ICM3ZGU0ZDQ7XG4gIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAtLXR1bmVyLXRlYWwtYm9yZGVyOiAjNDM3ZjdjO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW5wdXQ6bm90KFt0eXBlPXJhbmdlXSk6bm90KFt0eXBlPWNoZWNrYm94XSk6bm90KFt0eXBlPXJhZGlvXSk6bm90KFt0eXBlPWJ1dHRvbl0pOm5vdChbdHlwZT1zdWJtaXRdKTpub3QoW3R5cGU9ZmlsZV0pLFxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgdGV4dGFyZWEsXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBzZWxlY3Qge1xuICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmVyLXNvZnQpO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW5wdXQ6OnBsYWNlaG9sZGVyLCA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpO1xuICBvcGFjaXR5OiAwLjc1O1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItcGFnZSk7XG4gIC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWNhcmQ6bm90KFtjb2xvcl0pLCA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tbGlzdCwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWl0ZW06bm90KFtjb2xvcl0pLCA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24taXRlbS1kaXZpZGVyOm5vdChbY29sb3JdKSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gIC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tY2FyZC10aXRsZSwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tY2FyZFtjb2xvcj1saWdodGVzdF0sIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1pdGVtW2NvbG9yPWxpZ2h0ZXN0XSwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWZhYi1idXR0b25bY29sb3I9bGlnaHRlc3RdIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS10dW5lci1zb2Z0KTtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi10ZXh0W2NvbG9yPWRhcmtdLCA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tbGFiZWxbY29sb3I9ZGFya10ge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci10ZXh0KTtcbn0iXX0= */";

/***/ }),

/***/ 34727:
/*!************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/injector-resistor/injector-resistor.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TunerPlus\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\">محاسبه مقاومت انژکتور (Injector Resistor)</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"search()\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <Section *ngIf=\"!isCheck\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-subtitle class=\"text-center\">محاسبه مقاومت انژکتور (Injector Resistor)</ion-card-subtitle>\r\n                <!-- <ion-card-title class=\"text-center\"\r\n                  >توان بر اساس تعداد و قطر دریچه گاز</ion-card-title\r\n                > -->\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"twitter\"\r\n                    slot=\"start\"\r\n                    name=\"git-commit-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >مقاومت انژکتور</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"14\"\r\n                    formControlName=\"res\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('res')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"enter-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >جریان انژکتور</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"1\"\r\n                    formControlName=\"current\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('current')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"battery-charging-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >ولتاژ انژکتور</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"14\"\r\n                    formControlName=\"voltage\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('voltage')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </ion-card>\r\n          </form>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >مقاومت و وات مورد نیاز</ion-card-subtitle\r\n              >\r\n              <!-- <ion-card-title class=\"text-center\">HP</ion-card-title> -->\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ res }}\r\n                  </ion-text>\r\n                  &nbsp;Ω\r\n                </h2>\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ watt }}\r\n                  </ion-text>\r\n                  &nbsp;Watt\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </Section>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_injector-resistor_injector-resistor_module_ts.js.map