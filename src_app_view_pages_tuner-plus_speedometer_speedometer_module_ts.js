"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_speedometer_speedometer_module_ts"],{

/***/ 26419:
/*!*********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/speedometer/speedometer-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeedometerPageRoutingModule": () => (/* binding */ SpeedometerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _speedometer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speedometer.component */ 7765);




const routes = [
    {
        path: '',
        component: _speedometer_component__WEBPACK_IMPORTED_MODULE_0__.SpeedometerPage
    }
];
let SpeedometerPageRoutingModule = class SpeedometerPageRoutingModule {
};
SpeedometerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpeedometerPageRoutingModule);



/***/ }),

/***/ 7765:
/*!****************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/speedometer/speedometer.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeedometerPage": () => (/* binding */ SpeedometerPage)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _speedometer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speedometer.component.html?ngResource */ 62620);
/* harmony import */ var _speedometer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speedometer.component.scss?ngResource */ 21172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 36457);
/* harmony import */ var _awesome_cordova_plugins_text_to_speech_advanced_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/text-to-speech-advanced/ngx */ 24306);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/common/Urls */ 35602);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);















let SpeedometerPage = class SpeedometerPage {
  constructor(geolocation, router, loadingController, siteService, tts, courseService) {
    this.geolocation = geolocation;
    this.router = router;
    this.loadingController = loadingController;
    this.siteService = siteService;
    this.tts = tts;
    this.courseService = courseService;
    this.isCheck = true;
    this.hasAccess = false;
    this.queryText = '';
    this.showSearchbar = false;
    this.unit = 'kmh';
    this.gpsStatus = 'off';
    this.gpsMessage = 'برای نمایش سرعت، موقعیت مکانی را فعال کن.';
    this.isTracking = false;
    this.hasFix = false;
    this.speedEstimated = false;
    this.lastFixAt = null;
    this.lat = null;
    this.long = null;
    this.speed = null;
    this.heading = null;
    this.altitudeAccuracy = null;
    this.altitude = null;
    this.accuracy = null;
    this.testState = 'idle';
    this.timer0to100 = '0.00';
    this.last0to100Seconds = null;
    this.testMessage = 'از حالت توقف شروع کن؛ زمان‌سنج با حرکت خودرو فعال می‌شود.';
    this.nativeWatch = null;
    this.browserWatchId = null;
    this.gpsWatchdog = null;
    this.sprintTimer = null;
    this.sprintStartedAt = 0;
    this.previousSpeedSample = null;
    this.previousPosition = null;
    this.trackingStartedAt = 0;
    this.check();
  }

  get speedKmh() {
    return this.speed === null ? null : Math.max(0, this.speed * 3.6);
  }

  get mainSpeed() {
    const kmh = this.speedKmh;
    return kmh === null ? null : Math.round(this.unit === 'kmh' ? kmh : kmh / 1.609344);
  }

  get secondarySpeed() {
    const kmh = this.speedKmh;
    return kmh === null ? null : Math.round(this.unit === 'kmh' ? kmh / 1.609344 : kmh);
  }

  get speedProgress() {
    return Math.min(100, (this.speedKmh || 0) / 240 * 100);
  }

  get headingLabel() {
    if (this.heading === null) {
      return '—';
    }

    const directions = ['شمال', 'شمال‌شرق', 'شرق', 'جنوب‌شرق', 'جنوب', 'جنوب‌غرب', 'غرب', 'شمال‌غرب'];
    return directions[Math.round(this.heading / 45) % 8];
  }

  get gpsStatusLabel() {
    const labels = {
      off: 'GPS خاموش',
      connecting: 'در حال دریافت موقعیت',
      ready: 'موقعیت آماده',
      weak: 'دقت پایین',
      error: 'خطای موقعیت'
    };
    return labels[this.gpsStatus];
  }

  ionViewWillEnter() {
    if (this.hasAccess && !this.isTracking) {
      this.startTracking();
    }
  }

  ionViewWillLeave() {
    this.stopTracking();
  }

  ngOnDestroy() {
    this.stopTracking();
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(_this.loadingController);

      _this.siteService.GetTunerPlusById(26).subscribe(res => {
        if (res.status !== src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus || !res.data.isActive) {
          _this.denyAccess();

          return;
        }

        if (res.data.isFree) {
          _this.grantAccess();

          return;
        }

        _this.courseService.GetUserCoursesId().subscribe(courses => {
          const ownsCourse = courses.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus && res.data.courseIds.some(courseId => courses.data.some(id => String(id) === String(courseId)));

          if (!ownsCourse) {
            _this.denyAccess();

            return;
          }

          _this.courseService.GetUserTunerPlusAccess().subscribe(access => access.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus ? _this.grantAccess() : _this.denyAccess(), () => _this.denyAccess());
        }, () => _this.denyAccess());
      }, () => _this.denyAccess());
    })();
  }

  grantAccess() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
    this.isCheck = false;
    this.hasAccess = true;
    this.startTracking();
  }

  denyAccess() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
    this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_8__.Urls.AccessDeniedTunerPlusUrl);
  }

  startTracking() {
    if (!this.hasAccess || this.isTracking) {
      return;
    }

    this.gpsStatus = 'connecting';
    this.gpsMessage = 'در انتظار اجازه و نخستین موقعیت GPS…';
    this.hasFix = false;
    this.lastFixAt = null;
    this.previousPosition = null;
    this.previousSpeedSample = null;
    this.isTracking = true;
    this.trackingStartedAt = Date.now();

    try {
      if (src_app_core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.IsAndroid) {
        this.nativeWatch = this.geolocation.watchPosition({
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 15000
        }).subscribe(data => {
          if (data && 'coords' in data && data.coords) {
            this.handlePosition(data);
          } else {
            this.handleGpsError(data);
          }
        }, error => this.handleGpsError(error));
      } else if (typeof navigator !== 'undefined' && navigator.geolocation) {
        this.browserWatchId = navigator.geolocation.watchPosition(position => this.handlePosition(position), error => this.handleGpsError(error), {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 15000
        });
      } else {
        this.handleGpsError({
          code: 2
        });
        return;
      }

      if (!this.isTracking) {
        return;
      }

      this.gpsWatchdog = setInterval(() => {
        const lastSignalAt = this.lastFixAt === null ? this.trackingStartedAt : this.lastFixAt;

        if (this.isTracking && Date.now() - lastSignalAt > 15000) {
          this.gpsStatus = 'weak';
          this.gpsMessage = 'دادهٔ GPS تازه دریافت نشده؛ در فضای باز دوباره تلاش کن.';
          this.speed = null;
          this.hasFix = false;

          if (this.testState === 'armed' || this.testState === 'running') {
            this.cancelSprint('ارتباط GPS قطع شد؛ آزمون لغو شد.');
          }
        }
      }, 5000);
    } catch (error) {
      this.handleGpsError(error);
    }
  }

  stopTracking() {
    this.clearWatch();
    this.isTracking = false;
    this.hasFix = false;
    this.speed = null;
    this.gpsStatus = 'off';
    this.gpsMessage = 'GPS متوقف شده است.';

    if (this.testState === 'armed' || this.testState === 'running') {
      this.cancelSprint('GPS متوقف شد؛ آزمون لغو شد.');
    }
  }

  clearWatch() {
    if (this.nativeWatch) {
      this.nativeWatch.unsubscribe();
      this.nativeWatch = null;
    }

    if (this.browserWatchId !== null && typeof navigator !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.clearWatch(this.browserWatchId);
      this.browserWatchId = null;
    }

    if (this.gpsWatchdog) {
      clearInterval(this.gpsWatchdog);
      this.gpsWatchdog = null;
    }
  }

  handleGpsError(error) {
    this.clearWatch();
    this.isTracking = false;
    this.hasFix = false;
    this.speed = null;
    this.gpsStatus = 'error';
    this.gpsMessage = error && error.code === 1 ? 'دسترسی به موقعیت مکانی رد شد؛ مجوز GPS را در تنظیمات مرورگر یا دستگاه فعال کن.' : error && error.code === 3 ? 'دریافت موقعیت به‌موقع انجام نشد؛ در فضای باز دوباره تلاش کن.' : 'موقعیت مکانی در دسترس نیست؛ GPS و اتصال دستگاه را بررسی کن.';

    if (this.testState === 'armed' || this.testState === 'running') {
      this.cancelSprint('GPS در دسترس نیست؛ آزمون لغو شد.');
    }
  }

  handlePosition(position) {
    if (!this.isTracking) {
      return;
    }

    const coords = position.coords;

    if (!Number.isFinite(coords.latitude) || !Number.isFinite(coords.longitude)) {
      return;
    }

    const now = performance.now();
    const accuracy = Number.isFinite(coords.accuracy) ? coords.accuracy : null;
    const nativeSpeed = coords.speed;
    const hasNativeSpeed = typeof nativeSpeed === 'number' && Number.isFinite(nativeSpeed) && nativeSpeed >= 0;
    const measuredSpeed = hasNativeSpeed ? nativeSpeed : this.estimateSpeed(coords.latitude, coords.longitude, accuracy, now);
    this.lat = coords.latitude;
    this.long = coords.longitude;
    this.accuracy = accuracy;
    this.altitude = coords.altitude !== null && Number.isFinite(coords.altitude) ? coords.altitude : null;
    this.altitudeAccuracy = coords.altitudeAccuracy !== null && Number.isFinite(coords.altitudeAccuracy) ? coords.altitudeAccuracy : null;
    this.heading = coords.heading !== null && Number.isFinite(coords.heading) && coords.heading >= 0 ? coords.heading : null;
    this.speed = measuredSpeed;
    this.speedEstimated = !hasNativeSpeed && measuredSpeed !== null;
    this.hasFix = true;
    this.lastFixAt = Date.now();

    if (!this.previousPosition || hasNativeSpeed || now - this.previousPosition.atMs >= 1000) {
      this.previousPosition = {
        lat: coords.latitude,
        lon: coords.longitude,
        accuracy,
        atMs: now
      };
    }

    const precise = accuracy !== null && accuracy <= 30;
    this.gpsStatus = precise && hasNativeSpeed ? 'ready' : 'weak';
    this.gpsMessage = !precise ? 'دقت موقعیت برای آزمون ۰ تا ۱۰۰ کافی نیست؛ به فضای باز برو.' : !hasNativeSpeed ? 'سرعت از جابه‌جایی موقعیت تخمین زده شده و برای آزمون مناسب نیست.' : 'موقعیت و سرعت GPS دریافت می‌شود.';

    if ((this.testState === 'armed' || this.testState === 'running') && (!precise || !hasNativeSpeed)) {
      this.cancelSprint('دقت GPS افت کرد؛ آزمون لغو شد.');
      return;
    }

    if (precise && hasNativeSpeed) {
      this.handleSprintSample(Math.max(0, measuredSpeed * 3.6), now);
    }
  }

  estimateSpeed(lat, lon, accuracy, now) {
    const previous = this.previousPosition;

    if (!previous || accuracy === null || accuracy > 30 || previous.accuracy === null || previous.accuracy > 30) {
      return null;
    }

    const seconds = (now - previous.atMs) / 1000;

    if (seconds < 1) {
      return null;
    }

    const toRadians = Math.PI / 180;
    const dLat = (lat - previous.lat) * toRadians;
    const dLon = (lon - previous.lon) * toRadians;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(previous.lat * toRadians) * Math.cos(lat * toRadians) * Math.sin(dLon / 2) ** 2;
    const meters = 6371000 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const metersPerSecond = meters / seconds;
    return metersPerSecond <= 90 ? metersPerSecond : null;
  }

  setUnit(next) {
    this.unit = next;
  }

  onStart0to100() {
    const currentSpeed = this.speedKmh;

    if (!this.isTracking || this.gpsStatus !== 'ready' || this.lastFixAt === null || Date.now() - this.lastFixAt > 5000 || currentSpeed === null || currentSpeed > 2) {
      this.testMessage = 'برای شروع، GPS دقیق و سرعت کمتر از ۲ کیلومتر بر ساعت لازم است.';
      return;
    }

    this.testState = 'armed';
    this.timer0to100 = '0.00';
    this.testMessage = 'آمادهٔ حرکت؛ زمان‌سنج از لحظهٔ عبور از ۳ کیلومتر بر ساعت آغاز می‌شود.';
    this.previousSpeedSample = {
      speedKmh: currentSpeed,
      atMs: performance.now()
    };
  }

  onStop0to100() {
    this.cancelSprint('آزمون لغو شد؛ برای تلاش دوباره از حالت توقف شروع کن.');
  }

  cancelSprint(message) {
    if (this.sprintTimer) {
      clearInterval(this.sprintTimer);
      this.sprintTimer = null;
    }

    this.testState = 'idle';
    this.timer0to100 = '0.00';
    this.testMessage = message;
  }

  handleSprintSample(speedKmh, atMs) {
    const previous = this.previousSpeedSample;

    if (this.testState === 'armed' && speedKmh >= 3) {
      const fraction = previous && speedKmh > previous.speedKmh ? Math.max(0, Math.min(1, (3 - previous.speedKmh) / (speedKmh - previous.speedKmh))) : 1;
      this.sprintStartedAt = previous ? previous.atMs + fraction * (atMs - previous.atMs) : atMs;
      this.testState = 'running';
      this.testMessage = 'در حال اندازه‌گیری تا ۱۰۰ کیلومتر بر ساعت…';
      this.sprintTimer = setInterval(() => {
        this.timer0to100 = ((performance.now() - this.sprintStartedAt) / 1000).toFixed(2);
      }, 100);
    }

    if (this.testState === 'running' && speedKmh >= 100) {
      const fraction = previous && speedKmh > previous.speedKmh ? Math.max(0, Math.min(1, (100 - previous.speedKmh) / (speedKmh - previous.speedKmh))) : 1;
      const finishedAt = previous ? previous.atMs + fraction * (atMs - previous.atMs) : atMs;
      const seconds = Math.max(0, (finishedAt - this.sprintStartedAt) / 1000);

      if (this.sprintTimer) {
        clearInterval(this.sprintTimer);
        this.sprintTimer = null;
      }

      this.last0to100Seconds = Math.round(seconds * 100) / 100;
      this.timer0to100 = this.last0to100Seconds.toFixed(2);
      this.testState = 'completed';
      this.testMessage = 'آزمون کامل شد. نتیجهٔ GPS تخمینی است و به نرخ نمونه‌برداری دستگاه وابسته است.';

      if (src_app_core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.IsAndroid && src_app_core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.voice) {
        this.tts.speak('100').catch(() => undefined);
      }
    }

    this.previousSpeedSample = {
      speedKmh,
      atMs
    };
  }

  search() {
    if (!this.queryText) {
      return;
    }

    this.router.navigate(['Home', 'Search'], {
      queryParams: {
        title: this.queryText
      }
    });
  }

  onCancel() {
    this.showSearchbar = false;
  }

};

