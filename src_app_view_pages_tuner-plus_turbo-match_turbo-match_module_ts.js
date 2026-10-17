"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_turbo-match_turbo-match_module_ts"],{

/***/ 52741:
/*!*********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/turbo-match/turbo-match-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurboMatchRoutingModule": () => (/* binding */ TurboMatchRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _turbo_match_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./turbo-match.component */ 98279);




const routes = [{ path: '', component: _turbo_match_component__WEBPACK_IMPORTED_MODULE_0__.TurboMatchComponent }];
let TurboMatchRoutingModule = class TurboMatchRoutingModule {
};
TurboMatchRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TurboMatchRoutingModule);



/***/ }),

/***/ 98279:
/*!****************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/turbo-match/turbo-match.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurboMatchComponent": () => (/* binding */ TurboMatchComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _turbo_match_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turbo-match.component.html?ngResource */ 30657);
/* harmony import */ var _turbo_match_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turbo-match.component.scss?ngResource */ 6557);
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















let TurboMatchComponent = class TurboMatchComponent {
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
    this.points = [];
    this.mapMaxFlow = 60;
    this.mapMaxPressureRatio = 3;
    this.peakFlowLbMin = 0;
    this.targetPressureRatio = 0;
    this.selectedPointIndex = -1;
    this.warning = '';
    this.mapWidth = 640;
    this.mapHeight = 360;
    this.plotLeft = 58;
    this.plotRight = 24;
    this.plotTop = 22;
    this.plotBottom = 46;
    this.isShow = false;
    this.check();
  }

  ngOnInit() {
    this.form = this.fb.group({
      displacementLiters: [1.6, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1)]],
      rpmStart: [2500, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(500), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(15000)]],
      rpmEnd: [7500, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(500), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(15000)]],
      volumetricEfficiencyPct: [95, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(20), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(160)]],
      boostPsi: [14.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(80)]],
      ambientPressurePsi: [14.7, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20)]],
      inletAirTempC: [25, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-40), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      compressorSurgeLbMin: [12, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1)]],
      compressorMaxFlowLbMin: [44, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]],
      compressorMaxPressureRatio: [3.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1.01)]]
    });
    this.profiles = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.list();
    const active = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.active();

    if (active) {
      this.applyProfile(active.id);
    }

    this.form.valueChanges.subscribe(() => this.calculate());
    this.calculate();
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

    const values = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.toolValues(profile, 'turbo-match');
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

      _this.siteService.GetTunerPlusById(33).subscribe(res => {
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

  calculate() {
    if (this.form.invalid) {
      this.points = [];
      this.selectedPointIndex = -1;
      this.warning = 'ورودی‌ها را بررسی کنید.';
      return;
    }

    const value = this.form.getRawValue();
    const rpmStart = Number(value.rpmStart);
    const rpmEnd = Number(value.rpmEnd);
    const surgeFlow = Number(value.compressorSurgeLbMin);
    const maxFlow = Number(value.compressorMaxFlowLbMin);
    const maxPressureRatio = Number(value.compressorMaxPressureRatio);

    if (rpmEnd <= rpmStart || maxFlow <= surgeFlow) {
      this.points = [];
      this.selectedPointIndex = -1;
      this.warning = 'دور پایان باید از دور شروع بیشتر و دبی بیشینه کمپرسور از دبی surge بزرگ‌تر باشد.';
      return;
    }

    const pressureRatio = (Number(value.boostPsi) + Number(value.ambientPressurePsi)) / Number(value.ambientPressurePsi);
    this.targetPressureRatio = pressureRatio;
    const rpmStep = Math.max(250, Math.round((rpmEnd - rpmStart) / 10 / 250) * 250);
    const operatingPoints = [];

    for (let rpm = rpmStart; rpm <= rpmEnd; rpm += rpmStep) {
      const correctedFlowLbMin = this.calculateCorrectedFlow(rpm, value, pressureRatio);
      const state = this.getState(correctedFlowLbMin, pressureRatio, surgeFlow, maxFlow, maxPressureRatio);
      operatingPoints.push({
        rpm,
        pressureRatio,
        correctedFlowLbMin,
        state,
        x: 0,
        y: 0
      });
    }

    if (operatingPoints[operatingPoints.length - 1]?.rpm !== rpmEnd) {
      const correctedFlowLbMin = this.calculateCorrectedFlow(rpmEnd, value, pressureRatio);
      operatingPoints.push({
        rpm: rpmEnd,
        pressureRatio,
        correctedFlowLbMin,
        state: this.getState(correctedFlowLbMin, pressureRatio, surgeFlow, maxFlow, maxPressureRatio),
        x: 0,
        y: 0
      });
    }

    this.mapMaxFlow = Math.ceil(Math.max(maxFlow * 1.12, ...operatingPoints.map(point => point.correctedFlowLbMin * 1.12)) / 5) * 5;
    this.mapMaxPressureRatio = Math.ceil(Math.max(maxPressureRatio * 1.12, pressureRatio * 1.12) * 10) / 10;
    this.points = operatingPoints.map(point => ({ ...point,
      x: this.toX(point.correctedFlowLbMin),
      y: this.toY(point.pressureRatio)
    }));
    this.peakFlowLbMin = Math.max(...this.points.map(point => point.correctedFlowLbMin));
    this.selectedPointIndex = this.selectedPointIndex < 0 ? this.points.length - 1 : Math.min(this.selectedPointIndex, this.points.length - 1);
    this.warning = this.buildWarning(pressureRatio, surgeFlow, maxFlow, maxPressureRatio);
  }

  get selectedPoint() {
    return this.points[this.selectedPointIndex];
  }

  get safePointCount() {
    return this.points.filter(point => point.state === 'safe').length;
  }

  selectPoint(index) {
    if (Number.isFinite(index) && index >= 0 && index < this.points.length) {
      this.selectedPointIndex = index;
    }
  }

  stateLabel(state) {
    const labels = {
      safe: 'داخل محدوده',
      surge: 'زیر مرز Surge',
      choke: 'بالاتر از مرز Choke',
      'over-pressure': 'بالاتر از سقف PR'
    };
    return labels[state];
  }

  get path() {
    return this.points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
  }

  get xTicks() {
    return this.buildTicks(this.mapMaxFlow, this.niceTickStep(this.mapMaxFlow / 6));
  }

  get yTicks() {
    const step = this.niceTickStep((this.mapMaxPressureRatio - 1) / 5);
    return [1, ...this.buildTicks(this.mapMaxPressureRatio, step).filter(value => value > 1)];
  }

  toX(flow) {
    return this.plotLeft + flow / this.mapMaxFlow * this.plotWidth;
  }

  toY(pressureRatio) {
    return this.plotTop + (this.mapMaxPressureRatio - pressureRatio) / (this.mapMaxPressureRatio - 1) * this.plotHeight;
  }

  reset() {
    this.form.reset({
      displacementLiters: 1.6,
      rpmStart: 2500,
      rpmEnd: 7500,
      volumetricEfficiencyPct: 95,
      boostPsi: 14.5,
      ambientPressurePsi: 14.7,
      inletAirTempC: 25,
      compressorSurgeLbMin: 12,
      compressorMaxFlowLbMin: 44,
      compressorMaxPressureRatio: 3
    });
  }

  onInfo(type) {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const messages = {
        displacement: 'حجم کل موتور برحسب لیتر.',
        rpm: 'بازه دوری که می‌خواهید نقطه کاری توربو در آن بررسی شود.',
        ve: 'راندمان حجمی تقریبی موتور در WOT. مقدار حاصل از داینو یا دیتالاگ دقیق‌تر است.',
        boost: 'بوست هدف، برحسب psi گیج؛ یعنی فشار بالاتر از فشار محیط.',
        ambient: 'فشار مطلق محیط. در سطح دریا حدود 14.7 psi است و با ارتفاع کاهش می‌یابد.',
        temperature: 'دمای هوای ورودی به کمپرسور، نه دمای پس از اینترکولر.',
        surge: 'کمترین دبی پایدار کمپرسور از روی نقشه همان توربو. پایین‌تر از آن احتمال surge وجود دارد.',
        choke: 'بیشترین دبی قابل‌استفاده کمپرسور از روی نقشه همان توربو. بالاتر از آن راندمان و توان افت می‌کند.',
        pr: 'حداکثر pressure ratio مجاز کمپرسور از دیتاشیت یا کمپرسورمپ.'
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

  get plotWidth() {
    return this.mapWidth - this.plotLeft - this.plotRight;
  }

  get plotHeight() {
    return this.mapHeight - this.plotTop - this.plotBottom;
  }

  calculateCorrectedFlow(rpm, value, pressureRatio) {
    // Four-stroke inlet volume, converted to inlet-equivalent mass flow. The
    // correction follows standard compressor-map reference conditions: 68°F
    // (528°R) and 14.696 psi.
    const engineCfm = Number(value.displacementLiters) * rpm / 2 * Number(value.volumetricEfficiencyPct) / 100 * 0.0353147;
    const inletTempKelvin = Number(value.inletAirTempC) + 273.15;
    const inletDensityKgM3 = Number(value.ambientPressurePsi) * 6894.76 / (287.05 * inletTempKelvin);
    const actualMassFlowLbMin = engineCfm * pressureRatio / 35.3147 * inletDensityKgM3 * 2.20462;
    const correctedTemperatureFactor = Math.sqrt((Number(value.inletAirTempC) * 9 / 5 + 491.67) / 528);
    const correctedPressureFactor = 14.696 / Number(value.ambientPressurePsi);
    return this.round(actualMassFlowLbMin * correctedTemperatureFactor * correctedPressureFactor, 2);
  }

  getState(flow, pressureRatio, surgeFlow, maxFlow, maxPressureRatio) {
    if (pressureRatio > maxPressureRatio) {
      return 'over-pressure';
    }

    if (flow < surgeFlow) {
      return 'surge';
    }

    if (flow > maxFlow) {
      return 'choke';
    }

    return 'safe';
  }

  buildWarning(pressureRatio, surgeFlow, maxFlow, maxPressureRatio) {
    const states = this.points.map(point => point.state);

    if (pressureRatio > maxPressureRatio) {
      return 'Pressure ratio هدف از محدوده‌ی کمپرسور بیشتر است.';
    }

    if (states.includes('surge')) {
      return `بخشی از منحنی زیر مرز surge (${surgeFlow} lb/min) قرار دارد.`;
    }

    if (states.includes('choke')) {
      return `بخشی از منحنی از دبی بیشینه (${maxFlow} lb/min) عبور می‌کند.`;
    }

    return 'تمام نقاط محاسبه‌شده در محدوده‌ی تعریف‌شده‌ی کمپرسور قرار دارند.';
  }

  buildTicks(max, step) {
    const ticks = [];

    for (let value = 0; value <= max; value += step) {
      ticks.push(Number(value.toFixed(3)));
    }

    return ticks;
  }

  niceTickStep(raw) {
    const magnitude = Math.pow(10, Math.floor(Math.log10(raw)));
    const scaled = raw / magnitude;
    const rounded = scaled <= 1 ? 1 : scaled <= 2 ? 2 : scaled <= 5 ? 5 : 10;
    return rounded * magnitude;
  }

  round(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round((value + Number.EPSILON) * factor) / factor;
  }

};

TurboMatchComponent.ctorParameters = () => [{
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

TurboMatchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-turbo-match',
  template: _turbo_match_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_turbo_match_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TurboMatchComponent);


/***/ }),

/***/ 81125:
/*!*************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/turbo-match/turbo-match.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TurboMatchModule": () => (/* binding */ TurboMatchModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var _turbo_match_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turbo-match-routing.module */ 52741);
/* harmony import */ var _turbo_match_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./turbo-match.component */ 98279);









