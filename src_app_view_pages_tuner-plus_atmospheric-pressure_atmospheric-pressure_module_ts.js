"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_atmospheric-pressure_atmospheric-pressure_module_ts"],{

/***/ 40260:
/*!***************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/atmospheric-pressure/atmospheric-pressure-routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtmosphericPressurePageRoutingModule": () => (/* binding */ AtmosphericPressurePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _atmospheric_pressure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atmospheric-pressure.component */ 92658);




const routes = [
    {
        path: '',
        component: _atmospheric_pressure_component__WEBPACK_IMPORTED_MODULE_0__.AtmosphericPressurePage
    }
];
let AtmosphericPressurePageRoutingModule = class AtmosphericPressurePageRoutingModule {
};
AtmosphericPressurePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AtmosphericPressurePageRoutingModule);



/***/ }),

/***/ 92658:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/atmospheric-pressure/atmospheric-pressure.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtmosphericPressurePage": () => (/* binding */ AtmosphericPressurePage)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _atmospheric_pressure_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./atmospheric-pressure.component.html?ngResource */ 24764);
/* harmony import */ var _atmospheric_pressure_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atmospheric-pressure.component.scss?ngResource */ 56068);
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




/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/naming-convention */












let AtmosphericPressurePage = class AtmosphericPressurePage {
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
    this.p = 12.57;
    this.cr = 10.86;
    this.h = 1300;
    this.hb = 0;
    this.isShow = false;
    this.check();
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(_this.loadingController);

      _this.siteService.GetTunerPlusById(25).subscribe(res => {
        if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          if (res.data.isActive) {
            if (!res.data.isFree) {
              _this.courseService.GetUserCoursesId().subscribe(ress => {
                if (ress.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                  let found = false;
                  res.data.courseIds.forEach(courseId => {
                    if (ress.data.find(n => n === courseId)) {
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
      p_sea: [14.7, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100000)]],
      h: [1300, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-100000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100000)]],
      c: [15, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]]
    });
    this.form2 = this.fb.group({
      p_sea: [14.7, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100000)]],
      p: [12.57, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-100000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100000)]],
      c: [15, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]]
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
        this.p = +(this.form.value.p_sea / 0.0001450377 * Math.pow(1 + -0.0065 / (this.form.value.c + 273.15) * (this.form.value.h - this.hb), 5.255876113278518) * 0.0001450377).toFixed(2); // this.p = +(-9E-27 * Math.pow(this.form.value.h, 6) - 3E-22 * Math.pow(this.form.value.h, 5) + 4E-17 * Math.pow(this.form.value.h, 4) - 2E-12 * Math.pow(this.form.value.h, 3) + 8E-08 * Math.pow(this.form.value.h, 2) - 0.0017 * this.form.value.h + 14.696).toFixed(2);

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

  onCalc2() {
    if (!this.form.valid) {
      return;
    }

    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.h = +(this.hb + (this.form2.value.c + 273.15) / -0.0065 * (Math.pow(this.form2.value.p / 0.0001450377 / (this.form2.value.p_sea / 0.0001450377), 0.1902632365084836) - 1)).toFixed(1); // this.h = +(0.0145 * Math.pow(this.form2.value.p, 6) - 0.9129 * Math.pow(this.form2.value.p, 5) + 22.946 * Math.pow(this.form2.value.p, 4) - 294.87 * Math.pow(this.form2.value.p, 3) + 2083.6 * Math.pow(this.form2.value.p, 2) - 8869.1 * this.form2.value.p + 25622).toFixed(2);

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
    this.p = 12.57;
    this.form.setValue({
      p_sea: 14.7,
      h: 1300,
      c: 15
    });
  }

  onReset2() {
    this.h = 1300;
    this.form2.setValue({
      p_sea: 14.7,
      p: 12.57,
      c: 15
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

      case 'p_sea':
        this.presentActiveAlertConfirm('فشار هوا در سطح دریا برحسب پی اس آی (PSI)');
        break;

      case 'h':
        this.presentActiveAlertConfirm('ارتفاع از سطح دریا برحسب متر');
        break;

      case 'c':
        this.presentActiveAlertConfirm('دمای هوای محیط برحسب درجه سانتیگراد');
        break;

      case 'p':
        this.presentActiveAlertConfirm('فشار هوای محیط برحسب پی اس ای (PSI)');
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

AtmosphericPressurePage.ctorParameters = () => [{
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

AtmosphericPressurePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-atmospheric-pressure',
  template: _atmospheric_pressure_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_atmospheric_pressure_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AtmosphericPressurePage);


/***/ }),

/***/ 47753:
/*!*******************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/atmospheric-pressure/atmospheric-pressure.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtmosphericPressurePageModule": () => (/* binding */ AtmosphericPressurePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _atmospheric_pressure_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./atmospheric-pressure-routing.module */ 40260);
/* harmony import */ var _atmospheric_pressure_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atmospheric-pressure.component */ 92658);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let AtmosphericPressurePageModule = class AtmosphericPressurePageModule {
};
AtmosphericPressurePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _atmospheric_pressure_routing_module__WEBPACK_IMPORTED_MODULE_1__.AtmosphericPressurePageRoutingModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ],
        declarations: [_atmospheric_pressure_component__WEBPACK_IMPORTED_MODULE_2__.AtmosphericPressurePage]
    })
], AtmosphericPressurePageModule);



