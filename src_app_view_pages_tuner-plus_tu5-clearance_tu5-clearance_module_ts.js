"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_tu5-clearance_tu5-clearance_module_ts"],{

/***/ 77397:
/*!*************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/tu5-clearance/tu5-clearance-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tu5ClearanceRoutingModule": () => (/* binding */ Tu5ClearanceRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tu5_clearance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tu5-clearance.component */ 4316);




const routes = [{ path: '', component: _tu5_clearance_component__WEBPACK_IMPORTED_MODULE_0__.Tu5ClearanceComponent }];
let Tu5ClearanceRoutingModule = class Tu5ClearanceRoutingModule {
};
Tu5ClearanceRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tu5ClearanceRoutingModule);



/***/ }),

/***/ 4316:
/*!********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/tu5-clearance/tu5-clearance.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tu5ClearanceComponent": () => (/* binding */ Tu5ClearanceComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tu5_clearance_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tu5-clearance.component.html?ngResource */ 85689);
/* harmony import */ var _tu5_clearance_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tu5-clearance.component.scss?ngResource */ 54823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/common/G */ 67122);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/common/Urls */ 35602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/service/site/Slider.service */ 79519);




/* eslint-disable max-len */

/* eslint-disable eqeqeq */

/* eslint-disable @typescript-eslint/naming-convention */












let Tu5ClearanceComponent = class Tu5ClearanceComponent {
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
    this.cubic_capacity = 1587.46;
    this.cr = 10.86;
    this.isShow = false;
    this.check();
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(_this.loadingController);

      _this.siteService.GetTunerPlusById(13).subscribe(res => {
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

  ngOnInit() {
    this.tunerPlusVideo = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.TunerPlusTu5Video;
    this.form = this.fb.group({
      bore: [78.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100000)]],
      strok: [82, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100000)]],
      n: [4, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]]
    });
    this.form2 = this.fb.group({
      bore: [78.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]],
      strok: [82, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]],
      bore_gasket: [80, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]],
      strok_gasket: [0.65, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]],
      h_v: [37, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-1000000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000)]],
      p_v: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-1000000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]]
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

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.cubic_capacity = +(this.pi * this.form.value.bore * this.form.value.bore / 4 * this.form.value.strok / 1000 * this.form.value.n).toFixed(2);
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

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        const gasket = +(this.pi * this.form2.value.bore_gasket * this.form2.value.bore_gasket / 4 * this.form2.value.strok_gasket / 1000);
        const motor = +(this.pi * this.form2.value.bore * this.form2.value.bore / 4 * this.form2.value.strok / 1000);
        const total_v = motor + gasket + +this.form2.value.h_v + +this.form2.value.p_v;
        const left_v = gasket + +this.form2.value.h_v + +this.form2.value.p_v;
        this.cr = +(total_v / left_v).toFixed(2);
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

Tu5ClearanceComponent.ctorParameters = () => [{
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
  type: _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_8__.SliderService
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService
}];

Tu5ClearanceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-tu5-clearance',
  template: _tu5_clearance_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tu5_clearance_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tu5ClearanceComponent);


/***/ }),

/***/ 10722:
/*!*****************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/tu5-clearance/tu5-clearance.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tu5ClearanceModule": () => (/* binding */ Tu5ClearanceModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _tu5_clearance_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tu5-clearance-routing.module */ 77397);
/* harmony import */ var _tu5_clearance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tu5-clearance.component */ 4316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let Tu5ClearanceModule = class Tu5ClearanceModule {
};
Tu5ClearanceModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_tu5_clearance_component__WEBPACK_IMPORTED_MODULE_2__.Tu5ClearanceComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _tu5_clearance_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tu5ClearanceRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ]
    })
], Tu5ClearanceModule);



/***/ }),

