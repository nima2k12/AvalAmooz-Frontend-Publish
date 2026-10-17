"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_m15_m15_module_ts"],{

/***/ 56392:
/*!*****************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/m15/m15-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M15PageRoutingModule": () => (/* binding */ M15PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _m15_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m15.component */ 67278);




const routes = [
    {
        path: '',
        component: _m15_component__WEBPACK_IMPORTED_MODULE_0__.M15Page
    }
];
let M15PageRoutingModule = class M15PageRoutingModule {
};
M15PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], M15PageRoutingModule);



/***/ }),

/***/ 67278:
/*!************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/m15/m15.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M15Page": () => (/* binding */ M15Page)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _m15_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./m15.component.html?ngResource */ 8993);
/* harmony import */ var _m15_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./m15.component.scss?ngResource */ 43480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/common/Urls */ 35602);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);















let M15Page = class M15Page {
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
    this.tunerPlusVideo = 'InJWP';
    this.pi = 3.14159265;
    this.cubic_capacity = 1497.1;
    this.cr = 9.7;
    this.isShow = false;
    this.check();
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(_this.loadingController);

      _this.siteService.GetTunerPlusById(31).subscribe(res => {
        if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          if (res.data.isActive) {
            if (!res.data.isFree) {
              _this.courseService.GetUserCoursesId().subscribe(ress => {
                if (ress.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                  let found = false;
                  res.data.courseIds.forEach(courseId => {
                    if (ress.data.find(n => n == courseId)) {
                      found = true;

                      _this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
                        if (resss.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                          _this.isCheck = false;
                        } else {
                          _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                        }
                      }, errs => {
                        _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                      });
                    }
                  });

                  if (!found) {
                    _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                  }
                } else {
                  _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                  src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                }
              }, errs => {
                _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
              });
            } else {
              src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
              _this.isCheck = false;
            }
          } else {
            _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
          }
        } else {
          _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
        }
      }, err => {
        _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
      });
    })();
  }

  ngOnInit() {
    this.tunerPlusVideo = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.TunerPlusTu5Video;
    this.form = this.fb.group({
      bore: [75.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100000)]],
      strok: [83.6, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100000)]],
      n: [4, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]]
    });
    this.form2 = this.fb.group({
      bore: [75.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]],
      strok: [83.6, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]],
      bore_gasket: [77, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]],
      strok_gasket: [0.65, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]],
      h_v: [34, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-1000000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000)]],
      p_v: [6, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-1000000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]]
    });
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

    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.cubic_capacity = +(this.pi * this.form.value.bore * this.form.value.bore / 4 * this.form.value.strok / 1000 * this.form.value.n).toFixed(2);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onReset() {
    this.cubic_capacity = 1587.46;
    this.form.setValue({
      bore: 78.5,
      strok: 82,
      n: 4
    });
  }

  onCalc2() {
    if (!this.form2.valid) {
      return;
    }

    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        const gasket = +(this.pi * this.form2.value.bore_gasket * this.form2.value.bore_gasket / 4 * this.form2.value.strok_gasket / 1000);
        const motor = +(this.pi * this.form2.value.bore * this.form2.value.bore / 4 * this.form2.value.strok / 1000);
        const total_v = motor + gasket + +this.form2.value.h_v + +this.form2.value.p_v;
        const left_v = gasket + +this.form2.value.h_v + +this.form2.value.p_v;
        this.cr = +(total_v / left_v).toFixed(2);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onReset2() {
    this.cr = 10.86;
    this.form2.setValue({
      bore: 78.5,
      strok: 82,
      bore_gasket: 80,
      strok_gasket: 0.65,
      h_v: 37,
      p_v: 0
    });
  }

  onInfo(type) {
    switch (type) {
      case 'bore':
        this.presentActiveAlertConfirm('قطر سیلندر یا پیستون بر حسب میلیمتر');
        break;

      case 'strok':
        this.presentActiveAlertConfirm('کورس پیستون برحسب میلیمتر');
        break;

      case 'bore_gasket':
        this.presentActiveAlertConfirm('قطر واشر سرسیلندر (قطر حفره ی سیلندر و پیستون) بر حسب میلیمتر');
        break;

      case 'strok_gasket':
        this.presentActiveAlertConfirm('ضخامت واشر سرسیلندر برحسب میلیمتر');
        break;

      case 'h_v':
        this.presentActiveAlertConfirm('حجم فرو رفتگی یا همان گودی محفظه ی احتراق سرسیلندر برحسب سانتیمتر مکعب (cc)');
        break;

      case 'p_v':
        this.presentActiveAlertConfirm('حجم فرو رفتگی یا برآمدگی سر پیستون برحسب سانتیمتر مکعب (cc). دقت شود که پیستون برآمده باشد باید عدد منفی وارد شود');
        break;

      case 'n':
        this.presentActiveAlertConfirm('تعداد سیلندر');
        break;

      case 'cubic':
        this.presentActiveAlertConfirm('حجم موتوری که محاسبه کرده اید بر حسب سانتیمتر مکعب');
        break;

      case 'rpm':
        this.presentActiveAlertConfirm('دور موتور مد نظر شما');
        break;

      case 'd':
        this.presentActiveAlertConfirm('دوریشن میل سوپاپ برحسب درجه');
        break;

      case 'r':
        this.presentActiveAlertConfirm('قطر رانر محاسبه شده برحسب سانتیمتر');
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

M15Page.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
}, {
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_8__.SliderService
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService
}];

M15Page = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-m15',
  template: _m15_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_m15_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], M15Page);