SpeedometerPage.ctorParameters = () => [{
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_10__.SliderService
}, {
  type: _awesome_cordova_plugins_text_to_speech_advanced_ngx__WEBPACK_IMPORTED_MODULE_4__.TextToSpeechAdvanced
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_9__.CourseService
}];

SpeedometerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-speedometer',
  template: _speedometer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_speedometer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SpeedometerPage);


/***/ }),

/***/ 75733:
/*!*************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/speedometer/speedometer.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeedometerPageModule": () => (/* binding */ SpeedometerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _speedometer_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speedometer-routing.module */ 26419);
/* harmony import */ var _speedometer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speedometer.component */ 7765);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var _awesome_cordova_plugins_text_to_speech_advanced_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/text-to-speech-advanced/ngx */ 24306);











let SpeedometerPageModule = class SpeedometerPageModule {
};
SpeedometerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _speedometer_routing_module__WEBPACK_IMPORTED_MODULE_1__.SpeedometerPageRoutingModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ],
        declarations: [_speedometer_component__WEBPACK_IMPORTED_MODULE_2__.SpeedometerPage],
        providers: [
            _awesome_cordova_plugins_text_to_speech_advanced_ngx__WEBPACK_IMPORTED_MODULE_5__.TextToSpeechAdvanced
        ]
    })
], SpeedometerPageModule);



