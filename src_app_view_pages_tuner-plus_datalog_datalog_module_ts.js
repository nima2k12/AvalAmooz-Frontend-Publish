"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_datalog_datalog_module_ts"],{

/***/ 58093:
/*!*************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/datalog/datalog-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatalogRoutingModule": () => (/* binding */ DatalogRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _datalog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datalog.component */ 91848);




const routes = [{ path: '', component: _datalog_component__WEBPACK_IMPORTED_MODULE_0__.DatalogComponent }];
let DatalogRoutingModule = class DatalogRoutingModule {
};
DatalogRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] })
], DatalogRoutingModule);



/***/ }),

/***/ 91848:
/*!********************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/datalog/datalog.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatalogComponent": () => (/* binding */ DatalogComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _datalog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datalog.component.html?ngResource */ 17859);
/* harmony import */ var _datalog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datalog.component.scss?ngResource */ 85260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/Urls */ 35602);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);
/* harmony import */ var _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vehicle-profile/vehicle-profile.store */ 78994);














let DatalogComponent = class DatalogComponent {
  constructor(fb, router, alerts, loadingController, courseService, siteService) {
    this.fb = fb;
    this.router = router;
    this.alerts = alerts;
    this.loadingController = loadingController;
    this.courseService = courseService;
    this.siteService = siteService;
    this.tool = {
      slug: 'datalog',
      title: 'تحلیل‌گر دیتالاگ ECU',
      subtitle: 'تحلیل CSV، خطای AFR و پیشنهاد اصلاح VE',
      icon: 'analytics-outline',
      accent: '#3b82f6',
      note: 'نام ستون‌ها می‌تواند RPM، MAP، AFR و TargetAFR باشد.',
      fields: [this.f('targetAfr', 'AFR هدف پیش‌فرض', '', 12.5, 7, 22, .1, 'اگر فایل ستون TargetAFR نداشته باشد از این مقدار استفاده می‌شود.'), this.f('smoothing', 'ضریب هموارسازی', '%', 65, 0, 100, 1, 'درصد اعمال پیشنهاد اصلاح VE؛ مقدار کمتر محافظه‌کارانه‌تر است.')]
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
  }

  ngOnInit() {
    this.buildForm();
    void this.check();
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(_this.loadingController);

      _this.siteService.GetTunerPlusById(40).subscribe(res => {
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

    if (this.csvRows) {
      this.results = [];
      this.advice = 'هدف AFR تغییر کرده است؛ فایل دیتالاگ را دوباره بارگذاری کنید.';
      this.csvRows = 0;
    }

    this.selectedProfileId = id;
    this.loadedProfileUpdatedAt = profile.updatedAt;

    try {
      _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.select(id);
    } catch {
      /* Calculation still works if storage is blocked. */
    }
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
    this.tool.fields.forEach(field => controls[field.key] = [field.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(field.min), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(field.max)]]);
    this.form = this.fb.group(controls);
    this.profiles = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.list();
    const active = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.active();

    if (active) {
      this.applyProfile(active.id);
    }
  }

  reset() {
    const values = {};
    this.tool.fields.forEach(field => values[field.key] = field.value);
    this.form.reset(values);
    this.csvName = '';
    this.csvRows = 0;
    this.results = [];
    this.advice = '';
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

  onCsv(event) {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const input = event.target;
      const file = input.files && input.files[0];

      if (!file) {
        return;
      }

      _this3.csvName = file.name;
      const text = yield file.text();
      const lines = text.split(/\r?\n/).filter(Boolean);

      if (lines.length < 2) {
        _this3.results = [];
        _this3.advice = 'فایل داده معتبر نیست.';
        return;
      }

      const delimiter = lines[0].includes(';') ? ';' : ',';
      const headers = lines[0].split(delimiter).map(x => x.trim().toLowerCase());

      const index = names => headers.findIndex(h => names.some(name => h.replace(/[^a-z]/g, '').includes(name)));

      const afrI = index(['afr', 'lambda']);
      const targetI = index(['targetafr', 'afrtarget', 'commandedafr']);
      const rpmI = index(['rpm']);
      const errors = [];
      const rpms = [];

      for (const line of lines.slice(1)) {
        const cols = line.split(delimiter);
        let afr = Number(cols[afrI]);

        if (afrI < 0 || !isFinite(afr)) {
          continue;
        }

        if (headers[afrI].includes('lambda')) {
          afr *= 14.7;
        }

        const target = targetI >= 0 ? Number(cols[targetI]) : Number(_this3.form.value.targetAfr);

        if (!isFinite(target) || target <= 0) {
          continue;
        }

        errors.push((afr / target - 1) * 100);

        if (rpmI >= 0) {
          const rpm = Number(cols[rpmI]);

          if (isFinite(rpm)) {
            rpms.push(rpm);
          }
        }
      }

      _this3.csvRows = errors.length;

      if (!errors.length) {
        _this3.results = [];
        _this3.advice = 'ستون AFR یا Lambda شناسایی نشد. نام ستون را بررسی کنید.';
        return;
      }

      const avg = errors.reduce((a, b) => a + b, 0) / errors.length;
      const max = Math.max(...errors.map(Math.abs));
      const correction = avg * Number(_this3.form.value.smoothing) / 100;
      _this3.results = [_this3.r('نمونه‌های معتبر', errors.length), _this3.r('میانگین خطای AFR', avg, '%', Math.abs(avg) < 3 ? 'success' : 'warning'), _this3.r('بیشینه انحراف', max, '%', max < 7 ? 'success' : 'danger'), _this3.r('اصلاح پیشنهادی VE', correction, '%'), _this3.r('بازه دور شناسایی‌شده', rpms.length ? `${Math.min(...rpms).toFixed(0)}–${Math.max(...rpms).toFixed(0)}` : 'نامشخص', 'rpm')];
      _this3.advice = avg > 0 ? 'مخلوط به‌طور میانگین رقیق است؛ VE را به اندازه پیشنهاد افزایش دهید.' : 'مخلوط به‌طور میانگین غنی است؛ VE را به اندازه مطلق پیشنهاد کاهش دهید.';
    })();
  }

};

DatalogComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__.CourseService
}, {
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__.SliderService
}];

DatalogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-datalog',
  template: _datalog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_datalog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DatalogComponent);


/***/ }),

/***/ 98618:
/*!*****************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/datalog/datalog.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatalogModule": () => (/* binding */ DatalogModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var _datalog_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datalog-routing.module */ 58093);
/* harmony import */ var _datalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datalog.component */ 91848);









let DatalogModule = class DatalogModule {
};
DatalogModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_datalog_component__WEBPACK_IMPORTED_MODULE_3__.DatalogComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule, _datalog_routing_module__WEBPACK_IMPORTED_MODULE_2__.DatalogRoutingModule
        ]
    })
], DatalogModule);



/***/ }),

/***/ 85260:
/*!*********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/datalog/datalog.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".profile-select {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 17px;\n  padding: 13px 17px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 15px;\n  background: var(--ion-item-background, #fff);\n  color: var(--ion-text-color, #1c2430);\n}\n\n.profile-select > ion-icon {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 1.45rem;\n}\n\n.profile-select > div {\n  display: grid;\n  gap: 2px;\n  min-width: 140px;\n}\n\n.profile-select strong {\n  font-size: 0.81rem;\n}\n\n.profile-select small {\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.71rem;\n}\n\n.profile-select select {\n  flex: 1;\n  min-width: 180px;\n  max-width: 340px;\n  padding: 9px 11px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 9px;\n  background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #1c2430);\n  font: inherit;\n  font-size: 0.79rem;\n}\n\n.profile-select a {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.profile-select .profile-notice {\n  flex-basis: 100%;\n  padding-top: 5px;\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.7rem;\n  line-height: 1.7;\n}\n\n@media (max-width: 560px) {\n  .profile-select select {\n    flex-basis: 100%;\n    max-width: none;\n  }\n\n  .profile-select a {\n    margin-right: auto;\n  }\n}\n\n:host {\n  --surface: var(--ion-item-background, #fff);\n  --ink: var(--ion-text-color, #172033);\n  --muted: var(--ion-color-medium, #667085);\n}\n\n.lab-page {\n  --background: var(--tuner-page, #f4f7fb);\n}\n\n.lab-shell {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 22px 16px 54px;\n}\n\n.lab-hero {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  overflow: hidden;\n  padding: 28px 30px;\n  color: #fff;\n  border-radius: 25px;\n  background: linear-gradient(125deg, #111827, #1e293b 58%, var(--accent));\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);\n}\n\n.lab-hero::after {\n  content: \"\";\n  position: absolute;\n  width: 240px;\n  height: 240px;\n  left: -55px;\n  top: -100px;\n  border-radius: 50%;\n  background: color-mix(in srgb, var(--accent) 38%, transparent);\n}\n\n.lab-hero > * {\n  position: relative;\n  z-index: 1;\n}\n\n.hero-icon {\n  display: grid;\n  place-items: center;\n  flex: 0 0 66px;\n  width: 66px;\n  height: 66px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 19px;\n  background: rgba(255, 255, 255, 0.12);\n  font-size: 2rem;\n}\n\n.lab-hero span {\n  font-size: 0.76rem;\n  color: rgba(255, 255, 255, 0.72);\n}\n\n.lab-hero h1 {\n  margin: 4px 0;\n  font-size: clamp(1.45rem, 4vw, 2.15rem);\n}\n\n.lab-hero p {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.78);\n}\n\n.preview-badge {\n  margin-right: auto;\n  align-self: flex-start;\n  padding: 5px 9px;\n  color: #fff !important;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 999px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n}\n\n.workspace {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.8fr);\n  align-items: start;\n  gap: 16px;\n  margin-top: 20px;\n}\n\n.input-panel, .result-panel {\n  padding: 22px;\n  border: 1px solid var(--tuner-border, #e5eaf1);\n  border-radius: 21px;\n  background: var(--surface);\n  box-shadow: 0 8px 26px rgba(15, 23, 42, 0.055);\n}\n\n.result-panel {\n  position: sticky;\n  top: 12px;\n}\n\n.panel-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 18px;\n}\n\n.panel-title span {\n  color: var(--muted);\n  font-size: 0.72rem;\n}\n\n.panel-title h2 {\n  margin: 3px 0 0;\n  color: var(--ink);\n  font-size: 1.22rem;\n}\n\n.result-panel > .panel-title > ion-icon {\n  padding: 10px;\n  color: var(--accent);\n  border-radius: 12px;\n  background: color-mix(in srgb, var(--accent) 12%, transparent);\n  font-size: 1.4rem;\n}\n\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 18px;\n}\n\n.field > span {\n  display: flex;\n  align-items: center;\n  min-height: 26px;\n  color: var(--tuner-text, #344054);\n  font-size: 0.79rem;\n  font-weight: 700;\n}\n\n.field > div {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  border: 1px solid var(--tuner-border, #dfe5ee);\n  border-radius: 12px;\n  background: var(--tuner-soft, #f9fafb);\n  transition: 0.2s ease;\n}\n\n.field > div:focus-within {\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 0 0 3px rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.field input {\n  min-width: 0;\n  width: 100%;\n  padding: 12px;\n  color: var(--ink);\n  border: 0;\n  outline: 0;\n  background: transparent;\n  font: inherit;\n  direction: ltr;\n  text-align: right;\n}\n\n.field small {\n  padding: 0 10px;\n  color: var(--muted);\n  white-space: nowrap;\n}\n\n.info {\n  display: grid;\n  place-items: center;\n  padding: 0 4px;\n  color: var(--ion-color-primary);\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n.upload-zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  margin: 5px 0 18px;\n  padding: 28px 14px;\n  border: 2px dashed var(--tuner-border, #cbd5e1);\n  border-radius: 16px;\n  color: var(--muted);\n  background: var(--tuner-soft, #f8fafc);\n  cursor: pointer;\n  text-align: center;\n}\n\n.upload-zone:hover {\n  border-color: var(--ion-color-primary);\n}\n\n.upload-zone input {\n  display: none;\n}\n\n.upload-zone ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 2.1rem;\n}\n\n.upload-zone strong {\n  color: var(--ink);\n}\n\n.upload-zone span {\n  font-size: 0.74rem;\n}\n\n.result-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.result-card {\n  min-width: 0;\n  padding: 14px;\n  border-right: 3px solid var(--accent);\n  border-radius: 13px;\n  background: var(--tuner-soft, #f8fafc);\n}\n\n.result-card span {\n  display: block;\n  min-height: 34px;\n  color: var(--muted);\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n\n.result-card strong {\n  color: var(--ink);\n  font-size: 1.22rem;\n  overflow-wrap: anywhere;\n}\n\n.result-card small {\n  margin-right: 5px;\n  color: var(--muted);\n}\n\n.tone-success {\n  border-color: var(--tuner-success-border, #10b981);\n}\n\n.tone-warning {\n  border-color: var(--tuner-warning-border, #f59e0b);\n}\n\n.tone-danger {\n  border-color: var(--tuner-danger-border, #ef4444);\n}\n\n.advice, .engineering-note {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  margin-top: 14px;\n  padding: 13px;\n  border-radius: 13px;\n}\n\n.advice {\n  color: var(--tuner-info-text, #174ea6);\n  background: var(--tuner-info-soft, #edf5ff);\n}\n\n.engineering-note {\n  color: var(--tuner-muted, #475467);\n  background: var(--tuner-soft, #f2f4f7);\n}\n\n.advice ion-icon, .engineering-note ion-icon {\n  flex: 0 0 auto;\n  margin-top: 2px;\n}\n\n.advice p, .engineering-note p {\n  margin: 0;\n  font-size: 0.78rem;\n  line-height: 1.75;\n}\n\n.empty-result {\n  display: grid;\n  place-items: center;\n  min-height: 190px;\n  color: var(--tuner-muted, #98a2b3);\n  text-align: center;\n}\n\n.empty-result ion-icon {\n  font-size: 2.6rem;\n}\n\n.empty-result p {\n  max-width: 240px;\n  line-height: 1.8;\n}\n\n@media (max-width: 850px) {\n  .workspace {\n    grid-template-columns: 1fr;\n  }\n\n  .result-panel {\n    position: static;\n  }\n}\n\n@media (max-width: 560px) {\n  .lab-shell {\n    padding: 12px 11px 38px;\n  }\n\n  .lab-hero {\n    align-items: flex-start;\n    padding: 22px 18px;\n  }\n\n  .hero-icon {\n    width: 50px;\n    height: 50px;\n    flex-basis: 50px;\n  }\n\n  .preview-badge {\n    display: none;\n  }\n\n  .field-grid, .result-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .input-panel, .result-panel {\n    padding: 17px;\n    border-radius: 17px;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfcHJvZmlsZS1zZWxlY3Quc2NzcyIsImRhdGFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBa0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFBVyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLHVEQUFBO0VBQXlELG1CQUFBO0VBQXFCLDRDQUFBO0VBQThDLHFDQUFBO0FDV3BQOztBRFZBO0VBQTZCLHVDQUFBO0VBQXlDLGtCQUFBO0FDZXRFOztBRGRBO0VBQXdCLGFBQUE7RUFBZSxRQUFBO0VBQVUsZ0JBQUE7QUNvQmpEOztBRG5CQTtFQUF5QixrQkFBQTtBQ3VCekI7O0FEdEJBO0VBQXdCLHVDQUFBO0VBQXlDLGtCQUFBO0FDMkJqRTs7QUQxQkE7RUFBeUIsT0FBQTtFQUFTLGdCQUFBO0VBQWtCLGdCQUFBO0VBQWtCLGlCQUFBO0VBQW1CLHVEQUFBO0VBQXlELGtCQUFBO0VBQW9CLDZDQUFBO0VBQStDLHFDQUFBO0VBQXVDLGFBQUE7RUFBZSxrQkFBQTtBQ3VDM1E7O0FEdENBO0VBQW9CLHVDQUFBO0VBQXlDLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLHFCQUFBO0FDNkNsRzs7QUQ1Q0E7RUFBa0MsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFBa0IsdUNBQUE7RUFBeUMsaUJBQUE7RUFBa0IsZ0JBQUE7QUNvRGpJOztBRG5EQTtFQUE0QjtJQUF5QixnQkFBQTtJQUFrQixlQUFBO0VDeURyRTs7RUR6RHVGO0lBQW9CLGtCQUFBO0VDNkQzRztBQUNGOztBQW5FQTtFQUFRLDJDQUFBO0VBQTZDLHFDQUFBO0VBQXVDLHlDQUFBO0FBd0U1Rjs7QUF2RUE7RUFBWSx3Q0FBQTtBQTJFWjs7QUExRUE7RUFBYSxpQkFBQTtFQUFtQixjQUFBO0VBQWdCLHVCQUFBO0FBZ0ZoRDs7QUEvRUE7RUFBWSxrQkFBQTtFQUFvQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FB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ckw7O0VBMVl1TTtJQUFXLFdBQUE7SUFBVyxZQUFBO0lBQVksZ0JBQUE7RUFnWnpPOztFQWhaeVA7SUFBZSxhQUFBO0VBb1p4UTs7RUFwWnFSO0lBQXlCLDBCQUFBO0VBd1o5Uzs7RUF4WndVO0lBQTJCLGFBQUE7SUFBYSxtQkFBQTtFQTZaaFg7QUFDRjs7QUN0YUU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBRHdhSjs7QUNyYUk7OztFQUdFLHdCQUFBO0VBQ0EsbUNBQUE7QUR1YU47O0FDcGFJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FEc2FOOztBQ25hSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtBRHFhTjs7QUNuYUk7RUFBYywrQkFBQTtFQUFpQywwQkFBQTtBRHVhbkQ7O0FDdGFJO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FEd2FOOztBQ3RhSTtFQUFXLGdDQUFBO0FEeWFmOztBQ3hhSTtFQUFvQyx3QkFBQTtBRDJheEM7O0FDMWFJO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QUQ0YU47O0FDMWFJO0VBQWtELG1DQUFBO0FENmF0RCIsImZpbGUiOiJkYXRhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtc2VsZWN0IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4OyBmbGV4LXdyYXA6IHdyYXA7IG1hcmdpbi10b3A6IDE3cHg7IHBhZGRpbmc6IDEzcHggMTdweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50LCAjZDBkNWRkKTsgYm9yZGVyLXJhZGl1czogMTVweDsgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgI2ZmZik7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzFjMjQzMCk7IH1cbi5wcm9maWxlLXNlbGVjdCA+IGlvbi1pY29uIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNkMTIzMzIpOyBmb250LXNpemU6IDEuNDVyZW07IH1cbi5wcm9maWxlLXNlbGVjdCA+IGRpdiB7IGRpc3BsYXk6IGdyaWQ7IGdhcDogMnB4OyBtaW4td2lkdGg6IDE0MHB4OyB9XG4ucHJvZmlsZS1zZWxlY3Qgc3Ryb25nIHsgZm9udC1zaXplOiAuODFyZW07IH1cbi5wcm9maWxlLXNlbGVjdCBzbWFsbCB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjNjY3MDg1KTsgZm9udC1zaXplOiAuNzFyZW07IH1cbi5wcm9maWxlLXNlbGVjdCBzZWxlY3QgeyBmbGV4OiAxOyBtaW4td2lkdGg6IDE4MHB4OyBtYXgtd2lkdGg6IDM0MHB4OyBwYWRkaW5nOiA5cHggMTFweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50LCAjZDBkNWRkKTsgYm9yZGVyLXJhZGl1czogOXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzFjMjQzMCk7IGZvbnQ6IGluaGVyaXQ7IGZvbnQtc2l6ZTogLjc5cmVtOyB9XG4ucHJvZmlsZS1zZWxlY3QgYSB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZDEyMzMyKTsgZm9udC1zaXplOiAuNzZyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuLnByb2ZpbGUtc2VsZWN0IC5wcm9maWxlLW5vdGljZSB7IGZsZXgtYmFzaXM6IDEwMCU7IHBhZGRpbmctdG9wOiA1cHg7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjNjY3MDg1KTsgZm9udC1zaXplOiAuN3JlbTsgbGluZS1oZWlnaHQ6IDEuNzsgfVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7IC5wcm9maWxlLXNlbGVjdCBzZWxlY3QgeyBmbGV4LWJhc2lzOiAxMDAlOyBtYXgtd2lkdGg6IG5vbmU7IH0ucHJvZmlsZS1zZWxlY3QgYSB7IG1hcmdpbi1yaWdodDogYXV0bzsgfSB9XG4iLCJAaW1wb3J0ICcuLi90aGVtZSc7XHJcblxyXG5AaW1wb3J0ICcuLi9wcm9maWxlLXNlbGVjdCc7XHJcbjpob3N0IHsgLS1zdXJmYWNlOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCAjZmZmKTsgLS1pbms6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMTcyMDMzKTsgLS1tdXRlZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzY2NzA4NSk7IH1cclxuLmxhYi1wYWdlIHsgLS1iYWNrZ3JvdW5kOiAje3R1bmVyLWNvbG9yKHBhZ2UsICNmNGY3ZmIpfTsgfVxyXG4ubGFiLXNoZWxsIHsgbWF4LXdpZHRoOiAxMjgwcHg7IG1hcmdpbjogMCBhdXRvOyBwYWRkaW5nOiAyMnB4IDE2cHggNTRweDsgfVxyXG4ubGFiLWhlcm8geyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMThweDsgb3ZlcmZsb3c6IGhpZGRlbjsgcGFkZGluZzogMjhweCAzMHB4OyBjb2xvcjogI2ZmZjsgYm9yZGVyLXJhZGl1czogMjVweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyNWRlZywjMTExODI3LCMxZTI5M2IgNTglLHZhcigtLWFjY2VudCkpOyBib3gtc2hhZG93OiAwIDE4cHggNDBweCByZ2JhKDE1LDIzLDQyLC4xOCk7IH1cclxuLmxhYi1oZXJvOjphZnRlciB7IGNvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAyNDBweDsgaGVpZ2h0OiAyNDBweDsgbGVmdDogLTU1cHg7IHRvcDogLTEwMHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLHZhcigtLWFjY2VudCkgMzglLHRyYW5zcGFyZW50KTsgfVxyXG4ubGFiLWhlcm8gPiAqIHsgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAxOyB9Lmhlcm8taWNvbiB7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGZsZXg6IDAgMCA2NnB4OyB3aWR0aDogNjZweDsgaGVpZ2h0OiA2NnB4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yNSk7IGJvcmRlci1yYWRpdXM6IDE5cHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEyKTsgZm9udC1zaXplOiAycmVtOyB9LmxhYi1oZXJvIHNwYW4geyBmb250LXNpemU6IC43NnJlbTsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjcyKTsgfS5sYWItaGVybyBoMSB7IG1hcmdpbjogNHB4IDA7IGZvbnQtc2l6ZTogY2xhbXAoMS40NXJlbSw0dncsMi4xNXJlbSk7IH0ubGFiLWhlcm8gcCB7IG1hcmdpbjogMDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjc4KTsgfS5wcmV2aWV3LWJhZGdlIHsgbWFyZ2luLXJpZ2h0OiBhdXRvOyBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyBwYWRkaW5nOiA1cHggOXB4OyBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjI1KTsgYm9yZGVyLXJhZGl1czogOTk5cHg7IGZvbnQtd2VpZ2h0OiA4MDA7IGxldHRlci1zcGFjaW5nOiAuMDhlbTsgfVxyXG4ud29ya3NwYWNlIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwxZnIpIG1pbm1heCgzMjBweCwuOGZyKTsgYWxpZ24taXRlbXM6IHN0YXJ0OyBnYXA6IDE2cHg7IG1hcmdpbi10b3A6IDIwcHg7IH0uaW5wdXQtcGFuZWwsLnJlc3VsdC1wYW5lbCB7IHBhZGRpbmc6IDIycHg7IGJvcmRlcjogMXB4IHNvbGlkIHR1bmVyLWNvbG9yKGJvcmRlciwgI2U1ZWFmMSk7IGJvcmRlci1yYWRpdXM6IDIxcHg7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBib3gtc2hhZG93OiAwIDhweCAyNnB4IHJnYmEoMTUsMjMsNDIsLjA1NSk7IH0ucmVzdWx0LXBhbmVsIHsgcG9zaXRpb246IHN0aWNreTsgdG9wOiAxMnB4OyB9LnBhbmVsLXRpdGxlIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBnYXA6MTJweDsgbWFyZ2luLWJvdHRvbToxOHB4OyB9LnBhbmVsLXRpdGxlIHNwYW4geyBjb2xvcjp2YXIoLS1tdXRlZCk7IGZvbnQtc2l6ZTouNzJyZW07IH0ucGFuZWwtdGl0bGUgaDIgeyBtYXJnaW46M3B4IDAgMDsgY29sb3I6dmFyKC0taW5rKTsgZm9udC1zaXplOjEuMjJyZW07IH0ucmVzdWx0LXBhbmVsID4gLnBhbmVsLXRpdGxlID4gaW9uLWljb24geyBwYWRkaW5nOjEwcHg7IGNvbG9yOnZhcigtLWFjY2VudCk7IGJvcmRlci1yYWRpdXM6MTJweDsgYmFja2dyb3VuZDpjb2xvci1taXgoaW4gc3JnYix2YXIoLS1hY2NlbnQpIDEyJSx0cmFuc3BhcmVudCk7IGZvbnQtc2l6ZToxLjRyZW07IH1cclxuLmZpZWxkLWdyaWQgeyBkaXNwbGF5OmdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMixtaW5tYXgoMCwxZnIpKTsgZ2FwOjEycHg7IG1hcmdpbi1ib3R0b206MThweDsgfS5maWVsZCA+IHNwYW4geyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgbWluLWhlaWdodDoyNnB4OyBjb2xvcjp0dW5lci1jb2xvcih0ZXh0LCAjMzQ0MDU0KTsgZm9udC1zaXplOi43OXJlbTsgZm9udC13ZWlnaHQ6NzAwOyB9LmZpZWxkID4gZGl2IHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IG92ZXJmbG93OmhpZGRlbjsgYm9yZGVyOjFweCBzb2xpZCB0dW5lci1jb2xvcihib3JkZXIsICNkZmU1ZWUpOyBib3JkZXItcmFkaXVzOjEycHg7IGJhY2tncm91bmQ6dHVuZXItY29sb3Ioc29mdCwgI2Y5ZmFmYik7IHRyYW5zaXRpb246LjJzIGVhc2U7IH0uZmllbGQgPiBkaXY6Zm9jdXMtd2l0aGluIHsgYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgYm94LXNoYWRvdzowIDAgMCAzcHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLC4xKTsgfS5maWVsZCBpbnB1dCB7IG1pbi13aWR0aDowOyB3aWR0aDoxMDAlOyBwYWRkaW5nOjEycHg7IGNvbG9yOnZhcigtLWluayk7IGJvcmRlcjowOyBvdXRsaW5lOjA7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IGZvbnQ6aW5oZXJpdDsgZGlyZWN0aW9uOmx0cjsgdGV4dC1hbGlnbjpyaWdodDsgfS5maWVsZCBzbWFsbCB7IHBhZGRpbmc6MCAxMHB4OyBjb2xvcjp2YXIoLS1tdXRlZCk7IHdoaXRlLXNwYWNlOm5vd3JhcDsgfS5pbmZvIHsgZGlzcGxheTpncmlkOyBwbGFjZS1pdGVtczpjZW50ZXI7IHBhZGRpbmc6MCA0cHg7IGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgYm9yZGVyOjA7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IGN1cnNvcjpwb2ludGVyOyBmb250LXNpemU6MXJlbTsgfVxyXG4udXBsb2FkLXpvbmUgeyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6NXB4OyBtYXJnaW46NXB4IDAgMThweDsgcGFkZGluZzoyOHB4IDE0cHg7IGJvcmRlcjoycHggZGFzaGVkIHR1bmVyLWNvbG9yKGJvcmRlciwgI2NiZDVlMSk7IGJvcmRlci1yYWRpdXM6MTZweDsgY29sb3I6dmFyKC0tbXV0ZWQpOyBiYWNrZ3JvdW5kOnR1bmVyLWNvbG9yKHNvZnQsICNmOGZhZmMpOyBjdXJzb3I6cG9pbnRlcjsgdGV4dC1hbGlnbjpjZW50ZXI7IH0udXBsb2FkLXpvbmU6aG92ZXIgeyBib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyB9LnVwbG9hZC16b25lIGlucHV0IHsgZGlzcGxheTpub25lOyB9LnVwbG9hZC16b25lIGlvbi1pY29uIHsgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBmb250LXNpemU6Mi4xcmVtOyB9LnVwbG9hZC16b25lIHN0cm9uZyB7IGNvbG9yOnZhcigtLWluayk7IH0udXBsb2FkLXpvbmUgc3BhbiB7IGZvbnQtc2l6ZTouNzRyZW07IH1cclxuLnJlc3VsdC1ncmlkIHsgZGlzcGxheTpncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsbWlubWF4KDAsMWZyKSk7IGdhcDoxMHB4OyB9LnJlc3VsdC1jYXJkIHsgbWluLXdpZHRoOjA7IHBhZGRpbmc6MTRweDsgYm9yZGVyLXJpZ2h0OjNweCBzb2xpZCB2YXIoLS1hY2NlbnQpOyBib3JkZXItcmFkaXVzOjEzcHg7IGJhY2tncm91bmQ6dHVuZXItY29sb3Ioc29mdCwgI2Y4ZmFmYyk7IH0ucmVzdWx0LWNhcmQgc3BhbiB7IGRpc3BsYXk6YmxvY2s7IG1pbi1oZWlnaHQ6MzRweDsgY29sb3I6dmFyKC0tbXV0ZWQpOyBmb250LXNpemU6LjcycmVtOyBsaW5lLWhlaWdodDoxLjQ1OyB9LnJlc3VsdC1jYXJkIHN0cm9uZyB7IGNvbG9yOnZhcigtLWluayk7IGZvbnQtc2l6ZToxLjIycmVtOyBvdmVyZmxvdy13cmFwOmFueXdoZXJlOyB9LnJlc3VsdC1jYXJkIHNtYWxsIHsgbWFyZ2luLXJpZ2h0OjVweDsgY29sb3I6dmFyKC0tbXV0ZWQpOyB9LnRvbmUtc3VjY2VzcyB7IGJvcmRlci1jb2xvcjp0dW5lci1jb2xvcihzdWNjZXNzLWJvcmRlciwgIzEwYjk4MSk7IH0udG9uZS13YXJuaW5nIHsgYm9yZGVyLWNvbG9yOnR1bmVyLWNvbG9yKHdhcm5pbmctYm9yZGVyLCAjZjU5ZTBiKTsgfS50b25lLWRhbmdlciB7IGJvcmRlci1jb2xvcjp0dW5lci1jb2xvcihkYW5nZXItYm9yZGVyLCAjZWY0NDQ0KTsgfVxyXG4uYWR2aWNlLC5lbmdpbmVlcmluZy1ub3RlIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0OyBnYXA6OXB4OyBtYXJnaW4tdG9wOjE0cHg7IHBhZGRpbmc6MTNweDsgYm9yZGVyLXJhZGl1czoxM3B4OyB9LmFkdmljZSB7IGNvbG9yOnR1bmVyLWNvbG9yKGluZm8tdGV4dCwgIzE3NGVhNik7IGJhY2tncm91bmQ6dHVuZXItY29sb3IoaW5mby1zb2Z0LCAjZWRmNWZmKTsgfS5lbmdpbmVlcmluZy1ub3RlIHsgY29sb3I6dHVuZXItY29sb3IobXV0ZWQsICM0NzU0NjcpOyBiYWNrZ3JvdW5kOnR1bmVyLWNvbG9yKHNvZnQsICNmMmY0ZjcpOyB9LmFkdmljZSBpb24taWNvbiwuZW5naW5lZXJpbmctbm90ZSBpb24taWNvbiB7IGZsZXg6MCAwIGF1dG87IG1hcmdpbi10b3A6MnB4OyB9LmFkdmljZSBwLC5lbmdpbmVlcmluZy1ub3RlIHAgeyBtYXJnaW46MDsgZm9udC1zaXplOi43OHJlbTsgbGluZS1oZWlnaHQ6MS43NTsgfS5lbXB0eS1yZXN1bHQgeyBkaXNwbGF5OmdyaWQ7IHBsYWNlLWl0ZW1zOmNlbnRlcjsgbWluLWhlaWdodDoxOTBweDsgY29sb3I6dHVuZXItY29sb3IobXV0ZWQsICM5OGEyYjMpOyB0ZXh0LWFsaWduOmNlbnRlcjsgfS5lbXB0eS1yZXN1bHQgaW9uLWljb24geyBmb250LXNpemU6Mi42cmVtOyB9LmVtcHR5LXJlc3VsdCBwIHsgbWF4LXdpZHRoOjI0MHB4OyBsaW5lLWhlaWdodDoxLjg7IH1cclxuQG1lZGlhKG1heC13aWR0aDo4NTBweCl7LndvcmtzcGFjZXtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyfS5yZXN1bHQtcGFuZWx7cG9zaXRpb246c3RhdGljfX1AbWVkaWEobWF4LXdpZHRoOjU2MHB4KXsubGFiLXNoZWxse3BhZGRpbmc6MTJweCAxMXB4IDM4cHh9LmxhYi1oZXJve2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7cGFkZGluZzoyMnB4IDE4cHh9Lmhlcm8taWNvbnt3aWR0aDo1MHB4O2hlaWdodDo1MHB4O2ZsZXgtYmFzaXM6NTBweH0ucHJldmlldy1iYWRnZXtkaXNwbGF5Om5vbmV9LmZpZWxkLWdyaWQsLnJlc3VsdC1ncmlke2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnJ9LmlucHV0LXBhbmVsLC5yZXN1bHQtcGFuZWx7cGFkZGluZzoxN3B4O2JvcmRlci1yYWRpdXM6MTdweH19XHJcblxyXG5AaW5jbHVkZSB0dW5lci1kYXJrLXRoZW1lO1xyXG4iLCIvLyBLZWVwIHRoZSBvcmlnaW5hbCBsaWdodCBjb2xvciBhdCBlYWNoIGNhbGwgc2l0ZS4gVG9rZW5zIGV4aXN0IG9ubHkgaW4gZGFyayBtb2RlLlxuQGZ1bmN0aW9uIHR1bmVyLWNvbG9yKCRyb2xlLCAkbGlnaHQpIHtcbiAgQHJldHVybiB2YXIoLS10dW5lci0jeyRyb2xlfSwgI3skbGlnaHR9KTtcbn1cblxuQG1peGluIHR1bmVyLWRhcmstdGhlbWUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gICAgLS10dW5lci1zdXJmYWNlOiAjMWMyMjMwO1xuICAgIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgICAtLXR1bmVyLXRleHQ6ICNlZGYxZjg7XG4gICAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgICAtLXR1bmVyLW92ZXJsYXk6IHJnYmEoMjgsIDM0LCA0OCwgMC45NSk7XG4gICAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAgIC0tdHVuZXItcHVycGxlLWJvcmRlcjogIzcyNTc5YjtcbiAgICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgICAtLXR1bmVyLWluZm8tYm9yZGVyOiAjNDY2YjlhO1xuICAgIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAgIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAgIC0tdHVuZXItd2FybmluZy1ib3JkZXI6ICM5Mzc0M2Q7XG4gICAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gICAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gICAgLS10dW5lci1zdWNjZXNzLWJvcmRlcjogIzQxN2Q2MDtcbiAgICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAgIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gICAgLS10dW5lci1kYW5nZXItYm9yZGVyOiAjOTg1MzY3O1xuICAgIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAgIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAgIC0tdHVuZXItdGVhbC1ib3JkZXI6ICM0MzdmN2M7XG5cbiAgICAvLyBOYXRpdmUgY29udHJvbHMgd2l0aG91dCBhbiBleHBsaWNpdCBsaWdodCBiYWNrZ3JvdW5kIG5lZWQgYSBkYXJrIHN1cmZhY2UgdG9vLlxuICAgIGlucHV0Om5vdChbdHlwZT0ncmFuZ2UnXSk6bm90KFt0eXBlPSdjaGVja2JveCddKTpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nZmlsZSddKSxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3Qge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1wYWdlKTsgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZDpub3QoW2NvbG9yXSksIGlvbi1saXN0LCBpb24taXRlbTpub3QoW2NvbG9yXSksIGlvbi1pdGVtLWRpdmlkZXI6bm90KFtjb2xvcl0pIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tbGlzdCB7IGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmRbY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1pdGVtW2NvbG9yPSdsaWdodGVzdCddLCBpb24tZmFiLWJ1dHRvbltjb2xvcj0nbGlnaHRlc3QnXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cbiAgICBpb24tdGV4dFtjb2xvcj0nZGFyayddLCBpb24tbGFiZWxbY29sb3I9J2RhcmsnXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 17859:
/*!*********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/datalog/datalog.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  \n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" defaultHref=\"/TunerPlus\" color=\"light\"></ion-back-button></ion-buttons>\n<span page-title>{{ tool.title }}</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content class=\"lab-page\">\r\n  <main dir=\"rtl\" class=\"lab-shell\" *ngIf=\"isShow\">\r\n    <section class=\"lab-hero\" [style.--accent]=\"tool.accent\">\r\n      <div class=\"hero-icon\"><ion-icon [name]=\"tool.icon\"></ion-icon></div>\r\n      <div><span>آزمایشگاه مهندسی تیونر پلاس</span><h1>{{ tool.title }}</h1><p>{{ tool.subtitle }}</p></div>\r\n      <span class=\"preview-badge\">PREVIEW</span>\r\n    </section>\r\n\r\n\r\n    <section class=\"profile-select\" aria-label=\"انتخاب پروفایل خودرو\">\r\n      <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n      <div><strong>پروفایل خودرو</strong><small>مقادیر ثبت‌شده را در این ابزار اعمال کن</small></div>\r\n      <select [value]=\"selectedProfileId\" (change)=\"applyProfile($any($event.target).value)\" aria-label=\"پروفایل خودرو\">\r\n        <option value=\"\">انتخاب پروفایل</option>\r\n        <option *ngFor=\"let profile of profiles\" [value]=\"profile.id\">{{ profile.name }}</option>\r\n      </select>\r\n      <a routerLink=\"/TunerPlus/vehicle-profile\">ساخت یا ویرایش پروفایل</a>\r\n      <small class=\"profile-notice\" *ngIf=\"profileNotice\">{{ profileNotice }}</small>\r\n    </section>\r\n\r\n    <section class=\"workspace\">\r\n      <form class=\"input-panel\" [formGroup]=\"form\" *ngIf=\"form\">\r\n        <div class=\"panel-title\"><div><span>ورودی‌های محاسبه</span><h2>مشخصات پروژه</h2></div><ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"reset()\"><ion-icon slot=\"start\" name=\"refresh-outline\"></ion-icon>بازنشانی</ion-button></div>\r\n        <div class=\"field-grid\">\r\n          <label class=\"field\" *ngFor=\"let field of tool.fields\">\r\n            <span>{{ field.label }} <button type=\"button\" class=\"info\" (click)=\"onInfo(field)\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></span>\r\n            <div><input type=\"number\" [formControlName]=\"field.key\" [min]=\"field.min\" [max]=\"field.max\" [step]=\"field.step\"><small>{{ field.unit }}</small></div>\r\n          </label>\r\n        </div>\r\n        <label *ngIf=\"tool.slug === 'datalog'\" class=\"upload-zone\">\r\n          <input type=\"file\" accept=\".csv,.txt\" (change)=\"onCsv($event)\">\r\n          <ion-icon name=\"cloud-upload-outline\"></ion-icon><strong>{{ csvName || 'انتخاب فایل دیتالاگ CSV' }}</strong><span>{{ csvRows ? csvRows + ' ردیف معتبر تحلیل شد' : 'RPM، AFR/Lambda و TargetAFR قابل شناسایی است' }}</span>\r\n        </label>\r\n      </form>\r\n\r\n      <section class=\"result-panel\" [style.--accent]=\"tool.accent\">\r\n        <div class=\"panel-title\"><div><span>خروجی مهندسی</span><h2>نتیجه تحلیل</h2></div><ion-icon name=\"pulse-outline\"></ion-icon></div>\r\n        <div *ngIf=\"results.length; else emptyResult\" class=\"result-grid\">\r\n          <article *ngFor=\"let result of results\" [class]=\"'result-card tone-' + result.tone\"><span>{{ result.label }}</span><strong>{{ result.value }}</strong><small>{{ result.unit }}</small></article>\r\n        </div>\r\n        <ng-template #emptyResult><div class=\"empty-result\"><ion-icon name=\"analytics-outline\"></ion-icon><p>برای شروع یک فایل دیتالاگ انتخاب کنید.</p></div></ng-template>\r\n        <div class=\"advice\" *ngIf=\"advice\"><ion-icon name=\"bulb-outline\"></ion-icon><p>{{ advice }}</p></div>\r\n        <div class=\"engineering-note\"><ion-icon name=\"shield-checkmark-outline\"></ion-icon><p>{{ tool.note }}</p></div>\r\n      </section>\r\n    </section>\r\n  </main>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_datalog_datalog_module_ts.js.map