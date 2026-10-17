"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_cam-timing_cam-timing_module_ts"],{

/***/ 11183:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cam-timing/cam-timing-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamTimingPageRoutingModule": () => (/* binding */ CamTimingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _cam_timing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cam-timing.component */ 62894);




const routes = [
    {
        path: '',
        component: _cam_timing_component__WEBPACK_IMPORTED_MODULE_0__.CamTimingPage
    }
];
let CamTimingPageRoutingModule = class CamTimingPageRoutingModule {
};
CamTimingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CamTimingPageRoutingModule);



/***/ }),

/***/ 62894:
/*!**************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cam-timing/cam-timing.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamTimingPage": () => (/* binding */ CamTimingPage)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cam_timing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cam-timing.component.html?ngResource */ 63363);
/* harmony import */ var _cam_timing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cam-timing.component.scss?ngResource */ 64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/Urls */ 35602);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);
/* harmony import */ var _cam_timing_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cam-timing.util */ 13239);




/* eslint-disable eqeqeq */












let CamTimingPage = class CamTimingPage {
  constructor(fb, router, alertController, loadingController, toastController, siteService, courseService) {
    this.fb = fb;
    this.router = router;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.siteService = siteService;
    this.courseService = courseService;
    this.isCheck = true;
    this.queryText = '';
    this.showSearchbar = false;
    this.activeMode = 'specs';
    this.measurementBasis = 'advertised';
    this.result = null;
    this.resultWarning = '';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
    this.check();
  }

  ngOnInit() {
    this.form = this.fb.group({
      intakeDuration: [220, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(150), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(360)]],
      exhaustDuration: [220, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(150), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(360)]],
      lobeSeparation: [110, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(70), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(145)]],
      advance: [4, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(-30), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(30)]]
    });
    this.form2 = this.fb.group({
      intakeOpenBtdc: [4, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(-180), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(180)]],
      intakeCloseAbdc: [36, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(-180), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(180)]],
      exhaustOpenBbdc: [44, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(-180), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(180)]],
      exhaustCloseAtdc: [-4, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(-180), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(180)]]
    });
    this.subscriptions.add(this.form.valueChanges.subscribe(() => {
      if (this.activeMode === 'specs') {
        this.recalculate();
      }
    }));
    this.subscriptions.add(this.form2.valueChanges.subscribe(() => {
      if (this.activeMode === 'events') {
        this.recalculate();
      }
    }));
    this.recalculate();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  selectMode(mode) {
    this.activeMode = mode;
    this.recalculate();
  }

  recalculate() {
    const active = this.activeMode === 'specs' ? this.form : this.form2;

    if (!active || active.invalid) {
      this.result = null;
      this.resultWarning = 'مقادیر را در بازهٔ مجاز وارد کنید.';
      return;
    }

    const values = active.getRawValue();
    const numbers = Object.keys(values).map(key => Number(values[key]));

    if (numbers.some(value => !Number.isFinite(value))) {
      this.result = null;
      this.resultWarning = 'همهٔ ورودی‌ها باید عدد معتبر باشند.';
      return;
    }

    const result = this.activeMode === 'specs' ? (0,_cam_timing_util__WEBPACK_IMPORTED_MODULE_8__.timingFromSpecs)({
      intakeDuration: Number(values.intakeDuration),
      exhaustDuration: Number(values.exhaustDuration),
      lobeSeparation: Number(values.lobeSeparation),
      advance: Number(values.advance)
    }) : (0,_cam_timing_util__WEBPACK_IMPORTED_MODULE_8__.timingFromEvents)({
      intakeOpenBtdc: Number(values.intakeOpenBtdc),
      intakeCloseAbdc: Number(values.intakeCloseAbdc),
      exhaustOpenBbdc: Number(values.exhaustOpenBbdc),
      exhaustCloseAtdc: Number(values.exhaustCloseAtdc)
    });

    if (result.intakeDuration <= 0 || result.exhaustDuration <= 0 || result.intakeCenterline <= 0 || result.exhaustCenterline <= 0) {
      this.result = null;
      this.resultWarning = 'ترکیب رویدادها دوریشن یا سنترلاین فیزیکی معتبر نمی‌سازد.';
      return;
    }

    this.result = result;

    if (result.intakeDuration < 150 || result.exhaustDuration < 150 || result.intakeDuration > 360 || result.exhaustDuration > 360) {
      this.resultWarning = 'دوریشن حاصل خارج از بازهٔ رایج است؛ علامت و مبنای رویدادها را بررسی کنید.';
    } else if (result.lobeSeparation < 85 || result.lobeSeparation > 125) {
      this.resultWarning = 'LSA حاصل غیرمعمول است؛ زاویه‌ها و مبنای اندازه‌گیری را دوباره کنترل کنید.';
    } else if (result.overlap < 0) {
      this.resultWarning = 'همپوشانی منفی یعنی اطراف TDC بازه‌ای وجود دارد که هیچ‌یک از دو سوپاپ باز نیست.';
    } else {
      this.resultWarning = '';
    }
  }

  onReset() {
    if (this.activeMode === 'specs') {
      this.form.reset({
        intakeDuration: 220,
        exhaustDuration: 220,
        lobeSeparation: 110,
        advance: 4
      });
    } else {
      this.form2.reset({
        intakeOpenBtdc: 4,
        intakeCloseAbdc: 36,
        exhaustOpenBbdc: 44,
        exhaustCloseAtdc: -4
      });
    }
  }

  useResultInOtherMode() {
    if (!this.result) {
      return;
    }

    if (this.activeMode === 'specs') {
      this.form2.patchValue({
        intakeOpenBtdc: this.result.intakeOpenBtdc,
        intakeCloseAbdc: this.result.intakeCloseAbdc,
        exhaustOpenBbdc: this.result.exhaustOpenBbdc,
        exhaustCloseAtdc: this.result.exhaustCloseAtdc
      }, {
        emitEvent: false
      });
      this.selectMode('events');
    } else {
      this.form.patchValue({
        intakeDuration: this.result.intakeDuration,
        exhaustDuration: this.result.exhaustDuration,
        lobeSeparation: this.result.lobeSeparation,
        advance: this.result.advance
      }, {
        emitEvent: false
      });
      this.selectMode('specs');
    }
  }

  eventLabel(value, positive, negative, zero) {
    if (value === 0) {
      return '0° ' + zero;
    }

    const absolute = Math.abs(value).toFixed(1).replace(/\.0$/, '');
    return absolute + '° ' + (value > 0 ? positive : negative);
  }

  onInfo(type) {
    const messages = {
      intakeDuration: 'دوریشن هوا برحسب درجهٔ میل‌لنگ، در مبنای لیفتی که انتخاب کرده‌اید. دوریشن advertised و 0.050 اینچ یکسان نیستند.',
      exhaustDuration: 'دوریشن دود را در همان مبنای اندازه‌گیری دوریشن هوا وارد کنید.',
      lobeSeparation: 'LSA میانگین سنترلاین هوای نصب‌شده و سنترلاین دود است. به‌تنهایی با جابه‌جایی میل‌سوپاپ تغییر نمی‌کند.',
      advance: 'ادونس مثبت، سنترلاین هوا را پایین‌تر می‌آورد: ICL = LSA − Advance. مقدار منفی یعنی ریتارد.',
      intakeOpenBtdc: 'بازشدن هوا قبل از TDC همپوشانی. اگر پس از TDC باز می‌شود مقدار منفی وارد کنید.',
      intakeCloseAbdc: 'بسته‌شدن هوا بعد از BDC مکش. اگر پیش از BDC بسته می‌شود مقدار منفی وارد کنید.',
      exhaustOpenBbdc: 'بازشدن دود قبل از BDC قدرت. اگر پس از BDC باز می‌شود مقدار منفی وارد کنید.',
      exhaustCloseAtdc: 'بسته‌شدن دود بعد از TDC همپوشانی. اگر پیش از TDC بسته می‌شود مقدار منفی وارد کنید.'
    };
    this.presentActiveAlertConfirm(messages[type] || 'برای این پارامتر توضیحی موجود نیست.');
  }

  presentActiveAlertConfirm(message) {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'راهنمای پارامتر',
        message,
        buttons: ['بستن']
      });
      yield alert.present();
    })();
  }

  onCancel() {
    this.showSearchbar = false;
  }

  search() {
    if (!this.queryText?.trim()) {
      return;
    }

    this.router.navigate(['Home', 'Search'], {
      queryParams: {
        title: this.queryText
      }
    });
  }

  goTop() {
    this.content?.scrollToTop(300);
  }

  onNavigate(url) {
    this.router.navigateByUrl(url);
  }

  check() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(_this2.loadingController);

      _this2.siteService.GetTunerPlusById(22).subscribe(res => {
        if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
          if (res.data.isActive) {
            if (!res.data.isFree) {
              _this2.courseService.GetUserCoursesId().subscribe(ress => {
                if (ress.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
                  let found = false;
                  res.data.courseIds.forEach(courseId => {
                    if (ress.data.find(n => n == courseId)) {
                      found = true;

                      _this2.courseService.GetUserTunerPlusAccess().subscribe(resss => {
                        if (resss.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
                          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this2.loadingController);
                          _this2.isCheck = false;
                        } else {
                          _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this2.loadingController);
                        }
                      }, errs => {
                        _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this2.loadingController);
                      });
                    }
                  });

                  if (!found) {
                    _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this2.loadingController);
                  }
                } else {
                  _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                  src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this2.loadingController);
                }
              }, errs => {
                _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this2.loadingController);
              });
            } else {
              src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this2.loadingController);
              _this2.isCheck = false;
            }
          } else {
            _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this2.loadingController);
          }
        } else {
          _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this2.loadingController);
        }
      }, err => {
        _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this2.loadingController);
      });
    })();
  }

};

CamTimingPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__.SliderService
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__.CourseService
}];

CamTimingPage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent]
  }]
};
CamTimingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-cam-timing',
  template: _cam_timing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cam_timing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CamTimingPage);


/***/ }),

/***/ 97864:
/*!***********************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cam-timing/cam-timing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamTimingPageModule": () => (/* binding */ CamTimingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cam_timing_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cam-timing-routing.module */ 11183);
/* harmony import */ var _cam_timing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cam-timing.component */ 62894);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let CamTimingPageModule = class CamTimingPageModule {
};
CamTimingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _cam_timing_routing_module__WEBPACK_IMPORTED_MODULE_1__.CamTimingPageRoutingModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ],
        declarations: [_cam_timing_component__WEBPACK_IMPORTED_MODULE_2__.CamTimingPage]
    })
], CamTimingPageModule);



/***/ }),

/***/ 13239:
/*!*********************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cam-timing/cam-timing.util.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timingFromEvents": () => (/* binding */ timingFromEvents),
/* harmony export */   "timingFromSpecs": () => (/* binding */ timingFromSpecs)
/* harmony export */ });
const round = (value) => Math.round((value + Number.EPSILON) * 10) / 10;
// All events are signed crankshaft degrees. A negative IO means ATDC;
// a negative EC means BTDC. Both durations must use the same checking lift.
function timingFromSpecs(specs) {
    const intakeCenterline = specs.lobeSeparation - specs.advance;
    const exhaustCenterline = specs.lobeSeparation + specs.advance;
    const intakeOpenBtdc = specs.intakeDuration / 2 - intakeCenterline;
    const intakeCloseAbdc = specs.intakeDuration / 2 + intakeCenterline - 180;
    const exhaustOpenBbdc = specs.exhaustDuration / 2 + exhaustCenterline - 180;
    const exhaustCloseAtdc = specs.exhaustDuration / 2 - exhaustCenterline;
    return {
        intakeDuration: round(specs.intakeDuration),
        exhaustDuration: round(specs.exhaustDuration),
        lobeSeparation: round(specs.lobeSeparation),
        advance: round(specs.advance),
        intakeCenterline: round(intakeCenterline),
        exhaustCenterline: round(exhaustCenterline),
        intakeOpenBtdc: round(intakeOpenBtdc),
        intakeCloseAbdc: round(intakeCloseAbdc),
        exhaustOpenBbdc: round(exhaustOpenBbdc),
        exhaustCloseAtdc: round(exhaustCloseAtdc),
        overlap: round(intakeOpenBtdc + exhaustCloseAtdc),
    };
}
function timingFromEvents(events) {
    const intakeDuration = 180 + events.intakeOpenBtdc + events.intakeCloseAbdc;
    const exhaustDuration = 180 + events.exhaustOpenBbdc + events.exhaustCloseAtdc;
    const intakeCenterline = intakeDuration / 2 - events.intakeOpenBtdc;
    const exhaustCenterline = exhaustDuration / 2 - events.exhaustCloseAtdc;
    return timingFromSpecs({
        intakeDuration,
        exhaustDuration,
        lobeSeparation: (intakeCenterline + exhaustCenterline) / 2,
        advance: (exhaustCenterline - intakeCenterline) / 2,
    });
}


/***/ }),

