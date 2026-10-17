"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_electrical-calibration_electrical-calibration_module_ts"],{

/***/ 46776:
/*!*******************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/electrical-calibration/electrical-calibration-routing.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElectricalCalibrationRoutingModule": () => (/* binding */ ElectricalCalibrationRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _electrical_calibration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./electrical-calibration.component */ 38445);




const routes = [{ path: '', component: _electrical_calibration_component__WEBPACK_IMPORTED_MODULE_0__.ElectricalCalibrationComponent }];
let ElectricalCalibrationRoutingModule = class ElectricalCalibrationRoutingModule {
};
ElectricalCalibrationRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ElectricalCalibrationRoutingModule);



/***/ }),

/***/ 38445:
/*!**************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/electrical-calibration/electrical-calibration.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElectricalCalibrationComponent": () => (/* binding */ ElectricalCalibrationComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _electrical_calibration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./electrical-calibration.component.html?ngResource */ 50667);
/* harmony import */ var _electrical_calibration_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./electrical-calibration.component.scss?ngResource */ 52606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/Urls */ 35602);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);
/* harmony import */ var _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vehicle-profile/vehicle-profile.store */ 78994);















let ElectricalCalibrationComponent = class ElectricalCalibrationComponent {
  constructor(fb, router, alertController, sanitizer, loadingController, toastController, courseService, siteService) {
    this.fb = fb;
    this.router = router;
    this.alertController = alertController;
    this.sanitizer = sanitizer;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.courseService = courseService;
    this.siteService = siteService;
    this.isShow = false;
    this.isCheck = true;
    this.profiles = [];
    this.selectedProfileId = '';
    this.profileNotice = '';
    this.loadedProfileUpdatedAt = '';
    this.voltageRows = [];
    this.injectorFlowCorrectionPct = 100;
    this.isShow = false;
    this.check();
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

    const values = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.toolValues(profile, 'electrical-calibration');
    let applied = 0;
    Object.keys(values).forEach(key => {
      const control = this.form.get(key);

      if (!control) {
        return;
      }

      const previous = control.value;
      control.setValue(values[key], {
        emitEvent: false
      });

      if (control.invalid) {
        control.setValue(previous, {
          emitEvent: false
        });
      } else {
        applied++;
      }
    });
    this.form.updateValueAndValidity();
    this.profileNotice = `${applied} مقدار از پروفایل اعمال شد؛ سایر ورودی‌ها پیش‌فرض ابزارند.`;
    this.selectedProfileId = id;
    this.loadedProfileUpdatedAt = profile.updatedAt;

    try {
      _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.select(id);
    } catch {
      /* Local storage may be disabled. */
    }

    this.calculate();
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(_this.loadingController);

      _this.siteService.GetTunerPlusById(39).subscribe(res => {
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

  ngOnInit() {
    this.form = this.fb.group({
      nominalVoltage: [14, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(16)]],
      dwellAtNominalVoltageMs: [2.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.2), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10)]],
      minimumDwellMs: [1.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10)]],
      maximumDwellMs: [5, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.2), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(15)]],
      injectorDeadTimeAtNominalVoltageMs: [0.85, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(5)]],
      injectorVoltageSensitivityMsPerV: [0.17, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1)]],
      baseFuelPressureBar: [3, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10)]],
      targetFuelPressureBar: [3, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10)]]
    });
    this.profiles = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.list();
    const active = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.active();

    if (active) {
      this.applyProfile(active.id);
    }

    this.form.valueChanges.subscribe(() => this.calculate());
    this.calculate();
  }

  calculate() {
    if (this.form.invalid) {
      this.voltageRows = [];
      return;
    }

    const value = this.form.getRawValue();
    const nominalVoltage = Number(value.nominalVoltage);
    const dwellAtNominal = Number(value.dwellAtNominalVoltageMs);
    const minimumDwell = Number(value.minimumDwellMs);
    const maximumDwell = Number(value.maximumDwellMs);
    const deadTimeAtNominal = Number(value.injectorDeadTimeAtNominalVoltageMs);
    const voltageSensitivity = Number(value.injectorVoltageSensitivityMsPerV);

    if (maximumDwell < minimumDwell) {
      this.voltageRows = [];
      return;
    }

    this.voltageRows = [];

    for (let voltage = 8; voltage <= 16; voltage += 0.5) {
      // A first-pass dwell curve scales inverse to available voltage and is
      // constrained by the coil manufacturer's safe min/max dwell values.
      const dwellMs = this.clamp(dwellAtNominal * nominalVoltage / voltage, minimumDwell, maximumDwell); // Injector latency is approximately linear across the usable ECU voltage
      // range. The sensitivity is user-supplied because it is injector-specific.

      const deadTimeMs = Math.max(0, deadTimeAtNominal + (nominalVoltage - voltage) * voltageSensitivity);
      this.voltageRows.push({
        voltage: this.round(voltage, 1),
        dwellMs: this.round(dwellMs, 2),
        deadTimeMs: this.round(deadTimeMs, 2)
      });
    }

    this.injectorFlowCorrectionPct = this.round(Math.sqrt(Number(value.targetFuelPressureBar) / Number(value.baseFuelPressureBar)) * 100, 1);
  }

  reset() {
    this.form.reset({
      nominalVoltage: 14,
      dwellAtNominalVoltageMs: 2.5,
      minimumDwellMs: 1.5,
      maximumDwellMs: 5,
      injectorDeadTimeAtNominalVoltageMs: 0.85,
      injectorVoltageSensitivityMsPerV: 0.17,
      baseFuelPressureBar: 3,
      targetFuelPressureBar: 3
    });
  }

  get validDwellRange() {
    return this.form && Number(this.form.value.maximumDwellMs) >= Number(this.form.value.minimumDwellMs);
  }

  onInfo(type) {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const messages = {
        voltage: 'ولتاژی که dwell و dead-time مرجع در آن اندازه‌گیری یا از دیتاشیت اعلام شده است؛ معمولاً 13.5 تا 14.0 ولت.',
        dwell: 'زمان شارژ کویل در ولتاژ مرجع. فقط مقدار تأییدشده برای همان کویل و ECU را وارد کنید.',
        dwellMin: 'کمترین زمان شارژ مجاز کویل برای جلوگیری از افت انرژی جرقه در ولتاژ بالا.',
        dwellMax: 'بیشترین dwell ایمن کویل؛ افزایش بیش از آن می‌تواند کویل یا درایور ECU را داغ کند.',
        deadTime: 'تاخیر بازشدن انژکتور در ولتاژ مرجع؛ این زمان به pulse width افزوده می‌شود.',
        sensitivity: 'تغییر تقریبی dead-time به ازای هر یک ولت تغییر ولتاژ باتری. مقدار دقیق، مختص مدل انژکتور است.',
        pressure: 'فشار مرجع یا هدف سوخت. تغییر فشار دبی انژکتور را با ریشه دوم نسبت فشار تغییر می‌دهد.'
      };
      yield _this2.presentInfo(messages[type] || 'توضیحی برای این پارامتر موجود نیست.');
    })();
  }

  presentInfo(message) {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'main-alert',
        header: 'توضیحات',
        message,
        buttons: ['بستن']
      });
      yield alert.present();
    })();
  }

  clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  round(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round((value + Number.EPSILON) * factor) / factor;
  }

};

