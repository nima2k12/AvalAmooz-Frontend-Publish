"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_gear-ratio_gear-ratio_module_ts"],{

/***/ 67026:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/gear-ratio/gear-ratio-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GearRatioRoutingModule": () => (/* binding */ GearRatioRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _gear_ratio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gear-ratio.component */ 45607);




const routes = [{ path: '', component: _gear_ratio_component__WEBPACK_IMPORTED_MODULE_0__.GearRatioComponent }];
let GearRatioRoutingModule = class GearRatioRoutingModule {
};
GearRatioRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], GearRatioRoutingModule);



/***/ }),

/***/ 45607:
/*!**************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/gear-ratio/gear-ratio.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GearRatioComponent": () => (/* binding */ GearRatioComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _gear_ratio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gear-ratio.component.html?ngResource */ 46606);
/* harmony import */ var _gear_ratio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gear-ratio.component.scss?ngResource */ 71812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/service/site/Slider.service */ 79519);




/* eslint-disable eqeqeq */

/* eslint-disable @typescript-eslint/naming-convention */













let GearRatioComponent = class GearRatioComponent {
  constructor(fb, router, sanitizer, alertController, loadingController, siteService, toastController, courseService) {
    this.fb = fb;
    this.router = router;
    this.sanitizer = sanitizer;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.siteService = siteService;
    this.toastController = toastController;
    this.courseService = courseService;
    this.queryText = '';
    this.isShow = false;
    this.isCheck = true;
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
    this.GearRatioVideo = 'g0lPh';
    this.gearRatio = null;
    this.gearId = 1;
    this.carModelId = 1;
    this.carFactoryId = 1;
    this.isLoading = true;
    this.unitSelected = 'KmH';
    this.gearCountSelected = '5';
    this.gearCountSelectedNumber = 5;
    this.rimSizeSelected = '15';
    this.tireAspectRatioSelected = '65';
    this.tireSectionWidthSelected = '205';
    this.tireDiameter = 0;
    this.tireDiameterM = 0;
    this.pulsePerMile = 0;
    this.pulsePerKm = 0;
    this.teeth = 40;
    this.g1 = 0;
    this.g1rpm = 0;
    this.g2 = 0;
    this.g2rpm = 0;
    this.g3 = 0;
    this.g3rpm = 0;
    this.g4 = 0;
    this.g4rpm = 0;
    this.g5 = 0;
    this.g5rpm = 0;
    this.g6 = 0;
    this.g6rpm = 0;
    this.g7 = 0;
    this.g7rpm = 0;
    this.g8 = 0;
    this.gR = 0;
    this.resultRows = [];
    this.isShow = false;

    if (!_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
      this.router.navigateByUrl('/Account');
    }

    this.check();
  }

  get topGearSpeed() {
    return this.resultRows.length ? this.resultRows[this.resultRows.length - 1].speed : 0;
  }

  get maxForwardSpeed() {
    return Math.max(1, ...this.resultRows.map(row => row.speed));
  }

  updateResultRows() {
    const speeds = [this.g1, this.g2, this.g3, this.g4, this.g5, this.g6, this.g7, this.g8];
    const shiftRpms = [this.g1rpm, this.g2rpm, this.g3rpm, this.g4rpm, this.g5rpm, this.g6rpm, this.g7rpm];
    this.resultRows = speeds.slice(0, this.gearCountSelectedNumber).map((speed, index) => ({
      gear: index + 1,
      speed,
      shiftRpm: index < this.gearCountSelectedNumber - 1 ? shiftRpms[index] : null
    }));
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(_this.loadingController);

      _this.siteService.GetAllGearRatio().subscribe(res => {
        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === res.status) {
          _this.gearRatio = res.data;
          _this.isLoading = false;
        } else {
          _this.isLoading = false;
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(_this.toastController);
      });

      _this.siteService.GetTunerPlusById(20).subscribe(res => {
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
                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                          _this.isCheck = false;
                        } else {
                          _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                        }
                      }, errs => {
                        _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                      });
                    }
                  });

                  if (!found) {
                    _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                  }
                } else {
                  _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
                }
              }, errs => {
                _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
              });
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
              _this.isCheck = false;
            }
          } else {
            _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
          }
        } else {
          _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
        }
      }, err => {
        _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(_this.loadingController);
      });
    })();
  }

  getCityList() {
    return this.gearRatio.carModelNames.filter(e => e.carFactoryNameId == this.carFactoryId);
  }

  getGearList() {
    return this.gearRatio.gearBoxModelNames.filter(e => e.carModelNameId == this.carModelId);
  }

  changed3() {
    const model = this.gearRatio.gearBoxModelNames.find(e => e.id == this.gearId);

    if (model.g1 == '') {
      this.gearCountSelectedNumber = 3;
      this.gearCountSelected = '3';
    } else if (model.g2 == '') {
      this.gearCountSelectedNumber = 3;
      this.gearCountSelected = '3';
    } else if (model.g3 == '') {
      this.gearCountSelectedNumber = 3;
      this.gearCountSelected = '3';
    } else if (model.g4 == '') {
      this.gearCountSelectedNumber = 3;
      this.gearCountSelected = '3';
    } else if (model.g5 == '') {
      this.gearCountSelectedNumber = 4;
      this.gearCountSelected = '4';
    } else if (model.g6 == '') {
      this.gearCountSelectedNumber = 5;
      this.gearCountSelected = '5';
    } else if (model.g7 == '') {
      this.gearCountSelectedNumber = 6;
      this.gearCountSelected = '6';
    } else if (model.g8 == '') {
      this.gearCountSelectedNumber = 7;
      this.gearCountSelected = '7';
    } else if (model.g8 != '') {
      this.gearCountSelectedNumber = 8;
      this.gearCountSelected = '8';
    }

    this.form.setValue({
      g1: model.g1 == '' ? 1 : +model.g1,
      g2: model.g2 == '' ? 1 : +model.g2,
      g3: model.g3 == '' ? 1 : +model.g3,
      g4: model.g4 == '' ? 1 : +model.g4,
      g5: model.g5 == '' ? 1 : +model.g5,
      g6: model.g6 == '' ? 1 : +model.g6,
      g7: model.g7 == '' ? 1 : +model.g7,
      g8: model.g8 == '' ? 1 : +model.g8,
      gR: model.rev == '' ? 1 : +model.rev,
      axleRatio: model.def == '' ? 1 : +model.def,
      rpm: 6500
    });
  }

  goTop() {
    this.content.scrollToTop(3000);
  }

  forwardUrl(url) {
    window.location.href = url;
  }

  checkURL() {
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + this.GearRatioVideo + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoUrl() {
    const url = 'https://www.aparat.com/v/' + this.GearRatioVideo;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  reset() {
    this.unitSelected = 'KmH';
    this.gearCountSelected = '5';
    this.gearCountSelectedNumber = 5;
    this.rimSizeSelected = '15';
    this.tireAspectRatioSelected = '65';
    this.tireSectionWidthSelected = '205';
    this.form.setValue({
      g1: 3.06,
      g2: 1.63,
      g3: 1.00,
      g4: 0.70,
      g5: 0.50,
      g6: 0.45,
      g7: 0.41,
      g8: 0.38,
      gR: 2.56,
      axleRatio: 3.07,
      rpm: 6500
    });
  }

  onInfo(type) {
    switch (type) {
      case 'Teeth':
        this.presentActiveAlertConfirm('برای بدست آوردن تعداد پالس به سنسور سرعت تعداد دندونه های شفت سنسور سرعت را وارد کنید');
        break;

      default:
        break;
    }
  }

  teethChanged() {
    this.onCalcTeeth();
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

  unitChanged(nextUnit) {
    if (nextUnit !== 'KmH' && nextUnit !== 'MPH' || nextUnit === this.unitSelected) {
      return;
    }

    this.unitSelected = nextUnit;
    this.cmptrfform();
  }

  gearCountChanged() {
    this.gearCountSelectedNumber = +this.gearCountSelected;

    switch (this.gearCountSelectedNumber) {
      case 3:
        this.form.setValue({
          g1: this.form.value.g1,
          g2: this.form.value.g2,
          g3: this.form.value.g3,
          g4: 0.70,
          g5: 0.50,
          g6: 0.45,
          g7: 0.41,
          g8: 0.38,
          gR: this.form.value.gR,
          axleRatio: this.form.value.axleRatio,
          rpm: this.form.value.rpm
        });
        break;

      case 4:
        this.form.setValue({
          g1: this.form.value.g1,
          g2: this.form.value.g2,
          g3: this.form.value.g3,
          g4: this.form.value.g4,
          g5: 0.50,
          g6: 0.45,
          g7: 0.41,
          g8: 0.38,
          gR: this.form.value.gR,
          axleRatio: this.form.value.axleRatio,
          rpm: this.form.value.rpm
        });
        break;

      case 5:
        this.form.setValue({
          g1: this.form.value.g1,
          g2: this.form.value.g2,
          g3: this.form.value.g3,
          g4: this.form.value.g4,
          g5: this.form.value.g5,
          g6: 0.45,
          g7: 0.41,
          g8: 0.38,
          gR: this.form.value.gR,
          axleRatio: this.form.value.axleRatio,
          rpm: this.form.value.rpm
        });
        break;

      case 6:
        this.form.setValue({
          g1: this.form.value.g1,
          g2: this.form.value.g2,
          g3: this.form.value.g3,
          g4: this.form.value.g4,
          g5: this.form.value.g5,
          g6: this.form.value.g6,
          g7: 0.41,
          g8: 0.38,
          gR: this.form.value.gR,
          axleRatio: this.form.value.axleRatio,
          rpm: this.form.value.rpm
        });
        break;

      case 7:
        this.form.setValue({
          g1: this.form.value.g1,
          g2: this.form.value.g2,
          g3: this.form.value.g3,
          g4: this.form.value.g4,
          g5: this.form.value.g5,
          g6: this.form.value.g6,
          g7: this.form.value.g7,
          g8: 0.38,
          gR: this.form.value.gR,
          axleRatio: this.form.value.axleRatio,
          rpm: this.form.value.rpm
        });
        break;

      case 8:
        this.form.setValue({
          g1: this.form.value.g1,
          g2: this.form.value.g2,
          g3: this.form.value.g3,
          g4: this.form.value.g4,
          g5: this.form.value.g5,
          g6: this.form.value.g6,
          g7: this.form.value.g7,
          g8: this.form.value.g8,
          gR: this.form.value.gR,
          axleRatio: this.form.value.axleRatio,
          rpm: this.form.value.rpm
        });
        break;

      default:
        this.form.reset();
        break;
    }
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
    this.GearRatioVideo = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.GearRatioVideo;
    this.form = this.fb.group({
      g1: [3.06, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      g2: [1.63, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      g3: [1.00, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      g4: [0.70, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      g5: [0.50, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      g6: [0.45, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      g7: [0.41, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      g8: [0.38, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      gR: [2.56, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      axleRatio: [3.07, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      rpm: [6500, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(100), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(12000)]]
    });
  }

  onNavigate(url) {
    this.router.navigateByUrl(url);
  }

  onCancel() {
    this.showSearchbar = false;
  }

  onBack() {
    this.isShow = false;
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

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
        this.cmptrfform();
        this.isShow = true;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.AccessDeniedTunerPlusUrl);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onCalcTeeth() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tire_diameter = 1.0 * +_this3.tireSectionWidthSelected / 25.4 * (1.0 * +_this3.tireAspectRatioSelected / 50) + 1.0 * +_this3.rimSizeSelected; // tire_revs_mile = 5280/(3.1415926*form.tirediameter.value/12)

      const tire_revs_mile = 20168 / tire_diameter; // use non-rounded value

      _this3.pulsePerMile = Math.round(tire_revs_mile * _this3.form.value.axleRatio * _this3.teeth);
      _this3.pulsePerKm = Math.round(_this3.pulsePerMile * 1.609344);
    })();
  }

  cmptrfform() {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tire_diameter = 1.0 * +_this4.tireSectionWidthSelected / 25.4 * (1.0 * +_this4.tireAspectRatioSelected / 50) + 1.0 * +_this4.rimSizeSelected;
      _this4.tireDiameter = Math.round(10 * tire_diameter) / 10;
      _this4.tireDiameterM = +(_this4.tireDiameter * 0.0254).toFixed(3); // tire_revs_mile = 5280/(3.1415926*form.tirediameter.value/12)

      const tire_revs_mile = 20168 / tire_diameter; // use non-rounded value

      _this4.pulsePerMile = Math.round(tire_revs_mile * _this4.form.value.axleRatio * _this4.teeth);
      _this4.pulsePerKm = Math.round(_this4.pulsePerMile * 1.609344); // tire revs/mile is 5280/(PI*tire_diam/12)
      // engine revs/mile is axle_ratio * gear_ratio * 5280/(PI*tire_diam/12)
      // revs per hour is rpm * 60
      // speed at redline is

      const revlimit = _this4.form.value.rpm * 60;
      _this4.g1 = Math.round(revlimit / (_this4.form.value.axleRatio * _this4.form.value.g1 * tire_revs_mile));
      _this4.g1rpm = Math.round(_this4.form.value.g2 / _this4.form.value.g1 * _this4.form.value.rpm);
      _this4.g2 = Math.round(revlimit / (_this4.form.value.axleRatio * _this4.form.value.g2 * tire_revs_mile));
      _this4.g2rpm = Math.round(_this4.form.value.g3 / _this4.form.value.g2 * _this4.form.value.rpm);
      _this4.g3 = Math.round(revlimit / (_this4.form.value.axleRatio * _this4.form.value.g3 * tire_revs_mile));
      _this4.g3rpm = Math.round(_this4.form.value.g4 / _this4.form.value.g3 * _this4.form.value.rpm);
      _this4.g4 = Math.round(revlimit / (_this4.form.value.axleRatio * _this4.form.value.g4 * tire_revs_mile));
      _this4.g4rpm = Math.round(_this4.form.value.g5 / _this4.form.value.g4 * _this4.form.value.rpm);
      _this4.g5 = Math.round(revlimit / (_this4.form.value.axleRatio * _this4.form.value.g5 * tire_revs_mile));
      _this4.g5rpm = Math.round(_this4.form.value.g6 / _this4.form.value.g5 * _this4.form.value.rpm);
      _this4.g6 = Math.round(revlimit / (_this4.form.value.axleRatio * _this4.form.value.g6 * tire_revs_mile));
      _this4.g6rpm = Math.round(_this4.form.value.g7 / _this4.form.value.g6 * _this4.form.value.rpm);
      _this4.g7 = Math.round(revlimit / (_this4.form.value.axleRatio * _this4.form.value.g7 * tire_revs_mile));
      _this4.g7rpm = Math.round(_this4.form.value.g8 / _this4.form.value.g7 * _this4.form.value.rpm);
      _this4.g8 = Math.round(revlimit / (_this4.form.value.axleRatio * _this4.form.value.g8 * tire_revs_mile));
      _this4.gR = Math.round(-1 * revlimit / (_this4.form.value.axleRatio * _this4.form.value.gR * tire_revs_mile));

      if (_this4.unitSelected === 'KmH') {
        _this4.g1 = Math.round(_this4.g1 * 1.609344);
        _this4.g2 = Math.round(_this4.g2 * 1.609344);
        _this4.g3 = Math.round(_this4.g3 * 1.609344);
        _this4.g4 = Math.round(_this4.g4 * 1.609344);
        _this4.g5 = Math.round(_this4.g5 * 1.609344);
        _this4.g6 = Math.round(_this4.g6 * 1.609344);
        _this4.g7 = Math.round(_this4.g7 * 1.609344);
        _this4.g8 = Math.round(_this4.g8 * 1.609344);
        _this4.gR = Math.round(_this4.gR * 1.609344);
      }

      _this4.updateResultRows();
    })();
  }

};

GearRatioComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController
}, {
  type: _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_9__.SliderService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService
}];

GearRatioComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent]
  }]
};
GearRatioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-gear-ratio',
  template: _gear_ratio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_gear_ratio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], GearRatioComponent);


