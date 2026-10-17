"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_spark-plug-gap_spark-plug-gap_module_ts"],{

/***/ 97729:
/*!***************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/spark-plug-gap/spark-plug-gap-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SparkPlugGapRoutingModule": () => (/* binding */ SparkPlugGapRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _spark_plug_gap_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spark-plug-gap.component */ 76461);




const routes = [{ path: '', component: _spark_plug_gap_component__WEBPACK_IMPORTED_MODULE_0__.SparkPlugGapComponent }];
let SparkPlugGapRoutingModule = class SparkPlugGapRoutingModule {
};
SparkPlugGapRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] })
], SparkPlugGapRoutingModule);



/***/ }),

/***/ 76461:
/*!**********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/spark-plug-gap/spark-plug-gap.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SparkPlugGapComponent": () => (/* binding */ SparkPlugGapComponent),
/* harmony export */   "calculateSparkPlugGap": () => (/* binding */ calculateSparkPlugGap)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _spark_plug_gap_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spark-plug-gap.component.html?ngResource */ 5118);
/* harmony import */ var _spark_plug_gap_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spark-plug-gap.component.scss?ngResource */ 249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/Urls */ 35602);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);















const clamp = (value, low, high) => Math.min(high, Math.max(low, value)); // A bounded tuning heuristic, not a prediction of breakdown voltage or cylinder pressure.
// Higher boost/compression narrow the OEM gap; electrical inputs make only small corrections.


function calculateSparkPlugGap(input) {
  const pressureReductionMm = clamp(Math.max(0, input.compression - 10) * 0.025 + input.boost * 0.14, 0, 0.35);
  const coilAdjustmentMm = clamp((input.coilKv - 35) * 0.003, -0.06, 0.04);
  const supplyAdjustmentMm = clamp((input.supplyVolts - 13.8) * 0.025, -0.06, 0.02);
  const electricalAdjustmentMm = coilAdjustmentMm + supplyAdjustmentMm;
  const gapMm = clamp(input.factoryGap - pressureReductionMm + electricalAdjustmentMm, 0.45, Math.min(1.55, input.factoryGap + 0.06));
  return {
    gapMm,
    lowMm: Math.max(0.45, gapMm - 0.05),
    highMm: Math.min(1.55, gapMm + 0.05),
    gapInches: gapMm / 25.4,
    pressureReductionMm,
    electricalAdjustmentMm
  };
}
let SparkPlugGapComponent = class SparkPlugGapComponent {
  constructor(fb, router, loadingController, courseService, siteService) {
    this.fb = fb;
    this.router = router;
    this.loadingController = loadingController;
    this.courseService = courseService;
    this.siteService = siteService;
    this.defaults = {
      factoryGap: 0.8,
      compression: 9.5,
      boost: 0,
      coilKv: 35,
      supplyVolts: 13.8
    };
    this.fields = [{
      key: 'factoryGap',
      label: 'گپ استاندارد سازنده',
      unit: 'mm',
      min: 0.5,
      max: 1.5,
      step: 0.01,
      help: 'گپ توصیه‌شده برای همین موتور و همین شمع؛ مبنای محاسبه است.'
    }, {
      key: 'compression',
      label: 'نسبت تراکم استاتیک',
      unit: ':1',
      min: 6,
      max: 16,
      step: 0.1,
      help: 'نسبت تراکم موتور؛ فشار واقعی سیلندر به تایمینگ میل‌سوپاپ هم وابسته است.'
    }, {
      key: 'boost',
      label: 'فشار بوست گیج',
      unit: 'bar',
      min: 0,
      max: 3,
      step: 0.05,
      help: 'بیشترین بوست زیر بار، نسبت به فشار محیط؛ برای تنفس طبیعی صفر وارد کنید.'
    }, {
      key: 'coilKv',
      label: 'ولتاژ اسمی خروجی کویل',
      unit: 'kV',
      min: 20,
      max: 60,
      step: 1,
      help: 'عدد نامی ولتاژ ثانویه از مشخصات کویل؛ ولتاژ واقعی جرقه زیر بار نیست.'
    }, {
      key: 'supplyVolts',
      label: 'ولتاژ تغذیه زیر بار',
      unit: 'V',
      min: 10,
      max: 15.5,
      step: 0.1,
      help: 'ولتاژ اندازه‌گیری‌شده در تغذیه کویل/سیستم جرقه هنگام کار موتور.'
    }];
    this.result = null;
    this.isCheck = true;
    this.isShow = false;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
  }

  ngOnInit() {
    const controls = {};
    this.fields.forEach(field => {
      controls[field.key] = [this.defaults[field.key], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(field.min), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(field.max)]];
    });
    this.form = this.fb.group(controls);
    this.subscriptions.add(this.form.valueChanges.subscribe(() => this.calculate()));
    this.calculate();
    void this.check();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(_this.loadingController);

      try {
        const tool = yield _this.siteService.GetTunerPlusById(50).toPromise();

        if (tool.status !== src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus || !tool.data || !tool.data.isActive) {
          throw new Error('Tool unavailable');
        }

        if (!tool.data.isFree) {
          const courses = yield _this.courseService.GetUserCoursesId().toPromise();
          const ownsCourse = courses.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus && Array.isArray(courses.data) && (tool.data.courseIds || []).some(id => courses.data.some(owned => +owned === +id));

          if (!ownsCourse) {
            throw new Error('Course access denied');
          }

          const access = yield _this.courseService.GetUserTunerPlusAccess().toPromise();

          if (access.status !== src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
            throw new Error('Tuner Plus access denied');
          }
        }

        _this.isCheck = false;
        _this.isShow = true;
      } catch {
        _this.isCheck = true;
        _this.isShow = false;
        yield _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);
      } finally {
        yield src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
      }
    })();
  }

  calculate() {
    if (!this.form || this.form.invalid) {
      this.result = null;
      return;
    }

    this.result = calculateSparkPlugGap(this.form.value);
  }

  reset() {
    this.form.reset(this.defaults);
  }

};

SparkPlugGapComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__.CourseService
}, {
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__.SliderService
}];

SparkPlugGapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-spark-plug-gap',
  template: _spark_plug_gap_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_spark_plug_gap_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SparkPlugGapComponent);


/***/ }),

/***/ 64635:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/spark-plug-gap/spark-plug-gap.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SparkPlugGapModule": () => (/* binding */ SparkPlugGapModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var _spark_plug_gap_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spark-plug-gap-routing.module */ 97729);
/* harmony import */ var _spark_plug_gap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spark-plug-gap.component */ 76461);









let SparkPlugGapModule = class SparkPlugGapModule {
};
SparkPlugGapModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_spark_plug_gap_component__WEBPACK_IMPORTED_MODULE_3__.SparkPlugGapComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule, _spark_plug_gap_routing_module__WEBPACK_IMPORTED_MODULE_2__.SparkPlugGapRoutingModule
        ]
    })
], SparkPlugGapModule);



/***/ }),

/***/ 249:
/*!***********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/spark-plug-gap/spark-plug-gap.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ink: var(--ion-text-color, #202632);\n  --surface: var(--ion-item-background, #fff);\n  --muted: var(--ion-color-medium, #667085);\n}\n\n.gap-page {\n  --background: var(--ion-background-color, #f5f6f8);\n}\n\n.gap-shell {\n  max-width: 1160px;\n  margin: auto;\n  padding: 22px 16px 60px;\n  color: var(--ink);\n}\n\n.hero {\n  display: flex;\n  align-items: center;\n  gap: 22px;\n  padding: 34px;\n  border-radius: 24px;\n  color: #fff;\n  background: linear-gradient(120deg, #181b20, #282c32 68%, #743032);\n  box-shadow: 0 18px 40px rgba(28, 23, 26, 0.16);\n}\n\n.hero-icon {\n  display: grid;\n  place-items: center;\n  width: 66px;\n  height: 66px;\n  flex: 0 0 66px;\n  border-radius: 19px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #ff7777;\n  font-size: 2rem;\n}\n\n.eyebrow {\n  color: #ffafaf;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.hero h1 {\n  margin: 7px 0;\n  font-size: clamp(1.45rem, 3vw, 2.2rem);\n}\n\n.hero p {\n  margin: 0;\n  color: #e3e1e1;\n  line-height: 1.8;\n}\n\n.workspace {\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(310px, 0.9fr);\n  gap: 18px;\n  align-items: start;\n  margin-top: 20px;\n}\n\n.panel {\n  min-width: 0;\n  padding: 24px;\n  border: 1px solid var(--ion-color-step-150, #e2e4e8);\n  border-radius: 20px;\n  background: var(--surface);\n  box-shadow: 0 8px 26px rgba(20, 22, 28, 0.06);\n}\n\n.panel-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n\n.panel-heading span {\n  color: var(--muted);\n  font-size: 0.75rem;\n}\n\n.panel-heading h2 {\n  margin: 4px 0 0;\n  font-size: 1.18rem;\n  color: var(--ink);\n}\n\n.panel-heading > ion-icon {\n  color: var(--ion-color-danger);\n  font-size: 1.5rem;\n}\n\n.reset {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px;\n  border: 0;\n  background: transparent;\n  color: var(--ion-color-danger);\n  cursor: pointer;\n  white-space: nowrap;\n  font: inherit;\n  font-size: 0.8rem;\n}\n\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px 14px;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  gap: 7px;\n}\n\n.field-label {\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n\n.field-control {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  border: 1px solid var(--ion-color-step-250, #ced2d8);\n  border-radius: 12px;\n  background: var(--ion-background-color, #f8f9fa);\n}\n\n.field-control:focus-within {\n  border-color: var(--ion-color-danger);\n  box-shadow: 0 0 0 3px rgba(var(--ion-color-danger-rgb), 0.12);\n}\n\n.field-control input {\n  min-width: 0;\n  width: 100%;\n  padding: 11px 12px;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--ink);\n  text-align: left;\n  direction: ltr;\n  font: inherit;\n}\n\n.field-control span {\n  min-width: 38px;\n  padding: 0 10px;\n  color: var(--muted);\n  text-align: center;\n  white-space: nowrap;\n}\n\n.field small {\n  color: var(--muted);\n  line-height: 1.6;\n  font-size: 0.7rem;\n}\n\n.field .error {\n  color: var(--ion-color-danger);\n}\n\n.result-panel {\n  position: sticky;\n  top: 12px;\n}\n\n.main-result {\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  gap: 10px;\n  margin: 4px 0 22px;\n  padding: 24px 10px;\n  border-radius: 16px;\n  background: rgba(var(--ion-color-danger-rgb), 0.09);\n  color: var(--ion-color-danger);\n}\n\n.main-result strong {\n  direction: ltr;\n  font-size: clamp(2.8rem, 6vw, 4.2rem);\n  line-height: 1;\n}\n\n.main-result span {\n  font-weight: 700;\n}\n\n.result-details {\n  display: grid;\n  gap: 0;\n}\n\n.result-details > div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 0;\n  border-bottom: 1px solid var(--ion-color-step-150, #e2e4e8);\n  font-size: 0.8rem;\n}\n\n.result-details span {\n  color: var(--muted);\n}\n\n.result-details strong {\n  direction: ltr;\n  text-align: left;\n  white-space: nowrap;\n}\n\n.result-note, .empty {\n  margin: 18px 0 0;\n  color: var(--muted);\n  line-height: 1.8;\n  font-size: 0.81rem;\n}\n\n.method-note {\n  display: flex;\n  gap: 12px;\n  margin-top: 18px;\n  padding: 20px;\n  border: 1px solid var(--ion-color-step-150, #e2e4e8);\n  border-radius: 18px;\n  background: var(--surface);\n}\n\n.method-note > ion-icon {\n  flex: 0 0 auto;\n  color: var(--ion-color-danger);\n  font-size: 1.4rem;\n}\n\n.method-note strong {\n  font-size: 0.9rem;\n}\n\n.method-note p {\n  margin: 5px 0 10px;\n  color: var(--muted);\n  line-height: 1.9;\n  font-size: 0.79rem;\n}\n\n.method-note a {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--ion-color-danger);\n  font-size: 0.8rem;\n}\n\n@media (max-width: 780px) {\n  .workspace {\n    grid-template-columns: 1fr;\n  }\n\n  .result-panel {\n    position: static;\n  }\n}\n\n@media (max-width: 540px) {\n  .gap-shell {\n    padding: 12px 10px 36px;\n  }\n\n  .hero {\n    align-items: flex-start;\n    padding: 23px 18px;\n  }\n\n  .hero-icon {\n    width: 46px;\n    height: 46px;\n    flex-basis: 46px;\n    font-size: 1.5rem;\n  }\n\n  .panel {\n    padding: 18px;\n  }\n\n  .field-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .result-details > div {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 2px;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYXJrLXBsdWctZ2FwLmNvbXBvbmVudC5zY3NzIiwiLi5cXF90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQVEscUNBQUE7RUFBdUMsMkNBQUE7RUFBNkMseUNBQUE7QUFFNUY7O0FBREE7RUFBWSxrREFBQTtBQUtaOztBQUpBO0VBQWEsaUJBQUE7RUFBbUIsWUFBQTtFQUFjLHVCQUFBO0VBQXlCLGlCQUFBO0FBV3ZFOztBQVZBO0VBQVEsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFBVyxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsV0FBQTtFQUFhLGtFQUFBO0VBQW9FLDhDQUFBO0FBcUI1Szs7QUFwQkE7RUFBYSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsV0FBQTtFQUFhLFlBQUE7RUFBYyxjQUFBO0VBQWdCLG1CQUFBO0VBQXFCLHFDQUFBO0VBQW1DLGNBQUE7RUFBZ0IsZUFBQTtBQWdDcEs7O0FBL0JBO0VBQVcsY0FBQTtFQUFnQixrQkFBQTtFQUFtQixnQkFBQTtBQXFDOUM7O0FBcENBO0VBQVcsYUFBQTtFQUFlLHNDQUFBO0FBeUMxQjs7QUF4Q0E7RUFBVSxTQUFBO0VBQVcsY0FBQTtFQUFnQixnQkFBQTtBQThDckM7O0FBN0NBO0VBQWEsYUFBQTtFQUFlLDREQUFBO0VBQTZELFNBQUE7RUFBVyxrQkFBQTtFQUFvQixnQkFBQTtBQXFEeEg7O0FBcERBO0VBQVMsWUFBQTtFQUFjLGFBQUE7RUFBZSxvREFBQTtFQUFzRCxtQkFBQTtFQUFxQiwwQkFBQTtFQUE0Qiw2Q0FBQTtBQTZEN0k7O0FBNURBO0VBQWlCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtFQUFnQyxTQUFBO0VBQVcsbUJBQUE7QUFvRWhHOztBQW5FQTtFQUFzQixtQkFBQTtFQUFxQixrQkFBQTtBQXdFM0M7O0FBdkVBO0VBQW9CLGVBQUE7RUFBaUIsa0JBQUE7RUFBb0IsaUJBQUE7QUE2RXpEOztBQTVFQTtFQUE0Qiw4QkFBQTtFQUFnQyxpQkFB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cUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBRGdUSjs7QUM3U0k7OztFQUdFLHdCQUFBO0VBQ0EsbUNBQUE7QUQrU047O0FDNVNJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FEOFNOOztBQzNTSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtBRDZTTjs7QUMzU0k7RUFBYywrQkFBQTtFQUFpQywwQkFBQTtBRCtTbkQ7O0FDOVNJO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FEZ1ROOztBQzlTSTtFQUFXLGdDQUFBO0FEaVRmOztBQ2hUSTtFQUFvQyx3QkFBQTtBRG1UeEM7O0FDbFRJO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QURvVE47O0FDbFRJO0VBQWtELG1DQUFBO0FEcVR0RCIsImZpbGUiOiJzcGFyay1wbHVnLWdhcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3RoZW1lJztcblxuOmhvc3QgeyAtLWluazogdmFyKC0taW9uLXRleHQtY29sb3IsICMyMDI2MzIpOyAtLXN1cmZhY2U6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsICNmZmYpOyAtLW11dGVkOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjNjY3MDg1KTsgfVxuLmdhcC1wYWdlIHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2Y1ZjZmOCk7IH1cbi5nYXAtc2hlbGwgeyBtYXgtd2lkdGg6IDExNjBweDsgbWFyZ2luOiBhdXRvOyBwYWRkaW5nOiAyMnB4IDE2cHggNjBweDsgY29sb3I6IHZhcigtLWluayk7IH1cbi5oZXJvIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAyMnB4OyBwYWRkaW5nOiAzNHB4OyBib3JkZXItcmFkaXVzOiAyNHB4OyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzE4MWIyMCwgIzI4MmMzMiA2OCUsICM3NDMwMzIpOyBib3gtc2hhZG93OiAwIDE4cHggNDBweCByZ2JhKDI4LCAyMywgMjYsIC4xNik7IH1cbi5oZXJvLWljb24geyBkaXNwbGF5OiBncmlkOyBwbGFjZS1pdGVtczogY2VudGVyOyB3aWR0aDogNjZweDsgaGVpZ2h0OiA2NnB4OyBmbGV4OiAwIDAgNjZweDsgYm9yZGVyLXJhZGl1czogMTlweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTIpOyBjb2xvcjogI2ZmNzc3NzsgZm9udC1zaXplOiAycmVtOyB9XG4uZXllYnJvdyB7IGNvbG9yOiAjZmZhZmFmOyBmb250LXNpemU6IC43OHJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuLmhlcm8gaDEgeyBtYXJnaW46IDdweCAwOyBmb250LXNpemU6IGNsYW1wKDEuNDVyZW0sIDN2dywgMi4ycmVtKTsgfVxuLmhlcm8gcCB7IG1hcmdpbjogMDsgY29sb3I6ICNlM2UxZTE7IGxpbmUtaGVpZ2h0OiAxLjg7IH1cbi53b3Jrc3BhY2UgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxLjFmcikgbWlubWF4KDMxMHB4LCAuOWZyKTsgZ2FwOiAxOHB4OyBhbGlnbi1pdGVtczogc3RhcnQ7IG1hcmdpbi10b3A6IDIwcHg7IH1cbi5wYW5lbCB7IG1pbi13aWR0aDogMDsgcGFkZGluZzogMjRweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZTJlNGU4KTsgYm9yZGVyLXJhZGl1czogMjBweDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJveC1zaGFkb3c6IDAgOHB4IDI2cHggcmdiYSgyMCwgMjIsIDI4LCAuMDYpOyB9XG4ucGFuZWwtaGVhZGluZyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxMnB4OyBtYXJnaW4tYm90dG9tOiAxOHB4OyB9XG4ucGFuZWwtaGVhZGluZyBzcGFuIHsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udC1zaXplOiAuNzVyZW07IH1cbi5wYW5lbC1oZWFkaW5nIGgyIHsgbWFyZ2luOiA0cHggMCAwOyBmb250LXNpemU6IDEuMThyZW07IGNvbG9yOiB2YXIoLS1pbmspOyB9XG4ucGFuZWwtaGVhZGluZyA+IGlvbi1pY29uIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpOyBmb250LXNpemU6IDEuNXJlbTsgfVxuLnJlc2V0IHsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyBwYWRkaW5nOiA4cHg7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgY3Vyc29yOiBwb2ludGVyOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBmb250OiBpbmhlcml0OyBmb250LXNpemU6IC44cmVtOyB9XG4uZmllbGQtZ3JpZCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTsgZ2FwOiAxOHB4IDE0cHg7IH1cbi5maWVsZCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IG1pbi13aWR0aDogMDsgZ2FwOiA3cHg7IH1cbi5maWVsZC1sYWJlbCB7IGZvbnQtc2l6ZTogLjg2cmVtOyBmb250LXdlaWdodDogNzAwOyB9XG4uZmllbGQtY29udHJvbCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG92ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2NlZDJkOCk7IGJvcmRlci1yYWRpdXM6IDEycHg7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjhmOWZhKTsgfVxuLmZpZWxkLWNvbnRyb2w6Zm9jdXMtd2l0aGluIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAuMTIpOyB9XG4uZmllbGQtY29udHJvbCBpbnB1dCB7IG1pbi13aWR0aDogMDsgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDExcHggMTJweDsgYm9yZGVyOiAwOyBvdXRsaW5lOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLWluayk7IHRleHQtYWxpZ246IGxlZnQ7IGRpcmVjdGlvbjogbHRyOyBmb250OiBpbmhlcml0OyB9XG4uZmllbGQtY29udHJvbCBzcGFuIHsgbWluLXdpZHRoOiAzOHB4OyBwYWRkaW5nOiAwIDEwcHg7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IHRleHQtYWxpZ246IGNlbnRlcjsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuLmZpZWxkIHNtYWxsIHsgY29sb3I6IHZhcigtLW11dGVkKTsgbGluZS1oZWlnaHQ6IDEuNjsgZm9udC1zaXplOiAuN3JlbTsgfVxuLmZpZWxkIC5lcnJvciB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgfVxuLnJlc3VsdC1wYW5lbCB7IHBvc2l0aW9uOiBzdGlja3k7IHRvcDogMTJweDsgfVxuLm1haW4tcmVzdWx0IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGJhc2VsaW5lOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiAxMHB4OyBtYXJnaW46IDRweCAwIDIycHg7IHBhZGRpbmc6IDI0cHggMTBweDsgYm9yZGVyLXJhZGl1czogMTZweDsgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiksIC4wOSk7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgfVxuLm1haW4tcmVzdWx0IHN0cm9uZyB7IGRpcmVjdGlvbjogbHRyOyBmb250LXNpemU6IGNsYW1wKDIuOHJlbSwgNnZ3LCA0LjJyZW0pOyBsaW5lLWhlaWdodDogMTsgfVxuLm1haW4tcmVzdWx0IHNwYW4geyBmb250LXdlaWdodDogNzAwOyB9XG4ucmVzdWx0LWRldGFpbHMgeyBkaXNwbGF5OiBncmlkOyBnYXA6IDA7IH1cbi5yZXN1bHQtZGV0YWlscyA+IGRpdiB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4OyBwYWRkaW5nOiAxMXB4IDA7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNlMmU0ZTgpOyBmb250LXNpemU6IC44cmVtOyB9XG4ucmVzdWx0LWRldGFpbHMgc3BhbiB7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH1cbi5yZXN1bHQtZGV0YWlscyBzdHJvbmcgeyBkaXJlY3Rpb246IGx0cjsgdGV4dC1hbGlnbjogbGVmdDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuLnJlc3VsdC1ub3RlLCAuZW1wdHkgeyBtYXJnaW46IDE4cHggMCAwOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBsaW5lLWhlaWdodDogMS44OyBmb250LXNpemU6IC44MXJlbTsgfVxuLm1ldGhvZC1ub3RlIHsgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBtYXJnaW4tdG9wOiAxOHB4OyBwYWRkaW5nOiAyMHB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNlMmU0ZTgpOyBib3JkZXItcmFkaXVzOiAxOHB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgfVxuLm1ldGhvZC1ub3RlID4gaW9uLWljb24geyBmbGV4OiAwIDAgYXV0bzsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpOyBmb250LXNpemU6IDEuNHJlbTsgfVxuLm1ldGhvZC1ub3RlIHN0cm9uZyB7IGZvbnQtc2l6ZTogLjlyZW07IH1cbi5tZXRob2Qtbm90ZSBwIHsgbWFyZ2luOiA1cHggMCAxMHB4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBsaW5lLWhlaWdodDogMS45OyBmb250LXNpemU6IC43OXJlbTsgfVxuLm1ldGhvZC1ub3RlIGEgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgZm9udC1zaXplOiAuOHJlbTsgfVxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KSB7IC53b3Jrc3BhY2UgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfSAucmVzdWx0LXBhbmVsIHsgcG9zaXRpb246IHN0YXRpYzsgfSB9XG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHsgLmdhcC1zaGVsbCB7IHBhZGRpbmc6IDEycHggMTBweCAzNnB4OyB9IC5oZXJvIHsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IHBhZGRpbmc6IDIzcHggMThweDsgfSAuaGVyby1pY29uIHsgd2lkdGg6IDQ2cHg7IGhlaWdodDogNDZweDsgZmxleC1iYXNpczogNDZweDsgZm9udC1zaXplOiAxLjVyZW07IH0gLnBhbmVsIHsgcGFkZGluZzogMThweDsgfSAuZmllbGQtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IC5yZXN1bHQtZGV0YWlscyA+IGRpdiB7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDJweDsgfSB9XG5cbkBpbmNsdWRlIHR1bmVyLWRhcmstdGhlbWU7XG4iLCIvLyBLZWVwIHRoZSBvcmlnaW5hbCBsaWdodCBjb2xvciBhdCBlYWNoIGNhbGwgc2l0ZS4gVG9rZW5zIGV4aXN0IG9ubHkgaW4gZGFyayBtb2RlLlxuQGZ1bmN0aW9uIHR1bmVyLWNvbG9yKCRyb2xlLCAkbGlnaHQpIHtcbiAgQHJldHVybiB2YXIoLS10dW5lci0jeyRyb2xlfSwgI3skbGlnaHR9KTtcbn1cblxuQG1peGluIHR1bmVyLWRhcmstdGhlbWUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gICAgLS10dW5lci1zdXJmYWNlOiAjMWMyMjMwO1xuICAgIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgICAtLXR1bmVyLXRleHQ6ICNlZGYxZjg7XG4gICAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgICAtLXR1bmVyLW92ZXJsYXk6IHJnYmEoMjgsIDM0LCA0OCwgMC45NSk7XG4gICAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAgIC0tdHVuZXItcHVycGxlLWJvcmRlcjogIzcyNTc5YjtcbiAgICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgICAtLXR1bmVyLWluZm8tYm9yZGVyOiAjNDY2YjlhO1xuICAgIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAgIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAgIC0tdHVuZXItd2FybmluZy1ib3JkZXI6ICM5Mzc0M2Q7XG4gICAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gICAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gICAgLS10dW5lci1zdWNjZXNzLWJvcmRlcjogIzQxN2Q2MDtcbiAgICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAgIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gICAgLS10dW5lci1kYW5nZXItYm9yZGVyOiAjOTg1MzY3O1xuICAgIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAgIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAgIC0tdHVuZXItdGVhbC1ib3JkZXI6ICM0MzdmN2M7XG5cbiAgICAvLyBOYXRpdmUgY29udHJvbHMgd2l0aG91dCBhbiBleHBsaWNpdCBsaWdodCBiYWNrZ3JvdW5kIG5lZWQgYSBkYXJrIHN1cmZhY2UgdG9vLlxuICAgIGlucHV0Om5vdChbdHlwZT0ncmFuZ2UnXSk6bm90KFt0eXBlPSdjaGVja2JveCddKTpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nZmlsZSddKSxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3Qge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1wYWdlKTsgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZDpub3QoW2NvbG9yXSksIGlvbi1saXN0LCBpb24taXRlbTpub3QoW2NvbG9yXSksIGlvbi1pdGVtLWRpdmlkZXI6bm90KFtjb2xvcl0pIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tbGlzdCB7IGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmRbY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1pdGVtW2NvbG9yPSdsaWdodGVzdCddLCBpb24tZmFiLWJ1dHRvbltjb2xvcj0nbGlnaHRlc3QnXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cbiAgICBpb24tdGV4dFtjb2xvcj0nZGFyayddLCBpb24tbGFiZWxbY29sb3I9J2RhcmsnXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 5118:
/*!***********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/spark-plug-gap/spark-plug-gap.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  \n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" defaultHref=\"/TunerPlus\" color=\"light\"></ion-back-button></ion-buttons>\n<span page-title>محاسبه‌گر گپ شمع</span>\n  </app-page-header>\n</ion-header>\n\n<ion-content class=\"gap-page\">\n  <main class=\"gap-shell\" dir=\"rtl\" *ngIf=\"isShow\">\n    <section class=\"hero\">\n      <div class=\"hero-icon\"><ion-icon name=\"flash-outline\"></ion-icon></div>\n      <div>\n        <span class=\"eyebrow\">تیونر پلاس · سیستم جرقه</span>\n        <h1>گپ شمع را برای پروژه‌ات تنظیم کن</h1>\n        <p>یک نقطهٔ شروع بر پایهٔ گپ کارخانه، تراکم، بوست و شرایط برق کویل.</p>\n      </div>\n    </section>\n\n    <div class=\"workspace\">\n      <section class=\"panel input-panel\">\n        <div class=\"panel-heading\">\n          <div><span>ورودی‌ها</span><h2>مشخصات موتور و جرقه</h2></div>\n          <button type=\"button\" class=\"reset\" (click)=\"reset()\"><ion-icon name=\"refresh-outline\"></ion-icon>بازنشانی</button>\n        </div>\n        <form [formGroup]=\"form\" *ngIf=\"form\" class=\"field-grid\">\n          <label class=\"field\" *ngFor=\"let field of fields\">\n            <span class=\"field-label\">{{ field.label }}</span>\n            <span class=\"field-control\">\n              <input type=\"number\" inputmode=\"decimal\" [formControlName]=\"field.key\"\n                [min]=\"field.min\" [max]=\"field.max\" [step]=\"field.step\"\n                [attr.aria-label]=\"field.label\" [attr.aria-describedby]=\"field.key + '-help'\">\n              <span>{{ field.unit }}</span>\n            </span>\n            <small [id]=\"field.key + '-help'\">{{ field.help }}</small>\n            <small class=\"error\" *ngIf=\"form.get(field.key)?.invalid && form.get(field.key)?.touched\">\n              مقدار باید بین {{ field.min }} و {{ field.max }} باشد.\n            </small>\n          </label>\n        </form>\n      </section>\n\n      <section class=\"panel result-panel\" aria-live=\"polite\">\n        <div class=\"panel-heading\"><div><span>خروجی اولیه</span><h2>گپ پیشنهادی برای شروع</h2></div><ion-icon name=\"sparkles-outline\"></ion-icon></div>\n        <ng-container *ngIf=\"result as gap; else emptyResult\">\n          <div class=\"main-result\"><strong>{{ gap.gapMm | number:'1.2-2' }}</strong><span>میلی‌متر</span></div>\n          <div class=\"result-details\">\n            <div><span>معادل اینچ</span><strong>{{ gap.gapInches | number:'1.3-3' }}″</strong></div>\n            <div><span>بازهٔ بررسی</span><strong>{{ gap.lowMm | number:'1.2-2' }} تا {{ gap.highMm | number:'1.2-2' }} mm</strong></div>\n            <div><span>کاهش ناشی از تراکم و بوست</span><strong>{{ gap.pressureReductionMm | number:'1.2-2' }} mm</strong></div>\n            <div><span>اصلاح محدود برق کویل</span><strong>{{ gap.electricalAdjustmentMm | number:'1.2-2' }} mm</strong></div>\n          </div>\n          <p class=\"result-note\">از مقدار پیشنهادی شروع کنید و با بررسی میس‌فایر زیر بار، مشخصات شمع و راهنمای سازنده به‌صورت مرحله‌ای تنظیم کنید.</p>\n        </ng-container>\n        <ng-template #emptyResult><p class=\"empty\">برای نمایش نتیجه، همهٔ ورودی‌ها را در بازهٔ مجاز وارد کنید.</p></ng-template>\n      </section>\n    </div>\n\n    <!-- <aside class=\"method-note\">\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\n      <div>\n        <strong>دربارهٔ برآورد</strong>\n        <p>این مدل تجربی از گپ استاندارد سازنده شروع می‌کند و به‌ازای هر ۱ bar بوست حدود ۰٫۱۴ mm و هر واحد تراکم بالاتر از ۱۰ حدود ۰٫۰۲۵ mm از آن کم می‌کند. اصلاح برق کویل محدود است؛ این ضرایب، مشخصات رسمی NGK یا مدل دقیق فشار و ولتاژ جرقه نیستند. گپ مجاز سازندهٔ شمع و آزمون میس‌فایر زیر بار را ملاک نهایی قرار دهید.</p>\n        <a href=\"https://ngksparkplugs.com/en/resources/gapping-and-indexing\" target=\"_blank\" rel=\"noopener noreferrer\">راهنمای فنی NGK دربارهٔ گپ شمع <ion-icon name=\"open-outline\"></ion-icon></a>\n      </div>\n    </aside> -->\n  </main>\n  <app-footer></app-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_spark-plug-gap_spark-plug-gap_module_ts.js.map