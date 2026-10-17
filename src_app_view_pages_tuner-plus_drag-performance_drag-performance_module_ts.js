"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_drag-performance_drag-performance_module_ts"],{

/***/ 23930:
/*!*******************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/drag-performance/drag-performance-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragPerformanceRoutingModule": () => (/* binding */ DragPerformanceRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _drag_performance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-performance.component */ 4577);




const routes = [{ path: '', component: _drag_performance_component__WEBPACK_IMPORTED_MODULE_0__.DragPerformanceComponent }];
let DragPerformanceRoutingModule = class DragPerformanceRoutingModule {
};
DragPerformanceRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DragPerformanceRoutingModule);



/***/ }),

/***/ 4577:
/*!**************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/drag-performance/drag-performance.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragPerformanceComponent": () => (/* binding */ DragPerformanceComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _drag_performance_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-performance.component.html?ngResource */ 27451);
/* harmony import */ var _drag_performance_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-performance.component.scss?ngResource */ 20531);
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















let DragPerformanceComponent = class DragPerformanceComponent {
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
    this.result = null;
    this.raceSamples = [];
    this.chartWidth = 700;
    this.chartHeight = 300;
    this.chartLeft = 56;
    this.chartRight = 24;
    this.chartTop = 20;
    this.chartBottom = 42;
    this.isShow = false;
    this.check();
  }

  ngOnInit() {
    this.form = this.fb.group({
      vehicleWeightKg: [1250, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(300), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(5000)]],
      horsepower: [300, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(3000)]],
      powerLocation: ['wheel', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      drivetrainLossPct: [15, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(40)]],
      drivetrain: ['FWD', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      tractionCoefficient: [1.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(2.0)]],
      frontalAreaCdA: [0.68, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.2), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(2)]],
      rollingResistanceCoefficient: [0.015, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.005), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(0.05)]],
      shiftTimeMs: [250, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1500)]],
      shiftCount: [3, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(8)]]
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

    const values = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.toolValues(profile, 'drag-performance');
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
    const layout = String(profile.values.driveLayout || '').toLowerCase();
    const drivetrain = layout.includes('awd') || layout.includes('چهار') ? 'AWD' : layout.includes('rwd') || layout.includes('عقب') ? 'RWD' : layout.includes('fwd') || layout.includes('جلو') ? 'FWD' : '';

    if (drivetrain) {
      this.form.patchValue({
        drivetrain
      }, {
        emitEvent: false
      });
    }

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

      _this.siteService.GetTunerPlusById(34).subscribe(res => {
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
      this.result = null;
      this.raceSamples = [];
      return;
    }

    const value = this.form.getRawValue();
    const weightKg = Number(value.vehicleWeightKg);
    const inputHorsepower = Number(value.horsepower);
    const wheelHorsepower = value.powerLocation === 'flywheel' ? inputHorsepower * (1 - Number(value.drivetrainLossPct) / 100) : inputHorsepower;
    const simulation = this.simulateRun(value, wheelHorsepower);
    this.raceSamples = simulation.samples;
    const at100 = this.timeAtSpeed(100);
    const at200 = this.timeAtSpeed(200);
    const at201 = this.sampleAtDistance(201.168);
    const at402 = this.sampleAtDistance(402.336);
    const accelerations = this.raceSamples.map(sample => sample.accelerationG).filter(valueG => valueG > 0);
    this.result = {
      wheelHorsepower: this.round(wheelHorsepower, 0),
      powerToWeightHpPerTon: this.round(wheelHorsepower / (weightKg / 1000), 1),
      zeroTo100Seconds: at100,
      hundredTo200Seconds: at100 !== null && at200 !== null ? this.round(at200 - at100, 2) : null,
      eighthMileSeconds: at201.timeSeconds,
      eighthMileSpeedKmh: at201.speedKmh,
      quarterMileSeconds: at402.timeSeconds,
      quarterMileSpeedKmh: at402.speedKmh,
      peakAccelerationG: this.round(Math.max(...accelerations), 2),
      averageAccelerationG: this.round(402.336 / Math.pow(at402.timeSeconds, 2) / 9.80665 * 2, 2),
      shiftCount: Number(value.shiftCount)
    };
  }

  get speedPath() {
    return this.buildPath(sample => sample.speedKmh, this.maxSpeedKmh);
  }

  get accelerationPath() {
    return this.buildPath(sample => sample.accelerationG, this.maxAccelerationG);
  }

  get speedTicks() {
    const maximum = this.maxSpeedKmh;
    return [0, maximum / 4, maximum / 2, maximum * 0.75, maximum].map(value => this.round(value, 0));
  }

  get accelerationTicks() {
    const maximum = this.maxAccelerationG;
    return [0, maximum / 2, maximum].map(value => this.round(value, 2));
  }

  toX(distanceM) {
    return this.chartLeft + distanceM / 402.336 * this.chartPlotWidth;
  }

  toY(value, maximum) {
    return this.chartTop + (maximum - value) / maximum * this.chartPlotHeight;
  }

  reset() {
    this.form.reset({
      vehicleWeightKg: 1250,
      horsepower: 300,
      powerLocation: 'wheel',
      drivetrainLossPct: 15,
      drivetrain: 'FWD',
      tractionCoefficient: 1.0,
      frontalAreaCdA: 0.68,
      rollingResistanceCoefficient: 0.015,
      shiftTimeMs: 250,
      shiftCount: 3
    });
  }

  onInfo(type) {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const messages = {
        weight: 'وزن واقعی خودرو همراه راننده، سوخت و تجهیزات. این ورودی بیشترین اثر را روی زمان‌ها دارد.',
        power: 'توان اندازه‌گیری‌شده. اگر توان سر چرخ دارید WHP و اگر توان موتور دارید Flywheel HP را انتخاب کنید.',
        location: 'WHP توان ثبت‌شده روی داینو چرخ است؛ Flywheel HP توان تخمینی در میل‌لنگ پیش از افت انتقال نیرو است.',
        loss: 'درصد افت تقریبی گیربکس، دیفرانسیل و انتقال نیرو. فقط وقتی Flywheel HP انتخاب شده اثر دارد.',
        drivetrain: 'نوع انتقال نیرو در ظرفیت لانچ اثر دارد؛ AWD معمولاً چسبندگی اولیه بیشتری دارد.',
        traction: 'ضریب چسبندگی تایر و سطح مسیر. لاستیک خیابانی خشک معمولاً نزدیک 1 و سطح لغزنده کمتر است.',
        cda: 'ضریب Cd ضرب‌در سطح مقطع جلو برحسب متر مربع. عدد کمتر مقاومت هوای کمتری در سرعت بالا ایجاد می‌کند.',
        rolling: 'مقاومت غلتشی لاستیک. تایر کم‌باد یا چسبنده مقدار بیشتری دارد.',
        shiftTime: 'مدت قطع نیرو در هر تعویض دنده، برحسب میلی‌ثانیه.',
        shifts: 'تعداد تعویض‌های مورد انتظار تا پایان ۴۰۲ متر.'
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

  simulateRun(value, wheelHorsepower) {
    const dt = 0.025;
    const weightKg = Number(value.vehicleWeightKg);
    const effectiveMassKg = weightKg * 1.06;
    const wheelPowerW = wheelHorsepower * 745.7;
    const tractionLimitN = Number(value.tractionCoefficient) * weightKg * 9.80665 * this.drivetrainTractionShare(value.drivetrain);
    const cda = Number(value.frontalAreaCdA);
    const rollingResistance = Number(value.rollingResistanceCoefficient) * weightKg * 9.80665;
    const shiftDuration = Number(value.shiftTimeMs) / 1000;
    const requestedShifts = Number(value.shiftCount);
    const shiftSpeedsMps = Array.from({
      length: requestedShifts
    }, (_, index) => (45 + index * 42) / 3.6);
    const samples = [];
    let time = 0;
    let distance = 0;
    let speedMps = 0;
    let shiftRemaining = 0;
    let nextShiftIndex = 0;
    let lastSampleDistance = -5;

    while (distance < 402.336 && time < 90) {
      if (nextShiftIndex < shiftSpeedsMps.length && speedMps >= shiftSpeedsMps[nextShiftIndex]) {
        shiftRemaining = shiftDuration;
        nextShiftIndex++;
      }

      const speedKmh = speedMps * 3.6;
      const aeroDragN = 0.5 * 1.225 * cda * Math.pow(speedMps, 2);
      const powerAvailability = 0.66 + 0.34 * Math.min(1, speedKmh / 55);
      const driveForceN = shiftRemaining > 0 ? 0 : Math.min(tractionLimitN, wheelPowerW * powerAvailability / Math.max(speedMps, 3));
      const netForceN = Math.max(0, driveForceN - aeroDragN - rollingResistance);
      const accelerationMps2 = netForceN / effectiveMassKg;
      speedMps += accelerationMps2 * dt;
      distance += speedMps * dt;
      time += dt;
      shiftRemaining = Math.max(0, shiftRemaining - dt);

      if (distance - lastSampleDistance >= 2 || distance >= 402.336) {
        samples.push({
          distanceM: Math.min(distance, 402.336),
          speedKmh: this.round(speedMps * 3.6, 1),
          accelerationG: this.round(accelerationMps2 / 9.80665, 3),
          timeSeconds: this.round(time, 3)
        });
        lastSampleDistance = distance;
      }
    }

    return {
      samples
    };
  }

  sampleAtDistance(distanceM) {
    return this.raceSamples.find(sample => sample.distanceM >= distanceM) ?? this.raceSamples[this.raceSamples.length - 1];
  }

  timeAtSpeed(speedKmh) {
    const sample = this.raceSamples.find(item => item.speedKmh >= speedKmh);
    return sample ? sample.timeSeconds : null;
  }

  buildPath(accessor, maximum) {
    return this.raceSamples.map((sample, index) => `${index === 0 ? 'M' : 'L'} ${this.toX(sample.distanceM)} ${this.toY(accessor(sample), maximum)}`).join(' ');
  }

  drivetrainTractionShare(drivetrain) {
    const shares = {
      FWD: 0.58,
      RWD: 0.68,
      AWD: 1.0
    };
    return shares[drivetrain] ?? shares.FWD;
  }

  get chartPlotWidth() {
    return this.chartWidth - this.chartLeft - this.chartRight;
  }

  get chartPlotHeight() {
    return this.chartHeight - this.chartTop - this.chartBottom;
  }

  get maxSpeedKmh() {
    return Math.max(50, Math.ceil(Math.max(...this.raceSamples.map(sample => sample.speedKmh), 0) / 20) * 20);
  }

  get maxAccelerationG() {
    return Math.max(0.1, Math.ceil(Math.max(...this.raceSamples.map(sample => sample.accelerationG), 0) * 10) / 10);
  }

  round(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round((value + Number.EPSILON) * factor) / factor;
  }

};

DragPerformanceComponent.ctorParameters = () => [{
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

DragPerformanceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-drag-performance',
  template: _drag_performance_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_drag_performance_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DragPerformanceComponent);


/***/ }),

