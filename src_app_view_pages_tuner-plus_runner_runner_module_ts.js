"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_runner_runner_module_ts"],{

/***/ 95913:
/*!***********************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/runner/runner-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RunnerRoutingModule": () => (/* binding */ RunnerRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _runner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runner.component */ 42526);




const routes = [{ path: '', component: _runner_component__WEBPACK_IMPORTED_MODULE_0__.RunnerComponent }];
let RunnerRoutingModule = class RunnerRoutingModule {
};
RunnerRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], RunnerRoutingModule);



/***/ }),

/***/ 42526:
/*!******************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/runner/runner.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RunnerComponent": () => (/* binding */ RunnerComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _runner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runner.component.html?ngResource */ 37045);
/* harmony import */ var _runner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runner.component.scss?ngResource */ 85617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/G */ 67122);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/service/site/Slider.service */ 79519);




/* eslint-disable max-len */

/* eslint-disable eqeqeq */

/* eslint-disable @typescript-eslint/naming-convention */












let RunnerComponent = class RunnerComponent {
  constructor(fb, router, alertController, sanitizer, loadingController, toastController, siteService, courseService) {
    this.fb = fb;
    this.router = router;
    this.alertController = alertController;
    this.sanitizer = sanitizer;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.siteService = siteService;
    this.courseService = courseService;
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
    this.tunerPlusVideo = 'hy0QI'; // rType = '1';

    this.runner_diameter2 = 5.64;
    this.pi = 3.14159265;
    this.v_sound = 360;
    this.m = 88200.0;
    this.m2 = 80850.0;
    this.cr = 10.86;
    this.cubic_capacity = 1587.46;
    this.runner_diameter = 3.36;
    this.runner_diameter_max = 3.51;
    this.runner_length1 = 71.80;
    this.runner_length2 = 35.90;
    this.runner_length3 = 23.93;
    this.isShow = false;
    this.check();
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(_this.loadingController);

      _this.siteService.GetTunerPlusById(12).subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
          if (res.data.isActive) {
            if (!res.data.isFree) {
              _this.courseService.GetUserCoursesId().subscribe(ress => {
                if (ress.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
                  let found = false;
                  res.data.courseIds.forEach(courseId => {
                    if (ress.data.find(n => n == courseId)) {
                      found = true;

                      _this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
                        if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                          _this.isCheck = false;
                        } else {
                          _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                        }
                      }, errs => {
                        _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                      });
                    }
                  });

                  if (!found) {
                    _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                  }
                } else {
                  _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
                }
              }, errs => {
                _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
              });
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
              _this.isCheck = false;
            }
          } else {
            _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
          }
        } else {
          _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
        }
      }, err => {
        _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(_this.loadingController);
      });
    })();
  }

  ngOnInit() {
    this.instagram = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Instagram;
    this.twiter = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Twiter;
    this.facebook = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Facebook;
    this.telegram = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Telegram;
    this.youtube = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Youtube;
    this.pinterest = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Pinterest;
    this.linkedin = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Linkedin;
    this.twitch = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Twitch;
    this.aparat = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Aparat;
    this.discord = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Discord;
    this.tunerPlusVideo = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.TunerPlusRunnerVideo;
    this.form = this.fb.group({
      bore: [78.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100000)]],
      strok: [82, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100000)]],
      n: [4, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]]
    });
    this.form2 = this.fb.group({
      cubic: [1587.46, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000)]],
      rpm: [5000, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]],
      n: [4, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]],
      psi: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(500)]]
    });
    this.form3 = this.fb.group({
      d: [243, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]],
      rpm: [5000, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]],
      r: [3.36, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000)]]
    });
    this.form4 = this.fb.group({
      bore: [78.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]],
      strok: [82, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]],
      bore_gasket: [80, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]],
      strok_gasket: [0.65, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]],
      h_v: [37, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-1000000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000)]],
      p_v: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-1000000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]]
    });
    this.form5 = this.fb.group({
      r: [3.36, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]],
      r2: [2, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000)]]
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

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
        this.cubic_capacity = +(this.pi * this.form.value.bore * this.form.value.bore / 4 * this.form.value.strok / 1000 * this.form.value.n).toFixed(2);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onReset() {
    this.cubic_capacity = 1587.46;
    this.form.setValue({
      bore: 78.5,
      strok: 82,
      n: 4
    });
  }

  onCalc4() {
    if (!this.form4.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
        const gasket = +(this.pi * this.form4.value.bore_gasket * this.form4.value.bore_gasket / 4 * this.form4.value.strok_gasket / 1000);
        const motor = +(this.pi * this.form4.value.bore * this.form4.value.bore / 4 * this.form4.value.strok / 1000);
        const total_v = motor + gasket + +this.form4.value.h_v + +this.form4.value.p_v;
        const left_v = gasket + +this.form4.value.h_v + +this.form4.value.p_v;
        this.cr = +(total_v / left_v).toFixed(2);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onCalc5() {
    if (!this.form5.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
        let radius = this.pi * (this.form5.value.r / 2) * (this.form5.value.r / 2);
        let newR = radius / (this.form5.value.r2 / 2 * this.pi);
        this.runner_diameter2 = +(newR * 2).toFixed(2);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onReset4() {
    this.cr = 10.86;
    this.form4.setValue({
      bore: 78.5,
      strok: 82,
      bore_gasket: 80,
      strok_gasket: 0.65,
      h_v: 37,
      p_v: 0
    });
  }

  onReset5() {
    this.runner_diameter2 = 5.64; // this.rType = '1';

    this.form5.setValue({
      r: 3.36,
      r2: 2
    });
  }

  onCalc2() {
    if (!this.form2.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
        let r2 = 0;
        let r3 = 0;
        let bar = 1; // let p = 1.093;

        if (this.form2.value.psi > 0) {
          bar = this.form2.value.psi / 14.5038 + 1; // p = p * bar;

          r2 = this.form2.value.cubic * this.form2.value.rpm / this.pi / 2.54 / this.form2.value.n / (this.m / 1.093 * bar * 1.1);
          r3 = this.form2.value.cubic * this.form2.value.rpm / this.pi / 2.54 / this.form2.value.n / (this.m2 / 1.292 * bar * 1.1);
        } else {
          r2 = this.form2.value.cubic * this.form2.value.rpm / this.pi / 2.54 / this.form2.value.n / this.m;
          r3 = this.form2.value.cubic * this.form2.value.rpm / this.pi / 2.54 / this.form2.value.n / this.m2;
        }

        this.runner_diameter = +(Math.sqrt(r2) * 2).toFixed(2);
        this.runner_diameter_max = +(Math.sqrt(r3) * 2).toFixed(2);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onReset2() {
    this.runner_diameter = 3.36;
    this.runner_diameter_max = 3.51;
    this.m = 88200.0;
    this.m2 = 80850.0;
    this.form2.setValue({
      cubic: 1587.46,
      rpm: 5000,
      n: 4,
      psi: 0
    });
  }

  onCalc3() {
    if (!this.form3.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
        this.runner_length1 = +this.runnerlength(4).toFixed(2);
        this.runner_length2 = +this.runnerlength(8).toFixed(2);
        this.runner_length3 = +this.runnerlength(12).toFixed(2);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onReset3() {
    this.runner_length1 = 71.80;
    this.runner_length2 = 35.90;
    this.runner_length3 = 23.93;
    this.form3.setValue({
      d: 243,
      rpm: 5000,
      r: 3.36
    });
  }

  runnerlength(harmony) {
    return ((720 - this.form3.value.d) * this.v_sound / (12 * this.form3.value.rpm) + 0.003 * this.form3.value.r) / harmony * 100;
  }

  onInfo(type) {
    switch (type) {
      case 'bore':
        this.presentActiveAlertConfirm('قطر سیلندر یا پیستون بر حسب میلیمتر');
        break;

      case 'strok':
        this.presentActiveAlertConfirm('کورس پیستون برحسب میلیمتر');
        break;

      case 'bore_gasket':
        this.presentActiveAlertConfirm('قطر واشر سرسیلندر (قطر حفره ی سیلندر و پیستون) بر حسب میلیمتر');
        break;

      case 'strok_gasket':
        this.presentActiveAlertConfirm('ضخامت واشر سرسیلندر برحسب میلیمتر');
        break;

      case 'h_v':
        this.presentActiveAlertConfirm('حجم فرو رفتگی یا همان گودی محفظه ی احتراق سرسیلندر برحسب سانتیمتر مکعب (cc)');
        break;

      case 'p_v':
        this.presentActiveAlertConfirm('حجم فرو رفتگی یا برآمدگی سر پیستون برحسب سانتیمتر مکعب (cc). دقت شود که پیستون برآمده باشد باید عدد منفی وارد شود');
        break;

      case 'n':
        this.presentActiveAlertConfirm('تعداد سیلندر');
        break;

      case 'cubic':
        this.presentActiveAlertConfirm('حجم موتوری که محاسبه کرده اید بر حسب سانتیمتر مکعب');
        break;

      case 'rpm':
        this.presentActiveAlertConfirm('دور موتور مد نظر شما');
        break;

      case 'd':
        this.presentActiveAlertConfirm('دوریشن میل سوپاپ برحسب درجه');
        break;

      case 'r':
        this.presentActiveAlertConfirm('قطر رانر محاسبه شده برحسب سانتیمتر');
        break;

      case 'r2':
        this.presentActiveAlertConfirm('قطر رانر محاسبه شده برحسب سانتیمتر');
        break;

      case 'r3':
        this.presentActiveAlertConfirm('قطر رانر مد نظر برحسب سانتیمتر');
        break;

      case 'psi':
        this.presentActiveAlertConfirm('اگر موتور اتمسفر است عدد 0، در غیر این صورت میزان بوست برحسب PSI');
        break;

      default:
        break;
    }
  }

  presentActiveAlertConfirm(msg = '') {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
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

  checkURL() {
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + this.tunerPlusVideo + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoUrl() {
    const url = 'https://www.aparat.com/v/' + this.tunerPlusVideo;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

};

RunnerComponent.ctorParameters = () => [{
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
  type: _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_8__.SliderService
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_3__.CourseService
}];

RunnerComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent]
  }]
};
RunnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-runner',
  template: _runner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_runner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RunnerComponent);


/***/ }),

/***/ 13083:
/*!***************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/runner/runner.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RunnerModule": () => (/* binding */ RunnerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _runner_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runner-routing.module */ 95913);
/* harmony import */ var _runner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runner.component */ 42526);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let RunnerModule = class RunnerModule {
};
RunnerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_runner_component__WEBPACK_IMPORTED_MODULE_2__.RunnerComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _runner_routing_module__WEBPACK_IMPORTED_MODULE_1__.RunnerRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ]
    })
], RunnerModule);



