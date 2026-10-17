"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_turbo2_turbo2_module_ts"],{

/***/ 4421:
/*!***********************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/turbo2/turbo2-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Turbo2PageRoutingModule": () => (/* binding */ Turbo2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _turbo2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./turbo2.component */ 81425);




const routes = [
    {
        path: '',
        component: _turbo2_component__WEBPACK_IMPORTED_MODULE_0__.Turbo2Page
    }
];
let Turbo2PageRoutingModule = class Turbo2PageRoutingModule {
};
Turbo2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Turbo2PageRoutingModule);



/***/ }),

/***/ 81425:
/*!******************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/turbo2/turbo2.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Turbo2Page": () => (/* binding */ Turbo2Page)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _turbo2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turbo2.component.html?ngResource */ 73481);
/* harmony import */ var _turbo2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turbo2.component.scss?ngResource */ 22117);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/common/Urls */ 35602);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);




/* eslint-disable eqeqeq */

/* eslint-disable guard-for-in */

/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/naming-convention */













let Turbo2Page = class Turbo2Page {
  constructor(fb, router, alertController, sanitizer, loadingController, toastController, courseService, siteService, datePipe) {
    this.fb = fb;
    this.router = router;
    this.alertController = alertController;
    this.sanitizer = sanitizer;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.courseService = courseService;
    this.siteService = siteService;
    this.datePipe = datePipe;
    this.isShow = false;
    this.isCheck = true;
    this.queryText = '';
    this.showSearchbar = false;
    this.instagram = '';
    this.twiter = '';
    this.facebook = '';
    this.telegram = '';
    this.pinterest = '';
    this.aparat = '';
    this.discord = '';
    this.youtube = '';
    this.twitch = '';
    this.linkedin = '';
    this.tunerPlusVideo = '9TG17';
    this.lastUnit = 'lbs';
    this.unit = 'lbs';
    this.tableSize = 16;
    this.tableSizeSelected = '16';
    this.min = 300;
    this.max = 0;
    this.r = 639.6;
    this.turbo_pr = 0;
    this.turbo_cfm = 0;
    this.turbo_lbs = 0;
    this.turbo_kg = 0;
    this.bhp = 0;
    this.bhp2 = 0;
    this.turboMap = 0;
    this.trim = 0;
    this.ar = 0;
    this.pi = 3.14159265;
    this.gamma = 1.4; // Specific heat ratio for air

    this.tOutlet = 83.1;
    this.isShow = false;
    this.check();
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(_this.loadingController);

      _this.siteService.GetTunerPlusById(23).subscribe(res => {
        if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          if (res.data.isActive) {
            if (!res.data.isFree) {
              _this.courseService.GetUserCoursesId().subscribe(ress => {
                if (ress.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                  let found = false;
                  res.data.courseIds.forEach(courseId => {
                    if (ress.data.find(n => n == courseId)) {
                      found = true;

                      _this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
                        if (resss.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                          _this.isCheck = false;
                        } else {
                          _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                        }
                      }, errs => {
                        _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                      });
                    }
                  });

                  if (!found) {
                    _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                  }
                } else {
                  _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                  src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                }
              }, errs => {
                _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
              });
            } else {
              src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
              _this.isCheck = false;
            }
          } else {
            _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
          }
        } else {
          _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
        }
      }, err => {
        _this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
      });
    })();
  }

  tableSizeChanged() {
    this.tableSize = +this.tableSizeSelected;
  }

  unitChanged() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);

    if (this.unit === 'lbs') {
      if (this.lastUnit === 'cfm') {
        this.VE = [...this.lbs];
        this.calcMinMax();
        this.lastUnit = 'lbs';
      } else {
        this.VE = [...this.lbs];
        this.calcMinMax();
        this.lastUnit = 'lbs';
      }
    } else if (this.unit === 'cfm') {
      if (this.lastUnit === 'lbs') {
        // this.convert0(0.069);
        this.VE = [...this.cfm];
        this.calcMinMax();
        this.lastUnit = 'cfm';
      } else {
        // this.convert0(0.069);
        this.VE = [...this.cfm];
        this.calcMinMax();
        this.lastUnit = 'cfm';
      }
    } else {
      if (this.lastUnit === 'lbs') {
        // this.convert4(132);
        this.VE = [...this.kg];
        this.calcMinMax();
        this.lastUnit = 'kg';
      } else {
        // this.convert3(9.108);
        this.VE = [...this.kg];
        this.calcMinMax();
        this.lastUnit = 'kg';
      }
    }

    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
  }

  convert(x) {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (let i = 1; i < _this2.VE.length; i++) {
        // tslint:disable-next-line: prefer-for-of
        for (let j = 1; j < _this2.VE[i].length; j++) {
          _this2.VE[i][j] = +(_this2.VE[i][j] / x).toFixed(0);
        }
      }
    })();
  }

  convert2(x) {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (let i = 1; i < _this3.VE.length; i++) {
        // tslint:disable-next-line: prefer-for-of
        for (let j = 1; j < _this3.VE[i].length; j++) {
          _this3.VE[i][j] = +(_this3.VE[i][j] * x).toFixed(1);
        }
      }
    })();
  }

  ngOnInit() {
    this.instagram = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Instagram;
    this.twiter = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Twiter;
    this.facebook = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Facebook;
    this.telegram = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Telegram;
    this.youtube = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Youtube;
    this.pinterest = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Pinterest;
    this.linkedin = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Linkedin;
    this.twitch = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Twitch;
    this.aparat = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Aparat;
    this.discord = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Discord;
    this.tunerPlusVideo = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.TunerPlusTurboVideo;
    this.form = this.fb.group({
      // idleRpm: [900, [Validators.required, Validators.min(300), Validators.max(3000)]],
      // idleVacuum: [24, [Validators.required, Validators.min(5), Validators.max(30)]],
      // rpmRedline: [7000, [Validators.required, Validators.min(3000), Validators.max(12000)]],
      // peakHp: [100, [Validators.required, Validators.min(30), Validators.max(1000)]],
      peakHpRpm: [6000, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000)]],
      // peakTorqu: [170, [Validators.required, Validators.min(20), Validators.max(1000)]],
      // peakTorquRpm: [3000, [Validators.required, Validators.min(1000), Validators.max(12000)]],
      engineVolum: [2000, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(200), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000)]],
      boost: [15, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      atm: [14.7, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      ve: [95, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]],
      temp: [50, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-40), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(200)]]
    });
    this.form2 = this.fb.group({
      in: [53.1, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000)]],
      ex: [71, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000)]]
    });
    this.form3 = this.fb.group({
      area: [53.1, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000)]],
      radius: [71, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000)]]
    });
    this.form4 = this.fb.group({
      tInlet: [20, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-60), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(300)]],
      atm: [14, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(300)]],
      boost: [10, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(500)]],
      efficiency: [0.85, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1)]]
    });
  }

  goTop() {
    this.content.scrollToTop(3000);
  }

  forwardUrl(url) {
    window.location.href = url;
  }

  onNavigate(url) {
    this.router.navigateByUrl(url);
  }

  onCancel() {
    this.showSearchbar = false;
  }

  search() {
    if (this.queryText == null || this.queryText.length < 1) {
      return;
    }

    this.router.navigate(['Home', 'Search'], {
      queryParams: {
        title: this.queryText
      }
    });
  }

  onCalc() {
    if (!this.form.valid) {
      return;
    }

    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        if (!this.check_errors()) {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        } else {
          this.calcFlow();
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        }
      } else {
        this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onReset() {
    this.turbo_pr = 0;
    this.turbo_cfm = 0;
    this.turbo_lbs = 0;
    this.turbo_kg = 0;
    this.bhp = 0;
    this.bhp2 = 0;
    this.form.setValue({
      // idleRpm: 900,
      // idleVacuum: 24,
      // rpmRedline: 7000,
      // peakHp: 100,
      peakHpRpm: 6000,
      // peakTorqu: 170,
      // peakTorquRpm: 3000,
      engineVolum: 2000,
      boost: 15,
      atm: 14.7,
      ve: 95,
      temp: 50
    });
  }

  onCalc2() {
    if (!this.form2.valid) {
      return;
    }

    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.trim = +(this.form2.value.in * this.form2.value.in / (this.form2.value.ex * this.form2.value.ex) * 100).toFixed(1);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onReset2() {
    this.trim = 0;
    this.form2.setValue({
      in: 53.1,
      ex: 71
    });
  }

  onCalc3() {
    if (!this.form3.valid) {
      return;
    }

    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.ar = +(this.form3.value.area / 2 * (this.form3.value.area / 2) * this.pi / this.form3.value.radius).toFixed(2);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onReset3() {
    this.ar = 0;
    this.form3.setValue({
      area: 53.1,
      radius: 71
    });
  }

  onCalc4() {
    if (!this.form4.valid) {
      return;
    }

    if (this.form4.value.efficiency <= 0) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'راندمان توربو نمی تواند 0 یا کوچک تر از 0 باشد');
      return;
    }

    if (this.form4.value.efficiency > 1) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'راندمان توربو نمی تواند بزرگ تر از 1 باشد');
      return;
    }

    let pressureRatio = +((this.form4.value.boost + this.form4.value.atm) / (this.form4.value.atm - 1)).toFixed(1);

    if (this.form4.value.pressureRatio <= 1) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'نسبت فشار نمی تواند کوچک تر مساوی 1 باشد');
      return;
    }

    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        let kelvin = this.form4.value.tInlet + 273.15; // Isentropic temperature ratio relation

        const tOutletIsentropic = kelvin * Math.pow(pressureRatio, (this.gamma - 1) / this.gamma); // Adjusting for efficiency

        this.tOutlet = +(kelvin + (tOutletIsentropic - kelvin) / this.form4.value.efficiency - 273.15).toFixed(1);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onReset4() {
    this.tOutlet = 83.1;
    this.form4.setValue({
      tInlet: 20,
      atm: 14,
      boost: 10,
      efficiency: 0.85
    });
  }

  calcFlow() {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.turboMap = +((_this4.form.value.boost + _this4.form.value.atm) / (_this4.form.value.atm - 1)).toFixed(1);
      _this4.turbo_pr = _this4.turboMap;
      const c = _this4.form.value.engineVolum * 0.061023744095;
      const map = _this4.form.value.boost + _this4.form.value.atm;
      const temp = _this4.form.value.temp * 1.8 + 32;
      const x = -0.0002 * _this4.form.value.temp + 0.0801;
      const res = +(_this4.form.value.ve * 0.01 * _this4.form.value.peakHpRpm / 2 * c * (_this4.form.value.atm + _this4.form.value.boost) / (_this4.r * (460 + temp))).toFixed(1);
      _this4.turbo_lbs = res; // this.turbo_cfm = +(res / 0.069).toFixed(0);

      _this4.turbo_cfm = +(res / x).toFixed(0);
      _this4.turbo_kg = +(res / 132.3).toFixed(3);
      _this4.bhp = +(res * 60 / 0.55 / 12.5).toFixed(1);
      _this4.bhp2 = +(res * 60 / 0.55 / 10).toFixed(1);
    })();
  }

  calcMinMax() {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.min = 300;
      _this5.max = 0;

      for (let i = 1; i < _this5.VE.length; i++) {
        // tslint:disable-next-line: prefer-for-of
        for (let j = 1; j < _this5.VE[i].length; j++) {
          const ve = _this5.VE[i][j];

          if (ve < _this5.min) {
            _this5.min = ve;
          }

          if (ve > _this5.max) {
            _this5.max = ve;
          }
        }
      }

      _this5.avg = (_this5.max - _this5.min) / 2 + _this5.min;
    })();
  }

  calcColor(ve, j) {
    let r = 135;
    let g = 135;
    let b = 135;

    if (j == 0) {
      return 'black';
    } else {
      if (ve >= this.avg) {
        r = (ve - this.min) * 100 / (this.max - this.min) * 255 / 100;
        r += 3;
        g = (100 - (ve - this.avg) * 100 / (this.max - this.avg)) * 255 / 100;
        g += 34;

        if (g < 135) {
          g = 135;
        }

        if (g > 255) {
          g = 255;
        }

        if (r < 135) {
          r = 135;
        }

        if (r > 255) {
          r = 255;
        }
      } else {
        b = (100 - (ve - this.min) * 100 / (this.max - this.min)) * 255 / 100;
        b += 3;
        g = (ve - this.min) * 100 / (this.avg - this.min) * 255 / 100;
        g += 34;

        if (g < 135) {
          g = 135;
        }

        if (g > 255) {
          g = 255;
        }

        if (b < 135) {
          b = 135;
        }

        if (b > 255) {
          b = 255;
        }
      }

      return 'rgb(' + r.toString() + ', ' + g.toString() + ', ' + b.toString() + ')';
    }
  }

  onBack() {
    this.isShow = false;
  }

  make_VE_table() {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Create VE Array
      // VE[i][j] is the volumetric efficiency(VE) * gamma  value
      // for the ith MAP bin, jth RPM bin (i,j=1..8)
      // where gamma=14.7/afr for gasoline.
      // VE[i][0] is the ith MAP bin value (i=1..8)
      // VE[0][j] is the jth RPM bin value (j=1..8)
      // VE[0][0] is the kPa row with the value nearest 100kPa (i.e. the 'normally aspirated' row)
      //          and is it determined in function 'map_bins' - set but not used in this code version
      _this6.VE = new Array(_this6.tableSize + 1);
      _this6.lbs = new Array(_this6.tableSize + 1);
      _this6.cfm = new Array(_this6.tableSize + 1);
      _this6.kg = new Array(_this6.tableSize + 1);

      for (let i = 0; i <= _this6.tableSize; i++) {
        _this6.VE[i] = new Array(_this6.tableSize + 1);
        _this6.lbs[i] = new Array(_this6.tableSize + 1);
        _this6.cfm[i] = new Array(_this6.tableSize + 1);
        _this6.kg[i] = new Array(_this6.tableSize + 1);
      } // Initialize VE Array
      // tslint:disable-next-line: forin


      for (const j in _this6.VE) {
        for (let k = 0; k <= _this6.tableSize; k++) {
          _this6.VE[j][k] = 0;
          _this6.lbs[j][k] = 0;
          _this6.cfm[j][k] = 0;
          _this6.kg[j][k] = 0;
        }
      }

      return _this6.VE;
    })();
  }

  rpm_bins(maxrpm, idlerpm) {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Calculate RPM bins
      // First two bins bracket idle with a delta of 500 rpm.
      // Other bins are equally spaced (ignoring rounding) to max_rpm.
      _this7.VE[0][1] = Math.round((parseFloat(idlerpm) - 150) / 100) * 100;
      _this7.VE[0][2] = Math.round((parseFloat(idlerpm) + 350) / 100) * 100;
      _this7.lbs[0][1] = Math.round((parseFloat(idlerpm) - 150) / 100) * 100;
      _this7.lbs[0][2] = Math.round((parseFloat(idlerpm) + 350) / 100) * 100;
      _this7.cfm[0][1] = Math.round((parseFloat(idlerpm) - 150) / 100) * 100;
      _this7.cfm[0][2] = Math.round((parseFloat(idlerpm) + 350) / 100) * 100;
      _this7.kg[0][1] = Math.round((parseFloat(idlerpm) - 150) / 100) * 100;
      _this7.kg[0][2] = Math.round((parseFloat(idlerpm) + 350) / 100) * 100;
      const rpm_bin_step = (parseFloat(maxrpm) - _this7.VE[0][2]) / (_this7.tableSize * 1.0 - 2);

      for (let i = 3; i <= _this7.tableSize * 1.0 - 1; i++) {
        _this7.VE[0][i] = Math.round((_this7.VE[0][2] + (i - 2) * rpm_bin_step) / 100) * 100;
        _this7.lbs[0][i] = Math.round((_this7.VE[0][2] + (i - 2) * rpm_bin_step) / 100) * 100;
        _this7.cfm[0][i] = Math.round((_this7.VE[0][2] + (i - 2) * rpm_bin_step) / 100) * 100;
        _this7.kg[0][i] = Math.round((_this7.VE[0][2] + (i - 2) * rpm_bin_step) / 100) * 100;
      }

      _this7.VE[0][_this7.tableSize * 1.0] = Math.round(parseFloat(maxrpm) / 100) * 100;
      _this7.lbs[0][_this7.tableSize * 1.0] = Math.round(parseFloat(maxrpm) / 100) * 100;
      _this7.cfm[0][_this7.tableSize * 1.0] = Math.round(parseFloat(maxrpm) / 100) * 100;
      _this7.kg[0][_this7.tableSize * 1.0] = Math.round(parseFloat(maxrpm) / 100) * 100;
      return;
    })();
  }

  map_bins(maxmap, idlemap) {
    var _this8 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Calculate MAP bins
      // First bin is idle MAP value. Rest are evenly spaced to 'boost' value (maxmap).
      // VE[0][0] is set to the index for the array row containing the highest MAP value
      // less than 115 (i.e. the naturally aspirated, WOT row)
      _this8.VE[1][0] = Math.round((101 - parseFloat(idlemap) * (101 / 29.92)) / 5) * 5;
      _this8.lbs[1][0] = Math.round((101 - parseFloat(idlemap) * (101 / 29.92)) / 5) * 5;
      _this8.cfm[1][0] = Math.round((101 - parseFloat(idlemap) * (101 / 29.92)) / 5) * 5;
      _this8.kg[1][0] = Math.round((101 - parseFloat(idlemap) * (101 / 29.92)) / 5) * 5;
      const map_bin_step = (parseFloat(maxmap) * (101 / 14.7) + 101 - _this8.VE[1][0]) / (_this8.tableSize * 1.0 - 1);

      for (let i = 2; i <= _this8.tableSize * 1.0; i++) {
        _this8.VE[i][0] = Math.round((_this8.VE[1][0] + (i - 1) * map_bin_step) / 5) * 5;
        _this8.lbs[i][0] = Math.round((_this8.VE[1][0] + (i - 1) * map_bin_step) / 5) * 5;
        _this8.cfm[i][0] = Math.round((_this8.VE[1][0] + (i - 1) * map_bin_step) / 5) * 5;
        _this8.kg[i][0] = Math.round((_this8.VE[1][0] + (i - 1) * map_bin_step) / 5) * 5;

        if (_this8.VE[i][0] < 115) {
          _this8.VE[0][0] = i;
          _this8.lbs[0][0] = i;
          _this8.cfm[0][0] = i;
          _this8.kg[0][0] = i;
        }
      }

      return;
    })();
  }

  compute_VEs() {
    var _this9 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // VEs are modeled based on several equations.
      // A quadratic is used to estimate the WOT VE curve based on the peak torque (&rpm)
      // and torque at peak horsepower.
      // Calculations are based on naturally aspirated equivalents, derived from:
      //
      // natural_tq(ptq)= ptq*(14.7/(14.7+boost))
      // natural_tq(php)= 5250*(php*(14.7/(14.7+boost)))/phprpm
      //
      // The 'flatness/peakiness' of the curve is determined
      // by rpm difference between peak torque and peak horseower.
      //
      // VE(100,rpm) = (a * rpm^2) + (b * rpm) + c
      //
      // We want VE(ptq)=(natural_tq(ptq))/displacement*(0.86)
      // and VE(ptq)=(natural_hp(php))/displacement*(0.95)
      //
      // where 0.86 is the estimated volumetric efficiency for an engine that produces
      // 1 lb-ft/cubic inch, and where 0.95 is the estimated volumetric efficiency for
      // an engine that produces 1 hp/cubic inch
      //
      // and we know that:
      //
      // (1)    VEnatural_tq(ptq) = 0.86 = a * ptqrpm^2 + b * ptqrpm + c
      //
      // (2)    VEnatural_tq(php) = 0.95 = a * phprpm^2 + b * phprpm + c
      // and
      // (3)    2*a*ptqrpm = (-b) by differentiation, since we want VE to peak at peak torque (dy/dx=2ax+b=0 @ ptqrpm)
      //
      // So we have three equations with three unknowns (a, b and c)
      // from third equation:
      //
      // (4) b = -2*a*ptqrpm
      // which forces a maximum in the curve at the peak torque.
      // Coefficient calculation is done in the separate compute_coefficients function
      //
      // to get VE need to pass x1=ptqrpm, y1=0.86*(na_peak_torque/displacement)
      //                    and x2=phprpm, y2=0.95*(na_peak_hp/displacement)
      //
      // A linear scaling 'gamma' factor is then applied to each value in the VE(100,rpm) column to adjust
      // the mixture ratio from a constant 14.7:1 to a function of rpm, going from 14:1 at
      // the lowest rpm to 12:1 at the highest rpm (all still at 100kPa).
      //
      // Final equation for 100kPa is: VE = a*rpm^2 + b*rpm + c
      // Note that VE is already adjusted for best afr at peak torque and hp
      //
      // For each MAP row, the values are scaled from the 100kPa values.
      // For kPa<=100 factor 0.45 is used
      // for kPa>100, factor K*(compressor_efficiency = 0.60) is used, to account for compressor efficiency
      // i.e. for a boost of 10 pounds, if 6 psi is used to increase mass of charge,
      // and 4 psi comes from the added heat of compression, compressor_efficiency=0.60
      // and the K is a constant determined empirically,
      //
      // suppose k=0.7
      // VE(x,rpm) = VE(100,rpm) * f(map)
      // where f(map) could be f(map)=1-(100-map)/100*K
      // ex. VE(100,4000)=100, want VE(70,4000)
      //     so f(70) = 1-(100-70)/100*0.7 = 0.79
      //     and VE(70,4000) = 100*0.85 = 79%
      //
      // Get form values
      const peak_tq = _this9.form.value.peakTorqu / 1.3558179999442195;
      const peak_hp = _this9.form.value.peakHp; // let maxmap = this.form.value.boost;

      const maxmap = 0;
      const displacement = _this9.form.value.engineVolum / 1000 * 61; // swept volume in cubic inches

      const peak_hp_rpm = _this9.form.value.peakHpRpm;
      const peak_torque_rpm = _this9.form.value.peakTorquRpm; // Compute torque at peak horsepower and torque - adjusted for any boost

      let compressor_efficiency = 1;

      if (maxmap > 0) {
        compressor_efficiency = 0.6;
      }

      const na_tq = peak_tq * (14.7 / (14.7 + maxmap * compressor_efficiency));
      const na_hp = peak_hp * (14.7 / (14.7 + maxmap * compressor_efficiency)) * (5250 / peak_hp_rpm);

      _this9.compute_coefficients(peak_torque_rpm, 85 * (na_tq / displacement), peak_hp_rpm, 85 * (na_hp / displacement)); // Set K - the 'step' degradation ration for VE to kPa


      const K = 0.45; // Fill the VE values
      // (but not the bin values)

      const maxVE = _this9.a * peak_torque_rpm * peak_torque_rpm + _this9.b * peak_torque_rpm + _this9.c;

      for (let i = 1; i <= _this9.tableSize * 1.0; i++) {
        for (let j = 1; j <= _this9.tableSize * 1.0; j++) {
          compressor_efficiency = 1;

          if (_this9.VE[i][0] > 100) {
            compressor_efficiency = 0.6;
          }

          const f = (100 - (100 - _this9.VE[i][0]) * K) / 100;
          _this9.VE[i][j] = (_this9.a * _this9.VE[0][j] * _this9.VE[0][j] + _this9.b * _this9.VE[0][j] + _this9.c) * f; // VE at least 25% of maxVE at all times

          if (_this9.VE[i][j] < maxVE * 0.25) {
            _this9.VE[i][j] = maxVE * 0.25;
          } // limit 'fall-off' to 5% per bin to prevent going lean on top end


          if (j > 1) {
            if (_this9.VE[i][j] < _this9.VE[i][j - 1] * 0.95) {
              _this9.VE[i][j] = _this9.VE[i][j - 1] * 0.95;
            }
          }

          _this9.VE[i][j] = Math.round(_this9.VE[i][j]);
        }
      }
    })();
  }

  compute_coefficients(x1, y1, x2, y2) {
    var _this10 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Compute the quadratic coefficients for a curve passing through (x1,y1), (x2,y2)
      // with a maximum at (x1,y1)
      // modify global variables a,b,c, where y=ax^2+bx+c
      //
      _this10.a = (y2 - y1) / (x2 * x2 - 2 * x1 * x2 + x1 * x1);
      _this10.b = -2 * _this10.a * x1;
      _this10.c = y1 + _this10.a * x1 * x1;
      return;
    })();
  }

  onInfo(type) {
    switch (type) {
      case 'atm':
        this.presentActiveAlertConfirm('فشار هوای محیط برحسب psi. در سطح دریا برابر با 14.7 است و در ارتفاعات کمتر میشود');
        break;

      case 'temp':
        this.presentActiveAlertConfirm('دمای هوای منیفولد برحسب درجه سانتیگراد. معمولا بین 40 الی 60 درجه میباشد.');
        break;

      case 'idleRpm':
        this.presentActiveAlertConfirm('دور موتور در زمانی که پدال گاز رها است را وارد کنید. معمولا عددی بین 700 الی 1300');
        break;

      case 'idleVacuum':
        this.presentActiveAlertConfirm('خلا بیکار تخمین زده شده برحسب Hg. برای موتور استوک حدود 24 - برای خودروی تقویت شهری حدود 15 - برای خودروی مسابفاتی حدود 10');
        break;

      case 'rpmRedline':
        this.presentActiveAlertConfirm('بیشترین دور موتور تعیین شده برای خودرو که در محدوده قرمز صفحه کیلومتر نشان داده میشود');
        break;

      case 'peakHp':
        this.presentActiveAlertConfirm('بیشینه ی توان موتور در سر فلایول برحسب اسب بخار');
        break;

      case 'peakHpRpm':
        this.presentActiveAlertConfirm('دور موتوری که بیشینه ی توان موتور در آن بدست آمده است');
        break;

      case 'peakTorqu':
        this.presentActiveAlertConfirm('بیشینه ی گشتاور موتور در سر فلایول برحسب نیوتن متر');
        break;

      case 'peakTorquRpm':
        this.presentActiveAlertConfirm('دور موتوری که بیشینه ی گشتاور موتور در آن بدست آمده است');
        break;

      case 'engineVolum':
        this.presentActiveAlertConfirm('حجم موتور بر حسب سی سی');
        break;

      case 'boost':
        this.presentActiveAlertConfirm('بوست یا همان فشار هوایی که قصد دارید با توربو اعمال کنید برحسب psi');
        break;

      case 've':
        this.presentActiveAlertConfirm('راندمان حجمی موتور در دور موتور مشخص شده بدون تاثیر فشار توربو');
        break;

      case 'area':
        this.presentActiveAlertConfirm('قطر محیط خروجی هوزینگ برحسب میلیمتر');
        break;

      case 'radius':
        this.presentActiveAlertConfirm('فاصله ی محور توربو تا وسط محیط خروجی هوزینگ برحسب میلیمتر');
        break;

      case 'in':
        this.presentActiveAlertConfirm('قطر کوچک پره توربو برحسب میلیمتر');
        break;

      case 'ex':
        this.presentActiveAlertConfirm('قطر بزرگ پره توربو برحسب میلیمتر');
        break;

      case 'efficiency':
        this.presentActiveAlertConfirm('راندمان توربو بین عدد 0 تا 1');
        break;

      case 'tInlet':
        this.presentActiveAlertConfirm('دمای هوای ورودی توربو برحسب درجه سلسیوس');
        break;

      default:
        break;
    }
  }

  presentActiveAlertConfirm(msg = '') {
    var _this11 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this11.alertController.create({
        cssClass: 'main-alert',
        header: 'توضیحات',
        message: msg,
        buttons: [{
          text: 'بستن',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  check_errors() {
    var _this12 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return true; // check for
      // idle_rpm > 300
      // 0< idle_map < 80
      // max_rpm < 12000
      // boost < 21psi
      // 25 < idle_map > 4
      // phprpm > phprpm
      // peak_tq > peak_hp*5250/phprpm
      // peak_hp/displacement < 3.0 hp/ci
      // errors is a string with all error messages
      // const err_idle_rpm = this.form.value.idleRpm;
      // const err_idle_map = this.form.value.idleVacuum;
      // const err_maxrpm = this.form.value.rpmRedline;
      // const err_peak_tq = (this.form.value.peakTorqu / 1.3558179999442195);
      // const err_tq_rpm = this.form.value.peakTorquRpm;

      const err_boost = _this12.form.value.boost; // const err_peak_hp = this.form.value.peakHp;

      const err_hp_rpm = _this12.form.value.peakHpRpm;
      const err_displacement = _this12.form.value.engineVolum / 1000 * 61; // swept volume in cubic inches

      let errors = ''; // if (err_idle_rpm < 300) {
      //   errors = 'Idle rpm set too low. ';
      //   SharedIonic.toast(this.toastController, 'دور آرام نباید کمتر از 300 باشد');
      // }
      // else if (err_idle_map < 5) {
      //   errors = errors + 'Idle vacuum is too low to model. ';
      //   SharedIonic.toast(this.toastController, 'وکیوم دور آرام نباید کمتر از 5 باشد');
      // }
      // else if (err_idle_map > 30) {
      //   errors = errors + 'Idle vacuum is too high. ';
      //   SharedIonic.toast(this.toastController, 'وکیوم دور آرام نباید بیشتر از 30 باشد');
      // }
      // else if (err_maxrpm > 12000) {
      //   errors = errors + 'Maximum RPM is set too high. ';
      //   SharedIonic.toast(this.toastController, 'دور موتور کاتاف نباید بیشتر از 12000 باشد');
      // }

      if (err_boost > 40) {
        errors = errors + 'Maximum boost is set too high for standard MegaSquirt<sup>&reg;</sup> MPX4250 MAP sensor. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(_this12.toastController, 'بوست توربو نباید بیشتر از 40 باشد');
      } // else if (err_tq_rpm > err_hp_rpm) {
      //   errors = errors + 'RPM for peak torque occurs above RPM for peak horsepower. ';
      //   SharedIonic.toast(this.toastController, 'دور موتور اوج گشتاور نباید بیشتر از توان باشد');
      // }
      // else if ((err_peak_hp * 5250 / err_hp_rpm) > err_peak_tq) {
      //   errors = errors + 'Torque at maximum HP is higher than at \'peak\' torque! ';
      //   SharedIonic.toast(this.toastController, 'گشتاور در اوج توان نباید بیشتر از اوج گشتاور باشد');
      // }
      // else if ((err_peak_hp / err_displacement) > 3) {
      //   errors = errors + 'Specific output is too high to model. ';
      //   SharedIonic.toast(this.toastController, 'خروجی خاص برای مدل سازی خیلی زیاد است');
      // }


      if (errors === '') {
        return false;
      } else {
        return true;
      }
    })();
  }

  checkURL() {
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + this.tunerPlusVideo + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoUrl() {
    const url = 'https://www.aparat.com/v/' + this.tunerPlusVideo;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

};

Turbo2Page.ctorParameters = () => [{
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
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService
}, {
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_8__.SliderService
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe
}];

Turbo2Page.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent]
  }]
};
Turbo2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-turbo2',
  template: _turbo2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_turbo2_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Turbo2Page);