/***/ }),

/***/ 55383:
/*!*********************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/m15/m15.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M15PageModule": () => (/* binding */ M15PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _m15_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./m15-routing.module */ 56392);
/* harmony import */ var _m15_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./m15.component */ 67278);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let M15PageModule = class M15PageModule {
};
M15PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _m15_routing_module__WEBPACK_IMPORTED_MODULE_1__.M15PageRoutingModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ],
        declarations: [_m15_component__WEBPACK_IMPORTED_MODULE_2__.M15Page]
    })
], M15PageModule);



/***/ }),

/***/ 43480:
/*!*************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/m15/m15.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".h_iframe-aparat_embed_frame {\n  position: relative;\n}\n\n.h_iframe-aparat_embed_frame .ratio {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  border-radius: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.video-span {\n  display: block;\n  padding-top: 57%;\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm0xNS5jb21wb25lbnQuc2NzcyIsIi4uXFxfdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUNoQkU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBRG1CSjs7QUNoQkk7OztFQUdFLHdCQUFBO0VBQ0EsbUNBQUE7QURrQk47O0FDZkk7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QURpQk47O0FDZEk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7QURnQk47O0FDZEk7RUFBYywrQkFBQTtFQUFpQywwQkFBQTtBRGtCbkQ7O0FDakJJO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FEbUJOOztBQ2pCSTtFQUFXLGdDQUFBO0FEb0JmOztBQ25CSTtFQUFvQyx3QkFBQTtBRHNCeEM7O0FDckJJO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QUR1Qk47O0FDckJJO0VBQWtELG1DQUFBO0FEd0J0RCIsImZpbGUiOiJtMTUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi90aGVtZSc7XHJcblxyXG4uaF9pZnJhbWUtYXBhcmF0X2VtYmVkX2ZyYW1lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUgLnJhdGlvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUgaWZyYW1lIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi52aWRlby1zcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLXRvcDogNTclO1xyXG59XHJcblxyXG5AaW5jbHVkZSB0dW5lci1kYXJrLXRoZW1lO1xyXG4iLCIvLyBLZWVwIHRoZSBvcmlnaW5hbCBsaWdodCBjb2xvciBhdCBlYWNoIGNhbGwgc2l0ZS4gVG9rZW5zIGV4aXN0IG9ubHkgaW4gZGFyayBtb2RlLlxuQGZ1bmN0aW9uIHR1bmVyLWNvbG9yKCRyb2xlLCAkbGlnaHQpIHtcbiAgQHJldHVybiB2YXIoLS10dW5lci0jeyRyb2xlfSwgI3skbGlnaHR9KTtcbn1cblxuQG1peGluIHR1bmVyLWRhcmstdGhlbWUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gICAgLS10dW5lci1zdXJmYWNlOiAjMWMyMjMwO1xuICAgIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgICAtLXR1bmVyLXRleHQ6ICNlZGYxZjg7XG4gICAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgICAtLXR1bmVyLW92ZXJsYXk6IHJnYmEoMjgsIDM0LCA0OCwgMC45NSk7XG4gICAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAgIC0tdHVuZXItcHVycGxlLWJvcmRlcjogIzcyNTc5YjtcbiAgICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgICAtLXR1bmVyLWluZm8tYm9yZGVyOiAjNDY2YjlhO1xuICAgIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAgIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAgIC0tdHVuZXItd2FybmluZy1ib3JkZXI6ICM5Mzc0M2Q7XG4gICAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gICAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gICAgLS10dW5lci1zdWNjZXNzLWJvcmRlcjogIzQxN2Q2MDtcbiAgICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAgIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gICAgLS10dW5lci1kYW5nZXItYm9yZGVyOiAjOTg1MzY3O1xuICAgIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAgIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAgIC0tdHVuZXItdGVhbC1ib3JkZXI6ICM0MzdmN2M7XG5cbiAgICAvLyBOYXRpdmUgY29udHJvbHMgd2l0aG91dCBhbiBleHBsaWNpdCBsaWdodCBiYWNrZ3JvdW5kIG5lZWQgYSBkYXJrIHN1cmZhY2UgdG9vLlxuICAgIGlucHV0Om5vdChbdHlwZT0ncmFuZ2UnXSk6bm90KFt0eXBlPSdjaGVja2JveCddKTpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nZmlsZSddKSxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3Qge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1wYWdlKTsgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZDpub3QoW2NvbG9yXSksIGlvbi1saXN0LCBpb24taXRlbTpub3QoW2NvbG9yXSksIGlvbi1pdGVtLWRpdmlkZXI6bm90KFtjb2xvcl0pIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tbGlzdCB7IGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmRbY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1pdGVtW2NvbG9yPSdsaWdodGVzdCddLCBpb24tZmFiLWJ1dHRvbltjb2xvcj0nbGlnaHRlc3QnXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cbiAgICBpb24tdGV4dFtjb2xvcj0nZGFyayddLCBpb24tbGFiZWxbY29sb3I9J2RhcmsnXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 8993:
/*!*************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/m15/m15.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TunerPlus\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\"\r\n      >محاسبات تیبا (Tiba M15)</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"search()\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <Section *ngIf=\"!isCheck\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه حجم موتور</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"ellipse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر سیلندر (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"75.5\"\r\n                    formControlName=\"bore\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('bore')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"egg-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >کورس پیستون (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"83.6\"\r\n                    formControlName=\"strok\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('strok')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"discord\"\r\n                    slot=\"start\"\r\n                    name=\"ellipsis-horizontal-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >تعداد سیلندر</ion-label\r\n                  >\r\n                  <ion-input placeholder=\"4\" formControlName=\"n\" type=\"number\">\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('n')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </ion-card>\r\n          </form>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >حجم موتور</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >cm<sup>3</sup></ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ cubic_capacity }}\r\n                  </ion-text>\r\n                  &nbsp;cm<sup>3</sup>\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <form [formGroup]=\"form2\" (ngSubmit)=\"onCalc2()\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه نسبت تراکم</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"ellipse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر سیلندر (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"78.5\"\r\n                    formControlName=\"bore\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('bore')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"egg-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >کورس پیستون (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"82\"\r\n                    formControlName=\"strok\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('strok')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"ellipse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر واشر (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"80\"\r\n                    formControlName=\"bore_gasket\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('bore_gasket')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"egg-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >ضخامت واشر (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"0.65\"\r\n                    formControlName=\"strok_gasket\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('strok_gasket')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"discord\"\r\n                    slot=\"start\"\r\n                    name=\"cube-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >حجم محفظه ی سرسیلندر</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"37\"\r\n                    formControlName=\"h_v\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('h_v')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"disc-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >حجم سر پیستون</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"0\"\r\n                    formControlName=\"p_v\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('p_v')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form2.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset2()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </ion-card>\r\n          </form>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >نسبت تراکم</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\">CR</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ cr }}\r\n                  </ion-text>\r\n                  &nbsp;:&nbsp;1\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >اندازه ها و خلاصی ها</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\">موتور M15</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-grid fixed dir=\"rtl\">\r\n              <div style=\"overflow-x: auto\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> عنوان </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\"> mm </ion-col>\r\n                </ion-row>\r\n                <hr />\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> نوع </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    بنزینی چهار زمانه\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    تعداد و ترتیب سیلندر ها\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    خطی - چهار سیلندر\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر داخلی سیلندر\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    75.5\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> کورس سیلندر </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    83.6\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> حجم موتور </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    1496\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> نسبت تراکم </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    9.7\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    تایم باز شدن سوپاپ هوا\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\"> 13°c </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    تایم بسته شدن سوپاپ هوا\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\"> 66°c </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    تایم باز شدن سوپاپ دود\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\"> 41°c </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    تایم بسته شدن سوپاپ دود\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\"> 23°c </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    فشار کمپرس استاندارد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    200 PSI\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    حد مجاز تفاوت فشار کمپرس سیلندر ها\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    13.8 PSI\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ارتفاع سرسیلندر\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    79.2 ~ 79.4\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    حد تابیدگی سرسیلندر\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.15\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    لقی بین ساق سوپاپ و گاید سوپاپ هوا\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.013 ~ 0.038\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    لقی بین ساق سوپاپ و گاید سوپاپ دود\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.022 ~ 0.049\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> قطر داخلی گاید </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    6.0 ~ 6.012\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر ساق سوپاپ هوا\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    5.974 ~ 5.987\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر ساق سوپاپ دود\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    5.963 ~ 5.978\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر سر سوپاپ هوا\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    37.35 ~ 37.65\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر سر سوپاپ دود\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    30.35 ~ 30.65\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    زاویه سطح مورب سوپاپ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\"> 45 </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    طول آزاد فنر سوپاپ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    39.62\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضریب سختی فنر سوپاپ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    265 Nm\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    میزان لقی انتهای میل سوپاپ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.07 ~ 0.22\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> قطر یاتاقان </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    26.98 ~ 29.96\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    میزان لقی یاتاقان\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.073 ~ 0.02\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ارتفاع بادامک سوپاپ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    40.7608 ~ 40.8108\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    طول شاتون مرکز تا مرکز\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    135.95 ~ 136.05\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    حداکثر خمیدگی مجاز شاتون\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.054\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    میزان لقی یاتاقان متحرک\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.028 ~ 0.068\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    حد مجاز تابیدگی میل لنگ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.04\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> قطر لنگ متحرک </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    39.94 ~ 39.956\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر ثابت میل لنگ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    49.938 ~ 49.956\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    لقی یاتاقان ثابت\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.024 ~ 0.042\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    میزان لقی محوری میل لنگ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.08 ~ 0.282\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    حد تابیدگی بلوک سرسیلندر\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.15\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر پیستون گرید A\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    75.465 ± 0.005\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر پیستون گرید B\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    75.475 ± 0.005\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    لقی بین رینگ پیستون و شیار رینگ بالایی\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.04 ~ 0.08\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    لقی بین رینگ پیستون و شیار رینگ دومی\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.02 ~ 0.06\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    دهانه رینگ پیستون بالایی\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.20 ~ 0.40\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    دهانه رینگ پیستون دومی\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.50 ~ 0.70\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    دهانه رینگ پیستون روغن\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.50 ~ 0.70\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> قطر گژن پین </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    19.995 ~ 20\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    نیروی فشار جا زدن گژن پین\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    15000\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    حجم روغن کل موتور\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    3.4L\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> حجم روغن کارتل </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    3L\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> حجم فیلتر روغن </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.3L\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    درجه حرارت روغن\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\"> 90°c </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    فشار روغن در دور آرام\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    27.5 ~ 48.6 PSI\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    فشار روغن در دور 2000\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    41.6 PSI\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    فشار روغن در دور 4000\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    48.6 PSI\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    فشار روغن در دور 5000\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    52.1 PSI\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    دمای باز شدن ترموستات\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    80.5 ~ 83.5°c\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    دمای باز شدن کامل ترموستات\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\"> 95°c </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    حجم مایع خنک کننده\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    2.3L\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> سرعت دور آرام </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    850\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> فشار بنزین </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    3.5 Bar\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> قطر دریچه گاز </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    53.94\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> مشخصات دینام </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    12V - 90A\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> نوع شمع </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    Bosch FR8DE\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> دهانه شمع </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.7\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> ترتیب احتراق </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    1-3-4-2\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> مقاومت وایر </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    5600 ± 1120 per 1m\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    نیروی پیچ یاتاقان متحرک\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    29 - 34 Nm\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت یاتاقان متحرک استاندارد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    1.5\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت یاتاقان متحرک 0.25\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    1.625\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت یاتاقان متحرک 0.50\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    1.75\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت یاتاقان متحرک 0.75\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    1.875\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    نیروی پیچ یاتاقان ثابت\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    54 - 59 Nm\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر یاتاقان ثابت 0.25\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    49.688 - 49.706\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر یاتاقان ثابت 0.50\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    49.438 - 49.456\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر یاتاقان ثابت 0.75\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    49.188 - 49.206\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر یاتاقان ثابت 0.75\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    49.188 - 49.206\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر یاتاقان متحرک 0.25\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    36.690 - 36.706\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر یاتاقان متحرک 0.50\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    36.440 - 36.456\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر یاتاقان متحرک 0.75\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    36.190 - 36.206\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت بغل یاتاقانی استاندارد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    2.007 - 2.022\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت بغل یاتاقانی 0.25\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    2.133 - 2.137\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت بغل یاتاقانی 0.50\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    2.138 - 2.262\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت بغل یاتاقانی 0.75\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    2.263 - 2.387\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    گشتاور پیچ کارتل\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    8 - 11 Nm\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    گشتاور پیچ محفظه ی میل سوپاپ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    10 Nm\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    میزان لقی محوری میل سوپاپ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.7 ~ 0.22\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> قطر ساق سوپاپ </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    6.0\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> عرض سیت سوپاپ </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    1.6 ~ 1.8\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    حداکثر انحنای میل سوپاپ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.02\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر ثابت های میل سوپاپ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\"> 27 </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    گشتاور پیچ سرسیلندر مرحله ی اول\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    20 Nm\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    گشتاور پیچ سرسیلندر مرحله ی دوم\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    50 Nm\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    گشتاور پیچ سرسیلندر مرحله ی سوم\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    90 Nm\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    گشتاور پیچ فلایویل\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    96 - 103 Nm\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    گشتاور پیچ دیسک و صفحه\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    18 - 27 Nm\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    گشتاور پیچ دیسک و صفحه\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    18 - 27 Nm\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-grid>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </Section>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_m15_m15_module_ts.js.map