/***/ 54823:
/*!*********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/tu5-clearance/tu5-clearance.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ".h_iframe-aparat_embed_frame {\n  position: relative;\n}\n\n.h_iframe-aparat_embed_frame .ratio {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  border-radius: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.video-span {\n  display: block;\n  padding-top: 57%;\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1NS1jbGVhcmFuY2UuY29tcG9uZW50LnNjc3MiLCIuLlxcX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBREY7O0FDaEJFO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QURtQko7O0FDaEJJOzs7RUFHRSx3QkFBQTtFQUNBLG1DQUFBO0FEa0JOOztBQ2ZJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FEaUJOOztBQ2RJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0FEZ0JOOztBQ2RJO0VBQWMsK0JBQUE7RUFBaUMsMEJBQUE7QURrQm5EOztBQ2pCSTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBRG1CTjs7QUNqQkk7RUFBVyxnQ0FBQTtBRG9CZjs7QUNuQkk7RUFBb0Msd0JBQUE7QURzQnhDOztBQ3JCSTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FEdUJOOztBQ3JCSTtFQUFrRCxtQ0FBQTtBRHdCdEQiLCJmaWxlIjoidHU1LWNsZWFyYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3RoZW1lJztcclxuXHJcbi5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSAucmF0aW8ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSBpZnJhbWUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnZpZGVvLXNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiA1NyU7XHJcbn1cclxuXHJcbkBpbmNsdWRlIHR1bmVyLWRhcmstdGhlbWU7XHJcbiIsIi8vIEtlZXAgdGhlIG9yaWdpbmFsIGxpZ2h0IGNvbG9yIGF0IGVhY2ggY2FsbCBzaXRlLiBUb2tlbnMgZXhpc3Qgb25seSBpbiBkYXJrIG1vZGUuXG5AZnVuY3Rpb24gdHVuZXItY29sb3IoJHJvbGUsICRsaWdodCkge1xuICBAcmV0dXJuIHZhcigtLXR1bmVyLSN7JHJvbGV9LCAjeyRsaWdodH0pO1xufVxuXG5AbWl4aW4gdHVuZXItZGFyay10aGVtZSB7XG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XG4gICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgIC0tdHVuZXItcGFnZTogIzExMTUxZTtcbiAgICAtLXR1bmVyLXN1cmZhY2U6ICMxYzIyMzA7XG4gICAgLS10dW5lci1zb2Z0OiAjMjUyZTNkO1xuICAgIC0tdHVuZXItYm9yZGVyOiAjNDY1MjY5O1xuICAgIC0tdHVuZXItdGV4dDogI2VkZjFmODtcbiAgICAtLXR1bmVyLW11dGVkOiAjYjJiZmQxO1xuICAgIC0tdHVuZXItaGVhZGVyOiByZ2JhKDI4LCAzNCwgNDgsIDAuOTQpO1xuICAgIC0tdHVuZXItb3ZlcmxheTogcmdiYSgyOCwgMzQsIDQ4LCAwLjk1KTtcbiAgICAtLXR1bmVyLXB1cnBsZS10ZXh0OiAjYzRiNWZkO1xuICAgIC0tdHVuZXItcHVycGxlLXNvZnQ6ICMzMDI0NDQ7XG4gICAgLS10dW5lci1wdXJwbGUtYm9yZGVyOiAjNzI1NzliO1xuICAgIC0tdHVuZXItaW5mby10ZXh0OiAjOTNjNWZkO1xuICAgIC0tdHVuZXItaW5mby1zb2Z0OiAjMWQzMDRjO1xuICAgIC0tdHVuZXItaW5mby1ib3JkZXI6ICM0NjZiOWE7XG4gICAgLS10dW5lci13YXJuaW5nLXRleHQ6ICNmY2Q0Nzc7XG4gICAgLS10dW5lci13YXJuaW5nLXNvZnQ6ICMzYjMwMjA7XG4gICAgLS10dW5lci13YXJuaW5nLWJvcmRlcjogIzkzNzQzZDtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtdGV4dDogIzg2ZWZhYztcbiAgICAtLXR1bmVyLXN1Y2Nlc3Mtc29mdDogIzE5MzkyZTtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtYm9yZGVyOiAjNDE3ZDYwO1xuICAgIC0tdHVuZXItZGFuZ2VyLXRleHQ6ICNmZGE0YWY7XG4gICAgLS10dW5lci1kYW5nZXItc29mdDogIzQwMjYzMTtcbiAgICAtLXR1bmVyLWRhbmdlci1ib3JkZXI6ICM5ODUzNjc7XG4gICAgLS10dW5lci10ZWFsLXRleHQ6ICM3ZGU0ZDQ7XG4gICAgLS10dW5lci10ZWFsLXNvZnQ6ICMxOTNhM2E7XG4gICAgLS10dW5lci10ZWFsLWJvcmRlcjogIzQzN2Y3YztcblxuICAgIC8vIE5hdGl2ZSBjb250cm9scyB3aXRob3V0IGFuIGV4cGxpY2l0IGxpZ2h0IGJhY2tncm91bmQgbmVlZCBhIGRhcmsgc3VyZmFjZSB0b28uXG4gICAgaW5wdXQ6bm90KFt0eXBlPSdyYW5nZSddKTpub3QoW3R5cGU9J2NoZWNrYm94J10pOm5vdChbdHlwZT0ncmFkaW8nXSk6bm90KFt0eXBlPSdidXR0b24nXSk6bm90KFt0eXBlPSdzdWJtaXQnXSk6bm90KFt0eXBlPSdmaWxlJ10pLFxuICAgIHRleHRhcmVhLFxuICAgIHNlbGVjdCB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG5cbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpO1xuICAgICAgb3BhY2l0eTogMC43NTtcbiAgICB9XG5cbiAgICBpb24taGVhZGVyLmxlYXJuaW5nLWhlYWRlciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQgeyAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXBhZ2UpOyAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkOm5vdChbY29sb3JdKSwgaW9uLWxpc3QsIGlvbi1pdGVtOm5vdChbY29sb3JdKSwgaW9uLWl0ZW0tZGl2aWRlcjpub3QoW2NvbG9yXSkge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1saXN0IHsgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7IH1cbiAgICBpb24tY2FyZC10aXRsZSwgaW9uLWNhcmQtc3VidGl0bGUgeyBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZFtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWl0ZW1bY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1mYWItYnV0dG9uW2NvbG9yPSdsaWdodGVzdCddIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuICAgIGlvbi10ZXh0W2NvbG9yPSdkYXJrJ10sIGlvbi1sYWJlbFtjb2xvcj0nZGFyayddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 85689:
/*!*********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/tu5-clearance/tu5-clearance.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TunerPlus\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\"\r\n      >محاسبات تیو5</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"search()\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <Section *ngIf=\"!isCheck\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه حجم موتور</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"ellipse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر سیلندر (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"78.5\"\r\n                    formControlName=\"bore\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('bore')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"egg-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >کورس پیستون (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"82\"\r\n                    formControlName=\"strok\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('strok')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"discord\"\r\n                    slot=\"start\"\r\n                    name=\"ellipsis-horizontal-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >تعداد سیلندر</ion-label\r\n                  >\r\n                  <ion-input placeholder=\"4\" formControlName=\"n\" type=\"number\">\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('n')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </ion-card>\r\n          </form>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >حجم موتور</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >cm<sup>3</sup></ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ cubic_capacity }}\r\n                  </ion-text>\r\n                  &nbsp;cm<sup>3</sup>\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <form [formGroup]=\"form2\" (ngSubmit)=\"onCalc2()\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه نسبت تراکم</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"ellipse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر سیلندر (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"78.5\"\r\n                    formControlName=\"bore\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('bore')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"egg-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >کورس پیستون (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"82\"\r\n                    formControlName=\"strok\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('strok')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"ellipse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر واشر (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"80\"\r\n                    formControlName=\"bore_gasket\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('bore_gasket')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"egg-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >ضخامت واشر (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"0.65\"\r\n                    formControlName=\"strok_gasket\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('strok_gasket')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"discord\"\r\n                    slot=\"start\"\r\n                    name=\"cube-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >حجم محفظه ی سرسیلندر</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"37\"\r\n                    formControlName=\"h_v\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('h_v')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"disc-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >حجم سر پیستون</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"0\"\r\n                    formControlName=\"p_v\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('p_v')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form2.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset2()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </ion-card>\r\n          </form>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >نسبت تراکم</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\">CR</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ cr }}\r\n                  </ion-text>\r\n                  &nbsp;:&nbsp;1\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\">اندازه ها و خلاصی ها</ion-card-subtitle>\r\n              <ion-card-title class=\"text-center\">موتور tu5jp4</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-grid fixed dir=\"rtl\">\r\n              <div style=\"overflow-x: auto\">\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> عنوان </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    mm\r\n                  </ion-col>\r\n                </ion-row>\r\n                <hr />\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ارتفاع سرسیلندر استاندارد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    135.8\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ارتفاع مجاز سرسیلندر\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    135.6\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    حجم تقریبی محفظه احتراق\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    37 cc\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ارتفاع فنر در نیروی 21.8 dN.m\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    34.2\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ارتفاع فنر در نیروی 45 dN.m\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    26\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر سوپاپ دود\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    24.3\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> قطر سوپاپ هوا </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    31.2\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\"> قطر ساق سوپاپ </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    5.8\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ارتفاع سوپاپ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    104.3\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    لقی مجاز سوپاپ داخل گاید\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.15 ~ 0.30\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ارتفاع بلوک سیلندر\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    265.23 ± 0.1\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر سیلندر استاندارد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    78.5\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر سیلندرتعمیری\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    78.9\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر کپه یاتاقان ثابت استاندارد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    49.981\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر کپه یاتاقان ثابت تعمیر اول\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    49.681\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر کپه یاتاقان متحرک استاندارد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    45\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر کپه یاتاقان متحرک تعمیر اول\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    44.7\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر کپه ته میل لنگ استاندارد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    85\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    قطر کپه ته میل لنگ تعمیر اول\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    84.8\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    طول کفه کپه ثابت میل لنگ استاندارد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    23.6\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    طول کفه کپه ثابت میل لنگ تعمیر اول\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    23.8\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    خلاصی یاتاقان های میل لنگ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.05\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت بغل یاتاقان استاندارد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    2.45\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت بغل یاتاقان تعمیر اول\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    2.50\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    طول پیچ استاندارد سرسیلندر\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    122 ± 0.3\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    حداکثر طول مجاز پیچ سرسیلندر\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    122.6\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ارتفاع پیستون\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    50\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت رینگ اول\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    1.2\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت رینگ دوم\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    1.5\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت رینگ روغن\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    2.5\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    خلاصی مجاز دهنه رینگ اول\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.255 ~ 0.332\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    خلاصی مجاز دهنه رینگ دوم\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.265 ~ 0.351\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    خلاصی مجاز دهنه رینگ روغن\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.30 ~ 0.38\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ميزان مجاز لقی افقی میل لنگ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.07 ~ 0.27\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    خلاصی بین دندونه های چرخدنده اویل پمپ با دیواره\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.15\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    خلاصی بین جفت دندونه های چرخدنده اویل پمپ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.07\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    گشتاور پیچ یاتاقان ثابت\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    20N.m + 44°c\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    گشتاور یاتاقان متحرک\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    40N.m\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    تعداد دندونه های زنجیر اویل پمپ\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    42\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت واشر سرسیلندر استاندارد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.66 ± 0.04\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    ضخامت واشر سرسیلندر تعمیری\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.86\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    لیفت سوپاپ هوا\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    8\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    لیفت سوپاپ دود\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    7.8\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    بستن پیچ سرسیلندر مرحله ی اول\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    2N.m\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    بستن پیچ سرسیلندر مرحله دوم\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    8 ~ 10N.m\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    بستن پیچ سرسیلندر مرحله سوم\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    20N.m\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    پیچ های سرسیلندر طی دو مرحله\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    130°c\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    فاصله ی دهانه ی سر شمع (گپ)\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    0.9\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    زمان تعویض شمع\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    25000 ~ 30000Km\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    شمع استاندارد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    SAGEM EYQUEM RFN58LZ\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    شمع استاندارد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    BOSCH SUPER BNA R13-318\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    روغن موتور مناسب هوای گرم\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    10W-40\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    روغن موتور مناسب هوای سرد\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    5W-40\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    سطح کیفی روغن موتور\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    SM - SN\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"9\" class=\"min-width\">\r\n                    زمان تعویض روغن موتور\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"text-center min-width\">\r\n                    20000Km یا هر 3 ماه\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-grid>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-label\r\n                >ویدیو آموزش استفاده از محاسبات تیو5 تیونر پلاس</ion-label\r\n              >\r\n              <ion-icon\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"arrow-down-circle-outline\"\r\n              ></ion-icon>\r\n            </ion-item>\r\n\r\n            <div class=\"h_iframe-aparat_embed_frame\">\r\n              <span class=\"video-span\"></span\r\n              ><iframe\r\n                [src]=\"checkURL()\"\r\n                title=\"ویدیو آموزش استفاده از محاسبات تیو5 تیونر پلاس ویژه اول آموز\"\r\n                allowfullscreen=\"true\"\r\n                webkitallowfullscreen=\"true\"\r\n                mozallowfullscreen=\"true\"\r\n              ></iframe>\r\n            </div>\r\n\r\n            <ion-item>\r\n              <ion-label>{{\r\n                \"ویدیو آموزش استفاده از محاسبات تیو5 تیونر پلاس\"\r\n              }}</ion-label>\r\n              <a\r\n                class=\"decoration-none\"\r\n                [href]=\"checkVideoUrl()\"\r\n                target=\"_blank\"\r\n                title=\"ویدیو آموزش استفاده از محاسبات تیو5 تیونر پلاس ویژه اول آموز\"\r\n                ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"icon-only\"\r\n                    name=\"download-outline\"\r\n                  ></ion-icon> </ion-button\r\n              ></a>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </Section>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_tu5-clearance_tu5-clearance_module_ts.js.map