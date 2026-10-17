"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_intercooler_intercooler_module_ts"],{

/***/ 5637:
/*!*********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/intercooler/intercooler-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntercoolerRoutingModule": () => (/* binding */ IntercoolerRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _intercooler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intercooler.component */ 94076);




const routes = [{ path: '', component: _intercooler_component__WEBPACK_IMPORTED_MODULE_0__.IntercoolerComponent }];
let IntercoolerRoutingModule = class IntercoolerRoutingModule {
};
IntercoolerRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] })
], IntercoolerRoutingModule);



/***/ }),

/***/ 94076:
/*!****************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/intercooler/intercooler.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntercoolerComponent": () => (/* binding */ IntercoolerComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _intercooler_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intercooler.component.html?ngResource */ 85930);
/* harmony import */ var _intercooler_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intercooler.component.scss?ngResource */ 78846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/Urls */ 35602);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);
/* harmony import */ var _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vehicle-profile/vehicle-profile.store */ 78994);















let IntercoolerComponent = class IntercoolerComponent {
  constructor(fb, router, alerts, loadingController, courseService, siteService) {
    this.fb = fb;
    this.router = router;
    this.alerts = alerts;
    this.loadingController = loadingController;
    this.courseService = courseService;
    this.siteService = siteService;
    this.tool = {
      slug: 'intercooler',
      title: 'سایزینگ اینترکولر',
      subtitle: 'دمای خروجی، راندمان و افت فشار',
      icon: 'snow-outline',
      accent: '#06b6d4',
      note: 'مدل حرارتی برای انتخاب اولیه است؛ داده‌ی سازنده‌ی core اولویت دارد.',
      fields: [this.f('power', 'توان هدف', 'hp', 350, 30, 3000, 5, 'توان هدف موتور.'), this.f('boost', 'بوست', 'bar', 1.2, 0, 4, .05, 'فشار بوست گیج.'), this.f('ambient', 'دمای محیط', '°C', 30, -20, 70, 1, 'دمای هوای ورودی کمپرسور.'), this.f('efficiency', 'راندمان اینترکولر', '%', 70, 10, 95, 1, 'نسبت کاهش افزایش دمای ایجادشده توسط کمپرسور.'), this.f('pressureDrop', 'افت فشار', 'bar', .08, 0, .5, .01, 'افت فشار مسیر و core در دبی هدف.')]
    };
    this.isShow = false;
    this.isCheck = true;
    this.profiles = [];
    this.selectedProfileId = '';
    this.profileNotice = '';
    this.loadedProfileUpdatedAt = '';
    this.results = [];
    this.advice = '';
    this.csvName = '';
    this.csvRows = 0;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription();
  }

  ngOnInit() {
    this.buildForm();
    void this.check();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(_this.loadingController);

      _this.siteService.GetTunerPlusById(42).subscribe(res => {
        if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
          if (res.data.isActive) {
            if (!res.data.isFree) {
              _this.courseService.GetUserCoursesId().subscribe(ress => {
                if (ress.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
                  let found = false;
                  res.data.courseIds.forEach(courseId => {
                    if (ress.data.find(n => n == courseId)) {
                      found = true;

                      _this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
                        if (resss.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
                          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                          _this.isCheck = false;
                          _this.isShow = true;
                        } else {
                          _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                        }
                      }, errs => {
                        _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                      });
                    }
                  });

                  if (!found) {
                    _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                  }
                } else {
                  _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                  src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                }
              }, errs => {
                _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
              });
            } else {
              src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
              _this.isCheck = false;
              _this.isShow = true;
            }
          } else {
            _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
          }
        } else {
          _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
        }
      }, err => {
        _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
      });
    })();
  }

  ionViewWillEnter() {
    this.profiles = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.list();
    const active = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.active();

    if (active && this.form && (active.id !== this.selectedProfileId || active.updatedAt !== this.loadedProfileUpdatedAt)) {
      this.applyProfile(active.id);
    }
  }

  applyProfile(id) {
    const profile = this.profiles.find(item => item.id === id);

    if (!profile || !this.form) {
      return;
    }

    const values = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.toolValues(profile, this.tool.slug);
    const valid = {};
    Object.keys(values).forEach(key => {
      const field = this.tool.fields.find(item => item.key === key);

      if (field && values[key] >= field.min && values[key] <= field.max) {
        valid[key] = values[key];
      }
    });
    this.form.patchValue(valid);
    this.profileNotice = `${Object.keys(valid).length} مقدار از ${this.tool.fields.length} ورودی از پروفایل اعمال شد؛ باقی مقادیر پیش‌فرض ابزارند.`;
    this.selectedProfileId = id;
    this.loadedProfileUpdatedAt = profile.updatedAt;

    try {
      _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.select(id);
    } catch {
      /* Calculation still works if storage is blocked. */
    }

    this.calculate();
  }

  f(key, label, unit, value, min, max, step, info) {
    return {
      key,
      label,
      unit,
      value,
      min,
      max,
      step,
      info
    };
  }

  buildForm() {
    const controls = {};
    this.tool.fields.forEach(field => controls[field.key] = [field.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(field.min), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(field.max)]]);
    this.form = this.fb.group(controls);
    this.profiles = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.list();
    const active = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.active();

    if (active) {
      this.applyProfile(active.id);
    }

    this.subscription.add(this.form.valueChanges.subscribe(() => {
      this.calculate();
    }));
    this.calculate();
  }

  reset() {
    const values = {};
    this.tool.fields.forEach(field => values[field.key] = field.value);
    this.form.reset(values);
    this.csvName = '';
    this.csvRows = 0;
    this.calculate();
  }

  onInfo(field) {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alerts.create({
        cssClass: 'tuner-plus-beta-alert',
        header: field.label,
        message: field.info,
        buttons: ['متوجه شدم']
      });
      yield alert.present();
    })();
  }

  r(label, value, unit = '', tone = 'primary') {
    return {
      label,
      value: typeof value === 'number' ? this.round(value).toLocaleString('fa-IR') : value,
      unit,
      tone
    };
  }

  round(value) {
    return Math.round(value * 100) / 100;
  }

  calculate() {
    if (!this.form || this.form.invalid) {
      this.results = [];
      return;
    }

    const v = this.form.getRawValue();

    const n = key => Number(v[key]);

    let r = [];
    let advice = '';
    const pr = (1 + n('boost')) / Math.max(1, 1 - n('pressureDrop'));
    const compressorOut = (n('ambient') + 273.15) * Math.pow(pr, .286 / .72) - 273.15;
    const outlet = n('ambient') + (compressorOut - n('ambient')) * (1 - n('efficiency') / 100);
    const cfm = n('power') * 1.45;
    const area = n('power') * .065;
    r = [this.r('دمای هوای خروجی', outlet, '°C', outlet < 55 ? 'success' : 'warning'), this.r('دبی هدف', cfm, 'CFM'), this.r('سطح جلوی پیشنهادی', area, 'in²'), this.r('Pressure Ratio', pr, ':1')];
    advice = n('pressureDrop') > .15 ? 'افت فشار بالاست؛ core یا مسیر لوله‌کشی را بزرگ‌تر کنید.' : 'افت فشار در محدوده‌ی مناسب طراحی اولیه است.';
    this.results = r;
    this.advice = advice;
  }

};

IntercoolerComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__.CourseService
}, {
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__.SliderService
}];

IntercoolerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-intercooler',
  template: _intercooler_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_intercooler_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], IntercoolerComponent);


/***/ }),

/***/ 61228:
/*!*************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/intercooler/intercooler.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntercoolerModule": () => (/* binding */ IntercoolerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var _intercooler_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intercooler-routing.module */ 5637);
/* harmony import */ var _intercooler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intercooler.component */ 94076);









let IntercoolerModule = class IntercoolerModule {
};
IntercoolerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_intercooler_component__WEBPACK_IMPORTED_MODULE_3__.IntercoolerComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule, _intercooler_routing_module__WEBPACK_IMPORTED_MODULE_2__.IntercoolerRoutingModule
        ]
    })
], IntercoolerModule);



/***/ }),

/***/ 78846:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/intercooler/intercooler.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ".profile-select {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 17px;\n  padding: 13px 17px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 15px;\n  background: var(--ion-item-background, #fff);\n  color: var(--ion-text-color, #1c2430);\n}\n\n.profile-select > ion-icon {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 1.45rem;\n}\n\n.profile-select > div {\n  display: grid;\n  gap: 2px;\n  min-width: 140px;\n}\n\n.profile-select strong {\n  font-size: 0.81rem;\n}\n\n.profile-select small {\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.71rem;\n}\n\n.profile-select select {\n  flex: 1;\n  min-width: 180px;\n  max-width: 340px;\n  padding: 9px 11px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 9px;\n  background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #1c2430);\n  font: inherit;\n  font-size: 0.79rem;\n}\n\n.profile-select a {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.profile-select .profile-notice {\n  flex-basis: 100%;\n  padding-top: 5px;\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.7rem;\n  line-height: 1.7;\n}\n\n@media (max-width: 560px) {\n  .profile-select select {\n    flex-basis: 100%;\n    max-width: none;\n  }\n\n  .profile-select a {\n    margin-right: auto;\n  }\n}\n\n:host {\n  --surface: var(--ion-item-background, #fff);\n  --ink: var(--ion-text-color, #172033);\n  --muted: var(--ion-color-medium, #667085);\n}\n\n.lab-page {\n  --background: var(--tuner-page, #f4f7fb);\n}\n\n.lab-shell {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 22px 16px 54px;\n}\n\n.lab-hero {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  overflow: hidden;\n  padding: 28px 30px;\n  color: #fff;\n  border-radius: 25px;\n  background: linear-gradient(125deg, #111827, #1e293b 58%, var(--accent));\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);\n}\n\n.lab-hero::after {\n  content: \"\";\n  position: absolute;\n  width: 240px;\n  height: 240px;\n  left: -55px;\n  top: -100px;\n  border-radius: 50%;\n  background: color-mix(in srgb, var(--accent) 38%, transparent);\n}\n\n.lab-hero > * {\n  position: relative;\n  z-index: 1;\n}\n\n.hero-icon {\n  display: grid;\n  place-items: center;\n  flex: 0 0 66px;\n  width: 66px;\n  height: 66px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 19px;\n  background: rgba(255, 255, 255, 0.12);\n  font-size: 2rem;\n}\n\n.lab-hero span {\n  font-size: 0.76rem;\n  color: rgba(255, 255, 255, 0.72);\n}\n\n.lab-hero h1 {\n  margin: 4px 0;\n  font-size: clamp(1.45rem, 4vw, 2.15rem);\n}\n\n.lab-hero p {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.78);\n}\n\n.preview-badge {\n  margin-right: auto;\n  align-self: flex-start;\n  padding: 5px 9px;\n  color: #fff !important;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 999px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n}\n\n.workspace {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.8fr);\n  align-items: start;\n  gap: 16px;\n  margin-top: 20px;\n}\n\n.input-panel, .result-panel {\n  padding: 22px;\n  border: 1px solid var(--tuner-border, #e5eaf1);\n  border-radius: 21px;\n  background: var(--surface);\n  box-shadow: 0 8px 26px rgba(15, 23, 42, 0.055);\n}\n\n.result-panel {\n  position: sticky;\n  top: 12px;\n}\n\n.panel-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n\n.panel-title span {\n  color: var(--muted);\n  font-size: 0.72rem;\n}\n\n.panel-title h2 {\n  margin: 3px 0 0;\n  color: var(--ink);\n  font-size: 1.22rem;\n}\n\n.result-panel > .panel-title > ion-icon {\n  padding: 10px;\n  color: var(--accent);\n  border-radius: 12px;\n  background: color-mix(in srgb, var(--accent) 12%, transparent);\n  font-size: 1.4rem;\n}\n\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 18px;\n}\n\n.field > span {\n  display: flex;\n  align-items: center;\n  min-height: 26px;\n  color: var(--tuner-text, #344054);\n  font-size: 0.79rem;\n  font-weight: 700;\n}\n\n.field > div {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  border: 1px solid var(--tuner-border, #dfe5ee);\n  border-radius: 12px;\n  background: var(--tuner-soft, #f9fafb);\n  transition: 0.2s ease;\n}\n\n.field > div:focus-within {\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 0 0 3px rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.field input {\n  min-width: 0;\n  width: 100%;\n  padding: 12px;\n  color: var(--ink);\n  border: 0;\n  outline: 0;\n  background: transparent;\n  font: inherit;\n  direction: ltr;\n  text-align: right;\n}\n\n.field small {\n  padding: 0 10px;\n  color: var(--muted);\n  white-space: nowrap;\n}\n\n.info {\n  display: grid;\n  place-items: center;\n  padding: 0 4px;\n  color: var(--ion-color-primary);\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n.upload-zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  margin: 5px 0 18px;\n  padding: 28px 14px;\n  border: 2px dashed var(--tuner-border, #cbd5e1);\n  border-radius: 16px;\n  color: var(--muted);\n  background: var(--tuner-soft, #f8fafc);\n  cursor: pointer;\n  text-align: center;\n}\n\n.upload-zone:hover {\n  border-color: var(--ion-color-primary);\n}\n\n.upload-zone input {\n  display: none;\n}\n\n.upload-zone ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 2.1rem;\n}\n\n.upload-zone strong {\n  color: var(--ink);\n}\n\n.upload-zone span {\n  font-size: 0.74rem;\n}\n\n.result-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.result-card {\n  min-width: 0;\n  padding: 14px;\n  border-right: 3px solid var(--accent);\n  border-radius: 13px;\n  background: var(--tuner-soft, #f8fafc);\n}\n\n.result-card span {\n  display: block;\n  min-height: 34px;\n  color: var(--muted);\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n\n.result-card strong {\n  color: var(--ink);\n  font-size: 1.22rem;\n  overflow-wrap: anywhere;\n}\n\n.result-card small {\n  margin-right: 5px;\n  color: var(--muted);\n}\n\n.tone-success {\n  border-color: var(--tuner-success-border, #10b981);\n}\n\n.tone-warning {\n  border-color: var(--tuner-warning-border, #f59e0b);\n}\n\n.tone-danger {\n  border-color: var(--tuner-danger-border, #ef4444);\n}\n\n.advice, .engineering-note {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  margin-top: 14px;\n  padding: 13px;\n  border-radius: 13px;\n}\n\n.advice {\n  color: var(--tuner-info-text, #174ea6);\n  background: var(--tuner-info-soft, #edf5ff);\n}\n\n.engineering-note {\n  color: var(--tuner-muted, #475467);\n  background: var(--tuner-soft, #f2f4f7);\n}\n\n.advice ion-icon, .engineering-note ion-icon {\n  flex: 0 0 auto;\n  margin-top: 2px;\n}\n\n.advice p, .engineering-note p {\n  margin: 0;\n  font-size: 0.78rem;\n  line-height: 1.75;\n}\n\n.empty-result {\n  display: grid;\n  place-items: center;\n  min-height: 190px;\n  color: var(--tuner-muted, #98a2b3);\n  text-align: center;\n}\n\n.empty-result ion-icon {\n  font-size: 2.6rem;\n}\n\n.empty-result p {\n  max-width: 240px;\n  line-height: 1.8;\n}\n\n@media (max-width: 850px) {\n  .workspace {\n    grid-template-columns: 1fr;\n  }\n\n  .result-panel {\n    position: static;\n  }\n}\n\n@media (max-width: 560px) {\n  .lab-shell {\n    padding: 12px 11px 38px;\n  }\n\n  .lab-hero {\n    align-items: flex-start;\n    padding: 22px 18px;\n  }\n\n  .hero-icon {\n    width: 50px;\n    height: 50px;\n    flex-basis: 50px;\n  }\n\n  .preview-badge {\n    display: none;\n  }\n\n  .field-grid, .result-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .input-panel, .result-panel {\n    padding: 17px;\n    border-radius: 17px;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfcHJvZmlsZS1zZWxlY3Quc2NzcyIsImludGVyY29vbGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXF90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWtCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixTQUFBO0VBQVcsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixrQkFBQTtFQUFvQix1REFBQTtFQUF5RCxtQkFBQTtFQUFxQiw0Q0FBQTtFQUE4QyxxQ0FBQTtBQ1dwUDs7QURWQTtFQUE2Qix1Q0FBQTtFQUF5QyxrQkFBQTtBQ2V0RTs7QURkQTtFQUF3QixhQUFBO0VBQWUsUUFBQTtFQUFVLGdCQUFBO0FDb0JqRDs7QURuQkE7RUFBeUIsa0JBQUE7QUN1QnpCOztBRHRCQTtFQUF3Qix1Q0FBQTtFQUF5QyxrQkFBQTtBQzJCakU7O0FEMUJBO0VBQXlCLE9BQUE7RUFBUyxnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixpQkFBQTtFQUFtQix1REFBQTtFQUF5RCxrQkFBQTtFQUFvQiw2Q0FBQTtFQUErQyxxQ0FBQTtFQUF1QyxhQUFBO0VBQWUsa0JBQUE7QUN1QzNROztBRHRDQTtFQUFvQix1Q0FBQTtFQUF5QyxrQkFBQTtFQUFtQixnQkFBQTtFQUFrQixxQkFBQTtBQzZDbEc7O0FENUNBO0VBQWtDLGdCQUFBO0VBQWtCLGdCQUFBO0VBQWtCLHVDQUFBO0VBQXlDLGlCQUFBO0VBQWtCLGdCQUFBO0FDb0RqSTs7QURuREE7RUFBNEI7SUFBeUIsZ0JBQUE7SUFBa0IsZUFBQTtFQ3lEckU7O0VEekR1RjtJQUFvQixrQkFBQTtFQzZEM0c7QUFDRjs7QUFuRUE7RUFBUSwyQ0FBQTtFQUE2QyxxQ0FBQTtFQUF1Qyx5Q0FBQTtBQXdFNUY7O0FBdkVBO0VBQVksd0NBQUE7QUEyRVo7O0FBMUVBO0VBQWEsaUJBQUE7RUFBbUIsY0FBQTtFQUFnQix1QkFBQTtBQWdGaEQ7O0FBL0VBO0VBQVksa0JBQUE7RUFBb0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFC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RUEwWXJMOztFQTFZdU07SUFBVyxXQUFBO0lBQVcsWUFBQTtJQUFZLGdCQUFBO0VBZ1p6Tzs7RUFoWnlQO0lBQWUsYUFBQTtFQW9aeFE7O0VBcFpxUjtJQUF5QiwwQkFBQTtFQXdaOVM7O0VBeFp3VTtJQUEyQixhQUFBO0lBQWEsbUJBQUE7RUE2WmhYO0FBQ0Y7O0FDdGFFO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUR3YUo7O0FDcmFJOzs7RUFHRSx3QkFBQTtFQUNBLG1DQUFBO0FEdWFOOztBQ3BhSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBRHNhTjs7QUNuYUk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7QURxYU47O0FDbmFJO0VBQWMsK0JBQUE7RUFBaUMsMEJBQUE7QUR1YW5EOztBQ3RhSTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBRHdhTjs7QUN0YUk7RUFBVyxnQ0FBQTtBRHlhZjs7QUN4YUk7RUFBb0Msd0JBQUE7QUQyYXhDOztBQzFhSTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FENGFOOztBQzFhSTtFQUFrRCxtQ0FBQTtBRDZhdEQiLCJmaWxlIjoiaW50ZXJjb29sZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1zZWxlY3QgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IGZsZXgtd3JhcDogd3JhcDsgbWFyZ2luLXRvcDogMTdweDsgcGFkZGluZzogMTNweCAxN3B4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNkMGQ1ZGQpOyBib3JkZXItcmFkaXVzOiAxNXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCAjZmZmKTsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMWMyNDMwKTsgfVxuLnByb2ZpbGUtc2VsZWN0ID4gaW9uLWljb24geyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2QxMjMzMik7IGZvbnQtc2l6ZTogMS40NXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0ID4gZGl2IHsgZGlzcGxheTogZ3JpZDsgZ2FwOiAycHg7IG1pbi13aWR0aDogMTQwcHg7IH1cbi5wcm9maWxlLXNlbGVjdCBzdHJvbmcgeyBmb250LXNpemU6IC44MXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0IHNtYWxsIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM2NjcwODUpOyBmb250LXNpemU6IC43MXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0IHNlbGVjdCB7IGZsZXg6IDE7IG1pbi13aWR0aDogMTgwcHg7IG1heC13aWR0aDogMzQwcHg7IHBhZGRpbmc6IDlweCAxMXB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNkMGQ1ZGQpOyBib3JkZXItcmFkaXVzOiA5cHg7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMWMyNDMwKTsgZm9udDogaW5oZXJpdDsgZm9udC1zaXplOiAuNzlyZW07IH1cbi5wcm9maWxlLXNlbGVjdCBhIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNkMTIzMzIpOyBmb250LXNpemU6IC43NnJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4ucHJvZmlsZS1zZWxlY3QgLnByb2ZpbGUtbm90aWNlIHsgZmxleC1iYXNpczogMTAwJTsgcGFkZGluZy10b3A6IDVweDsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM2NjcwODUpOyBmb250LXNpemU6IC43cmVtOyBsaW5lLWhlaWdodDogMS43OyB9XG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHsgLnByb2ZpbGUtc2VsZWN0IHNlbGVjdCB7IGZsZXgtYmFzaXM6IDEwMCU7IG1heC13aWR0aDogbm9uZTsgfS5wcm9maWxlLXNlbGVjdCBhIHsgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9IH1cbiIsIkBpbXBvcnQgJy4uL3RoZW1lJztcclxuXHJcbkBpbXBvcnQgJy4uL3Byb2ZpbGUtc2VsZWN0JztcclxuOmhvc3QgeyAtLXN1cmZhY2U6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsICNmZmYpOyAtLWluazogdmFyKC0taW9uLXRleHQtY29sb3IsICMxNzIwMzMpOyAtLW11dGVkOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjNjY3MDg1KTsgfVxyXG4ubGFiLXBhZ2UgeyAtLWJhY2tncm91bmQ6ICN7dHVuZXItY29sb3IocGFnZSwgI2Y0ZjdmYil9OyB9XHJcbi5sYWItc2hlbGwgeyBtYXgtd2lkdGg6IDEyODBweDsgbWFyZ2luOiAwIGF1dG87IHBhZGRpbmc6IDIycHggMTZweCA1NHB4OyB9XHJcbi5sYWItaGVybyB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxOHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwYWRkaW5nOiAyOHB4IDMwcHg7IGNvbG9yOiAjZmZmOyBib3JkZXItcmFkaXVzOiAyNXB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTI1ZGVnLCMxMTE4MjcsIzFlMjkzYiA1OCUsdmFyKC0tYWNjZW50KSk7IGJveC1zaGFkb3c6IDAgMThweCA0MHB4IHJnYmEoMTUsMjMsNDIsLjE4KTsgfVxyXG4ubGFiLWhlcm86OmFmdGVyIHsgY29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDI0MHB4OyBoZWlnaHQ6IDI0MHB4OyBsZWZ0OiAtNTVweDsgdG9wOiAtMTAwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsdmFyKC0tYWNjZW50KSAzOCUsdHJhbnNwYXJlbnQpOyB9XHJcbi5sYWItaGVybyA+ICogeyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDE7IH0uaGVyby1pY29uIHsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgZmxleDogMCAwIDY2cHg7IHdpZHRoOiA2NnB4OyBoZWlnaHQ6IDY2cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjI1KTsgYm9yZGVyLXJhZGl1czogMTlweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTIpOyBmb250LXNpemU6IDJyZW07IH0ubGFiLWhlcm8gc3BhbiB7IGZvbnQtc2l6ZTogLjc2cmVtOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNzIpOyB9LmxhYi1oZXJvIGgxIHsgbWFyZ2luOiA0cHggMDsgZm9udC1zaXplOiBjbGFtcCgxLjQ1cmVtLDR2dywyLjE1cmVtKTsgfS5sYWItaGVybyBwIHsgbWFyZ2luOiAwOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNzgpOyB9LnByZXZpZXctYmFkZ2UgeyBtYXJnaW4tcmlnaHQ6IGF1dG87IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IHBhZGRpbmc6IDVweCA5cHg7IGNvbG9yOiAjZmZmIWltcG9ydGFudDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMjUpOyBib3JkZXItcmFkaXVzOiA5OTlweDsgZm9udC13ZWlnaHQ6IDgwMDsgbGV0dGVyLXNwYWNpbmc6IC4wOGVtOyB9XHJcbi53b3Jrc3BhY2UgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLDFmcikgbWlubWF4KDMyMHB4LC44ZnIpOyBhbGlnbi1pdGVtczogc3RhcnQ7IGdhcDogMTZweDsgbWFyZ2luLXRvcDogMjBweDsgfS5pbnB1dC1wYW5lbCwucmVzdWx0LXBhbmVsIHsgcGFkZGluZzogMjJweDsgYm9yZGVyOiAxcHggc29saWQgdHVuZXItY29sb3IoYm9yZGVyLCAjZTVlYWYxKTsgYm9yZGVyLXJhZGl1czogMjFweDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJveC1zaGFkb3c6IDAgOHB4IDI2cHggcmdiYSgxNSwyMyw0MiwuMDU1KTsgfS5yZXN1bHQtcGFuZWwgeyBwb3NpdGlvbjogc3RpY2t5OyB0b3A6IDEycHg7IH0ucGFuZWwtdGl0bGUgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IGdhcDoxMnB4OyBtYXJnaW4tYm90dG9tOjE4cHg7IH0ucGFuZWwtdGl0bGUgc3BhbiB7IGNvbG9yOnZhcigtLW11dGVkKTsgZm9udC1zaXplOi43MnJlbTsgfS5wYW5lbC10aXRsZSBoMiB7IG1hcmdpbjozcHggMCAwOyBjb2xvcjp2YXIoLS1pbmspOyBmb250LXNpemU6MS4yMnJlbTsgfS5yZXN1bHQtcGFuZWwgPiAucGFuZWwtdGl0bGUgPiBpb24taWNvbiB7IHBhZGRpbmc6MTBweDsgY29sb3I6dmFyKC0tYWNjZW50KTsgYm9yZGVyLXJhZGl1czoxMnB4OyBiYWNrZ3JvdW5kOmNvbG9yLW1peChpbiBzcmdiLHZhcigtLWFjY2VudCkgMTIlLHRyYW5zcGFyZW50KTsgZm9udC1zaXplOjEuNHJlbTsgfVxyXG4uZmllbGQtZ3JpZCB7IGRpc3BsYXk6Z3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLG1pbm1heCgwLDFmcikpOyBnYXA6MTJweDsgbWFyZ2luLWJvdHRvbToxOHB4OyB9LmZpZWxkID4gc3BhbiB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBtaW4taGVpZ2h0OjI2cHg7IGNvbG9yOnR1bmVyLWNvbG9yKHRleHQsICMzNDQwNTQpOyBmb250LXNpemU6Ljc5cmVtOyBmb250LXdlaWdodDo3MDA7IH0uZmllbGQgPiBkaXYgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgb3ZlcmZsb3c6aGlkZGVuOyBib3JkZXI6MXB4IHNvbGlkIHR1bmVyLWNvbG9yKGJvcmRlciwgI2RmZTVlZSk7IGJvcmRlci1yYWRpdXM6MTJweDsgYmFja2dyb3VuZDp0dW5lci1jb2xvcihzb2Z0LCAjZjlmYWZiKTsgdHJhbnNpdGlvbjouMnMgZWFzZTsgfS5maWVsZCA+IGRpdjpmb2N1cy13aXRoaW4geyBib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksLjEpOyB9LmZpZWxkIGlucHV0IHsgbWluLXdpZHRoOjA7IHdpZHRoOjEwMCU7IHBhZGRpbmc6MTJweDsgY29sb3I6dmFyKC0taW5rKTsgYm9yZGVyOjA7IG91dGxpbmU6MDsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgZm9udDppbmhlcml0OyBkaXJlY3Rpb246bHRyOyB0ZXh0LWFsaWduOnJpZ2h0OyB9LmZpZWxkIHNtYWxsIHsgcGFkZGluZzowIDEwcHg7IGNvbG9yOnZhcigtLW11dGVkKTsgd2hpdGUtc3BhY2U6bm93cmFwOyB9LmluZm8geyBkaXNwbGF5OmdyaWQ7IHBsYWNlLWl0ZW1zOmNlbnRlcjsgcGFkZGluZzowIDRweDsgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBib3JkZXI6MDsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgY3Vyc29yOnBvaW50ZXI7IGZvbnQtc2l6ZToxcmVtOyB9XHJcbi51cGxvYWQtem9uZSB7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDo1cHg7IG1hcmdpbjo1cHggMCAxOHB4OyBwYWRkaW5nOjI4cHggMTRweDsgYm9yZGVyOjJweCBkYXNoZWQgdHVuZXItY29sb3IoYm9yZGVyLCAjY2JkNWUxKTsgYm9yZGVyLXJhZGl1czoxNnB4OyBjb2xvcjp2YXIoLS1tdXRlZCk7IGJhY2tncm91bmQ6dHVuZXItY29sb3Ioc29mdCwgI2Y4ZmFmYyk7IGN1cnNvcjpwb2ludGVyOyB0ZXh0LWFsaWduOmNlbnRlcjsgfS51cGxvYWQtem9uZTpob3ZlciB7IGJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IH0udXBsb2FkLXpvbmUgaW5wdXQgeyBkaXNwbGF5Om5vbmU7IH0udXBsb2FkLXpvbmUgaW9uLWljb24geyBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IGZvbnQtc2l6ZToyLjFyZW07IH0udXBsb2FkLXpvbmUgc3Ryb25nIHsgY29sb3I6dmFyKC0taW5rKTsgfS51cGxvYWQtem9uZSBzcGFuIHsgZm9udC1zaXplOi43NHJlbTsgfVxyXG4ucmVzdWx0LWdyaWQgeyBkaXNwbGF5OmdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMixtaW5tYXgoMCwxZnIpKTsgZ2FwOjEwcHg7IH0ucmVzdWx0LWNhcmQgeyBtaW4td2lkdGg6MDsgcGFkZGluZzoxNHB4OyBib3JkZXItcmlnaHQ6M3B4IHNvbGlkIHZhcigtLWFjY2VudCk7IGJvcmRlci1yYWRpdXM6MTNweDsgYmFja2dyb3VuZDp0dW5lci1jb2xvcihzb2Z0LCAjZjhmYWZjKTsgfS5yZXN1bHQtY2FyZCBzcGFuIHsgZGlzcGxheTpibG9jazsgbWluLWhlaWdodDozNHB4OyBjb2xvcjp2YXIoLS1tdXRlZCk7IGZvbnQtc2l6ZTouNzJyZW07IGxpbmUtaGVpZ2h0OjEuNDU7IH0ucmVzdWx0LWNhcmQgc3Ryb25nIHsgY29sb3I6dmFyKC0taW5rKTsgZm9udC1zaXplOjEuMjJyZW07IG92ZXJmbG93LXdyYXA6YW55d2hlcmU7IH0ucmVzdWx0LWNhcmQgc21hbGwgeyBtYXJnaW4tcmlnaHQ6NXB4OyBjb2xvcjp2YXIoLS1tdXRlZCk7IH0udG9uZS1zdWNjZXNzIHsgYm9yZGVyLWNvbG9yOnR1bmVyLWNvbG9yKHN1Y2Nlc3MtYm9yZGVyLCAjMTBiOTgxKTsgfS50b25lLXdhcm5pbmcgeyBib3JkZXItY29sb3I6dHVuZXItY29sb3Iod2FybmluZy1ib3JkZXIsICNmNTllMGIpOyB9LnRvbmUtZGFuZ2VyIHsgYm9yZGVyLWNvbG9yOnR1bmVyLWNvbG9yKGRhbmdlci1ib3JkZXIsICNlZjQ0NDQpOyB9XHJcbi5hZHZpY2UsLmVuZ2luZWVyaW5nLW5vdGUgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7IGdhcDo5cHg7IG1hcmdpbi10b3A6MTRweDsgcGFkZGluZzoxM3B4OyBib3JkZXItcmFkaXVzOjEzcHg7IH0uYWR2aWNlIHsgY29sb3I6dHVuZXItY29sb3IoaW5mby10ZXh0LCAjMTc0ZWE2KTsgYmFja2dyb3VuZDp0dW5lci1jb2xvcihpbmZvLXNvZnQsICNlZGY1ZmYpOyB9LmVuZ2luZWVyaW5nLW5vdGUgeyBjb2xvcjp0dW5lci1jb2xvcihtdXRlZCwgIzQ3NTQ2Nyk7IGJhY2tncm91bmQ6dHVuZXItY29sb3Ioc29mdCwgI2YyZjRmNyk7IH0uYWR2aWNlIGlvbi1pY29uLC5lbmdpbmVlcmluZy1ub3RlIGlvbi1pY29uIHsgZmxleDowIDAgYXV0bzsgbWFyZ2luLXRvcDoycHg7IH0uYWR2aWNlIHAsLmVuZ2luZWVyaW5nLW5vdGUgcCB7IG1hcmdpbjowOyBmb250LXNpemU6Ljc4cmVtOyBsaW5lLWhlaWdodDoxLjc1OyB9LmVtcHR5LXJlc3VsdCB7IGRpc3BsYXk6Z3JpZDsgcGxhY2UtaXRlbXM6Y2VudGVyOyBtaW4taGVpZ2h0OjE5MHB4OyBjb2xvcjp0dW5lci1jb2xvcihtdXRlZCwgIzk4YTJiMyk7IHRleHQtYWxpZ246Y2VudGVyOyB9LmVtcHR5LXJlc3VsdCBpb24taWNvbiB7IGZvbnQtc2l6ZToyLjZyZW07IH0uZW1wdHktcmVzdWx0IHAgeyBtYXgtd2lkdGg6MjQwcHg7IGxpbmUtaGVpZ2h0OjEuODsgfVxyXG5AbWVkaWEobWF4LXdpZHRoOjg1MHB4KXsud29ya3NwYWNle2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnJ9LnJlc3VsdC1wYW5lbHtwb3NpdGlvbjpzdGF0aWN9fUBtZWRpYShtYXgtd2lkdGg6NTYwcHgpey5sYWItc2hlbGx7cGFkZGluZzoxMnB4IDExcHggMzhweH0ubGFiLWhlcm97YWxpZ24taXRlbXM6ZmxleC1zdGFydDtwYWRkaW5nOjIycHggMThweH0uaGVyby1pY29ue3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7ZmxleC1iYXNpczo1MHB4fS5wcmV2aWV3LWJhZGdle2Rpc3BsYXk6bm9uZX0uZmllbGQtZ3JpZCwucmVzdWx0LWdyaWR7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcn0uaW5wdXQtcGFuZWwsLnJlc3VsdC1wYW5lbHtwYWRkaW5nOjE3cHg7Ym9yZGVyLXJhZGl1czoxN3B4fX1cclxuXHJcbkBpbmNsdWRlIHR1bmVyLWRhcmstdGhlbWU7XHJcbiIsIi8vIEtlZXAgdGhlIG9yaWdpbmFsIGxpZ2h0IGNvbG9yIGF0IGVhY2ggY2FsbCBzaXRlLiBUb2tlbnMgZXhpc3Qgb25seSBpbiBkYXJrIG1vZGUuXG5AZnVuY3Rpb24gdHVuZXItY29sb3IoJHJvbGUsICRsaWdodCkge1xuICBAcmV0dXJuIHZhcigtLXR1bmVyLSN7JHJvbGV9LCAjeyRsaWdodH0pO1xufVxuXG5AbWl4aW4gdHVuZXItZGFyay10aGVtZSB7XG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XG4gICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgIC0tdHVuZXItcGFnZTogIzExMTUxZTtcbiAgICAtLXR1bmVyLXN1cmZhY2U6ICMxYzIyMzA7XG4gICAgLS10dW5lci1zb2Z0OiAjMjUyZTNkO1xuICAgIC0tdHVuZXItYm9yZGVyOiAjNDY1MjY5O1xuICAgIC0tdHVuZXItdGV4dDogI2VkZjFmODtcbiAgICAtLXR1bmVyLW11dGVkOiAjYjJiZmQxO1xuICAgIC0tdHVuZXItaGVhZGVyOiByZ2JhKDI4LCAzNCwgNDgsIDAuOTQpO1xuICAgIC0tdHVuZXItb3ZlcmxheTogcmdiYSgyOCwgMzQsIDQ4LCAwLjk1KTtcbiAgICAtLXR1bmVyLXB1cnBsZS10ZXh0OiAjYzRiNWZkO1xuICAgIC0tdHVuZXItcHVycGxlLXNvZnQ6ICMzMDI0NDQ7XG4gICAgLS10dW5lci1wdXJwbGUtYm9yZGVyOiAjNzI1NzliO1xuICAgIC0tdHVuZXItaW5mby10ZXh0OiAjOTNjNWZkO1xuICAgIC0tdHVuZXItaW5mby1zb2Z0OiAjMWQzMDRjO1xuICAgIC0tdHVuZXItaW5mby1ib3JkZXI6ICM0NjZiOWE7XG4gICAgLS10dW5lci13YXJuaW5nLXRleHQ6ICNmY2Q0Nzc7XG4gICAgLS10dW5lci13YXJuaW5nLXNvZnQ6ICMzYjMwMjA7XG4gICAgLS10dW5lci13YXJuaW5nLWJvcmRlcjogIzkzNzQzZDtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtdGV4dDogIzg2ZWZhYztcbiAgICAtLXR1bmVyLXN1Y2Nlc3Mtc29mdDogIzE5MzkyZTtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtYm9yZGVyOiAjNDE3ZDYwO1xuICAgIC0tdHVuZXItZGFuZ2VyLXRleHQ6ICNmZGE0YWY7XG4gICAgLS10dW5lci1kYW5nZXItc29mdDogIzQwMjYzMTtcbiAgICAtLXR1bmVyLWRhbmdlci1ib3JkZXI6ICM5ODUzNjc7XG4gICAgLS10dW5lci10ZWFsLXRleHQ6ICM3ZGU0ZDQ7XG4gICAgLS10dW5lci10ZWFsLXNvZnQ6ICMxOTNhM2E7XG4gICAgLS10dW5lci10ZWFsLWJvcmRlcjogIzQzN2Y3YztcblxuICAgIC8vIE5hdGl2ZSBjb250cm9scyB3aXRob3V0IGFuIGV4cGxpY2l0IGxpZ2h0IGJhY2tncm91bmQgbmVlZCBhIGRhcmsgc3VyZmFjZSB0b28uXG4gICAgaW5wdXQ6bm90KFt0eXBlPSdyYW5nZSddKTpub3QoW3R5cGU9J2NoZWNrYm94J10pOm5vdChbdHlwZT0ncmFkaW8nXSk6bm90KFt0eXBlPSdidXR0b24nXSk6bm90KFt0eXBlPSdzdWJtaXQnXSk6bm90KFt0eXBlPSdmaWxlJ10pLFxuICAgIHRleHRhcmVhLFxuICAgIHNlbGVjdCB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG5cbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpO1xuICAgICAgb3BhY2l0eTogMC43NTtcbiAgICB9XG5cbiAgICBpb24taGVhZGVyLmxlYXJuaW5nLWhlYWRlciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQgeyAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXBhZ2UpOyAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkOm5vdChbY29sb3JdKSwgaW9uLWxpc3QsIGlvbi1pdGVtOm5vdChbY29sb3JdKSwgaW9uLWl0ZW0tZGl2aWRlcjpub3QoW2NvbG9yXSkge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1saXN0IHsgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7IH1cbiAgICBpb24tY2FyZC10aXRsZSwgaW9uLWNhcmQtc3VidGl0bGUgeyBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZFtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWl0ZW1bY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1mYWItYnV0dG9uW2NvbG9yPSdsaWdodGVzdCddIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuICAgIGlvbi10ZXh0W2NvbG9yPSdkYXJrJ10sIGlvbi1sYWJlbFtjb2xvcj0nZGFyayddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 85930:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/intercooler/intercooler.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  \n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" defaultHref=\"/TunerPlus\" color=\"light\"></ion-back-button></ion-buttons>\n<span page-title>{{ tool.title }}</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content class=\"lab-page\">\r\n  <main dir=\"rtl\" class=\"lab-shell\" *ngIf=\"isShow\">\r\n    <section class=\"lab-hero\" [style.--accent]=\"tool.accent\">\r\n      <div class=\"hero-icon\"><ion-icon [name]=\"tool.icon\"></ion-icon></div>\r\n      <div><span>آزمایشگاه مهندسی تیونر پلاس</span><h1>{{ tool.title }}</h1><p>{{ tool.subtitle }}</p></div>\r\n      <span class=\"preview-badge\">PREVIEW</span>\r\n    </section>\r\n\r\n\r\n    <section class=\"profile-select\" aria-label=\"انتخاب پروفایل خودرو\">\r\n      <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n      <div><strong>پروفایل خودرو</strong><small>مقادیر ثبت‌شده را در این ابزار اعمال کن</small></div>\r\n      <select [value]=\"selectedProfileId\" (change)=\"applyProfile($any($event.target).value)\" aria-label=\"پروفایل خودرو\">\r\n        <option value=\"\">انتخاب پروفایل</option>\r\n        <option *ngFor=\"let profile of profiles\" [value]=\"profile.id\">{{ profile.name }}</option>\r\n      </select>\r\n      <a routerLink=\"/TunerPlus/vehicle-profile\">ساخت یا ویرایش پروفایل</a>\r\n      <small class=\"profile-notice\" *ngIf=\"profileNotice\">{{ profileNotice }}</small>\r\n    </section>\r\n\r\n    <section class=\"workspace\">\r\n      <form class=\"input-panel\" [formGroup]=\"form\" *ngIf=\"form\">\r\n        <div class=\"panel-title\"><div><span>ورودی‌های محاسبه</span><h2>مشخصات پروژه</h2></div><ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"reset()\"><ion-icon slot=\"start\" name=\"refresh-outline\"></ion-icon>بازنشانی</ion-button></div>\r\n        <div class=\"field-grid\">\r\n          <label class=\"field\" *ngFor=\"let field of tool.fields\">\r\n            <span>{{ field.label }} <button type=\"button\" class=\"info\" (click)=\"onInfo(field)\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></span>\r\n            <div><input type=\"number\" [formControlName]=\"field.key\" [min]=\"field.min\" [max]=\"field.max\" [step]=\"field.step\"><small>{{ field.unit }}</small></div>\r\n          </label>\r\n        </div>\r\n      </form>\r\n\r\n      <section class=\"result-panel\" [style.--accent]=\"tool.accent\">\r\n        <div class=\"panel-title\"><div><span>خروجی مهندسی</span><h2>نتیجه تحلیل</h2></div><ion-icon name=\"pulse-outline\"></ion-icon></div>\r\n        <div *ngIf=\"results.length; else emptyResult\" class=\"result-grid\">\r\n          <article *ngFor=\"let result of results\" [class]=\"'result-card tone-' + result.tone\"><span>{{ result.label }}</span><strong>{{ result.value }}</strong><small>{{ result.unit }}</small></article>\r\n        </div>\r\n        <ng-template #emptyResult><div class=\"empty-result\"><ion-icon name=\"analytics-outline\"></ion-icon><p>مقادیر معتبر وارد کنید تا نتیجه نمایش داده شود.</p></div></ng-template>\r\n        <div class=\"advice\" *ngIf=\"advice\"><ion-icon name=\"bulb-outline\"></ion-icon><p>{{ advice }}</p></div>\r\n        <div class=\"engineering-note\"><ion-icon name=\"shield-checkmark-outline\"></ion-icon><p>{{ tool.note }}</p></div>\r\n      </section>\r\n    </section>\r\n  </main>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_intercooler_intercooler_module_ts.js.map