let TurboMatchModule = class TurboMatchModule {
};
TurboMatchModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_turbo_match_component__WEBPACK_IMPORTED_MODULE_3__.TurboMatchComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _turbo_match_routing_module__WEBPACK_IMPORTED_MODULE_2__.TurboMatchRoutingModule, src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule
        ],
    })
], TurboMatchModule);



/***/ }),

/***/ 6557:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/turbo-match/turbo-match.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ".profile-select {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 17px;\n  padding: 13px 17px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 15px;\n  background: var(--ion-item-background, #fff);\n  color: var(--ion-text-color, #1c2430);\n}\n\n.profile-select > ion-icon {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 1.45rem;\n}\n\n.profile-select > div {\n  display: grid;\n  gap: 2px;\n  min-width: 140px;\n}\n\n.profile-select strong {\n  font-size: 0.81rem;\n}\n\n.profile-select small {\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.71rem;\n}\n\n.profile-select select {\n  flex: 1;\n  min-width: 180px;\n  max-width: 340px;\n  padding: 9px 11px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 9px;\n  background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #1c2430);\n  font: inherit;\n  font-size: 0.79rem;\n}\n\n.profile-select a {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.profile-select .profile-notice {\n  flex-basis: 100%;\n  padding-top: 5px;\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.7rem;\n  line-height: 1.7;\n}\n\n@media (max-width: 560px) {\n  .profile-select select {\n    flex-basis: 100%;\n    max-width: none;\n  }\n\n  .profile-select a {\n    margin-right: auto;\n  }\n}\n\n.tm-shell {\n  --tm-text: var(--ion-text-color, #20242a);\n  --tm-muted: var(--ion-text-color, #20242a);\n  max-width: 1500px;\n  margin: 12px auto 36px;\n}\n\n.tm-shell ion-card {\n  --background: var(--ion-item-background, #fff);\n  margin: 8px 0;\n  color: var(--tm-text);\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.24);\n  border-radius: 22px !important;\n  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.12);\n}\n\n.tm-shell ion-card-header {\n  padding-bottom: 12px;\n}\n\n.tm-shell ion-card-title {\n  color: var(--tm-text);\n  font-size: 1.25rem;\n  font-weight: 800;\n}\n\n.tm-shell ion-card-subtitle {\n  color: var(--tm-muted);\n  opacity: 0.76;\n  font-size: 0.83rem !important;\n  line-height: 1.7;\n}\n\n.tm-shell ion-card-content {\n  color: var(--tm-text);\n}\n\n.tm-input-card ion-list {\n  background: transparent;\n}\n\n.tm-input-card ion-item,\n.tm-input-card ion-item-divider {\n  --background: transparent;\n  --color: var(--tm-text);\n  --border-color: rgba(var(--ion-color-medium-rgb), .22);\n  color: var(--tm-text);\n}\n\n.tm-input-card ion-item {\n  --padding-start: 4px;\n  --inner-padding-end: 4px;\n  margin-bottom: 5px;\n}\n\n.tm-input-card ion-label {\n  color: var(--tm-text) !important;\n  opacity: 1 !important;\n  font-weight: 650;\n  font-size: 14px !important;\n}\n\n.tm-input-card ion-input {\n  --color: var(--tm-text);\n  --placeholder-color: var(--tm-muted);\n  --placeholder-opacity: .76;\n  min-height: 42px;\n  color: var(--tm-text);\n  font-size: 1rem !important;\n  font-weight: 750;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.tm-input-card ion-item ion-input + ion-input {\n  margin-inline-start: 10px;\n}\n\n.tm-input-card ion-item-divider {\n  margin-top: 12px;\n  font-weight: 800;\n}\n\n.tm-metrics {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n\n.tm-metrics > div {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 0;\n  padding: 13px 14px;\n  background: rgba(var(--ion-color-medium-rgb), 0.075);\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.18);\n  border-radius: 13px;\n}\n\n.tm-metrics span,\n.tm-inspector__values span {\n  color: var(--tm-muted);\n  opacity: 0.76;\n  font-size: 0.78rem;\n}\n\n.tm-metrics strong {\n  color: var(--tm-text);\n  font-size: 1.4rem;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.tm-metrics small {\n  color: var(--tm-muted);\n  opacity: 0.76;\n  font-size: 0.72rem;\n}\n\n.tm-chart-frame {\n  padding: 14px 12px 8px;\n  overflow-x: auto;\n  color: #eaf0f4;\n  background: #10171d;\n  border: 1px solid #33404a;\n  border-radius: 17px;\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.025);\n}\n\n.tm-chart-frame:focus-visible {\n  outline: 3px solid var(--ion-color-danger);\n  outline-offset: 3px;\n}\n\n.tm-chart-caption {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px 14px;\n  margin: 0 7px 8px;\n  font-size: 0.84rem;\n  font-weight: 750;\n}\n\n.tm-chart-caption small {\n  color: #afbec7;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n\n.compressor-map {\n  display: block;\n  width: 100%;\n  min-width: 600px;\n  max-width: 800px;\n  margin: 0 auto;\n  direction: ltr;\n}\n\n.plot-background {\n  fill: #18232b;\n}\n\n.surge-zone {\n  fill: rgba(245, 178, 68, 0.23);\n}\n\n.safe-zone {\n  fill: rgba(67, 185, 131, 0.18);\n}\n\n.choke-zone {\n  fill: rgba(240, 87, 99, 0.22);\n}\n\n.pressure-zone {\n  fill: rgba(170, 117, 223, 0.22);\n}\n\n.grid {\n  stroke: #7b8b96;\n  stroke-width: 0.7;\n  opacity: 0.28;\n}\n\n.axis {\n  stroke: #d2dce2;\n  stroke-width: 1.5;\n}\n\n.limit-line {\n  fill: none;\n  stroke-width: 1.5;\n  stroke-dasharray: 6 5;\n}\n\n.limit-line--surge {\n  stroke: #f5b244;\n}\n\n.limit-line--choke {\n  stroke: #f27078;\n}\n\n.limit-line--pressure {\n  stroke: #c39aeb;\n}\n\n.operating-path {\n  fill: none;\n  stroke: #ff737c;\n  stroke-width: 3.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.selected-guides line {\n  stroke: #eaf0f4;\n  stroke-width: 1;\n  stroke-dasharray: 4 5;\n  opacity: 0.65;\n}\n\n.map-point {\n  cursor: pointer;\n}\n\n.point-halo {\n  fill: rgba(255, 255, 255, 0.14);\n  stroke: #fff;\n  stroke-width: 1.5;\n}\n\n.point-core {\n  stroke: #10171d;\n  stroke-width: 2;\n}\n\n.point-core.safe {\n  fill: #59d69f;\n}\n\n.point-core.surge {\n  fill: #ffca69;\n}\n\n.point-core.choke {\n  fill: #ff7c85;\n}\n\n.point-core.over-pressure {\n  fill: #d2aaff;\n}\n\n.map-point:focus-visible .point-core {\n  stroke: #fff;\n  stroke-width: 4;\n}\n\n.tick-label,\n.axis-label {\n  fill: #d6e1e7;\n  font-size: 11px;\n  text-anchor: middle;\n}\n\n.y-label {\n  text-anchor: end;\n}\n\n.axis-label {\n  fill: #f2f6f8;\n  font-size: 12px;\n  font-weight: 750;\n}\n\n.tm-legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin: 12px 0 18px;\n}\n\n.tm-legend span {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 7px 10px;\n  color: var(--tm-text);\n  background: rgba(var(--ion-color-medium-rgb), 0.075);\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.17);\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n\n.tm-legend strong {\n  color: var(--tm-text);\n  font-weight: 800;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.tm-legend i {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n}\n\n.tm-legend__surge {\n  background: #f5b244;\n}\n\n.tm-legend__safe {\n  background: #43b983;\n}\n\n.tm-legend__choke {\n  background: #f05763;\n}\n\n.tm-legend__pressure {\n  background: #aa75df;\n}\n\n.tm-inspector {\n  padding: 16px;\n  color: var(--tm-text);\n  background: rgba(var(--ion-color-medium-rgb), 0.075);\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n  border-radius: 16px;\n}\n\n.tm-inspector__heading,\n.tm-range-labels,\n.tm-inspector__values {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.tm-inspector__heading > div {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.tm-inspector__heading span:first-child {\n  color: var(--tm-muted);\n  opacity: 0.76;\n  font-size: 0.77rem;\n}\n\n.tm-inspector__heading strong {\n  color: var(--tm-text);\n  font-size: 1.2rem;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.tm-state {\n  padding: 7px 10px;\n  border-radius: 9px;\n  font-size: 0.77rem;\n  font-weight: 800;\n}\n\n.tm-state.safe {\n  color: var(--tuner-success-text, #087342);\n  background: var(--tuner-success-soft, #d9f5e8);\n}\n\n.tm-state.surge {\n  color: var(--tuner-warning-text, #76500a);\n  background: var(--tuner-warning-soft, #fff0ca);\n}\n\n.tm-state.choke {\n  color: var(--tuner-danger-text, #a22431);\n  background: var(--tuner-danger-soft, #ffe3e4);\n}\n\n.tm-state.over-pressure {\n  color: var(--tuner-purple-text, #6f359e);\n  background: var(--tuner-purple-soft, #f1e2ff);\n}\n\n.tm-rpm-range {\n  width: 100%;\n  margin: 18px 0 4px;\n  accent-color: var(--ion-color-danger);\n  cursor: pointer;\n}\n\n.tm-range-labels {\n  color: var(--tm-muted);\n  opacity: 0.76;\n  font-size: 0.72rem;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.tm-inspector__values {\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 16px;\n}\n\n.tm-inspector__values > div {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 130px;\n  padding: 10px 12px;\n  background: var(--ion-item-background, #fff);\n  border-radius: 10px;\n}\n\n.tm-inspector__values strong {\n  color: var(--tm-text);\n  font-size: 1.05rem;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.tm-inspector__values small {\n  color: var(--tm-muted);\n  opacity: 0.76;\n  font-size: 0.7rem;\n}\n\n.tm-inspector__hint {\n  margin: 10px 0 0;\n  color: var(--tm-text);\n  opacity: 0.76;\n  font-size: 0.73rem;\n}\n\n.tm-warning,\n.tm-invalid {\n  margin: 16px 0 0;\n  padding: 12px 14px;\n  color: var(--tm-text);\n  background: rgba(var(--ion-color-warning-rgb), 0.12);\n  border: 1px solid rgba(var(--ion-color-warning-rgb), 0.32);\n  border-radius: 12px;\n  font-size: 0.86rem;\n  font-weight: 700;\n  line-height: 1.8;\n}\n\n.tm-warning--safe {\n  background: rgba(var(--ion-color-success-rgb), 0.1);\n  border-color: rgba(var(--ion-color-success-rgb), 0.28);\n}\n\n.tm-invalid {\n  margin: 0;\n  background: rgba(var(--ion-color-danger-rgb), 0.1);\n  border-color: rgba(var(--ion-color-danger-rgb), 0.27);\n}\n\n.note {\n  margin: 13px 0 0;\n  color: var(--tm-text);\n  opacity: 0.78;\n  font-size: 0.81rem;\n  line-height: 1.8;\n}\n\n@media (max-width: 700px) {\n  .tm-metrics {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .tm-metrics > div:last-child {\n    grid-column: 1/-1;\n  }\n}\n\n@media (max-width: 480px) {\n  .tm-shell ion-card {\n    margin: 8px 2px;\n    border-radius: 18px !important;\n  }\n\n  .tm-metrics {\n    gap: 7px;\n  }\n\n  .tm-metrics > div {\n    padding: 10px;\n  }\n\n  .tm-metrics strong {\n    font-size: 1.14rem;\n  }\n\n  .tm-chart-frame {\n    padding: 10px 6px 5px;\n  }\n\n  .tm-chart-caption {\n    margin-inline: 5px;\n  }\n\n  .tm-inspector {\n    padding: 12px;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .tm-rpm-range {\n    scroll-behavior: auto;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfcHJvZmlsZS1zZWxlY3Quc2NzcyIsInR1cmJvLW1hdGNoLmNvbXBvbmVudC5zY3NzIiwiLi5cXF90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWtCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixTQUFBO0VBQVcsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixrQkFBQTtFQUFvQix1REFBQTtFQUF5RCxtQkFBQTtFQUFxQiw0Q0FBQTtFQUE4QyxxQ0FBQTtBQ1dwUDs7QURWQTtFQUE2Qix1Q0FBQTtFQUF5QyxrQkFBQTtBQ2V0RTs7QURkQTtFQUF3QixhQUFBO0VBQWUsUUFBQTtFQUFVLGdCQUFBO0FDb0JqRDs7QURuQkE7RUFBeUIsa0JBQUE7QUN1QnpCOztBRHRCQTtFQUF3Qix1Q0FBQTtFQUF5QyxrQkFBQTtBQzJCakU7O0FEMUJBO0VBQXlCLE9BQUE7RUFBUyxnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixpQkFBQTtFQUFtQix1REFBQTtFQUF5RCxrQkFBQTtFQUFvQiw2Q0FBQTtFQUErQyxxQ0FBQTtFQUF1QyxhQUFBO0VBQWUsa0JBQUE7QUN1QzNROztBRHRDQTtFQUFvQix1Q0FBQTtFQUF5QyxrQkFBQTtFQUFtQixnQkFBQTtFQUFrQixxQkFBQTtBQzZDbEc7O0FENUNBO0VBQWtDLGdCQUFBO0VBQWtCLGdCQUFBO0VBQWtCLHVDQUFBO0VBQXlDLGlCQUFBO0VBQWtCLGdCQUFBO0FDb0RqSTs7QURuREE7RUFBNEI7SUFBeUIsZ0JBQUE7SUFBa0IsZUFBQTtFQ3lEckU7O0VEekR1RjtJQUFvQixrQkFBQTtFQzZEM0c7QUFDRjs7QUFuRUE7RUFDRSx5Q0FBQTtFQUNBLDBDQUFBO0VBRUEsaUJBQUE7RUFDQSxzQkFBQTtBQW9FRjs7QUFqRUE7RUFDRSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlEQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBQW9FRjs7QUFqRUE7RUFBNEIsb0JBQUE7QUFxRTVCOztBQXBF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O0FEd2tCTjs7QUN0a0JJO0VBQWtELG1DQUFBO0FEeWtCdEQiLCJmaWxlIjoidHVyYm8tbWF0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1zZWxlY3QgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IGZsZXgtd3JhcDogd3JhcDsgbWFyZ2luLXRvcDogMTdweDsgcGFkZGluZzogMTNweCAxN3B4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNkMGQ1ZGQpOyBib3JkZXItcmFkaXVzOiAxNXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCAjZmZmKTsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMWMyNDMwKTsgfVxuLnByb2ZpbGUtc2VsZWN0ID4gaW9uLWljb24geyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2QxMjMzMik7IGZvbnQtc2l6ZTogMS40NXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0ID4gZGl2IHsgZGlzcGxheTogZ3JpZDsgZ2FwOiAycHg7IG1pbi13aWR0aDogMTQwcHg7IH1cbi5wcm9maWxlLXNlbGVjdCBzdHJvbmcgeyBmb250LXNpemU6IC44MXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0IHNtYWxsIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM2NjcwODUpOyBmb250LXNpemU6IC43MXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0IHNlbGVjdCB7IGZsZXg6IDE7IG1pbi13aWR0aDogMTgwcHg7IG1heC13aWR0aDogMzQwcHg7IHBhZGRpbmc6IDlweCAxMXB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNkMGQ1ZGQpOyBib3JkZXItcmFkaXVzOiA5cHg7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMWMyNDMwKTsgZm9udDogaW5oZXJpdDsgZm9udC1zaXplOiAuNzlyZW07IH1cbi5wcm9maWxlLXNlbGVjdCBhIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNkMTIzMzIpOyBmb250LXNpemU6IC43NnJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4ucHJvZmlsZS1zZWxlY3QgLnByb2ZpbGUtbm90aWNlIHsgZmxleC1iYXNpczogMTAwJTsgcGFkZGluZy10b3A6IDVweDsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM2NjcwODUpOyBmb250LXNpemU6IC43cmVtOyBsaW5lLWhlaWdodDogMS43OyB9XG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHsgLnByb2ZpbGUtc2VsZWN0IHNlbGVjdCB7IGZsZXgtYmFzaXM6IDEwMCU7IG1heC13aWR0aDogbm9uZTsgfS5wcm9maWxlLXNlbGVjdCBhIHsgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9IH1cbiIsIkBpbXBvcnQgJy4uL3RoZW1lJztcclxuXHJcbkBpbXBvcnQgJy4uL3Byb2ZpbGUtc2VsZWN0JztcclxuLnRtLXNoZWxsIHtcclxuICAtLXRtLXRleHQ6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMjAyNDJhKTtcclxuICAtLXRtLW11dGVkOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzIwMjQyYSk7XHJcblxyXG4gIG1heC13aWR0aDogMTUwMHB4O1xyXG4gIG1hcmdpbjogMTJweCBhdXRvIDM2cHg7XHJcbn1cclxuXHJcbi50bS1zaGVsbCBpb24tY2FyZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCAjZmZmKTtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGNvbG9yOiB2YXIoLS10bS10ZXh0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgLjI0KTtcclxuICBib3JkZXItcmFkaXVzOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAxOHB4IDQ2cHggcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG59XHJcblxyXG4udG0tc2hlbGwgaW9uLWNhcmQtaGVhZGVyIHsgcGFkZGluZy1ib3R0b206IDEycHg7IH1cclxuLnRtLXNoZWxsIGlvbi1jYXJkLXRpdGxlIHsgY29sb3I6IHZhcigtLXRtLXRleHQpOyBmb250LXNpemU6IDEuMjVyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IH1cclxuLnRtLXNoZWxsIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXRtLW11dGVkKTsgb3BhY2l0eTogLjc2OyBmb250LXNpemU6IC44M3JlbSAhaW1wb3J0YW50OyBsaW5lLWhlaWdodDogMS43OyB9XHJcbi50bS1zaGVsbCBpb24tY2FyZC1jb250ZW50IHsgY29sb3I6IHZhcigtLXRtLXRleHQpOyB9XHJcblxyXG4udG0taW5wdXQtY2FyZCBpb24tbGlzdCB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XHJcblxyXG4udG0taW5wdXQtY2FyZCBpb24taXRlbSxcclxuLnRtLWlucHV0LWNhcmQgaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiB2YXIoLS10bS10ZXh0KTtcclxuICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIC4yMik7XHJcbiAgY29sb3I6IHZhcigtLXRtLXRleHQpO1xyXG59XHJcblxyXG4udG0taW5wdXQtY2FyZCBpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnRtLWlucHV0LWNhcmQgaW9uLWxhYmVsIHtcclxuICBjb2xvcjogdmFyKC0tdG0tdGV4dCkgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDY1MDtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRtLWlucHV0LWNhcmQgaW9uLWlucHV0IHtcclxuICAtLWNvbG9yOiB2YXIoLS10bS10ZXh0KTtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS10bS1tdXRlZCk7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAuNzY7XHJcbiAgbWluLWhlaWdodDogNDJweDtcclxuICBjb2xvcjogdmFyKC0tdG0tdGV4dCk7XHJcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDc1MDtcclxuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xyXG59XHJcblxyXG4udG0taW5wdXQtY2FyZCBpb24taXRlbSBpb24taW5wdXQgKyBpb24taW5wdXQgeyBtYXJnaW4taW5saW5lLXN0YXJ0OiAxMHB4OyB9XHJcbi50bS1pbnB1dC1jYXJkIGlvbi1pdGVtLWRpdmlkZXIgeyBtYXJnaW4tdG9wOiAxMnB4OyBmb250LXdlaWdodDogODAwOyB9XHJcblxyXG4udG0tbWV0cmljcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi50bS1tZXRyaWNzID4gZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA1cHg7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIHBhZGRpbmc6IDEzcHggMTRweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgLjA3NSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIC4xOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxufVxyXG5cclxuLnRtLW1ldHJpY3Mgc3BhbixcclxuLnRtLWluc3BlY3Rvcl9fdmFsdWVzIHNwYW4geyBjb2xvcjogdmFyKC0tdG0tbXV0ZWQpOyBvcGFjaXR5OiAuNzY7IGZvbnQtc2l6ZTogLjc4cmVtOyB9XHJcbi50bS1tZXRyaWNzIHN0cm9uZyB7IGNvbG9yOiB2YXIoLS10bS10ZXh0KTsgZm9udC1zaXplOiAxLjRyZW07IGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7IH1cclxuLnRtLW1ldHJpY3Mgc21hbGwgeyBjb2xvcjogdmFyKC0tdG0tbXV0ZWQpOyBvcGFjaXR5OiAuNzY7IGZvbnQtc2l6ZTogLjcycmVtOyB9XHJcblxyXG4udG0tY2hhcnQtZnJhbWUge1xyXG4gIHBhZGRpbmc6IDE0cHggMTJweCA4cHg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBjb2xvcjogI2VhZjBmNDtcclxuICBiYWNrZ3JvdW5kOiAjMTAxNzFkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzQwNGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDI1KTtcclxufVxyXG5cclxuLnRtLWNoYXJ0LWZyYW1lOmZvY3VzLXZpc2libGUgeyBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7IG91dGxpbmUtb2Zmc2V0OiAzcHg7IH1cclxuXHJcbi50bS1jaGFydC1jYXB0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDZweCAxNHB4O1xyXG4gIG1hcmdpbjogMCA3cHggOHB4O1xyXG4gIGZvbnQtc2l6ZTogLjg0cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3NTA7XHJcbn1cclxuXHJcbi50bS1jaGFydC1jYXB0aW9uIHNtYWxsIHsgY29sb3I6ICNhZmJlYzc7IGZvbnQtc2l6ZTogLjc1cmVtOyBmb250LXdlaWdodDogNTAwOyB9XHJcblxyXG4uY29tcHJlc3Nvci1tYXAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogNjAwcHg7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXJlY3Rpb246IGx0cjtcclxufVxyXG5cclxuLnBsb3QtYmFja2dyb3VuZCB7IGZpbGw6ICMxODIzMmI7IH1cclxuLnN1cmdlLXpvbmUgeyBmaWxsOiByZ2JhKDI0NSwgMTc4LCA2OCwgLjIzKTsgfVxyXG4uc2FmZS16b25lIHsgZmlsbDogcmdiYSg2NywgMTg1LCAxMzEsIC4xOCk7IH1cclxuLmNob2tlLXpvbmUgeyBmaWxsOiByZ2JhKDI0MCwgODcsIDk5LCAuMjIpOyB9XHJcbi5wcmVzc3VyZS16b25lIHsgZmlsbDogcmdiYSgxNzAsIDExNywgMjIzLCAuMjIpOyB9XHJcbi5ncmlkIHsgc3Ryb2tlOiAjN2I4Yjk2OyBzdHJva2Utd2lkdGg6IC43OyBvcGFjaXR5OiAuMjg7IH1cclxuLmF4aXMgeyBzdHJva2U6ICNkMmRjZTI7IHN0cm9rZS13aWR0aDogMS41OyB9XHJcbi5saW1pdC1saW5lIHsgZmlsbDogbm9uZTsgc3Ryb2tlLXdpZHRoOiAxLjU7IHN0cm9rZS1kYXNoYXJyYXk6IDYgNTsgfVxyXG4ubGltaXQtbGluZS0tc3VyZ2UgeyBzdHJva2U6ICNmNWIyNDQ7IH1cclxuLmxpbWl0LWxpbmUtLWNob2tlIHsgc3Ryb2tlOiAjZjI3MDc4OyB9XHJcbi5saW1pdC1saW5lLS1wcmVzc3VyZSB7IHN0cm9rZTogI2MzOWFlYjsgfVxyXG4ub3BlcmF0aW5nLXBhdGggeyBmaWxsOiBub25lOyBzdHJva2U6ICNmZjczN2M7IHN0cm9rZS13aWR0aDogMy41OyBzdHJva2UtbGluZWNhcDogcm91bmQ7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7IH1cclxuLnNlbGVjdGVkLWd1aWRlcyBsaW5lIHsgc3Ryb2tlOiAjZWFmMGY0OyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IDQgNTsgb3BhY2l0eTogLjY1OyB9XHJcbi5tYXAtcG9pbnQgeyBjdXJzb3I6IHBvaW50ZXI7IH1cclxuLnBvaW50LWhhbG8geyBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNCk7IHN0cm9rZTogI2ZmZjsgc3Ryb2tlLXdpZHRoOiAxLjU7IH1cclxuLnBvaW50LWNvcmUgeyBzdHJva2U6ICMxMDE3MWQ7IHN0cm9rZS13aWR0aDogMjsgfVxyXG4ucG9pbnQtY29yZS5zYWZlIHsgZmlsbDogIzU5ZDY5ZjsgfVxyXG4ucG9pbnQtY29yZS5zdXJnZSB7IGZpbGw6ICNmZmNhNjk7IH1cclxuLnBvaW50LWNvcmUuY2hva2UgeyBmaWxsOiAjZmY3Yzg1OyB9XHJcbi5wb2ludC1jb3JlLm92ZXItcHJlc3N1cmUgeyBmaWxsOiAjZDJhYWZmOyB9XHJcbi5tYXAtcG9pbnQ6Zm9jdXMtdmlzaWJsZSAucG9pbnQtY29yZSB7IHN0cm9rZTogI2ZmZjsgc3Ryb2tlLXdpZHRoOiA0OyB9XHJcblxyXG4udGljay1sYWJlbCxcclxuLmF4aXMtbGFiZWwgeyBmaWxsOiAjZDZlMWU3OyBmb250LXNpemU6IDExcHg7IHRleHQtYW5jaG9yOiBtaWRkbGU7IH1cclxuLnktbGFiZWwgeyB0ZXh0LWFuY2hvcjogZW5kOyB9XHJcbi5heGlzLWxhYmVsIHsgZmlsbDogI2YyZjZmODsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNzUwOyB9XHJcblxyXG4udG0tbGVnZW5kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDhweDtcclxuICBtYXJnaW46IDEycHggMCAxOHB4O1xyXG59XHJcblxyXG4udG0tbGVnZW5kIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA3cHg7XHJcbiAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLXRtLXRleHQpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAuMDc1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgLjE3KTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBmb250LXNpemU6IC43NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udG0tbGVnZW5kIHN0cm9uZyB7IGNvbG9yOiB2YXIoLS10bS10ZXh0KTsgZm9udC13ZWlnaHQ6IDgwMDsgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtczsgfVxyXG5cclxuLnRtLWxlZ2VuZCBpIHsgd2lkdGg6IDlweDsgaGVpZ2h0OiA5cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgfVxyXG4udG0tbGVnZW5kX19zdXJnZSB7IGJhY2tncm91bmQ6ICNmNWIyNDQ7IH1cclxuLnRtLWxlZ2VuZF9fc2FmZSB7IGJhY2tncm91bmQ6ICM0M2I5ODM7IH1cclxuLnRtLWxlZ2VuZF9fY2hva2UgeyBiYWNrZ3JvdW5kOiAjZjA1NzYzOyB9XHJcbi50bS1sZWdlbmRfX3ByZXNzdXJlIHsgYmFja2dyb3VuZDogI2FhNzVkZjsgfVxyXG5cclxuLnRtLWluc3BlY3RvciB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBjb2xvcjogdmFyKC0tdG0tdGV4dCk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIC4wNzUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLnRtLWluc3BlY3Rvcl9faGVhZGluZyxcclxuLnRtLXJhbmdlLWxhYmVscyxcclxuLnRtLWluc3BlY3Rvcl9fdmFsdWVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLnRtLWluc3BlY3Rvcl9faGVhZGluZyA+IGRpdiB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNHB4OyB9XHJcbi50bS1pbnNwZWN0b3JfX2hlYWRpbmcgc3BhbjpmaXJzdC1jaGlsZCB7IGNvbG9yOiB2YXIoLS10bS1tdXRlZCk7IG9wYWNpdHk6IC43NjsgZm9udC1zaXplOiAuNzdyZW07IH1cclxuLnRtLWluc3BlY3Rvcl9faGVhZGluZyBzdHJvbmcgeyBjb2xvcjogdmFyKC0tdG0tdGV4dCk7IGZvbnQtc2l6ZTogMS4ycmVtOyBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zOyB9XHJcblxyXG4udG0tc3RhdGUgeyBwYWRkaW5nOiA3cHggMTBweDsgYm9yZGVyLXJhZGl1czogOXB4OyBmb250LXNpemU6IC43N3JlbTsgZm9udC13ZWlnaHQ6IDgwMDsgfVxyXG4udG0tc3RhdGUuc2FmZSB7IGNvbG9yOiB0dW5lci1jb2xvcihzdWNjZXNzLXRleHQsICMwODczNDIpOyBiYWNrZ3JvdW5kOiB0dW5lci1jb2xvcihzdWNjZXNzLXNvZnQsICNkOWY1ZTgpOyB9XHJcbi50bS1zdGF0ZS5zdXJnZSB7IGNvbG9yOiB0dW5lci1jb2xvcih3YXJuaW5nLXRleHQsICM3NjUwMGEpOyBiYWNrZ3JvdW5kOiB0dW5lci1jb2xvcih3YXJuaW5nLXNvZnQsICNmZmYwY2EpOyB9XHJcbi50bS1zdGF0ZS5jaG9rZSB7IGNvbG9yOiB0dW5lci1jb2xvcihkYW5nZXItdGV4dCwgI2EyMjQzMSk7IGJhY2tncm91bmQ6IHR1bmVyLWNvbG9yKGRhbmdlci1zb2Z0LCAjZmZlM2U0KTsgfVxyXG4udG0tc3RhdGUub3Zlci1wcmVzc3VyZSB7IGNvbG9yOiB0dW5lci1jb2xvcihwdXJwbGUtdGV4dCwgIzZmMzU5ZSk7IGJhY2tncm91bmQ6IHR1bmVyLWNvbG9yKHB1cnBsZS1zb2Z0LCAjZjFlMmZmKTsgfVxyXG5cclxuLnRtLXJwbS1yYW5nZSB7IHdpZHRoOiAxMDAlOyBtYXJnaW46IDE4cHggMCA0cHg7IGFjY2VudC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7IGN1cnNvcjogcG9pbnRlcjsgfVxyXG4udG0tcmFuZ2UtbGFiZWxzIHsgY29sb3I6IHZhcigtLXRtLW11dGVkKTsgb3BhY2l0eTogLjc2OyBmb250LXNpemU6IC43MnJlbTsgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtczsgfVxyXG4udG0taW5zcGVjdG9yX192YWx1ZXMgeyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IGZsZXgtd3JhcDogd3JhcDsgZ2FwOiAxMnB4OyBtYXJnaW4tdG9wOiAxNnB4OyB9XHJcblxyXG4udG0taW5zcGVjdG9yX192YWx1ZXMgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNXB4O1xyXG4gIG1pbi13aWR0aDogMTMwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsICNmZmYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi50bS1pbnNwZWN0b3JfX3ZhbHVlcyBzdHJvbmcgeyBjb2xvcjogdmFyKC0tdG0tdGV4dCk7IGZvbnQtc2l6ZTogMS4wNXJlbTsgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtczsgfVxyXG4udG0taW5zcGVjdG9yX192YWx1ZXMgc21hbGwgeyBjb2xvcjogdmFyKC0tdG0tbXV0ZWQpOyBvcGFjaXR5OiAuNzY7IGZvbnQtc2l6ZTogLjdyZW07IH1cclxuLnRtLWluc3BlY3Rvcl9faGludCB7IG1hcmdpbjogMTBweCAwIDA7IGNvbG9yOiB2YXIoLS10bS10ZXh0KTsgb3BhY2l0eTogLjc2OyBmb250LXNpemU6IC43M3JlbTsgfVxyXG5cclxuLnRtLXdhcm5pbmcsXHJcbi50bS1pbnZhbGlkIHtcclxuICBtYXJnaW46IDE2cHggMCAwO1xyXG4gIHBhZGRpbmc6IDEycHggMTRweDtcclxuICBjb2xvcjogdmFyKC0tdG0tdGV4dCk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itd2FybmluZy1yZ2IpLCAuMTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLXdhcm5pbmctcmdiKSwgLjMyKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogLjg2cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuODtcclxufVxyXG5cclxuLnRtLXdhcm5pbmctLXNhZmUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiKSwgLjEpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IpLCAuMjgpO1xyXG59XHJcblxyXG4udG0taW52YWxpZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAuMSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgLjI3KTtcclxufVxyXG5cclxuLm5vdGUgeyBtYXJnaW46IDEzcHggMCAwOyBjb2xvcjogdmFyKC0tdG0tdGV4dCk7IG9wYWNpdHk6IC43ODsgZm9udC1zaXplOiAuODFyZW07IGxpbmUtaGVpZ2h0OiAxLjg7IH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC50bS1tZXRyaWNzIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpOyB9XHJcbiAgLnRtLW1ldHJpY3MgPiBkaXY6bGFzdC1jaGlsZCB7IGdyaWQtY29sdW1uOiAxIC8gLTE7IH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnRtLXNoZWxsIGlvbi1jYXJkIHsgbWFyZ2luOiA4cHggMnB4OyBib3JkZXItcmFkaXVzOiAxOHB4ICFpbXBvcnRhbnQ7IH1cclxuICAudG0tbWV0cmljcyB7IGdhcDogN3B4OyB9XHJcbiAgLnRtLW1ldHJpY3MgPiBkaXYgeyBwYWRkaW5nOiAxMHB4OyB9XHJcbiAgLnRtLW1ldHJpY3Mgc3Ryb25nIHsgZm9udC1zaXplOiAxLjE0cmVtOyB9XHJcbiAgLnRtLWNoYXJ0LWZyYW1lIHsgcGFkZGluZzogMTBweCA2cHggNXB4OyB9XHJcbiAgLnRtLWNoYXJ0LWNhcHRpb24geyBtYXJnaW4taW5saW5lOiA1cHg7IH1cclxuICAudG0taW5zcGVjdG9yIHsgcGFkZGluZzogMTJweDsgfVxyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gIC50bS1ycG0tcmFuZ2UgeyBzY3JvbGwtYmVoYXZpb3I6IGF1dG87IH1cclxufVxyXG5cclxuQGluY2x1ZGUgdHVuZXItZGFyay10aGVtZTtcclxuIiwiLy8gS2VlcCB0aGUgb3JpZ2luYWwgbGlnaHQgY29sb3IgYXQgZWFjaCBjYWxsIHNpdGUuIFRva2VucyBleGlzdCBvbmx5IGluIGRhcmsgbW9kZS5cbkBmdW5jdGlvbiB0dW5lci1jb2xvcigkcm9sZSwgJGxpZ2h0KSB7XG4gIEByZXR1cm4gdmFyKC0tdHVuZXItI3skcm9sZX0sICN7JGxpZ2h0fSk7XG59XG5cbkBtaXhpbiB0dW5lci1kYXJrLXRoZW1lIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgLS10dW5lci1wYWdlOiAjMTExNTFlO1xuICAgIC0tdHVuZXItc3VyZmFjZTogIzFjMjIzMDtcbiAgICAtLXR1bmVyLXNvZnQ6ICMyNTJlM2Q7XG4gICAgLS10dW5lci1ib3JkZXI6ICM0NjUyNjk7XG4gICAgLS10dW5lci10ZXh0OiAjZWRmMWY4O1xuICAgIC0tdHVuZXItbXV0ZWQ6ICNiMmJmZDE7XG4gICAgLS10dW5lci1oZWFkZXI6IHJnYmEoMjgsIDM0LCA0OCwgMC45NCk7XG4gICAgLS10dW5lci1vdmVybGF5OiByZ2JhKDI4LCAzNCwgNDgsIDAuOTUpO1xuICAgIC0tdHVuZXItcHVycGxlLXRleHQ6ICNjNGI1ZmQ7XG4gICAgLS10dW5lci1wdXJwbGUtc29mdDogIzMwMjQ0NDtcbiAgICAtLXR1bmVyLXB1cnBsZS1ib3JkZXI6ICM3MjU3OWI7XG4gICAgLS10dW5lci1pbmZvLXRleHQ6ICM5M2M1ZmQ7XG4gICAgLS10dW5lci1pbmZvLXNvZnQ6ICMxZDMwNGM7XG4gICAgLS10dW5lci1pbmZvLWJvcmRlcjogIzQ2NmI5YTtcbiAgICAtLXR1bmVyLXdhcm5pbmctdGV4dDogI2ZjZDQ3NztcbiAgICAtLXR1bmVyLXdhcm5pbmctc29mdDogIzNiMzAyMDtcbiAgICAtLXR1bmVyLXdhcm5pbmctYm9yZGVyOiAjOTM3NDNkO1xuICAgIC0tdHVuZXItc3VjY2Vzcy10ZXh0OiAjODZlZmFjO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1zb2Z0OiAjMTkzOTJlO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1ib3JkZXI6ICM0MTdkNjA7XG4gICAgLS10dW5lci1kYW5nZXItdGV4dDogI2ZkYTRhZjtcbiAgICAtLXR1bmVyLWRhbmdlci1zb2Z0OiAjNDAyNjMxO1xuICAgIC0tdHVuZXItZGFuZ2VyLWJvcmRlcjogIzk4NTM2NztcbiAgICAtLXR1bmVyLXRlYWwtdGV4dDogIzdkZTRkNDtcbiAgICAtLXR1bmVyLXRlYWwtc29mdDogIzE5M2EzYTtcbiAgICAtLXR1bmVyLXRlYWwtYm9yZGVyOiAjNDM3ZjdjO1xuXG4gICAgLy8gTmF0aXZlIGNvbnRyb2xzIHdpdGhvdXQgYW4gZXhwbGljaXQgbGlnaHQgYmFja2dyb3VuZCBuZWVkIGEgZGFyayBzdXJmYWNlIHRvby5cbiAgICBpbnB1dDpub3QoW3R5cGU9J3JhbmdlJ10pOm5vdChbdHlwZT0nY2hlY2tib3gnXSk6bm90KFt0eXBlPSdyYWRpbyddKTpub3QoW3R5cGU9J2J1dHRvbiddKTpub3QoW3R5cGU9J3N1Ym1pdCddKTpub3QoW3R5cGU9J2ZpbGUnXSksXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci1tdXRlZCk7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cblxuICAgIGlvbi1oZWFkZXIubGVhcm5pbmctaGVhZGVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItcGFnZSk7IC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmQ6bm90KFtjb2xvcl0pLCBpb24tbGlzdCwgaW9uLWl0ZW06bm90KFtjb2xvcl0pLCBpb24taXRlbS1kaXZpZGVyOm5vdChbY29sb3JdKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWxpc3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTsgfVxuICAgIGlvbi1jYXJkLXRpdGxlLCBpb24tY2FyZC1zdWJ0aXRsZSB7IGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkW2NvbG9yPSdsaWdodGVzdCddLCBpb24taXRlbVtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWZhYi1idXR0b25bY29sb3I9J2xpZ2h0ZXN0J10ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2RhcmsnXSwgaW9uLWxhYmVsW2NvbG9yPSdkYXJrJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 30657:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/turbo-match/turbo-match.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  \n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" color=\"lightest\" defaultHref=\"/TunerPlus\"></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" class=\"title-size no-padding\">تطبیق توربو و کمپرسورمپ</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"tm-shell\" fixed dir=\"rtl\" *ngIf=\"isShow\">\r\n    <section class=\"profile-select\" aria-label=\"انتخاب پروفایل خودرو\">\r\n      <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n      <div><strong>پروفایل خودرو</strong><small>مقادیر ثبت‌شده را در این ابزار اعمال کن</small></div>\r\n      <select [value]=\"selectedProfileId\" (change)=\"applyProfile($any($event.target).value)\" aria-label=\"پروفایل خودرو\">\r\n        <option value=\"\">انتخاب پروفایل</option>\r\n        <option *ngFor=\"let profile of profiles\" [value]=\"profile.id\">{{ profile.name }}</option>\r\n      </select>\r\n      <a routerLink=\"/TunerPlus/vehicle-profile\">ساخت یا ویرایش پروفایل</a>\r\n      <small class=\"profile-notice\" *ngIf=\"profileNotice\">{{ profileNotice }}</small>\r\n    </section>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-lg=\"5\">\r\n        <ion-card class=\"tm-input-card\">\r\n          <ion-card-header>\r\n            <ion-card-title>مشخصات موتور و توربو</ion-card-title>\r\n            <ion-card-subtitle>مقادیر کمپرسور را از دیتاشیت یا کمپرسورمپ همان توربو وارد کنید.</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <form [formGroup]=\"form\">\r\n              <ion-list>\r\n                <ion-item><ion-label position=\"stacked\">حجم موتور (L)</ion-label><ion-input formControlName=\"displacementLiters\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('displacement')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item><ion-label position=\"stacked\">دور شروع / پایان (RPM)</ion-label><ion-input formControlName=\"rpmStart\" type=\"number\"></ion-input><ion-input formControlName=\"rpmEnd\" type=\"number\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('rpm')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item><ion-label position=\"stacked\">VE در WOT (%)</ion-label><ion-input formControlName=\"volumetricEfficiencyPct\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('ve')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item><ion-label position=\"stacked\">بوست هدف (psi گیج)</ion-label><ion-input formControlName=\"boostPsi\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('boost')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item><ion-label position=\"stacked\">فشار محیط (psi مطلق)</ion-label><ion-input formControlName=\"ambientPressurePsi\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('ambient')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item><ion-label position=\"stacked\">دمای هوای ورودی کمپرسور (°C)</ion-label><ion-input formControlName=\"inletAirTempC\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('temperature')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item-divider><ion-label>محدوده کمپرسور</ion-label></ion-item-divider>\r\n                <ion-item><ion-label position=\"stacked\">مرز Surge (lb/min)</ion-label><ion-input formControlName=\"compressorSurgeLbMin\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('surge')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item><ion-label position=\"stacked\">دبی بیشینه / Choke (lb/min)</ion-label><ion-input formControlName=\"compressorMaxFlowLbMin\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('choke')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n                <ion-item><ion-label position=\"stacked\">حداکثر Pressure Ratio</ion-label><ion-input formControlName=\"compressorMaxPressureRatio\" type=\"number\" inputmode=\"decimal\"></ion-input><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('pr')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button></ion-item>\r\n              </ion-list>\r\n              <ion-button expand=\"block\" color=\"warning\" fill=\"clear\" shape=\"round\" (click)=\"reset()\">ریست</ion-button>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" size-lg=\"7\">\r\n        <ion-card class=\"tm-result-card\">\r\n          <ion-card-header>\r\n            <ion-card-title>نقشه محدوده کاری کمپرسور</ion-card-title>\r\n            <ion-card-subtitle>دبی تصحیح‌شده و نسبت فشار مطلق بر اساس مرزهای واردشده</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content *ngIf=\"points.length; else invalidMap\">\r\n            <div class=\"tm-metrics\">\r\n              <div><span>نسبت فشار هدف</span><strong>{{ targetPressureRatio | number:'1.2-2' }}</strong><small>PR مطلق</small></div>\r\n              <div><span>اوج دبی تصحیح‌شده</span><strong>{{ peakFlowLbMin | number:'1.0-2' }}</strong><small>lb/min</small></div>\r\n              <div><span>نقاط داخل محدوده</span><strong>{{ safePointCount }} / {{ points.length }}</strong><small>از دور شروع تا پایان</small></div>\r\n            </div>\r\n\r\n            <div class=\"tm-chart-frame\" role=\"region\" tabindex=\"0\" aria-label=\"نمودار محدوده کمپرسور؛ در صفحه کوچک به صورت افقی پیمایش کنید\">\r\n              <div class=\"tm-chart-caption\">\r\n                <span>مسیر نقاط کاری موتور</span>\r\n                <small>هر نقطه یک دور موتور است؛ برای جزئیات آن را انتخاب کنید.</small>\r\n              </div>\r\n              <svg class=\"compressor-map\" [attr.viewBox]=\"'0 0 ' + mapWidth + ' ' + mapHeight\" role=\"group\" aria-label=\"نقشه دبی تصحیح‌شده و نسبت فشار، همراه با مرزهای Surge و Choke و نقاط کاری موتور\">\r\n                <rect class=\"plot-background\" [attr.x]=\"plotLeft\" [attr.y]=\"plotTop\" [attr.width]=\"plotWidth\" [attr.height]=\"plotHeight\"></rect>\r\n                <rect class=\"surge-zone\" [attr.x]=\"plotLeft\" [attr.y]=\"plotTop\" [attr.width]=\"toX(form.value.compressorSurgeLbMin) - plotLeft\" [attr.height]=\"plotHeight\"></rect>\r\n                <rect class=\"safe-zone\" [attr.x]=\"toX(form.value.compressorSurgeLbMin)\" [attr.y]=\"toY(form.value.compressorMaxPressureRatio)\" [attr.width]=\"toX(form.value.compressorMaxFlowLbMin) - toX(form.value.compressorSurgeLbMin)\" [attr.height]=\"toY(1) - toY(form.value.compressorMaxPressureRatio)\"></rect>\r\n                <rect class=\"choke-zone\" [attr.x]=\"toX(form.value.compressorMaxFlowLbMin)\" [attr.y]=\"plotTop\" [attr.width]=\"mapWidth - plotRight - toX(form.value.compressorMaxFlowLbMin)\" [attr.height]=\"plotHeight\"></rect>\r\n                <rect class=\"pressure-zone\" [attr.x]=\"plotLeft\" [attr.y]=\"plotTop\" [attr.width]=\"plotWidth\" [attr.height]=\"toY(form.value.compressorMaxPressureRatio) - plotTop\"></rect>\r\n\r\n                <g *ngFor=\"let tick of xTicks\">\r\n                  <line class=\"grid\" [attr.x1]=\"toX(tick)\" [attr.y1]=\"plotTop\" [attr.x2]=\"toX(tick)\" [attr.y2]=\"toY(1)\"></line>\r\n                  <text class=\"tick-label\" [attr.x]=\"toX(tick)\" [attr.y]=\"mapHeight - 23\">{{ tick }}</text>\r\n                </g>\r\n                <g *ngFor=\"let tick of yTicks\">\r\n                  <line class=\"grid\" [attr.x1]=\"plotLeft\" [attr.y1]=\"toY(tick)\" [attr.x2]=\"mapWidth - plotRight\" [attr.y2]=\"toY(tick)\"></line>\r\n                  <text class=\"tick-label y-label\" [attr.x]=\"plotLeft - 10\" [attr.y]=\"toY(tick) + 4\">{{ tick }}</text>\r\n                </g>\r\n\r\n                <line class=\"limit-line limit-line--surge\" [attr.x1]=\"toX(form.value.compressorSurgeLbMin)\" [attr.y1]=\"plotTop\" [attr.x2]=\"toX(form.value.compressorSurgeLbMin)\" [attr.y2]=\"toY(1)\"></line>\r\n                <line class=\"limit-line limit-line--choke\" [attr.x1]=\"toX(form.value.compressorMaxFlowLbMin)\" [attr.y1]=\"plotTop\" [attr.x2]=\"toX(form.value.compressorMaxFlowLbMin)\" [attr.y2]=\"toY(1)\"></line>\r\n                <line class=\"limit-line limit-line--pressure\" [attr.x1]=\"plotLeft\" [attr.y1]=\"toY(form.value.compressorMaxPressureRatio)\" [attr.x2]=\"mapWidth - plotRight\" [attr.y2]=\"toY(form.value.compressorMaxPressureRatio)\"></line>\r\n                <line class=\"axis\" [attr.x1]=\"plotLeft\" [attr.y1]=\"toY(1)\" [attr.x2]=\"mapWidth - plotRight\" [attr.y2]=\"toY(1)\"></line>\r\n                <line class=\"axis\" [attr.x1]=\"plotLeft\" [attr.y1]=\"plotTop\" [attr.x2]=\"plotLeft\" [attr.y2]=\"toY(1)\"></line>\r\n                <path class=\"operating-path\" [attr.d]=\"path\"></path>\r\n\r\n                <g *ngIf=\"selectedPoint as active\" class=\"selected-guides\">\r\n                  <line [attr.x1]=\"active.x\" [attr.y1]=\"active.y\" [attr.x2]=\"active.x\" [attr.y2]=\"toY(1)\"></line>\r\n                  <line [attr.x1]=\"plotLeft\" [attr.y1]=\"active.y\" [attr.x2]=\"active.x\" [attr.y2]=\"active.y\"></line>\r\n                </g>\r\n                <g *ngFor=\"let point of points; index as i\" class=\"map-point\" [class.is-selected]=\"selectedPointIndex === i\" role=\"button\" tabindex=\"0\" [attr.aria-label]=\"point.rpm + ' RPM، دبی ' + point.correctedFlowLbMin + ' lb/min، ' + stateLabel(point.state)\" (click)=\"selectPoint(i)\" (keydown.enter)=\"selectPoint(i)\" (keydown.space)=\"selectPoint(i); $event.preventDefault()\">\r\n                  <circle *ngIf=\"selectedPointIndex === i\" class=\"point-halo\" [attr.cx]=\"point.x\" [attr.cy]=\"point.y\" r=\"12\"></circle>\r\n                  <circle class=\"point-core\" [ngClass]=\"point.state\" [attr.cx]=\"point.x\" [attr.cy]=\"point.y\" [attr.r]=\"selectedPointIndex === i ? 7 : 5\"></circle>\r\n                  <title>{{ point.rpm }} RPM — {{ point.correctedFlowLbMin }} lb/min — {{ stateLabel(point.state) }}</title>\r\n                </g>\r\n                <text class=\"axis-label\" [attr.x]=\"mapWidth / 2\" [attr.y]=\"mapHeight - 4\">Corrected flow (lb/min)</text>\r\n                <text class=\"axis-label\" [attr.x]=\"16\" [attr.y]=\"mapHeight / 2\" [attr.transform]=\"'rotate(-90 16 ' + mapHeight / 2 + ')'\">Pressure ratio</text>\r\n              </svg>\r\n            </div>\r\n\r\n            <div class=\"tm-legend\" aria-label=\"راهنمای نواحی نمودار\">\r\n              <span><i class=\"tm-legend__surge\"></i> Surge <strong>{{ form.value.compressorSurgeLbMin }} lb/min</strong></span>\r\n              <span><i class=\"tm-legend__safe\"></i> محدوده تعریف‌شده</span>\r\n              <span><i class=\"tm-legend__choke\"></i> Choke <strong>{{ form.value.compressorMaxFlowLbMin }} lb/min</strong></span>\r\n              <span><i class=\"tm-legend__pressure\"></i> سقف PR <strong>{{ form.value.compressorMaxPressureRatio }}</strong></span>\r\n            </div>\r\n\r\n            <div class=\"tm-inspector\" *ngIf=\"selectedPoint as active\">\r\n              <div class=\"tm-inspector__heading\">\r\n                <div><span>بررسی نقطه کاری</span><strong>{{ active.rpm }} RPM</strong></div>\r\n                <span class=\"tm-state\" [ngClass]=\"active.state\">{{ stateLabel(active.state) }}</span>\r\n              </div>\r\n              <input class=\"tm-rpm-range\" type=\"range\" min=\"0\" [max]=\"points.length - 1\" step=\"1\" [value]=\"selectedPointIndex\" (input)=\"selectPoint(+$any($event.target).value)\" aria-label=\"انتخاب دور موتور برای بررسی نقطه کاری\">\r\n              <div class=\"tm-range-labels\"><span>{{ points[0].rpm }} RPM</span><span>{{ points[points.length - 1].rpm }} RPM</span></div>\r\n              <div class=\"tm-inspector__values\">\r\n                <div><span>دبی تصحیح‌شده</span><strong>{{ active.correctedFlowLbMin }} <small>lb/min</small></strong></div>\r\n                <div><span>نسبت فشار</span><strong>{{ active.pressureRatio | number:'1.2-2' }} <small>PR</small></strong></div>\r\n                <div><span>حاشیه نسبت به Surge</span><strong>{{ active.correctedFlowLbMin - form.value.compressorSurgeLbMin | number:'1.0-2' }} <small>lb/min</small></strong></div>\r\n                <div><span>حاشیه نسبت به Choke</span><strong>{{ form.value.compressorMaxFlowLbMin - active.correctedFlowLbMin | number:'1.0-2' }} <small>lb/min</small></strong></div>\r\n              </div>\r\n              <p class=\"tm-inspector__hint\">حاشیه منفی یعنی نقطه از مرز واردشده عبور کرده است.</p>\r\n            </div>\r\n\r\n            <p class=\"tm-warning\" [class.tm-warning--safe]=\"safePointCount === points.length\">{{ warning }}</p>\r\n            <p class=\"note\">این نمودار محدوده کاری را با مرزهای واردشده نشان می‌دهد. برای انتخاب نهایی توربو، خطوط بازده و سرعت واقعی همان کمپرسورمپ را هم بررسی کنید.</p>\r\n          </ion-card-content>\r\n          <ng-template #invalidMap><ion-card-content><p class=\"tm-invalid\">{{ warning || 'ورودی‌ها را بررسی کنید.' }}</p></ion-card-content></ng-template>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_turbo-match_turbo-match_module_ts.js.map