/***/ 64411:
/*!***************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cam-timing/cam-timing.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".cam-page {\n  --background: var(--ion-background-color);\n}\n\n.cam-shell {\n  max-width: 1250px;\n  margin: auto;\n  padding: clamp(14px, 3vw, 34px);\n  color: var(--ion-text-color);\n}\n\n.cam-hero {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 210px;\n  align-items: center;\n  gap: 24px;\n  min-height: 252px;\n  padding: clamp(24px, 4vw, 42px);\n  overflow: hidden;\n  border-radius: 26px;\n  color: #fff;\n  background: radial-gradient(circle at 85% 15%, rgba(223, 50, 54, 0.28), transparent 32%), linear-gradient(135deg, #222329, #111317);\n  box-shadow: 0 22px 50px rgba(14, 16, 20, 0.2);\n}\n\n.cam-kicker {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: #f2a3a3;\n  font-size: 0.73rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n}\n\n.cam-hero h1 {\n  max-width: 650px;\n  margin: 13px 0 10px;\n  font-size: clamp(1.45rem, 3vw, 2.3rem);\n  line-height: 1.45;\n}\n\n.cam-hero p {\n  max-width: 640px;\n  margin: 0;\n  color: #c9cbd0;\n  font-size: 0.9rem;\n  line-height: 1.9;\n}\n\n.cam-hero__tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 22px;\n}\n\n.cam-hero__tags span {\n  padding: 6px 12px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.06);\n  color: #e5e6e8;\n  font-size: 0.73rem;\n}\n\n.cam-hero__dial {\n  display: grid;\n  place-items: center;\n  width: 192px;\n  height: 192px;\n  margin: auto;\n  border: 2px dashed rgba(245, 124, 124, 0.62);\n  border-radius: 50%;\n  box-shadow: 0 0 0 11px rgba(255, 255, 255, 0.04);\n}\n\n.cam-hero__dial-inner {\n  display: grid;\n  justify-items: center;\n  align-content: center;\n  width: 156px;\n  height: 156px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.04);\n}\n\n.cam-hero__dial-inner ion-icon {\n  color: #f2a3a3;\n  font-size: 1.45rem;\n}\n\n.cam-hero__dial-inner strong {\n  margin-top: 3px;\n  font-size: 2.65rem;\n  line-height: 1.1;\n}\n\n.cam-hero__dial-inner small {\n  margin-top: 4px;\n  color: #c9cbd0;\n  font-size: 0.69rem;\n}\n\n.cam-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);\n  align-items: start;\n  gap: 18px;\n  margin-top: 22px;\n}\n\n.cam-panel {\n  min-width: 0;\n  padding: clamp(20px, 2.8vw, 30px);\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.18);\n  border-radius: 22px;\n  background: var(--ion-item-background, var(--ion-background-color));\n  box-shadow: 0 10px 28px rgba(16, 18, 22, 0.06);\n}\n\n.cam-panel__heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.cam-panel__heading span {\n  color: var(--ion-color-danger);\n  font-size: 0.72rem;\n  font-weight: 800;\n}\n\n.cam-panel__heading h2 {\n  margin: 5px 0 0;\n  color: var(--ion-text-color);\n  font-size: 1.28rem;\n}\n\n.cam-panel__heading > ion-icon {\n  color: var(--ion-color-danger);\n  font-size: 1.6rem;\n}\n\n.cam-mode-switch {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 6px;\n  margin-top: 22px;\n  padding: 5px;\n  border-radius: 13px;\n  background: rgba(var(--ion-color-medium-rgb), 0.11);\n}\n\n.cam-mode-switch button {\n  padding: 10px 8px;\n  border: 0;\n  border-radius: 9px;\n  color: var(--ion-color-medium);\n  background: transparent;\n  font: inherit;\n  font-size: 0.82rem;\n  font-weight: 750;\n  cursor: pointer;\n}\n\n.cam-mode-switch button.active {\n  color: #fff;\n  background: var(--ion-color-danger);\n  box-shadow: 0 5px 11px rgba(var(--ion-color-danger-rgb), 0.18);\n}\n\n.cam-basis {\n  display: grid;\n  gap: 7px;\n  margin-top: 21px;\n}\n\n.cam-basis label {\n  color: var(--ion-text-color);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n\n.cam-basis select {\n  width: 100%;\n  padding: 12px 13px;\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.23);\n  border-radius: 12px;\n  color: var(--ion-text-color);\n  background: var(--ion-background-color);\n  font: inherit;\n}\n\n.cam-basis select:focus-visible {\n  outline: 2px solid var(--ion-color-danger);\n  outline-offset: 2px;\n}\n\n.cam-basis p {\n  margin: 0;\n  color: var(--ion-color-medium);\n  font-size: 0.75rem;\n  line-height: 1.75;\n}\n\n.cam-fields {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 11px;\n  margin-top: 17px;\n}\n\n.cam-field {\n  display: block;\n  min-width: 0;\n  padding: 13px 14px;\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.19);\n  border-radius: 14px;\n  background: var(--ion-background-color);\n}\n\n.cam-field > span {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 6px;\n  color: var(--ion-text-color);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n\n.cam-field small {\n  color: var(--ion-color-medium);\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n\n.cam-field > div {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.cam-field input {\n  width: 100%;\n  min-width: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  color: var(--ion-text-color);\n  background: transparent;\n  font: inherit;\n  font-size: 1.12rem;\n  font-weight: 800;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n}\n\n.cam-field:focus-within {\n  border-color: var(--ion-color-danger);\n  box-shadow: 0 0 0 3px rgba(var(--ion-color-danger-rgb), 0.12);\n}\n\n.cam-field button {\n  flex: none;\n  padding: 4px;\n  border: 0;\n  color: var(--ion-color-medium);\n  background: transparent;\n  font-size: 1.22rem;\n  cursor: pointer;\n}\n\n.cam-signed-note {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin: 18px 0 0;\n  padding: 12px;\n  border-radius: 11px;\n  color: var(--ion-color-medium);\n  background: rgba(var(--ion-color-medium-rgb), 0.08);\n  font-size: 0.77rem;\n  line-height: 1.75;\n}\n\n.cam-signed-note ion-icon {\n  flex: none;\n  margin-top: 2px;\n  color: var(--ion-color-danger);\n  font-size: 1.13rem;\n}\n\n.cam-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 15px;\n}\n\n.cam-actions button, .cam-transfer {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 13px;\n  border: 0;\n  border-radius: 10px;\n  color: var(--ion-color-danger);\n  background: rgba(var(--ion-color-danger-rgb), 0.1);\n  font: inherit;\n  font-size: 0.82rem;\n  font-weight: 750;\n  cursor: pointer;\n}\n\n.cam-primary {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-top: 22px;\n}\n\n.cam-primary > div {\n  padding: 20px;\n  border-radius: 16px;\n  color: #fff;\n  background: linear-gradient(135deg, #a12b2f, #c93b3d);\n}\n\n.cam-primary > div:nth-child(2) {\n  background: linear-gradient(135deg, #33373c, #191c21);\n}\n\n.cam-primary span, .cam-primary small {\n  display: block;\n  font-size: 0.73rem;\n  opacity: 0.87;\n}\n\n.cam-primary strong {\n  display: block;\n  margin: 7px 0 3px;\n  font-size: clamp(1.65rem, 3vw, 2.5rem);\n  line-height: 1.1;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.cam-metrics {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px;\n  margin-top: 9px;\n}\n\n.cam-metrics > div {\n  padding: 13px;\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.18);\n  border-radius: 12px;\n  background: var(--ion-background-color);\n}\n\n.cam-metrics span, .cam-metrics small {\n  display: block;\n  color: var(--ion-color-medium);\n  font-size: 0.72rem;\n}\n\n.cam-metrics strong {\n  display: block;\n  margin: 6px 0 2px;\n  color: var(--ion-text-color);\n  font-size: 0.98rem;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.cam-events {\n  margin-top: 19px;\n  padding: 15px;\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.18);\n  border-radius: 14px;\n  background: var(--ion-background-color);\n}\n\n.cam-events h3 {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin: 0 0 8px;\n  color: var(--ion-text-color);\n  font-size: 0.93rem;\n}\n\n.cam-events h3 small, .cam-events div span small {\n  color: var(--ion-color-medium);\n  font-size: 0.68rem;\n  font-weight: 500;\n}\n\n.cam-events > div {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 0;\n  border-top: 1px solid rgba(var(--ion-color-medium-rgb), 0.15);\n  font-size: 0.79rem;\n}\n\n.cam-events > div > span:nth-child(2) {\n  color: var(--ion-text-color);\n}\n\n.cam-events strong {\n  margin-right: auto;\n  color: var(--ion-text-color);\n  font-size: 0.88rem;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.cam-dot {\n  width: 8px;\n  height: 8px;\n  flex: none;\n  border-radius: 50%;\n}\n\n.cam-dot--intake {\n  background: #d64242;\n}\n\n.cam-dot--exhaust {\n  background: var(--tuner-border, #747b84);\n}\n\n.cam-transfer {\n  width: 100%;\n  justify-content: center;\n  margin-top: 13px;\n}\n\n.cam-dcr-link {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 14px;\n  padding: 12px;\n  border-radius: 11px;\n  color: var(--ion-text-color);\n  background: rgba(var(--ion-color-danger-rgb), 0.08);\n}\n\n.cam-dcr-link ion-icon {\n  flex: none;\n  color: var(--ion-color-danger);\n  font-size: 1.2rem;\n}\n\n.cam-dcr-link p {\n  flex: 1;\n  margin: 0;\n  font-size: 0.74rem;\n  line-height: 1.6;\n}\n\n.cam-dcr-link a {\n  flex: none;\n  color: var(--ion-color-danger);\n  font-size: 0.75rem;\n  font-weight: 750;\n}\n\n.cam-warning {\n  display: flex;\n  gap: 7px;\n  margin: 15px 0 0;\n  padding: 11px;\n  border-radius: 10px;\n  color: var(--ion-text-color);\n  background: rgba(var(--ion-color-warning-rgb), 0.15);\n  font-size: 0.78rem;\n  line-height: 1.7;\n}\n\n.cam-warning ion-icon {\n  flex: none;\n  margin-top: 2px;\n  color: var(--ion-color-warning-shade);\n  font-size: 1.1rem;\n}\n\n.cam-disclaimer {\n  margin: 16px 0 0;\n  color: var(--ion-color-medium);\n  font-size: 0.78rem;\n  line-height: 1.8;\n}\n\n.cam-empty {\n  display: grid;\n  justify-items: center;\n  gap: 8px;\n  margin: 22px 0;\n  padding: 34px;\n  border: 1px dashed rgba(var(--ion-color-medium-rgb), 0.3);\n  border-radius: 14px;\n  color: var(--ion-color-medium);\n  text-align: center;\n}\n\n.cam-empty ion-icon {\n  font-size: 1.8rem;\n}\n\n.cam-empty p {\n  margin: 0;\n}\n\n@media (max-width: 800px) {\n  .cam-hero {\n    grid-template-columns: 1fr;\n  }\n\n  .cam-hero__dial {\n    display: none;\n  }\n\n  .cam-layout {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 490px) {\n  .cam-shell {\n    padding: 12px;\n  }\n\n  .cam-hero {\n    border-radius: 19px;\n  }\n\n  .cam-panel {\n    padding: 17px;\n  }\n\n  .cam-fields, .cam-metrics {\n    grid-template-columns: 1fr;\n  }\n\n  .cam-primary {\n    gap: 6px;\n  }\n\n  .cam-primary > div {\n    padding: 14px;\n  }\n\n  .cam-dcr-link {\n    flex-wrap: wrap;\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .cam-hero, .cam-panel {\n    animation: cam-enter 0.55s ease both;\n  }\n\n  .cam-panel:nth-child(2) {\n    animation-delay: 0.08s;\n  }\n\n  @keyframes cam-enter {\n    from {\n      opacity: 0;\n      transform: translateY(12px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbS10aW1pbmcuY29tcG9uZW50LnNjc3MiLCIuLlxcX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFBWSx5Q0FBQTtBQUFaOztBQUNBO0VBQWEsaUJBQUE7RUFBbUIsWUFBQTtFQUFjLCtCQUFBO0VBQWlDLDRCQUFBO0FBTS9FOztBQUxBO0VBQVksYUFBQTtFQUFlLDJDQUFBO0VBQTZDLG1CQUFBO0VBQXFCLFNBQUE7RUFBVyxpQkFBQTtFQUFtQiwrQkFBQTtFQUFpQyxnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixXQUFBO0VBQWEsbUlBQUE7RUFBb0ksNkNBQUE7QUFtQnBWOztBQWxCQTtFQUFjLG9CQUFBO0VBQXNCLG1CQUFBO0VBQXFCLFFBQUE7RUFBVSxjQUFBO0VBQWdCLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLHFCQUFBO0FBNEJ4SDs7QUEzQkE7RUFBZSxnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixzQ0FBQTtFQUF3QyxpQkFBQTtBQWtDOUY7O0FBakNBO0VBQWMsZ0JBQUE7RUFBa0IsU0FBQTtFQUFXLGNBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsZ0JBQUE7QUF5QzdFOztBQXhDQTtFQUFrQixhQUFBO0VBQWUsZUFBQTtFQUFpQixRQUFBO0VBQVUsZ0JBQUE7QUErQzVEOztBQTlDQTtFQUF1QixpQkFBQTtFQUFtQiwyQ0FBQTtFQUE0QyxvQkFBQTtFQUFzQixxQ0FBQTtFQUFzQyxjQUFBO0VBQWdCLGtCQUFBO0FBdURsSzs7QUF0REE7RUFBa0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFlBQUE7RUFBYyxhQUFBO0VBQWUsWUFBQTtFQUFjLDRDQUFBO0VBQTZDLGtCQUFBO0VBQW9CLGdEQUFBO0FBaUVsSzs7QUFoRUE7RUFBd0IsYUFBQTtFQUFlLHFCQUFBO0VBQXVCLHFCQUFBO0VBQXVCLFlBQUE7RUFBYyxhQUFBO0VBQWUsMENBQUE7RUFBMkMsa0JBQUE7RUFBb0IscUNBQUE7QUEyRWpMOztBQTFFQTtFQUFpQyxjQUFB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STs7O0VBR0Usd0JBQUE7RUFDQSxtQ0FBQTtBRCtqQk47O0FDNWpCSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBRDhqQk47O0FDM2pCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtBRDZqQk47O0FDM2pCSTtFQUFjLCtCQUFBO0VBQWlDLDBCQUFBO0FEK2pCbkQ7O0FDOWpCSTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBRGdrQk47O0FDOWpCSTtFQUFXLGdDQUFBO0FEaWtCZjs7QUNoa0JJO0VBQW9DLHdCQUFBO0FEbWtCeEM7O0FDbGtCSTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FEb2tCTjs7QUNsa0JJO0VBQWtELG1DQUFBO0FEcWtCdEQiLCJmaWxlIjoiY2FtLXRpbWluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3RoZW1lJztcblxuLmNhbS1wYWdlIHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7IH1cbi5jYW0tc2hlbGwgeyBtYXgtd2lkdGg6IDEyNTBweDsgbWFyZ2luOiBhdXRvOyBwYWRkaW5nOiBjbGFtcCgxNHB4LCAzdncsIDM0cHgpOyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpOyB9XG4uY2FtLWhlcm8geyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIDIxMHB4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDI0cHg7IG1pbi1oZWlnaHQ6IDI1MnB4OyBwYWRkaW5nOiBjbGFtcCgyNHB4LCA0dncsIDQycHgpOyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXItcmFkaXVzOiAyNnB4OyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4NSUgMTUlLCByZ2JhKDIyMywgNTAsIDU0LCAuMjgpLCB0cmFuc3BhcmVudCAzMiUpLCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjIyMzI5LCAjMTExMzE3KTsgYm94LXNoYWRvdzogMCAyMnB4IDUwcHggcmdiYSgxNCwgMTYsIDIwLCAuMik7IH1cbi5jYW0ta2lja2VyIHsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogN3B4OyBjb2xvcjogI2YyYTNhMzsgZm9udC1zaXplOiAuNzNyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IGxldHRlci1zcGFjaW5nOiAuMWVtOyB9XG4uY2FtLWhlcm8gaDEgeyBtYXgtd2lkdGg6IDY1MHB4OyBtYXJnaW46IDEzcHggMCAxMHB4OyBmb250LXNpemU6IGNsYW1wKDEuNDVyZW0sIDN2dywgMi4zcmVtKTsgbGluZS1oZWlnaHQ6IDEuNDU7IH1cbi5jYW0taGVybyBwIHsgbWF4LXdpZHRoOiA2NDBweDsgbWFyZ2luOiAwOyBjb2xvcjogI2M5Y2JkMDsgZm9udC1zaXplOiAuOXJlbTsgbGluZS1oZWlnaHQ6IDEuOTsgfVxuLmNhbS1oZXJvX190YWdzIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBnYXA6IDhweDsgbWFyZ2luLXRvcDogMjJweDsgfVxuLmNhbS1oZXJvX190YWdzIHNwYW4geyBwYWRkaW5nOiA2cHggMTJweDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTgpOyBib3JkZXItcmFkaXVzOiA5OTlweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDYpOyBjb2xvcjogI2U1ZTZlODsgZm9udC1zaXplOiAuNzNyZW07IH1cbi5jYW0taGVyb19fZGlhbCB7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiAxOTJweDsgbWFyZ2luOiBhdXRvOyBib3JkZXI6IDJweCBkYXNoZWQgcmdiYSgyNDUsIDEyNCwgMTI0LCAuNjIpOyBib3JkZXItcmFkaXVzOiA1MCU7IGJveC1zaGFkb3c6IDAgMCAwIDExcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDQpOyB9XG4uY2FtLWhlcm9fX2RpYWwtaW5uZXIgeyBkaXNwbGF5OiBncmlkOyBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7IGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgd2lkdGg6IDE1NnB4OyBoZWlnaHQ6IDE1NnB4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNCk7IH1cbi5jYW0taGVyb19fZGlhbC1pbm5lciBpb24taWNvbiB7IGNvbG9yOiAjZjJhM2EzOyBmb250LXNpemU6IDEuNDVyZW07IH1cbi5jYW0taGVyb19fZGlhbC1pbm5lciBzdHJvbmcgeyBtYXJnaW4tdG9wOiAzcHg7IGZvbnQtc2l6ZTogMi42NXJlbTsgbGluZS1oZWlnaHQ6IDEuMTsgfVxuLmNhbS1oZXJvX19kaWFsLWlubmVyIHNtYWxsIHsgbWFyZ2luLXRvcDogNHB4OyBjb2xvcjogI2M5Y2JkMDsgZm9udC1zaXplOiAuNjlyZW07IH1cbi5jYW0tbGF5b3V0IHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMS4wNWZyKSBtaW5tYXgoMCwgLjk1ZnIpOyBhbGlnbi1pdGVtczogc3RhcnQ7IGdhcDogMThweDsgbWFyZ2luLXRvcDogMjJweDsgfVxuLmNhbS1wYW5lbCB7IG1pbi13aWR0aDogMDsgcGFkZGluZzogY2xhbXAoMjBweCwgMi44dncsIDMwcHgpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgLjE4KTsgYm9yZGVyLXJhZGl1czogMjJweDsgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpKTsgYm94LXNoYWRvdzogMCAxMHB4IDI4cHggcmdiYSgxNiwgMTgsIDIyLCAuMDYpOyB9XG4uY2FtLXBhbmVsX19oZWFkaW5nIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDEycHg7IH1cbi5jYW0tcGFuZWxfX2hlYWRpbmcgc3BhbiB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgZm9udC1zaXplOiAuNzJyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IH1cbi5jYW0tcGFuZWxfX2hlYWRpbmcgaDIgeyBtYXJnaW46IDVweCAwIDA7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7IGZvbnQtc2l6ZTogMS4yOHJlbTsgfVxuLmNhbS1wYW5lbF9faGVhZGluZyA+IGlvbi1pY29uIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpOyBmb250LXNpemU6IDEuNnJlbTsgfVxuLmNhbS1tb2RlLXN3aXRjaCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgZ2FwOiA2cHg7IG1hcmdpbi10b3A6IDIycHg7IHBhZGRpbmc6IDVweDsgYm9yZGVyLXJhZGl1czogMTNweDsgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIC4xMSk7IH1cbi5jYW0tbW9kZS1zd2l0Y2ggYnV0dG9uIHsgcGFkZGluZzogMTBweCA4cHg7IGJvcmRlcjogMDsgYm9yZGVyLXJhZGl1czogOXB4OyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBmb250OiBpbmhlcml0OyBmb250LXNpemU6IC44MnJlbTsgZm9udC13ZWlnaHQ6IDc1MDsgY3Vyc29yOiBwb2ludGVyOyB9XG4uY2FtLW1vZGUtc3dpdGNoIGJ1dHRvbi5hY3RpdmUgeyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7IGJveC1zaGFkb3c6IDAgNXB4IDExcHggcmdiYSh2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiksIC4xOCk7IH1cbi5jYW0tYmFzaXMgeyBkaXNwbGF5OiBncmlkOyBnYXA6IDdweDsgbWFyZ2luLXRvcDogMjFweDsgfVxuLmNhbS1iYXNpcyBsYWJlbCB7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7IGZvbnQtc2l6ZTogLjgycmVtOyBmb250LXdlaWdodDogNzAwOyB9XG4uY2FtLWJhc2lzIHNlbGVjdCB7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAxMnB4IDEzcHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAuMjMpOyBib3JkZXItcmFkaXVzOiAxMnB4OyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpOyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7IGZvbnQ6IGluaGVyaXQ7IH1cbi5jYW0tYmFzaXMgc2VsZWN0OmZvY3VzLXZpc2libGUgeyBvdXRsaW5lOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7IG91dGxpbmUtb2Zmc2V0OiAycHg7IH1cbi5jYW0tYmFzaXMgcCB7IG1hcmdpbjogMDsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOyBmb250LXNpemU6IC43NXJlbTsgbGluZS1oZWlnaHQ6IDEuNzU7IH1cbi5jYW0tZmllbGRzIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpOyBnYXA6IDExcHg7IG1hcmdpbi10b3A6IDE3cHg7IH1cbi5jYW0tZmllbGQgeyBkaXNwbGF5OiBibG9jazsgbWluLXdpZHRoOiAwOyBwYWRkaW5nOiAxM3B4IDE0cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAuMTkpOyBib3JkZXItcmFkaXVzOiAxNHB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7IH1cbi5jYW0tZmllbGQgPiBzcGFuIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogNnB4OyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpOyBmb250LXNpemU6IC44MnJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuLmNhbS1maWVsZCBzbWFsbCB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsgZm9udC1zaXplOiAuN3JlbTsgZm9udC13ZWlnaHQ6IDUwMDsgfVxuLmNhbS1maWVsZCA+IGRpdiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbi5jYW0tZmllbGQgaW5wdXQgeyB3aWR0aDogMTAwJTsgbWluLXdpZHRoOiAwOyBwYWRkaW5nOiAwOyBib3JkZXI6IDA7IG91dGxpbmU6IDA7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBmb250OiBpbmhlcml0OyBmb250LXNpemU6IDEuMTJyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7IHRleHQtYWxpZ246IHJpZ2h0OyB9XG4uY2FtLWZpZWxkOmZvY3VzLXdpdGhpbiB7IGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7IGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgLjEyKTsgfVxuLmNhbS1maWVsZCBidXR0b24geyBmbGV4OiBub25lOyBwYWRkaW5nOiA0cHg7IGJvcmRlcjogMDsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgZm9udC1zaXplOiAxLjIycmVtOyBjdXJzb3I6IHBvaW50ZXI7IH1cbi5jYW0tc2lnbmVkLW5vdGUgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiA4cHg7IG1hcmdpbjogMThweCAwIDA7IHBhZGRpbmc6IDEycHg7IGJvcmRlci1yYWRpdXM6IDExcHg7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIC4wOCk7IGZvbnQtc2l6ZTogLjc3cmVtOyBsaW5lLWhlaWdodDogMS43NTsgfVxuLmNhbS1zaWduZWQtbm90ZSBpb24taWNvbiB7IGZsZXg6IG5vbmU7IG1hcmdpbi10b3A6IDJweDsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpOyBmb250LXNpemU6IDEuMTNyZW07IH1cbi5jYW0tYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IG1hcmdpbi10b3A6IDE1cHg7IH1cbi5jYW0tYWN0aW9ucyBidXR0b24sIC5jYW0tdHJhbnNmZXIgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA3cHg7IHBhZGRpbmc6IDlweCAxM3B4OyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiksIC4xKTsgZm9udDogaW5oZXJpdDsgZm9udC1zaXplOiAuODJyZW07IGZvbnQtd2VpZ2h0OiA3NTA7IGN1cnNvcjogcG9pbnRlcjsgfVxuLmNhbS1wcmltYXJ5IHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBnYXA6IDhweDsgbWFyZ2luLXRvcDogMjJweDsgfVxuLmNhbS1wcmltYXJ5ID4gZGl2IHsgcGFkZGluZzogMjBweDsgYm9yZGVyLXJhZGl1czogMTZweDsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNhMTJiMmYsICNjOTNiM2QpOyB9XG4uY2FtLXByaW1hcnkgPiBkaXY6bnRoLWNoaWxkKDIpIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzMzMzczYywgIzE5MWMyMSk7IH1cbi5jYW0tcHJpbWFyeSBzcGFuLCAuY2FtLXByaW1hcnkgc21hbGwgeyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAuNzNyZW07IG9wYWNpdHk6IC44NzsgfVxuLmNhbS1wcmltYXJ5IHN0cm9uZyB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDdweCAwIDNweDsgZm9udC1zaXplOiBjbGFtcCgxLjY1cmVtLCAzdncsIDIuNXJlbSk7IGxpbmUtaGVpZ2h0OiAxLjE7IGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7IH1cbi5jYW0tbWV0cmljcyB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTsgZ2FwOiA4cHg7IG1hcmdpbi10b3A6IDlweDsgfVxuLmNhbS1tZXRyaWNzID4gZGl2IHsgcGFkZGluZzogMTNweDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIC4xOCk7IGJvcmRlci1yYWRpdXM6IDEycHg7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTsgfVxuLmNhbS1tZXRyaWNzIHNwYW4sIC5jYW0tbWV0cmljcyBzbWFsbCB7IGRpc3BsYXk6IGJsb2NrOyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7IGZvbnQtc2l6ZTogLjcycmVtOyB9XG4uY2FtLW1ldHJpY3Mgc3Ryb25nIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbjogNnB4IDAgMnB4OyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpOyBmb250LXNpemU6IC45OHJlbTsgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtczsgfVxuLmNhbS1ldmVudHMgeyBtYXJnaW4tdG9wOiAxOXB4OyBwYWRkaW5nOiAxNXB4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgLjE4KTsgYm9yZGVyLXJhZGl1czogMTRweDsgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpOyB9XG4uY2FtLWV2ZW50cyBoMyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogN3B4OyBtYXJnaW46IDAgMCA4cHg7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7IGZvbnQtc2l6ZTogLjkzcmVtOyB9XG4uY2FtLWV2ZW50cyBoMyBzbWFsbCwgLmNhbS1ldmVudHMgZGl2IHNwYW4gc21hbGwgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7IGZvbnQtc2l6ZTogLjY4cmVtOyBmb250LXdlaWdodDogNTAwOyB9XG4uY2FtLWV2ZW50cyA+IGRpdiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBwYWRkaW5nOiA5cHggMDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAuMTUpOyBmb250LXNpemU6IC43OXJlbTsgfVxuLmNhbS1ldmVudHMgPiBkaXYgPiBzcGFuOm50aC1jaGlsZCgyKSB7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7IH1cbi5jYW0tZXZlbnRzIHN0cm9uZyB7IG1hcmdpbi1yaWdodDogYXV0bzsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTsgZm9udC1zaXplOiAuODhyZW07IGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7IH1cbi5jYW0tZG90IHsgd2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7IGZsZXg6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuLmNhbS1kb3QtLWludGFrZSB7IGJhY2tncm91bmQ6ICNkNjQyNDI7IH1cbi5jYW0tZG90LS1leGhhdXN0IHsgYmFja2dyb3VuZDogdHVuZXItY29sb3IoYm9yZGVyLCAjNzQ3Yjg0KTsgfVxuLmNhbS10cmFuc2ZlciB7IHdpZHRoOiAxMDAlOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgbWFyZ2luLXRvcDogMTNweDsgfVxuLmNhbS1kY3ItbGluayB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBtYXJnaW4tdG9wOiAxNHB4OyBwYWRkaW5nOiAxMnB4OyBib3JkZXItcmFkaXVzOiAxMXB4OyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpOyBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgLjA4KTsgfVxuLmNhbS1kY3ItbGluayBpb24taWNvbiB7IGZsZXg6IG5vbmU7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgZm9udC1zaXplOiAxLjJyZW07IH1cbi5jYW0tZGNyLWxpbmsgcCB7IGZsZXg6IDE7IG1hcmdpbjogMDsgZm9udC1zaXplOiAuNzRyZW07IGxpbmUtaGVpZ2h0OiAxLjY7IH1cbi5jYW0tZGNyLWxpbmsgYSB7IGZsZXg6IG5vbmU7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgZm9udC1zaXplOiAuNzVyZW07IGZvbnQtd2VpZ2h0OiA3NTA7IH1cbi5jYW0td2FybmluZyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogN3B4OyBtYXJnaW46IDE1cHggMCAwOyBwYWRkaW5nOiAxMXB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpOyBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiksIC4xNSk7IGZvbnQtc2l6ZTogLjc4cmVtOyBsaW5lLWhlaWdodDogMS43OyB9XG4uY2FtLXdhcm5pbmcgaW9uLWljb24geyBmbGV4OiBub25lOyBtYXJnaW4tdG9wOiAycHg7IGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSk7IGZvbnQtc2l6ZTogMS4xcmVtOyB9XG4uY2FtLWRpc2NsYWltZXIgeyBtYXJnaW46IDE2cHggMCAwOyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7IGZvbnQtc2l6ZTogLjc4cmVtOyBsaW5lLWhlaWdodDogMS44OyB9XG4uY2FtLWVtcHR5IHsgZGlzcGxheTogZ3JpZDsganVzdGlmeS1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgbWFyZ2luOiAyMnB4IDA7IHBhZGRpbmc6IDM0cHg7IGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgLjMpOyBib3JkZXItcmFkaXVzOiAxNHB4OyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuLmNhbS1lbXB0eSBpb24taWNvbiB7IGZvbnQtc2l6ZTogMS44cmVtOyB9XG4uY2FtLWVtcHR5IHAgeyBtYXJnaW46IDA7IH1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkgeyAuY2FtLWhlcm8geyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfSAuY2FtLWhlcm9fX2RpYWwgeyBkaXNwbGF5OiBub25lOyB9IC5jYW0tbGF5b3V0IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH0gfVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ5MHB4KSB7IC5jYW0tc2hlbGwgeyBwYWRkaW5nOiAxMnB4OyB9IC5jYW0taGVybyB7IGJvcmRlci1yYWRpdXM6IDE5cHg7IH0gLmNhbS1wYW5lbCB7IHBhZGRpbmc6IDE3cHg7IH0gLmNhbS1maWVsZHMsIC5jYW0tbWV0cmljcyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IC5jYW0tcHJpbWFyeSB7IGdhcDogNnB4OyB9IC5jYW0tcHJpbWFyeSA+IGRpdiB7IHBhZGRpbmc6IDE0cHg7IH0gLmNhbS1kY3ItbGluayB7IGZsZXgtd3JhcDogd3JhcDsgfSB9XG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHsgLmNhbS1oZXJvLCAuY2FtLXBhbmVsIHsgYW5pbWF0aW9uOiBjYW0tZW50ZXIgLjU1cyBlYXNlIGJvdGg7IH0gLmNhbS1wYW5lbDpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IC4wOHM7IH0gQGtleWZyYW1lcyBjYW0tZW50ZXIgeyBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEycHgpOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH0gfVxuXG5AaW5jbHVkZSB0dW5lci1kYXJrLXRoZW1lO1xuIiwiLy8gS2VlcCB0aGUgb3JpZ2luYWwgbGlnaHQgY29sb3IgYXQgZWFjaCBjYWxsIHNpdGUuIFRva2VucyBleGlzdCBvbmx5IGluIGRhcmsgbW9kZS5cbkBmdW5jdGlvbiB0dW5lci1jb2xvcigkcm9sZSwgJGxpZ2h0KSB7XG4gIEByZXR1cm4gdmFyKC0tdHVuZXItI3skcm9sZX0sICN7JGxpZ2h0fSk7XG59XG5cbkBtaXhpbiB0dW5lci1kYXJrLXRoZW1lIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgLS10dW5lci1wYWdlOiAjMTExNTFlO1xuICAgIC0tdHVuZXItc3VyZmFjZTogIzFjMjIzMDtcbiAgICAtLXR1bmVyLXNvZnQ6ICMyNTJlM2Q7XG4gICAgLS10dW5lci1ib3JkZXI6ICM0NjUyNjk7XG4gICAgLS10dW5lci10ZXh0OiAjZWRmMWY4O1xuICAgIC0tdHVuZXItbXV0ZWQ6ICNiMmJmZDE7XG4gICAgLS10dW5lci1oZWFkZXI6IHJnYmEoMjgsIDM0LCA0OCwgMC45NCk7XG4gICAgLS10dW5lci1vdmVybGF5OiByZ2JhKDI4LCAzNCwgNDgsIDAuOTUpO1xuICAgIC0tdHVuZXItcHVycGxlLXRleHQ6ICNjNGI1ZmQ7XG4gICAgLS10dW5lci1wdXJwbGUtc29mdDogIzMwMjQ0NDtcbiAgICAtLXR1bmVyLXB1cnBsZS1ib3JkZXI6ICM3MjU3OWI7XG4gICAgLS10dW5lci1pbmZvLXRleHQ6ICM5M2M1ZmQ7XG4gICAgLS10dW5lci1pbmZvLXNvZnQ6ICMxZDMwNGM7XG4gICAgLS10dW5lci1pbmZvLWJvcmRlcjogIzQ2NmI5YTtcbiAgICAtLXR1bmVyLXdhcm5pbmctdGV4dDogI2ZjZDQ3NztcbiAgICAtLXR1bmVyLXdhcm5pbmctc29mdDogIzNiMzAyMDtcbiAgICAtLXR1bmVyLXdhcm5pbmctYm9yZGVyOiAjOTM3NDNkO1xuICAgIC0tdHVuZXItc3VjY2Vzcy10ZXh0OiAjODZlZmFjO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1zb2Z0OiAjMTkzOTJlO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1ib3JkZXI6ICM0MTdkNjA7XG4gICAgLS10dW5lci1kYW5nZXItdGV4dDogI2ZkYTRhZjtcbiAgICAtLXR1bmVyLWRhbmdlci1zb2Z0OiAjNDAyNjMxO1xuICAgIC0tdHVuZXItZGFuZ2VyLWJvcmRlcjogIzk4NTM2NztcbiAgICAtLXR1bmVyLXRlYWwtdGV4dDogIzdkZTRkNDtcbiAgICAtLXR1bmVyLXRlYWwtc29mdDogIzE5M2EzYTtcbiAgICAtLXR1bmVyLXRlYWwtYm9yZGVyOiAjNDM3ZjdjO1xuXG4gICAgLy8gTmF0aXZlIGNvbnRyb2xzIHdpdGhvdXQgYW4gZXhwbGljaXQgbGlnaHQgYmFja2dyb3VuZCBuZWVkIGEgZGFyayBzdXJmYWNlIHRvby5cbiAgICBpbnB1dDpub3QoW3R5cGU9J3JhbmdlJ10pOm5vdChbdHlwZT0nY2hlY2tib3gnXSk6bm90KFt0eXBlPSdyYWRpbyddKTpub3QoW3R5cGU9J2J1dHRvbiddKTpub3QoW3R5cGU9J3N1Ym1pdCddKTpub3QoW3R5cGU9J2ZpbGUnXSksXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci1tdXRlZCk7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cblxuICAgIGlvbi1oZWFkZXIubGVhcm5pbmctaGVhZGVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItcGFnZSk7IC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmQ6bm90KFtjb2xvcl0pLCBpb24tbGlzdCwgaW9uLWl0ZW06bm90KFtjb2xvcl0pLCBpb24taXRlbS1kaXZpZGVyOm5vdChbY29sb3JdKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWxpc3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTsgfVxuICAgIGlvbi1jYXJkLXRpdGxlLCBpb24tY2FyZC1zdWJ0aXRsZSB7IGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkW2NvbG9yPSdsaWdodGVzdCddLCBpb24taXRlbVtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWZhYi1idXR0b25bY29sb3I9J2xpZ2h0ZXN0J10ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2RhcmsnXSwgaW9uLWxhYmVsW2NvbG9yPSdkYXJrJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 63363:
/*!***************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cam-timing/cam-timing.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back *ngIf=\"!showSearchbar\"><ion-back-button text=\"\" icon=\"arrow-back-outline\" color=\"lightest\" defaultHref=\"/TunerPlus\"></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\">تایمینگ میل‌سوپاپ</span>\n<ion-buttons page-actions slot=\"end\">\r\n      <ion-button *ngIf=\"!showSearchbar\" (click)=\"showSearchbar = true\"><ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon></ion-button>\r\n      \r\n    </ion-buttons>\n<ion-searchbar dir=\"rtl\" *ngIf=\"showSearchbar\" showCancelButton=\"always\" [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\" (ionCancel)=\"onCancel()\" (keyup.enter)=\"search()\"></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content class=\"cam-page\">\r\n  <main *ngIf=\"!isCheck\" class=\"cam-shell\" dir=\"rtl\">\r\n    <section class=\"cam-hero\">\r\n      <div>\r\n        <span class=\"cam-kicker\"><ion-icon name=\"time-outline\"></ion-icon> VALVE EVENTS / 720° CYCLE</span>\r\n        <h1>چهار رویداد، یک تصویر روشن از تایمینگ</h1>\r\n        <p>از Duration و LSA به زاویه‌های باز و بسته‌شدن برسید، یا از زاویه‌های اندازه‌گیری‌شده Duration و سنترلاین‌ها را به دست آورید.</p>\r\n        <div class=\"cam-hero__tags\"><span>درجهٔ میل‌لنگ</span><span>محاسبه زنده</span><span>زاویه‌های علامت‌دار</span></div>\r\n      </div>\r\n      <div class=\"cam-hero__dial\" aria-hidden=\"true\"><div class=\"cam-hero__dial-inner\"><ion-icon name=\"sync-outline\"></ion-icon><strong>720°</strong><small>چرخهٔ چهارزمانه</small></div></div>\r\n    </section>\r\n\r\n    <div class=\"cam-layout\">\r\n      <section class=\"cam-panel cam-input-panel\">\r\n        <div class=\"cam-panel__heading\"><div><span>01 / محاسبه</span><h2>داده‌های میل‌سوپاپ</h2></div><ion-icon name=\"options-outline\"></ion-icon></div>\r\n        <div class=\"cam-mode-switch\" role=\"tablist\" aria-label=\"روش محاسبه\">\r\n          <button type=\"button\" role=\"tab\" [attr.aria-selected]=\"activeMode === 'specs'\" [class.active]=\"activeMode === 'specs'\" (click)=\"selectMode('specs')\">از Duration و LSA</button>\r\n          <button type=\"button\" role=\"tab\" [attr.aria-selected]=\"activeMode === 'events'\" [class.active]=\"activeMode === 'events'\" (click)=\"selectMode('events')\">از رویدادهای سوپاپ</button>\r\n        </div>\r\n\r\n        <div class=\"cam-basis\">\r\n          <label for=\"cam-basis\">مبنای اندازه‌گیری</label>\r\n          <select id=\"cam-basis\" [(ngModel)]=\"measurementBasis\">\r\n            <option value=\"advertised\">Advertised / نزدیک نشیمن</option>\r\n            <option value=\"050\">در لیفت 0.050 اینچ</option>\r\n          </select>\r\n          <p>همهٔ Durationها و رویدادها باید در یک مبنای لیفت اندازه‌گیری شده باشند. این انتخاب عددها را تبدیل نمی‌کند.</p>\r\n        </div>\r\n\r\n        <form *ngIf=\"activeMode === 'specs'\" [formGroup]=\"form\" class=\"cam-fields\">\r\n          <label class=\"cam-field\"><span>دوریشن هوا <small>Intake · °</small></span><div><input type=\"number\" formControlName=\"intakeDuration\" min=\"150\" max=\"360\" step=\"0.5\" inputmode=\"decimal\"><button type=\"button\" (click)=\"onInfo('intakeDuration')\" aria-label=\"توضیح دوریشن هوا\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n          <label class=\"cam-field\"><span>دوریشن دود <small>Exhaust · °</small></span><div><input type=\"number\" formControlName=\"exhaustDuration\" min=\"150\" max=\"360\" step=\"0.5\" inputmode=\"decimal\"><button type=\"button\" (click)=\"onInfo('exhaustDuration')\" aria-label=\"توضیح دوریشن دود\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n          <label class=\"cam-field\"><span>زاویهٔ جدایی لوب‌ها <small>LSA · °</small></span><div><input type=\"number\" formControlName=\"lobeSeparation\" min=\"70\" max=\"145\" step=\"0.5\" inputmode=\"decimal\"><button type=\"button\" (click)=\"onInfo('lobeSeparation')\" aria-label=\"توضیح زاویه جدایی لوب‌ها\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n          <label class=\"cam-field\"><span>ادونس نصب <small>Advance · °</small></span><div><input type=\"number\" formControlName=\"advance\" min=\"-30\" max=\"30\" step=\"0.5\" inputmode=\"decimal\"><button type=\"button\" (click)=\"onInfo('advance')\" aria-label=\"توضیح ادونس نصب\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n        </form>\r\n\r\n        <form *ngIf=\"activeMode === 'events'\" [formGroup]=\"form2\" class=\"cam-fields\">\r\n          <label class=\"cam-field\"><span>بازشدن هوا <small>IO · ° BTDC</small></span><div><input type=\"number\" formControlName=\"intakeOpenBtdc\" min=\"-180\" max=\"180\" step=\"0.5\" inputmode=\"decimal\"><button type=\"button\" (click)=\"onInfo('intakeOpenBtdc')\" aria-label=\"توضیح بازشدن هوا\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n          <label class=\"cam-field\"><span>بسته‌شدن هوا <small>IC · ° ABDC</small></span><div><input type=\"number\" formControlName=\"intakeCloseAbdc\" min=\"-180\" max=\"180\" step=\"0.5\" inputmode=\"decimal\"><button type=\"button\" (click)=\"onInfo('intakeCloseAbdc')\" aria-label=\"توضیح بسته‌شدن هوا\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n          <label class=\"cam-field\"><span>بازشدن دود <small>EO · ° BBDC</small></span><div><input type=\"number\" formControlName=\"exhaustOpenBbdc\" min=\"-180\" max=\"180\" step=\"0.5\" inputmode=\"decimal\"><button type=\"button\" (click)=\"onInfo('exhaustOpenBbdc')\" aria-label=\"توضیح بازشدن دود\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n          <label class=\"cam-field\"><span>بسته‌شدن دود <small>EC · ° ATDC</small></span><div><input type=\"number\" formControlName=\"exhaustCloseAtdc\" min=\"-180\" max=\"180\" step=\"0.5\" inputmode=\"decimal\"><button type=\"button\" (click)=\"onInfo('exhaustCloseAtdc')\" aria-label=\"توضیح بسته‌شدن دود\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n        </form>\r\n\r\n        <p class=\"cam-signed-note\"><ion-icon name=\"swap-horizontal-outline\"></ion-icon> برای رویدادی که سمت دیگر TDC یا BDC رخ می‌دهد، عدد را منفی وارد کنید؛ مثلاً EC = −4 یعنی ۴ درجه پیش از TDC.</p>\r\n        <div class=\"cam-actions\"><button type=\"button\" (click)=\"onReset()\"><ion-icon name=\"refresh-outline\"></ion-icon> بازنشانی این حالت</button></div>\r\n      </section>\r\n\r\n      <section class=\"cam-panel cam-result-panel\" aria-live=\"polite\">\r\n        <div class=\"cam-panel__heading\"><div><span>02 / خروجی</span><h2>هندسهٔ تایمینگ</h2></div><ion-icon name=\"analytics-outline\"></ion-icon></div>\r\n        <ng-container *ngIf=\"result; else camEmpty\">\r\n          <div class=\"cam-primary\">\r\n            <div><span>همپوشانی در TDC</span><strong dir=\"ltr\">{{ result.overlap }}°</strong><small>{{ result.overlap < 0 ? 'بازهٔ بدون همپوشانی' : 'همپوشانی علامت‌دار' }}</small></div>\r\n            <div><span>زاویهٔ جدایی لوب‌ها</span><strong dir=\"ltr\">{{ result.lobeSeparation }}°</strong><small>LSA</small></div>\r\n          </div>\r\n          <div class=\"cam-metrics\">\r\n            <div><span>سنترلاین هوا</span><strong dir=\"ltr\">{{ result.intakeCenterline }}°</strong><small>ATDC</small></div>\r\n            <div><span>سنترلاین دود</span><strong dir=\"ltr\">{{ result.exhaustCenterline }}°</strong><small>BTDC</small></div>\r\n            <div><span>ادونس نصب</span><strong dir=\"ltr\">{{ result.advance }}°</strong><small>مثبت = جلوتر</small></div>\r\n            <div><span>دوریشن هوا / دود</span><strong dir=\"ltr\">{{ result.intakeDuration }}° / {{ result.exhaustDuration }}°</strong><small>{{ measurementBasis === 'advertised' ? 'Advertised' : 'در 0.050 اینچ' }}</small></div>\r\n          </div>\r\n          <div class=\"cam-events\">\r\n            <h3>رویدادهای سوپاپ <small>درجهٔ میل‌لنگ</small></h3>\r\n            <div><span class=\"cam-dot cam-dot--intake\"></span><span>بازشدن هوا <small>IO</small></span><strong dir=\"ltr\">{{ eventLabel(result.intakeOpenBtdc, 'BTDC', 'ATDC', 'TDC') }}</strong></div>\r\n            <div><span class=\"cam-dot cam-dot--intake\"></span><span>بسته‌شدن هوا <small>IC</small></span><strong dir=\"ltr\">{{ eventLabel(result.intakeCloseAbdc, 'ABDC', 'BBDC', 'BDC') }}</strong></div>\r\n            <div><span class=\"cam-dot cam-dot--exhaust\"></span><span>بازشدن دود <small>EO</small></span><strong dir=\"ltr\">{{ eventLabel(result.exhaustOpenBbdc, 'BBDC', 'ABDC', 'BDC') }}</strong></div>\r\n            <div><span class=\"cam-dot cam-dot--exhaust\"></span><span>بسته‌شدن دود <small>EC</small></span><strong dir=\"ltr\">{{ eventLabel(result.exhaustCloseAtdc, 'ATDC', 'BTDC', 'TDC') }}</strong></div>\r\n          </div>\r\n          <button type=\"button\" class=\"cam-transfer\" (click)=\"useResultInOtherMode()\"><ion-icon name=\"swap-horizontal-outline\"></ion-icon> انتقال نتیجه به حالت دیگر</button>\r\n          <div *ngIf=\"measurementBasis === 'advertised'\" class=\"cam-dcr-link\"><ion-icon name=\"git-compare-outline\"></ion-icon><p>بسته‌شدن هوای نزدیک نشیمن، ورودی مناسب‌تری برای محاسبهٔ تراکم دینامیک است.</p><a routerLink=\"/TunerPlus/DynamicCompression\">ابزار DCR</a></div>\r\n        </ng-container>\r\n        <ng-template #camEmpty><div class=\"cam-empty\"><ion-icon name=\"pulse-outline\"></ion-icon><p>پس از ورود زاویه‌های معتبر، نتیجه اینجا نمایش داده می‌شود.</p></div></ng-template>\r\n        <p *ngIf=\"resultWarning\" class=\"cam-warning\" role=\"status\"><ion-icon name=\"alert-circle-outline\"></ion-icon>{{ resultWarning }}</p>\r\n        <p class=\"cam-disclaimer\">این محاسبه، هندسهٔ رویدادهای سوپاپ را از زاویه‌ها به دست می‌آورد. لیفت در TDC و لقی سوپاپ تا پیستون بدون پروفیل بادامک و اندازه‌گیری واقعی قابل محاسبه نیست.</p>\r\n      </section>\r\n    </div>\r\n  </main>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_cam-timing_cam-timing_module_ts.js.map