/***/ }),

/***/ 56068:
/*!***********************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/atmospheric-pressure/atmospheric-pressure.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = ".h_iframe-aparat_embed_frame {\n  position: relative;\n}\n\n.h_iframe-aparat_embed_frame .ratio {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  border-radius: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.video-span {\n  display: block;\n  padding-top: 57%;\n}\n\n.atmosphere-table {\n  position: relative;\n  margin: 20px 0;\n  padding: clamp(16px, 2.5vw, 28px);\n  overflow: hidden;\n  color: var(--ion-text-color);\n  background: linear-gradient(145deg, rgba(var(--ion-color-danger-rgb), 0.07), transparent 38%), var(--ion-item-background, var(--ion-background-color));\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.24);\n  border-radius: 22px;\n  box-shadow: 0 22px 56px rgba(0, 0, 0, 0.12);\n}\n\n.atmosphere-table::before {\n  content: \"\";\n  position: absolute;\n  inset: 0 0 auto;\n  height: 4px;\n  background: linear-gradient(90deg, transparent, var(--ion-color-danger), transparent);\n}\n\n.atmosphere-table__header,\n.atmosphere-table__badge,\n.atmosphere-table__footer,\n.atmosphere-table__footer span {\n  display: flex;\n  align-items: center;\n}\n\n.atmosphere-table__header {\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.atmosphere-table__eyebrow {\n  margin: 0 0 8px;\n  color: var(--ion-color-danger);\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n}\n\n.atmosphere-table__header h2 {\n  margin: 0;\n  font-size: clamp(1.25rem, 2.2vw, 1.8rem);\n  font-weight: 800;\n}\n\n.atmosphere-table__header p:last-child {\n  margin: 8px 0 0;\n  color: var(--ion-color-medium);\n  font-size: 0.88rem;\n  line-height: 1.8;\n}\n\n.atmosphere-table__badge {\n  flex: none;\n  gap: 8px;\n  padding: 10px 12px;\n  color: var(--ion-text-color);\n  background: rgba(var(--ion-color-medium-rgb), 0.09);\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n  border-radius: 12px;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.atmosphere-table__badge ion-icon,\n.atmosphere-table__footer ion-icon {\n  color: var(--ion-color-danger);\n  font-size: 1.1rem;\n}\n\n.atmosphere-table__scroll {\n  max-height: min(70vh, 680px);\n  overflow: auto;\n  background: #15191d;\n  border: 1px solid var(--tuner-border, #333b42);\n  border-radius: 14px;\n  scrollbar-color: #6b737d #171b20;\n}\n\n.atmosphere-table__scroll:focus-visible {\n  outline: 3px solid var(--ion-color-danger);\n  outline-offset: 3px;\n}\n\n.atmosphere-table__grid {\n  width: 100%;\n  min-width: 720px;\n  border-collapse: separate;\n  border-spacing: 0;\n  table-layout: fixed;\n  color: #f3f5f6;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n  text-align: center;\n}\n\n.atmosphere-table__grid th,\n.atmosphere-table__grid td {\n  padding: 11px 10px;\n  border-right: 1px solid #374048;\n  border-bottom: 1px solid #374048;\n  white-space: nowrap;\n}\n\n.atmosphere-table__groups th {\n  position: sticky;\n  top: 0;\n  z-index: 4;\n  height: 46px;\n  background: #303740;\n  font-size: 0.92rem;\n  font-weight: 800;\n}\n\n.atmosphere-table__groups th:last-child {\n  background: #81262d;\n}\n\n.atmosphere-table__units th {\n  position: sticky;\n  top: 46px;\n  z-index: 3;\n  height: 44px;\n  background: #303740;\n  box-shadow: inset 0 -2px 0 #ba3438;\n  font-size: 0.83rem;\n  font-weight: 800;\n}\n\n.atmosphere-table__units th:nth-child(n+4) {\n  background: #573037;\n}\n\n.atmosphere-table__units th:first-child {\n  left: 0;\n  z-index: 5;\n}\n\n.atmosphere-table__grid tbody td {\n  height: 44px;\n  background: #1b2025;\n  font-size: 0.9rem;\n  transition: background-color 140ms ease;\n}\n\n.atmosphere-table__grid tbody tr:nth-child(even) td {\n  background: #242a30;\n}\n\n.atmosphere-table__grid tbody td:nth-child(n+4) {\n  background: #292429;\n}\n\n.atmosphere-table__grid tbody tr:nth-child(even) td:nth-child(n+4) {\n  background: #322a2e;\n}\n\n.atmosphere-table__grid tbody td:first-child {\n  position: sticky;\n  left: 0;\n  z-index: 1;\n  font-weight: 800;\n}\n\n.atmosphere-table__grid tbody tr:hover td {\n  background: #35404a;\n}\n\n.atmosphere-table__grid tbody tr:hover td:nth-child(n+4) {\n  background: #49343a;\n}\n\n.atmosphere-table__grid tbody .atmosphere-table__sea-level td {\n  background: #493036;\n  color: #fff;\n  font-weight: 800;\n}\n\n.atmosphere-table__grid tbody .atmosphere-table__sea-level td:nth-child(n+4) {\n  background: #713139;\n}\n\n.atmosphere-table__footer {\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px 18px;\n  margin-top: 14px;\n  color: var(--ion-color-medium);\n  font-size: 0.78rem;\n}\n\n.atmosphere-table__footer span {\n  gap: 5px;\n}\n\n@media (max-width: 600px) {\n  .atmosphere-table {\n    padding: 16px 10px;\n    border-radius: 18px;\n  }\n\n  .atmosphere-table__header {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .atmosphere-table__grid {\n    min-width: 660px;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .atmosphere-table__grid tbody td {\n    transition: none;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0bW9zcGhlcmljLXByZXNzdXJlLmNvbXBvbmVudC5zY3NzIiwiLi5cXF90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0pBQUE7RUFFQSx5REFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUZBQUE7QUFGRjs7QUFLQTs7OztFQUlFLGFBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsU0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1EQUFBO0VBQ0Esd0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTs7RUFFRSw4QkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUZGOztBQUtBO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQUEsa0NBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBOztFQUVFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQTBDLG1CQUFBO0FBRDFDOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQStDLG1CQUFBO0FBQy9DOztBQUFBO0VBQTBDLE9BQUE7RUFBUyxVQUFBO0FBS25EOztBQUhBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtBQU1GOztBQUhBO0VBQXNELG1CQUFBO0FBT3REOztBQU5BO0VBQW9ELG1CQUFBO0FBVXBEOztBQVRBO0VBQXVFLG1CQUFBO0FBYXZFOztBQVhBO0VBQ0UsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBY0Y7O0FBWEE7RUFBNEMsbUJBQUE7QUFlNUM7O0FBZEE7RUFBNkQsbUJBQUE7QUFrQjdEOztBQWhCQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBbUJGOztBQWhCQTtFQUFpRixtQkFBQTtBQW9CakY7O0FBbEJBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQXFCRjs7QUFsQkE7RUFBaUMsUUFBQTtBQXNCakM7O0FBcEJBO0VBQ0U7SUFBb0Isa0JBQUE7SUFBb0IsbUJBQUE7RUF5QnhDOztFQXhCQTtJQUE0Qix1QkFBQTtJQUF5QixzQkFBQTtFQTZCckQ7O0VBNUJBO0lBQTBCLGdCQUFBO0VBZ0MxQjtBQUNGOztBQTlCQTtFQUNFO0lBQW1DLGdCQUFBO0VBaUNuQztBQUNGOztBQzFPRTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FENE9KOztBQ3pPSTs7O0VBR0Usd0JBQUE7RUFDQSxtQ0FBQTtBRDJPTjs7QUN4T0k7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUQwT047O0FDdk9JO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0FEeU9OOztBQ3ZPSTtFQUFjLCtCQUFBO0VBQWlDLDBCQUFBO0FEMk9uRDs7QUMxT0k7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUQ0T047O0FDMU9JO0VBQVcsZ0NBQUE7QUQ2T2Y7O0FDNU9JO0VBQW9DLHdCQUFBO0FEK094Qzs7QUM5T0k7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtBRGdQTjs7QUM5T0k7RUFBa0QsbUNBQUE7QURpUHREIiwiZmlsZSI6ImF0bW9zcGhlcmljLXByZXNzdXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdGhlbWUnO1xyXG5cclxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaF9pZnJhbWUtYXBhcmF0X2VtYmVkX2ZyYW1lIC5yYXRpbyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaF9pZnJhbWUtYXBhcmF0X2VtYmVkX2ZyYW1lIGlmcmFtZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udmlkZW8tc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6IDU3JTtcclxufVxyXG5cclxuLmF0bW9zcGhlcmUtdGFibGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBwYWRkaW5nOiBjbGFtcCgxNnB4LCAyLjV2dywgMjhweCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAuMDcpLCB0cmFuc3BhcmVudCAzOCUpLFxyXG4gICAgdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgLjI0KTtcclxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMjJweCA1NnB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxufVxyXG5cclxuLmF0bW9zcGhlcmUtdGFibGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGluc2V0OiAwIDAgYXV0bztcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSwgdHJhbnNwYXJlbnQpO1xyXG59XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9faGVhZGVyLFxyXG4uYXRtb3NwaGVyZS10YWJsZV9fYmFkZ2UsXHJcbi5hdG1vc3BoZXJlLXRhYmxlX19mb290ZXIsXHJcbi5hdG1vc3BoZXJlLXRhYmxlX19mb290ZXIgc3BhbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9faGVhZGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5hdG1vc3BoZXJlLXRhYmxlX19leWVicm93IHtcclxuICBtYXJnaW46IDAgMCA4cHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIGZvbnQtc2l6ZTogLjcycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4xM2VtO1xyXG59XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9faGVhZGVyIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgxLjI1cmVtLCAyLjJ2dywgMS44cmVtKTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9faGVhZGVyIHA6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiA4cHggMCAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICBmb250LXNpemU6IC44OHJlbTtcclxuICBsaW5lLWhlaWdodDogMS44O1xyXG59XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9fYmFkZ2Uge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIC4wOSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogLjc4cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5hdG1vc3BoZXJlLXRhYmxlX19iYWRnZSBpb24taWNvbixcclxuLmF0bW9zcGhlcmUtdGFibGVfX2Zvb3RlciBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9fc2Nyb2xsIHtcclxuICBtYXgtaGVpZ2h0OiBtaW4oNzB2aCwgNjgwcHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICMxNTE5MWQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHVuZXItY29sb3IoYm9yZGVyLCAjMzMzYjQyKTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHNjcm9sbGJhci1jb2xvcjogIzZiNzM3ZCAjMTcxYjIwO1xyXG59XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9fc2Nyb2xsOmZvY3VzLXZpc2libGUge1xyXG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICBvdXRsaW5lLW9mZnNldDogM3B4O1xyXG59XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9fZ3JpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiA3MjBweDtcclxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgY29sb3I6ICNmM2Y1ZjY7XHJcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdG1vc3BoZXJlLXRhYmxlX19ncmlkIHRoLFxyXG4uYXRtb3NwaGVyZS10YWJsZV9fZ3JpZCB0ZCB7XHJcbiAgcGFkZGluZzogMTFweCAxMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzNzQwNDg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzNzQwNDg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmF0bW9zcGhlcmUtdGFibGVfX2dyb3VwcyB0aCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogNDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgYmFja2dyb3VuZDogIzMwMzc0MDtcclxuICBmb250LXNpemU6IC45MnJlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9fZ3JvdXBzIHRoOmxhc3QtY2hpbGQgeyBiYWNrZ3JvdW5kOiAjODEyNjJkOyB9XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9fdW5pdHMgdGgge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiA0NnB4O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzMDM3NDA7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgI2JhMzQzODtcclxuICBmb250LXNpemU6IC44M3JlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9fdW5pdHMgdGg6bnRoLWNoaWxkKG4gKyA0KSB7IGJhY2tncm91bmQ6ICM1NzMwMzc7IH1cclxuLmF0bW9zcGhlcmUtdGFibGVfX3VuaXRzIHRoOmZpcnN0LWNoaWxkIHsgbGVmdDogMDsgei1pbmRleDogNTsgfVxyXG5cclxuLmF0bW9zcGhlcmUtdGFibGVfX2dyaWQgdGJvZHkgdGQge1xyXG4gIGhlaWdodDogNDRweDtcclxuICBiYWNrZ3JvdW5kOiAjMWIyMDI1O1xyXG4gIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcyBlYXNlO1xyXG59XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9fZ3JpZCB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikgdGQgeyBiYWNrZ3JvdW5kOiAjMjQyYTMwOyB9XHJcbi5hdG1vc3BoZXJlLXRhYmxlX19ncmlkIHRib2R5IHRkOm50aC1jaGlsZChuICsgNCkgeyBiYWNrZ3JvdW5kOiAjMjkyNDI5OyB9XHJcbi5hdG1vc3BoZXJlLXRhYmxlX19ncmlkIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB0ZDpudGgtY2hpbGQobiArIDQpIHsgYmFja2dyb3VuZDogIzMyMmEyZTsgfVxyXG5cclxuLmF0bW9zcGhlcmUtdGFibGVfX2dyaWQgdGJvZHkgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5hdG1vc3BoZXJlLXRhYmxlX19ncmlkIHRib2R5IHRyOmhvdmVyIHRkIHsgYmFja2dyb3VuZDogIzM1NDA0YTsgfVxyXG4uYXRtb3NwaGVyZS10YWJsZV9fZ3JpZCB0Ym9keSB0cjpob3ZlciB0ZDpudGgtY2hpbGQobiArIDQpIHsgYmFja2dyb3VuZDogIzQ5MzQzYTsgfVxyXG5cclxuLmF0bW9zcGhlcmUtdGFibGVfX2dyaWQgdGJvZHkgLmF0bW9zcGhlcmUtdGFibGVfX3NlYS1sZXZlbCB0ZCB7XHJcbiAgYmFja2dyb3VuZDogIzQ5MzAzNjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9fZ3JpZCB0Ym9keSAuYXRtb3NwaGVyZS10YWJsZV9fc2VhLWxldmVsIHRkOm50aC1jaGlsZChuICsgNCkgeyBiYWNrZ3JvdW5kOiAjNzEzMTM5OyB9XHJcblxyXG4uYXRtb3NwaGVyZS10YWJsZV9fZm9vdGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogOHB4IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgZm9udC1zaXplOiAuNzhyZW07XHJcbn1cclxuXHJcbi5hdG1vc3BoZXJlLXRhYmxlX19mb290ZXIgc3BhbiB7IGdhcDogNXB4OyB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuYXRtb3NwaGVyZS10YWJsZSB7IHBhZGRpbmc6IDE2cHggMTBweDsgYm9yZGVyLXJhZGl1czogMThweDsgfVxyXG4gIC5hdG1vc3BoZXJlLXRhYmxlX19oZWFkZXIgeyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gIC5hdG1vc3BoZXJlLXRhYmxlX19ncmlkIHsgbWluLXdpZHRoOiA2NjBweDsgfVxyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gIC5hdG1vc3BoZXJlLXRhYmxlX19ncmlkIHRib2R5IHRkIHsgdHJhbnNpdGlvbjogbm9uZTsgfVxyXG59XHJcblxyXG5AaW5jbHVkZSB0dW5lci1kYXJrLXRoZW1lO1xyXG4iLCIvLyBLZWVwIHRoZSBvcmlnaW5hbCBsaWdodCBjb2xvciBhdCBlYWNoIGNhbGwgc2l0ZS4gVG9rZW5zIGV4aXN0IG9ubHkgaW4gZGFyayBtb2RlLlxuQGZ1bmN0aW9uIHR1bmVyLWNvbG9yKCRyb2xlLCAkbGlnaHQpIHtcbiAgQHJldHVybiB2YXIoLS10dW5lci0jeyRyb2xlfSwgI3skbGlnaHR9KTtcbn1cblxuQG1peGluIHR1bmVyLWRhcmstdGhlbWUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gICAgLS10dW5lci1zdXJmYWNlOiAjMWMyMjMwO1xuICAgIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgICAtLXR1bmVyLXRleHQ6ICNlZGYxZjg7XG4gICAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgICAtLXR1bmVyLW92ZXJsYXk6IHJnYmEoMjgsIDM0LCA0OCwgMC45NSk7XG4gICAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAgIC0tdHVuZXItcHVycGxlLWJvcmRlcjogIzcyNTc5YjtcbiAgICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgICAtLXR1bmVyLWluZm8tYm9yZGVyOiAjNDY2YjlhO1xuICAgIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAgIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAgIC0tdHVuZXItd2FybmluZy1ib3JkZXI6ICM5Mzc0M2Q7XG4gICAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gICAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gICAgLS10dW5lci1zdWNjZXNzLWJvcmRlcjogIzQxN2Q2MDtcbiAgICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAgIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gICAgLS10dW5lci1kYW5nZXItYm9yZGVyOiAjOTg1MzY3O1xuICAgIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAgIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAgIC0tdHVuZXItdGVhbC1ib3JkZXI6ICM0MzdmN2M7XG5cbiAgICAvLyBOYXRpdmUgY29udHJvbHMgd2l0aG91dCBhbiBleHBsaWNpdCBsaWdodCBiYWNrZ3JvdW5kIG5lZWQgYSBkYXJrIHN1cmZhY2UgdG9vLlxuICAgIGlucHV0Om5vdChbdHlwZT0ncmFuZ2UnXSk6bm90KFt0eXBlPSdjaGVja2JveCddKTpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nZmlsZSddKSxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3Qge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1wYWdlKTsgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZDpub3QoW2NvbG9yXSksIGlvbi1saXN0LCBpb24taXRlbTpub3QoW2NvbG9yXSksIGlvbi1pdGVtLWRpdmlkZXI6bm90KFtjb2xvcl0pIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tbGlzdCB7IGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmRbY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1pdGVtW2NvbG9yPSdsaWdodGVzdCddLCBpb24tZmFiLWJ1dHRvbltjb2xvcj0nbGlnaHRlc3QnXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cbiAgICBpb24tdGV4dFtjb2xvcj0nZGFyayddLCBpb24tbGFiZWxbY29sb3I9J2RhcmsnXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 24764:
/*!***********************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/atmospheric-pressure/atmospheric-pressure.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TunerPlus\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\"\r\n      >محاسبه فشار هوا (Atmospheric Pressure)</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"search()\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <Section *ngIf=\"!isCheck\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه فشار هوا</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"twitter\"\r\n                    slot=\"start\"\r\n                    name=\"cloudy-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >فشار هوای دریا</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"14.7\"\r\n                    formControlName=\"p_sea\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('p_sea')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"swap-vertical-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >ارتفاع از دریا</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"1300\"\r\n                    formControlName=\"h\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('h')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"thermometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دمای هوا</ion-label\r\n                  >\r\n                  <ion-input placeholder=\"15\" formControlName=\"c\" type=\"number\">\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('c')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </ion-card>\r\n          </form>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\">فشار هوا</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ p }}\r\n                  </ion-text>\r\n                  &nbsp;psi\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <form [formGroup]=\"form2\" (ngSubmit)=\"onCalc2()\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه ارتفاع از سطح دریا</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"twitter\"\r\n                    slot=\"start\"\r\n                    name=\"cloudy-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >فشار هوای دریا</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"14.7\"\r\n                    formControlName=\"p_sea\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('p_sea')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"cloud-upload-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >فشار هوا</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"1300\"\r\n                    formControlName=\"p\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('p')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"thermometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دمای هوا</ion-label\r\n                  >\r\n                  <ion-input placeholder=\"15\" formControlName=\"c\" type=\"number\">\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('c')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form2.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset2()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </ion-card>\r\n          </form>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\"\r\n                >ارتفاع از سطح دریا</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ h }}\r\n                  </ion-text>\r\n                  &nbsp;m\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <section class=\"atmosphere-table\" aria-labelledby=\"atmosphere-table-title\">\r\n            <div class=\"atmosphere-table__header\">\r\n              <div>\r\n                <p class=\"atmosphere-table__eyebrow\">TUNER PLUS / ATMOSPHERIC PRESSURE</p>\r\n                <h2 id=\"atmosphere-table-title\">جدول ارتفاع و فشار جو</h2>\r\n                <p>مقایسه ارتفاع از سطح دریا با فشار مطلق اتمسفر در واحدهای مختلف</p>\r\n              </div>\r\n              <div class=\"atmosphere-table__badge\">\r\n                <ion-icon name=\"layers-outline\" aria-hidden=\"true\"></ion-icon>\r\n                <span>۳ واحد ارتفاع · ۳ واحد فشار</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"atmosphere-table__scroll\" role=\"region\" tabindex=\"0\" aria-label=\"جدول تبدیل ارتفاع و فشار هوا؛ برای دیدن همه ستون‌ها به صورت افقی حرکت کنید\">\r\n              <table class=\"atmosphere-table__grid\" dir=\"ltr\" aria-label=\"مقادیر ارتفاع از سطح دریا و فشار مطلق اتمسفر\">\r\n                <thead>\r\n                  <tr class=\"atmosphere-table__groups\">\r\n                    <th colspan=\"3\" scope=\"colgroup\" dir=\"rtl\">ارتفاع از سطح دریا</th>\r\n                    <th colspan=\"3\" scope=\"colgroup\" dir=\"rtl\">فشار مطلق اتمسفر</th>\r\n                  </tr>\r\n                  <tr class=\"atmosphere-table__units\">\r\n                    <th scope=\"col\">feet</th>\r\n                    <th scope=\"col\">miles</th>\r\n                    <th scope=\"col\">meters</th>\r\n                    <th scope=\"col\">kPa</th>\r\n                    <th scope=\"col\">atm</th>\r\n                    <th scope=\"col\">psi</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr>\r\n                  <td>-5000</td>\r\n                  <td>-0.95</td>\r\n                  <td>-1524</td>\r\n                  <td>121.0</td>\r\n                  <td>1.19</td>\r\n                  <td>17.55</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>-4000</td>\r\n                  <td>-0.76</td>\r\n                  <td>-1219</td>\r\n                  <td>116.9</td>\r\n                  <td>1.15</td>\r\n                  <td>16.95</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>-3000</td>\r\n                  <td>-0.57</td>\r\n                  <td>-914</td>\r\n                  <td>112.8</td>\r\n                  <td>1.11</td>\r\n                  <td>16.36</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>-2000</td>\r\n                  <td>-0.38</td>\r\n                  <td>-610</td>\r\n                  <td>108.9</td>\r\n                  <td>1.07</td>\r\n                  <td>15.79</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>-1000</td>\r\n                  <td>-0.19</td>\r\n                  <td>-305</td>\r\n                  <td>105.0</td>\r\n                  <td>1.04</td>\r\n                  <td>15.24</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>-500</td>\r\n                  <td>-0.09</td>\r\n                  <td>-152</td>\r\n                  <td>103.2</td>\r\n                  <td>1.02</td>\r\n                  <td>14.96</td>\r\n                </tr>\r\n                <tr class=\"atmosphere-table__sea-level\">\r\n                  <td>0</td>\r\n                  <td>0.00</td>\r\n                  <td>0</td>\r\n                  <td>101.3</td>\r\n                  <td>1.00</td>\r\n                  <td>14.70</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>500</td>\r\n                  <td>0.09</td>\r\n                  <td>152</td>\r\n                  <td>99.5</td>\r\n                  <td>0.98</td>\r\n                  <td>14.43</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>1000</td>\r\n                  <td>0.19</td>\r\n                  <td>305</td>\r\n                  <td>97.7</td>\r\n                  <td>0.96</td>\r\n                  <td>14.17</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>1500</td>\r\n                  <td>0.28</td>\r\n                  <td>457</td>\r\n                  <td>96.0</td>\r\n                  <td>0.95</td>\r\n                  <td>13.92</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>2000</td>\r\n                  <td>0.38</td>\r\n                  <td>610</td>\r\n                  <td>94.2</td>\r\n                  <td>0.93</td>\r\n                  <td>13.66</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>2500</td>\r\n                  <td>0.47</td>\r\n                  <td>762</td>\r\n                  <td>92.5</td>\r\n                  <td>0.91</td>\r\n                  <td>13.42</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>3000</td>\r\n                  <td>0.57</td>\r\n                  <td>914</td>\r\n                  <td>90.8</td>\r\n                  <td>0.90</td>\r\n                  <td>13.17</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>3500</td>\r\n                  <td>0.66</td>\r\n                  <td>1067</td>\r\n                  <td>89.1</td>\r\n                  <td>0.88</td>\r\n                  <td>12.93</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>4000</td>\r\n                  <td>0.76</td>\r\n                  <td>1219</td>\r\n                  <td>87.5</td>\r\n                  <td>0.86</td>\r\n                  <td>12.69</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>4500</td>\r\n                  <td>0.85</td>\r\n                  <td>1372</td>\r\n                  <td>85.9</td>\r\n                  <td>0.85</td>\r\n                  <td>12.46</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>5000</td>\r\n                  <td>0.95</td>\r\n                  <td>1524</td>\r\n                  <td>84.3</td>\r\n                  <td>0.83</td>\r\n                  <td>12.23</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>6000</td>\r\n                  <td>1.14</td>\r\n                  <td>1829</td>\r\n                  <td>81.2</td>\r\n                  <td>0.80</td>\r\n                  <td>11.78</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>7000</td>\r\n                  <td>1.33</td>\r\n                  <td>2134</td>\r\n                  <td>78.2</td>\r\n                  <td>0.77</td>\r\n                  <td>11.34</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>8000</td>\r\n                  <td>1.52</td>\r\n                  <td>2438</td>\r\n                  <td>75.3</td>\r\n                  <td>0.74</td>\r\n                  <td>10.92</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>9000</td>\r\n                  <td>1.70</td>\r\n                  <td>2743</td>\r\n                  <td>72.4</td>\r\n                  <td>0.71</td>\r\n                  <td>10.51</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>10000</td>\r\n                  <td>1.89</td>\r\n                  <td>3048</td>\r\n                  <td>69.7</td>\r\n                  <td>0.69</td>\r\n                  <td>10.11</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>15000</td>\r\n                  <td>2.84</td>\r\n                  <td>4572</td>\r\n                  <td>57.2</td>\r\n                  <td>0.56</td>\r\n                  <td>8.29</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>20000</td>\r\n                  <td>3.79</td>\r\n                  <td>6096</td>\r\n                  <td>46.6</td>\r\n                  <td>0.46</td>\r\n                  <td>6.75</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>25000</td>\r\n                  <td>4.73</td>\r\n                  <td>7620</td>\r\n                  <td>37.6</td>\r\n                  <td>0.37</td>\r\n                  <td>5.45</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>30000</td>\r\n                  <td>5.68</td>\r\n                  <td>9144</td>\r\n                  <td>30.1</td>\r\n                  <td>0.30</td>\r\n                  <td>4.36</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>35000</td>\r\n                  <td>6.63</td>\r\n                  <td>10668</td>\r\n                  <td>23.8</td>\r\n                  <td>0.24</td>\r\n                  <td>3.46</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>40000</td>\r\n                  <td>7.58</td>\r\n                  <td>12192</td>\r\n                  <td>18.8</td>\r\n                  <td>0.19</td>\r\n                  <td>2.72</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>45000</td>\r\n                  <td>8.52</td>\r\n                  <td>13716</td>\r\n                  <td>14.7</td>\r\n                  <td>0.15</td>\r\n                  <td>2.14</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>50000</td>\r\n                  <td>9.47</td>\r\n                  <td>15240</td>\r\n                  <td>11.6</td>\r\n                  <td>0.11</td>\r\n                  <td>1.68</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>55000</td>\r\n                  <td>10.42</td>\r\n                  <td>16764</td>\r\n                  <td>9.1</td>\r\n                  <td>0.09</td>\r\n                  <td>1.32</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>60000</td>\r\n                  <td>11.36</td>\r\n                  <td>18288</td>\r\n                  <td>7.2</td>\r\n                  <td>0.07</td>\r\n                  <td>1.04</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>65000</td>\r\n                  <td>12.31</td>\r\n                  <td>19812</td>\r\n                  <td>5.6</td>\r\n                  <td>0.06</td>\r\n                  <td>0.82</td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <div class=\"atmosphere-table__footer\">\r\n              <span><ion-icon name=\"navigate-outline\" aria-hidden=\"true\"></ion-icon> ردیف سطح دریا برای مقایسه مشخص شده است.</span>\r\n              <span>برای دیدن همه واحدها، جدول را به چپ یا راست بکشید.</span>\r\n            </div>\r\n          </section>\r\n\r\n          <ion-card>\r\n            <ion-img src=\"http://localhost:4300/dl/Site/TunerPlus/altitude-to-pressure-conversion-table.webp\"></ion-img>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </Section>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_atmospheric-pressure_atmospheric-pressure_module_ts.js.map