/***/ }),

/***/ 24306:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/text-to-speech-advanced/__ivy_ngcc__/ngx/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextToSpeechAdvanced": () => (/* binding */ TextToSpeechAdvanced)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 84624);





var TextToSpeechAdvanced =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(TextToSpeechAdvanced, _super);

  function TextToSpeechAdvanced() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TextToSpeechAdvanced.prototype.speak = function (textOrOptions) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "speak", {
      "successIndex": 1,
      "errorIndex": 2
    }, arguments);
  };

  TextToSpeechAdvanced.prototype.stop = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stop", {}, arguments);
  };

  TextToSpeechAdvanced.prototype.getVoices = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getVoices", {}, arguments);
  };

  TextToSpeechAdvanced.pluginName = "Text To Speech Advanced";
  TextToSpeechAdvanced.plugin = "cordova-plugin-tts-advanced";
  TextToSpeechAdvanced.pluginRef = "TTS";
  TextToSpeechAdvanced.repo = "https://github.com/spasma/cordova-plugin-tts-advanced";
  TextToSpeechAdvanced.platforms = ["Android", "iOS"];

  TextToSpeechAdvanced.ɵfac = /*@__PURE__*/function () {
    var ɵTextToSpeechAdvanced_BaseFactory;
    return function TextToSpeechAdvanced_Factory(t) {
      return (ɵTextToSpeechAdvanced_BaseFactory || (ɵTextToSpeechAdvanced_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TextToSpeechAdvanced)))(t || TextToSpeechAdvanced);
    };
  }();

  TextToSpeechAdvanced.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TextToSpeechAdvanced,
    factory: function (t) {
      return TextToSpeechAdvanced.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TextToSpeechAdvanced, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();

  return TextToSpeechAdvanced;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



/***/ }),