ElectricalCalibrationComponent.ctorParameters = () => [{
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
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__.CourseService
}, {
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__.SliderService
}];

ElectricalCalibrationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-electrical-calibration',
  template: _electrical_calibration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_electrical_calibration_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ElectricalCalibrationComponent);


/***/ }),

/***/ 34292:
/*!***********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/electrical-calibration/electrical-calibration.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElectricalCalibrationModule": () => (/* binding */ ElectricalCalibrationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var _electrical_calibration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./electrical-calibration-routing.module */ 46776);
/* harmony import */ var _electrical_calibration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./electrical-calibration.component */ 38445);









let ElectricalCalibrationModule = class ElectricalCalibrationModule {
};
ElectricalCalibrationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_electrical_calibration_component__WEBPACK_IMPORTED_MODULE_3__.ElectricalCalibrationComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _electrical_calibration_routing_module__WEBPACK_IMPORTED_MODULE_2__.ElectricalCalibrationRoutingModule, src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule
        ],
    })
], ElectricalCalibrationModule);



/***/ }),

/***/ 52606:
/*!***************************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/electrical-calibration/electrical-calibration.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = ".profile-select {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 17px;\n  padding: 13px 17px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 15px;\n  background: var(--ion-item-background, #fff);\n  color: var(--ion-text-color, #1c2430);\n}\n\n.profile-select > ion-icon {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 1.45rem;\n}\n\n.profile-select > div {\n  display: grid;\n  gap: 2px;\n  min-width: 140px;\n}\n\n.profile-select strong {\n  font-size: 0.81rem;\n}\n\n.profile-select small {\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.71rem;\n}\n\n.profile-select select {\n  flex: 1;\n  min-width: 180px;\n  max-width: 340px;\n  padding: 9px 11px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 9px;\n  background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #1c2430);\n  font: inherit;\n  font-size: 0.79rem;\n}\n\n.profile-select a {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.profile-select .profile-notice {\n  flex-basis: 100%;\n  padding-top: 5px;\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.7rem;\n  line-height: 1.7;\n}\n\n@media (max-width: 560px) {\n  .profile-select select {\n    flex-basis: 100%;\n    max-width: none;\n  }\n\n  .profile-select a {\n    margin-right: auto;\n  }\n}\n\n.table-wrap {\n  overflow-x: auto;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: center;\n}\n\ntable th, table td {\n  border: 1px solid var(--ion-color-light-shade, #d7d8da);\n  padding: 8px;\n  white-space: nowrap;\n}\n\ntable th {\n  color: var(--ion-color-light-contrast);\n  background: var(--ion-color-light, #f4f5f8);\n}\n\n.flow-correction {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 16px;\n}\n\n.flow-correction span, .warning {\n  color: var(--ion-color-medium);\n  font-size: 0.84rem;\n  line-height: 1.7;\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n\n:host-context(.dark-theme) table th {\n  background: var(--tuner-soft);\n  color: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfcHJvZmlsZS1zZWxlY3Quc2NzcyIsImVsZWN0cmljYWwtY2FsaWJyYXRpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBa0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFBVyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLHVEQUFBO0VBQXlELG1CQUFBO0VBQXFCLDRDQUFBO0VBQThDLHFDQUFBO0FDV3BQOztBRFZBO0VBQTZCLHVDQUFBO0VBQXlDLGtCQUFBO0FDZXRFOztBRGRBO0VBQXdCLGFBQUE7RUFBZSxRQUFBO0VBQVUsZ0JBQUE7QUNvQmpEOztBRG5CQTtFQUF5QixrQkFBQTtBQ3VCekI7O0FEdEJBO0VBQXdCLHVDQUFBO0VBQXlDLGtCQUFBO0FDMkJqRTs7QUQxQkE7RUFBeUIsT0FBQTtFQUFTLGdCQUFBO0VBQWtCLGdCQUFBO0VBQWtCLGlCQUFBO0VBQW1CLHVEQUFBO0VBQXlELGtCQUFBO0VBQW9CLDZDQUFBO0VBQStDLHFDQUFBO0VBQXVDLGFBQUE7RUFBZSxrQkFBQTtBQ3VDM1E7O0FEdENBO0VBQW9CLHVDQUFBO0VBQXlDLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLHFCQUFBO0FDNkNsRzs7QUQ1Q0E7RUFBa0MsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFBa0IsdUNBQUE7RUFBeUMsaUJBQUE7RUFBa0IsZ0JBQUE7QUNvRGpJOztBRG5EQTtFQUE0QjtJQUF5QixnQkFBQTtJQUFrQixlQUFBO0VDeURyRTs7RUR6RHVGO0lBQW9CLGtCQUFBO0VDNkQzRztBQUNGOztBQW5FQTtFQUFjLGdCQUFBO0FBc0VkOztBQXBFQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBdUVGOztBQXJFRTtFQUNFLHVEQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdUVKOztBQXBFRTtFQUFLLHNDQUFBO0VBQXdDLDJDQUFBO0FBd0UvQzs7QUFyRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUF3RUY7O0FBckVBO0VBQWtDLDhCQUFBO0VBQWdDLGtCQUFBO0VBQW1CLGdCQUFBO0FBMkVyRjs7QUMvRkU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBRGtHSjs7QUMvRkk7OztFQUdFLHdCQUFBO0VBQ0EsbUNBQUE7QURpR047O0FDOUZJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FEZ0dOOztBQzdGSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtBRCtGTjs7QUM3Rkk7RUFBYywrQkFBQTtFQUFpQywwQkFBQTtBRGlHbkQ7O0FDaEdJO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FEa0dOOztBQ2hHSTtFQUFXLGdDQUFBO0FEbUdmOztBQ2xHSTtFQUFvQyx3QkFBQTtBRHFHeEM7O0FDcEdJO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QURzR047O0FDcEdJO0VBQWtELG1DQUFBO0FEdUd0RDs7QUE3SUE7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0FBZ0pGIiwiZmlsZSI6ImVsZWN0cmljYWwtY2FsaWJyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1zZWxlY3QgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IGZsZXgtd3JhcDogd3JhcDsgbWFyZ2luLXRvcDogMTdweDsgcGFkZGluZzogMTNweCAxN3B4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNkMGQ1ZGQpOyBib3JkZXItcmFkaXVzOiAxNXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCAjZmZmKTsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMWMyNDMwKTsgfVxuLnByb2ZpbGUtc2VsZWN0ID4gaW9uLWljb24geyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2QxMjMzMik7IGZvbnQtc2l6ZTogMS40NXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0ID4gZGl2IHsgZGlzcGxheTogZ3JpZDsgZ2FwOiAycHg7IG1pbi13aWR0aDogMTQwcHg7IH1cbi5wcm9maWxlLXNlbGVjdCBzdHJvbmcgeyBmb250LXNpemU6IC44MXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0IHNtYWxsIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM2NjcwODUpOyBmb250LXNpemU6IC43MXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0IHNlbGVjdCB7IGZsZXg6IDE7IG1pbi13aWR0aDogMTgwcHg7IG1heC13aWR0aDogMzQwcHg7IHBhZGRpbmc6IDlweCAxMXB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNkMGQ1ZGQpOyBib3JkZXItcmFkaXVzOiA5cHg7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMWMyNDMwKTsgZm9udDogaW5oZXJpdDsgZm9udC1zaXplOiAuNzlyZW07IH1cbi5wcm9maWxlLXNlbGVjdCBhIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNkMTIzMzIpOyBmb250LXNpemU6IC43NnJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4ucHJvZmlsZS1zZWxlY3QgLnByb2ZpbGUtbm90aWNlIHsgZmxleC1iYXNpczogMTAwJTsgcGFkZGluZy10b3A6IDVweDsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM2NjcwODUpOyBmb250LXNpemU6IC43cmVtOyBsaW5lLWhlaWdodDogMS43OyB9XG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHsgLnByb2ZpbGUtc2VsZWN0IHNlbGVjdCB7IGZsZXgtYmFzaXM6IDEwMCU7IG1heC13aWR0aDogbm9uZTsgfS5wcm9maWxlLXNlbGVjdCBhIHsgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9IH1cbiIsIkBpbXBvcnQgJy4uL3RoZW1lJztcclxuXHJcbkBpbXBvcnQgJy4uL3Byb2ZpbGUtc2VsZWN0JztcclxuLnRhYmxlLXdyYXAgeyBvdmVyZmxvdy14OiBhdXRvOyB9XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUsICNkN2Q4ZGEpO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIHRoIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCk7IH1cclxufVxyXG5cclxuLmZsb3ctY29ycmVjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5mbG93LWNvcnJlY3Rpb24gc3BhbiwgLndhcm5pbmcgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7IGZvbnQtc2l6ZTogLjg0cmVtOyBsaW5lLWhlaWdodDogMS43OyB9XHJcblxyXG5AaW5jbHVkZSB0dW5lci1kYXJrLXRoZW1lO1xyXG5cclxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgdGFibGUgdGgge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXNvZnQpO1xyXG4gIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcclxufVxyXG4iLCIvLyBLZWVwIHRoZSBvcmlnaW5hbCBsaWdodCBjb2xvciBhdCBlYWNoIGNhbGwgc2l0ZS4gVG9rZW5zIGV4aXN0IG9ubHkgaW4gZGFyayBtb2RlLlxuQGZ1bmN0aW9uIHR1bmVyLWNvbG9yKCRyb2xlLCAkbGlnaHQpIHtcbiAgQHJldHVybiB2YXIoLS10dW5lci0jeyRyb2xlfSwgI3skbGlnaHR9KTtcbn1cblxuQG1peGluIHR1bmVyLWRhcmstdGhlbWUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gICAgLS10dW5lci1zdXJmYWNlOiAjMWMyMjMwO1xuICAgIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgICAtLXR1bmVyLXRleHQ6ICNlZGYxZjg7XG4gICAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgICAtLXR1bmVyLW92ZXJsYXk6IHJnYmEoMjgsIDM0LCA0OCwgMC45NSk7XG4gICAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAgIC0tdHVuZXItcHVycGxlLWJvcmRlcjogIzcyNTc5YjtcbiAgICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgICAtLXR1bmVyLWluZm8tYm9yZGVyOiAjNDY2YjlhO1xuICAgIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAgIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAgIC0tdHVuZXItd2FybmluZy1ib3JkZXI6ICM5Mzc0M2Q7XG4gICAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gICAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gICAgLS10dW5lci1zdWNjZXNzLWJvcmRlcjogIzQxN2Q2MDtcbiAgICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAgIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gICAgLS10dW5lci1kYW5nZXItYm9yZGVyOiAjOTg1MzY3O1xuICAgIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAgIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAgIC0tdHVuZXItdGVhbC1ib3JkZXI6ICM0MzdmN2M7XG5cbiAgICAvLyBOYXRpdmUgY29udHJvbHMgd2l0aG91dCBhbiBleHBsaWNpdCBsaWdodCBiYWNrZ3JvdW5kIG5lZWQgYSBkYXJrIHN1cmZhY2UgdG9vLlxuICAgIGlucHV0Om5vdChbdHlwZT0ncmFuZ2UnXSk6bm90KFt0eXBlPSdjaGVja2JveCddKTpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nZmlsZSddKSxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3Qge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1wYWdlKTsgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZDpub3QoW2NvbG9yXSksIGlvbi1saXN0LCBpb24taXRlbTpub3QoW2NvbG9yXSksIGlvbi1pdGVtLWRpdmlkZXI6bm90KFtjb2xvcl0pIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tbGlzdCB7IGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmRbY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1pdGVtW2NvbG9yPSdsaWdodGVzdCddLCBpb24tZmFiLWJ1dHRvbltjb2xvcj0nbGlnaHRlc3QnXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cbiAgICBpb24tdGV4dFtjb2xvcj0nZGFyayddLCBpb24tbGFiZWxbY29sb3I9J2RhcmsnXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 50667:
/*!***************************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/electrical-calibration/electrical-calibration.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  \n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" color=\"lightest\" defaultHref=\"/TunerPlus\"></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" class=\"title-size no-padding\">Dwell و Injector Dead-time</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed dir=\"rtl\" *ngIf=\"isShow\">\r\n    <section class=\"profile-select\" aria-label=\"انتخاب پروفایل خودرو\">\r\n      <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n      <div><strong>پروفایل خودرو</strong><small>مقادیر ثبت‌شده را در این ابزار اعمال کن</small></div>\r\n      <select [value]=\"selectedProfileId\" (change)=\"applyProfile($any($event.target).value)\" aria-label=\"پروفایل خودرو\">\r\n        <option value=\"\">انتخاب پروفایل</option>\r\n        <option *ngFor=\"let profile of profiles\" [value]=\"profile.id\">{{ profile.name }}</option>\r\n      </select>\r\n      <a routerLink=\"/TunerPlus/vehicle-profile\">ساخت یا ویرایش پروفایل</a>\r\n      <small class=\"profile-notice\" *ngIf=\"profileNotice\">{{ profileNotice }}</small>\r\n    </section>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-lg=\"5\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>مشخصات کویل و انژکتور</ion-card-title>\r\n            <ion-card-subtitle>اعداد اولیه را از دیتاشیت قطعات یا تنظیم فعلی ECU وارد کنید.</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <form [formGroup]=\"form\">\r\n              <ion-list>\r\n                <ion-item-divider><ion-label>کویل / Dwell</ion-label></ion-item-divider>\r\n                <ion-item><ion-label position=\"stacked\">ولتاژ مرجع (V)</ion-label><ion-input formControlName=\"nominalVoltage\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('voltage')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item><ion-label position=\"stacked\">Dwell در ولتاژ مرجع (ms)</ion-label><ion-input formControlName=\"dwellAtNominalVoltageMs\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('dwell')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item><ion-label position=\"stacked\">حداقل Dwell مجاز (ms)</ion-label><ion-input formControlName=\"minimumDwellMs\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('dwellMin')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item><ion-label position=\"stacked\">حداکثر Dwell مجاز (ms)</ion-label><ion-input formControlName=\"maximumDwellMs\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('dwellMax')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item-divider><ion-label>انژکتور / Dead-time</ion-label></ion-item-divider>\r\n                <ion-item><ion-label position=\"stacked\">Dead-time در ولتاژ مرجع (ms)</ion-label><ion-input formControlName=\"injectorDeadTimeAtNominalVoltageMs\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('deadTime')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item><ion-label position=\"stacked\">حساسیت ولتاژ انژکتور (ms/V)</ion-label><ion-input formControlName=\"injectorVoltageSensitivityMsPerV\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('sensitivity')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item><ion-label position=\"stacked\">فشار مرجع دبی انژکتور (bar)</ion-label><ion-input formControlName=\"baseFuelPressureBar\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('pressure')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item><ion-label position=\"stacked\">فشار سوخت هدف (bar)</ion-label><ion-input formControlName=\"targetFuelPressureBar\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('pressure')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n              </ion-list>\r\n              <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" color=\"warning\" (click)=\"reset()\">ریست</ion-button>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" size-lg=\"7\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>جدول‌های اولیه ECU</ion-card-title>\r\n            <ion-card-subtitle>Voltage compensation از 8 تا 16 ولت</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content *ngIf=\"!validDwellRange\"><ion-text color=\"danger\">حداکثر Dwell باید از حداقل آن بزرگ‌تر یا برابر باشد.</ion-text></ion-card-content>\r\n          <ion-card-content *ngIf=\"validDwellRange\">\r\n            <div class=\"flow-correction\">\r\n              <ion-text color=\"primary\"><strong>تصحیح دبی انژکتور در فشار هدف: {{ injectorFlowCorrectionPct }}٪</strong></ion-text>\r\n              <span>دبی انژکتور با ریشه‌ی دوم نسبت فشار تغییر می‌کند.</span>\r\n            </div>\r\n            <div class=\"table-wrap\">\r\n              <table>\r\n                <thead><tr><th>ولتاژ (V)</th><th>Dwell پیشنهادی (ms)</th><th>Injector Dead-time (ms)</th></tr></thead>\r\n                <tbody><tr *ngFor=\"let row of voltageRows\"><td>{{ row.voltage }}</td><td>{{ row.dwellMs }}</td><td>{{ row.deadTimeMs }}</td></tr></tbody>\r\n              </table>\r\n            </div>\r\n            <ion-text color=\"warning\"><p class=\"warning\"><strong>هشدار:</strong> جدول Dwell باید با حد اشباع و حداکثر زمان شارژ کویل شما تطبیق داده شود. Dead-time نیز باید با تست انژکتور یا دیتاشیت همان مدل تأیید شود.</p></ion-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_electrical-calibration_electrical-calibration_module_ts.js.map