/***/ 79186:
/*!***********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/drag-performance/drag-performance.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragPerformanceModule": () => (/* binding */ DragPerformanceModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var _drag_performance_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-performance-routing.module */ 23930);
/* harmony import */ var _drag_performance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag-performance.component */ 4577);









let DragPerformanceModule = class DragPerformanceModule {
};
DragPerformanceModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_drag_performance_component__WEBPACK_IMPORTED_MODULE_3__.DragPerformanceComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _drag_performance_routing_module__WEBPACK_IMPORTED_MODULE_2__.DragPerformanceRoutingModule, src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule
        ],
    })
], DragPerformanceModule);



/***/ }),

/***/ 20531:
/*!***************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/drag-performance/drag-performance.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = ".profile-select {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 17px;\n  padding: 13px 17px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 15px;\n  background: var(--ion-item-background, #fff);\n  color: var(--ion-text-color, #1c2430);\n}\n\n.profile-select > ion-icon {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 1.45rem;\n}\n\n.profile-select > div {\n  display: grid;\n  gap: 2px;\n  min-width: 140px;\n}\n\n.profile-select strong {\n  font-size: 0.81rem;\n}\n\n.profile-select small {\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.71rem;\n}\n\n.profile-select select {\n  flex: 1;\n  min-width: 180px;\n  max-width: 340px;\n  padding: 9px 11px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 9px;\n  background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #1c2430);\n  font: inherit;\n  font-size: 0.79rem;\n}\n\n.profile-select a {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.profile-select .profile-notice {\n  flex-basis: 100%;\n  padding-top: 5px;\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.7rem;\n  line-height: 1.7;\n}\n\n@media (max-width: 560px) {\n  .profile-select select {\n    flex-basis: 100%;\n    max-width: none;\n  }\n\n  .profile-select a {\n    margin-right: auto;\n  }\n}\n\n:host {\n  --drag-surface: #fff;\n  --drag-text: #20252d;\n  --drag-muted: #69727e;\n  --drag-soft: #f5f6f8;\n  --drag-line: rgba(31, 37, 46, .11);\n  --drag-chart: #f8f9fa;\n}\n\n:host-context(.dark-theme) {\n  --drag-surface: #1b1e23;\n  --drag-text: #f3f5f7;\n  --drag-muted: #aab2bd;\n  --drag-soft: #252a30;\n  --drag-line: rgba(255, 255, 255, .12);\n  --drag-chart: #22262b;\n}\n\n.drag-page {\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 24px 18px 64px;\n  color: var(--drag-text);\n}\n\n.drag-hero {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n  min-height: 246px;\n  overflow: hidden;\n  padding: 34px clamp(22px, 4vw, 50px);\n  border-radius: 25px;\n  background: radial-gradient(circle at 6% 6%, rgba(215, 42, 50, 0.23), transparent 40%), linear-gradient(130deg, #262a30, #121519 74%);\n  box-shadow: 0 18px 38px rgba(13, 17, 23, 0.18);\n  color: #fff;\n}\n\n.drag-hero::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  opacity: 0.13;\n  background: repeating-linear-gradient(110deg, transparent 0 66px, #fff 67px, transparent 68px);\n  pointer-events: none;\n}\n\n.drag-hero__content, .drag-hero__mark {\n  position: relative;\n  z-index: 1;\n}\n\n.drag-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #ff8e92;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n}\n\n.drag-hero h1 {\n  max-width: 640px;\n  margin: 13px 0 8px;\n  font-size: clamp(26px, 3vw, 40px);\n  font-weight: 850;\n  line-height: 1.45;\n}\n\n.drag-hero p {\n  max-width: 620px;\n  margin: 0;\n  color: #c5cbd3;\n  font-size: 14px;\n  line-height: 1.95;\n}\n\n.hero-points {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 22px;\n}\n\n.hero-points span {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 11px;\n  border: 1px solid rgba(255, 255, 255, 0.13);\n  border-radius: 100px;\n  background: rgba(255, 255, 255, 0.06);\n  color: #e8ebef;\n  font-size: 11px;\n}\n\n.hero-points ion-icon {\n  color: #f06c73;\n}\n\n.drag-hero__mark {\n  display: flex;\n  flex: 0 0 210px;\n  flex-direction: column;\n  align-items: center;\n  padding: 14px 18px;\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.055);\n  text-align: center;\n}\n\n.drag-hero__mark strong {\n  color: #ff6d73;\n  font-size: 76px;\n  font-weight: 900;\n  line-height: 1.15;\n}\n\n.drag-hero__mark span {\n  color: #d1d5dc;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.22em;\n}\n\n.drag-hero__mark i {\n  width: 100%;\n  height: 4px;\n  margin-top: 19px;\n  border-radius: 4px;\n  background: repeating-linear-gradient(90deg, #fff 0 14px, #202329 14px 28px);\n  transform: skew(-18deg);\n}\n\n.profile-select {\n  margin: 18px 0;\n  border-color: var(--drag-line);\n  border-radius: 17px;\n  background: var(--drag-surface);\n  box-shadow: 0 7px 20px rgba(12, 16, 20, 0.045);\n}\n\n.profile-select select {\n  border-color: var(--drag-line);\n  border-radius: 9px;\n  background: var(--drag-soft);\n  color: var(--drag-text);\n}\n\n.drag-workspace {\n  display: grid;\n  grid-template-columns: minmax(345px, 390px) minmax(0, 1fr);\n  align-items: start;\n  gap: 18px;\n}\n\n.drag-panel {\n  min-width: 0;\n  padding: 24px;\n  border: 1px solid var(--drag-line);\n  border-radius: 19px;\n  background: var(--drag-surface);\n  box-shadow: 0 8px 24px rgba(12, 16, 20, 0.045);\n}\n\n.panel-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 15px;\n  margin-bottom: 19px;\n}\n\n.panel-kicker {\n  color: var(--ion-color-primary);\n  font-size: 11px;\n  font-weight: 850;\n  letter-spacing: 0.12em;\n}\n\n.panel-heading h2, .result-topline h2 {\n  margin: 4px 0 2px;\n  color: var(--drag-text);\n  font-size: 20px;\n  font-weight: 800;\n}\n\n.panel-heading p {\n  margin: 0;\n  color: var(--drag-muted);\n  font-size: 11px;\n  line-height: 1.8;\n}\n\n.panel-heading > ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 22px;\n}\n\n.input-section-title {\n  margin: 23px 0 12px;\n  padding-right: 10px;\n  border-right: 3px solid var(--ion-color-primary);\n  color: var(--drag-text);\n  font-size: 13px;\n  font-weight: 800;\n}\n\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.drag-field {\n  min-width: 0;\n  margin-bottom: 12px;\n}\n\n.field-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 4px;\n  min-height: 27px;\n  margin-bottom: 5px;\n  color: var(--drag-muted);\n  font-size: 11px;\n  line-height: 1.45;\n}\n\n.field-heading button, .choice-field legend button {\n  display: inline-flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: center;\n  padding: 2px;\n  border: 0;\n  background: transparent;\n  color: var(--drag-muted);\n  cursor: pointer;\n  font-size: 17px;\n}\n\n.field-heading button:hover, .choice-field legend button:hover {\n  color: var(--ion-color-primary);\n}\n\n.input-shell {\n  display: flex;\n  align-items: center;\n  min-height: 43px;\n  padding: 0 10px;\n  border: 1px solid var(--drag-line);\n  border-radius: 10px;\n  background: var(--drag-soft);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n\n.input-shell:focus-within {\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 0 0 3px rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.input-shell ion-input {\n  --background: transparent;\n  --color: var(--drag-text);\n  --padding-start: 0;\n  --padding-end: 0;\n  min-width: 0;\n  flex: 1;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.input-shell small {\n  color: var(--drag-muted);\n  font-size: 10px;\n  white-space: nowrap;\n}\n\n.choice-field {\n  min-width: 0;\n  margin: 3px 0 14px;\n  padding: 0;\n  border: 0;\n}\n\n.choice-field legend {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 7px;\n  color: var(--drag-muted);\n  font-size: 11px;\n}\n\n.choice-row {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 7px;\n}\n\n.choice-row--three {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.choice {\n  position: relative;\n  display: grid;\n  min-height: 49px;\n  place-items: center;\n  padding: 7px;\n  border: 1px solid var(--drag-line);\n  border-radius: 10px;\n  background: var(--drag-soft);\n  color: var(--drag-text);\n  cursor: pointer;\n  text-align: center;\n  transition: border-color 0.2s ease, background 0.2s ease;\n}\n\n.choice.is-active {\n  border-color: var(--ion-color-primary);\n  background: rgba(var(--ion-color-primary-rgb), 0.09);\n  color: var(--ion-color-primary);\n}\n\n.choice:focus-within {\n  outline: 2px solid var(--ion-color-primary);\n  outline-offset: 2px;\n}\n\n.choice input {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.choice span {\n  pointer-events: none;\n  font-size: 11px;\n  font-weight: 750;\n}\n\n.choice small {\n  display: block;\n  margin-top: 2px;\n  font-size: 10px;\n  font-weight: 500;\n  direction: ltr;\n}\n\n.reset-action {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 10px;\n  padding: 7px 0;\n  border: 0;\n  background: none;\n  color: var(--drag-muted);\n  cursor: pointer;\n  font: inherit;\n  font-size: 12px;\n}\n\n.reset-action:hover {\n  color: var(--ion-color-primary);\n}\n\n.drag-results {\n  min-width: 0;\n}\n\n.empty-result {\n  display: flex;\n  min-height: 280px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.empty-result ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 37px;\n}\n\n.empty-result h2 {\n  margin: 14px 0 5px;\n  color: var(--drag-text);\n  font-size: 18px;\n}\n\n.empty-result p {\n  margin: 0;\n  color: var(--drag-muted);\n  font-size: 12px;\n  line-height: 1.8;\n}\n\n.result-topline {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 14px;\n  margin: 2px 0 14px;\n}\n\n.live-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--drag-muted);\n  font-size: 11px;\n  white-space: nowrap;\n}\n\n.live-chip span {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #3aa670;\n  box-shadow: 0 0 0 4px rgba(58, 166, 112, 0.12);\n}\n\n.score-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 18px;\n}\n\n.score-card {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  min-height: 128px;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 16px;\n  border: 1px solid var(--drag-line);\n  border-radius: 15px;\n  background: var(--drag-surface);\n}\n\n.score-card > span {\n  position: relative;\n  z-index: 1;\n  color: var(--drag-muted);\n  font-size: 11px;\n}\n\n.score-card > div {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: baseline;\n  gap: 5px;\n}\n\n.score-card strong {\n  color: var(--drag-text);\n  font-size: clamp(24px, 2.4vw, 34px);\n  font-weight: 850;\n  direction: ltr;\n}\n\n.score-card small {\n  color: var(--drag-muted);\n  font-size: 10px;\n  white-space: nowrap;\n}\n\n.score-card > ion-icon {\n  position: absolute;\n  left: 12px;\n  top: 14px;\n  color: var(--ion-color-primary);\n  opacity: 0.3;\n  font-size: 23px;\n}\n\n.score-card--primary {\n  border-color: rgba(228, 52, 58, 0.3);\n  background: linear-gradient(135deg, #b41d28, #74151d);\n  box-shadow: 0 12px 22px rgba(146, 22, 33, 0.17);\n}\n\n.score-card--primary > span, .score-card--primary strong, .score-card--primary small {\n  color: #fff;\n}\n\n.score-card--primary > ion-icon {\n  color: #fff;\n  opacity: 0.45;\n}\n\n.chart-panel {\n  margin-bottom: 18px;\n}\n\n.chart-panel .panel-heading {\n  margin-bottom: 4px;\n}\n\n.chart-legend {\n  display: flex;\n  gap: 18px;\n  margin: 0 0 12px;\n  color: var(--drag-muted);\n  font-size: 11px;\n}\n\n.chart-legend span {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.chart-legend i {\n  width: 16px;\n  height: 3px;\n  border-radius: 3px;\n}\n\n.legend-speed {\n  background: #d6303d;\n}\n\n.legend-acceleration {\n  background: #d99b35;\n}\n\n.chart-scroll {\n  width: 100%;\n  overflow-x: auto;\n  border-radius: 12px;\n}\n\n.drag-chart {\n  display: block;\n  width: 100%;\n  min-width: 560px;\n  direction: ltr;\n}\n\n.frame {\n  fill: var(--drag-chart);\n  stroke: var(--drag-line);\n}\n\n.grid {\n  stroke: var(--drag-muted);\n  stroke-width: 0.5;\n  opacity: 0.35;\n}\n\n.speed-path {\n  fill: none;\n  stroke: #d6303d;\n  stroke-width: 3.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.acceleration-path {\n  fill: none;\n  stroke: #d99b35;\n  stroke-width: 2.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.tick, .axis-title {\n  fill: var(--drag-muted);\n  font-size: 11px;\n  text-anchor: middle;\n}\n\n.y-left {\n  text-anchor: end;\n}\n\n.y-right {\n  text-anchor: start;\n}\n\n.axis-title {\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.analysis-panel .panel-heading {\n  margin-bottom: 14px;\n}\n\n.analysis-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 9px;\n}\n\n.analysis-grid > div {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 5px;\n  padding: 13px;\n  border: 1px solid var(--drag-line);\n  border-radius: 11px;\n  background: var(--drag-soft);\n}\n\n.analysis-grid span {\n  color: var(--drag-muted);\n  font-size: 11px;\n}\n\n.analysis-grid strong {\n  color: var(--drag-text);\n  font-size: 18px;\n  font-weight: 800;\n}\n\n.analysis-grid small, .analysis-grid em {\n  color: var(--drag-muted);\n  font-size: 10px;\n  font-style: normal;\n  font-weight: 500;\n}\n\n.analysis-grid > div:last-child {\n  grid-column: span 2;\n}\n\n.disclaimer {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin: 17px 0 0;\n  padding-top: 15px;\n  border-top: 1px solid var(--drag-line);\n  color: var(--drag-muted);\n  font-size: 11px;\n  line-height: 1.9;\n}\n\n.disclaimer ion-icon {\n  flex: 0 0 auto;\n  margin-top: 3px;\n  color: var(--ion-color-primary);\n  font-size: 17px;\n}\n\n@media (max-width: 1080px) {\n  .drag-workspace {\n    grid-template-columns: 1fr;\n  }\n\n  .field-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 700px) {\n  .drag-page {\n    padding: 14px 12px 48px;\n  }\n\n  .drag-hero {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 20px;\n    padding: 26px 21px;\n  }\n\n  .drag-hero__mark {\n    flex-basis: auto;\n    align-items: flex-start;\n    padding: 10px 15px;\n  }\n\n  .drag-hero__mark strong {\n    font-size: 48px;\n  }\n\n  .drag-hero__mark i {\n    margin-top: 12px;\n  }\n\n  .drag-panel {\n    padding: 20px 15px;\n  }\n\n  .score-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 470px) {\n  .drag-hero h1 {\n    font-size: 26px;\n  }\n\n  .field-grid {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n\n  .score-card {\n    min-height: 112px;\n    padding: 13px;\n  }\n\n  .score-card strong {\n    font-size: 26px;\n  }\n\n  .score-card small {\n    font-size: 9px;\n  }\n\n  .result-topline {\n    align-items: flex-start;\n  }\n\n  .live-chip {\n    margin-top: 5px;\n  }\n\n  .analysis-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .analysis-grid > div:last-child {\n    grid-column: auto;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .drag-hero *, .score-card, .choice {\n    transition: none;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfcHJvZmlsZS1zZWxlY3Quc2NzcyIsImRyYWctcGVyZm9ybWFuY2UuY29tcG9uZW50LnNjc3MiLCIuLlxcX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBa0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFBVyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLHVEQUFBO0VBQXlELG1CQUFBO0VBQXFCLDRDQUFBO0VBQThDLHFDQUFBO0FDV3BQOztBRFZBO0VBQTZCLHVDQUFBO0VBQXlDLGtCQUFBO0FDZXRFOztBRGRBO0VBQXdCLGFBQUE7RUFBZSxRQUFBO0VBQVUsZ0JBQUE7QUNvQmpEOztBRG5CQTtFQUF5QixrQkFBQTtBQ3VCekI7O0FEdEJBO0VBQXdCLHVDQUFBO0VBQXlDLGtCQUFBO0FDMkJqRTs7QUQxQkE7RUFBeUIsT0FBQTtFQUFTLGdCQUFBO0VBQWtCLGdCQUFBO0VBQWtCLGlCQUFBO0VBQW1CLHVEQUFBO0VBQXlELGtCQUFBO0VBQW9CLDZDQUFBO0VBQStDLHFDQUFBO0VBQXVDLGFBQUE7RUFBZSxrQkFBQTtBQ3VDM1E7O0FEdENBO0VBQW9CLHVDQUFBO0VBQXlDLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLHFCQUFBO0FDNkNsRzs7QUQ1Q0E7RUFBa0MsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFBa0IsdUNBQUE7RUFBeUMsaUJBQUE7RUFBa0IsZ0JBQUE7QUNvRGpJOztBRG5EQTtFQUE0QjtJQUF5QixnQkFBQTtJQUFrQixlQUFBO0VDeURyRTs7RUR6RHVGO0lBQW9CLGtCQUFBO0VDNkQzRztBQUNGOztBQWxFQTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtBQW9FRjs7QUFqRUE7RUFDRSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7QUFvRUY7O0FB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O0VBQ0Esd0NBQUE7QUQ0eUJOOztBQzF5Qkk7RUFBYywrQkFBQTtFQUFpQywwQkFBQTtBRDh5Qm5EOztBQzd5Qkk7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUQreUJOOztBQzd5Qkk7RUFBVyxnQ0FBQTtBRGd6QmY7O0FDL3lCSTtFQUFvQyx3QkFBQTtBRGt6QnhDOztBQ2p6Qkk7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtBRG16Qk47O0FDanpCSTtFQUFrRCxtQ0FBQTtBRG96QnREIiwiZmlsZSI6ImRyYWctcGVyZm9ybWFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1zZWxlY3QgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IGZsZXgtd3JhcDogd3JhcDsgbWFyZ2luLXRvcDogMTdweDsgcGFkZGluZzogMTNweCAxN3B4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNkMGQ1ZGQpOyBib3JkZXItcmFkaXVzOiAxNXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCAjZmZmKTsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMWMyNDMwKTsgfVxuLnByb2ZpbGUtc2VsZWN0ID4gaW9uLWljb24geyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2QxMjMzMik7IGZvbnQtc2l6ZTogMS40NXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0ID4gZGl2IHsgZGlzcGxheTogZ3JpZDsgZ2FwOiAycHg7IG1pbi13aWR0aDogMTQwcHg7IH1cbi5wcm9maWxlLXNlbGVjdCBzdHJvbmcgeyBmb250LXNpemU6IC44MXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0IHNtYWxsIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM2NjcwODUpOyBmb250LXNpemU6IC43MXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0IHNlbGVjdCB7IGZsZXg6IDE7IG1pbi13aWR0aDogMTgwcHg7IG1heC13aWR0aDogMzQwcHg7IHBhZGRpbmc6IDlweCAxMXB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNkMGQ1ZGQpOyBib3JkZXItcmFkaXVzOiA5cHg7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMWMyNDMwKTsgZm9udDogaW5oZXJpdDsgZm9udC1zaXplOiAuNzlyZW07IH1cbi5wcm9maWxlLXNlbGVjdCBhIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNkMTIzMzIpOyBmb250LXNpemU6IC43NnJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4ucHJvZmlsZS1zZWxlY3QgLnByb2ZpbGUtbm90aWNlIHsgZmxleC1iYXNpczogMTAwJTsgcGFkZGluZy10b3A6IDVweDsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM2NjcwODUpOyBmb250LXNpemU6IC43cmVtOyBsaW5lLWhlaWdodDogMS43OyB9XG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHsgLnByb2ZpbGUtc2VsZWN0IHNlbGVjdCB7IGZsZXgtYmFzaXM6IDEwMCU7IG1heC13aWR0aDogbm9uZTsgfS5wcm9maWxlLXNlbGVjdCBhIHsgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9IH1cbiIsIkBpbXBvcnQgJy4uL3RoZW1lJztcblxuQGltcG9ydCAnLi4vcHJvZmlsZS1zZWxlY3QnO1xuXG46aG9zdCB7XG4gIC0tZHJhZy1zdXJmYWNlOiAjZmZmO1xuICAtLWRyYWctdGV4dDogIzIwMjUyZDtcbiAgLS1kcmFnLW11dGVkOiAjNjk3MjdlO1xuICAtLWRyYWctc29mdDogI2Y1ZjZmODtcbiAgLS1kcmFnLWxpbmU6IHJnYmEoMzEsIDM3LCA0NiwgLjExKTtcbiAgLS1kcmFnLWNoYXJ0OiAjZjhmOWZhO1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gIC0tZHJhZy1zdXJmYWNlOiAjMWIxZTIzO1xuICAtLWRyYWctdGV4dDogI2YzZjVmNztcbiAgLS1kcmFnLW11dGVkOiAjYWFiMmJkO1xuICAtLWRyYWctc29mdDogIzI1MmEzMDtcbiAgLS1kcmFnLWxpbmU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEyKTtcbiAgLS1kcmFnLWNoYXJ0OiAjMjIyNjJiO1xufVxuXG4uZHJhZy1wYWdlIHtcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyNHB4IDE4cHggNjRweDtcbiAgY29sb3I6IHZhcigtLWRyYWctdGV4dCk7XG59XG5cbi5kcmFnLWhlcm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAzMHB4O1xuICBtaW4taGVpZ2h0OiAyNDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMzRweCBjbGFtcCgyMnB4LCA0dncsIDUwcHgpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDYlIDYlLCByZ2JhKDIxNSwgNDIsIDUwLCAuMjMpLCB0cmFuc3BhcmVudCA0MCUpLCBsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCAjMjYyYTMwLCAjMTIxNTE5IDc0JSk7XG4gIGJveC1zaGFkb3c6IDAgMThweCAzOHB4IHJnYmEoMTMsIDE3LCAyMywgLjE4KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kcmFnLWhlcm86OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIG9wYWNpdHk6IC4xMztcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgxMTBkZWcsIHRyYW5zcGFyZW50IDAgNjZweCwgI2ZmZiA2N3B4LCB0cmFuc3BhcmVudCA2OHB4KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kcmFnLWhlcm9fX2NvbnRlbnQsIC5kcmFnLWhlcm9fX21hcmsgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDE7IH1cblxuLmRyYWctZXllYnJvdyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgY29sb3I6ICNmZjhlOTI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wOGVtO1xufVxuXG4uZHJhZy1oZXJvIGgxIHtcbiAgbWF4LXdpZHRoOiA2NDBweDtcbiAgbWFyZ2luOiAxM3B4IDAgOHB4O1xuICBmb250LXNpemU6IGNsYW1wKDI2cHgsIDN2dywgNDBweCk7XG4gIGZvbnQtd2VpZ2h0OiA4NTA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xufVxuXG4uZHJhZy1oZXJvIHAge1xuICBtYXgtd2lkdGg6IDYyMHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjYzVjYmQzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjk1O1xufVxuXG4uaGVyby1wb2ludHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuXG4uaGVyby1wb2ludHMgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogN3B4IDExcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEzKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA2KTtcbiAgY29sb3I6ICNlOGViZWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmhlcm8tcG9pbnRzIGlvbi1pY29uIHsgY29sb3I6ICNmMDZjNzM7IH1cblxuLmRyYWctaGVyb19fbWFyayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDAgMCAyMTBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNCk7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1NSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRyYWctaGVyb19fbWFyayBzdHJvbmcge1xuICBjb2xvcjogI2ZmNmQ3MztcbiAgZm9udC1zaXplOiA3NnB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbn1cblxuLmRyYWctaGVyb19fbWFyayBzcGFuIHtcbiAgY29sb3I6ICNkMWQ1ZGM7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4yMmVtO1xufVxuXG4uZHJhZy1oZXJvX19tYXJrIGkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmZiAwIDE0cHgsICMyMDIzMjkgMTRweCAyOHB4KTtcbiAgdHJhbnNmb3JtOiBza2V3KC0xOGRlZyk7XG59XG5cbi5wcm9maWxlLXNlbGVjdCB7XG4gIG1hcmdpbjogMThweCAwO1xuICBib3JkZXItY29sb3I6IHZhcigtLWRyYWctbGluZSk7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRyYWctc3VyZmFjZSk7XG4gIGJveC1zaGFkb3c6IDAgN3B4IDIwcHggcmdiYSgxMiwgMTYsIDIwLCAuMDQ1KTtcbn1cblxuLnByb2ZpbGUtc2VsZWN0IHNlbGVjdCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZHJhZy1saW5lKTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kcmFnLXNvZnQpO1xuICBjb2xvcjogdmFyKC0tZHJhZy10ZXh0KTtcbn1cblxuLmRyYWctd29ya3NwYWNlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzQ1cHgsIDM5MHB4KSBtaW5tYXgoMCwgMWZyKTtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBnYXA6IDE4cHg7XG59XG5cbi5kcmFnLXBhbmVsIHtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kcmFnLWxpbmUpO1xuICBib3JkZXItcmFkaXVzOiAxOXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kcmFnLXN1cmZhY2UpO1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTIsIDE2LCAyMCwgLjA0NSk7XG59XG5cbi5wYW5lbC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxOXB4O1xufVxuXG4ucGFuZWwta2lja2VyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogODUwO1xuICBsZXR0ZXItc3BhY2luZzogLjEyZW07XG59XG5cbi5wYW5lbC1oZWFkaW5nIGgyLCAucmVzdWx0LXRvcGxpbmUgaDIge1xuICBtYXJnaW46IDRweCAwIDJweDtcbiAgY29sb3I6IHZhcigtLWRyYWctdGV4dCk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnBhbmVsLWhlYWRpbmcgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWRyYWctbXV0ZWQpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG59XG5cbi5wYW5lbC1oZWFkaW5nID4gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5pbnB1dC1zZWN0aW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAyM3B4IDAgMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tZHJhZy10ZXh0KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uZmllbGQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uZHJhZy1maWVsZCB7IG1pbi13aWR0aDogMDsgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxuXG4uZmllbGQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiA0cHg7XG4gIG1pbi1oZWlnaHQ6IDI3cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHZhcigtLWRyYWctbXV0ZWQpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xufVxuXG4uZmllbGQtaGVhZGluZyBidXR0b24sIC5jaG9pY2UtZmllbGQgbGVnZW5kIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4OiAwIDAgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWRyYWctbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmZpZWxkLWhlYWRpbmcgYnV0dG9uOmhvdmVyLCAuY2hvaWNlLWZpZWxkIGxlZ2VuZCBidXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uaW5wdXQtc2hlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0M3B4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRyYWctbGluZSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRyYWctc29mdCk7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnMgZWFzZSwgYm94LXNoYWRvdyAuMnMgZWFzZTtcbn1cblxuLmlucHV0LXNoZWxsOmZvY3VzLXdpdGhpbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAuMSk7XG59XG5cbi5pbnB1dC1zaGVsbCBpb24taW5wdXQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB2YXIoLS1kcmFnLXRleHQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIG1pbi13aWR0aDogMDtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaW5wdXQtc2hlbGwgc21hbGwge1xuICBjb2xvcjogdmFyKC0tZHJhZy1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNob2ljZS1maWVsZCB7XG4gIG1pbi13aWR0aDogMDtcbiAgbWFyZ2luOiAzcHggMCAxNHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbi5jaG9pY2UtZmllbGQgbGVnZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgY29sb3I6IHZhcigtLWRyYWctbXV0ZWQpO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5jaG9pY2Utcm93IHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpOyBnYXA6IDdweDsgfVxuLmNob2ljZS1yb3ctLXRocmVlIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpOyB9XG5cbi5jaG9pY2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1pbi1oZWlnaHQ6IDQ5cHg7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZHJhZy1saW5lKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZHJhZy1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLWRyYWctdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2UsIGJhY2tncm91bmQgLjJzIGVhc2U7XG59XG5cbi5jaG9pY2UuaXMtYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgLjA5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmNob2ljZTpmb2N1cy13aXRoaW4geyBvdXRsaW5lOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBvdXRsaW5lLW9mZnNldDogMnB4OyB9XG4uY2hvaWNlIGlucHV0IHsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgb3BhY2l0eTogMDsgY3Vyc29yOiBwb2ludGVyOyB9XG4uY2hvaWNlIHNwYW4geyBwb2ludGVyLWV2ZW50czogbm9uZTsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNzUwOyB9XG4uY2hvaWNlIHNtYWxsIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDJweDsgZm9udC1zaXplOiAxMHB4OyBmb250LXdlaWdodDogNTAwOyBkaXJlY3Rpb246IGx0cjsgfVxuXG4ucmVzZXQtYWN0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA3cHggMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tZHJhZy1tdXRlZCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucmVzZXQtYWN0aW9uOmhvdmVyIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgfVxuXG4uZHJhZy1yZXN1bHRzIHsgbWluLXdpZHRoOiAwOyB9XG5cbi5lbXB0eS1yZXN1bHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAyODBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lbXB0eS1yZXN1bHQgaW9uLWljb24geyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBmb250LXNpemU6IDM3cHg7IH1cbi5lbXB0eS1yZXN1bHQgaDIgeyBtYXJnaW46IDE0cHggMCA1cHg7IGNvbG9yOiB2YXIoLS1kcmFnLXRleHQpOyBmb250LXNpemU6IDE4cHg7IH1cbi5lbXB0eS1yZXN1bHQgcCB7IG1hcmdpbjogMDsgY29sb3I6IHZhcigtLWRyYWctbXV0ZWQpOyBmb250LXNpemU6IDEycHg7IGxpbmUtaGVpZ2h0OiAxLjg7IH1cblxuLnJlc3VsdC10b3BsaW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTRweDtcbiAgbWFyZ2luOiAycHggMCAxNHB4O1xufVxuXG4ubGl2ZS1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBjb2xvcjogdmFyKC0tZHJhZy1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmxpdmUtY2hpcCBzcGFuIHtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzNhYTY3MDtcbiAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoNTgsIDE2NiwgMTEyLCAuMTIpO1xufVxuXG4uc2NvcmUtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uc2NvcmUtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLXdpZHRoOiAwO1xuICBtaW4taGVpZ2h0OiAxMjhweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kcmFnLWxpbmUpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kcmFnLXN1cmZhY2UpO1xufVxuXG4uc2NvcmUtY2FyZCA+IHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiB2YXIoLS1kcmFnLW11dGVkKTtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uc2NvcmUtY2FyZCA+IGRpdiB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGJhc2VsaW5lOyBnYXA6IDVweDsgfVxuLnNjb3JlLWNhcmQgc3Ryb25nIHsgY29sb3I6IHZhcigtLWRyYWctdGV4dCk7IGZvbnQtc2l6ZTogY2xhbXAoMjRweCwgMi40dncsIDM0cHgpOyBmb250LXdlaWdodDogODUwOyBkaXJlY3Rpb246IGx0cjsgfVxuLnNjb3JlLWNhcmQgc21hbGwgeyBjb2xvcjogdmFyKC0tZHJhZy1tdXRlZCk7IGZvbnQtc2l6ZTogMTBweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuLnNjb3JlLWNhcmQgPiBpb24taWNvbiB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTJweDsgdG9wOiAxNHB4OyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBvcGFjaXR5OiAuMzsgZm9udC1zaXplOiAyM3B4OyB9XG5cbi5zY29yZS1jYXJkLS1wcmltYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIyOCwgNTIsIDU4LCAuMyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNiNDFkMjgsICM3NDE1MWQpO1xuICBib3gtc2hhZG93OiAwIDEycHggMjJweCByZ2JhKDE0NiwgMjIsIDMzLCAuMTcpO1xufVxuLnNjb3JlLWNhcmQtLXByaW1hcnkgPiBzcGFuLCAuc2NvcmUtY2FyZC0tcHJpbWFyeSBzdHJvbmcsIC5zY29yZS1jYXJkLS1wcmltYXJ5IHNtYWxsIHsgY29sb3I6ICNmZmY7IH1cbi5zY29yZS1jYXJkLS1wcmltYXJ5ID4gaW9uLWljb24geyBjb2xvcjogI2ZmZjsgb3BhY2l0eTogLjQ1OyB9XG5cbi5jaGFydC1wYW5lbCB7IG1hcmdpbi1ib3R0b206IDE4cHg7IH1cbi5jaGFydC1wYW5lbCAucGFuZWwtaGVhZGluZyB7IG1hcmdpbi1ib3R0b206IDRweDsgfVxuXG4uY2hhcnQtbGVnZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxOHB4O1xuICBtYXJnaW46IDAgMCAxMnB4O1xuICBjb2xvcjogdmFyKC0tZHJhZy1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmNoYXJ0LWxlZ2VuZCBzcGFuIHsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyB9XG4uY2hhcnQtbGVnZW5kIGkgeyB3aWR0aDogMTZweDsgaGVpZ2h0OiAzcHg7IGJvcmRlci1yYWRpdXM6IDNweDsgfVxuLmxlZ2VuZC1zcGVlZCB7IGJhY2tncm91bmQ6ICNkNjMwM2Q7IH1cbi5sZWdlbmQtYWNjZWxlcmF0aW9uIHsgYmFja2dyb3VuZDogI2Q5OWIzNTsgfVxuXG4uY2hhcnQtc2Nyb2xsIHsgd2lkdGg6IDEwMCU7IG92ZXJmbG93LXg6IGF1dG87IGJvcmRlci1yYWRpdXM6IDEycHg7IH1cbi5kcmFnLWNoYXJ0IHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBtaW4td2lkdGg6IDU2MHB4OyBkaXJlY3Rpb246IGx0cjsgfVxuLmZyYW1lIHsgZmlsbDogdmFyKC0tZHJhZy1jaGFydCk7IHN0cm9rZTogdmFyKC0tZHJhZy1saW5lKTsgfVxuLmdyaWQgeyBzdHJva2U6IHZhcigtLWRyYWctbXV0ZWQpOyBzdHJva2Utd2lkdGg6IC41OyBvcGFjaXR5OiAuMzU7IH1cbi5zcGVlZC1wYXRoIHsgZmlsbDogbm9uZTsgc3Ryb2tlOiAjZDYzMDNkOyBzdHJva2Utd2lkdGg6IDMuNTsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2UtbGluZWpvaW46IHJvdW5kOyB9XG4uYWNjZWxlcmF0aW9uLXBhdGggeyBmaWxsOiBub25lOyBzdHJva2U6ICNkOTliMzU7IHN0cm9rZS13aWR0aDogMi41OyBzdHJva2UtbGluZWNhcDogcm91bmQ7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7IH1cbi50aWNrLCAuYXhpcy10aXRsZSB7IGZpbGw6IHZhcigtLWRyYWctbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IHRleHQtYW5jaG9yOiBtaWRkbGU7IH1cbi55LWxlZnQgeyB0ZXh0LWFuY2hvcjogZW5kOyB9XG4ueS1yaWdodCB7IHRleHQtYW5jaG9yOiBzdGFydDsgfVxuLmF4aXMtdGl0bGUgeyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLmFuYWx5c2lzLXBhbmVsIC5wYW5lbC1oZWFkaW5nIHsgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxuLmFuYWx5c2lzLWdyaWQgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7IGdhcDogOXB4OyB9XG4uYW5hbHlzaXMtZ3JpZCA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRyYWctbGluZSk7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRyYWctc29mdCk7XG59XG4uYW5hbHlzaXMtZ3JpZCBzcGFuIHsgY29sb3I6IHZhcigtLWRyYWctbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IH1cbi5hbmFseXNpcy1ncmlkIHN0cm9uZyB7IGNvbG9yOiB2YXIoLS1kcmFnLXRleHQpOyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA4MDA7IH1cbi5hbmFseXNpcy1ncmlkIHNtYWxsLCAuYW5hbHlzaXMtZ3JpZCBlbSB7IGNvbG9yOiB2YXIoLS1kcmFnLW11dGVkKTsgZm9udC1zaXplOiAxMHB4OyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cbi5hbmFseXNpcy1ncmlkID4gZGl2Omxhc3QtY2hpbGQgeyBncmlkLWNvbHVtbjogc3BhbiAyOyB9XG5cbi5kaXNjbGFpbWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogOHB4O1xuICBtYXJnaW46IDE3cHggMCAwO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRyYWctbGluZSk7XG4gIGNvbG9yOiB2YXIoLS1kcmFnLW11dGVkKTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMS45O1xufVxuLmRpc2NsYWltZXIgaW9uLWljb24geyBmbGV4OiAwIDAgYXV0bzsgbWFyZ2luLXRvcDogM3B4OyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBmb250LXNpemU6IDE3cHg7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAuZHJhZy13b3Jrc3BhY2UgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAuZmllbGQtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTsgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmRyYWctcGFnZSB7IHBhZGRpbmc6IDE0cHggMTJweCA0OHB4OyB9XG4gIC5kcmFnLWhlcm8geyBhbGlnbi1pdGVtczogc3RyZXRjaDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAyMHB4OyBwYWRkaW5nOiAyNnB4IDIxcHg7IH1cbiAgLmRyYWctaGVyb19fbWFyayB7IGZsZXgtYmFzaXM6IGF1dG87IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBwYWRkaW5nOiAxMHB4IDE1cHg7IH1cbiAgLmRyYWctaGVyb19fbWFyayBzdHJvbmcgeyBmb250LXNpemU6IDQ4cHg7IH1cbiAgLmRyYWctaGVyb19fbWFyayBpIHsgbWFyZ2luLXRvcDogMTJweDsgfVxuICAuZHJhZy1wYW5lbCB7IHBhZGRpbmc6IDIwcHggMTVweDsgfVxuICAuc2NvcmUtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTsgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDcwcHgpIHtcbiAgLmRyYWctaGVybyBoMSB7IGZvbnQtc2l6ZTogMjZweDsgfVxuICAuZmllbGQtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBnYXA6IDA7IH1cbiAgLnNjb3JlLWNhcmQgeyBtaW4taGVpZ2h0OiAxMTJweDsgcGFkZGluZzogMTNweDsgfVxuICAuc2NvcmUtY2FyZCBzdHJvbmcgeyBmb250LXNpemU6IDI2cHg7IH1cbiAgLnNjb3JlLWNhcmQgc21hbGwgeyBmb250LXNpemU6IDlweDsgfVxuICAucmVzdWx0LXRvcGxpbmUgeyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxuICAubGl2ZS1jaGlwIHsgbWFyZ2luLXRvcDogNXB4OyB9XG4gIC5hbmFseXNpcy1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbiAgLmFuYWx5c2lzLWdyaWQgPiBkaXY6bGFzdC1jaGlsZCB7IGdyaWQtY29sdW1uOiBhdXRvOyB9XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5kcmFnLWhlcm8gKiwgLnNjb3JlLWNhcmQsIC5jaG9pY2UgeyB0cmFuc2l0aW9uOiBub25lOyB9XG59XG5cbkBpbmNsdWRlIHR1bmVyLWRhcmstdGhlbWU7XG4iLCIvLyBLZWVwIHRoZSBvcmlnaW5hbCBsaWdodCBjb2xvciBhdCBlYWNoIGNhbGwgc2l0ZS4gVG9rZW5zIGV4aXN0IG9ubHkgaW4gZGFyayBtb2RlLlxuQGZ1bmN0aW9uIHR1bmVyLWNvbG9yKCRyb2xlLCAkbGlnaHQpIHtcbiAgQHJldHVybiB2YXIoLS10dW5lci0jeyRyb2xlfSwgI3skbGlnaHR9KTtcbn1cblxuQG1peGluIHR1bmVyLWRhcmstdGhlbWUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gICAgLS10dW5lci1zdXJmYWNlOiAjMWMyMjMwO1xuICAgIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgICAtLXR1bmVyLXRleHQ6ICNlZGYxZjg7XG4gICAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgICAtLXR1bmVyLW92ZXJsYXk6IHJnYmEoMjgsIDM0LCA0OCwgMC45NSk7XG4gICAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAgIC0tdHVuZXItcHVycGxlLWJvcmRlcjogIzcyNTc5YjtcbiAgICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgICAtLXR1bmVyLWluZm8tYm9yZGVyOiAjNDY2YjlhO1xuICAgIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAgIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAgIC0tdHVuZXItd2FybmluZy1ib3JkZXI6ICM5Mzc0M2Q7XG4gICAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gICAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gICAgLS10dW5lci1zdWNjZXNzLWJvcmRlcjogIzQxN2Q2MDtcbiAgICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAgIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gICAgLS10dW5lci1kYW5nZXItYm9yZGVyOiAjOTg1MzY3O1xuICAgIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAgIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAgIC0tdHVuZXItdGVhbC1ib3JkZXI6ICM0MzdmN2M7XG5cbiAgICAvLyBOYXRpdmUgY29udHJvbHMgd2l0aG91dCBhbiBleHBsaWNpdCBsaWdodCBiYWNrZ3JvdW5kIG5lZWQgYSBkYXJrIHN1cmZhY2UgdG9vLlxuICAgIGlucHV0Om5vdChbdHlwZT0ncmFuZ2UnXSk6bm90KFt0eXBlPSdjaGVja2JveCddKTpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nZmlsZSddKSxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3Qge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1wYWdlKTsgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZDpub3QoW2NvbG9yXSksIGlvbi1saXN0LCBpb24taXRlbTpub3QoW2NvbG9yXSksIGlvbi1pdGVtLWRpdmlkZXI6bm90KFtjb2xvcl0pIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tbGlzdCB7IGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmRbY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1pdGVtW2NvbG9yPSdsaWdodGVzdCddLCBpb24tZmFiLWJ1dHRvbltjb2xvcj0nbGlnaHRlc3QnXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cbiAgICBpb24tdGV4dFtjb2xvcj0nZGFyayddLCBpb24tbGFiZWxbY29sb3I9J2RhcmsnXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 27451:
/*!***************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/drag-performance/drag-performance.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  \n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" color=\"lightest\" defaultHref=\"/TunerPlus\"></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" class=\"title-size no-padding\">شبیه‌ساز عملکرد درگ</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <main class=\"drag-page\" dir=\"rtl\" *ngIf=\"isShow\">\r\n    <section class=\"drag-hero\">\r\n      <div class=\"drag-hero__content\">\r\n        <span class=\"drag-eyebrow\"><ion-icon name=\"flag-outline\"></ion-icon> DRAG PERFORMANCE / 402 M</span>\r\n        <h1>عملکرد خودرویت را پیش از پیست بسنج</h1>\r\n        <p>توان، وزن و شرایط چسبندگی را تنظیم کن و تخمین زمان درگ، شتاب‌گیری و سرعت خط پایان را همان لحظه ببین.</p>\r\n        <div class=\"hero-points\">\r\n          <span><ion-icon name=\"stopwatch-outline\"></ion-icon> ۰ تا ۱۰۰</span>\r\n          <span><ion-icon name=\"speedometer-outline\"></ion-icon> ۴۰۲ متر</span>\r\n          <span><ion-icon name=\"analytics-outline\"></ion-icon> نمودار سرعت و شتاب</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"drag-hero__mark\" aria-hidden=\"true\"><strong>402</strong><span>METERS</span><i></i></div>\r\n    </section>\r\n\r\n    <section class=\"profile-select\" aria-label=\"انتخاب پروفایل خودرو\">\r\n      <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n      <div><strong>پروفایل خودرو</strong><small>اطلاعات ثبت‌شده را در شبیه‌ساز اعمال کن</small></div>\r\n      <select [value]=\"selectedProfileId\" (change)=\"applyProfile($any($event.target).value)\" aria-label=\"پروفایل خودرو\">\r\n        <option value=\"\">انتخاب پروفایل</option>\r\n        <option *ngFor=\"let profile of profiles\" [value]=\"profile.id\">{{ profile.name }}</option>\r\n      </select>\r\n      <a routerLink=\"/TunerPlus/vehicle-profile\">ساخت یا ویرایش پروفایل</a>\r\n      <small class=\"profile-notice\" *ngIf=\"profileNotice\">{{ profileNotice }}</small>\r\n    </section>\r\n\r\n    <div class=\"drag-workspace\">\r\n      <aside class=\"drag-panel inputs-panel\">\r\n        <div class=\"panel-heading\">\r\n          <div><span class=\"panel-kicker\">SETUP</span><h2>سناریوی خودرو</h2><p>با تغییر هر مقدار، نتیجه فوری به‌روز می‌شود.</p></div>\r\n          <ion-icon name=\"options-outline\"></ion-icon>\r\n        </div>\r\n        <form [formGroup]=\"form\">\r\n          <div class=\"input-section-title\">خودرو و توان</div>\r\n          <div class=\"field-grid\">\r\n            <div class=\"drag-field\">\r\n              <div class=\"field-heading\"><span>وزن با راننده</span><button type=\"button\" (click)=\"onInfo('weight')\" aria-label=\"راهنمای وزن\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div>\r\n              <div class=\"input-shell\"><ion-input formControlName=\"vehicleWeightKg\" type=\"number\" inputmode=\"decimal\" aria-label=\"وزن خودرو با راننده\"></ion-input><small>kg</small></div>\r\n            </div>\r\n            <div class=\"drag-field\">\r\n              <div class=\"field-heading\"><span>توان</span><button type=\"button\" (click)=\"onInfo('power')\" aria-label=\"راهنمای توان\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div>\r\n              <div class=\"input-shell\"><ion-input formControlName=\"horsepower\" type=\"number\" inputmode=\"decimal\" aria-label=\"توان خودرو\"></ion-input><small>HP</small></div>\r\n            </div>\r\n          </div>\r\n          <fieldset class=\"choice-field\">\r\n            <legend>محل اندازه‌گیری توان <button type=\"button\" (click)=\"onInfo('location')\" aria-label=\"راهنمای محل اندازه‌گیری توان\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></legend>\r\n            <div class=\"choice-row\">\r\n              <label class=\"choice\" [class.is-active]=\"form.value.powerLocation === 'wheel'\"><input type=\"radio\" formControlName=\"powerLocation\" value=\"wheel\"><span>توان سر چرخ <small>WHP</small></span></label>\r\n              <label class=\"choice\" [class.is-active]=\"form.value.powerLocation === 'flywheel'\"><input type=\"radio\" formControlName=\"powerLocation\" value=\"flywheel\"><span>توان موتور <small>Flywheel HP</small></span></label>\r\n            </div>\r\n          </fieldset>\r\n          <div class=\"drag-field\" *ngIf=\"form.value.powerLocation === 'flywheel'\">\r\n            <div class=\"field-heading\"><span>افت انتقال قدرت</span><button type=\"button\" (click)=\"onInfo('loss')\" aria-label=\"راهنمای افت انتقال قدرت\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div>\r\n            <div class=\"input-shell\"><ion-input formControlName=\"drivetrainLossPct\" type=\"number\" inputmode=\"decimal\" aria-label=\"افت انتقال قدرت\"></ion-input><small>٪</small></div>\r\n          </div>\r\n          <fieldset class=\"choice-field\">\r\n            <legend>نوع انتقال نیرو <button type=\"button\" (click)=\"onInfo('drivetrain')\" aria-label=\"راهنمای نوع انتقال نیرو\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></legend>\r\n            <div class=\"choice-row choice-row--three\">\r\n              <label class=\"choice\" [class.is-active]=\"form.value.drivetrain === 'FWD'\"><input type=\"radio\" formControlName=\"drivetrain\" value=\"FWD\"><span>جلو <small>FWD</small></span></label>\r\n              <label class=\"choice\" [class.is-active]=\"form.value.drivetrain === 'RWD'\"><input type=\"radio\" formControlName=\"drivetrain\" value=\"RWD\"><span>عقب <small>RWD</small></span></label>\r\n              <label class=\"choice\" [class.is-active]=\"form.value.drivetrain === 'AWD'\"><input type=\"radio\" formControlName=\"drivetrain\" value=\"AWD\"><span>چهارچرخ <small>AWD</small></span></label>\r\n            </div>\r\n          </fieldset>\r\n          <div class=\"drag-field\">\r\n            <div class=\"field-heading\"><span>ضریب چسبندگی تایر و سطح</span><button type=\"button\" (click)=\"onInfo('traction')\" aria-label=\"راهنمای چسبندگی\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div>\r\n            <div class=\"input-shell\"><ion-input formControlName=\"tractionCoefficient\" type=\"number\" inputmode=\"decimal\" aria-label=\"ضریب چسبندگی تایر و سطح\"></ion-input><small>μ</small></div>\r\n          </div>\r\n\r\n          <div class=\"input-section-title\">مسیر و تعویض دنده</div>\r\n          <div class=\"field-grid\">\r\n            <div class=\"drag-field\">\r\n              <div class=\"field-heading\"><span>CdA آیرودینامیک</span><button type=\"button\" (click)=\"onInfo('cda')\" aria-label=\"راهنمای CdA\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div>\r\n              <div class=\"input-shell\"><ion-input formControlName=\"frontalAreaCdA\" type=\"number\" inputmode=\"decimal\" aria-label=\"CdA آیرودینامیک\"></ion-input><small>m²</small></div>\r\n            </div>\r\n            <div class=\"drag-field\">\r\n              <div class=\"field-heading\"><span>مقاومت غلتشی</span><button type=\"button\" (click)=\"onInfo('rolling')\" aria-label=\"راهنمای مقاومت غلتشی\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div>\r\n              <div class=\"input-shell\"><ion-input formControlName=\"rollingResistanceCoefficient\" type=\"number\" inputmode=\"decimal\" aria-label=\"ضریب مقاومت غلتشی\"></ion-input></div>\r\n            </div>\r\n            <div class=\"drag-field\">\r\n              <div class=\"field-heading\"><span>زمان هر تعویض</span><button type=\"button\" (click)=\"onInfo('shiftTime')\" aria-label=\"راهنمای زمان تعویض\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div>\r\n              <div class=\"input-shell\"><ion-input formControlName=\"shiftTimeMs\" type=\"number\" inputmode=\"decimal\" aria-label=\"زمان هر تعویض دنده\"></ion-input><small>ms</small></div>\r\n            </div>\r\n            <div class=\"drag-field\">\r\n              <div class=\"field-heading\"><span>تعداد تعویض تا خط پایان</span><button type=\"button\" (click)=\"onInfo('shifts')\" aria-label=\"راهنمای تعداد تعویض\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div>\r\n              <div class=\"input-shell\"><ion-input formControlName=\"shiftCount\" type=\"number\" inputmode=\"numeric\" aria-label=\"تعداد تعویض دنده تا ۴۰۲ متر\"></ion-input></div>\r\n            </div>\r\n          </div>\r\n          <button class=\"reset-action\" type=\"button\" (click)=\"reset()\"><ion-icon name=\"refresh-outline\"></ion-icon> بازنشانی ورودی‌ها</button>\r\n        </form>\r\n      </aside>\r\n\r\n      <section class=\"drag-panel empty-result\" *ngIf=\"!result\" aria-live=\"polite\">\r\n        <ion-icon name=\"speedometer-outline\"></ion-icon>\r\n        <h2>برای دیدن نتیجه، ورودی‌ها را کامل کن</h2>\r\n        <p>مقادیر خالی یا خارج از محدوده را اصلاح کن تا شبیه‌سازی دوباره اجرا شود.</p>\r\n      </section>\r\n\r\n      <section class=\"drag-results\" *ngIf=\"result\" aria-label=\"نتایج شبیه‌سازی\">\r\n        <div class=\"result-topline\"><div><span class=\"panel-kicker\">RACE ESTIMATE</span><h2>نتیجه شبیه‌سازی</h2></div><span class=\"live-chip\"><span></span> به‌روزرسانی زنده</span></div>\r\n        <div class=\"score-grid\">\r\n          <div class=\"score-card score-card--primary\"><span>زمان ۴۰۲ متر</span><div><strong>{{ result.quarterMileSeconds }}</strong><small>ثانیه</small></div><ion-icon name=\"flag-outline\"></ion-icon></div>\r\n          <div class=\"score-card\"><span>۰ تا ۱۰۰</span><div><strong>{{ result.zeroTo100Seconds ?? '—' }}</strong><small>ثانیه</small></div><ion-icon name=\"stopwatch-outline\"></ion-icon></div>\r\n          <div class=\"score-card\"><span>۱۰۰ تا ۲۰۰</span><div><strong>{{ result.hundredTo200Seconds ?? '—' }}</strong><small>ثانیه</small></div><ion-icon name=\"trending-up-outline\"></ion-icon></div>\r\n          <div class=\"score-card\"><span>سرعت خط پایان</span><div><strong>{{ result.quarterMileSpeedKmh }}</strong><small>km/h</small></div><ion-icon name=\"speedometer-outline\"></ion-icon></div>\r\n        </div>\r\n\r\n        <div class=\"drag-panel chart-panel\">\r\n          <div class=\"panel-heading\"><div><span class=\"panel-kicker\">RACE TRACE</span><h2>پروفایل حرکت در ۴۰۲ متر</h2><p>روند سرعت و شتاب طولی در طول مسیر</p></div></div>\r\n          <div class=\"chart-legend\"><span><i class=\"legend-speed\"></i> سرعت (km/h)</span><span><i class=\"legend-acceleration\"></i> شتاب (g)</span></div>\r\n          <div class=\"chart-scroll\">\r\n            <svg class=\"drag-chart\" [attr.viewBox]=\"'0 0 ' + chartWidth + ' ' + chartHeight\" role=\"img\" aria-label=\"نمودار سرعت و شتاب بر حسب مسافت درگ\">\r\n              <rect class=\"frame\" [attr.x]=\"chartLeft\" [attr.y]=\"chartTop\" [attr.width]=\"chartPlotWidth\" [attr.height]=\"chartPlotHeight\"></rect>\r\n              <g *ngFor=\"let tick of [0, 100, 201, 300, 402]\"><line class=\"grid\" [attr.x1]=\"toX(tick)\" [attr.y1]=\"chartTop\" [attr.x2]=\"toX(tick)\" [attr.y2]=\"chartHeight - chartBottom\"></line><text class=\"tick x-tick\" [attr.x]=\"toX(tick)\" [attr.y]=\"chartHeight - 18\">{{ tick }}</text></g>\r\n              <g *ngFor=\"let tick of speedTicks\"><line class=\"grid\" [attr.x1]=\"chartLeft\" [attr.y1]=\"toY(tick, maxSpeedKmh)\" [attr.x2]=\"chartWidth - chartRight\" [attr.y2]=\"toY(tick, maxSpeedKmh)\"></line><text class=\"tick y-left\" [attr.x]=\"chartLeft - 8\" [attr.y]=\"toY(tick, maxSpeedKmh) + 4\">{{ tick }}</text></g>\r\n              <g *ngFor=\"let tick of accelerationTicks\"><text class=\"tick y-right\" [attr.x]=\"chartWidth - chartRight + 8\" [attr.y]=\"toY(tick, maxAccelerationG) + 4\">{{ tick }}g</text></g>\r\n              <path class=\"speed-path\" [attr.d]=\"speedPath\"></path>\r\n              <path class=\"acceleration-path\" [attr.d]=\"accelerationPath\"></path>\r\n              <text class=\"axis-title\" [attr.x]=\"chartWidth / 2\" [attr.y]=\"chartHeight - 2\">مسافت (m)</text>\r\n              <text class=\"axis-title\" [attr.x]=\"14\" [attr.y]=\"chartHeight / 2\" [attr.transform]=\"'rotate(-90 14 ' + chartHeight / 2 + ')'\">سرعت (km/h)</text>\r\n            </svg>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"drag-panel analysis-panel\">\r\n          <div class=\"panel-heading\"><div><span class=\"panel-kicker\">RUN BREAKDOWN</span><h2>جزئیات عملکرد</h2></div></div>\r\n          <div class=\"analysis-grid\">\r\n            <div><span>توان مؤثر سر چرخ</span><strong>{{ result.wheelHorsepower }} <small>HP</small></strong></div>\r\n            <div><span>نسبت توان به وزن</span><strong>{{ result.powerToWeightHpPerTon }} <small>HP / ton</small></strong></div>\r\n            <div><span>۱/۸ مایل (۲۰۱ متر)</span><strong>{{ result.eighthMileSeconds }} <small>s</small> <em>@ {{ result.eighthMileSpeedKmh }} km/h</em></strong></div>\r\n            <div><span>بیشینه شتاب طولی</span><strong>{{ result.peakAccelerationG }} <small>g</small></strong></div>\r\n            <div><span>میانگین شتاب تا ۴۰۲ متر</span><strong>{{ result.averageAccelerationG }} <small>g</small></strong></div>\r\n          </div>\r\n          <p class=\"disclaimer\"><ion-icon name=\"information-circle-outline\"></ion-icon> این خروجی تخمینی است و مقاومت هوا، مقاومت غلتشی، چسبندگی و مکث تعویض دنده را لحاظ می‌کند. برای تصمیم نهایی از دیتالاگ و تست پیست استفاده کن.</p>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </main>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_drag-performance_drag-performance_module_ts.js.map