/***/ }),

/***/ 74673:
/*!***************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/turbo2/turbo2.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Turbo2PageModule": () => (/* binding */ Turbo2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _turbo2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turbo2-routing.module */ 4421);
/* harmony import */ var _turbo2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turbo2.component */ 81425);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let Turbo2PageModule = class Turbo2PageModule {
};
Turbo2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _turbo2_routing_module__WEBPACK_IMPORTED_MODULE_1__.Turbo2PageRoutingModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        declarations: [_turbo2_component__WEBPACK_IMPORTED_MODULE_2__.Turbo2Page]
    })
], Turbo2PageModule);



/***/ }),

/***/ 22117:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/turbo2/turbo2.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ".h_iframe-aparat_embed_frame {\n  position: relative;\n}\n\n.h_iframe-aparat_embed_frame .ratio {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  border-radius: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.video-span {\n  display: block;\n  padding-top: 57%;\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1cmJvMi5jb21wb25lbnQuc2NzcyIsIi4uXFxfdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUNoQkU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBRG1CSjs7QUNoQkk7OztFQUdFLHdCQUFBO0VBQ0EsbUNBQUE7QURrQk47O0FDZkk7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QURpQk47O0FDZEk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7QURnQk47O0FDZEk7RUFBYywrQkFBQTtFQUFpQywwQkFBQTtBRGtCbkQ7O0FDakJJO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FEbUJOOztBQ2pCSTtFQUFXLGdDQUFBO0FEb0JmOztBQ25CSTtFQUFvQyx3QkFBQTtBRHNCeEM7O0FDckJJO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QUR1Qk47O0FDckJJO0VBQWtELG1DQUFBO0FEd0J0RCIsImZpbGUiOiJ0dXJibzIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi90aGVtZSc7XHJcblxyXG4uaF9pZnJhbWUtYXBhcmF0X2VtYmVkX2ZyYW1lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUgLnJhdGlvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUgaWZyYW1lIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi52aWRlby1zcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLXRvcDogNTclO1xyXG59XHJcblxyXG5AaW5jbHVkZSB0dW5lci1kYXJrLXRoZW1lO1xyXG4iLCIvLyBLZWVwIHRoZSBvcmlnaW5hbCBsaWdodCBjb2xvciBhdCBlYWNoIGNhbGwgc2l0ZS4gVG9rZW5zIGV4aXN0IG9ubHkgaW4gZGFyayBtb2RlLlxuQGZ1bmN0aW9uIHR1bmVyLWNvbG9yKCRyb2xlLCAkbGlnaHQpIHtcbiAgQHJldHVybiB2YXIoLS10dW5lci0jeyRyb2xlfSwgI3skbGlnaHR9KTtcbn1cblxuQG1peGluIHR1bmVyLWRhcmstdGhlbWUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gICAgLS10dW5lci1zdXJmYWNlOiAjMWMyMjMwO1xuICAgIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgICAtLXR1bmVyLXRleHQ6ICNlZGYxZjg7XG4gICAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgICAtLXR1bmVyLW92ZXJsYXk6IHJnYmEoMjgsIDM0LCA0OCwgMC45NSk7XG4gICAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAgIC0tdHVuZXItcHVycGxlLWJvcmRlcjogIzcyNTc5YjtcbiAgICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgICAtLXR1bmVyLWluZm8tYm9yZGVyOiAjNDY2YjlhO1xuICAgIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAgIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAgIC0tdHVuZXItd2FybmluZy1ib3JkZXI6ICM5Mzc0M2Q7XG4gICAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gICAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gICAgLS10dW5lci1zdWNjZXNzLWJvcmRlcjogIzQxN2Q2MDtcbiAgICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAgIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gICAgLS10dW5lci1kYW5nZXItYm9yZGVyOiAjOTg1MzY3O1xuICAgIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAgIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAgIC0tdHVuZXItdGVhbC1ib3JkZXI6ICM0MzdmN2M7XG5cbiAgICAvLyBOYXRpdmUgY29udHJvbHMgd2l0aG91dCBhbiBleHBsaWNpdCBsaWdodCBiYWNrZ3JvdW5kIG5lZWQgYSBkYXJrIHN1cmZhY2UgdG9vLlxuICAgIGlucHV0Om5vdChbdHlwZT0ncmFuZ2UnXSk6bm90KFt0eXBlPSdjaGVja2JveCddKTpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nZmlsZSddKSxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3Qge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1wYWdlKTsgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZDpub3QoW2NvbG9yXSksIGlvbi1saXN0LCBpb24taXRlbTpub3QoW2NvbG9yXSksIGlvbi1pdGVtLWRpdmlkZXI6bm90KFtjb2xvcl0pIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tbGlzdCB7IGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmRbY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1pdGVtW2NvbG9yPSdsaWdodGVzdCddLCBpb24tZmFiLWJ1dHRvbltjb2xvcj0nbGlnaHRlc3QnXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cbiAgICBpb24tdGV4dFtjb2xvcj0nZGFyayddLCBpb24tbGFiZWxbY29sb3I9J2RhcmsnXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 73481:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/turbo2/turbo2.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TunerPlus\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\"\r\n      >محاسبه سایز توربو (Turbo Flow Rate)</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"search()\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <Section *ngIf=\"!isCheck\">\r\n    <ion-grid fixed *ngIf=\"!isShow\">\r\n      <ion-row>\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <ion-card>\r\n            <!-- <ion-item>\r\n              <ion-label>ابعاد جدول</ion-label>\r\n              <ion-select\r\n                (ionChange)=\"tableSizeChanged()\"\r\n                [(ngModel)]=\"tableSizeSelected\"\r\n                value=\"16\"\r\n              >\r\n                <ion-select-option value=\"16\">16*16</ion-select-option>\r\n                <ion-select-option value=\"12\">12*12</ion-select-option>\r\n                <ion-select-option value=\"9\">9*9</ion-select-option>\r\n                <ion-select-option value=\"8\">8*8</ion-select-option>\r\n              </ion-select>\r\n            </ion-item> -->\r\n\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه سایز توربو</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <!-- <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دور آرام (RPM)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"900\"\r\n                    formControlName=\"idleRpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('idleRpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item> -->\r\n\r\n                <!-- <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"twitter\"\r\n                    slot=\"start\"\r\n                    name=\"pulse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >وکیوم دور آرام (in·Hg)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"24\"\r\n                    formControlName=\"idleVacuum\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('idleVacuum')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item> -->\r\n\r\n                <!-- <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دور موتور کاتاف</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"6000\"\r\n                    formControlName=\"rpmRedline\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('rpmRedline')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item> -->\r\n\r\n                <!-- <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"flame-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >اوج توان (HP)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"100\"\r\n                    formControlName=\"peakHp\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakHp')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item> -->\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دوره موتوره</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"6000\"\r\n                    formControlName=\"peakHpRpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakHpRpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <!-- <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"flash-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >اوج گشتاور (Nm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"170\"\r\n                    formControlName=\"peakTorqu\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakTorqu')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دوره موتوره اوج گشتاور</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"3000\"\r\n                    formControlName=\"peakTorquRpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakTorquRpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item> -->\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"aperture-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >راندمان حجمی (VE)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"95\"\r\n                    formControlName=\"ve\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('ve')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cube-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >حجم موتور (cc)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"2000\"\r\n                    formControlName=\"engineVolum\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('engineVolum')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"instagram\"\r\n                    slot=\"start\"\r\n                    name=\"rocket-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >بوست توربو (PSI)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"0\"\r\n                    formControlName=\"boost\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('boost')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"twitter\"\r\n                    slot=\"start\"\r\n                    name=\"cloudy-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >فشار هوا (PSI)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"14.7\"\r\n                    formControlName=\"atm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('atm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"thermometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دمای هوای منیفولد (°C)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"50\"\r\n                    formControlName=\"temp\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('temp')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </form>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\">نتیجه</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"light\" style=\"font-size: large\">\r\n                    {{ \"Pressure Ratio: \" }}\r\n                  </ion-text>\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ turbo_pr }}\r\n                  </ion-text>\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"light\" style=\"font-size: large\">\r\n                    {{ \"CFM: \" }}\r\n                  </ion-text>\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ turbo_cfm }}\r\n                  </ion-text>\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"light\" style=\"font-size: large\">\r\n                    {{ \"lbs/min: \" }}\r\n                  </ion-text>\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ turbo_lbs }}\r\n                  </ion-text>\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"light\" style=\"font-size: large\">\r\n                    {{ \"kg/s: \" }}\r\n                  </ion-text>\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ turbo_kg }}\r\n                  </ion-text>\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"light\" style=\"font-size: large\">\r\n                    {{ \"BHP: \" }}\r\n                  </ion-text>\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ bhp2 + \" - \" + bhp }}\r\n                  </ion-text>\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <form [formGroup]=\"form2\" (ngSubmit)=\"onCalc2()\">\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه تریم توربو</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >Inducer</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"57.1\"\r\n                    formControlName=\"in\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('in')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"aperture-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >Exducer</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"95\"\r\n                    formControlName=\"ex\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('ex')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form2.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset2()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </form>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\">Trim</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"light\" style=\"font-size: large\">\r\n                    {{ \"Trim: \" }}\r\n                  </ion-text>\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ trim }}\r\n                  </ion-text>\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <form [formGroup]=\"form3\" (ngSubmit)=\"onCalc3()\">\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\">\r\n                  نسبت محیط به شعاع توربو</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر هوزینگ\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"57.1\"\r\n                    formControlName=\"area\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('area')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"aperture-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\">شعاع</ion-label>\r\n                  <ion-input\r\n                    placeholder=\"95\"\r\n                    formControlName=\"radius\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('radius')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form3.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset3()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </form>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\">A/R</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"light\" style=\"font-size: large\">\r\n                    {{ \"A/R: \" }}\r\n                  </ion-text>\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ ar }}\r\n                  </ion-text>\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <form [formGroup]=\"form4\" (ngSubmit)=\"onCalc4()\">\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\">\r\n                  دمای هوای خروجی توربو</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"thermometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دمای ورودی\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"20\"\r\n                    formControlName=\"tInlet\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('tInlet')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"twitter\"\r\n                    slot=\"start\"\r\n                    name=\"cloudy-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >فشار هوا (PSI)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"14\"\r\n                    formControlName=\"atm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('atm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"cloudy-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >بوست توربو (PSI)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"10\"\r\n                    formControlName=\"boost\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('boost')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"twitter\"\r\n                    slot=\"start\"\r\n                    name=\"leaf-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >راندمان توربو</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"0.85\"\r\n                    formControlName=\"efficiency\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('efficiency')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form4.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset4()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </form>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\">نتیجه</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"light\" style=\"font-size: large\">\r\n                    {{ \"Outlet Temp: \" }}\r\n                  </ion-text>\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ tOutlet + \"°C\" }}\r\n                  </ion-text>\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </Section>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_turbo2_turbo2_module_ts.js.map