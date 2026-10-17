"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_cam-selector_cam-selector_module_ts"],{

/***/ 48883:
/*!***********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cam-selector/cam-selector-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamSelectorRoutingModule": () => (/* binding */ CamSelectorRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _cam_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cam-selector.component */ 5012);




const routes = [{ path: '', component: _cam_selector_component__WEBPACK_IMPORTED_MODULE_0__.CamSelectorComponent }];
let CamSelectorRoutingModule = class CamSelectorRoutingModule {
};
CamSelectorRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] })
], CamSelectorRoutingModule);



/***/ }),

/***/ 5012:
/*!******************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cam-selector/cam-selector.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamSelectorComponent": () => (/* binding */ CamSelectorComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cam_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cam-selector.component.html?ngResource */ 29326);
/* harmony import */ var _cam_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cam-selector.component.scss?ngResource */ 11739);
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















let CamSelectorComponent = class CamSelectorComponent {
  constructor(fb, router, alerts, loadingController, courseService, siteService) {
    this.fb = fb;
    this.router = router;
    this.alerts = alerts;
    this.loadingController = loadingController;
    this.courseService = courseService;
    this.siteService = siteService;
    this.tool = {
      slug: 'cam-selector',
      title: 'راهنمای انتخاب میل‌سوپاپ',
      subtitle: 'Duration، LSA و بازه دور پیشنهادی',
      icon: 'pulse-outline',
      accent: '#10b981',
      note: 'پیشنهاد هندسی اولیه است و باید با محدودیت‌های سرسیلندر و piston-to-valve کنترل شود.',
      fields: [this.f('displacement', 'حجم موتور', 'cc', 1600, 400, 9000, 50, 'حجم کل موتور.'), this.f('rpm', 'دور پیک توان هدف', 'rpm', 7000, 3000, 11000, 100, 'دوری که بیشینه توان مدنظر است.'), this.f('boost', 'بوست', 'bar', 0, 0, 4, .1, 'برای موتور تنفس طبیعی صفر وارد کنید.'), this.f('compression', 'نسبت تراکم', ':1', 10.5, 6, 16, .1, 'نسبت تراکم استاتیک.'), this.f('street', 'اولویت خیابانی', '%', 70, 0, 100, 5, '۱۰۰ یعنی دور آرام نرم و گشتاور پایین مهم‌تر است.')]
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

      _this.siteService.GetTunerPlusById(45).subscribe(res => {
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
    const rpmFactor = (n('rpm') - 5500) / 100;
    const street = n('street');
    const duration = Math.max(210, Math.min(290, 224 + rpmFactor * .35 + n('boost') * 3 - street * .08));
    const lsa = Math.max(106, Math.min(118, 108 + n('boost') * 3 + street * .035));
    const lift = 9 + n('rpm') / 2500 + Math.cbrt(n('displacement')) / 20;
    r = [this.r('Duration پیشنهادی @0.050', duration, '°'), this.r('LSA پیشنهادی', lsa, '°'), this.r('Lift اولیه', lift, 'mm'), this.r('شروع بازه توان', n('rpm') - 2200 + street * 8, 'rpm')];
    advice = n('boost') > 0 ? 'برای توربو overlap محدود و کنترل فشار اگزوز اولویت دارد.' : 'برای تنفس طبیعی، جریان سرسیلندر و طول منیفولد نتیجه را تعیین می‌کنند.';
    this.results = r;
    this.advice = advice;
  }

};

CamSelectorComponent.ctorParameters = () => [{
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

CamSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-cam-selector',
  template: _cam_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cam_selector_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CamSelectorComponent);


/***/ }),

/***/ 33827:
/*!***************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cam-selector/cam-selector.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamSelectorModule": () => (/* binding */ CamSelectorModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var _cam_selector_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cam-selector-routing.module */ 48883);
/* harmony import */ var _cam_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cam-selector.component */ 5012);









let CamSelectorModule = class CamSelectorModule {
};
CamSelectorModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_cam_selector_component__WEBPACK_IMPORTED_MODULE_3__.CamSelectorComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule, _cam_selector_routing_module__WEBPACK_IMPORTED_MODULE_2__.CamSelectorRoutingModule
        ]
    })
], CamSelectorModule);



/***/ }),