/***/ }),

/***/ 50586:
/*!***********************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/gear-ratio/gear-ratio.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GearRatioModule": () => (/* binding */ GearRatioModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _gear_ratio_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gear-ratio-routing.module */ 67026);
/* harmony import */ var _gear_ratio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gear-ratio.component */ 45607);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let GearRatioModule = class GearRatioModule {
};
GearRatioModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_gear_ratio_component__WEBPACK_IMPORTED_MODULE_2__.GearRatioComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _gear_ratio_routing_module__WEBPACK_IMPORTED_MODULE_1__.GearRatioRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ]
    })
], GearRatioModule);



/***/ }),

/***/ 71812:
/*!***************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/gear-ratio/gear-ratio.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".h_iframe-aparat_embed_frame {\n  position: relative;\n}\n\n.h_iframe-aparat_embed_frame .ratio {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  border-radius: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.video-span {\n  display: block;\n  padding-top: 57%;\n}\n\n:host {\n  --gr-surface: #fff;\n  --gr-text: #20232a;\n  --gr-muted: #656b76;\n  --gr-border: rgba(30, 34, 42, 0.1);\n  --gr-soft: #f5f6f8;\n}\n\n:host-context(.dark-theme) {\n  --gr-surface: #1b1d21;\n  --gr-text: #f4f5f7;\n  --gr-muted: #a9afb8;\n  --gr-border: rgba(255, 255, 255, 0.12);\n  --gr-soft: #26292e;\n}\n\n.gear-results {\n  width: min(1120px, 100% - 32px);\n  margin: 26px auto 52px;\n  color: var(--gr-text);\n}\n\n.results-hero {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 32px;\n  overflow: hidden;\n  padding: 34px 38px;\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 24px;\n  background: radial-gradient(circle at 5% 0%, rgba(209, 37, 44, 0.27), transparent 42%), linear-gradient(135deg, #25282d, #131518 72%);\n  box-shadow: 0 18px 42px rgba(12, 14, 17, 0.18);\n  color: #fff;\n}\n\n.results-hero::before {\n  content: \"\";\n  position: absolute;\n  inset: auto -90px -185px auto;\n  width: 370px;\n  height: 370px;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 50%;\n  box-shadow: 0 0 0 42px rgba(255, 255, 255, 0.025), 0 0 0 88px rgba(255, 255, 255, 0.018);\n  pointer-events: none;\n}\n\n.results-hero__copy,\n.top-speed {\n  position: relative;\n  z-index: 1;\n}\n\n.results-eyebrow,\n.panel-kicker {\n  color: var(--tuner-danger-text, #eb666a);\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n}\n\n.results-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  letter-spacing: 0;\n}\n\n.results-hero h1 {\n  margin: 12px 0 7px;\n  font-size: clamp(24px, 3vw, 36px);\n  font-weight: 850;\n}\n\n.results-hero p {\n  max-width: 610px;\n  margin: 0;\n  color: #bcc1c9;\n  font-size: 14px;\n  line-height: 1.9;\n}\n\n.results-hero__tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px;\n  margin-top: 24px;\n}\n\n.results-hero__tags span {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 11px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 100px;\n  background: rgba(255, 255, 255, 0.06);\n  color: #e7e9ec;\n  font-size: 12px;\n}\n\n.results-hero__tags ion-icon {\n  color: #f1787d;\n}\n\n.top-speed {\n  display: flex;\n  flex: 0 0 220px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 166px;\n  padding: 19px;\n  border: 1px solid rgba(255, 255, 255, 0.13);\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.07);\n  text-align: center;\n}\n\n.top-speed span,\n.top-speed small {\n  color: #c4c8cf;\n  font-size: 12px;\n}\n\n.top-speed strong {\n  margin: 1px 0 -4px;\n  color: #ff7378;\n  font-size: clamp(50px, 6vw, 70px);\n  font-weight: 850;\n  line-height: 1.2;\n}\n\n.results-panel {\n  padding: 25px 27px;\n  border: 1px solid var(--gr-border);\n  border-radius: 20px;\n  background: var(--gr-surface);\n  box-shadow: 0 10px 26px rgba(12, 14, 17, 0.055);\n}\n\n.speeds-panel {\n  margin-top: 18px;\n}\n\n.panel-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 22px;\n}\n\n.panel-heading h2 {\n  margin: 4px 0 0;\n  color: var(--gr-text);\n  font-size: 20px;\n  font-weight: 800;\n}\n\n.unit-picker {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  color: var(--gr-muted);\n  font-size: 12px;\n}\n\n.unit-picker select {\n  min-width: 96px;\n  min-height: 40px;\n  padding: 8px 10px;\n  border: 1px solid var(--gr-border);\n  border-radius: 10px;\n  background: var(--gr-soft);\n  color: var(--gr-text);\n  font-size: 13px;\n  cursor: pointer;\n}\n\n:host-context(.dark-theme) .unit-picker select {\n  color-scheme: dark;\n}\n\n.speed-table__head,\n.speed-row {\n  display: grid;\n  grid-template-columns: 155px minmax(0, 1fr) 175px;\n  align-items: center;\n  gap: 20px;\n}\n\n.speed-table__head {\n  padding: 0 17px 12px;\n  color: var(--gr-muted);\n  font-size: 11px;\n  font-weight: 700;\n}\n\n.speed-row {\n  min-height: 80px;\n  margin-bottom: 8px;\n  padding: 12px 17px;\n  border: 1px solid var(--gr-border);\n  border-radius: 13px;\n  background: var(--gr-soft);\n}\n\n.speed-row:last-child {\n  margin-bottom: 0;\n}\n\n.gear-name,\n.speed-value__label,\n.shift-value {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.gear-name {\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.gear-number {\n  display: inline-grid;\n  flex: 0 0 36px;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border-radius: 10px;\n  background: rgba(var(--ion-color-primary-rgb), 0.12);\n  color: var(--ion-color-primary);\n  direction: ltr;\n  font-size: 17px;\n  font-weight: 850;\n}\n\n.speed-value__label strong,\n.shift-value strong {\n  font-size: 21px;\n  font-weight: 800;\n  direction: ltr;\n  unicode-bidi: -webkit-isolate;\n  unicode-bidi: isolate;\n}\n\n.speed-value__label small,\n.shift-value small {\n  color: var(--gr-muted);\n  direction: ltr;\n  font-size: 11px;\n}\n\n.speed-track {\n  height: 5px;\n  margin-top: 9px;\n  overflow: hidden;\n  border-radius: 20px;\n  background: var(--gr-border);\n}\n\n.speed-track span {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, #9d1a23, #ee5960);\n}\n\n.shift-value {\n  justify-content: flex-start;\n}\n\n.muted-value {\n  color: var(--gr-muted);\n  font-size: 12px;\n}\n\n.speed-row--reverse {\n  border-style: dashed;\n  background: var(--gr-surface);\n}\n\n.speed-row--reverse .gear-number {\n  background: var(--gr-soft);\n  color: var(--gr-muted);\n}\n\n.table-note {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin: 17px 0 0;\n  color: var(--gr-muted);\n  font-size: 11px;\n  line-height: 1.7;\n}\n\n.table-note ion-icon {\n  flex: 0 0 auto;\n  font-size: 16px;\n}\n\n.results-details {\n  display: grid;\n  grid-template-columns: 1fr 1.25fr;\n  gap: 18px;\n  margin-top: 18px;\n}\n\n.panel-icon {\n  color: var(--ion-color-primary);\n  font-size: 24px;\n}\n\n.metric-list {\n  border-top: 1px solid var(--gr-border);\n}\n\n.metric {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 0;\n  border-bottom: 1px solid var(--gr-border);\n  color: var(--gr-muted);\n  font-size: 13px;\n}\n\n.metric strong {\n  color: var(--gr-text);\n  font-size: 17px;\n  font-weight: 800;\n}\n\n.metric strong small {\n  color: var(--gr-muted);\n  font-size: 11px;\n  font-weight: 400;\n}\n\n.teeth-control {\n  padding: 15px;\n  border: 1px solid var(--gr-border);\n  border-radius: 13px;\n  background: var(--gr-soft);\n}\n\n.teeth-control label {\n  display: block;\n  margin-bottom: 9px;\n  color: var(--gr-muted);\n  font-size: 12px;\n}\n\n.teeth-control__row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.teeth-control ion-input {\n  min-width: 0;\n  max-width: 110px;\n  height: 39px;\n  padding: 0 10px !important;\n  border: 1px solid var(--gr-border);\n  border-radius: 9px;\n  background: var(--gr-surface);\n  color: var(--gr-text);\n}\n\n.help-button {\n  --color: var(--gr-muted);\n  margin: 0;\n}\n\n.pulse-action {\n  --border-radius: 9px;\n  margin: 0 auto 0 0;\n  font-size: 12px;\n}\n\n.pulse-metrics {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-top: 13px;\n}\n\n.pulse-metrics div {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 14px;\n  border: 1px solid var(--gr-border);\n  border-radius: 12px;\n}\n\n.pulse-metrics span {\n  color: var(--gr-muted);\n  font-size: 11px;\n}\n\n.pulse-metrics strong {\n  color: var(--ion-color-primary);\n  direction: ltr;\n  text-align: right;\n  font-size: 23px;\n  font-weight: 800;\n}\n\n.results-back {\n  --border-color: var(--gr-border);\n  --border-radius: 11px;\n  --color: var(--gr-text);\n  display: block;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 22px auto 0;\n}\n\n@media (max-width: 740px) {\n  .gear-results {\n    width: calc(100% - 24px);\n    max-width: 580px;\n    margin-top: 14px;\n  }\n\n  .results-hero {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 20px;\n    padding: 25px 20px;\n  }\n\n  .top-speed {\n    min-height: 0;\n    flex-basis: auto;\n    align-items: flex-start;\n    padding: 13px 17px;\n    text-align: right;\n  }\n\n  .top-speed strong {\n    font-size: 48px;\n  }\n\n  .results-panel {\n    padding: 19px 14px;\n  }\n\n  .results-details {\n    grid-template-columns: 1fr;\n  }\n\n  .speed-table__head,\n.speed-row {\n    grid-template-columns: 75px minmax(0, 1fr) 94px;\n    gap: 8px;\n  }\n\n  .speed-table__head {\n    padding: 0 8px 10px;\n    font-size: 10px;\n  }\n\n  .speed-row {\n    min-height: 68px;\n    padding: 10px 8px;\n  }\n\n  .gear-name {\n    gap: 5px;\n    font-size: 10px;\n  }\n\n  .gear-number {\n    flex-basis: 29px;\n    width: 29px;\n    height: 29px;\n    font-size: 14px;\n  }\n\n  .speed-value__label,\n.shift-value {\n    gap: 4px;\n  }\n\n  .speed-value__label strong,\n.shift-value strong {\n    font-size: 17px;\n  }\n\n  .speed-value__label small,\n.shift-value small {\n    font-size: 9px;\n  }\n}\n\n@media (max-width: 390px) {\n  .unit-picker label,\n.gear-name > span:last-child {\n    display: none;\n  }\n\n  .speed-table__head,\n.speed-row {\n    grid-template-columns: 32px minmax(0, 1fr) 83px;\n  }\n\n  .pulse-metrics strong {\n    font-size: 18px;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlYXItcmF0aW8uY29tcG9uZW50LnNjc3MiLCIuLlxcX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxSUFBQTtFQUNBLDhDQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RkFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7O0VBRUUsa0JBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7O0VBRUUsd0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7O0VBRUUsY0FBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQ0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7QUFERjs7QUFJQTs7RUFFRSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTs7O0VBR0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvREFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0FBREY7O0FBSUE7O0VBRUUsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxvREFBQTtBQURGOztBQUlBO0VBQ0UsMkJBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0UsMEJBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0Usc0NBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBREY7O0FBSUE7RUFDRSx3QkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFERjs7RUFJQTtJQUNFLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7RUFERjs7RUFJQTtJQUNFLGFBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQURGOztFQUlBO0lBQ0UsZUFBQTtFQURGOztFQUlBO0lBQ0Usa0JBQUE7RUFERjs7RUFJQTtJQUNFLDBCQUFBO0VBREY7O0VBSUE7O0lBRUUsK0NBQUE7SUFDQSxRQUFBO0VBREY7O0VBSUE7SUFDRSxtQkFBQTtJQUNBLGVBQUE7RUFERjs7RUFJQTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUFERjs7RUFJQTtJQUNFLFFBQUE7SUFDQSxlQUFBO0VBREY7O0VBSUE7SUFDRSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQURGOztFQUlBOztJQUVFLFFBQUE7RUFERjs7RUFJQTs7SUFFRSxlQUFBO0VBREY7O0VBSUE7O0lBRUUsY0FBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRTs7SUFFRSxhQUFBO0VBRkY7O0VBS0E7O0lBRUUsK0NBQUE7RUFGRjs7RUFLQTtJQUNFLGVBQUE7RUFGRjtBQUNGOztBQ3JoQkU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBRHVoQko7O0FDcGhCSTs7O0VBR0Usd0JBQUE7RUFDQSxtQ0FBQTtBRHNoQk47O0FDbmhCSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBRHFoQk47O0FDbGhCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtBRG9oQk47O0FDbGhCSTtFQUFjLCtCQUFBO0VBQWlDLDBCQUFBO0FEc2hCbkQ7O0FDcmhCSTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBRHVoQk47O0FDcmhCSTtFQUFXLGdDQUFBO0FEd2hCZjs7QUN2aEJJO0VBQW9DLHdCQUFBO0FEMGhCeEM7O0FDemhCSTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FEMmhCTjs7QUN6aEJJO0VBQWtELG1DQUFBO0FENGhCdEQiLCJmaWxlIjoiZ2Vhci1yYXRpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3RoZW1lJztcclxuXHJcbi5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSAucmF0aW8ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSBpZnJhbWUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnZpZGVvLXNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiA1NyU7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAtLWdyLXN1cmZhY2U6ICNmZmY7XHJcbiAgLS1nci10ZXh0OiAjMjAyMzJhO1xyXG4gIC0tZ3ItbXV0ZWQ6ICM2NTZiNzY7XHJcbiAgLS1nci1ib3JkZXI6IHJnYmEoMzAsIDM0LCA0MiwgMC4xKTtcclxuICAtLWdyLXNvZnQ6ICNmNWY2Zjg7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcclxuICAtLWdyLXN1cmZhY2U6ICMxYjFkMjE7XHJcbiAgLS1nci10ZXh0OiAjZjRmNWY3O1xyXG4gIC0tZ3ItbXV0ZWQ6ICNhOWFmYjg7XHJcbiAgLS1nci1ib3JkZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XHJcbiAgLS1nci1zb2Z0OiAjMjYyOTJlO1xyXG59XHJcblxyXG4uZ2Vhci1yZXN1bHRzIHtcclxuICB3aWR0aDogbWluKDExMjBweCwgY2FsYygxMDAlIC0gMzJweCkpO1xyXG4gIG1hcmdpbjogMjZweCBhdXRvIDUycHg7XHJcbiAgY29sb3I6IHZhcigtLWdyLXRleHQpO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZXJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDMycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAzNHB4IDM4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA5KTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNSUgMCUsIHJnYmEoMjA5LCAzNywgNDQsIDAuMjcpLCB0cmFuc3BhcmVudCA0MiUpLCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjUyODJkLCAjMTMxNTE4IDcyJSk7XHJcbiAgYm94LXNoYWRvdzogMCAxOHB4IDQycHggcmdiYSgxMiwgMTQsIDE3LCAwLjE4KTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVybzo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IGF1dG8gLTkwcHggLTE4NXB4IGF1dG87XHJcbiAgd2lkdGg6IDM3MHB4O1xyXG4gIGhlaWdodDogMzcwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgNDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI1KSwgMCAwIDAgODhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDE4KTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVyb19fY29weSxcclxuLnRvcC1zcGVlZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWV5ZWJyb3csXHJcbi5wYW5lbC1raWNrZXIge1xyXG4gIGNvbG9yOiB0dW5lci1jb2xvcihkYW5nZXItdGV4dCwgI2ViNjY2YSk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcclxufVxyXG5cclxuLnJlc3VsdHMtZXllYnJvdyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDdweDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVybyBoMSB7XHJcbiAgbWFyZ2luOiAxMnB4IDAgN3B4O1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMjRweCwgM3Z3LCAzNnB4KTtcclxuICBmb250LXdlaWdodDogODUwO1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZXJvIHAge1xyXG4gIG1heC13aWR0aDogNjEwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjYmNjMWM5O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS45O1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZXJvX190YWdzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDlweDtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcblxyXG4ucmVzdWx0cy1oZXJvX190YWdzIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgcGFkZGluZzogN3B4IDExcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xyXG4gIGNvbG9yOiAjZTdlOWVjO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVyb19fdGFncyBpb24taWNvbiB7XHJcbiAgY29sb3I6ICNmMTc4N2Q7XHJcbn1cclxuXHJcbi50b3Atc3BlZWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMCAwIDIyMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxNjZweDtcclxuICBwYWRkaW5nOiAxOXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRvcC1zcGVlZCBzcGFuLFxyXG4udG9wLXNwZWVkIHNtYWxsIHtcclxuICBjb2xvcjogI2M0YzhjZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50b3Atc3BlZWQgc3Ryb25nIHtcclxuICBtYXJnaW46IDFweCAwIC00cHg7XHJcbiAgY29sb3I6ICNmZjczNzg7XHJcbiAgZm9udC1zaXplOiBjbGFtcCg1MHB4LCA2dncsIDcwcHgpO1xyXG4gIGZvbnQtd2VpZ2h0OiA4NTA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLnJlc3VsdHMtcGFuZWwge1xyXG4gIHBhZGRpbmc6IDI1cHggMjdweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1nci1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3Itc3VyZmFjZSk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI2cHggcmdiYSgxMiwgMTQsIDE3LCAwLjA1NSk7XHJcbn1cclxuXHJcbi5zcGVlZHMtcGFuZWwge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG59XHJcblxyXG4ucGFuZWwtaGVhZGluZyBoMiB7XHJcbiAgbWFyZ2luOiA0cHggMCAwO1xyXG4gIGNvbG9yOiB2YXIoLS1nci10ZXh0KTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnVuaXQtcGlja2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1nci1tdXRlZCk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udW5pdC1waWNrZXIgc2VsZWN0IHtcclxuICBtaW4td2lkdGg6IDk2cHg7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiA4cHggMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1nci1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3Itc29mdCk7XHJcbiAgY29sb3I6IHZhcigtLWdyLXRleHQpO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC51bml0LXBpY2tlciBzZWxlY3Qge1xyXG4gIGNvbG9yLXNjaGVtZTogZGFyaztcclxufVxyXG5cclxuLnNwZWVkLXRhYmxlX19oZWFkLFxyXG4uc3BlZWQtcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTU1cHggbWlubWF4KDAsIDFmcikgMTc1cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5zcGVlZC10YWJsZV9faGVhZCB7XHJcbiAgcGFkZGluZzogMCAxN3B4IDEycHg7XHJcbiAgY29sb3I6IHZhcigtLWdyLW11dGVkKTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnNwZWVkLXJvdyB7XHJcbiAgbWluLWhlaWdodDogODBweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgcGFkZGluZzogMTJweCAxN3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1nci1zb2Z0KTtcclxufVxyXG5cclxuLnNwZWVkLXJvdzpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZ2Vhci1uYW1lLFxyXG4uc3BlZWQtdmFsdWVfX2xhYmVsLFxyXG4uc2hpZnQtdmFsdWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5nZWFyLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZ2Vhci1udW1iZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gIGZsZXg6IDAgMCAzNnB4O1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEyKTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogODUwO1xyXG59XHJcblxyXG4uc3BlZWQtdmFsdWVfX2xhYmVsIHN0cm9uZyxcclxuLnNoaWZ0LXZhbHVlIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgdW5pY29kZS1iaWRpOiBpc29sYXRlO1xyXG59XHJcblxyXG4uc3BlZWQtdmFsdWVfX2xhYmVsIHNtYWxsLFxyXG4uc2hpZnQtdmFsdWUgc21hbGwge1xyXG4gIGNvbG9yOiB2YXIoLS1nci1tdXRlZCk7XHJcbiAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4uc3BlZWQtdHJhY2sge1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDlweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3ItYm9yZGVyKTtcclxufVxyXG5cclxuLnNwZWVkLXRyYWNrIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzlkMWEyMywgI2VlNTk2MCk7XHJcbn1cclxuXHJcbi5zaGlmdC12YWx1ZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ubXV0ZWQtdmFsdWUge1xyXG4gIGNvbG9yOiB2YXIoLS1nci1tdXRlZCk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uc3BlZWQtcm93LS1yZXZlcnNlIHtcclxuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1nci1zdXJmYWNlKTtcclxufVxyXG5cclxuLnNwZWVkLXJvdy0tcmV2ZXJzZSAuZ2Vhci1udW1iZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyLXNvZnQpO1xyXG4gIGNvbG9yOiB2YXIoLS1nci1tdXRlZCk7XHJcbn1cclxuXHJcbi50YWJsZS1ub3RlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA3cHg7XHJcbiAgbWFyZ2luOiAxN3B4IDAgMDtcclxuICBjb2xvcjogdmFyKC0tZ3ItbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcblxyXG4udGFibGUtbm90ZSBpb24taWNvbiB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ucmVzdWx0cy1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuMjVmcjtcclxuICBnYXA6IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogMThweDtcclxufVxyXG5cclxuLnBhbmVsLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4ubWV0cmljLWxpc3Qge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1nci1ib3JkZXIpO1xyXG59XHJcblxyXG4ubWV0cmljIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyLWJvcmRlcik7XHJcbiAgY29sb3I6IHZhcigtLWdyLW11dGVkKTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5tZXRyaWMgc3Ryb25nIHtcclxuICBjb2xvcjogdmFyKC0tZ3ItdGV4dCk7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5tZXRyaWMgc3Ryb25nIHNtYWxsIHtcclxuICBjb2xvcjogdmFyKC0tZ3ItbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4udGVldGgtY29udHJvbCB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1nci1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3Itc29mdCk7XHJcbn1cclxuXHJcbi50ZWV0aC1jb250cm9sIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgY29sb3I6IHZhcigtLWdyLW11dGVkKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50ZWV0aC1jb250cm9sX19yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxufVxyXG5cclxuLnRlZXRoLWNvbnRyb2wgaW9uLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgbWF4LXdpZHRoOiAxMTBweDtcclxuICBoZWlnaHQ6IDM5cHg7XHJcbiAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3ItYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3Itc3VyZmFjZSk7XHJcbiAgY29sb3I6IHZhcigtLWdyLXRleHQpO1xyXG59XHJcblxyXG4uaGVscC1idXR0b24ge1xyXG4gIC0tY29sb3I6IHZhcigtLWdyLW11dGVkKTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5wdWxzZS1hY3Rpb24ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDAgMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5wdWxzZS1tZXRyaWNzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG5cclxuLnB1bHNlLW1ldHJpY3MgZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA1cHg7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1nci1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi5wdWxzZS1tZXRyaWNzIHNwYW4ge1xyXG4gIGNvbG9yOiB2YXIoLS1nci1tdXRlZCk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4ucHVsc2UtbWV0cmljcyBzdHJvbmcge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5yZXN1bHRzLWJhY2sge1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1nci1ib3JkZXIpO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAtLWNvbG9yOiB2YXIoLS1nci10ZXh0KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiAyMnB4IGF1dG8gMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgLmdlYXItcmVzdWx0cyB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjRweCk7XHJcbiAgICBtYXgtd2lkdGg6IDU4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxuICB9XHJcblxyXG4gIC5yZXN1bHRzLWhlcm8ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjVweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRvcC1zcGVlZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgZmxleC1iYXNpczogYXV0bztcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMTNweCAxN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAudG9wLXNwZWVkIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgfVxyXG5cclxuICAucmVzdWx0cy1wYW5lbCB7XHJcbiAgICBwYWRkaW5nOiAxOXB4IDE0cHg7XHJcbiAgfVxyXG5cclxuICAucmVzdWx0cy1kZXRhaWxzIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLnNwZWVkLXRhYmxlX19oZWFkLFxyXG4gIC5zcGVlZC1yb3cge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NXB4IG1pbm1heCgwLCAxZnIpIDk0cHg7XHJcbiAgICBnYXA6IDhweDtcclxuICB9XHJcblxyXG4gIC5zcGVlZC10YWJsZV9faGVhZCB7XHJcbiAgICBwYWRkaW5nOiAwIDhweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNwZWVkLXJvdyB7XHJcbiAgICBtaW4taGVpZ2h0OiA2OHB4O1xyXG4gICAgcGFkZGluZzogMTBweCA4cHg7XHJcbiAgfVxyXG5cclxuICAuZ2Vhci1uYW1lIHtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmdlYXItbnVtYmVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDI5cHg7XHJcbiAgICB3aWR0aDogMjlweDtcclxuICAgIGhlaWdodDogMjlweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5zcGVlZC12YWx1ZV9fbGFiZWwsXHJcbiAgLnNoaWZ0LXZhbHVlIHtcclxuICAgIGdhcDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnNwZWVkLXZhbHVlX19sYWJlbCBzdHJvbmcsXHJcbiAgLnNoaWZ0LXZhbHVlIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG5cclxuICAuc3BlZWQtdmFsdWVfX2xhYmVsIHNtYWxsLFxyXG4gIC5zaGlmdC12YWx1ZSBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzOTBweCkge1xyXG4gIC51bml0LXBpY2tlciBsYWJlbCxcclxuICAuZ2Vhci1uYW1lID4gc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc3BlZWQtdGFibGVfX2hlYWQsXHJcbiAgLnNwZWVkLXJvdyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMycHggbWlubWF4KDAsIDFmcikgODNweDtcclxuICB9XHJcblxyXG4gIC5wdWxzZS1tZXRyaWNzIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSB0dW5lci1kYXJrLXRoZW1lO1xyXG4iLCIvLyBLZWVwIHRoZSBvcmlnaW5hbCBsaWdodCBjb2xvciBhdCBlYWNoIGNhbGwgc2l0ZS4gVG9rZW5zIGV4aXN0IG9ubHkgaW4gZGFyayBtb2RlLlxuQGZ1bmN0aW9uIHR1bmVyLWNvbG9yKCRyb2xlLCAkbGlnaHQpIHtcbiAgQHJldHVybiB2YXIoLS10dW5lci0jeyRyb2xlfSwgI3skbGlnaHR9KTtcbn1cblxuQG1peGluIHR1bmVyLWRhcmstdGhlbWUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gICAgLS10dW5lci1zdXJmYWNlOiAjMWMyMjMwO1xuICAgIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgICAtLXR1bmVyLXRleHQ6ICNlZGYxZjg7XG4gICAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgICAtLXR1bmVyLW92ZXJsYXk6IHJnYmEoMjgsIDM0LCA0OCwgMC45NSk7XG4gICAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAgIC0tdHVuZXItcHVycGxlLWJvcmRlcjogIzcyNTc5YjtcbiAgICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgICAtLXR1bmVyLWluZm8tYm9yZGVyOiAjNDY2YjlhO1xuICAgIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAgIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAgIC0tdHVuZXItd2FybmluZy1ib3JkZXI6ICM5Mzc0M2Q7XG4gICAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gICAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gICAgLS10dW5lci1zdWNjZXNzLWJvcmRlcjogIzQxN2Q2MDtcbiAgICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAgIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gICAgLS10dW5lci1kYW5nZXItYm9yZGVyOiAjOTg1MzY3O1xuICAgIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAgIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAgIC0tdHVuZXItdGVhbC1ib3JkZXI6ICM0MzdmN2M7XG5cbiAgICAvLyBOYXRpdmUgY29udHJvbHMgd2l0aG91dCBhbiBleHBsaWNpdCBsaWdodCBiYWNrZ3JvdW5kIG5lZWQgYSBkYXJrIHN1cmZhY2UgdG9vLlxuICAgIGlucHV0Om5vdChbdHlwZT0ncmFuZ2UnXSk6bm90KFt0eXBlPSdjaGVja2JveCddKTpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nZmlsZSddKSxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3Qge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1wYWdlKTsgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZDpub3QoW2NvbG9yXSksIGlvbi1saXN0LCBpb24taXRlbTpub3QoW2NvbG9yXSksIGlvbi1pdGVtLWRpdmlkZXI6bm90KFtjb2xvcl0pIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tbGlzdCB7IGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmRbY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1pdGVtW2NvbG9yPSdsaWdodGVzdCddLCBpb24tZmFiLWJ1dHRvbltjb2xvcj0nbGlnaHRlc3QnXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cbiAgICBpb24tdGV4dFtjb2xvcj0nZGFyayddLCBpb24tbGFiZWxbY29sb3I9J2RhcmsnXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 46606:
/*!***************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/gear-ratio/gear-ratio.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TunerPlus\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\">نسبت دنده (Gear Ratio)</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"search()\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed *ngIf=\"!isShow\">\r\n    <ion-row *ngIf=\"!isCheck\">\r\n      <ion-col\r\n        dir=\"rtl\"\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n      >\r\n        <ion-card>\r\n          <section *ngIf=\"gearRatio\">\r\n            <ion-item>\r\n              <ion-label>کمپانی</ion-label>\r\n              <ion-select [(ngModel)]=\"carFactoryId\" multiple=\"false\">\r\n                <ion-select-option\r\n                  (ionChange)=\"carFactoryId = p.id\"\r\n                  [value]=\"p.id\"\r\n                  *ngFor=\"let p of gearRatio.carFactoryNames\"\r\n                  >{{ p.name }}</ion-select-option\r\n                >\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>خودرو</ion-label>\r\n              <ion-select [(ngModel)]=\"carModelId\" multiple=\"false\">\r\n                <ion-select-option\r\n                  [value]=\"c.id\"\r\n                  *ngFor=\"let c of getCityList()\"\r\n                  >{{ c.name }}</ion-select-option\r\n                >\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>گیربکس</ion-label>\r\n              <ion-select [(ngModel)]=\"gearId\" multiple=\"false\"\r\n              (ionChange)=\"changed3()\">\r\n                <ion-select-option\r\n                  [value]=\"c.id\"\r\n                  *ngFor=\"let c of getGearList()\"\r\n                  >{{ c.name }}</ion-select-option\r\n                >\r\n              </ion-select>\r\n            </ion-item>\r\n          </section>\r\n          <ion-item>\r\n            <ion-label>سایز رینگ (inch)</ion-label>\r\n            <ion-select [(ngModel)]=\"rimSizeSelected\" value=\"15\">\r\n              <ion-select-option value=\"12\">12</ion-select-option>\r\n              <ion-select-option value=\"13\">13</ion-select-option>\r\n              <ion-select-option value=\"14\">14</ion-select-option>\r\n              <ion-select-option value=\"15\">15</ion-select-option>\r\n              <ion-select-option value=\"16\">16</ion-select-option>\r\n              <ion-select-option value=\"17\">17</ion-select-option>\r\n              <ion-select-option value=\"18\">18</ion-select-option>\r\n              <ion-select-option value=\"19\">19</ion-select-option>\r\n              <ion-select-option value=\"20\">20</ion-select-option>\r\n              <ion-select-option value=\"21\">21</ion-select-option>\r\n              <ion-select-option value=\"22\">22</ion-select-option>\r\n              <ion-select-option value=\"23\">23</ion-select-option>\r\n              <ion-select-option value=\"24\">24</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>نسبت ابعاد تایر (%)</ion-label>\r\n            <ion-select [(ngModel)]=\"tireAspectRatioSelected\" value=\"65\">\r\n              <ion-select-option value=\"90\">90</ion-select-option>\r\n              <ion-select-option value=\"85\">85</ion-select-option>\r\n              <ion-select-option value=\"80\">80</ion-select-option>\r\n              <ion-select-option value=\"75\">75</ion-select-option>\r\n              <ion-select-option value=\"70\">70</ion-select-option>\r\n              <ion-select-option value=\"65\">65</ion-select-option>\r\n              <ion-select-option value=\"60\">60</ion-select-option>\r\n              <ion-select-option value=\"55\">55</ion-select-option>\r\n              <ion-select-option value=\"50\">50</ion-select-option>\r\n              <ion-select-option value=\"45\">45</ion-select-option>\r\n              <ion-select-option value=\"40\">40</ion-select-option>\r\n              <ion-select-option value=\"35\">35</ion-select-option>\r\n              <ion-select-option value=\"30\">30</ion-select-option>\r\n              <ion-select-option value=\"25\">25</ion-select-option>\r\n              <ion-select-option value=\"20\">20</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>عرض تایر (mm)</ion-label>\r\n            <ion-select [(ngModel)]=\"tireSectionWidthSelected\" value=\"205\">\r\n              <ion-select-option value=\"165\">165</ion-select-option>\r\n              <ion-select-option value=\"175\">175</ion-select-option>\r\n              <ion-select-option value=\"185\">185</ion-select-option>\r\n              <ion-select-option value=\"195\">195</ion-select-option>\r\n              <ion-select-option value=\"205\">205</ion-select-option>\r\n              <ion-select-option value=\"215\">215</ion-select-option>\r\n              <ion-select-option value=\"225\">225</ion-select-option>\r\n              <ion-select-option value=\"245\">245</ion-select-option>\r\n              <ion-select-option value=\"255\">255</ion-select-option>\r\n              <ion-select-option value=\"265\">265</ion-select-option>\r\n              <ion-select-option value=\"275\">275</ion-select-option>\r\n              <ion-select-option value=\"285\">285</ion-select-option>\r\n              <ion-select-option value=\"295\">295</ion-select-option>\r\n              <ion-select-option value=\"305\">305</ion-select-option>\r\n              <ion-select-option value=\"315\">315</ion-select-option>\r\n              <ion-select-option value=\"345\">345</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>تعداد دنده</ion-label>\r\n            <ion-select\r\n              (ionChange)=\"gearCountChanged()\"\r\n              [(ngModel)]=\"gearCountSelected\"\r\n              value=\"5\"\r\n            >\r\n              <ion-select-option value=\"3\">3</ion-select-option>\r\n              <ion-select-option value=\"4\">4</ion-select-option>\r\n              <ion-select-option value=\"5\">5</ion-select-option>\r\n              <ion-select-option value=\"6\">6</ion-select-option>\r\n              <ion-select-option value=\"7\">7</ion-select-option>\r\n              <ion-select-option value=\"8\">8</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-title class=\"text-center\"\r\n                >محاسبه نسبت ضرایب دنده</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-list>\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"cog-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"floating\" color=\"light\">دنده 1</ion-label>\r\n                <ion-input\r\n                  placeholder=\"3.06\"\r\n                  formControlName=\"g1\"\r\n                  type=\"number\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"danger\"\r\n                  slot=\"start\"\r\n                  name=\"cog-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"floating\" color=\"light\">دنده 2</ion-label>\r\n                <ion-input\r\n                  placeholder=\"1.63\"\r\n                  formControlName=\"g2\"\r\n                  type=\"number\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"cog-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"floating\" color=\"light\">دنده 3</ion-label>\r\n                <ion-input\r\n                  placeholder=\"1.00\"\r\n                  formControlName=\"g3\"\r\n                  type=\"number\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\" *ngIf=\"gearCountSelectedNumber >= 4\">\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"cog-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"floating\" color=\"light\">دنده 4</ion-label>\r\n                <ion-input\r\n                  placeholder=\"0.70\"\r\n                  formControlName=\"g4\"\r\n                  type=\"number\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\" *ngIf=\"gearCountSelectedNumber >= 5\">\r\n                <ion-icon\r\n                  color=\"danger\"\r\n                  slot=\"start\"\r\n                  name=\"cog-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"floating\" color=\"light\">دنده 5</ion-label>\r\n                <ion-input\r\n                  placeholder=\"0.50\"\r\n                  formControlName=\"g5\"\r\n                  type=\"number\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\" *ngIf=\"gearCountSelectedNumber >= 6\">\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"cog-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"floating\" color=\"light\">دنده 6</ion-label>\r\n                <ion-input\r\n                  placeholder=\"0.45\"\r\n                  formControlName=\"g6\"\r\n                  type=\"number\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\" *ngIf=\"gearCountSelectedNumber >= 7\">\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"cog-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"floating\" color=\"light\">دنده 7</ion-label>\r\n                <ion-input\r\n                  placeholder=\"0.41\"\r\n                  formControlName=\"g7\"\r\n                  type=\"number\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\" *ngIf=\"gearCountSelectedNumber >= 8\">\r\n                <ion-icon\r\n                  color=\"danger\"\r\n                  slot=\"start\"\r\n                  name=\"cog-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"floating\" color=\"light\">دنده 8</ion-label>\r\n                <ion-input\r\n                  placeholder=\"0.38\"\r\n                  formControlName=\"g8\"\r\n                  type=\"number\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"cog-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"floating\" color=\"light\">دنده عقب</ion-label>\r\n                <ion-input\r\n                  placeholder=\"2.56\"\r\n                  formControlName=\"gR\"\r\n                  type=\"number\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"discord\"\r\n                  slot=\"start\"\r\n                  name=\"cog-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >ضریب دیفرانسیل</ion-label\r\n                >\r\n                <ion-input\r\n                  placeholder=\"3.07\"\r\n                  formControlName=\"axleRatio\"\r\n                  type=\"number\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"speedometer-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >دور موتور</ion-label\r\n                >\r\n                <ion-input\r\n                  placeholder=\"6500\"\r\n                  formControlName=\"rpm\"\r\n                  type=\"number\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"form.invalid\"\r\n            >\r\n              محاسبه\r\n            </ion-button>\r\n\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"clear\"\r\n              shape=\"round\"\r\n              color=\"warning\"\r\n              (click)=\"reset()\"\r\n            >\r\n              ریست\r\n            </ion-button>\r\n          </ion-card>\r\n        </form>\r\n\r\n        <br />\r\n\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label>ویدیو آموزش استفاده از ضریب دنده</ion-label>\r\n            <ion-icon\r\n              color=\"success\"\r\n              slot=\"start\"\r\n              name=\"arrow-down-circle-outline\"\r\n            ></ion-icon>\r\n          </ion-item>\r\n\r\n          <div class=\"h_iframe-aparat_embed_frame\">\r\n            <span class=\"video-span\"></span\r\n            ><iframe\r\n              [src]=\"checkURL()\"\r\n              title=\"ویدیو آموزش استفاده از ضریب دنده تیونر پلاس ویژه اول آموز\"\r\n              allowfullscreen=\"true\"\r\n              webkitallowfullscreen=\"true\"\r\n              mozallowfullscreen=\"true\"\r\n            ></iframe>\r\n          </div>\r\n\r\n          <ion-item>\r\n            <ion-label>{{ \"ویدیو آموزش استفاده از ضریب دنده\" }}</ion-label>\r\n            <a\r\n              class=\"decoration-none\"\r\n              [href]=\"checkVideoUrl()\"\r\n              target=\"_blank\"\r\n              title=\"ویدیو آموزش استفاده از ضریب دنده تیونر پلاس ویژه اول آموز\"\r\n              ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"icon-only\"\r\n                  name=\"download-outline\"\r\n                ></ion-icon> </ion-button\r\n            ></a>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <section class=\"gear-results\" *ngIf=\"isShow\" dir=\"rtl\">\r\n    <div class=\"results-hero\">\r\n      <div class=\"results-hero__copy\">\r\n        <span class=\"results-eyebrow\"><ion-icon name=\"speedometer-outline\"></ion-icon> نتیجه محاسبه</span>\r\n        <h1>نقشه سرعت دنده‌ها</h1>\r\n        <p>سرعت هر دنده در دور موتور انتخابی و دور موتور پس از تعویض به دنده بعد</p>\r\n        <div class=\"results-hero__tags\">\r\n          <span><ion-icon name=\"pulse-outline\"></ion-icon> {{ form.value.rpm | number:'1.0-0' }} RPM</span>\r\n          <span><ion-icon name=\"settings-outline\"></ion-icon> دیفرانسیل {{ form.value.axleRatio }}</span>\r\n          <span><ion-icon name=\"car-sport-outline\"></ion-icon> {{ gearCountSelectedNumber }} دنده</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"top-speed\">\r\n        <span>سرعت در دنده {{ gearCountSelectedNumber }}</span>\r\n        <strong>{{ topGearSpeed | number:'1.0-0' }}</strong>\r\n        <small>{{ unitSelected === 'KmH' ? 'کیلومتر بر ساعت' : 'مایل بر ساعت' }}</small>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"results-panel speeds-panel\">\r\n      <div class=\"panel-heading\">\r\n        <div>\r\n          <span class=\"panel-kicker\">GEAR SPEED MAP</span>\r\n          <h2>سرعت و دور تعویض</h2>\r\n        </div>\r\n        <div class=\"unit-picker\">\r\n          <label for=\"gear-speed-unit\">واحد سرعت</label>\r\n          <select id=\"gear-speed-unit\" aria-label=\"واحد سرعت\" dir=\"ltr\"\r\n            [value]=\"unitSelected\" (change)=\"unitChanged($any($event.target).value)\">\r\n            <option value=\"KmH\">km/h</option>\r\n            <option value=\"MPH\">mph</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"speed-table\" role=\"table\" aria-label=\"سرعت و دور تعویض دنده‌ها\">\r\n        <div class=\"speed-table__head\" role=\"row\">\r\n          <span role=\"columnheader\">دنده</span>\r\n          <span role=\"columnheader\">سرعت در {{ form.value.rpm | number:'1.0-0' }} RPM</span>\r\n          <span role=\"columnheader\">دور پس از تعویض</span>\r\n        </div>\r\n        <div class=\"speed-row\" role=\"row\" *ngFor=\"let row of resultRows\">\r\n          <div class=\"gear-name\" role=\"cell\">\r\n            <span class=\"gear-number\">{{ row.gear }}</span>\r\n            <span>دنده {{ row.gear }}</span>\r\n          </div>\r\n          <div class=\"speed-value\" role=\"cell\">\r\n            <div class=\"speed-value__label\"><strong>{{ row.speed | number:'1.0-0' }}</strong><small>{{ unitSelected === 'KmH' ? 'km/h' : 'mph' }}</small></div>\r\n            <div class=\"speed-track\" aria-hidden=\"true\"><span [style.width.%]=\"row.speed / maxForwardSpeed * 100\"></span></div>\r\n          </div>\r\n          <div class=\"shift-value\" role=\"cell\">\r\n            <ng-container *ngIf=\"row.shiftRpm !== null; else noNextGear\">\r\n              <strong>{{ row.shiftRpm | number:'1.0-0' }}</strong><small>RPM</small>\r\n            </ng-container>\r\n            <ng-template #noNextGear><span class=\"muted-value\">آخرین دنده</span></ng-template>\r\n          </div>\r\n        </div>\r\n        <div class=\"speed-row speed-row--reverse\" role=\"row\">\r\n          <div class=\"gear-name\" role=\"cell\"><span class=\"gear-number\">R</span><span>دنده عقب</span></div>\r\n          <div class=\"speed-value\" role=\"cell\"><div class=\"speed-value__label\"><strong>{{ gR | number:'1.0-0' }}</strong><small>{{ unitSelected === 'KmH' ? 'km/h' : 'mph' }}</small></div></div>\r\n          <div class=\"shift-value\" role=\"cell\"><span class=\"muted-value\">—</span></div>\r\n        </div>\r\n      </div>\r\n      <p class=\"table-note\"><ion-icon name=\"information-circle-outline\"></ion-icon> دور پس از تعویض، دور موتور در شروع دنده بعدی است؛ در آخرین دنده مقداری ندارد.</p>\r\n    </div>\r\n\r\n    <div class=\"results-details\">\r\n      <div class=\"results-panel tire-panel\">\r\n        <div class=\"panel-heading\">\r\n          <div><span class=\"panel-kicker\">TIRE DATA</span><h2>مشخصات تایر</h2></div>\r\n          <ion-icon class=\"panel-icon\" name=\"disc-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"metric-list\">\r\n          <div class=\"metric\"><span>قطر تایر</span><strong>{{ tireDiameter }} <small>اینچ</small></strong></div>\r\n          <div class=\"metric\"><span>قطر تایر</span><strong>{{ tireDiameterM }} <small>متر</small></strong></div>\r\n          <div class=\"metric\"><span>سایز انتخابی</span><strong dir=\"ltr\">{{ tireSectionWidthSelected }}/{{ tireAspectRatioSelected }} R{{ rimSizeSelected }}</strong></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"results-panel pulse-panel\">\r\n        <div class=\"panel-heading\">\r\n          <div><span class=\"panel-kicker\">SPEED SENSOR</span><h2>پالس سنسور سرعت</h2></div>\r\n          <ion-icon class=\"panel-icon\" name=\"pulse-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"teeth-control\">\r\n          <label for=\"gear-teeth\">تعداد دندانه شفت</label>\r\n          <div class=\"teeth-control__row\">\r\n            <ion-input id=\"gear-teeth\" aria-label=\"تعداد دندانه شفت\" [(ngModel)]=\"teeth\" min=\"1\" max=\"1000\" type=\"number\"></ion-input>\r\n            <ion-button fill=\"clear\" class=\"help-button\" (click)=\"onInfo('Teeth')\" aria-label=\"راهنمای تعداد دندانه\">\r\n              <ion-icon slot=\"icon-only\" name=\"information-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button class=\"pulse-action\" (click)=\"teethChanged()\">محاسبه پالس</ion-button>\r\n          </div>\r\n        </div>\r\n        <div class=\"pulse-metrics\">\r\n          <div><span>پالس بر کیلومتر</span><strong>{{ pulsePerKm | number:'1.0-0' }}</strong></div>\r\n          <div><span>پالس بر مایل</span><strong>{{ pulsePerMile | number:'1.0-0' }}</strong></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-button class=\"results-back\" fill=\"outline\" (click)=\"onBack()\">\r\n      <ion-icon slot=\"start\" name=\"arrow-forward-outline\"></ion-icon>\r\n      بازگشت به ورودی‌ها\r\n    </ion-button>\r\n  </section>\r\n  <app-footer></app-footer>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"share-social-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"end\">\r\n      <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"instagram\">\r\n        <a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ instagram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-instagram\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"instagram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twitch }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitch\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"discord\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ discord }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-discord\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ youtube }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-youtube\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ pinterest }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-pinterest\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"facebook\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ facebook }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-facebook\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twiter }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitter\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ linkedin }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-linkedin\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"telegram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ telegram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"paper-plane-outline\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"lightest\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ aparat }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            src=\"/assets/icon/logo-aparat.svg\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_gear-ratio_gear-ratio_module_ts.js.map