/***/ 21172:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/speedometer/speedometer.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --sp-surface: #fff;\n  --sp-text: #22272f;\n  --sp-muted: #66717d;\n  --sp-soft: #f5f6f8;\n  --sp-line: rgba(30, 37, 46, .11);\n}\n\n:host-context(.dark-theme) {\n  --sp-surface: #1b1e23;\n  --sp-text: #f3f5f7;\n  --sp-muted: #a9b0bb;\n  --sp-soft: #252a30;\n  --sp-line: rgba(255, 255, 255, .12);\n}\n\n.speed-page {\n  max-width: 1190px;\n  margin: 0 auto;\n  padding: 24px 18px 52px;\n  color: var(--sp-text);\n}\n\n.speed-hero {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 28px;\n  overflow: hidden;\n  padding: 30px 36px;\n  border-radius: 23px;\n  background: radial-gradient(circle at 6% 6%, rgba(212, 40, 49, 0.24), transparent 44%), linear-gradient(128deg, #272a30, #121518 74%);\n  box-shadow: 0 16px 36px rgba(14, 17, 23, 0.17);\n  color: #fff;\n}\n\n.speed-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: #ff8086;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.11em;\n}\n\n.speed-hero h1 {\n  margin: 11px 0 5px;\n  font-size: clamp(25px, 3vw, 38px);\n  font-weight: 850;\n}\n\n.speed-hero p {\n  max-width: 540px;\n  margin: 0;\n  color: #cbd0d6;\n  font-size: 13px;\n  line-height: 1.9;\n}\n\n.tracking-actions {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 10px;\n  min-width: 190px;\n}\n\n.tracking-actions button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  min-height: 42px;\n  padding: 8px 15px;\n  border: 1px solid rgba(255, 255, 255, 0.23);\n  border-radius: 11px;\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  cursor: pointer;\n  font: inherit;\n  font-size: 12px;\n  font-weight: 750;\n  transition: background 0.2s ease;\n}\n\n.tracking-actions button:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.gps-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 38px;\n  padding: 7px 11px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 100px;\n  background: rgba(255, 255, 255, 0.065);\n  color: #d5d9df;\n  font-size: 11px;\n}\n\n.gps-pill i {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--tuner-border, #8e96a2);\n}\n\n.gps-pill.is-ready i {\n  background: #4cc386;\n  box-shadow: 0 0 0 4px rgba(76, 195, 134, 0.16);\n}\n\n.gps-pill.is-weak i {\n  background: #e7aa4a;\n}\n\n.gps-pill.is-error i {\n  background: #f1636c;\n}\n\n.gps-notice {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 43px;\n  margin: 16px 0;\n  padding: 10px 13px;\n  border: 1px solid var(--sp-line);\n  border-radius: 12px;\n  background: var(--sp-surface);\n  color: var(--sp-muted);\n  font-size: 11px;\n  line-height: 1.7;\n}\n\n.gps-notice ion-icon {\n  flex: 0 0 auto;\n  color: var(--ion-color-primary);\n  font-size: 18px;\n}\n\n.gps-notice.is-error ion-icon {\n  color: var(--ion-color-danger);\n}\n\n.gps-notice small {\n  margin-right: auto;\n  white-space: nowrap;\n  font-size: 10px;\n}\n\n.speed-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.35fr) minmax(295px, 0.8fr);\n  gap: 17px;\n}\n\n.speed-panel {\n  min-width: 0;\n  padding: 24px;\n  border: 1px solid var(--sp-line);\n  border-radius: 19px;\n  background: var(--sp-surface);\n  box-shadow: 0 9px 25px rgba(14, 17, 23, 0.05);\n}\n\n.panel-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 13px;\n  margin-bottom: 18px;\n}\n\n.panel-kicker {\n  color: var(--ion-color-primary);\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.12em;\n}\n\n.panel-heading h2 {\n  margin: 4px 0 0;\n  color: var(--sp-text);\n  font-size: 19px;\n  font-weight: 800;\n}\n\n.panel-icon {\n  color: var(--ion-color-primary);\n  font-size: 24px;\n}\n\n.unit-switch {\n  display: flex;\n  gap: 3px;\n  padding: 4px;\n  border: 1px solid var(--sp-line);\n  border-radius: 10px;\n  background: var(--sp-soft);\n  direction: ltr;\n}\n\n.unit-switch button {\n  padding: 6px 10px;\n  border: 0;\n  border-radius: 7px;\n  background: transparent;\n  color: var(--sp-muted);\n  cursor: pointer;\n  font: inherit;\n  font-size: 11px;\n}\n\n.unit-switch button.is-active {\n  background: var(--sp-surface);\n  color: var(--ion-color-primary);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  font-weight: 800;\n}\n\n.speed-display {\n  position: relative;\n  overflow: hidden;\n  padding: 31px 27px 18px;\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 16px;\n  background: radial-gradient(circle at 50% 0%, rgba(206, 39, 48, 0.18), transparent 58%), #171b20;\n  color: #fff;\n}\n\n.speed-display__glow {\n  position: absolute;\n  width: 270px;\n  height: 270px;\n  left: -55px;\n  bottom: -200px;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 50%;\n  box-shadow: 0 0 0 33px rgba(255, 255, 255, 0.025), 0 0 0 66px rgba(255, 255, 255, 0.02);\n  pointer-events: none;\n}\n\n.speed-display__value {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.speed-display__value > span {\n  color: #ff858c;\n  font-size: 10px;\n  font-weight: 850;\n  letter-spacing: 0.17em;\n}\n\n.speed-display__value strong {\n  min-height: 104px;\n  font-size: clamp(70px, 9vw, 116px);\n  font-weight: 900;\n  line-height: 1.2;\n  direction: ltr;\n}\n\n.speed-display__value small {\n  color: #d8dce2;\n  font-size: 12px;\n}\n\n.speed-track {\n  height: 8px;\n  margin-top: 35px;\n  overflow: hidden;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.14);\n  direction: ltr;\n}\n\n.speed-track span {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, #9e1b28, #ef626c);\n  transition: width 0.5s ease;\n}\n\n.speed-scale {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 8px;\n  color: #a9b0ba;\n  direction: ltr;\n  font-size: 9px;\n}\n\n.speed-subline {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-top: 16px;\n  padding: 0 3px;\n}\n\n.speed-subline span {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--sp-muted);\n  font-size: 11px;\n}\n\n.speed-subline strong {\n  font-size: 20px;\n  direction: ltr;\n}\n\n.speed-subline small {\n  color: var(--sp-muted);\n  font-size: 10px;\n}\n\n.speed-source {\n  display: flex;\n  gap: 6px;\n  margin: 15px 0 0;\n  color: var(--ion-color-warning-shade);\n  font-size: 11px;\n  line-height: 1.7;\n}\n\n.speed-source ion-icon {\n  flex: 0 0 auto;\n  margin-top: 2px;\n}\n\n.sprint-panel {\n  display: flex;\n  flex-direction: column;\n}\n\n.sprint-timer {\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  gap: 8px;\n  min-height: 119px;\n  padding: 17px 8px;\n  border-radius: 14px;\n  background: var(--sp-soft);\n}\n\n.sprint-timer strong {\n  color: var(--sp-text);\n  font-size: clamp(48px, 5vw, 70px);\n  font-weight: 850;\n  direction: ltr;\n}\n\n.sprint-timer span {\n  color: var(--sp-muted);\n  font-size: 12px;\n}\n\n.sprint-timer.is-running strong {\n  color: var(--ion-color-primary);\n}\n\n.sprint-timer.is-complete {\n  background: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.sprint-timer.is-complete strong {\n  color: var(--ion-color-primary);\n}\n\n.sprint-state {\n  min-height: 39px;\n  margin: 15px 0 12px;\n  color: var(--sp-muted);\n  font-size: 11px;\n  line-height: 1.8;\n}\n\n.sprint-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  min-height: 44px;\n  padding: 9px 13px;\n  border: 0;\n  border-radius: 10px;\n  background: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast);\n  cursor: pointer;\n  font: inherit;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.sprint-action:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n\n.sprint-action--stop {\n  background: var(--sp-soft);\n  color: var(--sp-text);\n  border: 1px solid var(--sp-line);\n}\n\n.last-run {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-top: auto;\n  padding-top: 17px;\n  color: var(--sp-muted);\n  font-size: 11px;\n}\n\n.last-run strong {\n  color: var(--sp-text);\n  font-size: 17px;\n}\n\n.last-run small {\n  color: var(--sp-muted);\n  font-size: 10px;\n}\n\n.telemetry-panel {\n  margin-top: 17px;\n}\n\n.telemetry-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.telemetry-item {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 7px;\n  min-width: 0;\n  min-height: 102px;\n  padding: 15px;\n  border: 1px solid var(--sp-line);\n  border-radius: 12px;\n  background: var(--sp-soft);\n}\n\n.telemetry-item > ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 19px;\n}\n\n.telemetry-item span {\n  color: var(--sp-muted);\n  font-size: 11px;\n}\n\n.telemetry-item strong {\n  color: var(--sp-text);\n  font-size: 18px;\n  font-weight: 800;\n  overflow-wrap: anywhere;\n}\n\n.telemetry-item small {\n  color: var(--sp-muted);\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.telemetry-item--coordinate strong {\n  font-size: 15px;\n}\n\n.safety-note {\n  display: flex;\n  gap: 7px;\n  margin: 17px 0 0;\n  color: var(--sp-muted);\n  font-size: 11px;\n  line-height: 1.8;\n}\n\n.safety-note ion-icon {\n  flex: 0 0 auto;\n  margin-top: 2px;\n  color: var(--ion-color-primary);\n  font-size: 17px;\n}\n\n@media (max-width: 850px) {\n  .speed-layout {\n    grid-template-columns: 1fr;\n  }\n\n  .sprint-panel {\n    min-height: 0;\n  }\n}\n\n@media (max-width: 600px) {\n  .speed-page {\n    padding: 14px 12px 45px;\n  }\n\n  .speed-hero {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 19px;\n    padding: 24px 20px;\n  }\n\n  .tracking-actions {\n    flex-direction: row;\n    flex-wrap: wrap;\n    min-width: 0;\n  }\n\n  .tracking-actions > * {\n    flex: 1;\n  }\n\n  .gps-notice {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n\n  .gps-notice small {\n    flex-basis: 100%;\n    margin-right: 26px;\n  }\n\n  .speed-panel {\n    padding: 18px 15px;\n  }\n\n  .telemetry-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .speed-display {\n    padding: 27px 16px 17px;\n  }\n}\n\n@media (max-width: 370px) {\n  .unit-switch button {\n    padding: 6px;\n  }\n\n  .telemetry-item {\n    padding: 12px;\n  }\n\n  .telemetry-item--coordinate strong {\n    font-size: 12px;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .speed-track span, .tracking-actions button {\n    transition: none;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWVkb21ldGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXF90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUlBQUE7RUFDQSw4Q0FBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUFvQixhQUFBO0VBQWUsc0JBQUE7RUFBd0Isb0JBQUE7RUFBc0IsU0FBQTtFQUFXLGdCQUFBO0FBSTVGOztBQUhBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQU1GOztBQUpBO0VBQWlDLG9DQUFBO0FBUWpDOztBQU5BO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFB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O0FDempCSTtFQUFXLGdDQUFBO0FENGpCZjs7QUMzakJJO0VBQW9DLHdCQUFBO0FEOGpCeEM7O0FDN2pCSTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FEK2pCTjs7QUM3akJJO0VBQWtELG1DQUFBO0FEZ2tCdEQiLCJmaWxlIjoic3BlZWRvbWV0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi90aGVtZSc7XG5cbjpob3N0IHtcbiAgLS1zcC1zdXJmYWNlOiAjZmZmO1xuICAtLXNwLXRleHQ6ICMyMjI3MmY7XG4gIC0tc3AtbXV0ZWQ6ICM2NjcxN2Q7XG4gIC0tc3Atc29mdDogI2Y1ZjZmODtcbiAgLS1zcC1saW5lOiByZ2JhKDMwLCAzNywgNDYsIC4xMSk7XG59XG5cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgLS1zcC1zdXJmYWNlOiAjMWIxZTIzO1xuICAtLXNwLXRleHQ6ICNmM2Y1Zjc7XG4gIC0tc3AtbXV0ZWQ6ICNhOWIwYmI7XG4gIC0tc3Atc29mdDogIzI1MmEzMDtcbiAgLS1zcC1saW5lOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xMik7XG59XG5cbi5zcGVlZC1wYWdlIHtcbiAgbWF4LXdpZHRoOiAxMTkwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyNHB4IDE4cHggNTJweDtcbiAgY29sb3I6IHZhcigtLXNwLXRleHQpO1xufVxuXG4uc3BlZWQtaGVybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAyOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAzMHB4IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNiUgNiUsIHJnYmEoMjEyLCA0MCwgNDksIC4yNCksIHRyYW5zcGFyZW50IDQ0JSksIGxpbmVhci1ncmFkaWVudCgxMjhkZWcsICMyNzJhMzAsICMxMjE1MTggNzQlKTtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDM2cHggcmdiYSgxNCwgMTcsIDIzLCAuMTcpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNwZWVkLWV5ZWJyb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG4gIGNvbG9yOiAjZmY4MDg2O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuMTFlbTtcbn1cblxuLnNwZWVkLWhlcm8gaDEge1xuICBtYXJnaW46IDExcHggMCA1cHg7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMjVweCwgM3Z3LCAzOHB4KTtcbiAgZm9udC13ZWlnaHQ6IDg1MDtcbn1cblxuLnNwZWVkLWhlcm8gcCB7XG4gIG1heC13aWR0aDogNTQwcHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNjYmQwZDY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuOTtcbn1cblxuLnRyYWNraW5nLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogc3RyZXRjaDsgZ2FwOiAxMHB4OyBtaW4td2lkdGg6IDE5MHB4OyB9XG4udHJhY2tpbmctYWN0aW9ucyBidXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogN3B4O1xuICBtaW4taGVpZ2h0OiA0MnB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMjMpO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzUwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlO1xufVxuLnRyYWNraW5nLWFjdGlvbnMgYnV0dG9uOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7IH1cblxuLmdwcy1waWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWluLWhlaWdodDogMzhweDtcbiAgcGFkZGluZzogN3B4IDExcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA2NSk7XG4gIGNvbG9yOiAjZDVkOWRmO1xuICBmb250LXNpemU6IDExcHg7XG59XG4uZ3BzLXBpbGwgaSB7IHdpZHRoOiA4cHg7IGhlaWdodDogOHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6IHR1bmVyLWNvbG9yKGJvcmRlciwgIzhlOTZhMik7IH1cbi5ncHMtcGlsbC5pcy1yZWFkeSBpIHsgYmFja2dyb3VuZDogIzRjYzM4NjsgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoNzYsIDE5NSwgMTM0LCAuMTYpOyB9XG4uZ3BzLXBpbGwuaXMtd2VhayBpIHsgYmFja2dyb3VuZDogI2U3YWE0YTsgfVxuLmdwcy1waWxsLmlzLWVycm9yIGkgeyBiYWNrZ3JvdW5kOiAjZjE2MzZjOyB9XG5cbi5ncHMtbm90aWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIG1pbi1oZWlnaHQ6IDQzcHg7XG4gIG1hcmdpbjogMTZweCAwO1xuICBwYWRkaW5nOiAxMHB4IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNwLWxpbmUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zcC1zdXJmYWNlKTtcbiAgY29sb3I6IHZhcigtLXNwLW11dGVkKTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuLmdwcy1ub3RpY2UgaW9uLWljb24geyBmbGV4OiAwIDAgYXV0bzsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgZm9udC1zaXplOiAxOHB4OyB9XG4uZ3BzLW5vdGljZS5pcy1lcnJvciBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgfVxuLmdwcy1ub3RpY2Ugc21hbGwgeyBtYXJnaW4tcmlnaHQ6IGF1dG87IHdoaXRlLXNwYWNlOiBub3dyYXA7IGZvbnQtc2l6ZTogMTBweDsgfVxuXG4uc3BlZWQtbGF5b3V0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMS4zNWZyKSBtaW5tYXgoMjk1cHgsIC44ZnIpO1xuICBnYXA6IDE3cHg7XG59XG5cbi5zcGVlZC1wYW5lbCB7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3AtbGluZSk7XG4gIGJvcmRlci1yYWRpdXM6IDE5cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNwLXN1cmZhY2UpO1xuICBib3gtc2hhZG93OiAwIDlweCAyNXB4IHJnYmEoMTQsIDE3LCAyMywgLjA1KTtcbn1cblxuLnBhbmVsLWhlYWRpbmcgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDEzcHg7IG1hcmdpbi1ib3R0b206IDE4cHg7IH1cbi5wYW5lbC1raWNrZXIgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA4NTA7IGxldHRlci1zcGFjaW5nOiAuMTJlbTsgfVxuLnBhbmVsLWhlYWRpbmcgaDIgeyBtYXJnaW46IDRweCAwIDA7IGNvbG9yOiB2YXIoLS1zcC10ZXh0KTsgZm9udC1zaXplOiAxOXB4OyBmb250LXdlaWdodDogODAwOyB9XG4ucGFuZWwtaWNvbiB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IGZvbnQtc2l6ZTogMjRweDsgfVxuXG4udW5pdC1zd2l0Y2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDNweDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zcC1saW5lKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3Atc29mdCk7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuLnVuaXQtc3dpdGNoIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1zcC1tdXRlZCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLnVuaXQtc3dpdGNoIGJ1dHRvbi5pcy1hY3RpdmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1zcC1zdXJmYWNlKTsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgLjA4KTsgZm9udC13ZWlnaHQ6IDgwMDsgfVxuXG4uc3BlZWQtZGlzcGxheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMzFweCAyN3B4IDE4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA5KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1MCUgMCUsIHJnYmEoMjA2LCAzOSwgNDgsIC4xOCksIHRyYW5zcGFyZW50IDU4JSksICMxNzFiMjA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNwZWVkLWRpc3BsYXlfX2dsb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgbGVmdDogLTU1cHg7XG4gIGJvdHRvbTogLTIwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMzNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wMjUpLCAwIDAgMCA2NnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjAyKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uc3BlZWQtZGlzcGxheV9fdmFsdWUgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbi5zcGVlZC1kaXNwbGF5X192YWx1ZSA+IHNwYW4geyBjb2xvcjogI2ZmODU4YzsgZm9udC1zaXplOiAxMHB4OyBmb250LXdlaWdodDogODUwOyBsZXR0ZXItc3BhY2luZzogLjE3ZW07IH1cbi5zcGVlZC1kaXNwbGF5X192YWx1ZSBzdHJvbmcgeyBtaW4taGVpZ2h0OiAxMDRweDsgZm9udC1zaXplOiBjbGFtcCg3MHB4LCA5dncsIDExNnB4KTsgZm9udC13ZWlnaHQ6IDkwMDsgbGluZS1oZWlnaHQ6IDEuMjsgZGlyZWN0aW9uOiBsdHI7IH1cbi5zcGVlZC1kaXNwbGF5X192YWx1ZSBzbWFsbCB7IGNvbG9yOiAjZDhkY2UyOyBmb250LXNpemU6IDEycHg7IH1cbi5zcGVlZC10cmFjayB7IGhlaWdodDogOHB4OyBtYXJnaW4tdG9wOiAzNXB4OyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXItcmFkaXVzOiAyMHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNCk7IGRpcmVjdGlvbjogbHRyOyB9XG4uc3BlZWQtdHJhY2sgc3BhbiB7IGRpc3BsYXk6IGJsb2NrOyBoZWlnaHQ6IDEwMCU7IGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzllMWIyOCwgI2VmNjI2Yyk7IHRyYW5zaXRpb246IHdpZHRoIC41cyBlYXNlOyB9XG4uc3BlZWQtc2NhbGUgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IG1hcmdpbi10b3A6IDhweDsgY29sb3I6ICNhOWIwYmE7IGRpcmVjdGlvbjogbHRyOyBmb250LXNpemU6IDlweDsgfVxuXG4uc3BlZWQtc3VibGluZSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxMnB4OyBtYXJnaW4tdG9wOiAxNnB4OyBwYWRkaW5nOiAwIDNweDsgfVxuLnNwZWVkLXN1YmxpbmUgc3BhbiB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgY29sb3I6IHZhcigtLXNwLW11dGVkKTsgZm9udC1zaXplOiAxMXB4OyB9XG4uc3BlZWQtc3VibGluZSBzdHJvbmcgeyBmb250LXNpemU6IDIwcHg7IGRpcmVjdGlvbjogbHRyOyB9XG4uc3BlZWQtc3VibGluZSBzbWFsbCB7IGNvbG9yOiB2YXIoLS1zcC1tdXRlZCk7IGZvbnQtc2l6ZTogMTBweDsgfVxuLnNwZWVkLXNvdXJjZSB7IGRpc3BsYXk6IGZsZXg7IGdhcDogNnB4OyBtYXJnaW46IDE1cHggMCAwOyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpOyBmb250LXNpemU6IDExcHg7IGxpbmUtaGVpZ2h0OiAxLjc7IH1cbi5zcGVlZC1zb3VyY2UgaW9uLWljb24geyBmbGV4OiAwIDAgYXV0bzsgbWFyZ2luLXRvcDogMnB4OyB9XG5cbi5zcHJpbnQtcGFuZWwgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4uc3ByaW50LXRpbWVyIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGJhc2VsaW5lOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA4cHg7IG1pbi1oZWlnaHQ6IDExOXB4OyBwYWRkaW5nOiAxN3B4IDhweDsgYm9yZGVyLXJhZGl1czogMTRweDsgYmFja2dyb3VuZDogdmFyKC0tc3Atc29mdCk7IH1cbi5zcHJpbnQtdGltZXIgc3Ryb25nIHsgY29sb3I6IHZhcigtLXNwLXRleHQpOyBmb250LXNpemU6IGNsYW1wKDQ4cHgsIDV2dywgNzBweCk7IGZvbnQtd2VpZ2h0OiA4NTA7IGRpcmVjdGlvbjogbHRyOyB9XG4uc3ByaW50LXRpbWVyIHNwYW4geyBjb2xvcjogdmFyKC0tc3AtbXV0ZWQpOyBmb250LXNpemU6IDEycHg7IH1cbi5zcHJpbnQtdGltZXIuaXMtcnVubmluZyBzdHJvbmcgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyB9XG4uc3ByaW50LXRpbWVyLmlzLWNvbXBsZXRlIHsgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAuMSk7IH1cbi5zcHJpbnQtdGltZXIuaXMtY29tcGxldGUgc3Ryb25nIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgfVxuLnNwcmludC1zdGF0ZSB7IG1pbi1oZWlnaHQ6IDM5cHg7IG1hcmdpbjogMTVweCAwIDEycHg7IGNvbG9yOiB2YXIoLS1zcC1tdXRlZCk7IGZvbnQtc2l6ZTogMTFweDsgbGluZS1oZWlnaHQ6IDEuODsgfVxuLnNwcmludC1hY3Rpb24geyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogN3B4OyB3aWR0aDogMTAwJTsgbWluLWhlaWdodDogNDRweDsgcGFkZGluZzogOXB4IDEzcHg7IGJvcmRlcjogMDsgYm9yZGVyLXJhZGl1czogMTBweDsgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQ6IGluaGVyaXQ7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDgwMDsgfVxuLnNwcmludC1hY3Rpb246ZGlzYWJsZWQgeyBvcGFjaXR5OiAuNDU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbi5zcHJpbnQtYWN0aW9uLS1zdG9wIHsgYmFja2dyb3VuZDogdmFyKC0tc3Atc29mdCk7IGNvbG9yOiB2YXIoLS1zcC10ZXh0KTsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3AtbGluZSk7IH1cbi5sYXN0LXJ1biB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiA4cHg7IG1hcmdpbi10b3A6IGF1dG87IHBhZGRpbmctdG9wOiAxN3B4OyBjb2xvcjogdmFyKC0tc3AtbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IH1cbi5sYXN0LXJ1biBzdHJvbmcgeyBjb2xvcjogdmFyKC0tc3AtdGV4dCk7IGZvbnQtc2l6ZTogMTdweDsgfVxuLmxhc3QtcnVuIHNtYWxsIHsgY29sb3I6IHZhcigtLXNwLW11dGVkKTsgZm9udC1zaXplOiAxMHB4OyB9XG5cbi50ZWxlbWV0cnktcGFuZWwgeyBtYXJnaW4tdG9wOiAxN3B4OyB9XG4udGVsZW1ldHJ5LWdyaWQgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7IGdhcDogMTBweDsgfVxuLnRlbGVtZXRyeS1pdGVtIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGdhcDogN3B4OyBtaW4td2lkdGg6IDA7IG1pbi1oZWlnaHQ6IDEwMnB4OyBwYWRkaW5nOiAxNXB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zcC1saW5lKTsgYm9yZGVyLXJhZGl1czogMTJweDsgYmFja2dyb3VuZDogdmFyKC0tc3Atc29mdCk7IH1cbi50ZWxlbWV0cnktaXRlbSA+IGlvbi1pY29uIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgZm9udC1zaXplOiAxOXB4OyB9XG4udGVsZW1ldHJ5LWl0ZW0gc3BhbiB7IGNvbG9yOiB2YXIoLS1zcC1tdXRlZCk7IGZvbnQtc2l6ZTogMTFweDsgfVxuLnRlbGVtZXRyeS1pdGVtIHN0cm9uZyB7IGNvbG9yOiB2YXIoLS1zcC10ZXh0KTsgZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogODAwOyBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTsgfVxuLnRlbGVtZXRyeS1pdGVtIHNtYWxsIHsgY29sb3I6IHZhcigtLXNwLW11dGVkKTsgZm9udC1zaXplOiAxMHB4OyBmb250LXdlaWdodDogNTAwOyB9XG4udGVsZW1ldHJ5LWl0ZW0tLWNvb3JkaW5hdGUgc3Ryb25nIHsgZm9udC1zaXplOiAxNXB4OyB9XG5cbi5zYWZldHktbm90ZSB7IGRpc3BsYXk6IGZsZXg7IGdhcDogN3B4OyBtYXJnaW46IDE3cHggMCAwOyBjb2xvcjogdmFyKC0tc3AtbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IGxpbmUtaGVpZ2h0OiAxLjg7IH1cbi5zYWZldHktbm90ZSBpb24taWNvbiB7IGZsZXg6IDAgMCBhdXRvOyBtYXJnaW4tdG9wOiAycHg7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IGZvbnQtc2l6ZTogMTdweDsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLnNwZWVkLWxheW91dCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG4gIC5zcHJpbnQtcGFuZWwgeyBtaW4taGVpZ2h0OiAwOyB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc3BlZWQtcGFnZSB7IHBhZGRpbmc6IDE0cHggMTJweCA0NXB4OyB9XG4gIC5zcGVlZC1oZXJvIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IGdhcDogMTlweDsgcGFkZGluZzogMjRweCAyMHB4OyB9XG4gIC50cmFja2luZy1hY3Rpb25zIHsgZmxleC1kaXJlY3Rpb246IHJvdzsgZmxleC13cmFwOiB3cmFwOyBtaW4td2lkdGg6IDA7IH1cbiAgLnRyYWNraW5nLWFjdGlvbnMgPiAqIHsgZmxleDogMTsgfVxuICAuZ3BzLW5vdGljZSB7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBmbGV4LXdyYXA6IHdyYXA7IH1cbiAgLmdwcy1ub3RpY2Ugc21hbGwgeyBmbGV4LWJhc2lzOiAxMDAlOyBtYXJnaW4tcmlnaHQ6IDI2cHg7IH1cbiAgLnNwZWVkLXBhbmVsIHsgcGFkZGluZzogMThweCAxNXB4OyB9XG4gIC50ZWxlbWV0cnktZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTsgfVxuICAuc3BlZWQtZGlzcGxheSB7IHBhZGRpbmc6IDI3cHggMTZweCAxN3B4OyB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuICAudW5pdC1zd2l0Y2ggYnV0dG9uIHsgcGFkZGluZzogNnB4OyB9XG4gIC50ZWxlbWV0cnktaXRlbSB7IHBhZGRpbmc6IDEycHg7IH1cbiAgLnRlbGVtZXRyeS1pdGVtLS1jb29yZGluYXRlIHN0cm9uZyB7IGZvbnQtc2l6ZTogMTJweDsgfVxufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuc3BlZWQtdHJhY2sgc3BhbiwgLnRyYWNraW5nLWFjdGlvbnMgYnV0dG9uIHsgdHJhbnNpdGlvbjogbm9uZTsgfVxufVxuXG5AaW5jbHVkZSB0dW5lci1kYXJrLXRoZW1lO1xuIiwiLy8gS2VlcCB0aGUgb3JpZ2luYWwgbGlnaHQgY29sb3IgYXQgZWFjaCBjYWxsIHNpdGUuIFRva2VucyBleGlzdCBvbmx5IGluIGRhcmsgbW9kZS5cbkBmdW5jdGlvbiB0dW5lci1jb2xvcigkcm9sZSwgJGxpZ2h0KSB7XG4gIEByZXR1cm4gdmFyKC0tdHVuZXItI3skcm9sZX0sICN7JGxpZ2h0fSk7XG59XG5cbkBtaXhpbiB0dW5lci1kYXJrLXRoZW1lIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgLS10dW5lci1wYWdlOiAjMTExNTFlO1xuICAgIC0tdHVuZXItc3VyZmFjZTogIzFjMjIzMDtcbiAgICAtLXR1bmVyLXNvZnQ6ICMyNTJlM2Q7XG4gICAgLS10dW5lci1ib3JkZXI6ICM0NjUyNjk7XG4gICAgLS10dW5lci10ZXh0OiAjZWRmMWY4O1xuICAgIC0tdHVuZXItbXV0ZWQ6ICNiMmJmZDE7XG4gICAgLS10dW5lci1oZWFkZXI6IHJnYmEoMjgsIDM0LCA0OCwgMC45NCk7XG4gICAgLS10dW5lci1vdmVybGF5OiByZ2JhKDI4LCAzNCwgNDgsIDAuOTUpO1xuICAgIC0tdHVuZXItcHVycGxlLXRleHQ6ICNjNGI1ZmQ7XG4gICAgLS10dW5lci1wdXJwbGUtc29mdDogIzMwMjQ0NDtcbiAgICAtLXR1bmVyLXB1cnBsZS1ib3JkZXI6ICM3MjU3OWI7XG4gICAgLS10dW5lci1pbmZvLXRleHQ6ICM5M2M1ZmQ7XG4gICAgLS10dW5lci1pbmZvLXNvZnQ6ICMxZDMwNGM7XG4gICAgLS10dW5lci1pbmZvLWJvcmRlcjogIzQ2NmI5YTtcbiAgICAtLXR1bmVyLXdhcm5pbmctdGV4dDogI2ZjZDQ3NztcbiAgICAtLXR1bmVyLXdhcm5pbmctc29mdDogIzNiMzAyMDtcbiAgICAtLXR1bmVyLXdhcm5pbmctYm9yZGVyOiAjOTM3NDNkO1xuICAgIC0tdHVuZXItc3VjY2Vzcy10ZXh0OiAjODZlZmFjO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1zb2Z0OiAjMTkzOTJlO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1ib3JkZXI6ICM0MTdkNjA7XG4gICAgLS10dW5lci1kYW5nZXItdGV4dDogI2ZkYTRhZjtcbiAgICAtLXR1bmVyLWRhbmdlci1zb2Z0OiAjNDAyNjMxO1xuICAgIC0tdHVuZXItZGFuZ2VyLWJvcmRlcjogIzk4NTM2NztcbiAgICAtLXR1bmVyLXRlYWwtdGV4dDogIzdkZTRkNDtcbiAgICAtLXR1bmVyLXRlYWwtc29mdDogIzE5M2EzYTtcbiAgICAtLXR1bmVyLXRlYWwtYm9yZGVyOiAjNDM3ZjdjO1xuXG4gICAgLy8gTmF0aXZlIGNvbnRyb2xzIHdpdGhvdXQgYW4gZXhwbGljaXQgbGlnaHQgYmFja2dyb3VuZCBuZWVkIGEgZGFyayBzdXJmYWNlIHRvby5cbiAgICBpbnB1dDpub3QoW3R5cGU9J3JhbmdlJ10pOm5vdChbdHlwZT0nY2hlY2tib3gnXSk6bm90KFt0eXBlPSdyYWRpbyddKTpub3QoW3R5cGU9J2J1dHRvbiddKTpub3QoW3R5cGU9J3N1Ym1pdCddKTpub3QoW3R5cGU9J2ZpbGUnXSksXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci1tdXRlZCk7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cblxuICAgIGlvbi1oZWFkZXIubGVhcm5pbmctaGVhZGVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItcGFnZSk7IC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmQ6bm90KFtjb2xvcl0pLCBpb24tbGlzdCwgaW9uLWl0ZW06bm90KFtjb2xvcl0pLCBpb24taXRlbS1kaXZpZGVyOm5vdChbY29sb3JdKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWxpc3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTsgfVxuICAgIGlvbi1jYXJkLXRpdGxlLCBpb24tY2FyZC1zdWJ0aXRsZSB7IGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkW2NvbG9yPSdsaWdodGVzdCddLCBpb24taXRlbVtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWZhYi1idXR0b25bY29sb3I9J2xpZ2h0ZXN0J10ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2RhcmsnXSwgaW9uLWxhYmVsW2NvbG9yPSdkYXJrJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 62620:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/speedometer/speedometer.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TunerPlus\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\"\r\n      >سرعت سنج (Speedometer)</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"search()\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <main class=\"speed-page\" *ngIf=\"!isCheck\" dir=\"rtl\">\r\n    <section class=\"speed-hero\">\r\n      <div>\r\n        <span class=\"speed-eyebrow\"><ion-icon name=\"navigate-outline\"></ion-icon> GPS SPEEDOMETER</span>\r\n        <h1>سرعت‌سنج زنده</h1>\r\n        <p>سرعت و داده‌های موقعیت را ببین و شتاب‌گیری ۰ تا ۱۰۰ را با GPS اندازه بگیر.</p>\r\n      </div>\r\n      <div class=\"tracking-actions\">\r\n        <span class=\"gps-pill\" [class.is-ready]=\"gpsStatus === 'ready'\" [class.is-weak]=\"gpsStatus === 'weak'\" [class.is-error]=\"gpsStatus === 'error'\">\r\n          <i></i>{{ gpsStatusLabel }}\r\n        </span>\r\n        <button type=\"button\" *ngIf=\"!isTracking\" (click)=\"startTracking()\"><ion-icon name=\"locate-outline\"></ion-icon> فعال‌سازی GPS</button>\r\n        <button type=\"button\" *ngIf=\"isTracking\" (click)=\"stopTracking()\"><ion-icon name=\"pause-outline\"></ion-icon> توقف GPS</button>\r\n      </div>\r\n    </section>\r\n\r\n    <div class=\"gps-notice\" [class.is-error]=\"gpsStatus === 'error'\" role=\"status\">\r\n      <ion-icon [name]=\"gpsStatus === 'error' ? 'alert-circle-outline' : 'information-circle-outline'\"></ion-icon>\r\n      <span>{{ gpsMessage }}</span>\r\n      <small *ngIf=\"lastFixAt\">آخرین دریافت: {{ lastFixAt | date:'HH:mm:ss' }}</small>\r\n    </div>\r\n\r\n    <div class=\"speed-layout\">\r\n      <section class=\"speed-panel speed-main\" aria-label=\"سرعت فعلی\">\r\n        <div class=\"panel-heading\">\r\n          <div><span class=\"panel-kicker\">LIVE SPEED</span><h2>سرعت فعلی</h2></div>\r\n          <div class=\"unit-switch\" aria-label=\"واحد سرعت\">\r\n            <button type=\"button\" [class.is-active]=\"unit === 'kmh'\" (click)=\"setUnit('kmh')\" [attr.aria-pressed]=\"unit === 'kmh'\">km/h</button>\r\n            <button type=\"button\" [class.is-active]=\"unit === 'mph'\" (click)=\"setUnit('mph')\" [attr.aria-pressed]=\"unit === 'mph'\">mph</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"speed-display\">\r\n          <div class=\"speed-display__glow\" aria-hidden=\"true\"></div>\r\n          <div class=\"speed-display__value\">\r\n            <span>GPS LIVE</span>\r\n            <strong>{{ mainSpeed === null ? '—' : mainSpeed }}</strong>\r\n            <small>{{ unit === 'kmh' ? 'کیلومتر بر ساعت' : 'مایل بر ساعت' }}</small>\r\n          </div>\r\n          <div class=\"speed-track\" aria-hidden=\"true\"><span [style.width.%]=\"speedProgress\"></span></div>\r\n          <div class=\"speed-scale\"><span>۰</span><span>۶۰</span><span>۱۲۰</span><span>۱۸۰</span><span>۲۴۰ km/h</span></div>\r\n        </div>\r\n        <div class=\"speed-subline\">\r\n          <span><ion-icon name=\"swap-horizontal-outline\"></ion-icon> معادل {{ unit === 'kmh' ? 'مایل بر ساعت' : 'کیلومتر بر ساعت' }}</span>\r\n          <strong>{{ secondarySpeed === null ? '—' : secondarySpeed }} <small>{{ unit === 'kmh' ? 'mph' : 'km/h' }}</small></strong>\r\n        </div>\r\n        <p class=\"speed-source\" *ngIf=\"speedEstimated\"><ion-icon name=\"alert-circle-outline\"></ion-icon> سرعت از تغییر موقعیت تخمین زده شده است؛ برای آزمون شتاب‌گیری به سرعت مستقیم GPS نیاز است.</p>\r\n      </section>\r\n\r\n      <section class=\"speed-panel sprint-panel\" aria-label=\"آزمون صفر تا صد\">\r\n        <div class=\"panel-heading\">\r\n          <div><span class=\"panel-kicker\">ACCELERATION TEST</span><h2>آزمون ۰ تا ۱۰۰</h2></div>\r\n          <ion-icon class=\"panel-icon\" name=\"stopwatch-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"sprint-timer\" [class.is-running]=\"testState === 'running'\" [class.is-complete]=\"testState === 'completed'\">\r\n          <strong>{{ timer0to100 }}</strong><span>ثانیه</span>\r\n        </div>\r\n        <p class=\"sprint-state\" role=\"status\">{{ testMessage }}</p>\r\n        <button type=\"button\" class=\"sprint-action\" *ngIf=\"testState !== 'armed' && testState !== 'running'\"\r\n          [disabled]=\"!isTracking || gpsStatus !== 'ready' || !hasFix || speedKmh === null || speedKmh > 2\" (click)=\"onStart0to100()\">\r\n          <ion-icon name=\"flag-outline\"></ion-icon> {{ testState === 'completed' ? 'تلاش دوباره' : 'آماده‌سازی آزمون' }}\r\n        </button>\r\n        <button type=\"button\" class=\"sprint-action sprint-action--stop\" *ngIf=\"testState === 'armed' || testState === 'running'\" (click)=\"onStop0to100()\">\r\n          <ion-icon name=\"close-circle-outline\"></ion-icon> لغو آزمون\r\n        </button>\r\n        <div class=\"last-run\" *ngIf=\"last0to100Seconds !== null\"><span>آخرین نتیجه</span><strong>{{ last0to100Seconds | number:'1.2-2' }} <small>ثانیه</small></strong></div>\r\n      </section>\r\n    </div>\r\n\r\n    <section class=\"speed-panel telemetry-panel\" aria-label=\"اطلاعات موقعیت GPS\">\r\n      <div class=\"panel-heading\"><div><span class=\"panel-kicker\">POSITION DATA</span><h2>جزئیات موقعیت</h2></div><ion-icon class=\"panel-icon\" name=\"compass-outline\"></ion-icon></div>\r\n      <div class=\"telemetry-grid\">\r\n        <div class=\"telemetry-item\"><ion-icon name=\"locate-outline\"></ion-icon><span>دقت افقی</span><strong>{{ accuracy === null ? '—' : (accuracy | number:'1.0-1') }} <small>متر</small></strong></div>\r\n        <div class=\"telemetry-item\"><ion-icon name=\"arrow-up-outline\"></ion-icon><span>ارتفاع</span><strong>{{ altitude === null ? '—' : (altitude | number:'1.0-1') }} <small>متر</small></strong></div>\r\n        <div class=\"telemetry-item\"><ion-icon name=\"compass-outline\"></ion-icon><span>جهت حرکت</span><strong>{{ headingLabel }} <small *ngIf=\"heading !== null\">{{ heading | number:'1.0-0' }}°</small></strong></div>\r\n        <div class=\"telemetry-item\"><ion-icon name=\"analytics-outline\"></ion-icon><span>دقت ارتفاع</span><strong>{{ altitudeAccuracy === null ? '—' : (altitudeAccuracy | number:'1.0-1') }} <small>متر</small></strong></div>\r\n        <div class=\"telemetry-item telemetry-item--coordinate\"><ion-icon name=\"pin-outline\"></ion-icon><span>عرض جغرافیایی</span><strong dir=\"ltr\">{{ lat === null ? '—' : (lat | number:'1.5-5') }}</strong></div>\r\n        <div class=\"telemetry-item telemetry-item--coordinate\"><ion-icon name=\"pin-outline\"></ion-icon><span>طول جغرافیایی</span><strong dir=\"ltr\">{{ long === null ? '—' : (long | number:'1.5-5') }}</strong></div>\r\n      </div>\r\n    </section>\r\n\r\n    <p class=\"safety-note\"><ion-icon name=\"shield-checkmark-outline\"></ion-icon> دقت سرعت و زمان آزمون به کیفیت و نرخ نمونه‌برداری GPS بستگی دارد. هنگام رانندگی، کنترل صفحه را به سرنشین بسپار.</p>\r\n  </main>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_speedometer_speedometer_module_ts.js.map