/***/ 11739:
/*!*******************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cam-selector/cam-selector.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ".profile-select {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 17px;\n  padding: 13px 17px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 15px;\n  background: var(--ion-item-background, #fff);\n  color: var(--ion-text-color, #1c2430);\n}\n\n.profile-select > ion-icon {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 1.45rem;\n}\n\n.profile-select > div {\n  display: grid;\n  gap: 2px;\n  min-width: 140px;\n}\n\n.profile-select strong {\n  font-size: 0.81rem;\n}\n\n.profile-select small {\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.71rem;\n}\n\n.profile-select select {\n  flex: 1;\n  min-width: 180px;\n  max-width: 340px;\n  padding: 9px 11px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 9px;\n  background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #1c2430);\n  font: inherit;\n  font-size: 0.79rem;\n}\n\n.profile-select a {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.profile-select .profile-notice {\n  flex-basis: 100%;\n  padding-top: 5px;\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.7rem;\n  line-height: 1.7;\n}\n\n@media (max-width: 560px) {\n  .profile-select select {\n    flex-basis: 100%;\n    max-width: none;\n  }\n\n  .profile-select a {\n    margin-right: auto;\n  }\n}\n\n:host {\n  --surface: var(--ion-item-background, #fff);\n  --ink: var(--ion-text-color, #172033);\n  --muted: var(--ion-color-medium, #667085);\n}\n\n.lab-page {\n  --background: var(--tuner-page, #f4f7fb);\n}\n\n.lab-shell {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 22px 16px 54px;\n}\n\n.lab-hero {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  overflow: hidden;\n  padding: 28px 30px;\n  color: #fff;\n  border-radius: 25px;\n  background: linear-gradient(125deg, #111827, #1e293b 58%, var(--accent));\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);\n}\n\n.lab-hero::after {\n  content: \"\";\n  position: absolute;\n  width: 240px;\n  height: 240px;\n  left: -55px;\n  top: -100px;\n  border-radius: 50%;\n  background: color-mix(in srgb, var(--accent) 38%, transparent);\n}\n\n.lab-hero > * {\n  position: relative;\n  z-index: 1;\n}\n\n.hero-icon {\n  display: grid;\n  place-items: center;\n  flex: 0 0 66px;\n  width: 66px;\n  height: 66px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 19px;\n  background: rgba(255, 255, 255, 0.12);\n  font-size: 2rem;\n}\n\n.lab-hero span {\n  font-size: 0.76rem;\n  color: rgba(255, 255, 255, 0.72);\n}\n\n.lab-hero h1 {\n  margin: 4px 0;\n  font-size: clamp(1.45rem, 4vw, 2.15rem);\n}\n\n.lab-hero p {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.78);\n}\n\n.preview-badge {\n  margin-right: auto;\n  align-self: flex-start;\n  padding: 5px 9px;\n  color: #fff !important;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 999px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n}\n\n.workspace {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.8fr);\n  align-items: start;\n  gap: 16px;\n  margin-top: 20px;\n}\n\n.input-panel, .result-panel {\n  padding: 22px;\n  border: 1px solid var(--tuner-border, #e5eaf1);\n  border-radius: 21px;\n  background: var(--surface);\n  box-shadow: 0 8px 26px rgba(15, 23, 42, 0.055);\n}\n\n.result-panel {\n  position: sticky;\n  top: 12px;\n}\n\n.panel-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n\n.panel-title span {\n  color: var(--muted);\n  font-size: 0.72rem;\n}\n\n.panel-title h2 {\n  margin: 3px 0 0;\n  color: var(--ink);\n  font-size: 1.22rem;\n}\n\n.result-panel > .panel-title > ion-icon {\n  padding: 10px;\n  color: var(--accent);\n  border-radius: 12px;\n  background: color-mix(in srgb, var(--accent) 12%, transparent);\n  font-size: 1.4rem;\n}\n\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 18px;\n}\n\n.field > span {\n  display: flex;\n  align-items: center;\n  min-height: 26px;\n  color: var(--tuner-text, #344054);\n  font-size: 0.79rem;\n  font-weight: 700;\n}\n\n.field > div {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  border: 1px solid var(--tuner-border, #dfe5ee);\n  border-radius: 12px;\n  background: var(--tuner-soft, #f9fafb);\n  transition: 0.2s ease;\n}\n\n.field > div:focus-within {\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 0 0 3px rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.field input {\n  min-width: 0;\n  width: 100%;\n  padding: 12px;\n  color: var(--ink);\n  border: 0;\n  outline: 0;\n  background: transparent;\n  font: inherit;\n  direction: ltr;\n  text-align: right;\n}\n\n.field small {\n  padding: 0 10px;\n  color: var(--muted);\n  white-space: nowrap;\n}\n\n.info {\n  display: grid;\n  place-items: center;\n  padding: 0 4px;\n  color: var(--ion-color-primary);\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n.upload-zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  margin: 5px 0 18px;\n  padding: 28px 14px;\n  border: 2px dashed var(--tuner-border, #cbd5e1);\n  border-radius: 16px;\n  color: var(--muted);\n  background: var(--tuner-soft, #f8fafc);\n  cursor: pointer;\n  text-align: center;\n}\n\n.upload-zone:hover {\n  border-color: var(--ion-color-primary);\n}\n\n.upload-zone input {\n  display: none;\n}\n\n.upload-zone ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 2.1rem;\n}\n\n.upload-zone strong {\n  color: var(--ink);\n}\n\n.upload-zone span {\n  font-size: 0.74rem;\n}\n\n.result-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.result-card {\n  min-width: 0;\n  padding: 14px;\n  border-right: 3px solid var(--accent);\n  border-radius: 13px;\n  background: var(--tuner-soft, #f8fafc);\n}\n\n.result-card span {\n  display: block;\n  min-height: 34px;\n  color: var(--muted);\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n\n.result-card strong {\n  color: var(--ink);\n  font-size: 1.22rem;\n  overflow-wrap: anywhere;\n}\n\n.result-card small {\n  margin-right: 5px;\n  color: var(--muted);\n}\n\n.tone-success {\n  border-color: var(--tuner-success-border, #10b981);\n}\n\n.tone-warning {\n  border-color: var(--tuner-warning-border, #f59e0b);\n}\n\n.tone-danger {\n  border-color: var(--tuner-danger-border, #ef4444);\n}\n\n.advice, .engineering-note {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  margin-top: 14px;\n  padding: 13px;\n  border-radius: 13px;\n}\n\n.advice {\n  color: var(--tuner-info-text, #174ea6);\n  background: var(--tuner-info-soft, #edf5ff);\n}\n\n.engineering-note {\n  color: var(--tuner-muted, #475467);\n  background: var(--tuner-soft, #f2f4f7);\n}\n\n.advice ion-icon, .engineering-note ion-icon {\n  flex: 0 0 auto;\n  margin-top: 2px;\n}\n\n.advice p, .engineering-note p {\n  margin: 0;\n  font-size: 0.78rem;\n  line-height: 1.75;\n}\n\n.empty-result {\n  display: grid;\n  place-items: center;\n  min-height: 190px;\n  color: var(--tuner-muted, #98a2b3);\n  text-align: center;\n}\n\n.empty-result ion-icon {\n  font-size: 2.6rem;\n}\n\n.empty-result p {\n  max-width: 240px;\n  line-height: 1.8;\n}\n\n@media (max-width: 850px) {\n  .workspace {\n    grid-template-columns: 1fr;\n  }\n\n  .result-panel {\n    position: static;\n  }\n}\n\n@media (max-width: 560px) {\n  .lab-shell {\n    padding: 12px 11px 38px;\n  }\n\n  .lab-hero {\n    align-items: flex-start;\n    padding: 22px 18px;\n  }\n\n  .hero-icon {\n    width: 50px;\n    height: 50px;\n    flex-basis: 50px;\n  }\n\n  .preview-badge {\n    display: none;\n  }\n\n  .field-grid, .result-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .input-panel, .result-panel {\n    padding: 17px;\n    border-radius: 17px;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfcHJvZmlsZS1zZWxlY3Quc2NzcyIsImNhbS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsIi4uXFxfdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFrQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtFQUFXLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IsdURBQUE7RUFBeUQsbUJBQUE7RUFBcUIsNENBQUE7RUFBOEMscUNBQUE7QUNXcFA7O0FEVkE7RUFBNkIsdUNBQUE7RUFBeUMsa0JBQUE7QUNldEU7O0FEZEE7RUFBd0IsYUFBQTtFQUFlLFFBQUE7RUFBVSxnQkFBQTtBQ29CakQ7O0FEbkJBO0VBQXlCLGtCQUFBO0FDdUJ6Qjs7QUR0QkE7RUFBd0IsdUNBQUE7RUFBeUMsa0JBQUE7QUMyQmpFOztBRDFCQTtFQUF5QixPQUFBO0VBQVMsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBbUIsdURBQUE7RUFBeUQsa0JBQUE7RUFBb0IsNkNBQUE7RUFBK0MscUNBQUE7RUFBdUMsYUFBQTtFQUFlLGtCQUFBO0FDdUMzUTs7QUR0Q0E7RUFBb0IsdUNBQUE7RUFBeUMsa0JBQUE7RUFBbUIsZ0JBQUE7RUFBa0IscUJBQUE7QUM2Q2xHOztBRDVDQTtFQUFrQyxnQkFBQTtFQUFrQixnQkFBQTtFQUFrQix1Q0FBQTtFQUF5QyxpQkFBQTtFQUFrQixnQkFBQTtBQ29Eakk7O0FEbkRBO0VBQTRCO0lBQXlCLGdCQUFBO0lBQWtCLGVBQUE7RUN5RHJFOztFRHpEdUY7SUFBb0Isa0JBQUE7RUM2RDNHO0FBQ0Y7O0FBbkVBO0VBQVEsMkNBQUE7RUFBNkMscUNBQUE7RUFBdUMseUNBQUE7QUF3RTVGOztBQXZFQTtFQUFZLHdDQUFBO0FBMkVaOztBQTFFQTtFQUFhLGlCQUFBO0VBQW1CLGNBQUE7RUFBZ0IsdUJBQUE7QUFnRmhEOztBQS9FQTtFQUFZLGtCQUFBO0VBQW9CLGFBQUE7RUFBZSxtQkFBQTtFQUFx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O0VBMFlyTDs7RUExWXVNO0lBQVcsV0FBQTtJQUFXLFlBQUE7SUFBWSxnQkFBQTtFQWdaek87O0VBaFp5UDtJQUFlLGFBQUE7RUFvWnhROztFQXBacVI7SUFBeUIsMEJBQUE7RUF3WjlTOztFQXhad1U7SUFBMkIsYUFBQTtJQUFhLG1CQUFBO0VBNlpoWDtBQUNGOztBQ3RhRTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FEd2FKOztBQ3JhSTs7O0VBR0Usd0JBQUE7RUFDQSxtQ0FBQTtBRHVhTjs7QUNwYUk7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QURzYU47O0FDbmFJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0FEcWFOOztBQ25hSTtFQUFjLCtCQUFBO0VBQWlDLDBCQUFBO0FEdWFuRDs7QUN0YUk7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUR3YU47O0FDdGFJO0VBQVcsZ0NBQUE7QUR5YWY7O0FDeGFJO0VBQW9DLHdCQUFBO0FEMmF4Qzs7QUMxYUk7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtBRDRhTjs7QUMxYUk7RUFBa0QsbUNBQUE7QUQ2YXREIiwiZmlsZSI6ImNhbS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXNlbGVjdCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDsgZmxleC13cmFwOiB3cmFwOyBtYXJnaW4tdG9wOiAxN3B4OyBwYWRkaW5nOiAxM3B4IDE3cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgI2QwZDVkZCk7IGJvcmRlci1yYWRpdXM6IDE1cHg7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsICNmZmYpOyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMxYzI0MzApOyB9XG4ucHJvZmlsZS1zZWxlY3QgPiBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZDEyMzMyKTsgZm9udC1zaXplOiAxLjQ1cmVtOyB9XG4ucHJvZmlsZS1zZWxlY3QgPiBkaXYgeyBkaXNwbGF5OiBncmlkOyBnYXA6IDJweDsgbWluLXdpZHRoOiAxNDBweDsgfVxuLnByb2ZpbGUtc2VsZWN0IHN0cm9uZyB7IGZvbnQtc2l6ZTogLjgxcmVtOyB9XG4ucHJvZmlsZS1zZWxlY3Qgc21hbGwgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzY2NzA4NSk7IGZvbnQtc2l6ZTogLjcxcmVtOyB9XG4ucHJvZmlsZS1zZWxlY3Qgc2VsZWN0IHsgZmxleDogMTsgbWluLXdpZHRoOiAxODBweDsgbWF4LXdpZHRoOiAzNDBweDsgcGFkZGluZzogOXB4IDExcHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgI2QwZDVkZCk7IGJvcmRlci1yYWRpdXM6IDlweDsgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpOyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMxYzI0MzApOyBmb250OiBpbmhlcml0OyBmb250LXNpemU6IC43OXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0IGEgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2QxMjMzMik7IGZvbnQtc2l6ZTogLjc2cmVtOyBmb250LXdlaWdodDogODAwOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbi5wcm9maWxlLXNlbGVjdCAucHJvZmlsZS1ub3RpY2UgeyBmbGV4LWJhc2lzOiAxMDAlOyBwYWRkaW5nLXRvcDogNXB4OyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzY2NzA4NSk7IGZvbnQtc2l6ZTogLjdyZW07IGxpbmUtaGVpZ2h0OiAxLjc7IH1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkgeyAucHJvZmlsZS1zZWxlY3Qgc2VsZWN0IHsgZmxleC1iYXNpczogMTAwJTsgbWF4LXdpZHRoOiBub25lOyB9LnByb2ZpbGUtc2VsZWN0IGEgeyBtYXJnaW4tcmlnaHQ6IGF1dG87IH0gfVxuIiwiQGltcG9ydCAnLi4vdGhlbWUnO1xyXG5cclxuQGltcG9ydCAnLi4vcHJvZmlsZS1zZWxlY3QnO1xyXG46aG9zdCB7IC0tc3VyZmFjZTogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgI2ZmZik7IC0taW5rOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzE3MjAzMyk7IC0tbXV0ZWQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM2NjcwODUpOyB9XHJcbi5sYWItcGFnZSB7IC0tYmFja2dyb3VuZDogI3t0dW5lci1jb2xvcihwYWdlLCAjZjRmN2ZiKX07IH1cclxuLmxhYi1zaGVsbCB7IG1heC13aWR0aDogMTI4MHB4OyBtYXJnaW46IDAgYXV0bzsgcGFkZGluZzogMjJweCAxNnB4IDU0cHg7IH1cclxuLmxhYi1oZXJvIHsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDE4cHg7IG92ZXJmbG93OiBoaWRkZW47IHBhZGRpbmc6IDI4cHggMzBweDsgY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDI1cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjVkZWcsIzExMTgyNywjMWUyOTNiIDU4JSx2YXIoLS1hY2NlbnQpKTsgYm94LXNoYWRvdzogMCAxOHB4IDQwcHggcmdiYSgxNSwyMyw0MiwuMTgpOyB9XHJcbi5sYWItaGVybzo6YWZ0ZXIgeyBjb250ZW50OiAnJzsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMjQwcHg7IGhlaWdodDogMjQwcHg7IGxlZnQ6IC01NXB4OyB0b3A6IC0xMDBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYix2YXIoLS1hY2NlbnQpIDM4JSx0cmFuc3BhcmVudCk7IH1cclxuLmxhYi1oZXJvID4gKiB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgfS5oZXJvLWljb24geyBkaXNwbGF5OiBncmlkOyBwbGFjZS1pdGVtczogY2VudGVyOyBmbGV4OiAwIDAgNjZweDsgd2lkdGg6IDY2cHg7IGhlaWdodDogNjZweDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMjUpOyBib3JkZXItcmFkaXVzOiAxOXB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xMik7IGZvbnQtc2l6ZTogMnJlbTsgfS5sYWItaGVybyBzcGFuIHsgZm9udC1zaXplOiAuNzZyZW07IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43Mik7IH0ubGFiLWhlcm8gaDEgeyBtYXJnaW46IDRweCAwOyBmb250LXNpemU6IGNsYW1wKDEuNDVyZW0sNHZ3LDIuMTVyZW0pOyB9LmxhYi1oZXJvIHAgeyBtYXJnaW46IDA7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43OCk7IH0ucHJldmlldy1iYWRnZSB7IG1hcmdpbi1yaWdodDogYXV0bzsgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgcGFkZGluZzogNXB4IDlweDsgY29sb3I6ICNmZmYhaW1wb3J0YW50OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yNSk7IGJvcmRlci1yYWRpdXM6IDk5OXB4OyBmb250LXdlaWdodDogODAwOyBsZXR0ZXItc3BhY2luZzogLjA4ZW07IH1cclxuLndvcmtzcGFjZSB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsMWZyKSBtaW5tYXgoMzIwcHgsLjhmcik7IGFsaWduLWl0ZW1zOiBzdGFydDsgZ2FwOiAxNnB4OyBtYXJnaW4tdG9wOiAyMHB4OyB9LmlucHV0LXBhbmVsLC5yZXN1bHQtcGFuZWwgeyBwYWRkaW5nOiAyMnB4OyBib3JkZXI6IDFweCBzb2xpZCB0dW5lci1jb2xvcihib3JkZXIsICNlNWVhZjEpOyBib3JkZXItcmFkaXVzOiAyMXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgYm94LXNoYWRvdzogMCA4cHggMjZweCByZ2JhKDE1LDIzLDQyLC4wNTUpOyB9LnJlc3VsdC1wYW5lbCB7IHBvc2l0aW9uOiBzdGlja3k7IHRvcDogMTJweDsgfS5wYW5lbC10aXRsZSB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgZ2FwOjEycHg7IG1hcmdpbi1ib3R0b206MThweDsgfS5wYW5lbC10aXRsZSBzcGFuIHsgY29sb3I6dmFyKC0tbXV0ZWQpOyBmb250LXNpemU6LjcycmVtOyB9LnBhbmVsLXRpdGxlIGgyIHsgbWFyZ2luOjNweCAwIDA7IGNvbG9yOnZhcigtLWluayk7IGZvbnQtc2l6ZToxLjIycmVtOyB9LnJlc3VsdC1wYW5lbCA+IC5wYW5lbC10aXRsZSA+IGlvbi1pY29uIHsgcGFkZGluZzoxMHB4OyBjb2xvcjp2YXIoLS1hY2NlbnQpOyBib3JkZXItcmFkaXVzOjEycHg7IGJhY2tncm91bmQ6Y29sb3ItbWl4KGluIHNyZ2IsdmFyKC0tYWNjZW50KSAxMiUsdHJhbnNwYXJlbnQpOyBmb250LXNpemU6MS40cmVtOyB9XHJcbi5maWVsZC1ncmlkIHsgZGlzcGxheTpncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsbWlubWF4KDAsMWZyKSk7IGdhcDoxMnB4OyBtYXJnaW4tYm90dG9tOjE4cHg7IH0uZmllbGQgPiBzcGFuIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IG1pbi1oZWlnaHQ6MjZweDsgY29sb3I6dHVuZXItY29sb3IodGV4dCwgIzM0NDA1NCk7IGZvbnQtc2l6ZTouNzlyZW07IGZvbnQtd2VpZ2h0OjcwMDsgfS5maWVsZCA+IGRpdiB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBvdmVyZmxvdzpoaWRkZW47IGJvcmRlcjoxcHggc29saWQgdHVuZXItY29sb3IoYm9yZGVyLCAjZGZlNWVlKTsgYm9yZGVyLXJhZGl1czoxMnB4OyBiYWNrZ3JvdW5kOnR1bmVyLWNvbG9yKHNvZnQsICNmOWZhZmIpOyB0cmFuc2l0aW9uOi4ycyBlYXNlOyB9LmZpZWxkID4gZGl2OmZvY3VzLXdpdGhpbiB7IGJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IGJveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwuMSk7IH0uZmllbGQgaW5wdXQgeyBtaW4td2lkdGg6MDsgd2lkdGg6MTAwJTsgcGFkZGluZzoxMnB4OyBjb2xvcjp2YXIoLS1pbmspOyBib3JkZXI6MDsgb3V0bGluZTowOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyBmb250OmluaGVyaXQ7IGRpcmVjdGlvbjpsdHI7IHRleHQtYWxpZ246cmlnaHQ7IH0uZmllbGQgc21hbGwgeyBwYWRkaW5nOjAgMTBweDsgY29sb3I6dmFyKC0tbXV0ZWQpOyB3aGl0ZS1zcGFjZTpub3dyYXA7IH0uaW5mbyB7IGRpc3BsYXk6Z3JpZDsgcGxhY2UtaXRlbXM6Y2VudGVyOyBwYWRkaW5nOjAgNHB4OyBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IGJvcmRlcjowOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyBjdXJzb3I6cG9pbnRlcjsgZm9udC1zaXplOjFyZW07IH1cclxuLnVwbG9hZC16b25lIHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjVweDsgbWFyZ2luOjVweCAwIDE4cHg7IHBhZGRpbmc6MjhweCAxNHB4OyBib3JkZXI6MnB4IGRhc2hlZCB0dW5lci1jb2xvcihib3JkZXIsICNjYmQ1ZTEpOyBib3JkZXItcmFkaXVzOjE2cHg7IGNvbG9yOnZhcigtLW11dGVkKTsgYmFja2dyb3VuZDp0dW5lci1jb2xvcihzb2Z0LCAjZjhmYWZjKTsgY3Vyc29yOnBvaW50ZXI7IHRleHQtYWxpZ246Y2VudGVyOyB9LnVwbG9hZC16b25lOmhvdmVyIHsgYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgfS51cGxvYWQtem9uZSBpbnB1dCB7IGRpc3BsYXk6bm9uZTsgfS51cGxvYWQtem9uZSBpb24taWNvbiB7IGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgZm9udC1zaXplOjIuMXJlbTsgfS51cGxvYWQtem9uZSBzdHJvbmcgeyBjb2xvcjp2YXIoLS1pbmspOyB9LnVwbG9hZC16b25lIHNwYW4geyBmb250LXNpemU6Ljc0cmVtOyB9XHJcbi5yZXN1bHQtZ3JpZCB7IGRpc3BsYXk6Z3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLG1pbm1heCgwLDFmcikpOyBnYXA6MTBweDsgfS5yZXN1bHQtY2FyZCB7IG1pbi13aWR0aDowOyBwYWRkaW5nOjE0cHg7IGJvcmRlci1yaWdodDozcHggc29saWQgdmFyKC0tYWNjZW50KTsgYm9yZGVyLXJhZGl1czoxM3B4OyBiYWNrZ3JvdW5kOnR1bmVyLWNvbG9yKHNvZnQsICNmOGZhZmMpOyB9LnJlc3VsdC1jYXJkIHNwYW4geyBkaXNwbGF5OmJsb2NrOyBtaW4taGVpZ2h0OjM0cHg7IGNvbG9yOnZhcigtLW11dGVkKTsgZm9udC1zaXplOi43MnJlbTsgbGluZS1oZWlnaHQ6MS40NTsgfS5yZXN1bHQtY2FyZCBzdHJvbmcgeyBjb2xvcjp2YXIoLS1pbmspOyBmb250LXNpemU6MS4yMnJlbTsgb3ZlcmZsb3ctd3JhcDphbnl3aGVyZTsgfS5yZXN1bHQtY2FyZCBzbWFsbCB7IG1hcmdpbi1yaWdodDo1cHg7IGNvbG9yOnZhcigtLW11dGVkKTsgfS50b25lLXN1Y2Nlc3MgeyBib3JkZXItY29sb3I6dHVuZXItY29sb3Ioc3VjY2Vzcy1ib3JkZXIsICMxMGI5ODEpOyB9LnRvbmUtd2FybmluZyB7IGJvcmRlci1jb2xvcjp0dW5lci1jb2xvcih3YXJuaW5nLWJvcmRlciwgI2Y1OWUwYik7IH0udG9uZS1kYW5nZXIgeyBib3JkZXItY29sb3I6dHVuZXItY29sb3IoZGFuZ2VyLWJvcmRlciwgI2VmNDQ0NCk7IH1cclxuLmFkdmljZSwuZW5naW5lZXJpbmctbm90ZSB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6ZmxleC1zdGFydDsgZ2FwOjlweDsgbWFyZ2luLXRvcDoxNHB4OyBwYWRkaW5nOjEzcHg7IGJvcmRlci1yYWRpdXM6MTNweDsgfS5hZHZpY2UgeyBjb2xvcjp0dW5lci1jb2xvcihpbmZvLXRleHQsICMxNzRlYTYpOyBiYWNrZ3JvdW5kOnR1bmVyLWNvbG9yKGluZm8tc29mdCwgI2VkZjVmZik7IH0uZW5naW5lZXJpbmctbm90ZSB7IGNvbG9yOnR1bmVyLWNvbG9yKG11dGVkLCAjNDc1NDY3KTsgYmFja2dyb3VuZDp0dW5lci1jb2xvcihzb2Z0LCAjZjJmNGY3KTsgfS5hZHZpY2UgaW9uLWljb24sLmVuZ2luZWVyaW5nLW5vdGUgaW9uLWljb24geyBmbGV4OjAgMCBhdXRvOyBtYXJnaW4tdG9wOjJweDsgfS5hZHZpY2UgcCwuZW5naW5lZXJpbmctbm90ZSBwIHsgbWFyZ2luOjA7IGZvbnQtc2l6ZTouNzhyZW07IGxpbmUtaGVpZ2h0OjEuNzU7IH0uZW1wdHktcmVzdWx0IHsgZGlzcGxheTpncmlkOyBwbGFjZS1pdGVtczpjZW50ZXI7IG1pbi1oZWlnaHQ6MTkwcHg7IGNvbG9yOnR1bmVyLWNvbG9yKG11dGVkLCAjOThhMmIzKTsgdGV4dC1hbGlnbjpjZW50ZXI7IH0uZW1wdHktcmVzdWx0IGlvbi1pY29uIHsgZm9udC1zaXplOjIuNnJlbTsgfS5lbXB0eS1yZXN1bHQgcCB7IG1heC13aWR0aDoyNDBweDsgbGluZS1oZWlnaHQ6MS44OyB9XHJcbkBtZWRpYShtYXgtd2lkdGg6ODUwcHgpey53b3Jrc3BhY2V7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcn0ucmVzdWx0LXBhbmVse3Bvc2l0aW9uOnN0YXRpY319QG1lZGlhKG1heC13aWR0aDo1NjBweCl7LmxhYi1zaGVsbHtwYWRkaW5nOjEycHggMTFweCAzOHB4fS5sYWItaGVyb3thbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3BhZGRpbmc6MjJweCAxOHB4fS5oZXJvLWljb257d2lkdGg6NTBweDtoZWlnaHQ6NTBweDtmbGV4LWJhc2lzOjUwcHh9LnByZXZpZXctYmFkZ2V7ZGlzcGxheTpub25lfS5maWVsZC1ncmlkLC5yZXN1bHQtZ3JpZHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyfS5pbnB1dC1wYW5lbCwucmVzdWx0LXBhbmVse3BhZGRpbmc6MTdweDtib3JkZXItcmFkaXVzOjE3cHh9fVxyXG5cclxuQGluY2x1ZGUgdHVuZXItZGFyay10aGVtZTtcclxuIiwiLy8gS2VlcCB0aGUgb3JpZ2luYWwgbGlnaHQgY29sb3IgYXQgZWFjaCBjYWxsIHNpdGUuIFRva2VucyBleGlzdCBvbmx5IGluIGRhcmsgbW9kZS5cbkBmdW5jdGlvbiB0dW5lci1jb2xvcigkcm9sZSwgJGxpZ2h0KSB7XG4gIEByZXR1cm4gdmFyKC0tdHVuZXItI3skcm9sZX0sICN7JGxpZ2h0fSk7XG59XG5cbkBtaXhpbiB0dW5lci1kYXJrLXRoZW1lIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgLS10dW5lci1wYWdlOiAjMTExNTFlO1xuICAgIC0tdHVuZXItc3VyZmFjZTogIzFjMjIzMDtcbiAgICAtLXR1bmVyLXNvZnQ6ICMyNTJlM2Q7XG4gICAgLS10dW5lci1ib3JkZXI6ICM0NjUyNjk7XG4gICAgLS10dW5lci10ZXh0OiAjZWRmMWY4O1xuICAgIC0tdHVuZXItbXV0ZWQ6ICNiMmJmZDE7XG4gICAgLS10dW5lci1oZWFkZXI6IHJnYmEoMjgsIDM0LCA0OCwgMC45NCk7XG4gICAgLS10dW5lci1vdmVybGF5OiByZ2JhKDI4LCAzNCwgNDgsIDAuOTUpO1xuICAgIC0tdHVuZXItcHVycGxlLXRleHQ6ICNjNGI1ZmQ7XG4gICAgLS10dW5lci1wdXJwbGUtc29mdDogIzMwMjQ0NDtcbiAgICAtLXR1bmVyLXB1cnBsZS1ib3JkZXI6ICM3MjU3OWI7XG4gICAgLS10dW5lci1pbmZvLXRleHQ6ICM5M2M1ZmQ7XG4gICAgLS10dW5lci1pbmZvLXNvZnQ6ICMxZDMwNGM7XG4gICAgLS10dW5lci1pbmZvLWJvcmRlcjogIzQ2NmI5YTtcbiAgICAtLXR1bmVyLXdhcm5pbmctdGV4dDogI2ZjZDQ3NztcbiAgICAtLXR1bmVyLXdhcm5pbmctc29mdDogIzNiMzAyMDtcbiAgICAtLXR1bmVyLXdhcm5pbmctYm9yZGVyOiAjOTM3NDNkO1xuICAgIC0tdHVuZXItc3VjY2Vzcy10ZXh0OiAjODZlZmFjO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1zb2Z0OiAjMTkzOTJlO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1ib3JkZXI6ICM0MTdkNjA7XG4gICAgLS10dW5lci1kYW5nZXItdGV4dDogI2ZkYTRhZjtcbiAgICAtLXR1bmVyLWRhbmdlci1zb2Z0OiAjNDAyNjMxO1xuICAgIC0tdHVuZXItZGFuZ2VyLWJvcmRlcjogIzk4NTM2NztcbiAgICAtLXR1bmVyLXRlYWwtdGV4dDogIzdkZTRkNDtcbiAgICAtLXR1bmVyLXRlYWwtc29mdDogIzE5M2EzYTtcbiAgICAtLXR1bmVyLXRlYWwtYm9yZGVyOiAjNDM3ZjdjO1xuXG4gICAgLy8gTmF0aXZlIGNvbnRyb2xzIHdpdGhvdXQgYW4gZXhwbGljaXQgbGlnaHQgYmFja2dyb3VuZCBuZWVkIGEgZGFyayBzdXJmYWNlIHRvby5cbiAgICBpbnB1dDpub3QoW3R5cGU9J3JhbmdlJ10pOm5vdChbdHlwZT0nY2hlY2tib3gnXSk6bm90KFt0eXBlPSdyYWRpbyddKTpub3QoW3R5cGU9J2J1dHRvbiddKTpub3QoW3R5cGU9J3N1Ym1pdCddKTpub3QoW3R5cGU9J2ZpbGUnXSksXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci1tdXRlZCk7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cblxuICAgIGlvbi1oZWFkZXIubGVhcm5pbmctaGVhZGVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItcGFnZSk7IC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmQ6bm90KFtjb2xvcl0pLCBpb24tbGlzdCwgaW9uLWl0ZW06bm90KFtjb2xvcl0pLCBpb24taXRlbS1kaXZpZGVyOm5vdChbY29sb3JdKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWxpc3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTsgfVxuICAgIGlvbi1jYXJkLXRpdGxlLCBpb24tY2FyZC1zdWJ0aXRsZSB7IGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkW2NvbG9yPSdsaWdodGVzdCddLCBpb24taXRlbVtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWZhYi1idXR0b25bY29sb3I9J2xpZ2h0ZXN0J10ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2RhcmsnXSwgaW9uLWxhYmVsW2NvbG9yPSdkYXJrJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 29326:
/*!*******************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cam-selector/cam-selector.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  \n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" defaultHref=\"/TunerPlus\" color=\"light\"></ion-back-button></ion-buttons>\n<span page-title>{{ tool.title }}</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content class=\"lab-page\">\r\n  <main dir=\"rtl\" class=\"lab-shell\" *ngIf=\"isShow\">\r\n    <section class=\"lab-hero\" [style.--accent]=\"tool.accent\">\r\n      <div class=\"hero-icon\"><ion-icon [name]=\"tool.icon\"></ion-icon></div>\r\n      <div><span>آزمایشگاه مهندسی تیونر پلاس</span><h1>{{ tool.title }}</h1><p>{{ tool.subtitle }}</p></div>\r\n      <span class=\"preview-badge\">PREVIEW</span>\r\n    </section>\r\n\r\n\r\n    <section class=\"profile-select\" aria-label=\"انتخاب پروفایل خودرو\">\r\n      <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n      <div><strong>پروفایل خودرو</strong><small>مقادیر ثبت‌شده را در این ابزار اعمال کن</small></div>\r\n      <select [value]=\"selectedProfileId\" (change)=\"applyProfile($any($event.target).value)\" aria-label=\"پروفایل خودرو\">\r\n        <option value=\"\">انتخاب پروفایل</option>\r\n        <option *ngFor=\"let profile of profiles\" [value]=\"profile.id\">{{ profile.name }}</option>\r\n      </select>\r\n      <a routerLink=\"/TunerPlus/vehicle-profile\">ساخت یا ویرایش پروفایل</a>\r\n      <small class=\"profile-notice\" *ngIf=\"profileNotice\">{{ profileNotice }}</small>\r\n    </section>\r\n\r\n    <section class=\"workspace\">\r\n      <form class=\"input-panel\" [formGroup]=\"form\" *ngIf=\"form\">\r\n        <div class=\"panel-title\"><div><span>ورودی‌های محاسبه</span><h2>مشخصات پروژه</h2></div><ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"reset()\"><ion-icon slot=\"start\" name=\"refresh-outline\"></ion-icon>بازنشانی</ion-button></div>\r\n        <div class=\"field-grid\">\r\n          <label class=\"field\" *ngFor=\"let field of tool.fields\">\r\n            <span>{{ field.label }} <button type=\"button\" class=\"info\" (click)=\"onInfo(field)\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></span>\r\n            <div><input type=\"number\" [formControlName]=\"field.key\" [min]=\"field.min\" [max]=\"field.max\" [step]=\"field.step\"><small>{{ field.unit }}</small></div>\r\n          </label>\r\n        </div>\r\n      </form>\r\n\r\n      <section class=\"result-panel\" [style.--accent]=\"tool.accent\">\r\n        <div class=\"panel-title\"><div><span>خروجی مهندسی</span><h2>نتیجه تحلیل</h2></div><ion-icon name=\"pulse-outline\"></ion-icon></div>\r\n        <div *ngIf=\"results.length; else emptyResult\" class=\"result-grid\">\r\n          <article *ngFor=\"let result of results\" [class]=\"'result-card tone-' + result.tone\"><span>{{ result.label }}</span><strong>{{ result.value }}</strong><small>{{ result.unit }}</small></article>\r\n        </div>\r\n        <ng-template #emptyResult><div class=\"empty-result\"><ion-icon name=\"analytics-outline\"></ion-icon><p>مقادیر معتبر وارد کنید تا نتیجه نمایش داده شود.</p></div></ng-template>\r\n        <div class=\"advice\" *ngIf=\"advice\"><ion-icon name=\"bulb-outline\"></ion-icon><p>{{ advice }}</p></div>\r\n        <div class=\"engineering-note\"><ion-icon name=\"shield-checkmark-outline\"></ion-icon><p>{{ tool.note }}</p></div>\r\n      </section>\r\n    </section>\r\n  </main>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_cam-selector_cam-selector_module_ts.js.map