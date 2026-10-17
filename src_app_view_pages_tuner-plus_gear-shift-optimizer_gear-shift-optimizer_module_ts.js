"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_gear-shift-optimizer_gear-shift-optimizer_module_ts"],{

/***/ 5664:
/*!***************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/gear-shift-optimizer/gear-shift-optimizer-routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GearShiftOptimizerRoutingModule": () => (/* binding */ GearShiftOptimizerRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _gear_shift_optimizer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gear-shift-optimizer.component */ 94068);




const routes = [{ path: '', component: _gear_shift_optimizer_component__WEBPACK_IMPORTED_MODULE_0__.GearShiftOptimizerComponent }];
let GearShiftOptimizerRoutingModule = class GearShiftOptimizerRoutingModule {
};
GearShiftOptimizerRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] })
], GearShiftOptimizerRoutingModule);



/***/ }),

/***/ 94068:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/gear-shift-optimizer/gear-shift-optimizer.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GearShiftOptimizerComponent": () => (/* binding */ GearShiftOptimizerComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _gear_shift_optimizer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gear-shift-optimizer.component.html?ngResource */ 37443);
/* harmony import */ var _gear_shift_optimizer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gear-shift-optimizer.component.scss?ngResource */ 54864);
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















let GearShiftOptimizerComponent = class GearShiftOptimizerComponent {
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
    this.recommendations = [];
    this.chartSeries = [];
    this.gearCount = 6;
    this.maxSpeedKmh = 260;
    this.maxWheelTorqueNm = 1000;
    this.shiftStrategy = 'acceleration';
    this.chartWidth = 700;
    this.chartHeight = 350;
    this.chartLeft = 62;
    this.chartRight = 20;
    this.chartTop = 24;
    this.chartBottom = 52;
    this.chartColors = ['#3880ff', '#2dd36f', '#ffc409', '#eb445a', '#6030a0', '#0cd1e8', '#ff8c00', '#a8b2be' // medium  – gear 8
    ];
    this.isShow = false;
    this.check();
  }

  ngOnInit() {
    this.form = this.fb.group({
      gearCount: [6, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(2), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(8)]],
      finalDriveRatio: [3.73, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1)]],
      tireDiameterMm: [610, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(200), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1200)]],
      drivetrainEfficiencyPct: [88, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(30), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      rpmStart: [2500, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(500)]],
      torquePeakRpm: [4500, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(500)]],
      peakTorqueNm: [360, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(20)]],
      powerPeakRpm: [6200, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(500)]],
      peakPowerHp: [300, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(20)]],
      redlineRpm: [7200, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1000)]],
      gear1: [3.31, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1)]],
      gear2: [2.13, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1)]],
      gear3: [1.53, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1)]],
      gear4: [1.18, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1)]],
      gear5: [0.97, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1)]],
      gear6: [0.81, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1)]],
      gear7: [0.69, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1)]],
      gear8: [0.58, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1)]]
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

    const values = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.toolValues(profile, 'gear-shift-optimizer');
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
    const ratios = ['firstGear', 'secondGear', 'thirdGear', 'fourthGear', 'fifthGear', 'sixthGear'];
    const count = ratios.filter(key => Number(profile.values[key]) > 0).length;

    if (count >= 2) {
      this.form.patchValue({
        gearCount: count
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

      _this.siteService.GetTunerPlusById(35).subscribe(res => {
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
  /** Switch the shift strategy and recalculate immediately */


  setStrategy(s) {
    this.shiftStrategy = s;
    this.calculate();
  }

  calculate() {
    if (this.form.invalid) {
      this.recommendations = [];
      return;
    }

    const value = this.form.getRawValue();
    this.gearCount = Number(value.gearCount);
    const gears = this.getGears(value);
    const rpmStart = Number(value.rpmStart);
    const redlineRpm = Number(value.redlineRpm);
    const torquePeakRpm = Number(value.torquePeakRpm);

    if (rpmStart >= redlineRpm || torquePeakRpm > redlineRpm || Number(value.powerPeakRpm) > redlineRpm) {
      this.recommendations = [];
      this.chartSeries = [];
      return;
    }

    this.recommendations = gears.slice(0, -1).map((gearRatio, index) => {
      const nextGearRatio = gears[index + 1];
      let bestRpm = redlineRpm;
      let smallestDifference = Number.POSITIVE_INFINITY;

      for (let rpm = Math.max(rpmStart, 2000); rpm <= redlineRpm; rpm += 10) {
        const afterShiftRpm = rpm * nextGearRatio / gearRatio;

        if (afterShiftRpm < rpmStart) {
          continue;
        }

        let difference;

        switch (this.shiftStrategy) {
          case 'power':
            {
              // Power crossover: shift when wheel power in next gear ≥ current gear
              // Power ∝ engineTorque × RPM (wheel RPM is proportional to engine RPM)
              const curPow = this.engineTorque(rpm, value) * rpm;
              const nextPow = this.engineTorque(afterShiftRpm, value) * afterShiftRpm;
              difference = Math.abs(curPow - nextPow);
              break;
            }

          case 'economy':
            {
              // Economy: shift just at torque-peak so next gear enters near peak efficiency.
              // We minimise how far afterShiftRpm is from torquePeakRpm.
              difference = Math.abs(afterShiftRpm - torquePeakRpm);
              break;
            }

          default:
            {
              // acceleration: classic wheel-torque crossover
              const curTq = this.wheelTorque(rpm, gearRatio, value);
              const nextTq = this.wheelTorque(afterShiftRpm, nextGearRatio, value);
              difference = Math.abs(curTq - nextTq);
              break;
            }
        }

        if (difference < smallestDifference) {
          smallestDifference = difference;
          bestRpm = rpm;
        }
      }

      return {
        gear: index + 1,
        nextGear: index + 2,
        shiftRpm: bestRpm,
        afterShiftRpm: this.round(bestRpm * nextGearRatio / gearRatio, 0),
        speedKmh: this.round(this.rpmToSpeedKmh(bestRpm, gearRatio, value), 1)
      };
    });
    this.chartSeries = gears.map(gearRatio => this.buildGearSeries(gearRatio, value));
    const chartPoints = this.chartSeries.reduce((allPoints, series) => allPoints.concat(series), []);
    this.maxSpeedKmh = Math.ceil(Math.max(...chartPoints.map(point => point.speedKmh), 0) / 20) * 20;
    this.maxWheelTorqueNm = Math.ceil(Math.max(...chartPoints.map(point => point.wheelTorqueNm), 0) / 100) * 100;
  }

  getGearRange() {
    return Array.from({
      length: this.gearCount
    }, (_, index) => index + 1);
  }

  get seriesPaths() {
    return this.chartSeries.map(series => series.map((point, index) => `${index === 0 ? 'M' : 'L'} ${this.toX(point.speedKmh)} ${this.toY(point.wheelTorqueNm)}`).join(' '));
  }

  get xTicks() {
    return [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1].map(part => this.round(this.maxSpeedKmh * part, 0));
  }

  get yTicks() {
    return [0, .2, .4, .6, .8, 1].map(part => this.round(this.maxWheelTorqueNm * part, 0));
  }
  /** X pixel coordinate for each shift-point vertical line */


  get shiftLineXPositions() {
    return this.recommendations.map(r => this.toX(r.speedKmh));
  }
  /** Mid-curve label position for each gear (placed at 60% of curve length) */


  get gearLabelPositions() {
    return this.chartSeries.map(series => {
      if (!series.length) {
        return {
          x: 0,
          y: 0
        };
      }

      const mid = series[Math.floor(series.length * 0.6)];
      return {
        x: this.toX(mid.speedKmh),
        y: this.toY(mid.wheelTorqueNm) - 8
      };
    });
  }

  toX(speedKmh) {
    return this.chartLeft + speedKmh / this.maxSpeedKmh * this.chartPlotWidth;
  }

  toY(torqueNm) {
    return this.chartTop + (this.maxWheelTorqueNm - torqueNm) / this.maxWheelTorqueNm * this.chartPlotHeight;
  }
  /** Format Y-axis tick so it's clearly "Nm" not RPM: e.g. 3900 → "3.9k" */


  yTickLabel(v) {
    if (v === 0) {
      return '0';
    }

    if (v >= 1000) {
      return (v / 1000).toFixed(v % 1000 === 0 ? 0 : 1) + 'k';
    }

    return String(v);
  }

  reset() {
    this.form.reset({
      gearCount: 6,
      finalDriveRatio: 3.73,
      tireDiameterMm: 610,
      drivetrainEfficiencyPct: 88,
      rpmStart: 2500,
      torquePeakRpm: 4500,
      peakTorqueNm: 360,
      powerPeakRpm: 6200,
      peakPowerHp: 300,
      redlineRpm: 7200,
      gear1: 3.31,
      gear2: 2.13,
      gear3: 1.53,
      gear4: 1.18,
      gear5: 0.97,
      gear6: 0.81,
      gear7: 0.69,
      gear8: 0.58
    });
  }

  onInfo(type) {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const messages = {
        gearCount: 'تعداد دنده‌های رو به جلو که باید در محاسبه استفاده شود.',
        finalDrive: 'ضریب دیفرانسیل نهایی؛ مقدار بزرگ‌تر، شتاب بیشتری می‌دهد اما سرعت هر دنده را کمتر می‌کند.',
        tire: 'قطر مؤثر تایر روی زمین، نه صرفاً قطر اسمی رینگ و لاستیک.',
        efficiency: 'بازده انتقال قدرت از میل‌لنگ تا چرخ؛ برای خودروهای دیفرانسیل جلو معمولاً بیشتر از AWD است.',
        rpmStart: 'کمترین RPM معنادار در منحنی موتور برای مقایسه گشتاور.',
        torquePeak: 'دور و مقدار اوج گشتاور موتور. این مقدار را از نمودار داینو وارد کنید.',
        powerPeak: 'دور و مقدار اوج توان موتور. این مقدار هم بهتر است از داینو گرفته شود.',
        redline: 'بیشترین دور مجاز موتور برای تعویض دنده.',
        gear: 'ضریب همان دنده از مشخصات گیربکس. برای خودروهای واقعی، ضرایب کارخانه یا گیربکس نصب‌شده را وارد کنید.'
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

  getGears(value) {
    return Array.from({
      length: Number(value.gearCount)
    }, (_, index) => Number(value[`gear${index + 1}`]));
  }

  buildGearSeries(gearRatio, value) {
    const points = [];

    for (let rpm = Number(value.rpmStart); rpm <= Number(value.redlineRpm); rpm += 100) {
      points.push({
        speedKmh: this.rpmToSpeedKmh(rpm, gearRatio, value),
        wheelTorqueNm: this.wheelTorque(rpm, gearRatio, value)
      });
    }

    return points;
  }

  engineTorque(rpm, value) {
    const lowRpm = Number(value.rpmStart);
    const torquePeakRpm = Number(value.torquePeakRpm);
    const torquePeakNm = Number(value.peakTorqueNm);
    const powerPeakRpm = Number(value.powerPeakRpm);
    const torqueAtPowerPeak = Number(value.peakPowerHp) * 7127 / powerPeakRpm;
    const redlineRpm = Number(value.redlineRpm);
    const redlineTorque = torqueAtPowerPeak * 0.82;

    if (rpm <= torquePeakRpm) {
      return this.interpolate(lowRpm, torquePeakNm * 0.72, torquePeakRpm, torquePeakNm, rpm);
    }

    if (rpm <= powerPeakRpm) {
      return this.interpolate(torquePeakRpm, torquePeakNm, powerPeakRpm, torqueAtPowerPeak, rpm);
    }

    return this.interpolate(powerPeakRpm, torqueAtPowerPeak, redlineRpm, redlineTorque, rpm);
  }

  wheelTorque(rpm, gearRatio, value) {
    return this.engineTorque(rpm, value) * gearRatio * Number(value.finalDriveRatio) * Number(value.drivetrainEfficiencyPct) / 100;
  }

  rpmToSpeedKmh(rpm, gearRatio, value) {
    const circumferenceM = Math.PI * Number(value.tireDiameterMm) / 1000;
    return rpm / (gearRatio * Number(value.finalDriveRatio)) * circumferenceM * 60 / 1000;
  }

  interpolate(x1, y1, x2, y2, x) {
    if (x2 === x1) {
      return y1;
    }

    return y1 + (x - x1) / (x2 - x1) * (y2 - y1);
  }

  get chartPlotWidth() {
    return this.chartWidth - this.chartLeft - this.chartRight;
  }

  get chartPlotHeight() {
    return this.chartHeight - this.chartTop - this.chartBottom;
  }

  round(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round((value + Number.EPSILON) * factor) / factor;
  }

};

GearShiftOptimizerComponent.ctorParameters = () => [{
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

GearShiftOptimizerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-gear-shift-optimizer',
  template: _gear_shift_optimizer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_gear_shift_optimizer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], GearShiftOptimizerComponent);


/***/ }),

/***/ 99528:
/*!*******************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/gear-shift-optimizer/gear-shift-optimizer.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GearShiftOptimizerModule": () => (/* binding */ GearShiftOptimizerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var _gear_shift_optimizer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gear-shift-optimizer-routing.module */ 5664);
/* harmony import */ var _gear_shift_optimizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gear-shift-optimizer.component */ 94068);









let GearShiftOptimizerModule = class GearShiftOptimizerModule {
};
GearShiftOptimizerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_gear_shift_optimizer_component__WEBPACK_IMPORTED_MODULE_3__.GearShiftOptimizerComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _gear_shift_optimizer_routing_module__WEBPACK_IMPORTED_MODULE_2__.GearShiftOptimizerRoutingModule, src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule
        ],
    })
], GearShiftOptimizerModule);