/***/ }),

/***/ 85617:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/runner/runner.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ".h_iframe-aparat_embed_frame {\n  position: relative;\n}\n\n.h_iframe-aparat_embed_frame .ratio {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  border-radius: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.video-span {\n  display: block;\n  padding-top: 57%;\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bm5lci5jb21wb25lbnQuc2NzcyIsIi4uXFxfdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUNoQkU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBRG1CSjs7QUNoQkk7OztFQUdFLHdCQUFBO0VBQ0EsbUNBQUE7QURrQk47O0FDZkk7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QURpQk47O0FDZEk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7QURnQk47O0FDZEk7RUFBYywrQkFBQTtFQUFpQywwQkFBQTtBRGtCbkQ7O0FDakJJO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FEbUJOOztBQ2pCSTtFQUFXLGdDQUFBO0FEb0JmOztBQ25CSTtFQUFvQyx3QkFBQTtBRHNCeEM7O0FDckJJO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QUR1Qk47O0FDckJJO0VBQWtELG1DQUFBO0FEd0J0RCIsImZpbGUiOiJydW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi90aGVtZSc7XHJcblxyXG4uaF9pZnJhbWUtYXBhcmF0X2VtYmVkX2ZyYW1lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUgLnJhdGlvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUgaWZyYW1lIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi52aWRlby1zcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLXRvcDogNTclO1xyXG59XHJcblxyXG5AaW5jbHVkZSB0dW5lci1kYXJrLXRoZW1lO1xyXG4iLCIvLyBLZWVwIHRoZSBvcmlnaW5hbCBsaWdodCBjb2xvciBhdCBlYWNoIGNhbGwgc2l0ZS4gVG9rZW5zIGV4aXN0IG9ubHkgaW4gZGFyayBtb2RlLlxuQGZ1bmN0aW9uIHR1bmVyLWNvbG9yKCRyb2xlLCAkbGlnaHQpIHtcbiAgQHJldHVybiB2YXIoLS10dW5lci0jeyRyb2xlfSwgI3skbGlnaHR9KTtcbn1cblxuQG1peGluIHR1bmVyLWRhcmstdGhlbWUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gICAgLS10dW5lci1zdXJmYWNlOiAjMWMyMjMwO1xuICAgIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgICAtLXR1bmVyLXRleHQ6ICNlZGYxZjg7XG4gICAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgICAtLXR1bmVyLW92ZXJsYXk6IHJnYmEoMjgsIDM0LCA0OCwgMC45NSk7XG4gICAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAgIC0tdHVuZXItcHVycGxlLWJvcmRlcjogIzcyNTc5YjtcbiAgICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgICAtLXR1bmVyLWluZm8tYm9yZGVyOiAjNDY2YjlhO1xuICAgIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAgIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAgIC0tdHVuZXItd2FybmluZy1ib3JkZXI6ICM5Mzc0M2Q7XG4gICAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gICAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gICAgLS10dW5lci1zdWNjZXNzLWJvcmRlcjogIzQxN2Q2MDtcbiAgICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAgIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gICAgLS10dW5lci1kYW5nZXItYm9yZGVyOiAjOTg1MzY3O1xuICAgIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAgIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAgIC0tdHVuZXItdGVhbC1ib3JkZXI6ICM0MzdmN2M7XG5cbiAgICAvLyBOYXRpdmUgY29udHJvbHMgd2l0aG91dCBhbiBleHBsaWNpdCBsaWdodCBiYWNrZ3JvdW5kIG5lZWQgYSBkYXJrIHN1cmZhY2UgdG9vLlxuICAgIGlucHV0Om5vdChbdHlwZT0ncmFuZ2UnXSk6bm90KFt0eXBlPSdjaGVja2JveCddKTpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nZmlsZSddKSxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3Qge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1wYWdlKTsgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZDpub3QoW2NvbG9yXSksIGlvbi1saXN0LCBpb24taXRlbTpub3QoW2NvbG9yXSksIGlvbi1pdGVtLWRpdmlkZXI6bm90KFtjb2xvcl0pIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tbGlzdCB7IGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmRbY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1pdGVtW2NvbG9yPSdsaWdodGVzdCddLCBpb24tZmFiLWJ1dHRvbltjb2xvcj0nbGlnaHRlc3QnXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cbiAgICBpb24tdGV4dFtjb2xvcj0nZGFyayddLCBpb24tbGFiZWxbY29sb3I9J2RhcmsnXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 37045:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/runner/runner.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TunerPlus\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\"\r\n      >محاسبه قطر و طول رانر منیفولد</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"search()\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <Section *ngIf=\"!isCheck\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه حجم موتور</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"ellipse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر سیلندر (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"78.5\"\r\n                    formControlName=\"bore\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('bore')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"egg-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >کورس پیستون (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"82\"\r\n                    formControlName=\"strok\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('strok')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"discord\"\r\n                    slot=\"start\"\r\n                    name=\"ellipsis-horizontal-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >تعداد سیلندر</ion-label\r\n                  >\r\n                  <ion-input placeholder=\"4\" formControlName=\"n\" type=\"number\">\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('n')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </ion-card>\r\n          </form>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\"\r\n                >حجم موتور</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ cubic_capacity }}\r\n                  </ion-text>\r\n                  &nbsp;cm<sup>3</sup>\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <form [formGroup]=\"form4\" (ngSubmit)=\"onCalc4()\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه نسبت تراکم</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"ellipse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر سیلندر (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"78.5\"\r\n                    formControlName=\"bore\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('bore')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"egg-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >کورس پیستون (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"82\"\r\n                    formControlName=\"strok\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('strok')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"ellipse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر واشر (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"80\"\r\n                    formControlName=\"bore_gasket\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('bore_gasket')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"egg-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >ضخامت واشر (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"0.65\"\r\n                    formControlName=\"strok_gasket\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('strok_gasket')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"discord\"\r\n                    slot=\"start\"\r\n                    name=\"cube-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >حجم محفظه ی سرسیلندر</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"37\"\r\n                    formControlName=\"h_v\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('h_v')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"disc-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >حجم سر پیستون</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"0\"\r\n                    formControlName=\"p_v\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('p_v')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form4.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset4()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </ion-card>\r\n          </form>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\">نسبت تراکم (CR)</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ cr }}\r\n                  </ion-text>\r\n                  &nbsp;:&nbsp;1\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <form [formGroup]=\"form2\" (ngSubmit)=\"onCalc2()\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-subtitle class=\"text-center\"\r\n                  >این محاسبات برای موتور های تنفس طبیعی می\r\n                  باشد</ion-card-subtitle\r\n                >\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه قطر رانر</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cube-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >حجم موتور (cm<sup>3</sup>)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"1587\"\r\n                    formControlName=\"cubic\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('cubic')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"discord\"\r\n                    slot=\"start\"\r\n                    name=\"ellipsis-horizontal-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >تعداد سیلندر</ion-label\r\n                  >\r\n                  <ion-input placeholder=\"4\" formControlName=\"n\" type=\"number\">\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('n')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دور موتور (rpm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"5000\"\r\n                    formControlName=\"rpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('rpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <!-- <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"instagram\"\r\n                    slot=\"start\"\r\n                    name=\"rocket-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >بوست توربو (PSI)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"0\"\r\n                    formControlName=\"psi\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('psi')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item> -->\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form2.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset2()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </ion-card>\r\n          </form>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >برای دمای هوا بین 0 الی 50 درجه سلسیوس</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\">قطر رانر</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ runner_diameter + ' ~ ' + runner_diameter_max }}\r\n                  </ion-text>\r\n                  &nbsp;cm\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >این محاسبات برای موتور های تنفس طبیعی می\r\n                باشد</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >محاسبه رانر بیضی</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <!-- <ion-item>\r\n              <ion-label>نوع قطر ورودی</ion-label>\r\n              <ion-select [(ngModel)]=\"rType\" value=\"1\">\r\n                <ion-select-option value=\"1\">قطر کوچک</ion-select-option>\r\n                <ion-select-option value=\"2\">قطر بزرگ</ion-select-option>\r\n              </ion-select>\r\n            </ion-item> -->\r\n            <form [formGroup]=\"form5\" (ngSubmit)=\"onCalc5()\">\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"radio-button-on-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر رانر محاسبه شده (Cm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"3.36\"\r\n                    formControlName=\"r\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('r2')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"radio-button-on-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر رانر مد نظر (Cm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"2\"\r\n                    formControlName=\"r2\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('r3')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form5.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset5()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </form>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\"\r\n                >قطر ثانویه</ion-card-title\r\n              >\r\n              <!-- <ion-card-title class=\"text-center\">cm</ion-card-title> -->\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ runner_diameter2 }}\r\n                  </ion-text>\r\n                  &nbsp;cm\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <form [formGroup]=\"form3\" (ngSubmit)=\"onCalc3()\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-subtitle class=\"text-center\"\r\n                  >این محاسبات برای موتور های تنفس طبیعی\r\n                  میباشد</ion-card-subtitle\r\n                >\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه طول رانر</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دور موتور (rpm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"5000\"\r\n                    formControlName=\"rpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('rpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"radio-button-on-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر رانر</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"3.35\"\r\n                    formControlName=\"r\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('r')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"sync-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دوریشن میل سوپاپ</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"243\"\r\n                    formControlName=\"d\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('d')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form3.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset3()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </ion-card>\r\n          </form>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >هارمونی های ممکن برای بهبود رزونانس</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\">طول رانر</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ runner_length1 }}\r\n                  </ion-text>\r\n                  &nbsp;cm\r\n                </h2>\r\n                <h2>یا</h2>\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ runner_length2 }}\r\n                  </ion-text>\r\n                  &nbsp;cm\r\n                </h2>\r\n                <h2>یا</h2>\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ runner_length3 }}\r\n                  </ion-text>\r\n                  &nbsp;cm\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-label\r\n                >ویدیو آموزش استفاده از قطر و طول رانر تیونر پلاس</ion-label\r\n              >\r\n              <ion-icon\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"arrow-down-circle-outline\"\r\n              ></ion-icon>\r\n            </ion-item>\r\n\r\n            <div class=\"h_iframe-aparat_embed_frame\">\r\n              <span class=\"video-span\"></span\r\n              ><iframe\r\n                [src]=\"checkURL()\"\r\n                title=\"ویدیو آموزش استفاده از قطر و طول رانر تیونر پلاس ویژه اول آموز\"\r\n                allowfullscreen=\"true\"\r\n                webkitallowfullscreen=\"true\"\r\n                mozallowfullscreen=\"true\"\r\n              ></iframe>\r\n            </div>\r\n\r\n            <ion-item>\r\n              <ion-label>{{\r\n                \"ویدیو آموزش استفاده از قطر و طول رانر تیونر پلاس\"\r\n              }}</ion-label>\r\n              <a\r\n                class=\"decoration-none\"\r\n                [href]=\"checkVideoUrl()\"\r\n                target=\"_blank\"\r\n                title=\"ویدیو آموزش استفاده از قطر و طول رانر تیونر پلاس ویژه اول آموز\"\r\n                ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"icon-only\"\r\n                    name=\"download-outline\"\r\n                  ></ion-icon> </ion-button\r\n              ></a>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </Section>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_runner_runner_module_ts.js.map