/***/ }),

/***/ 54864:
/*!***********************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/gear-shift-optimizer/gear-shift-optimizer.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.profile-select {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 17px;\n  padding: 13px 17px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 15px;\n  background: var(--ion-item-background, #fff);\n  color: var(--ion-text-color, #1c2430);\n}\n.profile-select > ion-icon {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 1.45rem;\n}\n.profile-select > div {\n  display: grid;\n  gap: 2px;\n  min-width: 140px;\n}\n.profile-select strong {\n  font-size: 0.81rem;\n}\n.profile-select small {\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.71rem;\n}\n.profile-select select {\n  flex: 1;\n  min-width: 180px;\n  max-width: 340px;\n  padding: 9px 11px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 9px;\n  background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #1c2430);\n  font: inherit;\n  font-size: 0.79rem;\n}\n.profile-select a {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-decoration: none;\n}\n.profile-select .profile-notice {\n  flex-basis: 100%;\n  padding-top: 5px;\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.7rem;\n  line-height: 1.7;\n}\n@media (max-width: 560px) {\n  .profile-select select {\n    flex-basis: 100%;\n    max-width: none;\n  }\n\n  .profile-select a {\n    margin-right: auto;\n  }\n}\n/* ── Strategy segment ───────────────────────────────── */\n.strategy-segment {\n  margin-bottom: 4px;\n}\n.strategy-segment ion-segment-button {\n  font-size: 0.78rem;\n  min-height: 44px;\n  --indicator-color: var(--ion-color-primary);\n}\n.strategy-segment ion-icon {\n  font-size: 1rem;\n  margin-bottom: 2px;\n}\n/* ── Table ──────────────────────────────────────────── */\n.table-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: center;\n  font-size: 0.9rem;\n}\nth, td {\n  border: 1px solid var(--ion-color-light-shade, #d7d8da);\n  padding: 10px 14px;\n  white-space: nowrap;\n}\nth {\n  background: var(--ion-color-primary);\n  color: #fff;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\ntbody tr:nth-child(even) {\n  background: var(--ion-color-light, #f4f5f8);\n}\ntbody tr:hover {\n  background: rgba(var(--ion-color-primary-rgb), 0.08);\n}\n/* ── SVG chart container ────────────────────────────── */\n.shift-chart {\n  display: block;\n  width: 100%;\n  direction: ltr;\n  overflow: visible;\n}\n/* ── Chart area background ─────────────────────────── */\n.chart-bg {\n  fill: var(--ion-color-light, #f4f5f8);\n  stroke: var(--ion-color-medium-shade, #808289);\n  stroke-width: 1;\n}\n/* ── Grid lines ────────────────────────────────────── */\n.grid-line {\n  stroke: var(--ion-color-medium, #92949c);\n  stroke-width: 0.4;\n  stroke-dasharray: 3 3;\n  opacity: 0.5;\n}\n/* ── Axis tick labels ──────────────────────────────── */\n.tick {\n  font-size: 10px;\n  fill: var(--ion-color-medium-shade, #808289);\n  font-family: \"Courier New\", monospace;\n}\n.x-tick {\n  text-anchor: middle;\n}\n.y-tick {\n  text-anchor: end;\n}\n/* ── Axis titles ───────────────────────────────────── */\n.axis-title {\n  font-size: 11px;\n  font-weight: 700;\n  fill: var(--ion-color-dark, #222428);\n  letter-spacing: 0.02em;\n}\n.x-axis-title {\n  text-anchor: middle;\n}\n.y-axis-title {\n  text-anchor: middle;\n}\n/* ── Gear curve paths ──────────────────────────────── */\n.gear-path {\n  fill: none;\n  stroke-width: 2.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.18));\n}\n/* ── Shift-point vertical marker lines ─────────────── */\n.shift-line {\n  stroke: rgba(255, 255, 255, 0.85);\n  stroke-width: 1.5;\n  stroke-dasharray: 5 3;\n  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.35));\n}\n/* ── Shift-point RPM callout text ──────────────────── */\n.shift-label {\n  font-size: 9px;\n  font-weight: 700;\n  fill: var(--ion-color-dark, #222428);\n  text-anchor: start;\n  font-family: \"Courier New\", monospace;\n}\n.shift-label-unit {\n  font-size: 8px;\n  font-weight: 600;\n  fill: var(--ion-color-medium-shade, #808289);\n  text-anchor: start;\n  font-family: \"Courier New\", monospace;\n}\n/* ── \"Nm\" unit label above top Y tick ──────────────── */\n.y-unit {\n  font-size: 9px;\n  font-weight: 700;\n  fill: var(--ion-color-medium, #92949c);\n  text-anchor: end;\n  font-family: \"Courier New\", monospace;\n}\n/* ── Gear number badge on curve ─────────────────────── */\n.gear-label-bg {\n  opacity: 0.92;\n}\n.gear-label {\n  font-size: 9px;\n  font-weight: 800;\n  fill: #fff;\n  text-anchor: middle;\n  pointer-events: none;\n}\n/* ── Legend ─────────────────────────────────────────── */\n.legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px 18px;\n  margin-top: 12px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  border: 1px solid rgba(128, 128, 128, 0.2);\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.legend-swatch {\n  display: inline-block;\n  width: 22px;\n  height: 4px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.shift-swatch {\n  background: transparent;\n  border: 1.5px dashed var(--tuner-border, #888);\n}\n.legend-label {\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n:host-context(.dark-theme) tbody tr:nth-child(even) {\n  background: var(--tuner-soft);\n}\n:host-context(.dark-theme) .chart-bg {\n  fill: var(--tuner-soft);\n}\n:host-context(.dark-theme) .axis-title, :host-context(.dark-theme) .shift-label {\n  fill: var(--tuner-text);\n}\n:host-context(.dark-theme) .tick, :host-context(.dark-theme) .shift-label-unit, :host-context(.dark-theme) .y-unit {\n  fill: var(--tuner-muted);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlYXItc2hpZnQtb3B0aW1pemVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXF9wcm9maWxlLXNlbGVjdC5zY3NzIiwiLi5cXF90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUFrQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtFQUFXLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IsdURBQUE7RUFBeUQsbUJBQUE7RUFBcUIsNENBQUE7RUFBOEMscUNBQUE7QURZcFA7QUNYQTtFQUE2Qix1Q0FBQTtFQUF5QyxrQkFBQTtBRGdCdEU7QUNmQTtFQUF3QixhQUFBO0VBQWUsUUFBQTtFQUFVLGdCQUFBO0FEcUJqRDtBQ3BCQTtFQUF5QixrQkFBQTtBRHdCekI7QUN2QkE7RUFBd0IsdUNBQUE7RUFBeUMsa0JBQUE7QUQ0QmpFO0FDM0JBO0VBQXlCLE9BQUE7RUFBUyxnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixpQkFBQTtFQUFtQix1REFBQTtFQUF5RCxrQkFBQTtFQUFvQiw2Q0FBQTtFQUErQyxxQ0FBQTtFQUF1QyxhQUFBO0VBQWUsa0JBQUE7QUR3QzNRO0FDdkNBO0VBQW9CLHVDQUFBO0VBQXlDLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLHFCQUFBO0FEOENsRztBQzdDQTtFQUFrQyxnQkFBQTtFQUFrQixnQkFBQTtFQUFrQix1Q0FBQTtFQUF5QyxpQkFBQTtFQUFrQixnQkFBQTtBRHFEakk7QUNwREE7RUFBNEI7SUFBeUIsZ0JBQUE7SUFBa0IsZUFBQTtFRDBEckU7O0VDMUR1RjtJQUFvQixrQkFBQTtFRDhEM0c7QUFDRjtBQXBFQSwwREFBQTtBQUNBO0VBQ0Usa0JBQUE7QUFzRUY7QUFwRUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFzRUo7QUFuRUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFxRUo7QUFqRUEsMERBQUE7QUFDQTtFQUFjLGdCQUFBO0FBcUVkO0FBbkVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXNFRjtBQW5FQTtFQUNFLHVEQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXNFRjtBQW5FQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFzRUY7QUFuRUE7RUFDRSwyQ0FBQTtBQXNFRjtBQW5FQTtFQUNFLG9EQUFBO0FBc0VGO0FBbkVBLDBEQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXNFRjtBQW5FQSx5REFBQTtBQUNBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtFQUNBLGVBQUE7QUFzRUY7QUFuRUEseURBQUE7QUFDQTtFQUNFLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFzRUY7QUFuRUEseURBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLHFDQUFBO0FBc0VGO0FBbkVBO0VBQVUsbUJBQUE7QUF1RVY7QUF0RUE7RUFBVSxnQkFBQTtBQTBFVjtBQXhFQSx5REFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQTJFRjtBQXhFQTtFQUFnQixtQkFBQTtBQTRFaEI7QUEzRUE7RUFBZ0IsbUJBQUE7QUErRWhCO0FBN0VBLHlEQUFBO0FBQ0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0RBQUE7QUFnRkY7QUE3RUEseURBQUE7QUFDQTtFQUNFLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO0FBZ0ZGO0FBN0VBLHlEQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUFnRkY7QUE3RUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUFnRkY7QUE3RUEseURBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQWdGRjtBQTdFQSwwREFBQTtBQUNBO0VBQWlCLGFBQUE7QUFpRmpCO0FBL0VBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFrRkY7QUEvRUEsMERBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBa0ZGO0FBL0VBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQWtGRjtBQS9FQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFrRkY7QUEvRUE7RUFDRSx1QkFBQTtFQUNBLDhDQUFBO0FBa0ZGO0FBL0VBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQWtGRjtBRWhRRTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FGbVFKO0FFaFFJOzs7RUFHRSx3QkFBQTtFQUNBLG1DQUFBO0FGa1FOO0FFL1BJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FGaVFOO0FFOVBJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0FGZ1FOO0FFOVBJO0VBQWMsK0JBQUE7RUFBaUMsMEJBQUE7QUZrUW5EO0FFalFJO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FGbVFOO0FFalFJO0VBQVcsZ0NBQUE7QUZvUWY7QUVuUUk7RUFBb0Msd0JBQUE7QUZzUXhDO0FFclFJO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QUZ1UU47QUVyUUk7RUFBa0QsbUNBQUE7QUZ3UXREO0FBbEpFO0VBQTJCLDZCQUFBO0FBc0o3QjtBQXJKRTtFQUFZLHVCQUFBO0FBd0pkO0FBdkpFO0VBQTRCLHVCQUFBO0FBMEo5QjtBQXpKRTtFQUFvQyx3QkFBQTtBQTRKdEMiLCJmaWxlIjoiZ2Vhci1zaGlmdC1vcHRpbWl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi90aGVtZSc7XHJcblxyXG5AaW1wb3J0ICcuLi9wcm9maWxlLXNlbGVjdCc7XHJcbi8qIOKUgOKUgCBTdHJhdGVneSBzZWdtZW50IOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL1xyXG4uc3RyYXRlZ3ktc2VnbWVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG5cclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xyXG4gICAgbWluLWhlaWdodDogNDRweDtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiDilIDilIAgVGFibGUg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXHJcbi50YWJsZS13cmFwIHsgb3ZlcmZsb3cteDogYXV0bzsgfVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSk7XHJcbiAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG59XHJcblxyXG50Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCk7XHJcbn1cclxuXHJcbnRib2R5IHRyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMDgpO1xyXG59XHJcblxyXG4vKiDilIDilIAgU1ZHIGNoYXJ0IGNvbnRhaW5lciDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cclxuLnNoaWZ0LWNoYXJ0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXJlY3Rpb246IGx0cjtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLyog4pSA4pSAIENoYXJ0IGFyZWEgYmFja2dyb3VuZCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cclxuLmNoYXJ0LWJnIHtcclxuICBmaWxsOiB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmNGY1ZjgpO1xyXG4gIHN0cm9rZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSwgIzgwODI4OSk7XHJcbiAgc3Ryb2tlLXdpZHRoOiAxO1xyXG59XHJcblxyXG4vKiDilIDilIAgR3JpZCBsaW5lcyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cclxuLmdyaWQtbGluZSB7XHJcbiAgc3Ryb2tlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjOTI5NDljKTtcclxuICBzdHJva2Utd2lkdGg6IDAuNDtcclxuICBzdHJva2UtZGFzaGFycmF5OiAzIDM7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4vKiDilIDilIAgQXhpcyB0aWNrIGxhYmVscyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cclxuLnRpY2sge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmaWxsOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlLCAjODA4Mjg5KTtcclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4ueC10aWNrIHsgdGV4dC1hbmNob3I6IG1pZGRsZTsgfVxyXG4ueS10aWNrIHsgdGV4dC1hbmNob3I6IGVuZDsgfVxyXG5cclxuLyog4pSA4pSAIEF4aXMgdGl0bGVzIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL1xyXG4uYXhpcy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZmlsbDogdmFyKC0taW9uLWNvbG9yLWRhcmssICMyMjI0MjgpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbn1cclxuXHJcbi54LWF4aXMtdGl0bGUgeyB0ZXh0LWFuY2hvcjogbWlkZGxlOyB9XHJcbi55LWF4aXMtdGl0bGUgeyB0ZXh0LWFuY2hvcjogbWlkZGxlOyB9XHJcblxyXG4vKiDilIDilIAgR2VhciBjdXJ2ZSBwYXRocyDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cclxuLmdlYXItcGF0aCB7XHJcbiAgZmlsbDogbm9uZTtcclxuICBzdHJva2Utd2lkdGg6IDIuODtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4xOCkpO1xyXG59XHJcblxyXG4vKiDilIDilIAgU2hpZnQtcG9pbnQgdmVydGljYWwgbWFya2VyIGxpbmVzIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCAqL1xyXG4uc2hpZnQtbGluZSB7XHJcbiAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG4gIHN0cm9rZS13aWR0aDogMS41O1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDUgMztcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAzcHggcmdiYSgwLCAwLCAwLCAuMzUpKTtcclxufVxyXG5cclxuLyog4pSA4pSAIFNoaWZ0LXBvaW50IFJQTSBjYWxsb3V0IHRleHQg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXHJcbi5zaGlmdC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmaWxsOiB2YXIoLS1pb24tY29sb3ItZGFyaywgIzIyMjQyOCk7XHJcbiAgdGV4dC1hbmNob3I6IHN0YXJ0O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi5zaGlmdC1sYWJlbC11bml0IHtcclxuICBmb250LXNpemU6IDhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZpbGw6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUsICM4MDgyODkpO1xyXG4gIHRleHQtYW5jaG9yOiBzdGFydDtcclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4vKiDilIDilIAgXCJObVwiIHVuaXQgbGFiZWwgYWJvdmUgdG9wIFkgdGljayDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cclxuLnktdW5pdCB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmaWxsOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjOTI5NDljKTtcclxuICB0ZXh0LWFuY2hvcjogZW5kO1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi8qIOKUgOKUgCBHZWFyIG51bWJlciBiYWRnZSBvbiBjdXJ2ZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAgKi9cclxuLmdlYXItbGFiZWwtYmcgeyBvcGFjaXR5OiAwLjkyOyB9XHJcblxyXG4uZ2Vhci1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmaWxsOiAjZmZmO1xyXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi8qIOKUgOKUgCBMZWdlbmQg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAICovXHJcbi5sZWdlbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMTBweCAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xyXG59XHJcblxyXG4ubGVnZW5kLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxufVxyXG5cclxuLmxlZ2VuZC1zd2F0Y2gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5zaGlmdC1zd2F0Y2gge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMS41cHggZGFzaGVkIHR1bmVyLWNvbG9yKGJvcmRlciwgIzg4OCk7XHJcbn1cclxuXHJcbi5sZWdlbmQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbkBpbmNsdWRlIHR1bmVyLWRhcmstdGhlbWU7XHJcblxyXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XHJcbiAgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHsgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc29mdCk7IH1cclxuICAuY2hhcnQtYmcgeyBmaWxsOiB2YXIoLS10dW5lci1zb2Z0KTsgfVxyXG4gIC5heGlzLXRpdGxlLCAuc2hpZnQtbGFiZWwgeyBmaWxsOiB2YXIoLS10dW5lci10ZXh0KTsgfVxyXG4gIC50aWNrLCAuc2hpZnQtbGFiZWwtdW5pdCwgLnktdW5pdCB7IGZpbGw6IHZhcigtLXR1bmVyLW11dGVkKTsgfVxyXG59XHJcbiIsIi5wcm9maWxlLXNlbGVjdCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDsgZmxleC13cmFwOiB3cmFwOyBtYXJnaW4tdG9wOiAxN3B4OyBwYWRkaW5nOiAxM3B4IDE3cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgI2QwZDVkZCk7IGJvcmRlci1yYWRpdXM6IDE1cHg7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsICNmZmYpOyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMxYzI0MzApOyB9XG4ucHJvZmlsZS1zZWxlY3QgPiBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZDEyMzMyKTsgZm9udC1zaXplOiAxLjQ1cmVtOyB9XG4ucHJvZmlsZS1zZWxlY3QgPiBkaXYgeyBkaXNwbGF5OiBncmlkOyBnYXA6IDJweDsgbWluLXdpZHRoOiAxNDBweDsgfVxuLnByb2ZpbGUtc2VsZWN0IHN0cm9uZyB7IGZvbnQtc2l6ZTogLjgxcmVtOyB9XG4ucHJvZmlsZS1zZWxlY3Qgc21hbGwgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzY2NzA4NSk7IGZvbnQtc2l6ZTogLjcxcmVtOyB9XG4ucHJvZmlsZS1zZWxlY3Qgc2VsZWN0IHsgZmxleDogMTsgbWluLXdpZHRoOiAxODBweDsgbWF4LXdpZHRoOiAzNDBweDsgcGFkZGluZzogOXB4IDExcHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgI2QwZDVkZCk7IGJvcmRlci1yYWRpdXM6IDlweDsgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpOyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMxYzI0MzApOyBmb250OiBpbmhlcml0OyBmb250LXNpemU6IC43OXJlbTsgfVxuLnByb2ZpbGUtc2VsZWN0IGEgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2QxMjMzMik7IGZvbnQtc2l6ZTogLjc2cmVtOyBmb250LXdlaWdodDogODAwOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbi5wcm9maWxlLXNlbGVjdCAucHJvZmlsZS1ub3RpY2UgeyBmbGV4LWJhc2lzOiAxMDAlOyBwYWRkaW5nLXRvcDogNXB4OyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzY2NzA4NSk7IGZvbnQtc2l6ZTogLjdyZW07IGxpbmUtaGVpZ2h0OiAxLjc7IH1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkgeyAucHJvZmlsZS1zZWxlY3Qgc2VsZWN0IHsgZmxleC1iYXNpczogMTAwJTsgbWF4LXdpZHRoOiBub25lOyB9LnByb2ZpbGUtc2VsZWN0IGEgeyBtYXJnaW4tcmlnaHQ6IGF1dG87IH0gfVxuIiwiLy8gS2VlcCB0aGUgb3JpZ2luYWwgbGlnaHQgY29sb3IgYXQgZWFjaCBjYWxsIHNpdGUuIFRva2VucyBleGlzdCBvbmx5IGluIGRhcmsgbW9kZS5cbkBmdW5jdGlvbiB0dW5lci1jb2xvcigkcm9sZSwgJGxpZ2h0KSB7XG4gIEByZXR1cm4gdmFyKC0tdHVuZXItI3skcm9sZX0sICN7JGxpZ2h0fSk7XG59XG5cbkBtaXhpbiB0dW5lci1kYXJrLXRoZW1lIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgLS10dW5lci1wYWdlOiAjMTExNTFlO1xuICAgIC0tdHVuZXItc3VyZmFjZTogIzFjMjIzMDtcbiAgICAtLXR1bmVyLXNvZnQ6ICMyNTJlM2Q7XG4gICAgLS10dW5lci1ib3JkZXI6ICM0NjUyNjk7XG4gICAgLS10dW5lci10ZXh0OiAjZWRmMWY4O1xuICAgIC0tdHVuZXItbXV0ZWQ6ICNiMmJmZDE7XG4gICAgLS10dW5lci1oZWFkZXI6IHJnYmEoMjgsIDM0LCA0OCwgMC45NCk7XG4gICAgLS10dW5lci1vdmVybGF5OiByZ2JhKDI4LCAzNCwgNDgsIDAuOTUpO1xuICAgIC0tdHVuZXItcHVycGxlLXRleHQ6ICNjNGI1ZmQ7XG4gICAgLS10dW5lci1wdXJwbGUtc29mdDogIzMwMjQ0NDtcbiAgICAtLXR1bmVyLXB1cnBsZS1ib3JkZXI6ICM3MjU3OWI7XG4gICAgLS10dW5lci1pbmZvLXRleHQ6ICM5M2M1ZmQ7XG4gICAgLS10dW5lci1pbmZvLXNvZnQ6ICMxZDMwNGM7XG4gICAgLS10dW5lci1pbmZvLWJvcmRlcjogIzQ2NmI5YTtcbiAgICAtLXR1bmVyLXdhcm5pbmctdGV4dDogI2ZjZDQ3NztcbiAgICAtLXR1bmVyLXdhcm5pbmctc29mdDogIzNiMzAyMDtcbiAgICAtLXR1bmVyLXdhcm5pbmctYm9yZGVyOiAjOTM3NDNkO1xuICAgIC0tdHVuZXItc3VjY2Vzcy10ZXh0OiAjODZlZmFjO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1zb2Z0OiAjMTkzOTJlO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1ib3JkZXI6ICM0MTdkNjA7XG4gICAgLS10dW5lci1kYW5nZXItdGV4dDogI2ZkYTRhZjtcbiAgICAtLXR1bmVyLWRhbmdlci1zb2Z0OiAjNDAyNjMxO1xuICAgIC0tdHVuZXItZGFuZ2VyLWJvcmRlcjogIzk4NTM2NztcbiAgICAtLXR1bmVyLXRlYWwtdGV4dDogIzdkZTRkNDtcbiAgICAtLXR1bmVyLXRlYWwtc29mdDogIzE5M2EzYTtcbiAgICAtLXR1bmVyLXRlYWwtYm9yZGVyOiAjNDM3ZjdjO1xuXG4gICAgLy8gTmF0aXZlIGNvbnRyb2xzIHdpdGhvdXQgYW4gZXhwbGljaXQgbGlnaHQgYmFja2dyb3VuZCBuZWVkIGEgZGFyayBzdXJmYWNlIHRvby5cbiAgICBpbnB1dDpub3QoW3R5cGU9J3JhbmdlJ10pOm5vdChbdHlwZT0nY2hlY2tib3gnXSk6bm90KFt0eXBlPSdyYWRpbyddKTpub3QoW3R5cGU9J2J1dHRvbiddKTpub3QoW3R5cGU9J3N1Ym1pdCddKTpub3QoW3R5cGU9J2ZpbGUnXSksXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci1tdXRlZCk7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cblxuICAgIGlvbi1oZWFkZXIubGVhcm5pbmctaGVhZGVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItcGFnZSk7IC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmQ6bm90KFtjb2xvcl0pLCBpb24tbGlzdCwgaW9uLWl0ZW06bm90KFtjb2xvcl0pLCBpb24taXRlbS1kaXZpZGVyOm5vdChbY29sb3JdKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWxpc3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTsgfVxuICAgIGlvbi1jYXJkLXRpdGxlLCBpb24tY2FyZC1zdWJ0aXRsZSB7IGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkW2NvbG9yPSdsaWdodGVzdCddLCBpb24taXRlbVtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWZhYi1idXR0b25bY29sb3I9J2xpZ2h0ZXN0J10ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2RhcmsnXSwgaW9uLWxhYmVsW2NvbG9yPSdkYXJrJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 37443:
/*!***********************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/gear-shift-optimizer/gear-shift-optimizer.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  \n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" color=\"lightest\" defaultHref=\"/TunerPlus\"></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" class=\"title-size no-padding\"\r\n      >بهینه‌ساز تعویض دنده</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed dir=\"rtl\" *ngIf=\"isShow\">\r\n    <section class=\"profile-select\" aria-label=\"انتخاب پروفایل خودرو\">\r\n      <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n      <div><strong>پروفایل خودرو</strong><small>مقادیر ثبت‌شده را در این ابزار اعمال کن</small></div>\r\n      <select [value]=\"selectedProfileId\" (change)=\"applyProfile($any($event.target).value)\" aria-label=\"پروفایل خودرو\">\r\n        <option value=\"\">انتخاب پروفایل</option>\r\n        <option *ngFor=\"let profile of profiles\" [value]=\"profile.id\">{{ profile.name }}</option>\r\n      </select>\r\n      <a routerLink=\"/TunerPlus/vehicle-profile\">ساخت یا ویرایش پروفایل</a>\r\n      <small class=\"profile-notice\" *ngIf=\"profileNotice\">{{ profileNotice }}</small>\r\n    </section>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-lg=\"4\">\r\n        <ion-card>\r\n          <ion-card-header\r\n            ><ion-card-title>موتور و انتقال قدرت</ion-card-title\r\n            ><ion-card-subtitle\r\n              >برای بهترین نتیجه، مقادیر peak torque و peak power را از داینو\r\n              وارد کنید.</ion-card-subtitle\r\n            ></ion-card-header\r\n          >\r\n          <ion-card-content>\r\n            <form [formGroup]=\"form\">\r\n              <ion-list>\r\n                <ion-item\r\n                  ><ion-label position=\"stacked\">تعداد دنده</ion-label\r\n                  ><ion-input\r\n                    formControlName=\"gearCount\"\r\n                    type=\"number\"\r\n                  ></ion-input\r\n                  ><ion-button\r\n                    slot=\"end\"\r\n                    fill=\"clear\"\r\n                    (click)=\"onInfo('gearCount')\"\r\n                    ><ion-icon\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon></ion-button\r\n                ></ion-item>\r\n                <ion-item\r\n                  ><ion-label position=\"stacked\">ضریب دیفرانسیل</ion-label\r\n                  ><ion-input\r\n                    formControlName=\"finalDriveRatio\"\r\n                    type=\"number\"\r\n                    inputmode=\"decimal\"\r\n                  ></ion-input\r\n                  ><ion-button\r\n                    slot=\"end\"\r\n                    fill=\"clear\"\r\n                    (click)=\"onInfo('finalDrive')\"\r\n                    ><ion-icon\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon></ion-button\r\n                ></ion-item>\r\n                <ion-item\r\n                  ><ion-label position=\"stacked\">قطر مؤثر تایر (mm)</ion-label\r\n                  ><ion-input\r\n                    formControlName=\"tireDiameterMm\"\r\n                    type=\"number\"\r\n                  ></ion-input\r\n                  ><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('tire')\"\r\n                    ><ion-icon\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon></ion-button\r\n                ></ion-item>\r\n                <ion-item\r\n                  ><ion-label position=\"stacked\"\r\n                    >بازده انتقال قدرت (%)</ion-label\r\n                  ><ion-input\r\n                    formControlName=\"drivetrainEfficiencyPct\"\r\n                    type=\"number\"\r\n                  ></ion-input\r\n                  ><ion-button\r\n                    slot=\"end\"\r\n                    fill=\"clear\"\r\n                    (click)=\"onInfo('efficiency')\"\r\n                    ><ion-icon\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon></ion-button\r\n                ></ion-item>\r\n                <ion-item-divider\r\n                  ><ion-label>منحنی موتور</ion-label></ion-item-divider\r\n                >\r\n                <ion-item\r\n                  ><ion-label position=\"stacked\">شروع نمودار (RPM)</ion-label\r\n                  ><ion-input\r\n                    formControlName=\"rpmStart\"\r\n                    type=\"number\"\r\n                  ></ion-input\r\n                  ><ion-button\r\n                    slot=\"end\"\r\n                    fill=\"clear\"\r\n                    (click)=\"onInfo('rpmStart')\"\r\n                    ><ion-icon\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon></ion-button\r\n                ></ion-item>\r\n                <ion-item\r\n                  ><ion-label position=\"stacked\"\r\n                    >اوج گشتاور (RPM / Nm)</ion-label\r\n                  ><ion-input\r\n                    formControlName=\"torquePeakRpm\"\r\n                    type=\"number\"\r\n                  ></ion-input\r\n                  ><ion-input\r\n                    formControlName=\"peakTorqueNm\"\r\n                    type=\"number\"\r\n                  ></ion-input\r\n                  ><ion-button\r\n                    slot=\"end\"\r\n                    fill=\"clear\"\r\n                    (click)=\"onInfo('torquePeak')\"\r\n                    ><ion-icon\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon></ion-button\r\n                ></ion-item>\r\n                <ion-item\r\n                  ><ion-label position=\"stacked\">اوج توان (RPM / HP)</ion-label\r\n                  ><ion-input\r\n                    formControlName=\"powerPeakRpm\"\r\n                    type=\"number\"\r\n                  ></ion-input\r\n                  ><ion-input\r\n                    formControlName=\"peakPowerHp\"\r\n                    type=\"number\"\r\n                  ></ion-input\r\n                  ><ion-button\r\n                    slot=\"end\"\r\n                    fill=\"clear\"\r\n                    (click)=\"onInfo('powerPeak')\"\r\n                    ><ion-icon\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon></ion-button\r\n                ></ion-item>\r\n                <ion-item\r\n                  ><ion-label position=\"stacked\">Redline (RPM)</ion-label\r\n                  ><ion-input\r\n                    formControlName=\"redlineRpm\"\r\n                    type=\"number\"\r\n                  ></ion-input\r\n                  ><ion-button\r\n                    slot=\"end\"\r\n                    fill=\"clear\"\r\n                    (click)=\"onInfo('redline')\"\r\n                    ><ion-icon\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon></ion-button\r\n                ></ion-item>\r\n                <ion-item-divider\r\n                  ><ion-label>ضرایب گیربکس</ion-label></ion-item-divider\r\n                >\r\n                <ion-item *ngFor=\"let gear of getGearRange()\"\r\n                  ><ion-label position=\"stacked\">دنده {{ gear }}</ion-label\r\n                  ><ion-input\r\n                    [formControlName]=\"'gear' + gear\"\r\n                    type=\"number\"\r\n                    inputmode=\"decimal\"\r\n                  ></ion-input\r\n                  ><ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('gear')\"\r\n                    ><ion-icon\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon></ion-button\r\n                ></ion-item>\r\n              </ion-list>\r\n              <ion-button\r\n                expand=\"block\"\r\n                shape=\"round\"\r\n                fill=\"clear\"\r\n                color=\"warning\"\r\n                (click)=\"reset()\"\r\n                >ریست</ion-button\r\n              >\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" size-lg=\"8\" *ngIf=\"recommendations.length\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>نقطه‌ی پیشنهادی تعویض</ion-card-title>\r\n            <ion-card-subtitle>\r\n              <ng-container [ngSwitch]=\"shiftStrategy\">\r\n                <span *ngSwitchCase=\"'acceleration'\">تقاطع گشتاور چرخ — بیشترین شتاب ممکن در هر دنده</span>\r\n                <span *ngSwitchCase=\"'power'\">تقاطع توان چرخ — ماندن در اوج توان خروجی</span>\r\n                <span *ngSwitchCase=\"'economy'\">ورود به دنده بعدی در نزدیکی اوج گشتاور — کمترین مصرف</span>\r\n              </ng-container>\r\n            </ion-card-subtitle>\r\n          </ion-card-header>\r\n\r\n          <!-- ── Strategy selector ─────────────────────── -->\r\n          <ion-card-content>\r\n            <ion-segment\r\n              dir=\"rtl\"\r\n              [value]=\"shiftStrategy\"\r\n              (ionChange)=\"setStrategy($any($event).detail.value)\"\r\n              class=\"strategy-segment\"\r\n            >\r\n              <ion-segment-button value=\"acceleration\">\r\n                <ion-icon name=\"rocket-outline\"></ion-icon>\r\n                <ion-label>حداکثر شتاب</ion-label>\r\n              </ion-segment-button>\r\n              <ion-segment-button value=\"power\">\r\n                <ion-icon name=\"flash-outline\"></ion-icon>\r\n                <ion-label>حداکثر توان</ion-label>\r\n              </ion-segment-button>\r\n              <ion-segment-button value=\"economy\">\r\n                <ion-icon name=\"leaf-outline\"></ion-icon>\r\n                <ion-label>اقتصادی</ion-label>\r\n              </ion-segment-button>\r\n            </ion-segment>\r\n          </ion-card-content>\r\n\r\n          <!-- ── Results table ─────────────────────────── -->\r\n          <ion-card-content class=\"table-wrap\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th>تعویض</th>\r\n                  <th>دور تعویض</th>\r\n                  <th>دور پس از تعویض</th>\r\n                  <th>سرعت</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of recommendations\">\r\n                  <td>{{ item.gear }} ← {{ item.nextGear }}</td>\r\n                  <td><strong>{{ item.shiftRpm }}</strong> RPM</td>\r\n                  <td>{{ item.afterShiftRpm }} RPM</td>\r\n                  <td>{{ item.speedKmh }} km/h</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-card-header\r\n            ><ion-card-title>گشتاور سر چرخ بر حسب سرعت</ion-card-title\r\n            ><ion-card-subtitle\r\n              >هر رنگ، یک دنده است؛ محل تقاطع منحنی‌ها نقطه‌ی تعویض بهینه را\r\n              مشخص می‌کند.</ion-card-subtitle\r\n            ></ion-card-header\r\n          >\r\n          <ion-card-content>\r\n            <svg\r\n              class=\"shift-chart\"\r\n              [attr.viewBox]=\"'0 0 ' + chartWidth + ' ' + chartHeight\"\r\n              role=\"img\"\r\n              aria-label=\"Wheel torque by speed for every gear\"\r\n            >\r\n              <!-- ── Background ───────────────────────────── -->\r\n              <rect class=\"chart-bg\"\r\n                [attr.x]=\"chartLeft\" [attr.y]=\"chartTop\"\r\n                [attr.width]=\"chartPlotWidth\" [attr.height]=\"chartPlotHeight\">\r\n              </rect>\r\n\r\n              <!-- ── X grid + labels ──────────────────────── -->\r\n              <g *ngFor=\"let tick of xTicks\">\r\n                <line class=\"grid-line\"\r\n                  [attr.x1]=\"toX(tick)\" [attr.y1]=\"chartTop\"\r\n                  [attr.x2]=\"toX(tick)\" [attr.y2]=\"chartHeight - chartBottom\">\r\n                </line>\r\n                <text class=\"tick x-tick\"\r\n                  [attr.x]=\"toX(tick)\" [attr.y]=\"chartHeight - chartBottom + 16\">\r\n                  {{ tick }}\r\n                </text>\r\n              </g>\r\n\r\n              <!-- ── Y grid + labels ──────────────────────── -->\r\n              <g *ngFor=\"let tick of yTicks; let ti = index\">\r\n                <line class=\"grid-line\"\r\n                  [attr.x1]=\"chartLeft\" [attr.y1]=\"toY(tick)\"\r\n                  [attr.x2]=\"chartWidth - chartRight\" [attr.y2]=\"toY(tick)\">\r\n                </line>\r\n                <!-- value label -->\r\n                <text class=\"tick y-tick\"\r\n                  [attr.x]=\"chartLeft - 6\" [attr.y]=\"toY(tick) + 4\">\r\n                  {{ yTickLabel(tick) }}\r\n                </text>\r\n                <!-- \"Nm\" unit only on top tick -->\r\n                <text *ngIf=\"ti === yTicks.length - 1\"\r\n                  class=\"tick y-unit\"\r\n                  [attr.x]=\"chartLeft - 6\"\r\n                  [attr.y]=\"toY(tick) - 5\">\r\n                  Nm\r\n                </text>\r\n              </g>\r\n\r\n              <!-- ── Shift-point vertical markers ────────── -->\r\n              <g *ngFor=\"let xPos of shiftLineXPositions; let si = index\">\r\n                <line class=\"shift-line\"\r\n                  [attr.x1]=\"xPos\" [attr.y1]=\"chartTop\"\r\n                  [attr.x2]=\"xPos\" [attr.y2]=\"chartHeight - chartBottom\">\r\n                </line>\r\n                <!-- callout placed at lower 70% of line to avoid Y-tick area -->\r\n                <text class=\"shift-label\"\r\n                  [attr.x]=\"xPos + 4\"\r\n                  [attr.y]=\"chartTop + chartPlotHeight * 0.72\">\r\n                  {{ recommendations[si].shiftRpm | number:'1.0-0' }}\r\n                </text>\r\n                <text class=\"shift-label shift-label-unit\"\r\n                  [attr.x]=\"xPos + 4\"\r\n                  [attr.y]=\"chartTop + chartPlotHeight * 0.72 + 10\">\r\n                  RPM\r\n                </text>\r\n              </g>\r\n\r\n              <!-- ── Gear curves ──────────────────────────── -->\r\n              <path\r\n                *ngFor=\"let path of seriesPaths; let i = index\"\r\n                class=\"gear-path\"\r\n                [attr.d]=\"path\"\r\n                [attr.stroke]=\"chartColors[i]\"\r\n              ></path>\r\n\r\n              <!-- ── Gear number labels on curves ─────────── -->\r\n              <g *ngFor=\"let pos of gearLabelPositions; let i = index\">\r\n                <circle class=\"gear-label-bg\"\r\n                  [attr.cx]=\"pos.x\" [attr.cy]=\"pos.y + 4\"\r\n                  r=\"9\"\r\n                  [attr.fill]=\"chartColors[i]\">\r\n                </circle>\r\n                <text class=\"gear-label\"\r\n                  [attr.x]=\"pos.x\" [attr.y]=\"pos.y + 8\">\r\n                  {{ i + 1 }}\r\n                </text>\r\n              </g>\r\n\r\n              <!-- ── Axis titles ──────────────────────────── -->\r\n              <text class=\"axis-title x-axis-title\"\r\n                [attr.x]=\"chartLeft + chartPlotWidth / 2\"\r\n                [attr.y]=\"chartHeight - 4\">\r\n                سرعت خودرو (km/h)\r\n              </text>\r\n              <text class=\"axis-title y-axis-title\"\r\n                [attr.x]=\"14\"\r\n                [attr.y]=\"chartTop + chartPlotHeight / 2\"\r\n                [attr.transform]=\"'rotate(-90 14 ' + (chartTop + chartPlotHeight / 2) + ')'\">\r\n                گشتاور سر چرخ (Nm)\r\n              </text>\r\n            </svg>\r\n\r\n            <!-- ── Legend ────────────────────────────────── -->\r\n            <div class=\"legend\">\r\n              <div\r\n                *ngFor=\"let gear of getGearRange(); let i = index\"\r\n                class=\"legend-item\"\r\n              >\r\n                <span class=\"legend-swatch\" [style.background]=\"chartColors[i]\"></span>\r\n                <span class=\"legend-label\">دنده {{ gear }}</span>\r\n              </div>\r\n              <div class=\"legend-item shift-legend\">\r\n                <span class=\"legend-swatch shift-swatch\"></span>\r\n                <span class=\"legend-label\">نقطه تعویض</span>\r\n              </div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_gear-shift-optimizer_gear-shift-optimizer_module_ts.js.map